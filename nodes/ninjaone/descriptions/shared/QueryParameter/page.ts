import type {
	DeclarativeRestApiSettings,
	IExecutePaginationFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

async function paginateById(
	this: IExecutePaginationFunctions,
	requestOptions: DeclarativeRestApiSettings.ResultOptions,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', false) as boolean;
	const limit = returnAll ? Infinity : (this.getNodeParameter('limit', 50) as number);
	const items: INodeExecutionData[] = [];
	let after: string | number | undefined;

	while (items.length < limit) {
		requestOptions.options.qs = {
			...requestOptions.options.qs,
			pageSize: Math.min(100, limit - items.length),
			...(after === undefined ? {} : { after }),
		};
		const page = await this.makeRoutingRequest(requestOptions);
		if (page.length === 0) break;

		items.push(...page.slice(0, limit - items.length));
		if (items.length >= limit) break;

		const nextAfter = page[page.length - 1].json.id;
		if (
			(typeof nextAfter !== 'number' && typeof nextAfter !== 'string') ||
			String(nextAfter) === String(after)
		) {
			throw new Error('Cannot paginate NinjaOne results: missing or repeated last item ID');
		}
		after = nextAfter;
	}

	return items;
}

export const pageQueryParameters: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		routing: {
			send: { paginate: true },
			operations: { pagination: paginateById },
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		typeOptions: { minValue: 1, numberPrecision: 0 },
		description: 'Max number of results to return',
		displayOptions: { show: { returnAll: [false] } },
	},
];

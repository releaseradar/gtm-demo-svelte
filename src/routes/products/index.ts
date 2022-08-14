import items from '$lib/items';

import type { RequestHandler } from './__types';
import type { Item } from '$lib/items';

export const GET: RequestHandler<{ items: Item[] }> = () => {
	return {
		status: 200,
		headers: {},
		body: { items }
	};
};

import items from '$lib/items';

import type { RequestHandler } from './__types/[id]';

export const GET: RequestHandler = ({ params }) => {
	const item = items.find((item) => item.item_id === params.id);

	if (item) {
		return {
			status: 200,
			headers: {},
			body: { item }
		};
	}

	return {
		status: 404
	};
};

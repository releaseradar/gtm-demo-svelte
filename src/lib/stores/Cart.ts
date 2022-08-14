import { writable } from 'svelte/store';

import type { Item } from '$lib/models';

const Cart = writable<Item[]>([]);

export default Cart;

export function addToCart(item: Item) {
	Cart.update((store) => {
		store.push(item);
		return store;
	});
}

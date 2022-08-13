import { readable } from 'svelte/store';

type Item = {
	id: string;
	name: string;
};

const initialData: Record<string, Item> = {
	'662991913': {
		id: '662991913',
		name: 'Lux Decor Collection Gusseted Queen Pillows Set of 2 - Comfortable Breathable Bed Pillows for Sleeping (18x26)'
	}
};

export const items = readable(initialData);

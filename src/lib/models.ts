// Recommended object structure
// from https://developers.google.com/analytics/devguides/collection/ga4/ecommerce?client_type=gtm
export type Item = {
	item_id: string;
	item_name: string;
	affiliation: string;
	coupon: string;
	currency: 'USD';
	discount: number;
	index: number;
	item_brand: string;
	item_category: string;
	item_category2: string;
	item_category3: string;
	item_category4: string;
	item_category5: string;
	item_list_id: string;
	item_list_name: string;
	item_variant: string;
	location_id: string;
	price: number;
	quantity: number;
};

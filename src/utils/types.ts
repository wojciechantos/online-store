export type Product = {
	id: number;
	attributes: {
		category: string;
		company: string;
		createdAt: string;
		description: string;
		featured: boolean;
		image: string;
		price: string;
		publishedAt: string;
		shipping: boolean;
		title: string;
		updatedAt: string;
		colors: string[];
	};
};

export type Pagination = {
	page: number;
	pageCount: number;
	pageSize: number;
	total: number;
};

export type ProductsMeta = {
	categories: string[];
	companies: string[];
	pagination: Pagination;
};

export type ProductsResponse = {
	data: Product[];
	meta: ProductsMeta;
};

export type Params = {
	search?: string;
	category?: string;
	company?: string;
	order?: string;
	price?: string;
	shipping?: string;
	page?: number;
};

export type ProductsResponseWithParams = ProductsResponse & { params: Params };

export type FormItemBaseProps = {
	name: string;
	label?: string;
	defaultValue?: string;
};

export type FormInputProps = FormItemBaseProps & { type: string };
export type SelectInputProps = FormItemBaseProps & { options: string[] };

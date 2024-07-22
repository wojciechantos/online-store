import { Link, useLoaderData } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { formatAsDollars, type ProductsResponse } from '@/utils';

export default function ProductsList() {
	const { data: products } = useLoaderData() as ProductsResponse;

	return (
		<div className='mt-12 grid gap-y-8'>
			{products.map(
				({
					id: productId,
					attributes: { title, price, image, company },
				}) => {
					const dollarsAmount = formatAsDollars(price);

					return (
						<Link
							key={productId}
							to={`/products/${productId.toString()}`}
						>
							<Card>
								<CardContent className='p-8 gap-y-4 grid md:grid-cols-3 '>
									<img
										src={image}
										alt={title}
										className='h-64 w-full md:h-48  md:w-48  rounded-md object-cover'
									/>
									<div>
										<h2 className='text-xl font-semibold capitalize'>
											{title}
										</h2>
										<h4>{company}</h4>
									</div>
									<p className='text-primary md:ml-auto'>
										{dollarsAmount}
									</p>
								</CardContent>
							</Card>
						</Link>
					);
				}
			)}
		</div>
	);
}

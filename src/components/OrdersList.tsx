import { useLoaderData } from 'react-router-dom';
import {
	Table,
	TableRow,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableCaption,
} from '@/components/ui/table';
import { type OrdersResponse } from '@/utils';

export default function OrdersList() {
	const { data: orders, meta } = useLoaderData() as OrdersResponse;

	return (
		<div className='mt-16'>
			<h4 className='mb-4 capitalize'>
				total orders : {meta.pagination.total}
			</h4>
			<Table>
				<TableCaption>A list of your recent orders.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Address</TableHead>
						<TableHead className='w-[100px]'>Products</TableHead>
						<TableHead className='w-[100px]'>Cost</TableHead>
						<TableHead>Date</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{orders.map(
						({
							id,
							attributes: {
								name,
								address,
								createdAt,
								orderTotal,
								numItemsInCart,
							},
						}) => {
							return (
								<TableRow key={id}>
									<TableCell>{name}</TableCell>
									<TableCell>{address}</TableCell>
									<TableCell className='text-center'>
										{numItemsInCart}
									</TableCell>
									<TableCell>{orderTotal}</TableCell>
									<TableCell>
										{new Date(createdAt).toDateString()}
									</TableCell>
								</TableRow>
							);
						}
					)}
				</TableBody>
			</Table>
		</div>
	);
}

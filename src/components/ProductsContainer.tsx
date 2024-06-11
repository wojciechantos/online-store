import { useState } from 'react';
import { Button } from './ui/button';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { ProductsResponse } from '@/utils';
import { Separator } from './ui/separator';
import { LayoutGrid, List } from 'lucide-react';
import { useLoaderData } from 'react-router-dom';

function ProductsContainer() {
	const { meta } = useLoaderData() as ProductsResponse;
	const totalProducts = meta.pagination.total;
	const [layout, setLayout] = useState<'grid' | 'list'>('grid');

	const handleToggleLayout = () => {
		if (layout === 'grid') {
			setLayout('list');
		} else if (layout === 'list') {
			setLayout('grid');
		}
	};

	return (
		<>
			<section>
				<div className='flex justify-between items-center mt-8'>
					<h4 className='font-medium text-md'>
						{totalProducts} product{totalProducts > 1 && 's'}
					</h4>
					<div className='flex gap-x-4'>
						<Button
							size='icon'
							onClick={handleToggleLayout}
							variant={layout === 'grid' ? 'default' : 'ghost'}
						>
							<LayoutGrid />
						</Button>
						<Button
							size='icon'
							onClick={handleToggleLayout}
							variant={layout === 'list' ? 'default' : 'ghost'}
						>
							<List />
						</Button>
					</div>
				</div>
				<Separator className='mt-4' />
			</section>
			<div>
				{totalProducts === 0 ? (
					<h5 className='text-2xl mt-16'>
						Sorry, no products matched your search...
					</h5>
				) : layout === 'grid' ? (
					<ProductsGrid />
				) : (
					<ProductsList />
				)}
			</div>
		</>
	);
}

export default ProductsContainer;

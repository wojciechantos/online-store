import { useLoaderData, useLocation } from 'react-router-dom';
import {
	Pagination,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationContent,
	PaginationPrevious,
} from '@/components/ui/pagination';
import {
	constructUrl,
	constructPrevOrNextUrl,
	ProductsResponseWithParams,
} from '@/utils';

function PaginationContainer() {
	const { meta } = useLoaderData() as ProductsResponseWithParams;
	const { pageCount, page } = meta.pagination;
	const { search, pathname } = useLocation();

	const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

	if (pageCount < 2) {
		return null;
	}

	const renderPagination = pages.map((pageNumber) => {
		const isActive = pageNumber === page;
		const url = constructUrl({ pageNumber, search, pathname });

		return (
			<PaginationItem key={pageNumber}>
				<PaginationLink to={url} isActive={isActive}>
					{pageNumber}
				</PaginationLink>
			</PaginationItem>
		);
	});

	const { prevUrl, nextUrl } = constructPrevOrNextUrl({
		currentPage: page,
		pageCount,
		search,
		pathname,
	});

	return (
		<Pagination className='mt-16'>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious to={prevUrl} />
				</PaginationItem>
				{renderPagination}
				<PaginationItem>
					<PaginationNext to={nextUrl} />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}

export default PaginationContainer;

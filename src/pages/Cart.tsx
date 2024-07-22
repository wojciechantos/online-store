import { Link } from 'react-router-dom';
import { useAppSelector } from '@/hooks';
import { Button } from '@/components/ui/button';
import { CartItemsList, SectionTitle, CartTotals } from '@/components';

function Cart() {
	const user = useAppSelector((state) => state.userState.user);

	const numItemsInCart = useAppSelector(
		(state) => state.cartState.numItemsInCart
	);

	if (numItemsInCart === 0) {
		return <SectionTitle text='Empty cart ☹️' />;
	}

	const linkComponent = user ? (
		<Link to='/checkout'>Proceed to checkout</Link>
	) : (
		<Link to='/login'>Please Login</Link>
	);

	return (
		<>
			<SectionTitle text='Shopping Cart' />
			<div className='mt-8 grid gap-8  lg:grid-cols-12'>
				<div className='lg:col-span-8'>
					<CartItemsList />
				</div>
				<div className='lg:col-span-4 lg:pl-4'>
					<CartTotals />
					<Button asChild className='mt-8 w-full'>
						{linkComponent}
					</Button>
				</div>
			</div>
		</>
	);
}

export default Cart;

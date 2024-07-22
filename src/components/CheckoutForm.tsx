import { ActionFunction, Form, redirect } from 'react-router-dom';
import { ReduxStore } from '@/store';
import FormInput from '@/components/FormInput';
import { toast } from '@/components/ui/use-toast';
import SubmitButton from '@/components/SubmitButton';
import { clearCart } from '@/features/cart/cartSlice';
import { customFetch, formatAsDollars, type Checkout } from '@/utils';

export const action =
	(store: ReduxStore): ActionFunction =>
	async ({ request }): Promise<Response | null> => {
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const address = formData.get('address') as string;

		if (!name || !address) {
			toast({ description: 'Please fill out all fields.' });

			return null;
		}

		const { user } = store.getState().userState;

		if (!user) {
			toast({ description: 'Please login to place an order.' });
			return redirect('/login');
		}

		const { cartItems, orderTotal, numItemsInCart } =
			store.getState().cartState;

		const info: Checkout = {
			name,
			address,
			chargeTotal: orderTotal,
			orderTotal: formatAsDollars(orderTotal),
			cartItems,
			numItemsInCart,
		};

		try {
			await customFetch.post(
				'/orders',
				{ data: info },
				{
					headers: {
						Authorization: `Bearer ${user.jwt}`,
					},
				}
			);
			store.dispatch(clearCart());
			toast({ description: 'Order placed successfully!' });
			return redirect('/orders');
		} catch (error) {
			console.error(error);
			toast({ description: 'Order failed!' });
			return null;
		}
	};

export default function CheckoutForm() {
	return (
		<Form method='POST' className='flex flex-col gap-y-4'>
			<h4 className='font-medium text-xl mb-4'>Shipping Information</h4>
			<FormInput label='first name' name='name' type='text' />
			<FormInput label='address' name='address' type='text' />
			<SubmitButton text='Place Your Order' className='mt-4' />
		</Form>
	);
}

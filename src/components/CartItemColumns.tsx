import { Button } from './ui/button';
import { useAppDispatch } from '@/hooks';
import { formatAsDollars } from '@/utils';
import { editItem, removeItem } from '@/features/cart/cartSlice';
import SelectProductAmount, { Mode } from './SelectProductAmount';

export function FirstColumn({
	title,
	image,
}: {
	image: string;
	title: string;
}) {
	return (
		<img
			src={image}
			alt={title}
			className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover'
		/>
	);
}
export function SecondColumn({
	title,
	company,
	productColor,
}: {
	title: string;
	company: string;
	productColor: string;
}) {
	return (
		<div className='sm:ml-4 md:ml-12 sm:w-48'>
			<h3 className='capitalize font-medium'>{title}</h3>
			<h4 className='mt-2 capitalize text-sm'>{company}</h4>
			<p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
				color :
				<span
					style={{
						width: '15px',
						height: '15px',
						borderRadius: '50%',
						backgroundColor: productColor,
					}}
				/>
			</p>
		</div>
	);
}
export function ThirdColumn({
	amount,
	cartID,
}: {
	amount: number;
	cartID: string;
}) {
	const dispatch = useAppDispatch();

	const removeItemFromTheCart = () => {
		dispatch(removeItem(cartID));
	};

	const setAmount = (value: number) => {
		dispatch(editItem({ cartID, amount: value }));
	};

	return (
		<div>
			<SelectProductAmount
				amount={amount}
				setAmount={setAmount}
				mode={Mode.CartItem}
			/>
			<Button
				variant='link'
				className='-ml-4'
				onClick={removeItemFromTheCart}
			>
				remove
			</Button>
		</div>
	);
}

export function FourthColumn({ price }: { price: string }) {
	return <p className='font-medium sm:ml-auto'>{formatAsDollars(price)}</p>;
}

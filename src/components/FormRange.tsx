import { useState } from 'react';
import { formatAsDollars } from '@/utils';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

type FormRangeProps = {
	name: string;
	label?: string;
	defaultValue?: string;
};

export default function FormRange({
	name,
	label,
	defaultValue,
}: FormRangeProps) {
	const step = 1000;
	const maxPrice = 100000;
	const defaultPrice = defaultValue ? Number(defaultValue) : maxPrice;
	const [selectedPrice, setSelectedPrice] = useState(defaultPrice);

	return (
		<div className='mb-2'>
			<Label htmlFor={name} className='capitalize flex justify-between'>
				{label || name}
				<span>{formatAsDollars(selectedPrice)}</span>
			</Label>
			<Slider
				id={name}
				name={name}
				step={step}
				max={maxPrice}
				className='mt-4'
				value={[selectedPrice]}
				onValueChange={(value) => {
					setSelectedPrice(value[0]);
				}}
			/>
		</div>
	);
}

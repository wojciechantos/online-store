import { Label } from '@/components/ui/label';
import { FormItemBaseProps } from '@/utils/types';
import { Checkbox } from '@/components/ui/checkbox';

export default function FormCheckbox({
	name,
	label,
	defaultValue,
}: FormItemBaseProps) {
	const defaultChecked = defaultValue === 'on';

	return (
		<div className='mb-2 flex justify-between self-end'>
			<Label htmlFor={name} className='capitalize'>
				{label || name}
			</Label>
			<Checkbox id={name} name={name} defaultChecked={defaultChecked} />
		</div>
	);
}

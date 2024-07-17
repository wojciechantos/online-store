import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

type FormInputProps = {
	name: string;
	type: string;
	label?: string;
	defaultValue?: string;
};

function FormInput({ label, name, type, defaultValue }: FormInputProps) {
	return (
		<div className='mb-2'>
			<Label htmlFor={name} className='capitalize'>
				{label || name}
			</Label>
			<Input
				id={name}
				type={type}
				name={name}
				defaultValue={defaultValue}
			/>
		</div>
	);
}

export default FormInput;

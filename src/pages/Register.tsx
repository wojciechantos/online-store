import { AxiosError } from 'axios';
import { ActionFunction, Form, Link, redirect } from 'react-router-dom';
import { customFetch } from '@/utils';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { SubmitButton, FormInput } from '@/components';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

export const action: ActionFunction = async ({
	request,
}): Promise<Response | null> => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);

	try {
		await customFetch.post('/auth/local/register', data);
		toast({ description: 'Registered' });

		return redirect('/login');
	} catch (error) {
		const errorMsg =
			error instanceof AxiosError
				? error.response?.data.error.message
				: 'Registration failed!';

		toast({ description: errorMsg });

		return null;
	}
};

export default function Register() {
	return (
		<section className='h-screen grid place-items-center px-4'>
			<Card className='w-full max-w-md bg-muted'>
				<CardHeader>
					<CardTitle className='text-center'>Register</CardTitle>
				</CardHeader>
				<CardContent>
					<Form method='post'>
						<FormInput type='text' name='username' />
						<FormInput type='email' name='email' />
						<FormInput type='password' name='password' />

						<SubmitButton text='Register' className='w-full mt-4' />

						<p className='text-center mt-4'>
							Already a member?
							<Button type='button' asChild variant='link'>
								<Link to='/login'>Login</Link>
							</Button>
						</p>
					</Form>
				</CardContent>
			</Card>
		</section>
	);
}

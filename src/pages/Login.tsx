import {
	Form,
	Link,
	redirect,
	useNavigate,
	type ActionFunction,
} from 'react-router-dom';
import { AxiosResponse } from 'axios';
import { customFetch } from '@/utils';
import { useAppDispatch } from '@/hooks';
import { type ReduxStore } from '@/store';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { loginUser } from '@/features/user/userSlice';
import { SubmitButton, FormInput } from '@/components';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';

export const action =
	(store: ReduxStore): ActionFunction =>
	async ({ request }): Promise<Response | null> => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		try {
			const response: AxiosResponse = await customFetch.post(
				'/auth/local',
				data
			);
			const { username } = response.data.user;
			const { jwt } = response.data;
			store.dispatch(loginUser({ username, jwt }));
			return redirect('/');
		} catch (error) {
			console.error(error);
			toast({ description: 'Login Failed' });
			return null;
		}
	};

export default function Login() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const loginAsGuestUser = async (): Promise<void> => {
		try {
			const response: AxiosResponse = await customFetch.post(
				'auth/local',
				{
					identifier: 'test@test.com',
					password: 'secret',
				}
			);
			const { username } = response.data.user;
			const { jwt } = response.data;
			dispatch(loginUser({ username, jwt }));
			navigate('/');
		} catch (error) {
			console.error(error);
			toast({ description: 'Login Failed!' });
		}
	};

	return (
		<section className='h-screen grid place-items-center'>
			<Card className='w-96 bg-muted'>
				<CardHeader>
					<CardTitle className='text-center'>Login</CardTitle>
				</CardHeader>
				<CardContent>
					<Form method='POST'>
						<FormInput
							type='email'
							label='email'
							name='identifier'
						/>
						<FormInput type='password' name='password' />

						<SubmitButton text='Login' className='w-full mt-4' />
						<Button
							type='button'
							variant='outline'
							onClick={loginAsGuestUser}
							className='w-full mt-4'
						>
							Login as Guest User
						</Button>
						<p className='text-center mt-4'>
							Not a member yet?
							<Button type='button' asChild variant='link'>
								<Link to='/register'>Register</Link>
							</Button>
						</p>
					</Form>
				</CardContent>
			</Card>
		</section>
	);
}

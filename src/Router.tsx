import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
	Cart,
	Login,
	About,
	Error,
	Orders,
	Landing,
	Products,
	Checkout,
	Register,
	HomeLayout,
	SingleProduct,
} from '@/pages';
import { store } from './store';
import { ErrorElement } from '@/components';
import { action as loginAction } from '@/pages/Login';
import { loader as landingLoader } from '@/pages/Landing';
import { action as registerUser } from '@/pages/Register';
import { loader as productsLoader } from '@/pages/Products';
import { loader as singleProductLoader } from '@/pages/SingleProduct';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				loader: landingLoader,
				errorElement: <ErrorElement />,
			},
			{
				path: 'products',
				element: <Products />,
				loader: productsLoader,
				errorElement: <ErrorElement />,
			},
			{
				path: 'products/:id',
				element: <SingleProduct />,
				loader: singleProductLoader,
				errorElement: <ErrorElement />,
			},
			{
				path: 'cart',
				element: <Cart />,
				errorElement: <ErrorElement />,
			},
			{
				path: 'about',
				element: <About />,
				errorElement: <ErrorElement />,
			},
			{
				path: 'checkout',
				element: <Checkout />,
				errorElement: <ErrorElement />,
			},
			{
				path: 'orders',
				element: <Orders />,
				errorElement: <ErrorElement />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
		errorElement: <Error />,
		action: loginAction(store),
	},
	{
		path: '/register',
		element: <Register />,
		errorElement: <Error />,
		action: registerUser,
	},
]);

export default function Router() {
	return <RouterProvider router={router} />;
}

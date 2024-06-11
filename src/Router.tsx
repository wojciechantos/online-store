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
} from './pages';
import { ErrorElement } from '@/components';
import { loader as landingLoader } from '@/pages/Landing';
import { loader as productsLoader } from '@/pages/Products';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
	},
	{
		path: '/register',
		element: <Register />,
		errorElement: <Error />,
	},
]);

export const Router = () => {
	return <RouterProvider router={router} />;
};

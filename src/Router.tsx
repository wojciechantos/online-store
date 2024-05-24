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
			},
			{
				path: 'products',
				element: <Products />,
			},
			{
				path: 'products/:id',
				element: <SingleProduct />,
			},
			{
				path: 'cart',
				element: <Cart />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'checkout',
				element: <Checkout />,
			},
			{
				path: 'orders',
				element: <Orders />,
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

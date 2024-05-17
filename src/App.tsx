import { Button } from '@/components/ui/button';
import { useAppSelector } from './hooks';
// import {
//     Cart,
//     Error,
//     Login,
//     About,
//     Orders,
//     Landing,
//     Products,
//     Checkout,
//     Register,
//     HomeLayout,
//     SingleProduct,
// } from './pages';

function App() {
    const { name } = useAppSelector((state) => state.userState);

    console.log(name);
	return (
		<div>
			<h1 className='text-7xl font-bold '>App</h1>
			<Button variant='destructive' size='lg'>
				Click Me
			</Button>
		</div>
	);
}
export default App;

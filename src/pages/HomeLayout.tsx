import { Outlet } from 'react-router-dom';
import { Header } from '@/components';

function HomeLayout() {
    return (
        <>
            <Header />
            <nav>navbar</nav>

            <div className='align-element py-20'>
                <Outlet />
            </div>
        </>
    );
}

export default HomeLayout;

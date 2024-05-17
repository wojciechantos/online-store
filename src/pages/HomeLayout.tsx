import { Outlet } from 'react-router-dom';
import { Header } from '@/components';

function HomeLayout() {
    return (
        <>
            <Header />
            <nav>navbar</nav>
            <Outlet />
        </>
    );
}

export default HomeLayout;

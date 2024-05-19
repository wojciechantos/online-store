import { links } from '@/utils';
import { NavLink } from 'react-router-dom';

function NavLinks() {
    return (
        <div className='hidden lg:flex justify-center items-center gap-x-4'>
            {links.map(({ href, label}) => (
                <NavLink
                    to={href}
                    key={label}
                    className={({ isActive }) => `capitalize font-light tracking-wide ${isActive ? 'text-primary' : ''}`}
                >
                    {label}
                </NavLink>
            ))}
        </div>
    )
};

export default NavLinks;

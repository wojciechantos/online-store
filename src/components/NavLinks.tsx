import { NavLink } from 'react-router-dom';
import { links } from '@/utils';
import { useAppSelector } from '@/hooks';

function NavLinks() {
	const user = useAppSelector((state) => state.userState.user);

	return (
		<div className='hidden lg:flex justify-center items-center gap-x-4'>
			{links.map(({ href, label }) => {
				const restrictedRoutes: string[] = ['checkout', 'orders'];

				if (restrictedRoutes.includes(href) && !user) {
					return null;
				}

				return (
					<NavLink
						to={href}
						key={label}
						className={({ isActive }) =>
							`capitalize font-light tracking-wide ${isActive ? 'text-primary' : ''}`
						}
					>
						{label}
					</NavLink>
				);
			})}
		</div>
	);
}

export default NavLinks;

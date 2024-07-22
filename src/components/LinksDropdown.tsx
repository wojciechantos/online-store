import { AlignLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { links } from '@/utils';
import { Button } from './ui/button';
import { useAppSelector } from '@/hooks';
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function LinksDropdown() {
	const user = useAppSelector((state) => state.userState.user);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className='lg:hidden'>
				<Button variant='outline' size='icon'>
					<AlignLeft />
					<span className='sr-only'>Toggle Links</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='w-52 lg:hidden'
				align='start'
				sideOffset={25}
			>
				{links.map(({ href, label }) => {
					const restrictedRoutes: string[] = ['checkout', 'orders'];

					if (restrictedRoutes.includes(href) && !user) {
						return null;
					}

					return (
						<DropdownMenuItem key={label}>
							<NavLink
								to={href}
								className={(isActive) =>
									`capitalize w-full ${isActive ? 'text-primary' : ''}`
								}
							>
								{label}
							</NavLink>
						</DropdownMenuItem>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default LinksDropdown;

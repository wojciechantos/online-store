import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AlignLeft } from 'lucide-react';
import { Button } from './ui/button';
import { links } from '@/utils';
import { NavLink } from 'react-router-dom';

function LinksDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className='lg:hidden'>
                <Button variant='outline' size='icon'>
                    <AlignLeft />
                    <span className='sr-only'>Toggle Links</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-52 lg:hidden' align='start' sideOffset={25}>
                {links.map(({ href, label }) => (
                    <DropdownMenuItem key={label}>
                        <NavLink
                            to={href}
                            className={(isActive) => `capitalize w-full ${isActive ? 'text-primary' : ''}`}
                        >
                            {label}
                        </NavLink>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

export default LinksDropdown;

import { NavLink, Paper } from '@ns-ui/core';
import {
    IconAddressBook,
    IconListDetails,
    IconUser,
    IconUserCircle,
} from '@tabler/icons-react';
import Link from 'next/link';

type SidebarCompProps = {
    name: string;
};

const SidebarComp = ({ name, ...rest }: SidebarCompProps) => {
    return (
        <>
            <Paper withBorder {...rest}>
                <NavLink
                    label={`Hi, ${name}`}
                    fs="24px"
                    fw={500}
                    // c="blue"
                    rightSection={<IconUserCircle size="1.4rem" stroke={2} />}
                    disabled
                    sx={(theme) => ({
                        opacity: '1 !important',
                        color: theme.colors.blue[7],
                        background: theme.fn.lighten('#dbe5ef', 0.5),
                    })}
                />
                <NavLink
                    component={Link}
                    href="/my-booking/trips"
                    label="Bookings"
                    icon={<IconListDetails size="1.2rem" stroke={1} />}
                />
                <NavLink
                    component={Link}
                    href="/my-booking/contacts"
                    label="Contacts"
                    icon={<IconAddressBook size="1.2rem" stroke={1} />}
                />
                <NavLink
                    component={Link}
                    href="/my-booking/profile"
                    label="My Profile"
                    icon={<IconUser size="1.2rem" stroke={1} />}
                />
            </Paper>
        </>
    );
};

export default SidebarComp;

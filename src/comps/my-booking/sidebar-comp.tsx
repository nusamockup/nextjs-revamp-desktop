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

const SidebarComp = ({ name }: SidebarCompProps) => {
    return (
        <>
            <Paper withBorder mt={40}>
                <NavLink
                    label={`Hi, ${name}`}
                    fs="21px"
                    fw={500}
                    // c="blue"
                    rightSection={<IconUserCircle size="1.4rem" stroke={2} />}
                    disabled
                    sx={(theme) => ({
                        opacity: '1 !important',
                        color: theme.colors.blue[7],
                        // background: '#dbe5ef',
                        background: theme.fn.lighten('#dbe5ef', 0.5),
                        // background: theme.fn.lighten(
                        //     theme.colors.blue[1],
                        //     0.1
                        // ),
                    })}
                />
                <NavLink
                    component={Link}
                    href="/my-booking/trips"
                    label="My Bookings"
                    icon={<IconListDetails size="1.2rem" stroke={1} />}
                />
                <NavLink
                    component={Link}
                    href="/"
                    label="My Contacts"
                    icon={<IconAddressBook size="1.2rem" stroke={1} />}
                />
                <NavLink
                    component={Link}
                    href="/"
                    label="Profile"
                    icon={<IconUser size="1.2rem" stroke={1} />}
                />
            </Paper>
        </>
    );
};

export default SidebarComp;

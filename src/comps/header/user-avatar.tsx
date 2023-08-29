import {
    Avatar,
    createStyles,
    Group,
    Menu,
    rem,
    Text,
    UnstyledButton,
} from '@ns-ui/core';
import {
    IconChevronDown,
    IconListDetails,
    IconLogout,
    IconUser,
    IconUserCircle,
} from '@tabler/icons-react';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
    user: {
        color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        transition: 'background-color 100ms ease',

        '&:hover': {
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[8]
                    : theme.white,
        },

        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    userActive: {
        backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },
}));

const User = {
    user: {
        name: 'Eddie Tohier',
        email: 'eddietohier@nusatrip.dev',
    },
};

const UserAvatar = () => {
    const { classes, theme, cx } = useStyles();
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    return (
        <>
            <Menu
                width={260}
                position="bottom-end"
                transitionProps={{ transition: 'pop-top-right' }}
                onClose={() => setUserMenuOpened(false)}
                onOpen={() => setUserMenuOpened(true)}
                shadow={'md'}
                withinPortal
            >
                <Menu.Target>
                    <UnstyledButton
                        className={cx(classes.user, {
                            [classes.userActive]: userMenuOpened,
                        })}
                    >
                        <Group spacing={7}>
                            <Avatar alt={User.user.name} radius="xl" size={20}>
                                <IconUserCircle size="2rem" />
                            </Avatar>
                            <Text
                                weight={500}
                                size="sm"
                                sx={{ lineHeight: 1 }}
                                mr={3}
                            >
                                Hi, {User.user.name}
                            </Text>
                            <IconChevronDown size={rem(12)} stroke={1.5} />
                        </Group>
                    </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                    {/* <Menu.Label>Settings</Menu.Label> */}
                    <Menu.Item
                        icon={<IconListDetails size="0.9rem" stroke={1.5} />}
                    >
                        My Booking
                    </Menu.Item>
                    <Menu.Item icon={<IconUser size="0.9rem" stroke={1.5} />}>
                        My Profile
                    </Menu.Item>
                    <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5} />}>
                        Logout
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </>
    );
};

export default UserAvatar;

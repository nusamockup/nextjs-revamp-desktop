import { Container, Group, Header, UnstyledButton } from '@ns-ui/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useBetween } from 'use-between';
import { navlinks } from '../constants';
import { NsLogo } from '../nslogo';
import UseLoginState from '../shareable/use-loginstate';
import CurrSelector from './curr-selector';
import LoginBTN from './login-btn';
import useStyles, { HEADER_HEIGHT } from './mainheader.styles';
import UserAvatar from './user-avatar';

const MainHeader = () => {
    const { isLoggedIn, setIsLoggedIn } = useBetween(UseLoginState);
    const { classes, theme } = useStyles();
    const pathname = usePathname();
    const hrefTokens = pathname.split('/');

    const items = navlinks.map((item) => {
        return (
            <Link
                // component={Link}
                key={item.label}
                href={item.link}
                // className={`${classes.link} ${isActive ? 'active' : ''}`}
                className={`${classes.link} ${
                    `/${hrefTokens[1]}` == item.link ? 'active' : ''
                }`}
                // className={router.pathname == '/' ? 'active' : ''}
                // onClick={(event) => event.preventDefault()}
            >
                {item.label}
            </Link>
        );
    });

    return (
        <>
            <Header className={classes.header} height={HEADER_HEIGHT}>
                <Container className={classes.inner} size="xl">
                    <Group>
                        <UnstyledButton mt="8px" component={Link} href="/">
                            <NsLogo type="full" size={32} />
                        </UnstyledButton>
                    </Group>
                    <Group spacing={5} className={classes.links}>
                        {items}
                    </Group>
                    <Group spacing={10}>
                        <CurrSelector />
                        {/* <LangSelector /> */}
                        {isLoggedIn ? <UserAvatar /> : <LoginBTN />}
                    </Group>
                </Container>
            </Header>
        </>
    );
};

export default MainHeader;

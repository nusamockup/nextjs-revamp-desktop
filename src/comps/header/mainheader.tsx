import {
    Burger,
    CloseButton,
    Container,
    Drawer,
    Group,
    Header,
    Navbar,
    UnstyledButton,
} from '@ns-ui/core';
import { useDisclosure } from '@ns-ui/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navlinks } from '../constants';
import { NsLogo } from '../nslogo';
import CurrSelector from './curr-selector';
import LangSelector from './lang-selector';
import LoginBTN from './login-btn';
import useStyles, { HEADER_HEIGHT } from './mainheader.styles';

const MainHeader = () => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
        useDisclosure(false);
    const [burgerOpened, { toggle }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const { classes, theme } = useStyles();
    const pathname = usePathname();

    // const mappedNavlinks = navlinks.map((item) => ({
    //     link: item.link,
    //     label: item.label,
    // }));

    const items = navlinks.map((item) => {
        return (
            <Link
                // component={Link}
                key={item.label}
                href={item.link}
                className={`${classes.link} ${
                    pathname == item.link ? 'active' : ''
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
                        {/* <Burger
                            opened={drawerOpened}
                            onClick={toggleDrawer}
                            className={classes.burger}
                            size="sm"
                        /> */}
                        <UnstyledButton mt="8px" component={Link} href="/">
                            <NsLogo type="full" size={32} />
                        </UnstyledButton>
                    </Group>
                    <Group spacing={5} className={classes.links}>
                        {items}
                    </Group>
                    <Group spacing={10}>
                        <CurrSelector />
                        <LangSelector />
                        {/* <CurrSelector className={classes.hiddenMobile} />
                        <LangSelector className={classes.hiddenMobile} /> */}
                        <LoginBTN />
                    </Group>
                </Container>
            </Header>

            {/* <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="75%"
                padding="md"
                className={classes.hiddenDesktop}
                withCloseButton={false}
            >
                <Navbar className={classes.navbarleft}>
                    <Navbar.Section grow>
                        <Group
                            className={classes.navbarheader}
                            position="apart"
                        >
                            <NsLogo type="full" size={28} />
                            <CloseButton
                                onClick={closeDrawer}
                                iconSize={20}
                                aria-label="Close drawer"
                                mr="md"
                            />
                        </Group>
                        {navlinks.map((item) => {
                            return (
                                <Link
                                    key={item.label}
                                    href={item.link}
                                    className={classes.navbarlink}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </Navbar.Section>
                </Navbar>
            </Drawer> */}
        </>
    );
};

export default MainHeader;

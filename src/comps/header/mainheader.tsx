import {
    Avatar,
    Container,
    Divider,
    Group,
    Header,
    UnstyledButton,
} from '@ns-ui/core';
import { useDisclosure } from '@ns-ui/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navlinks } from '../constants';
import { NsLogo } from '../nslogo';
import CurrSelector from './curr-selector';
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
                        <LoginBTN />
                    </Group>
                </Container>
            </Header>
        </>
    );
};

export default MainHeader;

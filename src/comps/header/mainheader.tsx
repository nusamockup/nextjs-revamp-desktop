import { Container, Group, Header, UnstyledButton } from '@ns-ui/core';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
// import { useSelectedLayoutSegment } from 'next/navigation'
import { navlinks } from '../constants';
import { NsLogo } from '../nslogo';
import CurrSelector from './curr-selector';
import LoginBTN from './login-btn';
import useStyles, { HEADER_HEIGHT } from './mainheader.styles';

const MainHeader = () => {
    const { classes, theme } = useStyles();
    const pathname = usePathname();
    const hrefTokens = pathname.split('/');

    // let layoutSegments = useSelectedLayoutSegment();
    // let segment = layoutSegments[0];
    // console.log(hrefTokens);

    const items = navlinks.map((item) => {
        // const isActive = item.link === `/${segment}`;

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
                        <LoginBTN />
                    </Group>
                </Container>
            </Header>
        </>
    );
};

export default MainHeader;

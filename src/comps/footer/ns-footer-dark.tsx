import {
    ActionIcon,
    Anchor,
    Box,
    Container,
    Grid,
    Group,
    Stack,
    Text,
    Tooltip,
    UnstyledButton,
} from '@ns-ui/core';
import {
    IconBrandBlogger,
    IconBrandInstagram,
    IconBrandTiktok,
    IconBrandTwitter,
} from '@tabler/icons-react';
import Image from 'next/image';
import { banks, data, langs } from '../constants';
import useStyles from './ns-footer-dark.styles';
import SubInput from './sub-input';

export function NsFooterDark() {
    const { classes } = useStyles();

    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text<'a'>
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    const items = langs.map((item) => (
        <Text key={item.label} component="a" href={item.url}>
            {item.label}
        </Text>
    ));

    const bankitems = banks.map((bankitem) => (
        <Box
            key={bankitem.name}
            p="4px 8px"
            bg={bankitem.bgcolor}
            sx={(theme) => ({
                borderRadius: '5px',
                // flexWrap: 'nowrap',
                // border: '.4px solid #cdd3d9',
            })}
        >
            <Tooltip label={bankitem.name} offset={13} withArrow arrowSize={8}>
                <img
                    // src={bankitem.img}
                    src={`/img/bank/${bankitem.img}`}
                    alt="bank logo"
                    style={{
                        height: '14px!important',
                        width: 'auto !important',
                    }}
                />

                {/* <Image
                    height={0}
                    width={0}
                    src={bankitem.img}
                    alt="bank logo"
                    style={{
                        height: '14px!important',
                        width: 'auto !important',
                    }}
                /> */}
            </Tooltip>
        </Box>
    ));

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className={classes.footer}>
            <Container size="xl">
                <Grid>
                    <Grid.Col span={5}>
                        <Grid.Col span={11}>
                            <Image
                                // mb={10}
                                style={{ marginBottom: '10px' }}
                                height="76"
                                width="240"
                                src="/img/logo/sopa-logo@2x.png"
                                alt="SoPa Logo"
                            />
                            <Text
                                size="xs"
                                // color="dimmed"
                                className={classes.description}
                            >
                                <Stack spacing="xs">
                                    <Text span weight={700}>
                                        Member of Society Pass Inc. Ecosystem
                                    </Text>
                                    <Text span>
                                        NusaTrip connects to low-cost carriers
                                        in Asia, full-service airlines globally
                                        with cheap fares for travelers​
                                    </Text>
                                </Stack>
                            </Text>
                        </Grid.Col>
                        <Group
                            // sx={{ flexWrap: 'nowrap' }}
                            // c="dimmed"
                            fz="xs"
                            p={8}
                            spacing="xs"
                        >
                            {items}
                        </Group>
                        <Group>
                            <Text
                                // color="dimmed"
                                size="xs"
                                p={8}
                            >
                                Member of
                                <Text
                                    span
                                    // color="dimmed"
                                    size="xs"
                                    ml={5}
                                    weight={600}
                                >
                                    ASITA | IATA
                                </Text>
                            </Text>
                        </Group>
                    </Grid.Col>
                    <Grid.Col span={4} pl={40}>
                        <div className={classes.groupWrapper}>{groups}</div>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <Stack spacing="sm" mb="sm">
                            <Text className={classes.title}>
                                Don't miss our exclusive offers
                            </Text>
                            <SubInput />
                        </Stack>
                        <Stack spacing="sm" mb="sm">
                            <Text className={classes.title}>
                                Get Mobile Apps
                            </Text>
                            {/* <MobileBtn /> */}
                            <Group
                                sx={{
                                    flexWrap: 'nowrap',
                                    minWidth: '265px',
                                }}
                            >
                                <UnstyledButton>
                                    <Image
                                        height={36}
                                        width={115}
                                        src="/img/mobile-badge/badge_appstore-light.png"
                                        alt="App Store Logo"
                                        // style={{
                                        //     height: '36px!important',
                                        //     width: 'auto!important',
                                        //     objectFit: 'contain',
                                        // }}
                                    />
                                </UnstyledButton>
                                <UnstyledButton>
                                    <Image
                                        height={36}
                                        width={115}
                                        src="/img/mobile-badge/badge_googleplay-light.png"
                                        alt="GooglePlay Logo"
                                        // style={{
                                        //     height: '36px!important',
                                        //     width: 'auto!important',
                                        // }}
                                    />
                                </UnstyledButton>
                            </Group>
                            <Text<'a'>
                                className={classes.link}
                                component="a"
                                href="/"
                                onClick={(e) => e.preventDefault()}
                            >
                                Visit our mobile web
                            </Text>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </Container>
            <Container mt={20} size="xl" className={classes.middleFooter}>
                <Text size="xs">
                    This site is protected by reCAPTCHA and the Google{' '}
                    <Anchor href="https://policies.google.com/privacy">
                        Privacy Policy
                    </Anchor>{' '}
                    and{' '}
                    <Anchor href="https://policies.google.com/terms">
                        Terms of Service
                    </Anchor>{' '}
                    apply.
                </Text>

                <Group
                    spacing={0}
                    className={classes.social}
                    position="right"
                    noWrap
                >
                    <ActionIcon size="lg" variant="transparent">
                        <IconBrandTwitter
                            color="rgba(255, 255, 255, 0.5)"
                            size="1.05rem"
                            stroke={2}
                        />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="transparent">
                        <IconBrandInstagram
                            color="rgba(255, 255, 255, 0.5)"
                            size="1.05rem"
                            stroke={2}
                        />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="transparent">
                        <IconBrandTiktok
                            color="rgba(255, 255, 255, 0.5)"
                            size="1.05rem"
                            stroke={2}
                        />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="transparent">
                        <IconBrandBlogger
                            color="rgba(255, 255, 255, 0.5)"
                            size="1.05rem"
                            stroke={2}
                        />
                    </ActionIcon>
                </Group>
            </Container>
            <Container size="xl" className={classes.afterFooter}>
                <Group
                    // sx={{ flexWrap: 'nowrap' }}
                    spacing="5px"
                >
                    {bankitems}
                </Group>
                <Text
                    sx={{ whiteSpace: 'nowrap', marginTop: '5px' }}
                    // color="dimmed"
                    align="end"
                    size="sm"
                >
                    © {year} Nusatrip.com. All rights reserved.
                </Text>
            </Container>
        </footer>
    );
}

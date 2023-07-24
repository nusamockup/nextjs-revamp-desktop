import {
    ActionIcon,
    Anchor,
    Box,
    Container,
    Grid,
    Group,
    Image,
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
            p="8px"
            bg={bankitem.bgcolor}
            sx={(theme) => ({
                borderRadius: '5px',
                flexWrap: 'nowrap',
                // border: '.4px solid #cdd3d9',
            })}
        >
            <Tooltip label={bankitem.name} offset={13} withArrow arrowSize={8}>
                <Image height="14px" src={bankitem.img} />
            </Tooltip>
        </Box>
    ));

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className={classes.footer}>
            <Container size="lg">
                <Grid>
                    <Grid.Col span={5}>
                        <Grid.Col span={11}>
                            <Image
                                mb={10}
                                height="76px"
                                width="240px"
                                src="/img/logo/sopa-logo@2x.png"
                            />
                            <Text
                                size="xs"
                                // color="dimmed"
                                className={classes.description}
                            >
                                <Stack spacing="xs">
                                    <Text component="span" weight={700}>
                                        Member of Society Pass Inc. Ecosystem
                                    </Text>
                                    <Text component="span">
                                        NusaTrip connects to low-cost carriers
                                        in Asia, full-service airlines globally
                                        with cheap fares for travelers​
                                    </Text>
                                </Stack>
                            </Text>
                        </Grid.Col>
                        <Group
                            style={{ flexWrap: 'nowrap' }}
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
                                    component="span"
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
                                style={{
                                    flexWrap: 'nowrap',
                                    minWidth: '265px',
                                }}
                            >
                                <UnstyledButton>
                                    <Image
                                        height={36}
                                        // width={100}
                                        src="/img/mobile-badge/badge_appstore-light.png"
                                    />
                                </UnstyledButton>
                                <UnstyledButton>
                                    <Image
                                        height={36}
                                        // width={100}
                                        src="/img/mobile-badge/badge_googleplay-light.png"
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
            <Container mt={20} size="lg" className={classes.middleFooter}>
                <Text
                    // color="dimmed"
                    size="xs"
                >
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
            <Container size="lg" className={classes.afterFooter}>
                <Group style={{ flexWrap: 'nowrap' }} spacing="5px">
                    {bankitems}
                </Group>
                <Text
                    style={{ whiteSpace: 'nowrap' }}
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

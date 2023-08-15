import React from 'react';
import { css, Global } from '@emotion/react';
import {
    Anchor,
    Avatar,
    BackgroundImage,
    Badge,
    Box,
    Container,
    createStyles,
    Group,
    List,
    Overlay,
    Paper,
    SimpleGrid,
    Text,
    Title,
} from '@ns-ui/core';
import NsImage from 'src/comps/ns-image/ns-image';
import {
    IconBed,
    IconHome2,
    IconNotes,
    IconPlane,
    IconWallet,
} from '@tabler/icons-react';

const useStyles = createStyles(() => ({
    image: {
        marginBottom: '20px',
    },
    title: {
        marginBottom: '10px',
    },
}));

const Index = () => {
    const { classes } = useStyles();
    return (
        <>
            <Global
                styles={css`
                    body {
                        background-color: #f8f8f8;
                    }
                `}
            />
            <Box mt="-20px">
                <BackgroundImage
                    pos="relative"
                    h={215}
                    src=""
                    // bg="#0054A6"
                    sx={{
                        background:
                            'url(/img/banner/pattern_1.svg) #0054A6 repeat center',
                        backgroundSize: 'contain',
                    }}
                >
                    <Overlay color="#000" opacity={0.15} zIndex={1} />
                    <Container
                        pt="55px"
                        pos="relative"
                        size="xl"
                        sx={{
                            zIndex: 2,
                        }}
                    >
                        <Box>
                            <Title order={2} c="#FFF" mt="sm" fw="400">
                                Nusatrip Desktop Revamp
                            </Title>
                        </Box>
                    </Container>
                </BackgroundImage>
            </Box>
            <Container
                mt="-100px"
                size="xl"
                pos="relative"
                sx={{
                    zIndex: 2,
                }}
            >
                <Box>
                    <SimpleGrid py={32} cols={5} spacing="32px">
                        <Paper
                            radius="md"
                            // withBorder
                            shadow="lg"
                            p="lg"
                            sx={(theme) => ({
                                backgroundColor:
                                    theme.colorScheme === 'dark'
                                        ? theme.colors.dark[8]
                                        : theme.white,
                            })}
                        >
                            <Text fz="lg" weight={500}>
                                Pages
                            </Text>
                            <List size="sm" mt={16}>
                                <List.Item>
                                    <Anchor c="dark" href="/home">
                                        Home
                                    </Anchor>
                                </List.Item>
                                <List.Item>
                                    <Anchor c="dark" href="/forgotpassword">
                                        Forgot Password
                                    </Anchor>
                                </List.Item>
                            </List>
                        </Paper>
                        <Paper
                            radius="md"
                            // withBorder
                            shadow="lg"
                            p="lg"
                            sx={(theme) => ({
                                backgroundColor:
                                    theme.colorScheme === 'dark'
                                        ? theme.colors.dark[8]
                                        : theme.white,
                            })}
                        >
                            <Text fz="lg" weight={500}>
                                Flights
                            </Text>
                            <List size="sm" mt={16}>
                                <List.Item>
                                    <Anchor c="dark" href="/flights">
                                        Index
                                    </Anchor>
                                </List.Item>
                                {/* <List.Item>
                                    <Anchor c="dark" href="/forgotpassword">
                                        Forgot Password
                                    </Anchor>
                                </List.Item> */}
                            </List>
                        </Paper>
                        <Paper
                            radius="md"
                            // withBorder
                            shadow="lg"
                            p="lg"
                            sx={(theme) => ({
                                backgroundColor:
                                    theme.colorScheme === 'dark'
                                        ? theme.colors.dark[8]
                                        : theme.white,
                            })}
                        >
                            <Text fz="lg" weight={500}>
                                Hotels
                            </Text>
                            <List size="sm" mt={16}>
                                <List.Item>
                                    <Anchor c="dark" href="/hotels">
                                        Index
                                    </Anchor>
                                </List.Item>
                                {/* <List.Item>
                                    <Anchor c="dark" href="/forgotpassword">
                                        Forgot Password
                                    </Anchor>
                                </List.Item> */}
                            </List>
                        </Paper>
                        <Paper
                            radius="md"
                            // withBorder
                            shadow="lg"
                            p="lg"
                            sx={(theme) => ({
                                backgroundColor:
                                    theme.colorScheme === 'dark'
                                        ? theme.colors.dark[8]
                                        : theme.white,
                            })}
                        >
                            <Text fz="lg" weight={500}>
                                My Booking
                            </Text>
                            <List size="sm" mt={16}>
                                <List.Item>
                                    <Anchor
                                        c="dark"
                                        href="/my-booking"
                                        target="_blank"
                                    >
                                        Index
                                    </Anchor>
                                </List.Item>
                                {/* <List.Item>
                                    <Anchor c="dark" href="/forgotpassword">
                                        Forgot Password
                                    </Anchor>
                                </List.Item> */}
                            </List>
                        </Paper>
                        <Paper
                            radius="md"
                            // withBorder
                            shadow="lg"
                            p="lg"
                            sx={(theme) => ({
                                backgroundColor:
                                    theme.colorScheme === 'dark'
                                        ? theme.colors.dark[8]
                                        : theme.white,
                            })}
                        >
                            <Text fz="lg" weight={500}>
                                Customer Care
                            </Text>
                            <List size="sm" mt={16}>
                                <List.Item>
                                    <Anchor
                                        c="dark"
                                        href="/support"
                                        target="_blank"
                                    >
                                        Index
                                    </Anchor>
                                </List.Item>
                                <List.Item>
                                    <Anchor
                                        c="dark"
                                        href="/support/faq"
                                        target="_blank"
                                    >
                                        FAQ
                                    </Anchor>
                                </List.Item>
                                <List.Item>
                                    <Anchor
                                        c="dark"
                                        href="/support/how-to-book"
                                        target="_blank"
                                    >
                                        How to Book
                                    </Anchor>
                                </List.Item>
                                <List.Item>
                                    <Anchor
                                        c="dark"
                                        href="/support/book-flight"
                                        target="_blank"
                                    >
                                        Book Flight
                                    </Anchor>
                                </List.Item>
                                <List.Item>
                                    <Anchor
                                        c="dark"
                                        href="/support/book-hotel"
                                        target="_blank"
                                    >
                                        Book Hotel
                                    </Anchor>
                                </List.Item>
                            </List>
                        </Paper>
                    </SimpleGrid>
                </Box>
            </Container>
        </>
    );
};

export default Index;

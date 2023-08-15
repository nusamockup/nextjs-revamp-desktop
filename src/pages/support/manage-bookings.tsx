import { css, Global } from '@emotion/react';
import {
    ActionIcon,
    Affix,
    BackgroundImage,
    Box,
    Container,
    Grid,
    List,
    Overlay,
    rem,
    Text,
    Title,
    Transition,
} from '@ns-ui/core';
import { useWindowScroll } from '@ns-ui/hooks';
import { IconArrowUp } from '@tabler/icons-react';

const ManageBookings = () => {
    const [scroll, scrollTo] = useWindowScroll();
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
                    h={215 - 60}
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
                                Manage My Bookings
                            </Title>
                        </Box>
                    </Container>
                </BackgroundImage>
            </Box>
            <Container mt={60} size="xl">
                <Grid>
                    <Grid.Col span={9}>
                        <Title order={3} fw={400}>
                            Retrieve an existing booking
                        </Title>
                        <List mt={20} size="sm" c="dark" type="ordered">
                            <List.Item>
                                If you need to view a booking you have made on
                                Nusatrip.com, go to MY BOOKINGS : you will need
                                booking code (which you should be able to find
                                in the emails that were sent to you after you
                                made the booking) and the email address you used
                                during the booking process. After clicking
                                "Retrieve" you will be sent to the check-out
                                confirmation page where all the details of your
                                booking and payment will be shown.
                            </List.Item>
                        </List>
                        <Text mt={20} size="sm" c="dark">
                            If you have registered, you can click login on the
                            top right corner of the screen and access MY
                            BOOKINGS. In "My Bookings" section, you will see the
                            list of all your bookings, and access the details of
                            each of them.
                        </Text>

                        <Title mt={30} mb={20} order={3} fw={400}>
                            My Bookings
                        </Title>
                        <List size="sm" c="dark" type="ordered" spacing="md">
                            <List.Item>
                                My Bookings List
                                <Text mt={4}>
                                    This is where you can see your bookings
                                    history and their status. All bookings,
                                    flight tickets or hotel room you reserved
                                    with Nusatrip will be displayed.
                                </Text>
                            </List.Item>
                            <List.Item>
                                My Contacts
                                <Text mt={4}>
                                    Contacts are people with whom you travel, or
                                    you book flights or hotel for them. This way
                                    you can save their personal details and
                                    re-use during check-out process. When you
                                    plan your subsequent trips, you do not need
                                    to fill in all their details every time, but
                                    just select the names from a list.
                                </Text>
                                <Text mt={4}>
                                    You can see the contacts that you have
                                    created and modify their data, as well as
                                    create new ones.
                                </Text>
                            </List.Item>
                            <List.Item>
                                My Profile
                                <Text mt={4}>
                                    This tab is where you can maintain your own
                                    personal data (like passport details, mobile
                                    phone number, ... all the information
                                    required for booking flights or hotels). You
                                    can also change your password or modify your
                                    social media connection (connecting to
                                    Facebook instead of using password).
                                    Remember to click "Save" once you do any
                                    changes.
                                </Text>
                            </List.Item>
                        </List>
                    </Grid.Col>
                </Grid>
            </Container>
            <Affix position={{ bottom: rem(20), right: rem(20) }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <ActionIcon
                            color="blue"
                            size="lg"
                            variant="filled"
                            style={transitionStyles}
                            onClick={() => scrollTo({ y: 0 })}
                        >
                            <IconArrowUp size="1.625rem" />
                        </ActionIcon>
                    )}
                </Transition>
            </Affix>
        </>
    );
};

export default ManageBookings;

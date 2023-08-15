import { css, Global } from '@emotion/react';
import {
    ActionIcon,
    Affix,
    BackgroundImage,
    Badge,
    Box,
    Container,
    createStyles,
    Group,
    List,
    Overlay,
    Paper,
    rem,
    SimpleGrid,
    Text,
    Title,
    Transition,
} from '@ns-ui/core';
import { useWindowScroll } from '@ns-ui/hooks';
import { IconArrowUp, IconInfoCircleFilled } from '@tabler/icons-react';
import NsImage from 'src/comps/ns-image/ns-image';

const useStyles = createStyles(() => ({
    image: {
        marginBottom: '20px',
    },
    title: {
        marginBottom: '10px',
    },
}));

const BookHotel = () => {
    const { classes } = useStyles();
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
                                5 Easy Steps to Book a Hotel on NusaTrip!
                            </Title>
                        </Box>
                    </Container>
                </BackgroundImage>
            </Box>
            <Container mt={100} size="lg">
                <SimpleGrid mb={60} cols={3} spacing={50}>
                    <Paper
                        withBorder
                        p="md"
                        sx={{
                            borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        <Group position="apart" pos="relative">
                            <Title className={classes.title} order={5}>
                                Find Hotels
                            </Title>
                            <Badge
                                variant="filled"
                                color="orange"
                                // color="#f37721"
                                size="lg"
                                mt={-65}
                                sx={{
                                    position: 'absolute',
                                    right: 0,
                                }}
                            >
                                Step 1
                            </Badge>
                        </Group>
                        <NsImage
                            className={classes.image}
                            src="/img/support/search-hotel.svg"
                        />
                        <Text c="dimmed" size="sm">
                            Start your hotel search by entering your desired
                            destination and selecting check-in and check-out
                            dates.
                        </Text>
                    </Paper>
                    <Paper
                        withBorder
                        p="md"
                        sx={{
                            borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        <Group position="apart" pos="relative">
                            <Title className={classes.title} order={5}>
                                Select Hotels
                            </Title>
                            <Badge
                                variant="filled"
                                color="orange"
                                // color="#f37721"
                                size="lg"
                                mt={-65}
                                sx={{
                                    position: 'absolute',
                                    right: 0,
                                }}
                            >
                                Step 2
                            </Badge>
                        </Group>
                        <NsImage
                            className={classes.image}
                            src="/img/support/select-hotel.svg"
                        />
                        <Text c="dimmed" size="sm">
                            Choose the number of rooms you need, and if there
                            are any childrens, input their age.
                        </Text>
                    </Paper>
                    <Paper
                        withBorder
                        p="md"
                        sx={{
                            borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        <Group position="apart" pos="relative">
                            <Title className={classes.title} order={5}>
                                Book Hotels
                            </Title>
                            <Badge
                                variant="filled"
                                color="orange"
                                // color="#f37721"
                                size="lg"
                                mt={-65}
                                sx={{
                                    position: 'absolute',
                                    right: 0,
                                }}
                            >
                                Step 3
                            </Badge>
                        </Group>
                        <NsImage
                            className={classes.image}
                            src="/img/support/select-room.svg"
                        />
                        <Text c="dimmed" size="sm">
                            Find the hotel you like, and click Book Now.
                        </Text>
                    </Paper>
                    <Paper
                        withBorder
                        p="md"
                        sx={{
                            borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        <Group position="apart" pos="relative">
                            <Title className={classes.title} order={5}>
                                Fill in Guest Data
                            </Title>
                            <Badge
                                variant="filled"
                                color="orange"
                                // color="#f37721"
                                size="lg"
                                mt={-65}
                                sx={{
                                    position: 'absolute',
                                    right: 0,
                                }}
                            >
                                Step 4
                            </Badge>
                        </Group>
                        <NsImage
                            className={classes.image}
                            src="/img/support/guest-data.svg"
                        />
                        <Text c="dimmed" size="sm">
                            Enter guest details and if you have a special
                            request please click "Special Request (Optional)".
                        </Text>
                    </Paper>
                    <Paper
                        withBorder
                        p="md"
                        sx={{
                            borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        <Group position="apart" pos="relative">
                            <Title className={classes.title} order={5}>
                                Make Payment
                            </Title>
                            <Badge
                                variant="filled"
                                color="orange"
                                // color="#f37721"
                                size="lg"
                                mt={-65}
                                sx={{
                                    position: 'absolute',
                                    right: 0,
                                }}
                            >
                                Step 5
                            </Badge>
                        </Group>
                        <NsImage
                            className={classes.image}
                            src="/img/support/credit-card.svg"
                        />
                        <Text c="dimmed" size="sm">
                            Three types of payment that you can choose from:
                            Online Bank Solutions (for certain selection of
                            banks), ATM/Bank Transfer, or credit card. Choose
                            the payment method you want and continue the
                            process.
                        </Text>
                    </Paper>
                    <Paper
                        withBorder
                        p="md"
                        sx={{
                            borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        <Title className={classes.title} order={5}>
                            Booking complete
                        </Title>
                        <NsImage
                            className={classes.image}
                            src="/img/support/finish.svg"
                        />
                        <Text c="dimmed" size="sm">
                            After completing the payment process, you will
                            receive an email confirming your hotel booking as
                            well as the booking code and hotel voucher.
                        </Text>
                    </Paper>
                </SimpleGrid>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                sed maxime vitae incidunt blanditiis quis inventore, et nihil
                culpa sint officia facere sapiente voluptatum tenetur! Aperiam
                esse eos cumque delectus! */}
                <Group spacing="xs" c="blue">
                    <IconInfoCircleFilled size={21} />
                    <Text>Information you need to pay attention to:</Text>
                </Group>
                <List size="sm" c="dimmed" mt={10} ml={10}>
                    <List.Item>
                        Number of rooms and number of people will affect hotel
                        search results and room rates. The price for one room
                        for one person can be cheaper than the price for one
                        room for two people.
                    </List.Item>
                    <List.Item>
                        For Special Request, your request is subject to
                        availability upon check-in and entirely up to the
                        hotel’s discretion and policy. You need to check with
                        the hotel related at check-in or confirm in advance.
                    </List.Item>
                </List>
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

export default BookHotel;

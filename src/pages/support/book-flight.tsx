import { css, Global } from '@emotion/react';
import {
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
import { IconInfoCircleFilled } from '@tabler/icons-react';
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
                                5 Easy Steps to Book a Flight on NusaTrip!
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
                                Search Flights
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
                            src="/img/support/search-flight.svg"
                        />
                        <Text c="dimmed" size="sm">
                            Please fill in the flight details:
                            <List c="dimmed" size="sm">
                                <List.Item>
                                    The city or airport from where you are
                                    departing from and your destination.
                                </List.Item>
                                <List.Item>
                                    Select the departure date (and the return
                                    date for round-trip tickets).
                                </List.Item>
                                <List.Item>
                                    Information on the total number of
                                    passengers.
                                </List.Item>
                            </List>
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
                                Select Flights
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
                            src="/img/support/select-flight.svg"
                        />
                        <Text c="dimmed" size="sm">
                            On the next page you can choose your preferred
                            flight according to the airline and departure
                            schedule you want. Click select this flight.
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
                                Book a flight
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
                            src="/img/support/book-flight.svg"
                        />
                        <Text c="dimmed" size="sm">
                            After confirming that the information is correct,
                            click continue ordering.
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
                                Fill in the passenger information data
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
                            Enter the main traveller contact details, including
                            mobile phone number, nationality, and email address
                            to receive booking confirmation and e-ticket.
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
                                Submit Payment
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
                            You can choose three types of payment: Using an
                            Online Bank (certain selection of banks), ATM/Bank
                            Transfer, or credit card. Choose the payment method
                            you want and continue the process.
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
                            receive an email confirming your payment then an
                            email containing the e-ticket and the flight booking
                            code. Please ensure that you input the correct email
                            address as all the important information pertaining
                            your booking will be sent there.
                        </Text>
                    </Paper>
                </SimpleGrid>
            </Container>
        </>
    );
};

export default BookHotel;

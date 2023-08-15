import React from 'react';
import {
    BackgroundImage,
    Box,
    Container,
    createStyles,
    Divider,
    Group,
    Overlay,
    Paper,
    SimpleGrid,
    Stack,
    Text,
    Title,
} from '@ns-ui/core';
import NsImage from 'src/comps/ns-image/ns-image';
import { css, Global } from '@emotion/react';

const useStyles = createStyles(() => ({
    image: {
        marginBottom: '20px',
    },
    title: {
        marginBottom: '10px',
    },
}));

const HowToBook = () => {
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
                            // 'url(/img/banner/pattern_1.svg) #0A73B7 repeat center',
                            'url(/img/banner/pattern_1.svg) #0054A6 repeat center',
                        backgroundSize: 'contain',
                    }}
                >
                    <Overlay color="#000" opacity={0.15} zIndex={1} />
                </BackgroundImage>
                <Container
                    mt="-100px"
                    pos="relative"
                    size="xl"
                    sx={{
                        zIndex: 2,
                    }}
                >
                    <Box>
                        <Title order={2} c="#FFF" mt="sm" fw="400">
                            How to Book With Us
                        </Title>
                    </Box>
                </Container>
                <Container mt={100} size="lg">
                    <SimpleGrid w={715} mx="auto" cols={2} spacing={235}>
                        <Box
                            mx="auto"
                            sx={{
                                width: '240px',
                                maxWidth: '240px',
                            }}
                        >
                            <Stack align="center">
                                <NsImage
                                    src="/img/support/flight-color-icon.svg"
                                    width={60}
                                />
                                <Paper
                                    withBorder
                                    p="md"
                                    ta="center"
                                    sx={{
                                        borderTop:
                                            '1px solid rgba(0, 0, 0, 0.05)',
                                    }}
                                >
                                    <NsImage
                                        className={classes.image}
                                        src="/img/support/search-flight.svg"
                                    />
                                    <Title className={classes.title} order={5}>
                                        Search for a Flight
                                    </Title>
                                    <Text c="dimmed" size="sm">
                                        Start typing the airport or destination
                                        names, select dates and the number of
                                        person for your trip
                                    </Text>
                                </Paper>
                                <NsImage
                                    className={classes.image}
                                    width="16px"
                                    src="/img/support/arrow-1.svg"
                                />
                                <Paper
                                    withBorder
                                    p="md"
                                    ta="center"
                                    sx={{
                                        borderTop:
                                            '1px solid rgba(0, 0, 0, 0.05)',
                                    }}
                                >
                                    <NsImage
                                        className={classes.image}
                                        src="/img/support/choose-flight.svg"
                                    />
                                    <Title className={classes.title} order={5}>
                                        Choose Flights
                                    </Title>
                                    <Text c="dimmed" size="sm">
                                        Select the flights that match your
                                        needs, sort and filter all flights, or
                                        just pick the cheapest one
                                    </Text>
                                </Paper>
                                <Divider
                                    h={386}
                                    c="#94A3B8"
                                    mx="auto"
                                    size="sm"
                                    variant="dashed"
                                    orientation="vertical"
                                />
                                <NsImage
                                    className={classes.image}
                                    width="14px"
                                    src="/img/support/arrow-2.svg"
                                />
                            </Stack>
                        </Box>

                        <Box
                            mx="auto"
                            sx={{
                                width: '240px',
                                maxWidth: '240px',
                            }}
                        >
                            <Stack align="center">
                                <NsImage
                                    src="/img/support/hotel-color-icon.svg"
                                    width={60}
                                />

                                <Paper
                                    withBorder
                                    p="md"
                                    ta="center"
                                    sx={{
                                        borderTop:
                                            '1px solid rgba(0, 0, 0, 0.05)',
                                    }}
                                >
                                    <NsImage
                                        className={classes.image}
                                        src="/img/support/search-hotel.svg"
                                    />
                                    <Title className={classes.title} order={5}>
                                        Search for a Hotel
                                    </Title>
                                    <Text c="dimmed" size="sm">
                                        Start typing the location name, then
                                        select the dates, the number of rooms
                                        and persons for that stay
                                    </Text>
                                </Paper>
                                <NsImage
                                    className={classes.image}
                                    width="16px"
                                    src="/img/support/arrow-1.svg"
                                />
                                <Paper
                                    withBorder
                                    p="md"
                                    ta="center"
                                    sx={{
                                        borderTop:
                                            '1px solid rgba(0, 0, 0, 0.05)',
                                    }}
                                >
                                    <NsImage
                                        className={classes.image}
                                        src="/img/support/hotel-available.svg"
                                    />
                                    <Title className={classes.title} order={5}>
                                        Hotels available
                                    </Title>
                                    <Text c="dimmed" size="sm">
                                        Select the hotel where you want to stay,
                                        filter and sort hotels by price,
                                        location, ...
                                    </Text>
                                </Paper>
                                <NsImage
                                    className={classes.image}
                                    width="16px"
                                    src="/img/support/arrow-1.svg"
                                />
                                <Paper
                                    withBorder
                                    p="md"
                                    ta="center"
                                    sx={{
                                        borderTop:
                                            '1px solid rgba(0, 0, 0, 0.05)',
                                    }}
                                >
                                    <NsImage
                                        className={classes.image}
                                        src="/img/support/select-room.svg"
                                    />
                                    <Title className={classes.title} order={5}>
                                        Select Room
                                    </Title>
                                    <Text c="dimmed" size="sm">
                                        Review the different room rate, Select
                                        the room that match you needs.
                                    </Text>
                                </Paper>
                                <NsImage
                                    className={classes.image}
                                    width="14px"
                                    src="/img/support/arrow-2.svg"
                                />
                            </Stack>
                        </Box>
                    </SimpleGrid>
                    <NsImage
                        className={classes.image}
                        mt="-23px"
                        mx="auto"
                        width="486px"
                        height="3px"
                        src="/img/support/line.svg"
                    />
                    <NsImage
                        className={classes.image}
                        mt="-23px"
                        mx="auto"
                        width="16px"
                        src="/img/support/arrow-3.svg"
                    />
                    <Paper
                        // bg="#FFF"
                        withBorder
                        mx="auto"
                        mb="md"
                        p="md"
                        ta="center"
                        sx={{
                            border: '1px solid rgba(0, 0, 0, 0.05)',
                            width: '715px',
                        }}
                    >
                        <Group position="center" align="end" grow>
                            <Text c="dimmed" size="sm">
                                Review the items you booked, enter travels
                                contact details. Then select a payment method
                            </Text>
                            <NsImage
                                mb="-10px"
                                className={classes.image}
                                src="/img/support/booking-review.svg"
                            />
                            <Text c="dimmed" size="sm">
                                If you create an account, you can review your
                                bookings on our sites at anytime.
                            </Text>
                        </Group>
                        <Title mt={20} className={classes.title} order={5}>
                            Booking Review & Check-out
                        </Title>
                    </Paper>
                    <NsImage
                        className={classes.image}
                        mx="auto"
                        mb="-2px"
                        width="11px"
                        src="/img/support/arrow-2.svg"
                        sx={{
                            position: 'relative',
                            left: '-.3px',
                        }}
                    />
                    <NsImage
                        className={classes.image}
                        mx="auto"
                        mb="-2px"
                        width="676px"
                        height="2px"
                        src="/img/support/line.svg"
                    />
                    <SimpleGrid w={900} mx="auto" cols={3} spacing={90}>
                        <Box
                            mx="auto"
                            sx={{
                                width: '240px',
                                maxWidth: '240px',
                            }}
                        >
                            <Stack align="center">
                                <NsImage
                                    className={classes.image}
                                    mx="auto"
                                    width="14px"
                                    src="/img/support/arrow-3.svg"
                                />
                                <Paper
                                    withBorder
                                    p="md"
                                    ta="center"
                                    sx={{
                                        borderTop:
                                            '1px solid rgba(0, 0, 0, 0.05)',
                                        minHeight: '350px',
                                    }}
                                >
                                    <NsImage
                                        className={classes.image}
                                        src="/img/support/atm.svg"
                                    />
                                    <Title className={classes.title} order={5}>
                                        ATM
                                    </Title>
                                    <Text c="dimmed" size="sm">
                                        To make a payment by bank transfer,
                                        click on the tab titled ATM / PAYMENTS
                                    </Text>
                                </Paper>
                                <NsImage
                                    className={classes.image}
                                    width="16px"
                                    src="/img/support/arrow-1.svg"
                                />
                                <Paper
                                    withBorder
                                    p="md"
                                    ta="center"
                                    sx={{
                                        borderTop:
                                            '1px solid rgba(0, 0, 0, 0.05)',
                                        minHeight: '350px',
                                    }}
                                >
                                    <NsImage
                                        className={classes.image}
                                        src="/img/support/payment-details.svg"
                                    />
                                    <Title className={classes.title} order={5}>
                                        Get payment detail
                                    </Title>
                                    <Text c="dimmed" size="sm">
                                        We will provide some instructions based
                                        on the chosen bank or network.
                                    </Text>
                                </Paper>
                                <NsImage
                                    className={classes.image}
                                    width="16px"
                                    src="/img/support/arrow-1.svg"
                                />
                                <Paper
                                    withBorder
                                    p="md"
                                    ta="center"
                                    sx={{
                                        borderTop:
                                            '1px solid rgba(0, 0, 0, 0.05)',
                                        minHeight: '350px',
                                    }}
                                >
                                    <NsImage
                                        className={classes.image}
                                        src="/img/support/pay-atm.svg"
                                    />
                                    <Title className={classes.title} order={5}>
                                        Pay at ATM
                                    </Title>
                                    <Text c="dimmed" size="sm">
                                        Confirmation will be automatic.
                                    </Text>
                                </Paper>
                                <NsImage
                                    className={classes.image}
                                    width="14px"
                                    src="/img/support/arrow-2.svg"
                                />
                            </Stack>
                        </Box>
                        <Box
                            mx="auto"
                            sx={{
                                width: '240px',
                                maxWidth: '240px',
                            }}
                        >
                            <Stack align="center">
                                <NsImage
                                    className={classes.image}
                                    mx="auto"
                                    width="14px"
                                    src="/img/support/arrow-3.svg"
                                />
                                <Paper
                                    withBorder
                                    p="md"
                                    ta="center"
                                    sx={{
                                        borderTop:
                                            '1px solid rgba(0, 0, 0, 0.05)',
                                        minHeight: '350px',
                                    }}
                                >
                                    <NsImage
                                        className={classes.image}
                                        src="/img/support/online-banking.svg"
                                    />
                                    <Title className={classes.title} order={5}>
                                        Online Banking
                                    </Title>
                                    <Text c="dimmed" size="sm">
                                        We support Bank Mandiri Clickpay and BCA
                                        KlikPay , select the one to use for this
                                        transaction.
                                    </Text>
                                </Paper>
                                <NsImage
                                    className={classes.image}
                                    width="16px"
                                    src="/img/support/arrow-1.svg"
                                />
                                <Paper
                                    withBorder
                                    p="md"
                                    ta="center"
                                    sx={{
                                        borderTop:
                                            '1px solid rgba(0, 0, 0, 0.05)',
                                        minHeight: '350px',
                                    }}
                                >
                                    <NsImage
                                        className={classes.image}
                                        src="/img/support/step-from-bank.svg"
                                    />
                                    <Title className={classes.title} order={5}>
                                        Follow steps from Bank
                                    </Title>
                                    <Text c="dimmed" size="sm">
                                        Most online banking payment solution
                                        require prior activation with the bank.
                                    </Text>
                                </Paper>
                                <NsImage
                                    className={classes.image}
                                    width="16px"
                                    src="/img/support/arrow-1.svg"
                                />
                                <Paper
                                    withBorder
                                    p="md"
                                    ta="center"
                                    sx={{
                                        borderTop:
                                            '1px solid rgba(0, 0, 0, 0.05)',
                                        minHeight: '350px',
                                    }}
                                >
                                    <NsImage
                                        className={classes.image}
                                        src="/img/support/confirmation.svg"
                                    />
                                    <Title className={classes.title} order={5}>
                                        Confirmation
                                    </Title>
                                    <Text c="dimmed" size="sm">
                                        Payment status & Booking confirmation
                                        related to your hotel/flight reservation
                                    </Text>
                                </Paper>
                                <NsImage
                                    className={classes.image}
                                    width="14px"
                                    src="/img/support/arrow-2.svg"
                                />
                            </Stack>
                        </Box>
                        <Box
                            mx="auto"
                            sx={{
                                width: '240px',
                                maxWidth: '240px',
                            }}
                        >
                            <Stack align="center">
                                <NsImage
                                    className={classes.image}
                                    mx="auto"
                                    width="14px"
                                    src="/img/support/arrow-3.svg"
                                />
                                <Paper
                                    withBorder
                                    p="md"
                                    ta="center"
                                    sx={{
                                        borderTop:
                                            '1px solid rgba(0, 0, 0, 0.05)',
                                        minHeight: '350px',
                                    }}
                                >
                                    <NsImage
                                        className={classes.image}
                                        src="/img/support/credit-card.svg"
                                    />
                                    <Title className={classes.title} order={5}>
                                        Credit Card
                                    </Title>
                                    <Text c="dimmed" size="sm">
                                        We support Visa & Mastercard
                                    </Text>
                                </Paper>
                                <NsImage
                                    className={classes.image}
                                    width="16px"
                                    src="/img/support/arrow-1.svg"
                                />
                                <Paper
                                    withBorder
                                    p="md"
                                    ta="center"
                                    sx={{
                                        borderTop:
                                            '1px solid rgba(0, 0, 0, 0.05)',
                                        minHeight: '350px',
                                    }}
                                >
                                    <NsImage
                                        className={classes.image}
                                        src="/img/support/extra-verification.svg"
                                    />
                                    <Title className={classes.title} order={5}>
                                        Extra verification may appear
                                    </Title>
                                    <Text c="dimmed" size="sm">
                                        If your card is enrolled in 3D secure
                                    </Text>
                                </Paper>
                                <NsImage
                                    className={classes.image}
                                    width="16px"
                                    src="/img/support/arrow-1.svg"
                                />
                                <Paper
                                    withBorder
                                    p="md"
                                    ta="center"
                                    sx={{
                                        borderTop:
                                            '1px solid rgba(0, 0, 0, 0.05)',
                                        minHeight: '350px',
                                    }}
                                >
                                    <NsImage
                                        className={classes.image}
                                        src="/img/support/confirmation.svg"
                                    />
                                    <Title className={classes.title} order={5}>
                                        Confirmation
                                    </Title>
                                    <Text c="dimmed" size="sm">
                                        Payment status & Booking confirmation
                                        related to your hotel/flight reservation
                                    </Text>
                                </Paper>
                                <NsImage
                                    className={classes.image}
                                    width="14px"
                                    src="/img/support/arrow-2.svg"
                                />
                            </Stack>
                        </Box>
                    </SimpleGrid>
                    <NsImage
                        className={classes.image}
                        mx="auto"
                        mt="-23px"
                        width="676px"
                        height="3px"
                        src="/img/support/line.svg"
                    />
                    <NsImage
                        className={classes.image}
                        mx="auto"
                        mt="-23px"
                        width="16px"
                        src="/img/support/arrow-3.svg"
                        sx={{
                            position: 'relative',
                            left: '.5px',
                        }}
                    />

                    <Paper
                        withBorder
                        p="md"
                        mx="auto"
                        ta="center"
                        sx={{
                            borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                            minHeight: '350px',
                            width: '280px',
                        }}
                    >
                        <NsImage
                            className={classes.image}
                            src="/img/support/finish.svg"
                            width="210px"
                            mx="auto"
                        />
                        <Title className={classes.title} order={5}>
                            Receive E-ticket / Hotel voucher
                        </Title>
                        <Text c="dimmed" size="sm">
                            After payment is settled, you will receive an email
                            with you booking details, payment confirmation and
                            either a flight e-ticket or hotel voucher to print.
                            <br />
                            <br />
                            The entire process takes less than 3 minutes
                        </Text>
                    </Paper>
                </Container>
            </Box>
            {/* <div>HowToBook</div> */}
        </>
    );
};

export default HowToBook;

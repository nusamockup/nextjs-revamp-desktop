import { css, Global } from '@emotion/react';
import {
    Avatar,
    BackgroundImage,
    Box,
    Button,
    CheckIcon,
    Container,
    createStyles,
    Divider,
    Grid,
    Group,
    NavLink,
    Overlay,
    Paper,
    Radio,
    rem,
    SimpleGrid,
    Space,
    Text,
    Textarea,
    TextInput,
    Title,
} from '@ns-ui/core';
import { IconBed, IconNotes, IconPlane } from '@tabler/icons';
import {
    IconAppWindow,
    IconCalendarStats,
    IconCalendarUp,
    IconChevronRight,
    IconDotsCircleHorizontal,
    IconInfoCircle,
    IconLuggage,
    IconPlaneOff,
    IconReceiptRefund,
    IconShieldCheck,
    IconWallet,
} from '@tabler/icons-react';
import { useState } from 'react';
import StickyBox from 'react-sticky-box';
import ContactInfo from 'src/comps/contact/contact-info';
import SectionTitle from 'src/comps/section-title/section-title';

const useStyles = createStyles((theme) => ({
    wrapper: {
        minHeight: 400,
        boxSizing: 'border-box',
        // backgroundImage: `linear-gradient(-60deg, ${
        //     theme.colors[theme.primaryColor][4]
        // } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
        borderRadius: theme.radius.md,
        padding: `calc(${theme.spacing.xl} * 2.5)`,

        // [theme.fn.smallerThan('sm')]: {
        //     padding: `calc(${theme.spacing.xl} * 1.5)`,
        // },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        color: theme.white,
        lineHeight: 1,
    },

    description: {
        color: theme.colors[theme.primaryColor][0],
        maxWidth: rem(300),

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
        },
    },

    form: {
        backgroundColor: theme.white,
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        // boxShadow: theme.shadows.lg,
    },

    social: {
        color: theme.white,

        '&:hover': {
            color: theme.colors[theme.primaryColor][1],
        },
    },

    input: {
        backgroundColor: theme.white,
        borderColor: theme.colors.gray[4],
        color: theme.black,

        '&::placeholder': {
            color: theme.colors.gray[5],
        },
    },

    inputLabel: {
        color: theme.black,
    },

    control: {
        backgroundColor: theme.colors[theme.primaryColor][6],
    },
}));

const customerCare = () => {
    const { classes } = useStyles();
    const [value, setValue] = useState('react');
    return (
        <>
            <Global
                styles={css`
                    body {
                        background-color: #f8f8f8;
                        // background-color: #f8f9fa;
                    }
                `}
            />
            <Box mt="-20px">
                <BackgroundImage
                    pos="relative"
                    h="215px"
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
                    mt="-160px"
                    pos="relative"
                    size="xl"
                    sx={{
                        zIndex: 2,
                    }}
                >
                    <Box>
                        <Title
                            order={2}
                            c="#FFF"
                            // className={classes.title}
                            // ta="center"
                            mt="sm"
                            // mb={32}
                            fw="400"
                        >
                            How can I help you today?
                        </Title>
                        <SimpleGrid py={32} cols={4} spacing="32px">
                            <Paper
                                component="a"
                                href="/"
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
                                <Avatar
                                    color="#0a73b7"
                                    // color="#016FD2"
                                    size={80}
                                    radius={80}
                                    mx="auto"
                                >
                                    <IconBed
                                        size={42}
                                        stroke={2}
                                        // color="#94A3B8"
                                    />
                                </Avatar>
                                <Text ta="center" fz="lg" weight={500} mt="md">
                                    Book Hotels
                                </Text>
                                <Text ta="center" c="dimmed" fz="sm">
                                    How to book a Hotel with us
                                </Text>
                            </Paper>
                            <Paper
                                component="a"
                                href="/"
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
                                <Avatar
                                    color="#0a73b7"
                                    size={80}
                                    radius={80}
                                    mx="auto"
                                >
                                    <IconPlane
                                        size={42}
                                        stroke={2}
                                        // color="#94A3B8"
                                    />
                                </Avatar>
                                <Text ta="center" fz="lg" weight={500} mt="md">
                                    Book Flights
                                </Text>
                                <Text ta="center" c="dimmed" fz="sm">
                                    How to book a Flight with us
                                </Text>
                            </Paper>
                            <Paper
                                component="a"
                                href="/"
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
                                <Avatar
                                    color="#0a73b7"
                                    size={80}
                                    radius={80}
                                    mx="auto"
                                >
                                    <IconWallet size={42} stroke={2} />
                                </Avatar>
                                <Text ta="center" fz="lg" weight={500} mt="md">
                                    Payment
                                </Text>
                                <Text ta="center" c="dimmed" fz="sm">
                                    Learn on how to make a payment?
                                </Text>
                            </Paper>
                            <Paper
                                component="a"
                                href="/"
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
                                <Avatar
                                    color="#0a73b7"
                                    size={80}
                                    radius={80}
                                    mx="auto"
                                >
                                    <IconNotes size={42} stroke={2} />
                                </Avatar>
                                <Text ta="center" fz="lg" weight={500} mt="md">
                                    Bookings
                                </Text>
                                <Text ta="center" c="dimmed" fz="sm">
                                    Manage your bookings
                                </Text>
                            </Paper>
                        </SimpleGrid>
                    </Box>
                    <Grid gutter="32px" mt={64}>
                        <Grid.Col span={9}>
                            <SimpleGrid cols={2} mb="lg" spacing="32px">
                                <Paper
                                    component="a"
                                    href="/"
                                    radius="sm"
                                    withBorder
                                    // shadow="lg"
                                    p="lg"
                                    sx={(theme) => ({
                                        // backgroundColor:
                                        //     theme.colorScheme === 'dark'
                                        //         ? theme.colors.dark[8]
                                        //         : theme.white,
                                        minHeight: '200px',
                                        background:
                                            'url(/img/banner/1eebf4765d5f2bf497beb08f4e38d06b.png) #FFF right center no-repeat',
                                        backgroundSize: 'contain',
                                    })}
                                >
                                    <Text
                                        // ta="center"
                                        fz="lg"
                                        weight={400}
                                        mb="md"
                                        c="#0a73b7"
                                    >
                                        Knowledge Base
                                    </Text>
                                    <Text c="dimmed" fz="md">
                                        You can may want read our "how to" pages
                                        to learn more on how easy it is to book
                                        a hotel or a flight on nusatrip.com.
                                    </Text>
                                </Paper>
                                <Paper
                                    component="a"
                                    href="/"
                                    radius="sm"
                                    withBorder
                                    // shadow="lg"
                                    p="lg"
                                    sx={(theme) => ({
                                        // backgroundColor:
                                        //     theme.colorScheme === 'dark'
                                        //         ? theme.colors.dark[8]
                                        //         : theme.white,
                                        minHeight: '200px',
                                        background:
                                            'url(/img/banner/22c1c6a4a327e459fb4fe393259ff69a.png) #FFF right center no-repeat',
                                        backgroundSize: 'contain',
                                    })}
                                >
                                    <Text
                                        // ta="center"
                                        fz="lg"
                                        weight={400}
                                        mb="sm"
                                        c="#0a73b7"
                                    >
                                        Call Center & Live Chat
                                    </Text>
                                    <Text c="dimmed" fz="md">
                                        Nusatrip online travel consultants are
                                        available 24/7 to help you with your
                                        travel arrangements or booking
                                        amendements.
                                    </Text>
                                </Paper>
                            </SimpleGrid>

                            <SectionTitle title="Frequently Asked Questions" />
                            <SimpleGrid cols={2} spacing="32px">
                                <Paper
                                    component="a"
                                    href="/"
                                    radius="sm"
                                    withBorder
                                    sx={(theme) => ({
                                        backgroundColor:
                                            theme.colorScheme === 'dark'
                                                ? theme.colors.dark[8]
                                                : theme.white,
                                    })}
                                >
                                    <NavLink
                                        label="General Inquiries"
                                        icon={
                                            <IconInfoCircle
                                                size="21px"
                                                stroke={1.5}
                                            />
                                        }
                                        rightSection={
                                            <IconChevronRight
                                                size="16px"
                                                stroke={1.5}
                                            />
                                        }
                                        sx={(theme) => ({
                                            borderBottom: `1px solid ${theme.colors.gray[3]}`,
                                        })}
                                    />
                                    <NavLink
                                        label="Payment"
                                        icon={
                                            <IconWallet
                                                size="21px"
                                                stroke={1.5}
                                            />
                                        }
                                        rightSection={
                                            <IconChevronRight
                                                size="16px"
                                                stroke={1.5}
                                            />
                                        }
                                        sx={(theme) => ({
                                            borderBottom: `1px solid ${theme.colors.gray[3]}`,
                                        })}
                                    />
                                    <NavLink
                                        label="Flight Cancelation & Reschedule"
                                        icon={
                                            <IconPlaneOff
                                                size="21px"
                                                stroke={1.5}
                                            />
                                        }
                                        rightSection={
                                            <IconChevronRight
                                                size="16px"
                                                stroke={1.5}
                                            />
                                        }
                                        sx={(theme) => ({
                                            borderBottom: `1px solid ${theme.colors.gray[3]}`,
                                        })}
                                    />
                                    <NavLink
                                        label="Reschedule Request"
                                        icon={
                                            <IconCalendarStats
                                                size="21px"
                                                stroke={1.5}
                                            />
                                        }
                                        rightSection={
                                            <IconChevronRight
                                                size="16px"
                                                stroke={1.5}
                                            />
                                        }
                                        sx={(theme) => ({
                                            borderBottom: `1px solid ${theme.colors.gray[3]}`,
                                        })}
                                    />
                                    <NavLink
                                        label="Cancel & Refund Request"
                                        icon={
                                            <IconReceiptRefund
                                                size="21px"
                                                stroke={1.5}
                                            />
                                        }
                                        rightSection={
                                            <IconChevronRight
                                                size="16px"
                                                stroke={1.5}
                                            />
                                        }
                                        sx={(theme) => ({
                                            borderBottom: `1px solid ${theme.colors.gray[3]}`,
                                        })}
                                    />
                                    <NavLink
                                        label="Web & Apps"
                                        icon={
                                            <IconAppWindow
                                                size="21px"
                                                stroke={1.5}
                                            />
                                        }
                                        rightSection={
                                            <IconChevronRight
                                                size="16px"
                                                stroke={1.5}
                                            />
                                        }
                                        sx={(theme) => ({
                                            borderBottom: 'none',
                                        })}
                                    />
                                </Paper>
                                <Paper
                                    component="a"
                                    href="/"
                                    radius="sm"
                                    withBorder
                                    sx={(theme) => ({
                                        backgroundColor:
                                            theme.colorScheme === 'dark'
                                                ? theme.colors.dark[8]
                                                : theme.white,
                                    })}
                                >
                                    <NavLink
                                        label="Flight"
                                        icon={
                                            <IconPlane
                                                size="21px"
                                                stroke={1.5}
                                            />
                                        }
                                        rightSection={
                                            <IconChevronRight
                                                size="16px"
                                                stroke={1.5}
                                            />
                                        }
                                        sx={(theme) => ({
                                            borderBottom: `1px solid ${theme.colors.gray[3]}`,
                                        })}
                                    />
                                    <NavLink
                                        label="Hotel"
                                        icon={
                                            <IconBed size="21px" stroke={1.5} />
                                        }
                                        rightSection={
                                            <IconChevronRight
                                                size="16px"
                                                stroke={1.5}
                                            />
                                        }
                                        sx={(theme) => ({
                                            borderBottom: `1px solid ${theme.colors.gray[3]}`,
                                        })}
                                    />
                                    <NavLink
                                        label="Check-in"
                                        icon={
                                            <IconCalendarUp
                                                size="21px"
                                                stroke={1.5}
                                            />
                                        }
                                        rightSection={
                                            <IconChevronRight
                                                size="16px"
                                                stroke={1.5}
                                            />
                                        }
                                        sx={(theme) => ({
                                            borderBottom: `1px solid ${theme.colors.gray[3]}`,
                                        })}
                                    />
                                    <NavLink
                                        label="Baggage"
                                        icon={
                                            <IconLuggage
                                                size="21px"
                                                stroke={1.5}
                                            />
                                        }
                                        rightSection={
                                            <IconChevronRight
                                                size="16px"
                                                stroke={1.5}
                                            />
                                        }
                                        sx={(theme) => ({
                                            borderBottom: `1px solid ${theme.colors.gray[3]}`,
                                        })}
                                    />
                                    <NavLink
                                        label="Travel Insurance"
                                        icon={
                                            <IconShieldCheck
                                                size="21px"
                                                stroke={1.5}
                                            />
                                        }
                                        rightSection={
                                            <IconChevronRight
                                                size="16px"
                                                stroke={1.5}
                                            />
                                        }
                                        sx={(theme) => ({
                                            borderBottom: `1px solid ${theme.colors.gray[3]}`,
                                        })}
                                    />
                                    <NavLink
                                        label="Others"
                                        icon={
                                            <IconDotsCircleHorizontal
                                                size="21px"
                                                stroke={1.5}
                                            />
                                        }
                                        rightSection={
                                            <IconChevronRight
                                                size="16px"
                                                stroke={1.5}
                                            />
                                        }
                                    />
                                </Paper>
                            </SimpleGrid>
                            <Space h="32px" />
                            <SectionTitle title="Contact Us" />
                            <Paper withBorder className={classes.form}>
                                <Box mb={24}>
                                    <Radio.Group
                                        value={value}
                                        onChange={setValue}
                                        name="topic"
                                        label="Select Topic"
                                        description=""
                                        withAsterisk
                                    >
                                        <Group mt={8}>
                                            <Radio
                                                value="hotel"
                                                label="Hotel Booking"
                                                icon={CheckIcon}
                                            />
                                            <Radio
                                                value="flight"
                                                label="Flight Reservation"
                                                icon={CheckIcon}
                                            />
                                            <Radio
                                                value="payment"
                                                label="Payment"
                                                icon={CheckIcon}
                                            />
                                            <Radio
                                                value="website"
                                                label="Website"
                                                icon={CheckIcon}
                                            />
                                            <Radio
                                                value="comment"
                                                label="Comments and Feedback"
                                                icon={CheckIcon}
                                            />
                                        </Group>
                                    </Radio.Group>
                                </Box>
                                <Divider my="md" />
                                <SimpleGrid cols={2} spacing="xs">
                                    <TextInput
                                        label="Subject"
                                        placeholder="Type your subject"
                                        required
                                        classNames={{
                                            input: classes.input,
                                            label: classes.inputLabel,
                                        }}
                                    />
                                    <TextInput
                                        label="Booking Code"
                                        placeholder="Type your Booking Code"
                                        classNames={{
                                            input: classes.input,
                                            label: classes.inputLabel,
                                        }}
                                    />
                                    <TextInput
                                        label="Name"
                                        placeholder="NusaTroop"
                                        required
                                        classNames={{
                                            input: classes.input,
                                            label: classes.inputLabel,
                                        }}
                                    />
                                    <TextInput
                                        label="Email"
                                        placeholder="nusatroop@nusatrip.com"
                                        required
                                        classNames={{
                                            input: classes.input,
                                            label: classes.inputLabel,
                                        }}
                                    />
                                </SimpleGrid>
                                <Textarea
                                    required
                                    label="Your message"
                                    placeholder=""
                                    minRows={4}
                                    mt="md"
                                    classNames={{
                                        input: classes.input,
                                        label: classes.inputLabel,
                                    }}
                                />

                                <Group position="right" mt="md">
                                    <Button className={classes.control}>
                                        Send message
                                    </Button>
                                </Group>
                            </Paper>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <StickyBox offsetTop={20} offsetBottom={20}>
                                <ContactInfo />
                            </StickyBox>
                        </Grid.Col>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default customerCare;

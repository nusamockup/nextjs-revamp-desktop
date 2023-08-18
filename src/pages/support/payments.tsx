import { css, Global } from '@emotion/react';
import {
    ActionIcon,
    Affix,
    BackgroundImage,
    Box,
    Container,
    createStyles,
    Divider,
    Flex,
    Grid,
    Group,
    List,
    Overlay,
    Paper,
    rem,
    SegmentedControl,
    SimpleGrid,
    Stack,
    Tabs,
    TabsProps,
    Text,
    Title,
    Transition,
} from '@ns-ui/core';
import { useWindowScroll } from '@ns-ui/hooks';
import { IconArrowUp, IconBulb } from '@tabler/icons-react';
import Image from 'next/image';
import { useState } from 'react';
import NsImage from 'src/comps/ns-image/ns-image';
import AtmbersamaNetwork from '../../comps/support/atmbersama-network';
import PrimaNetwork from '../../comps/support/prima-network';

const useStyles = createStyles((theme) => ({
    listItem: {
        padding: '4px',
        borderBottom: '1px solid #ccc',
    },
}));
function StyledTabs(props: TabsProps) {
    return (
        <Tabs
            unstyled
            styles={(theme) => ({
                tab: {
                    ...theme.fn.focusStyles(),
                    background: 'transparent',
                    // backgroundColor:
                    //     theme.colorScheme === 'dark'
                    //         ? theme.colors.dark[6]
                    //         : theme.white,
                    color:
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[0]
                            : theme.colors.gray[9],
                    border: `${rem(1)} solid ${
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[6]
                            : theme.colors.gray[4]
                    }`,
                    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
                    cursor: 'pointer',
                    fontSize: theme.fontSizes.sm,
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'left',
                    borderRadius: theme.radius.sm,

                    '&[data-active]': {
                        backgroundColor: theme.colors.blue[7],
                        borderColor: theme.colors.blue[7],
                        color: theme.white,
                    },
                },

                tabsList: {
                    display: 'flex',
                },
            })}
            {...props}
        />
    );
}

const Payments = () => {
    const { classes } = useStyles();
    const [scroll, scrollTo] = useWindowScroll();
    const [activeTab, setActiveTab] = useState('creditcard');
    // const [activeTab, setActiveTab] = useState<string | null>('atm');
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
                                Payment on NusaTrip
                            </Title>
                        </Box>
                    </Container>
                </BackgroundImage>
            </Box>
            <Container mt={60} size="xl">
                <Grid>
                    <Grid.Col span={9}>
                        <Title order={3} fw={400}>
                            Payment Methods
                        </Title>
                        <Text mt={20} size="sm" c="dark">
                            Payment can be made via three different methods,
                            either by ATM Payment / Bank transfer or Online Bank
                            Solutions or Credit Card
                        </Text>
                        {/* <NsImage
                            mt={20}
                            width="90%"
                            src="/img/support/payment-method.svg"
                        /> */}
                    </Grid.Col>
                </Grid>

                <Grid>
                    <Grid.Col span={9}>
                        <SegmentedControl
                            fullWidth
                            size="sm"
                            mt={40}
                            value={activeTab}
                            onChange={setActiveTab}
                            data={[
                                {
                                    label: 'Credit Card Payment',
                                    value: 'creditcard',
                                },
                                { label: 'ATM & Bank Transfer', value: 'atm' },
                                {
                                    label: 'Online Bank Solutions',
                                    value: 'online',
                                },
                            ]}
                            styles={{
                                root: {
                                    backgroundColor: '#ced4da',
                                },
                            }}
                        />
                    </Grid.Col>
                </Grid>

                <Tabs value={activeTab} mt={20}>
                    <Tabs.Panel mt={10} value="atm" pt="xs">
                        <Title order={5}>ATM & Bank Transfer Payments</Title>
                        <Text size="sm" mt={0}>
                            To make a real-time payment by ATM or bank transfer,
                            click on the tab titled ATM / PAYMENTS. NusaTrip.com
                            works in cooperation with :
                        </Text>
                        <Tabs
                            defaultValue="bca"
                            my={20}
                            orientation="vertical"
                            placement="right"
                        >
                            <Grid>
                                <Grid.Col span={9}>
                                    <Tabs.Panel value="bca" pt="xs" pr="20px">
                                        <Group
                                            position="apart"
                                            mr={20}
                                            align="end"
                                        >
                                            <Text size="md">
                                                How to pay with Bank BCA
                                            </Text>
                                            <Image
                                                src="/img/bank/bca-color.svg"
                                                width={102}
                                                height={32}
                                                alt="logo BCA"
                                            />
                                        </Group>
                                        <Divider my={20} />
                                        <SimpleGrid
                                            cols={3}
                                            spacing={20}
                                            breakpoints={[
                                                {
                                                    maxWidth: 'lg',
                                                    cols: 2,
                                                    spacing: 'md',
                                                },
                                            ]}
                                        >
                                            <Paper p="md" withBorder>
                                                <Title order={6}>BCA ATM</Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Select Other
                                                        Transactions
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Payment
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Following Screen
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Other
                                                    </List.Item>
                                                    <List.Item>
                                                        Input NusaTrip.com
                                                        Company
                                                        <br />
                                                        <strong>
                                                            Code : 710418
                                                        </strong>
                                                    </List.Item>
                                                    <List.Item>
                                                        Input payment code
                                                    </List.Item>
                                                    <List.Item>
                                                        Validate the information
                                                        displayed and approve
                                                        payment
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    BCA Virtual Account - ATM
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Select Other
                                                        Transactions
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Transfer
                                                    </List.Item>
                                                    <List.Item>
                                                        Select BCA Virtual
                                                        Account
                                                    </List.Item>
                                                    <List.Item>
                                                        Input BCA Virtual
                                                        Account number we gave
                                                        you
                                                    </List.Item>
                                                    <List.Item>
                                                        Follow instructions to
                                                        complete the transaction
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    BCA Virtual Account -
                                                    Internet Banking
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Log-in to KlikBCA (have
                                                        your token ready)
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Fund Transfer
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Transfer to BCA
                                                        Virtual Account
                                                    </List.Item>
                                                    <List.Item>
                                                        Input BCA Virtual
                                                        Account number we gave
                                                        you
                                                    </List.Item>
                                                    <List.Item>
                                                        Follow instructions to
                                                        complete the transaction
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    BCA Virtual Account - Mobile
                                                    Banking
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Log-in to m-BCA
                                                    </List.Item>
                                                    <List.Item>
                                                        Select m-Transfer
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Transfer to BCA
                                                        Virtual Account
                                                    </List.Item>
                                                    <List.Item>
                                                        Input BCA Virtual
                                                        Account number we gave
                                                        you
                                                    </List.Item>
                                                    <List.Item>
                                                        Input your m-BCA PIN
                                                    </List.Item>
                                                    <List.Item>
                                                        Follow instructions to
                                                        complete the transaction
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    BCA Virtual Account - Mobile
                                                    Banking (Sim ToolKit)
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Select m-BCA
                                                    </List.Item>
                                                    <List.Item>
                                                        Select m-Payment
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Others / Lainnya
                                                    </List.Item>
                                                    <List.Item>
                                                        Type TVA then click Ok
                                                    </List.Item>
                                                    <List.Item>
                                                        Input BCA Virtual
                                                        Account number we gave
                                                        you
                                                    </List.Item>
                                                    <List.Item>
                                                        Input your m-BCA PIN
                                                        then click OK
                                                    </List.Item>
                                                    <List.Item>
                                                        Follow instructions to
                                                        complete the transaction
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>Cash</Title>
                                                <Text
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    Cash Payment can be done at
                                                    a BCA branch counter (within
                                                    the same payment time limit
                                                    provided in the booking
                                                    confirmation page)
                                                </Text>
                                            </Paper>
                                        </SimpleGrid>
                                        {/* BCA tab content */}
                                    </Tabs.Panel>

                                    <Tabs.Panel
                                        value="mandiri"
                                        pt="xs"
                                        pr="20px"
                                    >
                                        <Group
                                            position="apart"
                                            mr={20}
                                            align="end"
                                        >
                                            <Text size="md">
                                                How to pay with Bank Mandiri
                                            </Text>
                                            <Image
                                                src="/img/bank/mandiri-color.svg"
                                                width={109.65}
                                                height={32}
                                                alt="logo mandiri"
                                            />
                                        </Group>
                                        <Divider my={20} />
                                        <SimpleGrid
                                            cols={3}
                                            spacing={20}
                                            breakpoints={[
                                                {
                                                    maxWidth: 'lg',
                                                    cols: 2,
                                                    spacing: 'md',
                                                },
                                            ]}
                                        >
                                            <Paper p="md" withBorder>
                                                <Title order={6}>ATM</Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Select Payment/Purchase
                                                    </List.Item>
                                                    <List.Item>
                                                        Select MultiPayment
                                                    </List.Item>
                                                    <List.Item>
                                                        Input Company /
                                                        Institution{' '}
                                                        <strong>
                                                            Code 70014
                                                        </strong>
                                                    </List.Item>
                                                    <List.Item>
                                                        Input Mandiri Virtual
                                                        Account number we gave
                                                        you
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Yes to proceed
                                                        payment
                                                    </List.Item>
                                                </List>
                                                <Text
                                                    mt={10}
                                                    size="xs"
                                                    c="dimmed"
                                                >
                                                    Alternative : You can also
                                                    pay from any ATM with an ATM
                                                    BERSAMA or PRIMA logo (if
                                                    your card has a ATM BERSAMA
                                                    or PRIMA logo at the back)
                                                    (Mandiri Bank Code is 008)
                                                </Text>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    Internet Banking
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Log-in to Internet
                                                        Banking (have your token
                                                        ready)
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Payment
                                                    </List.Item>
                                                    <List.Item>
                                                        Select MultiPayment
                                                    </List.Item>
                                                    <List.Item>
                                                        Select 'TransferPay' as
                                                        Service Provider
                                                    </List.Item>
                                                    <List.Item>
                                                        Input Payment Code we
                                                        gave you
                                                    </List.Item>
                                                    <List.Item>
                                                        Check IDR
                                                    </List.Item>
                                                    <List.Item>
                                                        Click Continue to
                                                        proceed payment
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    Mobile Banking
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Log-in to Mobile Banking
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Payment
                                                    </List.Item>
                                                    <List.Item>
                                                        Select MultiPayment
                                                    </List.Item>
                                                    <List.Item>
                                                        Select 'TransferPay' as
                                                        Service Provider
                                                    </List.Item>
                                                    <List.Item>
                                                        Input Payment Code we
                                                        gave you
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Lanjut
                                                    </List.Item>
                                                    <List.Item>
                                                        Input your OTP and PIN
                                                    </List.Item>
                                                    <List.Item>
                                                        Select OK
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>Cash</Title>
                                                <Text
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    Cash Payment can be done at
                                                    a Bank Mandiri branch
                                                    (within the same payment
                                                    time limit provided in the
                                                    booking confirmation page)
                                                </Text>
                                            </Paper>
                                        </SimpleGrid>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="bni" pt="xs" pr="20px">
                                        <Group
                                            position="apart"
                                            mr={20}
                                            align="end"
                                        >
                                            <Text size="md">
                                                How to pay with Bank BNI
                                            </Text>
                                            <Image
                                                src="/img/bank/bni-color.svg"
                                                width={98.25}
                                                height={32}
                                                alt="logo bni"
                                            />
                                        </Group>
                                        <Divider my={20} />
                                        <SimpleGrid
                                            cols={3}
                                            spacing={20}
                                            breakpoints={[
                                                {
                                                    maxWidth: 'lg',
                                                    cols: 2,
                                                    spacing: 'md',
                                                },
                                            ]}
                                        >
                                            <Paper p="md" withBorder>
                                                <Title order={6}>ATM</Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Select Transfer
                                                    </List.Item>
                                                    <List.Item>
                                                        Select to BNI Account
                                                    </List.Item>
                                                    <List.Item>
                                                        Input Virtual Account
                                                        number we gave you
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the exact amount
                                                    </List.Item>
                                                    <List.Item>
                                                        Validate the information
                                                        displayed
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Yes to proceed
                                                        payment
                                                    </List.Item>
                                                </List>
                                                <Text
                                                    mt={10}
                                                    size="xs"
                                                    c="dimmed"
                                                >
                                                    Alternative : You can also
                                                    pay from any ATM with an ATM
                                                    BERSAMA or PRIMA or ALTO
                                                    logo (if your card has a ATM
                                                    BERSAMA or PRIMA logo at the
                                                    back) (BNI Bank Code is 009)
                                                </Text>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    Internet Banking
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Log-in to Internet
                                                        Banking (have your token
                                                        ready)
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Transaction
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Info and
                                                        Administration
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Set Destination
                                                        Account
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Add Destination
                                                        Account and then select
                                                        OK
                                                    </List.Item>
                                                    <List.Item>
                                                        Input Order Number as
                                                        NusaTrip (for example)
                                                    </List.Item>
                                                    <List.Item>
                                                        Input Virtual Account
                                                        number we gave you
                                                    </List.Item>

                                                    <List.Item>
                                                        Fill all data required
                                                        and then click Continue
                                                    </List.Item>
                                                    <List.Item>
                                                        Input Authentication
                                                        Code Token and then
                                                        select Process
                                                    </List.Item>
                                                    <List.Item>
                                                        You have successfully
                                                        added destination
                                                        account
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Menu Transfer and
                                                        then select Transfer to
                                                        BNI Account
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Your Destination
                                                        Account : NusaTrip
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the amount and
                                                        then input
                                                        Authentication Code
                                                        Token
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    Mobile Banking
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Log-in to Mobile Banking
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Transfer
                                                    </List.Item>
                                                    <List.Item>
                                                        Select to BNI Account
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Destination
                                                        Account
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Input New Account
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the Virtual
                                                        Account number we gave
                                                        you and then click
                                                        Continue
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the amount and
                                                        click Continue
                                                    </List.Item>
                                                    <List.Item>
                                                        Input Your Transaction
                                                        Password and then click
                                                        Continue
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    BNI SMS Banking
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Log-in to SMS Banking
                                                        BNI
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Transfer
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Trf Rekening BNI
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the Virtual
                                                        Account number we gave
                                                        you
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the amount and
                                                        select Process
                                                    </List.Item>
                                                    <List.Item>
                                                        In PopUp Message select
                                                        Agree
                                                    </List.Item>
                                                    <List.Item>
                                                        Input Your PIN OR
                                                    </List.Item>
                                                    <List.Item>
                                                        Through SMS to 3346 with
                                                        format : TRF[SPACE]BNI
                                                        Virtual Account
                                                        Number[SPACE]AMOUNT
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>Cash</Title>
                                                <Text
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    Cash Payment can be done at
                                                    a BNI branch (within the
                                                    same payment time limit
                                                    provided in the booking
                                                    confirmation page)
                                                </Text>
                                            </Paper>
                                        </SimpleGrid>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="bri" pt="xs" pr="20px">
                                        <Group
                                            position="apart"
                                            mr={20}
                                            align="end"
                                        >
                                            <Text size="md">
                                                How to pay with Bank BRI
                                            </Text>
                                            <Image
                                                src="/img/bank/bri-color.svg"
                                                width={135.92}
                                                height={32}
                                                alt="logo bri"
                                            />
                                        </Group>
                                        <Divider my={20} />
                                        <SimpleGrid
                                            cols={3}
                                            spacing={20}
                                            breakpoints={[
                                                {
                                                    maxWidth: 'lg',
                                                    cols: 2,
                                                    spacing: 'md',
                                                },
                                            ]}
                                        >
                                            <Paper p="md" withBorder>
                                                <Title order={6}>ATM</Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Select Other Transaction
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Payment
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Other Payment
                                                    </List.Item>
                                                    <List.Item>
                                                        Select BRIVA
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the BRIVA Number
                                                        we gave you
                                                    </List.Item>
                                                    <List.Item>
                                                        BRIVA Payment data will
                                                        be displayed and then
                                                        select Yes to proceed
                                                        payment
                                                    </List.Item>
                                                </List>
                                                <Text
                                                    mt={10}
                                                    size="xs"
                                                    c="dimmed"
                                                >
                                                    Alternative : You can also
                                                    pay from any ATM with an ATM
                                                    BERSAMA or PRIMA logo (if
                                                    your card has a ATM BERSAMA
                                                    or PRIMA logo at the back)
                                                    (BRI Bank Code is 002)
                                                </Text>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    Internet Banking
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Log-in to Internet
                                                        Banking
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Payment
                                                    </List.Item>
                                                    <List.Item>
                                                        Select BRIVA
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Source Account
                                                        and then input Payment
                                                        Code (BRIVA Number) we
                                                        gave you
                                                    </List.Item>
                                                    <List.Item>
                                                        Input your Password and
                                                        then input your mToken
                                                    </List.Item>
                                                    <List.Item>
                                                        Click Send to proceed
                                                        payment
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    Mobile Banking
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Log-in to BRI Mobile
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Mobile Banking
                                                        BRI
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Payment
                                                    </List.Item>
                                                    <List.Item>
                                                        Select BRIVA
                                                    </List.Item>
                                                    <List.Item>
                                                        Input BRIVA Number we
                                                        gave you
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the amount and
                                                        click OK
                                                    </List.Item>
                                                    <List.Item>
                                                        Input your PIN Mobile
                                                        and click Send
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>Cash</Title>
                                                <Text
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    Cash Payment can be done at
                                                    a BRI branch (within the
                                                    same payment time limit
                                                    provided in the booking
                                                    confirmation page)
                                                </Text>
                                            </Paper>
                                        </SimpleGrid>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="cimb" pt="xs" pr="20px">
                                        <Group
                                            position="apart"
                                            mr={20}
                                            align="end"
                                        >
                                            <Text size="md">
                                                How to pay with Bank CIMB Niaga
                                            </Text>
                                            <Image
                                                src="/img/bank/cimb-color.svg"
                                                width={208.96}
                                                height={32}
                                                alt="logo cimb"
                                            />
                                        </Group>
                                        <Divider my={20} />
                                        <SimpleGrid
                                            cols={3}
                                            spacing={20}
                                            breakpoints={[
                                                {
                                                    maxWidth: 'lg',
                                                    cols: 2,
                                                    spacing: 'md',
                                                },
                                            ]}
                                        >
                                            <Paper p="md" withBorder>
                                                <Title order={6}>ATM</Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Select Payment
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Virtual Account
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the Virtual
                                                        Account number we gave
                                                        you
                                                    </List.Item>
                                                    <List.Item>
                                                        Select your Source
                                                        Account and then click
                                                        Proceed to continue
                                                    </List.Item>
                                                </List>
                                                <Text
                                                    mt={10}
                                                    size="xs"
                                                    c="dimmed"
                                                >
                                                    Alternative : You can also
                                                    pay from any ATM with an ATM
                                                    BERSAMA or PRIMA logo (if
                                                    your card has a ATM BERSAMA
                                                    or PRIMA logo at the back)
                                                    (CIMB NIAGA Bank Code is
                                                    022)
                                                </Text>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    Internet Banking
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Log-in to Internet
                                                        Banking
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Pay Bills
                                                    </List.Item>
                                                    <List.Item>
                                                        Select your Source
                                                        Account that you want to
                                                        use
                                                    </List.Item>
                                                    <List.Item>
                                                        In Payment Type select
                                                        Virtual Account
                                                    </List.Item>
                                                    <List.Item>
                                                        Input Virtual Account
                                                        number we gave you
                                                    </List.Item>
                                                    <List.Item>
                                                        Payment confirmation
                                                        will be displayed and
                                                        then input your mPIN
                                                    </List.Item>
                                                    <List.Item>
                                                        Click Submit to proceed
                                                        payment
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    Mobile Banking
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Log-in to Go Mobile
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Transfer
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Transfer to Other
                                                        CIMB NIAGA Account
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Source Account
                                                        and then input the
                                                        Virtual Account number
                                                        we gave you
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the amount and
                                                        click Submit
                                                    </List.Item>
                                                    <List.Item>
                                                        Virtual Account data
                                                        will be displayed
                                                    </List.Item>
                                                    <List.Item>
                                                        Input your PIN Mobile
                                                        and click Confirm
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>Note</Title>
                                                <Text
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    Teller / Cash payment is not
                                                    allowed
                                                </Text>
                                            </Paper>
                                        </SimpleGrid>
                                    </Tabs.Panel>

                                    <Tabs.Panel
                                        value="maybank"
                                        pt="xs"
                                        pr="20px"
                                    >
                                        <Group
                                            position="apart"
                                            mr={20}
                                            align="end"
                                        >
                                            <Text size="md">
                                                How to pay with Maybank
                                            </Text>
                                            <Image
                                                src="/img/bank/maybank-color.svg"
                                                width={117.43}
                                                height={32}
                                                alt="logo maybank"
                                            />
                                        </Group>
                                        <Divider my={20} />
                                        <SimpleGrid
                                            cols={3}
                                            spacing={20}
                                            breakpoints={[
                                                {
                                                    maxWidth: 'lg',
                                                    cols: 2,
                                                    spacing: 'md',
                                                },
                                            ]}
                                        >
                                            <Paper p="md" withBorder>
                                                <Title order={6}>ATM</Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Select Payment
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Virtual Account
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the Virtual
                                                        Account number we gave
                                                        you
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the exact amount
                                                    </List.Item>
                                                    <List.Item>
                                                        Validate the information
                                                        displayed
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Yes to proceed
                                                        payment
                                                    </List.Item>
                                                </List>
                                                <Text
                                                    mt={10}
                                                    size="xs"
                                                    c="dimmed"
                                                >
                                                    Alternative : You can also
                                                    pay from any ATM with an ATM
                                                    BERSAMA or PRIMA or ALTO
                                                    logo (if your card has a ATM
                                                    BERSAMA or PRIMA or ALTO
                                                    logo at the back)
                                                    (MAYBANK/BII Bank Code is
                                                    016)
                                                </Text>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    Internet Banking
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Log-in to Maybank
                                                        Internet Banking
                                                        Personal web site (M2U)
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Fund Transfer
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Virtual Account
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Source Account
                                                    </List.Item>
                                                    <List.Item>
                                                        Input Virtual Account
                                                        number and the exact
                                                        amount to pay
                                                    </List.Item>
                                                    <List.Item>
                                                        A confirmation message
                                                        will show, input the SMS
                                                        token (TAC)
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    SMS+ Banking
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Select Transfer
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Virtual Account
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Source Account
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the Virtual
                                                        Account number and the
                                                        exact amount to pay and
                                                        follow the next step OR
                                                    </List.Item>
                                                    <List.Item>
                                                        Through USSD *141*3# :
                                                        Select Transfer, select
                                                        Virtual Account and
                                                        follow the next step
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>Cash</Title>
                                                <Text
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    Cash Payment can be done at
                                                    a Maybank branch (within the
                                                    same payment time limit
                                                    provided in the booking
                                                    confirmation page)
                                                </Text>
                                            </Paper>
                                        </SimpleGrid>
                                    </Tabs.Panel>

                                    <Tabs.Panel
                                        value="danamon"
                                        pt="xs"
                                        pr="20px"
                                    >
                                        <Group
                                            position="apart"
                                            mr={20}
                                            align="end"
                                        >
                                            <Stack spacing="0px">
                                                <Text size="md">
                                                    How to pay with Bank Danamon
                                                    Transfer
                                                </Text>
                                                <Text size="sm" c="dimmed">
                                                    You have the Option to do a
                                                    real-time transfer by : ATM,
                                                    SMS or Online Banking
                                                </Text>
                                            </Stack>
                                            <Image
                                                src="/img/bank/danamon-color.svg"
                                                width={127.2}
                                                height={32}
                                                alt="logo danamon"
                                            />
                                        </Group>
                                        <Divider my={20} />
                                        <SimpleGrid
                                            cols={3}
                                            spacing={20}
                                            breakpoints={[
                                                {
                                                    maxWidth: 'lg',
                                                    cols: 2,
                                                    spacing: 'md',
                                                },
                                            ]}
                                        >
                                            <Paper p="md" withBorder>
                                                <Title order={6}>ATM</Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        You need any Danamon ATM
                                                        card
                                                    </List.Item>
                                                    <List.Item>
                                                        Go to any Danamon ATM or
                                                        ATM machine with the ATM
                                                        BERSAMA or PRIMA logo
                                                    </List.Item>
                                                    <List.Item>
                                                        In the ATM menu, select
                                                        bank transfer to other
                                                        bank
                                                    </List.Item>
                                                    <List.Item>
                                                        Some ATM ask for a bank
                                                        code & a bank account,
                                                        some only ask for a bank
                                                        account (in that case
                                                        put the bank code at
                                                        begining of the account
                                                        number)
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the bank code and
                                                        bank account provided in
                                                        checkout confirmation
                                                    </List.Item>
                                                    <List.Item>
                                                        Then the amount to pay
                                                    </List.Item>
                                                    <List.Item>
                                                        There is no need to
                                                        input any reference
                                                        number
                                                    </List.Item>
                                                    <List.Item>
                                                        The ATM should show a
                                                        confirmation & the name
                                                        of the account owner
                                                        should be "nusatrip.com"
                                                    </List.Item>
                                                </List>
                                                {/* <Text mt={10} size="xs" c="dimmed">
                                            Alternative : You can also pay from
                                            any ATM with an ATM BERSAMA or PRIMA
                                            or ALTO logo (if your card has a ATM
                                            BERSAMA or PRIMA or ALTO logo at the
                                            back) (MAYBANK/BII Bank Code is 016)
                                        </Text> */}
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    Internet Banking
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Log-in to Bank Danamon
                                                        Online web site
                                                    </List.Item>
                                                    <List.Item>
                                                        In Transfer select :
                                                        Online Transfer
                                                        InterBank - Realtime
                                                        Transfer
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the bank code and
                                                        bank account provided in
                                                        checkout confirmation
                                                    </List.Item>
                                                    <List.Item>
                                                        Then the amount to pay
                                                    </List.Item>
                                                    <List.Item>
                                                        There is no need to
                                                        input any reference
                                                        number
                                                    </List.Item>
                                                    <List.Item>
                                                        A confirmation message
                                                        will show the account
                                                        owner, it should be
                                                        "nusatrip.com"
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    Mobile Banking
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        You can use Bank Danamon
                                                        Mobile application on a
                                                        smart phone
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Transfer To Other
                                                        Banks "Realtime
                                                        Transfer"
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the bank code and
                                                        bank account provided in
                                                        checkout confirmation
                                                    </List.Item>
                                                    <List.Item>
                                                        Then the amount to pay
                                                    </List.Item>
                                                    <List.Item>
                                                        There is no need to
                                                        input any reference
                                                        number
                                                    </List.Item>
                                                    <List.Item>
                                                        A confirmation message
                                                        will show the account
                                                        owner, it should be
                                                        "nusatrip.com"
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            {/* <Paper p="md" withBorder>
                                        <Title order={6}>Cash</Title>
                                        <Text size="sm" mt={10} c="dark">
                                            Cash Payment can be done at a
                                            Maybank branch (within the same
                                            payment time limit provided in the
                                            booking confirmation page)
                                        </Text>
                                    </Paper> */}
                                        </SimpleGrid>
                                    </Tabs.Panel>

                                    <Tabs.Panel
                                        value="permata"
                                        pt="xs"
                                        pr="20px"
                                    >
                                        <Group
                                            position="apart"
                                            mr={20}
                                            align="end"
                                        >
                                            <Stack spacing="0px">
                                                <Text size="md">
                                                    How to pay with Bank Permata
                                                    Transfer
                                                </Text>
                                                <Text size="sm" c="dimmed">
                                                    You have the Option to do a
                                                    real-time transfer by : ATM,
                                                    SMS or Online Banking
                                                </Text>
                                            </Stack>
                                            <Image
                                                src="/img/bank/permata-color.svg"
                                                width={129.57}
                                                height={32}
                                                alt="logo permata"
                                            />
                                        </Group>
                                        <Divider my={20} />
                                        <SimpleGrid
                                            cols={3}
                                            spacing={20}
                                            breakpoints={[
                                                {
                                                    maxWidth: 'lg',
                                                    cols: 2,
                                                    spacing: 'md',
                                                },
                                            ]}
                                        >
                                            <Paper p="md" withBorder>
                                                <Title order={6}>ATM</Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        You need any Permata ATM
                                                        card
                                                    </List.Item>
                                                    <List.Item>
                                                        Go to any Permata ATM or
                                                        ATM machine with the ATM
                                                        BERSAMA or PRIMA logo
                                                    </List.Item>
                                                    <List.Item>
                                                        In the ATM menu, select
                                                        bank transfer to other
                                                        bank
                                                    </List.Item>
                                                    <List.Item>
                                                        Some ATM ask for a bank
                                                        code & a bank account,
                                                        some only ask for a bank
                                                        account (in that case
                                                        put the bank code at
                                                        begining of the account
                                                        number)
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the bank code and
                                                        bank account provided in
                                                        checkout confirmation
                                                    </List.Item>
                                                    <List.Item>
                                                        Then the amount to pay
                                                    </List.Item>
                                                    <List.Item>
                                                        There is no need to
                                                        input any reference
                                                        number
                                                    </List.Item>
                                                    <List.Item>
                                                        The ATM should show a
                                                        confirmation & the name
                                                        of the account owner
                                                        should be "nusatrip.com"
                                                    </List.Item>
                                                </List>
                                                {/* <Text mt={10} size="xs" c="dimmed">
                                            Alternative : You can also pay from
                                            any ATM with an ATM BERSAMA or PRIMA
                                            or ALTO logo (if your card has a ATM
                                            BERSAMA or PRIMA or ALTO logo at the
                                            back) (MAYBANK/BII Bank Code is 016)
                                        </Text> */}
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    Internet Banking
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Log-in to Bank Permata
                                                        Online web site
                                                    </List.Item>
                                                    <List.Item>
                                                        In Transfer select :
                                                        Online Transfer
                                                        InterBank - Realtime
                                                        Transfer
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the bank code and
                                                        bank account provided in
                                                        checkout confirmation
                                                    </List.Item>
                                                    <List.Item>
                                                        Then the amount to pay
                                                    </List.Item>
                                                    <List.Item>
                                                        There is no need to
                                                        input any reference
                                                        number
                                                    </List.Item>
                                                    <List.Item>
                                                        A confirmation message
                                                        will show the account
                                                        owner, it should be
                                                        "nusatrip.com"
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    Mobile Banking
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        You can use Bank Permata
                                                        Mobile application on a
                                                        smart phone
                                                    </List.Item>
                                                    <List.Item>
                                                        Select Transfer To Other
                                                        Banks "Realtime
                                                        Transfer"
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the bank code and
                                                        bank account provided in
                                                        checkout confirmation
                                                    </List.Item>
                                                    <List.Item>
                                                        Then the amount to pay
                                                    </List.Item>
                                                    <List.Item>
                                                        There is no need to
                                                        input any reference
                                                        number
                                                    </List.Item>
                                                    <List.Item>
                                                        A confirmation message
                                                        will show the account
                                                        owner, it should be
                                                        "nusatrip.com"
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            {/* <Paper p="md" withBorder>
                                        <Title order={6}>Cash</Title>
                                        <Text size="sm" mt={10} c="dark">
                                            Cash Payment can be done at a
                                            Maybank branch (within the same
                                            payment time limit provided in the
                                            booking confirmation page)
                                        </Text>
                                    </Paper> */}
                                        </SimpleGrid>
                                    </Tabs.Panel>

                                    <Tabs.Panel value="panin" pt="xs" pr="20px">
                                        <Group
                                            position="apart"
                                            mr={20}
                                            align="end"
                                        >
                                            <Text size="md">
                                                How to pay with Bank Panin
                                                Transfer
                                            </Text>
                                            <Image
                                                src="/img/bank/panin-color.svg"
                                                width={177.26}
                                                height={22}
                                                alt="logo panin"
                                            />
                                        </Group>
                                        <Divider my={20} />
                                        <SimpleGrid
                                            cols={3}
                                            spacing={20}
                                            breakpoints={[
                                                {
                                                    maxWidth: 'lg',
                                                    cols: 2,
                                                    spacing: 'md',
                                                },
                                            ]}
                                        >
                                            <Paper p="md" withBorder>
                                                <Title order={6}>ATM</Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        With your Panin ATM
                                                        card, go to any Panin
                                                        ATM, select bank
                                                        transfer to other bank,
                                                        input the account number
                                                        we gave you & the exact
                                                        amount.
                                                    </List.Item>
                                                    <List.Item>
                                                        You can also pay from
                                                        any ATM with an ATM
                                                        Bersama or PRIMA logo
                                                        (if your card has a ATM
                                                        Bersama or PRIMA logo at
                                                        the back)
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    Internet Banking
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Log-in to Panin Online
                                                        web site
                                                    </List.Item>
                                                    <List.Item>
                                                        In Transfer select
                                                        Interbank Real Time
                                                        online Transfer (not LLG
                                                        or RTGS)
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the bank code and
                                                        bank account provided in
                                                        checkout confirmation
                                                    </List.Item>
                                                    <List.Item>
                                                        Then the amount to pay
                                                        (max Rp 25.000.000 per
                                                        transaction)
                                                    </List.Item>
                                                    <List.Item>
                                                        There is no need to
                                                        input any reference
                                                        number
                                                    </List.Item>
                                                    <List.Item>
                                                        A confirmation message
                                                        will show the account
                                                        owner, it should be
                                                        "nusatrip.com"
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>SMS</Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        if you have registered
                                                        SMS banking on your
                                                        account, you can make
                                                        the transfer via SMS
                                                        (please see Panin web
                                                        site for SMS format).
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                        </SimpleGrid>
                                    </Tabs.Panel>

                                    <Tabs.Panel
                                        value="atm-bersama"
                                        pt="xs"
                                        pr="20px"
                                    >
                                        <Group
                                            position="apart"
                                            mr={20}
                                            align="end"
                                        >
                                            <Text size="md">
                                                How to pay with ATM BERSAMA, ATM
                                                PRIMA, ALTO
                                            </Text>
                                            <Image
                                                src="/img/bank/atm-bersama-network.svg"
                                                width={171.46}
                                                height={32}
                                                alt="logo atm bersama network"
                                            />
                                        </Group>
                                        <Divider my={20} />
                                        <SimpleGrid
                                            cols={3}
                                            spacing={20}
                                            breakpoints={[
                                                {
                                                    maxWidth: 'lg',
                                                    cols: 2,
                                                    spacing: 'md',
                                                },
                                            ]}
                                        >
                                            <Paper p="md" withBorder>
                                                <Title order={6}>ATM</Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        You need any ATM card
                                                        under the ATM BERSAMA or
                                                        PRIMA or ALTO networks
                                                    </List.Item>
                                                    <List.Item>
                                                        In the ATM menu, select
                                                        Bank Transfer to Other
                                                        Bank
                                                    </List.Item>
                                                    <List.Item>
                                                        Some ATM ask for a Bank
                                                        Code & a Bank Account,
                                                        some only ask for a Bank
                                                        Account (in that case
                                                        put the bank code at
                                                        beginning of the account
                                                        number)
                                                    </List.Item>
                                                    <List.Item>
                                                        Input the Bank Code and
                                                        Bank Account provided in
                                                        checkout confirmation
                                                    </List.Item>
                                                    <List.Item>
                                                        Then enter the Amount to
                                                        pay
                                                    </List.Item>
                                                    <List.Item>
                                                        There is no need to
                                                        input any reference
                                                        number
                                                    </List.Item>
                                                    <List.Item>
                                                        The ATM should show a
                                                        confirmation & the name
                                                        of the account owner
                                                        should be 'NusaTrip.com'
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>
                                                    Real-Time Online Transfer
                                                </Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Some bank support
                                                        “real-time” online
                                                        transfer, this can be
                                                        used to pay
                                                    </List.Item>
                                                    <List.Item>
                                                        Select bank : Maybank /
                                                        BII (bank code : 016)
                                                        and use the account
                                                        provided for your
                                                        booking
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>Cash</Title>
                                                <Text
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    Cash Payment can be done at
                                                    a Maybank / BII branch
                                                    (within the same payment
                                                    time limit provided in the
                                                    booking confirmation page)
                                                </Text>
                                            </Paper>
                                            <Paper p="md" withBorder>
                                                <Title order={6}>Note</Title>
                                                <List
                                                    pr={20}
                                                    size="sm"
                                                    mt={10}
                                                    c="dark"
                                                >
                                                    <List.Item>
                                                        Your bank might support
                                                        SMS & Online Transfer
                                                        using one of this
                                                        network
                                                    </List.Item>
                                                    <List.Item>
                                                        If your bank payment
                                                        steps are not listed in
                                                        our help section, please
                                                        contact your bank to
                                                        confirm if SMS & Online
                                                        transfers can be used
                                                        over ATM BERSAMA, PRIMA
                                                        or ALTO (real-time
                                                        interbank transfer)
                                                    </List.Item>
                                                    <List.Item>
                                                        We do not support
                                                        non-real-time transfer,
                                                        like the one done with
                                                        LLG or RTGS
                                                    </List.Item>
                                                </List>
                                            </Paper>
                                        </SimpleGrid>
                                    </Tabs.Panel>
                                </Grid.Col>
                                <Grid.Col span={3}>
                                    <Tabs.List>
                                        <Tabs.Tab value="bca">
                                            Bank BCA
                                        </Tabs.Tab>
                                        <Tabs.Tab value="mandiri">
                                            Bank Mandiri
                                        </Tabs.Tab>
                                        <Tabs.Tab value="bni">
                                            Bank BNI
                                        </Tabs.Tab>
                                        <Tabs.Tab value="bri">
                                            Bank BRI
                                        </Tabs.Tab>
                                        <Tabs.Tab value="cimb">
                                            Bank CIMB Niaga
                                        </Tabs.Tab>
                                        <Tabs.Tab value="maybank">
                                            Maybank
                                        </Tabs.Tab>
                                        <Tabs.Tab value="danamon">
                                            Bank Danamon
                                        </Tabs.Tab>
                                        <Tabs.Tab value="permata">
                                            Permata Bank
                                        </Tabs.Tab>
                                        <Tabs.Tab value="panin">
                                            Bank Panin
                                        </Tabs.Tab>
                                        <Tabs.Tab value="atm-bersama">
                                            ATM BERSAMA, PRIMA, ALTO
                                        </Tabs.Tab>
                                    </Tabs.List>
                                </Grid.Col>
                            </Grid>
                        </Tabs>
                        <Grid>
                            <Grid.Col span={9}>
                                <Text mt={30} size="sm">
                                    Having selected the Bank or ATM Bersama
                                    Network to transfer to, click 'Pay Button'.
                                    The next page will load showing your booking
                                    details , checkout information & provide you
                                    with a unique bank account number for that
                                    booking (or virtual bank account) with the
                                    selected bank, to make the transfer.
                                </Text>
                                <Text mt={10} size="sm">
                                    On the check-out page, we will give you a
                                    time limit to pay, after which we will
                                    automatically cancel the booking.
                                </Text>
                                <Text mt={10} size="sm">
                                    If the booking amount is greater than
                                    10,000,000 you might need to do multiple
                                    transactions to the same account in order to
                                    transfer the full amount. It depends on the
                                    limit set on your account or card by the
                                    issuing bank.
                                </Text>
                                <Text mt={10} size="sm">
                                    Once you have transferred, we will
                                    automatically detect your transfer and send
                                    you a confirmation email with your booking &
                                    payment status, as well as the appropriate
                                    travel confirmation documents related to
                                    your booking. If you have created an
                                    account, the booking detail will be
                                    available in "My Bookings".
                                </Text>
                                <AtmbersamaNetwork />
                                <PrimaNetwork />
                            </Grid.Col>
                        </Grid>
                    </Tabs.Panel>

                    <Tabs.Panel mt={10} value="online" pt="xs">
                        <Grid>
                            <Grid.Col span={9}>
                                <Title order={5}>Online Bank Solutions</Title>
                                <Text size="sm" mt={30}>
                                    To make a payment through the supported
                                    Online Banking solutions, click on the tab
                                    titled ONLINE BANKING.
                                </Text>
                                <NsImage
                                    mt={20}
                                    width="90%"
                                    src="/img/bank/online-banking-1.svg"
                                />
                                <Text size="sm" mt={30}>
                                    We support Bank Mandiri Clickpay, KlikBCA
                                    and BCA KlikPay, select the one that you
                                    want to use for this transaction. Note that
                                    if you have never used this solution from
                                    your bank, you must activate the payment
                                    solution with the bank (see BCA KlikPay or
                                    clickpay mandiri).For Mandiri Clickpay,
                                    follow the instruction regarding the
                                    information you need to input on the page.
                                    Make sure that you have your secure mandiri
                                    token.For KlikBCA, a KlikBCA USER ID is
                                    required.
                                </Text>
                                <Text size="sm" mt={10}>
                                    Make sure that you have your secure BCA
                                    token device for the next stop on KlikBCA
                                    web site.
                                </Text>
                                <NsImage
                                    mt={20}
                                    // width="90%"
                                    src="/img/bank/online-banking-2.svg"
                                />
                                <Text size="sm" mt={30}>
                                    Then click PAY button. The next page will
                                    load showing your booking details and
                                    checkout information. A please Wait message
                                    will show, information you that our system
                                    is processing your booking.If you select
                                    Mandiri Clickpay, we will show you a
                                    confirmation of the payment status and
                                    booking status right on our checkout
                                    confirmation page.For KlikBCA :
                                </Text>
                                <List size="sm" mt={10}>
                                    <List.Item>
                                        Log-in to KlikBCA web site with USER ID
                                        you provide in checkout (have your token
                                        ready)
                                    </List.Item>
                                    <List.Item>
                                        Go to menu e-Commerce Payment
                                        <List size="sm" listStyleType="disc">
                                            <List.Item>
                                                Select Tour/Travel/Hotel
                                            </List.Item>
                                            <List.Item>
                                                Select NUSATRIP.COM
                                            </List.Item>
                                        </List>
                                    </List.Item>
                                    <List.Item>
                                        Your booking will show on the KlikBCA
                                        page, processed with payment
                                    </List.Item>
                                    <List.Item>
                                        Once the payment is done, your booking
                                        will be processed immediately
                                    </List.Item>
                                </List>
                                <Text size="sm" mt={10}>
                                    For BCA KlikPay, once your booking is
                                    processed, a redirect message will show for
                                    10 seconds before we send you to the BCA
                                    KlikPay website to complete the payment
                                    process :
                                </Text>
                                <List size="sm" mt={10}>
                                    <List.Item>
                                        Login with you BCA KlikPay registered
                                        email address and password (different
                                        from KlikBCA login credentials)
                                    </List.Item>
                                    <List.Item>
                                        Review the transaction details, select
                                        the payment method: KlikBCA, then click
                                        Next
                                    </List.Item>
                                    <List.Item>
                                        On the next page click on the Button to
                                        generate the OTP (One Time Password)
                                    </List.Item>
                                    <List.Item>
                                        You will receive an SMS from BCA with a
                                        password to input in the OTP (One Time
                                        Password) code input box, then click Pay
                                    </List.Item>
                                    <List.Item>
                                        Once your payment is confirmed by BCA
                                        Bank, select the back to merchant site
                                        option from BCA KlikPay website. It will
                                        lead you back to Nusatrip.com where you
                                        should see a confirmation page for your
                                        booking details and payment status.
                                    </List.Item>
                                </List>
                                <Text size="sm" mt={10}>
                                    You will also receive an email with your
                                    booking & payment status, as well as the
                                    appropriate travel confirmation documents
                                    related to you booking. If you have created
                                    an account the booking details will be
                                    available in "my bookings".
                                </Text>
                            </Grid.Col>
                        </Grid>
                    </Tabs.Panel>

                    <Tabs.Panel mt={10} value="creditcard" pt="xs">
                        <Grid>
                            <Grid.Col span={9}>
                                <Group position="apart" mr={20} align="end">
                                    <Title order={5}>Credit Card Payment</Title>
                                    <Image
                                        src="/img/bank/credit-card.svg"
                                        width={242.91}
                                        height={32}
                                        alt="logo credit card"
                                    />
                                </Group>
                                <Paper mt={20} withBorder>
                                    <Box p="md">
                                        <Text size="sm">
                                            Choose the CREDIT CARD tab (we
                                            support MasterCard, Visa, American
                                            Express & JCB), and fill in each
                                            field with the corresponding
                                            information required.
                                        </Text>
                                        <Text size="sm" mt={10}>
                                            Then click 'Pay Button'. The next
                                            page will load your booking details,
                                            checkout information and inform you
                                            about the payment being processed.
                                        </Text>
                                        <Text size="sm" mt={10}>
                                            in order to provide you with the
                                            best security online, NusaTrip
                                            supports a feature called 3D secure
                                            : "MasterCard Securecode", "Verified
                                            by VISA" , "JCB J/Secure" &
                                            “American Express SafeKey”. If the
                                            bank that issued your card supports
                                            this feature and your card has been
                                            activated, you will see a message
                                            stating that we will redirect you to
                                            your financial institution for
                                            verification. On that page you will
                                            be asked to pass your bank
                                            verification step (different
                                            depending on banks) before being
                                            sent back to NusaTrip.com checkout
                                            confirmation page. Make sure you do
                                            not refresh the page as some the
                                            redirect and communication with the
                                            bank might take a little bit of
                                            time.
                                        </Text>
                                        <Text size="sm" mt={10}>
                                            If your bank has approved the
                                            transaction, we will send you a
                                            booking confirmation email with your
                                            booking & payment status, as well as
                                            the appropriate travel confirmation
                                            documents related to your booking.
                                            If you have created an account, the
                                            booking detail will be available in
                                            "My Bookings".
                                        </Text>
                                    </Box>
                                    <Box p="md" bg="#ECF5FF" c="#00478E">
                                        <Flex gap="md" align="center">
                                            <IconBulb size="64" stroke={1} />
                                            <Text span size="sm" fs="italic">
                                                Tips: when getting a new credit
                                                card from a bank, it is always
                                                good to ask if the card supports
                                                "MasterCard Securecode",
                                                "Verified by VISA", "JCB
                                                J/Secure" or "American Express
                                                SafeKey" and make sure it gets
                                                activated.
                                            </Text>
                                        </Flex>
                                    </Box>
                                </Paper>
                            </Grid.Col>
                        </Grid>
                    </Tabs.Panel>
                </Tabs>
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

export default Payments;

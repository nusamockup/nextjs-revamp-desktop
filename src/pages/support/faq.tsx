import { css, Global } from '@emotion/react';
import {
    ActionIcon,
    Affix,
    BackgroundImage,
    Box,
    Container,
    Flex,
    Grid,
    Overlay,
    rem,
    Tabs,
    TabsProps,
    Title,
    Transition,
} from '@ns-ui/core';
import { useWindowScroll } from '@ns-ui/hooks';
import {
    IconAppWindow,
    IconArrowUp,
    IconBed,
    IconCalendarStats,
    IconCalendarUp,
    IconDotsCircleHorizontal,
    IconInfoCircle,
    IconLuggage,
    IconPlane,
    IconPlaneOff,
    IconReceiptRefund,
    IconShieldCheck,
    IconWallet,
} from '@tabler/icons-react';
import FaqContent from 'src/comps/support/faq-content';
import SupportBanner from 'src/comps/support/support-banner';

function StyledTabs(props: TabsProps) {
    return (
        <Tabs
            unstyled
            styles={(theme) => ({
                tab: {
                    ...theme.fn.focusStyles(),
                    backgroundColor:
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[6]
                            : theme.white,
                    color:
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[0]
                            : theme.colors.gray[9],
                    border: `${rem(1)} solid ${
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[6]
                            : theme.colors.gray[4]
                    }`,
                    borderBottom: 'none',
                    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
                    cursor: 'pointer',
                    fontSize: theme.fontSizes.sm,
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'left',

                    '&:disabled': {
                        //   opacity: 0.5,
                        //   cursor: 'not-allowed',
                    },

                    '&:not(:first-of-type)': {
                        //   borderLeft: 0,
                    },

                    '&:first-of-type': {
                        borderTopLeftRadius: theme.radius.sm,
                        borderTopRightRadius: theme.radius.sm,
                    },

                    '&:last-of-type': {
                        borderBottom: `${rem(1)} solid ${
                            theme.colorScheme === 'dark'
                                ? theme.colors.dark[6]
                                : theme.colors.gray[4]
                        }`,
                        borderBottomLeftRadius: theme.radius.sm,
                        borderBottomRightRadius: theme.radius.sm,
                    },

                    '&[data-active]': {
                        backgroundColor: theme.colors.blue[7],
                        borderColor: theme.colors.blue[7],
                        color: theme.white,
                    },
                },

                tabIcon: {
                    marginRight: theme.spacing.xs,
                    display: 'flex',
                    alignItems: 'center',
                },

                tabsList: {
                    // display: 'flex',
                },
            })}
            {...props}
        />
    );
}

const Faq = () => {
    const [scroll, scrollTo] = useWindowScroll();
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
                    size="xl"
                    pos="relative"
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
                        <SupportBanner />
                    </Box>
                    <StyledTabs
                        keepMounted={false}
                        defaultValue="general"
                        orientation="vertical"
                    >
                        <Grid gutter="32px" mt={64}>
                            <Grid.Col span={3}>
                                <Tabs.List>
                                    <Flex direction="column">
                                        <Tabs.Tab
                                            value="general"
                                            icon={
                                                <IconInfoCircle size="1rem" />
                                            }
                                        >
                                            General Inquiries
                                        </Tabs.Tab>
                                        <Tabs.Tab
                                            value="payment"
                                            icon={<IconWallet size="1rem" />}
                                        >
                                            Payment
                                        </Tabs.Tab>
                                        <Tabs.Tab
                                            value="cancelation"
                                            icon={<IconPlaneOff size="1rem" />}
                                        >
                                            Flight Cancelation & Reschedule
                                        </Tabs.Tab>
                                        <Tabs.Tab
                                            value="reschedule"
                                            icon={
                                                <IconCalendarStats size="1rem" />
                                            }
                                        >
                                            Reschedule Request
                                        </Tabs.Tab>
                                        <Tabs.Tab
                                            value="refund"
                                            icon={
                                                <IconReceiptRefund size="1rem" />
                                            }
                                        >
                                            Cancel & Refund Request
                                        </Tabs.Tab>
                                        <Tabs.Tab
                                            value="apps"
                                            icon={<IconAppWindow size="1rem" />}
                                        >
                                            Web & Apps
                                        </Tabs.Tab>
                                        <Tabs.Tab
                                            value="flight"
                                            icon={<IconPlane size="1rem" />}
                                        >
                                            Flight
                                        </Tabs.Tab>
                                        <Tabs.Tab
                                            value="hotel"
                                            icon={<IconBed size="1rem" />}
                                        >
                                            Hotel
                                        </Tabs.Tab>
                                        <Tabs.Tab
                                            value="checkin"
                                            icon={
                                                <IconCalendarUp size="1rem" />
                                            }
                                        >
                                            Check-in
                                        </Tabs.Tab>
                                        <Tabs.Tab
                                            value="baggage"
                                            icon={<IconLuggage size="1rem" />}
                                        >
                                            Baggage
                                        </Tabs.Tab>
                                        <Tabs.Tab
                                            value="insurance"
                                            icon={
                                                <IconShieldCheck size="1rem" />
                                            }
                                        >
                                            Travel Insurance
                                        </Tabs.Tab>
                                        <Tabs.Tab
                                            value="others"
                                            icon={
                                                <IconDotsCircleHorizontal size="1rem" />
                                            }
                                        >
                                            Others
                                        </Tabs.Tab>
                                    </Flex>
                                </Tabs.List>
                            </Grid.Col>
                            <Grid.Col span={9}>
                                <Tabs.Panel value="general">
                                    <FaqContent />
                                </Tabs.Panel>
                                <Tabs.Panel value="payment">
                                    <FaqContent />
                                </Tabs.Panel>
                                <Tabs.Panel value="cancelation">
                                    <FaqContent />
                                </Tabs.Panel>
                                <Tabs.Panel value="reschedule">
                                    <FaqContent />
                                </Tabs.Panel>
                                <Tabs.Panel value="refund">
                                    <FaqContent />
                                </Tabs.Panel>
                                <Tabs.Panel value="apps">
                                    <FaqContent />
                                </Tabs.Panel>
                                <Tabs.Panel value="flight">
                                    <FaqContent />
                                </Tabs.Panel>
                                <Tabs.Panel value="hotel">
                                    <FaqContent />
                                </Tabs.Panel>
                                <Tabs.Panel value="checkin">
                                    <FaqContent />
                                </Tabs.Panel>
                                <Tabs.Panel value="baggage">
                                    <FaqContent />
                                </Tabs.Panel>
                                <Tabs.Panel value="insurance">
                                    <FaqContent />
                                </Tabs.Panel>
                                <Tabs.Panel value="others">
                                    <FaqContent />
                                </Tabs.Panel>
                            </Grid.Col>
                        </Grid>
                    </StyledTabs>
                </Container>
            </Box>

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

export default Faq;

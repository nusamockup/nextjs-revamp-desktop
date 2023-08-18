import SupportBannerText from 'src/comps/support/support-banner-text';
import { css, Global } from '@emotion/react';
import BodyBg from 'src/comps/home/body-bg';
import { Box, Container, TabsProps, Tabs, rem } from '@ns-ui/core';
import UpcomingTrips from 'src/comps/my-booking/upcoming-trips';
import PastTrips from 'src/comps/my-booking/past-trips';
import DateTrips from 'src/comps/my-booking/date-trips';

function StyledTabs(props: TabsProps) {
    return (
        <Tabs
            unstyled
            styles={(theme) => ({
                tab: {
                    ...theme.fn.focusStyles(),
                    // backgroundColor:
                    //     theme.colorScheme === 'dark'
                    //         ? theme.colors.dark[6]
                    //         : theme.white,
                    color:
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[0]
                            : theme.colors.gray[9],
                    // border: `${rem(1)} solid ${
                    //     theme.colorScheme === 'dark'
                    //         ? theme.colors.dark[6]
                    //         : theme.colors.gray[4]
                    // }`,
                    border: 0,
                    backgroundColor: 'transparent',
                    padding: `${theme.spacing.md} ${theme.spacing.md}`,
                    cursor: 'pointer',
                    fontSize: theme.fontSizes.md,
                    display: 'flex',
                    alignItems: 'center',

                    '&:hover': {
                        backgroundColor: 'rgba(255,255,255,.2)',
                    },

                    '&:disabled': {
                        opacity: 0.5,
                        cursor: 'not-allowed',
                    },

                    '&:not(:first-of-type)': {
                        // borderLeft: 0,
                    },

                    '&:first-of-type': {
                        // borderTopLeftRadius: theme.radius.md,
                        // borderBottomLeftRadius: theme.radius.md,
                    },

                    '&:last-of-type': {
                        // borderTopRightRadius: theme.radius.md,
                        // borderBottomRightRadius: theme.radius.md,
                    },

                    '&[data-active]': {
                        // backgroundColor: theme.colors.blue[7],
                        // borderColor: theme.colors.blue[7],
                        color: theme.colors.blue[7],
                        backgroundColor: '#F8F8F8',
                        fontWeight: 500,
                    },
                },

                tabIcon: {
                    // marginRight: theme.spacing.xs,
                    // display: 'flex',
                    // alignItems: 'center',
                },

                tabsList: {
                    display: 'flex',
                },
            })}
            {...props}
        />
    );
}

const Trips = () => {
    return (
        <>
            <BodyBg color="#f8f8f8" />
            <SupportBannerText text="My Awesome Journey" />
            {/* <StyledTabs defaultValue="datetrips"> */}
            <StyledTabs defaultValue="trips">
                <Box bg="#dbe5ef">
                    <Container size="xl">
                        <Tabs.List>
                            <Tabs.Tab value="trips">My Upcoming Trips</Tabs.Tab>
                            <Tabs.Tab value="pasttrips">Past Trips</Tabs.Tab>
                            <Tabs.Tab value="datetrips">
                                By Booking Date
                            </Tabs.Tab>
                        </Tabs.List>
                    </Container>
                </Box>

                <Container size="xl">
                    <Tabs.Panel value="trips" pt="40px">
                        <UpcomingTrips />
                    </Tabs.Panel>
                    <Tabs.Panel value="pasttrips" pt="40px">
                        <PastTrips />
                    </Tabs.Panel>
                    <Tabs.Panel value="datetrips" pt="40px">
                        <DateTrips />
                    </Tabs.Panel>
                </Container>
            </StyledTabs>
        </>
    );
};

export default Trips;

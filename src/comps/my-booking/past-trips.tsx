import { Flex, Grid, Text } from '@ns-ui/core';
import { BookingDateComp } from './booking-date-comp';
import { MybookingFlightList } from './flight-list-comp';
import { MybookingHotelList } from './hotel-list-comp';
import MybookingIcon from './mybooking-icon-comp';
import SidebarComp from './sidebar-comp';

const PastTrips = () => {
    return (
        <>
            <Grid>
                <Grid.Col span={9}>
                    <Flex>
                        <Text w="150px" size="sm" c="dimmed">
                            TRAVEL DATE
                        </Text>
                        <Text size="sm" c="dimmed">
                            JUNE 2023
                        </Text>
                    </Flex>
                    <Flex gap="md" mt={20}>
                        <BookingDateComp date="13 Jun 2023" />
                        <MybookingIcon type="hotel" />
                        <MybookingHotelList
                            detailurl={'/'}
                            hotelimg={
                                '57dce2996756f4033807428b3be9d2a3_fta.jpg'
                            }
                            hotelname={'Aryaduta Hotel Jakarta'}
                            bookingcode={'RJ8W5G'}
                            checkindate={'Tue, 31 Jun 2023'}
                            checkoutdate={'Wed, 03 Jul 2023'}
                        />
                    </Flex>

                    <Flex gap="md" mt={20}>
                        <BookingDateComp date="29 Jun 2023" />
                        <MybookingIcon type="flight" />
                        <MybookingFlightList
                            detailurl={'/'}
                            airlinecode={'PR'}
                            departure={'Jakarta'}
                            arrival={'Chiang Mai'}
                            departingdate={'Tue, 31 Jun 2023'}
                            departingtime={'17:10'}
                            bookingcode={'32DDV2'}
                        />
                    </Flex>

                    <Flex gap="md" mt={20}>
                        <BookingDateComp date="22 Jul 2023" />
                        <MybookingIcon type="flight" />
                        <MybookingFlightList
                            detailurl={'/'}
                            airlinecode={'TG'}
                            departure={'Denpasar'}
                            arrival={'Manila'}
                            departingdate={'Tue, 31 Jun 2023'}
                            departingtime={'17:10'}
                            bookingcode={'MK942D'}
                            triptype={'roundtrip'}
                            roundtriptype={'departure'}
                        />
                    </Flex>

                    <Flex gap="md" mt={20}>
                        <BookingDateComp date="22 Jul 2023" />
                        <MybookingIcon type="flight" />
                        <MybookingFlightList
                            detailurl={'/'}
                            airlinecode={'BR'}
                            departure={'Manila'}
                            arrival={'Denpasar'}
                            departingdate={'Tue, 02 Jul 2023'}
                            departingtime={'21:10'}
                            bookingcode={'MKED78'}
                            triptype={'roundtrip'}
                            roundtriptype={'returning'}
                        />
                    </Flex>
                </Grid.Col>

                <Grid.Col span={3}>
                    <SidebarComp name="eddie" />
                </Grid.Col>
            </Grid>
        </>
    );
};

export default PastTrips;

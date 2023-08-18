import { Button, Flex, Grid, Group, Text } from '@ns-ui/core';
import { DatePickerInput, DatesProvider } from '@ns-ui/dates';
import { useState } from 'react';
import { FiCalendar } from 'react-icons/fi';
import { BookingDateComp } from './booking-date-comp';
import { MybookingFlightList } from './flight-list-comp';
import { MybookingHotelList } from './hotel-list-comp';
import MybookingIcon from './mybooking-icon-comp';
import SidebarComp from './sidebar-comp';

const DateTrips = () => {
    const [value, setValue] = useState<[Date | null, Date | null]>([
        null,
        null,
    ]);
    return (
        <>
            <Grid>
                <Grid.Col span={9}>
                    <Group w={'100%'} position="apart" pr={20}>
                        <Flex>
                            <Text w="150px" size="sm" c="dimmed">
                                TRAVEL DATE
                            </Text>
                            <Text size="sm" c="dimmed">
                                JUNE 2023
                            </Text>
                        </Flex>
                        <DatesProvider
                            settings={{
                                weekendDays: [0],
                            }}
                        >
                            <DatePickerInput
                                type="range"
                                numberOfColumns={2}
                                valueFormat="DD MMM YYYY"
                                icon={<FiCalendar size={16} color="#555" />}
                                label=""
                                placeholder="Select dates range"
                                value={value}
                                onChange={setValue}
                                ta={'right'}
                                ml="auto"
                                maw={230}
                                w={300}
                            />
                        </DatesProvider>
                        {/* <Button size={'sm'}>
                            Search
                        </Button> */}
                    </Group>
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
                            bookingstatus={'success'}
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
                            bookingstatus={'success'}
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
                            bookingstatus={'cancelled'}
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
                            bookingstatus={'failed'}
                        />
                    </Flex>
                </Grid.Col>

                <Grid.Col span={3} mt={-40}>
                    <SidebarComp name="eddie" />
                </Grid.Col>
            </Grid>
        </>
    );
};

export default DateTrips;

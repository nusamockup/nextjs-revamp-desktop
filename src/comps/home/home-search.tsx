import { Container, Group, Tabs, Text } from '@ns-ui/core';
import { DefaultValue } from '@ns-ui/core/lib/MultiSelect/DefaultValue/DefaultValue';
import { useToggle } from '@ns-ui/hooks';
import { useState } from 'react';
import FaBed from '../icons/FaBed';
import FaPlane from '../icons/FaPlane';
import { FlightHome } from '../widget/flight-home';
import { HotelHome } from '../widget/hotel-home';
import useStyles from './home-search.styles';
import AnimatedType from '../home/animated-type';
import { TextLoop } from 'react-text-loop-next';

const HomeSearch = () => {
    const { classes, cx } = useStyles();
    // const hoteltext = 'at all your favorite places.';
    // const flighttext = 'to all your favorite places.';
    const [tabvaluetogle, setTabValue] = useToggle([
        'to all your favorite places',
        'at all your favorite places',
    ]);

    // console.info(tabvaluetogle);
    return (
        <>
            <Tabs
                w="100%"
                defaultValue="fly"
                unstyled
                onTabChange={() => setTabValue()}
            >
                <Tabs.List>
                    <Group fz="28px" fw={500}>
                        <Tabs.Tab
                            value="fly"
                            fz="24px"
                            fw={700}
                            px={16}
                            lts="1px"
                            className={classes.hugeBtn}
                            // onChange={(e) => {
                            //     setTabValue('fly');
                            // }}
                        >
                            <Group>
                                <FaPlane h="24px" />
                                <Text span>Fly</Text>
                            </Group>
                        </Tabs.Tab>
                        or
                        <Tabs.Tab
                            value="stay"
                            fz="24px"
                            fw={700}
                            px={16}
                            lts="1px"
                            // icon={<FaBed size="24px" />}
                            className={classes.hugeBtn}
                            // onChange={(e) => {
                            //     setTabValue(e.currentTarget.value);
                            // }}
                        >
                            <Group>
                                <FaBed />
                                <Text span>Stay</Text>
                            </Group>
                        </Tabs.Tab>
                        <Group spacing="8px">
                            {tabvaluetogle}
                            <TextLoop
                                // interval={3000}
                                springConfig={{ stiffness: 180, damping: 16 }}
                                children={[
                                    'in Asia.',
                                    'in Europe.',
                                    'in The World.',
                                ]}
                            />
                            {/* <AnimatedType /> */}
                        </Group>
                    </Group>
                </Tabs.List>

                <Tabs.Panel value="fly">
                    <FlightHome />
                </Tabs.Panel>
                <Tabs.Panel value="stay">
                    <HotelHome />
                </Tabs.Panel>
            </Tabs>
            <style jsx>{`
                .ns-ui-Radio-label {
                    color: white;
                }
            `}</style>
        </>
    );
};

export default HomeSearch;

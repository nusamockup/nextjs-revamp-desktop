import { Group, Tabs, Text } from '@ns-ui/core';
import FaBed from '../icons/FaBed';
import FaPlane from '../icons/FaPlane';
import { Flight } from '../widget/flight';
import { Hotel } from '../widget/hotel';
import useStyles from './home-search.styles';

const HomeSearch = () => {
    const { classes, cx } = useStyles();

    return (
        <>
            <Tabs defaultValue="fly" unstyled>
                <Tabs.List>
                    <Group fz="24px" fw={600}>
                        <Tabs.Tab
                            value="fly"
                            fz="18px"
                            fw={700}
                            px={16}
                            lts="1px"
                            className={classes.hugeBtn}
                        >
                            <Group>
                                <FaPlane h="24px" />
                                <Text span>Fly</Text>
                            </Group>
                        </Tabs.Tab>
                        or
                        <Tabs.Tab
                            value="stay"
                            fz="18px"
                            fw={700}
                            px={16}
                            lts="1px"
                            // icon={<FaBed size="24px" />}
                            className={classes.hugeBtn}
                        >
                            <Group>
                                <FaBed />
                                <Text span>Stay</Text>
                            </Group>
                        </Tabs.Tab>
                        at all your favorite places.
                    </Group>
                </Tabs.List>

                <Tabs.Panel value="fly">
                    <Flight />
                </Tabs.Panel>
                <Tabs.Panel value="stay">
                    <Hotel />
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

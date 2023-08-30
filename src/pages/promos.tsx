import { css, Global } from '@emotion/react';
import {
    BackgroundImage,
    Box,
    Button,
    Card,
    Container,
    Group,
    Overlay,
    SimpleGrid,
    Tabs,
    Text,
} from '@ns-ui/core';
import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { useToggle } from '@ns-ui/hooks';
import { domesticdata, internationaldata } from 'src/comps/constants';
import CardList from 'src/comps/flight/card-list';
import FaPlane from 'src/comps/icons/FaPlane';
import { Flight } from 'src/comps/widget/flight';
import useStyles from 'src/comps/widget/flight-index.styles';
import { Hotel } from 'src/comps/widget/hotel';
import FaBed from 'src/comps/icons/FaBed';
import SectionTitle from 'src/comps/section-title/section-title';
import LatestPromoCard from 'src/comps/promo/latest-promo-card';
import NsImage from 'src/comps/ns-image/ns-image';
import FooterPre from 'src/comps/footer/footer-pre';

const Promos = () => {
    const domestics = domesticdata.map((data, index) => (
        <CardList
            key={index}
            img={data.img}
            arr={data.arr}
            dep={data.dep}
            price={data.price}
            url={data.url}
        />
    ));

    const inters = internationaldata.map((data, index) => (
        <CardList
            key={index}
            img={data.img}
            arr={data.arr}
            dep={data.dep}
            price={data.price}
            url={data.url}
        />
    ));

    const { classes, cx } = useStyles();
    const [tabvaluetogle, setTabValue] = useToggle([
        'to your favorite places',
        'at your favorite places',
    ]);

    const TEXTS = ['in Asia', 'in Europe', 'anywhere in The World'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <>
            <Global
                styles={css`
                    body {
                        background-color: #f8f9fa;
                    }
                `}
            />
            <Box mt="-20px">
                <BackgroundImage
                    pos="relative"
                    // h="165px"
                    h="215px"
                    src="/img/mountain-view.webp"
                >
                    <Overlay color="#000" opacity={0.6} zIndex={1} />
                </BackgroundImage>
            </Box>

            <Container
                size="lg"
                mt="-180px"
                // mt="-130px"
                mb={32}
                sx={{
                    color: '#FFF',
                }}
            >
                <Tabs
                    pos="relative"
                    w="100%"
                    sx={{
                        zIndex: 2,
                    }}
                    defaultValue="fly"
                    unstyled
                    // onTabChange={() => setTabValue()}
                >
                    <Tabs.List>
                        <Group fz="21px" fw={400}>
                            <Tabs.Tab
                                value="fly"
                                className={classes.hugeBtn}
                                onChange={(e) => {
                                    setTabValue('fly');
                                }}
                            >
                                <Group spacing="xs">
                                    <FaPlane />
                                    <Text span>Fly</Text>
                                </Group>
                            </Tabs.Tab>
                            or
                            <Tabs.Tab
                                value="stay"
                                className={classes.hugeBtn}
                                // onChange={(e) => {
                                //     setTabValue(e.currentTarget.value);
                                // }}
                            >
                                <Group spacing="xs">
                                    <FaBed />
                                    <Text span>Stay</Text>
                                </Group>
                            </Tabs.Tab>
                            <Group spacing="8px">
                                {/* {tabvaluetogle} */}
                                to your favorite places
                                <TextTransition springConfig={presets.stiff}>
                                    {TEXTS[index % TEXTS.length]}
                                </TextTransition>
                            </Group>
                        </Group>
                    </Tabs.List>

                    <Tabs.Panel value="fly">
                        <Flight />
                    </Tabs.Panel>
                    <Tabs.Panel mt={32} value="stay">
                        <Hotel />
                    </Tabs.Panel>
                </Tabs>
            </Container>
            <Container mt={64} size="lg">
                <SectionTitle title="Latest Promos" />
                <SimpleGrid cols={3} spacing={30} mb={40}>
                    <LatestPromoCard
                        url={'/'}
                        img={'/img/promo/0a3bbf350431ff227a64e017a5905cd8.png'}
                        title={'Promo Title'}
                        desc={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        }
                    />
                    <LatestPromoCard
                        url={'/'}
                        img={'/img/promo/f29039f991443666e8910a759c7aac40.png'}
                        title={'Promo Title'}
                        desc={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        }
                    />
                    <LatestPromoCard
                        url={'/'}
                        img={'/img/promo/51f00edb3a78777a627e011ff6e26b73.png'}
                        title={'Promo Title'}
                        desc={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        }
                    />
                    <LatestPromoCard
                        url={'/'}
                        img={'/img/promo/b7aa25a48c1484036fedf2d38c7532ea.png'}
                        title={'Promo Title'}
                        desc={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        }
                    />
                    <LatestPromoCard
                        url={'/'}
                        img={'/img/promo/7972000e78015d541f8b90e0a0e5d35c.png'}
                        title={'Promo Title'}
                        desc={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        }
                    />
                    <LatestPromoCard
                        url={'/'}
                        img={'/img/promo/61f7ea1fd95935853fe872f06708c371.png'}
                        title={'Promo Title'}
                        desc={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        }
                    />
                </SimpleGrid>

                <SectionTitle title="Other Promos" />
                <SimpleGrid cols={4} spacing={30} mb={40}>
                    <Card>
                        <Card.Section>
                            <NsImage
                                src="/img/promo/5926dc65a30a85e87becd27441b0901f.png"
                                height={128}
                            />
                        </Card.Section>
                    </Card>
                    <Card>
                        <Card.Section>
                            <NsImage
                                src="/img/promo/4208bafdf4e5cb40b1feae121d83e787.png"
                                height={128}
                            />
                        </Card.Section>
                    </Card>
                    <Card>
                        <Card.Section>
                            <NsImage
                                src="/img/promo/61f7ea1fd95935853fe872f06708c371.png"
                                height={128}
                            />
                        </Card.Section>
                    </Card>
                    <Card>
                        <Card.Section>
                            <NsImage
                                src="/img/promo/b7aa25a48c1484036fedf2d38c7532ea.png"
                                height={128}
                            />
                        </Card.Section>
                    </Card>
                    <Card>
                        <Card.Section>
                            <NsImage
                                src="/img/promo/53f710332c755f78de29ae70d86ff067.png"
                                height={128}
                            />
                        </Card.Section>
                    </Card>
                    <Card>
                        <Card.Section>
                            <NsImage
                                src="/img/promo/51f00edb3a78777a627e011ff6e26b73.png"
                                height={128}
                            />
                        </Card.Section>
                    </Card>
                </SimpleGrid>
            </Container>

            <Box bg="#F1F5F9" mt={120} mb="-7.5rem">
                <Container size="lg">
                    <FooterPre />
                </Container>
            </Box>
        </>
    );
};

export default Promos;

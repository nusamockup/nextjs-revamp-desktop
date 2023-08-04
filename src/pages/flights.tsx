import { css, Global } from '@emotion/react';
import {
    BackgroundImage,
    Box,
    Container,
    Group,
    Overlay,
    SimpleGrid,
    Space,
    Tabs,
    Text,
} from '@ns-ui/core';
import { useToggle } from '@ns-ui/hooks';
import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { domesticdata, internationaldata } from 'src/comps/constants';
import CardList from 'src/comps/flight/card-list';
import PriceCalender from 'src/comps/flight/price-calender';
import FooterPre from 'src/comps/footer/footer-pre';
import AirlineLogo from 'src/comps/home/airline-logo';
import FlightSection from 'src/comps/home/flight-section';
import { ImageCard } from 'src/comps/home/ImageCard';
import FaBed from 'src/comps/icons/FaBed';
import FaPlane from 'src/comps/icons/FaPlane';
import PromoBanner from 'src/comps/promo-banner/promo-banner';
import SectionTitle from 'src/comps/section-title/section-title';
import { Flight } from 'src/comps/widget/flight';
import useStyles from 'src/comps/widget/flight-index.styles';
import { Hotel } from 'src/comps/widget/hotel';

export default function flights() {
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
    // const [tabvaluetogle, setTabValue] = useToggle([
    //     'to your favorite places',
    //     'at your favorite places',
    // ]);

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
                                // onChange={(e) => {
                                //     setTabValue('fly');
                                // }}
                            >
                                <Group spacing="xs">
                                    <FaPlane />
                                    <Text span>Fly</Text>
                                </Group>
                            </Tabs.Tab>
                            {/* or */}
                            {/* <Tabs.Tab
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
                            </Tabs.Tab> */}
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
                    <Tabs.Panel value="stay">
                        <Hotel />
                    </Tabs.Panel>
                </Tabs>
            </Container>
            <Container size="xl">
                <Space h="82px" />
                <PromoBanner />
                <Space h="64px" />
                <FlightSection />
            </Container>
            <Space h="64px" />
            <AirlineLogo />
            <Container size="xl">
                <Space h="32px" />
                <SectionTitle
                    title="Popular Domestic Flight Routes"
                    // desc="Exploring new places and meeting strangers."
                    sectionname="Domestic"
                />
                <SimpleGrid cols={3} spacing="md">
                    <ImageCard
                        image="/img/banner/455953184f8367e44b9e6d839f0dceec.webp"
                        title="Bali, Indonesia"
                        link="/"
                        startFrom="145"
                        ratio={104 / 40}
                    />
                    <ImageCard
                        image="/img/banner/9bc261ebed309774550db39218477ecc.webp"
                        title="Jakarta, Indonesia"
                        link="/"
                        startFrom="254"
                        ratio={104 / 40}
                    />
                    <ImageCard
                        image="/img/banner/634f863a23aaf1919c053cdce8ffbcde.webp"
                        title="Padang, Indonesia"
                        link="/"
                        startFrom="223"
                        ratio={104 / 40}
                    />
                </SimpleGrid>
                <SimpleGrid mt={20} cols={3} spacing="md">
                    {domestics}
                </SimpleGrid>
                <Space h="32px" />
                <SectionTitle
                    title="Popular International Flight Routes"
                    // desc="Exploring new places and meeting strangers."
                    sectionname="International"
                />
                <SimpleGrid cols={3} spacing="md">
                    <ImageCard
                        image="/img/banner/paris.png"
                        title="Paris, French"
                        link="/"
                        startFrom="145"
                        ratio={104 / 40}
                    />
                    <ImageCard
                        image="/img/banner/london.png"
                        title="London, United Kingdom"
                        link="/"
                        startFrom="254"
                        ratio={104 / 40}
                    />
                    <ImageCard
                        image="/img/banner/zurich.png"
                        title="Zurich, Switzerland"
                        link="/"
                        startFrom="223"
                        ratio={104 / 40}
                    />
                </SimpleGrid>
                <SimpleGrid mt={20} cols={3} spacing="md">
                    {inters}
                </SimpleGrid>
            </Container>
            <PriceCalender />
            <Box bg="#F1F5F9" mb="-7.5rem">
                <Container size="xl">
                    <FooterPre />
                </Container>
            </Box>
        </>
    );
}

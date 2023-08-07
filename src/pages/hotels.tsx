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
import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { HotelCard } from 'src/comps/home/card/hotel-card';
import FaBed from 'src/comps/icons/FaBed';
import SearchLocation from 'src/comps/map/search-location';
import PromoBanner from 'src/comps/promo-banner/promo-banner';
import SectionTitle from 'src/comps/section-title/section-title';
import useStyles from 'src/comps/widget/flight-index.styles';
import { Hotel } from 'src/comps/widget/hotel';

const jakartahotels = [
    {
        image: '/img/hotel/hotel-7.webp',
        title: 'Bobobox Pods Tanah Abang',
        city: 'Jakarta',
        location: 'Monas',
        link: '/',
        star: 3,
        price: 123,
    },
    {
        image: '/img/hotel/hotel-8.webp',
        title: 'Bobobox Pods Tanah Abang',
        city: 'Jakarta',
        location: 'Monas',
        link: '/',
        star: 5,
        price: 169,
    },
    {
        image: '/img/hotel/hotel-9.webp',
        title: 'Bobobox Pods Tanah Abang',
        city: 'Jakarta',
        location: 'Monas',
        link: '/',
        star: 5,
        price: 144,
    },
    {
        image: '/img/hotel/hotel-10.webp',
        title: 'Bobobox Pods Tanah Abang',
        city: 'Jakarta',
        location: 'Monas',
        link: '/',
        star: 4,
        price: 142,
    },
    {
        image: '/img/hotel/hotel-11.webp',
        title: 'Bobobox Pods Tanah Abang',
        city: 'Jakarta',
        location: 'Monas',
        link: '/',
        star: 2,
        price: 175,
    },
    {
        image: '/img/hotel/hotel-12.webp',
        title: 'Bobobox Pods Tanah Abang',
        city: 'Jakarta',
        location: 'Monas',
        link: '/',
        star: 3,
        price: 168,
    },
    {
        image: '/img/hotel/hotel-8.webp',
        title: 'Bobobox Pods Tanah Abang',
        city: 'Jakarta',
        location: 'Monas',
        link: '/',
        star: 5,
        price: 169,
    },
    {
        image: '/img/hotel/hotel-9.webp',
        title: 'Bobobox Pods Tanah Abang',
        city: 'Jakarta',
        location: 'Monas',
        link: '/',
        star: 5,
        price: 144,
    },
];

const hotels = () => {
    const { classes, cx } = useStyles();
    const TEXTS = ['in Asia', 'in Europe', 'anywhere in The World'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    const domhotels = jakartahotels.map((item, index) => (
        <HotelCard
            key={index}
            image={item.image}
            title={item.title}
            city={item.city}
            location={item.location}
            link={item.link}
            star={item.star}
            price={item.price}
        />
    ));

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
                    h="215px"
                    src="/img/mountain-view.webp"
                >
                    <Overlay color="#000" opacity={0.6} zIndex={1} />
                </BackgroundImage>
            </Box>
            <Container
                size="lg"
                mt="-176.5px"
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
                    defaultValue="stay"
                    unstyled
                >
                    <Tabs.List>
                        <Group fz="21px" fw={400}>
                            <Tabs.Tab value="stay" className={classes.hugeBtn}>
                                <Group spacing="xs">
                                    <FaBed />
                                    <Text span>Stay</Text>
                                </Group>
                            </Tabs.Tab>
                            <Group spacing="8px">
                                at your favorite places
                                <TextTransition springConfig={presets.stiff}>
                                    {TEXTS[index % TEXTS.length]}
                                </TextTransition>
                            </Group>
                        </Group>
                    </Tabs.List>
                    <Tabs.Panel value="stay">
                        <Hotel />
                    </Tabs.Panel>
                </Tabs>
            </Container>
            <Container size="xl">
                <Space h="82px" />
                <PromoBanner />
                <Space h="64px" />
                <SectionTitle
                    title="Popular Domestic Hotels"
                    sectionname="Domestic"
                />
                <SimpleGrid cols={4} spacing="xl">
                    {domhotels}
                </SimpleGrid>
                <Group mt="md" position="right">
                    <Text
                        size="sm"
                        c="dimmed"
                        component="a"
                        href="#"
                        weight={600}
                    >
                        View all hotels in Jakarta
                    </Text>
                </Group>
                <Space h="64px" />
                <SectionTitle
                    title="Popular South East Asia Hotels"
                    sectionname="South East Asia"
                />
                <SimpleGrid cols={4} spacing="xl">
                    {domhotels}
                </SimpleGrid>
                <Group mt="md" position="right">
                    <Text
                        size="sm"
                        c="dimmed"
                        component="a"
                        href="#"
                        weight={600}
                    >
                        View all hotels in South East Asia
                    </Text>
                </Group>
                <Space h="64px" />
                <SectionTitle
                    title="Popular International Hotels"
                    sectionname="International"
                />
                <SimpleGrid cols={4} spacing="xl">
                    {domhotels}
                </SimpleGrid>
                <Group mt="md" position="right">
                    <Text
                        size="sm"
                        c="dimmed"
                        component="a"
                        href="#"
                        weight={600}
                    >
                        View all hotels in The World
                    </Text>
                </Group>
                <Space h="64px" />
                <SectionTitle title="Search Hotels in The World by Locations" />
            </Container>
            <Box bg="#F1F5F9">
                <Container size="xl" py={46}>
                    <SearchLocation />
                </Container>
            </Box>
        </>
    );
};

export default hotels;

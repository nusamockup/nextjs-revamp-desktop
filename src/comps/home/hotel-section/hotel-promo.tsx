import { useCallback, useEffect, useState } from 'react';
import { Carousel, Embla } from '@ns-ui/carousel';
import { Center, Flex, Grid, rem, Space, Progress } from '@ns-ui/core';
import {
    IconCircleChevronLeft,
    IconCircleChevronRight,
} from '@tabler/icons-react';
import React from 'react';
import SectionTitle from 'src/comps/section-title/section-title';
import NbBanner from '../b2b-banner';
import HotelPromoCard from './hotel-promo-card';
import useStyles from '../card/hotel-carousel.styles';

const hotelPromoDatas = [
    {
        name: 'Bali',
        location: 'Indonesia',
        image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        price: 334,
        disc: 25,
        desc: 'Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel close to nature in ultimate comfort. Enjoy the view of the epic mountain.',
    },
    {
        name: 'Yogyakarta',
        location: 'Indonesia',
        image: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        price: 227,
        disc: 30,
        desc: 'Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel close to nature in ultimate comfort. Enjoy the view of the epic mountain.',
    },
    {
        name: 'Semarang',
        location: 'Indonesia',
        image: 'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        price: 397,
        disc: 40,
        desc: 'Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel close to nature in ultimate comfort. Enjoy the view of the epic mountain.',
    },
    {
        name: 'Medan',
        location: 'Indonesia',
        image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        price: 332,
        disc: 40,
        desc: 'Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel close to nature in ultimate comfort. Enjoy the view of the epic mountain.',
    },
    {
        name: 'Medan',
        location: 'Indonesia',
        image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        price: 397,
        disc: 40,
        desc: 'Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel close to nature in ultimate comfort. Enjoy the view of the epic mountain.',
    },
    {
        name: 'Jakarta',
        location: 'Indonesia',
        image: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        price: 397,
        disc: 40,
        desc: 'Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel close to nature in ultimate comfort. Enjoy the view of the epic mountain.',
    },
];

const HotelPromo = () => {
    const { classes } = useStyles();
    const [scrollProgress, setScrollProgress] = useState(0);
    const [embla, setEmbla] = useState<Embla | null>(null);

    const handleScroll = useCallback(() => {
        if (!embla) return;
        const progress = Math.max(0.1, Math.min(1, embla.scrollProgress()));
        setScrollProgress(progress * 100);
    }, [embla, setScrollProgress]);

    useEffect(() => {
        if (embla) {
            embla.on('scroll', handleScroll);
            handleScroll();
        }
    }, [embla]);

    const slides = hotelPromoDatas.map((data, index) => (
        <Carousel.Slide key={index}>
            <HotelPromoCard
                hotelName={data.name}
                desc={data.desc}
                image={data.image}
                location={data.location}
                price={data.price}
                disc={data.disc}
            />
        </Carousel.Slide>
    ));

    return (
        <>
            <Space h="64px" />
            <SectionTitle
                title="Deals & Discounts"
                // desc="Exploring new places and meeting strangers."
                // sectionname="Hotels"
            />
            {/* <Flex justify="flex-end"> */}
            <Progress
                value={scrollProgress}
                styles={{
                    bar: { transitionDuration: '0ms' },
                    root: { maxWidth: rem(320) },
                }}
                maw={rem(320)}
                size="sm"
                mt="-40px"
                mb="md"
                ml="auto"
                pos="relative"
            />
            <Flex>
                <Grid>
                    <Grid.Col span={4}>
                        {/* <Center sx={{ aspectRatio: '1/1' }}> */}
                        <NbBanner
                            title="Your Travel Partner <br > Solution"
                            description="NusaTrip Business is a one-stop travel technology platform for travel agents."
                            image="/img/banner/6950476.webp"
                            sx={{ aspectRatio: '1/1' }}
                        />
                        {/* </Center> */}
                    </Grid.Col>
                    <Grid.Col span={8} pl={60}>
                        <Carousel
                            slideSize="360px"
                            slideGap="md"
                            align="start"
                            initialSlide={3}
                            slidesToScroll={2}
                            loop
                            getEmblaApi={setEmbla}
                            previousControlIcon={
                                <IconCircleChevronLeft size={rem(32)} />
                            }
                            nextControlIcon={
                                <IconCircleChevronRight size={rem(32)} />
                            }
                            classNames={{
                                control: classes.hotelCarControl,
                                controls: classes.hotelPromoCarControls,
                            }}
                        >
                            {slides}
                        </Carousel>
                    </Grid.Col>
                </Grid>
            </Flex>
        </>
    );
};

export default HotelPromo;

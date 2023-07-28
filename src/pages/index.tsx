import { css, Global } from '@emotion/react';
import {
    BackgroundImage,
    Box,
    Center,
    Container,
    Overlay,
    Space,
    Stack,
    Text,
} from '@ns-ui/core';
import Image from 'next/legacy/image';
import { MdKeyboardArrowDown } from 'react-icons/md';
import AirlineLogo from 'src/comps/home/airline-logo';
import Faqs from 'src/comps/home/faqs';
import HomeSearch from 'src/comps/home/home-search';
import HotelSection from 'src/comps/home/hotel-section';
import MobileBanner from 'src/comps/home/mobile-banner';
import WhyChoose from 'src/comps/home/why-choose';
import FlightSection from '../comps/home/flight-section';
import PromoBanner from '../comps/promo-banner/promo-banner';
import useStyles from '../styles/index.styles';

const Home = () => {
    const { classes } = useStyles();
    return (
        <>
            <Global
                styles={css`
                    body {
                        background-color: #f8f9fa;
                    }
                `}
            />
            <Box mt="-1.25rem">
                <BackgroundImage
                    pos="relative"
                    h={`calc(100vh - 57px + 160px)`}
                    src=""
                >
                    <Image
                        src="/img/photo-1505228395891-9a51e7e86bf6.webp"
                        alt=""
                        objectFit="cover"
                        layout="fill"
                        priority
                    />

                    <Center
                        maw="1320px"
                        h="85%"
                        px={32}
                        // mt="-200px"
                        mx="auto"
                        pos="relative"
                        sx={{ zIndex: 3 }}
                        c="#FFF"
                    >
                        <HomeSearch />
                    </Center>
                    <Stack
                        pos="relative"
                        bottom="0vh"
                        // justify="flex-start"
                        spacing="xs"
                        sx={{ zIndex: 2 }}
                    >
                        <Text
                            fz={21}
                            fw={400}
                            mt={0}
                            mb={0}
                            lts="1"
                            opacity={0.6}
                            align="center"
                            color="#FFF"
                        >
                            Explore incredible places with special offers.
                        </Text>
                        <MdKeyboardArrowDown
                            size={32}
                            className={classes.animatedarrow}
                            color="#fff"
                        />
                        {/* <Box
                            // h={20}
                            // w={20}
                            mt={0}
                            mb={0}
                            className={classes.arrowCta}
                        ></Box> */}
                    </Stack>
                    <Overlay
                        // gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
                        color="#000"
                        opacity={0.6}
                        zIndex={1}
                    />
                </BackgroundImage>
            </Box>
            <Container
                size="xl"
                // px="64px"
            >
                {/* <Space h="64px" /> */}
                {/* <SectionTitle title="Offers for your trip" /> */}
                <Space h="82px" />
                <PromoBanner />
                <Space h="64px" />
                <FlightSection />
                <HotelSection />
            </Container>
            <Space h="64px" />
            <AirlineLogo />
            <Container size="xl">
                <WhyChoose />
                <MobileBanner />
                <Faqs />
            </Container>
        </>
    );
};

export default Home;

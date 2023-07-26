import { css, Global } from '@emotion/react';
import { BackgroundImage, Box, Container, Overlay, Space } from '@ns-ui/core';
import AirlineLogo from 'src/comps/home/airline-logo';
import Faqs from 'src/comps/home/faqs';
import HomeSearch from 'src/comps/home/home-search';
import HotelSection from 'src/comps/home/hotel-section';
import MobileBanner from 'src/comps/home/mobile-banner';
import WhyChoose from 'src/comps/home/why-choose';
import FlightSection from '../comps/home/flight-section';
import PromoBanner from '../comps/promo-banner/promo-banner';

const Home = () => {
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
                    h={260}
                    // bgp="center 20px"
                    // bgsz="cover"
                    src="/img/mountain-view.webp"
                    // bg="rgba(0, 0, 0, 0.5)
                >
                    <Container
                        size="xl"
                        pt={60}
                        px={80}
                        c="#FFF"
                        pos="relative"
                        sx={{ zIndex: 2 }}
                        // c={theme.colors.gray[1]}
                    >
                        <HomeSearch />
                    </Container>
                    <Overlay
                        gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
                        opacity={0.85}
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

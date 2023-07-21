import { BackgroundImage, Box, Container, Overlay, Space } from '@ns-ui/core';
import HomeSearch from 'src/comps/home/home-search';
import PromoBanner from '../comps/promo-banner/promo-banner';
import SectionTitle from 'src/comps/section-title/section-title';
import FlightSection from '../comps/home/flight-section';
import AirlineLogo from 'src/comps/home/airline-logo';
import WhyChoose from 'src/comps/home/why-choose';
import MobileBanner from 'src/comps/home/mobile-banner';
import Faqs from 'src/comps/home/faqs';
import { Global, css } from '@emotion/react';

const Home = () => {
    return (
        <>
            <main>
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
                            size="lg"
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
                <Container size="lg">
                    <Space h="64px" />
                    <SectionTitle title="Offer for your trip" align="center" />
                    <Space h="32px" />
                    <PromoBanner />
                    <Space h="64px" />
                    <FlightSection />
                </Container>
                <Space h="64px" />
                <AirlineLogo />
                <Space h="64px" />
                <WhyChoose />
                <Space h="64px" />
                <MobileBanner />
                <Space h="64px" />
                <Faqs />
            </main>
            <Global
                styles={css`
                    body {
                        background-color: #f8f9fa;
                    }
                `}
            />
        </>
    );
};

export default Home;

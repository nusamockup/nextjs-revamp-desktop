import { Carousel } from '@ns-ui/carousel';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Virtual } from 'swiper/modules';
import { Box, rem, useNsUITheme } from '@ns-ui/core';
import { IconCircleChevronLeft, IconCircleChevronRight } from '@tabler/icons';
import Image from 'next/image';
import useStyles from './promo-banner.styles';

const images = [
    'PromoBanner1.png',
    'PromoBanner2.png',
    'PromoBanner3.png',
    'PromoBanner4.png',
];

const PromoBanner = () => {
    const { classes } = useStyles();
    const theme = useNsUITheme();
    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
            {/* <Image src={`/img/promo/${url}`} alt="promo banner" radius="sm" /> */}
            <Image
                src={`/img/promo/${url}`}
                alt="promo banner"
                width={432}
                height={226}
                style={{ borderRadius: '8px' }}
                priority
            />
        </Carousel.Slide>
    ));

    return (
        <>
            <Box>
                <Carousel
                    slideSize="432px"
                    height="100%"
                    align="start"
                    slideGap="md"
                    controlSize={34}
                    loop={true}
                    withIndicators
                    // previousControlIcon={<IconChevronLeft size={rem(40)} />}
                    // nextControlIcon={<IconChevronRight size={rem(40)} />}
                    // classNames={classes}
                    previousControlIcon={
                        <IconCircleChevronLeft size={rem(34)} />
                    }
                    nextControlIcon={<IconCircleChevronRight size={rem(34)} />}
                    classNames={{
                        control: classes.hotelCarControl,
                        controls: classes.hotelCarControls,
                        indicators: classes.indicators,
                    }}
                >
                    {slides}
                </Carousel>
            </Box>
        </>
    );
};

export default PromoBanner;

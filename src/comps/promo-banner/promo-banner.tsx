import { Carousel } from '@ns-ui/carousel';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Virtual } from 'swiper/modules';
import { Image, rem, useNsUITheme } from '@ns-ui/core';
import { useMediaQuery } from '@ns-ui/hooks';
import useStyles from './promo-banner.styles';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const images = [
    'https://sta.nusatrip.net/cmsimg/ba/17/917/Tunggu%20promosi%20hotel%20Promo%20Banner.png',
    'https://sta.nusatrip.net/cmsimg/ba/19/919/Liburan%20kemanapun%20Promo%20Banner.png',
    'https://sta.nusatrip.net/cmsimg/ba/56/1156/ana_web.png',
    'https://sta.nusatrip.net/cmsimg/ba/33/1133/NGINAPJKTdesktop.png',
];

const PromoBanner = () => {
    const { classes } = useStyles();
    const theme = useNsUITheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
            <Image src={url} alt="promo banner" radius="sm" />
        </Carousel.Slide>
    ));

    return (
        <>
            <Carousel
                slideSize="432px"
                height="100%"
                align="start"
                slideGap="md"
                controlSize={40}
                loop={true}
                withIndicators
                previousControlIcon={<IconChevronLeft size={rem(40)} />}
                nextControlIcon={<IconChevronRight size={rem(40)} />}
                classNames={classes}
            >
                {slides}
            </Carousel>
        </>
    );
};

export default PromoBanner;

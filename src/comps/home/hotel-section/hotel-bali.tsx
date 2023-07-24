import { Carousel } from '@ns-ui/carousel';
import { Flex, Text, rem } from '@ns-ui/core';
import { IconCircleChevronLeft, IconCircleChevronRight } from '@tabler/icons';
import { HotelCard } from '../card/hotel-card';
import useStyles from '../card/hotel-carousel.styles';

const balihotels = [
    {
        image: '/img/hotel/hotel-1.webp',
        title: 'Aston Denpasar Hotel & Convention Center',
        city: 'Bali',
        location: 'Denpasar',
        link: '/',
        star: 3,
    },
    {
        image: '/img/hotel/hotel-2.webp',
        title: 'Aston Denpasar Hotel & Convention Center',
        city: 'Bali',
        location: 'Denpasar',
        link: '/',
        star: 5,
    },
    {
        image: '/img/hotel/hotel-3.webp',
        title: 'Aston Denpasar Hotel & Convention Center',
        city: 'Bali',
        location: 'Denpasar',
        link: '/',
        star: 5,
    },
    {
        image: '/img/hotel/hotel-4.webp',
        title: 'Aston Denpasar Hotel & Convention Center',
        city: 'Bali',
        location: 'Denpasar',
        link: '/',
        star: 4,
    },
    {
        image: '/img/hotel/hotel-5.webp',
        title: 'Aston Denpasar Hotel & Convention Center',
        city: 'Bali',
        location: 'Denpasar',
        link: '/',
        star: 2,
    },
    {
        image: '/img/hotel/hotel-6.webp',
        title: 'Aston Denpasar Hotel & Convention Center',
        city: 'Bali',
        location: 'Denpasar',
        link: '/',
        star: 3,
    },
];

const HotelBali = () => {
    const { classes } = useStyles();

    const slides = balihotels.map((item, index) => (
        <Carousel.Slide key={'bali' + index}>
            <HotelCard
                image={item.image}
                title={item.title}
                city={item.city}
                location={item.location}
                link={item.link}
                star={item.star}
            />
        </Carousel.Slide>
    ));
    return (
        <>
            <Carousel
                id="BaliHotel"
                slideSize="280px"
                slideGap="md"
                align="start"
                initialSlide={6}
                slidesToScroll={3}
                loop
                previousControlIcon={<IconCircleChevronLeft size={rem(38)} />}
                nextControlIcon={<IconCircleChevronRight size={rem(38)} />}
                classNames={{
                    control: classes.hotelCarControl,
                    controls: classes.hotelCarControls,
                }}
            >
                {slides}
            </Carousel>
            <Flex mt="md" justify="flex-end">
                <Text size="sm" c="dimmed" component="a" href="#" weight={600}>
                    View all hotel in Bali
                </Text>
            </Flex>
        </>
    );
};

export default HotelBali;

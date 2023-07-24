import { Carousel } from '@ns-ui/carousel';
import { Flex, Text, rem } from '@ns-ui/core';
import { IconCircleChevronLeft, IconCircleChevronRight } from '@tabler/icons';
import { HotelCard } from '../card/hotel-card';
import useStyles from '../card/hotel-carousel.styles';

const data = [
    {
        image: '/img/hotel/hotel-7.webp',
        title: 'V Hotel Bencoolen',
        city: 'Singapore',
        location: 'Victoria',
        link: '/',
        star: 3,
    },
    {
        image: '/img/hotel/hotel-8.webp',
        title: 'V Hotel Bencoolen',
        city: 'Singapore',
        location: 'Victoria',
        link: '/',
        star: 5,
    },
    {
        image: '/img/hotel/hotel-9.webp',
        title: 'V Hotel Bencoolen',
        city: 'Singapore',
        location: 'Victoria',
        link: '/',
        star: 5,
    },
    {
        image: '/img/hotel/hotel-10.webp',
        title: 'V Hotel Bencoolen',
        city: 'Singapore',
        location: 'Victoria',
        link: '/',
        star: 4,
    },
    {
        image: '/img/hotel/hotel-11.webp',
        title: 'V Hotel Bencoolen',
        city: 'Singapore',
        location: 'Victoria',
        link: '/',
        star: 2,
    },
    {
        image: '/img/hotel/hotel-12.webp',
        title: 'V Hotel Bencoolen',
        city: 'Singapore',
        location: 'Victoria',
        link: '/',
        star: 3,
    },
];

const HotelSingapore = () => {
    const { classes } = useStyles();
    const slides = data.map((item, index) => (
        <Carousel.Slide key={index}>
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
                id="SingaporeHotel"
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
                    View all hotel in Singapore
                </Text>
            </Flex>
        </>
    );
};

export default HotelSingapore;

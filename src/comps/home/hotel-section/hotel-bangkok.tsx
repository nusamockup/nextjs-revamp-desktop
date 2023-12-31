import { Carousel } from '@ns-ui/carousel';
import { Flex, Text, rem, Group, Divider } from '@ns-ui/core';
import { IconCircleChevronLeft, IconCircleChevronRight } from '@tabler/icons';
import { HotelCard } from '../card/hotel-card';
import useStyles from '../card/hotel-carousel.styles';

const data = [
    {
        image: '/img/hotel/hotel-1.webp',
        title: 'Holiday Inn Bangkok',
        city: 'Bangkok',
        location: 'Siam',
        link: '/',
        star: 3,
        price: 169,
    },
    {
        image: '/img/hotel/hotel-2.webp',
        title: 'Holiday Inn Bangkok',
        city: 'Bangkok',
        location: 'Siam',
        link: '/',
        star: 5,
        price: 169,
    },
    {
        image: '/img/hotel/hotel-3.webp',
        title: 'Holiday Inn Bangkok',
        city: 'Bangkok',
        location: 'Siam',
        link: '/',
        star: 5,
        price: 169,
    },
    {
        image: '/img/hotel/hotel-4.webp',
        title: 'Holiday Inn Bangkok',
        city: 'Bangkok',
        location: 'Siam',
        link: '/',
        star: 4,
        price: 169,
    },
    {
        image: '/img/hotel/hotel-5.webp',
        title: 'Holiday Inn Bangkok',
        city: 'Bangkok',
        location: 'Siam',
        link: '/',
        star: 2,
        price: 169,
    },
    {
        image: '/img/hotel/hotel-6.webp',
        title: 'Holiday Inn Bangkok',
        city: 'Bangkok',
        location: 'Siam',
        link: '/',
        star: 3,
        price: 169,
    },
];

const HotelBangkok = () => {
    const { classes } = useStyles();

    const slides = data.map((item, index) => (
        <Carousel.Slide key={'Bangkok' + index}>
            <HotelCard
                image={item.image}
                title={item.title}
                city={item.city}
                location={item.location}
                link={item.link}
                star={item.star}
                price={item.price}
            />
        </Carousel.Slide>
    ));
    return (
        <>
            <Carousel
                id="BangkokHotel"
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
            <Group mt="md" position="right">
                <Text size="sm" c="dimmed" component="a" href="#" weight={600}>
                    View all hotels in Bangkok
                </Text>
                <Divider orientation="vertical" />
                <Text size="sm" c="dimmed" component="a" href="#" weight={600}>
                    View all hotels
                </Text>
            </Group>
        </>
    );
};

export default HotelBangkok;

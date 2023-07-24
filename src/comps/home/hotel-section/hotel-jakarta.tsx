import { Carousel } from '@ns-ui/carousel';
import { Flex, Text, rem, Group, Divider } from '@ns-ui/core';
import { IconCircleChevronLeft, IconCircleChevronRight } from '@tabler/icons';
import { HotelCard } from '../card/hotel-card';
import useStyles from '../card/hotel-carousel.styles';

const jakartahotels = [
    {
        image: '/img/hotel/hotel-7.webp',
        title: 'Bobobox Pods Tanah Abang',
        city: 'Jakarta',
        location: 'Monas',
        link: '/',
        star: 3,
    },
    {
        image: '/img/hotel/hotel-8.webp',
        title: 'Bobobox Pods Tanah Abang',
        city: 'Jakarta',
        location: 'Monas',
        link: '/',
        star: 5,
    },
    {
        image: '/img/hotel/hotel-9.webp',
        title: 'Bobobox Pods Tanah Abang',
        city: 'Jakarta',
        location: 'Monas',
        link: '/',
        star: 5,
    },
    {
        image: '/img/hotel/hotel-10.webp',
        title: 'Bobobox Pods Tanah Abang',
        city: 'Jakarta',
        location: 'Monas',
        link: '/',
        star: 4,
    },
    {
        image: '/img/hotel/hotel-11.webp',
        title: 'Bobobox Pods Tanah Abang',
        city: 'Jakarta',
        location: 'Monas',
        link: '/',
        star: 2,
    },
    {
        image: '/img/hotel/hotel-12.webp',
        title: 'Bobobox Pods Tanah Abang',
        city: 'Jakarta',
        location: 'Monas',
        link: '/',
        star: 3,
    },
];

const HotelJakarta = () => {
    const { classes } = useStyles();
    const slides = jakartahotels.map((item, index) => (
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
                id="JakartaHotel"
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
                    View all hotel in Jakarta
                </Text>
                <Divider orientation="vertical" />
                <Text size="sm" c="dimmed" component="a" href="#" weight={600}>
                    View all hotel
                </Text>
            </Group>
        </>
    );
};

export default HotelJakarta;

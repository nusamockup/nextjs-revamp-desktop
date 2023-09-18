import { css, Global } from '@emotion/react';
import {
    Anchor,
    BackgroundImage,
    Badge,
    Box,
    Breadcrumbs,
    Button,
    Container,
    Divider,
    Flex,
    Grid,
    Group,
    List,
    Overlay,
    Rating,
    rem,
    SimpleGrid,
    Tabs,
    Text,
    Title,
    useNsUITheme,
} from '@ns-ui/core';
import {
    IconAirConditioning,
    IconBath,
    IconMapPinFilled,
    IconParking,
    IconPool,
    IconRouter,
    IconToolsKitchen2,
} from '@tabler/icons-react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { FaShower } from 'react-icons/fa';
import { ListItem } from 'src/comps/@ns-ui/core/lib/List/ListItem/ListItem';
import FooterPre from 'src/comps/footer/footer-pre';
import NsImage from 'src/comps/ns-image/ns-image';
import useStyles from 'src/comps/widget/flight-index.styles';
import { HotelDetails } from 'src/comps/widget/hotel-details';

const LeafletMap = dynamic(() => import('src/comps/map/leaflet-map'), {
    ssr: false,
});

const Details = () => {
    const { classes, cx } = useStyles();
    const TEXTS = ['in Asia', 'in Europe', 'anywhere in The World'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    const breadcrumbitems = [
        { title: 'Flights', href: '#' },
        { title: 'Asia', href: '#' },
        { title: 'Indonesia', href: '#' },
        { title: 'Jakarta', href: '#' },
        { title: 'Sari Pan Pasific' },
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));

    const theme = useNsUITheme();
    const PRIMARY_COL_HEIGHT = rem(400);
    // const PRIMARY_COL_HEIGHT = rem(300);
    const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

    return (
        <>
            <Global
                styles={css`
                    body {
                        background-color: #f8f9fa;
                    }
                `}
            />
            <Box mt="-20px">
                <BackgroundImage
                    pos="relative"
                    h="115px"
                    src="/img/mountain-view.webp"
                >
                    <Overlay color="#000" opacity={0.6} zIndex={1} />
                </BackgroundImage>
            </Box>
            <Container
                size="xl"
                mt="-110px"
                mb={32}
                sx={{
                    color: '#FFF',
                }}
            >
                <Tabs
                    pos="relative"
                    w="100%"
                    sx={{
                        zIndex: 2,
                    }}
                    defaultValue="stay"
                    unstyled
                >
                    {/* <Tabs.List>
                        <Group fz="21px" fw={400}>
                            <Tabs.Tab value="stay" className={classes.hugeBtn}>
                                <Group spacing="xs">
                                    <FaBed />
                                    <Text span>Stay</Text>
                                </Group>
                            </Tabs.Tab>
                            <Group spacing="8px">
                                at your favorite places
                                <TextTransition springConfig={presets.stiff}>
                                    {TEXTS[index % TEXTS.length]}
                                </TextTransition>
                            </Group>
                        </Group>
                    </Tabs.List> */}
                    <Tabs.Panel value="stay">
                        <HotelDetails />
                    </Tabs.Panel>
                </Tabs>
            </Container>
            <Container
                size="xl"
                pt="20px"
                mb={32}
                sx={{
                    color: '#FFF',
                }}
            >
                <Group position="apart">
                    <Breadcrumbs
                        separator="→"
                        classNames={{ breadcrumb: 'ns-breadcrumb' }}
                        styles={{ breadcrumb: { color: 'black' } }}
                        sx={{
                            'ns-Breadcrumbs-root > ns-breadcrumb:last-child': {
                                color: '#000',
                                fontWeight: 'bold',
                            },
                        }}
                    >
                        {breadcrumbitems}
                    </Breadcrumbs>
                    <Text component="a" c={'gray'} size={'sm'}>
                        View all image
                    </Text>
                </Group>
                {/* <Breadcrumbs separator="&#xea61;">
                    {breadcrumbitems}
                </Breadcrumbs> */}
            </Container>
            <Container size={'xl'} my="md">
                <SimpleGrid
                    cols={2}
                    spacing="md"
                    breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                >
                    <NsImage
                        src="/img/hotel/9d879b4fc60993b28a23834e6d8d6b87.jpeg"
                        radius="sm"
                        alt="hotel-img"
                        height={PRIMARY_COL_HEIGHT}
                    />
                    <Grid gutter="md">
                        <Grid.Col span={6}>
                            <NsImage
                                src="/img/hotel/02b315cab10314e173fa2e83467643bc.png"
                                radius="sm"
                                // fit="fill"
                                height={SECONDARY_COL_HEIGHT}
                                alt="hotel-img"
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <NsImage
                                src="/img/hotel/1eacc8a91c3008a7fa5b844764e15205.jpeg"
                                radius="sm"
                                height={SECONDARY_COL_HEIGHT}
                                alt="hotel-img"
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <NsImage
                                src="/img/hotel/17f8b8d3fda48ca1ae69684e6a887a2a.jpeg"
                                radius="sm"
                                height={SECONDARY_COL_HEIGHT}
                                alt="hotel-img"
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <NsImage
                                height={SECONDARY_COL_HEIGHT}
                                src="/img/hotel/b4fe75fea3aac78297885ff2af58e5f9.png"
                                radius="sm"
                                alt="hotel-img"
                            />
                        </Grid.Col>
                    </Grid>
                </SimpleGrid>
            </Container>
            <Container size={'xl'}>
                <Box
                    p="md"
                    sx={{
                        border: '1px solid #d2d8dd',
                    }}
                >
                    <Group position="apart" mb={'sm'}>
                        <Group>
                            <Badge radius="4px" variant="outline">
                                Hotels
                            </Badge>
                            <Rating size="xs" defaultValue={5} />
                        </Group>
                        <Badge radius="4px" color="green" variant="filled">
                            Save 20%
                        </Badge>
                    </Group>
                    <Group position="apart">
                        <Flex direction="column">
                            <Title order={2} fw={400}>
                                Sari Pan Pacific
                            </Title>
                            <Text size={'sm'} c="dimmed">
                                <Flex align={'center'} gap={'4px'}>
                                    <IconMapPinFilled size={'16px'} />
                                    <Text component="span" fw={600}>
                                        Address:
                                    </Text>
                                    <Text component="span" fw={400}>
                                        Jl. MH. Thamrin No.6 , Jakarta
                                    </Text>
                                </Flex>
                                <Button variant={'light'} compact mt={'10px'}>
                                    View Map
                                </Button>
                            </Text>
                        </Flex>
                        <Flex
                            direction="column"
                            justify="flex-start"
                            align="flex-end"
                        >
                            <Text size={'sm'} c="dimmed">
                                start From
                            </Text>
                            <Title order={3} c={'#f37721'}>
                                IDR 820,000
                            </Title>
                            <Text size={'sm'}>
                                avg/night,
                                <Text component="span" c={'dimmed'} ml="4px">
                                    tax included
                                </Text>
                            </Text>
                        </Flex>
                    </Group>
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo officiis et quaerat, corporis molestias recusandae
                    libero. Odit ducimus, repellat iste quam esse neque quae
                    animi cupiditate optio incidunt vel cumque? */}
                </Box>

                <Title fw={400} order={4} mt={'xl'}>
                    Popular Facilities
                </Title>
                <Flex mt={'md'} gap={32} c="dimmed">
                    <Flex align="center" gap={8}>
                        <IconRouter size={'21px'} />
                        <Text>Free Wifi</Text>
                    </Flex>
                    <Flex align="center" gap={8}>
                        <IconAirConditioning size={'21px'} />
                        <Text>Air Condition</Text>
                    </Flex>
                    <Flex align="center" gap={8}>
                        <IconParking size={'21px'} />
                        <Text>Free Parking</Text>
                    </Flex>
                    <Flex align="center" gap={8}>
                        <IconToolsKitchen2 size={'21px'} />
                        <Text>Breakfast</Text>
                    </Flex>
                    <Flex align="center" gap={8}>
                        <IconPool size={'21px'} />
                        <Text>Swimming Pool</Text>
                    </Flex>
                    <Flex align="center" gap={8}>
                        <FaShower />
                        <Text>Shower</Text>
                    </Flex>
                    <Flex align="center" gap={8}>
                        <IconBath size={'21px'} />
                        <Text>Bathtub</Text>
                    </Flex>
                </Flex>
                <Divider my="xl" />

                <Title fw={400} order={4} mt={'xl'}>
                    Check-in Procedure
                </Title>
                <Group spacing={'md'} mt={'md'}>
                    <Flex direction={'column'}>
                        <Text size={'sm'} c="dimmed">
                            Check-in
                        </Text>
                        <Text fw={500}>14:00 - 23:00</Text>
                    </Flex>
                    <Flex direction={'column'}>
                        <Text size={'sm'} c="dimmed">
                            Check-out
                        </Text>
                        <Text fw={500}>12:00</Text>
                    </Flex>
                </Group>
                <List mt={'md'} size="sm">
                    <List.Item>
                        To make arrangements for check-in please contact the
                        property at least 24 hours before arrival using the
                        information on the booking confirmation. 24-hour airport
                        shuttle service is available on request. Fees may apply.
                        Contact the property in advance to get details.
                    </List.Item>
                    <List.Item>
                        Extra-person charges may apply and vary depending on
                        property policy.Government-issued photo identification
                        and a credit card, debit card, or cash deposit are
                        required at check-in for incidental charges.
                    </List.Item>
                </List>
                <Text size="sm" mt={'md'}>
                    Special requests are subject to availability upon check-in
                    and may incur additional charges. Special requests cannot be
                    guaranteed.
                </Text>
                <Divider my="xl" />

                <Title fw={400} order={4} mt={'xl'}>
                    Location and map
                </Title>
                <Grid gutter="md" mt={'md'}>
                    <Grid.Col span={5}>
                        <Text size={'sm'}>
                            <Flex align={'center'} gap={'4px'}>
                                <IconMapPinFilled size={'16px'} />
                                <Text component="span" fw={600}>
                                    Address:
                                </Text>
                                <Text component="span" fw={400}>
                                    Jl. MH. Thamrin No.6 , Jakarta
                                </Text>
                            </Flex>
                            <Text mt={'md'}>
                                Located 4 km from Plaza Semanggi and 5 km from
                                the Jakarta International Expo, the hotel can
                                also be reached within a 35-minute drive from
                                Soekarno-Hatta International Airport.
                            </Text>
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={7}>
                        <LeafletMap />
                    </Grid.Col>
                </Grid>
                <Divider my="xl" />

                <Title fw={400} order={4} mt={'xl'}>
                    Description
                </Title>
                <Text mt={'md'} size={'sm'}>
                    To indulge its guests, the hotel features an array of
                    fabulous amenities. The establishment is a convenient and
                    unique hotel in Jakarta with life style and spirit of the
                    Pacific Rim. It features 5 dining options, spacious guest
                    rooms, free WLAN internet access, a hotel safe and lift
                    access. Guests are welcomed in the lobby with a 24-hour
                    reception and a 24-hour check-out service. Drinks are served
                    at the hotel bar, and guests can use the amenities like the
                    room and laundry services provided. Business guests will be
                    satisfied with the conference facilities offered at this
                    hotel.
                </Text>
                <Title order={6} my={'md'}>
                    General
                </Title>
                <Text mt={'md'} size={'sm'}>
                    Featuring modern decor and impeccable amenities, each room
                    is fitted with air conditioning, a 42-inch flat-screen IPTV,
                    a safe and a work desk. All of them include a minibar and an
                    electric kettle. Bathrooms are completed with a hairdryer,
                    and slippers.
                </Text>
                <Title order={6} my={'md'}>
                    Activities & Sport
                </Title>
                <Text mt={'md'} size={'sm'}>
                    The hotel's recreational facilities, which include private
                    beach, fitness center, outdoor pool, garden are designed for
                    escape and relaxation.
                </Text>
                <Title order={6} my={'md'}>
                    Comments
                </Title>
                <Text mt={'md'} size={'sm'}>
                    For the comfort and convenience of guests, the hotel offers
                    free Wi-Fi in all rooms, 24-hour security, daily
                    housekeeping, printer, photocopying.
                </Text>
                <Divider my="xl" />

                <Title fw={400} order={4} mt={'xl'}>
                    All Facilities
                </Title>
                <Title order={6} my={'md'}>
                    General
                </Title>
                <List size={'sm'}>
                    <SimpleGrid spacing={4} cols={4}>
                        <List.Item>24h reception</List.Item>
                        <List.Item>Bar</List.Item>
                        <List.Item>Car Park</List.Item>
                        <List.Item>Conference Room</List.Item>
                        <List.Item>Disco / club</List.Item>
                        <List.Item>Laundry service</List.Item>
                        <List.Item>Lift</List.Item>
                        <List.Item>Restaurant</List.Item>
                        <List.Item>Room Service</List.Item>
                        <List.Item>Safe</List.Item>
                        <List.Item>Babysitting</List.Item>
                        <List.Item>Beauty salon</List.Item>
                        <List.Item>Business center</List.Item>
                        <List.Item>Concierge</List.Item>
                        <List.Item>Early check-in</List.Item>
                        <List.Item>Elevator</List.Item>
                        <List.Item>Lobby</List.Item>
                        <List.Item>220V power supply</List.Item>
                    </SimpleGrid>
                </List>
                <Title order={6} my={'md'}>
                    Activities
                </Title>
                <List size={'sm'}>
                    <SimpleGrid spacing={4} cols={4}>
                        <List.Item>Gym / Fitness-center</List.Item>
                        <List.Item>Billiards / Snooker</List.Item>
                        <List.Item>Pool</List.Item>
                        <List.Item>Gymnastics</List.Item>
                        <List.Item>Spa</List.Item>
                        <List.Item>Massage</List.Item>
                        <List.Item>Archery</List.Item>
                    </SimpleGrid>
                </List>
            </Container>

            <Box bg="#F1F5F9" mb="-7.5rem" mt={'120px'}>
                <Container size="xl">
                    <FooterPre />
                </Container>
            </Box>
        </>
    );
};

export default Details;

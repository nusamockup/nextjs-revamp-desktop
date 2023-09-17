import { css, Global } from '@emotion/react';
import {
    BackgroundImage,
    Box,
    Container,
    Flex,
    NavLink,
    Overlay,
    Paper,
    ScrollArea,
    SimpleGrid,
    Title,
} from '@ns-ui/core';
import { useRouter } from 'next/navigation';
// import WorldMap from 'src/comps/map/world-map';
import { IconMapPinFilled } from '@tabler/icons-react';
import dynamic from 'next/dynamic';
import { worldcountries } from 'src/comps/constants';
import FooterPre from 'src/comps/footer/footer-pre';

const WorldMap = dynamic(() => import('src/comps/map/world-map'), {
    ssr: false,
});
const TestMap = dynamic(() => import('src/comps/map/test'), {
    ssr: false,
});

// const { getCode, getName, getData } = require('country-list');

const FlightWorld = () => {
    const router = useRouter();

    // const obj = $('#country-list .jvectormap-container').data('mapObject');
    const countries = worldcountries.map((country, index) => (
        <NavLink
            component="a"
            href={`https://en.wikipedia.org/wiki/${country.countryname}`}
            key={country.code}
            label={country.countryname}
            icon={<IconMapPinFilled size="1rem" stroke={1.5} />}
            c="dimmed"
            styles={{
                root: {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    '&:hover': {
                        color: '#000',
                        borderRadius: '8px',
                        backgroundColor: 'white',
                    },
                },
            }}
            // onClick={() => setActive(index)}
            // onMouseOver={() => {
            //     obj.regions[country.code].element.setHovered(true);
            // }}
            // onMouseOut={() => {
            //     obj.regions[country.code].element.setHovered(false);
            // }}
        />
        // <Button
        //     component="a"
        //     href={`https://en.wikipedia.org/wiki/${country.countryname}`}
        //     leftIcon={<IconMapPin />}
        //     variant="outline"
        //     key={country.code}
        //     c="dimmed"
        // >
        //     {country.countryname}
        // </Button>
    ));
    return (
        <>
            <Global
                styles={css`
                    body {
                        background-color: #f8f8f8;
                    }
                    .jvectormap-tip {
                        z-index: 4;
                    }
                `}
            />

            <Box mt="-20px">
                <BackgroundImage
                    pos="relative"
                    h={215}
                    src=""
                    // bg="#0054A6"
                    sx={{
                        background:
                            'url(/img/banner/pattern_1.svg) #0054A6 repeat center',
                        backgroundSize: 'contain',
                    }}
                >
                    <Overlay color="#000" opacity={0.15} zIndex={1} />
                    <Container
                        pt="55px"
                        pos="relative"
                        size="xl"
                        sx={{
                            zIndex: 2,
                        }}
                    >
                        <Box>
                            <Title order={2} c="#FFF" mt="sm" fw="400">
                                Which part of The World You want to visit
                            </Title>
                        </Box>
                    </Container>
                </BackgroundImage>
            </Box>
            <Container size="xl" mt={-80} pos={'relative'} sx={{ zIndex: 3 }}>
                <Paper shadow="xs" p="xl">
                    <WorldMap />
                </Paper>
                <div id="country-list">
                    <Box mt={60} w={'100%'}>
                        <ScrollArea mx={10} h={380}>
                            <Flex wrap="wrap" justify="flex-start">
                                <SimpleGrid verticalSpacing="5px" cols={6}>
                                    {countries}
                                </SimpleGrid>
                            </Flex>
                        </ScrollArea>
                    </Box>
                </div>
                {/* <div>Flight World</div> */}
                {/* <Space h="1082px" /> */}

                <TestMap />
            </Container>

            <Box bg="#F1F5F9" mt={120} mb="-7.5rem">
                <Container size="xl">
                    <FooterPre />
                </Container>
            </Box>
        </>
    );
};

export default FlightWorld;

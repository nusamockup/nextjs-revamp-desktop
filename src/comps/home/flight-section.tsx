import {
    Anchor,
    BackgroundImage,
    Flex,
    Image,
    Overlay,
    SimpleGrid,
    Text,
} from '@ns-ui/core';
import SectionTitle from '../section-title/section-title';

const PRIMARY_COL_HEIGHT = 350;
const SECONDARY_COL_HEIGHT = 385;

const FlightSection = () => {
    // const { classes, cx, theme } = useStyles();

    return (
        <>
            <SectionTitle
                title="Explore More Places Around The World"
                desc="Exploring new places and meeting strangers."
                sectionname="Flights"
            />
            <SimpleGrid cols={2} spacing="md">
                <Anchor
                    href="/"
                    sx={{
                        '&:hover': {
                            textDecoration: 'none',
                        },
                    }}
                >
                    <BackgroundImage
                        src="/img/banner/ffa2a6e85b0993fb446076594ee6f228.webp"
                        radius="md"
                        style={{ aspectRatio: 16 / 9 }}
                        pos="relative"
                    >
                        <Overlay
                            gradient="linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 40%);"
                            // opacity={1}
                            zIndex={0}
                            radius="md"
                        />
                        <Flex
                            gap="xs"
                            justify="flex-end"
                            align="flex-start"
                            direction="column"
                            h="100%"
                            p={30}
                            pos="relative"
                        >
                            <Image width={42} src="/img/icons/plane-icon.svg" />
                            <Text c="#FFF">Dubai, Emirate of Dubai</Text>
                        </Flex>
                    </BackgroundImage>
                </Anchor>
                <Anchor
                    href="/"
                    sx={{
                        '&:hover': {
                            textDecoration: 'none',
                        },
                    }}
                >
                    <BackgroundImage
                        src="/img/banner/a98f91eb2d255353b03754e7d8b12b07.webp"
                        radius="md"
                        style={{ aspectRatio: 16 / 9 }}
                        pos="relative"
                    >
                        <Overlay
                            gradient="linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 40%);"
                            // opacity={1}
                            zIndex={0}
                            radius="md"
                        />
                        <Flex
                            gap="xs"
                            justify="flex-end"
                            align="flex-start"
                            direction="column"
                            h="100%"
                            p={30}
                            pos="relative"
                        >
                            <Image width={42} src="/img/icons/plane-icon.svg" />
                            <Text c="#FFF">Bali, Indonesia</Text>
                        </Flex>
                    </BackgroundImage>
                </Anchor>
            </SimpleGrid>
            <SimpleGrid cols={4} spacing="md" mt="md">
                <Anchor
                    href="/"
                    sx={{
                        '&:hover': {
                            textDecoration: 'none',
                        },
                    }}
                >
                    <BackgroundImage
                        src="/img/banner/0bfae23f1e227365f541b0416fc28ae1.webp"
                        radius="md"
                        style={{ aspectRatio: 3 / 4 }}
                        pos="relative"
                    >
                        <Overlay
                            gradient="linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 40%);"
                            // opacity={1}
                            zIndex={0}
                            radius="md"
                        />
                        <Flex
                            gap="xs"
                            justify="flex-end"
                            align="flex-start"
                            direction="column"
                            h="100%"
                            p={30}
                            pos="relative"
                        >
                            <Image width={42} src="/img/icons/plane-icon.svg" />
                            <Text c="#FFF">London, United Kingdom</Text>
                        </Flex>
                    </BackgroundImage>
                </Anchor>
                <Anchor
                    href="/"
                    sx={{
                        '&:hover': {
                            textDecoration: 'none',
                        },
                    }}
                >
                    <BackgroundImage
                        src="/img/banner/a42891e849bfbbd8ba34e43ab4f1c5f7.webp"
                        radius="md"
                        style={{ aspectRatio: 3 / 4 }}
                        pos="relative"
                    >
                        <Overlay
                            gradient="linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 40%);"
                            // opacity={1}
                            zIndex={0}
                            radius="md"
                        />
                        <Flex
                            gap="xs"
                            justify="flex-end"
                            align="flex-start"
                            direction="column"
                            h="100%"
                            p={30}
                            pos="relative"
                        >
                            <Image width={42} src="/img/icons/plane-icon.svg" />
                            <Text c="#FFF">Paris, France</Text>
                        </Flex>
                    </BackgroundImage>
                </Anchor>
                <Anchor
                    href="/"
                    sx={{
                        '&:hover': {
                            textDecoration: 'none',
                        },
                    }}
                >
                    <BackgroundImage
                        src="/img/banner/47b5c8999253c801fd8e2b0d859dfdc4.webp"
                        radius="md"
                        style={{ aspectRatio: 3 / 4 }}
                        pos="relative"
                    >
                        <Overlay
                            gradient="linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 40%);"
                            // opacity={1}
                            zIndex={0}
                            radius="md"
                        />
                        <Flex
                            gap="xs"
                            justify="flex-end"
                            align="flex-start"
                            direction="column"
                            h="100%"
                            p={30}
                            pos="relative"
                        >
                            <Image width={42} src="/img/icons/plane-icon.svg" />
                            <Text c="#FFF">Rome, Italy</Text>
                        </Flex>
                    </BackgroundImage>
                </Anchor>
                <Anchor
                    href="/"
                    sx={{
                        '&:hover': {
                            textDecoration: 'none',
                        },
                    }}
                >
                    <BackgroundImage
                        src="/img/banner/b72ce72aa57544208d05c5d61ca7430b.webp"
                        radius="md"
                        style={{ aspectRatio: 3 / 4 }}
                        pos="relative"
                    >
                        <Overlay
                            gradient="linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 40%);"
                            // opacity={1}
                            zIndex={0}
                            radius="md"
                        />
                        <Flex
                            gap="xs"
                            justify="flex-end"
                            align="flex-start"
                            direction="column"
                            h="100%"
                            p={30}
                            pos="relative"
                        >
                            <Image width={42} src="/img/icons/plane-icon.svg" />
                            <Text c="#FFF">Cancun, New Mexico</Text>
                        </Flex>
                    </BackgroundImage>
                </Anchor>
            </SimpleGrid>
        </>
    );
};

export default FlightSection;

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
import { ImageCard } from './ImageCard';

const FlightSection = () => {
    return (
        <>
            <SectionTitle
                title="Explore More Places Around The World"
                desc="Exploring new places and meeting strangers."
                sectionname="Flights"
            />
            <SimpleGrid cols={2} spacing="md">
                <ImageCard
                    image="/img/banner/ffa2a6e85b0993fb446076594ee6f228.webp"
                    title="Dubai, Emirate of Dubai"
                    link="/"
                    ratio={16 / 9}
                />
                <ImageCard
                    image="/img/banner/a98f91eb2d255353b03754e7d8b12b07.webp"
                    title="Bali, Indonesia"
                    link="/"
                    ratio={16 / 9}
                />
            </SimpleGrid>
            <SimpleGrid cols={4} spacing="md" mt="md">
                <ImageCard
                    image="/img/banner/0bfae23f1e227365f541b0416fc28ae1.webp"
                    title="London, United Kingdom"
                    link="/"
                    ratio={3 / 4}
                />
                <ImageCard
                    image="/img/banner/a42891e849bfbbd8ba34e43ab4f1c5f7.webp"
                    title="Paris, France"
                    link="/"
                    ratio={3 / 4}
                />
                <ImageCard
                    image="/img/banner/47b5c8999253c801fd8e2b0d859dfdc4.webp"
                    title="Rome, Italy"
                    link="/"
                    ratio={3 / 4}
                />
                <ImageCard
                    image="/img/banner/b72ce72aa57544208d05c5d61ca7430b.webp"
                    title="Cancun, New Mexico"
                    link="/"
                    ratio={3 / 4}
                />
            </SimpleGrid>
        </>
    );
};

export default FlightSection;

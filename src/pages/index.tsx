import React from 'react';
import { css, Global } from '@emotion/react';
import {
    Anchor,
    Avatar,
    BackgroundImage,
    Badge,
    Box,
    Container,
    createStyles,
    Group,
    List,
    Overlay,
    Paper,
    SimpleGrid,
    Text,
    Title,
} from '@ns-ui/core';
import NsImage from 'src/comps/ns-image/ns-image';
import {
    IconBed,
    IconHome2,
    IconNotes,
    IconPlane,
    IconWallet,
} from '@tabler/icons-react';
import PagesListItem from 'src/comps/index/pages-list-item';
import FlightsListItem from 'src/comps/index/flights-list-item';
import HotelsListItem from 'src/comps/index/hotels-list-item';
import SupportListItem from 'src/comps/index/support-list-item';
import MybookingListItem from 'src/comps/index/mybooking-list-item';

const useStyles = createStyles(() => ({
    image: {
        marginBottom: '20px',
    },
    title: {
        marginBottom: '10px',
    },
}));

const Index = () => {
    const { classes } = useStyles();
    return (
        <>
            <Global
                styles={css`
                    body {
                        background-color: #f8f8f8;
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
                                Nusatrip Desktop Revamp
                            </Title>
                        </Box>
                    </Container>
                </BackgroundImage>
            </Box>
            <Container
                mt="-100px"
                size="xl"
                pos="relative"
                sx={{
                    zIndex: 2,
                }}
            >
                <Box>
                    <SimpleGrid py={32} cols={5} spacing="32px">
                        <PagesListItem />
                        <FlightsListItem />
                        <HotelsListItem />
                        <MybookingListItem />
                        <SupportListItem />
                    </SimpleGrid>
                </Box>
            </Container>
        </>
    );
};

export default Index;

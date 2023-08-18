import { BackgroundImage, Box, Container, Overlay, Title } from '@ns-ui/core';
import React from 'react';

interface supportBannerProps {
    text: string;
}

const SupportBannerText = ({ text }: supportBannerProps) => {
    return (
        <>
            <Box mt="-20px">
                <BackgroundImage
                    pos="relative"
                    h={215 - 60}
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
                                {/* 5 Easy Steps to Book a Flight on NusaTrip! */}
                                {text}
                            </Title>
                        </Box>
                    </Container>
                </BackgroundImage>
            </Box>
        </>
    );
};

export default SupportBannerText;

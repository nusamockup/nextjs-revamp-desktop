import {
    Anchor,
    BackgroundImage,
    Container,
    Flex,
    Overlay,
    Space,
    Text,
    Title,
} from '@ns-ui/core';
import Image from 'next/image';
import React from 'react';

const MobileBanner = () => {
    return (
        <>
            <Space h="64px" />
            <Container size="lg">
                <BackgroundImage
                    src="/img/banner/3153d25d96ef43bd7fc22e361139e5cc.webp"
                    radius="md"
                    h={420}
                    // style={{ aspectRatio: 16 / 9 }}
                    pos="relative"
                >
                    <Flex
                        pos="relative"
                        align="flex-end"
                        gap={0}
                        style={{
                            zIndex: '1',
                            color: '#fff',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Image
                            src="/img/banner/iphone.webp"
                            width={458}
                            height={363}
                            alt="Nusatrip Mobile"
                            style={{
                                marginLeft: '40px',
                            }}
                        />
                        <Flex
                            direction="column"
                            justify="flex-start"
                            style={{
                                paddingTop: '78px',
                                marginLeft: '-67px',
                                height: '100%',
                                width: '100%',
                            }}
                        >
                            <Text
                                mt={24}
                                style={{
                                    color: '#FFF',
                                    fontFamily: 'Roboto',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: '120%',
                                }}
                            >
                                Simplified travel at your fingertips.
                            </Text>
                            <Title
                                order={2}
                                mt={24}
                                style={{
                                    color: '#FFF',
                                    fontFamily: 'Roboto',
                                    fontSize: '48px',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: '110%',
                                    width: '620px',
                                }}
                            >
                                Download our app for easy bookings.
                            </Title>
                            <Flex gap="md" mt={32}>
                                <Anchor href="#">
                                    <Image
                                        src="img/mobile-badge/ios-white.svg"
                                        width={155}
                                        height={46}
                                        alt="Download IOS Nusatrip "
                                    />
                                </Anchor>
                                <Anchor href="#">
                                    <Image
                                        src="img/mobile-badge/android-white.svg"
                                        width={156}
                                        height={46}
                                        alt="Download Android Nusatrip "
                                    />
                                </Anchor>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Overlay
                        color="#000"
                        opacity={0.5}
                        zIndex={0}
                        radius="md"
                    />
                </BackgroundImage>
            </Container>
        </>
    );
};

export default MobileBanner;

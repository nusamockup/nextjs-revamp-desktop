import { AspectRatio, Badge, Button, Card, Group, Text } from '@ns-ui/core';
import { createStyles, getStylesRef, rem } from '@ns-ui/styles';
import { IconStar } from '@tabler/icons-react';
import React from 'react';
import NsImage from 'src/comps/ns-image/ns-image';

const useStyles = createStyles((theme) => ({
    price: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },

    carousel: {
        '&:hover': {
            [`& .${getStylesRef('carouselControls')}`]: {
                opacity: 1,
            },
        },
    },

    carouselControls: {
        ref: getStylesRef('carouselControls'),
        transition: 'opacity 150ms ease',
        opacity: 0,
    },

    carouselIndicator: {
        width: rem(4),
        height: rem(4),
        transition: 'width 250ms ease',

        '&[data-active]': {
            width: rem(16),
        },
    },
}));

interface HotelPromoCardProps {
    hotelName: string;
    image: string;
    location: string;
    desc: string;
    price: number;
    disc: number;
}

const HotelPromoCard = ({
    hotelName,
    image,
    location,
    price,
    desc,
    disc,
}: HotelPromoCardProps) => {
    const { classes } = useStyles();
    return (
        <>
            <Card radius="md" withBorder padding="xl">
                <Card.Section>
                    {/* <AspectRatio ratio={2 / 3}> */}
                    <NsImage
                        src={image}
                        height={220}
                        // width="100%"
                        // sx={{ aspectRatio: '2/3' }}
                    />
                    {/* </AspectRatio> */}
                </Card.Section>

                <Group position="apart" mt="lg">
                    <Text fw={500} fz="lg">
                        {hotelName}, {location}
                    </Text>

                    <Badge variant="outline">{disc}% off</Badge>
                </Group>

                <Text fz="sm" c="dimmed" mt="sm">
                    {desc}
                </Text>

                <Group position="apart" mt="md">
                    <div>
                        <Text fz="xl" span fw={500} className={classes.price}>
                            $ {price}
                        </Text>
                        <Text span fz="sm" c="dimmed">
                            {' '}
                            / night
                        </Text>
                    </div>

                    <Button radius="md">Book now</Button>
                </Group>
            </Card>
        </>
    );
};

export default HotelPromoCard;

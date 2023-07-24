import {
    Card,
    Center,
    Flex,
    Image,
    Rating,
    Text,
    createStyles,
} from '@ns-ui/core';
import { FiMapPin } from 'react-icons/fi';

const useStyles = createStyles((theme) => ({
    card: {
        width: '280px',
        height: '320px',
        position: 'relative',
        backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    rating: {
        marginTop: theme.spacing.md,
    },

    title: {
        display: 'block',
        marginTop: '5px',
        marginBottom: theme.spacing.sm,
    },
}));

interface HotelCardProps {
    image: string;
    link: string;
    title: string;
    city: string;
    location: string;
    star: number;
}

export function HotelCard({
    className,
    image,
    link,
    title,
    star,
    city,
    location,
    ...others
}: HotelCardProps &
    Omit<React.ComponentPropsWithoutRef<'div'>, keyof HotelCardProps>) {
    const { classes, cx, theme } = useStyles();
    const linkProps = {
        href: link,
        // target: '_blank',
        // rel: 'noopener noreferrer',
    };

    return (
        <Card
            withBorder
            radius="md"
            className={cx(classes.card, className)}
            {...others}
        >
            <Card.Section>
                <a {...linkProps}>
                    <Image src={image} height={160} />
                    <Flex></Flex>
                </a>
            </Card.Section>
            <Rating className={classes.rating} defaultValue={star} size="xs" />
            <Text
                className={classes.title}
                fw={500}
                component="a"
                {...linkProps}
            >
                {title}
            </Text>

            <Text fz="sm" color="dimmed" lineClamp={4}>
                <Flex align="center" gap={5}>
                    <FiMapPin size={16} /> {location}, {city}
                </Flex>
            </Text>
        </Card>
    );
}

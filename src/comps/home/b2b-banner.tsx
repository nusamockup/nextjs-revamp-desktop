import { Button, Card, CardProps, Overlay, Text } from '@ns-ui/core';
import { createStyles, rem } from '@ns-ui/styles';
import React from 'react';

const useStyles = createStyles((theme) => ({
    card: {
        height: '100%',
        weight: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    content: {
        ...theme.fn.cover(),
        padding: theme.spacing.xl,
        zIndex: 1,
    },

    action: {
        position: 'absolute',
        bottom: theme.spacing.xl,
        right: theme.spacing.xl,
    },

    title: {
        color: theme.white,
        marginBottom: `calc(${theme.spacing.md})`,
        letterSpacing: '.5px',
        fontSize: theme.spacing.xl,
        lineHeight: '28px',
    },

    description: {
        color: theme.white,
        maxWidth: rem(220),
    },
}));

interface ImageActionBannerProps {
    // title: React.ReactNode;
    title: string;
    description: React.ReactNode;
    image: string;
    // action: {
    //     label: string;
    //     link: string;
    // };
}

const NbBanner = ({
    title,
    description,
    image,
    // action,
    style,
    className,
    ...others
}: ImageActionBannerProps &
    Omit<CardProps, keyof ImageActionBannerProps | 'children'>) => {
    const { classes, cx, theme } = useStyles();
    return (
        <Card
            radius="md"
            // style={{ backgroundImage: `url(${image})`, ...style }}
            style={{
                backgroundImage:
                    // 'url("https://images.unsplash.com/photo-1456615074700-1dc12aa7364d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
                    // 'url("/img/banner/photo-1596394516093-501ba68a0ba6.webp")',
                    // 'url("/img/banner/6950476.webp")',
                    'url("/img/banner/b2b-banner.webp")',
                aspectRatio: '1/1',
                ...style,
            }}
            className={cx(classes.card, className)}
            {...others}
        >
            <Overlay
                gradient={`linear-gradient(105deg, rgba(0,0,0, 1) 0%, rgba(0,0,0, .5) 70%, rgba(0,0,0, 0) 100%)`}
                // opacity={0.55}
                style={{ opacity: 0.7 }}
                zIndex={0}
            />

            <div className={classes.content}>
                <Text
                    dangerouslySetInnerHTML={{ __html: title }}
                    size="lg"
                    weight={700}
                    className={classes.title}
                >
                    {/* {title} */}
                </Text>

                <Text size="sm" className={classes.description}>
                    {description}
                </Text>

                <Button
                    className={classes.action}
                    variant="white"
                    color="dark"
                    component="a"
                    size="xs"
                    href="/"
                    // href={action.link}
                >
                    {/* {action.label} */}
                    Login / Register
                </Button>
            </div>
        </Card>
    );
};

export default NbBanner;

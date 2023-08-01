import { Button, Container, Overlay, Text, Title } from '@ns-ui/core';
import { createStyles, rem } from '@ns-ui/styles';
import React from 'react';

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        paddingTop: rem(30),
        paddingBottom: rem(30),
        backgroundImage: 'url(/img/banner/b2b-banner-02.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: '64px',

        // // [theme.fn.smallerThan('xs')]: {
        //     paddingTop: 30,
        //     paddingBottom: 20,
        // // },
        borderRadius: theme.spacing.sm,
        overflow: 'hidden',
    },

    inner: {
        position: 'relative',
        zIndex: 1,
    },

    title: {
        fontWeight: 600,
        fontSize: rem(32),
        // letterSpacing: rem(1),
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        color: theme.white,
        marginBottom: theme.spacing.xs,
        textAlign: 'center',

        // [theme.fn.smallerThan('xs')]: {
        //     fontSize: rem(28),
        //     textAlign: 'left',
        // },
    },

    highlight: {
        color: theme.colors[theme.primaryColor][4],
    },

    description: {
        color: theme.colors.gray[0],
        textAlign: 'center',
        opacity: 0.75,

        // [theme.fn.smallerThan('xs')]: {
        //     fontSize: theme.fontSizes.md,
        //     textAlign: 'left',
        // },
    },

    controls: {
        marginTop: `calc(${theme.spacing.xl} * 1.5)`,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    control: {
        height: rem(42),
        fontSize: theme.fontSizes.md,

        '&:not(:first-of-type)': {
            marginLeft: theme.spacing.md,
        },

        [theme.fn.smallerThan('xs')]: {
            '&:not(:first-of-type)': {
                marginTop: theme.spacing.md,
                marginLeft: 0,
            },
        },
    },

    secondaryControl: {
        color: theme.white,
        backgroundColor: 'rgba(255, 255, 255, .4)',

        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, .45) !important',
        },
    },
}));

function B2BPromoFull() {
    const { classes, cx } = useStyles();

    return (
        <>
            <div className={classes.wrapper}>
                <Overlay color="#000" opacity={0.75} zIndex={1} />

                <div className={classes.inner}>
                    <Title className={classes.title}>
                        Your Travel Partner{' '}
                        <Text
                            component="span"
                            inherit
                            className={classes.highlight}
                        >
                            Solution
                        </Text>
                    </Title>

                    <Container size={640}>
                        <Text size="lg" className={classes.description}>
                            NusaTrip Business is a one-stop travel technology
                            platform for travel agents. Join us Now and get
                            Special Rate.
                        </Text>
                    </Container>

                    <div className={classes.controls}>
                        <Button
                            className={classes.control}
                            variant="white"
                            size="lg"
                        >
                            Login / Register
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default B2BPromoFull;

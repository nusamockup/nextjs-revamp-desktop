import { Box, Button, Container, Text, Title } from '@ns-ui/core';
import { createStyles, rem } from '@ns-ui/styles';
import React from 'react';
import { MdHeight } from 'react-icons/md';

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        paddingTop: rem(30),
        paddingBottom: rem(30),
        background: '#e5f0fd',
        // background: '#fff3dd',
        marginTop: 80,
        marginBottom: -120,
    },
    container: {
        position: 'relative',
        // background: 'url(/img/banner/tour_set.webp) right center no-repeat',
    },
    inner: {
        display: 'flex',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('md')]: {
            flexDirection: 'column',
        },
    },

    image: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    content: {
        // paddingTop: `calc(${theme.spacing.xl} * 2)`,
        // paddingBottom: `calc(${theme.spacing.xl} * 2)`,
        // marginRight: `calc(${theme.spacing.xl} * 3)`,
        // [theme.fn.smallerThan('md')]: {
        //     marginRight: 0,
        // },
    },

    title: {
        // color: theme.white,
        color: '#000',
        // fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        lineHeight: 1.05,
        maxWidth: rem(500),
        fontSize: rem(28),

        // [theme.fn.smallerThan('md')]: {
        //     maxWidth: '100%',
        //     fontSize: rem(34),
        //     lineHeight: 1.15,
        // },
    },

    highlight: {
        color: theme.colors[theme.primaryColor][8],
    },

    description: {
        // color: theme.white,
        color: '#000',
        opacity: 0.75,
        maxWidth: rem(500),

        // [theme.fn.smallerThan('md')]: {
        //     maxWidth: '100%',
        // },
    },

    controls: {
        // marginTop: `calc(${theme.spacing.xl} * 1.5)`,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'flex-start',
        // paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,

        // [theme.fn.smallerThan('xs')]: {
        //     flexDirection: 'column',
        // },
    },

    control: {
        height: rem(42),
        fontSize: theme.fontSizes.md,

        // '&:not(:first-of-type)': {
        //     marginLeft: theme.spacing.md,
        // },

        // [theme.fn.smallerThan('xs')]: {
        //     '&:not(:first-of-type)': {
        //         marginTop: theme.spacing.md,
        //         marginLeft: 0,
        //     },
        // },
    },
}));

const B2BPromoBanner = () => {
    const { classes, cx } = useStyles();

    return (
        <>
            <div className={classes.wrapper}>
                <Container size="xl" className={classes.container}>
                    <div className={classes.inner}>
                        <div className={classes.content}>
                            {/* <Title className={classes.title}>
                                A{' '}
                                <Text
                                    component="span"
                                    inherit
                                    variant="gradient"
                                    gradient={{ from: 'pink', to: 'yellow' }}
                                >
                                    fully featured
                                </Text>{' '}
                                React components library
                            </Title> */}
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

                            <Text className={classes.description} mt={20}>
                                NusaTrip Business is a one-stop travel
                                technology platform for travel agents. Join us
                                Now and get Special Rate.
                            </Text>

                            <div className={classes.controls}>
                                <Button
                                    className={classes.control}
                                    variant="white"
                                    size="sm"
                                >
                                    Login / Register
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Box
                        sx={{
                            position: 'absolute',
                            width: '335px',
                            height: '220px',
                            backgroundImage:
                                'url(/img/banner/working_women_travelers.webp)',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            top: -30,
                            right: 0,
                        }}
                    ></Box>
                </Container>
            </div>
        </>
    );
};

export default B2BPromoBanner;

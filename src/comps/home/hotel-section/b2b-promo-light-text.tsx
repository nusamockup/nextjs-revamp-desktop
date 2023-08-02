import { Button, Group, Text, Title } from '@ns-ui/core';
import { createStyles, rem } from '@ns-ui/styles';

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        paddingTop: rem(30),
        paddingBottom: rem(30),
        background: '#e5f0fd',
        marginTop: 80,
        borderRadius: theme.spacing.sm,
        overflow: 'hidden',
    },
    container: {
        position: 'relative',
    },
    inner: {
        justifyContent: 'space-between',
        marginLeft: 30,
    },

    content: {},

    title: {
        color: '#000',
        fontWeight: 600,
        lineHeight: 1.05,
        fontSize: rem(24),
    },

    highlight: {
        color: theme.colors[theme.primaryColor][8],
    },

    description: {
        color: '#000',
        opacity: 0.75,
        maxWidth: rem(500),
    },

    controls: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'flex-start',
        paddingRight: theme.spacing.md,
    },

    control: {
        height: rem(42),
        fontSize: theme.fontSizes.md,
    },
}));

function B2BPromoLightText() {
    const { classes, cx } = useStyles();

    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.inner}>
                    <div className={classes.content}>
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
                        <Group position="apart">
                            <Text className={classes.description} mt={20}>
                                NusaTrip Business is a one-stop travel
                                technology platform for travel agents.
                                <strong>
                                    {' '}
                                    Join Us Now and Get Special Rate.
                                </strong>
                            </Text>

                            <div className={classes.controls}>
                                <Button
                                    className={classes.control}
                                    variant="white"
                                    size="sm"
                                    mr={20}
                                >
                                    Login / Register
                                </Button>
                            </div>
                        </Group>
                    </div>
                </div>
            </div>
        </>
    );
}

export default B2BPromoLightText;

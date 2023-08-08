import { Container, Divider, Space } from '@ns-ui/core';
import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
    rem,
} from '@ns-ui/core';

const useStyles = createStyles((theme) => ({
    wrapper: {
        marginTop: '-20px',
        marginBottom: '-7.5rem',
        minHeight: rem(700),
        backgroundSize: 'cover',
        backgroundImage:
            'url(/img/banner/6f272cc818e760f6d7de0b62954b4e9d.webp)',
        backgroundPosition: 'center',
    },

    form: {
        borderRight: `${rem(1)} solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[7]
                : theme.colors.gray[3]
        }`,
        minHeight: rem(900),
        maxWidth: rem(450),
        paddingTop: rem(80),
        marginLeft: 'auto',

        // [theme.fn.smallerThan('sm')]: {
        //     maxWidth: '100%',
        // },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 400,
        // fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
}));

const MyBookings = () => {
    const { classes } = useStyles();
    return (
        <>
            <div className={classes.wrapper}>
                <Container size="xl">
                    <Paper className={classes.form} radius={0} p={30}>
                        <Title
                            order={3}
                            className={classes.title}
                            // ta="center"
                            mt="sm"
                            mb={32}
                        >
                            Retrieve Booking
                        </Title>

                        <TextInput
                            label="Booking Code"
                            placeholder="Your NusaTrip booking code"
                            size="sm"
                        />
                        <TextInput
                            label="Contact Email (Used While Booking)"
                            placeholder="hello@nusatroop.com"
                            size="sm"
                            mt="md"
                        />
                        <Button variant="outline" fullWidth mt="xl" size="sm">
                            Retrieve
                        </Button>
                        <Divider
                            my="xl"
                            label="OR Create New Account"
                            labelPosition="center"
                        />
                        <Text size="sm" mb="lg">
                            Already made some bookings, but did not create an
                            account ?{' '}
                            <Anchor<'span'>
                                weight={700}
                                onClick={(event) => event.preventDefault()}
                            >
                                Create one now
                            </Anchor>
                        </Text>
                        <TextInput
                            label="Email Address (Create an account for)"
                            placeholder="hello@nusatroop.com"
                            size="sm"
                        />
                        <PasswordInput
                            label="Password"
                            placeholder="Your password"
                            mt="md"
                            size="sm"
                        />
                        <PasswordInput
                            label="Verify Password"
                            placeholder="Verify Your password"
                            mt="md"
                            size="sm"
                        />
                        <Checkbox label="Keep me logged in" mt="xl" size="xs" />
                        <Button fullWidth mt="xl" size="sm">
                            Activate Account
                        </Button>

                        <Text size="sm" ta="center" mt="md">
                            Please Sign in or Activate an account with
                            nusatrip.com account to access the list of your
                            bookings
                        </Text>
                    </Paper>
                </Container>
            </div>
        </>
    );
};

export default MyBookings;

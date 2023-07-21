import {
    Anchor,
    Box,
    Button,
    Center,
    Container,
    Group,
    Paper,
    Text,
    TextInput,
    Title,
    rem,
} from '@ns-ui/core';
import { IconArrowLeft } from '@tabler/icons-react';
import Head from 'next/head';
import Link from 'next/link';
import { ReactElement, useEffect } from 'react';
import Layout from '../comps/layouts/simple';
import useStyles from '../styles/forgotpassword.styles';

const forgotpassword = () => {
    const { classes } = useStyles();
    useEffect(() => {
        document.body.classList.add('body-bg');
    });
    return (
        <>
            <Head>
                <title>Forgot Password</title>
                <style>
                    {
                        '.body-bg { background-color: #f8f9fa; }'
                        // '.body-bg { background-color: var(--ns-ui-color-blue-0); }'
                    }
                </style>
            </Head>
            <Container size={460} my={60}>
                <Title className={classes.title} align="center">
                    Forgot your password?
                </Title>
                <Text c="dimmed" fz="sm" ta="center">
                    Enter your email to get a reset link
                </Text>

                <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
                    <TextInput
                        label="Your email"
                        placeholder="me@nusatroop.dev"
                        required
                    />
                    <Group
                        position="apart"
                        mt="lg"
                        className={classes.controls}
                    >
                        <Anchor
                            href="/"
                            color="dimmed"
                            size="sm"
                            className={classes.control}
                            component={Link}
                        >
                            <Center inline>
                                <IconArrowLeft size={rem(12)} stroke={1.5} />
                                <Box ml={5}>Back to homepage</Box>
                            </Center>
                        </Anchor>
                        <Button className={classes.control}>
                            Reset password
                        </Button>
                    </Group>
                </Paper>
            </Container>
        </>
    );
};

export default forgotpassword;
forgotpassword.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <Layout>{page}</Layout>
        </>
    );
};

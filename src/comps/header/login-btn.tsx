import {
    Anchor,
    Box,
    Button,
    Checkbox,
    Divider,
    Flex,
    Group,
    Modal,
    PasswordInput,
    Select,
    Stack,
    Text,
    TextInput,
} from '@ns-ui/core';
import { upperFirst, useDisclosure, useToggle } from '@ns-ui/hooks';
import { useForm } from '@ns-ui/form';
import { FacebookButton, GoogleButton } from '../social-buttons/SocialButtons';
import Link from 'next/link';

const LoginBTN = () => {
    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) =>
                val.length <= 6
                    ? 'Password should include at least 6 characters'
                    : null,
        },
    });

    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <Button
                radius="sm"
                compact
                styles={{
                    label: {
                        fontSize: '13px',
                    },
                }}
                onClick={open}
            >
                Login | Register
            </Button>
            <Modal
                opened={opened}
                onClose={close}
                title={upperFirst(type)}
                overlayProps={{
                    color: '#0B2254',
                    opacity: 0.55,
                    blur: 2,
                }}
                centered
            >
                <Box sx={{ padding: '20px' }}>
                    {type === 'login' && (
                        <form onSubmit={form.onSubmit(() => {})}>
                            <Stack>
                                <TextInput
                                    required
                                    label="Email"
                                    placeholder="hello@nusatroop.dev"
                                    value={form.values.email}
                                    onChange={(event) =>
                                        form.setFieldValue(
                                            'email',
                                            event.currentTarget.value
                                        )
                                    }
                                    error={form.errors.email && 'Invalid email'}
                                    radius="sm"
                                />
                                <PasswordInput
                                    required
                                    label="Password"
                                    placeholder="Your password"
                                    value={form.values.password}
                                    onChange={(event) =>
                                        form.setFieldValue(
                                            'password',
                                            event.currentTarget.value
                                        )
                                    }
                                    error={
                                        form.errors.password &&
                                        'Password should include at least 6 characters'
                                    }
                                    radius="sm"
                                />

                                <Group position="apart">
                                    <Checkbox size="xs" label="Remember me" />
                                    <Anchor
                                        href="/forgotpassword"
                                        component={Link}
                                        size="sm"
                                    >
                                        Forgot password?
                                    </Anchor>
                                </Group>

                                <Group position="apart" mt="xl">
                                    <Anchor
                                        component="button"
                                        type="button"
                                        color="dimmed"
                                        onClick={() => toggle()}
                                        size="xs"
                                    >
                                        Don&apos;t have an account? Register
                                    </Anchor>
                                    <Button type="submit" radius="sm">
                                        {upperFirst(type)}
                                    </Button>
                                </Group>
                            </Stack>
                        </form>
                    )}

                    {type === 'register' && (
                        <form onSubmit={form.onSubmit(() => {})}>
                            <Stack>
                                <Flex gap="sm">
                                    <TextInput
                                        required
                                        label="Email"
                                        placeholder="hello@nusatroop.dev"
                                        value={form.values.email}
                                        onChange={(event) =>
                                            form.setFieldValue(
                                                'email',
                                                event.currentTarget.value
                                            )
                                        }
                                        error={
                                            form.errors.email && 'Invalid email'
                                        }
                                        radius="sm"
                                    />
                                    <TextInput
                                        required
                                        label="Verify Email"
                                        placeholder="hello@nusatroop.dev"
                                        value={form.values.email}
                                        onChange={(event) =>
                                            form.setFieldValue(
                                                'email',
                                                event.currentTarget.value
                                            )
                                        }
                                        error={
                                            form.errors.email && 'Invalid email'
                                        }
                                        radius="sm"
                                    />
                                </Flex>
                                <Text fz="xs" c="dimmed">
                                    We&apos;ll never share your email
                                </Text>
                                <Select
                                    required
                                    label="Title"
                                    placeholder="Pick one"
                                    data={[
                                        { value: 'mr', label: 'Mr (Mister)' },
                                        {
                                            value: 'mrs',
                                            label: 'Mrs (Mistress)',
                                        },
                                        { value: 'ms', label: 'Ms (Miss)' },
                                    ]}
                                />
                                <Flex gap="sm">
                                    <TextInput
                                        required
                                        label="First Name"
                                        placeholder="Your first name"
                                        value={form.values.name}
                                        onChange={(event) =>
                                            form.setFieldValue(
                                                'name',
                                                event.currentTarget.value
                                            )
                                        }
                                        radius="sm"
                                    />
                                    <TextInput
                                        required
                                        label="Last Name"
                                        placeholder="Your last name"
                                        value={form.values.name}
                                        onChange={(event) =>
                                            form.setFieldValue(
                                                'name',
                                                event.currentTarget.value
                                            )
                                        }
                                        radius="sm"
                                    />
                                </Flex>

                                <Flex gap="sm">
                                    <PasswordInput
                                        required
                                        label="Password"
                                        placeholder="Your password"
                                        radius="sm"
                                        value={form.values.password}
                                        onChange={(event) =>
                                            form.setFieldValue(
                                                'password',
                                                event.currentTarget.value
                                            )
                                        }
                                        error={
                                            form.errors.password &&
                                            'Password should include at least 6 characters'
                                        }
                                        sx={{ width: '100%' }}
                                    />
                                    <PasswordInput
                                        required
                                        label="Verify Password"
                                        placeholder="Verify Password"
                                        radius="sm"
                                        sx={{ width: '100%' }}
                                    />
                                </Flex>
                                <Checkbox
                                    label="I accept terms and conditions"
                                    onChange={(event) =>
                                        form.setFieldValue(
                                            'terms',
                                            event.currentTarget.checked
                                        )
                                    }
                                    size="xs"
                                />

                                <Group position="apart" mt="xl">
                                    <Anchor
                                        component="button"
                                        type="button"
                                        color="dimmed"
                                        onClick={() => toggle()}
                                        size="xs"
                                    >
                                        Already have an account? Login
                                    </Anchor>
                                    <Button type="submit" radius="sm">
                                        {upperFirst(type)}
                                    </Button>
                                </Group>
                            </Stack>
                        </form>
                    )}

                    <Divider
                        label="Or continue via"
                        labelPosition="center"
                        my="lg"
                    />

                    <Flex
                        gap="md"
                        justify="flex-start"
                        align="center"
                        direction="column"
                        wrap="wrap"
                    >
                        <FacebookButton radius="sm" fullWidth>
                            {upperFirst(type)} with Facebook
                        </FacebookButton>
                        <GoogleButton radius="sm" fullWidth>
                            Continue with Google
                        </GoogleButton>
                    </Flex>
                </Box>
            </Modal>
        </>
    );
};

export default LoginBTN;

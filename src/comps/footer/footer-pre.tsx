import { Avatar, Paper, SimpleGrid, Text } from '@ns-ui/core';
import { IconLifebuoy, IconWallet } from '@tabler/icons-react';
import Policy from '/public/img/icons/policy.svg';

const FooterPre = () => {
    return (
        <>
            <SimpleGrid py={64} cols={3} spacing="32px" c="#94A3B8">
                <Paper
                    component="a"
                    href="/"
                    radius="md"
                    // withBorder
                    p="lg"
                    sx={(theme) => ({
                        backgroundColor:
                            theme.colorScheme === 'dark'
                                ? theme.colors.dark[8]
                                : theme.white,
                    })}
                >
                    <Avatar size={120} radius={120} mx="auto">
                        <IconLifebuoy size={94} stroke={1} color="#94A3B8" />
                    </Avatar>
                    <Text ta="center" fz="lg" weight={500} mt="md">
                        Need Help? Contact us
                    </Text>
                    <Text ta="center" c="dimmed" fz="sm">
                        Cum appareat maiestatis interpretaris et, et sit.
                    </Text>
                </Paper>
                <Paper
                    component="a"
                    href="/"
                    radius="md"
                    // withBorder
                    p="lg"
                    sx={(theme) => ({
                        backgroundColor:
                            theme.colorScheme === 'dark'
                                ? theme.colors.dark[8]
                                : theme.white,
                    })}
                >
                    <Avatar size={120} radius={120} mx="auto">
                        <IconWallet size={94} stroke={1} color="#94A3B8" />
                    </Avatar>
                    <Text ta="center" fz="lg" weight={500} mt="md">
                        Payments
                    </Text>
                    <Text ta="center" c="dimmed" fz="sm">
                        Qui ea nemore eruditi, magna prima possit.
                    </Text>
                </Paper>
                <Paper
                    component="a"
                    href="/"
                    radius="md"
                    // withBorder
                    p="lg"
                    sx={(theme) => ({
                        backgroundColor:
                            theme.colorScheme === 'dark'
                                ? theme.colors.dark[8]
                                : theme.white,
                    })}
                >
                    <Avatar
                        // src="/img/icons/policy.svg"
                        size={120}
                        radius={120}
                        mx="auto"
                    >
                        <Policy color="#94A3B8" size={94} />
                        {/* <Image
                            src="/img/icons/policy.svg"
                            height={70.5}
                            width={69}
                            alt=""
                            color="#94A3B8"
                        /> */}
                    </Avatar>
                    <Text ta="center" fz="lg" weight={500} mt="md">
                        Cancelation Policy
                    </Text>
                    <Text ta="center" c="dimmed" fz="sm">
                        Qui ea nemore eruditi, magna prima possit.
                    </Text>
                </Paper>
                {/* <div>FooterPre</div> */}
            </SimpleGrid>
        </>
    );
};

export default FooterPre;

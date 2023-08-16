import { Avatar, Paper, SimpleGrid, Text } from '@ns-ui/core';
import { IconBed, IconNotes, IconPlane, IconWallet } from '@tabler/icons-react';
import React from 'react';

const SupportBanner = () => {
    return (
        <>
            <SimpleGrid py={32} cols={4} spacing="32px">
                <Paper
                    component="a"
                    href="/support/book-hotel"
                    radius="md"
                    // withBorder
                    shadow="lg"
                    p="lg"
                    sx={(theme) => ({
                        backgroundColor:
                            theme.colorScheme === 'dark'
                                ? theme.colors.dark[8]
                                : theme.white,
                    })}
                >
                    <Avatar
                        color="#0a73b7"
                        // color="#016FD2"
                        size={80}
                        radius={80}
                        mx="auto"
                    >
                        <IconBed
                            size={42}
                            stroke={2}
                            // color="#94A3B8"
                        />
                    </Avatar>
                    <Text ta="center" fz="lg" weight={500} mt="md">
                        Book Hotels
                    </Text>
                    <Text ta="center" c="dimmed" fz="sm">
                        How to book a Hotel with us
                    </Text>
                </Paper>
                <Paper
                    component="a"
                    href="/support/book-flight"
                    radius="md"
                    // withBorder
                    shadow="lg"
                    p="lg"
                    sx={(theme) => ({
                        backgroundColor:
                            theme.colorScheme === 'dark'
                                ? theme.colors.dark[8]
                                : theme.white,
                    })}
                >
                    <Avatar color="#0a73b7" size={80} radius={80} mx="auto">
                        <IconPlane
                            size={42}
                            stroke={2}
                            // color="#94A3B8"
                        />
                    </Avatar>
                    <Text ta="center" fz="lg" weight={500} mt="md">
                        Book Flights
                    </Text>
                    <Text ta="center" c="dimmed" fz="sm">
                        How to book a Flight with us
                    </Text>
                </Paper>
                <Paper
                    component="a"
                    href="/support/payments"
                    radius="md"
                    // withBorder
                    shadow="lg"
                    p="lg"
                    sx={(theme) => ({
                        backgroundColor:
                            theme.colorScheme === 'dark'
                                ? theme.colors.dark[8]
                                : theme.white,
                    })}
                >
                    <Avatar color="#0a73b7" size={80} radius={80} mx="auto">
                        <IconWallet size={42} stroke={2} />
                    </Avatar>
                    <Text ta="center" fz="lg" weight={500} mt="md">
                        Payment
                    </Text>
                    <Text ta="center" c="dimmed" fz="sm">
                        Learn on how to make a payment?
                    </Text>
                </Paper>
                <Paper
                    component="a"
                    href="/support/manage-bookings"
                    radius="md"
                    // withBorder
                    shadow="lg"
                    p="lg"
                    sx={(theme) => ({
                        backgroundColor:
                            theme.colorScheme === 'dark'
                                ? theme.colors.dark[8]
                                : theme.white,
                    })}
                >
                    <Avatar color="#0a73b7" size={80} radius={80} mx="auto">
                        <IconNotes size={42} stroke={2} />
                    </Avatar>
                    <Text ta="center" fz="lg" weight={500} mt="md">
                        Bookings
                    </Text>
                    <Text ta="center" c="dimmed" fz="sm">
                        Manage your bookings
                    </Text>
                </Paper>
            </SimpleGrid>
        </>
    );
};

export default SupportBanner;

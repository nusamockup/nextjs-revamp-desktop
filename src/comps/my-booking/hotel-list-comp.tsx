import {
    Avatar,
    Badge,
    Divider,
    Flex,
    Group,
    Paper,
    Stack,
    Text,
    Title,
} from '@ns-ui/core';
import Link from 'next/link';
import React from 'react';
import DateComp from './date-comp';

type MybookingHotelListProps = {
    hotelimg: string;
    hotelname: string;
    bookingcode: string;
    checkindate: string;
    checkoutdate: string;
    detailurl: string;
    bookingstatus?: string;
};

export const MybookingHotelList = (props: MybookingHotelListProps) => {
    let statuscolor = '#dee2e6';
    if (props.bookingstatus === 'success') {
        statuscolor = '#0a73b7';
    } else if (
        props.bookingstatus === 'failed' ||
        props.bookingstatus === 'cancelled'
    ) {
        statuscolor = '#e03131';
    } else {
        statuscolor = '#dee2e6';
    }

    return (
        <>
            <Paper
                withBorder
                component={Link}
                href={props.detailurl}
                // opacity={1}
                p="md"
                sx={(theme) => ({
                    flex: 1,
                    // border: `1px solid ${statuscolor} !important`,
                    [theme.fn.largerThan('lg')]: { marginRight: '20px' },
                    [theme.fn.smallerThan('lg')]: { marginRight: '0px' },
                    opacity:
                        props.bookingstatus === 'failed' ||
                        props.bookingstatus === 'cancelled'
                            ? 0.5
                            : 1,
                    '&:hover': {
                        opacity: 1,
                        boxShadow:
                            '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem',
                        transition:
                            'box-shadow 100ms ease,transform 100ms ease;',
                        transform: 'scale(1.01)',
                    },
                })}
                radius="sm"
            >
                <Group spacing="md">
                    <Avatar
                        size={50}
                        radius={50}
                        src={`/img/hotel/${props.hotelimg}`}
                    />
                    <Stack spacing="0px" sx={{ flex: 1 }}>
                        <Title order={4} fw={400}>
                            {props.hotelname}
                        </Title>
                        <Flex gap={8}>
                            <Text size="sm" c="dimmed">
                                NusaTrip Booking Code:{' '}
                                <strong>{props.bookingcode}</strong>
                            </Text>
                            {props.bookingstatus ? (
                                props.bookingstatus === 'success' ? (
                                    <Badge size={'sm'} mt={2} lts={1}>
                                        {props.bookingstatus}
                                    </Badge>
                                ) : (
                                    <Badge
                                        size={'sm'}
                                        mt={2}
                                        lts={1}
                                        color="red"
                                    >
                                        {props.bookingstatus}
                                    </Badge>
                                )
                            ) : (
                                ''
                            )}
                        </Flex>
                    </Stack>
                    <Flex gap="md">
                        <DateComp
                            forlabel="check in"
                            date={Number(props.checkindate.slice(5, 7))}
                            day={props.checkindate.slice(0, 3)}
                            month={props.checkindate.slice(8, 11)}
                            year={Number(props.checkindate.slice(14, 16))}
                        />
                        <Divider h={54} orientation="vertical" />
                        <DateComp
                            forlabel="check out"
                            date={Number(props.checkoutdate.slice(5, 7))}
                            day={props.checkoutdate.slice(0, 3)}
                            month={props.checkoutdate.slice(8, 11)}
                            year={Number(props.checkoutdate.slice(14, 16))}
                        />
                    </Flex>
                </Group>
            </Paper>
        </>
    );
};

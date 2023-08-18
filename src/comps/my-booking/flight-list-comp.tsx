import {
    Avatar,
    Badge,
    Divider,
    Flex,
    Group,
    Paper,
    Stack,
    Text,
    ThemeIcon,
    Title,
} from '@ns-ui/core';
import { IconArrowNarrowRight, IconArrowsLeftRight } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';
import DateComp from './date-comp';
import { TimeComp } from './time-comp';

type MybookingFlightListProps = {
    airlinecode: string;
    departure: string;
    arrival: string;
    departingdate: string;
    departingtime: string;
    bookingcode: string;
    detailurl: string;
    status?: string;
    bookingstatus?: string;
    triptype?: 'oneway' | 'roundtrip';
    roundtriptype?: 'departure' | 'returning';
};

export const MybookingFlightList = (props: MybookingFlightListProps) => {
    // props: {
    //     triptype: 'oneway';
    // }
    const { triptype = 'oneway' } = props;

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
                component={Link}
                href={props.detailurl}
                p="md"
                pos={'relative'}
                // mr={40}
                sx={(theme) => ({
                    flex: 1,
                    zIndex: 1,
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
                withBorder
            >
                <Group spacing="md">
                    <Avatar
                        size={60}
                        radius={60}
                        src={`https://sta.nusatrip.net/static/img/front/V2/icon-flight/${props.airlinecode}.png`}
                    />
                    <Stack spacing="0px" sx={{ flex: 1 }}>
                        <Title order={4} fw={400}>
                            <Flex gap="md">
                                <Flex gap="sm" wrap="nowrap">
                                    {props.departure}
                                    {triptype === 'oneway' ? (
                                        <IconArrowNarrowRight />
                                    ) : (
                                        <ThemeIcon
                                            variant="default"
                                            size={18}
                                            sx={{
                                                background: 'none',
                                                marginTop: '4px',
                                                border: 'none',
                                            }}
                                        >
                                            <IconArrowsLeftRight />
                                        </ThemeIcon>
                                    )}
                                    {props.arrival}
                                </Flex>
                                {props.roundtriptype ? (
                                    <Badge
                                        color="gray"
                                        variant="outline"
                                        size="sm"
                                        mt={4}
                                        // ml={16}
                                        sx={(theme) => ({
                                            color: '#5a5b5c',
                                            borderColor: '#5a5b5c',
                                            letterSpacing: '1px',
                                            [theme.fn.smallerThan('lg')]: {
                                                position: 'absolute',
                                                left: '90px',
                                                top: '-12px',
                                                backgroundColor:
                                                    '#FFF !important',
                                                zIndex: 2,
                                            },
                                        })}
                                    >
                                        {props.roundtriptype}
                                    </Badge>
                                ) : (
                                    ''
                                )}
                            </Flex>
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
                            forlabel="departing"
                            // date={31}
                            date={Number(props.departingdate.slice(5, 7))}
                            // day="Tue"
                            day={props.departingdate.slice(0, 3)}
                            // month="Jun"
                            month={props.departingdate.slice(8, 11)}
                            // year={23}
                            year={Number(props.departingdate.slice(14, 16))}
                        />
                        <Divider h={54} orientation="vertical" />
                        <TimeComp time={props.departingtime} />
                    </Flex>
                </Group>
            </Paper>
        </>
    );
};

import { Stack, Text, Title } from '@ns-ui/core';
import React from 'react';

type BookingDateCompProps = {
    date: string;
};
// const date = '13 Jun 2023';

export const BookingDateComp = ({ date }: BookingDateCompProps) => {
    const bookdateDateMonth = date.slice(0, 6);
    const bookdateYear = date.slice(7, 11);
    return (
        <>
            <Stack align="center" spacing="0px" miw={55}>
                <Title size="md" order={4} fw={400}>
                    {/* 13 Jun */}
                    {bookdateDateMonth}
                </Title>
                <Text size="sm" c="dimmed">
                    {/* 2023 */}
                    {bookdateYear}
                </Text>
            </Stack>
        </>
    );
};

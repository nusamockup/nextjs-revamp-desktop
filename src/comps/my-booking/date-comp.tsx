import { Flex, Stack, Text } from '@ns-ui/core';

export type DateCompProps = {
    forlabel: string;
    date: number;
    year: number;
    month: string;
    day: string;
};

const DateComp = (props: DateCompProps) => {
    return (
        <>
            <Stack miw={82} spacing={0}>
                <Text tt="uppercase" size="xs" c="dimmed" lts={0.5} mb={2}>
                    {/* check in */}
                    {props.forlabel}
                </Text>
                <Flex gap={6}>
                    <Text
                        ta={'right'}
                        size={32}
                        fw={400}
                        lh="34px"
                        opacity={0.6}
                        miw={36}
                    >
                        {/* 31 */}
                        {props.date}
                    </Text>
                    <Stack spacing={-5}>
                        <Text tt="uppercase" size={12} c="dimmed">
                            {/* Tue */}
                            {props.day}
                        </Text>
                        <Text tt="uppercase" size={12} c="dimmed" mt={-3}>
                            {/* May 2023 */}
                            {props.month} {props.year}
                        </Text>
                    </Stack>
                </Flex>
            </Stack>
        </>
    );
};

export default DateComp;

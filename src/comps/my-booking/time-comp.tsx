import { Stack, Text } from '@ns-ui/core';

export type TimeCompProps = {
    time: string;
};

export const TimeComp = (props: TimeCompProps) => {
    return (
        <>
            <Stack miw={82} spacing={0}>
                <Text tt="uppercase" size="xs" c="dimmed" lts={0.5} mb={2}>
                    time
                    {/* {props.forlabel} */}
                </Text>
                <Text size={32} fw={400} lh="34px" opacity={0.6}>
                    {/* 17:10 */}
                    {props.time}
                </Text>
            </Stack>
        </>
    );
};

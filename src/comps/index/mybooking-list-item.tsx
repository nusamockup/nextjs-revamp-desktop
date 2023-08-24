import { Anchor, List, Paper, Text } from '@ns-ui/core';

const MybookingListItem = () => {
    return (
        <Paper
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
            <Text fz="lg" weight={500}>
                My Booking
            </Text>
            <List size="sm" mt={16}>
                <List.Item>
                    <Anchor c="dark" href="/my-booking" target="_blank">
                        Index
                    </Anchor>
                </List.Item>
                <List.Item>
                    <Anchor c="dark" href="/my-booking/trips" target="_blank">
                        My Trips
                    </Anchor>
                </List.Item>
                <List.Item>
                    <Anchor c="dark" href="/my-booking/profile" target="_blank">
                        Profile
                    </Anchor>
                </List.Item>
            </List>
        </Paper>
    );
};

export default MybookingListItem;

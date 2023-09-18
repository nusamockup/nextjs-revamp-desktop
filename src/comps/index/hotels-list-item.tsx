import { Anchor, List, Paper, Text } from '@ns-ui/core';

const HotelsListItem = () => {
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
                Hotels
            </Text>
            <List size="sm" mt={16}>
                <List.Item>
                    <Anchor c="dark" href="/hotels" target="_blank">
                        Index
                    </Anchor>
                </List.Item>
                <List.Item>
                    <Anchor c="dark" href="/hotels/details" target="_blank">
                        Details
                    </Anchor>
                </List.Item>
                {/* <List.Item>
                    <Anchor c="dark" href="/forgotpassword" target="_blank">
                        Forgot Password
                    </Anchor>
                </List.Item> */}
            </List>
        </Paper>
    );
};

export default HotelsListItem;

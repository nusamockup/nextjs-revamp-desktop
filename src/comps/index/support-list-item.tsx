import { Anchor, List, Paper, Text } from '@ns-ui/core';

const SupportListItem = () => {
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
                Customer Care
            </Text>
            <List size="sm" mt={16}>
                <List.Item>
                    <Anchor c="dark" href="/support" target="_blank">
                        Index
                    </Anchor>
                </List.Item>
                <List.Item>
                    <Anchor c="dark" href="/support/faq" target="_blank">
                        FAQ
                    </Anchor>
                </List.Item>
                <List.Item>
                    <Anchor
                        c="dark"
                        href="/support/how-to-book"
                        target="_blank"
                    >
                        How to Book
                    </Anchor>
                </List.Item>
                <List.Item>
                    <Anchor
                        c="dark"
                        href="/support/book-flight"
                        target="_blank"
                    >
                        Book Flight
                    </Anchor>
                </List.Item>
                <List.Item>
                    <Anchor c="dark" href="/support/book-hotel" target="_blank">
                        Book Hotel
                    </Anchor>
                </List.Item>
                <List.Item>
                    <Anchor
                        c="dark"
                        href="/support/manage-bookings"
                        target="_blank"
                    >
                        Manage My Bookings
                    </Anchor>
                </List.Item>
            </List>
        </Paper>
    );
};

export default SupportListItem;

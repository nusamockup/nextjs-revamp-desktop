import { Anchor, Indicator, List, Paper, Text } from '@ns-ui/core';

const PagesListItem = () => {
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
                Pages
            </Text>
            <List size="sm" mt={16}>
                <List.Item>
                    <Anchor c="dark" href="/home" target="_blank">
                        Home
                    </Anchor>
                </List.Item>
                <List.Item>
                    <Anchor c="dark" href="/forgotpassword" target="_blank">
                        Forgot Password
                    </Anchor>
                </List.Item>
                <List.Item>
                    <Anchor c="dark" href="/promos" target="_blank">
                        <Indicator
                            inline
                            label={'new'}
                            color={'red'}
                            position="middle-center"
                            styles={{
                                indicator: {
                                    marginLeft: '45px',
                                    padding: '8px 6px',
                                },
                            }}
                        >
                            Promos
                        </Indicator>
                    </Anchor>
                </List.Item>
                <List.Item>
                    <Anchor c="dark" href="/promo/details" target="_blank">
                        <Indicator
                            inline
                            label={'new'}
                            color={'red'}
                            position="middle-center"
                            styles={{
                                indicator: {
                                    marginLeft: '65px',
                                    padding: '8px 6px',
                                },
                            }}
                        >
                            Promo Details
                        </Indicator>
                    </Anchor>
                </List.Item>
            </List>
        </Paper>
    );
};

export default PagesListItem;

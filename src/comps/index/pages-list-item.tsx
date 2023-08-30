import { Anchor, Indicator, List, Paper, Text } from '@ns-ui/core';
import { useState } from 'react';
import { useBetween } from 'use-between';
import UseLoginState from '../shareable/use-loginstate';

const PagesListItem = () => {
    const { isLoggedIn, setIsLoggedIn } = useBetween(UseLoginState);
    const handlelogin = () => {
        setIsLoggedIn(true);
    };
    const handlelogout = () => {
        setIsLoggedIn(false);
    };
    // setIsLoggedIn(true);

    console.log(isLoggedIn);
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
                        Promos
                    </Anchor>
                </List.Item>
                <List.Item>
                    <Anchor c="dark" href="/promo/details" target="_blank">
                        Promo Details
                    </Anchor>
                </List.Item>
                <List.Item>
                    <Anchor c="dark" onClick={handlelogin}>
                        <Indicator
                            inline
                            label={'new'}
                            color={'red'}
                            position="middle-center"
                            styles={{
                                indicator: {
                                    marginLeft: '75px',
                                    padding: '8px 6px',
                                },
                            }}
                        >
                            Show User Login
                        </Indicator>
                    </Anchor>
                </List.Item>
                <List.Item>
                    <Anchor c="dark" onClick={handlelogout}>
                        <Indicator
                            inline
                            label={'new'}
                            color={'red'}
                            position="middle-center"
                            styles={{
                                indicator: {
                                    marginLeft: '85px',
                                    padding: '8px 6px',
                                },
                            }}
                        >
                            Show Login Button
                        </Indicator>
                    </Anchor>
                </List.Item>
            </List>
        </Paper>
    );
};

export default PagesListItem;

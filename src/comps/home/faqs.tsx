import {
    Accordion,
    Container,
    Divider,
    Flex,
    Group,
    SimpleGrid,
    Text,
    Title,
    createStyles,
    rem,
    Space,
} from '@ns-ui/core';
import React from 'react';
import SectionTitle from '../section-title/section-title';

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 2)`,
        minHeight: 650,
    },

    item: {
        borderRadius: theme.radius.sm,
        marginBottom: theme.spacing.xs,
        marginTop: '0 !important',
        transition: 'box-shadow 100ms ease,transform 100ms ease',
        '&:hover, &[data-active]': {
            boxShadow:
                '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem',
            transition: 'box-shadow 100ms ease,transform 100ms ease;',
            transform: 'scale(1.01)',
        },
        // marginTop: theme.spacing.xs,
        border: `${rem(1)} solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
        }`,
    },
}));
const placeholder =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

const Faqs = () => {
    const { classes } = useStyles();
    return (
        <>
            <Space h="64px" />
            <Container size="lg" py="32px">
                <SectionTitle
                    title="Frequently Asked Question (FAQ)"
                    align="center"
                />
                <SimpleGrid
                    cols={2}
                    mt={50}
                    // breakpoints={[{ maxWidth: 'md', cols: 1 }]}
                >
                    <div>
                        <Title
                            style={{
                                color: '#333',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                // fontWeight: 400,
                                lineHeight: '28.8px',
                                marginBottom: '30px',
                            }}
                        >
                            Flight
                        </Title>
                        <Accordion variant="separated">
                            <Accordion.Item
                                className={classes.item}
                                value="reset-password"
                            >
                                <Accordion.Control>
                                    How can I reset my password?
                                </Accordion.Control>
                                <Accordion.Panel>{placeholder}</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item
                                className={classes.item}
                                value="another-account"
                            >
                                <Accordion.Control>
                                    Can I create more that one account?
                                </Accordion.Control>
                                <Accordion.Panel>{placeholder}</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item
                                className={classes.item}
                                value="newsletter"
                            >
                                <Accordion.Control>
                                    How can I subscribe to monthly newsletter?
                                </Accordion.Control>
                                <Accordion.Panel>{placeholder}</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item
                                className={classes.item}
                                value="credit-card"
                            >
                                <Accordion.Control>
                                    Do you store credit card information
                                    securely?
                                </Accordion.Control>
                                <Accordion.Panel>{placeholder}</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item
                                className={classes.item}
                                value="payment"
                            >
                                <Accordion.Control>
                                    What payment systems to you work with?
                                </Accordion.Control>
                                <Accordion.Panel>{placeholder}</Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div>
                        <Title
                            style={{
                                color: '#333',
                                fontSize: '18px',
                                fontStyle: 'normal',
                                // fontWeight: 400,
                                lineHeight: '28.8px',
                                marginBottom: '30px',
                            }}
                        >
                            Hotel
                        </Title>
                        <Accordion variant="separated">
                            <Accordion.Item
                                className={classes.item}
                                value="reset-password"
                            >
                                <Accordion.Control>
                                    How can I reset my password?
                                </Accordion.Control>
                                <Accordion.Panel>{placeholder}</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item
                                className={classes.item}
                                value="another-account"
                            >
                                <Accordion.Control>
                                    Can I create more that one account?
                                </Accordion.Control>
                                <Accordion.Panel>{placeholder}</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item
                                className={classes.item}
                                value="newsletter"
                            >
                                <Accordion.Control>
                                    How can I subscribe to monthly newsletter?
                                </Accordion.Control>
                                <Accordion.Panel>{placeholder}</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item
                                className={classes.item}
                                value="credit-card"
                            >
                                <Accordion.Control>
                                    Do you store credit card information
                                    securely?
                                </Accordion.Control>
                                <Accordion.Panel>{placeholder}</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item
                                className={classes.item}
                                value="payment"
                            >
                                <Accordion.Control>
                                    What payment systems to you work with?
                                </Accordion.Control>
                                <Accordion.Panel>{placeholder}</Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </SimpleGrid>
                <Divider my="lg" />
                <Group position="apart" spacing="sm">
                    <Text size="sm" c="dimmed">
                        Find Topic: Payment | Flight Cancelation & Reschedule |
                        Reschedule Request | Cancel & Refund Request | Travel
                        Insurance
                    </Text>
                    <Text
                        size="sm"
                        c="dimmed"
                        component="a"
                        href="#"
                        align="end"
                        weight={600}
                    >
                        View more
                    </Text>
                </Group>
            </Container>
        </>
    );
};

export default Faqs;

import { Accordion, createStyles, rem } from '@ns-ui/core';

const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 2)`,
        minHeight: 650,
    },

    item: {
        background: 'transparent',
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
        fontSize: '14px',
    },
}));
const placeholder =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

const FaqContent = () => {
    const { classes } = useStyles();
    return (
        <>
            <Accordion variant="separated" defaultValue="create-account">
                <Accordion.Item className={classes.item} value="create-account">
                    <Accordion.Control>
                        How do I create an account??
                    </Accordion.Control>
                    <Accordion.Panel c="dimmed" ml={5}>
                        {placeholder}
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item
                    className={classes.item}
                    value="change-password"
                >
                    <Accordion.Control>
                        How to change my password account?
                    </Accordion.Control>
                    <Accordion.Panel c="dimmed" ml={5}>
                        {placeholder}
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="is-it-safe">
                    <Accordion.Control>
                        Is credit card transaction safe with nusatrip?
                    </Accordion.Control>
                    <Accordion.Panel c="dimmed" ml={5}>
                        {placeholder}
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item
                    className={classes.item}
                    value="reservation-status"
                >
                    <Accordion.Control>
                        How do I check my reservation status?
                    </Accordion.Control>
                    <Accordion.Panel c="dimmed" ml={5}>
                        {placeholder}
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="remove-account">
                    <Accordion.Control>
                        How do I request an account removal?
                    </Accordion.Control>
                    <Accordion.Panel c="dimmed" ml={5}>
                        {placeholder}
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="reset-password">
                    <Accordion.Control>
                        How can I reset my password?
                    </Accordion.Control>
                    <Accordion.Panel c="dimmed" ml={5}>
                        {placeholder}
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item
                    className={classes.item}
                    value="another-account"
                >
                    <Accordion.Control>
                        Can I create more that one account?
                    </Accordion.Control>
                    <Accordion.Panel c="dimmed" ml={5}>
                        {placeholder}
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="newsletter">
                    <Accordion.Control>
                        How can I subscribe to monthly newsletter?
                    </Accordion.Control>
                    <Accordion.Panel c="dimmed" ml={5}>
                        {placeholder}
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="credit-card">
                    <Accordion.Control>
                        Do you store credit card information securely?
                    </Accordion.Control>
                    <Accordion.Panel c="dimmed" ml={5}>
                        {placeholder}
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="payment">
                    <Accordion.Control>
                        What payment systems to you work with?
                    </Accordion.Control>
                    <Accordion.Panel c="dimmed" ml={5}>
                        {placeholder}
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default FaqContent;

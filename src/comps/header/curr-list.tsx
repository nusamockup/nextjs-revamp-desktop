import {
    Box,
    Center,
    Flex,
    Group,
    HoverCard,
    SimpleGrid,
    Text,
    UnstyledButton,
    createStyles,
    rem,
} from '@ns-ui/core';
import { IconChevronDown } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: theme.spacing.sm,
        paddingRight: theme.spacing.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 600,
        fontSize: theme.fontSizes.sm,

        [theme.fn.smallerThan('sm')]: {
            height: rem(42),
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },

        ...theme.fn.hover({
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        }),
    },

    subLink: {
        width: '100%',
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        borderRadius: theme.radius.md,

        ...theme.fn.hover({
            backgroundColor:
                theme.colorScheme === 'dark'
                    ? theme.colors.dark[7]
                    : theme.colors.gray[0],
        }),

        '&:active': theme.activeStyles,
    },

    dropdownFooter: {
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[7]
                : theme.colors.gray[0],
        margin: `calc(${theme.spacing.md} * -1)`,
        marginTop: theme.spacing.sm,
        padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
        paddingBottom: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[1]
        }`,
    },

    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
}));

const mockdata = [
    {
        title: 'AED',
        description: 'United Arab Emirates dirham',
    },
    {
        title: 'HKD',
        description: 'Hong Kong dollar',
    },
    {
        title: 'PKR',
        description: 'Pakistani rupee',
    },
    {
        title: 'AUD',
        description: 'Australian dollar',
    },
    {
        title: 'IDR',
        description: 'Indonesian rupiah',
    },
    {
        title: 'RUB',
        description: 'Russian rouble',
    },
    {
        title: 'BDT',
        description: 'Bangladeshi taka',
    },
    {
        title: 'INR',
        description: 'Indian rupee',
    },
    {
        title: 'SAR',
        description: 'Saudi riyal',
    },
    {
        title: 'CAD',
        description: 'Canadian dollar',
    },
    {
        title: 'JPY',
        description: 'Japanese yen',
    },
    {
        title: 'SGD',
        description: 'Singapore dollar',
    },
    {
        title: 'CHF',
        description: 'Swiss franc',
    },
    {
        title: 'KRW',
        description: 'South Korean won',
    },
    {
        title: 'THB',
        description: 'Thai baht',
    },
    {
        title: 'CNY',
        description: 'Chinese yuan',
    },
    {
        title: 'MYR',
        description: 'Malaysian ringgit',
    },
    {
        title: 'TWD',
        description: 'New Taiwan dollar',
    },
    {
        title: 'EUR',
        description: 'Euro',
    },
    {
        title: 'NZD',
        description: 'New Zealand dollar',
    },
    {
        title: 'USD',
        description: 'United States dollar',
    },
    {
        title: 'GBP',
        description: 'Pound sterling',
    },
    {
        title: 'PHP',
        description: 'Philippine peso',
    },
    {
        title: 'VND',
        description: 'Vietnamese dong',
    },
];

const CurrencyList = () => {
    const { classes } = useStyles();

    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group noWrap align="flex-start">
                <Flex
                    justify="flex-start"
                    align="flex-start"
                    direction="column"
                >
                    <Text size="sm" fw={600}>
                        {item.title}
                    </Text>
                    <Text size="xs" color="dimmed">
                        {item.description}
                    </Text>
                </Flex>
            </Group>
        </UnstyledButton>
    ));
    return (
        <>
            <HoverCard
                width={1200}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
            >
                <HoverCard.Target>
                    <a href="#" className={classes.link}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                Features
                            </Box>
                            <IconChevronDown
                                size={16}
                                color=""
                                // color={theme.fn.primaryColor()}
                            />
                        </Center>
                    </a>
                </HoverCard.Target>

                <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                    <SimpleGrid cols={8} spacing={0}>
                        {links}
                    </SimpleGrid>
                </HoverCard.Dropdown>
            </HoverCard>
        </>
    );
};

export default CurrencyList;

import { createStyles, rem } from '@ns-ui/core';

export default createStyles((theme) => ({
    title: {
        fontSize: rem(34),
        fontWeight: 900,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(24),
        },
        textAlign: 'center',
    },

    description: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',

        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

    card: {
        border: `${rem(1)} solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[1]
        }`,
        textAlign: 'center',
    },

    cardTitle: {
        // '&::after': {
        //     content: '""',
        //     display: 'block',
        //     backgroundColor: theme.fn.primaryColor(),
        //     width: rem(45),
        //     height: rem(2),
        //     marginTop: theme.spacing.sm,
        //     marginLeft: 'auto',
        //     marginRight: 'auto',
        // },
        textAlign: 'center',
    },
    cardIcon: {
        margin: '0 auto',
        display: 'block',
    },
}));

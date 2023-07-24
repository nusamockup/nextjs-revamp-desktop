import { createStyles, rem } from '@ns-ui/core';

export default createStyles((theme) => ({
    footer: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '22.4px',
        backgroundColor: '#0B2254',
        marginTop: rem(120),
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 2)`,
        // backgroundColor:
        //     theme.colorScheme === 'dark'
        //         ? theme.colors.dark[6]
        //         : theme.colors.gray[0],
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
        }`,
        '& *': {
            color: 'rgba(255, 255, 255, .6)',
        },
    },

    logo: {
        maxWidth: '320px',
        marginRight: '120px',

        // [theme.fn.smallerThan('sm')]: {
        //     display: 'flex',
        //     flexDirection: 'column',
        //     alignItems: 'center',
        //     margin: 'auto',
        //     marginRight: '0px',
        // },
    },

    description: {
        marginTop: rem(5),

        // [theme.fn.smallerThan('sm')]: {
        //     marginTop: theme.spacing.xs,
        //     textAlign: 'center',
        // },
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',

        // [theme.fn.smallerThan('sm')]: {
        //     flexDirection: 'column',
        //     alignItems: 'center',
        // },
    },

    groupWrapper: {
        display: 'flex',
        flexWrap: 'nowrap',
        minWidth: '196px',

        // [theme.fn.smallerThan('sm')]: {
        //     display: 'none',
        // },
    },

    wrapper: {
        width: rem(160),
    },

    link: {
        display: 'block',
        // color:
        //     theme.colorScheme === 'dark'
        //         ? theme.colors.dark[1]
        //         : theme.colors.gray[6],
        fontSize: theme.fontSizes.sm,
        paddingTop: rem(3),
        paddingBottom: rem(3),

        '&:hover': {
            textDecoration: 'underline',
        },
    },

    title: {
        fontSize: theme.fontSizes.md,
        fontWeight: 600,
        // fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: `calc(${theme.spacing.xs} / 2)`,
        // color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        color: '#FFF',
    },

    middleFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    afterFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.sm,
        paddingTop: theme.spacing.md,
        paddingBottom: theme.spacing.xl,
        borderTop: '1px solid #1d4164',
        // borderTop: `${rem(1)} solid ${
        //     theme.colorScheme === 'dark'
        //         ? theme.colors.dark[4]
        //         : theme.colors.gray[2]
        // }`,

        // [theme.fn.smallerThan('sm')]: {
        //     flexDirection: 'column',
        // },
    },

    social: {
        // [theme.fn.smallerThan('sm')]: {
        //     marginTop: theme.spacing.xs,
        // },
    },
}));

import { createStyles, rem } from '@ns-ui/core';

export default createStyles((theme) => ({
    title: {
        fontSize: rem(26),
        fontWeight: 600,
    },

    controls: {
        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column-reverse',
        },
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            width: '100%',
            textAlign: 'center',
        },
    },
}));

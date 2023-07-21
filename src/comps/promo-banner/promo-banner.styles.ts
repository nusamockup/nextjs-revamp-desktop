import { createStyles, getStylesRef, rem } from '@ns-ui/core';

export default createStyles((theme) => ({
    indicators: {
        bottom: '-2rem',
        button: {
            backgroundColor: theme.fn.lighten('#0A73B7', 0.7),
            transition: 'width 250ms ease',
            width: rem(6),
            height: rem(6),

            '&[data-active]': {
                // backgroundColor: theme.fn.lighten('#0A73B7', 0.7),
                backgroundColor: '#0A73B7',
                width: rem(16),
            },
        },
    },

    control: {
        background: 'none',
        border: 'none',
        color: '#0A73B7',
        marginLeft: '-60px',
        marginRight: '-60px',
        boxShadow: 'none',
    },

    // carouselControls: {
    //     ref: getStylesRef('carouselControls'),
    //     transition: 'opacity 150ms ease',
    //     opacity: 0,
    //     background: 'none!important',
    //     boder: '0px',
    //     color: '#0A73B7',
    // },
    // carousel: {
    //     '&:hover': {
    //         [`& .${getStylesRef('carouselControls')}`]: {
    //             opacity: 1,
    //         },
    //     },
    // },
    // carouselIndicator: {
    //     width: rem(4),
    //     height: rem(4),
    //     transition: 'width 250ms ease',
    //     bottom: '-2rem',
    //     backgroundColor: theme.fn.lighten('#0A73B7', 0.7),
    //     '&[data-active]': {
    //         width: rem(16),
    //         backgroundColor: '#0A73B7',
    //     },
    // },
}));

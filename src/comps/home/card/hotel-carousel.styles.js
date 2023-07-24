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

    hotelCarControl: {
        background: 'none',
        border: 'none',
        color: '#0A73B7',
        boxShadow: 'none',
    },
    hotelCarControls: {
        position: 'absolute',
        top: '-55px!important',
        justifyContent: 'end',
    },
    hotelCarouselBali: {},
    hotelCarouselJakarta: {},
}));

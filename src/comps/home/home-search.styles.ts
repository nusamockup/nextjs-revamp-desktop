import { createStyles } from '@ns-ui/core';

export default createStyles((theme) => ({
    hugeBtn: {
        color: '#FFF',
        border: '2px solid #fff',
        boxSizing: 'border-box',
        height: '42px',
        borderRadius: '8px',
        cursor: 'pointer',
        background: 'none',
        '&[data-active]': {
            // border: 'none',
            border: '2px solid #0A73B7',
            backgroundColor: '#0A73B7',
            '&:hover': {
                background: '#0A73B7',
                cursor: 'default',
            },
        },
        '&:hover': {
            background: 'rgba(255, 255, 255, .2)',
        },
    },
    flightchip: {},
    whiteRadioLabel: {
        '&.ns-ui-Radio-label': {
            color: 'white',
        },
    },
    inner: {
        backgroundColor: 'transparent',
        '&:checked': {
            backgroundColor: 'transparent',
        },
    },
}));

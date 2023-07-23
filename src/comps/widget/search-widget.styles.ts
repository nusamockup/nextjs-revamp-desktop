import { createStyles, rem } from '@ns-ui/core';

export default createStyles((theme) => ({
    root: {
        position: 'relative',
        marginTop: '0px!important',
    },

    widgetWrapper: {
        backgroundColor: '#FFF',
        borderRadius: '3px',
    },

    rightSection: {
        top: '16px',
    },

    widgetInput: {
        height: rem(54),
        paddingTop: rem(18),
        border: '0px',
        fontWeight: 600,
        textOverflow: 'ellipsis',
    },

    widgetLabel: {
        color: '#868e96',
        position: 'absolute',
        pointerEvents: 'none',
        fontSize: theme.fontSizes.xs,
        paddingLeft: theme.spacing.sm,
        paddingTop: `calc(${theme.spacing.sm} / 2)`,
        zIndex: 1,
    },

    widgetButton: {
        margin: '4px',
        height: `calc(100% - 8px)`,
        paddingLeft: '32px',
        paddingRight: '32px',
    },
    hide: {
        display: 'none',
    },
    show: {
        display: 'block',
    },
    radio: {
        backgroundColor: 'transparent',
        border: '2px solid #FFF',
        '&:checked': {
            backgroundColor: 'transparent',
            border: '2px solid #FFF',
        },
        cursor: 'pointer',
    },
    radioLabel: {
        cursor: 'pointer',
        color: 'white',
        fontSize: '16px',
        fontWeight: 600,
    },
    dropdown: {
        color: '#000',
        left: 0,
        top: 0,
    },
    labelWrapper: {
        label: {
            color: 'white',
            fontSize: '16px',
            fontWeight: 600,
            position: 'unset',
            paddingTop: 0,
            zIndex: 2,
        },
    },
    classChip: {
        label: {
            display: 'flex',
            justifyContent: 'center',
            justifyItems: 'flex-start',
        },
    },
    widgetRootAutocomplete: {
        position: 'relative',
    },
    dropdownAutocomplete: {
        width: 'auto!important',
        minWidth: '400px!important',
        left: '0px !important',
    },
}));

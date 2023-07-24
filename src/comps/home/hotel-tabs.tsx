import { Tabs, TabsProps } from '@ns-ui/core';

const HotelTabs = (props: TabsProps) => {
    return (
        <>
            <Tabs
                unstyled
                styles={(theme) => ({
                    tab: {
                        ...theme.fn.focusStyles(),
                        backgroundColor: '#e9ecef',
                        color: '#adb5bd',
                        border: '0px',
                        height: '1.875rem',
                        paddingLeft: '0.875rem',
                        paddingRight: '0.875rem',
                        cursor: 'pointer',
                        display: 'flex',
                        fontSize: theme.fontSizes.sm,
                        alignItems: 'center',
                        borderRadius: '0.25rem',
                        '&[data-active]': {
                            backgroundColor: theme.colors.blue[7],
                            borderColor: theme.colors.blue[7],
                            color: theme.white,
                        },
                        '&:disabled': {
                            opacity: 0.5,
                            cursor: 'not-allowed',
                        },
                    },

                    tabsList: {
                        display: 'flex',
                        gap: '10px',
                    },
                })}
                {...props}
            />
        </>
    );
};

export default HotelTabs;

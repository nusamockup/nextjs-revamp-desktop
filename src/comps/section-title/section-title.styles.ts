import { createStyles } from '@ns-ui/styles';

export default createStyles((theme) => ({
    sectiontitle: {
        position: 'relative',
        paddingTop: theme.spacing.xl,
        paddingBottom: '2rem',
        // marginBottom: '16px',
        '& span': {
            width: '120px',
            backgroundColor: '#e1e1e1',
            height: '2px',
            display: 'block',
            marginTop: '10px',
            // margin: `(${SectionTitle('align')} === 'center' ? 'auto' : ''}`,
            '& em': {
                width: '60px',
                height: '2px',
                backgroundColor: '#f37721',
                display: 'block',
            },
        },
    },

    sectionname: {
        position: 'absolute',
        bottom: '0px',
        right: '0px',
        fontSize: '46px',
        color: '#ccc',
        fontWeight: 800,
        paddingBottom: '1rem',
        opacity: '.3',
        textTransform: 'capitalize',
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },
    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
}));

import {
    Box,
    Container,
    Select,
    TextInput,
    createStyles,
    rem,
} from '@ns-ui/core';
import { DatePickerInput } from '@ns-ui/dates';
import { NsLogo } from '../comps/nslogo';
import { Welcome } from '../comps/welcome/welcome';

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
    },

    input: {
        height: rem(54),
        paddingTop: rem(18),
    },

    label: {
        position: 'absolute',
        pointerEvents: 'none',
        fontSize: theme.fontSizes.xs,
        paddingLeft: theme.spacing.sm,
        paddingTop: `calc(${theme.spacing.sm} / 2)`,
        zIndex: 1,
    },
}));

export default function Lab() {
    const { classes } = useStyles();
    return (
        <>
            <Container size="lg">
                <Welcome />
                {/* <ColorSchemeToggle /> */}
                <div>
                    <TextInput
                        label="Shipping address"
                        placeholder="15329 Huston 21st"
                        classNames={classes}
                    />

                    <Select
                        mt="md"
                        withinPortal
                        data={['React', 'Angular', 'Svelte', 'Vue']}
                        placeholder="Pick one"
                        label="Your favorite library/framework"
                        classNames={classes}
                    />

                    <DatePickerInput
                        mt="md"
                        popoverProps={{ withinPortal: true }}
                        label="Departure date"
                        placeholder="When will you leave?"
                        classNames={classes}
                        clearable={true}
                    />
                </div>
                {/* <NsLogo size={510} /> */}
                {/* <NsLogo2 type="mark" size={210} /> */}
                <Box bg="cyan" p={80}>
                    {/* <Center> */}
                    {/* <NsLogo type="mark" variant="monotone" size={200} /> */}
                    <NsLogo type="mark" size={150} monotone />
                    {/* <NsLogo type="mark" variant="monotone" size={200} /> */}
                    {/* </Center> */}
                </Box>
                <div className="some-class">This is hotpink now!</div>
            </Container>
        </>
    );
}

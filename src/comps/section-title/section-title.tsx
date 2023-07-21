import { Box, Text } from '@ns-ui/core';
import { upperFirst } from '@ns-ui/hooks';
import useStyles from './section-title.styles';

type sectionAlign = 'default' | 'center';
type sectionType = 'default' | 'simple';

interface sectionTitlePros {
    title: string;
    desc?: string;
    sectionname?: string;
    align?: sectionAlign;
    type?: sectionType;
}

const SectionTitle = ({
    title,
    desc,
    align,
    type,
    sectionname,
    ...props
}: sectionTitlePros) => {
    const { classes, cx } = useStyles();
    // const { name, description } = props;
    return (
        <>
            <Box className={classes.sectiontitle}>
                <Text
                    fw={700}
                    fz="1.4rem"
                    mt={5}
                    className={classes.title}
                    maw="75%"
                    ta={`${align === 'center' ? 'center' : 'left'}`}
                    m={`${align === 'center' ? 'auto' : null}`}
                >
                    {upperFirst(title)}
                </Text>

                {(() => {
                    switch (type) {
                        case 'simple':
                            return null;
                        default:
                            return (
                                <Text
                                    c="dimmed"
                                    fz="sm"
                                    maw="50%"
                                    ta={`${
                                        align === 'center' ? 'center' : 'left'
                                    }`}
                                    m={`${align === 'center' ? 'auto' : null}`}
                                >
                                    {desc}
                                </Text>
                            );
                    }
                })()}
                <Box
                    className={classes.sectionname}
                    display={`${align === 'center' ? 'none' : 'block'}`}
                >
                    {sectionname}
                </Box>
                <Box
                    component="span"
                    // ml={0}
                    m={`${align === 'center' ? 'auto' : '0px'}`}
                >
                    <Box
                        component="em"
                        m={`${align === 'center' ? 'auto' : '0px'}`}
                    ></Box>
                </Box>
            </Box>
        </>
    );
};

export default SectionTitle;

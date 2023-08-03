import { Avatar, Group, Paper, Text } from '@ns-ui/core';
import { createStyles } from '@ns-ui/styles';

const useStyles = createStyles((theme) => ({
    icon: {
        color:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[3]
                : theme.colors.gray[5],
    },
    cardListWrapper: {
        transition: 'box-shadow 100ms ease,transform 100ms ease;',

        '&:hover': {
            transform: 'scale(1.01)',
            boxShadow:
                '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem',
        },
    },

    name: {
        // fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
}));

interface UserInfoIconsProps {
    img?: string;
    arr?: string;
    dep?: string;
    price?: string;
    url?: string;
}

const CardList = ({ img, arr, dep, price, url }: UserInfoIconsProps) => {
    const { classes } = useStyles();
    return (
        <>
            <div>
                <Paper
                    className={classes.cardListWrapper}
                    component="a"
                    href={url}
                    p={16}
                    mt={10}
                    radius="md"
                >
                    <Group noWrap>
                        <Avatar
                            src={img}
                            size={80}
                            radius="md"
                            sx={{
                                boxShadow:
                                    'rgba(0, 0, 0, 0.2) 0px 0.0625rem 0.1875rem, rgba(0, 0, 0, 0.3) 0px 0.0625rem 0.125rem',
                            }}
                        />
                        {/* </Paper> */}
                        <div>
                            <Text fz="md" fw={500} className={classes.name}>
                                {/* Tana Toraja */}
                                {arr}
                            </Text>
                            <Text fz="md" fw={400} c="dimmed">
                                {/* Dep: Jakarta */}
                                Dep: {dep}
                            </Text>

                            <Group noWrap spacing={10} mt={8}>
                                <Text fz="xs" c="dimmed">
                                    from
                                </Text>
                                <Text fz="sm" fw={500}>
                                    IDR {price}
                                </Text>
                            </Group>
                        </div>
                    </Group>
                </Paper>
            </div>
        </>
    );
};

export default CardList;

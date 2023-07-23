import {
    AspectRatio,
    Card,
    Image,
    Text,
    createStyles,
    getStylesRef,
    rem,
} from '@ns-ui/core';

const useStyles = createStyles((theme) => ({
    card: {
        position: 'relative',
        height: '100%',
        // height: rem(280),
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],

        [`&:hover .${getStylesRef('image')}`]: {
            transform: 'scale(1.03)',
        },
    },

    image: {
        ...theme.fn.cover(),
        ref: getStylesRef('image'),
        backgroundSize: 'cover',
        transition: 'transform 500ms ease',
    },

    overlay: {
        position: 'absolute',
        top: '20%',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage:
            'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
        opacity: '.6',
    },

    content: {
        height: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        zIndex: 1,
    },

    title: {
        color: theme.white,
        marginBottom: rem(5),
    },

    bodyText: {
        color: theme.colors.dark[2],
        marginLeft: rem(7),
    },

    author: {
        color: theme.colors.dark[2],
    },
}));

interface ImageCardProps {
    link: string;
    image: string;
    title: string;
    ratio: number;
}

export function ImageCard({ image, title, link, ratio }: ImageCardProps) {
    const { classes, theme } = useStyles();

    return (
        <Card
            p="lg"
            shadow="lg"
            className={classes.card}
            radius="md"
            component="a"
            href={link}
            target="_blank"
            style={{ aspectRatio: `${ratio}` }}
        >
            <div
                className={classes.image}
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className={classes.overlay} />

            <div className={classes.content}>
                <div>
                    <Image mb={10} width={42} src="/img/icons/plane-icon.svg" />
                    <Text size="md" className={classes.title} weight={500}>
                        {title}
                    </Text>
                </div>
            </div>
        </Card>
    );
}

import { Box, createStyles, Stack, Text, ThemeIcon } from '@ns-ui/core';
import { IconBrandWhatsapp } from '@tabler/icons';
import { IconHeadset, IconMail, IconPhone } from '@tabler/icons-react';

type ContactIconVariant = 'white' | 'gradient' | 'solid';

interface ContactIconStyles {
    variant: ContactIconVariant;
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        color: theme.white,
    },

    icon: {
        marginRight: theme.spacing.md,
        backgroundImage:
            variant === 'gradient'
                ? `linear-gradient(135deg, ${
                      theme.colors[theme.primaryColor][4]
                  } 0%, ${theme.colors[theme.primaryColor][6]} 100%)`
                : 'none',
        backgroundColor: 'transparent',
    },

    title: {
        color:
            variant === 'gradient'
                ? theme.colors.gray[6]
                : theme.colors[theme.primaryColor][0],
    },

    description: {
        color: variant === 'gradient' ? theme.black : theme.white,
    },
}));

interface ContactIconProps
    extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    icon: React.FC<any>;
    title: React.ReactNode;
    description: React.ReactNode;
    variant?: ContactIconVariant;
}

function ContactIcon({
    icon: Icon,
    title,
    description,
    variant = 'gradient',
    className,
    ...others
}: ContactIconProps) {
    const { classes, cx } = useStyles({ variant });
    return (
        <div className={cx(classes.wrapper, className)} {...others}>
            {variant === 'gradient' ? (
                <ThemeIcon size={40} radius="md" className={classes.icon}>
                    <Icon size="1.5rem" />
                </ThemeIcon>
            ) : (
                <Box mr="md">
                    <Icon size="1.5rem" />
                </Box>
            )}

            <div>
                <Text size="xs" className={classes.title}>
                    {title}
                </Text>
                <Text className={classes.description}>{description}</Text>
            </div>
        </div>
    );
}

interface ContactIconsListProps {
    data?: ContactIconProps[];
    variant?: ContactIconVariant;
}

const MOCKDATA = [
    { title: 'Email', description: 'support@cs.nusatrip.com', icon: IconMail },
    {
        title: 'WhatsApp',
        description: '+62 812 8222 8747',
        icon: IconBrandWhatsapp,
    },
    {
        title: 'Support',
        description: '24/7 Call Center',
        icon: IconHeadset,
    },
    {
        title: 'United Kingdom',
        description: '+44 203 906 1322',
        icon: IconPhone,
    },
    {
        title: 'United States / Canada',
        description: '+1 970 295 4660',
        icon: IconPhone,
    },
    {
        title: 'Indonesia',
        description: '+62 21 5060 8747',
        icon: IconPhone,
    },
    {
        title: 'Malaysia',
        description: '+60 111 7000 885',
        icon: IconPhone,
    },
    {
        title: 'Singapore',
        description: '+65 31 38 97 26',
        icon: IconPhone,
    },
];

export function ContactIconsList({
    data = MOCKDATA,
    variant,
}: ContactIconsListProps) {
    const items = data.map((item, index) => (
        <ContactIcon key={index} variant={variant} {...item} />
    ));
    return <Stack>{items}</Stack>;
}

export function ContactIcons() {
    return <ContactIconsList />;
}

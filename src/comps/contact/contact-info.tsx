import { css, Global } from '@emotion/react';
import { Box, Center, Text } from '@ns-ui/core';
import { createStyles } from '@ns-ui/styles';
import {
    IconBrandWhatsapp,
    IconHeadset,
    IconMail,
    IconPhone,
    IconCornerDownRight,
} from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

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

const useStyles = createStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        color: '#000',
        marginBottom: '16px',
    },
    icon: {
        marginRight: theme.spacing.md,
        backgroundColor: 'transparent',
    },
    // '.is-sticky': {
    //     position: 'fixed',
    // },
}));

const ContactInfo = () => {
    const { classes, cx } = useStyles();
    // const [chatWidth, setChatWidth] = useState<number>();
    // const [sidebarTop, setSidebarTop] = useState<number>();

    // useEffect(() => {
    //     const chatEl = document
    //         .querySelector('.sidebar')!
    //         .getBoundingClientRect();
    //     setChatWidth(chatEl.width);
    //     setSidebarTop(chatEl.top);
    // }, []);

    // useEffect(() => {
    //     if (!sidebarTop) return;
    //     window.addEventListener('scroll', isSticky);
    //     return () => {
    //         window.removeEventListener('scroll', isSticky);
    //     };
    // }, [sidebarTop]);

    // const isSticky = (e) => {
    //     const chatEl = document.querySelector('.sidebar');
    //     const scrollTop = window.scrollY;
    //     if (chatEl) {
    //         if (sidebarTop) {
    //             if (scrollTop >= sidebarTop - 10) {
    //                 chatEl.classList.add('is-sticky');
    //             } else {
    //                 chatEl.classList.remove('is-sticky');
    //             }
    //         }
    //     }
    // };

    return (
        <>
            {/* <Global
                styles={css`
                    .sidebar.is-sticky {
                        position: fixed;
                        top: 10px;
                        z-index: 999;
                        // animation: 500ms ease-in-out 0s normal none 1 running
                        //     fadeInDown;
                    }
                `}
            /> */}
            <Box>
                <div className={cx(classes.wrapper)}>
                    <Box
                        w={40}
                        h={40}
                        mr="sm"
                        bg="#eee"
                        sx={{ borderRadius: '5px' }}
                    >
                        <Center h="100%" w="100%">
                            <IconMail size="1.5rem" />
                        </Center>
                    </Box>
                    <div>
                        <Text c="dimmed" size="xs">
                            Email
                        </Text>
                        <Text c="black">support@cs.nusatrip.com</Text>
                    </div>
                </div>
                <div className={cx(classes.wrapper)}>
                    <Box
                        w={40}
                        h={40}
                        mr="sm"
                        bg="#eee"
                        sx={{ borderRadius: '5px' }}
                    >
                        <Center h="100%" w="100%">
                            <IconBrandWhatsapp size="1.5rem" />
                        </Center>
                    </Box>
                    <div>
                        <Text c="dimmed" size="xs">
                            WhatsApp
                        </Text>
                        <Text c="black">+62 812 8222 8747</Text>
                    </div>
                </div>
                <div className={cx(classes.wrapper)}>
                    <Box
                        w={40}
                        h={40}
                        mr="sm"
                        bg="#eee"
                        sx={{ borderRadius: '5px' }}
                    >
                        <Center h="100%" w="100%">
                            <IconHeadset size="1.5rem" />
                        </Center>
                    </Box>
                    <div>
                        <Text c="dimmed" size="xs">
                            Support
                        </Text>
                        <Text c="black">24/7 Call Center</Text>
                    </div>
                </div>
                <div className={cx(classes.wrapper)}>
                    {/* <Box
                    w={40}
                    h={40}
                    mr="sm"
                    // bg="#eee"
                    sx={{ borderRadius: '5px' }}
                >
                    <Center h="100%" w="100%">
                        <IconCornerDownRight size="1.5rem" />
                    </Center>
                </Box> */}
                    <div
                        style={{
                            marginLeft: '54px',
                        }}
                    >
                        <Text c="dimmed" size="xs">
                            United Kingdom
                        </Text>
                        <Text c="black">+44 203 906 1322</Text>
                    </div>
                </div>
                <div className={cx(classes.wrapper)}>
                    <div
                        style={{
                            marginLeft: '54px',
                        }}
                    >
                        <Text c="dimmed" size="xs">
                            United States / Canada
                        </Text>
                        <Text c="black">+1 970 295 4660</Text>
                    </div>
                </div>
                <div className={cx(classes.wrapper)}>
                    <div
                        style={{
                            marginLeft: '54px',
                        }}
                    >
                        <Text c="dimmed" size="xs">
                            Indonesia
                        </Text>
                        <Text c="black">+62 21 5060 8747</Text>
                    </div>
                </div>
                <div className={cx(classes.wrapper)}>
                    <div
                        style={{
                            marginLeft: '54px',
                        }}
                    >
                        <Text c="dimmed" size="xs">
                            Malaysia
                        </Text>
                        <Text c="black">+60 111 7000 885</Text>
                    </div>
                </div>
                <div className={cx(classes.wrapper)}>
                    <div
                        style={{
                            marginLeft: '54px',
                        }}
                    >
                        <Text c="dimmed" size="xs">
                            Singapore
                        </Text>
                        <Text c="black">+65 31 38 97 26</Text>
                    </div>
                </div>
                {/* <div>Contact Info</div> */}
            </Box>
        </>
    );
};

export default ContactInfo;

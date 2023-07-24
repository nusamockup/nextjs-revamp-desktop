import { Avatar, Button, Center, Menu, Space, Text, rem } from '@ns-ui/core';
import { IconChevronDown, IconWorld } from '@tabler/icons-react';
import { useState } from 'react';
import { langs } from '../constants';

const LangSelector = ({ className }: { className?: string }) => {
    const [langMenuOpened, setLangMenuOpened] = useState(false);

    const [langIcon, setLanguageIcon] = useState(langs[0].image);
    function handleLanguageClick({ value }: any) {
        setLanguageIcon(value);
    }

    // ✅ Find the first object that matches a condition
    // const found = langs.find((obj) => {
    //     return obj.label == 'World';
    // });
    // { imgs.map((img, index) => <img src={img[`img${index + 1}`]} /> }
    // console.log(langs.map((langitem) => langitem.label));
    // console.log(langs[0]);

    const items = langs.map((item) => (
        <Menu.Item
            key={item.image}
            icon={<Avatar size="xs" radius="xl" src={item.image} />}
            onClick={() => {
                handleLanguageClick({ value: item.image });
            }}
        >
            {item.label}
        </Menu.Item>
    ));

    return (
        <>
            <Menu
                shadow="md"
                width={150}
                position="bottom-start"
                transitionProps={{ transition: 'pop-top-right' }}
                onClose={() => setLangMenuOpened(false)}
                onOpen={() => setLangMenuOpened(true)}
                withinPortal
            >
                <Menu.Target>
                    <Button
                        variant="light"
                        color="gray"
                        radius="sm"
                        compact
                        sx={{
                            label: {
                                fontSize: '12px',
                            },
                        }}
                    >
                        <Center>
                            {/* <IconWorld size={18} strokeWidth={1.5} /> */}
                            <Avatar size="xs" radius="xl" src={langIcon} />
                            <Space w="3px" />
                            <IconChevronDown size={rem(12)} stroke={1.5} />
                        </Center>
                    </Button>
                </Menu.Target>
                <Menu.Dropdown sx={{ width: 200 }}>{items}</Menu.Dropdown>
            </Menu>
        </>
    );
};

export default LangSelector;

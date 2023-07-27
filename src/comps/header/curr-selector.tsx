import {
    Avatar,
    Button,
    Center,
    Divider,
    Group,
    Modal,
    rem,
    SimpleGrid,
    Space,
    Tabs,
    Text,
    UnstyledButton,
} from '@ns-ui/core';
import { useDisclosure } from '@ns-ui/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import getSymbolFromCurrency from 'currency-symbol-map';
import { useState } from 'react';
import ScaleText from 'react-scale-text';
import { currencydata } from '../constants';
import NsImage from '../ns-image/ns-image';
import useStyles from './curr-selector.styles';

const CurrSelector = ({ className }: { className?: string }) => {
    const defaultIcon = '/img/flag/world.svg';
    const [currText, setCurrencyText] = useState('USD');
    const [langIcon, setLanguageIcon] = useState(defaultIcon);
    const [langTemp, setLanguageTemp] = useState(defaultIcon);
    // const [resLangTemp, resetLanguageTemp] = useState('/img/flag/world.svg');

    const { classes } = useStyles();
    const [opened, { open, close }] = useDisclosure(false);

    function handleCurrencyClick({ value }: any) {
        setCurrencyText(value);
        setLanguageIcon(`${langTemp}`);
    }
    function handleResetLang() {
        setLanguageTemp(defaultIcon);
    }
    function handleLanguageClick({ value }: any) {
        setLanguageTemp(value);
    }

    function CurrencyItem({ title, desc }) {
        return (
            <UnstyledButton
                className={classes.subLink}
                onClick={() => {
                    close();
                    handleCurrencyClick({ value: title });
                }}
            >
                <Group noWrap align="flex-start">
                    <Avatar size={40} color="blue">
                        <Center
                            sx={{
                                width: '100%',
                                height: '100%',
                                textAlign: 'center',
                                lineHeight: '30px',
                                padding: '5px',
                            }}
                        >
                            <ScaleText>
                                {getSymbolFromCurrency(title)}
                            </ScaleText>
                        </Center>
                    </Avatar>
                    <div>
                        <Text size="14px" sx={{ fontWeight: 600 }}>
                            {title}
                        </Text>
                        <Text size="xs" color="dimmed">
                            {desc}
                        </Text>
                    </div>
                </Group>
            </UnstyledButton>
        );
    }

    const links = currencydata.map((item) => (
        <CurrencyItem
            key={item.title}
            title={item.title}
            desc={item.description}
        />
    ));

    return (
        <>
            <Button
                variant="light"
                color="gray"
                radius="sm"
                compact
                // h={14}
                // py={5}
                styles={{
                    label: {
                        // fontWeight: 400,
                        fontSize: '12px',
                    },
                }}
                onClick={() => {
                    open();
                    handleResetLang();
                    // closeDrawer();
                }}
                // className={`${className}`}
            >
                <Center>
                    <Group spacing={5}>
                        <Avatar size="xs" radius="xl" src={langIcon} />
                        <Divider orientation="vertical" h={13} mt={4} />
                        <Text fz="sm">{currText}</Text>
                        {/* <Avatar size="xs" radius="xl" src={langIcon} /> */}
                    </Group>
                    <Space w="3px" />
                    <IconChevronDown color="gray" size={rem(12)} stroke={1} />
                </Center>
            </Button>
            <Modal
                // centered
                // mt='200px'
                // size="xl"
                size={800}
                opened={opened}
                onClose={close}
                title="Select Your Country and Currency"
                styles={{
                    inner: { marginTop: 80 },
                    title: { fontWeight: 500 },
                    header: { zIndex: 3 },
                }}
                overlayProps={{
                    color: '#0B2254',
                    opacity: 0.55,
                    blur: 2,
                }}
            >
                <Tabs
                    defaultValue="Global"
                    orientation="vertical"
                    keepMounted={false}
                    styles={{
                        panel: {
                            paddingLeft: '16px',
                            paddingTop: '0px!important',
                        },
                    }}
                >
                    <Tabs.List
                        sx={{
                            gap: '8px',
                        }}
                    >
                        <Tabs.Tab
                            value="Global"
                            icon={
                                <NsImage
                                    src="/img/flag/world.svg"
                                    width="16px"
                                />
                            }
                            onClick={() => {
                                handleLanguageClick({
                                    value: '/img/flag/world.svg',
                                });
                            }}
                        >
                            Global
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="Indonesia"
                            icon={
                                <NsImage src="/img/flag/id.svg" width="16px" />
                            }
                            onClick={() => {
                                handleLanguageClick({
                                    value: '/img/flag/id.svg',
                                });
                            }}
                        >
                            Indonesia
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="Malaysia"
                            icon={
                                <NsImage src="/img/flag/my.svg" width="16px" />
                            }
                            onClick={() => {
                                handleLanguageClick({
                                    value: '/img/flag/my.svg',
                                });
                            }}
                        >
                            Malaysia
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="Singapore"
                            icon={
                                <NsImage src="/img/flag/sg.svg" width="16px" />
                            }
                            onClick={() => {
                                handleLanguageClick({
                                    value: '/img/flag/sg.svg',
                                });
                            }}
                        >
                            Singapore
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="Philippines"
                            icon={
                                <NsImage src="/img/flag/ph.svg" width="16px" />
                            }
                            onClick={() => {
                                handleLanguageClick({
                                    value: '/img/flag/ph.svg',
                                });
                            }}
                        >
                            Philippines
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="Vietnam"
                            icon={
                                <NsImage src="/img/flag/vn.svg" width="16px" />
                            }
                            onClick={() => {
                                handleLanguageClick({
                                    value: '/img/flag/vn.svg',
                                });
                            }}
                        >
                            Vietnam
                        </Tabs.Tab>
                        <Tabs.Tab
                            value="Thailand"
                            icon={
                                <NsImage src="/img/flag/th.svg" width="16px" />
                            }
                            onClick={() => {
                                handleLanguageClick({
                                    value: '/img/flag/th.svg',
                                });
                            }}
                        >
                            Thailand
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="Global" pt="md">
                        <SimpleGrid cols={3} spacing={0}>
                            {links}
                        </SimpleGrid>
                    </Tabs.Panel>

                    <Tabs.Panel value="Indonesia" pt="xs">
                        <SimpleGrid cols={3} spacing={0}>
                            <CurrencyItem
                                title="IDR"
                                desc="Indonesian rupiah"
                            />
                            <CurrencyItem
                                title="USD"
                                desc="United States dollar"
                            />
                        </SimpleGrid>
                    </Tabs.Panel>

                    <Tabs.Panel value="Malaysia" pt="xs">
                        <SimpleGrid cols={3} spacing={0}>
                            <CurrencyItem
                                title="MYR"
                                desc="Malaysian ringgit"
                            />
                            <CurrencyItem
                                title="USD"
                                desc="United States dollar"
                            />
                        </SimpleGrid>
                    </Tabs.Panel>
                    <Tabs.Panel value="Singapore" pt="xs">
                        <SimpleGrid cols={3} spacing={0}>
                            <CurrencyItem title="SGD" desc="Singapore dollar" />
                            <CurrencyItem
                                title="USD"
                                desc="United States dollar"
                            />
                        </SimpleGrid>
                    </Tabs.Panel>

                    <Tabs.Panel value="Philippines" pt="xs">
                        <SimpleGrid cols={3} spacing={0}>
                            <CurrencyItem title="PHP" desc="Philippine peso" />
                            <CurrencyItem
                                title="USD"
                                desc="United States dollar"
                            />
                        </SimpleGrid>
                    </Tabs.Panel>
                    <Tabs.Panel value="Vietnam" pt="xs">
                        <SimpleGrid cols={3} spacing={0}>
                            <CurrencyItem title="VND" desc="Vietnamese dong" />
                            <CurrencyItem
                                title="USD"
                                desc="United States dollar"
                            />
                        </SimpleGrid>
                    </Tabs.Panel>

                    <Tabs.Panel value="Thailand" pt="xs">
                        <SimpleGrid cols={3} spacing={0}>
                            <CurrencyItem title="THB" desc="Thai baht" />
                            <CurrencyItem
                                title="USD"
                                desc="United States dollar"
                            />
                        </SimpleGrid>
                    </Tabs.Panel>
                </Tabs>
            </Modal>
        </>
    );
};

export default CurrSelector;

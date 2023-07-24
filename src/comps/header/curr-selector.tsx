import {
    Avatar,
    Button,
    Center,
    Group,
    Modal,
    SimpleGrid,
    Space,
    Text,
    UnstyledButton,
    rem,
} from '@ns-ui/core';
import { useDisclosure } from '@ns-ui/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import getSymbolFromCurrency from 'currency-symbol-map';
import ScaleText from 'react-scale-text';
import { currencydata } from '../constants';
import useStyles from './curr-selector.styles';
import { useState } from 'react';

const CurrSelector = ({ className }: { className?: string }) => {
    const [currText, setCurrencyText] = useState('USD');

    function handleCurrencyClick({ value }: any) {
        setCurrencyText(value);
    }

    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
        useDisclosure(false);
    const { classes } = useStyles();
    const [opened, { open, close }] = useDisclosure(false);
    const links = currencydata.map((item) => (
        <UnstyledButton
            className={classes.subLink}
            key={item.title}
            // onClick={close}

            onClick={() => {
                close();
                handleCurrencyClick({ value: item.title });
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
                            {getSymbolFromCurrency(item.symbol)}
                        </ScaleText>
                    </Center>
                </Avatar>
                <div>
                    <Text size="14px" sx={{ fontWeight: 600 }}>
                        {item.title}
                    </Text>
                    <Text size="xs" color="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));

    return (
        <>
            <Button
                variant="light"
                color="gray"
                radius="sm"
                compact
                styles={{
                    label: {
                        // fontWeight: 400,
                        fontSize: '12px',
                    },
                }}
                onClick={() => {
                    open();
                    closeDrawer();
                }}
                // className={`${className}`}
            >
                <Center>
                    <Text fz="sm">{currText}</Text>
                    <Space w="3px" />
                    <IconChevronDown color="gray" size={rem(12)} stroke={1} />
                </Center>
            </Button>
            <Modal
                size="xl"
                opened={opened}
                onClose={close}
                title="Select Your Currency"
                styles={{ title: { fontWeight: 500 }, header: { zIndex: 1 } }}
            >
                <SimpleGrid cols={3} spacing={0}>
                    {links}
                </SimpleGrid>
            </Modal>
        </>
    );
};

export default CurrSelector;

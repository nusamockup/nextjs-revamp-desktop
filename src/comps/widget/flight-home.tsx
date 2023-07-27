import {
    ActionIcon,
    Autocomplete,
    Box,
    Button,
    Center,
    Chip,
    Divider,
    Flex,
    Group,
    Input,
    InputBase,
    NumberInput,
    NumberInputHandlers,
    Popover,
    Radio,
    rem,
    Space,
    Stack,
    Text,
} from '@ns-ui/core';
import { DatePickerInput } from '@ns-ui/dates';
import { useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IconArrowsExchange, IconArrowsLeftRight } from '@tabler/icons-react';
import useStyles from './search-widget-home.styles';
import { useToggle, useWindowScroll } from '@ns-ui/hooks';

export const FlightHome = () => {
    const [flyingValue, setFlyingValue] = useState('');
    const [goingValue, setGoingValue] = useState('');
    // const [airportValue, airportToggle] = useToggle([flyingValue, goingValue]);

    function handleToggleAirport() {
        setFlyingValue(goingValue);
        setGoingValue(flyingValue);
    }

    const { classes, cx } = useStyles();
    const [opened, paxOpened] = useState(false);
    const [section, setSection] = useState<'oneway' | 'roundtrip'>('oneway');

    const childAge = Array(18)
        .fill(0)
        .map((_, index) => `${index} year`);

    let [adultvalue, setAdultValue] = useState<number | ''>(1);
    let [childvalue, setChildValue] = useState<number | ''>(0);
    let [infantvalue, setInfantValue] = useState<number | ''>(0);
    let totalpax =
        Number(adultvalue) + Number(childvalue) + Number(infantvalue);
    const handlerAdult: any = useRef<NumberInputHandlers>();
    const handlerChild: any = useRef<NumberInputHandlers>();
    const handlerInfant: any = useRef<NumberInputHandlers>();

    const [classvalue, setClassValue] = useState('Cheapest');

    const [scroll, scrollTo] = useWindowScroll();

    return (
        <>
            <Box
                mt={32}
                sx={{
                    padding: '40px 60px 60px 60px',
                    width: '100%',
                    height: '230px',
                    backgroundColor: '#010b217d',
                    borderRadius: '6px',
                }}
            >
                <Radio.Group
                    value={section}
                    onChange={(value: 'oneway' | 'roundtrip') =>
                        setSection(value)
                    }
                >
                    <Group mb={30}>
                        <Radio
                            classNames={{
                                radio: classes.radio,
                                label: classes.radioLabel,
                            }}
                            value="oneway"
                            label="Oneway"
                        />
                        <Radio
                            classNames={{
                                radio: classes.radio,
                                label: classes.radioLabel,
                            }}
                            value="roundtrip"
                            label="Roundtrip"
                        />
                    </Group>
                </Radio.Group>
                <Box maw={`calc(100% + 32px)`} mt={16}>
                    <Flex
                        className={classes.widgetWrapper}
                        onClick={() => scrollTo({ y: 160 })}
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <Flex>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Autocomplete
                                        label="Flying from"
                                        placeholder="City name"
                                        value={flyingValue}
                                        onChange={setFlyingValue}
                                        // onClick={() =>
                                        //     setFlyingValue(flyingValue)
                                        // }
                                        data={[
                                            'DPS : Ngurah Rai Intl, Denpasar Bali Indonesia',
                                            'JKT : All Airports, Jakarta Indonesia',
                                            'CGK : Soekarno Hatta, Jakarta Indonesia',
                                            'HLP : Halim Perdana Kusuma, Jakarta Indonesia',
                                            'SRG : Ahmad Yani, Semarang Central Java Indonesia',
                                        ]}
                                        classNames={{
                                            root: classes.widgetRootAutocomplete,
                                            input: classes.widgetInput,
                                            label: classes.widgetLabel,
                                            dropdown:
                                                classes.dropdownAutocomplete,
                                        }}
                                        withinPortal={false}
                                    />
                                </Box>
                                <Center>
                                    <ActionIcon
                                        c="dimmed"
                                        size="lg"
                                        mt={25}
                                        onClick={() => handleToggleAirport()}
                                    >
                                        <IconArrowsLeftRight size="1.3rem" />
                                        {/* <IconArrowsExchange size="1.625rem" /> */}
                                    </ActionIcon>
                                </Center>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Autocomplete
                                        label="Going to"
                                        placeholder="City name"
                                        value={goingValue}
                                        onChange={setGoingValue}
                                        // onClick={() =>
                                        //     setGoingValue(goingValue)
                                        // }
                                        classNames={{
                                            root: classes.widgetRootAutocomplete,
                                            input: classes.widgetInput,
                                            label: classes.widgetLabel,
                                            dropdown:
                                                classes.dropdownAutocomplete,
                                        }}
                                        data={[
                                            'DPS : Ngurah Rai Intl, Denpasar Bali Indonesia',
                                            'JKT : All Airports, Jakarta Indonesia',
                                            'CGK : Soekarno Hatta, Jakarta Indonesia',
                                            'HLP : Halim Perdana Kusuma, Jakarta Indonesia',
                                            'SRG : Ahmad Yani, Semarang Central Java Indonesia',
                                        ]}
                                    />
                                </Box>
                            </Flex>
                        </Box>
                        <Box sx={{ minWidth: '140px' }}>
                            <DatePickerInput
                                popoverProps={{
                                    withinPortal: true,
                                    shadow: 'lg',
                                }}
                                numberOfColumns={2}
                                valueFormat="DD MMM YYYY"
                                label="Departing"
                                placeholder="Add Date"
                                classNames={{
                                    input: classes.widgetInput,
                                    label: classes.widgetLabel,
                                    rightSection: classes.rightSection,
                                }}
                                clearable={true}
                                id="departing"
                            />
                        </Box>
                        <Box
                            sx={{ minWidth: '140px' }}
                            className={cx(classes.hide, {
                                [classes.show]: section === 'roundtrip',
                            })}
                        >
                            <DatePickerInput
                                popoverProps={{
                                    withinPortal: true,
                                    shadow: 'lg',
                                }}
                                numberOfColumns={2}
                                valueFormat="DD MMM YYYY"
                                label="Returning"
                                placeholder="Add Date"
                                classNames={{
                                    input: classes.widgetInput,
                                    label: classes.widgetLabel,
                                    rightSection: classes.rightSection,
                                }}
                                clearable={true}
                                id="returning"
                            />
                        </Box>
                        <Box sx={{ minWidth: '186px' }}>
                            <Popover
                                width={300}
                                position="bottom"
                                shadow="md"
                                opened={opened}
                                onChange={paxOpened}
                            >
                                <Popover.Target>
                                    <InputBase
                                        classNames={{
                                            input: classes.widgetInput,
                                            label: classes.widgetLabel,
                                        }}
                                        component="button"
                                        label="Passengers & Class"
                                        sx={{ cursor: 'pointer' }}
                                        onClick={() => paxOpened((o) => !o)}
                                    >
                                        <Input.Placeholder
                                            sx={{
                                                color: '#000',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            {totalpax} Passenger
                                            {totalpax > 1 ? 's' : ''},{' '}
                                            {classvalue}
                                        </Input.Placeholder>
                                    </InputBase>
                                </Popover.Target>
                                <Popover.Dropdown sx={{ color: '#000' }}>
                                    <Stack>
                                        <Group>
                                            <Stack
                                                spacing={0}
                                                sx={{ flex: '1' }}
                                            >
                                                <Text fw={500} fz={14}>
                                                    Adults
                                                </Text>
                                                <Text c="dimmed" fz="12px">
                                                    Ages 18 or above
                                                </Text>
                                            </Stack>
                                            <Group spacing={5}>
                                                <ActionIcon
                                                    size={36}
                                                    variant="light"
                                                    radius="xl"
                                                    onClick={() =>
                                                        handlerAdult.current.decrement()
                                                    }
                                                >
                                                    –
                                                </ActionIcon>

                                                <NumberInput
                                                    hideControls
                                                    value={adultvalue}
                                                    onChange={(aval) =>
                                                        setAdultValue(aval)
                                                    }
                                                    handlersRef={handlerAdult}
                                                    readOnly
                                                    variant="unstyled"
                                                    max={7}
                                                    min={1}
                                                    step={1}
                                                    styles={{
                                                        input: {
                                                            width: rem(54),
                                                            textAlign: 'center',
                                                            fontWeight: 'bold',
                                                        },
                                                    }}
                                                />

                                                <ActionIcon
                                                    size={36}
                                                    variant="light"
                                                    radius="xl"
                                                    onClick={() =>
                                                        handlerAdult.current.increment()
                                                    }
                                                >
                                                    +
                                                </ActionIcon>
                                            </Group>
                                        </Group>

                                        <Group>
                                            <Stack
                                                spacing={0}
                                                sx={{ flex: '1' }}
                                            >
                                                <Text fw={500} fz={14}>
                                                    Children
                                                </Text>
                                                <Text c="dimmed" fz="12px">
                                                    Ages 0-17
                                                </Text>
                                            </Stack>
                                            <Group spacing={5}>
                                                <ActionIcon
                                                    size={36}
                                                    variant="light"
                                                    radius="xl"
                                                    onClick={() =>
                                                        handlerChild.current.decrement()
                                                    }
                                                >
                                                    –
                                                </ActionIcon>

                                                <NumberInput
                                                    hideControls
                                                    value={childvalue}
                                                    onChange={(cval) =>
                                                        setChildValue(cval)
                                                    }
                                                    handlersRef={handlerChild}
                                                    readOnly
                                                    variant="unstyled"
                                                    max={10}
                                                    min={0}
                                                    step={1}
                                                    styles={{
                                                        input: {
                                                            width: rem(54),
                                                            textAlign: 'center',
                                                            fontWeight: 'bold',
                                                        },
                                                    }}
                                                />

                                                <ActionIcon
                                                    size={36}
                                                    variant="light"
                                                    radius="xl"
                                                    onClick={() =>
                                                        handlerChild.current.increment()
                                                    }
                                                >
                                                    +
                                                </ActionIcon>
                                            </Group>
                                        </Group>

                                        <Group>
                                            <Stack
                                                spacing={0}
                                                sx={{ flex: '1' }}
                                            >
                                                <Text fw={500} fz={14}>
                                                    Infants
                                                </Text>
                                                <Text c="dimmed" fz="12px">
                                                    Below 2 years
                                                </Text>
                                            </Stack>
                                            <Group spacing={5}>
                                                <ActionIcon
                                                    size={36}
                                                    variant="light"
                                                    radius="xl"
                                                    onClick={() =>
                                                        handlerInfant.current.decrement()
                                                    }
                                                >
                                                    –
                                                </ActionIcon>

                                                <NumberInput
                                                    hideControls
                                                    value={infantvalue}
                                                    onChange={(ival) =>
                                                        setInfantValue(ival)
                                                    }
                                                    handlersRef={handlerInfant}
                                                    readOnly
                                                    variant="unstyled"
                                                    max={10}
                                                    min={0}
                                                    step={1}
                                                    styles={{
                                                        input: {
                                                            width: rem(54),
                                                            textAlign: 'center',
                                                            fontWeight: 'bold',
                                                        },
                                                    }}
                                                />

                                                <ActionIcon
                                                    size={36}
                                                    variant="light"
                                                    radius="xl"
                                                    onClick={() =>
                                                        handlerInfant.current.increment()
                                                    }
                                                >
                                                    +
                                                </ActionIcon>
                                            </Group>
                                        </Group>
                                    </Stack>
                                    {/* <Space h="md" /> */}
                                    <Chip.Group
                                        multiple={false}
                                        value={classvalue}
                                        onChange={setClassValue}
                                    >
                                        <Group grow>
                                            <Chip
                                                value="Cheapest"
                                                radius="sm"
                                                className={classes.classChip}
                                            >
                                                Cheapest
                                            </Chip>
                                            <Chip
                                                value="Business"
                                                radius="sm"
                                                className={classes.classChip}
                                            >
                                                Business
                                            </Chip>
                                        </Group>
                                    </Chip.Group>
                                    <Divider
                                        my="sm"
                                        sx={{ borderColor: '#ececec' }}
                                    />
                                    <Flex justify="flex-end">
                                        <Button
                                            size="xs"
                                            onClick={() => paxOpened(false)}
                                        >
                                            Done
                                        </Button>
                                    </Flex>
                                </Popover.Dropdown>
                            </Popover>
                        </Box>
                        <Box>
                            <Button className={classes.widgetButton}>
                                <FiSearch size={18} />
                                <Space w="5px" />
                                Search
                            </Button>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    );
};

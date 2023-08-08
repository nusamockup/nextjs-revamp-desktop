import {
    ActionIcon,
    Autocomplete,
    Box,
    Button,
    Center,
    Chip,
    CloseButton,
    Divider,
    Flex,
    Group,
    Input,
    InputBase,
    NumberInput,
    NumberInputHandlers,
    Overlay,
    Popover,
    Radio,
    rem,
    Space,
    Stack,
    Text,
    Transition,
} from '@ns-ui/core';
import { DatePickerInput, DatesProvider } from '@ns-ui/dates';
import { useWindowScroll } from '@ns-ui/hooks';
import { IconArrowsLeftRight } from '@tabler/icons-react';
import { useRef, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiCalendar, FiMapPin, FiSearch } from 'react-icons/fi';
import { useScrollBlock } from '../hooks/useScrollBlock';
import useStyles from './search-widget-home.styles';

export const FlightHome = () => {
    const [blockScroll, allowScroll] = useScrollBlock();

    const openWidgetOverlayHandler = () => {
        scrollTo({ y: 200 });
        setOverlay((v) => true);
        blockScroll();
    };

    const closeWidgetOverlayHandler = () => {
        setOverlay((v) => false);
        allowScroll();
    };

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
    const [overlay, setOverlay] = useState(false);

    return (
        <>
            <Transition
                mounted={overlay}
                transition="fade"
                duration={300}
                timingFunction="ease"
            >
                {(styles) => (
                    <Overlay
                        color="#0B2254"
                        style={styles}
                        blur={2}
                        pos="fixed"
                        onClick={() => closeWidgetOverlayHandler()}
                    />
                )}
            </Transition>
            <Transition
                mounted={overlay}
                transition="slide-down"
                duration={200}
                timingFunction="ease"
            >
                {(styles) => (
                    <AiOutlineCloseCircle
                        size={32}
                        style={{
                            ...styles,
                            position: 'absolute',
                            top: '190px',
                            right: '60px',
                            color: '#FFF',
                            zIndex: 202,
                            cursor: 'pointer',
                            opacity: '55%',
                        }}
                        onClick={() => closeWidgetOverlayHandler()}
                    />
                )}
            </Transition>
            <Box
                mt={32}
                sx={{
                    padding: '40px 60px 60px 60px',
                    width: '100%',
                    height: '230px',
                    backgroundColor: '#010b217d',
                    borderRadius: '6px',
                    position: 'relative',
                    zIndex: 201,
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
                    <Flex className={classes.widgetWrapper}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Flex>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Autocomplete
                                        label="Flying from"
                                        placeholder="City name"
                                        value={flyingValue}
                                        onChange={setFlyingValue}
                                        limit={100}
                                        icon={<FiMapPin size={16} />}
                                        styles={{
                                            icon: { top: '22px' },
                                        }}
                                        rightSection={
                                            flyingValue !== '' && (
                                                <CloseButton
                                                    size={14}
                                                    onMouseDown={(event) =>
                                                        event.preventDefault()
                                                    }
                                                    onClick={() =>
                                                        setFlyingValue('')
                                                    }
                                                    aria-label="Clear value"
                                                    sx={{ top: '10px' }}
                                                />
                                            )
                                        }
                                        maxDropdownHeight="250"
                                        dropdownPosition="bottom"
                                        data={[
                                            'DPS : Ngurah Rai Intl, Denpasar Bali Indonesia',
                                            'JKT : All Airports, Jakarta Indonesia',
                                            'CGK : Soekarno Hatta, Jakarta Indonesia',
                                            'HLP : Halim Perdana Kusuma, Jakarta Indonesia',
                                            'SRG : Ahmad Yani, Semarang Central Java Indonesia',
                                            'PEK : Beijing Capital International Airport ',
                                            'HND : Haneda International Airport, Tokyo Japan',
                                            'NRT : Narita International Airport. Tokyo Japan',
                                            'BKK : Suvarnabhumi Airport, Bangkok',
                                            'CAN : Guangzhou Baiyun International Airport, Guangzhou China',
                                        ]}
                                        classNames={{
                                            root: classes.widgetRootAutocomplete,
                                            input: classes.widgetInput,
                                            label: classes.widgetLabel,
                                            dropdown:
                                                classes.dropdownAutocomplete,
                                        }}
                                        transitionProps={{
                                            transition: 'pop-top-left',
                                            duration: 80,
                                            timingFunction: 'ease',
                                        }}
                                        withinPortal={false}
                                        onClick={() =>
                                            openWidgetOverlayHandler()
                                        }
                                    />
                                </Box>
                                <Center
                                    onClick={() => openWidgetOverlayHandler()}
                                >
                                    <ActionIcon
                                        c="dimmed"
                                        size="lg"
                                        mt={25}
                                        onClick={() => handleToggleAirport()}
                                    >
                                        <IconArrowsLeftRight size="18px" />
                                    </ActionIcon>
                                </Center>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Autocomplete
                                        label="Going to"
                                        placeholder="City name"
                                        value={goingValue}
                                        onChange={setGoingValue}
                                        limit={100}
                                        icon={<FiMapPin size={16} />}
                                        styles={{
                                            icon: { top: '22px' },
                                        }}
                                        maxDropdownHeight="250"
                                        dropdownPosition="bottom"
                                        rightSection={
                                            goingValue !== '' && (
                                                <CloseButton
                                                    size={14}
                                                    onMouseDown={(event) =>
                                                        event.preventDefault()
                                                    }
                                                    onClick={() =>
                                                        setGoingValue('')
                                                    }
                                                    aria-label="Clear value"
                                                    sx={{ top: '10px' }}
                                                />
                                            )
                                        }
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
                                            'PEK : Beijing Capital International Airport ',
                                            'HND : Haneda International Airport, Tokyo Japan',
                                            'NRT : Narita International Airport. Tokyo Japan',
                                            'BKK : Suvarnabhumi Airport, Bangkok',
                                            'CAN : Guangzhou Baiyun International Airport, Guangzhou China',
                                        ]}
                                        transitionProps={{
                                            transition: 'pop-top-left',
                                            duration: 80,
                                            timingFunction: 'ease',
                                        }}
                                        onClick={() =>
                                            openWidgetOverlayHandler()
                                        }
                                    />
                                </Box>
                            </Flex>
                        </Box>
                        <Box sx={{ minWidth: '160px' }}>
                            <DatesProvider
                                settings={{
                                    weekendDays: [0],
                                }}
                            >
                                <DatePickerInput
                                    popoverProps={{
                                        withinPortal: true,
                                        shadow: 'lg',
                                    }}
                                    numberOfColumns={2}
                                    valueFormat="DD MMM YYYY"
                                    label="Departing"
                                    placeholder="Add Date"
                                    icon={<FiCalendar size={16} />}
                                    styles={{
                                        icon: { top: '20px' },
                                    }}
                                    classNames={{
                                        input: classes.widgetInput,
                                        label: classes.widgetLabel,
                                        rightSection: classes.rightSection,
                                    }}
                                    clearable={true}
                                    id="departing"
                                    onClick={() => openWidgetOverlayHandler()}
                                />
                            </DatesProvider>
                        </Box>
                        <Box
                            sx={{ minWidth: '160px' }}
                            className={cx(classes.hide, {
                                [classes.show]: section === 'roundtrip',
                            })}
                        >
                            <DatesProvider
                                settings={{
                                    weekendDays: [0],
                                }}
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
                                    icon={<FiCalendar size={16} />}
                                    styles={{
                                        icon: { top: '20px' },
                                    }}
                                    classNames={{
                                        input: classes.widgetInput,
                                        label: classes.widgetLabel,
                                        rightSection: classes.rightSection,
                                    }}
                                    clearable={true}
                                    id="returning"
                                    onClick={() => openWidgetOverlayHandler()}
                                />
                            </DatesProvider>
                        </Box>
                        <Box
                            sx={{ minWidth: '186px' }}
                            onClick={() => openWidgetOverlayHandler()}
                        >
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
                                        sx={{
                                            cursor: 'pointer',
                                            overflow: 'hidden',
                                        }}
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
                                                    sx={{
                                                        input: {
                                                            width: rem(54),
                                                            textAlign: 'center',
                                                            fontWeight: 'bold',
                                                            fontSize: 18,
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
                                                    sx={{
                                                        input: {
                                                            width: rem(54),
                                                            textAlign: 'center',
                                                            fontWeight: 'bold',
                                                            fontSize: 18,
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
                                                    sx={{
                                                        input: {
                                                            width: rem(54),
                                                            textAlign: 'center',
                                                            fontWeight: 'bold',
                                                            fontSize: 18,
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
                            <Button
                                className={classes.widgetButton}
                                onClick={() => closeWidgetOverlayHandler()}
                            >
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

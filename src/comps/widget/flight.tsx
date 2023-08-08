import {
    ActionIcon,
    Autocomplete,
    Box,
    Button,
    Chip,
    Divider,
    Flex,
    Group,
    Input,
    InputBase,
    NumberInput,
    NumberInputHandlers,
    Overlay,
    Paper,
    Popover,
    Radio,
    rem,
    Space,
    Stack,
    Text,
    Transition,
} from '@ns-ui/core';
import { DatePickerInput } from '@ns-ui/dates';
import { useRef, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { useScrollBlock } from '../hooks/useScrollBlock';
import useStyles from './search-widget.styles';

export const Flight = () => {
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

    const [classvalue, setClassValue] = useState('Economy');

    const [overlay, setOverlay] = useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();
    const openWidgetOverlayHandler = () => {
        // scrollTo({ y: 200 });
        setOverlay((v) => true);
        blockScroll();
    };

    const closeWidgetOverlayHandler = () => {
        setOverlay((v) => false);
        allowScroll();
    };

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
                        size={24}
                        style={{
                            ...styles,
                            position: 'absolute',
                            marginTop: '-60px',
                            top: '50px',
                            right: '10px',
                            color: '#FFF',
                            zIndex: 202,
                            cursor: 'pointer',
                            opacity: '55%',
                        }}
                        onClick={() => closeWidgetOverlayHandler()}
                    />
                )}
            </Transition>
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
                        size={24}
                        style={{
                            ...styles,
                            position: 'absolute',
                            marginTop: '-60px',
                            top: '50px',
                            right: '10px',
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
                sx={{
                    paddingTop: 30,
                    width: '100%',
                    zIndex: 201,
                    position: 'relative',
                }}
            >
                {/* <Container size="lg"> */}
                <Radio.Group
                    value={section}
                    onChange={(value: 'oneway' | 'roundtrip') =>
                        setSection(value)
                    }
                >
                    <Group>
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
                <Paper onClick={() => openWidgetOverlayHandler()} shadow="lg">
                    <Box maw={`calc(100% + 32px)`} mt={16}>
                        <Flex className={classes.widgetWrapper}>
                            <Box
                                onClick={() => openWidgetOverlayHandler()}
                                sx={{ flexGrow: 1 }}
                            >
                                <Flex>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Autocomplete
                                            label="Flying from"
                                            placeholder="City name"
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
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Autocomplete
                                            label="Going to"
                                            placeholder="City name"
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
                            <Box
                                onClick={() => openWidgetOverlayHandler()}
                                sx={{ minWidth: '140px' }}
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
                                onClick={() => openWidgetOverlayHandler()}
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
                            <Box
                                onClick={() => openWidgetOverlayHandler()}
                                sx={{ minWidth: '186px' }}
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
                                                        handlersRef={
                                                            handlerAdult
                                                        }
                                                        readOnly
                                                        variant="unstyled"
                                                        max={7}
                                                        min={1}
                                                        step={1}
                                                        styles={{
                                                            input: {
                                                                width: rem(54),
                                                                textAlign:
                                                                    'center',
                                                                fontWeight:
                                                                    'bold',
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
                                                        handlersRef={
                                                            handlerChild
                                                        }
                                                        readOnly
                                                        variant="unstyled"
                                                        max={10}
                                                        min={0}
                                                        step={1}
                                                        styles={{
                                                            input: {
                                                                width: rem(54),
                                                                textAlign:
                                                                    'center',
                                                                fontWeight:
                                                                    'bold',
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
                                                        handlersRef={
                                                            handlerInfant
                                                        }
                                                        readOnly
                                                        variant="unstyled"
                                                        max={10}
                                                        min={0}
                                                        step={1}
                                                        styles={{
                                                            input: {
                                                                width: rem(54),
                                                                textAlign:
                                                                    'center',
                                                                fontWeight:
                                                                    'bold',
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
                                                    value="Economy"
                                                    radius="sm"
                                                    className={
                                                        classes.classChip
                                                    }
                                                >
                                                    Economy
                                                </Chip>
                                                <Chip
                                                    value="Business"
                                                    radius="sm"
                                                    className={
                                                        classes.classChip
                                                    }
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
                </Paper>
                {/* </Container> */}
            </Box>
        </>
    );
};

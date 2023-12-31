import {
    ActionIcon,
    Autocomplete,
    Box,
    Button,
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
    rem,
    Space,
    Stack,
    Text,
    Transition,
} from '@ns-ui/core';
import { DatePickerInput, DatesProvider } from '@ns-ui/dates';
import { useCounter, useWindowScroll } from '@ns-ui/hooks';
import { useRef, useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiCalendar, FiMapPin, FiSearch } from 'react-icons/fi';
import { useScrollBlock } from '../hooks/useScrollBlock';
import ChildAge from './child-age';
import useStyles from './search-widget-home.styles';

export const HotelHome = () => {
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

    const [overlay, setOverlay] = useState(false);
    const [locValue, setLocValue] = useState('');

    const { classes } = useStyles();
    const [opened, guestOpened] = useState(false);
    const [value, setValue] = useState<[Date | null, Date | null]>([
        null,
        null,
    ]);
    const [scroll, scrollTo] = useWindowScroll();

    let [roomvalue, setRoomValue] = useState<number | ''>(1);
    let [adultvalue, setAdultValue] = useState<number | ''>(1);
    let [childvalue, setChildValue] = useState<number | ''>(0);

    let handlerRoom: any = useRef<NumberInputHandlers>();
    let handlerAdult: any = useRef<NumberInputHandlers>();
    let handlerChild: any = useRef<NumberInputHandlers>();

    const childAge = Array(18)
        .fill(0)
        .map((_, index) => `${index} year`);

    const [count, { increment, decrement }] = useCounter(0, { min: 0 });
    const childAgeInputs = Array(count)
        .fill(0)
        .map((_, index) => (
            <ChildAge key={index} label={`Age of child ${index + 1}`} />
        ));

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
                        // opacity={0.55}
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
                {/* <Container size="lg" maw={`calc(100% + 32px)`} mx="-16px" mt={68}> */}
                <Text
                    c="#FFF"
                    fz={18}
                    fw={400}
                    mt="-2px"
                    mb={24}
                    lts={0.75}
                    opacity=".8"
                >
                    Enjoy a Luxury Stay with an Affordable Hotel Price.
                </Text>
                <Flex className={classes.widgetWrapper}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Autocomplete
                            label="Hotel location"
                            placeholder="City or location"
                            limit={100}
                            icon={<FiMapPin size={16} />}
                            value={locValue}
                            onChange={setLocValue}
                            onClick={() => openWidgetOverlayHandler()}
                            rightSection={
                                locValue !== '' && (
                                    <CloseButton
                                        size={14}
                                        onMouseDown={(event) =>
                                            event.preventDefault()
                                        }
                                        onClick={() => setLocValue('')}
                                        aria-label="Clear value"
                                        sx={{ top: '10px' }}
                                    />
                                )
                            }
                            styles={{
                                icon: { top: '22px' },
                            }}
                            maxDropdownHeight="250"
                            transitionProps={{
                                transition: 'pop-top-left',
                                duration: 80,
                                timingFunction: 'ease',
                            }}
                            dropdownPosition="bottom"
                            classNames={{
                                root: classes.widgetRootAutocomplete,
                                input: classes.widgetInput,
                                label: classes.widgetLabel,
                                dropdown: classes.dropdownAutocomplete,
                            }}
                            data={[
                                'Aryaduta Hotel, Jakarta Indonesia',
                                'Aston Pluit, Jakarta Indonesia',
                                'Borobudur, Jakarta Indonesia',
                                'Bali Dynasty Resort, Bali Indonesia',
                                'Mercure Kuta Beach, Bali Indonesia',
                                'Nusa Dua Beach Hotel & Spa, Bali Indonesia',
                                'Denpasar, Bali Indonesia',
                                'Dengkil, Selangor Malaysia',
                                'Malioboro, Yogyakarta Indonesia',
                                'Malang, East Java Indonesia',
                                'Malacca City, Malacca Malaysia',
                            ]}
                        />
                    </Box>

                    <Box sx={{ minWidth: '260px' }}>
                        <DatesProvider
                            settings={{
                                weekendDays: [0],
                            }}
                        >
                            <DatePickerInput
                                type="range"
                                value={value}
                                onChange={setValue}
                                popoverProps={{
                                    withinPortal: true,
                                    shadow: 'lg',
                                }}
                                icon={<FiCalendar size={16} />}
                                styles={{
                                    icon: { top: '20px' },
                                }}
                                numberOfColumns={2}
                                valueFormat="DD MMM YYYY"
                                label="When"
                                placeholder="Add Date"
                                classNames={{
                                    input: classes.widgetInput,
                                    label: classes.widgetLabel,
                                    rightSection: classes.rightSection,
                                }}
                                onClick={() => openWidgetOverlayHandler()}
                                clearable={true}
                                id="checkindate"
                            />
                        </DatesProvider>
                    </Box>

                    <Box
                        sx={{ minWidth: '220px' }}
                        onClick={() => openWidgetOverlayHandler()}
                    >
                        <Popover
                            width={300}
                            position="bottom"
                            shadow="md"
                            opened={opened}
                            onChange={guestOpened}
                        >
                            <Popover.Target>
                                <InputBase
                                    classNames={{
                                        input: classes.widgetInput,
                                        label: classes.widgetLabel,
                                    }}
                                    component="button"
                                    label="Rooms & Guest"
                                    sx={{ cursor: 'pointer' }}
                                    onClick={() => guestOpened((o) => !o)}
                                >
                                    <Input.Placeholder
                                        sx={{
                                            color: '#000',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {roomvalue} Room
                                        {Number(roomvalue) > 1 ? 's' : ''},{' '}
                                        {adultvalue} Adult
                                        {Number(adultvalue) > 1 ? 's' : ''}{' '}
                                        {childvalue} Children
                                    </Input.Placeholder>
                                </InputBase>
                            </Popover.Target>
                            <Popover.Dropdown sx={{ color: '#000' }}>
                                <Stack>
                                    <Group>
                                        <Stack spacing={0} sx={{ flex: '1' }}>
                                            <Text fw={500} fz={14}>
                                                Rooms
                                            </Text>
                                            <Text c="dimmed" fz="12px">
                                                Number of rooms
                                            </Text>
                                        </Stack>
                                        <Group spacing={5}>
                                            <ActionIcon
                                                size={36}
                                                variant="light"
                                                radius="xl"
                                                onClick={() =>
                                                    handlerRoom.current.decrement()
                                                }
                                            >
                                                –
                                            </ActionIcon>

                                            <NumberInput
                                                hideControls
                                                value={roomvalue}
                                                onChange={(rval) =>
                                                    setRoomValue(rval)
                                                }
                                                handlersRef={handlerRoom}
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
                                                    handlerRoom.current.increment()
                                                }
                                            >
                                                +
                                            </ActionIcon>
                                        </Group>
                                    </Group>

                                    <Group>
                                        <Stack spacing={0} sx={{ flex: '1' }}>
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
                                        <Stack spacing={0} sx={{ flex: '1' }}>
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
                                                onClick={() => {
                                                    decrement();
                                                    handlerChild.current.decrement();
                                                }}
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
                                                onClick={() => {
                                                    increment();
                                                    handlerChild.current.increment();
                                                }}
                                            >
                                                +
                                            </ActionIcon>
                                        </Group>
                                    </Group>
                                </Stack>
                                <Space h="md" />

                                <Stack spacing="5px">{childAgeInputs}</Stack>
                                <Divider
                                    my="sm"
                                    sx={{ borderColor: '#ececec' }}
                                />
                                <Flex justify="flex-end">
                                    <Button
                                        size="xs"
                                        onClick={() => guestOpened(false)}
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
        </>
    );
};

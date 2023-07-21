import React, { useRef, useState } from 'react';
import {
    ActionIcon,
    Autocomplete,
    Button,
    Chip,
    Container,
    Divider,
    Flex,
    Group,
    Input,
    InputBase,
    NumberInput,
    NumberInputHandlers,
    Popover,
    Select,
    Space,
    Stack,
    Text,
    rem,
} from '@ns-ui/core';
import useStyles from './search-widget.styles';
import { DatePickerInput } from '@ns-ui/dates';

export const Hotel = () => {
    const { classes } = useStyles();
    const [opened, guestOpened] = useState(false);
    const [value, setValue] = useState<[Date | null, Date | null]>([
        null,
        null,
    ]);

    let [roomvalue, setRoomValue] = useState<number | ''>(1);
    let [adultvalue, setAdultValue] = useState<number | ''>(1);
    let [childvalue, setChildValue] = useState<number | ''>(0);

    let handlerRoom: any = useRef<NumberInputHandlers>();
    let handlerAdult: any = useRef<NumberInputHandlers>();
    let handlerChild: any = useRef<NumberInputHandlers>();

    const childAge = Array(18)
        .fill(0)
        .map((_, index) => `${index} year`);

    return (
        <>
            <Container size="lg" maw={`calc(100% + 32px)`} mx="-16px" mt={68}>
                <Flex className={classes.widgetWrapper}>
                    <div style={{ flexGrow: 1 }}>
                        <Autocomplete
                            label="Hotel location"
                            placeholder="City or location"
                            classNames={classes}
                            data={[
                                'Denpasar, Bali Indonesia',
                                'Dengkil, Selangor Malaysia',
                                'Malioboro, Yogyakarta Indonesia',
                                'Malang, East Java Indonesia',
                                'Malacca City, Malacca Malaysia',
                            ]}
                        />
                    </div>

                    <div style={{ minWidth: '220px' }}>
                        <DatePickerInput
                            type="range"
                            value={value}
                            onChange={setValue}
                            popoverProps={{
                                withinPortal: true,
                                shadow: 'lg',
                            }}
                            numberOfColumns={2}
                            // value={value}
                            // onChange={setValue}
                            valueFormat="DD MMM YYYY"
                            label="When"
                            placeholder="Add Date"
                            classNames={classes}
                            clearable={true}
                        />
                    </div>

                    <div style={{ minWidth: '220px' }}>
                        <Popover
                            width={300}
                            position="bottom"
                            // withArrow
                            shadow="md"
                            opened={opened}
                            onChange={guestOpened}
                        >
                            <Popover.Target>
                                <InputBase
                                    classNames={classes}
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
                                        {/* {totalpax} Passenger
                                        {totalpax > 1 ? 's' : ''}, {classvalue} */}
                                    </Input.Placeholder>
                                </InputBase>
                            </Popover.Target>
                            <Popover.Dropdown sx={{ color: '#000' }}>
                                <Stack>
                                    <Group>
                                        <Stack spacing={0} sx={{ flex: '1' }}>
                                            <Text
                                                // ta="center"
                                                fw={500}
                                                fz={14}
                                                // className={classes.title}
                                            >
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
                                                    handlerRoom.current.increment()
                                                }
                                            >
                                                +
                                            </ActionIcon>
                                        </Group>
                                    </Group>

                                    <Group>
                                        <Stack spacing={0} sx={{ flex: '1' }}>
                                            <Text
                                                // ta="center"
                                                fw={500}
                                                fz={14}
                                                // className={classes.title}
                                            >
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
                                        <Stack spacing={0} sx={{ flex: '1' }}>
                                            <Text
                                                // ta="center"
                                                fw={500}
                                                fz={14}
                                                // className={classes.title}
                                            >
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
                                </Stack>
                                <Space h="md" />

                                <Stack spacing="5px">
                                    <Group
                                        bg="#f8f9fa"
                                        sx={{ borderRadius: '5px' }}
                                    >
                                        <Text
                                            // ta="center"
                                            fw={500}
                                            fz={14}
                                            ml={8}
                                            sx={{ flex: '1' }}
                                            // className={classes.title}
                                        >
                                            Age of Child 1
                                        </Text>
                                        <Select
                                            maw={100}
                                            data={childAge}
                                            // label="Select with native scrollbars"
                                            placeholder="Child Age"
                                            // value="O year"
                                            variant="unstyled"
                                            sx={{ textAlign: 'right' }}
                                        />
                                    </Group>
                                    <Group
                                        bg="#f8f9fa"
                                        sx={{ borderRadius: '5px' }}
                                    >
                                        <Text
                                            // ta="center"
                                            fw={500}
                                            fz={14}
                                            ml={8}
                                            sx={{ flex: '1' }}
                                            // className={classes.title}
                                        >
                                            Age of Child 2
                                        </Text>
                                        <Select
                                            maw={100}
                                            data={childAge}
                                            // label="Select with native scrollbars"
                                            placeholder="Child Age"
                                            // value="O year"
                                            variant="unstyled"
                                            sx={{ textAlign: 'right' }}
                                        />
                                    </Group>
                                </Stack>
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
                    </div>
                    <div>
                        <Button className={classes.widgetButton}>Search</Button>
                    </div>
                </Flex>
            </Container>
        </>
    );
};

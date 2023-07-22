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
    Radio,
    rem,
    Skeleton,
    Stack,
    Text,
} from '@ns-ui/core';
import { DatePickerInput } from '@ns-ui/dates';
import { useRef, useState } from 'react';
import useStyles from './search-widget.styles';


export const Flight = () => {
    const { classes, cx } = useStyles();
    const [opened, paxOpened] = useState(false);
    const [section, setSection] = useState<'oneway' | 'roundtrip'>('oneway');

    const child = <Skeleton height={30} radius="md" animate={false} />;
    const [value, setValue] = useState<[Date | null, Date | null]>([
        null,
        null,
    ]);
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

    return (
        <>
            <Radio.Group
                mt={32}
                value={section}
                onChange={(value: 'oneway' | 'roundtrip') => setSection(value)}
            >
                <Group>
                    <Radio classNames={classes} value="oneway" label="Oneway" />
                    <Radio
                        classNames={classes}
                        value="roundtrip"
                        label="Roundtrip"
                    />
                </Group>
            </Radio.Group>
            <Container size="lg" maw={`calc(100% + 32px)`} mx="-16px" mt={16}>
                <Flex className={classes.widgetWrapper}>
                    <div style={{ flexGrow: 1 }}>
                        <Flex>
                            <div style={{ flexGrow: 1 }}>
                                <Autocomplete
                                    label="Flying from"
                                    placeholder="City name"
                                    classNames={classes}
                                    data={[
                                        'DPS : Ngurah Rai Intl, Denpasar Bali Indonesia',
                                        'JKT : All Airports, Jakarta Indonesia',
                                        'CGK : Soekarno Hatta, Jakarta Indonesia',
                                        'HLP : Halim Perdana Kusuma, Jakarta Indonesia',
                                        'SRG : Ahmad Yani, Semarang Central Java Indonesia',
                                    ]}
                                />
                            </div>
                            <div style={{ flexGrow: 1 }}>
                                <Autocomplete
                                    label="Going to"
                                    placeholder="City name"
                                    classNames={classes}
                                    data={[
                                        'DPS : Ngurah Rai Intl, Denpasar Bali Indonesia',
                                        'JKT : All Airports, Jakarta Indonesia',
                                        'CGK : Soekarno Hatta, Jakarta Indonesia',
                                        'HLP : Halim Perdana Kusuma, Jakarta Indonesia',
                                        'SRG : Ahmad Yani, Semarang Central Java Indonesia',
                                    ]}
                                />
                            </div>
                        </Flex>
                    </div>
                    <div style={{ minWidth: '140px' }}>
                        <DatePickerInput
                            popoverProps={{
                                withinPortal: true,
                                shadow: 'lg',
                            }}
                            numberOfColumns={2}
                            valueFormat="DD MMM YYYY"
                            label="Departing"
                            placeholder="Add Date"
                            classNames={classes}
                            clearable={true}
                            id="departing"
                        />
                    </div>
                    <div
                        style={{ minWidth: '140px' }}
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
                            classNames={classes}
                            clearable={true}
                            id="returning"
                        />
                    </div>
                    <div style={{ minWidth: '186px' }}>
                        <Popover
                            width={300}
                            position="bottom"
                            shadow="md"
                            opened={opened}
                            onChange={paxOpened}
                        >
                            <Popover.Target>
                                <InputBase
                                    classNames={classes}
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
                                        {totalpax > 1 ? 's' : ''}, {classvalue}
                                    </Input.Placeholder>
                                </InputBase>
                            </Popover.Target>
                            <Popover.Dropdown sx={{ color: '#000' }}>
                                <Stack>
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
                                        <Stack spacing={0} sx={{ flex: '1' }}>
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
                                            value="Economy"
                                            radius="sm"
                                            className={classes.classChip}
                                        >
                                            Economy
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
                    </div>
                    <div>
                        <Button className={classes.widgetButton}>Search</Button>
                    </div>
                </Flex>
            </Container>
        </>
    );
};

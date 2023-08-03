import {
    Autocomplete,
    BackgroundImage,
    Button,
    CloseButton,
    Container,
    createStyles,
    Flex,
    Overlay,
    PasswordInput,
    rem,
    SimpleGrid,
    Stack,
    Text,
    TextInput,
    Title,
} from '@ns-ui/core';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import NsImage from '../ns-image/ns-image';

const useStyles = createStyles((theme) => ({
    wrapper: {
        minHeight: rem(900),
        backgroundSize: 'cover',
        backgroundImage:
            'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
    },

    form: {
        borderRight: `${rem(1)} solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[7]
                : theme.colors.gray[3]
        }`,
        minHeight: rem(900),
        maxWidth: rem(450),
        paddingTop: rem(80),

        [theme.fn.smallerThan('sm')]: {
            maxWidth: '100%',
        },
    },

    title: {
        // color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        // fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        color: '#FFF',
        fontSize: '36px',
        fontStyle: 'normal',
        fontWeight: 400,
        letterSpacing: '1px',
        textTransform: 'uppercase',
    },
    subtitle: {
        color: '#FFF',
        marginTop: -20,
        fontSize: '28px',
        fontStyle: 'normal',
        fontWeight: 400,
        letterSpacing: '0.036px',
        textTransform: 'uppercase',
    },
}));

const PriceCalender = () => {
    const { classes } = useStyles();

    const [flyingValue, setFlyingValue] = useState('');
    const [goingValue, setGoingValue] = useState('');

    return (
        <>
            <BackgroundImage
                pos="relative"
                mt={64}
                // h="165px"
                // h="265px"
                src="/img/banner/16dba0df5c6a8d63916055e4800e83d9.webp"
            >
                <Container
                    pos="relative"
                    size="lg"
                    py={80}
                    sx={{
                        zIndex: 2,
                    }}
                >
                    <SimpleGrid cols={2} spacing="60px">
                        <NsImage
                            src="/img/banner/020d0b90bdf5cfd586ef1a568897679d.png"
                            width="100%"
                        />
                        {/* <Image
                            src="/img/banner/020d0b90bdf5cfd586ef1a568897679d.png"
                            alt=""
                            width={420}
                            height={232}
                        /> */}
                        <div>
                            <Text className={classes.title}>
                                Great Journey Begins
                            </Text>
                            <Text className={classes.subtitle} mt={0} mb={30}>
                                With a Small Step
                            </Text>
                            <Autocomplete
                                mb={10}
                                size="md"
                                // label="Flying from"
                                placeholder="Flying from"
                                value={flyingValue}
                                onChange={setFlyingValue}
                                limit={100}
                                // icon={<FiMapPin size={16} />}
                                styles={{
                                    icon: { top: '22px' },
                                }}
                                rightSection={
                                    flyingValue !== '' && (
                                        <CloseButton
                                            // size={14}
                                            onMouseDown={(event) =>
                                                event.preventDefault()
                                            }
                                            onClick={() => setFlyingValue('')}
                                            aria-label="Clear value"
                                            // sx={{ top: '10px' }}
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
                                // classNames={{
                                //     root: classes.widgetRootAutocomplete,
                                //     input: classes.widgetInput,
                                //     label: classes.widgetLabel,
                                //     dropdown: classes.dropdownAutocomplete,
                                // }}
                                transitionProps={{
                                    transition: 'pop-top-left',
                                    duration: 80,
                                    timingFunction: 'ease',
                                }}
                                withinPortal={false}
                                // onClick={() => openWidgetOverlayHandler()}
                            />

                            <Autocomplete
                                // label="Going to"
                                placeholder="Going to"
                                size="md"
                                value={goingValue}
                                onChange={setGoingValue}
                                limit={100}
                                // icon={<FiMapPin size={16} />}
                                styles={{
                                    icon: { top: '22px' },
                                }}
                                maxDropdownHeight="250"
                                dropdownPosition="bottom"
                                rightSection={
                                    goingValue !== '' && (
                                        <CloseButton
                                            // size={14}
                                            onMouseDown={(event) =>
                                                event.preventDefault()
                                            }
                                            onClick={() => setGoingValue('')}
                                            aria-label="Clear value"
                                            // sx={{ top: '10px' }}
                                        />
                                    )
                                }
                                // classNames={{
                                //     root: classes.widgetRootAutocomplete,
                                //     input: classes.widgetInput,
                                //     label: classes.widgetLabel,
                                //     dropdown: classes.dropdownAutocomplete,
                                // }}
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
                                // onClick={() =>
                                //     openWidgetOverlayHandler()
                                // }
                            />

                            <Flex>
                                <Button mt="32px" size="md" ml="auto">
                                    View Price Calendar
                                </Button>
                            </Flex>
                        </div>
                    </SimpleGrid>
                </Container>
                {/* <Container size="lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis consectetur vitae provident doloremque voluptatibus
                    tempore enim, labore incidunt quasi. Ex libero vitae dolore
                    eveniet earum praesentium iure labore dolorem at.
                </Container> */}
                <Overlay
                    gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%)"
                    opacity={0.6}
                    zIndex={1}
                />
            </BackgroundImage>
        </>
    );
};

export default PriceCalender;

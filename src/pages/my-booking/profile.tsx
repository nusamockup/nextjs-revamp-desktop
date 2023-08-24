import {
    Box,
    Button,
    Container,
    createStyles,
    Divider,
    Grid,
    Group,
    Paper,
    PasswordInput,
    Select,
    SimpleGrid,
    Stack,
    Text,
    TextInput,
    Title,
} from '@ns-ui/core';
import { useToggle } from '@ns-ui/hooks';
import { useState } from 'react';
import {
    getCountries,
    getCountryCallingCode,
} from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';
import 'react-phone-number-input/style.css';
import BodyBg from 'src/comps/home/body-bg';
import SidebarComp from 'src/comps/my-booking/sidebar-comp';
import SupportBannerText from 'src/comps/support/support-banner-text';

const useStyles = createStyles(() => ({
    input: {
        backgroundColor: 'transparent !important',
        border: 0,
        color: '#000 !important',
        paddingLeft: '0px !important',
        '&[type="password"]': {
            paddingLeft: '0px !important',
        },
        // marginLeft: '0px !important',
    },
    button: {
        height: '100%',
        '&:hover': {
            background: 'transparent !important',
        },
    },
}));

const Profile = () => {
    const { classes } = useStyles();
    const [mode, toggleMode] = useToggle(['readonly', 'edit']);
    const [editPassword, toggleEditPassword] = useToggle([
        'readonlypass',
        'editpass',
    ]);
    const [currentPass, setCurrentPass] = useState<string | undefined>(
        'CurrentPassword'
    );
    const [newPass, setNewPass] = useState<string | undefined>(undefined);
    const [verifyPass, setVerifyPass] = useState<string | undefined>(undefined);
    const [titleValue, setTitleValue] = useState<string | null>('mr');
    const [countryCode, setCountryCode] = useState<any | null>(
        `(+${getCountryCallingCode('ID')}) ${en['ID']}`
    );
    const [frequentFlyer, setFrequentFlyer] = useState<string | null>(null);
    const [defaultLang, setDefaultLang] = useState<string | null>('Global');
    const [defaultCurrency, setDefaultCurrency] = useState<string | null>(
        'Rupiah'
    );
    const [insuranceValue, setInsuranceValue] = useState<string | null>('No');

    return (
        <>
            <BodyBg color="#f8f8f8" />
            <SupportBannerText text="My Awesome Journey" />
            <Container mt={'xl'} size={'xl'}>
                <Grid>
                    <Grid.Col span={9} pr={40}>
                        <Paper withBorder>
                            <Group position="apart" p={'md'}>
                                <Title order={4} fw={400}>
                                    My Profile
                                </Title>
                                <Button
                                    compact
                                    size="sm"
                                    variant="outline"
                                    onClick={() => toggleMode()}
                                >
                                    {mode === 'readonly' ? 'Edit' : 'Save'}
                                </Button>
                            </Group>
                            <Divider />
                            <Box p={'md'} bg={'#ECF5FF'}>
                                <SimpleGrid cols={3}>
                                    <TextInput
                                        classNames={{
                                            input: classes.input,
                                        }}
                                        label="Login Email"
                                        value={'edditohier@gmail.com'}
                                        disabled
                                    />
                                    <PasswordInput
                                        classNames={{
                                            input:
                                                editPassword === 'readonlypass'
                                                    ? classes.input
                                                    : '',
                                        }}
                                        disabled={
                                            editPassword === 'readonlypass'
                                                ? true
                                                : false
                                        }
                                        label="Current Password"
                                        value={currentPass}
                                        onChange={(event) =>
                                            setCurrentPass(
                                                event.currentTarget.value
                                            )
                                        }
                                    />
                                    <Button
                                        className={classes.button}
                                        variant="subtle"
                                        color="gray"
                                        onClick={() => toggleEditPassword()}
                                    >
                                        {editPassword === 'readonlypass'
                                            ? 'Change Password'
                                            : 'Save Password'}
                                    </Button>
                                    {editPassword === 'readonlypass' ? null : (
                                        <>
                                            <PasswordInput
                                                label="New Password"
                                                value={newPass}
                                                onChange={(event) =>
                                                    setNewPass(
                                                        event.currentTarget
                                                            .value
                                                    )
                                                }
                                            />
                                            <PasswordInput
                                                label="Verify Password"
                                                value={verifyPass}
                                                onChange={(event) =>
                                                    setVerifyPass(
                                                        event.currentTarget
                                                            .value
                                                    )
                                                }
                                            />
                                        </>
                                    )}
                                </SimpleGrid>
                            </Box>
                            <Grid p={'md'}>
                                <Grid.Col span={9}>
                                    <Title mb={10} order={6} fw={400}>
                                        PERSONAL INFORMATION
                                    </Title>
                                    <SimpleGrid cols={3}>
                                        <Stack>
                                            <Select
                                                classNames={{
                                                    input:
                                                        mode === 'readonly'
                                                            ? classes.input
                                                            : '',
                                                }}
                                                disabled={
                                                    mode === 'readonly'
                                                        ? true
                                                        : false
                                                }
                                                label="Title"
                                                value={titleValue}
                                                onChange={setTitleValue}
                                                data={[
                                                    {
                                                        value: 'mr',
                                                        label: 'Mr',
                                                    },
                                                    {
                                                        value: 'mrs',
                                                        label: 'Mrs',
                                                    },
                                                    {
                                                        value: 'ms',
                                                        label: 'Ms',
                                                    },
                                                ]}
                                            />
                                            <Select
                                                data={getCountries().map(
                                                    (country) =>
                                                        `(+${getCountryCallingCode(
                                                            country
                                                        )}) ${en[country]}`
                                                )}
                                                classNames={{
                                                    input:
                                                        mode === 'readonly'
                                                            ? classes.input
                                                            : '',
                                                }}
                                                disabled={
                                                    mode === 'readonly'
                                                        ? true
                                                        : false
                                                }
                                                onChange={setCountryCode}
                                                label="Country"
                                                value={countryCode}
                                                // searchable
                                                // nothingFound="No options"
                                            />

                                            <TextInput
                                                classNames={{
                                                    input:
                                                        mode === 'readonly'
                                                            ? classes.input
                                                            : '',
                                                }}
                                                disabled={
                                                    mode === 'readonly'
                                                        ? true
                                                        : false
                                                }
                                                label="Date of Birth"
                                                value={'23 Feb 1990'}
                                            />
                                        </Stack>
                                        <Stack>
                                            <TextInput
                                                classNames={{
                                                    input:
                                                        mode === 'readonly'
                                                            ? classes.input
                                                            : '',
                                                }}
                                                disabled={
                                                    mode === 'readonly'
                                                        ? true
                                                        : false
                                                }
                                                label="First Name"
                                                value={'Eddie'}
                                            />
                                            <TextInput
                                                classNames={{
                                                    input:
                                                        mode === 'readonly'
                                                            ? classes.input
                                                            : '',
                                                }}
                                                disabled={
                                                    mode === 'readonly'
                                                        ? true
                                                        : false
                                                }
                                                label="Phone Number"
                                                value={'82198343434'}
                                            />
                                            <TextInput
                                                classNames={{
                                                    input:
                                                        mode === 'readonly'
                                                            ? classes.input
                                                            : '',
                                                }}
                                                disabled={
                                                    mode === 'readonly'
                                                        ? true
                                                        : false
                                                }
                                                label="Contact Email"
                                                value={
                                                    'eddietohier@nusadev.com'
                                                }
                                            />
                                        </Stack>
                                        <Stack>
                                            <TextInput
                                                classNames={{
                                                    input:
                                                        mode === 'readonly'
                                                            ? classes.input
                                                            : '',
                                                }}
                                                disabled={
                                                    mode === 'readonly'
                                                        ? true
                                                        : false
                                                }
                                                label="Last Name"
                                                value={'Tohier'}
                                            />
                                            <TextInput
                                                classNames={{
                                                    input:
                                                        mode === 'readonly'
                                                            ? classes.input
                                                            : '',
                                                }}
                                                disabled={
                                                    mode === 'readonly'
                                                        ? true
                                                        : false
                                                }
                                                label="Nationality"
                                                value={'Indonesia'}
                                            />
                                        </Stack>
                                    </SimpleGrid>
                                </Grid.Col>
                                <Grid.Col span={3}>
                                    <Title mb={10} order={6} fw={400}>
                                        PASSPORT INFORMATION
                                    </Title>
                                    <Stack>
                                        <TextInput
                                            classNames={{
                                                input:
                                                    mode === 'readonly'
                                                        ? classes.input
                                                        : '',
                                            }}
                                            disabled={
                                                mode === 'readonly'
                                                    ? true
                                                    : false
                                            }
                                            label="Passport Number"
                                            value={'A01934354'}
                                        />
                                        <TextInput
                                            classNames={{
                                                input:
                                                    mode === 'readonly'
                                                        ? classes.input
                                                        : '',
                                            }}
                                            disabled={
                                                mode === 'readonly'
                                                    ? true
                                                    : false
                                            }
                                            label="Passport Expiry Date"
                                            value={'19 Nov 2030'}
                                        />
                                        <TextInput
                                            classNames={{
                                                input: classes.input,
                                            }}
                                            disabled
                                            sx={{
                                                opacity: 0.5,
                                            }}
                                            label="Country of Passport"
                                            value={'Indonesia'}
                                        />
                                    </Stack>
                                </Grid.Col>
                            </Grid>

                            <Divider my={'md'} />
                            <Grid p={'md'}>
                                <Grid.Col span={9}>
                                    <Title mb={10} order={6} fw={400}>
                                        ADDITIONAL INFORMATION
                                    </Title>
                                    <Select
                                        classNames={{
                                            input:
                                                mode === 'readonly'
                                                    ? classes.input
                                                    : '',
                                        }}
                                        disabled={
                                            mode === 'readonly' ? true : false
                                        }
                                        label="Frequent Flyer"
                                        value={frequentFlyer}
                                        onChange={setFrequentFlyer}
                                        placeholder="Select Frequent Flyer Program"
                                        data={[
                                            'Aer Arann Silver Club',
                                            'Aer Lingus Gold Circle Club',
                                            'Aeroflot Bonus',
                                            'etc...',
                                        ]}
                                    />
                                </Grid.Col>
                                <Grid.Col span={3}>
                                    <Stack mt={31}>
                                        <Select
                                            classNames={{
                                                input:
                                                    mode === 'readonly'
                                                        ? classes.input
                                                        : '',
                                            }}
                                            disabled={
                                                mode === 'readonly'
                                                    ? true
                                                    : false
                                            }
                                            label="Pref. Language"
                                            value={defaultLang}
                                            onChange={setDefaultLang}
                                            placeholder="Select your currency"
                                            data={[
                                                'Global',
                                                'Indonesia',
                                                'Malaysia',
                                                'Singapore',
                                                'Philippines',
                                                'Vietnam',
                                                'Thailand',
                                            ]}
                                        />
                                        {/* <TextInput
                                            classNames={{
                                                input:
                                                    mode === 'readonly'
                                                        ? classes.input
                                                        : '',
                                            }}
                                            disabled={
                                                mode === 'readonly'
                                                    ? true
                                                    : false
                                            }
                                            label="Pref. Language"
                                            value={'English'}
                                        /> */}
                                        <Select
                                            classNames={{
                                                input:
                                                    mode === 'readonly'
                                                        ? classes.input
                                                        : '',
                                            }}
                                            disabled={
                                                mode === 'readonly'
                                                    ? true
                                                    : false
                                            }
                                            label="Pref. Currency"
                                            value={defaultCurrency}
                                            onChange={setDefaultCurrency}
                                            placeholder="Select your currency"
                                            data={[
                                                'Rupiah',
                                                'US Dollar',
                                                'Ringit',
                                                'etc..',
                                            ]}
                                        />
                                        {/* <TextInput
                                            classNames={{
                                                input:
                                                    mode === 'readonly'
                                                        ? classes.input
                                                        : '',
                                            }}
                                            disabled={
                                                mode === 'readonly'
                                                    ? true
                                                    : false
                                            }
                                            label="Pref. Currency"
                                            value={'IDR'}
                                        /> */}
                                        <Select
                                            classNames={{
                                                input:
                                                    mode === 'readonly'
                                                        ? classes.input
                                                        : '',
                                            }}
                                            disabled={
                                                mode === 'readonly'
                                                    ? true
                                                    : false
                                            }
                                            label="Pref. Insurance"
                                            value={insuranceValue}
                                            onChange={setInsuranceValue}
                                            placeholder="Your option to select insurance"
                                            data={['No', 'Yes']}
                                            description="If 'Yes', system will add insurance
                                            to your next booking"
                                        />
                                        {/* <Text
                                            size="sm"
                                            pr={20}
                                            c="dimmed"
                                            fs="italic"
                                        >
                                            If "Yes", system will add insurance
                                            to your next booking
                                        </Text> */}
                                        {/* <TextInput
                                            classNames={{
                                                input:
                                                    mode === 'readonly'
                                                        ? classes.input
                                                        : '',
                                            }}
                                            disabled={
                                                mode === 'readonly'
                                                    ? true
                                                    : false
                                            }
                                            label="Pref. Insurance"
                                            value={'Yes'}
                                        /> */}
                                    </Stack>
                                </Grid.Col>
                            </Grid>
                        </Paper>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <SidebarComp name="eddie" />
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    );
};

export default Profile;

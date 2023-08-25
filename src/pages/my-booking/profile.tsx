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
    TextInput,
    Title,
} from '@ns-ui/core';
import { useForm } from '@ns-ui/form';
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
// import capitalizeFirst from 'src/comps/hooks/capitalize-frst';

const useStyles = createStyles(() => ({
    input: {
        backgroundColor: 'transparent !important',
        border: 0,
        color: '#000 !important',
        paddingLeft: '0px !important',
        '&[type="password"]': {
            paddingLeft: '0px !important',
        },
        fontWeight: 500,
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
    const form = useForm({
        initialValues: {
            firstname: 'Eddie',
            lastname: 'Tohier',
            email: 'edditohier@gmail.com',
            cemail: 'eddietohier@nusadev.com',
            bod: '23 Feb 1990',
            phone: '82198343434',
            nationality: 'Indonesia',
            passportno: 'A01934354',
            passportexpired: '19 Nov 2030',
            passportcountry: 'Indonesia',
            // currentpassport: 'currentpassport',
            // newpassport: '',
            // verifypassport: '',
        },
    });

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
                                        disabled
                                        {...form.getInputProps('email')}
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
                                                placeholder="Ex. 01 Jan 2020"
                                                // value={'23 Feb 1990'}
                                                {...form.getInputProps('bod')}
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
                                                // value={'Eddie'}
                                                {...form.getInputProps(
                                                    // capitalizeFirst('firstname')
                                                    'firstname'
                                                )}
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
                                                // value={'82198343434'}
                                                {...form.getInputProps('phone')}
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
                                                // value={
                                                //     'eddietohier@nusadev.com'
                                                // }
                                                {...form.getInputProps(
                                                    'cemail'
                                                )}
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
                                                // value={'Tohier'}
                                                {...form.getInputProps(
                                                    'lastname'
                                                    // capitalizeFirst('lastname')
                                                )}
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
                                                // value={'Indonesia'}
                                                {...form.getInputProps(
                                                    'nationality'
                                                    // capitalizeFirst(
                                                    //     'nationality'
                                                    // )
                                                )}
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
                                            // value={'A01934354'}
                                            {...form.getInputProps(
                                                'passportno'
                                            )}
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
                                            placeholder="Ex. 01 Jan 2023"
                                            label="Passport Expiry Date"
                                            // value={'19 Nov 2030'}
                                            {...form.getInputProps(
                                                'passportexpired'
                                            )}
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

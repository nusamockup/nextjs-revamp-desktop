import {
    Box,
    Button,
    Divider,
    Flex,
    Grid,
    Group,
    Select,
    SimpleGrid,
    Text,
    TextInput,
} from '@ns-ui/core';
import { DatePickerInput } from '@ns-ui/dates';
import { useMemo, useState } from 'react';
import { FiCalendar } from 'react-icons/fi';
import {
    getCountries,
    getCountryCallingCode,
} from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';
import countryList from 'react-select-country-list';

const ContactModal = () => {
    const [dobValue, setDobValue] = useState<Date | null>(null);
    const options = useMemo(() => countryList().getData(), []);
    const [expiryDateValue, setExpiryDateValue] = useState<Date | null>(null);
    return (
        <>
            <Divider mb={20} />
            <Grid mb={20}>
                <Grid.Col span={2}>
                    <Select
                        // w={100}
                        label="Title"
                        required
                        clearable
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
                </Grid.Col>
                <Grid.Col span={5}>
                    <TextInput
                        // w={220}
                        label="First Name"
                        // placeholder="Ex. 01 Jan 2020"
                        required
                    />
                </Grid.Col>
                <Grid.Col span={5}>
                    <TextInput
                        // w={220}
                        label="Last Name"
                        // placeholder="Ex. 01 Jan 2020"
                        required
                    />
                </Grid.Col>
            </Grid>
            <SimpleGrid cols={3}>
                <Select
                    data={getCountries().map(
                        (country) =>
                            `(+${getCountryCallingCode(country)}) ${
                                en[country]
                            }`
                    )}
                    // onChange={setCountryCode}
                    label="Phone Country Code"
                    required
                    dropdownPosition="bottom"
                    transitionProps={{
                        transition: 'pop-top-left',
                        duration: 80,
                        timingFunction: 'ease',
                    }}
                    withinPortal
                    // value={countryCode}
                    // searchable
                    // nothingFound="No options"
                />
                <TextInput
                    label="Phone Number"
                    // placeholder="Ex. 01 Jan 2020"
                    required
                />
                <TextInput
                    label="ID Number"
                    // placeholder="Ex. 01 Jan 2020"
                    required
                />
                {/* <TextInput
                                        label="Date of Birth"
                                        // placeholder="Ex. 01 Jan 2020"
                                        required
                                    /> */}
                {/* <Portal> */}
                <DatePickerInput
                    label="Date of Birth"
                    value={dobValue}
                    onChange={setDobValue}
                    required
                    valueFormat="DD MMM YYYY"
                    rightSection={<FiCalendar size={16} color="#b0b7be" />}
                    popoverProps={{ withinPortal: true }}
                />
                {/* </Portal> */}
                <TextInput
                    label="Contact Email"
                    // placeholder="Ex. 01 Jan 2020"
                    required
                />
                {/* </SimpleGrid>
                                <SimpleGrid mt={30} cols={3}> */}
                <TextInput
                    label="Passport Number"
                    // placeholder="Ex. 01 Jan 2020"
                    // required
                />
                {/* <TextInput
                                        label="Country of Password"
                                        // placeholder="Ex. 01 Jan 2020"
                                        required
                                    /> */}
                <Select
                    data={options}
                    label="Country of Passport"
                    transitionProps={{
                        transition: 'pop-top-left',
                        duration: 80,
                        timingFunction: 'ease',
                    }}
                    withinPortal
                    searchable
                    clearable
                />
                <DatePickerInput
                    label="Passport Expiry Date"
                    value={expiryDateValue}
                    onChange={setExpiryDateValue}
                    valueFormat="DD MMM YYYY"
                    rightSection={<FiCalendar size={16} color="#b0b7be" />}
                    popoverProps={{ withinPortal: true }}
                />
            </SimpleGrid>
            <Divider my={'lg'} />
            <Flex justify={'end'} align="end">
                <Button ml={'auto'}>Submit</Button>
            </Flex>
            <Text size={'sm'} mb="4px">
                Frequent Flyer
            </Text>
            <Box
                sx={{
                    border: '1px solid #ccc',
                    padding: '1px',
                    borderRadius: '4px',
                }}
            >
                <Group w={'100%'} spacing={'sm'}>
                    <Select
                        // label="Frequent Flyer"
                        // value={frequentFlyer}
                        // onChange={setFrequentFlyer}
                        placeholder="Select Frequent Flyer Program"
                        data={[
                            'Aer Arann Silver Club',
                            'Aer Lingus Gold Circle Club',
                            'Aeroflot Bonus',
                            'etc...',
                        ]}
                        styles={{
                            input: {
                                border: 'none',
                            },
                        }}
                        sx={{
                            flex: 1,
                            width: '100%',
                        }}
                    />
                    <Button compact size={'sm'} mr="xs">
                        Add
                    </Button>
                </Group>
            </Box>
        </>
    );
};

export default ContactModal;

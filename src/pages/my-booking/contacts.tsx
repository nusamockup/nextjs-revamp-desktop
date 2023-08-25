import {
    ActionIcon,
    Box,
    Button,
    Container,
    Divider,
    Flex,
    Grid,
    Group,
    Modal,
    Paper,
    Table,
    Text,
    Title,
} from '@ns-ui/core';
import { useDisclosure } from '@ns-ui/hooks';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';
import BodyBg from 'src/comps/home/body-bg';
import SidebarComp from 'src/comps/my-booking/sidebar-comp';
import SupportBannerText from 'src/comps/support/support-banner-text';
import ContactModal from './contact-modal';

const contacts = [
    {
        title: 'Mr',
        name: 'Robert Johnson',
        bod: '01 Sep 1992',
        nationality: 'Indonesia',
    },
    {
        title: 'Mr',
        name: 'Daniel Hall',
        bod: '16 May 2019',
        nationality: 'Indonesia',
    },
    {
        title: 'Mr',
        name: 'Michael Jones',
        bod: '12 Jul 1994',
        nationality: 'Indonesia',
    },
    {
        title: 'Mr',
        name: 'John Doe',
        bod: '01 Apr 1991',
        nationality: 'Indonesia',
    },
    {
        title: 'Mrs',
        name: 'Christopher White',
        bod: '02 Feb 2023',
        nationality: 'Indonesia',
    },
    {
        title: 'Mrs',
        name: 'Isabella Anderson',
        bod: '09 Dec 2012',
        nationality: 'Singapore',
    },
    {
        title: 'Mrs',
        name: 'Richard Thompson',
        bod: '09 Dec 1996',
        nationality: 'Malaysia',
    },
];

const Contacts = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const [deleteConfirmOpened, setDeleteConfirmOpened] = useState(false);

    const rows = contacts.map((contact, index) => (
        <tr key={index}>
            <td>{contact.title}</td>
            <td>{contact.name}</td>
            <td>{contact.bod}</td>
            <td>{contact.nationality}</td>
            <td width={100}>
                <Group>
                    <ActionIcon variant="subtle" onClick={open}>
                        <IconPencil size="1rem" />
                    </ActionIcon>
                    <ActionIcon
                        variant="subtle"
                        onClick={() => setDeleteConfirmOpened(true)}
                    >
                        <IconTrash size="1rem" />
                    </ActionIcon>
                </Group>
            </td>
        </tr>
    ));
    return (
        <>
            <BodyBg color="#f8f8f8" />
            <SupportBannerText text="My Awesome Journey" />
            <Container mt={'xl'} size={'xl'}>
                <Grid>
                    <Grid.Col span={9}>
                        <Paper withBorder>
                            <Group position="apart" p={'md'}>
                                <Title order={4} fw={400}>
                                    My Contacts
                                </Title>
                                <Button
                                    compact
                                    size="sm"
                                    variant="outline"
                                    onClick={open}
                                >
                                    New Contact
                                    {/* {mode === 'readonly' ? 'Edit' : 'Save'} */}
                                </Button>
                            </Group>
                            <Divider />
                            <Box p={'md'}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Name</th>
                                            <th>Birth Date</th>
                                            <th>Nationality</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>{rows}</tbody>
                                </Table>
                            </Box>
                            <Modal
                                opened={opened}
                                onClose={close}
                                title="New Contact"
                                size={'lg'}
                                padding="20px"
                            >
                                <ContactModal />
                            </Modal>
                            <Modal
                                opened={deleteConfirmOpened}
                                onClose={() => setDeleteConfirmOpened(false)}
                                // title="Delete Contact"
                                withCloseButton={false}
                                centered
                            >
                                <Text size="md" mt={10} mb={30}>
                                    Are you sure you want to delete this
                                    contact?
                                </Text>
                                <Flex justify={'end'} gap="md" mt={20}>
                                    <Button
                                        size={'sm'}
                                        variant="outline"
                                        color={'gray'}
                                        onClick={() =>
                                            setDeleteConfirmOpened(false)
                                        }
                                    >
                                        No don't delete
                                    </Button>
                                    <Button size={'sm'} color={'red'}>
                                        Delete Contact
                                    </Button>
                                </Flex>
                            </Modal>
                        </Paper>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <SidebarComp name="eddie" />
                    </Grid.Col>
                </Grid>
                {/* <Button onClick={openDeleteModal} color="red">
                    Delete account
                </Button> */}
            </Container>
        </>
    );
};

export default Contacts;

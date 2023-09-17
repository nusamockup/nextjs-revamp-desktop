import {
    Avatar,
    Button,
    Divider,
    Group,
    SimpleGrid,
    Text,
    Title,
    UnstyledButton,
} from '@ns-ui/core';
import { IconX } from '@tabler/icons';
import { IconBed, IconBedFilled, IconPlane } from '@tabler/icons-react';

const SearcHistory = () => {
    return (
        <>
            <Group position="apart">
                <Title order={5}>Search History</Title>
                <Button variant="subtle" rightIcon={<IconX size="1rem" />}>
                    Clear History
                </Button>
            </Group>
            <Divider my="sm" />
            <SimpleGrid cols={3}>
                <UnstyledButton
                    p={10}
                    sx={{
                        '&:hover': {
                            background: '#e2e8f0',
                        },
                    }}
                >
                    <Group>
                        <Avatar
                            size={40}
                            radius={'50%'}
                            sx={{
                                border: '1px solid #ccc',
                            }}
                        >
                            <IconBed size="1.5rem" />
                        </Avatar>
                        <div>
                            <Text>Hotels in Jakarta</Text>
                            <Text size="sm" color="dimmed">
                                1 Room, 2 Adults 4 Children, 11 Jul - 13 Jul 23
                            </Text>
                        </div>
                    </Group>
                </UnstyledButton>
                <UnstyledButton
                    p={10}
                    sx={{
                        '&:hover': {
                            background: '#e2e8f0',
                        },
                    }}
                >
                    <Group>
                        <Avatar
                            size={40}
                            radius={'50%'}
                            sx={{
                                border: '1px solid #ccc',
                            }}
                        >
                            <IconPlane size="1.5rem" />
                        </Avatar>
                        <div>
                            <Text>Jakarta (CGK) - Semarang (SRG)</Text>
                            <Text size="sm" color="dimmed">
                                1 Adult 0 Children 0 Infant, 23 Jul 23
                            </Text>
                        </div>
                    </Group>
                </UnstyledButton>
                <UnstyledButton
                    p={10}
                    sx={{
                        '&:hover': {
                            background: '#e2e8f0',
                        },
                    }}
                >
                    <Group>
                        <Avatar
                            size={40}
                            radius={'50%'}
                            sx={{
                                border: '1px solid #ccc',
                            }}
                        >
                            <IconPlane size="1.5rem" />
                        </Avatar>
                        <div>
                            <Text>Jakarta (CGK) - Semarang (SRG)</Text>
                            <Text size="sm" color="dimmed">
                                1 Adult 0 Children 0 Infant, 23 Jul 23
                            </Text>
                        </div>
                    </Group>
                </UnstyledButton>
                <UnstyledButton
                    p={10}
                    sx={{
                        '&:hover': {
                            background: '#e2e8f0',
                        },
                    }}
                >
                    <Group>
                        <Avatar
                            size={40}
                            radius={'50%'}
                            sx={{
                                border: '1px solid #ccc',
                            }}
                        >
                            <IconBed size="1.5rem" />
                        </Avatar>
                        <div>
                            <Text>Hotels in Jakarta</Text>
                            <Text size="sm" color="dimmed">
                                1 Room, 2 Adults 4 Children, 11 Jul - 13 Jul 23
                            </Text>
                        </div>
                    </Group>
                </UnstyledButton>
                <UnstyledButton
                    p={10}
                    sx={{
                        '&:hover': {
                            background: '#e2e8f0',
                        },
                    }}
                >
                    <Group>
                        <Avatar
                            size={40}
                            radius={'50%'}
                            sx={{
                                border: '1px solid #ccc',
                            }}
                        >
                            <IconPlane size="1.5rem" />
                        </Avatar>
                        <div>
                            <Text>Jakarta (CGK) - Semarang (SRG)</Text>
                            <Text size="sm" color="dimmed">
                                1 Adult 0 Children 0 Infant, 23 Jul 23
                            </Text>
                        </div>
                    </Group>
                </UnstyledButton>
                <UnstyledButton
                    p={10}
                    sx={{
                        '&:hover': {
                            background: '#e2e8f0',
                        },
                    }}
                >
                    <Group>
                        <Avatar
                            size={40}
                            radius={'50%'}
                            sx={{
                                border: '1px solid #ccc',
                            }}
                        >
                            <IconPlane size="1.5rem" />
                        </Avatar>
                        <div>
                            <Text>Jakarta (CGK) - Semarang (SRG)</Text>
                            <Text size="sm" color="dimmed">
                                1 Adult 0 Children 0 Infant, 23 Jul 23
                            </Text>
                        </div>
                    </Group>
                </UnstyledButton>
            </SimpleGrid>
        </>
    );
};

export default SearcHistory;

import { ActionIcon, TextInput, TextInputProps } from '@ns-ui/core';
import { IconArrowRight, IconMail, IconMailFilled } from '@tabler/icons-react';
import { FiMail } from 'react-icons/fi';

// const theme = useNsUITheme();

export default function SubInput(props: TextInputProps) {
    return (
        <>
            <TextInput
                // icon={<FiMail size={32} />}
                radius="xl"
                size="md"
                rightSection={
                    <ActionIcon
                        size={32}
                        radius="xl"
                        color="brand"
                        variant="filled"
                        sx={{
                            backgroundColor: '#0B2254',
                        }}
                    >
                        <IconArrowRight size="1.1rem" stroke={2} />
                    </ActionIcon>
                }
                placeholder="Email"
                rightSectionWidth={42}
                // rightSectionWidth={80}
                {...props}
            />
        </>
    );
}

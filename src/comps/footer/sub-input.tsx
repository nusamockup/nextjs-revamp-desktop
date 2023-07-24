import { ActionIcon, TextInput, TextInputProps } from '@ns-ui/core';
import { IconArrowRight, IconMail } from '@tabler/icons-react';

// const theme = useNsUITheme();

export default function SubInput(props: TextInputProps) {
    return (
        <>
            <TextInput
                icon={<IconMail size="1.1rem" stroke={1.5} />}
                radius="xl"
                size="md"
                rightSection={
                    <ActionIcon
                        size={32}
                        radius="xl"
                        color="brand"
                        variant="filled"
                    >
                        <IconArrowRight size="1.1rem" stroke={1.5} />
                    </ActionIcon>
                    // <Button radius="xl" fullWidth mr="4px">
                    //     Kirim
                    // </Button>
                }
                placeholder="Email"
                rightSectionWidth={42}
                // rightSectionWidth={80}
                {...props}
            />
        </>
    );
}

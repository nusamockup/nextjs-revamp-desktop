import { ThemeIcon } from '@ns-ui/core';
import { IconBed, IconPlane } from '@tabler/icons-react';

type MybookingIconProps = {
    // type: string;
    type: 'flight' | 'hotel';
};

const MybookingIcon = (props: MybookingIconProps) => {
    return (
        <>
            {props.type === 'flight' ? (
                <ThemeIcon
                    // variant="outline"
                    color="#FFF"
                    radius="xl"
                    size={46}
                    sx={{ border: '1px solid #dee2e6' }}
                >
                    <IconPlane color="grey" stroke={1.5} size={26} />
                </ThemeIcon>
            ) : (
                <ThemeIcon
                    // variant="outline"
                    color="#FFF"
                    radius="xl"
                    size={46}
                    sx={{ border: '1px solid #dee2e6' }}
                >
                    <IconBed color="grey" stroke={1.5} size={28} />
                </ThemeIcon>
            )}
        </>
    );
};

export default MybookingIcon;

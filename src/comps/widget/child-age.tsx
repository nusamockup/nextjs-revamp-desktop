import { Group, Select, Text } from '@ns-ui/core';
import React from 'react';

const childAgeData = Array(18)
    .fill(0)
    .map((_, index) => `${index} year`);

interface ChildAgeProps {
    label: string;
}

const ChildAge = ({ label, ...rest }: ChildAgeProps) => {
    return (
        <Group bg="#f8f9fa" sx={{ borderRadius: '5px' }}>
            <Text fw={500} fz={14} ml={8} sx={{ flex: '1' }}>
                {label}
            </Text>
            <Select
                maw={100}
                data={childAgeData}
                placeholder="Child Age"
                variant="unstyled"
                sx={{ textAlign: 'right' }}
            />
        </Group>
    );
};

export default ChildAge;

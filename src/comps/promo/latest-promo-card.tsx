import { Card, Group, Text } from '@ns-ui/core';
import Link from 'next/link';
import React from 'react';
import NsImage from '../ns-image/ns-image';

type LatestPromoProps = {
    url: string;
    img: string;
    title: string;
    desc: string;
};

const LatestPromoCard = (props: LatestPromoProps) => {
    return (
        <>
            <Card
                component={Link}
                href={props.url}
                shadow="sm"
                padding="lg"
                radius="md"
                // withBorder
            >
                <Card.Section>
                    <NsImage
                        src={props.img}
                        height={200}
                        // src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{props.title}</Text>
                </Group>
                <Text size="sm" color="dimmed">
                    {props.desc}
                </Text>
                {/* <Text size="sm" color="dimmed">
                    With Fjord Tours you can explore more of the magical fjord
                    landscapes with tours and activities on and around the
                    fjords of Norway
                </Text> */}
            </Card>
        </>
    );
};

export default LatestPromoCard;

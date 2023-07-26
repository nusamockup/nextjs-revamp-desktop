import {
    Badge,
    Card,
    Container,
    Group,
    SimpleGrid,
    Text,
    createStyles,
    rem,
    Space,
} from '@ns-ui/core';
import Image from 'next/image';
import SectionTitle from '../section-title/section-title';
import { choosedata } from '../constants';
import useStyles from './why-choose.styles';

const WhyChoose = () => {
    const { classes, theme } = useStyles();
    const features = choosedata.map((feature) => (
        <Card
            key={feature.title}
            // shadow="md"
            radius="md"
            className={classes.card}
            padding="xl"
        >
            {/* <feature.icon
                size={rem(50)}
                stroke={2}
                color={theme.fn.primaryColor()}
            /> */}
            <Image
                src={`/img/icons/${feature.icon}`}
                height={80}
                width={80}
                alt="Feature icon"
                className={classes.cardIcon}
            />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ));

    return (
        <>
            <Space h="64px" />
            <SectionTitle title="Why Choose Nusatrip" align="center" />
            <SimpleGrid cols={3} spacing="xl" mt={50}>
                {features}
            </SimpleGrid>
        </>
    );
};

export default WhyChoose;

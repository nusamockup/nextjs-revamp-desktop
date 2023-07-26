import { Box, Container, Space, Tabs, Title } from '@ns-ui/core';
import HotelBali from './hotel-section/hotel-bali';
import HotelJakarta from './hotel-section/hotel-jakarta';
import HotelTabs from './hotel-tabs';
import SectionTitle from '../section-title/section-title';
import HotelSeoul from './hotel-section/hotel-seoul';
import HotelBangkok from './hotel-section/hotel-bangkok';
import HotelSingapore from './hotel-section/hotel-singapore';

const HotelSection = () => {
    return (
        <>
            <Space h="64px" />
            <SectionTitle
                title="Popular Hotels and Accommodations"
                desc="Exploring new places and meeting strangers."
                sectionname="Hotels"
            />

            <HotelTabs defaultValue="Jakarta" keepMounted={false}>
                <Tabs.List>
                    <Tabs.Tab value="Jakarta">Jakarta</Tabs.Tab>
                    <Tabs.Tab value="Bali">Bali</Tabs.Tab>
                    <Tabs.Tab value="Seoul">Seoul</Tabs.Tab>
                    <Tabs.Tab value="Bangkok">Bangkok</Tabs.Tab>
                    <Tabs.Tab value="Singapore">Singapore</Tabs.Tab>
                </Tabs.List>

                <Box sx={{ marginTop: '20px' }}>
                    <Tabs.Panel value="Jakarta">
                        <HotelJakarta />
                    </Tabs.Panel>

                    <Tabs.Panel value="Bali">
                        <HotelBali />
                    </Tabs.Panel>

                    <Tabs.Panel value="Seoul">
                        <HotelSeoul />
                    </Tabs.Panel>

                    <Tabs.Panel value="Bangkok">
                        <HotelBangkok />
                    </Tabs.Panel>

                    <Tabs.Panel value="Singapore">
                        <HotelSingapore />
                    </Tabs.Panel>
                </Box>
            </HotelTabs>
        </>
    );
};

export default HotelSection;

import { Tabs } from '@ns-ui/core';
import {
    IconMessageCircle,
    IconPhoto,
    IconSettings,
} from '@tabler/icons-react';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const Test = dynamic(() => import('./test'), {
    ssr: false,
});

// import ReactTooltip from 'react-tooltip';

const WorldMap = () => {
    const [content, setContent] = useState('');
    return (
        <>
            <Tabs
                py={64}
                variant="pills"
                orientation="vertical"
                defaultValue="gallery"
                placement="right"
            >
                <Tabs.List>
                    <Tabs.Tab
                        value="gallery"
                        icon={<IconPhoto size="0.8rem" />}
                    >
                        Gallery
                    </Tabs.Tab>
                    <Tabs.Tab
                        value="messages"
                        icon={<IconMessageCircle size="0.8rem" />}
                    >
                        Messages
                    </Tabs.Tab>
                    <Tabs.Tab
                        value="settings"
                        icon={<IconSettings size="0.8rem" />}
                    >
                        Settings
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="gallery" pl="xs">
                    {/* <Test setTooltipContent={setContent} /> */}
                    {/* <ReactTooltip>{content}</ReactTooltip>; */}
                    {/* Gallery tab content */}
                    <Test />
                </Tabs.Panel>

                <Tabs.Panel value="messages" pl="xs">
                    Messages tab content
                </Tabs.Panel>

                <Tabs.Panel value="settings" pl="xs">
                    Settings tab content
                </Tabs.Panel>
            </Tabs>
        </>
    );
};

export default WorldMap;

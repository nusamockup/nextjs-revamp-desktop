import { css, Global } from '@emotion/react';
import { Flex, NavLink, ScrollArea } from '@ns-ui/core';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import $ from 'jquery';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { worldcountries } from '../constants/index';

const { getCode, getName, getData } = require('country-list');

const WorldMap = () => {
    const router = useRouter();
    const countriesData = getData();
    const [countryHovered, setCountryHovered] = useState('');

    // const obj = $('#world-map .jvectormap-container').data('mapObject');

    // const countries = worldcountries.map((country, index) => (
    //     <NavLink
    //         component="a"
    //         href={`https://en.wikipedia.org/wiki/${country.countryname}`}
    //         key={country.code}
    //         label={country.countryname}
    //         // onClick={() => setActive(index)}
    //         onMouseOver={() => {
    //             obj.regions[country.code].element.setHovered(true);
    //         }}
    //         onMouseOut={() => {
    //             obj.regions[country.code].element.setHovered(false);
    //         }}
    //     />
    // ));

    return (
        <>
            <div id="world-map">
                <Flex>
                    <VectorMap
                        // className="worldmap"
                        map={worldMill}
                        style={{
                            width: 'auto',
                            height: '400px',
                            flex: '1',
                        }}
                        backgroundColor="#FFF"
                        zoomOnScroll={false}
                        zoomAnimate={false}
                        zoomMax={4}
                        regionStyle={{
                            initial: {
                                fill: '#B5C1CF',
                            },
                            hover: {
                                fill: '#f37721',
                            },
                        }}
                        onRegionTipShow={(e, label, code) => {
                            if (code == 'GL') {
                                // event.preventDefault();
                                return false;
                            }
                        }}
                        onRegionClick={(event, code) => {
                            if (code == 'GL') {
                                // event.preventDefault();
                                return false;
                            }
                            const name = getName(code);
                            console.log(name);
                            router.push(
                                `https://en.wikipedia.org/wiki/${name}`
                            );
                        }}
                        focusOn={{
                            x: 0.5,
                            y: 0.5,
                            scale: 1,
                            animate: true,
                        }}
                        series={{
                            regions: [
                                {
                                    //@ts-ignore
                                    values: {
                                        GL: '#fff',
                                    },
                                    hover: {
                                        fill: '#fff',
                                    },
                                },
                            ],
                        }}
                    />
                    {/* <ScrollArea mx={10} h={380} maw={250}>
                        {countries}
                    </ScrollArea> */}
                </Flex>
                <Global
                    styles={css`
                        .jvectormap-zoomin,
                        .jvectormap-zoomout {
                            display: none;
                        }
                    `}
                />
            </div>
        </>
    );
};

export default WorldMap;

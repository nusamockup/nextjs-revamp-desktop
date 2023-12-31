import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import { css, Global } from '@emotion/react';
import $ from 'jquery';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const { getCode, getName, getData } = require('country-list');
const markerIcon = new leaflet.DivIcon({
    html: `<svg width="30" height="39" viewBox="0 0 30 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_f_14_114)">
    <ellipse cx="15" cy="35.2212" rx="5" ry="1.77885" fill="black" fill-opacity="0.2"/>
    </g>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 0C23.2843 0 30 6.6899 30 14.9423C30 21.2697 26.052 26.6785 20.476 28.8576L15.8544 35.1505C15.758 35.2822 15.6301 35.3897 15.4814 35.4639C15.3327 35.5382 15.1676 35.5769 15 35.5769C14.8324 35.5769 14.6673 35.5382 14.5186 35.4639C14.3699 35.3897 14.242 35.2822 14.1456 35.1505L9.52404 28.8576C3.94804 26.6785 0 21.2697 0 14.9423C0 6.6899 6.71573 0 15 0Z" fill="#F75751"/>
    <path d="M21.4286 14.9423C21.4286 11.4056 18.5504 8.53846 15 8.53846C11.4496 8.53846 8.57143 11.4056 8.57143 14.9423C8.57143 18.4791 11.4496 21.3462 15 21.3462C18.5504 21.3462 21.4286 18.4791 21.4286 14.9423Z" fill="#BE2E28"/>
    <defs>
    <filter id="filter0_f_14_114" x="8" y="31.4423" width="14" height="7.55769" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_14_114"/>
    </filter>
    </defs>
    </svg>
    `,
    iconSize: [30, 37],
    iconAnchor: [30 / 2, 37],
    className: 'icon',
});
const countriesData = getData();

const LeafletMap = () => {
    const obj = $('#world-map .jvectormap-container').data('mapObject');
    const router = useRouter();
    const [countryHovered, setCountryHovered] = useState('');
    // console.log(mapData);
    // let zoomOffset = 2;
    return (
        <>
            <div id="world-map">
                <Global
                    styles={css`
                        .jvectormap-zoomin,
                        .jvectormap-zoomout {
                            display: none;
                        }
                    `}
                />
                <MapContainer
                    center={[-6.185429590208423, 106.82383347684544]}
                    zoom={14}
                    scrollWheelZoom={false}
                    style={{ height: '210px', width: '97%' }}
                    dragging={false}
                    zoomControl={false}
                >
                    <TileLayer
                        url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                        // url="/map-tiles/{z}/{x}/{y}"
                        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
                        // detectRetina={true}

                        // zoomOffset={zoomOffset}
                        // tileSize={256 / Math.pow(2, zoomOffset)}
                        // maxZoom={20}
                    />
                    <Marker
                        position={[-6.185429590208423, 106.82383347684544]}
                        icon={markerIcon}
                    >
                        <Popup>Sari Pan Pacific Hotel</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    );
};

export default LeafletMap;

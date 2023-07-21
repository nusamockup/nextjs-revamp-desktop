import { rem } from '@ns-ui/core';
import { NsLogoProps } from './nslogo';

export function NsLogoOnlyWhite({ size, ...others }: NsLogoProps) {
    const colors = {
        nsblue: '#0a73b7',
        nsorange: '#f37721',
        white: '#fff',
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            fill="none"
            width={rem(size)}
            height={rem(size)}
            {...others}
        >
            <path d="M26 47.91h.29Z" fill="rgba(0,0,0,.08)" />

            <path
                d="M23.75 35.18c.43-.38.88-.76 1.35-1.11s1.05-.77 1.62-1.17h.06c4.14-2.85 9.6-6 13.8-9.6l.2-.17.2-.18.2-.18.2-.18.21-.19.5-.48.18-.18.18-.18a16.19 16.19 0 0 0 4-6c-.19-.52-.41-1-.64-1.54a.47.47 0 0 1-.05-.1s0 0 0 .06a12.61 12.61 0 0 1-2.55 4.38 20.19 20.19 0 0 1-4.64 4.15c-2.28 1.25-13.84 7.55-14.35 8.49-1.13-.51-10.85-4.07-16.37-3.87a35.29 35.29 0 0 0-4.09.3 3.63 3.63 0 0 0-2.64 1.5l-.44.54v.06l.08.47a24 24 0 0 0 15.86 16.84 23.59 23.59 0 0 1 7.13-11.66ZM47.92 22v-.18c-.07-.76-.17-1.51-.31-2.25-.62 2.76-2.52 6.77-8.23 11.53-.71.59-1.36 1.19-2 1.78l-.15.15-.21.21a24.52 24.52 0 0 0-4.37 5.87l-.09.18a1.62 1.62 0 0 1-.1.18l-.09.2-.12.25a15.26 15.26 0 0 0-1.58 7.12 23.71 23.71 0 0 0 4.91-2 26.94 26.94 0 0 1 4.09-10.09c2.85-4.16 6.94-8.32 8.25-12.95ZM47 27.36c-.15.29-.31.58-.48.86-2.94 4.87-7.09 9.64-7.63 14.58A24 24 0 0 0 48 25.08a15.87 15.87 0 0 1-1 2.28Z"
                fill={colors.white}
            />

            <path
                d="M44 24.06a20.66 20.66 0 0 0 3.24-6.27c-.15-.56-.32-1.11-.51-1.66l-.11-.13c-.55 2.47-2.52 7.1-9.73 12.26C26.52 35.63 22.79 40 21.4 47.86h.2A23.81 23.81 0 0 0 24 48c.79 0 1.57 0 2.33-.11.05-.22.11-.49.19-.8.16-.64.36-1.45.63-2.34a.19.19 0 0 0 0-.07 23.83 23.83 0 0 1 3.17-6.87C33.92 32.81 41.8 27 44 24.06Z"
                fill={colors.white}
            />

            <path
                d="M36.89 28.23c7.21-5.16 9.18-9.79 9.73-12.26 0-.15-.1-.29-.16-.44a16.19 16.19 0 0 1-4 6l-.18.18-.18.18-.5.48-.21.19-.2.18-.2.18-.2.18-.2.17c-4.2 3.63-9.66 6.75-13.8 9.6h-.06c-.57.4-1.11.78-1.62 1.17s-.92.73-1.35 1.11a23.59 23.59 0 0 0-7.13 11.66 23.62 23.62 0 0 0 4.78 1c1.38-7.81 5.11-12.18 15.48-19.58Z"
                fill="rgba(0,0,0,.08)"
            />

            <path
                d="m37.19 33.06.15-.15c.61-.59 1.26-1.19 2-1.78 5.71-4.76 7.61-8.77 8.23-11.53-.11-.59-.25-1.18-.4-1.76A20.66 20.66 0 0 1 44 24.06c-2.15 3-10 8.75-13.61 13.73a23.83 23.83 0 0 0-3.17 6.87.19.19 0 0 1 0 .07c-.27.89-.47 1.7-.63 2.34-.08.31-.14.58-.19.8a24.39 24.39 0 0 0 4.3-.82A15.26 15.26 0 0 1 32.21 40l.12-.25.09-.2a1.62 1.62 0 0 0 .1-.18l.09-.18A24.52 24.52 0 0 1 37 33.27ZM47.92 22c-1.31 4.65-5.4 8.81-8.25 13a26.94 26.94 0 0 0-4.09 10 24 24 0 0 0 3.32-2.22c.54-4.94 4.69-9.71 7.63-14.58.17-.28.33-.57.48-.86a15.87 15.87 0 0 0 1-2.28v-1.08c-.01-.66-.01-1.33-.09-1.98ZM38.54 22.43a20.19 20.19 0 0 0 4.64-4.15 12.61 12.61 0 0 0 2.55-4.38c-.94 1.67-5.52 3.67-7.31 3.86a35.47 35.47 0 0 1-5.63-.41s1.74-.61 1.74-1.93-2.45-1.94-2.45-1.94.61.65.61 1.12c0 1.53-3.07 2.34-4.3 2.44a1.18 1.18 0 0 0-.1-.61 1.37 1.37 0 0 0-1.74-.71c.1 0 .1.1.21.2l.1.15a.72.72 0 0 1-.31 1c-.41.31-1.12.21-5.42.41-4 .19-6.53 4.26-6.91 4.9-.12-.09-1.09-.15-6.19.49a8.17 8.17 0 0 0-7.44 6.46.85.85 0 0 0 0 .17v-.06l.44-.54a3.63 3.63 0 0 1 2.64-1.5 35.29 35.29 0 0 1 4.09-.3c5.52-.2 15.24 3.36 16.37 3.87.6-.91 12.16-7.21 14.41-8.54Zm-15 1.94a2.41 2.41 0 0 1-1.43 1.22 4 4 0 0 1-1.84.2 3.42 3.42 0 0 1-2.56-2.54 3.79 3.79 0 0 1 .29-1.83.14.14 0 0 1 0-.06 1.4 1.4 0 0 0 .4.89 1.65 1.65 0 0 0 .72.4 2.28 2.28 0 0 0 .82-.1 1.51 1.51 0 0 0 .61-.51 2.26 2.26 0 0 0 .21-.81 1.47 1.47 0 0 0-.21-.71.35.35 0 0 0-.05-.08 1.37 1.37 0 0 0-1.31-.56 3.14 3.14 0 0 1 1.75-.5 3.21 3.21 0 0 1 3.25 3.16 2.78 2.78 0 0 1-.61 1.83Z"
                fill="rgba(0,0,0,.08)"
            />

            <path
                d="M21 19.38a3.14 3.14 0 0 0-1.75.5 1.37 1.37 0 0 1 1.31.56.35.35 0 0 1 .05.08 1.47 1.47 0 0 1 .21.71 2.26 2.26 0 0 1-.21.81 1.51 1.51 0 0 1-.61.51 2.28 2.28 0 0 1-.82.1 1.65 1.65 0 0 1-.72-.4 1.4 1.4 0 0 1-.4-.89.14.14 0 0 0 0 .06 3.79 3.79 0 0 0-.21 1.83 3.42 3.42 0 0 0 2.56 2.54 4 4 0 0 0 1.84-.2 2.41 2.41 0 0 0 1.43-1.22 2.78 2.78 0 0 0 .62-1.83 3.21 3.21 0 0 0-3.3-3.16Z"
                fill={colors.white}
            />

            <path
                d="M24 0A24 24 0 0 0 .6 29.33 8.15 8.15 0 0 1 8 22.84c5.1-.64 6.07-.58 6.19-.49.38-.64 3-4.71 6.91-4.9 4.3-.2 5-.1 5.42-.41a.72.72 0 0 0 .31-1l-.1-.15c-.11-.1-.11-.2-.21-.2a1.37 1.37 0 0 1 1.74.71 1.18 1.18 0 0 1 .1.61c1.23-.1 4.3-.91 4.3-2.44 0-.47-.61-1.12-.61-1.12s2.45.61 2.45 1.94-1.74 1.93-1.74 1.93a35.47 35.47 0 0 0 5.63.41c1.79-.19 6.37-2.19 7.31-3.86v-.06A24 24 0 0 0 24 0Z"
                fill={colors.white}
            />
        </svg>
    );
}

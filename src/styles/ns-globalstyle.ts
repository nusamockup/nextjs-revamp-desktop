import { css } from '@emotion/react';

export const NsGlobalStyles = css`
    button {
        background-color: green !important;
    }
    .some-class {
        color: hotpink;
    }
    body {
        min-width: 1024px;
        overflow-y: scroll;
    }
`;

// export function NsGlobalStyles({ theme }: { theme: NsUITheme }) {
//     return (
//         <Global
//             styles={{
//                 button: {
//                     color: 'green',
//                 },
//             }}
//         />
//     );
// }

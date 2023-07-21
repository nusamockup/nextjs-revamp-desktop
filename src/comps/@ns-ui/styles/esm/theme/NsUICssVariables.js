import React from 'react';
import { Global } from '@emotion/react';
import { rem } from './utils/rem/rem.js';

function assignSizeVariables(variables, sizes, name) {
    Object.keys(sizes).forEach((size) => {
        variables[`--ns_ui-${name}-${size}`] = rem(sizes[size]);
    });
}
function NsUICssVariables({ theme }) {
    const variables = {
        '--ns_ui-color-white': theme.white,
        '--ns_ui-color-black': theme.black,
        '--ns_ui-transition-timing-function': theme.transitionTimingFunction,
        '--ns_ui-line-height': `${theme.lineHeight}`,
        '--ns_ui-font-family': theme.fontFamily,
        '--ns_ui-font-family-monospace': theme.fontFamilyMonospace,
        '--ns_ui-font-family-headings': theme.headings.fontFamily,
        '--ns_ui-heading-font-weight': `${theme.headings.fontWeight}`,
    };
    assignSizeVariables(variables, theme.shadows, 'shadow');
    assignSizeVariables(variables, theme.fontSizes, 'font-size');
    assignSizeVariables(variables, theme.radius, 'radius');
    assignSizeVariables(variables, theme.spacing, 'spacing');
    Object.keys(theme.colors).forEach((color) => {
        theme.colors[color].forEach((shade, index) => {
            variables[`--ns_ui-color-${color}-${index}`] = shade;
        });
    });
    const headings = theme.headings.sizes;
    Object.keys(headings).forEach((heading) => {
        variables[`--ns_ui-${heading}-font-size`] = headings[heading].fontSize;
        variables[
            `--ns_ui-${heading}-line-height`
        ] = `${headings[heading].lineHeight}`;
    });
    return /* @__PURE__ */ React.createElement(Global, {
        styles: {
            ':root': variables,
        },
    });
}

export { NsUICssVariables };

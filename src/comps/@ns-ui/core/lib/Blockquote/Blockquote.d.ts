import React from 'react';
import { DefaultProps, NsUIColor, Selectors } from '@ns-ui/styles';
import useStyles, { BlockquoteStylesParams } from './Blockquote.styles';
export type BlockquoteStylesNames = Selectors<typeof useStyles>;
export interface BlockquoteProps extends DefaultProps<BlockquoteStylesNames, BlockquoteStylesParams>, Omit<React.ComponentPropsWithoutRef<'blockquote'>, 'cite'> {
    variant?: string;
    /** Icon color from theme */
    color?: NsUIColor;
    /** Icon, defaults to quote icon */
    icon?: React.ReactNode;
    /** Describe a reference to a cited quote */
    cite?: React.ReactNode;
}
export declare const Blockquote: React.ForwardRefExoticComponent<BlockquoteProps & React.RefAttributes<HTMLQuoteElement>>;
//# sourceMappingURL=Blockquote.d.ts.map
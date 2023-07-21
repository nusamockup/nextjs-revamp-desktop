import React from 'react';
import { DefaultProps, NsUINumberSize, NsUIColor, NsUITheme } from '@ns-ui/styles';
export interface LoaderProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'svg'>, 'display' | 'opacity'> {
    /** Defines width of loader */
    size?: NsUINumberSize;
    /** Loader color from theme */
    color?: NsUIColor;
    /** Loader appearance */
    variant?: NsUITheme['loader'];
}
export declare function Loader(props: LoaderProps): JSX.Element;
export declare namespace Loader {
    var displayName: string;
}
//# sourceMappingURL=Loader.d.ts.map
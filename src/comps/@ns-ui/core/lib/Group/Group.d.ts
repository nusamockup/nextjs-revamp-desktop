import React from 'react';
import { DefaultProps, NsUINumberSize } from '@ns-ui/styles';
import { GroupPosition } from './Group.styles';
export interface GroupProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    variant?: string;
    /** Defines justify-content property */
    position?: GroupPosition;
    /** Defined flex-wrap property */
    noWrap?: boolean;
    /** Defines flex-grow property for each element, true -> 1, false -> 0 */
    grow?: boolean;
    /** Space between elements */
    spacing?: NsUINumberSize;
    /** Defines align-items css property */
    align?: React.CSSProperties['alignItems'];
}
export declare const Group: React.ForwardRefExoticComponent<GroupProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Group.d.ts.map
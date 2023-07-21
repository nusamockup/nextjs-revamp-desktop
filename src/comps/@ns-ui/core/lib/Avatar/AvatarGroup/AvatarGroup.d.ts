import React from 'react';
import { DefaultProps, NsUINumberSize } from '@ns-ui/styles';
export interface AvatarGroupProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
    variant?: string;
    /** Avatar components */
    children: React.ReactNode;
    /** Negative space between Avatars */
    spacing?: NsUINumberSize;
}
export declare const AvatarGroup: React.ForwardRefExoticComponent<AvatarGroupProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=AvatarGroup.d.ts.map
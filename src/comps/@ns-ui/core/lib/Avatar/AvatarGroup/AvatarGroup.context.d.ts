import React from 'react';
import { NsUINumberSize } from '@ns-ui/styles';
interface ContextValue {
    spacing: NsUINumberSize;
}
interface AvatarGroupProviderProps extends ContextValue {
    children: React.ReactNode;
}
export declare function AvatarGroupProvider({ spacing, children }: AvatarGroupProviderProps): JSX.Element;
export declare function useAvatarGroupContext(): {
    withinGroup: boolean;
    spacing: NsUINumberSize;
};
export {};
//# sourceMappingURL=AvatarGroup.context.d.ts.map
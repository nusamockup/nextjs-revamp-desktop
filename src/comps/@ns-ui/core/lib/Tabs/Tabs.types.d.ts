import { NsUIColor, NsUINumberSize, Variants } from '@ns-ui/styles';
export type TabsValue = string | null;
export type TabsOrientation = 'horizontal' | 'vertical';
export type TabsVariant = Variants<'default' | 'outline' | 'pills'>;
export type TabsPosition = 'left' | 'center' | 'right' | 'apart';
export type TabsPlacement = 'right' | 'left';
export interface TabsStylesParams {
    placement: TabsPlacement;
    orientation: TabsOrientation;
    color?: NsUIColor;
    radius?: NsUINumberSize;
    inverted: boolean;
}
//# sourceMappingURL=Tabs.types.d.ts.map
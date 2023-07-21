import { NsUIColor, NsUINumberSize } from '@ns-ui/styles';
interface TimelineItemStyles {
    bulletSize: number;
    color: NsUIColor;
    radius: NsUINumberSize;
    align: 'right' | 'left';
    lineVariant: 'solid' | 'dashed' | 'dotted';
    lineWidth: number;
}
declare const _default: (params: TimelineItemStyles, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        itemBody: string;
        itemContent: string;
        itemBullet: string;
        item: string;
        itemTitle: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=TimelineItem.styles.d.ts.map
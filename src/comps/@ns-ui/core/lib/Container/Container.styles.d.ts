import { NsUISize } from '@ns-ui/styles';
export interface ContainerStylesParams {
    fluid: boolean;
    sizes: Record<NsUISize, number | string>;
}
declare const _default: (params: ContainerStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        root: string;
    };
    cx: (...args: any) => string;
    theme: import("@ns-ui/styles").NsUITheme;
};
export default _default;
//# sourceMappingURL=Container.styles.d.ts.map
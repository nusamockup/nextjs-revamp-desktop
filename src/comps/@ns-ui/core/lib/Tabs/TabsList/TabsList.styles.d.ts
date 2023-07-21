import { NsUITheme } from '@ns-ui/styles';
import { TabsStylesParams, TabsPosition } from '../Tabs.types';
interface TabsListStylesParams extends TabsStylesParams {
    grow: boolean;
    position: TabsPosition;
}
declare const _default: (params: TabsListStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        tabsList: string;
    };
    cx: (...args: any) => string;
    theme: NsUITheme;
};
export default _default;
//# sourceMappingURL=TabsList.styles.d.ts.map
import { NsUITheme } from '@ns-ui/styles';
import { AccordionStylesParams, AccordionChevronPosition } from '../Accordion.types';
export interface AccordionControlStylesParams extends AccordionStylesParams {
    chevronPosition: AccordionChevronPosition;
    transitionDuration: number;
    chevronSize: number | string;
}
declare const _default: (params: AccordionControlStylesParams, options?: import("@ns-ui/styles").UseStylesOptions<string>) => {
    classes: {
        icon: string;
        chevron: string;
        label: string;
        itemTitle: string;
        control: string;
    };
    cx: (...args: any) => string;
    theme: NsUITheme;
};
export default _default;
//# sourceMappingURL=AccordionControl.styles.d.ts.map
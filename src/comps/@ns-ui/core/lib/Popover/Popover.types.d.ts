/// <reference types="react" />
import { Selectors } from '@ns-ui/styles';
import useStyles from './PopoverDropdown/PopoverDropdown.styles';
export type { PopoverStylesParams } from './PopoverDropdown/PopoverDropdown.styles';
export type PopoverStylesNames = Selectors<typeof useStyles>;
export type PopoverWidth = 'target' | React.CSSProperties['width'];
export interface PopoverMiddlewares {
    shift: boolean;
    flip: boolean;
    inline?: boolean;
}
//# sourceMappingURL=Popover.types.d.ts.map
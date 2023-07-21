/// <reference types="react" />
import { NsUISize } from '@ns-ui/styles';
interface CheckboxGroupContextValue {
    value: string[];
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    size: NsUISize;
}
export declare const CheckboxGroupProvider: import("react").Provider<CheckboxGroupContextValue>;
export declare const useCheckboxGroupContext: () => CheckboxGroupContextValue;
export {};
//# sourceMappingURL=CheckboxGroup.context.d.ts.map
/// <reference types="react" />
import { NsUISize } from '@ns-ui/styles';
interface RadioGroupContextValue {
    size: NsUISize;
    value: string;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    name: string;
}
export declare const RadioGroupProvider: import("react").Provider<RadioGroupContextValue>;
export declare const useRadioGroupContext: () => RadioGroupContextValue;
export {};
//# sourceMappingURL=RadioGroup.context.d.ts.map
/// <reference types="react" />
import { NsUISize } from '@ns-ui/styles';
interface SwitchGroupContextValue {
    value: string[];
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
    size: NsUISize;
}
export declare const SwitchGroupProvider: import("react").Provider<SwitchGroupContextValue>;
export declare const useSwitchGroupContext: () => SwitchGroupContextValue;
export {};
//# sourceMappingURL=SwitchGroup.context.d.ts.map
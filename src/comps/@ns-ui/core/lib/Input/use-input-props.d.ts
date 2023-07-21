import { DefaultProps, NsUIStyleSystemProps } from '@ns-ui/styles';
import { InputWrapperBaseProps } from './InputWrapper/InputWrapper';
import { InputSharedProps } from './Input';
interface BaseProps extends InputWrapperBaseProps, InputSharedProps, DefaultProps {
    __staticSelector?: string;
    id?: string;
}
export declare function useInputProps<T extends BaseProps, U extends Partial<T>>(component: string, defaultProps: U, props: T): Omit<T & { [Key in Extract<keyof T, never>]-?: {}[Key] | NonNullable<T[Key]>; }, "size" | "style" | "className" | "sx" | "classNames" | "styles" | "unstyled" | "label" | "variant" | "id" | "required" | "__staticSelector" | "error" | "description" | "withAsterisk" | "labelProps" | "descriptionProps" | "errorProps" | "inputContainer" | "inputWrapperOrder" | "wrapperProps"> & {
    classNames: Partial<Record<never, string>>;
    styles: import("@ns-ui/styles").Styles<never, Record<string, any>>;
    unstyled: boolean;
    wrapperProps: {
        label: import("react").ReactNode;
        description: import("react").ReactNode;
        error: import("react").ReactNode;
        required: boolean;
        classNames: Partial<Record<never, string>>;
        className: string;
        __staticSelector: string;
        sx: import("@ns-ui/styles").Sx | import("@ns-ui/styles").Sx[];
        errorProps: Record<string, any>;
        labelProps: Record<string, any>;
        descriptionProps: Record<string, any>;
        unstyled: boolean;
        styles: import("@ns-ui/styles").Styles<never, Record<string, any>>;
        id: string;
        size: import("@ns-ui/styles").NsUISize;
        style: import("react").CSSProperties;
        inputContainer: (children: import("react").ReactNode) => import("react").ReactNode;
        inputWrapperOrder: ("input" | "label" | "error" | "description")[];
        withAsterisk: boolean;
        variant: import("@ns-ui/styles").Variants<"default" | "filled" | "unstyled">;
    } & NsUIStyleSystemProps;
    inputProps: {
        required: boolean;
        classNames: Partial<Record<never, string>>;
        styles: import("@ns-ui/styles").Styles<never, Record<string, any>>;
        unstyled: boolean;
        id: string;
        size: import("@ns-ui/styles").NsUISize;
        __staticSelector: string;
        error: import("react").ReactNode;
        variant: import("@ns-ui/styles").Variants<"default" | "filled" | "unstyled">;
    };
};
export {};
//# sourceMappingURL=use-input-props.d.ts.map
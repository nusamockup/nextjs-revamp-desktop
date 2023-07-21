import React from 'react';
import { NsUINumberSize } from '@ns-ui/styles';
import { PaperProps } from '../Paper/Paper';
import { CardSection } from './CardSection/CardSection';
export interface CardProps extends PaperProps {
    variant?: string;
    /** Card padding used to offset Card.Section, use it instead of p prop */
    padding?: NsUINumberSize;
    /** Card content */
    children: React.ReactNode;
}
export declare const _Card: any;
export declare const Card: (<C = "div">(props: import("@ns-ui/utils").PolymorphicComponentProps<C, CardProps>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>) & Omit<React.FunctionComponent<(CardProps & {
    component?: any;
} & Omit<Pick<any, string | number | symbol>, "component" | keyof CardProps> & {
    ref?: any;
}) | (CardProps & {
    component: React.ElementType<any>;
})>, never> & {
    Section: typeof CardSection;
};
//# sourceMappingURL=Card.d.ts.map
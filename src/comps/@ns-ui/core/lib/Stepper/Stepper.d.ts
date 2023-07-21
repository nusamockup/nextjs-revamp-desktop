import React from 'react';
import { NsUIColor, DefaultProps, NsUINumberSize, NsUISize, Selectors } from '@ns-ui/styles';
import { ForwardRefWithStaticComponents } from '@ns-ui/utils';
import { Step, StepStylesNames, StepFragmentComponent } from './Step/Step';
import { StepCompleted } from './StepCompleted/StepCompleted';
import useStyles from './Stepper.styles';
export type StepperStylesNames = Selectors<typeof useStyles> | StepStylesNames;
export interface StepperProps extends DefaultProps<StepperStylesNames>, React.ComponentPropsWithRef<'div'> {
    variant?: string;
    /** <Stepper.Step /> components only */
    children: React.ReactNode;
    /** Called when step is clicked */
    onStepClick?(stepIndex: number): void;
    /** Active step index */
    active: number;
    /** Step icon, defaults to step index + 1 when rendered within Stepper */
    icon?: React.ReactNode | StepFragmentComponent;
    /** Step icon displayed when step is completed */
    completedIcon?: React.ReactNode | StepFragmentComponent;
    /** Step icon displayed when step is in progress */
    progressIcon?: React.ReactNode | StepFragmentComponent;
    /** Active and progress Step colors from theme.colors */
    color?: NsUIColor;
    /** Step icon size */
    iconSize?: number;
    /** Key of theme.spacing or any valid CSS value to set content padding-top */
    contentPadding?: NsUINumberSize;
    /** Component orientation */
    orientation?: 'vertical' | 'horizontal';
    /** Icon position relative to step body */
    iconPosition?: 'right' | 'left';
    /** Component size */
    size?: NsUISize;
    /** Key of theme.radius or any valid CSS value to set border-radius, "xl" by default */
    radius?: NsUINumberSize;
    /** Breakpoint at which orientation will change from horizontal to vertical */
    breakpoint?: NsUINumberSize;
    /** Whether to enable click on upcoming steps by default. Defaults to true **/
    allowNextStepsSelect?: boolean;
}
type StepperComponent = ForwardRefWithStaticComponents<StepperProps, {
    Step: typeof Step;
    Completed: typeof StepCompleted;
}>;
export declare const Stepper: StepperComponent;
export {};
//# sourceMappingURL=Stepper.d.ts.map
import React from 'react';
import { NsLogoOnly } from './nslogo-only';
import { NsLogoOnlyWhite } from './nslogo-only-white';
import { NsLogoText } from './nslogo-text';
import { NsLogoTextWhite } from './nslogo-text-white';

export interface NsLogoProps extends React.ComponentPropsWithoutRef<'svg'> {
    type?: 'mark' | 'full';
    size?: number | string;
    monotone?: boolean;
}

export function NsLogo({ type, monotone, ...others }: NsLogoProps) {
    if (type === 'mark') {
        if (monotone) {
            return <NsLogoOnlyWhite {...others} />;
        }
        return <NsLogoOnly {...others} />;
    }
    if (monotone) {
        return <NsLogoTextWhite {...others} />;
    }
    if (type === 'full') {
        if (monotone) {
            return <NsLogoTextWhite {...others} />;
        }
        return <NsLogoText {...others} />;
    }
    return <NsLogoText {...others} />;
}

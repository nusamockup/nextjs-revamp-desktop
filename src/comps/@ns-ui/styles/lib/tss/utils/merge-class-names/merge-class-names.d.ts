import type { EmotionCache } from '@emotion/cache';
import { useNsUIProviderStyles } from '../../../theme/NsUIProvider';
interface Input<T extends Record<string, string>> {
    cx(...classNames: any): string;
    classes: T;
    context: ReturnType<typeof useNsUIProviderStyles>;
    classNames: Partial<T>;
    name: string | string[];
    cache: EmotionCache;
}
export declare function mergeClassNames<T extends Record<string, string>>({ cx, classes, context, classNames, name, cache, }: Input<T>): T;
export {};
//# sourceMappingURL=merge-class-names.d.ts.map
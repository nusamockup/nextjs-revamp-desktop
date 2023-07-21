import type { NsUITheme } from './index';
import '@emotion/react';

declare module '@emotion/react' {
  export type Theme = NsUITheme;
}

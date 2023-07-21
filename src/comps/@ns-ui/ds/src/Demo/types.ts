type NsUIDemoControlType =
  | 'boolean'
  | 'color'
  | 'select'
  | 'string'
  | 'size'
  | 'number'
  | 'segmented';

interface NsUIDemoControlProps {
  type: NsUIDemoControlType;
  name: string;
  label?: string;
  initialValue?: any;
  defaultValue?: any;
  capitalize?: boolean;
  data?: { label: string; value: string }[];
  min?: number;
  max?: number;
  step?: number;
}

interface NsUIDemoBase {
  component?: React.FC;
  wrapper?: React.FC<{ children: React.ReactNode }>;
  code?: string;
  background?: (colorScheme: 'light' | 'dark') => string;
}

interface NsUICodeDemo extends NsUIDemoBase {
  type: 'demo';
  demoProps?: {
    zIndex?: React.CSSProperties['zIndex'];
    spacing?: boolean;
    demoBackground?: string;
    toggle?: boolean;
    githubLink?: string;
    inline?: boolean;
  };
}

interface NsUIConfiguratorDemo extends NsUIDemoBase {
  type: 'configurator';
  codeTemplate(props: string, children?: string): string;
  configurator?: NsUIDemoControlProps[];
  configuratorProps?: {
    previewBackground?: string;
    multiline?: boolean | number;
    includeCode?: boolean;
    filter?: string[];
    center?: boolean;
  };
}

export type NsUIDemo = NsUICodeDemo | NsUIConfiguratorDemo;

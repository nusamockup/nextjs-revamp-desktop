import { createSafeContext } from '@ns-ui/utils';
import { TABS_ERRORS } from './Tabs.errors.js';

const [TabsContextProvider, useTabsContext] = createSafeContext(TABS_ERRORS.context);

export { TabsContextProvider, useTabsContext };
//# sourceMappingURL=Tabs.context.js.map

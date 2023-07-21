import { createSafeContext } from '@ns-ui/utils';
import { MENU_ERRORS } from './Menu.errors.js';

const [MenuContextProvider, useMenuContext] = createSafeContext(MENU_ERRORS.context);

export { MenuContextProvider, useMenuContext };
//# sourceMappingURL=Menu.context.js.map

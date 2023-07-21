import createEmotionServer from '@emotion/server/create-instance';
import { defaultNsUIEmotionCache } from '@ns-ui/styles';

function createStylesServer(cache) {
  return createEmotionServer(cache || defaultNsUIEmotionCache);
}

export { createStylesServer };
//# sourceMappingURL=create-styles-server.js.map

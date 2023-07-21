import { defaultNsUIEmotionCache } from './default-emotion-cache.js';
import { useNsUIEmotionCache } from '../theme/NsUIProvider.js';

function useEmotionCache() {
  const cache = useNsUIEmotionCache();
  return cache || defaultNsUIEmotionCache;
}

export { useEmotionCache };
//# sourceMappingURL=use-emotion-cache.js.map

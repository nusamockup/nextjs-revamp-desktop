import createCache from '@emotion/cache';

const defaultNsUIEmotionCache = createCache({ key: 'ns', prepend: false });

export { defaultNsUIEmotionCache };

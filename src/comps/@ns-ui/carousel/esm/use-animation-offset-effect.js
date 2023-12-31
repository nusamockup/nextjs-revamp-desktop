import { useEffect } from 'react';

function useAnimationOffsetEffect(embla, transitionDuration) {
  useEffect(() => {
    if (embla) {
      window.setTimeout(() => {
        embla.reInit();
      }, transitionDuration);
    }
  }, [embla, transitionDuration]);
}

export { useAnimationOffsetEffect };
//# sourceMappingURL=use-animation-offset-effect.js.map

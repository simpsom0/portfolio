import React, { useCallback, useMemo, useState } from 'react';
import { IconActivityContext } from './use-icon-activity';
import type { IconKeyType } from '@/types/icons/iconKey.d';

export type IconActivityState = {
  iconActivity: Set<IconKeyType>;
  setIconActivity: (iconKeys: IconKeyType[]) => void;
};

function IconActivityProvider({ children }: React.PropsWithChildren) {
  const [internalIconActivity, setInternalIconActivity] = useState<
    Set<IconKeyType>
  >(new Set());

  const setIconActivity = useCallback((iconKeys: IconKeyType[]) => {
    setInternalIconActivity((prev) => {
      // Shallow equality check, only update if size or keys are different
      if (prev.size === iconKeys.length && iconKeys.every((k) => prev.has(k))) {
        return prev;
      }
      return new Set(iconKeys);
    });
  }, []);

  const IconActivityContextValue: IconActivityState = useMemo(
    () => ({
      iconActivity: internalIconActivity,
      setIconActivity: setIconActivity,
    }),
    [internalIconActivity, setIconActivity]
  );

  return (
    <IconActivityContext.Provider value={IconActivityContextValue}>
      {children}
    </IconActivityContext.Provider>
  );
}

export default IconActivityProvider;

import React, { useCallback, useMemo, useState } from 'react';
import { IconActivityContext } from './use-icon-activity';

export const IconKey = {
  Angular: 0,
  Vue: 1,
  Sass: 2,
  Tailwind: 3,
  Python: 4,
  Go: 5,
  Sql: 6,
  Postgres: 7,
  Sqlite: 8,
  React: 9,
  Typescript: 10,
  Html: 11,
  Css: 12,
  CSharp: 13,
  Git: 14,
  Azure: 15,
  Aws: 16,
  Databricks: 17,
  Docker: 18,
} as const;
export type IconKeyType = (typeof IconKey)[keyof typeof IconKey];

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

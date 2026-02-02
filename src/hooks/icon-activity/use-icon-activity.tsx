import { createContext, useContext } from 'react';
import type { IconActivityState } from '@/hooks/icon-activity/icon-activity-provider';

const initalIconActivity: IconActivityState = {
  iconActivity: new Set(),
  setIconActivity: () => null,
};

export const IconActivityContext = createContext(initalIconActivity);

export const useIconActivity = () => {
  const context = useContext(IconActivityContext);

  if (context === undefined)
    throw new Error(
      'useIconActivity must be used within a IconActivityProvider'
    );

  return context;
};

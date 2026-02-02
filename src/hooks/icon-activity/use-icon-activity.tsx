import { createContext, useContext } from 'react';
import type { IconActivityState } from '@/hooks/icon-activity/icon-activity-provider';

export const IconActivityContext = createContext<IconActivityState | undefined>(
  undefined
);

/**
 * Provides access to the current set of active icons and a function to update them
 *
 * @example
 * ```tsx
 * const { iconActivity, setIconActivity } = useIconActivity();
 * // Check if an icon is active
 * const isReactActive = iconActivity.has(IconKey.React);
 * // Set active icons
 * setIconActivity([IconKey.React, IconKey.Typescript]);
 * ```
 *
 * @returns {IconActivityState} Object containing:
 *   - `iconActivity`: Set of currently active `iconKey`s
 *   - `setIconActivity`: Function to update active icons (accepts array of `IconKeyType`)
 * @throws {Error} If used outside of IconActivityProvider
 */
export const useIconActivity = (): IconActivityState => {
  const context = useContext(IconActivityContext);

  if (context === undefined)
    throw new Error(
      'useIconActivity must be used within a IconActivityProvider'
    );

  return context;
};

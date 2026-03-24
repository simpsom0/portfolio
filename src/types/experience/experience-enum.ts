export const ExperienceEnum = {
  Comcast: 0,
  Medico: 1,
  Clarkson: 2,
} as const;
export type ExperienceEnumType =
  (typeof ExperienceEnum)[keyof typeof ExperienceEnum];

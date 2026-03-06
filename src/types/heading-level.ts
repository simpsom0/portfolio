export const HeadingLevel = {
  H2: 0,
  Paragraph: 1,
  Span: 2,
} as const;
export type HeadingLevelType = (typeof HeadingLevel)[keyof typeof HeadingLevel];

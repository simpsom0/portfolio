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
  HTML: 11,
  CSS: 12,
  CSharp: 13,
  Git: 14,
  Azure: 15,
  Aws: 16,
  Databricks: 17,
  Docker: 18,
} as const;
export type IconKeyType = (typeof IconKey)[keyof typeof IconKey];

export const IconKeyName = Object.entries(IconKey).reduce(
  (acc, [name, value]) => {
    acc[value] = name;
    return acc;
  },
  {} as Record<IconKeyType, string>
);

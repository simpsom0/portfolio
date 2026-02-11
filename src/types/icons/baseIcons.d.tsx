import React from 'react';
import { IconKey, type IconKeyType } from './iconKey.d';
import { PostgresIcon } from './svgs/databases/postgres';
import { SqlIcon } from './svgs/databases/sql';
import { SqliteIcon } from './svgs/databases/sqlite';
import { AwsIcon } from './svgs/devops/aws';
import { AzureIcon } from './svgs/devops/azure';
import { DatabricksIcon } from './svgs/devops/databricks';
import { DockerIcon } from './svgs/devops/docker';
import { GitIcon } from './svgs/etc/git';
import { TypescriptIcon } from './svgs/etc/typescript';
import { AngularIcon } from './svgs/frameworks/angular';
import { ReactIcon } from './svgs/frameworks/react';
import { SassIcon } from './svgs/frameworks/sass';
import { TailwindIcon } from './svgs/frameworks/tailwind';
import { VueIcon } from './svgs/frameworks/vue';
import { CSharpIcon } from './svgs/languages/c-sharp';
import { CssIcon } from './svgs/languages/css';
import { GoIcon } from './svgs/languages/go';
import { HtmlIcon } from './svgs/languages/html';
import { PythonIcon } from './svgs/languages/python';

export const baseIcons: Record<IconKeyType, React.ReactNode> = {
  [IconKey.Angular]: <AngularIcon />,
  [IconKey.Vue]: <VueIcon />,
  [IconKey.Sass]: <SassIcon />,
  [IconKey.Tailwind]: <TailwindIcon />,
  [IconKey.Python]: <PythonIcon />,
  [IconKey.Go]: <GoIcon />,
  [IconKey.Sql]: <SqlIcon />,
  [IconKey.Postgres]: <PostgresIcon />,
  [IconKey.Sqlite]: <SqliteIcon />,
  [IconKey.React]: <ReactIcon />,
  [IconKey.Typescript]: <TypescriptIcon />,
  [IconKey.HTML]: <HtmlIcon />,
  [IconKey.CSS]: <CssIcon />,
  [IconKey.CSharp]: <CSharpIcon />,
  [IconKey.Git]: <GitIcon />,
  [IconKey.Azure]: <AzureIcon />,
  [IconKey.Aws]: <AwsIcon />,
  [IconKey.Databricks]: <DatabricksIcon />,
  [IconKey.Docker]: <DockerIcon />,
} as const;

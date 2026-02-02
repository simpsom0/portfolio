import './tech-stack.scss';
import {
  IconKey,
  type IconKeyType,
} from '@/hooks/icon-activity/icon-activity-provider';
import React, { useMemo } from 'react';
import { useIconActivity } from '@/hooks/icon-activity/use-icon-activity';
import IconWrapper from '@/features/tech-stack/components/icon-wrapper';
import { PostgresIcon } from '@/features/tech-stack/components/icons/databases/postgres';
import { SqlIcon } from '@/features/tech-stack/components/icons/databases/sql';
import { SqliteIcon } from '@/features/tech-stack/components/icons/databases/sqlite';
import { AwsIcon } from '@/features/tech-stack/components/icons/devops/aws';
import { AzureIcon } from '@/features/tech-stack/components/icons/devops/azure';
import { DatabricksIcon } from '@/features/tech-stack/components/icons/devops/databricks';
import { DockerIcon } from '@/features/tech-stack/components/icons/devops/docker';
import { GitIcon } from '@/features/tech-stack/components/icons/etc/git';
import { TypescriptIcon } from '@/features/tech-stack/components/icons/etc/typescript';
import { AngularIcon } from '@/features/tech-stack/components/icons/frameworks/angular';
import { ReactIcon } from '@/features/tech-stack/components/icons/frameworks/react';
import { SassIcon } from '@/features/tech-stack/components/icons/frameworks/sass';
import { TailwindIcon } from '@/features/tech-stack/components/icons/frameworks/tailwind';
import { VueIcon } from '@/features/tech-stack/components/icons/frameworks/vue';
import { CSharpIcon } from '@/features/tech-stack/components/icons/languages/c-sharp';
import { CssIcon } from '@/features/tech-stack/components/icons/languages/css';
import { GoIcon } from '@/features/tech-stack/components/icons/languages/go';
import { HtmlIcon } from '@/features/tech-stack/components/icons/languages/html';
import { PythonIcon } from '@/features/tech-stack/components/icons/languages/python';

function TechStack() {
  const { iconActivity } = useIconActivity();
  const baseIcons = useMemo(
    () =>
      new Map<IconKeyType, React.ReactNode>([
        [IconKey.Angular, <AngularIcon />],
        [IconKey.Vue, <VueIcon />],
        [IconKey.Sass, <SassIcon />],
        [IconKey.Tailwind, <TailwindIcon />],
        [IconKey.Python, <PythonIcon />],
        [IconKey.Go, <GoIcon />],
        [IconKey.Sql, <SqlIcon />],
        [IconKey.Postgres, <PostgresIcon />],
        [IconKey.Sqlite, <SqliteIcon />],
        [IconKey.React, <ReactIcon />],
        [IconKey.Typescript, <TypescriptIcon />],
        [IconKey.Html, <HtmlIcon />],
        [IconKey.Css, <CssIcon />],
        [IconKey.CSharp, <CSharpIcon />],
        [IconKey.Git, <GitIcon />],
        [IconKey.Azure, <AzureIcon />],
        [IconKey.Aws, <AwsIcon />],
        [IconKey.Databricks, <DatabricksIcon />],
        [IconKey.Docker, <DockerIcon />],
      ]),
    []
  );

  const wrappedIcons = useMemo(() => {
    return Array.from(baseIcons.entries()).map(([k, icon]) => (
      <IconWrapper key={k} active={iconActivity.has(k)}>
        {icon}
      </IconWrapper>
    ));
  }, [iconActivity, baseIcons]);

  return (
    <div className="techstack-container">
      <div className="techstack-col" id="col-1">
        {wrappedIcons.slice(0, wrappedIcons.length / 2)}
      </div>
      <div className="techstack-col" id="col-2">
        {wrappedIcons.slice(wrappedIcons.length / 2, wrappedIcons.length)}
      </div>
    </div>
  );
}

export default TechStack;

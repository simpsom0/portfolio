import { type ExperienceEnumType, ExperienceEnum } from './experience-enum';
import { type ExperienceCardState } from '@/features/experience-section/components/experience-card/experience-card';
import { IconKey } from '../icons/iconKey.d';

export const experiences: Record<ExperienceEnumType, ExperienceCardState> = {
  [ExperienceEnum.Comcast]: {
    title: 'Software Engineer II',
    subtitle:
      'Comcast Advertising - Media Operations and Data, Philadelphia, PA (remote)',
    date: 'May 2023 - Present',
    techStack: [
      IconKey.Angular,
      IconKey.React,
      IconKey.Vue,
      IconKey.HTML,
      IconKey.CSS,
      IconKey.Typescript,
      IconKey.CSharp,
      IconKey.Python,
      IconKey.Sql,
      IconKey.Postgres,
      IconKey.Git,
      IconKey.Azure,
      IconKey.Aws,
      IconKey.Databricks,
      IconKey.Docker,
    ],
    description: (
      <>
        <strong>
          Built Data Validation & Remediation Engine | Development Team Lead
        </strong>
        <ul>
          <li>
            Led team in building internal pipeline to aggregate data across
            multiple distributed systems.
          </li>
          <li>
            Solution provided UI and APIs to resolve data discrepancies and
            monitor data ingestion quality.
          </li>
          <li>Reduced data-related support ticket resolution time by 80%.</li>
        </ul>
        <strong>
          Created Reusable RBAC Authentication Components | Feature Lead
        </strong>
        <ul>
          <li>
            Collaborated with multiple development teams and POs to define
            requirements.
          </li>
          <li>
            Developed secure front-end and back-end building blocks to integrate
            authentication into cloud resources.
          </li>
        </ul>
        <strong>Notable Accomplishments:</strong>
        <ul>
          <li>Optimized future spending by 7+ million dollars per year.</li>
          <li>Decreased API response time by 400x.</li>
          <li>
            Led incident and RCA calls to resolve revenue impacting technical
            bugs.
          </li>
          <li>
            Provided timely bug fixes and updates for 20+ codebases of various
            languages.
          </li>
        </ul>
      </>
    ),
  },
  [ExperienceEnum.Medico]: {
    title: 'Software Engineer',
    subtitle: 'Medico Physicians LLC, Phoenix, AZ (remote)',
    date: 'May 2022 - May 2023',
    techStack: [
      IconKey.Angular,
      IconKey.CSharp,
      IconKey.HTML,
      IconKey.CSS,
      IconKey.Sql,
      IconKey.Azure,
      IconKey.Git,
    ],
    description: (
      <>
        <strong>Created Audit Page for Patient Records | Feature Lead</strong>
        <ul>
          <li>Collaborated with PO to scope and refine requirements.</li>
          <li>
            Developed a patient audit page with algorithmic prioritization, UI
            indicators, and ability to update data.
          </li>
          <li>Complied with HIPAA standards throughout development.</li>
        </ul>
      </>
    ),
  },
  [ExperienceEnum.Clarkson]: {
    title: 'Bachelor of Science',
    subtitle: 'Clarkson University, Potsdam NY',
    date: '2018 - 2022',
    description: (
      <>
        <ul>
          <li>Major in Computer Science and Information Technology </li>
          <li>Minors in Digital Art and Psychology</li>
          <li>Clarkson Open Source Institute (COSI)</li>
        </ul>
      </>
    ),
    techStack: [IconKey.HTML, IconKey.CSS, IconKey.Python, IconKey.Git],
  },
} as const;

import './experience-section.scss';
import ExperienceCard, {
  type ExperienceCardState,
} from './components/experience-card/experience-card';
import { IconKey } from '@/types/icons/iconKey.d';
import Timeline from './components/timeline/timeline';

export const ExperienceEnum = {
  Comcast: 0,
  Medico: 1,
  Clarkson: 2,
} as const;
export type ExperienceEnumType =
  (typeof ExperienceEnum)[keyof typeof ExperienceEnum];

const experiences: Record<ExperienceEnumType, ExperienceCardState> = {
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
        <ul>
          <li>
            Develops and supports distributed systems in targeted ad pipeline
            ranging from order placement and algorithmic allocation of ads, to
            billing and post-campaign analytics
          </li>
          <li>
            Resolves client reported technical bugs. Develops code fix and
            monitors pull request from testing to production
          </li>
          <li>
            Collaborates with multiple development teams to address issues in
            distributed data pipelines
          </li>
        </ul>

        <p>Notable Accomplishments</p>
        <ul>
          <li>Optimized future spending by 7+ million dollars per year</li>
          <li>Increased API response time by 92%</li>
          <li>
            Lead team to build internal tool using .NET and Angular to aggregate
            data across multiple data sources to reduce troubleshooting time for
            bugs
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
      <ul>
        <li>
          Developed and maintained medical website for over 5,000 patients
          across eight offices
        </li>
        <li>
          Implemented website features that maintain patient records,
          procedures, and doctors’ notes, schedule appointments, upload scans,
          order medications, and export patient data
        </li>
        <li>Complied with HIPAA standards throughout development</li>
      </ul>
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

// reduces messy type conversions
// i.e. as unknown as type
function getTypedKeys<T extends Record<string, any>>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

function Experience() {
  return (
    <div className="experience-section">
      <div className="experiences">
        {getTypedKeys(experiences).map((expEnum) => (
          <div className="timeline-section" key={expEnum}>
            <Timeline />
            <ExperienceCard state={experiences[expEnum]} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;

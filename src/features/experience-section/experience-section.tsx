import './experience-section.scss';
import ExperienceCard from './components/experience-card/experience-card';
import Timeline from './components/timeline/timeline';
import { experiences } from '@/types/experience/experiences';

// reduces messy type conversions
// i.e. as unknown as type
function getTypedKeys<T extends Record<string, any>>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

function Experience() {
  return (
    <div className="experience-section">
      <div className="experiences">
        {getTypedKeys(experiences).map((expEnum, i, arr) => {
          const timelineClasses: string[] = [
            `${i === 0 ? 'first' : ''}`,
            `${i === arr.length - 1 ? 'last' : ''}`,
          ];
          return (
            <div className="timeline-section" key={expEnum}>
              <Timeline className={timelineClasses.join(' ')} />
              <ExperienceCard state={experiences[expEnum]} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;

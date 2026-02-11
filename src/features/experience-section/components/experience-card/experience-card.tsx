import './experience-card.scss';
import type { IconKeyType } from '@/types/icons/iconKey.d';
import React, { useState } from 'react';
import Tag from '../tag/tag';

export type ExperienceCardState = {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  date: string;
  techStack?: IconKeyType[];
};

export type ExperienceCardProps = {
  state: ExperienceCardState;
};

const ExperienceCard = React.memo(function ExperienceCard({
  state,
}: ExperienceCardProps) {
  const [isHover, setIsHover] = useState<boolean>(false);

  const handleHoverChange = (icons: IconKeyType[]) => {
    setIsHover(icons.length > 0);
  };

  return (
    <div
      className="experience"
      onMouseEnter={() => handleHoverChange(state.techStack ?? [])}
      onMouseLeave={() => handleHoverChange([])}
    >
      <h3 className="title">{state.title}</h3>
      <h4 className="subtitle">{state.subtitle}</h4>
      <p className="date">{state.date}</p>
      <div className="techstack">
        {state.techStack?.map((v) => (
          <Tag key={v} type={v} active={isHover} />
        ))}
      </div>
      <div className="description">{state.description}</div>
    </div>
  );
});

export default ExperienceCard;

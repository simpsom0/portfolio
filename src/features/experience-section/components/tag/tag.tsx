import { IconKeyName, type IconKeyType } from '@/types/icons/iconKey.d';
import './tag.scss';
import { baseIcons } from '@/types/icons/baseIcons.d';

type TagProps = {
  type: IconKeyType;
  active: boolean;
};

function Tag({ type, active }: TagProps) {
  const classNames = ['tag', 'transitions-enabled'].join(' ');

  return (
    <div className={`${classNames} ${active ? 'active' : ''}`}>
      <span className="tag-icon">{baseIcons[type]}</span>
      <span>{IconKeyName[type]}</span>
    </div>
  );
}

export default Tag;

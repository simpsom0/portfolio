import './timeline.scss';

type TimelineProps = {
  index: number;
};

function Timeline({ index }: TimelineProps) {
  return (
    <div className={`timeline ${index === 0 ? 'first' : ''}`}>
      <div className="section">
        <div className="line"></div>
        <div className="marker"></div>
      </div>
    </div>
  );
}

export default Timeline;

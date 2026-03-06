import './timeline.scss';

type TimelineProps = {
  className: string;
};

function Timeline({ className }: TimelineProps) {
  return (
    <div className={`timeline ${className}`}>
      <div className="section">
        <div className="marker"></div>
      </div>
    </div>
  );
}

export default Timeline;

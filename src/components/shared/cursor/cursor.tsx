import './cursor.scss';

interface CursorProps {
  render: boolean;
  blink: boolean;
}

function Cursor({ render, blink }: CursorProps) {
  return (
    <span
      className={`${render ? 'cursor' : 'hidden'} ${blink ? 'blink' : 'solid'}`}
    ></span>
  );
}

export default Cursor;

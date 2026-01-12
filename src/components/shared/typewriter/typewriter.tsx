import './typewriter.scss';
import Cursor from '@components/shared/cursor/cursor';
import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

export const HeadingLevel = {
  H2: 0,
  Paragraph: 1,
  Span: 2,
} as const;
export type HeadingLevelType = (typeof HeadingLevel)[keyof typeof HeadingLevel];

export interface TypewriterState {
  text: string;
  headingLevel: HeadingLevelType;
  allowUserInput: boolean;
  isRendered: boolean;
  isRendering: boolean;
}

export interface TypewriterProps {
  state: TypewriterState;
  onComplete?: () => void;
}

function Typewriter({ state, onComplete }: TypewriterProps) {
  // originally used Math.Random() to mimic
  // real typing but it came out jittery
  const typingDelayMs = 18;
  const punctuationDelayMs = 500;
  const punctuation = '.,';

  const timerId = useRef<number | null>(null);
  const [textVisible, setTextVisible] = useState(
    state.isRendered ? state.text : ''
  );

  // progressively sets textVisible to state.text
  useEffect(() => {
    if (!state.isRendering || state.isRendered) {
      return;
    } else if (textVisible.length >= state.text.length) {
      if (onComplete) onComplete();
      return;
    }

    const lastCharAdded = textVisible[textVisible.length - 1];
    const timeout = punctuation.includes(lastCharAdded)
      ? punctuationDelayMs
      : typingDelayMs;

    timerId.current = window.setTimeout(() => {
      setTextVisible((current) => current + state.text[current.length]);
    }, timeout);

    return () => {
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, [onComplete, state, textVisible]);

  const renderContent = () => {
    const content = (
      <>
        <span className="keepWhiteSpace">{textVisible}</span>
        <Cursor
          render={state.isRendering}
          blink={state.isRendered && state.isRendering}
        />
      </>
    );

    const elementMap: Record<HeadingLevelType, ReactNode> = {
      [HeadingLevel.H2]: <h2>{content}</h2>,
      [HeadingLevel.Paragraph]: <p>{content}</p>,
      [HeadingLevel.Span]: <span>{content}</span>,
    };

    return elementMap[state.headingLevel];
  };

  return <div>{renderContent()}</div>;
}

export default Typewriter;

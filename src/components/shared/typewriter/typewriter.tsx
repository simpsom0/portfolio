import './typewriter.scss';
import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import Cursor from '@/components/shared/cursor/cursor';

export const HeadingLevel = {
  H2: 0,
  Paragraph: 1,
  Span: 2,
} as const;
export type HeadingLevelType = (typeof HeadingLevel)[keyof typeof HeadingLevel];

export interface TypewriterState {
  text: string;
  headingLevel: HeadingLevelType;
  isRendered: boolean;
  isRendering: boolean;
  typingDelayMs?: number;
}

export interface TypewriterProps {
  state: TypewriterState;
  onComplete?: () => void;
}

function Typewriter({ state, onComplete }: TypewriterProps) {
  const defaultTypingDelayMs: number = 18;
  const punctuation = '.,';

  const timerId = useRef<number | null>(null);
  const [textVisible, setTextVisible] = useState(() => {
    if (state.isRendered) return state.text;
    if (state.typingDelayMs === 0 && state.isRendering) return state.text;
    return '';
  });

  // progressively sets textVisible to state.text
  useEffect(() => {
    if (!state.isRendering || state.isRendered) {
      return;
    } else if (textVisible.length >= state.text.length) {
      onComplete?.();
      return;
    }

    // originally used Math.Random() to mimic
    // real typing but it came out jittery
    const typingDelayMs = state.typingDelayMs ?? defaultTypingDelayMs;
    const lastCharAdded = textVisible[textVisible.length - 1];
    const timeoutMs = punctuation.includes(lastCharAdded)
      ? typingDelayMs * 25
      : typingDelayMs;

    timerId.current = window.setTimeout(() => {
      setTextVisible((current) => current + state.text[current.length]);
    }, timeoutMs);

    return () => {
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, [onComplete, state, textVisible]);

  const renderContent = () => {
    const content = (
      <>
        {textVisible}
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

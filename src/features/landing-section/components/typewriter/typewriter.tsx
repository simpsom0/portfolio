import './typewriter.scss';
import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import Cursor from '@/features/landing-section/components/cursor/cursor';
import { type HeadingLevelType, HeadingLevel } from '@/types/heading-level';

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

const defaultTypingDelayMs: number = 18;
const punctuation = '.,';

function Typewriter({ state, onComplete }: TypewriterProps) {
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
        {/* use a non-breaking space to make the empty tags take up space */}
        {textVisible === '' ? '\u00A0' : textVisible}
        <Cursor
          render={state.isRendering}
          blink={state.isRendered && state.isRendering}
        />
      </>
    );

    const elementMap: Record<HeadingLevelType, ReactNode> = {
      [HeadingLevel.H2]: <h2 className="h2">{content}</h2>,
      [HeadingLevel.Paragraph]: <p className="p">{content}</p>,
      [HeadingLevel.Span]: <span className="span">{content}</span>,
    };

    return elementMap[state.headingLevel];
  };

  return renderContent();
}

export default Typewriter;

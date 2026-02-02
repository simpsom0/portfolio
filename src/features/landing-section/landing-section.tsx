import { delayExecutionMs } from '@/utils/delay-execution';
import Typewriter, {
  HeadingLevel,
  type TypewriterState,
} from '@/features/landing-section/components/typewriter/typewriter';
import './landing-section.scss';
import { useCallback, useReducer } from 'react';

type LandingAction =
  | { type: 'COMPLETE_GREETING' }
  | { type: 'COMPLETE_NAME' }
  | { type: 'COMPLETE_HOOK' };

type LandingState = {
  greeting: TypewriterState;
  name: TypewriterState;
  hook: TypewriterState;
};

const initialState: LandingState = {
  greeting: {
    headingLevel: HeadingLevel.Paragraph,
    text: 'Hello, my name is',
    isRendering: true,
    isRendered: false,
  },
  name: {
    headingLevel: HeadingLevel.H2,
    text: 'Michael Simpson',
    isRendering: false,
    isRendered: false,
  },
  hook: {
    headingLevel: HeadingLevel.Paragraph,
    text: "I'm a Software Developer focused on solving problems.",
    isRendering: false,
    isRendered: false,
  },
};

function landingReducer(
  state: LandingState,
  action: LandingAction
): LandingState {
  switch (action.type) {
    case 'COMPLETE_GREETING':
      return {
        ...state,
        greeting: { ...state.greeting, isRendering: false, isRendered: true },
        name: { ...state.name, isRendering: true },
      };
    case 'COMPLETE_NAME':
      return {
        ...state,
        name: { ...state.name, isRendering: false, isRendered: true },
        hook: { ...state.hook, isRendering: true },
      };
    case 'COMPLETE_HOOK':
      return {
        ...state,
        hook: { ...state.hook, isRendering: true, isRendered: true },
      };
    default:
      return state;
  }
}

function LandingSection() {
  const [state, dispatch] = useReducer(landingReducer, initialState);

  const handleGreetingComplete = useCallback(async () => {
    await delayExecutionMs(() => dispatch({ type: 'COMPLETE_GREETING' }), 0);
  }, []);

  const handleNameComplete = useCallback(async () => {
    await delayExecutionMs(() => dispatch({ type: 'COMPLETE_NAME' }));
  }, []);

  const handleHookComplete = useCallback(async () => {
    await delayExecutionMs(() => dispatch({ type: 'COMPLETE_HOOK' }));
  }, []);

  return (
    <div className="landing-section">
      <Typewriter state={state.greeting} onComplete={handleGreetingComplete} />
      <Typewriter state={state.name} onComplete={handleNameComplete} />
      <Typewriter state={state.hook} onComplete={handleHookComplete} />
    </div>
  );
}

export default LandingSection;

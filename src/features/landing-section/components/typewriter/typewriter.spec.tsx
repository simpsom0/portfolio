import 'vitest/browser'; // needed for toBeInTheDocument()
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Typewriter, { HeadingLevel, type TypewriterState } from './typewriter';
import { render, waitFor } from '@testing-library/react';

describe('Typewriter Component', () => {
  const mockOnComplete = vi.fn();
  let mockState: TypewriterState;

  beforeEach(() => {
    vi.clearAllMocks();
    mockState = {
      text: 'test123',
      headingLevel: HeadingLevel.Paragraph,
      isRendering: true,
      isRendered: false,
      typingDelayMs: 0,
    };
  });

  it('text is visible after onComplete', () => {
    const { getByText } = render(
      <Typewriter state={mockState} onComplete={mockOnComplete} />
    );

    expect(getByText(mockState.text)).toBeInTheDocument();
    expect(mockOnComplete).toHaveBeenCalledOnce();
  });

  it('calls onComplete when typing finishes with typingDelayMs > 0', async () => {
    mockState = {
      ...mockState,
      typingDelayMs: 10,
    };

    render(<Typewriter state={mockState} onComplete={mockOnComplete} />);

    await waitFor(
      () => {
        expect(mockOnComplete).toHaveBeenCalledOnce();
      },
      { timeout: 500 }
    );
  });

  it('renders text immediately when isRendered is true', () => {
    mockState = {
      ...mockState,
      isRendered: true,
    };

    const { getByText } = render(<Typewriter state={mockState} />);

    expect(getByText(mockState.text)).toBeInTheDocument();
  });

  it('renders as p when headingLevel is Paragraph', () => {
    const { getByRole } = render(<Typewriter state={mockState} />);
    const p = getByRole('paragraph');

    expect(p).toBeInTheDocument();
    expect(p).toHaveTextContent(mockState.text);
  });

  it('works without onComplete callback', () => {
    expect(() => render(<Typewriter state={mockState} />)).not.toThrow();
  });

  it('does not call onComplete when isRendered is true', () => {
    mockState = {
      ...mockState,
      isRendered: true,
    };

    render(<Typewriter state={mockState} onComplete={mockOnComplete} />);

    expect(mockOnComplete).not.toHaveBeenCalled();
  });

  it('does not call onComplete when isRendering and isRendered is false', () => {
    mockState = {
      ...mockState,
      isRendering: false,
      isRendered: false,
    };

    render(<Typewriter state={mockState} onComplete={mockOnComplete} />);

    expect(mockOnComplete).not.toHaveBeenCalled();
  });
});

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
  it('renders with default props', () => {
    const { container } = render(<Logo />);
    expect(container.querySelector('svg')).toBeInTheDocument();
    expect(screen.getByText('THE')).toBeInTheDocument();
    expect(screen.getByText('ONE')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Logo className="my-custom-class" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('my-custom-class');
  });

  it('applies custom iconSize', () => {
    const { container } = render(<Logo iconSize="w-20 h-20" />);
    const svg = container.querySelector('svg');
    expect(svg?.className.baseVal).toContain('w-20 h-20');
  });

  it('applies custom textSize', () => {
    render(<Logo textSize="text-3xl" />);
    const theText = screen.getByText('THE');
    expect(theText.className).toContain('text-3xl');
    const oneText = screen.getByText('ONE');
    expect(oneText.className).toContain('text-3xl');
  });

  it('renders SVG with correct viewBox', () => {
    const { container } = render(<Logo />);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('viewBox')).toBe('0 0 100 100');
  });

  it('renders circle and line elements in SVG', () => {
    const { container } = render(<Logo />);
    const circle = container.querySelector('circle');
    expect(circle).toBeInTheDocument();
    expect(circle?.getAttribute('cx')).toBe('50');
    expect(circle?.getAttribute('cy')).toBe('50');

    const lines = container.querySelectorAll('line');
    expect(lines.length).toBe(2);
  });

  it('has select-none class for non-selectable text', () => {
    const { container } = render(<Logo />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('select-none');
  });
});

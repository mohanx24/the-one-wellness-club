import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Marquee from './Marquee';

describe('Marquee', () => {
  it('renders all ticker items', () => {
    render(<Marquee />);
    expect(screen.getAllByText('2,000+ ACTIVE MEMBERS').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('4.9 RATED').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('NO CONTRACTS. NO EXCUSES.').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('8+ YEARS OF EXCELLENCE').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('OPEN EVERY DAY').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('RESULTS GUARANTEED').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('15+ CERTIFIED COACHES').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('WELLNESS CAFE').length).toBeGreaterThanOrEqual(1);
  });

  it('duplicates items for seamless loop animation', () => {
    render(<Marquee />);
    const members = screen.getAllByText('2,000+ ACTIVE MEMBERS');
    expect(members.length).toBe(2);
  });

  it('renders star separators between items', () => {
    const { container } = render(<Marquee />);
    const stars = container.querySelectorAll('.text-\\[\\#E53935\\]');
    expect(stars.length).toBe(16); // 8 items * 2 (duplicated)
  });

  it('has overflow-hidden to contain the animation', () => {
    const { container } = render(<Marquee />);
    const section = container.querySelector('section');
    expect(section?.className).toContain('overflow-hidden');
  });

  it('has animate-marquee class for CSS animation', () => {
    const { container } = render(<Marquee />);
    const animatedDiv = container.querySelector('.animate-marquee');
    expect(animatedDiv).toBeInTheDocument();
  });

  it('renders correct number of items (8 original + 8 duplicated)', () => {
    const { container } = render(<Marquee />);
    const items = container.querySelectorAll('.shrink-0');
    expect(items.length).toBe(16);
  });
});

import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import BeforeAfterSlider from './BeforeAfterSlider';

describe('BeforeAfterSlider', () => {
  it('renders transformation spotlight heading', () => {
    render(<BeforeAfterSlider />);
    expect(screen.getByText('Transformation Spotlight')).toBeInTheDocument();
    expect(screen.getByText('REAL RESULTS.')).toBeInTheDocument();
  });

  it('renders before and after labels', () => {
    render(<BeforeAfterSlider />);
    expect(screen.getByText('BEFORE')).toBeInTheDocument();
    expect(screen.getByText('AFTER')).toBeInTheDocument();
  });

  it('displays weight change data', () => {
    render(<BeforeAfterSlider />);
    expect(screen.getByText('92 kg')).toBeInTheDocument();
    expect(screen.getByText('78 kg')).toBeInTheDocument();
  });

  it('displays body fat percentage data', () => {
    render(<BeforeAfterSlider />);
    expect(screen.getByText('26%')).toBeInTheDocument();
    expect(screen.getByText('12%')).toBeInTheDocument();
  });

  it('displays the member name and timeframe', () => {
    render(<BeforeAfterSlider />);
    expect(screen.getByText(/Siddharth R\./)).toBeInTheDocument();
    expect(screen.getByText(/16 Weeks/)).toBeInTheDocument();
  });

  it('renders a range input slider', () => {
    const { container } = render(<BeforeAfterSlider />);
    const slider = container.querySelector('input[type="range"]');
    expect(slider).toBeInTheDocument();
    expect(slider?.getAttribute('min')).toBe('0');
    expect(slider?.getAttribute('max')).toBe('100');
  });

  it('slider has initial value of 50', () => {
    const { container } = render(<BeforeAfterSlider />);
    const slider = container.querySelector('input[type="range"]') as HTMLInputElement;
    expect(slider.value).toBe('50');
  });

  it('updates slider value on change', () => {
    const { container } = render(<BeforeAfterSlider />);
    const slider = container.querySelector('input[type="range"]') as HTMLInputElement;

    fireEvent.change(slider, { target: { value: '75' } });
    expect(slider.value).toBe('75');
  });

  it('renders before and after images', () => {
    render(<BeforeAfterSlider />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(2);
    expect(images[0]).toHaveAttribute('alt', 'After Transformation');
    expect(images[1]).toHaveAttribute('alt', 'Before Transformation');
  });

  it('displays program information', () => {
    render(<BeforeAfterSlider />);
    expect(screen.getByText(/Personal Training & Nutrition Guide/)).toBeInTheDocument();
  });
});

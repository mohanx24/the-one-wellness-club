import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TrainerModal from './TrainerModal';

const mockTrainer = {
  name: 'Kumar Mannava',
  role: 'Head Trainer',
  image: '/images/trainer.jpg',
  bio: 'Celebrity trainer with 10+ years experience.',
  specialties: ['Strength Training', 'Weight Loss', 'HIIT'],
  certifications: ['NASM Certified', 'CrossFit Level 2'],
  experience: '10+ Years',
};

const mockTrainerMinimal = {
  name: 'John Doe',
  role: 'Fitness Coach',
  image: '/images/john.jpg',
};

describe('TrainerModal', () => {
  it('returns null when trainer is null', () => {
    const { container } = render(<TrainerModal trainer={null} onClose={vi.fn()} />);
    expect(container.innerHTML).toBe('');
  });

  it('renders trainer name and role', () => {
    render(<TrainerModal trainer={mockTrainer} onClose={vi.fn()} />);
    expect(screen.getByText('Kumar Mannava')).toBeInTheDocument();
    expect(screen.getByText('Head Trainer')).toBeInTheDocument();
  });

  it('renders trainer bio', () => {
    render(<TrainerModal trainer={mockTrainer} onClose={vi.fn()} />);
    expect(screen.getByText('Celebrity trainer with 10+ years experience.')).toBeInTheDocument();
  });

  it('renders specialties', () => {
    render(<TrainerModal trainer={mockTrainer} onClose={vi.fn()} />);
    expect(screen.getByText('Strength Training')).toBeInTheDocument();
    expect(screen.getByText('Weight Loss')).toBeInTheDocument();
    expect(screen.getByText('HIIT')).toBeInTheDocument();
  });

  it('renders certifications', () => {
    render(<TrainerModal trainer={mockTrainer} onClose={vi.fn()} />);
    expect(screen.getByText('NASM Certified')).toBeInTheDocument();
    expect(screen.getByText('CrossFit Level 2')).toBeInTheDocument();
  });

  it('renders experience', () => {
    render(<TrainerModal trainer={mockTrainer} onClose={vi.fn()} />);
    expect(screen.getByText('Experience: 10+ Years')).toBeInTheDocument();
  });

  it('uses fallback data when optional fields are not provided', () => {
    render(<TrainerModal trainer={mockTrainerMinimal} onClose={vi.fn()} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Fitness Coach')).toBeInTheDocument();
    expect(screen.getByText('Experience: 8+ Years')).toBeInTheDocument();
    expect(screen.getByText('ACE Certified Personal Trainer')).toBeInTheDocument();
    expect(screen.getByText('Strength Training')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();
    render(<TrainerModal trainer={mockTrainer} onClose={onClose} />);

    const closeButton = screen.getByLabelText('Close modal');
    await user.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when backdrop is clicked', async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();
    const { container } = render(<TrainerModal trainer={mockTrainer} onClose={onClose} />);

    const backdrop = container.querySelector('.absolute.inset-0.bg-black\\/85') as HTMLElement;
    await user.click(backdrop);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('renders trainer image with correct alt text', () => {
    render(<TrainerModal trainer={mockTrainer} onClose={vi.fn()} />);
    const img = screen.getByAltText('Kumar Mannava');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/images/trainer.jpg');
  });

  it('renders Book Session link', () => {
    render(<TrainerModal trainer={mockTrainer} onClose={vi.fn()} />);
    expect(screen.getByText('Book Session')).toBeInTheDocument();
    const link = screen.getByText('Book Session');
    expect(link.closest('a')).toHaveAttribute('href', '/contact');
  });

  it('renders availability information', () => {
    render(<TrainerModal trainer={mockTrainer} onClose={vi.fn()} />);
    expect(screen.getByText('Mon — Sat (By Appointment)')).toBeInTheDocument();
  });
});

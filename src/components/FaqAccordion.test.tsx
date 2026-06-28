import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FaqAccordion from './FaqAccordion';

const mockItems = [
  { question: 'What are the gym hours?', answer: 'We are open 6 AM to 10 PM daily.' },
  { question: 'Do you offer personal training?', answer: 'Yes, we have certified personal trainers.' },
  { question: 'Is there a pool?', answer: 'We have a 25m heated pool available to all members.' },
];

describe('FaqAccordion', () => {
  it('renders all FAQ questions', () => {
    render(<FaqAccordion items={mockItems} />);
    expect(screen.getByText('What are the gym hours?')).toBeInTheDocument();
    expect(screen.getByText('Do you offer personal training?')).toBeInTheDocument();
    expect(screen.getByText('Is there a pool?')).toBeInTheDocument();
  });

  it('does not show answers initially', () => {
    render(<FaqAccordion items={mockItems} />);
    expect(screen.queryByText('We are open 6 AM to 10 PM daily.')).not.toBeInTheDocument();
    expect(screen.queryByText('Yes, we have certified personal trainers.')).not.toBeInTheDocument();
  });

  it('shows answer when question is clicked', async () => {
    const user = userEvent.setup();
    render(<FaqAccordion items={mockItems} />);

    await user.click(screen.getByText('What are the gym hours?'));
    expect(screen.getByText('We are open 6 AM to 10 PM daily.')).toBeInTheDocument();
  });

  it('hides answer when same question is clicked again', async () => {
    const user = userEvent.setup();
    render(<FaqAccordion items={mockItems} />);

    await user.click(screen.getByText('What are the gym hours?'));
    expect(screen.getByText('We are open 6 AM to 10 PM daily.')).toBeInTheDocument();

    await user.click(screen.getByText('What are the gym hours?'));
    expect(screen.queryByText('We are open 6 AM to 10 PM daily.')).not.toBeInTheDocument();
  });

  it('opens a different answer when another question is clicked', async () => {
    const user = userEvent.setup();
    render(<FaqAccordion items={mockItems} />);

    await user.click(screen.getByText('What are the gym hours?'));
    expect(screen.getByText('We are open 6 AM to 10 PM daily.')).toBeInTheDocument();

    await user.click(screen.getByText('Do you offer personal training?'));
    expect(screen.getByText('Yes, we have certified personal trainers.')).toBeInTheDocument();
  });

  it('renders with empty items array', () => {
    const { container } = render(<FaqAccordion items={[]} />);
    expect(container.querySelector('.space-y-4')).toBeInTheDocument();
  });

  it('renders chevron icons for each question', () => {
    const { container } = render(<FaqAccordion items={mockItems} />);
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBe(mockItems.length);
  });
});

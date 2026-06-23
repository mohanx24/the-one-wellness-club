import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useIsMobile } from './use-mobile';

describe('useIsMobile', () => {
  let listeners: Map<string, (() => void)[]>;

  beforeEach(() => {
    listeners = new Map();

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });

    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: (_event: string, handler: () => void) => {
        const existing = listeners.get(query) || [];
        existing.push(handler);
        listeners.set(query, existing);
      },
      removeEventListener: (_event: string, handler: () => void) => {
        const existing = listeners.get(query) || [];
        listeners.set(query, existing.filter((h) => h !== handler));
      },
      dispatchEvent: vi.fn(),
    }));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns false when window width is above mobile breakpoint', () => {
    Object.defineProperty(window, 'innerWidth', { value: 1024, configurable: true });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it('returns true when window width is below mobile breakpoint', () => {
    Object.defineProperty(window, 'innerWidth', { value: 500, configurable: true });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it('returns true at exactly 767px (below 768 breakpoint)', () => {
    Object.defineProperty(window, 'innerWidth', { value: 767, configurable: true });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it('returns false at exactly 768px (at the breakpoint)', () => {
    Object.defineProperty(window, 'innerWidth', { value: 768, configurable: true });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it('responds to media query change events', () => {
    Object.defineProperty(window, 'innerWidth', { value: 1024, configurable: true });
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    act(() => {
      Object.defineProperty(window, 'innerWidth', { value: 500, configurable: true });
      const handlers = listeners.get('(max-width: 767px)') || [];
      handlers.forEach((h) => h());
    });

    expect(result.current).toBe(true);
  });

  it('cleans up event listener on unmount', () => {
    const { unmount } = renderHook(() => useIsMobile());
    const handlersBeforeUnmount = listeners.get('(max-width: 767px)') || [];
    expect(handlersBeforeUnmount.length).toBe(1);

    unmount();

    const handlersAfterUnmount = listeners.get('(max-width: 767px)') || [];
    expect(handlersAfterUnmount.length).toBe(0);
  });
});

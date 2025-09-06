import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() })
}));

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve([]) })
) as any;

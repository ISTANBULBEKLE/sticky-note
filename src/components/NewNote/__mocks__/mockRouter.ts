export const mockRouter = {
  push: () => {},
  back: () => {},
  forward: () => {},
  refresh: () => {},
  replace: () => {},
  prefetch: () => Promise.resolve(),
};

export const MockNextRouter = ({ children }: { children: React.ReactNode }) => children; 
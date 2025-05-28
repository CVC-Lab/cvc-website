import '@testing-library/jest-dom'

// Mock Gatsby's global __PATH_PREFIX__
global.__PATH_PREFIX__ = ''

// Mock Gatsby's navigate function
global.___navigate = jest.fn()

// Mock Gatsby Link component
jest.mock('gatsby', () => ({
  ...jest.requireActual('gatsby'),
  Link: jest.fn().mockImplementation(({ to, ...rest }) =>
    React.createElement('a', {
      ...rest,
      href: to,
    })
  ),
  graphql: jest.fn(),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
}))

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

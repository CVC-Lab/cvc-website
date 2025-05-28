# CVC Website Development Notes

This document contains important information for Claude Code when working on the CVC website project.

## Project Overview

The Computational Visualization Center (CVC) website is built with Gatsby and deployed to GitHub Pages. It showcases research, publications, software, and team information.

## Key Commands

### Development

- `npm run develop` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to GitHub Pages

### Code Quality

- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format with Prettier
- `npm run type-check` - Check TypeScript types

### Testing

- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage

## Important Notes

### Environment Variables

- Copy `.env.example` to `.env` before running
- Firebase configuration is required
- Site password protection is configured via `GATSBY_PASSWORD_PROTECT`

### Pre-commit Hooks

- Husky is configured to run lint-staged on pre-commit
- ESLint and Prettier will automatically fix issues on staged files

### TypeScript

- Project supports TypeScript files (.ts, .tsx)
- Path aliases are configured in tsconfig.json

### Testing

- Jest and React Testing Library are configured
- Run tests before deploying

### Deployment

- Site deploys to GitHub Pages with path prefix `/cvc-website`
- Use `npm run deploy` to build and deploy

## Common Issues

- If you encounter ESLint errors, run `npm run lint:fix`
- For type errors, run `npm run type-check`
- Clear Gatsby cache with `npm run clean` if you encounter build issues

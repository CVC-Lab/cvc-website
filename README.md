# Computational Visualization Center (CVC) Website

This is the official website for the Computational Visualization Center (CVC) at UT Austin. Built with Gatsby and deployed to GitHub Pages, it showcases our research, publications, software, and team.

## Table of Contents

- [Computational Visualization Center (CVC) Website](#computational-visualization-center-cvc-website)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Development](#development)
  - [Build and Deployment](#build-and-deployment)
  - [Folder Structure](#folder-structure)

## Installation

1. Ensure you have Node.js and NPM installed. You can check by running:

```
node --version
npm --version
```

2. Clone this repository to your local machine:

```
git clone https://github.com/cvc-website/cvc-website.git
```

3. Navigate to the project directory and install the required dependencies:

```
cd cvc-website
npm install
```

4. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in the required values (Firebase configuration, site password, etc.)
   - Contact the team for production environment values

## Development

To start the development server, run the following command in the project directory:

```
npm run develop
```

This will start a local development server at `http://localhost:8000/`.

## Build and Deployment

To build the project for production, run:

```
npm run build
```

This command generates a `public` folder with the optimized website.

To deploy the website to GitHub Pages, run:

```
npm run deploy
```

## Scripts

- `npm run develop` - Start development server at http://localhost:8000
- `npm run build` - Build for production with path prefix
- `npm run deploy` - Build and deploy to GitHub Pages
- `npm run format` - Format code with Prettier
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run clean` - Clean Gatsby cache

## Environment Variables

The following environment variables are required:

- `GATSBY_FIREBASE_API_KEY` - Firebase API key
- `GATSBY_FIREBASE_AUTH_DOMAIN` - Firebase auth domain
- `GATSBY_FIREBASE_PROJECT_ID` - Firebase project ID
- `GATSBY_FIREBASE_STORAGE_BUCKET` - Firebase storage bucket
- `GATSBY_FIREBASE_MESSAGING_SENDER_ID` - Firebase messaging sender ID
- `GATSBY_FIREBASE_APP_ID` - Firebase app ID
- `GATSBY_PASSWORD_PROTECT` - Password for site protection

See `.env.example` for a template.

## Folder Structure

```
.
├── src/
│   ├── components/     # React components
│   ├── context/        # React context providers
│   ├── data/          # Data files and database
│   ├── images/        # Image assets
│   ├── markdown/      # Markdown content (news, projects, etc.)
│   ├── pages/         # Page components
│   └── styles/        # Global styles
├── docs/              # Documentation for adding content
├── gatsby-*.js        # Gatsby configuration files
├── .env.example       # Environment variables template
├── .eslintrc.js       # ESLint configuration
└── .prettierrc        # Prettier configuration
```

## Adding Content

See the documentation in the `docs/` folder:

- [Adding News](docs/ADDNEWS.md)
- [Adding People](docs/ADDPEOPLE.md)
- [Adding Projects](docs/ADDPROJECT.md)
- [Adding Publications](docs/ADDPUBLICATION.md)
- [Adding Software](docs/ADDSOFTWARE.md)

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Run `npm run lint` and `npm run format`
4. Test locally with `npm run develop`
5. Submit a pull request

## License

This project is licensed under the 0BSD license - see the [LICENSE](LICENSE) file for details.

# Blog

This project is a feature-rich Next.js application that serves as a personal blog and portfolio with advanced functionality including content management, search capabilities, and analytics integration.

The application is built using Next.js 14 and leverages a variety of modern web technologies to create a fast, responsive, and user-friendly experience. It includes features such as a blog with MDX support, a projects showcase, a professional timeline, and integration with various third-party services.

## Repository Structure

```
.
├── app/                  # Next.js 13+ app directory
├── components/           # React components
├── config/               # Configuration files
├── contentlayer.config.ts # Contentlayer configuration
├── data/                 # Static data files
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and libraries
├── pages/                # Next.js pages (API routes)
├── public/               # Static assets
├── styles/               # Global styles
└── types/                # TypeScript type definitions
```

Key Files:

- `app/layout.tsx`: Main layout component
- `app/page.tsx`: Home page component
- `components/coding-timeline.tsx`: Professional experience timeline
- `contentlayer.config.ts`: Content management configuration
- `next.config.js`: Next.js configuration
- `package.json`: Project dependencies and scripts
- `tailwind.config.js`: Tailwind CSS configuration

## Usage Instructions

### Installation

Prerequisites:

- Node.js 18.x or later
- npm 9.x or later

Steps:

1. Clone the repository
2. Run `npm install` to install dependencies

### Getting Started

1. Start the development server:
   ```
   npm run dev
   ```
2. Open `http://localhost:3000` in your browser

### Configuration

- Site metadata: Edit `config/site-metadata.ts`
- Navigation links: Modify `config/nav-links.ts`
- Content: Add or edit MDX files in the `data/` directory

### Common Use Cases

1. Adding a new blog post:

   - Create a new MDX file in `data/blog/`
   - Use the front matter to add metadata

2. Updating the projects showcase:

   - Edit `data/projectsData.ts`

3. Modifying the professional timeline:
   - Update `components/coding-timeline.tsx`

### Testing & Quality

Run linting:

```
npm run lint
```

Run Prettier:

```
npm run prettier:check
npm run prettier:fix
```

### Troubleshooting

Common issues:

1. Content not updating:

   - Ensure Contentlayer is properly configured in `contentlayer.config.ts`
   - Restart the development server

2. Styling issues:

   - Check Tailwind CSS classes in components
   - Verify `tailwind.config.js` settings

3. Build errors:
   - Review console output for specific error messages
   - Ensure all dependencies are installed and up-to-date

For debugging:

- Enable verbose logging in Next.js by setting the `DEBUG` environment variable:
  ```
  DEBUG=* npm run dev
  ```
- Check the browser console for client-side errors
- Review server logs in the terminal running the Next.js server

## Data Flow

The application's data flow centers around content management and rendering:

1. Content Creation: MDX files in the `data/` directory contain blog posts and author information.
2. Content Processing: Contentlayer processes MDX files during build time, generating TypeScript types and JSON data.
3. Page Generation: Next.js pages in the `app/` directory fetch processed content using Contentlayer's generated APIs.
4. Rendering: React components in the `components/` directory receive content data as props and render it.
5. User Interaction: Components like search and comments handle user input and update the UI accordingly.

```
[MDX Files] -> [Contentlayer] -> [Next.js Pages] -> [React Components] -> [User Interface]
     ^                                ^                     |
     |                                |                     |
     +--------------------------------+---------------------+
                 (User Interaction)
```

## Deployment

Prerequisites:

- Vercel account (recommended) or another Next.js-compatible hosting platform

Steps:

1. Connect your GitHub repository to Vercel
2. Configure environment variables if necessary
3. Deploy the application

Vercel will automatically detect the Next.js project and apply the appropriate build settings.

## Infrastructure

The project primarily relies on Vercel's infrastructure for deployment and hosting. Key configuration files include:

- `next.config.js`: Configures Next.js build and runtime behavior

  - Enables Contentlayer integration
  - Sets up bundle analysis
  - Configures Content Security Policy
  - Defines custom security headers
  - Configures webpack for SVG handling

- `renovate.json`: Manages dependency updates
  - Extends recommended Renovate configuration
  - Customizes commit message prefixes for different update types
  - Configures automerge settings for non-major updates

These configurations ensure secure, optimized, and up-to-date deployments on the Vercel platform.

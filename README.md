# David Anthony Portfolio

A personal portfolio and frontend developer showcase for David Anthony, designed to present skills, selected projects, professional background, and contact information clearly and professionally.

## Overview

This project is a responsive portfolio website built to communicate a strong frontend engineering profile in a clean, modern format. It is structured as a single-page experience that highlights the developer’s experience, design sensibility, and product-focused thinking without relying on a complex backend.

The site presents a focused overview of:

- frontend development capabilities
- design and UX strengths
- selected work and project highlights
- career journey and positioning
- resume access and contact details

## Key Features

- responsive single-page portfolio layout
- clear hero, about, skills, journey, projects, and contact sections
- project cards with live links and source links where available
- downloadable CV and public resume view
- centralized content model for portfolio data
- dark themed visual system with accessible contrast
- static asset organization for images and public documents

## Technology Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- HTML and CSS

## Architecture

The application follows a lightweight component-based structure:

Frontend
↓
React UI components
↓
Content-driven data modules
↓
Vite production build

The portfolio content is kept separate from the presentation layer so updates to personal information, skills, and projects can be managed without rewriting interface logic. Public files such as the resume and project images are served from the public directory.

## Project Structure

```text
src/
  components/
    layout/
    ui/
  data/
  lib/
  App.tsx
  index.css
  main.tsx
public/
  images/
  resume/
  favicon.svg
index.html
vite.config.ts
package.json
README.md
```

## Data and Configuration

Portfolio content is organized in the data layer and is intended to be updated through the relevant source files rather than hardcoding values inside the UI. Optional environment placeholders may be added in a local `.env` file when needed for future integrations, but the current portfolio does not require a production secret setup for the public site to work.

## Deployment

The project is configured for Vercel-style static hosting and is built using Vite. It is suitable for deployment as a frontend-only portfolio with static assets and public resume content.

## Current Project Status

This portfolio is a functional personal website and portfolio MVP. It is polished and presentation-ready for a professional public GitHub repository, but it remains a static portfolio implementation rather than a full application platform or e-commerce/payment system.

## Known Limitations

- the site is primarily informational and static
- there are no automated end-to-end tests in the current repository
- project data is manually maintained in the source files
- advanced backend or user-authenticated workflows are not part of the current implementation

## Future Improvements

- richer case studies for more completed work
- CMS-driven project entries
- automated UI testing
- stronger analytics and engagement tracking
- additional resume or portfolio sections for specialized work

## Author

David Anthony

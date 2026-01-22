# Portfolio Website

A modern, performant portfolio website showcasing my work experience as a software engineer.

🔗 **Live Site**: [https://pnadalini.github.io/](https://pnadalini.github.io/)

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) - A JavaScript library for building user interfaces
- **Build Tool**: [Vite](https://vitejs.dev/) - Next generation frontend tooling for blazingly fast development and optimized production builds
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development
- **Deployment**: [GitHub Pages](https://pages.github.com/) - Static site hosting directly from the repository

## 🚀 Running locally

### Prerequisites

- Node.js (v22)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/pnadalini/pnadalini.github.io.git

# Navigate to project directory
cd pnadalini.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔐 Environment Variables

This project uses environment variables for configuration. Create a `.env` file in the root directory following the example `.env.example`:

```bash
VITE_PUBLIC_POSTHOG_KEY=your_posthog_key_here
VITE_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

### GitHub Pages Deployment

For GitHub Pages deployment, you need to configure the environment variables as GitHub Secrets

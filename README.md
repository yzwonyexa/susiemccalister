# Susie McCalister — Official Website

The official landing page website for **Susie McCalister**, a Discord AI companion bot.

## 🚀 Tech Stack

- **React 18** with TypeScript
- **Vite** for fast builds
- **Tailwind CSS v4** for styling
- **React Router DOM** for client-side routing
- **Framer Motion** for animations
- **Lucide React** for icons

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd susie-mccalister-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## ⚙️ Environment Variables

Create a `.env` file in the project root (or configure in Vercel):

```env
VITE_SITE_URL=https://your-domain.vercel.app
VITE_DISCORD_CLIENT_ID=your_discord_client_id
VITE_DISCORD_INVITE_URL=https://discord.com/oauth2/authorize?client_id=...
VITE_DISCORD_SUPPORT_URL=https://discord.gg/your-invite-code
```

### Variable Descriptions

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SITE_URL` | The public URL of the website | No (defaults to placeholder) |
| `VITE_DISCORD_CLIENT_ID` | Discord bot's Client ID | No |
| `VITE_DISCORD_INVITE_URL` | Full invite URL for the bot | No (auto-generated from Client ID) |
| `VITE_DISCORD_SUPPORT_URL` | Discord invite link for support server | No |

> **Note:** If `VITE_DISCORD_INVITE_URL` is not set but `VITE_DISCORD_CLIENT_ID` is available, the invite URL will be auto-generated with standard bot permissions.

## 🌐 Deployment to Vercel

1. Push the source code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com).
3. Import the GitHub repository.
4. Vercel will auto-detect the Vite framework.
5. Configure environment variables in the Vercel dashboard.
6. Click **Deploy**.
7. Verify the build and pages after deployment.
8. (Optional) Connect a custom domain in Vercel project settings.

## 📁 Project Structure

```
src/
├── App.tsx              # Main app with routing
├── main.tsx             # Entry point
├── index.css            # Global styles and Tailwind
├── vite-env.d.ts        # TypeScript declarations
├── components/          # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── SectionHeading.tsx
│   ├── FeatureCard.tsx
│   ├── CommandCard.tsx
│   ├── DiscordPreview.tsx
│   ├── FAQAccordion.tsx
│   └── CTASection.tsx
├── pages/               # Page components
│   ├── HomePage.tsx
│   ├── FeaturesPage.tsx
│   ├── CommandsPage.tsx
│   ├── SupportPage.tsx
│   ├── PrivacyPage.tsx
│   ├── TermsPage.tsx
│   └── NotFoundPage.tsx
├── data/                # Static data
│   ├── commands.ts      # Bot commands list
│   ├── features.ts      # Features list
│   └── faq.ts           # FAQ items
└── lib/                 # Utilities
    └── config.ts        # Centralized configuration
```

## 🔄 Updating Content

### Commands

Edit `src/data/commands.ts` to add, remove, or modify commands. Each command follows this structure:

```typescript
{
  name: "/command",
  description: "What the command does",
  category: "Category",
  usage: "/command <param>",
  parameters: [{ name: "param", description: "Description", required: true }],
  permissions: ["Permission Name"],
  example: "/command example"
}
```

### Features

Edit `src/data/features.ts` to update feature descriptions and categories.

### FAQ

Edit `src/data/faq.ts` to update the FAQ section on the support page.

## 📝 License

All rights reserved. © Susie McCalister.

# Ginclair — Post-Purchase Onboarding

A 3-step onboarding modal that appears the moment a student finishes purchasing a
Ginclair course: a gamification intro, one interactive lesson-check preview, and a
look at the community features waiting inside. No backend — completion state is
kept in `localStorage` so the modal only ever shows once per browser.

## Installation

Requires Node.js 18+.

```bash
npm install
```

## Running locally

```bash
npm run dev
```

Vite will print a local URL (typically `http://localhost:5173`).

To see the onboarding modal again after it's been dismissed, click
**"Replay onboarding"** on the page behind it, or clear the
`ginclair.onboardingComplete` key from your browser's localStorage / dev tools.

## Build

```bash
npm run build
```

Outputs a production build to `dist/`.

```bash
npm run preview
```

Serves the `dist/` build locally to sanity-check before deploying.

## Deploy to Vercel

1. Push this project to a Git repository (GitHub, GitLab, or Bitbucket).
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — no environment variables are required since there's no backend.

Or from the CLI:

```bash
npm install -g vercel
vercel
```

## Folder structure

```
ginclair-onboarding/
├── public/                        Static assets served as-is (favicon, logo)
├── src/
│   ├── assets/                    Icons, illustrations, animation source files
│   ├── components/
│   │   ├── common/                Reusable primitives (Button, Modal, ProgressBar, Card)
│   │   └── onboarding/            The 3 steps + the flow that orchestrates them
│   ├── hooks/
│   │   └── useLocalStorage.js     Generic localStorage-backed state hook
│   ├── data/
│   │   └── swipeQuestions.js      Content for the Step 2 interactive preview
│   ├── styles/
│   │   └── animations.css         Extra keyframes not covered by Tailwind config
│   ├── App.jsx                    Course-purchase backdrop page + onboarding mount
│   ├── main.jsx                   React entry point
│   └── index.css                  Tailwind directives + global base styles
├── package.json
├── vite.config.js
├── tailwind.config.js             Design tokens: colors, radius, shadows, keyframes
├── postcss.config.js
└── .gitignore
```

## What each onboarding component does

| Component | Responsibility |
|---|---|
| `OnboardingFlow.jsx` | Owns step state, navigation, localStorage persistence, and the claim/close sequence |
| `StepWelcome.jsx` | Shows starting XP, Streak, and Gincoins; explains the 1000 XP → 100 Gincoins rate |
| `StepSwipeTest.jsx` | One interactive question with correct/incorrect visual feedback |
| `StepCommunity.jsx` | Leaderboards, Challengers Arena, and Ginhouse preview cards |
| `XPClaimAnimation.jsx` | Floating "+50 XP" pop shown when the student claims their reward |

## Accessibility

- Full keyboard navigation, including a focus trap inside the modal and `Escape` to close.
- Visible focus rings on every interactive element.
- Semantic roles (`dialog`, `progressbar`) and labelled headings.
- Respects `prefers-reduced-motion`.

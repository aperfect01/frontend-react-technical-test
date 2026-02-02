# Frontend React Technical Test

A modern, responsive React application built with TypeScript, Vite, and Tailwind CSS.

---

## Table of Contents

- [Quick Start](#quick-start)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Resources Used](#resources-used)
- [Design Assumptions](#design-assumptions)
- [Development Time](#development-time)
- [Browser Testing](#browser-testing)

---

## Quick Start

### Option 1: View Online (No Installation)

**Simply visit:** [https://aperfect01.github.io/frontend-react-technical-test/](https://aperfect01.github.io/frontend-react-technical-test/)

This is the easiest way to see the website. No downloads or installations required!

### Option 2: Run Locally (For Developers)

### Prerequisites

Before you begin, you need to install:

1. **Node.js** (version 18 or higher)
   - Visit [nodejs.org](https://nodejs.org/)
   - Download and install the LTS (Long Term Support) version
   - To verify installation, open your terminal/command prompt and type:
     ```
     node --version
     ```
   - You should see a version number like `v18.x.x` or higher

---

## Installation & Setup

### Step 1: Download the Project

1. Download the project folder to your computer
2. Open your terminal/command prompt
3. Navigate to the project folder:
   ```bash
   cd path/to/frontend-react-technical-test
   ```

### Step 2: Install Dependencies

Run this command in your terminal:

```bash
npm install
```

**What this does:** Downloads all the necessary code libraries the project needs to run.

**Wait time:** This usually takes 1-3 minutes depending on your internet speed.

---

## Project Structure

```
frontend-react-technical-test/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── assets/         # Images and static files
│   ├── data/           # Static data
│   └── App.tsx         # Main application component
├── public/             # Public assets
├── package.json        # Project dependencies
└── README.md          # This file
```

---

## Resources Used

### Fonts

- **Primary Font:** Poppins
  - Source: Google Fonts ([fonts.google.com/specimen/Poppins](https://fonts.google.com/specimen/Poppins))
- **Fallback:** System font stack (sans-serif) for optimal performance if Poppins fails to load

### Icon Libraries

- **React Icons** (v5.5.0)
  - Library: [react-icons.github.io/react-icons](https://react-icons.github.io/react-icons/)

### Images

- **Image Optimization:** Lazyload optimized for web performance
- **Placeholder Source:** Shuttershock

### CSS Framework

- **Tailwind CSS** (v4.1.18)
  - Utility-first CSS framework
  - Custom configuration via `@tailwindcss/vite` plugin
  - Documentation: [tailwindcss.com](https://tailwindcss.com)

### Development Tools

- **React** (v19.2.0) - UI library
- **TypeScript** (~5.9.3) - Type safety
- **Vite** (v7.2.4) - Build tool and dev server
- **React Router DOM** (v7.13.0) - Client-side routing
- **ESLint** - Code quality and consistency

---

## Design Assumptions

Due to ambiguities in the mockup, the following assumptions were made:

### 1. Font Selection

**Assumption:** Detected the mockup's font style and matched it with Poppins from Google Fonts.

- Font loaded via Google Fonts CDN for performance and proper css configuration on **index.css**

### 2. Hero Section Icons

**Assumption:** Used React Icons instead of static images in the hero section's smaller icon boxes.

- Easier to maintain and update colors/sizes dynamically
- Icons selected to represent related tagline

### 3. Hero Section Layout

**Assumption:** Added an asset image on the right side of the hero section since no asset was provided.

### 4. Error Handling

**Assumption:** Implemented a simple 404 page for invalid routes.

- Includes helpful message to users

### 5. Navigation Links

**Assumption:** Created empty placeholder pages for all navigation links.

- All menu items lead to actual routes (not just anchor links)

### 6. Typography Scale

**Assumption:** Used Tailwind's built-in typography scale for consistency.

- **Sizes used:**
  - `text-base` - Body text (16px)
  - `text-sm` - Small text (14px)
  - `text-md` - Medium text (responsive)
  - `text-lg` - Large text (18px)
  - `text-xl`, `text-2xl`, `text-3xl`, `text-4xl` - Headings

### 7. Color Palette

**Assumption:** Extracted colors from mockup and defined consistent theme.

- Primary colors defined in Tailwind configuration
- Used semantic color names (primary, secondary, muted)

### 8. Responsive Breakpoints

**Assumption:** Used Tailwind's default breakpoints for responsive design.

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

### 9. Interactive States

**Assumption:** Added hover, focus, and active states for interactive elements.

- Smooth transitions
- Clear visual feedback for all clickable elements

### 10. Accessibility

**Assumption:** Implemented basic accessibility features.

- Semantic HTML structure
- Alt text for images
- Focus indicators on interactive elements

### 11. Pagination Navigation

**Assumption:** Added a left arrow (previous) button to pagination controls.

- Left arrow allows users to navigate to previous pages
- Disabled state applied to left arrow on first page and right arrow on last page
- Improves UX by preventing users from getting "stuck" on later pages

### 12. Loading States

**Assumption:** Implemented a circular progress loader for suspense/loading states.

- Circular spinner provides visual feedback
- **Usage scenarios:**
  - Page transitions with React Router
  - Component lazy loading with React.Suspense
- Prevents confusion during loading states and indicates the app is working

---

## Development Time

**Total Time Spent:** 8 hours

**Breakdown:**

- Project setup & configuration: ~45 minutes
- Component development: ~3 hours
- Styling & responsive design: ~2.5 hours
- Routing & navigation implementation: ~45 minutes
- Testing & refinement: ~45 minutes
- Documentation: ~30 minutes

**Note:** Time estimate assumes familiarity with React, TypeScript, and Tailwind CSS.

---

## Browser Testing

The project has been tested on the following browsers and devices:

### Desktop Browsers

**Google Chrome**

- Version: [144.0.7559.110]
- OS: [Windows 11]
- Status: Fully functional
- Notes: All features working as expected

**Mozilla Firefox**

- Version: [146.0.1]
- OS: [Windows 11]
- Status: Fully functional
- Notes: All features working as expected

**Microsoft Edge**

- Version: [144.0.3719.104]
- OS: Windows 11
- Status: Fully functional
- Notes: All features working as expected

### Mobile Devices

**Android**

- Device: [e.g., Samsung Galaxy S23]
- Browser: Chrome
- Status: Fully functional
- Notes: Touch interactions working properly

### Screen Sizes Tested (Using browser device toolbar)

- Mobile: 375px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1920px
- Large Desktop: 1920px+

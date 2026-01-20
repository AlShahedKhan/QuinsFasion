# Services Page Plan

- Align with existing patterns: mirror `resources/js/Pages/Home.tsx` structure (MainLayout, max width, gradients, typography scale).
- Page structure: build a section with title/subtitle and two service cards, rendering content from a small data array for clean JSX.
- Implement page: create `resources/js/Pages/Services.tsx` with Tailwind classes that match the current blue/indigo palette and card styling.
- Add route: register `/services` in `routes/web.php` (the navbar already links to it).
- Visual polish: check desktop/mobile spacing, shadows, and list styling to match the design screenshot.

## Decisions

- Icon style: use best-practice approach with inline SVG icons (no new asset files).
- Copy: use the text from the screenshot.

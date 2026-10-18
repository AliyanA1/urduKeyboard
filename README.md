# UrduMaster

UrduMaster is an offline-first Urdu typing trainer focused on practical Pakistani government and office work. It teaches the Windows Urdu keyboard progressively through a 40-lesson course and reinforces learning with realistic words and office sentences.

## Features

- Progressive lessons for the middle, upper, and lower keyboard rows.
- Shift lessons followed by full-keyboard line practice.
- Earlier rows stay active as new rows are introduced.
- Virtual keyboard with next-key guidance and temporary wrong-key feedback.
- Practice timer with 30-second to 5-minute sessions.
- Light and dark themes saved on the local device.
- Lesson completion and theme preference saved in browser local storage.
- Government-office vocabulary covering identity documents, land records, finance, HR, files, notices, and public services.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production-style local run:

```bash
npm run build
npm run start
```

Use another port when the default is busy, for example `npm run start -- -p 3001`.

## Checks

```bash
npm run lint
npm run build
npm test
```

## Project structure

- `src/app/page.tsx` - application state, lesson progression, timer, and theme preference.
- `src/components/` - lesson sidebar, practice panels, writing area, and virtual keyboard.
- `src/lib/keyboard.ts` - standard Urdu keyboard mapping.
- `src/lib/practice.ts` - lesson curriculum, vocabulary, office sentences, and filtered queues.
- `src/lib/*.test.ts` - keyboard, practice, and typing-engine tests.

## Keyboard layout note

The keyboard mapping lives in `src/lib/keyboard.ts` so it can be corrected independently from the UI. The current screen treats the standard Windows Urdu mapping as a calibration candidate and clearly flags that the learner should verify their installed Windows variant. The user's observed clues (`A` -> `م`, `S` -> `و`) are represented, but the complete mapping should be tested against actual browser `event.code` and produced text before being treated as authoritative.

The app uses curated offline vocabulary and local browser state is the intended persistence layer for anonymous practice. External vocabulary ingestion, accounts, database storage, and audio are intentionally optional follow-up modules rather than prerequisites for learning.

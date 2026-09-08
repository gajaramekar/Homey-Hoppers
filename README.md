# The Homey Hoppers

A small, responsive Next.js website built with TypeScript and Tailwind CSS.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Pages: `/`, `/book`, `/about`.

## Connect bookings

The inquiry form is embedded on `/book`, with a separate link as a fallback. To change forms, update `BOOKING_FORM_URL` in `lib/site.ts` with the new Google Form's full public `/viewform` URL. The embed URL is derived automatically.

## Brand

The five brand colors are defined in `app/globals.css`: `#5B7367`, `#86A395`, `#ADC0A9`, `#EDB7A0`, and `#FAF1ED`. A darker green is used for accessible body text. The supplied logo is in `public/images/homey hopper logo.png`.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
```

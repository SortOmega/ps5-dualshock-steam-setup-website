# Steam Input Setup for Linux — Landing Page

Official landing page for **Steam Input Setup for Linux**, a small open-source
application that helps fix PS5 DualSense controller compatibility with Steam
games on Linux.

The page introduces the application, explains how it works, and provides a
direct link to download the latest available release. It includes English and
Spanish language support, with English as the default language.

## Author

Developed by **SortOmega**.

- Profile: <https://github.com/SortOmega>

## Technology

The landing page is built with:

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Vercel](https://vercel.com/) as the deployment platform

## Application

### Repository

<https://github.com/SortOmega/ps5_dualshok_steam_setup>

### Current release

- Releases page:
  <https://github.com/SortOmega/ps5_dualshok_steam_setup/releases>
- Release `v1.0.0`:
  <https://github.com/SortOmega/ps5_dualshok_steam_setup/releases/tag/v1.0.0>
- Direct download of the Linux x86_64 AppImage:
  <https://github.com/SortOmega/ps5_dualshok_steam_setup/releases/download/v1.0.0/PS5_Steam_Input_Setup_for_Linux-x86_64.AppImage>

## Local development

Install the dependencies using the project lockfile:

```bash
pnpm install --frozen-lockfile
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create a production build:

```bash
pnpm build
```

## Deployment

The project includes [vercel.json](./vercel.json) with the deployment
configuration. Vercel detects the project as a Next.js application and uses
`pnpm install --frozen-lockfile` followed by `pnpm build`.

## License

The **Steam Input Setup for Linux** application is distributed under the
[GNU General Public License v2.0 (GPL-2.0)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html).

Refer to the application repository for the complete license text and its
terms of use, modification, and distribution.

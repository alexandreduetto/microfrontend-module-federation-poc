## MFE Vite Module Federation POC

This repository contains a host app and two remote apps wired together with `@originjs/vite-plugin-federation`, plus a small shared UI library (`frontend-components`).

### Prerequisites

- Node.js 18+ and npm

### 1) Build the shared library (`frontend-components`)

The remotes depend on the built output of this package. Build it first:

```bash
cd frontend-components
npm install
npm run build
```

This generates `dist/` with the compiled artifacts used by the remotes.

### 2) Remote apps

Each remote can be run independently. Start both so the host can consume them.

#### remote-app-1 (port 5001)

```bash
cd remote-app-1
npm install
npm run build
npm run preview
```

#### remote-app-2 (port 5002)

```bash
cd remote-app-2
npm install
npm run build
npm run preview
```

Make sure both remotes are running before starting the host.

### 3) Host app (port 5000)

The host consumes the remotes via module federation.

```bash
cd host-app
npm install
npm run build
npm run preview
```

### Recommended run order (dev mode)

Open three terminals and run in this order:

1. `remote-app-1`: `cd remote-app-1 && npm run dev`
2. `remote-app-2`: `cd remote-app-2 && npm run dev`
3. `host-app`: `cd host-app && npm run dev`

Then open the host at `http://localhost:5000/`.

### Clean and rebuild (if needed)

If you change `frontend-components`, rebuild it and then rebuild the remotes:

```bash
cd frontend-components && npm run build
cd ../remote-app-1 && npm run build
cd ../remote-app-2 && npm run build
cd ../host-app && npm run build
```

If dependencies feel out of sync, remove installs and reinstall:

```bash
rm -rf frontend-components/node_modules remote-app-1/node_modules remote-app-2/node_modules host-app/node_modules
rm -rf frontend-components/dist remote-app-1/dist remote-app-2/dist host-app/dist

cd frontend-components && npm install && npm run build
cd ../remote-app-1 && npm install
cd ../remote-app-2 && npm install
cd ../host-app && npm install
```

### Notes

- Remotes are exposed at:
  - remote-app-1: `http://localhost:5001/assets/remoteEntry.js`
  - remote-app-2: `http://localhost:5002/assets/remoteEntry.js`
- The host is configured to consume the above remotes via Vite Module Federation.

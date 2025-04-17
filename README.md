<div align="center">
  <h2>🎶 Playlist Preserve</h2>
  <h3>Your Apple Music Playlist Time Machine</h3>
  <a href="https://www.playlistpreserve.com?ref=github.com">Website</a>
</div>

### Intro

Playlist Preserve is a minimal, focused web application designed to track and archive changes in Apple Music playlists over time, a feature Apple Music itself does not offer. Inspired by version control systems and changelogs, Playlist Preserve tracks how playlists change—day by day.

This application runs daily sync jobs to capture changes across official Apple-curated playlists. These snapshots record track additions, removals, and reordering—providing a lightweight way to observe how playlists evolve.

While the initial release targets Apple Music's Top 25 by City charts, the long-term vision includes broader support for user-generated playlists and more public curated playlists.

### Table of Content

- [Dependencies](#dependencies)
- [API Structure](#api-structure)
- [Roadmap](#roadmap)
- [License](#license)

### Dependencies

**Core Stack**

- Next.js (App Router) – Full-stack framework for React, API Routes used for both public and internal endpoints
- Shadcn/UI & TailwindCSS – Prebuilt components and utility-driven styling with custom CSS
- Vercel – Hosting, deployment, and Vercel Cron for scheduled automation
- Supabase – PostgreSQL database

**Automation & Jobs**

- Vercel Cron – Triggers internal orchestration endpoints on a daily schedule

**API Integration**

- Apple Music API – Used to fetch playlist metadata and track data
- Apple Developer Token (JWT) – Required for authenticated Apple Music API access

### API Structure

This project uses the Next.js App Router to organize both public and internal API routes. Internal routes are triggered by Vercel Cron jobs.

```
api/
├── playlists/                  # === Public Playlist Endpoints ===
│   ├── route.ts                # GET /api/playlists
│   └── [playlistId]/
│       ├── route.ts            # GET /api/playlists/{playlistId}
│       └── snapshots/
│           └── route.ts        # GET /api/playlists/{playlistId}/snapshots
│
└── internal/                   # === Internal Automation Endpoints ===
    └── playlists/
        ├── sync-all/                   
        │   └── route.ts        # POST /api/internal/playlists/sync-all
        ├── snapshot-all/
        │   └── route.ts        # POST /api/internal/playlists/snapshot-all
        └── [playlistId]/
            ├── sync/
            │   └── route.ts    # POST /api/internal/playlists/{playlistId}/sync
            └── snapshot/
                └── route.ts    # POST /api/internal/playlists/{playlistId}/snapshot
```

### License

This project is licensed under the AGPL-3.0 License. See [LICENSE](https://github.com/MarcACard/playlist-preserve?tab=AGPL-3.0-1-ov-file) for details.
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender }, // Home is SSG
  { path: 'users', renderMode: RenderMode.Server }, // Users SSR (fetches DB)
  { path: '**', renderMode: RenderMode.Server },
];

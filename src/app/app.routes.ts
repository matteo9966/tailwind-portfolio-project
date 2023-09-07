import { Routes } from '@angular/router';
import { pagesConfig } from './config/pages';
export const routesLinks = {
  home: 'home',
  photoGallery: 'gallery',
  faq: 'faq',
};
export const routes: Routes = [
  {
    path: pagesConfig.home.routerPath,
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: pagesConfig.gallery.routerPath,
    loadComponent: () =>
      import('./pages/gallery/gallery.component').then(
        (g) => g.GalleryComponent
      ),
  },
  {
    path: pagesConfig.faq.routerPath,
    loadComponent: () =>
      import('./pages/faq/faq.component').then((c) => c.FaqComponent),
  },
  {
    path: pagesConfig.tickets.routerPath,
    loadComponent: () =>
      import('./pages/tickets/tickets.component').then(
        (t) => t.TicketsComponent
      ),
  },
  {
    path: '',
    redirectTo: routesLinks.home,
    pathMatch: 'full',
  },
  {
    path: '*',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (p) => p.NotFoundComponent
      ),
  },
];

import { Routes } from '@angular/router';
export const routesLinks = {
  home: 'home',
  photoGallery: 'gallery',
};
export const routes: Routes = [
  {
    path: routesLinks.home,
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: routesLinks.photoGallery,
    loadComponent: () =>
      import('./pages/gallery/gallery.component').then(
        (g) => g.GalleryComponent
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

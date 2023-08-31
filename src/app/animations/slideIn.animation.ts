import { animate, AnimationMetadata, style, state } from '@angular/animations';

export const slideInAnimation: AnimationMetadata[] = [
  style({ opacity: 0, transform: 'translateY(200px)' }),
  animate('300ms', style({ opacity: 1, transform: 'translateY(0)' })),
//   state('*', style({ opacity: 1, transform: 'translateY(0)' })),
];

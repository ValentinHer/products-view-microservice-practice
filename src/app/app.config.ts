import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Instagram, Linkedin, LUCIDE_ICONS, LucideIconProvider, Twitter, Youtube } from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), {provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider({ Twitter, Instagram, Youtube, Linkedin })}]
};

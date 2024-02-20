import { bootstrapApplication } from '@angular/platform-browser';
import 'remixicon/fonts/remixicon.css';
import { AppComponent } from './app/shared/app.component';
import { appConfig } from './app/shared/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

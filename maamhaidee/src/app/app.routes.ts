import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IntroComponent } from './intro/intro.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = 
[
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'intro', component: IntroComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'services', component: ServicesComponent }
];

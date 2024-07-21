import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
];

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled', // Dies aktiviert das Scrollen zu Fragmenten
    scrollPositionRestoration: 'enabled' // Optional: Dies stellt die Scroll-Position wieder her
  };

  NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AccountComponent } from './navigatingcomponents/account/account.component';
import { ContactusComponent } from './navigatingcomponents/contactus/contactus.component';
import { CookiepreferencesComponent } from './navigatingcomponents/cookiepreferences/cookiepreferences.component';
import { CorporateinformationComponent } from './navigatingcomponents/corporateinformation/corporateinformation.component';
import { FAQComponent } from './navigatingcomponents/faq/faq.component';
import { HelpcentreComponent } from './navigatingcomponents/helpcentre/helpcentre.component';
import { InvestorRelationsComponent } from './navigatingcomponents/investorrelations/investorrelations.component';
import { JobsComponent } from './navigatingcomponents/jobs/jobs.component';
import { LegalNoticesComponent } from './navigatingcomponents/legalnotices/legalnotices.component';
import { MediacentreComponent } from './navigatingcomponents/mediacentre/mediacentre.component';
import { PrivacyComponent } from './navigatingcomponents/privacy/privacy.component';
import { SpeedtestComponent } from './navigatingcomponents/speedtest/speedtest.component';
import { TermsofuseComponent } from './navigatingcomponents/termsofuse/termsofuse.component';
import { WaystowatchComponent } from './navigatingcomponents/waystowatch/waystowatch.component';
const routes: Routes = [
  { path: '', component:WelcomeComponent},
  {path:'login', component:LoginComponent},
  {path:'FAQ', component:FAQComponent},
  {path:'account',component:AccountComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'cookiepreferences',component:CookiepreferencesComponent},
  {path:'corporateinformation',component:CorporateinformationComponent},
  {path:'helpcentre',component:HelpcentreComponent},
  {path:'investorrelations',component:InvestorRelationsComponent},
  {path:'jobs',component:JobsComponent},
  {path:'legalnotices',component:LegalNoticesComponent},
  {path:'mediacentre',component:MediacentreComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'speedtest',component:SpeedtestComponent},
  {path:'termsofuse',component:TermsofuseComponent},
  {path:'waystowatch',component:WaystowatchComponent},
  {path:'**', component:PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { FAQComponent } from './navigatingcomponents/faq/faq.component';
import { PrivacyComponent } from './navigatingcomponents/privacy/privacy.component';
import { MediacentreComponent } from './navigatingcomponents/mediacentre/mediacentre.component';
import { WaystowatchComponent } from './navigatingcomponents/waystowatch/waystowatch.component';
import { SpeedtestComponent } from './navigatingcomponents/speedtest/speedtest.component';
import { TermsofuseComponent } from './navigatingcomponents/termsofuse/termsofuse.component';
import { LegalNoticesComponent } from './navigatingcomponents/legalnotices/legalnotices.component';
import { CorporateinformationComponent } from './navigatingcomponents/corporateinformation/corporateinformation.component';
import { HelpcentreComponent } from './navigatingcomponents/helpcentre/helpcentre.component';
import { InvestorRelationsComponent } from './navigatingcomponents/investorrelations/investorrelations.component';
import { CookiepreferencesComponent } from './navigatingcomponents/cookiepreferences/cookiepreferences.component';
import { ContactusComponent } from './navigatingcomponents/contactus/contactus.component';
import { JobsComponent } from './navigatingcomponents/jobs/jobs.component';
import { OnlyonnetflixComponent } from './navigatingcomponents/onlyonnetflix/onlyonnetflix.component';
import { YoursNextWatchComponent } from './navigatingcomponents/onlyonnetflix/yours-next-watch/yours-next-watch.component';
import { KDramasComponent } from './navigatingcomponents/onlyonnetflix/k-dramas/k-dramas.component';
import { MadeInIndiaComponent } from './navigatingcomponents/onlyonnetflix/made-in-india/made-in-india.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    LoginComponent,
    PrivacyComponent,
    MediacentreComponent,
    WaystowatchComponent,
    SpeedtestComponent,
    TermsofuseComponent,
    LegalNoticesComponent,
    InvestorRelationsComponent,
    FAQComponent,
    CorporateinformationComponent,
    HelpcentreComponent,
    CookiepreferencesComponent,
    ContactusComponent,
    JobsComponent,
    OnlyonnetflixComponent,
    YoursNextWatchComponent,
    KDramasComponent,
    MadeInIndiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
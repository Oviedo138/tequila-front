import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PrimengModule } from './extra-module/primeng.module';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CountUpModule } from 'ngx-countup';
import { NgxFastMarqueeModule } from 'ngx-fast-marquee';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainBannerComponent } from './components/home/main-banner/main-banner.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { CarouselSectionComponent } from './components/carousel-section/carousel-section.component';
import { OptionsComponent } from './components/banner-sec/options.component';
import { AttractionsComponent } from './components/attractions/attractions.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomePageComponent,
    ContactSectionComponent,
    CarouselSectionComponent,
    MainBannerComponent,
    OptionsComponent,
    AttractionsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastModule,
    PrimengModule,
    SwiperModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CountUpModule,
    NgxFastMarqueeModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    [provideHttpClient(withFetch())],
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

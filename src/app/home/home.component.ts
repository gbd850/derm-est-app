import { Component } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { IntroducerComponent } from './introducer/introducer.component';
import { MediaComponent } from './media/media.component';
import { PartnersComponent } from './partners/partners.component';
import { ProceduresComponent } from './procedures/procedures.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IntroducerComponent,
    ProceduresComponent,
    AboutMeComponent,
    AdvantagesComponent,
    MediaComponent,
    BookingComponent,
    PartnersComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroducerComponent } from './introducer/introducer.component';
import { ProceduresComponent } from './procedures/procedures.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { MediaComponent } from './media/media.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    IntroducerComponent,
    ProceduresComponent,
    AboutMeComponent,
    AdvantagesComponent,
    MediaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'derm-est-app';
}

import { Component } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [BookingComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

}

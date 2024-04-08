import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProceduresService } from '../../procedures-service.service';
import { Procedure } from '../../procedures-page/procedure';

@Component({
  selector: 'app-procedures',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './procedures.component.html',
  styleUrl: './procedures.component.scss'
})
export class ProceduresComponent {

  constructor(private proceduresService: ProceduresService) {}

  procedures : Procedure[] = this.proceduresService.getProcedures();

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 5000,
    "pauseOnHover": true,
    "infinite": true,
    "responsive": [
      {
        "breakpoint": 992,
        "settings": {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 2,
          "slidesToScroll": 1
        }
      },
      {
        "breakpoint": 768,
        "settings": {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 1,
          "slidesToScroll": 1
        }
      }
    ]
  }
}


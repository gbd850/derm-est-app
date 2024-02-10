import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceCategory } from './service';

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.scss',
})
export class PricingPageComponent {
  serviceCategories: ServiceCategory[] = [
    {
      name: '',
      services: [
        {
          name: 'KONSULTACJA DERMATOLOGICZNA',
          price: '200',
        }
      ],
    },
    {
      name: 'TOKSYNA BOTULINOWA',
      note: '(BOTOKS)',
      services: [
        {
          name: 'Wygładzanie zmarszczek (lwia zmarszczka, kurze łapki lub bruzdy poprzeczne czoła, wygładzanie bródki, uniesienie kącikow ust, uniesienie brwi, zmarszczki nad górną wargą, zmarszczki nosa, uśmiech dziąsłowy)',
          price: '350 - 1000',
        },
        {
          name: 'Brusizm',
          price: '700 - 1200',
        },
        {
          name: 'Nadpotliwość (górna warga, czoło, pachy, dłonie, podeszwy stóp)',
          price: '300 - 1500',
        },
      ],
    },
    {
      name: 'KWAS HIALURONOWY',
      note: '(CENA ZALEŻNA OD RODZAJU I ILOŚCI PREPARATU)',
      services: [
        {
          name: 'Wypełnianie zmarszczek i modelowanie ust',
          price: '900 – 1000'
        },
        {
          name: 'Modelowanie i odbudowa kształtu twarzy',
          price: 'od 900'
        },
        {
          name: 'Korygowanie kształtu nosa',
          price: 'od 900'
        },
        {
          name: 'Odmładzanie grzbietów rąk',
          price: 'od 900'
        },
        {
          name: 'Biorewitalizacja na bazie prep. kwasu hialuronowego',
          price: 'od 600'
        },
        {
          name: 'Rozpuszczanie złogów kwasu hialuronowego',
          price: '600'
        }
      ]
    },
    {
      name: 'STYMULATORY KOLAGENU',
      services: [
        {
          name: 'Sculptra',
          price: '1600'
        },
        {
          name: 'Radiesse',
          price: '1500'
        }
      ]
    },
    {
      name: 'ZABIEGI Z WYKORZYSTANIEM NICI CHIRURGICZNYCH',
      services: [
        {
          name: 'Nici biorewitalizujące PDO, PLLA, PCL',
          price: 'od 600'
        },
        {
          name: 'Nici liftingujące haczykowe',
          price: 'od 2000'
        }
      ]
    }
  ];
}

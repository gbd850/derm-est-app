import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Problem } from './problem';

@Component({
  selector: 'app-problems-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './problems-page.component.html',
  styleUrl: './problems-page.component.scss',
})
export class ProblemsPageComponent {
  problems: Problem[] = [
    {
      name: 'Rozstępy',
      imgUrl:
        'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-12.jpg',
    },
    {
      name: 'Trądzik',
      imgUrl:
        'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-13.jpg',
    },
    {
      name: 'Wypadanie włosów / łysienie',
      imgUrl:
        'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-14.jpg',
    },
    {
      name: 'Znamiona, włókniaki, brodawki skórne',
      imgUrl:
        'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-15.jpg',
    },
    {
      name: 'Przebarwienia',
      imgUrl:
        'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-16.jpg',
    },
    {
      name: 'Nadpotliwość',
      imgUrl:
        'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-17.jpg',
    },
    {
      name: 'Bruksizm',
      imgUrl:
        'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-18.jpg',
    },
    {
      name: 'Blizny / keloidy',
      imgUrl:
        'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-19.jpg',
    },
    {
      name: 'Trądzik różowaty',
      imgUrl:
        'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-23.jpg',
    },
    {
      name: 'Naczynka na nogach',
      imgUrl:
        'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-22.jpg',
    },
    {
      name: 'Cellulit',
      imgUrl:
        'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-20.jpg',
    },
    {
      name: 'Zabiegi przeciwstarzeniowe',
      imgUrl:
        'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-21.jpg',
    },
    {
      name: 'Zmarszczki i bruzdy',
      imgUrl:
        'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-24.jpg',
    },
  ];
}

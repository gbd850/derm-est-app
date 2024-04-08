import { Injectable } from '@angular/core';
import { Procedure } from './procedures-page/procedure';

@Injectable({
  providedIn: 'root'
})
export class ProceduresService {

  constructor() { }

  getProcedures() : Procedure[] {
    const procedures : Procedure[] = [
      {
        name: 'Skleroterapia',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-25.jpg'
      },
      {
        name: 'Lipoliza iniekcyjna',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-29.jpg'
      },
      {
        name: 'Frakcyjna radiofrekwencja igłowa',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-32.jpg'
      },
      {
        name: 'Kwas polimlekowy',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-35.jpg'
      },
      {
        name: 'Peeling lekarski',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-26.jpg'
      },
      {
        name: 'Mezoterapia',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-30.jpg'
      },
      {
        name: 'Kwas hialuronowy',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-33.jpg'
      },
      {
        name: 'Osocze bogatopłytkowe / Fibryna bogatopłytkowa',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-36.jpg'
      },
      {
        name: 'Plazma dermatochirurgiczna',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-27.jpg'
      },
      {
        name: 'Hydroksyapatyt wapnia',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-31.jpg'
      },
      {
        name: 'Laser frakcyjny',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/04/Component-4-%E2%80%93-34.jpg'
      },
      {
        name: 'Thermage',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-37.jpg'
      },
      {
        name: 'Dermatoskopia',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-28.jpg'
      },
      {
        name: 'Trichoskopia',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-40.jpg'
      },
      {
        name: 'Peeling TCA',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-39.jpg'
      },
      {
        name: 'PQ AGE',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-39.jpg'
      },
      {
        name: 'Cosmelan / Dermamelan',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-39.jpg'
      },
      {
        name: 'Yellow peel',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-39.jpg'
      },
      {
        name: 'IPL',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-45.jpg'
      },
      {
        name: 'HIFU',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-41.jpg'
      },
      {
        name: 'Toksyna botulinowa',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/02/Component-4-%E2%80%93-43.jpg'
      },
      {
        name: 'Laserowe zamykanie naczynek',
        imageUrl: 'https://medycyna-estetyczna-lublin.com/wp-content/uploads/2023/04/Component-4-%E2%80%93-49.jpg'
      },
    ]
    return procedures
  }

}

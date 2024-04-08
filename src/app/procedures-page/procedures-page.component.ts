import { Component } from '@angular/core';
import { Procedure } from './procedure';
import { CommonModule } from '@angular/common';
import { ProceduresService } from '../procedures-service.service';

@Component({
  selector: 'app-procedures-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './procedures-page.component.html',
  styleUrl: './procedures-page.component.scss'
})
export class ProceduresPageComponent {

  constructor(private proceduresService: ProceduresService) {}

  procedures : Procedure[] = this.proceduresService.getProcedures();

}

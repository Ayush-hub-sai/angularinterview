import { Component } from '@angular/core';
import { HostbindingDirective } from '../../../directive/hostBinding/hostbinding.directive';

@Component({
  selector: 'app-hostbinding',
  standalone: true,
  imports: [HostbindingDirective],
  templateUrl: './hostbinding.component.html',
  styleUrl: './hostbinding.component.scss'
})
export class HostbindingComponent {

}

import { Component } from '@angular/core';
import { HostlistnerDirective } from '../../../directive/hostListner/hostlistner.directive';

@Component({
  selector: 'app-hostlistner',
  standalone: true,
  imports: [HostlistnerDirective],
  templateUrl: './hostlistner.component.html',
  styleUrl: './hostlistner.component.scss'
})
export class HostlistnerComponent {

}

import { Component} from '@angular/core';
import { ReslistComponent } from '../reslist/reslist.component';
import { CommonModule} from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReslistComponent, CommonModule, RouterLink, RouterLinkActive,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

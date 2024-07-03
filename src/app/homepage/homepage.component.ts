import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  items = [
    { step: 1, content: 'Content for step 1', image: 'path/to/image1.jpg' },
    { step: 2, content: 'Content for step 2', image: 'path/to/image2.jpg' },
    { step: 3, content: 'Content for step 3', image: 'path/to/image3.jpg' },
    { step: 4, content: 'Content for step 4', image: 'path/to/image4.jpg' },
    { step: 5, content: 'Content for step 5', image: 'path/to/image5.jpg' }
  ];
}

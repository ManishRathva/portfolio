import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgClass } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

export interface Education {
  period: string;
  level: string;
  school: string;
  description: string;
  details: any;
}

export interface PesronalDetails {
  dob: Date,
  email: string,
  phone: string,
  address: string,
  language: string,
  [key: string]: any;
}

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, FormsModule, NgClass, FooterComponent, DatePipe],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  linkData!: string;
  objectKeys = Object.keys;
  constructor() {

  }

  ngOnInit() {

  }

  items = [
    { step: 1, content: 'Content for step 1', image: '/assets/images/bimg1.jpg' },
    { step: 2, content: 'Content for step 2', image: '/assets/images/bimg1.jpg' },
    { step: 3, content: 'Content for step 3', image: '/assets/images/bimg1.jpg' },
    { step: 4, content: 'Content for step 4', image: '/assets/images/bimg1.jpg' },
    { step: 5, content: 'Content for step 5', image: '/assets/images/bimg1.jpg' }
  ];

  educationList: Education[] = [
    {
      period: '2015-2016',
      level: 'Secondary School',
      school: 'Sedcondary School',
      description: 'V.R.Shah Sarvjanik HighSchool, Pavi Jetpur, Chhotaudaipur',
      details: [
        {
          details: 'V.R.Shah Sarvjanik HighSchool, Pavi Jetpur, Chhotaudaipur'
        },
        {
          details: 'V.R.Shah Sarvjanik HighSchool, Pavi Jetpur, Chhotaudaipur'
        }
      ],
    },
    {
      period: '2017-2018',
      level: 'Higher Secondary',
      school: 'Higher Secondary School',
      description: 'Shree Vivekananda School, Rajkot',
      details: [
        {
          details: 'V.R.Shah Sarvjanik HighSchool, Pavi Jetpur, Chhotaudaipur'
        },
        {
          details: 'V.R.Shah Sarvjanik HighSchool, Pavi Jetpur, Chhotaudaipur'
        }
      ],
    },
    {
      period: '2018-2023',
      level: 'Graduation and Masters',
      school: 'Graduation and Masters',
      description: 'Gujarat Technological University',
      details: [{
        details: 'V.R.Shah Sarvjanik HighSchool, Pavi Jetpur, Chhotaudaipur'
      },
      {
        details: 'V.R.Shah Sarvjanik HighSchool, Pavi Jetpur, Chhotaudaipur'
      }],
    }
  ];

  personalDetails: PesronalDetails[] = [
    {
      dob: new Date('2000-02-10'),
      email: 'manishrathva@gmail.com',
      phone: '6354285812',
      address: 'Pavi Jetpur,Chhota Udaipur',
      language: 'English , Gujarati, Hindi'
    }
  ]

  getRouter(value: string) {
    this.linkData = value;
    this.scrollToSection(value);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}

import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BehaviorSubject, Subject, throttleTime,skip } from 'rxjs';
import { TextDrawerComponent } from './components/text-drawer/text-drawer.component';
import { ImagesSlideshowComponent } from "./components/images-slideshow/images-slideshow.component";
import { ToggleComponent } from './components/toggle/toggle.component';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent,TicketCardComponent ]
})
export class AppComponent implements OnInit {


  
  ngOnInit(): void {

  }

  title = 'tailwind-portfolio-project';
}

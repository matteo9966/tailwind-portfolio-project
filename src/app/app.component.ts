import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BehaviorSubject, Subject, throttleTime,skip } from 'rxjs';
import { TextDrawerComponent } from './components/text-drawer/text-drawer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent,TextDrawerComponent],
})
export class AppComponent implements OnInit {
  resize$ = new BehaviorSubject(window.innerWidth);
  @HostListener('window:resize')
  onResizeWindow() {
    const prev = this.resize$.getValue();
    const current = window.innerWidth;
    if(prev && current){
      if(Math.abs(prev-current)>150){
        this.resize$.next(window.innerWidth);
      }
    }
  }
  
  ngOnInit(): void {
    this.resize$
    .asObservable()
    .pipe(skip(1),throttleTime(1000, undefined, { leading: false, trailing: true }))
    .subscribe((value) => {
      window.location.reload();
      });
  }

  title = 'tailwind-portfolio-project';
}

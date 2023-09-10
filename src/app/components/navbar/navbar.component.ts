import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
  ChangeDetectionStrategy,
  inject,
  OnInit,
  HostBinding,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { NavbarMenuItemComponent } from '../navbar-menu-item/navbar-menu-item.component';
import { NavbarBtnMobileComponent } from '../navbar-btn-mobile/navbar-btn-mobile.component';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router,RouterEvent,Event, NavigationEnd, NavigationStart } from '@angular/router';
import { Observable, Subject, debounce, debounceTime, filter, map } from 'rxjs';
import { pagesConfig } from 'src/app/config/pages';
@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ButtonComponent,
    NavbarMenuItemComponent,
    NavbarBtnMobileComponent,
  ],
  animations: [
    trigger('enterMenu', [
      transition(':enter', [
        style({ width: '0px' }),
        animate(500, style({ width: '400px' })),
      ]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {

  pages=Object.values(pagesConfig);

  private scroll$ = new Subject<number>();
  @HostListener('window:scroll')
  userScrolled(){
   this.scroll$.next(window.scrollY);
  }


  @ViewChild('navbarContainer', { read: ViewContainerRef })
  //@ts-ignore
  containerRef: ViewContainerRef;
  //@ts-ignore
  showBg$:Observable<boolean>
  //@ts-ignore
  mobileMenuComponent: ComponentRef<MobileMenuComponent>;
  router =inject(Router);

  private _open=false;


 ngOnInit(){

  this.router.events.subscribe((event:Event|RouterEvent)=>{
    if(event instanceof NavigationStart){
     this.open=false;
    }
  })

  this.showBg$ =this.scroll$.pipe(debounceTime(200),map(scroll=>{
    if(scroll>0){
      return true
    }
    return false
  }))

 }

onShowMobileMenu(open: boolean) {
    this.open=open;
  }

  set open(open:boolean){
    this._open=open;
    if (open) {
      this.mobileMenuComponent =
        this.containerRef.createComponent(MobileMenuComponent);

  } else {
    if (this.mobileMenuComponent) {
      this.containerRef.clear();
    }
  }
  }

  get open(){
    return this._open
  }
}

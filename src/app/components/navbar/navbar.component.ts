import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
  ChangeDetectionStrategy,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { NavbarMenuItemComponent } from '../navbar-menu-item/navbar-menu-item.component';
import { NavbarBtnMobileComponent } from '../navbar-btn-mobile/navbar-btn-mobile.component';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router,RouterEvent,Event, NavigationEnd, NavigationStart } from '@angular/router';
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
  @ViewChild('navbarContainer', { read: ViewContainerRef })
  //@ts-ignore
  containerRef: ViewContainerRef;
  //@ts-ignore
  mobileMenuComponent: ComponentRef<MobileMenuComponent>;
  cdr = inject(ChangeDetectorRef);
  router =inject(Router);

  private _open=false;


 ngOnInit(){

  this.router.events.subscribe((event:Event|RouterEvent)=>{
    if(event instanceof NavigationStart){
     this.open=false;
    }
  })

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

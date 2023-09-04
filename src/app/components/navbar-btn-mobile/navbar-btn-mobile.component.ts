import { ChangeDetectionStrategy, Component,EventEmitter,Output,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-btn-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-btn-mobile.component.html',
  styleUrls: ['./navbar-btn-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarBtnMobileComponent {
 
  // @Output() openChange:EventEmitter<boolean> = new EventEmitter()
  private _open=false;
  
 
  @Input()  
  set open(open:boolean){
    this._open=open
  }
  
  get open(){
    return this._open
  }

}

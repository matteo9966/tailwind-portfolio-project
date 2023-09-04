import { ChangeDetectionStrategy, Component,inject,Renderer2,ViewChild,ElementRef,AfterViewInit, Input, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';

@Component({
  selector: 'app-picture-card',
  standalone: true,
  imports: [CommonModule,ObserveVisibilityDirective],
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PictureCardComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    
  }
 
  renderer = inject(Renderer2);

  @ViewChild('window1') window1!:ElementRef;
  @ViewChild('window2') window2!:ElementRef;
  @ViewChild('card') card!:ElementRef;
  @Input() description="";
  @Input() imageUrl="";

  animate(){
    if(this.window1 && this.window2 && this.card){
        this.addAnimationClassToElement(this.window1.nativeElement,'animate-window-1')
    }
       this.addAnimationClassToElement(this.window2.nativeElement,'animate-window-2')
       this.addAnimationClassToElement(this.card.nativeElement,'animation-rotation')

  }


  private addAnimationClassToElement(element:HTMLElement,animationClass:string){
    this.renderer.addClass(element,animationClass);
  }




}

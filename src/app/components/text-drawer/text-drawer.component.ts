import { ChangeDetectionStrategy, Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-drawer.component.html',
  styleUrls: ['./text-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextDrawerComponent {
  //@ts-ignore
  @Input({required:true}) question:string;
  //@ts-ignore
  @Input({required:true}) answer:string;
  menuOpen=false;
  
}

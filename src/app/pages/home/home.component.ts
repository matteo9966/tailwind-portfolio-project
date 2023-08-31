import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureCardComponent } from 'src/app/components/picture-card/picture-card.component';
import { ScrollPicturesComponent } from '../../components/scroll-pictures/scroll-pictures.component';
import { PlayButtonComponent } from '../../components/play-button/play-button.component';
import { TextCardComponent } from '../../components/text-card/text-card.component';
import { MovingImagesComponent } from '../../components/moving-images/moving-images.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { SlideInDirective } from 'src/app/directives/slide-in.directive';
import { ObserveVisibilityDirective } from 'src/app/directives/observe-visibility.directive';
import { SlidesComponent } from "../../components/slides/slides.component";
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [],
    imports: [
        CommonModule,
        PictureCardComponent,
        ScrollPicturesComponent,
        PlayButtonComponent,
        TextCardComponent,
        MovingImagesComponent,
        SlideInDirective,
        ObserveVisibilityDirective,
        SlidesComponent
    ]
})
export class HomeComponent {}

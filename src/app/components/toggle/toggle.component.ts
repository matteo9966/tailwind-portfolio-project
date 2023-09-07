import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleComponent {
  private _active = false;
  get active() {
    return this._active;
  }
  set active(active: boolean) {
    this._active = active;
    this.activeChange.emit(active);
  }

  @Output()
  activeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
}


import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  collapsed = true;
  @Output() featureSelect = new EventEmitter();

  onFeatureSelect(feature: string) {
    this.featureSelect.emit(feature);
  }
}

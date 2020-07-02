import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private featureSelected = 'recipe';

  onFeatureSelect(feature: string) {
    this.featureSelected = feature;
  }
}

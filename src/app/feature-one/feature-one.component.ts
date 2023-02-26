import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-feature-one',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './feature-one.component.html',
  styleUrls: ['./feature-one.component.scss']
})
export class FeatureOneComponent {

}

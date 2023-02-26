import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentOneComponent} from "../../components/component-one/component-one.component";

@Component({
  selector: 'app-page-two',
  standalone: true,
  imports: [CommonModule, ComponentOneComponent],
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent {

}

import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceOneService} from "../../services/service-one/service-one.service";

@Component({
  selector: 'app-page-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent {
  constructor(private service: ServiceOneService) {
  }

  test() {
    return this.service.test();
  }
}

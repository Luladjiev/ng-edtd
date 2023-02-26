import {Inject, Injectable} from '@angular/core';
import {API_URL} from "../../../app.config";

@Injectable({
  providedIn: 'root'
})
export class ServiceOneService {
  constructor(@Inject(API_URL) private apiUrl: string) {
  }

  test() {
    return this.apiUrl + '/asdf';
  }
}

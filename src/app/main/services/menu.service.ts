import { Injectable } from '@angular/core';
import { asyncScheduler, BehaviorSubject, scheduled, take } from 'rxjs';
import { Menu, MOCKED_MENU } from '../main.model';
import { MainApiService } from './main-api.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService { 
  private menu_data = new BehaviorSubject<Menu>({version: 0, items: []});
  menu_data$ = this.menu_data.asObservable();

  constructor(private mainApiService: MainApiService) {}

  getMenu() {
    // TODO: Add daily check
    if (this.menu_data.getValue().version === 0) {
      this.mainApiService.fetchNewMenu()
        .pipe(take(1))
        .subscribe((result) => this.menu_data.next(result));
    }
  }

}
import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Menu, MOCKED_MENU } from '../main.model';

@Injectable({
  providedIn: 'root',
})
export class MainApiService {
  fetchNewMenu(): Observable<Menu> {
    // TODO: "of" method is going to be deprecated. Try different approach.
    // return scheduled(MOCKED_MENU, asyncScheduler);
    return of(MOCKED_MENU).pipe(delay(2000));
  }

}
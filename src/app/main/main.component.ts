import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import { Menu, Menu_Item } from './main.model';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  private menu = new BehaviorSubject<Menu_Item[]>([]);
  menu$ = this.menu.asObservable().pipe(distinctUntilChanged());

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenu();
    this.menuService.menu_data$.subscribe({next: (result) => {
      this.menu.next(result.items);
    }});
  }
}

import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/services/menu.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css'],
})
  
export class LayoutPageComponent implements AfterViewInit{

  constructor(
    private menuService: MenuService,
    private route: Router
  ) { }
  
  ngAfterViewInit(): void {
    this.restoreActiveMenu();
    this.addClicked();
  }

  addClicked() {
    let list = document.querySelectorAll(".navbar li");
    function activeLink(this: any) {
      list.forEach((item) => {
        item.classList.remove("clicked");
      });
      this.classList.add("clicked");
    }
    list.forEach((item) => {
      item.addEventListener("click", activeLink);
    });
  }

  restoreActiveMenu() {
    const activeMenuId = this.menuService.getActiveMenu();
    const lastPath = this.menuService.getLastPath();
    if (activeMenuId) {
      const activeMenu = document.getElementById(activeMenuId);
      if (activeMenu) {
        activeMenu.classList.add("clicked");
      }
      if (lastPath) {
        this.route.navigate([lastPath])
      }
    }
  }

}

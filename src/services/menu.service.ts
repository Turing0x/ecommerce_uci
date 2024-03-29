import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class MenuService {

   private activeMenuId: string | null = null;
   private lastPath: string | null = null;

   constructor() {
      this.activeMenuId = localStorage.getItem('activeMenu');
      this.lastPath = localStorage.getItem('lastPath');
   }

   setActiveMenu(id: string): void {
      this.activeMenuId = id;
      localStorage.setItem('activeMenu', id);
   }

   getActiveMenu(): string | null {
      return this.activeMenuId ?? '1';
   }

   setLastPath(id: string): void {
      this.lastPath = id;
      localStorage.setItem('lastPath', id);
   }

   getLastPath(): string | null {
      return this.lastPath ?? '/products/list';
   }

}
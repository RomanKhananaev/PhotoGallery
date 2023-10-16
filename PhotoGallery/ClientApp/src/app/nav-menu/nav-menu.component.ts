import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  //ngOnInit(): void {
  //  console.log("Nav was created..");
  //  document.getElementById("home")?.classList.add("highlighted");
  //}
  highlightNavMenue(menu: string) {
    document.getElementById("home")?.classList.remove("highlighted");
    document.getElementById("planingEvent")?.classList.remove("highlighted");
    document.getElementById("services")?.classList.remove("highlighted");
    document.getElementById("reviews")?.classList.remove("highlighted");

    document.getElementById(menu)?.classList.add("highlighted");
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

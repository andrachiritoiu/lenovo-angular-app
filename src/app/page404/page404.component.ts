import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page404',
  imports: [],
  templateUrl: './page404.component.html',
  styleUrl: './page404.component.scss'
})
export class Page404Component {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/recipes']);
}
}
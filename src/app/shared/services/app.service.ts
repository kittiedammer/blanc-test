import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private router: Router
  ) { }

  public goClientCard(id: number) {
    this.router.navigate([`clients/${id}`]);
  }

  public goClients() {
    this.router.navigate([`clients`]);
  }
}

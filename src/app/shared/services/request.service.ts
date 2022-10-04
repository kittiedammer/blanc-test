import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first } from 'rxjs';
import { StoreService } from './store.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient,
    private storeService: StoreService,
    private router: Router
  ) { }

  public getClients() {
    this.storeService.setClients(null);
    this.http.get(`/clients/`).pipe(delay(700), first()).subscribe(
      // как здесь типизовать ответ с помощью перехватчика, я не знаю) знаю как с нормальным бекендом
      (response: any) => {
        this.storeService.setClients(response);
      }
    );
  }

  public getClient(id: number) {
    this.storeService.setClient(null);
      this.http.get(`/clients/${id}`).pipe(delay(700), first()).subscribe(
        (response: any) => {
          this.storeService.setClient(response);
        }
      );
  }
  
  public postPhone(number: string, id: number) {
    // вообще тут же по логике должен быть PUT, но делаю, как в тз
    this.http.post(`/${id}/changephone`, {phone: number}).pipe(delay(700), first()).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['clients']);
      }
    );
  }


}

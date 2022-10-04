import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Client } from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private clients$: BehaviorSubject<Array<Client> | null> = new BehaviorSubject<Array<Client> | null>(null);
  private client$: BehaviorSubject<Client | null> = new BehaviorSubject<Client | null>(null);

  constructor() {
  }

  public setClients(data: Array<Client> | null): void {
    this.clients$.next(data);
  }

  public get getClients$(): BehaviorSubject<Array<Client> | null> {
    return this.clients$;
  }

  public setClient(data: Client | null): void {
    this.client$.next(data);
  }

  public get getClient$(): BehaviorSubject<Client | null> {
    return this.client$;
  }
}

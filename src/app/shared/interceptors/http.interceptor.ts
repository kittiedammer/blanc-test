import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Client, Currency, TransactionType } from "../interfaces";


@Injectable({
  providedIn: 'root',
})
export class AppInterceptor implements HttpInterceptor {

  mockClients: Array<Client> = [
    {
      id: 1,
      organizationName: "Juventus",
      ITN: 3664069397,
      date: "2021-10-05T14:48:00.000Z",
      accountBalance: 123400,
      currencyBalance: Currency.RUB,
      phone: "+79998888888",
      transactions: [
        {
          date: "2021-12-07T14:48:00.000Z",
          counterparty: "Seria A",
          ammount: 23546,
          type: TransactionType.INBOX,
        },
      ]
    },
    {
      id: 2,
      organizationName: "Manchester United",
      ITN: 3664045632,
      date: "2021-11-05T14:48:00.000Z",
      accountBalance: 186500,
      currencyBalance: Currency.RUB,
      phone: "+79998823488",
      transactions: [
        {
          date: "2021-12-07T14:48:00.000Z",
          counterparty: "APL",
          ammount: 23546,
          type: TransactionType.INBOX,
        },
        {
          date: "2021-12-09T14:48:00.000Z",
          counterparty: "UEFA",
          ammount: 13546,
          type: TransactionType.OUTBOX,
        },
      ]
    },
    {
      id: 3,
      organizationName: "Real Madrid",
      ITN: 3664098652,
      date: "2021-12-05T14:48:00.000Z",
      accountBalance: 56430,
      currencyBalance: Currency.USD,
      phone: "+79128823488",
      transactions: [
        {
          date: "2021-12-07T14:48:00.000Z",
          counterparty: "La Liga",
          ammount: 23546,
          type: TransactionType.INBOX,
        },
      ]
    }
  ]

  constructor(
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    switch (request.method) {
      case "GET": return this.getHandler(request);
      case "POST": return this.postHandler(request);
      default: return of(new HttpResponse({ status: 404, body: "DEAD" }))
    }
  }

  private getHandler(request: HttpRequest<any>): Observable<HttpEvent<any>> {
    if (request.url.split('/')[2]) {
      let currentUserData = this.mockClients.find(el => el.id === Number(request.url.split('/')[2]))
      return of(new HttpResponse({ status: 200, body: currentUserData }));
    }
    else return of(new HttpResponse({ status: 200, body: this.mockClients }));
  }

  private postHandler(request: HttpRequest<any>): Observable<HttpEvent<any>> {

    let idx = this.mockClients.findIndex(el => el.id === Number(request.url.split('/')[1]));
    let mockData = this.mockClients;
    mockData[idx].phone = request.body.phone;

    return of(new HttpResponse({ status: 200, body: mockData }))
  }


}


import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Client } from 'src/app/shared/interfaces';
import { AppService } from 'src/app/shared/services/app.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(
    public store: StoreService,
    public appService: AppService,
    private requestService: RequestService
  ) { }

  public clients: Array<Client> = [];

  ngOnInit(): void {
    this.requestService.getClients();
  }

}

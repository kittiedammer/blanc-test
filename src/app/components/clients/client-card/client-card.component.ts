import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { first, Subscription } from 'rxjs';
import { AppService } from 'src/app/shared/services/app.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {

  constructor(
    public appService: AppService,
    private requestService: RequestService,
    private route: ActivatedRoute,
    public store: StoreService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(params => {
      this.requestService.getClient(params['id']);
    });
  }

}

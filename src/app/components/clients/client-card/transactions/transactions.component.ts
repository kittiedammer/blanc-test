import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/shared/interfaces';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  @Input() transactions: Transaction[] | undefined;

  constructor(
    public store: StoreService
  ) { }

  ngOnInit(): void {
  }

}

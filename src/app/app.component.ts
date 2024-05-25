import { Component, OnInit } from '@angular/core';
import { OperationsService } from './services/operations.service';
import { OperationListResponse } from './types/operations-list-response.type';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchTerm: string = '';
  //operationsList: OperationListResponse = [];
  operationsList$: Observable<OperationListResponse> | undefined;

  constructor(private readonly _operationsService: OperationsService) { }


  ngOnInit() {
    this.operationsList$ = this._operationsService.getOperations();

    //this.getOperations();
  }

  // getOperations() {
  //   this._operationsService.getOperations()
  //     .pipe(take(1))
  //     .subscribe((operationsListResponse) => {
  //       this.operationsList = operationsListResponse;
  //     });
  // }


}
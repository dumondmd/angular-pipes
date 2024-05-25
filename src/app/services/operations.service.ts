import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { OperationListResponse } from "../types/operations-list-response.type";
import { OperationsListResponseMock } from "../mock/operations-list-response.mocks";

@Injectable({
    providedIn: 'root',
})

export class OperationsService {
    getOperations(): Observable<OperationListResponse> {
        return of(OperationsListResponseMock);
    }
}
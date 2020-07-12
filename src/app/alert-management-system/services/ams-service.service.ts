import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmsServiceService {
  public showAddNewPopup$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  public showConfigurePopup$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  public dataToAddOnConfigurePopup$: BehaviorSubject<any> = new BehaviorSubject(null);
  public dataToAddOnNewPopup$: BehaviorSubject<any> = new BehaviorSubject(null);
  public selectedServer$: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() { }
  
  toggleAddNewPopup(flag:boolean) {
    this.showAddNewPopup$.next(flag);
  }

  toggleConfigurePopup(flag:boolean) {
    this.showConfigurePopup$.next(flag);
  }

  submitOnNewPopup(dataToSubmit:any){
    this.dataToAddOnNewPopup$.next(dataToSubmit);
  }

  submitOnConfigurePopup(dataToSubmit:any){
    this.dataToAddOnConfigurePopup$.next(dataToSubmit);
  }

  selectedServer(value:string){
    this.selectedServer$.next(value);
  }
}

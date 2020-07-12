import { Component, OnInit } from '@angular/core';
import { AmsServiceService } from '../../services/ams-service.service';

@Component({
  selector: 'app-popup-add',
  templateUrl: './popup-add.component.html',
  styleUrls: ['./popup-add.component.scss']
})
export class PopupAddComponent implements OnInit {
  types: any = [];
  conditions:any = [];
  value:any;
  response:any = [];
  show: boolean;
  visiblity:boolean=false;
  selectedType:any = 'Load Average';
  selectedCondition:any = 'Is more than (>)';
  dataToSubmit:any = [];
  selectedServer:string = 'Server A (203.22.33.42)';
  empty:boolean=false;

  constructor(private amsServiceService:AmsServiceService) { }

  ngOnInit(): void {
    this.types = [
      'Load Average', 
      'Harddisk Space', 
      'Memory Usage', 
      'Web Server'
    ];
    this.conditions = [
      'Is more than (>)', 
      'Is less than (<)', 
      'is equal to (=)'
    ];
    this.response = [
      'Does not contain'
    ];
    this.amsServiceService.showAddNewPopup$.subscribe((value) => {
      this.show = value;
    });

    this.amsServiceService.selectedServer$.subscribe((value) => {
      if(value){
        this.selectedServer = value
      }
    });
  }

  closePopup(){
    this.amsServiceService.toggleAddNewPopup(false); 
  }

  selectedTypeHandler(event){
    this.selectedType = event.target.value;
    event.target.value == "Web Server" ? this.visiblity = true : this.visiblity = false;    
  }

  selectedConditionHandler(event){
    this.selectedCondition = event.target.value;
  }

  add(){
    if(this.value){
      this.dataToSubmit = {
          type: this.selectedType,
          condition: this.selectedCondition,
          value: this.value
      }
      this.amsServiceService.submitOnNewPopup(this.dataToSubmit);
      this.closePopup();
    }else{
      this.empty=true;
    }
  }

}

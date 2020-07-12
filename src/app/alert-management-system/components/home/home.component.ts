import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AmsServiceService } from '../../services/ams-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  servers:any = [];
  data:any = [];
  sendAlertOnEmail:any;
  sendAlertOnEmailChecked:any;
  index:any;

  constructor(private amsServiceService: AmsServiceService) { }

  ngOnInit(): void {
    this.servers = [
      'Server A (203.22.33.42)', 
      'Server A (204.22.34.44)', 
      'Server A (212.32.31.24)', 
      'Server A (200.42.12.94)'
    ];

    this.amsServiceService.dataToAddOnNewPopup$.subscribe((value) => {
      if(value){
        this.data.push(value);
      }
    });

    this.amsServiceService.dataToAddOnConfigurePopup$.subscribe((value) => {
      if(value){
        this.sendAlertOnEmail = value.emails,
        this.sendAlertOnEmailChecked = value.checked
      }
    });
  }

  showAddNewPopup() {
    this.amsServiceService.toggleAddNewPopup(true);    
  }

  showConfigurePopup() {
    this.amsServiceService.toggleConfigurePopup(true);    
  }

  selectedServerHandler(event){
    this.amsServiceService.selectedServer(event.target.value);
  }

  delete(event){
    this.index = event.target.closest('tr').id;
    this.data.splice(this.index, 1)
  }
}

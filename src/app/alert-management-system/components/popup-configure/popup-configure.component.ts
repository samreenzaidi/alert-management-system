import { Component, OnInit } from '@angular/core';
import { AmsServiceService } from '../../services/ams-service.service';

@Component({
  selector: 'app-popup-configure',
  templateUrl: './popup-configure.component.html',
  styleUrls: ['./popup-configure.component.scss']
})
export class PopupConfigureComponent implements OnInit {
  show: boolean;
  emails: any;
  dataToSubmit: any;
  checked: boolean;
  constructor(private amsServiceService:AmsServiceService) { }

  ngOnInit(): void {
    this.amsServiceService.showConfigurePopup$.subscribe((value) => {
      this.show = value;
    });
  }

  closePopup(){
    this.amsServiceService.toggleConfigurePopup(false); 
  }

  add(){
    this.dataToSubmit = {
      emails: this.emails,
      checked: this.checked
    }  
    this.amsServiceService.submitOnConfigurePopup(this.dataToSubmit);
    this.closePopup();
  }
}

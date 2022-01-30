import { Component, OnInit } from '@angular/core';
import { ApigalerieService } from '../../services/apigalerie.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss']
})
export class GalerieComponent implements OnInit {

  constructor(private apiGalerieService: ApigalerieService) { }
  Items;

  ngOnInit() {
    //appel apigalerie.service
    this.apiGalerieService.getImage().subscribe((resp: any) => {
      this.Items = resp;
      console.log(resp);
    });
  }

}

import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-resadd',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf,JsonPipe, RouterLink, RouterLinkActive],
  templateUrl: './resadd.component.html',
  styleUrl: './resadd.component.css'
})
export class ResaddComponent {
  foglalasok:any
  oszlopok:any
  newFoglalas:any={}

  constructor(
    private base: BaseService,
    private config: ConfigService){

      this.oszlopok=this.config.getOszlopok()

      this.base.getFoglalasok().subscribe(
        (res)=>this.foglalasok=res
      )
    }

    postFoglalas(){
      this.base.postFoglalas(this.newFoglalas)
      this.newFoglalas={}
    }
}

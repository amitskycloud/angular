import { Component } from '@angular/core';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent {

    showSearchValue(str_tex :string){
      console.log(str_tex)
    }
}

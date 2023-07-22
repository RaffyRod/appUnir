import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  constructor(private router:Router){}
  agregarCita(){
    this.router.navigate(['/tab2'])
  }
  verCitas(){
    this.router.navigate(['/tab3'])
  }
  // @Input() name?: string;

}

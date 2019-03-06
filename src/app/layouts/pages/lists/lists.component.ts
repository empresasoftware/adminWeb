import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../../service/admin.service';
import { Scort } from '../../../model/scort';

@Component({
  selector: 'app-lists-page',
  templateUrl: './lists.component.html',
  styleUrls: [ './styles/lists.scss' ]
})

export class ListsPageComponent implements OnInit{

  latest_articles_list = undefined;
  latest_articles_small_list = undefined;
  freelancers_list : Scort[];
  users_list = undefined;
  expenses_list = undefined;
  temp = [];
  loadingIndicator: boolean = true;
  foto="https://easysc.herokuapp.com/api/escorts/miak/getFotoPerfil/";
  constructor(public service: AdminService,private route: ActivatedRoute) {
    const data = route.snapshot.data['data'];
    this.latest_articles_list = data.latest_articles_list;
    this.freelancers_list = data.freelancers_list;
    
    this.latest_articles_small_list = data.latest_articles_small_list;
    this.users_list = data.users_list;
    this.expenses_list = data.expenses_list;
  }

  ngOnInit() {

    this.getEscorts();
    //this.foto = this.getFoto('miak')
  }
  
  getEscorts() {
    
    this.service.getScorts().then((data) => {
      this.freelancers_list = data.content;
      this.temp = [...data.content];
      
      //this.rows = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
    this.service.getScorts().then((data
      ) => console.log(data.content));
  }

  getFoto(username){
    
    
    this.service.getScortFoto(username).then((data) => {
      console.log(data)
      this.foto = data;
      
      //this.rows = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
    this.service.getScortFoto(username).then((data
      ) => console.log(data));

  }
}



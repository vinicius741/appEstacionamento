import { Component } from '@angular/core';
import { EstacionamentoService } from '../service/estacionamento.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  lista: any[];
  items: Observable<any[]>;
  
  constructor(
    public estacionamentoService: EstacionamentoService,
    private  router: Router,
    db: AngularFirestore
    ) {
      this.lista = this.estacionamentoService.meusPagamentos;
      this.items = db.collection('estacionamento').valueChanges();
     }
}

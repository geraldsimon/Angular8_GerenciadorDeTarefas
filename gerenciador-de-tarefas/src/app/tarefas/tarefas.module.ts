import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TarefaService, TarefaConcluidaDirective } from './Shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';




@NgModule({
  declarations: [ListarTarefaComponent, CadastrarTarefaComponent, EditarTarefaComponent, TarefaConcluidaDirective],
  providers: [
    TarefaService
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class TarefasModule { }

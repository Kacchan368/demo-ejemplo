import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { ProductoComponent } from './component/producto/producto.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { InicioComponent } from './component/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'contactos', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

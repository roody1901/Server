import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { EditcontactComponent } from './editcontact/editcontact.component';

const routes: Routes = [
  { path: '', component: ContactlistComponent },
  { path: 'add', component: AddcontactComponent },
  { path: 'edit/:id', component: EditcontactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

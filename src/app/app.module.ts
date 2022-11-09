import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { PessoasCreateComponent } from './components/views/pessoas/pessoas-create/pessoas-create.component';
import { PessoasReadComponent } from './components/views/pessoas/pessoas-read/pessoas-read.component';
import { PessoasDeleteComponent } from './components/views/pessoas/pessoas-delete/pessoas-delete.component';
import { PessoasUpdateComponent } from './components/views/pessoas/pessoas-update/pessoas-update.component';
import { ContatosReadAllComponent } from './components/views/contatos/contatos-read-all/contatos-read-all.component';
import { ContatosCreateComponent } from './components/views/contatos/contatos-create/contatos-create.component';
import { ContatosUpdateComponent } from './components/views/contatos/contatos-update/contatos-update.component';
import { ContatosDeleteComponent } from './components/views/contatos/contatos-delete/contatos-delete.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PessoasReadComponent,
    PessoasCreateComponent,
    PessoasDeleteComponent,
    PessoasUpdateComponent,
    ContatosReadAllComponent,
    ContatosCreateComponent,
    ContatosUpdateComponent,
    ContatosDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({dropSpecialCharacters: false})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

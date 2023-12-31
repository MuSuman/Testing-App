import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppService } from './services/app.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { EditComponent } from './popups/edit/edit.component';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { SearchPipe } from './services/search.pipe';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [		
    AppComponent,
      HomeComponent,
      CartComponent,
      EditComponent,
      SearchPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

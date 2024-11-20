import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Snackbar1Component } from './snackbar1/snackbar1.component';
import { Snackbar2Component } from './snackbar2/snackbar2.component';
import { Snackbar3Component } from './snackbar3/snackbar3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentchangeComponent } from './contentchange/contentchange.component';
import { ClassnstyleComponent } from './classnstyle/classnstyle.component';
import { DivisibleComponent } from './divisible/divisible.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    Snackbar1Component,
    Snackbar2Component,
    Snackbar3Component,
    ContentchangeComponent,
    ClassnstyleComponent,
    DivisibleComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
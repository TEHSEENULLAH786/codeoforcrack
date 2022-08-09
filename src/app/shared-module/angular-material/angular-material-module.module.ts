import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ANGULAR MATERIAL MODULE
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule} from '@angular/material/divider';
import { MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    BrowserAnimationsModule
    
  ],
  exports:[MatDividerModule,MatCardModule,MatButtonModule,MatIconModule,BrowserAnimationsModule]
})
export class AngularMaterialModuleModule { }

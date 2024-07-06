import { CommonModule, provideImgixLoader } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './componentes/spinner/spinner.component';
const components = [
  SpinnerComponent
]
@NgModule({
  imports: [
    CommonModule,
    ...components
  ],
  exports: [...components],
  declarations: [],
  providers:[provideImgixLoader('https://image.tmdb.org/t/p/')]
})
export class SharedModule { }

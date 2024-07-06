import { NgIf, NgOptimizedImage, SlicePipe } from "@angular/common";
import { Component, Input } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ImageLoaderDirective } from '../../directives/image-loader.directive';
@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [NzCardModule, SlicePipe,NgIf, ImageLoaderDirective,NgOptimizedImage],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input('title') title: string = '';
  @Input('description') description: string = '';
  @Input('coverSrc') coverSrc: string = '';
  rawSrcSet = '300w,342w'
}

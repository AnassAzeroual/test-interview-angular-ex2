import { NgOptimizedImage } from '@angular/common';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appImageLoader]'
})
export class ImageLoaderDirective {
  @Input() imageLoader!: string; // Use ngSrc instead of appImageLoadInput

  constructor(private elRef: ElementRef<HTMLImageElement>) { }

  // Check for null ngSrc before setting the image source
  ngOnInit() {
    if (!this.imageLoader) {
      this.elRef.nativeElement.src = 'https://via.placeholder.com/342x513';
    }
  }

  @HostListener('error')
  onError() {
    // Maintain the error handling for broken images
    this.elRef.nativeElement.src = 'https://via.placeholder.com/342x513';
  }
}

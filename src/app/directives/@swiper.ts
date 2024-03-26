import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import Swiper from 'swiper';

@Directive({
  selector: '[appSwiper]', 
  standalone: true,
})
export class SwiperDirective implements AfterViewInit {
  private swiper!: Swiper;

  @Input('config') config?: SwiperOptions;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    this.swiper = new Swiper(this.el.nativeElement, this.config);
  }
}

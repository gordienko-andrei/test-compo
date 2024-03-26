import { Component, OnInit } from '@angular/core';
import { SwiperDirective } from '../../directives/@swiper';
import { SwiperComponent } from '../swiper/swiper.component';
import { CurrencyPipe } from '@angular/common';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    SwiperDirective,
    SwiperComponent,
    CurrencyPipe,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  normalPrice: number = 166534;
  itemPrice: number = 122566;
  salePercent: number = -15;
}




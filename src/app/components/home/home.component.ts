import { Component, OnInit } from '@angular/core';
import { ServicioApiService } from '../../servicio/servicio-api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  productos: any []= [];

  constructor(private servicioApiService: ServicioApiService) { }

  ngOnInit() {

    this.llenarProducto();
  }

  llenarProducto() {
    this.servicioApiService.obtenerProducto().subscribe(data => {
      this.productos = data;
      console.log(this.productos);
    })
  }
} 


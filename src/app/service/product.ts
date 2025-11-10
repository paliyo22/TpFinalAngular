import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { PartialProductSchema, ProductSchema } from '../../schema/Product/product';


@Injectable({
  providedIn: 'root',
})
export class ProductService {

  // lo puedo hacer mucho mas complejo si hay tiempo y ganas
  
  private apiUrl = 'Averiguar el .env';
  private http = inject(HttpClient);

  productState = signal({
    product: { // señal que guarda 1 producto
      data: null as ProductSchema | null,
      loading: false,
      error: null as string | null
    },
    productList: { // señal que guarda una lista de productos(es un map porque va cargando por paginas)
      data: new Map<number, PartialProductSchema[]>(), 
      total: 0, 
      loading: false,
      error: null as string | null 
    },
    categoryList: { // lo mismo que arriba pero de 1 sola categoria
      data: new Map<number, PartialProductSchema[]>(), 
      total: 0, 
      loading: false,
      error: null as string | null,
      currentCategory: '' as string //se puede remplazar por "null as Category | null" si creo enum
    },
    featured: { // almacena una lista de prod destacados(pueden ser mejor rankeados o algo asi)
      data: [] as PartialProductSchema[], 
      loading: false,
      error: null as string | null 
    },
    search: { // almacena resultado de la busqueda
      data: null as PartialProductSchema[] | null,
      loading: false,
      error: null as string | null
    },
    result: {
      // tengo que revisar las calls antes de definir si existe o no.
    }
  });
}

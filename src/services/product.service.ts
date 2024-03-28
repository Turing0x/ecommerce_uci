import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
  
export class ProductService {

  private url: string = 'https://fakestoreapi.com/products'
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(
    public http: HttpClient
  ) { }
  
  getAllProdcuts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}?limit=20`, {
      headers: this.httpHeaders }).pipe(
        catchError(e => {
          return throwError(() => e)
        })
      );
  }

  getProductById( product_id: string ): Observable<Product>{
    return this.http.get<Product>(`${this.url}/${product_id}?limit=20`, {
      headers: this.httpHeaders }).pipe(
        catchError(e => {
          return throwError(() => e)
        })
      );
  }

}

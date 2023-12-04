import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto-angular';
  cedula: string = '';
  contribuyente: string = '';
  puntos: string = '';
  constructor(private http: HttpClient) {}


  fetchDataPuntos(id: string) {
    const idRegex = /^\d{10}$/;
    if (!idRegex.test(id)) {
      alert('Cédula inválida');
      return;
    }

    const url = `http://localhost:5001/puntos/${id}`;
    this.http.get(url).subscribe((data: any) => {
      // Handle the API response here
      console.log(data);
      this.puntos = data.puntuacion;
    });

    id = id + "001";
    const url2 = `http://localhost:5000/contribuyente/${id}`;
    this.http.get(url2).subscribe((data: any) => {
      // Handle the API response here
      console.log(data);
      this.contribuyente = data.data ? "SI" : "NO";
    });
  }

}

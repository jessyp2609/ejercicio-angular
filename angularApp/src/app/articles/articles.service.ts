import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Así se ve un artículo que devuelve la API
export interface Article {
  id?: string;
  name: string;
  avatar?: string;
}

// @Injectable: marca esta clase como un servicio inyectable.
// providedIn: 'root' => una sola instancia disponible en toda la app.
@Injectable({ providedIn: 'root' })
export class ArticlesService {
  // URL base de la API (mock). Todas las peticiones cuelgan de aquí.
  private url = 'https://6a2a21cef59cb8f65f1e18c2.mockapi.io/api/articles';

  // Inyectamos HttpClient: la herramienta de Angular para hablar con APIs.
  private http = inject(HttpClient);

  // READ: traer todos los artículos (GET)
  listar() {
    return this.http.get<Article[]>(this.url);
  }

  // CREATE: crear un artículo nuevo (POST)
  crear(article: Article) {
    return this.http.post<Article>(this.url, article);
  }

  // UPDATE: editar un artículo existente por su id (PUT)
  actualizar(id: string, article: Article) {
    return this.http.put<Article>(`${this.url}/${id}`, article);
  }

  // DELETE: borrar un artículo por su id (DELETE)
  eliminar(id: string) {
    return this.http.delete<Article>(`${this.url}/${id}`);
  }
}

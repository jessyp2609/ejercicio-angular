import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ArticlesService, Article } from './articles.service';

@Component({
  selector: 'app-articles',
  imports: [FormsModule, RouterLink],
  templateUrl: './articles.html'
})
export class Articles implements OnInit {
  // Inyectamos NUESTRO servicio. El componente no sabe de HTTP: solo pide datos.
  private api = inject(ArticlesService);

  // Lista que se muestra en pantalla
  articles: Article[] = [];

  // Modelo del formulario (se enlaza con [(ngModel)] en el HTML)
  form: Article = { name: '' };

  // Si editamos, aquí guardamos el id del artículo en edición
  editandoId: string | null = null;

  // OnInit: al cargar la pantalla, pedimos la lista
  ngOnInit() {
    this.cargar();
  }

  // READ: nos suscribimos al Observable del servicio para recibir los datos
  cargar() {
    this.api.listar().subscribe((data) => (this.articles = data));
  }

  // CREATE o UPDATE según si estamos editando
  guardar() {
    if (this.editandoId) {
      this.api.actualizar(this.editandoId, this.form).subscribe(() => this.reiniciar());
    } else {
      this.api.crear(this.form).subscribe(() => this.reiniciar());
    }
  }

  // Carga un artículo en el formulario para editarlo
  editar(article: Article) {
    this.editandoId = article.id ?? null;
    this.form = { name: article.name };
  }

  // DELETE
  eliminar(id: string) {
    this.api.eliminar(id).subscribe(() => this.cargar());
  }

  // Limpia el formulario y refresca la lista
  private reiniciar() {
    this.form = { name: '' };
    this.editandoId = null;
    this.cargar();
  }
}

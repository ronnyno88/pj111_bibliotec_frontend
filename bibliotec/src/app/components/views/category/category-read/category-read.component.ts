import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

export interface Category {
  id?: String;
  description: String;
  number_books?: String;
}

const ELEMENT_DATA: Category[] = [
  { id: '1', description: 'Categoria1', number_books: '5' },
  { id: '2', description: 'Categoria2', number_books: '4' },
  { id: '3', description: 'Categoria3', number_books: '15' },
  { id: '4', description: 'Categoria4', number_books: '12' },
  { id: '5', description: 'Categoria5', number_books: '20' },
  { id: '6', description: 'Categoria6', number_books: '15' },
  { id: '7', description: 'Categoria7', number_books: '7' },
  { id: '8', description: 'Categoria8', number_books: '9' },

];

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent {
  displayedColumns: string[] = ['id', 'description', 'number_books'];
  dataSource = new MatTableDataSource<Category>(ELEMENT_DATA);
  selection = new SelectionModel<Category>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

}

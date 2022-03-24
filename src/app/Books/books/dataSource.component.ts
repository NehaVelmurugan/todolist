import { BooksComponent } from './books.component';

export class DataSources {
  private book: BooksComponent[];

  constructor() {
    this.book = new Array<BooksComponent>(
      new BooksComponent(1, 'Rich Dad and Poor Dad', 'John', 850),
      new BooksComponent(2, 'The Mind Game', 'Devika Das', 205),
      new BooksComponent(3, 'Think Like a Genius', 'Todd Siler', 400)
    );
  }
  getBook(): BooksComponent {
    return this.book;
  }
}

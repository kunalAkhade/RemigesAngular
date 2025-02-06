export interface Book {
  title: string;
  author: string;
  publicationDate: string;
  genre: string;
  price: number;
  description: string;
}

export const books: Book[] = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publicationDate: '1925',
    genre: 'Fiction',
    price: 10.99,
    description: 'A novel about the American dream and the Roaring Twenties.'
  },
  {
    title: '1984',
    author: 'George Orwell',
    publicationDate: '1949',
    genre: 'Dystopian',
    price: 8.99,
    description: 'A dystopian social science fiction novel about a totalitarian regime.'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publicationDate: '1960',
    genre: 'Fiction',
    price: 12.99,
    description: 'A novel about racial injustice in the Deep South during the 1930s.'
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    publicationDate: '1851',
    genre: 'Adventure',
    price: 14.99,
    description: 'The tale of Captain Ahab’s obsessive quest to kill the white whale, Moby Dick.'
  }
];

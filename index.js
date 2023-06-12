import Book from './modules/main.js';
import setup from './modules/setup.js';
import currentTime from './modules/dateTime.js';

const book = new Book();
book.createBookListItem();
book.add();
setup();
currentTime();

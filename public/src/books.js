function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let checked = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
 let returned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
 );
 return [[...checked], [...returned]];
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  book.borrows.forEach((borrow) => {
    accounts.forEach((account) => {
      if(account.id === borrow.id) {
        account["returned"] = book.borrows[0].returned;
        result.push(account);
      }
    });
  });
  return result.slice(0, 10);                            
}




module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

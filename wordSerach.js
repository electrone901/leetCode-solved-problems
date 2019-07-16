/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

function exist(board, word) {
    // edge case: empty board
    if (board.length == 0) return false;
    // check the board to see if it contains the first letter of the
    // word, for each occurrence of the first letter, start looking
    // for the word by calling findWord, return true if any is found.
    
    for (let row = 0; row < board.length; row++)
      for (let col = 0; col < board[0].length; col++)
          if (board[row][col] == word.charAt(0))
              if (findWord(board, word, 0, row, col))
                  return true;
                  
    // nothing is found
    return false;
}

function findWord(board, word, wordIndex, row, col) {
    // return false if: 1) row or col is out of bound; 2) current letter in word does not
    // match the letter at the given cell (row, col) in the board.
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) return false;
    if (board[row][col] != word.charAt(wordIndex++)) return false;

    // the letter matches the given cell, return true if this is the last letter of the word.
    if (wordIndex == word.length) return true;

    // save the matched letter in the board and change it so it wont' be matched again.
    let savedChar = board[row][col];
    board[row][col] = '-';

    // search for the next letter in word in the cells adjacent to the current cell.
    let found = findWord(board, word, wordIndex, row - 1, col) ||
                    findWord(board, word, wordIndex, row + 1, col) ||
                    findWord(board, word, wordIndex, row, col - 1) ||
                    findWord(board, word, wordIndex, row, col + 1);

    // replace the cell with the save letter and return the result.
    board[row][col] = savedChar;
    return found;
}




let board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
// exist(board, "ABCCED"); //return true.
exist(board, "SEE"); //return true.
// exist(board, "ABCB"); //return false.

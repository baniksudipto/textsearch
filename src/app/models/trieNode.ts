export class TrieNode {
  children: any;
  letter: any;
  indexes: number[];

  constructor(letter, _caseSensitive: boolean = false) {
    this.letter = letter;
    this.children = {};
    this.indexes = [];
  }

  getAllIndexes() {
    const ixs = [];
    ixs.push(...this.indexes);
    for (const k of Object.keys(this.children)) {
      ixs.push(...this.children[k].getAllIndexes());
    }
    return ixs;
  }
}

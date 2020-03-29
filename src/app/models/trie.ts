import {TrieNode} from './trieNode';

export class Trie {
  private root: TrieNode;
  private readonly caseSensitive: boolean;

  constructor(caseSensitive: boolean = true) {
    this.root = new TrieNode('');
    this.caseSensitive = caseSensitive;
  }

  insert(word: string, index = 0) {
    if (!this.caseSensitive) {
      word = word.toLowerCase();
    }
    let ptr = this.root;
    for (const c of word) {
      if (!ptr.children[c]) {
        ptr.children[c] = new TrieNode(c);
      }
      ptr = ptr.children[c];
    }
    ptr.indexes.push(index);
  }

  searchNode(word) {
    if (!this.caseSensitive) {
      word = word.toLowerCase();
    }
    let ptr = this.root;
    for (const c of word) {
      if (!ptr.children[c]) {
        return null;
      }
      ptr = ptr.children[c];
    }
    return ptr;
  }

  getIndexOfWord(word) {
    if (!this.caseSensitive) {
      word = word.toLowerCase();
    }
    const node = this.searchNode(word);
    return node ? node.indexes : [];
  }

  listAll() {
    return [];
    // return this.getAllWords().map((word) => [word, this.getIndexOfWord(word)]);
  }

  // getAllWords() {
  //   const words = [];
  //   this.root.getAll([], words);
  //   return words;
  // }

  getRoot(){
    return this.root;
  }

  reset() {
    delete this.root;
    this.root = new TrieNode('');
  }

  prefixSearch(prefix): number[] {
    if (!this.caseSensitive) {
      prefix = prefix.toLowerCase();
    }
    const prefixNode = this.searchNode(prefix);
    return prefixNode ? prefixNode.getAllIndexes() : [];
  }

  // bfs(){
  //     let q= new Queue();
  //     let depth = 1;
  //     q.enqueue(this.root);
  //     while( ! q.isEmpty()){
  //         let cl = q.getLength();
  //         for(let i = 0;i < cl ; i++){
  //             let node = q.dequeue();
  //             console.log(`${' '.repeat(depth)} ${node.letter}`);
  //             for(let k of Object.keys(node.children)){
  //                 q.enqueue(node.children[k]);
  //             }
  //         }
  //         depth+=1;
  //     }
  // }
}

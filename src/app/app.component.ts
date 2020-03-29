import {Component} from '@angular/core';
import {OnInit} from '@angular/core/src/metadata/lifecycle_hooks';
import {Trie} from './models/trie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'textsearch';
  textData = '';
  words: string[] = [];
  highlighted: Set<number> = null;
  made = false;
  wordCount = 0;

  trie: Trie = null;
  searchedWord = '';

  ngOnInit(): void {
    this.trie = new Trie(false);
    this.highlighted = new Set();
  }

  setWordCount(c:number){
    this.wordCount = c;
  }

  make() {
    this.words = this.textData
      .replace(/[^a-zA-Z ]/g, ' ').split(/(\s+)/)
      .filter(function (e) {
        return e.trim().length > 0;
      });
    this.words.forEach((w, i) => this.trie.insert(w, i));
    this.made = true;
  }


  isHighlighted(i: number) {
    return this.highlighted.has(i);
  }

  find() {
    const indexes = this.trie.getIndexOfWord(this.searchedWord) || [];
    this.highlighted.clear();
    indexes.forEach(i => this.highlighted.add(i));
    this.setWordCount(indexes.length);
  }

  listAll() {
    console.log(this.trie && this.trie.listAll());
  }

  clear() {
    this.made = false;
    this.textData= '';
    this.words = [];
    this.searchedWord = '';
    this.highlighted.clear();
    this.trie = new Trie();
  }

  prefixSearch() {
    const indexes = this.trie.prefixSearch(this.searchedWord);
    this.highlighted.clear();
    this.highlighted = new Set<number>(indexes);
    this.setWordCount(indexes.length);
  }
}

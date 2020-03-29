import { Component, OnInit, Input } from '@angular/core';
import { TrieNode } from 'src/app/models/trieNode';

@Component({
  selector: 'app-viewtrie',
  templateUrl: './viewtrie.component.html',
  styleUrls: ['./viewtrie.component.css']
})
export class ViewtrieComponent implements OnInit {

  @Input() trieNode: TrieNode;
  validLetter = false;
  constructor() { }

  ngOnInit() {
    this.validLetter = this.trieNode.letter!=='';
  }


  getChildren(){
    return Object.values(this.trieNode.children);
  }

}

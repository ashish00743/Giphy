import { Component, OnInit } from '@angular/core';
import { GetGiphyListService } from '../get-giphy-list.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  GiphyList: any;
  footerLinks = {
    first: ['Graphics', 'AddOns', 'buttons', 'InfoGraphics'], second: ['PSD', 'forms', 'Fonts', 'Graphs'],
    third: ['Icons', 'Textures', 'Logos', 'UIDs']
  }
  constructor(private GiphyService: GetGiphyListService) { }

  ngOnInit(): void {
  }
  getList(name) {
    this.GiphyService.getGiphyList(name).subscribe(item => {
      this.GiphyList = item.data;
    })
  }
}

import { Component, ElementRef, ViewChild, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as giphy from 'giphy-api/dist/giphy-api.bundle'

@Component({
    selector: 'gif-select',
    templateUrl: './gif-select.component.html',
    styleUrls: ['../../app.component.css']
  })

  export class GifSelectComponent implements OnInit{

    public giphyObj;
    public gifList = [];
    public showLoad;
    public searchTerm;

    ngOnInit() {
      this.giphyObj = new giphy({
        apiKey: 'WQxTjRSZm93EY151uZb6eG7EA02X4k8I',
        https: true
      })
    }

    @Output()
    gifEmit: EventEmitter<string> = new EventEmitter<string>()

    public emitGif = (gifUrl) => {
      this.gifEmit.emit(gifUrl);
    }

    public search = (term) => {
      this.giphyObj.search(term).then((res) => {
        var row = 0
        var column = 0
        var rowArr = []
        res.data.forEach(element => {
          if(column < 5){
            rowArr.push(element.images.original.url)
            column++
          }else{
            this.gifList.push(rowArr)
            column = 0;
            rowArr = [];
          }
        });

      }).catch(err => alert(err));
    }
  };
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs'
import * as SuperGif from '../../utility/libgif.js'


declare var require: any;
var Tone = require('tone/build/Tone');

@Component({
    selector: 'gif-player',
    templateUrl: './gif.component.html',
    styleUrls: ['../../app.component.css']
  })

  export class GifComponent implements AfterViewInit {

    public showVid = true;
    public cam;
    public name = 'viewer';
    public state: boolean = false;
    public imgWidth = 100;
    public ohgod = new Observable;
    public pic = new Image();
    public ratio;
    public natX;
    public natY;
    public originX = 0;
    public originY = 0;
    public scale = 1;
    public data = 0;
    public stopped = true;
    public btn = "Start";
    public rub;
    public synth;
    public gifCanvas;
    public gifUrl = 'https://media.giphy.com/media/J56c6H3S7qumk/giphy.gif'
    public currentUrl = ''
    public playing: boolean = false;
    public showInstructions: boolean = true;
    public instructions: string = "feed me a gif url in the box below, or use the one i pre-fed for you"
    public loaded: boolean = false;
    public showLoad: boolean = true;

    @ViewChild('img') img: ElementRef;
    @ViewChild('gifCanvas') ctx: ElementRef;

    public ngAfterViewInit() {
      this.synth = new Tone.PolySynth(4, Tone.Synth).toMaster();
    }

    public updateInstructions = (str) => {
      if ( str === 'goodUrl' ) {
        this.showInstructions = false;
      } else {
        this.showInstructions = true;
        this.currentUrl = ''
        this.instructions = "sry that one's not gonna work. try copying the GIF Link <a target='_blank' href='https://giphy.com/gifs/philipper-abstract-flash-J56c6H3S7qumk/links'>here</a>"
      }
    }

    public play = () => {
      this.rub.play();
      this.playing = true
    }

    public setLoaded = (bool: boolean) => {
      this.loaded = bool;
    }

    public load = () => {
      if( this.gifUrl && this.gifUrl != this.currentUrl) {

        this.showLoad = false;
        this.setLoaded(false);

        if ( this.img.nativeElement.attributes[1].nodeValue ){
          this.img.nativeElement.attributes[1].nodeValue = ''
          const element = document.getElementById('canvasContainer');
          element.parentNode.removeChild(element);
        } 

        if ( this.gifUrl.substring(this.gifUrl.length - 4, this.gifUrl.length) === '.gif') {
          this.updateInstructions('goodUrl') 
          this.img.nativeElement.attributes[1].nodeValue = this.gifUrl;
          this.rub = new SuperGif({gif: this.img.nativeElement, on_change: this.onChange, max_width: document.getElementById('bigContainer').clientWidth, max_height: document.getElementById('bigContainer').clientHeight, show_progress_bar: false, auto_play: false});
          this.rub.load(this.setLoaded(true));
          this.gifCanvas = document.getElementById('jsgif_canvas')
          this.currentUrl = this.gifUrl
        } else {
          this.updateInstructions('badUrl')
        }
      }
    }

    public pause = () => {
      this.rub.pause();
      this.playing = false;
    }

    public onChange = (data) => {
      var colors = this.getColors(data.data);
      this.toneGen(colors, 3, 4);
    }

    public getColors = (data) => {
      var rgba = []
      for (var i = 0; i < data.length; i += 4) {
        rgba.push([data[i], data[i+1], data[i+2], data[i+3]]);
      }
      return rgba;
    }

    public create2DArray = (dimensions: Array<number>): Array<any> => {
      let array = [[]];
      for(let j = 0; j < dimensions.length - 1; j++) {
        for(let i = 0; i < dimensions[j]; i++) {
          array[i] = new Array(dimensions[j + 1]);
          for(let k = 0; k < array[i].length; k++) {
            array[i][k] = [];
          }
        }
      }
      return array;
    };

    public average = (array: Array<any>) => {
      let sumR = 0;
      let sumG = 0;
      let sumB = 0;
      array.forEach(element => {
        sumR = sumR + (element[0]*element[0]);
        sumG = sumG + (element[1]*element[1]);
        sumB = sumB + (element[2]*element[2]);
      });
      const avg = [Math.sqrt(sumR/array.length), Math.sqrt(sumG/array.length), Math.sqrt(sumB/array.length)]
      return avg;
    }

    public toneGen = (rgba, vs, ps) => {
      const sections = this.divyUp(rgba, vs, ps, 360, 240);
      const voices = this.create2DArray([vs,ps]);
      for(let i=0;i<vs;i++){
        for(let j=0;j<ps;j++){
          voices[i][j] = this.average(sections[i][j])
        }
      }
      //synth.set("detune", -1200);
      var i = 0;
      voices.forEach((element) => {
        /*synth.voices[i].oscillator.attack = .1
        synth.voices[i].oscillator.attack = .1
        synth.voices[i].oscillator.attack = .1
        synth.voices[i].oscillator.attack = .1*/
        this.synth.voices[i].envelope.attack = (element[1][1]+element[1][1]+element[1][2]+1)/765;
        this.synth.voices[i].envelope.decay = (element[1][0]+element[1][1]+element[1][2]+1)/765;
        this.synth.voices[i].envelope.sustain = (element[2][0]+element[2][1]+element[2][2]+1)/765;
        this.synth.voices[i].envelope.release = (element[3][0]+element[3][1]+element[3][2]+1)/765;
        i++;
      })
      //play a chord
      //synth.triggerAttackRelease(voices[0][1][1], '8n');
      const n1 = voices[1][0][0]+voices[1][0][1]+voices[1][0][2];
      const n2 = voices[1][1][0]+voices[1][1][1]+voices[1][1][2];
      const n3 = voices[1][2][0]+voices[1][2][1]+voices[1][2][2];
      const n4 = voices[1][3][0]+voices[1][3][1]+voices[1][3][2];
      this.synth.triggerAttackRelease([n1/2,n2/2,n3/2,n4/2], '8n');
      //synth.triggerAttackRelease([150,200,250], '8n')
      // console.log(n1 + " 1");
      // console.log(n2 + " 2");
      // console.log(n3 + " 3");
      // console.log(n4 + " 4");
      //synth.triggerAttackRelease([voices[0][1][1], voices[1][0][1], voices[1][2][1]], [voices[2][3][2]], '8n');
    }

    public divyUp = (rgba: number[], voiceAmt: number, paramAmt: number, natX, natY): any => {
      const paramRange = Math.floor(natX/paramAmt); // -1 for array index purposes
      const voiceRange = Math.floor(natY/voiceAmt);
      let voices = this.create2DArray([voiceAmt, paramAmt]);
      let paramCounter = 0;
      let voiceCounter = 0;
      let voiceNum = 0;
      let paramNum = 0;
      let elementNum = 0;
      let extraCounterParam = 0;
      let extraCounterVoice = 0;
      let counter = 0;

      rgba.forEach(function(element) {
        if(paramCounter < paramRange) {
          extraCounterParam = 0;
          voices[voiceNum][paramNum].push(element);
          paramCounter++;
          counter++
        }else if(paramNum < paramAmt - 1) {
          paramNum++;
          voices[voiceNum][paramNum].push(element);
          paramCounter = 1;
          counter++;
        }else if((natX / paramAmt) - (paramRange) > 0 && extraCounterParam < (natX - (paramRange * paramAmt))) {
          extraCounterParam++;
          counter++;
          return;
        }else {
          voiceCounter++;
          if (voiceCounter < voiceRange) {
            paramNum = 0;
            voices[voiceNum][paramNum].push(element);
            paramCounter = 1;
            counter++
          }else if (voiceNum < voiceAmt - 1) {
            paramNum = 0;
            voiceNum++;
            voices[voiceNum][paramNum].push(element);
            paramCounter = 1;
            voiceCounter = 0;
            counter++;
          }else if((natY / voiceAmt) - (voiceRange) > 0 && extraCounterVoice < (natY - (voiceRange * voiceAmt))*natX){
            extraCounterVoice++;
            counter++;
            return;
          }
        }
      })
      const sections = voices;
      voices = [];
      return sections;
    }
  };
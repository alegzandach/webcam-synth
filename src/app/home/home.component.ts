import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

declare var require: any;
var Tone = require('tone/build/Tone');

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['../app.component.css']
  })

  export class HomeComponent implements OnInit {

    public showVid = false;
    public video;
    public cam
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

    @ViewChild('img') img: ElementRef;
    @ViewChild('canvas') canvas: ElementRef;
    @ViewChild('videoElement') videoElement: ElementRef;  

    public ngOnInit() {
      this.video = this.videoElement.nativeElement;
      var promise = navigator.mediaDevices.getUserMedia({audio: false, video: true}).then(stream => {
        this.video.src = window.URL.createObjectURL(stream);
        this.video.play();
      }).catch(err => {
        console.log(err);
      });
      const ctx = this.canvas.nativeElement.getContext('2d');
      const pix = this.pic;
      /*this.pic.onload = () => {
        html.nativeElement.width = pix.naturalWidth;
        html.nativeElement.height = pix.naturalHeight;
        html.nativeElement.getContext('2d').drawImage(pix,0,0,pix.width,pix.height);
        var data = html.nativeElement.getContext('2d').getImageData(0,0,pix.width,pix.height).data;
        var colors = this.getColors(data);
        this.toneGen(colors, 3, 4);
      };*/
      this.pic.src = "../../assets/galaxy.jpg";
      this.ratio = this.pic.width/this.pic.height;
      this.natX = this.pic.width;
      this.natY = this.pic.height;
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

    public show = () => {
      this.showVid = true;
      this.video = this.videoElement.nativeElement;
      var promise = navigator.mediaDevices.getUserMedia({audio: false, video: true}).then(stream => {
        this.video.src = window.URL.createObjectURL(stream);
        this.video.play();
      }).catch(err => {
        console.log(err);
      });
      const ctx = this.canvas.nativeElement.getContext('2d');
    }

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
      const sections = this.divyUp(rgba, vs, ps, this.natX, this.natY);
      const voices = this.create2DArray([vs,ps]);
      for(let i=0;i<vs;i++){
        for(let j=0;j<ps;j++){
          voices[i][j] = this.average(sections[i][j])
        }
      }
      var synth = new Tone.PolySynth(vs, Tone.Synth).toMaster();
      //synth.set("detune", -1200);
      var i = 0;
      voices.forEach(function(element){
        synth.voices[i].envelope.attack = (element[0][0]/255)
        //synth.voices[i].oscillator.type = (element[0][0]/255)
        synth.voices[i].envelope.decay = (element[1][1]/255)
        //synth.voices[i].oscillator.type = (element[1][1]/255)
        synth.voices[i].envelope.sustain = (element[2][2]/255)
        //synth.voices[i].oscillator.type = (element[2][2]/255)
        synth.voices[i].envelope.release = 500;
        i++;
      })
      //play a chord
      synth.triggerAttackRelease([voices[0][0][0], voices[0][0][1], voices[0][0][2]], [voices[0][3][0]]);
    }

    public divyUp = (rgba: number[], voiceAmt: number, paramAmt: number, natX, natY): any => {
      const paramRange = Math.floor(this.natX/paramAmt); // -1 for array index purposes
      const voiceRange = Math.floor(this.natY/voiceAmt);
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
      console.log(counter)
      return voices;
    }
  };
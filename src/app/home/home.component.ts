import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import * as SuperGif from 'jsgif'


declare var require: any;
var Tone = require('tone/build/Tone');

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['../app.component.css']
  })

  export class HomeComponent implements OnInit {

    public showVid = true;
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
    public stopped = true;
    public btn = "Start";
    public rub;
    public synth;

    @ViewChild('img') img: ElementRef;
    @ViewChild('gifCanvas') ctx: ElementRef;

    public ngOnInit() {
      //this.img.nativeElement.src = "../../assets/trippyblack.gif";
      this.synth = new Tone.PolySynth().toMaster();
      //this.synth.set("detune", -1200);
      this. rub = new SuperGif({c_w: window.outerWidth, c_h: window.outerHeight, vp_w: window.outerWidth, vp_h: window.outerHeight, gif: this.img.nativeElement, on_change: this.onChange, show_progress_bar: false});
      this.rub.load();
    /*ctx =
          ctx.drawImage(video,0,0,640,480);
          var data = ctx.getImageData(0,0,640,480).data;
          var colors = this.getColors(data);
          this.toneGen(colors, 3, 4);
          }, 100);
      }, false);
      navigator.mediaDevices.getUserMedia({audio: false, video: true}).then(stream => {
        video.srcObject = stream;
        video.play();
      }).catch(err => {
        console.log(err);
      });
      
      /*const pix = this.pic;
      this.pic.onload = () => {
        this.canvas.nativeElement.width = pix.naturalWidth;
        this.canvas.nativeElement.height = pix.naturalHeight;
        this.canvas.nativeElement.getContext('2d').drawImage(pix,0,0,pix.width,pix.height);
        var data = this.canvas.nativeElement.getContext('2d').getImageData(0,0,pix.width,pix.height).data;
        var colors = this.getColors(data);
        this.toneGen(colors, 3, 4);
      };
      this.pic.src = "../../assets/colors.gif";
      this.ratio = this.pic.width/this.pic.height;
      this.natX = this.pic.width;
      this.natY = this.pic.height;*/
    }

    /*public start = () => {
      this.stopped = !this.stopped;
      if(this.btn === "Start"){
        this.btn = "Stop";
      }else {
        this.btn = "Start";
      }
    }*/

    public onChange = (data) => {
      this.toneGen(data);
    }

    /*public show = () => {
      this.showVid = true;
      var promise = navigator.mediaDevices.getUserMedia({audio: false, video: true}).then(stream => {
        this.video.srcObject(stream);
        this.video.play();
      }).catch(err => {
        console.log(err);
      });
      const ctx = this.canvas.nativeElement.getContext('2d');
      ctx.drawImage(this.video,0,0,300,150);
    }*/

    

    public toneGen = (voices) => {
      // var synth = new Tone.Synth().toMaster();
      // synth.set("detune", -1200);
      var i = 0;
      // voices.forEach(function(element){
      //   /*synth.voices[i].oscillator.attack = .1
      //   synth.voices[i].oscillator.attack = .1
      //   synth.voices[i].oscillator.attack = .1
      //   synth.voices[i].oscillator.attack = .1*/
      //   synth.envelope.attack = (element[1][1]+element[1][1]+element[1][2]+1)/765;
      //   synth.envelope.decay = (element[1][0]+element[1][1]+element[1][2]+1)/765;
      //   synth.envelope.sustain = (element[2][0]+element[2][1]+element[2][2]+1)/765;
      //   synth.envelope.release = (element[3][0]+element[3][1]+element[3][2]+1)/765;
      //   i++;
      // })
      //play a chord
      //synth.triggerAttackRelease(voices[0][1][1], '8n');
      const n1 = voices[1][0][0]+voices[1][0][1]+voices[1][0][2];
      const n2 = voices[1][1][0]+voices[1][1][1]+voices[1][1][2];
      const n3 = voices[1][2][0]+voices[1][2][1]+voices[1][2][2];
      const n4 = voices[1][3][0]+voices[1][3][1]+voices[1][3][2];
      this.synth.triggerAttackRelease([n1/2, n2/2, n3/2, n4/2], '8n');
      //synth.triggerAttackRelease([150,200,250], '8n')
      // console.log(n1 + " 1");
      // console.log(n2 + " 2");
      // console.log(n3 + " 3");
      // console.log(n4 + " 4");
      //synth.triggerAttackRelease([voices[0][1][1], voices[1][0][1], voices[1][2][1]], [voices[2][3][2]], '8n');
    }
  };
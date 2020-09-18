import { Component, OnInit, Renderer2, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'th3-bai01';
  blog: any;
  menus: any;
  cates: any;
  constructor(private renderer: Renderer2) {
  }
  ngOnInit(){
    this.menus = [
      {name:'Home',childs:[{name :'Home1'},{name :'Home2'},{name :'Home3'}]},
      {name:'Shop',childs:[{name :'Shop1'},{name :'Shop2'},{name :'Shop3'}]},
      {name:'BLog',childs:[{name :'BLog1'},{name :'BLog2'},{name :'BLog3'}]},
      {name:'Pages',childs:[{name :'Pages1'},{name :'Pages2'},{name :'Pages3'}]},
      {name:'Contact',childs:[]},
    ];
    this.cates = [
      {name:'Necklaces (07)',childs:[]},
      {name:'Earrings (12)',childs:[]},
      {name:'Bracelet (05)',childs:[]},
      {name:'Anklet (18)',childs:[]},
      {name:'Braid Jewels (13)',childs:[]},
      {name:'Foot Harness (06)',childs:[]},
    ];

    this.blog=[
      {img:'assets/images/blog/medium-size/4.jpg',
       day:'25',
       month:'April',
       blog_name:'Blog Image Post',
       blog_detail:'Aenean vestibulum pretium enim, non commodo urna volutpat vitae. Pellentesque vel lacus eget est d...',
      },
      {img:'assets/images/blog/medium-size/3.jpg',
       day:'25',
       month:'April',
       blog_name:'Blog First Gallery Post',
       blog_detail:'Aenean vestibulum pretium enim, non commodo urna volutpat vitae. Pellentesque vel lacus eget est d...',
      },

    ];
  }
  ngAfterViewInit() {
    this.loadScripts();
  }
  public loadScripts() {
    this.renderExternalScript('assets/js/main.js').onload = () => {
    }
  }
public renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }

}


(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),c=(a(15),a(2)),s=a(3),l=a(5),h=a(4),u=a(1),y=a(6),d=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={lyrics:[{lyric:"She's a rockstar everybody said don't date her",artist:"-Lil uzi vert"},{lyric:"Play with you like nintendo",artist:"-Young Nudy"},{lyric:"When I die put my money in the grave",artist:"-Drake"},{lyric:"Shoot your shot like ammunition",artist:"-Pierre Bourne"},{lyric:"Money sitting tall Yao Ming",artist:"-Playboi Carti"}],currentLyric:{}},a.changeLyric=a.changeLyric.bind(Object(u.a)(a)),a}return Object(y.a)(e,t),Object(s.a)(e,[{key:"componentWillMount",value:function(){this.changeLyric()}},{key:"changeLyric",value:function(){for(var t=Math.floor(Math.random()*this.state.lyrics.length);this.state.lyrics[t]===this.state.currentLyric;)t=Math.floor(Math.random()*this.state.lyrics.length);this.setState({currentLyric:this.state.lyrics[t]})}},{key:"render",value:function(){return r.a.createElement("div",{id:"quote-box",style:{position:"relative",top:"40vh",width:"30vw",margin:"auto",background:"white",borderRadius:"10px"},className:"container-fluid"},r.a.createElement("p",{id:"text",className:"text-center",style:{fontSize:"2vw",fontFamily:"Patua One"}},r.a.createElement("i",{className:"fa fa-music",style:{color:this.props.colorNote}}),this.state.currentLyric.lyric),r.a.createElement("p",{id:"author",className:"text-center",style:{fontSize:"1.5vw",position:"relative",left:"6vw",fontFamily:"Patua One Bold"}},this.state.currentLyric.artist),r.a.createElement("button",{id:"new-quote",className:"btn btn-primary",onClick:this.props.colorChange,onMouseUp:this.changeLyric},"New Lyric"),r.a.createElement("a",{id:"tweet-quote",href:"twitter.com/intent/tweet",target:"_blank",style:{float:"right"}},r.a.createElement("i",{className:"fa fa-twitter"}),"Post Lyric on Twitter"),r.a.createElement("p",{style:{fontFamily:"Bangers"}},"By Ciren"))}}]),e}(n.Component),m=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={styles:{background:"rgba(".concat([Math.floor(256*Math.random()),Math.floor(256*Math.random()),Math.floor(256*Math.random())],")"),width:"100vw",height:"100vh"}},a.handleData=a.handleData.bind(Object(u.a)(a)),a}return Object(y.a)(e,t),Object(s.a)(e,[{key:"handleData",value:function(){for(var t=[],e=0;e<3;e++)t.push(Math.floor(256*Math.random()));this.setState({styles:{background:"rgb(".concat(t,")"),width:"100vw",height:"100vh"}})}},{key:"render",value:function(){return r.a.createElement("div",{style:this.state.styles},r.a.createElement(d,{colorChange:this.handleData,colorNote:this.state.styles.background}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);o.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,a){t.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.105f77cc.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){},36:function(e,t,a){e.exports=a.p+"static/media/dwarf.9c1fef1f.png"},38:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/d_d_logo.918e7d03.jpg"},41:function(e,t,a){"use strict";(function(e){var n=a(3),l=a(4),r=function(){function t(e,a){Object(n.a)(this,t),this.category=a,this.name=e,void 0===this.category&&delete this.category,this.pathToInfo="../../info/"}return Object(l.a)(t,[{key:"getFilePath",value:function(t){t=this.pathToInfo+t,delete this.pathToInfo;var n=a(22),l=a(66),r=l.join(e,t);void 0!==this.category&&(r=l.join(e,t+this.category+"/"));for(var c=this.name,i=n.readdirSync(r),s=0;s<i.length;s++){var o=null;if(n.lstatSync(r+i[s]).isDirectory()){for(var u=n.readdirSync(r+i[s]),m=0;m<u.length;m++)if(u[m].toLowerCase().indexOf(c.toLowerCase())>-1){o=r+i[s]+"\\"+c+".txt";break}}else i[s].toLowerCase().indexOf(c.toLowerCase())>-1&&(o=r+c+".txt");if(null!==o){r=o;break}}return r}},{key:"setPath",value:function(e){this.pathToInfo=e}}]),t}();t.a=r}).call(this,"/")},47:function(e,t,a){e.exports=a(91)},54:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){e.exports=a.p+"static/media/skeleton_dragon.317aa000.png"},64:function(e,t,a){},68:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),i=a(3),s=a(4),o=a(6),u=a(5),m=a(7),h=a(40),E=a.n(h),d=a(93),f=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"main"},l.a.createElement("div",null,l.a.createElement(d.a,{to:"/"},l.a.createElement("img",{src:E.a,alt:"Logo",height:"50px"}))))}}]),t}(n.Component),p=(a(54),a(95)),b=a(96),v=a(97),g=a(9),O=(a(35),a(57),a(59),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={race:"Dwarf",bonuses:["bonus 1","bonus 2"],languages:["lang one","lang 2"],other:["other 1","other 2"],desc:"One dynamic long string",image:"./dwarf.png"},a.componentWillReceiveProps=a.componentWillReceiveProps.bind(Object(g.a)(Object(g.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.props;this.setState({race:t.race,bonuses:t.bonuses,languages:t.languages,other:t.other,desc:t.desc})}},{key:"render",value:function(){return l.a.createElement("div",{className:"full"},l.a.createElement("div",{className:"top"},l.a.createElement("div",{className:"left"},l.a.createElement("h1",null,this.state.race),l.a.createElement("h3",null,"Race Bonuses:"),l.a.createElement("ul",null," ",this.state.bonuses.map(function(e){return l.a.createElement("li",{key:e},e)})," "),l.a.createElement("h3",null,"Languages:"),l.a.createElement("ul",null," ",this.state.languages.map(function(e){return l.a.createElement("li",{key:e},e)})," "),l.a.createElement("h3",null,"Other Important Info:"),l.a.createElement("ul",null," ",this.state.other.map(function(e){return l.a.createElement("li",{key:e},e)})," ")),l.a.createElement("div",{className:"right"},l.a.createElement("img",{src:a(36),alt:"dwarf",height:"250px"}))),l.a.createElement("div",{className:"bottom"},l.a.createElement("h3",null,"Description:"),this.state.desc))}}]),t}(n.Component)),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).left_list=["Dwarf","Elf","Halfling","Human","Dragonborn"],a.right_list=["Gnome","Half-Elf","Half-Orc","Tiefling"],a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"click",value:function(e){this.props.pM(e)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"BL"},l.a.createElement("h1",null,"Race Selection"),l.a.createElement("h2",null,"Choose a Race:"),l.a.createElement("div",{className:"TwoLists"},l.a.createElement("ul",null,this.left_list.map(function(t){return l.a.createElement("li",{key:t},l.a.createElement("button",{onClick:function(){return e.click(t)}},t))})),l.a.createElement("ul",null,this.right_list.map(function(t){return l.a.createElement("li",{key:t},l.a.createElement("button",{onClick:function(){return e.click(t)}},t))}))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).prev=e.prev,a.next=e.next,a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"foot"},l.a.createElement(d.a,{to:this.prev},l.a.createElement("button",null,"Previous")),l.a.createElement(d.a,{to:this.next},l.a.createElement("button",null,"Next")))}}]),t}(l.a.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={race:"Dwarfff",bonuses:["bonus 1","bonus 2"],languages:["lang one","lang 2"],other:["other 1","other 2"],desc:"One dynamic long string",image:"./dwarf.png"},a.ButtonClick=a.ButtonClick.bind(Object(g.a)(Object(g.a)(a))),a.child=l.a.createRef(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"ButtonClick",value:function(e){console.log(e);var t={race:"Elf",abilityScore:["elf 1"],languages:["elf one"],abilities:["elf 1","other 2"],description:"One dynamic elf elf elf",image:"./dwarf.png"};this.setState({race:e,languages:t.languages,bonuses:t.abilityScore,other:t.abilities,desc:t.description})}},{key:"render",value:function(){return l.a.createElement("div",{className:"up_and_down"},l.a.createElement("div",{className:"m"},l.a.createElement("div",{className:"button_side"},l.a.createElement(j,{pM:this.ButtonClick})),l.a.createElement("div",{className:"desc_side"},l.a.createElement(O,{props:this.state}))),l.a.createElement(y,{prev:"/home",next:"/class"}))}}]),t}(l.a.Component),N=(a(61),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"home_main"},l.a.createElement("div",{className:"left"},l.a.createElement("ul",null,l.a.createElement("li",null," ",l.a.createElement(d.a,{to:"/race"},l.a.createElement("button",null,"Create Character")," ")," "),l.a.createElement("li",null,l.a.createElement(d.a,{to:"/"},l.a.createElement("button",null,"Load and View Character")," ")))),l.a.createElement("div",{className:"right"},l.a.createElement("img",{src:a(63),alt:"Dragon",height:"200px"})))}}]),t}(n.Component)),C=(a(64),a(41)),_=function e(t,a){Object(i.a)(this,e),this.name=t,this.desc=a};function w(e,t,a){this.level=e,this.proficiency=t,this.features=a}C.a;var x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).left_list=["Barbarian","Bard","Cleric","Druid","Fighter","Monk"],a.right_list=["Paladin","Ranger","Rogue","Sorceror","Warlock","Wizard"],a.state={class:"Fighter",important_stats:"Str and Dex",bonuses:["bonus 1","bonus 2"],other:["other 1","other 2"],desc:"One dynamic long string",image:"./dwarf.png"},a.ButtonClick=a.ButtonClick.bind(Object(g.a)(Object(g.a)(a))),a.child=l.a.createRef(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"ButtonClick",value:function(e){var t={class:"Bard",important_stats:"aaStr and Dex",bonuses:["aabonus 1","bonus 2"],other:["aaother 1","other 2"],desc:"aaOne dynamic long string",image:"./dwarf.png"};this.setState({class:e,important_stats:t.important_stats,bonuses:t.bonuses,other:t.other,desc:t.desc})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"content_footer"},l.a.createElement("div",{className:"m"},l.a.createElement("div",{className:"button_side"},l.a.createElement("h1",null,"Class Selection"),l.a.createElement("h2",null,"Choose a Class:"),l.a.createElement("div",{className:"TwoLists"},l.a.createElement("ul",null,this.left_list.map(function(t){return l.a.createElement("li",{key:t},l.a.createElement("button",{onClick:function(){return e.ButtonClick(t)}},t))})," "),l.a.createElement("ul",null,this.right_list.map(function(t){return l.a.createElement("li",{key:t},l.a.createElement("button",{onClick:function(){return e.ButtonClick(t)}},t))}),"  "))),l.a.createElement("div",{className:"desc_side"},l.a.createElement("div",{className:"top"},l.a.createElement("div",{className:"left"},l.a.createElement("h1",null,this.state.class),l.a.createElement("h3",null,"Important Stats:"),l.a.createElement("ul",null," ",this.state.important_stats," "),l.a.createElement("h3",null,"Class Bonuses:"),l.a.createElement("ul",null," ",this.state.bonuses.map(function(e){return l.a.createElement("li",{key:e},e)})," "),l.a.createElement("h3",null,"Other Important Info:"),l.a.createElement("ul",null," ",this.state.other.map(function(e){return l.a.createElement("li",{key:e},e)})," ")),l.a.createElement("div",{className:"right"},l.a.createElement("img",{src:a(36),alt:"dwarf",height:"250px"}))),l.a.createElement("div",{className:"bottom"},l.a.createElement("h3",null,"Description:"),this.state.desc))),l.a.createElement(y,{prev:"/race",next:"/stats"}))}}]),t}(l.a.Component),S=(a(68),a(94)),B=a(92),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).generate_stats=function(){for(var e=[],t=0;t<6;t++)e.push(a.generate_one_stat());return e.sort(function(e,t){return t-e}),e},a.generate_one_stat=function(){for(var e=20,t=0,a=0;a<4;a++){var n=Math.floor(Math.random()*Math.floor(6));n<e&&(e=n),t+=n}return t-e},a.handleChange=function(e){a.setState()},a.pick_stat=function(e,t){for(var n=a.state.list,l=0;l<a.state.list.length;l++)if(n[l]==e)return n.splice(l,1),a.setState({list:n}),void a.set_stat_with_return(t,e)},a.set_stat_with_return=function(e,t){for(var n=a.state.cats,l=0;l<n.length;l++){if(n[l].s==e){var r=n[l].v;if("-"!=r){var c=a.state.list;c.push(r),a.setState({list:c})}n[l].v=t,a.setState({cats:n})}}},a.toggle=a.toggle.bind(Object(g.a)(Object(g.a)(a))),a.stats=a.generate_stats(),console.log(a.stats),a.state={dropdownOpen:!1,cats:[{s:"Str",v:"-"},{s:"Dex",v:"-"},{s:"Cons",v:"-"},{s:"Wis",v:"-"},{s:"Int",v:"-"},{s:"Cha",v:"-"}],list:a.stats},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"content_footer"},l.a.createElement("div",{className:"lr"},l.a.createElement("div",{className:"Stats"},l.a.createElement("h1",null,"Stats"),l.a.createElement("h2",null,"Randomly Generated Stats"),l.a.createElement("p",null,this.state.list.map(function(e){return e+" "})),l.a.createElement("ul",null,this.state.cats.map(function(t){return l.a.createElement("li",{key:t.s},l.a.createElement("div",{className:"lr"},l.a.createElement("div",{className:"ten"},t.s),l.a.createElement(S.a,{title:t.v},e.state.list.map(function(a){return l.a.createElement(B.a.Item,null,l.a.createElement("div",{onClick:function(){return e.pick_stat(a,t.s)}}," ",a," "))}))))}))),l.a.createElement("div",null,l.a.createElement("h3",null,"Racial Bonuses:"),l.a.createElement("h3",null,"Important for Class:"),l.a.createElement("h3",null,"Common:"),l.a.createElement("h3",null,"Alternative:"))),l.a.createElement(y,{prev:"/class",next:"/bio"}))}}]),t}(l.a.Component),R=(a(38),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"content_footer"},l.a.createElement("div",{className:"lr"},l.a.createElement("div",{className:"left"},l.a.createElement("div",{className:"ud"},l.a.createElement("h1",null,"Bio"),l.a.createElement("h3",null,"Select Gender"),l.a.createElement("div",{className:"lr"},l.a.createElement("button",null,"Male"),l.a.createElement("button",null,"Female")),l.a.createElement("h3",null,"Set Height "),l.a.createElement("div",{className:"lr"},l.a.createElement("input",{type:"text",name:"name"}),"ft",l.a.createElement("input",{type:"text",name:"name"}),"in",l.a.createElement("button",null,"Random")),l.a.createElement("h3",null,"Set Weight "),l.a.createElement("div",{className:"lr"},l.a.createElement("form",null,l.a.createElement("label",null,l.a.createElement("input",{type:"text",name:"name"}),"lbs")),l.a.createElement("button",null,"Random")))),l.a.createElement("div",{className:"right"},l.a.createElement("h3",null,"Biography (optional)"),l.a.createElement("input",{type:"text",name:"name"}))),l.a.createElement(y,{prev:"/stats",next:"/align"}))}}]),t}(l.a.Component)),D=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"content_footer"},l.a.createElement("div",{className:"lr"},l.a.createElement("div",{className:"left"},l.a.createElement("h3",null,"Select Alignment:"),l.a.createElement("table",{id:"simple-board"},l.a.createElement("tbody",null,l.a.createElement("tr",{id:"row0"},l.a.createElement("td",{id:"cell0-0"},l.a.createElement("button",null,"Lawful Good")),l.a.createElement("td",{id:"cell0-1"},l.a.createElement("button",null,"Neutral Good")),l.a.createElement("td",{id:"cell0-2"},l.a.createElement("button",null,"Chaotic Good"))),l.a.createElement("tr",{id:"row1"},l.a.createElement("td",{id:"cell1-0"},l.a.createElement("button",null,"Lawful Neutral")),l.a.createElement("td",{id:"cell1-1"},l.a.createElement("button",null,"True Neutral")),l.a.createElement("td",{id:"cell1-2"},l.a.createElement("button",null,"Chaotic Neutral"))),l.a.createElement("tr",{id:"row2"},l.a.createElement("td",{id:"cell2-0"},l.a.createElement("button",null,"Lawful Evil")),l.a.createElement("td",{id:"cell2-1"},l.a.createElement("button",null,"Neutral Evil")),l.a.createElement("td",{id:"cell2-2"},l.a.createElement("button",null,"Chaotic Evil")))))),l.a.createElement("div",{className:"right"},l.a.createElement("h3",null,"Description"),l.a.createElement("p",null,"Lots of text"))),l.a.createElement(y,{prev:"/bio",next:"/equipment"}))}}]),t}(l.a.Component),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p.a,{basename:"dndweb"},l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(b.a,null,l.a.createElement(v.a,{exact:!0,path:"/",component:N}),l.a.createElement(v.a,{path:"/home",component:N}),l.a.createElement(v.a,{path:"/race",component:k}),l.a.createElement(v.a,{path:"/class",component:x}),l.a.createElement(v.a,{path:"/stats",component:L}),l.a.createElement(v.a,{path:"/bio",component:R}),l.a.createElement(v.a,{path:"/align",component:D})))))}}]),t}(n.Component);a(87),a(89);c.a.render(l.a.createElement(I,null),document.getElementById("root"))}},[[47,2,1]]]);
//# sourceMappingURL=main.92e35c15.chunk.js.map
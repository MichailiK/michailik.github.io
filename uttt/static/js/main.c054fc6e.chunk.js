(this.webpackJsonputtt=this.webpackJsonputtt||[]).push([[0],[,,,,,,,,,function(e,t,r){e.exports=r(23)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var i,n=r(0),l=r.n(n),a=r(8),s=r.n(a),c=(r(14),r(15),r(1)),o=r(2),h=r(4),d=r(3),u=r(6),f=r(5);!function(e){e[e.Cross=0]="Cross",e[e.Circle=1]="Circle"}(i||(i={}));var p=i,m=function e(t,r){Object(c.a)(this,e),this.name="OutOfRangeError",this.message=void 0,this.paramName=void 0,this.stack=void 0,this.message=t,this.paramName=r,"captureStackTrace"in Error?Error.captureStackTrace(this,e):this.stack=(new TypeError).stack},y=function(){function e(t){if(Object(c.a)(this,e),this.fields=void 0,void 0===t)this.fields=new Array(9).fill(null);else{if(9!==t.length)throw new m("There can only be 9 values.","ownedFields");this.fields=t}}return Object(o.a)(e,[{key:"getField",value:function(e){if(e>8||e<0)throw new m("Field must be between 0 and 8","field");return this.fields[e]}},{key:"clone",value:function(){return new e(this.fields.slice())}},{key:"Winner",get:function(){var e=this,t=function(t){var r=Number(t),i=new Array(9);if(e.fields.forEach((function(e,t){i[t]=e===r})),null!==w(i))return{v:r}};for(var r in p){var i=t(r);if("object"===typeof i)return i.v}return null}},{key:"isFieldFullyOccupied",get:function(){var e=!0,t=!1,r=void 0;try{for(var i,n=this.fields[Symbol.iterator]();!(e=(i=n.next()).done);e=!0){if(null===i.value)return!1}}catch(l){t=!0,r=l}finally{try{e||null==n.return||n.return()}finally{if(t)throw r}}return!0}}]),e}(),g=function(){function e(t,r){if(Object(c.a)(this,e),this.fields=void 0,this.currentTurn=void 0,void 0===r)this.fields=new Array(new y,new y,new y,new y,new y,new y,new y,new y,new y);else{if(9!==r.length)throw new m("There can only be 9 fields.","fields");this.fields=r}this.currentTurn=t}return Object(o.a)(e,[{key:"getTTTField",value:function(e){if(e>8||e<0)throw new m("Field must be between 0 and 8","field");return this.fields[e]}},{key:"clone",value:function(){var t=new Array;return this.fields.forEach((function(e){t.push(e.clone())})),new e(this.currentTurn,t)}},{key:"swapCharacter",value:function(){this.currentTurn===p.Cross?this.currentTurn=p.Circle:this.currentTurn=p.Cross}},{key:"GameWinner",get:function(){var e=new Array(9);this.fields.map((function(t,r){return e[r]=t.Winner}));var t=function(t){var r=Number(t),i=new Array(9);e.map((function(e,t){return i[t]=e===r}));var n=w(i);if(null!==n)return{v:[r,n]}};for(var r in p){var i=t(r);if("object"===typeof i)return i.v}return null}}]),e}();var v=[[!0,!1,!1,!0,!1,!1,!0,!1,!1],[!1,!0,!1,!1,!0,!1,!1,!0,!1],[!1,!1,!0,!1,!1,!0,!1,!1,!0],[!0,!0,!0,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!0,!0,!0,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!0,!0,!0],[!0,!1,!1,!1,!0,!1,!1,!1,!0],[!1,!1,!0,!1,!0,!1,!0,!1,!1]];function w(e){if(9!==e.length)throw new m("There can only be 9 fields","fields");for(var t=0;t<8;t++){for(var r=0,i=0;i<9;i++)v[t][i]&&e[i]&&r++;if(3===r)return v[t]}return null}var b=function e(t){Object(c.a)(this,e),this.name="FieldOccupiedError",this.message="This field is already occupied by someone.",this.stack=void 0,void 0!==t&&(this.message=t),"captureStackTrace"in Error?Error.captureStackTrace(this,e):this.stack=(new TypeError).stack},k=function e(t){Object(c.a)(this,e),this.name="NotAllowedToPlaceOnFieldError",this.message="Unable to place mark on this field due to the enemy's previous move.",this.stack=void 0,void 0!==t&&(this.message=t),"captureStackTrace"in Error?Error.captureStackTrace(this,e):this.stack=(new TypeError).stack},F=function e(t){Object(c.a)(this,e),this.name="RewindDisabledError",this.message="Cannot rewind: It is disabled.",this.stack=void 0,void 0!==t&&(this.message=t),"captureStackTrace"in Error?Error.captureStackTrace(this,e):this.stack=(new TypeError).stack},T=function e(t,r){Object(c.a)(this,e),this.name="GameAlreadyFinished",this.message="The game has already been ended.",this.stack=void 0,void 0!==t&&(this.message=t),"captureStackTrace"in Error?Error.captureStackTrace(this,e):this.stack=(new TypeError).stack},E=function(){function e(){Object(c.a)(this,e),this.history=new Array(new g(p.Cross)),this.currentlyShownFieldIndex=0,this.rewindEnabled=!0,this.getPlaceableFields=this.getPlaceableFields.bind(this),this.getDifferenceBetweenField=this.getDifferenceBetweenField.bind(this)}return Object(o.a)(e,[{key:"currentTurnOfPresentField",get:function(){return this.history[this.history.length-1].currentTurn}},{key:"currentTurnOfCurrentlyShownField",get:function(){return this.currentlyShownField.currentTurn}},{key:"currentlyShownField",get:function(){return this.history[this.currentlyShownFieldIndex]}},{key:"presentField",get:function(){return this.history[this.history.length-1]}}]),Object(o.a)(e,[{key:"place",value:function(e,t,r){try{if(e>8||e<0)throw new m("TTTField must be between 0 and 8.","tttField");if(t>8||t<0)throw new m("field must be between 0 and 8","field");if(null!==this.currentlyShownField.fields[e].getField(t))throw new b("TTTField ".concat(e," field ").concat(t," already occupied."));if(!this.rewindEnabled&&this.history.length-1>this.currentlyShownFieldIndex)throw new F("Rewind isn't enabled.");if(null!==this.currentlyShownField.GameWinner)throw new T;if(null!==this.currentlyShownField.fields[e].Winner)throw new b("TTTField ".concat(e," already won by a player."));if(!1===this.getPlaceableFields(this.currentlyShownFieldIndex)[e][t])throw new k;var i=this.currentlyShownField.clone();i.swapCharacter(),i.fields[e].fields[t]=this.currentTurnOfCurrentlyShownField,this.history=this.history.slice(0,this.currentlyShownFieldIndex+1),this.history.push(i),this.currentlyShownFieldIndex++}catch(n){if(r)throw n;return!1}return!0}},{key:"getPlaceableFields",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentlyShownFieldIndex;if(e>this.history.length-1)throw new m("fieldIndex cannot be larger than the history's length.","fieldIndex");if(e-1<0)return this.getAllNullFields(this.history[e]);if(null!==this.history[e].GameWinner)return this.createFilledFalseArrays();var t=this.history[e],r=this.history[e-1],i=this.getDifferenceBetweenField(t,r);if(null!==t.getTTTField(i[1]).Winner)return this.getAllNullFields(this.history[e]);if(t.getTTTField(i[1]).isFieldFullyOccupied)return this.getAllNullFields(this.history[e]);for(var n=this.createFilledFalseArrays(),l=0;l<t.getTTTField(i[1]).fields.length;l++)n[i[1]][l]=null===t.getTTTField(i[1]).getField(l);return n}},{key:"getAllNullFields",value:function(e){for(var t=this.createFilledFalseArrays(),r=0;r<e.fields.length;r++)if(null===e.getTTTField(r).Winner)for(var i=0;i<e.getTTTField(r).fields.length;i++)t[r][i]=null===e.getTTTField(r).getField(i);return t}},{key:"createFilledFalseArrays",value:function(){for(var e=new Array(9),t=0;t<9;t++)e[t]=new Array(9).fill(!1);return e}},{key:"getDifferenceBetweenField",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentlyShownField,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.history[this.currentlyShownFieldIndex-1],r=0;r<e.fields.length;r++)for(var i=0;i<e.getTTTField(r).fields.length;i++)if(e.getTTTField(r).getField(i)!==t.getTTTField(r).getField(i))return[r,i];throw new Error("No differences found.")}}]),e}(),S=(r(16),r(17),function(e){return l.a.createElement("svg",{version:"1.1",name:"cross",className:e.className,width:"64",height:"64",viewBox:"0 0 64 64"},l.a.createElement("rect",{x:"-40",y:"40",style:{transform:"rotate(-45deg)"},fill:"currentColor",width:"80",height:"10"}),l.a.createElement("rect",{x:"5",y:"-5",style:{transform:"rotate(45deg)"},fill:"currentColor",width:"80",height:"10"}))}),C=function(e){return l.a.createElement("svg",{version:"1.1",name:"circle",className:e.className,width:"64",height:"64",viewBox:"0 0 64 64"},l.a.createElement("circle",{cx:"32",cy:"32",r:"27",width:"64",height:"10",stroke:"currentColor",fill:"transparent",strokeWidth:"10"}))},O=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"field"+(null!==this.props.character?" "+this.props.character:"")+(this.props.highlight?" highlight":""),onClick:function(){e.props.fieldClicked&&e.props.fieldClicked()}},this.props.character===p.Circle&&this.renderCircle(),this.props.character===p.Cross&&this.renderCross())}},{key:"renderCircle",value:function(){return this.props.animate?l.a.createElement(C,{className:"animate"}):l.a.createElement(C,null)}},{key:"renderCross",value:function(){return this.props.animate?l.a.createElement(S,{className:"animate"}):l.a.createElement(S,null)}}]),t}(l.a.Component),W=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"renderField",value:function(e){var t=this,r=this.props.tttField.getField(e);return l.a.createElement(O,{character:r,animate:this.props.animate,highlight:void 0!==this.props.placableFields&&this.props.placableFields[e],fieldClicked:function(){t.props.fieldClicked&&t.props.fieldClicked(e)},key:e})}},{key:"renderWinner",value:function(){return l.a.createElement("div",{className:"tttfield-winner"},l.a.createElement(O,{character:this.props.tttField.Winner,animate:this.props.animate}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"tttfield"+(this.props.tttField.isFieldFullyOccupied||null!==this.props.tttField.Winner?" hide":"")},this.props.tttField.fields.map((function(t,r){return e.renderField(r)})),null!==this.props.tttField.Winner&&this.renderWinner())}}]),t}(l.a.Component),j=(r(18),function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"renderField",value:function(e){var t=this;return l.a.createElement(W,{tttField:this.props.gameField.fields[e],placableFields:void 0===this.props.placableFields?void 0:this.props.placableFields[e],animate:this.props.animate,fieldClicked:function(r){t.props.fieldClicked&&t.props.fieldClicked(e,r)},key:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"gamefield"},this.props.gameField.fields.map((function(t,r){return e.renderField(r)})))}}]),t}(l.a.PureComponent)),N=(r(19),r(20),function(e){function t(e,r){var i;return Object(c.a)(this,t),(i=Object(h.a)(this,Object(d.a)(t).call(this,e,r))).gameHistoryScrollWrapperRef=void 0,i.gameHistoryRef=void 0,i.gameHistoryWidth=144,i.gameHistoryScrollWrapperWidth=null,i.lastCalcedFieldsToDisplay=null,i.shouldScroll=!1,i.state={lastScrollPos:0},i.gameHistoryScrollWrapperRef=l.a.createRef(),i.gameHistoryRef=l.a.createRef(),i.event_gameHistoryScrollWrapperScroll=i.event_gameHistoryScrollWrapperScroll.bind(Object(u.a)(i)),i.calcFieldsToDisplay=i.calcFieldsToDisplay.bind(Object(u.a)(i)),i.refreshWidths=i.refreshWidths.bind(Object(u.a)(i)),i}return Object(f.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){if(this.state.lastScrollPos!==t.lastScrollPos&&null!==this.lastCalcedFieldsToDisplay){var r=this.calcFieldsToDisplay(t.lastScrollPos);if(null!==r&&(r[0]!==this.lastCalcedFieldsToDisplay[0]||r[2]!==this.lastCalcedFieldsToDisplay[2]))return!0}return e.selected!==this.props.selected?(e.selected===e.history.length-1&&(this.shouldScroll=!0),!0):e.historyClicked!==this.props.historyClicked}},{key:"componentDidUpdate",value:function(){(this.refreshWidths(),this.props.selected===this.props.history.length-1)&&(null!==this.gameHistoryScrollWrapperRef.current&&this.shouldScroll&&(this.shouldScroll=!1,this.gameHistoryScrollWrapperRef.current.scrollTo({behavior:"smooth",left:Number.MAX_SAFE_INTEGER})))}},{key:"componentDidMount",value:function(){this.refreshWidths()}},{key:"renderHistory",value:function(e,t){var r=this,i=this.props.history[e];return l.a.createElement("div",{className:"gamehistory-gamefield-wrapper move-"+(e+1)+(t?" selected":""),onClick:function(){r.props.historyClicked&&r.props.historyClicked(e)},key:e},l.a.createElement(j,{gameField:i}),l.a.createElement("div",{className:"gamehistory-gamefield-number-wrapper"},l.a.createElement("span",{className:"gamehistory-gamefield-number"},e+1)))}},{key:"render",value:function(){var e=this,t=this.lastCalcedFieldsToDisplay=this.calcFieldsToDisplay();return l.a.createElement("div",{className:"gamehistory-scroll-wrapper scroll-wrapper",ref:this.gameHistoryScrollWrapperRef,onScroll:this.event_gameHistoryScrollWrapperScroll},l.a.createElement("div",{className:"gamehistory",ref:this.gameHistoryRef},l.a.createElement("div",{className:"scroller-filler",style:{width:null===t?0:t[0]}}),this.props.history.map((function(r,i){if(null===t||t[1].includes(i))return e.renderHistory(i,e.props.selected===i)})),l.a.createElement("div",{className:"scroller-filler",style:{width:null===t?0:t[2]}})))}},{key:"calcFieldsToDisplay",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.lastScrollPos;if(null===this.gameHistoryScrollWrapperWidth)return null;if(null===this.gameHistoryWidth)return null;var t=this.props.history.length,r=Math.floor(this.gameHistoryScrollWrapperWidth/this.gameHistoryWidth);if(r>t)return[0,this.props.history.map((function(e,t){return t})),0];var i=Math.floor(e/this.gameHistoryWidth-1),n=Math.floor(i+r+3);n>t&&(n=t);var l=[];this.props.history.forEach((function(e,t){t>=i&&t<n&&l.push(t)}));var a=i*this.gameHistoryWidth;a<0&&(a=0);var s=t*this.gameHistoryWidth-n*this.gameHistoryWidth;return[a,l,s]}},{key:"refreshWidths",value:function(){if(null!==this.gameHistoryScrollWrapperRef.current&&(this.gameHistoryScrollWrapperWidth=this.gameHistoryScrollWrapperRef.current.clientWidth,null!==this.gameHistoryRef.current&&this.props.history.length>0)){var e=window.getComputedStyle(this.gameHistoryRef.current.children[1]);if(null===e.width)return;this.gameHistoryWidth=Number(e.width.replace("px",""))+32}}},{key:"event_gameHistoryScrollWrapperScroll",value:function(e){null!==this.gameHistoryScrollWrapperRef.current&&this.setState({lastScrollPos:this.gameHistoryScrollWrapperRef.current.scrollLeft})}}]),t}(l.a.Component)),H=(r(21),function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"background"},l.a.createElement("div",{className:"background-char cross"+(this.props.currentTurn===p.Cross?" selected":"")},l.a.createElement(S,null)),l.a.createElement("div",{className:"background-char circle"+(this.props.currentTurn===p.Circle?" selected":"")},l.a.createElement(C,null)),l.a.createElement("div",{className:"background-solid"}),l.a.createElement("div",{className:"background-gradient",style:{opacity:1-this.dramaLevelToOpacity()}}))}},{key:"dramaLevelToOpacity",value:function(){return void 0===this.props.dramaLevel?0:this.props.dramaLevel/75}}]),t}(l.a.Component)),A=(r(22),function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"game-winner"},l.a.createElement(O,{character:this.props.winner,animate:!0}),l.a.createElement("span",{className:"game-winner-winner-text"},this.props.winner===p.Cross?"X":"O"," hat gewonnen!"),l.a.createElement("button",{onClick:function(){e.props.onPlayAgainClicked&&e.props.onPlayAgainClicked()}},"Neues Spiel beginnen"),l.a.createElement("button",{onClick:function(){e.props.onViewGameHistoryClicked&&e.props.onViewGameHistoryClicked()}},"Spielhistorie anschauen"))}}]),t}(l.a.Component)),D=function(e){function t(e,r){var i;return Object(c.a)(this,t),(i=Object(h.a)(this,Object(d.a)(t).call(this,e,r))).game=new E,i.state={gameWinDismissed:!1},i.event_historyClicked=i.event_historyClicked.bind(Object(u.a)(i)),i.event_fieldClicked=i.event_fieldClicked.bind(Object(u.a)(i)),i.resetGame=i.resetGame.bind(Object(u.a)(i)),i}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.game.presentField.GameWinner;return l.a.createElement("div",{className:"game"+(this.game.currentlyShownFieldIndex!==this.game.history.length-1?" viewing-history":"")},l.a.createElement("div",{className:"game-gamefield-wrapper"+(this.isInHistoryAndRewindDisabled()?" disabled":"")},l.a.createElement(j,{gameField:this.game.currentlyShownField,animate:!0,placableFields:this.isInHistoryAndRewindDisabled()?void 0:this.game.getPlaceableFields(this.game.currentlyShownFieldIndex),fieldClicked:this.event_fieldClicked})),l.a.createElement(N,{history:this.game.history,selected:this.game.currentlyShownFieldIndex,historyClicked:this.event_historyClicked}),l.a.createElement(H,{currentTurn:this.game.currentTurnOfCurrentlyShownField,dramaLevel:this.calcDramaLevel()}),null!==t&&!this.state.gameWinDismissed&&l.a.createElement(A,{winner:t[0],onViewGameHistoryClicked:function(){return e.setState({gameWinDismissed:!0})},onPlayAgainClicked:this.resetGame}),this.state.gameWinDismissed&&l.a.createElement("button",{onClick:this.resetGame},"Neues Spiel"))}},{key:"calcDramaLevel",value:function(){return this.game.history.length+10*this.game.presentField.fields.filter((function(e){return null!=e.Winner})).length}},{key:"isInHistoryAndRewindDisabled",value:function(){return this.game.currentlyShownFieldIndex!==this.game.history.length-1&&!this.game.rewindEnabled}},{key:"resetGame",value:function(){this.game=new E,this.setState({gameWinDismissed:!1})}},{key:"event_historyClicked",value:function(e){this.game.currentlyShownFieldIndex=e,this.forceUpdate()}},{key:"event_fieldClicked",value:function(e,t){try{this.game.place(e,t,!0),this.forceUpdate()}catch(r){console.error("Error placing at tttfield ".concat(e,"  field ").concat(t),r)}}}]),t}(l.a.Component),x=function(){return l.a.createElement(D,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(x,null),document.getElementById("app-mount")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.c054fc6e.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(17)},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),r=t(8),l=t.n(r),c=(t(16),t(1)),i=t(2),p=t(3),o=t(5),h=t(4),d=t(6),u=function(e){function a(){var e,t;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(n)))).state={value:t.props.card.value,suit:t.props.card.suit,code:t.props.card.code,image:t.props.card.image},t}return Object(d.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"Card"},n.a.createElement("img",{src:this.state.image,alt:"Card"}))}}]),a}(s.Component),y=t(9),m=t.n(y),S=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e,a=this;return this.props.cards.length&&(e=this.props.cards.map(function(e){return n.a.createElement(u,{key:e.code,card:e,history:a.props.history})})),n.a.createElement("div",{className:"Hand"},"Dealer"===this.props.name?n.a.createElement("div",null,n.a.createElement("h3",null,this.props.name),this.props.playerPlaying?n.a.createElement("h5",null,this.props.dealerInitialScore):n.a.createElement("h5",null,this.props.score),this.props.playerPlaying?n.a.createElement("div",{className:"cards-container"},n.a.createElement("img",{src:m.a,alt:"cardback",className:"blankCard"}),e[1]):n.a.createElement("div",{className:"cards-container"},e)):n.a.createElement("div",{className:"hand-container"},n.a.createElement("h3",null,this.props.name),n.a.createElement("h5",null,this.props.score),n.a.createElement("div",{className:"cards-container"},e),this.props.playerPlaying?n.a.createElement("div",{className:"playingButtons"},n.a.createElement("button",{className:"sm",onClick:function(e){return a.props.handleDrawCardEvent(e)}},"Hit"),n.a.createElement("button",{className:"sm",onClick:function(e){return a.props.handleStandEvent(e)}},"Stand"),2===this.props.cards.length?n.a.createElement("button",{className:"sm",onClick:function(e){return a.props.handleDoubleDownEvent(e)}},"Double Down"):"",this.props.playerSplittable?n.a.createElement("button",{className:"sm",onClick:function(e){return a.props.handleSplitEvent(e)}},"Split"):""):n.a.createElement("button",{className:"sm",onClick:function(e){return a.props.handleDealEvent(e)}},"Deal")))}}]),a}(s.Component),k=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props.playerWins+this.props.dealerWins+this.props.pushes,a=Math.floor(this.props.playerWins/e*100),t=Math.floor(this.props.dealerWins/e*100);return n.a.createElement("div",{className:"stats-container"},n.a.createElement("div",{className:"playerStats"},n.a.createElement("p",null,"Player Wins: ",this.props.playerWins),n.a.createElement("p",null,"Player Win Percentage: ",a||"0","%"),n.a.createElement("p",null,"Player Blackjacks: ",this.props.playerBlackjacks),n.a.createElement("p",null,"Player Busts: ",this.props.playerBusts)),n.a.createElement("div",{className:"gameStats"},n.a.createElement("p",null,"Pushes: ",this.props.pushes),n.a.createElement("p",null,"Total Hands: ",e)),n.a.createElement("div",{className:"dealerStats"},n.a.createElement("p",null,"Dealer Wins: ",this.props.dealerWins),n.a.createElement("p",null,"Dealer Win Percentage: ",t||"0","%"),n.a.createElement("p",null,"Dealer Blackjacks: ",this.props.dealerBlackjacks),n.a.createElement("p",null,"Dealer Busts: ",this.props.dealerBusts)))}}]),a}(s.Component),v=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"chips-container"},!1===this.props.gameStarted?n.a.createElement("div",{className:"buyInButtons"},n.a.createElement("button",{className:"sm",onClick:function(a){return e.props.increaseChipOne(a)}},"$1"),n.a.createElement("button",{className:"sm",onClick:function(a){return e.props.increaseChipFive(a)}},"$5"),n.a.createElement("button",{className:"sm",onClick:function(a){return e.props.increaseChipTen(a)}},"$10"),n.a.createElement("button",{className:"sm",onClick:function(a){return e.props.increaseChipTwentyFive(a)}},"$25"),n.a.createElement("button",{className:"sm",onClick:function(a){return e.props.clearChips(a)}},"Clear Chips"),n.a.createElement("p",null,"Buy-In Amount: $ ",this.props.playerChips.toFixed(2))):n.a.createElement("div",{className:"chipStats"},n.a.createElement("p",null,"Player Chips: $ ",this.props.playerChips.toFixed(2)),n.a.createElement("p",null,"Chips in Play: $ ",this.props.chipsInPlay.toFixed(2)),n.a.createElement("p",null,"Win Amount: $ ",this.props.winAmount.toFixed(2))),n.a.createElement("div",{className:"chipBets"},!1===this.props.playerPlaying?n.a.createElement("div",{className:"chipButtons"},n.a.createElement("button",{className:"sm",onClick:function(a){return e.props.increaseBetOne(a)}},"$1"),n.a.createElement("button",{className:"sm",onClick:function(a){return e.props.increaseBetFive(a)}},"$5"),n.a.createElement("button",{className:"sm",onClick:function(a){return e.props.increaseBetTen(a)}},"$10"),n.a.createElement("button",{className:"sm",onClick:function(a){return e.props.increaseBetTwentyFive(a)}},"$25"),n.a.createElement("button",{className:"sm",onClick:function(a){return e.props.clearBets(a)}},"Clear Bets")):"",n.a.createElement("p",null,"Bet Amount: $ ",this.props.betAmount.toFixed(2))))}}]),a}(s.Component),b=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(h.a)(a).call(this,e))).increaseChipOne=function(e){t.setState({playerChips:t.state.playerChips+1})},t.increaseChipFive=function(e){t.setState({playerChips:t.state.playerChips+5})},t.increaseChipTen=function(e){t.setState({playerChips:t.state.playerChips+10})},t.increaseChipTwentyFive=function(e){t.setState({playerChips:t.state.playerChips+25})},t.clearChips=function(e){t.setState({playerChips:0})},t.increaseBetOne=function(e){t.setState({betAmount:t.state.betAmount+1})},t.increaseBetFive=function(e){t.setState({betAmount:t.state.betAmount+5})},t.increaseBetTen=function(e){t.setState({betAmount:t.state.betAmount+10})},t.increaseBetTwentyFive=function(e){t.setState({betAmount:t.state.betAmount+25})},t.clearBets=function(e){t.setState({betAmount:0})},t.handleDrawCardEvent=function(e){t.state.playerScore<21&&fetch("https://deckofcardsapi.com/api/deck/".concat(t.state.deckId,"/draw/?count=1")).then(function(e){return e.json()}).then(function(e){var a=t.returnValue(e.cards[0].value);11===a&&t.state.playerHasAce?t.setState({playerScore:t.state.playerScore-10,playerHasAce:!0,playerSplittable:!1}):11===a&&t.setState({playerHasAce:!0,playerSplittable:!1}),t.setState({playerHand:[].concat(Object(c.a)(t.state.playerHand),[e.cards[0]]),playerScore:t.state.playerScore+=a,playerSplittable:!1}),t.bustChecker()}).catch(function(e){return console.log(e)})},t.handleStandEvent=function(e){t.state.dealerScore>21&&t.state.dealerHasAce?(t.setState({dealerScore:t.state.dealerScore-10,dealerHasAce:!1}),t.handleStandEvent()):t.state.dealerScore<17?fetch("https://deckofcardsapi.com/api/deck/".concat(t.state.deckId,"/draw/?count=1")).then(function(e){return e.json()}).then(function(e){var a=t.returnValue(e.cards[0].value);11===a&&t.state.dealerHasAce?t.setState({dealerScore:t.state.dealerScore-10,dealerHasAce:!0}):11===a&&t.setState({dealerHasAce:!0}),t.setState({playerPlaying:!1,dealerHand:[].concat(Object(c.a)(t.state.dealerHand),[e.cards[0]]),dealerScore:t.state.dealerScore+=a}),t.handleStandEvent()}):(t.setState({playerPlaying:!1}),t.checkWinner())},t.handleDoubleDownEvent=function(e){t.state.betAmount>t.state.playerChips?t.setState({gameMessage:"You do not have enough to double down!"}):(t.setState({playerChips:t.state.playerChips-t.state.betAmount,chipsInPlay:t.state.chipsInPlay+t.state.betAmount}),t.state.playerScore<21&&fetch("https://deckofcardsapi.com/api/deck/".concat(t.state.deckId,"/draw/?count=1")).then(function(e){return e.json()}).then(function(e){var a=t.returnValue(e.cards[0].value);11===a&&t.setState({playerHasAce:!0}),t.setState({playerHand:[].concat(Object(c.a)(t.state.playerHand),[e.cards[0]]),playerScore:t.state.playerScore+=a,playerPlaying:!1}),t.bustChecker(),t.state.playerScore<=21&&t.handleStandEvent()}))},t.handleSplitEvent=function(e){t.setState({dealerSplit:!1})},t.handleDealEvent=function(e){t.setState({playerPlaying:!1,dealerHand:[],dealerScore:0,dealerInitialScore:0,dealerHasAce:!1,dealerHasBlackjack:!1,insurance:!1,playerHand:[],playerScore:0,playerHasAce:!1,playerHasBlackjack:!1,playerSplittable:!1,gameMessage:""}),t.handleDealHand()},t.state={gameStarted:!1,playerPlaying:!1,deckId:"",dealerHand:[],dealerScore:0,dealerInitialScore:0,dealerHasAce:!1,dealerHasBlackjack:!1,insurance:!1,playerHand:[],playerScore:0,playerHasAce:!1,playerHasBlackjack:!1,playerSplittable:!1,playerWins:0,dealerWins:0,pushes:0,playerBlackjacks:0,dealerBlackjacks:0,playerBusts:0,dealerBusts:0,gameMessage:"",playerChips:0,betAmount:0,chipsInPlay:0,winAmount:0},t}return Object(d.a)(a,e),Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6").then(function(e){return e.json()}).then(function(a){e.setState({deckId:a.deck_id})})}},{key:"handleEndGame",value:function(){var e=this;fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6").then(function(e){return e.json()}).then(function(a){e.setState({deckId:a.deck_id})}),this.setState({gameStarted:!1,playerPlaying:!1,dealerHand:[],dealerScore:0,dealerInitialScore:0,dealerHasAce:!1,dealerHasBlackjack:!1,insurance:!1,playerHand:[],playerScore:0,playerHasAce:!1,playerHasBlackjack:!1,playerSplittable:!1,playerWins:0,dealerWins:0,pushes:0,playerBlackjacks:0,dealerBlackjacks:0,playerBusts:0,dealerBusts:0,gameMessage:"",playerChips:0,betAmount:20,chipsInPlay:0,winAmount:0})}},{key:"returnValue",value:function(e){return{ACE:11,KING:10,QUEEN:10,JACK:10,10:10,9:9,8:8,7:7,6:6,5:5,4:4,3:3,2:2}[e]}},{key:"handleDealHand",value:function(){var e=this;0===this.state.betAmount?this.setState({gameMessage:"You have to bet some money!"}):this.state.betAmount>this.state.playerChips?this.setState({gameMessage:"You do not have that much money"}):(this.setState({betAmount:this.state.betAmount,playerChips:this.state.playerChips-this.state.betAmount,chipsInPlay:this.state.betAmount,winAmount:0}),fetch("https://deckofcardsapi.com/api/deck/".concat(this.state.deckId,"/draw/?count=4")).then(function(e){return e.json()}).then(function(a){console.log(a.remaining),a.remaining<100&&fetch("https://deckofcardsapi.com/api/deck/".concat(e.state.deckId,"/shuffle/")).then(function(e){return e.json()}).then(function(e){console.log(e),console.log("Deck reshuffled!")});var t=e.returnValue(a.cards[0].value),s=e.returnValue(a.cards[1].value),n=e.returnValue(a.cards[2].value),r=e.returnValue(a.cards[3].value);11===t&&11===n?e.setState({gameStarted:!0,playerPlaying:!0,playerHand:[].concat(Object(c.a)(e.state.playerHand),[a.cards[0],a.cards[2]]),playerHasAce:!0,playerSplittable:!0,playerScore:12,dealerHand:[].concat(Object(c.a)(e.state.dealerHand),[a.cards[1],a.cards[3]]),dealerHasAce:!1,dealerScore:e.state.dealerScore+=s+r,dealerInitialScore:r}):11===t||11===n?e.setState({gameStarted:!0,playerPlaying:!0,playerHand:[].concat(Object(c.a)(e.state.playerHand),[a.cards[0],a.cards[2]]),playerScore:e.state.playerScore+=t+n,playerHasAce:!0,dealerHand:[].concat(Object(c.a)(e.state.dealerHand),[a.cards[1],a.cards[3]]),dealerHasAce:!1,dealerScore:e.state.dealerScore+=s+r,dealerInitialScore:r}):t===n?e.setState({gameStarted:!0,playerPlaying:!0,playerSplittable:!0,playerHand:[].concat(Object(c.a)(e.state.playerHand),[a.cards[0],a.cards[2]]),playerScore:e.state.playerScore+=t+n,dealerHand:[].concat(Object(c.a)(e.state.dealerHand),[a.cards[1],a.cards[3]]),dealerHasAce:!1,dealerScore:e.state.dealerScore+=s+r,dealerInitialScore:r}):e.setState({gameStarted:!0,playerPlaying:!0,playerHand:[].concat(Object(c.a)(e.state.playerHand),[a.cards[0],a.cards[2]]),playerScore:e.state.playerScore+=t+n,dealerHand:[].concat(Object(c.a)(e.state.dealerHand),[a.cards[1],a.cards[3]]),dealerHasAce:!1,dealerScore:e.state.dealerScore+=s+r,dealerInitialScore:r}),11===s&&11===r?e.setState({dealerHasAce:!0,dealerScore:12,insurance:!0,gameMessage:"Insurance?"}):11===r?e.setState({dealerHasAce:!0,insurance:!0,gameMessage:"Insurance?"}):11!==s&&11!==r||e.setState({dealerHasAce:!0}),e.blackJackChecker()}).catch(function(e){return console.log(e)}))}},{key:"blackJackChecker",value:function(){10===this.returnValue(this.state.playerHand[0].value)&&11===this.returnValue(this.state.playerHand[1].value)?this.setState({playerHasBlackjack:!0}):10===this.returnValue(this.state.playerHand[1].value)&&11===this.returnValue(this.state.playerHand[0].value)&&this.setState({playerHasBlackjack:!0}),10===this.returnValue(this.state.dealerHand[0].value)&&11===this.returnValue(this.state.dealerHand[1].value)?this.setState({dealerHasBlackjack:!0}):10===this.returnValue(this.state.dealerHand[1].value)&&11===this.returnValue(this.state.dealerHand[0].value)&&this.setState({dealerHasBlackjack:!0}),this.state.playerHasBlackjack&&this.state.dealerHasBlackjack?this.setState({playerPlaying:!1,pushes:this.state.pushes+1,playerChips:this.state.playerChips+this.state.chipsInPlay,chipsInPlay:0,gameMessage:"Push! You both have a Blackjack!"}):this.state.playerHasBlackjack?this.setState({playerPlaying:!1,playerWins:this.state.playerWins+1,playerBlackjacks:this.state.playerBlackjacks+1,playerChips:this.state.playerChips+this.state.betAmount+3*this.state.chipsInPlay/2,winAmount:3*this.state.chipsInPlay/2,chipsInPlay:0,gameMessage:"Blackjack!"}):this.state.dealerHasBlackjack&&this.setState({playerPlaying:!1,dealerWins:this.state.dealerWins+1,dealerBlackjacks:this.state.dealerBlackjacks+1,chipsInPlay:0,gameMessage:"Dealer has a Blackjack!"})}},{key:"bustChecker",value:function(){this.state.playerHasAce&&this.state.playerScore>21?this.setState({playerScore:this.state.playerScore-10,playerHasAce:!1}):this.state.playerScore>21&&this.setState({playerPlaying:!1,dealerWins:this.state.dealerWins+1,playerBusts:this.state.playerBusts+1,chipsInPlay:0,gameMessage:"You Busted!"})}},{key:"checkWinner",value:function(){this.state.dealerScore>21?this.setState({playerWins:this.state.playerWins+1,dealerBusts:this.state.dealerBusts+1,playerChips:this.state.playerChips+2*this.state.chipsInPlay,winAmount:this.state.chipsInPlay,chipsInPlay:0,gameMessage:"Dealer busts, you won!"}):this.state.playerScore>this.state.dealerScore&&this.state.playerScore<=21?this.setState({playerWins:this.state.playerWins+1,playerChips:this.state.playerChips+2*this.state.chipsInPlay,winAmount:this.state.chipsInPlay,chipsInPlay:0,gameMessage:"You won!"}):this.state.playerScore===this.state.dealerScore?this.setState({pushes:this.state.pushes+1,playerChips:this.state.playerChips+this.state.chipsInPlay,chipsInPlay:0,gameMessage:"You pushed!"}):this.setState({dealerWins:this.state.dealerWins+1,chipsInPlay:0,gameMessage:"You lost!"})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"gameHeader"},n.a.createElement("h1",null,"Blackjack"),n.a.createElement("h3",null,"Dealer stands on 17"),this.state.gameStarted?n.a.createElement("div",null,n.a.createElement("button",{className:"lg red",onClick:function(){return e.handleEndGame()}},"New Deck")):n.a.createElement("button",{className:"lg",onClick:function(){return e.handleDealHand()}},"Start Game"),n.a.createElement(v,{playerChips:this.state.playerChips,betAmount:this.state.betAmount,chipsInPlay:this.state.chipsInPlay,winAmount:this.state.winAmount,playerPlaying:this.state.playerPlaying,gameStarted:this.state.gameStarted,increaseChipOne:this.increaseChipOne,increaseChipFive:this.increaseChipFive,increaseChipTen:this.increaseChipTen,increaseChipTwentyFive:this.increaseChipTwentyFive,clearChips:this.clearChips,increaseBetOne:this.increaseBetOne,increaseBetFive:this.increaseBetFive,increaseBetTen:this.increaseBetTen,increaseBetTwentyFive:this.increaseBetTwentyFive,clearBets:this.clearBets})),this.state.gameStarted?n.a.createElement("div",{className:"hands-container"},n.a.createElement(S,{name:"Player",cards:this.state.playerHand,score:this.state.playerScore,playerPlaying:this.state.playerPlaying,playerSplittable:this.state.playerSplittable,handleSplitEvent:this.handleSplitEvent,handleDrawCardEvent:this.handleDrawCardEvent,handleStandEvent:this.handleStandEvent,handleDealEvent:this.handleDealEvent,handleDoubleDownEvent:this.handleDoubleDownEvent}),n.a.createElement(S,{name:"Dealer",cards:this.state.dealerHand,score:this.state.dealerScore,playerPlaying:this.state.playerPlaying,dealerInitialScore:this.state.dealerInitialScore})):"",n.a.createElement(k,{playerWins:this.state.playerWins,dealerWins:this.state.dealerWins,playerBlackjacks:this.state.playerBlackjacks,dealerBlackjacks:this.state.dealerBlackjacks,playerBusts:this.state.playerBusts,dealerBusts:this.state.dealerBusts,pushes:this.state.pushes}),n.a.createElement("h3",null,this.state.gameMessage))}}]),a}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t.p+"static/media/blankCard.3b5d8172.jpg"}},[[10,1,2]]]);
//# sourceMappingURL=main.b6980ece.chunk.js.map
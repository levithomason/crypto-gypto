(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{45301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(67601)}])},67601:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var c=t(85893),a=t(65988),r=t(67294),o=t(49396),i=t(9008),s=function(e){var n=e.children,t=e.title,a=void 0===t?"This is the default title":t;return(0,c.jsxs)("div",{children:[(0,c.jsxs)(i.default,{children:[(0,c.jsx)("title",{children:a}),(0,c.jsx)("meta",{charSet:"utf-8"}),(0,c.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),n]})},d=t(35666),l=t.n(d),u=t(3283),f=t.n(u),b=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],h={Avalanche:[["0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64","FRAX",18],["0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664","USDC.e",6]],Ethereum:[["0x6b175474e89094c44da98b954eedeac495271d0f","DAI",18],["0x853d955aCEf822Db058eb8505911ED77F175b99e","FRAX",18]],Fantom:[["0xdc301622e621166BD8E82f2cA0A26c13Ad0BE355","FRAX",18],["0x04068da6c83afcfa0e13ba15a6696662335d5b75","USDC",6],["0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0","HEC",9],["0x75bdef24285013387a47775828bec90b91ca9a5f","sHEC",9],["0x94ccf60f700146bea8ef7832820800e2dfa92eda","wsHEC",18]],Harmony:[["0xFa7191D292d5633f702B0bd7E3E3BcCC0e633200","FRAX",18],["0x0dc78c79b4eb080ead5c1d16559225a46b580694","WAGMI",9],["0xf38593388079f7f5130d605e38abf6090d981ec2","sWAGMI",9],["0xbb948620fa9cd554ef9a331b13edea9b181f9d45","wsWAGMI",18]],Polygon:[["0x0000000000000000000000000000000000001010","MATIC",18],["0xc250e9987a032acac293d838726c511e6e1c029d","CLAM2",9],["0x2791bca1f2de4661ed88a30c99a7a9449aa84174","USDC",6],["0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89","FRAX",18]]};function p(e,n,t,c,a,r,o){try{var i=e[r](o),s=i.value}catch(d){return void t(d)}i.done?n(s):Promise.resolve(s).then(c,a)}function x(e){return function(){var n=this,t=arguments;return new Promise((function(c,a){var r=e.apply(n,t);function o(e){p(r,c,a,o,i,"next",e)}function i(e){p(r,c,a,o,i,"throw",e)}o(void 0)}))}}var m=x(l().mark((function e(n){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),k="https://api.coingecko.com/api/v3",v={tokenPrice:x(l().mark((function e(n,t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("".concat(k,"/simple/token_price/").concat(n,"?contract_addresses=").concat(t,"&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),price:x(l().mark((function e(n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("".concat(k,"/simple/price?ids=").concat(n.join(),"&vs_currencies=usd&include_24hr_change=true"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),coins:x(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("".concat(k,"/coins/list"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),assetPlatforms:x(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("".concat(k,"/asset_platforms"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))};function j(e,n,t,c,a,r,o){try{var i=e[r](o),s=i.value}catch(d){return void t(d)}i.done?n(s):Promise.resolve(s).then(c,a)}function w(e){return function(){var n=this,t=arguments;return new Promise((function(c,a){var r=e.apply(n,t);function o(e){j(r,c,a,o,i,"next",e)}function i(e){j(r,c,a,o,i,"throw",e)}o(void 0)}))}}function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],c=!0,a=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(c=(o=i.next()).done)&&(t.push(o.value),!n||t.length!==n);c=!0);}catch(s){a=!0,r=s}finally{try{c||null==i.return||i.return()}finally{if(a)throw r}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=function(e){var n=e.chain,t=e.address,o=g(r.useState([]),2),i=o[0],s=o[1],d=Object.values(h[n.name]),u=new(f())(n.mainnetURL),p=w(l().mark((function e(){var c,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],e.next=3,u.eth.getBalance(t);case 3:return a=e.sent,c.push({token:n.tokenSymbol,balance:u.utils.fromWei(a,"ether"),usdPrice:""}),e.next=7,Promise.all(d.map(w(l().mark((function e(a){var r,o,i,s,d,f,h,p,x,m,k;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=g(a,3),o=r[0],i=r[1],s=r[2],d=new u.eth.Contract(b,o),e.next=4,d.methods.balanceOf(t).call();case 4:return f=e.sent,h=f*Math.pow(10,-s),e.next=8,v.tokenPrice(n.coinGeckoId,[o]);case 8:p=e.sent,0!==+(x=h<1?h.toFixed(s):h.toLocaleString("fullwide",{useGrouping:!1}))&&c.push({token:i,balance:x,usdPrice:String(null!==(k=null===(m=p[o])||void 0===m?void 0:m.usd)&&void 0!==k?k:"")});case 11:case"end":return e.stop()}}),e)})))));case 7:s(c);case 8:case"end":return e.stop()}}),e)})));return r.useEffect((function(){p()}),[n,t]),(0,c.jsxs)("div",{className:"jsx-6544d12bc1c544e3",children:[i.map((function(e){var t=e.token,a=e.balance,r=e.usdPrice,o=Number(a.replace(/\..*/,"")).toLocaleString(),i=a.replace(/.*\./,"");return(0,c.jsxs)("div",{className:"jsx-6544d12bc1c544e3 token-row",children:[(0,c.jsx)("span",{className:"jsx-6544d12bc1c544e3 token-cell token-name",children:t}),(0,c.jsx)("span",{className:"jsx-6544d12bc1c544e3 token-cell token-usd-balance",children:a.length&&r.length?(Number(a)*Number(r)).toLocaleString():""}),(0,c.jsx)("span",{className:"jsx-6544d12bc1c544e3 token-cell token-whole-number",children:o}),(0,c.jsx)("span",{className:"jsx-6544d12bc1c544e3 token-cell token-decimal",children:"."}),(0,c.jsx)("span",{className:"jsx-6544d12bc1c544e3 token-cell token-decimal-number",children:i}),(0,c.jsx)("span",{className:"jsx-6544d12bc1c544e3 token-cell token-usd-price",children:r}),(0,c.jsx)("span",{className:"jsx-6544d12bc1c544e3 token-cell token-chain",children:n.name})]},"".concat(n.name,"-").concat(t))})),(0,c.jsx)(a.default,{id:"6544d12bc1c544e3",children:".token-row.jsx-6544d12bc1c544e3 {padding:4px;\nborder-top:1px solid rgba(0, 0, 0, 0.1)}\n.token-cell.jsx-6544d12bc1c544e3 {display:inline-block;\npadding:8px 16px;\nfont-family:monospace;\nfont-size:16px;\nvertical-align:middle}\n.token-cell.token-name.jsx-6544d12bc1c544e3 {padding-left:8px;\npadding-right:8px;\nfont-weight:bold;\nwidth:9ch}\n.token-cell.token-usd-balance.jsx-6544d12bc1c544e3 {width:11ch;\ncolor:green}\n.token-cell.token-whole-number.jsx-6544d12bc1c544e3 {text-align:right;\npadding-right:0;\nwidth:11ch;\nfont-weight:bold}\n.token-cell.token-decimal.jsx-6544d12bc1c544e3 {padding-left:0;\npadding-right:0;\nwidth:1ch}\n.token-cell.token-decimal-number.jsx-6544d12bc1c544e3 {padding-left:0;\nwidth:18ch}\n.token-cell.token-usd-price.jsx-6544d12bc1c544e3 {width:11ch;\nopacity:0.5}\n.token-cell.token-chain.jsx-6544d12bc1c544e3 {opacity:0.5}"})]})},_={Avalanche:{chainID:43114,tokenSymbol:"AVAX",name:"Avalanche",mainnetURL:"https://api.avax.network/ext/bc/C/rpc",coinGeckoId:"avalanche"},Ethereum:{chainID:1,tokenSymbol:"ETH",name:"Ethereum",mainnetURL:"https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",coinGeckoId:"ethereum"},Fantom:{chainID:250,tokenSymbol:"FTM",name:"Fantom",mainnetURL:"https://rpc.ftm.tools",coinGeckoId:"fantom"},Harmony:{chainID:16666e5,tokenSymbol:"ONE",name:"Harmony",mainnetURL:"https://api.s0.t.hmny.io",coinGeckoId:"harmony-shard-0"},Polygon:{chainID:137,tokenSymbol:"MATIC",name:"Polygon",mainnetURL:"https://polygon-rpc.com",coinGeckoId:"polygon-pos"}},A=function(){var e=(0,o.useMetaMask)(),n=e.status,t=e.connect,i=e.account;return r.useEffect((function(){"notConnected"===n&&t()}),[]),(0,c.jsxs)(s,{title:"Levi's cypto gypto machine",children:[(0,c.jsx)("h1",{className:"jsx-591a195debd205d2",children:"\ud83e\udd16 cypto gypto"}),(0,c.jsx)("div",{className:"jsx-591a195debd205d2 actions",children:"initializing"===n&&(0,c.jsx)("button",{className:"jsx-591a195debd205d2",children:"Synchronisation with MetaMask ongoing..."})||"unavailable"===n&&(0,c.jsx)("button",{className:"jsx-591a195debd205d2",children:"MetaMask not available :("})||"notConnected"===n&&(0,c.jsx)("button",{onClick:t,className:"jsx-591a195debd205d2",children:"Connect to MetaMask"})||"connecting"===n&&(0,c.jsx)("button",{className:"jsx-591a195debd205d2",children:"Connecting..."})||"connected"===n&&(0,c.jsx)("button",{className:"jsx-591a195debd205d2",children:i})}),i&&(0,c.jsx)("div",{className:"jsx-591a195debd205d2 accounts",children:Object.values(_).map((function(e){return(0,c.jsx)(y,{chain:e,address:i},e.name)}))}),(0,c.jsx)(a.default,{id:"e7e94fbd0e64d05b",children:"html {font-family:sans-serif}\nbody {padding:0;\nmargin:0}"}),(0,c.jsx)(a.default,{id:"59842abae12fc120",children:"h1.jsx-591a195debd205d2 {text-align:center}\n.accounts.jsx-591a195debd205d2 {}\n.actions.jsx-591a195debd205d2 {padding:16px;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-justify-content:center;\njustify-content:center}\nbutton.jsx-591a195debd205d2 {background:black;\ncolor:white;\nborder:none;\nborder-radius:10px;\npadding:15px;\ncursor:pointer}"})]})};function E(){return(0,c.jsx)(o.MetaMaskProvider,{children:(0,c.jsx)(A,{})})}},46601:function(){},89214:function(){},71922:function(){},2363:function(){},27790:function(){},52361:function(){},94616:function(){},6567:function(){}},function(e){e.O(0,[774,482,102,888,179],(function(){return n=45301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
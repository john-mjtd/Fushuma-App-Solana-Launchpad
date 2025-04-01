import{am as Z,aH as ie,aI as re,aJ as se,R as oe,av as G,aG as U}from"./Ds-b8P94.js";var j={exports:{}},J;function ae(){return J||(J=1,function(i){var t=Object.prototype.hasOwnProperty,e="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(e=!1));function r(f,a,s){this.fn=f,this.context=a,this.once=s||!1}function o(f,a,s,l,y){if(typeof s!="function")throw new TypeError("The listener must be a function");var g=new r(s,l||f,y),c=e?e+a:a;return f._events[c]?f._events[c].fn?f._events[c]=[f._events[c],g]:f._events[c].push(g):(f._events[c]=g,f._eventsCount++),f}function h(f,a){--f._eventsCount===0?f._events=new n:delete f._events[a]}function u(){this._events=new n,this._eventsCount=0}u.prototype.eventNames=function(){var a=[],s,l;if(this._eventsCount===0)return a;for(l in s=this._events)t.call(s,l)&&a.push(e?l.slice(1):l);return Object.getOwnPropertySymbols?a.concat(Object.getOwnPropertySymbols(s)):a},u.prototype.listeners=function(a){var s=e?e+a:a,l=this._events[s];if(!l)return[];if(l.fn)return[l.fn];for(var y=0,g=l.length,c=new Array(g);y<g;y++)c[y]=l[y].fn;return c},u.prototype.listenerCount=function(a){var s=e?e+a:a,l=this._events[s];return l?l.fn?1:l.length:0},u.prototype.emit=function(a,s,l,y,g,c){var _=e?e+a:a;if(!this._events[_])return!1;var d=this._events[_],p=arguments.length,w,v;if(d.fn){switch(d.once&&this.removeListener(a,d.fn,void 0,!0),p){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,s),!0;case 3:return d.fn.call(d.context,s,l),!0;case 4:return d.fn.call(d.context,s,l,y),!0;case 5:return d.fn.call(d.context,s,l,y,g),!0;case 6:return d.fn.call(d.context,s,l,y,g,c),!0}for(v=1,w=new Array(p-1);v<p;v++)w[v-1]=arguments[v];d.fn.apply(d.context,w)}else{var x=d.length,m;for(v=0;v<x;v++)switch(d[v].once&&this.removeListener(a,d[v].fn,void 0,!0),p){case 1:d[v].fn.call(d[v].context);break;case 2:d[v].fn.call(d[v].context,s);break;case 3:d[v].fn.call(d[v].context,s,l);break;case 4:d[v].fn.call(d[v].context,s,l,y);break;default:if(!w)for(m=1,w=new Array(p-1);m<p;m++)w[m-1]=arguments[m];d[v].fn.apply(d[v].context,w)}}return!0},u.prototype.on=function(a,s,l){return o(this,a,s,l,!1)},u.prototype.once=function(a,s,l){return o(this,a,s,l,!0)},u.prototype.removeListener=function(a,s,l,y){var g=e?e+a:a;if(!this._events[g])return this;if(!s)return h(this,g),this;var c=this._events[g];if(c.fn)c.fn===s&&(!y||c.once)&&(!l||c.context===l)&&h(this,g);else{for(var _=0,d=[],p=c.length;_<p;_++)(c[_].fn!==s||y&&!c[_].once||l&&c[_].context!==l)&&d.push(c[_]);d.length?this._events[g]=d.length===1?d[0]:d:h(this,g)}return this},u.prototype.removeAllListeners=function(a){var s;return a?(s=e?e+a:a,this._events[s]&&h(this,s)):(this._events=new n,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=e,u.EventEmitter=u,i.exports=u}(j)),j.exports}var ce=ae();const le=Z(ce);var F,Q;function de(){if(Q)return F;Q=1;function i(t){if(t.length>=255)throw new TypeError("Alphabet too long");for(var e=new Uint8Array(256),n=0;n<e.length;n++)e[n]=255;for(var r=0;r<t.length;r++){var o=t.charAt(r),h=o.charCodeAt(0);if(e[h]!==255)throw new TypeError(o+" is ambiguous");e[h]=r}var u=t.length,f=t.charAt(0),a=Math.log(u)/Math.log(256),s=Math.log(256)/Math.log(u);function l(c){if(c instanceof Uint8Array||(ArrayBuffer.isView(c)?c=new Uint8Array(c.buffer,c.byteOffset,c.byteLength):Array.isArray(c)&&(c=Uint8Array.from(c))),!(c instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(c.length===0)return"";for(var _=0,d=0,p=0,w=c.length;p!==w&&c[p]===0;)p++,_++;for(var v=(w-p)*s+1>>>0,x=new Uint8Array(v);p!==w;){for(var m=c[p],T=0,M=v-1;(m!==0||T<d)&&M!==-1;M--,T++)m+=256*x[M]>>>0,x[M]=m%u>>>0,m=m/u>>>0;if(m!==0)throw new Error("Non-zero carry");d=T,p++}for(var E=v-d;E!==v&&x[E]===0;)E++;for(var z=f.repeat(_);E<v;++E)z+=t.charAt(x[E]);return z}function y(c){if(typeof c!="string")throw new TypeError("Expected String");if(c.length===0)return new Uint8Array;for(var _=0,d=0,p=0;c[_]===f;)d++,_++;for(var w=(c.length-_)*a+1>>>0,v=new Uint8Array(w);c[_];){var x=c.charCodeAt(_);if(x>255)return;var m=e[x];if(m===255)return;for(var T=0,M=w-1;(m!==0||T<p)&&M!==-1;M--,T++)m+=u*v[M]>>>0,v[M]=m%256>>>0,m=m/256>>>0;if(m!==0)throw new Error("Non-zero carry");p=T,_++}for(var E=w-p;E!==w&&v[E]===0;)E++;for(var z=new Uint8Array(d+(w-E)),ne=d;E!==w;)z[ne++]=v[E++];return z}function g(c){var _=y(c);if(_)return _;throw new Error("Non-base"+u+" character")}return{encode:l,decodeUnsafe:y,decode:g}}return F=i,F}var R,X;function he(){return X||(X=1,R=de()("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")),R}var ue=he();const S=Z(ue);let K;const fe=new Uint8Array(16);function ve(){if(!K&&(K=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!K))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return K(fe)}const b=[];for(let i=0;i<256;++i)b.push((i+256).toString(16).slice(1));function _e(i,t=0){return b[i[t+0]]+b[i[t+1]]+b[i[t+2]]+b[i[t+3]]+"-"+b[i[t+4]]+b[i[t+5]]+"-"+b[i[t+6]]+b[i[t+7]]+"-"+b[i[t+8]]+b[i[t+9]]+"-"+b[i[t+10]]+b[i[t+11]]+b[i[t+12]]+b[i[t+13]]+b[i[t+14]]+b[i[t+15]]}const pe=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Y={randomUUID:pe};function me(i,t,e){if(Y.randomUUID&&!i)return Y.randomUUID();i=i||{};const n=i.random||(i.rng||ve)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,_e(n)}function q(i){return i.version===void 0}function P(i){return q(i)?i.serialize({verifySignatures:!1,requireAllSignatures:!1}):i.serialize()}var ee=function(i,t,e,n){function r(o){return o instanceof e?o:new e(function(h){h(o)})}return new(e||(e=Promise))(function(o,h){function u(s){try{a(n.next(s))}catch(l){h(l)}}function f(s){try{a(n.throw(s))}catch(l){h(l)}}function a(s){s.done?o(s.value):r(s.value).then(u,f)}a((n=n.apply(i,t||[])).next())})};function D(i){return ee(this,void 0,void 0,function*(){try{return yield i.request({method:"wallet_getSnaps"}),!0}catch{return!1}})}function ge(){return ee(this,void 0,void 0,function*(){try{const i=window.ethereum;if(!i)return null;if(i.providers&&Array.isArray(i.providers)){const t=i.providers;for(const e of t)if(yield D(e))return e}if(i.detected&&Array.isArray(i.detected)){const t=i.detected;for(const e of t)if(yield D(e))return e}return(yield D(i))?i:null}catch(i){return console.error(i),null}})}const we="solana:mainnet",ye="solana:devnet",be="solana:testnet",Ee="solana:localnet",te=[we,ye,be,Ee];function $(i){return te.includes(i)}var C=function(i,t,e,n){if(e==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?i!==t||!n:!t.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e==="m"?n:e==="a"?n.call(i):n?n.value:t.get(i)},I=function(i,t,e,n,r){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?i!==t||!r:!t.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?r.call(i,e):r?r.value=e:t.set(i,e),e},O,k,N,H,L,W;const Ae=te,Se=[ie,re,se];class V{get address(){return C(this,O,"f")}get publicKey(){return C(this,k,"f").slice()}get chains(){return C(this,N,"f").slice()}get features(){return C(this,H,"f").slice()}get label(){return C(this,L,"f")}get icon(){return C(this,W,"f")}constructor({address:t,publicKey:e,label:n,icon:r}){O.set(this,void 0),k.set(this,void 0),N.set(this,void 0),H.set(this,void 0),L.set(this,void 0),W.set(this,void 0),new.target===V&&Object.freeze(this),I(this,O,t,"f"),I(this,k,e,"f"),I(this,N,Ae,"f"),I(this,H,Se,"f"),I(this,L,n,"f"),I(this,W,r,"f")}}O=new WeakMap,k=new WeakMap,N=new WeakMap,H=new WeakMap,L=new WeakMap,W=new WeakMap;var A=function(i,t,e,n){function r(o){return o instanceof e?o:new e(function(h){h(o)})}return new(e||(e=Promise))(function(o,h){function u(s){try{a(n.next(s))}catch(l){h(l)}}function f(s){try{a(n.throw(s))}catch(l){h(l)}}function a(s){s.done?o(s.value):r(s.value).then(u,f)}a((n=n.apply(i,t||[])).next())})};class B extends le{constructor(t){super(),this._network="mainnet-beta",this._iframeParams={},this._element=null,this._iframe=null,this._publicKey=null,this._account=null,this._isConnected=!1,this._connectHandler=null,this._messageHandlers={},this._handleEvent=e=>{var n,r;switch(e.type){case"connect":{this._collapseIframe(),!((n=e.data)===null||n===void 0)&&n.publicKey?(this._publicKey=e.data.publicKey,this._isConnected=!0,this._connectHandler&&(this._connectHandler.resolve(),this._connectHandler=null),this._connected()):(this._connectHandler&&(this._connectHandler.reject(),this._connectHandler=null),this._disconnected());return}case"disconnect":{this._connectHandler&&(this._connectHandler.reject(),this._connectHandler=null),this._disconnected();return}case"accountChanged":{!((r=e.data)===null||r===void 0)&&r.publicKey?(this._publicKey=e.data.publicKey,this.emit("accountChanged",this.publicKey),this._standardConnected()):(this.emit("accountChanged",void 0),this._standardDisconnected());return}default:return}},this._handleResize=e=>{e.resizeMode==="full"?e.params.mode==="fullscreen"?this._expandIframe():e.params.mode==="hide"&&this._collapseIframe():e.resizeMode==="coordinates"&&this._resizeIframe(e.params)},this._handleMessage=e=>{var n;if(((n=e.data)===null||n===void 0?void 0:n.channel)!=="solflareIframeToWalletAdapter")return;const r=e.data.data||{};if(r.type==="event")this._handleEvent(r.event);else if(r.type==="resize")this._handleResize(r);else if(r.type==="response"&&this._messageHandlers[r.id]){const{resolve:o,reject:h}=this._messageHandlers[r.id];delete this._messageHandlers[r.id],r.error?h(r.error):o(r.result)}},this._removeElement=()=>{this._element&&(this._element.remove(),this._element=null)},this._removeDanglingElements=()=>{const e=document.getElementsByClassName("solflare-metamask-wallet-adapter-iframe");for(const n of e)n.parentElement&&n.remove()},this._injectElement=()=>{this._removeElement(),this._removeDanglingElements();const e=Object.assign(Object.assign({},this._iframeParams),{mm:!0,v:1,cluster:this._network||"mainnet-beta",origin:window.location.origin||"",title:document.title||""}),n=Object.keys(e).map(o=>`${o}=${encodeURIComponent(e[o])}`).join("&"),r=`${B.IFRAME_URL}?${n}`;this._element=document.createElement("div"),this._element.className="solflare-metamask-wallet-adapter-iframe",this._element.innerHTML=`
      <iframe src='${r}' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>
    `,document.body.appendChild(this._element),this._iframe=this._element.querySelector("iframe"),window.addEventListener("message",this._handleMessage,!1)},this._collapseIframe=()=>{this._iframe&&(this._iframe.style.top="",this._iframe.style.right="",this._iframe.style.height="2px",this._iframe.style.width="2px")},this._expandIframe=()=>{this._iframe&&(this._iframe.style.top="0px",this._iframe.style.bottom="0px",this._iframe.style.left="0px",this._iframe.style.right="0px",this._iframe.style.width="100%",this._iframe.style.height="100%")},this._resizeIframe=e=>{this._iframe&&(this._iframe.style.top=isFinite(e.top)?`${e.top}px`:"",this._iframe.style.bottom=isFinite(e.bottom)?`${e.bottom}px`:"",this._iframe.style.left=isFinite(e.left)?`${e.left}px`:"",this._iframe.style.right=isFinite(e.right)?`${e.right}px`:"",this._iframe.style.width=isFinite(e.width)?`${e.width}px`:e.width,this._iframe.style.height=isFinite(e.height)?`${e.height}px`:e.height)},this._sendIframeMessage=e=>{if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");return new Promise((n,r)=>{var o,h;const u=me();this._messageHandlers[u]={resolve:n,reject:r},(h=(o=this._iframe)===null||o===void 0?void 0:o.contentWindow)===null||h===void 0||h.postMessage({channel:"solflareWalletAdapterToIframe",data:Object.assign({id:u},e)},"*")})},this._connected=()=>{this._isConnected=!0,this.emit("connect",this.publicKey),this._standardConnected()},this._disconnected=()=>{this._publicKey=null,this._isConnected=!1,window.removeEventListener("message",this._handleMessage,!1),this._removeElement(),this.emit("disconnect"),this._standardDisconnected()},this._standardConnected=()=>{if(!this.publicKey)return;const e=this.publicKey.toString();(!this._account||this._account.address!==e)&&(this._account=new V({address:e,publicKey:this.publicKey.toBytes()}),this.emit("standard_change",{accounts:this.standardAccounts}))},this._standardDisconnected=()=>{this._account&&(this._account=null,this.emit("standard_change",{accounts:this.standardAccounts}))},t!=null&&t.network&&(this._network=t==null?void 0:t.network),window.SolflareMetaMaskParams&&(this._iframeParams=Object.assign(Object.assign({},this._iframeParams),window.SolflareMetaMaskParams)),t!=null&&t.params&&(this._iframeParams=Object.assign(Object.assign({},this._iframeParams),t==null?void 0:t.params))}get publicKey(){return this._publicKey?new oe(this._publicKey):null}get standardAccount(){return this._account}get standardAccounts(){return this._account?[this._account]:[]}get isConnected(){return this._isConnected}get connected(){return this.isConnected}get autoApprove(){return!1}connect(){return A(this,void 0,void 0,function*(){this.connected||(this._injectElement(),yield new Promise((t,e)=>{this._connectHandler={resolve:t,reject:e}}))})}disconnect(){return A(this,void 0,void 0,function*(){yield this._sendIframeMessage({method:"disconnect"}),this._disconnected()})}signTransaction(t){var e;return A(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const n=P(t),r=yield this._sendIframeMessage({method:"signTransactionV2",params:{transaction:S.encode(n)}}),{transaction:o}=r;return q(t)?G.from(S.decode(o)):U.deserialize(S.decode(o))}catch(n){throw new Error(((e=n==null?void 0:n.toString)===null||e===void 0?void 0:e.call(n))||"Failed to sign transaction")}})}signAllTransactions(t){var e;return A(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const n=t.map(o=>P(o)),{transactions:r}=yield this._sendIframeMessage({method:"signAllTransactionsV2",params:{transactions:n.map(o=>S.encode(o))}});return r.map((o,h)=>q(t[h])?G.from(S.decode(o)):U.deserialize(S.decode(o)))}catch(n){throw new Error(((e=n==null?void 0:n.toString)===null||e===void 0?void 0:e.call(n))||"Failed to sign transactions")}})}signAndSendTransaction(t,e){var n;return A(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const r=P(t),{signature:o}=yield this._sendIframeMessage({method:"signAndSendTransaction",params:{transaction:S.encode(r),options:e}});return o}catch(r){throw new Error(((n=r==null?void 0:r.toString)===null||n===void 0?void 0:n.call(r))||"Failed to sign and send transaction")}})}signMessage(t,e="utf8"){var n;return A(this,void 0,void 0,function*(){if(!this.connected||!this.publicKey)throw new Error("Wallet not connected");try{const{signature:r}=yield this._sendIframeMessage({method:"signMessage",params:{data:S.encode(t),display:e}});return Uint8Array.from(S.decode(r))}catch(r){throw new Error(((n=r==null?void 0:r.toString)===null||n===void 0?void 0:n.call(r))||"Failed to sign message")}})}sign(t,e="utf8"){return A(this,void 0,void 0,function*(){return yield this.signMessage(t,e)})}static isSupported(){return A(this,void 0,void 0,function*(){return!!(yield ge())})}standardSignAndSendTransaction(...t){return A(this,void 0,void 0,function*(){if(!this.connected)throw new Error("not connected");const e=[];if(t.length===1){const{transaction:n,account:r,chain:o,options:h}=t[0],{minContextSlot:u,preflightCommitment:f,skipPreflight:a,maxRetries:s}=h||{};if(r!==this._account)throw new Error("invalid account");if(!$(o))throw new Error("invalid chain");const l=yield this.signAndSendTransaction(U.deserialize(n),{preflightCommitment:f,minContextSlot:u,maxRetries:s,skipPreflight:a});e.push({signature:S.decode(l)})}else if(t.length>1)for(const n of t)e.push(...yield this.standardSignAndSendTransaction(n));return e})}standardSignTransaction(...t){return A(this,void 0,void 0,function*(){if(!this.connected)throw new Error("not connected");const e=[];if(t.length===1){const{transaction:n,account:r,chain:o}=t[0];if(r!==this._account)throw new Error("invalid account");if(o&&!$(o))throw new Error("invalid chain");const h=yield this.signTransaction(U.deserialize(n));e.push({signedTransaction:h.serialize()})}else if(t.length>1){let n;for(const h of t){if(h.account!==this._account)throw new Error("invalid account");if(h.chain){if(!$(h.chain))throw new Error("invalid chain");if(n){if(h.chain!==n)throw new Error("conflicting chain")}else n=h.chain}}const r=t.map(({transaction:h})=>U.deserialize(h)),o=yield this.signAllTransactions(r);e.push(...o.map(h=>({signedTransaction:h.serialize()})))}return e})}standardSignMessage(...t){return A(this,void 0,void 0,function*(){if(!this.connected)throw new Error("not connected");const e=[];if(t.length===1){const{message:n,account:r}=t[0];if(r!==this._account)throw new Error("invalid account");const o=yield this.signMessage(n);e.push({signedMessage:n,signature:o})}else if(t.length>1)for(const n of t)e.push(...yield this.standardSignMessage(n));return e})}}B.IFRAME_URL="https://widget.solflare.com/";export{V as StandardSolflareMetaMaskWalletAccount,B as default};

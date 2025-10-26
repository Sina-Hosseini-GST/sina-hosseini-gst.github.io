(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qo="158",of=0,Dl=1,lf=2,Mu=1,cf=2,Kn=3,bi=0,Ht=1,Pn=2,vi=0,Rr=1,Ul=2,Il=3,Nl=4,uf=5,Hi=100,hf=101,ff=102,Ol=103,Fl=104,df=200,pf=201,mf=202,_f=203,yo=204,To=205,gf=206,vf=207,xf=208,Sf=209,Mf=210,Ef=211,yf=212,Tf=213,bf=214,Af=0,wf=1,Rf=2,ra=3,Cf=4,Pf=5,Lf=6,Df=7,Eu=0,Uf=1,If=2,xi=0,Nf=1,Of=2,Ff=3,Bf=4,zf=5,yu=300,Ur=301,Ir=302,bo=303,Ao=304,xa=306,wo=1e3,Tn=1001,Ro=1002,Ft=1003,Bl=1004,Ia=1005,hn=1006,Gf=1007,cs=1008,Si=1009,Hf=1010,Vf=1011,el=1012,Tu=1013,di=1014,pi=1015,us=1016,bu=1017,Au=1018,Wi=1020,kf=1021,bn=1023,Wf=1024,Xf=1025,Xi=1026,Nr=1027,qf=1028,wu=1029,Yf=1030,Ru=1031,Cu=1033,Na=33776,Oa=33777,Fa=33778,Ba=33779,zl=35840,Gl=35841,Hl=35842,Vl=35843,Kf=36196,kl=37492,Wl=37496,Xl=37808,ql=37809,Yl=37810,Kl=37811,jl=37812,Zl=37813,$l=37814,Jl=37815,Ql=37816,ec=37817,tc=37818,nc=37819,ic=37820,rc=37821,za=36492,sc=36494,ac=36495,jf=36283,oc=36284,lc=36285,cc=36286,Pu=3e3,qi=3001,Zf=3200,$f=3201,Jf=0,Qf=1,pn="",Tt="srgb",ri="srgb-linear",tl="display-p3",Sa="display-p3-linear",sa="linear",Qe="srgb",aa="rec709",oa="p3",or=7680,uc=519,ed=512,td=513,nd=514,id=515,rd=516,sd=517,ad=518,od=519,hc=35044,fc="300 es",Co=1035,Qn=2e3,la=2001;class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ga=Math.PI/180,Po=180/Math.PI;function Es(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[r&255]+Ct[r>>8&255]+Ct[r>>16&255]+Ct[r>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function zt(r,e,t){return Math.max(e,Math.min(t,r))}function ld(r,e){return(r%e+e)%e}function Ha(r,e,t){return(1-t)*r+t*e}function dc(r){return(r&r-1)===0&&r!==0}function Lo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Kr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,i,s,a,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],_=i[0],p=i[3],d=i[6],E=i[1],x=i[4],M=i[7],T=i[2],R=i[5],b=i[8];return s[0]=a*_+o*E+l*T,s[3]=a*p+o*x+l*R,s[6]=a*d+o*M+l*b,s[1]=c*_+u*E+h*T,s[4]=c*p+u*x+h*R,s[7]=c*d+u*M+h*b,s[2]=f*_+m*E+g*T,s[5]=f*p+m*x+g*R,s[8]=f*d+m*M+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,m=c*s-a*l,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Va.makeScale(e,t)),this}rotate(e){return this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new Oe;function Lu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function hs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function cd(){const r=hs("canvas");return r.style.display="block",r}const pc={};function rs(r){r in pc||(pc[r]=!0,console.warn(r))}const mc=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_c=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cs={[ri]:{transfer:sa,primaries:aa,toReference:r=>r,fromReference:r=>r},[Tt]:{transfer:Qe,primaries:aa,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Sa]:{transfer:sa,primaries:oa,toReference:r=>r.applyMatrix3(_c),fromReference:r=>r.applyMatrix3(mc)},[tl]:{transfer:Qe,primaries:oa,toReference:r=>r.convertSRGBToLinear().applyMatrix3(_c),fromReference:r=>r.applyMatrix3(mc).convertLinearToSRGB()}},ud=new Set([ri,Sa]),We={enabled:!0,_workingColorSpace:ri,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!ud.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Cs[e].toReference,i=Cs[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Cs[r].primaries},getTransfer:function(r){return r===pn?sa:Cs[r].transfer}};function Cr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ka(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let lr;class Du{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lr===void 0&&(lr=hs("canvas")),lr.width=e.width,lr.height=e.height;const n=lr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=lr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Cr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cr(t[n]/255)*255):t[n]=Cr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hd=0;class Uu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Es(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Wa(i[a].image)):s.push(Wa(i[a]))}else s=Wa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Wa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Du.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fd=0;class Vt extends kr{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=Tn,i=Tn,s=hn,a=cs,o=bn,l=Si,c=Vt.DEFAULT_ANISOTROPY,u=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Es(),this.name="",this.source=new Uu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===qi?Tt:pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wo:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case Ro:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wo:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case Ro:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tt?qi:Pu}set encoding(e){rs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qi?Tt:pn}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=yu;Vt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,i=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(m+1)/2,T=(d+1)/2,R=(u+f)/4,b=(h+_)/4,L=(g+p)/4;return x>M&&x>T?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=R/n,s=b/n):M>T?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=R/i,s=L/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=b/s,i=L/s),this.set(n,i,s,t),this}let E=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dd extends kr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(rs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qi?Tt:pn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Uu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends dd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Iu extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pd extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==m||u!==g){let p=1-o;const d=l*f+c*m+u*g+h*_,E=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const T=Math.sqrt(x),R=Math.atan2(T,d*E);p=Math.sin(p*R)/T,o=Math.sin(o*R)/T}const M=o*E;if(l=l*p+f*M,c=c*p+m*M,u=u*p+g*M,h=h*p+_*M,p===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-o*m,e[t+2]=c*g+u*m+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xa.copy(this).projectOnVector(e),this.sub(Xa)}reflect(e){return this.sub(Xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xa=new B,gc=new ys;class Ts{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(s,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ps.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ps.copy(n.boundingBox)),Ps.applyMatrix4(e.matrixWorld),this.union(Ps)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Ls.subVectors(this.max,jr),cr.subVectors(e.a,jr),ur.subVectors(e.b,jr),hr.subVectors(e.c,jr),oi.subVectors(ur,cr),li.subVectors(hr,ur),Di.subVectors(cr,hr);let t=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Di.z,Di.y,oi.z,0,-oi.x,li.z,0,-li.x,Di.z,0,-Di.x,-oi.y,oi.x,0,-li.y,li.x,0,-Di.y,Di.x,0];return!qa(t,cr,ur,hr,Ls)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,cr,ur,hr,Ls))?!1:(Ds.crossVectors(oi,li),t=[Ds.x,Ds.y,Ds.z],qa(t,cr,ur,hr,Ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kn=[new B,new B,new B,new B,new B,new B,new B,new B],Sn=new B,Ps=new Ts,cr=new B,ur=new B,hr=new B,oi=new B,li=new B,Di=new B,jr=new B,Ls=new B,Ds=new B,Ui=new B;function qa(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ui.fromArray(r,s);const o=i.x*Math.abs(Ui.x)+i.y*Math.abs(Ui.y)+i.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),u=n.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const md=new Ts,Zr=new B,Ya=new B;class nl{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):md.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(Ya)),this.expandByPoint(Zr.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new B,Ka=new B,Us=new B,ci=new B,ja=new B,Is=new B,Za=new B;class _d{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ka.copy(e).add(t).multiplyScalar(.5),Us.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(Ka);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Us),o=ci.dot(this.direction),l=-ci.dot(Us),c=ci.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ka).addScaledVector(Us,f),m}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const n=Wn.dot(this.direction),i=Wn.dot(Wn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,i,s){ja.subVectors(t,e),Is.subVectors(n,e),Za.crossVectors(ja,Is);let a=this.direction.dot(Za),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,e);const l=o*this.direction.dot(Is.crossVectors(ci,Is));if(l<0)return null;const c=o*this.direction.dot(ja.cross(ci));if(c<0||l+c>a)return null;const u=-o*ci.dot(Za);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,n,i,s,a,o,l,c,u,h,f,m,g,_,p){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,f,m,g,_,p)}set(e,t,n,i,s,a,o,l,c,u,h,f,m,g,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fr.setFromMatrixColumn(e,0).length(),s=1/fr.setFromMatrixColumn(e,1).length(),a=1/fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-a*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gd,e,vd)}lookAt(e,t,n){const i=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),ui.crossVectors(n,Zt),ui.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),ui.crossVectors(n,Zt)),ui.normalize(),Ns.crossVectors(Zt,ui),i[0]=ui.x,i[4]=Ns.x,i[8]=Zt.x,i[1]=ui.y,i[5]=Ns.y,i[9]=Zt.y,i[2]=ui.z,i[6]=Ns.z,i[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],E=n[3],x=n[7],M=n[11],T=n[15],R=i[0],b=i[4],L=i[8],v=i[12],A=i[1],z=i[5],X=i[9],Y=i[13],C=i[2],N=i[6],W=i[10],V=i[14],Z=i[3],j=i[7],K=i[11],D=i[15];return s[0]=a*R+o*A+l*C+c*Z,s[4]=a*b+o*z+l*N+c*j,s[8]=a*L+o*X+l*W+c*K,s[12]=a*v+o*Y+l*V+c*D,s[1]=u*R+h*A+f*C+m*Z,s[5]=u*b+h*z+f*N+m*j,s[9]=u*L+h*X+f*W+m*K,s[13]=u*v+h*Y+f*V+m*D,s[2]=g*R+_*A+p*C+d*Z,s[6]=g*b+_*z+p*N+d*j,s[10]=g*L+_*X+p*W+d*K,s[14]=g*v+_*Y+p*V+d*D,s[3]=E*R+x*A+M*C+T*Z,s[7]=E*b+x*z+M*N+T*j,s[11]=E*L+x*X+M*W+T*K,s[15]=E*v+x*Y+M*V+T*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*m-n*l*m)+_*(+t*l*m-t*c*f+s*a*f-i*a*m+i*c*u-s*l*u)+p*(+t*c*h-t*o*m-s*a*h+n*a*m+s*o*u-n*c*u)+d*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],E=h*p*c-_*f*c+_*l*m-o*p*m-h*l*d+o*f*d,x=g*f*c-u*p*c-g*l*m+a*p*m+u*l*d-a*f*d,M=u*_*c-g*h*c+g*o*m-a*_*m-u*o*d+a*h*d,T=g*h*l-u*_*l-g*o*f+a*_*f+u*o*p-a*h*p,R=t*E+n*x+i*M+s*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return e[0]=E*b,e[1]=(_*f*s-h*p*s-_*i*m+n*p*m+h*i*d-n*f*d)*b,e[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*d+n*l*d)*b,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*m-n*l*m)*b,e[4]=x*b,e[5]=(u*p*s-g*f*s+g*i*m-t*p*m-u*i*d+t*f*d)*b,e[6]=(g*l*s-a*p*s-g*i*c+t*p*c+a*i*d-t*l*d)*b,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*m+t*l*m)*b,e[8]=M*b,e[9]=(g*h*s-u*_*s-g*n*m+t*_*m+u*n*d-t*h*d)*b,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*d+t*o*d)*b,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*m-t*o*m)*b,e[12]=T*b,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*p+t*h*p)*b,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*p-t*o*p)*b,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,m=s*u,g=s*h,_=a*u,p=a*h,d=o*h,E=l*c,x=l*u,M=l*h,T=n.x,R=n.y,b=n.z;return i[0]=(1-(_+d))*T,i[1]=(m+M)*T,i[2]=(g-x)*T,i[3]=0,i[4]=(m-M)*R,i[5]=(1-(f+d))*R,i[6]=(p+E)*R,i[7]=0,i[8]=(g+x)*b,i[9]=(p-E)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=fr.set(i[0],i[1],i[2]).length();const a=fr.set(i[4],i[5],i[6]).length(),o=fr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Mn.copy(this);const c=1/s,u=1/a,h=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,t.setFromRotationMatrix(Mn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Qn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let m,g;if(o===Qn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===la)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Qn){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(a-s),f=(t+e)*c,m=(n+i)*u;let g,_;if(o===Qn)g=(a+s)*h,_=-2*h;else if(o===la)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fr=new B,Mn=new wt,gd=new B(0,0,0),vd=new B(1,1,1),ui=new B,Ns=new B,Zt=new B,vc=new wt,xc=new ys;class Ma{constructor(e=0,t=0,n=0,i=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xc.setFromEuler(this),this.setFromQuaternion(xc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class Nu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xd=0;const Sc=new B,dr=new ys,Xn=new wt,Os=new B,$r=new B,Sd=new B,Md=new ys,Mc=new B(1,0,0),Ec=new B(0,1,0),yc=new B(0,0,1),Ed={type:"added"},yd={type:"removed"};class nn extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new B,t=new Ma,n=new ys,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new wt},normalMatrix:{value:new Oe}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Nu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(Mc,e)}rotateY(e){return this.rotateOnAxis(Ec,e)}rotateZ(e){return this.rotateOnAxis(yc,e)}translateOnAxis(e,t){return Sc.copy(e).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mc,e)}translateY(e){return this.translateOnAxis(Ec,e)}translateZ(e){return this.translateOnAxis(yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Os.copy(e):Os.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt($r,Os,this.up):Xn.lookAt(Os,$r,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),dr.setFromRotationMatrix(Xn),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ed)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,Sd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,Md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}nn.DEFAULT_UP=new B(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new B,qn=new B,$a=new B,Yn=new B,pr=new B,mr=new B,Tc=new B,Ja=new B,Qa=new B,eo=new B;let Fs=!1;class yn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),En.subVectors(e,t),i.cross(En);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){En.subVectors(i,t),qn.subVectors(n,t),$a.subVectors(e,t);const a=En.dot(En),o=En.dot(qn),l=En.dot($a),c=qn.dot(qn),u=qn.dot($a),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yn),Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getUV(e,t,n,i,s,a,o,l){return Fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fs=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Yn),l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l}static isFrontFacing(e,t,n,i){return En.subVectors(n,t),qn.subVectors(e,t),En.cross(qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),En.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Fs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fs=!0),yn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return yn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;pr.subVectors(i,n),mr.subVectors(s,n),Ja.subVectors(e,n);const l=pr.dot(Ja),c=mr.dot(Ja);if(l<=0&&c<=0)return t.copy(n);Qa.subVectors(e,i);const u=pr.dot(Qa),h=mr.dot(Qa);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(pr,a);eo.subVectors(e,s);const m=pr.dot(eo),g=mr.dot(eo);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(mr,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Tc.subVectors(s,i),o=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(Tc,o);const d=1/(p+_+f);return a=_*d,o=f*d,t.copy(n).addScaledVector(pr,a).addScaledVector(mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function to(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=ld(e,1),t=zt(t,0,1),n=zt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=to(a,s,e+1/3),this.g=to(a,s,e),this.b=to(a,s,e-1/3)}return We.toWorkingColorSpace(this,i),this}setStyle(e,t=Tt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=Ou[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return We.fromWorkingColorSpace(Pt.copy(this),e),Math.round(zt(Pt.r*255,0,255))*65536+Math.round(zt(Pt.g*255,0,255))*256+Math.round(zt(Pt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(Pt.copy(this),t);const n=Pt.r,i=Pt.g,s=Pt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Tt){We.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,i=Pt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Bs);const n=Ha(hi.h,Bs.h,t),i=Ha(hi.s,Bs.s,t),s=Ha(hi.l,Bs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Xe;Xe.NAMES=Ou;let Td=0;class Ea extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=Rr,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=To,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yo&&(n.blendSrc=this.blendSrc),this.blendDst!==To&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ra&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class il extends Ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new B,zs=new $e;class Fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hc,this.updateRange={offset:0,count:-1},this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Fu extends Fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bu extends Fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Yi extends Fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bd=0;const on=new wt,no=new nn,_r=new B,$t=new Ts,Jr=new Ts,xt=new B;class sr extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lu(e)?Bu:Fu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Oe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return no.lookAt(e),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Yi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors($t.min,Jr.min),$t.expandByPoint(xt),xt.addVectors($t.max,Jr.max),$t.expandByPoint(xt)):($t.expandByPoint(Jr.min),$t.expandByPoint(Jr.max))}$t.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)xt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)xt.fromBufferAttribute(o,c),l&&(_r.fromBufferAttribute(e,c),xt.add(_r)),i=Math.max(i,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let A=0;A<o;A++)c[A]=new B,u[A]=new B;const h=new B,f=new B,m=new B,g=new $e,_=new $e,p=new $e,d=new B,E=new B;function x(A,z,X){h.fromArray(i,A*3),f.fromArray(i,z*3),m.fromArray(i,X*3),g.fromArray(a,A*2),_.fromArray(a,z*2),p.fromArray(a,X*2),f.sub(h),m.sub(h),_.sub(g),p.sub(g);const Y=1/(_.x*p.y-p.x*_.y);isFinite(Y)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(Y),E.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(Y),c[A].add(d),c[z].add(d),c[X].add(d),u[A].add(E),u[z].add(E),u[X].add(E))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let A=0,z=M.length;A<z;++A){const X=M[A],Y=X.start,C=X.count;for(let N=Y,W=Y+C;N<W;N+=3)x(n[N+0],n[N+1],n[N+2])}const T=new B,R=new B,b=new B,L=new B;function v(A){b.fromArray(s,A*3),L.copy(b);const z=c[A];T.copy(z),T.sub(b.multiplyScalar(b.dot(z))).normalize(),R.crossVectors(L,z);const Y=R.dot(u[A])<0?-1:1;l[A*4]=T.x,l[A*4+1]=T.y,l[A*4+2]=T.z,l[A*4+3]=Y}for(let A=0,z=M.length;A<z;++A){const X=M[A],Y=X.start,C=X.count;for(let N=Y,W=Y+C;N<W;N+=3)v(n[N+0]),v(n[N+1]),v(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[m++]}return new Fn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sr,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bc=new wt,Ii=new _d,Gs=new nl,Ac=new B,gr=new B,vr=new B,xr=new B,io=new B,Hs=new B,Vs=new $e,ks=new $e,Ws=new $e,wc=new B,Rc=new B,Cc=new B,Xs=new B,qs=new B;class ei extends nn{constructor(e=new sr,t=new il){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Hs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(io.fromBufferAttribute(h,e),a?Hs.addScaledVector(io,u):Hs.addScaledVector(io.sub(t),u))}t.add(Hs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(s),Ii.copy(e.ray).recast(e.near),!(Gs.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Gs,Ac)===null||Ii.origin.distanceToSquared(Ac)>(e.far-e.near)**2))&&(bc.copy(s).invert(),Ii.copy(e.ray).applyMatrix4(bc),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=a[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,T=x;M<T;M+=3){const R=o.getX(M),b=o.getX(M+1),L=o.getX(M+2);i=Ys(this,d,e,n,c,u,h,R,b,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const E=o.getX(p),x=o.getX(p+1),M=o.getX(p+2);i=Ys(this,a,e,n,c,u,h,E,x,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=a[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,T=x;M<T;M+=3){const R=M,b=M+1,L=M+2;i=Ys(this,d,e,n,c,u,h,R,b,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const E=p,x=p+1,M=p+2;i=Ys(this,a,e,n,c,u,h,E,x,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Ad(r,e,t,n,i,s,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===bi,o),l===null)return null;qs.copy(o),qs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(qs);return c<t.near||c>t.far?null:{distance:c,point:qs.clone(),object:r}}function Ys(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,gr),r.getVertexPosition(l,vr),r.getVertexPosition(c,xr);const u=Ad(r,e,t,n,gr,vr,xr,Xs);if(u){i&&(Vs.fromBufferAttribute(i,o),ks.fromBufferAttribute(i,l),Ws.fromBufferAttribute(i,c),u.uv=yn.getInterpolation(Xs,gr,vr,xr,Vs,ks,Ws,new $e)),s&&(Vs.fromBufferAttribute(s,o),ks.fromBufferAttribute(s,l),Ws.fromBufferAttribute(s,c),u.uv1=yn.getInterpolation(Xs,gr,vr,xr,Vs,ks,Ws,new $e),u.uv2=u.uv1),a&&(wc.fromBufferAttribute(a,o),Rc.fromBufferAttribute(a,l),Cc.fromBufferAttribute(a,c),u.normal=yn.getInterpolation(Xs,gr,vr,xr,wc,Rc,Cc,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new B,materialIndex:0};yn.getNormal(gr,vr,xr,h.normal),u.face=h}return u}class bs extends sr{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Yi(c,3)),this.setAttribute("normal",new Yi(u,3)),this.setAttribute("uv",new Yi(h,2));function g(_,p,d,E,x,M,T,R,b,L,v){const A=M/b,z=T/L,X=M/2,Y=T/2,C=R/2,N=b+1,W=L+1;let V=0,Z=0;const j=new B;for(let K=0;K<W;K++){const D=K*z-Y;for(let G=0;G<N;G++){const oe=G*A-X;j[_]=oe*E,j[p]=D*x,j[d]=C,c.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[d]=R>0?1:-1,u.push(j.x,j.y,j.z),h.push(G/b),h.push(1-K/L),V+=1}}for(let K=0;K<L;K++)for(let D=0;D<b;D++){const G=f+D+N*K,oe=f+D+N*(K+1),ae=f+(D+1)+N*(K+1),ce=f+(D+1)+N*K;l.push(G,oe,ce),l.push(oe,ae,ce),Z+=6}o.addGroup(m,Z,v),m+=Z,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ot(r){const e={};for(let t=0;t<r.length;t++){const n=Or(r[t]);for(const i in n)e[i]=n[i]}return e}function wd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function zu(r){return r.getRenderTarget()===null?r.outputColorSpace:We.workingColorSpace}const Rd={clone:Or,merge:Ot};var Cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends Ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cd,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=wd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Gu extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fn extends Gu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ga*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Sr=-90,Mr=1;class Ld extends nn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new fn(Sr,Mr,e,t);i.layers=this.layers,this.add(i);const s=new fn(Sr,Mr,e,t);s.layers=this.layers,this.add(s);const a=new fn(Sr,Mr,e,t);a.layers=this.layers,this.add(a);const o=new fn(Sr,Mr,e,t);o.layers=this.layers,this.add(o);const l=new fn(Sr,Mr,e,t);l.layers=this.layers,this.add(l);const c=new fn(Sr,Mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===la)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Hu extends Vt{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ur,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dd extends er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(rs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===qi?Tt:pn),this.texture=new Hu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new bs(5,5,5),s=new tr({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:vi});s.uniforms.tEquirect.value=t;const a=new ei(i,s),o=t.minFilter;return t.minFilter===cs&&(t.minFilter=hn),new Ld(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const ro=new B,Ud=new B,Id=new Oe;class Bi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ro.subVectors(n,t).cross(Ud.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ro),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Id.getNormalMatrix(e),i=this.coplanarPoint(ro).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new nl,Ks=new B;class Vu{constructor(e=new Bi,t=new Bi,n=new Bi,i=new Bi,s=new Bi,a=new Bi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],m=i[8],g=i[9],_=i[10],p=i[11],d=i[12],E=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,f-c,p-m,M-d).normalize(),n[1].setComponents(l+s,f+c,p+m,M+d).normalize(),n[2].setComponents(l+a,f+u,p+g,M+E).normalize(),n[3].setComponents(l-a,f-u,p-g,M-E).normalize(),n[4].setComponents(l-o,f-h,p-_,M-x).normalize(),t===Qn)n[5].setComponents(l+o,f+h,p+_,M+x).normalize();else if(t===la)n[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ks.x=i.normal.x>0?e.max.x:e.min.x,Ks.y=i.normal.y>0?e.max.y:e.min.y,Ks.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ku(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Nd(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,m=u.updateRange;r.bindBuffer(h,c),m.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class ya extends sr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,m=[],g=[],_=[],p=[];for(let d=0;d<u;d++){const E=d*f-a;for(let x=0;x<c;x++){const M=x*h-s;g.push(M,-E,0),_.push(0,0,1),p.push(x/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){const x=E+c*d,M=E+c*(d+1),T=E+1+c*(d+1),R=E+1+c*d;m.push(x,M,R),m.push(M,T,R)}this.setIndex(m),this.setAttribute("position",new Yi(g,3)),this.setAttribute("normal",new Yi(_,3)),this.setAttribute("uv",new Yi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.widthSegments,e.heightSegments)}}var Od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ip=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,up="gl_FragColor = linearToOutputTexel( gl_FragColor );",hp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ep=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ap=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Up=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ip=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Np=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,$p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Em=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Am=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Hm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ym=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,e_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,h_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Le={alphahash_fragment:Od,alphahash_pars_fragment:Fd,alphamap_fragment:Bd,alphamap_pars_fragment:zd,alphatest_fragment:Gd,alphatest_pars_fragment:Hd,aomap_fragment:Vd,aomap_pars_fragment:kd,begin_vertex:Wd,beginnormal_vertex:Xd,bsdfs:qd,iridescence_fragment:Yd,bumpmap_pars_fragment:Kd,clipping_planes_fragment:jd,clipping_planes_pars_fragment:Zd,clipping_planes_pars_vertex:$d,clipping_planes_vertex:Jd,color_fragment:Qd,color_pars_fragment:ep,color_pars_vertex:tp,color_vertex:np,common:ip,cube_uv_reflection_fragment:rp,defaultnormal_vertex:sp,displacementmap_pars_vertex:ap,displacementmap_vertex:op,emissivemap_fragment:lp,emissivemap_pars_fragment:cp,colorspace_fragment:up,colorspace_pars_fragment:hp,envmap_fragment:fp,envmap_common_pars_fragment:dp,envmap_pars_fragment:pp,envmap_pars_vertex:mp,envmap_physical_pars_fragment:wp,envmap_vertex:_p,fog_vertex:gp,fog_pars_vertex:vp,fog_fragment:xp,fog_pars_fragment:Sp,gradientmap_pars_fragment:Mp,lightmap_fragment:Ep,lightmap_pars_fragment:yp,lights_lambert_fragment:Tp,lights_lambert_pars_fragment:bp,lights_pars_begin:Ap,lights_toon_fragment:Rp,lights_toon_pars_fragment:Cp,lights_phong_fragment:Pp,lights_phong_pars_fragment:Lp,lights_physical_fragment:Dp,lights_physical_pars_fragment:Up,lights_fragment_begin:Ip,lights_fragment_maps:Np,lights_fragment_end:Op,logdepthbuf_fragment:Fp,logdepthbuf_pars_fragment:Bp,logdepthbuf_pars_vertex:zp,logdepthbuf_vertex:Gp,map_fragment:Hp,map_pars_fragment:Vp,map_particle_fragment:kp,map_particle_pars_fragment:Wp,metalnessmap_fragment:Xp,metalnessmap_pars_fragment:qp,morphcolor_vertex:Yp,morphnormal_vertex:Kp,morphtarget_pars_vertex:jp,morphtarget_vertex:Zp,normal_fragment_begin:$p,normal_fragment_maps:Jp,normal_pars_fragment:Qp,normal_pars_vertex:em,normal_vertex:tm,normalmap_pars_fragment:nm,clearcoat_normal_fragment_begin:im,clearcoat_normal_fragment_maps:rm,clearcoat_pars_fragment:sm,iridescence_pars_fragment:am,opaque_fragment:om,packing:lm,premultiplied_alpha_fragment:cm,project_vertex:um,dithering_fragment:hm,dithering_pars_fragment:fm,roughnessmap_fragment:dm,roughnessmap_pars_fragment:pm,shadowmap_pars_fragment:mm,shadowmap_pars_vertex:_m,shadowmap_vertex:gm,shadowmask_pars_fragment:vm,skinbase_vertex:xm,skinning_pars_vertex:Sm,skinning_vertex:Mm,skinnormal_vertex:Em,specularmap_fragment:ym,specularmap_pars_fragment:Tm,tonemapping_fragment:bm,tonemapping_pars_fragment:Am,transmission_fragment:wm,transmission_pars_fragment:Rm,uv_pars_fragment:Cm,uv_pars_vertex:Pm,uv_vertex:Lm,worldpos_vertex:Dm,background_vert:Um,background_frag:Im,backgroundCube_vert:Nm,backgroundCube_frag:Om,cube_vert:Fm,cube_frag:Bm,depth_vert:zm,depth_frag:Gm,distanceRGBA_vert:Hm,distanceRGBA_frag:Vm,equirect_vert:km,equirect_frag:Wm,linedashed_vert:Xm,linedashed_frag:qm,meshbasic_vert:Ym,meshbasic_frag:Km,meshlambert_vert:jm,meshlambert_frag:Zm,meshmatcap_vert:$m,meshmatcap_frag:Jm,meshnormal_vert:Qm,meshnormal_frag:e_,meshphong_vert:t_,meshphong_frag:n_,meshphysical_vert:i_,meshphysical_frag:r_,meshtoon_vert:s_,meshtoon_frag:a_,points_vert:o_,points_frag:l_,shadow_vert:c_,shadow_frag:u_,sprite_vert:h_,sprite_frag:f_},se={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Rn={basic:{uniforms:Ot([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Ot([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Ot([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Ot([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Ot([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Ot([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Ot([se.points,se.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Ot([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Ot([se.common,se.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Ot([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Ot([se.sprite,se.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Ot([se.common,se.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Ot([se.lights,se.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Rn.physical={uniforms:Ot([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const js={r:0,b:0,g:0};function d_(r,e,t,n,i,s,a){const o=new Xe(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function g(p,d){let E=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),E=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||E)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===xa)?(u===void 0&&(u=new ei(new bs(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:Or(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=We.getTransfer(x.colorSpace)!==Qe,(h!==x||f!==x.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,m=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ei(new ya(2,2),new tr({name:"BackgroundMaterial",uniforms:Or(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=We.getTransfer(x.colorSpace)!==Qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,d){p.getRGB(js,zu(r)),n.buffers.color.setClear(js.r,js.g,js.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function p_(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(C,N,W,V,Z){let j=!1;if(a){const K=_(V,W,N);c!==K&&(c=K,m(c.object)),j=d(C,V,W,Z),j&&E(C,V,W,Z)}else{const K=N.wireframe===!0;(c.geometry!==V.id||c.program!==W.id||c.wireframe!==K)&&(c.geometry=V.id,c.program=W.id,c.wireframe=K,j=!0)}Z!==null&&t.update(Z,r.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,L(C,N,W,V),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(C){return n.isWebGL2?r.bindVertexArray(C):s.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?r.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function _(C,N,W){const V=W.wireframe===!0;let Z=o[C.id];Z===void 0&&(Z={},o[C.id]=Z);let j=Z[N.id];j===void 0&&(j={},Z[N.id]=j);let K=j[V];return K===void 0&&(K=p(f()),j[V]=K),K}function p(C){const N=[],W=[],V=[];for(let Z=0;Z<i;Z++)N[Z]=0,W[Z]=0,V[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:V,object:C,attributes:{},index:null}}function d(C,N,W,V){const Z=c.attributes,j=N.attributes;let K=0;const D=W.getAttributes();for(const G in D)if(D[G].location>=0){const ae=Z[G];let ce=j[G];if(ce===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),ae===void 0||ae.attribute!==ce||ce&&ae.data!==ce.data)return!0;K++}return c.attributesNum!==K||c.index!==V}function E(C,N,W,V){const Z={},j=N.attributes;let K=0;const D=W.getAttributes();for(const G in D)if(D[G].location>=0){let ae=j[G];ae===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor));const ce={};ce.attribute=ae,ae&&ae.data&&(ce.data=ae.data),Z[G]=ce,K++}c.attributes=Z,c.attributesNum=K,c.index=V}function x(){const C=c.newAttributes;for(let N=0,W=C.length;N<W;N++)C[N]=0}function M(C){T(C,0)}function T(C,N){const W=c.newAttributes,V=c.enabledAttributes,Z=c.attributeDivisors;W[C]=1,V[C]===0&&(r.enableVertexAttribArray(C),V[C]=1),Z[C]!==N&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,N),Z[C]=N)}function R(){const C=c.newAttributes,N=c.enabledAttributes;for(let W=0,V=N.length;W<V;W++)N[W]!==C[W]&&(r.disableVertexAttribArray(W),N[W]=0)}function b(C,N,W,V,Z,j,K){K===!0?r.vertexAttribIPointer(C,N,W,Z,j):r.vertexAttribPointer(C,N,W,V,Z,j)}function L(C,N,W,V){if(n.isWebGL2===!1&&(C.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const Z=V.attributes,j=W.getAttributes(),K=N.defaultAttributeValues;for(const D in j){const G=j[D];if(G.location>=0){let oe=Z[D];if(oe===void 0&&(D==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),D==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor)),oe!==void 0){const ae=oe.normalized,ce=oe.itemSize,Se=t.get(oe);if(Se===void 0)continue;const Be=Se.buffer,be=Se.type,Pe=Se.bytesPerElement,it=n.isWebGL2===!0&&(be===r.INT||be===r.UNSIGNED_INT||oe.gpuType===Tu);if(oe.isInterleavedBufferAttribute){const Ue=oe.data,I=Ue.stride,Yt=oe.offset;if(Ue.isInstancedInterleavedBuffer){for(let _e=0;_e<G.locationSize;_e++)T(G.location+_e,Ue.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let _e=0;_e<G.locationSize;_e++)M(G.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let _e=0;_e<G.locationSize;_e++)b(G.location+_e,ce/G.locationSize,be,ae,I*Pe,(Yt+ce/G.locationSize*_e)*Pe,it)}else{if(oe.isInstancedBufferAttribute){for(let Ue=0;Ue<G.locationSize;Ue++)T(G.location+Ue,oe.meshPerAttribute);C.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ue=0;Ue<G.locationSize;Ue++)M(G.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let Ue=0;Ue<G.locationSize;Ue++)b(G.location+Ue,ce/G.locationSize,be,ae,ce*Pe,ce/G.locationSize*Ue*Pe,it)}}else if(K!==void 0){const ae=K[D];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(G.location,ae);break;case 3:r.vertexAttrib3fv(G.location,ae);break;case 4:r.vertexAttrib4fv(G.location,ae);break;default:r.vertexAttrib1fv(G.location,ae)}}}}R()}function v(){X();for(const C in o){const N=o[C];for(const W in N){const V=N[W];for(const Z in V)g(V[Z].object),delete V[Z];delete N[W]}delete o[C]}}function A(C){if(o[C.id]===void 0)return;const N=o[C.id];for(const W in N){const V=N[W];for(const Z in V)g(V[Z].object),delete V[Z];delete N[W]}delete o[C.id]}function z(C){for(const N in o){const W=o[N];if(W[C.id]===void 0)continue;const V=W[C.id];for(const Z in V)g(V[Z].object),delete V[Z];delete W[C.id]}}function X(){Y(),u=!0,c!==l&&(c=l,m(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:Y,dispose:v,releaseStatesOfGeometry:A,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:M,disableUnusedAttributes:R}}function m_(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function __(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,M=a||e.has("OES_texture_float"),T=x&&M,R=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:T,maxSamples:R}}function g_(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Bi,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||i;return i=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,d=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const E=s?0:n,x=E*4;let M=d.clippingState||null;l.value=M,M=u(g,f,x,m);for(let T=0;T!==x;++T)M[T]=t[T];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,M=m;x!==_;++x,M+=4)a.copy(h[x]).applyMatrix4(E,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function v_(r){let e=new WeakMap;function t(a,o){return o===bo?a.mapping=Ur:o===Ao&&(a.mapping=Ir),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===bo||o===Ao)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Dd(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class x_ extends Gu{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Tr=4,Pc=[.125,.215,.35,.446,.526,.582],Vi=20,so=new x_,Lc=new Xe;let ao=null,oo=0,lo=0;const zi=(1+Math.sqrt(5))/2,Er=1/zi,Dc=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,zi,Er),new B(0,zi,-Er),new B(Er,0,zi),new B(-Er,0,zi),new B(zi,Er,0),new B(-zi,Er,0)];class Uc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ao=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ao,oo,lo),e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ur||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ao=this._renderer.getRenderTarget(),oo=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:us,format:bn,colorSpace:ri,depthBuffer:!1},i=Ic(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ic(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S_(s)),this._blurMaterial=M_(s,e,t)}return i}_compileMaterial(e){const t=new ei(this._lodPlanes[0],e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,n,i){const o=new fn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Lc),u.toneMapping=xi,u.autoClear=!1;const m=new il({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new ei(new bs,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Lc),_=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):E===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;Zs(i,E*x,d>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ur||e.mapping===Ir;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new ei(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Zs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,so)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Dc[(i-1)%Dc.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ei(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Vi-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Vi;p>Vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vi}`);const d=[];let E=0;for(let b=0;b<Vi;++b){const L=b/_,v=Math.exp(-L*L/2);d.push(v),b===0?E+=v:b<p&&(E+=2*v)}for(let b=0;b<d.length;b++)d[b]=d[b]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const M=this._sizeLods[i],T=3*M*(i>x-Tr?i-x+Tr:0),R=4*(this._cubeSize-M);Zs(t,T,R,3*M,2*M),l.setRenderTarget(t),l.render(h,so)}}function S_(r){const e=[],t=[],n=[];let i=r;const s=r-Tr+1+Pc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Tr?l=Pc[a-r+Tr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,d=1,E=new Float32Array(_*g*m),x=new Float32Array(p*g*m),M=new Float32Array(d*g*m);for(let R=0;R<m;R++){const b=R%3*2/3-1,L=R>2?0:-1,v=[b,L,0,b+2/3,L,0,b+2/3,L+1,0,b,L,0,b+2/3,L+1,0,b,L+1,0];E.set(v,_*g*R),x.set(f,p*g*R);const A=[R,R,R,R,R,R];M.set(A,d*g*R)}const T=new sr;T.setAttribute("position",new Fn(E,_)),T.setAttribute("uv",new Fn(x,p)),T.setAttribute("faceIndex",new Fn(M,d)),e.push(T),i>Tr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ic(r,e,t){const n=new er(r,e,t);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function M_(r,e,t){const n=new Float32Array(Vi),i=new B(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Nc(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Oc(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function rl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function E_(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===bo||l===Ao,u=l===Ur||l===Ir;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Uc(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Uc(r));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function y_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function T_(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}f.removeEventListener("dispose",a),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],r.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let x=0,M=E.length;x<M;x+=3){const T=E[x+0],R=E[x+1],b=E[x+2];f.push(T,R,R,b,b,T)}}else if(g!==void 0){const E=g.array;_=g.version;for(let x=0,M=E.length/3-1;x<M;x+=3){const T=x+0,R=x+1,b=x+2;f.push(T,R,R,b,b,T)}}else return;const p=new(Lu(f)?Bu:Fu)(f,1);p.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function b_(r,e,t,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,m){r.drawElements(s,m,o,f*l),t.update(m,s,1)}function h(f,m,g){if(g===0)return;let _,p;if(i)_=r,p="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,o,f*l,g),t.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function A_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function w_(r,e){return r[0]-e[0]}function R_(r,e){return Math.abs(e[1])-Math.abs(r[1])}function C_(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new At,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let N=function(){Y.dispose(),s.delete(u),u.removeEventListener("dispose",N)};var m=N;p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let v=0;x===!0&&(v=1),M===!0&&(v=2),T===!0&&(v=3);let A=u.attributes.position.count*v,z=1;A>e.maxTextureSize&&(z=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const X=new Float32Array(A*z*4*_),Y=new Iu(X,A,z,_);Y.type=pi,Y.needsUpdate=!0;const C=v*4;for(let W=0;W<_;W++){const V=R[W],Z=b[W],j=L[W],K=A*z*4*W;for(let D=0;D<V.count;D++){const G=D*C;x===!0&&(a.fromBufferAttribute(V,D),X[K+G+0]=a.x,X[K+G+1]=a.y,X[K+G+2]=a.z,X[K+G+3]=0),M===!0&&(a.fromBufferAttribute(Z,D),X[K+G+4]=a.x,X[K+G+5]=a.y,X[K+G+6]=a.z,X[K+G+7]=0),T===!0&&(a.fromBufferAttribute(j,D),X[K+G+8]=a.x,X[K+G+9]=a.y,X[K+G+10]=a.z,X[K+G+11]=j.itemSize===4?a.w:1)}}p={count:_,texture:Y,size:new $e(A,z)},s.set(u,p),u.addEventListener("dispose",N)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const E=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(r,"morphTargetBaseInfluence",E),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[u.id]=_}for(let M=0;M<g;M++){const T=_[M];T[0]=M,T[1]=f[M]}_.sort(R_);for(let M=0;M<8;M++)M<g&&_[M][1]?(o[M][0]=_[M][0],o[M][1]=_[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(w_);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let E=0;for(let M=0;M<8;M++){const T=o[M],R=T[0],b=T[1];R!==Number.MAX_SAFE_INTEGER&&b?(p&&u.getAttribute("morphTarget"+M)!==p[R]&&u.setAttribute("morphTarget"+M,p[R]),d&&u.getAttribute("morphNormal"+M)!==d[R]&&u.setAttribute("morphNormal"+M,d[R]),i[M]=b,E+=b):(p&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),d&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const x=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function P_(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Wu=new Vt,Xu=new Iu,qu=new pd,Yu=new Hu,Fc=[],Bc=[],zc=new Float32Array(16),Gc=new Float32Array(9),Hc=new Float32Array(4);function Wr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Fc[i];if(s===void 0&&(s=new Float32Array(i),Fc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function mt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function _t(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ta(r,e){let t=Bc[e];t===void 0&&(t=new Int32Array(e),Bc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function L_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function D_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;r.uniform2fv(this.addr,e),_t(t,e)}}function U_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;r.uniform3fv(this.addr,e),_t(t,e)}}function I_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;r.uniform4fv(this.addr,e),_t(t,e)}}function N_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;Hc.set(n),r.uniformMatrix2fv(this.addr,!1,Hc),_t(t,n)}}function O_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;Gc.set(n),r.uniformMatrix3fv(this.addr,!1,Gc),_t(t,n)}}function F_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;zc.set(n),r.uniformMatrix4fv(this.addr,!1,zc),_t(t,n)}}function B_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function z_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;r.uniform2iv(this.addr,e),_t(t,e)}}function G_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;r.uniform3iv(this.addr,e),_t(t,e)}}function H_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;r.uniform4iv(this.addr,e),_t(t,e)}}function V_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function k_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;r.uniform2uiv(this.addr,e),_t(t,e)}}function W_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;r.uniform3uiv(this.addr,e),_t(t,e)}}function X_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;r.uniform4uiv(this.addr,e),_t(t,e)}}function q_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Wu,i)}function Y_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||qu,i)}function K_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Yu,i)}function j_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xu,i)}function Z_(r){switch(r){case 5126:return L_;case 35664:return D_;case 35665:return U_;case 35666:return I_;case 35674:return N_;case 35675:return O_;case 35676:return F_;case 5124:case 35670:return B_;case 35667:case 35671:return z_;case 35668:case 35672:return G_;case 35669:case 35673:return H_;case 5125:return V_;case 36294:return k_;case 36295:return W_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return j_}}function $_(r,e){r.uniform1fv(this.addr,e)}function J_(r,e){const t=Wr(e,this.size,2);r.uniform2fv(this.addr,t)}function Q_(r,e){const t=Wr(e,this.size,3);r.uniform3fv(this.addr,t)}function eg(r,e){const t=Wr(e,this.size,4);r.uniform4fv(this.addr,t)}function tg(r,e){const t=Wr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ng(r,e){const t=Wr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ig(r,e){const t=Wr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function rg(r,e){r.uniform1iv(this.addr,e)}function sg(r,e){r.uniform2iv(this.addr,e)}function ag(r,e){r.uniform3iv(this.addr,e)}function og(r,e){r.uniform4iv(this.addr,e)}function lg(r,e){r.uniform1uiv(this.addr,e)}function cg(r,e){r.uniform2uiv(this.addr,e)}function ug(r,e){r.uniform3uiv(this.addr,e)}function hg(r,e){r.uniform4uiv(this.addr,e)}function fg(r,e,t){const n=this.cache,i=e.length,s=Ta(t,i);mt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Wu,s[a])}function dg(r,e,t){const n=this.cache,i=e.length,s=Ta(t,i);mt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||qu,s[a])}function pg(r,e,t){const n=this.cache,i=e.length,s=Ta(t,i);mt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Yu,s[a])}function mg(r,e,t){const n=this.cache,i=e.length,s=Ta(t,i);mt(n,s)||(r.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Xu,s[a])}function _g(r){switch(r){case 5126:return $_;case 35664:return J_;case 35665:return Q_;case 35666:return eg;case 35674:return tg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return rg;case 35667:case 35671:return sg;case 35668:case 35672:return ag;case 35669:case 35673:return og;case 5125:return lg;case 36294:return cg;case 36295:return ug;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}class gg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Z_(t.type)}}class vg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=_g(t.type)}}class xg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const co=/(\w+)(\])?(\[|\.)?/g;function Vc(r,e){r.seq.push(e),r.map[e.id]=e}function Sg(r,e,t){const n=r.name,i=n.length;for(co.lastIndex=0;;){const s=co.exec(n),a=co.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Vc(t,c===void 0?new gg(o,r,e):new vg(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new xg(o),Vc(t,h)),t=h}}}class Qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Sg(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function kc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Mg=37297;let Eg=0;function yg(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Tg(r){const e=We.getPrimaries(We.workingColorSpace),t=We.getPrimaries(r);let n;switch(e===t?n="":e===oa&&t===aa?n="LinearDisplayP3ToLinearSRGB":e===aa&&t===oa&&(n="LinearSRGBToLinearDisplayP3"),r){case ri:case Sa:return[n,"LinearTransferOETF"];case Tt:case tl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Wc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+yg(r.getShaderSource(e),a)}else return i}function bg(r,e){const t=Tg(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ag(r,e){let t;switch(e){case Nf:t="Linear";break;case Of:t="Reinhard";break;case Ff:t="OptimizedCineon";break;case Bf:t="ACESFilmic";break;case zf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wg(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(es).join(`
`)}function Rg(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cg(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function es(r){return r!==""}function Xc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(r){return r.replace(Pg,Dg)}const Lg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Dg(r,e){let t=Le[e];if(t===void 0){const n=Lg.get(e);if(n!==void 0)t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Do(t)}const Ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(r){return r.replace(Ug,Ig)}function Ig(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Kc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ng(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Mu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===cf?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function Og(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ur:case Ir:e="ENVMAP_TYPE_CUBE";break;case xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ir:e="ENVMAP_MODE_REFRACTION";break}return e}function Bg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Eu:e="ENVMAP_BLENDING_MULTIPLY";break;case Uf:e="ENVMAP_BLENDING_MIX";break;case If:e="ENVMAP_BLENDING_ADD";break}return e}function zg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Gg(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ng(t),c=Og(t),u=Fg(t),h=Bg(t),f=zg(t),m=t.isWebGL2?"":wg(t),g=Rg(s),_=i.createProgram();let p,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(es).join(`
`),p.length>0&&(p+=`
`),d=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(es).join(`
`),d.length>0&&(d+=`
`)):(p=[Kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),d=[m,Kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Le.tonemapping_pars_fragment:"",t.toneMapping!==xi?Ag("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,bg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(es).join(`
`)),a=Do(a),a=Xc(a,t),a=qc(a,t),o=Do(o),o=Xc(o,t),o=qc(o,t),a=Yc(a),o=Yc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=E+p+a,M=E+d+o,T=kc(i,i.VERTEX_SHADER,x),R=kc(i,i.FRAGMENT_SHADER,M);i.attachShader(_,T),i.attachShader(_,R),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(z){if(r.debug.checkShaderErrors){const X=i.getProgramInfoLog(_).trim(),Y=i.getShaderInfoLog(T).trim(),C=i.getShaderInfoLog(R).trim();let N=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(N=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,T,R);else{const V=Wc(i,T,"vertex"),Z=Wc(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+V+`
`+Z)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Y===""||C==="")&&(W=!1);W&&(z.diagnostics={runnable:N,programLog:X,vertexShader:{log:Y,prefix:p},fragmentShader:{log:C,prefix:d}})}i.deleteShader(T),i.deleteShader(R),L=new Qs(i,_),v=Cg(i,_)}let L;this.getUniforms=function(){return L===void 0&&b(this),L};let v;this.getAttributes=function(){return v===void 0&&b(this),v};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(_,Mg)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Eg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=R,this}let Hg=0;class Vg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kg(e),t.set(e,n)),n}}class kg{constructor(e){this.id=Hg++,this.code=e,this.usedTimes=0}}function Wg(r,e,t,n,i,s,a){const o=new Nu,l=new Vg,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function p(v,A,z,X,Y){const C=X.fog,N=Y.geometry,W=v.isMeshStandardMaterial?X.environment:null,V=(v.isMeshStandardMaterial?t:e).get(v.envMap||W),Z=V&&V.mapping===xa?V.image.height:null,j=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,D=K!==void 0?K.length:0;let G=0;N.morphAttributes.position!==void 0&&(G=1),N.morphAttributes.normal!==void 0&&(G=2),N.morphAttributes.color!==void 0&&(G=3);let oe,ae,ce,Se;if(j){const ut=Rn[j];oe=ut.vertexShader,ae=ut.fragmentShader}else oe=v.vertexShader,ae=v.fragmentShader,l.update(v),ce=l.getVertexShaderID(v),Se=l.getFragmentShaderID(v);const Be=r.getRenderTarget(),be=Y.isInstancedMesh===!0,Pe=!!v.map,it=!!v.matcap,Ue=!!V,I=!!v.aoMap,Yt=!!v.lightMap,_e=!!v.bumpMap,Ae=!!v.normalMap,Te=!!v.displacementMap,rt=!!v.emissiveMap,Ie=!!v.metalnessMap,Ne=!!v.roughnessMap,qe=v.anisotropy>0,gt=v.clearcoat>0,Rt=v.iridescence>0,w=v.sheen>0,S=v.transmission>0,O=qe&&!!v.anisotropyMap,ee=gt&&!!v.clearcoatMap,J=gt&&!!v.clearcoatNormalMap,te=gt&&!!v.clearcoatRoughnessMap,pe=Rt&&!!v.iridescenceMap,re=Rt&&!!v.iridescenceThicknessMap,he=w&&!!v.sheenColorMap,Me=w&&!!v.sheenRoughnessMap,He=!!v.specularMap,Q=!!v.specularColorMap,ke=!!v.specularIntensityMap,we=S&&!!v.transmissionMap,Ee=S&&!!v.thicknessMap,ge=!!v.gradientMap,de=!!v.alphaMap,Ge=v.alphaTest>0,P=!!v.alphaHash,le=!!v.extensions,ne=!!N.attributes.uv1,q=!!N.attributes.uv2,ie=!!N.attributes.uv3;let ve=xi;return v.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(ve=r.toneMapping),{isWebGL2:u,shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:oe,fragmentShader:ae,defines:v.defines,customVertexShaderID:ce,customFragmentShaderID:Se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:be,instancingColor:be&&Y.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Be===null?r.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:ri,map:Pe,matcap:it,envMap:Ue,envMapMode:Ue&&V.mapping,envMapCubeUVHeight:Z,aoMap:I,lightMap:Yt,bumpMap:_e,normalMap:Ae,displacementMap:f&&Te,emissiveMap:rt,normalMapObjectSpace:Ae&&v.normalMapType===Qf,normalMapTangentSpace:Ae&&v.normalMapType===Jf,metalnessMap:Ie,roughnessMap:Ne,anisotropy:qe,anisotropyMap:O,clearcoat:gt,clearcoatMap:ee,clearcoatNormalMap:J,clearcoatRoughnessMap:te,iridescence:Rt,iridescenceMap:pe,iridescenceThicknessMap:re,sheen:w,sheenColorMap:he,sheenRoughnessMap:Me,specularMap:He,specularColorMap:Q,specularIntensityMap:ke,transmission:S,transmissionMap:we,thicknessMap:Ee,gradientMap:ge,opaque:v.transparent===!1&&v.blending===Rr,alphaMap:de,alphaTest:Ge,alphaHash:P,combine:v.combine,mapUv:Pe&&_(v.map.channel),aoMapUv:I&&_(v.aoMap.channel),lightMapUv:Yt&&_(v.lightMap.channel),bumpMapUv:_e&&_(v.bumpMap.channel),normalMapUv:Ae&&_(v.normalMap.channel),displacementMapUv:Te&&_(v.displacementMap.channel),emissiveMapUv:rt&&_(v.emissiveMap.channel),metalnessMapUv:Ie&&_(v.metalnessMap.channel),roughnessMapUv:Ne&&_(v.roughnessMap.channel),anisotropyMapUv:O&&_(v.anisotropyMap.channel),clearcoatMapUv:ee&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:J&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(v.sheenRoughnessMap.channel),specularMapUv:He&&_(v.specularMap.channel),specularColorMapUv:Q&&_(v.specularColorMap.channel),specularIntensityMapUv:ke&&_(v.specularIntensityMap.channel),transmissionMapUv:we&&_(v.transmissionMap.channel),thicknessMapUv:Ee&&_(v.thicknessMap.channel),alphaMapUv:de&&_(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ae||qe),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:ne,vertexUv2s:q,vertexUv3s:ie,pointsUvs:Y.isPoints===!0&&!!N.attributes.uv&&(Pe||de),fog:!!C,useFog:v.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:G,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:ve,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Pe&&v.map.isVideoTexture===!0&&We.getTransfer(v.map.colorSpace)===Qe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Pn,flipSided:v.side===Ht,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:le&&v.extensions.derivatives===!0,extensionFragDepth:le&&v.extensions.fragDepth===!0,extensionDrawBuffers:le&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const z in v.defines)A.push(z),A.push(v.defines[z]);return v.isRawShaderMaterial===!1&&(E(A,v),x(A,v),A.push(r.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function E(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function x(v,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function M(v){const A=g[v.type];let z;if(A){const X=Rn[A];z=Rd.clone(X.uniforms)}else z=v.uniforms;return z}function T(v,A){let z;for(let X=0,Y=c.length;X<Y;X++){const C=c[X];if(C.cacheKey===A){z=C,++z.usedTimes;break}}return z===void 0&&(z=new Gg(r,A,v,s),c.push(z)),z}function R(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),v.destroy()}}function b(v){l.remove(v)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:T,releaseProgram:R,releaseShaderCache:b,programs:c,dispose:L}}function Xg(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function qg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function jc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Zc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,m,g,_,p){let d=r[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},r[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=p),e++,d}function o(h,f,m,g,_,p){const d=a(h,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):t.push(d)}function l(h,f,m,g,_,p){const d=a(h,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||qg),n.length>1&&n.sort(f||jc),i.length>1&&i.sort(f||jc)}function u(){for(let h=e,f=r.length;h<f;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Yg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Zc,r.set(n,[a])):i>=s.length?(a=new Zc,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Kg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Xe};break;case"SpotLight":t={position:new B,direction:new B,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function jg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Zg=0;function $g(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Jg(r,e){const t=new Kg,n=jg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const s=new B,a=new wt,o=new wt;function l(u,h){let f=0,m=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let _=0,p=0,d=0,E=0,x=0,M=0,T=0,R=0,b=0,L=0,v=0;u.sort($g);const A=h===!0?Math.PI:1;for(let X=0,Y=u.length;X<Y;X++){const C=u[X],N=C.color,W=C.intensity,V=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=N.r*W*A,m+=N.g*W*A,g+=N.b*W*A;else if(C.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(C.sh.coefficients[j],W);v++}else if(C.isDirectionalLight){const j=t.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity*A),C.castShadow){const K=C.shadow,D=n.get(C);D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.directionalShadow[_]=D,i.directionalShadowMap[_]=Z,i.directionalShadowMatrix[_]=C.shadow.matrix,M++}i.directional[_]=j,_++}else if(C.isSpotLight){const j=t.get(C);j.position.setFromMatrixPosition(C.matrixWorld),j.color.copy(N).multiplyScalar(W*A),j.distance=V,j.coneCos=Math.cos(C.angle),j.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),j.decay=C.decay,i.spot[d]=j;const K=C.shadow;if(C.map&&(i.spotLightMap[b]=C.map,b++,K.updateMatrices(C),C.castShadow&&L++),i.spotLightMatrix[d]=K.matrix,C.castShadow){const D=n.get(C);D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.spotShadow[d]=D,i.spotShadowMap[d]=Z,R++}d++}else if(C.isRectAreaLight){const j=t.get(C);j.color.copy(N).multiplyScalar(W),j.halfWidth.set(C.width*.5,0,0),j.halfHeight.set(0,C.height*.5,0),i.rectArea[E]=j,E++}else if(C.isPointLight){const j=t.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity*A),j.distance=C.distance,j.decay=C.decay,C.castShadow){const K=C.shadow,D=n.get(C);D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,D.shadowCameraNear=K.camera.near,D.shadowCameraFar=K.camera.far,i.pointShadow[p]=D,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=C.shadow.matrix,T++}i.point[p]=j,p++}else if(C.isHemisphereLight){const j=t.get(C);j.skyColor.copy(C.color).multiplyScalar(W*A),j.groundColor.copy(C.groundColor).multiplyScalar(W*A),i.hemi[x]=j,x++}}E>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const z=i.hash;(z.directionalLength!==_||z.pointLength!==p||z.spotLength!==d||z.rectAreaLength!==E||z.hemiLength!==x||z.numDirectionalShadows!==M||z.numPointShadows!==T||z.numSpotShadows!==R||z.numSpotMaps!==b||z.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=E,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=R+b-L,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=v,z.directionalLength=_,z.pointLength=p,z.spotLength=d,z.rectAreaLength=E,z.hemiLength=x,z.numDirectionalShadows=M,z.numPointShadows=T,z.numSpotShadows=R,z.numSpotMaps=b,z.numLightProbes=v,i.version=Zg++)}function c(u,h){let f=0,m=0,g=0,_=0,p=0;const d=h.matrixWorldInverse;for(let E=0,x=u.length;E<x;E++){const M=u[E];if(M.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),f++}else if(M.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),g++}else if(M.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),o.identity(),a.copy(M.matrixWorld),a.premultiply(d),o.extractRotation(a),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const T=i.point[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){const T=i.hemi[p];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:i}}function $c(r,e){const t=new Jg(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Qg(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new $c(r,e),t.set(s,[l])):a>=o.length?(l=new $c(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class e0 extends Ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t0 extends Ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const n0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function r0(r,e,t){let n=new Vu;const i=new $e,s=new $e,a=new At,o=new e0({depthPacking:$f}),l=new t0,c={},u=t.maxTextureSize,h={[bi]:Ht,[Ht]:bi,[Pn]:Pn},f=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:n0,fragmentShader:i0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new sr;g.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ei(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let d=this.type;this.render=function(T,R,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const L=r.getRenderTarget(),v=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),z=r.state;z.setBlending(vi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const X=d!==Kn&&this.type===Kn,Y=d===Kn&&this.type!==Kn;for(let C=0,N=T.length;C<N;C++){const W=T[C],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const Z=V.getFrameExtents();if(i.multiply(Z),s.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Z.x),i.x=s.x*Z.x,V.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Z.y),i.y=s.y*Z.y,V.mapSize.y=s.y)),V.map===null||X===!0||Y===!0){const K=this.type!==Kn?{minFilter:Ft,magFilter:Ft}:{};V.map!==null&&V.map.dispose(),V.map=new er(i.x,i.y,K),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const j=V.getViewportCount();for(let K=0;K<j;K++){const D=V.getViewport(K);a.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),z.viewport(a),V.updateMatrices(W,K),n=V.getFrustum(),M(R,b,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===Kn&&E(V,b),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,r.setRenderTarget(L,v,A)};function E(T,R){const b=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new er(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(R,null,b,f,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(R,null,b,m,_,null)}function x(T,R,b,L){let v=null;const A=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)v=A;else if(v=b.isPointLight===!0?l:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=v.uuid,X=R.uuid;let Y=c[z];Y===void 0&&(Y={},c[z]=Y);let C=Y[X];C===void 0&&(C=v.clone(),Y[X]=C),v=C}if(v.visible=R.visible,v.wireframe=R.wireframe,L===Kn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:h[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,b.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const z=r.properties.get(v);z.light=b}return v}function M(T,R,b,L,v){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const X=e.update(T),Y=T.material;if(Array.isArray(Y)){const C=X.groups;for(let N=0,W=C.length;N<W;N++){const V=C[N],Z=Y[V.materialIndex];if(Z&&Z.visible){const j=x(T,Z,L,v);r.renderBufferDirect(b,null,X,j,T,V)}}}else if(Y.visible){const C=x(T,Y,L,v);r.renderBufferDirect(b,null,X,C,T,null)}}const z=T.children;for(let X=0,Y=z.length;X<Y;X++)M(z[X],R,b,L,v)}}function s0(r,e,t){const n=t.isWebGL2;function i(){let P=!1;const le=new At;let ne=null;const q=new At(0,0,0,0);return{setMask:function(ie){ne!==ie&&!P&&(r.colorMask(ie,ie,ie,ie),ne=ie)},setLocked:function(ie){P=ie},setClear:function(ie,ve,Ve,ut,an){an===!0&&(ie*=ut,ve*=ut,Ve*=ut),le.set(ie,ve,Ve,ut),q.equals(le)===!1&&(r.clearColor(ie,ve,Ve,ut),q.copy(le))},reset:function(){P=!1,ne=null,q.set(-1,0,0,0)}}}function s(){let P=!1,le=null,ne=null,q=null;return{setTest:function(ie){ie?Pe(r.DEPTH_TEST):it(r.DEPTH_TEST)},setMask:function(ie){le!==ie&&!P&&(r.depthMask(ie),le=ie)},setFunc:function(ie){if(ne!==ie){switch(ie){case Af:r.depthFunc(r.NEVER);break;case wf:r.depthFunc(r.ALWAYS);break;case Rf:r.depthFunc(r.LESS);break;case ra:r.depthFunc(r.LEQUAL);break;case Cf:r.depthFunc(r.EQUAL);break;case Pf:r.depthFunc(r.GEQUAL);break;case Lf:r.depthFunc(r.GREATER);break;case Df:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ne=ie}},setLocked:function(ie){P=ie},setClear:function(ie){q!==ie&&(r.clearDepth(ie),q=ie)},reset:function(){P=!1,le=null,ne=null,q=null}}}function a(){let P=!1,le=null,ne=null,q=null,ie=null,ve=null,Ve=null,ut=null,an=null;return{setTest:function(Je){P||(Je?Pe(r.STENCIL_TEST):it(r.STENCIL_TEST))},setMask:function(Je){le!==Je&&!P&&(r.stencilMask(Je),le=Je)},setFunc:function(Je,It,wn){(ne!==Je||q!==It||ie!==wn)&&(r.stencilFunc(Je,It,wn),ne=Je,q=It,ie=wn)},setOp:function(Je,It,wn){(ve!==Je||Ve!==It||ut!==wn)&&(r.stencilOp(Je,It,wn),ve=Je,Ve=It,ut=wn)},setLocked:function(Je){P=Je},setClear:function(Je){an!==Je&&(r.clearStencil(Je),an=Je)},reset:function(){P=!1,le=null,ne=null,q=null,ie=null,ve=null,Ve=null,ut=null,an=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,d=!1,E=null,x=null,M=null,T=null,R=null,b=null,L=null,v=new Xe(0,0,0),A=0,z=!1,X=null,Y=null,C=null,N=null,W=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,j=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(K)[1]),Z=j>=1):K.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Z=j>=2);let D=null,G={};const oe=r.getParameter(r.SCISSOR_BOX),ae=r.getParameter(r.VIEWPORT),ce=new At().fromArray(oe),Se=new At().fromArray(ae);function Be(P,le,ne,q){const ie=new Uint8Array(4),ve=r.createTexture();r.bindTexture(P,ve),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ve=0;Ve<ne;Ve++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(le,0,r.RGBA,1,1,q,0,r.RGBA,r.UNSIGNED_BYTE,ie):r.texImage2D(le+Ve,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ie);return ve}const be={};be[r.TEXTURE_2D]=Be(r.TEXTURE_2D,r.TEXTURE_2D,1),be[r.TEXTURE_CUBE_MAP]=Be(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(be[r.TEXTURE_2D_ARRAY]=Be(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),be[r.TEXTURE_3D]=Be(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(r.DEPTH_TEST),l.setFunc(ra),Ie(!1),Ne(Dl),Pe(r.CULL_FACE),Te(vi);function Pe(P){f[P]!==!0&&(r.enable(P),f[P]=!0)}function it(P){f[P]!==!1&&(r.disable(P),f[P]=!1)}function Ue(P,le){return m[P]!==le?(r.bindFramebuffer(P,le),m[P]=le,n&&(P===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=le),P===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=le)),!0):!1}function I(P,le){let ne=_,q=!1;if(P)if(ne=g.get(le),ne===void 0&&(ne=[],g.set(le,ne)),P.isWebGLMultipleRenderTargets){const ie=P.texture;if(ne.length!==ie.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let ve=0,Ve=ie.length;ve<Ve;ve++)ne[ve]=r.COLOR_ATTACHMENT0+ve;ne.length=ie.length,q=!0}}else ne[0]!==r.COLOR_ATTACHMENT0&&(ne[0]=r.COLOR_ATTACHMENT0,q=!0);else ne[0]!==r.BACK&&(ne[0]=r.BACK,q=!0);q&&(t.isWebGL2?r.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Yt(P){return p!==P?(r.useProgram(P),p=P,!0):!1}const _e={[Hi]:r.FUNC_ADD,[hf]:r.FUNC_SUBTRACT,[ff]:r.FUNC_REVERSE_SUBTRACT};if(n)_e[Ol]=r.MIN,_e[Fl]=r.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(_e[Ol]=P.MIN_EXT,_e[Fl]=P.MAX_EXT)}const Ae={[df]:r.ZERO,[pf]:r.ONE,[mf]:r.SRC_COLOR,[yo]:r.SRC_ALPHA,[Mf]:r.SRC_ALPHA_SATURATE,[xf]:r.DST_COLOR,[gf]:r.DST_ALPHA,[_f]:r.ONE_MINUS_SRC_COLOR,[To]:r.ONE_MINUS_SRC_ALPHA,[Sf]:r.ONE_MINUS_DST_COLOR,[vf]:r.ONE_MINUS_DST_ALPHA,[Ef]:r.CONSTANT_COLOR,[yf]:r.ONE_MINUS_CONSTANT_COLOR,[Tf]:r.CONSTANT_ALPHA,[bf]:r.ONE_MINUS_CONSTANT_ALPHA};function Te(P,le,ne,q,ie,ve,Ve,ut,an,Je){if(P===vi){d===!0&&(it(r.BLEND),d=!1);return}if(d===!1&&(Pe(r.BLEND),d=!0),P!==uf){if(P!==E||Je!==z){if((x!==Hi||R!==Hi)&&(r.blendEquation(r.FUNC_ADD),x=Hi,R=Hi),Je)switch(P){case Rr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ul:r.blendFunc(r.ONE,r.ONE);break;case Il:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Rr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ul:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Il:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,T=null,b=null,L=null,v.set(0,0,0),A=0,E=P,z=Je}return}ie=ie||le,ve=ve||ne,Ve=Ve||q,(le!==x||ie!==R)&&(r.blendEquationSeparate(_e[le],_e[ie]),x=le,R=ie),(ne!==M||q!==T||ve!==b||Ve!==L)&&(r.blendFuncSeparate(Ae[ne],Ae[q],Ae[ve],Ae[Ve]),M=ne,T=q,b=ve,L=Ve),(ut.equals(v)===!1||an!==A)&&(r.blendColor(ut.r,ut.g,ut.b,an),v.copy(ut),A=an),E=P,z=!1}function rt(P,le){P.side===Pn?it(r.CULL_FACE):Pe(r.CULL_FACE);let ne=P.side===Ht;le&&(ne=!ne),Ie(ne),P.blending===Rr&&P.transparent===!1?Te(vi):Te(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const q=P.stencilWrite;c.setTest(q),q&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),gt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Pe(r.SAMPLE_ALPHA_TO_COVERAGE):it(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(P){X!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),X=P)}function Ne(P){P!==of?(Pe(r.CULL_FACE),P!==Y&&(P===Dl?r.cullFace(r.BACK):P===lf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):it(r.CULL_FACE),Y=P}function qe(P){P!==C&&(Z&&r.lineWidth(P),C=P)}function gt(P,le,ne){P?(Pe(r.POLYGON_OFFSET_FILL),(N!==le||W!==ne)&&(r.polygonOffset(le,ne),N=le,W=ne)):it(r.POLYGON_OFFSET_FILL)}function Rt(P){P?Pe(r.SCISSOR_TEST):it(r.SCISSOR_TEST)}function w(P){P===void 0&&(P=r.TEXTURE0+V-1),D!==P&&(r.activeTexture(P),D=P)}function S(P,le,ne){ne===void 0&&(D===null?ne=r.TEXTURE0+V-1:ne=D);let q=G[ne];q===void 0&&(q={type:void 0,texture:void 0},G[ne]=q),(q.type!==P||q.texture!==le)&&(D!==ne&&(r.activeTexture(ne),D=ne),r.bindTexture(P,le||be[P]),q.type=P,q.texture=le)}function O(){const P=G[D];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ee(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function He(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ke(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(P){ce.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),ce.copy(P))}function Ee(P){Se.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),Se.copy(P))}function ge(P,le){let ne=h.get(le);ne===void 0&&(ne=new WeakMap,h.set(le,ne));let q=ne.get(P);q===void 0&&(q=r.getUniformBlockIndex(le,P.name),ne.set(P,q))}function de(P,le){const q=h.get(le).get(P);u.get(le)!==q&&(r.uniformBlockBinding(le,q,P.__bindingPointIndex),u.set(le,q))}function Ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},D=null,G={},m={},g=new WeakMap,_=[],p=null,d=!1,E=null,x=null,M=null,T=null,R=null,b=null,L=null,v=new Xe(0,0,0),A=0,z=!1,X=null,Y=null,C=null,N=null,W=null,ce.set(0,0,r.canvas.width,r.canvas.height),Se.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pe,disable:it,bindFramebuffer:Ue,drawBuffers:I,useProgram:Yt,setBlending:Te,setMaterial:rt,setFlipSided:Ie,setCullFace:Ne,setLineWidth:qe,setPolygonOffset:gt,setScissorTest:Rt,activeTexture:w,bindTexture:S,unbindTexture:O,compressedTexImage2D:ee,compressedTexImage3D:J,texImage2D:Q,texImage3D:ke,updateUBOMapping:ge,uniformBlockBinding:de,texStorage2D:Me,texStorage3D:He,texSubImage2D:te,texSubImage3D:pe,compressedTexSubImage2D:re,compressedTexSubImage3D:he,scissor:we,viewport:Ee,reset:Ge}}function a0(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(w,S){return d?new OffscreenCanvas(w,S):hs("canvas")}function x(w,S,O,ee){let J=1;if((w.width>ee||w.height>ee)&&(J=ee/Math.max(w.width,w.height)),J<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const te=S?Lo:Math.floor,pe=te(J*w.width),re=te(J*w.height);_===void 0&&(_=E(pe,re));const he=O?E(pe,re):_;return he.width=pe,he.height=re,he.getContext("2d").drawImage(w,0,0,pe,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+pe+"x"+re+")."),he}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function M(w){return dc(w.width)&&dc(w.height)}function T(w){return o?!1:w.wrapS!==Tn||w.wrapT!==Tn||w.minFilter!==Ft&&w.minFilter!==hn}function R(w,S){return w.generateMipmaps&&S&&w.minFilter!==Ft&&w.minFilter!==hn}function b(w){r.generateMipmap(w)}function L(w,S,O,ee,J=!1){if(o===!1)return S;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let te=S;if(S===r.RED&&(O===r.FLOAT&&(te=r.R32F),O===r.HALF_FLOAT&&(te=r.R16F),O===r.UNSIGNED_BYTE&&(te=r.R8)),S===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(te=r.R8UI),O===r.UNSIGNED_SHORT&&(te=r.R16UI),O===r.UNSIGNED_INT&&(te=r.R32UI),O===r.BYTE&&(te=r.R8I),O===r.SHORT&&(te=r.R16I),O===r.INT&&(te=r.R32I)),S===r.RG&&(O===r.FLOAT&&(te=r.RG32F),O===r.HALF_FLOAT&&(te=r.RG16F),O===r.UNSIGNED_BYTE&&(te=r.RG8)),S===r.RGBA){const pe=J?sa:We.getTransfer(ee);O===r.FLOAT&&(te=r.RGBA32F),O===r.HALF_FLOAT&&(te=r.RGBA16F),O===r.UNSIGNED_BYTE&&(te=pe===Qe?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(te=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(te=r.RGB5_A1)}return(te===r.R16F||te===r.R32F||te===r.RG16F||te===r.RG32F||te===r.RGBA16F||te===r.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function v(w,S,O){return R(w,O)===!0||w.isFramebufferTexture&&w.minFilter!==Ft&&w.minFilter!==hn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function A(w){return w===Ft||w===Bl||w===Ia?r.NEAREST:r.LINEAR}function z(w){const S=w.target;S.removeEventListener("dispose",z),Y(S),S.isVideoTexture&&g.delete(S)}function X(w){const S=w.target;S.removeEventListener("dispose",X),N(S)}function Y(w){const S=n.get(w);if(S.__webglInit===void 0)return;const O=w.source,ee=p.get(O);if(ee){const J=ee[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(w),Object.keys(ee).length===0&&p.delete(O)}n.remove(w)}function C(w){const S=n.get(w);r.deleteTexture(S.__webglTexture);const O=w.source,ee=p.get(O);delete ee[S.__cacheKey],a.memory.textures--}function N(w){const S=w.texture,O=n.get(w),ee=n.get(S);if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(O.__webglFramebuffer[J]))for(let te=0;te<O.__webglFramebuffer[J].length;te++)r.deleteFramebuffer(O.__webglFramebuffer[J][te]);else r.deleteFramebuffer(O.__webglFramebuffer[J]);O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer[J])}else{if(Array.isArray(O.__webglFramebuffer))for(let J=0;J<O.__webglFramebuffer.length;J++)r.deleteFramebuffer(O.__webglFramebuffer[J]);else r.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&r.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let J=0;J<O.__webglColorRenderbuffer.length;J++)O.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(O.__webglColorRenderbuffer[J]);O.__webglDepthRenderbuffer&&r.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let J=0,te=S.length;J<te;J++){const pe=n.get(S[J]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(S[J])}n.remove(S),n.remove(w)}let W=0;function V(){W=0}function Z(){const w=W;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),W+=1,w}function j(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function K(w,S){const O=n.get(w);if(w.isVideoTexture&&gt(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const ee=w.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(O,w,S);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+S)}function D(w,S){const O=n.get(w);if(w.version>0&&O.__version!==w.version){Pe(O,w,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+S)}function G(w,S){const O=n.get(w);if(w.version>0&&O.__version!==w.version){Pe(O,w,S);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+S)}function oe(w,S){const O=n.get(w);if(w.version>0&&O.__version!==w.version){it(O,w,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+S)}const ae={[wo]:r.REPEAT,[Tn]:r.CLAMP_TO_EDGE,[Ro]:r.MIRRORED_REPEAT},ce={[Ft]:r.NEAREST,[Bl]:r.NEAREST_MIPMAP_NEAREST,[Ia]:r.NEAREST_MIPMAP_LINEAR,[hn]:r.LINEAR,[Gf]:r.LINEAR_MIPMAP_NEAREST,[cs]:r.LINEAR_MIPMAP_LINEAR},Se={[ed]:r.NEVER,[od]:r.ALWAYS,[td]:r.LESS,[id]:r.LEQUAL,[nd]:r.EQUAL,[ad]:r.GEQUAL,[rd]:r.GREATER,[sd]:r.NOTEQUAL};function Be(w,S,O){if(O?(r.texParameteri(w,r.TEXTURE_WRAP_S,ae[S.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,ae[S.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,ae[S.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,ce[S.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,ce[S.minFilter])):(r.texParameteri(w,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(w,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==Tn||S.wrapT!==Tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,r.TEXTURE_MAG_FILTER,A(S.magFilter)),r.texParameteri(w,r.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==Ft&&S.minFilter!==hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,Se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ft||S.minFilter!==Ia&&S.minFilter!==cs||S.type===pi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===us&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(w,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function be(w,S){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",z));const ee=S.source;let J=p.get(ee);J===void 0&&(J={},p.set(ee,J));const te=j(S);if(te!==w.__cacheKey){J[te]===void 0&&(J[te]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[te].usedTimes++;const pe=J[w.__cacheKey];pe!==void 0&&(J[w.__cacheKey].usedTimes--,pe.usedTimes===0&&C(S)),w.__cacheKey=te,w.__webglTexture=J[te].texture}return O}function Pe(w,S,O){let ee=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ee=r.TEXTURE_3D);const J=be(w,S),te=S.source;t.bindTexture(ee,w.__webglTexture,r.TEXTURE0+O);const pe=n.get(te);if(te.version!==pe.__version||J===!0){t.activeTexture(r.TEXTURE0+O);const re=We.getPrimaries(We.workingColorSpace),he=S.colorSpace===pn?null:We.getPrimaries(S.colorSpace),Me=S.colorSpace===pn||re===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const He=T(S)&&M(S.image)===!1;let Q=x(S.image,He,!1,u);Q=Rt(S,Q);const ke=M(Q)||o,we=s.convert(S.format,S.colorSpace);let Ee=s.convert(S.type),ge=L(S.internalFormat,we,Ee,S.colorSpace,S.isVideoTexture);Be(ee,S,ke);let de;const Ge=S.mipmaps,P=o&&S.isVideoTexture!==!0,le=pe.__version===void 0||J===!0,ne=v(S,Q,ke);if(S.isDepthTexture)ge=r.DEPTH_COMPONENT,o?S.type===pi?ge=r.DEPTH_COMPONENT32F:S.type===di?ge=r.DEPTH_COMPONENT24:S.type===Wi?ge=r.DEPTH24_STENCIL8:ge=r.DEPTH_COMPONENT16:S.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Xi&&ge===r.DEPTH_COMPONENT&&S.type!==el&&S.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=di,Ee=s.convert(S.type)),S.format===Nr&&ge===r.DEPTH_COMPONENT&&(ge=r.DEPTH_STENCIL,S.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Wi,Ee=s.convert(S.type))),le&&(P?t.texStorage2D(r.TEXTURE_2D,1,ge,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,ge,Q.width,Q.height,0,we,Ee,null));else if(S.isDataTexture)if(Ge.length>0&&ke){P&&le&&t.texStorage2D(r.TEXTURE_2D,ne,ge,Ge[0].width,Ge[0].height);for(let q=0,ie=Ge.length;q<ie;q++)de=Ge[q],P?t.texSubImage2D(r.TEXTURE_2D,q,0,0,de.width,de.height,we,Ee,de.data):t.texImage2D(r.TEXTURE_2D,q,ge,de.width,de.height,0,we,Ee,de.data);S.generateMipmaps=!1}else P?(le&&t.texStorage2D(r.TEXTURE_2D,ne,ge,Q.width,Q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,we,Ee,Q.data)):t.texImage2D(r.TEXTURE_2D,0,ge,Q.width,Q.height,0,we,Ee,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){P&&le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,ge,Ge[0].width,Ge[0].height,Q.depth);for(let q=0,ie=Ge.length;q<ie;q++)de=Ge[q],S.format!==bn?we!==null?P?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,de.width,de.height,Q.depth,we,de.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,ge,de.width,de.height,Q.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,de.width,de.height,Q.depth,we,Ee,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,ge,de.width,de.height,Q.depth,0,we,Ee,de.data)}else{P&&le&&t.texStorage2D(r.TEXTURE_2D,ne,ge,Ge[0].width,Ge[0].height);for(let q=0,ie=Ge.length;q<ie;q++)de=Ge[q],S.format!==bn?we!==null?P?t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,de.width,de.height,we,de.data):t.compressedTexImage2D(r.TEXTURE_2D,q,ge,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?t.texSubImage2D(r.TEXTURE_2D,q,0,0,de.width,de.height,we,Ee,de.data):t.texImage2D(r.TEXTURE_2D,q,ge,de.width,de.height,0,we,Ee,de.data)}else if(S.isDataArrayTexture)P?(le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,ge,Q.width,Q.height,Q.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,we,Ee,Q.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ge,Q.width,Q.height,Q.depth,0,we,Ee,Q.data);else if(S.isData3DTexture)P?(le&&t.texStorage3D(r.TEXTURE_3D,ne,ge,Q.width,Q.height,Q.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,we,Ee,Q.data)):t.texImage3D(r.TEXTURE_3D,0,ge,Q.width,Q.height,Q.depth,0,we,Ee,Q.data);else if(S.isFramebufferTexture){if(le)if(P)t.texStorage2D(r.TEXTURE_2D,ne,ge,Q.width,Q.height);else{let q=Q.width,ie=Q.height;for(let ve=0;ve<ne;ve++)t.texImage2D(r.TEXTURE_2D,ve,ge,q,ie,0,we,Ee,null),q>>=1,ie>>=1}}else if(Ge.length>0&&ke){P&&le&&t.texStorage2D(r.TEXTURE_2D,ne,ge,Ge[0].width,Ge[0].height);for(let q=0,ie=Ge.length;q<ie;q++)de=Ge[q],P?t.texSubImage2D(r.TEXTURE_2D,q,0,0,we,Ee,de):t.texImage2D(r.TEXTURE_2D,q,ge,we,Ee,de);S.generateMipmaps=!1}else P?(le&&t.texStorage2D(r.TEXTURE_2D,ne,ge,Q.width,Q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,we,Ee,Q)):t.texImage2D(r.TEXTURE_2D,0,ge,we,Ee,Q);R(S,ke)&&b(ee),pe.__version=te.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function it(w,S,O){if(S.image.length!==6)return;const ee=be(w,S),J=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+O);const te=n.get(J);if(J.version!==te.__version||ee===!0){t.activeTexture(r.TEXTURE0+O);const pe=We.getPrimaries(We.workingColorSpace),re=S.colorSpace===pn?null:We.getPrimaries(S.colorSpace),he=S.colorSpace===pn||pe===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,He=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let q=0;q<6;q++)!Me&&!He?Q[q]=x(S.image[q],!1,!0,c):Q[q]=He?S.image[q].image:S.image[q],Q[q]=Rt(S,Q[q]);const ke=Q[0],we=M(ke)||o,Ee=s.convert(S.format,S.colorSpace),ge=s.convert(S.type),de=L(S.internalFormat,Ee,ge,S.colorSpace),Ge=o&&S.isVideoTexture!==!0,P=te.__version===void 0||ee===!0;let le=v(S,ke,we);Be(r.TEXTURE_CUBE_MAP,S,we);let ne;if(Me){Ge&&P&&t.texStorage2D(r.TEXTURE_CUBE_MAP,le,de,ke.width,ke.height);for(let q=0;q<6;q++){ne=Q[q].mipmaps;for(let ie=0;ie<ne.length;ie++){const ve=ne[ie];S.format!==bn?Ee!==null?Ge?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,0,0,ve.width,ve.height,Ee,ve.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,de,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,0,0,ve.width,ve.height,Ee,ge,ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie,de,ve.width,ve.height,0,Ee,ge,ve.data)}}}else{ne=S.mipmaps,Ge&&P&&(ne.length>0&&le++,t.texStorage2D(r.TEXTURE_CUBE_MAP,le,de,Q[0].width,Q[0].height));for(let q=0;q<6;q++)if(He){Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Q[q].width,Q[q].height,Ee,ge,Q[q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,de,Q[q].width,Q[q].height,0,Ee,ge,Q[q].data);for(let ie=0;ie<ne.length;ie++){const Ve=ne[ie].image[q].image;Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,0,0,Ve.width,Ve.height,Ee,ge,Ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,de,Ve.width,Ve.height,0,Ee,ge,Ve.data)}}else{Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ee,ge,Q[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,de,Ee,ge,Q[q]);for(let ie=0;ie<ne.length;ie++){const ve=ne[ie];Ge?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,0,0,Ee,ge,ve.image[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,ie+1,de,Ee,ge,ve.image[q])}}}R(S,we)&&b(r.TEXTURE_CUBE_MAP),te.__version=J.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Ue(w,S,O,ee,J,te){const pe=s.convert(O.format,O.colorSpace),re=s.convert(O.type),he=L(O.internalFormat,pe,re,O.colorSpace);if(!n.get(S).__hasExternalTextures){const He=Math.max(1,S.width>>te),Q=Math.max(1,S.height>>te);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,te,he,He,Q,S.depth,0,pe,re,null):t.texImage2D(J,te,he,He,Q,0,pe,re,null)}t.bindFramebuffer(r.FRAMEBUFFER,w),qe(S)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,J,n.get(O).__webglTexture,0,Ne(S)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,J,n.get(O).__webglTexture,te),t.bindFramebuffer(r.FRAMEBUFFER,null)}function I(w,S,O){if(r.bindRenderbuffer(r.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let ee=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(O||qe(S)){const J=S.depthTexture;J&&J.isDepthTexture&&(J.type===pi?ee=r.DEPTH_COMPONENT32F:J.type===di&&(ee=r.DEPTH_COMPONENT24));const te=Ne(S);qe(S)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,ee,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,te,ee,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,ee,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){const ee=Ne(S);O&&qe(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,r.DEPTH24_STENCIL8,S.width,S.height):qe(S)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,w)}else{const ee=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let J=0;J<ee.length;J++){const te=ee[J],pe=s.convert(te.format,te.colorSpace),re=s.convert(te.type),he=L(te.internalFormat,pe,re,te.colorSpace),Me=Ne(S);O&&qe(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,he,S.width,S.height):qe(S)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Me,he,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,he,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Yt(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const ee=n.get(S.depthTexture).__webglTexture,J=Ne(S);if(S.depthTexture.format===Xi)qe(S)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(S.depthTexture.format===Nr)qe(S)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function _e(w){const S=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Yt(S.__webglFramebuffer,w)}else if(O){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]=r.createRenderbuffer(),I(S.__webglDepthbuffer[ee],w,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),I(S.__webglDepthbuffer,w,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(w,S,O){const ee=n.get(w);S!==void 0&&Ue(ee.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&_e(w)}function Te(w){const S=w.texture,O=n.get(w),ee=n.get(S);w.addEventListener("dispose",X),w.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=S.version,a.memory.textures++);const J=w.isWebGLCubeRenderTarget===!0,te=w.isWebGLMultipleRenderTargets===!0,pe=M(w)||o;if(J){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(o&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let he=0;he<S.mipmaps.length;he++)O.__webglFramebuffer[re][he]=r.createFramebuffer()}else O.__webglFramebuffer[re]=r.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<S.mipmaps.length;re++)O.__webglFramebuffer[re]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(te)if(i.drawBuffers){const re=w.texture;for(let he=0,Me=re.length;he<Me;he++){const He=n.get(re[he]);He.__webglTexture===void 0&&(He.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&qe(w)===!1){const re=te?S:[S];O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<re.length;he++){const Me=re[he];O.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[he]);const He=s.convert(Me.format,Me.colorSpace),Q=s.convert(Me.type),ke=L(Me.internalFormat,He,Q,Me.colorSpace,w.isXRRenderTarget===!0),we=Ne(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,we,ke,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,O.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),I(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),Be(r.TEXTURE_CUBE_MAP,S,pe);for(let re=0;re<6;re++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)Ue(O.__webglFramebuffer[re][he],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,he);else Ue(O.__webglFramebuffer[re],w,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);R(S,pe)&&b(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const re=w.texture;for(let he=0,Me=re.length;he<Me;he++){const He=re[he],Q=n.get(He);t.bindTexture(r.TEXTURE_2D,Q.__webglTexture),Be(r.TEXTURE_2D,He,pe),Ue(O.__webglFramebuffer,w,He,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,0),R(He,pe)&&b(r.TEXTURE_2D)}t.unbindTexture()}else{let re=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?re=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,ee.__webglTexture),Be(re,S,pe),o&&S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)Ue(O.__webglFramebuffer[he],w,S,r.COLOR_ATTACHMENT0,re,he);else Ue(O.__webglFramebuffer,w,S,r.COLOR_ATTACHMENT0,re,0);R(S,pe)&&b(re),t.unbindTexture()}w.depthBuffer&&_e(w)}function rt(w){const S=M(w)||o,O=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0,J=O.length;ee<J;ee++){const te=O[ee];if(R(te,S)){const pe=w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,re=n.get(te).__webglTexture;t.bindTexture(pe,re),b(pe),t.unbindTexture()}}}function Ie(w){if(o&&w.samples>0&&qe(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],O=w.width,ee=w.height;let J=r.COLOR_BUFFER_BIT;const te=[],pe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=n.get(w),he=w.isWebGLMultipleRenderTargets===!0;if(he)for(let Me=0;Me<S.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){te.push(r.COLOR_ATTACHMENT0+Me),w.depthBuffer&&te.push(pe);const He=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(He===!1&&(w.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),he&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,re.__webglColorRenderbuffer[Me]),He===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[pe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[pe])),he){const Q=n.get(S[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,O,ee,0,0,O,ee,J,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let Me=0;Me<S.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,re.__webglColorRenderbuffer[Me]);const He=n.get(S[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,He,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function Ne(w){return Math.min(h,w.samples)}function qe(w){const S=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function gt(w){const S=a.render.frame;g.get(w)!==S&&(g.set(w,S),w.update())}function Rt(w,S){const O=w.colorSpace,ee=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Co||O!==ri&&O!==pn&&(We.getTransfer(O)===Qe?o===!1?e.has("EXT_sRGB")===!0&&ee===bn?(w.format=Co,w.minFilter=hn,w.generateMipmaps=!1):S=Du.sRGBToLinear(S):(ee!==bn||J!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}this.allocateTextureUnit=Z,this.resetTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=D,this.setTexture3D=G,this.setTextureCube=oe,this.rebindTextures=Ae,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=qe}function o0(r,e,t){const n=t.isWebGL2;function i(s,a=pn){let o;const l=We.getTransfer(a);if(s===Si)return r.UNSIGNED_BYTE;if(s===bu)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Au)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Hf)return r.BYTE;if(s===Vf)return r.SHORT;if(s===el)return r.UNSIGNED_SHORT;if(s===Tu)return r.INT;if(s===di)return r.UNSIGNED_INT;if(s===pi)return r.FLOAT;if(s===us)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===kf)return r.ALPHA;if(s===bn)return r.RGBA;if(s===Wf)return r.LUMINANCE;if(s===Xf)return r.LUMINANCE_ALPHA;if(s===Xi)return r.DEPTH_COMPONENT;if(s===Nr)return r.DEPTH_STENCIL;if(s===Co)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===qf)return r.RED;if(s===wu)return r.RED_INTEGER;if(s===Yf)return r.RG;if(s===Ru)return r.RG_INTEGER;if(s===Cu)return r.RGBA_INTEGER;if(s===Na||s===Oa||s===Fa||s===Ba)if(l===Qe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Na)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Na)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ba)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zl||s===Gl||s===Hl||s===Vl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===zl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===kl||s===Wl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===kl)return l===Qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Wl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xl||s===ql||s===Yl||s===Kl||s===jl||s===Zl||s===$l||s===Jl||s===Ql||s===ec||s===tc||s===nc||s===ic||s===rc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Xl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ql)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$l)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Jl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ql)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ec)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===tc)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===nc)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ic)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rc)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===za||s===sc||s===ac)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===za)return l===Qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===sc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ac)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===jf||s===oc||s===lc||s===cc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===za)return o.COMPRESSED_RED_RGTC1_EXT;if(s===oc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===lc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===cc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wi?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class l0 extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class br extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c0={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(c0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new br;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class u0 extends Vt{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:Xi,u!==Xi&&u!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xi&&(n=di),n===void 0&&u===Nr&&(n=Wi),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class h0 extends kr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const _=t.getContextAttributes();let p=null,d=null;const E=[],x=[],M=new fn;M.layers.enable(1),M.viewport=new At;const T=new fn;T.layers.enable(2),T.viewport=new At;const R=[M,T],b=new l0;b.layers.enable(1),b.layers.enable(2);let L=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let G=E[D];return G===void 0&&(G=new uo,E[D]=G),G.getTargetRaySpace()},this.getControllerGrip=function(D){let G=E[D];return G===void 0&&(G=new uo,E[D]=G),G.getGripSpace()},this.getHand=function(D){let G=E[D];return G===void 0&&(G=new uo,E[D]=G),G.getHandSpace()};function A(D){const G=x.indexOf(D.inputSource);if(G===-1)return;const oe=E[G];oe!==void 0&&(oe.update(D.inputSource,D.frame,c||a),oe.dispatchEvent({type:D.type,data:D.inputSource}))}function z(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",X);for(let D=0;D<E.length;D++){const G=x[D];G!==null&&(x[D]=null,E[D].disconnect(G))}L=null,v=null,e.setRenderTarget(p),m=null,f=null,h=null,i=null,d=null,K.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",z),i.addEventListener("inputsourceschange",X),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,G),i.updateRenderState({baseLayer:m}),d=new er(m.framebufferWidth,m.framebufferHeight,{format:bn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let G=null,oe=null,ae=null;_.depth&&(ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,G=_.stencil?Nr:Xi,oe=_.stencil?Wi:di);const ce={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(ce),i.updateRenderState({layers:[f]}),d=new er(f.textureWidth,f.textureHeight,{format:bn,type:Si,depthTexture:new u0(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Se=e.properties.get(d);Se.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),K.setContext(i),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function X(D){for(let G=0;G<D.removed.length;G++){const oe=D.removed[G],ae=x.indexOf(oe);ae>=0&&(x[ae]=null,E[ae].disconnect(oe))}for(let G=0;G<D.added.length;G++){const oe=D.added[G];let ae=x.indexOf(oe);if(ae===-1){for(let Se=0;Se<E.length;Se++)if(Se>=x.length){x.push(oe),ae=Se;break}else if(x[Se]===null){x[Se]=oe,ae=Se;break}if(ae===-1)break}const ce=E[ae];ce&&ce.connect(oe)}}const Y=new B,C=new B;function N(D,G,oe){Y.setFromMatrixPosition(G.matrixWorld),C.setFromMatrixPosition(oe.matrixWorld);const ae=Y.distanceTo(C),ce=G.projectionMatrix.elements,Se=oe.projectionMatrix.elements,Be=ce[14]/(ce[10]-1),be=ce[14]/(ce[10]+1),Pe=(ce[9]+1)/ce[5],it=(ce[9]-1)/ce[5],Ue=(ce[8]-1)/ce[0],I=(Se[8]+1)/Se[0],Yt=Be*Ue,_e=Be*I,Ae=ae/(-Ue+I),Te=Ae*-Ue;G.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Te),D.translateZ(Ae),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const rt=Be+Ae,Ie=be+Ae,Ne=Yt-Te,qe=_e+(ae-Te),gt=Pe*be/Ie*rt,Rt=it*be/Ie*rt;D.projectionMatrix.makePerspective(Ne,qe,gt,Rt,rt,Ie),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function W(D,G){G===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(G.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;b.near=T.near=M.near=D.near,b.far=T.far=M.far=D.far,(L!==b.near||v!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,v=b.far);const G=D.parent,oe=b.cameras;W(b,G);for(let ae=0;ae<oe.length;ae++)W(oe[ae],G);oe.length===2?N(b,M,T):b.projectionMatrix.copy(M.projectionMatrix),V(D,b,G)};function V(D,G,oe){oe===null?D.matrix.copy(G.matrixWorld):(D.matrix.copy(oe.matrixWorld),D.matrix.invert(),D.matrix.multiply(G.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(G.projectionMatrix),D.projectionMatrixInverse.copy(G.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Po*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(D){l=D,f!==null&&(f.fixedFoveation=D),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=D)};let Z=null;function j(D,G){if(u=G.getViewerPose(c||a),g=G,u!==null){const oe=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let ae=!1;oe.length!==b.cameras.length&&(b.cameras.length=0,ae=!0);for(let ce=0;ce<oe.length;ce++){const Se=oe[ce];let Be=null;if(m!==null)Be=m.getViewport(Se);else{const Pe=h.getViewSubImage(f,Se);Be=Pe.viewport,ce===0&&(e.setRenderTargetTextures(d,Pe.colorTexture,f.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(d))}let be=R[ce];be===void 0&&(be=new fn,be.layers.enable(ce),be.viewport=new At,R[ce]=be),be.matrix.fromArray(Se.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Se.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Be.x,Be.y,Be.width,Be.height),ce===0&&(b.matrix.copy(be.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ae===!0&&b.cameras.push(be)}}for(let oe=0;oe<E.length;oe++){const ae=x[oe],ce=E[oe];ae!==null&&ce!==void 0&&ce.update(ae,G,c||a)}Z&&Z(D,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}const K=new ku;K.setAnimationLoop(j),this.setAnimationLoop=function(D){Z=D},this.dispose=function(){}}}function f0(r,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,zu(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,E,x,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,M)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,E,x):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ht&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ht&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const E=e.get(d).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,E,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=x*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ht&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const E=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function d0(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,x){const M=x.program;n.uniformBlockBinding(E,M)}function c(E,x){let M=i[E.id];M===void 0&&(g(E),M=u(E),i[E.id]=M,E.addEventListener("dispose",p));const T=x.program;n.updateUBOMapping(E,T);const R=e.render.frame;s[E.id]!==R&&(f(E),s[E.id]=R)}function u(E){const x=h();E.__bindingPointIndex=x;const M=r.createBuffer(),T=E.__size,R=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,T,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const x=i[E.id],M=E.uniforms,T=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let R=0,b=M.length;R<b;R++){const L=M[R];if(m(L,R,T)===!0){const v=L.__offset,A=Array.isArray(L.value)?L.value:[L.value];let z=0;for(let X=0;X<A.length;X++){const Y=A[X],C=_(Y);typeof Y=="number"?(L.__data[0]=Y,r.bufferSubData(r.UNIFORM_BUFFER,v+z,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=Y.elements[0],L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=Y.elements[0],L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=Y.elements[0]):(Y.toArray(L.__data,z),z+=C.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,v,L.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(E,x,M){const T=E.value;if(M[x]===void 0){if(typeof T=="number")M[x]=T;else{const R=Array.isArray(T)?T:[T],b=[];for(let L=0;L<R.length;L++)b.push(R[L].clone());M[x]=b}return!0}else if(typeof T=="number"){if(M[x]!==T)return M[x]=T,!0}else{const R=Array.isArray(M[x])?M[x]:[M[x]],b=Array.isArray(T)?T:[T];for(let L=0;L<R.length;L++){const v=R[L];if(v.equals(b[L])===!1)return v.copy(b[L]),!0}}return!1}function g(E){const x=E.uniforms;let M=0;const T=16;let R=0;for(let b=0,L=x.length;b<L;b++){const v=x[b],A={boundary:0,storage:0},z=Array.isArray(v.value)?v.value:[v.value];for(let X=0,Y=z.length;X<Y;X++){const C=z[X],N=_(C);A.boundary+=N.boundary,A.storage+=N.storage}if(v.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=M,b>0){R=M%T;const X=T-R;R!==0&&X-A.boundary<0&&(M+=T-R,v.__offset=M)}M+=A.storage}return R=M%T,R>0&&(M+=T-R),E.__size=M,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function p(E){const x=E.target;x.removeEventListener("dispose",p);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function d(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:l,update:c,dispose:d}}class Ku{constructor(e={}){const{canvas:t=cd(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this._useLegacyLights=!1,this.toneMapping=xi,this.toneMappingExposure=1;const x=this;let M=!1,T=0,R=0,b=null,L=-1,v=null;const A=new At,z=new At;let X=null;const Y=new Xe(0);let C=0,N=t.width,W=t.height,V=1,Z=null,j=null;const K=new At(0,0,N,W),D=new At(0,0,N,W);let G=!1;const oe=new Vu;let ae=!1,ce=!1,Se=null;const Be=new wt,be=new $e,Pe=new B,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return b===null?V:1}let I=n;function Yt(y,U){for(let F=0;F<y.length;F++){const H=y[F],k=t.getContext(H,U);if(k!==null)return k}return null}try{const y={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qo}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",le,!1),I===null){const U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),I=Yt(U,y),I===null)throw Yt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let _e,Ae,Te,rt,Ie,Ne,qe,gt,Rt,w,S,O,ee,J,te,pe,re,he,Me,He,Q,ke,we,Ee;function ge(){_e=new y_(I),Ae=new __(I,_e,e),_e.init(Ae),ke=new o0(I,_e,Ae),Te=new s0(I,_e,Ae),rt=new A_(I),Ie=new Xg,Ne=new a0(I,_e,Te,Ie,Ae,ke,rt),qe=new v_(x),gt=new E_(x),Rt=new Nd(I,Ae),we=new p_(I,_e,Rt,Ae),w=new T_(I,Rt,rt,we),S=new P_(I,w,Rt,rt),Me=new C_(I,Ae,Ne),pe=new g_(Ie),O=new Wg(x,qe,gt,_e,Ae,we,pe),ee=new f0(x,Ie),J=new Yg,te=new Qg(_e,Ae),he=new d_(x,qe,gt,Te,S,f,l),re=new r0(x,S,Ae),Ee=new d0(I,rt,Ae,Te),He=new m_(I,_e,rt,Ae),Q=new b_(I,_e,rt,Ae),rt.programs=O.programs,x.capabilities=Ae,x.extensions=_e,x.properties=Ie,x.renderLists=J,x.shadowMap=re,x.state=Te,x.info=rt}ge();const de=new h0(x,I);this.xr=de,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=_e.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=_e.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(N,W,!1))},this.getSize=function(y){return y.set(N,W)},this.setSize=function(y,U,F=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=y,W=U,t.width=Math.floor(y*V),t.height=Math.floor(U*V),F===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(N*V,W*V).floor()},this.setDrawingBufferSize=function(y,U,F){N=y,W=U,V=F,t.width=Math.floor(y*F),t.height=Math.floor(U*F),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(A)},this.getViewport=function(y){return y.copy(K)},this.setViewport=function(y,U,F,H){y.isVector4?K.set(y.x,y.y,y.z,y.w):K.set(y,U,F,H),Te.viewport(A.copy(K).multiplyScalar(V).floor())},this.getScissor=function(y){return y.copy(D)},this.setScissor=function(y,U,F,H){y.isVector4?D.set(y.x,y.y,y.z,y.w):D.set(y,U,F,H),Te.scissor(z.copy(D).multiplyScalar(V).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(y){Te.setScissorTest(G=y)},this.setOpaqueSort=function(y){Z=y},this.setTransparentSort=function(y){j=y},this.getClearColor=function(y){return y.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(y=!0,U=!0,F=!0){let H=0;if(y){let k=!1;if(b!==null){const fe=b.texture.format;k=fe===Cu||fe===Ru||fe===wu}if(k){const fe=b.texture.type,me=fe===Si||fe===di||fe===el||fe===Wi||fe===bu||fe===Au,xe=he.getClearColor(),ye=he.getClearAlpha(),De=xe.r,Re=xe.g,Ce=xe.b;me?(m[0]=De,m[1]=Re,m[2]=Ce,m[3]=ye,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=De,g[1]=Re,g[2]=Ce,g[3]=ye,I.clearBufferiv(I.COLOR,0,g))}else H|=I.COLOR_BUFFER_BIT}U&&(H|=I.DEPTH_BUFFER_BIT),F&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",le,!1),J.dispose(),te.dispose(),Ie.dispose(),qe.dispose(),gt.dispose(),S.dispose(),we.dispose(),Ee.dispose(),O.dispose(),de.dispose(),de.removeEventListener("sessionstart",an),de.removeEventListener("sessionend",Je),Se&&(Se.dispose(),Se=null),It.stop()};function Ge(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const y=rt.autoReset,U=re.enabled,F=re.autoUpdate,H=re.needsUpdate,k=re.type;ge(),rt.autoReset=y,re.enabled=U,re.autoUpdate=F,re.needsUpdate=H,re.type=k}function le(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ne(y){const U=y.target;U.removeEventListener("dispose",ne),q(U)}function q(y){ie(y),Ie.remove(y)}function ie(y){const U=Ie.get(y).programs;U!==void 0&&(U.forEach(function(F){O.releaseProgram(F)}),y.isShaderMaterial&&O.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,F,H,k,fe){U===null&&(U=it);const me=k.isMesh&&k.matrixWorld.determinant()<0,xe=nf(y,U,F,H,k);Te.setMaterial(H,me);let ye=F.index,De=1;if(H.wireframe===!0){if(ye=w.getWireframeAttribute(F),ye===void 0)return;De=2}const Re=F.drawRange,Ce=F.attributes.position;let lt=Re.start*De,Kt=(Re.start+Re.count)*De;fe!==null&&(lt=Math.max(lt,fe.start*De),Kt=Math.min(Kt,(fe.start+fe.count)*De)),ye!==null?(lt=Math.max(lt,0),Kt=Math.min(Kt,ye.count)):Ce!=null&&(lt=Math.max(lt,0),Kt=Math.min(Kt,Ce.count));const vt=Kt-lt;if(vt<0||vt===1/0)return;we.setup(k,H,xe,F,ye);let Vn,st=He;if(ye!==null&&(Vn=Rt.get(ye),st=Q,st.setIndex(Vn)),k.isMesh)H.wireframe===!0?(Te.setLineWidth(H.wireframeLinewidth*Ue()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(k.isLine){let Fe=H.linewidth;Fe===void 0&&(Fe=1),Te.setLineWidth(Fe*Ue()),k.isLineSegments?st.setMode(I.LINES):k.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else k.isPoints?st.setMode(I.POINTS):k.isSprite&&st.setMode(I.TRIANGLES);if(k.isInstancedMesh)st.renderInstances(lt,vt,k.count);else if(F.isInstancedBufferGeometry){const Fe=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Pa=Math.min(F.instanceCount,Fe);st.renderInstances(lt,vt,Pa)}else st.render(lt,vt)};function ve(y,U,F){y.transparent===!0&&y.side===Pn&&y.forceSinglePass===!1?(y.side=Ht,y.needsUpdate=!0,Rs(y,U,F),y.side=bi,y.needsUpdate=!0,Rs(y,U,F),y.side=Pn):Rs(y,U,F)}this.compile=function(y,U,F=null){F===null&&(F=y),p=te.get(F),p.init(),E.push(p),F.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),y!==F&&y.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(x._useLegacyLights);const H=new Set;return y.traverse(function(k){const fe=k.material;if(fe)if(Array.isArray(fe))for(let me=0;me<fe.length;me++){const xe=fe[me];ve(xe,F,k),H.add(xe)}else ve(fe,F,k),H.add(fe)}),E.pop(),p=null,H},this.compileAsync=function(y,U,F=null){const H=this.compile(y,U,F);return new Promise(k=>{function fe(){if(H.forEach(function(me){Ie.get(me).currentProgram.isReady()&&H.delete(me)}),H.size===0){k(y);return}setTimeout(fe,10)}_e.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ve=null;function ut(y){Ve&&Ve(y)}function an(){It.stop()}function Je(){It.start()}const It=new ku;It.setAnimationLoop(ut),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(y){Ve=y,de.setAnimationLoop(y),y===null?It.stop():It.start()},de.addEventListener("sessionstart",an),de.addEventListener("sessionend",Je),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(U),U=de.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,U,b),p=te.get(y,E.length),p.init(),E.push(p),Be.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),oe.setFromProjectionMatrix(Be),ce=this.localClippingEnabled,ae=pe.init(this.clippingPlanes,ce),_=J.get(y,d.length),_.init(),d.push(_),wn(y,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Z,j),this.info.render.frame++,ae===!0&&pe.beginShadows();const F=p.state.shadowsArray;if(re.render(F,y,U),ae===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),he.render(_,y),p.setupLights(x._useLegacyLights),U.isArrayCamera){const H=U.cameras;for(let k=0,fe=H.length;k<fe;k++){const me=H[k];Al(_,y,me,me.viewport)}}else Al(_,y,U);b!==null&&(Ne.updateMultisampleRenderTarget(b),Ne.updateRenderTargetMipmap(b)),y.isScene===!0&&y.onAfterRender(x,y,U),we.resetDefaultState(),L=-1,v=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function wn(y,U,F,H){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)F=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||oe.intersectsSprite(y)){H&&Pe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Be);const me=S.update(y),xe=y.material;xe.visible&&_.push(y,me,xe,F,Pe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||oe.intersectsObject(y))){const me=S.update(y),xe=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Pe.copy(y.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Pe.copy(me.boundingSphere.center)),Pe.applyMatrix4(y.matrixWorld).applyMatrix4(Be)),Array.isArray(xe)){const ye=me.groups;for(let De=0,Re=ye.length;De<Re;De++){const Ce=ye[De],lt=xe[Ce.materialIndex];lt&&lt.visible&&_.push(y,me,lt,F,Pe.z,Ce)}}else xe.visible&&_.push(y,me,xe,F,Pe.z,null)}}const fe=y.children;for(let me=0,xe=fe.length;me<xe;me++)wn(fe[me],U,F,H)}function Al(y,U,F,H){const k=y.opaque,fe=y.transmissive,me=y.transparent;p.setupLightsView(F),ae===!0&&pe.setGlobalState(x.clippingPlanes,F),fe.length>0&&tf(k,fe,U,F),H&&Te.viewport(A.copy(H)),k.length>0&&ws(k,U,F),fe.length>0&&ws(fe,U,F),me.length>0&&ws(me,U,F),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function tf(y,U,F,H){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const fe=Ae.isWebGL2;Se===null&&(Se=new er(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?us:Si,minFilter:cs,samples:fe?4:0})),x.getDrawingBufferSize(be),fe?Se.setSize(be.x,be.y):Se.setSize(Lo(be.x),Lo(be.y));const me=x.getRenderTarget();x.setRenderTarget(Se),x.getClearColor(Y),C=x.getClearAlpha(),C<1&&x.setClearColor(16777215,.5),x.clear();const xe=x.toneMapping;x.toneMapping=xi,ws(y,F,H),Ne.updateMultisampleRenderTarget(Se),Ne.updateRenderTargetMipmap(Se);let ye=!1;for(let De=0,Re=U.length;De<Re;De++){const Ce=U[De],lt=Ce.object,Kt=Ce.geometry,vt=Ce.material,Vn=Ce.group;if(vt.side===Pn&&lt.layers.test(H.layers)){const st=vt.side;vt.side=Ht,vt.needsUpdate=!0,wl(lt,F,H,Kt,vt,Vn),vt.side=st,vt.needsUpdate=!0,ye=!0}}ye===!0&&(Ne.updateMultisampleRenderTarget(Se),Ne.updateRenderTargetMipmap(Se)),x.setRenderTarget(me),x.setClearColor(Y,C),x.toneMapping=xe}function ws(y,U,F){const H=U.isScene===!0?U.overrideMaterial:null;for(let k=0,fe=y.length;k<fe;k++){const me=y[k],xe=me.object,ye=me.geometry,De=H===null?me.material:H,Re=me.group;xe.layers.test(F.layers)&&wl(xe,U,F,ye,De,Re)}}function wl(y,U,F,H,k,fe){y.onBeforeRender(x,U,F,H,k,fe),y.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(x,U,F,H,y,fe),k.transparent===!0&&k.side===Pn&&k.forceSinglePass===!1?(k.side=Ht,k.needsUpdate=!0,x.renderBufferDirect(F,U,H,k,y,fe),k.side=bi,k.needsUpdate=!0,x.renderBufferDirect(F,U,H,k,y,fe),k.side=Pn):x.renderBufferDirect(F,U,H,k,y,fe),y.onAfterRender(x,U,F,H,k,fe)}function Rs(y,U,F){U.isScene!==!0&&(U=it);const H=Ie.get(y),k=p.state.lights,fe=p.state.shadowsArray,me=k.state.version,xe=O.getParameters(y,k.state,fe,U,F),ye=O.getProgramCacheKey(xe);let De=H.programs;H.environment=y.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(y.isMeshStandardMaterial?gt:qe).get(y.envMap||H.environment),De===void 0&&(y.addEventListener("dispose",ne),De=new Map,H.programs=De);let Re=De.get(ye);if(Re!==void 0){if(H.currentProgram===Re&&H.lightsStateVersion===me)return Cl(y,xe),Re}else xe.uniforms=O.getUniforms(y),y.onBuild(F,xe,x),y.onBeforeCompile(xe,x),Re=O.acquireProgram(xe,ye),De.set(ye,Re),H.uniforms=xe.uniforms;const Ce=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ce.clippingPlanes=pe.uniform),Cl(y,xe),H.needsLights=sf(y),H.lightsStateVersion=me,H.needsLights&&(Ce.ambientLightColor.value=k.state.ambient,Ce.lightProbe.value=k.state.probe,Ce.directionalLights.value=k.state.directional,Ce.directionalLightShadows.value=k.state.directionalShadow,Ce.spotLights.value=k.state.spot,Ce.spotLightShadows.value=k.state.spotShadow,Ce.rectAreaLights.value=k.state.rectArea,Ce.ltc_1.value=k.state.rectAreaLTC1,Ce.ltc_2.value=k.state.rectAreaLTC2,Ce.pointLights.value=k.state.point,Ce.pointLightShadows.value=k.state.pointShadow,Ce.hemisphereLights.value=k.state.hemi,Ce.directionalShadowMap.value=k.state.directionalShadowMap,Ce.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ce.spotShadowMap.value=k.state.spotShadowMap,Ce.spotLightMatrix.value=k.state.spotLightMatrix,Ce.spotLightMap.value=k.state.spotLightMap,Ce.pointShadowMap.value=k.state.pointShadowMap,Ce.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Re,H.uniformsList=null,Re}function Rl(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Qs.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Cl(y,U){const F=Ie.get(y);F.outputColorSpace=U.outputColorSpace,F.instancing=U.instancing,F.instancingColor=U.instancingColor,F.skinning=U.skinning,F.morphTargets=U.morphTargets,F.morphNormals=U.morphNormals,F.morphColors=U.morphColors,F.morphTargetsCount=U.morphTargetsCount,F.numClippingPlanes=U.numClippingPlanes,F.numIntersection=U.numClipIntersection,F.vertexAlphas=U.vertexAlphas,F.vertexTangents=U.vertexTangents,F.toneMapping=U.toneMapping}function nf(y,U,F,H,k){U.isScene!==!0&&(U=it),Ne.resetTextureUnits();const fe=U.fog,me=H.isMeshStandardMaterial?U.environment:null,xe=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ri,ye=(H.isMeshStandardMaterial?gt:qe).get(H.envMap||me),De=H.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Re=!!F.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!F.morphAttributes.position,lt=!!F.morphAttributes.normal,Kt=!!F.morphAttributes.color;let vt=xi;H.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(vt=x.toneMapping);const Vn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,st=Vn!==void 0?Vn.length:0,Fe=Ie.get(H),Pa=p.state.lights;if(ae===!0&&(ce===!0||y!==v)){const jt=y===v&&H.id===L;pe.setState(H,y,jt)}let ht=!1;H.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Pa.state.version||Fe.outputColorSpace!==xe||k.isInstancedMesh&&Fe.instancing===!1||!k.isInstancedMesh&&Fe.instancing===!0||k.isSkinnedMesh&&Fe.skinning===!1||!k.isSkinnedMesh&&Fe.skinning===!0||k.isInstancedMesh&&Fe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Fe.instancingColor===!1&&k.instanceColor!==null||Fe.envMap!==ye||H.fog===!0&&Fe.fog!==fe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==pe.numPlanes||Fe.numIntersection!==pe.numIntersection)||Fe.vertexAlphas!==De||Fe.vertexTangents!==Re||Fe.morphTargets!==Ce||Fe.morphNormals!==lt||Fe.morphColors!==Kt||Fe.toneMapping!==vt||Ae.isWebGL2===!0&&Fe.morphTargetsCount!==st)&&(ht=!0):(ht=!0,Fe.__version=H.version);let Pi=Fe.currentProgram;ht===!0&&(Pi=Rs(H,U,k));let Pl=!1,Yr=!1,La=!1;const Nt=Pi.getUniforms(),Li=Fe.uniforms;if(Te.useProgram(Pi.program)&&(Pl=!0,Yr=!0,La=!0),H.id!==L&&(L=H.id,Yr=!0),Pl||v!==y){Nt.setValue(I,"projectionMatrix",y.projectionMatrix),Nt.setValue(I,"viewMatrix",y.matrixWorldInverse);const jt=Nt.map.cameraPosition;jt!==void 0&&jt.setValue(I,Pe.setFromMatrixPosition(y.matrixWorld)),Ae.logarithmicDepthBuffer&&Nt.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Nt.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,Yr=!0,La=!0)}if(k.isSkinnedMesh){Nt.setOptional(I,k,"bindMatrix"),Nt.setOptional(I,k,"bindMatrixInverse");const jt=k.skeleton;jt&&(Ae.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),Nt.setValue(I,"boneTexture",jt.boneTexture,Ne),Nt.setValue(I,"boneTextureSize",jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Da=F.morphAttributes;if((Da.position!==void 0||Da.normal!==void 0||Da.color!==void 0&&Ae.isWebGL2===!0)&&Me.update(k,F,Pi),(Yr||Fe.receiveShadow!==k.receiveShadow)&&(Fe.receiveShadow=k.receiveShadow,Nt.setValue(I,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Li.envMap.value=ye,Li.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),Yr&&(Nt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&rf(Li,La),fe&&H.fog===!0&&ee.refreshFogUniforms(Li,fe),ee.refreshMaterialUniforms(Li,H,V,W,Se),Qs.upload(I,Rl(Fe),Li,Ne)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Qs.upload(I,Rl(Fe),Li,Ne),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Nt.setValue(I,"center",k.center),Nt.setValue(I,"modelViewMatrix",k.modelViewMatrix),Nt.setValue(I,"normalMatrix",k.normalMatrix),Nt.setValue(I,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const jt=H.uniformsGroups;for(let Ua=0,af=jt.length;Ua<af;Ua++)if(Ae.isWebGL2){const Ll=jt[Ua];Ee.update(Ll,Pi),Ee.bind(Ll,Pi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pi}function rf(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function sf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(y,U,F){Ie.get(y.texture).__webglTexture=U,Ie.get(y.depthTexture).__webglTexture=F;const H=Ie.get(y);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=F===void 0,H.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,U){const F=Ie.get(y);F.__webglFramebuffer=U,F.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,F=0){b=y,T=U,R=F;let H=!0,k=null,fe=!1,me=!1;if(y){const ye=Ie.get(y);ye.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(I.FRAMEBUFFER,null),H=!1):ye.__webglFramebuffer===void 0?Ne.setupRenderTarget(y):ye.__hasExternalTextures&&Ne.rebindTextures(y,Ie.get(y.texture).__webglTexture,Ie.get(y.depthTexture).__webglTexture);const De=y.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(me=!0);const Re=Ie.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?k=Re[U][F]:k=Re[U],fe=!0):Ae.isWebGL2&&y.samples>0&&Ne.useMultisampledRTT(y)===!1?k=Ie.get(y).__webglMultisampledFramebuffer:Array.isArray(Re)?k=Re[F]:k=Re,A.copy(y.viewport),z.copy(y.scissor),X=y.scissorTest}else A.copy(K).multiplyScalar(V).floor(),z.copy(D).multiplyScalar(V).floor(),X=G;if(Te.bindFramebuffer(I.FRAMEBUFFER,k)&&Ae.drawBuffers&&H&&Te.drawBuffers(y,k),Te.viewport(A),Te.scissor(z),Te.setScissorTest(X),fe){const ye=Ie.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,F)}else if(me){const ye=Ie.get(y.texture),De=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.__webglTexture,F||0,De)}L=-1},this.readRenderTargetPixels=function(y,U,F,H,k,fe,me){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ie.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){Te.bindFramebuffer(I.FRAMEBUFFER,xe);try{const ye=y.texture,De=ye.format,Re=ye.type;if(De!==bn&&ke.convert(De)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Re===us&&(_e.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Re!==Si&&ke.convert(Re)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Re===pi&&(Ae.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-H&&F>=0&&F<=y.height-k&&I.readPixels(U,F,H,k,ke.convert(De),ke.convert(Re),fe)}finally{const ye=b!==null?Ie.get(b).__webglFramebuffer:null;Te.bindFramebuffer(I.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(y,U,F=0){const H=Math.pow(2,-F),k=Math.floor(U.image.width*H),fe=Math.floor(U.image.height*H);Ne.setTexture2D(U,0),I.copyTexSubImage2D(I.TEXTURE_2D,F,0,0,y.x,y.y,k,fe),Te.unbindTexture()},this.copyTextureToTexture=function(y,U,F,H=0){const k=U.image.width,fe=U.image.height,me=ke.convert(F.format),xe=ke.convert(F.type);Ne.setTexture2D(F,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment),U.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,H,y.x,y.y,k,fe,me,xe,U.image.data):U.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,H,y.x,y.y,U.mipmaps[0].width,U.mipmaps[0].height,me,U.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,H,y.x,y.y,me,xe,U.image),H===0&&F.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(y,U,F,H,k=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=y.max.x-y.min.x+1,me=y.max.y-y.min.y+1,xe=y.max.z-y.min.z+1,ye=ke.convert(H.format),De=ke.convert(H.type);let Re;if(H.isData3DTexture)Ne.setTexture3D(H,0),Re=I.TEXTURE_3D;else if(H.isDataArrayTexture)Ne.setTexture2DArray(H,0),Re=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);const Ce=I.getParameter(I.UNPACK_ROW_LENGTH),lt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Kt=I.getParameter(I.UNPACK_SKIP_PIXELS),vt=I.getParameter(I.UNPACK_SKIP_ROWS),Vn=I.getParameter(I.UNPACK_SKIP_IMAGES),st=F.isCompressedTexture?F.mipmaps[0]:F.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,st.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,st.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,y.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,y.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,y.min.z),F.isDataTexture||F.isData3DTexture?I.texSubImage3D(Re,k,U.x,U.y,U.z,fe,me,xe,ye,De,st.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Re,k,U.x,U.y,U.z,fe,me,xe,ye,st.data)):I.texSubImage3D(Re,k,U.x,U.y,U.z,fe,me,xe,ye,De,st),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ce),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Kt),I.pixelStorei(I.UNPACK_SKIP_ROWS,vt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Vn),k===0&&H.generateMipmaps&&I.generateMipmap(Re),Te.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?Ne.setTextureCube(y,0):y.isData3DTexture?Ne.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ne.setTexture2DArray(y,0):Ne.setTexture2D(y,0),Te.unbindTexture()},this.resetState=function(){T=0,R=0,b=null,Te.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===tl?"display-p3":"srgb",t.unpackColorSpace=We.workingColorSpace===Sa?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tt?qi:Pu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qi?Tt:ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class p0 extends Ku{}p0.prototype.isWebGL1Renderer=!0;class m0 extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}const Jc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class _0{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const g0=new _0;class sl{constructor(e){this.manager=e!==void 0?e:g0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}sl.DEFAULT_MATERIAL_NAME="__DEFAULT";class v0 extends sl{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Jc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=hs("img");function l(){u(),Jc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class x0 extends sl{constructor(e){super(e)}load(e,t,n,i){const s=new Vt,a=new v0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class S0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Qc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Qc(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);function jn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ju(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fr={duration:.5,overwrite:!1,delay:0},al,Dt,at,mn=1e8,Ze=1/mn,Uo=Math.PI*2,M0=Uo/4,E0=0,Zu=Math.sqrt,y0=Math.cos,T0=Math.sin,yt=function(e){return typeof e=="string"},ot=function(e){return typeof e=="function"},si=function(e){return typeof e=="number"},ol=function(e){return typeof e>"u"},Gn=function(e){return typeof e=="object"},kt=function(e){return e!==!1},ll=function(){return typeof window<"u"},$s=function(e){return ot(e)||yt(e)},$u=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ut=Array.isArray,Io=/(?:-?\.?\d|\.)+/gi,Ju=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ar=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ho=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Qu=/[+-]=-?[.\d]+/,eh=/[^,'"\[\]\s]+/gi,b0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,et,cn,No,cl,sn={},ca={},th,nh=function(e){return(ca=nr(e,sn))&&qt},ul=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ua=function(e,t){return!t&&console.warn(e)},ih=function(e,t){return e&&(sn[e]=t)&&ca&&(ca[e]=t)||sn},fs=function(){return 0},A0={suppressEvents:!0,isStart:!0,kill:!1},ea={suppressEvents:!0,kill:!1},w0={suppressEvents:!0},hl={},Mi=[],Oo={},rh,Jt={},fo={},eu=30,ta=[],fl="",dl=function(e){var t=e[0],n,i;if(Gn(t)||ot(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ta.length;i--&&!ta[i].targetTest(t););n=ta[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Rh(e[i],n)))||e.splice(i,1);return e},Ki=function(e){return e._gsap||dl(_n(e))[0]._gsap},sh=function(e,t,n){return(n=e[t])&&ot(n)?e[t]():ol(n)&&e.getAttribute&&e.getAttribute(t)||n},Wt=function(e,t){return(e=e.split(",")).forEach(t)||e},ct=function(e){return Math.round(e*1e5)/1e5||0},bt=function(e){return Math.round(e*1e7)/1e7||0},Pr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},R0=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ha=function(){var e=Mi.length,t=Mi.slice(0),n,i;for(Oo={},Mi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ah=function(e,t,n,i){Mi.length&&!Dt&&ha(),e.render(t,n,i||Dt&&t<0&&(e._initted||e._startAt)),Mi.length&&!Dt&&ha()},oh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(eh).length<2?t:yt(e)?e.trim():e},lh=function(e){return e},xn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},C0=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},nr=function(e,t){for(var n in t)e[n]=t[n];return e},tu=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Gn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},fa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ss=function(e){var t=e.parent||et,n=e.keyframes?C0(Ut(e.keyframes)):xn;if(kt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},P0=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ch=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},ba=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ai=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ji=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},L0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Fo=function(e,t,n,i){return e._startAt&&(Dt?e._startAt.revert(ea):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},D0=function r(e){return!e||e._ts&&r(e.parent)},nu=function(e){return e._repeat?Br(e._tTime,e=e.duration()+e._rDelay)*e:0},Br=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},da=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Aa=function(e){return e._end=bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ze)||0))},wa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Aa(e),n._dirty||ji(n,e)),e},uh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=da(e.rawTime(),t),(!t._dur||As(0,t.totalDuration(),n)-t._tTime>Ze)&&t.render(n,!0)),ji(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ze}},Ln=function(e,t,n,i){return t.parent&&Ai(t),t._start=bt((si(n)?n:n||e!==et?ln(e,n,t):e._time)+t._delay),t._end=bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ch(e,t,"_first","_last",e._sort?"_start":0),Bo(t)||(e._recent=t),i||uh(e,t),e._ts<0&&wa(e,e._tTime),e},hh=function(e,t){return(sn.ScrollTrigger||ul("scrollTrigger",t))&&sn.ScrollTrigger.create(t,e)},fh=function(e,t,n,i,s){if(ml(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Dt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&rh!==tn.frame)return Mi.push(e),e._lazy=[s,i],1},U0=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Bo=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},I0=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&U0(e)&&!(!e._initted&&Bo(e))||(e._ts<0||e._dp._ts<0)&&!Bo(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=As(0,e._tDur,t),u=Br(l,o),e._yoyo&&u&1&&(a=1-a),u!==Br(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Dt||i||e._zTime===Ze||!t&&e._zTime){if(!e._initted&&fh(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Ze:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Fo(e,t,n,!0),e._onUpdate&&!n&&gn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&gn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ai(e,1),!n&&!Dt&&(gn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},N0=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},zr=function(e,t,n,i){var s=e._repeat,a=bt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:bt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&wa(e,e._tTime=e._tDur*o),e.parent&&Aa(e),n||ji(e.parent,e),e},iu=function(e){return e instanceof Gt?ji(e):zr(e,e._dur)},O0={_start:0,endTime:fs,totalDuration:fs},ln=function r(e,t,n){var i=e.labels,s=e._recent||O0,a=e.duration()>=mn?s.endTime(!1):e._dur,o,l,c;return yt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Ut(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},as=function(e,t,n){var i=si(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=kt(l.vars.inherit)&&l.parent;a.immediateRender=kt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new dt(t[0],a,t[s+1])},Ci=function(e,t){return e||e===0?t(e):t},As=function(e,t,n){return n<e?e:n>t?t:n},Lt=function(e,t){return!yt(e)||!(t=b0.exec(e))?"":t[1]},F0=function(e,t,n){return Ci(n,function(i){return As(e,t,i)})},zo=[].slice,dh=function(e,t){return e&&Gn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Gn(e[0]))&&!e.nodeType&&e!==cn},B0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return yt(i)&&!t||dh(i,1)?(s=n).push.apply(s,_n(i)):n.push(i)})||n},_n=function(e,t,n){return at&&!t&&at.selector?at.selector(e):yt(e)&&!n&&(No||!Gr())?zo.call((t||cl).querySelectorAll(e),0):Ut(e)?B0(e,n):dh(e)?zo.call(e,0):e?[e]:[]},Go=function(e){return e=_n(e)[0]||ua("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return _n(t,n.querySelectorAll?n:n===e?ua("Invalid scope")||cl.createElement("div"):e)}},ph=function(e){return e.sort(function(){return .5-Math.random()})},mh=function(e){if(ot(e))return e;var t=Gn(e)?e:{each:e},n=Zi(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return yt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,m,g){var _=(g||t).length,p=a[_],d,E,x,M,T,R,b,L,v;if(!p){if(v=t.grid==="auto"?0:(t.grid||[1,mn])[1],!v){for(b=-mn;b<(b=g[v++].getBoundingClientRect().left)&&v<_;);v--}for(p=a[_]=[],d=l?Math.min(v,_)*u-.5:i%v,E=v===mn?0:l?_*h/v-.5:i/v|0,b=0,L=mn,R=0;R<_;R++)x=R%v-d,M=E-(R/v|0),p[R]=T=c?Math.abs(c==="y"?M:x):Zu(x*x+M*M),T>b&&(b=T),T<L&&(L=T);i==="random"&&ph(p),p.max=b-L,p.min=L,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Lt(t.amount||t.each)||0,n=n&&_<0?bh(n):n}return _=(p[f]-p.min)/p.max||0,bt(p.b+(n?n(_):_)*p.v)+p.u}},Ho=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=bt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(si(n)?0:Lt(n))}},_h=function(e,t){var n=Ut(e),i,s;return!n&&Gn(e)&&(i=n=e.radius||mn,e.values?(e=_n(e.values),(s=!si(e[0]))&&(i*=i)):e=Ho(e.increment)),Ci(t,n?ot(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=mn,u=0,h=e.length,f,m;h--;)s?(f=e[h].x-o,m=e[h].y-l,f=f*f+m*m):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,s||u===a||si(a)?u:u+Lt(a)}:Ho(e))},gh=function(e,t,n,i){return Ci(Ut(e)?!t:n===!0?!!(n=0):!i,function(){return Ut(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},z0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},G0=function(e,t){return function(n){return e(parseFloat(n))+(t||Lt(n))}},H0=function(e,t,n){return xh(e,t,0,1,n)},vh=function(e,t,n){return Ci(n,function(i){return e[~~t(i)]})},V0=function r(e,t,n){var i=t-e;return Ut(e)?vh(e,r(0,e.length),t):Ci(n,function(s){return(i+(s-e)%i)%i+e})},k0=function r(e,t,n){var i=t-e,s=i*2;return Ut(e)?vh(e,r(0,e.length-1),t):Ci(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},ds=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?eh:Io),n+=e.substr(t,i-t)+gh(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},xh=function(e,t,n,i,s){var a=t-e,o=i-n;return Ci(s,function(l){return n+((l-e)/a*o||0)})},W0=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var a=yt(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Ut(e)&&!Ut(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=nr(Ut(e)?[]:{},e));if(!u){for(l in t)pl.call(o,e,l,"get",t[l]);s=function(g){return vl(g,o)||(a?e.p:e)}}}return Ci(n,s)},ru=function(e,t,n){var i=e.labels,s=mn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},gn=function(e,t,n){var i=e.vars,s=i[t],a=at,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Mi.length&&ha(),o&&(at=o),u=l?s.apply(c,l):s.call(c),at=a,u},ts=function(e){return Ai(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Dt),e.progress()<1&&gn(e,"onInterrupt"),e},wr,Sh=[],Mh=function(e){if(ll()&&e){e=!e.name&&e.default||e;var t=e.name,n=ot(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:fs,render:vl,add:pl,kill:av,modifier:sv,rawVars:0},a={targetTest:0,get:0,getSetter:gl,aliases:{},register:0};if(Gr(),e!==i){if(Jt[t])return;xn(i,xn(fa(e,s),a)),nr(i.prototype,nr(s,fa(e,a))),Jt[i.prop=t]=i,e.targetTest&&(ta.push(i),hl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ih(t,i),e.register&&e.register(qt,i,Xt)}else e&&Sh.push(e)},Ye=255,ns={aqua:[0,Ye,Ye],lime:[0,Ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ye],navy:[0,0,128],white:[Ye,Ye,Ye],olive:[128,128,0],yellow:[Ye,Ye,0],orange:[Ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ye,0,0],pink:[Ye,192,203],cyan:[0,Ye,Ye],transparent:[Ye,Ye,Ye,0]},po=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ye+.5|0},Eh=function(e,t,n){var i=e?si(e)?[e>>16,e>>8&Ye,e&Ye]:0:ns.black,s,a,o,l,c,u,h,f,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ns[e])i=ns[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ye,i&Ye,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ye,e&Ye]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Io),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=po(l+1/3,s,a),i[1]=po(l,s,a),i[2]=po(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Ju),n&&i.length<4&&(i[3]=1),i}else i=e.match(Io)||ns.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Ye,a=i[1]/Ye,o=i[2]/Ye,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===s?(a-o)/m+(a<o?6:0):h===a?(o-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},yh=function(e){var t=[],n=[],i=-1;return e.split(Ei).forEach(function(s){var a=s.match(Ar)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},su=function(e,t,n){var i="",s=(e+i).match(Ei),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Eh(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=yh(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Ei,"1").split(Ar),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Ei),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},Ei=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ns)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),X0=/hsl[a]?\(/,Th=function(e){var t=e.join(" "),n;if(Ei.lastIndex=0,Ei.test(t))return n=X0.test(t),e[1]=su(e[1],n),e[0]=su(e[0],n,yh(e[1])),!0},ps,tn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,m,g=function _(p){var d=r()-i,E=p===!0,x,M,T,R;if(d>e&&(n+=d-t),i+=d,T=i-n,x=T-a,(x>0||E)&&(R=++h.frame,f=T-h.time*1e3,h.time=T=T/1e3,a+=x+(x>=s?4:s-x),M=1),E||(l=c(_)),M)for(m=0;m<o.length;m++)o[m](T,f,R,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){th&&(!No&&ll()&&(cn=No=window,cl=cn.document||{},sn.gsap=qt,(cn.gsapVersions||(cn.gsapVersions=[])).push(qt.version),nh(ca||cn.GreenSockGlobals||!cn.gsap&&cn||{}),u=cn.requestAnimationFrame,Sh.forEach(Mh)),l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},ps=1,g(2))},sleep:function(){(u?cn.cancelAnimationFrame:clearTimeout)(l),ps=0,c=fs},lagSmoothing:function(p,d){e=p||1/0,t=Math.min(d||33,e)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,d,E){var x=d?function(M,T,R,b){p(M,T,R,b),h.remove(x)}:p;return h.remove(p),o[E?"unshift":"push"](x),Gr(),x},remove:function(p,d){~(d=o.indexOf(p))&&o.splice(d,1)&&m>=d&&m--},_listeners:o},h}(),Gr=function(){return!ps&&tn.wake()},ze={},q0=/^[\d.\-M][\d.\-,\s]/,Y0=/["']/g,K0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Y0,"").trim():+c,i=l.substr(o+1).trim();return t},j0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Z0=function(e){var t=(e+"").split("("),n=ze[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[K0(t[1])]:j0(e).split(",").map(oh)):ze._CE&&q0.test(e)?ze._CE("",e):n},bh=function(e){return function(t){return 1-e(1-t)}},Ah=function r(e,t){for(var n=e._first,i;n;)n instanceof Gt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Zi=function(e,t){return e&&(ot(e)?e:ze[e]||Z0(e))||t},ar=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Wt(e,function(o){ze[o]=sn[o]=s,ze[a=o.toLowerCase()]=n;for(var l in s)ze[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ze[o+"."+l]=s[l]}),s},wh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},mo=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Uo*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*T0((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:wh(o);return s=Uo/s,l.config=function(c,u){return r(e,c,u)},l},_o=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:wh(n);return i.config=function(s){return r(e,s)},i};Wt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ar(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ze.Linear.easeNone=ze.none=ze.Linear.easeIn;ar("Elastic",mo("in"),mo("out"),mo());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ar("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ar("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});ar("Circ",function(r){return-(Zu(1-r*r)-1)});ar("Sine",function(r){return r===1?1:-y0(r*M0)+1});ar("Back",_o("in"),_o("out"),_o());ze.SteppedEase=ze.steps=sn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Ze;return function(o){return((i*As(0,a,o)|0)+s)*n}}};Fr.ease=ze["quad.out"];Wt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return fl+=r+","+r+"Params,"});var Rh=function(e,t){this.id=E0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:sh,this.set=t?t.getSetter:gl},ms=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,zr(this,+t.duration,1,1),this.data=t.data,at&&(this._ctx=at,at.data.push(this)),ps||tn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,zr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Gr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(wa(this,n),!s._dp||s.parent||uh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ln(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ze||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ah(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+nu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+nu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Br(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ze?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?da(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ze?0:this._rts,this.totalTime(As(-Math.abs(this._delay),this._tDur,i),!0),Aa(this),L0(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Gr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ze&&(this._tTime-=Ze)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ln(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(kt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?da(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=w0);var i=Dt;return Dt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Dt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,iu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,iu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ln(this,n),kt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,kt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ze:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ze,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ze)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=ot(n)?n:lh,o=function(){var c=i.then;i.then=null,ot(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){ts(this)},r}();xn(ms.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ze,_prom:0,_ps:!1,_rts:1});var Gt=function(r){ju(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=kt(n.sortChildren),et&&Ln(n.parent||et,jn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&hh(jn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return as(0,arguments,this),this},t.from=function(i,s,a){return as(1,arguments,this),this},t.fromTo=function(i,s,a,o){return as(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ss(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new dt(i,s,ln(this,a),1),this},t.call=function(i,s,a){return Ln(this,dt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new dt(i,a,ln(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ss(a).immediateRender=kt(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,ss(o).immediateRender=kt(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:bt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,_,p,d,E,x,M,T,R,b;if(this!==et&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,M=this._start,x=this._ts,d=!x,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(R=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=bt(u%p),u===l?(_=this._repeat,f=c):(_=~~(u/p),_&&_===u/p&&(f=c,_--),f>c&&(f=c)),T=Br(this._tTime,p),!o&&this._tTime&&T!==_&&this._tTime-T*p-this._dur<=0&&(T=_),R&&_&1&&(f=c-f,b=1),_!==T&&!this._lock){var L=R&&T&1,v=L===(R&&_&1);if(_<T&&(L=!L),o=L?0:u%c?c:u,this._lock=1,this.render(o||(b?0:bt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&gn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=L?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Ah(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=N0(this,bt(o),bt(f)),E&&(u-=f-(f=E._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!_&&(gn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&E!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,a),f!==this._time||!this._ts&&!d){E=0,g&&(u+=this._zTime=-Ze);break}}m=g}else{m=this._last;for(var A=i<0?i:f;m;){if(g=m._prev,(m._act||A<=m._end)&&m._ts&&E!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(A-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(A-m._start)*m._ts,s,a||Dt&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!d){E=0,g&&(u+=this._zTime=A?-Ze:Ze);break}}m=g}}if(E&&!s&&(this.pause(),E.render(f>=o?0:-Ze)._zTime=f>=o?1:-1,this._ts))return this._start=M,Aa(this),this.render(i,s,a);this._onUpdate&&!s&&gn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ai(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(gn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(si(s)||(s=ln(this,s,i)),!(i instanceof ms)){if(Ut(i))return i.forEach(function(o){return a.add(o,s)}),this;if(yt(i))return this.addLabel(i,s);if(ot(i))i=dt.delayedCall(0,i);else return this}return this!==i?Ln(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-mn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof dt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return yt(i)?this.removeLabel(i):ot(i)?this.killTweensOf(i):(ba(this,i),i===this._recent&&(this._recent=this._last),ji(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(tn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ln(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=dt.delayedCall(0,s||fs,a);return o.data="isPause",this._hasPause=1,Ln(this,o,ln(this,i))},t.removePause=function(i){var s=this._first;for(i=ln(this,i);s;)s._start===i&&s.data==="isPause"&&Ai(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)mi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=_n(i),l=this._first,c=si(s),u;l;)l instanceof dt?R0(l._targets,o)&&(c?(!mi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=ln(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=dt.to(a,xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ze,onStart:function(){if(a.pause(),!m){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&zr(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,xn({startAt:{time:ln(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ru(this,ln(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ru(this,ln(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ze)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return ji(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ji(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=mn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ln(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;zr(a,a===et&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(et._ts&&(ah(et,da(i,et)),rh=tn.frame),tn.frame>=eu){eu+=rn.autoSleep||120;var s=et._first;if((!s||!s._ts)&&rn.autoSleep&&tn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||tn.sleep()}}},e}(ms);xn(Gt.prototype,{_lock:0,_hasPause:0,_forcing:0});var $0=function(e,t,n,i,s,a,o){var l=new Xt(this._pt,e,t,0,1,Ih,null,s),c=0,u=0,h,f,m,g,_,p,d,E;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=ds(i)),a&&(E=[n,i],a(E,e,t),n=E[0],i=E[1]),f=n.match(ho)||[];h=ho.exec(i);)g=h[0],_=i.substring(c,h.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?Pr(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=ho.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Qu.test(i)||d)&&(l.e=0),this._pt=l,l},pl=function(e,t,n,i,s,a,o,l,c,u){ot(i)&&(i=i(s||0,e,a));var h=e[t],f=n!=="get"?n:ot(h)?c?e[t.indexOf("set")||!ot(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,m=ot(h)?c?nv:Dh:_l,g;if(yt(i)&&(~i.indexOf("random(")&&(i=ds(i)),i.charAt(1)==="="&&(g=Pr(f,i)+(Lt(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Vo)return!isNaN(f*i)&&i!==""?(g=new Xt(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?rv:Uh,0,m),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&ul(t,i),$0.call(this,e,t,f,i,m,l||rn.stringFilter,c))},J0=function(e,t,n,i,s){if(ot(e)&&(e=os(e,s,t,n,i)),!Gn(e)||e.style&&e.nodeType||Ut(e)||$u(e))return yt(e)?os(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=os(e[o],s,t,n,i);return a},Ch=function(e,t,n,i,s,a){var o,l,c,u;if(Jt[e]&&(o=new Jt[e]).init(s,o.rawVars?t[e]:J0(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Xt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==wr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},mi,Vo,ml=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,g=i.keyframes,_=i.autoRevert,p=e._dur,d=e._startAt,E=e._targets,x=e.parent,M=x&&x.data==="nested"?x.vars.targets:E,T=e._overwrite==="auto"&&!al,R=e.timeline,b,L,v,A,z,X,Y,C,N,W,V,Z,j;if(R&&(!g||!s)&&(s="none"),e._ease=Zi(s,Fr.ease),e._yEase=m?bh(Zi(m===!0?s:m,Fr.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!R&&!!i.runBackwards,!R||g&&!i.stagger){if(C=E[0]?Ki(E[0]).harness:0,Z=C&&i[C.prop],b=fa(i,hl),d&&(d._zTime<0&&d.progress(1),t<0&&f&&o&&!_?d.render(-1,!0):d.revert(f&&p?ea:A0),d._lazy=0),a){if(Ai(e._startAt=dt.set(E,xn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!d&&kt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dt||!o&&!_)&&e._startAt.revert(ea),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&p&&!d){if(t&&(o=!1),v=xn({overwrite:!1,data:"isFromStart",lazy:o&&!d&&kt(l),immediateRender:o,stagger:0,parent:x},b),Z&&(v[C.prop]=Z),Ai(e._startAt=dt.set(E,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Dt?e._startAt.revert(ea):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Ze,Ze);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&kt(l)||l&&!p,L=0;L<E.length;L++){if(z=E[L],Y=z._gsap||dl(E)[L]._gsap,e._ptLookup[L]=W={},Oo[Y.id]&&Mi.length&&ha(),V=M===E?L:M.indexOf(z),C&&(N=new C).init(z,Z||b,e,V,M)!==!1&&(e._pt=A=new Xt(e._pt,z,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(K){W[K]=A}),N.priority&&(X=1)),!C||Z)for(v in b)Jt[v]&&(N=Ch(v,b,e,V,z,M))?N.priority&&(X=1):W[v]=A=pl.call(e,z,v,"get",b[v],V,M,0,i.stringFilter);e._op&&e._op[L]&&e.kill(z,e._op[L]),T&&e._pt&&(mi=e,et.killTweensOf(z,W,e.globalTime(t)),j=!e.parent,mi=0),e._pt&&l&&(Oo[Y.id]=1)}X&&Nh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,g&&t<=0&&R.render(mn,!0,!0)},Q0=function(e,t,n,i,s,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Vo=1,e.vars[t]="+=0",ml(e,o),Vo=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=ct(n)+Lt(u.e)),u.b&&(u.b=c.s+Lt(u.b))},ev=function(e,t){var n=e[0]?Ki(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=nr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},tv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Ut(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},os=function(e,t,n,i,s){return ot(e)?e.call(t,n,i,s):yt(e)&&~e.indexOf("random(")?ds(e):e},Ph=fl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Lh={};Wt(Ph+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Lh[r]=1});var dt=function(r){ju(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ss(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,d=l.yoyoEase,E=i.parent||et,x=(Ut(n)||$u(n)?si(n[0]):"length"in i)?[n]:_n(n),M,T,R,b,L,v,A,z;if(o._targets=x.length?dl(x):ua("GSAP target "+n+" not found. https://greensock.com",!rn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||f||$s(c)||$s(u)){if(i=o.vars,M=o.timeline=new Gt({data:"nested",defaults:_||{},targets:E&&E.data==="nested"?E.vars.targets:x}),M.kill(),M.parent=M._dp=jn(o),M._start=0,f||$s(c)||$s(u)){if(b=x.length,A=f&&mh(f),Gn(f))for(L in f)~Ph.indexOf(L)&&(z||(z={}),z[L]=f[L]);for(T=0;T<b;T++)R=fa(i,Lh),R.stagger=0,d&&(R.yoyoEase=d),z&&nr(R,z),v=x[T],R.duration=+os(c,jn(o),T,v,x),R.delay=(+os(u,jn(o),T,v,x)||0)-o._delay,!f&&b===1&&R.delay&&(o._delay=u=R.delay,o._start+=u,R.delay=0),M.to(v,R,A?A(T,v,x):0),M._ease=ze.none;M.duration()?c=u=0:o.timeline=0}else if(g){ss(xn(M.vars.defaults,{ease:"none"})),M._ease=Zi(g.ease||i.ease||"none");var X=0,Y,C,N;if(Ut(g))g.forEach(function(W){return M.to(x,W,">")}),M.duration();else{R={};for(L in g)L==="ease"||L==="easeEach"||tv(L,g[L],R,g.easeEach);for(L in R)for(Y=R[L].sort(function(W,V){return W.t-V.t}),X=0,T=0;T<Y.length;T++)C=Y[T],N={ease:C.e,duration:(C.t-(T?Y[T-1].t:0))/100*c},N[L]=C.v,M.to(x,N,X),X+=N.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return m===!0&&!al&&(mi=jn(o),et.killTweensOf(x),mi=0),Ln(E,jn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===bt(E._time)&&kt(h)&&D0(jn(o))&&E.data!=="nested")&&(o._tTime=-Ze,o.render(Math.max(0,-u)||0)),p&&hh(jn(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Ze&&!u?l:i<Ze?0:i,f,m,g,_,p,d,E,x,M;if(!c)I0(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(f=bt(h%_),h===l?(g=this._repeat,f=c):(g=~~(h/_),g&&g===h/_&&(f=c,g--),f>c&&(f=c)),d=this._yoyo&&g&1,d&&(M=this._yEase,f=c-f),p=Br(this._tTime,_),f===o&&!a&&this._initted)return this._tTime=h,this;g!==p&&(x&&this._yEase&&Ah(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=a=1,this.render(bt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(fh(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(M||this._ease)(f/c),this._from&&(this.ratio=E=1-E),f&&!o&&!s&&!g&&(gn(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(E,m.d),m=m._next;x&&x.render(i<0?i:!f&&d?-Ze:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Fo(this,i,s,a),gn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&gn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Fo(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ai(this,1),!s&&!(u&&!o)&&(h||o||d)&&(gn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o){ps||tn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||ml(this,l),c=this._ease(l/this._dur),Q0(this,i,s,a,o,c,l)?this.resetTo(i,s,a,o):(wa(this,0),this.parent||ch(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ts(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,mi&&mi.vars.overwrite!==!0)._first||ts(this),this.parent&&a!==this.timeline.totalDuration()&&zr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?_n(i):o,c=this._ptLookup,u=this._pt,h,f,m,g,_,p,d;if((!s||s==="all")&&P0(o,l))return s==="all"&&(this._pt=0),ts(this);for(h=this._op=this._op||[],s!=="all"&&(yt(s)&&(_={},Wt(s,function(E){return _[E]=1}),s=_),s=ev(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){f=c[d],s==="all"?(h[d]=s,g=f,m={}):(m=h[d]=h[d]||{},g=s);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&ba(this,p,"_pt"),delete f[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&u&&ts(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return as(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return as(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return et.killTweensOf(i,s,a)},e}(ms);xn(dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wt("staggerTo,staggerFrom,staggerFromTo",function(r){dt[r]=function(){var e=new Gt,t=zo.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var _l=function(e,t,n){return e[t]=n},Dh=function(e,t,n){return e[t](n)},nv=function(e,t,n,i){return e[t](i.fp,n)},iv=function(e,t,n){return e.setAttribute(t,n)},gl=function(e,t){return ot(e[t])?Dh:ol(e[t])&&e.setAttribute?iv:_l},Uh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},rv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ih=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},vl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},sv=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},av=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ba(this,t,"_pt"):t.dep||(n=1),t=i;return!n},ov=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Nh=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Xt=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Uh,this.d=l||this,this.set=c||_l,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=ov,this.m=n,this.mt=s,this.tween=i},r}();Wt(fl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return hl[r]=1});sn.TweenMax=sn.TweenLite=dt;sn.TimelineLite=sn.TimelineMax=Gt;et=new Gt({sortChildren:!1,defaults:Fr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});rn.stringFilter=Th;var $i=[],na={},lv=[],au=0,cv=0,go=function(e){return(na[e]||lv).map(function(t){return t()})},ko=function(){var e=Date.now(),t=[];e-au>2&&(go("matchMediaInit"),$i.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=cn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),go("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),au=e,go("matchMedia"))},Oh=function(){function r(t,n){this.selector=n&&Go(n),this.data=[],this._r=[],this.isReverted=!1,this.id=cv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){ot(n)&&(s=i,i=n,n=ot);var a=this,o=function(){var c=at,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Go(s)),at=a,h=i.apply(a,arguments),ot(h)&&a._r.push(h),at=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===ot?o(a):n?a[n]=o:o},e.ignore=function(n){var i=at;at=null,n(this),at=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof dt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof dt)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var o=$i.length;o--;)$i[o].id===this.id&&$i.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),uv=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){Gn(n)||(n={matches:n});var a=new Oh(0,s||this.scope),o=a.conditions={},l,c,u;at&&!a.selector&&(a.selector=at.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=cn.matchMedia(n[c]),l&&($i.indexOf(a)<0&&$i.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(ko):l.addEventListener("change",ko)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),pa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Mh(i)})},timeline:function(e){return new Gt(e)},getTweensOf:function(e,t){return et.getTweensOf(e,t)},getProperty:function(e,t,n,i){yt(e)&&(e=_n(e)[0]);var s=Ki(e||{}).get,a=n?lh:oh;return n==="native"&&(n=""),e&&(t?a((Jt[t]&&Jt[t].get||s)(e,t,n,i)):function(o,l,c){return a((Jt[o]&&Jt[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=_n(e),e.length>1){var i=e.map(function(u){return qt.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=Jt[t],o=Ki(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;wr._pt=0,h.init(e,n?u+n:u,wr,0,[e]),h.render(1,h),wr._pt&&vl(1,wr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=qt.to(e,nr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return et.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Zi(e.ease,Fr.ease)),tu(Fr,e||{})},config:function(e){return tu(rn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Jt[o]&&!sn[o]&&ua(t+" effect requires "+o+" plugin.")}),fo[t]=function(o,l,c){return n(_n(o),xn(l||{},s),c)},a&&(Gt.prototype[t]=function(o,l,c){return this.add(fo[t](o,Gn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ze[e]=Zi(t)},parseEase:function(e,t){return arguments.length?Zi(e,t):ze},getById:function(e){return et.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Gt(e),i,s;for(n.smoothChildTiming=kt(e.smoothChildTiming),et.remove(n),n._dp=0,n._time=n._tTime=et._time,i=et._first;i;)s=i._next,(t||!(!i._dur&&i instanceof dt&&i.vars.onComplete===i._targets[0]))&&Ln(n,i,i._start-i._delay),i=s;return Ln(et,n,0),n},context:function(e,t){return e?new Oh(e,t):at},matchMedia:function(e){return new uv(e)},matchMediaRefresh:function(){return $i.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ko()},addEventListener:function(e,t){var n=na[e]||(na[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=na[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:V0,wrapYoyo:k0,distribute:mh,random:gh,snap:_h,normalize:H0,getUnit:Lt,clamp:F0,splitColor:Eh,toArray:_n,selector:Go,mapRange:xh,pipe:z0,unitize:G0,interpolate:W0,shuffle:ph},install:nh,effects:fo,ticker:tn,updateRoot:Gt.updateRoot,plugins:Jt,globalTimeline:et,core:{PropTween:Xt,globals:ih,Tween:dt,Timeline:Gt,Animation:ms,getCache:Ki,_removeLinkedListItem:ba,reverting:function(){return Dt},context:function(e){return e&&at&&(at.data.push(e),e._ctx=at),at},suppressOverwrites:function(e){return al=e}}};Wt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return pa[r]=dt[r]});tn.add(Gt.updateRoot);wr=pa.to({},{duration:0});var hv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},fv=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=hv(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},vo=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(yt(s)&&(l={},Wt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}fv(o,s)}}}},qt=pa.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Dt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},vo("roundProps",Ho),vo("modifiers"),vo("snap",_h))||pa;dt.version=Gt.version=qt.version="3.12.2";th=1;ll()&&Gr();ze.Power0;ze.Power1;ze.Power2;ze.Power3;ze.Power4;ze.Linear;ze.Quad;ze.Cubic;ze.Quart;ze.Quint;ze.Strong;ze.Elastic;ze.Back;ze.SteppedEase;ze.Bounce;ze.Sine;ze.Expo;ze.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ou,_i,Lr,xl,ki,lu,Sl,dv=function(){return typeof window<"u"},ai={},Gi=180/Math.PI,Dr=Math.PI/180,yr=Math.atan2,cu=1e8,Ml=/([A-Z])/g,pv=/(left|right|width|margin|padding|x)/i,mv=/[\s,\(]\S/,Un={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_v=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Fh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Bh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},xv=function(e,t,n){return e.style[t]=n},Sv=function(e,t,n){return e.style.setProperty(t,n)},Mv=function(e,t,n){return e._gsap[t]=n},Ev=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},yv=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Tv=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},nt="transform",An=nt+"Origin",bv=function r(e,t){var n=this,i=this.target,s=i.style;if(e in ai&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Un[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Zn(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Zn(i,e);else return Un.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(nt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(An,t,"")),e=nt}(s||t)&&this.props.push(e,t,s[e])},zh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Av=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ml,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Sl(),(!s||!s.isStart)&&!n[nt]&&(zh(n),i.uncache=1)}},Gh=function(e,t){var n={target:e,props:[],revert:Av,save:bv};return e._gsap||qt.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Hh,Xo=function(e,t){var n=_i.createElementNS?_i.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):_i.createElement(e);return n.style?n:_i.createElement(e)},Bn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ml,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Hr(t)||t,1)||""},uu="O,Moz,ms,Ms,Webkit".split(","),Hr=function(e,t,n){var i=t||ki,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(uu[a]+e in s););return a<0?null:(a===3?"ms":a>=0?uu[a]:"")+e},qo=function(){dv()&&window.document&&(ou=window,_i=ou.document,Lr=_i.documentElement,ki=Xo("div")||{style:{}},Xo("div"),nt=Hr(nt),An=nt+"Origin",ki.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hh=!!Hr("perspective"),Sl=qt.core.reverting,xl=1)},xo=function r(e){var t=Xo("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(Lr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Lr.removeChild(t),this.style.cssText=s,a},hu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Vh=function(e){var t;try{t=e.getBBox()}catch{t=xo.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===xo||(t=xo.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+hu(e,["x","cx","x1"])||0,y:+hu(e,["y","cy","y1"])||0,width:0,height:0}:t},kh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Vh(e))},_s=function(e,t){if(t){var n=e.style;t in ai&&t!==An&&(t=nt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Ml,"-$1").toLowerCase())):n.removeAttribute(t)}},gi=function(e,t,n,i,s,a){var o=new Xt(e._pt,t,n,0,1,a?Bh:Fh);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},fu={deg:1,rad:1,turn:1},wv={grid:1,flex:1},wi=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ki.style,l=pv.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,_,p,d;return i===a||!s||fu[i]||fu[a]?s:(a!=="px"&&!f&&(s=r(e,t,n,"px")),d=e.getCTM&&kh(e),(m||a==="%")&&(ai[t]||~t.indexOf("adius"))?(g=d?e.getBBox()[l?"width":"height"]:e[u],ct(m?s/g*h:s/100*g)):(o[l?"width":"height"]=h+(f?a:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===_i||!_.appendChild)&&(_=_i.body),p=_._gsap,p&&m&&p.width&&l&&p.time===tn.time&&!p.uncache?ct(s/p.width*h):((m||a==="%")&&!wv[Bn(_,"display")]&&(o.position=Bn(e,"position")),_===e&&(o.position="static"),_.appendChild(ki),g=ki[u],_.removeChild(ki),o.position="absolute",l&&m&&(p=Ki(_),p.time=tn.time,p.width=_[u]),ct(f?g*s/h:g&&s?h/g*s:0))))},Zn=function(e,t,n,i){var s;return xl||qo(),t in Un&&t!=="transform"&&(t=Un[t],~t.indexOf(",")&&(t=t.split(",")[0])),ai[t]&&t!=="transform"?(s=vs(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:_a(Bn(e,An))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ma[t]&&ma[t](e,t,n)||Bn(e,t)||sh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?wi(e,t,s,n)+n:s},Rv=function(e,t,n,i){if(!n||n==="none"){var s=Hr(t,e,1),a=s&&Bn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Bn(e,"borderTopColor"))}var o=new Xt(this._pt,e.style,t,0,1,Ih),l=0,c=0,u,h,f,m,g,_,p,d,E,x,M,T;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Bn(e,t)||i,e.style[t]=n),u=[n,i],Th(u),n=u[0],i=u[1],f=n.match(Ar)||[],T=i.match(Ar)||[],T.length){for(;h=Ar.exec(i);)p=h[0],E=i.substring(l,h.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(m=parseFloat(_)||0,M=_.substr((m+"").length),p.charAt(1)==="="&&(p=Pr(m,p)+M),d=parseFloat(p),x=p.substr((d+"").length),l=Ar.lastIndex-x.length,x||(x=x||rn.units[t]||M,l===i.length&&(i+=x,o.e+=x)),M!==x&&(m=wi(e,t,_,x)||0),o._pt={_next:o._pt,p:E||c===1?E:",",s:m,c:d-m,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Bh:Fh;return Qu.test(i)&&(o.e=0),this._pt=o,o},du={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Cv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=du[n]||n,t[1]=du[i]||i,t.join(" ")},Pv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ai[o]&&(l=1,o=o==="transformOrigin"?An:nt),_s(n,o);l&&(_s(n,nt),a&&(a.svg&&n.removeAttribute("transform"),vs(n,1),a.uncache=1,zh(i)))}},ma={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Xt(e._pt,t,n,0,0,Pv);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},gs=[1,0,0,1,0,0],Wh={},Xh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},pu=function(e){var t=Bn(e,nt);return Xh(t)?gs:t.substr(7).match(Ju).map(ct)},El=function(e,t){var n=e._gsap||Ki(e),i=e.style,s=pu(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?gs:s):(s===gs&&!e.offsetParent&&e!==Lr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Lr.appendChild(e)),s=pu(e),l?i.display=l:_s(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Lr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Yo=function(e,t,n,i,s,a){var o=e._gsap,l=s||El(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,m=l[0],g=l[1],_=l[2],p=l[3],d=l[4],E=l[5],x=t.split(" "),M=parseFloat(x[0])||0,T=parseFloat(x[1])||0,R,b,L,v;n?l!==gs&&(b=m*p-g*_)&&(L=M*(p/b)+T*(-_/b)+(_*E-p*d)/b,v=M*(-g/b)+T*(m/b)-(m*E-g*d)/b,M=L,T=v):(R=Vh(e),M=R.x+(~x[0].indexOf("%")?M/100*R.width:M),T=R.y+(~(x[1]||x[0]).indexOf("%")?T/100*R.height:T)),i||i!==!1&&o.smooth?(d=M-c,E=T-u,o.xOffset=h+(d*m+E*_)-d,o.yOffset=f+(d*g+E*p)-E):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=T,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[An]="0px 0px",a&&(gi(a,o,"xOrigin",c,M),gi(a,o,"yOrigin",u,T),gi(a,o,"xOffset",h,o.xOffset),gi(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+T)},vs=function(e,t){var n=e._gsap||new Rh(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Bn(e,An)||"0",u,h,f,m,g,_,p,d,E,x,M,T,R,b,L,v,A,z,X,Y,C,N,W,V,Z,j,K,D,G,oe,ae,ce;return u=h=f=_=p=d=E=x=M=0,m=g=1,n.svg=!!(e.getCTM&&kh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[nt]!=="none"?l[nt]:"")),i.scale=i.rotate=i.translate="none"),b=El(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),Yo(e,V||c,!!V||n.originIsAbsolute,n.smooth!==!1,b)),T=n.xOrigin||0,R=n.yOrigin||0,b!==gs&&(z=b[0],X=b[1],Y=b[2],C=b[3],u=N=b[4],h=W=b[5],b.length===6?(m=Math.sqrt(z*z+X*X),g=Math.sqrt(C*C+Y*Y),_=z||X?yr(X,z)*Gi:0,E=Y||C?yr(Y,C)*Gi+_:0,E&&(g*=Math.abs(Math.cos(E*Dr))),n.svg&&(u-=T-(T*z+R*Y),h-=R-(T*X+R*C))):(ce=b[6],oe=b[7],K=b[8],D=b[9],G=b[10],ae=b[11],u=b[12],h=b[13],f=b[14],L=yr(ce,G),p=L*Gi,L&&(v=Math.cos(-L),A=Math.sin(-L),V=N*v+K*A,Z=W*v+D*A,j=ce*v+G*A,K=N*-A+K*v,D=W*-A+D*v,G=ce*-A+G*v,ae=oe*-A+ae*v,N=V,W=Z,ce=j),L=yr(-Y,G),d=L*Gi,L&&(v=Math.cos(-L),A=Math.sin(-L),V=z*v-K*A,Z=X*v-D*A,j=Y*v-G*A,ae=C*A+ae*v,z=V,X=Z,Y=j),L=yr(X,z),_=L*Gi,L&&(v=Math.cos(L),A=Math.sin(L),V=z*v+X*A,Z=N*v+W*A,X=X*v-z*A,W=W*v-N*A,z=V,N=Z),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,d=180-d),m=ct(Math.sqrt(z*z+X*X+Y*Y)),g=ct(Math.sqrt(W*W+ce*ce)),L=yr(N,W),E=Math.abs(L)>2e-4?L*Gi:0,M=ae?1/(ae<0?-ae:ae):0),n.svg&&(V=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Xh(Bn(e,nt)),V&&e.setAttribute("transform",V))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(m*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=ct(m),n.scaleY=ct(g),n.rotation=ct(_)+o,n.rotationX=ct(p)+o,n.rotationY=ct(d)+o,n.skewX=E+o,n.skewY=x+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[An]=_a(c)),n.xOffset=n.yOffset=0,n.force3D=rn.force3D,n.renderTransform=n.svg?Dv:Hh?qh:Lv,n.uncache=0,n},_a=function(e){return(e=e.split(" "))[0]+" "+e[1]},So=function(e,t,n){var i=Lt(t);return ct(parseFloat(t)+parseFloat(wi(e,"x",n+"px",i)))+i},Lv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,qh(e,t)},Oi="0deg",Qr="0px",Fi=") ",qh=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,d=n.force3D,E=n.target,x=n.zOrigin,M="",T=d==="auto"&&e&&e!==1||d===!0;if(x&&(h!==Oi||u!==Oi)){var R=parseFloat(u)*Dr,b=Math.sin(R),L=Math.cos(R),v;R=parseFloat(h)*Dr,v=Math.cos(R),a=So(E,a,b*v*-x),o=So(E,o,-Math.sin(R)*-x),l=So(E,l,L*v*-x+x)}p!==Qr&&(M+="perspective("+p+Fi),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(T||a!==Qr||o!==Qr||l!==Qr)&&(M+=l!==Qr||T?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Fi),c!==Oi&&(M+="rotate("+c+Fi),u!==Oi&&(M+="rotateY("+u+Fi),h!==Oi&&(M+="rotateX("+h+Fi),(f!==Oi||m!==Oi)&&(M+="skew("+f+", "+m+Fi),(g!==1||_!==1)&&(M+="scale("+g+", "+_+Fi),E.style[nt]=M||"translate(0, 0)"},Dv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,d=n.yOffset,E=n.forceCSS,x=parseFloat(a),M=parseFloat(o),T,R,b,L,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Dr,c*=Dr,T=Math.cos(l)*h,R=Math.sin(l)*h,b=Math.sin(l-c)*-f,L=Math.cos(l-c)*f,c&&(u*=Dr,v=Math.tan(c-u),v=Math.sqrt(1+v*v),b*=v,L*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),T*=v,R*=v)),T=ct(T),R=ct(R),b=ct(b),L=ct(L)):(T=h,L=f,R=b=0),(x&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(x=wi(m,"x",a,"px"),M=wi(m,"y",o,"px")),(g||_||p||d)&&(x=ct(x+g-(g*T+_*b)+p),M=ct(M+_-(g*R+_*L)+d)),(i||s)&&(v=m.getBBox(),x=ct(x+i/100*v.width),M=ct(M+s/100*v.height)),v="matrix("+T+","+R+","+b+","+L+","+x+","+M+")",m.setAttribute("transform",v),E&&(m.style[nt]=v)},Uv=function(e,t,n,i,s){var a=360,o=yt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Gi:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*cu)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*cu)%a-~~(c/a)*a)),e._pt=f=new Xt(e._pt,t,n,i,c,_v),f.e=u,f.u="deg",e._props.push(n),f},mu=function(e,t){for(var n in t)e[n]=t[n];return e},Iv=function(e,t,n){var i=mu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[nt]=t,o=vs(n,1),_s(n,nt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[nt],a[nt]=t,o=vs(n,1),a[nt]=c);for(l in ai)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=Lt(c),g=Lt(u),h=m!==g?wi(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Xt(e._pt,o,l,h,f-h,Wo),e._pt.u=g||0,e._props.push(l));mu(o,i)};Wt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ma[e>1?"border"+r:r]=function(o,l,c,u,h){var f,m;if(arguments.length<4)return f=a.map(function(g){return Zn(o,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},a.forEach(function(g,_){return m[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,m,h)}});var Yh={name:"css",register:qo,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,m,g,_,p,d,E,x,M,T,R,b,L;xl||qo(),this.styles=this.styles||Gh(e),L=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Jt[_]&&Ch(_,t,n,i,e,s)))){if(m=typeof u,g=ma[_],m==="function"&&(u=u.call(n,i,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=ds(u)),g)g(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ei.lastIndex=0,Ei.test(c)||(p=Lt(c),d=Lt(u)),d?p!==d&&(c=wi(e,_,c,d)+d):p&&(u+=p),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),L.push(_,0,o[_]);else if(m!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],yt(c)&&~c.indexOf("random(")&&(c=ds(c)),Lt(c+"")||(c+=rn.units[_]||Lt(Zn(e,_))||""),(c+"").charAt(1)==="="&&(c=Zn(e,_))):c=Zn(e,_),f=parseFloat(c),E=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),h=parseFloat(u),_ in Un&&(_==="autoAlpha"&&(f===1&&Zn(e,"visibility")==="hidden"&&h&&(f=0),L.push("visibility",0,o.visibility),gi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Un[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in ai,x){if(this.styles.save(_),M||(T=e._gsap,T.renderTransform&&!t.parseTransform||vs(e,t.parseTransform),R=t.smoothOrigin!==!1&&T.smooth,M=this._pt=new Xt(this._pt,o,nt,0,1,T.renderTransform,T,0,-1),M.dep=1),_==="scale")this._pt=new Xt(this._pt,T,"scaleY",T.scaleY,(E?Pr(T.scaleY,E+h):h)-T.scaleY||0,Wo),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(An,0,o[An]),u=Cv(u),T.svg?Yo(e,u,0,R,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==T.zOrigin&&gi(this,T,"zOrigin",T.zOrigin,d),gi(this,o,_,_a(c),_a(u)));continue}else if(_==="svgOrigin"){Yo(e,u,1,R,0,this);continue}else if(_ in Wh){Uv(this,T,_,f,E?Pr(f,E+u):u);continue}else if(_==="smoothOrigin"){gi(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){Iv(this,u,e);continue}}else _ in o||(_=Hr(_)||_);if(x||(h||h===0)&&(f||f===0)&&!mv.test(u)&&_ in o)p=(c+"").substr((f+"").length),h||(h=0),d=Lt(u)||(_ in rn.units?rn.units[_]:p),p!==d&&(f=wi(e,_,c,d)),this._pt=new Xt(this._pt,x?T:o,_,f,(E?Pr(f,E+h):h)-f,!x&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?vv:Wo),this._pt.u=d||0,p!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=gv);else if(_ in o)Rv.call(this,e,_,c,E?E+u:u);else if(_ in e)this.add(e,_,c||e[_],E?E+u:u,i,s);else if(_!=="parseTransform"){ul(_,u);continue}x||(_ in o?L.push(_,0,o[_]):L.push(_,1,c||e[_])),a.push(_)}}b&&Nh(this)},render:function(e,t){if(t.tween._time||!Sl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Zn,aliases:Un,getSetter:function(e,t,n){var i=Un[t];return i&&i.indexOf(",")<0&&(t=i),t in ai&&t!==An&&(e._gsap.x||Zn(e,"x"))?n&&lu===n?t==="scale"?Ev:Mv:(lu=n||{})&&(t==="scale"?yv:Tv):e.style&&!ol(e.style[t])?xv:~t.indexOf("-")?Sv:gl(e,t)},core:{_removeProperty:_s,_getMatrix:El}};qt.utils.checkPrefix=Hr;qt.core.getStyleSaver=Gh;(function(r,e,t,n){var i=Wt(r+","+e+","+t,function(s){ai[s]=1});Wt(e,function(s){rn.units[s]="deg",Wh[s]=1}),Un[i[13]]=r+","+e,Wt(n,function(s){var a=s.split(":");Un[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){rn.units[r]="px"});qt.registerPlugin(Yh);var Ji=qt.registerPlugin(Yh)||qt;Ji.core.Tween;const Vr=document.body,ii="locked",is=document.querySelector("canvas");let ue;window.innerWidth>=1024?ue=Math.round(document.documentElement.scrollLeft/window.innerWidth):ue=Math.round(document.documentElement.scrollTop/window.innerHeight);let $;const Ke=document.querySelector("#section-container"),Hn=document.querySelectorAll("section"),Kh=document.getElementById("1-2-button"),jh=document.getElementById("2-1-button"),Zh=document.getElementById("2-3-button"),$h=document.getElementById("3-2-button"),_u=[Kh,jh,Zh,$h],ir=document.querySelector("#up-button"),rr=document.querySelector("#down-button"),gu=[ir,rr],$n=document.querySelector("header"),Jn=document.querySelector("footer"),un=document.querySelector("main"),Mo=document.querySelector("#website-information"),yi=document.querySelector("#website-container"),Nv=document.querySelector("#open-website-button"),In=document.querySelector("#close-website-button"),ti=document.querySelector("#next-website-button"),ni=document.querySelector("#previous-website-button"),Dn=document.querySelector("#maximize-website-button"),yl=document.querySelector("iframe"),vn=document.querySelector("#website-link"),Jh=document.querySelector("#website-technologies"),Eo=document.querySelector("#website-description"),zn=document.querySelector("#website-technologies-description"),je=300/2;let Ra=!1,ls=!1,dn=0;const fi=[{link:"https://www.fablesofnaranj.com/",technologies:"HTML, CSS -> { Tailwind CSS }, JS -> { Svelte -> { SvelteKit }, Three.js -> { GSAP }, Embla }",description:`Don't miss the <a target="_blank" href="https://www.fablesofnaranj.com/who-i-am" class="font-bold underline xl:underline-offset-c">Who I Am</a> page of this website and its parallax scrolling effect! Demo available on <a target="_blank" href="https://svelte.dev/playground/a6514198f0fe459f891efb781ce00216?version=5.2.3" class="font-bold underline xl:underline-offset-c">Svelte Playground</a>.`},{link:"https://www.fablesoftoranj.com/",technologies:"HTML, CSS -> { Tailwind CSS }, JS -> { Svelte -> { SvelteKit }, Embla }"},{link:"https://fatherhoodgame.com/",technologies:"HTML, CSS -> { Tailwind CSS }, JS, PHP, WordPress -> { Pods, Panda Pods Repeater Field }",description:'I developed this website and the next one for the team <a target="_blank" href="https://persisplay.com/" class="font-bold underline xl:underline-offset-c">Persis Play</a>, as a community manager and part of the game <a target="_blank" href="https://store.steampowered.com/app/2180850/Fatherhood/" class="font-bold underline xl:underline-offset-c">Fatherhood</a>.'},{link:"https://persisplay.com/",technologies:"HTML, CSS -> { Tailwind CSS }, JS, PHP, WordPress -> { Pods, Panda Pods Repeater Field }"},{link:"https://re-docs.github.io/",technologies:"HTML, CSS -> { Tailwind CSS }, JS -> { Svelte -> { SvelteKit }, Embla }",description:"REdocs is a personal project of mine, dedicated to translating documents from my favorite video games."}];let Ko=!0;const Tl=new m0,Et=new x0,Ov=[Et.load("/assets/img/webdev/svelte.png"),Et.load("/assets/img/webdev/css.png"),Et.load("/assets/img/webdev/html.png"),Et.load("/assets/img/webdev/javascript.png"),Et.load("/assets/img/webdev/three-js.png"),Et.load("/assets/img/webdev/tailwind-css.png")],Fv=[Et.load("/assets/img/gaming/persis-play.png"),Et.load("/assets/img/gaming/persis-play.png"),Et.load("/assets/img/gaming/forever-classic-games.png"),Et.load("/assets/img/gaming/forever-classic-games.png"),Et.load("/assets/img/gaming/mega-cat.png"),Et.load("/assets/img/gaming/mega-cat.png")],Bv=[Et.load("/assets/img/translation/metal-gear.png"),Et.load("/assets/img/translation/metal-gear.png"),Et.load("/assets/img/translation/resident-evil.png"),Et.load("/assets/img/translation/resident-evil.png"),Et.load("/assets/img/translation/ninja-gaiden.png"),Et.load("/assets/img/translation/ninja-gaiden.png")],ga=[Ov,Fv,Bv],zv=(r,e)=>{const t=new br,n=r*e,i=[];if(r%2==1){let s=0;i.push(s);for(let a=0;a<Math.floor(r/2);a++)s+=e,i.reverse(),i.push(s),i.reverse(),i.push(-s);i.reverse()}else{let s=e/2;i.push(s),i.push(-s);for(let a=0;a<r/2-1;a++)s+=e,i.reverse(),i.push(s),i.reverse(),i.push(-s);i.reverse()}for(let s=0;s<6;s++){const a=new br;for(let o=0;o<r;o++)for(let l=0;l<r;l++){const c=new ya(e,e),u=new il({side:Pn,transparent:!0,opacity:1}),h=new ei(c,u);h.position.x=i[o],h.position.y=i[l],a.add(h)}switch(a.userData.id=s,s){case 0:a.position.y=n/2,a.rotation.x=-Math.PI/2;break;case 1:a.position.y=-n/2,a.rotation.x=Math.PI/2;break;case 2:a.position.z=n/2;break;case 3:a.position.z=-n/2,a.rotation.y=Math.PI;break;case 4:a.position.x=-n/2,a.rotation.y=-Math.PI/2;break;case 5:a.position.x=n/2,a.rotation.y=Math.PI/2;break}t.add(a)}return t},va=(r,e)=>{for(let t=0;t<6;t++){const n=e.children[t],i=Math.sqrt(n.children.length),s=[];let a=-1/i;for(let o=0;o<i;o++){a+=1/i;let l=-1/i;for(let c=0;c<i;c++)l+=1/i,s.push([a,l])}if(t==n.userData.id)for(let o=0;o<n.children.length;o++){const l=n.children[o];l.material.map=r[t].clone(),l.material.map.needsUpdate=!0,l.material.map.offset.x=s[o][0],l.material.map.offset.y=s[o][1],l.material.map.repeat.x=1/i,l.material.map.repeat.y=1/i}}},Gv=r=>{const e=[];for(let t=0;t<r.children.length;t++){const n=r.children[t];for(let i=0;i<n.children.length;i++){const s=n.children[i];e.push({x:s.position.x,y:s.position.y,z:s.position.z})}}return e},jo=(r,e)=>{for(let t=0;t<r.children.length;t++){const n=r.children[t];for(let i=0;i<n.children.length;i++){const s=n.children[i],a=Math.random()*50,o=Math.random()*50,l=Math.random()*50;Ji.to(s.position,{duration:e,ease:"power4.in",x:a,y:o,z:l});const c=Math.random()*5,u=Math.random()*5,h=Math.random()*5;Ji.to(s.rotation,{duration:e,ease:"power4.in",x:c,y:u,z:h}),Ji.to(s.material,{duration:e,ease:"power4.in",opacity:0})}}},Zo=(r,e,t)=>{for(let n=0;n<r.children.length;n++){const i=r.children[n];for(let s=0;s<i.children.length;s++){const a=i.children[s];Ji.to(a.position,{duration:e,ease:"power4.out",x:t[s].x,y:t[s].y,z:t[s].z}),Ji.to(a.rotation,{duration:e,ease:"power4.out",x:0,y:0,z:0}),Ji.to(a.material,{duration:e,ease:"power4.out",opacity:1})}}},Ri=(r,e,t)=>{jo(r,e),Ko=!1,setTimeout(()=>{va(ga[t],r),Zo(r,e,Jo),Ko=!0},e*1e3)},Qi=r=>{r==1?(is.classList.remove("md:-translate-x-1/3"),is.classList.add("md:translate-x-0")):(is.classList.remove("md:translate-x-0"),is.classList.add("md:-translate-x-1/3"))},Qt=()=>{for(let r=0;r<Ke.childElementCount;r++){const e=Hn[r];e.classList.remove("opacity-100"),e.classList.add("opacity-0")}},St=r=>{r.classList.remove("opacity-100"),r.classList.add("opacity-0")},Mt=r=>{r.classList.remove("opacity-0"),r.classList.add("opacity-100")},en=r=>{const e=Hn[r];e.classList.remove("opacity-0"),e.classList.add("opacity-100")},Ti=()=>{ir.classList.remove("-top-16"),ir.classList.add("top-0"),rr.classList.remove("-bottom-16"),rr.classList.add("bottom-0")},Nn=()=>{ir.classList.remove("top-0"),ir.classList.add("-top-16")},On=()=>{rr.classList.remove("bottom-0"),rr.classList.add("-bottom-16")},Hv=r=>{const e=r.textContent.trim();let t="";for(let n=0;n<e.length;n++)t+=`<span class="inline-flex transition-transform duration-1000 ease-in-out">${e[n]}</span>`;r.innerHTML=t},tt=r=>{const e=document.querySelectorAll("h3");for(let n=0;n<e.length;n++){const i=e[n];for(let s=0;s<i.childElementCount;s++){const a=i.children[s];a.style.transform="rotateX(180deg)"}}const t=document.querySelector(`section:nth-child(${r+1}) > article > h3`);for(let n=0;n<t.childElementCount;n++){const i=t.children[n];setTimeout(()=>{i.style.transform="rotateX(360deg)"},n*50)}},Qh=()=>{const r=document.querySelectorAll(".h-screen");for(let e=0;e<r.length;e++){const t=r[e];t.style.height=`${window.innerHeight}px`}},Ca=()=>{Vr.classList.add(ii),setTimeout(()=>{Vr.classList.remove(ii)},1e3)},bl=()=>{Eo.classList.add("hidden"),yl.setAttribute("src",fi[dn].link),vn.setAttribute("href",fi[dn].link),vn.innerHTML=`You're Visiting <span class="whitespace-pre">${fi[dn].link}</span>`,Jh.textContent=`Technologies Used => ${fi[dn].technologies}`,fi[dn].description&&(Eo.classList.remove("hidden"),Eo.innerHTML=fi[dn].description),xs()},xs=()=>{ls?yi.style.padding=0:(yi.removeAttribute("style"),yi.style.paddingBottom=`${Jh.getBoundingClientRect().height}px`)},Xr=()=>{vn.style.top=`-${vn.getBoundingClientRect().height}px`},qr=()=>{zn.style.bottom=`-${zn.getBoundingClientRect().height}px`};Qh();const vu=document.querySelectorAll("h3");for(let r=0;r<vu.length;r++){const e=vu[r];Hv(e)}Nv.addEventListener("click",()=>{Ra=!0,bl(),Xr(),qr(),un.classList.remove("z-20"),un.classList.add("z-40"),yi.classList.remove("invisible","opacity-0"),yi.classList.add("opacity-100"),setTimeout(()=>{vn.style.top=0,setTimeout(()=>{Dn.classList.remove("xl:-top-c-7","lg:-top-c-27","md:-top-c-59","-top-c-60","right-0"),Dn.classList.add("top-0","xl:right-c-7","lg:right-c-27","md:right-c-59","right-c-60"),setTimeout(()=>{In.classList.remove("xl:-top-c-7","lg:-top-c-27","md:-top-c-59","-top-c-60","xl:-right-c-7","lg:-right-c-27","md:-right-c-59","-right-c-60"),In.classList.add("top-0","right-0"),setTimeout(()=>{ti.classList.remove("xl:-right-c-7","lg:-right-c-27","md:-right-c-59","-right-c-60"),ti.classList.add("right-0"),setTimeout(()=>{zn.style.bottom=0,setTimeout(()=>{ni.classList.remove("xl:-left-c-7","lg:-left-c-27","md:-left-c-59","-left-c-60"),ni.classList.add("left-0"),xs()},je)},je)},je)},je)},je)},je)});In.addEventListener("click",()=>{ni.classList.remove("left-0"),ni.classList.add("xl:-left-c-7","lg:-left-c-27","md:-left-c-59","-left-c-60"),setTimeout(()=>{qr(),setTimeout(()=>{ti.classList.remove("right-0"),ti.classList.add("xl:-right-c-7","lg:-right-c-27","md:-right-c-59","-right-c-60"),setTimeout(()=>{In.classList.remove("top-0","right-0"),In.classList.add("xl:-top-c-7","lg:-top-c-27","md:-top-c-59","-top-c-60","xl:-right-c-7","lg:-right-c-27","md:-right-c-59","-right-c-60"),setTimeout(()=>{Dn.classList.remove("top-0","xl:right-c-7","lg:right-c-27","md:right-c-59","right-c-60"),Dn.classList.add("xl:-top-c-7","lg:-top-c-27","md:-top-c-59","-top-c-60","right-0"),setTimeout(()=>{Xr(),setTimeout(()=>{yi.classList.remove("opacity-100"),yi.classList.add("opacity-0"),setTimeout(()=>{yi.classList.add("invisible"),un.classList.remove("z-40"),un.classList.add("z-20"),Ra=!1},je)},je)},je)},je)},je)},je)},je)});Dn.addEventListener("click",()=>{Mo.classList.contains(ii)||(ls=!ls,ls?(ni.classList.remove("left-0"),ni.classList.add("xl:-left-c-7","lg:-left-c-27","md:-left-c-59","-left-c-60"),setTimeout(()=>{qr(),setTimeout(()=>{ti.classList.remove("right-0"),ti.classList.add("xl:-right-c-7","lg:-right-c-27","md:-right-c-59","-right-c-60"),setTimeout(()=>{In.classList.remove("top-0","right-0"),In.classList.add("xl:-top-c-7","lg:-top-c-27","md:-top-c-59","-top-c-60","xl:-right-c-7","lg:-right-c-27","md:-right-c-59","-right-c-60"),setTimeout(()=>{Xr(),setTimeout(()=>{Dn.classList.remove("top-0","xl:right-c-7","lg:right-c-27","md:right-c-59","right-c-60"),Dn.classList.add("top-0","right-0"),xs()},je)},je)},je)},je)},je)):(xs(),setTimeout(()=>{vn.style.top=0,setTimeout(()=>{Dn.classList.remove("top-0","right-0"),Dn.classList.add("top-0","xl:right-c-7","lg:right-c-27","md:right-c-59","right-c-60"),setTimeout(()=>{In.classList.remove("xl:-top-c-7","lg:-top-c-27","md:-top-c-59","-top-c-60","xl:-right-c-7","lg:-right-c-27","md:-right-c-59","-right-c-60"),In.classList.add("top-0","right-0"),setTimeout(()=>{ti.classList.remove("xl:-right-c-7","lg:-right-c-27","md:-right-c-59","-right-c-60"),ti.classList.add("right-0"),setTimeout(()=>{zn.style.bottom=0,setTimeout(()=>{ni.classList.remove("xl:-left-c-7","lg:-left-c-27","md:-left-c-59","-left-c-60"),ni.classList.add("left-0")},je)},je)},je)},je)},je)},je)),Mo.classList.add(ii),setTimeout(()=>{Mo.classList.remove(ii)},je*6))});ti.addEventListener("click",()=>{dn++,dn==fi.length&&(dn=0),Xr(),qr(),St(vn),St(zn),yl.setAttribute("src",""),setTimeout(()=>{bl(),vn.style.top=0,zn.style.bottom=0,Mt(vn),Mt(zn)},je*2)});ni.addEventListener("click",()=>{dn--,dn==-1&&(dn=fi.length-1),Xr(),qr(),St(vn),St(zn),yl.setAttribute("src",""),setTimeout(()=>{bl(),vn.style.top=0,zn.style.bottom=0,Mt(vn),Mt(zn)},je*2)});for(let r=0;r<_u.length;r++){const e=_u[r];e.addEventListener("click",()=>{e==Kh?(ue+=1,Ke.scrollIntoView({behavior:"smooth"}),tt($)):e==jh?(ue-=1,$n.scrollIntoView({behavior:"smooth"})):e==Zh?(ue+=1,Jn.scrollIntoView({behavior:"smooth"})):e==$h&&(ue-=1,Ke.scrollIntoView({behavior:"smooth"}),tt($))})}Ti();ue==0?Nn():ue==2&&On();for(let r=0;r<gu.length;r++){const e=gu[r];e.addEventListener("click",()=>{Vr.classList.contains(ii)||(Ti(),e==ir?ue==2?(ue-=1,Ke.scrollIntoView({behavior:"smooth"}),tt($)):ue==1&&$!=0?($-=1,Ri(pt,.5,$),Qt(),en($),tt($),Hn[$].scrollIntoView({behavior:"smooth"})):ue==1&&$==0&&(ue-=1,$n.scrollIntoView({behavior:"smooth"}),Nn()):e==rr&&(ue==0?(ue+=1,Ke.scrollIntoView({behavior:"smooth"}),tt($)):ue==1&&$!=2?($+=1,Ri(pt,.5,$),Qt(),en($),tt($),Hn[$].scrollIntoView({behavior:"smooth"})):ue==1&&$==2&&(ue+=1,Jn.scrollIntoView({behavior:"smooth"}),On())),Qi($),Ca())})}let ia,Js,$o;window.addEventListener("touchstart",r=>{ia=r.changedTouches[0].clientY,$o=r.target});window.addEventListener("touchend",r=>{!Vr.classList.contains(ii)&&!Ra&&(Js=r.changedTouches[0].clientY,Js>ia?(Ti(),ue==2?(ue-=1,St(Jn),St(un),St(Ke),Qt(),setTimeout(()=>{window.scrollBy(0,-window.innerHeight),Mt(Jn),Mt(un),setTimeout(()=>{Mt(Ke),en($),tt($)},500)},500)):ue==1&&$!=0?($-=1,St(Ke),Qt(),jo(pt,.5),setTimeout(()=>{Ke.scrollBy(0,-window.innerHeight),va(ga[$],pt),Zo(pt,.5,Jo),setTimeout(()=>{Mt(Ke),en($),tt($)},500)},500)):ue==1&&$==0?(ue-=1,St(un),St(Ke),St($n),setTimeout(()=>{window.scrollBy(0,-window.innerHeight),Mt(un),Mt(Ke),setTimeout(()=>{Mt($n)},500)},500),Nn()):ue==0&&Nn(),Qi($)):ia>Js?(Ti(),ue==0?(ue+=1,St($n),St(un),St(Ke),Qt(),setTimeout(()=>{window.scrollBy(0,window.innerHeight),Mt($n),Mt(un),setTimeout(()=>{Mt(Ke),en($),tt($)},500)},500)):ue==1&&$!=2?($+=1,St(Ke),Qt(),jo(pt,.5),setTimeout(()=>{Ke.scrollBy(0,window.innerHeight),va(ga[$],pt),Zo(pt,.5,Jo),setTimeout(()=>{Mt(Ke),en($),tt($)},500)},500)):ue==1&&$==2?(ue+=1,St(un),St(Ke),St(Jn),setTimeout(()=>{window.scrollBy(0,window.innerHeight),Mt(un),Mt(Ke),setTimeout(()=>{Mt(Jn)},500)},500),On()):ue==2&&On(),Qi($)):ia==Js&&(Ti(),$o==ir?ue==2?(ue-=1,Ke.scrollIntoView({behavior:"smooth"}),tt($)):ue==1&&$!=0?($-=1,Ri(pt,.5,$),Qt(),en($),tt($),Hn[$].scrollIntoView({behavior:"smooth"})):ue==1&&$==0&&(ue-=1,$n.scrollIntoView({behavior:"smooth"}),Nn()):$o==rr?ue==0?(ue+=1,Ke.scrollIntoView({behavior:"smooth"}),tt($)):ue==1&&$!=2?($+=1,Ri(pt,.5,$),Qt(),en($),tt($),Hn[$].scrollIntoView({behavior:"smooth"})):ue==1&&$==2&&(ue+=1,Jn.scrollIntoView({behavior:"smooth"}),On()):ue==0?Nn():ue==2&&On(),Qi($)),Ca())});const Vv=document.querySelector("#code-block"),xu=7;for(let r=0;r<xu;r++){let e="<div>";for(let t=0;t<Math.ceil((Math.random()+.25)*xu);t++)Math.random()<.5?e+='<span class="code">0</span>':e+='<span class="code font-bold">1</span>';e+="</div>",Vv.innerHTML+=e}const Su=document.querySelectorAll(".code");for(let r=0;r<Su.length;r++){const e=Su[r],t=(Math.random()+.5)*2e3;setInterval(()=>{e.textContent=="1"?e.textContent="0":e.textContent="1"},t)}const pt=zv(4,.45);Tl.add(pt);const Jo=Gv(pt);$=Math.round(Ke.scrollTop/window.innerHeight);va(ga[$],pt);Qt();en($);tt($);Qi($);window.addEventListener("wheel",r=>{if(!Vr.classList.contains(ii)){const e=r.deltaY;Ti(),e>0?ue==0?(ue+=1,Ke.scrollIntoView({behavior:"smooth"}),tt($)):ue==1&&$!=2?($+=1,Ri(pt,.5,$),Qt(),en($),tt($),Hn[$].scrollIntoView({behavior:"smooth"})):ue==1&&$==2?(ue+=1,Jn.scrollIntoView({behavior:"smooth"}),On()):ue==2&&On():e<0&&(ue==2?(ue-=1,Ke.scrollIntoView({behavior:"smooth"}),tt($)):ue==1&&$!=0?($-=1,Ri(pt,.5,$),Qt(),en($),tt($),Hn[$].scrollIntoView({behavior:"smooth"})):ue==1&&$==0?(ue-=1,$n.scrollIntoView({behavior:"smooth"}),Nn()):ue==0&&Nn()),Qi($),Ca()}});window.addEventListener("keyup",r=>{const e=r.key;Vr.classList.contains(ii)||(e=="ArrowDown"||e=="PageDown"?(Ti(),ue==0?(ue+=1,Ke.scrollIntoView({behavior:"smooth"}),tt($)):ue==1&&$!=2?($+=1,Ri(pt,.5,$),Qt(),en($),tt($),Hn[$].scrollIntoView({behavior:"smooth"})):ue==1&&$==2?(ue+=1,Jn.scrollIntoView({behavior:"smooth"}),On()):ue==2&&On()):(e=="ArrowUp"||e=="PageUp")&&(Ti(),ue==2?(ue-=1,Ke.scrollIntoView({behavior:"smooth"}),tt($)):ue==1&&$!=0?($-=1,Ri(pt,.5,$),Qt(),en($),tt($),Hn[$].scrollIntoView({behavior:"smooth"})):ue==1&&$==0?(ue-=1,$n.scrollIntoView({behavior:"smooth"}),Nn()):ue==0&&Nn()),Qi($),Ca()),e=="Escape"&&(ls?Dn.click():In.click())});window.addEventListener("resize",()=>{xs(),Ra||(Xr(),qr()),Cn.width=window.innerWidth*1.5,Cn.height=window.innerHeight,Qh(),Ke.scrollTop=$*window.innerHeight,window.innerWidth>=1024?document.documentElement.scrollLeft=ue*window.innerWidth:document.documentElement.scrollTop=ue*window.innerHeight,Ss.aspect=Cn.width/Cn.height,Ss.updateProjectionMatrix(),Ms.setSize(Cn.width,Cn.height),Ms.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Cn={width:window.innerWidth*1.5,height:window.innerHeight},Ss=new fn(75,Cn.width/Cn.height,.1,100);Ss.position.z=4;Tl.add(Ss);const Ms=new Ku({canvas:is});Ms.setSize(Cn.width,Cn.height);Ms.setClearColor(986895);const kv=new S0,ef=()=>{const r=kv.getElapsedTime();if(Ko){const e=r*.125,t=r*.25,n=r;pt.rotation.x=e,pt.rotation.y=t,pt.rotation.z=n}Ms.render(Tl,Ss),window.requestAnimationFrame(ef)};ef();

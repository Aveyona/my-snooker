(()=>{var jl="170",En={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Au=0,Sc=1,Ru=2;var Nh=1,Kl=2,Vn=3,hi=0,Le=1,Ze=2,li=0,ss=1,Ec=2,wc=3,Tc=4,Cu=5,Ei=100,Pu=101,Iu=102,Lu=103,Du=104,Uu=200,Nu=201,ku=202,Ou=203,Ca=204,Pa=205,zu=206,Fu=207,Bu=208,Hu=209,Vu=210,Gu=211,Wu=212,Xu=213,qu=214,Ia=0,La=1,Da=2,ls=3,Ua=4,Na=5,ka=6,Oa=7,kh=0,Yu=1,$u=2,ci=0,Zu=1,ju=2,Ku=3,Jl=4,Ju=5,Qu=6,td=7;var Oh=300,cs=301,hs=302,za=303,Fa=304,Mo=306,qn=1e3,Ai=1001,Ba=1002,bn=1003,ed=1004;var dr=1005;var Cn=1006,Zo=1007;var Ri=1008;var Yn=1009,zh=1010,Fh=1011,$s=1012,Ql=1013,Ci=1014,Gn=1015,or=1016,tc=1017,ec=1018,us=1020,Bh=35902,Hh=1021,Vh=1022,Mn=1023,Gh=1024,Wh=1025,rs=1026,ds=1027,Xh=1028,nc=1029,qh=1030,ic=1031;var sc=1033,Fr=33776,Br=33777,Hr=33778,Vr=33779,Ha=35840,Va=35841,Ga=35842,Wa=35843,Xa=36196,qa=37492,Ya=37496,$a=37808,Za=37809,ja=37810,Ka=37811,Ja=37812,Qa=37813,tl=37814,el=37815,nl=37816,il=37817,sl=37818,rl=37819,ol=37820,al=37821,Gr=36492,ll=36494,cl=36495,Yh=36283,hl=36284,ul=36285,dl=36286;var Wr=2300,fl=2301,jo=2302,Ac=2400,Rc=2401,Cc=2402;var nd=3200,id=3201;var $h=0,sd=1,ai="",oe="srgb",Es="srgb-linear",bo="linear",xe="srgb";var Hi=7680;var Pc=519,rd=512,od=513,ad=514,Zh=515,ld=516,cd=517,hd=518,ud=519,Ic=35044;var Lc="300 es",Wn=2e3,Xr=2001,$n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dc=1234567,Vs=Math.PI/180,fs=180/Math.PI;function Oi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Ie(s,t,e){return Math.max(t,Math.min(e,s))}function rc(s,t){return(s%t+t)%t}function dd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function fd(s,t,e){return s!==t?(e-s)/(t-s):0}function Gs(s,t,e){return(1-e)*s+e*t}function pd(s,t,e,n){return Gs(s,t,1-Math.exp(-e*n))}function md(s,t=1){return t-Math.abs(rc(s,t*2)-t)}function gd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function xd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function _d(s,t){return s+Math.floor(Math.random()*(t-s+1))}function yd(s,t){return s+Math.random()*(t-s)}function vd(s){return s*(.5-Math.random())}function Md(s){s!==void 0&&(Dc=s);let t=Dc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bd(s){return s*Vs}function Sd(s){return s*fs}function Ed(s){return(s&s-1)===0&&s!==0}function wd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Td(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ad(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function es(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ln={DEG2RAD:Vs,RAD2DEG:fs,generateUUID:Oi,clamp:Ie,euclideanModulo:rc,mapLinear:dd,inverseLerp:fd,lerp:Gs,damp:pd,pingpong:md,smoothstep:gd,smootherstep:xd,randInt:_d,randFloat:yd,randFloatSpread:vd,seededRandom:Md,degToRad:bd,radToDeg:Sd,isPowerOfTwo:Ed,ceilPowerOfTwo:wd,floorPowerOfTwo:Td,setQuaternionFromProperEuler:Ad,normalize:Xe,denormalize:es},mt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ne=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],E=i[1],y=i[4],v=i[7],k=i[2],P=i[5],L=i[8];return r[0]=o*x+a*E+l*k,r[3]=o*m+a*y+l*P,r[6]=o*p+a*v+l*L,r[1]=c*x+h*E+u*k,r[4]=c*m+h*y+u*P,r[7]=c*p+h*v+u*L,r[2]=d*x+f*E+g*k,r[5]=d*m+f*y+g*P,r[8]=d*p+f*v+g*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ko.makeScale(t,e)),this}rotate(t){return this.premultiply(Ko.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ko=new ne;function jh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function qr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rd(){let s=qr("canvas");return s.style.display="block",s}var Uc={};function Bs(s){s in Uc||(Uc[s]=!0,console.warn(s))}function Cd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Pd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Id(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var le={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===xe&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===xe&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?bo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Xn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Nc=[.64,.33,.3,.6,.15,.06],kc=[.2126,.7152,.0722],Oc=[.3127,.329],zc=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fc=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[Es]:{primaries:Nc,whitePoint:Oc,transfer:bo,toXYZ:zc,fromXYZ:Fc,luminanceCoefficients:kc,workingColorSpaceConfig:{unpackColorSpace:oe},outputColorSpaceConfig:{drawingBufferColorSpace:oe}},[oe]:{primaries:Nc,whitePoint:Oc,transfer:xe,toXYZ:zc,fromXYZ:Fc,luminanceCoefficients:kc,outputColorSpaceConfig:{drawingBufferColorSpace:oe}}});var Vi,pl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vi===void 0&&(Vi=qr("canvas")),Vi.width=t.width,Vi.height=t.height;let n=Vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ld=0,Yr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Jo(i[o].image)):r.push(Jo(i[o]))}else r=Jo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Jo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Dd=0,on=class s extends $n{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Ai,i=Ai,r=Cn,o=Ri,a=Mn,l=Yn,c=s.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Oi(),this.name="",this.source=new Yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qn:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case Ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qn:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case Ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Oh;on.DEFAULT_ANISOTROPY=1;var _e=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(f+1)/2,k=(p+1)/2,P=(h+d)/4,L=(u+x)/4,D=(g+m)/4;return y>v&&y>k?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=P/n,r=L/n):v>k?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=P/i,r=D/i):k<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(k),n=L/r,i=D/r),this.set(n,i,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-x)/E,this.z=(d-h)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ml=class extends $n{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new on(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Yr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends ml{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$r=class extends on{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var gl=class extends on{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ye=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*x,E=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let k=Math.sqrt(y),P=Math.atan2(k,p*E);m=Math.sin(m*P)/k,a=Math.sin(a*P)/k}let v=a*E;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+x*v,m===1-a){let k=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=k,c*=k,h*=k,u*=k}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qo.copy(this).projectOnVector(t),this.sub(Qo)}reflect(t){return this.sub(Qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qo=new C,Bc=new Ye,Pi=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Us),pr.subVectors(this.max,Us),Gi.subVectors(t.a,Us),Wi.subVectors(t.b,Us),Xi.subVectors(t.c,Us),ei.subVectors(Wi,Gi),ni.subVectors(Xi,Wi),xi.subVectors(Gi,Xi);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-xi.z,xi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,xi.z,0,-xi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-xi.y,xi.x,0];return!ta(e,Gi,Wi,Xi,pr)||(e=[1,0,0,0,1,0,0,0,1],!ta(e,Gi,Wi,Xi,pr))?!1:(mr.crossVectors(ei,ni),e=[mr.x,mr.y,mr.z],ta(e,Gi,Wi,Xi,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},On=[new C,new C,new C,new C,new C,new C,new C,new C],_n=new C,fr=new Pi,Gi=new C,Wi=new C,Xi=new C,ei=new C,ni=new C,xi=new C,Us=new C,pr=new C,mr=new C,_i=new C;function ta(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){_i.fromArray(s,r);let a=i.x*Math.abs(_i.x)+i.y*Math.abs(_i.y)+i.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ud=new Pi,Ns=new C,ea=new C,ps=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ud.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);let e=Ns.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ns,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(ea)),this.expandByPoint(Ns.copy(t.center).sub(ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},zn=new C,na=new C,gr=new C,ii=new C,ia=new C,xr=new C,sa=new C,Ii=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){na.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(na);let r=t.distanceTo(e)*.5,o=-this.direction.dot(gr),a=ii.dot(this.direction),l=-ii.dot(gr),c=ii.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(na).addScaledVector(gr,d),f}intersectSphere(t,e){zn.subVectors(t.center,this.origin);let n=zn.dot(this.direction),i=zn.dot(zn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,i,r){ia.subVectors(e,t),xr.subVectors(n,t),sa.crossVectors(ia,xr);let o=this.direction.dot(sa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);let l=a*this.direction.dot(xr.crossVectors(ii,xr));if(l<0)return null;let c=a*this.direction.dot(ia.cross(ii));if(c<0||l+c>o)return null;let h=-a*ii.dot(sa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Me=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,x,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/qi.setFromMatrixColumn(t,0).length(),r=1/qi.setFromMatrixColumn(t,1).length(),o=1/qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nd,t,kd)}lookAt(t,e,n){let i=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),si.crossVectors(n,nn),si.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),si.crossVectors(n,nn)),si.normalize(),_r.crossVectors(nn,si),i[0]=si.x,i[4]=_r.x,i[8]=nn.x,i[1]=si.y,i[5]=_r.y,i[9]=nn.y,i[2]=si.z,i[6]=_r.z,i[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],E=n[3],y=n[7],v=n[11],k=n[15],P=i[0],L=i[4],D=i[8],w=i[12],_=i[1],S=i[5],z=i[9],F=i[13],V=i[2],Q=i[6],W=i[10],ot=i[14],K=i[3],pt=i[7],Tt=i[11],yt=i[15];return r[0]=o*P+a*_+l*V+c*K,r[4]=o*L+a*S+l*Q+c*pt,r[8]=o*D+a*z+l*W+c*Tt,r[12]=o*w+a*F+l*ot+c*yt,r[1]=h*P+u*_+d*V+f*K,r[5]=h*L+u*S+d*Q+f*pt,r[9]=h*D+u*z+d*W+f*Tt,r[13]=h*w+u*F+d*ot+f*yt,r[2]=g*P+x*_+m*V+p*K,r[6]=g*L+x*S+m*Q+p*pt,r[10]=g*D+x*z+m*W+p*Tt,r[14]=g*w+x*F+m*ot+p*yt,r[3]=E*P+y*_+v*V+k*K,r[7]=E*L+y*S+v*Q+k*pt,r[11]=E*D+y*z+v*W+k*Tt,r[15]=E*w+y*F+v*ot+k*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+x*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],E=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,y=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,v=h*x*c-g*u*c+g*a*f-o*x*f-h*a*p+o*u*p,k=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,P=e*E+n*y+i*v+r*k;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/P;return t[0]=E*L,t[1]=(x*d*r-u*m*r-x*i*f+n*m*f+u*i*p-n*d*p)*L,t[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*p+n*l*p)*L,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*L,t[4]=y*L,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*L,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*L,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*f+e*l*f)*L,t[8]=v*L,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*L,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*p+e*a*p)*L,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*L,t[12]=k*L,t[13]=(h*x*i-g*u*i+g*n*d-e*x*d-h*n*m+e*u*m)*L,t[14]=(g*a*i-o*x*i-g*n*l+e*x*l+o*n*m-e*a*m)*L,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*L,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,E=l*c,y=l*h,v=l*u,k=n.x,P=n.y,L=n.z;return i[0]=(1-(x+p))*k,i[1]=(f+v)*k,i[2]=(g-y)*k,i[3]=0,i[4]=(f-v)*P,i[5]=(1-(d+p))*P,i[6]=(m+E)*P,i[7]=0,i[8]=(g+y)*L,i[9]=(m-E)*L,i[10]=(1-(d+x))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=qi.set(i[0],i[1],i[2]).length(),o=qi.set(i[4],i[5],i[6]).length(),a=qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],yn.copy(this);let c=1/r,h=1/o,u=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Wn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(a===Wn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Xr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Wn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,f=(n+i)*h,g,x;if(a===Wn)g=(o+r)*u,x=-2*u;else if(a===Xr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},qi=new C,yn=new Me,Nd=new C(0,0,0),kd=new C(1,1,1),si=new C,_r=new C,nn=new C,Hc=new Me,Vc=new Ye,un=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var Zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Od=0,Gc=new C,Yi=new Ye,Fn=new Me,yr=new C,ks=new C,zd=new C,Fd=new Ye,Wc=new C(1,0,0),Xc=new C(0,1,0),qc=new C(0,0,1),Yc={type:"added"},Bd={type:"removed"},$i={type:"childadded",child:null},ra={type:"childremoved",child:null},He=class s extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new C,e=new un,n=new Ye,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Me},normalMatrix:{value:new ne}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(Wc,t)}rotateY(t){return this.rotateOnAxis(Xc,t)}rotateZ(t){return this.rotateOnAxis(qc,t)}translateOnAxis(t,e){return Gc.copy(t).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wc,t)}translateY(t){return this.translateOnAxis(Xc,t)}translateZ(t){return this.translateOnAxis(qc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yr.copy(t):yr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(ks,yr,this.up):Fn.lookAt(yr,ks,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),Yi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yc),$i.child=t,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bd),ra.child=t,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yc),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,Fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};He.DEFAULT_UP=new C(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new C,Bn=new C,oa=new C,Hn=new C,Zi=new C,ji=new C,$c=new C,aa=new C,la=new C,ca=new C,ha=new _e,ua=new _e,da=new _e,wi=class s{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),vn.subVectors(t,e),i.cross(vn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){vn.subVectors(i,e),Bn.subVectors(n,e),oa.subVectors(t,e);let o=vn.dot(vn),a=vn.dot(Bn),l=vn.dot(oa),c=Bn.dot(Bn),h=Bn.dot(oa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return ha.setScalar(0),ua.setScalar(0),da.setScalar(0),ha.fromBufferAttribute(t,e),ua.fromBufferAttribute(t,n),da.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ha,r.x),o.addScaledVector(ua,r.y),o.addScaledVector(da,r.z),o}static isFrontFacing(t,e,n,i){return vn.subVectors(n,e),Bn.subVectors(t,e),vn.cross(Bn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),vn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Zi.subVectors(i,n),ji.subVectors(r,n),aa.subVectors(t,n);let l=Zi.dot(aa),c=ji.dot(aa);if(l<=0&&c<=0)return e.copy(n);la.subVectors(t,i);let h=Zi.dot(la),u=ji.dot(la);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Zi,o);ca.subVectors(t,r);let f=Zi.dot(ca),g=ji.dot(ca);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ji,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return $c.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector($c,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Zi,o).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},vr={h:0,s:0,l:0};function fa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var te=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=rc(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fa(o,r,t+1/3),this.g=fa(o,r,t),this.b=fa(o,r,t-1/3)}return le.toWorkingColorSpace(this,i),this}setStyle(t,e=oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oe){let n=Kh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oe){return le.fromWorkingColorSpace(We.copy(this),t),Math.round(Ie(We.r*255,0,255))*65536+Math.round(Ie(We.g*255,0,255))*256+Math.round(Ie(We.b*255,0,255))}getHexString(t=oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(We.copy(this),e);let n=We.r,i=We.g,r=We.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=oe){le.fromWorkingColorSpace(We.copy(this),t);let e=We.r,n=We.g,i=We.b;return t!==oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(vr);let n=Gs(ri.h,vr.h,e),i=Gs(ri.s,vr.s,e),r=Gs(ri.l,vr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new te;te.NAMES=Kh;var Hd=0,ui=class extends $n{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Oi(),this.name="",this.blending=ss,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ca&&(n.blendSrc=this.blendSrc),this.blendDst!==Pa&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Re=class extends ui{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Pe=new C,Mr=new mt,hn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ic,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mr.fromBufferAttribute(this,e),Mr.applyMatrix3(t),this.setXY(e,Mr.x,Mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=es(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=es(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=es(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=es(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),i=Xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),i=Xe(i,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ic&&(t.usage=this.usage),t}};var Zr=class extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var jr=class extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vd=0,cn=new Me,pa=new He,Ki=new C,sn=new Pi,Os=new Pi,Be=new C,Ce=class s extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jh(t)?jr:Zr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return pa.lookAt(t),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ae(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(sn.min,Os.min),sn.expandByPoint(Be),Be.addVectors(sn.max,Os.max),sn.expandByPoint(Be)):(sn.expandByPoint(Os.min),sn.expandByPoint(Os.max))}sn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&(Ki.fromBufferAttribute(t,c),Be.add(Ki)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new C,l[D]=new C;let c=new C,h=new C,u=new C,d=new mt,f=new mt,g=new mt,x=new C,m=new C;function p(D,w,_){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(S),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),a[D].add(x),a[w].add(x),a[_].add(x),l[D].add(m),l[w].add(m),l[_].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let D=0,w=E.length;D<w;++D){let _=E[D],S=_.start,z=_.count;for(let F=S,V=S+z;F<V;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let y=new C,v=new C,k=new C,P=new C;function L(D){k.fromBufferAttribute(i,D),P.copy(k);let w=a[D];y.copy(w),y.sub(k.multiplyScalar(k.dot(w))).normalize(),v.crossVectors(P,w);let S=v.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,S)}for(let D=0,w=E.length;D<w;++D){let _=E[D],S=_.start,z=_.count;for(let F=S,V=S+z;F<V;F+=3)L(t.getX(F+0)),L(t.getX(F+1)),L(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new hn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zc=new Me,yi=new Ii,br=new ps,jc=new C,Sr=new C,Er=new C,wr=new C,ma=new C,Tr=new C,Kc=new C,Ar=new C,Rt=class extends He{constructor(t=new Ce,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ma.fromBufferAttribute(u,t),o?Tr.addScaledVector(ma,h):Tr.addScaledVector(ma.sub(e),h))}e.add(Tr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(br.containsPoint(yi.origin)===!1&&(yi.intersectSphere(br,jc)===null||yi.origin.distanceToSquared(jc)>(t.far-t.near)**2))&&(Zc.copy(r).invert(),yi.copy(t.ray).applyMatrix4(Zc),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,k=y;v<k;v+=3){let P=a.getX(v),L=a.getX(v+1),D=a.getX(v+2);i=Rr(this,p,t,n,c,h,u,P,L,D),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let E=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);i=Rr(this,o,t,n,c,h,u,E,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,k=y;v<k;v+=3){let P=v,L=v+1,D=v+2;i=Rr(this,p,t,n,c,h,u,P,L,D),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let E=m,y=m+1,v=m+2;i=Rr(this,o,t,n,c,h,u,E,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Gd(s,t,e,n,i,r,o,a){let l;if(t.side===Le?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===hi,a),l===null)return null;Ar.copy(a),Ar.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ar);return c<e.near||c>e.far?null:{distance:c,point:Ar.clone(),object:s}}function Rr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Sr),s.getVertexPosition(l,Er),s.getVertexPosition(c,wr);let h=Gd(s,t,e,n,Sr,Er,wr,Kc);if(h){let u=new C;wi.getBarycoord(Kc,Sr,Er,wr,u),i&&(h.uv=wi.getInterpolatedAttribute(i,a,l,c,u,new mt)),r&&(h.uv1=wi.getInterpolatedAttribute(r,a,l,c,u,new mt)),o&&(h.normal=wi.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new C,materialIndex:0};wi.getNormal(Sr,Er,wr,d.normal),h.face=d,h.barycoord=u}return h}var Gt=class s extends Ce{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function g(x,m,p,E,y,v,k,P,L,D,w){let _=v/L,S=k/D,z=v/2,F=k/2,V=P/2,Q=L+1,W=D+1,ot=0,K=0,pt=new C;for(let Tt=0;Tt<W;Tt++){let yt=Tt*S-F;for(let Bt=0;Bt<Q;Bt++){let St=Bt*_-z;pt[x]=St*E,pt[m]=yt*y,pt[p]=V,c.push(pt.x,pt.y,pt.z),pt[x]=0,pt[m]=0,pt[p]=P>0?1:-1,h.push(pt.x,pt.y,pt.z),u.push(Bt/L),u.push(1-Tt/D),ot+=1}}for(let Tt=0;Tt<D;Tt++)for(let yt=0;yt<L;yt++){let Bt=d+yt+Q*Tt,St=d+yt+Q*(Tt+1),X=d+(yt+1)+Q*(Tt+1),st=d+(yt+1)+Q*Tt;l.push(Bt,St,st),l.push(St,X,st),K+=6}a.addGroup(f,K,w),f+=K,d+=ot}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ms(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function qe(s){let t={};for(let e=0;e<s.length;e++){let n=ms(s[e]);for(let i in n)t[i]=n[i]}return t}function Wd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Jh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Xd={clone:ms,merge:qe},qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends ui{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qd,this.fragmentShader=Yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=Wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Kr=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},oi=new C,Jc=new mt,Qc=new mt,Ve=class extends Kr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,Jc,Qc),e.subVectors(Qc,Jc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ji=-90,Qi=1,xl=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ve(Ji,Qi,t,e);i.layers=this.layers,this.add(i);let r=new Ve(Ji,Qi,t,e);r.layers=this.layers,this.add(r);let o=new Ve(Ji,Qi,t,e);o.layers=this.layers,this.add(o);let a=new Ve(Ji,Qi,t,e);a.layers=this.layers,this.add(a);let l=new Ve(Ji,Qi,t,e);l.layers=this.layers,this.add(l);let c=new Ve(Ji,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Jr=class extends on{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:cs,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_l=class extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Jr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Gt(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:li});r.uniforms.tEquirect.value=e;let o=new Rt(i,r),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=Cn),new xl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},ga=new C,$d=new C,Zd=new ne,rn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ga.subVectors(n,e).cross($d.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ga),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zd.getNormalMatrix(t),i=this.coplanarPoint(ga).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new ps,Cr=new C,js=class{constructor(t=new rn,e=new rn,n=new rn,i=new rn,r=new rn,o=new rn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],E=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,m-f,v-p).normalize(),n[1].setComponents(l+r,d+c,m+f,v+p).normalize(),n[2].setComponents(l+o,d+h,m+g,v+E).normalize(),n[3].setComponents(l-o,d-h,m-g,v-E).normalize(),n[4].setComponents(l-a,d-u,m-x,v-y).normalize(),e===Wn)n[5].setComponents(l+a,d+u,m+x,v+y).normalize();else if(e===Xr)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Cr.x=i.normal.x>0?t.max.x:t.min.x,Cr.y=i.normal.y>0?t.max.y:t.min.y,Cr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Qh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function jd(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var pe=class s extends Ce{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let E=p*d-o;for(let y=0;y<c;y++){let v=y*u-r;g.push(v,-E,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){let y=E+c*p,v=E+c*(p+1),k=E+1+c*(p+1),P=E+1+c*p;f.push(y,v,P),f.push(v,k,P)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jd=`#ifdef USE_ALPHAHASH
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
#endif`,Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sf=`#ifdef USE_AOMAP
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
#endif`,rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,of=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uf=`#ifdef USE_IRIDESCENCE
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
#endif`,df=`#ifdef USE_BUMPMAP
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
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mf=`#define PI 3.141592653589793
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
} // validated`,bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Sf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lf=`#ifdef USE_ENVMAP
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
#endif`,Df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ff=`#ifdef USE_GRADIENTMAP
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
}`,Bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gf=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Wf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zf=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Kf=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ep=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ap=`#if defined( USE_POINTS_UV )
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
#endif`,lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vp=`#ifdef USE_NORMALMAP
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
#endif`,Mp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
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
#endif`,Hp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wp=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jp=`uniform sampler2D t2D;
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,sm=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,om=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,dm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,fm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,pm=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,gm=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,xm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,_m=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,vm=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Mm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,bm=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Sm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Em=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,wm=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Tm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Am=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Rm=`uniform vec3 color;
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
}`,Cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Pm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,re={alphahash_fragment:Kd,alphahash_pars_fragment:Jd,alphamap_fragment:Qd,alphamap_pars_fragment:tf,alphatest_fragment:ef,alphatest_pars_fragment:nf,aomap_fragment:sf,aomap_pars_fragment:rf,batching_pars_vertex:of,batching_vertex:af,begin_vertex:lf,beginnormal_vertex:cf,bsdfs:hf,iridescence_fragment:uf,bumpmap_pars_fragment:df,clipping_planes_fragment:ff,clipping_planes_pars_fragment:pf,clipping_planes_pars_vertex:mf,clipping_planes_vertex:gf,color_fragment:xf,color_pars_fragment:_f,color_pars_vertex:yf,color_vertex:vf,common:Mf,cube_uv_reflection_fragment:bf,defaultnormal_vertex:Sf,displacementmap_pars_vertex:Ef,displacementmap_vertex:wf,emissivemap_fragment:Tf,emissivemap_pars_fragment:Af,colorspace_fragment:Rf,colorspace_pars_fragment:Cf,envmap_fragment:Pf,envmap_common_pars_fragment:If,envmap_pars_fragment:Lf,envmap_pars_vertex:Df,envmap_physical_pars_fragment:Wf,envmap_vertex:Uf,fog_vertex:Nf,fog_pars_vertex:kf,fog_fragment:Of,fog_pars_fragment:zf,gradientmap_pars_fragment:Ff,lightmap_pars_fragment:Bf,lights_lambert_fragment:Hf,lights_lambert_pars_fragment:Vf,lights_pars_begin:Gf,lights_toon_fragment:Xf,lights_toon_pars_fragment:qf,lights_phong_fragment:Yf,lights_phong_pars_fragment:$f,lights_physical_fragment:Zf,lights_physical_pars_fragment:jf,lights_fragment_begin:Kf,lights_fragment_maps:Jf,lights_fragment_end:Qf,logdepthbuf_fragment:tp,logdepthbuf_pars_fragment:ep,logdepthbuf_pars_vertex:np,logdepthbuf_vertex:ip,map_fragment:sp,map_pars_fragment:rp,map_particle_fragment:op,map_particle_pars_fragment:ap,metalnessmap_fragment:lp,metalnessmap_pars_fragment:cp,morphinstance_vertex:hp,morphcolor_vertex:up,morphnormal_vertex:dp,morphtarget_pars_vertex:fp,morphtarget_vertex:pp,normal_fragment_begin:mp,normal_fragment_maps:gp,normal_pars_fragment:xp,normal_pars_vertex:_p,normal_vertex:yp,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:Mp,clearcoat_normal_fragment_maps:bp,clearcoat_pars_fragment:Sp,iridescence_pars_fragment:Ep,opaque_fragment:wp,packing:Tp,premultiplied_alpha_fragment:Ap,project_vertex:Rp,dithering_fragment:Cp,dithering_pars_fragment:Pp,roughnessmap_fragment:Ip,roughnessmap_pars_fragment:Lp,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:Up,shadowmap_vertex:Np,shadowmask_pars_fragment:kp,skinbase_vertex:Op,skinning_pars_vertex:zp,skinning_vertex:Fp,skinnormal_vertex:Bp,specularmap_fragment:Hp,specularmap_pars_fragment:Vp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Wp,transmission_fragment:Xp,transmission_pars_fragment:qp,uv_pars_fragment:Yp,uv_pars_vertex:$p,uv_vertex:Zp,worldpos_vertex:jp,background_vert:Kp,background_frag:Jp,backgroundCube_vert:Qp,backgroundCube_frag:tm,cube_vert:em,cube_frag:nm,depth_vert:im,depth_frag:sm,distanceRGBA_vert:rm,distanceRGBA_frag:om,equirect_vert:am,equirect_frag:lm,linedashed_vert:cm,linedashed_frag:hm,meshbasic_vert:um,meshbasic_frag:dm,meshlambert_vert:fm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:gm,meshnormal_vert:xm,meshnormal_frag:_m,meshphong_vert:ym,meshphong_frag:vm,meshphysical_vert:Mm,meshphysical_frag:bm,meshtoon_vert:Sm,meshtoon_frag:Em,points_vert:wm,points_frag:Tm,shadow_vert:Am,shadow_frag:Rm,sprite_vert:Cm,sprite_frag:Pm},Ut={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Rn={basic:{uniforms:qe([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:qe([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new te(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:qe([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:qe([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:qe([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new te(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:qe([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:qe([Ut.points,Ut.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:qe([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:qe([Ut.common,Ut.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:qe([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:qe([Ut.sprite,Ut.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:qe([Ut.common,Ut.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:qe([Ut.lights,Ut.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};Rn.physical={uniforms:qe([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var Pr={r:0,b:0,g:0},Mi=new un,Im=new Me;function Lm(s,t,e,n,i,r,o){let a=new te(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function x(E){let y=!1,v=g(E);v===null?p(a,l):v&&v.isColor&&(p(v,1),y=!0);let k=s.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,y){let v=g(y);v&&(v.isCubeTexture||v.mapping===Mo)?(h===void 0&&(h=new Rt(new Gt(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:ms(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Mi.copy(y.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Im.makeRotationFromEuler(Mi)),h.material.toneMapped=le.getTransfer(v.colorSpace)!==xe,(u!==v||d!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Rt(new pe(2,2),new Pn({name:"BackgroundMaterial",uniforms:ms(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=le.getTransfer(v.colorSpace)!==xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,y){E.getRGB(Pr,Jh(s)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:x,addToRenderList:m}}function Dm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(_,S,z,F,V){let Q=!1,W=u(F,z,S);r!==W&&(r=W,c(r.object)),Q=f(_,F,z,V),Q&&g(_,F,z,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,v(_,S,z,F),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function u(_,S,z){let F=z.wireframe===!0,V=n[_.id];V===void 0&&(V={},n[_.id]=V);let Q=V[S.id];Q===void 0&&(Q={},V[S.id]=Q);let W=Q[F];return W===void 0&&(W=d(l()),Q[F]=W),W}function d(_){let S=[],z=[],F=[];for(let V=0;V<e;V++)S[V]=0,z[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:z,attributeDivisors:F,object:_,attributes:{},index:null}}function f(_,S,z,F){let V=r.attributes,Q=S.attributes,W=0,ot=z.getAttributes();for(let K in ot)if(ot[K].location>=0){let Tt=V[K],yt=Q[K];if(yt===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(yt=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(yt=_.instanceColor)),Tt===void 0||Tt.attribute!==yt||yt&&Tt.data!==yt.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function g(_,S,z,F){let V={},Q=S.attributes,W=0,ot=z.getAttributes();for(let K in ot)if(ot[K].location>=0){let Tt=Q[K];Tt===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(Tt=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(Tt=_.instanceColor));let yt={};yt.attribute=Tt,Tt&&Tt.data&&(yt.data=Tt.data),V[K]=yt,W++}r.attributes=V,r.attributesNum=W,r.index=F}function x(){let _=r.newAttributes;for(let S=0,z=_.length;S<z;S++)_[S]=0}function m(_){p(_,0)}function p(_,S){let z=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;z[_]=1,F[_]===0&&(s.enableVertexAttribArray(_),F[_]=1),V[_]!==S&&(s.vertexAttribDivisor(_,S),V[_]=S)}function E(){let _=r.newAttributes,S=r.enabledAttributes;for(let z=0,F=S.length;z<F;z++)S[z]!==_[z]&&(s.disableVertexAttribArray(z),S[z]=0)}function y(_,S,z,F,V,Q,W){W===!0?s.vertexAttribIPointer(_,S,z,V,Q):s.vertexAttribPointer(_,S,z,F,V,Q)}function v(_,S,z,F){x();let V=F.attributes,Q=z.getAttributes(),W=S.defaultAttributeValues;for(let ot in Q){let K=Q[ot];if(K.location>=0){let pt=V[ot];if(pt===void 0&&(ot==="instanceMatrix"&&_.instanceMatrix&&(pt=_.instanceMatrix),ot==="instanceColor"&&_.instanceColor&&(pt=_.instanceColor)),pt!==void 0){let Tt=pt.normalized,yt=pt.itemSize,Bt=t.get(pt);if(Bt===void 0)continue;let St=Bt.buffer,X=Bt.type,st=Bt.bytesPerElement,gt=X===s.INT||X===s.UNSIGNED_INT||pt.gpuType===Ql;if(pt.isInterleavedBufferAttribute){let dt=pt.data,Nt=dt.stride,kt=pt.offset;if(dt.isInstancedInterleavedBuffer){for(let A=0;A<K.locationSize;A++)p(K.location+A,dt.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let A=0;A<K.locationSize;A++)m(K.location+A);s.bindBuffer(s.ARRAY_BUFFER,St);for(let A=0;A<K.locationSize;A++)y(K.location+A,yt/K.locationSize,X,Tt,Nt*st,(kt+yt/K.locationSize*A)*st,gt)}else{if(pt.isInstancedBufferAttribute){for(let dt=0;dt<K.locationSize;dt++)p(K.location+dt,pt.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let dt=0;dt<K.locationSize;dt++)m(K.location+dt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let dt=0;dt<K.locationSize;dt++)y(K.location+dt,yt/K.locationSize,X,Tt,yt*st,yt/K.locationSize*dt*st,gt)}}else if(W!==void 0){let Tt=W[ot];if(Tt!==void 0)switch(Tt.length){case 2:s.vertexAttrib2fv(K.location,Tt);break;case 3:s.vertexAttrib3fv(K.location,Tt);break;case 4:s.vertexAttrib4fv(K.location,Tt);break;default:s.vertexAttrib1fv(K.location,Tt)}}}}E()}function k(){D();for(let _ in n){let S=n[_];for(let z in S){let F=S[z];for(let V in F)h(F[V].object),delete F[V];delete S[z]}delete n[_]}}function P(_){if(n[_.id]===void 0)return;let S=n[_.id];for(let z in S){let F=S[z];for(let V in F)h(F[V].object),delete F[V];delete S[z]}delete n[_.id]}function L(_){for(let S in n){let z=n[S];if(z[_.id]===void 0)continue;let F=z[_.id];for(let V in F)h(F[V].object),delete F[V];delete z[_.id]}}function D(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:w,dispose:k,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Um(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Nm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(L){return!(L!==Mn&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let D=L===or&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Yn&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Gn&&!D)}function l(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:k,maxSamples:P}}function km(s){let t=this,e=null,n=0,i=!1,r=!1,o=new rn,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,y=E*4,v=p.clippingState||null;l.value=v,v=h(g,d,y,f);for(let k=0;k!==y;++k)v[k]=e[k];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==x;++y,v+=4)o.copy(u[y]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Om(s){let t=new WeakMap;function e(o,a){return a===za?o.mapping=cs:a===Fa&&(o.mapping=hs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===za||a===Fa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new _l(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Qr=class extends Kr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ns=4,th=[.125,.215,.35,.446,.526,.582],Ti=20,xa=new Qr,eh=new te,_a=null,ya=0,va=0,Ma=!1,Si=(1+Math.sqrt(5))/2,ts=1/Si,nh=[new C(-Si,ts,0),new C(Si,ts,0),new C(-ts,0,Si),new C(ts,0,Si),new C(0,Si,-ts),new C(0,Si,ts),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],gs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){_a=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_a,ya,va),this._renderer.xr.enabled=Ma,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_a=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:or,format:Mn,colorSpace:Es,depthBuffer:!1},i=ih(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ih(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zm(r)),this._blurMaterial=Fm(r,t,e)}return i}_compileMaterial(t){let e=new Rt(this._lodPlanes[0],t);this._renderer.compile(e,xa)}_sceneToCubeUV(t,e,n,i){let a=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(eh),h.toneMapping=ci,h.autoClear=!1;let f=new Re({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new Rt(new Gt,f),x=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(eh),x=!0);for(let p=0;p<6;p++){let E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let y=this._cubeSize;Ir(i,E*y,p>2?y:0,y,y),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===cs||t.mapping===hs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ir(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,xa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nh[(i-r-1)%nh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Rt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ti-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);let p=[],E=0;for(let L=0;L<Ti;++L){let D=L/x,w=Math.exp(-D*D/2);p.push(w),L===0?E+=w:L<m&&(E+=2*w)}for(let L=0;L<p.length;L++)p[L]=p[L]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let v=this._sizeLods[i],k=3*v*(i>y-ns?i-y+ns:0),P=4*(this._cubeSize-v);Ir(e,k,P,3*v,2*v),l.setRenderTarget(e),l.render(u,xa)}};function zm(s){let t=[],e=[],n=[],i=s,r=s-ns+1+th.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-ns?l=th[o-s+ns-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,E=new Float32Array(x*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let P=0;P<f;P++){let L=P%3*2/3-1,D=P>2?0:-1,w=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];E.set(w,x*g*P),y.set(d,m*g*P);let _=[P,P,P,P,P,P];v.set(_,p*g*P)}let k=new Ce;k.setAttribute("position",new hn(E,x)),k.setAttribute("uv",new hn(y,m)),k.setAttribute("faceIndex",new hn(v,p)),t.push(k),i>ns&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ih(s,t,e){let n=new Zn(s,t,e);return n.texture.mapping=Mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Fm(s,t,e){let n=new Float32Array(Ti),i=new C(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:oc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function sh(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function rh(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}function Bm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===za||l===Fa,h=l===cs||l===hs;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new gs(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new gs(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Hm(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Bs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vm(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let E=f.array;x=f.version;for(let y=0,v=E.length;y<v;y+=3){let k=E[y+0],P=E[y+1],L=E[y+2];d.push(k,P,P,L,L,k)}}else if(g!==void 0){let E=g.array;x=g.version;for(let y=0,v=E.length/3-1;y<v;y+=3){let k=y+0,P=y+1,L=y+2;d.push(k,P,P,L,L,k)}}else return;let m=new(jh(d)?jr:Zr)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Gm(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*x[E];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Wm(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Xm(s,t,e){let n=new WeakMap,i=new _e;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,k=1;v>t.maxTextureSize&&(k=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let P=new Float32Array(v*k*4*u),L=new $r(P,v,k,u);L.type=Gn,L.needsUpdate=!0;let D=y*4;for(let _=0;_<u;_++){let S=m[_],z=p[_],F=E[_],V=v*k*4*_;for(let Q=0;Q<S.count;Q++){let W=Q*D;f===!0&&(i.fromBufferAttribute(S,Q),P[V+W+0]=i.x,P[V+W+1]=i.y,P[V+W+2]=i.z,P[V+W+3]=0),g===!0&&(i.fromBufferAttribute(z,Q),P[V+W+4]=i.x,P[V+W+5]=i.y,P[V+W+6]=i.z,P[V+W+7]=0),x===!0&&(i.fromBufferAttribute(F,Q),P[V+W+8]=i.x,P[V+W+9]=i.y,P[V+W+10]=i.z,P[V+W+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:L,size:new mt(v,k)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function qm(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var to=class extends on{constructor(t,e,n,i,r,o,a,l,c,h=rs){if(h!==rs&&h!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===rs&&(n=Ci),n===void 0&&h===ds&&(n=us),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},tu=new on,oh=new to(1,1),eu=new $r,nu=new gl,iu=new Jr,ah=[],lh=[],ch=new Float32Array(16),hh=new Float32Array(9),uh=new Float32Array(4);function ws(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=ah[i];if(r===void 0&&(r=new Float32Array(i),ah[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ke(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Oe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function So(s,t){let e=lh[t];e===void 0&&(e=new Int32Array(t),lh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Ym(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function $m(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2fv(this.addr,t),Oe(e,t)}}function Zm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;s.uniform3fv(this.addr,t),Oe(e,t)}}function jm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4fv(this.addr,t),Oe(e,t)}}function Km(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(ke(e,n))return;uh.set(n),s.uniformMatrix2fv(this.addr,!1,uh),Oe(e,n)}}function Jm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(ke(e,n))return;hh.set(n),s.uniformMatrix3fv(this.addr,!1,hh),Oe(e,n)}}function Qm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(ke(e,n))return;ch.set(n),s.uniformMatrix4fv(this.addr,!1,ch),Oe(e,n)}}function t0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function e0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2iv(this.addr,t),Oe(e,t)}}function n0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3iv(this.addr,t),Oe(e,t)}}function i0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4iv(this.addr,t),Oe(e,t)}}function s0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function r0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;s.uniform2uiv(this.addr,t),Oe(e,t)}}function o0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;s.uniform3uiv(this.addr,t),Oe(e,t)}}function a0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;s.uniform4uiv(this.addr,t),Oe(e,t)}}function l0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(oh.compareFunction=Zh,r=oh):r=tu,e.setTexture2D(t||r,i)}function c0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||nu,i)}function h0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||iu,i)}function u0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||eu,i)}function d0(s){switch(s){case 5126:return Ym;case 35664:return $m;case 35665:return Zm;case 35666:return jm;case 35674:return Km;case 35675:return Jm;case 35676:return Qm;case 5124:case 35670:return t0;case 35667:case 35671:return e0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return s0;case 36294:return r0;case 36295:return o0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return u0}}function f0(s,t){s.uniform1fv(this.addr,t)}function p0(s,t){let e=ws(t,this.size,2);s.uniform2fv(this.addr,e)}function m0(s,t){let e=ws(t,this.size,3);s.uniform3fv(this.addr,e)}function g0(s,t){let e=ws(t,this.size,4);s.uniform4fv(this.addr,e)}function x0(s,t){let e=ws(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function _0(s,t){let e=ws(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function y0(s,t){let e=ws(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function v0(s,t){s.uniform1iv(this.addr,t)}function M0(s,t){s.uniform2iv(this.addr,t)}function b0(s,t){s.uniform3iv(this.addr,t)}function S0(s,t){s.uniform4iv(this.addr,t)}function E0(s,t){s.uniform1uiv(this.addr,t)}function w0(s,t){s.uniform2uiv(this.addr,t)}function T0(s,t){s.uniform3uiv(this.addr,t)}function A0(s,t){s.uniform4uiv(this.addr,t)}function R0(s,t,e){let n=this.cache,i=t.length,r=So(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||tu,r[o])}function C0(s,t,e){let n=this.cache,i=t.length,r=So(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||nu,r[o])}function P0(s,t,e){let n=this.cache,i=t.length,r=So(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||iu,r[o])}function I0(s,t,e){let n=this.cache,i=t.length,r=So(e,i);ke(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||eu,r[o])}function L0(s){switch(s){case 5126:return f0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return x0;case 35675:return _0;case 35676:return y0;case 5124:case 35670:return v0;case 35667:case 35671:return M0;case 35668:case 35672:return b0;case 35669:case 35673:return S0;case 5125:return E0;case 36294:return w0;case 36295:return T0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return I0}}var yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=d0(e.type)}},vl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=L0(e.type)}},Ml=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},ba=/(\w+)(\])?(\[|\.)?/g;function dh(s,t){s.seq.push(t),s.map[t.id]=t}function D0(s,t,e){let n=s.name,i=n.length;for(ba.lastIndex=0;;){let r=ba.exec(n),o=ba.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){dh(e,c===void 0?new yl(a,s,t):new vl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Ml(a),dh(e,u)),e=u}}}var as=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);D0(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function fh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var U0=37297,N0=0;function k0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ph=new ne;function O0(s){le._getMatrix(ph,le.workingColorSpace,s);let t=`mat3( ${ph.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(s)){case bo:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function mh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+k0(s.getShaderSource(t),o)}else return i}function z0(s,t){let e=O0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function F0(s,t){let e;switch(t){case Zu:e="Linear";break;case ju:e="Reinhard";break;case Ku:e="Cineon";break;case Jl:e="ACESFilmic";break;case Qu:e="AgX";break;case td:e="Neutral";break;case Ju:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Lr=new C;function B0(){le.getLuminanceCoefficients(Lr);let s=Lr.x.toFixed(4),t=Lr.y.toFixed(4),e=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function V0(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function G0(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Hs(s){return s!==""}function gh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var W0=/^[ \t]*#include +<([\w\d./]+)>/gm;function bl(s){return s.replace(W0,q0)}var X0=new Map;function q0(s,t){let e=re[t];if(e===void 0){let n=X0.get(t);if(n!==void 0)e=re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bl(e)}var Y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(s){return s.replace(Y0,$0)}function $0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function yh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Z0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Nh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Kl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function j0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case cs:case hs:t="ENVMAP_TYPE_CUBE";break;case Mo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function K0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function J0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case kh:t="ENVMAP_BLENDING_MULTIPLY";break;case Yu:t="ENVMAP_BLENDING_MIX";break;case $u:t="ENVMAP_BLENDING_ADD";break}return t}function Q0(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function tg(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Z0(e),c=j0(e),h=K0(e),u=J0(e),d=Q0(e),f=H0(e),g=V0(r),x=i.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),p.length>0&&(p+=`
`)):(m=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),p=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?re.tonemapping_pars_fragment:"",e.toneMapping!==ci?F0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,z0("linearToOutputTexel",e.outputColorSpace),B0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),o=bl(o),o=gh(o,e),o=xh(o,e),a=bl(a),a=gh(a,e),a=xh(a,e),o=_h(o),a=_h(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=E+m+o,v=E+p+a,k=fh(i,i.VERTEX_SHADER,y),P=fh(i,i.FRAGMENT_SHADER,v);i.attachShader(x,k),i.attachShader(x,P),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function L(S){if(s.debug.checkShaderErrors){let z=i.getProgramInfoLog(x).trim(),F=i.getShaderInfoLog(k).trim(),V=i.getShaderInfoLog(P).trim(),Q=!0,W=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,k,P);else{let ot=mh(i,k,"vertex"),K=mh(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+z+`
`+ot+`
`+K)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||V==="")&&(W=!1);W&&(S.diagnostics={runnable:Q,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(k),i.deleteShader(P),D=new as(i,x),w=G0(i,x)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(x,U0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=N0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=k,this.fragmentShader=P,this}var eg=0,Sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new El(t),e.set(t,n)),n}},El=class{constructor(t){this.id=eg++,this.code=t,this.usedTimes=0}};function ng(s,t,e,n,i,r,o){let a=new Zs,l=new Sl,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,_,S,z,F){let V=z.fog,Q=F.geometry,W=w.isMeshStandardMaterial?z.environment:null,ot=(w.isMeshStandardMaterial?e:t).get(w.envMap||W),K=ot&&ot.mapping===Mo?ot.image.height:null,pt=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let Tt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,yt=Tt!==void 0?Tt.length:0,Bt=0;Q.morphAttributes.position!==void 0&&(Bt=1),Q.morphAttributes.normal!==void 0&&(Bt=2),Q.morphAttributes.color!==void 0&&(Bt=3);let St,X,st,gt;if(pt){let Z=Rn[pt];St=Z.vertexShader,X=Z.fragmentShader}else St=w.vertexShader,X=w.fragmentShader,l.update(w),st=l.getVertexShaderID(w),gt=l.getFragmentShaderID(w);let dt=s.getRenderTarget(),Nt=s.state.buffers.depth.getReversed(),kt=F.isInstancedMesh===!0,A=F.isBatchedMesh===!0,J=!!w.map,U=!!w.matcap,et=!!ot,R=!!w.aoMap,bt=!!w.lightMap,nt=!!w.bumpMap,At=!!w.normalMap,xt=!!w.displacementMap,Vt=!!w.emissiveMap,Lt=!!w.metalnessMap,T=!!w.roughnessMap,M=w.anisotropy>0,G=w.clearcoat>0,rt=w.dispersion>0,ut=w.iridescence>0,it=w.sheen>0,Mt=w.transmission>0,I=M&&!!w.anisotropyMap,N=G&&!!w.clearcoatMap,lt=G&&!!w.clearcoatNormalMap,Y=G&&!!w.clearcoatRoughnessMap,ft=ut&&!!w.iridescenceMap,_t=ut&&!!w.iridescenceThicknessMap,Ct=it&&!!w.sheenColorMap,Pt=it&&!!w.sheenRoughnessMap,Kt=!!w.specularMap,$t=!!w.specularColorMap,Zt=!!w.specularIntensityMap,O=Mt&&!!w.transmissionMap,wt=Mt&&!!w.thicknessMap,tt=!!w.gradientMap,at=!!w.alphaMap,It=w.alphaTest>0,Dt=!!w.alphaHash,Jt=!!w.extensions,ct=ci;w.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ct=s.toneMapping);let q={shaderID:pt,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:X,defines:w.defines,customVertexShaderID:st,customFragmentShaderID:gt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:A,batchingColor:A&&F._colorsTexture!==null,instancing:kt,instancingColor:kt&&F.instanceColor!==null,instancingMorph:kt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?s.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Es,alphaToCoverage:!!w.alphaToCoverage,map:J,matcap:U,envMap:et,envMapMode:et&&ot.mapping,envMapCubeUVHeight:K,aoMap:R,lightMap:bt,bumpMap:nt,normalMap:At,displacementMap:d&&xt,emissiveMap:Vt,normalMapObjectSpace:At&&w.normalMapType===sd,normalMapTangentSpace:At&&w.normalMapType===$h,metalnessMap:Lt,roughnessMap:T,anisotropy:M,anisotropyMap:I,clearcoat:G,clearcoatMap:N,clearcoatNormalMap:lt,clearcoatRoughnessMap:Y,dispersion:rt,iridescence:ut,iridescenceMap:ft,iridescenceThicknessMap:_t,sheen:it,sheenColorMap:Ct,sheenRoughnessMap:Pt,specularMap:Kt,specularColorMap:$t,specularIntensityMap:Zt,transmission:Mt,transmissionMap:O,thicknessMap:wt,gradientMap:tt,opaque:w.transparent===!1&&w.blending===ss&&w.alphaToCoverage===!1,alphaMap:at,alphaTest:It,alphaHash:Dt,combine:w.combine,mapUv:J&&x(w.map.channel),aoMapUv:R&&x(w.aoMap.channel),lightMapUv:bt&&x(w.lightMap.channel),bumpMapUv:nt&&x(w.bumpMap.channel),normalMapUv:At&&x(w.normalMap.channel),displacementMapUv:xt&&x(w.displacementMap.channel),emissiveMapUv:Vt&&x(w.emissiveMap.channel),metalnessMapUv:Lt&&x(w.metalnessMap.channel),roughnessMapUv:T&&x(w.roughnessMap.channel),anisotropyMapUv:I&&x(w.anisotropyMap.channel),clearcoatMapUv:N&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:lt&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&x(w.sheenRoughnessMap.channel),specularMapUv:Kt&&x(w.specularMap.channel),specularColorMapUv:$t&&x(w.specularColorMap.channel),specularIntensityMapUv:Zt&&x(w.specularIntensityMap.channel),transmissionMapUv:O&&x(w.transmissionMap.channel),thicknessMapUv:wt&&x(w.thicknessMap.channel),alphaMapUv:at&&x(w.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(At||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Q.attributes.uv&&(J||at),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Nt,skinning:F.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Bt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&S.length>0,shadowMapType:s.shadowMap.type,toneMapping:ct,decodeVideoTexture:J&&w.map.isVideoTexture===!0&&le.getTransfer(w.map.colorSpace)===xe,decodeVideoTextureEmissive:Vt&&w.emissiveMap.isVideoTexture===!0&&le.getTransfer(w.emissiveMap.colorSpace)===xe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ze,flipSided:w.side===Le,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Jt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&w.extensions.multiDraw===!0||A)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return q.vertexUv1s=c.has(1),q.vertexUv2s=c.has(2),q.vertexUv3s=c.has(3),c.clear(),q}function p(w){let _=[];if(w.shaderID?_.push(w.shaderID):(_.push(w.customVertexShaderID),_.push(w.customFragmentShaderID)),w.defines!==void 0)for(let S in w.defines)_.push(S),_.push(w.defines[S]);return w.isRawShaderMaterial===!1&&(E(_,w),y(_,w),_.push(s.outputColorSpace)),_.push(w.customProgramCacheKey),_.join()}function E(w,_){w.push(_.precision),w.push(_.outputColorSpace),w.push(_.envMapMode),w.push(_.envMapCubeUVHeight),w.push(_.mapUv),w.push(_.alphaMapUv),w.push(_.lightMapUv),w.push(_.aoMapUv),w.push(_.bumpMapUv),w.push(_.normalMapUv),w.push(_.displacementMapUv),w.push(_.emissiveMapUv),w.push(_.metalnessMapUv),w.push(_.roughnessMapUv),w.push(_.anisotropyMapUv),w.push(_.clearcoatMapUv),w.push(_.clearcoatNormalMapUv),w.push(_.clearcoatRoughnessMapUv),w.push(_.iridescenceMapUv),w.push(_.iridescenceThicknessMapUv),w.push(_.sheenColorMapUv),w.push(_.sheenRoughnessMapUv),w.push(_.specularMapUv),w.push(_.specularColorMapUv),w.push(_.specularIntensityMapUv),w.push(_.transmissionMapUv),w.push(_.thicknessMapUv),w.push(_.combine),w.push(_.fogExp2),w.push(_.sizeAttenuation),w.push(_.morphTargetsCount),w.push(_.morphAttributeCount),w.push(_.numDirLights),w.push(_.numPointLights),w.push(_.numSpotLights),w.push(_.numSpotLightMaps),w.push(_.numHemiLights),w.push(_.numRectAreaLights),w.push(_.numDirLightShadows),w.push(_.numPointLightShadows),w.push(_.numSpotLightShadows),w.push(_.numSpotLightShadowsWithMaps),w.push(_.numLightProbes),w.push(_.shadowMapType),w.push(_.toneMapping),w.push(_.numClippingPlanes),w.push(_.numClipIntersection),w.push(_.depthPacking)}function y(w,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){let _=g[w.type],S;if(_){let z=Rn[_];S=Xd.clone(z.uniforms)}else S=w.uniforms;return S}function k(w,_){let S;for(let z=0,F=h.length;z<F;z++){let V=h[z];if(V.cacheKey===_){S=V,++S.usedTimes;break}}return S===void 0&&(S=new tg(s,_,w,r),h.push(S)),S}function P(w){if(--w.usedTimes===0){let _=h.indexOf(w);h[_]=h[h.length-1],h.pop(),w.destroy()}}function L(w){l.remove(w)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:k,releaseProgram:P,releaseShaderCache:L,programs:h,dispose:D}}function ig(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function sg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function vh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Mh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,x,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||sg),n.length>1&&n.sort(d||vh),i.length>1&&i.sort(d||vh)}function h(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function rg(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Mh,s.set(n,[o])):i>=r.length?(o=new Mh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function og(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new te};break;case"SpotLight":e={position:new C,direction:new C,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function ag(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var lg=0;function cg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function hg(s){let t=new og,e=ag(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let i=new C,r=new Me,o=new Me;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,E=0,y=0,v=0,k=0,P=0,L=0;c.sort(cg);for(let w=0,_=c.length;w<_;w++){let S=c[w],z=S.color,F=S.intensity,V=S.distance,Q=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=z.r*F,u+=z.g*F,d+=z.b*F;else if(S.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(S.sh.coefficients[W],F);L++}else if(S.isDirectionalLight){let W=t.get(S);if(W.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let ot=S.shadow,K=e.get(S);K.shadowIntensity=ot.intensity,K.shadowBias=ot.bias,K.shadowNormalBias=ot.normalBias,K.shadowRadius=ot.radius,K.shadowMapSize=ot.mapSize,n.directionalShadow[f]=K,n.directionalShadowMap[f]=Q,n.directionalShadowMatrix[f]=S.shadow.matrix,E++}n.directional[f]=W,f++}else if(S.isSpotLight){let W=t.get(S);W.position.setFromMatrixPosition(S.matrixWorld),W.color.copy(z).multiplyScalar(F),W.distance=V,W.coneCos=Math.cos(S.angle),W.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),W.decay=S.decay,n.spot[x]=W;let ot=S.shadow;if(S.map&&(n.spotLightMap[k]=S.map,k++,ot.updateMatrices(S),S.castShadow&&P++),n.spotLightMatrix[x]=ot.matrix,S.castShadow){let K=e.get(S);K.shadowIntensity=ot.intensity,K.shadowBias=ot.bias,K.shadowNormalBias=ot.normalBias,K.shadowRadius=ot.radius,K.shadowMapSize=ot.mapSize,n.spotShadow[x]=K,n.spotShadowMap[x]=Q,v++}x++}else if(S.isRectAreaLight){let W=t.get(S);W.color.copy(z).multiplyScalar(F),W.halfWidth.set(S.width*.5,0,0),W.halfHeight.set(0,S.height*.5,0),n.rectArea[m]=W,m++}else if(S.isPointLight){let W=t.get(S);if(W.color.copy(S.color).multiplyScalar(S.intensity),W.distance=S.distance,W.decay=S.decay,S.castShadow){let ot=S.shadow,K=e.get(S);K.shadowIntensity=ot.intensity,K.shadowBias=ot.bias,K.shadowNormalBias=ot.normalBias,K.shadowRadius=ot.radius,K.shadowMapSize=ot.mapSize,K.shadowCameraNear=ot.camera.near,K.shadowCameraFar=ot.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=S.shadow.matrix,y++}n.point[g]=W,g++}else if(S.isHemisphereLight){let W=t.get(S);W.skyColor.copy(S.color).multiplyScalar(F),W.groundColor.copy(S.groundColor).multiplyScalar(F),n.hemi[p]=W,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ut.LTC_FLOAT_1,n.rectAreaLTC2=Ut.LTC_FLOAT_2):(n.rectAreaLTC1=Ut.LTC_HALF_1,n.rectAreaLTC2=Ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==E||D.numPointShadows!==y||D.numSpotShadows!==v||D.numSpotMaps!==k||D.numLightProbes!==L)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+k-P,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,D.directionalLength=f,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=E,D.numPointShadows=y,D.numSpotShadows=v,D.numSpotMaps=k,D.numLightProbes=L,n.version=lg++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){let y=c[p];if(y.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(y.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function bh(s){let t=new hg(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ug(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new bh(s),t.set(i,[a])):r>=o.length?(a=new bh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var wl=class extends ui{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Tl=class extends ui{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fg=`uniform sampler2D shadow_pass;
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
}`;function pg(s,t,e){let n=new js,i=new mt,r=new mt,o=new _e,a=new wl({depthPacking:id}),l=new Tl,c={},h=e.maxTextureSize,u={[hi]:Le,[Le]:hi,[Ze]:Ze},d=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:dg,fragmentShader:fg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ce;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Rt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nh;let p=this.type;this.render=function(P,L,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let w=s.getRenderTarget(),_=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),z=s.state;z.setBlending(li),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let F=p!==Vn&&this.type===Vn,V=p===Vn&&this.type!==Vn;for(let Q=0,W=P.length;Q<W;Q++){let ot=P[Q],K=ot.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);let pt=K.getFrameExtents();if(i.multiply(pt),r.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/pt.x),i.x=r.x*pt.x,K.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/pt.y),i.y=r.y*pt.y,K.mapSize.y=r.y)),K.map===null||F===!0||V===!0){let yt=this.type!==Vn?{minFilter:bn,magFilter:bn}:{};K.map!==null&&K.map.dispose(),K.map=new Zn(i.x,i.y,yt),K.map.texture.name=ot.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();let Tt=K.getViewportCount();for(let yt=0;yt<Tt;yt++){let Bt=K.getViewport(yt);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),z.viewport(o),K.updateMatrices(ot,yt),n=K.getFrustum(),v(L,D,K.camera,ot,this.type)}K.isPointLightShadow!==!0&&this.type===Vn&&E(K,D),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,_,S)};function E(P,L){let D=t.update(x);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Zn(i.x,i.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(L,null,D,d,x,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(L,null,D,f,x,null)}function y(P,L,D,w){let _=null,S=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(S!==void 0)_=S;else if(_=D.isPointLight===!0?l:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){let z=_.uuid,F=L.uuid,V=c[z];V===void 0&&(V={},c[z]=V);let Q=V[F];Q===void 0&&(Q=_.clone(),V[F]=Q,L.addEventListener("dispose",k)),_=Q}if(_.visible=L.visible,_.wireframe=L.wireframe,w===Vn?_.side=L.shadowSide!==null?L.shadowSide:L.side:_.side=L.shadowSide!==null?L.shadowSide:u[L.side],_.alphaMap=L.alphaMap,_.alphaTest=L.alphaTest,_.map=L.map,_.clipShadows=L.clipShadows,_.clippingPlanes=L.clippingPlanes,_.clipIntersection=L.clipIntersection,_.displacementMap=L.displacementMap,_.displacementScale=L.displacementScale,_.displacementBias=L.displacementBias,_.wireframeLinewidth=L.wireframeLinewidth,_.linewidth=L.linewidth,D.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let z=s.properties.get(_);z.light=D}return _}function v(P,L,D,w,_){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===Vn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);let F=t.update(P),V=P.material;if(Array.isArray(V)){let Q=F.groups;for(let W=0,ot=Q.length;W<ot;W++){let K=Q[W],pt=V[K.materialIndex];if(pt&&pt.visible){let Tt=y(P,pt,w,_);P.onBeforeShadow(s,P,L,D,F,Tt,K),s.renderBufferDirect(D,null,F,Tt,P,K),P.onAfterShadow(s,P,L,D,F,Tt,K)}}}else if(V.visible){let Q=y(P,V,w,_);P.onBeforeShadow(s,P,L,D,F,Q,null),s.renderBufferDirect(D,null,F,Q,P,null),P.onAfterShadow(s,P,L,D,F,Q,null)}}let z=P.children;for(let F=0,V=z.length;F<V;F++)v(z[F],L,D,w,_)}function k(P){P.target.removeEventListener("dispose",k);for(let D in c){let w=c[D],_=P.target.uuid;_ in w&&(w[_].dispose(),delete w[_])}}}var mg={[Ia]:La,[Da]:ka,[Ua]:Oa,[ls]:Na,[La]:Ia,[ka]:Da,[Oa]:Ua,[Na]:ls};function gg(s,t){function e(){let O=!1,wt=new _e,tt=null,at=new _e(0,0,0,0);return{setMask:function(It){tt!==It&&!O&&(s.colorMask(It,It,It,It),tt=It)},setLocked:function(It){O=It},setClear:function(It,Dt,Jt,ct,q){q===!0&&(It*=ct,Dt*=ct,Jt*=ct),wt.set(It,Dt,Jt,ct),at.equals(wt)===!1&&(s.clearColor(It,Dt,Jt,ct),at.copy(wt))},reset:function(){O=!1,tt=null,at.set(-1,0,0,0)}}}function n(){let O=!1,wt=!1,tt=null,at=null,It=null;return{setReversed:function(Dt){if(wt!==Dt){let Jt=t.get("EXT_clip_control");wt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);let ct=It;It=null,this.setClear(ct)}wt=Dt},getReversed:function(){return wt},setTest:function(Dt){Dt?dt(s.DEPTH_TEST):Nt(s.DEPTH_TEST)},setMask:function(Dt){tt!==Dt&&!O&&(s.depthMask(Dt),tt=Dt)},setFunc:function(Dt){if(wt&&(Dt=mg[Dt]),at!==Dt){switch(Dt){case Ia:s.depthFunc(s.NEVER);break;case La:s.depthFunc(s.ALWAYS);break;case Da:s.depthFunc(s.LESS);break;case ls:s.depthFunc(s.LEQUAL);break;case Ua:s.depthFunc(s.EQUAL);break;case Na:s.depthFunc(s.GEQUAL);break;case ka:s.depthFunc(s.GREATER);break;case Oa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}at=Dt}},setLocked:function(Dt){O=Dt},setClear:function(Dt){It!==Dt&&(wt&&(Dt=1-Dt),s.clearDepth(Dt),It=Dt)},reset:function(){O=!1,tt=null,at=null,It=null,wt=!1}}}function i(){let O=!1,wt=null,tt=null,at=null,It=null,Dt=null,Jt=null,ct=null,q=null;return{setTest:function(Z){O||(Z?dt(s.STENCIL_TEST):Nt(s.STENCIL_TEST))},setMask:function(Z){wt!==Z&&!O&&(s.stencilMask(Z),wt=Z)},setFunc:function(Z,ht,vt){(tt!==Z||at!==ht||It!==vt)&&(s.stencilFunc(Z,ht,vt),tt=Z,at=ht,It=vt)},setOp:function(Z,ht,vt){(Dt!==Z||Jt!==ht||ct!==vt)&&(s.stencilOp(Z,ht,vt),Dt=Z,Jt=ht,ct=vt)},setLocked:function(Z){O=Z},setClear:function(Z){q!==Z&&(s.clearStencil(Z),q=Z)},reset:function(){O=!1,wt=null,tt=null,at=null,It=null,Dt=null,Jt=null,ct=null,q=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,E=null,y=null,v=null,k=null,P=null,L=new te(0,0,0),D=0,w=!1,_=null,S=null,z=null,F=null,V=null,Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ot=0,K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(K)[1]),W=ot>=1):K.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),W=ot>=2);let pt=null,Tt={},yt=s.getParameter(s.SCISSOR_BOX),Bt=s.getParameter(s.VIEWPORT),St=new _e().fromArray(yt),X=new _e().fromArray(Bt);function st(O,wt,tt,at){let It=new Uint8Array(4),Dt=s.createTexture();s.bindTexture(O,Dt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Jt=0;Jt<tt;Jt++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(wt,0,s.RGBA,1,1,at,0,s.RGBA,s.UNSIGNED_BYTE,It):s.texImage2D(wt+Jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,It);return Dt}let gt={};gt[s.TEXTURE_2D]=st(s.TEXTURE_2D,s.TEXTURE_2D,1),gt[s.TEXTURE_CUBE_MAP]=st(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[s.TEXTURE_2D_ARRAY]=st(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),gt[s.TEXTURE_3D]=st(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(s.DEPTH_TEST),o.setFunc(ls),nt(!1),At(Sc),dt(s.CULL_FACE),R(li);function dt(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function Nt(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function kt(O,wt){return u[O]!==wt?(s.bindFramebuffer(O,wt),u[O]=wt,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=wt),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=wt),!0):!1}function A(O,wt){let tt=f,at=!1;if(O){tt=d.get(wt),tt===void 0&&(tt=[],d.set(wt,tt));let It=O.textures;if(tt.length!==It.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let Dt=0,Jt=It.length;Dt<Jt;Dt++)tt[Dt]=s.COLOR_ATTACHMENT0+Dt;tt.length=It.length,at=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,at=!0);at&&s.drawBuffers(tt)}function J(O){return g!==O?(s.useProgram(O),g=O,!0):!1}let U={[Ei]:s.FUNC_ADD,[Pu]:s.FUNC_SUBTRACT,[Iu]:s.FUNC_REVERSE_SUBTRACT};U[Lu]=s.MIN,U[Du]=s.MAX;let et={[Uu]:s.ZERO,[Nu]:s.ONE,[ku]:s.SRC_COLOR,[Ca]:s.SRC_ALPHA,[Vu]:s.SRC_ALPHA_SATURATE,[Bu]:s.DST_COLOR,[zu]:s.DST_ALPHA,[Ou]:s.ONE_MINUS_SRC_COLOR,[Pa]:s.ONE_MINUS_SRC_ALPHA,[Hu]:s.ONE_MINUS_DST_COLOR,[Fu]:s.ONE_MINUS_DST_ALPHA,[Gu]:s.CONSTANT_COLOR,[Wu]:s.ONE_MINUS_CONSTANT_COLOR,[Xu]:s.CONSTANT_ALPHA,[qu]:s.ONE_MINUS_CONSTANT_ALPHA};function R(O,wt,tt,at,It,Dt,Jt,ct,q,Z){if(O===li){x===!0&&(Nt(s.BLEND),x=!1);return}if(x===!1&&(dt(s.BLEND),x=!0),O!==Cu){if(O!==m||Z!==w){if((p!==Ei||v!==Ei)&&(s.blendEquation(s.FUNC_ADD),p=Ei,v=Ei),Z)switch(O){case ss:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ec:s.blendFunc(s.ONE,s.ONE);break;case wc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ss:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ec:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case wc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}E=null,y=null,k=null,P=null,L.set(0,0,0),D=0,m=O,w=Z}return}It=It||wt,Dt=Dt||tt,Jt=Jt||at,(wt!==p||It!==v)&&(s.blendEquationSeparate(U[wt],U[It]),p=wt,v=It),(tt!==E||at!==y||Dt!==k||Jt!==P)&&(s.blendFuncSeparate(et[tt],et[at],et[Dt],et[Jt]),E=tt,y=at,k=Dt,P=Jt),(ct.equals(L)===!1||q!==D)&&(s.blendColor(ct.r,ct.g,ct.b,q),L.copy(ct),D=q),m=O,w=!1}function bt(O,wt){O.side===Ze?Nt(s.CULL_FACE):dt(s.CULL_FACE);let tt=O.side===Le;wt&&(tt=!tt),nt(tt),O.blending===ss&&O.transparent===!1?R(li):R(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let at=O.stencilWrite;a.setTest(at),at&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Vt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?dt(s.SAMPLE_ALPHA_TO_COVERAGE):Nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(O){_!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),_=O)}function At(O){O!==Au?(dt(s.CULL_FACE),O!==S&&(O===Sc?s.cullFace(s.BACK):O===Ru?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Nt(s.CULL_FACE),S=O}function xt(O){O!==z&&(W&&s.lineWidth(O),z=O)}function Vt(O,wt,tt){O?(dt(s.POLYGON_OFFSET_FILL),(F!==wt||V!==tt)&&(s.polygonOffset(wt,tt),F=wt,V=tt)):Nt(s.POLYGON_OFFSET_FILL)}function Lt(O){O?dt(s.SCISSOR_TEST):Nt(s.SCISSOR_TEST)}function T(O){O===void 0&&(O=s.TEXTURE0+Q-1),pt!==O&&(s.activeTexture(O),pt=O)}function M(O,wt,tt){tt===void 0&&(pt===null?tt=s.TEXTURE0+Q-1:tt=pt);let at=Tt[tt];at===void 0&&(at={type:void 0,texture:void 0},Tt[tt]=at),(at.type!==O||at.texture!==wt)&&(pt!==tt&&(s.activeTexture(tt),pt=tt),s.bindTexture(O,wt||gt[O]),at.type=O,at.texture=wt)}function G(){let O=Tt[pt];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function rt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function I(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function N(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(O){St.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),St.copy(O))}function Pt(O){X.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),X.copy(O))}function Kt(O,wt){let tt=c.get(wt);tt===void 0&&(tt=new WeakMap,c.set(wt,tt));let at=tt.get(O);at===void 0&&(at=s.getUniformBlockIndex(wt,O.name),tt.set(O,at))}function $t(O,wt){let at=c.get(wt).get(O);l.get(wt)!==at&&(s.uniformBlockBinding(wt,at,O.__bindingPointIndex),l.set(wt,at))}function Zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},pt=null,Tt={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,E=null,y=null,v=null,k=null,P=null,L=new te(0,0,0),D=0,w=!1,_=null,S=null,z=null,F=null,V=null,St.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:dt,disable:Nt,bindFramebuffer:kt,drawBuffers:A,useProgram:J,setBlending:R,setMaterial:bt,setFlipSided:nt,setCullFace:At,setLineWidth:xt,setPolygonOffset:Vt,setScissorTest:Lt,activeTexture:T,bindTexture:M,unbindTexture:G,compressedTexImage2D:rt,compressedTexImage3D:ut,texImage2D:ft,texImage3D:_t,updateUBOMapping:Kt,uniformBlockBinding:$t,texStorage2D:lt,texStorage3D:Y,texSubImage2D:it,texSubImage3D:Mt,compressedTexSubImage2D:I,compressedTexSubImage3D:N,scissor:Ct,viewport:Pt,reset:Zt}}function Sh(s,t,e,n){let i=xg(n);switch(e){case Hh:return s*t;case Gh:return s*t;case Wh:return s*t*2;case Xh:return s*t/i.components*i.byteLength;case nc:return s*t/i.components*i.byteLength;case qh:return s*t*2/i.components*i.byteLength;case ic:return s*t*2/i.components*i.byteLength;case Vh:return s*t*3/i.components*i.byteLength;case Mn:return s*t*4/i.components*i.byteLength;case sc:return s*t*4/i.components*i.byteLength;case Fr:case Br:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Hr:case Vr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Va:case Wa:return Math.max(s,16)*Math.max(t,8)/4;case Ha:case Ga:return Math.max(s,8)*Math.max(t,8)/2;case Xa:case qa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ya:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $a:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ja:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case tl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case el:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case nl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case il:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case sl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case rl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ol:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case al:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Gr:case ll:case cl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Yh:case hl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ul:case dl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xg(s){switch(s){case Yn:case zh:return{byteLength:1,components:1};case $s:case Fh:case or:return{byteLength:2,components:1};case tc:case ec:return{byteLength:2,components:4};case Ci:case Ql:case Gn:return{byteLength:4,components:1};case Bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function _g(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return f?new OffscreenCanvas(T,M):qr("canvas")}function x(T,M,G){let rt=1,ut=Lt(T);if((ut.width>G||ut.height>G)&&(rt=G/Math.max(ut.width,ut.height)),rt<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let it=Math.floor(rt*ut.width),Mt=Math.floor(rt*ut.height);u===void 0&&(u=g(it,Mt));let I=M?g(it,Mt):u;return I.width=it,I.height=Mt,I.getContext("2d").drawImage(T,0,0,it,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+it+"x"+Mt+")."),I}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(T,M,G,rt,ut=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let it=M;if(M===s.RED&&(G===s.FLOAT&&(it=s.R32F),G===s.HALF_FLOAT&&(it=s.R16F),G===s.UNSIGNED_BYTE&&(it=s.R8)),M===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(it=s.R8UI),G===s.UNSIGNED_SHORT&&(it=s.R16UI),G===s.UNSIGNED_INT&&(it=s.R32UI),G===s.BYTE&&(it=s.R8I),G===s.SHORT&&(it=s.R16I),G===s.INT&&(it=s.R32I)),M===s.RG&&(G===s.FLOAT&&(it=s.RG32F),G===s.HALF_FLOAT&&(it=s.RG16F),G===s.UNSIGNED_BYTE&&(it=s.RG8)),M===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(it=s.RG8UI),G===s.UNSIGNED_SHORT&&(it=s.RG16UI),G===s.UNSIGNED_INT&&(it=s.RG32UI),G===s.BYTE&&(it=s.RG8I),G===s.SHORT&&(it=s.RG16I),G===s.INT&&(it=s.RG32I)),M===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(it=s.RGB8UI),G===s.UNSIGNED_SHORT&&(it=s.RGB16UI),G===s.UNSIGNED_INT&&(it=s.RGB32UI),G===s.BYTE&&(it=s.RGB8I),G===s.SHORT&&(it=s.RGB16I),G===s.INT&&(it=s.RGB32I)),M===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(it=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(it=s.RGBA16UI),G===s.UNSIGNED_INT&&(it=s.RGBA32UI),G===s.BYTE&&(it=s.RGBA8I),G===s.SHORT&&(it=s.RGBA16I),G===s.INT&&(it=s.RGBA32I)),M===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(it=s.RGB9_E5),M===s.RGBA){let Mt=ut?bo:le.getTransfer(rt);G===s.FLOAT&&(it=s.RGBA32F),G===s.HALF_FLOAT&&(it=s.RGBA16F),G===s.UNSIGNED_BYTE&&(it=Mt===xe?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(it=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(it=s.RGB5_A1)}return(it===s.R16F||it===s.R32F||it===s.RG16F||it===s.RG32F||it===s.RGBA16F||it===s.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function v(T,M){let G;return T?M===null||M===Ci||M===us?G=s.DEPTH24_STENCIL8:M===Gn?G=s.DEPTH32F_STENCIL8:M===$s&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ci||M===us?G=s.DEPTH_COMPONENT24:M===Gn?G=s.DEPTH_COMPONENT32F:M===$s&&(G=s.DEPTH_COMPONENT16),G}function k(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==bn&&T.minFilter!==Cn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function P(T){let M=T.target;M.removeEventListener("dispose",P),D(M),M.isVideoTexture&&h.delete(M)}function L(T){let M=T.target;M.removeEventListener("dispose",L),_(M)}function D(T){let M=n.get(T);if(M.__webglInit===void 0)return;let G=T.source,rt=d.get(G);if(rt){let ut=rt[M.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&w(T),Object.keys(rt).length===0&&d.delete(G)}n.remove(T)}function w(T){let M=n.get(T);s.deleteTexture(M.__webglTexture);let G=T.source,rt=d.get(G);delete rt[M.__cacheKey],o.memory.textures--}function _(T){let M=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(M.__webglFramebuffer[rt]))for(let ut=0;ut<M.__webglFramebuffer[rt].length;ut++)s.deleteFramebuffer(M.__webglFramebuffer[rt][ut]);else s.deleteFramebuffer(M.__webglFramebuffer[rt]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[rt])}else{if(Array.isArray(M.__webglFramebuffer))for(let rt=0;rt<M.__webglFramebuffer.length;rt++)s.deleteFramebuffer(M.__webglFramebuffer[rt]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let rt=0;rt<M.__webglColorRenderbuffer.length;rt++)M.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[rt]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let G=T.textures;for(let rt=0,ut=G.length;rt<ut;rt++){let it=n.get(G[rt]);it.__webglTexture&&(s.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(G[rt])}n.remove(T)}let S=0;function z(){S=0}function F(){let T=S;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),S+=1,T}function V(T){let M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function Q(T,M){let G=n.get(T);if(T.isVideoTexture&&xt(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){let rt=T.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,T,M);return}}e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+M)}function W(T,M){let G=n.get(T);if(T.version>0&&G.__version!==T.version){X(G,T,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+M)}function ot(T,M){let G=n.get(T);if(T.version>0&&G.__version!==T.version){X(G,T,M);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+M)}function K(T,M){let G=n.get(T);if(T.version>0&&G.__version!==T.version){st(G,T,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+M)}let pt={[qn]:s.REPEAT,[Ai]:s.CLAMP_TO_EDGE,[Ba]:s.MIRRORED_REPEAT},Tt={[bn]:s.NEAREST,[ed]:s.NEAREST_MIPMAP_NEAREST,[dr]:s.NEAREST_MIPMAP_LINEAR,[Cn]:s.LINEAR,[Zo]:s.LINEAR_MIPMAP_NEAREST,[Ri]:s.LINEAR_MIPMAP_LINEAR},yt={[rd]:s.NEVER,[ud]:s.ALWAYS,[od]:s.LESS,[Zh]:s.LEQUAL,[ad]:s.EQUAL,[hd]:s.GEQUAL,[ld]:s.GREATER,[cd]:s.NOTEQUAL};function Bt(T,M){if(M.type===Gn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Cn||M.magFilter===Zo||M.magFilter===dr||M.magFilter===Ri||M.minFilter===Cn||M.minFilter===Zo||M.minFilter===dr||M.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,pt[M.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,pt[M.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,pt[M.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,Tt[M.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,Tt[M.minFilter]),M.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,yt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===bn||M.minFilter!==dr&&M.minFilter!==Ri||M.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function St(T,M){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",P));let rt=M.source,ut=d.get(rt);ut===void 0&&(ut={},d.set(rt,ut));let it=V(M);if(it!==T.__cacheKey){ut[it]===void 0&&(ut[it]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ut[it].usedTimes++;let Mt=ut[T.__cacheKey];Mt!==void 0&&(ut[T.__cacheKey].usedTimes--,Mt.usedTimes===0&&w(M)),T.__cacheKey=it,T.__webglTexture=ut[it].texture}return G}function X(T,M,G){let rt=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(rt=s.TEXTURE_3D);let ut=St(T,M),it=M.source;e.bindTexture(rt,T.__webglTexture,s.TEXTURE0+G);let Mt=n.get(it);if(it.version!==Mt.__version||ut===!0){e.activeTexture(s.TEXTURE0+G);let I=le.getPrimaries(le.workingColorSpace),N=M.colorSpace===ai?null:le.getPrimaries(M.colorSpace),lt=M.colorSpace===ai||I===N?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Y=x(M.image,!1,i.maxTextureSize);Y=Vt(M,Y);let ft=r.convert(M.format,M.colorSpace),_t=r.convert(M.type),Ct=y(M.internalFormat,ft,_t,M.colorSpace,M.isVideoTexture);Bt(rt,M);let Pt,Kt=M.mipmaps,$t=M.isVideoTexture!==!0,Zt=Mt.__version===void 0||ut===!0,O=it.dataReady,wt=k(M,Y);if(M.isDepthTexture)Ct=v(M.format===ds,M.type),Zt&&($t?e.texStorage2D(s.TEXTURE_2D,1,Ct,Y.width,Y.height):e.texImage2D(s.TEXTURE_2D,0,Ct,Y.width,Y.height,0,ft,_t,null));else if(M.isDataTexture)if(Kt.length>0){$t&&Zt&&e.texStorage2D(s.TEXTURE_2D,wt,Ct,Kt[0].width,Kt[0].height);for(let tt=0,at=Kt.length;tt<at;tt++)Pt=Kt[tt],$t?O&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,Pt.width,Pt.height,ft,_t,Pt.data):e.texImage2D(s.TEXTURE_2D,tt,Ct,Pt.width,Pt.height,0,ft,_t,Pt.data);M.generateMipmaps=!1}else $t?(Zt&&e.texStorage2D(s.TEXTURE_2D,wt,Ct,Y.width,Y.height),O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Y.width,Y.height,ft,_t,Y.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,Y.width,Y.height,0,ft,_t,Y.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$t&&Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Ct,Kt[0].width,Kt[0].height,Y.depth);for(let tt=0,at=Kt.length;tt<at;tt++)if(Pt=Kt[tt],M.format!==Mn)if(ft!==null)if($t){if(O)if(M.layerUpdates.size>0){let It=Sh(Pt.width,Pt.height,M.format,M.type);for(let Dt of M.layerUpdates){let Jt=Pt.data.subarray(Dt*It/Pt.data.BYTES_PER_ELEMENT,(Dt+1)*It/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,Dt,Pt.width,Pt.height,1,ft,Jt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,Pt.width,Pt.height,Y.depth,ft,Pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,Ct,Pt.width,Pt.height,Y.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?O&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,Pt.width,Pt.height,Y.depth,ft,_t,Pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,Ct,Pt.width,Pt.height,Y.depth,0,ft,_t,Pt.data)}else{$t&&Zt&&e.texStorage2D(s.TEXTURE_2D,wt,Ct,Kt[0].width,Kt[0].height);for(let tt=0,at=Kt.length;tt<at;tt++)Pt=Kt[tt],M.format!==Mn?ft!==null?$t?O&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,Pt.width,Pt.height,ft,Pt.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,Ct,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?O&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,Pt.width,Pt.height,ft,_t,Pt.data):e.texImage2D(s.TEXTURE_2D,tt,Ct,Pt.width,Pt.height,0,ft,_t,Pt.data)}else if(M.isDataArrayTexture)if($t){if(Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Ct,Y.width,Y.height,Y.depth),O)if(M.layerUpdates.size>0){let tt=Sh(Y.width,Y.height,M.format,M.type);for(let at of M.layerUpdates){let It=Y.data.subarray(at*tt/Y.data.BYTES_PER_ELEMENT,(at+1)*tt/Y.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,at,Y.width,Y.height,1,ft,_t,It)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ft,_t,Y.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,Y.width,Y.height,Y.depth,0,ft,_t,Y.data);else if(M.isData3DTexture)$t?(Zt&&e.texStorage3D(s.TEXTURE_3D,wt,Ct,Y.width,Y.height,Y.depth),O&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ft,_t,Y.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,Y.width,Y.height,Y.depth,0,ft,_t,Y.data);else if(M.isFramebufferTexture){if(Zt)if($t)e.texStorage2D(s.TEXTURE_2D,wt,Ct,Y.width,Y.height);else{let tt=Y.width,at=Y.height;for(let It=0;It<wt;It++)e.texImage2D(s.TEXTURE_2D,It,Ct,tt,at,0,ft,_t,null),tt>>=1,at>>=1}}else if(Kt.length>0){if($t&&Zt){let tt=Lt(Kt[0]);e.texStorage2D(s.TEXTURE_2D,wt,Ct,tt.width,tt.height)}for(let tt=0,at=Kt.length;tt<at;tt++)Pt=Kt[tt],$t?O&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ft,_t,Pt):e.texImage2D(s.TEXTURE_2D,tt,Ct,ft,_t,Pt);M.generateMipmaps=!1}else if($t){if(Zt){let tt=Lt(Y);e.texStorage2D(s.TEXTURE_2D,wt,Ct,tt.width,tt.height)}O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,_t,Y)}else e.texImage2D(s.TEXTURE_2D,0,Ct,ft,_t,Y);m(M)&&p(rt),Mt.__version=it.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function st(T,M,G){if(M.image.length!==6)return;let rt=St(T,M),ut=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+G);let it=n.get(ut);if(ut.version!==it.__version||rt===!0){e.activeTexture(s.TEXTURE0+G);let Mt=le.getPrimaries(le.workingColorSpace),I=M.colorSpace===ai?null:le.getPrimaries(M.colorSpace),N=M.colorSpace===ai||Mt===I?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);let lt=M.isCompressedTexture||M.image[0].isCompressedTexture,Y=M.image[0]&&M.image[0].isDataTexture,ft=[];for(let at=0;at<6;at++)!lt&&!Y?ft[at]=x(M.image[at],!0,i.maxCubemapSize):ft[at]=Y?M.image[at].image:M.image[at],ft[at]=Vt(M,ft[at]);let _t=ft[0],Ct=r.convert(M.format,M.colorSpace),Pt=r.convert(M.type),Kt=y(M.internalFormat,Ct,Pt,M.colorSpace),$t=M.isVideoTexture!==!0,Zt=it.__version===void 0||rt===!0,O=ut.dataReady,wt=k(M,_t);Bt(s.TEXTURE_CUBE_MAP,M);let tt;if(lt){$t&&Zt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,wt,Kt,_t.width,_t.height);for(let at=0;at<6;at++){tt=ft[at].mipmaps;for(let It=0;It<tt.length;It++){let Dt=tt[It];M.format!==Mn?Ct!==null?$t?O&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,0,0,Dt.width,Dt.height,Ct,Dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,Kt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,0,0,Dt.width,Dt.height,Ct,Pt,Dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,Kt,Dt.width,Dt.height,0,Ct,Pt,Dt.data)}}}else{if(tt=M.mipmaps,$t&&Zt){tt.length>0&&wt++;let at=Lt(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,wt,Kt,at.width,at.height)}for(let at=0;at<6;at++)if(Y){$t?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,ft[at].width,ft[at].height,Ct,Pt,ft[at].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Kt,ft[at].width,ft[at].height,0,Ct,Pt,ft[at].data);for(let It=0;It<tt.length;It++){let Jt=tt[It].image[at].image;$t?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,0,0,Jt.width,Jt.height,Ct,Pt,Jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,Kt,Jt.width,Jt.height,0,Ct,Pt,Jt.data)}}else{$t?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ct,Pt,ft[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Kt,Ct,Pt,ft[at]);for(let It=0;It<tt.length;It++){let Dt=tt[It];$t?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,0,0,Ct,Pt,Dt.image[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,Kt,Ct,Pt,Dt.image[at])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),it.__version=ut.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function gt(T,M,G,rt,ut,it){let Mt=r.convert(G.format,G.colorSpace),I=r.convert(G.type),N=y(G.internalFormat,Mt,I,G.colorSpace),lt=n.get(M),Y=n.get(G);if(Y.__renderTarget=M,!lt.__hasExternalTextures){let ft=Math.max(1,M.width>>it),_t=Math.max(1,M.height>>it);ut===s.TEXTURE_3D||ut===s.TEXTURE_2D_ARRAY?e.texImage3D(ut,it,N,ft,_t,M.depth,0,Mt,I,null):e.texImage2D(ut,it,N,ft,_t,0,Mt,I,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),At(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,ut,Y.__webglTexture,0,nt(M)):(ut===s.TEXTURE_2D||ut>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,ut,Y.__webglTexture,it),e.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(T,M,G){if(s.bindRenderbuffer(s.RENDERBUFFER,T),M.depthBuffer){let rt=M.depthTexture,ut=rt&&rt.isDepthTexture?rt.type:null,it=v(M.stencilBuffer,ut),Mt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,I=nt(M);At(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,I,it,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,I,it,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,it,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,T)}else{let rt=M.textures;for(let ut=0;ut<rt.length;ut++){let it=rt[ut],Mt=r.convert(it.format,it.colorSpace),I=r.convert(it.type),N=y(it.internalFormat,Mt,I,it.colorSpace),lt=nt(M);G&&At(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,N,M.width,M.height):At(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,N,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,N,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Nt(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let rt=n.get(M.depthTexture);rt.__renderTarget=M,(!rt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q(M.depthTexture,0);let ut=rt.__webglTexture,it=nt(M);if(M.depthTexture.format===rs)At(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ut,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ut,0);else if(M.depthTexture.format===ds)At(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ut,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function kt(T){let M=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){let rt=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),rt){let ut=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,rt.removeEventListener("dispose",ut)};rt.addEventListener("dispose",ut),M.__depthDisposeCallback=ut}M.__boundDepthTexture=rt}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Nt(M.__webglFramebuffer,T)}else if(G){M.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[rt]),M.__webglDepthbuffer[rt]===void 0)M.__webglDepthbuffer[rt]=s.createRenderbuffer(),dt(M.__webglDepthbuffer[rt],T,!1);else{let ut=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=M.__webglDepthbuffer[rt];s.bindRenderbuffer(s.RENDERBUFFER,it),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,it)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),dt(M.__webglDepthbuffer,T,!1);else{let rt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,ut)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function A(T,M,G){let rt=n.get(T);M!==void 0&&gt(rt.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&kt(T)}function J(T){let M=T.texture,G=n.get(T),rt=n.get(M);T.addEventListener("dispose",L);let ut=T.textures,it=T.isWebGLCubeRenderTarget===!0,Mt=ut.length>1;if(Mt||(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=M.version,o.memory.textures++),it){G.__webglFramebuffer=[];for(let I=0;I<6;I++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[I]=[];for(let N=0;N<M.mipmaps.length;N++)G.__webglFramebuffer[I][N]=s.createFramebuffer()}else G.__webglFramebuffer[I]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let I=0;I<M.mipmaps.length;I++)G.__webglFramebuffer[I]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let I=0,N=ut.length;I<N;I++){let lt=n.get(ut[I]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&At(T)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let I=0;I<ut.length;I++){let N=ut[I];G.__webglColorRenderbuffer[I]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[I]);let lt=r.convert(N.format,N.colorSpace),Y=r.convert(N.type),ft=y(N.internalFormat,lt,Y,N.colorSpace,T.isXRRenderTarget===!0),_t=nt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,ft,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+I,s.RENDERBUFFER,G.__webglColorRenderbuffer[I])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(G.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(it){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),Bt(s.TEXTURE_CUBE_MAP,M);for(let I=0;I<6;I++)if(M.mipmaps&&M.mipmaps.length>0)for(let N=0;N<M.mipmaps.length;N++)gt(G.__webglFramebuffer[I][N],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+I,N);else gt(G.__webglFramebuffer[I],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);m(M)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let I=0,N=ut.length;I<N;I++){let lt=ut[I],Y=n.get(lt);e.bindTexture(s.TEXTURE_2D,Y.__webglTexture),Bt(s.TEXTURE_2D,lt),gt(G.__webglFramebuffer,T,lt,s.COLOR_ATTACHMENT0+I,s.TEXTURE_2D,0),m(lt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let I=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(I=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(I,rt.__webglTexture),Bt(I,M),M.mipmaps&&M.mipmaps.length>0)for(let N=0;N<M.mipmaps.length;N++)gt(G.__webglFramebuffer[N],T,M,s.COLOR_ATTACHMENT0,I,N);else gt(G.__webglFramebuffer,T,M,s.COLOR_ATTACHMENT0,I,0);m(M)&&p(I),e.unbindTexture()}T.depthBuffer&&kt(T)}function U(T){let M=T.textures;for(let G=0,rt=M.length;G<rt;G++){let ut=M[G];if(m(ut)){let it=E(T),Mt=n.get(ut).__webglTexture;e.bindTexture(it,Mt),p(it),e.unbindTexture()}}}let et=[],R=[];function bt(T){if(T.samples>0){if(At(T)===!1){let M=T.textures,G=T.width,rt=T.height,ut=s.COLOR_BUFFER_BIT,it=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(T),I=M.length>1;if(I)for(let N=0;N<M.length;N++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+N,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+N,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let N=0;N<M.length;N++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ut|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ut|=s.STENCIL_BUFFER_BIT)),I){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[N]);let lt=n.get(M[N]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,G,rt,0,0,G,rt,ut,s.NEAREST),l===!0&&(et.length=0,R.length=0,et.push(s.COLOR_ATTACHMENT0+N),T.depthBuffer&&T.resolveDepthBuffer===!1&&(et.push(it),R.push(it),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,R)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),I)for(let N=0;N<M.length;N++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+N,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[N]);let lt=n.get(M[N]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+N,s.TEXTURE_2D,lt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let M=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function nt(T){return Math.min(i.maxSamples,T.samples)}function At(T){let M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function xt(T){let M=o.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function Vt(T,M){let G=T.colorSpace,rt=T.format,ut=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==Es&&G!==ai&&(le.getTransfer(G)===xe?(rt!==Mn||ut!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function Lt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=Q,this.setTexture2DArray=W,this.setTexture3D=ot,this.setTextureCube=K,this.rebindTextures=A,this.setupRenderTarget=J,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=At}function yg(s,t){function e(n,i=ai){let r,o=le.getTransfer(i);if(n===Yn)return s.UNSIGNED_BYTE;if(n===tc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ec)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Bh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return s.BYTE;if(n===Fh)return s.SHORT;if(n===$s)return s.UNSIGNED_SHORT;if(n===Ql)return s.INT;if(n===Ci)return s.UNSIGNED_INT;if(n===Gn)return s.FLOAT;if(n===or)return s.HALF_FLOAT;if(n===Hh)return s.ALPHA;if(n===Vh)return s.RGB;if(n===Mn)return s.RGBA;if(n===Gh)return s.LUMINANCE;if(n===Wh)return s.LUMINANCE_ALPHA;if(n===rs)return s.DEPTH_COMPONENT;if(n===ds)return s.DEPTH_STENCIL;if(n===Xh)return s.RED;if(n===nc)return s.RED_INTEGER;if(n===qh)return s.RG;if(n===ic)return s.RG_INTEGER;if(n===sc)return s.RGBA_INTEGER;if(n===Fr||n===Br||n===Hr||n===Vr)if(o===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Va||n===Ga||n===Wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xa||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xa||n===qa)return o===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ya)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$a||n===Za||n===ja||n===Ka||n===Ja||n===Qa||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$a)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Za)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ja)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ka)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ja)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qa)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===el)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===il)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rl)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ol)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===al)return o===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gr||n===ll||n===cl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gr)return o===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yh||n===hl||n===ul||n===dl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ul)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Al=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ue=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},vg={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Mg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Rl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new on,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Pn({vertexShader:Mg,fragmentShader:bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rt(new pe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cl=class extends $n{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,x=new Rl,m=e.getContextAttributes(),p=null,E=null,y=[],v=[],k=new mt,P=null,L=new Ve;L.viewport=new _e;let D=new Ve;D.viewport=new _e;let w=[L,D],_=new Al,S=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let st=y[X];return st===void 0&&(st=new Ws,y[X]=st),st.getTargetRaySpace()},this.getControllerGrip=function(X){let st=y[X];return st===void 0&&(st=new Ws,y[X]=st),st.getGripSpace()},this.getHand=function(X){let st=y[X];return st===void 0&&(st=new Ws,y[X]=st),st.getHandSpace()};function F(X){let st=v.indexOf(X.inputSource);if(st===-1)return;let gt=y[st];gt!==void 0&&(gt.update(X.inputSource,X.frame,c||o),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",Q);for(let X=0;X<y.length;X++){let st=v[X];st!==null&&(v[X]=null,y[X].disconnect(st))}S=null,z=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,E=null,St.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(k),i.renderState.layers===void 0){let st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Zn(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,gt=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?ds:rs,gt=m.stencil?us:Ci);let Nt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Nt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Zn(d.textureWidth,d.textureHeight,{format:Mn,type:Yn,depthTexture:new to(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),St.setContext(i),St.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(X){for(let st=0;st<X.removed.length;st++){let gt=X.removed[st],dt=v.indexOf(gt);dt>=0&&(v[dt]=null,y[dt].disconnect(gt))}for(let st=0;st<X.added.length;st++){let gt=X.added[st],dt=v.indexOf(gt);if(dt===-1){for(let kt=0;kt<y.length;kt++)if(kt>=v.length){v.push(gt),dt=kt;break}else if(v[kt]===null){v[kt]=gt,dt=kt;break}if(dt===-1)break}let Nt=y[dt];Nt&&Nt.connect(gt)}}let W=new C,ot=new C;function K(X,st,gt){W.setFromMatrixPosition(st.matrixWorld),ot.setFromMatrixPosition(gt.matrixWorld);let dt=W.distanceTo(ot),Nt=st.projectionMatrix.elements,kt=gt.projectionMatrix.elements,A=Nt[14]/(Nt[10]-1),J=Nt[14]/(Nt[10]+1),U=(Nt[9]+1)/Nt[5],et=(Nt[9]-1)/Nt[5],R=(Nt[8]-1)/Nt[0],bt=(kt[8]+1)/kt[0],nt=A*R,At=A*bt,xt=dt/(-R+bt),Vt=xt*-R;if(st.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Vt),X.translateZ(xt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Nt[10]===-1)X.projectionMatrix.copy(st.projectionMatrix),X.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let Lt=A+xt,T=J+xt,M=nt-Vt,G=At+(dt-Vt),rt=U*J/T*Lt,ut=et*J/T*Lt;X.projectionMatrix.makePerspective(M,G,rt,ut,Lt,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function pt(X,st){st===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(st.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let st=X.near,gt=X.far;x.texture!==null&&(x.depthNear>0&&(st=x.depthNear),x.depthFar>0&&(gt=x.depthFar)),_.near=D.near=L.near=st,_.far=D.far=L.far=gt,(S!==_.near||z!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,z=_.far),L.layers.mask=X.layers.mask|2,D.layers.mask=X.layers.mask|4,_.layers.mask=L.layers.mask|D.layers.mask;let dt=X.parent,Nt=_.cameras;pt(_,dt);for(let kt=0;kt<Nt.length;kt++)pt(Nt[kt],dt);Nt.length===2?K(_,L,D):_.projectionMatrix.copy(L.projectionMatrix),Tt(X,_,dt)};function Tt(X,st,gt){gt===null?X.matrix.copy(st.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(st.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(st.projectionMatrix),X.projectionMatrixInverse.copy(st.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=fs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let yt=null;function Bt(X,st){if(h=st.getViewerPose(c||o),g=st,h!==null){let gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let dt=!1;gt.length!==_.cameras.length&&(_.cameras.length=0,dt=!0);for(let kt=0;kt<gt.length;kt++){let A=gt[kt],J=null;if(f!==null)J=f.getViewport(A);else{let et=u.getViewSubImage(d,A);J=et.viewport,kt===0&&(t.setRenderTargetTextures(E,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),t.setRenderTarget(E))}let U=w[kt];U===void 0&&(U=new Ve,U.layers.enable(kt),U.viewport=new _e,w[kt]=U),U.matrix.fromArray(A.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(A.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(J.x,J.y,J.width,J.height),kt===0&&(_.matrix.copy(U.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),dt===!0&&_.cameras.push(U)}let Nt=i.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){let kt=u.getDepthInformation(gt[0]);kt&&kt.isValid&&kt.texture&&x.init(t,kt,i.renderState)}}for(let gt=0;gt<y.length;gt++){let dt=v[gt],Nt=y[gt];dt!==null&&Nt!==void 0&&Nt.update(dt,st,c||o)}yt&&yt(X,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let St=new Qh;St.setAnimationLoop(Bt),this.setAnimationLoop=function(X){yt=X},this.dispose=function(){}}},bi=new un,Sg=new Me;function Eg(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Jh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Le&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Le&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),y=E.envMap,v=E.envMapRotation;y&&(m.envMap.value=y,bi.copy(v),bi.x*=-1,bi.y*=-1,bi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(bi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wg(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){let v=y.program;n.uniformBlockBinding(E,v)}function c(E,y){let v=i[E.id];v===void 0&&(g(E),v=h(E),i[E.id]=v,E.addEventListener("dispose",m));let k=y.program;n.updateUBOMapping(E,k);let P=t.render.frame;r[E.id]!==P&&(d(E),r[E.id]=P)}function h(E){let y=u();E.__bindingPointIndex=y;let v=s.createBuffer(),k=E.__size,P=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,k,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let y=i[E.id],v=E.uniforms,k=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let P=0,L=v.length;P<L;P++){let D=Array.isArray(v[P])?v[P]:[v[P]];for(let w=0,_=D.length;w<_;w++){let S=D[w];if(f(S,P,w,k)===!0){let z=S.__offset,F=Array.isArray(S.value)?S.value:[S.value],V=0;for(let Q=0;Q<F.length;Q++){let W=F[Q],ot=x(W);typeof W=="number"||typeof W=="boolean"?(S.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,z+V,S.__data)):W.isMatrix3?(S.__data[0]=W.elements[0],S.__data[1]=W.elements[1],S.__data[2]=W.elements[2],S.__data[3]=0,S.__data[4]=W.elements[3],S.__data[5]=W.elements[4],S.__data[6]=W.elements[5],S.__data[7]=0,S.__data[8]=W.elements[6],S.__data[9]=W.elements[7],S.__data[10]=W.elements[8],S.__data[11]=0):(W.toArray(S.__data,V),V+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(E,y,v,k){let P=E.value,L=y+"_"+v;if(k[L]===void 0)return typeof P=="number"||typeof P=="boolean"?k[L]=P:k[L]=P.clone(),!0;{let D=k[L];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return k[L]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function g(E){let y=E.uniforms,v=0,k=16;for(let L=0,D=y.length;L<D;L++){let w=Array.isArray(y[L])?y[L]:[y[L]];for(let _=0,S=w.length;_<S;_++){let z=w[_],F=Array.isArray(z.value)?z.value:[z.value];for(let V=0,Q=F.length;V<Q;V++){let W=F[V],ot=x(W),K=v%k,pt=K%ot.boundary,Tt=K+pt;v+=pt,Tt!==0&&k-Tt<ot.storage&&(v+=k-Tt),z.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=ot.storage}}}let P=v%k;return P>0&&(v+=k-P),E.__size=v,E.__cache={},this}function x(E){let y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){let y=E.target;y.removeEventListener("dispose",m);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(let E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var eo=class{constructor(t={}){let{canvas:e=Rd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,E=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oe,this.toneMapping=ci,this.toneMappingExposure=1;let v=this,k=!1,P=0,L=0,D=null,w=-1,_=null,S=new _e,z=new _e,F=null,V=new te(0),Q=0,W=e.width,ot=e.height,K=1,pt=null,Tt=null,yt=new _e(0,0,W,ot),Bt=new _e(0,0,W,ot),St=!1,X=new js,st=!1,gt=!1,dt=new Me,Nt=new Me,kt=new C,A=new _e,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},U=!1;function et(){return D===null?K:1}let R=n;function bt(b,B){return e.getContext(b,B)}try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jl}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",Dt,!1),R===null){let B="webgl2";if(R=bt(B,b),R===null)throw bt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let nt,At,xt,Vt,Lt,T,M,G,rt,ut,it,Mt,I,N,lt,Y,ft,_t,Ct,Pt,Kt,$t,Zt,O;function wt(){nt=new Hm(R),nt.init(),$t=new yg(R,nt),At=new Nm(R,nt,t,$t),xt=new gg(R,nt),At.reverseDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),Vt=new Wm(R),Lt=new ig,T=new _g(R,nt,xt,Lt,At,$t,Vt),M=new Om(v),G=new Bm(v),rt=new jd(R),Zt=new Dm(R,rt),ut=new Vm(R,rt,Vt,Zt),it=new qm(R,ut,rt,Vt),Ct=new Xm(R,At,T),Y=new km(Lt),Mt=new ng(v,M,G,nt,At,Zt,Y),I=new Eg(v,Lt),N=new rg,lt=new ug(nt),_t=new Lm(v,M,G,xt,it,f,l),ft=new pg(v,it,At),O=new wg(R,Vt,At,xt),Pt=new Um(R,nt,Vt),Kt=new Gm(R,nt,Vt),Vt.programs=Mt.programs,v.capabilities=At,v.extensions=nt,v.properties=Lt,v.renderLists=N,v.shadowMap=ft,v.state=xt,v.info=Vt}wt();let tt=new Cl(v,R);this.xr=tt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let b=nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(W,ot,!1))},this.getSize=function(b){return b.set(W,ot)},this.setSize=function(b,B,$=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,ot=B,e.width=Math.floor(b*K),e.height=Math.floor(B*K),$===!0&&(e.style.width=b+"px",e.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(W*K,ot*K).floor()},this.setDrawingBufferSize=function(b,B,$){W=b,ot=B,K=$,e.width=Math.floor(b*$),e.height=Math.floor(B*$),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(yt)},this.setViewport=function(b,B,$,j){b.isVector4?yt.set(b.x,b.y,b.z,b.w):yt.set(b,B,$,j),xt.viewport(S.copy(yt).multiplyScalar(K).round())},this.getScissor=function(b){return b.copy(Bt)},this.setScissor=function(b,B,$,j){b.isVector4?Bt.set(b.x,b.y,b.z,b.w):Bt.set(b,B,$,j),xt.scissor(z.copy(Bt).multiplyScalar(K).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(b){xt.setScissorTest(St=b)},this.setOpaqueSort=function(b){pt=b},this.setTransparentSort=function(b){Tt=b},this.getClearColor=function(b){return b.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor.apply(_t,arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha.apply(_t,arguments)},this.clear=function(b=!0,B=!0,$=!0){let j=0;if(b){let H=!1;if(D!==null){let Et=D.texture.format;H=Et===sc||Et===ic||Et===nc}if(H){let Et=D.texture.type,zt=Et===Yn||Et===Ci||Et===$s||Et===us||Et===tc||Et===ec,Wt=_t.getClearColor(),Xt=_t.getClearAlpha(),Qt=Wt.r,ee=Wt.g,qt=Wt.b;zt?(g[0]=Qt,g[1]=ee,g[2]=qt,g[3]=Xt,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=Qt,x[1]=ee,x[2]=qt,x[3]=Xt,R.clearBufferiv(R.COLOR,0,x))}else j|=R.COLOR_BUFFER_BIT}B&&(j|=R.DEPTH_BUFFER_BIT),$&&(j|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),N.dispose(),lt.dispose(),Lt.dispose(),M.dispose(),G.dispose(),it.dispose(),Zt.dispose(),O.dispose(),Mt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Ht),tt.removeEventListener("sessionend",ce),ie.stop()};function at(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;let b=Vt.autoReset,B=ft.enabled,$=ft.autoUpdate,j=ft.needsUpdate,H=ft.type;wt(),Vt.autoReset=b,ft.enabled=B,ft.autoUpdate=$,ft.needsUpdate=j,ft.type=H}function Dt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Jt(b){let B=b.target;B.removeEventListener("dispose",Jt),ct(B)}function ct(b){q(b),Lt.remove(b)}function q(b){let B=Lt.get(b).programs;B!==void 0&&(B.forEach(function($){Mt.releaseProgram($)}),b.isShaderMaterial&&Mt.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,$,j,H,Et){B===null&&(B=J);let zt=H.isMesh&&H.matrixWorld.determinant()<0,Wt=Ps(b,B,$,j,H);xt.setMaterial(j,zt);let Xt=$.index,Qt=1;if(j.wireframe===!0){if(Xt=ut.getWireframeAttribute($),Xt===void 0)return;Qt=2}let ee=$.drawRange,qt=$.attributes.position,he=ee.start*Qt,Se=(ee.start+ee.count)*Qt;Et!==null&&(he=Math.max(he,Et.start*Qt),Se=Math.min(Se,(Et.start+Et.count)*Qt)),Xt!==null?(he=Math.max(he,0),Se=Math.min(Se,Xt.count)):qt!=null&&(he=Math.max(he,0),Se=Math.min(Se,qt.count));let Ee=Se-he;if(Ee<0||Ee===1/0)return;Zt.setup(H,j,Wt,$,Xt);let $e,de=Pt;if(Xt!==null&&($e=rt.get(Xt),de=Kt,de.setIndex($e)),H.isMesh)j.wireframe===!0?(xt.setLineWidth(j.wireframeLinewidth*et()),de.setMode(R.LINES)):de.setMode(R.TRIANGLES);else if(H.isLine){let Yt=j.linewidth;Yt===void 0&&(Yt=1),xt.setLineWidth(Yt*et()),H.isLineSegments?de.setMode(R.LINES):H.isLineLoop?de.setMode(R.LINE_LOOP):de.setMode(R.LINE_STRIP)}else H.isPoints?de.setMode(R.POINTS):H.isSprite&&de.setMode(R.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)de.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))de.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Yt=H._multiDrawStarts,kn=H._multiDrawCounts,fe=H._multiDrawCount,xn=Xt?rt.get(Xt).bytesPerElement:1,Bi=Lt.get(j).currentProgram.getUniforms();for(let en=0;en<fe;en++)Bi.setValue(R,"_gl_DrawID",en),de.render(Yt[en]/xn,kn[en])}else if(H.isInstancedMesh)de.renderInstances(he,Ee,H.count);else if($.isInstancedBufferGeometry){let Yt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,kn=Math.min($.instanceCount,Yt);de.renderInstances(he,Ee,kn)}else de.render(he,Ee)};function Z(b,B,$){b.transparent===!0&&b.side===Ze&&b.forceSinglePass===!1?(b.side=Le,b.needsUpdate=!0,Tn(b,B,$),b.side=hi,b.needsUpdate=!0,Tn(b,B,$),b.side=Ze):Tn(b,B,$)}this.compile=function(b,B,$=null){$===null&&($=b),p=lt.get($),p.init(B),y.push(p),$.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),b!==$&&b.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();let j=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let Et=H.material;if(Et)if(Array.isArray(Et))for(let zt=0;zt<Et.length;zt++){let Wt=Et[zt];Z(Wt,$,H),j.add(Wt)}else Z(Et,$,H),j.add(Et)}),y.pop(),p=null,j},this.compileAsync=function(b,B,$=null){let j=this.compile(b,B,$);return new Promise(H=>{function Et(){if(j.forEach(function(zt){Lt.get(zt).currentProgram.isReady()&&j.delete(zt)}),j.size===0){H(b);return}setTimeout(Et,10)}nt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let ht=null;function vt(b){ht&&ht(b)}function Ht(){ie.stop()}function ce(){ie.start()}let ie=new Qh;ie.setAnimationLoop(vt),typeof self<"u"&&ie.setContext(self),this.setAnimationLoop=function(b){ht=b,tt.setAnimationLoop(b),b===null?ie.stop():ie.start()},tt.addEventListener("sessionstart",Ht),tt.addEventListener("sessionend",ce),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(B),B=tt.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,B,D),p=lt.get(b,y.length),p.init(B),y.push(p),Nt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X.setFromProjectionMatrix(Nt),gt=this.localClippingEnabled,st=Y.init(this.clippingPlanes,gt),m=N.get(b,E.length),m.init(),E.push(m),tt.enabled===!0&&tt.isPresenting===!0){let Et=v.xr.getDepthSensingMesh();Et!==null&&se(Et,B,-1/0,v.sortObjects)}se(b,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(pt,Tt),U=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,U&&_t.addToRenderList(m,b),this.info.render.frame++,st===!0&&Y.beginShadows();let $=p.state.shadowsArray;ft.render($,b,B),st===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=m.opaque,H=m.transmissive;if(p.setupLights(),B.isArrayCamera){let Et=B.cameras;if(H.length>0)for(let zt=0,Wt=Et.length;zt<Wt;zt++){let Xt=Et[zt];Ue(j,H,b,Xt)}U&&_t.render(b);for(let zt=0,Wt=Et.length;zt<Wt;zt++){let Xt=Et[zt];be(m,b,Xt,Xt.viewport)}}else H.length>0&&Ue(j,H,b,B),U&&_t.render(b),be(m,b,B);D!==null&&(T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(v,b,B),Zt.resetDefaultState(),w=-1,_=null,y.pop(),y.length>0?(p=y[y.length-1],st===!0&&Y.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function se(b,B,$,j){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||X.intersectsSprite(b)){j&&A.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Nt);let zt=it.update(b),Wt=b.material;Wt.visible&&m.push(b,zt,Wt,$,A.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||X.intersectsObject(b))){let zt=it.update(b),Wt=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),A.copy(b.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),A.copy(zt.boundingSphere.center)),A.applyMatrix4(b.matrixWorld).applyMatrix4(Nt)),Array.isArray(Wt)){let Xt=zt.groups;for(let Qt=0,ee=Xt.length;Qt<ee;Qt++){let qt=Xt[Qt],he=Wt[qt.materialIndex];he&&he.visible&&m.push(b,zt,he,$,A.z,qt)}}else Wt.visible&&m.push(b,zt,Wt,$,A.z,null)}}let Et=b.children;for(let zt=0,Wt=Et.length;zt<Wt;zt++)se(Et[zt],B,$,j)}function be(b,B,$,j){let H=b.opaque,Et=b.transmissive,zt=b.transparent;p.setupLightsView($),st===!0&&Y.setGlobalState(v.clippingPlanes,$),j&&xt.viewport(S.copy(j)),H.length>0&&Qe(H,B,$),Et.length>0&&Qe(Et,B,$),zt.length>0&&Qe(zt,B,$),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Ue(b,B,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Zn(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?or:Yn,minFilter:Ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));let Et=p.state.transmissionRenderTarget[j.id],zt=j.viewport||S;Et.setSize(zt.z,zt.w);let Wt=v.getRenderTarget();v.setRenderTarget(Et),v.getClearColor(V),Q=v.getClearAlpha(),Q<1&&v.setClearColor(16777215,.5),v.clear(),U&&_t.render($);let Xt=v.toneMapping;v.toneMapping=ci;let Qt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),st===!0&&Y.setGlobalState(v.clippingPlanes,j),Qe(b,$,j),T.updateMultisampleRenderTarget(Et),T.updateRenderTargetMipmap(Et),nt.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let qt=0,he=B.length;qt<he;qt++){let Se=B[qt],Ee=Se.object,$e=Se.geometry,de=Se.material,Yt=Se.group;if(de.side===Ze&&Ee.layers.test(j.layers)){let kn=de.side;de.side=Le,de.needsUpdate=!0,Ne(Ee,$,j,$e,de,Yt),de.side=kn,de.needsUpdate=!0,ee=!0}}ee===!0&&(T.updateMultisampleRenderTarget(Et),T.updateRenderTargetMipmap(Et))}v.setRenderTarget(Wt),v.setClearColor(V,Q),Qt!==void 0&&(j.viewport=Qt),v.toneMapping=Xt}function Qe(b,B,$){let j=B.isScene===!0?B.overrideMaterial:null;for(let H=0,Et=b.length;H<Et;H++){let zt=b[H],Wt=zt.object,Xt=zt.geometry,Qt=j===null?zt.material:j,ee=zt.group;Wt.layers.test($.layers)&&Ne(Wt,B,$,Xt,Qt,ee)}}function Ne(b,B,$,j,H,Et){b.onBeforeRender(v,B,$,j,H,Et),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(v,B,$,j,b,Et),H.transparent===!0&&H.side===Ze&&H.forceSinglePass===!1?(H.side=Le,H.needsUpdate=!0,v.renderBufferDirect($,B,j,H,b,Et),H.side=hi,H.needsUpdate=!0,v.renderBufferDirect($,B,j,H,b,Et),H.side=Ze):v.renderBufferDirect($,B,j,H,b,Et),b.onAfterRender(v,B,$,j,H,Et)}function Tn(b,B,$){B.isScene!==!0&&(B=J);let j=Lt.get(b),H=p.state.lights,Et=p.state.shadowsArray,zt=H.state.version,Wt=Mt.getParameters(b,H.state,Et,B,$),Xt=Mt.getProgramCacheKey(Wt),Qt=j.programs;j.environment=b.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(b.isMeshStandardMaterial?G:M).get(b.envMap||j.environment),j.envMapRotation=j.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Qt===void 0&&(b.addEventListener("dispose",Jt),Qt=new Map,j.programs=Qt);let ee=Qt.get(Xt);if(ee!==void 0){if(j.currentProgram===ee&&j.lightsStateVersion===zt)return tn(b,Wt),ee}else Wt.uniforms=Mt.getUniforms(b),b.onBeforeCompile(Wt,v),ee=Mt.acquireProgram(Wt,Xt),Qt.set(Xt,ee),j.uniforms=Wt.uniforms;let qt=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qt.clippingPlanes=Y.uniform),tn(b,Wt),j.needsLights=gi(b),j.lightsStateVersion=zt,j.needsLights&&(qt.ambientLightColor.value=H.state.ambient,qt.lightProbe.value=H.state.probe,qt.directionalLights.value=H.state.directional,qt.directionalLightShadows.value=H.state.directionalShadow,qt.spotLights.value=H.state.spot,qt.spotLightShadows.value=H.state.spotShadow,qt.rectAreaLights.value=H.state.rectArea,qt.ltc_1.value=H.state.rectAreaLTC1,qt.ltc_2.value=H.state.rectAreaLTC2,qt.pointLights.value=H.state.point,qt.pointLightShadows.value=H.state.pointShadow,qt.hemisphereLights.value=H.state.hemi,qt.directionalShadowMap.value=H.state.directionalShadowMap,qt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,qt.spotShadowMap.value=H.state.spotShadowMap,qt.spotLightMatrix.value=H.state.spotLightMatrix,qt.spotLightMap.value=H.state.spotLightMap,qt.pointShadowMap.value=H.state.pointShadowMap,qt.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=ee,j.uniformsList=null,ee}function Jn(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=as.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function tn(b,B){let $=Lt.get(b);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function Ps(b,B,$,j,H){B.isScene!==!0&&(B=J),T.resetTextureUnits();let Et=B.fog,zt=j.isMeshStandardMaterial?B.environment:null,Wt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Es,Xt=(j.isMeshStandardMaterial?G:M).get(j.envMap||zt),Qt=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ee=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),qt=!!$.morphAttributes.position,he=!!$.morphAttributes.normal,Se=!!$.morphAttributes.color,Ee=ci;j.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ee=v.toneMapping);let $e=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,de=$e!==void 0?$e.length:0,Yt=Lt.get(j),kn=p.state.lights;if(st===!0&&(gt===!0||b!==_)){let ln=b===_&&j.id===w;Y.setState(j,b,ln)}let fe=!1;j.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==kn.state.version||Yt.outputColorSpace!==Wt||H.isBatchedMesh&&Yt.batching===!1||!H.isBatchedMesh&&Yt.batching===!0||H.isBatchedMesh&&Yt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Yt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Yt.instancing===!1||!H.isInstancedMesh&&Yt.instancing===!0||H.isSkinnedMesh&&Yt.skinning===!1||!H.isSkinnedMesh&&Yt.skinning===!0||H.isInstancedMesh&&Yt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Yt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Yt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Yt.instancingMorph===!1&&H.morphTexture!==null||Yt.envMap!==Xt||j.fog===!0&&Yt.fog!==Et||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Y.numPlanes||Yt.numIntersection!==Y.numIntersection)||Yt.vertexAlphas!==Qt||Yt.vertexTangents!==ee||Yt.morphTargets!==qt||Yt.morphNormals!==he||Yt.morphColors!==Se||Yt.toneMapping!==Ee||Yt.morphTargetsCount!==de)&&(fe=!0):(fe=!0,Yt.__version=j.version);let xn=Yt.currentProgram;fe===!0&&(xn=Tn(j,B,H));let Bi=!1,en=!1,Ls=!1,we=xn.getUniforms(),An=Yt.uniforms;if(xt.useProgram(xn.program)&&(Bi=!0,en=!0,Ls=!0),j.id!==w&&(w=j.id,en=!0),Bi||_!==b){xt.buffers.depth.getReversed()?(dt.copy(b.projectionMatrix),Pd(dt),Id(dt),we.setValue(R,"projectionMatrix",dt)):we.setValue(R,"projectionMatrix",b.projectionMatrix),we.setValue(R,"viewMatrix",b.matrixWorldInverse);let Qn=we.map.cameraPosition;Qn!==void 0&&Qn.setValue(R,kt.setFromMatrixPosition(b.matrixWorld)),At.logarithmicDepthBuffer&&we.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&we.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),_!==b&&(_=b,en=!0,Ls=!0)}if(H.isSkinnedMesh){we.setOptional(R,H,"bindMatrix"),we.setOptional(R,H,"bindMatrixInverse");let ln=H.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),we.setValue(R,"boneTexture",ln.boneTexture,T))}H.isBatchedMesh&&(we.setOptional(R,H,"batchingTexture"),we.setValue(R,"batchingTexture",H._matricesTexture,T),we.setOptional(R,H,"batchingIdTexture"),we.setValue(R,"batchingIdTexture",H._indirectTexture,T),we.setOptional(R,H,"batchingColorTexture"),H._colorsTexture!==null&&we.setValue(R,"batchingColorTexture",H._colorsTexture,T));let Ds=$.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0)&&Ct.update(H,$,xn),(en||Yt.receiveShadow!==H.receiveShadow)&&(Yt.receiveShadow=H.receiveShadow,we.setValue(R,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(An.envMap.value=Xt,An.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&B.environment!==null&&(An.envMapIntensity.value=B.environmentIntensity),en&&(we.setValue(R,"toneMappingExposure",v.toneMappingExposure),Yt.needsLights&&Is(An,Ls),Et&&j.fog===!0&&I.refreshFogUniforms(An,Et),I.refreshMaterialUniforms(An,j,K,ot,p.state.transmissionRenderTarget[b.id]),as.upload(R,Jn(Yt),An,T)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(as.upload(R,Jn(Yt),An,T),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&we.setValue(R,"center",H.center),we.setValue(R,"modelViewMatrix",H.modelViewMatrix),we.setValue(R,"normalMatrix",H.normalMatrix),we.setValue(R,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let ln=j.uniformsGroups;for(let Qn=0,ti=ln.length;Qn<ti;Qn++){let bc=ln[Qn];O.update(bc,xn),O.bind(bc,xn)}}return xn}function Is(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function gi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,B,$){Lt.get(b.texture).__webglTexture=B,Lt.get(b.depthTexture).__webglTexture=$;let j=Lt.get(b);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,B){let $=Lt.get(b);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,$=0){D=b,P=B,L=$;let j=!0,H=null,Et=!1,zt=!1;if(b){let Xt=Lt.get(b);if(Xt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(R.FRAMEBUFFER,null),j=!1;else if(Xt.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Xt.__hasExternalTextures)T.rebindTextures(b,Lt.get(b.texture).__webglTexture,Lt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let qt=b.depthTexture;if(Xt.__boundDepthTexture!==qt){if(qt!==null&&Lt.has(qt)&&(b.width!==qt.image.width||b.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}let Qt=b.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(zt=!0);let ee=Lt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ee[B])?H=ee[B][$]:H=ee[B],Et=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?H=Lt.get(b).__webglMultisampledFramebuffer:Array.isArray(ee)?H=ee[$]:H=ee,S.copy(b.viewport),z.copy(b.scissor),F=b.scissorTest}else S.copy(yt).multiplyScalar(K).floor(),z.copy(Bt).multiplyScalar(K).floor(),F=St;if(xt.bindFramebuffer(R.FRAMEBUFFER,H)&&j&&xt.drawBuffers(b,H),xt.viewport(S),xt.scissor(z),xt.setScissorTest(F),Et){let Xt=Lt.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+B,Xt.__webglTexture,$)}else if(zt){let Xt=Lt.get(b.texture),Qt=B||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Xt.__webglTexture,$||0,Qt)}w=-1},this.readRenderTargetPixels=function(b,B,$,j,H,Et,zt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=Lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&zt!==void 0&&(Wt=Wt[zt]),Wt){xt.bindFramebuffer(R.FRAMEBUFFER,Wt);try{let Xt=b.texture,Qt=Xt.format,ee=Xt.type;if(!At.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-j&&$>=0&&$<=b.height-H&&R.readPixels(B,$,j,H,$t.convert(Qt),$t.convert(ee),Et)}finally{let Xt=D!==null?Lt.get(D).__webglFramebuffer:null;xt.bindFramebuffer(R.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(b,B,$,j,H,Et,zt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=Lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&zt!==void 0&&(Wt=Wt[zt]),Wt){let Xt=b.texture,Qt=Xt.format,ee=Xt.type;if(!At.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=b.width-j&&$>=0&&$<=b.height-H){xt.bindFramebuffer(R.FRAMEBUFFER,Wt);let qt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,qt),R.bufferData(R.PIXEL_PACK_BUFFER,Et.byteLength,R.STREAM_READ),R.readPixels(B,$,j,H,$t.convert(Qt),$t.convert(ee),0);let he=D!==null?Lt.get(D).__webglFramebuffer:null;xt.bindFramebuffer(R.FRAMEBUFFER,he);let Se=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Cd(R,Se,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,qt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Et),R.deleteBuffer(qt),R.deleteSync(Se),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,B=null,$=0){b.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1]);let j=Math.pow(2,-$),H=Math.floor(b.image.width*j),Et=Math.floor(b.image.height*j),zt=B!==null?B.x:0,Wt=B!==null?B.y:0;T.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,$,0,0,zt,Wt,H,Et),xt.unbindTexture()},this.copyTextureToTexture=function(b,B,$=null,j=null,H=0){b.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,b=arguments[1],B=arguments[2],H=arguments[3]||0,$=null);let Et,zt,Wt,Xt,Qt,ee,qt,he,Se,Ee=b.isCompressedTexture?b.mipmaps[H]:b.image;$!==null?(Et=$.max.x-$.min.x,zt=$.max.y-$.min.y,Wt=$.isBox3?$.max.z-$.min.z:1,Xt=$.min.x,Qt=$.min.y,ee=$.isBox3?$.min.z:0):(Et=Ee.width,zt=Ee.height,Wt=Ee.depth||1,Xt=0,Qt=0,ee=0),j!==null?(qt=j.x,he=j.y,Se=j.z):(qt=0,he=0,Se=0);let $e=$t.convert(B.format),de=$t.convert(B.type),Yt;B.isData3DTexture?(T.setTexture3D(B,0),Yt=R.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(T.setTexture2DArray(B,0),Yt=R.TEXTURE_2D_ARRAY):(T.setTexture2D(B,0),Yt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment);let kn=R.getParameter(R.UNPACK_ROW_LENGTH),fe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),xn=R.getParameter(R.UNPACK_SKIP_PIXELS),Bi=R.getParameter(R.UNPACK_SKIP_ROWS),en=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ee.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ee.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Xt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Qt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ee);let Ls=b.isDataArrayTexture||b.isData3DTexture,we=B.isDataArrayTexture||B.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let An=Lt.get(b),Ds=Lt.get(B),ln=Lt.get(An.__renderTarget),Qn=Lt.get(Ds.__renderTarget);xt.bindFramebuffer(R.READ_FRAMEBUFFER,ln.__webglFramebuffer),xt.bindFramebuffer(R.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let ti=0;ti<Wt;ti++)Ls&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Lt.get(b).__webglTexture,H,ee+ti),b.isDepthTexture?(we&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Lt.get(B).__webglTexture,H,Se+ti),R.blitFramebuffer(Xt,Qt,Et,zt,qt,he,Et,zt,R.DEPTH_BUFFER_BIT,R.NEAREST)):we?R.copyTexSubImage3D(Yt,H,qt,he,Se+ti,Xt,Qt,Et,zt):R.copyTexSubImage2D(Yt,H,qt,he,Se+ti,Xt,Qt,Et,zt);xt.bindFramebuffer(R.READ_FRAMEBUFFER,null),xt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else we?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(Yt,H,qt,he,Se,Et,zt,Wt,$e,de,Ee.data):B.isCompressedArrayTexture?R.compressedTexSubImage3D(Yt,H,qt,he,Se,Et,zt,Wt,$e,Ee.data):R.texSubImage3D(Yt,H,qt,he,Se,Et,zt,Wt,$e,de,Ee):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,H,qt,he,Et,zt,$e,de,Ee.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,H,qt,he,Ee.width,Ee.height,$e,Ee.data):R.texSubImage2D(R.TEXTURE_2D,H,qt,he,Et,zt,$e,de,Ee);R.pixelStorei(R.UNPACK_ROW_LENGTH,kn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,fe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,xn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Bi),R.pixelStorei(R.UNPACK_SKIP_IMAGES,en),H===0&&B.generateMipmaps&&R.generateMipmap(Yt),xt.unbindTexture()},this.copyTextureToTexture3D=function(b,B,$=null,j=null,H=0){return b.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,j=arguments[1]||null,b=arguments[2],B=arguments[3],H=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,B,$,j,H)},this.initRenderTarget=function(b){Lt.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),xt.unbindTexture()},this.resetState=function(){P=0,L=0,D=null,xt.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var xs=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ks=class extends ui{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},no=new C,io=new C,Eh=new Me,zs=new Ii,Dr=new ps,Sa=new C,wh=new C,_s=class extends He{constructor(t=new Ce,e=new Ks){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)no.fromBufferAttribute(e,i-1),io.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=no.distanceTo(io);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(i),Dr.radius+=r,t.ray.intersectsSphere(Dr)===!1)return;Eh.copy(i).invert(),zs.copy(t.ray).applyMatrix4(Eh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),E=h.getX(x+1),y=Ur(this,t,zs,l,p,E);y&&e.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=Ur(this,t,zs,l,x,m);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=Ur(this,t,zs,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=Ur(this,t,zs,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ur(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(no.fromBufferAttribute(o,i),io.fromBufferAttribute(o,r),e.distanceSqToSegment(no,io,Sa,wh)>n)return;Sa.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Sa);if(!(l<t.near||l>t.far))return{distance:l,point:wh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var ge=class extends on{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new mt:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,i=[],r=[],o=[],a=new C,l=new Me;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ie(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Ie(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Js=class extends dn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Pl=class extends Js{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ac(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Nr=new C,Ea=new ac,wa=new ac,Ta=new ac,Qs=class extends dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Nr.subVectors(i[0],i[1]).add(i[0]),c=Nr);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Nr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Nr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ea.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),wa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Ta.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Ea.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),wa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ta.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ea.calc(l),wa.calc(l),Ta.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Th(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Tg(s,t){let e=1-s;return e*e*t}function Ag(s,t){return 2*(1-s)*s*t}function Rg(s,t){return s*s*t}function Xs(s,t,e,n){return Tg(s,t)+Ag(s,e)+Rg(s,n)}function Cg(s,t){let e=1-s;return e*e*e*t}function Pg(s,t){let e=1-s;return 3*e*e*s*t}function Ig(s,t){return 3*(1-s)*s*s*t}function Lg(s,t){return s*s*s*t}function qs(s,t,e,n,i){return Cg(s,t)+Pg(s,e)+Ig(s,n)+Lg(s,i)}var so=class extends dn{constructor(t=new mt,e=new mt,n=new mt,i=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new mt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qs(t,i.x,r.x,o.x,a.x),qs(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Il=class extends dn{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qs(t,i.x,r.x,o.x,a.x),qs(t,i.y,r.y,o.y,a.y),qs(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ro=class extends dn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ll=class extends dn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oo=class extends dn{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Xs(t,i.x,r.x,o.x),Xs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ao=class extends dn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Xs(t,i.x,r.x,o.x),Xs(t,i.y,r.y,o.y),Xs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lo=class extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Th(a,l.x,c.x,h.x,u.x),Th(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new mt().fromArray(i))}return this}},co=Object.freeze({__proto__:null,ArcCurve:Pl,CatmullRomCurve3:Qs,CubicBezierCurve:so,CubicBezierCurve3:Il,EllipseCurve:Js,LineCurve:ro,LineCurve3:Ll,QuadraticBezierCurve:oo,QuadraticBezierCurve3:ao,SplineCurve:lo}),Dl=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new co[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new co[i.type]().fromJSON(i))}return this}},ys=class extends Dl{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ro(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new oo(this.currentPoint.clone(),new mt(t,e),new mt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new so(this.currentPoint.clone(),new mt(t,e),new mt(n,i),new mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new lo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new Js(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ho=class s extends Ce{constructor(t=[new mt(0,-.5),new mt(.5,0),new mt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ie(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new C,d=new mt,f=new C,g=new C,x=new C,m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let E=0;E<=e;E++){let y=n+E*h*i,v=Math.sin(y),k=Math.cos(y);for(let P=0;P<=t.length-1;P++){u.x=t[P].x*v,u.y=t[P].y,u.z=t[P].x*k,o.push(u.x,u.y,u.z),d.x=E/e,d.y=P/(t.length-1),a.push(d.x,d.y);let L=l[3*P+0]*v,D=l[3*P+1],w=l[3*P+0]*k;c.push(L,D,w)}}for(let E=0;E<e;E++)for(let y=0;y<t.length-1;y++){let v=y+E*t.length,k=v,P=v+t.length,L=v+t.length+1,D=v+1;r.push(k,P,D),r.push(L,D,P)}this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("uv",new ae(a,2)),this.setAttribute("normal",new ae(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var In=class s extends Ce{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new C,h=new mt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},me=class s extends Ce{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;E(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(f,2));function E(){let v=new C,k=new C,P=0,L=(e-t)/n;for(let D=0;D<=r;D++){let w=[],_=D/r,S=_*(e-t)+t;for(let z=0;z<=i;z++){let F=z/i,V=F*l+a,Q=Math.sin(V),W=Math.cos(V);k.x=S*Q,k.y=-_*n+m,k.z=S*W,u.push(k.x,k.y,k.z),v.set(Q,L,W).normalize(),d.push(v.x,v.y,v.z),f.push(F,1-_),w.push(g++)}x.push(w)}for(let D=0;D<i;D++)for(let w=0;w<r;w++){let _=x[w][D],S=x[w+1][D],z=x[w+1][D+1],F=x[w][D+1];(t>0||w!==0)&&(h.push(_,S,F),P+=3),(e>0||w!==r-1)&&(h.push(S,z,F),P+=3)}c.addGroup(p,P,0),p+=P}function y(v){let k=g,P=new mt,L=new C,D=0,w=v===!0?t:e,_=v===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*_,0),d.push(0,_,0),f.push(.5,.5),g++;let S=g;for(let z=0;z<=i;z++){let V=z/i*l+a,Q=Math.cos(V),W=Math.sin(V);L.x=w*W,L.y=m*_,L.z=w*Q,u.push(L.x,L.y,L.z),d.push(0,_,0),P.x=Q*.5+.5,P.y=W*.5*_+.5,f.push(P.x,P.y),g++}for(let z=0;z<i;z++){let F=k+z,V=S+z;v===!0?h.push(V,V+1,F):h.push(V+1,V,F),D+=3}c.addGroup(p,D,v===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},uo=class s extends me{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var vs=class extends ys{constructor(t){super(t),this.uuid=Oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new ys().fromJSON(i))}return this}},Dg={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=su(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=zg(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return tr(r,o,e,a,l,f,0),o}};function su(s,t,e,n,i){let r,o;if(i===Zg(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Ah(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Ah(r,s[r],s[r+1],o);return o&&Eo(o,o.next)&&(nr(o),o=o.next),o}function Li(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Eo(e,e.next)||Ae(e.prev,e,e.next)===0)){if(nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function tr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Gg(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Ng(s,n,i,r):Ug(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),nr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=kg(Li(s),t,e),tr(s,t,e,n,i,r,2)):o===2&&Og(s,t,e,n,i,r):tr(Li(s),t,e,n,i,r,1);break}}}function Ug(s){let t=s.prev,e=s,n=s.next;if(Ae(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&is(i,a,r,l,o,c,g.x,g.y)&&Ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ng(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ae(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Ul(f,g,t,e,n),E=Ul(x,m,t,e,n),y=s.prevZ,v=s.nextZ;for(;y&&y.z>=p&&v&&v.z<=E;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&is(a,h,l,u,c,d,y.x,y.y)&&Ae(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&is(a,h,l,u,c,d,v.x,v.y)&&Ae(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&is(a,h,l,u,c,d,y.x,y.y)&&Ae(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=E;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&is(a,h,l,u,c,d,v.x,v.y)&&Ae(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function kg(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Eo(i,r)&&ru(i,n,n.next,r)&&er(i,r)&&er(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),nr(n),nr(n.next),n=s=r),n=n.next}while(n!==s);return Li(n)}function Og(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qg(o,a)){let l=ou(o,a);o=Li(o,o.next),l=Li(l,l.next),tr(o,t,e,n,i,r,0),tr(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function zg(s,t,e,n){let i=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=su(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Xg(c));for(i.sort(Fg),r=0;r<i.length;r++)e=Bg(i[r],e);return e}function Fg(s,t){return s.x-t.x}function Bg(s,t){let e=Hg(s,t);if(!e)return t;let n=ou(e,s);return Li(n,n.next),Li(e,e.next)}function Hg(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&is(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),er(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Vg(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Vg(s,t){return Ae(s.prev,s,t.prev)<0&&Ae(t.next,s,s.next)<0}function Gg(s,t,e,n){let i=s;do i.z===0&&(i.z=Ul(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Wg(i)}function Wg(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function Ul(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Xg(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function is(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function qg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Yg(s,t)&&(er(s,t)&&er(t,s)&&$g(s,t)&&(Ae(s.prev,s,t.prev)||Ae(s,t.prev,t))||Eo(s,t)&&Ae(s.prev,s,s.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Eo(s,t){return s.x===t.x&&s.y===t.y}function ru(s,t,e,n){let i=Or(Ae(s,t,e)),r=Or(Ae(s,t,n)),o=Or(Ae(e,n,s)),a=Or(Ae(e,n,t));return!!(i!==r&&o!==a||i===0&&kr(s,e,t)||r===0&&kr(s,n,t)||o===0&&kr(e,s,n)||a===0&&kr(e,t,n))}function kr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Or(s){return s>0?1:s<0?-1:0}function Yg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&ru(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function er(s,t){return Ae(s.prev,s,s.next)<0?Ae(s,t,s.next)>=0&&Ae(s,s.prev,t)>=0:Ae(s,t,s.prev)<0||Ae(s,s.next,t)<0}function $g(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function ou(s,t){let e=new Nl(s.i,s.x,s.y),n=new Nl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ah(s,t,e,n){let i=new Nl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function nr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Nl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Zg(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Ys=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Rh(t),Ch(n,t);let o=t.length;e.forEach(Rh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Ch(n,e[l]);let a=Dg.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Rh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ch(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var ir=class s extends Ce{constructor(t=new vs([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ae(i,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:jg,y,v=!1,k,P,L,D;p&&(y=p.getSpacedPoints(h),v=!0,d=!1,k=p.computeFrenetFrames(h,!1),P=new C,L=new C,D=new C),d||(m=0,f=0,g=0,x=0);let w=a.extractPoints(c),_=w.shape,S=w.holes;if(!Ys.isClockWise(_)){_=_.reverse();for(let U=0,et=S.length;U<et;U++){let R=S[U];Ys.isClockWise(R)&&(S[U]=R.reverse())}}let F=Ys.triangulateShape(_,S),V=_;for(let U=0,et=S.length;U<et;U++){let R=S[U];_=_.concat(R)}function Q(U,et,R){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(et,R)}let W=_.length,ot=F.length;function K(U,et,R){let bt,nt,At,xt=U.x-et.x,Vt=U.y-et.y,Lt=R.x-U.x,T=R.y-U.y,M=xt*xt+Vt*Vt,G=xt*T-Vt*Lt;if(Math.abs(G)>Number.EPSILON){let rt=Math.sqrt(M),ut=Math.sqrt(Lt*Lt+T*T),it=et.x-Vt/rt,Mt=et.y+xt/rt,I=R.x-T/ut,N=R.y+Lt/ut,lt=((I-it)*T-(N-Mt)*Lt)/(xt*T-Vt*Lt);bt=it+xt*lt-U.x,nt=Mt+Vt*lt-U.y;let Y=bt*bt+nt*nt;if(Y<=2)return new mt(bt,nt);At=Math.sqrt(Y/2)}else{let rt=!1;xt>Number.EPSILON?Lt>Number.EPSILON&&(rt=!0):xt<-Number.EPSILON?Lt<-Number.EPSILON&&(rt=!0):Math.sign(Vt)===Math.sign(T)&&(rt=!0),rt?(bt=-Vt,nt=xt,At=Math.sqrt(M)):(bt=xt,nt=Vt,At=Math.sqrt(M/2))}return new mt(bt/At,nt/At)}let pt=[];for(let U=0,et=V.length,R=et-1,bt=U+1;U<et;U++,R++,bt++)R===et&&(R=0),bt===et&&(bt=0),pt[U]=K(V[U],V[R],V[bt]);let Tt=[],yt,Bt=pt.concat();for(let U=0,et=S.length;U<et;U++){let R=S[U];yt=[];for(let bt=0,nt=R.length,At=nt-1,xt=bt+1;bt<nt;bt++,At++,xt++)At===nt&&(At=0),xt===nt&&(xt=0),yt[bt]=K(R[bt],R[At],R[xt]);Tt.push(yt),Bt=Bt.concat(yt)}for(let U=0;U<m;U++){let et=U/m,R=f*Math.cos(et*Math.PI/2),bt=g*Math.sin(et*Math.PI/2)+x;for(let nt=0,At=V.length;nt<At;nt++){let xt=Q(V[nt],pt[nt],bt);dt(xt.x,xt.y,-R)}for(let nt=0,At=S.length;nt<At;nt++){let xt=S[nt];yt=Tt[nt];for(let Vt=0,Lt=xt.length;Vt<Lt;Vt++){let T=Q(xt[Vt],yt[Vt],bt);dt(T.x,T.y,-R)}}}let St=g+x;for(let U=0;U<W;U++){let et=d?Q(_[U],Bt[U],St):_[U];v?(L.copy(k.normals[0]).multiplyScalar(et.x),P.copy(k.binormals[0]).multiplyScalar(et.y),D.copy(y[0]).add(L).add(P),dt(D.x,D.y,D.z)):dt(et.x,et.y,0)}for(let U=1;U<=h;U++)for(let et=0;et<W;et++){let R=d?Q(_[et],Bt[et],St):_[et];v?(L.copy(k.normals[U]).multiplyScalar(R.x),P.copy(k.binormals[U]).multiplyScalar(R.y),D.copy(y[U]).add(L).add(P),dt(D.x,D.y,D.z)):dt(R.x,R.y,u/h*U)}for(let U=m-1;U>=0;U--){let et=U/m,R=f*Math.cos(et*Math.PI/2),bt=g*Math.sin(et*Math.PI/2)+x;for(let nt=0,At=V.length;nt<At;nt++){let xt=Q(V[nt],pt[nt],bt);dt(xt.x,xt.y,u+R)}for(let nt=0,At=S.length;nt<At;nt++){let xt=S[nt];yt=Tt[nt];for(let Vt=0,Lt=xt.length;Vt<Lt;Vt++){let T=Q(xt[Vt],yt[Vt],bt);v?dt(T.x,T.y+y[h-1].y,y[h-1].x+R):dt(T.x,T.y,u+R)}}}X(),st();function X(){let U=i.length/3;if(d){let et=0,R=W*et;for(let bt=0;bt<ot;bt++){let nt=F[bt];Nt(nt[2]+R,nt[1]+R,nt[0]+R)}et=h+m*2,R=W*et;for(let bt=0;bt<ot;bt++){let nt=F[bt];Nt(nt[0]+R,nt[1]+R,nt[2]+R)}}else{for(let et=0;et<ot;et++){let R=F[et];Nt(R[2],R[1],R[0])}for(let et=0;et<ot;et++){let R=F[et];Nt(R[0]+W*h,R[1]+W*h,R[2]+W*h)}}n.addGroup(U,i.length/3-U,0)}function st(){let U=i.length/3,et=0;gt(V,et),et+=V.length;for(let R=0,bt=S.length;R<bt;R++){let nt=S[R];gt(nt,et),et+=nt.length}n.addGroup(U,i.length/3-U,1)}function gt(U,et){let R=U.length;for(;--R>=0;){let bt=R,nt=R-1;nt<0&&(nt=U.length-1);for(let At=0,xt=h+m*2;At<xt;At++){let Vt=W*At,Lt=W*(At+1),T=et+bt+Vt,M=et+nt+Vt,G=et+nt+Lt,rt=et+bt+Lt;kt(T,M,G,rt)}}}function dt(U,et,R){l.push(U),l.push(et),l.push(R)}function Nt(U,et,R){A(U),A(et),A(R);let bt=i.length/3,nt=E.generateTopUV(n,i,bt-3,bt-2,bt-1);J(nt[0]),J(nt[1]),J(nt[2])}function kt(U,et,R,bt){A(U),A(et),A(bt),A(et),A(R),A(bt);let nt=i.length/3,At=E.generateSideWallUV(n,i,nt-6,nt-3,nt-2,nt-1);J(At[0]),J(At[1]),J(At[3]),J(At[1]),J(At[2]),J(At[3])}function A(U){i.push(l[U*3+0]),i.push(l[U*3+1]),i.push(l[U*3+2])}function J(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Kg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new co[i.type]().fromJSON(i)),new s(n,t.options)}},jg={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new mt(r,o),new mt(a,l),new mt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-u),new mt(d,1-g),new mt(x,1-p)]:[new mt(a,1-l),new mt(h,1-u),new mt(f,1-g),new mt(m,1-p)]}};function Kg(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ms=class s extends Ce{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/i,f=new C,g=new mt;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let E=p+m,y=E,v=E+n+1,k=E+n+2,P=E+1;a.push(y,v,P),a.push(v,k,P)}}this.setIndex(a),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var je=class s extends Ce{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let E=[],y=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let k=0;k<=e;k++){let P=k/e;u.x=-t*Math.cos(i+P*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+P*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(P+v,1-y),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let y=h[p][E+1],v=h[p][E],k=h[p+1][E],P=h[p+1][E+1];(p!==0||o>0)&&f.push(y,v,P),(p!==n-1||l<Math.PI)&&f.push(v,k,P)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var di=class s extends Ce{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let x=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let x=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,E=(i+1)*f+g;o.push(x,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var fo=class s extends Ce{constructor(t=new ao(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new mt,h=new C,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(f,2));function x(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),E(),p()}function m(y){h=t.getPointAt(y/e,h);let v=o.normals[y],k=o.binormals[y];for(let P=0;P<=i;P++){let L=P/i*Math.PI*2,D=Math.sin(L),w=-Math.cos(L);l.x=w*v.x+D*k.x,l.y=w*v.y+D*k.y,l.z=w*v.z+D*k.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let v=1;v<=i;v++){let k=(i+1)*(y-1)+(v-1),P=(i+1)*y+(v-1),L=(i+1)*y+v,D=(i+1)*(y-1)+v;g.push(k,P,D),g.push(P,L,D)}}function E(){for(let y=0;y<=e;y++)for(let v=0;v<=i;v++)c.x=y/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new co[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ot=class extends ui{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$h,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},po=class extends Ot{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function zr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Jg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var bs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kl=class extends bs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ac,endingEnd:Ac}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rc:r=t,a=2*e-n;break;case Cc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rc:o=t,l=2*n-e;break;case Cc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,E=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let k=0;k!==a;++k)r[k]=p*o[h+k]+E*o[c+k]+y*o[l+k]+v*o[u+k];return r}},Ol=class extends bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},zl=class extends bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Sn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zr(e,this.TimeBufferType),this.values=zr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:zr(t.times,Array),values:zr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Wr:e=this.InterpolantFactoryMethodDiscrete;break;case fl:e=this.InterpolantFactoryMethodLinear;break;case jo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return fl;case this.InterpolantFactoryMethodSmooth:return jo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Jg(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===jo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=fl;var Di=class extends Sn{constructor(t,e,n){super(t,e,n)}};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=Wr;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Fl=class extends Sn{};Fl.prototype.ValueTypeName="color";var Bl=class extends Sn{};Bl.prototype.ValueTypeName="number";var Hl=class extends bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ye.slerpFlat(r,0,o,c-a,o,c,l);return r}},mo=class extends Sn{InterpolantFactoryMethodLinear(t){return new Hl(this.times,this.values,this.getValueSize(),t)}};mo.prototype.ValueTypeName="quaternion";mo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=Wr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends Sn{};Vl.prototype.ValueTypeName="vector";var Gl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Qg=new Gl,Wl=class{constructor(t){this.manager=t!==void 0?t:Qg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Wl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ni=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},go=class extends Ni{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Aa=new Me,Ph=new C,Ih=new C,sr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new js,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ph.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ph),Ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ih),e.updateMatrixWorld(),Aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Xl=class extends sr{constructor(){super(new Ve(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=fs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},xo=class extends Ni{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Xl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Lh=new Me,Fs=new C,Ra=new C,ql=class extends sr{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new mt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Fs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Fs),Ra.copy(n.position),Ra.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ra),n.updateMatrixWorld(),i.makeTranslation(-Fs.x,-Fs.y,-Fs.z),Lh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh)}},fi=class extends Ni{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ql}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Yl=class extends sr{constructor(){super(new Qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_o=class extends Ni{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Yl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},yo=class extends Ni{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var lc="\\[\\]\\.:\\/",tx=new RegExp("["+lc+"]","g"),cc="[^"+lc+"]",ex="[^"+lc.replace("\\.","")+"]",nx=/((?:WC+[\/:])*)/.source.replace("WC",cc),ix=/(WCOD+)?/.source.replace("WCOD",ex),sx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cc),rx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cc),ox=new RegExp("^"+nx+ix+sx+rx+"$"),ax=["material","materials","bones","map"],$l=class{constructor(t,e,n){let i=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Te=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tx,"")}static parseTrackName(t){let e=ox.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);ax.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=$l;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jx=new Float32Array(1);var Dh=new Me,Ss=class{constructor(t,e,n=0,i=1/0){this.ray=new Ii(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Dh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dh),this}intersectObject(t,e=!0,n=[]){return Zl(t,this,n,e),n.sort(Uh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Zl(t[i],this,n,e);return n.sort(Uh),n}};function Uh(s,t){return s.distance-t.distance}function Zl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Zl(r[o],t,e,!0)}}var rr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var vo=class extends $n{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);var wo=class extends xs{constructor(){super();let t=new Gt;t.deleteAttribute("uv");let e=new Ot({side:Le}),n=new Ot,i=new fi(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Rt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Rt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Rt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Rt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Rt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new Rt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new Rt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Rt(t,Ts(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Rt(t,Ts(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new Rt(t,Ts(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new Rt(t,Ts(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let m=new Rt(t,Ts(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new Rt(t,Ts(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ts(s){let t=new Re;return t.color.setScalar(s),t}var ze=-1.0474999999999999,pi=.292,To=9.81,hc=.2,lx=.011,au=6,cx=.95,lu=.78,hx=.15,ux=7,Dn={white:{name:"Biela",color:16052712,value:0},red:{name:"\u010Cerven\xE1",color:11735583,value:1},yellow:{name:"\u017Dlt\xE1",color:15909912,value:2},green:{name:"Zelen\xE1",color:1014330,value:3},brown:{name:"Hned\xE1",color:7027230,value:4},blue:{name:"Modr\xE1",color:1525685,value:5},pink:{name:"Ru\u017Eov\xE1",color:15764136,value:6},black:{name:"\u010Cierna",color:1118481,value:7}},pn={yellow:{x:ze,z:pi},green:{x:ze,z:-pi},brown:{x:ze,z:0},blue:{x:0,z:0},pink:{x:3.569/4,z:0},black:{x:3.569/2-.324,z:0}},fn=.062,As=.052,zi=[{x:-3.569/2-.012,z:-1.778/2-.012,r:.058,corner:!0},{x:-3.569/2-.012,z:1.778/2+.012,r:.058,corner:!0},{x:3.569/2+.012,z:-1.778/2-.012,r:.058,corner:!0},{x:3.569/2+.012,z:1.778/2+.012,r:.058,corner:!0},{x:0,z:-1.778/2-.034,r:.056,corner:!1},{x:0,z:1.778/2+.034,r:.056,corner:!1}];function dx(){let s=[],n=(r,o,a,l)=>s.push({ax:r,az:o,bx:a,bz:l});for(let r of[-1,1])n(r*1.7845,-.889+fn,r*1.7845,.889-fn),n(r*1.7845,-.889+fn,r*(1.7845+.045*.7),-.889+fn-.045*.7),n(r*1.7845,.889-fn,r*(1.7845+.045*.7),.889-fn+.045*.7);for(let r of[-1,1])n(-1.7845+fn,r*.889,-As,r*.889),n(As,r*.889,1.7845-fn,r*.889),n(-1.7845+fn,r*.889,-1.7845+fn-.045*.7,r*(.889+.045*.7)),n(1.7845-fn,r*.889,1.7845-fn+.045*.7,r*(.889+.045*.7)),n(-As,r*.889,-As+.008,r*(.889+.045)),n(As,r*.889,As-.008,r*(.889+.045));return s}var fx=dx();function Rs(){let s=[],t=(r,o,a)=>s.push(px(s.length,r,o,a));t("white",ze-.06,-.12);for(let r of["yellow","green","brown","blue","pink","black"])t(r,pn[r].x,pn[r].z);let e=6e-4,n=pn.pink.x+2*.02625+.002,i=Math.sqrt(3)*(.02625+e/2);for(let r=0;r<5;r++)for(let o=0;o<=r;o++)t("red",n+r*i,(o-r/2)*(2*.02625+e));return s}function px(s,t,e,n){return{id:s,kind:t,p:{x:e,z:n},v:{x:0,z:0},w:{x:0,y:0,z:0},on:!0,potted:null,moving:!1}}function ar(s){return s.map(t=>({id:t.id,kind:t.kind,x:t.p.x,z:t.p.z,on:t.on}))}function lr(s,t){for(let e of t){let n=s[e.id];n.p.x=e.x,n.p.z=e.z,n.on=e.on,n.potted=null,n.v.x=n.v.z=0,n.w.x=n.w.y=n.w.z=0}}function Ro(s,t,e,n=0,i=0){let r=Math.max(.05,Math.min(1,e))*ux,o=Math.cos(t),a=Math.sin(t);s.v.x=r*o,s.v.z=r*a;let l=n*.5*.02625,c=i*.5*.02625,h=5*r/(2*.02625*.02625);s.w.x=h*c*a,s.w.y=h*l,s.w.z=-h*c*o,s.moving=!0}var mx=1/1e3,Ao=class{constructor(t){this.balls=t,this.events=[],this.firstContact=null,this.time=0}get moving(){return this.balls.some(t=>t.on&&t.moving)}advance(t){let e=t;for(;e>1e-9;){let n=Math.min(mx,e);if(this.step(n),e-=n,!this.moving)break}return this.moving}step(t){this.time+=t;let e=this.balls;for(let n of e)n.on&&n.moving&&(gx(n,t),n.p.x+=n.v.x*t,n.p.z+=n.v.z*t);for(let n=0;n<e.length;n++){let i=e[n];if(i.on)for(let r=n+1;r<e.length;r++){let o=e[r];if(!o.on||!i.moving&&!o.moving)continue;let a=o.p.x-i.p.x,l=o.p.z-i.p.z,c=a*a+l*l;if(c>=4*.02625*.02625||c<1e-12)continue;let h=Math.sqrt(c),u=a/h,d=l/h,f=(i.v.x-o.v.x)*u+(i.v.z-o.v.z)*d,g=(2*.02625-h)/2+1e-7;if(i.p.x-=u*g,i.p.z-=d*g,o.p.x+=u*g,o.p.z+=d*g,f<=0)continue;let x=(1+cx)/2*f;i.v.x-=x*u,i.v.z-=x*d,o.v.x+=x*u,o.v.z+=x*d,i.moving=o.moving=!0,this.firstContact===null&&(i.kind==="white"||o.kind==="white")&&(this.firstContact=i.kind==="white"?o:i),this.events.push({type:"ball",a:i.id,b:o.id,speed:f})}}for(let n of e){if(!n.on||!n.moving)continue;for(let r of zi){let o=n.p.x-r.x,a=n.p.z-r.z;if(o*o+a*a<r.r*r.r){n.on=!1,n.moving=!1,n.potted={x:r.x,z:r.z,vx:n.v.x,vz:n.v.z,t:this.time},this.events.push({type:"pot",a:n.id,pocket:zi.indexOf(r),speed:Math.hypot(n.v.x,n.v.z)});break}}if(!n.on)continue;for(let r of fx)xx(n,r,this.events);let i=.2;(Math.abs(n.p.x)>3.569/2+i||Math.abs(n.p.z)>1.778/2+i)&&(n.p.x=Math.max(-3.569/2+.02625,Math.min(3.569/2-.02625,n.p.x)),n.p.z=Math.max(-1.778/2+.02625,Math.min(1.778/2-.02625,n.p.z)),n.v.x=n.v.z=0)}}};function gx(s,t){let e=s.v,n=s.w,i=e.x+.02625*n.z,r=e.z-.02625*n.x,o=Math.hypot(i,r);if(o>1e-4){let l=3.5*hc*To*t;if(o<=l)e.x-=2/7*i,e.z-=2/7*r,n.z=-e.x/.02625,n.x=e.z/.02625;else{let c=i/o,h=r/o,u=hc*To*t;e.x-=u*c,e.z-=u*h;let d=5*hc*To/(2*.02625)*t;n.x+=d*h,n.z-=d*c}}else{let l=Math.hypot(e.x,e.z),c=lx*To*t;l<=c?e.x=e.z=0:(e.x-=e.x/l*c,e.z-=e.z/l*c),n.z=-e.x/.02625,n.x=e.z/.02625}n.y*=Math.exp(-au*t*.12);let a=au*t;n.y=Math.abs(n.y)<=a?0:n.y-Math.sign(n.y)*a,Math.hypot(e.x,e.z)<.004&&Math.hypot(i,r)<.004&&(e.x=e.z=0,n.x=n.y=n.z=0,s.moving=!1)}function xx(s,t,e){let n=t.bx-t.ax,i=t.bz-t.az,r=n*n+i*i,o=((s.p.x-t.ax)*n+(s.p.z-t.az)*i)/r;o=Math.max(0,Math.min(1,o));let a=t.ax+o*n,l=t.az+o*i,c=s.p.x-a,h=s.p.z-l,u=c*c+h*h;if(u>=.02625*.02625||u<1e-14)return;let d=Math.sqrt(u),f=c/d,g=h/d,x=s.v.x*f+s.v.z*g;if(s.p.x+=f*(.02625-d+1e-7),s.p.z+=g*(.02625-d+1e-7),x>=0)return;s.v.x-=(1+lu)*x*f,s.v.z-=(1+lu)*x*g;let m=-g,p=f,E=s.w.y*.02625,y=hx*Math.min(1,-x/1.5+.3);s.v.x-=y*E*m,s.v.z-=y*E*p,s.w.y*=.55,s.w.x*=.7,s.w.z*=.7,s.moving=!0,e.push({type:"cushion",a:s.id,speed:-x})}function Co(s,t,e){let n=Math.cos(e),i=Math.sin(e),r=null;for(let a of s){if(!a.on||a===t)continue;let l=a.p.x-t.p.x,c=a.p.z-t.p.z,h=l*n+c*i;if(h<=0)continue;let u=l*l+c*c-h*h;if(u>4*.02625*.02625)continue;let d=h-Math.sqrt(4*.02625*.02625-u);d>=0&&(!r||d<r.t)&&(r={ball:a,t:d})}let o=1/0;return n>1e-9&&(o=Math.min(o,(3.569/2-.02625-t.p.x)/n)),n<-1e-9&&(o=Math.min(o,(-3.569/2+.02625-t.p.x)/n)),i>1e-9&&(o=Math.min(o,(1.778/2-.02625-t.p.z)/i)),i<-1e-9&&(o=Math.min(o,(-1.778/2+.02625-t.p.z)/i)),!r||o<r.t?{ball:null,t:o,ghost:{x:t.p.x+n*o,z:t.p.z+i*o}}:{ball:r.ball,t:r.t,ghost:{x:t.p.x+n*r.t,z:t.p.z+i*r.t}}}function cu(s,t){if(s>ze+1e-9)return!1;let e=s-ze;return e*e+t*t<=pi*pi+1e-9}function Po(s,t,e,n=null){return Math.abs(t)>3.569/2-.02625||Math.abs(e)>1.778/2-.02625?!1:s.every(i=>!i.on||i===n||(i.p.x-t)**2+(i.p.z-e)**2>=4*.02625*.02625*1.0001)}var _x=[{title:"Ovl\xE1danie my\u0161ou",lines:["Klikni do hry: my\u0161 sa zachyt\xED v okne.","Pohyb my\u0161i bez tla\u010Didla: mierenie.","Shift: jemn\xE9 mierenie (len pokro\u010Dil\xE9","   a majstrovsk\xE9 t\xE1g\xE1, pozri F2).","\u013Dav\xE9 tla\u010Didlo dr\u017E: ruka chyt\xED t\xE1go.","   My\u0161 k sebe t\xE1go odtiahne,","   pohyb dopredu vystrel\xED.","   Sila pod\u013Ea r\xFDchlosti pohybu.","Koliesko dr\u017E: miesto \xFAderu na bielej.","Dvojklik kolieskom: stred bielej.","Prav\xE9 tla\u010Didlo dr\u017E: posun poh\u013Eadu.","Ot\xE1\u010Danie kolieska: pribl\xED\u017Eenie."]},{title:"Kl\xE1vesy",lines:["F1   t\xE1to n\xE1stenka","F2   stojan s t\xE1gami","F3   nakriedova\u0165 \u0161pi\u010Dku t\xE1ga","F4   tabu\u013Ea so sk\xF3re","F6   otvori\u0165 alebo zatvori\u0165 dvere","F7 kreslo so spr\xE1vami (C, V), F8 rebr\xED\u010Dek,","F9 mixpult a r\xE1dio (\u0161\xEDpky, P),","F10 bar s telef\xF3nom (M\xF4j \xFA\u010Det)","Tab  poh\u013Ead na st\xF4l zhora","Esc  hlavn\xE9 menu, Ctrl dr\u017E: vo\u013En\xE1 my\u0161","Z sp\xE4\u0165, B biela do ruky,","R nov\xE9 rozostavenie, S presko\u010Di\u0165","Medzern\xEDk dr\u017E: sila, \u0161\xEDpky: mierenie"]},{title:"Princ\xEDp hry",lines:["Bielou gu\u013Eou pot\xE1paj ostatn\xE9 gule.","Body: \u010Derven\xE1 1, \u017Elt\xE1 2, zelen\xE1 3,","hned\xE1 4, modr\xE1 5, ru\u017Eov\xE1 6, \u010Dierna 7.","O najlep\u0161ie sk\xF3re: cel\xFD frame s\xE1m,","   fauly sa odpo\u010D\xEDtaj\xFA, rozhoduje \u010Das.","S\xE9ria: body bez preru\u0161enia.","Ke\u010F spadne biela, polo\u017E ju do D.","Kruh dole ukazuje dotyk g\xFA\u013E zhora:","   uhol a plnos\u0165 z\xE1sahu.","Krieda (F3): fal\u0161e s\xFA 5x silnej\u0161ie,","   nakriedovan\xE1 \u0161pi\u010Dka vydr\u017E\xED 3 \xFAdery.","   Bez kriedy maj\xFA fal\u0161e len p\xE4tinu \xFA\u010Dinku."]},{title:"T\xE1g\xE1 (F2) a partie",lines:["Desa\u0165 t\xE1g v troch kateg\xF3ri\xE1ch.","Tvrd\xE1 \u0161pi\u010Dka: silnej\u0161\xED \xFAder,","   hor\u0161ie dr\u017E\xED fal\u0161e.","M\xE4kk\xE1 \u0161pi\u010Dka: jemnej\u0161ie \xFAdery.","Dlh\xE9 t\xE1go: dlh\u0161ie \u0165ahanie my\u0161ou,","   jemnej\u0161ie d\xE1vkovanie sily.","Pokro\u010Dil\xE9 a majstrovsk\xE9 t\xE1g\xE1","   maj\xFA jemn\xE9 mierenie so Shift.","V\xFDber: klik na kartu alebo \u0161\xEDpky.","Hra\u0165 s priate\u013Eom (menu po Esc):","   partia cez internet pod\u013Ea pravidiel."]}];function hu(){let e=document.createElement("canvas");e.width=2048,e.height=1408;let n=e.getContext("2d");n.fillStyle="#a5754a",n.fillRect(0,0,2048,1408);for(let o=0;o<9e3;o++)n.fillStyle=`rgba(${60+Math.random()*80},${35+Math.random()*40},${15+Math.random()*20},${.15+Math.random()*.25})`,n.fillRect(Math.random()*2048,Math.random()*1408,2+Math.random()*4,2+Math.random()*4);n.fillStyle="#f4ecd8",n.save(),n.translate(2048/2,92),n.rotate(-.01),n.fillRect(-330,-60,660,112),n.fillStyle="#123524",n.font="bold 76px Georgia, serif",n.textAlign="center",n.textBaseline="middle",n.fillText("N\xE1poveda",0,0),n.restore();let i=[[70,190,960,600,-.012],[1080,190,900,520,.01],[70,830,960,530,.008],[1080,760,900,600,-.01]];_x.forEach((o,a)=>{let[l,c,h,u,d]=i[a];n.save(),n.translate(l+h/2,c+u/2),n.rotate(d),n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(-h/2+10,-u/2+12,h,u),n.fillStyle="#fbf7ec",n.fillRect(-h/2,-u/2,h,u),n.fillStyle=["#c0392b","#2f6fd6","#2a9d8f","#c9a24a"][a],n.beginPath(),n.arc(0,-u/2+22,14,0,Math.PI*2),n.fill(),n.fillStyle="#123524",n.font="bold 50px Georgia, serif",n.textAlign="left",n.textBaseline="top",n.fillText(o.title,-h/2+40,-u/2+50),n.fillStyle="#c9a24a",n.fillRect(-h/2+40,-u/2+110,h-80,4),n.fillStyle="#222";let f=Math.min(42,(u-150)/o.lines.length);n.font=`${Math.min(36,Math.floor(f*.86))}px Arial, Helvetica, sans-serif`,o.lines.forEach((g,x)=>{n.fillText(g,-h/2+44,-u/2+132+x*f)}),n.restore()});let r=new ge(e);return r.colorSpace=oe,r.anisotropy=8,r}var Un=(s,t,e,n,i,r,o,a,l,c,h)=>({id:s,name:t,category:e,tip:n,power:i,grip:r,len:o,fine:a,colors:{shaft:l,butt:c},note:h}),Ke=[Un("club","Klubov\xE9 t\xE1go","Z\xE1kladn\xE9","stredn\xE1",.8,1,1.45,0,"#dcb57e","#3a1c0c","Predvolen\xE9 t\xE1go na ka\u017Ed\xFD \xFAder."),Un("short","Kr\xE1tke t\xE1go","Z\xE1kladn\xE9","tvrd\xE1",.9,.85,1.37,0,"#d2a56a","#5a1d0e","Kr\xE1tke \u0165ahanie, siln\xE9 \xFAdery, hor\u0161ie dr\u017E\xED fal\u0161e."),Un("compact","Kompaktn\xE9 t\xE1go","Z\xE1kladn\xE9","stredn\xE1",.75,1,1.3,0,"#e0bd88","#20304a","Najkrat\u0161ie, r\xFDchle \u0165ahanie, slab\u0161ie \xFAdery."),Un("break","Prer\xE1\u017Eacie t\xE1go","Z\xE1kladn\xE9","ve\u013Emi tvrd\xE1",1,.7,1.45,0,"#cfa060","#5b0f14","Pln\xE1 sila na rozbitie, fal\u0161e skoro nedr\u017E\xED."),Un("soft","M\xE4kk\xE9 t\xE1go","Pokro\u010Dil\xE9","m\xE4kk\xE1",.65,1,1.47,8e-5,"#e8c992","#1f3b2a","Jemn\xE9 \xFAdery okolo \u010Diernej, presn\xE9 d\xE1vkovanie sily."),Un("long","Dlh\xE9 t\xE1go","Pokro\u010Dil\xE9","stredn\xE1",.85,1,1.58,6e-5,"#dfbc88","#14213d","Dlh\xE9 \u0165ahanie my\u0161ou, ve\u013Emi jemn\xE9 d\xE1vkovanie sily."),Un("ebony","Ebenov\xE9 t\xE1go","Pokro\u010Dil\xE9","stredne tvrd\xE1",.9,.95,1.49,6e-5,"#e6c896","#0d0d0d","Vyv\xE1\u017Een\xE9 t\xE1go na v\u0161etky \xFAdery."),Un("master","Majstrovsk\xE9 t\xE1go","Majstrovsk\xE9","stredne tvrd\xE1",1,1,1.5,3e-5,"#efd3a0","#0b0b0b","Pln\xE1 sila aj najjemnej\u0161ie mierenie so Shift."),Un("tour","Turnajov\xE9 t\xE1go","Majstrovsk\xE9","tvrd\xE1",1,.9,1.47,3e-5,"#f0d6a4","#2a0f2e","Siln\xE9 a presn\xE9 \xFAdery, fal\u0161e o nie\u010Do slab\u0161ie."),Un("touch","Citliv\xE9 t\xE1go","Majstrovsk\xE9","m\xE4kk\xE1",.72,1,1.6,2e-5,"#f2dcae","#123524","Najjemnej\u0161ie d\xE1vkovanie sily a mierenie.")];function uc(s){return Ke.find(t=>t.id===s)||Ke[0]}function uu(s){return 380*Math.pow(s.len/1.45,1.6)}function yx(s){let n=document.createElement("canvas");n.width=64,n.height=2048;let i=n.getContext("2d"),r=a=>2048*(1-a);i.fillStyle=s.colors.shaft,i.fillRect(0,0,64,2048);for(let a=0;a<40;a++){i.strokeStyle=`rgba(${120+Math.random()*40},${80+Math.random()*30},${40+Math.random()*20},${.12+Math.random()*.18})`,i.lineWidth=.5+Math.random()*1.5;let l=Math.random()*64;i.beginPath(),i.moveTo(l,0);for(let c=0;c<=2048;c+=64)i.lineTo(l+Math.sin(c/300+a)*3,c);i.stroke()}i.fillStyle=s.colors.butt,i.fillRect(0,0,64,r(.64));for(let a=0;a<4;a++){let l=(a+.5)*16;i.beginPath(),i.moveTo(l-64/8,r(.64)),i.lineTo(l,r(.5)),i.lineTo(l+64/8,r(.64)),i.closePath(),i.fill()}for(let a=0;a<30;a++){i.strokeStyle=`rgba(255,255,255,${.03+Math.random()*.05})`,i.lineWidth=.6+Math.random();let l=Math.random()*64;i.beginPath(),i.moveTo(l,0),i.lineTo(l+(Math.random()-.5)*6,r(.62)),i.stroke()}i.fillStyle="#c9a24a",i.fillRect(0,r(.645),64,2048*.004),i.fillRect(0,r(.985),64,2048*.004),i.fillStyle="#111",i.fillRect(0,0,64,r(.993)),i.fillStyle="#f3efe4",i.fillRect(0,r(.03),64,2048*.017),i.fillStyle="#2f6fd6",i.fillRect(0,r(.013),64,2048*.013+1);let o=new ge(n);return o.colorSpace=oe,o.anisotropy=4,o}function Io(s,t=!0){let e=new ue,n=new me(.0145,.0048,s.len,24,1),i=new Rt(n,new Ot({map:yx(s),roughness:.32,metalness:.04}));return i.position.y=s.len/2,i.castShadow=t,e.add(i),e}var jn=2048,Cs=1448;function mi(s,t,e,n,i,r,o){let a=String(t||"").split(/\s+/),l="",c=0;for(let h=0;h<a.length;h++){let u=l?l+" "+a[h]:a[h];if(s.measureText(u).width>i&&l){if(c++,c>=o){let d=l;for(;d&&s.measureText(d+"\u2026").width>i;)d=d.slice(0,-1);return s.fillText(d+"\u2026",e,n),n+r}s.fillText(l,e,n),n+=r,l=a[h]}else l=u}return l&&(s.fillText(l,e,n),n+=r),n}function du(s,t){let e=document.createElement("canvas");e.width=jn,e.height=Cs;let n=e.getContext("2d"),i=new ge(e);i.colorSpace=oe,i.anisotropy=8;let r=(s||[]).slice(0,9),o=r.map(()=>null),a="#1d1a16",l='Georgia, "Times New Roman", serif',c=(u,d,f,g,x)=>{let m=o[u];if(m){let p=g/x,E=m.width,y=m.width/p;y>m.height&&(y=m.height,E=m.height*p),n.save(),n.filter="grayscale(0.25) sepia(0.15)",n.drawImage(m,(m.width-E)/2,(m.height-y)/2,E,y,d,f,g,x),n.restore()}else n.fillStyle="#cfc6b3",n.fillRect(d,f,g,x),n.fillStyle="#a69c87",n.font=`bold 40px ${l}`,n.textAlign="center",n.fillText("HEDLAJNER",d+g/2,f+x/2+14),n.textAlign="left"},h=()=>{n.fillStyle="#f1ebdd",n.fillRect(0,0,jn,Cs);for(let p=0;p<2500;p++)n.fillStyle=`rgba(120,100,70,${Math.random()*.05})`,n.fillRect(Math.random()*jn,Math.random()*Cs,3,3);let u=n.createLinearGradient(jn/2-30,0,jn/2+30,0);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.5,"rgba(0,0,0,0.12)"),u.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=u,n.fillRect(jn/2-30,0,60,Cs),n.fillStyle="#c0392b",n.fillRect(60,46,92,92),n.fillStyle="#fff",n.font=`bold 78px ${l}`,n.fillText("H",80,120),n.fillStyle=a,n.font=`bold 104px ${l}`,n.fillText(t||"HEDLAJNER",172,128),n.font=`italic 34px ${l}`,n.fillStyle="#5a5246",n.fillText("Hlavn\xE9 spr\xE1vy z domova a zo sveta",176,172);let d=new Date;if(n.textAlign="right",n.font=`30px ${l}`,n.fillText(`${d.getDate()}. ${d.getMonth()+1}. ${d.getFullYear()}   hedlajner.sk`,jn-60,128),n.textAlign="left",n.fillStyle=a,n.fillRect(60,196,jn-120,5),n.fillRect(60,207,jn-120,1.5),!r.length){n.font=`48px ${l}`,n.fillText("Spr\xE1vy sa nepodarilo na\u010D\xEDta\u0165.",80,320),i.needsUpdate=!0;return}let f=r[0];c(0,60,240,920,520),n.fillStyle="#c0392b",n.font="bold 30px Arial, sans-serif",n.fillText((f.c||"").toUpperCase(),60,808),n.fillStyle=a,n.font=`bold 62px ${l}`;let g=mi(n,f.t,60,876,920,70,3);n.font=`32px ${l}`,n.fillStyle="#3a342c",g=mi(n,f.e,60,g+10,920,42,6),n.font=`italic 26px ${l}`,n.fillStyle="#7a7060",n.fillText(f.d||"",60,Math.min(Cs-50,g+14));let x=240;for(let p=1;p<=2&&p<r.length;p++){let E=r[p];c(p,1070,x,300,200),n.fillStyle="#c0392b",n.font="bold 24px Arial, sans-serif",n.fillText((E.c||"").toUpperCase(),1395,x+26),n.fillStyle=a,n.font=`bold 40px ${l}`;let y=mi(n,E.t,1395,x+74,590,46,3);n.font=`26px ${l}`,n.fillStyle="#3a342c",mi(n,E.e,1395,y+4,590,32,Math.max(1,Math.floor((x+260-y)/32))),x+=300,n.fillStyle="rgba(29,26,22,0.4)",n.fillRect(1070,x-40,915,2)}n.fillStyle=a,n.font="bold 34px Arial, sans-serif",n.fillText("\u010EAL\u0160IE SPR\xC1VY",1070,x+8),n.fillRect(1070,x+22,915,3),r.slice(3).forEach((p,E)=>{let y=E%2,v=Math.floor(E/2),k=1070+y*470,P=x+80+v*200;P>Cs-80||(n.fillStyle="#c0392b",n.font="bold 22px Arial, sans-serif",n.fillText((p.c||"").toUpperCase(),k,P),n.fillStyle=a,n.font=`bold 32px ${l}`,mi(n,p.t,k,P+42,440,38,3),n.font=`italic 22px ${l}`,n.fillStyle="#7a7060",n.fillText(p.d||"",k,P+168))}),i.needsUpdate=!0};return h(),r.slice(0,3).forEach((u,d)=>{if(!u.i)return;let f=new Image;f.crossOrigin="anonymous",f.onload=()=>{o[d]=f;try{h()}catch{o[d]=null,h()}},f.src=u.i}),{texture:i,items:r}}function fu(s){let n=document.createElement("canvas");n.width=1024,n.height=1400;let i=n.getContext("2d"),r=new ge(n);r.colorSpace=oe,r.anisotropy=8;let o=(s||[]).slice(0,12),a="Arial, Helvetica, sans-serif",l=i.createLinearGradient(0,0,1024,1400);l.addColorStop(0,"#0f2a4a"),l.addColorStop(1,"#1d5a7a"),i.fillStyle=l,i.fillRect(0,0,1024,1400),i.fillStyle="rgba(255,255,255,0.06)";for(let d=0;d<14;d++)i.beginPath(),i.arc(Math.random()*1024,Math.random()*1400,60+Math.random()*160,0,Math.PI*2),i.fill();i.fillStyle="#ffffff",i.font=`900 120px ${a}`,i.fillText("SPR\xC1VY",50,150),i.fillStyle="#ffcf4a",i.font=`bold 44px ${a}`,i.fillText("RSS",560,150),i.fillStyle="#d6e6f5",i.font=`30px ${a}`,i.fillText("Hedlajner  |  spr\xE1vy z m\xE9di\xED doma aj vo svete",54,200);let c=new Date;if(i.textAlign="right",i.fillText(`${c.getDate()}. ${c.getMonth()+1}. ${c.getFullYear()}`,974,70),i.textAlign="left",i.fillStyle="#ffcf4a",i.fillRect(50,226,924,6),!o.length)return i.fillStyle="#fff",i.font=`44px ${a}`,i.fillText("Spr\xE1vy z RSS nie s\xFA k dispoz\xEDcii.",60,330),r.needsUpdate=!0,{texture:r,items:o};let h=o[0];i.fillStyle="#ffcf4a",i.font=`bold 30px ${a}`,i.fillText(`${(h.c||"").toUpperCase()}  ${h.s||""}`,50,300),i.fillStyle="#ffffff",i.font=`bold 66px ${a}`;let u=mi(i,h.t,50,380,924,74,4);return i.fillStyle="#d6e6f5",i.font=`32px ${a}`,u=mi(i,h.e,50,u+6,924,42,3),u+=30,i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(36,u-10,952,1400-u-40),u+=40,o.slice(1).forEach(d=>{u>1310||(i.fillStyle="#ffcf4a",i.font=`bold 22px ${a}`,i.fillText(`${d.s||""}${d.n?"  +"+d.n+" m\xE9di\xE1":""}`,60,u),i.fillStyle="#ffffff",i.font=`bold 32px ${a}`,u=mi(i,d.t,60,u+38,894,38,2)+18)}),r.needsUpdate=!0,{texture:r,items:o}}var De={x:5,z:3.75,floor:-.86,ceil:-.86+3},Fi=1;function vx(){let e=document.createElement("canvas");e.width=512,e.height=426;let n=e.getContext("2d");n.fillStyle="#4e2914",n.fillRect(0,0,512,426);for(let r=0;r<120;r++){n.strokeStyle=`rgba(${20+Math.random()*30},${8+Math.random()*10},2,${.12+Math.random()*.2})`,n.lineWidth=.6+Math.random()*1.4,n.beginPath();let o=Math.random()*512;n.moveTo(o,0);for(let a=0;a<=426;a+=30)n.lineTo(o+Math.sin(a/50+r)*4,a);n.stroke()}for(let r of[0,512/2]){let o=r+26,a=40,l=512/2-52,c=346;n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(o,a,l,c),n.strokeStyle="rgba(0,0,0,0.55)",n.lineWidth=6,n.strokeRect(o,a,l,c),n.strokeStyle="rgba(255,190,120,0.18)",n.lineWidth=2,n.strokeRect(o+5,a+5,l-10,c-10)}let i=new ge(e);return i.colorSpace=oe,i.wrapS=qn,i}function Mx(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle="#1a4a32",e.fillRect(0,0,256,256);for(let r=0;r<256;r+=32)e.fillStyle="rgba(255,255,255,0.025)",e.fillRect(r,0,14,256);let n=(r,o)=>{e.save(),e.translate(r,o),e.fillStyle="rgba(190,170,110,0.16)",e.beginPath(),e.moveTo(0,-38),e.quadraticCurveTo(14,-10,0,0),e.quadraticCurveTo(-14,-10,0,-38),e.moveTo(0,38),e.quadraticCurveTo(14,10,0,0),e.quadraticCurveTo(-14,10,0,38),e.moveTo(-30,0),e.quadraticCurveTo(-8,10,0,0),e.quadraticCurveTo(-8,-10,-30,0),e.moveTo(30,0),e.quadraticCurveTo(8,10,0,0),e.quadraticCurveTo(8,-10,30,0),e.fill(),e.beginPath(),e.arc(0,0,5,0,Math.PI*2),e.fill(),e.restore()};n(256/2,256/2);for(let[r,o]of[[0,0],[256,0],[0,256],[256,256]])n(r,o);let i=new ge(t);return i.colorSpace=oe,i.wrapS=i.wrapT=qn,i}function bx(s){let t=document.createElement("canvas");t.width=512,t.height=370;let e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,220),i=[["#f3c98b","#d9825b","#4a6a4d","#2c4a3a","#7aa6b8"],["#9fc3d8","#e8d3a8","#5d7b4f","#33502f","#6d93a8"]],r=i[s%i.length];n.addColorStop(0,r[0]),n.addColorStop(1,r[1]),e.fillStyle=n,e.fillRect(0,0,512,370),e.fillStyle="rgba(255,240,200,0.8)",e.beginPath(),e.arc(150+s*180,90,34,0,Math.PI*2),e.fill();for(let[a,l,c]of[[200,r[2],40],[250,r[3],30]]){e.fillStyle=l,e.beginPath(),e.moveTo(0,370);for(let h=0;h<=512;h+=16)e.lineTo(h,a-Math.sin(h/(70+s*20)+s)*c-Math.sin(h/23)*6);e.lineTo(512,370),e.fill()}e.fillStyle=r[4],e.fillRect(0,300,512,70),e.fillStyle="rgba(255,255,255,0.25)";for(let a=0;a<12;a++)e.fillRect(Math.random()*512,305+Math.random()*60,40+Math.random()*60,2);for(let a=0;a<1500;a++)e.fillStyle=`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.03)`,e.fillRect(Math.random()*512,Math.random()*370,6,2);let o=new ge(t);return o.colorSpace=oe,o}function Sx(s,t){let e=document.createElement("canvas");e.width=256,e.height=96;let n=e.getContext("2d");n.fillStyle="#c9a24a",n.fillRect(0,0,256,96),n.strokeStyle="#7a5a1c",n.lineWidth=6,n.strokeRect(3,3,250,90),n.fillStyle="#1b1206",n.textAlign="center",n.font="bold 30px Georgia, serif",n.fillText(s,128,42),n.font="22px Arial, sans-serif",n.fillText(t,128,76);let i=new ge(e);return i.colorSpace=oe,i}function pu(s,t,e={}){let n=t==="high",{x:i,z:r,floor:o,ceil:a}=De,l=a-o,c=vx(),h=Mx(),u=new Ot({color:4859410,roughness:.45,metalness:.05}),d=new Ot({color:3020554,roughness:.4,metalness:.05}),f=new Ot({color:11569724,metalness:.85,roughness:.35}),g=new Ot({color:5904914,roughness:.55,metalness:.05}),x=(ct,q,Z,ht,vt,Ht=s)=>{let ce=new Rt(ct,q);return ce.position.set(Z,ht,vt),ce.castShadow=n,ce.receiveShadow=!0,Ht.add(ce),ce},m={at:1.9,w:1,h:2.15},p=null,E=Ln.degToRad(72),y={open:!0,angle:E},v=[[0,-r,0,2*i,null],[0,r,Math.PI,2*i,null],[-i,0,Math.PI/2,2*r,null],[i,0,-Math.PI/2,2*r,m]];for(let[ct,q,Z,ht,vt]of v){let Ht=new ue;Ht.position.set(ct,o,q),Ht.rotation.y=Z;let ce=vt?[[-ht/2,vt.at-vt.w/2],[vt.at+vt.w/2,ht/2]]:[[-ht/2,ht/2]];for(let[se,be]of ce){let Ue=be-se,Qe=(se+be)/2,Ne=h.clone();Ne.needsUpdate=!0,Ne.repeat.set(Ue/.6,(l-Fi)/.6),Ne.offset.set(se/.6,0);let Tn=new Rt(new pe(Ue,l-Fi),new Ot({map:Ne,roughness:.9}));Tn.position.set(Qe,Fi+(l-Fi)/2,0),Tn.receiveShadow=!0,Ht.add(Tn);let Jn=c.clone();Jn.needsUpdate=!0,Jn.repeat.set(Ue/1.2,1);let tn=new Rt(new Gt(Ue,Fi,.03),new Ot({map:Jn,roughness:.5}));tn.position.set(Qe,Fi/2,.015),tn.receiveShadow=!0,Ht.add(tn);for(let[Ps,Is,gi]of[[.06,.12,.045],[Fi,.05,.06]]){let b=new Rt(new Gt(Ue,Is,gi),u);b.position.set(Qe,Ps,gi/2),Ht.add(b)}}let ie=new Rt(new Gt(ht,.18,.08),u);if(ie.position.set(0,l-.09,.04),Ht.add(ie),vt){let se=l-vt.h,be=h.clone();be.needsUpdate=!0,be.repeat.set(vt.w/.6,se/.6);let Ue=new Rt(new pe(vt.w,se),new Ot({map:be,roughness:.9}));Ue.position.set(vt.at,vt.h+se/2,0),Ht.add(Ue);let Qe=[[vt.at-vt.w/2-.04,vt.h/2,.08,vt.h+.08],[vt.at+vt.w/2+.04,vt.h/2,.08,vt.h+.08],[vt.at,vt.h+.04,vt.w+.16,.08]];for(let[B,$,j,H]of Qe)x(new Gt(j,H,.1),d,B,$,.03,Ht);for(let B of[-1,1])x(new Gt(.02,vt.h,.2),d,vt.at+B*vt.w/2,vt.h/2,-.1,Ht);x(new Gt(vt.w,.02,.2),d,vt.at,vt.h,-.1,Ht);let Ne=new ue;Ne.position.set(vt.at+vt.w/2-.02,0,.02),Ne.rotation.y=Ln.degToRad(72),Ht.add(Ne),p=Ne;let Tn=new Ot({color:5910294,roughness:.45});x(new Gt(vt.w-.04,vt.h-.02,.045),Tn,-(vt.w-.04)/2,vt.h/2,0,Ne);for(let B of[.55,1.5])for(let $ of[-1,1])x(new Gt(vt.w-.26,.7,.012),d,-(vt.w-.04)/2,B,$*.026,Ne);let Jn=x(new je(.03,16,12),f,-(vt.w-.04)+.08,1,.05,Ne);Jn.castShadow=!1;let tn=new ue;tn.position.set(vt.at,0,-1.2),Ht.add(tn);let Ps=new Ot({color:7035461,roughness:.9,side:Le});x(new Gt(2.4,2.6,2.2),Ps,0,1.3,-.05,tn);let Is=x(new pe(2.4,2.2),new Ot({color:3877404,roughness:.8}),0,.005,-.05,tn);Is.rotation.x=-Math.PI/2;let gi=new fi(16767136,n?2.2:1.4,4,1.6);gi.position.set(0,2.2,-.4),tn.add(gi);let b=x(new je(.05,12,8),new Re({color:16773328}),0,2.45,-.4,tn);b.castShadow=!1}s.add(Ht)}let k=new Ot({color:1905420,roughness:.9}),P=new Rt(new pe(2*i,2*r),k);P.rotation.x=Math.PI/2,P.position.y=a,P.layers.set(2),s.add(P);let L=new Ot({color:3809039,roughness:.6});for(let ct=-i+1.25;ct<i-.1;ct+=1.25){let q=new Rt(new Gt(.16,.18,2*r),L);q.position.set(ct,a-.09,0),q.layers.set(2),s.add(q)}let D=new Ot({color:16769712,emissive:16760944,emissiveIntensity:1.2,roughness:.6}),w=o+2.35,_=[[-2.6,-r,0],[2.6,-r,0],[-2.8,r,Math.PI],[2.8,r,Math.PI],[-i,0,Math.PI/2],[i,-1.5,-Math.PI/2]];s.add(new yo(16770760,n?.22:.4));for(let[ct,q,Z]of _){let ht=new ue;ht.position.set(ct,w,q),ht.rotation.y=Z;let vt=new Rt(new me(.05,.05,.02,20),f);vt.rotation.x=Math.PI/2,vt.position.z=.01,ht.add(vt);let Ht=new Rt(new me(.008,.008,.14,8),f);Ht.rotation.x=Math.PI/2,Ht.position.z=.08,ht.add(Ht);let ce=new Rt(new me(.05,.085,.13,24,1,!0),D);if(ce.position.set(0,.05,.16),ht.add(ce),s.add(ht),n){let ie=new fi(16758886,5,4.5,1.5);ie.position.set(ct+Math.sin(Z)*.3,w+.05,q+Math.cos(Z)*.3),s.add(ie)}}let S={x:-2.6,y:o+1.5,w:1.6,h:1.1},z=x(new pe(S.w,S.h),new Ot({map:hu(),roughness:.85}),S.x,S.y,-r+.045);z.castShadow=!1;for(let[ct,q,Z,ht]of[[S.x,S.y+S.h/2+.03,S.w+.12,.06],[S.x,S.y-S.h/2-.03,S.w+.12,.06],[S.x-S.w/2-.03,S.y,.06,S.h],[S.x+S.w/2+.03,S.y,.06,S.h]])x(new Gt(Z,ht,.06),d,ct,q,-r+.04);x(new Gt(S.w,S.h,.02),d,S.x,S.y,-r+.02);let F={x:2.6,base:o},V=.21,Q=Ke.length*V+.2;x(new Gt(Q,1.85,.03),d,F.x,o+.15+.925,-r+.05),x(new Gt(Q+.05,.06,.16),u,F.x,o+.12,-r+.11),x(new Gt(Q+.05,.05,.12),u,F.x,o+1.35,-r+.1);let W=[];Ke.forEach((ct,q)=>{let Z=F.x+(q-(Ke.length-1)/2)*V,ht=new ue;ht.position.set(Z,o+.16+ct.len,-r+.12),ht.rotation.x=Math.PI,ht.add(Io(ct,n)),s.add(ht);let vt=new Rt(new pe(.18,.068),new Ot({map:Sx(String(q+1),ct.category),roughness:.4,metalness:.3}));vt.position.set(Z,o+.3,-r+.07),s.add(vt),W.push({group:ht,baseZ:-r+.12,spec:ct})});let ot=new Rt(new Ms(.035,.06,32),new Re({color:16765503,transparent:!0,opacity:.9}));ot.rotation.x=-Math.PI/2,s.add(ot);let K=ct=>{for(let q of W){let Z=q.spec.id===ct;q.group.position.z=q.baseZ+(Z?.12:0),Z&&ot.position.set(q.group.position.x,o+.005,q.group.position.z)}},pt={x:-.78,y:o+1.42,w:1.5};x(new Gt(pt.w,.04,.26),d,pt.x,pt.y,-r+.13);for(let ct of[-1,1]){let q=x(new Gt(.03,.16,.2),d,pt.x+ct*(pt.w/2-.03),pt.y-.1,-r+.11);q.castShadow=!1}let Tt=(()=>{let ct=document.createElement("canvas");ct.width=1024,ct.height=128;let q=ct.getContext("2d");q.fillStyle="#123524",q.fillRect(0,0,1024,128),q.strokeStyle="#c9a24a",q.lineWidth=6,q.strokeRect(8,8,1008,112),q.fillStyle="#f2d48a",q.font="bold 60px Georgia, serif",q.textAlign="center",q.textBaseline="middle",q.fillText("NAJLEP\u0160\xCD HR\xC1\u010CI",512,68);let Z=new ge(ct);return Z.colorSpace=oe,Z})();x(new pe(.9,.11),new Ot({map:Tt,roughness:.6}),pt.x,pt.y+.62,-r+.035).castShadow=!1;let yt=[new Ot({color:15777856,metalness:.55,roughness:.28,emissive:3811328,emissiveIntensity:.6}),new Ot({color:14672872,metalness:.55,roughness:.25,emissive:2763824,emissiveIntensity:.6}),new Ot({color:13140042,metalness:.55,roughness:.3,emissive:3020294,emissiveIntensity:.6})],Bt=ct=>[[0,0],[.07,0],[.07,.025],[.035,.035],[.016,.05],[.014,.12],[.022,.135],[.06,.16],[.085,.22],[.095,.29],[.09,.3],[.08,.235],[.055,.17],[0,.155]].map(([q,Z])=>new mt(q*ct,Z*ct)),St=[];[[1,-.5,.92],[0,0,1.12],[2,.5,.82]].forEach(([ct,q,Z])=>{let ht=pt.x+q*(pt.w*.62),vt=-r+.14,Ht=new ue;Ht.position.set(ht,pt.y+.02,vt);let ce=new Rt(new ho(Bt(Z),40),yt[ct]);ce.castShadow=!0,Ht.add(ce);for(let Qe of[-1,1]){let Ne=new Rt(new di(.035*Z,.006*Z,8,20,Math.PI),yt[ct]);Ne.position.set(Qe*.088*Z,.24*Z,0),Ne.rotation.z=Qe>0?-Math.PI/2:Math.PI/2,Ht.add(Ne)}let ie=new Rt(new Gt(.17*Z,.05,.17*Z),d);ie.position.y=-0,Ht.position.y+=.05,ie.position.y=-.025,Ht.add(ie),s.add(Ht);let se=document.createElement("canvas");se.width=512,se.height=160;let be=new ge(se);be.colorSpace=oe,be.anisotropy=8;let Ue=new Rt(new pe(.4,.125),new Ot({map:be,roughness:.45,metalness:.2}));Ue.position.set(ht,pt.y-.11,-r+.03),Ue.castShadow=!1,s.add(Ue),St[ct]={c:se,tex:be}});let X=new fi(16769712,n?1.6:1.2,2.2,1.6);X.position.set(pt.x,pt.y+.75,-r+.55),s.add(X);let st={x:.72,y:o+1.68,w:.95,h:1},gt=document.createElement("canvas");gt.width=760,gt.height=800;let dt=new ge(gt);dt.colorSpace=oe,dt.anisotropy=8,x(new pe(st.w,st.h),new Ot({map:dt,roughness:.85}),st.x,st.y,-r+.045).castShadow=!1,x(new Gt(st.w+.08,st.h+.08,.03),d,st.x,st.y,-r+.02);let Nt=ct=>{let q=Math.max(0,Math.round(ct||0));return`${Math.floor(q/60)}:${String(q%60).padStart(2,"0")}`},kt=(ct,q,Z)=>{let ht=String(q||"");for(;ht.length>1&&ct.measureText(ht).width>Z;)ht=ht.slice(0,-1);return ht===String(q||"")?ht:ht.slice(0,-1)+"\u2026"},A=ct=>{let q=ct||[],Z=["#e8b830","#c9cdd3","#b8733a"];for(let Ht=0;Ht<3;Ht++){let{c:ce,tex:ie}=St[Ht],se=ce.getContext("2d"),be=q[Ht];se.fillStyle="#20150c",se.fillRect(0,0,512,160),se.strokeStyle=Z[Ht],se.lineWidth=8,se.strokeRect(6,6,500,148),se.textAlign="center",se.fillStyle=Z[Ht],se.font="bold 54px Georgia, serif",se.fillText(be?kt(se,`${Ht+1}. ${be.user.name}`,480):`${Ht+1}. miesto`,256,66),se.fillStyle="#f4ecd8",se.font="bold 42px Arial, Helvetica, sans-serif",se.fillText(be?`${be.points} b.  za ${Nt(be.seconds)}`:"vo\u013En\xE9",256,128),ie.needsUpdate=!0}let ht=gt.getContext("2d"),vt=gt.width;ht.fillStyle="#a5754a",ht.fillRect(0,0,vt,gt.height),ht.fillStyle="#fbf7ec",ht.fillRect(30,30,vt-60,gt.height-60),ht.fillStyle="#c0392b",ht.beginPath(),ht.arc(vt/2,52,12,0,Math.PI*2),ht.fill(),ht.fillStyle="#123524",ht.textAlign="center",ht.font="bold 46px Georgia, serif",ht.fillText("Rebr\xED\u010Dek 4. a\u017E 10.",vt/2,120),ht.fillStyle="#c9a24a",ht.fillRect(60,142,vt-120,4);for(let Ht=3;Ht<10;Ht++){let ce=q[Ht],ie=210+(Ht-3)*80;ht.textAlign="left",ht.fillStyle="#123524",ht.font="bold 36px Arial, Helvetica, sans-serif",ht.fillText(`${Ht+1}.`,64,ie),ht.fillStyle=ce?"#222":"#999",ht.font="34px Arial, Helvetica, sans-serif",ht.fillText(ce?kt(ht,ce.user.name,330):"...",130,ie),ht.textAlign="right",ht.fillText(ce?`${ce.points} b.  ${Nt(ce.seconds)}`:"",vt-64,ie),ht.fillStyle="rgba(201,162,74,0.35)",ht.fillRect(64,ie+22,vt-128,2)}dt.needsUpdate=!0};A([]);let J={y:o+1.62,w:1.5,h:.84},U=document.createElement("canvas");U.width=1024,U.height=574;let et=new ge(U);et.colorSpace=oe,et.anisotropy=8,x(new Gt(.05,J.h+.12,J.w+.12),d,-i+.03,J.y,0);let R=x(new pe(J.w,J.h),new Ot({map:et,roughness:.7,emissive:16777215,emissiveMap:et,emissiveIntensity:.12}),-i+.064,J.y,0);R.rotation.y=Math.PI/2,R.castShadow=!1;let bt=(ct,q)=>{let Z=U.getContext("2d"),ht=U.width,vt=U.height;Z.fillStyle="#123524",Z.fillRect(0,0,ht,vt),Z.strokeStyle="#c9a24a",Z.lineWidth=8,Z.strokeRect(14,14,ht-28,vt-28),Z.fillStyle="#f2d48a",Z.textAlign="center",Z.font="bold 62px Georgia, serif",Z.fillText("MY SNOOKER",ht/2,92),Z.font="34px Georgia, serif",Z.fillStyle="#e8e2cf",Z.fillText(q&&q.mode||"Tr\xE9ning",ht/2,140);let Ht=q&&q.match,ce=q&&q.rows?q.rows:Ht?[[Ht.names[0]+(Ht.turn===0?"  \u25CF":""),Ht.scores[0]],[Ht.names[1]+(Ht.turn===1?"  \u25CF":""),Ht.scores[1]],["S\xE9ria",Ht.brk],["Hr\xE1 sa na",Ht.on],["Zost\xE1va na stole",Ht.left]]:[["\xDAdery",ct.shots],["Spadnut\xE9 gule",ct.potted],["Body",ct.points],["S\xE9ria",ct.run],["Najlep\u0161ia s\xE9ria",ct.best]];Z.font="40px Arial, Helvetica, sans-serif",ce.forEach(([ie,se],be)=>{let Ue=210+be*62;Z.textAlign="left",Z.fillStyle="#e8e2cf",Z.fillText(ie,90,Ue),Z.textAlign="right",Z.fillStyle="#ffffff",Z.font="bold 44px Arial, Helvetica, sans-serif",Z.fillText(String(se),ht-90,Ue),Z.font="40px Arial, Helvetica, sans-serif",Z.fillStyle="rgba(201,162,74,0.35)",Z.fillRect(90,Ue+16,ht-180,2)}),q&&(Z.textAlign="center",Z.font="30px Arial, Helvetica, sans-serif",Z.fillStyle="#f2d48a",Z.fillText(`${q.cue}   |   Krieda: ${q.chalk>0?q.chalk+" \xFAdery":"\u017Eiadna (F3)"}`,ht/2,vt-40)),et.needsUpdate=!0};bt({shots:0,potted:0,points:0,run:0,best:0},null),x(new Gt(.45,.8,1.7),d,-i+.25,o+.4,0),x(new Gt(.47,.03,1.74),u,-i+.25,o+.815,0);for(let ct of[-.42,.42])x(new Gt(.012,.5,.75),u,-i+.48,o+.42,ct),x(new je(.015,10,8),f,-i+.49,o+.55,ct*.2);let nt=-i+1.1,At=r-1.1;x(new me(.32,.32,.04,32),d,nt,o+1.05,At);let xt=o+1.07,Vt=new ue;Vt.position.set(nt+.05,xt,At-.08),Vt.rotation.y=-Math.PI/4,s.add(Vt),x(new Gt(.078,.009,.158),new Ot({color:1381914,roughness:.35,metalness:.6}),0,.0045,0,Vt);let Lt=document.createElement("canvas");Lt.width=360,Lt.height=740;let T=new ge(Lt);T.colorSpace=oe,T.anisotropy=8;let M=x(new pe(.07,.146),new Re({map:T}),0,.0092,0,Vt);M.rotation.x=-Math.PI/2,M.castShadow=!1;let G=ct=>{let q=Lt.getContext("2d"),Z=360,ht=q.createLinearGradient(0,0,0,740);ht.addColorStop(0,"#1d2b45"),ht.addColorStop(1,"#0c1220"),q.fillStyle=ht,q.fillRect(0,0,Z,740),q.fillStyle="#e8ecf3",q.font="22px Arial, sans-serif",q.textAlign="left",q.fillText("11:30",24,40),q.textAlign="right",q.fillText("5G  86 %",Z-24,40),q.textAlign="center",q.fillStyle="#FACC15",q.beginPath(),q.arc(Z/2,170,62,0,Math.PI*2),q.fill(),q.fillStyle="#111214",q.font="bold 64px Arial, sans-serif",q.fillText(ct&&ct.name?ct.name.trim().charAt(0).toUpperCase():"?",Z/2,193),q.fillStyle="#ffffff",q.font="bold 40px Arial, sans-serif",q.fillText("M\xF4j \xFA\u010Det",Z/2,290),q.fillStyle="#b9c2d3",q.font="28px Arial, sans-serif",q.fillText(ct?String(ct.name).slice(0,20):"Neprihl\xE1sen\xFD",Z/2,334),["Profil","Prihl\xE1senie a heslo","S\xFAhlasy","Nastavenia \xFA\u010Dtu"].forEach((Ht,ce)=>{let ie=400+ce*66;q.fillStyle="#ffffff14",q.fillRect(28,ie,Z-56,54),q.fillStyle="#e8ecf3",q.textAlign="left",q.font="26px Arial, sans-serif",q.fillText(Ht,48,ie+36),q.textAlign="right",q.fillStyle="#FACC15",q.fillText("\u203A",Z-44,ie+37)}),q.textAlign="center",q.fillStyle="#FACC15",q.font="bold 26px Arial, sans-serif",q.fillText("\u0164ukni a otvor",Z/2,700),T.needsUpdate=!0};G(e.user||null);let rt=new Ot({color:15267071,transparent:!0,opacity:.22,roughness:.05,metalness:.1,side:Ze,depthWrite:!1}),ut=new Ot({color:10474751,transparent:!0,opacity:.45,roughness:.05,metalness:.05,depthWrite:!1});for(let[ct,q]of[[.2,.05],[.11,.17]]){let Z=x(new me(.036,.03,.12,28,1,!0),rt,nt+ct,xt+.06,At+q);Z.castShadow=!1;let ht=x(new me(.03,.03,.008,28),rt,nt+ct,xt+.004,At+q);ht.castShadow=!1;let vt=x(new me(.033,.029,.08,28),ut,nt+ct,xt+.048,At+q);vt.castShadow=!1,vt.renderOrder=1,Z.renderOrder=2}x(new me(.03,.03,1.03,12),f,nt,o+.53,At),x(new me(.22,.25,.03,24),f,nt,o+.015,At);for(let ct of[.6,2.3]){let q=nt+Math.cos(ct)*.55,Z=At-Math.sin(ct)*.55;x(new me(.18,.18,.08,24),g,q,o+.76,Z),x(new me(.022,.022,.72,10),f,q,o+.36,Z),x(new di(.15,.01,8,24),f,q,o+.3,Z).rotation.x=Math.PI/2,x(new me(.17,.2,.02,20),f,q,o+.01,Z)}let it=(ct,q,Z)=>{let ht=new ue;ht.position.set(ct,o,q),ht.rotation.y=Z,x(new Gt(.8,.42,.8),g,0,.21,0,ht),x(new Gt(.8,.5,.18),g,0,.66,-.31,ht);for(let vt of[-1,1])x(new Gt(.16,.24,.8),g,vt*.4,.54,0,ht);x(new Gt(.56,.08,.6),new Ot({color:7219740,roughness:.6}),0,.46,.04,ht),s.add(ht)};it(-1,r-.7,Math.PI),it(1,r-.7,Math.PI);let Mt={x:0,z:r-1.45,top:o+.45};x(new Gt(1.2,.04,.62),d,Mt.x,Mt.top-.02,Mt.z),x(new Gt(1.1,.06,.52),u,Mt.x,Mt.top-.07,Mt.z);for(let ct of[-1,1])for(let q of[-1,1])x(new Gt(.05,Mt.top-o-.04,.05),d,Mt.x+ct*.54,o+(Mt.top-o-.04)/2,Mt.z+q*.25);let I=du(e.news,e.site),N={x:Mt.x+.12,z:Mt.z+.02,w:.62,h:.44},lt=new Rt(new pe(N.w,N.h),new Ot({map:I.texture,roughness:.92}));lt.rotation.order="YXZ",lt.rotation.set(-Math.PI/2,.12,0),lt.position.set(N.x,Mt.top+.002,N.z),lt.receiveShadow=!0,s.add(lt);let Y=fu(e.rss),ft={x:Mt.x-.36,z:Mt.z-.02,w:.3,h:.41},_t=new Rt(new pe(ft.w,ft.h),new Ot({map:Y.texture,roughness:.35,metalness:.05}));_t.rotation.order="YXZ",_t.rotation.set(-Math.PI/2,-.18,0),_t.position.set(ft.x,Mt.top+.003,ft.z),_t.receiveShadow=!0,s.add(_t);for(let[ct,q]of[[-2.8,0],[2.8,1]]){let Z=x(new pe(.86,.62),new Ot({map:bx(q),roughness:.7}),ct,o+1.75,r-.046);Z.rotation.y=Math.PI,Z.castShadow=!1,x(new Gt(1,.76,.04),new Ot({color:9071146,metalness:.6,roughness:.4}),ct,o+1.75,r-.02)}let Ct=new ue;Ct.position.set(i-.02,o+2,.35),Ct.rotation.y=-Math.PI/2,s.add(Ct);{let q=document.createElement("canvas");q.width=q.height=512;let Z=q.getContext("2d");Z.fillStyle="#f4eedc",Z.fillRect(0,0,512,512),Z.translate(256,256),Z.strokeStyle="#2a2218";for(let ie=0;ie<60;ie++){let se=ie/60*Math.PI*2,be=ie%5===0;Z.lineWidth=be?9:3,Z.beginPath(),Z.moveTo(Math.sin(se)*(be?200:214),-Math.cos(se)*(be?200:214)),Z.lineTo(Math.sin(se)*236,-Math.cos(se)*236),Z.stroke()}Z.fillStyle="#2a2218",Z.font="bold 56px Georgia, serif",Z.textAlign="center",Z.textBaseline="middle";for(let ie=1;ie<=12;ie++){let se=ie/12*Math.PI*2;Z.fillText(String(ie),Math.sin(se)*160,-Math.cos(se)*160+3)}Z.font="22px Georgia, serif",Z.fillText("MY SNOOKER",0,78);let ht=new ge(q);ht.colorSpace=oe,ht.anisotropy=8;let vt=new Rt(new In(.2,64),new Ot({map:ht,roughness:.6}));vt.position.z=.012,Ct.add(vt);let Ht=new Rt(new di(.2+.012,.018,12,64),d);Ht.position.z=.014,Ct.add(Ht);let ce=new Rt(new me(.2+.02,.2+.02,.02,48),d);ce.rotation.x=Math.PI/2,Ct.add(ce)}let Pt=new Ot({color:1709328,roughness:.5,metalness:.3}),Kt=(ct,q,Z,ht)=>{let vt=new ue;vt.position.z=Z;let Ht=new Rt(new Gt(q,ct,.004),ht);return Ht.position.y=ct/2-ct*.15,vt.add(Ht),Ct.add(vt),vt},$t=Kt(.11,.012,.018,Pt),Zt=Kt(.16,.008,.022,Pt),O=Kt(.17,.003,.026,new Ot({color:11735583,roughness:.5})),wt=new Rt(new me(.009,.009,.012,16),f);wt.rotation.x=Math.PI/2,wt.position.z=.028,Ct.add(wt);let tt=11*3600+30*60,at=ct=>{let q=tt+ct,Z=q%60,ht=q/60%60,vt=q/3600%12;O.rotation.z=-(Math.floor(Z)/60)*Math.PI*2,Zt.rotation.z=-(ht/60)*Math.PI*2,$t.rotation.z=-(vt/12)*Math.PI*2};at(0);let It=i-.5,Dt=-r+.5;x(new me(.2,.15,.4,20),new Ot({color:8010530,roughness:.7}),It,o+.2,Dt);let Jt=new Ot({color:3107631,roughness:.7});for(let ct=0;ct<14;ct++){let q=ct/14*Math.PI*2,Z=.08+ct%3*.06,ht=x(new je(.11+ct%2*.04,10,8),Jt,It+Math.cos(q)*Z,o+.55+ct%4*.18,Dt+Math.sin(q)*Z);ht.scale.set(1,1.6,.5),ht.rotation.y=q}return{board:{pos:new C(S.x,S.y,-r+1.62),look:new C(S.x,S.y,-r)},rack:{pos:new C(F.x,o+1.15,-r+3.3),look:new C(F.x,o+.6,-r)},score:{pos:new C(-i+1.55,J.y,0),look:new C(-i,J.y,0)},bar:{pos:new C(nt-.4,o+1.5,At+.38),look:new C(nt+.62,o+.72,At-.6)},phone:M,setPhone:G,trophies:{pos:new C(-.17,o+1.62,-r+2.05),look:new C(-.17,o+1.6,-r)},chair:{pos:new C(1,o+1.12,r-.8),look:new C(-.2,o+.62,.3)},news:{pos:new C(N.x+.11,Mt.top+.6,N.z+.27),look:new C(N.x+.1,Mt.top,N.z-.01)},newsItems:I.items,magazine:{pos:new C(ft.x+.02,Mt.top+.5,ft.z+.2),look:new C(ft.x,Mt.top,ft.z-.01)},rssItems:Y.items,selectCue:K,updateScore:bt,setClock:at,setTrophies:A,trophies:{pos:new C(-.05,o+1.6,-r+2.3),look:new C(-.05,o+1.62,-r)},toggleDoor(){return y.open=!y.open,y.open},update(ct){if(!p)return!1;let q=y.open?E:0,Z=y.angle,ht=ct*1.4;return y.angle=Z+Math.max(-ht,Math.min(ht,q-Z)),p.rotation.y=y.angle,Z>0&&y.angle===0}}}function dc(s,t=.15){return s.x=Math.max(-De.x+t,Math.min(De.x-t,s.x)),s.z=Math.max(-De.z+t,Math.min(De.z-t,s.z)),s.y=Math.max(De.floor+.1,Math.min(De.ceil-.25,s.y)),s}var fc=.062,Ex=.052,an=.05,pc=.12,wx=.037;function Tx(s){let e=Math.round(2048*(1.778+2*an)/(3.569+2*an)),n=document.createElement("canvas");n.width=2048,n.height=e;let i=n.getContext("2d");i.fillStyle="#1d6b34",i.fillRect(0,0,2048,e);let r=i.getImageData(0,0,2048,e);for(let u=0;u<r.data.length;u+=4){let d=(Math.random()-.5)*10;r.data[u]+=d,r.data[u+1]+=d*1.4,r.data[u+2]+=d}i.putImageData(r,0,0);let o=i.createRadialGradient(2048/2,e/2,e*.1,2048/2,e/2,2048*.6);o.addColorStop(0,"rgba(255,255,255,0.06)"),o.addColorStop(1,"rgba(0,0,0,0.18)"),i.fillStyle=o,i.fillRect(0,0,2048,e);let a=2048/(3.569+2*an),l=u=>(u+3.569/2+an)*a,c=u=>(u+1.778/2+an)*a;i.strokeStyle="rgba(255,255,255,0.75)",i.lineWidth=Math.max(2,a*.003),i.beginPath(),i.moveTo(l(ze),c(-1.778/2)),i.lineTo(l(ze),c(1.778/2)),i.stroke(),i.beginPath(),i.arc(l(ze),c(0),pi*a,Math.PI/2,3*Math.PI/2),i.stroke(),i.fillStyle="rgba(255,255,255,0.8)";for(let u of Object.keys(pn))i.beginPath(),i.arc(l(pn[u].x),c(pn[u].z),a*.005,0,Math.PI*2),i.fill();let h=new ge(n);return h.colorSpace=oe,h.anisotropy=s,h}function Ax(){let s=document.createElement("canvas");s.width=512,s.height=64;let t=s.getContext("2d");t.fillStyle="#5a2e14",t.fillRect(0,0,512,64);for(let n=0;n<70;n++){t.strokeStyle=`rgba(${30+Math.random()*40},${12+Math.random()*15},4,${.15+Math.random()*.25})`,t.lineWidth=1+Math.random()*2,t.beginPath();let i=Math.random()*64;t.moveTo(0,i);for(let r=0;r<=512;r+=32)t.lineTo(r,i+Math.sin(r/60+n)*3);t.stroke()}let e=new ge(s);return e.colorSpace=oe,e.wrapS=e.wrapT=qn,e.repeat.set(6,1),e}function Rx(){let t=document.createElement("canvas");t.width=t.height=1024;let e=t.getContext("2d"),n=25,i=1024/n,r=7,o=()=>(r=r*16807%2147483647)/2147483647;for(let l=0;l<n;l++){let c=-o()*1024*.4;for(;c<1024;){let h=1024*(.3+o()*.25),u=70+o()*40;e.fillStyle=`rgb(${u+40},${u*.62+12},${u*.36})`,e.fillRect(c,l*i,h,i);for(let d=0;d<9;d++){e.strokeStyle=`rgba(${40+o()*30},${20+o()*12},6,${.12+o()*.18})`,e.lineWidth=.6+o()*1.6,e.beginPath();let f=l*i+o()*i;e.moveTo(c,f);for(let g=0;g<=8;g++)e.lineTo(c+h*g/8,f+Math.sin(g*.9+d)*i*.12);e.stroke()}e.fillStyle="rgba(15,8,3,0.85)",e.fillRect(c+h-1.5,l*i,1.5,i),c+=h}e.fillStyle="rgba(15,8,3,0.9)",e.fillRect(0,l*i,1024,1.5)}let a=new ge(t);return a.colorSpace=oe,a.wrapS=a.wrapT=qn,a}function mu(s){let t=new ue,e=s.capabilities.getMaxAnisotropy(),n=new Rt(new pe(3.569+2*an,1.778+2*an),new Ot({map:Tx(e),roughness:.92,metalness:0}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n.name="cloth",t.add(n);let i=3.569/2,r=1.778/2,o=wx+.012,a=i+an+pc,l=r+an+pc,c=new Ot({color:1531951,roughness:.88,side:Ze}),h=(A,J,U,et)=>({x:A+U*an,z:J+et*an}),u=[];for(let A of[-1,1])for(let J of[-1,1]){let U={x:J*(i-fc),z:A*r},et={x:J*Ex,z:A*r};u.push({long:!0,a:U,b:et,ab:h(U.x,U.z,J*1,A*1),bb:h(et.x,et.z,-J*.18,A*1)})}for(let A of[-1,1]){let J={x:A*i,z:-r+fc},U={x:A*i,z:r-fc};u.push({long:!1,a:J,b:U,ab:h(J.x,J.z,A*1,-1),bb:h(U.x,U.z,A*1,1)})}let d=.016,f=[[.012,0],[.006,.016],[.001,.029],[0,.034],[.003,.0395],[.01,.0435],[.024,.0465],[.045,.048],[.075,.048]];for(let A of u){let J=(I,N,lt)=>{let Y=Math.hypot(N.x-I.x,N.z-I.z)||1;return{x:I.x+(N.x-I.x)/Y*lt,z:I.z+(N.z-I.z)/Y*lt}},U=J(A.a,A.ab,d),et=J(A.a,A.b,d),R=J(A.b,A.a,d),bt=J(A.b,A.bb,d),nt=[],At=(I,N,lt,Y)=>{for(let ft=1;ft<=Y;ft++){let _t=ft/Y,Ct=1-_t;nt.push({x:Ct*Ct*I.x+2*Ct*_t*N.x+_t*_t*lt.x,z:Ct*Ct*I.z+2*Ct*_t*N.z+_t*_t*lt.z})}};nt.push({...A.ab},{...J(A.ab,U,Math.hypot(U.x-A.ab.x,U.z-A.ab.z)*.5)},{...U}),At(U,A.a,et,10);let xt=24;for(let I=1;I<xt;I++)nt.push({x:et.x+(R.x-et.x)*I/xt,z:et.z+(R.z-et.z)*I/xt});nt.push({...R}),At(R,A.b,bt,10),nt.push({...J(bt,A.bb,Math.hypot(A.bb.x-bt.x,A.bb.z-bt.z)*.5)},{...A.bb});let Vt=A.b.x-A.a.x,Lt=A.b.z-A.a.z,T={x:(A.a.x+A.b.x)/2,z:(A.a.z+A.b.z)/2},M=-Lt*T.x+Vt*T.z>0?1:-1,G=[];for(let I=0;I<nt.length;I++){let N=nt[Math.max(0,I-1)],lt=nt[Math.min(nt.length-1,I+1)],Y=lt.x-N.x,ft=lt.z-N.z,_t=Math.hypot(Y,ft)||1;Y/=_t,ft/=_t;let Ct=-ft*M,Pt=Y*M;for(let[Kt,$t]of f)G.push(nt[I].x+Ct*Kt,$t,nt[I].z+Pt*Kt)}let rt=f.length,ut=[];for(let I=0;I<nt.length-1;I++)for(let N=0;N<rt-1;N++){let lt=I*rt+N,Y=(I+1)*rt+N;M>0?ut.push(lt,Y,lt+1,Y,Y+1,lt+1):ut.push(lt,lt+1,Y,Y,lt+1,Y+1)}let it=new Ce;it.setAttribute("position",new ae(G,3)),it.setIndex(ut),it.computeVertexNormals();let Mt=new Rt(it,c);Mt.castShadow=!0,Mt.receiveShadow=!0,t.add(Mt)}let g=zi.map(A=>({x:A.x,z:A.z,r:A.corner?.088:.078,corner:A.corner})),x=i+an,m=r+an,p=[],E=(A,J,U,et)=>{let R=[];for(let bt=0;bt<=et;bt++){let nt=J+(U-J)*bt/et;R.push({x:A.x+Math.cos(nt)*A.r,z:A.z+Math.sin(nt)*A.r})}return R},y=[],v=A=>{for(;A<0;)A+=Math.PI*2;return A},k=g.find(A=>A.corner&&A.x>0&&A.z>0),P=g.find(A=>A.corner&&A.x<0&&A.z>0),L=g.find(A=>A.corner&&A.x<0&&A.z<0),D=g.find(A=>A.corner&&A.x>0&&A.z<0),w=g.find(A=>!A.corner&&A.z>0),_=g.find(A=>!A.corner&&A.z<0),S=(A,J,U)=>{let et=U*m-A.z,R=A.x-J*Math.sqrt(Math.max(0,A.r*A.r-et*et)),bt=J*x-A.x,nt=A.z-U*Math.sqrt(Math.max(0,A.r*A.r-bt*bt)),At=Math.atan2(U*m-A.z,R-A.x),xt=Math.atan2(nt-A.z,J*x-A.x);return{aZ:At,aX:xt}},z=(A,J)=>{let U=J*m-A.z,et=Math.sqrt(Math.max(0,A.r*A.r-U*U));return{aRight:Math.atan2(U,et),aLeft:Math.atan2(U,-et)}},F=(A,J,U,et)=>{let R=J,bt=U;if(et)for(;bt<R;)bt+=Math.PI*2;else for(;bt>R;)bt-=Math.PI*2;let nt=E(A,R,bt,24);p.push(...nt),y.push(nt)};{let A=[];for(let[J,U,et]of[[k,1,1],[P,-1,1],[L,-1,-1],[D,1,-1]]){let R=S(J,U,et),bt=U*et>0?R.aX:R.aZ,nt=U*et>0?R.aZ:R.aX;A.push({c:J,a0:bt,a1:nt})}for(let[J,U]of[[w,1],[_,-1]]){let et=z(J,U);A.push({c:J,a0:U>0?et.aRight:et.aLeft,a1:U>0?et.aLeft:et.aRight})}A.sort((J,U)=>v(Math.atan2(J.c.z,J.c.x))-v(Math.atan2(U.c.z,U.c.x)));for(let J of A)F(J.c,J.a0,J.a1,!0)}let V=.07,Q=new vs;Q.moveTo(-a+V,-l),Q.lineTo(a-V,-l),Q.quadraticCurveTo(a,-l,a,-l+V),Q.lineTo(a,l-V),Q.quadraticCurveTo(a,l,a-V,l),Q.lineTo(-a+V,l),Q.quadraticCurveTo(-a,l,-a,l-V),Q.lineTo(-a,-l+V),Q.quadraticCurveTo(-a,-l,-a+V,-l);let W=new ys;p.forEach((A,J)=>J?W.lineTo(A.x,A.z):W.moveTo(A.x,A.z)),W.closePath(),Q.holes.push(W);let ot=new Ot({map:Ax(),roughness:.4,metalness:.05}),K=.008,pt=new ir(Q,{depth:o+.02-2*K,bevelEnabled:!0,bevelThickness:K,bevelSize:K*.8,bevelSegments:4,curveSegments:16}),Tt=new Rt(pt,ot);Tt.rotation.x=Math.PI/2,Tt.position.y=o-K,Tt.castShadow=!0,Tt.receiveShadow=!0,t.add(Tt);let yt=new vs,Bt=a-.03,St=l-.03,X=.05;yt.moveTo(-Bt+X,-St),yt.lineTo(Bt-X,-St),yt.quadraticCurveTo(Bt,-St,Bt,-St+X),yt.lineTo(Bt,St-X),yt.quadraticCurveTo(Bt,St,Bt-X,St),yt.lineTo(-Bt+X,St),yt.quadraticCurveTo(-Bt,St,-Bt,St-X),yt.lineTo(-Bt,-St+X),yt.quadraticCurveTo(-Bt,-St,-Bt+X,-St);let st=new Rt(new ir(yt,{depth:.26,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelSegments:3}),ot);st.rotation.x=Math.PI/2,st.position.y=-.03,st.castShadow=!0,t.add(st);let gt=new me(.075,.06,.56,24);for(let A of[-1,-.33,.33,1])for(let J of[-1,1]){let U=new Rt(gt,ot);U.position.set(A*(i-.1),-.58,J*(r-.06)),U.castShadow=!0,t.add(U)}let dt=new Re({color:328965}),Nt=new Ot({color:1842204,roughness:.55,metalness:.15});for(let A of g){let J=new Rt(new me(A.r,A.r*.8,.16,40,1,!0),dt);J.position.set(A.x,-.08,A.z),t.add(J);let U=new Rt(new In(A.r,40),dt);U.rotation.x=-Math.PI/2,U.position.set(A.x,-.003,A.z),t.add(U);let et=zi.find(bt=>bt.x===A.x&&bt.z===A.z),R=new Rt(new In(et.corner?.072:.066,40),dt);R.rotation.x=-Math.PI/2,R.position.set(A.x,8e-4,A.z),t.add(R)}for(let A of y){let J=new Qs(A.map(et=>new C(et.x,o-.004,et.z))),U=new Rt(new fo(J,48,.011,10,!1),Nt);U.castShadow=!0,t.add(U)}let kt=new Ot({color:14271370,metalness:.8,roughness:.3});for(let A of[-3,-1,1,3])for(let J of[-1,1]){let U=new Rt(new In(.008,12),kt);U.rotation.x=-Math.PI/2,U.position.set(A*3.569/8,o+.0015,J*(l-pc/2)),t.add(U)}return{group:t,cloth:n,surfaceY:0,ballY:.02625}}function gu(s,t){s.background=new te(790292);let e=Rx();e.repeat.set(2*De.x/4,2*De.z/4),e.anisotropy=8;let n=new Rt(new pe(2*De.x,2*De.z),new Ot({map:e,roughness:.72,metalness:0}));n.rotation.x=-Math.PI/2,n.position.y=-.86,n.receiveShadow=!0,s.add(n),s.add(new go(14674175,3107644,.45));let i=1.62,r=new Ot({color:936486,roughness:.5,metalness:.2,side:Ze}),o=new Re({color:16773586}),a=new Re({color:1118481}),l=c=>(c.layers.set(1),s.add(c),c);for(let c of[-1.1,0,1.1]){let h=new xo(16774368,11,6,Math.PI/3.4,.6,1.6);h.position.set(c,i-.05,0),h.target.position.set(c,0,0),h.castShadow=t==="high"&&c===0,h.castShadow&&(h.shadow.mapSize.set(2048,2048),h.shadow.bias=-4e-4,h.shadow.radius=3),s.add(h,h.target),l(new Rt(new Gt(.9,.012,.5),r)).position.set(c,i+.04,0);for(let[f,g,x,m]of[[0,1,.9,.01],[0,-1,.9,.01],[1,0,.01,.5],[-1,0,.01,.5]])l(new Rt(new Gt(x,.09,m),r)).position.set(c+f*.45,i,g*.25);let d=l(new Rt(new pe(.86,.46),o));d.rotation.x=Math.PI/2,d.position.set(c,i+.03,0);for(let f of[-.35,.35]){let g=i+.046;l(new Rt(new me(.003,.003,De.ceil-g,6),a)).position.set(c+f,(g+De.ceil)/2,0)}}if(t==="high"){let c=new _o(16777215,.45);c.position.set(.2,3,.15),c.castShadow=!0,c.shadow.mapSize.set(2048,2048);let h=2.1;Object.assign(c.shadow.camera,{left:-h,right:h,top:h,bottom:-h,near:1,far:5}),c.shadow.bias=-3e-4,s.add(c)}}var Nn=De.floor,Lo=De.x,u_=De.z,Uo={desk:{x:Lo-.42,z:-1.4,top:Nn+.78},speakers:[{x:Lo-.45,z:-2.62},{x:Lo-.45,z:-.18}],radio:{x:-Lo+.27,z:.5,top:Nn+.83}},Do=(s,t)=>{let e=document.createElement("canvas");e.width=s,e.height=t;let n=new ge(e);return n.colorSpace=oe,n.anisotropy=8,{c:e,g:e.getContext("2d"),t:n}};function xu(s){let t=new Ot({color:5910294,roughness:.5}),e=new Ot({color:1776929,roughness:.55,metalness:.3}),n=new Ot({color:789518,roughness:.8}),i=new Ot({color:10133672,roughness:.35,metalness:.8}),r=new Ot({color:11569724,metalness:.85,roughness:.35}),o=(_,S,z,F,V,Q=s)=>{let W=new Rt(_,S);return W.position.set(z,F,V),W.castShadow=!0,W.receiveShadow=!0,Q.add(W),W},a=Uo.desk;o(new Gt(.62,.04,1.35),t,a.x,a.top-.02,a.z);for(let _ of[-1,1])for(let S of[-1,1])o(new Gt(.04,a.top-Nn-.04,.04),t,a.x+_*.27,Nn+(a.top-Nn-.04)/2,a.z+S*.62);o(new Gt(.5,.02,1.2),t,a.x,Nn+.18,a.z);let l=new ue;l.position.set(a.x-.02,a.top+.035,a.z),l.rotation.z=.12,s.add(l),o(new Gt(.44,.06,.92),e,0,0,0,l);let c=new Ye().setFromRotationMatrix(new Me().makeBasis(new C(0,0,1),new C(1,0,0),new C(0,1,0))),h=Do(1024,512),u=o(new pe(.92,.44),new Ot({map:h.t,roughness:.6,metalness:.2}),0,.0305,0,l);u.quaternion.copy(c),u.castShadow=!1;let d=["vol","bass","treble","bal"],f=[-.27,-.09,.09,.27],g={};d.forEach((_,S)=>{o(new Gt(.26,.004,.012),n,.02,.032,f[S],l);let z=o(new Gt(.028,.026,.05),new Ot({color:S===0?15263976:2894896,roughness:.4}),.02,.045,f[S],l);g[_]=z});for(let _=0;_<6;_++){let S=o(new me(.014,.016,.02,20),_%3===0?r:i,.17,.042,-.36+_*.144,l);S.castShadow=!1}let x=[[],[]],m=[3066944,3066944,3066944,3066944,3066944,15844367,15844367,15158332];for(let _=0;_<2;_++)for(let S=0;S<8;S++){let z=new Ot({color:1118481,emissive:m[S],emissiveIntensity:.05,roughness:.4}),F=o(new Gt(.014,.008,.02),z,-.12+S*.026,.034,-.41+_*.03,l);F.castShadow=!1,x[_].push(z)}let p=Do(512,96),E=o(new pe(.3,.056),new Re({map:p.t}),.17,.0325,.27,l);E.quaternion.copy(c),E.castShadow=!1;let y=[];Uo.speakers.forEach(_=>{let S=new ue;S.position.set(_.x,Nn,_.z),S.lookAt(0,Nn,0),s.add(S),o(new me(.16,.2,.03,24),i,0,.015,0,S),o(new me(.02,.02,.9,12),i,0,.47,0,S),o(new Gt(.2,.03,.2),i,0,.93,0,S),o(new Gt(.32,.52,.3),t,0,1.2,0,S),o(new Gt(.3,.5,.005),n,0,1.2,.151,S);let z=(F,V)=>{let Q=o(new di(F,.008,8,32),i,0,V,.156,S);Q.castShadow=!1;let W=o(new In(F,32),new Ot({color:2236966,roughness:.9}),0,V,.155,S);W.castShadow=!1;let ot=o(new je(F*.28,16,8,0,Math.PI*2,0,Math.PI/2),new Ot({color:3355448,roughness:.6}),0,V,.156,S);return ot.rotation.x=Math.PI/2,ot.castShadow=!1,{cone:W,dust:ot}};y.push({woofer:z(.11,1.12),tweeter:z(.04,1.36)})});let v=Uo.radio,k=new ue;k.position.set(v.x,v.top,v.z),k.rotation.y=Math.PI/2,s.add(k),o(new Gt(.42,.22,.17),t,0,.11,0,k),o(new Gt(.44,.02,.18),new Ot({color:3808524,roughness:.45}),0,.225,0,k);let P=Do(256,160);{let _=P.g;_.fillStyle="#d9c9a3",_.fillRect(0,0,256,160),_.strokeStyle="#6b5532",_.lineWidth=3;for(let S=8;S<256;S+=10)_.beginPath(),_.moveTo(S,0),_.lineTo(S,160),_.stroke();P.t.needsUpdate=!0}o(new pe(.2,.15),new Ot({map:P.t,roughness:.9}),-.09,.11,.0855,k).castShadow=!1;let L=Do(256,128),D=new Ot({map:L.t,emissive:16777215,emissiveMap:L.t,emissiveIntensity:.15,roughness:.5});o(new pe(.15,.075),D,.11,.14,.0855,k).castShadow=!1;for(let _ of[.06,.16]){let S=o(new me(.018,.02,.02,20),r,_,.06,.095,k);S.rotation.x=Math.PI/2}let w=(_,S)=>{let z=p.g;z.fillStyle="#071a10",z.fillRect(0,0,512,96),z.fillStyle=S?"#6fff9f":"#2f6b45",z.font='bold 44px "Courier New", monospace',z.textBaseline="middle",z.fillText((S?"":"VYP  ")+(_||"R\xC1DIO").slice(0,18),16,50),p.t.needsUpdate=!0,z=L.g,z.fillStyle=S?"#f3d9a0":"#bfae86",z.fillRect(0,0,256,128),z.strokeStyle="#5a4a2a",z.lineWidth=2;for(let V=16;V<244;V+=12)z.beginPath(),z.moveTo(V,18),z.lineTo(V,V%48===16?40:30),z.stroke();z.fillStyle="#3a2a12",z.font="bold 26px Georgia, serif",z.textAlign="center",z.fillText((_||"R\xE1dio").slice(0,16),128,86),z.fillStyle="#b3121f";let F=16+(_||"").length*37%220;z.fillRect(F,12,3,40),L.t.needsUpdate=!0,D.emissiveIntensity=S?.55:.12};{let _=h.g;_.fillStyle="#26282d",_.fillRect(0,0,1024,512),_.fillStyle="#cfd3da",_.font="bold 34px Arial, sans-serif",_.textAlign="center",["HLAS","BASY","V\xDD\u0160KY","BAL"].forEach((S,z)=>{let F=(f[z]+.46)*1113.0434782608695;_.fillText(S,F,488);for(let V=0;V<=10;V++)_.fillRect(F+22,120+V*30,V%5?10:18,3)}),_.font="bold 26px Arial, sans-serif",_.textAlign="left",_.fillText("MY SNOOKER MIX",24,44),h.t.needsUpdate=!0}return w("",!1),{view:{pos:new C(a.x-1.95,Nn+1.6,a.z+.55),look:new C(a.x,a.top+.2,a.z+.5)},setControls(_,S,z){d.forEach(F=>{g[F].position.x=-.1+(_[F]??.5)*.24}),w(S,z)},update(_,S){[_,S].forEach((z,F)=>{let V=Math.round(z*8);x[F].forEach((W,ot)=>{W.emissiveIntensity=ot<V?2.2:.05});let Q=y[F];if(Q){let W=1+z*.06;Q.woofer.dust.scale.set(1,1,W*W),Q.woofer.cone.position.z=.155+z*.004}})}}}var No=class{constructor(t,e){this.stations=(t||[]).filter(n=>n&&n.stream),this.ctxGet=e,this.index=-1,this.on=!1,this.mode="",this.params={vol:.7,bass:.5,treble:.5,bal:.5},this.status="",this.onChange=null,this._graph=null,this._data=null}get station(){return this.stations[this.index]||null}_emit(t){this.onChange&&this.onChange(t)}_build(t){if(this._graph)return this._graph;let e=new Audio;e.crossOrigin="anonymous",e.preload="none";let n=t.createMediaElementSource(e),i=t.createBiquadFilter();i.type="lowshelf",i.frequency.value=220;let r=t.createBiquadFilter();r.type="highshelf",r.frequency.value=3200;let o=t.createGain();n.connect(i).connect(r).connect(o);let a=t.createChannelSplitter(2);o.connect(a);let l=t.createGain();l.connect(t.destination);let c=[0,1].map(h=>{let u=t.createGain(),d=t.createAnalyser();d.fftSize=512;let f=t.createPanner();f.panningModel="HRTF",f.distanceModel="inverse",f.refDistance=1.2,f.rolloffFactor=.6;let g=Uo.speakers[h];return f.positionX.value=g.x,f.positionY.value=Nn+1.2,f.positionZ.value=g.z,a.connect(u,h),u.connect(d),u.connect(f),f.connect(l),{g:u,an:d,p:f}});return this._graph={el:e,src:n,bass:i,treble:r,gain:o,sides:c,out:l},this._data=new Uint8Array(256),this._graph}_apply(){let t=this.params,e=this._graph;e&&this.mode==="space"&&(e.gain.gain.value=t.vol*t.vol*1.6,e.bass.gain.value=(t.bass-.5)*24,e.treble.gain.value=(t.treble-.5)*24,e.sides[0].g.gain.value=Math.min(1,(1-t.bal)*2),e.sides[1].g.gain.value=Math.min(1,t.bal*2)),this._plain&&(this._plain.volume=Math.min(1,t.vol*t.vol))}set(t,e){this.params[t]=Math.max(0,Math.min(1,e)),this._apply(),this._emit("param")}play(t=this.index<0?0:this.index){if(!this.stations.length){this.status="V My Player nie s\xFA \u017Eiadne r\xE1di\xE1.",this._emit();return}this.index=(t%this.stations.length+this.stations.length)%this.stations.length;let e=this.station;this.stopAudio(),this.on=!0,this.status="Lad\xEDm stanicu\u2026";let n=this.ctxGet();if(!n){this._playPlain(e);return}let i=this._build(n);this.mode="space",this._apply();let r=this._token=Math.random();i.el.onerror=()=>{this._token===r&&this.on&&this._playPlain(e)},i.el.onplaying=()=>{this._token===r&&(this.status="Hr\xE1 priestorovo z reproduktorov.",this._emit())},i.el.src=e.stream,i.el.play().catch(()=>null),this._tuneTimeout(r),this._emit()}_playPlain(t){this._graph&&(this._graph.el.removeAttribute("src"),this._graph.el.load()),this.mode="plain";let e=new Audio;this._plain=e;let n=this._token=Math.random();e.onerror=()=>{this._token===n&&(this.status="Stanica teraz nehr\xE1. Sk\xFAs \u010Fal\u0161iu (\u0161\xEDpka vpravo).",this.mode="",this._emit())},e.onplaying=()=>{this._token===n&&(this.status="Hr\xE1 (t\xE1to stanica nedovol\xED priestorov\xFD zvuk a ekvaliz\xE9r).",this._emit())},e.src=t.stream,this._apply(),e.play().catch(()=>null),this._tuneTimeout(n),this._emit()}_tuneTimeout(t){setTimeout(()=>{this._token===t&&this.on&&/Ladím/.test(this.status)&&(this.status="Stanica neodpoved\xE1. Sk\xFAs \u010Fal\u0161iu (\u0161\xEDpka vpravo).",this._emit())},12e3)}stopAudio(){this._token=0,this._graph&&(this._graph.el.pause(),this._graph.el.removeAttribute("src"),this._graph.el.load()),this._plain&&(this._plain.pause(),this._plain.removeAttribute("src"),this._plain=null),this.mode=""}stop(){this.stopAudio(),this.on=!1,this.status="R\xE1dio je vypnut\xE9.",this._emit()}toggle(){this.on?this.stop():this.play()}next(t){this.play(this.index+t)}update(t){let e=this._graph;if(!e)return[this.on&&this.mode==="plain"?.35+Math.random()*.25:0,this.on&&this.mode==="plain"?.35+Math.random()*.25:0];let i=e.out.context.listener,r=t.position,o=new C;return t.getWorldDirection(o),i.positionX?(i.positionX.value=r.x,i.positionY.value=r.y,i.positionZ.value=r.z,i.forwardX.value=o.x,i.forwardY.value=o.y,i.forwardZ.value=o.z,i.upX.value=0,i.upY.value=1,i.upZ.value=0):i.setPosition&&(i.setPosition(r.x,r.y,r.z),i.setOrientation(o.x,o.y,o.z,0,1,0)),this.mode==="plain"?[.3+Math.random()*.3,.3+Math.random()*.3]:this.mode!=="space"||!this.on?[0,0]:e.sides.map(a=>{a.an.getByteTimeDomainData(this._data);let l=0;for(let c=0;c<this._data.length;c++)l=Math.max(l,Math.abs(this._data[c]-128));return Math.min(1,l/100)})}};function Cx(s,t){let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d"),i="#"+s.toString(16).padStart(6,"0");n.fillStyle=i,n.fillRect(0,0,256,128);let r=t==="white"?"rgba(180,30,40,0.85)":t==="black"?"rgba(255,255,255,0.22)":"rgba(255,255,255,0.35)";n.fillStyle=r;for(let[a,l]of[[64,64],[192,64]])n.beginPath(),n.arc(a,l,t==="white"?7:5,0,Math.PI*2),n.fill();let o=new ge(e);return o.colorSpace=oe,o}function Px(){let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.75)"),e.addColorStop(.45,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ge(s)}var ko=class{constructor(t,e,n,i=null){this.scene=t,this.items=[];let r=n==="high"?64:32,o=new je(.02625,r,Math.round(r*.75)),a={},l=new pe(.02625*2.6,.02625*2.6),c=new Re({map:Px(),transparent:!0,depthWrite:!1,opacity:.6});for(let f of e){a[f.kind]||(a[f.kind]=new po({map:Cx(Dn[f.kind].color,f.kind),roughness:.12,metalness:0,clearcoat:1,clearcoatRoughness:.05,envMap:i,envMapIntensity:.55}));let g=new Rt(o,a[f.kind]),x=new Rt(l,c);x.rotation.x=-Math.PI/2,x.renderOrder=1,t.add(x),g.castShadow=!0,g.receiveShadow=!1,g.userData.ball=f,g.quaternion.setFromEuler(new un(Math.random()*6,Math.random()*6,Math.random()*6)),t.add(g),this.items.push({ball:f,mesh:g,blob:x,drop:0})}let h=new te(16765503);this.outline=new Rt(new je(.02625*1.12,32,24),new Re({color:h,side:Le,transparent:!0,opacity:.9,depthWrite:!1})),this.ring=new Rt(new Ms(.02625*1.25,.02625*1.55,48),new Re({color:h,transparent:!0,opacity:.75,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.outline.visible=this.ring.visible=!1,this.arrow=new ue;let u=new Ot({color:16777215,transparent:!0,opacity:.55,depthWrite:!1,roughness:.4}),d=new Rt(new uo(.02625*.38,.02625*1.3,24),u);d.rotation.z=-Math.PI/2,d.position.x=.02625*1.9,this.arrow.add(d),this.arrow.visible=!1,this.arrow.renderOrder=3,this.arrowMat=u,t.add(this.arrow),this.outline.renderOrder=this.ring.renderOrder=2,t.add(this.outline,this.ring),this._hlT=0,this._q=new Ye,this._axis=new C}update(t){for(let e of this.items){let n=e.ball,i=e.mesh;if(n.on){e.drop=0,i.visible=!0,i.position.set(n.p.x,.02625,n.p.z),e.blob.visible=!0,e.blob.position.set(n.p.x,6e-4,n.p.z);let r=Math.hypot(n.w.x,n.w.y,n.w.z);r>.001&&n.moving&&(this._axis.set(n.w.x/r,n.w.y/r,n.w.z/r),this._q.setFromAxisAngle(this._axis,r*t),i.quaternion.premultiply(this._q))}else if(n.potted){e.blob.visible=!1,e.drop=Math.min(1,e.drop+t*3);let r=e.drop;i.position.x+=(n.potted.x-i.position.x)*Math.min(1,t*12),i.position.z+=(n.potted.z-i.position.z)*Math.min(1,t*12),i.position.y=.02625-r*r*.12,i.visible=r<1}else i.visible=!1,e.blob.visible=!1}}highlight(t,e,n=null){let i=!!(t&&t.on);if(this.outline.visible=this.ring.visible=i,this.arrow.visible=i&&!!n,!i)return;if(n){let o=Math.atan2(t.p.z-n.z,t.p.x-n.x);this.arrow.position.set(t.p.x+Math.cos(o)*.02625*.6,.02625,t.p.z+Math.sin(o)*.02625*.6),this.arrow.rotation.set(0,-o,0),this.arrowMat.color.setHex(t.kind==="black"?5592405:Dn[t.kind].color)}this._hlT+=e;let r=.5+.5*Math.sin(this._hlT*5);this.outline.position.set(t.p.x,.02625,t.p.z),this.ring.position.set(t.p.x,.0012,t.p.z),this.outline.material.opacity=.55+.35*r,this.ring.material.opacity=.45+.4*r}meshOf(t){return this.items.find(e=>e.ball===t)?.mesh||null}};var Ix=Ln.degToRad(4),Lx=Ln.degToRad(40),Dx=.049+.004,_u=.17;function yu(s,t,e,n,i,r){let o=1/0;return e>1e-6&&(o=Math.min(o,(i-s)/e)),e<-1e-6&&(o=Math.min(o,(-i-s)/e)),n>1e-6&&(o=Math.min(o,(r-t)/n)),n<-1e-6&&(o=Math.min(o,(-r-t)/n)),Math.max(0,o)}var Oo=class{constructor(t,e){this.pivot=new ue,t.add(this.pivot),this.setSpec(e)}setSpec(t){this.group&&(this.pivot.remove(this.group),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})),this.spec=t,this.group=Io(t),this.pivot.add(this.group)}place(t,e,n,i,r,o){if(this.pivot.visible=o,!o)return;let a=Math.cos(e),l=Math.sin(e),c=-l,h=a,u=.012+n*.28,d=t.p.x-a*(.02625+u)+c*i*.5*.02625,f=t.p.z-l*(.02625+u)+h*i*.5*.02625,g=.02625+r*.5*.02625,x=yu(d,f,-a,-l,3.569/2,1.778/2),m=yu(d,f,-a,-l,3.569/2+_u,1.778/2+_u),p=this.spec.len||1.45,E=L=>.0048+(.0145-.0048)*Math.min(L,p)/p,y=Ix;for(;y<Lx&&![x,m].every(D=>D>p||g+D*Math.sin(y)>=Dx+E(D)/Math.cos(y));y+=.005);this.tilt=this.tilt===void 0?y:this.tilt+(y-this.tilt)*.25;let v=this.tilt,k=g+u*Math.tan(v);this.pivot.position.set(d,k,f);let P=new C(-a*Math.cos(v),Math.sin(v),-l*Math.cos(v));this.pivot.quaternion.setFromUnitVectors(new C(0,1,0),P)}},zo=class{constructor(t){let e=(n,i)=>new Ks({color:n,transparent:!0,opacity:i,depthWrite:!1});this.line=new _s(new Ce().setFromPoints([new C,new C]),e(16777215,.55)),this.objLine=new _s(new Ce().setFromPoints([new C,new C]),e(16769674,.8)),this.cueLine=new _s(new Ce().setFromPoints([new C,new C]),e(10474495,.55)),this.ghost=new Rt(new je(.02625,24,16),new Re({color:16777215,wireframe:!0,transparent:!0,opacity:.35,depthWrite:!1})),t.add(this.line,this.objLine,this.cueLine,this.ghost)}set(t,e){let n=e.geometry.attributes.position;for(let i=0;i<2;i++)n.setXYZ(i,t[i].x,.02625*.35,t[i].z);n.needsUpdate=!0,e.geometry.computeBoundingSphere()}update(t,e,n,i,r=2){let o=i&&r>0;if(this.line.visible=this.ghost.visible=o,this.objLine.visible=this.cueLine.visible=o&&r>1,!o)return null;let a=Co(t,e,n);if(this.set([e.p,a.ghost],this.line),this.ghost.position.set(a.ghost.x,.02625,a.ghost.z),a.ball&&r>1){let l=a.ball.p.x-a.ghost.x,c=a.ball.p.z-a.ghost.z,h=Math.hypot(l,c)||1,u=l/h,d=c/h,f=Math.cos(n)*u+Math.sin(n)*d,g=.18+.5*f;this.set([a.ball.p,{x:a.ball.p.x+u*g,z:a.ball.p.z+d*g}],this.objLine);let x=Math.cos(n)-f*u,m=Math.sin(n)-f*d,p=Math.hypot(x,m);if(p>.001){x/=p,m/=p;let E=.08+.4*(1-f);this.set([a.ghost,{x:a.ghost.x+x*E,z:a.ghost.z+m*E}],this.cueLine)}else this.cueLine.visible=!1}else this.objLine.visible=this.cueLine.visible=!1;return a}};var vu={type:"change"},gc={type:"start"},bu={type:"end"},Fo=new Ii,Mu=new rn,Ux=Math.cos(70*Ln.DEG2RAD),Fe=new C,Je=2*Math.PI,ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},mc=1e-6,Bo=class extends vo{constructor(t,e=null){super(t,e),this.state=ye.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:En.ROTATE,MIDDLE:En.DOLLY,RIGHT:En.PAN},this.touches={ONE:ki.ROTATE,TWO:ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Ye,this._lastTargetPosition=new C,this._quat=new Ye().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rr,this._sphericalDelta=new rr,this._scale=1,this._panOffset=new C,this._rotateStart=new mt,this._rotateEnd=new mt,this._rotateDelta=new mt,this._panStart=new mt,this._panEnd=new mt,this._panDelta=new mt,this._dollyStart=new mt,this._dollyEnd=new mt,this._dollyDelta=new mt,this._dollyDirection=new C,this._mouse=new mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kx.bind(this),this._onPointerDown=Nx.bind(this),this._onPointerUp=Ox.bind(this),this._onContextMenu=Wx.bind(this),this._onMouseWheel=Bx.bind(this),this._onKeyDown=Hx.bind(this),this._onTouchStart=Vx.bind(this),this._onTouchMove=Gx.bind(this),this._onMouseDown=zx.bind(this),this._onMouseMove=Fx.bind(this),this._interceptControlDown=Xx.bind(this),this._interceptControlUp=qx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vu),this.update(),this.state=ye.NONE}update(t=null){let e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Je:n>Math.PI&&(n-=Je),i<-Math.PI?i+=Je:i>Math.PI&&(i-=Je),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Fe.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Fo.origin.copy(this.object.position),Fo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fo.direction))<Ux?this.object.lookAt(this.target):(Mu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fo.intersectPlane(Mu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>mc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>mc||this._lastTargetPosition.distanceToSquared(this.target)>mc?(this.dispatchEvent(vu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Je/60*this.autoRotateSpeed*t:Je/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Fe.copy(i).sub(this.target);let r=Fe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Je*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Je*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Je*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Je*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Nx(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function kx(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Ox(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bu),this.state=ye.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function zx(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case En.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ye.DOLLY;break;case En.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ye.ROTATE}break;case En.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ye.PAN}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(gc)}function Fx(s){switch(this.state){case ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Bx(s){this.enabled===!1||this.enableZoom===!1||this.state!==ye.NONE||(s.preventDefault(),this.dispatchEvent(gc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(bu))}function Hx(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function Vx(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ye.TOUCH_ROTATE;break;case ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ye.TOUCH_PAN;break;default:this.state=ye.NONE}break;case 2:switch(this.touches.TWO){case ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ye.TOUCH_DOLLY_PAN;break;case ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ye.TOUCH_DOLLY_ROTATE;break;default:this.state=ye.NONE}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(gc)}function Gx(s){switch(this._trackPointer(s),this.state){case ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ye.NONE}}function Wx(s){this.enabled!==!1&&s.preventDefault()}function Xx(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qx(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ho=class{constructor(t){this.camera=new Ve(45,1,.01,40),this.camera.position.set(-3,1.6,0),this.orbit=new Bo(this.camera,t.domElement),this.orbit.enableDamping=!0,this.orbit.maxPolarAngle=Math.PI/2-.05,this.orbit.minDistance=.3,this.orbit.maxDistance=4,this.orbit.target.set(0,0,0),this.orbit.enabled=!1,this.mode="cue",this.zoom=1,this.height=.22,this._pos=new C,this._look=new C,this._curLook=new C(0,0,0),this.panOffset=new C,this.followYaw=0,this.followH=.55,this._wasMoving=!1,this.aimPoint=null,this.orbit.mouseButtons={LEFT:En.ROTATE,MIDDLE:En.PAN,RIGHT:En.PAN}}pan(t,e){let n=this.camera.matrixWorld.elements,i=.0018*(this.mode==="top"?2:1);this.panOffset.x+=(n[0]*t-n[4]*e)*i,this.panOffset.y+=(n[1]*t-n[5]*e)*i,this.panOffset.z+=(n[2]*t-n[6]*e)*i,this.mode==="top"&&(this.panOffset.y=0),this.panOffset.y=Math.max(-.15,Math.min(1.5,this.panOffset.y)),this.panOffset.clampLength(0,3)}resetPan(){this.panOffset.set(0,0,0)}turn(t,e){this.followYaw+=t*.004,this.followH=Math.max(.12,Math.min(1.8,this.followH+e*.003))}setMode(t){this.mode=t,this.resetPan(),t==="top"?(this.camera.layers.disable(1),this.camera.layers.disable(2)):(this.camera.layers.enable(1),this.camera.layers.enable(2)),this.orbit.enabled=t==="free",t==="free"&&this.orbit.target.copy(this._curLook)}setView(t,e){this.setMode("view"),this.viewPos=t,this.viewLook=e}resize(t,e){this.camera.aspect=t/e,this.baseFov=t/e<1?62:45,this.camera.fov=this.baseFov/(this.viewZoom||1),this.camera.updateProjectionMatrix()}setViewZoom(t){this.viewZoom=Math.min(5,Math.max(1,t)),this.camera.fov=(this.baseFov||45)/this.viewZoom,this.camera.updateProjectionMatrix()}update(t,e,n,i){if(this.mode==="free"){this.orbit.update(),dc(this.camera.position),this._curLook.copy(this.orbit.target),this.camera.position.y>1.5?this.camera.layers.disable(1):this.camera.layers.enable(1);return}let r=this._pos,o=this._look;if(this.mode==="view")this.camera.up.set(0,1,0),r.copy(this.viewPos),o.copy(this.viewLook);else if(this.mode==="top"){let l=this.camera.aspect,c=Ln.degToRad(this.camera.fov),h=(1.778+.5)/2/Math.tan(c/2),u=(3.569+.5)/2/Math.tan(c/2)/l;if(l>=1)r.set(0,Math.max(h,u),1e-4),this.camera.up.set(0,0,-1);else{let d=(3.569+.5)/2/Math.tan(c/2),f=(1.778+.5)/2/Math.tan(c/2)/l;r.set(1e-4,Math.max(d,f),0),this.camera.up.set(1,0,0)}o.set(0,0,0)}else if(i&&this.mode!=="view"){this.camera.up.set(0,1,0);let l=Math.cos(this.followYaw),c=Math.sin(this.followYaw),h=.9/this.zoom+this.followH*.4;r.set(e.p.x-l*h,this.followH,e.p.z-c*h),o.set(e.p.x+l*.15,0,e.p.z+c*.15)}else{this.camera.up.set(0,1,0);let l=Math.cos(n),c=Math.sin(n),h=.62/this.zoom,u=this.height/this.zoom+.06,d=Math.tan(this.cueTilt||0)*h+.15;r.set(e.p.x-l*h,Math.max(u,d),e.p.z-c*h),o.set(e.p.x+l*.55,0,e.p.z+c*.55)}i&&!this._wasMoving&&this.mode!=="view"&&(this.followYaw=n,this.followH=.55,this.resetPan()),this._wasMoving=i,this.mode==="top"?(r.add(this.panOffset),o.add(this.panOffset)):!i&&this.mode!=="view"&&this.panOffset.lengthSq()>1e-8&&(r.add(this.panOffset),this.aimPoint?o.copy(this.aimPoint):o.add(this.panOffset)),this.mode!=="top"&&dc(r);let a=1-Math.exp(-t*(this.mode==="view"||i?4:7));this.camera.position.lerp(r,a),this._curLook.lerp(o,a),this.camera.lookAt(this._curLook),this.camera.position.y>De.ceil-.05?this.camera.layers.disable(2):this.mode!=="top"&&this.camera.layers.enable(2),this.mode!=="top"&&(this.camera.position.y>1.5?this.camera.layers.disable(1):this.camera.layers.enable(1))}};var Vo=class{constructor(t,e,n,i){this.dom=t,this.rig=e,this.game=n,this.hooks=i,this.power=0,this.charging=!1,this.fine=!1,this._ray=new Ss,this._plane=new rn(new C(0,1,0),-.02625),this._v2=new mt,this._hit=new C,this._drag=null,this._keys=new Set,this._spaceT=0,this.stroking=!1,this.spinning=!1,this.blocked=!1,this.cueSpec={fine:0,len:1.45},this.strokePx=380,this.strokePull=0,this._hist=[],t.addEventListener("mousemove",r=>this.mouseMove(r)),this.panning=!1,t.addEventListener("mousedown",r=>{r.button===1&&r.preventDefault()}),this._ignoreUntil=0,document.addEventListener("pointerlockchange",()=>{this._ignoreUntil=performance.now()+60,this.hooks.lock&&this.hooks.lock(this.captured)}),t.addEventListener("pointerdown",r=>this.down(r)),window.addEventListener("pointermove",r=>this.move(r)),window.addEventListener("pointerup",r=>this.up(r)),window.addEventListener("pointercancel",r=>this.up(r)),t.addEventListener("wheel",r=>this.wheel(r),{passive:!1}),t.addEventListener("contextmenu",r=>r.preventDefault()),window.addEventListener("keydown",r=>this.key(r,!0)),window.addEventListener("keyup",r=>this.key(r,!1))}tablePoint(t){let e=this.dom.getBoundingClientRect();return this._v2.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),this._ray.setFromCamera(this._v2,this.rig.camera),this._ray.ray.intersectPlane(this._plane,this._hit)}aimAt(t){let e=this.game.cue;Math.hypot(t.x-e.p.x,t.z-e.p.z)>.01&&(this.game.dir=Math.atan2(t.z-e.p.z,t.x-e.p.x))}down(t){this.hooks.unlock();let e=this.game;if(this.blocked){this.hooks.viewDown&&this.hooks.viewDown(t);return}if(t.pointerType==="mouse"&&t.button===2){this.rig.mode!=="free"&&(this.panning=!0,this.capture());return}if(t.pointerType==="mouse"&&t.button===1){let n=performance.now();if(n-(this._midT||0)<350){this._midT=0,this.spinning=!1,this.hooks.spinReset&&this.hooks.spinReset();return}this._midT=n}if(e.state==="place"&&this.captured){t.button===0&&(e.confirmPlace(),e.aimAtNearest());return}if(e.state==="place"){let n=this.tablePoint(t);n&&e.movePlace(n.x,n.z),this._drag={kind:"place",id:t.pointerId};return}if(e.state==="aim"){if(t.pointerType==="mouse"){if(t.button===0&&this.rig.mode!=="free"){this.captured?this.startStroke():this.capture();return}if(t.button===1){this.spinning=!0,this.capture();return}}if(this.rig.mode==="free"){this._tap={id:t.pointerId,x:t.clientX,y:t.clientY,t:performance.now()};return}if(this.rig.mode==="top"){let n=this.tablePoint(t);n&&this.aimAt(n),this._drag={kind:"aimTop",id:t.pointerId}}else this._drag={kind:"aimCue",id:t.pointerId,x:t.clientX,dir:e.dir};try{this.dom.setPointerCapture(t.pointerId)}catch{}}}move(t){let e=this._drag;if(!e||e.id!==t.pointerId)return;let n=this.game;if(e.kind==="place"){let i=this.tablePoint(t);i&&n.movePlace(i.x,i.z)}else if(e.kind==="aimTop"){let i=this.tablePoint(t);i&&this.aimAt(i)}else if(e.kind==="aimCue"){let i=t.shiftKey||this.fine?15e-5:.0016;n.dir=e.dir+(t.clientX-e.x)*i}}up(t){t.pointerType==="mouse"&&t.button===0&&this.stroking&&this.endStroke(),t.pointerType==="mouse"&&t.button===1&&(this.spinning=!1),t.pointerType==="mouse"&&t.button===2&&(this.panning=!1,this.rig.resetPan());let e=this._tap;if(e&&e.id===t.pointerId&&(this._tap=null,Math.hypot(t.clientX-e.x,t.clientY-e.y)<6&&performance.now()-e.t<350&&this.game.state==="aim")){let n=this.tablePoint(t);n&&this.aimAt(n)}this._drag&&this._drag.id===t.pointerId&&(this._drag=null)}setCue(t){this.cueSpec=t,this.strokePx=uu(t)}get captured(){return document.pointerLockElement===this.dom}capture(){if(!(this.captured||!this.dom.requestPointerLock))try{let t=this.dom.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}uncapture(){this.captured&&document.exitPointerLock()}mouseMove(t){let e=this.game;if(this.blocked){this.hooks.look&&performance.now()>=this._ignoreUntil&&Math.abs(t.movementX||0)<200&&Math.abs(t.movementY||0)<200&&this.hooks.look(t.movementX||0,t.movementY||0);return}if(performance.now()<this._ignoreUntil||Math.abs(t.movementX||0)>200||Math.abs(t.movementY||0)>200)return;if(this.stroking){this.strokeMove(t.movementY||0);return}if(this.panning){this.rig.pan(t.movementX||0,t.movementY||0);return}if(e.state==="moving"&&this.rig.mode==="cue"&&(t.buttons&3)===0){this.rig.turn(t.movementX||0,t.movementY||0);return}if(this.spinning){this.hooks.spin&&this.hooks.spin((t.movementX||0)/160,-(t.movementY||0)/160);return}if(e.state==="place"&&this.captured){this.placeMove(t.movementX||0,t.movementY||0);return}if((t.buttons&3)!==0||e.state!=="aim"||!this.captured)return;let n=t.movementX||0;if(!n)return;let i=t.shiftKey&&this.cueSpec.fine>0,r=i?this.cueSpec.fine:5e-4,o=i?1:1+Math.min(6,Math.abs(n)/6);e.dir+=n*r*o}placeMove(t,e){let n=this.rig.camera.matrixWorld.elements,i=n[0],r=n[2],o=n[4],a=n[6];Math.hypot(o,a)<.2&&(o=-n[8],a=-n[10]);let l=Math.hypot(i,r)||1,c=Math.hypot(o,a)||1;i/=l,r/=l,o/=c,a/=c;let h=.0012,u=this.game.cue;this.game.movePlace(u.p.x+(t*i-e*o)*h,u.p.z+(t*r-e*a)*h)}startStroke(){this.game.canShoot()&&(this.stroking=!0,this._ignoreUntil=performance.now()+60,this.strokePull=0,this._max=0,this._hist=[{t:performance.now(),p:0}],this.capture(),this.hooks.stroke&&this.hooks.stroke(!0))}endStroke(){this.stroking=!1,this.strokePull=0,this.power=0,this.hooks.stroke&&this.hooks.stroke(!1)}strokeMove(t){if(!this.stroking||!this.game.canShoot())return;let e=performance.now(),n=this.strokePull;for(this.strokePull=Math.max(-.02,Math.min(1,n+t/this.strokePx)),this._max=Math.max(this._max,this.strokePull),this._hist.push({t:e,p:this.strokePull});this._hist.length>2&&e-this._hist[0].t>80;)this._hist.shift();let i=this.strokeSpeed();if(this.power=Math.max(0,Math.min(1,i)),this.strokePull<=.004&&n>.004&&this._max>.02&&t<0){let r=Math.max(.03,Math.min(1,i));this.endStroke(),this.hooks.shoot(r)}}strokeSpeed(){let t=this._hist;if(t.length<2)return 0;let e=0;for(let a=1;a<t.length;a++)t[a].p>=t[e].p&&(e=a);let n=t[e],i=t[t.length-1];if(n===i)return 0;let r=Math.max(.008,(i.t-n.t)/1e3),o=(n.p-i.p)/r;return Math.max(0,o*.28*2/7)}wheel(t){if(this.blocked&&this.hooks.viewWheel){t.preventDefault(),this.hooks.viewWheel(Math.max(-4,Math.min(4,t.deltaY/(t.deltaMode===1?3:100))));return}if(this.rig.mode!=="cue")return;t.preventDefault();let e=Math.max(-4,Math.min(4,t.deltaY/(t.deltaMode===1?3:100)));this.rig.zoom=Math.min(6,Math.max(.3,this.rig.zoom*Math.pow(.82,e)))}key(t,e){if(t.target&&/input|textarea|select/i.test(t.target.tagName))return;let n=this.game,i=t.key;if(e?this._keys.add(i):this._keys.delete(i),i==="Control"){e&&!t.repeat?this.hooks.key&&this.hooks.key("ctrl-down",t):e||this.hooks.key&&this.hooks.key("ctrl-up",t);return}if(i===" "){if(t.preventDefault(),this.blocked)return;e&&!this.charging&&n.canShoot()?(this.hooks.unlock(),this.charging=!0,this._spaceT=0):!e&&this.charging&&this.release();return}e&&(i==="Enter"&&n.state==="place"?n.confirmPlace():i==="Escape"&&(this.charging||this.stroking)?(this.charging=!1,this.power=0,this.stroking&&this.endStroke()):this.hooks.key&&this.hooks.key(i,t)&&t.preventDefault())}setPower(t,e){this.power=Math.max(0,Math.min(1,t)),this.charging=e}release(){let t=this.power;this.charging=!1,this.power=0,t>.02&&this.hooks.shoot(t)}update(t){let e=this.game;if(e.state==="aim"&&!this.blocked){let i=this._keys.has("Shift")&&this.cueSpec.fine>0?.015:.35;this._keys.has("ArrowLeft")&&(e.dir-=i*t),this._keys.has("ArrowRight")&&(e.dir+=i*t)}if(this.stroking&&e.state!=="aim"&&this.endStroke(),this.stroking&&this._hist.length&&performance.now()-this._hist[this._hist.length-1].t>120&&(this.power*=Math.exp(-t*8)),this.charging&&this._keys.has(" ")){this._spaceT+=t;let n=this._spaceT/1.6%2;this.power=n<1?n:2-n}}};var Go=class{constructor(){this.ctx=null,this.enabled=!0,this.volume=.8,this._last=0,this._count=0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t){this.enabled=!1;return}this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination);let e=Math.floor(this.ctx.sampleRate*.05);this.noise=this.ctx.createBuffer(1,e,this.ctx.sampleRate);let n=this.noise.getChannelData(0);for(let i=0;i<e;i++)n[i]=(Math.random()*2-1)*Math.pow(1-i/e,3)}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}_allow(){let t=this.ctx.currentTime;return t-this._last>.03&&(this._count=0),this._last=t,this._count++,this._count<=4}_tone(t,e,n,i="sine",r=.5){let o=this.ctx.currentTime,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type=i,a.frequency.setValueAtTime(t,o),a.frequency.exponentialRampToValueAtTime(Math.max(20,t*r),o+e),l.gain.setValueAtTime(n,o),l.gain.exponentialRampToValueAtTime(1e-4,o+e),a.connect(l).connect(this.master),a.start(o),a.stop(o+e+.02)}_click(t,e,n,i=1){let r=this.ctx.currentTime,o=this.ctx.createBufferSource();o.buffer=this.noise,o.playbackRate.value=i;let a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.value=t,a.Q.value=e;let l=this.ctx.createGain();l.gain.value=n,o.connect(a).connect(l).connect(this.master),o.start(r)}_ok(){return this.enabled&&this.ctx&&this.ctx.state==="running"}ball(t){if(!this._ok()||t<.02||!this._allow())return;let e=Math.min(1,t/4);this._click(3800+Math.random()*600,6,.25+e*1.6,1.2),this._tone(2600+Math.random()*300,.04,.05+e*.25,"triangle",.8)}cushion(t){if(!this._ok()||t<.05||!this._allow())return;let e=Math.min(1,t/4);this._tone(120,.12,.1+e*.45,"sine",.6),this._click(700,2,.1+e*.4,.6)}pot(){this._ok()&&(this._tone(90,.25,.5,"sine",.5),setTimeout(()=>this._ok()&&this._click(1200,3,.25,.5),90),setTimeout(()=>this._ok()&&this._click(900,3,.18,.5),170))}doorCreak(){if(!this._ok())return;let t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createBiquadFilter(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(420,t);for(let r=1;r<=8;r++)e.frequency.linearRampToValueAtTime(380+Math.random()*260,t+r*.1);n.type="bandpass",n.frequency.value=900,n.Q.value=6,i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.12,t+.08),i.gain.setValueAtTime(.12,t+.6),i.gain.exponentialRampToValueAtTime(1e-4,t+.85),e.connect(n).connect(i).connect(this.master),e.start(t),e.stop(t+.9)}doorShut(){this._ok()&&(this._tone(70,.35,.9,"sine",.5),this._click(500,1.5,.8,.5),setTimeout(()=>this._ok()&&this._click(2500,4,.25,1),40))}cue(t){this._ok()&&(this._click(1800,3,.3+t*1.2,.9),this._tone(600,.05,.05+t*.15,"triangle",.6))}};var ve=s=>String(s||"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Ft=(s,t,e)=>{let n=document.createElement(s);return t&&(n.className=t),e!==void 0&&(n.innerHTML=e),n},Wo=class{constructor(t,e){this.root=t,this.opts=e,this.side=0,this.top=0,t.classList.add("mysn-ui");let n=Ft("div","mysn-bar");n.appendChild(Ft("div","mysn-brand",`<a href="${e.homeUrl||"/"}" class="mysn-home" title="Sp\xE4\u0165 na web">My Snooker</a><span>Tr\xE9ning</span>`)),this.modeLabel=n.querySelector(".mysn-brand span"),this.stats=Ft("div","mysn-stats"),n.appendChild(this.stats);let i=Ft("div","mysn-barbtns");this.btnHelp=this.button("?","help","Ovl\xE1danie"),this.btnSet=this.button("Nastavenia","settings"),i.append(this.btnSet,this.btnHelp),n.appendChild(i),t.appendChild(n),this.msg=Ft("div","mysn-msg"),t.appendChild(this.msg),this.hint=Ft("div","mysn-hint",""),t.appendChild(this.hint),this.setLock(!1),this.powerBox=Ft("div","mysn-power",'<div class="mysn-power-label">Sila</div><div class="mysn-power-track"><div class="mysn-power-fill"></div><div class="mysn-power-knob"></div></div><div class="mysn-power-val">0 %</div>'),t.appendChild(this.powerBox),this.powerTrack=this.powerBox.querySelector(".mysn-power-track"),this.powerFill=this.powerBox.querySelector(".mysn-power-fill"),this.powerKnob=this.powerBox.querySelector(".mysn-power-knob"),this.powerVal=this.powerBox.querySelector(".mysn-power-val"),this.bindPower(),this.spinBox=Ft("div","mysn-spin",'<div class="mysn-spin-ball"><div class="mysn-spin-dot"></div></div><div class="mysn-spin-label">Miesto \xFAderu</div>'),t.appendChild(this.spinBox),this.spinBall=this.spinBox.querySelector(".mysn-spin-ball"),this.spinDot=this.spinBox.querySelector(".mysn-spin-dot"),this.bindSpin();let r=Ft("div","mysn-tools");this.camBtns={};let o=Ft("div","mysn-group");this.btnUndo=this.button("Sp\xE4\u0165","undo","Vr\xE1ti\u0165 posledn\xFD \xFAder (Z)"),this.btnHand=this.button("Biela do ruky","hand","Polo\u017Ei\u0165 bielu kamko\u013Evek v D (B)"),this.btnSkip=this.button("Presko\u010Di\u0165","skip","Dokon\u010Di\u0165 \xFAder hne\u010F"),this.btnReset=this.button("Nov\xE9 rozostavenie","reset","Nov\xE9 rozostavenie (R)"),this.btnPlace=this.button("Hotovo","place","Potvrdi\u0165 polohu bielej (Enter)"),this.btnPlace.classList.add("mysn-primary"),o.append(this.btnPlace,this.btnUndo,this.btnHand,this.btnSkip,this.btnReset),r.appendChild(o),t.appendChild(r),this.menu=this.buildMenu(),this.setMenu(e.user?"training":"guest"),t.appendChild(this.menu),this.panel=this.buildSettings(e.settings),t.appendChild(this.panel),this.contact=Ft("div","mysn-contact mysn-hidden",'<canvas></canvas><div class="mysn-contact-info"></div>'),t.appendChild(this.contact),this.contactCanvas=this.contact.querySelector("canvas"),this.contactInfo=this.contact.querySelector(".mysn-contact-info"),this._contactKey="",this.help=this.buildHelp(),t.appendChild(this.help)}button(t,e,n,i){let r=Ft("button","mysn-btn",t);return r.type="button",n&&(r.title=n),r.addEventListener("click",o=>{o.stopPropagation(),this.opts.onAction(e,i)}),r}bindPower(){let t=null,e=i=>{let r=this.powerTrack.getBoundingClientRect();return Math.max(0,Math.min(1,(i.clientY-r.top)/r.height))};this.powerTrack.addEventListener("pointerdown",i=>{i.preventDefault(),this.opts.onAction("unlock"),t=i.pointerId;try{this.powerTrack.setPointerCapture(i.pointerId)}catch{}this.opts.onPower(e(i),!0)}),this.powerTrack.addEventListener("pointermove",i=>{t===i.pointerId&&this.opts.onPower(e(i),!0)});let n=i=>{t===i.pointerId&&(t=null,this.opts.onRelease())};this.powerTrack.addEventListener("pointerup",n),this.powerTrack.addEventListener("pointercancel",i=>{t===i.pointerId&&(t=null,this.opts.onPower(0,!1))})}bindSpin(){let t=null,e=n=>{let i=this.spinBall.getBoundingClientRect(),r=(n.clientX-i.left)/i.width*2-1,o=-((n.clientY-i.top)/i.height*2-1),a=Math.hypot(r,o);a>1&&(r/=a,o/=a),this.setSpin(Math.abs(r)<.06?0:r,Math.abs(o)<.06?0:o)};this.spinBall.addEventListener("pointerdown",n=>{n.preventDefault(),t=n.pointerId;try{this.spinBall.setPointerCapture(n.pointerId)}catch{}e(n)}),this.spinBall.addEventListener("pointermove",n=>t===n.pointerId&&e(n)),this.spinBall.addEventListener("pointerup",()=>t=null),this.spinBall.addEventListener("dblclick",()=>this.setSpin(0,0))}setSpin(t,e){let n=Math.hypot(t,e);n>1&&(t/=n,e/=n),this.side=t,this.top=e,this.spinDot.style.left=50+this.side*40+"%",this.spinDot.style.top=50-this.top*40+"%",this.opts.onSpin(this.side,this.top)}buildSettings(t){let e=Ft("div","mysn-panel mysn-hidden");e.innerHTML=`
			<h3>Nastavenia</h3>
			<label>Kvalita obrazu
				<select data-k="quality">
					<option value="high">Vysok\xE1 (tiene)</option>
					<option value="low">N\xEDzka (pre slab\u0161ie zariadenia)</option>
				</select></label>
			<label>Hlasitos\u0165 <input type="range" min="0" max="1" step="0.05" data-k="volume"></label>
			<label class="mysn-check"><input type="checkbox" data-k="contact"> Detail dotyku g\xFA\u013E pri mieren\xED</label>
			<label class="mysn-check"><input type="checkbox" data-k="respot"> Vraca\u0165 farebn\xE9 gule na spoty</label>
			<p class="mysn-note">Zmena kvality sa prejav\xED po obnoven\xED str\xE1nky.</p>
			<button type="button" class="mysn-btn mysn-primary" data-close>Zavrie\u0165</button>`;for(let n of e.querySelectorAll("[data-k]")){let i=n.dataset.k;n.type==="checkbox"?n.checked=!!t[i]:n.value=String(t[i]),n.addEventListener(n.type==="range"?"input":"change",()=>{let r=n.type==="checkbox"?n.checked:n.type==="range"?parseFloat(n.value):n.value;this.opts.onAction("setting",{k:i,v:r})})}return e.querySelector("[data-close]").addEventListener("click",()=>e.classList.add("mysn-hidden")),e}buildMenu(){let t=Ft("div","mysn-menu mysn-hidden");return t.innerHTML=`<div class="mysn-menu-box">
			<h2>My Snooker</h2>
			<p class="mysn-menu-mode"></p>
			<div class="mysn-menu-note mysn-hidden"></div>
			<div class="mysn-menu-inv"></div>
			<div class="mysn-menu-btns"></div>
			<p class="mysn-note"></p>
		</div>`,this.menuMode=t.querySelector(".mysn-menu-mode"),this.menuNoteEl=t.querySelector(".mysn-menu-note"),this.menuInv=t.querySelector(".mysn-menu-inv"),this.menuBtns=t.querySelector(".mysn-menu-btns"),this.menuFoot=t.querySelector(".mysn-note"),this._menuKind="",t}setMenu(t,e){let n=t+"|"+(e||"");if(this._menuKind===n)return;this._menuKind=n;let i=this.menuBtns;i.innerHTML="";let r=this.opts.user;if(t==="guest"){this.menuMode.textContent="3D snooker v prehliada\u010Di";let l=Ft("a","mysn-btn mysn-login","Prihl\xE1si\u0165 sa");l.href=this.opts.loginUrl||"/wp-login.php",i.appendChild(l),this.menuFoot.textContent="Hra\u0165 m\xF4\u017Eu prihl\xE1sen\xED pou\u017E\xEDvatelia webu Hedlajner: tr\xE9ning aj partie s priate\u013Emi cez internet.";return}let o=()=>{let l=this.button("Hra\u0165 s priate\u013Eom","lobby","Partia cez internet s hr\xE1\u010Dom, ktor\xFD je pr\xE1ve v hre");return l.classList.add("mysn-friend"),l},a=()=>[this.button("Nastavenia","settings")];if(t==="match")this.btnResume=this.button("Pokra\u010Dova\u0165 v partii","resume"),this.btnResume.classList.add("mysn-primary"),this.menuMode.textContent=`Partia s hr\xE1\u010Dom ${e}`,i.append(this.btnResume,...a()),i.append(this.button("Preru\u0161i\u0165 partiu","pauseMatch","Partia sa ulo\u017E\xED, pokra\u010Dova\u0165 sa d\xE1 nesk\xF4r"),this.button("Vzda\u0165 partiu","resign"));else{this.menuMode.textContent=t==="solo"?"Hr\xE1 sa o najlep\u0161ie sk\xF3re":r?`Prihl\xE1sen\xFD: ${r.name}`:"Tr\xE9ning";let l=this.button("Hra\u0165",t==="solo"?"resume":"solo","O najlep\u0161ie sk\xF3re: cel\xFD frame pod\u013Ea pravidiel, rebr\xED\u010Dek pod\u013Ea bodov, pri rovnosti rozhoduje krat\u0161\xED \u010Das");l.classList.add("mysn-primary"),this.btnResume=l,i.append(l,this.button("Tr\xE9ning",t==="solo"?"training":"resume"),o(),this.button("Rebr\xED\u010Dek","leaderboard")),t!=="solo"&&i.appendChild(this.button("Nov\xE9 rozostavenie","reset")),i.append(...a())}i.appendChild(this.button("Sp\xE4\u0165 na web","home")),this.menuFoot.textContent="V hre sa my\u0161 zachyt\xED v okne. Esc ju uvo\u013En\xED a otvor\xED toto menu. F1 n\xE1poveda na n\xE1stenke, F2 stojan s t\xE1gami."}menuNote(t){this.menuNoteEl.textContent=t||"",this.menuNoteEl.classList.toggle("mysn-hidden",!t)}showMenu(t,e){this.menu.classList.toggle("mysn-hidden",!t),t||(this.panel.classList.add("mysn-hidden"),this.help.classList.add("mysn-hidden"),this.menuNote(""))}menuOpen(){return!this.menu.classList.contains("mysn-hidden")}showInvites(t){let e=t||[];this.menuInv.innerHTML="";for(let n of e){let i=Ft("div","mysn-inv",`${n.from.avatar?`<img src="${ve(n.from.avatar)}" alt="">`:""}<span><b>${ve(n.from.name)}</b> \u0165a poz\xFDva na partiu</span>`),r=this.button("Prija\u0165","accept","",n.id);r.classList.add("mysn-primary"),i.append(r,this.button("Odmietnu\u0165","decline","",n.id)),this.menuInv.appendChild(i)}this.toastBox||(this.toastBox=Ft("div","mysn-toast mysn-hidden"),this.root.appendChild(this.toastBox)),this.lobby&&!this.lobby.classList.contains("mysn-hidden")&&this._lobbyData&&this.renderLobby(this._lobbyData)}toast(t,e){this.toastBox||(this.toastBox=Ft("div","mysn-toast mysn-hidden"),this.root.appendChild(this.toastBox));let n=this.toastBox;if(n.innerHTML="",n.appendChild(Ft("span","",ve(t))),e){let i=this.button("Prija\u0165","accept","",e.id);i.classList.add("mysn-primary"),n.append(i,this.button("Odmietnu\u0165","decline","",e.id))}n.classList.remove("mysn-hidden"),clearTimeout(this._toastT),this._toastT=setTimeout(()=>n.classList.add("mysn-hidden"),e?3e4:6e3)}hideToast(){this.toastBox&&this.toastBox.classList.add("mysn-hidden")}openLobby(t){this.lobby||(this.lobby=Ft("div","mysn-panel mysn-lobby mysn-hidden"),this.root.appendChild(this.lobby)),this.lobby.classList.toggle("mysn-hidden",!t),t&&this._lobbyData&&this.renderLobby(this._lobbyData)}lobbyOpen(){return!!(this.lobby&&!this.lobby.classList.contains("mysn-hidden"))}renderLobby(t){if(this._lobbyData=t,!this.lobby||this.lobby.classList.contains("mysn-hidden"))return;let e=this.lobby;e.innerHTML="<h3>Hra\u0165 s priate\u013Eom</h3>";let n=l=>l.avatar?`<img src="${ve(l.avatar)}" alt="">`:"<i></i>";for(let l of t.invites||[]){let c=Ft("div","mysn-inv",`${n(l.from)}<span><b>${ve(l.from.name)}</b> \u0165a poz\xFDva na partiu</span>`),h=this.button("Prija\u0165","accept","",l.id);h.classList.add("mysn-primary"),c.append(h,this.button("Odmietnu\u0165","decline","",l.id)),e.appendChild(c)}let i=t.outgoing;if(i&&i.status==="invited"){let l=Ft("div","mysn-inv mysn-wait",`${n(i.to)}<span>\u010Cak\xE1m, k\xFDm <b>${ve(i.to.name)}</b> prijme pozv\xE1nku\u2026</span>`);l.appendChild(this.button("Zru\u0161i\u0165","cancelInvite")),e.appendChild(l)}e.appendChild(Ft("p","mysn-lobby-sub","Hr\xE1\u010Di pr\xE1ve v hre My Snooker"));let r=t.live||[];r.length||e.appendChild(Ft("p","mysn-note","Teraz nie je v hre nikto in\xFD. Zoznam sa obnovuje s\xE1m, ke\u010F niekto pr\xEDde, objav\xED sa tu."));let o=Ft("div","mysn-live");for(let l of r){let c=Ft("div","mysn-live-row",`${n(l)}<span><b>${ve(l.name)}</b>${l.busy?"<em>hr\xE1 partiu</em>":'<em class="mysn-live-on">v hre</em>'}</span>`),h=this.button("Pozva\u0165","invite","",l.id);h.disabled=!!l.busy||!!(i&&i.status==="invited"),c.appendChild(h),o.appendChild(c)}if(e.appendChild(o),(t.paused||[]).length){e.appendChild(Ft("p","mysn-lobby-sub","Rozohran\xE9 partie"));for(let l of t.paused){let c=new Date(l.updated*1e3).toLocaleString("sk-SK",{day:"numeric",month:"numeric",hour:"2-digit",minute:"2-digit"}),h=Ft("div","mysn-live-row",`${n(l.opp)}<span><b>${ve(l.opp.name)}</b><em>${l.scores[0]} : ${l.scores[1]}, ${ve(c)}</em></span>`);h.appendChild(this.button("Pokra\u010Dova\u0165","resumeMatch","Pokra\u010Dova\u0165 v partii (s\xFAper sa pripoj\xED, ke\u010F pr\xEDde do hry)",l.id)),e.appendChild(h)}}let a=Ft("div","mysn-lobby-foot");a.appendChild(Ft("span","mysn-note","Partia sa uklad\xE1 po ka\u017Edom \xFAdere. Pri v\xFDpadku internetu sa po n\xE1vrate pokra\u010Duje tam, kde sa skon\u010Dila.")),a.appendChild(this.button("Zavrie\u0165","lobbyClose")),e.appendChild(a)}celebrate(t){this.party||(this.party=Ft("div","mysn-party mysn-hidden"),this.root.appendChild(this.party));let e=this.party;if(!t){e.classList.add("mysn-hidden"),e.innerHTML="";return}let n=Math.max(0,Math.round(t.seconds)),i=`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`,r=t.points===1?"bod":t.points>1&&t.points<5?"body":"bodov",o=["#FACC15","#b3121f","#0f7a3a","#1747b5","#f08aa8","#6b3a1e","#f4f1e8"],a="";for(let u=0;u<70;u++)a+=`<i style="left:${(Math.random()*100).toFixed(1)}%;background:${o[u%o.length]};animation-delay:${(Math.random()*2.5).toFixed(2)}s;animation-duration:${(2.8+Math.random()*2.4).toFixed(2)}s;width:${6+Math.round(Math.random()*8)}px;height:${6+Math.round(Math.random()*8)}px;border-radius:${u%3?"50%":"2px"}"></i>`;let l=t.rank?`<p class="mysn-party-rank">${t.rank}. miesto v rebr\xED\u010Dku z ${t.players}${t.best?", tvoj najlep\u0161\xED frame!":""}</p>`:"";e.innerHTML=`<div class="mysn-party-conf">${a}</div><div class="mysn-party-box">
			<p class="mysn-party-kick">Frame dohran\xFD</p>
			<h2>Gratulujem!</h2>
			<div class="mysn-party-score"><b>${t.points}</b><span>${r}</span></div>
			<p class="mysn-party-time">za <b>${i}</b></p>
			<p class="mysn-party-meta">Najvy\u0161\u0161ia s\xE9ria ${t.brk}, \xFAdery ${t.shots}, fauly ${t.fouls}</p>
			${l}${t.error?`<p class="mysn-party-err">${ve(t.error)}</p>`:""}
			<div class="mysn-party-btns"></div>
		</div>`;let c=e.querySelector(".mysn-party-btns"),h=this.button("Hra\u0165 \u010Fal\u0161\xED frame","partyNext");h.classList.add("mysn-primary"),c.append(h,this.button("Rebr\xED\u010Dek","partyBoard")),e.classList.remove("mysn-hidden")}partyOpen(){return!!(this.party&&!this.party.classList.contains("mysn-hidden"))}leaderboardOpen(){return!!(this.board&&!this.board.classList.contains("mysn-hidden"))}showLeaderboard(t,e){this.board||(this.board=Ft("div","mysn-panel mysn-lobby mysn-hidden"),this.root.appendChild(this.board));let n=this.board;if(t===null){n.classList.add("mysn-hidden");return}let i=a=>{let l=Math.max(0,Math.round(a));return`${Math.floor(l/60)}:${String(l%60).padStart(2,"0")}`};if(n.innerHTML="<h3>Rebr\xED\u010Dek: o najlep\u0161ie sk\xF3re (F8)</h3>",e&&n.appendChild(Ft("div","mysn-menu-note",ve(e))),n.appendChild(Ft("p","mysn-note","Jeden hr\xE1\u010D hr\xE1 cel\xFD frame pod\u013Ea pravidiel. Rozhoduj\xFA body (fauly sa odpo\u010D\xEDtaj\xFA), pri rovnosti krat\u0161\xED \u010Das. V rebr\xED\u010Dku je najlep\u0161\xED frame ka\u017Ed\xE9ho hr\xE1\u010Da.")),t===void 0)n.appendChild(Ft("p","mysn-note","Na\u010D\xEDtavam rebr\xED\u010Dek\u2026"));else if(!t)n.appendChild(Ft("p","mysn-note","Rebr\xED\u010Dek sa nepodarilo na\u010D\xEDta\u0165."));else if(!t.top.length)n.appendChild(Ft("p","mysn-note","Zatia\u013E nikto nedohral frame. Bu\u010F prv\xFD."));else{let a=Ft("table","mysn-lb");a.innerHTML="<thead><tr><th>#</th><th>Hr\xE1\u010D</th><th>Body</th><th>Celkov\xFD \u010Das</th><th>S\xE9ria</th></tr></thead>";let l=Ft("tbody"),c=h=>{let u=Ft("tr",h.me?"mysn-lb-me":"",`<td>${h.rank}.</td><td>${ve(h.user.name)}</td><td><b>${h.points}</b></td><td>${i(h.seconds)}</td><td>${h.brk}</td>`);l.appendChild(u)};t.top.forEach(c),t.mine&&t.rank>10&&(l.appendChild(Ft("tr","mysn-lb-gap",'<td colspan="5">\u2026</td>')),c(t.mine)),a.appendChild(l),n.appendChild(a),n.appendChild(Ft("p","mysn-note",t.mine?`Tvoje miesto: ${t.rank}. z ${t.players}, dohran\xFDch framov: ${t.frames}.`:`Hr\xE1\u010Dov v rebr\xED\u010Dku: ${t.players}. Zatia\u013E nem\xE1\u0161 dohran\xFD \u017Eiadny frame.`))}let r=Ft("div","mysn-lobby-foot"),o=this.button("Hra\u0165","solo");o.classList.add("mysn-primary"),r.append(o,this.button("Zavrie\u0165","leaderboardClose")),n.appendChild(r),n.classList.remove("mysn-hidden")}setNet(t){this._net=t||"",this._lastGame&&this.sync(this._lastGame,this._lastCam)}buildHelp(){let t=Ft("div","mysn-panel mysn-help mysn-hidden");return t.innerHTML=`
			<h3>Ovl\xE1danie</h3>
			<ul>
				<li><b>Mierenie my\u0161ou:</b> kliknut\xEDm do hry sa my\u0161 zachyt\xED v okne (kurzor sa skryje). Potom sta\u010D\xED h\xFDba\u0165 my\u0161ou, tla\u010Didlo netreba. Pomal\xFD pohyb mieri ve\u013Emi jemne, so Shift e\u0161te jemnej\u0161ie. Esc my\u0161 uvo\u013En\xED a otvor\xED menu.</li>
				<li><b>Posun poh\u013Eadu:</b> dr\u017E prav\xE9 tla\u010Didlo my\u0161i a pohybom pos\xFAvaj poh\u013Ead hore, dole, do\u013Eava a doprava. Kamera sa pritom pozer\xE1 na gu\u013Eu, na ktor\xFA mieri\u0161, a ke\u010F nemieri\u0161 na \u017Eiadnu, na miesto pol metra pred bielou v smere mierenia. Ke\u010F tla\u010Didlo pust\xED\u0161, poh\u013Ead sa vr\xE1ti na p\xF4vodn\xE9 miesto. Ot\xE1\u010Dan\xEDm kolieska pribl\xED\u017Ei\u0161 alebo vzdiali\u0161.</li>
				<li><b>Po \xFAdere:</b> kamera sleduje bielu gu\u013Eu. Pohybom my\u0161i bez tla\u010Didla ot\xE1\u010Da\u0161 poh\u013Ead okolo nej (do\u013Eava a doprava, hore a dole).</li>
				<li><b>Biela do ruky my\u0161ou:</b> bielu pos\xFAva\u0161 pohybom my\u0161i, \u013Eav\xFDm klikom ju polo\u017E\xED\u0161.</li>
				<li><b>\xDAder my\u0161ou:</b> dr\u017E \u013Eav\xE9 tla\u010Didlo, ruka chyt\xED t\xE1go. My\u0161 k sebe t\xE1go odtiahne, pohyb dopredu ho posunie a pri dotyku bielej vystrel\xED. Sila je pod\u013Ea toho, ako r\xFDchlo pohne\u0161 dopredu. Pusten\xEDm \u013Eav\xE9ho tla\u010Didla \xFAder zru\u0161\xED\u0161.</li>
				<li><b>Miesto \xFAderu my\u0161ou:</b> stla\u010D a dr\u017E koliesko a pohybom my\u0161i pos\xFAvaj bod na bielej guli v\u013Eavo dole (hore gu\u013Ea dopredu, dole gu\u013Ea sp\xE4\u0165, do str\xE1n bo\u010Dn\xE1 fal\u0161a). Dvojklik kolieskom vr\xE1ti bod do stredu.</li>
				<li><b>Mierenie prstom:</b> za t\xE1gom \u0165ahaj do\u013Eava a doprava, \u0161\xEDpky na kl\xE1vesnici. V poh\u013Eade zhora klikni na miesto, kam chce\u0161 mieri\u0165, vo vo\u013Enej kamere na\u0148 kr\xE1tko \u0165ukni.</li>
				<li><b>Detail dotyku:</b> kruh dole ukazuje zhora okamih, ke\u010F sa biela dotkne gule. \xDAder ide v\u017Edy nahor, \u010Derven\xFD bod je miesto dotyku. Pomocn\xE9 \u010Diary a \u0161\xEDpky (kam p\xF4jdu gule) s\xFA vypnut\xE9, zapn\xFA\u0165 sa bud\xFA da\u0165 v hlavnom menu.</li>
				<li><b>Sila a \xFAder:</b> \u0165ahaj ukazovate\u013E sily vpravo nadol a pus\u0165. Alebo dr\u017E medzern\xEDk a pus\u0165 ho pri \u017Eelanej sile.</li>
				<li><b>Miesto \xFAderu:</b> klikni na bielu gu\u013Eu v\u013Eavo dole. Hore znamen\xE1 gu\u013Eu dopredu, dole gu\u013Eu sp\xE4\u0165, do str\xE1n bo\u010Dn\xFA fal\u0161u. Dvojklik vr\xE1ti stred.</li>
				<li><b>Kamera:</b> v\u017Edy za t\xE1gom, ot\xE1\u010Dan\xEDm kolieska pribl\xED\u017Ei\u0161 alebo vzdiali\u0161. Pri kladen\xED bielej do D sa kamera sama prepne zhora.</li>
				<li><b>Biela do ruky:</b> posu\u0148 bielu v D a potvr\u010F tla\u010Didlom Hotovo alebo kl\xE1vesom Enter.</li>
				<li><b>Kl\xE1vesy:</b> Z sp\xE4\u0165, B biela do ruky, R nov\xE9 rozostavenie, S presko\u010Di\u0165, H pomoc.</li>
			</ul>
			<button type="button" class="mysn-btn mysn-primary" data-close>Rozumiem</button>`,t.querySelector("[data-close]").addEventListener("click",()=>t.classList.add("mysn-hidden")),t}toggle(t){(t===this.panel?this.help:this.panel).classList.add("mysn-hidden"),t.classList.toggle("mysn-hidden")}drawContact(t,e,n,i=!1){let r=!!(n&&t&&t.ball);if(this.contact.classList.toggle("mysn-hidden",!r),!r){this._contactKey="";return}let o=t.ball.p,a=t.ghost,l=[i?1:0,e.toFixed(5),o.x.toFixed(4),o.z.toFixed(4),a.x.toFixed(4),a.z.toFixed(4)].join();if(l===this._contactKey)return;this._contactKey=l;let c=this.contactCanvas,h=this.contact.clientWidth||200,u=Math.min(2,window.devicePixelRatio||1);c.width!==Math.round(h*u)&&(c.width=c.height=Math.round(h*u));let d=c.getContext("2d"),f=c.width;d.setTransform(1,0,0,1,0,0),d.clearRect(0,0,f,f);let g=Math.cos(e),x=Math.sin(e),m=(a.x+o.x)/2,p=(a.z+o.z)/2,E=f*.17/.02625,y=(St,X)=>{let st=St-m,gt=X-p,dt=st*g+gt*x,Nt=st*-x+gt*g;return[f/2+Nt*E,f/2-dt*E]},v=o.x-a.x,k=o.z-a.z,P=Math.hypot(v,k)||1,L=v/P,D=k/P,w=Math.max(-1,Math.min(1,g*L+x*D)),_=Math.acos(w),S=Math.max(0,1-Math.sin(_)),z=(St,X,st,gt,dt)=>{d.beginPath(),d.setLineDash(dt||[]),d.strokeStyle=st,d.lineWidth=gt*u,d.moveTo(St[0],St[1]),d.lineTo(X[0],X[1]),d.stroke(),d.setLineDash([])},F=(St,X,st,gt,dt)=>{let Nt=y(St.x,St.z),kt=y(St.x+X*gt,St.z+st*gt);z(Nt,kt,dt,2.2);let A=Math.atan2(kt[1]-Nt[1],kt[0]-Nt[0]),J=8*u;d.beginPath(),d.fillStyle=dt,d.moveTo(kt[0],kt[1]),d.lineTo(kt[0]-J*Math.cos(A-.45),kt[1]-J*Math.sin(A-.45)),d.lineTo(kt[0]-J*Math.cos(A+.45),kt[1]-J*Math.sin(A+.45)),d.closePath(),d.fill()};if(d.fillStyle="#1d6b34",d.beginPath(),d.arc(f/2,f/2,f/2-u,0,Math.PI*2),d.fill(),d.save(),d.clip(),i){let St=6*.02625;z(y(a.x-g*St,a.z-x*St),y(a.x+g*St,a.z+x*St),"rgba(255,255,255,0.45)",1.2,[5*u,4*u]),z(y(a.x-L*.02625,a.z-D*.02625),y(o.x+L*5*.02625,o.z+D*5*.02625),"rgba(255,226,138,0.35)",1,[2*u,3*u])}let V=(St,X,st)=>{let[gt,dt]=y(St.x,St.z),Nt=.02625*E,kt=d.createRadialGradient(gt-Nt*.35,dt-Nt*.35,Nt*.1,gt,dt,Nt),A="#"+X.toString(16).padStart(6,"0");kt.addColorStop(0,st?"#ffffff":"rgba(255,255,255,0.55)"),kt.addColorStop(.25,A),kt.addColorStop(1,A),d.globalAlpha=st?.78:1,d.fillStyle=kt,d.beginPath(),d.arc(gt,dt,Nt,0,Math.PI*2),d.fill(),d.globalAlpha=1,d.lineWidth=1.5*u,d.strokeStyle=st?"rgba(255,255,255,0.95)":"rgba(0,0,0,0.55)",d.stroke()};V(o,Dn[t.ball.kind].color,!1),V(a,Dn.white.color,!0);let Q=g-w*L,W=x-w*D,ot=Math.hypot(Q,W);{let St=y(a.x-g*4.2*.02625,a.z-x*4.2*.02625),X=y(a.x-g*1.05*.02625,a.z-x*1.05*.02625);z(St,X,"rgba(255,255,255,0.7)",2.4,[6*u,4*u]);let st=Math.atan2(X[1]-St[1],X[0]-St[0]),gt=7*u;d.beginPath(),d.fillStyle="rgba(255,255,255,0.8)",d.moveTo(X[0],X[1]),d.lineTo(X[0]-gt*Math.cos(st-.5),X[1]-gt*Math.sin(st-.5)),d.lineTo(X[0]-gt*Math.cos(st+.5),X[1]-gt*Math.sin(st+.5)),d.closePath(),d.fill();let dt=t.ball.kind,Nt=dt==="black"?7829367:Dn[dt].color;F({x:o.x+L*.02625*1.05,z:o.z+D*.02625*1.05},L,D,.02625*2.4,"#"+Nt.toString(16).padStart(6,"0"))}i&&ot>.001&&(Q/=ot,W/=ot,F(a,Q,W,.02625*(.9+2.4*(1-w)),"#9fd3ff"));let K=y(a.x+L*.02625,a.z+D*.02625);d.fillStyle="#ff4d4d",d.beginPath(),d.arc(K[0],K[1],3.2*u,0,Math.PI*2),d.fill(),d.restore(),d.strokeStyle="rgba(255,255,255,0.35)",d.lineWidth=1.5*u,d.beginPath(),d.arc(f/2,f/2,f/2-u,0,Math.PI*2),d.stroke();let pt=null;for(let St of zi){let X=St.x-o.x,st=St.z-o.z,gt=X*L+st*D;if(gt<=0)continue;let dt=Math.abs(X*-D+st*L);dt<St.r*.75&&(!pt||gt<pt.pr)&&(pt={pr:gt,perp:dt,pk:St})}let Tt=g*D-x*L,yt=_*180/Math.PI,Bt=yt<.5?"pln\xFD z\xE1sah":Tt>0?"gu\u013Ea ide doprava":"gu\u013Ea ide do\u013Eava";this.contactInfo.innerHTML=`<span>Uhol <b>${yt.toFixed(1)}\xB0</b></span><span>Plnos\u0165 <b>${Math.round(S*100)} %</b></span>`+(i?`<span class="mysn-contact-where">${Bt}</span>`+(pt?'<span class="mysn-contact-pot">Smer do jamky</span>':'<span class="mysn-contact-miss">Mimo jamky</span>'):"")}setLock(t){this._lock=t,this._hintText()}setStroke(t){this._stroke=t,this._hintText()}_hintText(){let t=this._free?"My\u0161 je vo\u013En\xE1, k\xFDm dr\u017E\xED\u0161 Ctrl. Po pusten\xED sa vr\xE1ti na t\xE1go.":this._stroke?"Ruka dr\u017E\xED t\xE1go: my\u0161 k sebe odtiahne, dopredu vystrel\xED. Pusten\xEDm \u013Eav\xE9ho tla\u010Didla zru\u0161\xED\u0161.":this._lock?`${this._cueName}: mier pohybom my\u0161i${this._cueFine?" (Shift jemne)":""}, \u013Eav\xE9 tla\u010Didlo dr\u017E a striel. F1 n\xE1poveda, F2 t\xE1g\xE1, F3 krieda, F4 sk\xF3re, F6 dvere, Tab zhora, Esc menu.`:"Klikni do hry, my\u0161 sa zachyt\xED v okne. F1 n\xE1poveda, F2 t\xE1g\xE1, F3 krieda, F4 sk\xF3re, F6 dvere, Tab zhora.";this.hint.textContent=t,this.hint.classList.toggle("mysn-hint-on",!!(this._stroke||this._free))}readerOpen(){return!!(this.reader&&!this.reader.classList.contains("mysn-hidden"))}toggleReader(t,e){this.reader||(this.reader=Ft("div","mysn-reader mysn-hidden"),this.root.appendChild(this.reader));let n=this.reader;if(!t||this.readerOpen()){n.classList.add("mysn-hidden");return}let i=t==="rss"?"Spr\xE1vy z RSS":"HEDLAJNER",r=t==="rss"?"Najnov\u0161ie spr\xE1vy z m\xE9di\xED doma aj vo svete":"Hlavn\xE9 spr\xE1vy z domova a zo sveta",o=(e||[]).map((l,c)=>{let h=l.i?`<img src="${ve(l.i)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`:"",u=[l.s,l.c,l.d].filter(Boolean).map(ve).join("  |  ");return`<a class="mysn-rd-card${c===0&&l.i?" mysn-rd-lead":""}" href="${ve(l.u)}" target="_blank" rel="noopener">${h}<span class="mysn-rd-meta">${u}${l.n?"  |  +"+l.n+" m\xE9di\xE1":""}</span><b>${ve(l.t)}</b><p>${ve(l.e)}</p></a>`}).join("");n.innerHTML=`<div class="mysn-rd-head"><div><h2>${i}</h2><span>${r}</span></div></div><div class="mysn-rd-grid">${o||"<p>\u017Diadne spr\xE1vy.</p>"}</div>`;let a=this.button("Zavrie\u0165 (C alebo Esc)","reader");a.classList.add("mysn-primary"),n.querySelector(".mysn-rd-head").appendChild(a),n.classList.remove("mysn-hidden"),n.scrollTop=0}setFree(t){this._free=t,this._hintText()}setChalk(t){this._chalk=t,this._lastGame&&this.sync(this._lastGame,this._lastCam)}setCueInfo(t){this._cueName=t.name,this._cueFine=t.fine>0,this._hintText()}openPhone(t){if(!this.phone){if(!t)return;this.phone=Ft("div","mysn-phone mysn-hidden"),this.phone.innerHTML='<div class="mysn-phone-dev"><div class="mysn-phone-notch"></div><div class="mysn-phone-scr"></div></div>',this.phone.addEventListener("click",a=>{a.target===this.phone&&this.openPhone(!1)}),this.root.appendChild(this.phone)}let e=this.phone;if(!t){e.classList.add("mysn-hidden");return}let n=e.querySelector(".mysn-phone-scr"),i=this.opts.accountUrl;n.innerHTML="";let r=Ft("div","mysn-phone-bar","<b>M\xF4j \xFA\u010Det</b>"),o=this.button("Zavrie\u0165 (Esc)","phoneClose");if(r.appendChild(o),n.appendChild(r),!i)n.appendChild(Ft("p","mysn-phone-msg","M\xF4j \xFA\u010Det je len pre prihl\xE1sen\xFDch."));else{let a=document.createElement("iframe");a.className="mysn-phone-frame",a.src=i,a.title="M\xF4j \xFA\u010Det";let l=()=>{n.querySelector(".mysn-phone-frame")&&a.remove();let h=Ft("div","mysn-phone-msg","Nastavenie \xFA\u010Dtu sa tu ned\xE1 zobrazi\u0165. Otvor ho na webe:"),u=Ft("a","mysn-btn mysn-primary","Otvori\u0165 M\xF4j \xFA\u010Det");u.href=i,u.target="_blank",u.rel="noopener",h.appendChild(u),n.appendChild(h)};a.addEventListener("load",()=>{try{let h=a.contentDocument,u=h.createElement("style");u.textContent="#adminmenumain,#wpadminbar,#wpfooter,.notice-warning,.update-nag{display:none!important}#wpcontent,#wpbody-content{margin-left:0!important;padding-left:12px!important}html.wp-toolbar{padding-top:0!important}body{min-width:0!important}",h.head.appendChild(u)}catch{l()}}),n.appendChild(a);let c=Ft("a","mysn-phone-ext","Otvori\u0165 na webe");c.href=i,c.target="_blank",c.rel="noopener",n.appendChild(c)}e.classList.remove("mysn-hidden")}phoneOpen(){return!!(this.phone&&!this.phone.classList.contains("mysn-hidden"))}renderMixer(t,e){let n=Ft("div","mysn-mixer"),i=e.station,r=Ft("div","mysn-news-head",`<b>R\xE1dio${i?": "+ve(i.name):""}</b>`),o=this.button(e.on?"Vypn\xFA\u0165 (P)":"Zapn\xFA\u0165 (P)","radioToggle");o.classList.add("mysn-primary"),r.appendChild(o),n.appendChild(r),n.appendChild(Ft("p","mysn-mixer-status",ve(e.status||(e.stations.length?"Vyber stanicu alebo stla\u010D Zapn\xFA\u0165.":"V My Player nie s\xFA \u017Eiadne r\xE1di\xE1."))));let a={vol:"Hlasitos\u0165",bass:"Basy",treble:"V\xFD\u0161ky",bal:"Vyv\xE1\u017Eenie"};for(let c of["vol","bass","treble","bal"]){let h=Ft("label","mysn-mixer-row",`<span>${a[c]}</span>`),u=document.createElement("input");u.type="range",u.min="0",u.max="1",u.step="0.01",u.value=String(e.params[c]),u.addEventListener("input",d=>{d.stopPropagation(),this.opts.onAction("radioSet",{k:c,v:parseFloat(u.value)})}),h.appendChild(u),n.appendChild(h)}let l=Ft("div","mysn-news mysn-stations");e.stations.forEach((c,h)=>{let u=Ft("button","mysn-news-item"+(h===e.index&&e.on?" mysn-on":""),`<span>${ve([c.city,c.genre].filter(Boolean).join(", ")||"R\xE1dio")}</span>${ve(c.name)}`);u.type="button",u.addEventListener("click",d=>{d.stopPropagation(),this.opts.onAction("radioPick",h)}),l.appendChild(u)}),n.appendChild(l),t.appendChild(n),this._mixerBox=n}showView(t,e,n,i){this.viewBox||(this.viewBox=Ft("div","mysn-view mysn-hidden"),this.root.appendChild(this.viewBox));let r=this.viewBox;if(r.classList.toggle("mysn-hidden",!t),r.classList.toggle("mysn-view-news",t==="news"||t==="magazine"||t==="chair"||t==="mixer"),this.root.classList.toggle("mysn-viewing",!!t),!t)return;if(r.innerHTML="",t==="rack"){r.appendChild(Ft("h3","","Stojan s t\xE1gami"));let c=Ft("div","mysn-cues");e.forEach((h,u)=>{let d=Ft("button","mysn-cue"+(h.id===n?" mysn-on":""),`<span class="mysn-cue-n">${u+1}</span><b>${h.name}</b><span class="mysn-cue-cat">${h.category}</span><span>\u0160pi\u010Dka ${h.tip}, sila ${Math.round(h.power*100)} %</span><span>D\u013A\u017Eka ${Math.round(h.len*100)} cm, Shift ${h.fine>0?"\xE1no":"nie"}</span><em>${h.note}</em>`);d.type="button",d.addEventListener("click",f=>{f.stopPropagation(),this.opts.onAction("cuePick",h.id)}),c.appendChild(d)}),r.appendChild(c)}let o=Ft("div","mysn-view-foot"),a=c=>{let h=Ft("a","mysn-news-item",`<span>${ve(c.s?c.s+(c.c?", "+c.c:""):c.c||"")}</span>${ve(c.t)}`);return h.href=c.u,h.target="_blank",h.rel="noopener",h};if(t==="mixer"&&i&&i.radio&&this.renderMixer(r,i.radio),t==="chair"&&i){let c=Ft("div","mysn-news"),h=(u,d,f,g)=>{if(!d||!d.length)return;let x=Ft("div","mysn-news-head",`<b>${u}</b>`),m=this.button(f,g);m.classList.add("mysn-primary"),x.appendChild(m),c.appendChild(x),d.slice(0,9).forEach(p=>c.appendChild(a(p)))};h("HEDLAJNER",i.news,"Cel\xE9 (C)","reader"),h("Spr\xE1vy z RSS",i.rss,"Cel\xE9 (V)","readerRss"),r.appendChild(c)}if((t==="news"||t==="magazine")&&i&&i.length){let c=this.button("\u010C\xEDta\u0165 na cel\xFA obrazovku (C)","reader");c.classList.add("mysn-primary"),r.appendChild(c);let h=Ft("div","mysn-news");i.slice(0,12).forEach(u=>{let d=Ft("a","mysn-news-item",`<span>${ve(u.s?u.s+(u.c?", "+u.c:""):u.c||"")}</span>${ve(u.t)}`);d.href=u.u,d.target="_blank",d.rel="noopener",h.appendChild(d)}),r.appendChild(h)}let l={chair:"Poh\u013Ead z kresla: pohybom my\u0161i sa rozhliada\u0161, kolieskom pribli\u017Euje\u0161 (klikni, ak sa my\u0161 nezachytila). Vpravo spr\xE1vy: dr\u017E Ctrl a klikni na \u010Dl\xE1nok, C noviny Hedlajner a V spr\xE1vy z RSS na cel\xFA obrazovku. Pri hre o sk\xF3re \u010Das stoj\xED. F7 alebo Enter: sp\xE4\u0165 do hry.",news:"Titulka webu Hedlajner. Klik na titulok otvor\xED \u010Dl\xE1nok. F8, Enter alebo Esc: sp\xE4\u0165 do hry.",magazine:"Spr\xE1vy z RSS kan\xE1lov. Klik na titulok otvor\xED spr\xE1vu. F9, Enter alebo Esc: sp\xE4\u0165 do hry.",rack:"\u0160\xEDpky v\u013Eavo a vpravo vyberaj\xFA t\xE1go. Enter, F2 alebo Esc: sp\xE4\u0165 do hry.",board:"F1, Enter alebo Esc: sp\xE4\u0165 do hry.",score:"F4, Enter alebo Esc: sp\xE4\u0165 do hry.",bar:"Poh\u013Ead z baru: my\u0161ou sa rozhliada\u0161, kolieskom pribli\u017Euje\u0161. Dr\u017E Ctrl a klikni na telef\xF3n (alebo M): zv\xE4\u010D\u0161\xED sa M\xF4j \xFA\u010Det. Pri hre o sk\xF3re \u010Das stoj\xED. F10 alebo Enter: sp\xE4\u0165 do hry.",mixer:"Mixpult: \u0161\xEDpky v\u013Eavo a vpravo menia stanicu, hore a dole hlasitos\u0165, P zapne alebo vypne r\xE1dio. Zvuk ide z reproduktorov v herni. F9, Enter alebo Esc: sp\xE4\u0165 do hry.",trophies:"Rebr\xED\u010Dek o najlep\u0161ie sk\xF3re: poh\xE1re pre troch najlep\u0161\xEDch, vpravo 4. a\u017E 10. miesto (body a celkov\xFD \u010Das). F8, Enter alebo Esc: sp\xE4\u0165 do hry.",chalk:"Kriedujem \u0161pi\u010Dku t\xE1ga. Fal\u0161e bud\xFA 3 \xFAdery 5x silnej\u0161ie."};if(o.appendChild(Ft("span","",l[t]||"")),t!=="chalk"){let c=this.button("Sp\xE4\u0165 do hry","back");c.classList.add("mysn-primary"),o.appendChild(c)}r.appendChild(o)}showPower(t){let e=Math.round(t*100);this.powerFill.style.height=e+"%",this.powerKnob.style.top=e+"%",this.powerVal.textContent=e+" %"}sync(t,e){this._lastGame=t,this._lastCam=e;let n=t.stats,i=t.match;this.root.classList.toggle("mysn-online",!!i),this.modeLabel.textContent=i?"Partia":t.solo?"O najlep\u0161ie sk\xF3re":"Tr\xE9ning";let r=t.solo;if(r&&!i){let c=Math.max(0,Math.round(r.time));this.stats.innerHTML=`<span>Body <b>${t.soloScore}</b></span><span>S\xE9ria <b>${r.rules.brk}</b></span><span>Najvy\u0161\u0161ia <b>${r.best}</b></span><span>\u010Cas <b>${Math.floor(c/60)}:${String(c%60).padStart(2,"0")}</b></span><span>Hr\xE1 sa na <b>${ve(t.onText())}</b></span><span>Fauly <b>${r.fouls}</b></span><span class="${this._chalk>0?"mysn-chalk-on":"mysn-chalk-off"}">Krieda <b>${this._chalk>0?this._chalk:"F3"}</b></span>`}else if(i&&i.rules){let c=d=>ve(String(i.players[d].name).slice(0,16)),h=i.rules,u=d=>h.turn===d&&!h.over?" mysn-turn":"";this.stats.innerHTML=`<span class="mysn-sc${u(i.me)}">${c(i.me)} <b>${h.scores[i.me]}</b></span><span class="mysn-sc${u(1-i.me)}">${c(1-i.me)} <b>${h.scores[1-i.me]}</b>${i.players[1-i.me].online===!1?" <i>mimo</i>":""}</span><span>Na rade <b>${h.turn===i.me?"ty":c(h.turn)}</b></span><span>Hr\xE1 sa na <b>${ve(t.onText())}</b></span><span>S\xE9ria <b>${h.brk}</b></span><span class="${this._chalk>0?"mysn-chalk-on":"mysn-chalk-off"}">Krieda <b>${this._chalk>0?this._chalk:"F3"}</b></span>`}else this.stats.innerHTML=`<span>\xDAdery <b>${n.shots}</b></span><span>Spadnut\xE9 <b>${n.points>=0?n.potted:0}</b></span><span>Body <b>${n.points}</b></span><span>S\xE9ria <b>${n.run}</b></span><span>Najlep\u0161ia <b>${n.best}</b></span><span class="${this._chalk>0?"mysn-chalk-on":"mysn-chalk-off"}">Krieda <b>${this._chalk>0?this._chalk:"F3"}</b></span>`;let o=t.state,a=o==="place"?"Posu\u0148 bielu gu\u013Eu v D a potvr\u010F tla\u010Didlom Hotovo.":o==="watch"&&!t.message?"Na rade je s\xFAper.":o==="wait"?"\u010Cak\xE1m na v\xFDsledok s\xFAperovho \xFAderu\u2026":t.message;this.msg.textContent=[this._net,a].filter(Boolean).join("  "),this.msg.classList.toggle("mysn-hidden",!this.msg.textContent);let l=t.state;this.btnPlace.classList.toggle("mysn-hidden",l!=="place"),this.btnSkip.classList.toggle("mysn-hidden",l!=="moving"),this.btnUndo.disabled=l==="moving"||!t.history.length||!!i||!!r,this.btnHand.disabled=l!=="aim"||!!i||!!r,this.btnReset.disabled=!!i||!!r,this.powerBox.classList.toggle("mysn-off",l!=="aim");for(let c of Object.keys(this.camBtns))this.camBtns[c].classList.toggle("mysn-on",c===e)}};var Xo=class{constructor(){this.balls=Rs(),this.physics=new Ao(this.balls),this.state="aim",this.dir=0,this.history=[],this.respot=!0,this.stats={shots:0,potted:0,points:0,best:0,run:0},this.lastPots=[],this.message="",this.listeners=[]}get cue(){return this.balls[0]}on(t){this.listeners.push(t)}emit(t,e){for(let n of this.listeners)n(t,e)}reset(){let t=Rs();for(let e=0;e<t.length;e++)Object.assign(this.balls[e],t[e]);this.history=[],this.stats={shots:0,potted:0,points:0,best:this.stats.best,run:0},this.state="aim",this.dir=0,this.message="Nov\xE9 rozostavenie.",this.emit("change")}canShoot(){return this.state==="aim"}shoot(t,e=0,n=0){return this.canShoot()?(this.history.push({snap:ar(this.balls),stats:{...this.stats},dir:this.dir}),this.history.length>30&&this.history.shift(),this.physics.events=[],this.physics.firstContact=null,this.lastPots=[],Ro(this.cue,this.dir,t,e,n),this.stats.shots++,this.state="moving",this.message="",this.emit("shot",{power:t}),!0):!1}tick(t){if(this.state!=="moving")return[];let e=this.physics.advance(t),n=this.physics.events;this.physics.events=[];for(let i of n)i.type==="pot"&&this.lastPots.push(this.balls[i.a]);return e||this.settle(),n}settle(){let t=this.lastPots,e=t.includes(this.cue),n=0;for(let r of t)r.kind!=="white"&&(n+=Dn[r.kind].value);let i=t.filter(r=>r.kind!=="white").length;if(this.stats.potted+=i,this.stats.points+=n,i>0&&!e?(this.stats.run+=n,this.stats.best=Math.max(this.stats.best,this.stats.run)):this.stats.run=0,this.respot)for(let r of t)r.kind!=="white"&&r.kind!=="red"&&this.spotColour(r);this.balls.every(r=>r.kind==="white"||!r.on)?this.message="St\xF4l je \u010Dist\xFD. V\xFDborne! Stla\u010D \u201ENov\xE9 rozostavenie\u201C.":e?this.message="Biela spadla. Polo\u017E ju do D.":i?this.message=t.filter(r=>r.kind!=="white").map(r=>Dn[r.kind].name).join(", ")+(i>1?" v jamk\xE1ch.":" v jamke."):this.physics.firstContact||(this.message="Biela netrafila \u017Eiadnu gu\u013Eu."),e?this.startPlace():this.state="aim",this.emit("settle",{pots:t,points:n}),this.emit("change")}spotColour(t){let e=["black","pink","blue","brown","green","yellow"],n=(o,a)=>Po(this.balls,o,a,t),i=null,r=pn[t.kind];if(n(r.x,r.z))i=r;else for(let o of e)if(n(pn[o].x,pn[o].z)){i=pn[o];break}if(!i){for(let o=r.x;o<1.78;o+=.002)if(n(o,r.z)){i={x:o,z:r.z};break}}i=i||r,t.p.x=i.x,t.p.z=i.z,t.on=!0,t.potted=null,t.moving=!1,t.v.x=t.v.z=0,t.w.x=t.w.y=t.w.z=0}startPlace(){let t=this.cue;t.on=!0,t.potted=null,t.moving=!1,t.v.x=t.v.z=0,t.w.x=t.w.y=t.w.z=0;let e=[[ze-.1,0],[ze-.1,.15],[ze-.1,-.15],[ze-.2,0]].find(([n,i])=>Po(this.balls,n,i,t))||[ze-.15,.05];t.p.x=e[0],t.p.z=e[1],this.state="place",this.emit("change")}movePlace(t,e){if(this.state!=="place")return!1;let n=Math.min(t,ze),i=e,r=n-ze,o=Math.hypot(r,i),a=pi-5e-4;return o>a&&(n=ze+r/o*a,i=i/o*a),!cu(n,i)||!Po(this.balls,n,i,this.cue)?!1:(this.cue.p.x=n,this.cue.p.z=i,!0)}confirmPlace(){this.state==="place"&&(this.state="aim",this.message="",this.emit("change"))}ballInHand(){this.state==="aim"&&(this.state="place",this.emit("change"))}undo(){if(this.state==="moving"||!this.history.length)return!1;let t=this.history.pop();return lr(this.balls,t.snap),this.stats=t.stats,this.dir=t.dir,this.state="aim",this.message="\xDAder vr\xE1ten\xFD.",this.emit("change"),!0}finish(){if(this.state!=="moving")return[];let t=[];for(let e=0;e<600&&this.state==="moving";e++)t=t.concat(this.tick(.05));return t}aimAtNearest(){let t=this.cue,e=null,n=1/0;for(let i of this.balls){if(i===t||!i.on)continue;let r=Math.hypot(i.p.x-t.p.x,i.p.z-t.p.z);r<n&&r>2*.02625&&(n=r,e=i)}e&&(this.dir=Math.atan2(e.p.z-t.p.z,e.p.x-t.p.x))}};var cr={red:1,yellow:2,green:3,brown:4,blue:5,pink:6,black:7},hr=["yellow","green","brown","blue","pink","black"],Kn={red:"\u010Derven\xE1",yellow:"\u017Elt\xE1",green:"zelen\xE1",brown:"hned\xE1",blue:"modr\xE1",pink:"ru\u017Eov\xE1",black:"\u010Dierna",white:"biela",colour:"farba"};function Su(s=0){return{scores:[0,0],turn:s,on:"red",brk:0,over:!1,winner:null}}function xc(s){return s==="red"?"\u010Derven\xE1":s==="colour"?"\u013Eubovo\u013En\xE1 farba":s==="done"?"koniec framu":Kn[s]||s}function _c(s,t){if(s.on==="red"||s.on==="colour")return t*8+(s.on==="colour"?7:0)+27;let e=hr.indexOf(s.on);return e<0?0:hr.slice(e).reduce((n,i)=>n+cr[i],0)}function yc(s,t){let e={...s,scores:[...s.scores]},n=t.first||null,i=t.pots||[],r=i.includes("white"),o=i.filter(p=>p!=="white"),a=t.reds,l=e.turn,c="",h=0,u=4,d=[],f=n&&n!=="white"?n:null,g=p=>{p&&cr[p]&&(u=Math.max(u,cr[p]))};if(e.on==="red"){f?f!=="red"&&(c=`Prv\xE1 trafen\xE1 gu\u013Ea mus\xED by\u0165 \u010Derven\xE1 (trafen\xE1 ${Kn[f]}).`,g(f)):c="Biela netrafila \u017Eiadnu gu\u013Eu.";for(let p of o)p!=="red"&&(d.push(p),g(p),c=c||`Spadla ${Kn[p]}, hralo sa na \u010Derven\xFA.`);!c&&!r&&(h=o.filter(p=>p==="red").length)}else if(e.on==="colour"){let p=f&&f!=="red"?f:null;f?p||(c="Po \u010Dervenej treba trafi\u0165 farbu (trafen\xE1 \u010Derven\xE1)."):c="Biela netrafila \u017Eiadnu gu\u013Eu.",g(p);for(let E of o)E!=="red"&&d.push(E),E!==p&&(g(E==="red"?null:E),c=c||`Spadla ${Kn[E]}, nominovan\xE1 bola ${Kn[p]}.`);!c&&!r&&o.includes(p)&&(h=cr[p])}else{let p=e.on;g(p),f?f!==p&&(c=`Prv\xE1 trafen\xE1 gu\u013Ea mus\xED by\u0165 ${Kn[p]} (trafen\xE1 ${Kn[f]}).`,g(f)):c="Biela netrafila \u017Eiadnu gu\u013Eu.";for(let E of o)g(E),E!==p&&(c=c||`Spadla ${Kn[E]}, hralo sa na ${Kn[p]}.`);!c&&!r&&o.includes(p)&&(h=cr[p]);for(let E of o)E!=="red"&&!(E===p&&h>0)&&d.push(E)}r&&!c&&(c="Biela spadla do jamky.");let x="";if(c)e.scores[1-l]+=u,e.turn=1-l,e.brk=0,x=`Faul: ${c} S\xFAper dost\xE1va ${u} ${u<5?"body":"bodov"}.`,(e.on==="red"||e.on==="colour")&&(e.on=a>0?"red":"yellow");else if(h>0){if(e.scores[l]+=h,e.brk+=h,e.on==="red")e.on="colour";else if(e.on==="colour")e.on=a>0?"red":"yellow";else{let p=hr.indexOf(e.on);e.on=p<hr.length-1?hr[p+1]:"done"}x=`+${h}, s\xE9ria ${e.brk}.`}else e.turn=1-l,e.brk=0,(e.on==="red"||e.on==="colour")&&(e.on=a>0?"red":"yellow"),x="Bez bodov, na rade je s\xFAper.";let m=s.on==="black";if(e.on==="done"||m&&c){if(e.scores[0]===e.scores[1])return e.on="black",e.turn=c?e.turn:1-l,d.includes("black")||d.push("black"),x+=" Rem\xEDza, \u010Dierna sa vracia na spot.",{state:e,points:h,foul:!!c,penalty:c?u:0,respot:d,inHand:!0,msg:x};e.over=!0,e.on="done",e.winner=e.scores[0]>e.scores[1]?0:1;let p=d.indexOf("black");p>=0&&d.splice(p,1)}return{state:e,points:h,foul:!!c,penalty:c?u:0,respot:d,inHand:r,msg:x}}var ur="mySnookerSolo",qo=class extends Xo{constructor(){super(),this.match=null,this.remote=!1,this.onNet=null,this.solo=null,this.onSolo=null}startSolo(t){this.match=null,this.remote=!1,this.history=[];let e=null;if(!t)try{e=JSON.parse(window.localStorage.getItem(ur)||"null")}catch{e=null}if(e&&e.balls&&e.rules&&!e.done){if(lr(this.balls,e.balls),this.solo={rules:e.rules,time:e.time||0,shots:e.shots||0,fouls:e.fouls||0,best:e.best||0,done:!1},this.message="Pokra\u010Duje\u0161 v rozohranom frame.",e.inHand){this.startPlace();return}this.state="aim"}else{let n=Rs();for(let i=0;i<n.length;i++)Object.assign(this.balls[i],n[i]);this.solo={rules:Su(0),time:0,shots:0,fouls:0,best:0,done:!1},this.message="Nov\xFD frame: potop \u010Do najviac bodov. Rozb\xEDja\u0161 z D.",this.saveSolo(!0),this.startPlace();return}this.aimAtNearest(),this.emit("change")}get soloScore(){let t=this.solo&&this.solo.rules;return t?Math.max(0,t.scores[0]-t.scores[1]):0}saveSolo(t){if(this.solo)try{if(this.solo.done){window.localStorage.removeItem(ur);return}let e=this.solo;window.localStorage.setItem(ur,JSON.stringify({balls:ar(this.balls),rules:e.rules,time:Math.round(e.time),shots:e.shots,fouls:e.fouls,best:e.best,inHand:!!t}))}catch{}}saveSoloTime(){let t=this.solo;if(!(!t||t.done))try{let e=JSON.parse(window.localStorage.getItem(ur)||"null");e&&!e.done&&(e.time=Math.round(t.time),window.localStorage.setItem(ur,JSON.stringify(e)))}catch{}}stopSolo(){this.solo&&this.saveSolo(this.state==="place"),this.solo=null,super.reset()}settleSolo(){let t=this.solo,e=this.lastPots.map(l=>l.kind),n=this.balls.filter(l=>l.kind==="red"&&l.on).length,i=this.physics.firstContact,r=yc(t.rules,{first:i?i.kind:null,pots:e,reds:n});for(let l of r.respot){let c=this.balls.find(h=>h.kind===l);c&&this.spotColour(c)}let o={...r.state,turn:0};r.foul&&(t.fouls++,o.brk=0),t.rules=o,t.shots++,t.best=Math.max(t.best,o.brk);let a=this.soloScore;if(o.over||o.on==="done"){t.done=!0,t.rules.over=!0,this.state="over",this.message=`Frame je dohran\xFD: ${a} ${a===1?"bod":a<5&&a>1?"body":"bodov"} za ${vc(t.time)}, najvy\u0161\u0161ia s\xE9ria ${t.best}.`,this.saveSolo(!1),this.emit("settle",{pots:this.lastPots,points:r.points}),this.emit("change"),this.onSolo&&this.onSolo({points:a,seconds:Math.round(t.time),shots:t.shots,fouls:t.fouls,brk:t.best});return}if(this.message=r.points>0?`+${r.points}, s\xE9ria ${o.brk}.`:"Bez bodov, s\xE9ria sa skon\u010Dila.",r.foul&&(this.message=`Faul: ${r.msg.replace(/^Faul: /,"").replace(/ Súper dostáva (\d+) (body|bodov)\./,"")} M\xEDnus ${r.penalty} ${r.penalty<5?"body":"bodov"}.`),this.emit("settle",{pots:this.lastPots,points:r.points}),r.inHand){this.saveSolo(!0),this.startPlace();return}this.state="aim",this.saveSolo(!1),this.emit("change")}get online(){return!!this.match}get myTurn(){let t=this.match;return!t||t.turn===t.me&&!t.rules.over}canShoot(){return super.canShoot()&&(!this.match||this.myTurn&&!this.remote&&this.match.status==="active")}startMatch(t){this.solo&&this.stopSolo(),this.match={id:t.id,me:t.me,seq:-1,turn:0,rules:null,inHand:!1,players:t.players,status:t.status},this.history=[],this.remote=!1,this.applyState(t.state,t.seq)}endMatch(){this.match=null,this.solo=null,this.remote=!1,this.reset()}applyState(t,e){let n=this.match;if(t){if(t.balls)lr(this.balls,t.balls);else{let i=Rs();for(let r=0;r<i.length;r++)Object.assign(this.balls[r],i[r])}for(let i of this.balls)i.moving=!1;if(n.seq=e,n.rules={...t.rules,scores:[...t.rules.scores]},n.turn=n.rules.turn,n.inHand=!!t.inHand,this.remote=!1,this.message=t.msg||"",n.rules.over)this.state="over";else if(n.turn===n.me){if(n.inHand){this.startPlace();return}this.state="aim",this.aimAtNearest()}else n.inHand&&this.startPlace(),this.state="watch";this.emit("change")}}shoot(t,e=0,n=0){if(!this.canShoot())return!1;let i=this.cue,r={dir:this.dir,power:t,side:e,top:n,cx:i.p.x,cz:i.p.z};return super.shoot(t,e,n)?(this.match&&this.onNet&&this.onNet("shot",{seq:this.match.seq+1,shot:r}),!0):!1}playRemote(t,e=!1){let n=this.cue;n.on=!0,n.potted=null,n.p.x=t.cx,n.p.z=t.cz,this.dir=t.dir,this.physics.events=[],this.physics.firstContact=null,this.lastPots=[],Ro(n,t.dir,t.power,t.side,t.top),this.remote=!e,this.state="moving",this.message="",this.emit("shot",{power:t.power})}settle(){if(this.solo&&!this.match){this.settleSolo();return}if(!this.match){super.settle();return}if(this.remote){this.remote=!1,this.state="wait",this.emit("change");return}let t=this.match,e=this.lastPots.map(c=>c.kind),n=this.balls.filter(c=>c.kind==="red"&&c.on).length,i=this.physics.firstContact,r=yc(t.rules,{first:i?i.kind:null,pots:e,reds:n});for(let c of r.respot){let h=this.balls.find(u=>u.kind===c);h&&this.spotColour(h)}r.inHand&&(this.cue.on=!1);let o=t.players.map(c=>c.name),a={balls:ar(this.balls),rules:r.state,inHand:r.inHand,msg:`${o[t.me]}: ${r.msg}`+(r.state.over?` Koniec partie, v\xED\u0165az: ${o[r.state.winner]}.`:r.state.turn!==t.me?` Na rade je ${o[r.state.turn]}.`:""),last:{by:t.me,points:r.points,foul:r.foul,penalty:r.penalty}},l=t.seq+1;this.applyState(a,l),this.emit("settle",{pots:this.lastPots,points:r.points}),this.onNet&&this.onNet("settle",{seq:l,state:a,points:r.points,foul:r.foul})}onText(){return this.solo?xc(this.solo.rules.on):this.match&&this.match.rules?xc(this.match.rules.on):""}undo(){return this.match||this.solo?!1:super.undo()}reset(){this.match||this.solo||super.reset()}ballInHand(){!this.match&&!this.solo&&super.ballInHand()}};function vc(s){let t=Math.max(0,Math.round(s)),e=Math.floor(t/3600),n=Math.floor(t%3600/60),i=String(t%60).padStart(2,"0");return e?`${e}:${String(n).padStart(2,"0")}:${i}`:`${n}:${i}`}var Mc=class{constructor(t){this.base=t.restUrl||"/wp-json/my-snooker/v1/",this.nonce=t.nonce||"",this.down=!1}async call(t,e,n="POST"){let i;try{i=await fetch(this.base+t,{method:n,credentials:"same-origin",cache:"no-store",headers:{"Content-Type":"application/json","X-WP-Nonce":this.nonce},body:e?JSON.stringify(e):void 0})}catch{this.down=!0;let a=new Error("Spojenie so serverom sa preru\u0161ilo.");throw a.net=!0,a}this.down=!1;let r=await i.json().catch(()=>null);if(!i.ok){let o=new Error(r&&r.message||"Chyba servera "+i.status);throw o.status=i.status,o}return r}},Yo=class{constructor(t,e,n){this.cfg=t,this.net=new Mc(t),this.game=e,this.hooks=n,this.data={live:[],invites:[],outgoing:null,paused:[]},this.lobbyOpen=!1,this.matchId=0,this.info=null,this.queue=[],this.sending=!1,this.played=new Set,this.pendingInfo=null,this.lastAimv=-1,this.aimTarget=null,this._aimSent="",this._aimT=0,this._pollT=0,this._polling=!1,this.oppOnline=!0,e.onNet=(i,r)=>this.send(i,r),this.ping(),this._pingTimer=setInterval(()=>this.ping(),5e3)}get inMatch(){return!!this.game.match}async ping(){try{let t=await this.net.call("ping",{state:this.inMatch?"match":this.lobbyOpen?"lobby":"training"});t.nonce&&(this.net.nonce=t.nonce);let e=(this.data.invites||[]).map(i=>i.id).join(",");this.data=t;let n=(t.invites||[]).map(i=>i.id).join(",");n&&n!==e&&!this.inMatch&&this.hooks.invite(t.invites[0]),t.outgoing&&t.outgoing.status==="declined"&&this._waitFor===t.outgoing.id&&(this._waitFor=0,this.hooks.toast(`${t.outgoing.to.name}: pozv\xE1nka odmietnut\xE1.`)),t.match&&!this.inMatch&&this.join(t.match),this.hooks.lobby(t)}catch{this.hooks.status()}}async invite(t){try{let e=await this.net.call("invite",{user:t});this._waitFor=e.id,await this.ping()}catch(e){this.hooks.toast(e.message)}}async cancelInvite(){let t=this.data.outgoing;t&&(this._waitFor=0,await this.net.call("cancel",{id:t.id}).catch(()=>null),await this.ping())}async answer(t,e){try{await this.net.call("answer",{id:t,accept:e?1:0}),this.data.invites=(this.data.invites||[]).filter(n=>n.id!==t),e?await this.join(t):await this.ping()}catch(n){this.hooks.toast(n.message),this.ping()}}async resume(t){try{await this.net.call("resume",{id:t}),await this.join(t)}catch(e){this.hooks.toast(e.message)}}async leave(t){let e=this.matchId;e&&(await this.flush(),await this.net.call("leave",{id:e,mode:t}).catch(()=>null),this.stopMatch(t==="resign"?"Partia je vzdan\xE1.":"Partia je preru\u0161en\xE1. Pokra\u010Dova\u0165 sa d\xE1 v ponuke Hra\u0165 s priate\u013Eom."))}async join(t){if(!this._joining){this._joining=!0;try{let e=await this.net.call("match/"+t+"?t="+Date.now(),null,"GET");if(e.status!=="active"){this.hooks.toast(e.status==="paused"?"Partia je preru\u0161en\xE1.":"Partia u\u017E skon\u010Dila.");return}this.matchId=e.id,this.info=e,this.played=new Set,this.queue=[],this.lastAimv=e.aimv,this.game.startMatch(e),this.hooks.started(e),this.recover(e),this.oppOnline=e.players[1-e.me].online}catch(e){this.hooks.toast(e.message)}finally{this._joining=!1}}}recover(t){let e=t.shot;e&&e.seq===t.seq+1&&(this.played.add(e.seq),this.game.playRemote(e,e.by===t.me))}stopMatch(t){this.matchId=0,this.info=null,this.queue=[],this.aimTarget=null,this.game.endMatch(),this.hooks.ended(t)}send(t,e){this.matchId&&(this.queue.push({type:t,d:{id:this.matchId,...e}}),this.flush())}async flush(){return this.sending?this._flushP:(this.sending=!0,this._flushP=(async()=>{for(;this.queue.length;){let t=this.queue[0];try{await this.net.call(t.type,t.d),this.queue.shift()}catch(e){e.net||e.status&&e.status>=500?(this.hooks.status(),await new Promise(n=>setTimeout(n,2e3))):this.queue.shift()}}this.sending=!1,this.hooks.status()})(),this._flushP)}update(t,e){if(!this.matchId)return;let n=this.game,i=performance.now(),r=this._lastNow?i-this._lastNow:0;this._lastNow=i,this._pollT+=r;let o=n.state==="watch"||n.state==="wait"||n.remote;if(!this._polling&&this._pollT>=(o?700:2500)&&(this._pollT=0,this.poll()),this._aimT+=r,e&&n.myTurn&&(n.state==="aim"||n.state==="place")&&this._aimT>=300){let a={seq:n.match.seq,dir:+e.dir.toFixed(4),cx:+e.cx.toFixed(4),cz:+e.cz.toFixed(4),pull:+e.pull.toFixed(3),side:+e.side.toFixed(2),top:+e.top.toFixed(2),place:n.state==="place"?1:0},l=JSON.stringify(a);l!==this._aimSent&&(this._aimT=0,this._aimSent=l,this.net.call("aim",{id:this.matchId,aim:a}).catch(()=>null))}if(this.pendingInfo&&n.state==="wait"){let a=this.pendingInfo;this.pendingInfo=null,this.applyInfo(a)}}async poll(){this._polling=!0;try{let t=await this.net.call("match/"+this.matchId+"?t="+Date.now(),null,"GET");this.applyInfo(t)}catch(t){(t.status===403||t.status===404)&&this.stopMatch("Partia sa nena\u0161la."),this.hooks.status()}finally{this._polling=!1}}applyInfo(t){let e=this.game;if(!e.match||t.id!==this.matchId)return;this.info=t;let n=t.players[1-t.me];if(n.online!==this.oppOnline&&(this.oppOnline=n.online,this.hooks.status()),e.match.players=t.players,e.match.status=t.status,t.status==="finished"&&!(t.seq>e.match.seq)){let i=t.winner===t.players[t.me].id;this.stopMatch(t.result==="resign"?i?`${n.name} sa vzd\xE1va partie. V\xED\u0165azstvo je tvoje!`:"Partia je vzdan\xE1.":i?`V\xED\u0165azstvo je tvoje! Sk\xF3re ${t.scores[t.me]} : ${t.scores[1-t.me]}.`:`V\xED\u0165az partie: ${n.name}, sk\xF3re ${t.scores[1-t.me]} : ${t.scores[t.me]}.`);return}if(t.status==="paused"){this.stopMatch(`Partia je preru\u0161en\xE1 (${this.oppOnline?"s\xFAper ju preru\u0161il":"s\xFAper dlho neodpovedal"}). Dokon\u010Di\u0165 sa d\xE1 v ponuke Hra\u0165 s priate\u013Eom, Rozohran\xE9 partie.`);return}if(t.seq>e.match.seq){if(e.state==="moving"){this.pendingInfo=t;return}if(this.queue.length)return;this.aimTarget=null,e.applyState(t.state,t.seq),t.status==="finished"&&this.applyInfo(t);return}if(t.shot&&t.shot.seq===e.match.seq+1&&t.shot.by!==t.me&&!this.played.has(t.shot.seq)&&e.state==="watch"){this.played.add(t.shot.seq),this.aimTarget=null,e.playRemote(t.shot,!1);return}t.aim&&t.aimv!==this.lastAimv&&e.state==="watch"&&t.aim.seq===e.match.seq&&(this.lastAimv=t.aimv,this.aimTarget=t.aim)}async scores(){try{return await this.net.call("scores?t="+Date.now(),null,"GET")}catch{return null}}async saveScore(t){for(let e=0;e<5;e++)try{return await this.net.call("score",t)}catch(n){if(!n.net)return{error:n.message};await new Promise(i=>setTimeout(i,3e3))}return{error:"Sk\xF3re sa nepodarilo ulo\u017Ei\u0165, spojenie so serverom nefunguje."}}statusText(){return this.net.down?"Spojenie so serverom sa preru\u0161ilo, sk\xFA\u0161am znova. Partia je ulo\u017Een\xE1.":this.inMatch&&!this.oppOnline?"S\xFAper je mimo hry, \u010Dak\xE1m na jeho n\xE1vrat. Po 10 min\xFAtach sa partia preru\u0161\xED a d\xE1 sa v nej pokra\u010Dova\u0165 nesk\xF4r.":""}};var Tu="mySnookerSettings",Eu=.5;function Yx(){let t={lines:!1,quality:/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)?"low":"high",volume:.8,respot:!0,contact:!0,camera:"cue",cue:"club"};try{let e=window.localStorage.getItem(Tu);if(e)return{...t,...JSON.parse(e)}}catch{}return t}function $o(s){try{window.localStorage.setItem(Tu,JSON.stringify(s))}catch{}}function $x(){try{let s=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(s.getContext("webgl2")||s.getContext("webgl")))}catch{return!1}}function Zx(s,t={}){if(!$x())return s.innerHTML='<div class="mysn-nogl">Tento prehliada\u010D nepodporuje 3D grafiku (WebGL). Sk\xFAs aktu\xE1lny Chrome, Firefox, Edge alebo Safari.</div>',null;let e=Yx();delete e.guide,e.lines=e.lines===!0;let n=e.quality==="high",i=new eo({antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,n?2:1.25)),i.outputColorSpace=oe,i.toneMapping=Jl,i.toneMappingExposure=1.05,i.shadowMap.enabled=n,i.shadowMap.type=Kl,i.domElement.className="mysn-canvas",s.appendChild(i.domElement);let r=new xs;gu(r,e.quality);let o=pu(r,e.quality,{news:t.news,rss:t.rss,site:t.site,user:t.user}),a=mu(i);r.add(a.group);let l=new qo,c=t.user||null;l.respot=!!e.respot,l.aimAtNearest();let h=new gs(i),u=h.fromScene(new wo,.04).texture;h.dispose();let d=new ko(r,l.balls,e.quality,u),f=uc(e.cue),g=new Oo(r,f);o.selectCue(f.id);let x=new zo(r),m=new Ho(i);e.camera="cue",m.setMode("cue");let p=new Go;p.setVolume(e.volume);let E=xu(r),y=new No(t.radio,()=>(p.unlock(),p.ctx));e.radio&&typeof e.radio=="object"&&(Object.assign(y.params,e.radio.params||{}),y.index=Math.min(y.stations.length-1,e.radio.index??-1));let v=I=>{E.setControls(y.params,y.station?y.station.name:"",y.on),e.radio={params:y.params,index:y.index},$o(e),S==="mixer"&&I!=="param"&&A.showView("mixer",Ke,f.id,{radio:y})};y.onChange=v,E.setControls(y.params,y.station?y.station.name:"",!1);let k=document.createElement("div");s.appendChild(k);let P={side:0,top:0},L=!1,D=!1,w=!1,_=!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),S=null,z={yaw:0,pitch:0},F=!1,V=3,Q=.2,W=0,ot=-1,K=0,pt={chalkFreeze:null},Tt={s:.022,h:.0115,d:.009},yt=new ue;{let I=new Ot({color:16052970,roughness:.8}),N=new Ot({color:3108822,roughness:.95}),lt=(Kt,$t,Zt,O,wt,tt,at)=>{let It=new Rt(new Gt(Kt,$t,Zt),at);It.position.set(O,wt,tt),yt.add(It)},{s:Y,h:ft,d:_t}=Tt,Ct=-Y/2+_t/2;lt(Y-_t,Y,Y,_t/2,0,0,I),lt(_t,(Y-ft)/2,Y,Ct,(Y+ft)/4,0,I),lt(_t,(Y-ft)/2,Y,Ct,-(Y+ft)/4,0,I),lt(_t,ft,(Y-ft)/2,Ct,0,(Y+ft)/4,I),lt(_t,ft,(Y-ft)/2,Ct,0,-(Y+ft)/4,I),lt(.0012,ft,ft,-Y/2+_t-6e-4,0,0,N);let Pt=8e-4;lt(_t,Pt,ft,Ct,ft/2-Pt/2,0,N),lt(_t,Pt,ft,Ct,-ft/2+Pt/2,0,N),lt(_t,ft,Pt,Ct,0,ft/2-Pt/2,N),lt(_t,ft,Pt,Ct,0,-ft/2+Pt/2,N)}yt.visible=!1,yt.rotation.order="YXZ";let Bt={up:.1,back:.22};r.add(yt);let St=()=>{let I=l.match,N=I&&I.rules?{names:I.players.map(_t=>String(_t.name).slice(0,18)),scores:I.rules.scores,turn:I.rules.over?-1:I.rules.turn,brk:I.rules.brk,on:l.onText(),left:_c(I.rules,l.balls.filter(_t=>_t.kind==="red"&&_t.on).length)}:null,lt=l.solo,Y=l.balls.filter(_t=>_t.kind==="red"&&_t.on).length,ft=lt&&!I?[["Body",l.soloScore],["S\xE9ria / najvy\u0161\u0161ia",`${lt.rules.brk} / ${lt.best}`],["\u010Cas",vc(lt.time)],["Hr\xE1 sa na",l.onText()],["Zost\xE1va na stole",_c(lt.rules,Y)]]:null;o.updateScore(l.stats,{cue:f.name,chalk:W,mode:N?"Partia cez internet":lt?"O najlep\u0161ie sk\xF3re":"Tr\xE9ning",match:N,rows:ft})},X=I=>{if(S===I){st();return}if(!(l.state==="moving"||ot>=0)&&!(I==="chalk"&&l.state!=="aim")){if(S=I,J.blocked=!0,I!=="chalk"&&I!=="chair"&&I!=="bar"&&J.uncapture(),A.showMenu(!1),I==="chalk"){let N=Math.cos(l.dir),lt=Math.sin(l.dir),Y=g.pivot.position.clone().add(new C(-N*Bt.back,Bt.up,-lt*Bt.back)),ft=Y.clone().add(new C(-lt*.22-N*.08,.09,N*.22-lt*.08));m.setView(ft,Y),ot=0,K=performance.now(),yt.visible=!0}else{let N=I==="mixer"?E.view:o[I];if(m.setView(N.pos,N.look.clone()),I==="chair"||I==="bar"){let lt=N.look.clone().sub(N.pos);z.yaw=Math.atan2(lt.z,lt.x),z.pitch=Math.atan2(lt.y,Math.hypot(lt.x,lt.z))}}I==="trophies"&&xt(),A.showView(I,Ke,f.id,I==="mixer"?{radio:y}:I==="magazine"?o.rssItems:I==="chair"?{news:o.newsItems,rss:o.rssItems}:o.newsItems)}},st=()=>{S&&(S=null,J.blocked=!c,m.setViewZoom(1),A.toggleReader(null),A.openPhone(!1),ot=-1,yt.visible=!1,m.setMode(l.state==="place"||F?"top":"cue"),A.showView(null),J.capture())},gt=I=>{f=uc(I),e.cue=f.id,$o(e),g.setSpec(f),J.setCue(f),o.selectCue(f.id),A.showView(S,Ke,f.id),A.setCueInfo(f),St()},dt=I=>{let N=I*f.power,lt=f.grip*(W>0?1:Q);l.shoot(N,P.side*lt,P.top*lt)&&(W>0&&W--,A.setChalk(W),St(),p.cue(N),A.sync(l,m.mode))},Nt=I=>{L=!1,m.setMode(I),e.camera=I,$o(e),A.sync(l,m.mode)},kt={unlock:()=>p.unlock(),camera:I=>Nt(I),undo:()=>l.undo(),hand:()=>l.ballInHand(),fine:I=>{l.state==="aim"&&(l.dir+=I*.05*Math.PI/180)},skip:()=>{for(let I of l.finish())I.type==="pot"&&p.pot()},reset:()=>{l.reset(),l.aimAtNearest()},place:()=>{l.confirmPlace(),l.aimAtNearest()},resume:()=>{if(l.solo&&l.solo.done){kt.training();return}A.showMenu(!1),A.openLobby(!1),J.capture()},solo:()=>bt(!1),soloNew:()=>bt(!0),training:()=>{l.stopSolo(),l.aimAtNearest(),R(),A.showMenu(!1),J.capture()},leaderboard:()=>{A.showMenu(!1),S!=="trophies"&&X("trophies")},trophies:()=>X("trophies"),trophies:()=>{A.showLeaderboard(null),X("trophies"),nt()},partyNext:()=>{A.celebrate(null),A.showMenu(!1),J.capture()},partyBoard:()=>{A.celebrate(null),kt.leaderboard()},leaderboardClose:()=>{A.showLeaderboard(null),A.menuOpen()||J.capture()},lobby:()=>{U&&(U.lobbyOpen=!0,A.openLobby(!0),U.ping())},lobbyClose:()=>{U&&(U.lobbyOpen=!1),A.openLobby(!1)},invite:I=>U&&U.invite(I),cancelInvite:()=>U&&U.cancelInvite(),accept:I=>{A.hideToast(),U&&U.answer(I,!0)},decline:I=>{A.hideToast(),U&&U.answer(I,!1)},resumeMatch:I=>U&&U.resume(I),pauseMatch:()=>U&&U.leave("pause"),resign:()=>U&&U.leave("resign"),home:()=>{window.location.href=t.homeUrl||"/"},settings:()=>A.toggle(A.panel),help:()=>X("board"),board:()=>X("board"),rack:()=>X("rack"),score:()=>X("score"),chair:()=>X("chair"),news:()=>X("news"),magazine:()=>X("magazine"),reader:()=>A.toggleReader(S==="magazine"?"rss":"news",S==="magazine"?o.rssItems:o.newsItems),readerRss:()=>A.toggleReader("rss",o.rssItems),chalk:()=>X("chalk"),mixer:()=>X("mixer"),bar:()=>X("bar"),phone:()=>A.openPhone(!0),phoneClose:()=>{A.openPhone(!1),S==="bar"&&J.capture()},radioToggle:()=>y.toggle(),radioPick:I=>y.play(I),radioSet:({k:I,v:N})=>y.set(I,N),top:()=>{S||(F=!F,L=!1,m.setMode(F||l.state==="place"?"top":"cue"))},back:()=>st(),cuePick:I=>gt(I),setting:({k:I,v:N})=>{e[I]=N,I==="volume"&&p.setVolume(N),I==="respot"&&(l.respot=!!N),$o(e)}},A=new Wo(k,{homeUrl:t.homeUrl,user:c,loginUrl:t.loginUrl,accountUrl:t.accountUrl,settings:e,onAction:(I,N)=>{p.unlock(),kt[I]&&kt[I](N),A.sync(l,m.mode)},onPower:(I,N)=>J.setPower(I,N),onRelease:()=>J.release(),onSpin:(I,N)=>P={side:I,top:N}}),J=new Vo(i.domElement,m,l,{unlock:()=>p.unlock(),shoot:dt,spinReset:()=>A.setSpin(0,0),spin:(I,N)=>A.setSpin(Math.max(-1,Math.min(1,A.side+I)),Math.max(-1,Math.min(1,A.top+N))),lock:I=>{if(A.setLock(I),I&&!c){J.uncapture();return}I?(D=!0,w=!1,A.setFree(!1),A.showMenu(!1)):_&&!S&&!w&&!A.partyOpen()&&A.showMenu(!0,D)},stroke:I=>A.setStroke(I),look:(I,N)=>{if(S!=="chair"&&S!=="bar"||w)return;let lt=.0025/(m.viewZoom||1);z.yaw+=I*lt,z.pitch=Math.max(-1.2,Math.min(.9,z.pitch-N*lt));let Y=Math.cos(z.pitch);m.viewLook.copy(m.viewPos).add(new C(Math.cos(z.yaw)*Y,Math.sin(z.pitch),Math.sin(z.yaw)*Y))},viewWheel:I=>{(S==="chair"||S==="bar")&&m.setViewZoom((m.viewZoom||1)*Math.pow(.85,I))},viewDown:I=>{if(S==="chair"&&I.button===0&&J.capture(),S==="bar"&&I.button===0){let N=i.domElement.getBoundingClientRect(),lt=new Ss,Y=J.captured?new mt(0,0):new mt((I.clientX-N.left)/N.width*2-1,-((I.clientY-N.top)/N.height)*2+1);lt.setFromCamera(Y,m.camera),lt.intersectObject(o.phone,!1).length?(J.uncapture(),A.openPhone(!0)):J.captured||J.capture()}},key:I=>{let N=I.toLowerCase();if(!c)return!0;if(N==="ctrl-down"||N==="ctrl-up")return S&&S!=="chair"&&S!=="bar"||(N==="ctrl-down"&&J.captured?(w=!0,J.uncapture()):N==="ctrl-up"&&w&&A.phoneOpen()?w=!1:N==="ctrl-up"&&w&&(w=!1,A.showMenu(!1),J.capture()),A.setFree(w)),!0;if(N==="f6")return p.unlock(),o.toggleDoor(),p.doorCreak(),!0;if((N==="escape"||N==="enter")&&A.partyOpen())return A.opts.onAction("partyNext"),!0;if(N==="escape"&&A.leaderboardOpen())return A.opts.onAction("leaderboardClose"),!0;let lt={f1:"board",f2:"rack",f3:"chalk",f4:"score",f7:"chair",f8:"trophies",f9:"mixer",f10:"bar"};if(lt[N])return A.opts.onAction(lt[N]),!0;if(N==="tab")return A.opts.onAction("top"),!0;if(S){if(N==="escape"&&A.phoneOpen())return kt.phoneClose(),!0;if(S==="bar"&&N==="m")return A.phoneOpen()?kt.phoneClose():(J.uncapture(),A.openPhone(!0)),!0;if(S==="mixer"){if(N==="arrowleft"||N==="arrowright")return y.next(N==="arrowleft"?-1:1),!0;if(N==="arrowup"||N==="arrowdown")return y.set("vol",y.params.vol+(N==="arrowup"?.05:-.05)),!0;if(N==="p")return y.toggle(),!0}if(S==="chair"&&N==="v")return A.opts.onAction("readerRss"),!0;if((S==="news"||S==="magazine"||S==="chair")&&N==="c")return A.opts.onAction("reader"),!0;if(N==="escape"&&A.readerOpen())return A.toggleReader(null),!0;if((N==="escape"||N==="enter")&&S!=="chalk")return st(),!0;if(S==="rack"&&(N==="arrowleft"||N==="arrowright")){let ft=Ke.findIndex(_t=>_t.id===f.id);return gt(Ke[(ft+(N==="arrowleft"?Ke.length-1:1))%Ke.length].id),!0}return!1}let Y={z:"undo",backspace:"undo",b:"hand",r:"reset",s:"skip",h:"help"}[N];return Y?(A.opts.onAction(Y),!0):!1}});c||(J.blocked=!0);let U=null,et=()=>{if(!c)return["guest"];let I=l.match;return I?["match",I.players[1-I.me].name]:l.solo&&!l.solo.done?["solo"]:["training"]},R=()=>A.setMenu(...et()),bt=I=>{l.match||(st(),A.showLeaderboard(null),F=!1,l.startSolo(I),m.setMode(l.state==="place"?"top":"cue"),R(),A.showMenu(!1),J.capture(),A.sync(l,m.mode),St())},nt=async I=>{let N=I||(U?await U.scores():null);return N&&N.top&&o.setTrophies(N.top),N},At=async I=>{J.uncapture(),A.showLeaderboard(void 0,I);let N=U?await U.scores():null;nt(N),A.leaderboardOpen()&&A.showLeaderboard(N,I)},xt=async I=>{let N=I||(U?await U.scores():null);N&&N.top&&o.setTrophies(N.top)};xt(),l.onSolo=async I=>{let N=U?await U.saveScore(I):{error:"Sk\xF3re sa zapisuje len prihl\xE1sen\xFDm."},lt=N&&!N.error;lt&&nt(N);let Y=lt&&N.mine&&N.mine.points===I.points&&N.mine.seconds===I.seconds;J.uncapture(),A.showLeaderboard(null),A.showMenu(!1),lt&&xt(N),A.celebrate({...I,rank:lt?N.rank:0,players:lt?N.players:0,best:Y,error:lt?"":N&&N.error}),p.unlock(),p.pot&&p.pot(),l.startSolo(!0),m.setMode(l.state==="place"?"top":"cue"),R(),A.sync(l,m.mode),St()},c&&t.restUrl&&(U=new Yo(t,l,{lobby:I=>{A.renderLobby(I),A.showInvites(l.match?[]:I.invites)},invite:I=>!A.menuOpen()&&A.toast(`${I.from.name} \u0165a poz\xFDva na partiu.${J.captured?" Esc alebo Ctrl uvo\u013En\xED my\u0161.":""}`,I),toast:I=>A.toast(I),started:I=>{st(),A.openLobby(!1),U.lobbyOpen=!1,A.hideToast(),A.showInvites([]),F=!1,m.setMode(l.state==="place"?"top":"cue"),R(),A.showMenu(!1),A.toast(`Partia s hr\xE1\u010Dom ${I.players[1-I.me].name}. ${I.turn===I.me?"Si na rade.":"Na rade je s\xFAper."}`),A.sync(l,m.mode),St()},ended:I=>{st(),R(),A.showMenu(!0,!0),A.menuNote(I),J.uncapture(),l.aimAtNearest(),A.sync(l,m.mode),St()},status:()=>A.setNet(U?U.statusText():"")})),nt(),J.setCue(f),A.setCueInfo(f),A.setChalk(W),St(),l.on(I=>{S||F||(l.state==="place"&&m.mode==="cue"?(m.setMode("top"),L=!0):l.state!=="place"&&L&&(L=!1,m.mode==="top"&&m.setMode("cue"))),(I==="change"||I==="settle")&&(A.sync(l,m.mode),St())});let Vt=()=>{let I=s.clientWidth||window.innerWidth,N=s.clientHeight||window.innerHeight;i.setSize(I,N),m.resize(I,N)};window.addEventListener("resize",Vt),window.addEventListener("pagehide",()=>l.saveSoloTime()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&l.saveSoloTime()}),Vt(),A.sync(l,m.mode),(_||!c)&&A.showMenu(!0,!1);let Lt=new C,T=performance.now(),M=T,G=0;try{G=parseFloat(window.localStorage.getItem("mySnookerPlayTime")||"0")||0}catch{G=0}let rt=()=>{try{window.localStorage.setItem("mySnookerPlayTime",String(Math.round(G)))}catch{}};window.addEventListener("pagehide",rt);let ut=T,it=0,Mt=I=>{let N=Math.min(.05,(I-T)/1e3);if(T=I,J.update(N),l.state==="moving")for(let Zt of l.tick(N))Zt.type==="ball"?p.ball(Zt.speed):Zt.type==="cushion"?p.cushion(Zt.speed):Zt.type==="pot"&&p.pot();let lt=l.state==="aim"&&!S,Y=l.state==="watch"&&U&&U.aimTarget;if(Y){let Zt=U.aimTarget,O=Zt.dir-l.dir;O=Math.atan2(Math.sin(O),Math.cos(O)),l.dir+=O*Math.min(1,N*8),l.cue.on&&(l.cue.p.x+=(Zt.cx-l.cue.p.x)*Math.min(1,N*8),l.cue.p.z+=(Zt.cz-l.cue.p.z)*Math.min(1,N*8))}if(U&&U.update(N,l.myTurn?{dir:l.dir,cx:l.cue.p.x,cz:l.cue.p.z,pull:J.stroking?Math.max(0,J.strokePull):0,side:P.side,top:P.top}:null),J.stroking)it=Math.max(0,J.strokePull);else{let Zt=lt?J.power:0;it+=(Zt-it)*Math.min(1,N*(J.charging?30:12))}A.showPower(J.power),d.update(N);let ft=Math.floor(G);G+=Math.min(1,Math.max(0,(I-M)/1e3)),Math.floor(G)!==ft&&Math.floor(G)%2===0&&rt(),M=I;let _t=y.update(m.camera);E.update(_t[0],_t[1]),o.setClock(l.solo&&!l.solo.done?l.solo.time:G);let Ct=l.solo;if(Ct&&!Ct.done&&S!=="chair"&&S!=="bar"&&!A.menuOpen()&&!A.leaderboardOpen()&&!A.partyOpen()){let Zt=Math.floor(Ct.time);Ct.time+=Math.min(1,Math.max(0,(I-ut)/1e3)),Math.floor(Ct.time)!==Zt&&(Math.floor(Ct.time)%2===0&&l.saveSoloTime(),A.sync(l,m.mode),St())}if(ut=I,o.update(N)&&p.doorShut(),Y&&(it+=((U.aimTarget.pull||0)-it)*Math.min(1,N*10)),g.place(l.cue,l.dir,it,Y?U.aimTarget.side||0:P.side,Y?U.aimTarget.top||0:P.top,(lt||S==="chalk"||Y&&!U.aimTarget.place)&&l.cue.on),ot>=0){ot=pt.chalkFreeze!==null?pt.chalkFreeze:(performance.now()-K)/1e3;let Zt=Math.cos(l.dir),O=Math.sin(l.dir),wt=2.8,tt=ht=>ht*ht*(3-2*ht),at=tt(Math.min(1,ot/.45,Math.max(0,(wt-ot)/.45)));g.pivot.position.x-=Zt*Bt.back*at,g.pivot.position.z-=O*Bt.back*at,g.pivot.position.y+=Bt.up*at;let It=g.pivot.position,Dt=tt(Math.min(1,Math.max(0,(ot-.45)/.35),Math.max(0,(wt-.45-ot)/.35))),Jt=ot>.8&&ot<wt-.8?1:0,ct=ot*12,q=.0012*Jt,Z=Tt.s/2-Tt.d+(1-Dt)*.1;yt.position.set(It.x+Zt*Z-O*Math.cos(ct)*q,It.y+Math.sin(ct)*q+(1-Dt)*.05,It.z+O*Z+Zt*Math.cos(ct)*q),yt.rotation.set(Jt*Math.sin(ct*.5)*.5,-l.dir,0),ot>=wt&&(W=V,A.setChalk(W),St(),st())}let Pt=x.update(l.balls,l.cue,l.dir,lt&&l.cue.on,e.lines?2:0),Kt=lt&&l.cue.on&&!!e.contact,$t=Pt||(lt&&l.cue.on?Co(l.balls,l.cue,l.dir):null);if(A.drawContact(Kt?$t:null,l.dir,Kt,e.lines),d.highlight($t&&lt?$t.ball:null,N,$t?$t.ghost:null),$t){let Zt=$t.ball?$t.ball.p:{x:l.cue.p.x+Math.cos(l.dir)*Eu,z:l.cue.p.z+Math.sin(l.dir)*Eu};Lt.set(Zt.x,.02625,Zt.z),m.aimPoint=Lt}else m.aimPoint=null;m.cueTilt=g.pivot.visible&&g.tilt||0,m.update(N,l.cue,l.dir,l.state==="moving"),i.render(r,m.camera),requestAnimationFrame(Mt)};return requestAnimationFrame(Mt),{game:l,rig:m,renderer:i,scene:r,settings:e,controls:J,debug:pt,get online(){return U}}}var wu=()=>{let s=document.getElementById("mysn-app");s&&!s.dataset.started&&(s.dataset.started="1",window.MySnooker=Zx(s,window.MYSN_CONFIG||{}))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",wu):wu();})();

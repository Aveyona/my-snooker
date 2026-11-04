(()=>{var Vl="170",pn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vu=0,gc=1,Mu=2;var Rh=1,Gl=2,Cn=3,si=0,Te=1,Qe=2,ni=0,Qi=1,_c=2,xc=3,yc=4,bu=5,xi=100,Su=101,Eu=102,wu=103,Tu=104,Au=200,Ru=201,Cu=202,Pu=203,Ma=204,ba=205,Iu=206,Lu=207,Du=208,Uu=209,Nu=210,ku=211,Ou=212,Fu=213,zu=214,Sa=0,Ea=1,wa=2,is=3,Ta=4,Aa=5,Ra=6,Ca=7,Ch=0,Bu=1,Hu=2,ii=0,Vu=1,Gu=2,Wu=3,Wl=4,Xu=5,qu=6,Yu=7;var Ph=300,ss=301,rs=302,Pa=303,Ia=304,_o=306,Dn=1e3,Mi=1001,La=1002,dn=1003,$u=1004;var ar=1005;var _n=1006,Ho=1007;var bi=1008;var Un=1009,Ih=1010,Lh=1011,Hs=1012,Xl=1013,Si=1014,Pn=1015,Qs=1016,ql=1017,Yl=1018,os=1020,Dh=35902,Uh=1021,Nh=1022,un=1023,kh=1024,Oh=1025,ts=1026,as=1027,Fh=1028,$l=1029,zh=1030,Zl=1031;var jl=1033,Ur=33776,Nr=33777,kr=33778,Or=33779,Da=35840,Ua=35841,Na=35842,ka=35843,Oa=36196,Fa=37492,za=37496,Ba=37808,Ha=37809,Va=37810,Ga=37811,Wa=37812,Xa=37813,qa=37814,Ya=37815,$a=37816,Za=37817,ja=37818,Ka=37819,Ja=37820,Qa=37821,Fr=36492,tl=36494,el=36495,Bh=36283,nl=36284,il=36285,sl=36286;var zr=2300,rl=2301,Vo=2302,vc=2400,Mc=2401,bc=2402;var Zu=3200,ju=3201;var Hh=0,Ku=1,ei="",ee="srgb",ys="srgb-linear",xo="linear",ae="srgb";var ki=7680;var Sc=519,Ju=512,Qu=513,td=514,Vh=515,ed=516,nd=517,id=518,sd=519,Ec=35044;var wc="300 es",In=2e3,Br=2001,Nn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tc=1234567,Ns=Math.PI/180,ls=180/Math.PI;function Ii(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[s&255]+ke[s>>8&255]+ke[s>>16&255]+ke[s>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function we(s,t,e){return Math.max(t,Math.min(e,s))}function Kl(s,t){return(s%t+t)%t}function rd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function od(s,t,e){return s!==t?(e-s)/(t-s):0}function ks(s,t,e){return(1-e)*s+e*t}function ad(s,t,e,n){return ks(s,t,1-Math.exp(-e*n))}function ld(s,t=1){return t-Math.abs(Kl(s,t*2)-t)}function cd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function hd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function ud(s,t){return s+Math.floor(Math.random()*(t-s+1))}function dd(s,t){return s+Math.random()*(t-s)}function fd(s){return s*(.5-Math.random())}function pd(s){s!==void 0&&(Tc=s);let t=Tc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function md(s){return s*Ns}function gd(s){return s*ls}function _d(s){return(s&s-1)===0&&s!==0}function xd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function yd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vd(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ji(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ze(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var On={DEG2RAD:Ns,RAD2DEG:ls,generateUUID:Ii,clamp:we,euclideanModulo:Kl,mapLinear:rd,inverseLerp:od,lerp:ks,damp:ad,pingpong:ld,smoothstep:cd,smootherstep:hd,randInt:ud,randFloat:dd,randFloatSpread:fd,seededRandom:pd,degToRad:md,radToDeg:gd,isPowerOfTwo:_d,ceilPowerOfTwo:xd,floorPowerOfTwo:yd,setQuaternionFromProperEuler:vd,normalize:ze,denormalize:ji},gt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],E=i[1],v=i[4],y=i[7],F=i[2],C=i[5],U=i[8];return r[0]=o*_+a*E+l*F,r[3]=o*m+a*v+l*C,r[6]=o*p+a*y+l*U,r[1]=c*_+h*E+d*F,r[4]=c*m+h*v+d*C,r[7]=c*p+h*y+d*U,r[2]=u*_+f*E+g*F,r[5]=u*m+f*v+g*C,r[8]=u*p+f*y+g*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Go.makeScale(t,e)),this}rotate(t){return this.premultiply(Go.makeRotation(-t)),this}translate(t,e){return this.premultiply(Go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Go=new Jt;function Gh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Hr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Md(){let s=Hr("canvas");return s.style.display="block",s}var Ac={};function Ds(s){s in Ac||(Ac[s]=!0,console.warn(s))}function bd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Sd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ed(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ie={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(s.r=Ln(s.r),s.g=Ln(s.g),s.b=Ln(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?xo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Rc=[.64,.33,.3,.6,.15,.06],Cc=[.2126,.7152,.0722],Pc=[.3127,.329],Ic=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lc=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[ys]:{primaries:Rc,whitePoint:Pc,transfer:xo,toXYZ:Ic,fromXYZ:Lc,luminanceCoefficients:Cc,workingColorSpaceConfig:{unpackColorSpace:ee},outputColorSpaceConfig:{drawingBufferColorSpace:ee}},[ee]:{primaries:Rc,whitePoint:Pc,transfer:ae,toXYZ:Ic,fromXYZ:Lc,luminanceCoefficients:Cc,outputColorSpaceConfig:{drawingBufferColorSpace:ee}}});var Oi,ol=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=Hr("canvas")),Oi.width=t.width,Oi.height=t.height;let n=Oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Hr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ln(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wd=0,Vr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Wo(i[o].image)):r.push(Wo(i[o]))}else r=Wo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ol.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Td=0,Ye=class s extends Nn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Mi,i=Mi,r=_n,o=bi,a=un,l=Un,c=s.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Ii(),this.name="",this.source=new Vr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ph)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dn:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case La:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dn:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case La:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Ph;Ye.DEFAULT_ANISOTROPY=1;var le=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,y=(f+1)/2,F=(p+1)/2,C=(h+u)/4,U=(d+_)/4,L=(g+m)/4;return v>y&&v>F?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=C/n,r=U/n):y>F?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=C/i,r=L/i):F<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(F),n=U/r,i=L/r),this.set(n,i,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-_)/E,this.z=(u-h)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},al=class extends Nn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ye(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Vr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},kn=class extends al{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Gr=class extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ll=class extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=dn,this.minFilter=dn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $e=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||c!==f||h!==g){let m=1-a,p=l*u+c*f+h*g+d*_,E=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let F=Math.sqrt(v),C=Math.atan2(F,p*E);m=Math.sin(m*C)/F,a=Math.sin(a*C)/F}let y=a*E;if(l=l*m+u*y,c=c*m+f*y,h=h*m+g*y,d=d*m+_*y,m===1-a){let F=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=F,c*=F,h*=F,d*=F}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xo.copy(this).projectOnVector(t),this.sub(Xo)}reflect(t){return this.sub(Xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xo=new R,Dc=new $e,Ei=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)),lr.applyMatrix4(t.matrixWorld),this.union(lr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),cr.subVectors(this.max,As),Fi.subVectors(t.a,As),zi.subVectors(t.b,As),Bi.subVectors(t.c,As),Zn.subVectors(zi,Fi),jn.subVectors(Bi,zi),ui.subVectors(Fi,Bi);let e=[0,-Zn.z,Zn.y,0,-jn.z,jn.y,0,-ui.z,ui.y,Zn.z,0,-Zn.x,jn.z,0,-jn.x,ui.z,0,-ui.x,-Zn.y,Zn.x,0,-jn.y,jn.x,0,-ui.y,ui.x,0];return!qo(e,Fi,zi,Bi,cr)||(e=[1,0,0,0,1,0,0,0,1],!qo(e,Fi,zi,Bi,cr))?!1:(hr.crossVectors(Zn,jn),e=[hr.x,hr.y,hr.z],qo(e,Fi,zi,Bi,cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},En=[new R,new R,new R,new R,new R,new R,new R,new R],ln=new R,lr=new Ei,Fi=new R,zi=new R,Bi=new R,Zn=new R,jn=new R,ui=new R,As=new R,cr=new R,hr=new R,di=new R;function qo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){di.fromArray(s,r);let a=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),l=t.dot(di),c=e.dot(di),h=n.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ad=new Ei,Rs=new R,Yo=new R,cs=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ad.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);let e=Rs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Rs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add(Yo)),this.expandByPoint(Rs.copy(t.center).sub(Yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},wn=new R,$o=new R,ur=new R,Kn=new R,Zo=new R,dr=new R,jo=new R,wi=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){$o.copy(t).add(e).multiplyScalar(.5),ur.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub($o);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ur),a=Kn.dot(this.direction),l=-Kn.dot(ur),c=Kn.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy($o).addScaledVector(ur,u),f}intersectSphere(t,e){wn.subVectors(t.center,this.origin);let n=wn.dot(this.direction),i=wn.dot(wn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,i,r){Zo.subVectors(e,t),dr.subVectors(n,t),jo.crossVectors(Zo,dr);let o=this.direction.dot(jo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);let l=a*this.direction.dot(dr.crossVectors(Kn,dr));if(l<0)return null;let c=a*this.direction.dot(Zo.cross(Kn));if(c<0||l+c>o)return null;let h=-a*Kn.dot(jo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ge=class s{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Hi.setFromMatrixColumn(t,0).length(),r=1/Hi.setFromMatrixColumn(t,1).length(),o=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rd,t,Cd)}lookAt(t,e,n){let i=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Jn.crossVectors(n,We),Jn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Jn.crossVectors(n,We)),Jn.normalize(),fr.crossVectors(We,Jn),i[0]=Jn.x,i[4]=fr.x,i[8]=We.x,i[1]=Jn.y,i[5]=fr.y,i[9]=We.y,i[2]=Jn.z,i[6]=fr.z,i[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],v=n[7],y=n[11],F=n[15],C=i[0],U=i[4],L=i[8],S=i[12],M=i[1],P=i[5],J=i[9],W=i[13],q=i[2],it=i[6],$=i[10],ft=i[14],Z=i[3],dt=i[7],vt=i[11],yt=i[15];return r[0]=o*C+a*M+l*q+c*Z,r[4]=o*U+a*P+l*it+c*dt,r[8]=o*L+a*J+l*$+c*vt,r[12]=o*S+a*W+l*ft+c*yt,r[1]=h*C+d*M+u*q+f*Z,r[5]=h*U+d*P+u*it+f*dt,r[9]=h*L+d*J+u*$+f*vt,r[13]=h*S+d*W+u*ft+f*yt,r[2]=g*C+_*M+m*q+p*Z,r[6]=g*U+_*P+m*it+p*dt,r[10]=g*L+_*J+m*$+p*vt,r[14]=g*S+_*W+m*ft+p*yt,r[3]=E*C+v*M+y*q+F*Z,r[7]=E*U+v*P+y*it+F*dt,r[11]=E*L+v*J+y*$+F*vt,r[15]=E*S+v*W+y*ft+F*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*d-i*c*d-r*a*u+n*c*u+i*a*f-n*l*f)+_*(+e*l*f-e*c*u+r*o*u-i*o*f+i*c*h-r*l*h)+m*(+e*c*d-e*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=d*m*c-_*u*c+_*l*f-a*m*f-d*l*p+a*u*p,v=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,y=h*_*c-g*d*c+g*a*f-o*_*f-h*a*p+o*d*p,F=g*d*l-h*_*l-g*a*u+o*_*u+h*a*m-o*d*m,C=e*E+n*v+i*y+r*F;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return t[0]=E*U,t[1]=(_*u*r-d*m*r-_*i*f+n*m*f+d*i*p-n*u*p)*U,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*U,t[3]=(d*l*r-a*u*r-d*i*c+n*u*c+a*i*f-n*l*f)*U,t[4]=v*U,t[5]=(h*m*r-g*u*r+g*i*f-e*m*f-h*i*p+e*u*p)*U,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*U,t[7]=(o*u*r-h*l*r+h*i*c-e*u*c-o*i*f+e*l*f)*U,t[8]=y*U,t[9]=(g*d*r-h*_*r-g*n*f+e*_*f+h*n*p-e*d*p)*U,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*U,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*f-e*a*f)*U,t[12]=F*U,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*m+e*d*m)*U,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*U,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*U,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,_=o*h,m=o*d,p=a*d,E=l*c,v=l*h,y=l*d,F=n.x,C=n.y,U=n.z;return i[0]=(1-(_+p))*F,i[1]=(f+y)*F,i[2]=(g-v)*F,i[3]=0,i[4]=(f-y)*C,i[5]=(1-(u+p))*C,i[6]=(m+E)*C,i[7]=0,i[8]=(g+v)*U,i[9]=(m-E)*U,i[10]=(1-(u+_))*U,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Hi.set(i[0],i[1],i[2]).length(),o=Hi.set(i[4],i[5],i[6]).length(),a=Hi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],cn.copy(this);let c=1/r,h=1/o,d=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,e.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=In){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),f,g;if(a===In)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Br)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=In){let l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-r),u=(e+t)*c,f=(n+i)*h,g,_;if(a===In)g=(o+r)*d,_=-2*d;else if(a===Br)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Hi=new R,cn=new ge,Rd=new R(0,0,0),Cd=new R(1,1,1),Jn=new R,fr=new R,We=new R,Uc=new ge,Nc=new $e,en=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var Vs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Pd=0,kc=new R,Vi=new $e,Tn=new ge,pr=new R,Cs=new R,Id=new R,Ld=new $e,Oc=new R(1,0,0),Fc=new R(0,1,0),zc=new R(0,0,1),Bc={type:"added"},Dd={type:"removed"},Gi={type:"childadded",child:null},Ko={type:"childremoved",child:null},Ue=class s extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new R,e=new en,n=new $e,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ge},normalMatrix:{value:new Jt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(Oc,t)}rotateY(t){return this.rotateOnAxis(Fc,t)}rotateZ(t){return this.rotateOnAxis(zc,t)}translateOnAxis(t,e){return kc.copy(t).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oc,t)}translateY(t){return this.translateOnAxis(Fc,t)}translateZ(t){return this.translateOnAxis(zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pr.copy(t):pr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Cs,pr,this.up):Tn.lookAt(pr,Cs,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),Vi.setFromRotationMatrix(Tn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dd),Ko.child=t,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,Id),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Ld,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ue.DEFAULT_UP=new R(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new R,An=new R,Jo=new R,Rn=new R,Wi=new R,Xi=new R,Hc=new R,Qo=new R,ta=new R,ea=new R,na=new le,ia=new le,sa=new le,yi=class s{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),hn.subVectors(t,e),i.cross(hn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){hn.subVectors(i,e),An.subVectors(n,e),Jo.subVectors(t,e);let o=hn.dot(hn),a=hn.dot(An),l=hn.dot(Jo),c=An.dot(An),h=An.dot(Jo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return na.setScalar(0),ia.setScalar(0),sa.setScalar(0),na.fromBufferAttribute(t,e),ia.fromBufferAttribute(t,n),sa.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(na,r.x),o.addScaledVector(ia,r.y),o.addScaledVector(sa,r.z),o}static isFrontFacing(t,e,n,i){return hn.subVectors(n,e),An.subVectors(t,e),hn.cross(An).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),hn.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Wi.subVectors(i,n),Xi.subVectors(r,n),Qo.subVectors(t,n);let l=Wi.dot(Qo),c=Xi.dot(Qo);if(l<=0&&c<=0)return e.copy(n);ta.subVectors(t,i);let h=Wi.dot(ta),d=Xi.dot(ta);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Wi,o);ea.subVectors(t,r);let f=Wi.dot(ea),g=Xi.dot(ea);if(g>=0&&f<=g)return e.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Xi,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Hc.subVectors(r,i),a=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(Hc,a);let p=1/(m+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},mr={h:0,s:0,l:0};function ra(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=Kl(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ra(o,r,t+1/3),this.g=ra(o,r,t),this.b=ra(o,r,t-1/3)}return ie.toWorkingColorSpace(this,i),this}setStyle(t,e=ee){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ee){let n=Wh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ee){return ie.fromWorkingColorSpace(Oe.copy(this),t),Math.round(we(Oe.r*255,0,255))*65536+Math.round(we(Oe.g*255,0,255))*256+Math.round(we(Oe.b*255,0,255))}getHexString(t=ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Oe.copy(this),e);let n=Oe.r,i=Oe.g,r=Oe.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=ee){ie.fromWorkingColorSpace(Oe.copy(this),t);let e=Oe.r,n=Oe.g,i=Oe.b;return t!==ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(mr);let n=ks(Qn.h,mr.h,e),i=ks(Qn.s,mr.s,e),r=ks(Qn.l,mr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oe=new jt;jt.NAMES=Wh;var Ud=0,ri=class extends Nn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Ii(),this.name="",this.blending=Qi,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=ba,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ba&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ae=class extends ri{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ee=new R,gr=new gt,tn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ec,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),i=ze(i,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ec&&(t.usage=this.usage),t}};var Wr=class extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xr=class extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Nd=0,Je=new ge,oa=new Ue,qi=new R,Xe=new Ei,Ps=new Ei,De=new R,Me=class s extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gh(t)?Xr:Wr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(Xe.min,Ps.min),Xe.expandByPoint(De),De.addVectors(Xe.max,Ps.max),Xe.expandByPoint(De)):(Xe.expandByPoint(Ps.min),Xe.expandByPoint(Ps.max))}Xe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)De.fromBufferAttribute(a,c),l&&(qi.fromBufferAttribute(t,c),De.add(qi)),i=Math.max(i,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new R,l[L]=new R;let c=new R,h=new R,d=new R,u=new gt,f=new gt,g=new gt,_=new R,m=new R;function p(L,S,M){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,L),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[L].add(_),a[S].add(_),a[M].add(_),l[L].add(m),l[S].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,S=E.length;L<S;++L){let M=E[L],P=M.start,J=M.count;for(let W=P,q=P+J;W<q;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let v=new R,y=new R,F=new R,C=new R;function U(L){F.fromBufferAttribute(i,L),C.copy(F);let S=a[L];v.copy(S),v.sub(F.multiplyScalar(F.dot(S))).normalize(),y.crossVectors(C,S);let P=y.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,P)}for(let L=0,S=E.length;L<S;++L){let M=E[L],P=M.start,J=M.count;for(let W=P,q=P+J;W<q;W+=3)U(t.getX(W+0)),U(t.getX(W+1)),U(t.getX(W+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new tn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vc=new ge,fi=new wi,_r=new cs,Gc=new R,xr=new R,yr=new R,vr=new R,aa=new R,Mr=new R,Wc=new R,br=new R,Ct=class extends Ue{constructor(t=new Me,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(aa.fromBufferAttribute(d,t),o?Mr.addScaledVector(aa,h):Mr.addScaledVector(aa.sub(e),h))}e.add(Mr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),fi.copy(t.ray).recast(t.near),!(_r.containsPoint(fi.origin)===!1&&(fi.intersectSphere(_r,Gc)===null||fi.origin.distanceToSquared(Gc)>(t.far-t.near)**2))&&(Vc.copy(r).invert(),fi.copy(t.ray).applyMatrix4(Vc),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,F=v;y<F;y+=3){let C=a.getX(y),U=a.getX(y+1),L=a.getX(y+2);i=Sr(this,p,t,n,c,h,d,C,U,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let E=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);i=Sr(this,o,t,n,c,h,d,E,v,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,F=v;y<F;y+=3){let C=y,U=y+1,L=y+2;i=Sr(this,p,t,n,c,h,d,C,U,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let E=m,v=m+1,y=m+2;i=Sr(this,o,t,n,c,h,d,E,v,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function kd(s,t,e,n,i,r,o,a){let l;if(t.side===Te?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===si,a),l===null)return null;br.copy(a),br.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(br);return c<e.near||c>e.far?null:{distance:c,point:br.clone(),object:s}}function Sr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,xr),s.getVertexPosition(l,yr),s.getVertexPosition(c,vr);let h=kd(s,t,e,n,xr,yr,vr,Wc);if(h){let d=new R;yi.getBarycoord(Wc,xr,yr,vr,d),i&&(h.uv=yi.getInterpolatedAttribute(i,a,l,c,d,new gt)),r&&(h.uv1=yi.getInterpolatedAttribute(r,a,l,c,d,new gt)),o&&(h.normal=yi.getInterpolatedAttribute(o,a,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new R,materialIndex:0};yi.getNormal(xr,yr,vr,u.normal),h.face=u,h.barycoord=d}return h}var $t=class s extends Me{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(d,2));function g(_,m,p,E,v,y,F,C,U,L,S){let M=y/U,P=F/L,J=y/2,W=F/2,q=C/2,it=U+1,$=L+1,ft=0,Z=0,dt=new R;for(let vt=0;vt<$;vt++){let yt=vt*P-W;for(let kt=0;kt<it;kt++){let Pt=kt*M-J;dt[_]=Pt*E,dt[m]=yt*v,dt[p]=q,c.push(dt.x,dt.y,dt.z),dt[_]=0,dt[m]=0,dt[p]=C>0?1:-1,h.push(dt.x,dt.y,dt.z),d.push(kt/U),d.push(1-vt/L),ft+=1}}for(let vt=0;vt<L;vt++)for(let yt=0;yt<U;yt++){let kt=u+yt+it*vt,Pt=u+yt+it*(vt+1),Y=u+(yt+1)+it*(vt+1),rt=u+(yt+1)+it*vt;l.push(kt,Pt,rt),l.push(Pt,Y,rt),Z+=6}a.addGroup(f,Z,S),f+=Z,u+=ft}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function hs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Be(s){let t={};for(let e=0;e<s.length;e++){let n=hs(s[e]);for(let i in n)t[i]=n[i]}return t}function Od(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Xh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var Fd={clone:hs,merge:Be},zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends ri{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zd,this.fragmentShader=Bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Od(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},qr=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ti=new R,Xc=new gt,qc=new gt,Ne=class extends qr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ls*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,Xc,qc),e.subVectors(qc,Xc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Yi=-90,$i=1,cl=class extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ne(Yi,$i,t,e);i.layers=this.layers,this.add(i);let r=new Ne(Yi,$i,t,e);r.layers=this.layers,this.add(r);let o=new Ne(Yi,$i,t,e);o.layers=this.layers,this.add(o);let a=new Ne(Yi,$i,t,e);a.layers=this.layers,this.add(a);let l=new Ne(Yi,$i,t,e);l.layers=this.layers,this.add(l);let c=new Ne(Yi,$i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Yr=class extends Ye{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ss,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},hl=class extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Yr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:_n}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $t(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:ni});r.uniforms.tEquirect.value=e;let o=new Ct(i,r),a=e.minFilter;return e.minFilter===bi&&(e.minFilter=_n),new cl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},la=new R,Hd=new R,Vd=new Jt,qe=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=la.subVectors(n,e).cross(Hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(la),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Vd.getNormalMatrix(t),i=this.coplanarPoint(la).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},pi=new cs,Er=new R,Gs=class{constructor(t=new qe,e=new qe,n=new qe,i=new qe,r=new qe,o=new qe){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],E=i[13],v=i[14],y=i[15];if(n[0].setComponents(l-r,u-c,m-f,y-p).normalize(),n[1].setComponents(l+r,u+c,m+f,y+p).normalize(),n[2].setComponents(l+o,u+h,m+g,y+E).normalize(),n[3].setComponents(l-o,u-h,m-g,y-E).normalize(),n[4].setComponents(l-a,u-d,m-_,y-v).normalize(),e===In)n[5].setComponents(l+a,u+d,m+_,y+v).normalize();else if(e===Br)n[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Er.x=i.normal.x>0?t.max.x:t.min.x,Er.y=i.normal.y>0?t.max.y:t.min.y,Er.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Gd(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var xe=class s extends Me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let E=p*u-o;for(let v=0;v<c;v++){let y=v*d-r;g.push(y,-E,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){let v=E+c*p,y=E+c*(p+1),F=E+1+c*(p+1),C=E+1+c*p;f.push(v,y,C),f.push(y,F,C)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xd=`#ifdef USE_ALPHAHASH
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
#endif`,qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jd=`#ifdef USE_AOMAP
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
#endif`,Kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jd=`#ifdef USE_BATCHING
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
#endif`,Qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sf=`#ifdef USE_IRIDESCENCE
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
#endif`,rf=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pf=`#define PI 3.141592653589793
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
} // validated`,mf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gf=`vec3 transformedNormal = objectNormal;
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
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",bf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,If=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lf=`#ifdef USE_GRADIENTMAP
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
}`,Df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kf=`uniform bool receiveShadow;
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
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,Ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vf=`PhysicalMaterial material;
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
#endif`,Gf=`struct PhysicalMaterial {
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
}`,Wf=`
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$f=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tp=`#if defined( USE_POINTS_UV )
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
#endif`,ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
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
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fp=`#ifdef USE_NORMALMAP
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
#endif`,pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_p=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cp=`float getShadowMask() {
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
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dp=`#ifdef USE_SKINNING
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
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Op=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#ifdef USE_TRANSMISSION
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`#include <common>
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
}`,Kp=`#if DEPTH_PACKING == 3200
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
}`,Jp=`#define DISTANCE
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
}`,Qp=`#define DISTANCE
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`uniform float scale;
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,rm=`uniform vec3 diffuse;
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
}`,om=`#define LAMBERT
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
}`,am=`#define LAMBERT
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
}`,lm=`#define MATCAP
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
}`,cm=`#define MATCAP
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
}`,hm=`#define NORMAL
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
}`,um=`#define NORMAL
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
}`,dm=`#define PHONG
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
}`,fm=`#define PHONG
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
}`,pm=`#define STANDARD
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
}`,mm=`#define STANDARD
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
}`,gm=`#define TOON
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
}`,_m=`#define TOON
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
}`,xm=`uniform float size;
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
}`,ym=`uniform vec3 diffuse;
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
}`,vm=`#include <common>
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
}`,Mm=`uniform vec3 color;
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
}`,bm=`uniform float rotation;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:Wd,alphahash_pars_fragment:Xd,alphamap_fragment:qd,alphamap_pars_fragment:Yd,alphatest_fragment:$d,alphatest_pars_fragment:Zd,aomap_fragment:jd,aomap_pars_fragment:Kd,batching_pars_vertex:Jd,batching_vertex:Qd,begin_vertex:tf,beginnormal_vertex:ef,bsdfs:nf,iridescence_fragment:sf,bumpmap_pars_fragment:rf,clipping_planes_fragment:of,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:lf,clipping_planes_vertex:cf,color_fragment:hf,color_pars_fragment:uf,color_pars_vertex:df,color_vertex:ff,common:pf,cube_uv_reflection_fragment:mf,defaultnormal_vertex:gf,displacementmap_pars_vertex:_f,displacementmap_vertex:xf,emissivemap_fragment:yf,emissivemap_pars_fragment:vf,colorspace_fragment:Mf,colorspace_pars_fragment:bf,envmap_fragment:Sf,envmap_common_pars_fragment:Ef,envmap_pars_fragment:wf,envmap_pars_vertex:Tf,envmap_physical_pars_fragment:Of,envmap_vertex:Af,fog_vertex:Rf,fog_pars_vertex:Cf,fog_fragment:Pf,fog_pars_fragment:If,gradientmap_pars_fragment:Lf,lightmap_pars_fragment:Df,lights_lambert_fragment:Uf,lights_lambert_pars_fragment:Nf,lights_pars_begin:kf,lights_toon_fragment:Ff,lights_toon_pars_fragment:zf,lights_phong_fragment:Bf,lights_phong_pars_fragment:Hf,lights_physical_fragment:Vf,lights_physical_pars_fragment:Gf,lights_fragment_begin:Wf,lights_fragment_maps:Xf,lights_fragment_end:qf,logdepthbuf_fragment:Yf,logdepthbuf_pars_fragment:$f,logdepthbuf_pars_vertex:Zf,logdepthbuf_vertex:jf,map_fragment:Kf,map_pars_fragment:Jf,map_particle_fragment:Qf,map_particle_pars_fragment:tp,metalnessmap_fragment:ep,metalnessmap_pars_fragment:np,morphinstance_vertex:ip,morphcolor_vertex:sp,morphnormal_vertex:rp,morphtarget_pars_vertex:op,morphtarget_vertex:ap,normal_fragment_begin:lp,normal_fragment_maps:cp,normal_pars_fragment:hp,normal_pars_vertex:up,normal_vertex:dp,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,iridescence_pars_fragment:_p,opaque_fragment:xp,packing:yp,premultiplied_alpha_fragment:vp,project_vertex:Mp,dithering_fragment:bp,dithering_pars_fragment:Sp,roughnessmap_fragment:Ep,roughnessmap_pars_fragment:wp,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Ap,shadowmap_vertex:Rp,shadowmask_pars_fragment:Cp,skinbase_vertex:Pp,skinning_pars_vertex:Ip,skinning_vertex:Lp,skinnormal_vertex:Dp,specularmap_fragment:Up,specularmap_pars_fragment:Np,tonemapping_fragment:kp,tonemapping_pars_fragment:Op,transmission_fragment:Fp,transmission_pars_fragment:zp,uv_pars_fragment:Bp,uv_pars_vertex:Hp,uv_vertex:Vp,worldpos_vertex:Gp,background_vert:Wp,background_frag:Xp,backgroundCube_vert:qp,backgroundCube_frag:Yp,cube_vert:$p,cube_frag:Zp,depth_vert:jp,depth_frag:Kp,distanceRGBA_vert:Jp,distanceRGBA_frag:Qp,equirect_vert:tm,equirect_frag:em,linedashed_vert:nm,linedashed_frag:im,meshbasic_vert:sm,meshbasic_frag:rm,meshlambert_vert:om,meshlambert_frag:am,meshmatcap_vert:lm,meshmatcap_frag:cm,meshnormal_vert:hm,meshnormal_frag:um,meshphong_vert:dm,meshphong_frag:fm,meshphysical_vert:pm,meshphysical_frag:mm,meshtoon_vert:gm,meshtoon_frag:_m,points_vert:xm,points_frag:ym,shadow_vert:vm,shadow_frag:Mm,sprite_vert:bm,sprite_frag:Sm},It={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},gn={basic:{uniforms:Be([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Be([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new jt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Be([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Be([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Be([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new jt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Be([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Be([It.points,It.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Be([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Be([It.common,It.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Be([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Be([It.sprite,It.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Be([It.common,It.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Be([It.lights,It.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};gn.physical={uniforms:Be([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var wr={r:0,b:0,g:0},mi=new en,Em=new ge;function wm(s,t,e,n,i,r,o){let a=new jt(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?e:t).get(v)),v}function _(E){let v=!1,y=g(E);y===null?p(a,l):y&&y.isColor&&(p(y,1),v=!0);let F=s.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,v){let y=g(v);y&&(y.isCubeTexture||y.mapping===_o)?(h===void 0&&(h=new Ct(new $t(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:hs(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),mi.copy(v.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Em.makeRotationFromEuler(mi)),h.material.toneMapped=ie.getTransfer(y.colorSpace)!==ae,(d!==y||u!==y.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ct(new xe(2,2),new xn({name:"BackgroundMaterial",uniforms:hs(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ie.getTransfer(y.colorSpace)!==ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,f=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,v){E.getRGB(wr,Xh(s)),n.buffers.color.setClear(wr.r,wr.g,wr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:m}}function Tm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(M,P,J,W,q){let it=!1,$=d(W,J,P);r!==$&&(r=$,c(r.object)),it=f(M,W,J,q),it&&g(M,W,J,q),q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(it||o)&&(o=!1,y(M,P,J,W),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function d(M,P,J){let W=J.wireframe===!0,q=n[M.id];q===void 0&&(q={},n[M.id]=q);let it=q[P.id];it===void 0&&(it={},q[P.id]=it);let $=it[W];return $===void 0&&($=u(l()),it[W]=$),$}function u(M){let P=[],J=[],W=[];for(let q=0;q<e;q++)P[q]=0,J[q]=0,W[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:J,attributeDivisors:W,object:M,attributes:{},index:null}}function f(M,P,J,W){let q=r.attributes,it=P.attributes,$=0,ft=J.getAttributes();for(let Z in ft)if(ft[Z].location>=0){let vt=q[Z],yt=it[Z];if(yt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),vt===void 0||vt.attribute!==yt||yt&&vt.data!==yt.data)return!0;$++}return r.attributesNum!==$||r.index!==W}function g(M,P,J,W){let q={},it=P.attributes,$=0,ft=J.getAttributes();for(let Z in ft)if(ft[Z].location>=0){let vt=it[Z];vt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor));let yt={};yt.attribute=vt,vt&&vt.data&&(yt.data=vt.data),q[Z]=yt,$++}r.attributes=q,r.attributesNum=$,r.index=W}function _(){let M=r.newAttributes;for(let P=0,J=M.length;P<J;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){let J=r.newAttributes,W=r.enabledAttributes,q=r.attributeDivisors;J[M]=1,W[M]===0&&(s.enableVertexAttribArray(M),W[M]=1),q[M]!==P&&(s.vertexAttribDivisor(M,P),q[M]=P)}function E(){let M=r.newAttributes,P=r.enabledAttributes;for(let J=0,W=P.length;J<W;J++)P[J]!==M[J]&&(s.disableVertexAttribArray(J),P[J]=0)}function v(M,P,J,W,q,it,$){$===!0?s.vertexAttribIPointer(M,P,J,q,it):s.vertexAttribPointer(M,P,J,W,q,it)}function y(M,P,J,W){_();let q=W.attributes,it=J.getAttributes(),$=P.defaultAttributeValues;for(let ft in it){let Z=it[ft];if(Z.location>=0){let dt=q[ft];if(dt===void 0&&(ft==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),ft==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor)),dt!==void 0){let vt=dt.normalized,yt=dt.itemSize,kt=t.get(dt);if(kt===void 0)continue;let Pt=kt.buffer,Y=kt.type,rt=kt.bytesPerElement,_t=Y===s.INT||Y===s.UNSIGNED_INT||dt.gpuType===Xl;if(dt.isInterleavedBufferAttribute){let k=dt.data,pt=k.stride,ht=dt.offset;if(k.isInstancedInterleavedBuffer){for(let z=0;z<Z.locationSize;z++)p(Z.location+z,k.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let z=0;z<Z.locationSize;z++)m(Z.location+z);s.bindBuffer(s.ARRAY_BUFFER,Pt);for(let z=0;z<Z.locationSize;z++)v(Z.location+z,yt/Z.locationSize,Y,vt,pt*rt,(ht+yt/Z.locationSize*z)*rt,_t)}else{if(dt.isInstancedBufferAttribute){for(let k=0;k<Z.locationSize;k++)p(Z.location+k,dt.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let k=0;k<Z.locationSize;k++)m(Z.location+k);s.bindBuffer(s.ARRAY_BUFFER,Pt);for(let k=0;k<Z.locationSize;k++)v(Z.location+k,yt/Z.locationSize,Y,vt,yt*rt,yt/Z.locationSize*k*rt,_t)}}else if($!==void 0){let vt=$[ft];if(vt!==void 0)switch(vt.length){case 2:s.vertexAttrib2fv(Z.location,vt);break;case 3:s.vertexAttrib3fv(Z.location,vt);break;case 4:s.vertexAttrib4fv(Z.location,vt);break;default:s.vertexAttrib1fv(Z.location,vt)}}}}E()}function F(){L();for(let M in n){let P=n[M];for(let J in P){let W=P[J];for(let q in W)h(W[q].object),delete W[q];delete P[J]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let J in P){let W=P[J];for(let q in W)h(W[q].object),delete W[q];delete P[J]}delete n[M.id]}function U(M){for(let P in n){let J=n[P];if(J[M.id]===void 0)continue;let W=J[M.id];for(let q in W)h(W[q].object),delete W[q];delete J[M.id]}}function L(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:F,releaseStatesOfGeometry:C,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Am(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Rm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(U){return!(U!==un&&n.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let L=U===Qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Un&&n.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Pn&&!L)}function l(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:F,maxSamples:C}}function Cm(s){let t=this,e=null,n=0,i=!1,r=!1,o=new qe,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,v=E*4,y=p.clippingState||null;l.value=y,y=h(g,u,v,f);for(let F=0;F!==v;++F)y[F]=e[F];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==_;++v,y+=4)o.copy(d[v]).applyMatrix4(E,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Pm(s){let t=new WeakMap;function e(o,a){return a===Pa?o.mapping=ss:a===Ia&&(o.mapping=rs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Pa||a===Ia)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new hl(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var $r=class extends qr{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ki=4,Yc=[.125,.215,.35,.446,.526,.582],vi=20,ca=new $r,$c=new jt,ha=null,ua=0,da=0,fa=!1,_i=(1+Math.sqrt(5))/2,Zi=1/_i,Zc=[new R(-_i,Zi,0),new R(_i,Zi,0),new R(-Zi,0,_i),new R(Zi,0,_i),new R(0,_i,-Zi),new R(0,_i,Zi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],us=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ha=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ha,ua,da),this._renderer.xr.enabled=fa,t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ha=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Qs,format:un,colorSpace:ys,depthBuffer:!1},i=jc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Im(r)),this._blurMaterial=Lm(r,t,e)}return i}_compileMaterial(t){let e=new Ct(this._lodPlanes[0],t);this._renderer.compile(e,ca)}_sceneToCubeUV(t,e,n,i){let a=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor($c),h.toneMapping=ii,h.autoClear=!1;let f=new Ae({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new Ct(new $t,f),_=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy($c),_=!0);for(let p=0;p<6;p++){let E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let v=this._cubeSize;Tr(i,E*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ss||t.mapping===rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kc());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ct(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ca)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zc[(i-r-1)%Zc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ct(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):vi;m>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);let p=[],E=0;for(let U=0;U<vi;++U){let L=U/_,S=Math.exp(-L*L/2);p.push(S),U===0?E+=S:U<m&&(E+=2*S)}for(let U=0;U<p.length;U++)p[U]=p[U]/E;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-n;let y=this._sizeLods[i],F=3*y*(i>v-Ki?i-v+Ki:0),C=4*(this._cubeSize-y);Tr(e,F,C,3*y,2*y),l.setRenderTarget(e),l.render(d,ca)}};function Im(s){let t=[],e=[],n=[],i=s,r=s-Ki+1+Yc.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Ki?l=Yc[o-s+Ki-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),v=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let C=0;C<f;C++){let U=C%3*2/3-1,L=C>2?0:-1,S=[U,L,0,U+2/3,L,0,U+2/3,L+1,0,U,L,0,U+2/3,L+1,0,U,L+1,0];E.set(S,_*g*C),v.set(u,m*g*C);let M=[C,C,C,C,C,C];y.set(M,p*g*C)}let F=new Me;F.setAttribute("position",new tn(E,_)),F.setAttribute("uv",new tn(v,m)),F.setAttribute("faceIndex",new tn(y,p)),t.push(F),i>Ki&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jc(s,t,e){let n=new kn(s,t,e);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Lm(s,t,e){let n=new Float32Array(vi),i=new R(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Kc(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Jc(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Jl(){return`

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
	`}function Dm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Pa||l===Ia,h=l===ss||l===rs;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new us(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new us(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Um(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ds("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Nm(s,t,e,n){let i={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}u.removeEventListener("dispose",o),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],s.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(f!==null){let E=f.array;_=f.version;for(let v=0,y=E.length;v<y;v+=3){let F=E[v+0],C=E[v+1],U=E[v+2];u.push(F,C,C,U,U,F)}}else if(g!==void 0){let E=g.array;_=g.version;for(let v=0,y=E.length/3-1;v<y;v+=3){let F=v+0,C=v+1,U=v+2;u.push(F,C,C,U,U,F)}}else return;let m=new(Gh(u)?Xr:Wr)(u,1);m.version=_;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function km(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*_[E];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Om(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Fm(s,t,e){let n=new WeakMap,i=new le;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let S=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let y=a.attributes.position.count*v,F=1;y>t.maxTextureSize&&(F=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let C=new Float32Array(y*F*4*d),U=new Gr(C,y,F,d);U.type=Pn,U.needsUpdate=!0;let L=v*4;for(let M=0;M<d;M++){let P=m[M],J=p[M],W=E[M],q=y*F*4*M;for(let it=0;it<P.count;it++){let $=it*L;f===!0&&(i.fromBufferAttribute(P,it),C[q+$+0]=i.x,C[q+$+1]=i.y,C[q+$+2]=i.z,C[q+$+3]=0),g===!0&&(i.fromBufferAttribute(J,it),C[q+$+4]=i.x,C[q+$+5]=i.y,C[q+$+6]=i.z,C[q+$+7]=0),_===!0&&(i.fromBufferAttribute(W,it),C[q+$+8]=i.x,C[q+$+9]=i.y,C[q+$+10]=i.z,C[q+$+11]=W.itemSize===4?i.w:1)}}u={count:d,texture:U,size:new gt(y,F)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function zm(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Zr=class extends Ye{constructor(t,e,n,i,r,o,a,l,c,h=ts){if(h!==ts&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ts&&(n=Si),n===void 0&&h===as&&(n=os),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Yh=new Ye,Qc=new Zr(1,1),$h=new Gr,Zh=new ll,jh=new Yr,th=[],eh=[],nh=new Float32Array(16),ih=new Float32Array(9),sh=new Float32Array(4);function vs(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=th[i];if(r===void 0&&(r=new Float32Array(i),th[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function yo(s,t){let e=eh[t];e===void 0&&(e=new Int32Array(t),eh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Bm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Hm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function Vm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function Gm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function Wm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;sh.set(n),s.uniformMatrix2fv(this.addr,!1,sh),Ce(e,n)}}function Xm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;ih.set(n),s.uniformMatrix3fv(this.addr,!1,ih),Ce(e,n)}}function qm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;nh.set(n),s.uniformMatrix4fv(this.addr,!1,nh),Ce(e,n)}}function Ym(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function $m(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function Zm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function jm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function Km(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Jm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function Qm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function t0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function e0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Qc.compareFunction=Vh,r=Qc):r=Yh,e.setTexture2D(t||r,i)}function n0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Zh,i)}function i0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||jh,i)}function s0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||$h,i)}function r0(s){switch(s){case 5126:return Bm;case 35664:return Hm;case 35665:return Vm;case 35666:return Gm;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return $m;case 35668:case 35672:return Zm;case 35669:case 35673:return jm;case 5125:return Km;case 36294:return Jm;case 36295:return Qm;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}function o0(s,t){s.uniform1fv(this.addr,t)}function a0(s,t){let e=vs(t,this.size,2);s.uniform2fv(this.addr,e)}function l0(s,t){let e=vs(t,this.size,3);s.uniform3fv(this.addr,e)}function c0(s,t){let e=vs(t,this.size,4);s.uniform4fv(this.addr,e)}function h0(s,t){let e=vs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function u0(s,t){let e=vs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function d0(s,t){let e=vs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function f0(s,t){s.uniform1iv(this.addr,t)}function p0(s,t){s.uniform2iv(this.addr,t)}function m0(s,t){s.uniform3iv(this.addr,t)}function g0(s,t){s.uniform4iv(this.addr,t)}function _0(s,t){s.uniform1uiv(this.addr,t)}function x0(s,t){s.uniform2uiv(this.addr,t)}function y0(s,t){s.uniform3uiv(this.addr,t)}function v0(s,t){s.uniform4uiv(this.addr,t)}function M0(s,t,e){let n=this.cache,i=t.length,r=yo(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Yh,r[o])}function b0(s,t,e){let n=this.cache,i=t.length,r=yo(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Zh,r[o])}function S0(s,t,e){let n=this.cache,i=t.length,r=yo(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||jh,r[o])}function E0(s,t,e){let n=this.cache,i=t.length,r=yo(e,i);Re(n,r)||(s.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||$h,r[o])}function w0(s){switch(s){case 5126:return o0;case 35664:return a0;case 35665:return l0;case 35666:return c0;case 35674:return h0;case 35675:return u0;case 35676:return d0;case 5124:case 35670:return f0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return _0;case 36294:return x0;case 36295:return y0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return E0}}var ul=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=r0(e.type)}},dl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=w0(e.type)}},fl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},pa=/(\w+)(\])?(\[|\.)?/g;function rh(s,t){s.seq.push(t),s.map[t.id]=t}function T0(s,t,e){let n=s.name,i=n.length;for(pa.lastIndex=0;;){let r=pa.exec(n),o=pa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){rh(e,c===void 0?new ul(a,s,t):new dl(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new fl(a),rh(e,d)),e=d}}}var ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);T0(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function oh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var A0=37297,R0=0;function C0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ah=new Jt;function P0(s){ie._getMatrix(ah,ie.workingColorSpace,s);let t=`mat3( ${ah.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case xo:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function lh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+C0(s.getShaderSource(t),o)}else return i}function I0(s,t){let e=P0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function L0(s,t){let e;switch(t){case Vu:e="Linear";break;case Gu:e="Reinhard";break;case Wu:e="Cineon";break;case Wl:e="ACESFilmic";break;case qu:e="AgX";break;case Yu:e="Neutral";break;case Xu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ar=new R;function D0(){ie.getLuminanceCoefficients(Ar);let s=Ar.x.toFixed(4),t=Ar.y.toFixed(4),e=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function N0(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function k0(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Us(s){return s!==""}function ch(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(s){return s.replace(O0,z0)}var F0=new Map;function z0(s,t){let e=te[t];if(e===void 0){let n=F0.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pl(e)}var B0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(s){return s.replace(B0,H0)}function H0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function dh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function V0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Rh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function G0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ss:case rs:t="ENVMAP_TYPE_CUBE";break;case _o:t="ENVMAP_TYPE_CUBE_UV";break}return t}function W0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case rs:t="ENVMAP_MODE_REFRACTION";break}return t}function X0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ch:t="ENVMAP_BLENDING_MULTIPLY";break;case Bu:t="ENVMAP_BLENDING_MIX";break;case Hu:t="ENVMAP_BLENDING_ADD";break}return t}function q0(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Y0(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=V0(e),c=G0(e),h=W0(e),d=X0(e),u=q0(e),f=U0(e),g=N0(r),_=i.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),p.length>0&&(p+=`
`)):(m=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),p=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?te.tonemapping_pars_fragment:"",e.toneMapping!==ii?L0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,I0("linearToOutputTexel",e.outputColorSpace),D0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),o=pl(o),o=ch(o,e),o=hh(o,e),a=pl(a),a=ch(a,e),a=hh(a,e),o=uh(o),a=uh(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=E+m+o,y=E+p+a,F=oh(i,i.VERTEX_SHADER,v),C=oh(i,i.FRAGMENT_SHADER,y);i.attachShader(_,F),i.attachShader(_,C),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function U(P){if(s.debug.checkShaderErrors){let J=i.getProgramInfoLog(_).trim(),W=i.getShaderInfoLog(F).trim(),q=i.getShaderInfoLog(C).trim(),it=!0,$=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(it=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,F,C);else{let ft=lh(i,F,"vertex"),Z=lh(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+J+`
`+ft+`
`+Z)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(W===""||q==="")&&($=!1);$&&(P.diagnostics={runnable:it,programLog:J,vertexShader:{log:W,prefix:m},fragmentShader:{log:q,prefix:p}})}i.deleteShader(F),i.deleteShader(C),L=new ns(i,_),S=k0(i,_)}let L;this.getUniforms=function(){return L===void 0&&U(this),L};let S;this.getAttributes=function(){return S===void 0&&U(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,A0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=R0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=C,this}var $0=0,ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gl(t),e.set(t,n)),n}},gl=class{constructor(t){this.id=$0++,this.code=t,this.usedTimes=0}};function Z0(s,t,e,n,i,r,o){let a=new Vs,l=new ml,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,J,W){let q=J.fog,it=W.geometry,$=S.isMeshStandardMaterial?J.environment:null,ft=(S.isMeshStandardMaterial?e:t).get(S.envMap||$),Z=ft&&ft.mapping===_o?ft.image.height:null,dt=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let vt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,yt=vt!==void 0?vt.length:0,kt=0;it.morphAttributes.position!==void 0&&(kt=1),it.morphAttributes.normal!==void 0&&(kt=2),it.morphAttributes.color!==void 0&&(kt=3);let Pt,Y,rt,_t;if(dt){let Yt=gn[dt];Pt=Yt.vertexShader,Y=Yt.fragmentShader}else Pt=S.vertexShader,Y=S.fragmentShader,l.update(S),rt=l.getVertexShaderID(S),_t=l.getFragmentShaderID(S);let k=s.getRenderTarget(),pt=s.state.buffers.depth.getReversed(),ht=W.isInstancedMesh===!0,z=W.isBatchedMesh===!0,ut=!!S.map,G=!!S.matcap,tt=!!ft,A=!!S.aoMap,Mt=!!S.lightMap,st=!!S.bumpMap,Rt=!!S.normalMap,xt=!!S.displacementMap,Lt=!!S.emissiveMap,wt=!!S.metalnessMap,w=!!S.roughnessMap,x=S.anisotropy>0,X=S.clearcoat>0,et=S.dispersion>0,I=S.iridescence>0,D=S.sheen>0,at=S.transmission>0,Q=x&&!!S.anisotropyMap,lt=X&&!!S.clearcoatMap,Et=X&&!!S.clearcoatNormalMap,ot=X&&!!S.clearcoatRoughnessMap,bt=I&&!!S.iridescenceMap,Ut=I&&!!S.iridescenceThicknessMap,Tt=D&&!!S.sheenColorMap,At=D&&!!S.sheenRoughnessMap,qt=!!S.specularMap,Xt=!!S.specularColorMap,ct=!!S.specularIntensityMap,T=at&&!!S.transmissionMap,B=at&&!!S.thicknessMap,N=!!S.gradientMap,O=!!S.alphaMap,nt=S.alphaTest>0,mt=!!S.alphaHash,Dt=!!S.extensions,Ot=ii;S.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ot=s.toneMapping);let Qt={shaderID:dt,shaderType:S.type,shaderName:S.name,vertexShader:Pt,fragmentShader:Y,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:z,batchingColor:z&&W._colorsTexture!==null,instancing:ht,instancingColor:ht&&W.instanceColor!==null,instancingMorph:ht&&W.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:k===null?s.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ys,alphaToCoverage:!!S.alphaToCoverage,map:ut,matcap:G,envMap:tt,envMapMode:tt&&ft.mapping,envMapCubeUVHeight:Z,aoMap:A,lightMap:Mt,bumpMap:st,normalMap:Rt,displacementMap:u&&xt,emissiveMap:Lt,normalMapObjectSpace:Rt&&S.normalMapType===Ku,normalMapTangentSpace:Rt&&S.normalMapType===Hh,metalnessMap:wt,roughnessMap:w,anisotropy:x,anisotropyMap:Q,clearcoat:X,clearcoatMap:lt,clearcoatNormalMap:Et,clearcoatRoughnessMap:ot,dispersion:et,iridescence:I,iridescenceMap:bt,iridescenceThicknessMap:Ut,sheen:D,sheenColorMap:Tt,sheenRoughnessMap:At,specularMap:qt,specularColorMap:Xt,specularIntensityMap:ct,transmission:at,transmissionMap:T,thicknessMap:B,gradientMap:N,opaque:S.transparent===!1&&S.blending===Qi&&S.alphaToCoverage===!1,alphaMap:O,alphaTest:nt,alphaHash:mt,combine:S.combine,mapUv:ut&&_(S.map.channel),aoMapUv:A&&_(S.aoMap.channel),lightMapUv:Mt&&_(S.lightMap.channel),bumpMapUv:st&&_(S.bumpMap.channel),normalMapUv:Rt&&_(S.normalMap.channel),displacementMapUv:xt&&_(S.displacementMap.channel),emissiveMapUv:Lt&&_(S.emissiveMap.channel),metalnessMapUv:wt&&_(S.metalnessMap.channel),roughnessMapUv:w&&_(S.roughnessMap.channel),anisotropyMapUv:Q&&_(S.anisotropyMap.channel),clearcoatMapUv:lt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Et&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(S.sheenRoughnessMap.channel),specularMapUv:qt&&_(S.specularMap.channel),specularColorMapUv:Xt&&_(S.specularColorMap.channel),specularIntensityMapUv:ct&&_(S.specularIntensityMap.channel),transmissionMapUv:T&&_(S.transmissionMap.channel),thicknessMapUv:B&&_(S.thicknessMap.channel),alphaMapUv:O&&_(S.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(Rt||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!it.attributes.uv&&(ut||O),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:pt,skinning:W.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:kt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:ut&&S.map.isVideoTexture===!0&&ie.getTransfer(S.map.colorSpace)===ae,decodeVideoTextureEmissive:Lt&&S.emissiveMap.isVideoTexture===!0&&ie.getTransfer(S.emissiveMap.colorSpace)===ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Qe,flipSided:S.side===Te,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Dt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&S.extensions.multiDraw===!0||z)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(E(M,S),v(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function E(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let M=g[S.type],P;if(M){let J=gn[M];P=Fd.clone(J.uniforms)}else P=S.uniforms;return P}function F(S,M){let P;for(let J=0,W=h.length;J<W;J++){let q=h[J];if(q.cacheKey===M){P=q,++P.usedTimes;break}}return P===void 0&&(P=new Y0(s,M,S,r),h.push(P)),P}function C(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function U(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:F,releaseProgram:C,releaseShaderCache:U,programs:h,dispose:L}}function j0(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function K0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function fh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ph(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,g,_,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function a(d,u,f,g,_,m){let p=o(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,g,_,m){let p=o(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||K0),n.length>1&&n.sort(u||fh),i.length>1&&i.sort(u||fh)}function h(){for(let d=t,u=s.length;d<u;d++){let f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function J0(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new ph,s.set(n,[o])):i>=r.length?(o=new ph,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Q0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new jt};break;case"SpotLight":e={position:new R,direction:new R,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function tg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var eg=0;function ng(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ig(s){let t=new Q0,e=tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let i=new R,r=new ge,o=new ge;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,v=0,y=0,F=0,C=0,U=0;c.sort(ng);for(let S=0,M=c.length;S<M;S++){let P=c[S],J=P.color,W=P.intensity,q=P.distance,it=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=J.r*W,d+=J.g*W,u+=J.b*W;else if(P.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(P.sh.coefficients[$],W);U++}else if(P.isDirectionalLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ft=P.shadow,Z=e.get(P);Z.shadowIntensity=ft.intensity,Z.shadowBias=ft.bias,Z.shadowNormalBias=ft.normalBias,Z.shadowRadius=ft.radius,Z.shadowMapSize=ft.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=it,n.directionalShadowMatrix[f]=P.shadow.matrix,E++}n.directional[f]=$,f++}else if(P.isSpotLight){let $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(J).multiplyScalar(W),$.distance=q,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,n.spot[_]=$;let ft=P.shadow;if(P.map&&(n.spotLightMap[F]=P.map,F++,ft.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[_]=ft.matrix,P.castShadow){let Z=e.get(P);Z.shadowIntensity=ft.intensity,Z.shadowBias=ft.bias,Z.shadowNormalBias=ft.normalBias,Z.shadowRadius=ft.radius,Z.shadowMapSize=ft.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=it,y++}_++}else if(P.isRectAreaLight){let $=t.get(P);$.color.copy(J).multiplyScalar(W),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=$,m++}else if(P.isPointLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){let ft=P.shadow,Z=e.get(P);Z.shadowIntensity=ft.intensity,Z.shadowBias=ft.bias,Z.shadowNormalBias=ft.normalBias,Z.shadowRadius=ft.radius,Z.shadowMapSize=ft.mapSize,Z.shadowCameraNear=ft.camera.near,Z.shadowCameraFar=ft.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=it,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=$,g++}else if(P.isHemisphereLight){let $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(W),$.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[p]=$,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==E||L.numPointShadows!==v||L.numSpotShadows!==y||L.numSpotMaps!==F||L.numLightProbes!==U)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+F-C,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=U,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=E,L.numPointShadows=v,L.numSpotShadows=y,L.numSpotMaps=F,L.numLightProbes=U,n.version=eg++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){let v=c[p];if(v.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(v.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function mh(s){let t=new ig(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function sg(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new mh(s),t.set(i,[a])):r>=o.length?(a=new mh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var _l=class extends ri{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},xl=class extends ri{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,og=`uniform sampler2D shadow_pass;
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
}`;function ag(s,t,e){let n=new Gs,i=new gt,r=new gt,o=new le,a=new _l({depthPacking:ju}),l=new xl,c={},h=e.maxTextureSize,d={[si]:Te,[Te]:si,[Qe]:Qe},u=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:rg,fragmentShader:og}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Me;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ct(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rh;let p=this.type;this.render=function(C,U,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let S=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),J=s.state;J.setBlending(ni),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let W=p!==Cn&&this.type===Cn,q=p===Cn&&this.type!==Cn;for(let it=0,$=C.length;it<$;it++){let ft=C[it],Z=ft.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ft,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);let dt=Z.getFrameExtents();if(i.multiply(dt),r.copy(Z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/dt.x),i.x=r.x*dt.x,Z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/dt.y),i.y=r.y*dt.y,Z.mapSize.y=r.y)),Z.map===null||W===!0||q===!0){let yt=this.type!==Cn?{minFilter:dn,magFilter:dn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new kn(i.x,i.y,yt),Z.map.texture.name=ft.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();let vt=Z.getViewportCount();for(let yt=0;yt<vt;yt++){let kt=Z.getViewport(yt);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),J.viewport(o),Z.updateMatrices(ft,yt),n=Z.getFrustum(),y(U,L,Z.camera,ft,this.type)}Z.isPointLightShadow!==!0&&this.type===Cn&&E(Z,L),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,M,P)};function E(C,U){let L=t.update(_);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new kn(i.x,i.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(U,null,L,u,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(U,null,L,f,_,null)}function v(C,U,L,S){let M=null,P=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)M=P;else if(M=L.isPointLight===!0?l:a,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){let J=M.uuid,W=U.uuid,q=c[J];q===void 0&&(q={},c[J]=q);let it=q[W];it===void 0&&(it=M.clone(),q[W]=it,U.addEventListener("dispose",F)),M=it}if(M.visible=U.visible,M.wireframe=U.wireframe,S===Cn?M.side=U.shadowSide!==null?U.shadowSide:U.side:M.side=U.shadowSide!==null?U.shadowSide:d[U.side],M.alphaMap=U.alphaMap,M.alphaTest=U.alphaTest,M.map=U.map,M.clipShadows=U.clipShadows,M.clippingPlanes=U.clippingPlanes,M.clipIntersection=U.clipIntersection,M.displacementMap=U.displacementMap,M.displacementScale=U.displacementScale,M.displacementBias=U.displacementBias,M.wireframeLinewidth=U.wireframeLinewidth,M.linewidth=U.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let J=s.properties.get(M);J.light=L}return M}function y(C,U,L,S,M){if(C.visible===!1)return;if(C.layers.test(U.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Cn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);let W=t.update(C),q=C.material;if(Array.isArray(q)){let it=W.groups;for(let $=0,ft=it.length;$<ft;$++){let Z=it[$],dt=q[Z.materialIndex];if(dt&&dt.visible){let vt=v(C,dt,S,M);C.onBeforeShadow(s,C,U,L,W,vt,Z),s.renderBufferDirect(L,null,W,vt,C,Z),C.onAfterShadow(s,C,U,L,W,vt,Z)}}}else if(q.visible){let it=v(C,q,S,M);C.onBeforeShadow(s,C,U,L,W,it,null),s.renderBufferDirect(L,null,W,it,C,null),C.onAfterShadow(s,C,U,L,W,it,null)}}let J=C.children;for(let W=0,q=J.length;W<q;W++)y(J[W],U,L,S,M)}function F(C){C.target.removeEventListener("dispose",F);for(let L in c){let S=c[L],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var lg={[Sa]:Ea,[wa]:Ra,[Ta]:Ca,[is]:Aa,[Ea]:Sa,[Ra]:wa,[Ca]:Ta,[Aa]:is};function cg(s,t){function e(){let T=!1,B=new le,N=null,O=new le(0,0,0,0);return{setMask:function(nt){N!==nt&&!T&&(s.colorMask(nt,nt,nt,nt),N=nt)},setLocked:function(nt){T=nt},setClear:function(nt,mt,Dt,Ot,Qt){Qt===!0&&(nt*=Ot,mt*=Ot,Dt*=Ot),B.set(nt,mt,Dt,Ot),O.equals(B)===!1&&(s.clearColor(nt,mt,Dt,Ot),O.copy(B))},reset:function(){T=!1,N=null,O.set(-1,0,0,0)}}}function n(){let T=!1,B=!1,N=null,O=null,nt=null;return{setReversed:function(mt){if(B!==mt){let Dt=t.get("EXT_clip_control");B?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);let Ot=nt;nt=null,this.setClear(Ot)}B=mt},getReversed:function(){return B},setTest:function(mt){mt?k(s.DEPTH_TEST):pt(s.DEPTH_TEST)},setMask:function(mt){N!==mt&&!T&&(s.depthMask(mt),N=mt)},setFunc:function(mt){if(B&&(mt=lg[mt]),O!==mt){switch(mt){case Sa:s.depthFunc(s.NEVER);break;case Ea:s.depthFunc(s.ALWAYS);break;case wa:s.depthFunc(s.LESS);break;case is:s.depthFunc(s.LEQUAL);break;case Ta:s.depthFunc(s.EQUAL);break;case Aa:s.depthFunc(s.GEQUAL);break;case Ra:s.depthFunc(s.GREATER);break;case Ca:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}O=mt}},setLocked:function(mt){T=mt},setClear:function(mt){nt!==mt&&(B&&(mt=1-mt),s.clearDepth(mt),nt=mt)},reset:function(){T=!1,N=null,O=null,nt=null,B=!1}}}function i(){let T=!1,B=null,N=null,O=null,nt=null,mt=null,Dt=null,Ot=null,Qt=null;return{setTest:function(Yt){T||(Yt?k(s.STENCIL_TEST):pt(s.STENCIL_TEST))},setMask:function(Yt){B!==Yt&&!T&&(s.stencilMask(Yt),B=Yt)},setFunc:function(Yt,Se,he){(N!==Yt||O!==Se||nt!==he)&&(s.stencilFunc(Yt,Se,he),N=Yt,O=Se,nt=he)},setOp:function(Yt,Se,he){(mt!==Yt||Dt!==Se||Ot!==he)&&(s.stencilOp(Yt,Se,he),mt=Yt,Dt=Se,Ot=he)},setLocked:function(Yt){T=Yt},setClear:function(Yt){Qt!==Yt&&(s.clearStencil(Yt),Qt=Yt)},reset:function(){T=!1,B=null,N=null,O=null,nt=null,mt=null,Dt=null,Ot=null,Qt=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,v=null,y=null,F=null,C=null,U=new jt(0,0,0),L=0,S=!1,M=null,P=null,J=null,W=null,q=null,it=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,ft=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=ft>=1):Z.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=ft>=2);let dt=null,vt={},yt=s.getParameter(s.SCISSOR_BOX),kt=s.getParameter(s.VIEWPORT),Pt=new le().fromArray(yt),Y=new le().fromArray(kt);function rt(T,B,N,O){let nt=new Uint8Array(4),mt=s.createTexture();s.bindTexture(T,mt),s.texParameteri(T,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(T,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Dt=0;Dt<N;Dt++)T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY?s.texImage3D(B,0,s.RGBA,1,1,O,0,s.RGBA,s.UNSIGNED_BYTE,nt):s.texImage2D(B+Dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,nt);return mt}let _t={};_t[s.TEXTURE_2D]=rt(s.TEXTURE_2D,s.TEXTURE_2D,1),_t[s.TEXTURE_CUBE_MAP]=rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[s.TEXTURE_2D_ARRAY]=rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_t[s.TEXTURE_3D]=rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(s.DEPTH_TEST),o.setFunc(is),st(!1),Rt(gc),k(s.CULL_FACE),A(ni);function k(T){h[T]!==!0&&(s.enable(T),h[T]=!0)}function pt(T){h[T]!==!1&&(s.disable(T),h[T]=!1)}function ht(T,B){return d[T]!==B?(s.bindFramebuffer(T,B),d[T]=B,T===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=B),T===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=B),!0):!1}function z(T,B){let N=f,O=!1;if(T){N=u.get(B),N===void 0&&(N=[],u.set(B,N));let nt=T.textures;if(N.length!==nt.length||N[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,Dt=nt.length;mt<Dt;mt++)N[mt]=s.COLOR_ATTACHMENT0+mt;N.length=nt.length,O=!0}}else N[0]!==s.BACK&&(N[0]=s.BACK,O=!0);O&&s.drawBuffers(N)}function ut(T){return g!==T?(s.useProgram(T),g=T,!0):!1}let G={[xi]:s.FUNC_ADD,[Su]:s.FUNC_SUBTRACT,[Eu]:s.FUNC_REVERSE_SUBTRACT};G[wu]=s.MIN,G[Tu]=s.MAX;let tt={[Au]:s.ZERO,[Ru]:s.ONE,[Cu]:s.SRC_COLOR,[Ma]:s.SRC_ALPHA,[Nu]:s.SRC_ALPHA_SATURATE,[Du]:s.DST_COLOR,[Iu]:s.DST_ALPHA,[Pu]:s.ONE_MINUS_SRC_COLOR,[ba]:s.ONE_MINUS_SRC_ALPHA,[Uu]:s.ONE_MINUS_DST_COLOR,[Lu]:s.ONE_MINUS_DST_ALPHA,[ku]:s.CONSTANT_COLOR,[Ou]:s.ONE_MINUS_CONSTANT_COLOR,[Fu]:s.CONSTANT_ALPHA,[zu]:s.ONE_MINUS_CONSTANT_ALPHA};function A(T,B,N,O,nt,mt,Dt,Ot,Qt,Yt){if(T===ni){_===!0&&(pt(s.BLEND),_=!1);return}if(_===!1&&(k(s.BLEND),_=!0),T!==bu){if(T!==m||Yt!==S){if((p!==xi||y!==xi)&&(s.blendEquation(s.FUNC_ADD),p=xi,y=xi),Yt)switch(T){case Qi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _c:s.blendFunc(s.ONE,s.ONE);break;case xc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _c:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case xc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}E=null,v=null,F=null,C=null,U.set(0,0,0),L=0,m=T,S=Yt}return}nt=nt||B,mt=mt||N,Dt=Dt||O,(B!==p||nt!==y)&&(s.blendEquationSeparate(G[B],G[nt]),p=B,y=nt),(N!==E||O!==v||mt!==F||Dt!==C)&&(s.blendFuncSeparate(tt[N],tt[O],tt[mt],tt[Dt]),E=N,v=O,F=mt,C=Dt),(Ot.equals(U)===!1||Qt!==L)&&(s.blendColor(Ot.r,Ot.g,Ot.b,Qt),U.copy(Ot),L=Qt),m=T,S=!1}function Mt(T,B){T.side===Qe?pt(s.CULL_FACE):k(s.CULL_FACE);let N=T.side===Te;B&&(N=!N),st(N),T.blending===Qi&&T.transparent===!1?A(ni):A(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),o.setFunc(T.depthFunc),o.setTest(T.depthTest),o.setMask(T.depthWrite),r.setMask(T.colorWrite);let O=T.stencilWrite;a.setTest(O),O&&(a.setMask(T.stencilWriteMask),a.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),a.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),Lt(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?k(s.SAMPLE_ALPHA_TO_COVERAGE):pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function st(T){M!==T&&(T?s.frontFace(s.CW):s.frontFace(s.CCW),M=T)}function Rt(T){T!==vu?(k(s.CULL_FACE),T!==P&&(T===gc?s.cullFace(s.BACK):T===Mu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pt(s.CULL_FACE),P=T}function xt(T){T!==J&&($&&s.lineWidth(T),J=T)}function Lt(T,B,N){T?(k(s.POLYGON_OFFSET_FILL),(W!==B||q!==N)&&(s.polygonOffset(B,N),W=B,q=N)):pt(s.POLYGON_OFFSET_FILL)}function wt(T){T?k(s.SCISSOR_TEST):pt(s.SCISSOR_TEST)}function w(T){T===void 0&&(T=s.TEXTURE0+it-1),dt!==T&&(s.activeTexture(T),dt=T)}function x(T,B,N){N===void 0&&(dt===null?N=s.TEXTURE0+it-1:N=dt);let O=vt[N];O===void 0&&(O={type:void 0,texture:void 0},vt[N]=O),(O.type!==T||O.texture!==B)&&(dt!==N&&(s.activeTexture(N),dt=N),s.bindTexture(T,B||_t[T]),O.type=T,O.texture=B)}function X(){let T=vt[dt];T!==void 0&&T.type!==void 0&&(s.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function et(){try{s.compressedTexImage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function I(){try{s.compressedTexImage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function D(){try{s.texSubImage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function at(){try{s.texSubImage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Q(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function lt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Et(){try{s.texStorage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ot(){try{s.texStorage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function bt(){try{s.texImage2D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ut(){try{s.texImage3D.apply(s,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Tt(T){Pt.equals(T)===!1&&(s.scissor(T.x,T.y,T.z,T.w),Pt.copy(T))}function At(T){Y.equals(T)===!1&&(s.viewport(T.x,T.y,T.z,T.w),Y.copy(T))}function qt(T,B){let N=c.get(B);N===void 0&&(N=new WeakMap,c.set(B,N));let O=N.get(T);O===void 0&&(O=s.getUniformBlockIndex(B,T.name),N.set(T,O))}function Xt(T,B){let O=c.get(B).get(T);l.get(B)!==O&&(s.uniformBlockBinding(B,O,T.__bindingPointIndex),l.set(B,O))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},dt=null,vt={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,v=null,y=null,F=null,C=null,U=new jt(0,0,0),L=0,S=!1,M=null,P=null,J=null,W=null,q=null,Pt.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:k,disable:pt,bindFramebuffer:ht,drawBuffers:z,useProgram:ut,setBlending:A,setMaterial:Mt,setFlipSided:st,setCullFace:Rt,setLineWidth:xt,setPolygonOffset:Lt,setScissorTest:wt,activeTexture:w,bindTexture:x,unbindTexture:X,compressedTexImage2D:et,compressedTexImage3D:I,texImage2D:bt,texImage3D:Ut,updateUBOMapping:qt,uniformBlockBinding:Xt,texStorage2D:Et,texStorage3D:ot,texSubImage2D:D,texSubImage3D:at,compressedTexSubImage2D:Q,compressedTexSubImage3D:lt,scissor:Tt,viewport:At,reset:ct}}function gh(s,t,e,n){let i=hg(n);switch(e){case Uh:return s*t;case kh:return s*t;case Oh:return s*t*2;case Fh:return s*t/i.components*i.byteLength;case $l:return s*t/i.components*i.byteLength;case zh:return s*t*2/i.components*i.byteLength;case Zl:return s*t*2/i.components*i.byteLength;case Nh:return s*t*3/i.components*i.byteLength;case un:return s*t*4/i.components*i.byteLength;case jl:return s*t*4/i.components*i.byteLength;case Ur:case Nr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case kr:case Or:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ua:case ka:return Math.max(s,16)*Math.max(t,8)/4;case Da:case Na:return Math.max(s,8)*Math.max(t,8)/2;case Oa:case Fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case za:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Va:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case qa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case $a:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Za:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ka:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Qa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Fr:case tl:case el:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Bh:case nl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case il:case sl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hg(s){switch(s){case Un:case Ih:return{byteLength:1,components:1};case Hs:case Lh:case Qs:return{byteLength:2,components:1};case ql:case Yl:return{byteLength:2,components:4};case Si:case Xl:case Pn:return{byteLength:4,components:1};case Dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function ug(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return f?new OffscreenCanvas(w,x):Hr("canvas")}function _(w,x,X){let et=1,I=wt(w);if((I.width>X||I.height>X)&&(et=X/Math.max(I.width,I.height)),et<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let D=Math.floor(et*I.width),at=Math.floor(et*I.height);d===void 0&&(d=g(D,at));let Q=x?g(D,at):d;return Q.width=D,Q.height=at,Q.getContext("2d").drawImage(w,0,0,D,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+D+"x"+at+")."),Q}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){s.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(w,x,X,et,I=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let D=x;if(x===s.RED&&(X===s.FLOAT&&(D=s.R32F),X===s.HALF_FLOAT&&(D=s.R16F),X===s.UNSIGNED_BYTE&&(D=s.R8)),x===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(D=s.R8UI),X===s.UNSIGNED_SHORT&&(D=s.R16UI),X===s.UNSIGNED_INT&&(D=s.R32UI),X===s.BYTE&&(D=s.R8I),X===s.SHORT&&(D=s.R16I),X===s.INT&&(D=s.R32I)),x===s.RG&&(X===s.FLOAT&&(D=s.RG32F),X===s.HALF_FLOAT&&(D=s.RG16F),X===s.UNSIGNED_BYTE&&(D=s.RG8)),x===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(D=s.RG8UI),X===s.UNSIGNED_SHORT&&(D=s.RG16UI),X===s.UNSIGNED_INT&&(D=s.RG32UI),X===s.BYTE&&(D=s.RG8I),X===s.SHORT&&(D=s.RG16I),X===s.INT&&(D=s.RG32I)),x===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(D=s.RGB8UI),X===s.UNSIGNED_SHORT&&(D=s.RGB16UI),X===s.UNSIGNED_INT&&(D=s.RGB32UI),X===s.BYTE&&(D=s.RGB8I),X===s.SHORT&&(D=s.RGB16I),X===s.INT&&(D=s.RGB32I)),x===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(D=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(D=s.RGBA16UI),X===s.UNSIGNED_INT&&(D=s.RGBA32UI),X===s.BYTE&&(D=s.RGBA8I),X===s.SHORT&&(D=s.RGBA16I),X===s.INT&&(D=s.RGBA32I)),x===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(D=s.RGB9_E5),x===s.RGBA){let at=I?xo:ie.getTransfer(et);X===s.FLOAT&&(D=s.RGBA32F),X===s.HALF_FLOAT&&(D=s.RGBA16F),X===s.UNSIGNED_BYTE&&(D=at===ae?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(D=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(D=s.RGB5_A1)}return(D===s.R16F||D===s.R32F||D===s.RG16F||D===s.RG32F||D===s.RGBA16F||D===s.RGBA32F)&&t.get("EXT_color_buffer_float"),D}function y(w,x){let X;return w?x===null||x===Si||x===os?X=s.DEPTH24_STENCIL8:x===Pn?X=s.DEPTH32F_STENCIL8:x===Hs&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Si||x===os?X=s.DEPTH_COMPONENT24:x===Pn?X=s.DEPTH_COMPONENT32F:x===Hs&&(X=s.DEPTH_COMPONENT16),X}function F(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==dn&&w.minFilter!==_n?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function C(w){let x=w.target;x.removeEventListener("dispose",C),L(x),x.isVideoTexture&&h.delete(x)}function U(w){let x=w.target;x.removeEventListener("dispose",U),M(x)}function L(w){let x=n.get(w);if(x.__webglInit===void 0)return;let X=w.source,et=u.get(X);if(et){let I=et[x.__cacheKey];I.usedTimes--,I.usedTimes===0&&S(w),Object.keys(et).length===0&&u.delete(X)}n.remove(w)}function S(w){let x=n.get(w);s.deleteTexture(x.__webglTexture);let X=w.source,et=u.get(X);delete et[x.__cacheKey],o.memory.textures--}function M(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(x.__webglFramebuffer[et]))for(let I=0;I<x.__webglFramebuffer[et].length;I++)s.deleteFramebuffer(x.__webglFramebuffer[et][I]);else s.deleteFramebuffer(x.__webglFramebuffer[et]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[et])}else{if(Array.isArray(x.__webglFramebuffer))for(let et=0;et<x.__webglFramebuffer.length;et++)s.deleteFramebuffer(x.__webglFramebuffer[et]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let et=0;et<x.__webglColorRenderbuffer.length;et++)x.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[et]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let X=w.textures;for(let et=0,I=X.length;et<I;et++){let D=n.get(X[et]);D.__webglTexture&&(s.deleteTexture(D.__webglTexture),o.memory.textures--),n.remove(X[et])}n.remove(w)}let P=0;function J(){P=0}function W(){let w=P;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),P+=1,w}function q(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function it(w,x){let X=n.get(w);if(w.isVideoTexture&&xt(w),w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){let et=w.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(X,w,x);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+x)}function $(w,x){let X=n.get(w);if(w.version>0&&X.__version!==w.version){Y(X,w,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+x)}function ft(w,x){let X=n.get(w);if(w.version>0&&X.__version!==w.version){Y(X,w,x);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+x)}function Z(w,x){let X=n.get(w);if(w.version>0&&X.__version!==w.version){rt(X,w,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+x)}let dt={[Dn]:s.REPEAT,[Mi]:s.CLAMP_TO_EDGE,[La]:s.MIRRORED_REPEAT},vt={[dn]:s.NEAREST,[$u]:s.NEAREST_MIPMAP_NEAREST,[ar]:s.NEAREST_MIPMAP_LINEAR,[_n]:s.LINEAR,[Ho]:s.LINEAR_MIPMAP_NEAREST,[bi]:s.LINEAR_MIPMAP_LINEAR},yt={[Ju]:s.NEVER,[sd]:s.ALWAYS,[Qu]:s.LESS,[Vh]:s.LEQUAL,[td]:s.EQUAL,[id]:s.GEQUAL,[ed]:s.GREATER,[nd]:s.NOTEQUAL};function kt(w,x){if(x.type===Pn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===_n||x.magFilter===Ho||x.magFilter===ar||x.magFilter===bi||x.minFilter===_n||x.minFilter===Ho||x.minFilter===ar||x.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,dt[x.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,dt[x.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,dt[x.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,vt[x.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,vt[x.minFilter]),x.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,yt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===dn||x.minFilter!==ar&&x.minFilter!==bi||x.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Pt(w,x){let X=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",C));let et=x.source,I=u.get(et);I===void 0&&(I={},u.set(et,I));let D=q(x);if(D!==w.__cacheKey){I[D]===void 0&&(I[D]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),I[D].usedTimes++;let at=I[w.__cacheKey];at!==void 0&&(I[w.__cacheKey].usedTimes--,at.usedTimes===0&&S(x)),w.__cacheKey=D,w.__webglTexture=I[D].texture}return X}function Y(w,x,X){let et=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(et=s.TEXTURE_3D);let I=Pt(w,x),D=x.source;e.bindTexture(et,w.__webglTexture,s.TEXTURE0+X);let at=n.get(D);if(D.version!==at.__version||I===!0){e.activeTexture(s.TEXTURE0+X);let Q=ie.getPrimaries(ie.workingColorSpace),lt=x.colorSpace===ei?null:ie.getPrimaries(x.colorSpace),Et=x.colorSpace===ei||Q===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let ot=_(x.image,!1,i.maxTextureSize);ot=Lt(x,ot);let bt=r.convert(x.format,x.colorSpace),Ut=r.convert(x.type),Tt=v(x.internalFormat,bt,Ut,x.colorSpace,x.isVideoTexture);kt(et,x);let At,qt=x.mipmaps,Xt=x.isVideoTexture!==!0,ct=at.__version===void 0||I===!0,T=D.dataReady,B=F(x,ot);if(x.isDepthTexture)Tt=y(x.format===as,x.type),ct&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,Tt,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,Tt,ot.width,ot.height,0,bt,Ut,null));else if(x.isDataTexture)if(qt.length>0){Xt&&ct&&e.texStorage2D(s.TEXTURE_2D,B,Tt,qt[0].width,qt[0].height);for(let N=0,O=qt.length;N<O;N++)At=qt[N],Xt?T&&e.texSubImage2D(s.TEXTURE_2D,N,0,0,At.width,At.height,bt,Ut,At.data):e.texImage2D(s.TEXTURE_2D,N,Tt,At.width,At.height,0,bt,Ut,At.data);x.generateMipmaps=!1}else Xt?(ct&&e.texStorage2D(s.TEXTURE_2D,B,Tt,ot.width,ot.height),T&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot.width,ot.height,bt,Ut,ot.data)):e.texImage2D(s.TEXTURE_2D,0,Tt,ot.width,ot.height,0,bt,Ut,ot.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Xt&&ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,B,Tt,qt[0].width,qt[0].height,ot.depth);for(let N=0,O=qt.length;N<O;N++)if(At=qt[N],x.format!==un)if(bt!==null)if(Xt){if(T)if(x.layerUpdates.size>0){let nt=gh(At.width,At.height,x.format,x.type);for(let mt of x.layerUpdates){let Dt=At.data.subarray(mt*nt/At.data.BYTES_PER_ELEMENT,(mt+1)*nt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,N,0,0,mt,At.width,At.height,1,bt,Dt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,N,0,0,0,At.width,At.height,ot.depth,bt,At.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,N,Tt,At.width,At.height,ot.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?T&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,N,0,0,0,At.width,At.height,ot.depth,bt,Ut,At.data):e.texImage3D(s.TEXTURE_2D_ARRAY,N,Tt,At.width,At.height,ot.depth,0,bt,Ut,At.data)}else{Xt&&ct&&e.texStorage2D(s.TEXTURE_2D,B,Tt,qt[0].width,qt[0].height);for(let N=0,O=qt.length;N<O;N++)At=qt[N],x.format!==un?bt!==null?Xt?T&&e.compressedTexSubImage2D(s.TEXTURE_2D,N,0,0,At.width,At.height,bt,At.data):e.compressedTexImage2D(s.TEXTURE_2D,N,Tt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?T&&e.texSubImage2D(s.TEXTURE_2D,N,0,0,At.width,At.height,bt,Ut,At.data):e.texImage2D(s.TEXTURE_2D,N,Tt,At.width,At.height,0,bt,Ut,At.data)}else if(x.isDataArrayTexture)if(Xt){if(ct&&e.texStorage3D(s.TEXTURE_2D_ARRAY,B,Tt,ot.width,ot.height,ot.depth),T)if(x.layerUpdates.size>0){let N=gh(ot.width,ot.height,x.format,x.type);for(let O of x.layerUpdates){let nt=ot.data.subarray(O*N/ot.data.BYTES_PER_ELEMENT,(O+1)*N/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,O,ot.width,ot.height,1,bt,Ut,nt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,bt,Ut,ot.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Tt,ot.width,ot.height,ot.depth,0,bt,Ut,ot.data);else if(x.isData3DTexture)Xt?(ct&&e.texStorage3D(s.TEXTURE_3D,B,Tt,ot.width,ot.height,ot.depth),T&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,bt,Ut,ot.data)):e.texImage3D(s.TEXTURE_3D,0,Tt,ot.width,ot.height,ot.depth,0,bt,Ut,ot.data);else if(x.isFramebufferTexture){if(ct)if(Xt)e.texStorage2D(s.TEXTURE_2D,B,Tt,ot.width,ot.height);else{let N=ot.width,O=ot.height;for(let nt=0;nt<B;nt++)e.texImage2D(s.TEXTURE_2D,nt,Tt,N,O,0,bt,Ut,null),N>>=1,O>>=1}}else if(qt.length>0){if(Xt&&ct){let N=wt(qt[0]);e.texStorage2D(s.TEXTURE_2D,B,Tt,N.width,N.height)}for(let N=0,O=qt.length;N<O;N++)At=qt[N],Xt?T&&e.texSubImage2D(s.TEXTURE_2D,N,0,0,bt,Ut,At):e.texImage2D(s.TEXTURE_2D,N,Tt,bt,Ut,At);x.generateMipmaps=!1}else if(Xt){if(ct){let N=wt(ot);e.texStorage2D(s.TEXTURE_2D,B,Tt,N.width,N.height)}T&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,bt,Ut,ot)}else e.texImage2D(s.TEXTURE_2D,0,Tt,bt,Ut,ot);m(x)&&p(et),at.__version=D.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function rt(w,x,X){if(x.image.length!==6)return;let et=Pt(w,x),I=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+X);let D=n.get(I);if(I.version!==D.__version||et===!0){e.activeTexture(s.TEXTURE0+X);let at=ie.getPrimaries(ie.workingColorSpace),Q=x.colorSpace===ei?null:ie.getPrimaries(x.colorSpace),lt=x.colorSpace===ei||at===Q?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Et=x.isCompressedTexture||x.image[0].isCompressedTexture,ot=x.image[0]&&x.image[0].isDataTexture,bt=[];for(let O=0;O<6;O++)!Et&&!ot?bt[O]=_(x.image[O],!0,i.maxCubemapSize):bt[O]=ot?x.image[O].image:x.image[O],bt[O]=Lt(x,bt[O]);let Ut=bt[0],Tt=r.convert(x.format,x.colorSpace),At=r.convert(x.type),qt=v(x.internalFormat,Tt,At,x.colorSpace),Xt=x.isVideoTexture!==!0,ct=D.__version===void 0||et===!0,T=I.dataReady,B=F(x,Ut);kt(s.TEXTURE_CUBE_MAP,x);let N;if(Et){Xt&&ct&&e.texStorage2D(s.TEXTURE_CUBE_MAP,B,qt,Ut.width,Ut.height);for(let O=0;O<6;O++){N=bt[O].mipmaps;for(let nt=0;nt<N.length;nt++){let mt=N[nt];x.format!==un?Tt!==null?Xt?T&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,nt,0,0,mt.width,mt.height,Tt,mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,nt,qt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?T&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,nt,0,0,mt.width,mt.height,Tt,At,mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,nt,qt,mt.width,mt.height,0,Tt,At,mt.data)}}}else{if(N=x.mipmaps,Xt&&ct){N.length>0&&B++;let O=wt(bt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,B,qt,O.width,O.height)}for(let O=0;O<6;O++)if(ot){Xt?T&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,bt[O].width,bt[O].height,Tt,At,bt[O].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,qt,bt[O].width,bt[O].height,0,Tt,At,bt[O].data);for(let nt=0;nt<N.length;nt++){let Dt=N[nt].image[O].image;Xt?T&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,nt+1,0,0,Dt.width,Dt.height,Tt,At,Dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,nt+1,qt,Dt.width,Dt.height,0,Tt,At,Dt.data)}}else{Xt?T&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,Tt,At,bt[O]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,qt,Tt,At,bt[O]);for(let nt=0;nt<N.length;nt++){let mt=N[nt];Xt?T&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,nt+1,0,0,Tt,At,mt.image[O]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,nt+1,qt,Tt,At,mt.image[O])}}}m(x)&&p(s.TEXTURE_CUBE_MAP),D.__version=I.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function _t(w,x,X,et,I,D){let at=r.convert(X.format,X.colorSpace),Q=r.convert(X.type),lt=v(X.internalFormat,at,Q,X.colorSpace),Et=n.get(x),ot=n.get(X);if(ot.__renderTarget=x,!Et.__hasExternalTextures){let bt=Math.max(1,x.width>>D),Ut=Math.max(1,x.height>>D);I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?e.texImage3D(I,D,lt,bt,Ut,x.depth,0,at,Q,null):e.texImage2D(I,D,lt,bt,Ut,0,at,Q,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),Rt(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,I,ot.__webglTexture,0,st(x)):(I===s.TEXTURE_2D||I>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,I,ot.__webglTexture,D),e.bindFramebuffer(s.FRAMEBUFFER,null)}function k(w,x,X){if(s.bindRenderbuffer(s.RENDERBUFFER,w),x.depthBuffer){let et=x.depthTexture,I=et&&et.isDepthTexture?et.type:null,D=y(x.stencilBuffer,I),at=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=st(x);Rt(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,D,x.width,x.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,D,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,D,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,w)}else{let et=x.textures;for(let I=0;I<et.length;I++){let D=et[I],at=r.convert(D.format,D.colorSpace),Q=r.convert(D.type),lt=v(D.internalFormat,at,Q,D.colorSpace),Et=st(x);X&&Rt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,lt,x.width,x.height):Rt(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Et,lt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,lt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pt(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let et=n.get(x.depthTexture);et.__renderTarget=x,(!et.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),it(x.depthTexture,0);let I=et.__webglTexture,D=st(x);if(x.depthTexture.format===ts)Rt(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,I,0,D):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,I,0);else if(x.depthTexture.format===as)Rt(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,I,0,D):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function ht(w){let x=n.get(w),X=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let et=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),et){let I=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,et.removeEventListener("dispose",I)};et.addEventListener("dispose",I),x.__depthDisposeCallback=I}x.__boundDepthTexture=et}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");pt(x.__webglFramebuffer,w)}else if(X){x.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[et]),x.__webglDepthbuffer[et]===void 0)x.__webglDepthbuffer[et]=s.createRenderbuffer(),k(x.__webglDepthbuffer[et],w,!1);else{let I=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,D=x.__webglDepthbuffer[et];s.bindRenderbuffer(s.RENDERBUFFER,D),s.framebufferRenderbuffer(s.FRAMEBUFFER,I,s.RENDERBUFFER,D)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),k(x.__webglDepthbuffer,w,!1);else{let et=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,I=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,I),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,I)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function z(w,x,X){let et=n.get(w);x!==void 0&&_t(et.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&ht(w)}function ut(w){let x=w.texture,X=n.get(w),et=n.get(x);w.addEventListener("dispose",U);let I=w.textures,D=w.isWebGLCubeRenderTarget===!0,at=I.length>1;if(at||(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=x.version,o.memory.textures++),D){X.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer[Q]=[];for(let lt=0;lt<x.mipmaps.length;lt++)X.__webglFramebuffer[Q][lt]=s.createFramebuffer()}else X.__webglFramebuffer[Q]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)X.__webglFramebuffer[Q]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(at)for(let Q=0,lt=I.length;Q<lt;Q++){let Et=n.get(I[Q]);Et.__webglTexture===void 0&&(Et.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&Rt(w)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Q=0;Q<I.length;Q++){let lt=I[Q];X.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[Q]);let Et=r.convert(lt.format,lt.colorSpace),ot=r.convert(lt.type),bt=v(lt.internalFormat,Et,ot,lt.colorSpace,w.isXRRenderTarget===!0),Ut=st(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,bt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,X.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),k(X.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(D){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),kt(s.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let lt=0;lt<x.mipmaps.length;lt++)_t(X.__webglFramebuffer[Q][lt],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,lt);else _t(X.__webglFramebuffer[Q],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(x)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let Q=0,lt=I.length;Q<lt;Q++){let Et=I[Q],ot=n.get(Et);e.bindTexture(s.TEXTURE_2D,ot.__webglTexture),kt(s.TEXTURE_2D,Et),_t(X.__webglFramebuffer,w,Et,s.COLOR_ATTACHMENT0+Q,s.TEXTURE_2D,0),m(Et)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let Q=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Q=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Q,et.__webglTexture),kt(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let lt=0;lt<x.mipmaps.length;lt++)_t(X.__webglFramebuffer[lt],w,x,s.COLOR_ATTACHMENT0,Q,lt);else _t(X.__webglFramebuffer,w,x,s.COLOR_ATTACHMENT0,Q,0);m(x)&&p(Q),e.unbindTexture()}w.depthBuffer&&ht(w)}function G(w){let x=w.textures;for(let X=0,et=x.length;X<et;X++){let I=x[X];if(m(I)){let D=E(w),at=n.get(I).__webglTexture;e.bindTexture(D,at),p(D),e.unbindTexture()}}}let tt=[],A=[];function Mt(w){if(w.samples>0){if(Rt(w)===!1){let x=w.textures,X=w.width,et=w.height,I=s.COLOR_BUFFER_BIT,D=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=n.get(w),Q=x.length>1;if(Q)for(let lt=0;lt<x.length;lt++)e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let lt=0;lt<x.length;lt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(I|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(I|=s.STENCIL_BUFFER_BIT)),Q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,at.__webglColorRenderbuffer[lt]);let Et=n.get(x[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Et,0)}s.blitFramebuffer(0,0,X,et,0,0,X,et,I,s.NEAREST),l===!0&&(tt.length=0,A.length=0,tt.push(s.COLOR_ATTACHMENT0+lt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(tt.push(D),A.push(D),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,A)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Q)for(let lt=0;lt<x.length;lt++){e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,at.__webglColorRenderbuffer[lt]);let Et=n.get(x[lt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,Et,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function st(w){return Math.min(i.maxSamples,w.samples)}function Rt(w){let x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function xt(w){let x=o.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Lt(w,x){let X=w.colorSpace,et=w.format,I=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||X!==ys&&X!==ei&&(ie.getTransfer(X)===ae?(et!==un||I!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),x}function wt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=J,this.setTexture2D=it,this.setTexture2DArray=$,this.setTexture3D=ft,this.setTextureCube=Z,this.rebindTextures=z,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Rt}function dg(s,t){function e(n,i=ei){let r,o=ie.getTransfer(i);if(n===Un)return s.UNSIGNED_BYTE;if(n===ql)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Yl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Dh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ih)return s.BYTE;if(n===Lh)return s.SHORT;if(n===Hs)return s.UNSIGNED_SHORT;if(n===Xl)return s.INT;if(n===Si)return s.UNSIGNED_INT;if(n===Pn)return s.FLOAT;if(n===Qs)return s.HALF_FLOAT;if(n===Uh)return s.ALPHA;if(n===Nh)return s.RGB;if(n===un)return s.RGBA;if(n===kh)return s.LUMINANCE;if(n===Oh)return s.LUMINANCE_ALPHA;if(n===ts)return s.DEPTH_COMPONENT;if(n===as)return s.DEPTH_STENCIL;if(n===Fh)return s.RED;if(n===$l)return s.RED_INTEGER;if(n===zh)return s.RG;if(n===Zl)return s.RG_INTEGER;if(n===jl)return s.RGBA_INTEGER;if(n===Ur||n===Nr||n===kr||n===Or)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Ua||n===Na||n===ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===Fa||n===za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oa||n===Fa)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===za)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ba||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Za||n===ja||n===Ka||n===Ja||n===Qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ba)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ya)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$a)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Za)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ka)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ja)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fr||n===tl||n===el)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fr)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bh||n===nl||n===il||n===sl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var yl=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},de=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},fg={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new de;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mg=`
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

}`,vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Ye,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xn({vertexShader:pg,fragmentShader:mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ct(new xe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ml=class extends Nn{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,_=new vl,m=e.getContextAttributes(),p=null,E=null,v=[],y=[],F=new gt,C=null,U=new Ne;U.viewport=new le;let L=new Ne;L.viewport=new le;let S=[U,L],M=new yl,P=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let rt=v[Y];return rt===void 0&&(rt=new Os,v[Y]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Y){let rt=v[Y];return rt===void 0&&(rt=new Os,v[Y]=rt),rt.getGripSpace()},this.getHand=function(Y){let rt=v[Y];return rt===void 0&&(rt=new Os,v[Y]=rt),rt.getHandSpace()};function W(Y){let rt=y.indexOf(Y.inputSource);if(rt===-1)return;let _t=v[rt];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,c||o),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",it);for(let Y=0;Y<v.length;Y++){let rt=y[Y];rt!==null&&(y[Y]=null,v[Y].disconnect(rt))}P=null,J=null,_.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,E=null,Pt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",q),i.addEventListener("inputsourceschange",it),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(F),i.renderState.layers===void 0){let rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,rt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new kn(f.framebufferWidth,f.framebufferHeight,{format:un,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,_t=null,k=null;m.depth&&(k=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?as:ts,_t=m.stencil?os:Si);let pt={colorFormat:e.RGBA8,depthFormat:k,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(pt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new kn(u.textureWidth,u.textureHeight,{format:un,type:Un,depthTexture:new Zr(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Pt.setContext(i),Pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function it(Y){for(let rt=0;rt<Y.removed.length;rt++){let _t=Y.removed[rt],k=y.indexOf(_t);k>=0&&(y[k]=null,v[k].disconnect(_t))}for(let rt=0;rt<Y.added.length;rt++){let _t=Y.added[rt],k=y.indexOf(_t);if(k===-1){for(let ht=0;ht<v.length;ht++)if(ht>=y.length){y.push(_t),k=ht;break}else if(y[ht]===null){y[ht]=_t,k=ht;break}if(k===-1)break}let pt=v[k];pt&&pt.connect(_t)}}let $=new R,ft=new R;function Z(Y,rt,_t){$.setFromMatrixPosition(rt.matrixWorld),ft.setFromMatrixPosition(_t.matrixWorld);let k=$.distanceTo(ft),pt=rt.projectionMatrix.elements,ht=_t.projectionMatrix.elements,z=pt[14]/(pt[10]-1),ut=pt[14]/(pt[10]+1),G=(pt[9]+1)/pt[5],tt=(pt[9]-1)/pt[5],A=(pt[8]-1)/pt[0],Mt=(ht[8]+1)/ht[0],st=z*A,Rt=z*Mt,xt=k/(-A+Mt),Lt=xt*-A;if(rt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Lt),Y.translateZ(xt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),pt[10]===-1)Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let wt=z+xt,w=ut+xt,x=st-Lt,X=Rt+(k-Lt),et=G*ut/w*wt,I=tt*ut/w*wt;Y.projectionMatrix.makePerspective(x,X,et,I,wt,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function dt(Y,rt){rt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(rt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let rt=Y.near,_t=Y.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),M.near=L.near=U.near=rt,M.far=L.far=U.far=_t,(P!==M.near||J!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,J=M.far),U.layers.mask=Y.layers.mask|2,L.layers.mask=Y.layers.mask|4,M.layers.mask=U.layers.mask|L.layers.mask;let k=Y.parent,pt=M.cameras;dt(M,k);for(let ht=0;ht<pt.length;ht++)dt(pt[ht],k);pt.length===2?Z(M,U,L):M.projectionMatrix.copy(U.projectionMatrix),vt(Y,M,k)};function vt(Y,rt,_t){_t===null?Y.matrix.copy(rt.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(rt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(rt.projectionMatrix),Y.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ls*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let yt=null;function kt(Y,rt){if(h=rt.getViewerPose(c||o),g=rt,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let k=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,k=!0);for(let ht=0;ht<_t.length;ht++){let z=_t[ht],ut=null;if(f!==null)ut=f.getViewport(z);else{let tt=d.getViewSubImage(u,z);ut=tt.viewport,ht===0&&(t.setRenderTargetTextures(E,tt.colorTexture,u.ignoreDepthValues?void 0:tt.depthStencilTexture),t.setRenderTarget(E))}let G=S[ht];G===void 0&&(G=new Ne,G.layers.enable(ht),G.viewport=new le,S[ht]=G),G.matrix.fromArray(z.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(z.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(ut.x,ut.y,ut.width,ut.height),ht===0&&(M.matrix.copy(G.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),k===!0&&M.cameras.push(G)}let pt=i.enabledFeatures;if(pt&&pt.includes("depth-sensing")){let ht=d.getDepthInformation(_t[0]);ht&&ht.isValid&&ht.texture&&_.init(t,ht,i.renderState)}}for(let _t=0;_t<v.length;_t++){let k=y[_t],pt=v[_t];k!==null&&pt!==void 0&&pt.update(k,rt,c||o)}yt&&yt(Y,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}let Pt=new qh;Pt.setAnimationLoop(kt),this.setAnimationLoop=function(Y){yt=Y},this.dispose=function(){}}},gi=new en,gg=new ge;function _g(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Te&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Te&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),v=E.envMap,y=E.envMapRotation;v&&(m.envMap.value=v,gi.copy(y),gi.x*=-1,gi.y*=-1,gi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),m.envMapRotation.value.setFromMatrix4(gg.makeRotationFromEuler(gi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Te&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xg(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,v){let y=v.program;n.uniformBlockBinding(E,y)}function c(E,v){let y=i[E.id];y===void 0&&(g(E),y=h(E),i[E.id]=y,E.addEventListener("dispose",m));let F=v.program;n.updateUBOMapping(E,F);let C=t.render.frame;r[E.id]!==C&&(u(E),r[E.id]=C)}function h(E){let v=d();E.__bindingPointIndex=v;let y=s.createBuffer(),F=E.__size,C=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,F,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,y),y}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){let v=i[E.id],y=E.uniforms,F=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let C=0,U=y.length;C<U;C++){let L=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,M=L.length;S<M;S++){let P=L[S];if(f(P,C,S,F)===!0){let J=P.__offset,W=Array.isArray(P.value)?P.value:[P.value],q=0;for(let it=0;it<W.length;it++){let $=W[it],ft=_($);typeof $=="number"||typeof $=="boolean"?(P.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,J+q,P.__data)):$.isMatrix3?(P.__data[0]=$.elements[0],P.__data[1]=$.elements[1],P.__data[2]=$.elements[2],P.__data[3]=0,P.__data[4]=$.elements[3],P.__data[5]=$.elements[4],P.__data[6]=$.elements[5],P.__data[7]=0,P.__data[8]=$.elements[6],P.__data[9]=$.elements[7],P.__data[10]=$.elements[8],P.__data[11]=0):($.toArray(P.__data,q),q+=ft.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(E,v,y,F){let C=E.value,U=v+"_"+y;if(F[U]===void 0)return typeof C=="number"||typeof C=="boolean"?F[U]=C:F[U]=C.clone(),!0;{let L=F[U];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return F[U]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(E){let v=E.uniforms,y=0,F=16;for(let U=0,L=v.length;U<L;U++){let S=Array.isArray(v[U])?v[U]:[v[U]];for(let M=0,P=S.length;M<P;M++){let J=S[M],W=Array.isArray(J.value)?J.value:[J.value];for(let q=0,it=W.length;q<it;q++){let $=W[q],ft=_($),Z=y%F,dt=Z%ft.boundary,vt=Z+dt;y+=dt,vt!==0&&F-vt<ft.storage&&(y+=F-vt),J.__data=new Float32Array(ft.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=y,y+=ft.storage}}}let C=y%F;return C>0&&(y+=F-C),E.__size=y,E.__cache={},this}function _(E){let v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){let v=E.target;v.removeEventListener("dispose",m);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var jr=class{constructor(t={}){let{canvas:e=Md(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,E=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ee,this.toneMapping=ii,this.toneMappingExposure=1;let y=this,F=!1,C=0,U=0,L=null,S=-1,M=null,P=new le,J=new le,W=null,q=new jt(0),it=0,$=e.width,ft=e.height,Z=1,dt=null,vt=null,yt=new le(0,0,$,ft),kt=new le(0,0,$,ft),Pt=!1,Y=new Gs,rt=!1,_t=!1,k=new ge,pt=new ge,ht=new R,z=new le,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},G=!1;function tt(){return L===null?Z:1}let A=n;function Mt(b,H){return e.getContext(b,H)}try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vl}`),e.addEventListener("webglcontextlost",O,!1),e.addEventListener("webglcontextrestored",nt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),A===null){let H="webgl2";if(A=Mt(H,b),A===null)throw Mt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let st,Rt,xt,Lt,wt,w,x,X,et,I,D,at,Q,lt,Et,ot,bt,Ut,Tt,At,qt,Xt,ct,T;function B(){st=new Um(A),st.init(),Xt=new dg(A,st),Rt=new Rm(A,st,t,Xt),xt=new cg(A,st),Rt.reverseDepthBuffer&&u&&xt.buffers.depth.setReversed(!0),Lt=new Om(A),wt=new j0,w=new ug(A,st,xt,wt,Rt,Xt,Lt),x=new Pm(y),X=new Dm(y),et=new Gd(A),ct=new Tm(A,et),I=new Nm(A,et,Lt,ct),D=new zm(A,I,et,Lt),Tt=new Fm(A,Rt,w),ot=new Cm(wt),at=new Z0(y,x,X,st,Rt,ct,ot),Q=new _g(y,wt),lt=new J0,Et=new sg(st),Ut=new wm(y,x,X,xt,D,f,l),bt=new ag(y,D,Rt),T=new xg(A,Lt,Rt,xt),At=new Am(A,st,Lt),qt=new km(A,st,Lt),Lt.programs=at.programs,y.capabilities=Rt,y.extensions=st,y.properties=wt,y.renderLists=lt,y.shadowMap=bt,y.state=xt,y.info=Lt}B();let N=new Ml(y,A);this.xr=N,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let b=st.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=st.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize($,ft,!1))},this.getSize=function(b){return b.set($,ft)},this.setSize=function(b,H,j=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,ft=H,e.width=Math.floor(b*Z),e.height=Math.floor(H*Z),j===!0&&(e.style.width=b+"px",e.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set($*Z,ft*Z).floor()},this.setDrawingBufferSize=function(b,H,j){$=b,ft=H,Z=j,e.width=Math.floor(b*j),e.height=Math.floor(H*j),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(yt)},this.setViewport=function(b,H,j,K){b.isVector4?yt.set(b.x,b.y,b.z,b.w):yt.set(b,H,j,K),xt.viewport(P.copy(yt).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy(kt)},this.setScissor=function(b,H,j,K){b.isVector4?kt.set(b.x,b.y,b.z,b.w):kt.set(b,H,j,K),xt.scissor(J.copy(kt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(b){xt.setScissorTest(Pt=b)},this.setOpaqueSort=function(b){dt=b},this.setTransparentSort=function(b){vt=b},this.getClearColor=function(b){return b.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(b=!0,H=!0,j=!0){let K=0;if(b){let V=!1;if(L!==null){let St=L.texture.format;V=St===jl||St===Zl||St===$l}if(V){let St=L.texture.type,Nt=St===Un||St===Si||St===Hs||St===os||St===ql||St===Yl,Ft=Ut.getClearColor(),zt=Ut.getClearAlpha(),Zt=Ft.r,Kt=Ft.g,Bt=Ft.b;Nt?(g[0]=Zt,g[1]=Kt,g[2]=Bt,g[3]=zt,A.clearBufferuiv(A.COLOR,0,g)):(_[0]=Zt,_[1]=Kt,_[2]=Bt,_[3]=zt,A.clearBufferiv(A.COLOR,0,_))}else K|=A.COLOR_BUFFER_BIT}H&&(K|=A.DEPTH_BUFFER_BIT),j&&(K|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",O,!1),e.removeEventListener("webglcontextrestored",nt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),lt.dispose(),Et.dispose(),wt.dispose(),x.dispose(),X.dispose(),D.dispose(),ct.dispose(),T.dispose(),at.dispose(),N.dispose(),N.removeEventListener("sessionstart",Vn),N.removeEventListener("sessionend",Gn),Le.stop()};function O(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function nt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;let b=Lt.autoReset,H=bt.enabled,j=bt.autoUpdate,K=bt.needsUpdate,V=bt.type;B(),Lt.autoReset=b,bt.enabled=H,bt.autoUpdate=j,bt.needsUpdate=K,bt.type=V}function mt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Dt(b){let H=b.target;H.removeEventListener("dispose",Dt),Ot(H)}function Ot(b){Qt(b),wt.remove(b)}function Qt(b){let H=wt.get(b).programs;H!==void 0&&(H.forEach(function(j){at.releaseProgram(j)}),b.isShaderMaterial&&at.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,j,K,V,St){H===null&&(H=ut);let Nt=V.isMesh&&V.matrixWorld.determinant()<0,Ft=_u(b,H,j,K,V);xt.setMaterial(K,Nt);let zt=j.index,Zt=1;if(K.wireframe===!0){if(zt=I.getWireframeAttribute(j),zt===void 0)return;Zt=2}let Kt=j.drawRange,Bt=j.attributes.position,se=Kt.start*Zt,ue=(Kt.start+Kt.count)*Zt;St!==null&&(se=Math.max(se,St.start*Zt),ue=Math.min(ue,(St.start+St.count)*Zt)),zt!==null?(se=Math.max(se,0),ue=Math.min(ue,zt.count)):Bt!=null&&(se=Math.max(se,0),ue=Math.min(ue,Bt.count));let pe=ue-se;if(pe<0||pe===1/0)return;ct.setup(V,K,Ft,j,zt);let He,re=At;if(zt!==null&&(He=et.get(zt),re=qt,re.setIndex(He)),V.isMesh)K.wireframe===!0?(xt.setLineWidth(K.wireframeLinewidth*tt()),re.setMode(A.LINES)):re.setMode(A.TRIANGLES);else if(V.isLine){let Ht=K.linewidth;Ht===void 0&&(Ht=1),xt.setLineWidth(Ht*tt()),V.isLineSegments?re.setMode(A.LINES):V.isLineLoop?re.setMode(A.LINE_LOOP):re.setMode(A.LINE_STRIP)}else V.isPoints?re.setMode(A.POINTS):V.isSprite&&re.setMode(A.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)re.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))re.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ht=V._multiDrawStarts,Sn=V._multiDrawCounts,oe=V._multiDrawCount,an=zt?et.get(zt).bytesPerElement:1,Ni=wt.get(K).currentProgram.getUniforms();for(let Ge=0;Ge<oe;Ge++)Ni.setValue(A,"_gl_DrawID",Ge),re.render(Ht[Ge]/an,Sn[Ge])}else if(V.isInstancedMesh)re.renderInstances(se,pe,V.count);else if(j.isInstancedBufferGeometry){let Ht=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Sn=Math.min(j.instanceCount,Ht);re.renderInstances(se,pe,Sn)}else re.render(se,pe)};function Yt(b,H,j){b.transparent===!0&&b.side===Qe&&b.forceSinglePass===!1?(b.side=Te,b.needsUpdate=!0,qn(b,H,j),b.side=si,b.needsUpdate=!0,qn(b,H,j),b.side=Qe):qn(b,H,j)}this.compile=function(b,H,j=null){j===null&&(j=b),p=Et.get(j),p.init(H),v.push(p),j.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),b!==j&&b.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();let K=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let St=V.material;if(St)if(Array.isArray(St))for(let Nt=0;Nt<St.length;Nt++){let Ft=St[Nt];Yt(Ft,j,V),K.add(Ft)}else Yt(St,j,V),K.add(St)}),v.pop(),p=null,K},this.compileAsync=function(b,H,j=null){let K=this.compile(b,H,j);return new Promise(V=>{function St(){if(K.forEach(function(Nt){wt.get(Nt).currentProgram.isReady()&&K.delete(Nt)}),K.size===0){V(b);return}setTimeout(St,10)}st.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Se=null;function he(b){Se&&Se(b)}function Vn(){Le.stop()}function Gn(){Le.start()}let Le=new qh;Le.setAnimationLoop(he),typeof self<"u"&&Le.setContext(self),this.setAnimationLoop=function(b){Se=b,N.setAnimationLoop(b),b===null?Le.stop():Le.start()},N.addEventListener("sessionstart",Vn),N.addEventListener("sessionend",Gn),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(H),H=N.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,H,L),p=Et.get(b,v.length),p.init(H),v.push(p),pt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Y.setFromProjectionMatrix(pt),_t=this.localClippingEnabled,rt=ot.init(this.clippingPlanes,_t),m=lt.get(b,E.length),m.init(),E.push(m),N.enabled===!0&&N.isPresenting===!0){let St=y.xr.getDepthSensingMesh();St!==null&&hi(St,H,-1/0,y.sortObjects)}hi(b,H,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(dt,vt),G=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,G&&Ut.addToRenderList(m,b),this.info.render.frame++,rt===!0&&ot.beginShadows();let j=p.state.shadowsArray;bt.render(j,b,H),rt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){let St=H.cameras;if(V.length>0)for(let Nt=0,Ft=St.length;Nt<Ft;Nt++){let zt=St[Nt];Wn(K,V,b,zt)}G&&Ut.render(b);for(let Nt=0,Ft=St.length;Nt<Ft;Nt++){let zt=St[Nt];Ui(m,b,zt,zt.viewport)}}else V.length>0&&Wn(K,V,b,H),G&&Ut.render(b),Ui(m,b,H);L!==null&&(w.updateMultisampleRenderTarget(L),w.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(y,b,H),ct.resetDefaultState(),S=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],rt===!0&&ot.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function hi(b,H,j,K){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){K&&z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pt);let Nt=D.update(b),Ft=b.material;Ft.visible&&m.push(b,Nt,Ft,j,z.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){let Nt=D.update(b),Ft=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),z.copy(b.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),z.copy(Nt.boundingSphere.center)),z.applyMatrix4(b.matrixWorld).applyMatrix4(pt)),Array.isArray(Ft)){let zt=Nt.groups;for(let Zt=0,Kt=zt.length;Zt<Kt;Zt++){let Bt=zt[Zt],se=Ft[Bt.materialIndex];se&&se.visible&&m.push(b,Nt,se,j,z.z,Bt)}}else Ft.visible&&m.push(b,Nt,Ft,j,z.z,null)}}let St=b.children;for(let Nt=0,Ft=St.length;Nt<Ft;Nt++)hi(St[Nt],H,j,K)}function Ui(b,H,j,K){let V=b.opaque,St=b.transmissive,Nt=b.transparent;p.setupLightsView(j),rt===!0&&ot.setGlobalState(y.clippingPlanes,j),K&&xt.viewport(P.copy(K)),V.length>0&&bn(V,H,j),St.length>0&&bn(St,H,j),Nt.length>0&&bn(Nt,H,j),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Wn(b,H,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new kn(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Qs:Un,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));let St=p.state.transmissionRenderTarget[K.id],Nt=K.viewport||P;St.setSize(Nt.z,Nt.w);let Ft=y.getRenderTarget();y.setRenderTarget(St),y.getClearColor(q),it=y.getClearAlpha(),it<1&&y.setClearColor(16777215,.5),y.clear(),G&&Ut.render(j);let zt=y.toneMapping;y.toneMapping=ii;let Zt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),rt===!0&&ot.setGlobalState(y.clippingPlanes,K),bn(b,j,K),w.updateMultisampleRenderTarget(St),w.updateRenderTargetMipmap(St),st.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Bt=0,se=H.length;Bt<se;Bt++){let ue=H[Bt],pe=ue.object,He=ue.geometry,re=ue.material,Ht=ue.group;if(re.side===Qe&&pe.layers.test(K.layers)){let Sn=re.side;re.side=Te,re.needsUpdate=!0,Xn(pe,j,K,He,re,Ht),re.side=Sn,re.needsUpdate=!0,Kt=!0}}Kt===!0&&(w.updateMultisampleRenderTarget(St),w.updateRenderTargetMipmap(St))}y.setRenderTarget(Ft),y.setClearColor(q,it),Zt!==void 0&&(K.viewport=Zt),y.toneMapping=zt}function bn(b,H,j){let K=H.isScene===!0?H.overrideMaterial:null;for(let V=0,St=b.length;V<St;V++){let Nt=b[V],Ft=Nt.object,zt=Nt.geometry,Zt=K===null?Nt.material:K,Kt=Nt.group;Ft.layers.test(j.layers)&&Xn(Ft,H,j,zt,Zt,Kt)}}function Xn(b,H,j,K,V,St){b.onBeforeRender(y,H,j,K,V,St),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(y,H,j,K,b,St),V.transparent===!0&&V.side===Qe&&V.forceSinglePass===!1?(V.side=Te,V.needsUpdate=!0,y.renderBufferDirect(j,H,K,V,b,St),V.side=si,V.needsUpdate=!0,y.renderBufferDirect(j,H,K,V,b,St),V.side=Qe):y.renderBufferDirect(j,H,K,V,b,St),b.onAfterRender(y,H,j,K,V,St)}function qn(b,H,j){H.isScene!==!0&&(H=ut);let K=wt.get(b),V=p.state.lights,St=p.state.shadowsArray,Nt=V.state.version,Ft=at.getParameters(b,V.state,St,H,j),zt=at.getProgramCacheKey(Ft),Zt=K.programs;K.environment=b.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(b.isMeshStandardMaterial?X:x).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Zt===void 0&&(b.addEventListener("dispose",Dt),Zt=new Map,K.programs=Zt);let Kt=Zt.get(zt);if(Kt!==void 0){if(K.currentProgram===Kt&&K.lightsStateVersion===Nt)return or(b,Ft),Kt}else Ft.uniforms=at.getUniforms(b),b.onBeforeCompile(Ft,y),Kt=at.acquireProgram(Ft,zt),Zt.set(zt,Kt),K.uniforms=Ft.uniforms;let Bt=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Bt.clippingPlanes=ot.uniform),or(b,Ft),K.needsLights=yu(b),K.lightsStateVersion=Nt,K.needsLights&&(Bt.ambientLightColor.value=V.state.ambient,Bt.lightProbe.value=V.state.probe,Bt.directionalLights.value=V.state.directional,Bt.directionalLightShadows.value=V.state.directionalShadow,Bt.spotLights.value=V.state.spot,Bt.spotLightShadows.value=V.state.spotShadow,Bt.rectAreaLights.value=V.state.rectArea,Bt.ltc_1.value=V.state.rectAreaLTC1,Bt.ltc_2.value=V.state.rectAreaLTC2,Bt.pointLights.value=V.state.point,Bt.pointLightShadows.value=V.state.pointShadow,Bt.hemisphereLights.value=V.state.hemi,Bt.directionalShadowMap.value=V.state.directionalShadowMap,Bt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Bt.spotShadowMap.value=V.state.spotShadowMap,Bt.spotLightMatrix.value=V.state.spotLightMatrix,Bt.spotLightMap.value=V.state.spotLightMap,Bt.pointShadowMap.value=V.state.pointShadowMap,Bt.pointShadowMatrix.value=V.state.pointShadowMatrix),K.currentProgram=Kt,K.uniformsList=null,Kt}function rr(b){if(b.uniformsList===null){let H=b.currentProgram.getUniforms();b.uniformsList=ns.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function or(b,H){let j=wt.get(b);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function _u(b,H,j,K,V){H.isScene!==!0&&(H=ut),w.resetTextureUnits();let St=H.fog,Nt=K.isMeshStandardMaterial?H.environment:null,Ft=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ys,zt=(K.isMeshStandardMaterial?X:x).get(K.envMap||Nt),Zt=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Kt=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Bt=!!j.morphAttributes.position,se=!!j.morphAttributes.normal,ue=!!j.morphAttributes.color,pe=ii;K.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(pe=y.toneMapping);let He=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,re=He!==void 0?He.length:0,Ht=wt.get(K),Sn=p.state.lights;if(rt===!0&&(_t===!0||b!==M)){let Ke=b===M&&K.id===S;ot.setState(K,b,Ke)}let oe=!1;K.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Sn.state.version||Ht.outputColorSpace!==Ft||V.isBatchedMesh&&Ht.batching===!1||!V.isBatchedMesh&&Ht.batching===!0||V.isBatchedMesh&&Ht.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ht.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ht.instancing===!1||!V.isInstancedMesh&&Ht.instancing===!0||V.isSkinnedMesh&&Ht.skinning===!1||!V.isSkinnedMesh&&Ht.skinning===!0||V.isInstancedMesh&&Ht.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ht.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ht.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ht.instancingMorph===!1&&V.morphTexture!==null||Ht.envMap!==zt||K.fog===!0&&Ht.fog!==St||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==ot.numPlanes||Ht.numIntersection!==ot.numIntersection)||Ht.vertexAlphas!==Zt||Ht.vertexTangents!==Kt||Ht.morphTargets!==Bt||Ht.morphNormals!==se||Ht.morphColors!==ue||Ht.toneMapping!==pe||Ht.morphTargetsCount!==re)&&(oe=!0):(oe=!0,Ht.__version=K.version);let an=Ht.currentProgram;oe===!0&&(an=qn(K,H,V));let Ni=!1,Ge=!1,ws=!1,me=an.getUniforms(),mn=Ht.uniforms;if(xt.useProgram(an.program)&&(Ni=!0,Ge=!0,ws=!0),K.id!==S&&(S=K.id,Ge=!0),Ni||M!==b){xt.buffers.depth.getReversed()?(k.copy(b.projectionMatrix),Sd(k),Ed(k),me.setValue(A,"projectionMatrix",k)):me.setValue(A,"projectionMatrix",b.projectionMatrix),me.setValue(A,"viewMatrix",b.matrixWorldInverse);let Yn=me.map.cameraPosition;Yn!==void 0&&Yn.setValue(A,ht.setFromMatrixPosition(b.matrixWorld)),Rt.logarithmicDepthBuffer&&me.setValue(A,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&me.setValue(A,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ge=!0,ws=!0)}if(V.isSkinnedMesh){me.setOptional(A,V,"bindMatrix"),me.setOptional(A,V,"bindMatrixInverse");let Ke=V.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),me.setValue(A,"boneTexture",Ke.boneTexture,w))}V.isBatchedMesh&&(me.setOptional(A,V,"batchingTexture"),me.setValue(A,"batchingTexture",V._matricesTexture,w),me.setOptional(A,V,"batchingIdTexture"),me.setValue(A,"batchingIdTexture",V._indirectTexture,w),me.setOptional(A,V,"batchingColorTexture"),V._colorsTexture!==null&&me.setValue(A,"batchingColorTexture",V._colorsTexture,w));let Ts=j.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0)&&Tt.update(V,j,an),(Ge||Ht.receiveShadow!==V.receiveShadow)&&(Ht.receiveShadow=V.receiveShadow,me.setValue(A,"receiveShadow",V.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(mn.envMap.value=zt,mn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&H.environment!==null&&(mn.envMapIntensity.value=H.environmentIntensity),Ge&&(me.setValue(A,"toneMappingExposure",y.toneMappingExposure),Ht.needsLights&&xu(mn,ws),St&&K.fog===!0&&Q.refreshFogUniforms(mn,St),Q.refreshMaterialUniforms(mn,K,Z,ft,p.state.transmissionRenderTarget[b.id]),ns.upload(A,rr(Ht),mn,w)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ns.upload(A,rr(Ht),mn,w),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&me.setValue(A,"center",V.center),me.setValue(A,"modelViewMatrix",V.modelViewMatrix),me.setValue(A,"normalMatrix",V.normalMatrix),me.setValue(A,"modelMatrix",V.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Ke=K.uniformsGroups;for(let Yn=0,$n=Ke.length;Yn<$n;Yn++){let mc=Ke[Yn];T.update(mc,an),T.bind(mc,an)}}return an}function xu(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function yu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,H,j){wt.get(b.texture).__webglTexture=H,wt.get(b.depthTexture).__webglTexture=j;let K=wt.get(b);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,H){let j=wt.get(b);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(b,H=0,j=0){L=b,C=H,U=j;let K=!0,V=null,St=!1,Nt=!1;if(b){let zt=wt.get(b);if(zt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(A.FRAMEBUFFER,null),K=!1;else if(zt.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(zt.__hasExternalTextures)w.rebindTextures(b,wt.get(b.texture).__webglTexture,wt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Bt=b.depthTexture;if(zt.__boundDepthTexture!==Bt){if(Bt!==null&&wt.has(Bt)&&(b.width!==Bt.image.width||b.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}let Zt=b.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Nt=!0);let Kt=wt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Kt[H])?V=Kt[H][j]:V=Kt[H],St=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?V=wt.get(b).__webglMultisampledFramebuffer:Array.isArray(Kt)?V=Kt[j]:V=Kt,P.copy(b.viewport),J.copy(b.scissor),W=b.scissorTest}else P.copy(yt).multiplyScalar(Z).floor(),J.copy(kt).multiplyScalar(Z).floor(),W=Pt;if(xt.bindFramebuffer(A.FRAMEBUFFER,V)&&K&&xt.drawBuffers(b,V),xt.viewport(P),xt.scissor(J),xt.setScissorTest(W),St){let zt=wt.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+H,zt.__webglTexture,j)}else if(Nt){let zt=wt.get(b.texture),Zt=H||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,zt.__webglTexture,j||0,Zt)}S=-1},this.readRenderTargetPixels=function(b,H,j,K,V,St,Nt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ft=Ft[Nt]),Ft){xt.bindFramebuffer(A.FRAMEBUFFER,Ft);try{let zt=b.texture,Zt=zt.format,Kt=zt.type;if(!Rt.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-K&&j>=0&&j<=b.height-V&&A.readPixels(H,j,K,V,Xt.convert(Zt),Xt.convert(Kt),St)}finally{let zt=L!==null?wt.get(L).__webglFramebuffer:null;xt.bindFramebuffer(A.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(b,H,j,K,V,St,Nt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ft=Ft[Nt]),Ft){let zt=b.texture,Zt=zt.format,Kt=zt.type;if(!Rt.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=b.width-K&&j>=0&&j<=b.height-V){xt.bindFramebuffer(A.FRAMEBUFFER,Ft);let Bt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Bt),A.bufferData(A.PIXEL_PACK_BUFFER,St.byteLength,A.STREAM_READ),A.readPixels(H,j,K,V,Xt.convert(Zt),Xt.convert(Kt),0);let se=L!==null?wt.get(L).__webglFramebuffer:null;xt.bindFramebuffer(A.FRAMEBUFFER,se);let ue=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await bd(A,ue,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Bt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,St),A.deleteBuffer(Bt),A.deleteSync(ue),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,H=null,j=0){b.isTexture!==!0&&(Ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1]);let K=Math.pow(2,-j),V=Math.floor(b.image.width*K),St=Math.floor(b.image.height*K),Nt=H!==null?H.x:0,Ft=H!==null?H.y:0;w.setTexture2D(b,0),A.copyTexSubImage2D(A.TEXTURE_2D,j,0,0,Nt,Ft,V,St),xt.unbindTexture()},this.copyTextureToTexture=function(b,H,j=null,K=null,V=0){b.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,b=arguments[1],H=arguments[2],V=arguments[3]||0,j=null);let St,Nt,Ft,zt,Zt,Kt,Bt,se,ue,pe=b.isCompressedTexture?b.mipmaps[V]:b.image;j!==null?(St=j.max.x-j.min.x,Nt=j.max.y-j.min.y,Ft=j.isBox3?j.max.z-j.min.z:1,zt=j.min.x,Zt=j.min.y,Kt=j.isBox3?j.min.z:0):(St=pe.width,Nt=pe.height,Ft=pe.depth||1,zt=0,Zt=0,Kt=0),K!==null?(Bt=K.x,se=K.y,ue=K.z):(Bt=0,se=0,ue=0);let He=Xt.convert(H.format),re=Xt.convert(H.type),Ht;H.isData3DTexture?(w.setTexture3D(H,0),Ht=A.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(w.setTexture2DArray(H,0),Ht=A.TEXTURE_2D_ARRAY):(w.setTexture2D(H,0),Ht=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,H.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,H.unpackAlignment);let Sn=A.getParameter(A.UNPACK_ROW_LENGTH),oe=A.getParameter(A.UNPACK_IMAGE_HEIGHT),an=A.getParameter(A.UNPACK_SKIP_PIXELS),Ni=A.getParameter(A.UNPACK_SKIP_ROWS),Ge=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,pe.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,pe.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,zt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Zt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Kt);let ws=b.isDataArrayTexture||b.isData3DTexture,me=H.isDataArrayTexture||H.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let mn=wt.get(b),Ts=wt.get(H),Ke=wt.get(mn.__renderTarget),Yn=wt.get(Ts.__renderTarget);xt.bindFramebuffer(A.READ_FRAMEBUFFER,Ke.__webglFramebuffer),xt.bindFramebuffer(A.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let $n=0;$n<Ft;$n++)ws&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,wt.get(b).__webglTexture,V,Kt+$n),b.isDepthTexture?(me&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,wt.get(H).__webglTexture,V,ue+$n),A.blitFramebuffer(zt,Zt,St,Nt,Bt,se,St,Nt,A.DEPTH_BUFFER_BIT,A.NEAREST)):me?A.copyTexSubImage3D(Ht,V,Bt,se,ue+$n,zt,Zt,St,Nt):A.copyTexSubImage2D(Ht,V,Bt,se,ue+$n,zt,Zt,St,Nt);xt.bindFramebuffer(A.READ_FRAMEBUFFER,null),xt.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else me?b.isDataTexture||b.isData3DTexture?A.texSubImage3D(Ht,V,Bt,se,ue,St,Nt,Ft,He,re,pe.data):H.isCompressedArrayTexture?A.compressedTexSubImage3D(Ht,V,Bt,se,ue,St,Nt,Ft,He,pe.data):A.texSubImage3D(Ht,V,Bt,se,ue,St,Nt,Ft,He,re,pe):b.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,V,Bt,se,St,Nt,He,re,pe.data):b.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,V,Bt,se,pe.width,pe.height,He,pe.data):A.texSubImage2D(A.TEXTURE_2D,V,Bt,se,St,Nt,He,re,pe);A.pixelStorei(A.UNPACK_ROW_LENGTH,Sn),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,oe),A.pixelStorei(A.UNPACK_SKIP_PIXELS,an),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ni),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ge),V===0&&H.generateMipmaps&&A.generateMipmap(Ht),xt.unbindTexture()},this.copyTextureToTexture3D=function(b,H,j=null,K=null,V=0){return b.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,K=arguments[1]||null,b=arguments[2],H=arguments[3],V=arguments[4]||0),Ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,H,j,K,V)},this.initRenderTarget=function(b){wt.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),xt.unbindTexture()},this.resetState=function(){C=0,U=0,L=null,xt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var ds=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ws=class extends ri{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Kr=new R,Jr=new R,_h=new ge,Is=new wi,Rr=new cs,ma=new R,xh=new R,fs=class extends Ue{constructor(t=new Me,e=new Ws){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Kr.fromBufferAttribute(e,i-1),Jr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Kr.distanceTo(Jr);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Rr.radius+=r,t.ray.intersectsSphere(Rr)===!1)return;_h.copy(i).invert(),Is.copy(t.ray).applyMatrix4(_h);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){let p=h.getX(_),E=h.getX(_+1),v=Cr(this,t,Is,l,p,E);v&&e.push(v)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=Cr(this,t,Is,l,_,m);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){let p=Cr(this,t,Is,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){let _=Cr(this,t,Is,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cr(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(Kr.fromBufferAttribute(o,i),Jr.fromBufferAttribute(o,r),e.distanceSqToSegment(Kr,Jr,ma,xh)>n)return;ma.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(ma);if(!(l<t.near||l>t.far))return{distance:l,point:xh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var fe=class extends Ye{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new gt:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,i=[],r=[],o=[],a=new R,l=new ge;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(we(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(we(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Xs=class extends nn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new gt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},bl=class extends Xs{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ql(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Pr=new R,ga=new Ql,_a=new Ql,xa=new Ql,qs=class extends nn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Pr.subVectors(i[0],i[1]).add(i[0]),c=Pr);let d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Pr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Pr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ga.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,m),_a.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,m),xa.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ga.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),_a.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),xa.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(ga.calc(l),_a.calc(l),xa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function yh(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function yg(s,t){let e=1-s;return e*e*t}function vg(s,t){return 2*(1-s)*s*t}function Mg(s,t){return s*s*t}function Fs(s,t,e,n){return yg(s,t)+vg(s,e)+Mg(s,n)}function bg(s,t){let e=1-s;return e*e*e*t}function Sg(s,t){let e=1-s;return 3*e*e*s*t}function Eg(s,t){return 3*(1-s)*s*s*t}function wg(s,t){return s*s*s*t}function zs(s,t,e,n,i){return bg(s,t)+Sg(s,e)+Eg(s,n)+wg(s,i)}var Qr=class extends nn{constructor(t=new gt,e=new gt,n=new gt,i=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new gt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,i.x,r.x,o.x,a.x),zs(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Sl=class extends nn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,i.x,r.x,o.x,a.x),zs(t,i.y,r.y,o.y,a.y),zs(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},to=class extends nn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},El=class extends nn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},eo=class extends nn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Fs(t,i.x,r.x,o.x),Fs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},no=class extends nn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Fs(t,i.x,r.x,o.x),Fs(t,i.y,r.y,o.y),Fs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},io=class extends nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(yh(a,l.x,c.x,h.x,d.x),yh(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new gt().fromArray(i))}return this}},so=Object.freeze({__proto__:null,ArcCurve:bl,CatmullRomCurve3:qs,CubicBezierCurve:Qr,CubicBezierCurve3:Sl,EllipseCurve:Xs,LineCurve:to,LineCurve3:El,QuadraticBezierCurve:eo,QuadraticBezierCurve3:no,SplineCurve:io}),wl=class extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new so[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new so[i.type]().fromJSON(i))}return this}},ps=class extends wl{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new to(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new eo(this.currentPoint.clone(),new gt(t,e),new gt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Qr(this.currentPoint.clone(),new gt(t,e),new gt(n,i),new gt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new io(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new Xs(t,e,n,i,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ro=class s extends Me{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=we(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new R,u=new gt,f=new R,g=new R,_=new R,m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let E=0;E<=e;E++){let v=n+E*h*i,y=Math.sin(v),F=Math.cos(v);for(let C=0;C<=t.length-1;C++){d.x=t[C].x*y,d.y=t[C].y,d.z=t[C].x*F,o.push(d.x,d.y,d.z),u.x=E/e,u.y=C/(t.length-1),a.push(u.x,u.y);let U=l[3*C+0]*y,L=l[3*C+1],S=l[3*C+0]*F;c.push(U,L,S)}}for(let E=0;E<e;E++)for(let v=0;v<t.length-1;v++){let y=v+E*t.length,F=y,C=y+t.length,U=y+t.length+1,L=y+1;r.push(F,C,L),r.push(U,L,C)}this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("uv",new ne(a,2)),this.setAttribute("normal",new ne(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var oi=class s extends Me{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new R,h=new gt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},be=class s extends Me{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,_=[],m=n/2,p=0;E(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(f,2));function E(){let y=new R,F=new R,C=0,U=(e-t)/n;for(let L=0;L<=r;L++){let S=[],M=L/r,P=M*(e-t)+t;for(let J=0;J<=i;J++){let W=J/i,q=W*l+a,it=Math.sin(q),$=Math.cos(q);F.x=P*it,F.y=-M*n+m,F.z=P*$,d.push(F.x,F.y,F.z),y.set(it,U,$).normalize(),u.push(y.x,y.y,y.z),f.push(W,1-M),S.push(g++)}_.push(S)}for(let L=0;L<i;L++)for(let S=0;S<r;S++){let M=_[S][L],P=_[S+1][L],J=_[S+1][L+1],W=_[S][L+1];(t>0||S!==0)&&(h.push(M,P,W),C+=3),(e>0||S!==r-1)&&(h.push(P,J,W),C+=3)}c.addGroup(p,C,0),p+=C}function v(y){let F=g,C=new gt,U=new R,L=0,S=y===!0?t:e,M=y===!0?1:-1;for(let J=1;J<=i;J++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),g++;let P=g;for(let J=0;J<=i;J++){let q=J/i*l+a,it=Math.cos(q),$=Math.sin(q);U.x=S*$,U.y=m*M,U.z=S*it,d.push(U.x,U.y,U.z),u.push(0,M,0),C.x=it*.5+.5,C.y=$*.5*M+.5,f.push(C.x,C.y),g++}for(let J=0;J<i;J++){let W=F+J,q=P+J;y===!0?h.push(q,q+1,W):h.push(q+1,q,W),L+=3}c.addGroup(p,L,y===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},oo=class s extends be{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ms=class extends ps{constructor(t){super(t),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new ps().fromJSON(i))}return this}},Tg={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Kh(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,u,f;if(n&&(r=Ig(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)d=s[g],u=s[g+1],d<a&&(a=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Ys(r,o,e,a,l,f,0),o}};function Kh(s,t,e,n,i){let r,o;if(i===Vg(s,t,e,n)>0)for(r=t;r<e;r+=n)o=vh(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=vh(r,s[r],s[r+1],o);return o&&vo(o,o.next)&&(Zs(o),o=o.next),o}function Ti(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(vo(e,e.next)||ve(e.prev,e,e.next)===0)){if(Zs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ys(s,t,e,n,i,r,o){if(!s)return;!o&&r&&kg(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Rg(s,n,i,r):Ag(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Zs(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Cg(Ti(s),t,e),Ys(s,t,e,n,i,r,2)):o===2&&Pg(s,t,e,n,i,r):Ys(Ti(s),t,e,n,i,r,1);break}}}function Ag(s){let t=s.prev,e=s,n=s.next;if(ve(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Ji(i,a,r,l,o,c,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Rg(s,t,e,n){let i=s.prev,r=s,o=s.next;if(ve(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,u=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,_=a>l?a>c?a:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,p=Tl(f,g,t,e,n),E=Tl(_,m,t,e,n),v=s.prevZ,y=s.nextZ;for(;v&&v.z>=p&&y&&y.z<=E;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Ji(a,h,l,d,c,u,v.x,v.y)&&ve(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Ji(a,h,l,d,c,u,y.x,y.y)&&ve(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Ji(a,h,l,d,c,u,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=E;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&Ji(a,h,l,d,c,u,y.x,y.y)&&ve(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Cg(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!vo(i,r)&&Jh(i,n,n.next,r)&&$s(i,r)&&$s(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Zs(n),Zs(n.next),n=s=r),n=n.next}while(n!==s);return Ti(n)}function Pg(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zg(o,a)){let l=Qh(o,a);o=Ti(o,o.next),l=Ti(l,l.next),Ys(o,t,e,n,i,r,0),Ys(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Ig(s,t,e,n){let i=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Kh(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Fg(c));for(i.sort(Lg),r=0;r<i.length;r++)e=Dg(i[r],e);return e}function Lg(s,t){return s.x-t.x}function Dg(s,t){let e=Ug(s,t);if(!e)return t;let n=Qh(e,s);return Ti(n,n.next),Ti(e,e.next)}function Ug(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,d;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Ji(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),$s(e,s)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&Ng(i,e)))&&(i=e,h=d)),e=e.next;while(e!==a);return i}function Ng(s,t){return ve(s.prev,s,t.prev)<0&&ve(t.next,s,s.next)<0}function kg(s,t,e,n){let i=s;do i.z===0&&(i.z=Tl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Og(i)}function Og(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function Tl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Fg(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ji(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function zg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Bg(s,t)&&($s(s,t)&&$s(t,s)&&Hg(s,t)&&(ve(s.prev,s,t.prev)||ve(s,t.prev,t))||vo(s,t)&&ve(s.prev,s,s.next)>0&&ve(t.prev,t,t.next)>0)}function ve(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function vo(s,t){return s.x===t.x&&s.y===t.y}function Jh(s,t,e,n){let i=Lr(ve(s,t,e)),r=Lr(ve(s,t,n)),o=Lr(ve(e,n,s)),a=Lr(ve(e,n,t));return!!(i!==r&&o!==a||i===0&&Ir(s,e,t)||r===0&&Ir(s,n,t)||o===0&&Ir(e,s,n)||a===0&&Ir(e,t,n))}function Ir(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Lr(s){return s>0?1:s<0?-1:0}function Bg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Jh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function $s(s,t){return ve(s.prev,s,s.next)<0?ve(s,t,s.next)>=0&&ve(s,s.prev,t)>=0:ve(s,t,s.prev)<0||ve(s,s.next,t)<0}function Hg(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Qh(s,t){let e=new Al(s.i,s.x,s.y),n=new Al(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vh(s,t,e,n){let i=new Al(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Zs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Al(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Vg(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Bs=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Mh(t),bh(n,t);let o=t.length;e.forEach(Mh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,bh(n,e[l]);let a=Tg.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Mh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function bh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var js=class s extends Me{constructor(t=new ms([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ne(i,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Gg,v,y=!1,F,C,U,L;p&&(v=p.getSpacedPoints(h),y=!0,u=!1,F=p.computeFrenetFrames(h,!1),C=new R,U=new R,L=new R),u||(m=0,f=0,g=0,_=0);let S=a.extractPoints(c),M=S.shape,P=S.holes;if(!Bs.isClockWise(M)){M=M.reverse();for(let G=0,tt=P.length;G<tt;G++){let A=P[G];Bs.isClockWise(A)&&(P[G]=A.reverse())}}let W=Bs.triangulateShape(M,P),q=M;for(let G=0,tt=P.length;G<tt;G++){let A=P[G];M=M.concat(A)}function it(G,tt,A){return tt||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(tt,A)}let $=M.length,ft=W.length;function Z(G,tt,A){let Mt,st,Rt,xt=G.x-tt.x,Lt=G.y-tt.y,wt=A.x-G.x,w=A.y-G.y,x=xt*xt+Lt*Lt,X=xt*w-Lt*wt;if(Math.abs(X)>Number.EPSILON){let et=Math.sqrt(x),I=Math.sqrt(wt*wt+w*w),D=tt.x-Lt/et,at=tt.y+xt/et,Q=A.x-w/I,lt=A.y+wt/I,Et=((Q-D)*w-(lt-at)*wt)/(xt*w-Lt*wt);Mt=D+xt*Et-G.x,st=at+Lt*Et-G.y;let ot=Mt*Mt+st*st;if(ot<=2)return new gt(Mt,st);Rt=Math.sqrt(ot/2)}else{let et=!1;xt>Number.EPSILON?wt>Number.EPSILON&&(et=!0):xt<-Number.EPSILON?wt<-Number.EPSILON&&(et=!0):Math.sign(Lt)===Math.sign(w)&&(et=!0),et?(Mt=-Lt,st=xt,Rt=Math.sqrt(x)):(Mt=xt,st=Lt,Rt=Math.sqrt(x/2))}return new gt(Mt/Rt,st/Rt)}let dt=[];for(let G=0,tt=q.length,A=tt-1,Mt=G+1;G<tt;G++,A++,Mt++)A===tt&&(A=0),Mt===tt&&(Mt=0),dt[G]=Z(q[G],q[A],q[Mt]);let vt=[],yt,kt=dt.concat();for(let G=0,tt=P.length;G<tt;G++){let A=P[G];yt=[];for(let Mt=0,st=A.length,Rt=st-1,xt=Mt+1;Mt<st;Mt++,Rt++,xt++)Rt===st&&(Rt=0),xt===st&&(xt=0),yt[Mt]=Z(A[Mt],A[Rt],A[xt]);vt.push(yt),kt=kt.concat(yt)}for(let G=0;G<m;G++){let tt=G/m,A=f*Math.cos(tt*Math.PI/2),Mt=g*Math.sin(tt*Math.PI/2)+_;for(let st=0,Rt=q.length;st<Rt;st++){let xt=it(q[st],dt[st],Mt);k(xt.x,xt.y,-A)}for(let st=0,Rt=P.length;st<Rt;st++){let xt=P[st];yt=vt[st];for(let Lt=0,wt=xt.length;Lt<wt;Lt++){let w=it(xt[Lt],yt[Lt],Mt);k(w.x,w.y,-A)}}}let Pt=g+_;for(let G=0;G<$;G++){let tt=u?it(M[G],kt[G],Pt):M[G];y?(U.copy(F.normals[0]).multiplyScalar(tt.x),C.copy(F.binormals[0]).multiplyScalar(tt.y),L.copy(v[0]).add(U).add(C),k(L.x,L.y,L.z)):k(tt.x,tt.y,0)}for(let G=1;G<=h;G++)for(let tt=0;tt<$;tt++){let A=u?it(M[tt],kt[tt],Pt):M[tt];y?(U.copy(F.normals[G]).multiplyScalar(A.x),C.copy(F.binormals[G]).multiplyScalar(A.y),L.copy(v[G]).add(U).add(C),k(L.x,L.y,L.z)):k(A.x,A.y,d/h*G)}for(let G=m-1;G>=0;G--){let tt=G/m,A=f*Math.cos(tt*Math.PI/2),Mt=g*Math.sin(tt*Math.PI/2)+_;for(let st=0,Rt=q.length;st<Rt;st++){let xt=it(q[st],dt[st],Mt);k(xt.x,xt.y,d+A)}for(let st=0,Rt=P.length;st<Rt;st++){let xt=P[st];yt=vt[st];for(let Lt=0,wt=xt.length;Lt<wt;Lt++){let w=it(xt[Lt],yt[Lt],Mt);y?k(w.x,w.y+v[h-1].y,v[h-1].x+A):k(w.x,w.y,d+A)}}}Y(),rt();function Y(){let G=i.length/3;if(u){let tt=0,A=$*tt;for(let Mt=0;Mt<ft;Mt++){let st=W[Mt];pt(st[2]+A,st[1]+A,st[0]+A)}tt=h+m*2,A=$*tt;for(let Mt=0;Mt<ft;Mt++){let st=W[Mt];pt(st[0]+A,st[1]+A,st[2]+A)}}else{for(let tt=0;tt<ft;tt++){let A=W[tt];pt(A[2],A[1],A[0])}for(let tt=0;tt<ft;tt++){let A=W[tt];pt(A[0]+$*h,A[1]+$*h,A[2]+$*h)}}n.addGroup(G,i.length/3-G,0)}function rt(){let G=i.length/3,tt=0;_t(q,tt),tt+=q.length;for(let A=0,Mt=P.length;A<Mt;A++){let st=P[A];_t(st,tt),tt+=st.length}n.addGroup(G,i.length/3-G,1)}function _t(G,tt){let A=G.length;for(;--A>=0;){let Mt=A,st=A-1;st<0&&(st=G.length-1);for(let Rt=0,xt=h+m*2;Rt<xt;Rt++){let Lt=$*Rt,wt=$*(Rt+1),w=tt+Mt+Lt,x=tt+st+Lt,X=tt+st+wt,et=tt+Mt+wt;ht(w,x,X,et)}}}function k(G,tt,A){l.push(G),l.push(tt),l.push(A)}function pt(G,tt,A){z(G),z(tt),z(A);let Mt=i.length/3,st=E.generateTopUV(n,i,Mt-3,Mt-2,Mt-1);ut(st[0]),ut(st[1]),ut(st[2])}function ht(G,tt,A,Mt){z(G),z(tt),z(Mt),z(tt),z(A),z(Mt);let st=i.length/3,Rt=E.generateSideWallUV(n,i,st-6,st-3,st-2,st-1);ut(Rt[0]),ut(Rt[1]),ut(Rt[3]),ut(Rt[1]),ut(Rt[2]),ut(Rt[3])}function z(G){i.push(l[G*3+0]),i.push(l[G*3+1]),i.push(l[G*3+2])}function ut(G){r.push(G.x),r.push(G.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Wg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new so[i.type]().fromJSON(i)),new s(n,t.options)}},Gg={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new gt(r,o),new gt(a,l),new gt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],g=t[i*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new gt(o,1-l),new gt(c,1-d),new gt(u,1-g),new gt(_,1-p)]:[new gt(a,1-l),new gt(h,1-d),new gt(f,1-g),new gt(m,1-p)]}};function Wg(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var gs=class s extends Me{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/i,f=new R,g=new gt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<i;_++){let m=_*(n+1);for(let p=0;p<n;p++){let E=p+m,v=E,y=E+n+1,F=E+n+2,C=E+1;a.push(v,y,C),a.push(y,F,C)}}this.setIndex(a),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var sn=class s extends Me{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new R,u=new R,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let E=[],v=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let F=0;F<=e;F++){let C=F/e;d.x=-t*Math.cos(i+C*r)*Math.sin(o+v*a),d.y=t*Math.cos(o+v*a),d.z=t*Math.sin(i+C*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(C+y,1-v),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let v=h[p][E+1],y=h[p][E],F=h[p+1][E],C=h[p+1][E+1];(p!==0||o>0)&&f.push(v,y,C),(p!==n-1||l<Math.PI)&&f.push(y,F,C)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var _s=class s extends Me{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new R,d=new R,u=new R;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let _=g/i*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,E=(i+1)*f+g;o.push(_,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ao=class s extends Me{constructor(t=new no(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new gt,h=new R,d=[],u=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(f,2));function _(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),E(),p()}function m(v){h=t.getPointAt(v/e,h);let y=o.normals[v],F=o.binormals[v];for(let C=0;C<=i;C++){let U=C/i*Math.PI*2,L=Math.sin(U),S=-Math.cos(U);l.x=S*y.x+L*F.x,l.y=S*y.y+L*F.y,l.z=S*y.z+L*F.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let y=1;y<=i;y++){let F=(i+1)*(v-1)+(y-1),C=(i+1)*v+(y-1),U=(i+1)*v+y,L=(i+1)*(v-1)+y;g.push(F,C,L),g.push(C,U,L)}}function E(){for(let v=0;v<=e;v++)for(let y=0;y<=i;y++)c.x=v/e,c.y=y/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new so[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Gt=class extends ri{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hh,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},lo=class extends Gt{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return we(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Dr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Xg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var xs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Rl=class extends xs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vc,endingEnd:vc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mc:r=t,a=2*e-n;break;case bc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mc:o=t,l=2*n-e;break;case bc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,E=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,v=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let F=0;F!==a;++F)r[F]=p*o[h+F]+E*o[c+F]+v*o[l+F]+y*o[d+F];return r}},Cl=class extends xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Pl=class extends xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},fn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Dr(e,this.TimeBufferType),this.values=Dr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Dr(t.times,Array),values:Dr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Rl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case zr:e=this.InterpolantFactoryMethodDiscrete;break;case rl:e=this.InterpolantFactoryMethodLinear;break;case Vo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return rl;case this.InterpolantFactoryMethodSmooth:return Vo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Xg(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Vo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[u+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=rl;var Ai=class extends fn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=zr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends fn{};Il.prototype.ValueTypeName="color";var Ll=class extends fn{};Ll.prototype.ValueTypeName="number";var Dl=class extends xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)$e.slerpFlat(r,0,o,c-a,o,c,l);return r}},co=class extends fn{InterpolantFactoryMethodLinear(t){return new Dl(this.times,this.values,this.getValueSize(),t)}};co.prototype.ValueTypeName="quaternion";co.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends fn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=zr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ul=class extends fn{};Ul.prototype.ValueTypeName="vector";var Nl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},qg=new Nl,kl=class{constructor(t){this.manager=t!==void 0?t:qg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};kl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ci=class extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ho=class extends Ci{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ya=new ge,Sh=new R,Eh=new R,Ks=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gs,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),Eh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eh),e.updateMatrixWorld(),ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ol=class extends Ks{constructor(){super(new Ne(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=ls*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},uo=class extends Ci{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ol}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},wh=new ge,Ls=new R,va=new R,Fl=class extends Ks{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ls),va.copy(n.position),va.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(va),n.updateMatrixWorld(),i.makeTranslation(-Ls.x,-Ls.y,-Ls.z),wh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh)}},ai=class extends Ci{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},zl=class extends Ks{constructor(){super(new $r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fo=class extends Ci{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new zl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},po=class extends Ci{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var tc="\\[\\]\\.:\\/",Yg=new RegExp("["+tc+"]","g"),ec="[^"+tc+"]",$g="[^"+tc.replace("\\.","")+"]",Zg=/((?:WC+[\/:])*)/.source.replace("WC",ec),jg=/(WCOD+)?/.source.replace("WCOD",$g),Kg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ec),Jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ec),Qg=new RegExp("^"+Zg+jg+Kg+Jg+"$"),t_=["material","materials","bones","map"],Bl=class{constructor(t,e,n){let i=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yg,"")}static parseTrackName(t){let e=Qg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);t_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=Bl;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var B_=new Float32Array(1);var Th=new ge,mo=class{constructor(t,e,n=0,i=1/0){this.ray=new wi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Th.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Th),this}intersectObject(t,e=!0,n=[]){return Hl(t,this,n,e),n.sort(Ah),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Hl(t[i],this,n,e);return n.sort(Ah),n}};function Ah(s,t){return s.distance-t.distance}function Hl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Hl(r[o],t,e,!0)}}var Js=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var go=class extends Nn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vl);var Mo=class extends ds{constructor(){super();let t=new $t;t.deleteAttribute("uv");let e=new Gt({side:Te}),n=new Gt,i=new ai(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Ct(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ct(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Ct(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Ct(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Ct(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new Ct(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let d=new Ct(t,n);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let u=new Ct(t,Ms(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let f=new Ct(t,Ms(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new Ct(t,Ms(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let _=new Ct(t,Ms(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);let m=new Ct(t,Ms(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new Ct(t,Ms(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ms(s){let t=new Ae;return t.color.setScalar(s),t}var Pe=-1.0474999999999999,li=.292,bo=9.81,nc=.2,e_=.011,tu=6,n_=.95,eu=.78,i_=.15,s_=7,vn={white:{name:"Biela",color:16052712,value:0},red:{name:"\u010Cerven\xE1",color:11735583,value:1},yellow:{name:"\u017Dlt\xE1",color:15909912,value:2},green:{name:"Zelen\xE1",color:1014330,value:3},brown:{name:"Hned\xE1",color:7027230,value:4},blue:{name:"Modr\xE1",color:1525685,value:5},pink:{name:"Ru\u017Eov\xE1",color:15764136,value:6},black:{name:"\u010Cierna",color:1118481,value:7}},on={yellow:{x:Pe,z:li},green:{x:Pe,z:-li},brown:{x:Pe,z:0},blue:{x:0,z:0},pink:{x:3.569/4,z:0},black:{x:3.569/2-.324,z:0}},rn=.062,bs=.052,Li=[{x:-3.569/2-.012,z:-1.778/2-.012,r:.058,corner:!0},{x:-3.569/2-.012,z:1.778/2+.012,r:.058,corner:!0},{x:3.569/2+.012,z:-1.778/2-.012,r:.058,corner:!0},{x:3.569/2+.012,z:1.778/2+.012,r:.058,corner:!0},{x:0,z:-1.778/2-.034,r:.056,corner:!1},{x:0,z:1.778/2+.034,r:.056,corner:!1}];function r_(){let s=[],n=(r,o,a,l)=>s.push({ax:r,az:o,bx:a,bz:l});for(let r of[-1,1])n(r*1.7845,-.889+rn,r*1.7845,.889-rn),n(r*1.7845,-.889+rn,r*(1.7845+.045*.7),-.889+rn-.045*.7),n(r*1.7845,.889-rn,r*(1.7845+.045*.7),.889-rn+.045*.7);for(let r of[-1,1])n(-1.7845+rn,r*.889,-bs,r*.889),n(bs,r*.889,1.7845-rn,r*.889),n(-1.7845+rn,r*.889,-1.7845+rn-.045*.7,r*(.889+.045*.7)),n(1.7845-rn,r*.889,1.7845-rn+.045*.7,r*(.889+.045*.7)),n(-bs,r*.889,-bs+.008,r*(.889+.045)),n(bs,r*.889,bs-.008,r*(.889+.045));return s}var o_=r_();function Ss(){let s=[],t=(r,o,a)=>s.push(a_(s.length,r,o,a));t("white",Pe-.06,-.12);for(let r of["yellow","green","brown","blue","pink","black"])t(r,on[r].x,on[r].z);let e=6e-4,n=on.pink.x+2*.02625+.002,i=Math.sqrt(3)*(.02625+e/2);for(let r=0;r<5;r++)for(let o=0;o<=r;o++)t("red",n+r*i,(o-r/2)*(2*.02625+e));return s}function a_(s,t,e,n){return{id:s,kind:t,p:{x:e,z:n},v:{x:0,z:0},w:{x:0,y:0,z:0},on:!0,potted:null,moving:!1}}function tr(s){return s.map(t=>({id:t.id,kind:t.kind,x:t.p.x,z:t.p.z,on:t.on}))}function er(s,t){for(let e of t){let n=s[e.id];n.p.x=e.x,n.p.z=e.z,n.on=e.on,n.potted=null,n.v.x=n.v.z=0,n.w.x=n.w.y=n.w.z=0}}function Eo(s,t,e,n=0,i=0){let r=Math.max(.05,Math.min(1,e))*s_,o=Math.cos(t),a=Math.sin(t);s.v.x=r*o,s.v.z=r*a;let l=n*.5*.02625,c=i*.5*.02625,h=5*r/(2*.02625*.02625);s.w.x=h*c*a,s.w.y=h*l,s.w.z=-h*c*o,s.moving=!0}var l_=1/1e3,So=class{constructor(t){this.balls=t,this.events=[],this.firstContact=null,this.time=0}get moving(){return this.balls.some(t=>t.on&&t.moving)}advance(t){let e=t;for(;e>1e-9;){let n=Math.min(l_,e);if(this.step(n),e-=n,!this.moving)break}return this.moving}step(t){this.time+=t;let e=this.balls;for(let n of e)n.on&&n.moving&&(c_(n,t),n.p.x+=n.v.x*t,n.p.z+=n.v.z*t);for(let n=0;n<e.length;n++){let i=e[n];if(i.on)for(let r=n+1;r<e.length;r++){let o=e[r];if(!o.on||!i.moving&&!o.moving)continue;let a=o.p.x-i.p.x,l=o.p.z-i.p.z,c=a*a+l*l;if(c>=4*.02625*.02625||c<1e-12)continue;let h=Math.sqrt(c),d=a/h,u=l/h,f=(i.v.x-o.v.x)*d+(i.v.z-o.v.z)*u,g=(2*.02625-h)/2+1e-7;if(i.p.x-=d*g,i.p.z-=u*g,o.p.x+=d*g,o.p.z+=u*g,f<=0)continue;let _=(1+n_)/2*f;i.v.x-=_*d,i.v.z-=_*u,o.v.x+=_*d,o.v.z+=_*u,i.moving=o.moving=!0,this.firstContact===null&&(i.kind==="white"||o.kind==="white")&&(this.firstContact=i.kind==="white"?o:i),this.events.push({type:"ball",a:i.id,b:o.id,speed:f})}}for(let n of e){if(!n.on||!n.moving)continue;for(let r of Li){let o=n.p.x-r.x,a=n.p.z-r.z;if(o*o+a*a<r.r*r.r){n.on=!1,n.moving=!1,n.potted={x:r.x,z:r.z,vx:n.v.x,vz:n.v.z,t:this.time},this.events.push({type:"pot",a:n.id,pocket:Li.indexOf(r),speed:Math.hypot(n.v.x,n.v.z)});break}}if(!n.on)continue;for(let r of o_)h_(n,r,this.events);let i=.2;(Math.abs(n.p.x)>3.569/2+i||Math.abs(n.p.z)>1.778/2+i)&&(n.p.x=Math.max(-3.569/2+.02625,Math.min(3.569/2-.02625,n.p.x)),n.p.z=Math.max(-1.778/2+.02625,Math.min(1.778/2-.02625,n.p.z)),n.v.x=n.v.z=0)}}};function c_(s,t){let e=s.v,n=s.w,i=e.x+.02625*n.z,r=e.z-.02625*n.x,o=Math.hypot(i,r);if(o>1e-4){let l=3.5*nc*bo*t;if(o<=l)e.x-=2/7*i,e.z-=2/7*r,n.z=-e.x/.02625,n.x=e.z/.02625;else{let c=i/o,h=r/o,d=nc*bo*t;e.x-=d*c,e.z-=d*h;let u=5*nc*bo/(2*.02625)*t;n.x+=u*h,n.z-=u*c}}else{let l=Math.hypot(e.x,e.z),c=e_*bo*t;l<=c?e.x=e.z=0:(e.x-=e.x/l*c,e.z-=e.z/l*c),n.z=-e.x/.02625,n.x=e.z/.02625}n.y*=Math.exp(-tu*t*.12);let a=tu*t;n.y=Math.abs(n.y)<=a?0:n.y-Math.sign(n.y)*a,Math.hypot(e.x,e.z)<.004&&Math.hypot(i,r)<.004&&(e.x=e.z=0,n.x=n.y=n.z=0,s.moving=!1)}function h_(s,t,e){let n=t.bx-t.ax,i=t.bz-t.az,r=n*n+i*i,o=((s.p.x-t.ax)*n+(s.p.z-t.az)*i)/r;o=Math.max(0,Math.min(1,o));let a=t.ax+o*n,l=t.az+o*i,c=s.p.x-a,h=s.p.z-l,d=c*c+h*h;if(d>=.02625*.02625||d<1e-14)return;let u=Math.sqrt(d),f=c/u,g=h/u,_=s.v.x*f+s.v.z*g;if(s.p.x+=f*(.02625-u+1e-7),s.p.z+=g*(.02625-u+1e-7),_>=0)return;s.v.x-=(1+eu)*_*f,s.v.z-=(1+eu)*_*g;let m=-g,p=f,E=s.w.y*.02625,v=i_*Math.min(1,-_/1.5+.3);s.v.x-=v*E*m,s.v.z-=v*E*p,s.w.y*=.55,s.w.x*=.7,s.w.z*=.7,s.moving=!0,e.push({type:"cushion",a:s.id,speed:-_})}function wo(s,t,e){let n=Math.cos(e),i=Math.sin(e),r=null;for(let a of s){if(!a.on||a===t)continue;let l=a.p.x-t.p.x,c=a.p.z-t.p.z,h=l*n+c*i;if(h<=0)continue;let d=l*l+c*c-h*h;if(d>4*.02625*.02625)continue;let u=h-Math.sqrt(4*.02625*.02625-d);u>=0&&(!r||u<r.t)&&(r={ball:a,t:u})}let o=1/0;return n>1e-9&&(o=Math.min(o,(3.569/2-.02625-t.p.x)/n)),n<-1e-9&&(o=Math.min(o,(-3.569/2+.02625-t.p.x)/n)),i>1e-9&&(o=Math.min(o,(1.778/2-.02625-t.p.z)/i)),i<-1e-9&&(o=Math.min(o,(-1.778/2+.02625-t.p.z)/i)),!r||o<r.t?{ball:null,t:o,ghost:{x:t.p.x+n*o,z:t.p.z+i*o}}:{ball:r.ball,t:r.t,ghost:{x:t.p.x+n*r.t,z:t.p.z+i*r.t}}}function nu(s,t){if(s>Pe+1e-9)return!1;let e=s-Pe;return e*e+t*t<=li*li+1e-9}function To(s,t,e,n=null){return Math.abs(t)>3.569/2-.02625||Math.abs(e)>1.778/2-.02625?!1:s.every(i=>!i.on||i===n||(i.p.x-t)**2+(i.p.z-e)**2>=4*.02625*.02625*1.0001)}var u_=[{title:"Ovl\xE1danie my\u0161ou",lines:["Klikni do hry: my\u0161 sa zachyt\xED v okne.","Pohyb my\u0161i bez tla\u010Didla: mierenie.","Shift: jemn\xE9 mierenie (len pokro\u010Dil\xE9","   a majstrovsk\xE9 t\xE1g\xE1, pozri F2).","\u013Dav\xE9 tla\u010Didlo dr\u017E: ruka chyt\xED t\xE1go.","   My\u0161 k sebe t\xE1go odtiahne,","   pohyb dopredu vystrel\xED.","   Sila pod\u013Ea r\xFDchlosti pohybu.","Koliesko dr\u017E: miesto \xFAderu na bielej.","Dvojklik kolieskom: stred bielej.","Prav\xE9 tla\u010Didlo dr\u017E: posun poh\u013Eadu.","Ot\xE1\u010Danie kolieska: pribl\xED\u017Eenie."]},{title:"Kl\xE1vesy",lines:["F1   t\xE1to n\xE1stenka","F2   stojan s t\xE1gami","F3   nakriedova\u0165 \u0161pi\u010Dku t\xE1ga","F4   tabu\u013Ea so sk\xF3re","F6   otvori\u0165 alebo zatvori\u0165 dvere","F7 kreslo so spr\xE1vami (C, V), F8 rebr\xED\u010Dek","Tab  poh\u013Ead na st\xF4l zhora","Esc  hlavn\xE9 menu, Ctrl dr\u017E: vo\u013En\xE1 my\u0161","Z sp\xE4\u0165, B biela do ruky,","R nov\xE9 rozostavenie, S presko\u010Di\u0165","Medzern\xEDk dr\u017E: sila, \u0161\xEDpky: mierenie"]},{title:"Princ\xEDp hry",lines:["Bielou gu\u013Eou pot\xE1paj ostatn\xE9 gule.","Body: \u010Derven\xE1 1, \u017Elt\xE1 2, zelen\xE1 3,","hned\xE1 4, modr\xE1 5, ru\u017Eov\xE1 6, \u010Dierna 7.","O najlep\u0161ie sk\xF3re: cel\xFD frame s\xE1m,","   fauly sa odpo\u010D\xEDtaj\xFA, rozhoduje \u010Das.","S\xE9ria: body bez preru\u0161enia.","Ke\u010F spadne biela, polo\u017E ju do D.","Kruh dole ukazuje dotyk g\xFA\u013E zhora:","   uhol a plnos\u0165 z\xE1sahu.","Krieda (F3): fal\u0161e s\xFA 5x silnej\u0161ie,","   nakriedovan\xE1 \u0161pi\u010Dka vydr\u017E\xED 3 \xFAdery.","   Bez kriedy maj\xFA fal\u0161e len p\xE4tinu \xFA\u010Dinku."]},{title:"T\xE1g\xE1 (F2) a partie",lines:["Desa\u0165 t\xE1g v troch kateg\xF3ri\xE1ch.","Tvrd\xE1 \u0161pi\u010Dka: silnej\u0161\xED \xFAder,","   hor\u0161ie dr\u017E\xED fal\u0161e.","M\xE4kk\xE1 \u0161pi\u010Dka: jemnej\u0161ie \xFAdery.","Dlh\xE9 t\xE1go: dlh\u0161ie \u0165ahanie my\u0161ou,","   jemnej\u0161ie d\xE1vkovanie sily.","Pokro\u010Dil\xE9 a majstrovsk\xE9 t\xE1g\xE1","   maj\xFA jemn\xE9 mierenie so Shift.","V\xFDber: klik na kartu alebo \u0161\xEDpky.","Hra\u0165 s priate\u013Eom (menu po Esc):","   partia cez internet pod\u013Ea pravidiel."]}];function iu(){let e=document.createElement("canvas");e.width=2048,e.height=1408;let n=e.getContext("2d");n.fillStyle="#a5754a",n.fillRect(0,0,2048,1408);for(let o=0;o<9e3;o++)n.fillStyle=`rgba(${60+Math.random()*80},${35+Math.random()*40},${15+Math.random()*20},${.15+Math.random()*.25})`,n.fillRect(Math.random()*2048,Math.random()*1408,2+Math.random()*4,2+Math.random()*4);n.fillStyle="#f4ecd8",n.save(),n.translate(2048/2,92),n.rotate(-.01),n.fillRect(-330,-60,660,112),n.fillStyle="#123524",n.font="bold 76px Georgia, serif",n.textAlign="center",n.textBaseline="middle",n.fillText("N\xE1poveda",0,0),n.restore();let i=[[70,190,960,600,-.012],[1080,190,900,520,.01],[70,830,960,530,.008],[1080,760,900,600,-.01]];u_.forEach((o,a)=>{let[l,c,h,d,u]=i[a];n.save(),n.translate(l+h/2,c+d/2),n.rotate(u),n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(-h/2+10,-d/2+12,h,d),n.fillStyle="#fbf7ec",n.fillRect(-h/2,-d/2,h,d),n.fillStyle=["#c0392b","#2f6fd6","#2a9d8f","#c9a24a"][a],n.beginPath(),n.arc(0,-d/2+22,14,0,Math.PI*2),n.fill(),n.fillStyle="#123524",n.font="bold 50px Georgia, serif",n.textAlign="left",n.textBaseline="top",n.fillText(o.title,-h/2+40,-d/2+50),n.fillStyle="#c9a24a",n.fillRect(-h/2+40,-d/2+110,h-80,4),n.fillStyle="#222";let f=Math.min(42,(d-150)/o.lines.length);n.font=`${Math.min(36,Math.floor(f*.86))}px Arial, Helvetica, sans-serif`,o.lines.forEach((g,_)=>{n.fillText(g,-h/2+44,-d/2+132+_*f)}),n.restore()});let r=new fe(e);return r.colorSpace=ee,r.anisotropy=8,r}var Mn=(s,t,e,n,i,r,o,a,l,c,h)=>({id:s,name:t,category:e,tip:n,power:i,grip:r,len:o,fine:a,colors:{shaft:l,butt:c},note:h}),Ze=[Mn("club","Klubov\xE9 t\xE1go","Z\xE1kladn\xE9","stredn\xE1",.8,1,1.45,0,"#dcb57e","#3a1c0c","Predvolen\xE9 t\xE1go na ka\u017Ed\xFD \xFAder."),Mn("short","Kr\xE1tke t\xE1go","Z\xE1kladn\xE9","tvrd\xE1",.9,.85,1.37,0,"#d2a56a","#5a1d0e","Kr\xE1tke \u0165ahanie, siln\xE9 \xFAdery, hor\u0161ie dr\u017E\xED fal\u0161e."),Mn("compact","Kompaktn\xE9 t\xE1go","Z\xE1kladn\xE9","stredn\xE1",.75,1,1.3,0,"#e0bd88","#20304a","Najkrat\u0161ie, r\xFDchle \u0165ahanie, slab\u0161ie \xFAdery."),Mn("break","Prer\xE1\u017Eacie t\xE1go","Z\xE1kladn\xE9","ve\u013Emi tvrd\xE1",1,.7,1.45,0,"#cfa060","#5b0f14","Pln\xE1 sila na rozbitie, fal\u0161e skoro nedr\u017E\xED."),Mn("soft","M\xE4kk\xE9 t\xE1go","Pokro\u010Dil\xE9","m\xE4kk\xE1",.65,1,1.47,8e-5,"#e8c992","#1f3b2a","Jemn\xE9 \xFAdery okolo \u010Diernej, presn\xE9 d\xE1vkovanie sily."),Mn("long","Dlh\xE9 t\xE1go","Pokro\u010Dil\xE9","stredn\xE1",.85,1,1.58,6e-5,"#dfbc88","#14213d","Dlh\xE9 \u0165ahanie my\u0161ou, ve\u013Emi jemn\xE9 d\xE1vkovanie sily."),Mn("ebony","Ebenov\xE9 t\xE1go","Pokro\u010Dil\xE9","stredne tvrd\xE1",.9,.95,1.49,6e-5,"#e6c896","#0d0d0d","Vyv\xE1\u017Een\xE9 t\xE1go na v\u0161etky \xFAdery."),Mn("master","Majstrovsk\xE9 t\xE1go","Majstrovsk\xE9","stredne tvrd\xE1",1,1,1.5,3e-5,"#efd3a0","#0b0b0b","Pln\xE1 sila aj najjemnej\u0161ie mierenie so Shift."),Mn("tour","Turnajov\xE9 t\xE1go","Majstrovsk\xE9","tvrd\xE1",1,.9,1.47,3e-5,"#f0d6a4","#2a0f2e","Siln\xE9 a presn\xE9 \xFAdery, fal\u0161e o nie\u010Do slab\u0161ie."),Mn("touch","Citliv\xE9 t\xE1go","Majstrovsk\xE9","m\xE4kk\xE1",.72,1,1.6,2e-5,"#f2dcae","#123524","Najjemnej\u0161ie d\xE1vkovanie sily a mierenie.")];function ic(s){return Ze.find(t=>t.id===s)||Ze[0]}function su(s){return 380*Math.pow(s.len/1.45,1.6)}function d_(s){let n=document.createElement("canvas");n.width=64,n.height=2048;let i=n.getContext("2d"),r=a=>2048*(1-a);i.fillStyle=s.colors.shaft,i.fillRect(0,0,64,2048);for(let a=0;a<40;a++){i.strokeStyle=`rgba(${120+Math.random()*40},${80+Math.random()*30},${40+Math.random()*20},${.12+Math.random()*.18})`,i.lineWidth=.5+Math.random()*1.5;let l=Math.random()*64;i.beginPath(),i.moveTo(l,0);for(let c=0;c<=2048;c+=64)i.lineTo(l+Math.sin(c/300+a)*3,c);i.stroke()}i.fillStyle=s.colors.butt,i.fillRect(0,0,64,r(.64));for(let a=0;a<4;a++){let l=(a+.5)*16;i.beginPath(),i.moveTo(l-64/8,r(.64)),i.lineTo(l,r(.5)),i.lineTo(l+64/8,r(.64)),i.closePath(),i.fill()}for(let a=0;a<30;a++){i.strokeStyle=`rgba(255,255,255,${.03+Math.random()*.05})`,i.lineWidth=.6+Math.random();let l=Math.random()*64;i.beginPath(),i.moveTo(l,0),i.lineTo(l+(Math.random()-.5)*6,r(.62)),i.stroke()}i.fillStyle="#c9a24a",i.fillRect(0,r(.645),64,2048*.004),i.fillRect(0,r(.985),64,2048*.004),i.fillStyle="#111",i.fillRect(0,0,64,r(.993)),i.fillStyle="#f3efe4",i.fillRect(0,r(.03),64,2048*.017),i.fillStyle="#2f6fd6",i.fillRect(0,r(.013),64,2048*.013+1);let o=new fe(n);return o.colorSpace=ee,o.anisotropy=4,o}function Ao(s,t=!0){let e=new de,n=new be(.0145,.0048,s.len,24,1),i=new Ct(n,new Gt({map:d_(s),roughness:.32,metalness:.04}));return i.position.y=s.len/2,i.castShadow=t,e.add(i),e}var Fn=2048,Es=1448;function ci(s,t,e,n,i,r,o){let a=String(t||"").split(/\s+/),l="",c=0;for(let h=0;h<a.length;h++){let d=l?l+" "+a[h]:a[h];if(s.measureText(d).width>i&&l){if(c++,c>=o){let u=l;for(;u&&s.measureText(u+"\u2026").width>i;)u=u.slice(0,-1);return s.fillText(u+"\u2026",e,n),n+r}s.fillText(l,e,n),n+=r,l=a[h]}else l=d}return l&&(s.fillText(l,e,n),n+=r),n}function ru(s,t){let e=document.createElement("canvas");e.width=Fn,e.height=Es;let n=e.getContext("2d"),i=new fe(e);i.colorSpace=ee,i.anisotropy=8;let r=(s||[]).slice(0,9),o=r.map(()=>null),a="#1d1a16",l='Georgia, "Times New Roman", serif',c=(d,u,f,g,_)=>{let m=o[d];if(m){let p=g/_,E=m.width,v=m.width/p;v>m.height&&(v=m.height,E=m.height*p),n.save(),n.filter="grayscale(0.25) sepia(0.15)",n.drawImage(m,(m.width-E)/2,(m.height-v)/2,E,v,u,f,g,_),n.restore()}else n.fillStyle="#cfc6b3",n.fillRect(u,f,g,_),n.fillStyle="#a69c87",n.font=`bold 40px ${l}`,n.textAlign="center",n.fillText("HEDLAJNER",u+g/2,f+_/2+14),n.textAlign="left"},h=()=>{n.fillStyle="#f1ebdd",n.fillRect(0,0,Fn,Es);for(let p=0;p<2500;p++)n.fillStyle=`rgba(120,100,70,${Math.random()*.05})`,n.fillRect(Math.random()*Fn,Math.random()*Es,3,3);let d=n.createLinearGradient(Fn/2-30,0,Fn/2+30,0);d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(.5,"rgba(0,0,0,0.12)"),d.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=d,n.fillRect(Fn/2-30,0,60,Es),n.fillStyle="#c0392b",n.fillRect(60,46,92,92),n.fillStyle="#fff",n.font=`bold 78px ${l}`,n.fillText("H",80,120),n.fillStyle=a,n.font=`bold 104px ${l}`,n.fillText(t||"HEDLAJNER",172,128),n.font=`italic 34px ${l}`,n.fillStyle="#5a5246",n.fillText("Hlavn\xE9 spr\xE1vy z domova a zo sveta",176,172);let u=new Date;if(n.textAlign="right",n.font=`30px ${l}`,n.fillText(`${u.getDate()}. ${u.getMonth()+1}. ${u.getFullYear()}   hedlajner.sk`,Fn-60,128),n.textAlign="left",n.fillStyle=a,n.fillRect(60,196,Fn-120,5),n.fillRect(60,207,Fn-120,1.5),!r.length){n.font=`48px ${l}`,n.fillText("Spr\xE1vy sa nepodarilo na\u010D\xEDta\u0165.",80,320),i.needsUpdate=!0;return}let f=r[0];c(0,60,240,920,520),n.fillStyle="#c0392b",n.font="bold 30px Arial, sans-serif",n.fillText((f.c||"").toUpperCase(),60,808),n.fillStyle=a,n.font=`bold 62px ${l}`;let g=ci(n,f.t,60,876,920,70,3);n.font=`32px ${l}`,n.fillStyle="#3a342c",g=ci(n,f.e,60,g+10,920,42,6),n.font=`italic 26px ${l}`,n.fillStyle="#7a7060",n.fillText(f.d||"",60,Math.min(Es-50,g+14));let _=240;for(let p=1;p<=2&&p<r.length;p++){let E=r[p];c(p,1070,_,300,200),n.fillStyle="#c0392b",n.font="bold 24px Arial, sans-serif",n.fillText((E.c||"").toUpperCase(),1395,_+26),n.fillStyle=a,n.font=`bold 40px ${l}`;let v=ci(n,E.t,1395,_+74,590,46,3);n.font=`26px ${l}`,n.fillStyle="#3a342c",ci(n,E.e,1395,v+4,590,32,Math.max(1,Math.floor((_+260-v)/32))),_+=300,n.fillStyle="rgba(29,26,22,0.4)",n.fillRect(1070,_-40,915,2)}n.fillStyle=a,n.font="bold 34px Arial, sans-serif",n.fillText("\u010EAL\u0160IE SPR\xC1VY",1070,_+8),n.fillRect(1070,_+22,915,3),r.slice(3).forEach((p,E)=>{let v=E%2,y=Math.floor(E/2),F=1070+v*470,C=_+80+y*200;C>Es-80||(n.fillStyle="#c0392b",n.font="bold 22px Arial, sans-serif",n.fillText((p.c||"").toUpperCase(),F,C),n.fillStyle=a,n.font=`bold 32px ${l}`,ci(n,p.t,F,C+42,440,38,3),n.font=`italic 22px ${l}`,n.fillStyle="#7a7060",n.fillText(p.d||"",F,C+168))}),i.needsUpdate=!0};return h(),r.slice(0,3).forEach((d,u)=>{if(!d.i)return;let f=new Image;f.crossOrigin="anonymous",f.onload=()=>{o[u]=f;try{h()}catch{o[u]=null,h()}},f.src=d.i}),{texture:i,items:r}}function ou(s){let n=document.createElement("canvas");n.width=1024,n.height=1400;let i=n.getContext("2d"),r=new fe(n);r.colorSpace=ee,r.anisotropy=8;let o=(s||[]).slice(0,12),a="Arial, Helvetica, sans-serif",l=i.createLinearGradient(0,0,1024,1400);l.addColorStop(0,"#0f2a4a"),l.addColorStop(1,"#1d5a7a"),i.fillStyle=l,i.fillRect(0,0,1024,1400),i.fillStyle="rgba(255,255,255,0.06)";for(let u=0;u<14;u++)i.beginPath(),i.arc(Math.random()*1024,Math.random()*1400,60+Math.random()*160,0,Math.PI*2),i.fill();i.fillStyle="#ffffff",i.font=`900 120px ${a}`,i.fillText("SPR\xC1VY",50,150),i.fillStyle="#ffcf4a",i.font=`bold 44px ${a}`,i.fillText("RSS",560,150),i.fillStyle="#d6e6f5",i.font=`30px ${a}`,i.fillText("Hedlajner  |  spr\xE1vy z m\xE9di\xED doma aj vo svete",54,200);let c=new Date;if(i.textAlign="right",i.fillText(`${c.getDate()}. ${c.getMonth()+1}. ${c.getFullYear()}`,974,70),i.textAlign="left",i.fillStyle="#ffcf4a",i.fillRect(50,226,924,6),!o.length)return i.fillStyle="#fff",i.font=`44px ${a}`,i.fillText("Spr\xE1vy z RSS nie s\xFA k dispoz\xEDcii.",60,330),r.needsUpdate=!0,{texture:r,items:o};let h=o[0];i.fillStyle="#ffcf4a",i.font=`bold 30px ${a}`,i.fillText(`${(h.c||"").toUpperCase()}  ${h.s||""}`,50,300),i.fillStyle="#ffffff",i.font=`bold 66px ${a}`;let d=ci(i,h.t,50,380,924,74,4);return i.fillStyle="#d6e6f5",i.font=`32px ${a}`,d=ci(i,h.e,50,d+6,924,42,3),d+=30,i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(36,d-10,952,1400-d-40),d+=40,o.slice(1).forEach(u=>{d>1310||(i.fillStyle="#ffcf4a",i.font=`bold 22px ${a}`,i.fillText(`${u.s||""}${u.n?"  +"+u.n+" m\xE9di\xE1":""}`,60,d),i.fillStyle="#ffffff",i.font=`bold 32px ${a}`,d=ci(i,u.t,60,d+38,894,38,2)+18)}),r.needsUpdate=!0,{texture:r,items:o}}var Fe={x:5,z:3.75,floor:-.86,ceil:-.86+3},Di=1;function f_(){let e=document.createElement("canvas");e.width=512,e.height=426;let n=e.getContext("2d");n.fillStyle="#4e2914",n.fillRect(0,0,512,426);for(let r=0;r<120;r++){n.strokeStyle=`rgba(${20+Math.random()*30},${8+Math.random()*10},2,${.12+Math.random()*.2})`,n.lineWidth=.6+Math.random()*1.4,n.beginPath();let o=Math.random()*512;n.moveTo(o,0);for(let a=0;a<=426;a+=30)n.lineTo(o+Math.sin(a/50+r)*4,a);n.stroke()}for(let r of[0,512/2]){let o=r+26,a=40,l=512/2-52,c=346;n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(o,a,l,c),n.strokeStyle="rgba(0,0,0,0.55)",n.lineWidth=6,n.strokeRect(o,a,l,c),n.strokeStyle="rgba(255,190,120,0.18)",n.lineWidth=2,n.strokeRect(o+5,a+5,l-10,c-10)}let i=new fe(e);return i.colorSpace=ee,i.wrapS=Dn,i}function p_(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle="#1a4a32",e.fillRect(0,0,256,256);for(let r=0;r<256;r+=32)e.fillStyle="rgba(255,255,255,0.025)",e.fillRect(r,0,14,256);let n=(r,o)=>{e.save(),e.translate(r,o),e.fillStyle="rgba(190,170,110,0.16)",e.beginPath(),e.moveTo(0,-38),e.quadraticCurveTo(14,-10,0,0),e.quadraticCurveTo(-14,-10,0,-38),e.moveTo(0,38),e.quadraticCurveTo(14,10,0,0),e.quadraticCurveTo(-14,10,0,38),e.moveTo(-30,0),e.quadraticCurveTo(-8,10,0,0),e.quadraticCurveTo(-8,-10,-30,0),e.moveTo(30,0),e.quadraticCurveTo(8,10,0,0),e.quadraticCurveTo(8,-10,30,0),e.fill(),e.beginPath(),e.arc(0,0,5,0,Math.PI*2),e.fill(),e.restore()};n(256/2,256/2);for(let[r,o]of[[0,0],[256,0],[0,256],[256,256]])n(r,o);let i=new fe(t);return i.colorSpace=ee,i.wrapS=i.wrapT=Dn,i}function m_(s){let t=document.createElement("canvas");t.width=512,t.height=370;let e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,220),i=[["#f3c98b","#d9825b","#4a6a4d","#2c4a3a","#7aa6b8"],["#9fc3d8","#e8d3a8","#5d7b4f","#33502f","#6d93a8"]],r=i[s%i.length];n.addColorStop(0,r[0]),n.addColorStop(1,r[1]),e.fillStyle=n,e.fillRect(0,0,512,370),e.fillStyle="rgba(255,240,200,0.8)",e.beginPath(),e.arc(150+s*180,90,34,0,Math.PI*2),e.fill();for(let[a,l,c]of[[200,r[2],40],[250,r[3],30]]){e.fillStyle=l,e.beginPath(),e.moveTo(0,370);for(let h=0;h<=512;h+=16)e.lineTo(h,a-Math.sin(h/(70+s*20)+s)*c-Math.sin(h/23)*6);e.lineTo(512,370),e.fill()}e.fillStyle=r[4],e.fillRect(0,300,512,70),e.fillStyle="rgba(255,255,255,0.25)";for(let a=0;a<12;a++)e.fillRect(Math.random()*512,305+Math.random()*60,40+Math.random()*60,2);for(let a=0;a<1500;a++)e.fillStyle=`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.03)`,e.fillRect(Math.random()*512,Math.random()*370,6,2);let o=new fe(t);return o.colorSpace=ee,o}function g_(s,t){let e=document.createElement("canvas");e.width=256,e.height=96;let n=e.getContext("2d");n.fillStyle="#c9a24a",n.fillRect(0,0,256,96),n.strokeStyle="#7a5a1c",n.lineWidth=6,n.strokeRect(3,3,250,90),n.fillStyle="#1b1206",n.textAlign="center",n.font="bold 30px Georgia, serif",n.fillText(s,128,42),n.font="22px Arial, sans-serif",n.fillText(t,128,76);let i=new fe(e);return i.colorSpace=ee,i}function au(s,t,e={}){let n=t==="high",{x:i,z:r,floor:o,ceil:a}=Fe,l=a-o,c=f_(),h=p_(),d=new Gt({color:4859410,roughness:.45,metalness:.05}),u=new Gt({color:3020554,roughness:.4,metalness:.05}),f=new Gt({color:11569724,metalness:.85,roughness:.35}),g=new Gt({color:5904914,roughness:.55,metalness:.05}),_=(ct,T,B,N,O,nt=s)=>{let mt=new Ct(ct,T);return mt.position.set(B,N,O),mt.castShadow=n,mt.receiveShadow=!0,nt.add(mt),mt},m={at:1.9,w:1,h:2.15},p=null,E=On.degToRad(72),v={open:!0,angle:E},y=[[0,-r,0,2*i,null],[0,r,Math.PI,2*i,null],[-i,0,Math.PI/2,2*r,null],[i,0,-Math.PI/2,2*r,m]];for(let[ct,T,B,N,O]of y){let nt=new de;nt.position.set(ct,o,T),nt.rotation.y=B;let mt=O?[[-N/2,O.at-O.w/2],[O.at+O.w/2,N/2]]:[[-N/2,N/2]];for(let[Ot,Qt]of mt){let Yt=Qt-Ot,Se=(Ot+Qt)/2,he=h.clone();he.needsUpdate=!0,he.repeat.set(Yt/.6,(l-Di)/.6),he.offset.set(Ot/.6,0);let Vn=new Ct(new xe(Yt,l-Di),new Gt({map:he,roughness:.9}));Vn.position.set(Se,Di+(l-Di)/2,0),Vn.receiveShadow=!0,nt.add(Vn);let Gn=c.clone();Gn.needsUpdate=!0,Gn.repeat.set(Yt/1.2,1);let Le=new Ct(new $t(Yt,Di,.03),new Gt({map:Gn,roughness:.5}));Le.position.set(Se,Di/2,.015),Le.receiveShadow=!0,nt.add(Le);for(let[hi,Ui,Wn]of[[.06,.12,.045],[Di,.05,.06]]){let bn=new Ct(new $t(Yt,Ui,Wn),d);bn.position.set(Se,hi,Wn/2),nt.add(bn)}}let Dt=new Ct(new $t(N,.18,.08),d);if(Dt.position.set(0,l-.09,.04),nt.add(Dt),O){let Ot=l-O.h,Qt=h.clone();Qt.needsUpdate=!0,Qt.repeat.set(O.w/.6,Ot/.6);let Yt=new Ct(new xe(O.w,Ot),new Gt({map:Qt,roughness:.9}));Yt.position.set(O.at,O.h+Ot/2,0),nt.add(Yt);let Se=[[O.at-O.w/2-.04,O.h/2,.08,O.h+.08],[O.at+O.w/2+.04,O.h/2,.08,O.h+.08],[O.at,O.h+.04,O.w+.16,.08]];for(let[Xn,qn,rr,or]of Se)_(new $t(rr,or,.1),u,Xn,qn,.03,nt);for(let Xn of[-1,1])_(new $t(.02,O.h,.2),u,O.at+Xn*O.w/2,O.h/2,-.1,nt);_(new $t(O.w,.02,.2),u,O.at,O.h,-.1,nt);let he=new de;he.position.set(O.at+O.w/2-.02,0,.02),he.rotation.y=On.degToRad(72),nt.add(he),p=he;let Vn=new Gt({color:5910294,roughness:.45});_(new $t(O.w-.04,O.h-.02,.045),Vn,-(O.w-.04)/2,O.h/2,0,he);for(let Xn of[.55,1.5])for(let qn of[-1,1])_(new $t(O.w-.26,.7,.012),u,-(O.w-.04)/2,Xn,qn*.026,he);let Gn=_(new sn(.03,16,12),f,-(O.w-.04)+.08,1,.05,he);Gn.castShadow=!1;let Le=new de;Le.position.set(O.at,0,-1.2),nt.add(Le);let hi=new Gt({color:7035461,roughness:.9,side:Te});_(new $t(2.4,2.6,2.2),hi,0,1.3,-.05,Le);let Ui=_(new xe(2.4,2.2),new Gt({color:3877404,roughness:.8}),0,.005,-.05,Le);Ui.rotation.x=-Math.PI/2;let Wn=new ai(16767136,n?2.2:1.4,4,1.6);Wn.position.set(0,2.2,-.4),Le.add(Wn);let bn=_(new sn(.05,12,8),new Ae({color:16773328}),0,2.45,-.4,Le);bn.castShadow=!1}s.add(nt)}let F=new Gt({color:1905420,roughness:.9}),C=new Ct(new xe(2*i,2*r),F);C.rotation.x=Math.PI/2,C.position.y=a,C.layers.set(2),s.add(C);let U=new Gt({color:3809039,roughness:.6});for(let ct=-i+1.25;ct<i-.1;ct+=1.25){let T=new Ct(new $t(.16,.18,2*r),U);T.position.set(ct,a-.09,0),T.layers.set(2),s.add(T)}let L=new Gt({color:16769712,emissive:16760944,emissiveIntensity:1.2,roughness:.6}),S=o+2.35,M=[[-2.6,-r,0],[2.6,-r,0],[-2.8,r,Math.PI],[2.8,r,Math.PI],[-i,0,Math.PI/2],[i,-1.5,-Math.PI/2]];s.add(new po(16770760,n?.22:.4));for(let[ct,T,B]of M){let N=new de;N.position.set(ct,S,T),N.rotation.y=B;let O=new Ct(new be(.05,.05,.02,20),f);O.rotation.x=Math.PI/2,O.position.z=.01,N.add(O);let nt=new Ct(new be(.008,.008,.14,8),f);nt.rotation.x=Math.PI/2,nt.position.z=.08,N.add(nt);let mt=new Ct(new be(.05,.085,.13,24,1,!0),L);if(mt.position.set(0,.05,.16),N.add(mt),s.add(N),n){let Dt=new ai(16758886,5,4.5,1.5);Dt.position.set(ct+Math.sin(B)*.3,S+.05,T+Math.cos(B)*.3),s.add(Dt)}}let P={x:-2.6,y:o+1.5,w:1.6,h:1.1},J=_(new xe(P.w,P.h),new Gt({map:iu(),roughness:.85}),P.x,P.y,-r+.045);J.castShadow=!1;for(let[ct,T,B,N]of[[P.x,P.y+P.h/2+.03,P.w+.12,.06],[P.x,P.y-P.h/2-.03,P.w+.12,.06],[P.x-P.w/2-.03,P.y,.06,P.h],[P.x+P.w/2+.03,P.y,.06,P.h]])_(new $t(B,N,.06),u,ct,T,-r+.04);_(new $t(P.w,P.h,.02),u,P.x,P.y,-r+.02);let W={x:2.6,base:o},q=.21,it=Ze.length*q+.2;_(new $t(it,1.85,.03),u,W.x,o+.15+.925,-r+.05),_(new $t(it+.05,.06,.16),d,W.x,o+.12,-r+.11),_(new $t(it+.05,.05,.12),d,W.x,o+1.35,-r+.1);let $=[];Ze.forEach((ct,T)=>{let B=W.x+(T-(Ze.length-1)/2)*q,N=new de;N.position.set(B,o+.16+ct.len,-r+.12),N.rotation.x=Math.PI,N.add(Ao(ct,n)),s.add(N);let O=new Ct(new xe(.18,.068),new Gt({map:g_(String(T+1),ct.category),roughness:.4,metalness:.3}));O.position.set(B,o+.3,-r+.07),s.add(O),$.push({group:N,baseZ:-r+.12,spec:ct})});let ft=new Ct(new gs(.035,.06,32),new Ae({color:16765503,transparent:!0,opacity:.9}));ft.rotation.x=-Math.PI/2,s.add(ft);let Z=ct=>{for(let T of $){let B=T.spec.id===ct;T.group.position.z=T.baseZ+(B?.12:0),B&&ft.position.set(T.group.position.x,o+.005,T.group.position.z)}},dt={x:-.78,y:o+1.42,w:1.5};_(new $t(dt.w,.04,.26),u,dt.x,dt.y,-r+.13);for(let ct of[-1,1]){let T=_(new $t(.03,.16,.2),u,dt.x+ct*(dt.w/2-.03),dt.y-.1,-r+.11);T.castShadow=!1}let vt=(()=>{let ct=document.createElement("canvas");ct.width=1024,ct.height=128;let T=ct.getContext("2d");T.fillStyle="#123524",T.fillRect(0,0,1024,128),T.strokeStyle="#c9a24a",T.lineWidth=6,T.strokeRect(8,8,1008,112),T.fillStyle="#f2d48a",T.font="bold 60px Georgia, serif",T.textAlign="center",T.textBaseline="middle",T.fillText("NAJLEP\u0160\xCD HR\xC1\u010CI",512,68);let B=new fe(ct);return B.colorSpace=ee,B})();_(new xe(.9,.11),new Gt({map:vt,roughness:.6}),dt.x,dt.y+.62,-r+.035).castShadow=!1;let yt=[new Gt({color:15777856,metalness:.55,roughness:.28,emissive:3811328,emissiveIntensity:.6}),new Gt({color:14672872,metalness:.55,roughness:.25,emissive:2763824,emissiveIntensity:.6}),new Gt({color:13140042,metalness:.55,roughness:.3,emissive:3020294,emissiveIntensity:.6})],kt=ct=>[[0,0],[.07,0],[.07,.025],[.035,.035],[.016,.05],[.014,.12],[.022,.135],[.06,.16],[.085,.22],[.095,.29],[.09,.3],[.08,.235],[.055,.17],[0,.155]].map(([T,B])=>new gt(T*ct,B*ct)),Pt=[];[[1,-.5,.92],[0,0,1.12],[2,.5,.82]].forEach(([ct,T,B])=>{let N=dt.x+T*(dt.w*.62),O=-r+.14,nt=new de;nt.position.set(N,dt.y+.02,O);let mt=new Ct(new ro(kt(B),40),yt[ct]);mt.castShadow=!0,nt.add(mt);for(let Se of[-1,1]){let he=new Ct(new _s(.035*B,.006*B,8,20,Math.PI),yt[ct]);he.position.set(Se*.088*B,.24*B,0),he.rotation.z=Se>0?-Math.PI/2:Math.PI/2,nt.add(he)}let Dt=new Ct(new $t(.17*B,.05,.17*B),u);Dt.position.y=-0,nt.position.y+=.05,Dt.position.y=-.025,nt.add(Dt),s.add(nt);let Ot=document.createElement("canvas");Ot.width=512,Ot.height=160;let Qt=new fe(Ot);Qt.colorSpace=ee,Qt.anisotropy=8;let Yt=new Ct(new xe(.4,.125),new Gt({map:Qt,roughness:.45,metalness:.2}));Yt.position.set(N,dt.y-.11,-r+.03),Yt.castShadow=!1,s.add(Yt),Pt[ct]={c:Ot,tex:Qt}});let Y=new ai(16769712,n?1.6:1.2,2.2,1.6);Y.position.set(dt.x,dt.y+.75,-r+.55),s.add(Y);let rt={x:.72,y:o+1.68,w:.95,h:1},_t=document.createElement("canvas");_t.width=760,_t.height=800;let k=new fe(_t);k.colorSpace=ee,k.anisotropy=8,_(new xe(rt.w,rt.h),new Gt({map:k,roughness:.85}),rt.x,rt.y,-r+.045).castShadow=!1,_(new $t(rt.w+.08,rt.h+.08,.03),u,rt.x,rt.y,-r+.02);let pt=ct=>{let T=Math.max(0,Math.round(ct||0));return`${Math.floor(T/60)}:${String(T%60).padStart(2,"0")}`},ht=(ct,T,B)=>{let N=String(T||"");for(;N.length>1&&ct.measureText(N).width>B;)N=N.slice(0,-1);return N===String(T||"")?N:N.slice(0,-1)+"\u2026"},z=ct=>{let T=ct||[],B=["#e8b830","#c9cdd3","#b8733a"];for(let nt=0;nt<3;nt++){let{c:mt,tex:Dt}=Pt[nt],Ot=mt.getContext("2d"),Qt=T[nt];Ot.fillStyle="#20150c",Ot.fillRect(0,0,512,160),Ot.strokeStyle=B[nt],Ot.lineWidth=8,Ot.strokeRect(6,6,500,148),Ot.textAlign="center",Ot.fillStyle=B[nt],Ot.font="bold 54px Georgia, serif",Ot.fillText(Qt?ht(Ot,`${nt+1}. ${Qt.user.name}`,480):`${nt+1}. miesto`,256,66),Ot.fillStyle="#f4ecd8",Ot.font="bold 42px Arial, Helvetica, sans-serif",Ot.fillText(Qt?`${Qt.points} b.  za ${pt(Qt.seconds)}`:"vo\u013En\xE9",256,128),Dt.needsUpdate=!0}let N=_t.getContext("2d"),O=_t.width;N.fillStyle="#a5754a",N.fillRect(0,0,O,_t.height),N.fillStyle="#fbf7ec",N.fillRect(30,30,O-60,_t.height-60),N.fillStyle="#c0392b",N.beginPath(),N.arc(O/2,52,12,0,Math.PI*2),N.fill(),N.fillStyle="#123524",N.textAlign="center",N.font="bold 46px Georgia, serif",N.fillText("Rebr\xED\u010Dek 4. a\u017E 10.",O/2,120),N.fillStyle="#c9a24a",N.fillRect(60,142,O-120,4);for(let nt=3;nt<10;nt++){let mt=T[nt],Dt=210+(nt-3)*80;N.textAlign="left",N.fillStyle="#123524",N.font="bold 36px Arial, Helvetica, sans-serif",N.fillText(`${nt+1}.`,64,Dt),N.fillStyle=mt?"#222":"#999",N.font="34px Arial, Helvetica, sans-serif",N.fillText(mt?ht(N,mt.user.name,330):"...",130,Dt),N.textAlign="right",N.fillText(mt?`${mt.points} b.  ${pt(mt.seconds)}`:"",O-64,Dt),N.fillStyle="rgba(201,162,74,0.35)",N.fillRect(64,Dt+22,O-128,2)}k.needsUpdate=!0};z([]);let ut={y:o+1.62,w:1.5,h:.84},G=document.createElement("canvas");G.width=1024,G.height=574;let tt=new fe(G);tt.colorSpace=ee,tt.anisotropy=8,_(new $t(.05,ut.h+.12,ut.w+.12),u,-i+.03,ut.y,0);let A=_(new xe(ut.w,ut.h),new Gt({map:tt,roughness:.7,emissive:16777215,emissiveMap:tt,emissiveIntensity:.12}),-i+.064,ut.y,0);A.rotation.y=Math.PI/2,A.castShadow=!1;let Mt=(ct,T)=>{let B=G.getContext("2d"),N=G.width,O=G.height;B.fillStyle="#123524",B.fillRect(0,0,N,O),B.strokeStyle="#c9a24a",B.lineWidth=8,B.strokeRect(14,14,N-28,O-28),B.fillStyle="#f2d48a",B.textAlign="center",B.font="bold 62px Georgia, serif",B.fillText("MY SNOOKER",N/2,92),B.font="34px Georgia, serif",B.fillStyle="#e8e2cf",B.fillText(T&&T.mode||"Tr\xE9ning",N/2,140);let nt=T&&T.match,mt=T&&T.rows?T.rows:nt?[[nt.names[0]+(nt.turn===0?"  \u25CF":""),nt.scores[0]],[nt.names[1]+(nt.turn===1?"  \u25CF":""),nt.scores[1]],["S\xE9ria",nt.brk],["Hr\xE1 sa na",nt.on],["Zost\xE1va na stole",nt.left]]:[["\xDAdery",ct.shots],["Spadnut\xE9 gule",ct.potted],["Body",ct.points],["S\xE9ria",ct.run],["Najlep\u0161ia s\xE9ria",ct.best]];B.font="40px Arial, Helvetica, sans-serif",mt.forEach(([Dt,Ot],Qt)=>{let Yt=210+Qt*62;B.textAlign="left",B.fillStyle="#e8e2cf",B.fillText(Dt,90,Yt),B.textAlign="right",B.fillStyle="#ffffff",B.font="bold 44px Arial, Helvetica, sans-serif",B.fillText(String(Ot),N-90,Yt),B.font="40px Arial, Helvetica, sans-serif",B.fillStyle="rgba(201,162,74,0.35)",B.fillRect(90,Yt+16,N-180,2)}),T&&(B.textAlign="center",B.font="30px Arial, Helvetica, sans-serif",B.fillStyle="#f2d48a",B.fillText(`${T.cue}   |   Krieda: ${T.chalk>0?T.chalk+" \xFAdery":"\u017Eiadna (F3)"}`,N/2,O-40)),tt.needsUpdate=!0};Mt({shots:0,potted:0,points:0,run:0,best:0},null),_(new $t(.45,.8,1.7),u,-i+.25,o+.4,0),_(new $t(.47,.03,1.74),d,-i+.25,o+.815,0);for(let ct of[-.42,.42])_(new $t(.012,.5,.75),d,-i+.48,o+.42,ct),_(new sn(.015,10,8),f,-i+.49,o+.55,ct*.2);let st=-i+1.1,Rt=r-1.1;_(new be(.32,.32,.04,32),u,st,o+1.05,Rt),_(new be(.03,.03,1.03,12),f,st,o+.53,Rt),_(new be(.22,.25,.03,24),f,st,o+.015,Rt);for(let ct of[.6,2.3]){let T=st+Math.cos(ct)*.55,B=Rt-Math.sin(ct)*.55;_(new be(.18,.18,.08,24),g,T,o+.76,B),_(new be(.022,.022,.72,10),f,T,o+.36,B),_(new _s(.15,.01,8,24),f,T,o+.3,B).rotation.x=Math.PI/2,_(new be(.17,.2,.02,20),f,T,o+.01,B)}let xt=(ct,T,B)=>{let N=new de;N.position.set(ct,o,T),N.rotation.y=B,_(new $t(.8,.42,.8),g,0,.21,0,N),_(new $t(.8,.5,.18),g,0,.66,-.31,N);for(let O of[-1,1])_(new $t(.16,.24,.8),g,O*.4,.54,0,N);_(new $t(.56,.08,.6),new Gt({color:7219740,roughness:.6}),0,.46,.04,N),s.add(N)};xt(-1,r-.7,Math.PI),xt(1,r-.7,Math.PI);let Lt={x:0,z:r-1.45,top:o+.45};_(new $t(1.2,.04,.62),u,Lt.x,Lt.top-.02,Lt.z),_(new $t(1.1,.06,.52),d,Lt.x,Lt.top-.07,Lt.z);for(let ct of[-1,1])for(let T of[-1,1])_(new $t(.05,Lt.top-o-.04,.05),u,Lt.x+ct*.54,o+(Lt.top-o-.04)/2,Lt.z+T*.25);let wt=ru(e.news,e.site),w={x:Lt.x+.12,z:Lt.z+.02,w:.62,h:.44},x=new Ct(new xe(w.w,w.h),new Gt({map:wt.texture,roughness:.92}));x.rotation.order="YXZ",x.rotation.set(-Math.PI/2,.12,0),x.position.set(w.x,Lt.top+.002,w.z),x.receiveShadow=!0,s.add(x);let X=ou(e.rss),et={x:Lt.x-.36,z:Lt.z-.02,w:.3,h:.41},I=new Ct(new xe(et.w,et.h),new Gt({map:X.texture,roughness:.35,metalness:.05}));I.rotation.order="YXZ",I.rotation.set(-Math.PI/2,-.18,0),I.position.set(et.x,Lt.top+.003,et.z),I.receiveShadow=!0,s.add(I);for(let[ct,T]of[[-2.8,0],[2.8,1]]){let B=_(new xe(.86,.62),new Gt({map:m_(T),roughness:.7}),ct,o+1.75,r-.046);B.rotation.y=Math.PI,B.castShadow=!1,_(new $t(1,.76,.04),new Gt({color:9071146,metalness:.6,roughness:.4}),ct,o+1.75,r-.02)}let D=new de;D.position.set(i-.02,o+2,.35),D.rotation.y=-Math.PI/2,s.add(D);{let T=document.createElement("canvas");T.width=T.height=512;let B=T.getContext("2d");B.fillStyle="#f4eedc",B.fillRect(0,0,512,512),B.translate(256,256),B.strokeStyle="#2a2218";for(let Dt=0;Dt<60;Dt++){let Ot=Dt/60*Math.PI*2,Qt=Dt%5===0;B.lineWidth=Qt?9:3,B.beginPath(),B.moveTo(Math.sin(Ot)*(Qt?200:214),-Math.cos(Ot)*(Qt?200:214)),B.lineTo(Math.sin(Ot)*236,-Math.cos(Ot)*236),B.stroke()}B.fillStyle="#2a2218",B.font="bold 56px Georgia, serif",B.textAlign="center",B.textBaseline="middle";for(let Dt=1;Dt<=12;Dt++){let Ot=Dt/12*Math.PI*2;B.fillText(String(Dt),Math.sin(Ot)*160,-Math.cos(Ot)*160+3)}B.font="22px Georgia, serif",B.fillText("MY SNOOKER",0,78);let N=new fe(T);N.colorSpace=ee,N.anisotropy=8;let O=new Ct(new oi(.2,64),new Gt({map:N,roughness:.6}));O.position.z=.012,D.add(O);let nt=new Ct(new _s(.2+.012,.018,12,64),u);nt.position.z=.014,D.add(nt);let mt=new Ct(new be(.2+.02,.2+.02,.02,48),u);mt.rotation.x=Math.PI/2,D.add(mt)}let at=new Gt({color:1709328,roughness:.5,metalness:.3}),Q=(ct,T,B,N)=>{let O=new de;O.position.z=B;let nt=new Ct(new $t(T,ct,.004),N);return nt.position.y=ct/2-ct*.15,O.add(nt),D.add(O),O},lt=Q(.11,.012,.018,at),Et=Q(.16,.008,.022,at),ot=Q(.17,.003,.026,new Gt({color:11735583,roughness:.5})),bt=new Ct(new be(.009,.009,.012,16),f);bt.rotation.x=Math.PI/2,bt.position.z=.028,D.add(bt);let Ut=11*3600+30*60,Tt=ct=>{let T=Ut+ct,B=T%60,N=T/60%60,O=T/3600%12;ot.rotation.z=-(Math.floor(B)/60)*Math.PI*2,Et.rotation.z=-(N/60)*Math.PI*2,lt.rotation.z=-(O/12)*Math.PI*2};Tt(0);let At=i-.5,qt=-r+.5;_(new be(.2,.15,.4,20),new Gt({color:8010530,roughness:.7}),At,o+.2,qt);let Xt=new Gt({color:3107631,roughness:.7});for(let ct=0;ct<14;ct++){let T=ct/14*Math.PI*2,B=.08+ct%3*.06,N=_(new sn(.11+ct%2*.04,10,8),Xt,At+Math.cos(T)*B,o+.55+ct%4*.18,qt+Math.sin(T)*B);N.scale.set(1,1.6,.5),N.rotation.y=T}return{board:{pos:new R(P.x,P.y,-r+1.62),look:new R(P.x,P.y,-r)},rack:{pos:new R(W.x,o+1.15,-r+3.3),look:new R(W.x,o+.6,-r)},score:{pos:new R(-i+1.55,ut.y,0),look:new R(-i,ut.y,0)},trophies:{pos:new R(-.17,o+1.62,-r+2.05),look:new R(-.17,o+1.6,-r)},chair:{pos:new R(1,o+1.12,r-.8),look:new R(-.2,o+.62,.3)},news:{pos:new R(w.x+.11,Lt.top+.6,w.z+.27),look:new R(w.x+.1,Lt.top,w.z-.01)},newsItems:wt.items,magazine:{pos:new R(et.x+.02,Lt.top+.5,et.z+.2),look:new R(et.x,Lt.top,et.z-.01)},rssItems:X.items,selectCue:Z,updateScore:Mt,setClock:Tt,setTrophies:z,trophies:{pos:new R(-.05,o+1.6,-r+2.3),look:new R(-.05,o+1.62,-r)},toggleDoor(){return v.open=!v.open,v.open},update(ct){if(!p)return!1;let T=v.open?E:0,B=v.angle,N=ct*1.4;return v.angle=B+Math.max(-N,Math.min(N,T-B)),p.rotation.y=v.angle,B>0&&v.angle===0}}}function sc(s,t=.15){return s.x=Math.max(-Fe.x+t,Math.min(Fe.x-t,s.x)),s.z=Math.max(-Fe.z+t,Math.min(Fe.z-t,s.z)),s.y=Math.max(Fe.floor+.1,Math.min(Fe.ceil-.25,s.y)),s}var rc=.062,__=.052,je=.05,oc=.12,x_=.037;function y_(s){let e=Math.round(2048*(1.778+2*je)/(3.569+2*je)),n=document.createElement("canvas");n.width=2048,n.height=e;let i=n.getContext("2d");i.fillStyle="#1d6b34",i.fillRect(0,0,2048,e);let r=i.getImageData(0,0,2048,e);for(let d=0;d<r.data.length;d+=4){let u=(Math.random()-.5)*10;r.data[d]+=u,r.data[d+1]+=u*1.4,r.data[d+2]+=u}i.putImageData(r,0,0);let o=i.createRadialGradient(2048/2,e/2,e*.1,2048/2,e/2,2048*.6);o.addColorStop(0,"rgba(255,255,255,0.06)"),o.addColorStop(1,"rgba(0,0,0,0.18)"),i.fillStyle=o,i.fillRect(0,0,2048,e);let a=2048/(3.569+2*je),l=d=>(d+3.569/2+je)*a,c=d=>(d+1.778/2+je)*a;i.strokeStyle="rgba(255,255,255,0.75)",i.lineWidth=Math.max(2,a*.003),i.beginPath(),i.moveTo(l(Pe),c(-1.778/2)),i.lineTo(l(Pe),c(1.778/2)),i.stroke(),i.beginPath(),i.arc(l(Pe),c(0),li*a,Math.PI/2,3*Math.PI/2),i.stroke(),i.fillStyle="rgba(255,255,255,0.8)";for(let d of Object.keys(on))i.beginPath(),i.arc(l(on[d].x),c(on[d].z),a*.005,0,Math.PI*2),i.fill();let h=new fe(n);return h.colorSpace=ee,h.anisotropy=s,h}function v_(){let s=document.createElement("canvas");s.width=512,s.height=64;let t=s.getContext("2d");t.fillStyle="#5a2e14",t.fillRect(0,0,512,64);for(let n=0;n<70;n++){t.strokeStyle=`rgba(${30+Math.random()*40},${12+Math.random()*15},4,${.15+Math.random()*.25})`,t.lineWidth=1+Math.random()*2,t.beginPath();let i=Math.random()*64;t.moveTo(0,i);for(let r=0;r<=512;r+=32)t.lineTo(r,i+Math.sin(r/60+n)*3);t.stroke()}let e=new fe(s);return e.colorSpace=ee,e.wrapS=e.wrapT=Dn,e.repeat.set(6,1),e}function M_(){let t=document.createElement("canvas");t.width=t.height=1024;let e=t.getContext("2d"),n=25,i=1024/n,r=7,o=()=>(r=r*16807%2147483647)/2147483647;for(let l=0;l<n;l++){let c=-o()*1024*.4;for(;c<1024;){let h=1024*(.3+o()*.25),d=70+o()*40;e.fillStyle=`rgb(${d+40},${d*.62+12},${d*.36})`,e.fillRect(c,l*i,h,i);for(let u=0;u<9;u++){e.strokeStyle=`rgba(${40+o()*30},${20+o()*12},6,${.12+o()*.18})`,e.lineWidth=.6+o()*1.6,e.beginPath();let f=l*i+o()*i;e.moveTo(c,f);for(let g=0;g<=8;g++)e.lineTo(c+h*g/8,f+Math.sin(g*.9+u)*i*.12);e.stroke()}e.fillStyle="rgba(15,8,3,0.85)",e.fillRect(c+h-1.5,l*i,1.5,i),c+=h}e.fillStyle="rgba(15,8,3,0.9)",e.fillRect(0,l*i,1024,1.5)}let a=new fe(t);return a.colorSpace=ee,a.wrapS=a.wrapT=Dn,a}function lu(s){let t=new de,e=s.capabilities.getMaxAnisotropy(),n=new Ct(new xe(3.569+2*je,1.778+2*je),new Gt({map:y_(e),roughness:.92,metalness:0}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n.name="cloth",t.add(n);let i=3.569/2,r=1.778/2,o=x_+.012,a=i+je+oc,l=r+je+oc,c=new Gt({color:1531951,roughness:.88,side:Qe}),h=(z,ut,G,tt)=>({x:z+G*je,z:ut+tt*je}),d=[];for(let z of[-1,1])for(let ut of[-1,1]){let G={x:ut*(i-rc),z:z*r},tt={x:ut*__,z:z*r};d.push({long:!0,a:G,b:tt,ab:h(G.x,G.z,ut*1,z*1),bb:h(tt.x,tt.z,-ut*.18,z*1)})}for(let z of[-1,1]){let ut={x:z*i,z:-r+rc},G={x:z*i,z:r-rc};d.push({long:!1,a:ut,b:G,ab:h(ut.x,ut.z,z*1,-1),bb:h(G.x,G.z,z*1,1)})}let u=.016,f=[[.012,0],[.006,.016],[.001,.029],[0,.034],[.003,.0395],[.01,.0435],[.024,.0465],[.045,.048],[.075,.048]];for(let z of d){let ut=(Q,lt,Et)=>{let ot=Math.hypot(lt.x-Q.x,lt.z-Q.z)||1;return{x:Q.x+(lt.x-Q.x)/ot*Et,z:Q.z+(lt.z-Q.z)/ot*Et}},G=ut(z.a,z.ab,u),tt=ut(z.a,z.b,u),A=ut(z.b,z.a,u),Mt=ut(z.b,z.bb,u),st=[],Rt=(Q,lt,Et,ot)=>{for(let bt=1;bt<=ot;bt++){let Ut=bt/ot,Tt=1-Ut;st.push({x:Tt*Tt*Q.x+2*Tt*Ut*lt.x+Ut*Ut*Et.x,z:Tt*Tt*Q.z+2*Tt*Ut*lt.z+Ut*Ut*Et.z})}};st.push({...z.ab},{...ut(z.ab,G,Math.hypot(G.x-z.ab.x,G.z-z.ab.z)*.5)},{...G}),Rt(G,z.a,tt,10);let xt=24;for(let Q=1;Q<xt;Q++)st.push({x:tt.x+(A.x-tt.x)*Q/xt,z:tt.z+(A.z-tt.z)*Q/xt});st.push({...A}),Rt(A,z.b,Mt,10),st.push({...ut(Mt,z.bb,Math.hypot(z.bb.x-Mt.x,z.bb.z-Mt.z)*.5)},{...z.bb});let Lt=z.b.x-z.a.x,wt=z.b.z-z.a.z,w={x:(z.a.x+z.b.x)/2,z:(z.a.z+z.b.z)/2},x=-wt*w.x+Lt*w.z>0?1:-1,X=[];for(let Q=0;Q<st.length;Q++){let lt=st[Math.max(0,Q-1)],Et=st[Math.min(st.length-1,Q+1)],ot=Et.x-lt.x,bt=Et.z-lt.z,Ut=Math.hypot(ot,bt)||1;ot/=Ut,bt/=Ut;let Tt=-bt*x,At=ot*x;for(let[qt,Xt]of f)X.push(st[Q].x+Tt*qt,Xt,st[Q].z+At*qt)}let et=f.length,I=[];for(let Q=0;Q<st.length-1;Q++)for(let lt=0;lt<et-1;lt++){let Et=Q*et+lt,ot=(Q+1)*et+lt;x>0?I.push(Et,ot,Et+1,ot,ot+1,Et+1):I.push(Et,Et+1,ot,ot,Et+1,ot+1)}let D=new Me;D.setAttribute("position",new ne(X,3)),D.setIndex(I),D.computeVertexNormals();let at=new Ct(D,c);at.castShadow=!0,at.receiveShadow=!0,t.add(at)}let g=Li.map(z=>({x:z.x,z:z.z,r:z.corner?.088:.078,corner:z.corner})),_=i+je,m=r+je,p=[],E=(z,ut,G,tt)=>{let A=[];for(let Mt=0;Mt<=tt;Mt++){let st=ut+(G-ut)*Mt/tt;A.push({x:z.x+Math.cos(st)*z.r,z:z.z+Math.sin(st)*z.r})}return A},v=[],y=z=>{for(;z<0;)z+=Math.PI*2;return z},F=g.find(z=>z.corner&&z.x>0&&z.z>0),C=g.find(z=>z.corner&&z.x<0&&z.z>0),U=g.find(z=>z.corner&&z.x<0&&z.z<0),L=g.find(z=>z.corner&&z.x>0&&z.z<0),S=g.find(z=>!z.corner&&z.z>0),M=g.find(z=>!z.corner&&z.z<0),P=(z,ut,G)=>{let tt=G*m-z.z,A=z.x-ut*Math.sqrt(Math.max(0,z.r*z.r-tt*tt)),Mt=ut*_-z.x,st=z.z-G*Math.sqrt(Math.max(0,z.r*z.r-Mt*Mt)),Rt=Math.atan2(G*m-z.z,A-z.x),xt=Math.atan2(st-z.z,ut*_-z.x);return{aZ:Rt,aX:xt}},J=(z,ut)=>{let G=ut*m-z.z,tt=Math.sqrt(Math.max(0,z.r*z.r-G*G));return{aRight:Math.atan2(G,tt),aLeft:Math.atan2(G,-tt)}},W=(z,ut,G,tt)=>{let A=ut,Mt=G;if(tt)for(;Mt<A;)Mt+=Math.PI*2;else for(;Mt>A;)Mt-=Math.PI*2;let st=E(z,A,Mt,24);p.push(...st),v.push(st)};{let z=[];for(let[ut,G,tt]of[[F,1,1],[C,-1,1],[U,-1,-1],[L,1,-1]]){let A=P(ut,G,tt),Mt=G*tt>0?A.aX:A.aZ,st=G*tt>0?A.aZ:A.aX;z.push({c:ut,a0:Mt,a1:st})}for(let[ut,G]of[[S,1],[M,-1]]){let tt=J(ut,G);z.push({c:ut,a0:G>0?tt.aRight:tt.aLeft,a1:G>0?tt.aLeft:tt.aRight})}z.sort((ut,G)=>y(Math.atan2(ut.c.z,ut.c.x))-y(Math.atan2(G.c.z,G.c.x)));for(let ut of z)W(ut.c,ut.a0,ut.a1,!0)}let q=.07,it=new ms;it.moveTo(-a+q,-l),it.lineTo(a-q,-l),it.quadraticCurveTo(a,-l,a,-l+q),it.lineTo(a,l-q),it.quadraticCurveTo(a,l,a-q,l),it.lineTo(-a+q,l),it.quadraticCurveTo(-a,l,-a,l-q),it.lineTo(-a,-l+q),it.quadraticCurveTo(-a,-l,-a+q,-l);let $=new ps;p.forEach((z,ut)=>ut?$.lineTo(z.x,z.z):$.moveTo(z.x,z.z)),$.closePath(),it.holes.push($);let ft=new Gt({map:v_(),roughness:.4,metalness:.05}),Z=.008,dt=new js(it,{depth:o+.02-2*Z,bevelEnabled:!0,bevelThickness:Z,bevelSize:Z*.8,bevelSegments:4,curveSegments:16}),vt=new Ct(dt,ft);vt.rotation.x=Math.PI/2,vt.position.y=o-Z,vt.castShadow=!0,vt.receiveShadow=!0,t.add(vt);let yt=new ms,kt=a-.03,Pt=l-.03,Y=.05;yt.moveTo(-kt+Y,-Pt),yt.lineTo(kt-Y,-Pt),yt.quadraticCurveTo(kt,-Pt,kt,-Pt+Y),yt.lineTo(kt,Pt-Y),yt.quadraticCurveTo(kt,Pt,kt-Y,Pt),yt.lineTo(-kt+Y,Pt),yt.quadraticCurveTo(-kt,Pt,-kt,Pt-Y),yt.lineTo(-kt,-Pt+Y),yt.quadraticCurveTo(-kt,-Pt,-kt+Y,-Pt);let rt=new Ct(new js(yt,{depth:.26,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelSegments:3}),ft);rt.rotation.x=Math.PI/2,rt.position.y=-.03,rt.castShadow=!0,t.add(rt);let _t=new be(.075,.06,.56,24);for(let z of[-1,-.33,.33,1])for(let ut of[-1,1]){let G=new Ct(_t,ft);G.position.set(z*(i-.1),-.58,ut*(r-.06)),G.castShadow=!0,t.add(G)}let k=new Ae({color:328965}),pt=new Gt({color:1842204,roughness:.55,metalness:.15});for(let z of g){let ut=new Ct(new be(z.r,z.r*.8,.16,40,1,!0),k);ut.position.set(z.x,-.08,z.z),t.add(ut);let G=new Ct(new oi(z.r,40),k);G.rotation.x=-Math.PI/2,G.position.set(z.x,-.003,z.z),t.add(G);let tt=Li.find(Mt=>Mt.x===z.x&&Mt.z===z.z),A=new Ct(new oi(tt.corner?.072:.066,40),k);A.rotation.x=-Math.PI/2,A.position.set(z.x,8e-4,z.z),t.add(A)}for(let z of v){let ut=new qs(z.map(tt=>new R(tt.x,o-.004,tt.z))),G=new Ct(new ao(ut,48,.011,10,!1),pt);G.castShadow=!0,t.add(G)}let ht=new Gt({color:14271370,metalness:.8,roughness:.3});for(let z of[-3,-1,1,3])for(let ut of[-1,1]){let G=new Ct(new oi(.008,12),ht);G.rotation.x=-Math.PI/2,G.position.set(z*3.569/8,o+.0015,ut*(l-oc/2)),t.add(G)}return{group:t,cloth:n,surfaceY:0,ballY:.02625}}function cu(s,t){s.background=new jt(790292);let e=M_();e.repeat.set(2*Fe.x/4,2*Fe.z/4),e.anisotropy=8;let n=new Ct(new xe(2*Fe.x,2*Fe.z),new Gt({map:e,roughness:.72,metalness:0}));n.rotation.x=-Math.PI/2,n.position.y=-.86,n.receiveShadow=!0,s.add(n),s.add(new ho(14674175,3107644,.45));let i=1.62,r=new Gt({color:936486,roughness:.5,metalness:.2,side:Qe}),o=new Ae({color:16773586}),a=new Ae({color:1118481}),l=c=>(c.layers.set(1),s.add(c),c);for(let c of[-1.1,0,1.1]){let h=new uo(16774368,11,6,Math.PI/3.4,.6,1.6);h.position.set(c,i-.05,0),h.target.position.set(c,0,0),h.castShadow=t==="high"&&c===0,h.castShadow&&(h.shadow.mapSize.set(2048,2048),h.shadow.bias=-4e-4,h.shadow.radius=3),s.add(h,h.target),l(new Ct(new $t(.9,.012,.5),r)).position.set(c,i+.04,0);for(let[f,g,_,m]of[[0,1,.9,.01],[0,-1,.9,.01],[1,0,.01,.5],[-1,0,.01,.5]])l(new Ct(new $t(_,.09,m),r)).position.set(c+f*.45,i,g*.25);let u=l(new Ct(new xe(.86,.46),o));u.rotation.x=Math.PI/2,u.position.set(c,i+.03,0);for(let f of[-.35,.35]){let g=i+.046;l(new Ct(new be(.003,.003,Fe.ceil-g,6),a)).position.set(c+f,(g+Fe.ceil)/2,0)}}if(t==="high"){let c=new fo(16777215,.45);c.position.set(.2,3,.15),c.castShadow=!0,c.shadow.mapSize.set(2048,2048);let h=2.1;Object.assign(c.shadow.camera,{left:-h,right:h,top:h,bottom:-h,near:1,far:5}),c.shadow.bias=-3e-4,s.add(c)}}function b_(s,t){let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d"),i="#"+s.toString(16).padStart(6,"0");n.fillStyle=i,n.fillRect(0,0,256,128);let r=t==="white"?"rgba(180,30,40,0.85)":t==="black"?"rgba(255,255,255,0.22)":"rgba(255,255,255,0.35)";n.fillStyle=r;for(let[a,l]of[[64,64],[192,64]])n.beginPath(),n.arc(a,l,t==="white"?7:5,0,Math.PI*2),n.fill();let o=new fe(e);return o.colorSpace=ee,o}function S_(){let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.75)"),e.addColorStop(.45,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new fe(s)}var Ro=class{constructor(t,e,n,i=null){this.scene=t,this.items=[];let r=n==="high"?64:32,o=new sn(.02625,r,Math.round(r*.75)),a={},l=new xe(.02625*2.6,.02625*2.6),c=new Ae({map:S_(),transparent:!0,depthWrite:!1,opacity:.6});for(let f of e){a[f.kind]||(a[f.kind]=new lo({map:b_(vn[f.kind].color,f.kind),roughness:.12,metalness:0,clearcoat:1,clearcoatRoughness:.05,envMap:i,envMapIntensity:.55}));let g=new Ct(o,a[f.kind]),_=new Ct(l,c);_.rotation.x=-Math.PI/2,_.renderOrder=1,t.add(_),g.castShadow=!0,g.receiveShadow=!1,g.userData.ball=f,g.quaternion.setFromEuler(new en(Math.random()*6,Math.random()*6,Math.random()*6)),t.add(g),this.items.push({ball:f,mesh:g,blob:_,drop:0})}let h=new jt(16765503);this.outline=new Ct(new sn(.02625*1.12,32,24),new Ae({color:h,side:Te,transparent:!0,opacity:.9,depthWrite:!1})),this.ring=new Ct(new gs(.02625*1.25,.02625*1.55,48),new Ae({color:h,transparent:!0,opacity:.75,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.outline.visible=this.ring.visible=!1,this.arrow=new de;let d=new Gt({color:16777215,transparent:!0,opacity:.55,depthWrite:!1,roughness:.4}),u=new Ct(new oo(.02625*.38,.02625*1.3,24),d);u.rotation.z=-Math.PI/2,u.position.x=.02625*1.9,this.arrow.add(u),this.arrow.visible=!1,this.arrow.renderOrder=3,this.arrowMat=d,t.add(this.arrow),this.outline.renderOrder=this.ring.renderOrder=2,t.add(this.outline,this.ring),this._hlT=0,this._q=new $e,this._axis=new R}update(t){for(let e of this.items){let n=e.ball,i=e.mesh;if(n.on){e.drop=0,i.visible=!0,i.position.set(n.p.x,.02625,n.p.z),e.blob.visible=!0,e.blob.position.set(n.p.x,6e-4,n.p.z);let r=Math.hypot(n.w.x,n.w.y,n.w.z);r>.001&&n.moving&&(this._axis.set(n.w.x/r,n.w.y/r,n.w.z/r),this._q.setFromAxisAngle(this._axis,r*t),i.quaternion.premultiply(this._q))}else if(n.potted){e.blob.visible=!1,e.drop=Math.min(1,e.drop+t*3);let r=e.drop;i.position.x+=(n.potted.x-i.position.x)*Math.min(1,t*12),i.position.z+=(n.potted.z-i.position.z)*Math.min(1,t*12),i.position.y=.02625-r*r*.12,i.visible=r<1}else i.visible=!1,e.blob.visible=!1}}highlight(t,e,n=null){let i=!!(t&&t.on);if(this.outline.visible=this.ring.visible=i,this.arrow.visible=i&&!!n,!i)return;if(n){let o=Math.atan2(t.p.z-n.z,t.p.x-n.x);this.arrow.position.set(t.p.x+Math.cos(o)*.02625*.6,.02625,t.p.z+Math.sin(o)*.02625*.6),this.arrow.rotation.set(0,-o,0),this.arrowMat.color.setHex(t.kind==="black"?5592405:vn[t.kind].color)}this._hlT+=e;let r=.5+.5*Math.sin(this._hlT*5);this.outline.position.set(t.p.x,.02625,t.p.z),this.ring.position.set(t.p.x,.0012,t.p.z),this.outline.material.opacity=.55+.35*r,this.ring.material.opacity=.45+.4*r}meshOf(t){return this.items.find(e=>e.ball===t)?.mesh||null}};var Co=On.degToRad(4),Po=class{constructor(t,e){this.pivot=new de,t.add(this.pivot),this.setSpec(e)}setSpec(t){this.group&&(this.pivot.remove(this.group),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})),this.spec=t,this.group=Ao(t),this.pivot.add(this.group)}place(t,e,n,i,r,o){if(this.pivot.visible=o,!o)return;let a=Math.cos(e),l=Math.sin(e),c=-l,h=a,d=.012+n*.28,u=t.p.x-a*(.02625+d)+c*i*.5*.02625,f=t.p.z-l*(.02625+d)+h*i*.5*.02625,g=.02625+r*.5*.02625+d*Math.tan(Co);this.pivot.position.set(u,g,f);let _=new R(-a*Math.cos(Co),Math.sin(Co),-l*Math.cos(Co));this.pivot.quaternion.setFromUnitVectors(new R(0,1,0),_)}},Io=class{constructor(t){let e=(n,i)=>new Ws({color:n,transparent:!0,opacity:i,depthWrite:!1});this.line=new fs(new Me().setFromPoints([new R,new R]),e(16777215,.55)),this.objLine=new fs(new Me().setFromPoints([new R,new R]),e(16769674,.8)),this.cueLine=new fs(new Me().setFromPoints([new R,new R]),e(10474495,.55)),this.ghost=new Ct(new sn(.02625,24,16),new Ae({color:16777215,wireframe:!0,transparent:!0,opacity:.35,depthWrite:!1})),t.add(this.line,this.objLine,this.cueLine,this.ghost)}set(t,e){let n=e.geometry.attributes.position;for(let i=0;i<2;i++)n.setXYZ(i,t[i].x,.02625*.35,t[i].z);n.needsUpdate=!0,e.geometry.computeBoundingSphere()}update(t,e,n,i,r=2){let o=i&&r>0;if(this.line.visible=this.ghost.visible=o,this.objLine.visible=this.cueLine.visible=o&&r>1,!o)return null;let a=wo(t,e,n);if(this.set([e.p,a.ghost],this.line),this.ghost.position.set(a.ghost.x,.02625,a.ghost.z),a.ball&&r>1){let l=a.ball.p.x-a.ghost.x,c=a.ball.p.z-a.ghost.z,h=Math.hypot(l,c)||1,d=l/h,u=c/h,f=Math.cos(n)*d+Math.sin(n)*u,g=.18+.5*f;this.set([a.ball.p,{x:a.ball.p.x+d*g,z:a.ball.p.z+u*g}],this.objLine);let _=Math.cos(n)-f*d,m=Math.sin(n)-f*u,p=Math.hypot(_,m);if(p>.001){_/=p,m/=p;let E=.08+.4*(1-f);this.set([a.ghost,{x:a.ghost.x+_*E,z:a.ghost.z+m*E}],this.cueLine)}else this.cueLine.visible=!1}else this.objLine.visible=this.cueLine.visible=!1;return a}};var hu={type:"change"},lc={type:"start"},du={type:"end"},Lo=new wi,uu=new qe,E_=Math.cos(70*On.DEG2RAD),Ie=new R,Ve=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ac=1e-6,Do=class extends go{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pn.ROTATE,MIDDLE:pn.DOLLY,RIGHT:pn.PAN},this.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new $e,this._lastTargetPosition=new R,this._quat=new $e().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Js,this._sphericalDelta=new Js,this._scale=1,this._panOffset=new R,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new R,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=T_.bind(this),this._onPointerDown=w_.bind(this),this._onPointerUp=A_.bind(this),this._onContextMenu=U_.bind(this),this._onMouseWheel=P_.bind(this),this._onKeyDown=I_.bind(this),this._onTouchStart=L_.bind(this),this._onTouchMove=D_.bind(this),this._onMouseDown=R_.bind(this),this._onMouseMove=C_.bind(this),this._interceptControlDown=N_.bind(this),this._interceptControlUp=k_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hu),this.update(),this.state=ce.NONE}update(t=null){let e=this.object.position;Ie.copy(e).sub(this.target),Ie.applyQuaternion(this._quat),this._spherical.setFromVector3(Ie),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Ve:n>Math.PI&&(n-=Ve),i<-Math.PI?i+=Ve:i>Math.PI&&(i-=Ve),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ie.setFromSpherical(this._spherical),Ie.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ie),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ie.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new R(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ie.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Lo.origin.copy(this.object.position),Lo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lo.direction))<E_?this.object.lookAt(this.target):(uu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lo.intersectPlane(uu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ac||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ac||this._lastTargetPosition.distanceToSquared(this.target)>ac?(this.dispatchEvent(hu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ve/60*this.autoRotateSpeed*t:Ve/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ie.setFromMatrixColumn(e,0),Ie.multiplyScalar(-t),this._panOffset.add(Ie)}_panUp(t,e){this.screenSpacePanning===!0?Ie.setFromMatrixColumn(e,1):(Ie.setFromMatrixColumn(e,0),Ie.crossVectors(this.object.up,Ie)),Ie.multiplyScalar(t),this._panOffset.add(Ie)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Ie.copy(i).sub(this.target);let r=Ie.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ve*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function w_(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function T_(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function A_(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(du),this.state=ce.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function R_(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case pn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ce.DOLLY;break;case pn.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ce.ROTATE}break;case pn.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(lc)}function C_(s){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function P_(s){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(s.preventDefault(),this.dispatchEvent(lc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(du))}function I_(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function L_(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ce.TOUCH_ROTATE;break;case Pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case Pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ce.TOUCH_DOLLY_PAN;break;case Pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(lc)}function D_(s){switch(this._trackPointer(s),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ce.NONE}}function U_(s){this.enabled!==!1&&s.preventDefault()}function N_(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function k_(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Uo=class{constructor(t){this.camera=new Ne(45,1,.01,40),this.camera.position.set(-3,1.6,0),this.orbit=new Do(this.camera,t.domElement),this.orbit.enableDamping=!0,this.orbit.maxPolarAngle=Math.PI/2-.05,this.orbit.minDistance=.3,this.orbit.maxDistance=4,this.orbit.target.set(0,0,0),this.orbit.enabled=!1,this.mode="cue",this.zoom=1,this.height=.22,this._pos=new R,this._look=new R,this._curLook=new R(0,0,0),this.panOffset=new R,this.followYaw=0,this.followH=.55,this._wasMoving=!1,this.aimPoint=null,this.orbit.mouseButtons={LEFT:pn.ROTATE,MIDDLE:pn.PAN,RIGHT:pn.PAN}}pan(t,e){let n=this.camera.matrixWorld.elements,i=.0018*(this.mode==="top"?2:1);this.panOffset.x+=(n[0]*t-n[4]*e)*i,this.panOffset.y+=(n[1]*t-n[5]*e)*i,this.panOffset.z+=(n[2]*t-n[6]*e)*i,this.mode==="top"&&(this.panOffset.y=0),this.panOffset.y=Math.max(-.15,Math.min(1.5,this.panOffset.y)),this.panOffset.clampLength(0,3)}resetPan(){this.panOffset.set(0,0,0)}turn(t,e){this.followYaw+=t*.004,this.followH=Math.max(.12,Math.min(1.8,this.followH+e*.003))}setMode(t){this.mode=t,this.resetPan(),t==="top"?(this.camera.layers.disable(1),this.camera.layers.disable(2)):(this.camera.layers.enable(1),this.camera.layers.enable(2)),this.orbit.enabled=t==="free",t==="free"&&this.orbit.target.copy(this._curLook)}setView(t,e){this.setMode("view"),this.viewPos=t,this.viewLook=e}resize(t,e){this.camera.aspect=t/e,this.baseFov=t/e<1?62:45,this.camera.fov=this.baseFov/(this.viewZoom||1),this.camera.updateProjectionMatrix()}setViewZoom(t){this.viewZoom=Math.min(5,Math.max(1,t)),this.camera.fov=(this.baseFov||45)/this.viewZoom,this.camera.updateProjectionMatrix()}update(t,e,n,i){if(this.mode==="free"){this.orbit.update(),sc(this.camera.position),this._curLook.copy(this.orbit.target),this.camera.position.y>1.5?this.camera.layers.disable(1):this.camera.layers.enable(1);return}let r=this._pos,o=this._look;if(this.mode==="view")this.camera.up.set(0,1,0),r.copy(this.viewPos),o.copy(this.viewLook);else if(this.mode==="top"){let l=this.camera.aspect,c=On.degToRad(this.camera.fov),h=(1.778+.5)/2/Math.tan(c/2),d=(3.569+.5)/2/Math.tan(c/2)/l;if(l>=1)r.set(0,Math.max(h,d),1e-4),this.camera.up.set(0,0,-1);else{let u=(3.569+.5)/2/Math.tan(c/2),f=(1.778+.5)/2/Math.tan(c/2)/l;r.set(1e-4,Math.max(u,f),0),this.camera.up.set(1,0,0)}o.set(0,0,0)}else if(i&&this.mode!=="view"){this.camera.up.set(0,1,0);let l=Math.cos(this.followYaw),c=Math.sin(this.followYaw),h=.9/this.zoom+this.followH*.4;r.set(e.p.x-l*h,this.followH,e.p.z-c*h),o.set(e.p.x+l*.15,0,e.p.z+c*.15)}else{this.camera.up.set(0,1,0);let l=Math.cos(n),c=Math.sin(n),h=.62/this.zoom;r.set(e.p.x-l*h,this.height/this.zoom+.06,e.p.z-c*h),o.set(e.p.x+l*.55,0,e.p.z+c*.55)}i&&!this._wasMoving&&this.mode!=="view"&&(this.followYaw=n,this.followH=.55,this.resetPan()),this._wasMoving=i,this.mode==="top"?(r.add(this.panOffset),o.add(this.panOffset)):!i&&this.mode!=="view"&&this.panOffset.lengthSq()>1e-8&&(r.add(this.panOffset),this.aimPoint?o.copy(this.aimPoint):o.add(this.panOffset)),this.mode!=="top"&&sc(r);let a=1-Math.exp(-t*(this.mode==="view"||i?4:7));this.camera.position.lerp(r,a),this._curLook.lerp(o,a),this.camera.lookAt(this._curLook),this.camera.position.y>Fe.ceil-.05?this.camera.layers.disable(2):this.mode!=="top"&&this.camera.layers.enable(2),this.mode!=="top"&&(this.camera.position.y>1.5?this.camera.layers.disable(1):this.camera.layers.enable(1))}};var No=class{constructor(t,e,n,i){this.dom=t,this.rig=e,this.game=n,this.hooks=i,this.power=0,this.charging=!1,this.fine=!1,this._ray=new mo,this._plane=new qe(new R(0,1,0),-.02625),this._v2=new gt,this._hit=new R,this._drag=null,this._keys=new Set,this._spaceT=0,this.stroking=!1,this.spinning=!1,this.blocked=!1,this.cueSpec={fine:0,len:1.45},this.strokePx=380,this.strokePull=0,this._hist=[],t.addEventListener("mousemove",r=>this.mouseMove(r)),this.panning=!1,t.addEventListener("mousedown",r=>{r.button===1&&r.preventDefault()}),this._ignoreUntil=0,document.addEventListener("pointerlockchange",()=>{this._ignoreUntil=performance.now()+60,this.hooks.lock&&this.hooks.lock(this.captured)}),t.addEventListener("pointerdown",r=>this.down(r)),window.addEventListener("pointermove",r=>this.move(r)),window.addEventListener("pointerup",r=>this.up(r)),window.addEventListener("pointercancel",r=>this.up(r)),t.addEventListener("wheel",r=>this.wheel(r),{passive:!1}),t.addEventListener("contextmenu",r=>r.preventDefault()),window.addEventListener("keydown",r=>this.key(r,!0)),window.addEventListener("keyup",r=>this.key(r,!1))}tablePoint(t){let e=this.dom.getBoundingClientRect();return this._v2.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),this._ray.setFromCamera(this._v2,this.rig.camera),this._ray.ray.intersectPlane(this._plane,this._hit)}aimAt(t){let e=this.game.cue;Math.hypot(t.x-e.p.x,t.z-e.p.z)>.01&&(this.game.dir=Math.atan2(t.z-e.p.z,t.x-e.p.x))}down(t){this.hooks.unlock();let e=this.game;if(this.blocked){this.hooks.viewDown&&this.hooks.viewDown(t);return}if(t.pointerType==="mouse"&&t.button===2){this.rig.mode!=="free"&&(this.panning=!0,this.capture());return}if(t.pointerType==="mouse"&&t.button===1){let n=performance.now();if(n-(this._midT||0)<350){this._midT=0,this.spinning=!1,this.hooks.spinReset&&this.hooks.spinReset();return}this._midT=n}if(e.state==="place"&&this.captured){t.button===0&&(e.confirmPlace(),e.aimAtNearest());return}if(e.state==="place"){let n=this.tablePoint(t);n&&e.movePlace(n.x,n.z),this._drag={kind:"place",id:t.pointerId};return}if(e.state==="aim"){if(t.pointerType==="mouse"){if(t.button===0&&this.rig.mode!=="free"){this.captured?this.startStroke():this.capture();return}if(t.button===1){this.spinning=!0,this.capture();return}}if(this.rig.mode==="free"){this._tap={id:t.pointerId,x:t.clientX,y:t.clientY,t:performance.now()};return}if(this.rig.mode==="top"){let n=this.tablePoint(t);n&&this.aimAt(n),this._drag={kind:"aimTop",id:t.pointerId}}else this._drag={kind:"aimCue",id:t.pointerId,x:t.clientX,dir:e.dir};try{this.dom.setPointerCapture(t.pointerId)}catch{}}}move(t){let e=this._drag;if(!e||e.id!==t.pointerId)return;let n=this.game;if(e.kind==="place"){let i=this.tablePoint(t);i&&n.movePlace(i.x,i.z)}else if(e.kind==="aimTop"){let i=this.tablePoint(t);i&&this.aimAt(i)}else if(e.kind==="aimCue"){let i=t.shiftKey||this.fine?15e-5:.0016;n.dir=e.dir+(t.clientX-e.x)*i}}up(t){t.pointerType==="mouse"&&t.button===0&&this.stroking&&this.endStroke(),t.pointerType==="mouse"&&t.button===1&&(this.spinning=!1),t.pointerType==="mouse"&&t.button===2&&(this.panning=!1,this.rig.resetPan());let e=this._tap;if(e&&e.id===t.pointerId&&(this._tap=null,Math.hypot(t.clientX-e.x,t.clientY-e.y)<6&&performance.now()-e.t<350&&this.game.state==="aim")){let n=this.tablePoint(t);n&&this.aimAt(n)}this._drag&&this._drag.id===t.pointerId&&(this._drag=null)}setCue(t){this.cueSpec=t,this.strokePx=su(t)}get captured(){return document.pointerLockElement===this.dom}capture(){if(!(this.captured||!this.dom.requestPointerLock))try{let t=this.dom.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}uncapture(){this.captured&&document.exitPointerLock()}mouseMove(t){let e=this.game;if(this.blocked){this.hooks.look&&performance.now()>=this._ignoreUntil&&Math.abs(t.movementX||0)<200&&Math.abs(t.movementY||0)<200&&this.hooks.look(t.movementX||0,t.movementY||0);return}if(performance.now()<this._ignoreUntil||Math.abs(t.movementX||0)>200||Math.abs(t.movementY||0)>200)return;if(this.stroking){this.strokeMove(t.movementY||0);return}if(this.panning){this.rig.pan(t.movementX||0,t.movementY||0);return}if(e.state==="moving"&&this.rig.mode==="cue"&&(t.buttons&3)===0){this.rig.turn(t.movementX||0,t.movementY||0);return}if(this.spinning){this.hooks.spin&&this.hooks.spin((t.movementX||0)/160,-(t.movementY||0)/160);return}if(e.state==="place"&&this.captured){this.placeMove(t.movementX||0,t.movementY||0);return}if((t.buttons&3)!==0||e.state!=="aim"||!this.captured)return;let n=t.movementX||0;if(!n)return;let i=t.shiftKey&&this.cueSpec.fine>0,r=i?this.cueSpec.fine:5e-4,o=i?1:1+Math.min(6,Math.abs(n)/6);e.dir+=n*r*o}placeMove(t,e){let n=this.rig.camera.matrixWorld.elements,i=n[0],r=n[2],o=n[4],a=n[6];Math.hypot(o,a)<.2&&(o=-n[8],a=-n[10]);let l=Math.hypot(i,r)||1,c=Math.hypot(o,a)||1;i/=l,r/=l,o/=c,a/=c;let h=.0012,d=this.game.cue;this.game.movePlace(d.p.x+(t*i-e*o)*h,d.p.z+(t*r-e*a)*h)}startStroke(){this.game.canShoot()&&(this.stroking=!0,this._ignoreUntil=performance.now()+60,this.strokePull=0,this._max=0,this._hist=[{t:performance.now(),p:0}],this.capture(),this.hooks.stroke&&this.hooks.stroke(!0))}endStroke(){this.stroking=!1,this.strokePull=0,this.power=0,this.hooks.stroke&&this.hooks.stroke(!1)}strokeMove(t){if(!this.stroking||!this.game.canShoot())return;let e=performance.now(),n=this.strokePull;for(this.strokePull=Math.max(-.02,Math.min(1,n+t/this.strokePx)),this._max=Math.max(this._max,this.strokePull),this._hist.push({t:e,p:this.strokePull});this._hist.length>2&&e-this._hist[0].t>80;)this._hist.shift();let i=this.strokeSpeed();if(this.power=Math.max(0,Math.min(1,i)),this.strokePull<=.004&&n>.004&&this._max>.02&&t<0){let r=Math.max(.03,Math.min(1,i));this.endStroke(),this.hooks.shoot(r)}}strokeSpeed(){let t=this._hist;if(t.length<2)return 0;let e=0;for(let a=1;a<t.length;a++)t[a].p>=t[e].p&&(e=a);let n=t[e],i=t[t.length-1];if(n===i)return 0;let r=Math.max(.008,(i.t-n.t)/1e3),o=(n.p-i.p)/r;return Math.max(0,o*.28*2/7)}wheel(t){if(this.blocked&&this.hooks.viewWheel){t.preventDefault(),this.hooks.viewWheel(Math.max(-4,Math.min(4,t.deltaY/(t.deltaMode===1?3:100))));return}if(this.rig.mode!=="cue")return;t.preventDefault();let e=Math.max(-4,Math.min(4,t.deltaY/(t.deltaMode===1?3:100)));this.rig.zoom=Math.min(6,Math.max(.3,this.rig.zoom*Math.pow(.82,e)))}key(t,e){if(t.target&&/input|textarea|select/i.test(t.target.tagName))return;let n=this.game,i=t.key;if(e?this._keys.add(i):this._keys.delete(i),i==="Control"){e&&!t.repeat?this.hooks.key&&this.hooks.key("ctrl-down",t):e||this.hooks.key&&this.hooks.key("ctrl-up",t);return}if(i===" "){if(t.preventDefault(),this.blocked)return;e&&!this.charging&&n.canShoot()?(this.hooks.unlock(),this.charging=!0,this._spaceT=0):!e&&this.charging&&this.release();return}e&&(i==="Enter"&&n.state==="place"?n.confirmPlace():i==="Escape"&&(this.charging||this.stroking)?(this.charging=!1,this.power=0,this.stroking&&this.endStroke()):this.hooks.key&&this.hooks.key(i,t)&&t.preventDefault())}setPower(t,e){this.power=Math.max(0,Math.min(1,t)),this.charging=e}release(){let t=this.power;this.charging=!1,this.power=0,t>.02&&this.hooks.shoot(t)}update(t){let e=this.game;if(e.state==="aim"&&!this.blocked){let i=this._keys.has("Shift")&&this.cueSpec.fine>0?.015:.35;this._keys.has("ArrowLeft")&&(e.dir-=i*t),this._keys.has("ArrowRight")&&(e.dir+=i*t)}if(this.stroking&&e.state!=="aim"&&this.endStroke(),this.stroking&&this._hist.length&&performance.now()-this._hist[this._hist.length-1].t>120&&(this.power*=Math.exp(-t*8)),this.charging&&this._keys.has(" ")){this._spaceT+=t;let n=this._spaceT/1.6%2;this.power=n<1?n:2-n}}};var ko=class{constructor(){this.ctx=null,this.enabled=!0,this.volume=.8,this._last=0,this._count=0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t){this.enabled=!1;return}this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination);let e=Math.floor(this.ctx.sampleRate*.05);this.noise=this.ctx.createBuffer(1,e,this.ctx.sampleRate);let n=this.noise.getChannelData(0);for(let i=0;i<e;i++)n[i]=(Math.random()*2-1)*Math.pow(1-i/e,3)}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}_allow(){let t=this.ctx.currentTime;return t-this._last>.03&&(this._count=0),this._last=t,this._count++,this._count<=4}_tone(t,e,n,i="sine",r=.5){let o=this.ctx.currentTime,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type=i,a.frequency.setValueAtTime(t,o),a.frequency.exponentialRampToValueAtTime(Math.max(20,t*r),o+e),l.gain.setValueAtTime(n,o),l.gain.exponentialRampToValueAtTime(1e-4,o+e),a.connect(l).connect(this.master),a.start(o),a.stop(o+e+.02)}_click(t,e,n,i=1){let r=this.ctx.currentTime,o=this.ctx.createBufferSource();o.buffer=this.noise,o.playbackRate.value=i;let a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.value=t,a.Q.value=e;let l=this.ctx.createGain();l.gain.value=n,o.connect(a).connect(l).connect(this.master),o.start(r)}_ok(){return this.enabled&&this.ctx&&this.ctx.state==="running"}ball(t){if(!this._ok()||t<.02||!this._allow())return;let e=Math.min(1,t/4);this._click(3800+Math.random()*600,6,.25+e*1.6,1.2),this._tone(2600+Math.random()*300,.04,.05+e*.25,"triangle",.8)}cushion(t){if(!this._ok()||t<.05||!this._allow())return;let e=Math.min(1,t/4);this._tone(120,.12,.1+e*.45,"sine",.6),this._click(700,2,.1+e*.4,.6)}pot(){this._ok()&&(this._tone(90,.25,.5,"sine",.5),setTimeout(()=>this._ok()&&this._click(1200,3,.25,.5),90),setTimeout(()=>this._ok()&&this._click(900,3,.18,.5),170))}doorCreak(){if(!this._ok())return;let t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createBiquadFilter(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(420,t);for(let r=1;r<=8;r++)e.frequency.linearRampToValueAtTime(380+Math.random()*260,t+r*.1);n.type="bandpass",n.frequency.value=900,n.Q.value=6,i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.12,t+.08),i.gain.setValueAtTime(.12,t+.6),i.gain.exponentialRampToValueAtTime(1e-4,t+.85),e.connect(n).connect(i).connect(this.master),e.start(t),e.stop(t+.9)}doorShut(){this._ok()&&(this._tone(70,.35,.9,"sine",.5),this._click(500,1.5,.8,.5),setTimeout(()=>this._ok()&&this._click(2500,4,.25,1),40))}cue(t){this._ok()&&(this._click(1800,3,.3+t*1.2,.9),this._tone(600,.05,.05+t*.15,"triangle",.6))}};var ye=s=>String(s||"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Vt=(s,t,e)=>{let n=document.createElement(s);return t&&(n.className=t),e!==void 0&&(n.innerHTML=e),n},Oo=class{constructor(t,e){this.root=t,this.opts=e,this.side=0,this.top=0,t.classList.add("mysn-ui");let n=Vt("div","mysn-bar");n.appendChild(Vt("div","mysn-brand",`<a href="${e.homeUrl||"/"}" class="mysn-home" title="Sp\xE4\u0165 na web">My Snooker</a><span>Tr\xE9ning</span>`)),this.modeLabel=n.querySelector(".mysn-brand span"),this.stats=Vt("div","mysn-stats"),n.appendChild(this.stats);let i=Vt("div","mysn-barbtns");this.btnHelp=this.button("?","help","Ovl\xE1danie"),this.btnSet=this.button("Nastavenia","settings"),i.append(this.btnSet,this.btnHelp),n.appendChild(i),t.appendChild(n),this.msg=Vt("div","mysn-msg"),t.appendChild(this.msg),this.hint=Vt("div","mysn-hint",""),t.appendChild(this.hint),this.setLock(!1),this.powerBox=Vt("div","mysn-power",'<div class="mysn-power-label">Sila</div><div class="mysn-power-track"><div class="mysn-power-fill"></div><div class="mysn-power-knob"></div></div><div class="mysn-power-val">0 %</div>'),t.appendChild(this.powerBox),this.powerTrack=this.powerBox.querySelector(".mysn-power-track"),this.powerFill=this.powerBox.querySelector(".mysn-power-fill"),this.powerKnob=this.powerBox.querySelector(".mysn-power-knob"),this.powerVal=this.powerBox.querySelector(".mysn-power-val"),this.bindPower(),this.spinBox=Vt("div","mysn-spin",'<div class="mysn-spin-ball"><div class="mysn-spin-dot"></div></div><div class="mysn-spin-label">Miesto \xFAderu</div>'),t.appendChild(this.spinBox),this.spinBall=this.spinBox.querySelector(".mysn-spin-ball"),this.spinDot=this.spinBox.querySelector(".mysn-spin-dot"),this.bindSpin();let r=Vt("div","mysn-tools");this.camBtns={};let o=Vt("div","mysn-group");this.btnUndo=this.button("Sp\xE4\u0165","undo","Vr\xE1ti\u0165 posledn\xFD \xFAder (Z)"),this.btnHand=this.button("Biela do ruky","hand","Polo\u017Ei\u0165 bielu kamko\u013Evek v D (B)"),this.btnSkip=this.button("Presko\u010Di\u0165","skip","Dokon\u010Di\u0165 \xFAder hne\u010F"),this.btnReset=this.button("Nov\xE9 rozostavenie","reset","Nov\xE9 rozostavenie (R)"),this.btnPlace=this.button("Hotovo","place","Potvrdi\u0165 polohu bielej (Enter)"),this.btnPlace.classList.add("mysn-primary"),o.append(this.btnPlace,this.btnUndo,this.btnHand,this.btnSkip,this.btnReset),r.appendChild(o),t.appendChild(r),this.menu=this.buildMenu(),this.setMenu(e.user?"training":"guest"),t.appendChild(this.menu),this.panel=this.buildSettings(e.settings),t.appendChild(this.panel),this.contact=Vt("div","mysn-contact mysn-hidden",'<canvas></canvas><div class="mysn-contact-info"></div>'),t.appendChild(this.contact),this.contactCanvas=this.contact.querySelector("canvas"),this.contactInfo=this.contact.querySelector(".mysn-contact-info"),this._contactKey="",this.help=this.buildHelp(),t.appendChild(this.help)}button(t,e,n,i){let r=Vt("button","mysn-btn",t);return r.type="button",n&&(r.title=n),r.addEventListener("click",o=>{o.stopPropagation(),this.opts.onAction(e,i)}),r}bindPower(){let t=null,e=i=>{let r=this.powerTrack.getBoundingClientRect();return Math.max(0,Math.min(1,(i.clientY-r.top)/r.height))};this.powerTrack.addEventListener("pointerdown",i=>{i.preventDefault(),this.opts.onAction("unlock"),t=i.pointerId;try{this.powerTrack.setPointerCapture(i.pointerId)}catch{}this.opts.onPower(e(i),!0)}),this.powerTrack.addEventListener("pointermove",i=>{t===i.pointerId&&this.opts.onPower(e(i),!0)});let n=i=>{t===i.pointerId&&(t=null,this.opts.onRelease())};this.powerTrack.addEventListener("pointerup",n),this.powerTrack.addEventListener("pointercancel",i=>{t===i.pointerId&&(t=null,this.opts.onPower(0,!1))})}bindSpin(){let t=null,e=n=>{let i=this.spinBall.getBoundingClientRect(),r=(n.clientX-i.left)/i.width*2-1,o=-((n.clientY-i.top)/i.height*2-1),a=Math.hypot(r,o);a>1&&(r/=a,o/=a),this.setSpin(Math.abs(r)<.06?0:r,Math.abs(o)<.06?0:o)};this.spinBall.addEventListener("pointerdown",n=>{n.preventDefault(),t=n.pointerId;try{this.spinBall.setPointerCapture(n.pointerId)}catch{}e(n)}),this.spinBall.addEventListener("pointermove",n=>t===n.pointerId&&e(n)),this.spinBall.addEventListener("pointerup",()=>t=null),this.spinBall.addEventListener("dblclick",()=>this.setSpin(0,0))}setSpin(t,e){let n=Math.hypot(t,e);n>1&&(t/=n,e/=n),this.side=t,this.top=e,this.spinDot.style.left=50+this.side*40+"%",this.spinDot.style.top=50-this.top*40+"%",this.opts.onSpin(this.side,this.top)}buildSettings(t){let e=Vt("div","mysn-panel mysn-hidden");e.innerHTML=`
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
			<button type="button" class="mysn-btn mysn-primary" data-close>Zavrie\u0165</button>`;for(let n of e.querySelectorAll("[data-k]")){let i=n.dataset.k;n.type==="checkbox"?n.checked=!!t[i]:n.value=String(t[i]),n.addEventListener(n.type==="range"?"input":"change",()=>{let r=n.type==="checkbox"?n.checked:n.type==="range"?parseFloat(n.value):n.value;this.opts.onAction("setting",{k:i,v:r})})}return e.querySelector("[data-close]").addEventListener("click",()=>e.classList.add("mysn-hidden")),e}buildMenu(){let t=Vt("div","mysn-menu mysn-hidden");return t.innerHTML=`<div class="mysn-menu-box">
			<h2>My Snooker</h2>
			<p class="mysn-menu-mode"></p>
			<div class="mysn-menu-note mysn-hidden"></div>
			<div class="mysn-menu-inv"></div>
			<div class="mysn-menu-btns"></div>
			<p class="mysn-note"></p>
		</div>`,this.menuMode=t.querySelector(".mysn-menu-mode"),this.menuNoteEl=t.querySelector(".mysn-menu-note"),this.menuInv=t.querySelector(".mysn-menu-inv"),this.menuBtns=t.querySelector(".mysn-menu-btns"),this.menuFoot=t.querySelector(".mysn-note"),this._menuKind="",t}setMenu(t,e){let n=t+"|"+(e||"");if(this._menuKind===n)return;this._menuKind=n;let i=this.menuBtns;i.innerHTML="";let r=this.opts.user;if(t==="guest"){this.menuMode.textContent="3D snooker v prehliada\u010Di";let l=Vt("a","mysn-btn mysn-login","Prihl\xE1si\u0165 sa");l.href=this.opts.loginUrl||"/wp-login.php",i.appendChild(l),this.menuFoot.textContent="Hra\u0165 m\xF4\u017Eu prihl\xE1sen\xED pou\u017E\xEDvatelia webu Hedlajner: tr\xE9ning aj partie s priate\u013Emi cez internet.";return}let o=()=>{let l=this.button("Hra\u0165 s priate\u013Eom","lobby","Partia cez internet s hr\xE1\u010Dom, ktor\xFD je pr\xE1ve v hre");return l.classList.add("mysn-friend"),l},a=()=>[this.button("Nastavenia","settings")];if(t==="match")this.btnResume=this.button("Pokra\u010Dova\u0165 v partii","resume"),this.btnResume.classList.add("mysn-primary"),this.menuMode.textContent=`Partia s hr\xE1\u010Dom ${e}`,i.append(this.btnResume,...a()),i.append(this.button("Preru\u0161i\u0165 partiu","pauseMatch","Partia sa ulo\u017E\xED, pokra\u010Dova\u0165 sa d\xE1 nesk\xF4r"),this.button("Vzda\u0165 partiu","resign"));else{this.menuMode.textContent=t==="solo"?"Hr\xE1 sa o najlep\u0161ie sk\xF3re":r?`Prihl\xE1sen\xFD: ${r.name}`:"Tr\xE9ning";let l=this.button("Hra\u0165",t==="solo"?"resume":"solo","O najlep\u0161ie sk\xF3re: cel\xFD frame pod\u013Ea pravidiel, rebr\xED\u010Dek pod\u013Ea bodov, pri rovnosti rozhoduje krat\u0161\xED \u010Das");l.classList.add("mysn-primary"),this.btnResume=l,i.append(l,this.button("Tr\xE9ning",t==="solo"?"training":"resume"),o(),this.button("Rebr\xED\u010Dek","leaderboard")),t!=="solo"&&i.appendChild(this.button("Nov\xE9 rozostavenie","reset")),i.append(...a())}i.appendChild(this.button("Sp\xE4\u0165 na web","home")),this.menuFoot.textContent="V hre sa my\u0161 zachyt\xED v okne. Esc ju uvo\u013En\xED a otvor\xED toto menu. F1 n\xE1poveda na n\xE1stenke, F2 stojan s t\xE1gami."}menuNote(t){this.menuNoteEl.textContent=t||"",this.menuNoteEl.classList.toggle("mysn-hidden",!t)}showMenu(t,e){this.menu.classList.toggle("mysn-hidden",!t),t||(this.panel.classList.add("mysn-hidden"),this.help.classList.add("mysn-hidden"),this.menuNote(""))}menuOpen(){return!this.menu.classList.contains("mysn-hidden")}showInvites(t){let e=t||[];this.menuInv.innerHTML="";for(let n of e){let i=Vt("div","mysn-inv",`${n.from.avatar?`<img src="${ye(n.from.avatar)}" alt="">`:""}<span><b>${ye(n.from.name)}</b> \u0165a poz\xFDva na partiu</span>`),r=this.button("Prija\u0165","accept","",n.id);r.classList.add("mysn-primary"),i.append(r,this.button("Odmietnu\u0165","decline","",n.id)),this.menuInv.appendChild(i)}this.toastBox||(this.toastBox=Vt("div","mysn-toast mysn-hidden"),this.root.appendChild(this.toastBox)),this.lobby&&!this.lobby.classList.contains("mysn-hidden")&&this._lobbyData&&this.renderLobby(this._lobbyData)}toast(t,e){this.toastBox||(this.toastBox=Vt("div","mysn-toast mysn-hidden"),this.root.appendChild(this.toastBox));let n=this.toastBox;if(n.innerHTML="",n.appendChild(Vt("span","",ye(t))),e){let i=this.button("Prija\u0165","accept","",e.id);i.classList.add("mysn-primary"),n.append(i,this.button("Odmietnu\u0165","decline","",e.id))}n.classList.remove("mysn-hidden"),clearTimeout(this._toastT),this._toastT=setTimeout(()=>n.classList.add("mysn-hidden"),e?3e4:6e3)}hideToast(){this.toastBox&&this.toastBox.classList.add("mysn-hidden")}openLobby(t){this.lobby||(this.lobby=Vt("div","mysn-panel mysn-lobby mysn-hidden"),this.root.appendChild(this.lobby)),this.lobby.classList.toggle("mysn-hidden",!t),t&&this._lobbyData&&this.renderLobby(this._lobbyData)}lobbyOpen(){return!!(this.lobby&&!this.lobby.classList.contains("mysn-hidden"))}renderLobby(t){if(this._lobbyData=t,!this.lobby||this.lobby.classList.contains("mysn-hidden"))return;let e=this.lobby;e.innerHTML="<h3>Hra\u0165 s priate\u013Eom</h3>";let n=l=>l.avatar?`<img src="${ye(l.avatar)}" alt="">`:"<i></i>";for(let l of t.invites||[]){let c=Vt("div","mysn-inv",`${n(l.from)}<span><b>${ye(l.from.name)}</b> \u0165a poz\xFDva na partiu</span>`),h=this.button("Prija\u0165","accept","",l.id);h.classList.add("mysn-primary"),c.append(h,this.button("Odmietnu\u0165","decline","",l.id)),e.appendChild(c)}let i=t.outgoing;if(i&&i.status==="invited"){let l=Vt("div","mysn-inv mysn-wait",`${n(i.to)}<span>\u010Cak\xE1m, k\xFDm <b>${ye(i.to.name)}</b> prijme pozv\xE1nku\u2026</span>`);l.appendChild(this.button("Zru\u0161i\u0165","cancelInvite")),e.appendChild(l)}e.appendChild(Vt("p","mysn-lobby-sub","Hr\xE1\u010Di pr\xE1ve v hre My Snooker"));let r=t.live||[];r.length||e.appendChild(Vt("p","mysn-note","Teraz nie je v hre nikto in\xFD. Zoznam sa obnovuje s\xE1m, ke\u010F niekto pr\xEDde, objav\xED sa tu."));let o=Vt("div","mysn-live");for(let l of r){let c=Vt("div","mysn-live-row",`${n(l)}<span><b>${ye(l.name)}</b>${l.busy?"<em>hr\xE1 partiu</em>":'<em class="mysn-live-on">v hre</em>'}</span>`),h=this.button("Pozva\u0165","invite","",l.id);h.disabled=!!l.busy||!!(i&&i.status==="invited"),c.appendChild(h),o.appendChild(c)}if(e.appendChild(o),(t.paused||[]).length){e.appendChild(Vt("p","mysn-lobby-sub","Rozohran\xE9 partie"));for(let l of t.paused){let c=new Date(l.updated*1e3).toLocaleString("sk-SK",{day:"numeric",month:"numeric",hour:"2-digit",minute:"2-digit"}),h=Vt("div","mysn-live-row",`${n(l.opp)}<span><b>${ye(l.opp.name)}</b><em>${l.scores[0]} : ${l.scores[1]}, ${ye(c)}</em></span>`);h.appendChild(this.button("Pokra\u010Dova\u0165","resumeMatch","Pokra\u010Dova\u0165 v partii (s\xFAper sa pripoj\xED, ke\u010F pr\xEDde do hry)",l.id)),e.appendChild(h)}}let a=Vt("div","mysn-lobby-foot");a.appendChild(Vt("span","mysn-note","Partia sa uklad\xE1 po ka\u017Edom \xFAdere. Pri v\xFDpadku internetu sa po n\xE1vrate pokra\u010Duje tam, kde sa skon\u010Dila.")),a.appendChild(this.button("Zavrie\u0165","lobbyClose")),e.appendChild(a)}celebrate(t){this.party||(this.party=Vt("div","mysn-party mysn-hidden"),this.root.appendChild(this.party));let e=this.party;if(!t){e.classList.add("mysn-hidden"),e.innerHTML="";return}let n=Math.max(0,Math.round(t.seconds)),i=`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`,r=t.points===1?"bod":t.points>1&&t.points<5?"body":"bodov",o=["#FACC15","#b3121f","#0f7a3a","#1747b5","#f08aa8","#6b3a1e","#f4f1e8"],a="";for(let d=0;d<70;d++)a+=`<i style="left:${(Math.random()*100).toFixed(1)}%;background:${o[d%o.length]};animation-delay:${(Math.random()*2.5).toFixed(2)}s;animation-duration:${(2.8+Math.random()*2.4).toFixed(2)}s;width:${6+Math.round(Math.random()*8)}px;height:${6+Math.round(Math.random()*8)}px;border-radius:${d%3?"50%":"2px"}"></i>`;let l=t.rank?`<p class="mysn-party-rank">${t.rank}. miesto v rebr\xED\u010Dku z ${t.players}${t.best?", tvoj najlep\u0161\xED frame!":""}</p>`:"";e.innerHTML=`<div class="mysn-party-conf">${a}</div><div class="mysn-party-box">
			<p class="mysn-party-kick">Frame dohran\xFD</p>
			<h2>Gratulujem!</h2>
			<div class="mysn-party-score"><b>${t.points}</b><span>${r}</span></div>
			<p class="mysn-party-time">za <b>${i}</b></p>
			<p class="mysn-party-meta">Najvy\u0161\u0161ia s\xE9ria ${t.brk}, \xFAdery ${t.shots}, fauly ${t.fouls}</p>
			${l}${t.error?`<p class="mysn-party-err">${ye(t.error)}</p>`:""}
			<div class="mysn-party-btns"></div>
		</div>`;let c=e.querySelector(".mysn-party-btns"),h=this.button("Hra\u0165 \u010Fal\u0161\xED frame","partyNext");h.classList.add("mysn-primary"),c.append(h,this.button("Rebr\xED\u010Dek","partyBoard")),e.classList.remove("mysn-hidden")}partyOpen(){return!!(this.party&&!this.party.classList.contains("mysn-hidden"))}leaderboardOpen(){return!!(this.board&&!this.board.classList.contains("mysn-hidden"))}showLeaderboard(t,e){this.board||(this.board=Vt("div","mysn-panel mysn-lobby mysn-hidden"),this.root.appendChild(this.board));let n=this.board;if(t===null){n.classList.add("mysn-hidden");return}let i=a=>{let l=Math.max(0,Math.round(a));return`${Math.floor(l/60)}:${String(l%60).padStart(2,"0")}`};if(n.innerHTML="<h3>Rebr\xED\u010Dek: o najlep\u0161ie sk\xF3re (F8)</h3>",e&&n.appendChild(Vt("div","mysn-menu-note",ye(e))),n.appendChild(Vt("p","mysn-note","Jeden hr\xE1\u010D hr\xE1 cel\xFD frame pod\u013Ea pravidiel. Rozhoduj\xFA body (fauly sa odpo\u010D\xEDtaj\xFA), pri rovnosti krat\u0161\xED \u010Das. V rebr\xED\u010Dku je najlep\u0161\xED frame ka\u017Ed\xE9ho hr\xE1\u010Da.")),t===void 0)n.appendChild(Vt("p","mysn-note","Na\u010D\xEDtavam rebr\xED\u010Dek\u2026"));else if(!t)n.appendChild(Vt("p","mysn-note","Rebr\xED\u010Dek sa nepodarilo na\u010D\xEDta\u0165."));else if(!t.top.length)n.appendChild(Vt("p","mysn-note","Zatia\u013E nikto nedohral frame. Bu\u010F prv\xFD."));else{let a=Vt("table","mysn-lb");a.innerHTML="<thead><tr><th>#</th><th>Hr\xE1\u010D</th><th>Body</th><th>Celkov\xFD \u010Das</th><th>S\xE9ria</th></tr></thead>";let l=Vt("tbody"),c=h=>{let d=Vt("tr",h.me?"mysn-lb-me":"",`<td>${h.rank}.</td><td>${ye(h.user.name)}</td><td><b>${h.points}</b></td><td>${i(h.seconds)}</td><td>${h.brk}</td>`);l.appendChild(d)};t.top.forEach(c),t.mine&&t.rank>10&&(l.appendChild(Vt("tr","mysn-lb-gap",'<td colspan="5">\u2026</td>')),c(t.mine)),a.appendChild(l),n.appendChild(a),n.appendChild(Vt("p","mysn-note",t.mine?`Tvoje miesto: ${t.rank}. z ${t.players}, dohran\xFDch framov: ${t.frames}.`:`Hr\xE1\u010Dov v rebr\xED\u010Dku: ${t.players}. Zatia\u013E nem\xE1\u0161 dohran\xFD \u017Eiadny frame.`))}let r=Vt("div","mysn-lobby-foot"),o=this.button("Hra\u0165","solo");o.classList.add("mysn-primary"),r.append(o,this.button("Zavrie\u0165","leaderboardClose")),n.appendChild(r),n.classList.remove("mysn-hidden")}setNet(t){this._net=t||"",this._lastGame&&this.sync(this._lastGame,this._lastCam)}buildHelp(){let t=Vt("div","mysn-panel mysn-help mysn-hidden");return t.innerHTML=`
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
			<button type="button" class="mysn-btn mysn-primary" data-close>Rozumiem</button>`,t.querySelector("[data-close]").addEventListener("click",()=>t.classList.add("mysn-hidden")),t}toggle(t){(t===this.panel?this.help:this.panel).classList.add("mysn-hidden"),t.classList.toggle("mysn-hidden")}drawContact(t,e,n,i=!1){let r=!!(n&&t&&t.ball);if(this.contact.classList.toggle("mysn-hidden",!r),!r){this._contactKey="";return}let o=t.ball.p,a=t.ghost,l=[i?1:0,e.toFixed(5),o.x.toFixed(4),o.z.toFixed(4),a.x.toFixed(4),a.z.toFixed(4)].join();if(l===this._contactKey)return;this._contactKey=l;let c=this.contactCanvas,h=this.contact.clientWidth||200,d=Math.min(2,window.devicePixelRatio||1);c.width!==Math.round(h*d)&&(c.width=c.height=Math.round(h*d));let u=c.getContext("2d"),f=c.width;u.setTransform(1,0,0,1,0,0),u.clearRect(0,0,f,f);let g=Math.cos(e),_=Math.sin(e),m=(a.x+o.x)/2,p=(a.z+o.z)/2,E=f*.17/.02625,v=(Pt,Y)=>{let rt=Pt-m,_t=Y-p,k=rt*g+_t*_,pt=rt*-_+_t*g;return[f/2+pt*E,f/2-k*E]},y=o.x-a.x,F=o.z-a.z,C=Math.hypot(y,F)||1,U=y/C,L=F/C,S=Math.max(-1,Math.min(1,g*U+_*L)),M=Math.acos(S),P=Math.max(0,1-Math.sin(M)),J=(Pt,Y,rt,_t,k)=>{u.beginPath(),u.setLineDash(k||[]),u.strokeStyle=rt,u.lineWidth=_t*d,u.moveTo(Pt[0],Pt[1]),u.lineTo(Y[0],Y[1]),u.stroke(),u.setLineDash([])},W=(Pt,Y,rt,_t,k)=>{let pt=v(Pt.x,Pt.z),ht=v(Pt.x+Y*_t,Pt.z+rt*_t);J(pt,ht,k,2.2);let z=Math.atan2(ht[1]-pt[1],ht[0]-pt[0]),ut=8*d;u.beginPath(),u.fillStyle=k,u.moveTo(ht[0],ht[1]),u.lineTo(ht[0]-ut*Math.cos(z-.45),ht[1]-ut*Math.sin(z-.45)),u.lineTo(ht[0]-ut*Math.cos(z+.45),ht[1]-ut*Math.sin(z+.45)),u.closePath(),u.fill()};if(u.fillStyle="#1d6b34",u.beginPath(),u.arc(f/2,f/2,f/2-d,0,Math.PI*2),u.fill(),u.save(),u.clip(),i){let Pt=6*.02625;J(v(a.x-g*Pt,a.z-_*Pt),v(a.x+g*Pt,a.z+_*Pt),"rgba(255,255,255,0.45)",1.2,[5*d,4*d]),J(v(a.x-U*.02625,a.z-L*.02625),v(o.x+U*5*.02625,o.z+L*5*.02625),"rgba(255,226,138,0.35)",1,[2*d,3*d])}let q=(Pt,Y,rt)=>{let[_t,k]=v(Pt.x,Pt.z),pt=.02625*E,ht=u.createRadialGradient(_t-pt*.35,k-pt*.35,pt*.1,_t,k,pt),z="#"+Y.toString(16).padStart(6,"0");ht.addColorStop(0,rt?"#ffffff":"rgba(255,255,255,0.55)"),ht.addColorStop(.25,z),ht.addColorStop(1,z),u.globalAlpha=rt?.78:1,u.fillStyle=ht,u.beginPath(),u.arc(_t,k,pt,0,Math.PI*2),u.fill(),u.globalAlpha=1,u.lineWidth=1.5*d,u.strokeStyle=rt?"rgba(255,255,255,0.95)":"rgba(0,0,0,0.55)",u.stroke()};q(o,vn[t.ball.kind].color,!1),q(a,vn.white.color,!0);let it=g-S*U,$=_-S*L,ft=Math.hypot(it,$);{let Pt=v(a.x-g*4.2*.02625,a.z-_*4.2*.02625),Y=v(a.x-g*1.05*.02625,a.z-_*1.05*.02625);J(Pt,Y,"rgba(255,255,255,0.7)",2.4,[6*d,4*d]);let rt=Math.atan2(Y[1]-Pt[1],Y[0]-Pt[0]),_t=7*d;u.beginPath(),u.fillStyle="rgba(255,255,255,0.8)",u.moveTo(Y[0],Y[1]),u.lineTo(Y[0]-_t*Math.cos(rt-.5),Y[1]-_t*Math.sin(rt-.5)),u.lineTo(Y[0]-_t*Math.cos(rt+.5),Y[1]-_t*Math.sin(rt+.5)),u.closePath(),u.fill();let k=t.ball.kind,pt=k==="black"?7829367:vn[k].color;W({x:o.x+U*.02625*1.05,z:o.z+L*.02625*1.05},U,L,.02625*2.4,"#"+pt.toString(16).padStart(6,"0"))}i&&ft>.001&&(it/=ft,$/=ft,W(a,it,$,.02625*(.9+2.4*(1-S)),"#9fd3ff"));let Z=v(a.x+U*.02625,a.z+L*.02625);u.fillStyle="#ff4d4d",u.beginPath(),u.arc(Z[0],Z[1],3.2*d,0,Math.PI*2),u.fill(),u.restore(),u.strokeStyle="rgba(255,255,255,0.35)",u.lineWidth=1.5*d,u.beginPath(),u.arc(f/2,f/2,f/2-d,0,Math.PI*2),u.stroke();let dt=null;for(let Pt of Li){let Y=Pt.x-o.x,rt=Pt.z-o.z,_t=Y*U+rt*L;if(_t<=0)continue;let k=Math.abs(Y*-L+rt*U);k<Pt.r*.75&&(!dt||_t<dt.pr)&&(dt={pr:_t,perp:k,pk:Pt})}let vt=g*L-_*U,yt=M*180/Math.PI,kt=yt<.5?"pln\xFD z\xE1sah":vt>0?"gu\u013Ea ide doprava":"gu\u013Ea ide do\u013Eava";this.contactInfo.innerHTML=`<span>Uhol <b>${yt.toFixed(1)}\xB0</b></span><span>Plnos\u0165 <b>${Math.round(P*100)} %</b></span>`+(i?`<span class="mysn-contact-where">${kt}</span>`+(dt?'<span class="mysn-contact-pot">Smer do jamky</span>':'<span class="mysn-contact-miss">Mimo jamky</span>'):"")}setLock(t){this._lock=t,this._hintText()}setStroke(t){this._stroke=t,this._hintText()}_hintText(){let t=this._free?"My\u0161 je vo\u013En\xE1, k\xFDm dr\u017E\xED\u0161 Ctrl. Po pusten\xED sa vr\xE1ti na t\xE1go.":this._stroke?"Ruka dr\u017E\xED t\xE1go: my\u0161 k sebe odtiahne, dopredu vystrel\xED. Pusten\xEDm \u013Eav\xE9ho tla\u010Didla zru\u0161\xED\u0161.":this._lock?`${this._cueName}: mier pohybom my\u0161i${this._cueFine?" (Shift jemne)":""}, \u013Eav\xE9 tla\u010Didlo dr\u017E a striel. F1 n\xE1poveda, F2 t\xE1g\xE1, F3 krieda, F4 sk\xF3re, F6 dvere, Tab zhora, Esc menu.`:"Klikni do hry, my\u0161 sa zachyt\xED v okne. F1 n\xE1poveda, F2 t\xE1g\xE1, F3 krieda, F4 sk\xF3re, F6 dvere, Tab zhora.";this.hint.textContent=t,this.hint.classList.toggle("mysn-hint-on",!!(this._stroke||this._free))}readerOpen(){return!!(this.reader&&!this.reader.classList.contains("mysn-hidden"))}toggleReader(t,e){this.reader||(this.reader=Vt("div","mysn-reader mysn-hidden"),this.root.appendChild(this.reader));let n=this.reader;if(!t||this.readerOpen()){n.classList.add("mysn-hidden");return}let i=t==="rss"?"Spr\xE1vy z RSS":"HEDLAJNER",r=t==="rss"?"Najnov\u0161ie spr\xE1vy z m\xE9di\xED doma aj vo svete":"Hlavn\xE9 spr\xE1vy z domova a zo sveta",o=(e||[]).map((l,c)=>{let h=l.i?`<img src="${ye(l.i)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`:"",d=[l.s,l.c,l.d].filter(Boolean).map(ye).join("  |  ");return`<a class="mysn-rd-card${c===0&&l.i?" mysn-rd-lead":""}" href="${ye(l.u)}" target="_blank" rel="noopener">${h}<span class="mysn-rd-meta">${d}${l.n?"  |  +"+l.n+" m\xE9di\xE1":""}</span><b>${ye(l.t)}</b><p>${ye(l.e)}</p></a>`}).join("");n.innerHTML=`<div class="mysn-rd-head"><div><h2>${i}</h2><span>${r}</span></div></div><div class="mysn-rd-grid">${o||"<p>\u017Diadne spr\xE1vy.</p>"}</div>`;let a=this.button("Zavrie\u0165 (C alebo Esc)","reader");a.classList.add("mysn-primary"),n.querySelector(".mysn-rd-head").appendChild(a),n.classList.remove("mysn-hidden"),n.scrollTop=0}setFree(t){this._free=t,this._hintText()}setChalk(t){this._chalk=t,this._lastGame&&this.sync(this._lastGame,this._lastCam)}setCueInfo(t){this._cueName=t.name,this._cueFine=t.fine>0,this._hintText()}showView(t,e,n,i){this.viewBox||(this.viewBox=Vt("div","mysn-view mysn-hidden"),this.root.appendChild(this.viewBox));let r=this.viewBox;if(r.classList.toggle("mysn-hidden",!t),r.classList.toggle("mysn-view-news",t==="news"||t==="magazine"||t==="chair"),this.root.classList.toggle("mysn-viewing",!!t),!t)return;if(r.innerHTML="",t==="rack"){r.appendChild(Vt("h3","","Stojan s t\xE1gami"));let c=Vt("div","mysn-cues");e.forEach((h,d)=>{let u=Vt("button","mysn-cue"+(h.id===n?" mysn-on":""),`<span class="mysn-cue-n">${d+1}</span><b>${h.name}</b><span class="mysn-cue-cat">${h.category}</span><span>\u0160pi\u010Dka ${h.tip}, sila ${Math.round(h.power*100)} %</span><span>D\u013A\u017Eka ${Math.round(h.len*100)} cm, Shift ${h.fine>0?"\xE1no":"nie"}</span><em>${h.note}</em>`);u.type="button",u.addEventListener("click",f=>{f.stopPropagation(),this.opts.onAction("cuePick",h.id)}),c.appendChild(u)}),r.appendChild(c)}let o=Vt("div","mysn-view-foot"),a=c=>{let h=Vt("a","mysn-news-item",`<span>${ye(c.s?c.s+(c.c?", "+c.c:""):c.c||"")}</span>${ye(c.t)}`);return h.href=c.u,h.target="_blank",h.rel="noopener",h};if(t==="chair"&&i){let c=Vt("div","mysn-news"),h=(d,u,f,g)=>{if(!u||!u.length)return;let _=Vt("div","mysn-news-head",`<b>${d}</b>`),m=this.button(f,g);m.classList.add("mysn-primary"),_.appendChild(m),c.appendChild(_),u.slice(0,9).forEach(p=>c.appendChild(a(p)))};h("HEDLAJNER",i.news,"Cel\xE9 (C)","reader"),h("Spr\xE1vy z RSS",i.rss,"Cel\xE9 (V)","readerRss"),r.appendChild(c)}if((t==="news"||t==="magazine")&&i&&i.length){let c=this.button("\u010C\xEDta\u0165 na cel\xFA obrazovku (C)","reader");c.classList.add("mysn-primary"),r.appendChild(c);let h=Vt("div","mysn-news");i.slice(0,12).forEach(d=>{let u=Vt("a","mysn-news-item",`<span>${ye(d.s?d.s+(d.c?", "+d.c:""):d.c||"")}</span>${ye(d.t)}`);u.href=d.u,u.target="_blank",u.rel="noopener",h.appendChild(u)}),r.appendChild(h)}let l={chair:"Poh\u013Ead z kresla: pohybom my\u0161i sa rozhliada\u0161, kolieskom pribli\u017Euje\u0161 (klikni, ak sa my\u0161 nezachytila). Vpravo spr\xE1vy: dr\u017E Ctrl a klikni na \u010Dl\xE1nok, C noviny Hedlajner a V spr\xE1vy z RSS na cel\xFA obrazovku. Pri hre o sk\xF3re \u010Das stoj\xED. F7 alebo Enter: sp\xE4\u0165 do hry.",news:"Titulka webu Hedlajner. Klik na titulok otvor\xED \u010Dl\xE1nok. F8, Enter alebo Esc: sp\xE4\u0165 do hry.",magazine:"Spr\xE1vy z RSS kan\xE1lov. Klik na titulok otvor\xED spr\xE1vu. F9, Enter alebo Esc: sp\xE4\u0165 do hry.",rack:"\u0160\xEDpky v\u013Eavo a vpravo vyberaj\xFA t\xE1go. Enter, F2 alebo Esc: sp\xE4\u0165 do hry.",board:"F1, Enter alebo Esc: sp\xE4\u0165 do hry.",score:"F4, Enter alebo Esc: sp\xE4\u0165 do hry.",trophies:"Rebr\xED\u010Dek o najlep\u0161ie sk\xF3re: poh\xE1re pre troch najlep\u0161\xEDch, vpravo 4. a\u017E 10. miesto (body a celkov\xFD \u010Das). F8, Enter alebo Esc: sp\xE4\u0165 do hry.",chalk:"Kriedujem \u0161pi\u010Dku t\xE1ga. Fal\u0161e bud\xFA 3 \xFAdery 5x silnej\u0161ie."};if(o.appendChild(Vt("span","",l[t]||"")),t!=="chalk"){let c=this.button("Sp\xE4\u0165 do hry","back");c.classList.add("mysn-primary"),o.appendChild(c)}r.appendChild(o)}showPower(t){let e=Math.round(t*100);this.powerFill.style.height=e+"%",this.powerKnob.style.top=e+"%",this.powerVal.textContent=e+" %"}sync(t,e){this._lastGame=t,this._lastCam=e;let n=t.stats,i=t.match;this.root.classList.toggle("mysn-online",!!i),this.modeLabel.textContent=i?"Partia":t.solo?"O najlep\u0161ie sk\xF3re":"Tr\xE9ning";let r=t.solo;if(r&&!i){let c=Math.max(0,Math.round(r.time));this.stats.innerHTML=`<span>Body <b>${t.soloScore}</b></span><span>S\xE9ria <b>${r.rules.brk}</b></span><span>Najvy\u0161\u0161ia <b>${r.best}</b></span><span>\u010Cas <b>${Math.floor(c/60)}:${String(c%60).padStart(2,"0")}</b></span><span>Hr\xE1 sa na <b>${ye(t.onText())}</b></span><span>Fauly <b>${r.fouls}</b></span><span class="${this._chalk>0?"mysn-chalk-on":"mysn-chalk-off"}">Krieda <b>${this._chalk>0?this._chalk:"F3"}</b></span>`}else if(i&&i.rules){let c=u=>ye(String(i.players[u].name).slice(0,16)),h=i.rules,d=u=>h.turn===u&&!h.over?" mysn-turn":"";this.stats.innerHTML=`<span class="mysn-sc${d(i.me)}">${c(i.me)} <b>${h.scores[i.me]}</b></span><span class="mysn-sc${d(1-i.me)}">${c(1-i.me)} <b>${h.scores[1-i.me]}</b>${i.players[1-i.me].online===!1?" <i>mimo</i>":""}</span><span>Na rade <b>${h.turn===i.me?"ty":c(h.turn)}</b></span><span>Hr\xE1 sa na <b>${ye(t.onText())}</b></span><span>S\xE9ria <b>${h.brk}</b></span><span class="${this._chalk>0?"mysn-chalk-on":"mysn-chalk-off"}">Krieda <b>${this._chalk>0?this._chalk:"F3"}</b></span>`}else this.stats.innerHTML=`<span>\xDAdery <b>${n.shots}</b></span><span>Spadnut\xE9 <b>${n.points>=0?n.potted:0}</b></span><span>Body <b>${n.points}</b></span><span>S\xE9ria <b>${n.run}</b></span><span>Najlep\u0161ia <b>${n.best}</b></span><span class="${this._chalk>0?"mysn-chalk-on":"mysn-chalk-off"}">Krieda <b>${this._chalk>0?this._chalk:"F3"}</b></span>`;let o=t.state,a=o==="place"?"Posu\u0148 bielu gu\u013Eu v D a potvr\u010F tla\u010Didlom Hotovo.":o==="watch"&&!t.message?"Na rade je s\xFAper.":o==="wait"?"\u010Cak\xE1m na v\xFDsledok s\xFAperovho \xFAderu\u2026":t.message;this.msg.textContent=[this._net,a].filter(Boolean).join("  "),this.msg.classList.toggle("mysn-hidden",!this.msg.textContent);let l=t.state;this.btnPlace.classList.toggle("mysn-hidden",l!=="place"),this.btnSkip.classList.toggle("mysn-hidden",l!=="moving"),this.btnUndo.disabled=l==="moving"||!t.history.length||!!i||!!r,this.btnHand.disabled=l!=="aim"||!!i||!!r,this.btnReset.disabled=!!i||!!r,this.powerBox.classList.toggle("mysn-off",l!=="aim");for(let c of Object.keys(this.camBtns))this.camBtns[c].classList.toggle("mysn-on",c===e)}};var Fo=class{constructor(){this.balls=Ss(),this.physics=new So(this.balls),this.state="aim",this.dir=0,this.history=[],this.respot=!0,this.stats={shots:0,potted:0,points:0,best:0,run:0},this.lastPots=[],this.message="",this.listeners=[]}get cue(){return this.balls[0]}on(t){this.listeners.push(t)}emit(t,e){for(let n of this.listeners)n(t,e)}reset(){let t=Ss();for(let e=0;e<t.length;e++)Object.assign(this.balls[e],t[e]);this.history=[],this.stats={shots:0,potted:0,points:0,best:this.stats.best,run:0},this.state="aim",this.dir=0,this.message="Nov\xE9 rozostavenie.",this.emit("change")}canShoot(){return this.state==="aim"}shoot(t,e=0,n=0){return this.canShoot()?(this.history.push({snap:tr(this.balls),stats:{...this.stats},dir:this.dir}),this.history.length>30&&this.history.shift(),this.physics.events=[],this.physics.firstContact=null,this.lastPots=[],Eo(this.cue,this.dir,t,e,n),this.stats.shots++,this.state="moving",this.message="",this.emit("shot",{power:t}),!0):!1}tick(t){if(this.state!=="moving")return[];let e=this.physics.advance(t),n=this.physics.events;this.physics.events=[];for(let i of n)i.type==="pot"&&this.lastPots.push(this.balls[i.a]);return e||this.settle(),n}settle(){let t=this.lastPots,e=t.includes(this.cue),n=0;for(let r of t)r.kind!=="white"&&(n+=vn[r.kind].value);let i=t.filter(r=>r.kind!=="white").length;if(this.stats.potted+=i,this.stats.points+=n,i>0&&!e?(this.stats.run+=n,this.stats.best=Math.max(this.stats.best,this.stats.run)):this.stats.run=0,this.respot)for(let r of t)r.kind!=="white"&&r.kind!=="red"&&this.spotColour(r);this.balls.every(r=>r.kind==="white"||!r.on)?this.message="St\xF4l je \u010Dist\xFD. V\xFDborne! Stla\u010D \u201ENov\xE9 rozostavenie\u201C.":e?this.message="Biela spadla. Polo\u017E ju do D.":i?this.message=t.filter(r=>r.kind!=="white").map(r=>vn[r.kind].name).join(", ")+(i>1?" v jamk\xE1ch.":" v jamke."):this.physics.firstContact||(this.message="Biela netrafila \u017Eiadnu gu\u013Eu."),e?this.startPlace():this.state="aim",this.emit("settle",{pots:t,points:n}),this.emit("change")}spotColour(t){let e=["black","pink","blue","brown","green","yellow"],n=(o,a)=>To(this.balls,o,a,t),i=null,r=on[t.kind];if(n(r.x,r.z))i=r;else for(let o of e)if(n(on[o].x,on[o].z)){i=on[o];break}if(!i){for(let o=r.x;o<1.78;o+=.002)if(n(o,r.z)){i={x:o,z:r.z};break}}i=i||r,t.p.x=i.x,t.p.z=i.z,t.on=!0,t.potted=null,t.moving=!1,t.v.x=t.v.z=0,t.w.x=t.w.y=t.w.z=0}startPlace(){let t=this.cue;t.on=!0,t.potted=null,t.moving=!1,t.v.x=t.v.z=0,t.w.x=t.w.y=t.w.z=0;let e=[[Pe-.1,0],[Pe-.1,.15],[Pe-.1,-.15],[Pe-.2,0]].find(([n,i])=>To(this.balls,n,i,t))||[Pe-.15,.05];t.p.x=e[0],t.p.z=e[1],this.state="place",this.emit("change")}movePlace(t,e){if(this.state!=="place")return!1;let n=Math.min(t,Pe),i=e,r=n-Pe,o=Math.hypot(r,i),a=li-5e-4;return o>a&&(n=Pe+r/o*a,i=i/o*a),!nu(n,i)||!To(this.balls,n,i,this.cue)?!1:(this.cue.p.x=n,this.cue.p.z=i,!0)}confirmPlace(){this.state==="place"&&(this.state="aim",this.message="",this.emit("change"))}ballInHand(){this.state==="aim"&&(this.state="place",this.emit("change"))}undo(){if(this.state==="moving"||!this.history.length)return!1;let t=this.history.pop();return er(this.balls,t.snap),this.stats=t.stats,this.dir=t.dir,this.state="aim",this.message="\xDAder vr\xE1ten\xFD.",this.emit("change"),!0}finish(){if(this.state!=="moving")return[];let t=[];for(let e=0;e<600&&this.state==="moving";e++)t=t.concat(this.tick(.05));return t}aimAtNearest(){let t=this.cue,e=null,n=1/0;for(let i of this.balls){if(i===t||!i.on)continue;let r=Math.hypot(i.p.x-t.p.x,i.p.z-t.p.z);r<n&&r>2*.02625&&(n=r,e=i)}e&&(this.dir=Math.atan2(e.p.z-t.p.z,e.p.x-t.p.x))}};var nr={red:1,yellow:2,green:3,brown:4,blue:5,pink:6,black:7},ir=["yellow","green","brown","blue","pink","black"],Hn={red:"\u010Derven\xE1",yellow:"\u017Elt\xE1",green:"zelen\xE1",brown:"hned\xE1",blue:"modr\xE1",pink:"ru\u017Eov\xE1",black:"\u010Dierna",white:"biela",colour:"farba"};function fu(s=0){return{scores:[0,0],turn:s,on:"red",brk:0,over:!1,winner:null}}function cc(s){return s==="red"?"\u010Derven\xE1":s==="colour"?"\u013Eubovo\u013En\xE1 farba":s==="done"?"koniec framu":Hn[s]||s}function hc(s,t){if(s.on==="red"||s.on==="colour")return t*8+(s.on==="colour"?7:0)+27;let e=ir.indexOf(s.on);return e<0?0:ir.slice(e).reduce((n,i)=>n+nr[i],0)}function uc(s,t){let e={...s,scores:[...s.scores]},n=t.first||null,i=t.pots||[],r=i.includes("white"),o=i.filter(p=>p!=="white"),a=t.reds,l=e.turn,c="",h=0,d=4,u=[],f=n&&n!=="white"?n:null,g=p=>{p&&nr[p]&&(d=Math.max(d,nr[p]))};if(e.on==="red"){f?f!=="red"&&(c=`Prv\xE1 trafen\xE1 gu\u013Ea mus\xED by\u0165 \u010Derven\xE1 (trafen\xE1 ${Hn[f]}).`,g(f)):c="Biela netrafila \u017Eiadnu gu\u013Eu.";for(let p of o)p!=="red"&&(u.push(p),g(p),c=c||`Spadla ${Hn[p]}, hralo sa na \u010Derven\xFA.`);!c&&!r&&(h=o.filter(p=>p==="red").length)}else if(e.on==="colour"){let p=f&&f!=="red"?f:null;f?p||(c="Po \u010Dervenej treba trafi\u0165 farbu (trafen\xE1 \u010Derven\xE1)."):c="Biela netrafila \u017Eiadnu gu\u013Eu.",g(p);for(let E of o)E!=="red"&&u.push(E),E!==p&&(g(E==="red"?null:E),c=c||`Spadla ${Hn[E]}, nominovan\xE1 bola ${Hn[p]}.`);!c&&!r&&o.includes(p)&&(h=nr[p])}else{let p=e.on;g(p),f?f!==p&&(c=`Prv\xE1 trafen\xE1 gu\u013Ea mus\xED by\u0165 ${Hn[p]} (trafen\xE1 ${Hn[f]}).`,g(f)):c="Biela netrafila \u017Eiadnu gu\u013Eu.";for(let E of o)g(E),E!==p&&(c=c||`Spadla ${Hn[E]}, hralo sa na ${Hn[p]}.`);!c&&!r&&o.includes(p)&&(h=nr[p]);for(let E of o)E!=="red"&&!(E===p&&h>0)&&u.push(E)}r&&!c&&(c="Biela spadla do jamky.");let _="";if(c)e.scores[1-l]+=d,e.turn=1-l,e.brk=0,_=`Faul: ${c} S\xFAper dost\xE1va ${d} ${d<5?"body":"bodov"}.`,(e.on==="red"||e.on==="colour")&&(e.on=a>0?"red":"yellow");else if(h>0){if(e.scores[l]+=h,e.brk+=h,e.on==="red")e.on="colour";else if(e.on==="colour")e.on=a>0?"red":"yellow";else{let p=ir.indexOf(e.on);e.on=p<ir.length-1?ir[p+1]:"done"}_=`+${h}, s\xE9ria ${e.brk}.`}else e.turn=1-l,e.brk=0,(e.on==="red"||e.on==="colour")&&(e.on=a>0?"red":"yellow"),_="Bez bodov, na rade je s\xFAper.";let m=s.on==="black";if(e.on==="done"||m&&c){if(e.scores[0]===e.scores[1])return e.on="black",e.turn=c?e.turn:1-l,u.includes("black")||u.push("black"),_+=" Rem\xEDza, \u010Dierna sa vracia na spot.",{state:e,points:h,foul:!!c,penalty:c?d:0,respot:u,inHand:!0,msg:_};e.over=!0,e.on="done",e.winner=e.scores[0]>e.scores[1]?0:1;let p=u.indexOf("black");p>=0&&u.splice(p,1)}return{state:e,points:h,foul:!!c,penalty:c?d:0,respot:u,inHand:r,msg:_}}var sr="mySnookerSolo",zo=class extends Fo{constructor(){super(),this.match=null,this.remote=!1,this.onNet=null,this.solo=null,this.onSolo=null}startSolo(t){this.match=null,this.remote=!1,this.history=[];let e=null;if(!t)try{e=JSON.parse(window.localStorage.getItem(sr)||"null")}catch{e=null}if(e&&e.balls&&e.rules&&!e.done){if(er(this.balls,e.balls),this.solo={rules:e.rules,time:e.time||0,shots:e.shots||0,fouls:e.fouls||0,best:e.best||0,done:!1},this.message="Pokra\u010Duje\u0161 v rozohranom frame.",e.inHand){this.startPlace();return}this.state="aim"}else{let n=Ss();for(let i=0;i<n.length;i++)Object.assign(this.balls[i],n[i]);this.solo={rules:fu(0),time:0,shots:0,fouls:0,best:0,done:!1},this.message="Nov\xFD frame: potop \u010Do najviac bodov. Rozb\xEDja\u0161 z D.",this.saveSolo(!0),this.startPlace();return}this.aimAtNearest(),this.emit("change")}get soloScore(){let t=this.solo&&this.solo.rules;return t?Math.max(0,t.scores[0]-t.scores[1]):0}saveSolo(t){if(this.solo)try{if(this.solo.done){window.localStorage.removeItem(sr);return}let e=this.solo;window.localStorage.setItem(sr,JSON.stringify({balls:tr(this.balls),rules:e.rules,time:Math.round(e.time),shots:e.shots,fouls:e.fouls,best:e.best,inHand:!!t}))}catch{}}saveSoloTime(){let t=this.solo;if(!(!t||t.done))try{let e=JSON.parse(window.localStorage.getItem(sr)||"null");e&&!e.done&&(e.time=Math.round(t.time),window.localStorage.setItem(sr,JSON.stringify(e)))}catch{}}stopSolo(){this.solo&&this.saveSolo(this.state==="place"),this.solo=null,super.reset()}settleSolo(){let t=this.solo,e=this.lastPots.map(l=>l.kind),n=this.balls.filter(l=>l.kind==="red"&&l.on).length,i=this.physics.firstContact,r=uc(t.rules,{first:i?i.kind:null,pots:e,reds:n});for(let l of r.respot){let c=this.balls.find(h=>h.kind===l);c&&this.spotColour(c)}let o={...r.state,turn:0};r.foul&&(t.fouls++,o.brk=0),t.rules=o,t.shots++,t.best=Math.max(t.best,o.brk);let a=this.soloScore;if(o.over||o.on==="done"){t.done=!0,t.rules.over=!0,this.state="over",this.message=`Frame je dohran\xFD: ${a} ${a===1?"bod":a<5&&a>1?"body":"bodov"} za ${dc(t.time)}, najvy\u0161\u0161ia s\xE9ria ${t.best}.`,this.saveSolo(!1),this.emit("settle",{pots:this.lastPots,points:r.points}),this.emit("change"),this.onSolo&&this.onSolo({points:a,seconds:Math.round(t.time),shots:t.shots,fouls:t.fouls,brk:t.best});return}if(this.message=r.points>0?`+${r.points}, s\xE9ria ${o.brk}.`:"Bez bodov, s\xE9ria sa skon\u010Dila.",r.foul&&(this.message=`Faul: ${r.msg.replace(/^Faul: /,"").replace(/ Súper dostáva (\d+) (body|bodov)\./,"")} M\xEDnus ${r.penalty} ${r.penalty<5?"body":"bodov"}.`),this.emit("settle",{pots:this.lastPots,points:r.points}),r.inHand){this.saveSolo(!0),this.startPlace();return}this.state="aim",this.saveSolo(!1),this.emit("change")}get online(){return!!this.match}get myTurn(){let t=this.match;return!t||t.turn===t.me&&!t.rules.over}canShoot(){return super.canShoot()&&(!this.match||this.myTurn&&!this.remote&&this.match.status==="active")}startMatch(t){this.solo&&this.stopSolo(),this.match={id:t.id,me:t.me,seq:-1,turn:0,rules:null,inHand:!1,players:t.players,status:t.status},this.history=[],this.remote=!1,this.applyState(t.state,t.seq)}endMatch(){this.match=null,this.solo=null,this.remote=!1,this.reset()}applyState(t,e){let n=this.match;if(t){if(t.balls)er(this.balls,t.balls);else{let i=Ss();for(let r=0;r<i.length;r++)Object.assign(this.balls[r],i[r])}for(let i of this.balls)i.moving=!1;if(n.seq=e,n.rules={...t.rules,scores:[...t.rules.scores]},n.turn=n.rules.turn,n.inHand=!!t.inHand,this.remote=!1,this.message=t.msg||"",n.rules.over)this.state="over";else if(n.turn===n.me){if(n.inHand){this.startPlace();return}this.state="aim",this.aimAtNearest()}else n.inHand&&this.startPlace(),this.state="watch";this.emit("change")}}shoot(t,e=0,n=0){if(!this.canShoot())return!1;let i=this.cue,r={dir:this.dir,power:t,side:e,top:n,cx:i.p.x,cz:i.p.z};return super.shoot(t,e,n)?(this.match&&this.onNet&&this.onNet("shot",{seq:this.match.seq+1,shot:r}),!0):!1}playRemote(t,e=!1){let n=this.cue;n.on=!0,n.potted=null,n.p.x=t.cx,n.p.z=t.cz,this.dir=t.dir,this.physics.events=[],this.physics.firstContact=null,this.lastPots=[],Eo(n,t.dir,t.power,t.side,t.top),this.remote=!e,this.state="moving",this.message="",this.emit("shot",{power:t.power})}settle(){if(this.solo&&!this.match){this.settleSolo();return}if(!this.match){super.settle();return}if(this.remote){this.remote=!1,this.state="wait",this.emit("change");return}let t=this.match,e=this.lastPots.map(c=>c.kind),n=this.balls.filter(c=>c.kind==="red"&&c.on).length,i=this.physics.firstContact,r=uc(t.rules,{first:i?i.kind:null,pots:e,reds:n});for(let c of r.respot){let h=this.balls.find(d=>d.kind===c);h&&this.spotColour(h)}r.inHand&&(this.cue.on=!1);let o=t.players.map(c=>c.name),a={balls:tr(this.balls),rules:r.state,inHand:r.inHand,msg:`${o[t.me]}: ${r.msg}`+(r.state.over?` Koniec partie, v\xED\u0165az: ${o[r.state.winner]}.`:r.state.turn!==t.me?` Na rade je ${o[r.state.turn]}.`:""),last:{by:t.me,points:r.points,foul:r.foul,penalty:r.penalty}},l=t.seq+1;this.applyState(a,l),this.emit("settle",{pots:this.lastPots,points:r.points}),this.onNet&&this.onNet("settle",{seq:l,state:a,points:r.points,foul:r.foul})}onText(){return this.solo?cc(this.solo.rules.on):this.match&&this.match.rules?cc(this.match.rules.on):""}undo(){return this.match||this.solo?!1:super.undo()}reset(){this.match||this.solo||super.reset()}ballInHand(){!this.match&&!this.solo&&super.ballInHand()}};function dc(s){let t=Math.max(0,Math.round(s)),e=Math.floor(t/3600),n=Math.floor(t%3600/60),i=String(t%60).padStart(2,"0");return e?`${e}:${String(n).padStart(2,"0")}:${i}`:`${n}:${i}`}var fc=class{constructor(t){this.base=t.restUrl||"/wp-json/my-snooker/v1/",this.nonce=t.nonce||"",this.down=!1}async call(t,e,n="POST"){let i;try{i=await fetch(this.base+t,{method:n,credentials:"same-origin",cache:"no-store",headers:{"Content-Type":"application/json","X-WP-Nonce":this.nonce},body:e?JSON.stringify(e):void 0})}catch{this.down=!0;let a=new Error("Spojenie so serverom sa preru\u0161ilo.");throw a.net=!0,a}this.down=!1;let r=await i.json().catch(()=>null);if(!i.ok){let o=new Error(r&&r.message||"Chyba servera "+i.status);throw o.status=i.status,o}return r}},Bo=class{constructor(t,e,n){this.cfg=t,this.net=new fc(t),this.game=e,this.hooks=n,this.data={live:[],invites:[],outgoing:null,paused:[]},this.lobbyOpen=!1,this.matchId=0,this.info=null,this.queue=[],this.sending=!1,this.played=new Set,this.pendingInfo=null,this.lastAimv=-1,this.aimTarget=null,this._aimSent="",this._aimT=0,this._pollT=0,this._polling=!1,this.oppOnline=!0,e.onNet=(i,r)=>this.send(i,r),this.ping(),this._pingTimer=setInterval(()=>this.ping(),5e3)}get inMatch(){return!!this.game.match}async ping(){try{let t=await this.net.call("ping",{state:this.inMatch?"match":this.lobbyOpen?"lobby":"training"});t.nonce&&(this.net.nonce=t.nonce);let e=(this.data.invites||[]).map(i=>i.id).join(",");this.data=t;let n=(t.invites||[]).map(i=>i.id).join(",");n&&n!==e&&!this.inMatch&&this.hooks.invite(t.invites[0]),t.outgoing&&t.outgoing.status==="declined"&&this._waitFor===t.outgoing.id&&(this._waitFor=0,this.hooks.toast(`${t.outgoing.to.name}: pozv\xE1nka odmietnut\xE1.`)),t.match&&!this.inMatch&&this.join(t.match),this.hooks.lobby(t)}catch{this.hooks.status()}}async invite(t){try{let e=await this.net.call("invite",{user:t});this._waitFor=e.id,await this.ping()}catch(e){this.hooks.toast(e.message)}}async cancelInvite(){let t=this.data.outgoing;t&&(this._waitFor=0,await this.net.call("cancel",{id:t.id}).catch(()=>null),await this.ping())}async answer(t,e){try{await this.net.call("answer",{id:t,accept:e?1:0}),this.data.invites=(this.data.invites||[]).filter(n=>n.id!==t),e?await this.join(t):await this.ping()}catch(n){this.hooks.toast(n.message),this.ping()}}async resume(t){try{await this.net.call("resume",{id:t}),await this.join(t)}catch(e){this.hooks.toast(e.message)}}async leave(t){let e=this.matchId;e&&(await this.flush(),await this.net.call("leave",{id:e,mode:t}).catch(()=>null),this.stopMatch(t==="resign"?"Partia je vzdan\xE1.":"Partia je preru\u0161en\xE1. Pokra\u010Dova\u0165 sa d\xE1 v ponuke Hra\u0165 s priate\u013Eom."))}async join(t){if(!this._joining){this._joining=!0;try{let e=await this.net.call("match/"+t+"?t="+Date.now(),null,"GET");if(e.status!=="active"){this.hooks.toast(e.status==="paused"?"Partia je preru\u0161en\xE1.":"Partia u\u017E skon\u010Dila.");return}this.matchId=e.id,this.info=e,this.played=new Set,this.queue=[],this.lastAimv=e.aimv,this.game.startMatch(e),this.hooks.started(e),this.recover(e),this.oppOnline=e.players[1-e.me].online}catch(e){this.hooks.toast(e.message)}finally{this._joining=!1}}}recover(t){let e=t.shot;e&&e.seq===t.seq+1&&(this.played.add(e.seq),this.game.playRemote(e,e.by===t.me))}stopMatch(t){this.matchId=0,this.info=null,this.queue=[],this.aimTarget=null,this.game.endMatch(),this.hooks.ended(t)}send(t,e){this.matchId&&(this.queue.push({type:t,d:{id:this.matchId,...e}}),this.flush())}async flush(){return this.sending?this._flushP:(this.sending=!0,this._flushP=(async()=>{for(;this.queue.length;){let t=this.queue[0];try{await this.net.call(t.type,t.d),this.queue.shift()}catch(e){e.net||e.status&&e.status>=500?(this.hooks.status(),await new Promise(n=>setTimeout(n,2e3))):this.queue.shift()}}this.sending=!1,this.hooks.status()})(),this._flushP)}update(t,e){if(!this.matchId)return;let n=this.game,i=performance.now(),r=this._lastNow?i-this._lastNow:0;this._lastNow=i,this._pollT+=r;let o=n.state==="watch"||n.state==="wait"||n.remote;if(!this._polling&&this._pollT>=(o?700:2500)&&(this._pollT=0,this.poll()),this._aimT+=r,e&&n.myTurn&&(n.state==="aim"||n.state==="place")&&this._aimT>=300){let a={seq:n.match.seq,dir:+e.dir.toFixed(4),cx:+e.cx.toFixed(4),cz:+e.cz.toFixed(4),pull:+e.pull.toFixed(3),side:+e.side.toFixed(2),top:+e.top.toFixed(2),place:n.state==="place"?1:0},l=JSON.stringify(a);l!==this._aimSent&&(this._aimT=0,this._aimSent=l,this.net.call("aim",{id:this.matchId,aim:a}).catch(()=>null))}if(this.pendingInfo&&n.state==="wait"){let a=this.pendingInfo;this.pendingInfo=null,this.applyInfo(a)}}async poll(){this._polling=!0;try{let t=await this.net.call("match/"+this.matchId+"?t="+Date.now(),null,"GET");this.applyInfo(t)}catch(t){(t.status===403||t.status===404)&&this.stopMatch("Partia sa nena\u0161la."),this.hooks.status()}finally{this._polling=!1}}applyInfo(t){let e=this.game;if(!e.match||t.id!==this.matchId)return;this.info=t;let n=t.players[1-t.me];if(n.online!==this.oppOnline&&(this.oppOnline=n.online,this.hooks.status()),e.match.players=t.players,e.match.status=t.status,t.status==="finished"&&!(t.seq>e.match.seq)){let i=t.winner===t.players[t.me].id;this.stopMatch(t.result==="resign"?i?`${n.name} sa vzd\xE1va partie. V\xED\u0165azstvo je tvoje!`:"Partia je vzdan\xE1.":i?`V\xED\u0165azstvo je tvoje! Sk\xF3re ${t.scores[t.me]} : ${t.scores[1-t.me]}.`:`V\xED\u0165az partie: ${n.name}, sk\xF3re ${t.scores[1-t.me]} : ${t.scores[t.me]}.`);return}if(t.status==="paused"){this.stopMatch(`Partia je preru\u0161en\xE1 (${this.oppOnline?"s\xFAper ju preru\u0161il":"s\xFAper dlho neodpovedal"}). Dokon\u010Di\u0165 sa d\xE1 v ponuke Hra\u0165 s priate\u013Eom, Rozohran\xE9 partie.`);return}if(t.seq>e.match.seq){if(e.state==="moving"){this.pendingInfo=t;return}if(this.queue.length)return;this.aimTarget=null,e.applyState(t.state,t.seq),t.status==="finished"&&this.applyInfo(t);return}if(t.shot&&t.shot.seq===e.match.seq+1&&t.shot.by!==t.me&&!this.played.has(t.shot.seq)&&e.state==="watch"){this.played.add(t.shot.seq),this.aimTarget=null,e.playRemote(t.shot,!1);return}t.aim&&t.aimv!==this.lastAimv&&e.state==="watch"&&t.aim.seq===e.match.seq&&(this.lastAimv=t.aimv,this.aimTarget=t.aim)}async scores(){try{return await this.net.call("scores?t="+Date.now(),null,"GET")}catch{return null}}async saveScore(t){for(let e=0;e<5;e++)try{return await this.net.call("score",t)}catch(n){if(!n.net)return{error:n.message};await new Promise(i=>setTimeout(i,3e3))}return{error:"Sk\xF3re sa nepodarilo ulo\u017Ei\u0165, spojenie so serverom nefunguje."}}statusText(){return this.net.down?"Spojenie so serverom sa preru\u0161ilo, sk\xFA\u0161am znova. Partia je ulo\u017Een\xE1.":this.inMatch&&!this.oppOnline?"S\xFAper je mimo hry, \u010Dak\xE1m na jeho n\xE1vrat. Po 10 min\xFAtach sa partia preru\u0161\xED a d\xE1 sa v nej pokra\u010Dova\u0165 nesk\xF4r.":""}};var gu="mySnookerSettings",pu=.5;function O_(){let t={lines:!1,quality:/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)?"low":"high",volume:.8,respot:!0,contact:!0,camera:"cue",cue:"club"};try{let e=window.localStorage.getItem(gu);if(e)return{...t,...JSON.parse(e)}}catch{}return t}function pc(s){try{window.localStorage.setItem(gu,JSON.stringify(s))}catch{}}function F_(){try{let s=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(s.getContext("webgl2")||s.getContext("webgl")))}catch{return!1}}function z_(s,t={}){if(!F_())return s.innerHTML='<div class="mysn-nogl">Tento prehliada\u010D nepodporuje 3D grafiku (WebGL). Sk\xFAs aktu\xE1lny Chrome, Firefox, Edge alebo Safari.</div>',null;let e=O_();delete e.guide,e.lines=e.lines===!0;let n=e.quality==="high",i=new jr({antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,n?2:1.25)),i.outputColorSpace=ee,i.toneMapping=Wl,i.toneMappingExposure=1.05,i.shadowMap.enabled=n,i.shadowMap.type=Gl,i.domElement.className="mysn-canvas",s.appendChild(i.domElement);let r=new ds;cu(r,e.quality);let o=au(r,e.quality,{news:t.news,rss:t.rss,site:t.site}),a=lu(i);r.add(a.group);let l=new zo,c=t.user||null;l.respot=!!e.respot,l.aimAtNearest();let h=new us(i),d=h.fromScene(new Mo,.04).texture;h.dispose();let u=new Ro(r,l.balls,e.quality,d),f=ic(e.cue),g=new Po(r,f);o.selectCue(f.id);let _=new Io(r),m=new Uo(i);e.camera="cue",m.setMode("cue");let p=new ko;p.setVolume(e.volume);let E=document.createElement("div");s.appendChild(E);let v={side:0,top:0},y=!1,F=!1,C=!1,U=!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),L=null,S={yaw:0,pitch:0},M=!1,P=3,J=.2,W=0,q=-1,it=0,$={chalkFreeze:null},ft={s:.022,h:.0115,d:.009},Z=new de;{let I=new Gt({color:16052970,roughness:.8}),D=new Gt({color:3108822,roughness:.95}),at=(Ut,Tt,At,qt,Xt,ct,T)=>{let B=new Ct(new $t(Ut,Tt,At),T);B.position.set(qt,Xt,ct),Z.add(B)},{s:Q,h:lt,d:Et}=ft,ot=-Q/2+Et/2;at(Q-Et,Q,Q,Et/2,0,0,I),at(Et,(Q-lt)/2,Q,ot,(Q+lt)/4,0,I),at(Et,(Q-lt)/2,Q,ot,-(Q+lt)/4,0,I),at(Et,lt,(Q-lt)/2,ot,0,(Q+lt)/4,I),at(Et,lt,(Q-lt)/2,ot,0,-(Q+lt)/4,I),at(.0012,lt,lt,-Q/2+Et-6e-4,0,0,D);let bt=8e-4;at(Et,bt,lt,ot,lt/2-bt/2,0,D),at(Et,bt,lt,ot,-lt/2+bt/2,0,D),at(Et,lt,bt,ot,0,lt/2-bt/2,D),at(Et,lt,bt,ot,0,-lt/2+bt/2,D)}Z.visible=!1,Z.rotation.order="YXZ";let dt={up:.1,back:.22};r.add(Z);let vt=()=>{let I=l.match,D=I&&I.rules?{names:I.players.map(Et=>String(Et.name).slice(0,18)),scores:I.rules.scores,turn:I.rules.over?-1:I.rules.turn,brk:I.rules.brk,on:l.onText(),left:hc(I.rules,l.balls.filter(Et=>Et.kind==="red"&&Et.on).length)}:null,at=l.solo,Q=l.balls.filter(Et=>Et.kind==="red"&&Et.on).length,lt=at&&!I?[["Body",l.soloScore],["S\xE9ria / najvy\u0161\u0161ia",`${at.rules.brk} / ${at.best}`],["\u010Cas",dc(at.time)],["Hr\xE1 sa na",l.onText()],["Zost\xE1va na stole",hc(at.rules,Q)]]:null;o.updateScore(l.stats,{cue:f.name,chalk:W,mode:D?"Partia cez internet":at?"O najlep\u0161ie sk\xF3re":"Tr\xE9ning",match:D,rows:lt})},yt=I=>{if(L===I){kt();return}if(!(l.state==="moving"||q>=0)&&!(I==="chalk"&&l.state!=="aim")){if(L=I,pt.blocked=!0,I!=="chalk"&&I!=="chair"&&pt.uncapture(),k.showMenu(!1),I==="chalk"){let D=Math.cos(l.dir),at=Math.sin(l.dir),Q=g.pivot.position.clone().add(new R(-D*dt.back,dt.up,-at*dt.back)),lt=Q.clone().add(new R(-at*.22-D*.08,.09,D*.22-at*.08));m.setView(lt,Q),q=0,it=performance.now(),Z.visible=!0}else{let D=o[I];if(m.setView(D.pos,D.look.clone()),I==="chair"){let at=D.look.clone().sub(D.pos);S.yaw=Math.atan2(at.z,at.x),S.pitch=Math.atan2(at.y,Math.hypot(at.x,at.z))}}I==="trophies"&&Mt(),k.showView(I,Ze,f.id,I==="magazine"?o.rssItems:I==="chair"?{news:o.newsItems,rss:o.rssItems}:o.newsItems)}},kt=()=>{L&&(L=null,pt.blocked=!c,m.setViewZoom(1),k.toggleReader(null),q=-1,Z.visible=!1,m.setMode(l.state==="place"||M?"top":"cue"),k.showView(null),pt.capture())},Pt=I=>{f=ic(I),e.cue=f.id,pc(e),g.setSpec(f),pt.setCue(f),o.selectCue(f.id),k.showView(L,Ze,f.id),k.setCueInfo(f),vt()},Y=I=>{let D=I*f.power,at=f.grip*(W>0?1:J);l.shoot(D,v.side*at,v.top*at)&&(W>0&&W--,k.setChalk(W),vt(),p.cue(D),k.sync(l,m.mode))},rt=I=>{y=!1,m.setMode(I),e.camera=I,pc(e),k.sync(l,m.mode)},_t={unlock:()=>p.unlock(),camera:I=>rt(I),undo:()=>l.undo(),hand:()=>l.ballInHand(),fine:I=>{l.state==="aim"&&(l.dir+=I*.05*Math.PI/180)},skip:()=>{for(let I of l.finish())I.type==="pot"&&p.pot()},reset:()=>{l.reset(),l.aimAtNearest()},place:()=>{l.confirmPlace(),l.aimAtNearest()},resume:()=>{if(l.solo&&l.solo.done){_t.training();return}k.showMenu(!1),k.openLobby(!1),pt.capture()},solo:()=>G(!1),soloNew:()=>G(!0),training:()=>{l.stopSolo(),l.aimAtNearest(),ut(),k.showMenu(!1),pt.capture()},leaderboard:()=>{k.showMenu(!1),L!=="trophies"&&yt("trophies")},trophies:()=>yt("trophies"),trophies:()=>{k.showLeaderboard(null),yt("trophies"),tt()},partyNext:()=>{k.celebrate(null),k.showMenu(!1),pt.capture()},partyBoard:()=>{k.celebrate(null),_t.leaderboard()},leaderboardClose:()=>{k.showLeaderboard(null),k.menuOpen()||pt.capture()},lobby:()=>{ht&&(ht.lobbyOpen=!0,k.openLobby(!0),ht.ping())},lobbyClose:()=>{ht&&(ht.lobbyOpen=!1),k.openLobby(!1)},invite:I=>ht&&ht.invite(I),cancelInvite:()=>ht&&ht.cancelInvite(),accept:I=>{k.hideToast(),ht&&ht.answer(I,!0)},decline:I=>{k.hideToast(),ht&&ht.answer(I,!1)},resumeMatch:I=>ht&&ht.resume(I),pauseMatch:()=>ht&&ht.leave("pause"),resign:()=>ht&&ht.leave("resign"),home:()=>{window.location.href=t.homeUrl||"/"},settings:()=>k.toggle(k.panel),help:()=>yt("board"),board:()=>yt("board"),rack:()=>yt("rack"),score:()=>yt("score"),chair:()=>yt("chair"),news:()=>yt("news"),magazine:()=>yt("magazine"),reader:()=>k.toggleReader(L==="magazine"?"rss":"news",L==="magazine"?o.rssItems:o.newsItems),readerRss:()=>k.toggleReader("rss",o.rssItems),chalk:()=>yt("chalk"),top:()=>{L||(M=!M,y=!1,m.setMode(M||l.state==="place"?"top":"cue"))},back:()=>kt(),cuePick:I=>Pt(I),setting:({k:I,v:D})=>{e[I]=D,I==="volume"&&p.setVolume(D),I==="respot"&&(l.respot=!!D),pc(e)}},k=new Oo(E,{homeUrl:t.homeUrl,user:c,loginUrl:t.loginUrl,settings:e,onAction:(I,D)=>{p.unlock(),_t[I]&&_t[I](D),k.sync(l,m.mode)},onPower:(I,D)=>pt.setPower(I,D),onRelease:()=>pt.release(),onSpin:(I,D)=>v={side:I,top:D}}),pt=new No(i.domElement,m,l,{unlock:()=>p.unlock(),shoot:Y,spinReset:()=>k.setSpin(0,0),spin:(I,D)=>k.setSpin(Math.max(-1,Math.min(1,k.side+I)),Math.max(-1,Math.min(1,k.top+D))),lock:I=>{if(k.setLock(I),I&&!c){pt.uncapture();return}I?(F=!0,C=!1,k.setFree(!1),k.showMenu(!1)):U&&!L&&!C&&!k.partyOpen()&&k.showMenu(!0,F)},stroke:I=>k.setStroke(I),look:(I,D)=>{if(L!=="chair"||C)return;let at=.0025/(m.viewZoom||1);S.yaw+=I*at,S.pitch=Math.max(-1.2,Math.min(.9,S.pitch-D*at));let Q=Math.cos(S.pitch);m.viewLook.copy(m.viewPos).add(new R(Math.cos(S.yaw)*Q,Math.sin(S.pitch),Math.sin(S.yaw)*Q))},viewWheel:I=>{L==="chair"&&m.setViewZoom((m.viewZoom||1)*Math.pow(.85,I))},viewDown:I=>{L==="chair"&&I.button===0&&pt.capture()},key:I=>{let D=I.toLowerCase();if(!c)return!0;if(D==="ctrl-down"||D==="ctrl-up")return L&&L!=="chair"||(D==="ctrl-down"&&pt.captured?(C=!0,pt.uncapture()):D==="ctrl-up"&&C&&(C=!1,k.showMenu(!1),pt.capture()),k.setFree(C)),!0;if(D==="f6")return p.unlock(),o.toggleDoor(),p.doorCreak(),!0;if((D==="escape"||D==="enter")&&k.partyOpen())return k.opts.onAction("partyNext"),!0;if(D==="escape"&&k.leaderboardOpen())return k.opts.onAction("leaderboardClose"),!0;let at={f1:"board",f2:"rack",f3:"chalk",f4:"score",f7:"chair",f8:"trophies"};if(at[D])return k.opts.onAction(at[D]),!0;if(D==="tab")return k.opts.onAction("top"),!0;if(L){if(L==="chair"&&D==="v")return k.opts.onAction("readerRss"),!0;if((L==="news"||L==="magazine"||L==="chair")&&D==="c")return k.opts.onAction("reader"),!0;if(D==="escape"&&k.readerOpen())return k.toggleReader(null),!0;if((D==="escape"||D==="enter")&&L!=="chalk")return kt(),!0;if(L==="rack"&&(D==="arrowleft"||D==="arrowright")){let lt=Ze.findIndex(Et=>Et.id===f.id);return Pt(Ze[(lt+(D==="arrowleft"?Ze.length-1:1))%Ze.length].id),!0}return!1}let Q={z:"undo",backspace:"undo",b:"hand",r:"reset",s:"skip",h:"help"}[D];return Q?(k.opts.onAction(Q),!0):!1}});c||(pt.blocked=!0);let ht=null,z=()=>{if(!c)return["guest"];let I=l.match;return I?["match",I.players[1-I.me].name]:l.solo&&!l.solo.done?["solo"]:["training"]},ut=()=>k.setMenu(...z()),G=I=>{l.match||(kt(),k.showLeaderboard(null),M=!1,l.startSolo(I),m.setMode(l.state==="place"?"top":"cue"),ut(),k.showMenu(!1),pt.capture(),k.sync(l,m.mode),vt())},tt=async I=>{let D=I||(ht?await ht.scores():null);return D&&D.top&&o.setTrophies(D.top),D},A=async I=>{pt.uncapture(),k.showLeaderboard(void 0,I);let D=ht?await ht.scores():null;tt(D),k.leaderboardOpen()&&k.showLeaderboard(D,I)},Mt=async I=>{let D=I||(ht?await ht.scores():null);D&&D.top&&o.setTrophies(D.top)};Mt(),l.onSolo=async I=>{let D=ht?await ht.saveScore(I):{error:"Sk\xF3re sa zapisuje len prihl\xE1sen\xFDm."},at=D&&!D.error;at&&tt(D);let Q=at&&D.mine&&D.mine.points===I.points&&D.mine.seconds===I.seconds;pt.uncapture(),k.showLeaderboard(null),k.showMenu(!1),at&&Mt(D),k.celebrate({...I,rank:at?D.rank:0,players:at?D.players:0,best:Q,error:at?"":D&&D.error}),p.unlock(),p.pot&&p.pot(),l.startSolo(!0),m.setMode(l.state==="place"?"top":"cue"),ut(),k.sync(l,m.mode),vt()},c&&t.restUrl&&(ht=new Bo(t,l,{lobby:I=>{k.renderLobby(I),k.showInvites(l.match?[]:I.invites)},invite:I=>!k.menuOpen()&&k.toast(`${I.from.name} \u0165a poz\xFDva na partiu.${pt.captured?" Esc alebo Ctrl uvo\u013En\xED my\u0161.":""}`,I),toast:I=>k.toast(I),started:I=>{kt(),k.openLobby(!1),ht.lobbyOpen=!1,k.hideToast(),k.showInvites([]),M=!1,m.setMode(l.state==="place"?"top":"cue"),ut(),k.showMenu(!1),k.toast(`Partia s hr\xE1\u010Dom ${I.players[1-I.me].name}. ${I.turn===I.me?"Si na rade.":"Na rade je s\xFAper."}`),k.sync(l,m.mode),vt()},ended:I=>{kt(),ut(),k.showMenu(!0,!0),k.menuNote(I),pt.uncapture(),l.aimAtNearest(),k.sync(l,m.mode),vt()},status:()=>k.setNet(ht?ht.statusText():"")})),tt(),pt.setCue(f),k.setCueInfo(f),k.setChalk(W),vt(),l.on(I=>{L||M||(l.state==="place"&&m.mode==="cue"?(m.setMode("top"),y=!0):l.state!=="place"&&y&&(y=!1,m.mode==="top"&&m.setMode("cue"))),(I==="change"||I==="settle")&&(k.sync(l,m.mode),vt())});let st=()=>{let I=s.clientWidth||window.innerWidth,D=s.clientHeight||window.innerHeight;i.setSize(I,D),m.resize(I,D)};window.addEventListener("resize",st),window.addEventListener("pagehide",()=>l.saveSoloTime()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&l.saveSoloTime()}),st(),k.sync(l,m.mode),(U||!c)&&k.showMenu(!0,!1);let Rt=new R,xt=performance.now(),Lt=xt,wt=0;try{wt=parseFloat(window.localStorage.getItem("mySnookerPlayTime")||"0")||0}catch{wt=0}let w=()=>{try{window.localStorage.setItem("mySnookerPlayTime",String(Math.round(wt)))}catch{}};window.addEventListener("pagehide",w);let x=xt,X=0,et=I=>{let D=Math.min(.05,(I-xt)/1e3);if(xt=I,pt.update(D),l.state==="moving")for(let Tt of l.tick(D))Tt.type==="ball"?p.ball(Tt.speed):Tt.type==="cushion"?p.cushion(Tt.speed):Tt.type==="pot"&&p.pot();let at=l.state==="aim"&&!L,Q=l.state==="watch"&&ht&&ht.aimTarget;if(Q){let Tt=ht.aimTarget,At=Tt.dir-l.dir;At=Math.atan2(Math.sin(At),Math.cos(At)),l.dir+=At*Math.min(1,D*8),l.cue.on&&(l.cue.p.x+=(Tt.cx-l.cue.p.x)*Math.min(1,D*8),l.cue.p.z+=(Tt.cz-l.cue.p.z)*Math.min(1,D*8))}if(ht&&ht.update(D,l.myTurn?{dir:l.dir,cx:l.cue.p.x,cz:l.cue.p.z,pull:pt.stroking?Math.max(0,pt.strokePull):0,side:v.side,top:v.top}:null),pt.stroking)X=Math.max(0,pt.strokePull);else{let Tt=at?pt.power:0;X+=(Tt-X)*Math.min(1,D*(pt.charging?30:12))}k.showPower(pt.power),u.update(D);let lt=Math.floor(wt);wt+=Math.min(1,Math.max(0,(I-Lt)/1e3)),Math.floor(wt)!==lt&&Math.floor(wt)%2===0&&w(),Lt=I,o.setClock(l.solo&&!l.solo.done?l.solo.time:wt);let Et=l.solo;if(Et&&!Et.done&&L!=="chair"&&!k.menuOpen()&&!k.leaderboardOpen()&&!k.partyOpen()){let Tt=Math.floor(Et.time);Et.time+=Math.min(1,Math.max(0,(I-x)/1e3)),Math.floor(Et.time)!==Tt&&(Math.floor(Et.time)%2===0&&l.saveSoloTime(),k.sync(l,m.mode),L==="score"&&vt())}if(x=I,o.update(D)&&p.doorShut(),Q&&(X+=((ht.aimTarget.pull||0)-X)*Math.min(1,D*10)),g.place(l.cue,l.dir,X,Q?ht.aimTarget.side||0:v.side,Q?ht.aimTarget.top||0:v.top,(at||L==="chalk"||Q&&!ht.aimTarget.place)&&l.cue.on),q>=0){q=$.chalkFreeze!==null?$.chalkFreeze:(performance.now()-it)/1e3;let Tt=Math.cos(l.dir),At=Math.sin(l.dir),qt=2.8,Xt=Dt=>Dt*Dt*(3-2*Dt),ct=Xt(Math.min(1,q/.45,Math.max(0,(qt-q)/.45)));g.pivot.position.x-=Tt*dt.back*ct,g.pivot.position.z-=At*dt.back*ct,g.pivot.position.y+=dt.up*ct;let T=g.pivot.position,B=Xt(Math.min(1,Math.max(0,(q-.45)/.35),Math.max(0,(qt-.45-q)/.35))),N=q>.8&&q<qt-.8?1:0,O=q*12,nt=.0012*N,mt=ft.s/2-ft.d+(1-B)*.1;Z.position.set(T.x+Tt*mt-At*Math.cos(O)*nt,T.y+Math.sin(O)*nt+(1-B)*.05,T.z+At*mt+Tt*Math.cos(O)*nt),Z.rotation.set(N*Math.sin(O*.5)*.5,-l.dir,0),q>=qt&&(W=P,k.setChalk(W),vt(),kt())}let ot=_.update(l.balls,l.cue,l.dir,at&&l.cue.on,e.lines?2:0),bt=at&&l.cue.on&&!!e.contact,Ut=ot||(at&&l.cue.on?wo(l.balls,l.cue,l.dir):null);if(k.drawContact(bt?Ut:null,l.dir,bt,e.lines),u.highlight(Ut&&at?Ut.ball:null,D,Ut?Ut.ghost:null),Ut){let Tt=Ut.ball?Ut.ball.p:{x:l.cue.p.x+Math.cos(l.dir)*pu,z:l.cue.p.z+Math.sin(l.dir)*pu};Rt.set(Tt.x,.02625,Tt.z),m.aimPoint=Rt}else m.aimPoint=null;m.update(D,l.cue,l.dir,l.state==="moving"),i.render(r,m.camera),requestAnimationFrame(et)};return requestAnimationFrame(et),{game:l,rig:m,renderer:i,scene:r,settings:e,controls:pt,debug:$,get online(){return ht}}}var mu=()=>{let s=document.getElementById("mysn-app");s&&!s.dataset.started&&(s.dataset.started="1",window.MySnooker=z_(s,window.MYSN_CONFIG||{}))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",mu):mu();})();

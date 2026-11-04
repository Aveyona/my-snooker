(()=>{var cc="170",Gn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xu=0,Oc=1,$u=2;var Zh=1,hc=2,si=3,Ei=0,qe=1,je=2,bi=0,Ts=1,Fc=2,Bc=3,Hc=4,qu=5,Fi=100,Yu=101,ju=102,Zu=103,Ku=104,Ju=200,Qu=201,td=202,ed=203,Va=204,Ga=205,nd=206,id=207,sd=208,rd=209,od=210,ad=211,ld=212,cd=213,hd=214,Wa=0,Xa=1,$a=2,Ps=3,qa=4,Ya=5,ja=6,Za=7,Kh=0,ud=1,dd=2,Si=0,fd=1,pd=2,md=3,uc=4,gd=5,yd=6,xd=7;var Jh=300,Is=301,Ls=302,Ka=303,Ja=304,Uo=306,Bn=1e3,Vi=1001,Qa=1002,Fn=1003,_d=1004;var Pr=1005;var qn=1006,la=1007;var Gi=1008;var li=1009,Qh=1010,tu=1011,fr=1012,dc=1013,Wi=1014,ri=1015,wr=1016,fc=1017,pc=1018,ks=1020,eu=35902,nu=1021,iu=1022,On=1023,su=1024,ru=1025,As=1026,Ds=1027,ou=1028,mc=1029,au=1030,gc=1031;var yc=1033,io=33776,so=33777,ro=33778,oo=33779,tl=35840,el=35841,nl=35842,il=35843,sl=36196,rl=37492,ol=37496,al=37808,ll=37809,cl=37810,hl=37811,ul=37812,dl=37813,fl=37814,pl=37815,ml=37816,gl=37817,yl=37818,xl=37819,_l=37820,vl=37821,ao=36492,Ml=36494,bl=36495,lu=36283,Sl=36284,El=36285,wl=36286;var lo=2300,Tl=2301,ca=2302,Vc=2400,Gc=2401,Wc=2402;var vd=3200,Md=3201;var cu=0,bd=1,Mi="",de="srgb",qs="srgb-linear",No="linear",Re="srgb";var cs=7680;var Xc=519,Sd=512,Ed=513,wd=514,hu=515,Td=516,Ad=517,Rd=518,Cd=519,$c=35044;var qc="300 es",oi=2e3,co=2001,ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=1234567,ar=Math.PI/180,Us=180/Math.PI;function es(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[s&255]+an[s>>8&255]+an[s>>16&255]+an[s>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function $e(s,t,e){return Math.max(t,Math.min(e,s))}function xc(s,t){return(s%t+t)%t}function Pd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Id(s,t,e){return s!==t?(e-s)/(t-s):0}function lr(s,t,e){return(1-e)*s+e*t}function Ld(s,t,e,n){return lr(s,t,1-Math.exp(-e*n))}function kd(s,t=1){return t-Math.abs(xc(s,t*2)-t)}function Dd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ud(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Nd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function zd(s,t){return s+Math.random()*(t-s)}function Od(s){return s*(.5-Math.random())}function Fd(s){s!==void 0&&(Yc=s);let t=Yc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bd(s){return s*ar}function Hd(s){return s*Us}function Vd(s){return(s&s-1)===0&&s!==0}function Gd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xd(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+n)/2),c=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*c,l*u,l*d,a*h);break;case"YZY":s.set(l*d,a*c,l*u,a*h);break;case"ZXZ":s.set(l*u,l*d,a*c,a*h);break;case"XZX":s.set(a*c,l*m,l*f,a*h);break;case"YXY":s.set(l*f,a*c,l*m,a*h);break;case"ZYZ":s.set(l*m,l*f,a*c,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ss(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function fn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Zn={DEG2RAD:ar,RAD2DEG:Us,generateUUID:es,clamp:$e,euclideanModulo:xc,mapLinear:Pd,inverseLerp:Id,lerp:lr,damp:Ld,pingpong:kd,smoothstep:Dd,smootherstep:Ud,randInt:Nd,randFloat:zd,randFloatSpread:Od,seededRandom:Fd,degToRad:Bd,radToDeg:Hd,isPowerOfTwo:Vd,ceilPowerOfTwo:Gd,floorPowerOfTwo:Wd,setQuaternionFromProperEuler:Xd,normalize:fn,denormalize:Ss},Rt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ye=class s{constructor(t,e,n,i,r,o,a,l,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,h)}set(t,e,n,i,r,o,a,l,h){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],c=n[4],u=n[7],d=n[2],f=n[5],m=n[8],y=i[0],g=i[3],p=i[6],E=i[1],v=i[4],_=i[7],V=i[2],L=i[5],U=i[8];return r[0]=o*y+a*E+l*V,r[3]=o*g+a*v+l*L,r[6]=o*p+a*_+l*U,r[1]=h*y+c*E+u*V,r[4]=h*g+c*v+u*L,r[7]=h*p+c*_+u*U,r[2]=d*y+f*E+m*V,r[5]=d*g+f*v+m*L,r[8]=d*p+f*_+m*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-n*r*c+n*a*l+i*r*h-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=c*o-a*h,d=a*l-c*r,f=h*r-o*l,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=u*y,t[1]=(i*h-c*n)*y,t[2]=(a*n-i*o)*y,t[3]=d*y,t[4]=(c*e-i*l)*y,t[5]=(i*r-a*e)*y,t[6]=f*y,t[7]=(n*l-h*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-i*h,i*l,-i*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ha.makeScale(t,e)),this}rotate(t){return this.premultiply(ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ha=new ye;function uu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ho(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $d(){let s=ho("canvas");return s.style.display="block",s}var jc={};function rr(s){s in jc||(jc[s]=!0,console.warn(s))}function qd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Yd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function jd(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ee={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Re&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Re&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?No:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ai(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Zc=[.64,.33,.3,.6,.15,.06],Kc=[.2126,.7152,.0722],Jc=[.3127,.329],Qc=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),th=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ee.define({[qs]:{primaries:Zc,whitePoint:Jc,transfer:No,toXYZ:Qc,fromXYZ:th,luminanceCoefficients:Kc,workingColorSpaceConfig:{unpackColorSpace:de},outputColorSpaceConfig:{drawingBufferColorSpace:de}},[de]:{primaries:Zc,whitePoint:Jc,transfer:Re,toXYZ:Qc,fromXYZ:th,luminanceCoefficients:Kc,outputColorSpaceConfig:{drawingBufferColorSpace:de}}});var hs,Al=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hs===void 0&&(hs=ho("canvas")),hs.width=t.width,hs.height=t.height;let n=hs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ho("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zd=0,uo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=es(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ua(i[o].image)):r.push(ua(i[o]))}else r=ua(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function ua(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Al.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kd=0,Mn=class s extends ci{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Vi,i=Vi,r=qn,o=Gi,a=On,l=li,h=s.DEFAULT_ANISOTROPY,c=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=es(),this.name="",this.source=new uo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bn:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case Qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bn:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case Qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Jh;Mn.DEFAULT_ANISOTROPY=1;var Ce=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+y)<.1&&Math.abs(m+g)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(h+1)/2,_=(f+1)/2,V=(p+1)/2,L=(c+d)/4,U=(u+y)/4,z=(m+g)/4;return v>_&&v>V?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=L/n,r=U/n):_>V?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=L/i,r=z/i):V<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(V),n=U/r,i=z/r),this.set(n,i,r,e),this}let E=Math.sqrt((g-m)*(g-m)+(u-y)*(u-y)+(d-c)*(d-c));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(u-y)/E,this.z=(d-c)/E,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rl=class extends ci{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Mn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new uo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends Rl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fo=class extends Mn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cl=class extends Mn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],h=n[i+1],c=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=y;return}if(u!==y||l!==d||h!==f||c!==m){let g=1-a,p=l*d+h*f+c*m+u*y,E=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let V=Math.sqrt(v),L=Math.atan2(V,p*E);g=Math.sin(g*L)/V,a=Math.sin(a*L)/V}let _=a*E;if(l=l*g+d*_,h=h*g+f*_,c=c*g+m*_,u=u*g+y*_,g===1-a){let V=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=V,h*=V,c*=V,u*=V}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],h=n[i+2],c=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+c*u+l*f-h*d,t[e+1]=l*m+c*d+h*u-a*f,t[e+2]=h*m+c*f+a*d-l*u,t[e+3]=c*m-a*u-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),c=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=d*c*u+h*f*m,this._y=h*f*u-d*c*m,this._z=h*c*m+d*f*u,this._w=h*c*u-d*f*m;break;case"YXZ":this._x=d*c*u+h*f*m,this._y=h*f*u-d*c*m,this._z=h*c*m-d*f*u,this._w=h*c*u+d*f*m;break;case"ZXY":this._x=d*c*u-h*f*m,this._y=h*f*u+d*c*m,this._z=h*c*m+d*f*u,this._w=h*c*u-d*f*m;break;case"ZYX":this._x=d*c*u-h*f*m,this._y=h*f*u+d*c*m,this._z=h*c*m-d*f*u,this._w=h*c*u+d*f*m;break;case"YZX":this._x=d*c*u+h*f*m,this._y=h*f*u+d*c*m,this._z=h*c*m-d*f*u,this._w=h*c*u-d*f*m;break;case"XZY":this._x=d*c*u-h*f*m,this._y=h*f*u-d*c*m,this._z=h*c*m+d*f*u,this._w=h*c*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(c-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+h)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-h)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+o*a+i*h-r*l,this._y=i*c+o*l+r*a-n*h,this._z=r*c+o*h+n*l-i*a,this._w=o*c-n*a-i*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*i-a*n),c=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*h+o*u-a*c,this.y=n+l*c+a*h-r*u,this.z=i+l*u+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return da.copy(this).projectOnVector(t),this.sub(da)}reflect(t){return this.sub(da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},da=new I,eh=new mn,Xi=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),Lr.subVectors(this.max,Qs),us.subVectors(t.a,Qs),ds.subVectors(t.b,Qs),fs.subVectors(t.c,Qs),mi.subVectors(ds,us),gi.subVectors(fs,ds),Li.subVectors(us,fs);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Li.z,Li.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Li.z,0,-Li.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Li.y,Li.x,0];return!fa(e,us,ds,fs,Lr)||(e=[1,0,0,0,1,0,0,0,1],!fa(e,us,ds,fs,Lr))?!1:(kr.crossVectors(mi,gi),e=[kr.x,kr.y,kr.z],fa(e,us,ds,fs,Lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Qn=[new I,new I,new I,new I,new I,new I,new I,new I],Un=new I,Ir=new Xi,us=new I,ds=new I,fs=new I,mi=new I,gi=new I,Li=new I,Qs=new I,Lr=new I,kr=new I,ki=new I;function fa(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ki.fromArray(s,r);let a=i.x*Math.abs(ki.x)+i.y*Math.abs(ki.y)+i.z*Math.abs(ki.z),l=t.dot(ki),h=e.dot(ki),c=n.dot(ki);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}var Jd=new Xi,tr=new I,pa=new I,Ns=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Jd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);let e=tr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(tr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(pa)),this.expandByPoint(tr.copy(t.center).sub(pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ti=new I,ma=new I,Dr=new I,yi=new I,ga=new I,Ur=new I,ya=new I,$i=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ma.copy(t).add(e).multiplyScalar(.5),Dr.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(ma);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Dr),a=yi.dot(this.direction),l=-yi.dot(Dr),h=yi.lengthSq(),c=Math.abs(1-o*o),u,d,f,m;if(c>0)if(u=o*l-a,d=o*a-l,m=r*c,u>=0)if(d>=-m)if(d<=m){let y=1/c;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+h}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ma).addScaledVector(Dr,d),f}intersectSphere(t,e){ti.subVectors(t.center,this.origin);let n=ti.dot(this.direction),i=ti.dot(ti)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),c>=0?(r=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,i,r){ga.subVectors(e,t),Ur.subVectors(n,t),ya.crossVectors(ga,Ur);let o=this.direction.dot(ya),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,t);let l=a*this.direction.dot(Ur.crossVectors(yi,Ur));if(l<0)return null;let h=a*this.direction.dot(ga.cross(yi));if(h<0||l+h>o)return null;let c=-a*yi.dot(ya);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class s{constructor(t,e,n,i,r,o,a,l,h,c,u,d,f,m,y,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,h,c,u,d,f,m,y,g)}set(t,e,n,i,r,o,a,l,h,c,u,d,f,m,y,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ps.setFromMatrixColumn(t,0).length(),r=1/ps.setFromMatrixColumn(t,1).length(),o=1/ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),h=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*c,f=o*u,m=a*c,y=a*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=f+m*h,e[5]=d-y*h,e[9]=-a*l,e[2]=y-d*h,e[6]=m+f*h,e[10]=o*l}else if(t.order==="YXZ"){let d=l*c,f=l*u,m=h*c,y=h*u;e[0]=d+y*a,e[4]=m*a-f,e[8]=o*h,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=f*a-m,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*c,f=l*u,m=h*c,y=h*u;e[0]=d-y*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*c,e[9]=y-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*c,f=o*u,m=a*c,y=a*u;e[0]=l*c,e[4]=m*h-f,e[8]=d*h+y,e[1]=l*u,e[5]=y*h+d,e[9]=f*h-m,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*h,m=a*l,y=a*h;e[0]=l*c,e[4]=y-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*u+m,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*l,f=o*h,m=a*l,y=a*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+y,e[5]=o*c,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*c,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qd,t,tf)}lookAt(t,e,n){let i=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),xi.crossVectors(n,xn),xi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),xi.crossVectors(n,xn)),xi.normalize(),Nr.crossVectors(xn,xi),i[0]=xi.x,i[4]=Nr.x,i[8]=xn.x,i[1]=xi.y,i[5]=Nr.y,i[9]=xn.y,i[2]=xi.z,i[6]=Nr.z,i[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],c=n[1],u=n[5],d=n[9],f=n[13],m=n[2],y=n[6],g=n[10],p=n[14],E=n[3],v=n[7],_=n[11],V=n[15],L=i[0],U=i[4],z=i[8],T=i[12],x=i[1],A=i[5],q=i[9],k=i[13],W=i[2],G=i[6],O=i[10],K=i[14],$=i[3],ht=i[7],yt=i[11],wt=i[15];return r[0]=o*L+a*x+l*W+h*$,r[4]=o*U+a*A+l*G+h*ht,r[8]=o*z+a*q+l*O+h*yt,r[12]=o*T+a*k+l*K+h*wt,r[1]=c*L+u*x+d*W+f*$,r[5]=c*U+u*A+d*G+f*ht,r[9]=c*z+u*q+d*O+f*yt,r[13]=c*T+u*k+d*K+f*wt,r[2]=m*L+y*x+g*W+p*$,r[6]=m*U+y*A+g*G+p*ht,r[10]=m*z+y*q+g*O+p*yt,r[14]=m*T+y*k+g*K+p*wt,r[3]=E*L+v*x+_*W+V*$,r[7]=E*U+v*A+_*G+V*ht,r[11]=E*z+v*q+_*O+V*yt,r[15]=E*T+v*k+_*K+V*wt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],m=t[3],y=t[7],g=t[11],p=t[15];return m*(+r*l*u-i*h*u-r*a*d+n*h*d+i*a*f-n*l*f)+y*(+e*l*f-e*h*d+r*o*d-i*o*f+i*h*c-r*l*c)+g*(+e*h*u-e*a*f-r*o*u+n*o*f+r*a*c-n*h*c)+p*(-i*a*c-e*l*u+e*a*d+i*o*u-n*o*d+n*l*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],m=t[12],y=t[13],g=t[14],p=t[15],E=u*g*h-y*d*h+y*l*f-a*g*f-u*l*p+a*d*p,v=m*d*h-c*g*h-m*l*f+o*g*f+c*l*p-o*d*p,_=c*y*h-m*u*h+m*a*f-o*y*f-c*a*p+o*u*p,V=m*u*l-c*y*l-m*a*d+o*y*d+c*a*g-o*u*g,L=e*E+n*v+i*_+r*V;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/L;return t[0]=E*U,t[1]=(y*d*r-u*g*r-y*i*f+n*g*f+u*i*p-n*d*p)*U,t[2]=(a*g*r-y*l*r+y*i*h-n*g*h-a*i*p+n*l*p)*U,t[3]=(u*l*r-a*d*r-u*i*h+n*d*h+a*i*f-n*l*f)*U,t[4]=v*U,t[5]=(c*g*r-m*d*r+m*i*f-e*g*f-c*i*p+e*d*p)*U,t[6]=(m*l*r-o*g*r-m*i*h+e*g*h+o*i*p-e*l*p)*U,t[7]=(o*d*r-c*l*r+c*i*h-e*d*h-o*i*f+e*l*f)*U,t[8]=_*U,t[9]=(m*u*r-c*y*r-m*n*f+e*y*f+c*n*p-e*u*p)*U,t[10]=(o*y*r-m*a*r+m*n*h-e*y*h-o*n*p+e*a*p)*U,t[11]=(c*a*r-o*u*r-c*n*h+e*u*h+o*n*f-e*a*f)*U,t[12]=V*U,t[13]=(c*y*i-m*u*i+m*n*d-e*y*d-c*n*g+e*u*g)*U,t[14]=(m*a*i-o*y*i-m*n*l+e*y*l+o*n*g-e*a*g)*U,t[15]=(o*u*i-c*a*i+c*n*l-e*u*l-o*n*d+e*a*d)*U,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+n,h*a-i*l,h*l+i*a,0,h*a+i*l,c*a+n,c*l-i*o,0,h*l-i*a,c*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,u=a+a,d=r*h,f=r*c,m=r*u,y=o*c,g=o*u,p=a*u,E=l*h,v=l*c,_=l*u,V=n.x,L=n.y,U=n.z;return i[0]=(1-(y+p))*V,i[1]=(f+_)*V,i[2]=(m-v)*V,i[3]=0,i[4]=(f-_)*L,i[5]=(1-(d+p))*L,i[6]=(g+E)*L,i[7]=0,i[8]=(m+v)*U,i[9]=(g-E)*U,i[10]=(1-(d+y))*U,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=ps.set(i[0],i[1],i[2]).length(),o=ps.set(i[4],i[5],i[6]).length(),a=ps.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Nn.copy(this);let h=1/r,c=1/o,u=1/a;return Nn.elements[0]*=h,Nn.elements[1]*=h,Nn.elements[2]*=h,Nn.elements[4]*=c,Nn.elements[5]*=c,Nn.elements[6]*=c,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,e.setFromRotationMatrix(Nn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=oi){let l=this.elements,h=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,m;if(a===oi)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===co)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=oi){let l=this.elements,h=1/(e-t),c=1/(n-i),u=1/(o-r),d=(e+t)*h,f=(n+i)*c,m,y;if(a===oi)m=(o+r)*u,y=-2*u;else if(a===co)m=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ps=new I,Nn=new Ie,Qd=new I(0,0,0),tf=new I(1,1,1),xi=new I,Nr=new I,xn=new I,nh=new Ie,ih=new mn,Rn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],h=i[5],c=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ih.setFromEuler(this),this.setFromQuaternion(ih,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ef=0,sh=new I,ms=new mn,ei=new Ie,zr=new I,er=new I,nf=new I,sf=new mn,rh=new I(1,0,0),oh=new I(0,1,0),ah=new I(0,0,1),lh={type:"added"},rf={type:"removed"},gs={type:"childadded",child:null},xa={type:"childremoved",child:null},nn=class s extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new Rn,n=new mn,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new ye}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(rh,t)}rotateY(t){return this.rotateOnAxis(oh,t)}rotateZ(t){return this.rotateOnAxis(ah,t)}translateOnAxis(t,e){return sh.copy(t).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rh,t)}translateY(t){return this.translateOnAxis(oh,t)}translateZ(t){return this.translateOnAxis(ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zr.copy(t):zr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(er,zr,this.up):ei.lookAt(zr,er,this.up),this.quaternion.setFromRotationMatrix(ei),i&&(ei.extractRotation(i.matrixWorld),ms.setFromRotationMatrix(ei),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lh),gs.child=t,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rf),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lh),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,nf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,sf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let h in a){let c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};nn.DEFAULT_UP=new I(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new I,ni=new I,_a=new I,ii=new I,ys=new I,xs=new I,ch=new I,va=new I,Ma=new I,ba=new I,Sa=new Ce,Ea=new Ce,wa=new Ce,Bi=class s{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),zn.subVectors(t,e),i.cross(zn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){zn.subVectors(i,e),ni.subVectors(n,e),_a.subVectors(t,e);let o=zn.dot(zn),a=zn.dot(ni),l=zn.dot(_a),h=ni.dot(ni),c=ni.dot(_a),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(h*l-a*c)*d,m=(o*c-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Sa.setScalar(0),Ea.setScalar(0),wa.setScalar(0),Sa.fromBufferAttribute(t,e),Ea.fromBufferAttribute(t,n),wa.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Sa,r.x),o.addScaledVector(Ea,r.y),o.addScaledVector(wa,r.z),o}static isFrontFacing(t,e,n,i){return zn.subVectors(n,e),ni.subVectors(t,e),zn.cross(ni).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),zn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;ys.subVectors(i,n),xs.subVectors(r,n),va.subVectors(t,n);let l=ys.dot(va),h=xs.dot(va);if(l<=0&&h<=0)return e.copy(n);Ma.subVectors(t,i);let c=ys.dot(Ma),u=xs.dot(Ma);if(c>=0&&u<=c)return e.copy(i);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(n).addScaledVector(ys,o);ba.subVectors(t,r);let f=ys.dot(ba),m=xs.dot(ba);if(m>=0&&f<=m)return e.copy(r);let y=f*h-l*m;if(y<=0&&h>=0&&m<=0)return a=h/(h-m),e.copy(n).addScaledVector(xs,a);let g=c*m-f*u;if(g<=0&&u-c>=0&&f-m>=0)return ch.subVectors(r,i),a=(u-c)/(u-c+(f-m)),e.copy(i).addScaledVector(ch,a);let p=1/(g+y+d);return o=y*p,a=d*p,e.copy(n).addScaledVector(ys,o).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Or={h:0,s:0,l:0};function Ta(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var pe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=de){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ee.workingColorSpace){if(t=xc(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ta(o,r,t+1/3),this.g=Ta(o,r,t),this.b=Ta(o,r,t-1/3)}return Ee.toWorkingColorSpace(this,i),this}setStyle(t,e=de){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=de){let n=du[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=de){return Ee.fromWorkingColorSpace(ln.copy(this),t),Math.round($e(ln.r*255,0,255))*65536+Math.round($e(ln.g*255,0,255))*256+Math.round($e(ln.b*255,0,255))}getHexString(t=de){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.fromWorkingColorSpace(ln.copy(this),e);let n=ln.r,i=ln.g,r=ln.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,h,c=(a+o)/2;if(a===o)l=0,h=0;else{let u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=de){Ee.fromWorkingColorSpace(ln.copy(this),t);let e=ln.r,n=ln.g,i=ln.b;return t!==de?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Or);let n=lr(_i.h,Or.h,e),i=lr(_i.s,Or.s,e),r=lr(_i.l,Or.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new pe;pe.NAMES=du;var of=0,wi=class extends ci{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=es(),this.name="",this.blending=Ts,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Ga,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Va&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},we=class extends wi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Xe=new I,Fr=new Rt,An=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$c,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ss(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array),i=fn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$c&&(t.usage=this.usage),t}};var po=class extends An{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mo=class extends An{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Me=class extends An{constructor(t,e,n){super(new Float32Array(t),e,n)}},af=0,Tn=new Ie,Aa=new nn,_s=new I,_n=new Xi,nr=new Xi,en=new I,ze=class s extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uu(t)?mo:po)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ye().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Tn.makeRotationFromQuaternion(t),this.applyMatrix4(Tn),this}rotateX(t){return Tn.makeRotationX(t),this.applyMatrix4(Tn),this}rotateY(t){return Tn.makeRotationY(t),this.applyMatrix4(Tn),this}rotateZ(t){return Tn.makeRotationZ(t),this.applyMatrix4(Tn),this}translate(t,e,n){return Tn.makeTranslation(t,e,n),this.applyMatrix4(Tn),this}scale(t,e,n){return Tn.makeScale(t,e,n),this.applyMatrix4(Tn),this}lookAt(t){return Aa.lookAt(t),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Me(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(_n.min,nr.min),_n.expandByPoint(en),en.addVectors(_n.max,nr.max),_n.expandByPoint(en)):(_n.expandByPoint(nr.min),_n.expandByPoint(nr.max))}_n.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)en.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(en));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)en.fromBufferAttribute(a,h),l&&(_s.fromBufferAttribute(t,h),en.add(_s)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<n.count;z++)a[z]=new I,l[z]=new I;let h=new I,c=new I,u=new I,d=new Rt,f=new Rt,m=new Rt,y=new I,g=new I;function p(z,T,x){h.fromBufferAttribute(n,z),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,z),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,x),c.sub(h),u.sub(h),f.sub(d),m.sub(d);let A=1/(f.x*m.y-m.x*f.y);isFinite(A)&&(y.copy(c).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(A),g.copy(u).multiplyScalar(f.x).addScaledVector(c,-m.x).multiplyScalar(A),a[z].add(y),a[T].add(y),a[x].add(y),l[z].add(g),l[T].add(g),l[x].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let z=0,T=E.length;z<T;++z){let x=E[z],A=x.start,q=x.count;for(let k=A,W=A+q;k<W;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let v=new I,_=new I,V=new I,L=new I;function U(z){V.fromBufferAttribute(i,z),L.copy(V);let T=a[z];v.copy(T),v.sub(V.multiplyScalar(V.dot(T))).normalize(),_.crossVectors(L,T);let A=_.dot(l[z])<0?-1:1;o.setXYZW(z,v.x,v.y,v.z,A)}for(let z=0,T=E.length;z<T;++z){let x=E[z],A=x.start,q=x.count;for(let k=A,W=A+q;k<W;k+=3)U(t.getX(k+0)),U(t.getX(k+1)),U(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new I,r=new I,o=new I,a=new I,l=new I,h=new I,c=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),y=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),c.subVectors(o,r),u.subVectors(i,r),c.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,g),a.add(c),l.add(c),h.add(c),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,r),u.subVectors(i,r),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,l){let h=a.array,c=a.itemSize,u=a.normalized,d=new h.constructor(l.length*c),f=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*c;for(let p=0;p<c;p++)d[m++]=h[f++]}return new An(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],h=t(l,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let c=0,u=h.length;c<u;c++){let d=h[c],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(i[l]=c,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let h in i){let c=i[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],u=r[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,c=o.length;h<c;h++){let u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hh=new Ie,Di=new $i,Br=new Ns,uh=new I,Hr=new I,Vr=new I,Gr=new I,Ra=new I,Wr=new I,dh=new I,Xr=new I,Bt=class extends nn{constructor(t=new ze,e=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Wr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=a[l],u=r[l];c!==0&&(Ra.fromBufferAttribute(u,t),o?Wr.addScaledVector(Ra,c):Wr.addScaledVector(Ra.sub(e),c))}e.add(Wr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!(Br.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Br,uh)===null||Di.origin.distanceToSquared(uh)>(t.far-t.near)**2))&&(hh.copy(r).invert(),Di.copy(t.ray).applyMatrix4(hh),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let g=d[m],p=o[g.materialIndex],E=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let _=E,V=v;_<V;_+=3){let L=a.getX(_),U=a.getX(_+1),z=a.getX(_+2);i=$r(this,p,t,n,h,c,u,L,U,z),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let E=a.getX(g),v=a.getX(g+1),_=a.getX(g+2);i=$r(this,o,t,n,h,c,u,E,v,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let g=d[m],p=o[g.materialIndex],E=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=E,V=v;_<V;_+=3){let L=_,U=_+1,z=_+2;i=$r(this,p,t,n,h,c,u,L,U,z),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let E=g,v=g+1,_=g+2;i=$r(this,o,t,n,h,c,u,E,v,_),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function lf(s,t,e,n,i,r,o,a){let l;if(t.side===qe?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Ei,a),l===null)return null;Xr.copy(a),Xr.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(Xr);return h<e.near||h>e.far?null:{distance:h,point:Xr.clone(),object:s}}function $r(s,t,e,n,i,r,o,a,l,h){s.getVertexPosition(a,Hr),s.getVertexPosition(l,Vr),s.getVertexPosition(h,Gr);let c=lf(s,t,e,n,Hr,Vr,Gr,dh);if(c){let u=new I;Bi.getBarycoord(dh,Hr,Vr,Gr,u),i&&(c.uv=Bi.getInterpolatedAttribute(i,a,l,h,u,new Rt)),r&&(c.uv1=Bi.getInterpolatedAttribute(r,a,l,h,u,new Rt)),o&&(c.normal=Bi.getInterpolatedAttribute(o,a,l,h,u,new I),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let d={a,b:l,c:h,normal:new I,materialIndex:0};Bi.getNormal(Hr,Vr,Gr,d.normal),c.face=d,c.barycoord=u}return c}var kt=class s extends ze{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],c=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(u,2));function m(y,g,p,E,v,_,V,L,U,z,T){let x=_/U,A=V/z,q=_/2,k=V/2,W=L/2,G=U+1,O=z+1,K=0,$=0,ht=new I;for(let yt=0;yt<O;yt++){let wt=yt*A-k;for(let Ut=0;Ut<G;Ut++){let At=Ut*x-q;ht[y]=At*E,ht[g]=wt*v,ht[p]=W,h.push(ht.x,ht.y,ht.z),ht[y]=0,ht[g]=0,ht[p]=L>0?1:-1,c.push(ht.x,ht.y,ht.z),u.push(Ut/U),u.push(1-yt/z),K+=1}}for(let yt=0;yt<z;yt++)for(let wt=0;wt<U;wt++){let Ut=d+wt+G*yt,At=d+wt+G*(yt+1),Z=d+(wt+1)+G*(yt+1),ct=d+(wt+1)+G*yt;l.push(Ut,At,ct),l.push(At,Z,ct),$+=6}a.addGroup(f,$,T),f+=$,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function zs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function pn(s){let t={};for(let e=0;e<s.length;e++){let n=zs(s[e]);for(let i in n)t[i]=n[i]}return t}function cf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function fu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}var hf={clone:zs,merge:pn},uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends wi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uf,this.fragmentShader=df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=cf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},go=class extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vi=new I,fh=new Rt,ph=new Rt,rn=class extends go{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,fh,ph),e.subVectors(ph,fh)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ar*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/h,i*=o.width/l,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},vs=-90,Ms=1,Pl=class extends nn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new rn(vs,Ms,t,e);i.layers=this.layers,this.add(i);let r=new rn(vs,Ms,t,e);r.layers=this.layers,this.add(r);let o=new rn(vs,Ms,t,e);o.layers=this.layers,this.add(o);let a=new rn(vs,Ms,t,e);a.layers=this.layers,this.add(a);let l=new rn(vs,Ms,t,e);l.layers=this.layers,this.add(l);let h=new rn(vs,Ms,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},yo=class extends Mn{constructor(t,e,n,i,r,o,a,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:Is,super(t,e,n,i,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Il=class extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new yo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new kt(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:bi});r.uniforms.tEquirect.value=e;let o=new Bt(i,r),a=e.minFilter;return e.minFilter===Gi&&(e.minFilter=qn),new Pl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Ca=new I,ff=new I,pf=new ye,vn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ca.subVectors(n,e).cross(ff.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ca),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||pf.getNormalMatrix(t),i=this.coplanarPoint(Ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new Ns,qr=new I,mr=class{constructor(t=new vn,e=new vn,n=new vn,i=new vn,r=new vn,o=new vn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],h=i[4],c=i[5],u=i[6],d=i[7],f=i[8],m=i[9],y=i[10],g=i[11],p=i[12],E=i[13],v=i[14],_=i[15];if(n[0].setComponents(l-r,d-h,g-f,_-p).normalize(),n[1].setComponents(l+r,d+h,g+f,_+p).normalize(),n[2].setComponents(l+o,d+c,g+m,_+E).normalize(),n[3].setComponents(l-o,d-c,g-m,_-E).normalize(),n[4].setComponents(l-a,d-u,g-y,_-v).normalize(),e===oi)n[5].setComponents(l+a,d+u,g+y,_+v).normalize();else if(e===co)n[5].setComponents(a,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(qr.x=i.normal.x>0?t.max.x:t.min.x,qr.y=i.normal.y>0?t.max.y:t.min.y,qr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function pu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function mf(s){let t=new WeakMap;function e(a,l){let h=a.array,c=a.usage,u=h.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=s.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=s.SHORT;else if(h instanceof Uint32Array)f=s.UNSIGNED_INT;else if(h instanceof Int32Array)f=s.INT;else if(h instanceof Int8Array)f=s.BYTE;else if(h instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,h){let c=l.array,u=l.updateRanges;if(s.bindBuffer(h,a),u.length===0)s.bufferSubData(h,0,c);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],y=u[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let y=u[f];s.bufferSubData(h,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:i,remove:r,update:o}}var oe=class s extends ze{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),h=a+1,c=l+1,u=t/a,d=e/l,f=[],m=[],y=[],g=[];for(let p=0;p<c;p++){let E=p*d-o;for(let v=0;v<h;v++){let _=v*u-r;m.push(_,-E,0),y.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){let v=E+h*p,_=E+h*(p+1),V=E+1+h*(p+1),L=E+1+h*p;f.push(v,_,L),f.push(_,V,L)}this.setIndex(f),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(y,3)),this.setAttribute("uv",new Me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yf=`#ifdef USE_ALPHAHASH
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
#endif`,xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bf=`#ifdef USE_AOMAP
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
#endif`,Sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ef=`#ifdef USE_BATCHING
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
#endif`,wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cf=`#ifdef USE_IRIDESCENCE
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
#endif`,Pf=`#ifdef USE_BUMPMAP
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ff=`#define PI 3.141592653589793
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
} // validated`,Bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hf=`vec3 transformedNormal = objectNormal;
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
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$f="gl_FragColor = linearToOutputTexel( gl_FragColor );",qf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ip=`#ifdef USE_GRADIENTMAP
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
}`,sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ap=`uniform bool receiveShadow;
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
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fp=`PhysicalMaterial material;
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
#endif`,pp=`struct PhysicalMaterial {
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
}`,mp=`
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
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
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_p=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wp=`#if defined( USE_POINTS_UV )
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
#endif`,Tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`#ifdef USE_MORPHTARGETS
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
#endif`,Lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Op=`#ifdef USE_NORMALMAP
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
#endif`,Fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tm=`float getShadowMask() {
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
}`,em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gm=`uniform sampler2D t2D;
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`#include <common>
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
}`,bm=`#if DEPTH_PACKING == 3200
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
}`,Sm=`#define DISTANCE
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
}`,Em=`#define DISTANCE
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`uniform float scale;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Im=`#define LAMBERT
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
}`,Lm=`#define LAMBERT
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
}`,km=`#define MATCAP
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
}`,Dm=`#define MATCAP
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
}`,Um=`#define NORMAL
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
}`,Nm=`#define NORMAL
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
}`,zm=`#define PHONG
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
}`,Om=`#define PHONG
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
}`,Fm=`#define STANDARD
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
}`,Bm=`#define STANDARD
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
}`,Hm=`#define TOON
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
}`,Vm=`#define TOON
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
}`,Gm=`uniform float size;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Xm=`#include <common>
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
}`,$m=`uniform vec3 color;
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
}`,qm=`uniform float rotation;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:gf,alphahash_pars_fragment:yf,alphamap_fragment:xf,alphamap_pars_fragment:_f,alphatest_fragment:vf,alphatest_pars_fragment:Mf,aomap_fragment:bf,aomap_pars_fragment:Sf,batching_pars_vertex:Ef,batching_vertex:wf,begin_vertex:Tf,beginnormal_vertex:Af,bsdfs:Rf,iridescence_fragment:Cf,bumpmap_pars_fragment:Pf,clipping_planes_fragment:If,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:kf,clipping_planes_vertex:Df,color_fragment:Uf,color_pars_fragment:Nf,color_pars_vertex:zf,color_vertex:Of,common:Ff,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:Hf,displacementmap_pars_vertex:Vf,displacementmap_vertex:Gf,emissivemap_fragment:Wf,emissivemap_pars_fragment:Xf,colorspace_fragment:$f,colorspace_pars_fragment:qf,envmap_fragment:Yf,envmap_common_pars_fragment:jf,envmap_pars_fragment:Zf,envmap_pars_vertex:Kf,envmap_physical_pars_fragment:lp,envmap_vertex:Jf,fog_vertex:Qf,fog_pars_vertex:tp,fog_fragment:ep,fog_pars_fragment:np,gradientmap_pars_fragment:ip,lightmap_pars_fragment:sp,lights_lambert_fragment:rp,lights_lambert_pars_fragment:op,lights_pars_begin:ap,lights_toon_fragment:cp,lights_toon_pars_fragment:hp,lights_phong_fragment:up,lights_phong_pars_fragment:dp,lights_physical_fragment:fp,lights_physical_pars_fragment:pp,lights_fragment_begin:mp,lights_fragment_maps:gp,lights_fragment_end:yp,logdepthbuf_fragment:xp,logdepthbuf_pars_fragment:_p,logdepthbuf_pars_vertex:vp,logdepthbuf_vertex:Mp,map_fragment:bp,map_pars_fragment:Sp,map_particle_fragment:Ep,map_particle_pars_fragment:wp,metalnessmap_fragment:Tp,metalnessmap_pars_fragment:Ap,morphinstance_vertex:Rp,morphcolor_vertex:Cp,morphnormal_vertex:Pp,morphtarget_pars_vertex:Ip,morphtarget_vertex:Lp,normal_fragment_begin:kp,normal_fragment_maps:Dp,normal_pars_fragment:Up,normal_pars_vertex:Np,normal_vertex:zp,normalmap_pars_fragment:Op,clearcoat_normal_fragment_begin:Fp,clearcoat_normal_fragment_maps:Bp,clearcoat_pars_fragment:Hp,iridescence_pars_fragment:Vp,opaque_fragment:Gp,packing:Wp,premultiplied_alpha_fragment:Xp,project_vertex:$p,dithering_fragment:qp,dithering_pars_fragment:Yp,roughnessmap_fragment:jp,roughnessmap_pars_fragment:Zp,shadowmap_pars_fragment:Kp,shadowmap_pars_vertex:Jp,shadowmap_vertex:Qp,shadowmask_pars_fragment:tm,skinbase_vertex:em,skinning_pars_vertex:nm,skinning_vertex:im,skinnormal_vertex:sm,specularmap_fragment:rm,specularmap_pars_fragment:om,tonemapping_fragment:am,tonemapping_pars_fragment:lm,transmission_fragment:cm,transmission_pars_fragment:hm,uv_pars_fragment:um,uv_pars_vertex:dm,uv_vertex:fm,worldpos_vertex:pm,background_vert:mm,background_frag:gm,backgroundCube_vert:ym,backgroundCube_frag:xm,cube_vert:_m,cube_frag:vm,depth_vert:Mm,depth_frag:bm,distanceRGBA_vert:Sm,distanceRGBA_frag:Em,equirect_vert:wm,equirect_frag:Tm,linedashed_vert:Am,linedashed_frag:Rm,meshbasic_vert:Cm,meshbasic_frag:Pm,meshlambert_vert:Im,meshlambert_frag:Lm,meshmatcap_vert:km,meshmatcap_frag:Dm,meshnormal_vert:Um,meshnormal_frag:Nm,meshphong_vert:zm,meshphong_frag:Om,meshphysical_vert:Fm,meshphysical_frag:Bm,meshtoon_vert:Hm,meshtoon_frag:Vm,points_vert:Gm,points_frag:Wm,shadow_vert:Xm,shadow_frag:$m,sprite_vert:qm,sprite_frag:Ym},Zt={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},$n={basic:{uniforms:pn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:pn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new pe(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:pn([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:pn([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:pn([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new pe(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:pn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:pn([Zt.points,Zt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:pn([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:pn([Zt.common,Zt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:pn([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:pn([Zt.sprite,Zt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:pn([Zt.common,Zt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:pn([Zt.lights,Zt.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};$n.physical={uniforms:pn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};var Yr={r:0,b:0,g:0},Ni=new Rn,jm=new Ie;function Zm(s,t,e,n,i,r,o){let a=new pe(0),l=r===!0?0:1,h,c,u=null,d=0,f=null;function m(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?e:t).get(v)),v}function y(E){let v=!1,_=m(E);_===null?p(a,l):_&&_.isColor&&(p(_,1),v=!0);let V=s.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,o):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(E,v){let _=m(v);_&&(_.isCubeTexture||_.mapping===Uo)?(c===void 0&&(c=new Bt(new kt(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:zs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(V,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Ni.copy(v.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jm.makeRotationFromEuler(Ni)),c.material.toneMapped=Ee.getTransfer(_.colorSpace)!==Re,(u!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new Bt(new oe(2,2),new Yn({name:"BackgroundMaterial",uniforms:zs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=Ee.getTransfer(_.colorSpace)!==Re,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function p(E,v){E.getRGB(Yr,fu(s)),n.buffers.color.setClear(Yr.r,Yr.g,Yr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:y,addToRenderList:g}}function Km(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(x,A,q,k,W){let G=!1,O=u(k,q,A);r!==O&&(r=O,h(r.object)),G=f(x,k,q,W),G&&m(x,k,q,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,_(x,A,q,k),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function h(x){return s.bindVertexArray(x)}function c(x){return s.deleteVertexArray(x)}function u(x,A,q){let k=q.wireframe===!0,W=n[x.id];W===void 0&&(W={},n[x.id]=W);let G=W[A.id];G===void 0&&(G={},W[A.id]=G);let O=G[k];return O===void 0&&(O=d(l()),G[k]=O),O}function d(x){let A=[],q=[],k=[];for(let W=0;W<e;W++)A[W]=0,q[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:q,attributeDivisors:k,object:x,attributes:{},index:null}}function f(x,A,q,k){let W=r.attributes,G=A.attributes,O=0,K=q.getAttributes();for(let $ in K)if(K[$].location>=0){let yt=W[$],wt=G[$];if(wt===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(wt=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(wt=x.instanceColor)),yt===void 0||yt.attribute!==wt||wt&&yt.data!==wt.data)return!0;O++}return r.attributesNum!==O||r.index!==k}function m(x,A,q,k){let W={},G=A.attributes,O=0,K=q.getAttributes();for(let $ in K)if(K[$].location>=0){let yt=G[$];yt===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(yt=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(yt=x.instanceColor));let wt={};wt.attribute=yt,yt&&yt.data&&(wt.data=yt.data),W[$]=wt,O++}r.attributes=W,r.attributesNum=O,r.index=k}function y(){let x=r.newAttributes;for(let A=0,q=x.length;A<q;A++)x[A]=0}function g(x){p(x,0)}function p(x,A){let q=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;q[x]=1,k[x]===0&&(s.enableVertexAttribArray(x),k[x]=1),W[x]!==A&&(s.vertexAttribDivisor(x,A),W[x]=A)}function E(){let x=r.newAttributes,A=r.enabledAttributes;for(let q=0,k=A.length;q<k;q++)A[q]!==x[q]&&(s.disableVertexAttribArray(q),A[q]=0)}function v(x,A,q,k,W,G,O){O===!0?s.vertexAttribIPointer(x,A,q,W,G):s.vertexAttribPointer(x,A,q,k,W,G)}function _(x,A,q,k){y();let W=k.attributes,G=q.getAttributes(),O=A.defaultAttributeValues;for(let K in G){let $=G[K];if($.location>=0){let ht=W[K];if(ht===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor)),ht!==void 0){let yt=ht.normalized,wt=ht.itemSize,Ut=t.get(ht);if(Ut===void 0)continue;let At=Ut.buffer,Z=Ut.type,ct=Ut.bytesPerElement,Dt=Z===s.INT||Z===s.UNSIGNED_INT||ht.gpuType===dc;if(ht.isInterleavedBufferAttribute){let gt=ht.data,Lt=gt.stride,Gt=ht.offset;if(gt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<$.locationSize;Yt++)p($.location+Yt,gt.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Yt=0;Yt<$.locationSize;Yt++)g($.location+Yt);s.bindBuffer(s.ARRAY_BUFFER,At);for(let Yt=0;Yt<$.locationSize;Yt++)v($.location+Yt,wt/$.locationSize,Z,yt,Lt*ct,(Gt+wt/$.locationSize*Yt)*ct,Dt)}else{if(ht.isInstancedBufferAttribute){for(let gt=0;gt<$.locationSize;gt++)p($.location+gt,ht.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let gt=0;gt<$.locationSize;gt++)g($.location+gt);s.bindBuffer(s.ARRAY_BUFFER,At);for(let gt=0;gt<$.locationSize;gt++)v($.location+gt,wt/$.locationSize,Z,yt,wt*ct,wt/$.locationSize*gt*ct,Dt)}}else if(O!==void 0){let yt=O[K];if(yt!==void 0)switch(yt.length){case 2:s.vertexAttrib2fv($.location,yt);break;case 3:s.vertexAttrib3fv($.location,yt);break;case 4:s.vertexAttrib4fv($.location,yt);break;default:s.vertexAttrib1fv($.location,yt)}}}}E()}function V(){z();for(let x in n){let A=n[x];for(let q in A){let k=A[q];for(let W in k)c(k[W].object),delete k[W];delete A[q]}delete n[x]}}function L(x){if(n[x.id]===void 0)return;let A=n[x.id];for(let q in A){let k=A[q];for(let W in k)c(k[W].object),delete k[W];delete A[q]}delete n[x.id]}function U(x){for(let A in n){let q=n[A];if(q[x.id]===void 0)continue;let k=q[x.id];for(let W in k)c(k[W].object),delete k[W];delete q[x.id]}}function z(){T(),o=!0,r!==i&&(r=i,h(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:z,resetDefaultState:T,dispose:V,releaseStatesOfGeometry:L,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:g,disableUnusedAttributes:E}}function Jm(s,t,e){let n;function i(h){n=h}function r(h,c){s.drawArrays(n,h,c),e.update(c,n,1)}function o(h,c,u){u!==0&&(s.drawArraysInstanced(n,h,c,u),e.update(c,n,u))}function a(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,u);let f=0;for(let m=0;m<u;m++)f+=c[m];e.update(f,n,1)}function l(h,c,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h.length;m++)o(h[m],c[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,c,0,d,0,u);let m=0;for(let y=0;y<u;y++)m+=c[y]*d[y];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Qm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(U){return!(U!==On&&n.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let z=U===wr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==li&&n.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==ri&&!z)}function l(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=m>0,L=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:V,maxSamples:L}}function t0(s){let t=this,e=null,n=0,i=!1,r=!1,o=new vn,a=new ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?c(null):h();else{let E=r?0:n,v=E*4,_=p.clippingState||null;l.value=_,_=c(m,d,v,f);for(let V=0;V!==v;++V)_[V]=e[V];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,d,f,m){let y=u!==null?u.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let p=f+y*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,_=f;v!==y;++v,_+=4)o.copy(u[v]).applyMatrix4(E,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function e0(s){let t=new WeakMap;function e(o,a){return a===Ka?o.mapping=Is:a===Ja&&(o.mapping=Ls),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ka||a===Ja)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new Il(l.height);return h.fromEquirectangularTexture(s,o),t.set(o,h),o.addEventListener("dispose",i),e(h.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var xo=class extends go{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Es=4,mh=[.125,.215,.35,.446,.526,.582],Hi=20,Pa=new xo,gh=new pe,Ia=null,La=0,ka=0,Da=!1,Oi=(1+Math.sqrt(5))/2,bs=1/Oi,yh=[new I(-Oi,bs,0),new I(Oi,bs,0),new I(-bs,0,Oi),new I(bs,0,Oi),new I(0,Oi,-bs),new I(0,Oi,bs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Os=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ia=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ia,La,ka),this._renderer.xr.enabled=Da,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Is||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ia=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:wr,format:On,colorSpace:qs,depthBuffer:!1},i=xh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n0(r)),this._blurMaterial=i0(r,t,e)}return i}_compileMaterial(t){let e=new Bt(this._lodPlanes[0],t);this._renderer.compile(e,Pa)}_sceneToCubeUV(t,e,n,i){let a=new rn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(gh),c.toneMapping=Si,c.autoClear=!1;let f=new we({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),m=new Bt(new kt,f),y=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,y=!0):(f.color.copy(gh),y=!0);for(let p=0;p<6;p++){let E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));let v=this._cubeSize;jr(i,E*v,p>2?v:0,v,v),c.setRenderTarget(i),y&&c.render(m,a),c.render(t,a)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=d,c.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Is||t.mapping===Ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Pa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yh[(i-r-1)%yh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,u=new Bt(this._lodPlanes[i],h),d=h.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),y=r/m,g=isFinite(r)?1+Math.floor(c*y):Hi;g>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Hi}`);let p=[],E=0;for(let U=0;U<Hi;++U){let z=U/y,T=Math.exp(-z*z/2);p.push(T),U===0?E+=T:U<g&&(E+=2*T)}for(let U=0;U<p.length;U++)p[U]=p[U]/E;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;let _=this._sizeLods[i],V=3*_*(i>v-Es?i-v+Es:0),L=4*(this._cubeSize-_);jr(e,V,L,3*_,2*_),l.setRenderTarget(e),l.render(u,Pa)}};function n0(s){let t=[],e=[],n=[],i=s,r=s-Es+1+mh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Es?l=mh[o-s+Es-1]:o===0&&(l=0),n.push(l);let h=1/(a-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,m=6,y=3,g=2,p=1,E=new Float32Array(y*m*f),v=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let L=0;L<f;L++){let U=L%3*2/3-1,z=L>2?0:-1,T=[U,z,0,U+2/3,z,0,U+2/3,z+1,0,U,z,0,U+2/3,z+1,0,U,z+1,0];E.set(T,y*m*L),v.set(d,g*m*L);let x=[L,L,L,L,L,L];_.set(x,p*m*L)}let V=new ze;V.setAttribute("position",new An(E,y)),V.setAttribute("uv",new An(v,g)),V.setAttribute("faceIndex",new An(_,p)),t.push(V),i>Es&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xh(s,t,e){let n=new hi(s,t,e);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function i0(s,t,e){let n=new Float32Array(Hi),i=new I(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_c(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function _h(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function vh(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}function s0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,h=l===Ka||l===Ja,c=l===Is||l===Ls;if(h||c){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Os(s)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return h&&f&&f.height>0||c&&f&&i(f)?(e===null&&(e=new Os(s)),u=h?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function r0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&rr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function o0(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let y=d.morphAttributes[m];for(let g=0,p=y.length;g<p;g++)t.remove(y[g])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let y=f[m];for(let g=0,p=y.length;g<p;g++)t.update(y[g],s.ARRAY_BUFFER)}}function h(u){let d=[],f=u.index,m=u.attributes.position,y=0;if(f!==null){let E=f.array;y=f.version;for(let v=0,_=E.length;v<_;v+=3){let V=E[v+0],L=E[v+1],U=E[v+2];d.push(V,L,L,U,U,V)}}else if(m!==void 0){let E=m.array;y=m.version;for(let v=0,_=E.length/3-1;v<_;v+=3){let V=v+0,L=v+1,U=v+2;d.push(V,L,L,U,U,V)}}else return;let g=new(uu(d)?mo:po)(d,1);g.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function c(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:c}}function a0(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function h(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function c(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,y){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)h(d[p]/o,f[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,m);let p=0;for(let E=0;E<m;E++)p+=f[E]*y[E];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function l0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function c0(s,t,e){let n=new WeakMap,i=new Ce;function r(o,a,l){let h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],v=0;f===!0&&(v=1),m===!0&&(v=2),y===!0&&(v=3);let _=a.attributes.position.count*v,V=1;_>t.maxTextureSize&&(V=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let L=new Float32Array(_*V*4*u),U=new fo(L,_,V,u);U.type=ri,U.needsUpdate=!0;let z=v*4;for(let x=0;x<u;x++){let A=g[x],q=p[x],k=E[x],W=_*V*4*x;for(let G=0;G<A.count;G++){let O=G*z;f===!0&&(i.fromBufferAttribute(A,G),L[W+O+0]=i.x,L[W+O+1]=i.y,L[W+O+2]=i.z,L[W+O+3]=0),m===!0&&(i.fromBufferAttribute(q,G),L[W+O+4]=i.x,L[W+O+5]=i.y,L[W+O+6]=i.z,L[W+O+7]=0),y===!0&&(i.fromBufferAttribute(k,G),L[W+O+8]=i.x,L[W+O+9]=i.y,L[W+O+10]=i.z,L[W+O+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:U,size:new Rt(_,V)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<h.length;y++)f+=h[y];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",h)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function h0(s,t,e,n){let i=new WeakMap;function r(l){let h=n.render.frame,c=l.geometry,u=t.get(l,c);if(i.get(u)!==h&&(t.update(u),i.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return u}function o(){i=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var _o=class extends Mn{constructor(t,e,n,i,r,o,a,l,h,c=As){if(c!==As&&c!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===As&&(n=Wi),n===void 0&&c===Ds&&(n=ks),super(null,i,r,o,a,l,c,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},mu=new Mn,Mh=new _o(1,1),gu=new fo,yu=new Cl,xu=new yo,bh=[],Sh=[],Eh=new Float32Array(16),wh=new Float32Array(9),Th=new Float32Array(4);function Ys(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=bh[i];if(r===void 0&&(r=new Float32Array(i),bh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ze(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ke(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function zo(s,t){let e=Sh[t];e===void 0&&(e=new Int32Array(t),Sh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function u0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function d0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2fv(this.addr,t),Ke(e,t)}}function f0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;s.uniform3fv(this.addr,t),Ke(e,t)}}function p0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4fv(this.addr,t),Ke(e,t)}}function m0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;Th.set(n),s.uniformMatrix2fv(this.addr,!1,Th),Ke(e,n)}}function g0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;wh.set(n),s.uniformMatrix3fv(this.addr,!1,wh),Ke(e,n)}}function y0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;Eh.set(n),s.uniformMatrix4fv(this.addr,!1,Eh),Ke(e,n)}}function x0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function _0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2iv(this.addr,t),Ke(e,t)}}function v0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;s.uniform3iv(this.addr,t),Ke(e,t)}}function M0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4iv(this.addr,t),Ke(e,t)}}function b0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function S0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;s.uniform2uiv(this.addr,t),Ke(e,t)}}function E0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;s.uniform3uiv(this.addr,t),Ke(e,t)}}function w0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;s.uniform4uiv(this.addr,t),Ke(e,t)}}function T0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Mh.compareFunction=hu,r=Mh):r=mu,e.setTexture2D(t||r,i)}function A0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||yu,i)}function R0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||xu,i)}function C0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||gu,i)}function P0(s){switch(s){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return y0;case 5124:case 35670:return x0;case 35667:case 35671:return _0;case 35668:case 35672:return v0;case 35669:case 35673:return M0;case 5125:return b0;case 36294:return S0;case 36295:return E0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}function I0(s,t){s.uniform1fv(this.addr,t)}function L0(s,t){let e=Ys(t,this.size,2);s.uniform2fv(this.addr,e)}function k0(s,t){let e=Ys(t,this.size,3);s.uniform3fv(this.addr,e)}function D0(s,t){let e=Ys(t,this.size,4);s.uniform4fv(this.addr,e)}function U0(s,t){let e=Ys(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function N0(s,t){let e=Ys(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function z0(s,t){let e=Ys(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function O0(s,t){s.uniform1iv(this.addr,t)}function F0(s,t){s.uniform2iv(this.addr,t)}function B0(s,t){s.uniform3iv(this.addr,t)}function H0(s,t){s.uniform4iv(this.addr,t)}function V0(s,t){s.uniform1uiv(this.addr,t)}function G0(s,t){s.uniform2uiv(this.addr,t)}function W0(s,t){s.uniform3uiv(this.addr,t)}function X0(s,t){s.uniform4uiv(this.addr,t)}function $0(s,t,e){let n=this.cache,i=t.length,r=zo(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||mu,r[o])}function q0(s,t,e){let n=this.cache,i=t.length,r=zo(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||yu,r[o])}function Y0(s,t,e){let n=this.cache,i=t.length,r=zo(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||xu,r[o])}function j0(s,t,e){let n=this.cache,i=t.length,r=zo(e,i);Ze(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||gu,r[o])}function Z0(s){switch(s){case 5126:return I0;case 35664:return L0;case 35665:return k0;case 35666:return D0;case 35674:return U0;case 35675:return N0;case 35676:return z0;case 5124:case 35670:return O0;case 35667:case 35671:return F0;case 35668:case 35672:return B0;case 35669:case 35673:return H0;case 5125:return V0;case 36294:return G0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return j0}}var Ll=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=P0(e.type)}},kl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Z0(e.type)}},Dl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Ua=/(\w+)(\])?(\[|\.)?/g;function Ah(s,t){s.seq.push(t),s.map[t.id]=t}function K0(s,t,e){let n=s.name,i=n.length;for(Ua.lastIndex=0;;){let r=Ua.exec(n),o=Ua.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===i){Ah(e,h===void 0?new Ll(a,s,t):new kl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Dl(a),Ah(e,u)),e=u}}}var Cs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);K0(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Rh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var J0=37297,Q0=0;function tg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Ch=new ye;function eg(s){Ee._getMatrix(Ch,Ee.workingColorSpace,s);let t=`mat3( ${Ch.elements.map(e=>e.toFixed(4))} )`;switch(Ee.getTransfer(s)){case No:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ph(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+tg(s.getShaderSource(t),o)}else return i}function ng(s,t){let e=eg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ig(s,t){let e;switch(t){case fd:e="Linear";break;case pd:e="Reinhard";break;case md:e="Cineon";break;case uc:e="ACESFilmic";break;case yd:e="AgX";break;case xd:e="Neutral";break;case gd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zr=new I;function sg(){Ee.getLuminanceCoefficients(Zr);let s=Zr.x.toFixed(4),t=Zr.y.toFixed(4),e=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function og(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ag(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function or(s){return s!==""}function Ih(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(s){return s.replace(lg,hg)}var cg=new Map;function hg(s,t){let e=_e[t];if(e===void 0){let n=cg.get(t);if(n!==void 0)e=_e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ul(e)}var ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(s){return s.replace(ug,dg)}function dg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Dh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function fg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Zh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===hc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function pg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Is:case Ls:t="ENVMAP_TYPE_CUBE";break;case Uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ls:t="ENVMAP_MODE_REFRACTION";break}return t}function gg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Kh:t="ENVMAP_BLENDING_MULTIPLY";break;case ud:t="ENVMAP_BLENDING_MIX";break;case dd:t="ENVMAP_BLENDING_ADD";break}return t}function yg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xg(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=fg(e),h=pg(e),c=mg(e),u=gg(e),d=yg(e),f=rg(e),m=og(r),y=i.createProgram(),g,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(or).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(or).join(`
`),p.length>0&&(p+=`
`)):(g=[Dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[Dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Si?"#define TONE_MAPPING":"",e.toneMapping!==Si?_e.tonemapping_pars_fragment:"",e.toneMapping!==Si?ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,ng("linearToOutputTexel",e.outputColorSpace),sg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),o=Ul(o),o=Ih(o,e),o=Lh(o,e),a=Ul(a),a=Ih(a,e),a=Lh(a,e),o=kh(o),a=kh(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=E+g+o,_=E+p+a,V=Rh(i,i.VERTEX_SHADER,v),L=Rh(i,i.FRAGMENT_SHADER,_);i.attachShader(y,V),i.attachShader(y,L),e.index0AttributeName!==void 0?i.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function U(A){if(s.debug.checkShaderErrors){let q=i.getProgramInfoLog(y).trim(),k=i.getShaderInfoLog(V).trim(),W=i.getShaderInfoLog(L).trim(),G=!0,O=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,V,L);else{let K=Ph(i,V,"vertex"),$=Ph(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+q+`
`+K+`
`+$)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(k===""||W==="")&&(O=!1);O&&(A.diagnostics={runnable:G,programLog:q,vertexShader:{log:k,prefix:g},fragmentShader:{log:W,prefix:p}})}i.deleteShader(V),i.deleteShader(L),z=new Cs(i,y),T=ag(i,y)}let z;this.getUniforms=function(){return z===void 0&&U(this),z};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(y,J0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Q0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=V,this.fragmentShader=L,this}var _g=0,Nl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new zl(t),e.set(t,n)),n}},zl=class{constructor(t){this.id=_g++,this.code=t,this.usedTimes=0}};function vg(s,t,e,n,i,r,o){let a=new pr,l=new Nl,h=new Set,c=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return h.add(T),T===0?"uv":`uv${T}`}function g(T,x,A,q,k){let W=q.fog,G=k.geometry,O=T.isMeshStandardMaterial?q.environment:null,K=(T.isMeshStandardMaterial?e:t).get(T.envMap||O),$=K&&K.mapping===Uo?K.image.height:null,ht=m[T.type];T.precision!==null&&(f=i.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let yt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,wt=yt!==void 0?yt.length:0,Ut=0;G.morphAttributes.position!==void 0&&(Ut=1),G.morphAttributes.normal!==void 0&&(Ut=2),G.morphAttributes.color!==void 0&&(Ut=3);let At,Z,ct,Dt;if(ht){let me=$n[ht];At=me.vertexShader,Z=me.fragmentShader}else At=T.vertexShader,Z=T.fragmentShader,l.update(T),ct=l.getVertexShaderID(T),Dt=l.getFragmentShaderID(T);let gt=s.getRenderTarget(),Lt=s.state.buffers.depth.getReversed(),Gt=k.isInstancedMesh===!0,Yt=k.isBatchedMesh===!0,ne=!!T.map,D=!!T.matcap,et=!!K,R=!!T.aoMap,vt=!!T.lightMap,pt=!!T.bumpMap,Ct=!!T.normalMap,bt=!!T.displacementMap,Xt=!!T.emissiveMap,Ht=!!T.metalnessMap,C=!!T.roughnessMap,M=T.anisotropy>0,Q=T.clearcoat>0,lt=T.dispersion>0,mt=T.iridescence>0,st=T.sheen>0,$t=T.transmission>0,N=M&&!!T.anisotropyMap,ft=Q&&!!T.clearcoatMap,H=Q&&!!T.clearcoatNormalMap,Y=Q&&!!T.clearcoatRoughnessMap,it=mt&&!!T.iridescenceMap,xt=mt&&!!T.iridescenceThicknessMap,Nt=st&&!!T.sheenColorMap,Mt=st&&!!T.sheenRoughnessMap,Vt=!!T.specularMap,jt=!!T.specularColorMap,zt=!!T.specularIntensityMap,F=$t&&!!T.transmissionMap,Ot=$t&&!!T.thicknessMap,ut=!!T.gradientMap,_t=!!T.alphaMap,Wt=T.alphaTest>0,Ft=!!T.alphaHash,he=!!T.extensions,Ae=Si;T.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Ae=s.toneMapping);let Ne={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:At,fragmentShader:Z,defines:T.defines,customVertexShaderID:ct,customFragmentShaderID:Dt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Yt,batchingColor:Yt&&k._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&k.instanceColor!==null,instancingMorph:Gt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:gt===null?s.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:qs,alphaToCoverage:!!T.alphaToCoverage,map:ne,matcap:D,envMap:et,envMapMode:et&&K.mapping,envMapCubeUVHeight:$,aoMap:R,lightMap:vt,bumpMap:pt,normalMap:Ct,displacementMap:d&&bt,emissiveMap:Xt,normalMapObjectSpace:Ct&&T.normalMapType===bd,normalMapTangentSpace:Ct&&T.normalMapType===cu,metalnessMap:Ht,roughnessMap:C,anisotropy:M,anisotropyMap:N,clearcoat:Q,clearcoatMap:ft,clearcoatNormalMap:H,clearcoatRoughnessMap:Y,dispersion:lt,iridescence:mt,iridescenceMap:it,iridescenceThicknessMap:xt,sheen:st,sheenColorMap:Nt,sheenRoughnessMap:Mt,specularMap:Vt,specularColorMap:jt,specularIntensityMap:zt,transmission:$t,transmissionMap:F,thicknessMap:Ot,gradientMap:ut,opaque:T.transparent===!1&&T.blending===Ts&&T.alphaToCoverage===!1,alphaMap:_t,alphaTest:Wt,alphaHash:Ft,combine:T.combine,mapUv:ne&&y(T.map.channel),aoMapUv:R&&y(T.aoMap.channel),lightMapUv:vt&&y(T.lightMap.channel),bumpMapUv:pt&&y(T.bumpMap.channel),normalMapUv:Ct&&y(T.normalMap.channel),displacementMapUv:bt&&y(T.displacementMap.channel),emissiveMapUv:Xt&&y(T.emissiveMap.channel),metalnessMapUv:Ht&&y(T.metalnessMap.channel),roughnessMapUv:C&&y(T.roughnessMap.channel),anisotropyMapUv:N&&y(T.anisotropyMap.channel),clearcoatMapUv:ft&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:H&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&y(T.sheenRoughnessMap.channel),specularMapUv:Vt&&y(T.specularMap.channel),specularColorMapUv:jt&&y(T.specularColorMap.channel),specularIntensityMapUv:zt&&y(T.specularIntensityMap.channel),transmissionMapUv:F&&y(T.transmissionMap.channel),thicknessMapUv:Ot&&y(T.thicknessMap.channel),alphaMapUv:_t&&y(T.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ct||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!G.attributes.uv&&(ne||_t),fog:!!W,useFog:T.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Lt,skinning:k.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Ut,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ne&&T.map.isVideoTexture===!0&&Ee.getTransfer(T.map.colorSpace)===Re,decodeVideoTextureEmissive:Xt&&T.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(T.emissiveMap.colorSpace)===Re,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===je,flipSided:T.side===qe,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:he&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&T.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ne.vertexUv1s=h.has(1),Ne.vertexUv2s=h.has(2),Ne.vertexUv3s=h.has(3),h.clear(),Ne}function p(T){let x=[];if(T.shaderID?x.push(T.shaderID):(x.push(T.customVertexShaderID),x.push(T.customFragmentShaderID)),T.defines!==void 0)for(let A in T.defines)x.push(A),x.push(T.defines[A]);return T.isRawShaderMaterial===!1&&(E(x,T),v(x,T),x.push(s.outputColorSpace)),x.push(T.customProgramCacheKey),x.join()}function E(T,x){T.push(x.precision),T.push(x.outputColorSpace),T.push(x.envMapMode),T.push(x.envMapCubeUVHeight),T.push(x.mapUv),T.push(x.alphaMapUv),T.push(x.lightMapUv),T.push(x.aoMapUv),T.push(x.bumpMapUv),T.push(x.normalMapUv),T.push(x.displacementMapUv),T.push(x.emissiveMapUv),T.push(x.metalnessMapUv),T.push(x.roughnessMapUv),T.push(x.anisotropyMapUv),T.push(x.clearcoatMapUv),T.push(x.clearcoatNormalMapUv),T.push(x.clearcoatRoughnessMapUv),T.push(x.iridescenceMapUv),T.push(x.iridescenceThicknessMapUv),T.push(x.sheenColorMapUv),T.push(x.sheenRoughnessMapUv),T.push(x.specularMapUv),T.push(x.specularColorMapUv),T.push(x.specularIntensityMapUv),T.push(x.transmissionMapUv),T.push(x.thicknessMapUv),T.push(x.combine),T.push(x.fogExp2),T.push(x.sizeAttenuation),T.push(x.morphTargetsCount),T.push(x.morphAttributeCount),T.push(x.numDirLights),T.push(x.numPointLights),T.push(x.numSpotLights),T.push(x.numSpotLightMaps),T.push(x.numHemiLights),T.push(x.numRectAreaLights),T.push(x.numDirLightShadows),T.push(x.numPointLightShadows),T.push(x.numSpotLightShadows),T.push(x.numSpotLightShadowsWithMaps),T.push(x.numLightProbes),T.push(x.shadowMapType),T.push(x.toneMapping),T.push(x.numClippingPlanes),T.push(x.numClipIntersection),T.push(x.depthPacking)}function v(T,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),T.push(a.mask)}function _(T){let x=m[T.type],A;if(x){let q=$n[x];A=hf.clone(q.uniforms)}else A=T.uniforms;return A}function V(T,x){let A;for(let q=0,k=c.length;q<k;q++){let W=c[q];if(W.cacheKey===x){A=W,++A.usedTimes;break}}return A===void 0&&(A=new xg(s,x,T,r),c.push(A)),A}function L(T){if(--T.usedTimes===0){let x=c.indexOf(T);c[x]=c[c.length-1],c.pop(),T.destroy()}}function U(T){l.remove(T)}function z(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:V,releaseProgram:L,releaseShaderCache:U,programs:c,dispose:z}}function Mg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function bg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Uh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Nh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,m,y,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:y,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=y,p.group=g),t++,p}function a(u,d,f,m,y,g){let p=o(u,d,f,m,y,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,m,y,g){let p=o(u,d,f,m,y,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function h(u,d){e.length>1&&e.sort(u||bg),n.length>1&&n.sort(d||Uh),i.length>1&&i.sort(d||Uh)}function c(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:c,sort:h}}function Sg(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Nh,s.set(n,[o])):i>=r.length?(o=new Nh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Eg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new pe};break;case"SpotLight":e={position:new I,direction:new I,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":e={color:new pe,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function wg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Tg=0;function Ag(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Rg(s){let t=new Eg,e=wg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new I);let i=new I,r=new Ie,o=new Ie;function a(h){let c=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,m=0,y=0,g=0,p=0,E=0,v=0,_=0,V=0,L=0,U=0;h.sort(Ag);for(let T=0,x=h.length;T<x;T++){let A=h[T],q=A.color,k=A.intensity,W=A.distance,G=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)c+=q.r*k,u+=q.g*k,d+=q.b*k;else if(A.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(A.sh.coefficients[O],k);U++}else if(A.isDirectionalLight){let O=t.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let K=A.shadow,$=e.get(A);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=A.shadow.matrix,E++}n.directional[f]=O,f++}else if(A.isSpotLight){let O=t.get(A);O.position.setFromMatrixPosition(A.matrixWorld),O.color.copy(q).multiplyScalar(k),O.distance=W,O.coneCos=Math.cos(A.angle),O.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),O.decay=A.decay,n.spot[y]=O;let K=A.shadow;if(A.map&&(n.spotLightMap[V]=A.map,V++,K.updateMatrices(A),A.castShadow&&L++),n.spotLightMatrix[y]=K.matrix,A.castShadow){let $=e.get(A);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,n.spotShadow[y]=$,n.spotShadowMap[y]=G,_++}y++}else if(A.isRectAreaLight){let O=t.get(A);O.color.copy(q).multiplyScalar(k),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=O,g++}else if(A.isPointLight){let O=t.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),O.distance=A.distance,O.decay=A.decay,A.castShadow){let K=A.shadow,$=e.get(A);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,$.shadowCameraNear=K.camera.near,$.shadowCameraFar=K.camera.far,n.pointShadow[m]=$,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=A.shadow.matrix,v++}n.point[m]=O,m++}else if(A.isHemisphereLight){let O=t.get(A);O.skyColor.copy(A.color).multiplyScalar(k),O.groundColor.copy(A.groundColor).multiplyScalar(k),n.hemi[p]=O,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Zt.LTC_FLOAT_1,n.rectAreaLTC2=Zt.LTC_FLOAT_2):(n.rectAreaLTC1=Zt.LTC_HALF_1,n.rectAreaLTC2=Zt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=d;let z=n.hash;(z.directionalLength!==f||z.pointLength!==m||z.spotLength!==y||z.rectAreaLength!==g||z.hemiLength!==p||z.numDirectionalShadows!==E||z.numPointShadows!==v||z.numSpotShadows!==_||z.numSpotMaps!==V||z.numLightProbes!==U)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+V-L,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=U,z.directionalLength=f,z.pointLength=m,z.spotLength=y,z.rectAreaLength=g,z.hemiLength=p,z.numDirectionalShadows=E,z.numPointShadows=v,z.numSpotShadows=_,z.numSpotMaps=V,z.numLightProbes=U,n.version=Tg++)}function l(h,c){let u=0,d=0,f=0,m=0,y=0,g=c.matrixWorldInverse;for(let p=0,E=h.length;p<E;p++){let v=h[p];if(v.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(v.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let _=n.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:n}}function zh(s){let t=new Rg(s),e=[],n=[];function i(c){h.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function o(c){n.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Cg(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new zh(s),t.set(i,[a])):r>=o.length?(a=new zh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ol=class extends wi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fl=class extends wi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ig=`uniform sampler2D shadow_pass;
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
}`;function Lg(s,t,e){let n=new mr,i=new Rt,r=new Rt,o=new Ce,a=new Ol({depthPacking:Md}),l=new Fl,h={},c=e.maxTextureSize,u={[Ei]:qe,[qe]:Ei,[je]:je},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Pg,fragmentShader:Ig}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new ze;m.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Bt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zh;let p=this.type;this.render=function(L,U,z){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;let T=s.getRenderTarget(),x=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),q=s.state;q.setBlending(bi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let k=p!==si&&this.type===si,W=p===si&&this.type!==si;for(let G=0,O=L.length;G<O;G++){let K=L[G],$=K.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);let ht=$.getFrameExtents();if(i.multiply(ht),r.copy($.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/ht.x),i.x=r.x*ht.x,$.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/ht.y),i.y=r.y*ht.y,$.mapSize.y=r.y)),$.map===null||k===!0||W===!0){let wt=this.type!==si?{minFilter:Fn,magFilter:Fn}:{};$.map!==null&&$.map.dispose(),$.map=new hi(i.x,i.y,wt),$.map.texture.name=K.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();let yt=$.getViewportCount();for(let wt=0;wt<yt;wt++){let Ut=$.getViewport(wt);o.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),q.viewport(o),$.updateMatrices(K,wt),n=$.getFrustum(),_(U,z,$.camera,K,this.type)}$.isPointLightShadow!==!0&&this.type===si&&E($,z),$.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(T,x,A)};function E(L,U){let z=t.update(y);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,f.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new hi(i.x,i.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(U,null,z,d,y,null),f.uniforms.shadow_pass.value=L.mapPass.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(U,null,z,f,y,null)}function v(L,U,z,T){let x=null,A=z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(A!==void 0)x=A;else if(x=z.isPointLight===!0?l:a,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){let q=x.uuid,k=U.uuid,W=h[q];W===void 0&&(W={},h[q]=W);let G=W[k];G===void 0&&(G=x.clone(),W[k]=G,U.addEventListener("dispose",V)),x=G}if(x.visible=U.visible,x.wireframe=U.wireframe,T===si?x.side=U.shadowSide!==null?U.shadowSide:U.side:x.side=U.shadowSide!==null?U.shadowSide:u[U.side],x.alphaMap=U.alphaMap,x.alphaTest=U.alphaTest,x.map=U.map,x.clipShadows=U.clipShadows,x.clippingPlanes=U.clippingPlanes,x.clipIntersection=U.clipIntersection,x.displacementMap=U.displacementMap,x.displacementScale=U.displacementScale,x.displacementBias=U.displacementBias,x.wireframeLinewidth=U.wireframeLinewidth,x.linewidth=U.linewidth,z.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let q=s.properties.get(x);q.light=z}return x}function _(L,U,z,T,x){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&x===si)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,L.matrixWorld);let k=t.update(L),W=L.material;if(Array.isArray(W)){let G=k.groups;for(let O=0,K=G.length;O<K;O++){let $=G[O],ht=W[$.materialIndex];if(ht&&ht.visible){let yt=v(L,ht,T,x);L.onBeforeShadow(s,L,U,z,k,yt,$),s.renderBufferDirect(z,null,k,yt,L,$),L.onAfterShadow(s,L,U,z,k,yt,$)}}}else if(W.visible){let G=v(L,W,T,x);L.onBeforeShadow(s,L,U,z,k,G,null),s.renderBufferDirect(z,null,k,G,L,null),L.onAfterShadow(s,L,U,z,k,G,null)}}let q=L.children;for(let k=0,W=q.length;k<W;k++)_(q[k],U,z,T,x)}function V(L){L.target.removeEventListener("dispose",V);for(let z in h){let T=h[z],x=L.target.uuid;x in T&&(T[x].dispose(),delete T[x])}}}var kg={[Wa]:Xa,[$a]:ja,[qa]:Za,[Ps]:Ya,[Xa]:Wa,[ja]:$a,[Za]:qa,[Ya]:Ps};function Dg(s,t){function e(){let F=!1,Ot=new Ce,ut=null,_t=new Ce(0,0,0,0);return{setMask:function(Wt){ut!==Wt&&!F&&(s.colorMask(Wt,Wt,Wt,Wt),ut=Wt)},setLocked:function(Wt){F=Wt},setClear:function(Wt,Ft,he,Ae,Ne){Ne===!0&&(Wt*=Ae,Ft*=Ae,he*=Ae),Ot.set(Wt,Ft,he,Ae),_t.equals(Ot)===!1&&(s.clearColor(Wt,Ft,he,Ae),_t.copy(Ot))},reset:function(){F=!1,ut=null,_t.set(-1,0,0,0)}}}function n(){let F=!1,Ot=!1,ut=null,_t=null,Wt=null;return{setReversed:function(Ft){if(Ot!==Ft){let he=t.get("EXT_clip_control");Ot?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT);let Ae=Wt;Wt=null,this.setClear(Ae)}Ot=Ft},getReversed:function(){return Ot},setTest:function(Ft){Ft?gt(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(Ft){ut!==Ft&&!F&&(s.depthMask(Ft),ut=Ft)},setFunc:function(Ft){if(Ot&&(Ft=kg[Ft]),_t!==Ft){switch(Ft){case Wa:s.depthFunc(s.NEVER);break;case Xa:s.depthFunc(s.ALWAYS);break;case $a:s.depthFunc(s.LESS);break;case Ps:s.depthFunc(s.LEQUAL);break;case qa:s.depthFunc(s.EQUAL);break;case Ya:s.depthFunc(s.GEQUAL);break;case ja:s.depthFunc(s.GREATER);break;case Za:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=Ft}},setLocked:function(Ft){F=Ft},setClear:function(Ft){Wt!==Ft&&(Ot&&(Ft=1-Ft),s.clearDepth(Ft),Wt=Ft)},reset:function(){F=!1,ut=null,_t=null,Wt=null,Ot=!1}}}function i(){let F=!1,Ot=null,ut=null,_t=null,Wt=null,Ft=null,he=null,Ae=null,Ne=null;return{setTest:function(me){F||(me?gt(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(me){Ot!==me&&!F&&(s.stencilMask(me),Ot=me)},setFunc:function(me,He,De){(ut!==me||_t!==He||Wt!==De)&&(s.stencilFunc(me,He,De),ut=me,_t=He,Wt=De)},setOp:function(me,He,De){(Ft!==me||he!==He||Ae!==De)&&(s.stencilOp(me,He,De),Ft=me,he=He,Ae=De)},setLocked:function(me){F=me},setClear:function(me){Ne!==me&&(s.clearStencil(me),Ne=me)},reset:function(){F=!1,Ot=null,ut=null,_t=null,Wt=null,Ft=null,he=null,Ae=null,Ne=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,h=new WeakMap,c={},u={},d=new WeakMap,f=[],m=null,y=!1,g=null,p=null,E=null,v=null,_=null,V=null,L=null,U=new pe(0,0,0),z=0,T=!1,x=null,A=null,q=null,k=null,W=null,G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,K=0,$=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec($)[1]),O=K>=1):$.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),O=K>=2);let ht=null,yt={},wt=s.getParameter(s.SCISSOR_BOX),Ut=s.getParameter(s.VIEWPORT),At=new Ce().fromArray(wt),Z=new Ce().fromArray(Ut);function ct(F,Ot,ut,_t){let Wt=new Uint8Array(4),Ft=s.createTexture();s.bindTexture(F,Ft),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let he=0;he<ut;he++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(Ot,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,Wt):s.texImage2D(Ot+he,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Wt);return Ft}let Dt={};Dt[s.TEXTURE_2D]=ct(s.TEXTURE_2D,s.TEXTURE_2D,1),Dt[s.TEXTURE_CUBE_MAP]=ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Dt[s.TEXTURE_2D_ARRAY]=ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Dt[s.TEXTURE_3D]=ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(s.DEPTH_TEST),o.setFunc(Ps),pt(!1),Ct(Oc),gt(s.CULL_FACE),R(bi);function gt(F){c[F]!==!0&&(s.enable(F),c[F]=!0)}function Lt(F){c[F]!==!1&&(s.disable(F),c[F]=!1)}function Gt(F,Ot){return u[F]!==Ot?(s.bindFramebuffer(F,Ot),u[F]=Ot,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Ot),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Yt(F,Ot){let ut=f,_t=!1;if(F){ut=d.get(Ot),ut===void 0&&(ut=[],d.set(Ot,ut));let Wt=F.textures;if(ut.length!==Wt.length||ut[0]!==s.COLOR_ATTACHMENT0){for(let Ft=0,he=Wt.length;Ft<he;Ft++)ut[Ft]=s.COLOR_ATTACHMENT0+Ft;ut.length=Wt.length,_t=!0}}else ut[0]!==s.BACK&&(ut[0]=s.BACK,_t=!0);_t&&s.drawBuffers(ut)}function ne(F){return m!==F?(s.useProgram(F),m=F,!0):!1}let D={[Fi]:s.FUNC_ADD,[Yu]:s.FUNC_SUBTRACT,[ju]:s.FUNC_REVERSE_SUBTRACT};D[Zu]=s.MIN,D[Ku]=s.MAX;let et={[Ju]:s.ZERO,[Qu]:s.ONE,[td]:s.SRC_COLOR,[Va]:s.SRC_ALPHA,[od]:s.SRC_ALPHA_SATURATE,[sd]:s.DST_COLOR,[nd]:s.DST_ALPHA,[ed]:s.ONE_MINUS_SRC_COLOR,[Ga]:s.ONE_MINUS_SRC_ALPHA,[rd]:s.ONE_MINUS_DST_COLOR,[id]:s.ONE_MINUS_DST_ALPHA,[ad]:s.CONSTANT_COLOR,[ld]:s.ONE_MINUS_CONSTANT_COLOR,[cd]:s.CONSTANT_ALPHA,[hd]:s.ONE_MINUS_CONSTANT_ALPHA};function R(F,Ot,ut,_t,Wt,Ft,he,Ae,Ne,me){if(F===bi){y===!0&&(Lt(s.BLEND),y=!1);return}if(y===!1&&(gt(s.BLEND),y=!0),F!==qu){if(F!==g||me!==T){if((p!==Fi||_!==Fi)&&(s.blendEquation(s.FUNC_ADD),p=Fi,_=Fi),me)switch(F){case Ts:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fc:s.blendFunc(s.ONE,s.ONE);break;case Bc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Bc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,v=null,V=null,L=null,U.set(0,0,0),z=0,g=F,T=me}return}Wt=Wt||Ot,Ft=Ft||ut,he=he||_t,(Ot!==p||Wt!==_)&&(s.blendEquationSeparate(D[Ot],D[Wt]),p=Ot,_=Wt),(ut!==E||_t!==v||Ft!==V||he!==L)&&(s.blendFuncSeparate(et[ut],et[_t],et[Ft],et[he]),E=ut,v=_t,V=Ft,L=he),(Ae.equals(U)===!1||Ne!==z)&&(s.blendColor(Ae.r,Ae.g,Ae.b,Ne),U.copy(Ae),z=Ne),g=F,T=!1}function vt(F,Ot){F.side===je?Lt(s.CULL_FACE):gt(s.CULL_FACE);let ut=F.side===qe;Ot&&(ut=!ut),pt(ut),F.blending===Ts&&F.transparent===!1?R(bi):R(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let _t=F.stencilWrite;a.setTest(_t),_t&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Xt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(F){x!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),x=F)}function Ct(F){F!==Xu?(gt(s.CULL_FACE),F!==A&&(F===Oc?s.cullFace(s.BACK):F===$u?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),A=F}function bt(F){F!==q&&(O&&s.lineWidth(F),q=F)}function Xt(F,Ot,ut){F?(gt(s.POLYGON_OFFSET_FILL),(k!==Ot||W!==ut)&&(s.polygonOffset(Ot,ut),k=Ot,W=ut)):Lt(s.POLYGON_OFFSET_FILL)}function Ht(F){F?gt(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function C(F){F===void 0&&(F=s.TEXTURE0+G-1),ht!==F&&(s.activeTexture(F),ht=F)}function M(F,Ot,ut){ut===void 0&&(ht===null?ut=s.TEXTURE0+G-1:ut=ht);let _t=yt[ut];_t===void 0&&(_t={type:void 0,texture:void 0},yt[ut]=_t),(_t.type!==F||_t.texture!==Ot)&&(ht!==ut&&(s.activeTexture(ut),ht=ut),s.bindTexture(F,Ot||Dt[F]),_t.type=F,_t.texture=Ot)}function Q(){let F=yt[ht];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function lt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $t(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Nt(F){At.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),At.copy(F))}function Mt(F){Z.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Z.copy(F))}function Vt(F,Ot){let ut=h.get(Ot);ut===void 0&&(ut=new WeakMap,h.set(Ot,ut));let _t=ut.get(F);_t===void 0&&(_t=s.getUniformBlockIndex(Ot,F.name),ut.set(F,_t))}function jt(F,Ot){let _t=h.get(Ot).get(F);l.get(Ot)!==_t&&(s.uniformBlockBinding(Ot,_t,F.__bindingPointIndex),l.set(Ot,_t))}function zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},ht=null,yt={},u={},d=new WeakMap,f=[],m=null,y=!1,g=null,p=null,E=null,v=null,_=null,V=null,L=null,U=new pe(0,0,0),z=0,T=!1,x=null,A=null,q=null,k=null,W=null,At.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:gt,disable:Lt,bindFramebuffer:Gt,drawBuffers:Yt,useProgram:ne,setBlending:R,setMaterial:vt,setFlipSided:pt,setCullFace:Ct,setLineWidth:bt,setPolygonOffset:Xt,setScissorTest:Ht,activeTexture:C,bindTexture:M,unbindTexture:Q,compressedTexImage2D:lt,compressedTexImage3D:mt,texImage2D:it,texImage3D:xt,updateUBOMapping:Vt,uniformBlockBinding:jt,texStorage2D:H,texStorage3D:Y,texSubImage2D:st,texSubImage3D:$t,compressedTexSubImage2D:N,compressedTexSubImage3D:ft,scissor:Nt,viewport:Mt,reset:zt}}function Oh(s,t,e,n){let i=Ug(n);switch(e){case nu:return s*t;case su:return s*t;case ru:return s*t*2;case ou:return s*t/i.components*i.byteLength;case mc:return s*t/i.components*i.byteLength;case au:return s*t*2/i.components*i.byteLength;case gc:return s*t*2/i.components*i.byteLength;case iu:return s*t*3/i.components*i.byteLength;case On:return s*t*4/i.components*i.byteLength;case yc:return s*t*4/i.components*i.byteLength;case io:case so:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ro:case oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case el:case il:return Math.max(s,16)*Math.max(t,8)/4;case tl:case nl:return Math.max(s,8)*Math.max(t,8)/2;case sl:case rl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ol:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case cl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case hl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ul:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case dl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case fl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case pl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ml:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case gl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case yl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case xl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case _l:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case vl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ao:case Ml:case bl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case lu:case Sl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case El:case wl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ug(s){switch(s){case li:case Qh:return{byteLength:1,components:1};case fr:case tu:case wr:return{byteLength:2,components:1};case fc:case pc:return{byteLength:2,components:4};case Wi:case dc:case ri:return{byteLength:4,components:1};case eu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Ng(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Rt,c=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,M){return f?new OffscreenCanvas(C,M):ho("canvas")}function y(C,M,Q){let lt=1,mt=Ht(C);if((mt.width>Q||mt.height>Q)&&(lt=Q/Math.max(mt.width,mt.height)),lt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let st=Math.floor(lt*mt.width),$t=Math.floor(lt*mt.height);u===void 0&&(u=m(st,$t));let N=M?m(st,$t):u;return N.width=st,N.height=$t,N.getContext("2d").drawImage(C,0,0,st,$t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+st+"x"+$t+")."),N}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(C,M,Q,lt,mt=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let st=M;if(M===s.RED&&(Q===s.FLOAT&&(st=s.R32F),Q===s.HALF_FLOAT&&(st=s.R16F),Q===s.UNSIGNED_BYTE&&(st=s.R8)),M===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(st=s.R8UI),Q===s.UNSIGNED_SHORT&&(st=s.R16UI),Q===s.UNSIGNED_INT&&(st=s.R32UI),Q===s.BYTE&&(st=s.R8I),Q===s.SHORT&&(st=s.R16I),Q===s.INT&&(st=s.R32I)),M===s.RG&&(Q===s.FLOAT&&(st=s.RG32F),Q===s.HALF_FLOAT&&(st=s.RG16F),Q===s.UNSIGNED_BYTE&&(st=s.RG8)),M===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(st=s.RG8UI),Q===s.UNSIGNED_SHORT&&(st=s.RG16UI),Q===s.UNSIGNED_INT&&(st=s.RG32UI),Q===s.BYTE&&(st=s.RG8I),Q===s.SHORT&&(st=s.RG16I),Q===s.INT&&(st=s.RG32I)),M===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(st=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(st=s.RGB16UI),Q===s.UNSIGNED_INT&&(st=s.RGB32UI),Q===s.BYTE&&(st=s.RGB8I),Q===s.SHORT&&(st=s.RGB16I),Q===s.INT&&(st=s.RGB32I)),M===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(st=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(st=s.RGBA16UI),Q===s.UNSIGNED_INT&&(st=s.RGBA32UI),Q===s.BYTE&&(st=s.RGBA8I),Q===s.SHORT&&(st=s.RGBA16I),Q===s.INT&&(st=s.RGBA32I)),M===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(st=s.RGB9_E5),M===s.RGBA){let $t=mt?No:Ee.getTransfer(lt);Q===s.FLOAT&&(st=s.RGBA32F),Q===s.HALF_FLOAT&&(st=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(st=$t===Re?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(st=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(st=s.RGB5_A1)}return(st===s.R16F||st===s.R32F||st===s.RG16F||st===s.RG32F||st===s.RGBA16F||st===s.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function _(C,M){let Q;return C?M===null||M===Wi||M===ks?Q=s.DEPTH24_STENCIL8:M===ri?Q=s.DEPTH32F_STENCIL8:M===fr&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wi||M===ks?Q=s.DEPTH_COMPONENT24:M===ri?Q=s.DEPTH_COMPONENT32F:M===fr&&(Q=s.DEPTH_COMPONENT16),Q}function V(C,M){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Fn&&C.minFilter!==qn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function L(C){let M=C.target;M.removeEventListener("dispose",L),z(M),M.isVideoTexture&&c.delete(M)}function U(C){let M=C.target;M.removeEventListener("dispose",U),x(M)}function z(C){let M=n.get(C);if(M.__webglInit===void 0)return;let Q=C.source,lt=d.get(Q);if(lt){let mt=lt[M.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&T(C),Object.keys(lt).length===0&&d.delete(Q)}n.remove(C)}function T(C){let M=n.get(C);s.deleteTexture(M.__webglTexture);let Q=C.source,lt=d.get(Q);delete lt[M.__cacheKey],o.memory.textures--}function x(C){let M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(M.__webglFramebuffer[lt]))for(let mt=0;mt<M.__webglFramebuffer[lt].length;mt++)s.deleteFramebuffer(M.__webglFramebuffer[lt][mt]);else s.deleteFramebuffer(M.__webglFramebuffer[lt]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[lt])}else{if(Array.isArray(M.__webglFramebuffer))for(let lt=0;lt<M.__webglFramebuffer.length;lt++)s.deleteFramebuffer(M.__webglFramebuffer[lt]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let lt=0;lt<M.__webglColorRenderbuffer.length;lt++)M.__webglColorRenderbuffer[lt]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[lt]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let Q=C.textures;for(let lt=0,mt=Q.length;lt<mt;lt++){let st=n.get(Q[lt]);st.__webglTexture&&(s.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(Q[lt])}n.remove(C)}let A=0;function q(){A=0}function k(){let C=A;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),A+=1,C}function W(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function G(C,M){let Q=n.get(C);if(C.isVideoTexture&&bt(C),C.isRenderTargetTexture===!1&&C.version>0&&Q.__version!==C.version){let lt=C.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Q,C,M);return}}e.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+M)}function O(C,M){let Q=n.get(C);if(C.version>0&&Q.__version!==C.version){Z(Q,C,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+M)}function K(C,M){let Q=n.get(C);if(C.version>0&&Q.__version!==C.version){Z(Q,C,M);return}e.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+M)}function $(C,M){let Q=n.get(C);if(C.version>0&&Q.__version!==C.version){ct(Q,C,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+M)}let ht={[Bn]:s.REPEAT,[Vi]:s.CLAMP_TO_EDGE,[Qa]:s.MIRRORED_REPEAT},yt={[Fn]:s.NEAREST,[_d]:s.NEAREST_MIPMAP_NEAREST,[Pr]:s.NEAREST_MIPMAP_LINEAR,[qn]:s.LINEAR,[la]:s.LINEAR_MIPMAP_NEAREST,[Gi]:s.LINEAR_MIPMAP_LINEAR},wt={[Sd]:s.NEVER,[Cd]:s.ALWAYS,[Ed]:s.LESS,[hu]:s.LEQUAL,[wd]:s.EQUAL,[Rd]:s.GEQUAL,[Td]:s.GREATER,[Ad]:s.NOTEQUAL};function Ut(C,M){if(M.type===ri&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===qn||M.magFilter===la||M.magFilter===Pr||M.magFilter===Gi||M.minFilter===qn||M.minFilter===la||M.minFilter===Pr||M.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,ht[M.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ht[M.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ht[M.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,yt[M.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,yt[M.minFilter]),M.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,wt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Fn||M.minFilter!==Pr&&M.minFilter!==Gi||M.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function At(C,M){let Q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",L));let lt=M.source,mt=d.get(lt);mt===void 0&&(mt={},d.set(lt,mt));let st=W(M);if(st!==C.__cacheKey){mt[st]===void 0&&(mt[st]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),mt[st].usedTimes++;let $t=mt[C.__cacheKey];$t!==void 0&&(mt[C.__cacheKey].usedTimes--,$t.usedTimes===0&&T(M)),C.__cacheKey=st,C.__webglTexture=mt[st].texture}return Q}function Z(C,M,Q){let lt=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(lt=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(lt=s.TEXTURE_3D);let mt=At(C,M),st=M.source;e.bindTexture(lt,C.__webglTexture,s.TEXTURE0+Q);let $t=n.get(st);if(st.version!==$t.__version||mt===!0){e.activeTexture(s.TEXTURE0+Q);let N=Ee.getPrimaries(Ee.workingColorSpace),ft=M.colorSpace===Mi?null:Ee.getPrimaries(M.colorSpace),H=M.colorSpace===Mi||N===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);let Y=y(M.image,!1,i.maxTextureSize);Y=Xt(M,Y);let it=r.convert(M.format,M.colorSpace),xt=r.convert(M.type),Nt=v(M.internalFormat,it,xt,M.colorSpace,M.isVideoTexture);Ut(lt,M);let Mt,Vt=M.mipmaps,jt=M.isVideoTexture!==!0,zt=$t.__version===void 0||mt===!0,F=st.dataReady,Ot=V(M,Y);if(M.isDepthTexture)Nt=_(M.format===Ds,M.type),zt&&(jt?e.texStorage2D(s.TEXTURE_2D,1,Nt,Y.width,Y.height):e.texImage2D(s.TEXTURE_2D,0,Nt,Y.width,Y.height,0,it,xt,null));else if(M.isDataTexture)if(Vt.length>0){jt&&zt&&e.texStorage2D(s.TEXTURE_2D,Ot,Nt,Vt[0].width,Vt[0].height);for(let ut=0,_t=Vt.length;ut<_t;ut++)Mt=Vt[ut],jt?F&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Mt.width,Mt.height,it,xt,Mt.data):e.texImage2D(s.TEXTURE_2D,ut,Nt,Mt.width,Mt.height,0,it,xt,Mt.data);M.generateMipmaps=!1}else jt?(zt&&e.texStorage2D(s.TEXTURE_2D,Ot,Nt,Y.width,Y.height),F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Y.width,Y.height,it,xt,Y.data)):e.texImage2D(s.TEXTURE_2D,0,Nt,Y.width,Y.height,0,it,xt,Y.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){jt&&zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ot,Nt,Vt[0].width,Vt[0].height,Y.depth);for(let ut=0,_t=Vt.length;ut<_t;ut++)if(Mt=Vt[ut],M.format!==On)if(it!==null)if(jt){if(F)if(M.layerUpdates.size>0){let Wt=Oh(Mt.width,Mt.height,M.format,M.type);for(let Ft of M.layerUpdates){let he=Mt.data.subarray(Ft*Wt/Mt.data.BYTES_PER_ELEMENT,(Ft+1)*Wt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,Ft,Mt.width,Mt.height,1,it,he)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Mt.width,Mt.height,Y.depth,it,Mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,Nt,Mt.width,Mt.height,Y.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Mt.width,Mt.height,Y.depth,it,xt,Mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ut,Nt,Mt.width,Mt.height,Y.depth,0,it,xt,Mt.data)}else{jt&&zt&&e.texStorage2D(s.TEXTURE_2D,Ot,Nt,Vt[0].width,Vt[0].height);for(let ut=0,_t=Vt.length;ut<_t;ut++)Mt=Vt[ut],M.format!==On?it!==null?jt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,Mt.width,Mt.height,it,Mt.data):e.compressedTexImage2D(s.TEXTURE_2D,ut,Nt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?F&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,Mt.width,Mt.height,it,xt,Mt.data):e.texImage2D(s.TEXTURE_2D,ut,Nt,Mt.width,Mt.height,0,it,xt,Mt.data)}else if(M.isDataArrayTexture)if(jt){if(zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ot,Nt,Y.width,Y.height,Y.depth),F)if(M.layerUpdates.size>0){let ut=Oh(Y.width,Y.height,M.format,M.type);for(let _t of M.layerUpdates){let Wt=Y.data.subarray(_t*ut/Y.data.BYTES_PER_ELEMENT,(_t+1)*ut/Y.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,Y.width,Y.height,1,it,xt,Wt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,it,xt,Y.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,Y.width,Y.height,Y.depth,0,it,xt,Y.data);else if(M.isData3DTexture)jt?(zt&&e.texStorage3D(s.TEXTURE_3D,Ot,Nt,Y.width,Y.height,Y.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,it,xt,Y.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,Y.width,Y.height,Y.depth,0,it,xt,Y.data);else if(M.isFramebufferTexture){if(zt)if(jt)e.texStorage2D(s.TEXTURE_2D,Ot,Nt,Y.width,Y.height);else{let ut=Y.width,_t=Y.height;for(let Wt=0;Wt<Ot;Wt++)e.texImage2D(s.TEXTURE_2D,Wt,Nt,ut,_t,0,it,xt,null),ut>>=1,_t>>=1}}else if(Vt.length>0){if(jt&&zt){let ut=Ht(Vt[0]);e.texStorage2D(s.TEXTURE_2D,Ot,Nt,ut.width,ut.height)}for(let ut=0,_t=Vt.length;ut<_t;ut++)Mt=Vt[ut],jt?F&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,it,xt,Mt):e.texImage2D(s.TEXTURE_2D,ut,Nt,it,xt,Mt);M.generateMipmaps=!1}else if(jt){if(zt){let ut=Ht(Y);e.texStorage2D(s.TEXTURE_2D,Ot,Nt,ut.width,ut.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,it,xt,Y)}else e.texImage2D(s.TEXTURE_2D,0,Nt,it,xt,Y);g(M)&&p(lt),$t.__version=st.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ct(C,M,Q){if(M.image.length!==6)return;let lt=At(C,M),mt=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+Q);let st=n.get(mt);if(mt.version!==st.__version||lt===!0){e.activeTexture(s.TEXTURE0+Q);let $t=Ee.getPrimaries(Ee.workingColorSpace),N=M.colorSpace===Mi?null:Ee.getPrimaries(M.colorSpace),ft=M.colorSpace===Mi||$t===N?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let H=M.isCompressedTexture||M.image[0].isCompressedTexture,Y=M.image[0]&&M.image[0].isDataTexture,it=[];for(let _t=0;_t<6;_t++)!H&&!Y?it[_t]=y(M.image[_t],!0,i.maxCubemapSize):it[_t]=Y?M.image[_t].image:M.image[_t],it[_t]=Xt(M,it[_t]);let xt=it[0],Nt=r.convert(M.format,M.colorSpace),Mt=r.convert(M.type),Vt=v(M.internalFormat,Nt,Mt,M.colorSpace),jt=M.isVideoTexture!==!0,zt=st.__version===void 0||lt===!0,F=mt.dataReady,Ot=V(M,xt);Ut(s.TEXTURE_CUBE_MAP,M);let ut;if(H){jt&&zt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Ot,Vt,xt.width,xt.height);for(let _t=0;_t<6;_t++){ut=it[_t].mipmaps;for(let Wt=0;Wt<ut.length;Wt++){let Ft=ut[Wt];M.format!==On?Nt!==null?jt?F&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,0,0,Ft.width,Ft.height,Nt,Ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,Vt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,0,0,Ft.width,Ft.height,Nt,Mt,Ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,Vt,Ft.width,Ft.height,0,Nt,Mt,Ft.data)}}}else{if(ut=M.mipmaps,jt&&zt){ut.length>0&&Ot++;let _t=Ht(it[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Ot,Vt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Y){jt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,it[_t].width,it[_t].height,Nt,Mt,it[_t].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Vt,it[_t].width,it[_t].height,0,Nt,Mt,it[_t].data);for(let Wt=0;Wt<ut.length;Wt++){let he=ut[Wt].image[_t].image;jt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,0,0,he.width,he.height,Nt,Mt,he.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,Vt,he.width,he.height,0,Nt,Mt,he.data)}}else{jt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Nt,Mt,it[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Vt,Nt,Mt,it[_t]);for(let Wt=0;Wt<ut.length;Wt++){let Ft=ut[Wt];jt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,0,0,Nt,Mt,Ft.image[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,Vt,Nt,Mt,Ft.image[_t])}}}g(M)&&p(s.TEXTURE_CUBE_MAP),st.__version=mt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Dt(C,M,Q,lt,mt,st){let $t=r.convert(Q.format,Q.colorSpace),N=r.convert(Q.type),ft=v(Q.internalFormat,$t,N,Q.colorSpace),H=n.get(M),Y=n.get(Q);if(Y.__renderTarget=M,!H.__hasExternalTextures){let it=Math.max(1,M.width>>st),xt=Math.max(1,M.height>>st);mt===s.TEXTURE_3D||mt===s.TEXTURE_2D_ARRAY?e.texImage3D(mt,st,ft,it,xt,M.depth,0,$t,N,null):e.texImage2D(mt,st,ft,it,xt,0,$t,N,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Ct(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,mt,Y.__webglTexture,0,pt(M)):(mt===s.TEXTURE_2D||mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,lt,mt,Y.__webglTexture,st),e.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(C,M,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,C),M.depthBuffer){let lt=M.depthTexture,mt=lt&&lt.isDepthTexture?lt.type:null,st=_(M.stencilBuffer,mt),$t=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,N=pt(M);Ct(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,N,st,M.width,M.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,N,st,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,st,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$t,s.RENDERBUFFER,C)}else{let lt=M.textures;for(let mt=0;mt<lt.length;mt++){let st=lt[mt],$t=r.convert(st.format,st.colorSpace),N=r.convert(st.type),ft=v(st.internalFormat,$t,N,st.colorSpace),H=pt(M);Q&&Ct(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,H,ft,M.width,M.height):Ct(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,H,ft,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ft,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let lt=n.get(M.depthTexture);lt.__renderTarget=M,(!lt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);let mt=lt.__webglTexture,st=pt(M);if(M.depthTexture.format===As)Ct(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0);else if(M.depthTexture.format===Ds)Ct(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function Gt(C){let M=n.get(C),Q=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let lt=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),lt){let mt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,lt.removeEventListener("dispose",mt)};lt.addEventListener("dispose",mt),M.__depthDisposeCallback=mt}M.__boundDepthTexture=lt}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Lt(M.__webglFramebuffer,C)}else if(Q){M.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[lt]),M.__webglDepthbuffer[lt]===void 0)M.__webglDepthbuffer[lt]=s.createRenderbuffer(),gt(M.__webglDepthbuffer[lt],C,!1);else{let mt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=M.__webglDepthbuffer[lt];s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,st)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),gt(M.__webglDepthbuffer,C,!1);else{let lt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,mt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(C,M,Q){let lt=n.get(C);M!==void 0&&Dt(lt.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&Gt(C)}function ne(C){let M=C.texture,Q=n.get(C),lt=n.get(M);C.addEventListener("dispose",U);let mt=C.textures,st=C.isWebGLCubeRenderTarget===!0,$t=mt.length>1;if($t||(lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture()),lt.__version=M.version,o.memory.textures++),st){Q.__webglFramebuffer=[];for(let N=0;N<6;N++)if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer[N]=[];for(let ft=0;ft<M.mipmaps.length;ft++)Q.__webglFramebuffer[N][ft]=s.createFramebuffer()}else Q.__webglFramebuffer[N]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer=[];for(let N=0;N<M.mipmaps.length;N++)Q.__webglFramebuffer[N]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if($t)for(let N=0,ft=mt.length;N<ft;N++){let H=n.get(mt[N]);H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Ct(C)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let N=0;N<mt.length;N++){let ft=mt[N];Q.__webglColorRenderbuffer[N]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[N]);let H=r.convert(ft.format,ft.colorSpace),Y=r.convert(ft.type),it=v(ft.internalFormat,H,Y,ft.colorSpace,C.isXRRenderTarget===!0),xt=pt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,it,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+N,s.RENDERBUFFER,Q.__webglColorRenderbuffer[N])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),gt(Q.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(st){e.bindTexture(s.TEXTURE_CUBE_MAP,lt.__webglTexture),Ut(s.TEXTURE_CUBE_MAP,M);for(let N=0;N<6;N++)if(M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)Dt(Q.__webglFramebuffer[N][ft],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft);else Dt(Q.__webglFramebuffer[N],C,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);g(M)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if($t){for(let N=0,ft=mt.length;N<ft;N++){let H=mt[N],Y=n.get(H);e.bindTexture(s.TEXTURE_2D,Y.__webglTexture),Ut(s.TEXTURE_2D,H),Dt(Q.__webglFramebuffer,C,H,s.COLOR_ATTACHMENT0+N,s.TEXTURE_2D,0),g(H)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let N=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(N=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(N,lt.__webglTexture),Ut(N,M),M.mipmaps&&M.mipmaps.length>0)for(let ft=0;ft<M.mipmaps.length;ft++)Dt(Q.__webglFramebuffer[ft],C,M,s.COLOR_ATTACHMENT0,N,ft);else Dt(Q.__webglFramebuffer,C,M,s.COLOR_ATTACHMENT0,N,0);g(M)&&p(N),e.unbindTexture()}C.depthBuffer&&Gt(C)}function D(C){let M=C.textures;for(let Q=0,lt=M.length;Q<lt;Q++){let mt=M[Q];if(g(mt)){let st=E(C),$t=n.get(mt).__webglTexture;e.bindTexture(st,$t),p(st),e.unbindTexture()}}}let et=[],R=[];function vt(C){if(C.samples>0){if(Ct(C)===!1){let M=C.textures,Q=C.width,lt=C.height,mt=s.COLOR_BUFFER_BIT,st=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$t=n.get(C),N=M.length>1;if(N)for(let ft=0;ft<M.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,$t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,$t.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let ft=0;ft<M.length;ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(mt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(mt|=s.STENCIL_BUFFER_BIT)),N){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$t.__webglColorRenderbuffer[ft]);let H=n.get(M[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,H,0)}s.blitFramebuffer(0,0,Q,lt,0,0,Q,lt,mt,s.NEAREST),l===!0&&(et.length=0,R.length=0,et.push(s.COLOR_ATTACHMENT0+ft),C.depthBuffer&&C.resolveDepthBuffer===!1&&(et.push(st),R.push(st),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,R)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),N)for(let ft=0;ft<M.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,$t.__webglColorRenderbuffer[ft]);let H=n.get(M[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,$t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,H,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,$t.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function pt(C){return Math.min(i.maxSamples,C.samples)}function Ct(C){let M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function bt(C){let M=o.render.frame;c.get(C)!==M&&(c.set(C,M),C.update())}function Xt(C,M){let Q=C.colorSpace,lt=C.format,mt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Q!==qs&&Q!==Mi&&(Ee.getTransfer(Q)===Re?(lt!==On||mt!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),M}function Ht(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(h.width=C.naturalWidth||C.width,h.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(h.width=C.displayWidth,h.height=C.displayHeight):(h.width=C.width,h.height=C.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=q,this.setTexture2D=G,this.setTexture2DArray=O,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=Yt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ct}function zg(s,t){function e(n,i=Mi){let r,o=Ee.getTransfer(i);if(n===li)return s.UNSIGNED_BYTE;if(n===fc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===pc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===eu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Qh)return s.BYTE;if(n===tu)return s.SHORT;if(n===fr)return s.UNSIGNED_SHORT;if(n===dc)return s.INT;if(n===Wi)return s.UNSIGNED_INT;if(n===ri)return s.FLOAT;if(n===wr)return s.HALF_FLOAT;if(n===nu)return s.ALPHA;if(n===iu)return s.RGB;if(n===On)return s.RGBA;if(n===su)return s.LUMINANCE;if(n===ru)return s.LUMINANCE_ALPHA;if(n===As)return s.DEPTH_COMPONENT;if(n===Ds)return s.DEPTH_STENCIL;if(n===ou)return s.RED;if(n===mc)return s.RED_INTEGER;if(n===au)return s.RG;if(n===gc)return s.RG_INTEGER;if(n===yc)return s.RGBA_INTEGER;if(n===io||n===so||n===ro||n===oo)if(o===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tl||n===el||n===nl||n===il)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sl||n===rl||n===ol)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sl||n===rl)return o===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ol)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===yl||n===xl||n===_l||n===vl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===al)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_l)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ao||n===Ml||n===bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ao)return o===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lu||n===Sl||n===El||n===wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===El)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Bl=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ce=class extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Og={type:"move"},cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),p=this._getHandJoint(h,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,m=.005;h.inputState.pinching&&d>f+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Og)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Fg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bg=`
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

}`,Hl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Mn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Yn({vertexShader:Fg,fragmentShader:Bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bt(new oe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vl=class extends ci{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,m=null,y=new Hl,g=e.getContextAttributes(),p=null,E=null,v=[],_=[],V=new Rt,L=null,U=new rn;U.viewport=new Ce;let z=new rn;z.viewport=new Ce;let T=[U,z],x=new Bl,A=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ct=v[Z];return ct===void 0&&(ct=new cr,v[Z]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Z){let ct=v[Z];return ct===void 0&&(ct=new cr,v[Z]=ct),ct.getGripSpace()},this.getHand=function(Z){let ct=v[Z];return ct===void 0&&(ct=new cr,v[Z]=ct),ct.getHandSpace()};function k(Z){let ct=_.indexOf(Z.inputSource);if(ct===-1)return;let Dt=v[ct];Dt!==void 0&&(Dt.update(Z.inputSource,Z.frame,h||o),Dt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",G);for(let Z=0;Z<v.length;Z++){let ct=_[Z];ct!==null&&(_[Z]=null,v[Z].disconnect(ct))}A=null,q=null,y.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,E=null,At.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",W),i.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(V),i.renderState.layers===void 0){let ct={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,ct),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new hi(f.framebufferWidth,f.framebufferHeight,{format:On,type:li,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ct=null,Dt=null,gt=null;g.depth&&(gt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=g.stencil?Ds:As,Dt=g.stencil?ks:Wi);let Lt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Lt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new hi(d.textureWidth,d.textureHeight,{format:On,type:li,depthTexture:new _o(d.textureWidth,d.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await i.requestReferenceSpace(a),At.setContext(i),At.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(Z){for(let ct=0;ct<Z.removed.length;ct++){let Dt=Z.removed[ct],gt=_.indexOf(Dt);gt>=0&&(_[gt]=null,v[gt].disconnect(Dt))}for(let ct=0;ct<Z.added.length;ct++){let Dt=Z.added[ct],gt=_.indexOf(Dt);if(gt===-1){for(let Gt=0;Gt<v.length;Gt++)if(Gt>=_.length){_.push(Dt),gt=Gt;break}else if(_[Gt]===null){_[Gt]=Dt,gt=Gt;break}if(gt===-1)break}let Lt=v[gt];Lt&&Lt.connect(Dt)}}let O=new I,K=new I;function $(Z,ct,Dt){O.setFromMatrixPosition(ct.matrixWorld),K.setFromMatrixPosition(Dt.matrixWorld);let gt=O.distanceTo(K),Lt=ct.projectionMatrix.elements,Gt=Dt.projectionMatrix.elements,Yt=Lt[14]/(Lt[10]-1),ne=Lt[14]/(Lt[10]+1),D=(Lt[9]+1)/Lt[5],et=(Lt[9]-1)/Lt[5],R=(Lt[8]-1)/Lt[0],vt=(Gt[8]+1)/Gt[0],pt=Yt*R,Ct=Yt*vt,bt=gt/(-R+vt),Xt=bt*-R;if(ct.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Xt),Z.translateZ(bt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Lt[10]===-1)Z.projectionMatrix.copy(ct.projectionMatrix),Z.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let Ht=Yt+bt,C=ne+bt,M=pt-Xt,Q=Ct+(gt-Xt),lt=D*ne/C*Ht,mt=et*ne/C*Ht;Z.projectionMatrix.makePerspective(M,Q,lt,mt,Ht,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ht(Z,ct){ct===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ct.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ct=Z.near,Dt=Z.far;y.texture!==null&&(y.depthNear>0&&(ct=y.depthNear),y.depthFar>0&&(Dt=y.depthFar)),x.near=z.near=U.near=ct,x.far=z.far=U.far=Dt,(A!==x.near||q!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,q=x.far),U.layers.mask=Z.layers.mask|2,z.layers.mask=Z.layers.mask|4,x.layers.mask=U.layers.mask|z.layers.mask;let gt=Z.parent,Lt=x.cameras;ht(x,gt);for(let Gt=0;Gt<Lt.length;Gt++)ht(Lt[Gt],gt);Lt.length===2?$(x,U,z):x.projectionMatrix.copy(U.projectionMatrix),yt(Z,x,gt)};function yt(Z,ct,Dt){Dt===null?Z.matrix.copy(ct.matrixWorld):(Z.matrix.copy(Dt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ct.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ct.projectionMatrix),Z.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Us*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let wt=null;function Ut(Z,ct){if(c=ct.getViewerPose(h||o),m=ct,c!==null){let Dt=c.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let gt=!1;Dt.length!==x.cameras.length&&(x.cameras.length=0,gt=!0);for(let Gt=0;Gt<Dt.length;Gt++){let Yt=Dt[Gt],ne=null;if(f!==null)ne=f.getViewport(Yt);else{let et=u.getViewSubImage(d,Yt);ne=et.viewport,Gt===0&&(t.setRenderTargetTextures(E,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),t.setRenderTarget(E))}let D=T[Gt];D===void 0&&(D=new rn,D.layers.enable(Gt),D.viewport=new Ce,T[Gt]=D),D.matrix.fromArray(Yt.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Yt.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(ne.x,ne.y,ne.width,ne.height),Gt===0&&(x.matrix.copy(D.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),gt===!0&&x.cameras.push(D)}let Lt=i.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){let Gt=u.getDepthInformation(Dt[0]);Gt&&Gt.isValid&&Gt.texture&&y.init(t,Gt,i.renderState)}}for(let Dt=0;Dt<v.length;Dt++){let gt=_[Dt],Lt=v[Dt];gt!==null&&Lt!==void 0&&Lt.update(gt,ct,h||o)}wt&&wt(Z,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),m=null}let At=new pu;At.setAnimationLoop(Ut),this.setAnimationLoop=function(Z){wt=Z},this.dispose=function(){}}},zi=new Rn,Hg=new Ie;function Vg(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,fu(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,E,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),c(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,E,v):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===qe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===qe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let E=t.get(p),v=E.envMap,_=E.envMapRotation;v&&(g.envMap.value=v,zi.copy(_),zi.x*=-1,zi.y*=-1,zi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),g.envMapRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(zi)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,E,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let E=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gg(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,v){let _=v.program;n.uniformBlockBinding(E,_)}function h(E,v){let _=i[E.id];_===void 0&&(m(E),_=c(E),i[E.id]=_,E.addEventListener("dispose",g));let V=v.program;n.updateUBOMapping(E,V);let L=t.render.frame;r[E.id]!==L&&(d(E),r[E.id]=L)}function c(E){let v=u();E.__bindingPointIndex=v;let _=s.createBuffer(),V=E.__size,L=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,V,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,_),_}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let v=i[E.id],_=E.uniforms,V=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let L=0,U=_.length;L<U;L++){let z=Array.isArray(_[L])?_[L]:[_[L]];for(let T=0,x=z.length;T<x;T++){let A=z[T];if(f(A,L,T,V)===!0){let q=A.__offset,k=Array.isArray(A.value)?A.value:[A.value],W=0;for(let G=0;G<k.length;G++){let O=k[G],K=y(O);typeof O=="number"||typeof O=="boolean"?(A.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,q+W,A.__data)):O.isMatrix3?(A.__data[0]=O.elements[0],A.__data[1]=O.elements[1],A.__data[2]=O.elements[2],A.__data[3]=0,A.__data[4]=O.elements[3],A.__data[5]=O.elements[4],A.__data[6]=O.elements[5],A.__data[7]=0,A.__data[8]=O.elements[6],A.__data[9]=O.elements[7],A.__data[10]=O.elements[8],A.__data[11]=0):(O.toArray(A.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(E,v,_,V){let L=E.value,U=v+"_"+_;if(V[U]===void 0)return typeof L=="number"||typeof L=="boolean"?V[U]=L:V[U]=L.clone(),!0;{let z=V[U];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return V[U]=L,!0}else if(z.equals(L)===!1)return z.copy(L),!0}return!1}function m(E){let v=E.uniforms,_=0,V=16;for(let U=0,z=v.length;U<z;U++){let T=Array.isArray(v[U])?v[U]:[v[U]];for(let x=0,A=T.length;x<A;x++){let q=T[x],k=Array.isArray(q.value)?q.value:[q.value];for(let W=0,G=k.length;W<G;W++){let O=k[W],K=y(O),$=_%V,ht=$%K.boundary,yt=$+ht;_+=ht,yt!==0&&V-yt<K.storage&&(_+=V-yt),q.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=_,_+=K.storage}}}let L=_%V;return L>0&&(_+=V-L),E.__size=_,E.__cache={},this}function y(E){let v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function g(E){let v=E.target;v.removeEventListener("dispose",g);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:l,update:h,dispose:p}}var vo=class{constructor(t={}){let{canvas:e=$d(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),y=new Int32Array(4),g=null,p=null,E=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=de,this.toneMapping=Si,this.toneMappingExposure=1;let _=this,V=!1,L=0,U=0,z=null,T=-1,x=null,A=new Ce,q=new Ce,k=null,W=new pe(0),G=0,O=e.width,K=e.height,$=1,ht=null,yt=null,wt=new Ce(0,0,O,K),Ut=new Ce(0,0,O,K),At=!1,Z=new mr,ct=!1,Dt=!1,gt=new Ie,Lt=new Ie,Gt=new I,Yt=new Ce,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},D=!1;function et(){return z===null?$:1}let R=n;function vt(b,B){return e.getContext(b,B)}try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cc}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Wt,!1),e.addEventListener("webglcontextcreationerror",Ft,!1),R===null){let B="webgl2";if(R=vt(B,b),R===null)throw vt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let pt,Ct,bt,Xt,Ht,C,M,Q,lt,mt,st,$t,N,ft,H,Y,it,xt,Nt,Mt,Vt,jt,zt,F;function Ot(){pt=new r0(R),pt.init(),jt=new zg(R,pt),Ct=new Qm(R,pt,t,jt),bt=new Dg(R,pt),Ct.reverseDepthBuffer&&d&&bt.buffers.depth.setReversed(!0),Xt=new l0(R),Ht=new Mg,C=new Ng(R,pt,bt,Ht,Ct,jt,Xt),M=new e0(_),Q=new s0(_),lt=new mf(R),zt=new Km(R,lt),mt=new o0(R,lt,Xt,zt),st=new h0(R,mt,lt,Xt),Nt=new c0(R,Ct,C),Y=new t0(Ht),$t=new vg(_,M,Q,pt,Ct,zt,Y),N=new Vg(_,Ht),ft=new Sg,H=new Cg(pt),xt=new Zm(_,M,Q,bt,st,f,l),it=new Lg(_,st,Ct),F=new Gg(R,Xt,Ct,bt),Mt=new Jm(R,pt,Xt),Vt=new a0(R,pt,Xt),Xt.programs=$t.programs,_.capabilities=Ct,_.extensions=pt,_.properties=Ht,_.renderLists=ft,_.shadowMap=it,_.state=bt,_.info=Xt}Ot();let ut=new Vl(_,R);this.xr=ut,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let b=pt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=pt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(O,K,!1))},this.getSize=function(b){return b.set(O,K)},this.setSize=function(b,B,nt=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,K=B,e.width=Math.floor(b*$),e.height=Math.floor(B*$),nt===!0&&(e.style.width=b+"px",e.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(O*$,K*$).floor()},this.setDrawingBufferSize=function(b,B,nt){O=b,K=B,$=nt,e.width=Math.floor(b*nt),e.height=Math.floor(B*nt),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(wt)},this.setViewport=function(b,B,nt,tt){b.isVector4?wt.set(b.x,b.y,b.z,b.w):wt.set(b,B,nt,tt),bt.viewport(A.copy(wt).multiplyScalar($).round())},this.getScissor=function(b){return b.copy(Ut)},this.setScissor=function(b,B,nt,tt){b.isVector4?Ut.set(b.x,b.y,b.z,b.w):Ut.set(b,B,nt,tt),bt.scissor(q.copy(Ut).multiplyScalar($).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(b){bt.setScissorTest(At=b)},this.setOpaqueSort=function(b){ht=b},this.setTransparentSort=function(b){yt=b},this.getClearColor=function(b){return b.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(b=!0,B=!0,nt=!0){let tt=0;if(b){let X=!1;if(z!==null){let It=z.texture.format;X=It===yc||It===gc||It===mc}if(X){let It=z.texture.type,qt=It===li||It===Wi||It===fr||It===ks||It===fc||It===pc,Qt=xt.getClearColor(),Jt=xt.getClearAlpha(),ie=Qt.r,S=Qt.g,w=Qt.b;qt?(m[0]=ie,m[1]=S,m[2]=w,m[3]=Jt,R.clearBufferuiv(R.COLOR,0,m)):(y[0]=ie,y[1]=S,y[2]=w,y[3]=Jt,R.clearBufferiv(R.COLOR,0,y))}else tt|=R.COLOR_BUFFER_BIT}B&&(tt|=R.DEPTH_BUFFER_BIT),nt&&(tt|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Wt,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),ft.dispose(),H.dispose(),Ht.dispose(),M.dispose(),Q.dispose(),st.dispose(),zt.dispose(),F.dispose(),$t.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Ve),ut.removeEventListener("sessionend",on),un.stop()};function _t(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Wt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;let b=Xt.autoReset,B=it.enabled,nt=it.autoUpdate,tt=it.needsUpdate,X=it.type;Ot(),Xt.autoReset=b,it.enabled=B,it.autoUpdate=nt,it.needsUpdate=tt,it.type=X}function Ft(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function he(b){let B=b.target;B.removeEventListener("dispose",he),Ae(B)}function Ae(b){Ne(b),Ht.remove(b)}function Ne(b){let B=Ht.get(b).programs;B!==void 0&&(B.forEach(function(nt){$t.releaseProgram(nt)}),b.isShaderMaterial&&$t.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,nt,tt,X,It){B===null&&(B=ne);let qt=X.isMesh&&X.matrixWorld.determinant()<0,Qt=se(b,B,nt,tt,X);bt.setMaterial(tt,qt);let Jt=nt.index,ie=1;if(tt.wireframe===!0){if(Jt=mt.getWireframeAttribute(nt),Jt===void 0)return;ie=2}let S=nt.drawRange,w=nt.attributes.position,ot=S.start*ie,Tt=(S.start+S.count)*ie;It!==null&&(ot=Math.max(ot,It.start*ie),Tt=Math.min(Tt,(It.start+It.count)*ie)),Jt!==null?(ot=Math.max(ot,0),Tt=Math.min(Tt,Jt.count)):w!=null&&(ot=Math.max(ot,0),Tt=Math.min(Tt,w.count));let Pt=Tt-ot;if(Pt<0||Pt===1/0)return;zt.setup(X,tt,Qt,nt,Jt);let le,te=Mt;if(Jt!==null&&(le=lt.get(Jt),te=Vt,te.setIndex(le)),X.isMesh)tt.wireframe===!0?(bt.setLineWidth(tt.wireframeLinewidth*et()),te.setMode(R.LINES)):te.setMode(R.TRIANGLES);else if(X.isLine){let Kt=tt.linewidth;Kt===void 0&&(Kt=1),bt.setLineWidth(Kt*et()),X.isLineSegments?te.setMode(R.LINES):X.isLineLoop?te.setMode(R.LINE_LOOP):te.setMode(R.LINE_STRIP)}else X.isPoints?te.setMode(R.POINTS):X.isSprite&&te.setMode(R.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)te.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))te.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Kt=X._multiDrawStarts,Fe=X._multiDrawCounts,fe=X._multiDrawCount,re=Jt?lt.get(Jt).bytesPerElement:1,Ge=Ht.get(tt).currentProgram.getUniforms();for(let We=0;We<fe;We++)Ge.setValue(R,"_gl_DrawID",We),te.render(Kt[We]/re,Fe[We])}else if(X.isInstancedMesh)te.renderInstances(ot,Pt,X.count);else if(nt.isInstancedBufferGeometry){let Kt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Fe=Math.min(nt.instanceCount,Kt);te.renderInstances(ot,Pt,Fe)}else te.render(ot,Pt)};function me(b,B,nt){b.transparent===!0&&b.side===je&&b.forceSinglePass===!1?(b.side=qe,b.needsUpdate=!0,J(b,B,nt),b.side=Ei,b.needsUpdate=!0,J(b,B,nt),b.side=je):J(b,B,nt)}this.compile=function(b,B,nt=null){nt===null&&(nt=b),p=H.get(nt),p.init(B),v.push(p),nt.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),b!==nt&&b.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let tt=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let It=X.material;if(It)if(Array.isArray(It))for(let qt=0;qt<It.length;qt++){let Qt=It[qt];me(Qt,nt,X),tt.add(Qt)}else me(It,nt,X),tt.add(It)}),v.pop(),p=null,tt},this.compileAsync=function(b,B,nt=null){let tt=this.compile(b,B,nt);return new Promise(X=>{function It(){if(tt.forEach(function(qt){Ht.get(qt).currentProgram.isReady()&&tt.delete(qt)}),tt.size===0){X(b);return}setTimeout(It,10)}pt.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let He=null;function De(b){He&&He(b)}function Ve(){un.stop()}function on(){un.start()}let un=new pu;un.setAnimationLoop(De),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(b){He=b,ut.setAnimationLoop(b),b===null?un.stop():un.start()},ut.addEventListener("sessionstart",Ve),ut.addEventListener("sessionend",on),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(B),B=ut.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,B,z),p=H.get(b,v.length),p.init(B),v.push(p),Lt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Z.setFromProjectionMatrix(Lt),Dt=this.localClippingEnabled,ct=Y.init(this.clippingPlanes,Dt),g=ft.get(b,E.length),g.init(),E.push(g),ut.enabled===!0&&ut.isPresenting===!0){let It=_.xr.getDepthSensingMesh();It!==null&&St(It,B,-1/0,_.sortObjects)}St(b,B,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(ht,yt),D=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,D&&xt.addToRenderList(g,b),this.info.render.frame++,ct===!0&&Y.beginShadows();let nt=p.state.shadowsArray;it.render(nt,b,B),ct===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset();let tt=g.opaque,X=g.transmissive;if(p.setupLights(),B.isArrayCamera){let It=B.cameras;if(X.length>0)for(let qt=0,Qt=It.length;qt<Qt;qt++){let Jt=It[qt];rt(tt,X,b,Jt)}D&&xt.render(b);for(let qt=0,Qt=It.length;qt<Qt;qt++){let Jt=It[qt];j(g,b,Jt,Jt.viewport)}}else X.length>0&&rt(tt,X,b,B),D&&xt.render(b),j(g,b,B);z!==null&&(C.updateMultisampleRenderTarget(z),C.updateRenderTargetMipmap(z)),b.isScene===!0&&b.onAfterRender(_,b,B),zt.resetDefaultState(),T=-1,x=null,v.pop(),v.length>0?(p=v[v.length-1],ct===!0&&Y.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function St(b,B,nt,tt){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)nt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){tt&&Yt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Lt);let qt=st.update(b),Qt=b.material;Qt.visible&&g.push(b,qt,Qt,nt,Yt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){let qt=st.update(b),Qt=b.material;if(tt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Yt.copy(b.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),Yt.copy(qt.boundingSphere.center)),Yt.applyMatrix4(b.matrixWorld).applyMatrix4(Lt)),Array.isArray(Qt)){let Jt=qt.groups;for(let ie=0,S=Jt.length;ie<S;ie++){let w=Jt[ie],ot=Qt[w.materialIndex];ot&&ot.visible&&g.push(b,qt,ot,nt,Yt.z,w)}}else Qt.visible&&g.push(b,qt,Qt,nt,Yt.z,null)}}let It=b.children;for(let qt=0,Qt=It.length;qt<Qt;qt++)St(It[qt],B,nt,tt)}function j(b,B,nt,tt){let X=b.opaque,It=b.transmissive,qt=b.transparent;p.setupLightsView(nt),ct===!0&&Y.setGlobalState(_.clippingPlanes,nt),tt&&bt.viewport(A.copy(tt)),X.length>0&&P(X,B,nt),It.length>0&&P(It,B,nt),qt.length>0&&P(qt,B,nt),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function rt(b,B,nt,tt){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[tt.id]===void 0&&(p.state.transmissionRenderTarget[tt.id]=new hi(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?wr:li,minFilter:Gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));let It=p.state.transmissionRenderTarget[tt.id],qt=tt.viewport||A;It.setSize(qt.z,qt.w);let Qt=_.getRenderTarget();_.setRenderTarget(It),_.getClearColor(W),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),D&&xt.render(nt);let Jt=_.toneMapping;_.toneMapping=Si;let ie=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),p.setupLightsView(tt),ct===!0&&Y.setGlobalState(_.clippingPlanes,tt),P(b,nt,tt),C.updateMultisampleRenderTarget(It),C.updateRenderTargetMipmap(It),pt.has("WEBGL_multisampled_render_to_texture")===!1){let S=!1;for(let w=0,ot=B.length;w<ot;w++){let Tt=B[w],Pt=Tt.object,le=Tt.geometry,te=Tt.material,Kt=Tt.group;if(te.side===je&&Pt.layers.test(tt.layers)){let Fe=te.side;te.side=qe,te.needsUpdate=!0,at(Pt,nt,tt,le,te,Kt),te.side=Fe,te.needsUpdate=!0,S=!0}}S===!0&&(C.updateMultisampleRenderTarget(It),C.updateRenderTargetMipmap(It))}_.setRenderTarget(Qt),_.setClearColor(W,G),ie!==void 0&&(tt.viewport=ie),_.toneMapping=Jt}function P(b,B,nt){let tt=B.isScene===!0?B.overrideMaterial:null;for(let X=0,It=b.length;X<It;X++){let qt=b[X],Qt=qt.object,Jt=qt.geometry,ie=tt===null?qt.material:tt,S=qt.group;Qt.layers.test(nt.layers)&&at(Qt,B,nt,Jt,ie,S)}}function at(b,B,nt,tt,X,It){b.onBeforeRender(_,B,nt,tt,X,It),b.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(_,B,nt,tt,b,It),X.transparent===!0&&X.side===je&&X.forceSinglePass===!1?(X.side=qe,X.needsUpdate=!0,_.renderBufferDirect(nt,B,tt,X,b,It),X.side=Ei,X.needsUpdate=!0,_.renderBufferDirect(nt,B,tt,X,b,It),X.side=je):_.renderBufferDirect(nt,B,tt,X,b,It),b.onAfterRender(_,B,nt,tt,X,It)}function J(b,B,nt){B.isScene!==!0&&(B=ne);let tt=Ht.get(b),X=p.state.lights,It=p.state.shadowsArray,qt=X.state.version,Qt=$t.getParameters(b,X.state,It,B,nt),Jt=$t.getProgramCacheKey(Qt),ie=tt.programs;tt.environment=b.isMeshStandardMaterial?B.environment:null,tt.fog=B.fog,tt.envMap=(b.isMeshStandardMaterial?Q:M).get(b.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,ie===void 0&&(b.addEventListener("dispose",he),ie=new Map,tt.programs=ie);let S=ie.get(Jt);if(S!==void 0){if(tt.currentProgram===S&&tt.lightsStateVersion===qt)return ue(b,Qt),S}else Qt.uniforms=$t.getUniforms(b),b.onBeforeCompile(Qt,_),S=$t.acquireProgram(Qt,Jt),ie.set(Jt,S),tt.uniforms=Qt.uniforms;let w=tt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(w.clippingPlanes=Y.uniform),ue(b,Qt),tt.needsLights=Oe(b),tt.lightsStateVersion=qt,tt.needsLights&&(w.ambientLightColor.value=X.state.ambient,w.lightProbe.value=X.state.probe,w.directionalLights.value=X.state.directional,w.directionalLightShadows.value=X.state.directionalShadow,w.spotLights.value=X.state.spot,w.spotLightShadows.value=X.state.spotShadow,w.rectAreaLights.value=X.state.rectArea,w.ltc_1.value=X.state.rectAreaLTC1,w.ltc_2.value=X.state.rectAreaLTC2,w.pointLights.value=X.state.point,w.pointLightShadows.value=X.state.pointShadow,w.hemisphereLights.value=X.state.hemi,w.directionalShadowMap.value=X.state.directionalShadowMap,w.directionalShadowMatrix.value=X.state.directionalShadowMatrix,w.spotShadowMap.value=X.state.spotShadowMap,w.spotLightMatrix.value=X.state.spotLightMatrix,w.spotLightMap.value=X.state.spotLightMap,w.pointShadowMap.value=X.state.pointShadowMap,w.pointShadowMatrix.value=X.state.pointShadowMatrix),tt.currentProgram=S,tt.uniformsList=null,S}function ve(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=Cs.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function ue(b,B){let nt=Ht.get(b);nt.outputColorSpace=B.outputColorSpace,nt.batching=B.batching,nt.batchingColor=B.batchingColor,nt.instancing=B.instancing,nt.instancingColor=B.instancingColor,nt.instancingMorph=B.instancingMorph,nt.skinning=B.skinning,nt.morphTargets=B.morphTargets,nt.morphNormals=B.morphNormals,nt.morphColors=B.morphColors,nt.morphTargetsCount=B.morphTargetsCount,nt.numClippingPlanes=B.numClippingPlanes,nt.numIntersection=B.numClipIntersection,nt.vertexAlphas=B.vertexAlphas,nt.vertexTangents=B.vertexTangents,nt.toneMapping=B.toneMapping}function se(b,B,nt,tt,X){B.isScene!==!0&&(B=ne),C.resetTextureUnits();let It=B.fog,qt=tt.isMeshStandardMaterial?B.environment:null,Qt=z===null?_.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:qs,Jt=(tt.isMeshStandardMaterial?Q:M).get(tt.envMap||qt),ie=tt.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,S=!!nt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),w=!!nt.morphAttributes.position,ot=!!nt.morphAttributes.normal,Tt=!!nt.morphAttributes.color,Pt=Si;tt.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Pt=_.toneMapping);let le=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,te=le!==void 0?le.length:0,Kt=Ht.get(tt),Fe=p.state.lights;if(ct===!0&&(Dt===!0||b!==x)){let dn=b===x&&tt.id===T;Y.setState(tt,b,dn)}let fe=!1;tt.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Fe.state.version||Kt.outputColorSpace!==Qt||X.isBatchedMesh&&Kt.batching===!1||!X.isBatchedMesh&&Kt.batching===!0||X.isBatchedMesh&&Kt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Kt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Kt.instancing===!1||!X.isInstancedMesh&&Kt.instancing===!0||X.isSkinnedMesh&&Kt.skinning===!1||!X.isSkinnedMesh&&Kt.skinning===!0||X.isInstancedMesh&&Kt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Kt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Kt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Kt.instancingMorph===!1&&X.morphTexture!==null||Kt.envMap!==Jt||tt.fog===!0&&Kt.fog!==It||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Y.numPlanes||Kt.numIntersection!==Y.numIntersection)||Kt.vertexAlphas!==ie||Kt.vertexTangents!==S||Kt.morphTargets!==w||Kt.morphNormals!==ot||Kt.morphColors!==Tt||Kt.toneMapping!==Pt||Kt.morphTargetsCount!==te)&&(fe=!0):(fe=!0,Kt.__version=tt.version);let re=Kt.currentProgram;fe===!0&&(re=J(tt,B,X));let Ge=!1,We=!1,Xn=!1,Te=re.getUniforms(),sn=Kt.uniforms;if(bt.useProgram(re.program)&&(Ge=!0,We=!0,Xn=!0),tt.id!==T&&(T=tt.id,We=!0),Ge||x!==b){bt.buffers.depth.getReversed()?(gt.copy(b.projectionMatrix),Yd(gt),jd(gt),Te.setValue(R,"projectionMatrix",gt)):Te.setValue(R,"projectionMatrix",b.projectionMatrix),Te.setValue(R,"viewMatrix",b.matrixWorldInverse);let yn=Te.map.cameraPosition;yn!==void 0&&yn.setValue(R,Gt.setFromMatrixPosition(b.matrixWorld)),Ct.logarithmicDepthBuffer&&Te.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Te.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,We=!0,Xn=!0)}if(X.isSkinnedMesh){Te.setOptional(R,X,"bindMatrix"),Te.setOptional(R,X,"bindMatrixInverse");let dn=X.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Te.setValue(R,"boneTexture",dn.boneTexture,C))}X.isBatchedMesh&&(Te.setOptional(R,X,"batchingTexture"),Te.setValue(R,"batchingTexture",X._matricesTexture,C),Te.setOptional(R,X,"batchingIdTexture"),Te.setValue(R,"batchingIdTexture",X._indirectTexture,C),Te.setOptional(R,X,"batchingColorTexture"),X._colorsTexture!==null&&Te.setValue(R,"batchingColorTexture",X._colorsTexture,C));let pi=nt.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&Nt.update(X,nt,re),(We||Kt.receiveShadow!==X.receiveShadow)&&(Kt.receiveShadow=X.receiveShadow,Te.setValue(R,"receiveShadow",X.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(sn.envMap.value=Jt,sn.flipEnvMap.value=Jt.isCubeTexture&&Jt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&B.environment!==null&&(sn.envMapIntensity.value=B.environmentIntensity),We&&(Te.setValue(R,"toneMappingExposure",_.toneMappingExposure),Kt.needsLights&&xe(sn,Xn),It&&tt.fog===!0&&N.refreshFogUniforms(sn,It),N.refreshMaterialUniforms(sn,tt,$,K,p.state.transmissionRenderTarget[b.id]),Cs.upload(R,ve(Kt),sn,C)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Cs.upload(R,ve(Kt),sn,C),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Te.setValue(R,"center",X.center),Te.setValue(R,"modelViewMatrix",X.modelViewMatrix),Te.setValue(R,"normalMatrix",X.normalMatrix),Te.setValue(R,"modelMatrix",X.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){let dn=tt.uniformsGroups;for(let yn=0,wn=dn.length;yn<wn;yn++){let Js=dn[yn];F.update(Js,re),F.bind(Js,re)}}return re}function xe(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Oe(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(b,B,nt){Ht.get(b.texture).__webglTexture=B,Ht.get(b.depthTexture).__webglTexture=nt;let tt=Ht.get(b);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=nt===void 0,tt.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,B){let nt=Ht.get(b);nt.__webglFramebuffer=B,nt.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,nt=0){z=b,L=B,U=nt;let tt=!0,X=null,It=!1,qt=!1;if(b){let Jt=Ht.get(b);if(Jt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(R.FRAMEBUFFER,null),tt=!1;else if(Jt.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(Jt.__hasExternalTextures)C.rebindTextures(b,Ht.get(b.texture).__webglTexture,Ht.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let w=b.depthTexture;if(Jt.__boundDepthTexture!==w){if(w!==null&&Ht.has(w)&&(b.width!==w.image.width||b.height!==w.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}let ie=b.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(qt=!0);let S=Ht.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(S[B])?X=S[B][nt]:X=S[B],It=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?X=Ht.get(b).__webglMultisampledFramebuffer:Array.isArray(S)?X=S[nt]:X=S,A.copy(b.viewport),q.copy(b.scissor),k=b.scissorTest}else A.copy(wt).multiplyScalar($).floor(),q.copy(Ut).multiplyScalar($).floor(),k=At;if(bt.bindFramebuffer(R.FRAMEBUFFER,X)&&tt&&bt.drawBuffers(b,X),bt.viewport(A),bt.scissor(q),bt.setScissorTest(k),It){let Jt=Ht.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+B,Jt.__webglTexture,nt)}else if(qt){let Jt=Ht.get(b.texture),ie=B||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Jt.__webglTexture,nt||0,ie)}T=-1},this.readRenderTargetPixels=function(b,B,nt,tt,X,It,qt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=Ht.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&qt!==void 0&&(Qt=Qt[qt]),Qt){bt.bindFramebuffer(R.FRAMEBUFFER,Qt);try{let Jt=b.texture,ie=Jt.format,S=Jt.type;if(!Ct.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(S)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-tt&&nt>=0&&nt<=b.height-X&&R.readPixels(B,nt,tt,X,jt.convert(ie),jt.convert(S),It)}finally{let Jt=z!==null?Ht.get(z).__webglFramebuffer:null;bt.bindFramebuffer(R.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(b,B,nt,tt,X,It,qt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=Ht.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&qt!==void 0&&(Qt=Qt[qt]),Qt){let Jt=b.texture,ie=Jt.format,S=Jt.type;if(!Ct.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(S))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=b.width-tt&&nt>=0&&nt<=b.height-X){bt.bindFramebuffer(R.FRAMEBUFFER,Qt);let w=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,w),R.bufferData(R.PIXEL_PACK_BUFFER,It.byteLength,R.STREAM_READ),R.readPixels(B,nt,tt,X,jt.convert(ie),jt.convert(S),0);let ot=z!==null?Ht.get(z).__webglFramebuffer:null;bt.bindFramebuffer(R.FRAMEBUFFER,ot);let Tt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await qd(R,Tt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,w),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,It),R.deleteBuffer(w),R.deleteSync(Tt),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,B=null,nt=0){b.isTexture!==!0&&(rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1]);let tt=Math.pow(2,-nt),X=Math.floor(b.image.width*tt),It=Math.floor(b.image.height*tt),qt=B!==null?B.x:0,Qt=B!==null?B.y:0;C.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,nt,0,0,qt,Qt,X,It),bt.unbindTexture()},this.copyTextureToTexture=function(b,B,nt=null,tt=null,X=0){b.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,b=arguments[1],B=arguments[2],X=arguments[3]||0,nt=null);let It,qt,Qt,Jt,ie,S,w,ot,Tt,Pt=b.isCompressedTexture?b.mipmaps[X]:b.image;nt!==null?(It=nt.max.x-nt.min.x,qt=nt.max.y-nt.min.y,Qt=nt.isBox3?nt.max.z-nt.min.z:1,Jt=nt.min.x,ie=nt.min.y,S=nt.isBox3?nt.min.z:0):(It=Pt.width,qt=Pt.height,Qt=Pt.depth||1,Jt=0,ie=0,S=0),tt!==null?(w=tt.x,ot=tt.y,Tt=tt.z):(w=0,ot=0,Tt=0);let le=jt.convert(B.format),te=jt.convert(B.type),Kt;B.isData3DTexture?(C.setTexture3D(B,0),Kt=R.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(C.setTexture2DArray(B,0),Kt=R.TEXTURE_2D_ARRAY):(C.setTexture2D(B,0),Kt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment);let Fe=R.getParameter(R.UNPACK_ROW_LENGTH),fe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),re=R.getParameter(R.UNPACK_SKIP_PIXELS),Ge=R.getParameter(R.UNPACK_SKIP_ROWS),We=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Pt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Pt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Jt),R.pixelStorei(R.UNPACK_SKIP_ROWS,ie),R.pixelStorei(R.UNPACK_SKIP_IMAGES,S);let Xn=b.isDataArrayTexture||b.isData3DTexture,Te=B.isDataArrayTexture||B.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let sn=Ht.get(b),pi=Ht.get(B),dn=Ht.get(sn.__renderTarget),yn=Ht.get(pi.__renderTarget);bt.bindFramebuffer(R.READ_FRAMEBUFFER,dn.__webglFramebuffer),bt.bindFramebuffer(R.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let wn=0;wn<Qt;wn++)Xn&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ht.get(b).__webglTexture,X,S+wn),b.isDepthTexture?(Te&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ht.get(B).__webglTexture,X,Tt+wn),R.blitFramebuffer(Jt,ie,It,qt,w,ot,It,qt,R.DEPTH_BUFFER_BIT,R.NEAREST)):Te?R.copyTexSubImage3D(Kt,X,w,ot,Tt+wn,Jt,ie,It,qt):R.copyTexSubImage2D(Kt,X,w,ot,Tt+wn,Jt,ie,It,qt);bt.bindFramebuffer(R.READ_FRAMEBUFFER,null),bt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Te?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(Kt,X,w,ot,Tt,It,qt,Qt,le,te,Pt.data):B.isCompressedArrayTexture?R.compressedTexSubImage3D(Kt,X,w,ot,Tt,It,qt,Qt,le,Pt.data):R.texSubImage3D(Kt,X,w,ot,Tt,It,qt,Qt,le,te,Pt):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,X,w,ot,It,qt,le,te,Pt.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,X,w,ot,Pt.width,Pt.height,le,Pt.data):R.texSubImage2D(R.TEXTURE_2D,X,w,ot,It,qt,le,te,Pt);R.pixelStorei(R.UNPACK_ROW_LENGTH,Fe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,fe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,re),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ge),R.pixelStorei(R.UNPACK_SKIP_IMAGES,We),X===0&&B.generateMipmaps&&R.generateMipmap(Kt),bt.unbindTexture()},this.copyTextureToTexture3D=function(b,B,nt=null,tt=null,X=0){return b.isTexture!==!0&&(rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),nt=arguments[0]||null,tt=arguments[1]||null,b=arguments[2],B=arguments[3],X=arguments[4]||0),rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,B,nt,tt,X)},this.initRenderTarget=function(b){Ht.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),bt.unbindTexture()},this.resetState=function(){L=0,U=0,z=null,bt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ee._getUnpackColorSpace()}};var Fs=class extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var gr=class extends wi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Mo=new I,bo=new I,Fh=new Ie,ir=new $i,Kr=new Ns,Na=new I,Bh=new I,Bs=class extends nn{constructor(t=new ze,e=new gr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Mo.fromBufferAttribute(e,i-1),bo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Mo.distanceTo(bo);t.setAttribute("lineDistance",new Me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Kr.radius+=r,t.ray.intersectsSphere(Kr)===!1)return;Fh.copy(i).invert(),ir.copy(t.ray).applyMatrix4(Fh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let y=f,g=m-1;y<g;y+=h){let p=c.getX(y),E=c.getX(y+1),v=Jr(this,t,ir,l,p,E);v&&e.push(v)}if(this.isLineLoop){let y=c.getX(m-1),g=c.getX(f),p=Jr(this,t,ir,l,y,g);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let y=f,g=m-1;y<g;y+=h){let p=Jr(this,t,ir,l,y,y+1);p&&e.push(p)}if(this.isLineLoop){let y=Jr(this,t,ir,l,m-1,f);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Jr(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(Mo.fromBufferAttribute(o,i),bo.fromBufferAttribute(o,r),e.distanceSqToSegment(Mo,bo,Na,Bh)>n)return;Na.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Na);if(!(l<t.near||l>t.far))return{distance:l,point:Bh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var be=class extends Mn{constructor(t,e,n,i,r,o,a,l,h){super(t,e,n,i,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),h=n[i]-o,h<0)a=i+1;else if(h>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let c=n[i],d=n[i+1]-c,f=(o-c)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Rt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,i=[],r=[],o=[],a=new I,l=new Ie;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let h=Number.MAX_VALUE,c=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);c<=h&&(h=c,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos($e(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos($e(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},yr=class extends Cn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Rt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*c-f*u+this.aX,h=d*u+f*c+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Gl=class extends yr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function vc(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){i(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,u){let d=(o-r)/h-(a-r)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+u)+(l-a)/u;d*=c,f*=c,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Qr=new I,za=new vc,Oa=new vc,Fa=new vc,xr=class extends Cn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=i[(a-1)%r]:(Qr.subVectors(i[0],i[1]).add(i[0]),h=Qr);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?c=i[(a+2)%r]:(Qr.subVectors(i[r-1],i[r-2]).add(i[r-1]),c=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(h.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(c),f);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),za.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,m,y,g),Oa.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,m,y,g),Fa.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,m,y,g)}else this.curveType==="catmullrom"&&(za.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),Oa.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),Fa.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return n.set(za.calc(l),Oa.calc(l),Fa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Hh(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Wg(s,t){let e=1-s;return e*e*t}function Xg(s,t){return 2*(1-s)*s*t}function $g(s,t){return s*s*t}function hr(s,t,e,n){return Wg(s,t)+Xg(s,e)+$g(s,n)}function qg(s,t){let e=1-s;return e*e*e*t}function Yg(s,t){let e=1-s;return 3*e*e*s*t}function jg(s,t){return 3*(1-s)*s*s*t}function Zg(s,t){return s*s*s*t}function ur(s,t,e,n,i){return qg(s,t)+Yg(s,e)+jg(s,n)+Zg(s,i)}var So=class extends Cn{constructor(t=new Rt,e=new Rt,n=new Rt,i=new Rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Rt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(t,i.x,r.x,o.x,a.x),ur(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wl=class extends Cn{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ur(t,i.x,r.x,o.x,a.x),ur(t,i.y,r.y,o.y,a.y),ur(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Eo=class extends Cn{constructor(t=new Rt,e=new Rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xl=class extends Cn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wo=class extends Cn{constructor(t=new Rt,e=new Rt,n=new Rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Rt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(hr(t,i.x,r.x,o.x),hr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},To=class extends Cn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(hr(t,i.x,r.x,o.x),hr(t,i.y,r.y,o.y),hr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ao=class extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Rt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],h=i[o],c=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Hh(a,l.x,h.x,c.x,u.x),Hh(a,l.y,h.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Rt().fromArray(i))}return this}},Ro=Object.freeze({__proto__:null,ArcCurve:Gl,CatmullRomCurve3:xr,CubicBezierCurve:So,CubicBezierCurve3:Wl,EllipseCurve:yr,LineCurve:Eo,LineCurve3:Xl,QuadraticBezierCurve:wo,QuadraticBezierCurve3:To,SplineCurve:Ao}),$l=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ro[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let c=l[h];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Ro[i.type]().fromJSON(i))}return this}},qi=class extends $l{constructor(t){super(),this.type="Path",this.currentPoint=new Rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Eo(this.currentPoint.clone(),new Rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new wo(this.currentPoint.clone(),new Rt(t,e),new Rt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new So(this.currentPoint.clone(),new Rt(t,e),new Rt(n,i),new Rt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ao(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let h=new yr(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Yi=class s extends ze{constructor(t=[new Rt(0,-.5),new Rt(.5,0),new Rt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=$e(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],h=[],c=1/e,u=new I,d=new Rt,f=new I,m=new I,y=new I,g=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:g=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-g,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(m)}for(let E=0;E<=e;E++){let v=n+E*c*i,_=Math.sin(v),V=Math.cos(v);for(let L=0;L<=t.length-1;L++){u.x=t[L].x*_,u.y=t[L].y,u.z=t[L].x*V,o.push(u.x,u.y,u.z),d.x=E/e,d.y=L/(t.length-1),a.push(d.x,d.y);let U=l[3*L+0]*_,z=l[3*L+1],T=l[3*L+0]*V;h.push(U,z,T)}}for(let E=0;E<e;E++)for(let v=0;v<t.length-1;v++){let _=v+E*t.length,V=_,L=_+t.length,U=_+t.length+1,z=_+1;r.push(V,L,z),r.push(U,z,L)}this.setIndex(r),this.setAttribute("position",new Me(o,3)),this.setAttribute("uv",new Me(a,2)),this.setAttribute("normal",new Me(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},Hs=class s extends Yi{constructor(t=1,e=1,n=4,i=8){let r=new qi;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},Pn=class s extends ze{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],h=new I,c=new Rt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;h.x=t*Math.cos(f),h.y=t*Math.sin(f),o.push(h.x,h.y,h.z),a.push(0,0,1),c.x=(o[d]/t+1)/2,c.y=(o[d+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ge=class s extends ze{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;i=Math.floor(i),r=Math.floor(r);let c=[],u=[],d=[],f=[],m=0,y=[],g=n/2,p=0;E(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(f,2));function E(){let _=new I,V=new I,L=0,U=(e-t)/n;for(let z=0;z<=r;z++){let T=[],x=z/r,A=x*(e-t)+t;for(let q=0;q<=i;q++){let k=q/i,W=k*l+a,G=Math.sin(W),O=Math.cos(W);V.x=A*G,V.y=-x*n+g,V.z=A*O,u.push(V.x,V.y,V.z),_.set(G,U,O).normalize(),d.push(_.x,_.y,_.z),f.push(k,1-x),T.push(m++)}y.push(T)}for(let z=0;z<i;z++)for(let T=0;T<r;T++){let x=y[T][z],A=y[T+1][z],q=y[T+1][z+1],k=y[T][z+1];(t>0||T!==0)&&(c.push(x,A,k),L+=3),(e>0||T!==r-1)&&(c.push(A,q,k),L+=3)}h.addGroup(p,L,0),p+=L}function v(_){let V=m,L=new Rt,U=new I,z=0,T=_===!0?t:e,x=_===!0?1:-1;for(let q=1;q<=i;q++)u.push(0,g*x,0),d.push(0,x,0),f.push(.5,.5),m++;let A=m;for(let q=0;q<=i;q++){let W=q/i*l+a,G=Math.cos(W),O=Math.sin(W);U.x=T*O,U.y=g*x,U.z=T*G,u.push(U.x,U.y,U.z),d.push(0,x,0),L.x=G*.5+.5,L.y=O*.5*x+.5,f.push(L.x,L.y),m++}for(let q=0;q<i;q++){let k=V+q,W=A+q;_===!0?c.push(W,W+1,k):c.push(W+1,W,k),z+=3}h.addGroup(p,z,_===!0?1:2),p+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vs=class s extends ge{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Gs=class extends qi{constructor(t){super(t),this.uuid=es(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new qi().fromJSON(i))}return this}},Kg={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=_u(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h,c,u,d,f;if(n&&(r=ny(s,t,r,e)),s.length>80*e){a=h=s[0],l=c=s[1];for(let m=e;m<i;m+=e)u=s[m],d=s[m+1],u<a&&(a=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);f=Math.max(h-a,c-l),f=f!==0?32767/f:0}return _r(r,o,e,a,l,f,0),o}};function _u(s,t,e,n,i){let r,o;if(i===fy(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Vh(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Vh(r,s[r],s[r+1],o);return o&&Oo(o,o.next)&&(Mr(o),o=o.next),o}function ji(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Oo(e,e.next)||Ue(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function _r(s,t,e,n,i,r,o){if(!s)return;!o&&r&&ay(s,n,i,r);let a=s,l,h;for(;s.prev!==s.next;){if(l=s.prev,h=s.next,r?Qg(s,n,i,r):Jg(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(h.i/e|0),Mr(s),s=h.next,a=h.next;continue}if(s=h,s===a){o?o===1?(s=ty(ji(s),t,e),_r(s,t,e,n,i,r,2)):o===2&&ey(s,t,e,n,i,r):_r(ji(s),t,e,n,i,r,1);break}}}function Jg(s){let t=s.prev,e=s,n=s.next;if(Ue(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,h=n.y,c=i<r?i<o?i:o:r<o?r:o,u=a<l?a<h?a:h:l<h?l:h,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>h?a:h:l>h?l:h,m=n.next;for(;m!==t;){if(m.x>=c&&m.x<=d&&m.y>=u&&m.y<=f&&ws(i,a,r,l,o,h,m.x,m.y)&&Ue(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Qg(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ue(i,r,o)>=0)return!1;let a=i.x,l=r.x,h=o.x,c=i.y,u=r.y,d=o.y,f=a<l?a<h?a:h:l<h?l:h,m=c<u?c<d?c:d:u<d?u:d,y=a>l?a>h?a:h:l>h?l:h,g=c>u?c>d?c:d:u>d?u:d,p=ql(f,m,t,e,n),E=ql(y,g,t,e,n),v=s.prevZ,_=s.nextZ;for(;v&&v.z>=p&&_&&_.z<=E;){if(v.x>=f&&v.x<=y&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&ws(a,c,l,u,h,d,v.x,v.y)&&Ue(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&ws(a,c,l,u,h,d,_.x,_.y)&&Ue(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=y&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&ws(a,c,l,u,h,d,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=E;){if(_.x>=f&&_.x<=y&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&ws(a,c,l,u,h,d,_.x,_.y)&&Ue(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ty(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Oo(i,r)&&vu(i,n,n.next,r)&&vr(i,r)&&vr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Mr(n),Mr(n.next),n=s=r),n=n.next}while(n!==s);return ji(n)}function ey(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hy(o,a)){let l=Mu(o,a);o=ji(o,o.next),l=ji(l,l.next),_r(o,t,e,n,i,r,0),_r(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function ny(s,t,e,n){let i=[],r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,h=_u(s,a,l,n,!1),h===h.next&&(h.steiner=!0),i.push(cy(h));for(i.sort(iy),r=0;r<i.length;r++)e=sy(i[r],e);return e}function iy(s,t){return s.x-t.x}function sy(s,t){let e=ry(s,t);if(!e)return t;let n=Mu(e,s);return ji(n,n.next),ji(e,e.next)}function ry(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,h=i.y,c=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&ws(o<h?r:n,o,l,h,o<h?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),vr(e,s)&&(u<c||u===c&&(e.x>i.x||e.x===i.x&&oy(i,e)))&&(i=e,c=u)),e=e.next;while(e!==a);return i}function oy(s,t){return Ue(s.prev,s,t.prev)<0&&Ue(t.next,s,s.next)<0}function ay(s,t,e,n){let i=s;do i.z===0&&(i.z=ql(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ly(i)}function ly(s){let t,e,n,i,r,o,a,l,h=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<h&&(a++,n=n.nextZ,!!n);t++);for(l=h;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,h*=2}while(o>1);return s}function ql(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function cy(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ws(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function hy(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!uy(s,t)&&(vr(s,t)&&vr(t,s)&&dy(s,t)&&(Ue(s.prev,s,t.prev)||Ue(s,t.prev,t))||Oo(s,t)&&Ue(s.prev,s,s.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Oo(s,t){return s.x===t.x&&s.y===t.y}function vu(s,t,e,n){let i=eo(Ue(s,t,e)),r=eo(Ue(s,t,n)),o=eo(Ue(e,n,s)),a=eo(Ue(e,n,t));return!!(i!==r&&o!==a||i===0&&to(s,e,t)||r===0&&to(s,n,t)||o===0&&to(e,s,n)||a===0&&to(e,t,n))}function to(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function eo(s){return s>0?1:s<0?-1:0}function uy(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&vu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function vr(s,t){return Ue(s.prev,s,s.next)<0?Ue(s,t,s.next)>=0&&Ue(s,s.prev,t)>=0:Ue(s,t,s.prev)<0||Ue(s,s.next,t)<0}function dy(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Mu(s,t){let e=new Yl(s.i,s.x,s.y),n=new Yl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Vh(s,t,e,n){let i=new Yl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Mr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Yl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fy(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var dr=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Gh(t),Wh(n,t);let o=t.length;e.forEach(Gh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Wh(n,e[l]);let a=Kg.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Gh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Wh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var br=class s extends ze{constructor(t=new Gs([new Rt(.5,.5),new Rt(-.5,.5),new Rt(-.5,-.5),new Rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new Me(i,3)),this.setAttribute("uv",new Me(r,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:py,v,_=!1,V,L,U,z;p&&(v=p.getSpacedPoints(c),_=!0,d=!1,V=p.computeFrenetFrames(c,!1),L=new I,U=new I,z=new I),d||(g=0,f=0,m=0,y=0);let T=a.extractPoints(h),x=T.shape,A=T.holes;if(!dr.isClockWise(x)){x=x.reverse();for(let D=0,et=A.length;D<et;D++){let R=A[D];dr.isClockWise(R)&&(A[D]=R.reverse())}}let k=dr.triangulateShape(x,A),W=x;for(let D=0,et=A.length;D<et;D++){let R=A[D];x=x.concat(R)}function G(D,et,R){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(et,R)}let O=x.length,K=k.length;function $(D,et,R){let vt,pt,Ct,bt=D.x-et.x,Xt=D.y-et.y,Ht=R.x-D.x,C=R.y-D.y,M=bt*bt+Xt*Xt,Q=bt*C-Xt*Ht;if(Math.abs(Q)>Number.EPSILON){let lt=Math.sqrt(M),mt=Math.sqrt(Ht*Ht+C*C),st=et.x-Xt/lt,$t=et.y+bt/lt,N=R.x-C/mt,ft=R.y+Ht/mt,H=((N-st)*C-(ft-$t)*Ht)/(bt*C-Xt*Ht);vt=st+bt*H-D.x,pt=$t+Xt*H-D.y;let Y=vt*vt+pt*pt;if(Y<=2)return new Rt(vt,pt);Ct=Math.sqrt(Y/2)}else{let lt=!1;bt>Number.EPSILON?Ht>Number.EPSILON&&(lt=!0):bt<-Number.EPSILON?Ht<-Number.EPSILON&&(lt=!0):Math.sign(Xt)===Math.sign(C)&&(lt=!0),lt?(vt=-Xt,pt=bt,Ct=Math.sqrt(M)):(vt=bt,pt=Xt,Ct=Math.sqrt(M/2))}return new Rt(vt/Ct,pt/Ct)}let ht=[];for(let D=0,et=W.length,R=et-1,vt=D+1;D<et;D++,R++,vt++)R===et&&(R=0),vt===et&&(vt=0),ht[D]=$(W[D],W[R],W[vt]);let yt=[],wt,Ut=ht.concat();for(let D=0,et=A.length;D<et;D++){let R=A[D];wt=[];for(let vt=0,pt=R.length,Ct=pt-1,bt=vt+1;vt<pt;vt++,Ct++,bt++)Ct===pt&&(Ct=0),bt===pt&&(bt=0),wt[vt]=$(R[vt],R[Ct],R[bt]);yt.push(wt),Ut=Ut.concat(wt)}for(let D=0;D<g;D++){let et=D/g,R=f*Math.cos(et*Math.PI/2),vt=m*Math.sin(et*Math.PI/2)+y;for(let pt=0,Ct=W.length;pt<Ct;pt++){let bt=G(W[pt],ht[pt],vt);gt(bt.x,bt.y,-R)}for(let pt=0,Ct=A.length;pt<Ct;pt++){let bt=A[pt];wt=yt[pt];for(let Xt=0,Ht=bt.length;Xt<Ht;Xt++){let C=G(bt[Xt],wt[Xt],vt);gt(C.x,C.y,-R)}}}let At=m+y;for(let D=0;D<O;D++){let et=d?G(x[D],Ut[D],At):x[D];_?(U.copy(V.normals[0]).multiplyScalar(et.x),L.copy(V.binormals[0]).multiplyScalar(et.y),z.copy(v[0]).add(U).add(L),gt(z.x,z.y,z.z)):gt(et.x,et.y,0)}for(let D=1;D<=c;D++)for(let et=0;et<O;et++){let R=d?G(x[et],Ut[et],At):x[et];_?(U.copy(V.normals[D]).multiplyScalar(R.x),L.copy(V.binormals[D]).multiplyScalar(R.y),z.copy(v[D]).add(U).add(L),gt(z.x,z.y,z.z)):gt(R.x,R.y,u/c*D)}for(let D=g-1;D>=0;D--){let et=D/g,R=f*Math.cos(et*Math.PI/2),vt=m*Math.sin(et*Math.PI/2)+y;for(let pt=0,Ct=W.length;pt<Ct;pt++){let bt=G(W[pt],ht[pt],vt);gt(bt.x,bt.y,u+R)}for(let pt=0,Ct=A.length;pt<Ct;pt++){let bt=A[pt];wt=yt[pt];for(let Xt=0,Ht=bt.length;Xt<Ht;Xt++){let C=G(bt[Xt],wt[Xt],vt);_?gt(C.x,C.y+v[c-1].y,v[c-1].x+R):gt(C.x,C.y,u+R)}}}Z(),ct();function Z(){let D=i.length/3;if(d){let et=0,R=O*et;for(let vt=0;vt<K;vt++){let pt=k[vt];Lt(pt[2]+R,pt[1]+R,pt[0]+R)}et=c+g*2,R=O*et;for(let vt=0;vt<K;vt++){let pt=k[vt];Lt(pt[0]+R,pt[1]+R,pt[2]+R)}}else{for(let et=0;et<K;et++){let R=k[et];Lt(R[2],R[1],R[0])}for(let et=0;et<K;et++){let R=k[et];Lt(R[0]+O*c,R[1]+O*c,R[2]+O*c)}}n.addGroup(D,i.length/3-D,0)}function ct(){let D=i.length/3,et=0;Dt(W,et),et+=W.length;for(let R=0,vt=A.length;R<vt;R++){let pt=A[R];Dt(pt,et),et+=pt.length}n.addGroup(D,i.length/3-D,1)}function Dt(D,et){let R=D.length;for(;--R>=0;){let vt=R,pt=R-1;pt<0&&(pt=D.length-1);for(let Ct=0,bt=c+g*2;Ct<bt;Ct++){let Xt=O*Ct,Ht=O*(Ct+1),C=et+vt+Xt,M=et+pt+Xt,Q=et+pt+Ht,lt=et+vt+Ht;Gt(C,M,Q,lt)}}}function gt(D,et,R){l.push(D),l.push(et),l.push(R)}function Lt(D,et,R){Yt(D),Yt(et),Yt(R);let vt=i.length/3,pt=E.generateTopUV(n,i,vt-3,vt-2,vt-1);ne(pt[0]),ne(pt[1]),ne(pt[2])}function Gt(D,et,R,vt){Yt(D),Yt(et),Yt(vt),Yt(et),Yt(R),Yt(vt);let pt=i.length/3,Ct=E.generateSideWallUV(n,i,pt-6,pt-3,pt-2,pt-1);ne(Ct[0]),ne(Ct[1]),ne(Ct[3]),ne(Ct[1]),ne(Ct[2]),ne(Ct[3])}function Yt(D){i.push(l[D*3+0]),i.push(l[D*3+1]),i.push(l[D*3+2])}function ne(D){r.push(D.x),r.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return my(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ro[i.type]().fromJSON(i)),new s(n,t.options)}},py={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],h=t[i*3],c=t[i*3+1];return[new Rt(r,o),new Rt(a,l),new Rt(h,c)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[n*3],c=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],y=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-c)<Math.abs(o-h)?[new Rt(o,1-l),new Rt(h,1-u),new Rt(d,1-m),new Rt(y,1-p)]:[new Rt(a,1-l),new Rt(c,1-u),new Rt(f,1-m),new Rt(g,1-p)]}};function my(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ws=class s extends ze{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],h=[],c=[],u=t,d=(e-t)/i,f=new I,m=new Rt;for(let y=0;y<=i;y++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),h.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,c.push(m.x,m.y)}u+=d}for(let y=0;y<i;y++){let g=y*(n+1);for(let p=0;p<n;p++){let E=p+g,v=E,_=E+n+1,V=E+n+2,L=E+1;a.push(v,_,L),a.push(_,V,L)}}this.setIndex(a),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Be=class s extends ze{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),h=0,c=[],u=new I,d=new I,f=[],m=[],y=[],g=[];for(let p=0;p<=n;p++){let E=[],v=p/n,_=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let V=0;V<=e;V++){let L=V/e;u.x=-t*Math.cos(i+L*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+L*r)*Math.sin(o+v*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(L+_,1-v),E.push(h++)}c.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let v=c[p][E+1],_=c[p][E],V=c[p+1][E],L=c[p+1][E+1];(p!==0||o>0)&&f.push(v,_,L),(p!==n-1||l<Math.PI)&&f.push(_,V,L)}this.setIndex(f),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(y,3)),this.setAttribute("uv",new Me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var jn=class s extends ze{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],h=[],c=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){let y=m/i*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(y),u.y=(t+e*Math.cos(g))*Math.sin(y),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),c.x=t*Math.cos(y),c.y=t*Math.sin(y),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(m/i),h.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){let y=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,E=(i+1)*f+m;o.push(y,g,E),o.push(g,p,E)}this.setIndex(o),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Co=class s extends ze{constructor(t=new To(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,h=new Rt,c=new I,u=[],d=[],f=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new Me(u,3)),this.setAttribute("normal",new Me(d,3)),this.setAttribute("uv",new Me(f,2));function y(){for(let v=0;v<e;v++)g(v);g(r===!1?e:0),E(),p()}function g(v){c=t.getPointAt(v/e,c);let _=o.normals[v],V=o.binormals[v];for(let L=0;L<=i;L++){let U=L/i*Math.PI*2,z=Math.sin(U),T=-Math.cos(U);l.x=T*_.x+z*V.x,l.y=T*_.y+z*V.y,l.z=T*_.z+z*V.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=c.x+n*l.x,a.y=c.y+n*l.y,a.z=c.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let _=1;_<=i;_++){let V=(i+1)*(v-1)+(_-1),L=(i+1)*v+(_-1),U=(i+1)*v+_,z=(i+1)*(v-1)+_;m.push(V,L,z),m.push(L,U,z)}}function E(){for(let v=0;v<=e;v++)for(let _=0;_<=i;_++)h.x=v/e,h.y=_/i,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Ro[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Et=class extends wi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Po=class extends Et{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function no(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function gy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Xs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jl=class extends Xs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vc,endingEnd:Vc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gc:r=t,a=2*e-n;break;case Wc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gc:o=t,l=2*n-e;break;case Wc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let h=(n-e)*.5,c=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-n),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),y=m*m,g=y*m,p=-d*g+2*d*y-d*m,E=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*y+.5*m,_=f*g-f*y;for(let V=0;V!==a;++V)r[V]=p*o[c+V]+E*o[h+V]+v*o[l+V]+_*o[u+V];return r}},Zl=class extends Xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=(n-e)/(i-e),u=1-c;for(let d=0;d!==a;++d)r[d]=o[h+d]*u+o[l+d]*c;return r}},Kl=class extends Xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Hn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=no(e,this.TimeBufferType),this.values=no(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:no(t.times,Array),values:no(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case lo:e=this.InterpolantFactoryMethodDiscrete;break;case Tl:e=this.InterpolantFactoryMethodLinear;break;case ca:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lo;case this.InterpolantFactoryMethodLinear:return Tl;case this.InterpolantFactoryMethodSmooth:return ca}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&gy(i))for(let a=0,l=i.length;a!==l;++a){let h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ca,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],c=t[a+1];if(h!==c&&(a!==1||h!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let y=e[u+m];if(y!==e[d+m]||y!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,h=0;h!==n;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Tl;var Zi=class extends Hn{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=lo;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends Hn{};Jl.prototype.ValueTypeName="color";var Ql=class extends Hn{};Ql.prototype.ValueTypeName="number";var tc=class extends Xs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),h=t*a;for(let c=h+a;h!==c;h+=4)mn.slerpFlat(r,0,o,h-a,o,h,l);return r}},Io=class extends Hn{InterpolantFactoryMethodLinear(t){return new tc(this.times,this.values,this.getValueSize(),t)}};Io.prototype.ValueTypeName="quaternion";Io.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends Hn{constructor(t,e,n){super(t,e,n)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=lo;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends Hn{};ec.prototype.ValueTypeName="vector";var nc=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){a++,r===!1&&i.onStart!==void 0&&i.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,i.onProgress!==void 0&&i.onProgress(c,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){let u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){let f=h[u],m=h[u+1];if(f.global&&(f.lastIndex=0),f.test(c))return m}return null}}},yy=new nc,ic=class{constructor(t){this.manager=t!==void 0?t:yy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ic.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ji=class extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ti=class extends Ji{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ba=new Ie,Xh=new I,$h=new I,Sr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Xh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xh),$h.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($h),e.updateMatrixWorld(),Ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},sc=class extends Sr{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Us*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},$s=class extends Ji{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new sc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},qh=new Ie,sr=new I,Ha=new I,rc=class extends Sr{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new Ce(2,1,1,1),new Ce(0,1,1,1),new Ce(3,1,1,1),new Ce(1,1,1,1),new Ce(3,0,1,1),new Ce(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),sr.setFromMatrixPosition(t.matrixWorld),n.position.copy(sr),Ha.copy(n.position),Ha.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ha),n.updateMatrixWorld(),i.makeTranslation(-sr.x,-sr.y,-sr.z),qh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qh)}},Vn=class extends Ji{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},oc=class extends Sr{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lo=class extends Ji{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new oc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ko=class extends Ji{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Mc="\\[\\]\\.:\\/",xy=new RegExp("["+Mc+"]","g"),bc="[^"+Mc+"]",_y="[^"+Mc.replace("\\.","")+"]",vy=/((?:WC+[\/:])*)/.source.replace("WC",bc),My=/(WCOD+)?/.source.replace("WCOD",_y),by=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),Sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),Ey=new RegExp("^"+vy+My+by+Sy+"$"),wy=["material","materials","bones","map"],ac=class{constructor(t,e,n){let i=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xy,"")}static parseTrackName(t){let e=Ey.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);wy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[i];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=ac;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mx=new Float32Array(1);var Yh=new Ie,Qi=class{constructor(t,e,n=0,i=1/0){this.ray=new $i(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Yh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yh),this}intersectObject(t,e=!0,n=[]){return lc(t,this,n,e),n.sort(jh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)lc(t[i],this,n,e);return n.sort(jh),n}};function jh(s,t){return s.distance-t.distance}function lc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)lc(r[o],t,e,!0)}}var Er=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos($e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Do=class extends ci{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);var Fo=class extends Fs{constructor(){super();let t=new kt;t.deleteAttribute("uv");let e=new Et({side:qe}),n=new Et,i=new Vn(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Bt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Bt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Bt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Bt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let h=new Bt(t,n);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);let c=new Bt(t,n);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);let u=new Bt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Bt(t,js(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Bt(t,js(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let m=new Bt(t,js(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let y=new Bt(t,js(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let g=new Bt(t,js(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let p=new Bt(t,js(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function js(s){let t=new we;return t.color.setScalar(s),t}var Je=-1.0474999999999999,Ai=.292,Bo=9.81,Sc=.2,Ty=.011,bu=6,Ay=.95,Su=.78,Ry=.15,Cy=7,Kn={white:{name:"Biela",color:16052712,value:0},red:{name:"\u010Cerven\xE1",color:11735583,value:1},yellow:{name:"\u017Dlt\xE1",color:15909912,value:2},green:{name:"Zelen\xE1",color:1014330,value:3},brown:{name:"Hned\xE1",color:7027230,value:4},blue:{name:"Modr\xE1",color:1525685,value:5},pink:{name:"Ru\u017Eov\xE1",color:15764136,value:6},black:{name:"\u010Cierna",color:1118481,value:7}},Ln={yellow:{x:Je,z:Ai},green:{x:Je,z:-Ai},brown:{x:Je,z:0},blue:{x:0,z:0},pink:{x:3.569/4,z:0},black:{x:3.569/2-.324,z:0}},In=.062,Zs=.052,ns=[{x:-3.569/2-.012,z:-1.778/2-.012,r:.058,corner:!0},{x:-3.569/2-.012,z:1.778/2+.012,r:.058,corner:!0},{x:3.569/2+.012,z:-1.778/2-.012,r:.058,corner:!0},{x:3.569/2+.012,z:1.778/2+.012,r:.058,corner:!0},{x:0,z:-1.778/2-.034,r:.056,corner:!1},{x:0,z:1.778/2+.034,r:.056,corner:!1}];function Py(){let s=[],n=(r,o,a,l)=>s.push({ax:r,az:o,bx:a,bz:l});for(let r of[-1,1])n(r*1.7845,-.889+In,r*1.7845,.889-In),n(r*1.7845,-.889+In,r*(1.7845+.045*.7),-.889+In-.045*.7),n(r*1.7845,.889-In,r*(1.7845+.045*.7),.889-In+.045*.7);for(let r of[-1,1])n(-1.7845+In,r*.889,-Zs,r*.889),n(Zs,r*.889,1.7845-In,r*.889),n(-1.7845+In,r*.889,-1.7845+In-.045*.7,r*(.889+.045*.7)),n(1.7845-In,r*.889,1.7845-In+.045*.7,r*(.889+.045*.7)),n(-Zs,r*.889,-Zs+.008,r*(.889+.045)),n(Zs,r*.889,Zs-.008,r*(.889+.045));return s}var Iy=Py();function is(){let s=[],t=(r,o,a)=>s.push(Ly(s.length,r,o,a));t("white",Je-.06,-.12);for(let r of["yellow","green","brown","blue","pink","black"])t(r,Ln[r].x,Ln[r].z);let e=6e-4,n=Ln.pink.x+2*.02625+.002,i=Math.sqrt(3)*(.02625+e/2);for(let r=0;r<5;r++)for(let o=0;o<=r;o++)t("red",n+r*i,(o-r/2)*(2*.02625+e));return s}function Ly(s,t,e,n){return{id:s,kind:t,p:{x:e,z:n},v:{x:0,z:0},w:{x:0,y:0,z:0},on:!0,potted:null,moving:!1}}function Ri(s){return s.map(t=>({id:t.id,kind:t.kind,x:t.p.x,z:t.p.z,on:t.on}))}function ss(s,t){for(let e of t){let n=s[e.id];n.p.x=e.x,n.p.z=e.z,n.on=e.on,n.potted=null,n.v.x=n.v.z=0,n.w.x=n.w.y=n.w.z=0}}function Vo(s,t,e,n=0,i=0){let r=Math.max(.05,Math.min(1,e))*Cy,o=Math.cos(t),a=Math.sin(t);s.v.x=r*o,s.v.z=r*a;let l=n*.5*.02625,h=i*.5*.02625,c=5*r/(2*.02625*.02625);s.w.x=c*h*a,s.w.y=c*l,s.w.z=-c*h*o,s.moving=!0}var ky=1/1e3,Ho=class{constructor(t){this.balls=t,this.events=[],this.firstContact=null,this.time=0}get moving(){return this.balls.some(t=>t.on&&t.moving)}advance(t){let e=t;for(;e>1e-9;){let n=Math.min(ky,e);if(this.step(n),e-=n,!this.moving)break}return this.moving}step(t){this.time+=t;let e=this.balls;for(let n of e)n.on&&n.moving&&(Dy(n,t),n.p.x+=n.v.x*t,n.p.z+=n.v.z*t);for(let n=0;n<e.length;n++){let i=e[n];if(i.on)for(let r=n+1;r<e.length;r++){let o=e[r];if(!o.on||!i.moving&&!o.moving)continue;let a=o.p.x-i.p.x,l=o.p.z-i.p.z,h=a*a+l*l;if(h>=4*.02625*.02625||h<1e-12)continue;let c=Math.sqrt(h),u=a/c,d=l/c,f=(i.v.x-o.v.x)*u+(i.v.z-o.v.z)*d,m=(2*.02625-c)/2+1e-7;if(i.p.x-=u*m,i.p.z-=d*m,o.p.x+=u*m,o.p.z+=d*m,f<=0)continue;let y=(1+Ay)/2*f;i.v.x-=y*u,i.v.z-=y*d,o.v.x+=y*u,o.v.z+=y*d,i.moving=o.moving=!0,this.firstContact===null&&(i.kind==="white"||o.kind==="white")&&(this.firstContact=i.kind==="white"?o:i),this.events.push({type:"ball",a:i.id,b:o.id,speed:f})}}for(let n of e){if(!n.on||!n.moving)continue;for(let r of ns){let o=n.p.x-r.x,a=n.p.z-r.z;if(o*o+a*a<r.r*r.r){n.on=!1,n.moving=!1,n.potted={x:r.x,z:r.z,vx:n.v.x,vz:n.v.z,t:this.time},this.events.push({type:"pot",a:n.id,pocket:ns.indexOf(r),speed:Math.hypot(n.v.x,n.v.z)});break}}if(!n.on)continue;for(let r of Iy)Uy(n,r,this.events);let i=.2;(Math.abs(n.p.x)>3.569/2+i||Math.abs(n.p.z)>1.778/2+i)&&(n.p.x=Math.max(-3.569/2+.02625,Math.min(3.569/2-.02625,n.p.x)),n.p.z=Math.max(-1.778/2+.02625,Math.min(1.778/2-.02625,n.p.z)),n.v.x=n.v.z=0)}}};function Dy(s,t){let e=s.v,n=s.w,i=e.x+.02625*n.z,r=e.z-.02625*n.x,o=Math.hypot(i,r);if(o>1e-4){let l=3.5*Sc*Bo*t;if(o<=l)e.x-=2/7*i,e.z-=2/7*r,n.z=-e.x/.02625,n.x=e.z/.02625;else{let h=i/o,c=r/o,u=Sc*Bo*t;e.x-=u*h,e.z-=u*c;let d=5*Sc*Bo/(2*.02625)*t;n.x+=d*c,n.z-=d*h}}else{let l=Math.hypot(e.x,e.z),h=Ty*Bo*t;l<=h?e.x=e.z=0:(e.x-=e.x/l*h,e.z-=e.z/l*h),n.z=-e.x/.02625,n.x=e.z/.02625}n.y*=Math.exp(-bu*t*.12);let a=bu*t;n.y=Math.abs(n.y)<=a?0:n.y-Math.sign(n.y)*a,Math.hypot(e.x,e.z)<.004&&Math.hypot(i,r)<.004&&(e.x=e.z=0,n.x=n.y=n.z=0,s.moving=!1)}function Uy(s,t,e){let n=t.bx-t.ax,i=t.bz-t.az,r=n*n+i*i,o=((s.p.x-t.ax)*n+(s.p.z-t.az)*i)/r;o=Math.max(0,Math.min(1,o));let a=t.ax+o*n,l=t.az+o*i,h=s.p.x-a,c=s.p.z-l,u=h*h+c*c;if(u>=.02625*.02625||u<1e-14)return;let d=Math.sqrt(u),f=h/d,m=c/d,y=s.v.x*f+s.v.z*m;if(s.p.x+=f*(.02625-d+1e-7),s.p.z+=m*(.02625-d+1e-7),y>=0)return;s.v.x-=(1+Su)*y*f,s.v.z-=(1+Su)*y*m;let g=-m,p=f,E=s.w.y*.02625,v=Ry*Math.min(1,-y/1.5+.3);s.v.x-=v*E*g,s.v.z-=v*E*p,s.w.y*=.55,s.w.x*=.7,s.w.z*=.7,s.moving=!0,e.push({type:"cushion",a:s.id,speed:-y})}function Go(s,t,e){let n=Math.cos(e),i=Math.sin(e),r=null;for(let a of s){if(!a.on||a===t)continue;let l=a.p.x-t.p.x,h=a.p.z-t.p.z,c=l*n+h*i;if(c<=0)continue;let u=l*l+h*h-c*c;if(u>4*.02625*.02625)continue;let d=c-Math.sqrt(4*.02625*.02625-u);d>=0&&(!r||d<r.t)&&(r={ball:a,t:d})}let o=1/0;return n>1e-9&&(o=Math.min(o,(3.569/2-.02625-t.p.x)/n)),n<-1e-9&&(o=Math.min(o,(-3.569/2+.02625-t.p.x)/n)),i>1e-9&&(o=Math.min(o,(1.778/2-.02625-t.p.z)/i)),i<-1e-9&&(o=Math.min(o,(-1.778/2+.02625-t.p.z)/i)),!r||o<r.t?{ball:null,t:o,ghost:{x:t.p.x+n*o,z:t.p.z+i*o}}:{ball:r.ball,t:r.t,ghost:{x:t.p.x+n*r.t,z:t.p.z+i*r.t}}}function Eu(s,t){if(s>Je+1e-9)return!1;let e=s-Je;return e*e+t*t<=Ai*Ai+1e-9}function Wo(s,t,e,n=null){return Math.abs(t)>3.569/2-.02625||Math.abs(e)>1.778/2-.02625?!1:s.every(i=>!i.on||i===n||(i.p.x-t)**2+(i.p.z-e)**2>=4*.02625*.02625*1.0001)}var Ny=[{title:"Ovl\xE1danie my\u0161ou",lines:["Klikni do hry: my\u0161 sa zachyt\xED v okne.","Pohyb my\u0161i bez tla\u010Didla: mierenie.","Shift: jemn\xE9 mierenie (len pokro\u010Dil\xE9","   a majstrovsk\xE9 t\xE1g\xE1, pozri F2).","\u013Dav\xE9 tla\u010Didlo dr\u017E: ruka chyt\xED t\xE1go.","   My\u0161 k sebe t\xE1go odtiahne,","   pohyb dopredu vystrel\xED.","   Sila pod\u013Ea r\xFDchlosti pohybu.","Koliesko dr\u017E: miesto \xFAderu na bielej.","Dvojklik kolieskom: stred bielej.","Prav\xE9 tla\u010Didlo dr\u017E: posun poh\u013Eadu.","Ot\xE1\u010Danie kolieska: pribl\xED\u017Eenie."]},{title:"Kl\xE1vesy",lines:["F1   t\xE1to n\xE1stenka","F2   stojan s t\xE1gami","F3   nakriedova\u0165 \u0161pi\u010Dku t\xE1ga","F4   tabu\u013Ea so sk\xF3re","F6   dvere (otvoren\xE9: in\xED sa m\xF4\u017Eu pozera\u0165)","F7 kreslo so spr\xE1vami (C, V), F8 rebr\xED\u010Dek,","F9 mixpult a r\xE1dio (\u0161\xEDpky, P),","F10 bar s telef\xF3nom (M\xF4j \xFA\u010Det),","F12 n\xE1stenka Liga, menu Liga: kancel\xE1ria","Tab  poh\u013Ead na st\xF4l zhora","Esc  hlavn\xE9 menu, Ctrl dr\u017E: vo\u013En\xE1 my\u0161","Z sp\xE4\u0165, B biela do ruky,","R nov\xE9 rozostavenie, S presko\u010Di\u0165","Medzern\xEDk dr\u017E: sila, \u0161\xEDpky: mierenie"]},{title:"Princ\xEDp hry",lines:["Bielou gu\u013Eou pot\xE1paj ostatn\xE9 gule.","Body: \u010Derven\xE1 1, \u017Elt\xE1 2, zelen\xE1 3,","hned\xE1 4, modr\xE1 5, ru\u017Eov\xE1 6, \u010Dierna 7.","O najlep\u0161ie sk\xF3re: cel\xFD frame s\xE1m,","   fauly sa odpo\u010D\xEDtaj\xFA, rozhoduje \u010Das.","S\xE9ria: body bez preru\u0161enia.","Ke\u010F spadne biela, polo\u017E ju do D.","Kruh dole ukazuje dotyk g\xFA\u013E zhora:","   uhol a plnos\u0165 z\xE1sahu.","Krieda (F3): fal\u0161e s\xFA 5x silnej\u0161ie,","   nakriedovan\xE1 \u0161pi\u010Dka vydr\u017E\xED 3 \xFAdery.","   Bez kriedy maj\xFA fal\u0161e len p\xE4tinu \xFA\u010Dinku."]},{title:"T\xE1g\xE1 (F2) a partie",lines:["Desa\u0165 t\xE1g v troch kateg\xF3ri\xE1ch.","Tvrd\xE1 \u0161pi\u010Dka: silnej\u0161\xED \xFAder,","   hor\u0161ie dr\u017E\xED fal\u0161e.","M\xE4kk\xE1 \u0161pi\u010Dka: jemnej\u0161ie \xFAdery.","Dlh\xE9 t\xE1go: dlh\u0161ie \u0165ahanie my\u0161ou,","   jemnej\u0161ie d\xE1vkovanie sily.","Pokro\u010Dil\xE9 a majstrovsk\xE9 t\xE1g\xE1","   maj\xFA jemn\xE9 mierenie so Shift.","V\xFDber: klik na kartu alebo \u0161\xEDpky.","Posla\u0165 v\xFDzvu (menu po Esc):","   partia alebo tr\xE9ning cez internet."]}];function wu(){let e=document.createElement("canvas");e.width=2048,e.height=1408;let n=e.getContext("2d");n.fillStyle="#a5754a",n.fillRect(0,0,2048,1408);for(let o=0;o<9e3;o++)n.fillStyle=`rgba(${60+Math.random()*80},${35+Math.random()*40},${15+Math.random()*20},${.15+Math.random()*.25})`,n.fillRect(Math.random()*2048,Math.random()*1408,2+Math.random()*4,2+Math.random()*4);n.fillStyle="#f4ecd8",n.save(),n.translate(2048/2,92),n.rotate(-.01),n.fillRect(-330,-60,660,112),n.fillStyle="#123524",n.font="bold 76px Georgia, serif",n.textAlign="center",n.textBaseline="middle",n.fillText("N\xE1poveda",0,0),n.restore();let i=[[70,190,960,600,-.012],[1080,190,900,520,.01],[70,830,960,530,.008],[1080,760,900,600,-.01]];Ny.forEach((o,a)=>{let[l,h,c,u,d]=i[a];n.save(),n.translate(l+c/2,h+u/2),n.rotate(d),n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(-c/2+10,-u/2+12,c,u),n.fillStyle="#fbf7ec",n.fillRect(-c/2,-u/2,c,u),n.fillStyle=["#c0392b","#2f6fd6","#2a9d8f","#c9a24a"][a],n.beginPath(),n.arc(0,-u/2+22,14,0,Math.PI*2),n.fill(),n.fillStyle="#123524",n.font="bold 50px Georgia, serif",n.textAlign="left",n.textBaseline="top",n.fillText(o.title,-c/2+40,-u/2+50),n.fillStyle="#c9a24a",n.fillRect(-c/2+40,-u/2+110,c-80,4),n.fillStyle="#222";let f=Math.min(42,(u-150)/o.lines.length);n.font=`${Math.min(36,Math.floor(f*.86))}px Arial, Helvetica, sans-serif`,o.lines.forEach((m,y)=>{n.fillText(m,-c/2+44,-u/2+132+y*f)}),n.restore()});let r=new be(e);return r.colorSpace=de,r.anisotropy=8,r}var Jn=(s,t,e,n,i,r,o,a,l,h,c)=>({id:s,name:t,category:e,tip:n,power:i,grip:r,len:o,fine:a,colors:{shaft:l,butt:h},note:c}),Sn=[Jn("club","Klubov\xE9 t\xE1go","Z\xE1kladn\xE9","stredn\xE1",.8,1,1.45,0,"#dcb57e","#3a1c0c","Predvolen\xE9 t\xE1go na ka\u017Ed\xFD \xFAder."),Jn("short","Kr\xE1tke t\xE1go","Z\xE1kladn\xE9","tvrd\xE1",.9,.85,1.37,0,"#d2a56a","#5a1d0e","Kr\xE1tke \u0165ahanie, siln\xE9 \xFAdery, hor\u0161ie dr\u017E\xED fal\u0161e."),Jn("compact","Kompaktn\xE9 t\xE1go","Z\xE1kladn\xE9","stredn\xE1",.75,1,1.3,0,"#e0bd88","#20304a","Najkrat\u0161ie, r\xFDchle \u0165ahanie, slab\u0161ie \xFAdery."),Jn("break","Prer\xE1\u017Eacie t\xE1go","Z\xE1kladn\xE9","ve\u013Emi tvrd\xE1",1,.7,1.45,0,"#cfa060","#5b0f14","Pln\xE1 sila na rozbitie, fal\u0161e skoro nedr\u017E\xED."),Jn("soft","M\xE4kk\xE9 t\xE1go","Pokro\u010Dil\xE9","m\xE4kk\xE1",.65,1,1.47,8e-5,"#e8c992","#1f3b2a","Jemn\xE9 \xFAdery okolo \u010Diernej, presn\xE9 d\xE1vkovanie sily."),Jn("long","Dlh\xE9 t\xE1go","Pokro\u010Dil\xE9","stredn\xE1",.85,1,1.58,6e-5,"#dfbc88","#14213d","Dlh\xE9 \u0165ahanie my\u0161ou, ve\u013Emi jemn\xE9 d\xE1vkovanie sily."),Jn("ebony","Ebenov\xE9 t\xE1go","Pokro\u010Dil\xE9","stredne tvrd\xE1",.9,.95,1.49,6e-5,"#e6c896","#0d0d0d","Vyv\xE1\u017Een\xE9 t\xE1go na v\u0161etky \xFAdery."),Jn("master","Majstrovsk\xE9 t\xE1go","Majstrovsk\xE9","stredne tvrd\xE1",1,1,1.5,3e-5,"#efd3a0","#0b0b0b","Pln\xE1 sila aj najjemnej\u0161ie mierenie so Shift."),Jn("tour","Turnajov\xE9 t\xE1go","Majstrovsk\xE9","tvrd\xE1",1,.9,1.47,3e-5,"#f0d6a4","#2a0f2e","Siln\xE9 a presn\xE9 \xFAdery, fal\u0161e o nie\u010Do slab\u0161ie."),Jn("touch","Citliv\xE9 t\xE1go","Majstrovsk\xE9","m\xE4kk\xE1",.72,1,1.6,2e-5,"#f2dcae","#123524","Najjemnej\u0161ie d\xE1vkovanie sily a mierenie.")];function Tr(s){let t=Ci(s.base),e=s.data||{},n=i=>Math.max(-.1,Math.min(.1,+i||0));return{...t,id:"u"+s.id,own:s.id,base:t.id,name:(s.name||t.name+" (moje)").slice(0,30),category:"Vlastn\xE9",note:`Pod\u013Ea \u0161abl\xF3ny ${t.name}.`,power:Math.min(1,t.power*(1+n(e.power))),len:+(t.len*(1+n(e.len))).toFixed(3),grip:t.grip*(1+n(e.grip)),adj:{power:n(e.power),len:n(e.len),grip:n(e.grip)},rackOn:!!e.rack,colors:{shaft:e.shaft||t.colors.shaft,butt:e.butt||t.colors.butt}}}function Ci(s){return Sn.find(t=>t.id===s)||Sn[0]}function Tu(s){return 380*Math.pow(s.len/1.45,1.6)}function zy(s){let n=document.createElement("canvas");n.width=64,n.height=2048;let i=n.getContext("2d"),r=a=>2048*(1-a);i.fillStyle=s.colors.shaft,i.fillRect(0,0,64,2048);for(let a=0;a<40;a++){i.strokeStyle=`rgba(${120+Math.random()*40},${80+Math.random()*30},${40+Math.random()*20},${.12+Math.random()*.18})`,i.lineWidth=.5+Math.random()*1.5;let l=Math.random()*64;i.beginPath(),i.moveTo(l,0);for(let h=0;h<=2048;h+=64)i.lineTo(l+Math.sin(h/300+a)*3,h);i.stroke()}i.fillStyle=s.colors.butt,i.fillRect(0,0,64,r(.64));for(let a=0;a<4;a++){let l=(a+.5)*16;i.beginPath(),i.moveTo(l-64/8,r(.64)),i.lineTo(l,r(.5)),i.lineTo(l+64/8,r(.64)),i.closePath(),i.fill()}for(let a=0;a<30;a++){i.strokeStyle=`rgba(255,255,255,${.03+Math.random()*.05})`,i.lineWidth=.6+Math.random();let l=Math.random()*64;i.beginPath(),i.moveTo(l,0),i.lineTo(l+(Math.random()-.5)*6,r(.62)),i.stroke()}i.fillStyle="#c9a24a",i.fillRect(0,r(.645),64,2048*.004),i.fillRect(0,r(.985),64,2048*.004),i.fillStyle="#111",i.fillRect(0,0,64,r(.993)),i.fillStyle="#f3efe4",i.fillRect(0,r(.03),64,2048*.017),i.fillStyle="#2f6fd6",i.fillRect(0,r(.013),64,2048*.013+1);let o=new be(n);return o.colorSpace=de,o.anisotropy=4,o}function rs(s,t=!0){let e=new ce,n=new ge(.0145,.0048,s.len,24,1),i=new Bt(n,new Et({map:zy(s),roughness:.32,metalness:.04}));return i.position.y=s.len/2,i.castShadow=t,e.add(i),e}var ui=2048,Ks=1448;function Pi(s,t,e,n,i,r,o){let a=String(t||"").split(/\s+/),l="",h=0;for(let c=0;c<a.length;c++){let u=l?l+" "+a[c]:a[c];if(s.measureText(u).width>i&&l){if(h++,h>=o){let d=l;for(;d&&s.measureText(d+"\u2026").width>i;)d=d.slice(0,-1);return s.fillText(d+"\u2026",e,n),n+r}s.fillText(l,e,n),n+=r,l=a[c]}else l=u}return l&&(s.fillText(l,e,n),n+=r),n}function Au(s,t){let e=document.createElement("canvas");e.width=ui,e.height=Ks;let n=e.getContext("2d"),i=new be(e);i.colorSpace=de,i.anisotropy=8;let r=(s||[]).slice(0,9),o=r.map(()=>null),a="#1d1a16",l='Georgia, "Times New Roman", serif',h=(u,d,f,m,y)=>{let g=o[u];if(g){let p=m/y,E=g.width,v=g.width/p;v>g.height&&(v=g.height,E=g.height*p),n.save(),n.filter="grayscale(0.25) sepia(0.15)",n.drawImage(g,(g.width-E)/2,(g.height-v)/2,E,v,d,f,m,y),n.restore()}else n.fillStyle="#cfc6b3",n.fillRect(d,f,m,y),n.fillStyle="#a69c87",n.font=`bold 40px ${l}`,n.textAlign="center",n.fillText("HEDLAJNER",d+m/2,f+y/2+14),n.textAlign="left"},c=()=>{n.fillStyle="#f1ebdd",n.fillRect(0,0,ui,Ks);for(let p=0;p<2500;p++)n.fillStyle=`rgba(120,100,70,${Math.random()*.05})`,n.fillRect(Math.random()*ui,Math.random()*Ks,3,3);let u=n.createLinearGradient(ui/2-30,0,ui/2+30,0);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.5,"rgba(0,0,0,0.12)"),u.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=u,n.fillRect(ui/2-30,0,60,Ks),n.fillStyle="#c0392b",n.fillRect(60,46,92,92),n.fillStyle="#fff",n.font=`bold 78px ${l}`,n.fillText("H",80,120),n.fillStyle=a,n.font=`bold 104px ${l}`,n.fillText(t||"HEDLAJNER",172,128),n.font=`italic 34px ${l}`,n.fillStyle="#5a5246",n.fillText("Hlavn\xE9 spr\xE1vy z domova a zo sveta",176,172);let d=new Date;if(n.textAlign="right",n.font=`30px ${l}`,n.fillText(`${d.getDate()}. ${d.getMonth()+1}. ${d.getFullYear()}   hedlajner.sk`,ui-60,128),n.textAlign="left",n.fillStyle=a,n.fillRect(60,196,ui-120,5),n.fillRect(60,207,ui-120,1.5),!r.length){n.font=`48px ${l}`,n.fillText("Spr\xE1vy sa nepodarilo na\u010D\xEDta\u0165.",80,320),i.needsUpdate=!0;return}let f=r[0];h(0,60,240,920,520),n.fillStyle="#c0392b",n.font="bold 30px Arial, sans-serif",n.fillText((f.c||"").toUpperCase(),60,808),n.fillStyle=a,n.font=`bold 62px ${l}`;let m=Pi(n,f.t,60,876,920,70,3);n.font=`32px ${l}`,n.fillStyle="#3a342c",m=Pi(n,f.e,60,m+10,920,42,6),n.font=`italic 26px ${l}`,n.fillStyle="#7a7060",n.fillText(f.d||"",60,Math.min(Ks-50,m+14));let y=240;for(let p=1;p<=2&&p<r.length;p++){let E=r[p];h(p,1070,y,300,200),n.fillStyle="#c0392b",n.font="bold 24px Arial, sans-serif",n.fillText((E.c||"").toUpperCase(),1395,y+26),n.fillStyle=a,n.font=`bold 40px ${l}`;let v=Pi(n,E.t,1395,y+74,590,46,3);n.font=`26px ${l}`,n.fillStyle="#3a342c",Pi(n,E.e,1395,v+4,590,32,Math.max(1,Math.floor((y+260-v)/32))),y+=300,n.fillStyle="rgba(29,26,22,0.4)",n.fillRect(1070,y-40,915,2)}n.fillStyle=a,n.font="bold 34px Arial, sans-serif",n.fillText("\u010EAL\u0160IE SPR\xC1VY",1070,y+8),n.fillRect(1070,y+22,915,3),r.slice(3).forEach((p,E)=>{let v=E%2,_=Math.floor(E/2),V=1070+v*470,L=y+80+_*200;L>Ks-80||(n.fillStyle="#c0392b",n.font="bold 22px Arial, sans-serif",n.fillText((p.c||"").toUpperCase(),V,L),n.fillStyle=a,n.font=`bold 32px ${l}`,Pi(n,p.t,V,L+42,440,38,3),n.font=`italic 22px ${l}`,n.fillStyle="#7a7060",n.fillText(p.d||"",V,L+168))}),i.needsUpdate=!0};return c(),r.slice(0,3).forEach((u,d)=>{if(!u.i)return;let f=new Image;f.crossOrigin="anonymous",f.onload=()=>{o[d]=f;try{c()}catch{o[d]=null,c()}},f.src=u.i}),{texture:i,items:r}}function Ru(s){let n=document.createElement("canvas");n.width=1024,n.height=1400;let i=n.getContext("2d"),r=new be(n);r.colorSpace=de,r.anisotropy=8;let o=(s||[]).slice(0,12),a="Arial, Helvetica, sans-serif",l=i.createLinearGradient(0,0,1024,1400);l.addColorStop(0,"#0f2a4a"),l.addColorStop(1,"#1d5a7a"),i.fillStyle=l,i.fillRect(0,0,1024,1400),i.fillStyle="rgba(255,255,255,0.06)";for(let d=0;d<14;d++)i.beginPath(),i.arc(Math.random()*1024,Math.random()*1400,60+Math.random()*160,0,Math.PI*2),i.fill();i.fillStyle="#ffffff",i.font=`900 120px ${a}`,i.fillText("SPR\xC1VY",50,150),i.fillStyle="#ffcf4a",i.font=`bold 44px ${a}`,i.fillText("RSS",560,150),i.fillStyle="#d6e6f5",i.font=`30px ${a}`,i.fillText("Hedlajner  |  spr\xE1vy z m\xE9di\xED doma aj vo svete",54,200);let h=new Date;if(i.textAlign="right",i.fillText(`${h.getDate()}. ${h.getMonth()+1}. ${h.getFullYear()}`,974,70),i.textAlign="left",i.fillStyle="#ffcf4a",i.fillRect(50,226,924,6),!o.length)return i.fillStyle="#fff",i.font=`44px ${a}`,i.fillText("Spr\xE1vy z RSS nie s\xFA k dispoz\xEDcii.",60,330),r.needsUpdate=!0,{texture:r,items:o};let c=o[0];i.fillStyle="#ffcf4a",i.font=`bold 30px ${a}`,i.fillText(`${(c.c||"").toUpperCase()}  ${c.s||""}`,50,300),i.fillStyle="#ffffff",i.font=`bold 66px ${a}`;let u=Pi(i,c.t,50,380,924,74,4);return i.fillStyle="#d6e6f5",i.font=`32px ${a}`,u=Pi(i,c.e,50,u+6,924,42,3),u+=30,i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(36,u-10,952,1400-u-40),u+=40,o.slice(1).forEach(d=>{u>1310||(i.fillStyle="#ffcf4a",i.font=`bold 22px ${a}`,i.fillText(`${d.s||""}${d.n?"  +"+d.n+" m\xE9di\xE1":""}`,60,u),i.fillStyle="#ffffff",i.font=`bold 32px ${a}`,u=Pi(i,d.t,60,u+38,894,38,2)+18)}),r.needsUpdate=!0,{texture:r,items:o}}var Ye={x:5,z:3.75,floor:-.86,ceil:-.86+3},os=1;function Oy(){let e=document.createElement("canvas");e.width=512,e.height=426;let n=e.getContext("2d");n.fillStyle="#4e2914",n.fillRect(0,0,512,426);for(let r=0;r<120;r++){n.strokeStyle=`rgba(${20+Math.random()*30},${8+Math.random()*10},2,${.12+Math.random()*.2})`,n.lineWidth=.6+Math.random()*1.4,n.beginPath();let o=Math.random()*512;n.moveTo(o,0);for(let a=0;a<=426;a+=30)n.lineTo(o+Math.sin(a/50+r)*4,a);n.stroke()}for(let r of[0,512/2]){let o=r+26,a=40,l=512/2-52,h=346;n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(o,a,l,h),n.strokeStyle="rgba(0,0,0,0.55)",n.lineWidth=6,n.strokeRect(o,a,l,h),n.strokeStyle="rgba(255,190,120,0.18)",n.lineWidth=2,n.strokeRect(o+5,a+5,l-10,h-10)}let i=new be(e);return i.colorSpace=de,i.wrapS=Bn,i}function Fy(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle="#1a4a32",e.fillRect(0,0,256,256);for(let r=0;r<256;r+=32)e.fillStyle="rgba(255,255,255,0.025)",e.fillRect(r,0,14,256);let n=(r,o)=>{e.save(),e.translate(r,o),e.fillStyle="rgba(190,170,110,0.16)",e.beginPath(),e.moveTo(0,-38),e.quadraticCurveTo(14,-10,0,0),e.quadraticCurveTo(-14,-10,0,-38),e.moveTo(0,38),e.quadraticCurveTo(14,10,0,0),e.quadraticCurveTo(-14,10,0,38),e.moveTo(-30,0),e.quadraticCurveTo(-8,10,0,0),e.quadraticCurveTo(-8,-10,-30,0),e.moveTo(30,0),e.quadraticCurveTo(8,10,0,0),e.quadraticCurveTo(8,-10,30,0),e.fill(),e.beginPath(),e.arc(0,0,5,0,Math.PI*2),e.fill(),e.restore()};n(256/2,256/2);for(let[r,o]of[[0,0],[256,0],[0,256],[256,256]])n(r,o);let i=new be(t);return i.colorSpace=de,i.wrapS=i.wrapT=Bn,i}function By(s){let t=document.createElement("canvas");t.width=512,t.height=370;let e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,220),i=[["#f3c98b","#d9825b","#4a6a4d","#2c4a3a","#7aa6b8"],["#9fc3d8","#e8d3a8","#5d7b4f","#33502f","#6d93a8"]],r=i[s%i.length];n.addColorStop(0,r[0]),n.addColorStop(1,r[1]),e.fillStyle=n,e.fillRect(0,0,512,370),e.fillStyle="rgba(255,240,200,0.8)",e.beginPath(),e.arc(150+s*180,90,34,0,Math.PI*2),e.fill();for(let[a,l,h]of[[200,r[2],40],[250,r[3],30]]){e.fillStyle=l,e.beginPath(),e.moveTo(0,370);for(let c=0;c<=512;c+=16)e.lineTo(c,a-Math.sin(c/(70+s*20)+s)*h-Math.sin(c/23)*6);e.lineTo(512,370),e.fill()}e.fillStyle=r[4],e.fillRect(0,300,512,70),e.fillStyle="rgba(255,255,255,0.25)";for(let a=0;a<12;a++)e.fillRect(Math.random()*512,305+Math.random()*60,40+Math.random()*60,2);for(let a=0;a<1500;a++)e.fillStyle=`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.03)`,e.fillRect(Math.random()*512,Math.random()*370,6,2);let o=new be(t);return o.colorSpace=de,o}function Hy(s,t){let e=document.createElement("canvas");e.width=256,e.height=96;let n=e.getContext("2d");n.fillStyle="#c9a24a",n.fillRect(0,0,256,96),n.strokeStyle="#7a5a1c",n.lineWidth=6,n.strokeRect(3,3,250,90),n.fillStyle="#1b1206",n.textAlign="center",n.font="bold 30px Georgia, serif",n.fillText(s,128,42),n.font="22px Arial, sans-serif",n.fillText(t,128,76);let i=new be(e);return i.colorSpace=de,i}function Cu(s,t,e={}){let n=t==="high",{x:i,z:r,floor:o,ceil:a}=Ye,l=a-o,h=Oy(),c=Fy(),u=new Et({color:4859410,roughness:.45,metalness:.05}),d=new Et({color:3020554,roughness:.4,metalness:.05}),f=new Et({color:11569724,metalness:.85,roughness:.35}),m=new Et({color:5904914,roughness:.55,metalness:.05}),y=(St,j,rt,P,at,J=s)=>{let ve=new Bt(St,j);return ve.position.set(rt,P,at),ve.castShadow=n,ve.receiveShadow=!0,J.add(ve),ve},g={at:1.9,w:1,h:2.15},p=null,E=Zn.degToRad(72),v={open:!1,angle:0},_=[[0,-r,0,2*i,null],[0,r,Math.PI,2*i,null],[-i,0,Math.PI/2,2*r,null],[i,0,-Math.PI/2,2*r,g]];for(let[St,j,rt,P,at]of _){let J=new ce;J.position.set(St,o,j),J.rotation.y=rt;let ve=at?[[-P/2,at.at-at.w/2],[at.at+at.w/2,P/2]]:[[-P/2,P/2]];for(let[se,xe]of ve){let Oe=xe-se,b=(se+xe)/2,B=c.clone();B.needsUpdate=!0,B.repeat.set(Oe/.6,(l-os)/.6),B.offset.set(se/.6,0);let nt=new Bt(new oe(Oe,l-os),new Et({map:B,roughness:.9}));nt.position.set(b,os+(l-os)/2,0),nt.receiveShadow=!0,J.add(nt);let tt=h.clone();tt.needsUpdate=!0,tt.repeat.set(Oe/1.2,1);let X=new Bt(new kt(Oe,os,.03),new Et({map:tt,roughness:.5}));X.position.set(b,os/2,.015),X.receiveShadow=!0,J.add(X);for(let[It,qt,Qt]of[[.06,.12,.045],[os,.05,.06]]){let Jt=new Bt(new kt(Oe,qt,Qt),u);Jt.position.set(b,It,Qt/2),J.add(Jt)}}let ue=new Bt(new kt(P,.18,.08),u);if(ue.position.set(0,l-.09,.04),J.add(ue),at){let se=l-at.h,xe=c.clone();xe.needsUpdate=!0,xe.repeat.set(at.w/.6,se/.6);let Oe=new Bt(new oe(at.w,se),new Et({map:xe,roughness:.9}));Oe.position.set(at.at,at.h+se/2,0),J.add(Oe);let b=[[at.at-at.w/2-.04,at.h/2,.08,at.h+.08],[at.at+at.w/2+.04,at.h/2,.08,at.h+.08],[at.at,at.h+.04,at.w+.16,.08]];for(let[ie,S,w,ot]of b)y(new kt(w,ot,.1),d,ie,S,.03,J);for(let ie of[-1,1])y(new kt(.02,at.h,.2),d,at.at+ie*at.w/2,at.h/2,-.1,J);y(new kt(at.w,.02,.2),d,at.at,at.h,-.1,J);let B=new ce;B.position.set(at.at+at.w/2-.02,0,.02),B.rotation.y=Zn.degToRad(72),J.add(B),p=B;let nt=new Et({color:5910294,roughness:.45});y(new kt(at.w-.04,at.h-.02,.045),nt,-(at.w-.04)/2,at.h/2,0,B);for(let ie of[.55,1.5])for(let S of[-1,1])y(new kt(at.w-.26,.7,.012),d,-(at.w-.04)/2,ie,S*.026,B);let tt=y(new Be(.03,16,12),f,-(at.w-.04)+.08,1,.05,B);tt.castShadow=!1;let X=new ce;X.position.set(at.at,0,-1.2),J.add(X);let It=new Et({color:7035461,roughness:.9,side:qe});y(new kt(2.4,2.6,2.2),It,0,1.3,-.05,X);let qt=y(new oe(2.4,2.2),new Et({color:3877404,roughness:.8}),0,.005,-.05,X);qt.rotation.x=-Math.PI/2;let Qt=new Vn(16767136,n?2.2:1.4,4,1.6);Qt.position.set(0,2.2,-.4),X.add(Qt);let Jt=y(new Be(.05,12,8),new we({color:16773328}),0,2.45,-.4,X);Jt.castShadow=!1}s.add(J)}let V=new Et({color:1905420,roughness:.9}),L=new Bt(new oe(2*i,2*r),V);L.rotation.x=Math.PI/2,L.position.y=a,L.layers.set(2),s.add(L);let U=new Et({color:3809039,roughness:.6});for(let St=-i+1.25;St<i-.1;St+=1.25){let j=new Bt(new kt(.16,.18,2*r),U);j.position.set(St,a-.09,0),j.layers.set(2),s.add(j)}let z=new Et({color:16769712,emissive:16760944,emissiveIntensity:1.2,roughness:.6}),T=o+2.35,x=[[-2.6,-r,0],[2.6,-r,0],[-2.8,r,Math.PI],[2.8,r,Math.PI],[-i,0,Math.PI/2],[i,-1.5,-Math.PI/2]];s.add(new ko(16770760,n?.22:.4));for(let[St,j,rt]of x){let P=new ce;P.position.set(St,T,j),P.rotation.y=rt;let at=new Bt(new ge(.05,.05,.02,20),f);at.rotation.x=Math.PI/2,at.position.z=.01,P.add(at);let J=new Bt(new ge(.008,.008,.14,8),f);J.rotation.x=Math.PI/2,J.position.z=.08,P.add(J);let ve=new Bt(new ge(.05,.085,.13,24,1,!0),z);if(ve.position.set(0,.05,.16),P.add(ve),s.add(P),n){let ue=new Vn(16758886,5,4.5,1.5);ue.position.set(St+Math.sin(rt)*.3,T+.05,j+Math.cos(rt)*.3),s.add(ue)}}let A={x:-2.6,y:o+1.5,w:1.6,h:1.1},q=y(new oe(A.w,A.h),new Et({map:wu(),roughness:.85}),A.x,A.y,-r+.045);q.castShadow=!1;for(let[St,j,rt,P]of[[A.x,A.y+A.h/2+.03,A.w+.12,.06],[A.x,A.y-A.h/2-.03,A.w+.12,.06],[A.x-A.w/2-.03,A.y,.06,A.h],[A.x+A.w/2+.03,A.y,.06,A.h]])y(new kt(rt,P,.06),d,St,j,-r+.04);y(new kt(A.w,A.h,.02),d,A.x,A.y,-r+.02);let k={x:2.6,base:o},W=.21,G=Sn.length*W+.2;y(new kt(G,1.85,.03),d,k.x,o+.15+.925,-r+.05),y(new kt(G+.05,.06,.16),u,k.x,o+.12,-r+.11),y(new kt(G+.05,.05,.12),u,k.x,o+1.35,-r+.1);let O=[];Sn.forEach((St,j)=>{let rt=k.x+(j-(Sn.length-1)/2)*W,P=new ce;P.position.set(rt,o+.16+St.len,-r+.12),P.rotation.x=Math.PI,P.add(rs(St,n)),s.add(P);let at=new Bt(new oe(.18,.068),new Et({map:Hy(String(j+1),St.category),roughness:.4,metalness:.3}));at.position.set(rt,o+.3,-r+.07),s.add(at),O.push({group:P,baseZ:-r+.12,spec:St})});let K=new Bt(new Ws(.035,.06,32),new we({color:16765503,transparent:!0,opacity:.9}));K.rotation.x=-Math.PI/2,s.add(K);let $=St=>{St.forEach((j,rt)=>{let P=O[rt];if(!P||P.spec===j||P.spec.id===j.id&&JSON.stringify(P.spec.colors)===JSON.stringify(j.colors)&&P.spec.len===j.len){P&&(P.spec=j);return}P.group.clear(),P.group.position.y=o+.16+j.len,P.group.add(rs(j,n)),P.spec=j})},ht=!1,yt=[null,null],wt=(St,j)=>{yt=[St,j];let rt=O.some(P=>P.spec.id===St)?St:null;K.visible=!!rt;for(let P of O){let at=P.spec.id===rt;P.group.position.z=P.baseZ+(at&&ht?.12:0),P.group.visible=!at||ht,at&&K.position.set(P.group.position.x,o+.005,P.group.position.z)}},Ut={x:-.78,y:o+1.42,w:1.5};y(new kt(Ut.w,.04,.26),d,Ut.x,Ut.y,-r+.13);for(let St of[-1,1]){let j=y(new kt(.03,.16,.2),d,Ut.x+St*(Ut.w/2-.03),Ut.y-.1,-r+.11);j.castShadow=!1}let At=(()=>{let St=document.createElement("canvas");St.width=1024,St.height=128;let j=St.getContext("2d");j.fillStyle="#123524",j.fillRect(0,0,1024,128),j.strokeStyle="#c9a24a",j.lineWidth=6,j.strokeRect(8,8,1008,112),j.fillStyle="#f2d48a",j.font="bold 60px Georgia, serif",j.textAlign="center",j.textBaseline="middle",j.fillText("NAJLEP\u0160\xCD HR\xC1\u010CI",512,68);let rt=new be(St);return rt.colorSpace=de,rt})();y(new oe(.9,.11),new Et({map:At,roughness:.6}),Ut.x,Ut.y+.62,-r+.035).castShadow=!1;let Z=[new Et({color:15777856,metalness:.55,roughness:.28,emissive:3811328,emissiveIntensity:.6}),new Et({color:14672872,metalness:.55,roughness:.25,emissive:2763824,emissiveIntensity:.6}),new Et({color:13140042,metalness:.55,roughness:.3,emissive:3020294,emissiveIntensity:.6})],ct=St=>[[0,0],[.07,0],[.07,.025],[.035,.035],[.016,.05],[.014,.12],[.022,.135],[.06,.16],[.085,.22],[.095,.29],[.09,.3],[.08,.235],[.055,.17],[0,.155]].map(([j,rt])=>new Rt(j*St,rt*St)),Dt=[];[[1,-.5,.92],[0,0,1.12],[2,.5,.82]].forEach(([St,j,rt])=>{let P=Ut.x+j*(Ut.w*.62),at=-r+.14,J=new ce;J.position.set(P,Ut.y+.02,at);let ve=new Bt(new Yi(ct(rt),40),Z[St]);ve.castShadow=!0,J.add(ve);for(let b of[-1,1]){let B=new Bt(new jn(.035*rt,.006*rt,8,20,Math.PI),Z[St]);B.position.set(b*.088*rt,.24*rt,0),B.rotation.z=b>0?-Math.PI/2:Math.PI/2,J.add(B)}let ue=new Bt(new kt(.17*rt,.05,.17*rt),d);ue.position.y=-0,J.position.y+=.05,ue.position.y=-.025,J.add(ue),s.add(J);let se=document.createElement("canvas");se.width=512,se.height=160;let xe=new be(se);xe.colorSpace=de,xe.anisotropy=8;let Oe=new Bt(new oe(.4,.125),new Et({map:xe,roughness:.45,metalness:.2}));Oe.position.set(P,Ut.y-.11,-r+.03),Oe.castShadow=!1,s.add(Oe),Dt[St]={c:se,tex:xe}});let gt=new Vn(16769712,n?1.6:1.2,2.2,1.6);gt.position.set(Ut.x,Ut.y+.75,-r+.55),s.add(gt);let Lt={x:.72,y:o+1.68,w:.95,h:1},Gt=document.createElement("canvas");Gt.width=760,Gt.height=800;let Yt=new be(Gt);Yt.colorSpace=de,Yt.anisotropy=8,y(new oe(Lt.w,Lt.h),new Et({map:Yt,roughness:.85}),Lt.x,Lt.y,-r+.045).castShadow=!1,y(new kt(Lt.w+.08,Lt.h+.08,.03),d,Lt.x,Lt.y,-r+.02);let ne=St=>{let j=Math.max(0,Math.round(St||0));return`${Math.floor(j/60)}:${String(j%60).padStart(2,"0")}`},D=(St,j,rt)=>{let P=String(j||"");for(;P.length>1&&St.measureText(P).width>rt;)P=P.slice(0,-1);return P===String(j||"")?P:P.slice(0,-1)+"\u2026"},et=St=>{let j=St||[],rt=["#e8b830","#c9cdd3","#b8733a"];for(let J=0;J<3;J++){let{c:ve,tex:ue}=Dt[J],se=ve.getContext("2d"),xe=j[J];se.fillStyle="#20150c",se.fillRect(0,0,512,160),se.strokeStyle=rt[J],se.lineWidth=8,se.strokeRect(6,6,500,148),se.textAlign="center",se.fillStyle=rt[J],se.font="bold 54px Georgia, serif",se.fillText(xe?D(se,`${J+1}. ${xe.user.name}`,480):`${J+1}. miesto`,256,66),se.fillStyle="#f4ecd8",se.font="bold 42px Arial, Helvetica, sans-serif",se.fillText(xe?`${xe.points} b.  za ${ne(xe.seconds)}`:"vo\u013En\xE9",256,128),ue.needsUpdate=!0}let P=Gt.getContext("2d"),at=Gt.width;P.fillStyle="#a5754a",P.fillRect(0,0,at,Gt.height),P.fillStyle="#fbf7ec",P.fillRect(30,30,at-60,Gt.height-60),P.fillStyle="#c0392b",P.beginPath(),P.arc(at/2,52,12,0,Math.PI*2),P.fill(),P.fillStyle="#123524",P.textAlign="center",P.font="bold 46px Georgia, serif",P.fillText("Rebr\xED\u010Dek 4. a\u017E 10.",at/2,120),P.fillStyle="#c9a24a",P.fillRect(60,142,at-120,4);for(let J=3;J<10;J++){let ve=j[J],ue=210+(J-3)*80;P.textAlign="left",P.fillStyle="#123524",P.font="bold 36px Arial, Helvetica, sans-serif",P.fillText(`${J+1}.`,64,ue),P.fillStyle=ve?"#222":"#999",P.font="34px Arial, Helvetica, sans-serif",P.fillText(ve?D(P,ve.user.name,330):"...",130,ue),P.textAlign="right",P.fillText(ve?`${ve.points} b.  ${ne(ve.seconds)}`:"",at-64,ue),P.fillStyle="rgba(201,162,74,0.35)",P.fillRect(64,ue+22,at-128,2)}Yt.needsUpdate=!0};et([]);let R={y:o+1.62,w:1.5,h:.84},vt={z:-2,y:R.y,w:1.55,h:.98},pt=document.createElement("canvas");pt.width=1280,pt.height=810;let Ct=new be(pt);Ct.colorSpace=de,Ct.anisotropy=8,y(new kt(.05,vt.h+.1,vt.w+.1),d,-i+.03,vt.y,vt.z);let bt=y(new oe(vt.w,vt.h),new Et({map:Ct,roughness:.85}),-i+.058,vt.y,vt.z);bt.rotation.y=Math.PI/2,bt.castShadow=!1;let Xt=St=>{let j=pt.getContext("2d"),rt=1280,P=810;j.fillStyle="#a5754a",j.fillRect(0,0,rt,P);for(let J=0;J<4e3;J++)j.fillStyle=`rgba(${60+Math.random()*80},${35+Math.random()*40},${15+Math.random()*20},0.25)`,j.fillRect(Math.random()*rt,Math.random()*P,3,3);j.fillStyle="#123524",j.fillRect(380,18,520,92),j.fillStyle="#f2d48a",j.font="bold 56px Georgia, serif",j.textAlign="center",j.fillText("LIGA",640,82),j.fillStyle="#fbf7ec",j.font="26px Arial, sans-serif",j.fillText(St&&St.season?`${St.season.name}  \xB7  do konca ${St.season.daysLeft} dn\xED`:"Liga: prihl\xE1s sa a hraj ligov\xE9 partie",640,145);let at=[[30,170],[345,170],[660,170],[975,170]];for(let J=1;J<=4;J++){let[ve,ue]=at[J-1],se=275,xe=520;j.save(),j.translate(ve+se/2,ue+xe/2),j.rotate((J%2?-1:1)*.01),j.fillStyle="rgba(0,0,0,0.35)",j.fillRect(-se/2+6,-xe/2+8,se,xe),j.fillStyle="#fbf7ec",j.fillRect(-se/2,-xe/2,se,xe),j.fillStyle=["#c9a24a","#9aa0a8","#b8733a","#2a9d8f"][J-1],j.beginPath(),j.arc(0,-xe/2+18,11,0,Math.PI*2),j.fill(),j.fillStyle="#123524",j.font="bold 40px Georgia, serif",j.textAlign="center",j.fillText(`${J}. liga`,0,-xe/2+78),j.fillStyle="#c9a24a",j.fillRect(-se/2+20,-xe/2+96,se-40,3);let Oe=St&&St.leagues&&St.leagues[J]||[];j.textAlign="left";for(let b=0;b<5;b++){let B=Oe[b],nt=-xe/2+150+b*72;j.fillStyle=B?"#222":"#aaa",j.font="bold 26px Arial, sans-serif";let tt=B?`${B.rank}. ${B.user.name}`:`${b+1}. ...`;for(;tt.length>2&&j.measureText(tt).width>se-40;)tt=tt.slice(0,-1);j.fillText(tt,-se/2+20,nt),j.font="22px Arial, sans-serif",j.fillStyle="#555",j.fillText(B?`${B.points} b.  V ${B.wins} / P ${B.losses}`:"",-se/2+20,nt+28)}j.restore()}j.fillStyle="#123524",j.fillRect(30,718,rt-60,66),j.fillStyle="#FACC15",j.font="bold 30px Arial, sans-serif",j.textAlign="center",j.fillText(St&&St.me?`Ty: ${St.me.rank}. miesto v ${St.me.league}. lige, ${St.me.points} bodov`:"Liga: v menu (Esc) tla\u010Didlo Liga",rt/2,762),Ct.needsUpdate=!0};Xt(null);let Ht=document.createElement("canvas");Ht.width=1024,Ht.height=574;let C=new be(Ht);C.colorSpace=de,C.anisotropy=8,y(new kt(.05,R.h+.12,R.w+.12),d,-i+.03,R.y,0);let M=y(new oe(R.w,R.h),new Et({map:C,roughness:.7,emissive:16777215,emissiveMap:C,emissiveIntensity:.12}),-i+.064,R.y,0);M.rotation.y=Math.PI/2,M.castShadow=!1;let Q=(St,j)=>{let rt=Ht.getContext("2d"),P=Ht.width,at=Ht.height;rt.fillStyle="#123524",rt.fillRect(0,0,P,at),rt.strokeStyle="#c9a24a",rt.lineWidth=8,rt.strokeRect(14,14,P-28,at-28),rt.fillStyle="#f2d48a",rt.textAlign="center",rt.font="bold 62px Georgia, serif",rt.fillText("MY SNOOKER",P/2,92),rt.font="34px Georgia, serif",rt.fillStyle="#e8e2cf",rt.fillText(j&&j.mode||"Tr\xE9ning",P/2,140);let J=j&&j.match,ve=j&&j.rows?j.rows:J?[[J.names[0]+(J.turn===0?"  \u25CF":""),J.scores[0]],[J.names[1]+(J.turn===1?"  \u25CF":""),J.scores[1]],["S\xE9ria",J.brk],["Hr\xE1 sa na",J.on],["Zost\xE1va na stole",J.left]]:[["\xDAdery",St.shots],["Spadnut\xE9 gule",St.potted],["Body",St.points],["S\xE9ria",St.run],["Najlep\u0161ia s\xE9ria",St.best]];rt.font="40px Arial, Helvetica, sans-serif",ve.forEach(([ue,se],xe)=>{let Oe=210+xe*62;rt.textAlign="left",rt.fillStyle="#e8e2cf",rt.fillText(ue,90,Oe),rt.textAlign="right",rt.fillStyle="#ffffff",rt.font="bold 44px Arial, Helvetica, sans-serif",rt.fillText(String(se),P-90,Oe),rt.font="40px Arial, Helvetica, sans-serif",rt.fillStyle="rgba(201,162,74,0.35)",rt.fillRect(90,Oe+16,P-180,2)}),j&&(rt.textAlign="center",rt.font="30px Arial, Helvetica, sans-serif",rt.fillStyle="#f2d48a",rt.fillText(`${j.cue}   |   Krieda: ${j.chalk>0?j.chalk+" \xFAdery":"\u017Eiadna (F3)"}`,P/2,at-40)),C.needsUpdate=!0};Q({shots:0,potted:0,points:0,run:0,best:0},null),y(new kt(.45,.8,1.7),d,-i+.25,o+.4,0),y(new kt(.47,.03,1.74),u,-i+.25,o+.815,0);for(let St of[-.42,.42])y(new kt(.012,.5,.75),u,-i+.48,o+.42,St),y(new Be(.015,10,8),f,-i+.49,o+.55,St*.2);let lt=-i+1.1,mt=r-1.1;y(new ge(.32,.32,.04,32),d,lt,o+1.05,mt);let st=o+1.07,$t=new ce;$t.position.set(lt+.05,st,mt-.08),$t.rotation.y=-Math.PI/4,s.add($t),y(new kt(.078,.009,.158),new Et({color:1381914,roughness:.35,metalness:.6}),0,.0045,0,$t);let N=document.createElement("canvas");N.width=360,N.height=740;let ft=new be(N);ft.colorSpace=de,ft.anisotropy=8;let H=y(new oe(.07,.146),new we({map:ft}),0,.0092,0,$t);H.rotation.x=-Math.PI/2,H.castShadow=!1;let Y=St=>{let j=N.getContext("2d"),rt=360,P=j.createLinearGradient(0,0,0,740);P.addColorStop(0,"#1d2b45"),P.addColorStop(1,"#0c1220"),j.fillStyle=P,j.fillRect(0,0,rt,740),j.fillStyle="#e8ecf3",j.font="22px Arial, sans-serif",j.textAlign="left",j.fillText("11:30",24,40),j.textAlign="right",j.fillText("5G  86 %",rt-24,40),j.textAlign="center",j.fillStyle="#FACC15",j.beginPath(),j.arc(rt/2,170,62,0,Math.PI*2),j.fill(),j.fillStyle="#111214",j.font="bold 64px Arial, sans-serif",j.fillText(St&&St.name?St.name.trim().charAt(0).toUpperCase():"?",rt/2,193),j.fillStyle="#ffffff",j.font="bold 40px Arial, sans-serif",j.fillText("M\xF4j \xFA\u010Det",rt/2,290),j.fillStyle="#b9c2d3",j.font="28px Arial, sans-serif",j.fillText(St?String(St.name).slice(0,20):"Neprihl\xE1sen\xFD",rt/2,334),["Profil","Prihl\xE1senie a heslo","S\xFAhlasy","Nastavenia \xFA\u010Dtu"].forEach((J,ve)=>{let ue=400+ve*66;j.fillStyle="#ffffff14",j.fillRect(28,ue,rt-56,54),j.fillStyle="#e8ecf3",j.textAlign="left",j.font="26px Arial, sans-serif",j.fillText(J,48,ue+36),j.textAlign="right",j.fillStyle="#FACC15",j.fillText("\u203A",rt-44,ue+37)}),j.textAlign="center",j.fillStyle="#FACC15",j.font="bold 26px Arial, sans-serif",j.fillText("\u0164ukni a otvor",rt/2,700),ft.needsUpdate=!0};Y(e.user||null);let it=new Et({color:15267071,transparent:!0,opacity:.22,roughness:.05,metalness:.1,side:je,depthWrite:!1}),xt=new Et({color:10474751,transparent:!0,opacity:.45,roughness:.05,metalness:.05,depthWrite:!1});for(let[St,j]of[[.2,.05],[.11,.17]]){let rt=y(new ge(.036,.03,.12,28,1,!0),it,lt+St,st+.06,mt+j);rt.castShadow=!1;let P=y(new ge(.03,.03,.008,28),it,lt+St,st+.004,mt+j);P.castShadow=!1;let at=y(new ge(.033,.029,.08,28),xt,lt+St,st+.048,mt+j);at.castShadow=!1,at.renderOrder=1,rt.renderOrder=2}y(new ge(.03,.03,1.03,12),f,lt,o+.53,mt),y(new ge(.22,.25,.03,24),f,lt,o+.015,mt);for(let St of[.6,2.3]){let j=lt+Math.cos(St)*.55,rt=mt-Math.sin(St)*.55;y(new ge(.18,.18,.08,24),m,j,o+.76,rt),y(new ge(.022,.022,.72,10),f,j,o+.36,rt),y(new jn(.15,.01,8,24),f,j,o+.3,rt).rotation.x=Math.PI/2,y(new ge(.17,.2,.02,20),f,j,o+.01,rt)}let Nt=(St,j,rt)=>{let P=new ce;P.position.set(St,o,j),P.rotation.y=rt,y(new kt(.8,.42,.8),m,0,.21,0,P),y(new kt(.8,.5,.18),m,0,.66,-.31,P);for(let at of[-1,1])y(new kt(.16,.24,.8),m,at*.4,.54,0,P);y(new kt(.56,.08,.6),new Et({color:7219740,roughness:.6}),0,.46,.04,P),s.add(P)};Nt(-1,r-.7,Math.PI),Nt(1,r-.7,Math.PI);let Mt={x:0,z:r-1.45,top:o+.45};y(new kt(1.2,.04,.62),d,Mt.x,Mt.top-.02,Mt.z),y(new kt(1.1,.06,.52),u,Mt.x,Mt.top-.07,Mt.z);for(let St of[-1,1])for(let j of[-1,1])y(new kt(.05,Mt.top-o-.04,.05),d,Mt.x+St*.54,o+(Mt.top-o-.04)/2,Mt.z+j*.25);let Vt=Au(e.news,e.site),jt={x:Mt.x+.12,z:Mt.z+.02,w:.62,h:.44},zt=new Bt(new oe(jt.w,jt.h),new Et({map:Vt.texture,roughness:.92}));zt.rotation.order="YXZ",zt.rotation.set(-Math.PI/2,.12,0),zt.position.set(jt.x,Mt.top+.002,jt.z),zt.receiveShadow=!0,s.add(zt);let F=Ru(e.rss),Ot={x:Mt.x-.36,z:Mt.z-.02,w:.3,h:.41},ut=new Bt(new oe(Ot.w,Ot.h),new Et({map:F.texture,roughness:.35,metalness:.05}));ut.rotation.order="YXZ",ut.rotation.set(-Math.PI/2,-.18,0),ut.position.set(Ot.x,Mt.top+.003,Ot.z),ut.receiveShadow=!0,s.add(ut);for(let[St,j]of[[-2.8,0],[2.8,1]]){let rt=y(new oe(.86,.62),new Et({map:By(j),roughness:.7}),St,o+1.75,r-.046);rt.rotation.y=Math.PI,rt.castShadow=!1,y(new kt(1,.76,.04),new Et({color:9071146,metalness:.6,roughness:.4}),St,o+1.75,r-.02)}let _t=new ce;_t.position.set(i-.02,o+2,.35),_t.rotation.y=-Math.PI/2,s.add(_t);{let j=document.createElement("canvas");j.width=j.height=512;let rt=j.getContext("2d");rt.fillStyle="#f4eedc",rt.fillRect(0,0,512,512),rt.translate(256,256),rt.strokeStyle="#2a2218";for(let ue=0;ue<60;ue++){let se=ue/60*Math.PI*2,xe=ue%5===0;rt.lineWidth=xe?9:3,rt.beginPath(),rt.moveTo(Math.sin(se)*(xe?200:214),-Math.cos(se)*(xe?200:214)),rt.lineTo(Math.sin(se)*236,-Math.cos(se)*236),rt.stroke()}rt.fillStyle="#2a2218",rt.font="bold 56px Georgia, serif",rt.textAlign="center",rt.textBaseline="middle";for(let ue=1;ue<=12;ue++){let se=ue/12*Math.PI*2;rt.fillText(String(ue),Math.sin(se)*160,-Math.cos(se)*160+3)}rt.font="22px Georgia, serif",rt.fillText("MY SNOOKER",0,78);let P=new be(j);P.colorSpace=de,P.anisotropy=8;let at=new Bt(new Pn(.2,64),new Et({map:P,roughness:.6}));at.position.z=.012,_t.add(at);let J=new Bt(new jn(.2+.012,.018,12,64),d);J.position.z=.014,_t.add(J);let ve=new Bt(new ge(.2+.02,.2+.02,.02,48),d);ve.rotation.x=Math.PI/2,_t.add(ve)}let Wt=new Et({color:1709328,roughness:.5,metalness:.3}),Ft=(St,j,rt,P)=>{let at=new ce;at.position.z=rt;let J=new Bt(new kt(j,St,.004),P);return J.position.y=St/2-St*.15,at.add(J),_t.add(at),at},he=Ft(.11,.012,.018,Wt),Ae=Ft(.16,.008,.022,Wt),Ne=Ft(.17,.003,.026,new Et({color:11735583,roughness:.5})),me=new Bt(new ge(.009,.009,.012,16),f);me.rotation.x=Math.PI/2,me.position.z=.028,_t.add(me);let He=11*3600+30*60,De=(St,j=!1)=>{let rt=j?St:He+St,P=rt%60,at=rt/60%60,J=rt/3600%12;Ne.rotation.z=-(Math.floor(P)/60)*Math.PI*2,Ae.rotation.z=-(at/60)*Math.PI*2,he.rotation.z=-(J/12)*Math.PI*2};De(0);let Ve=i-.5,on=-r+.5;y(new ge(.2,.15,.4,20),new Et({color:8010530,roughness:.7}),Ve,o+.2,on);let un=new Et({color:3107631,roughness:.7});for(let St=0;St<14;St++){let j=St/14*Math.PI*2,rt=.08+St%3*.06,P=y(new Be(.11+St%2*.04,10,8),un,Ve+Math.cos(j)*rt,o+.55+St%4*.18,on+Math.sin(j)*rt);P.scale.set(1,1.6,.5),P.rotation.y=j}return{board:{pos:new I(A.x,A.y,-r+1.62),look:new I(A.x,A.y,-r)},rack:{pos:new I(k.x,o+1.15,-r+3.3),look:new I(k.x,o+.6,-r)},score:{pos:new I(-i+1.55,R.y,0),look:new I(-i,R.y,0)},bar:{pos:new I(lt-.4,o+1.5,mt+.38),look:new I(lt+.62,o+.72,mt-.6)},phone:H,setPhone:Y,leagueBoard:{pos:new I(-i+1.55,vt.y,vt.z),look:new I(-i,vt.y,vt.z)},setLeague:Xt,trophies:{pos:new I(-.17,o+1.62,-r+2.05),look:new I(-.17,o+1.6,-r)},chair:{pos:new I(1,o+1.12,r-.8),look:new I(-.2,o+.62,.3)},news:{pos:new I(jt.x+.11,Mt.top+.6,jt.z+.27),look:new I(jt.x+.1,Mt.top,jt.z-.01)},newsItems:Vt.items,magazine:{pos:new I(Ot.x+.02,Mt.top+.5,Ot.z+.2),look:new I(Ot.x,Mt.top,Ot.z-.01)},rssItems:F.items,selectCue:wt,setRackView(St){ht=!!St,wt(yt[0],yt[1])},setRackSpecs:$,updateScore:Q,setClock:De,setTrophies:et,toggleDoor(){return v.open=!v.open,v.open},update(St){if(!p)return!1;let j=v.open?E:0,rt=v.angle,P=St*1.4;return v.angle=rt+Math.max(-P,Math.min(P,j-rt)),p.rotation.y=v.angle,rt>0&&v.angle===0}}}function Ec(s,t=.15){return s.x=Math.max(-Ye.x+t,Math.min(Ye.x-t,s.x)),s.z=Math.max(-Ye.z+t,Math.min(Ye.z-t,s.z)),s.y=Math.max(Ye.floor+.1,Math.min(Ye.ceil-.25,s.y)),s}var wc=.062,Vy=.052,En=.05,Tc=.12,Gy=.037;function Pu(s,t="#1d6b34"){let n=Math.round(2048*(1.778+2*En)/(3.569+2*En)),i=document.createElement("canvas");i.width=2048,i.height=n;let r=i.getContext("2d");r.fillStyle=t,r.fillRect(0,0,2048,n);let o=r.getImageData(0,0,2048,n);for(let d=0;d<o.data.length;d+=4){let f=(Math.random()-.5)*10;o.data[d]+=f,o.data[d+1]+=f*1.4,o.data[d+2]+=f}r.putImageData(o,0,0);let a=r.createRadialGradient(2048/2,n/2,n*.1,2048/2,n/2,2048*.6);a.addColorStop(0,"rgba(255,255,255,0.06)"),a.addColorStop(1,"rgba(0,0,0,0.18)"),r.fillStyle=a,r.fillRect(0,0,2048,n);let l=2048/(3.569+2*En),h=d=>(d+3.569/2+En)*l,c=d=>(d+1.778/2+En)*l;r.strokeStyle="rgba(255,255,255,0.75)",r.lineWidth=Math.max(2,l*.003),r.beginPath(),r.moveTo(h(Je),c(-1.778/2)),r.lineTo(h(Je),c(1.778/2)),r.stroke(),r.beginPath(),r.arc(h(Je),c(0),Ai*l,Math.PI/2,3*Math.PI/2),r.stroke(),r.fillStyle="rgba(255,255,255,0.8)";for(let d of Object.keys(Ln))r.beginPath(),r.arc(h(Ln[d].x),c(Ln[d].z),l*.005,0,Math.PI*2),r.fill();let u=new be(i);return u.colorSpace=de,u.anisotropy=s,u}function Wy(){let s=document.createElement("canvas");s.width=512,s.height=64;let t=s.getContext("2d");t.fillStyle="#5a2e14",t.fillRect(0,0,512,64);for(let n=0;n<70;n++){t.strokeStyle=`rgba(${30+Math.random()*40},${12+Math.random()*15},4,${.15+Math.random()*.25})`,t.lineWidth=1+Math.random()*2,t.beginPath();let i=Math.random()*64;t.moveTo(0,i);for(let r=0;r<=512;r+=32)t.lineTo(r,i+Math.sin(r/60+n)*3);t.stroke()}let e=new be(s);return e.colorSpace=de,e.wrapS=e.wrapT=Bn,e.repeat.set(6,1),e}function Xy(){let t=document.createElement("canvas");t.width=t.height=1024;let e=t.getContext("2d"),n=25,i=1024/n,r=7,o=()=>(r=r*16807%2147483647)/2147483647;for(let l=0;l<n;l++){let h=-o()*1024*.4;for(;h<1024;){let c=1024*(.3+o()*.25),u=70+o()*40;e.fillStyle=`rgb(${u+40},${u*.62+12},${u*.36})`,e.fillRect(h,l*i,c,i);for(let d=0;d<9;d++){e.strokeStyle=`rgba(${40+o()*30},${20+o()*12},6,${.12+o()*.18})`,e.lineWidth=.6+o()*1.6,e.beginPath();let f=l*i+o()*i;e.moveTo(h,f);for(let m=0;m<=8;m++)e.lineTo(h+c*m/8,f+Math.sin(m*.9+d)*i*.12);e.stroke()}e.fillStyle="rgba(15,8,3,0.85)",e.fillRect(h+c-1.5,l*i,1.5,i),h+=c}e.fillStyle="rgba(15,8,3,0.9)",e.fillRect(0,l*i,1024,1.5)}let a=new be(t);return a.colorSpace=de,a.wrapS=a.wrapT=Bn,a}function Iu(s){let t=new ce,e=s.capabilities.getMaxAnisotropy(),n=new Bt(new oe(3.569+2*En,1.778+2*En),new Et({map:Pu(e),roughness:.92,metalness:0}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n.name="cloth",t.add(n);let i=3.569/2,r=1.778/2,o=Gy+.012,a=i+En+Tc,l=r+En+Tc,h=new Et({color:1531951,roughness:.88,side:je}),c=(D,et,R,vt)=>({x:D+R*En,z:et+vt*En}),u=[];for(let D of[-1,1])for(let et of[-1,1]){let R={x:et*(i-wc),z:D*r},vt={x:et*Vy,z:D*r};u.push({long:!0,a:R,b:vt,ab:c(R.x,R.z,et*1,D*1),bb:c(vt.x,vt.z,-et*.18,D*1)})}for(let D of[-1,1]){let et={x:D*i,z:-r+wc},R={x:D*i,z:r-wc};u.push({long:!1,a:et,b:R,ab:c(et.x,et.z,D*1,-1),bb:c(R.x,R.z,D*1,1)})}let d=.016,f=[[.012,0],[.006,.016],[.001,.029],[0,.034],[.003,.0395],[.01,.0435],[.024,.0465],[.045,.048],[.075,.048]];for(let D of u){let et=(H,Y,it)=>{let xt=Math.hypot(Y.x-H.x,Y.z-H.z)||1;return{x:H.x+(Y.x-H.x)/xt*it,z:H.z+(Y.z-H.z)/xt*it}},R=et(D.a,D.ab,d),vt=et(D.a,D.b,d),pt=et(D.b,D.a,d),Ct=et(D.b,D.bb,d),bt=[],Xt=(H,Y,it,xt)=>{for(let Nt=1;Nt<=xt;Nt++){let Mt=Nt/xt,Vt=1-Mt;bt.push({x:Vt*Vt*H.x+2*Vt*Mt*Y.x+Mt*Mt*it.x,z:Vt*Vt*H.z+2*Vt*Mt*Y.z+Mt*Mt*it.z})}};bt.push({...D.ab},{...et(D.ab,R,Math.hypot(R.x-D.ab.x,R.z-D.ab.z)*.5)},{...R}),Xt(R,D.a,vt,10);let Ht=24;for(let H=1;H<Ht;H++)bt.push({x:vt.x+(pt.x-vt.x)*H/Ht,z:vt.z+(pt.z-vt.z)*H/Ht});bt.push({...pt}),Xt(pt,D.b,Ct,10),bt.push({...et(Ct,D.bb,Math.hypot(D.bb.x-Ct.x,D.bb.z-Ct.z)*.5)},{...D.bb});let C=D.b.x-D.a.x,M=D.b.z-D.a.z,Q={x:(D.a.x+D.b.x)/2,z:(D.a.z+D.b.z)/2},lt=-M*Q.x+C*Q.z>0?1:-1,mt=[];for(let H=0;H<bt.length;H++){let Y=bt[Math.max(0,H-1)],it=bt[Math.min(bt.length-1,H+1)],xt=it.x-Y.x,Nt=it.z-Y.z,Mt=Math.hypot(xt,Nt)||1;xt/=Mt,Nt/=Mt;let Vt=-Nt*lt,jt=xt*lt;for(let[zt,F]of f)mt.push(bt[H].x+Vt*zt,F,bt[H].z+jt*zt)}let st=f.length,$t=[];for(let H=0;H<bt.length-1;H++)for(let Y=0;Y<st-1;Y++){let it=H*st+Y,xt=(H+1)*st+Y;lt>0?$t.push(it,xt,it+1,xt,xt+1,it+1):$t.push(it,it+1,xt,xt,it+1,xt+1)}let N=new ze;N.setAttribute("position",new Me(mt,3)),N.setIndex($t),N.computeVertexNormals();let ft=new Bt(N,h);ft.castShadow=!0,ft.receiveShadow=!0,t.add(ft)}let m=ns.map(D=>({x:D.x,z:D.z,r:D.corner?.088:.078,corner:D.corner})),y=i+En,g=r+En,p=[],E=(D,et,R,vt)=>{let pt=[];for(let Ct=0;Ct<=vt;Ct++){let bt=et+(R-et)*Ct/vt;pt.push({x:D.x+Math.cos(bt)*D.r,z:D.z+Math.sin(bt)*D.r})}return pt},v=[],_=D=>{for(;D<0;)D+=Math.PI*2;return D},V=m.find(D=>D.corner&&D.x>0&&D.z>0),L=m.find(D=>D.corner&&D.x<0&&D.z>0),U=m.find(D=>D.corner&&D.x<0&&D.z<0),z=m.find(D=>D.corner&&D.x>0&&D.z<0),T=m.find(D=>!D.corner&&D.z>0),x=m.find(D=>!D.corner&&D.z<0),A=(D,et,R)=>{let vt=R*g-D.z,pt=D.x-et*Math.sqrt(Math.max(0,D.r*D.r-vt*vt)),Ct=et*y-D.x,bt=D.z-R*Math.sqrt(Math.max(0,D.r*D.r-Ct*Ct)),Xt=Math.atan2(R*g-D.z,pt-D.x),Ht=Math.atan2(bt-D.z,et*y-D.x);return{aZ:Xt,aX:Ht}},q=(D,et)=>{let R=et*g-D.z,vt=Math.sqrt(Math.max(0,D.r*D.r-R*R));return{aRight:Math.atan2(R,vt),aLeft:Math.atan2(R,-vt)}},k=(D,et,R,vt)=>{let pt=et,Ct=R;if(vt)for(;Ct<pt;)Ct+=Math.PI*2;else for(;Ct>pt;)Ct-=Math.PI*2;let bt=E(D,pt,Ct,24);p.push(...bt),v.push(bt)};{let D=[];for(let[et,R,vt]of[[V,1,1],[L,-1,1],[U,-1,-1],[z,1,-1]]){let pt=A(et,R,vt),Ct=R*vt>0?pt.aX:pt.aZ,bt=R*vt>0?pt.aZ:pt.aX;D.push({c:et,a0:Ct,a1:bt})}for(let[et,R]of[[T,1],[x,-1]]){let vt=q(et,R);D.push({c:et,a0:R>0?vt.aRight:vt.aLeft,a1:R>0?vt.aLeft:vt.aRight})}D.sort((et,R)=>_(Math.atan2(et.c.z,et.c.x))-_(Math.atan2(R.c.z,R.c.x)));for(let et of D)k(et.c,et.a0,et.a1,!0)}let W=.07,G=new Gs;G.moveTo(-a+W,-l),G.lineTo(a-W,-l),G.quadraticCurveTo(a,-l,a,-l+W),G.lineTo(a,l-W),G.quadraticCurveTo(a,l,a-W,l),G.lineTo(-a+W,l),G.quadraticCurveTo(-a,l,-a,l-W),G.lineTo(-a,-l+W),G.quadraticCurveTo(-a,-l,-a+W,-l);let O=new qi;p.forEach((D,et)=>et?O.lineTo(D.x,D.z):O.moveTo(D.x,D.z)),O.closePath(),G.holes.push(O);let K=new Et({map:Wy(),roughness:.4,metalness:.05}),$=.008,ht=new br(G,{depth:o+.02-2*$,bevelEnabled:!0,bevelThickness:$,bevelSize:$*.8,bevelSegments:4,curveSegments:16}),yt=new Bt(ht,K);yt.rotation.x=Math.PI/2,yt.position.y=o-$,yt.castShadow=!0,yt.receiveShadow=!0,t.add(yt);let wt=new Gs,Ut=a-.03,At=l-.03,Z=.05;wt.moveTo(-Ut+Z,-At),wt.lineTo(Ut-Z,-At),wt.quadraticCurveTo(Ut,-At,Ut,-At+Z),wt.lineTo(Ut,At-Z),wt.quadraticCurveTo(Ut,At,Ut-Z,At),wt.lineTo(-Ut+Z,At),wt.quadraticCurveTo(-Ut,At,-Ut,At-Z),wt.lineTo(-Ut,-At+Z),wt.quadraticCurveTo(-Ut,-At,-Ut+Z,-At);let ct=new Bt(new br(wt,{depth:.26,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelSegments:3}),K);ct.rotation.x=Math.PI/2,ct.position.y=-.03,ct.castShadow=!0,t.add(ct);let Dt=new ge(.075,.06,.56,24);for(let D of[-1,-.33,.33,1])for(let et of[-1,1]){let R=new Bt(Dt,K);R.position.set(D*(i-.1),-.58,et*(r-.06)),R.castShadow=!0,t.add(R)}let gt=new we({color:328965}),Lt=new Et({color:1842204,roughness:.55,metalness:.15});for(let D of m){let et=new Bt(new ge(D.r,D.r*.8,.16,40,1,!0),gt);et.position.set(D.x,-.08,D.z),t.add(et);let R=new Bt(new Pn(D.r,40),gt);R.rotation.x=-Math.PI/2,R.position.set(D.x,-.003,D.z),t.add(R);let vt=ns.find(Ct=>Ct.x===D.x&&Ct.z===D.z),pt=new Bt(new Pn(vt.corner?.072:.066,40),gt);pt.rotation.x=-Math.PI/2,pt.position.set(D.x,8e-4,D.z),t.add(pt)}for(let D of v){let et=new xr(D.map(vt=>new I(vt.x,o-.004,vt.z))),R=new Bt(new Co(et,48,.011,10,!1),Lt);R.castShadow=!0,t.add(R)}let Gt=new Et({color:14271370,metalness:.8,roughness:.3});for(let D of[-3,-1,1,3])for(let et of[-1,1]){let R=new Bt(new Pn(.008,12),Gt);R.rotation.x=-Math.PI/2,R.position.set(D*3.569/8,o+.0015,et*(l-Tc/2)),t.add(R)}let Yt={green:{cloth:null,rail:1531951,base:"#1d6b34"},red:{cloth:null,rail:5902358,base:"#6a121a"},blue:{cloth:null,rail:1788566,base:"#1f56b0"}};return Yt.green.cloth=n.material.map,{group:t,cloth:n,surfaceY:0,ballY:.02625,setFelt:D=>{let et=Yt[D]||Yt.green;et.cloth||(et.cloth=Pu(e,et.base)),n.material.map=et.cloth,n.material.needsUpdate=!0,h.color.setHex(et.rail)}}}function Lu(s,t){s.background=new pe(790292);let e=Xy();e.repeat.set(2*Ye.x/4,2*Ye.z/4),e.anisotropy=8;let n=new Bt(new oe(2*Ye.x,2*Ye.z),new Et({map:e,roughness:.72,metalness:0}));n.rotation.x=-Math.PI/2,n.position.y=-.86,n.receiveShadow=!0,s.add(n),s.add(new Ti(14674175,3107644,.45));let i=1.62,r=new Et({color:936486,roughness:.5,metalness:.2,side:je}),o=new we({color:16773586}),a=new we({color:1118481}),l=h=>(h.layers.set(1),s.add(h),h);for(let h of[-1.1,0,1.1]){let c=new $s(16774368,11,6,Math.PI/3.4,.6,1.6);c.position.set(h,i-.05,0),c.target.position.set(h,0,0),c.castShadow=t==="high"&&h===0,c.castShadow&&(c.shadow.mapSize.set(2048,2048),c.shadow.bias=-4e-4,c.shadow.radius=3),s.add(c,c.target),l(new Bt(new kt(.9,.012,.5),r)).position.set(h,i+.04,0);for(let[f,m,y,g]of[[0,1,.9,.01],[0,-1,.9,.01],[1,0,.01,.5],[-1,0,.01,.5]])l(new Bt(new kt(y,.09,g),r)).position.set(h+f*.45,i,m*.25);let d=l(new Bt(new oe(.86,.46),o));d.rotation.x=Math.PI/2,d.position.set(h,i+.03,0);for(let f of[-.35,.35]){let m=i+.046;l(new Bt(new ge(.003,.003,Ye.ceil-m,6),a)).position.set(h+f,(m+Ye.ceil)/2,0)}}if(t==="high"){let h=new Lo(16777215,.45);h.position.set(.2,3,.15),h.castShadow=!0,h.shadow.mapSize.set(2048,2048);let c=2.1;Object.assign(h.shadow.camera,{left:-c,right:c,top:c,bottom:-c,near:1,far:5}),h.shadow.bias=-3e-4,s.add(h)}}var Wn=Ye.floor,Xo=Ye.x,Px=Ye.z,as={desk:{x:Xo-.42,z:-1.4,top:Wn+.78},speakers:[{x:Xo-.45,z:-2.62},{x:Xo-.45,z:-.18}],radio:{x:-Xo+.27,z:.5,top:Wn+.83}},$o=(s,t)=>{let e=document.createElement("canvas");e.width=s,e.height=t;let n=new be(e);return n.colorSpace=de,n.anisotropy=8,{c:e,g:e.getContext("2d"),t:n}};function ku(s){let t=new Et({color:5910294,roughness:.5}),e=new Et({color:1776929,roughness:.55,metalness:.3}),n=new Et({color:789518,roughness:.8}),i=new Et({color:10133672,roughness:.35,metalness:.8}),r=new Et({color:11569724,metalness:.85,roughness:.35}),o=(x,A,q,k,W,G=s)=>{let O=new Bt(x,A);return O.position.set(q,k,W),O.castShadow=!0,O.receiveShadow=!0,G.add(O),O},a=as.desk;o(new kt(.62,.04,1.35),t,a.x,a.top-.02,a.z);for(let x of[-1,1])for(let A of[-1,1])o(new kt(.04,a.top-Wn-.04,.04),t,a.x+x*.27,Wn+(a.top-Wn-.04)/2,a.z+A*.62);o(new kt(.5,.02,1.2),t,a.x,Wn+.18,a.z);let l=new ce;l.position.set(a.x-.02,a.top+.035,a.z),l.rotation.z=.12,s.add(l),o(new kt(.44,.06,.92),e,0,0,0,l);let h=new mn().setFromRotationMatrix(new Ie().makeBasis(new I(0,0,1),new I(1,0,0),new I(0,1,0))),c=$o(1024,512),u=o(new oe(.92,.44),new Et({map:c.t,roughness:.6,metalness:.2}),0,.0305,0,l);u.quaternion.copy(h),u.castShadow=!1;let d=["vol","bass","treble","bal"],f=[-.27,-.09,.09,.27],m={};d.forEach((x,A)=>{o(new kt(.26,.004,.012),n,.02,.032,f[A],l);let q=o(new kt(.028,.026,.05),new Et({color:A===0?15263976:2894896,roughness:.4}),.02,.045,f[A],l);m[x]=q});for(let x=0;x<6;x++){let A=o(new ge(.014,.016,.02,20),x%3===0?r:i,.17,.042,-.36+x*.144,l);A.castShadow=!1}let y=[[],[]],g=[3066944,3066944,3066944,3066944,3066944,15844367,15844367,15158332];for(let x=0;x<2;x++)for(let A=0;A<8;A++){let q=new Et({color:1118481,emissive:g[A],emissiveIntensity:.05,roughness:.4}),k=o(new kt(.014,.008,.02),q,-.12+A*.026,.034,-.41+x*.03,l);k.castShadow=!1,y[x].push(q)}let p=$o(512,96),E=o(new oe(.3,.056),new we({map:p.t}),.17,.0325,.27,l);E.quaternion.copy(h),E.castShadow=!1;let v=[];as.speakers.forEach(x=>{let A=new ce;A.position.set(x.x,Wn,x.z),A.lookAt(0,Wn,0),s.add(A),o(new ge(.16,.2,.03,24),i,0,.015,0,A),o(new ge(.02,.02,.9,12),i,0,.47,0,A),o(new kt(.2,.03,.2),i,0,.93,0,A),o(new kt(.32,.52,.3),t,0,1.2,0,A),o(new kt(.3,.5,.005),n,0,1.2,.151,A);let q=(k,W)=>{let G=o(new jn(k,.008,8,32),i,0,W,.156,A);G.castShadow=!1;let O=o(new Pn(k,32),new Et({color:2236966,roughness:.9}),0,W,.155,A);O.castShadow=!1;let K=o(new Be(k*.28,16,8,0,Math.PI*2,0,Math.PI/2),new Et({color:3355448,roughness:.6}),0,W,.156,A);return K.rotation.x=Math.PI/2,K.castShadow=!1,{cone:O,dust:K}};v.push({woofer:q(.11,1.12),tweeter:q(.04,1.36)})});let _=as.radio,V=new ce;V.position.set(_.x,_.top,_.z),V.rotation.y=Math.PI/2,s.add(V),o(new kt(.42,.22,.17),t,0,.11,0,V),o(new kt(.44,.02,.18),new Et({color:3808524,roughness:.45}),0,.225,0,V);let L=$o(256,160);{let x=L.g;x.fillStyle="#d9c9a3",x.fillRect(0,0,256,160),x.strokeStyle="#6b5532",x.lineWidth=3;for(let A=8;A<256;A+=10)x.beginPath(),x.moveTo(A,0),x.lineTo(A,160),x.stroke();L.t.needsUpdate=!0}o(new oe(.2,.15),new Et({map:L.t,roughness:.9}),-.09,.11,.0855,V).castShadow=!1;let U=$o(256,128),z=new Et({map:U.t,emissive:16777215,emissiveMap:U.t,emissiveIntensity:.15,roughness:.5});o(new oe(.15,.075),z,.11,.14,.0855,V).castShadow=!1;for(let x of[.06,.16]){let A=o(new ge(.018,.02,.02,20),r,x,.06,.095,V);A.rotation.x=Math.PI/2}let T=(x,A)=>{let q=p.g;q.fillStyle="#071a10",q.fillRect(0,0,512,96),q.fillStyle=A?"#6fff9f":"#2f6b45",q.font='bold 44px "Courier New", monospace',q.textBaseline="middle",q.fillText((A?"":"VYP  ")+(x||"R\xC1DIO").slice(0,18),16,50),p.t.needsUpdate=!0,q=U.g,q.fillStyle=A?"#f3d9a0":"#bfae86",q.fillRect(0,0,256,128),q.strokeStyle="#5a4a2a",q.lineWidth=2;for(let W=16;W<244;W+=12)q.beginPath(),q.moveTo(W,18),q.lineTo(W,W%48===16?40:30),q.stroke();q.fillStyle="#3a2a12",q.font="bold 26px Georgia, serif",q.textAlign="center",q.fillText((x||"R\xE1dio").slice(0,16),128,86),q.fillStyle="#b3121f";let k=16+(x||"").length*37%220;q.fillRect(k,12,3,40),U.t.needsUpdate=!0,z.emissiveIntensity=A?.55:.12};{let x=c.g;x.fillStyle="#26282d",x.fillRect(0,0,1024,512),x.fillStyle="#cfd3da",x.font="bold 34px Arial, sans-serif",x.textAlign="center",["HLAS","BASY","V\xDD\u0160KY","BAL"].forEach((A,q)=>{let k=(f[q]+.46)*1113.0434782608695;x.fillText(A,k,488);for(let W=0;W<=10;W++)x.fillRect(k+22,120+W*30,W%5?10:18,3)}),x.font="bold 26px Arial, sans-serif",x.textAlign="left",x.fillText("MY SNOOKER MIX",24,44),c.t.needsUpdate=!0}return T("",!1),{view:{pos:new I(a.x-1.95,Wn+1.6,a.z+.55),look:new I(a.x,a.top+.2,a.z+.5)},setControls(x,A,q){d.forEach(k=>{m[k].position.x=-.1+(x[k]??.5)*.24}),T(A,q)},update(x,A){[x,A].forEach((q,k)=>{let W=Math.round(q*8);y[k].forEach((O,K)=>{O.emissiveIntensity=K<W?2.2:.05});let G=v[k];if(G){let O=1+q*.06;G.woofer.dust.scale.set(1,1,O*O),G.woofer.cone.position.z=.155+q*.004}})}}}var qo=class{constructor(t,e){this.stations=(t||[]).filter(n=>n&&n.stream),this.ctxGet=e,this.index=-1,this.on=!1,this.mode="",this.params={vol:.7,bass:.5,treble:.5,bal:.5},this.status="",this.onChange=null,this._graph=null,this._data=null}get station(){return this.stations[this.index]||null}_emit(t){this.onChange&&this.onChange(t)}_build(t){if(this._graph)return this._graph;let e=new Audio;e.crossOrigin="anonymous",e.preload="none";let n=t.createMediaElementSource(e),i=t.createBiquadFilter();i.type="lowshelf",i.frequency.value=220;let r=t.createBiquadFilter();r.type="highshelf",r.frequency.value=3200;let o=t.createGain();n.connect(i).connect(r).connect(o);let a=t.createChannelSplitter(2);o.connect(a);let l=t.createGain();l.connect(t.destination);let h=[0,1].map(c=>{let u=t.createGain(),d=t.createAnalyser();d.fftSize=512;let f=t.createPanner();f.panningModel="HRTF",f.distanceModel="inverse",f.refDistance=1.2,f.rolloffFactor=.6;let m=this._spk&&this._spk[c]||{x:as.speakers[c].x,y:Wn+1.2,z:as.speakers[c].z};return f.positionX.value=m.x,f.positionY.value=m.y,f.positionZ.value=m.z,a.connect(u,c),u.connect(d),u.connect(f),f.connect(l),{g:u,an:d,p:f}});return this._graph={el:e,src:n,bass:i,treble:r,gain:o,sides:h,out:l},this._data=new Uint8Array(256),this._graph}_apply(){let t=this.params,e=this._graph;e&&this.mode==="space"&&(e.gain.gain.value=t.vol*t.vol*1.6,e.bass.gain.value=(t.bass-.5)*24,e.treble.gain.value=(t.treble-.5)*24,e.sides[0].g.gain.value=Math.min(1,(1-t.bal)*2),e.sides[1].g.gain.value=Math.min(1,t.bal*2)),this._plain&&(this._plain.volume=Math.min(1,t.vol*t.vol))}set(t,e){this.params[t]=Math.max(0,Math.min(1,e)),this._apply(),this._emit("param")}play(t=this.index<0?0:this.index){if(!this.stations.length){this.status="V My Player nie s\xFA \u017Eiadne r\xE1di\xE1.",this._emit();return}this.index=(t%this.stations.length+this.stations.length)%this.stations.length;let e=this.station;this.stopAudio(),this.on=!0,this.status="Lad\xEDm stanicu\u2026";let n=this.ctxGet();if(!n){this._playPlain(e);return}let i=this._build(n);this.mode="space",this._apply();let r=this._token=Math.random();i.el.onerror=()=>{this._token===r&&this.on&&this._playPlain(e)},i.el.onplaying=()=>{this._token===r&&(this.status="Hr\xE1 priestorovo z reproduktorov.",this._emit())},i.el.src=e.stream,i.el.play().catch(()=>null),this._tuneTimeout(r),this._emit()}_playPlain(t){this._graph&&(this._graph.el.removeAttribute("src"),this._graph.el.load()),this.mode="plain";let e=new Audio;this._plain=e;let n=this._token=Math.random();e.onerror=()=>{this._token===n&&(this.status="Stanica teraz nehr\xE1. Sk\xFAs \u010Fal\u0161iu (\u0161\xEDpka vpravo).",this.mode="",this._emit())},e.onplaying=()=>{this._token===n&&(this.status="Hr\xE1 (t\xE1to stanica nedovol\xED priestorov\xFD zvuk a ekvaliz\xE9r).",this._emit())},e.src=t.stream,this._apply(),e.play().catch(()=>null),this._tuneTimeout(n),this._emit()}_tuneTimeout(t){setTimeout(()=>{this._token===t&&this.on&&/Ladím/.test(this.status)&&(this.status="Stanica neodpoved\xE1. Sk\xFAs \u010Fal\u0161iu (\u0161\xEDpka vpravo).",this._emit())},12e3)}stopAudio(){this._token=0,this._graph&&(this._graph.el.pause(),this._graph.el.removeAttribute("src"),this._graph.el.load()),this._plain&&(this._plain.pause(),this._plain.removeAttribute("src"),this._plain=null),this.mode=""}stop(){this.stopAudio(),this.on=!1,this.status="R\xE1dio je vypnut\xE9.",this._emit()}toggle(){this.on?this.stop():this.play()}next(t){this.play(this.index+t)}setSpeakers(t){this._spk=t||null;let e=this._graph;e&&e.sides.forEach((n,i)=>{let r=t&&t[i]||{x:as.speakers[i].x,y:Wn+1.2,z:as.speakers[i].z};n.p.positionX.value=r.x,n.p.positionY.value=r.y,n.p.positionZ.value=r.z})}update(t){let e=this._graph;if(!e)return[this.on&&this.mode==="plain"?.35+Math.random()*.25:0,this.on&&this.mode==="plain"?.35+Math.random()*.25:0];let i=e.out.context.listener,r=t.position,o=new I;return t.getWorldDirection(o),i.positionX?(i.positionX.value=r.x,i.positionY.value=r.y,i.positionZ.value=r.z,i.forwardX.value=o.x,i.forwardY.value=o.y,i.forwardZ.value=o.z,i.upX.value=0,i.upY.value=1,i.upZ.value=0):i.setPosition&&(i.setPosition(r.x,r.y,r.z),i.setOrientation(o.x,o.y,o.z,0,1,0)),this.mode==="plain"?[.3+Math.random()*.3,.3+Math.random()*.3]:this.mode!=="space"||!this.on?[0,0]:e.sides.map(a=>{a.an.getByteTimeDomainData(this._data);let l=0;for(let h=0;h<this._data.length;h++)l=Math.max(l,Math.abs(this._data[h]-128));return Math.min(1,l/100)})}};var Qe=-.86,Ac=(s,t,e)=>{let n=document.createElement("canvas");n.width=s,n.height=t;let i=n.getContext("2d");e&&e(i,s,t);let r=new be(n);return r.colorSpace=de,r.anisotropy=8,{c:n,g:i,t:r}};function Du(s,t){let e=new ce;e.visible=!1,s.add(e);let n=t==="high",i=(G,O,K,$,ht,yt=e)=>{let wt=new Bt(G,O);return wt.position.set(K,$,ht),wt.castShadow=n,wt.receiveShadow=!0,yt.add(wt),wt},r=new Et({color:724242,roughness:.35,metalness:.4}),o=new Et({color:9049634,roughness:.6}),a=new Et({color:1382431,roughness:.8}),l=new Et({color:9080985,metalness:.8,roughness:.35}),h=i(new oe(40,30),new Et({color:460811,roughness:.25,metalness:.5}),0,Qe,0);h.rotation.x=-Math.PI/2,h.castShadow=!1;let c=i(new oe(7.4,5.2),new Et({color:1320010,roughness:.9}),0,Qe+.002,0);c.rotation.x=-Math.PI/2,c.castShadow=!1;let u=["MY SNOOKER","HEDLAJNER","LIGA","MY SNOOKER","HEDLAJNER.SK","LIGA"],d=(G,O)=>Ac(1024,128,(K,$,ht)=>{let yt=K.createLinearGradient(0,0,$,0);yt.addColorStop(0,O%2?"#0d2a6b":"#111"),yt.addColorStop(1,O%2?"#1747b5":"#2a2a2a"),K.fillStyle=yt,K.fillRect(0,0,$,ht),K.fillStyle=O%2?"#ffffff":"#FACC15",K.font="bold 78px Arial, sans-serif",K.textAlign="center",K.textBaseline="middle",K.fillText(G,$/2,ht/2+4)}).t,f=4.2,m=3.1;[[0,m,0,2*f],[0,-m,Math.PI,2*f],[f,0,Math.PI/2,2*m],[-f,0,-Math.PI/2,2*m]].forEach(([G,O,K,$],ht)=>{let yt=new ce;yt.position.set(G,Qe,O),yt.rotation.y=K,e.add(yt),i(new kt($,.42,.06),r,0,.21,0,yt);let wt=i(new oe($-.1,.3),new we({map:d(u[ht],ht)}),0,.22,-.032,yt);wt.rotation.y=Math.PI,wt.castShadow=!1});for(let G of[-1,1])for(let O=0;O<7;O++){let K=G*(m+.9+O*.75),$=Qe+.25+O*.42;i(new kt(10,.42+O*.42,.75),a,0,Qe+(.42+O*.42)/2,K);for(let ht=-12;ht<=12;ht++){let yt=i(new kt(.34,.07,.32),o,ht*.4,$+.24,K),wt=i(new kt(.34,.32,.05),o,ht*.4,$+.42,K+G*.16);yt.castShadow=wt.castShadow=!1}}for(let G of[-1,1])for(let O=0;O<4;O++)i(new kt(.75,.42+O*.42,7),a,G*(f+1+O*.75),Qe+(.42+O*.42)/2,0);let g=Qe+5.2;for(let G of[-2.4,2.4]){i(new kt(9,.12,.12),l,0,g,G);for(let O of[-3.5,-1.2,1.2,3.5]){i(new ge(.12,.16,.3,16),l,O,g-.18,G);let K=new Bt(new Vs(1.1,4.6,24,1,!0),new we({color:12571903,transparent:!0,opacity:.035,depthWrite:!1,side:je}));K.position.set(O*.8,g-2.45,G*.6),K.lookAt(O*.8,g+1,G*.6),K.rotation.x+=Math.PI/2,K.castShadow=!1,e.add(K)}}let p=new Ti(7109288,460811,.35);e.add(p);for(let G of[-4.5,4.5]){let O=new $s(14674175,9,14,Math.PI/5,.7,1.4);O.position.set(0,g,G),O.target.position.set(0,Qe+1.5,G*1.3),e.add(O,O.target)}let E=Ac(1024,512),v=i(new oe(3.2,1.6),new we({map:E.t}),-(f+3.6),Qe+3.6,0);v.rotation.y=Math.PI/2,v.castShadow=!1,i(new kt(.12,1.75,3.35),r,-(f+3.68),Qe+3.6,0);let _=Ac(1024,512),V=i(new oe(3.2,1.6),new we({map:_.t}),f+3.6,Qe+3.6,0);V.rotation.y=-Math.PI/2,V.castShadow=!1,i(new kt(.12,1.75,3.35),r,f+3.68,Qe+3.6,0);let L=new Et({color:2757896,roughness:.4});i(new kt(.9,.04,.45),L,2.6,Qe+.74,m-.55);for(let G of[-1,1])i(new kt(.04,.72,.4),L,2.6+G*.42,Qe+.36,m-.55);let U=new Et({color:15267071,transparent:!0,opacity:.25,roughness:.05,depthWrite:!1});for(let G of[2.4,2.8])i(new ge(.035,.03,.12,20,1,!0),U,G,Qe+.82,m-.55).castShadow=!1;let z=new Et({color:1710623,roughness:.5});for(let G of[-2.6,3.3]){i(new kt(.5,.08,.5),z,G,Qe+.48,m-.55),i(new kt(.5,.6,.06),z,G,Qe+.82,m-.3);for(let O of[-.2,.2])i(new ge(.02,.02,.46,8),l,G+O,Qe+.23,m-.55)}let T=[],x=[14726286,13078118,9263934],A=[3108822,12597547,2792847],q=[3810324,1118481,10119722];[-1.6,.2,1.9].forEach((G,O)=>{let K=m+.9,$=Qe+.25+.24,ht=new ce;ht.position.set(G,$,K),ht.rotation.y=Math.PI,e.add(ht);let yt=new Et({color:A[O],roughness:.75}),wt=new Et({color:x[O],roughness:.7}),Ut=new Et({color:2303534,roughness:.8}),At=new ce;ht.add(At),i(new Hs(.15,.32,6,14),yt,0,.42,0,At),i(new kt(.3,.12,.36),Ut,0,.08,.12,At);for(let gt of[-.08,.08])i(new ge(.05,.05,.42,10),Ut,gt,-.12,.3,At);let Z=new ce;Z.position.set(0,.84,0),At.add(Z),i(new Be(.11,20,16),wt,0,0,0,Z);let ct=i(new Be(.115,20,12,0,Math.PI*2,0,Math.PI/2),new Et({color:q[O],roughness:.9}),0,.01,-.01,Z);ct.rotation.x=-.25;for(let gt of[-.04,.04])i(new Be(.014,8,8),new we({color:1118481}),gt,.02,.1,Z).castShadow=!1;let Dt=[-1,1].map(gt=>{let Lt=new ce;Lt.position.set(gt*.19,.66,0),At.add(Lt),i(new Hs(.045,.22,4,10),yt,0,-.14,0,Lt);let Gt=new ce;return Gt.position.set(0,-.28,0),Lt.add(Gt),i(new Hs(.04,.2,4,10),wt,0,-.12,0,Gt),Lt.rotation.x=-.35,Gt.rotation.x=-.9,{sh:Lt,el:Gt,sx:gt}});T.push({f:ht,body:At,head:Z,arms:Dt,baseY:$,act:"",t:0,phase:O*1.7})});let k=G=>{for(let O of[E,_]){let K=O.g,$=1024;K.fillStyle="#050a1a",K.fillRect(0,0,$,512),K.fillStyle="#1747b5",K.fillRect(0,0,$,70),K.fillStyle="#fff",K.font="bold 40px Arial, sans-serif",K.textAlign="center",K.fillText(G&&G.title||"MY SNOOKER LIGA",$/2,50),G&&G.names?(K.font="bold 52px Arial, sans-serif",K.textAlign="left",G.names.forEach((ht,yt)=>{let wt=170+yt*110;K.fillStyle=G.turn===yt?"#FACC15":"#e8ecf3",K.fillText((G.turn===yt?"\u25B6 ":"   ")+String(ht).slice(0,18),40,wt),K.textAlign="right",K.font="bold 84px Arial, sans-serif",K.fillText(String(G.scores[yt]),$-40,wt+10),K.font="bold 52px Arial, sans-serif",K.textAlign="left"}),K.fillStyle="#9fb3d9",K.font="34px Arial, sans-serif",K.fillText(`S\xE9ria ${G.brk}   \xB7   Hr\xE1 sa na ${G.on}`,40,420)):(K.fillStyle="#e8ecf3",K.font="bold 48px Arial, sans-serif",K.textAlign="center",K.fillText(G&&G.idle||"Vyzvi hr\xE1\u010Da z ligy",$/2,260)),K.fillStyle="#6f84b3",K.font="28px Arial, sans-serif",K.textAlign="center",K.fillText(G&&G.footer||"",$/2,490),O.t.needsUpdate=!0}};k(null);let W=new I;return{root:e,react(G){T.forEach((O,K)=>{G==="stand"&&K!==1?O.act="clap":O.act=G,O.t=G==="stand"?3.2:1.8})},setScreen:k,update(G,O){let K=performance.now()/1e3;for(let $ of T){if($.t=Math.max(0,$.t-G),$.t===0&&($.act=""),O&&O.on){$.f.getWorldPosition(W);let ct=Math.atan2(O.p.x-W.x,-(O.p.z-W.z));$.head.rotation.y+=(Math.max(-1,Math.min(1,-ct))-$.head.rotation.y)*Math.min(1,G*4)}let[ht,yt]=$.arms,wt=-.35,Ut=-.9,At=0,Z=0;if($.act==="clap"||$.act==="stand"){let ct=Math.sin((K+$.phase)*18)*.5+.5;wt=-1.25,Ut=-.4,At=.35-ct*.3,$.act==="stand"&&(Z=Math.min(1,(3.2-$.t)*3)*Math.min(1,$.t*2))}else $.act==="facepalm"?(wt=-2.4,Ut=-1.9,At=.25):wt=-.35+Math.sin(K*.7+$.phase)*.03;for(let ct of[ht,yt])ct.sh.rotation.x+=(wt-ct.sh.rotation.x)*Math.min(1,G*10),ct.el.rotation.x+=(Ut-ct.el.rotation.x)*Math.min(1,G*10),ct.sh.rotation.z+=(ct.sx*At-ct.sh.rotation.z)*Math.min(1,G*10);$.body.position.y=Z*.25}}}}var cn=40,Se=-.86,hn=3.2,ke=2.6,Ii=3,Rc=(s,t,e,n,i=1)=>{let o=document.createElement("canvas");o.width=1024,o.height=1024;let a=o.getContext("2d"),l=i*9301+49297,h=()=>(l=(l*9301+49297)%233280)/233280,c=1024/e;for(let d=0;d<e;d++){let f=.85+h()*.3,m=new pe(s).multiplyScalar(f);a.fillStyle="#"+m.getHexString(),n?a.fillRect(d*c,0,c,1024):a.fillRect(0,d*c,1024,c),a.strokeStyle=t;for(let y=0;y<26;y++){a.globalAlpha=.06+h()*.14,a.lineWidth=.6+h()*2.2;let g=d*c+h()*c,p=2+h()*6,E=.004+h()*.01;a.beginPath();for(let v=0;v<=1024;v+=16){let _=g+Math.sin(v*E+y)*p;n?v?a.lineTo(_,v):a.moveTo(_,v):v?a.lineTo(v,_):a.moveTo(v,_)}a.stroke()}a.globalAlpha=.55,a.fillStyle=t,n?a.fillRect(d*c,0,2,1024):(a.fillRect(0,d*c,1024,2),a.fillRect(d*.37%1*1024,d*c,2,c)),a.globalAlpha=1}let u=new be(o);return u.colorSpace=de,u.wrapS=u.wrapT=Bn,u.anisotropy=8,u},di=(s,t)=>{let e=document.createElement("canvas");e.width=s,e.height=t;let n=new be(e);return n.colorSpace=de,n.anisotropy=8,{c:e,g:e.getContext("2d"),t:n}},$y=[[[-168,66],[-140,70],[-95,72],[-80,64],[-62,58],[-55,50],[-66,44],[-76,35],[-81,25],[-97,26],[-105,20],[-92,15],[-83,9],[-79,8],[-87,14],[-110,23],[-117,32],[-124,40],[-125,49],[-135,58],[-152,60],[-165,60]],[[-55,60],[-44,60],[-20,70],[-18,80],[-40,83],[-60,80],[-70,76],[-58,70]],[[-80,9],[-62,11],[-50,0],[-35,-6],[-39,-15],[-48,-26],[-58,-38],[-65,-55],[-72,-50],[-73,-38],[-71,-18],[-81,-5]],[[-10,36],[-9,43],[-2,44],[-5,48],[3,51],[8,54],[5,58],[10,63],[20,70],[30,70],[40,66],[45,60],[40,48],[30,46],[28,41],[23,38],[20,40],[15,38],[12,44],[7,44],[3,43],[-2,37]],[[-6,50],[2,51],[0,54],[-3,59],[-7,57],[-5,54]],[[-17,21],[-10,30],[-5,36],[10,37],[20,32],[32,31],[35,24],[43,12],[51,12],[42,-1],[40,-15],[35,-25],[20,-35],[16,-28],[12,-17],[9,-1],[5,4],[-8,4],[-16,12]],[[28,41],[40,48],[45,60],[40,66],[60,70],[80,73],[105,78],[140,72],[170,66],[160,58],[142,52],[135,43],[122,40],[121,30],[110,21],[106,10],[100,13],[98,8],[92,22],[80,15],[72,20],[66,25],[57,26],[50,30],[44,40],[36,36]],[[35,30],[50,30],[57,22],[52,16],[43,13],[38,20]],[[114,-22],[122,-18],[130,-12],[137,-12],[142,-11],[146,-19],[153,-26],[150,-37],[140,-38],[131,-32],[116,-35],[114,-28]],[[130,32],[135,34],[141,38],[142,44],[139,40],[134,35]]];function Uu(s){let t=new ce;t.position.set(cn,0,0),s.add(t);let e=(N,ft,H,Y,it,xt=t)=>{let Nt=new Bt(N,ft);return Nt.position.set(H,Y,it),Nt.castShadow=!1,Nt.receiveShadow=!0,xt.add(Nt),Nt},n=new Et({color:2831682,roughness:.9}),i=new Et({color:3875860,roughness:.55}),r=new Et({color:5911576,roughness:.45}),o=new Et({color:1381914,roughness:.5,metalness:.3}),a=new Et({color:11569724,metalness:.85,roughness:.35}),l=new Et({color:15777856,metalness:.6,roughness:.28,emissive:3811328,emissiveIntensity:.5}),h=Rc("#7a4a26","#2a160a",8,!1,3);h.repeat.set(2.2,3);let c=e(new oe(2*hn,2*ke),new Et({map:h,roughness:.55}),0,Se,0);c.rotation.x=-Math.PI/2;let u=e(new oe(3.4,2.4),new Et({color:6034976,roughness:.95}),0,Se+.003,.2);u.rotation.x=-Math.PI/2;let d=e(new oe(2*hn,2*ke),new Et({color:14210252,roughness:.95}),0,Se+Ii,0);d.rotation.x=Math.PI/2;let f=[[0,-ke,0,2*hn],[0,ke,Math.PI,2*hn],[-hn,0,Math.PI/2,2*ke],[hn,0,-Math.PI/2,2*ke]];for(let[N,ft,H,Y]of f){let it=new ce;it.position.set(N,Se,ft),it.rotation.y=H,t.add(it);let xt=Rc("#8a5a32","#3a210f",10,!0,7+Y);xt.repeat.set(Y/1.6,1),e(new oe(Y,Ii),new Et({map:xt,roughness:.6}),0,Ii/2,0,it),e(new kt(Y,1,.03),i,0,.5,.015,it),e(new kt(Y,.05,.05),r,0,1.02,.03,it)}t.add(new Ti(16773596,2759184,.55));let m=new Vn(16773336,9,9,1.6);m.position.set(0,Se+Ii-.3,0),t.add(m),e(new ge(.35,.35,.04,32),new we({color:16774884}),0,Se+Ii-.03,0);let y=1.2,g=Se+.76;e(new kt(1.8,.05,.85),r,0,g-.025,y);for(let N of[-1,1])e(new kt(.45,.7,.8),i,N*.65,Se+.36,y);e(new kt(1.4,.003,.6),new Et({color:1915430,roughness:.9}),0,g+.002,y),e(new ge(.07,.09,.02,24),a,.68,g+.01,y-.2),e(new ge(.01,.01,.36,10),a,.68,g+.19,y-.2);let p=e(new ge(.05,.13,.12,24,1,!0),new Et({color:936486,roughness:.5,side:je}),.68,g+.4,y-.25);p.rotation.x=.35;let E=new Vn(16769712,2.5,2.5,2);E.position.set(.68,g+.3,y-.3),t.add(E);let v=di(512,320);e(new kt(.36,.015,.25),o,-.15,g+.008,y-.1);let _=new ce;_.position.set(-.15,g+.015,y-.225),_.rotation.x=-.32,t.add(_),e(new kt(.36,.24,.01),o,0,.12,0,_);let V=e(new oe(.33,.21),new we({map:v.t}),0,.12,.006,_),L=di(400,300),U=new ce;U.position.set(-.6,g,y-.25),U.rotation.y=.5,t.add(U);let z=e(new oe(.2,.15),new Et({map:L.t,roughness:.8,side:je}),0,.075,0,U);z.rotation.x=-.35,z.position.z=.02,e(new ge(.004,.004,.2,8),a,0,.145,0,U).rotation.z=Math.PI/2;let T=di(2048,900),x=e(new oe(5.6,2),new Et({map:T.t,roughness:.6,emissive:16777215,emissiveMap:T.t,emissiveIntensity:.15}),0,Se+1.6,-ke+.09);e(new kt(5.75,2.14,.04),r,0,Se+1.6,-ke+.065);let A={w:3.8,h:1.9,y:Se+1.85},q=di(2048,1024),k=e(new oe(A.w,A.h),new Et({map:q.t,roughness:.75}),-hn+.09,A.y,0);k.rotation.y=Math.PI/2,e(new kt(.04,A.h+.1,A.w+.1),r,-hn+.065,A.y,0);let W=(N,ft)=>{let H=q.g;H.fillStyle="#16324f",H.fillRect(0,0,2048,1024),H.strokeStyle="rgba(255,255,255,0.07)",H.lineWidth=2;for(let it=-180;it<=180;it+=30){let xt=(it+180)/360*2048;H.beginPath(),H.moveTo(xt,0),H.lineTo(xt,1024),H.stroke()}for(let it=-60;it<=80;it+=30){let xt=(90-it)/180*1024;H.beginPath(),H.moveTo(0,xt),H.lineTo(2048,xt),H.stroke()}H.fillStyle="#c9b98a",H.strokeStyle="#8a7a4a",H.lineWidth=3;for(let it of $y)H.beginPath(),it.forEach(([xt,Nt],Mt)=>{let Vt=(xt+180)/360*2048,jt=(90-Nt)/180*1024;Mt?H.lineTo(Vt,jt):H.moveTo(Vt,jt)}),H.closePath(),H.fill(),H.stroke();H.fillStyle="#f2d48a",H.font="bold 48px Georgia, serif",H.textAlign="left",H.fillText("Hr\xE1\u010Di ligy vo svete",40,70);let Y=["#e8b830","#c9cdd3","#c8804a","#2ecc71"];for(let it of N||[]){let xt=(it.lon+180)/360*2048,Nt=(90-it.lat)/180*1024;H.fillStyle="rgba(0,0,0,0.4)",H.beginPath(),H.arc(xt+3,Nt+4,16,0,Math.PI*2),H.fill(),H.fillStyle=Y[(it.league||4)-1],H.beginPath(),H.arc(xt,Nt,15,0,Math.PI*2),H.fill(),H.strokeStyle=it.id===ft?"#ffffff":"#111",H.lineWidth=it.id===ft?6:3,H.stroke(),H.fillStyle="#fff",H.font="bold 26px Arial, sans-serif",H.fillText(String(it.name).slice(0,14),xt+20,Nt+9)}q.t.needsUpdate=!0},G=new ce;G.position.set(hn-.06,Se,-.2),G.rotation.y=-Math.PI/2,t.add(G),e(new kt(2.3,1.85,.03),i,0,1.08,0,G),e(new kt(2.35,.06,.16),r,0,.12,.06,G),e(new kt(2.35,.05,.12),r,0,1.35,.06,G);let O=[],K=new Et({color:8176882,emissive:1792646,emissiveIntensity:.8,metalness:.4,roughness:.3}),$=(N,ft,H)=>{for(let Y of O)G.remove(Y);O=[],N.forEach((Y,it)=>{let xt=new ce,Nt=(it-(N.length-1)/2)*.21,Mt=ft.includes(Y.id);if(xt.position.set(Nt,.16+Y.len,.08+(Mt?.12:0)),xt.rotation.x=Math.PI,xt.add(rs(Y,!0)),G.add(xt),O.push(xt),Mt){let Vt=new Bt(new jn(Y.id===H?.055:.04,.008,8,20),Y.id===H?K:l);Vt.position.set(Nt,.3,.22),G.add(Vt),O.push(Vt)}})};e(new kt(.4,2,1.2),i,hn-.22,Se+1,1.65);for(let N=0;N<4;N++)e(new kt(.38,.03,1.15),r,hn-.22,Se+.4+N*.45,1.65);let ht=new ce;t.add(ht);let yt=[[0,0],[.05,0],[.05,.02],[.02,.03],[.012,.09],[.04,.12],[.06,.2],[.055,.21],[.03,.14],[0,.13]].map(([N,ft])=>new Rt(N,ft)),wt=N=>{ht.clear(),(N||[]).slice(0,4).forEach((ft,H)=>{let Y=new Bt(new Yi(yt,28),l);Y.position.set(hn-.22,Se+.84+H*.45,1.3+H%2*.3),ht.add(Y)})},Ut=-1.7,At=1.5,Z=2,ct=Se+.55+Z/2,Dt=di(1024,1365);{let N=Dt.g,ft=1024,H=1365,Y=N.createLinearGradient(0,0,0,H);Y.addColorStop(0,"#0b1a3a"),Y.addColorStop(.55,"#3a4f86"),Y.addColorStop(.72,"#e48a4a"),Y.addColorStop(.8,"#2a2030"),Y.addColorStop(1,"#141018"),N.fillStyle=Y,N.fillRect(0,0,ft,H),N.fillStyle="#ffffff";for(let it=0;it<90;it++)N.globalAlpha=.3+it*37%70/100,N.fillRect(it*263%ft,it*151%600,2,2);N.globalAlpha=1;for(let it=0;it<26;it++){let xt=40+it*53%70,Nt=90+it*97%260,Mt=it*41%ft,Vt=1060-Nt;N.fillStyle="#120e18",N.fillRect(Mt,Vt,xt,Nt+300),N.fillStyle="#f6d58a";for(let jt=Vt+12;jt<1060;jt+=22)for(let zt=Mt+8;zt<Mt+xt-8;zt+=16)(zt*7+jt*3+it)%5<2&&(N.globalAlpha=.5+(zt+jt)%5/10,N.fillRect(zt,jt,6,9));N.globalAlpha=1}N.fillStyle="#1d1a26",N.beginPath(),N.ellipse(640,1010,260,70,0,Math.PI,0),N.fill();for(let it of[420,860]){N.fillStyle="#2a2630",N.fillRect(it-4,760,8,240);let xt=N.createRadialGradient(it,760,4,it,760,120);xt.addColorStop(0,"#ffffffee"),xt.addColorStop(.2,"#fff2c099"),xt.addColorStop(1,"#fff2c000"),N.fillStyle=xt,N.fillRect(it-120,640,240,240)}N.fillStyle="#7cc4f2",N.font="bold 34px Arial, sans-serif",N.textAlign="center",N.fillText("MY SNOOKER AR\xC9NA",640,990),Dt.t.needsUpdate=!0}let gt=e(new oe(At,Z),new we({map:Dt.t}),Ut,ct,ke-.06);gt.rotation.y=Math.PI;for(let[N,ft,H,Y]of[[At+.16,.08,Ut,ct+Z/2+.04],[At+.16,.08,Ut,ct-Z/2-.04],[.08,Z,Ut-At/2-.04,ct],[.08,Z,Ut+At/2+.04,ct]])e(new kt(N,ft,.12),r,H,Y,ke-.06);e(new kt(At+.3,.04,.26),r,Ut,ct-Z/2-.09,ke-.13);let Lt=new Et({color:12572927,transparent:!0,opacity:.18,roughness:.05,metalness:.2,depthWrite:!1}),Gt=[];for(let N of[-1,1]){let ft=new ce;ft.position.set(Ut+N*(At/2),ct,ke-.09),t.add(ft);let H=At/2,Y=-N*(H/2);e(new oe(H-.06,Z-.06),Lt,Y,0,0,ft).rotation.y=Math.PI;for(let[it,xt,Nt,Mt]of[[H,.05,Y,Z/2-.025],[H,.05,Y,-Z/2+.025],[.05,Z,-N*.025,0],[.05,Z,-N*(H-.025),0],[H,.03,Y,.2]])e(new kt(it,xt,.04),r,Nt,Mt,0,ft);e(new kt(.02,.12,.04),a,-N*(H-.06),0,-.04,ft),Gt.push({hinge:ft,side:N})}let Yt=0,ne=0,D=()=>(ne=ne?0:1,!!ne),et=N=>{Yt+=(ne-Yt)*Math.min(1,N*3);for(let ft of Gt)ft.hinge.rotation.y=ft.side*Yt*1.25},R=Rc("#5a3018","#1e0e05",4,!0,11),vt=e(new kt(1,2.1,.05),new Et({map:R,roughness:.5}),1.9,Se+1.05,ke-.03);vt.rotation.y=Math.PI,e(new kt(1.12,2.18,.03),r,1.9,Se+1.09,ke-.012),e(new Be(.035,16,12),a,1.55,Se+1,ke-.08);let pt=e(new Be(.06,16,12),new Et({color:2245666,emissive:0}),1.9,Se+2.32,ke-.06),Ct=di(512,128),bt=N=>{let ft=Ct.g,H=N==="wait";ft.fillStyle=H?"#6a4a08":"#123524",ft.fillRect(0,0,512,128),ft.fillStyle="#f2d48a",ft.textAlign="center",H?(ft.font="bold 40px Arial, sans-serif",ft.fillText("VYH\u013DAD\xC1VAM Z\xC1PAS",256,80)):(ft.font="bold 54px Georgia, serif",ft.fillText("\u0160TADI\xD3N",256,84)),Ct.t.needsUpdate=!0,pt.material.color.setHex(H?16760896:2245666),pt.material.emissive.setHex(H?16751104:0)};bt("");let Xt=di(256,256);{let N=Xt.g;N.fillStyle="#e8e4dc",N.fillRect(0,0,256,256),N.fillStyle="#9a958c";for(let ft=20;ft<240;ft+=14)for(let H=20;H<240;H+=14)Math.hypot(H-128,ft-128)<104&&(N.beginPath(),N.arc(H,ft,3.2,0,Math.PI*2),N.fill());Xt.t.needsUpdate=!0}let Ht=[];for(let N of[-1.3,1.3]){e(new ge(.2,.2,.02,32),new Et({color:14210252,roughness:.6}),N,Se+Ii-.01,.2);let ft=e(new Pn(.17,32),new Et({map:Xt.t,roughness:.8}),N,Se+Ii-.022,.2);ft.rotation.x=Math.PI/2,Ht.push({x:cn+N,y:Se+Ii-.05,z:.2})}let C=di(1024,700);{let N=C.g;N.fillStyle="#6b4424",N.fillRect(0,0,1024,700),N.fillStyle="#c9a26a",N.fillRect(24,24,976,652),N.fillStyle="#0f2a1c",N.fillRect(260,44,504,78),N.fillStyle="#f2d48a",N.textAlign="center",N.font="bold 50px Georgia, serif",N.fillText("KANCEL\xC1RIA",512,100);let ft=[["F1","t\xE1to n\xE1stenka"],["F2","t\xE1g\xE1 do ligov\xE9ho z\xE1pasu (4 kusy)"],["F3","poh\u013Ead na kalend\xE1r sez\xF3ny"],["F4","tabu\u013Ea v\xFDsledkov l\xEDg"],["F6","otvori\u0165 alebo zatvori\u0165 okno"],["F7","notebook Moja liga"],["F8","vizitka: registr\xE1cia, moje \xFAdaje"],["F9","vyh\u013Eada\u0165 z\xE1pas (aj dvere \u0160TADI\xD3N)"],["F10","mapa hr\xE1\u010Dov ligy"],["Ctrl","dr\u017E: vo\u013En\xE1 my\u0161 na klikanie"],["Esc","sp\xE4\u0165 za st\xF4l, potom do herne"]];N.textAlign="left",ft.forEach(([H,Y],it)=>{let xt=172+it*46;N.fillStyle="#2a1608",N.font="bold 34px Arial, sans-serif",N.fillText(H,90,xt),N.font="32px Arial, sans-serif",N.fillText(Y,230,xt)}),C.t.needsUpdate=!0}let M=e(new oe(1.3,.89),new Et({map:C.t,roughness:.8}),.25,Se+1.62,ke-.07);M.rotation.y=Math.PI,e(new kt(1.38,.97,.03),r,.25,Se+1.62,ke-.05);let Q=e(new oe(.5,.125),new we({map:Ct.t}),1.9,Se+1.75,ke-.06);Q.rotation.y=Math.PI;let lt=(N,ft)=>{let H=T.g;H.fillStyle="#0d1b2e",H.fillRect(0,0,2048,900),H.fillStyle="#f2d48a",H.font="bold 64px Georgia, serif",H.textAlign="center",H.fillText(N&&N.season?`LIGA  \xB7  ${N.season.name.toUpperCase()}`:"LIGA",1024,80);let Y=[20,530,1040,1550];for(let xt=1;xt<=4;xt++){let Nt=Y[xt-1];H.fillStyle=["#7a5f10","#5e636b","#6b3e1c","#1f5e46"][xt-1],H.fillRect(Nt,110,478,64),H.fillStyle="#fff",H.font="bold 40px Arial, sans-serif",H.textAlign="center",H.fillText(`${xt}. LIGA`,Nt+239,155);let Mt=N&&N.leagues&&N.leagues[xt]||[];for(let Vt=0;Vt<10;Vt++){let jt=Mt[Vt],zt=225+Vt*64;if(H.fillStyle=Vt%2?"#13253d":"#102036",H.fillRect(Nt,zt-44,478,64),!jt)continue;H.fillStyle=jt.me?"#FACC15":"#e8ecf3",H.font=(jt.me?"bold ":"")+"32px Arial, sans-serif",H.textAlign="left";let F=`${jt.rank}. ${jt.user.name}`;for(;F.length>2&&H.measureText(F).width>330;)F=F.slice(0,-1);H.fillText(F,Nt+16,zt),H.textAlign="right",H.fillText(String(jt.points),Nt+462,zt)}}H.fillStyle="#9fb3d9",H.font="30px Arial, sans-serif",H.textAlign="center",H.fillText(N&&N.me?`Ty: ${N.me.rank}. miesto v ${N.me.league}. lige \xB7 ${N.me.points} bodov \xB7 v\xFDhry ${N.me.wins}, prehry ${N.me.losses}`:"Body: v\xED\u0165az z\xEDska, ko\u013Eko nahral; porazen\xFD ich strat\xED",1024,880),T.t.needsUpdate=!0,H=v.g,H.fillStyle="#0c1a33",H.fillRect(0,0,512,320),H.fillStyle="#FACC15",H.font="bold 34px Arial, sans-serif",H.textAlign="center",H.fillText("MOJA LIGA",256,60),H.fillStyle="#fff",H.font="bold 64px Arial, sans-serif",H.fillText(N&&N.me?`${N.me.league}. liga`:"bez registr\xE1cie",256,150),H.font="32px Arial, sans-serif",H.fillText(N&&N.me?`${N.me.rank}. miesto \xB7 ${N.me.points} b.`:"",256,210),H.fillStyle="#9fb3d9",H.font="26px Arial, sans-serif",H.fillText(N&&N.me?`V ${N.me.wins} \xB7 P ${N.me.losses} \xB7 s\xE9ria ${N.me.best}`:"",256,260),v.t.needsUpdate=!0,H=L.g,H.fillStyle="#fbf7ec",H.fillRect(0,0,400,300),H.fillStyle="#b3121f",H.fillRect(0,0,400,70);let it=new Date;H.fillStyle="#fff",H.font="bold 40px Arial, sans-serif",H.textAlign="center",H.fillText(it.toLocaleDateString("sk-SK",{month:"long"}).toUpperCase(),200,50),H.fillStyle="#222",H.font="bold 120px Georgia, serif",H.fillText(String(it.getDate()),200,190),H.font="24px Arial, sans-serif",H.fillText(N&&N.season?`do konca sez\xF3ny ${N.season.daysLeft} dn\xED`:"sez\xF3na ligy",200,260),L.t.needsUpdate=!0,wt(ft)},mt=di(720,400),st=e(new oe(.16,.089),new Et({map:mt.t,roughness:.55,emissive:16777215,emissiveMap:mt.t,emissiveIntensity:.12}),.16,g+.045,y-.1);st.rotation.x=-.95,st.rotation.y=-.15,e(new kt(.12,.012,.035),a,.16,g+.006,y-.085).rotation.y=-.15;let $t=(N,ft,H)=>{let Y=mt.g,it=720,xt=400,Nt=Y.createLinearGradient(0,0,it,xt);Nt.addColorStop(0,"#b3121f"),Nt.addColorStop(1,"#6e0912"),Y.fillStyle=Nt,Y.fillRect(0,0,it,xt),Y.strokeStyle="#e9c46a",Y.lineWidth=6,Y.strokeRect(18,18,it-36,xt-36),Y.textAlign="center",Y.fillStyle="#f4d98a",Y.font="bold 34px Georgia, serif",Y.fillText("MY SNOOKER \xB7 LIGA",it/2,82);let Mt=N&&N.registered,Vt=N&&N.player||{};if(Y.fillStyle="#fff4e6",!Mt)Y.font="bold 58px Georgia, serif",Y.fillText("Registr\xE1cia",it/2,190),Y.fillText("do ligy",it/2,256),Y.font="28px Arial, sans-serif",Y.fillStyle="#f4d98a",Y.fillText(N&&N.season?N.season.name+" \xB7 klikni a vypl\u0148":"klikni a vypl\u0148",it/2,330);else{let jt=N.me||{};Y.font="bold 56px Georgia, serif",Y.fillText(String(Vt.nick||ft||"").slice(0,20),it/2,190),Y.font="32px Arial, sans-serif",Y.fillText([H,Vt.city].filter(Boolean).join(", "),it/2,248),Y.fillStyle="#f4d98a",Y.font="bold 34px Arial, sans-serif",Y.fillText(jt.league?`${jt.league}. liga \xB7 ${jt.rank}. miesto \xB7 ${jt.points} b.`:"",it/2,320)}mt.t.needsUpdate=!0};return $t(null,"",""),lt(null,[]),W([],0),{root:t,map:k,MAP:A,seat:{pos:new I(cn,Se+1.25,y+.75),look:new I(cn,Se+.85,-ke)},card:st,setCard:$t,door:vt,setDoor:bt,toggleWindow:D,updateWindow:et,speakers:Ht,views:{help:{pos:new I(cn+.25,Se+1.62,ke-1.75),look:new I(cn+.25,Se+1.6,ke)},calendar:{pos:new I(cn-.45,g+.34,y+.12),look:new I(cn-.6,g+.07,y-.25)},results:{pos:new I(cn,Se+1.6,-ke+3.7),look:new I(cn,Se+1.6,-ke)},map:{pos:new I(cn-hn+2.7,A.y,0),look:new I(cn-hn,A.y,0)},rack:{pos:new I(cn+hn-3.3,Se+1.1,-.2),look:new I(cn+hn,Se+.62,-.2)},notebook:{pos:new I(cn-.15,g+.36,y+.2),look:new I(cn-.15,g+.12,y-.2)}},results:x,setBoards:lt,setMap:W,setRack:$,mapLonLat(N){let ft=k.worldToLocal(N.clone()),H=ft.x/A.w+.5,Y=.5-ft.y/A.h;return{lon:H*360-180,lat:90-Y*180}}}}var Cc=[["SK","Slovensko",48.7,19.7],["CZ","\u010Cesko",49.8,15.5],["HU","Ma\u010Farsko",47.2,19.5],["PL","Po\u013Esko",52,19.4],["AT","Rak\xFAsko",47.5,14.6],["DE","Nemecko",51.2,10.4],["UA","Ukrajina",49,31.4],["GB","Spojen\xE9 kr\xE1\u013Eovstvo",54,-2.5],["IE","\xCDrsko",53.2,-8],["FR","Franc\xFAzsko",46.6,2.4],["ES","\u0160panielsko",40.2,-3.7],["PT","Portugalsko",39.6,-8],["IT","Taliansko",42.8,12.6],["CH","\u0160vaj\u010Diarsko",46.8,8.2],["NL","Holandsko",52.2,5.3],["BE","Belgicko",50.6,4.6],["LU","Luxembursko",49.8,6.1],["DK","D\xE1nsko",56,9.5],["NO","N\xF3rsko",61.5,9],["SE","\u0160v\xE9dsko",62,15],["FI","F\xEDnsko",64,26],["IS","Island",64.9,-18.6],["EE","Est\xF3nsko",58.6,25],["LV","Loty\u0161sko",56.9,24.6],["LT","Litva",55.3,23.9],["SI","Slovinsko",46.1,14.8],["HR","Chorv\xE1tsko",45.1,15.2],["BA","Bosna a Hercegovina",44.2,17.8],["RS","Srbsko",44,20.9],["ME","\u010Cierna Hora",42.7,19.4],["MK","Severn\xE9 Maced\xF3nsko",41.6,21.7],["AL","Alb\xE1nsko",41.2,20.2],["GR","Gr\xE9cko",39.1,22],["BG","Bulharsko",42.7,25.5],["RO","Rumunsko",45.9,25],["MD","Moldavsko",47.4,28.4],["TR","Turecko",39,35.2],["CY","Cyprus",35.1,33.4],["MT","Malta",35.9,14.4],["US","Spojen\xE9 \u0161t\xE1ty",39.8,-98.6],["CA","Kanada",56.1,-106.3],["MX","Mexiko",23.6,-102.6],["BR","Braz\xEDlia",-14.2,-51.9],["AR","Argent\xEDna",-38.4,-63.6],["CL","\u010Cile",-35.7,-71.5],["CO","Kolumbia",4.6,-74.3],["PE","Peru",-9.2,-75],["ZA","Ju\u017En\xE1 Afrika",-30.6,22.9],["EG","Egypt",26.8,30.8],["MA","Maroko",31.8,-7.1],["NG","Nig\xE9ria",9.1,8.7],["KE","Ke\u0148a",-0,37.9],["IL","Izrael",31,34.9],["AE","Spojen\xE9 arabsk\xE9 emir\xE1ty",23.4,53.8],["SA","Saudsk\xE1 Ar\xE1bia",23.9,45.1],["IN","India",20.6,79],["PK","Pakistan",30.4,69.3],["CN","\u010C\xEDna",35.9,104.2],["HK","Hongkong",22.3,114.2],["TH","Thajsko",15.9,100.9],["MY","Malajzia",4.2,101.9],["SG","Singapur",1.35,103.8],["VN","Vietnam",14.1,108.3],["PH","Filip\xEDny",12.9,121.8],["ID","Indon\xE9zia",-.8,113.9],["JP","Japonsko",36.2,138.3],["KR","Ju\u017En\xE1 K\xF3rea",35.9,127.8],["AU","Austr\xE1lia",-25.3,133.8],["NZ","Nov\xFD Z\xE9land",-40.9,174.9],["RU","Rusko",61.5,105.3]];function Yo(s){let t=Cc.find(e=>e[0]===s);return t?{code:t[0],name:t[1],lat:t[2],lon:t[3]}:null}function qy(s,t){let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d"),i="#"+s.toString(16).padStart(6,"0");n.fillStyle=i,n.fillRect(0,0,256,128);let r=t==="white"?"rgba(180,30,40,0.85)":t==="black"?"rgba(255,255,255,0.22)":"rgba(255,255,255,0.35)";n.fillStyle=r;for(let[a,l]of[[64,64],[192,64]])n.beginPath(),n.arc(a,l,t==="white"?7:5,0,Math.PI*2),n.fill();let o=new be(e);return o.colorSpace=de,o}function Yy(){let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.75)"),e.addColorStop(.45,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new be(s)}var jo=class{constructor(t,e,n,i=null){this.scene=t,this.items=[];let r=n==="high"?64:32,o=new Be(.02625,r,Math.round(r*.75)),a={},l=new oe(.02625*2.6,.02625*2.6),h=new we({map:Yy(),transparent:!0,depthWrite:!1,opacity:.6});for(let f of e){a[f.kind]||(a[f.kind]=new Po({map:qy(Kn[f.kind].color,f.kind),roughness:.12,metalness:0,clearcoat:1,clearcoatRoughness:.05,envMap:i,envMapIntensity:.55}));let m=new Bt(o,a[f.kind]),y=new Bt(l,h);y.rotation.x=-Math.PI/2,y.renderOrder=1,t.add(y),m.castShadow=!0,m.receiveShadow=!1,m.userData.ball=f,m.quaternion.setFromEuler(new Rn(Math.random()*6,Math.random()*6,Math.random()*6)),t.add(m),this.items.push({ball:f,mesh:m,blob:y,drop:0})}let c=new pe(16765503);this.outline=new Bt(new Be(.02625*1.12,32,24),new we({color:c,side:qe,transparent:!0,opacity:.9,depthWrite:!1})),this.ring=new Bt(new Ws(.02625*1.25,.02625*1.55,48),new we({color:c,transparent:!0,opacity:.75,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.outline.visible=this.ring.visible=!1,this.arrow=new ce;let u=new Et({color:16777215,transparent:!0,opacity:.55,depthWrite:!1,roughness:.4}),d=new Bt(new Vs(.02625*.38,.02625*1.3,24),u);d.rotation.z=-Math.PI/2,d.position.x=.02625*1.9,this.arrow.add(d),this.arrow.visible=!1,this.arrow.renderOrder=3,this.arrowMat=u,t.add(this.arrow),this.outline.renderOrder=this.ring.renderOrder=2,t.add(this.outline,this.ring),this._hlT=0,this._q=new mn,this._axis=new I}update(t){for(let e of this.items){let n=e.ball,i=e.mesh;if(n.on){e.drop=0,i.visible=!0,i.position.set(n.p.x,.02625,n.p.z),e.blob.visible=!0,e.blob.position.set(n.p.x,6e-4,n.p.z);let r=Math.hypot(n.w.x,n.w.y,n.w.z);r>.001&&n.moving&&(this._axis.set(n.w.x/r,n.w.y/r,n.w.z/r),this._q.setFromAxisAngle(this._axis,r*t),i.quaternion.premultiply(this._q))}else if(n.potted){e.blob.visible=!1,e.drop=Math.min(1,e.drop+t*3);let r=e.drop;i.position.x+=(n.potted.x-i.position.x)*Math.min(1,t*12),i.position.z+=(n.potted.z-i.position.z)*Math.min(1,t*12),i.position.y=.02625-r*r*.12,i.visible=r<1}else i.visible=!1,e.blob.visible=!1}}highlight(t,e,n=null){let i=!!(t&&t.on);if(this.outline.visible=!1,this.ring.visible=i,this.arrow.visible=i&&!!n,!i)return;if(n){let o=Math.atan2(t.p.z-n.z,t.p.x-n.x);this.arrow.position.set(t.p.x+Math.cos(o)*.02625*.6,.02625,t.p.z+Math.sin(o)*.02625*.6),this.arrow.rotation.set(0,-o,0),this.arrowMat.color.setHex(t.kind==="black"?5592405:Kn[t.kind].color)}this._hlT+=e;let r=.5+.5*Math.sin(this._hlT*5);this.outline.position.set(t.p.x,.02625,t.p.z),this.ring.position.set(t.p.x,.0012,t.p.z),this.outline.material.opacity=.55+.35*r,this.ring.material.opacity=.45+.4*r}meshOf(t){return this.items.find(e=>e.ball===t)?.mesh||null}};var jy=Zn.degToRad(4),Zy=Zn.degToRad(40),Ky=.049+.004,Nu=.17;function zu(s,t,e,n,i,r){let o=1/0;return e>1e-6&&(o=Math.min(o,(i-s)/e)),e<-1e-6&&(o=Math.min(o,(-i-s)/e)),n>1e-6&&(o=Math.min(o,(r-t)/n)),n<-1e-6&&(o=Math.min(o,(-r-t)/n)),Math.max(0,o)}var Zo=class{constructor(t,e){this.pivot=new ce,t.add(this.pivot),this.setSpec(e)}setSpec(t){this.group&&(this.pivot.remove(this.group),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})),this.spec=t,this.group=rs(t),this.pivot.add(this.group)}place(t,e,n,i,r,o){if(this.pivot.visible=o,!o)return;let a=Math.cos(e),l=Math.sin(e),h=-l,c=a,u=.012+n*.28,d=t.p.x-a*(.02625+u)+h*i*.5*.02625,f=t.p.z-l*(.02625+u)+c*i*.5*.02625,m=.02625+r*.5*.02625,y=zu(d,f,-a,-l,3.569/2,1.778/2),g=zu(d,f,-a,-l,3.569/2+Nu,1.778/2+Nu),p=this.spec.len||1.45,E=U=>.0048+(.0145-.0048)*Math.min(U,p)/p,v=jy;for(;v<Zy&&![y,g].every(z=>z>p||m+z*Math.sin(v)>=Ky+E(z)/Math.cos(v));v+=.005);this.tilt=this.tilt===void 0?v:this.tilt+(v-this.tilt)*.25;let _=this.tilt,V=m+u*Math.tan(_);this.pivot.position.set(d,V,f);let L=new I(-a*Math.cos(_),Math.sin(_),-l*Math.cos(_));this.pivot.quaternion.setFromUnitVectors(new I(0,1,0),L)}},Ko=class{constructor(t){let e=(n,i)=>new gr({color:n,transparent:!0,opacity:i,depthWrite:!1});this.line=new Bs(new ze().setFromPoints([new I,new I]),e(16777215,.55)),this.objLine=new Bs(new ze().setFromPoints([new I,new I]),e(16769674,.8)),this.cueLine=new Bs(new ze().setFromPoints([new I,new I]),e(10474495,.55)),this.ghost=new Bt(new Be(.02625,24,16),new we({color:16777215,wireframe:!0,transparent:!0,opacity:.35,depthWrite:!1})),t.add(this.line,this.objLine,this.cueLine,this.ghost)}set(t,e){let n=e.geometry.attributes.position;for(let i=0;i<2;i++)n.setXYZ(i,t[i].x,.02625*.35,t[i].z);n.needsUpdate=!0,e.geometry.computeBoundingSphere()}update(t,e,n,i,r=2){let o=i&&r>0;if(this.line.visible=this.ghost.visible=o,this.objLine.visible=this.cueLine.visible=o&&r>1,!o)return null;let a=Go(t,e,n);if(this.set([e.p,a.ghost],this.line),this.ghost.position.set(a.ghost.x,.02625,a.ghost.z),a.ball&&r>1){let l=a.ball.p.x-a.ghost.x,h=a.ball.p.z-a.ghost.z,c=Math.hypot(l,h)||1,u=l/c,d=h/c,f=Math.cos(n)*u+Math.sin(n)*d,m=.18+.5*f;this.set([a.ball.p,{x:a.ball.p.x+u*m,z:a.ball.p.z+d*m}],this.objLine);let y=Math.cos(n)-f*u,g=Math.sin(n)-f*d,p=Math.hypot(y,g);if(p>.001){y/=p,g/=p;let E=.08+.4*(1-f);this.set([a.ghost,{x:a.ghost.x+y*E,z:a.ghost.z+g*E}],this.cueLine)}else this.cueLine.visible=!1}else this.objLine.visible=this.cueLine.visible=!1;return a}};var Ou={type:"change"},Ic={type:"start"},Bu={type:"end"},Jo=new $i,Fu=new vn,Jy=Math.cos(70*Zn.DEG2RAD),tn=new I,gn=2*Math.PI,Pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pc=1e-6,Qo=class extends Do{constructor(t,e=null){super(t,e),this.state=Pe.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gn.ROTATE,MIDDLE:Gn.DOLLY,RIGHT:Gn.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new mn,this._lastTargetPosition=new I,this._quat=new mn().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Er,this._sphericalDelta=new Er,this._scale=1,this._panOffset=new I,this._rotateStart=new Rt,this._rotateEnd=new Rt,this._rotateDelta=new Rt,this._panStart=new Rt,this._panEnd=new Rt,this._panDelta=new Rt,this._dollyStart=new Rt,this._dollyEnd=new Rt,this._dollyDelta=new Rt,this._dollyDirection=new I,this._mouse=new Rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tx.bind(this),this._onPointerDown=Qy.bind(this),this._onPointerUp=ex.bind(this),this._onContextMenu=lx.bind(this),this._onMouseWheel=sx.bind(this),this._onKeyDown=rx.bind(this),this._onTouchStart=ox.bind(this),this._onTouchMove=ax.bind(this),this._onMouseDown=nx.bind(this),this._onMouseMove=ix.bind(this),this._interceptControlDown=cx.bind(this),this._interceptControlUp=hx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ou),this.update(),this.state=Pe.NONE}update(t=null){let e=this.object.position;tn.copy(e).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===Pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=gn:n>Math.PI&&(n-=gn),i<-Math.PI?i+=gn:i>Math.PI&&(i-=gn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),e.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=tn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let h=new I(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Jo.origin.copy(this.object.position),Jo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Jo.direction))<Jy?this.object.lookAt(this.target):(Fu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Jo.intersectPlane(Fu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Pc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pc||this._lastTargetPosition.distanceToSquared(this.target)>Pc?(this.dispatchEvent(Ou),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?gn/60*this.autoRotateSpeed*t:gn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){tn.setFromMatrixColumn(e,0),tn.multiplyScalar(-t),this._panOffset.add(tn)}_panUp(t,e){this.screenSpacePanning===!0?tn.setFromMatrixColumn(e,1):(tn.setFromMatrixColumn(e,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(t),this._panOffset.add(tn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;tn.copy(i).sub(this.target);let r=tn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-gn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Rt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Qy(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function tx(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function ex(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bu),this.state=Pe.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function nx(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Gn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Pe.DOLLY;break;case Gn.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Pe.ROTATE}break;case Gn.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Pe.PAN}break;default:this.state=Pe.NONE}this.state!==Pe.NONE&&this.dispatchEvent(Ic)}function ix(s){switch(this.state){case Pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function sx(s){this.enabled===!1||this.enableZoom===!1||this.state!==Pe.NONE||(s.preventDefault(),this.dispatchEvent(Ic),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Bu))}function rx(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function ox(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Pe.TOUCH_ROTATE;break;case ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Pe.TOUCH_PAN;break;default:this.state=Pe.NONE}break;case 2:switch(this.touches.TWO){case ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Pe.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Pe.TOUCH_DOLLY_ROTATE;break;default:this.state=Pe.NONE}break;default:this.state=Pe.NONE}this.state!==Pe.NONE&&this.dispatchEvent(Ic)}function ax(s){switch(this._trackPointer(s),this.state){case Pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Pe.NONE}}function lx(s){this.enabled!==!1&&s.preventDefault()}function cx(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hx(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ta=class{constructor(t){this.camera=new rn(45,1,.01,40),this.camera.position.set(-3,1.6,0),this.orbit=new Qo(this.camera,t.domElement),this.orbit.enableDamping=!0,this.orbit.maxPolarAngle=Math.PI/2-.05,this.orbit.minDistance=.3,this.orbit.maxDistance=4,this.orbit.target.set(0,0,0),this.orbit.enabled=!1,this.mode="cue",this.zoom=1,this.height=.22,this._pos=new I,this._look=new I,this._curLook=new I(0,0,0),this.panOffset=new I,this.followYaw=0,this.followH=.55,this._wasMoving=!1,this.aimPoint=null,this.orbit.mouseButtons={LEFT:Gn.ROTATE,MIDDLE:Gn.PAN,RIGHT:Gn.PAN}}pan(t,e){let n=this.camera.matrixWorld.elements,i=.0018*(this.mode==="top"?2:1);this.panOffset.x+=(n[0]*t-n[4]*e)*i,this.panOffset.y+=(n[1]*t-n[5]*e)*i,this.panOffset.z+=(n[2]*t-n[6]*e)*i,this.mode==="top"&&(this.panOffset.y=0),this.panOffset.y=Math.max(-.15,Math.min(1.5,this.panOffset.y)),this.panOffset.clampLength(0,3)}resetPan(){this.panOffset.set(0,0,0)}turn(t,e){this.followYaw+=t*.004,this.followH=Math.max(.12,Math.min(1.8,this.followH+e*.003))}setMode(t){this.mode=t,this.resetPan(),t==="top"?(this.camera.layers.disable(1),this.camera.layers.disable(2)):(this.camera.layers.enable(1),this.camera.layers.enable(2)),this.orbit.enabled=t==="free",t==="free"&&this.orbit.target.copy(this._curLook)}setView(t,e){this.setMode("view"),this.viewPos=t,this.viewLook=e}resize(t,e){this.camera.aspect=t/e,this.baseFov=t/e<1?62:45,this.camera.fov=this.baseFov/(this.viewZoom||1),this.camera.updateProjectionMatrix()}jump(){this.camera.position.copy(this.viewPos),this._curLook.copy(this.viewLook),this.camera.lookAt(this._curLook)}setViewZoom(t){this.viewZoom=Math.min(5,Math.max(this.minViewZoom||1,t)),this.camera.fov=(this.baseFov||45)/this.viewZoom,this.camera.updateProjectionMatrix()}update(t,e,n,i){if(this.mode==="free"){this.orbit.update(),Ec(this.camera.position),this._curLook.copy(this.orbit.target),this.camera.position.y>1.5?this.camera.layers.disable(1):this.camera.layers.enable(1);return}let r=this._pos,o=this._look;if(this.mode==="view")this.camera.up.set(0,1,0),r.copy(this.viewPos),o.copy(this.viewLook);else if(this.mode==="top"){let l=this.camera.aspect,h=Zn.degToRad(this.camera.fov),c=(1.778+.5)/2/Math.tan(h/2),u=(3.569+.5)/2/Math.tan(h/2)/l;if(l>=1)r.set(0,Math.max(c,u),1e-4),this.camera.up.set(0,0,-1);else{let d=(3.569+.5)/2/Math.tan(h/2),f=(1.778+.5)/2/Math.tan(h/2)/l;r.set(1e-4,Math.max(d,f),0),this.camera.up.set(1,0,0)}o.set(0,0,0)}else if(i&&this.mode!=="view"){this.camera.up.set(0,1,0);let l=Math.cos(this.followYaw),h=Math.sin(this.followYaw),c=.9/this.zoom+this.followH*.4;r.set(e.p.x-l*c,this.followH,e.p.z-h*c),o.set(e.p.x+l*.15,0,e.p.z+h*.15)}else{this.camera.up.set(0,1,0);let l=Math.cos(n),h=Math.sin(n),c=.62/this.zoom,u=this.height/this.zoom+.06,d=Math.tan(this.cueTilt||0)*c+.15;r.set(e.p.x-l*c,Math.max(u,d),e.p.z-h*c),o.set(e.p.x+l*.55,0,e.p.z+h*.55)}i&&!this._wasMoving&&this.mode!=="view"&&(this.followYaw=n,this.followH=.55,this.resetPan()),this._wasMoving=i,this.mode==="top"?(r.add(this.panOffset),o.add(this.panOffset)):!i&&this.mode!=="view"&&this.panOffset.lengthSq()>1e-8&&(r.add(this.panOffset),this.aimPoint?o.copy(this.aimPoint):o.add(this.panOffset)),this.mode!=="top"&&!this.noClamp&&Ec(r);let a=this.snapNext?1:1-Math.exp(-t*(this.mode==="view"||i?4:7));this.snapNext=!1,this.camera.position.lerp(r,a),this._curLook.lerp(o,a),this.camera.lookAt(this._curLook),this.camera.position.y>Ye.ceil-.05?this.camera.layers.disable(2):this.mode!=="top"&&this.camera.layers.enable(2),this.mode!=="top"&&(this.camera.position.y>1.5?this.camera.layers.disable(1):this.camera.layers.enable(1))}};var ea=class{constructor(t,e,n,i){this.dom=t,this.rig=e,this.game=n,this.hooks=i,this.power=0,this.charging=!1,this.fine=!1,this._ray=new Qi,this._plane=new vn(new I(0,1,0),-.02625),this._v2=new Rt,this._hit=new I,this._drag=null,this._keys=new Set,this._spaceT=0,this.stroking=!1,this.spinning=!1,this.blocked=!1,this.cueSpec={fine:0,len:1.45},this.strokePx=380,this.strokePull=0,this._hist=[],t.addEventListener("mousemove",r=>this.mouseMove(r)),this.panning=!1,t.addEventListener("mousedown",r=>{r.button===1&&r.preventDefault()}),this._ignoreUntil=0,document.addEventListener("pointerlockchange",()=>{this._ignoreUntil=performance.now()+60,this.hooks.lock&&this.hooks.lock(this.captured)}),t.addEventListener("pointerdown",r=>this.down(r)),window.addEventListener("pointermove",r=>this.move(r)),window.addEventListener("pointerup",r=>this.up(r)),window.addEventListener("pointercancel",r=>this.up(r)),t.addEventListener("wheel",r=>this.wheel(r),{passive:!1}),t.addEventListener("contextmenu",r=>r.preventDefault()),window.addEventListener("keydown",r=>this.key(r,!0)),window.addEventListener("keyup",r=>this.key(r,!1))}tablePoint(t){let e=this.dom.getBoundingClientRect();return this._v2.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),this._ray.setFromCamera(this._v2,this.rig.camera),this._ray.ray.intersectPlane(this._plane,this._hit)}aimAt(t){let e=this.game.cue;Math.hypot(t.x-e.p.x,t.z-e.p.z)>.01&&(this.game.dir=Math.atan2(t.z-e.p.z,t.x-e.p.x))}down(t){this.hooks.unlock();let e=this.game;if(this.blocked){this.hooks.viewDown&&this.hooks.viewDown(t);return}if(t.pointerType==="mouse"&&t.button===2){this.rig.mode!=="free"&&(this.panning=!0,this.capture());return}if(t.pointerType==="mouse"&&t.button===1){let n=performance.now();if(n-(this._midT||0)<350){this._midT=0,this.spinning=!1,this.hooks.spinReset&&this.hooks.spinReset();return}this._midT=n}if(e.state==="place"&&this.captured){t.button===0&&(e.confirmPlace(),e.aimAtNearest());return}if(e.state==="place"){let n=this.tablePoint(t);n&&e.movePlace(n.x,n.z),this._drag={kind:"place",id:t.pointerId};return}if(e.state==="aim"){if(t.pointerType==="mouse"){if(t.button===0&&this.rig.mode!=="free"){this.captured?this.startStroke():this.capture();return}if(t.button===1){this.spinning=!0,this.capture();return}}if(this.rig.mode==="free"){this._tap={id:t.pointerId,x:t.clientX,y:t.clientY,t:performance.now()};return}if(this.rig.mode==="top"){let n=this.tablePoint(t);n&&this.aimAt(n),this._drag={kind:"aimTop",id:t.pointerId}}else this._drag={kind:"aimCue",id:t.pointerId,x:t.clientX,dir:e.dir};try{this.dom.setPointerCapture(t.pointerId)}catch{}}}move(t){let e=this._drag;if(!e||e.id!==t.pointerId)return;let n=this.game;if(e.kind==="place"){let i=this.tablePoint(t);i&&n.movePlace(i.x,i.z)}else if(e.kind==="aimTop"){let i=this.tablePoint(t);i&&this.aimAt(i)}else if(e.kind==="aimCue"){let i=t.shiftKey||this.fine?15e-5:.0016;n.dir=e.dir+(t.clientX-e.x)*i}}up(t){t.pointerType==="mouse"&&t.button===0&&this.stroking&&this.endStroke(),t.pointerType==="mouse"&&t.button===1&&(this.spinning=!1),t.pointerType==="mouse"&&t.button===2&&(this.panning=!1,this.rig.resetPan());let e=this._tap;if(e&&e.id===t.pointerId&&(this._tap=null,Math.hypot(t.clientX-e.x,t.clientY-e.y)<6&&performance.now()-e.t<350&&this.game.state==="aim")){let n=this.tablePoint(t);n&&this.aimAt(n)}this._drag&&this._drag.id===t.pointerId&&(this._drag=null)}setCue(t){this.cueSpec=t,this.strokePx=Tu(t)}get captured(){return document.pointerLockElement===this.dom}capture(){if(!(this.captured||!this.dom.requestPointerLock))try{let t=this.dom.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}uncapture(){this.captured&&document.exitPointerLock()}mouseMove(t){let e=this.game;if(this.blocked){this.hooks.look&&performance.now()>=this._ignoreUntil&&Math.abs(t.movementX||0)<200&&Math.abs(t.movementY||0)<200&&this.hooks.look(t.movementX||0,t.movementY||0);return}if(performance.now()<this._ignoreUntil||Math.abs(t.movementX||0)>200||Math.abs(t.movementY||0)>200)return;if(this.stroking){this.strokeMove(t.movementY||0);return}if(this.panning){this.rig.pan(t.movementX||0,t.movementY||0);return}if(e.spectating&&this.rig.mode==="cue"&&(t.buttons&3)===0){this.rig.turn(t.movementX||0,t.movementY||0);return}if(e.state==="moving"&&this.rig.mode==="cue"&&(t.buttons&3)===0){this.rig.turn(t.movementX||0,t.movementY||0);return}if(this.spinning){this.hooks.spin&&this.hooks.spin((t.movementX||0)/160,-(t.movementY||0)/160);return}if(e.state==="place"&&this.captured){this.placeMove(t.movementX||0,t.movementY||0);return}if((t.buttons&3)!==0||e.state!=="aim"||!this.captured)return;let n=t.movementX||0;if(!n)return;let i=t.shiftKey&&this.cueSpec.fine>0,r=i?this.cueSpec.fine:5e-4,o=i?1:1+Math.min(6,Math.abs(n)/6);e.dir+=n*r*o}placeMove(t,e){let n=this.rig.camera.matrixWorld.elements,i=n[0],r=n[2],o=n[4],a=n[6];Math.hypot(o,a)<.2&&(o=-n[8],a=-n[10]);let l=Math.hypot(i,r)||1,h=Math.hypot(o,a)||1;i/=l,r/=l,o/=h,a/=h;let c=.0012,u=this.game.cue;this.game.movePlace(u.p.x+(t*i-e*o)*c,u.p.z+(t*r-e*a)*c)}startStroke(){this.game.canShoot()&&(this.stroking=!0,this._ignoreUntil=performance.now()+60,this.strokePull=0,this._max=0,this._hist=[{t:performance.now(),p:0}],this.capture(),this.hooks.stroke&&this.hooks.stroke(!0))}endStroke(){this.stroking=!1,this.strokePull=0,this.power=0,this.hooks.stroke&&this.hooks.stroke(!1)}strokeMove(t){if(!this.stroking||!this.game.canShoot())return;let e=performance.now(),n=this.strokePull;for(this.strokePull=Math.max(-.02,Math.min(1,n+t/this.strokePx)),this._max=Math.max(this._max,this.strokePull),this._hist.push({t:e,p:this.strokePull});this._hist.length>2&&e-this._hist[0].t>80;)this._hist.shift();let i=this.strokeSpeed();if(this.power=Math.max(0,Math.min(1,i)),this.strokePull<=.004&&n>.004&&this._max>.02&&t<0){let r=Math.max(.03,Math.min(1,i));this.endStroke(),this.hooks.shoot(r)}}strokeSpeed(){let t=this._hist;if(t.length<2)return 0;let e=0;for(let a=1;a<t.length;a++)t[a].p>=t[e].p&&(e=a);let n=t[e],i=t[t.length-1];if(n===i)return 0;let r=Math.max(.008,(i.t-n.t)/1e3),o=(n.p-i.p)/r;return Math.max(0,o*.28*2/7)}wheel(t){if(this.blocked&&this.hooks.viewWheel){t.preventDefault(),this.hooks.viewWheel(Math.max(-4,Math.min(4,t.deltaY/(t.deltaMode===1?3:100))));return}if(this.rig.mode!=="cue")return;t.preventDefault();let e=Math.max(-4,Math.min(4,t.deltaY/(t.deltaMode===1?3:100)));this.rig.zoom=Math.min(6,Math.max(.3,this.rig.zoom*Math.pow(.82,e)))}key(t,e){if(t.target&&/input|textarea|select/i.test(t.target.tagName))return;let n=this.game,i=t.key;if(e?this._keys.add(i):this._keys.delete(i),i==="Control"){e&&!t.repeat?this.hooks.key&&this.hooks.key("ctrl-down",t):e||this.hooks.key&&this.hooks.key("ctrl-up",t);return}if(i===" "){if(t.preventDefault(),this.blocked)return;e&&!this.charging&&n.canShoot()?(this.hooks.unlock(),this.charging=!0,this._spaceT=0):!e&&this.charging&&this.release();return}e&&(i==="Enter"&&n.state==="place"?n.confirmPlace():i==="Escape"&&(this.charging||this.stroking)?(this.charging=!1,this.power=0,this.stroking&&this.endStroke()):this.hooks.key&&this.hooks.key(i,t)&&t.preventDefault())}setPower(t,e){this.power=Math.max(0,Math.min(1,t)),this.charging=e}release(){let t=this.power;this.charging=!1,this.power=0,t>.02&&this.hooks.shoot(t)}update(t){let e=this.game;if(e.state==="aim"&&!this.blocked){let i=this._keys.has("Shift")&&this.cueSpec.fine>0?.015:.35;this._keys.has("ArrowLeft")&&(e.dir-=i*t),this._keys.has("ArrowRight")&&(e.dir+=i*t)}if(this.stroking&&e.state!=="aim"&&this.endStroke(),this.stroking&&this._hist.length&&performance.now()-this._hist[this._hist.length-1].t>120&&(this.power*=Math.exp(-t*8)),this.charging&&this._keys.has(" ")){this._spaceT+=t;let n=this._spaceT/1.6%2;this.power=n<1?n:2-n}}};var na=class{constructor(){this.ctx=null,this.enabled=!0,this.volume=.8,this._last=0,this._count=0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t){this.enabled=!1;return}this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination);let e=Math.floor(this.ctx.sampleRate*.05);this.noise=this.ctx.createBuffer(1,e,this.ctx.sampleRate);let n=this.noise.getChannelData(0);for(let i=0;i<e;i++)n[i]=(Math.random()*2-1)*Math.pow(1-i/e,3)}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}_allow(){let t=this.ctx.currentTime;return t-this._last>.03&&(this._count=0),this._last=t,this._count++,this._count<=4}_tone(t,e,n,i="sine",r=.5){let o=this.ctx.currentTime,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type=i,a.frequency.setValueAtTime(t,o),a.frequency.exponentialRampToValueAtTime(Math.max(20,t*r),o+e),l.gain.setValueAtTime(n,o),l.gain.exponentialRampToValueAtTime(1e-4,o+e),a.connect(l).connect(this.master),a.start(o),a.stop(o+e+.02)}_click(t,e,n,i=1){let r=this.ctx.currentTime,o=this.ctx.createBufferSource();o.buffer=this.noise,o.playbackRate.value=i;let a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.value=t,a.Q.value=e;let l=this.ctx.createGain();l.gain.value=n,o.connect(a).connect(l).connect(this.master),o.start(r)}_ok(){return this.enabled&&this.ctx&&this.ctx.state==="running"}ball(t){if(!this._ok()||t<.02||!this._allow())return;let e=Math.min(1,t/4);this._click(3800+Math.random()*600,6,.25+e*1.6,1.2),this._tone(2600+Math.random()*300,.04,.05+e*.25,"triangle",.8)}cushion(t){if(!this._ok()||t<.05||!this._allow())return;let e=Math.min(1,t/4);this._tone(120,.12,.1+e*.45,"sine",.6),this._click(700,2,.1+e*.4,.6)}pot(){this._ok()&&(this._tone(90,.25,.5,"sine",.5),setTimeout(()=>this._ok()&&this._click(1200,3,.25,.5),90),setTimeout(()=>this._ok()&&this._click(900,3,.18,.5),170))}doorCreak(){if(!this._ok())return;let t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createBiquadFilter(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(420,t);for(let r=1;r<=8;r++)e.frequency.linearRampToValueAtTime(380+Math.random()*260,t+r*.1);n.type="bandpass",n.frequency.value=900,n.Q.value=6,i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.12,t+.08),i.gain.setValueAtTime(.12,t+.6),i.gain.exponentialRampToValueAtTime(1e-4,t+.85),e.connect(n).connect(i).connect(this.master),e.start(t),e.stop(t+.9)}doorShut(){this._ok()&&(this._tone(70,.35,.9,"sine",.5),this._click(500,1.5,.8,.5),setTimeout(()=>this._ok()&&this._click(2500,4,.25,1),40))}cue(t){this._ok()&&(this._click(1800,3,.3+t*1.2,.9),this._tone(600,.05,.05+t*.15,"triangle",.6))}};var ee=s=>String(s||"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),dt=(s,t,e)=>{let n=document.createElement(s);return t&&(n.className=t),e!==void 0&&(n.innerHTML=e),n},Lc=s=>Ci(s).name,ux=s=>s.id,ia=class{constructor(t,e){this.root=t,this.opts=e,this.side=0,this.top=0,t.classList.add("mysn-ui");let n=dt("div","mysn-bar");n.appendChild(dt("div","mysn-brand",`<a href="${e.homeUrl||"/"}" class="mysn-home" title="Sp\xE4\u0165 na web">My Snooker</a><span>Tr\xE9ning</span>`)),this.modeLabel=n.querySelector(".mysn-brand span"),this.stats=dt("div","mysn-stats"),n.appendChild(this.stats);let i=dt("div","mysn-barbtns");this.btnHelp=this.button("?","help","Ovl\xE1danie"),this.btnSet=this.button("Nastavenia","settings"),i.append(this.btnSet,this.btnHelp),n.appendChild(i),t.appendChild(n),this.msg=dt("div","mysn-msg"),t.appendChild(this.msg),this.hint=dt("div","mysn-hint",""),t.appendChild(this.hint),this.setLock(!1),this.powerBox=dt("div","mysn-power",'<div class="mysn-power-label">Sila</div><div class="mysn-power-track"><div class="mysn-power-fill"></div><div class="mysn-power-knob"></div></div><div class="mysn-power-val">0 %</div>'),t.appendChild(this.powerBox),this.powerTrack=this.powerBox.querySelector(".mysn-power-track"),this.powerFill=this.powerBox.querySelector(".mysn-power-fill"),this.powerKnob=this.powerBox.querySelector(".mysn-power-knob"),this.powerVal=this.powerBox.querySelector(".mysn-power-val"),this.bindPower(),this.spinBox=dt("div","mysn-spin",'<div class="mysn-spin-ball"><div class="mysn-spin-dot"></div></div><div class="mysn-spin-label">Miesto \xFAderu</div>'),t.appendChild(this.spinBox),this.spinBall=this.spinBox.querySelector(".mysn-spin-ball"),this.spinDot=this.spinBox.querySelector(".mysn-spin-dot"),this.bindSpin();let r=dt("div","mysn-tools");this.camBtns={};let o=dt("div","mysn-group");this.btnUndo=this.button("Sp\xE4\u0165","undo","Vr\xE1ti\u0165 posledn\xFD \xFAder (Z)"),this.btnHand=this.button("Biela do ruky","hand","Polo\u017Ei\u0165 bielu kamko\u013Evek v D (B)"),this.btnSkip=this.button("Presko\u010Di\u0165","skip","Dokon\u010Di\u0165 \xFAder hne\u010F"),this.btnReset=this.button("Nov\xE9 rozostavenie","reset","Nov\xE9 rozostavenie (R)"),this.btnPlace=this.button("Hotovo","place","Potvrdi\u0165 polohu bielej (Enter)"),this.btnPlace.classList.add("mysn-primary"),o.append(this.btnPlace,this.btnUndo,this.btnHand,this.btnSkip,this.btnReset),r.appendChild(o),t.appendChild(r),this.menu=this.buildMenu(),this.setMenu(e.user?"training":"guest"),t.appendChild(this.menu),this.panel=this.buildSettings(e.settings),t.appendChild(this.panel),this.contact=dt("div","mysn-contact mysn-hidden",'<canvas></canvas><div class="mysn-contact-info"></div>'),t.appendChild(this.contact),this.contactCanvas=this.contact.querySelector("canvas"),this.contactInfo=this.contact.querySelector(".mysn-contact-info"),this._contactKey="",this.help=this.buildHelp(),t.appendChild(this.help)}button(t,e,n,i){let r=dt("button","mysn-btn",t);return r.type="button",n&&(r.title=n),r.addEventListener("click",o=>{o.stopPropagation(),this.opts.onAction(e,i)}),r}bindPower(){let t=null,e=i=>{let r=this.powerTrack.getBoundingClientRect();return Math.max(0,Math.min(1,(i.clientY-r.top)/r.height))};this.powerTrack.addEventListener("pointerdown",i=>{i.preventDefault(),this.opts.onAction("unlock"),t=i.pointerId;try{this.powerTrack.setPointerCapture(i.pointerId)}catch{}this.opts.onPower(e(i),!0)}),this.powerTrack.addEventListener("pointermove",i=>{t===i.pointerId&&this.opts.onPower(e(i),!0)});let n=i=>{t===i.pointerId&&(t=null,this.opts.onRelease())};this.powerTrack.addEventListener("pointerup",n),this.powerTrack.addEventListener("pointercancel",i=>{t===i.pointerId&&(t=null,this.opts.onPower(0,!1))})}bindSpin(){let t=null,e=n=>{let i=this.spinBall.getBoundingClientRect(),r=(n.clientX-i.left)/i.width*2-1,o=-((n.clientY-i.top)/i.height*2-1),a=Math.hypot(r,o);a>1&&(r/=a,o/=a),this.setSpin(Math.abs(r)<.06?0:r,Math.abs(o)<.06?0:o)};this.spinBall.addEventListener("pointerdown",n=>{n.preventDefault(),t=n.pointerId;try{this.spinBall.setPointerCapture(n.pointerId)}catch{}e(n)}),this.spinBall.addEventListener("pointermove",n=>t===n.pointerId&&e(n)),this.spinBall.addEventListener("pointerup",()=>t=null),this.spinBall.addEventListener("dblclick",()=>this.setSpin(0,0))}setSpin(t,e){let n=Math.hypot(t,e);n>1&&(t/=n,e/=n),this.side=t,this.top=e,this.spinDot.style.left=50+this.side*40+"%",this.spinDot.style.top=50-this.top*40+"%",this.opts.onSpin(this.side,this.top)}buildSettings(t){let e=dt("div","mysn-panel mysn-hidden");e.innerHTML=`
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
			<button type="button" class="mysn-btn mysn-primary" data-close>Zavrie\u0165</button>`;for(let n of e.querySelectorAll("[data-k]")){let i=n.dataset.k;n.type==="checkbox"?n.checked=!!t[i]:n.value=String(t[i]),n.addEventListener(n.type==="range"?"input":"change",()=>{let r=n.type==="checkbox"?n.checked:n.type==="range"?parseFloat(n.value):n.value;this.opts.onAction("setting",{k:i,v:r})})}return e.querySelector("[data-close]").addEventListener("click",()=>e.classList.add("mysn-hidden")),e}buildMenu(){let t=dt("div","mysn-menu mysn-hidden");return t.innerHTML=`<div class="mysn-menu-box">
			<h2>My Snooker</h2>
			<p class="mysn-menu-mode"></p>
			<div class="mysn-menu-note mysn-hidden"></div>
			<div class="mysn-menu-inv"></div>
			<div class="mysn-menu-btns"></div>
			<p class="mysn-note"></p>
		</div>`,this.menuMode=t.querySelector(".mysn-menu-mode"),this.menuNoteEl=t.querySelector(".mysn-menu-note"),this.menuInv=t.querySelector(".mysn-menu-inv"),this.menuBtns=t.querySelector(".mysn-menu-btns"),this.menuFoot=t.querySelector(".mysn-note"),this._menuKind="",t}setMenu(t,e){let n=t+"|"+(e||"")+"|"+(this.opts.venue?this.opts.venue():"");if(this._menuKind===n)return;this._menuKind=n;let i=this.menuBtns;i.innerHTML="";let r=this.opts.user;if(t==="guest"){this.menuMode.textContent="3D snooker v prehliada\u010Di";let l=this.button("Tr\xE9ning","guestTraining","Vo\u013En\xFD tr\xE9ning na stole bez prihl\xE1senia"),h=dt("a","mysn-btn mysn-login","Prihl\xE1si\u0165 sa");h.href=this.opts.loginUrl||"/wp-login.php",i.append(l,h),this.menuFoot.textContent="Tr\xE9ning si m\xF4\u017Ee\u0161 zahra\u0165 aj bez prihl\xE1senia. Hru o sk\xF3re, ligu, partie s priate\u013Emi a vlastn\xE9 t\xE1g\xE1 maj\xFA prihl\xE1sen\xED pou\u017E\xEDvatelia webu Hedlajner.";return}let o=()=>{let l=this.button("Posla\u0165 v\xFDzvu","lobby","Vyzvi hr\xE1\u010Da, ktor\xFD je pr\xE1ve v hre, na partiu alebo na spolo\u010Dn\xFD tr\xE9ning");return l.classList.add("mysn-friend"),l},a=()=>[this.button("Nastavenia","settings")];if(t==="watch"){this.menuMode.textContent=`Sledujem: ${e}`;let l=this.button("Presta\u0165 sledova\u0165","watchStop");l.classList.add("mysn-primary"),i.append(l,this.button("In\xE1 otvoren\xE1 partia","rooms"),this.button("Nastavenia","settings"),this.button("Sp\xE4\u0165 na web","home")),this.menuFoot.textContent="Div\xE1k sa len pozer\xE1: my\u0161ou sa ot\xE1\u010Da\u0161 okolo stola, kolieskom pribli\u017Euje\u0161.";return}if(t==="match"){let l=!!(this._lastGame&&this._lastGame.match&&this._lastGame.match.training);this.btnResume=this.button(l?"Pokra\u010Dova\u0165 v tr\xE9ningu":"Pokra\u010Dova\u0165 v partii","resume"),this.btnResume.classList.add("mysn-primary"),this.menuMode.textContent=`${l?"Tr\xE9ning":"Partia"} s hr\xE1\u010Dom ${e}`,i.append(this.btnResume,...a()),i.append(this.button(l?"Preru\u0161i\u0165 tr\xE9ning":"Preru\u0161i\u0165 partiu","pauseMatch","Ulo\u017E\xED sa, pokra\u010Dova\u0165 sa d\xE1 nesk\xF4r"),this.button(l?"Ukon\u010Di\u0165 tr\xE9ning":"Vzda\u0165 partiu","resign"))}else{this.menuMode.textContent=t==="solo"?"Hr\xE1 sa o najlep\u0161ie sk\xF3re":r?`Prihl\xE1sen\xFD: ${r.name}`:"Tr\xE9ning";let l=this.button("Hra\u0165",t==="solo"?"resume":"solo","O najlep\u0161ie sk\xF3re: cel\xFD frame pod\u013Ea pravidiel, rebr\xED\u010Dek pod\u013Ea bodov, pri rovnosti rozhoduje krat\u0161\xED \u010Das");l.classList.add("mysn-primary"),this.btnResume=l;let h=this.button("Liga","league","Kancel\xE1ria ligy: registr\xE1cia, 4 ligy, body a sez\xF3na na rok");h.classList.add("mysn-league-btn");let c=this.button("Tr\xE9ning",t==="solo"?"training":"resume","Vo\u013En\xFD tr\xE9ning na stole s \u010Derven\xFDm s\xFAknom"),u=this.button("Vst\xFApi\u0165","rooms","Otvoren\xE9 partie: tr\xE9ningy a hry s otvoren\xFDmi dverami a ligov\xE9 z\xE1pasy, d\xE1 sa ich sledova\u0165");i.append(c,l,h,o(),u),this.opts.venue&&this.opts.venue()==="league"&&i.appendChild(this.button("Sp\xE4\u0165 do herne","leagueHome")),i.append(...a())}i.appendChild(this.button("Sp\xE4\u0165 na web","home")),this.menuFoot.textContent="V hre sa my\u0161 zachyt\xED v okne. Esc ju uvo\u013En\xED a otvor\xED toto menu. F1 n\xE1poveda na n\xE1stenke, F2 stojan s t\xE1gami."}menuNote(t){this.menuNoteEl.textContent=t||"",this.menuNoteEl.classList.toggle("mysn-hidden",!t)}showMenu(t,e){t&&!this.menuOpen()&&(this._menuAt=performance.now()),this.menu.classList.toggle("mysn-hidden",!t),t||(this.panel.classList.add("mysn-hidden"),this.help.classList.add("mysn-hidden"),this.menuNote(""))}menuOpen(){return!this.menu.classList.contains("mysn-hidden")}showInvites(t){let e=t||[];this.menuInv.innerHTML="";for(let n of e){let i=dt("div","mysn-inv",`${n.from.avatar?`<img src="${ee(n.from.avatar)}" alt="">`:""}<span><b>${ee(n.from.name)}</b> \u0165a poz\xFDva na ${n.league?"ligov\xFA ":""}partiu</span>`),r=this.button("Prija\u0165","accept","",n.id);r.classList.add("mysn-primary"),i.append(r,this.button("Odmietnu\u0165","decline","",n.id)),this.menuInv.appendChild(i)}this.toastBox||(this.toastBox=dt("div","mysn-toast mysn-hidden"),this.root.appendChild(this.toastBox)),this.lobby&&!this.lobby.classList.contains("mysn-hidden")&&this._lobbyData&&this.renderLobby(this._lobbyData)}toast(t,e){this.toastBox||(this.toastBox=dt("div","mysn-toast mysn-hidden"),this.root.appendChild(this.toastBox));let n=this.toastBox;if(n.innerHTML="",n.appendChild(dt("span","",ee(t))),e){let i=this.button("Prija\u0165","accept","",e.id);i.classList.add("mysn-primary"),n.append(i,this.button("Odmietnu\u0165","decline","",e.id))}n.classList.remove("mysn-hidden"),clearTimeout(this._toastT),this._toastT=setTimeout(()=>n.classList.add("mysn-hidden"),e?3e4:6e3)}hideToast(){this.toastBox&&this.toastBox.classList.add("mysn-hidden")}openRooms(t,e){this.roomsBox||(this.roomsBox=dt("div","mysn-panel mysn-lobby mysn-hidden"),this.root.appendChild(this.roomsBox));let n=this.roomsBox;if(n.classList.toggle("mysn-hidden",!t),!t)return;n.innerHTML="<h3>Otvoren\xE9 partie</h3>",n.appendChild(dt("p","mysn-lobby-sub","Prebiehaj\xFAce partie s otvoren\xFDmi dverami a ligov\xE9 z\xE1pasy")),e?e.length||n.appendChild(dt("p","mysn-note","Teraz nie je otvoren\xE1 \u017Eiadna partia. Hr\xE1\u010D otvor\xED svoju her\u0148u pre div\xE1kov dverami (F6), ligov\xE9 z\xE1pasy sa daj\xFA sledova\u0165 v\u017Edy.")):n.appendChild(dt("p","mysn-note","Na\u010D\xEDtavam\u2026"));let i={training:"Tr\xE9ning",solo:"O najlep\u0161ie sk\xF3re",league:"Ligov\xFD z\xE1pas"},r=dt("div","mysn-live");for(let a of e||[]){let l=dt("div","mysn-live-row",`<i></i><span><b>${ee(a.title)}</b><em>${ee(i[a.kind]||"")}${a.info?", "+ee(a.info):""}</em></span>`),h=this.button("Sledova\u0165","watchStart","Pozera\u0165 sa na partiu",a);h.classList.add("mysn-primary"),l.appendChild(h),r.appendChild(l)}n.appendChild(r);let o=dt("div","mysn-lobby-foot");o.appendChild(this.button("Obnovi\u0165","rooms")),o.appendChild(this.button("Zavrie\u0165","roomsClose")),n.appendChild(o)}roomsOpen(){return!!(this.roomsBox&&!this.roomsBox.classList.contains("mysn-hidden"))}openLobby(t){this.lobby||(this.lobby=dt("div","mysn-panel mysn-lobby mysn-hidden"),this.root.appendChild(this.lobby)),this.lobby.classList.toggle("mysn-hidden",!t),t&&this._lobbyData&&this.renderLobby(this._lobbyData)}lobbyOpen(){return!!(this.lobby&&!this.lobby.classList.contains("mysn-hidden"))}renderLobby(t){if(this._lobbyData=t,!this.lobby||this.lobby.classList.contains("mysn-hidden"))return;let e=this.lobby;e.innerHTML="<h3>Posla\u0165 v\xFDzvu</h3>";let n=l=>l.avatar?`<img src="${ee(l.avatar)}" alt="">`:"<i></i>";for(let l of t.invites||[]){let h=dt("div","mysn-inv",`${n(l.from)}<span><b>Boli ste vyzvan\xFD!</b> ${ee(l.from.name)} \u0165a vyz\xFDva ${l.training?"na spolo\u010Dn\xFD tr\xE9ning":l.league?"na ligov\xFA partiu":"na partiu"}</span>`),c=this.button("Prija\u0165","accept","",l.id);c.classList.add("mysn-primary"),h.append(c,this.button("Odmietnu\u0165","decline","",l.id)),e.appendChild(h)}let i=t.outgoing;if(i&&i.status==="invited"){let l=dt("div","mysn-inv mysn-wait",`${n(i.to)}<span>V\xFDzva odoslan\xE1. \u010Cak\xE1m, k\xFDm <b>${ee(i.to.name)}</b> prijme\u2026</span>`);l.appendChild(this.button("Zru\u0161i\u0165","cancelInvite")),e.appendChild(l)}e.appendChild(dt("p","mysn-lobby-sub","Hr\xE1\u010Di pr\xE1ve v hre My Snooker"));let r=t.live||[];r.length||e.appendChild(dt("p","mysn-note","Teraz nie je v hre nikto in\xFD. Zoznam sa obnovuje s\xE1m, ke\u010F niekto pr\xEDde, objav\xED sa tu."));let o=dt("div","mysn-live");for(let l of r){let h=dt("div","mysn-live-row",`${n(l)}<span><b>${ee(l.name)}</b>${l.busy?"<em>hr\xE1 partiu</em>":'<em class="mysn-live-on">v hre</em>'}</span>`),c=this.button("Vyzva\u0165 na partiu","invite","Jeden frame pod\u013Ea pravidiel snookeru",l.id),u=this.button("Pozva\u0165 na tr\xE9ning","inviteTraining","Spolo\u010Dn\xFD tr\xE9ning: striedate sa pri stole, bez faulov, farby sa vracaj\xFA na spoty",l.id);c.disabled=u.disabled=!!l.busy||!!(i&&i.status==="invited"),h.append(c,u),o.appendChild(h)}if(e.appendChild(o),(t.paused||[]).length){e.appendChild(dt("p","mysn-lobby-sub","Rozohran\xE9 partie"));for(let l of t.paused){let h=new Date(l.updated*1e3).toLocaleString("sk-SK",{day:"numeric",month:"numeric",hour:"2-digit",minute:"2-digit"}),c=dt("div","mysn-live-row",`${n(l.opp)}<span><b>${ee(l.opp.name)}</b><em>${l.scores[0]} : ${l.scores[1]}, ${ee(h)}</em></span>`);c.appendChild(this.button("Pokra\u010Dova\u0165","resumeMatch","Pokra\u010Dova\u0165 v partii (s\xFAper sa pripoj\xED, ke\u010F pr\xEDde do hry)",l.id)),e.appendChild(c)}}let a=dt("div","mysn-lobby-foot");a.appendChild(dt("span","mysn-note","Partia sa uklad\xE1 po ka\u017Edom \xFAdere. Pri v\xFDpadku internetu sa po n\xE1vrate pokra\u010Duje tam, kde sa skon\u010Dila.")),a.appendChild(this.button("Zavrie\u0165","lobbyClose")),e.appendChild(a)}celebrate(t){this.party||(this.party=dt("div","mysn-party mysn-hidden"),this.root.appendChild(this.party));let e=this.party;if(!t){e.classList.add("mysn-hidden"),e.innerHTML="";return}let n=Math.max(0,Math.round(t.seconds)),i=`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`,r=t.points===1?"bod":t.points>1&&t.points<5?"body":"bodov",o=["#FACC15","#b3121f","#0f7a3a","#1747b5","#f08aa8","#6b3a1e","#f4f1e8"],a="";for(let u=0;u<70;u++)a+=`<i style="left:${(Math.random()*100).toFixed(1)}%;background:${o[u%o.length]};animation-delay:${(Math.random()*2.5).toFixed(2)}s;animation-duration:${(2.8+Math.random()*2.4).toFixed(2)}s;width:${6+Math.round(Math.random()*8)}px;height:${6+Math.round(Math.random()*8)}px;border-radius:${u%3?"50%":"2px"}"></i>`;let l=t.rank?`<p class="mysn-party-rank">${t.rank}. miesto v rebr\xED\u010Dku z ${t.players}${t.best?", tvoj najlep\u0161\xED frame!":""}</p>`:"";e.innerHTML=`<div class="mysn-party-conf">${a}</div><div class="mysn-party-box">
			<p class="mysn-party-kick">Frame dohran\xFD</p>
			<h2>Gratulujem!</h2>
			<div class="mysn-party-score"><b>${t.points}</b><span>${r}</span></div>
			<p class="mysn-party-time">za <b>${i}</b></p>
			<p class="mysn-party-meta">Najvy\u0161\u0161ia s\xE9ria ${t.brk}, \xFAdery ${t.shots}, fauly ${t.fouls}</p>
			${l}${t.error?`<p class="mysn-party-err">${ee(t.error)}</p>`:""}
			<div class="mysn-party-btns"></div>
		</div>`;let h=e.querySelector(".mysn-party-btns"),c=this.button("Hra\u0165 \u010Fal\u0161\xED frame","partyNext");c.classList.add("mysn-primary"),h.append(c,this.button("Rebr\xED\u010Dek","partyBoard")),e.classList.remove("mysn-hidden")}partyOpen(){return!!(this.party&&!this.party.classList.contains("mysn-hidden"))}leaderboardOpen(){return!!(this.board&&!this.board.classList.contains("mysn-hidden"))}openLeague(t){this.leagueBox||(this.leagueBox=dt("div","mysn-panel mysn-lobby mysn-league mysn-hidden"),this.root.appendChild(this.leagueBox),this._leagueTab=0),this.leagueBox.classList.toggle("mysn-hidden",!t)}leagueOpen(){return!!(this.leagueBox&&!this.leagueBox.classList.contains("mysn-hidden"))}renderLeague(t,e){if(this._leagueData=t,!this.leagueOpen())return;let n=this.leagueBox;n.innerHTML="";let i=f=>new Date(f*1e3).toLocaleDateString("sk-SK");if(e){n.appendChild(dt("h3","","Minul\xE9 sez\xF3ny")),(!e.seasons||!e.seasons.length)&&n.appendChild(dt("p","mysn-note","Zatia\u013E sa neskon\u010Dila \u017Eiadna sez\xF3na. Prv\xE1 sa skon\u010D\xED po roku hrania."));for(let m of e.seasons||[]){n.appendChild(dt("p","mysn-lobby-sub",`${ee(m.name)} (${i(m.started)} a\u017E ${i(m.ends)})`)),m.champion&&n.appendChild(dt("div","mysn-menu-note",`Majster sez\xF3ny: <b>${ee(m.champion.name)}</b>`));for(let y of[1,2,3,4]){let g=m.leagues&&m.leagues[y]||[];g.length&&n.appendChild(dt("p","mysn-note",`<b>${y}. liga:</b> `+g.map(p=>`${p.rank}. ${ee(p.user.name)} (${p.points})`).join(", ")))}}let f=dt("div","mysn-lobby-foot");f.append(this.button("Sp\xE4\u0165 na ligu","league"),this.button("Zavrie\u0165","leagueClose")),n.appendChild(f);return}if(!t){n.appendChild(dt("h3","","Liga")),n.appendChild(dt("p","mysn-note","Ligu sa nepodarilo na\u010D\xEDta\u0165."));let f=dt("div","mysn-lobby-foot");f.appendChild(this.button("Zavrie\u0165","leagueClose")),n.appendChild(f);return}n.appendChild(dt("h3","",`Liga: ${ee(t.season.name)}`)),n.appendChild(dt("p","mysn-note",`Do konca sez\xF3ny ost\xE1va ${t.season.daysLeft} dn\xED (${i(t.season.ends)}). Hr\xE1\u010Dov v lige: ${t.players}.`)),t.me&&(n.appendChild(dt("div","mysn-menu-note",`Si <b>${t.me.rank}.</b> v <b>${t.me.league}. lige</b>, m\xE1\u0161 <b>${t.me.points}</b> bodov (v\xFDhry ${t.me.wins}, prehry ${t.me.losses}).`)),this._leagueTab===0&&(this._leagueTab=t.me.league)),n.appendChild(dt("p","mysn-lobby-sub","Vyzvi hr\xE1\u010Da (tvoja a susedn\xE9 ligy, pr\xE1ve v hre)"));let r=t.live||[];r.length||n.appendChild(dt("p","mysn-note","Teraz nie je v hre nikto z tvojej ani susedn\xFDch l\xEDg. Zoznam sa obnovuje s\xE1m."));let o=this._lobbyData&&this._lobbyData.outgoing,a=dt("div","mysn-live");for(let f of r){let m=dt("div","mysn-live-row",`${f.user.avatar?`<img src="${ee(f.user.avatar)}" alt="">`:"<i></i>"}<span><b>${ee(f.user.name)}</b><em>${f.league}. liga, ${f.points} bodov${f.busy?", hr\xE1 partiu":""}</em></span>`),y=this.button("Vyzva\u0165","leagueInvite","Ligov\xE1 partia: v\xED\u0165az z\xEDska body, ktor\xE9 nahral, porazen\xFD ich strat\xED",f.user.id);y.disabled=!!f.busy||!!(o&&o.status==="invited"),m.appendChild(y),a.appendChild(m)}if(n.appendChild(a),o&&o.status==="invited"){let f=dt("div","mysn-inv mysn-wait",`<span>\u010Cak\xE1m, k\xFDm <b>${ee(o.to.name)}</b> prijme v\xFDzvu\u2026</span>`);f.appendChild(this.button("Zru\u0161i\u0165","cancelInvite")),n.appendChild(f)}let l=dt("div","mysn-league-tabs");for(let f of[1,2,3,4]){let m=this.button(`${f}. liga`,"leagueTab","",f);m.classList.toggle("mysn-on",this._leagueTab===f),l.appendChild(m)}n.appendChild(l);let h=t.leagues&&t.leagues[this._leagueTab||1]||[],c=dt("table","mysn-lb");c.innerHTML="<thead><tr><th>#</th><th>Hr\xE1\u010D</th><th>Body</th><th>V / P</th><th>S\xE9ria</th></tr></thead>";let u=dt("tbody");h.length||u.appendChild(dt("tr","mysn-lb-gap",'<td colspan="5">V tejto lige zatia\u013E nikto nie je.</td>'));for(let f of h)u.appendChild(dt("tr",f.me?"mysn-lb-me":"",`<td>${f.rank}.</td><td>${ee(f.user.name)}</td><td><b>${f.points}</b></td><td>${f.wins} / ${f.losses}</td><td>${f.best}</td>`));c.appendChild(u),n.appendChild(c),n.appendChild(dt("p","mysn-note","Ka\u017Ed\xFD za\u010D\xEDna so 147 bodmi. V\xED\u0165az z\xEDska to\u013Eko bodov, ko\u013Eko nahral, porazen\xFD ich strat\xED (najviac v\u0161etky svoje). V\xFDhra nad hr\xE1\u010Dom z vy\u0161\u0161ej ligy sa r\xE1ta 1,5-kr\xE1t. 1. liga: top 10, 2. liga: 11. a\u017E 30., 3. liga: 31. a\u017E 70., 4. liga: ostatn\xED. Sez\xF3na trv\xE1 rok."));let d=dt("div","mysn-lobby-foot");d.append(this.button("Minul\xE9 sez\xF3ny","leagueArchive"),this.button("Sp\xE4\u0165 do herne","leagueHome"),this.button("Zavrie\u0165","leagueClose")),n.appendChild(d)}showLeaderboard(t,e){this.board||(this.board=dt("div","mysn-panel mysn-lobby mysn-hidden"),this.root.appendChild(this.board));let n=this.board;if(t===null){n.classList.add("mysn-hidden");return}let i=a=>{let l=Math.max(0,Math.round(a));return`${Math.floor(l/60)}:${String(l%60).padStart(2,"0")}`};if(n.innerHTML="<h3>Rebr\xED\u010Dek: o najlep\u0161ie sk\xF3re (F8)</h3>",e&&n.appendChild(dt("div","mysn-menu-note",ee(e))),n.appendChild(dt("p","mysn-note","Jeden hr\xE1\u010D hr\xE1 cel\xFD frame pod\u013Ea pravidiel. Rozhoduj\xFA body (fauly sa odpo\u010D\xEDtaj\xFA), pri rovnosti krat\u0161\xED \u010Das. V rebr\xED\u010Dku je najlep\u0161\xED frame ka\u017Ed\xE9ho hr\xE1\u010Da.")),t===void 0)n.appendChild(dt("p","mysn-note","Na\u010D\xEDtavam rebr\xED\u010Dek\u2026"));else if(!t)n.appendChild(dt("p","mysn-note","Rebr\xED\u010Dek sa nepodarilo na\u010D\xEDta\u0165."));else if(!t.top.length)n.appendChild(dt("p","mysn-note","Zatia\u013E nikto nedohral frame. Bu\u010F prv\xFD."));else{let a=dt("table","mysn-lb");a.innerHTML="<thead><tr><th>#</th><th>Hr\xE1\u010D</th><th>Body</th><th>Celkov\xFD \u010Das</th><th>S\xE9ria</th></tr></thead>";let l=dt("tbody"),h=c=>{let u=dt("tr",c.me?"mysn-lb-me":"",`<td>${c.rank}.</td><td>${ee(c.user.name)}</td><td><b>${c.points}</b></td><td>${i(c.seconds)}</td><td>${c.brk}</td>`);l.appendChild(u)};t.top.forEach(h),t.mine&&t.rank>10&&(l.appendChild(dt("tr","mysn-lb-gap",'<td colspan="5">\u2026</td>')),h(t.mine)),a.appendChild(l),n.appendChild(a),n.appendChild(dt("p","mysn-note",t.mine?`Tvoje miesto: ${t.rank}. z ${t.players}, dohran\xFDch framov: ${t.frames}.`:`Hr\xE1\u010Dov v rebr\xED\u010Dku: ${t.players}. Zatia\u013E nem\xE1\u0161 dohran\xFD \u017Eiadny frame.`))}let r=dt("div","mysn-lobby-foot"),o=this.button("Hra\u0165","solo");o.classList.add("mysn-primary"),r.append(o,this.button("Zavrie\u0165","leaderboardClose")),n.appendChild(r),n.classList.remove("mysn-hidden")}setNet(t){this._net=t||"",this._lastGame&&this.sync(this._lastGame,this._lastCam)}buildHelp(){let t=dt("div","mysn-panel mysn-help mysn-hidden");return t.innerHTML=`
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
			<button type="button" class="mysn-btn mysn-primary" data-close>Rozumiem</button>`,t.querySelector("[data-close]").addEventListener("click",()=>t.classList.add("mysn-hidden")),t}toggle(t){(t===this.panel?this.help:this.panel).classList.add("mysn-hidden"),t.classList.toggle("mysn-hidden")}drawContact(t,e,n,i=!1){let r=!!(n&&t&&t.ball);if(this.contact.classList.toggle("mysn-hidden",!r),!r){this._contactKey="";return}let o=t.ball.p,a=t.ghost,l=[this.feltColor||"",i?1:0,e.toFixed(5),o.x.toFixed(4),o.z.toFixed(4),a.x.toFixed(4),a.z.toFixed(4)].join();if(l===this._contactKey)return;this._contactKey=l;let h=this.contactCanvas,c=this.contact.clientWidth||200,u=Math.min(2,window.devicePixelRatio||1);h.width!==Math.round(c*u)&&(h.width=h.height=Math.round(c*u));let d=h.getContext("2d"),f=h.width;d.setTransform(1,0,0,1,0,0),d.clearRect(0,0,f,f);let m=Math.cos(e),y=Math.sin(e),g=(a.x+o.x)/2,p=(a.z+o.z)/2,E=f*.17/.02625,v=(At,Z)=>{let ct=At-g,Dt=Z-p,gt=ct*m+Dt*y,Lt=ct*-y+Dt*m;return[f/2+Lt*E,f/2-gt*E]},_=o.x-a.x,V=o.z-a.z,L=Math.hypot(_,V)||1,U=_/L,z=V/L,T=Math.max(-1,Math.min(1,m*U+y*z)),x=Math.acos(T),A=Math.max(0,1-Math.sin(x)),q=(At,Z,ct,Dt,gt)=>{d.beginPath(),d.setLineDash(gt||[]),d.strokeStyle=ct,d.lineWidth=Dt*u,d.moveTo(At[0],At[1]),d.lineTo(Z[0],Z[1]),d.stroke(),d.setLineDash([])},k=(At,Z,ct,Dt,gt)=>{let Lt=v(At.x,At.z),Gt=v(At.x+Z*Dt,At.z+ct*Dt);q(Lt,Gt,gt,2.2);let Yt=Math.atan2(Gt[1]-Lt[1],Gt[0]-Lt[0]),ne=8*u;d.beginPath(),d.fillStyle=gt,d.moveTo(Gt[0],Gt[1]),d.lineTo(Gt[0]-ne*Math.cos(Yt-.45),Gt[1]-ne*Math.sin(Yt-.45)),d.lineTo(Gt[0]-ne*Math.cos(Yt+.45),Gt[1]-ne*Math.sin(Yt+.45)),d.closePath(),d.fill()};if(d.fillStyle=this.feltColor||"#1d6b34",d.beginPath(),d.arc(f/2,f/2,f/2-u,0,Math.PI*2),d.fill(),d.save(),d.clip(),i){let At=6*.02625;q(v(a.x-m*At,a.z-y*At),v(a.x+m*At,a.z+y*At),"rgba(255,255,255,0.45)",1.2,[5*u,4*u]),q(v(a.x-U*.02625,a.z-z*.02625),v(o.x+U*5*.02625,o.z+z*5*.02625),"rgba(255,226,138,0.35)",1,[2*u,3*u])}let W=(At,Z,ct)=>{let[Dt,gt]=v(At.x,At.z),Lt=.02625*E,Gt=d.createRadialGradient(Dt-Lt*.35,gt-Lt*.35,Lt*.1,Dt,gt,Lt),Yt="#"+Z.toString(16).padStart(6,"0");Gt.addColorStop(0,ct?"#ffffff":"rgba(255,255,255,0.55)"),Gt.addColorStop(.25,Yt),Gt.addColorStop(1,Yt),d.globalAlpha=ct?.78:1,d.fillStyle=Gt,d.beginPath(),d.arc(Dt,gt,Lt,0,Math.PI*2),d.fill(),d.globalAlpha=1,d.lineWidth=1.5*u,d.strokeStyle=ct?"rgba(255,255,255,0.95)":"rgba(0,0,0,0.55)",d.stroke()};W(o,Kn[t.ball.kind].color,!1),W(a,Kn.white.color,!0);let G=m-T*U,O=y-T*z,K=Math.hypot(G,O);{let At=v(a.x-m*4.2*.02625,a.z-y*4.2*.02625),Z=v(a.x-m*1.05*.02625,a.z-y*1.05*.02625);q(At,Z,"rgba(255,255,255,0.7)",2.4,[6*u,4*u]);let ct=Math.atan2(Z[1]-At[1],Z[0]-At[0]),Dt=7*u;d.beginPath(),d.fillStyle="rgba(255,255,255,0.8)",d.moveTo(Z[0],Z[1]),d.lineTo(Z[0]-Dt*Math.cos(ct-.5),Z[1]-Dt*Math.sin(ct-.5)),d.lineTo(Z[0]-Dt*Math.cos(ct+.5),Z[1]-Dt*Math.sin(ct+.5)),d.closePath(),d.fill();let gt=t.ball.kind,Lt=gt==="black"?7829367:Kn[gt].color;k({x:o.x+U*.02625*1.05,z:o.z+z*.02625*1.05},U,z,.02625*2.4,"#"+Lt.toString(16).padStart(6,"0"))}i&&K>.001&&(G/=K,O/=K,k(a,G,O,.02625*(.9+2.4*(1-T)),"#9fd3ff"));let $=v(a.x+U*.02625,a.z+z*.02625);d.fillStyle="#ff4d4d",d.beginPath(),d.arc($[0],$[1],3.2*u,0,Math.PI*2),d.fill(),d.restore(),d.strokeStyle="rgba(255,255,255,0.35)",d.lineWidth=1.5*u,d.beginPath(),d.arc(f/2,f/2,f/2-u,0,Math.PI*2),d.stroke();let ht=null;for(let At of ns){let Z=At.x-o.x,ct=At.z-o.z,Dt=Z*U+ct*z;if(Dt<=0)continue;let gt=Math.abs(Z*-z+ct*U);gt<At.r*.75&&(!ht||Dt<ht.pr)&&(ht={pr:Dt,perp:gt,pk:At})}let yt=m*z-y*U,wt=x*180/Math.PI,Ut=wt<.5?"pln\xFD z\xE1sah":yt>0?"gu\u013Ea ide doprava":"gu\u013Ea ide do\u013Eava";this.contactInfo.innerHTML=`<span>Uhol <b>${wt.toFixed(1)}\xB0</b></span><span>Plnos\u0165 <b>${Math.round(A*100)} %</b></span>`+(i?`<span class="mysn-contact-where">${Ut}</span>`+(ht?'<span class="mysn-contact-pot">Smer do jamky</span>':'<span class="mysn-contact-miss">Mimo jamky</span>'):"")}setLock(t){this._lock=t,this._hintText()}setStroke(t){this._stroke=t,this._hintText()}_hintText(){let t=this._free?"My\u0161 je vo\u013En\xE1, k\xFDm dr\u017E\xED\u0161 Ctrl. Po pusten\xED sa vr\xE1ti na t\xE1go.":this._stroke?"Ruka dr\u017E\xED t\xE1go: my\u0161 k sebe odtiahne, dopredu vystrel\xED. Pusten\xEDm \u013Eav\xE9ho tla\u010Didla zru\u0161\xED\u0161.":this._lock?`${this._cueName}: mier pohybom my\u0161i${this._cueFine?" (Shift jemne)":""}, \u013Eav\xE9 tla\u010Didlo dr\u017E a striel. F1 n\xE1poveda, F2 t\xE1g\xE1, F3 krieda, F4 sk\xF3re, F6 dvere, Tab zhora, Esc menu.`:"Klikni do hry, my\u0161 sa zachyt\xED v okne. F1 n\xE1poveda, F2 t\xE1g\xE1, F3 krieda, F4 sk\xF3re, F6 dvere, Tab zhora.";this.hint.textContent=t,this.hint.classList.toggle("mysn-hint-on",!!(this._stroke||this._free))}readerOpen(){return!!(this.reader&&!this.reader.classList.contains("mysn-hidden"))}toggleReader(t,e){this.reader||(this.reader=dt("div","mysn-reader mysn-hidden"),this.root.appendChild(this.reader));let n=this.reader;if(!t||this.readerOpen()){n.classList.add("mysn-hidden");return}let i=t==="rss"?"Spr\xE1vy z RSS":"HEDLAJNER",r=t==="rss"?"Najnov\u0161ie spr\xE1vy z m\xE9di\xED doma aj vo svete":"Hlavn\xE9 spr\xE1vy z domova a zo sveta",o=(e||[]).map((l,h)=>{let c=l.i?`<img src="${ee(l.i)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`:"",u=[l.s,l.c,l.d].filter(Boolean).map(ee).join("  |  ");return`<a class="mysn-rd-card${h===0&&l.i?" mysn-rd-lead":""}" href="${ee(l.u)}" target="_blank" rel="noopener">${c}<span class="mysn-rd-meta">${u}${l.n?"  |  +"+l.n+" m\xE9di\xE1":""}</span><b>${ee(l.t)}</b><p>${ee(l.e)}</p></a>`}).join("");n.innerHTML=`<div class="mysn-rd-head"><div><h2>${i}</h2><span>${r}</span></div></div><div class="mysn-rd-grid">${o||"<p>\u017Diadne spr\xE1vy.</p>"}</div>`;let a=this.button("Zavrie\u0165 (C alebo Esc)","reader");a.classList.add("mysn-primary"),n.querySelector(".mysn-rd-head").appendChild(a),n.classList.remove("mysn-hidden"),n.scrollTop=0}setFree(t){this._free=t,this._hintText()}setChalk(t){this._chalk=t,this._lastGame&&this.sync(this._lastGame,this._lastCam)}setCueInfo(t){this._cueName=t.name,this._cueFine=t.fine>0,this._hintText()}openPhone(t){if(!this.phone){if(!t)return;this.phone=dt("div","mysn-phone mysn-hidden"),this.phone.innerHTML='<div class="mysn-phone-dev"><div class="mysn-phone-notch"></div><div class="mysn-phone-scr"></div></div>',this.phone.addEventListener("click",a=>{a.target===this.phone&&this.openPhone(!1)}),this.root.appendChild(this.phone)}let e=this.phone;if(!t){e.classList.add("mysn-hidden");return}let n=e.querySelector(".mysn-phone-scr"),i=this.opts.accountUrl;n.innerHTML="";let r=dt("div","mysn-phone-bar","<b>M\xF4j \xFA\u010Det</b>"),o=this.button("Zavrie\u0165 (Esc)","phoneClose");if(r.appendChild(o),n.appendChild(r),!i)n.appendChild(dt("p","mysn-phone-msg","M\xF4j \xFA\u010Det je len pre prihl\xE1sen\xFDch."));else{let a=document.createElement("iframe");a.className="mysn-phone-frame",a.src=i,a.title="M\xF4j \xFA\u010Det";let l=()=>{n.querySelector(".mysn-phone-frame")&&a.remove();let c=dt("div","mysn-phone-msg","Nastavenie \xFA\u010Dtu sa tu ned\xE1 zobrazi\u0165. Otvor ho na webe:"),u=dt("a","mysn-btn mysn-primary","Otvori\u0165 M\xF4j \xFA\u010Det");u.href=i,u.target="_blank",u.rel="noopener",c.appendChild(u),n.appendChild(c)};a.addEventListener("load",()=>{try{let c=a.contentDocument,u=c.createElement("style");u.textContent="#adminmenumain,#wpadminbar,#wpfooter,.notice-warning,.update-nag{display:none!important}#wpcontent,#wpbody-content{margin-left:0!important;padding-left:12px!important}html.wp-toolbar{padding-top:0!important}body{min-width:0!important}",c.head.appendChild(u)}catch{l()}}),n.appendChild(a);let h=dt("a","mysn-phone-ext","Otvori\u0165 na webe");h.href=i,h.target="_blank",h.rel="noopener",n.appendChild(h)}e.classList.remove("mysn-hidden")}phoneOpen(){return!!(this.phone&&!this.phone.classList.contains("mysn-hidden"))}updateCueCard(t){let e=this.viewBox&&this.viewBox.querySelector(`.mysn-cue[data-cue="${t.id}"]`);if(e){e.querySelector("b").textContent=t.name;let r=e.querySelectorAll("span");r[2]&&(r[2].textContent=`\u0160pi\u010Dka ${t.tip}, sila ${Math.round(t.power*100)} %`),r[3]&&(r[3].textContent=`D\u013A\u017Eka ${Math.round(t.len*100)} cm, Shift ${t.fine>0?"\xE1no":"nie"}`)}let n=this.cuePanel&&this.cuePanel.querySelector("h3");n&&(n.textContent=t.name);let i=this.cuePanel&&this.cuePanel.querySelector(".mysn-cp-stats");i&&(i.innerHTML=this.cueStats(t))}cueStats(t){return`<span>Sila <b>${Math.round(t.power*100)} %</b></span><span>D\u013A\u017Eka <b>${Math.round(t.len*100)} cm</b></span><span>Fal\u0161e <b>${Math.round(t.grip*100)} %</b></span><span>\u0160pi\u010Dka <b>${ee(t.tip)}</b></span><span>Shift <b>${t.fine>0?"\xE1no":"nie"}</b></span>`}renderCuePanel(t,e){this.cuePanel||(this.cuePanel=dt("div","mysn-cue-panel mysn-hidden"),this.cuePanel.addEventListener("mousedown",o=>o.stopPropagation()),this.cuePanel.addEventListener("keydown",o=>o.stopPropagation()),this.root.appendChild(this.cuePanel));let n=this.cuePanel;if(n.classList.remove("mysn-hidden"),n.innerHTML="",!t)return;let i=!!t.own;n.appendChild(dt("div","mysn-cp-kind",i?`Vlastn\xE9 t\xE1go, \u0161abl\xF3na: ${ee(Lc(t.base))}`:`\u0160abl\xF3na: ${ee(t.category)}`)),n.appendChild(dt("h3","",ee(t.name))),n.appendChild(dt("div","mysn-cp-stats",this.cueStats(t))),n.appendChild(dt("p","mysn-cp-note",ee(t.note)));let r=(o,a)=>{let l=dt("label","mysn-cp-row",`<span>${o}</span>`);return l.appendChild(a),l};if(i){let o=(h,c)=>this.opts.onAction("cueOwnSet",{id:t.own,k:h,v:c}),a=document.createElement("input");a.type="text",a.maxLength=30,a.value=t.name,a.addEventListener("input",()=>o("name",a.value.trim())),n.appendChild(r("N\xE1zov",a));for(let[h,c]of[["shaft","Farba dreva"],["butt","Farba rukov\xE4te"]]){let u=document.createElement("input");u.type="color",u.value=t.colors[h],u.addEventListener("input",()=>o(h,u.value)),n.appendChild(r(c,u))}for(let[h,c]of[["power","Sila"],["len","D\u013A\u017Eka"],["grip","Fal\u0161e"]]){let u=document.createElement("input");u.type="range",u.min="-0.1",u.max="0.1",u.step="0.01",u.value=String(t.adj[h]||0);let d=dt("em","mysn-cp-val",`${Math.round((t.adj[h]||0)*100)} %`);u.addEventListener("input",()=>{d.textContent=`${Math.round(parseFloat(u.value)*100)} %`,o(h,parseFloat(u.value))});let f=r(`${c} (\xB110 %)`,u);f.appendChild(d),n.appendChild(f)}let l=this.button("Zmaza\u0165 t\xE1go","cueOwnDelete","Zma\u017Ee toto vlastn\xE9 t\xE1go",t.own);l.classList.add("mysn-cp-del"),n.appendChild(l)}else{n.appendChild(dt("p","mysn-cp-note","\u0160abl\xF3na sa nemen\xED. Vyrob si z nej vlastn\xE9 t\xE1go: n\xE1zov a farby si nastav\xED\u0161 vo\u013Ene, silu, d\u013A\u017Eku a fal\u0161e o \xB110 %."));let o=this.button("Vytvori\u0165 vlastn\xE9 t\xE1go","cueNew","Nov\xE9 vlastn\xE9 t\xE1go z tejto \u0161abl\xF3ny",t.id);o.classList.add("mysn-primary"),e.user?e.ownCount>=e.ownMax&&(o.disabled=!0,n.appendChild(dt("p","mysn-cp-note",`M\xE1\u0161 ${e.ownCount} z ${e.ownMax} vlastn\xFDch t\xE1g. Na nov\xE9 jedno zma\u017E.`))):(o.disabled=!0,n.appendChild(dt("p","mysn-cp-note","Vlastn\xE9 t\xE1g\xE1 maj\xFA len prihl\xE1sen\xED hr\xE1\u010Di."))),n.appendChild(o)}if(e.user){n.appendChild(dt("div","mysn-cp-head",`Moje t\xE1g\xE1 <em>${e.ownCount||0} z ${e.ownMax||10}</em>`));let o=e.own||[];o.length||n.appendChild(dt("p","mysn-cp-note","Zatia\u013E nem\xE1\u0161 vlastn\xE9 t\xE1go. Vyber \u0161abl\xF3nu na stojane a daj Vytvori\u0165 vlastn\xE9 t\xE1go."));for(let a of o){let l=!!a.rackOn,h=dt("div","mysn-cp-own"+(a.id===t.id?" mysn-on":""),`<span class="mysn-cp-sw" style="background:linear-gradient(90deg, ${ee(a.colors.shaft)} 50%, ${ee(a.colors.butt)} 50%)"></span><span><b>${ee(a.name)}</b><em>${ee(Lc(a.base))}${l?", na stojane":""}</em></span>`),c=this.button(a.id===ux(t)?"Vybrat\xE9":"Vybra\u0165","cuePick","Hra\u0165 s t\xFDmto t\xE1gom",a.id);c.disabled=a.id===t.id;let u=this.button(l?"Zo stojana":"Na stojan","cueOwnRack",l?"Na stojan vr\xE1ti \u0161abl\xF3nu":`Da\u0165 na stojan namiesto \u0161abl\xF3ny ${Lc(a.base)}`,a.own);h.append(c,u),n.appendChild(h)}}}cardOpen(){return!!this.cardBox&&!this.cardBox.classList.contains("mysn-hidden")}cardOverlay(t){return this.cardBox||(this.cardBox=dt("div","mysn-card mysn-hidden"),this.cardBox.addEventListener("mousedown",e=>e.stopPropagation()),this.root.appendChild(this.cardBox)),this.cardBox.classList.toggle("mysn-hidden",!t),this.cardBox.innerHTML="",t&&this.cardBox.appendChild(dt("div","mysn-card-brand","MY SNOOKER \xB7 LIGA")),this.cardBox}renderOffice(t,e){e.mode!=="card"&&e.mode!=="edit"&&this.cardOverlay(!1);let n=dt("div","mysn-mixer mysn-office"),i=e.league,r=i&&i.registered,o=i&&i.player||{},a=(c,u)=>{let d=dt("label","mysn-mixer-row mysn-form-row",`<span>${c}</span>`);return d.appendChild(u),d},l=(c,u,d,f)=>{let m=document.createElement("input");return m.type="text",m.name=c,m.maxLength=d,m.value=u||"",m.placeholder=f||"",m};if(!i)n.appendChild(dt("div","mysn-news-head","<b>Kancel\xE1ria</b>")),n.appendChild(dt("p","mysn-mixer-status","Na\u010D\xEDtavam ligu\u2026"));else if(!r&&e.mode!=="card"){n.appendChild(dt("div","mysn-news-head","<b>Registr\xE1cia do ligy</b>")),n.appendChild(dt("p","mysn-mixer-status",`Na stole le\u017E\xED \u010Derven\xE1 vizitka. Dr\u017E Ctrl a klikni na \u0148u (alebo F8) a vypl\u0148 svoje \xFAdaje. ${ee(i.season.name)}, do konca ${i.season.daysLeft} dn\xED. Ligu hraj\xFA len registrovan\xED hr\xE1\u010Di.`));let c=this.button("Otvori\u0165 vizitku","officeCard");c.classList.add("mysn-league-btn"),n.appendChild(c)}else if(e.mode==="card"||e.mode==="edit"){let c=this.cardOverlay(!0);n.appendChild(dt("div","mysn-news-head",`<b>${r?"Moje \xFAdaje":"Registr\xE1cia do ligy"}</b>`)),n.appendChild(dt("p","mysn-mixer-status","Vypl\u0148 vizitku uprostred obrazovky.")),c.appendChild(dt("div","mysn-news-head",`<b>${r?"\xDAdaje hr\xE1\u010Da":"Registr\xE1cia do ligy"}</b>`)),r||c.appendChild(dt("p","mysn-mixer-status",`${ee(i.season.name)}, do konca ${i.season.daysLeft} dn\xED. Po registr\xE1cii za\u010D\xEDna\u0161 so 147 bodmi v 4. lige (alebo pod\u013Ea poradia) a m\xF4\u017Ee\u0161 vyz\xFDva\u0165 hr\xE1\u010Dov.`));let u=document.createElement("form");u.className="mysn-form";let d=document.createElement("select");d.name="country",d.innerHTML='<option value="">Vyber krajinu\u2026</option>'+e.countries.map(([m,y])=>`<option value="${m}"${(o.country||"")===m?" selected":""}>${ee(y)}</option>`).join(""),u.append(a("Krajina *",d),a("Mesto",l("city",o.city,40,"napr\xEDklad Ru\u017Eomberok")),a("Prez\xFDvka v lige",l("nick",o.nick,24,e.user&&e.user.name||"")),(()=>{let m=document.createElement("select");return m.name="hand",m.innerHTML=`<option value="right"${o.hand!=="left"?" selected":""}>prav\xE1k</option><option value="left"${o.hand==="left"?" selected":""}>\u013Eav\xE1k</option>`,a("Hr\xE1m rukou",m)})(),a("Ob\u013E\xFAben\xE9 t\xE1go",l("cue",o.cue,30,"napr\xEDklad Majstrovsk\xE9")),a("O mne",l("about",o.about,160,"kr\xE1tko o sebe (najviac 160 znakov)")));let f=document.createElement("button");f.type="submit",f.className="mysn-btn mysn-primary",f.textContent=r?"Ulo\u017Ei\u0165 \xFAdaje":"Registrova\u0165 sa do ligy",u.appendChild(f),u.addEventListener("submit",m=>{m.preventDefault();let y=new FormData(u),g=Object.fromEntries(y.entries());if(!g.country){this.toast("Vyber krajinu.");return}g.edit=r?1:0,this.opts.onAction("register",g)}),u.addEventListener("keydown",m=>m.stopPropagation()),c.appendChild(u),c.appendChild(this.button(r?"Zavrie\u0165":"Zatia\u013E nie","officeHome"))}else if(e.mode==="cues"){let c=e.myCues.selected.length,u=e.myCues.selected.includes(e.myCues.def)?e.myCues.def:e.myCues.selected[0];n.appendChild(dt("h3","",`T\xE1g\xE1 do ligov\xE9ho z\xE1pasu: vybrat\xE9 ${c} zo 4`));let d=dt("div","mysn-cues");e.cues.forEach((f,m)=>{let y=e.myCues.selected.includes(f.id),g=y&&f.id===u,p=dt("div","mysn-cue"+(y?" mysn-pick":"")+(g?" mysn-def":""),`<span class="mysn-cue-n">${m+1}</span><b>${ee(f.name)}</b><span class="mysn-cue-cat">${ee(f.category)}</span><span>Sila ${Math.round(f.power*100)} %, d\u013A\u017Eka ${Math.round(f.len*100)} cm</span><em>${g?"\u2605 predvolen\xE9 v z\xE1pase":y?"v z\xE1pase (klik odoberie)":"klik: zobra\u0165 do z\xE1pasu"}</em>`);if(p.setAttribute("role","button"),p.addEventListener("click",E=>{E.stopPropagation(),this.opts.onAction("cueSelect",f.id)}),y&&!g){let E=this.button("\u2605 predvolen\xE9","cueDefault","S t\xFDmto t\xE1gom za\u010Dne\u0161 ligov\xFD z\xE1pas",f.id);E.classList.add("mysn-cue-defbtn"),p.appendChild(E)}d.appendChild(p)}),n.appendChild(d),n.appendChild(dt("p","mysn-mixer-status mysn-cue-hint","Klik na kartu t\xE1go zoberie do ligov\xE9ho z\xE1pasu alebo odoberie. \u2605 predvolen\xE9: s n\xEDm za\u010Dne\u0161 z\xE1pas, v z\xE1pase sa prep\xEDna len medzi t\xFDmito 4 t\xE1gami. F2 alebo Esc: sp\xE4\u0165 za st\xF4l."))}else{let c=i.me;n.appendChild(dt("div","mysn-news-head",`<b>Kancel\xE1ria: ${ee(o.nick||e.user&&e.user.name||"")}</b>`)),n.appendChild(dt("div","mysn-menu-note",`<b>${c.rank}.</b> miesto v <b>${c.league}. lige</b>, <b>${c.points}</b> bodov<br>V\xFDhry ${c.wins}, prehry ${c.losses}, najvy\u0161\u0161ia s\xE9ria ${c.best}`)),n.appendChild(dt("p","mysn-mixer-status",`${ee(i.season.name)}: do konca sez\xF3ny ${i.season.daysLeft} dn\xED. Hr\xE1\u010Dov v lige: ${i.players}.`));let u=dt("div","mysn-office-btns"),d=this.button("Tabu\u013Eky l\xEDg a vyzvanie hr\xE1\u010Da","leagueTables");d.classList.add("mysn-primary"),u.append(d,this.button("Moje t\xE1g\xE1 (4 do z\xE1pasu)","myCues"),this.button("Moje \xFAdaje","officeEdit"),this.button("Minul\xE9 sez\xF3ny","leagueArchive")),n.appendChild(u)}let h=dt("div","mysn-office-btns");h.appendChild(this.button("Sp\xE4\u0165 do herne","officeLeave")),n.appendChild(h),t.appendChild(n)}renderMixer(t,e){let n=dt("div","mysn-mixer"),i=e.station,r=dt("div","mysn-news-head",`<b>R\xE1dio${i?": "+ee(i.name):""}</b>`),o=this.button(e.on?"Vypn\xFA\u0165 (P)":"Zapn\xFA\u0165 (P)","radioToggle");o.classList.add("mysn-primary"),r.appendChild(o),n.appendChild(r),n.appendChild(dt("p","mysn-mixer-status",ee(e.status||(e.stations.length?"Vyber stanicu alebo stla\u010D Zapn\xFA\u0165.":"V My Player nie s\xFA \u017Eiadne r\xE1di\xE1."))));let a={vol:"Hlasitos\u0165",bass:"Basy",treble:"V\xFD\u0161ky",bal:"Vyv\xE1\u017Eenie"};for(let h of["vol","bass","treble","bal"]){let c=dt("label","mysn-mixer-row",`<span>${a[h]}</span>`),u=document.createElement("input");u.type="range",u.min="0",u.max="1",u.step="0.01",u.value=String(e.params[h]),u.addEventListener("input",d=>{d.stopPropagation(),this.opts.onAction("radioSet",{k:h,v:parseFloat(u.value)})}),c.appendChild(u),n.appendChild(c)}let l=dt("div","mysn-news mysn-stations");e.stations.forEach((h,c)=>{let u=dt("button","mysn-news-item"+(c===e.index&&e.on?" mysn-on":""),`<span>${ee([h.city,h.genre].filter(Boolean).join(", ")||"R\xE1dio")}</span>${ee(h.name)}`);u.type="button",u.addEventListener("click",d=>{d.stopPropagation(),this.opts.onAction("radioPick",c)}),l.appendChild(u)}),n.appendChild(l),t.appendChild(n),this._mixerBox=n}showView(t,e,n,i){this.viewBox||(this.viewBox=dt("div","mysn-view mysn-hidden"),this.root.appendChild(this.viewBox));let r=this.viewBox;if(r.classList.toggle("mysn-hidden",!t),r.classList.toggle("mysn-view-news",t==="news"||t==="magazine"||t==="chair"||t==="mixer"||t==="office"),this.root.classList.toggle("mysn-viewing",!!t),this.root.classList.toggle("mysn-in-office",t==="office"),r.classList.toggle("mysn-rack-panel",t==="rack"),t!=="rack"&&this.cuePanel&&this.cuePanel.classList.add("mysn-hidden"),r.classList.toggle("mysn-office-rack",t==="office"&&!!i&&!!i.office&&i.office.mode==="cues"),t!=="office"&&this.cardBox&&this.cardOverlay(!1),this._lastGame&&this.sync(this._lastGame,this._lastCam),!t)return;if(r.innerHTML="",t==="rack"){r.appendChild(dt("h3","","Stojan s t\xE1gami"));let h=dt("div","mysn-cues");e.forEach((c,u)=>{let d=dt("button","mysn-cue"+(c.id===n?" mysn-on":""),`<span class="mysn-cue-n">${u+1}</span><b>${c.name}</b><span class="mysn-cue-cat">${c.category}</span><span>\u0160pi\u010Dka ${c.tip}, sila ${Math.round(c.power*100)} %</span><span>D\u013A\u017Eka ${Math.round(c.len*100)} cm, Shift ${c.fine>0?"\xE1no":"nie"}</span><em>${c.note}</em>`);d.type="button",d.dataset.cue=c.id,d.addEventListener("click",f=>{f.stopPropagation(),this.opts.onAction("cuePick",c.id)}),h.appendChild(d)}),r.appendChild(h),this.renderCuePanel(i&&i.rack&&i.rack.sel||e.find(c=>c.id===n)||e[0],i&&i.rack||{})}let o=dt("div","mysn-view-foot"),a=h=>{let c=dt("a","mysn-news-item",`<span>${ee(h.s?h.s+(h.c?", "+h.c:""):h.c||"")}</span>${ee(h.t)}`);return c.href=h.u,c.target="_blank",c.rel="noopener",c};if(t==="office"&&i&&i.office&&this.renderOffice(r,i.office),t==="mixer"&&i&&i.radio&&this.renderMixer(r,i.radio),t==="chair"&&i){let h=dt("div","mysn-news"),c=(u,d,f,m)=>{if(!d||!d.length)return;let y=dt("div","mysn-news-head",`<b>${u}</b>`),g=this.button(f,m);g.classList.add("mysn-primary"),y.appendChild(g),h.appendChild(y),d.slice(0,9).forEach(p=>h.appendChild(a(p)))};c("HEDLAJNER",i.news,"Cel\xE9 (C)","reader"),c("Spr\xE1vy z RSS",i.rss,"Cel\xE9 (V)","readerRss"),r.appendChild(h)}if((t==="news"||t==="magazine")&&i&&i.length){let h=this.button("\u010C\xEDta\u0165 na cel\xFA obrazovku (C)","reader");h.classList.add("mysn-primary"),r.appendChild(h);let c=dt("div","mysn-news");i.slice(0,12).forEach(u=>{let d=dt("a","mysn-news-item",`<span>${ee(u.s?u.s+(u.c?", "+u.c:""):u.c||"")}</span>${ee(u.t)}`);d.href=u.u,d.target="_blank",d.rel="noopener",c.appendChild(d)}),r.appendChild(c)}let l={chair:"Poh\u013Ead z kresla: pohybom my\u0161i sa rozhliada\u0161, kolieskom pribli\u017Euje\u0161 (klikni, ak sa my\u0161 nezachytila). Vpravo spr\xE1vy: dr\u017E Ctrl a klikni na \u010Dl\xE1nok, C noviny Hedlajner a V spr\xE1vy z RSS na cel\xFA obrazovku. Pri hre o sk\xF3re \u010Das stoj\xED. F7 alebo Enter: sp\xE4\u0165 do hry.",news:"Titulka webu Hedlajner. Klik na titulok otvor\xED \u010Dl\xE1nok. F8, Enter alebo Esc: sp\xE4\u0165 do hry.",magazine:"Spr\xE1vy z RSS kan\xE1lov. Klik na titulok otvor\xED spr\xE1vu. F9, Enter alebo Esc: sp\xE4\u0165 do hry.",rack:"\u0160\xEDpky v\u013Eavo a vpravo vyberaj\xFA t\xE1go. Enter, F2 alebo Esc: sp\xE4\u0165 do hry.",board:"F1, Enter alebo Esc: sp\xE4\u0165 do hry.",score:"F4, Enter alebo Esc: sp\xE4\u0165 do hry.",office:"Kancel\xE1ria: my\u0161ou sa rozhliada\u0161, kolieskom pribli\u017Euje\u0161. Dr\u017E Ctrl: vo\u013En\xE1 my\u0161 na klikanie (aj na mapu hr\xE1\u010Dov). Esc: sp\xE4\u0165 do herne.",bar:"Poh\u013Ead z baru: my\u0161ou sa rozhliada\u0161, kolieskom pribli\u017Euje\u0161. Dr\u017E Ctrl a klikni na telef\xF3n (alebo M): zv\xE4\u010D\u0161\xED sa M\xF4j \xFA\u010Det. Pri hre o sk\xF3re \u010Das stoj\xED. F10 alebo Enter: sp\xE4\u0165 do hry.",mixer:"Mixpult: \u0161\xEDpky v\u013Eavo a vpravo menia stanicu, hore a dole hlasitos\u0165, P zapne alebo vypne r\xE1dio. Zvuk ide z reproduktorov v herni. F9, Enter alebo Esc: sp\xE4\u0165 do hry.",trophies:"Rebr\xED\u010Dek o najlep\u0161ie sk\xF3re: poh\xE1re pre troch najlep\u0161\xEDch, vpravo 4. a\u017E 10. miesto (body a celkov\xFD \u010Das). F8, Enter alebo Esc: sp\xE4\u0165 do hry.",chalk:"Kriedujem \u0161pi\u010Dku t\xE1ga. Fal\u0161e bud\xFA 3 \xFAdery 5x silnej\u0161ie."};if(o.appendChild(dt("span","",l[t]||"")),t!=="chalk"&&t!=="office"){let h=this.button("Sp\xE4\u0165 do hry","back");h.classList.add("mysn-primary"),o.appendChild(h)}r.appendChild(o)}showPower(t){let e=Math.round(t*100);this.powerFill.style.height=e+"%",this.powerKnob.style.top=e+"%",this.powerVal.textContent=e+" %"}sync(t,e){this._lastGame=t,this._lastCam=e;let n=t.stats,i=t.match;if(this.root.classList.toggle("mysn-online",!!i),this.root.classList.toggle("mysn-watching",!!t.spectating),t.spectating){let h=t.spectating;this.modeLabel.textContent=`Sledujem: ${h.title}`,this.stats.innerHTML=`<span>${ee(h.kind==="league"?"Ligov\xFD z\xE1pas":h.kind==="solo"?"O najlep\u0161ie sk\xF3re":"Tr\xE9ning")}</span>${h.info?`<span><b>${ee(h.info)}</b></span>`:""}<span>Esc: menu, Presta\u0165 sledova\u0165</span>`;return}this.modeLabel.textContent=this.root.classList.contains("mysn-in-office")?"Liga: kancel\xE1ria":i?i.league?"Ligov\xE1 partia":i.training?"Tr\xE9ning s priate\u013Eom":"Partia":t.solo?"O najlep\u0161ie sk\xF3re":"Tr\xE9ning";let r=t.solo;if(r&&!i){let h=Math.max(0,Math.round(r.time));this.stats.innerHTML=`<span>Body <b>${t.soloScore}</b></span><span>S\xE9ria <b>${r.rules.brk}</b></span><span>Najvy\u0161\u0161ia <b>${r.best}</b></span><span>\u010Cas <b>${Math.floor(h/60)}:${String(h%60).padStart(2,"0")}</b></span><span>Hr\xE1 sa na <b>${ee(t.onText())}</b></span><span>Fauly <b>${r.fouls}</b></span><span class="${this._chalk>0?"mysn-chalk-on":"mysn-chalk-off"}">Krieda <b>${this._chalk>0?this._chalk:"F3"}</b></span>`}else if(i&&i.rules){let h=d=>ee(String(i.players[d].name).slice(0,16)),c=i.rules,u=d=>c.turn===d&&!c.over?" mysn-turn":"";this.stats.innerHTML=`<span class="mysn-sc${u(i.me)}">${h(i.me)} <b>${c.scores[i.me]}</b></span><span class="mysn-sc${u(1-i.me)}">${h(1-i.me)} <b>${c.scores[1-i.me]}</b>${i.players[1-i.me].online===!1?" <i>mimo</i>":""}</span><span>Na rade <b>${c.turn===i.me?"ty":h(c.turn)}</b></span><span>Hr\xE1 sa na <b>${ee(t.onText())}</b></span><span>S\xE9ria <b>${c.brk}</b></span><span class="${this._chalk>0?"mysn-chalk-on":"mysn-chalk-off"}">Krieda <b>${this._chalk>0?this._chalk:"F3"}</b></span>`}else this.stats.innerHTML=`<span>\xDAdery <b>${n.shots}</b></span><span>Spadnut\xE9 <b>${n.points>=0?n.potted:0}</b></span><span>Body <b>${n.points}</b></span><span>S\xE9ria <b>${n.run}</b></span><span>Najlep\u0161ia <b>${n.best}</b></span><span class="${this._chalk>0?"mysn-chalk-on":"mysn-chalk-off"}">Krieda <b>${this._chalk>0?this._chalk:"F3"}</b></span>`;let o=t.state,a=o==="place"?"Posu\u0148 bielu gu\u013Eu v D a potvr\u010F tla\u010Didlom Hotovo.":o==="watch"&&!t.message?"Na rade je s\xFAper.":o==="wait"?"\u010Cak\xE1m na v\xFDsledok s\xFAperovho \xFAderu\u2026":t.message;this.msg.textContent=[this._net,a].filter(Boolean).join("  "),this.msg.classList.toggle("mysn-hidden",!this.msg.textContent);let l=t.state;this.btnPlace.classList.toggle("mysn-hidden",l!=="place"),this.btnSkip.classList.toggle("mysn-hidden",l!=="moving"),this.btnUndo.disabled=l==="moving"||!t.history.length||!!i||!!r,this.btnHand.disabled=l!=="aim"||!!i||!!r,this.btnReset.disabled=!!i||!!r,this.powerBox.classList.toggle("mysn-off",l!=="aim");for(let h of Object.keys(this.camBtns))this.camBtns[h].classList.toggle("mysn-on",h===e)}};var sa=class{constructor(){this.balls=is(),this.physics=new Ho(this.balls),this.state="aim",this.dir=0,this.history=[],this.respot=!0,this.stats={shots:0,potted:0,points:0,best:0,run:0},this.lastPots=[],this.message="",this.listeners=[]}get cue(){return this.balls[0]}on(t){this.listeners.push(t)}emit(t,e){for(let n of this.listeners)n(t,e)}reset(){let t=is();for(let e=0;e<t.length;e++)Object.assign(this.balls[e],t[e]);this.history=[],this.stats={shots:0,potted:0,points:0,best:this.stats.best,run:0},this.state="aim",this.dir=0,this.message="Nov\xE9 rozostavenie.",this.emit("change")}canShoot(){return this.state==="aim"}shoot(t,e=0,n=0){if(!this.canShoot())return!1;this.history.push({snap:Ri(this.balls),stats:{...this.stats},dir:this.dir}),this.history.length>30&&this.history.shift(),this.physics.events=[],this.physics.firstContact=null,this.lastPots=[];let i={dir:this.dir,power:t,side:e,top:n,cx:this.cue.p.x,cz:this.cue.p.z};return Vo(this.cue,this.dir,t,e,n),this.stats.shots++,this.state="moving",this.message="",this.emit("shot",{power:t,shot:i,before:this.history[this.history.length-1].snap}),!0}tick(t){if(this.state!=="moving")return[];let e=this.physics.advance(t),n=this.physics.events;this.physics.events=[];for(let i of n)i.type==="pot"&&this.lastPots.push(this.balls[i.a]);return e||this.settle(),n}settle(){let t=this.lastPots,e=t.includes(this.cue),n=0;for(let r of t)r.kind!=="white"&&(n+=Kn[r.kind].value);let i=t.filter(r=>r.kind!=="white").length;if(this.stats.potted+=i,this.stats.points+=n,i>0&&!e?(this.stats.run+=n,this.stats.best=Math.max(this.stats.best,this.stats.run)):this.stats.run=0,this.respot)for(let r of t)r.kind!=="white"&&r.kind!=="red"&&this.spotColour(r);this.balls.every(r=>r.kind==="white"||!r.on)?this.message="St\xF4l je \u010Dist\xFD. V\xFDborne! Stla\u010D \u201ENov\xE9 rozostavenie\u201C.":e?this.message="Biela spadla. Polo\u017E ju do D.":i?this.message=t.filter(r=>r.kind!=="white").map(r=>Kn[r.kind].name).join(", ")+(i>1?" v jamk\xE1ch.":" v jamke."):this.physics.firstContact||(this.message="Biela netrafila \u017Eiadnu gu\u013Eu."),e?this.startPlace():this.state="aim",this.emit("settle",{pots:t,points:n}),this.emit("change")}spotColour(t){let e=["black","pink","blue","brown","green","yellow"],n=(o,a)=>Wo(this.balls,o,a,t),i=null,r=Ln[t.kind];if(n(r.x,r.z))i=r;else for(let o of e)if(n(Ln[o].x,Ln[o].z)){i=Ln[o];break}if(!i){for(let o=r.x;o<1.78;o+=.002)if(n(o,r.z)){i={x:o,z:r.z};break}}i=i||r,t.p.x=i.x,t.p.z=i.z,t.on=!0,t.potted=null,t.moving=!1,t.v.x=t.v.z=0,t.w.x=t.w.y=t.w.z=0}startPlace(){let t=this.cue;t.on=!0,t.potted=null,t.moving=!1,t.v.x=t.v.z=0,t.w.x=t.w.y=t.w.z=0;let e=[[Je-.1,0],[Je-.1,.15],[Je-.1,-.15],[Je-.2,0]].find(([n,i])=>Wo(this.balls,n,i,t))||[Je-.15,.05];t.p.x=e[0],t.p.z=e[1],this.state="place",this.emit("change")}movePlace(t,e){if(this.state!=="place")return!1;let n=Math.min(t,Je),i=e,r=n-Je,o=Math.hypot(r,i),a=Ai-5e-4;return o>a&&(n=Je+r/o*a,i=i/o*a),!Eu(n,i)||!Wo(this.balls,n,i,this.cue)?!1:(this.cue.p.x=n,this.cue.p.z=i,!0)}confirmPlace(){this.state==="place"&&(this.state="aim",this.message="",this.emit("change"))}ballInHand(){this.state==="aim"&&(this.state="place",this.emit("change"))}undo(){if(this.state==="moving"||!this.history.length)return!1;let t=this.history.pop();return ss(this.balls,t.snap),this.stats=t.stats,this.dir=t.dir,this.state="aim",this.message="\xDAder vr\xE1ten\xFD.",this.emit("change"),!0}finish(){if(this.state!=="moving")return[];let t=[];for(let e=0;e<600&&this.state==="moving";e++)t=t.concat(this.tick(.05));return t}aimAtNearest(){let t=this.cue,e=null,n=1/0;for(let i of this.balls){if(i===t||!i.on)continue;let r=Math.hypot(i.p.x-t.p.x,i.p.z-t.p.z);r<n&&r>2*.02625&&(n=r,e=i)}e&&(this.dir=Math.atan2(e.p.z-t.p.z,e.p.x-t.p.x))}};var ls={red:1,yellow:2,green:3,brown:4,blue:5,pink:6,black:7},Ar=["yellow","green","brown","blue","pink","black"],fi={red:"\u010Derven\xE1",yellow:"\u017Elt\xE1",green:"zelen\xE1",brown:"hned\xE1",blue:"modr\xE1",pink:"ru\u017Eov\xE1",black:"\u010Dierna",white:"biela",colour:"farba"};function Hu(s=0){return{scores:[0,0],turn:s,on:"red",brk:0,over:!1,winner:null}}function kc(s){return s==="red"?"\u010Derven\xE1":s==="colour"?"\u013Eubovo\u013En\xE1 farba":s==="done"?"koniec framu":s==="any"?"\u013Eubovo\u013En\xE1 gu\u013Ea":fi[s]||s}function Dc(s,t){if(s.on==="red"||s.on==="colour")return t*8+(s.on==="colour"?7:0)+27;let e=Ar.indexOf(s.on);return e<0?0:Ar.slice(e).reduce((n,i)=>n+ls[i],0)}function Uc(s,t){let e={...s,scores:[...s.scores]},n=t.first||null,i=t.pots||[],r=i.includes("white"),o=i.filter(p=>p!=="white"),a=t.reds,l=e.turn,h="",c=0,u=4,d=[],f=n&&n!=="white"?n:null,m=p=>{p&&ls[p]&&(u=Math.max(u,ls[p]))};if(e.on==="red"){f?f!=="red"&&(h=`Prv\xE1 trafen\xE1 gu\u013Ea mus\xED by\u0165 \u010Derven\xE1 (trafen\xE1 ${fi[f]}).`,m(f)):h="Biela netrafila \u017Eiadnu gu\u013Eu.";for(let p of o)p!=="red"&&(d.push(p),m(p),h=h||`Spadla ${fi[p]}, hralo sa na \u010Derven\xFA.`);!h&&!r&&(c=o.filter(p=>p==="red").length)}else if(e.on==="colour"){let p=f&&f!=="red"?f:null;f?p||(h="Po \u010Dervenej treba trafi\u0165 farbu (trafen\xE1 \u010Derven\xE1)."):h="Biela netrafila \u017Eiadnu gu\u013Eu.",m(p);for(let E of o)E!=="red"&&d.push(E),E!==p&&(m(E==="red"?null:E),h=h||`Spadla ${fi[E]}, nominovan\xE1 bola ${fi[p]}.`);!h&&!r&&o.includes(p)&&(c=ls[p])}else{let p=e.on;m(p),f?f!==p&&(h=`Prv\xE1 trafen\xE1 gu\u013Ea mus\xED by\u0165 ${fi[p]} (trafen\xE1 ${fi[f]}).`,m(f)):h="Biela netrafila \u017Eiadnu gu\u013Eu.";for(let E of o)m(E),E!==p&&(h=h||`Spadla ${fi[E]}, hralo sa na ${fi[p]}.`);!h&&!r&&o.includes(p)&&(c=ls[p]);for(let E of o)E!=="red"&&!(E===p&&c>0)&&d.push(E)}r&&!h&&(h="Biela spadla do jamky.");let y="";if(h)e.scores[1-l]+=u,e.turn=1-l,e.brk=0,y=`Faul: ${h} S\xFAper dost\xE1va ${u} ${u<5?"body":"bodov"}.`,(e.on==="red"||e.on==="colour")&&(e.on=a>0?"red":"yellow");else if(c>0){if(e.scores[l]+=c,e.brk+=c,e.on==="red")e.on="colour";else if(e.on==="colour")e.on=a>0?"red":"yellow";else{let p=Ar.indexOf(e.on);e.on=p<Ar.length-1?Ar[p+1]:"done"}y=`+${c}, s\xE9ria ${e.brk}.`}else e.turn=1-l,e.brk=0,(e.on==="red"||e.on==="colour")&&(e.on=a>0?"red":"yellow"),y="Bez bodov, na rade je s\xFAper.";let g=s.on==="black";if(e.on==="done"||g&&h){if(e.scores[0]===e.scores[1])return e.on="black",e.turn=h?e.turn:1-l,d.includes("black")||d.push("black"),y+=" Rem\xEDza, \u010Dierna sa vracia na spot.",{state:e,points:c,foul:!!h,penalty:h?u:0,respot:d,inHand:!0,msg:y};e.over=!0,e.on="done",e.winner=e.scores[0]>e.scores[1]?0:1;let p=d.indexOf("black");p>=0&&d.splice(p,1)}return{state:e,points:c,foul:!!h,penalty:h?u:0,respot:d,inHand:r,msg:y}}var Rr="mySnookerSolo",ra=class extends sa{constructor(){super(),this.match=null,this.remote=!1,this.onNet=null,this.solo=null,this.onSolo=null}startSolo(t){this.match=null,this.remote=!1,this.history=[];let e=null;if(!t)try{e=JSON.parse(window.localStorage.getItem(Rr)||"null")}catch{e=null}if(e&&e.balls&&e.rules&&!e.done){if(ss(this.balls,e.balls),this.solo={rules:e.rules,time:e.time||0,shots:e.shots||0,fouls:e.fouls||0,best:e.best||0,done:!1},this.message="Pokra\u010Duje\u0161 v rozohranom frame.",e.inHand){this.startPlace();return}this.state="aim"}else{let n=is();for(let i=0;i<n.length;i++)Object.assign(this.balls[i],n[i]);this.solo={rules:Hu(0),time:0,shots:0,fouls:0,best:0,done:!1},this.message="Nov\xFD frame: potop \u010Do najviac bodov. Rozb\xEDja\u0161 z D.",this.saveSolo(!0),this.startPlace();return}this.aimAtNearest(),this.emit("change")}get soloScore(){let t=this.solo&&this.solo.rules;return t?Math.max(0,t.scores[0]-t.scores[1]):0}saveSolo(t){if(this.solo)try{if(this.solo.done){window.localStorage.removeItem(Rr);return}let e=this.solo;window.localStorage.setItem(Rr,JSON.stringify({balls:Ri(this.balls),rules:e.rules,time:Math.round(e.time),shots:e.shots,fouls:e.fouls,best:e.best,inHand:!!t}))}catch{}}saveSoloTime(){let t=this.solo;if(!(!t||t.done))try{let e=JSON.parse(window.localStorage.getItem(Rr)||"null");e&&!e.done&&(e.time=Math.round(t.time),window.localStorage.setItem(Rr,JSON.stringify(e)))}catch{}}stopSolo(){this.solo&&this.saveSolo(this.state==="place"),this.solo=null,super.reset()}settleSolo(){let t=this.solo,e=this.lastPots.map(l=>l.kind),n=this.balls.filter(l=>l.kind==="red"&&l.on).length,i=this.physics.firstContact,r=Uc(t.rules,{first:i?i.kind:null,pots:e,reds:n});for(let l of r.respot){let h=this.balls.find(c=>c.kind===l);h&&this.spotColour(h)}let o={...r.state,turn:0};r.foul&&(t.fouls++,o.brk=0),t.rules=o,t.shots++,t.best=Math.max(t.best,o.brk);let a=this.soloScore;if(o.over||o.on==="done"){t.done=!0,t.rules.over=!0,this.state="over",this.message=`Frame je dohran\xFD: ${a} ${a===1?"bod":a<5&&a>1?"body":"bodov"} za ${Nc(t.time)}, najvy\u0161\u0161ia s\xE9ria ${t.best}.`,this.saveSolo(!1),this.emit("settle",{pots:this.lastPots,points:r.points}),this.emit("change"),this.onSolo&&this.onSolo({points:a,seconds:Math.round(t.time),shots:t.shots,fouls:t.fouls,brk:t.best});return}if(this.message=r.points>0?`+${r.points}, s\xE9ria ${o.brk}.`:"Bez bodov, s\xE9ria sa skon\u010Dila.",r.foul&&(this.message=`Faul: ${r.msg.replace(/^Faul: /,"").replace(/ Súper dostáva (\d+) (body|bodov)\./,"")} M\xEDnus ${r.penalty} ${r.penalty<5?"body":"bodov"}.`),this.emit("settle",{pots:this.lastPots,points:r.points}),r.inHand){this.saveSolo(!0),this.startPlace();return}this.state="aim",this.saveSolo(!1),this.emit("change")}get online(){return!!this.match}get myTurn(){let t=this.match;return!t||t.turn===t.me&&!t.rules.over}canShoot(){return!this.spectating&&super.canShoot()&&(!this.match||this.myTurn&&!this.remote&&this.match.status==="active")}startMatch(t){this.solo&&this.stopSolo(),this.match={id:t.id,me:t.me,seq:-1,turn:0,rules:null,inHand:!1,players:t.players,status:t.status,league:!!t.league,training:!!t.training,best:[0,0]},this.history=[],this.remote=!1,this.applyState(t.state,t.seq)}endMatch(){this.match=null,this.solo=null,this.remote=!1,this.reset()}applyState(t,e){let n=this.match;if(t){if(t.balls)ss(this.balls,t.balls);else{let i=is();for(let r=0;r<i.length;r++)Object.assign(this.balls[r],i[r])}for(let i of this.balls)i.moving=!1;if(n.seq=e,n.rules={...t.rules,scores:[...t.rules.scores]},n.turn=n.rules.turn,n.inHand=!!t.inHand,n.best=Array.isArray(t.best)?[...t.best]:[0,0],n.last=t.last||null,this.remote=!1,this.message=t.msg||"",n.rules.over)this.state="over";else if(n.turn===n.me){if(n.inHand){this.startPlace();return}this.state="aim",this.aimAtNearest()}else n.inHand&&this.startPlace(),this.state="watch";this.emit("change")}}shoot(t,e=0,n=0){if(!this.canShoot())return!1;let i=this.cue,r={dir:this.dir,power:t,side:e,top:n,cx:i.p.x,cz:i.p.z};return super.shoot(t,e,n)?(this.match&&this.onNet&&this.onNet("shot",{seq:this.match.seq+1,shot:r}),!0):!1}playRemote(t,e=!1){let n=this.cue;n.on=!0,n.potted=null,n.p.x=t.cx,n.p.z=t.cz,this.dir=t.dir,this.physics.events=[],this.physics.firstContact=null,this.lastPots=[],Vo(n,t.dir,t.power,t.side,t.top),this.remote=!e,this.state="moving",this.message="",this.emit("shot",{power:t.power})}spectateBegin(t){this._saved={snap:Ri(this.balls),state:this.state==="moving"?"aim":this.state,solo:this.solo},this.solo=null,this.spectating=t,this.state="watch",this.message="",this.emit("change")}spectateEnd(){let t=this._saved;if(this.spectating=null,t){ss(this.balls,t.snap);for(let e of this.balls)e.moving=!1;this.solo=t.solo,this.state=t.state==="watch"?"aim":t.state}this._saved=null,this.message="",this.emit("change")}spectateSet(t){if(t)ss(this.balls,t);else{let e=is();for(let n=0;n<e.length;n++)Object.assign(this.balls[n],e[n])}for(let e of this.balls)e.moving=!1;this.state="watch",this.emit("change")}settle(){if(this.spectating){this.state="watch",this.emit("change");return}if(this.solo&&!this.match){this.settleSolo();return}if(!this.match){super.settle();return}if(this.remote){this.remote=!1,this.state="wait",this.emit("change");return}let t=this.match,e=this.lastPots.map(h=>h.kind),n=this.balls.filter(h=>h.kind==="red"&&h.on).length,i=this.physics.firstContact,r=t.training?this.judgeTraining(t,e,n):Uc(t.rules,{first:i?i.kind:null,pots:e,reds:n});for(let h of r.respot){let c=this.balls.find(u=>u.kind===h);c&&this.spotColour(c)}r.inHand&&(this.cue.on=!1);let o=t.players.map(h=>h.name),a={balls:Ri(this.balls),rules:r.state,inHand:r.inHand,msg:`${o[t.me]}: ${r.msg}`+(r.state.over?` Koniec partie, v\xED\u0165az: ${o[r.state.winner]}.`:r.state.turn!==t.me?` Na rade je ${o[r.state.turn]}.`:""),last:{by:t.me,points:r.points,foul:r.foul,penalty:r.penalty,brk:r.state.brk},best:(()=>{let h=[...t.best||[0,0]];return h[t.me]=Math.max(h[t.me]||0,r.state.turn===t.me?r.state.brk:t.rules.brk+r.points),h})()},l=t.seq+1;this.applyState(a,l),this.emit("settle",{pots:this.lastPots,points:r.points}),this.onNet&&this.onNet("settle",{seq:l,state:a,points:r.points,foul:r.foul})}judgeTraining(t,e,n){let i=t.rules,r=e.includes("white"),o=0;for(let m of e)m!=="white"&&(o+=ls[m]||0);let a=n>0?e.filter(m=>m!=="white"&&m!=="red"):[],l=[...i.scores];l[t.me]+=o;let h=o>0&&!r,u=this.balls.filter(m=>m.kind!=="white"&&m.on).length+a.length===0,d={...i,scores:l,on:"any",brk:h?i.brk+o:0,turn:h||u?t.me:1-t.me,over:u,winner:u?l[1]>l[0]?1:0:null},f=(o?`${o} ${o===1?"bod":o<5?"body":"bodov"}.`:"Ni\u010D nespadlo.")+(r?" Biela spadla, s\xFAper ju polo\u017E\xED do D.":"");return{state:d,points:o,foul:!1,penalty:0,respot:a,inHand:r,msg:f}}onText(){return this.solo?kc(this.solo.rules.on):this.match&&this.match.rules?kc(this.match.rules.on):""}undo(){return this.match||this.solo?!1:super.undo()}reset(){this.match||this.solo||super.reset()}ballInHand(){!this.match&&!this.solo&&super.ballInHand()}};function Nc(s){let t=Math.max(0,Math.round(s)),e=Math.floor(t/3600),n=Math.floor(t%3600/60),i=String(t%60).padStart(2,"0");return e?`${e}:${String(n).padStart(2,"0")}:${i}`:`${n}:${i}`}var zc=class{constructor(t){this.base=t.restUrl||"/wp-json/my-snooker/v1/",this.nonce=t.nonce||"",this.down=!1}async call(t,e,n="POST"){let i;try{i=await fetch(this.base+t,{method:n,credentials:"same-origin",cache:"no-store",headers:{"Content-Type":"application/json","X-WP-Nonce":this.nonce},body:e?JSON.stringify(e):void 0})}catch{this.down=!0;let a=new Error("Spojenie so serverom sa preru\u0161ilo.");throw a.net=!0,a}this.down=!1;let r=await i.json().catch(()=>null);if(!i.ok){let o=new Error(r&&r.message||"Chyba servera "+i.status);throw o.status=i.status,o}return r}},oa=class{constructor(t,e,n){this.cfg=t,this.net=new zc(t),this.game=e,this.hooks=n,this.data={live:[],invites:[],outgoing:null,paused:[]},this.lobbyOpen=!1,this.matchId=0,this.info=null,this.queue=[],this.sending=!1,this.played=new Set,this.pendingInfo=null,this.lastAimv=-1,this.aimTarget=null,this._aimSent="",this._aimT=0,this._pollT=0,this._polling=!1,this.oppOnline=!0,e.onNet=(i,r)=>this.send(i,r),this.ping(),this._pingTimer=setInterval(()=>this.ping(),5e3)}get inMatch(){return!!this.game.match}async ping(){try{let t=await this.net.call("ping",{state:this.inMatch?"match":this.watching?"watch":this.queueing?"queue":this.lobbyOpen?"lobby":"training"});t.nonce&&(this.net.nonce=t.nonce);let e=(this.data.invites||[]).map(i=>i.id).join(",");this.data=t;let n=(t.invites||[]).map(i=>i.id).join(",");n&&n!==e&&!this.inMatch&&this.hooks.invite(t.invites[0]),t.outgoing&&t.outgoing.status==="declined"&&this._waitFor===t.outgoing.id&&(this._waitFor=0,this.hooks.toast(`${t.outgoing.to.name}: pozv\xE1nka odmietnut\xE1.`)),t.match&&!this.inMatch&&this.join(t.match),this.hooks.lobby(t)}catch{this.hooks.status()}}async invite(t,e=!1,n=!1){try{let i=await this.net.call("invite",{user:t,league:e?1:0,training:n?1:0});this._waitFor=i.id,await this.ping()}catch(i){this.hooks.toast(i.message)}}async cancelInvite(){let t=this.data.outgoing;t&&(this._waitFor=0,await this.net.call("cancel",{id:t.id}).catch(()=>null),await this.ping())}async answer(t,e){try{await this.net.call("answer",{id:t,accept:e?1:0}),this.data.invites=(this.data.invites||[]).filter(n=>n.id!==t),e?await this.join(t):await this.ping()}catch(n){this.hooks.toast(n.message),this.ping()}}async resume(t){try{await this.net.call("resume",{id:t}),await this.join(t)}catch(e){this.hooks.toast(e.message)}}async leave(t){let e=this.matchId;e&&(await this.flush(),await this.net.call("leave",{id:e,mode:t}).catch(()=>null),this.stopMatch(t==="resign"?"Partia je vzdan\xE1.":"Partia je preru\u0161en\xE1. Pokra\u010Dova\u0165 sa d\xE1 v ponuke Posla\u0165 v\xFDzvu."))}roomPost(t){return this.net.call("room",t).catch(()=>null)}async rooms(){try{return(await this.net.call("rooms",null,"GET")).rooms||[]}catch{return[]}}watchStart(t,e){this.watchStop(),this.watching={type:t,id:e};let n=async()=>{if(!(!this.watching||this._watchBusy)){this._watchBusy=!0;try{let i=await this.net.call((t==="match"?"watch/":"room/")+e,null,"GET");this.watching&&this.hooks.watch&&this.hooks.watch(t,i)}catch(i){this.hooks.watch&&this.hooks.watch(t,{closed:!0,error:i.message})}this._watchBusy=!1}};n(),this._watchT=setInterval(n,500)}watchStop(){clearInterval(this._watchT),this.watching=null}async seek(t){if(clearInterval(this._queueT),this.queueing=!!t,!t)return await this.net.call("league/queue",{on:0}).catch(()=>null),null;let e=async()=>{if(this.queueing)try{let n=await this.net.call("league/queue",{on:1});n.matched?(this.queueing=!1,clearInterval(this._queueT),this.hooks.queue&&this.hooks.queue("found"),await this.ping()):this.hooks.queue&&this.hooks.queue("wait",n.waiting||1)}catch(n){this.queueing=!1,clearInterval(this._queueT),this.hooks.queue&&this.hooks.queue("error",n.message)}};return await e(),this.queueing&&(this._queueT=setInterval(e,3e3)),!0}async join(t){if(!this._joining){this._joining=!0;try{let e=await this.net.call("match/"+t+"?t="+Date.now(),null,"GET");if(e.status!=="active"){this.hooks.toast(e.status==="paused"?"Partia je preru\u0161en\xE1.":"Partia u\u017E skon\u010Dila.");return}this.matchId=e.id,this.info=e,this.played=new Set,this.queue=[],this.lastAimv=e.aimv,this.game.startMatch(e),this.hooks.started(e),this.recover(e),this.oppOnline=e.players[1-e.me].online}catch(e){this.hooks.toast(e.message)}finally{this._joining=!1}}}recover(t){let e=t.shot;e&&e.seq===t.seq+1&&(this.played.add(e.seq),this.game.playRemote(e,e.by===t.me))}stopMatch(t){let e=(t||"")+(this.stopMatchText||"");this.stopMatchText="",this.matchId=0,this.info=null,this.queue=[],this.aimTarget=null,this.game.endMatch(),this.hooks.ended(e)}send(t,e){this.matchId&&(this.queue.push({type:t,d:{id:this.matchId,...e}}),this.flush())}async flush(){return this.sending?this._flushP:(this.sending=!0,this._flushP=(async()=>{for(;this.queue.length;){let t=this.queue[0];try{await this.net.call(t.type,t.d),this.queue.shift()}catch(e){e.net||e.status&&e.status>=500?(this.hooks.status(),await new Promise(n=>setTimeout(n,2e3))):this.queue.shift()}}this.sending=!1,this.hooks.status()})(),this._flushP)}update(t,e){if(!this.matchId)return;let n=this.game,i=performance.now(),r=this._lastNow?i-this._lastNow:0;this._lastNow=i,this._pollT+=r;let o=n.state==="watch"||n.state==="wait"||n.remote;if(!this._polling&&this._pollT>=(o?700:2500)&&(this._pollT=0,this.poll()),this._aimT+=r,e&&n.myTurn&&(n.state==="aim"||n.state==="place")&&this._aimT>=300){let a={seq:n.match.seq,dir:+e.dir.toFixed(4),cx:+e.cx.toFixed(4),cz:+e.cz.toFixed(4),pull:+e.pull.toFixed(3),side:+e.side.toFixed(2),top:+e.top.toFixed(2),place:n.state==="place"?1:0},l=JSON.stringify(a);l!==this._aimSent&&(this._aimT=0,this._aimSent=l,this.net.call("aim",{id:this.matchId,aim:a}).catch(()=>null))}if(this.pendingInfo&&n.state==="wait"){let a=this.pendingInfo;this.pendingInfo=null,this.applyInfo(a)}}async poll(){this._polling=!0;try{let t=await this.net.call("match/"+this.matchId+"?t="+Date.now(),null,"GET");this.applyInfo(t)}catch(t){(t.status===403||t.status===404)&&this.stopMatch("Partia sa nena\u0161la."),this.hooks.status()}finally{this._polling=!1}}applyInfo(t){let e=this.game;if(!e.match||t.id!==this.matchId)return;this.info=t;let n=t.players[1-t.me];if(n.online!==this.oppOnline&&(this.oppOnline=n.online,this.hooks.status()),e.match.players=t.players,e.match.status=t.status,t.status==="finished"&&!(t.seq>e.match.seq)){let i=t.winner===t.players[t.me].id,r=t.league?` Liga: ${i?"+":"-"}${Math.max(0,t.delta)} bodov.`:"";this.lastLeague=!!t.league,this.stopMatchText=r,this.stopMatch(t.result==="resign"?i?`${n.name} sa vzd\xE1va partie. V\xED\u0165azstvo je tvoje!`:"Partia je vzdan\xE1.":i?`V\xED\u0165azstvo je tvoje! Sk\xF3re ${t.scores[t.me]} : ${t.scores[1-t.me]}.`:`V\xED\u0165az partie: ${n.name}, sk\xF3re ${t.scores[1-t.me]} : ${t.scores[t.me]}.`);return}if(t.status==="paused"){this.stopMatch(`Partia je preru\u0161en\xE1 (${this.oppOnline?"s\xFAper ju preru\u0161il":"s\xFAper dlho neodpovedal"}). Dokon\u010Di\u0165 sa d\xE1 v ponuke Posla\u0165 v\xFDzvu, Rozohran\xE9 partie.`);return}if(t.seq>e.match.seq){if(e.state==="moving"){this.pendingInfo=t;return}if(this.queue.length)return;this.aimTarget=null,e.applyState(t.state,t.seq),t.status==="finished"&&this.applyInfo(t);return}if(t.shot&&t.shot.seq===e.match.seq+1&&t.shot.by!==t.me&&!this.played.has(t.shot.seq)&&e.state==="watch"){this.played.add(t.shot.seq),this.aimTarget=null,e.playRemote(t.shot,!1);return}t.aim&&t.aimv!==this.lastAimv&&e.state==="watch"&&t.aim.seq===e.match.seq&&(this.lastAimv=t.aimv,this.aimTarget=t.aim)}async league(){try{return await this.net.call("league?t="+Date.now(),null,"GET")}catch{return null}}async leagueArchive(){try{return await this.net.call("league/archive?t="+Date.now(),null,"GET")}catch{return null}}async scores(){try{return await this.net.call("scores?t="+Date.now(),null,"GET")}catch{return null}}async saveScore(t){for(let e=0;e<5;e++)try{return await this.net.call("score",t)}catch(n){if(!n.net)return{error:n.message};await new Promise(i=>setTimeout(i,3e3))}return{error:"Sk\xF3re sa nepodarilo ulo\u017Ei\u0165, spojenie so serverom nefunguje."}}statusText(){return this.net.down?"Spojenie so serverom sa preru\u0161ilo, sk\xFA\u0161am znova. Partia je ulo\u017Een\xE1.":this.inMatch&&!this.oppOnline?"S\xFAper je mimo hry, \u010Dak\xE1m na jeho n\xE1vrat. Po 10 min\xFAtach sa partia preru\u0161\xED a d\xE1 sa v nej pokra\u010Dova\u0165 nesk\xF4r.":""}};var Wu="mySnookerSettings",Vu=.5;function dx(){let t={lines:!1,quality:/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)?"low":"high",volume:.8,respot:!0,contact:!0,camera:"cue",cue:"club"};try{let e=window.localStorage.getItem(Wu);if(e)return{...t,...JSON.parse(e)}}catch{}return t}function Cr(s){try{window.localStorage.setItem(Wu,JSON.stringify(s))}catch{}}function fx(){try{let s=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(s.getContext("webgl2")||s.getContext("webgl")))}catch{return!1}}function px(s,t={}){if(!fx())return s.innerHTML='<div class="mysn-nogl">Tento prehliada\u010D nepodporuje 3D grafiku (WebGL). Sk\xFAs aktu\xE1lny Chrome, Firefox, Edge alebo Safari.</div>',null;let e=dx();delete e.guide,e.lines=e.lines===!0;let n=e.quality==="high",i=new vo({antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,n?2:1.25)),i.outputColorSpace=de,i.toneMapping=uc,i.toneMappingExposure=1.05,i.shadowMap.enabled=n,i.shadowMap.type=hc,i.domElement.className="mysn-canvas",s.appendChild(i.domElement);let r=new Fs;Lu(r,e.quality);let o=new Set(r.children),a=Cu(r,e.quality,{news:t.news,rss:t.rss,site:t.site,user:t.user}),l=r.children.filter(S=>!o.has(S)),h=Iu(i);r.add(h.group);let c=new ra,u=t.user||null;c.respot=!!e.respot,c.aimAtNearest();let d=new Os(i),f=d.fromScene(new Fo,.04).texture;d.dispose();let m=new jo(r,c.balls,e.quality,f),y=Object.assign({selected:["club","short","break","soft"],def:"club",custom:{}},e.myCues||{}),g=[],p=S=>{if(typeof S=="string"&&S[0]==="u"){let w=g.find(ot=>"u"+ot.id===S);if(w)return Tr(w)}return Ci(S)},E=()=>[...Sn,...g.map(Tr)],v=()=>Sn.map(S=>{let w=g.find(ot=>ot.base===S.id&&ot.data&&ot.data.rack);return w?Tr(w):S}),_=10,V=()=>({rack:{user:!!u,ownCount:g.length,ownMax:_,own:g.map(Tr),sel:x}}),L=()=>{a.setRackSpecs(v()),a.selectCue(x.id,x.base)},U={},z=S=>{clearTimeout(U[S.id]),U[S.id]=setTimeout(()=>J&&J.net.call("cues/save",{id:S.id,name:S.name,data:S.data}).catch(w=>P.toast(w.message)),600)},T=async()=>{if(!J)return;let S=await J.net.call("cues",null,"GET").catch(()=>null);S&&Array.isArray(S.cues)&&(g=S.cues,e.cue&&e.cue[0]==="u"&&x.id!==e.cue&&g.some(w=>"u"+w.id===e.cue)?un(e.cue):zt==="rack"&&P.showView("rack",v(),x.id,V()),L())},x=p(e.cue),A=new Zo(r,x);a.selectCue(x.id,x.base);let q=new Ko(r),k=new ta(i);e.camera="cue",k.setMode("cue");let W=new na;W.setVolume(e.volume);let G=new Set(r.children),O=ku(r),K=[...l,...r.children.filter(S=>!G.has(S))];for(let S of o)S.isMesh&&S.geometry&&S.geometry.type==="PlaneGeometry"&&S.rotation.x<-1&&K.push(S);let $=Du(r,e.quality),ht=Uu(r),yt="",wt=null,Ut=()=>({office:{league:st,mode:yt,countries:Cc,cues:E(),myCues:y,cue:wt,user:u}}),At=()=>{ht.setRack(Sn.map(S=>p(S.id)),y.selected,y.selected.includes(y.def)?y.def:y.selected[0]),zt==="office"&&P.showView("office",E(),x.id,Ut())},Z=S=>{e.myCues=y,Cr(e),x&&y.custom[x.id]&&(x=p(x.id),A.setSpec(x),at.setCue(x),P.setCueInfo(x)),S?ht.setRack(Sn.map(w=>p(w.id)),y.selected,y.selected.includes(y.def)?y.def:y.selected[0]):At()},ct=async()=>{if(!J)return null;let S=await J.league();if(S){st=S,a.setLeague(S),ht.setBoards(S,[]);let w=S.player&&Yo(S.player.country);ht.setCard(S,u&&u.name,w?w.name:"");let ot=[];for(let Tt of[1,2,3,4])for(let Pt of S.leagues&&S.leagues[Tt]||[]){let le=Yo(Pt.country);if(le){let te=ot.filter(Kt=>Kt.code===le.code).length;ot.push({id:Pt.user.id,name:Pt.user.name,league:Pt.league,points:Pt.points,rank:Pt.rank,code:le.code,lat:le.lat+te%3*1.6,lon:le.lon+Math.floor(te/3)*2.2+te%3*1.2})}}Dt=ot,ht.setMap(ot,u&&u.id),At()}return S},Dt=[],gt=new Set(["chair","bar","office"]),Lt="",Gt="Kancel\xE1ria: F1 n\xE1stenka s kl\xE1vesmi za tebou, F8 vizitka (registr\xE1cia), F9 alebo dvere \u0160TADI\xD3N: vyh\u013Eada\u0165 z\xE1pas. Esc sp\xE4\u0165 do herne.",Yt="home",ne=document.createElement("div");ne.className="mysn-fade",s.appendChild(ne);let D=!1,et=0,R=0,vt=null,pt=0,Ct=0,bt="",Xt=null,Ht=()=>c.solo?`${c.soloScore} b., s\xE9ria ${c.solo.rules.brk}`:`body ${c.stats.points}, s\xE9ria ${c.stats.run}`,C=(S,w)=>{if(!J||!u)return;let ot=D&&!c.match&&!c.spectating&&S!=="close",Tt=c.solo?"solo":"training";if(!ot){J.roomPost({door:0,kind:Tt,seq:et});return}S==="shot"&&(et++,vt={before:w.before,shot:w.shot});let Pt={...vt||{},info:Ht()};(S==="settle"||S==="door"||S==="change")&&(R++,Pt.after=Ri(c.balls),Pt.ver=R,Pt.place=c.state==="place"?1:0),J.roomPost({door:1,kind:Tt,seq:et,data:Pt})},M="",Q=()=>{let S=c.spectating,w=Yt==="league"?"blue":S?S.kind==="solo"?"green":"red":!c.match&&!c.solo||c.match&&c.match.training?"red":"green";w!==M&&(M=w,h.setFelt(w),P.feltColor={green:"#1d6b34",red:"#a1303a",blue:"#2a64bc"}[w])},lt=S=>{S!==Yt&&(ne.classList.add("mysn-on"),setTimeout(()=>{Yt=S;let w=S==="league";for(let ot of K)ot.visible=!w;$.root.visible=w,Q(),r.background.setHex(w?131846:790292),w&&zt&&on(),ue(),mt(),setTimeout(()=>ne.classList.remove("mysn-on"),60)},350))},mt=()=>{let S=c.match,w=st,ot=w&&w.season?`${w.season.name} \xB7 do konca ${w.season.daysLeft} dn\xED`:"My Snooker liga";S&&S.rules?$.setScreen({title:S.league?"LIGOV\xC1 PARTIA":"PARTIA",names:S.players.map(Tt=>Tt.name),scores:S.rules.scores,turn:S.rules.over?-1:S.rules.turn,brk:S.rules.brk,on:c.onText(),footer:ot}):$.setScreen({title:"MY SNOOKER LIGA",idle:w&&w.me?`${w.me.league}. liga \xB7 ${w.me.rank}. miesto \xB7 ${w.me.points} bodov`:"Vyzvi hr\xE1\u010Da z ligy",footer:ot})},st=null,$t=-1,N=new qo(t.radio,()=>(W.unlock(),W.ctx));e.radio&&typeof e.radio=="object"&&(Object.assign(N.params,e.radio.params||{}),N.index=Math.min(N.stations.length-1,e.radio.index??-1));let ft=S=>{O.setControls(N.params,N.station?N.station.name:"",N.on),e.radio={params:N.params,index:N.index},Cr(e),zt==="mixer"&&S!=="param"&&P.showView("mixer",Sn,x.id,{radio:N})};N.onChange=ft,O.setControls(N.params,N.station?N.station.name:"",!1);let H=document.createElement("div");s.appendChild(H);let Y={side:0,top:0},it=!1,xt=!1,Nt=!1,Mt=-1e9,Vt=!1,jt=!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),zt=null,F={yaw:0,pitch:0},Ot=!1,ut=3,_t=.2,Wt=0,Ft=-1,he=0,Ae={chalkFreeze:null},Ne={s:.022,h:.0115,d:.009},me=new ce;{let S=new Et({color:16052970,roughness:.8}),w=new Et({color:3108822,roughness:.95}),ot=(Fe,fe,re,Ge,We,Xn,Te)=>{let sn=new Bt(new kt(Fe,fe,re),Te);sn.position.set(Ge,We,Xn),me.add(sn)},{s:Tt,h:Pt,d:le}=Ne,te=-Tt/2+le/2;ot(Tt-le,Tt,Tt,le/2,0,0,S),ot(le,(Tt-Pt)/2,Tt,te,(Tt+Pt)/4,0,S),ot(le,(Tt-Pt)/2,Tt,te,-(Tt+Pt)/4,0,S),ot(le,Pt,(Tt-Pt)/2,te,0,(Tt+Pt)/4,S),ot(le,Pt,(Tt-Pt)/2,te,0,-(Tt+Pt)/4,S),ot(.0012,Pt,Pt,-Tt/2+le-6e-4,0,0,w);let Kt=8e-4;ot(le,Kt,Pt,te,Pt/2-Kt/2,0,w),ot(le,Kt,Pt,te,-Pt/2+Kt/2,0,w),ot(le,Pt,Kt,te,0,Pt/2-Kt/2,w),ot(le,Pt,Kt,te,0,-Pt/2+Kt/2,w)}me.visible=!1,me.rotation.order="YXZ";let He={up:.1,back:.22};r.add(me);let De=()=>{let S=c.match,w=S&&S.rules?{names:S.players.map(le=>String(le.name).slice(0,18)),scores:S.rules.scores,turn:S.rules.over?-1:S.rules.turn,brk:S.rules.brk,on:c.onText(),left:Dc(S.rules,c.balls.filter(le=>le.kind==="red"&&le.on).length)}:null,ot=c.solo,Tt=c.balls.filter(le=>le.kind==="red"&&le.on).length,Pt=ot&&!S?[["Body",c.soloScore],["S\xE9ria / najvy\u0161\u0161ia",`${ot.rules.brk} / ${ot.best}`],["\u010Cas",Nc(ot.time)],["Hr\xE1 sa na",c.onText()],["Zost\xE1va na stole",Dc(ot.rules,Tt)]]:null;a.updateScore(c.stats,{cue:x.name,chalk:Wt,mode:w?"Partia cez internet":ot?"O najlep\u0161ie sk\xF3re":"Tr\xE9ning",match:w,rows:Pt})},Ve=S=>{if(zt===S){on();return}if(!(c.state==="moving"||Ft>=0)&&!(S==="chalk"&&c.state!=="aim")){if(zt==="office"&&S!=="office"&&(N.setSpeakers(null),k.noClamp=!1,k.snapNext=!0,k.minViewZoom=1,k.setViewZoom(1),P.openLeague(!1)),zt=S,a.setRackView(S==="rack"),at.blocked=!0,S!=="chalk"&&!gt.has(S)&&at.uncapture(),P.showMenu(!1),S==="chalk"){let w=Math.cos(c.dir),ot=Math.sin(c.dir),Tt=A.pivot.position.clone().add(new I(-w*He.back,He.up,-ot*He.back)),Pt=Tt.clone().add(new I(-ot*.22-w*.08,.09,w*.22-ot*.08));k.setView(Pt,Tt),Ft=0,he=performance.now(),me.visible=!0}else{let w=S==="mixer"?O.view:S==="office"?ht.seat:a[S];if(k.setView(w.pos,w.look.clone()),S==="office"&&(k.noClamp=!0,k.jump(),Lt="",N.setSpeakers(ht.speakers),k.minViewZoom=.85,k.setViewZoom(.85)),gt.has(S)){let ot=w.look.clone().sub(w.pos);F.yaw=Math.atan2(ot.z,ot.x),F.pitch=Math.atan2(ot.y,Math.hypot(ot.x,ot.z))}}S==="trophies"&&b(),P.showView(S,S==="rack"?v():E(),x.id,S==="office"?Ut():S==="rack"?V():S==="mixer"?{radio:N}:S==="magazine"?a.rssItems:S==="chair"?{news:a.newsItems,rss:a.rssItems}:a.newsItems)}},on=()=>{if(!zt)return;let S=zt;zt=null,a.setRackView(!1),at.blocked=!u&&!Nt,k.minViewZoom=1,k.setViewZoom(1),S==="office"&&(N.setSpeakers(null),Lt="",J&&J.queueing&&(J.seek(!1),ht.setDoor("")),k.noClamp=!1,k.snapNext=!0,P.openLeague(!1)),P.toggleReader(null),P.openPhone(!1),Ft=-1,me.visible=!1,k.setMode(c.state==="place"||Ot?"top":"cue"),P.showView(null),at.capture()},un=S=>{x=p(S),e.cue=x.id,Cr(e),A.setSpec(x),at.setCue(x),a.selectCue(x.id,x.base),P.showView(zt,v(),x.id,V()),P.setCueInfo(x),De()},St=S=>{let w=S*x.power,ot=x.grip*(Wt>0?1:_t);c.shoot(w,Y.side*ot,Y.top*ot)&&(Wt>0&&Wt--,P.setChalk(Wt),De(),W.cue(w),P.sync(c,k.mode))},j=S=>{it=!1,k.setMode(S),e.camera=S,Cr(e),P.sync(c,k.mode)},rt={unlock:()=>W.unlock(),camera:S=>j(S),undo:()=>c.undo(),hand:()=>c.ballInHand(),fine:S=>{c.state==="aim"&&(c.dir+=S*.05*Math.PI/180)},skip:()=>{for(let S of c.finish())S.type==="pot"&&W.pot()},reset:()=>{c.reset(),c.aimAtNearest()},place:()=>{c.confirmPlace(),c.aimAtNearest()},guestTraining:()=>{Nt=!0,at.blocked=!1,P.showMenu(!1),c.aimAtNearest(),at.capture()},resume:()=>{if(c.solo&&c.solo.done){rt.training();return}P.showMenu(!1),P.openLobby(!1),at.capture()},solo:()=>se(!1),soloNew:()=>se(!0),training:()=>{c.stopSolo(),c.aimAtNearest(),ue(),P.showMenu(!1),at.capture()},league:async()=>{J&&(P.showMenu(!1),P.openLobby(!1),P.openLeague(!1),ne.classList.add("mysn-on"),setTimeout(()=>{Ve("office"),at.capture(),P.toast(Gt),setTimeout(()=>ne.classList.remove("mysn-on"),80)},300),await ct())},leagueTables:()=>{P.openLeague(!0),P.renderLeague(st)},officeLeave:()=>{ne.classList.add("mysn-on"),setTimeout(()=>{on(),setTimeout(()=>ne.classList.remove("mysn-on"),80)},300)},register:async S=>{let w=await J.net.call("league/register",S).catch(ot=>({error:ot.message}));w&&!w.error?(st=w,P.toast(S.edit?"\xDAdaje hr\xE1\u010Da s\xFA ulo\u017Een\xE9.":"Vitaj v lige! Za\u010D\xEDna\u0161 so 147 bodmi."),yt="",rt.officeLook(),await ct()):P.toast(w&&w.error||"Registr\xE1cia sa nepodarila.")},officeEdit:()=>{yt="edit",Vt=!0,at.uncapture(),At()},officeCard:()=>{yt=st&&st.registered?"edit":"card",Vt=!0,at.uncapture(),At()},myCues:()=>{yt=yt==="cues"?"":"cues",yt?(wt=wt||y.selected[0]||Sn[0].id,Lt!=="rack"&&rt.officeFocus("rack"),Vt=!0,at.uncapture()):(Lt==="rack"&&rt.officeFocus("rack"),rt.officeLook()),At()},officeKeys:()=>P.toast(Gt),rooms:async()=>{J&&(P.openLobby(!1),P.openRooms(!0,null),P.openRooms(!0,await J.rooms()))},roomsClose:()=>P.openRooms(!1),watchStart:S=>{!J||c.match||(P.openRooms(!1),P.showMenu(!1),on(),c.spectating&&(J.watchStop(),c.spectateEnd()),C("close"),Xt={seq:-1,ver:-1,played:-1},J.aimTarget=null,c.spectateBegin({type:S.type,id:S.id,title:S.title,kind:S.kind,info:S.info||""}),lt(S.type==="match"?"league":"home"),k.setMode("cue"),J.watchStart(S.type,S.id),ue(),at.capture(),P.toast(`Sleduje\u0161: ${S.title}. My\u0161ou sa ot\xE1\u010Da\u0161 okolo stola, Esc: menu.`))},watchStop:()=>{c.spectating&&(J.watchStop(),J.aimTarget=null,c.spectateEnd(),lt("home"),ue(),P.showMenu(!1),at.capture(),C("door"))},officeLook:()=>{Vt=!1,P.setFree(!1),zt==="office"&&at.capture()},officeWindow:()=>{let S=ht.toggleWindow();W.unlock(),W.doorCreak(),P.toast(S?"Okno je otvoren\xE9.":"Okno je zatvoren\xE9.")},officeFocus:S=>{let w=Lt===S?ht.seat:ht.views[S];Lt=Lt===S?"":S,k.setView(w.pos.clone(),w.look.clone());let ot=w.look.clone().sub(w.pos);F.yaw=Math.atan2(ot.z,ot.x),F.pitch=Math.atan2(ot.y,Math.hypot(ot.x,ot.z)),k.setViewZoom(Lt?1:.85)},officeDoor:async()=>{if(J){if(!st||!st.registered){P.toast("Ligu hraj\xFA len registrovan\xED hr\xE1\u010Di. Najprv vypl\u0148 \u010Derven\xFA vizitku na stole (F8)."),rt.officeCard();return}if(J.queueing){await J.seek(!1),ht.setDoor(""),P.toast("Vyh\u013Ead\xE1vanie z\xE1pasu je zru\u0161en\xE9.");return}ht.setDoor("wait"),P.toast("Vyh\u013Ead\xE1vam z\xE1pas\u2026 Hr\xE1 ka\u017Ed\xFD s ka\u017Ed\xFDm, kto je pr\xE1ve vo fronte. Druh\xFD klik na dvere (F9) zru\u0161\xED."),await J.seek(!0)}},officeHome:()=>{yt="",At(),rt.officeLook()},cueSelect:S=>{let w=y.selected,ot=w.indexOf(S);ot>=0?w.splice(ot,1):w.length<4?w.push(S):P.toast("Do z\xE1pasu si m\xF4\u017Ee\u0161 zobra\u0165 najviac 4 t\xE1g\xE1. Najprv jedno odober."),Z()},cueDefault:S=>{y.selected.includes(S)&&(y.def=S,Z())},cueEdit:S=>{wt=S,At()},cueCustom:({id:S,k:w,v:ot})=>{let Tt=y.custom[S]=y.custom[S]||{};Tt[w]=ot,Z(!0)},leagueTab:S=>{P._leagueTab=S,P.renderLeague(st)},leagueInvite:async S=>{await J.invite(S,!0),P.renderLeague(st)},leagueArchive:async()=>{P.openLeague(!0);let S=await J.leagueArchive();P.renderLeague(st,S||{seasons:[]})},leagueClose:()=>{P.openLeague(!1),zt!=="office"&&P.showMenu(!0,!0)},leagueHome:()=>{P.openLeague(!1),zt!=="office"&&(c.match||lt("home"),P.showMenu(!1),at.capture())},leaderboard:()=>{P.showMenu(!1),zt!=="trophies"&&Ve("trophies")},trophies:()=>{P.showLeaderboard(null),Ve("trophies"),xe()},partyNext:()=>{P.celebrate(null),P.showMenu(!1),at.capture()},partyBoard:()=>{P.celebrate(null),rt.leaderboard()},leaderboardClose:()=>{P.showLeaderboard(null),P.menuOpen()||at.capture()},lobby:()=>{J&&(J.lobbyOpen=!0,P.openLobby(!0),J.ping())},lobbyClose:()=>{J&&(J.lobbyOpen=!1),P.openLobby(!1)},invite:S=>J&&J.invite(S),inviteTraining:S=>J&&J.invite(S,!1,!0),cancelInvite:()=>J&&J.cancelInvite(),accept:S=>{P.hideToast(),J&&J.answer(S,!0)},decline:S=>{P.hideToast(),J&&J.answer(S,!1)},resumeMatch:S=>J&&J.resume(S),pauseMatch:()=>J&&J.leave("pause"),resign:()=>J&&J.leave("resign"),home:()=>{window.location.href=t.homeUrl||"/"},settings:()=>P.toggle(P.panel),help:()=>Ve("board"),board:()=>Ve("board"),rack:()=>Ve("rack"),score:()=>Ve("score"),chair:()=>Ve("chair"),news:()=>Ve("news"),magazine:()=>Ve("magazine"),reader:()=>P.toggleReader(zt==="magazine"?"rss":"news",zt==="magazine"?a.rssItems:a.newsItems),readerRss:()=>P.toggleReader("rss",a.rssItems),chalk:()=>Ve("chalk"),mixer:()=>Ve("mixer"),bar:()=>Ve("bar"),leagueBoard:async()=>{Yt!=="league"&&(Ve("leagueBoard"),J&&(st=await J.league()||st,a.setLeague(st)))},phone:()=>P.openPhone(!0),phoneClose:()=>{P.openPhone(!1),zt==="bar"&&at.capture()},radioToggle:()=>N.toggle(),radioPick:S=>N.play(S),radioSet:({k:S,v:w})=>N.set(S,w),top:()=>{zt||(Ot=!Ot,it=!1,k.setMode(Ot||c.state==="place"?"top":"cue"))},back:()=>on(),cuePick:S=>un(S),cueNew:async S=>{if(!J){P.toast("Vlastn\xE9 t\xE1g\xE1 maj\xFA len prihl\xE1sen\xED hr\xE1\u010Di.");return}if(g.length>=_){P.toast(`M\xF4\u017Ee\u0161 ma\u0165 najviac ${_} vlastn\xFDch t\xE1g. Najprv jedno zma\u017E.`);return}let w=Ci(S),ot=await J.net.call("cues/save",{base:w.id,name:w.name+" (moje)",data:{}}).catch(Tt=>({error:Tt.message}));if(ot.error){P.toast(ot.error);return}g.push({id:ot.id,base:w.id,name:w.name+" (moje)",data:{shaft:"",butt:"",power:0,len:0,grip:0}}),un("u"+ot.id),L(),P.toast("Vlastn\xE9 t\xE1go je vytvoren\xE9. Vpravo mu nastav n\xE1zov, farby a hern\xE9 vlastnosti.")},cueOwnSet:({id:S,k:w,v:ot})=>{let Tt=g.find(Pt=>Pt.id===S);Tt&&(w==="name"?Tt.name=String(ot).slice(0,30):Tt.data={...Tt.data||{},[w]:ot},z(Tt),x.id==="u"+S&&(x=p(x.id),A.setSpec(x),at.setCue(x),P.setCueInfo(x),P.updateCueCard(x)),Tt.data&&Tt.data.rack&&w!=="name"&&a.setRackSpecs(v()))},cueOwnRack:S=>{let w=g.find(Tt=>Tt.id===S);if(!w)return;let ot=!(w.data&&w.data.rack);for(let Tt of g)Tt.base===w.base&&Tt.data&&Tt.data.rack&&Tt!==w&&(Tt.data={...Tt.data,rack:0},z(Tt));w.data={...w.data||{},rack:ot?1:0},z(w),L(),P.toast(ot?`${w.name} je na stojane namiesto \u0161abl\xF3ny ${Ci(w.base).name}.`:`${w.name} je sp\xE4\u0165 len v zozname Moje t\xE1g\xE1, na stojane je znova ${Ci(w.base).name}.`),P.showView("rack",v(),x.id,V())},cueOwnDelete:async S=>{let w=g.find(Tt=>Tt.id===S);if(!w||!J)return;await J.net.call("cues/delete",{id:S}).catch(()=>null),g=g.filter(Tt=>Tt.id!==S);let ot=y.selected.indexOf("u"+S);ot>=0&&(y.selected.splice(ot,1),Z(!0)),L(),P.toast(`T\xE1go ${w.name} je zmazan\xE9.`),un(x.id==="u"+S?w.base:x.id)},setting:({k:S,v:w})=>{e[S]=w,S==="volume"&&W.setVolume(w),S==="respot"&&(c.respot=!!w),Cr(e)}},P=new ia(H,{homeUrl:t.homeUrl,user:u,loginUrl:t.loginUrl,accountUrl:t.accountUrl,venue:()=>Yt,settings:e,onAction:(S,w)=>{W.unlock(),rt[S]&&rt[S](w),P.sync(c,k.mode)},onPower:(S,w)=>at.setPower(S,w),onRelease:()=>at.release(),onSpin:(S,w)=>Y={side:S,top:w}}),at=new ea(i.domElement,k,c,{unlock:()=>W.unlock(),shoot:St,spinReset:()=>P.setSpin(0,0),spin:(S,w)=>P.setSpin(Math.max(-1,Math.min(1,P.side+S)),Math.max(-1,Math.min(1,P.top+w))),lock:S=>{if(P.setLock(S),S&&!u&&!Nt){at.uncapture();return}S?(xt=!0,Vt=!1,P.setFree(!1),P.showMenu(!1)):jt&&!zt&&!Vt&&!P.partyOpen()&&performance.now()-Mt>1500&&P.showMenu(!0,xt)},stroke:S=>P.setStroke(S),look:(S,w)=>{if(!gt.has(zt)||Vt)return;let ot=.0025/(k.viewZoom||1);F.yaw+=S*ot,F.pitch=Math.max(-1.2,Math.min(.9,F.pitch-w*ot));let Tt=Math.cos(F.pitch);k.viewLook.copy(k.viewPos).add(new I(Math.cos(F.yaw)*Tt,Math.sin(F.pitch),Math.sin(F.yaw)*Tt))},viewWheel:S=>{gt.has(zt)&&k.setViewZoom((k.viewZoom||1)*Math.pow(.85,S))},viewDown:S=>{if(zt==="chair"&&S.button===0&&at.capture(),zt==="office"&&S.button===0){if(!Vt){at.captured||at.capture();return}let w=i.domElement.getBoundingClientRect(),ot=new Qi,Tt=new Rt((S.clientX-w.left)/w.width*2-1,-((S.clientY-w.top)/w.height)*2+1);if(ot.setFromCamera(Tt,k.camera),ot.intersectObject(ht.card,!1).length){rt.officeCard();return}if(ot.intersectObject(ht.door,!1).length){rt.officeDoor();return}let Pt=ot.intersectObject(ht.map,!1)[0];if(Pt){let le=ht.mapLonLat(Pt.point),te=null,Kt=7;for(let Fe of Dt){let fe=Math.hypot(Fe.lon-le.lon,Fe.lat-le.lat);fe<Kt&&(Kt=fe,te=Fe)}if(te){let Fe=Yo(te.code);P.toast(`${te.name} (${Fe?Fe.name:""}): ${te.rank}. miesto, ${te.league}. liga, ${te.points} bodov.`)}}}if(zt==="bar"&&S.button===0){let w=i.domElement.getBoundingClientRect(),ot=new Qi,Tt=at.captured?new Rt(0,0):new Rt((S.clientX-w.left)/w.width*2-1,-((S.clientY-w.top)/w.height)*2+1);ot.setFromCamera(Tt,k.camera),ot.intersectObject(a.phone,!1).length?(at.uncapture(),P.openPhone(!0)):at.captured||at.capture()}},key:S=>{let w=S.toLowerCase();if(!u&&!Nt)return!0;if(w==="ctrl-down"||w==="ctrl-up")return zt&&!gt.has(zt)||(w==="ctrl-down"&&at.captured?(Vt=!0,at.uncapture()):w==="ctrl-up"&&Vt&&(P.phoneOpen()||P.cardOpen())||w==="ctrl-up"&&Vt&&document.activeElement&&/input|select|textarea/i.test(document.activeElement.tagName)?Vt=!1:w==="ctrl-up"&&Vt&&(Vt=!1,P.showMenu(!1),at.capture()),P.setFree(Vt)),!0;if(w==="f6"&&zt==="office")return rt.officeWindow(),!0;if(w==="f6")return W.unlock(),D=a.toggleDoor(),C("door"),J&&!c.match&&!c.spectating&&P.toast(D?"Dvere s\xFA otvoren\xE9: tvoju partiu m\xF4\u017Eu sledova\u0165 in\xED hr\xE1\u010Di (Vst\xFApi\u0165 v menu).":"Dvere s\xFA zatvoren\xE9: tvoja partia nie je v zozname otvoren\xFDch parti\xED."),W.doorCreak(),!0;if(w==="escape"&&P.menuOpen()&&!zt&&performance.now()-(P._menuAt||0)>300)return P.lobbyOpen()?P.openLobby(!1):P.roomsOpen()?P.openRooms(!1):(c.solo&&c.solo.done&&rt.training(),Mt=performance.now(),P.showMenu(!1),P.openLobby(!1),P.toast("Klikni do hry, my\u0161 sa zachyt\xED.")),!0;if((w==="escape"||w==="enter")&&P.partyOpen())return P.opts.onAction("partyNext"),!0;if(w==="escape"&&P.leaderboardOpen())return P.opts.onAction("leaderboardClose"),!0;if(zt==="office"){let Pt={f1:["officeFocus","help"],f2:["myCues"],f3:["officeFocus","calendar"],f4:["officeFocus","results"],f6:["officeWindow"],f10:["officeFocus","map"],f7:["officeFocus","notebook"],f8:["officeCard"],f9:["officeDoor"]};if(Pt[w])return P.opts.onAction(Pt[w][0],Pt[w][1]),!0;if(/^f\d+$/.test(w)&&w!=="f5"&&w!=="f11")return!0;if(w==="escape")return yt==="cues"?rt.myCues():yt?(yt="",At(),rt.officeLook()):Lt?rt.officeFocus(Lt):P.leagueOpen()?P.openLeague(!1):rt.officeLeave(),!0}let ot={f1:"board",f2:"rack",f3:"chalk",f4:"score",f7:"chair",f8:"trophies",f9:"mixer",f10:"bar",f12:"leagueBoard"};if(ot[w])return P.opts.onAction(ot[w]),!0;if(w==="tab")return P.opts.onAction("top"),!0;if(zt){if(w==="escape"&&P.phoneOpen())return rt.phoneClose(),!0;if(zt==="bar"&&w==="m")return P.phoneOpen()?rt.phoneClose():(at.uncapture(),P.openPhone(!0)),!0;if(zt==="mixer"){if(w==="arrowleft"||w==="arrowright")return N.next(w==="arrowleft"?-1:1),!0;if(w==="arrowup"||w==="arrowdown")return N.set("vol",N.params.vol+(w==="arrowup"?.05:-.05)),!0;if(w==="p")return N.toggle(),!0}if(zt==="chair"&&w==="v")return P.opts.onAction("readerRss"),!0;if((zt==="news"||zt==="magazine"||zt==="chair")&&w==="c")return P.opts.onAction("reader"),!0;if(w==="escape"&&P.readerOpen())return P.toggleReader(null),!0;if((w==="escape"||w==="enter")&&zt!=="chalk")return on(),!0;if(zt==="rack"&&(w==="arrowleft"||w==="arrowright")){let Pt=v(),le=Math.max(0,Pt.findIndex(te=>te.id===x.id||te.id===x.base));return un(Pt[(le+(w==="arrowleft"?Pt.length-1:1))%Pt.length].id),!0}return!1}let Tt={z:"undo",backspace:"undo",b:"hand",r:"reset",s:"skip",h:"help"}[w];return Tt&&c.spectating&&Tt!=="help"?!0:Tt?(P.opts.onAction(Tt),!0):!1}});u||(at.blocked=!0);let J=null,ve=()=>{if(!u)return["guest"];if(c.spectating)return["watch",c.spectating.title];let S=c.match;return S?["match",S.players[1-S.me].name]:c.solo&&!c.solo.done?["solo"]:["training"]},ue=()=>P.setMenu(...ve()),se=S=>{c.match||(on(),P.showLeaderboard(null),Ot=!1,c.startSolo(S),k.setMode(c.state==="place"?"top":"cue"),ue(),P.showMenu(!1),at.capture(),P.sync(c,k.mode),De())},xe=async S=>{let w=S||(J?await J.scores():null);return w&&w.top&&a.setTrophies(w.top),w},Oe=async S=>{at.uncapture(),P.showLeaderboard(void 0,S);let w=J?await J.scores():null;xe(w),P.leaderboardOpen()&&P.showLeaderboard(w,S)},b=async S=>{let w=S||(J?await J.scores():null);w&&w.top&&a.setTrophies(w.top)};b(),c.onSolo=async S=>{let w=J?await J.saveScore(S):{error:"Sk\xF3re sa zapisuje len prihl\xE1sen\xFDm."},ot=w&&!w.error;ot&&xe(w);let Tt=ot&&w.mine&&w.mine.points===S.points&&w.mine.seconds===S.seconds;at.uncapture(),P.showLeaderboard(null),P.showMenu(!1),ot&&b(w),P.celebrate({...S,rank:ot?w.rank:0,players:ot?w.players:0,best:Tt,error:ot?"":w&&w.error}),W.unlock(),W.pot&&W.pot(),c.startSolo(!0),k.setMode(c.state==="place"?"top":"cue"),ue(),P.sync(c,k.mode),De()},u&&t.restUrl&&(J=new oa(t,c,{lobby:async S=>{P.renderLobby(S),P.leagueOpen()&&(st=await J.league()||st,P.renderLeague(st)),P.showInvites(c.match?[]:S.invites)},invite:S=>!P.menuOpen()&&P.toast(`Boli ste vyzvan\xFD! ${S.from.name} \u0165a vyz\xFDva ${S.training?"na spolo\u010Dn\xFD tr\xE9ning":S.league?"na ligov\xFA partiu":"na partiu"}.${at.captured?" Esc alebo Ctrl uvo\u013En\xED my\u0161.":""}`,S),toast:S=>P.toast(S),watch:(S,w)=>{let ot=c.spectating;if(!ot||!Xt)return;if(w.closed||S==="match"&&w.status&&w.status!=="active"){let Pt=S==="match"&&w.status==="finished"?`Z\xE1pas skon\u010Dil ${w.scores?w.scores.join(" : "):""}.`:"Partia u\u017E nie je otvoren\xE1.";rt.watchStop(),P.toast(Pt);return}let Tt=c.state==="moving";if(S==="room"){let Pt=w.data||{};ot.info=Pt.info||ot.info,Xt.seq<0?(c.spectateSet(Pt.after||Pt.before||null),Xt.seq=w.seq,Xt.ver=Pt.ver||0):w.seq>Xt.seq&&Pt.shot&&Pt.before&&!Tt?(J.aimTarget=null,c.spectateSet(Pt.before),c.playRemote(Pt.shot,!1),Xt.seq=w.seq):!Tt&&Pt.after&&(Pt.ver||0)!==Xt.ver&&w.seq===Xt.seq&&(c.spectateSet(Pt.after),Xt.ver=Pt.ver||0),!Tt&&Pt.aim&&Pt.aim.seq===Xt.seq&&(J.aimTarget=Pt.aim)}else{ot.info=w.scores?`${w.players[0].name} ${w.scores[0]} : ${w.scores[1]} ${w.players[1].name}`:ot.info;let Pt=w.state&&w.state.balls;Xt.seq<0?(c.spectateSet(Pt||null),Xt.seq=w.seq):w.shot&&w.shot.seq===w.seq+1&&Xt.played!==w.shot.seq&&!Tt?(c.spectateSet(Pt||null),c.playRemote(w.shot,!1),Xt.played=w.shot.seq):w.seq>Xt.seq&&!Tt&&(J.aimTarget=null,c.spectateSet(Pt||null),Xt.seq=w.seq),!Tt&&w.aim&&w.aim.seq===Xt.seq&&!(w.shot&&w.shot.seq===w.seq+1)&&(J.aimTarget=w.aim)}P.sync(c,k.mode)},queue:(S,w)=>{ht.setDoor(S==="wait"?"wait":""),S==="found"?P.toast("S\xFAper sa na\u0161iel! Ideme na \u0161tadi\xF3n."):S==="error"&&P.toast(w||"Vyh\u013Ead\xE1vanie z\xE1pasu sa nepodarilo.")},started:S=>{on(),P.openLeague(!1),lt(S.league?"league":"home"),$t=-1,P.openLobby(!1),J.lobbyOpen=!1,P.hideToast(),P.showInvites([]),Ot=!1,k.setMode(c.state==="place"?"top":"cue"),ue(),P.showMenu(!1),P.toast(`Partia s hr\xE1\u010Dom ${S.players[1-S.me].name}. ${S.turn===S.me?"Si na rade.":"Na rade je s\xFAper."}`),P.sync(c,k.mode),De()},ended:async S=>{on(),J&&J.lastLeague&&(J.lastLeague=!1,st=await J.league()||st,a.setLeague(st),mt()),ue(),P.showMenu(!0,!0),P.menuNote(S),at.uncapture(),c.aimAtNearest(),P.sync(c,k.mode),De()},status:()=>P.setNet(J?J.statusText():"")})),xe(),T(),at.setCue(x),P.setCueInfo(x),P.setChalk(Wt),De(),c.on((S,w)=>{!c.spectating&&!c.match&&D&&(S==="shot"||S==="settle")?C(S,w):!c.spectating&&!c.match&&D&&S==="change"&&c.state!=="moving"&&(clearTimeout(pt),pt=setTimeout(()=>{c.state!=="moving"&&C("change")},400)),zt||Ot||(c.state==="place"&&k.mode==="cue"?(k.setMode("top"),it=!0):c.state!=="place"&&it&&(it=!1,k.mode==="top"&&k.setMode("cue"))),(S==="change"||S==="settle")&&(P.sync(c,k.mode),De())});let B=()=>{let S=s.clientWidth||window.innerWidth,w=s.clientHeight||window.innerHeight;i.setSize(S,w),k.resize(S,w)};window.addEventListener("resize",B),window.addEventListener("pagehide",()=>c.saveSoloTime()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&c.saveSoloTime()}),B(),P.sync(c,k.mode),(jt||!u)&&P.showMenu(!0,!1);let nt=new I,tt=performance.now(),X=tt,It=0;try{It=parseFloat(window.localStorage.getItem("mySnookerPlayTime")||"0")||0}catch{It=0}let qt=()=>{try{window.localStorage.setItem("mySnookerPlayTime",String(Math.round(It)))}catch{}};window.addEventListener("pagehide",qt);let Qt=tt,Jt=0,ie=S=>{let w=Math.min(.05,(S-tt)/1e3);if(tt=S,at.update(w),c.state==="moving")for(let re of c.tick(w))re.type==="ball"?W.ball(re.speed):re.type==="cushion"?W.cushion(re.speed):re.type==="pot"&&(W.pot(),Yt==="league"&&c.balls[re.a]&&c.balls[re.a].kind!=="white"&&$.react("clap"));if(Yt==="league"){let re=c.match;re&&re.seq!==$t&&($t>=0&&re.last&&(re.last.foul?$.react("facepalm"):(re.last.brk||0)>=30&&re.last.points>0&&$.react("stand")),$t=re.seq,mt()),$.update(w,c.cue)}let ot=c.state==="aim"&&!zt,Tt=c.state==="watch"&&J&&J.aimTarget;if(Tt){let re=J.aimTarget,Ge=re.dir-c.dir;Ge=Math.atan2(Math.sin(Ge),Math.cos(Ge)),c.dir+=Ge*Math.min(1,w*8),c.cue.on&&(c.cue.p.x+=(re.cx-c.cue.p.x)*Math.min(1,w*8),c.cue.p.z+=(re.cz-c.cue.p.z)*Math.min(1,w*8))}if(J&&D&&!c.match&&!c.spectating&&(c.state==="aim"||c.state==="place")&&(Ct+=w,Ct>=.33)){let re={seq:et,dir:+c.dir.toFixed(4),cx:+c.cue.p.x.toFixed(4),cz:+c.cue.p.z.toFixed(4),pull:+(at.stroking?Math.max(0,at.strokePull):at.power||0).toFixed(3),side:+Y.side.toFixed(2),top:+Y.top.toFixed(2),place:c.state==="place"?1:0},Ge=JSON.stringify(re);Ge!==bt&&(Ct=0,bt=Ge,J.roomPost({door:1,kind:c.solo?"solo":"training",seq:et,aim:re}))}if(J&&J.update(w,c.myTurn?{dir:c.dir,cx:c.cue.p.x,cz:c.cue.p.z,pull:at.stroking?Math.max(0,at.strokePull):0,side:Y.side,top:Y.top}:null),at.stroking)Jt=Math.max(0,at.strokePull);else{let re=ot?at.power:0;Jt+=(re-Jt)*Math.min(1,w*(at.charging?30:12))}P.showPower(at.power),m.update(w);let Pt=Math.floor(It);It+=Math.min(1,Math.max(0,(S-X)/1e3)),Math.floor(It)!==Pt&&Math.floor(It)%2===0&&qt(),X=S;let le=N.update(k.camera);if(O.update(le[0],le[1]),!c.match&&!c.solo||c.match&&c.match.training){let re=new Date;a.setClock(re.getHours()*3600+re.getMinutes()*60+re.getSeconds(),!0)}else a.setClock(c.solo&&!c.solo.done?c.solo.time:It);let te=c.solo;if(te&&!te.done&&!gt.has(zt)&&zt!=="leagueBoard"&&!P.menuOpen()&&!P.leaderboardOpen()&&!P.partyOpen()){let re=Math.floor(te.time);te.time+=Math.min(1,Math.max(0,(S-Qt)/1e3)),Math.floor(te.time)!==re&&(Math.floor(te.time)%2===0&&c.saveSoloTime(),P.sync(c,k.mode),De())}if(Qt=S,a.update(w)&&W.doorShut(),Tt&&(Jt+=((J.aimTarget.pull||0)-Jt)*Math.min(1,w*10)),A.place(c.cue,c.dir,Jt,Tt?J.aimTarget.side||0:Y.side,Tt?J.aimTarget.top||0:Y.top,(ot||zt==="chalk"||Tt&&!J.aimTarget.place)&&c.cue.on),Ft>=0){Ft=Ae.chalkFreeze!==null?Ae.chalkFreeze:(performance.now()-he)/1e3;let re=Math.cos(c.dir),Ge=Math.sin(c.dir),We=2.8,Xn=aa=>aa*aa*(3-2*aa),Te=Xn(Math.min(1,Ft/.45,Math.max(0,(We-Ft)/.45)));A.pivot.position.x-=re*He.back*Te,A.pivot.position.z-=Ge*He.back*Te,A.pivot.position.y+=He.up*Te;let sn=A.pivot.position,pi=Xn(Math.min(1,Math.max(0,(Ft-.45)/.35),Math.max(0,(We-.45-Ft)/.35))),dn=Ft>.8&&Ft<We-.8?1:0,yn=Ft*12,wn=.0012*dn,Js=Ne.s/2-Ne.d+(1-pi)*.1;me.position.set(sn.x+re*Js-Ge*Math.cos(yn)*wn,sn.y+Math.sin(yn)*wn+(1-pi)*.05,sn.z+Ge*Js+re*Math.cos(yn)*wn),me.rotation.set(dn*Math.sin(yn*.5)*.5,-c.dir,0),Ft>=We&&(Wt=ut,P.setChalk(Wt),De(),on())}let Kt=q.update(c.balls,c.cue,c.dir,ot&&c.cue.on,e.lines?2:0),Fe=ot&&c.cue.on&&!!e.contact,fe=Kt||(ot&&c.cue.on?Go(c.balls,c.cue,c.dir):null);if(P.drawContact(Fe?fe:null,c.dir,Fe,e.lines),m.highlight(fe&&ot?fe.ball:null,w,fe?fe.ghost:null),fe){let re=fe.ball?fe.ball.p:{x:c.cue.p.x+Math.cos(c.dir)*Vu,z:c.cue.p.z+Math.sin(c.dir)*Vu};nt.set(re.x,.02625,re.z),k.aimPoint=nt}else k.aimPoint=null;Q(),ht.updateWindow(w),k.cueTilt=A.pivot.visible&&A.tilt||0,k.update(w,c.cue,c.dir,c.state==="moving"),i.render(r,k.camera),requestAnimationFrame(ie)};return requestAnimationFrame(ie),{game:c,rig:k,renderer:i,scene:r,settings:e,controls:at,debug:Ae,actions:rt,get online(){return J}}}var Gu=()=>{let s=document.getElementById("mysn-app");s&&!s.dataset.started&&(s.dataset.started="1",window.MySnooker=px(s,window.MYSN_CONFIG||{}))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Gu):Gu();})();

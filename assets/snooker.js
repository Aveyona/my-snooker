(()=>{var ic="170",kn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hu=0,Dc=1,Vu=2;var Xh=1,sc=2,Jn=3,_i=0,Be=1,Ve=2,yi=0,ps=1,Uc=2,kc=3,Nc=4,Gu=5,Ii=100,Wu=101,Xu=102,$u=103,qu=104,Yu=200,Zu=201,ju=202,Ku=203,Na=204,Oa=205,Ju=206,Qu=207,td=208,ed=209,nd=210,id=211,sd=212,rd=213,od=214,za=0,Fa=1,Ba=2,xs=3,Ha=4,Va=5,Ga=6,Wa=7,$h=0,ad=1,ld=2,xi=0,cd=1,hd=2,ud=3,rc=4,dd=5,fd=6,pd=7;var qh=300,_s=301,vs=302,Xa=303,$a=304,Po=306,ni=1e3,Ui=1001,qa=1002,Ln=1003,md=1004;var wr=1005;var zn=1006,na=1007;var ki=1008;var ii=1009,Yh=1010,Zh=1011,sr=1012,oc=1013,Ni=1014,Qn=1015,gr=1016,ac=1017,lc=1018,Ms=1020,jh=35902,Kh=1021,Jh=1022,In=1023,Qh=1024,tu=1025,ms=1026,bs=1027,eu=1028,cc=1029,nu=1030,hc=1031;var uc=1033,Jr=33776,Qr=33777,to=33778,eo=33779,Ya=35840,Za=35841,ja=35842,Ka=35843,Ja=36196,Qa=37492,tl=37496,el=37808,nl=37809,il=37810,sl=37811,rl=37812,ol=37813,al=37814,ll=37815,cl=37816,hl=37817,ul=37818,dl=37819,fl=37820,pl=37821,no=36492,ml=36494,gl=36495,iu=36283,yl=36284,xl=36285,_l=36286;var io=2300,vl=2301,ia=2302,Oc=2400,zc=2401,Fc=2402;var gd=3200,yd=3201;var su=0,xd=1,gi="",oe="srgb",ks="srgb-linear",Io="linear",Ee="srgb";var Ki=7680;var Bc=519,_d=512,vd=513,Md=514,ru=515,bd=516,Sd=517,Ed=518,wd=519,Hc=35044;var Vc="300 es",ti=2e3,so=2001,si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gc=1234567,Js=Math.PI/180,Ss=180/Math.PI;function qi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function Fe(s,t,e){return Math.max(t,Math.min(e,s))}function dc(s,t){return(s%t+t)%t}function Td(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Ad(s,t,e){return s!==t?(e-s)/(t-s):0}function Qs(s,t,e){return(1-e)*s+e*t}function Rd(s,t,e,n){return Qs(s,t,1-Math.exp(-e*n))}function Cd(s,t=1){return t-Math.abs(dc(s,t*2)-t)}function Pd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Id(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ld(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Dd(s,t){return s+Math.random()*(t-s)}function Ud(s){return s*(.5-Math.random())}function kd(s){s!==void 0&&(Gc=s);let t=Gc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nd(s){return s*Js}function Od(s){return s*Ss}function zd(s){return(s&s-1)===0&&s!==0}function Fd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Bd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Hd(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+n)/2),c=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*c,l*u,l*d,a*h);break;case"YZY":s.set(l*d,a*c,l*u,a*h);break;case"ZXZ":s.set(l*u,l*d,a*c,a*h);break;case"XZX":s.set(a*c,l*m,l*f,a*h);break;case"YXY":s.set(l*f,a*c,l*m,a*h);break;case"ZYZ":s.set(l*m,l*f,a*c,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function us(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function sn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Vn={DEG2RAD:Js,RAD2DEG:Ss,generateUUID:qi,clamp:Fe,euclideanModulo:dc,mapLinear:Td,inverseLerp:Ad,lerp:Qs,damp:Rd,pingpong:Cd,smoothstep:Pd,smootherstep:Id,randInt:Ld,randFloat:Dd,randFloatSpread:Ud,seededRandom:kd,degToRad:Nd,radToDeg:Od,isPowerOfTwo:zd,ceilPowerOfTwo:Fd,floorPowerOfTwo:Bd,setQuaternionFromProperEuler:Hd,normalize:sn,denormalize:us},bt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},he=class s{constructor(t,e,n,i,r,o,a,l,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,h)}set(t,e,n,i,r,o,a,l,h){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],c=n[4],u=n[7],d=n[2],f=n[5],m=n[8],y=i[0],g=i[3],p=i[6],S=i[1],v=i[4],x=i[7],U=i[2],C=i[5],D=i[8];return r[0]=o*y+a*S+l*U,r[3]=o*g+a*v+l*C,r[6]=o*p+a*x+l*D,r[1]=h*y+c*S+u*U,r[4]=h*g+c*v+u*C,r[7]=h*p+c*x+u*D,r[2]=d*y+f*S+m*U,r[5]=d*g+f*v+m*C,r[8]=d*p+f*x+m*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-n*r*c+n*a*l+i*r*h-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=c*o-a*h,d=a*l-c*r,f=h*r-o*l,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=u*y,t[1]=(i*h-c*n)*y,t[2]=(a*n-i*o)*y,t[3]=d*y,t[4]=(c*e-i*l)*y,t[5]=(i*r-a*e)*y,t[6]=f*y,t[7]=(n*l-h*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-i*h,i*l,-i*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(sa.makeScale(t,e)),this}rotate(t){return this.premultiply(sa.makeRotation(-t)),this}translate(t,e){return this.premultiply(sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},sa=new he;function ou(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ro(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vd(){let s=ro("canvas");return s.style.display="block",s}var Wc={};function js(s){s in Wc||(Wc[s]=!0,console.warn(s))}function Gd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Wd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Xd(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ye={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ee&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ee&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?Io:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ei(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Xc=[.64,.33,.3,.6,.15,.06],$c=[.2126,.7152,.0722],qc=[.3127,.329],Yc=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ye.define({[ks]:{primaries:Xc,whitePoint:qc,transfer:Io,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:$c,workingColorSpaceConfig:{unpackColorSpace:oe},outputColorSpaceConfig:{drawingBufferColorSpace:oe}},[oe]:{primaries:Xc,whitePoint:qc,transfer:Ee,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:$c,outputColorSpaceConfig:{drawingBufferColorSpace:oe}}});var Ji,Ml=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=ro("canvas")),Ji.width=t.width,Ji.height=t.height;let n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ro("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$d=0,oo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=qi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ra(i[o].image)):r.push(ra(i[o]))}else r=ra(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function ra(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ml.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qd=0,pn=class s extends si{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Ui,i=Ui,r=zn,o=ki,a=In,l=ii,h=s.DEFAULT_ANISOTROPY,c=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=qi(),this.name="",this.source=new oo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ni:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ni:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=qh;pn.DEFAULT_ANISOTROPY=1;var we=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+y)<.1&&Math.abs(m+g)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(h+1)/2,x=(f+1)/2,U=(p+1)/2,C=(c+d)/4,D=(u+y)/4,O=(m+g)/4;return v>x&&v>U?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=C/n,r=D/n):x>U?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=C/i,r=O/i):U<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(U),n=D/r,i=O/r),this.set(n,i,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(u-y)*(u-y)+(d-c)*(d-c));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-y)/S,this.z=(d-c)/S,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bl=class extends si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new pn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new oo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends bl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ao=class extends pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sl=class extends pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var on=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],h=n[i+1],c=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=y;return}if(u!==y||l!==d||h!==f||c!==m){let g=1-a,p=l*d+h*f+c*m+u*y,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let U=Math.sqrt(v),C=Math.atan2(U,p*S);g=Math.sin(g*C)/U,a=Math.sin(a*C)/U}let x=a*S;if(l=l*g+d*x,h=h*g+f*x,c=c*g+m*x,u=u*g+y*x,g===1-a){let U=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=U,h*=U,c*=U,u*=U}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],h=n[i+2],c=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+c*u+l*f-h*d,t[e+1]=l*m+c*d+h*u-a*f,t[e+2]=h*m+c*f+a*d-l*u,t[e+3]=c*m-a*u-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),c=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=d*c*u+h*f*m,this._y=h*f*u-d*c*m,this._z=h*c*m+d*f*u,this._w=h*c*u-d*f*m;break;case"YXZ":this._x=d*c*u+h*f*m,this._y=h*f*u-d*c*m,this._z=h*c*m-d*f*u,this._w=h*c*u+d*f*m;break;case"ZXY":this._x=d*c*u-h*f*m,this._y=h*f*u+d*c*m,this._z=h*c*m+d*f*u,this._w=h*c*u-d*f*m;break;case"ZYX":this._x=d*c*u-h*f*m,this._y=h*f*u+d*c*m,this._z=h*c*m-d*f*u,this._w=h*c*u+d*f*m;break;case"YZX":this._x=d*c*u+h*f*m,this._y=h*f*u+d*c*m,this._z=h*c*m-d*f*u,this._w=h*c*u-d*f*m;break;case"XZY":this._x=d*c*u-h*f*m,this._y=h*f*u-d*c*m,this._z=h*c*m+d*f*u,this._w=h*c*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(c-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+h)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-h)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+o*a+i*h-r*l,this._y=i*c+o*l+r*a-n*h,this._z=r*c+o*h+n*l-i*a,this._w=o*c-n*a-i*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*i-a*n),c=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*h+o*u-a*c,this.y=n+l*c+a*h-r*u,this.z=i+l*u+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oa.copy(this).projectOnVector(t),this.sub(oa)}reflect(t){return this.sub(oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},oa=new R,jc=new on,Oi=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Ar.subVectors(this.max,Ws),Qi.subVectors(t.a,Ws),ts.subVectors(t.b,Ws),es.subVectors(t.c,Ws),hi.subVectors(ts,Qi),ui.subVectors(es,ts),Ei.subVectors(Qi,es);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Ei.z,Ei.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Ei.z,0,-Ei.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Ei.y,Ei.x,0];return!aa(e,Qi,ts,es,Ar)||(e=[1,0,0,0,1,0,0,0,1],!aa(e,Qi,ts,es,Ar))?!1:(Rr.crossVectors(hi,ui),e=[Rr.x,Rr.y,Rr.z],aa(e,Qi,ts,es,Ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},qn=[new R,new R,new R,new R,new R,new R,new R,new R],Rn=new R,Tr=new Oi,Qi=new R,ts=new R,es=new R,hi=new R,ui=new R,Ei=new R,Ws=new R,Ar=new R,Rr=new R,wi=new R;function aa(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){wi.fromArray(s,r);let a=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=t.dot(wi),h=e.dot(wi),c=n.dot(wi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}var Yd=new Oi,Xs=new R,la=new R,Es=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Yd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Xs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(la.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(la)),this.expandByPoint(Xs.copy(t.center).sub(la))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yn=new R,ca=new R,Cr=new R,di=new R,ha=new R,Pr=new R,ua=new R,zi=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ca.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),di.copy(this.origin).sub(ca);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Cr),a=di.dot(this.direction),l=-di.dot(Cr),h=di.lengthSq(),c=Math.abs(1-o*o),u,d,f,m;if(c>0)if(u=o*l-a,d=o*a-l,m=r*c,u>=0)if(d>=-m)if(d<=m){let y=1/c;u*=y,d*=y,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+h}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ca).addScaledVector(Cr,d),f}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),c>=0?(r=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,i,r){ha.subVectors(e,t),Pr.subVectors(n,t),ua.crossVectors(ha,Pr);let o=this.direction.dot(ua),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,t);let l=a*this.direction.dot(Pr.crossVectors(di,Pr));if(l<0)return null;let h=a*this.direction.dot(ha.cross(di));if(h<0||l+h>o)return null;let c=-a*di.dot(ua);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Re=class s{constructor(t,e,n,i,r,o,a,l,h,c,u,d,f,m,y,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,h,c,u,d,f,m,y,g)}set(t,e,n,i,r,o,a,l,h,c,u,d,f,m,y,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),h=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*c,f=o*u,m=a*c,y=a*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=f+m*h,e[5]=d-y*h,e[9]=-a*l,e[2]=y-d*h,e[6]=m+f*h,e[10]=o*l}else if(t.order==="YXZ"){let d=l*c,f=l*u,m=h*c,y=h*u;e[0]=d+y*a,e[4]=m*a-f,e[8]=o*h,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=f*a-m,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*c,f=l*u,m=h*c,y=h*u;e[0]=d-y*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*c,e[9]=y-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*c,f=o*u,m=a*c,y=a*u;e[0]=l*c,e[4]=m*h-f,e[8]=d*h+y,e[1]=l*u,e[5]=y*h+d,e[9]=f*h-m,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*h,m=a*l,y=a*h;e[0]=l*c,e[4]=y-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*u+m,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*l,f=o*h,m=a*l,y=a*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+y,e[5]=o*c,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*c,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zd,t,jd)}lookAt(t,e,n){let i=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),fi.crossVectors(n,un),fi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),fi.crossVectors(n,un)),fi.normalize(),Ir.crossVectors(un,fi),i[0]=fi.x,i[4]=Ir.x,i[8]=un.x,i[1]=fi.y,i[5]=Ir.y,i[9]=un.y,i[2]=fi.z,i[6]=Ir.z,i[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],c=n[1],u=n[5],d=n[9],f=n[13],m=n[2],y=n[6],g=n[10],p=n[14],S=n[3],v=n[7],x=n[11],U=n[15],C=i[0],D=i[4],O=i[8],w=i[12],_=i[1],T=i[5],$=i[9],q=i[13],X=i[2],V=i[6],B=i[10],K=i[14],Y=i[3],ot=i[7],ft=i[11],vt=i[15];return r[0]=o*C+a*_+l*X+h*Y,r[4]=o*D+a*T+l*V+h*ot,r[8]=o*O+a*$+l*B+h*ft,r[12]=o*w+a*q+l*K+h*vt,r[1]=c*C+u*_+d*X+f*Y,r[5]=c*D+u*T+d*V+f*ot,r[9]=c*O+u*$+d*B+f*ft,r[13]=c*w+u*q+d*K+f*vt,r[2]=m*C+y*_+g*X+p*Y,r[6]=m*D+y*T+g*V+p*ot,r[10]=m*O+y*$+g*B+p*ft,r[14]=m*w+y*q+g*K+p*vt,r[3]=S*C+v*_+x*X+U*Y,r[7]=S*D+v*T+x*V+U*ot,r[11]=S*O+v*$+x*B+U*ft,r[15]=S*w+v*q+x*K+U*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],m=t[3],y=t[7],g=t[11],p=t[15];return m*(+r*l*u-i*h*u-r*a*d+n*h*d+i*a*f-n*l*f)+y*(+e*l*f-e*h*d+r*o*d-i*o*f+i*h*c-r*l*c)+g*(+e*h*u-e*a*f-r*o*u+n*o*f+r*a*c-n*h*c)+p*(-i*a*c-e*l*u+e*a*d+i*o*u-n*o*d+n*l*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],m=t[12],y=t[13],g=t[14],p=t[15],S=u*g*h-y*d*h+y*l*f-a*g*f-u*l*p+a*d*p,v=m*d*h-c*g*h-m*l*f+o*g*f+c*l*p-o*d*p,x=c*y*h-m*u*h+m*a*f-o*y*f-c*a*p+o*u*p,U=m*u*l-c*y*l-m*a*d+o*y*d+c*a*g-o*u*g,C=e*S+n*v+i*x+r*U;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return t[0]=S*D,t[1]=(y*d*r-u*g*r-y*i*f+n*g*f+u*i*p-n*d*p)*D,t[2]=(a*g*r-y*l*r+y*i*h-n*g*h-a*i*p+n*l*p)*D,t[3]=(u*l*r-a*d*r-u*i*h+n*d*h+a*i*f-n*l*f)*D,t[4]=v*D,t[5]=(c*g*r-m*d*r+m*i*f-e*g*f-c*i*p+e*d*p)*D,t[6]=(m*l*r-o*g*r-m*i*h+e*g*h+o*i*p-e*l*p)*D,t[7]=(o*d*r-c*l*r+c*i*h-e*d*h-o*i*f+e*l*f)*D,t[8]=x*D,t[9]=(m*u*r-c*y*r-m*n*f+e*y*f+c*n*p-e*u*p)*D,t[10]=(o*y*r-m*a*r+m*n*h-e*y*h-o*n*p+e*a*p)*D,t[11]=(c*a*r-o*u*r-c*n*h+e*u*h+o*n*f-e*a*f)*D,t[12]=U*D,t[13]=(c*y*i-m*u*i+m*n*d-e*y*d-c*n*g+e*u*g)*D,t[14]=(m*a*i-o*y*i-m*n*l+e*y*l+o*n*g-e*a*g)*D,t[15]=(o*u*i-c*a*i+c*n*l-e*u*l-o*n*d+e*a*d)*D,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+n,h*a-i*l,h*l+i*a,0,h*a+i*l,c*a+n,c*l-i*o,0,h*l-i*a,c*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,u=a+a,d=r*h,f=r*c,m=r*u,y=o*c,g=o*u,p=a*u,S=l*h,v=l*c,x=l*u,U=n.x,C=n.y,D=n.z;return i[0]=(1-(y+p))*U,i[1]=(f+x)*U,i[2]=(m-v)*U,i[3]=0,i[4]=(f-x)*C,i[5]=(1-(d+p))*C,i[6]=(g+S)*C,i[7]=0,i[8]=(m+v)*D,i[9]=(g-S)*D,i[10]=(1-(d+y))*D,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=ns.set(i[0],i[1],i[2]).length(),o=ns.set(i[4],i[5],i[6]).length(),a=ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Cn.copy(this);let h=1/r,c=1/o,u=1/a;return Cn.elements[0]*=h,Cn.elements[1]*=h,Cn.elements[2]*=h,Cn.elements[4]*=c,Cn.elements[5]*=c,Cn.elements[6]*=c,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ti){let l=this.elements,h=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,m;if(a===ti)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===so)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ti){let l=this.elements,h=1/(e-t),c=1/(n-i),u=1/(o-r),d=(e+t)*h,f=(n+i)*c,m,y;if(a===ti)m=(o+r)*u,y=-2*u;else if(a===so)m=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ns=new R,Cn=new Re,Zd=new R(0,0,0),jd=new R(1,1,1),fi=new R,Ir=new R,un=new R,Kc=new Re,Jc=new on,vn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],h=i[5],c=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kd=0,Qc=new R,is=new on,Zn=new Re,Lr=new R,$s=new R,Jd=new R,Qd=new on,th=new R(1,0,0),eh=new R(0,1,0),nh=new R(0,0,1),ih={type:"added"},tf={type:"removed"},ss={type:"childadded",child:null},da={type:"childremoved",child:null},Ze=class s extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new R,e=new vn,n=new on,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new he}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(th,t)}rotateY(t){return this.rotateOnAxis(eh,t)}rotateZ(t){return this.rotateOnAxis(nh,t)}translateOnAxis(t,e){return Qc.copy(t).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(th,t)}translateY(t){return this.translateOnAxis(eh,t)}translateZ(t){return this.translateOnAxis(nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lr.copy(t):Lr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt($s,Lr,this.up):Zn.lookAt(Lr,$s,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),is.setFromRotationMatrix(Zn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ih),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tf),da.child=t,this.dispatchEvent(da),da.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ih),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,Jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Qd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let h in a){let c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ze.DEFAULT_UP=new R(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new R,jn=new R,fa=new R,Kn=new R,rs=new R,os=new R,sh=new R,pa=new R,ma=new R,ga=new R,ya=new we,xa=new we,_a=new we,Li=class s{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Pn.subVectors(t,e),i.cross(Pn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Pn.subVectors(i,e),jn.subVectors(n,e),fa.subVectors(t,e);let o=Pn.dot(Pn),a=Pn.dot(jn),l=Pn.dot(fa),h=jn.dot(jn),c=jn.dot(fa),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(h*l-a*c)*d,m=(o*c-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return ya.setScalar(0),xa.setScalar(0),_a.setScalar(0),ya.fromBufferAttribute(t,e),xa.fromBufferAttribute(t,n),_a.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ya,r.x),o.addScaledVector(xa,r.y),o.addScaledVector(_a,r.z),o}static isFrontFacing(t,e,n,i){return Pn.subVectors(n,e),jn.subVectors(t,e),Pn.cross(jn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Pn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;rs.subVectors(i,n),os.subVectors(r,n),pa.subVectors(t,n);let l=rs.dot(pa),h=os.dot(pa);if(l<=0&&h<=0)return e.copy(n);ma.subVectors(t,i);let c=rs.dot(ma),u=os.dot(ma);if(c>=0&&u<=c)return e.copy(i);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(n).addScaledVector(rs,o);ga.subVectors(t,r);let f=rs.dot(ga),m=os.dot(ga);if(m>=0&&f<=m)return e.copy(r);let y=f*h-l*m;if(y<=0&&h>=0&&m<=0)return a=h/(h-m),e.copy(n).addScaledVector(os,a);let g=c*m-f*u;if(g<=0&&u-c>=0&&f-m>=0)return sh.subVectors(r,i),a=(u-c)/(u-c+(f-m)),e.copy(i).addScaledVector(sh,a);let p=1/(g+y+d);return o=y*p,a=d*p,e.copy(n).addScaledVector(rs,o).addScaledVector(os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function va(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ae=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ye.workingColorSpace){if(t=dc(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=va(o,r,t+1/3),this.g=va(o,r,t),this.b=va(o,r,t-1/3)}return ye.toWorkingColorSpace(this,i),this}setStyle(t,e=oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oe){let n=au[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oe){return ye.fromWorkingColorSpace(nn.copy(this),t),Math.round(Fe(nn.r*255,0,255))*65536+Math.round(Fe(nn.g*255,0,255))*256+Math.round(Fe(nn.b*255,0,255))}getHexString(t=oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.fromWorkingColorSpace(nn.copy(this),e);let n=nn.r,i=nn.g,r=nn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,h,c=(a+o)/2;if(a===o)l=0,h=0;else{let u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=ye.workingColorSpace){return ye.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=oe){ye.fromWorkingColorSpace(nn.copy(this),t);let e=nn.r,n=nn.g,i=nn.b;return t!==oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Dr);let n=Qs(pi.h,Dr.h,e),i=Qs(pi.s,Dr.s,e),r=Qs(pi.l,Dr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new ae;ae.NAMES=au;var ef=0,vi=class extends si{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=qi(),this.name="",this.blending=ps,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Oa,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},xe=class extends vi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ze=new R,Ur=new bt,_n=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hc,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ur.fromBufferAttribute(this,e),Ur.applyMatrix3(t),this.setXY(e,Ur.x,Ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=us(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),i=sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hc&&(t.usage=this.usage),t}};var lo=class extends _n{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var co=class extends _n{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var me=class extends _n{constructor(t,e,n){super(new Float32Array(t),e,n)}},nf=0,xn=new Re,Ma=new Ze,as=new R,dn=new Oi,qs=new Oi,Ye=new R,Ne=class s extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ou(t)?co:lo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return Ma.lookAt(t),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new me(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(dn.min,qs.min),dn.expandByPoint(Ye),Ye.addVectors(dn.max,qs.max),dn.expandByPoint(Ye)):(dn.expandByPoint(qs.min),dn.expandByPoint(qs.max))}dn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ye.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ye));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)Ye.fromBufferAttribute(a,h),l&&(as.fromBufferAttribute(t,h),Ye.add(as)),i=Math.max(i,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new R,l[O]=new R;let h=new R,c=new R,u=new R,d=new bt,f=new bt,m=new bt,y=new R,g=new R;function p(O,w,_){h.fromBufferAttribute(n,O),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,_),d.fromBufferAttribute(r,O),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,_),c.sub(h),u.sub(h),f.sub(d),m.sub(d);let T=1/(f.x*m.y-m.x*f.y);isFinite(T)&&(y.copy(c).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(T),g.copy(u).multiplyScalar(f.x).addScaledVector(c,-m.x).multiplyScalar(T),a[O].add(y),a[w].add(y),a[_].add(y),l[O].add(g),l[w].add(g),l[_].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let O=0,w=S.length;O<w;++O){let _=S[O],T=_.start,$=_.count;for(let q=T,X=T+$;q<X;q+=3)p(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let v=new R,x=new R,U=new R,C=new R;function D(O){U.fromBufferAttribute(i,O),C.copy(U);let w=a[O];v.copy(w),v.sub(U.multiplyScalar(U.dot(w))).normalize(),x.crossVectors(C,w);let T=x.dot(l[O])<0?-1:1;o.setXYZW(O,v.x,v.y,v.z,T)}for(let O=0,w=S.length;O<w;++O){let _=S[O],T=_.start,$=_.count;for(let q=T,X=T+$;q<X;q+=3)D(t.getX(q+0)),D(t.getX(q+1)),D(t.getX(q+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new R,r=new R,o=new R,a=new R,l=new R,h=new R,c=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),y=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),c.subVectors(o,r),u.subVectors(i,r),c.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,g),a.add(c),l.add(c),h.add(c),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,r),u.subVectors(i,r),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,l){let h=a.array,c=a.itemSize,u=a.normalized,d=new h.constructor(l.length*c),f=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*c;for(let p=0;p<c;p++)d[m++]=h[f++]}return new _n(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],h=t(l,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let c=0,u=h.length;c<u;c++){let d=h[c],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(i[l]=c,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let h in i){let c=i[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],u=r[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,c=o.length;h<c;h++){let u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rh=new Re,Ti=new zi,kr=new Es,oh=new R,Nr=new R,Or=new R,zr=new R,ba=new R,Fr=new R,ah=new R,Br=new R,Pt=class extends Ze{constructor(t=new Ne,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Fr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=a[l],u=r[l];c!==0&&(ba.fromBufferAttribute(u,t),o?Fr.addScaledVector(ba,c):Fr.addScaledVector(ba.sub(e),c))}e.add(Fr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(kr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(kr,oh)===null||Ti.origin.distanceToSquared(oh)>(t.far-t.near)**2))&&(rh.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(rh),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let g=d[m],p=o[g.materialIndex],S=Math.max(g.start,f.start),v=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=S,U=v;x<U;x+=3){let C=a.getX(x),D=a.getX(x+1),O=a.getX(x+2);i=Hr(this,p,t,n,h,c,u,C,D,O),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let S=a.getX(g),v=a.getX(g+1),x=a.getX(g+2);i=Hr(this,o,t,n,h,c,u,S,v,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=d.length;m<y;m++){let g=d[m],p=o[g.materialIndex],S=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=S,U=v;x<U;x+=3){let C=x,D=x+1,O=x+2;i=Hr(this,p,t,n,h,c,u,C,D,O),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let S=g,v=g+1,x=g+2;i=Hr(this,o,t,n,h,c,u,S,v,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function sf(s,t,e,n,i,r,o,a){let l;if(t.side===Be?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===_i,a),l===null)return null;Br.copy(a),Br.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(Br);return h<e.near||h>e.far?null:{distance:h,point:Br.clone(),object:s}}function Hr(s,t,e,n,i,r,o,a,l,h){s.getVertexPosition(a,Nr),s.getVertexPosition(l,Or),s.getVertexPosition(h,zr);let c=sf(s,t,e,n,Nr,Or,zr,ah);if(c){let u=new R;Li.getBarycoord(ah,Nr,Or,zr,u),i&&(c.uv=Li.getInterpolatedAttribute(i,a,l,h,u,new bt)),r&&(c.uv1=Li.getInterpolatedAttribute(r,a,l,h,u,new bt)),o&&(c.normal=Li.getInterpolatedAttribute(o,a,l,h,u,new R),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let d={a,b:l,c:h,normal:new R,materialIndex:0};Li.getNormal(Nr,Or,zr,d.normal),c.face=d,c.barycoord=u}return c}var Rt=class s extends Ne{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],c=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new me(h,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(u,2));function m(y,g,p,S,v,x,U,C,D,O,w){let _=x/D,T=U/O,$=x/2,q=U/2,X=C/2,V=D+1,B=O+1,K=0,Y=0,ot=new R;for(let ft=0;ft<B;ft++){let vt=ft*T-q;for(let Ft=0;Ft<V;Ft++){let Mt=Ft*_-$;ot[y]=Mt*S,ot[g]=vt*v,ot[p]=X,h.push(ot.x,ot.y,ot.z),ot[y]=0,ot[g]=0,ot[p]=C>0?1:-1,c.push(ot.x,ot.y,ot.z),u.push(Ft/D),u.push(1-ft/O),K+=1}}for(let ft=0;ft<O;ft++)for(let vt=0;vt<D;vt++){let Ft=d+vt+V*ft,Mt=d+vt+V*(ft+1),Q=d+(vt+1)+V*(ft+1),F=d+(vt+1)+V*ft;l.push(Ft,Mt,F),l.push(Mt,Q,F),Y+=6}a.addGroup(f,Y,w),f+=Y,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ws(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function rn(s){let t={};for(let e=0;e<s.length;e++){let n=ws(s[e]);for(let i in n)t[i]=n[i]}return t}function rf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function lu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}var of={clone:ws,merge:rn},af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fn=class extends vi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=af,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=rf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ho=class extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mi=new R,lh=new bt,ch=new bt,Qe=class extends ho{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,lh,ch),e.subVectors(ch,lh)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Js*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/h,i*=o.width/l,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ls=-90,cs=1,El=class extends Ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Qe(ls,cs,t,e);i.layers=this.layers,this.add(i);let r=new Qe(ls,cs,t,e);r.layers=this.layers,this.add(r);let o=new Qe(ls,cs,t,e);o.layers=this.layers,this.add(o);let a=new Qe(ls,cs,t,e);a.layers=this.layers,this.add(a);let l=new Qe(ls,cs,t,e);l.layers=this.layers,this.add(l);let h=new Qe(ls,cs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===so)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},uo=class extends pn{constructor(t,e,n,i,r,o,a,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:_s,super(t,e,n,i,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},wl=class extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new uo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Rt(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:yi});r.uniforms.tEquirect.value=e;let o=new Pt(i,r),a=e.minFilter;return e.minFilter===ki&&(e.minFilter=zn),new El(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Sa=new R,cf=new R,hf=new he,fn=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Sa.subVectors(n,e).cross(cf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||hf.getNormalMatrix(t),i=this.coplanarPoint(Sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ai=new Es,Vr=new R,or=class{constructor(t=new fn,e=new fn,n=new fn,i=new fn,r=new fn,o=new fn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],h=i[4],c=i[5],u=i[6],d=i[7],f=i[8],m=i[9],y=i[10],g=i[11],p=i[12],S=i[13],v=i[14],x=i[15];if(n[0].setComponents(l-r,d-h,g-f,x-p).normalize(),n[1].setComponents(l+r,d+h,g+f,x+p).normalize(),n[2].setComponents(l+o,d+c,g+m,x+S).normalize(),n[3].setComponents(l-o,d-c,g-m,x-S).normalize(),n[4].setComponents(l-a,d-u,g-y,x-v).normalize(),e===ti)n[5].setComponents(l+a,d+u,g+y,x+v).normalize();else if(e===so)n[5].setComponents(a,u,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Vr.x=i.normal.x>0?t.max.x:t.min.x,Vr.y=i.normal.y>0?t.max.y:t.min.y,Vr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function cu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function uf(s){let t=new WeakMap;function e(a,l){let h=a.array,c=a.usage,u=h.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=s.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=s.SHORT;else if(h instanceof Uint32Array)f=s.UNSIGNED_INT;else if(h instanceof Int32Array)f=s.INT;else if(h instanceof Int8Array)f=s.BYTE;else if(h instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,h){let c=l.array,u=l.updateRanges;if(s.bindBuffer(h,a),u.length===0)s.bufferSubData(h,0,c);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],y=u[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let y=u[f];s.bufferSubData(h,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:i,remove:r,update:o}}var ie=class s extends Ne{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),h=a+1,c=l+1,u=t/a,d=e/l,f=[],m=[],y=[],g=[];for(let p=0;p<c;p++){let S=p*d-o;for(let v=0;v<h;v++){let x=v*u-r;m.push(x,-S,0),y.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let v=S+h*p,x=S+h*(p+1),U=S+1+h*(p+1),C=S+1+h*p;f.push(v,x,C),f.push(x,U,C)}this.setIndex(f),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(y,3)),this.setAttribute("uv",new me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
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
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xf=`#ifdef USE_AOMAP
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
#endif`,_f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vf=`#ifdef USE_BATCHING
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
#endif`,Mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Tf=`#ifdef USE_BUMPMAP
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kf=`#define PI 3.141592653589793
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
} // validated`,Nf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Of=`vec3 transformedNormal = objectNormal;
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
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
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
}`,tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ip=`uniform bool receiveShadow;
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
#endif`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cp=`PhysicalMaterial material;
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
#endif`,hp=`struct PhysicalMaterial {
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
}`,up=`
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mp=`#if defined( USE_POINTS_UV )
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
#endif`,bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ep=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`#ifdef USE_MORPHTARGETS
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
#endif`,Rp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Up=`#ifdef USE_NORMALMAP
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
#endif`,kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jp=`float getShadowMask() {
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
}`,Kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,Qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`#include <common>
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
}`,xm=`#if DEPTH_PACKING == 3200
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
}`,_m=`#define DISTANCE
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
}`,vm=`#define DISTANCE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`uniform float scale;
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
}`,Em=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Am=`#define LAMBERT
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
}`,Rm=`#define LAMBERT
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
}`,Cm=`#define MATCAP
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
}`,Pm=`#define MATCAP
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
}`,Im=`#define NORMAL
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
}`,Lm=`#define NORMAL
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
}`,Dm=`#define PHONG
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
}`,Um=`#define PHONG
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
}`,km=`#define STANDARD
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
}`,Nm=`#define STANDARD
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
}`,Om=`#define TOON
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
}`,zm=`#define TOON
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
}`,Fm=`uniform float size;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,Vm=`uniform vec3 color;
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
}`,Gm=`uniform float rotation;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:df,alphahash_pars_fragment:ff,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:yf,aomap_fragment:xf,aomap_pars_fragment:_f,batching_pars_vertex:vf,batching_vertex:Mf,begin_vertex:bf,beginnormal_vertex:Sf,bsdfs:Ef,iridescence_fragment:wf,bumpmap_pars_fragment:Tf,clipping_planes_fragment:Af,clipping_planes_pars_fragment:Rf,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:Pf,color_fragment:If,color_pars_fragment:Lf,color_pars_vertex:Df,color_vertex:Uf,common:kf,cube_uv_reflection_fragment:Nf,defaultnormal_vertex:Of,displacementmap_pars_vertex:zf,displacementmap_vertex:Ff,emissivemap_fragment:Bf,emissivemap_pars_fragment:Hf,colorspace_fragment:Vf,colorspace_pars_fragment:Gf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:$f,envmap_pars_vertex:qf,envmap_physical_pars_fragment:sp,envmap_vertex:Yf,fog_vertex:Zf,fog_pars_vertex:jf,fog_fragment:Kf,fog_pars_fragment:Jf,gradientmap_pars_fragment:Qf,lightmap_pars_fragment:tp,lights_lambert_fragment:ep,lights_lambert_pars_fragment:np,lights_pars_begin:ip,lights_toon_fragment:rp,lights_toon_pars_fragment:op,lights_phong_fragment:ap,lights_phong_pars_fragment:lp,lights_physical_fragment:cp,lights_physical_pars_fragment:hp,lights_fragment_begin:up,lights_fragment_maps:dp,lights_fragment_end:fp,logdepthbuf_fragment:pp,logdepthbuf_pars_fragment:mp,logdepthbuf_pars_vertex:gp,logdepthbuf_vertex:yp,map_fragment:xp,map_pars_fragment:_p,map_particle_fragment:vp,map_particle_pars_fragment:Mp,metalnessmap_fragment:bp,metalnessmap_pars_fragment:Sp,morphinstance_vertex:Ep,morphcolor_vertex:wp,morphnormal_vertex:Tp,morphtarget_pars_vertex:Ap,morphtarget_vertex:Rp,normal_fragment_begin:Cp,normal_fragment_maps:Pp,normal_pars_fragment:Ip,normal_pars_vertex:Lp,normal_vertex:Dp,normalmap_pars_fragment:Up,clearcoat_normal_fragment_begin:kp,clearcoat_normal_fragment_maps:Np,clearcoat_pars_fragment:Op,iridescence_pars_fragment:zp,opaque_fragment:Fp,packing:Bp,premultiplied_alpha_fragment:Hp,project_vertex:Vp,dithering_fragment:Gp,dithering_pars_fragment:Wp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:$p,shadowmap_pars_fragment:qp,shadowmap_pars_vertex:Yp,shadowmap_vertex:Zp,shadowmask_pars_fragment:jp,skinbase_vertex:Kp,skinning_pars_vertex:Jp,skinning_vertex:Qp,skinnormal_vertex:tm,specularmap_fragment:em,specularmap_pars_fragment:nm,tonemapping_fragment:im,tonemapping_pars_fragment:sm,transmission_fragment:rm,transmission_pars_fragment:om,uv_pars_fragment:am,uv_pars_vertex:lm,uv_vertex:cm,worldpos_vertex:hm,background_vert:um,background_frag:dm,backgroundCube_vert:fm,backgroundCube_frag:pm,cube_vert:mm,cube_frag:gm,depth_vert:ym,depth_frag:xm,distanceRGBA_vert:_m,distanceRGBA_frag:vm,equirect_vert:Mm,equirect_frag:bm,linedashed_vert:Sm,linedashed_frag:Em,meshbasic_vert:wm,meshbasic_frag:Tm,meshlambert_vert:Am,meshlambert_frag:Rm,meshmatcap_vert:Cm,meshmatcap_frag:Pm,meshnormal_vert:Im,meshnormal_frag:Lm,meshphong_vert:Dm,meshphong_frag:Um,meshphysical_vert:km,meshphysical_frag:Nm,meshtoon_vert:Om,meshtoon_frag:zm,points_vert:Fm,points_frag:Bm,shadow_vert:Hm,shadow_frag:Vm,sprite_vert:Gm,sprite_frag:Wm},Vt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},On={basic:{uniforms:rn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:rn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ae(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:rn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:rn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:rn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new ae(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:rn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:rn([Vt.points,Vt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:rn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:rn([Vt.common,Vt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:rn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:rn([Vt.sprite,Vt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:rn([Vt.common,Vt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:rn([Vt.lights,Vt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};On.physical={uniforms:rn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var Gr={r:0,b:0,g:0},Ri=new vn,Xm=new Re;function $m(s,t,e,n,i,r,o){let a=new ae(0),l=r===!0?0:1,h,c,u=null,d=0,f=null;function m(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function y(S){let v=!1,x=m(S);x===null?p(a,l):x&&x.isColor&&(p(x,1),v=!0);let U=s.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(S,v){let x=m(v);x&&(x.isCubeTexture||x.mapping===Po)?(c===void 0&&(c=new Pt(new Rt(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:ws(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(U,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Ri.copy(v.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(Ri)),c.material.toneMapped=ye.getTransfer(x.colorSpace)!==Ee,(u!==x||d!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new Pt(new ie(2,2),new Fn({name:"BackgroundMaterial",uniforms:ws(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=ye.getTransfer(x.colorSpace)!==Ee,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function p(S,v){S.getRGB(Gr,lu(s)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:y,addToRenderList:g}}function qm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(_,T,$,q,X){let V=!1,B=u(q,$,T);r!==B&&(r=B,h(r.object)),V=f(_,q,$,X),V&&m(_,q,$,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,x(_,T,$,q),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return s.createVertexArray()}function h(_){return s.bindVertexArray(_)}function c(_){return s.deleteVertexArray(_)}function u(_,T,$){let q=$.wireframe===!0,X=n[_.id];X===void 0&&(X={},n[_.id]=X);let V=X[T.id];V===void 0&&(V={},X[T.id]=V);let B=V[q];return B===void 0&&(B=d(l()),V[q]=B),B}function d(_){let T=[],$=[],q=[];for(let X=0;X<e;X++)T[X]=0,$[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:$,attributeDivisors:q,object:_,attributes:{},index:null}}function f(_,T,$,q){let X=r.attributes,V=T.attributes,B=0,K=$.getAttributes();for(let Y in K)if(K[Y].location>=0){let ft=X[Y],vt=V[Y];if(vt===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(vt=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(vt=_.instanceColor)),ft===void 0||ft.attribute!==vt||vt&&ft.data!==vt.data)return!0;B++}return r.attributesNum!==B||r.index!==q}function m(_,T,$,q){let X={},V=T.attributes,B=0,K=$.getAttributes();for(let Y in K)if(K[Y].location>=0){let ft=V[Y];ft===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(ft=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(ft=_.instanceColor));let vt={};vt.attribute=ft,ft&&ft.data&&(vt.data=ft.data),X[Y]=vt,B++}r.attributes=X,r.attributesNum=B,r.index=q}function y(){let _=r.newAttributes;for(let T=0,$=_.length;T<$;T++)_[T]=0}function g(_){p(_,0)}function p(_,T){let $=r.newAttributes,q=r.enabledAttributes,X=r.attributeDivisors;$[_]=1,q[_]===0&&(s.enableVertexAttribArray(_),q[_]=1),X[_]!==T&&(s.vertexAttribDivisor(_,T),X[_]=T)}function S(){let _=r.newAttributes,T=r.enabledAttributes;for(let $=0,q=T.length;$<q;$++)T[$]!==_[$]&&(s.disableVertexAttribArray($),T[$]=0)}function v(_,T,$,q,X,V,B){B===!0?s.vertexAttribIPointer(_,T,$,X,V):s.vertexAttribPointer(_,T,$,q,X,V)}function x(_,T,$,q){y();let X=q.attributes,V=$.getAttributes(),B=T.defaultAttributeValues;for(let K in V){let Y=V[K];if(Y.location>=0){let ot=X[K];if(ot===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor)),ot!==void 0){let ft=ot.normalized,vt=ot.itemSize,Ft=t.get(ot);if(Ft===void 0)continue;let Mt=Ft.buffer,Q=Ft.type,F=Ft.bytesPerElement,mt=Q===s.INT||Q===s.UNSIGNED_INT||ot.gpuType===oc;if(ot.isInterleavedBufferAttribute){let k=ot.data,St=k.stride,gt=ot.offset;if(k.isInstancedInterleavedBuffer){for(let Ct=0;Ct<Y.locationSize;Ct++)p(Y.location+Ct,k.meshPerAttribute);_.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Ct=0;Ct<Y.locationSize;Ct++)g(Y.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Ct=0;Ct<Y.locationSize;Ct++)v(Y.location+Ct,vt/Y.locationSize,Q,ft,St*F,(gt+vt/Y.locationSize*Ct)*F,mt)}else{if(ot.isInstancedBufferAttribute){for(let k=0;k<Y.locationSize;k++)p(Y.location+k,ot.meshPerAttribute);_.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let k=0;k<Y.locationSize;k++)g(Y.location+k);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let k=0;k<Y.locationSize;k++)v(Y.location+k,vt/Y.locationSize,Q,ft,vt*F,vt/Y.locationSize*k*F,mt)}}else if(B!==void 0){let ft=B[K];if(ft!==void 0)switch(ft.length){case 2:s.vertexAttrib2fv(Y.location,ft);break;case 3:s.vertexAttrib3fv(Y.location,ft);break;case 4:s.vertexAttrib4fv(Y.location,ft);break;default:s.vertexAttrib1fv(Y.location,ft)}}}}S()}function U(){O();for(let _ in n){let T=n[_];for(let $ in T){let q=T[$];for(let X in q)c(q[X].object),delete q[X];delete T[$]}delete n[_]}}function C(_){if(n[_.id]===void 0)return;let T=n[_.id];for(let $ in T){let q=T[$];for(let X in q)c(q[X].object),delete q[X];delete T[$]}delete n[_.id]}function D(_){for(let T in n){let $=n[T];if($[_.id]===void 0)continue;let q=$[_.id];for(let X in q)c(q[X].object),delete q[X];delete $[_.id]}}function O(){w(),o=!0,r!==i&&(r=i,h(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:O,resetDefaultState:w,dispose:U,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:g,disableUnusedAttributes:S}}function Ym(s,t,e){let n;function i(h){n=h}function r(h,c){s.drawArrays(n,h,c),e.update(c,n,1)}function o(h,c,u){u!==0&&(s.drawArraysInstanced(n,h,c,u),e.update(c,n,u))}function a(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,u);let f=0;for(let m=0;m<u;m++)f+=c[m];e.update(f,n,1)}function l(h,c,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<h.length;m++)o(h[m],c[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,c,0,d,0,u);let m=0;for(let y=0;y<u;y++)m+=c[y]*d[y];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(D){return!(D!==In&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let O=D===gr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==ii&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Qn&&!O)}function l(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=m>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:U,maxSamples:C}}function jm(s){let t=this,e=null,n=0,i=!1,r=!1,o=new fn,a=new he,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?c(null):h();else{let S=r?0:n,v=S*4,x=p.clippingState||null;l.value=x,x=c(m,d,v,f);for(let U=0;U!==v;++U)x[U]=e[U];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,d,f,m){let y=u!==null?u.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let p=f+y*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,x=f;v!==y;++v,x+=4)o.copy(u[v]).applyMatrix4(S,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function Km(s){let t=new WeakMap;function e(o,a){return a===Xa?o.mapping=_s:a===$a&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xa||a===$a)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new wl(l.height);return h.fromEquirectangularTexture(s,o),t.set(o,h),o.addEventListener("dispose",i),e(h.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var fo=class extends ho{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ds=4,hh=[.125,.215,.35,.446,.526,.582],Di=20,Ea=new fo,uh=new ae,wa=null,Ta=0,Aa=0,Ra=!1,Pi=(1+Math.sqrt(5))/2,hs=1/Pi,dh=[new R(-Pi,hs,0),new R(Pi,hs,0),new R(-hs,0,Pi),new R(hs,0,Pi),new R(0,Pi,-hs),new R(0,Pi,hs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Ts=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){wa=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wa,Ta,Aa),this._renderer.xr.enabled=Ra,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wa=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:gr,format:In,colorSpace:ks,depthBuffer:!1},i=fh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(r)),this._blurMaterial=Qm(r,t,e)}return i}_compileMaterial(t){let e=new Pt(this._lodPlanes[0],t);this._renderer.compile(e,Ea)}_sceneToCubeUV(t,e,n,i){let a=new Qe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(uh),c.toneMapping=xi,c.autoClear=!1;let f=new xe({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),m=new Pt(new Rt,f),y=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,y=!0):(f.color.copy(uh),y=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));let v=this._cubeSize;Wr(i,S*v,p>2?v:0,v,v),c.setRenderTarget(i),y&&c.render(m,a),c.render(t,a)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=d,c.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===_s||t.mapping===vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ph());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Wr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ea)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=dh[(i-r-1)%dh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,u=new Pt(this._lodPlanes[i],h),d=h.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Di-1),y=r/m,g=isFinite(r)?1+Math.floor(c*y):Di;g>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Di}`);let p=[],S=0;for(let D=0;D<Di;++D){let O=D/y,w=Math.exp(-O*O/2);p.push(w),D===0?S+=w:D<g&&(S+=2*w)}for(let D=0;D<p.length;D++)p[D]=p[D]/S;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;let x=this._sizeLods[i],U=3*x*(i>v-ds?i-v+ds:0),C=4*(this._cubeSize-x);Wr(e,U,C,3*x,2*x),l.setRenderTarget(e),l.render(u,Ea)}};function Jm(s){let t=[],e=[],n=[],i=s,r=s-ds+1+hh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-ds?l=hh[o-s+ds-1]:o===0&&(l=0),n.push(l);let h=1/(a-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,m=6,y=3,g=2,p=1,S=new Float32Array(y*m*f),v=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let C=0;C<f;C++){let D=C%3*2/3-1,O=C>2?0:-1,w=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];S.set(w,y*m*C),v.set(d,g*m*C);let _=[C,C,C,C,C,C];x.set(_,p*m*C)}let U=new Ne;U.setAttribute("position",new _n(S,y)),U.setAttribute("uv",new _n(v,g)),U.setAttribute("faceIndex",new _n(x,p)),t.push(U),i>ds&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fh(s,t,e){let n=new ri(s,t,e);return n.texture.mapping=Po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Qm(s,t,e){let n=new Float32Array(Di),i=new R(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function ph(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function mh(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}function t0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,h=l===Xa||l===$a,c=l===_s||l===vs;if(h||c){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ts(s)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return h&&f&&f.height>0||c&&f&&i(f)?(e===null&&(e=new Ts(s)),u=h?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function e0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&js("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function n0(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let y=d.morphAttributes[m];for(let g=0,p=y.length;g<p;g++)t.remove(y[g])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)t.update(d[m],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let y=f[m];for(let g=0,p=y.length;g<p;g++)t.update(y[g],s.ARRAY_BUFFER)}}function h(u){let d=[],f=u.index,m=u.attributes.position,y=0;if(f!==null){let S=f.array;y=f.version;for(let v=0,x=S.length;v<x;v+=3){let U=S[v+0],C=S[v+1],D=S[v+2];d.push(U,C,C,D,D,U)}}else if(m!==void 0){let S=m.array;y=m.version;for(let v=0,x=S.length/3-1;v<x;v+=3){let U=v+0,C=v+1,D=v+2;d.push(U,C,C,D,D,U)}}else return;let g=new(ou(d)?co:lo)(d,1);g.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function c(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:c}}function i0(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function h(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function c(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,y){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)h(d[p]/o,f[p],y[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,m);let p=0;for(let S=0;S<m;S++)p+=f[S]*y[S];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function s0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function r0(s,t,e){let n=new WeakMap,i=new we;function r(o,a,l){let h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],v=0;f===!0&&(v=1),m===!0&&(v=2),y===!0&&(v=3);let x=a.attributes.position.count*v,U=1;x>t.maxTextureSize&&(U=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let C=new Float32Array(x*U*4*u),D=new ao(C,x,U,u);D.type=Qn,D.needsUpdate=!0;let O=v*4;for(let _=0;_<u;_++){let T=g[_],$=p[_],q=S[_],X=x*U*4*_;for(let V=0;V<T.count;V++){let B=V*O;f===!0&&(i.fromBufferAttribute(T,V),C[X+B+0]=i.x,C[X+B+1]=i.y,C[X+B+2]=i.z,C[X+B+3]=0),m===!0&&(i.fromBufferAttribute($,V),C[X+B+4]=i.x,C[X+B+5]=i.y,C[X+B+6]=i.z,C[X+B+7]=0),y===!0&&(i.fromBufferAttribute(q,V),C[X+B+8]=i.x,C[X+B+9]=i.y,C[X+B+10]=i.z,C[X+B+11]=q.itemSize===4?i.w:1)}}d={count:u,texture:D,size:new bt(x,U)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<h.length;y++)f+=h[y];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",h)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function o0(s,t,e,n){let i=new WeakMap;function r(l){let h=n.render.frame,c=l.geometry,u=t.get(l,c);if(i.get(u)!==h&&(t.update(u),i.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return u}function o(){i=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var po=class extends pn{constructor(t,e,n,i,r,o,a,l,h,c=ms){if(c!==ms&&c!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===ms&&(n=Ni),n===void 0&&c===bs&&(n=Ms),super(null,i,r,o,a,l,c,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},hu=new pn,gh=new po(1,1),uu=new ao,du=new Sl,fu=new uo,yh=[],xh=[],_h=new Float32Array(16),vh=new Float32Array(9),Mh=new Float32Array(4);function Ns(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=yh[i];if(r===void 0&&(r=new Float32Array(i),yh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ge(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function We(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Lo(s,t){let e=xh[t];e===void 0&&(e=new Int32Array(t),xh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function a0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function l0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2fv(this.addr,t),We(e,t)}}function c0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;s.uniform3fv(this.addr,t),We(e,t)}}function h0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4fv(this.addr,t),We(e,t)}}function u0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;Mh.set(n),s.uniformMatrix2fv(this.addr,!1,Mh),We(e,n)}}function d0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;vh.set(n),s.uniformMatrix3fv(this.addr,!1,vh),We(e,n)}}function f0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;_h.set(n),s.uniformMatrix4fv(this.addr,!1,_h),We(e,n)}}function p0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function m0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2iv(this.addr,t),We(e,t)}}function g0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;s.uniform3iv(this.addr,t),We(e,t)}}function y0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4iv(this.addr,t),We(e,t)}}function x0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function _0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2uiv(this.addr,t),We(e,t)}}function v0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;s.uniform3uiv(this.addr,t),We(e,t)}}function M0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4uiv(this.addr,t),We(e,t)}}function b0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(gh.compareFunction=ru,r=gh):r=hu,e.setTexture2D(t||r,i)}function S0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||du,i)}function E0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||fu,i)}function w0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||uu,i)}function T0(s){switch(s){case 5126:return a0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return u0;case 35675:return d0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return y0;case 5125:return x0;case 36294:return _0;case 36295:return v0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return w0}}function A0(s,t){s.uniform1fv(this.addr,t)}function R0(s,t){let e=Ns(t,this.size,2);s.uniform2fv(this.addr,e)}function C0(s,t){let e=Ns(t,this.size,3);s.uniform3fv(this.addr,e)}function P0(s,t){let e=Ns(t,this.size,4);s.uniform4fv(this.addr,e)}function I0(s,t){let e=Ns(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function L0(s,t){let e=Ns(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function D0(s,t){let e=Ns(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function U0(s,t){s.uniform1iv(this.addr,t)}function k0(s,t){s.uniform2iv(this.addr,t)}function N0(s,t){s.uniform3iv(this.addr,t)}function O0(s,t){s.uniform4iv(this.addr,t)}function z0(s,t){s.uniform1uiv(this.addr,t)}function F0(s,t){s.uniform2uiv(this.addr,t)}function B0(s,t){s.uniform3uiv(this.addr,t)}function H0(s,t){s.uniform4uiv(this.addr,t)}function V0(s,t,e){let n=this.cache,i=t.length,r=Lo(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||hu,r[o])}function G0(s,t,e){let n=this.cache,i=t.length,r=Lo(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||du,r[o])}function W0(s,t,e){let n=this.cache,i=t.length,r=Lo(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||fu,r[o])}function X0(s,t,e){let n=this.cache,i=t.length,r=Lo(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||uu,r[o])}function $0(s){switch(s){case 5126:return A0;case 35664:return R0;case 35665:return C0;case 35666:return P0;case 35674:return I0;case 35675:return L0;case 35676:return D0;case 5124:case 35670:return U0;case 35667:case 35671:return k0;case 35668:case 35672:return N0;case 35669:case 35673:return O0;case 5125:return z0;case 36294:return F0;case 36295:return B0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}var Tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=T0(e.type)}},Al=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$0(e.type)}},Rl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Ca=/(\w+)(\])?(\[|\.)?/g;function bh(s,t){s.seq.push(t),s.map[t.id]=t}function q0(s,t,e){let n=s.name,i=n.length;for(Ca.lastIndex=0;;){let r=Ca.exec(n),o=Ca.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===i){bh(e,h===void 0?new Tl(a,s,t):new Al(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Rl(a),bh(e,u)),e=u}}}var ys=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);q0(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Sh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Y0=37297,Z0=0;function j0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Eh=new he;function K0(s){ye._getMatrix(Eh,ye.workingColorSpace,s);let t=`mat3( ${Eh.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(s)){case Io:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function wh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+j0(s.getShaderSource(t),o)}else return i}function J0(s,t){let e=K0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Q0(s,t){let e;switch(t){case cd:e="Linear";break;case hd:e="Reinhard";break;case ud:e="Cineon";break;case rc:e="ACESFilmic";break;case fd:e="AgX";break;case pd:e="Neutral";break;case dd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xr=new R;function tg(){ye.getLuminanceCoefficients(Xr);let s=Xr.x.toFixed(4),t=Xr.y.toFixed(4),e=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function ng(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ig(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Ks(s){return s!==""}function Th(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ah(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(s){return s.replace(sg,og)}var rg=new Map;function og(s,t){let e=fe[t];if(e===void 0){let n=rg.get(t);if(n!==void 0)e=fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cl(e)}var ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(s){return s.replace(ag,lg)}function lg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ch(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function cg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===sc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Jn&&(t="SHADOWMAP_TYPE_VSM"),t}function hg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _s:case vs:t="ENVMAP_TYPE_CUBE";break;case Po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ug(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function dg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $h:t="ENVMAP_BLENDING_MULTIPLY";break;case ad:t="ENVMAP_BLENDING_MIX";break;case ld:t="ENVMAP_BLENDING_ADD";break}return t}function fg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function pg(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=cg(e),h=hg(e),c=ug(e),u=dg(e),d=fg(e),f=eg(e),m=ng(r),y=i.createProgram(),g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ks).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ks).join(`
`),p.length>0&&(p+=`
`)):(g=[Ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),p=[Ch(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?fe.tonemapping_pars_fragment:"",e.toneMapping!==xi?Q0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,J0("linearToOutputTexel",e.outputColorSpace),tg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ks).join(`
`)),o=Cl(o),o=Th(o,e),o=Ah(o,e),a=Cl(a),a=Th(a,e),a=Ah(a,e),o=Rh(o),a=Rh(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=S+g+o,x=S+p+a,U=Sh(i,i.VERTEX_SHADER,v),C=Sh(i,i.FRAGMENT_SHADER,x);i.attachShader(y,U),i.attachShader(y,C),e.index0AttributeName!==void 0?i.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function D(T){if(s.debug.checkShaderErrors){let $=i.getProgramInfoLog(y).trim(),q=i.getShaderInfoLog(U).trim(),X=i.getShaderInfoLog(C).trim(),V=!0,B=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,U,C);else{let K=wh(i,U,"vertex"),Y=wh(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+$+`
`+K+`
`+Y)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(q===""||X==="")&&(B=!1);B&&(T.diagnostics={runnable:V,programLog:$,vertexShader:{log:q,prefix:g},fragmentShader:{log:X,prefix:p}})}i.deleteShader(U),i.deleteShader(C),O=new ys(i,y),w=ig(i,y)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(y,Y0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Z0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=C,this}var mg=0,Pl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Il(t),e.set(t,n)),n}},Il=class{constructor(t){this.id=mg++,this.code=t,this.usedTimes=0}};function gg(s,t,e,n,i,r,o){let a=new rr,l=new Pl,h=new Set,c=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return h.add(w),w===0?"uv":`uv${w}`}function g(w,_,T,$,q){let X=$.fog,V=q.geometry,B=w.isMeshStandardMaterial?$.environment:null,K=(w.isMeshStandardMaterial?e:t).get(w.envMap||B),Y=K&&K.mapping===Po?K.image.height:null,ot=m[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let ft=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,vt=ft!==void 0?ft.length:0,Ft=0;V.morphAttributes.position!==void 0&&(Ft=1),V.morphAttributes.normal!==void 0&&(Ft=2),V.morphAttributes.color!==void 0&&(Ft=3);let Mt,Q,F,mt;if(ot){let pe=On[ot];Mt=pe.vertexShader,Q=pe.fragmentShader}else Mt=w.vertexShader,Q=w.fragmentShader,l.update(w),F=l.getVertexShaderID(w),mt=l.getFragmentShaderID(w);let k=s.getRenderTarget(),St=s.state.buffers.depth.getReversed(),gt=q.isInstancedMesh===!0,Ct=q.isBatchedMesh===!0,Lt=!!w.map,L=!!w.matcap,H=!!K,E=!!w.aoMap,_t=!!w.lightMap,at=!!w.bumpMap,Tt=!!w.normalMap,ct=!!w.displacementMap,Gt=!!w.emissiveMap,Nt=!!w.metalnessMap,A=!!w.roughnessMap,M=w.anisotropy>0,J=w.clearcoat>0,st=w.dispersion>0,lt=w.iridescence>0,it=w.sheen>0,Ot=w.transmission>0,It=M&&!!w.anisotropyMap,Bt=J&&!!w.clearcoatMap,Xt=J&&!!w.clearcoatNormalMap,dt=J&&!!w.clearcoatRoughnessMap,N=lt&&!!w.iridescenceMap,pt=lt&&!!w.iridescenceThicknessMap,ht=it&&!!w.sheenColorMap,Dt=it&&!!w.sheenRoughnessMap,Qt=!!w.specularMap,Kt=!!w.specularColorMap,de=!!w.specularIntensityMap,G=Ot&&!!w.transmissionMap,kt=Ot&&!!w.thicknessMap,rt=!!w.gradientMap,yt=!!w.alphaMap,zt=w.alphaTest>0,Ht=!!w.alphaHash,Jt=!!w.extensions,Ae=xi;w.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ae=s.toneMapping);let ke={shaderID:ot,shaderType:w.type,shaderName:w.name,vertexShader:Mt,fragmentShader:Q,defines:w.defines,customVertexShaderID:F,customFragmentShaderID:mt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ct,batchingColor:Ct&&q._colorsTexture!==null,instancing:gt,instancingColor:gt&&q.instanceColor!==null,instancingMorph:gt&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:k===null?s.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ks,alphaToCoverage:!!w.alphaToCoverage,map:Lt,matcap:L,envMap:H,envMapMode:H&&K.mapping,envMapCubeUVHeight:Y,aoMap:E,lightMap:_t,bumpMap:at,normalMap:Tt,displacementMap:d&&ct,emissiveMap:Gt,normalMapObjectSpace:Tt&&w.normalMapType===xd,normalMapTangentSpace:Tt&&w.normalMapType===su,metalnessMap:Nt,roughnessMap:A,anisotropy:M,anisotropyMap:It,clearcoat:J,clearcoatMap:Bt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:dt,dispersion:st,iridescence:lt,iridescenceMap:N,iridescenceThicknessMap:pt,sheen:it,sheenColorMap:ht,sheenRoughnessMap:Dt,specularMap:Qt,specularColorMap:Kt,specularIntensityMap:de,transmission:Ot,transmissionMap:G,thicknessMap:kt,gradientMap:rt,opaque:w.transparent===!1&&w.blending===ps&&w.alphaToCoverage===!1,alphaMap:yt,alphaTest:zt,alphaHash:Ht,combine:w.combine,mapUv:Lt&&y(w.map.channel),aoMapUv:E&&y(w.aoMap.channel),lightMapUv:_t&&y(w.lightMap.channel),bumpMapUv:at&&y(w.bumpMap.channel),normalMapUv:Tt&&y(w.normalMap.channel),displacementMapUv:ct&&y(w.displacementMap.channel),emissiveMapUv:Gt&&y(w.emissiveMap.channel),metalnessMapUv:Nt&&y(w.metalnessMap.channel),roughnessMapUv:A&&y(w.roughnessMap.channel),anisotropyMapUv:It&&y(w.anisotropyMap.channel),clearcoatMapUv:Bt&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:N&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&y(w.sheenRoughnessMap.channel),specularMapUv:Qt&&y(w.specularMap.channel),specularColorMapUv:Kt&&y(w.specularColorMap.channel),specularIntensityMapUv:de&&y(w.specularIntensityMap.channel),transmissionMapUv:G&&y(w.transmissionMap.channel),thicknessMapUv:kt&&y(w.thicknessMap.channel),alphaMapUv:yt&&y(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Tt||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!V.attributes.uv&&(Lt||yt),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:q.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Ft,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Lt&&w.map.isVideoTexture===!0&&ye.getTransfer(w.map.colorSpace)===Ee,decodeVideoTextureEmissive:Gt&&w.emissiveMap.isVideoTexture===!0&&ye.getTransfer(w.emissiveMap.colorSpace)===Ee,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ve,flipSided:w.side===Be,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Jt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&w.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ke.vertexUv1s=h.has(1),ke.vertexUv2s=h.has(2),ke.vertexUv3s=h.has(3),h.clear(),ke}function p(w){let _=[];if(w.shaderID?_.push(w.shaderID):(_.push(w.customVertexShaderID),_.push(w.customFragmentShaderID)),w.defines!==void 0)for(let T in w.defines)_.push(T),_.push(w.defines[T]);return w.isRawShaderMaterial===!1&&(S(_,w),v(_,w),_.push(s.outputColorSpace)),_.push(w.customProgramCacheKey),_.join()}function S(w,_){w.push(_.precision),w.push(_.outputColorSpace),w.push(_.envMapMode),w.push(_.envMapCubeUVHeight),w.push(_.mapUv),w.push(_.alphaMapUv),w.push(_.lightMapUv),w.push(_.aoMapUv),w.push(_.bumpMapUv),w.push(_.normalMapUv),w.push(_.displacementMapUv),w.push(_.emissiveMapUv),w.push(_.metalnessMapUv),w.push(_.roughnessMapUv),w.push(_.anisotropyMapUv),w.push(_.clearcoatMapUv),w.push(_.clearcoatNormalMapUv),w.push(_.clearcoatRoughnessMapUv),w.push(_.iridescenceMapUv),w.push(_.iridescenceThicknessMapUv),w.push(_.sheenColorMapUv),w.push(_.sheenRoughnessMapUv),w.push(_.specularMapUv),w.push(_.specularColorMapUv),w.push(_.specularIntensityMapUv),w.push(_.transmissionMapUv),w.push(_.thicknessMapUv),w.push(_.combine),w.push(_.fogExp2),w.push(_.sizeAttenuation),w.push(_.morphTargetsCount),w.push(_.morphAttributeCount),w.push(_.numDirLights),w.push(_.numPointLights),w.push(_.numSpotLights),w.push(_.numSpotLightMaps),w.push(_.numHemiLights),w.push(_.numRectAreaLights),w.push(_.numDirLightShadows),w.push(_.numPointLightShadows),w.push(_.numSpotLightShadows),w.push(_.numSpotLightShadowsWithMaps),w.push(_.numLightProbes),w.push(_.shadowMapType),w.push(_.toneMapping),w.push(_.numClippingPlanes),w.push(_.numClipIntersection),w.push(_.depthPacking)}function v(w,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){let _=m[w.type],T;if(_){let $=On[_];T=of.clone($.uniforms)}else T=w.uniforms;return T}function U(w,_){let T;for(let $=0,q=c.length;$<q;$++){let X=c[$];if(X.cacheKey===_){T=X,++T.usedTimes;break}}return T===void 0&&(T=new pg(s,_,w,r),c.push(T)),T}function C(w){if(--w.usedTimes===0){let _=c.indexOf(w);c[_]=c[c.length-1],c.pop(),w.destroy()}}function D(w){l.remove(w)}function O(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:U,releaseProgram:C,releaseShaderCache:D,programs:c,dispose:O}}function yg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function xg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ph(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ih(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,m,y,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:y,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=y,p.group=g),t++,p}function a(u,d,f,m,y,g){let p=o(u,d,f,m,y,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,m,y,g){let p=o(u,d,f,m,y,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function h(u,d){e.length>1&&e.sort(u||xg),n.length>1&&n.sort(d||Ph),i.length>1&&i.sort(d||Ph)}function c(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:c,sort:h}}function _g(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Ih,s.set(n,[o])):i>=r.length?(o=new Ih,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function vg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new ae};break;case"SpotLight":e={position:new R,direction:new R,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function Mg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var bg=0;function Sg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Eg(s){let t=new vg,e=Mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new R);let i=new R,r=new Re,o=new Re;function a(h){let c=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,y=0,g=0,p=0,S=0,v=0,x=0,U=0,C=0,D=0;h.sort(Sg);for(let w=0,_=h.length;w<_;w++){let T=h[w],$=T.color,q=T.intensity,X=T.distance,V=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)c+=$.r*q,u+=$.g*q,d+=$.b*q;else if(T.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(T.sh.coefficients[B],q);D++}else if(T.isDirectionalLight){let B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let K=T.shadow,Y=e.get(T);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=T.shadow.matrix,S++}n.directional[f]=B,f++}else if(T.isSpotLight){let B=t.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy($).multiplyScalar(q),B.distance=X,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,n.spot[y]=B;let K=T.shadow;if(T.map&&(n.spotLightMap[U]=T.map,U++,K.updateMatrices(T),T.castShadow&&C++),n.spotLightMatrix[y]=K.matrix,T.castShadow){let Y=e.get(T);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,n.spotShadow[y]=Y,n.spotShadowMap[y]=V,x++}y++}else if(T.isRectAreaLight){let B=t.get(T);B.color.copy($).multiplyScalar(q),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=B,g++}else if(T.isPointLight){let B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){let K=T.shadow,Y=e.get(T);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,n.pointShadow[m]=Y,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=T.shadow.matrix,v++}n.point[m]=B,m++}else if(T.isHemisphereLight){let B=t.get(T);B.skyColor.copy(T.color).multiplyScalar(q),B.groundColor.copy(T.groundColor).multiplyScalar(q),n.hemi[p]=B,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Vt.LTC_FLOAT_1,n.rectAreaLTC2=Vt.LTC_FLOAT_2):(n.rectAreaLTC1=Vt.LTC_HALF_1,n.rectAreaLTC2=Vt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=d;let O=n.hash;(O.directionalLength!==f||O.pointLength!==m||O.spotLength!==y||O.rectAreaLength!==g||O.hemiLength!==p||O.numDirectionalShadows!==S||O.numPointShadows!==v||O.numSpotShadows!==x||O.numSpotMaps!==U||O.numLightProbes!==D)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+U-C,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=D,O.directionalLength=f,O.pointLength=m,O.spotLength=y,O.rectAreaLength=g,O.hemiLength=p,O.numDirectionalShadows=S,O.numPointShadows=v,O.numSpotShadows=x,O.numSpotMaps=U,O.numLightProbes=D,n.version=bg++)}function l(h,c){let u=0,d=0,f=0,m=0,y=0,g=c.matrixWorldInverse;for(let p=0,S=h.length;p<S;p++){let v=h[p];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(v.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let x=n.hemi[y];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:n}}function Lh(s){let t=new Eg(s),e=[],n=[];function i(c){h.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function o(c){n.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function wg(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Lh(s),t.set(i,[a])):r>=o.length?(a=new Lh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ll=class extends vi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Dl=class extends vi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ag=`uniform sampler2D shadow_pass;
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
}`;function Rg(s,t,e){let n=new or,i=new bt,r=new bt,o=new we,a=new Ll({depthPacking:yd}),l=new Dl,h={},c=e.maxTextureSize,u={[_i]:Be,[Be]:_i,[Ve]:Ve},d=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Tg,fragmentShader:Ag}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ne;m.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Pt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh;let p=this.type;this.render=function(C,D,O){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let w=s.getRenderTarget(),_=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),$=s.state;$.setBlending(yi),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let q=p!==Jn&&this.type===Jn,X=p===Jn&&this.type!==Jn;for(let V=0,B=C.length;V<B;V++){let K=C[V],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let ot=Y.getFrameExtents();if(i.multiply(ot),r.copy(Y.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/ot.x),i.x=r.x*ot.x,Y.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/ot.y),i.y=r.y*ot.y,Y.mapSize.y=r.y)),Y.map===null||q===!0||X===!0){let vt=this.type!==Jn?{minFilter:Ln,magFilter:Ln}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ri(i.x,i.y,vt),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();let ft=Y.getViewportCount();for(let vt=0;vt<ft;vt++){let Ft=Y.getViewport(vt);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),$.viewport(o),Y.updateMatrices(K,vt),n=Y.getFrustum(),x(D,O,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===Jn&&S(Y,O),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(w,_,T)};function S(C,D){let O=t.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ri(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(D,null,O,d,y,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(D,null,O,f,y,null)}function v(C,D,O,w){let _=null,T=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)_=T;else if(_=O.isPointLight===!0?l:a,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let $=_.uuid,q=D.uuid,X=h[$];X===void 0&&(X={},h[$]=X);let V=X[q];V===void 0&&(V=_.clone(),X[q]=V,D.addEventListener("dispose",U)),_=V}if(_.visible=D.visible,_.wireframe=D.wireframe,w===Jn?_.side=D.shadowSide!==null?D.shadowSide:D.side:_.side=D.shadowSide!==null?D.shadowSide:u[D.side],_.alphaMap=D.alphaMap,_.alphaTest=D.alphaTest,_.map=D.map,_.clipShadows=D.clipShadows,_.clippingPlanes=D.clippingPlanes,_.clipIntersection=D.clipIntersection,_.displacementMap=D.displacementMap,_.displacementScale=D.displacementScale,_.displacementBias=D.displacementBias,_.wireframeLinewidth=D.wireframeLinewidth,_.linewidth=D.linewidth,O.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let $=s.properties.get(_);$.light=O}return _}function x(C,D,O,w,_){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===Jn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);let q=t.update(C),X=C.material;if(Array.isArray(X)){let V=q.groups;for(let B=0,K=V.length;B<K;B++){let Y=V[B],ot=X[Y.materialIndex];if(ot&&ot.visible){let ft=v(C,ot,w,_);C.onBeforeShadow(s,C,D,O,q,ft,Y),s.renderBufferDirect(O,null,q,ft,C,Y),C.onAfterShadow(s,C,D,O,q,ft,Y)}}}else if(X.visible){let V=v(C,X,w,_);C.onBeforeShadow(s,C,D,O,q,V,null),s.renderBufferDirect(O,null,q,V,C,null),C.onAfterShadow(s,C,D,O,q,V,null)}}let $=C.children;for(let q=0,X=$.length;q<X;q++)x($[q],D,O,w,_)}function U(C){C.target.removeEventListener("dispose",U);for(let O in h){let w=h[O],_=C.target.uuid;_ in w&&(w[_].dispose(),delete w[_])}}}var Cg={[za]:Fa,[Ba]:Ga,[Ha]:Wa,[xs]:Va,[Fa]:za,[Ga]:Ba,[Wa]:Ha,[Va]:xs};function Pg(s,t){function e(){let G=!1,kt=new we,rt=null,yt=new we(0,0,0,0);return{setMask:function(zt){rt!==zt&&!G&&(s.colorMask(zt,zt,zt,zt),rt=zt)},setLocked:function(zt){G=zt},setClear:function(zt,Ht,Jt,Ae,ke){ke===!0&&(zt*=Ae,Ht*=Ae,Jt*=Ae),kt.set(zt,Ht,Jt,Ae),yt.equals(kt)===!1&&(s.clearColor(zt,Ht,Jt,Ae),yt.copy(kt))},reset:function(){G=!1,rt=null,yt.set(-1,0,0,0)}}}function n(){let G=!1,kt=!1,rt=null,yt=null,zt=null;return{setReversed:function(Ht){if(kt!==Ht){let Jt=t.get("EXT_clip_control");kt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);let Ae=zt;zt=null,this.setClear(Ae)}kt=Ht},getReversed:function(){return kt},setTest:function(Ht){Ht?k(s.DEPTH_TEST):St(s.DEPTH_TEST)},setMask:function(Ht){rt!==Ht&&!G&&(s.depthMask(Ht),rt=Ht)},setFunc:function(Ht){if(kt&&(Ht=Cg[Ht]),yt!==Ht){switch(Ht){case za:s.depthFunc(s.NEVER);break;case Fa:s.depthFunc(s.ALWAYS);break;case Ba:s.depthFunc(s.LESS);break;case xs:s.depthFunc(s.LEQUAL);break;case Ha:s.depthFunc(s.EQUAL);break;case Va:s.depthFunc(s.GEQUAL);break;case Ga:s.depthFunc(s.GREATER);break;case Wa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=Ht}},setLocked:function(Ht){G=Ht},setClear:function(Ht){zt!==Ht&&(kt&&(Ht=1-Ht),s.clearDepth(Ht),zt=Ht)},reset:function(){G=!1,rt=null,yt=null,zt=null,kt=!1}}}function i(){let G=!1,kt=null,rt=null,yt=null,zt=null,Ht=null,Jt=null,Ae=null,ke=null;return{setTest:function(pe){G||(pe?k(s.STENCIL_TEST):St(s.STENCIL_TEST))},setMask:function(pe){kt!==pe&&!G&&(s.stencilMask(pe),kt=pe)},setFunc:function(pe,Je,z){(rt!==pe||yt!==Je||zt!==z)&&(s.stencilFunc(pe,Je,z),rt=pe,yt=Je,zt=z)},setOp:function(pe,Je,z){(Ht!==pe||Jt!==Je||Ae!==z)&&(s.stencilOp(pe,Je,z),Ht=pe,Jt=Je,Ae=z)},setLocked:function(pe){G=pe},setClear:function(pe){ke!==pe&&(s.clearStencil(pe),ke=pe)},reset:function(){G=!1,kt=null,rt=null,yt=null,zt=null,Ht=null,Jt=null,Ae=null,ke=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,h=new WeakMap,c={},u={},d=new WeakMap,f=[],m=null,y=!1,g=null,p=null,S=null,v=null,x=null,U=null,C=null,D=new ae(0,0,0),O=0,w=!1,_=null,T=null,$=null,q=null,X=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,K=0,Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=K>=2);let ot=null,ft={},vt=s.getParameter(s.SCISSOR_BOX),Ft=s.getParameter(s.VIEWPORT),Mt=new we().fromArray(vt),Q=new we().fromArray(Ft);function F(G,kt,rt,yt){let zt=new Uint8Array(4),Ht=s.createTexture();s.bindTexture(G,Ht),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Jt=0;Jt<rt;Jt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(kt,0,s.RGBA,1,1,yt,0,s.RGBA,s.UNSIGNED_BYTE,zt):s.texImage2D(kt+Jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,zt);return Ht}let mt={};mt[s.TEXTURE_2D]=F(s.TEXTURE_2D,s.TEXTURE_2D,1),mt[s.TEXTURE_CUBE_MAP]=F(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[s.TEXTURE_2D_ARRAY]=F(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),mt[s.TEXTURE_3D]=F(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(s.DEPTH_TEST),o.setFunc(xs),at(!1),Tt(Dc),k(s.CULL_FACE),E(yi);function k(G){c[G]!==!0&&(s.enable(G),c[G]=!0)}function St(G){c[G]!==!1&&(s.disable(G),c[G]=!1)}function gt(G,kt){return u[G]!==kt?(s.bindFramebuffer(G,kt),u[G]=kt,G===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=kt),G===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=kt),!0):!1}function Ct(G,kt){let rt=f,yt=!1;if(G){rt=d.get(kt),rt===void 0&&(rt=[],d.set(kt,rt));let zt=G.textures;if(rt.length!==zt.length||rt[0]!==s.COLOR_ATTACHMENT0){for(let Ht=0,Jt=zt.length;Ht<Jt;Ht++)rt[Ht]=s.COLOR_ATTACHMENT0+Ht;rt.length=zt.length,yt=!0}}else rt[0]!==s.BACK&&(rt[0]=s.BACK,yt=!0);yt&&s.drawBuffers(rt)}function Lt(G){return m!==G?(s.useProgram(G),m=G,!0):!1}let L={[Ii]:s.FUNC_ADD,[Wu]:s.FUNC_SUBTRACT,[Xu]:s.FUNC_REVERSE_SUBTRACT};L[$u]=s.MIN,L[qu]=s.MAX;let H={[Yu]:s.ZERO,[Zu]:s.ONE,[ju]:s.SRC_COLOR,[Na]:s.SRC_ALPHA,[nd]:s.SRC_ALPHA_SATURATE,[td]:s.DST_COLOR,[Ju]:s.DST_ALPHA,[Ku]:s.ONE_MINUS_SRC_COLOR,[Oa]:s.ONE_MINUS_SRC_ALPHA,[ed]:s.ONE_MINUS_DST_COLOR,[Qu]:s.ONE_MINUS_DST_ALPHA,[id]:s.CONSTANT_COLOR,[sd]:s.ONE_MINUS_CONSTANT_COLOR,[rd]:s.CONSTANT_ALPHA,[od]:s.ONE_MINUS_CONSTANT_ALPHA};function E(G,kt,rt,yt,zt,Ht,Jt,Ae,ke,pe){if(G===yi){y===!0&&(St(s.BLEND),y=!1);return}if(y===!1&&(k(s.BLEND),y=!0),G!==Gu){if(G!==g||pe!==w){if((p!==Ii||x!==Ii)&&(s.blendEquation(s.FUNC_ADD),p=Ii,x=Ii),pe)switch(G){case ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Uc:s.blendFunc(s.ONE,s.ONE);break;case kc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Uc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case kc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}S=null,v=null,U=null,C=null,D.set(0,0,0),O=0,g=G,w=pe}return}zt=zt||kt,Ht=Ht||rt,Jt=Jt||yt,(kt!==p||zt!==x)&&(s.blendEquationSeparate(L[kt],L[zt]),p=kt,x=zt),(rt!==S||yt!==v||Ht!==U||Jt!==C)&&(s.blendFuncSeparate(H[rt],H[yt],H[Ht],H[Jt]),S=rt,v=yt,U=Ht,C=Jt),(Ae.equals(D)===!1||ke!==O)&&(s.blendColor(Ae.r,Ae.g,Ae.b,ke),D.copy(Ae),O=ke),g=G,w=!1}function _t(G,kt){G.side===Ve?St(s.CULL_FACE):k(s.CULL_FACE);let rt=G.side===Be;kt&&(rt=!rt),at(rt),G.blending===ps&&G.transparent===!1?E(yi):E(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let yt=G.stencilWrite;a.setTest(yt),yt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Gt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?k(s.SAMPLE_ALPHA_TO_COVERAGE):St(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(G){_!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),_=G)}function Tt(G){G!==Hu?(k(s.CULL_FACE),G!==T&&(G===Dc?s.cullFace(s.BACK):G===Vu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):St(s.CULL_FACE),T=G}function ct(G){G!==$&&(B&&s.lineWidth(G),$=G)}function Gt(G,kt,rt){G?(k(s.POLYGON_OFFSET_FILL),(q!==kt||X!==rt)&&(s.polygonOffset(kt,rt),q=kt,X=rt)):St(s.POLYGON_OFFSET_FILL)}function Nt(G){G?k(s.SCISSOR_TEST):St(s.SCISSOR_TEST)}function A(G){G===void 0&&(G=s.TEXTURE0+V-1),ot!==G&&(s.activeTexture(G),ot=G)}function M(G,kt,rt){rt===void 0&&(ot===null?rt=s.TEXTURE0+V-1:rt=ot);let yt=ft[rt];yt===void 0&&(yt={type:void 0,texture:void 0},ft[rt]=yt),(yt.type!==G||yt.texture!==kt)&&(ot!==rt&&(s.activeTexture(rt),ot=rt),s.bindTexture(G,kt||mt[G]),yt.type=G,yt.texture=kt)}function J(){let G=ft[ot];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function st(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function lt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function it(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ot(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function It(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Bt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function dt(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function N(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pt(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(G){Mt.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Mt.copy(G))}function Dt(G){Q.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Q.copy(G))}function Qt(G,kt){let rt=h.get(kt);rt===void 0&&(rt=new WeakMap,h.set(kt,rt));let yt=rt.get(G);yt===void 0&&(yt=s.getUniformBlockIndex(kt,G.name),rt.set(G,yt))}function Kt(G,kt){let yt=h.get(kt).get(G);l.get(kt)!==yt&&(s.uniformBlockBinding(kt,yt,G.__bindingPointIndex),l.set(kt,yt))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},ot=null,ft={},u={},d=new WeakMap,f=[],m=null,y=!1,g=null,p=null,S=null,v=null,x=null,U=null,C=null,D=new ae(0,0,0),O=0,w=!1,_=null,T=null,$=null,q=null,X=null,Mt.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:k,disable:St,bindFramebuffer:gt,drawBuffers:Ct,useProgram:Lt,setBlending:E,setMaterial:_t,setFlipSided:at,setCullFace:Tt,setLineWidth:ct,setPolygonOffset:Gt,setScissorTest:Nt,activeTexture:A,bindTexture:M,unbindTexture:J,compressedTexImage2D:st,compressedTexImage3D:lt,texImage2D:N,texImage3D:pt,updateUBOMapping:Qt,uniformBlockBinding:Kt,texStorage2D:Xt,texStorage3D:dt,texSubImage2D:it,texSubImage3D:Ot,compressedTexSubImage2D:It,compressedTexSubImage3D:Bt,scissor:ht,viewport:Dt,reset:de}}function Dh(s,t,e,n){let i=Ig(n);switch(e){case Kh:return s*t;case Qh:return s*t;case tu:return s*t*2;case eu:return s*t/i.components*i.byteLength;case cc:return s*t/i.components*i.byteLength;case nu:return s*t*2/i.components*i.byteLength;case hc:return s*t*2/i.components*i.byteLength;case Jh:return s*t*3/i.components*i.byteLength;case In:return s*t*4/i.components*i.byteLength;case uc:return s*t*4/i.components*i.byteLength;case Jr:case Qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case to:case eo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Za:case Ka:return Math.max(s,16)*Math.max(t,8)/4;case Ya:case ja:return Math.max(s,8)*Math.max(t,8)/2;case Ja:case Qa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case tl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case il:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case sl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case rl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ol:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case al:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ll:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case cl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case hl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ul:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case dl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case fl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case pl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case no:case ml:case gl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case iu:case yl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case xl:case _l:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ig(s){switch(s){case ii:case Yh:return{byteLength:1,components:1};case sr:case Zh:case gr:return{byteLength:2,components:1};case ac:case lc:return{byteLength:2,components:4};case Ni:case oc:case Qn:return{byteLength:4,components:1};case jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Lg(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new bt,c=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return f?new OffscreenCanvas(A,M):ro("canvas")}function y(A,M,J){let st=1,lt=Nt(A);if((lt.width>J||lt.height>J)&&(st=J/Math.max(lt.width,lt.height)),st<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let it=Math.floor(st*lt.width),Ot=Math.floor(st*lt.height);u===void 0&&(u=m(it,Ot));let It=M?m(it,Ot):u;return It.width=it,It.height=Ot,It.getContext("2d").drawImage(A,0,0,it,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+it+"x"+Ot+")."),It}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(A,M,J,st,lt=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let it=M;if(M===s.RED&&(J===s.FLOAT&&(it=s.R32F),J===s.HALF_FLOAT&&(it=s.R16F),J===s.UNSIGNED_BYTE&&(it=s.R8)),M===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(it=s.R8UI),J===s.UNSIGNED_SHORT&&(it=s.R16UI),J===s.UNSIGNED_INT&&(it=s.R32UI),J===s.BYTE&&(it=s.R8I),J===s.SHORT&&(it=s.R16I),J===s.INT&&(it=s.R32I)),M===s.RG&&(J===s.FLOAT&&(it=s.RG32F),J===s.HALF_FLOAT&&(it=s.RG16F),J===s.UNSIGNED_BYTE&&(it=s.RG8)),M===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(it=s.RG8UI),J===s.UNSIGNED_SHORT&&(it=s.RG16UI),J===s.UNSIGNED_INT&&(it=s.RG32UI),J===s.BYTE&&(it=s.RG8I),J===s.SHORT&&(it=s.RG16I),J===s.INT&&(it=s.RG32I)),M===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(it=s.RGB8UI),J===s.UNSIGNED_SHORT&&(it=s.RGB16UI),J===s.UNSIGNED_INT&&(it=s.RGB32UI),J===s.BYTE&&(it=s.RGB8I),J===s.SHORT&&(it=s.RGB16I),J===s.INT&&(it=s.RGB32I)),M===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(it=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(it=s.RGBA16UI),J===s.UNSIGNED_INT&&(it=s.RGBA32UI),J===s.BYTE&&(it=s.RGBA8I),J===s.SHORT&&(it=s.RGBA16I),J===s.INT&&(it=s.RGBA32I)),M===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(it=s.RGB9_E5),M===s.RGBA){let Ot=lt?Io:ye.getTransfer(st);J===s.FLOAT&&(it=s.RGBA32F),J===s.HALF_FLOAT&&(it=s.RGBA16F),J===s.UNSIGNED_BYTE&&(it=Ot===Ee?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(it=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(it=s.RGB5_A1)}return(it===s.R16F||it===s.R32F||it===s.RG16F||it===s.RG32F||it===s.RGBA16F||it===s.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function x(A,M){let J;return A?M===null||M===Ni||M===Ms?J=s.DEPTH24_STENCIL8:M===Qn?J=s.DEPTH32F_STENCIL8:M===sr&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ni||M===Ms?J=s.DEPTH_COMPONENT24:M===Qn?J=s.DEPTH_COMPONENT32F:M===sr&&(J=s.DEPTH_COMPONENT16),J}function U(A,M){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ln&&A.minFilter!==zn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){let M=A.target;M.removeEventListener("dispose",C),O(M),M.isVideoTexture&&c.delete(M)}function D(A){let M=A.target;M.removeEventListener("dispose",D),_(M)}function O(A){let M=n.get(A);if(M.__webglInit===void 0)return;let J=A.source,st=d.get(J);if(st){let lt=st[M.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&w(A),Object.keys(st).length===0&&d.delete(J)}n.remove(A)}function w(A){let M=n.get(A);s.deleteTexture(M.__webglTexture);let J=A.source,st=d.get(J);delete st[M.__cacheKey],o.memory.textures--}function _(A){let M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(M.__webglFramebuffer[st]))for(let lt=0;lt<M.__webglFramebuffer[st].length;lt++)s.deleteFramebuffer(M.__webglFramebuffer[st][lt]);else s.deleteFramebuffer(M.__webglFramebuffer[st]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[st])}else{if(Array.isArray(M.__webglFramebuffer))for(let st=0;st<M.__webglFramebuffer.length;st++)s.deleteFramebuffer(M.__webglFramebuffer[st]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let st=0;st<M.__webglColorRenderbuffer.length;st++)M.__webglColorRenderbuffer[st]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[st]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let J=A.textures;for(let st=0,lt=J.length;st<lt;st++){let it=n.get(J[st]);it.__webglTexture&&(s.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(J[st])}n.remove(A)}let T=0;function $(){T=0}function q(){let A=T;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),T+=1,A}function X(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function V(A,M){let J=n.get(A);if(A.isVideoTexture&&ct(A),A.isRenderTargetTexture===!1&&A.version>0&&J.__version!==A.version){let st=A.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(J,A,M);return}}e.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+M)}function B(A,M){let J=n.get(A);if(A.version>0&&J.__version!==A.version){Q(J,A,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+M)}function K(A,M){let J=n.get(A);if(A.version>0&&J.__version!==A.version){Q(J,A,M);return}e.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+M)}function Y(A,M){let J=n.get(A);if(A.version>0&&J.__version!==A.version){F(J,A,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+M)}let ot={[ni]:s.REPEAT,[Ui]:s.CLAMP_TO_EDGE,[qa]:s.MIRRORED_REPEAT},ft={[Ln]:s.NEAREST,[md]:s.NEAREST_MIPMAP_NEAREST,[wr]:s.NEAREST_MIPMAP_LINEAR,[zn]:s.LINEAR,[na]:s.LINEAR_MIPMAP_NEAREST,[ki]:s.LINEAR_MIPMAP_LINEAR},vt={[_d]:s.NEVER,[wd]:s.ALWAYS,[vd]:s.LESS,[ru]:s.LEQUAL,[Md]:s.EQUAL,[Ed]:s.GEQUAL,[bd]:s.GREATER,[Sd]:s.NOTEQUAL};function Ft(A,M){if(M.type===Qn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===zn||M.magFilter===na||M.magFilter===wr||M.magFilter===ki||M.minFilter===zn||M.minFilter===na||M.minFilter===wr||M.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,ot[M.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,ot[M.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,ot[M.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ft[M.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ft[M.minFilter]),M.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,vt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ln||M.minFilter!==wr&&M.minFilter!==ki||M.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Mt(A,M){let J=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));let st=M.source,lt=d.get(st);lt===void 0&&(lt={},d.set(st,lt));let it=X(M);if(it!==A.__cacheKey){lt[it]===void 0&&(lt[it]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,J=!0),lt[it].usedTimes++;let Ot=lt[A.__cacheKey];Ot!==void 0&&(lt[A.__cacheKey].usedTimes--,Ot.usedTimes===0&&w(M)),A.__cacheKey=it,A.__webglTexture=lt[it].texture}return J}function Q(A,M,J){let st=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(st=s.TEXTURE_3D);let lt=Mt(A,M),it=M.source;e.bindTexture(st,A.__webglTexture,s.TEXTURE0+J);let Ot=n.get(it);if(it.version!==Ot.__version||lt===!0){e.activeTexture(s.TEXTURE0+J);let It=ye.getPrimaries(ye.workingColorSpace),Bt=M.colorSpace===gi?null:ye.getPrimaries(M.colorSpace),Xt=M.colorSpace===gi||It===Bt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let dt=y(M.image,!1,i.maxTextureSize);dt=Gt(M,dt);let N=r.convert(M.format,M.colorSpace),pt=r.convert(M.type),ht=v(M.internalFormat,N,pt,M.colorSpace,M.isVideoTexture);Ft(st,M);let Dt,Qt=M.mipmaps,Kt=M.isVideoTexture!==!0,de=Ot.__version===void 0||lt===!0,G=it.dataReady,kt=U(M,dt);if(M.isDepthTexture)ht=x(M.format===bs,M.type),de&&(Kt?e.texStorage2D(s.TEXTURE_2D,1,ht,dt.width,dt.height):e.texImage2D(s.TEXTURE_2D,0,ht,dt.width,dt.height,0,N,pt,null));else if(M.isDataTexture)if(Qt.length>0){Kt&&de&&e.texStorage2D(s.TEXTURE_2D,kt,ht,Qt[0].width,Qt[0].height);for(let rt=0,yt=Qt.length;rt<yt;rt++)Dt=Qt[rt],Kt?G&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,Dt.width,Dt.height,N,pt,Dt.data):e.texImage2D(s.TEXTURE_2D,rt,ht,Dt.width,Dt.height,0,N,pt,Dt.data);M.generateMipmaps=!1}else Kt?(de&&e.texStorage2D(s.TEXTURE_2D,kt,ht,dt.width,dt.height),G&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt.width,dt.height,N,pt,dt.data)):e.texImage2D(s.TEXTURE_2D,0,ht,dt.width,dt.height,0,N,pt,dt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Kt&&de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,kt,ht,Qt[0].width,Qt[0].height,dt.depth);for(let rt=0,yt=Qt.length;rt<yt;rt++)if(Dt=Qt[rt],M.format!==In)if(N!==null)if(Kt){if(G)if(M.layerUpdates.size>0){let zt=Dh(Dt.width,Dt.height,M.format,M.type);for(let Ht of M.layerUpdates){let Jt=Dt.data.subarray(Ht*zt/Dt.data.BYTES_PER_ELEMENT,(Ht+1)*zt/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,Ht,Dt.width,Dt.height,1,N,Jt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,Dt.width,Dt.height,dt.depth,N,Dt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,ht,Dt.width,Dt.height,dt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?G&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,Dt.width,Dt.height,dt.depth,N,pt,Dt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,ht,Dt.width,Dt.height,dt.depth,0,N,pt,Dt.data)}else{Kt&&de&&e.texStorage2D(s.TEXTURE_2D,kt,ht,Qt[0].width,Qt[0].height);for(let rt=0,yt=Qt.length;rt<yt;rt++)Dt=Qt[rt],M.format!==In?N!==null?Kt?G&&e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,Dt.width,Dt.height,N,Dt.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,ht,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?G&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,Dt.width,Dt.height,N,pt,Dt.data):e.texImage2D(s.TEXTURE_2D,rt,ht,Dt.width,Dt.height,0,N,pt,Dt.data)}else if(M.isDataArrayTexture)if(Kt){if(de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,kt,ht,dt.width,dt.height,dt.depth),G)if(M.layerUpdates.size>0){let rt=Dh(dt.width,dt.height,M.format,M.type);for(let yt of M.layerUpdates){let zt=dt.data.subarray(yt*rt/dt.data.BYTES_PER_ELEMENT,(yt+1)*rt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,yt,dt.width,dt.height,1,N,pt,zt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,N,pt,dt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,ht,dt.width,dt.height,dt.depth,0,N,pt,dt.data);else if(M.isData3DTexture)Kt?(de&&e.texStorage3D(s.TEXTURE_3D,kt,ht,dt.width,dt.height,dt.depth),G&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,N,pt,dt.data)):e.texImage3D(s.TEXTURE_3D,0,ht,dt.width,dt.height,dt.depth,0,N,pt,dt.data);else if(M.isFramebufferTexture){if(de)if(Kt)e.texStorage2D(s.TEXTURE_2D,kt,ht,dt.width,dt.height);else{let rt=dt.width,yt=dt.height;for(let zt=0;zt<kt;zt++)e.texImage2D(s.TEXTURE_2D,zt,ht,rt,yt,0,N,pt,null),rt>>=1,yt>>=1}}else if(Qt.length>0){if(Kt&&de){let rt=Nt(Qt[0]);e.texStorage2D(s.TEXTURE_2D,kt,ht,rt.width,rt.height)}for(let rt=0,yt=Qt.length;rt<yt;rt++)Dt=Qt[rt],Kt?G&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,N,pt,Dt):e.texImage2D(s.TEXTURE_2D,rt,ht,N,pt,Dt);M.generateMipmaps=!1}else if(Kt){if(de){let rt=Nt(dt);e.texStorage2D(s.TEXTURE_2D,kt,ht,rt.width,rt.height)}G&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,N,pt,dt)}else e.texImage2D(s.TEXTURE_2D,0,ht,N,pt,dt);g(M)&&p(st),Ot.__version=it.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function F(A,M,J){if(M.image.length!==6)return;let st=Mt(A,M),lt=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+J);let it=n.get(lt);if(lt.version!==it.__version||st===!0){e.activeTexture(s.TEXTURE0+J);let Ot=ye.getPrimaries(ye.workingColorSpace),It=M.colorSpace===gi?null:ye.getPrimaries(M.colorSpace),Bt=M.colorSpace===gi||Ot===It?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let Xt=M.isCompressedTexture||M.image[0].isCompressedTexture,dt=M.image[0]&&M.image[0].isDataTexture,N=[];for(let yt=0;yt<6;yt++)!Xt&&!dt?N[yt]=y(M.image[yt],!0,i.maxCubemapSize):N[yt]=dt?M.image[yt].image:M.image[yt],N[yt]=Gt(M,N[yt]);let pt=N[0],ht=r.convert(M.format,M.colorSpace),Dt=r.convert(M.type),Qt=v(M.internalFormat,ht,Dt,M.colorSpace),Kt=M.isVideoTexture!==!0,de=it.__version===void 0||st===!0,G=lt.dataReady,kt=U(M,pt);Ft(s.TEXTURE_CUBE_MAP,M);let rt;if(Xt){Kt&&de&&e.texStorage2D(s.TEXTURE_CUBE_MAP,kt,Qt,pt.width,pt.height);for(let yt=0;yt<6;yt++){rt=N[yt].mipmaps;for(let zt=0;zt<rt.length;zt++){let Ht=rt[zt];M.format!==In?ht!==null?Kt?G&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,zt,0,0,Ht.width,Ht.height,ht,Ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,zt,Qt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?G&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,zt,0,0,Ht.width,Ht.height,ht,Dt,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,zt,Qt,Ht.width,Ht.height,0,ht,Dt,Ht.data)}}}else{if(rt=M.mipmaps,Kt&&de){rt.length>0&&kt++;let yt=Nt(N[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,kt,Qt,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(dt){Kt?G&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,N[yt].width,N[yt].height,ht,Dt,N[yt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Qt,N[yt].width,N[yt].height,0,ht,Dt,N[yt].data);for(let zt=0;zt<rt.length;zt++){let Jt=rt[zt].image[yt].image;Kt?G&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,zt+1,0,0,Jt.width,Jt.height,ht,Dt,Jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,zt+1,Qt,Jt.width,Jt.height,0,ht,Dt,Jt.data)}}else{Kt?G&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,ht,Dt,N[yt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Qt,ht,Dt,N[yt]);for(let zt=0;zt<rt.length;zt++){let Ht=rt[zt];Kt?G&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,zt+1,0,0,ht,Dt,Ht.image[yt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,zt+1,Qt,ht,Dt,Ht.image[yt])}}}g(M)&&p(s.TEXTURE_CUBE_MAP),it.__version=lt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function mt(A,M,J,st,lt,it){let Ot=r.convert(J.format,J.colorSpace),It=r.convert(J.type),Bt=v(J.internalFormat,Ot,It,J.colorSpace),Xt=n.get(M),dt=n.get(J);if(dt.__renderTarget=M,!Xt.__hasExternalTextures){let N=Math.max(1,M.width>>it),pt=Math.max(1,M.height>>it);lt===s.TEXTURE_3D||lt===s.TEXTURE_2D_ARRAY?e.texImage3D(lt,it,Bt,N,pt,M.depth,0,Ot,It,null):e.texImage2D(lt,it,Bt,N,pt,0,Ot,It,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Tt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,lt,dt.__webglTexture,0,at(M)):(lt===s.TEXTURE_2D||lt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,lt,dt.__webglTexture,it),e.bindFramebuffer(s.FRAMEBUFFER,null)}function k(A,M,J){if(s.bindRenderbuffer(s.RENDERBUFFER,A),M.depthBuffer){let st=M.depthTexture,lt=st&&st.isDepthTexture?st.type:null,it=x(M.stencilBuffer,lt),Ot=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,It=at(M);Tt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It,it,M.width,M.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,It,it,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,it,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ot,s.RENDERBUFFER,A)}else{let st=M.textures;for(let lt=0;lt<st.length;lt++){let it=st[lt],Ot=r.convert(it.format,it.colorSpace),It=r.convert(it.type),Bt=v(it.internalFormat,Ot,It,it.colorSpace),Xt=at(M);J&&Tt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,Bt,M.width,M.height):Tt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,Bt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Bt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function St(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let st=n.get(M.depthTexture);st.__renderTarget=M,(!st.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);let lt=st.__webglTexture,it=at(M);if(M.depthTexture.format===ms)Tt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,lt,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,lt,0);else if(M.depthTexture.format===bs)Tt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,lt,0,it):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function gt(A){let M=n.get(A),J=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let st=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),st){let lt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,st.removeEventListener("dispose",lt)};st.addEventListener("dispose",lt),M.__depthDisposeCallback=lt}M.__boundDepthTexture=st}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");St(M.__webglFramebuffer,A)}else if(J){M.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[st]),M.__webglDepthbuffer[st]===void 0)M.__webglDepthbuffer[st]=s.createRenderbuffer(),k(M.__webglDepthbuffer[st],A,!1);else{let lt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=M.__webglDepthbuffer[st];s.bindRenderbuffer(s.RENDERBUFFER,it),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,it)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),k(M.__webglDepthbuffer,A,!1);else{let st=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,lt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(A,M,J){let st=n.get(A);M!==void 0&&mt(st.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&gt(A)}function Lt(A){let M=A.texture,J=n.get(A),st=n.get(M);A.addEventListener("dispose",D);let lt=A.textures,it=A.isWebGLCubeRenderTarget===!0,Ot=lt.length>1;if(Ot||(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=M.version,o.memory.textures++),it){J.__webglFramebuffer=[];for(let It=0;It<6;It++)if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer[It]=[];for(let Bt=0;Bt<M.mipmaps.length;Bt++)J.__webglFramebuffer[It][Bt]=s.createFramebuffer()}else J.__webglFramebuffer[It]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer=[];for(let It=0;It<M.mipmaps.length;It++)J.__webglFramebuffer[It]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Ot)for(let It=0,Bt=lt.length;It<Bt;It++){let Xt=n.get(lt[It]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&Tt(A)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let It=0;It<lt.length;It++){let Bt=lt[It];J.__webglColorRenderbuffer[It]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[It]);let Xt=r.convert(Bt.format,Bt.colorSpace),dt=r.convert(Bt.type),N=v(Bt.internalFormat,Xt,dt,Bt.colorSpace,A.isXRRenderTarget===!0),pt=at(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,N,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,J.__webglColorRenderbuffer[It])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),k(J.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(it){e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,M);for(let It=0;It<6;It++)if(M.mipmaps&&M.mipmaps.length>0)for(let Bt=0;Bt<M.mipmaps.length;Bt++)mt(J.__webglFramebuffer[It][Bt],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+It,Bt);else mt(J.__webglFramebuffer[It],A,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0);g(M)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let It=0,Bt=lt.length;It<Bt;It++){let Xt=lt[It],dt=n.get(Xt);e.bindTexture(s.TEXTURE_2D,dt.__webglTexture),Ft(s.TEXTURE_2D,Xt),mt(J.__webglFramebuffer,A,Xt,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,0),g(Xt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let It=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(It=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(It,st.__webglTexture),Ft(It,M),M.mipmaps&&M.mipmaps.length>0)for(let Bt=0;Bt<M.mipmaps.length;Bt++)mt(J.__webglFramebuffer[Bt],A,M,s.COLOR_ATTACHMENT0,It,Bt);else mt(J.__webglFramebuffer,A,M,s.COLOR_ATTACHMENT0,It,0);g(M)&&p(It),e.unbindTexture()}A.depthBuffer&&gt(A)}function L(A){let M=A.textures;for(let J=0,st=M.length;J<st;J++){let lt=M[J];if(g(lt)){let it=S(A),Ot=n.get(lt).__webglTexture;e.bindTexture(it,Ot),p(it),e.unbindTexture()}}}let H=[],E=[];function _t(A){if(A.samples>0){if(Tt(A)===!1){let M=A.textures,J=A.width,st=A.height,lt=s.COLOR_BUFFER_BIT,it=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ot=n.get(A),It=M.length>1;if(It)for(let Bt=0;Bt<M.length;Bt++)e.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Bt=0;Bt<M.length;Bt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(lt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(lt|=s.STENCIL_BUFFER_BIT)),It){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ot.__webglColorRenderbuffer[Bt]);let Xt=n.get(M[Bt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xt,0)}s.blitFramebuffer(0,0,J,st,0,0,J,st,lt,s.NEAREST),l===!0&&(H.length=0,E.length=0,H.push(s.COLOR_ATTACHMENT0+Bt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(H.push(it),E.push(it),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,E)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,H))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),It)for(let Bt=0;Bt<M.length;Bt++){e.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.RENDERBUFFER,Ot.__webglColorRenderbuffer[Bt]);let Xt=n.get(M[Bt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Bt,s.TEXTURE_2D,Xt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function at(A){return Math.min(i.maxSamples,A.samples)}function Tt(A){let M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ct(A){let M=o.render.frame;c.get(A)!==M&&(c.set(A,M),A.update())}function Gt(A,M){let J=A.colorSpace,st=A.format,lt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||J!==ks&&J!==gi&&(ye.getTransfer(J)===Ee?(st!==In||lt!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),M}function Nt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=$,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=Ct,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Tt}function Dg(s,t){function e(n,i=gi){let r,o=ye.getTransfer(i);if(n===ii)return s.UNSIGNED_BYTE;if(n===ac)return s.UNSIGNED_SHORT_4_4_4_4;if(n===lc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===jh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Yh)return s.BYTE;if(n===Zh)return s.SHORT;if(n===sr)return s.UNSIGNED_SHORT;if(n===oc)return s.INT;if(n===Ni)return s.UNSIGNED_INT;if(n===Qn)return s.FLOAT;if(n===gr)return s.HALF_FLOAT;if(n===Kh)return s.ALPHA;if(n===Jh)return s.RGB;if(n===In)return s.RGBA;if(n===Qh)return s.LUMINANCE;if(n===tu)return s.LUMINANCE_ALPHA;if(n===ms)return s.DEPTH_COMPONENT;if(n===bs)return s.DEPTH_STENCIL;if(n===eu)return s.RED;if(n===cc)return s.RED_INTEGER;if(n===nu)return s.RG;if(n===hc)return s.RG_INTEGER;if(n===uc)return s.RGBA_INTEGER;if(n===Jr||n===Qr||n===to||n===eo)if(o===Ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===Za||n===ja||n===Ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===Qa||n===tl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ja||n===Qa)return o===Ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===el)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ll)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ul)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return o===Ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===no||n===ml||n===gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===no)return o===Ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===iu||n===yl||n===xl||n===_l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===no)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Ul=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},se=class extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ug={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),p=this._getHandJoint(h,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,m=.005;h.inputState.pinching&&d>f+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ug)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ng=`
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

}`,kl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new pn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Fn({vertexShader:kg,fragmentShader:Ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new ie(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nl=class extends si{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,m=null,y=new kl,g=e.getContextAttributes(),p=null,S=null,v=[],x=[],U=new bt,C=null,D=new Qe;D.viewport=new we;let O=new Qe;O.viewport=new we;let w=[D,O],_=new Ul,T=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let F=v[Q];return F===void 0&&(F=new tr,v[Q]=F),F.getTargetRaySpace()},this.getControllerGrip=function(Q){let F=v[Q];return F===void 0&&(F=new tr,v[Q]=F),F.getGripSpace()},this.getHand=function(Q){let F=v[Q];return F===void 0&&(F=new tr,v[Q]=F),F.getHandSpace()};function q(Q){let F=x.indexOf(Q.inputSource);if(F===-1)return;let mt=v[F];mt!==void 0&&(mt.update(Q.inputSource,Q.frame,h||o),mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",V);for(let Q=0;Q<v.length;Q++){let F=x[Q];F!==null&&(x[Q]=null,v[Q].disconnect(F))}T=null,$=null,y.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,S=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",X),i.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(U),i.renderState.layers===void 0){let F={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,F),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new ri(f.framebufferWidth,f.framebufferHeight,{format:In,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let F=null,mt=null,k=null;g.depth&&(k=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,F=g.stencil?bs:ms,mt=g.stencil?Ms:Ni);let St={colorFormat:e.RGBA8,depthFormat:k,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(St),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new ri(d.textureWidth,d.textureHeight,{format:In,type:ii,depthTexture:new po(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await i.requestReferenceSpace(a),Mt.setContext(i),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(Q){for(let F=0;F<Q.removed.length;F++){let mt=Q.removed[F],k=x.indexOf(mt);k>=0&&(x[k]=null,v[k].disconnect(mt))}for(let F=0;F<Q.added.length;F++){let mt=Q.added[F],k=x.indexOf(mt);if(k===-1){for(let gt=0;gt<v.length;gt++)if(gt>=x.length){x.push(mt),k=gt;break}else if(x[gt]===null){x[gt]=mt,k=gt;break}if(k===-1)break}let St=v[k];St&&St.connect(mt)}}let B=new R,K=new R;function Y(Q,F,mt){B.setFromMatrixPosition(F.matrixWorld),K.setFromMatrixPosition(mt.matrixWorld);let k=B.distanceTo(K),St=F.projectionMatrix.elements,gt=mt.projectionMatrix.elements,Ct=St[14]/(St[10]-1),Lt=St[14]/(St[10]+1),L=(St[9]+1)/St[5],H=(St[9]-1)/St[5],E=(St[8]-1)/St[0],_t=(gt[8]+1)/gt[0],at=Ct*E,Tt=Ct*_t,ct=k/(-E+_t),Gt=ct*-E;if(F.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Gt),Q.translateZ(ct),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),St[10]===-1)Q.projectionMatrix.copy(F.projectionMatrix),Q.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{let Nt=Ct+ct,A=Lt+ct,M=at-Gt,J=Tt+(k-Gt),st=L*Lt/A*Nt,lt=H*Lt/A*Nt;Q.projectionMatrix.makePerspective(M,J,st,lt,Nt,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ot(Q,F){F===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(F.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let F=Q.near,mt=Q.far;y.texture!==null&&(y.depthNear>0&&(F=y.depthNear),y.depthFar>0&&(mt=y.depthFar)),_.near=O.near=D.near=F,_.far=O.far=D.far=mt,(T!==_.near||$!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,$=_.far),D.layers.mask=Q.layers.mask|2,O.layers.mask=Q.layers.mask|4,_.layers.mask=D.layers.mask|O.layers.mask;let k=Q.parent,St=_.cameras;ot(_,k);for(let gt=0;gt<St.length;gt++)ot(St[gt],k);St.length===2?Y(_,D,O):_.projectionMatrix.copy(D.projectionMatrix),ft(Q,_,k)};function ft(Q,F,mt){mt===null?Q.matrix.copy(F.matrixWorld):(Q.matrix.copy(mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(F.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(F.projectionMatrix),Q.projectionMatrixInverse.copy(F.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ss*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let vt=null;function Ft(Q,F){if(c=F.getViewerPose(h||o),m=F,c!==null){let mt=c.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let k=!1;mt.length!==_.cameras.length&&(_.cameras.length=0,k=!0);for(let gt=0;gt<mt.length;gt++){let Ct=mt[gt],Lt=null;if(f!==null)Lt=f.getViewport(Ct);else{let H=u.getViewSubImage(d,Ct);Lt=H.viewport,gt===0&&(t.setRenderTargetTextures(S,H.colorTexture,d.ignoreDepthValues?void 0:H.depthStencilTexture),t.setRenderTarget(S))}let L=w[gt];L===void 0&&(L=new Qe,L.layers.enable(gt),L.viewport=new we,w[gt]=L),L.matrix.fromArray(Ct.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Ct.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),gt===0&&(_.matrix.copy(L.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),k===!0&&_.cameras.push(L)}let St=i.enabledFeatures;if(St&&St.includes("depth-sensing")){let gt=u.getDepthInformation(mt[0]);gt&&gt.isValid&&gt.texture&&y.init(t,gt,i.renderState)}}for(let mt=0;mt<v.length;mt++){let k=x[mt],St=v[mt];k!==null&&St!==void 0&&St.update(k,F,h||o)}vt&&vt(Q,F),F.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:F}),m=null}let Mt=new cu;Mt.setAnimationLoop(Ft),this.setAnimationLoop=function(Q){vt=Q},this.dispose=function(){}}},Ci=new vn,Og=new Re;function zg(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,lu(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,S,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),c(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,S,v):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Be&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Be&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S=t.get(p),v=S.envMap,x=S.envMapRotation;v&&(g.envMap.value=v,Ci.copy(x),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),g.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(Ci)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fg(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){let x=v.program;n.uniformBlockBinding(S,x)}function h(S,v){let x=i[S.id];x===void 0&&(m(S),x=c(S),i[S.id]=x,S.addEventListener("dispose",g));let U=v.program;n.updateUBOMapping(S,U);let C=t.render.frame;r[S.id]!==C&&(d(S),r[S.id]=C)}function c(S){let v=u();S.__bindingPointIndex=v;let x=s.createBuffer(),U=S.__size,C=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,U,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let v=i[S.id],x=S.uniforms,U=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let C=0,D=x.length;C<D;C++){let O=Array.isArray(x[C])?x[C]:[x[C]];for(let w=0,_=O.length;w<_;w++){let T=O[w];if(f(T,C,w,U)===!0){let $=T.__offset,q=Array.isArray(T.value)?T.value:[T.value],X=0;for(let V=0;V<q.length;V++){let B=q[V],K=y(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,$+X,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,X),X+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,v,x,U){let C=S.value,D=v+"_"+x;if(U[D]===void 0)return typeof C=="number"||typeof C=="boolean"?U[D]=C:U[D]=C.clone(),!0;{let O=U[D];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return U[D]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function m(S){let v=S.uniforms,x=0,U=16;for(let D=0,O=v.length;D<O;D++){let w=Array.isArray(v[D])?v[D]:[v[D]];for(let _=0,T=w.length;_<T;_++){let $=w[_],q=Array.isArray($.value)?$.value:[$.value];for(let X=0,V=q.length;X<V;X++){let B=q[X],K=y(B),Y=x%U,ot=Y%K.boundary,ft=Y+ot;x+=ot,ft!==0&&U-ft<K.storage&&(x+=U-ft),$.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=x,x+=K.storage}}}let C=x%U;return C>0&&(x+=U-C),S.__size=x,S.__cache={},this}function y(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function g(S){let v=S.target;v.removeEventListener("dispose",g);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:h,dispose:p}}var mo=class{constructor(t={}){let{canvas:e=Vd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),y=new Int32Array(4),g=null,p=null,S=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oe,this.toneMapping=xi,this.toneMappingExposure=1;let x=this,U=!1,C=0,D=0,O=null,w=-1,_=null,T=new we,$=new we,q=null,X=new ae(0),V=0,B=e.width,K=e.height,Y=1,ot=null,ft=null,vt=new we(0,0,B,K),Ft=new we(0,0,B,K),Mt=!1,Q=new or,F=!1,mt=!1,k=new Re,St=new Re,gt=new R,Ct=new we,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},L=!1;function H(){return O===null?Y:1}let E=n;function _t(b,W){return e.getContext(b,W)}try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ic}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",Ht,!1),E===null){let W="webgl2";if(E=_t(W,b),E===null)throw _t(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let at,Tt,ct,Gt,Nt,A,M,J,st,lt,it,Ot,It,Bt,Xt,dt,N,pt,ht,Dt,Qt,Kt,de,G;function kt(){at=new e0(E),at.init(),Kt=new Dg(E,at),Tt=new Zm(E,at,t,Kt),ct=new Pg(E,at),Tt.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),Gt=new s0(E),Nt=new yg,A=new Lg(E,at,ct,Nt,Tt,Kt,Gt),M=new Km(x),J=new t0(x),st=new uf(E),de=new qm(E,st),lt=new n0(E,st,Gt,de),it=new o0(E,lt,st,Gt),ht=new r0(E,Tt,A),dt=new jm(Nt),Ot=new gg(x,M,J,at,Tt,de,dt),It=new zg(x,Nt),Bt=new _g,Xt=new wg(at),pt=new $m(x,M,J,ct,it,f,l),N=new Rg(x,it,Tt),G=new Fg(E,Gt,Tt,ct),Dt=new Ym(E,at,Gt),Qt=new i0(E,at,Gt),Gt.programs=Ot.programs,x.capabilities=Tt,x.extensions=at,x.properties=Nt,x.renderLists=Bt,x.shadowMap=N,x.state=ct,x.info=Gt}kt();let rt=new Nl(x,E);this.xr=rt,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let b=at.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=at.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(B,K,!1))},this.getSize=function(b){return b.set(B,K)},this.setSize=function(b,W,et=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,K=W,e.width=Math.floor(b*Y),e.height=Math.floor(W*Y),et===!0&&(e.style.width=b+"px",e.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(B*Y,K*Y).floor()},this.setDrawingBufferSize=function(b,W,et){B=b,K=W,Y=et,e.width=Math.floor(b*et),e.height=Math.floor(W*et),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(vt)},this.setViewport=function(b,W,et,tt){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,W,et,tt),ct.viewport(T.copy(vt).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(Ft)},this.setScissor=function(b,W,et,tt){b.isVector4?Ft.set(b.x,b.y,b.z,b.w):Ft.set(b,W,et,tt),ct.scissor($.copy(Ft).multiplyScalar(Y).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(b){ct.setScissorTest(Mt=b)},this.setOpaqueSort=function(b){ot=b},this.setTransparentSort=function(b){ft=b},this.getClearColor=function(b){return b.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor.apply(pt,arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha.apply(pt,arguments)},this.clear=function(b=!0,W=!0,et=!0){let tt=0;if(b){let Z=!1;if(O!==null){let At=O.texture.format;Z=At===uc||At===hc||At===cc}if(Z){let At=O.texture.type,Ut=At===ii||At===Ni||At===sr||At===Ms||At===ac||At===lc,qt=pt.getClearColor(),Yt=pt.getClearAlpha(),re=qt.r,ce=qt.g,Zt=qt.b;Ut?(m[0]=re,m[1]=ce,m[2]=Zt,m[3]=Yt,E.clearBufferuiv(E.COLOR,0,m)):(y[0]=re,y[1]=ce,y[2]=Zt,y[3]=Yt,E.clearBufferiv(E.COLOR,0,y))}else tt|=E.COLOR_BUFFER_BIT}W&&(tt|=E.DEPTH_BUFFER_BIT),et&&(tt|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",Ht,!1),Bt.dispose(),Xt.dispose(),Nt.dispose(),M.dispose(),J.dispose(),it.dispose(),de.dispose(),G.dispose(),Ot.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",P),rt.removeEventListener("sessionend",I),j.stop()};function yt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;let b=Gt.autoReset,W=N.enabled,et=N.autoUpdate,tt=N.needsUpdate,Z=N.type;kt(),Gt.autoReset=b,N.enabled=W,N.autoUpdate=et,N.needsUpdate=tt,N.type=Z}function Ht(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Jt(b){let W=b.target;W.removeEventListener("dispose",Jt),Ae(W)}function Ae(b){ke(b),Nt.remove(b)}function ke(b){let W=Nt.get(b).programs;W!==void 0&&(W.forEach(function(et){Ot.releaseProgram(et)}),b.isShaderMaterial&&Ot.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,et,tt,Z,At){W===null&&(W=Lt);let Ut=Z.isMesh&&Z.matrixWorld.determinant()<0,qt=De(b,W,et,tt,Z);ct.setMaterial(tt,Ut);let Yt=et.index,re=1;if(tt.wireframe===!0){if(Yt=lt.getWireframeAttribute(et),Yt===void 0)return;re=2}let ce=et.drawRange,Zt=et.attributes.position,Me=ce.start*re,Ce=(ce.start+ce.count)*re;At!==null&&(Me=Math.max(Me,At.start*re),Ce=Math.min(Ce,(At.start+At.count)*re)),Yt!==null?(Me=Math.max(Me,0),Ce=Math.min(Ce,Yt.count)):Zt!=null&&(Me=Math.max(Me,0),Ce=Math.min(Ce,Zt.count));let Pe=Ce-Me;if(Pe<0||Pe===1/0)return;de.setup(Z,tt,qt,et,Yt);let an,be=Dt;if(Yt!==null&&(an=st.get(Yt),be=Qt,be.setIndex(an)),Z.isMesh)tt.wireframe===!0?(ct.setLineWidth(tt.wireframeLinewidth*H()),be.setMode(E.LINES)):be.setMode(E.TRIANGLES);else if(Z.isLine){let jt=tt.linewidth;jt===void 0&&(jt=1),ct.setLineWidth(jt*H()),Z.isLineSegments?be.setMode(E.LINES):Z.isLineLoop?be.setMode(E.LINE_LOOP):be.setMode(E.LINE_STRIP)}else Z.isPoints?be.setMode(E.POINTS):Z.isSprite&&be.setMode(E.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)be.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))be.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let jt=Z._multiDrawStarts,$n=Z._multiDrawCounts,Se=Z._multiDrawCount,An=Yt?st.get(Yt).bytesPerElement:1,ji=Nt.get(tt).currentProgram.getUniforms();for(let hn=0;hn<Se;hn++)ji.setValue(E,"_gl_DrawID",hn),be.render(jt[hn]/An,$n[hn])}else if(Z.isInstancedMesh)be.renderInstances(Me,Pe,Z.count);else if(et.isInstancedBufferGeometry){let jt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,$n=Math.min(et.instanceCount,jt);be.renderInstances(Me,Pe,$n)}else be.render(Me,Pe)};function pe(b,W,et){b.transparent===!0&&b.side===Ve&&b.forceSinglePass===!1?(b.side=Be,b.needsUpdate=!0,$t(b,W,et),b.side=_i,b.needsUpdate=!0,$t(b,W,et),b.side=Ve):$t(b,W,et)}this.compile=function(b,W,et=null){et===null&&(et=b),p=Xt.get(et),p.init(W),v.push(p),et.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),b!==et&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),p.setupLights();let tt=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let At=Z.material;if(At)if(Array.isArray(At))for(let Ut=0;Ut<At.length;Ut++){let qt=At[Ut];pe(qt,et,Z),tt.add(qt)}else pe(At,et,Z),tt.add(At)}),v.pop(),p=null,tt},this.compileAsync=function(b,W,et=null){let tt=this.compile(b,W,et);return new Promise(Z=>{function At(){if(tt.forEach(function(Ut){Nt.get(Ut).currentProgram.isReady()&&tt.delete(Ut)}),tt.size===0){Z(b);return}setTimeout(At,10)}at.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Je=null;function z(b){Je&&Je(b)}function P(){j.stop()}function I(){j.start()}let j=new cu;j.setAnimationLoop(z),typeof self<"u"&&j.setContext(self),this.setAnimationLoop=function(b){Je=b,rt.setAnimationLoop(b),b===null?j.stop():j.start()},rt.addEventListener("sessionstart",P),rt.addEventListener("sessionend",I),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(W),W=rt.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,W,O),p=Xt.get(b,v.length),p.init(W),v.push(p),St.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(St),mt=this.localClippingEnabled,F=dt.init(this.clippingPlanes,mt),g=Bt.get(b,S.length),g.init(),S.push(g),rt.enabled===!0&&rt.isPresenting===!0){let At=x.xr.getDepthSensingMesh();At!==null&&nt(At,W,-1/0,x.sortObjects)}nt(b,W,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(ot,ft),L=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,L&&pt.addToRenderList(g,b),this.info.render.frame++,F===!0&&dt.beginShadows();let et=p.state.shadowsArray;N.render(et,b,W),F===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();let tt=g.opaque,Z=g.transmissive;if(p.setupLights(),W.isArrayCamera){let At=W.cameras;if(Z.length>0)for(let Ut=0,qt=At.length;Ut<qt;Ut++){let Yt=At[Ut];wt(tt,Z,b,Yt)}L&&pt.render(b);for(let Ut=0,qt=At.length;Ut<qt;Ut++){let Yt=At[Ut];ut(g,b,Yt,Yt.viewport)}}else Z.length>0&&wt(tt,Z,b,W),L&&pt.render(b),ut(g,b,W);O!==null&&(A.updateMultisampleRenderTarget(O),A.updateRenderTargetMipmap(O)),b.isScene===!0&&b.onAfterRender(x,b,W),de.resetDefaultState(),w=-1,_=null,v.pop(),v.length>0?(p=v[v.length-1],F===!0&&dt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function nt(b,W,et,tt){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)et=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){tt&&Ct.setFromMatrixPosition(b.matrixWorld).applyMatrix4(St);let Ut=it.update(b),qt=b.material;qt.visible&&g.push(b,Ut,qt,et,Ct.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){let Ut=it.update(b),qt=b.material;if(tt&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ct.copy(b.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Ct.copy(Ut.boundingSphere.center)),Ct.applyMatrix4(b.matrixWorld).applyMatrix4(St)),Array.isArray(qt)){let Yt=Ut.groups;for(let re=0,ce=Yt.length;re<ce;re++){let Zt=Yt[re],Me=qt[Zt.materialIndex];Me&&Me.visible&&g.push(b,Ut,Me,et,Ct.z,Zt)}}else qt.visible&&g.push(b,Ut,qt,et,Ct.z,null)}}let At=b.children;for(let Ut=0,qt=At.length;Ut<qt;Ut++)nt(At[Ut],W,et,tt)}function ut(b,W,et,tt){let Z=b.opaque,At=b.transmissive,Ut=b.transparent;p.setupLightsView(et),F===!0&&dt.setGlobalState(x.clippingPlanes,et),tt&&ct.viewport(T.copy(tt)),Z.length>0&&ee(Z,W,et),At.length>0&&ee(At,W,et),Ut.length>0&&ee(Ut,W,et),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function wt(b,W,et,tt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[tt.id]===void 0&&(p.state.transmissionRenderTarget[tt.id]=new ri(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?gr:ii,minFilter:ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ye.workingColorSpace}));let At=p.state.transmissionRenderTarget[tt.id],Ut=tt.viewport||T;At.setSize(Ut.z,Ut.w);let qt=x.getRenderTarget();x.setRenderTarget(At),x.getClearColor(X),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),L&&pt.render(et);let Yt=x.toneMapping;x.toneMapping=xi;let re=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),p.setupLightsView(tt),F===!0&&dt.setGlobalState(x.clippingPlanes,tt),ee(b,et,tt),A.updateMultisampleRenderTarget(At),A.updateRenderTargetMipmap(At),at.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Zt=0,Me=W.length;Zt<Me;Zt++){let Ce=W[Zt],Pe=Ce.object,an=Ce.geometry,be=Ce.material,jt=Ce.group;if(be.side===Ve&&Pe.layers.test(tt.layers)){let $n=be.side;be.side=Be,be.needsUpdate=!0,ne(Pe,et,tt,an,be,jt),be.side=$n,be.needsUpdate=!0,ce=!0}}ce===!0&&(A.updateMultisampleRenderTarget(At),A.updateRenderTargetMipmap(At))}x.setRenderTarget(qt),x.setClearColor(X,V),re!==void 0&&(tt.viewport=re),x.toneMapping=Yt}function ee(b,W,et){let tt=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,At=b.length;Z<At;Z++){let Ut=b[Z],qt=Ut.object,Yt=Ut.geometry,re=tt===null?Ut.material:tt,ce=Ut.group;qt.layers.test(et.layers)&&ne(qt,W,et,Yt,re,ce)}}function ne(b,W,et,tt,Z,At){b.onBeforeRender(x,W,et,tt,Z,At),b.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(x,W,et,tt,b,At),Z.transparent===!0&&Z.side===Ve&&Z.forceSinglePass===!1?(Z.side=Be,Z.needsUpdate=!0,x.renderBufferDirect(et,W,tt,Z,b,At),Z.side=_i,Z.needsUpdate=!0,x.renderBufferDirect(et,W,tt,Z,b,At),Z.side=Ve):x.renderBufferDirect(et,W,tt,Z,b,At),b.onAfterRender(x,W,et,tt,Z,At)}function $t(b,W,et){W.isScene!==!0&&(W=Lt);let tt=Nt.get(b),Z=p.state.lights,At=p.state.shadowsArray,Ut=Z.state.version,qt=Ot.getParameters(b,Z.state,At,W,et),Yt=Ot.getProgramCacheKey(qt),re=tt.programs;tt.environment=b.isMeshStandardMaterial?W.environment:null,tt.fog=W.fog,tt.envMap=(b.isMeshStandardMaterial?J:M).get(b.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,re===void 0&&(b.addEventListener("dispose",Jt),re=new Map,tt.programs=re);let ce=re.get(Yt);if(ce!==void 0){if(tt.currentProgram===ce&&tt.lightsStateVersion===Ut)return _e(b,qt),ce}else qt.uniforms=Ot.getUniforms(b),b.onBeforeCompile(qt,x),ce=Ot.acquireProgram(qt,Yt),re.set(Yt,ce),tt.uniforms=qt.uniforms;let Zt=tt.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Zt.clippingPlanes=dt.uniform),_e(b,qt),tt.needsLights=tn(b),tt.lightsStateVersion=Ut,tt.needsLights&&(Zt.ambientLightColor.value=Z.state.ambient,Zt.lightProbe.value=Z.state.probe,Zt.directionalLights.value=Z.state.directional,Zt.directionalLightShadows.value=Z.state.directionalShadow,Zt.spotLights.value=Z.state.spot,Zt.spotLightShadows.value=Z.state.spotShadow,Zt.rectAreaLights.value=Z.state.rectArea,Zt.ltc_1.value=Z.state.rectAreaLTC1,Zt.ltc_2.value=Z.state.rectAreaLTC2,Zt.pointLights.value=Z.state.point,Zt.pointLightShadows.value=Z.state.pointShadow,Zt.hemisphereLights.value=Z.state.hemi,Zt.directionalShadowMap.value=Z.state.directionalShadowMap,Zt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Zt.spotShadowMap.value=Z.state.spotShadowMap,Zt.spotLightMatrix.value=Z.state.spotLightMatrix,Zt.spotLightMap.value=Z.state.spotLightMap,Zt.pointShadowMap.value=Z.state.pointShadowMap,Zt.pointShadowMatrix.value=Z.state.pointShadowMatrix),tt.currentProgram=ce,tt.uniformsList=null,ce}function Wt(b){if(b.uniformsList===null){let W=b.currentProgram.getUniforms();b.uniformsList=ys.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function _e(b,W){let et=Nt.get(b);et.outputColorSpace=W.outputColorSpace,et.batching=W.batching,et.batchingColor=W.batchingColor,et.instancing=W.instancing,et.instancingColor=W.instancingColor,et.instancingMorph=W.instancingMorph,et.skinning=W.skinning,et.morphTargets=W.morphTargets,et.morphNormals=W.morphNormals,et.morphColors=W.morphColors,et.morphTargetsCount=W.morphTargetsCount,et.numClippingPlanes=W.numClippingPlanes,et.numIntersection=W.numClipIntersection,et.vertexAlphas=W.vertexAlphas,et.vertexTangents=W.vertexTangents,et.toneMapping=W.toneMapping}function De(b,W,et,tt,Z){W.isScene!==!0&&(W=Lt),A.resetTextureUnits();let At=W.fog,Ut=tt.isMeshStandardMaterial?W.environment:null,qt=O===null?x.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ks,Yt=(tt.isMeshStandardMaterial?J:M).get(tt.envMap||Ut),re=tt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ce=!!et.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Zt=!!et.morphAttributes.position,Me=!!et.morphAttributes.normal,Ce=!!et.morphAttributes.color,Pe=xi;tt.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Pe=x.toneMapping);let an=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,be=an!==void 0?an.length:0,jt=Nt.get(tt),$n=p.state.lights;if(F===!0&&(mt===!0||b!==_)){let yn=b===_&&tt.id===w;dt.setState(tt,b,yn)}let Se=!1;tt.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==$n.state.version||jt.outputColorSpace!==qt||Z.isBatchedMesh&&jt.batching===!1||!Z.isBatchedMesh&&jt.batching===!0||Z.isBatchedMesh&&jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&jt.instancing===!1||!Z.isInstancedMesh&&jt.instancing===!0||Z.isSkinnedMesh&&jt.skinning===!1||!Z.isSkinnedMesh&&jt.skinning===!0||Z.isInstancedMesh&&jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&jt.instancingMorph===!1&&Z.morphTexture!==null||jt.envMap!==Yt||tt.fog===!0&&jt.fog!==At||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==dt.numPlanes||jt.numIntersection!==dt.numIntersection)||jt.vertexAlphas!==re||jt.vertexTangents!==ce||jt.morphTargets!==Zt||jt.morphNormals!==Me||jt.morphColors!==Ce||jt.toneMapping!==Pe||jt.morphTargetsCount!==be)&&(Se=!0):(Se=!0,jt.__version=tt.version);let An=jt.currentProgram;Se===!0&&(An=$t(tt,W,Z));let ji=!1,hn=!1,Vs=!1,Ie=An.getUniforms(),Nn=jt.uniforms;if(ct.useProgram(An.program)&&(ji=!0,hn=!0,Vs=!0),tt.id!==w&&(w=tt.id,hn=!0),ji||_!==b){ct.buffers.depth.getReversed()?(k.copy(b.projectionMatrix),Wd(k),Xd(k),Ie.setValue(E,"projectionMatrix",k)):Ie.setValue(E,"projectionMatrix",b.projectionMatrix),Ie.setValue(E,"viewMatrix",b.matrixWorldInverse);let li=Ie.map.cameraPosition;li!==void 0&&li.setValue(E,gt.setFromMatrixPosition(b.matrixWorld)),Tt.logarithmicDepthBuffer&&Ie.setValue(E,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Ie.setValue(E,"isOrthographic",b.isOrthographicCamera===!0),_!==b&&(_=b,hn=!0,Vs=!0)}if(Z.isSkinnedMesh){Ie.setOptional(E,Z,"bindMatrix"),Ie.setOptional(E,Z,"bindMatrixInverse");let yn=Z.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Ie.setValue(E,"boneTexture",yn.boneTexture,A))}Z.isBatchedMesh&&(Ie.setOptional(E,Z,"batchingTexture"),Ie.setValue(E,"batchingTexture",Z._matricesTexture,A),Ie.setOptional(E,Z,"batchingIdTexture"),Ie.setValue(E,"batchingIdTexture",Z._indirectTexture,A),Ie.setOptional(E,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ie.setValue(E,"batchingColorTexture",Z._colorsTexture,A));let Gs=et.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&ht.update(Z,et,An),(hn||jt.receiveShadow!==Z.receiveShadow)&&(jt.receiveShadow=Z.receiveShadow,Ie.setValue(E,"receiveShadow",Z.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Nn.envMap.value=Yt,Nn.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&W.environment!==null&&(Nn.envMapIntensity.value=W.environmentIntensity),hn&&(Ie.setValue(E,"toneMappingExposure",x.toneMappingExposure),jt.needsLights&&ve(Nn,Vs),At&&tt.fog===!0&&It.refreshFogUniforms(Nn,At),It.refreshMaterialUniforms(Nn,tt,Y,K,p.state.transmissionRenderTarget[b.id]),ys.upload(E,Wt(jt),Nn,A)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(ys.upload(E,Wt(jt),Nn,A),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Ie.setValue(E,"center",Z.center),Ie.setValue(E,"modelViewMatrix",Z.modelViewMatrix),Ie.setValue(E,"normalMatrix",Z.normalMatrix),Ie.setValue(E,"modelMatrix",Z.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){let yn=tt.uniformsGroups;for(let li=0,ci=yn.length;li<ci;li++){let Lc=yn[li];G.update(Lc,An),G.bind(Lc,An)}}return An}function ve(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function tn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(b,W,et){Nt.get(b.texture).__webglTexture=W,Nt.get(b.depthTexture).__webglTexture=et;let tt=Nt.get(b);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=et===void 0,tt.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,W){let et=Nt.get(b);et.__webglFramebuffer=W,et.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(b,W=0,et=0){O=b,C=W,D=et;let tt=!0,Z=null,At=!1,Ut=!1;if(b){let Yt=Nt.get(b);if(Yt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(E.FRAMEBUFFER,null),tt=!1;else if(Yt.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(Yt.__hasExternalTextures)A.rebindTextures(b,Nt.get(b.texture).__webglTexture,Nt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Zt=b.depthTexture;if(Yt.__boundDepthTexture!==Zt){if(Zt!==null&&Nt.has(Zt)&&(b.width!==Zt.image.width||b.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}let re=b.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Ut=!0);let ce=Nt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ce[W])?Z=ce[W][et]:Z=ce[W],At=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?Z=Nt.get(b).__webglMultisampledFramebuffer:Array.isArray(ce)?Z=ce[et]:Z=ce,T.copy(b.viewport),$.copy(b.scissor),q=b.scissorTest}else T.copy(vt).multiplyScalar(Y).floor(),$.copy(Ft).multiplyScalar(Y).floor(),q=Mt;if(ct.bindFramebuffer(E.FRAMEBUFFER,Z)&&tt&&ct.drawBuffers(b,Z),ct.viewport(T),ct.scissor($),ct.setScissorTest(q),At){let Yt=Nt.get(b.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+W,Yt.__webglTexture,et)}else if(Ut){let Yt=Nt.get(b.texture),re=W||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Yt.__webglTexture,et||0,re)}w=-1},this.readRenderTargetPixels=function(b,W,et,tt,Z,At,Ut){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ut!==void 0&&(qt=qt[Ut]),qt){ct.bindFramebuffer(E.FRAMEBUFFER,qt);try{let Yt=b.texture,re=Yt.format,ce=Yt.type;if(!Tt.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-tt&&et>=0&&et<=b.height-Z&&E.readPixels(W,et,tt,Z,Kt.convert(re),Kt.convert(ce),At)}finally{let Yt=O!==null?Nt.get(O).__webglFramebuffer:null;ct.bindFramebuffer(E.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(b,W,et,tt,Z,At,Ut){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ut!==void 0&&(qt=qt[Ut]),qt){let Yt=b.texture,re=Yt.format,ce=Yt.type;if(!Tt.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=b.width-tt&&et>=0&&et<=b.height-Z){ct.bindFramebuffer(E.FRAMEBUFFER,qt);let Zt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Zt),E.bufferData(E.PIXEL_PACK_BUFFER,At.byteLength,E.STREAM_READ),E.readPixels(W,et,tt,Z,Kt.convert(re),Kt.convert(ce),0);let Me=O!==null?Nt.get(O).__webglFramebuffer:null;ct.bindFramebuffer(E.FRAMEBUFFER,Me);let Ce=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Gd(E,Ce,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Zt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,At),E.deleteBuffer(Zt),E.deleteSync(Ce),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,W=null,et=0){b.isTexture!==!0&&(js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1]);let tt=Math.pow(2,-et),Z=Math.floor(b.image.width*tt),At=Math.floor(b.image.height*tt),Ut=W!==null?W.x:0,qt=W!==null?W.y:0;A.setTexture2D(b,0),E.copyTexSubImage2D(E.TEXTURE_2D,et,0,0,Ut,qt,Z,At),ct.unbindTexture()},this.copyTextureToTexture=function(b,W,et=null,tt=null,Z=0){b.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture function signature has changed."),tt=arguments[0]||null,b=arguments[1],W=arguments[2],Z=arguments[3]||0,et=null);let At,Ut,qt,Yt,re,ce,Zt,Me,Ce,Pe=b.isCompressedTexture?b.mipmaps[Z]:b.image;et!==null?(At=et.max.x-et.min.x,Ut=et.max.y-et.min.y,qt=et.isBox3?et.max.z-et.min.z:1,Yt=et.min.x,re=et.min.y,ce=et.isBox3?et.min.z:0):(At=Pe.width,Ut=Pe.height,qt=Pe.depth||1,Yt=0,re=0,ce=0),tt!==null?(Zt=tt.x,Me=tt.y,Ce=tt.z):(Zt=0,Me=0,Ce=0);let an=Kt.convert(W.format),be=Kt.convert(W.type),jt;W.isData3DTexture?(A.setTexture3D(W,0),jt=E.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(A.setTexture2DArray(W,0),jt=E.TEXTURE_2D_ARRAY):(A.setTexture2D(W,0),jt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,W.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,W.unpackAlignment);let $n=E.getParameter(E.UNPACK_ROW_LENGTH),Se=E.getParameter(E.UNPACK_IMAGE_HEIGHT),An=E.getParameter(E.UNPACK_SKIP_PIXELS),ji=E.getParameter(E.UNPACK_SKIP_ROWS),hn=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Pe.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Pe.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Yt),E.pixelStorei(E.UNPACK_SKIP_ROWS,re),E.pixelStorei(E.UNPACK_SKIP_IMAGES,ce);let Vs=b.isDataArrayTexture||b.isData3DTexture,Ie=W.isDataArrayTexture||W.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let Nn=Nt.get(b),Gs=Nt.get(W),yn=Nt.get(Nn.__renderTarget),li=Nt.get(Gs.__renderTarget);ct.bindFramebuffer(E.READ_FRAMEBUFFER,yn.__webglFramebuffer),ct.bindFramebuffer(E.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let ci=0;ci<qt;ci++)Vs&&E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Nt.get(b).__webglTexture,Z,ce+ci),b.isDepthTexture?(Ie&&E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Nt.get(W).__webglTexture,Z,Ce+ci),E.blitFramebuffer(Yt,re,At,Ut,Zt,Me,At,Ut,E.DEPTH_BUFFER_BIT,E.NEAREST)):Ie?E.copyTexSubImage3D(jt,Z,Zt,Me,Ce+ci,Yt,re,At,Ut):E.copyTexSubImage2D(jt,Z,Zt,Me,Ce+ci,Yt,re,At,Ut);ct.bindFramebuffer(E.READ_FRAMEBUFFER,null),ct.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Ie?b.isDataTexture||b.isData3DTexture?E.texSubImage3D(jt,Z,Zt,Me,Ce,At,Ut,qt,an,be,Pe.data):W.isCompressedArrayTexture?E.compressedTexSubImage3D(jt,Z,Zt,Me,Ce,At,Ut,qt,an,Pe.data):E.texSubImage3D(jt,Z,Zt,Me,Ce,At,Ut,qt,an,be,Pe):b.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,Z,Zt,Me,At,Ut,an,be,Pe.data):b.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,Z,Zt,Me,Pe.width,Pe.height,an,Pe.data):E.texSubImage2D(E.TEXTURE_2D,Z,Zt,Me,At,Ut,an,be,Pe);E.pixelStorei(E.UNPACK_ROW_LENGTH,$n),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Se),E.pixelStorei(E.UNPACK_SKIP_PIXELS,An),E.pixelStorei(E.UNPACK_SKIP_ROWS,ji),E.pixelStorei(E.UNPACK_SKIP_IMAGES,hn),Z===0&&W.generateMipmaps&&E.generateMipmap(jt),ct.unbindTexture()},this.copyTextureToTexture3D=function(b,W,et=null,tt=null,Z=0){return b.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,tt=arguments[1]||null,b=arguments[2],W=arguments[3],Z=arguments[4]||0),js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,W,et,tt,Z)},this.initRenderTarget=function(b){Nt.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),ct.unbindTexture()},this.resetState=function(){C=0,D=0,O=null,ct.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}};var As=class extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ar=class extends vi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},go=new R,yo=new R,Uh=new Re,Ys=new zi,$r=new Es,Pa=new R,kh=new R,Rs=class extends Ze{constructor(t=new Ne,e=new ar){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)go.fromBufferAttribute(e,i-1),yo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=go.distanceTo(yo);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=r,t.ray.intersectsSphere($r)===!1)return;Uh.copy(i).invert(),Ys.copy(t.ray).applyMatrix4(Uh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let y=f,g=m-1;y<g;y+=h){let p=c.getX(y),S=c.getX(y+1),v=qr(this,t,Ys,l,p,S);v&&e.push(v)}if(this.isLineLoop){let y=c.getX(m-1),g=c.getX(f),p=qr(this,t,Ys,l,y,g);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let y=f,g=m-1;y<g;y+=h){let p=qr(this,t,Ys,l,y,y+1);p&&e.push(p)}if(this.isLineLoop){let y=qr(this,t,Ys,l,m-1,f);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function qr(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(go.fromBufferAttribute(o,i),yo.fromBufferAttribute(o,r),e.distanceSqToSegment(go,yo,Pa,kh)>n)return;Pa.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Pa);if(!(l<t.near||l>t.far))return{distance:l,point:kh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var ge=class extends pn{constructor(t,e,n,i,r,o,a,l,h){super(t,e,n,i,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),h=n[i]-o,h<0)a=i+1;else if(h>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let c=n[i],d=n[i+1]-c,f=(o-c)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new bt:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,i=[],r=[],o=[],a=new R,l=new Re;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new R)}r[0]=new R,o[0]=new R;let h=Number.MAX_VALUE,c=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);c<=h&&(h=c,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Fe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Fe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},lr=class extends Mn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new bt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*c-f*u+this.aX,h=d*u+f*c+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ol=class extends lr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function pc(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){i(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,u){let d=(o-r)/h-(a-r)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+u)+(l-a)/u;d*=c,f*=c,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Yr=new R,Ia=new pc,La=new pc,Da=new pc,cr=class extends Mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=i[(a-1)%r]:(Yr.subVectors(i[0],i[1]).add(i[0]),h=Yr);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?c=i[(a+2)%r]:(Yr.subVectors(i[r-1],i[r-2]).add(i[r-1]),c=Yr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(h.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(c),f);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),Ia.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,m,y,g),La.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,m,y,g),Da.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,m,y,g)}else this.curveType==="catmullrom"&&(Ia.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),La.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),Da.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return n.set(Ia.calc(l),La.calc(l),Da.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Nh(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Bg(s,t){let e=1-s;return e*e*t}function Hg(s,t){return 2*(1-s)*s*t}function Vg(s,t){return s*s*t}function er(s,t,e,n){return Bg(s,t)+Hg(s,e)+Vg(s,n)}function Gg(s,t){let e=1-s;return e*e*e*t}function Wg(s,t){let e=1-s;return 3*e*e*s*t}function Xg(s,t){return 3*(1-s)*s*s*t}function $g(s,t){return s*s*s*t}function nr(s,t,e,n,i){return Gg(s,t)+Wg(s,e)+Xg(s,n)+$g(s,i)}var xo=class extends Mn{constructor(t=new bt,e=new bt,n=new bt,i=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new bt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(t,i.x,r.x,o.x,a.x),nr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zl=class extends Mn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(nr(t,i.x,r.x,o.x,a.x),nr(t,i.y,r.y,o.y,a.y),nr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_o=class extends Mn{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fl=class extends Mn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vo=class extends Mn{constructor(t=new bt,e=new bt,n=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new bt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(er(t,i.x,r.x,o.x),er(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mo=class extends Mn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(er(t,i.x,r.x,o.x),er(t,i.y,r.y,o.y),er(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bo=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],h=i[o],c=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Nh(a,l.x,h.x,c.x,u.x),Nh(a,l.y,h.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new bt().fromArray(i))}return this}},So=Object.freeze({__proto__:null,ArcCurve:Ol,CatmullRomCurve3:cr,CubicBezierCurve:xo,CubicBezierCurve3:zl,EllipseCurve:lr,LineCurve:_o,LineCurve3:Fl,QuadraticBezierCurve:vo,QuadraticBezierCurve3:Mo,SplineCurve:bo}),Bl=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new So[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let c=l[h];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new So[i.type]().fromJSON(i))}return this}},Fi=class extends Bl{constructor(t){super(),this.type="Path",this.currentPoint=new bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new _o(this.currentPoint.clone(),new bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new vo(this.currentPoint.clone(),new bt(t,e),new bt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new xo(this.currentPoint.clone(),new bt(t,e),new bt(n,i),new bt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new bo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let h=new lr(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Bi=class s extends Ne{constructor(t=[new bt(0,-.5),new bt(.5,0),new bt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Fe(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],h=[],c=1/e,u=new R,d=new bt,f=new R,m=new R,y=new R,g=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-g,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(m)}for(let S=0;S<=e;S++){let v=n+S*c*i,x=Math.sin(v),U=Math.cos(v);for(let C=0;C<=t.length-1;C++){u.x=t[C].x*x,u.y=t[C].y,u.z=t[C].x*U,o.push(u.x,u.y,u.z),d.x=S/e,d.y=C/(t.length-1),a.push(d.x,d.y);let D=l[3*C+0]*x,O=l[3*C+1],w=l[3*C+0]*U;h.push(D,O,w)}}for(let S=0;S<e;S++)for(let v=0;v<t.length-1;v++){let x=v+S*t.length,U=x,C=x+t.length,D=x+t.length+1,O=x+1;r.push(U,C,O),r.push(D,O,C)}this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("uv",new me(a,2)),this.setAttribute("normal",new me(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},Cs=class s extends Bi{constructor(t=1,e=1,n=4,i=8){let r=new Fi;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},Bn=class s extends Ne{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],h=new R,c=new bt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;h.x=t*Math.cos(f),h.y=t*Math.sin(f),o.push(h.x,h.y,h.z),a.push(0,0,1),c.x=(o[d]/t+1)/2,c.y=(o[d+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(a,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ue=class s extends Ne{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;i=Math.floor(i),r=Math.floor(r);let c=[],u=[],d=[],f=[],m=0,y=[],g=n/2,p=0;S(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function S(){let x=new R,U=new R,C=0,D=(e-t)/n;for(let O=0;O<=r;O++){let w=[],_=O/r,T=_*(e-t)+t;for(let $=0;$<=i;$++){let q=$/i,X=q*l+a,V=Math.sin(X),B=Math.cos(X);U.x=T*V,U.y=-_*n+g,U.z=T*B,u.push(U.x,U.y,U.z),x.set(V,D,B).normalize(),d.push(x.x,x.y,x.z),f.push(q,1-_),w.push(m++)}y.push(w)}for(let O=0;O<i;O++)for(let w=0;w<r;w++){let _=y[w][O],T=y[w+1][O],$=y[w+1][O+1],q=y[w][O+1];(t>0||w!==0)&&(c.push(_,T,q),C+=3),(e>0||w!==r-1)&&(c.push(T,$,q),C+=3)}h.addGroup(p,C,0),p+=C}function v(x){let U=m,C=new bt,D=new R,O=0,w=x===!0?t:e,_=x===!0?1:-1;for(let $=1;$<=i;$++)u.push(0,g*_,0),d.push(0,_,0),f.push(.5,.5),m++;let T=m;for(let $=0;$<=i;$++){let X=$/i*l+a,V=Math.cos(X),B=Math.sin(X);D.x=w*B,D.y=g*_,D.z=w*V,u.push(D.x,D.y,D.z),d.push(0,_,0),C.x=V*.5+.5,C.y=B*.5*_+.5,f.push(C.x,C.y),m++}for(let $=0;$<i;$++){let q=U+$,X=T+$;x===!0?c.push(X,X+1,q):c.push(X+1,X,q),O+=3}h.addGroup(p,O,x===!0?1:2),p+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ps=class s extends ue{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Is=class extends Fi{constructor(t){super(t),this.uuid=qi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Fi().fromJSON(i))}return this}},qg={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=pu(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h,c,u,d,f;if(n&&(r=Jg(s,t,r,e)),s.length>80*e){a=h=s[0],l=c=s[1];for(let m=e;m<i;m+=e)u=s[m],d=s[m+1],u<a&&(a=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);f=Math.max(h-a,c-l),f=f!==0?32767/f:0}return hr(r,o,e,a,l,f,0),o}};function pu(s,t,e,n,i){let r,o;if(i===cy(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Oh(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Oh(r,s[r],s[r+1],o);return o&&Do(o,o.next)&&(dr(o),o=o.next),o}function Hi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Do(e,e.next)||Ue(e.prev,e,e.next)===0)){if(dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function hr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&iy(s,n,i,r);let a=s,l,h;for(;s.prev!==s.next;){if(l=s.prev,h=s.next,r?Zg(s,n,i,r):Yg(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(h.i/e|0),dr(s),s=h.next,a=h.next;continue}if(s=h,s===a){o?o===1?(s=jg(Hi(s),t,e),hr(s,t,e,n,i,r,2)):o===2&&Kg(s,t,e,n,i,r):hr(Hi(s),t,e,n,i,r,1);break}}}function Yg(s){let t=s.prev,e=s,n=s.next;if(Ue(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,h=n.y,c=i<r?i<o?i:o:r<o?r:o,u=a<l?a<h?a:h:l<h?l:h,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>h?a:h:l>h?l:h,m=n.next;for(;m!==t;){if(m.x>=c&&m.x<=d&&m.y>=u&&m.y<=f&&fs(i,a,r,l,o,h,m.x,m.y)&&Ue(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Zg(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ue(i,r,o)>=0)return!1;let a=i.x,l=r.x,h=o.x,c=i.y,u=r.y,d=o.y,f=a<l?a<h?a:h:l<h?l:h,m=c<u?c<d?c:d:u<d?u:d,y=a>l?a>h?a:h:l>h?l:h,g=c>u?c>d?c:d:u>d?u:d,p=Hl(f,m,t,e,n),S=Hl(y,g,t,e,n),v=s.prevZ,x=s.nextZ;for(;v&&v.z>=p&&x&&x.z<=S;){if(v.x>=f&&v.x<=y&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&fs(a,c,l,u,h,d,v.x,v.y)&&Ue(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=y&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&fs(a,c,l,u,h,d,x.x,x.y)&&Ue(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=y&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&fs(a,c,l,u,h,d,v.x,v.y)&&Ue(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=y&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&fs(a,c,l,u,h,d,x.x,x.y)&&Ue(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function jg(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Do(i,r)&&mu(i,n,n.next,r)&&ur(i,r)&&ur(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),dr(n),dr(n.next),n=s=r),n=n.next}while(n!==s);return Hi(n)}function Kg(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&oy(o,a)){let l=gu(o,a);o=Hi(o,o.next),l=Hi(l,l.next),hr(o,t,e,n,i,r,0),hr(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Jg(s,t,e,n){let i=[],r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,h=pu(s,a,l,n,!1),h===h.next&&(h.steiner=!0),i.push(ry(h));for(i.sort(Qg),r=0;r<i.length;r++)e=ty(i[r],e);return e}function Qg(s,t){return s.x-t.x}function ty(s,t){let e=ey(s,t);if(!e)return t;let n=gu(e,s);return Hi(n,n.next),Hi(e,e.next)}function ey(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,h=i.y,c=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&fs(o<h?r:n,o,l,h,o<h?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),ur(e,s)&&(u<c||u===c&&(e.x>i.x||e.x===i.x&&ny(i,e)))&&(i=e,c=u)),e=e.next;while(e!==a);return i}function ny(s,t){return Ue(s.prev,s,t.prev)<0&&Ue(t.next,s,s.next)<0}function iy(s,t,e,n){let i=s;do i.z===0&&(i.z=Hl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,sy(i)}function sy(s){let t,e,n,i,r,o,a,l,h=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<h&&(a++,n=n.nextZ,!!n);t++);for(l=h;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,h*=2}while(o>1);return s}function Hl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ry(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function fs(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function oy(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!ay(s,t)&&(ur(s,t)&&ur(t,s)&&ly(s,t)&&(Ue(s.prev,s,t.prev)||Ue(s,t.prev,t))||Do(s,t)&&Ue(s.prev,s,s.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Do(s,t){return s.x===t.x&&s.y===t.y}function mu(s,t,e,n){let i=jr(Ue(s,t,e)),r=jr(Ue(s,t,n)),o=jr(Ue(e,n,s)),a=jr(Ue(e,n,t));return!!(i!==r&&o!==a||i===0&&Zr(s,e,t)||r===0&&Zr(s,n,t)||o===0&&Zr(e,s,n)||a===0&&Zr(e,t,n))}function Zr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function jr(s){return s>0?1:s<0?-1:0}function ay(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&mu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ur(s,t){return Ue(s.prev,s,s.next)<0?Ue(s,t,s.next)>=0&&Ue(s,s.prev,t)>=0:Ue(s,t,s.prev)<0||Ue(s,s.next,t)<0}function ly(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function gu(s,t){let e=new Vl(s.i,s.x,s.y),n=new Vl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Oh(s,t,e,n){let i=new Vl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function dr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Vl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cy(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var ir=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];zh(t),Fh(n,t);let o=t.length;e.forEach(zh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Fh(n,e[l]);let a=qg.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function zh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Fh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var fr=class s extends Ne{constructor(t=new Is([new bt(.5,.5),new bt(-.5,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new me(i,3)),this.setAttribute("uv",new me(r,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:hy,v,x=!1,U,C,D,O;p&&(v=p.getSpacedPoints(c),x=!0,d=!1,U=p.computeFrenetFrames(c,!1),C=new R,D=new R,O=new R),d||(g=0,f=0,m=0,y=0);let w=a.extractPoints(h),_=w.shape,T=w.holes;if(!ir.isClockWise(_)){_=_.reverse();for(let L=0,H=T.length;L<H;L++){let E=T[L];ir.isClockWise(E)&&(T[L]=E.reverse())}}let q=ir.triangulateShape(_,T),X=_;for(let L=0,H=T.length;L<H;L++){let E=T[L];_=_.concat(E)}function V(L,H,E){return H||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(H,E)}let B=_.length,K=q.length;function Y(L,H,E){let _t,at,Tt,ct=L.x-H.x,Gt=L.y-H.y,Nt=E.x-L.x,A=E.y-L.y,M=ct*ct+Gt*Gt,J=ct*A-Gt*Nt;if(Math.abs(J)>Number.EPSILON){let st=Math.sqrt(M),lt=Math.sqrt(Nt*Nt+A*A),it=H.x-Gt/st,Ot=H.y+ct/st,It=E.x-A/lt,Bt=E.y+Nt/lt,Xt=((It-it)*A-(Bt-Ot)*Nt)/(ct*A-Gt*Nt);_t=it+ct*Xt-L.x,at=Ot+Gt*Xt-L.y;let dt=_t*_t+at*at;if(dt<=2)return new bt(_t,at);Tt=Math.sqrt(dt/2)}else{let st=!1;ct>Number.EPSILON?Nt>Number.EPSILON&&(st=!0):ct<-Number.EPSILON?Nt<-Number.EPSILON&&(st=!0):Math.sign(Gt)===Math.sign(A)&&(st=!0),st?(_t=-Gt,at=ct,Tt=Math.sqrt(M)):(_t=ct,at=Gt,Tt=Math.sqrt(M/2))}return new bt(_t/Tt,at/Tt)}let ot=[];for(let L=0,H=X.length,E=H-1,_t=L+1;L<H;L++,E++,_t++)E===H&&(E=0),_t===H&&(_t=0),ot[L]=Y(X[L],X[E],X[_t]);let ft=[],vt,Ft=ot.concat();for(let L=0,H=T.length;L<H;L++){let E=T[L];vt=[];for(let _t=0,at=E.length,Tt=at-1,ct=_t+1;_t<at;_t++,Tt++,ct++)Tt===at&&(Tt=0),ct===at&&(ct=0),vt[_t]=Y(E[_t],E[Tt],E[ct]);ft.push(vt),Ft=Ft.concat(vt)}for(let L=0;L<g;L++){let H=L/g,E=f*Math.cos(H*Math.PI/2),_t=m*Math.sin(H*Math.PI/2)+y;for(let at=0,Tt=X.length;at<Tt;at++){let ct=V(X[at],ot[at],_t);k(ct.x,ct.y,-E)}for(let at=0,Tt=T.length;at<Tt;at++){let ct=T[at];vt=ft[at];for(let Gt=0,Nt=ct.length;Gt<Nt;Gt++){let A=V(ct[Gt],vt[Gt],_t);k(A.x,A.y,-E)}}}let Mt=m+y;for(let L=0;L<B;L++){let H=d?V(_[L],Ft[L],Mt):_[L];x?(D.copy(U.normals[0]).multiplyScalar(H.x),C.copy(U.binormals[0]).multiplyScalar(H.y),O.copy(v[0]).add(D).add(C),k(O.x,O.y,O.z)):k(H.x,H.y,0)}for(let L=1;L<=c;L++)for(let H=0;H<B;H++){let E=d?V(_[H],Ft[H],Mt):_[H];x?(D.copy(U.normals[L]).multiplyScalar(E.x),C.copy(U.binormals[L]).multiplyScalar(E.y),O.copy(v[L]).add(D).add(C),k(O.x,O.y,O.z)):k(E.x,E.y,u/c*L)}for(let L=g-1;L>=0;L--){let H=L/g,E=f*Math.cos(H*Math.PI/2),_t=m*Math.sin(H*Math.PI/2)+y;for(let at=0,Tt=X.length;at<Tt;at++){let ct=V(X[at],ot[at],_t);k(ct.x,ct.y,u+E)}for(let at=0,Tt=T.length;at<Tt;at++){let ct=T[at];vt=ft[at];for(let Gt=0,Nt=ct.length;Gt<Nt;Gt++){let A=V(ct[Gt],vt[Gt],_t);x?k(A.x,A.y+v[c-1].y,v[c-1].x+E):k(A.x,A.y,u+E)}}}Q(),F();function Q(){let L=i.length/3;if(d){let H=0,E=B*H;for(let _t=0;_t<K;_t++){let at=q[_t];St(at[2]+E,at[1]+E,at[0]+E)}H=c+g*2,E=B*H;for(let _t=0;_t<K;_t++){let at=q[_t];St(at[0]+E,at[1]+E,at[2]+E)}}else{for(let H=0;H<K;H++){let E=q[H];St(E[2],E[1],E[0])}for(let H=0;H<K;H++){let E=q[H];St(E[0]+B*c,E[1]+B*c,E[2]+B*c)}}n.addGroup(L,i.length/3-L,0)}function F(){let L=i.length/3,H=0;mt(X,H),H+=X.length;for(let E=0,_t=T.length;E<_t;E++){let at=T[E];mt(at,H),H+=at.length}n.addGroup(L,i.length/3-L,1)}function mt(L,H){let E=L.length;for(;--E>=0;){let _t=E,at=E-1;at<0&&(at=L.length-1);for(let Tt=0,ct=c+g*2;Tt<ct;Tt++){let Gt=B*Tt,Nt=B*(Tt+1),A=H+_t+Gt,M=H+at+Gt,J=H+at+Nt,st=H+_t+Nt;gt(A,M,J,st)}}}function k(L,H,E){l.push(L),l.push(H),l.push(E)}function St(L,H,E){Ct(L),Ct(H),Ct(E);let _t=i.length/3,at=S.generateTopUV(n,i,_t-3,_t-2,_t-1);Lt(at[0]),Lt(at[1]),Lt(at[2])}function gt(L,H,E,_t){Ct(L),Ct(H),Ct(_t),Ct(H),Ct(E),Ct(_t);let at=i.length/3,Tt=S.generateSideWallUV(n,i,at-6,at-3,at-2,at-1);Lt(Tt[0]),Lt(Tt[1]),Lt(Tt[3]),Lt(Tt[1]),Lt(Tt[2]),Lt(Tt[3])}function Ct(L){i.push(l[L*3+0]),i.push(l[L*3+1]),i.push(l[L*3+2])}function Lt(L){r.push(L.x),r.push(L.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return uy(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new So[i.type]().fromJSON(i)),new s(n,t.options)}},hy={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],h=t[i*3],c=t[i*3+1];return[new bt(r,o),new bt(a,l),new bt(h,c)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[n*3],c=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],y=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-c)<Math.abs(o-h)?[new bt(o,1-l),new bt(h,1-u),new bt(d,1-m),new bt(y,1-p)]:[new bt(a,1-l),new bt(c,1-u),new bt(f,1-m),new bt(g,1-p)]}};function uy(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ls=class s extends Ne{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],h=[],c=[],u=t,d=(e-t)/i,f=new R,m=new bt;for(let y=0;y<=i;y++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),h.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,c.push(m.x,m.y)}u+=d}for(let y=0;y<i;y++){let g=y*(n+1);for(let p=0;p<n;p++){let S=p+g,v=S,x=S+n+1,U=S+n+2,C=S+1;a.push(v,x,C),a.push(x,U,C)}}this.setIndex(a),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var je=class s extends Ne{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),h=0,c=[],u=new R,d=new R,f=[],m=[],y=[],g=[];for(let p=0;p<=n;p++){let S=[],v=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let U=0;U<=e;U++){let C=U/e;u.x=-t*Math.cos(i+C*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+C*r)*Math.sin(o+v*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),g.push(C+x,1-v),S.push(h++)}c.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let v=c[p][S+1],x=c[p][S],U=c[p+1][S],C=c[p+1][S+1];(p!==0||o>0)&&f.push(v,x,C),(p!==n-1||l<Math.PI)&&f.push(x,U,C)}this.setIndex(f),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(y,3)),this.setAttribute("uv",new me(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Hn=class s extends Ne{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],h=[],c=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){let y=m/i*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(y),u.y=(t+e*Math.cos(g))*Math.sin(y),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),c.x=t*Math.cos(y),c.y=t*Math.sin(y),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(m/i),h.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){let y=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,S=(i+1)*f+m;o.push(y,g,S),o.push(g,p,S)}this.setIndex(o),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(l,3)),this.setAttribute("uv",new me(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Eo=class s extends Ne{constructor(t=new Mo(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,h=new bt,c=new R,u=[],d=[],f=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function y(){for(let v=0;v<e;v++)g(v);g(r===!1?e:0),S(),p()}function g(v){c=t.getPointAt(v/e,c);let x=o.normals[v],U=o.binormals[v];for(let C=0;C<=i;C++){let D=C/i*Math.PI*2,O=Math.sin(D),w=-Math.cos(D);l.x=w*x.x+O*U.x,l.y=w*x.y+O*U.y,l.z=w*x.z+O*U.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=c.x+n*l.x,a.y=c.y+n*l.y,a.z=c.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let x=1;x<=i;x++){let U=(i+1)*(v-1)+(x-1),C=(i+1)*v+(x-1),D=(i+1)*v+x,O=(i+1)*(v-1)+x;m.push(U,C,O),m.push(C,D,O)}}function S(){for(let v=0;v<=e;v++)for(let x=0;x<=i;x++)h.x=v/e,h.y=x/i,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new So[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Et=class extends vi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wo=class extends Et{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new bt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Kr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function dy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ds=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gl=class extends Ds{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oc,endingEnd:Oc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case zc:r=t,a=2*e-n;break;case Fc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zc:o=t,l=2*n-e;break;case Fc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let h=(n-e)*.5,c=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-n),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),y=m*m,g=y*m,p=-d*g+2*d*y-d*m,S=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*y+.5*m,x=f*g-f*y;for(let U=0;U!==a;++U)r[U]=p*o[c+U]+S*o[h+U]+v*o[l+U]+x*o[u+U];return r}},Wl=class extends Ds{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=(n-e)/(i-e),u=1-c;for(let d=0;d!==a;++d)r[d]=o[h+d]*u+o[l+d]*c;return r}},Xl=class extends Ds{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Dn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Kr(e,this.TimeBufferType),this.values=Kr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Kr(t.times,Array),values:Kr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Gl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case io:e=this.InterpolantFactoryMethodDiscrete;break;case vl:e=this.InterpolantFactoryMethodLinear;break;case ia:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return io;case this.InterpolantFactoryMethodLinear:return vl;case this.InterpolantFactoryMethodSmooth:return ia}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&dy(i))for(let a=0,l=i.length;a!==l;++a){let h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ia,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],c=t[a+1];if(h!==c&&(a!==1||h!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let y=e[u+m];if(y!==e[d+m]||y!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,h=0;h!==n;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=vl;var Vi=class extends Dn{constructor(t,e,n){super(t,e,n)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=io;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var $l=class extends Dn{};$l.prototype.ValueTypeName="color";var ql=class extends Dn{};ql.prototype.ValueTypeName="number";var Yl=class extends Ds{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),h=t*a;for(let c=h+a;h!==c;h+=4)on.slerpFlat(r,0,o,h-a,o,h,l);return r}},To=class extends Dn{InterpolantFactoryMethodLinear(t){return new Yl(this.times,this.values,this.getValueSize(),t)}};To.prototype.ValueTypeName="quaternion";To.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends Dn{constructor(t,e,n){super(t,e,n)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=io;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zl=class extends Dn{};Zl.prototype.ValueTypeName="vector";var jl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){a++,r===!1&&i.onStart!==void 0&&i.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,i.onProgress!==void 0&&i.onProgress(c,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){let u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){let f=h[u],m=h[u+1];if(f.global&&(f.lastIndex=0),f.test(c))return m}return null}}},fy=new jl,Kl=class{constructor(t){this.manager=t!==void 0?t:fy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Kl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wi=class extends Ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Mi=class extends Wi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ua=new Re,Bh=new R,Hh=new R,pr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new or,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Bh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bh),Hh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Hh),e.updateMatrixWorld(),Ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Jl=class extends pr{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Ss*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Us=class extends Wi{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Jl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Vh=new Re,Zs=new R,ka=new R,Ql=class extends pr{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new bt(4,2),this._viewportCount=6,this._viewports=[new we(2,1,1,1),new we(0,1,1,1),new we(3,1,1,1),new we(1,1,1,1),new we(3,0,1,1),new we(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Zs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Zs),ka.copy(n.position),ka.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ka),n.updateMatrixWorld(),i.makeTranslation(-Zs.x,-Zs.y,-Zs.z),Vh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh)}},Un=class extends Wi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ql}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},tc=class extends pr{constructor(){super(new fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ao=class extends Wi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new tc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ro=class extends Wi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var mc="\\[\\]\\.:\\/",py=new RegExp("["+mc+"]","g"),gc="[^"+mc+"]",my="[^"+mc.replace("\\.","")+"]",gy=/((?:WC+[\/:])*)/.source.replace("WC",gc),yy=/(WCOD+)?/.source.replace("WCOD",my),xy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gc),_y=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gc),vy=new RegExp("^"+gy+yy+xy+_y+"$"),My=["material","materials","bones","map"],ec=class{constructor(t,e,n){let i=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(py,"")}static parseTrackName(t){let e=vy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);My.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[i];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=ec;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hx=new Float32Array(1);var Gh=new Re,Xi=class{constructor(t,e,n=0,i=1/0){this.ray=new zi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gh),this}intersectObject(t,e=!0,n=[]){return nc(t,this,n,e),n.sort(Wh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)nc(t[i],this,n,e);return n.sort(Wh),n}};function Wh(s,t){return s.distance-t.distance}function nc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)nc(r[o],t,e,!0)}}var mr=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Co=class extends si{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);var Uo=class extends As{constructor(){super();let t=new Rt;t.deleteAttribute("uv");let e=new Et({side:Be}),n=new Et,i=new Un(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Pt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Pt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Pt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Pt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let h=new Pt(t,n);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);let c=new Pt(t,n);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);let u=new Pt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Pt(t,Os(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Pt(t,Os(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let m=new Pt(t,Os(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let y=new Pt(t,Os(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let g=new Pt(t,Os(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);let p=new Pt(t,Os(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Os(s){let t=new xe;return t.color.setScalar(s),t}var Xe=-1.0474999999999999,bi=.292,ko=9.81,yc=.2,by=.011,yu=6,Sy=.95,xu=.78,Ey=.15,wy=7,Gn={white:{name:"Biela",color:16052712,value:0},red:{name:"\u010Cerven\xE1",color:11735583,value:1},yellow:{name:"\u017Dlt\xE1",color:15909912,value:2},green:{name:"Zelen\xE1",color:1014330,value:3},brown:{name:"Hned\xE1",color:7027230,value:4},blue:{name:"Modr\xE1",color:1525685,value:5},pink:{name:"Ru\u017Eov\xE1",color:15764136,value:6},black:{name:"\u010Cierna",color:1118481,value:7}},Sn={yellow:{x:Xe,z:bi},green:{x:Xe,z:-bi},brown:{x:Xe,z:0},blue:{x:0,z:0},pink:{x:3.569/4,z:0},black:{x:3.569/2-.324,z:0}},bn=.062,zs=.052,Yi=[{x:-3.569/2-.012,z:-1.778/2-.012,r:.058,corner:!0},{x:-3.569/2-.012,z:1.778/2+.012,r:.058,corner:!0},{x:3.569/2+.012,z:-1.778/2-.012,r:.058,corner:!0},{x:3.569/2+.012,z:1.778/2+.012,r:.058,corner:!0},{x:0,z:-1.778/2-.034,r:.056,corner:!1},{x:0,z:1.778/2+.034,r:.056,corner:!1}];function Ty(){let s=[],n=(r,o,a,l)=>s.push({ax:r,az:o,bx:a,bz:l});for(let r of[-1,1])n(r*1.7845,-.889+bn,r*1.7845,.889-bn),n(r*1.7845,-.889+bn,r*(1.7845+.045*.7),-.889+bn-.045*.7),n(r*1.7845,.889-bn,r*(1.7845+.045*.7),.889-bn+.045*.7);for(let r of[-1,1])n(-1.7845+bn,r*.889,-zs,r*.889),n(zs,r*.889,1.7845-bn,r*.889),n(-1.7845+bn,r*.889,-1.7845+bn-.045*.7,r*(.889+.045*.7)),n(1.7845-bn,r*.889,1.7845-bn+.045*.7,r*(.889+.045*.7)),n(-zs,r*.889,-zs+.008,r*(.889+.045)),n(zs,r*.889,zs-.008,r*(.889+.045));return s}var Ay=Ty();function Fs(){let s=[],t=(r,o,a)=>s.push(Ry(s.length,r,o,a));t("white",Xe-.06,-.12);for(let r of["yellow","green","brown","blue","pink","black"])t(r,Sn[r].x,Sn[r].z);let e=6e-4,n=Sn.pink.x+2*.02625+.002,i=Math.sqrt(3)*(.02625+e/2);for(let r=0;r<5;r++)for(let o=0;o<=r;o++)t("red",n+r*i,(o-r/2)*(2*.02625+e));return s}function Ry(s,t,e,n){return{id:s,kind:t,p:{x:e,z:n},v:{x:0,z:0},w:{x:0,y:0,z:0},on:!0,potted:null,moving:!1}}function yr(s){return s.map(t=>({id:t.id,kind:t.kind,x:t.p.x,z:t.p.z,on:t.on}))}function xr(s,t){for(let e of t){let n=s[e.id];n.p.x=e.x,n.p.z=e.z,n.on=e.on,n.potted=null,n.v.x=n.v.z=0,n.w.x=n.w.y=n.w.z=0}}function Oo(s,t,e,n=0,i=0){let r=Math.max(.05,Math.min(1,e))*wy,o=Math.cos(t),a=Math.sin(t);s.v.x=r*o,s.v.z=r*a;let l=n*.5*.02625,h=i*.5*.02625,c=5*r/(2*.02625*.02625);s.w.x=c*h*a,s.w.y=c*l,s.w.z=-c*h*o,s.moving=!0}var Cy=1/1e3,No=class{constructor(t){this.balls=t,this.events=[],this.firstContact=null,this.time=0}get moving(){return this.balls.some(t=>t.on&&t.moving)}advance(t){let e=t;for(;e>1e-9;){let n=Math.min(Cy,e);if(this.step(n),e-=n,!this.moving)break}return this.moving}step(t){this.time+=t;let e=this.balls;for(let n of e)n.on&&n.moving&&(Py(n,t),n.p.x+=n.v.x*t,n.p.z+=n.v.z*t);for(let n=0;n<e.length;n++){let i=e[n];if(i.on)for(let r=n+1;r<e.length;r++){let o=e[r];if(!o.on||!i.moving&&!o.moving)continue;let a=o.p.x-i.p.x,l=o.p.z-i.p.z,h=a*a+l*l;if(h>=4*.02625*.02625||h<1e-12)continue;let c=Math.sqrt(h),u=a/c,d=l/c,f=(i.v.x-o.v.x)*u+(i.v.z-o.v.z)*d,m=(2*.02625-c)/2+1e-7;if(i.p.x-=u*m,i.p.z-=d*m,o.p.x+=u*m,o.p.z+=d*m,f<=0)continue;let y=(1+Sy)/2*f;i.v.x-=y*u,i.v.z-=y*d,o.v.x+=y*u,o.v.z+=y*d,i.moving=o.moving=!0,this.firstContact===null&&(i.kind==="white"||o.kind==="white")&&(this.firstContact=i.kind==="white"?o:i),this.events.push({type:"ball",a:i.id,b:o.id,speed:f})}}for(let n of e){if(!n.on||!n.moving)continue;for(let r of Yi){let o=n.p.x-r.x,a=n.p.z-r.z;if(o*o+a*a<r.r*r.r){n.on=!1,n.moving=!1,n.potted={x:r.x,z:r.z,vx:n.v.x,vz:n.v.z,t:this.time},this.events.push({type:"pot",a:n.id,pocket:Yi.indexOf(r),speed:Math.hypot(n.v.x,n.v.z)});break}}if(!n.on)continue;for(let r of Ay)Iy(n,r,this.events);let i=.2;(Math.abs(n.p.x)>3.569/2+i||Math.abs(n.p.z)>1.778/2+i)&&(n.p.x=Math.max(-3.569/2+.02625,Math.min(3.569/2-.02625,n.p.x)),n.p.z=Math.max(-1.778/2+.02625,Math.min(1.778/2-.02625,n.p.z)),n.v.x=n.v.z=0)}}};function Py(s,t){let e=s.v,n=s.w,i=e.x+.02625*n.z,r=e.z-.02625*n.x,o=Math.hypot(i,r);if(o>1e-4){let l=3.5*yc*ko*t;if(o<=l)e.x-=2/7*i,e.z-=2/7*r,n.z=-e.x/.02625,n.x=e.z/.02625;else{let h=i/o,c=r/o,u=yc*ko*t;e.x-=u*h,e.z-=u*c;let d=5*yc*ko/(2*.02625)*t;n.x+=d*c,n.z-=d*h}}else{let l=Math.hypot(e.x,e.z),h=by*ko*t;l<=h?e.x=e.z=0:(e.x-=e.x/l*h,e.z-=e.z/l*h),n.z=-e.x/.02625,n.x=e.z/.02625}n.y*=Math.exp(-yu*t*.12);let a=yu*t;n.y=Math.abs(n.y)<=a?0:n.y-Math.sign(n.y)*a,Math.hypot(e.x,e.z)<.004&&Math.hypot(i,r)<.004&&(e.x=e.z=0,n.x=n.y=n.z=0,s.moving=!1)}function Iy(s,t,e){let n=t.bx-t.ax,i=t.bz-t.az,r=n*n+i*i,o=((s.p.x-t.ax)*n+(s.p.z-t.az)*i)/r;o=Math.max(0,Math.min(1,o));let a=t.ax+o*n,l=t.az+o*i,h=s.p.x-a,c=s.p.z-l,u=h*h+c*c;if(u>=.02625*.02625||u<1e-14)return;let d=Math.sqrt(u),f=h/d,m=c/d,y=s.v.x*f+s.v.z*m;if(s.p.x+=f*(.02625-d+1e-7),s.p.z+=m*(.02625-d+1e-7),y>=0)return;s.v.x-=(1+xu)*y*f,s.v.z-=(1+xu)*y*m;let g=-m,p=f,S=s.w.y*.02625,v=Ey*Math.min(1,-y/1.5+.3);s.v.x-=v*S*g,s.v.z-=v*S*p,s.w.y*=.55,s.w.x*=.7,s.w.z*=.7,s.moving=!0,e.push({type:"cushion",a:s.id,speed:-y})}function zo(s,t,e){let n=Math.cos(e),i=Math.sin(e),r=null;for(let a of s){if(!a.on||a===t)continue;let l=a.p.x-t.p.x,h=a.p.z-t.p.z,c=l*n+h*i;if(c<=0)continue;let u=l*l+h*h-c*c;if(u>4*.02625*.02625)continue;let d=c-Math.sqrt(4*.02625*.02625-u);d>=0&&(!r||d<r.t)&&(r={ball:a,t:d})}let o=1/0;return n>1e-9&&(o=Math.min(o,(3.569/2-.02625-t.p.x)/n)),n<-1e-9&&(o=Math.min(o,(-3.569/2+.02625-t.p.x)/n)),i>1e-9&&(o=Math.min(o,(1.778/2-.02625-t.p.z)/i)),i<-1e-9&&(o=Math.min(o,(-1.778/2+.02625-t.p.z)/i)),!r||o<r.t?{ball:null,t:o,ghost:{x:t.p.x+n*o,z:t.p.z+i*o}}:{ball:r.ball,t:r.t,ghost:{x:t.p.x+n*r.t,z:t.p.z+i*r.t}}}function _u(s,t){if(s>Xe+1e-9)return!1;let e=s-Xe;return e*e+t*t<=bi*bi+1e-9}function Fo(s,t,e,n=null){return Math.abs(t)>3.569/2-.02625||Math.abs(e)>1.778/2-.02625?!1:s.every(i=>!i.on||i===n||(i.p.x-t)**2+(i.p.z-e)**2>=4*.02625*.02625*1.0001)}var Ly=[{title:"Ovl\xE1danie my\u0161ou",lines:["Klikni do hry: my\u0161 sa zachyt\xED v okne.","Pohyb my\u0161i bez tla\u010Didla: mierenie.","Shift: jemn\xE9 mierenie (len pokro\u010Dil\xE9","   a majstrovsk\xE9 t\xE1g\xE1, pozri F2).","\u013Dav\xE9 tla\u010Didlo dr\u017E: ruka chyt\xED t\xE1go.","   My\u0161 k sebe t\xE1go odtiahne,","   pohyb dopredu vystrel\xED.","   Sila pod\u013Ea r\xFDchlosti pohybu.","Koliesko dr\u017E: miesto \xFAderu na bielej.","Dvojklik kolieskom: stred bielej.","Prav\xE9 tla\u010Didlo dr\u017E: posun poh\u013Eadu.","Ot\xE1\u010Danie kolieska: pribl\xED\u017Eenie."]},{title:"Kl\xE1vesy",lines:["F1   t\xE1to n\xE1stenka","F2   stojan s t\xE1gami","F3   nakriedova\u0165 \u0161pi\u010Dku t\xE1ga","F4   tabu\u013Ea so sk\xF3re","F6   otvori\u0165 alebo zatvori\u0165 dvere","F7 kreslo so spr\xE1vami (C, V), F8 rebr\xED\u010Dek,","F9 mixpult a r\xE1dio (\u0161\xEDpky, P),","F10 bar s telef\xF3nom (M\xF4j \xFA\u010Det),","F12 n\xE1stenka Liga, menu Liga: kancel\xE1ria","Tab  poh\u013Ead na st\xF4l zhora","Esc  hlavn\xE9 menu, Ctrl dr\u017E: vo\u013En\xE1 my\u0161","Z sp\xE4\u0165, B biela do ruky,","R nov\xE9 rozostavenie, S presko\u010Di\u0165","Medzern\xEDk dr\u017E: sila, \u0161\xEDpky: mierenie"]},{title:"Princ\xEDp hry",lines:["Bielou gu\u013Eou pot\xE1paj ostatn\xE9 gule.","Body: \u010Derven\xE1 1, \u017Elt\xE1 2, zelen\xE1 3,","hned\xE1 4, modr\xE1 5, ru\u017Eov\xE1 6, \u010Dierna 7.","O najlep\u0161ie sk\xF3re: cel\xFD frame s\xE1m,","   fauly sa odpo\u010D\xEDtaj\xFA, rozhoduje \u010Das.","S\xE9ria: body bez preru\u0161enia.","Ke\u010F spadne biela, polo\u017E ju do D.","Kruh dole ukazuje dotyk g\xFA\u013E zhora:","   uhol a plnos\u0165 z\xE1sahu.","Krieda (F3): fal\u0161e s\xFA 5x silnej\u0161ie,","   nakriedovan\xE1 \u0161pi\u010Dka vydr\u017E\xED 3 \xFAdery.","   Bez kriedy maj\xFA fal\u0161e len p\xE4tinu \xFA\u010Dinku."]},{title:"T\xE1g\xE1 (F2) a partie",lines:["Desa\u0165 t\xE1g v troch kateg\xF3ri\xE1ch.","Tvrd\xE1 \u0161pi\u010Dka: silnej\u0161\xED \xFAder,","   hor\u0161ie dr\u017E\xED fal\u0161e.","M\xE4kk\xE1 \u0161pi\u010Dka: jemnej\u0161ie \xFAdery.","Dlh\xE9 t\xE1go: dlh\u0161ie \u0165ahanie my\u0161ou,","   jemnej\u0161ie d\xE1vkovanie sily.","Pokro\u010Dil\xE9 a majstrovsk\xE9 t\xE1g\xE1","   maj\xFA jemn\xE9 mierenie so Shift.","V\xFDber: klik na kartu alebo \u0161\xEDpky.","Hra\u0165 s priate\u013Eom (menu po Esc):","   partia cez internet pod\u013Ea pravidiel."]}];function vu(){let e=document.createElement("canvas");e.width=2048,e.height=1408;let n=e.getContext("2d");n.fillStyle="#a5754a",n.fillRect(0,0,2048,1408);for(let o=0;o<9e3;o++)n.fillStyle=`rgba(${60+Math.random()*80},${35+Math.random()*40},${15+Math.random()*20},${.15+Math.random()*.25})`,n.fillRect(Math.random()*2048,Math.random()*1408,2+Math.random()*4,2+Math.random()*4);n.fillStyle="#f4ecd8",n.save(),n.translate(2048/2,92),n.rotate(-.01),n.fillRect(-330,-60,660,112),n.fillStyle="#123524",n.font="bold 76px Georgia, serif",n.textAlign="center",n.textBaseline="middle",n.fillText("N\xE1poveda",0,0),n.restore();let i=[[70,190,960,600,-.012],[1080,190,900,520,.01],[70,830,960,530,.008],[1080,760,900,600,-.01]];Ly.forEach((o,a)=>{let[l,h,c,u,d]=i[a];n.save(),n.translate(l+c/2,h+u/2),n.rotate(d),n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(-c/2+10,-u/2+12,c,u),n.fillStyle="#fbf7ec",n.fillRect(-c/2,-u/2,c,u),n.fillStyle=["#c0392b","#2f6fd6","#2a9d8f","#c9a24a"][a],n.beginPath(),n.arc(0,-u/2+22,14,0,Math.PI*2),n.fill(),n.fillStyle="#123524",n.font="bold 50px Georgia, serif",n.textAlign="left",n.textBaseline="top",n.fillText(o.title,-c/2+40,-u/2+50),n.fillStyle="#c9a24a",n.fillRect(-c/2+40,-u/2+110,c-80,4),n.fillStyle="#222";let f=Math.min(42,(u-150)/o.lines.length);n.font=`${Math.min(36,Math.floor(f*.86))}px Arial, Helvetica, sans-serif`,o.lines.forEach((m,y)=>{n.fillText(m,-c/2+44,-u/2+132+y*f)}),n.restore()});let r=new ge(e);return r.colorSpace=oe,r.anisotropy=8,r}var Wn=(s,t,e,n,i,r,o,a,l,h,c)=>({id:s,name:t,category:e,tip:n,power:i,grip:r,len:o,fine:a,colors:{shaft:l,butt:h},note:c}),Ke=[Wn("club","Klubov\xE9 t\xE1go","Z\xE1kladn\xE9","stredn\xE1",.8,1,1.45,0,"#dcb57e","#3a1c0c","Predvolen\xE9 t\xE1go na ka\u017Ed\xFD \xFAder."),Wn("short","Kr\xE1tke t\xE1go","Z\xE1kladn\xE9","tvrd\xE1",.9,.85,1.37,0,"#d2a56a","#5a1d0e","Kr\xE1tke \u0165ahanie, siln\xE9 \xFAdery, hor\u0161ie dr\u017E\xED fal\u0161e."),Wn("compact","Kompaktn\xE9 t\xE1go","Z\xE1kladn\xE9","stredn\xE1",.75,1,1.3,0,"#e0bd88","#20304a","Najkrat\u0161ie, r\xFDchle \u0165ahanie, slab\u0161ie \xFAdery."),Wn("break","Prer\xE1\u017Eacie t\xE1go","Z\xE1kladn\xE9","ve\u013Emi tvrd\xE1",1,.7,1.45,0,"#cfa060","#5b0f14","Pln\xE1 sila na rozbitie, fal\u0161e skoro nedr\u017E\xED."),Wn("soft","M\xE4kk\xE9 t\xE1go","Pokro\u010Dil\xE9","m\xE4kk\xE1",.65,1,1.47,8e-5,"#e8c992","#1f3b2a","Jemn\xE9 \xFAdery okolo \u010Diernej, presn\xE9 d\xE1vkovanie sily."),Wn("long","Dlh\xE9 t\xE1go","Pokro\u010Dil\xE9","stredn\xE1",.85,1,1.58,6e-5,"#dfbc88","#14213d","Dlh\xE9 \u0165ahanie my\u0161ou, ve\u013Emi jemn\xE9 d\xE1vkovanie sily."),Wn("ebony","Ebenov\xE9 t\xE1go","Pokro\u010Dil\xE9","stredne tvrd\xE1",.9,.95,1.49,6e-5,"#e6c896","#0d0d0d","Vyv\xE1\u017Een\xE9 t\xE1go na v\u0161etky \xFAdery."),Wn("master","Majstrovsk\xE9 t\xE1go","Majstrovsk\xE9","stredne tvrd\xE1",1,1,1.5,3e-5,"#efd3a0","#0b0b0b","Pln\xE1 sila aj najjemnej\u0161ie mierenie so Shift."),Wn("tour","Turnajov\xE9 t\xE1go","Majstrovsk\xE9","tvrd\xE1",1,.9,1.47,3e-5,"#f0d6a4","#2a0f2e","Siln\xE9 a presn\xE9 \xFAdery, fal\u0161e o nie\u010Do slab\u0161ie."),Wn("touch","Citliv\xE9 t\xE1go","Majstrovsk\xE9","m\xE4kk\xE1",.72,1,1.6,2e-5,"#f2dcae","#123524","Najjemnej\u0161ie d\xE1vkovanie sily a mierenie.")];function Mu(s){return Ke.find(t=>t.id===s)||Ke[0]}function bu(s){return 380*Math.pow(s.len/1.45,1.6)}function Dy(s){let n=document.createElement("canvas");n.width=64,n.height=2048;let i=n.getContext("2d"),r=a=>2048*(1-a);i.fillStyle=s.colors.shaft,i.fillRect(0,0,64,2048);for(let a=0;a<40;a++){i.strokeStyle=`rgba(${120+Math.random()*40},${80+Math.random()*30},${40+Math.random()*20},${.12+Math.random()*.18})`,i.lineWidth=.5+Math.random()*1.5;let l=Math.random()*64;i.beginPath(),i.moveTo(l,0);for(let h=0;h<=2048;h+=64)i.lineTo(l+Math.sin(h/300+a)*3,h);i.stroke()}i.fillStyle=s.colors.butt,i.fillRect(0,0,64,r(.64));for(let a=0;a<4;a++){let l=(a+.5)*16;i.beginPath(),i.moveTo(l-64/8,r(.64)),i.lineTo(l,r(.5)),i.lineTo(l+64/8,r(.64)),i.closePath(),i.fill()}for(let a=0;a<30;a++){i.strokeStyle=`rgba(255,255,255,${.03+Math.random()*.05})`,i.lineWidth=.6+Math.random();let l=Math.random()*64;i.beginPath(),i.moveTo(l,0),i.lineTo(l+(Math.random()-.5)*6,r(.62)),i.stroke()}i.fillStyle="#c9a24a",i.fillRect(0,r(.645),64,2048*.004),i.fillRect(0,r(.985),64,2048*.004),i.fillStyle="#111",i.fillRect(0,0,64,r(.993)),i.fillStyle="#f3efe4",i.fillRect(0,r(.03),64,2048*.017),i.fillStyle="#2f6fd6",i.fillRect(0,r(.013),64,2048*.013+1);let o=new ge(n);return o.colorSpace=oe,o.anisotropy=4,o}function Bs(s,t=!0){let e=new se,n=new ue(.0145,.0048,s.len,24,1),i=new Pt(n,new Et({map:Dy(s),roughness:.32,metalness:.04}));return i.position.y=s.len/2,i.castShadow=t,e.add(i),e}var oi=2048,Hs=1448;function Si(s,t,e,n,i,r,o){let a=String(t||"").split(/\s+/),l="",h=0;for(let c=0;c<a.length;c++){let u=l?l+" "+a[c]:a[c];if(s.measureText(u).width>i&&l){if(h++,h>=o){let d=l;for(;d&&s.measureText(d+"\u2026").width>i;)d=d.slice(0,-1);return s.fillText(d+"\u2026",e,n),n+r}s.fillText(l,e,n),n+=r,l=a[c]}else l=u}return l&&(s.fillText(l,e,n),n+=r),n}function Su(s,t){let e=document.createElement("canvas");e.width=oi,e.height=Hs;let n=e.getContext("2d"),i=new ge(e);i.colorSpace=oe,i.anisotropy=8;let r=(s||[]).slice(0,9),o=r.map(()=>null),a="#1d1a16",l='Georgia, "Times New Roman", serif',h=(u,d,f,m,y)=>{let g=o[u];if(g){let p=m/y,S=g.width,v=g.width/p;v>g.height&&(v=g.height,S=g.height*p),n.save(),n.filter="grayscale(0.25) sepia(0.15)",n.drawImage(g,(g.width-S)/2,(g.height-v)/2,S,v,d,f,m,y),n.restore()}else n.fillStyle="#cfc6b3",n.fillRect(d,f,m,y),n.fillStyle="#a69c87",n.font=`bold 40px ${l}`,n.textAlign="center",n.fillText("HEDLAJNER",d+m/2,f+y/2+14),n.textAlign="left"},c=()=>{n.fillStyle="#f1ebdd",n.fillRect(0,0,oi,Hs);for(let p=0;p<2500;p++)n.fillStyle=`rgba(120,100,70,${Math.random()*.05})`,n.fillRect(Math.random()*oi,Math.random()*Hs,3,3);let u=n.createLinearGradient(oi/2-30,0,oi/2+30,0);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.5,"rgba(0,0,0,0.12)"),u.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=u,n.fillRect(oi/2-30,0,60,Hs),n.fillStyle="#c0392b",n.fillRect(60,46,92,92),n.fillStyle="#fff",n.font=`bold 78px ${l}`,n.fillText("H",80,120),n.fillStyle=a,n.font=`bold 104px ${l}`,n.fillText(t||"HEDLAJNER",172,128),n.font=`italic 34px ${l}`,n.fillStyle="#5a5246",n.fillText("Hlavn\xE9 spr\xE1vy z domova a zo sveta",176,172);let d=new Date;if(n.textAlign="right",n.font=`30px ${l}`,n.fillText(`${d.getDate()}. ${d.getMonth()+1}. ${d.getFullYear()}   hedlajner.sk`,oi-60,128),n.textAlign="left",n.fillStyle=a,n.fillRect(60,196,oi-120,5),n.fillRect(60,207,oi-120,1.5),!r.length){n.font=`48px ${l}`,n.fillText("Spr\xE1vy sa nepodarilo na\u010D\xEDta\u0165.",80,320),i.needsUpdate=!0;return}let f=r[0];h(0,60,240,920,520),n.fillStyle="#c0392b",n.font="bold 30px Arial, sans-serif",n.fillText((f.c||"").toUpperCase(),60,808),n.fillStyle=a,n.font=`bold 62px ${l}`;let m=Si(n,f.t,60,876,920,70,3);n.font=`32px ${l}`,n.fillStyle="#3a342c",m=Si(n,f.e,60,m+10,920,42,6),n.font=`italic 26px ${l}`,n.fillStyle="#7a7060",n.fillText(f.d||"",60,Math.min(Hs-50,m+14));let y=240;for(let p=1;p<=2&&p<r.length;p++){let S=r[p];h(p,1070,y,300,200),n.fillStyle="#c0392b",n.font="bold 24px Arial, sans-serif",n.fillText((S.c||"").toUpperCase(),1395,y+26),n.fillStyle=a,n.font=`bold 40px ${l}`;let v=Si(n,S.t,1395,y+74,590,46,3);n.font=`26px ${l}`,n.fillStyle="#3a342c",Si(n,S.e,1395,v+4,590,32,Math.max(1,Math.floor((y+260-v)/32))),y+=300,n.fillStyle="rgba(29,26,22,0.4)",n.fillRect(1070,y-40,915,2)}n.fillStyle=a,n.font="bold 34px Arial, sans-serif",n.fillText("\u010EAL\u0160IE SPR\xC1VY",1070,y+8),n.fillRect(1070,y+22,915,3),r.slice(3).forEach((p,S)=>{let v=S%2,x=Math.floor(S/2),U=1070+v*470,C=y+80+x*200;C>Hs-80||(n.fillStyle="#c0392b",n.font="bold 22px Arial, sans-serif",n.fillText((p.c||"").toUpperCase(),U,C),n.fillStyle=a,n.font=`bold 32px ${l}`,Si(n,p.t,U,C+42,440,38,3),n.font=`italic 22px ${l}`,n.fillStyle="#7a7060",n.fillText(p.d||"",U,C+168))}),i.needsUpdate=!0};return c(),r.slice(0,3).forEach((u,d)=>{if(!u.i)return;let f=new Image;f.crossOrigin="anonymous",f.onload=()=>{o[d]=f;try{c()}catch{o[d]=null,c()}},f.src=u.i}),{texture:i,items:r}}function Eu(s){let n=document.createElement("canvas");n.width=1024,n.height=1400;let i=n.getContext("2d"),r=new ge(n);r.colorSpace=oe,r.anisotropy=8;let o=(s||[]).slice(0,12),a="Arial, Helvetica, sans-serif",l=i.createLinearGradient(0,0,1024,1400);l.addColorStop(0,"#0f2a4a"),l.addColorStop(1,"#1d5a7a"),i.fillStyle=l,i.fillRect(0,0,1024,1400),i.fillStyle="rgba(255,255,255,0.06)";for(let d=0;d<14;d++)i.beginPath(),i.arc(Math.random()*1024,Math.random()*1400,60+Math.random()*160,0,Math.PI*2),i.fill();i.fillStyle="#ffffff",i.font=`900 120px ${a}`,i.fillText("SPR\xC1VY",50,150),i.fillStyle="#ffcf4a",i.font=`bold 44px ${a}`,i.fillText("RSS",560,150),i.fillStyle="#d6e6f5",i.font=`30px ${a}`,i.fillText("Hedlajner  |  spr\xE1vy z m\xE9di\xED doma aj vo svete",54,200);let h=new Date;if(i.textAlign="right",i.fillText(`${h.getDate()}. ${h.getMonth()+1}. ${h.getFullYear()}`,974,70),i.textAlign="left",i.fillStyle="#ffcf4a",i.fillRect(50,226,924,6),!o.length)return i.fillStyle="#fff",i.font=`44px ${a}`,i.fillText("Spr\xE1vy z RSS nie s\xFA k dispoz\xEDcii.",60,330),r.needsUpdate=!0,{texture:r,items:o};let c=o[0];i.fillStyle="#ffcf4a",i.font=`bold 30px ${a}`,i.fillText(`${(c.c||"").toUpperCase()}  ${c.s||""}`,50,300),i.fillStyle="#ffffff",i.font=`bold 66px ${a}`;let u=Si(i,c.t,50,380,924,74,4);return i.fillStyle="#d6e6f5",i.font=`32px ${a}`,u=Si(i,c.e,50,u+6,924,42,3),u+=30,i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(36,u-10,952,1400-u-40),u+=40,o.slice(1).forEach(d=>{u>1310||(i.fillStyle="#ffcf4a",i.font=`bold 22px ${a}`,i.fillText(`${d.s||""}${d.n?"  +"+d.n+" m\xE9di\xE1":""}`,60,u),i.fillStyle="#ffffff",i.font=`bold 32px ${a}`,u=Si(i,d.t,60,u+38,894,38,2)+18)}),r.needsUpdate=!0,{texture:r,items:o}}var He={x:5,z:3.75,floor:-.86,ceil:-.86+3},Zi=1;function Uy(){let e=document.createElement("canvas");e.width=512,e.height=426;let n=e.getContext("2d");n.fillStyle="#4e2914",n.fillRect(0,0,512,426);for(let r=0;r<120;r++){n.strokeStyle=`rgba(${20+Math.random()*30},${8+Math.random()*10},2,${.12+Math.random()*.2})`,n.lineWidth=.6+Math.random()*1.4,n.beginPath();let o=Math.random()*512;n.moveTo(o,0);for(let a=0;a<=426;a+=30)n.lineTo(o+Math.sin(a/50+r)*4,a);n.stroke()}for(let r of[0,512/2]){let o=r+26,a=40,l=512/2-52,h=346;n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(o,a,l,h),n.strokeStyle="rgba(0,0,0,0.55)",n.lineWidth=6,n.strokeRect(o,a,l,h),n.strokeStyle="rgba(255,190,120,0.18)",n.lineWidth=2,n.strokeRect(o+5,a+5,l-10,h-10)}let i=new ge(e);return i.colorSpace=oe,i.wrapS=ni,i}function ky(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle="#1a4a32",e.fillRect(0,0,256,256);for(let r=0;r<256;r+=32)e.fillStyle="rgba(255,255,255,0.025)",e.fillRect(r,0,14,256);let n=(r,o)=>{e.save(),e.translate(r,o),e.fillStyle="rgba(190,170,110,0.16)",e.beginPath(),e.moveTo(0,-38),e.quadraticCurveTo(14,-10,0,0),e.quadraticCurveTo(-14,-10,0,-38),e.moveTo(0,38),e.quadraticCurveTo(14,10,0,0),e.quadraticCurveTo(-14,10,0,38),e.moveTo(-30,0),e.quadraticCurveTo(-8,10,0,0),e.quadraticCurveTo(-8,-10,-30,0),e.moveTo(30,0),e.quadraticCurveTo(8,10,0,0),e.quadraticCurveTo(8,-10,30,0),e.fill(),e.beginPath(),e.arc(0,0,5,0,Math.PI*2),e.fill(),e.restore()};n(256/2,256/2);for(let[r,o]of[[0,0],[256,0],[0,256],[256,256]])n(r,o);let i=new ge(t);return i.colorSpace=oe,i.wrapS=i.wrapT=ni,i}function Ny(s){let t=document.createElement("canvas");t.width=512,t.height=370;let e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,220),i=[["#f3c98b","#d9825b","#4a6a4d","#2c4a3a","#7aa6b8"],["#9fc3d8","#e8d3a8","#5d7b4f","#33502f","#6d93a8"]],r=i[s%i.length];n.addColorStop(0,r[0]),n.addColorStop(1,r[1]),e.fillStyle=n,e.fillRect(0,0,512,370),e.fillStyle="rgba(255,240,200,0.8)",e.beginPath(),e.arc(150+s*180,90,34,0,Math.PI*2),e.fill();for(let[a,l,h]of[[200,r[2],40],[250,r[3],30]]){e.fillStyle=l,e.beginPath(),e.moveTo(0,370);for(let c=0;c<=512;c+=16)e.lineTo(c,a-Math.sin(c/(70+s*20)+s)*h-Math.sin(c/23)*6);e.lineTo(512,370),e.fill()}e.fillStyle=r[4],e.fillRect(0,300,512,70),e.fillStyle="rgba(255,255,255,0.25)";for(let a=0;a<12;a++)e.fillRect(Math.random()*512,305+Math.random()*60,40+Math.random()*60,2);for(let a=0;a<1500;a++)e.fillStyle=`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.03)`,e.fillRect(Math.random()*512,Math.random()*370,6,2);let o=new ge(t);return o.colorSpace=oe,o}function Oy(s,t){let e=document.createElement("canvas");e.width=256,e.height=96;let n=e.getContext("2d");n.fillStyle="#c9a24a",n.fillRect(0,0,256,96),n.strokeStyle="#7a5a1c",n.lineWidth=6,n.strokeRect(3,3,250,90),n.fillStyle="#1b1206",n.textAlign="center",n.font="bold 30px Georgia, serif",n.fillText(s,128,42),n.font="22px Arial, sans-serif",n.fillText(t,128,76);let i=new ge(e);return i.colorSpace=oe,i}function wu(s,t,e={}){let n=t==="high",{x:i,z:r,floor:o,ceil:a}=He,l=a-o,h=Uy(),c=ky(),u=new Et({color:4859410,roughness:.45,metalness:.05}),d=new Et({color:3020554,roughness:.4,metalness:.05}),f=new Et({color:11569724,metalness:.85,roughness:.35}),m=new Et({color:5904914,roughness:.55,metalness:.05}),y=(P,I,j,nt,ut,wt=s)=>{let ee=new Pt(P,I);return ee.position.set(j,nt,ut),ee.castShadow=n,ee.receiveShadow=!0,wt.add(ee),ee},g={at:1.9,w:1,h:2.15},p=null,S=Vn.degToRad(72),v={open:!0,angle:S},x=[[0,-r,0,2*i,null],[0,r,Math.PI,2*i,null],[-i,0,Math.PI/2,2*r,null],[i,0,-Math.PI/2,2*r,g]];for(let[P,I,j,nt,ut]of x){let wt=new se;wt.position.set(P,o,I),wt.rotation.y=j;let ee=ut?[[-nt/2,ut.at-ut.w/2],[ut.at+ut.w/2,nt/2]]:[[-nt/2,nt/2]];for(let[$t,Wt]of ee){let _e=Wt-$t,De=($t+Wt)/2,ve=c.clone();ve.needsUpdate=!0,ve.repeat.set(_e/.6,(l-Zi)/.6),ve.offset.set($t/.6,0);let tn=new Pt(new ie(_e,l-Zi),new Et({map:ve,roughness:.9}));tn.position.set(De,Zi+(l-Zi)/2,0),tn.receiveShadow=!0,wt.add(tn);let b=h.clone();b.needsUpdate=!0,b.repeat.set(_e/1.2,1);let W=new Pt(new Rt(_e,Zi,.03),new Et({map:b,roughness:.5}));W.position.set(De,Zi/2,.015),W.receiveShadow=!0,wt.add(W);for(let[et,tt,Z]of[[.06,.12,.045],[Zi,.05,.06]]){let At=new Pt(new Rt(_e,tt,Z),u);At.position.set(De,et,Z/2),wt.add(At)}}let ne=new Pt(new Rt(nt,.18,.08),u);if(ne.position.set(0,l-.09,.04),wt.add(ne),ut){let $t=l-ut.h,Wt=c.clone();Wt.needsUpdate=!0,Wt.repeat.set(ut.w/.6,$t/.6);let _e=new Pt(new ie(ut.w,$t),new Et({map:Wt,roughness:.9}));_e.position.set(ut.at,ut.h+$t/2,0),wt.add(_e);let De=[[ut.at-ut.w/2-.04,ut.h/2,.08,ut.h+.08],[ut.at+ut.w/2+.04,ut.h/2,.08,ut.h+.08],[ut.at,ut.h+.04,ut.w+.16,.08]];for(let[Ut,qt,Yt,re]of De)y(new Rt(Yt,re,.1),d,Ut,qt,.03,wt);for(let Ut of[-1,1])y(new Rt(.02,ut.h,.2),d,ut.at+Ut*ut.w/2,ut.h/2,-.1,wt);y(new Rt(ut.w,.02,.2),d,ut.at,ut.h,-.1,wt);let ve=new se;ve.position.set(ut.at+ut.w/2-.02,0,.02),ve.rotation.y=Vn.degToRad(72),wt.add(ve),p=ve;let tn=new Et({color:5910294,roughness:.45});y(new Rt(ut.w-.04,ut.h-.02,.045),tn,-(ut.w-.04)/2,ut.h/2,0,ve);for(let Ut of[.55,1.5])for(let qt of[-1,1])y(new Rt(ut.w-.26,.7,.012),d,-(ut.w-.04)/2,Ut,qt*.026,ve);let b=y(new je(.03,16,12),f,-(ut.w-.04)+.08,1,.05,ve);b.castShadow=!1;let W=new se;W.position.set(ut.at,0,-1.2),wt.add(W);let et=new Et({color:7035461,roughness:.9,side:Be});y(new Rt(2.4,2.6,2.2),et,0,1.3,-.05,W);let tt=y(new ie(2.4,2.2),new Et({color:3877404,roughness:.8}),0,.005,-.05,W);tt.rotation.x=-Math.PI/2;let Z=new Un(16767136,n?2.2:1.4,4,1.6);Z.position.set(0,2.2,-.4),W.add(Z);let At=y(new je(.05,12,8),new xe({color:16773328}),0,2.45,-.4,W);At.castShadow=!1}s.add(wt)}let U=new Et({color:1905420,roughness:.9}),C=new Pt(new ie(2*i,2*r),U);C.rotation.x=Math.PI/2,C.position.y=a,C.layers.set(2),s.add(C);let D=new Et({color:3809039,roughness:.6});for(let P=-i+1.25;P<i-.1;P+=1.25){let I=new Pt(new Rt(.16,.18,2*r),D);I.position.set(P,a-.09,0),I.layers.set(2),s.add(I)}let O=new Et({color:16769712,emissive:16760944,emissiveIntensity:1.2,roughness:.6}),w=o+2.35,_=[[-2.6,-r,0],[2.6,-r,0],[-2.8,r,Math.PI],[2.8,r,Math.PI],[-i,0,Math.PI/2],[i,-1.5,-Math.PI/2]];s.add(new Ro(16770760,n?.22:.4));for(let[P,I,j]of _){let nt=new se;nt.position.set(P,w,I),nt.rotation.y=j;let ut=new Pt(new ue(.05,.05,.02,20),f);ut.rotation.x=Math.PI/2,ut.position.z=.01,nt.add(ut);let wt=new Pt(new ue(.008,.008,.14,8),f);wt.rotation.x=Math.PI/2,wt.position.z=.08,nt.add(wt);let ee=new Pt(new ue(.05,.085,.13,24,1,!0),O);if(ee.position.set(0,.05,.16),nt.add(ee),s.add(nt),n){let ne=new Un(16758886,5,4.5,1.5);ne.position.set(P+Math.sin(j)*.3,w+.05,I+Math.cos(j)*.3),s.add(ne)}}let T={x:-2.6,y:o+1.5,w:1.6,h:1.1},$=y(new ie(T.w,T.h),new Et({map:vu(),roughness:.85}),T.x,T.y,-r+.045);$.castShadow=!1;for(let[P,I,j,nt]of[[T.x,T.y+T.h/2+.03,T.w+.12,.06],[T.x,T.y-T.h/2-.03,T.w+.12,.06],[T.x-T.w/2-.03,T.y,.06,T.h],[T.x+T.w/2+.03,T.y,.06,T.h]])y(new Rt(j,nt,.06),d,P,I,-r+.04);y(new Rt(T.w,T.h,.02),d,T.x,T.y,-r+.02);let q={x:2.6,base:o},X=.21,V=Ke.length*X+.2;y(new Rt(V,1.85,.03),d,q.x,o+.15+.925,-r+.05),y(new Rt(V+.05,.06,.16),u,q.x,o+.12,-r+.11),y(new Rt(V+.05,.05,.12),u,q.x,o+1.35,-r+.1);let B=[];Ke.forEach((P,I)=>{let j=q.x+(I-(Ke.length-1)/2)*X,nt=new se;nt.position.set(j,o+.16+P.len,-r+.12),nt.rotation.x=Math.PI,nt.add(Bs(P,n)),s.add(nt);let ut=new Pt(new ie(.18,.068),new Et({map:Oy(String(I+1),P.category),roughness:.4,metalness:.3}));ut.position.set(j,o+.3,-r+.07),s.add(ut),B.push({group:nt,baseZ:-r+.12,spec:P})});let K=new Pt(new Ls(.035,.06,32),new xe({color:16765503,transparent:!0,opacity:.9}));K.rotation.x=-Math.PI/2,s.add(K);let Y=P=>{for(let I of B){let j=I.spec.id===P;I.group.position.z=I.baseZ+(j?.12:0),j&&K.position.set(I.group.position.x,o+.005,I.group.position.z)}},ot={x:-.78,y:o+1.42,w:1.5};y(new Rt(ot.w,.04,.26),d,ot.x,ot.y,-r+.13);for(let P of[-1,1]){let I=y(new Rt(.03,.16,.2),d,ot.x+P*(ot.w/2-.03),ot.y-.1,-r+.11);I.castShadow=!1}let ft=(()=>{let P=document.createElement("canvas");P.width=1024,P.height=128;let I=P.getContext("2d");I.fillStyle="#123524",I.fillRect(0,0,1024,128),I.strokeStyle="#c9a24a",I.lineWidth=6,I.strokeRect(8,8,1008,112),I.fillStyle="#f2d48a",I.font="bold 60px Georgia, serif",I.textAlign="center",I.textBaseline="middle",I.fillText("NAJLEP\u0160\xCD HR\xC1\u010CI",512,68);let j=new ge(P);return j.colorSpace=oe,j})();y(new ie(.9,.11),new Et({map:ft,roughness:.6}),ot.x,ot.y+.62,-r+.035).castShadow=!1;let vt=[new Et({color:15777856,metalness:.55,roughness:.28,emissive:3811328,emissiveIntensity:.6}),new Et({color:14672872,metalness:.55,roughness:.25,emissive:2763824,emissiveIntensity:.6}),new Et({color:13140042,metalness:.55,roughness:.3,emissive:3020294,emissiveIntensity:.6})],Ft=P=>[[0,0],[.07,0],[.07,.025],[.035,.035],[.016,.05],[.014,.12],[.022,.135],[.06,.16],[.085,.22],[.095,.29],[.09,.3],[.08,.235],[.055,.17],[0,.155]].map(([I,j])=>new bt(I*P,j*P)),Mt=[];[[1,-.5,.92],[0,0,1.12],[2,.5,.82]].forEach(([P,I,j])=>{let nt=ot.x+I*(ot.w*.62),ut=-r+.14,wt=new se;wt.position.set(nt,ot.y+.02,ut);let ee=new Pt(new Bi(Ft(j),40),vt[P]);ee.castShadow=!0,wt.add(ee);for(let De of[-1,1]){let ve=new Pt(new Hn(.035*j,.006*j,8,20,Math.PI),vt[P]);ve.position.set(De*.088*j,.24*j,0),ve.rotation.z=De>0?-Math.PI/2:Math.PI/2,wt.add(ve)}let ne=new Pt(new Rt(.17*j,.05,.17*j),d);ne.position.y=-0,wt.position.y+=.05,ne.position.y=-.025,wt.add(ne),s.add(wt);let $t=document.createElement("canvas");$t.width=512,$t.height=160;let Wt=new ge($t);Wt.colorSpace=oe,Wt.anisotropy=8;let _e=new Pt(new ie(.4,.125),new Et({map:Wt,roughness:.45,metalness:.2}));_e.position.set(nt,ot.y-.11,-r+.03),_e.castShadow=!1,s.add(_e),Mt[P]={c:$t,tex:Wt}});let Q=new Un(16769712,n?1.6:1.2,2.2,1.6);Q.position.set(ot.x,ot.y+.75,-r+.55),s.add(Q);let F={x:.72,y:o+1.68,w:.95,h:1},mt=document.createElement("canvas");mt.width=760,mt.height=800;let k=new ge(mt);k.colorSpace=oe,k.anisotropy=8,y(new ie(F.w,F.h),new Et({map:k,roughness:.85}),F.x,F.y,-r+.045).castShadow=!1,y(new Rt(F.w+.08,F.h+.08,.03),d,F.x,F.y,-r+.02);let St=P=>{let I=Math.max(0,Math.round(P||0));return`${Math.floor(I/60)}:${String(I%60).padStart(2,"0")}`},gt=(P,I,j)=>{let nt=String(I||"");for(;nt.length>1&&P.measureText(nt).width>j;)nt=nt.slice(0,-1);return nt===String(I||"")?nt:nt.slice(0,-1)+"\u2026"},Ct=P=>{let I=P||[],j=["#e8b830","#c9cdd3","#b8733a"];for(let wt=0;wt<3;wt++){let{c:ee,tex:ne}=Mt[wt],$t=ee.getContext("2d"),Wt=I[wt];$t.fillStyle="#20150c",$t.fillRect(0,0,512,160),$t.strokeStyle=j[wt],$t.lineWidth=8,$t.strokeRect(6,6,500,148),$t.textAlign="center",$t.fillStyle=j[wt],$t.font="bold 54px Georgia, serif",$t.fillText(Wt?gt($t,`${wt+1}. ${Wt.user.name}`,480):`${wt+1}. miesto`,256,66),$t.fillStyle="#f4ecd8",$t.font="bold 42px Arial, Helvetica, sans-serif",$t.fillText(Wt?`${Wt.points} b.  za ${St(Wt.seconds)}`:"vo\u013En\xE9",256,128),ne.needsUpdate=!0}let nt=mt.getContext("2d"),ut=mt.width;nt.fillStyle="#a5754a",nt.fillRect(0,0,ut,mt.height),nt.fillStyle="#fbf7ec",nt.fillRect(30,30,ut-60,mt.height-60),nt.fillStyle="#c0392b",nt.beginPath(),nt.arc(ut/2,52,12,0,Math.PI*2),nt.fill(),nt.fillStyle="#123524",nt.textAlign="center",nt.font="bold 46px Georgia, serif",nt.fillText("Rebr\xED\u010Dek 4. a\u017E 10.",ut/2,120),nt.fillStyle="#c9a24a",nt.fillRect(60,142,ut-120,4);for(let wt=3;wt<10;wt++){let ee=I[wt],ne=210+(wt-3)*80;nt.textAlign="left",nt.fillStyle="#123524",nt.font="bold 36px Arial, Helvetica, sans-serif",nt.fillText(`${wt+1}.`,64,ne),nt.fillStyle=ee?"#222":"#999",nt.font="34px Arial, Helvetica, sans-serif",nt.fillText(ee?gt(nt,ee.user.name,330):"...",130,ne),nt.textAlign="right",nt.fillText(ee?`${ee.points} b.  ${St(ee.seconds)}`:"",ut-64,ne),nt.fillStyle="rgba(201,162,74,0.35)",nt.fillRect(64,ne+22,ut-128,2)}k.needsUpdate=!0};Ct([]);let Lt={y:o+1.62,w:1.5,h:.84},L={z:-2,y:Lt.y,w:1.55,h:.98},H=document.createElement("canvas");H.width=1280,H.height=810;let E=new ge(H);E.colorSpace=oe,E.anisotropy=8,y(new Rt(.05,L.h+.1,L.w+.1),d,-i+.03,L.y,L.z);let _t=y(new ie(L.w,L.h),new Et({map:E,roughness:.85}),-i+.058,L.y,L.z);_t.rotation.y=Math.PI/2,_t.castShadow=!1;let at=P=>{let I=H.getContext("2d"),j=1280,nt=810;I.fillStyle="#a5754a",I.fillRect(0,0,j,nt);for(let wt=0;wt<4e3;wt++)I.fillStyle=`rgba(${60+Math.random()*80},${35+Math.random()*40},${15+Math.random()*20},0.25)`,I.fillRect(Math.random()*j,Math.random()*nt,3,3);I.fillStyle="#123524",I.fillRect(380,18,520,92),I.fillStyle="#f2d48a",I.font="bold 56px Georgia, serif",I.textAlign="center",I.fillText("LIGA",640,82),I.fillStyle="#fbf7ec",I.font="26px Arial, sans-serif",I.fillText(P&&P.season?`${P.season.name}  \xB7  do konca ${P.season.daysLeft} dn\xED`:"Liga: prihl\xE1s sa a hraj ligov\xE9 partie",640,145);let ut=[[30,170],[345,170],[660,170],[975,170]];for(let wt=1;wt<=4;wt++){let[ee,ne]=ut[wt-1],$t=275,Wt=520;I.save(),I.translate(ee+$t/2,ne+Wt/2),I.rotate((wt%2?-1:1)*.01),I.fillStyle="rgba(0,0,0,0.35)",I.fillRect(-$t/2+6,-Wt/2+8,$t,Wt),I.fillStyle="#fbf7ec",I.fillRect(-$t/2,-Wt/2,$t,Wt),I.fillStyle=["#c9a24a","#9aa0a8","#b8733a","#2a9d8f"][wt-1],I.beginPath(),I.arc(0,-Wt/2+18,11,0,Math.PI*2),I.fill(),I.fillStyle="#123524",I.font="bold 40px Georgia, serif",I.textAlign="center",I.fillText(`${wt}. liga`,0,-Wt/2+78),I.fillStyle="#c9a24a",I.fillRect(-$t/2+20,-Wt/2+96,$t-40,3);let _e=P&&P.leagues&&P.leagues[wt]||[];I.textAlign="left";for(let De=0;De<5;De++){let ve=_e[De],tn=-Wt/2+150+De*72;I.fillStyle=ve?"#222":"#aaa",I.font="bold 26px Arial, sans-serif";let b=ve?`${ve.rank}. ${ve.user.name}`:`${De+1}. ...`;for(;b.length>2&&I.measureText(b).width>$t-40;)b=b.slice(0,-1);I.fillText(b,-$t/2+20,tn),I.font="22px Arial, sans-serif",I.fillStyle="#555",I.fillText(ve?`${ve.points} b.  V ${ve.wins} / P ${ve.losses}`:"",-$t/2+20,tn+28)}I.restore()}I.fillStyle="#123524",I.fillRect(30,718,j-60,66),I.fillStyle="#FACC15",I.font="bold 30px Arial, sans-serif",I.textAlign="center",I.fillText(P&&P.me?`Ty: ${P.me.rank}. miesto v ${P.me.league}. lige, ${P.me.points} bodov`:"Liga: v menu (Esc) tla\u010Didlo Liga",j/2,762),E.needsUpdate=!0};at(null);let Tt=document.createElement("canvas");Tt.width=1024,Tt.height=574;let ct=new ge(Tt);ct.colorSpace=oe,ct.anisotropy=8,y(new Rt(.05,Lt.h+.12,Lt.w+.12),d,-i+.03,Lt.y,0);let Gt=y(new ie(Lt.w,Lt.h),new Et({map:ct,roughness:.7,emissive:16777215,emissiveMap:ct,emissiveIntensity:.12}),-i+.064,Lt.y,0);Gt.rotation.y=Math.PI/2,Gt.castShadow=!1;let Nt=(P,I)=>{let j=Tt.getContext("2d"),nt=Tt.width,ut=Tt.height;j.fillStyle="#123524",j.fillRect(0,0,nt,ut),j.strokeStyle="#c9a24a",j.lineWidth=8,j.strokeRect(14,14,nt-28,ut-28),j.fillStyle="#f2d48a",j.textAlign="center",j.font="bold 62px Georgia, serif",j.fillText("MY SNOOKER",nt/2,92),j.font="34px Georgia, serif",j.fillStyle="#e8e2cf",j.fillText(I&&I.mode||"Tr\xE9ning",nt/2,140);let wt=I&&I.match,ee=I&&I.rows?I.rows:wt?[[wt.names[0]+(wt.turn===0?"  \u25CF":""),wt.scores[0]],[wt.names[1]+(wt.turn===1?"  \u25CF":""),wt.scores[1]],["S\xE9ria",wt.brk],["Hr\xE1 sa na",wt.on],["Zost\xE1va na stole",wt.left]]:[["\xDAdery",P.shots],["Spadnut\xE9 gule",P.potted],["Body",P.points],["S\xE9ria",P.run],["Najlep\u0161ia s\xE9ria",P.best]];j.font="40px Arial, Helvetica, sans-serif",ee.forEach(([ne,$t],Wt)=>{let _e=210+Wt*62;j.textAlign="left",j.fillStyle="#e8e2cf",j.fillText(ne,90,_e),j.textAlign="right",j.fillStyle="#ffffff",j.font="bold 44px Arial, Helvetica, sans-serif",j.fillText(String($t),nt-90,_e),j.font="40px Arial, Helvetica, sans-serif",j.fillStyle="rgba(201,162,74,0.35)",j.fillRect(90,_e+16,nt-180,2)}),I&&(j.textAlign="center",j.font="30px Arial, Helvetica, sans-serif",j.fillStyle="#f2d48a",j.fillText(`${I.cue}   |   Krieda: ${I.chalk>0?I.chalk+" \xFAdery":"\u017Eiadna (F3)"}`,nt/2,ut-40)),ct.needsUpdate=!0};Nt({shots:0,potted:0,points:0,run:0,best:0},null),y(new Rt(.45,.8,1.7),d,-i+.25,o+.4,0),y(new Rt(.47,.03,1.74),u,-i+.25,o+.815,0);for(let P of[-.42,.42])y(new Rt(.012,.5,.75),u,-i+.48,o+.42,P),y(new je(.015,10,8),f,-i+.49,o+.55,P*.2);let A=-i+1.1,M=r-1.1;y(new ue(.32,.32,.04,32),d,A,o+1.05,M);let J=o+1.07,st=new se;st.position.set(A+.05,J,M-.08),st.rotation.y=-Math.PI/4,s.add(st),y(new Rt(.078,.009,.158),new Et({color:1381914,roughness:.35,metalness:.6}),0,.0045,0,st);let lt=document.createElement("canvas");lt.width=360,lt.height=740;let it=new ge(lt);it.colorSpace=oe,it.anisotropy=8;let Ot=y(new ie(.07,.146),new xe({map:it}),0,.0092,0,st);Ot.rotation.x=-Math.PI/2,Ot.castShadow=!1;let It=P=>{let I=lt.getContext("2d"),j=360,nt=I.createLinearGradient(0,0,0,740);nt.addColorStop(0,"#1d2b45"),nt.addColorStop(1,"#0c1220"),I.fillStyle=nt,I.fillRect(0,0,j,740),I.fillStyle="#e8ecf3",I.font="22px Arial, sans-serif",I.textAlign="left",I.fillText("11:30",24,40),I.textAlign="right",I.fillText("5G  86 %",j-24,40),I.textAlign="center",I.fillStyle="#FACC15",I.beginPath(),I.arc(j/2,170,62,0,Math.PI*2),I.fill(),I.fillStyle="#111214",I.font="bold 64px Arial, sans-serif",I.fillText(P&&P.name?P.name.trim().charAt(0).toUpperCase():"?",j/2,193),I.fillStyle="#ffffff",I.font="bold 40px Arial, sans-serif",I.fillText("M\xF4j \xFA\u010Det",j/2,290),I.fillStyle="#b9c2d3",I.font="28px Arial, sans-serif",I.fillText(P?String(P.name).slice(0,20):"Neprihl\xE1sen\xFD",j/2,334),["Profil","Prihl\xE1senie a heslo","S\xFAhlasy","Nastavenia \xFA\u010Dtu"].forEach((wt,ee)=>{let ne=400+ee*66;I.fillStyle="#ffffff14",I.fillRect(28,ne,j-56,54),I.fillStyle="#e8ecf3",I.textAlign="left",I.font="26px Arial, sans-serif",I.fillText(wt,48,ne+36),I.textAlign="right",I.fillStyle="#FACC15",I.fillText("\u203A",j-44,ne+37)}),I.textAlign="center",I.fillStyle="#FACC15",I.font="bold 26px Arial, sans-serif",I.fillText("\u0164ukni a otvor",j/2,700),it.needsUpdate=!0};It(e.user||null);let Bt=new Et({color:15267071,transparent:!0,opacity:.22,roughness:.05,metalness:.1,side:Ve,depthWrite:!1}),Xt=new Et({color:10474751,transparent:!0,opacity:.45,roughness:.05,metalness:.05,depthWrite:!1});for(let[P,I]of[[.2,.05],[.11,.17]]){let j=y(new ue(.036,.03,.12,28,1,!0),Bt,A+P,J+.06,M+I);j.castShadow=!1;let nt=y(new ue(.03,.03,.008,28),Bt,A+P,J+.004,M+I);nt.castShadow=!1;let ut=y(new ue(.033,.029,.08,28),Xt,A+P,J+.048,M+I);ut.castShadow=!1,ut.renderOrder=1,j.renderOrder=2}y(new ue(.03,.03,1.03,12),f,A,o+.53,M),y(new ue(.22,.25,.03,24),f,A,o+.015,M);for(let P of[.6,2.3]){let I=A+Math.cos(P)*.55,j=M-Math.sin(P)*.55;y(new ue(.18,.18,.08,24),m,I,o+.76,j),y(new ue(.022,.022,.72,10),f,I,o+.36,j),y(new Hn(.15,.01,8,24),f,I,o+.3,j).rotation.x=Math.PI/2,y(new ue(.17,.2,.02,20),f,I,o+.01,j)}let dt=(P,I,j)=>{let nt=new se;nt.position.set(P,o,I),nt.rotation.y=j,y(new Rt(.8,.42,.8),m,0,.21,0,nt),y(new Rt(.8,.5,.18),m,0,.66,-.31,nt);for(let ut of[-1,1])y(new Rt(.16,.24,.8),m,ut*.4,.54,0,nt);y(new Rt(.56,.08,.6),new Et({color:7219740,roughness:.6}),0,.46,.04,nt),s.add(nt)};dt(-1,r-.7,Math.PI),dt(1,r-.7,Math.PI);let N={x:0,z:r-1.45,top:o+.45};y(new Rt(1.2,.04,.62),d,N.x,N.top-.02,N.z),y(new Rt(1.1,.06,.52),u,N.x,N.top-.07,N.z);for(let P of[-1,1])for(let I of[-1,1])y(new Rt(.05,N.top-o-.04,.05),d,N.x+P*.54,o+(N.top-o-.04)/2,N.z+I*.25);let pt=Su(e.news,e.site),ht={x:N.x+.12,z:N.z+.02,w:.62,h:.44},Dt=new Pt(new ie(ht.w,ht.h),new Et({map:pt.texture,roughness:.92}));Dt.rotation.order="YXZ",Dt.rotation.set(-Math.PI/2,.12,0),Dt.position.set(ht.x,N.top+.002,ht.z),Dt.receiveShadow=!0,s.add(Dt);let Qt=Eu(e.rss),Kt={x:N.x-.36,z:N.z-.02,w:.3,h:.41},de=new Pt(new ie(Kt.w,Kt.h),new Et({map:Qt.texture,roughness:.35,metalness:.05}));de.rotation.order="YXZ",de.rotation.set(-Math.PI/2,-.18,0),de.position.set(Kt.x,N.top+.003,Kt.z),de.receiveShadow=!0,s.add(de);for(let[P,I]of[[-2.8,0],[2.8,1]]){let j=y(new ie(.86,.62),new Et({map:Ny(I),roughness:.7}),P,o+1.75,r-.046);j.rotation.y=Math.PI,j.castShadow=!1,y(new Rt(1,.76,.04),new Et({color:9071146,metalness:.6,roughness:.4}),P,o+1.75,r-.02)}let G=new se;G.position.set(i-.02,o+2,.35),G.rotation.y=-Math.PI/2,s.add(G);{let I=document.createElement("canvas");I.width=I.height=512;let j=I.getContext("2d");j.fillStyle="#f4eedc",j.fillRect(0,0,512,512),j.translate(256,256),j.strokeStyle="#2a2218";for(let ne=0;ne<60;ne++){let $t=ne/60*Math.PI*2,Wt=ne%5===0;j.lineWidth=Wt?9:3,j.beginPath(),j.moveTo(Math.sin($t)*(Wt?200:214),-Math.cos($t)*(Wt?200:214)),j.lineTo(Math.sin($t)*236,-Math.cos($t)*236),j.stroke()}j.fillStyle="#2a2218",j.font="bold 56px Georgia, serif",j.textAlign="center",j.textBaseline="middle";for(let ne=1;ne<=12;ne++){let $t=ne/12*Math.PI*2;j.fillText(String(ne),Math.sin($t)*160,-Math.cos($t)*160+3)}j.font="22px Georgia, serif",j.fillText("MY SNOOKER",0,78);let nt=new ge(I);nt.colorSpace=oe,nt.anisotropy=8;let ut=new Pt(new Bn(.2,64),new Et({map:nt,roughness:.6}));ut.position.z=.012,G.add(ut);let wt=new Pt(new Hn(.2+.012,.018,12,64),d);wt.position.z=.014,G.add(wt);let ee=new Pt(new ue(.2+.02,.2+.02,.02,48),d);ee.rotation.x=Math.PI/2,G.add(ee)}let kt=new Et({color:1709328,roughness:.5,metalness:.3}),rt=(P,I,j,nt)=>{let ut=new se;ut.position.z=j;let wt=new Pt(new Rt(I,P,.004),nt);return wt.position.y=P/2-P*.15,ut.add(wt),G.add(ut),ut},yt=rt(.11,.012,.018,kt),zt=rt(.16,.008,.022,kt),Ht=rt(.17,.003,.026,new Et({color:11735583,roughness:.5})),Jt=new Pt(new ue(.009,.009,.012,16),f);Jt.rotation.x=Math.PI/2,Jt.position.z=.028,G.add(Jt);let Ae=11*3600+30*60,ke=P=>{let I=Ae+P,j=I%60,nt=I/60%60,ut=I/3600%12;Ht.rotation.z=-(Math.floor(j)/60)*Math.PI*2,zt.rotation.z=-(nt/60)*Math.PI*2,yt.rotation.z=-(ut/12)*Math.PI*2};ke(0);let pe=i-.5,Je=-r+.5;y(new ue(.2,.15,.4,20),new Et({color:8010530,roughness:.7}),pe,o+.2,Je);let z=new Et({color:3107631,roughness:.7});for(let P=0;P<14;P++){let I=P/14*Math.PI*2,j=.08+P%3*.06,nt=y(new je(.11+P%2*.04,10,8),z,pe+Math.cos(I)*j,o+.55+P%4*.18,Je+Math.sin(I)*j);nt.scale.set(1,1.6,.5),nt.rotation.y=I}return{board:{pos:new R(T.x,T.y,-r+1.62),look:new R(T.x,T.y,-r)},rack:{pos:new R(q.x,o+1.15,-r+3.3),look:new R(q.x,o+.6,-r)},score:{pos:new R(-i+1.55,Lt.y,0),look:new R(-i,Lt.y,0)},bar:{pos:new R(A-.4,o+1.5,M+.38),look:new R(A+.62,o+.72,M-.6)},phone:Ot,setPhone:It,leagueBoard:{pos:new R(-i+1.55,L.y,L.z),look:new R(-i,L.y,L.z)},setLeague:at,trophies:{pos:new R(-.17,o+1.62,-r+2.05),look:new R(-.17,o+1.6,-r)},chair:{pos:new R(1,o+1.12,r-.8),look:new R(-.2,o+.62,.3)},news:{pos:new R(ht.x+.11,N.top+.6,ht.z+.27),look:new R(ht.x+.1,N.top,ht.z-.01)},newsItems:pt.items,magazine:{pos:new R(Kt.x+.02,N.top+.5,Kt.z+.2),look:new R(Kt.x,N.top,Kt.z-.01)},rssItems:Qt.items,selectCue:Y,updateScore:Nt,setClock:ke,setTrophies:Ct,toggleDoor(){return v.open=!v.open,v.open},update(P){if(!p)return!1;let I=v.open?S:0,j=v.angle,nt=P*1.4;return v.angle=j+Math.max(-nt,Math.min(nt,I-j)),p.rotation.y=v.angle,j>0&&v.angle===0}}}function xc(s,t=.15){return s.x=Math.max(-He.x+t,Math.min(He.x-t,s.x)),s.z=Math.max(-He.z+t,Math.min(He.z-t,s.z)),s.y=Math.max(He.floor+.1,Math.min(He.ceil-.25,s.y)),s}var _c=.062,zy=.052,gn=.05,vc=.12,Fy=.037;function Tu(s,t="#1d6b34"){let n=Math.round(2048*(1.778+2*gn)/(3.569+2*gn)),i=document.createElement("canvas");i.width=2048,i.height=n;let r=i.getContext("2d");r.fillStyle=t,r.fillRect(0,0,2048,n);let o=r.getImageData(0,0,2048,n);for(let d=0;d<o.data.length;d+=4){let f=(Math.random()-.5)*10;o.data[d]+=f,o.data[d+1]+=f*1.4,o.data[d+2]+=f}r.putImageData(o,0,0);let a=r.createRadialGradient(2048/2,n/2,n*.1,2048/2,n/2,2048*.6);a.addColorStop(0,"rgba(255,255,255,0.06)"),a.addColorStop(1,"rgba(0,0,0,0.18)"),r.fillStyle=a,r.fillRect(0,0,2048,n);let l=2048/(3.569+2*gn),h=d=>(d+3.569/2+gn)*l,c=d=>(d+1.778/2+gn)*l;r.strokeStyle="rgba(255,255,255,0.75)",r.lineWidth=Math.max(2,l*.003),r.beginPath(),r.moveTo(h(Xe),c(-1.778/2)),r.lineTo(h(Xe),c(1.778/2)),r.stroke(),r.beginPath(),r.arc(h(Xe),c(0),bi*l,Math.PI/2,3*Math.PI/2),r.stroke(),r.fillStyle="rgba(255,255,255,0.8)";for(let d of Object.keys(Sn))r.beginPath(),r.arc(h(Sn[d].x),c(Sn[d].z),l*.005,0,Math.PI*2),r.fill();let u=new ge(i);return u.colorSpace=oe,u.anisotropy=s,u}function By(){let s=document.createElement("canvas");s.width=512,s.height=64;let t=s.getContext("2d");t.fillStyle="#5a2e14",t.fillRect(0,0,512,64);for(let n=0;n<70;n++){t.strokeStyle=`rgba(${30+Math.random()*40},${12+Math.random()*15},4,${.15+Math.random()*.25})`,t.lineWidth=1+Math.random()*2,t.beginPath();let i=Math.random()*64;t.moveTo(0,i);for(let r=0;r<=512;r+=32)t.lineTo(r,i+Math.sin(r/60+n)*3);t.stroke()}let e=new ge(s);return e.colorSpace=oe,e.wrapS=e.wrapT=ni,e.repeat.set(6,1),e}function Hy(){let t=document.createElement("canvas");t.width=t.height=1024;let e=t.getContext("2d"),n=25,i=1024/n,r=7,o=()=>(r=r*16807%2147483647)/2147483647;for(let l=0;l<n;l++){let h=-o()*1024*.4;for(;h<1024;){let c=1024*(.3+o()*.25),u=70+o()*40;e.fillStyle=`rgb(${u+40},${u*.62+12},${u*.36})`,e.fillRect(h,l*i,c,i);for(let d=0;d<9;d++){e.strokeStyle=`rgba(${40+o()*30},${20+o()*12},6,${.12+o()*.18})`,e.lineWidth=.6+o()*1.6,e.beginPath();let f=l*i+o()*i;e.moveTo(h,f);for(let m=0;m<=8;m++)e.lineTo(h+c*m/8,f+Math.sin(m*.9+d)*i*.12);e.stroke()}e.fillStyle="rgba(15,8,3,0.85)",e.fillRect(h+c-1.5,l*i,1.5,i),h+=c}e.fillStyle="rgba(15,8,3,0.9)",e.fillRect(0,l*i,1024,1.5)}let a=new ge(t);return a.colorSpace=oe,a.wrapS=a.wrapT=ni,a}function Au(s){let t=new se,e=s.capabilities.getMaxAnisotropy(),n=new Pt(new ie(3.569+2*gn,1.778+2*gn),new Et({map:Tu(e),roughness:.92,metalness:0}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n.name="cloth",t.add(n);let i=3.569/2,r=1.778/2,o=Fy+.012,a=i+gn+vc,l=r+gn+vc,h=new Et({color:1531951,roughness:.88,side:Ve}),c=(L,H,E,_t)=>({x:L+E*gn,z:H+_t*gn}),u=[];for(let L of[-1,1])for(let H of[-1,1]){let E={x:H*(i-_c),z:L*r},_t={x:H*zy,z:L*r};u.push({long:!0,a:E,b:_t,ab:c(E.x,E.z,H*1,L*1),bb:c(_t.x,_t.z,-H*.18,L*1)})}for(let L of[-1,1]){let H={x:L*i,z:-r+_c},E={x:L*i,z:r-_c};u.push({long:!1,a:H,b:E,ab:c(H.x,H.z,L*1,-1),bb:c(E.x,E.z,L*1,1)})}let d=.016,f=[[.012,0],[.006,.016],[.001,.029],[0,.034],[.003,.0395],[.01,.0435],[.024,.0465],[.045,.048],[.075,.048]];for(let L of u){let H=(Xt,dt,N)=>{let pt=Math.hypot(dt.x-Xt.x,dt.z-Xt.z)||1;return{x:Xt.x+(dt.x-Xt.x)/pt*N,z:Xt.z+(dt.z-Xt.z)/pt*N}},E=H(L.a,L.ab,d),_t=H(L.a,L.b,d),at=H(L.b,L.a,d),Tt=H(L.b,L.bb,d),ct=[],Gt=(Xt,dt,N,pt)=>{for(let ht=1;ht<=pt;ht++){let Dt=ht/pt,Qt=1-Dt;ct.push({x:Qt*Qt*Xt.x+2*Qt*Dt*dt.x+Dt*Dt*N.x,z:Qt*Qt*Xt.z+2*Qt*Dt*dt.z+Dt*Dt*N.z})}};ct.push({...L.ab},{...H(L.ab,E,Math.hypot(E.x-L.ab.x,E.z-L.ab.z)*.5)},{...E}),Gt(E,L.a,_t,10);let Nt=24;for(let Xt=1;Xt<Nt;Xt++)ct.push({x:_t.x+(at.x-_t.x)*Xt/Nt,z:_t.z+(at.z-_t.z)*Xt/Nt});ct.push({...at}),Gt(at,L.b,Tt,10),ct.push({...H(Tt,L.bb,Math.hypot(L.bb.x-Tt.x,L.bb.z-Tt.z)*.5)},{...L.bb});let A=L.b.x-L.a.x,M=L.b.z-L.a.z,J={x:(L.a.x+L.b.x)/2,z:(L.a.z+L.b.z)/2},st=-M*J.x+A*J.z>0?1:-1,lt=[];for(let Xt=0;Xt<ct.length;Xt++){let dt=ct[Math.max(0,Xt-1)],N=ct[Math.min(ct.length-1,Xt+1)],pt=N.x-dt.x,ht=N.z-dt.z,Dt=Math.hypot(pt,ht)||1;pt/=Dt,ht/=Dt;let Qt=-ht*st,Kt=pt*st;for(let[de,G]of f)lt.push(ct[Xt].x+Qt*de,G,ct[Xt].z+Kt*de)}let it=f.length,Ot=[];for(let Xt=0;Xt<ct.length-1;Xt++)for(let dt=0;dt<it-1;dt++){let N=Xt*it+dt,pt=(Xt+1)*it+dt;st>0?Ot.push(N,pt,N+1,pt,pt+1,N+1):Ot.push(N,N+1,pt,pt,N+1,pt+1)}let It=new Ne;It.setAttribute("position",new me(lt,3)),It.setIndex(Ot),It.computeVertexNormals();let Bt=new Pt(It,h);Bt.castShadow=!0,Bt.receiveShadow=!0,t.add(Bt)}let m=Yi.map(L=>({x:L.x,z:L.z,r:L.corner?.088:.078,corner:L.corner})),y=i+gn,g=r+gn,p=[],S=(L,H,E,_t)=>{let at=[];for(let Tt=0;Tt<=_t;Tt++){let ct=H+(E-H)*Tt/_t;at.push({x:L.x+Math.cos(ct)*L.r,z:L.z+Math.sin(ct)*L.r})}return at},v=[],x=L=>{for(;L<0;)L+=Math.PI*2;return L},U=m.find(L=>L.corner&&L.x>0&&L.z>0),C=m.find(L=>L.corner&&L.x<0&&L.z>0),D=m.find(L=>L.corner&&L.x<0&&L.z<0),O=m.find(L=>L.corner&&L.x>0&&L.z<0),w=m.find(L=>!L.corner&&L.z>0),_=m.find(L=>!L.corner&&L.z<0),T=(L,H,E)=>{let _t=E*g-L.z,at=L.x-H*Math.sqrt(Math.max(0,L.r*L.r-_t*_t)),Tt=H*y-L.x,ct=L.z-E*Math.sqrt(Math.max(0,L.r*L.r-Tt*Tt)),Gt=Math.atan2(E*g-L.z,at-L.x),Nt=Math.atan2(ct-L.z,H*y-L.x);return{aZ:Gt,aX:Nt}},$=(L,H)=>{let E=H*g-L.z,_t=Math.sqrt(Math.max(0,L.r*L.r-E*E));return{aRight:Math.atan2(E,_t),aLeft:Math.atan2(E,-_t)}},q=(L,H,E,_t)=>{let at=H,Tt=E;if(_t)for(;Tt<at;)Tt+=Math.PI*2;else for(;Tt>at;)Tt-=Math.PI*2;let ct=S(L,at,Tt,24);p.push(...ct),v.push(ct)};{let L=[];for(let[H,E,_t]of[[U,1,1],[C,-1,1],[D,-1,-1],[O,1,-1]]){let at=T(H,E,_t),Tt=E*_t>0?at.aX:at.aZ,ct=E*_t>0?at.aZ:at.aX;L.push({c:H,a0:Tt,a1:ct})}for(let[H,E]of[[w,1],[_,-1]]){let _t=$(H,E);L.push({c:H,a0:E>0?_t.aRight:_t.aLeft,a1:E>0?_t.aLeft:_t.aRight})}L.sort((H,E)=>x(Math.atan2(H.c.z,H.c.x))-x(Math.atan2(E.c.z,E.c.x)));for(let H of L)q(H.c,H.a0,H.a1,!0)}let X=.07,V=new Is;V.moveTo(-a+X,-l),V.lineTo(a-X,-l),V.quadraticCurveTo(a,-l,a,-l+X),V.lineTo(a,l-X),V.quadraticCurveTo(a,l,a-X,l),V.lineTo(-a+X,l),V.quadraticCurveTo(-a,l,-a,l-X),V.lineTo(-a,-l+X),V.quadraticCurveTo(-a,-l,-a+X,-l);let B=new Fi;p.forEach((L,H)=>H?B.lineTo(L.x,L.z):B.moveTo(L.x,L.z)),B.closePath(),V.holes.push(B);let K=new Et({map:By(),roughness:.4,metalness:.05}),Y=.008,ot=new fr(V,{depth:o+.02-2*Y,bevelEnabled:!0,bevelThickness:Y,bevelSize:Y*.8,bevelSegments:4,curveSegments:16}),ft=new Pt(ot,K);ft.rotation.x=Math.PI/2,ft.position.y=o-Y,ft.castShadow=!0,ft.receiveShadow=!0,t.add(ft);let vt=new Is,Ft=a-.03,Mt=l-.03,Q=.05;vt.moveTo(-Ft+Q,-Mt),vt.lineTo(Ft-Q,-Mt),vt.quadraticCurveTo(Ft,-Mt,Ft,-Mt+Q),vt.lineTo(Ft,Mt-Q),vt.quadraticCurveTo(Ft,Mt,Ft-Q,Mt),vt.lineTo(-Ft+Q,Mt),vt.quadraticCurveTo(-Ft,Mt,-Ft,Mt-Q),vt.lineTo(-Ft,-Mt+Q),vt.quadraticCurveTo(-Ft,-Mt,-Ft+Q,-Mt);let F=new Pt(new fr(vt,{depth:.26,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelSegments:3}),K);F.rotation.x=Math.PI/2,F.position.y=-.03,F.castShadow=!0,t.add(F);let mt=new ue(.075,.06,.56,24);for(let L of[-1,-.33,.33,1])for(let H of[-1,1]){let E=new Pt(mt,K);E.position.set(L*(i-.1),-.58,H*(r-.06)),E.castShadow=!0,t.add(E)}let k=new xe({color:328965}),St=new Et({color:1842204,roughness:.55,metalness:.15});for(let L of m){let H=new Pt(new ue(L.r,L.r*.8,.16,40,1,!0),k);H.position.set(L.x,-.08,L.z),t.add(H);let E=new Pt(new Bn(L.r,40),k);E.rotation.x=-Math.PI/2,E.position.set(L.x,-.003,L.z),t.add(E);let _t=Yi.find(Tt=>Tt.x===L.x&&Tt.z===L.z),at=new Pt(new Bn(_t.corner?.072:.066,40),k);at.rotation.x=-Math.PI/2,at.position.set(L.x,8e-4,L.z),t.add(at)}for(let L of v){let H=new cr(L.map(_t=>new R(_t.x,o-.004,_t.z))),E=new Pt(new Eo(H,48,.011,10,!1),St);E.castShadow=!0,t.add(E)}let gt=new Et({color:14271370,metalness:.8,roughness:.3});for(let L of[-3,-1,1,3])for(let H of[-1,1]){let E=new Pt(new Bn(.008,12),gt);E.rotation.x=-Math.PI/2,E.position.set(L*3.569/8,o+.0015,H*(l-vc/2)),t.add(E)}let Ct={green:{cloth:null,rail:1531951,base:"#1d6b34"},blue:{cloth:null,rail:1788566,base:"#1f56b0"}};return Ct.green.cloth=n.material.map,{group:t,cloth:n,surfaceY:0,ballY:.02625,setFelt:L=>{let H=Ct[L]||Ct.green;H.cloth||(H.cloth=Tu(e,H.base)),n.material.map=H.cloth,n.material.needsUpdate=!0,h.color.setHex(H.rail)}}}function Ru(s,t){s.background=new ae(790292);let e=Hy();e.repeat.set(2*He.x/4,2*He.z/4),e.anisotropy=8;let n=new Pt(new ie(2*He.x,2*He.z),new Et({map:e,roughness:.72,metalness:0}));n.rotation.x=-Math.PI/2,n.position.y=-.86,n.receiveShadow=!0,s.add(n),s.add(new Mi(14674175,3107644,.45));let i=1.62,r=new Et({color:936486,roughness:.5,metalness:.2,side:Ve}),o=new xe({color:16773586}),a=new xe({color:1118481}),l=h=>(h.layers.set(1),s.add(h),h);for(let h of[-1.1,0,1.1]){let c=new Us(16774368,11,6,Math.PI/3.4,.6,1.6);c.position.set(h,i-.05,0),c.target.position.set(h,0,0),c.castShadow=t==="high"&&h===0,c.castShadow&&(c.shadow.mapSize.set(2048,2048),c.shadow.bias=-4e-4,c.shadow.radius=3),s.add(c,c.target),l(new Pt(new Rt(.9,.012,.5),r)).position.set(h,i+.04,0);for(let[f,m,y,g]of[[0,1,.9,.01],[0,-1,.9,.01],[1,0,.01,.5],[-1,0,.01,.5]])l(new Pt(new Rt(y,.09,g),r)).position.set(h+f*.45,i,m*.25);let d=l(new Pt(new ie(.86,.46),o));d.rotation.x=Math.PI/2,d.position.set(h,i+.03,0);for(let f of[-.35,.35]){let m=i+.046;l(new Pt(new ue(.003,.003,He.ceil-m,6),a)).position.set(h+f,(m+He.ceil)/2,0)}}if(t==="high"){let h=new Ao(16777215,.45);h.position.set(.2,3,.15),h.castShadow=!0,h.shadow.mapSize.set(2048,2048);let c=2.1;Object.assign(h.shadow.camera,{left:-c,right:c,top:c,bottom:-c,near:1,far:5}),h.shadow.bias=-3e-4,s.add(h)}}var Xn=He.floor,Bo=He.x,wx=He.z,Vo={desk:{x:Bo-.42,z:-1.4,top:Xn+.78},speakers:[{x:Bo-.45,z:-2.62},{x:Bo-.45,z:-.18}],radio:{x:-Bo+.27,z:.5,top:Xn+.83}},Ho=(s,t)=>{let e=document.createElement("canvas");e.width=s,e.height=t;let n=new ge(e);return n.colorSpace=oe,n.anisotropy=8,{c:e,g:e.getContext("2d"),t:n}};function Cu(s){let t=new Et({color:5910294,roughness:.5}),e=new Et({color:1776929,roughness:.55,metalness:.3}),n=new Et({color:789518,roughness:.8}),i=new Et({color:10133672,roughness:.35,metalness:.8}),r=new Et({color:11569724,metalness:.85,roughness:.35}),o=(_,T,$,q,X,V=s)=>{let B=new Pt(_,T);return B.position.set($,q,X),B.castShadow=!0,B.receiveShadow=!0,V.add(B),B},a=Vo.desk;o(new Rt(.62,.04,1.35),t,a.x,a.top-.02,a.z);for(let _ of[-1,1])for(let T of[-1,1])o(new Rt(.04,a.top-Xn-.04,.04),t,a.x+_*.27,Xn+(a.top-Xn-.04)/2,a.z+T*.62);o(new Rt(.5,.02,1.2),t,a.x,Xn+.18,a.z);let l=new se;l.position.set(a.x-.02,a.top+.035,a.z),l.rotation.z=.12,s.add(l),o(new Rt(.44,.06,.92),e,0,0,0,l);let h=new on().setFromRotationMatrix(new Re().makeBasis(new R(0,0,1),new R(1,0,0),new R(0,1,0))),c=Ho(1024,512),u=o(new ie(.92,.44),new Et({map:c.t,roughness:.6,metalness:.2}),0,.0305,0,l);u.quaternion.copy(h),u.castShadow=!1;let d=["vol","bass","treble","bal"],f=[-.27,-.09,.09,.27],m={};d.forEach((_,T)=>{o(new Rt(.26,.004,.012),n,.02,.032,f[T],l);let $=o(new Rt(.028,.026,.05),new Et({color:T===0?15263976:2894896,roughness:.4}),.02,.045,f[T],l);m[_]=$});for(let _=0;_<6;_++){let T=o(new ue(.014,.016,.02,20),_%3===0?r:i,.17,.042,-.36+_*.144,l);T.castShadow=!1}let y=[[],[]],g=[3066944,3066944,3066944,3066944,3066944,15844367,15844367,15158332];for(let _=0;_<2;_++)for(let T=0;T<8;T++){let $=new Et({color:1118481,emissive:g[T],emissiveIntensity:.05,roughness:.4}),q=o(new Rt(.014,.008,.02),$,-.12+T*.026,.034,-.41+_*.03,l);q.castShadow=!1,y[_].push($)}let p=Ho(512,96),S=o(new ie(.3,.056),new xe({map:p.t}),.17,.0325,.27,l);S.quaternion.copy(h),S.castShadow=!1;let v=[];Vo.speakers.forEach(_=>{let T=new se;T.position.set(_.x,Xn,_.z),T.lookAt(0,Xn,0),s.add(T),o(new ue(.16,.2,.03,24),i,0,.015,0,T),o(new ue(.02,.02,.9,12),i,0,.47,0,T),o(new Rt(.2,.03,.2),i,0,.93,0,T),o(new Rt(.32,.52,.3),t,0,1.2,0,T),o(new Rt(.3,.5,.005),n,0,1.2,.151,T);let $=(q,X)=>{let V=o(new Hn(q,.008,8,32),i,0,X,.156,T);V.castShadow=!1;let B=o(new Bn(q,32),new Et({color:2236966,roughness:.9}),0,X,.155,T);B.castShadow=!1;let K=o(new je(q*.28,16,8,0,Math.PI*2,0,Math.PI/2),new Et({color:3355448,roughness:.6}),0,X,.156,T);return K.rotation.x=Math.PI/2,K.castShadow=!1,{cone:B,dust:K}};v.push({woofer:$(.11,1.12),tweeter:$(.04,1.36)})});let x=Vo.radio,U=new se;U.position.set(x.x,x.top,x.z),U.rotation.y=Math.PI/2,s.add(U),o(new Rt(.42,.22,.17),t,0,.11,0,U),o(new Rt(.44,.02,.18),new Et({color:3808524,roughness:.45}),0,.225,0,U);let C=Ho(256,160);{let _=C.g;_.fillStyle="#d9c9a3",_.fillRect(0,0,256,160),_.strokeStyle="#6b5532",_.lineWidth=3;for(let T=8;T<256;T+=10)_.beginPath(),_.moveTo(T,0),_.lineTo(T,160),_.stroke();C.t.needsUpdate=!0}o(new ie(.2,.15),new Et({map:C.t,roughness:.9}),-.09,.11,.0855,U).castShadow=!1;let D=Ho(256,128),O=new Et({map:D.t,emissive:16777215,emissiveMap:D.t,emissiveIntensity:.15,roughness:.5});o(new ie(.15,.075),O,.11,.14,.0855,U).castShadow=!1;for(let _ of[.06,.16]){let T=o(new ue(.018,.02,.02,20),r,_,.06,.095,U);T.rotation.x=Math.PI/2}let w=(_,T)=>{let $=p.g;$.fillStyle="#071a10",$.fillRect(0,0,512,96),$.fillStyle=T?"#6fff9f":"#2f6b45",$.font='bold 44px "Courier New", monospace',$.textBaseline="middle",$.fillText((T?"":"VYP  ")+(_||"R\xC1DIO").slice(0,18),16,50),p.t.needsUpdate=!0,$=D.g,$.fillStyle=T?"#f3d9a0":"#bfae86",$.fillRect(0,0,256,128),$.strokeStyle="#5a4a2a",$.lineWidth=2;for(let X=16;X<244;X+=12)$.beginPath(),$.moveTo(X,18),$.lineTo(X,X%48===16?40:30),$.stroke();$.fillStyle="#3a2a12",$.font="bold 26px Georgia, serif",$.textAlign="center",$.fillText((_||"R\xE1dio").slice(0,16),128,86),$.fillStyle="#b3121f";let q=16+(_||"").length*37%220;$.fillRect(q,12,3,40),D.t.needsUpdate=!0,O.emissiveIntensity=T?.55:.12};{let _=c.g;_.fillStyle="#26282d",_.fillRect(0,0,1024,512),_.fillStyle="#cfd3da",_.font="bold 34px Arial, sans-serif",_.textAlign="center",["HLAS","BASY","V\xDD\u0160KY","BAL"].forEach((T,$)=>{let q=(f[$]+.46)*1113.0434782608695;_.fillText(T,q,488);for(let X=0;X<=10;X++)_.fillRect(q+22,120+X*30,X%5?10:18,3)}),_.font="bold 26px Arial, sans-serif",_.textAlign="left",_.fillText("MY SNOOKER MIX",24,44),c.t.needsUpdate=!0}return w("",!1),{view:{pos:new R(a.x-1.95,Xn+1.6,a.z+.55),look:new R(a.x,a.top+.2,a.z+.5)},setControls(_,T,$){d.forEach(q=>{m[q].position.x=-.1+(_[q]??.5)*.24}),w(T,$)},update(_,T){[_,T].forEach(($,q)=>{let X=Math.round($*8);y[q].forEach((B,K)=>{B.emissiveIntensity=K<X?2.2:.05});let V=v[q];if(V){let B=1+$*.06;V.woofer.dust.scale.set(1,1,B*B),V.woofer.cone.position.z=.155+$*.004}})}}}var Go=class{constructor(t,e){this.stations=(t||[]).filter(n=>n&&n.stream),this.ctxGet=e,this.index=-1,this.on=!1,this.mode="",this.params={vol:.7,bass:.5,treble:.5,bal:.5},this.status="",this.onChange=null,this._graph=null,this._data=null}get station(){return this.stations[this.index]||null}_emit(t){this.onChange&&this.onChange(t)}_build(t){if(this._graph)return this._graph;let e=new Audio;e.crossOrigin="anonymous",e.preload="none";let n=t.createMediaElementSource(e),i=t.createBiquadFilter();i.type="lowshelf",i.frequency.value=220;let r=t.createBiquadFilter();r.type="highshelf",r.frequency.value=3200;let o=t.createGain();n.connect(i).connect(r).connect(o);let a=t.createChannelSplitter(2);o.connect(a);let l=t.createGain();l.connect(t.destination);let h=[0,1].map(c=>{let u=t.createGain(),d=t.createAnalyser();d.fftSize=512;let f=t.createPanner();f.panningModel="HRTF",f.distanceModel="inverse",f.refDistance=1.2,f.rolloffFactor=.6;let m=Vo.speakers[c];return f.positionX.value=m.x,f.positionY.value=Xn+1.2,f.positionZ.value=m.z,a.connect(u,c),u.connect(d),u.connect(f),f.connect(l),{g:u,an:d,p:f}});return this._graph={el:e,src:n,bass:i,treble:r,gain:o,sides:h,out:l},this._data=new Uint8Array(256),this._graph}_apply(){let t=this.params,e=this._graph;e&&this.mode==="space"&&(e.gain.gain.value=t.vol*t.vol*1.6,e.bass.gain.value=(t.bass-.5)*24,e.treble.gain.value=(t.treble-.5)*24,e.sides[0].g.gain.value=Math.min(1,(1-t.bal)*2),e.sides[1].g.gain.value=Math.min(1,t.bal*2)),this._plain&&(this._plain.volume=Math.min(1,t.vol*t.vol))}set(t,e){this.params[t]=Math.max(0,Math.min(1,e)),this._apply(),this._emit("param")}play(t=this.index<0?0:this.index){if(!this.stations.length){this.status="V My Player nie s\xFA \u017Eiadne r\xE1di\xE1.",this._emit();return}this.index=(t%this.stations.length+this.stations.length)%this.stations.length;let e=this.station;this.stopAudio(),this.on=!0,this.status="Lad\xEDm stanicu\u2026";let n=this.ctxGet();if(!n){this._playPlain(e);return}let i=this._build(n);this.mode="space",this._apply();let r=this._token=Math.random();i.el.onerror=()=>{this._token===r&&this.on&&this._playPlain(e)},i.el.onplaying=()=>{this._token===r&&(this.status="Hr\xE1 priestorovo z reproduktorov.",this._emit())},i.el.src=e.stream,i.el.play().catch(()=>null),this._tuneTimeout(r),this._emit()}_playPlain(t){this._graph&&(this._graph.el.removeAttribute("src"),this._graph.el.load()),this.mode="plain";let e=new Audio;this._plain=e;let n=this._token=Math.random();e.onerror=()=>{this._token===n&&(this.status="Stanica teraz nehr\xE1. Sk\xFAs \u010Fal\u0161iu (\u0161\xEDpka vpravo).",this.mode="",this._emit())},e.onplaying=()=>{this._token===n&&(this.status="Hr\xE1 (t\xE1to stanica nedovol\xED priestorov\xFD zvuk a ekvaliz\xE9r).",this._emit())},e.src=t.stream,this._apply(),e.play().catch(()=>null),this._tuneTimeout(n),this._emit()}_tuneTimeout(t){setTimeout(()=>{this._token===t&&this.on&&/Ladím/.test(this.status)&&(this.status="Stanica neodpoved\xE1. Sk\xFAs \u010Fal\u0161iu (\u0161\xEDpka vpravo).",this._emit())},12e3)}stopAudio(){this._token=0,this._graph&&(this._graph.el.pause(),this._graph.el.removeAttribute("src"),this._graph.el.load()),this._plain&&(this._plain.pause(),this._plain.removeAttribute("src"),this._plain=null),this.mode=""}stop(){this.stopAudio(),this.on=!1,this.status="R\xE1dio je vypnut\xE9.",this._emit()}toggle(){this.on?this.stop():this.play()}next(t){this.play(this.index+t)}update(t){let e=this._graph;if(!e)return[this.on&&this.mode==="plain"?.35+Math.random()*.25:0,this.on&&this.mode==="plain"?.35+Math.random()*.25:0];let i=e.out.context.listener,r=t.position,o=new R;return t.getWorldDirection(o),i.positionX?(i.positionX.value=r.x,i.positionY.value=r.y,i.positionZ.value=r.z,i.forwardX.value=o.x,i.forwardY.value=o.y,i.forwardZ.value=o.z,i.upX.value=0,i.upY.value=1,i.upZ.value=0):i.setPosition&&(i.setPosition(r.x,r.y,r.z),i.setOrientation(o.x,o.y,o.z,0,1,0)),this.mode==="plain"?[.3+Math.random()*.3,.3+Math.random()*.3]:this.mode!=="space"||!this.on?[0,0]:e.sides.map(a=>{a.an.getByteTimeDomainData(this._data);let l=0;for(let h=0;h<this._data.length;h++)l=Math.max(l,Math.abs(this._data[h]-128));return Math.min(1,l/100)})}};var $e=-.86,Mc=(s,t,e)=>{let n=document.createElement("canvas");n.width=s,n.height=t;let i=n.getContext("2d");e&&e(i,s,t);let r=new ge(n);return r.colorSpace=oe,r.anisotropy=8,{c:n,g:i,t:r}};function Pu(s,t){let e=new se;e.visible=!1,s.add(e);let n=t==="high",i=(V,B,K,Y,ot,ft=e)=>{let vt=new Pt(V,B);return vt.position.set(K,Y,ot),vt.castShadow=n,vt.receiveShadow=!0,ft.add(vt),vt},r=new Et({color:724242,roughness:.35,metalness:.4}),o=new Et({color:9049634,roughness:.6}),a=new Et({color:1382431,roughness:.8}),l=new Et({color:9080985,metalness:.8,roughness:.35}),h=i(new ie(40,30),new Et({color:460811,roughness:.25,metalness:.5}),0,$e,0);h.rotation.x=-Math.PI/2,h.castShadow=!1;let c=i(new ie(7.4,5.2),new Et({color:1320010,roughness:.9}),0,$e+.002,0);c.rotation.x=-Math.PI/2,c.castShadow=!1;let u=["MY SNOOKER","HEDLAJNER","LIGA","MY SNOOKER","HEDLAJNER.SK","LIGA"],d=(V,B)=>Mc(1024,128,(K,Y,ot)=>{let ft=K.createLinearGradient(0,0,Y,0);ft.addColorStop(0,B%2?"#0d2a6b":"#111"),ft.addColorStop(1,B%2?"#1747b5":"#2a2a2a"),K.fillStyle=ft,K.fillRect(0,0,Y,ot),K.fillStyle=B%2?"#ffffff":"#FACC15",K.font="bold 78px Arial, sans-serif",K.textAlign="center",K.textBaseline="middle",K.fillText(V,Y/2,ot/2+4)}).t,f=4.2,m=3.1;[[0,m,0,2*f],[0,-m,Math.PI,2*f],[f,0,Math.PI/2,2*m],[-f,0,-Math.PI/2,2*m]].forEach(([V,B,K,Y],ot)=>{let ft=new se;ft.position.set(V,$e,B),ft.rotation.y=K,e.add(ft),i(new Rt(Y,.42,.06),r,0,.21,0,ft);let vt=i(new ie(Y-.1,.3),new xe({map:d(u[ot],ot)}),0,.22,-.032,ft);vt.rotation.y=Math.PI,vt.castShadow=!1});for(let V of[-1,1])for(let B=0;B<7;B++){let K=V*(m+.9+B*.75),Y=$e+.25+B*.42;i(new Rt(10,.42+B*.42,.75),a,0,$e+(.42+B*.42)/2,K);for(let ot=-12;ot<=12;ot++){let ft=i(new Rt(.34,.07,.32),o,ot*.4,Y+.24,K),vt=i(new Rt(.34,.32,.05),o,ot*.4,Y+.42,K+V*.16);ft.castShadow=vt.castShadow=!1}}for(let V of[-1,1])for(let B=0;B<4;B++)i(new Rt(.75,.42+B*.42,7),a,V*(f+1+B*.75),$e+(.42+B*.42)/2,0);let g=$e+5.2;for(let V of[-2.4,2.4]){i(new Rt(9,.12,.12),l,0,g,V);for(let B of[-3.5,-1.2,1.2,3.5]){i(new ue(.12,.16,.3,16),l,B,g-.18,V);let K=new Pt(new Ps(1.1,4.6,24,1,!0),new xe({color:12571903,transparent:!0,opacity:.035,depthWrite:!1,side:Ve}));K.position.set(B*.8,g-2.45,V*.6),K.lookAt(B*.8,g+1,V*.6),K.rotation.x+=Math.PI/2,K.castShadow=!1,e.add(K)}}let p=new Mi(7109288,460811,.35);e.add(p);for(let V of[-4.5,4.5]){let B=new Us(14674175,9,14,Math.PI/5,.7,1.4);B.position.set(0,g,V),B.target.position.set(0,$e+1.5,V*1.3),e.add(B,B.target)}let S=Mc(1024,512),v=i(new ie(3.2,1.6),new xe({map:S.t}),-(f+3.6),$e+3.6,0);v.rotation.y=Math.PI/2,v.castShadow=!1,i(new Rt(.12,1.75,3.35),r,-(f+3.68),$e+3.6,0);let x=Mc(1024,512),U=i(new ie(3.2,1.6),new xe({map:x.t}),f+3.6,$e+3.6,0);U.rotation.y=-Math.PI/2,U.castShadow=!1,i(new Rt(.12,1.75,3.35),r,f+3.68,$e+3.6,0);let C=new Et({color:2757896,roughness:.4});i(new Rt(.9,.04,.45),C,2.6,$e+.74,m-.55);for(let V of[-1,1])i(new Rt(.04,.72,.4),C,2.6+V*.42,$e+.36,m-.55);let D=new Et({color:15267071,transparent:!0,opacity:.25,roughness:.05,depthWrite:!1});for(let V of[2.4,2.8])i(new ue(.035,.03,.12,20,1,!0),D,V,$e+.82,m-.55).castShadow=!1;let O=new Et({color:1710623,roughness:.5});for(let V of[-2.6,3.3]){i(new Rt(.5,.08,.5),O,V,$e+.48,m-.55),i(new Rt(.5,.6,.06),O,V,$e+.82,m-.3);for(let B of[-.2,.2])i(new ue(.02,.02,.46,8),l,V+B,$e+.23,m-.55)}let w=[],_=[14726286,13078118,9263934],T=[3108822,12597547,2792847],$=[3810324,1118481,10119722];[-1.6,.2,1.9].forEach((V,B)=>{let K=m+.9,Y=$e+.25+.24,ot=new se;ot.position.set(V,Y,K),ot.rotation.y=Math.PI,e.add(ot);let ft=new Et({color:T[B],roughness:.75}),vt=new Et({color:_[B],roughness:.7}),Ft=new Et({color:2303534,roughness:.8}),Mt=new se;ot.add(Mt),i(new Cs(.15,.32,6,14),ft,0,.42,0,Mt),i(new Rt(.3,.12,.36),Ft,0,.08,.12,Mt);for(let k of[-.08,.08])i(new ue(.05,.05,.42,10),Ft,k,-.12,.3,Mt);let Q=new se;Q.position.set(0,.84,0),Mt.add(Q),i(new je(.11,20,16),vt,0,0,0,Q);let F=i(new je(.115,20,12,0,Math.PI*2,0,Math.PI/2),new Et({color:$[B],roughness:.9}),0,.01,-.01,Q);F.rotation.x=-.25;for(let k of[-.04,.04])i(new je(.014,8,8),new xe({color:1118481}),k,.02,.1,Q).castShadow=!1;let mt=[-1,1].map(k=>{let St=new se;St.position.set(k*.19,.66,0),Mt.add(St),i(new Cs(.045,.22,4,10),ft,0,-.14,0,St);let gt=new se;return gt.position.set(0,-.28,0),St.add(gt),i(new Cs(.04,.2,4,10),vt,0,-.12,0,gt),St.rotation.x=-.35,gt.rotation.x=-.9,{sh:St,el:gt,sx:k}});w.push({f:ot,body:Mt,head:Q,arms:mt,baseY:Y,act:"",t:0,phase:B*1.7})});let q=V=>{for(let B of[S,x]){let K=B.g,Y=1024;K.fillStyle="#050a1a",K.fillRect(0,0,Y,512),K.fillStyle="#1747b5",K.fillRect(0,0,Y,70),K.fillStyle="#fff",K.font="bold 40px Arial, sans-serif",K.textAlign="center",K.fillText(V&&V.title||"MY SNOOKER LIGA",Y/2,50),V&&V.names?(K.font="bold 52px Arial, sans-serif",K.textAlign="left",V.names.forEach((ot,ft)=>{let vt=170+ft*110;K.fillStyle=V.turn===ft?"#FACC15":"#e8ecf3",K.fillText((V.turn===ft?"\u25B6 ":"   ")+String(ot).slice(0,18),40,vt),K.textAlign="right",K.font="bold 84px Arial, sans-serif",K.fillText(String(V.scores[ft]),Y-40,vt+10),K.font="bold 52px Arial, sans-serif",K.textAlign="left"}),K.fillStyle="#9fb3d9",K.font="34px Arial, sans-serif",K.fillText(`S\xE9ria ${V.brk}   \xB7   Hr\xE1 sa na ${V.on}`,40,420)):(K.fillStyle="#e8ecf3",K.font="bold 48px Arial, sans-serif",K.textAlign="center",K.fillText(V&&V.idle||"Vyzvi hr\xE1\u010Da z ligy",Y/2,260)),K.fillStyle="#6f84b3",K.font="28px Arial, sans-serif",K.textAlign="center",K.fillText(V&&V.footer||"",Y/2,490),B.t.needsUpdate=!0}};q(null);let X=new R;return{root:e,react(V){w.forEach((B,K)=>{V==="stand"&&K!==1?B.act="clap":B.act=V,B.t=V==="stand"?3.2:1.8})},setScreen:q,update(V,B){let K=performance.now()/1e3;for(let Y of w){if(Y.t=Math.max(0,Y.t-V),Y.t===0&&(Y.act=""),B&&B.on){Y.f.getWorldPosition(X);let F=Math.atan2(B.p.x-X.x,-(B.p.z-X.z));Y.head.rotation.y+=(Math.max(-1,Math.min(1,-F))-Y.head.rotation.y)*Math.min(1,V*4)}let[ot,ft]=Y.arms,vt=-.35,Ft=-.9,Mt=0,Q=0;if(Y.act==="clap"||Y.act==="stand"){let F=Math.sin((K+Y.phase)*18)*.5+.5;vt=-1.25,Ft=-.4,Mt=.35-F*.3,Y.act==="stand"&&(Q=Math.min(1,(3.2-Y.t)*3)*Math.min(1,Y.t*2))}else Y.act==="facepalm"?(vt=-2.4,Ft=-1.9,Mt=.25):vt=-.35+Math.sin(K*.7+Y.phase)*.03;for(let F of[ot,ft])F.sh.rotation.x+=(vt-F.sh.rotation.x)*Math.min(1,V*10),F.el.rotation.x+=(Ft-F.el.rotation.x)*Math.min(1,V*10),F.sh.rotation.z+=(F.sx*Mt-F.sh.rotation.z)*Math.min(1,V*10);Y.body.position.y=Q*.25}}}}var bc=40,Oe=-.86,Tn=3.2,ln=2.6,_r=3,vr=(s,t)=>{let e=document.createElement("canvas");e.width=s,e.height=t;let n=new ge(e);return n.colorSpace=oe,n.anisotropy=8,{c:e,g:e.getContext("2d"),t:n}},Vy=[[[-168,66],[-140,70],[-95,72],[-80,64],[-62,58],[-55,50],[-66,44],[-76,35],[-81,25],[-97,26],[-105,20],[-92,15],[-83,9],[-79,8],[-87,14],[-110,23],[-117,32],[-124,40],[-125,49],[-135,58],[-152,60],[-165,60]],[[-55,60],[-44,60],[-20,70],[-18,80],[-40,83],[-60,80],[-70,76],[-58,70]],[[-80,9],[-62,11],[-50,0],[-35,-6],[-39,-15],[-48,-26],[-58,-38],[-65,-55],[-72,-50],[-73,-38],[-71,-18],[-81,-5]],[[-10,36],[-9,43],[-2,44],[-5,48],[3,51],[8,54],[5,58],[10,63],[20,70],[30,70],[40,66],[45,60],[40,48],[30,46],[28,41],[23,38],[20,40],[15,38],[12,44],[7,44],[3,43],[-2,37]],[[-6,50],[2,51],[0,54],[-3,59],[-7,57],[-5,54]],[[-17,21],[-10,30],[-5,36],[10,37],[20,32],[32,31],[35,24],[43,12],[51,12],[42,-1],[40,-15],[35,-25],[20,-35],[16,-28],[12,-17],[9,-1],[5,4],[-8,4],[-16,12]],[[28,41],[40,48],[45,60],[40,66],[60,70],[80,73],[105,78],[140,72],[170,66],[160,58],[142,52],[135,43],[122,40],[121,30],[110,21],[106,10],[100,13],[98,8],[92,22],[80,15],[72,20],[66,25],[57,26],[50,30],[44,40],[36,36]],[[35,30],[50,30],[57,22],[52,16],[43,13],[38,20]],[[114,-22],[122,-18],[130,-12],[137,-12],[142,-11],[146,-19],[153,-26],[150,-37],[140,-38],[131,-32],[116,-35],[114,-28]],[[130,32],[135,34],[141,38],[142,44],[139,40],[134,35]]];function Iu(s){let t=new se;t.position.set(bc,0,0),s.add(t);let e=(F,mt,k,St,gt,Ct=t)=>{let Lt=new Pt(F,mt);return Lt.position.set(k,St,gt),Lt.castShadow=!1,Lt.receiveShadow=!0,Ct.add(Lt),Lt},n=new Et({color:2831682,roughness:.9}),i=new Et({color:3875860,roughness:.55}),r=new Et({color:5911576,roughness:.45}),o=new Et({color:1381914,roughness:.5,metalness:.3}),a=new Et({color:11569724,metalness:.85,roughness:.35}),l=new Et({color:15777856,metalness:.6,roughness:.28,emissive:3811328,emissiveIntensity:.5}),h=e(new ie(2*Tn,2*ln),new Et({color:4860952,roughness:.7}),0,Oe,0);h.rotation.x=-Math.PI/2;let c=e(new ie(3.4,2.4),new Et({color:6034976,roughness:.95}),0,Oe+.003,.2);c.rotation.x=-Math.PI/2;let u=e(new ie(2*Tn,2*ln),new Et({color:14210252,roughness:.95}),0,Oe+_r,0);u.rotation.x=Math.PI/2;let d=[[0,-ln,0,2*Tn],[0,ln,Math.PI,2*Tn],[-Tn,0,Math.PI/2,2*ln],[Tn,0,-Math.PI/2,2*ln]];for(let[F,mt,k,St]of d){let gt=new se;gt.position.set(F,Oe,mt),gt.rotation.y=k,t.add(gt),e(new ie(St,_r),n,0,_r/2,0,gt),e(new Rt(St,1,.03),i,0,.5,.015,gt),e(new Rt(St,.05,.05),r,0,1.02,.03,gt)}t.add(new Mi(16773596,2759184,.55));let f=new Un(16773336,9,9,1.6);f.position.set(0,Oe+_r-.3,0),t.add(f),e(new ue(.35,.35,.04,32),new xe({color:16774884}),0,Oe+_r-.03,0);let m=1.2,y=Oe+.76;e(new Rt(1.8,.05,.85),r,0,y-.025,m);for(let F of[-1,1])e(new Rt(.45,.7,.8),i,F*.65,Oe+.36,m);e(new Rt(1.4,.003,.6),new Et({color:1915430,roughness:.9}),0,y+.002,m),e(new ue(.07,.09,.02,24),a,.68,y+.01,m-.2),e(new ue(.01,.01,.36,10),a,.68,y+.19,m-.2);let g=e(new ue(.05,.13,.12,24,1,!0),new Et({color:936486,roughness:.5,side:Ve}),.68,y+.4,m-.25);g.rotation.x=.35;let p=new Un(16769712,2.5,2.5,2);p.position.set(.68,y+.3,m-.3),t.add(p);let S=vr(512,320);e(new Rt(.36,.015,.25),o,-.15,y+.008,m-.1);let v=new se;v.position.set(-.15,y+.015,m-.225),v.rotation.x=-.32,t.add(v),e(new Rt(.36,.24,.01),o,0,.12,0,v);let x=e(new ie(.33,.21),new xe({map:S.t}),0,.12,.006,v),U=vr(400,300),C=new se;C.position.set(-.6,y,m-.25),C.rotation.y=.5,t.add(C);let D=e(new ie(.2,.15),new Et({map:U.t,roughness:.8,side:Ve}),0,.075,0,C);D.rotation.x=-.35,D.position.z=.02,e(new ue(.004,.004,.2,8),a,0,.145,0,C).rotation.z=Math.PI/2;let O=vr(2048,900),w=e(new ie(5.6,2),new Et({map:O.t,roughness:.6,emissive:16777215,emissiveMap:O.t,emissiveIntensity:.15}),0,Oe+1.6,-ln+.09);e(new Rt(5.75,2.14,.04),r,0,Oe+1.6,-ln+.065);let _={w:3.8,h:1.9,y:Oe+1.85},T=vr(2048,1024),$=e(new ie(_.w,_.h),new Et({map:T.t,roughness:.75}),-Tn+.09,_.y,0);$.rotation.y=Math.PI/2,e(new Rt(.04,_.h+.1,_.w+.1),r,-Tn+.065,_.y,0);let q=(F,mt)=>{let k=T.g;k.fillStyle="#16324f",k.fillRect(0,0,2048,1024),k.strokeStyle="rgba(255,255,255,0.07)",k.lineWidth=2;for(let gt=-180;gt<=180;gt+=30){let Ct=(gt+180)/360*2048;k.beginPath(),k.moveTo(Ct,0),k.lineTo(Ct,1024),k.stroke()}for(let gt=-60;gt<=80;gt+=30){let Ct=(90-gt)/180*1024;k.beginPath(),k.moveTo(0,Ct),k.lineTo(2048,Ct),k.stroke()}k.fillStyle="#c9b98a",k.strokeStyle="#8a7a4a",k.lineWidth=3;for(let gt of Vy)k.beginPath(),gt.forEach(([Ct,Lt],L)=>{let H=(Ct+180)/360*2048,E=(90-Lt)/180*1024;L?k.lineTo(H,E):k.moveTo(H,E)}),k.closePath(),k.fill(),k.stroke();k.fillStyle="#f2d48a",k.font="bold 48px Georgia, serif",k.textAlign="left",k.fillText("Hr\xE1\u010Di ligy vo svete",40,70);let St=["#e8b830","#c9cdd3","#c8804a","#2ecc71"];for(let gt of F||[]){let Ct=(gt.lon+180)/360*2048,Lt=(90-gt.lat)/180*1024;k.fillStyle="rgba(0,0,0,0.4)",k.beginPath(),k.arc(Ct+3,Lt+4,16,0,Math.PI*2),k.fill(),k.fillStyle=St[(gt.league||4)-1],k.beginPath(),k.arc(Ct,Lt,15,0,Math.PI*2),k.fill(),k.strokeStyle=gt.id===mt?"#ffffff":"#111",k.lineWidth=gt.id===mt?6:3,k.stroke(),k.fillStyle="#fff",k.font="bold 26px Arial, sans-serif",k.fillText(String(gt.name).slice(0,14),Ct+20,Lt+9)}T.t.needsUpdate=!0},X=new se;X.position.set(Tn-.06,Oe,-.2),X.rotation.y=-Math.PI/2,t.add(X),e(new Rt(2.3,1.85,.03),i,0,1.08,0,X),e(new Rt(2.35,.06,.16),r,0,.12,.06,X),e(new Rt(2.35,.05,.12),r,0,1.35,.06,X);let V=[],B=(F,mt)=>{for(let k of V)X.remove(k);V=[],F.forEach((k,St)=>{let gt=new se,Ct=(St-(F.length-1)/2)*.21,Lt=mt.includes(k.id);if(gt.position.set(Ct,.16+k.len,.08+(Lt?.12:0)),gt.rotation.x=Math.PI,gt.add(Bs(k,!0)),X.add(gt),V.push(gt),Lt){let L=new Pt(new Hn(.04,.008,8,20),l);L.position.set(Ct,.3,.22),X.add(L),V.push(L)}})};e(new Rt(.4,2,1.2),i,Tn-.22,Oe+1,1.65);for(let F=0;F<4;F++)e(new Rt(.38,.03,1.15),r,Tn-.22,Oe+.4+F*.45,1.65);let K=new se;t.add(K);let Y=[[0,0],[.05,0],[.05,.02],[.02,.03],[.012,.09],[.04,.12],[.06,.2],[.055,.21],[.03,.14],[0,.13]].map(([F,mt])=>new bt(F,mt)),ot=F=>{K.clear(),(F||[]).slice(0,4).forEach((mt,k)=>{let St=new Pt(new Bi(Y,28),l);St.position.set(Tn-.22,Oe+.84+k*.45,1.3+k%2*.3),K.add(St)})},ft=e(new ie(1.4,1.1),new xe({color:9418464}),-1.6,Oe+1.75,ln-.02);ft.rotation.y=Math.PI,e(new Rt(1.5,1.2,.04),r,-1.6,Oe+1.75,ln-.005),e(new Rt(.03,1.1,.06),r,-1.6,Oe+1.75,ln-.03);let vt=e(new Rt(1,2.1,.05),r,1.9,Oe+1.05,ln-.03);vt.rotation.y=Math.PI;let Ft=vr(512,128);{let F=Ft.g;F.fillStyle="#123524",F.fillRect(0,0,512,128),F.fillStyle="#f2d48a",F.font="bold 54px Georgia, serif",F.textAlign="center",F.fillText("\u0160TADI\xD3N",256,84),Ft.t.needsUpdate=!0}let Mt=e(new ie(.5,.125),new xe({map:Ft.t}),1.9,Oe+1.75,ln-.06);Mt.rotation.y=Math.PI;let Q=(F,mt)=>{let k=O.g;k.fillStyle="#0d1b2e",k.fillRect(0,0,2048,900),k.fillStyle="#f2d48a",k.font="bold 64px Georgia, serif",k.textAlign="center",k.fillText(F&&F.season?`LIGA  \xB7  ${F.season.name.toUpperCase()}`:"LIGA",1024,80);let St=[20,530,1040,1550];for(let Ct=1;Ct<=4;Ct++){let Lt=St[Ct-1];k.fillStyle=["#7a5f10","#5e636b","#6b3e1c","#1f5e46"][Ct-1],k.fillRect(Lt,110,478,64),k.fillStyle="#fff",k.font="bold 40px Arial, sans-serif",k.textAlign="center",k.fillText(`${Ct}. LIGA`,Lt+239,155);let L=F&&F.leagues&&F.leagues[Ct]||[];for(let H=0;H<10;H++){let E=L[H],_t=225+H*64;if(k.fillStyle=H%2?"#13253d":"#102036",k.fillRect(Lt,_t-44,478,64),!E)continue;k.fillStyle=E.me?"#FACC15":"#e8ecf3",k.font=(E.me?"bold ":"")+"32px Arial, sans-serif",k.textAlign="left";let at=`${E.rank}. ${E.user.name}`;for(;at.length>2&&k.measureText(at).width>330;)at=at.slice(0,-1);k.fillText(at,Lt+16,_t),k.textAlign="right",k.fillText(String(E.points),Lt+462,_t)}}k.fillStyle="#9fb3d9",k.font="30px Arial, sans-serif",k.textAlign="center",k.fillText(F&&F.me?`Ty: ${F.me.rank}. miesto v ${F.me.league}. lige \xB7 ${F.me.points} bodov \xB7 v\xFDhry ${F.me.wins}, prehry ${F.me.losses}`:"Body: v\xED\u0165az z\xEDska, ko\u013Eko nahral; porazen\xFD ich strat\xED",1024,880),O.t.needsUpdate=!0,k=S.g,k.fillStyle="#0c1a33",k.fillRect(0,0,512,320),k.fillStyle="#FACC15",k.font="bold 34px Arial, sans-serif",k.textAlign="center",k.fillText("MOJA LIGA",256,60),k.fillStyle="#fff",k.font="bold 64px Arial, sans-serif",k.fillText(F&&F.me?`${F.me.league}. liga`:"...",256,150),k.font="32px Arial, sans-serif",k.fillText(F&&F.me?`${F.me.rank}. miesto \xB7 ${F.me.points} b.`:"",256,210),k.fillStyle="#9fb3d9",k.font="26px Arial, sans-serif",k.fillText(F&&F.me?`V ${F.me.wins} \xB7 P ${F.me.losses} \xB7 s\xE9ria ${F.me.best}`:"",256,260),S.t.needsUpdate=!0,k=U.g,k.fillStyle="#fbf7ec",k.fillRect(0,0,400,300),k.fillStyle="#b3121f",k.fillRect(0,0,400,70);let gt=new Date;k.fillStyle="#fff",k.font="bold 40px Arial, sans-serif",k.textAlign="center",k.fillText(gt.toLocaleDateString("sk-SK",{month:"long"}).toUpperCase(),200,50),k.fillStyle="#222",k.font="bold 120px Georgia, serif",k.fillText(String(gt.getDate()),200,190),k.font="24px Arial, sans-serif",k.fillText(F&&F.season?`do konca sez\xF3ny ${F.season.daysLeft} dn\xED`:"sez\xF3na ligy",200,260),U.t.needsUpdate=!0,ot(mt)};return Q(null,[]),q([],0),{root:t,map:$,MAP:_,seat:{pos:new R(bc,Oe+1.25,m+.75),look:new R(bc,Oe+.85,-ln)},setBoards:Q,setMap:q,setRack:B,mapLonLat(F){let mt=$.worldToLocal(F.clone()),k=mt.x/_.w+.5,St=.5-mt.y/_.h;return{lon:k*360-180,lat:90-St*180}}}}var Sc=[["SK","Slovensko",48.7,19.7],["CZ","\u010Cesko",49.8,15.5],["HU","Ma\u010Farsko",47.2,19.5],["PL","Po\u013Esko",52,19.4],["AT","Rak\xFAsko",47.5,14.6],["DE","Nemecko",51.2,10.4],["UA","Ukrajina",49,31.4],["GB","Spojen\xE9 kr\xE1\u013Eovstvo",54,-2.5],["IE","\xCDrsko",53.2,-8],["FR","Franc\xFAzsko",46.6,2.4],["ES","\u0160panielsko",40.2,-3.7],["PT","Portugalsko",39.6,-8],["IT","Taliansko",42.8,12.6],["CH","\u0160vaj\u010Diarsko",46.8,8.2],["NL","Holandsko",52.2,5.3],["BE","Belgicko",50.6,4.6],["LU","Luxembursko",49.8,6.1],["DK","D\xE1nsko",56,9.5],["NO","N\xF3rsko",61.5,9],["SE","\u0160v\xE9dsko",62,15],["FI","F\xEDnsko",64,26],["IS","Island",64.9,-18.6],["EE","Est\xF3nsko",58.6,25],["LV","Loty\u0161sko",56.9,24.6],["LT","Litva",55.3,23.9],["SI","Slovinsko",46.1,14.8],["HR","Chorv\xE1tsko",45.1,15.2],["BA","Bosna a Hercegovina",44.2,17.8],["RS","Srbsko",44,20.9],["ME","\u010Cierna Hora",42.7,19.4],["MK","Severn\xE9 Maced\xF3nsko",41.6,21.7],["AL","Alb\xE1nsko",41.2,20.2],["GR","Gr\xE9cko",39.1,22],["BG","Bulharsko",42.7,25.5],["RO","Rumunsko",45.9,25],["MD","Moldavsko",47.4,28.4],["TR","Turecko",39,35.2],["CY","Cyprus",35.1,33.4],["MT","Malta",35.9,14.4],["US","Spojen\xE9 \u0161t\xE1ty",39.8,-98.6],["CA","Kanada",56.1,-106.3],["MX","Mexiko",23.6,-102.6],["BR","Braz\xEDlia",-14.2,-51.9],["AR","Argent\xEDna",-38.4,-63.6],["CL","\u010Cile",-35.7,-71.5],["CO","Kolumbia",4.6,-74.3],["PE","Peru",-9.2,-75],["ZA","Ju\u017En\xE1 Afrika",-30.6,22.9],["EG","Egypt",26.8,30.8],["MA","Maroko",31.8,-7.1],["NG","Nig\xE9ria",9.1,8.7],["KE","Ke\u0148a",-0,37.9],["IL","Izrael",31,34.9],["AE","Spojen\xE9 arabsk\xE9 emir\xE1ty",23.4,53.8],["SA","Saudsk\xE1 Ar\xE1bia",23.9,45.1],["IN","India",20.6,79],["PK","Pakistan",30.4,69.3],["CN","\u010C\xEDna",35.9,104.2],["HK","Hongkong",22.3,114.2],["TH","Thajsko",15.9,100.9],["MY","Malajzia",4.2,101.9],["SG","Singapur",1.35,103.8],["VN","Vietnam",14.1,108.3],["PH","Filip\xEDny",12.9,121.8],["ID","Indon\xE9zia",-.8,113.9],["JP","Japonsko",36.2,138.3],["KR","Ju\u017En\xE1 K\xF3rea",35.9,127.8],["AU","Austr\xE1lia",-25.3,133.8],["NZ","Nov\xFD Z\xE9land",-40.9,174.9],["RU","Rusko",61.5,105.3]];function Ec(s){let t=Sc.find(e=>e[0]===s);return t?{code:t[0],name:t[1],lat:t[2],lon:t[3]}:null}function Gy(s,t){let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d"),i="#"+s.toString(16).padStart(6,"0");n.fillStyle=i,n.fillRect(0,0,256,128);let r=t==="white"?"rgba(180,30,40,0.85)":t==="black"?"rgba(255,255,255,0.22)":"rgba(255,255,255,0.35)";n.fillStyle=r;for(let[a,l]of[[64,64],[192,64]])n.beginPath(),n.arc(a,l,t==="white"?7:5,0,Math.PI*2),n.fill();let o=new ge(e);return o.colorSpace=oe,o}function Wy(){let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.75)"),e.addColorStop(.45,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new ge(s)}var Wo=class{constructor(t,e,n,i=null){this.scene=t,this.items=[];let r=n==="high"?64:32,o=new je(.02625,r,Math.round(r*.75)),a={},l=new ie(.02625*2.6,.02625*2.6),h=new xe({map:Wy(),transparent:!0,depthWrite:!1,opacity:.6});for(let f of e){a[f.kind]||(a[f.kind]=new wo({map:Gy(Gn[f.kind].color,f.kind),roughness:.12,metalness:0,clearcoat:1,clearcoatRoughness:.05,envMap:i,envMapIntensity:.55}));let m=new Pt(o,a[f.kind]),y=new Pt(l,h);y.rotation.x=-Math.PI/2,y.renderOrder=1,t.add(y),m.castShadow=!0,m.receiveShadow=!1,m.userData.ball=f,m.quaternion.setFromEuler(new vn(Math.random()*6,Math.random()*6,Math.random()*6)),t.add(m),this.items.push({ball:f,mesh:m,blob:y,drop:0})}let c=new ae(16765503);this.outline=new Pt(new je(.02625*1.12,32,24),new xe({color:c,side:Be,transparent:!0,opacity:.9,depthWrite:!1})),this.ring=new Pt(new Ls(.02625*1.25,.02625*1.55,48),new xe({color:c,transparent:!0,opacity:.75,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.outline.visible=this.ring.visible=!1,this.arrow=new se;let u=new Et({color:16777215,transparent:!0,opacity:.55,depthWrite:!1,roughness:.4}),d=new Pt(new Ps(.02625*.38,.02625*1.3,24),u);d.rotation.z=-Math.PI/2,d.position.x=.02625*1.9,this.arrow.add(d),this.arrow.visible=!1,this.arrow.renderOrder=3,this.arrowMat=u,t.add(this.arrow),this.outline.renderOrder=this.ring.renderOrder=2,t.add(this.outline,this.ring),this._hlT=0,this._q=new on,this._axis=new R}update(t){for(let e of this.items){let n=e.ball,i=e.mesh;if(n.on){e.drop=0,i.visible=!0,i.position.set(n.p.x,.02625,n.p.z),e.blob.visible=!0,e.blob.position.set(n.p.x,6e-4,n.p.z);let r=Math.hypot(n.w.x,n.w.y,n.w.z);r>.001&&n.moving&&(this._axis.set(n.w.x/r,n.w.y/r,n.w.z/r),this._q.setFromAxisAngle(this._axis,r*t),i.quaternion.premultiply(this._q))}else if(n.potted){e.blob.visible=!1,e.drop=Math.min(1,e.drop+t*3);let r=e.drop;i.position.x+=(n.potted.x-i.position.x)*Math.min(1,t*12),i.position.z+=(n.potted.z-i.position.z)*Math.min(1,t*12),i.position.y=.02625-r*r*.12,i.visible=r<1}else i.visible=!1,e.blob.visible=!1}}highlight(t,e,n=null){let i=!!(t&&t.on);if(this.outline.visible=this.ring.visible=i,this.arrow.visible=i&&!!n,!i)return;if(n){let o=Math.atan2(t.p.z-n.z,t.p.x-n.x);this.arrow.position.set(t.p.x+Math.cos(o)*.02625*.6,.02625,t.p.z+Math.sin(o)*.02625*.6),this.arrow.rotation.set(0,-o,0),this.arrowMat.color.setHex(t.kind==="black"?5592405:Gn[t.kind].color)}this._hlT+=e;let r=.5+.5*Math.sin(this._hlT*5);this.outline.position.set(t.p.x,.02625,t.p.z),this.ring.position.set(t.p.x,.0012,t.p.z),this.outline.material.opacity=.55+.35*r,this.ring.material.opacity=.45+.4*r}meshOf(t){return this.items.find(e=>e.ball===t)?.mesh||null}};var Xy=Vn.degToRad(4),$y=Vn.degToRad(40),qy=.049+.004,Lu=.17;function Du(s,t,e,n,i,r){let o=1/0;return e>1e-6&&(o=Math.min(o,(i-s)/e)),e<-1e-6&&(o=Math.min(o,(-i-s)/e)),n>1e-6&&(o=Math.min(o,(r-t)/n)),n<-1e-6&&(o=Math.min(o,(-r-t)/n)),Math.max(0,o)}var Xo=class{constructor(t,e){this.pivot=new se,t.add(this.pivot),this.setSpec(e)}setSpec(t){this.group&&(this.pivot.remove(this.group),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})),this.spec=t,this.group=Bs(t),this.pivot.add(this.group)}place(t,e,n,i,r,o){if(this.pivot.visible=o,!o)return;let a=Math.cos(e),l=Math.sin(e),h=-l,c=a,u=.012+n*.28,d=t.p.x-a*(.02625+u)+h*i*.5*.02625,f=t.p.z-l*(.02625+u)+c*i*.5*.02625,m=.02625+r*.5*.02625,y=Du(d,f,-a,-l,3.569/2,1.778/2),g=Du(d,f,-a,-l,3.569/2+Lu,1.778/2+Lu),p=this.spec.len||1.45,S=D=>.0048+(.0145-.0048)*Math.min(D,p)/p,v=Xy;for(;v<$y&&![y,g].every(O=>O>p||m+O*Math.sin(v)>=qy+S(O)/Math.cos(v));v+=.005);this.tilt=this.tilt===void 0?v:this.tilt+(v-this.tilt)*.25;let x=this.tilt,U=m+u*Math.tan(x);this.pivot.position.set(d,U,f);let C=new R(-a*Math.cos(x),Math.sin(x),-l*Math.cos(x));this.pivot.quaternion.setFromUnitVectors(new R(0,1,0),C)}},$o=class{constructor(t){let e=(n,i)=>new ar({color:n,transparent:!0,opacity:i,depthWrite:!1});this.line=new Rs(new Ne().setFromPoints([new R,new R]),e(16777215,.55)),this.objLine=new Rs(new Ne().setFromPoints([new R,new R]),e(16769674,.8)),this.cueLine=new Rs(new Ne().setFromPoints([new R,new R]),e(10474495,.55)),this.ghost=new Pt(new je(.02625,24,16),new xe({color:16777215,wireframe:!0,transparent:!0,opacity:.35,depthWrite:!1})),t.add(this.line,this.objLine,this.cueLine,this.ghost)}set(t,e){let n=e.geometry.attributes.position;for(let i=0;i<2;i++)n.setXYZ(i,t[i].x,.02625*.35,t[i].z);n.needsUpdate=!0,e.geometry.computeBoundingSphere()}update(t,e,n,i,r=2){let o=i&&r>0;if(this.line.visible=this.ghost.visible=o,this.objLine.visible=this.cueLine.visible=o&&r>1,!o)return null;let a=zo(t,e,n);if(this.set([e.p,a.ghost],this.line),this.ghost.position.set(a.ghost.x,.02625,a.ghost.z),a.ball&&r>1){let l=a.ball.p.x-a.ghost.x,h=a.ball.p.z-a.ghost.z,c=Math.hypot(l,h)||1,u=l/c,d=h/c,f=Math.cos(n)*u+Math.sin(n)*d,m=.18+.5*f;this.set([a.ball.p,{x:a.ball.p.x+u*m,z:a.ball.p.z+d*m}],this.objLine);let y=Math.cos(n)-f*u,g=Math.sin(n)-f*d,p=Math.hypot(y,g);if(p>.001){y/=p,g/=p;let S=.08+.4*(1-f);this.set([a.ghost,{x:a.ghost.x+y*S,z:a.ghost.z+g*S}],this.cueLine)}else this.cueLine.visible=!1}else this.objLine.visible=this.cueLine.visible=!1;return a}};var Uu={type:"change"},Tc={type:"start"},Nu={type:"end"},qo=new zi,ku=new fn,Yy=Math.cos(70*Vn.DEG2RAD),qe=new R,cn=2*Math.PI,Te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wc=1e-6,Yo=class extends Co{constructor(t,e=null){super(t,e),this.state=Te.NONE,this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kn.ROTATE,MIDDLE:kn.DOLLY,RIGHT:kn.PAN},this.touches={ONE:$i.ROTATE,TWO:$i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new on,this._lastTargetPosition=new R,this._quat=new on().setFromUnitVectors(t.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new mr,this._sphericalDelta=new mr,this._scale=1,this._panOffset=new R,this._rotateStart=new bt,this._rotateEnd=new bt,this._rotateDelta=new bt,this._panStart=new bt,this._panEnd=new bt,this._panDelta=new bt,this._dollyStart=new bt,this._dollyEnd=new bt,this._dollyDelta=new bt,this._dollyDirection=new R,this._mouse=new bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jy.bind(this),this._onPointerDown=Zy.bind(this),this._onPointerUp=Ky.bind(this),this._onContextMenu=sx.bind(this),this._onMouseWheel=tx.bind(this),this._onKeyDown=ex.bind(this),this._onTouchStart=nx.bind(this),this._onTouchMove=ix.bind(this),this._onMouseDown=Jy.bind(this),this._onMouseMove=Qy.bind(this),this._interceptControlDown=rx.bind(this),this._interceptControlUp=ox.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uu),this.update(),this.state=Te.NONE}update(t=null){let e=this.object.position;qe.copy(e).sub(this.target),qe.applyQuaternion(this._quat),this._spherical.setFromVector3(qe),this.autoRotate&&this.state===Te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=cn:n>Math.PI&&(n-=cn),i<-Math.PI?i+=cn:i>Math.PI&&(i-=cn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(qe.setFromSpherical(this._spherical),qe.applyQuaternion(this._quatInverse),e.copy(this.target).add(qe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=qe.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new R(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let h=new R(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=qe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(qo.origin.copy(this.object.position),qo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qo.direction))<Yy?this.object.lookAt(this.target):(ku.setFromNormalAndCoplanarPoint(this.object.up,this.target),qo.intersectPlane(ku,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wc||this._lastTargetPosition.distanceToSquared(this.target)>wc?(this.dispatchEvent(Uu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?cn/60*this.autoRotateSpeed*t:cn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){qe.setFromMatrixColumn(e,0),qe.multiplyScalar(-t),this._panOffset.add(qe)}_panUp(t,e){this.screenSpacePanning===!0?qe.setFromMatrixColumn(e,1):(qe.setFromMatrixColumn(e,0),qe.crossVectors(this.object.up,qe)),qe.multiplyScalar(t),this._panOffset.add(qe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;qe.copy(i).sub(this.target);let r=qe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-cn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/e.clientHeight),this._rotateUp(cn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new bt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Zy(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function jy(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Ky(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Nu),this.state=Te.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Jy(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case kn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Te.DOLLY;break;case kn.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Te.ROTATE}break;case kn.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Te.PAN}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(Tc)}function Qy(s){switch(this.state){case Te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function tx(s){this.enabled===!1||this.enableZoom===!1||this.state!==Te.NONE||(s.preventDefault(),this.dispatchEvent(Tc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Nu))}function ex(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function nx(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case $i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Te.TOUCH_ROTATE;break;case $i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Te.TOUCH_PAN;break;default:this.state=Te.NONE}break;case 2:switch(this.touches.TWO){case $i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Te.TOUCH_DOLLY_PAN;break;case $i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Te.TOUCH_DOLLY_ROTATE;break;default:this.state=Te.NONE}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(Tc)}function ix(s){switch(this._trackPointer(s),this.state){case Te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Te.NONE}}function sx(s){this.enabled!==!1&&s.preventDefault()}function rx(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ox(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Zo=class{constructor(t){this.camera=new Qe(45,1,.01,40),this.camera.position.set(-3,1.6,0),this.orbit=new Yo(this.camera,t.domElement),this.orbit.enableDamping=!0,this.orbit.maxPolarAngle=Math.PI/2-.05,this.orbit.minDistance=.3,this.orbit.maxDistance=4,this.orbit.target.set(0,0,0),this.orbit.enabled=!1,this.mode="cue",this.zoom=1,this.height=.22,this._pos=new R,this._look=new R,this._curLook=new R(0,0,0),this.panOffset=new R,this.followYaw=0,this.followH=.55,this._wasMoving=!1,this.aimPoint=null,this.orbit.mouseButtons={LEFT:kn.ROTATE,MIDDLE:kn.PAN,RIGHT:kn.PAN}}pan(t,e){let n=this.camera.matrixWorld.elements,i=.0018*(this.mode==="top"?2:1);this.panOffset.x+=(n[0]*t-n[4]*e)*i,this.panOffset.y+=(n[1]*t-n[5]*e)*i,this.panOffset.z+=(n[2]*t-n[6]*e)*i,this.mode==="top"&&(this.panOffset.y=0),this.panOffset.y=Math.max(-.15,Math.min(1.5,this.panOffset.y)),this.panOffset.clampLength(0,3)}resetPan(){this.panOffset.set(0,0,0)}turn(t,e){this.followYaw+=t*.004,this.followH=Math.max(.12,Math.min(1.8,this.followH+e*.003))}setMode(t){this.mode=t,this.resetPan(),t==="top"?(this.camera.layers.disable(1),this.camera.layers.disable(2)):(this.camera.layers.enable(1),this.camera.layers.enable(2)),this.orbit.enabled=t==="free",t==="free"&&this.orbit.target.copy(this._curLook)}setView(t,e){this.setMode("view"),this.viewPos=t,this.viewLook=e}resize(t,e){this.camera.aspect=t/e,this.baseFov=t/e<1?62:45,this.camera.fov=this.baseFov/(this.viewZoom||1),this.camera.updateProjectionMatrix()}jump(){this.camera.position.copy(this.viewPos),this._curLook.copy(this.viewLook),this.camera.lookAt(this._curLook)}setViewZoom(t){this.viewZoom=Math.min(5,Math.max(this.minViewZoom||1,t)),this.camera.fov=(this.baseFov||45)/this.viewZoom,this.camera.updateProjectionMatrix()}update(t,e,n,i){if(this.mode==="free"){this.orbit.update(),xc(this.camera.position),this._curLook.copy(this.orbit.target),this.camera.position.y>1.5?this.camera.layers.disable(1):this.camera.layers.enable(1);return}let r=this._pos,o=this._look;if(this.mode==="view")this.camera.up.set(0,1,0),r.copy(this.viewPos),o.copy(this.viewLook);else if(this.mode==="top"){let l=this.camera.aspect,h=Vn.degToRad(this.camera.fov),c=(1.778+.5)/2/Math.tan(h/2),u=(3.569+.5)/2/Math.tan(h/2)/l;if(l>=1)r.set(0,Math.max(c,u),1e-4),this.camera.up.set(0,0,-1);else{let d=(3.569+.5)/2/Math.tan(h/2),f=(1.778+.5)/2/Math.tan(h/2)/l;r.set(1e-4,Math.max(d,f),0),this.camera.up.set(1,0,0)}o.set(0,0,0)}else if(i&&this.mode!=="view"){this.camera.up.set(0,1,0);let l=Math.cos(this.followYaw),h=Math.sin(this.followYaw),c=.9/this.zoom+this.followH*.4;r.set(e.p.x-l*c,this.followH,e.p.z-h*c),o.set(e.p.x+l*.15,0,e.p.z+h*.15)}else{this.camera.up.set(0,1,0);let l=Math.cos(n),h=Math.sin(n),c=.62/this.zoom,u=this.height/this.zoom+.06,d=Math.tan(this.cueTilt||0)*c+.15;r.set(e.p.x-l*c,Math.max(u,d),e.p.z-h*c),o.set(e.p.x+l*.55,0,e.p.z+h*.55)}i&&!this._wasMoving&&this.mode!=="view"&&(this.followYaw=n,this.followH=.55,this.resetPan()),this._wasMoving=i,this.mode==="top"?(r.add(this.panOffset),o.add(this.panOffset)):!i&&this.mode!=="view"&&this.panOffset.lengthSq()>1e-8&&(r.add(this.panOffset),this.aimPoint?o.copy(this.aimPoint):o.add(this.panOffset)),this.mode!=="top"&&!this.noClamp&&xc(r);let a=this.snapNext?1:1-Math.exp(-t*(this.mode==="view"||i?4:7));this.snapNext=!1,this.camera.position.lerp(r,a),this._curLook.lerp(o,a),this.camera.lookAt(this._curLook),this.camera.position.y>He.ceil-.05?this.camera.layers.disable(2):this.mode!=="top"&&this.camera.layers.enable(2),this.mode!=="top"&&(this.camera.position.y>1.5?this.camera.layers.disable(1):this.camera.layers.enable(1))}};var jo=class{constructor(t,e,n,i){this.dom=t,this.rig=e,this.game=n,this.hooks=i,this.power=0,this.charging=!1,this.fine=!1,this._ray=new Xi,this._plane=new fn(new R(0,1,0),-.02625),this._v2=new bt,this._hit=new R,this._drag=null,this._keys=new Set,this._spaceT=0,this.stroking=!1,this.spinning=!1,this.blocked=!1,this.cueSpec={fine:0,len:1.45},this.strokePx=380,this.strokePull=0,this._hist=[],t.addEventListener("mousemove",r=>this.mouseMove(r)),this.panning=!1,t.addEventListener("mousedown",r=>{r.button===1&&r.preventDefault()}),this._ignoreUntil=0,document.addEventListener("pointerlockchange",()=>{this._ignoreUntil=performance.now()+60,this.hooks.lock&&this.hooks.lock(this.captured)}),t.addEventListener("pointerdown",r=>this.down(r)),window.addEventListener("pointermove",r=>this.move(r)),window.addEventListener("pointerup",r=>this.up(r)),window.addEventListener("pointercancel",r=>this.up(r)),t.addEventListener("wheel",r=>this.wheel(r),{passive:!1}),t.addEventListener("contextmenu",r=>r.preventDefault()),window.addEventListener("keydown",r=>this.key(r,!0)),window.addEventListener("keyup",r=>this.key(r,!1))}tablePoint(t){let e=this.dom.getBoundingClientRect();return this._v2.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),this._ray.setFromCamera(this._v2,this.rig.camera),this._ray.ray.intersectPlane(this._plane,this._hit)}aimAt(t){let e=this.game.cue;Math.hypot(t.x-e.p.x,t.z-e.p.z)>.01&&(this.game.dir=Math.atan2(t.z-e.p.z,t.x-e.p.x))}down(t){this.hooks.unlock();let e=this.game;if(this.blocked){this.hooks.viewDown&&this.hooks.viewDown(t);return}if(t.pointerType==="mouse"&&t.button===2){this.rig.mode!=="free"&&(this.panning=!0,this.capture());return}if(t.pointerType==="mouse"&&t.button===1){let n=performance.now();if(n-(this._midT||0)<350){this._midT=0,this.spinning=!1,this.hooks.spinReset&&this.hooks.spinReset();return}this._midT=n}if(e.state==="place"&&this.captured){t.button===0&&(e.confirmPlace(),e.aimAtNearest());return}if(e.state==="place"){let n=this.tablePoint(t);n&&e.movePlace(n.x,n.z),this._drag={kind:"place",id:t.pointerId};return}if(e.state==="aim"){if(t.pointerType==="mouse"){if(t.button===0&&this.rig.mode!=="free"){this.captured?this.startStroke():this.capture();return}if(t.button===1){this.spinning=!0,this.capture();return}}if(this.rig.mode==="free"){this._tap={id:t.pointerId,x:t.clientX,y:t.clientY,t:performance.now()};return}if(this.rig.mode==="top"){let n=this.tablePoint(t);n&&this.aimAt(n),this._drag={kind:"aimTop",id:t.pointerId}}else this._drag={kind:"aimCue",id:t.pointerId,x:t.clientX,dir:e.dir};try{this.dom.setPointerCapture(t.pointerId)}catch{}}}move(t){let e=this._drag;if(!e||e.id!==t.pointerId)return;let n=this.game;if(e.kind==="place"){let i=this.tablePoint(t);i&&n.movePlace(i.x,i.z)}else if(e.kind==="aimTop"){let i=this.tablePoint(t);i&&this.aimAt(i)}else if(e.kind==="aimCue"){let i=t.shiftKey||this.fine?15e-5:.0016;n.dir=e.dir+(t.clientX-e.x)*i}}up(t){t.pointerType==="mouse"&&t.button===0&&this.stroking&&this.endStroke(),t.pointerType==="mouse"&&t.button===1&&(this.spinning=!1),t.pointerType==="mouse"&&t.button===2&&(this.panning=!1,this.rig.resetPan());let e=this._tap;if(e&&e.id===t.pointerId&&(this._tap=null,Math.hypot(t.clientX-e.x,t.clientY-e.y)<6&&performance.now()-e.t<350&&this.game.state==="aim")){let n=this.tablePoint(t);n&&this.aimAt(n)}this._drag&&this._drag.id===t.pointerId&&(this._drag=null)}setCue(t){this.cueSpec=t,this.strokePx=bu(t)}get captured(){return document.pointerLockElement===this.dom}capture(){if(!(this.captured||!this.dom.requestPointerLock))try{let t=this.dom.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}uncapture(){this.captured&&document.exitPointerLock()}mouseMove(t){let e=this.game;if(this.blocked){this.hooks.look&&performance.now()>=this._ignoreUntil&&Math.abs(t.movementX||0)<200&&Math.abs(t.movementY||0)<200&&this.hooks.look(t.movementX||0,t.movementY||0);return}if(performance.now()<this._ignoreUntil||Math.abs(t.movementX||0)>200||Math.abs(t.movementY||0)>200)return;if(this.stroking){this.strokeMove(t.movementY||0);return}if(this.panning){this.rig.pan(t.movementX||0,t.movementY||0);return}if(e.state==="moving"&&this.rig.mode==="cue"&&(t.buttons&3)===0){this.rig.turn(t.movementX||0,t.movementY||0);return}if(this.spinning){this.hooks.spin&&this.hooks.spin((t.movementX||0)/160,-(t.movementY||0)/160);return}if(e.state==="place"&&this.captured){this.placeMove(t.movementX||0,t.movementY||0);return}if((t.buttons&3)!==0||e.state!=="aim"||!this.captured)return;let n=t.movementX||0;if(!n)return;let i=t.shiftKey&&this.cueSpec.fine>0,r=i?this.cueSpec.fine:5e-4,o=i?1:1+Math.min(6,Math.abs(n)/6);e.dir+=n*r*o}placeMove(t,e){let n=this.rig.camera.matrixWorld.elements,i=n[0],r=n[2],o=n[4],a=n[6];Math.hypot(o,a)<.2&&(o=-n[8],a=-n[10]);let l=Math.hypot(i,r)||1,h=Math.hypot(o,a)||1;i/=l,r/=l,o/=h,a/=h;let c=.0012,u=this.game.cue;this.game.movePlace(u.p.x+(t*i-e*o)*c,u.p.z+(t*r-e*a)*c)}startStroke(){this.game.canShoot()&&(this.stroking=!0,this._ignoreUntil=performance.now()+60,this.strokePull=0,this._max=0,this._hist=[{t:performance.now(),p:0}],this.capture(),this.hooks.stroke&&this.hooks.stroke(!0))}endStroke(){this.stroking=!1,this.strokePull=0,this.power=0,this.hooks.stroke&&this.hooks.stroke(!1)}strokeMove(t){if(!this.stroking||!this.game.canShoot())return;let e=performance.now(),n=this.strokePull;for(this.strokePull=Math.max(-.02,Math.min(1,n+t/this.strokePx)),this._max=Math.max(this._max,this.strokePull),this._hist.push({t:e,p:this.strokePull});this._hist.length>2&&e-this._hist[0].t>80;)this._hist.shift();let i=this.strokeSpeed();if(this.power=Math.max(0,Math.min(1,i)),this.strokePull<=.004&&n>.004&&this._max>.02&&t<0){let r=Math.max(.03,Math.min(1,i));this.endStroke(),this.hooks.shoot(r)}}strokeSpeed(){let t=this._hist;if(t.length<2)return 0;let e=0;for(let a=1;a<t.length;a++)t[a].p>=t[e].p&&(e=a);let n=t[e],i=t[t.length-1];if(n===i)return 0;let r=Math.max(.008,(i.t-n.t)/1e3),o=(n.p-i.p)/r;return Math.max(0,o*.28*2/7)}wheel(t){if(this.blocked&&this.hooks.viewWheel){t.preventDefault(),this.hooks.viewWheel(Math.max(-4,Math.min(4,t.deltaY/(t.deltaMode===1?3:100))));return}if(this.rig.mode!=="cue")return;t.preventDefault();let e=Math.max(-4,Math.min(4,t.deltaY/(t.deltaMode===1?3:100)));this.rig.zoom=Math.min(6,Math.max(.3,this.rig.zoom*Math.pow(.82,e)))}key(t,e){if(t.target&&/input|textarea|select/i.test(t.target.tagName))return;let n=this.game,i=t.key;if(e?this._keys.add(i):this._keys.delete(i),i==="Control"){e&&!t.repeat?this.hooks.key&&this.hooks.key("ctrl-down",t):e||this.hooks.key&&this.hooks.key("ctrl-up",t);return}if(i===" "){if(t.preventDefault(),this.blocked)return;e&&!this.charging&&n.canShoot()?(this.hooks.unlock(),this.charging=!0,this._spaceT=0):!e&&this.charging&&this.release();return}e&&(i==="Enter"&&n.state==="place"?n.confirmPlace():i==="Escape"&&(this.charging||this.stroking)?(this.charging=!1,this.power=0,this.stroking&&this.endStroke()):this.hooks.key&&this.hooks.key(i,t)&&t.preventDefault())}setPower(t,e){this.power=Math.max(0,Math.min(1,t)),this.charging=e}release(){let t=this.power;this.charging=!1,this.power=0,t>.02&&this.hooks.shoot(t)}update(t){let e=this.game;if(e.state==="aim"&&!this.blocked){let i=this._keys.has("Shift")&&this.cueSpec.fine>0?.015:.35;this._keys.has("ArrowLeft")&&(e.dir-=i*t),this._keys.has("ArrowRight")&&(e.dir+=i*t)}if(this.stroking&&e.state!=="aim"&&this.endStroke(),this.stroking&&this._hist.length&&performance.now()-this._hist[this._hist.length-1].t>120&&(this.power*=Math.exp(-t*8)),this.charging&&this._keys.has(" ")){this._spaceT+=t;let n=this._spaceT/1.6%2;this.power=n<1?n:2-n}}};var Ko=class{constructor(){this.ctx=null,this.enabled=!0,this.volume=.8,this._last=0,this._count=0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t){this.enabled=!1;return}this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination);let e=Math.floor(this.ctx.sampleRate*.05);this.noise=this.ctx.createBuffer(1,e,this.ctx.sampleRate);let n=this.noise.getChannelData(0);for(let i=0;i<e;i++)n[i]=(Math.random()*2-1)*Math.pow(1-i/e,3)}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}_allow(){let t=this.ctx.currentTime;return t-this._last>.03&&(this._count=0),this._last=t,this._count++,this._count<=4}_tone(t,e,n,i="sine",r=.5){let o=this.ctx.currentTime,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type=i,a.frequency.setValueAtTime(t,o),a.frequency.exponentialRampToValueAtTime(Math.max(20,t*r),o+e),l.gain.setValueAtTime(n,o),l.gain.exponentialRampToValueAtTime(1e-4,o+e),a.connect(l).connect(this.master),a.start(o),a.stop(o+e+.02)}_click(t,e,n,i=1){let r=this.ctx.currentTime,o=this.ctx.createBufferSource();o.buffer=this.noise,o.playbackRate.value=i;let a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.value=t,a.Q.value=e;let l=this.ctx.createGain();l.gain.value=n,o.connect(a).connect(l).connect(this.master),o.start(r)}_ok(){return this.enabled&&this.ctx&&this.ctx.state==="running"}ball(t){if(!this._ok()||t<.02||!this._allow())return;let e=Math.min(1,t/4);this._click(3800+Math.random()*600,6,.25+e*1.6,1.2),this._tone(2600+Math.random()*300,.04,.05+e*.25,"triangle",.8)}cushion(t){if(!this._ok()||t<.05||!this._allow())return;let e=Math.min(1,t/4);this._tone(120,.12,.1+e*.45,"sine",.6),this._click(700,2,.1+e*.4,.6)}pot(){this._ok()&&(this._tone(90,.25,.5,"sine",.5),setTimeout(()=>this._ok()&&this._click(1200,3,.25,.5),90),setTimeout(()=>this._ok()&&this._click(900,3,.18,.5),170))}doorCreak(){if(!this._ok())return;let t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createBiquadFilter(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(420,t);for(let r=1;r<=8;r++)e.frequency.linearRampToValueAtTime(380+Math.random()*260,t+r*.1);n.type="bandpass",n.frequency.value=900,n.Q.value=6,i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.12,t+.08),i.gain.setValueAtTime(.12,t+.6),i.gain.exponentialRampToValueAtTime(1e-4,t+.85),e.connect(n).connect(i).connect(this.master),e.start(t),e.stop(t+.9)}doorShut(){this._ok()&&(this._tone(70,.35,.9,"sine",.5),this._click(500,1.5,.8,.5),setTimeout(()=>this._ok()&&this._click(2500,4,.25,1),40))}cue(t){this._ok()&&(this._click(1800,3,.3+t*1.2,.9),this._tone(600,.05,.05+t*.15,"triangle",.6))}};var le=s=>String(s||"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),xt=(s,t,e)=>{let n=document.createElement(s);return t&&(n.className=t),e!==void 0&&(n.innerHTML=e),n},Jo=class{constructor(t,e){this.root=t,this.opts=e,this.side=0,this.top=0,t.classList.add("mysn-ui");let n=xt("div","mysn-bar");n.appendChild(xt("div","mysn-brand",`<a href="${e.homeUrl||"/"}" class="mysn-home" title="Sp\xE4\u0165 na web">My Snooker</a><span>Tr\xE9ning</span>`)),this.modeLabel=n.querySelector(".mysn-brand span"),this.stats=xt("div","mysn-stats"),n.appendChild(this.stats);let i=xt("div","mysn-barbtns");this.btnHelp=this.button("?","help","Ovl\xE1danie"),this.btnSet=this.button("Nastavenia","settings"),i.append(this.btnSet,this.btnHelp),n.appendChild(i),t.appendChild(n),this.msg=xt("div","mysn-msg"),t.appendChild(this.msg),this.hint=xt("div","mysn-hint",""),t.appendChild(this.hint),this.setLock(!1),this.powerBox=xt("div","mysn-power",'<div class="mysn-power-label">Sila</div><div class="mysn-power-track"><div class="mysn-power-fill"></div><div class="mysn-power-knob"></div></div><div class="mysn-power-val">0 %</div>'),t.appendChild(this.powerBox),this.powerTrack=this.powerBox.querySelector(".mysn-power-track"),this.powerFill=this.powerBox.querySelector(".mysn-power-fill"),this.powerKnob=this.powerBox.querySelector(".mysn-power-knob"),this.powerVal=this.powerBox.querySelector(".mysn-power-val"),this.bindPower(),this.spinBox=xt("div","mysn-spin",'<div class="mysn-spin-ball"><div class="mysn-spin-dot"></div></div><div class="mysn-spin-label">Miesto \xFAderu</div>'),t.appendChild(this.spinBox),this.spinBall=this.spinBox.querySelector(".mysn-spin-ball"),this.spinDot=this.spinBox.querySelector(".mysn-spin-dot"),this.bindSpin();let r=xt("div","mysn-tools");this.camBtns={};let o=xt("div","mysn-group");this.btnUndo=this.button("Sp\xE4\u0165","undo","Vr\xE1ti\u0165 posledn\xFD \xFAder (Z)"),this.btnHand=this.button("Biela do ruky","hand","Polo\u017Ei\u0165 bielu kamko\u013Evek v D (B)"),this.btnSkip=this.button("Presko\u010Di\u0165","skip","Dokon\u010Di\u0165 \xFAder hne\u010F"),this.btnReset=this.button("Nov\xE9 rozostavenie","reset","Nov\xE9 rozostavenie (R)"),this.btnPlace=this.button("Hotovo","place","Potvrdi\u0165 polohu bielej (Enter)"),this.btnPlace.classList.add("mysn-primary"),o.append(this.btnPlace,this.btnUndo,this.btnHand,this.btnSkip,this.btnReset),r.appendChild(o),t.appendChild(r),this.menu=this.buildMenu(),this.setMenu(e.user?"training":"guest"),t.appendChild(this.menu),this.panel=this.buildSettings(e.settings),t.appendChild(this.panel),this.contact=xt("div","mysn-contact mysn-hidden",'<canvas></canvas><div class="mysn-contact-info"></div>'),t.appendChild(this.contact),this.contactCanvas=this.contact.querySelector("canvas"),this.contactInfo=this.contact.querySelector(".mysn-contact-info"),this._contactKey="",this.help=this.buildHelp(),t.appendChild(this.help)}button(t,e,n,i){let r=xt("button","mysn-btn",t);return r.type="button",n&&(r.title=n),r.addEventListener("click",o=>{o.stopPropagation(),this.opts.onAction(e,i)}),r}bindPower(){let t=null,e=i=>{let r=this.powerTrack.getBoundingClientRect();return Math.max(0,Math.min(1,(i.clientY-r.top)/r.height))};this.powerTrack.addEventListener("pointerdown",i=>{i.preventDefault(),this.opts.onAction("unlock"),t=i.pointerId;try{this.powerTrack.setPointerCapture(i.pointerId)}catch{}this.opts.onPower(e(i),!0)}),this.powerTrack.addEventListener("pointermove",i=>{t===i.pointerId&&this.opts.onPower(e(i),!0)});let n=i=>{t===i.pointerId&&(t=null,this.opts.onRelease())};this.powerTrack.addEventListener("pointerup",n),this.powerTrack.addEventListener("pointercancel",i=>{t===i.pointerId&&(t=null,this.opts.onPower(0,!1))})}bindSpin(){let t=null,e=n=>{let i=this.spinBall.getBoundingClientRect(),r=(n.clientX-i.left)/i.width*2-1,o=-((n.clientY-i.top)/i.height*2-1),a=Math.hypot(r,o);a>1&&(r/=a,o/=a),this.setSpin(Math.abs(r)<.06?0:r,Math.abs(o)<.06?0:o)};this.spinBall.addEventListener("pointerdown",n=>{n.preventDefault(),t=n.pointerId;try{this.spinBall.setPointerCapture(n.pointerId)}catch{}e(n)}),this.spinBall.addEventListener("pointermove",n=>t===n.pointerId&&e(n)),this.spinBall.addEventListener("pointerup",()=>t=null),this.spinBall.addEventListener("dblclick",()=>this.setSpin(0,0))}setSpin(t,e){let n=Math.hypot(t,e);n>1&&(t/=n,e/=n),this.side=t,this.top=e,this.spinDot.style.left=50+this.side*40+"%",this.spinDot.style.top=50-this.top*40+"%",this.opts.onSpin(this.side,this.top)}buildSettings(t){let e=xt("div","mysn-panel mysn-hidden");e.innerHTML=`
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
			<button type="button" class="mysn-btn mysn-primary" data-close>Zavrie\u0165</button>`;for(let n of e.querySelectorAll("[data-k]")){let i=n.dataset.k;n.type==="checkbox"?n.checked=!!t[i]:n.value=String(t[i]),n.addEventListener(n.type==="range"?"input":"change",()=>{let r=n.type==="checkbox"?n.checked:n.type==="range"?parseFloat(n.value):n.value;this.opts.onAction("setting",{k:i,v:r})})}return e.querySelector("[data-close]").addEventListener("click",()=>e.classList.add("mysn-hidden")),e}buildMenu(){let t=xt("div","mysn-menu mysn-hidden");return t.innerHTML=`<div class="mysn-menu-box">
			<h2>My Snooker</h2>
			<p class="mysn-menu-mode"></p>
			<div class="mysn-menu-note mysn-hidden"></div>
			<div class="mysn-menu-inv"></div>
			<div class="mysn-menu-btns"></div>
			<p class="mysn-note"></p>
		</div>`,this.menuMode=t.querySelector(".mysn-menu-mode"),this.menuNoteEl=t.querySelector(".mysn-menu-note"),this.menuInv=t.querySelector(".mysn-menu-inv"),this.menuBtns=t.querySelector(".mysn-menu-btns"),this.menuFoot=t.querySelector(".mysn-note"),this._menuKind="",t}setMenu(t,e){let n=t+"|"+(e||"")+"|"+(this.opts.venue?this.opts.venue():"");if(this._menuKind===n)return;this._menuKind=n;let i=this.menuBtns;i.innerHTML="";let r=this.opts.user;if(t==="guest"){this.menuMode.textContent="3D snooker v prehliada\u010Di";let l=xt("a","mysn-btn mysn-login","Prihl\xE1si\u0165 sa");l.href=this.opts.loginUrl||"/wp-login.php",i.appendChild(l),this.menuFoot.textContent="Hra\u0165 m\xF4\u017Eu prihl\xE1sen\xED pou\u017E\xEDvatelia webu Hedlajner: tr\xE9ning aj partie s priate\u013Emi cez internet.";return}let o=()=>{let l=this.button("Hra\u0165 s priate\u013Eom","lobby","Partia cez internet s hr\xE1\u010Dom, ktor\xFD je pr\xE1ve v hre");return l.classList.add("mysn-friend"),l},a=()=>[this.button("Nastavenia","settings")];if(t==="match")this.btnResume=this.button("Pokra\u010Dova\u0165 v partii","resume"),this.btnResume.classList.add("mysn-primary"),this.menuMode.textContent=`Partia s hr\xE1\u010Dom ${e}`,i.append(this.btnResume,...a()),i.append(this.button("Preru\u0161i\u0165 partiu","pauseMatch","Partia sa ulo\u017E\xED, pokra\u010Dova\u0165 sa d\xE1 nesk\xF4r"),this.button("Vzda\u0165 partiu","resign"));else{this.menuMode.textContent=t==="solo"?"Hr\xE1 sa o najlep\u0161ie sk\xF3re":r?`Prihl\xE1sen\xFD: ${r.name}`:"Tr\xE9ning";let l=this.button("Hra\u0165",t==="solo"?"resume":"solo","O najlep\u0161ie sk\xF3re: cel\xFD frame pod\u013Ea pravidiel, rebr\xED\u010Dek pod\u013Ea bodov, pri rovnosti rozhoduje krat\u0161\xED \u010Das");l.classList.add("mysn-primary"),this.btnResume=l;let h=this.button("Liga","league","Kancel\xE1ria ligy: registr\xE1cia, 4 ligy, body a sez\xF3na na rok");h.classList.add("mysn-league-btn"),i.append(l,h,this.button("Tr\xE9ning",t==="solo"?"training":"resume"),o(),this.button("Rebr\xED\u010Dek","leaderboard")),this.opts.venue&&this.opts.venue()==="league"&&i.appendChild(this.button("Sp\xE4\u0165 do herne","leagueHome")),t!=="solo"&&i.appendChild(this.button("Nov\xE9 rozostavenie","reset")),i.append(...a())}i.appendChild(this.button("Sp\xE4\u0165 na web","home")),this.menuFoot.textContent="V hre sa my\u0161 zachyt\xED v okne. Esc ju uvo\u013En\xED a otvor\xED toto menu. F1 n\xE1poveda na n\xE1stenke, F2 stojan s t\xE1gami."}menuNote(t){this.menuNoteEl.textContent=t||"",this.menuNoteEl.classList.toggle("mysn-hidden",!t)}showMenu(t,e){this.menu.classList.toggle("mysn-hidden",!t),t||(this.panel.classList.add("mysn-hidden"),this.help.classList.add("mysn-hidden"),this.menuNote(""))}menuOpen(){return!this.menu.classList.contains("mysn-hidden")}showInvites(t){let e=t||[];this.menuInv.innerHTML="";for(let n of e){let i=xt("div","mysn-inv",`${n.from.avatar?`<img src="${le(n.from.avatar)}" alt="">`:""}<span><b>${le(n.from.name)}</b> \u0165a poz\xFDva na ${n.league?"ligov\xFA ":""}partiu</span>`),r=this.button("Prija\u0165","accept","",n.id);r.classList.add("mysn-primary"),i.append(r,this.button("Odmietnu\u0165","decline","",n.id)),this.menuInv.appendChild(i)}this.toastBox||(this.toastBox=xt("div","mysn-toast mysn-hidden"),this.root.appendChild(this.toastBox)),this.lobby&&!this.lobby.classList.contains("mysn-hidden")&&this._lobbyData&&this.renderLobby(this._lobbyData)}toast(t,e){this.toastBox||(this.toastBox=xt("div","mysn-toast mysn-hidden"),this.root.appendChild(this.toastBox));let n=this.toastBox;if(n.innerHTML="",n.appendChild(xt("span","",le(t))),e){let i=this.button("Prija\u0165","accept","",e.id);i.classList.add("mysn-primary"),n.append(i,this.button("Odmietnu\u0165","decline","",e.id))}n.classList.remove("mysn-hidden"),clearTimeout(this._toastT),this._toastT=setTimeout(()=>n.classList.add("mysn-hidden"),e?3e4:6e3)}hideToast(){this.toastBox&&this.toastBox.classList.add("mysn-hidden")}openLobby(t){this.lobby||(this.lobby=xt("div","mysn-panel mysn-lobby mysn-hidden"),this.root.appendChild(this.lobby)),this.lobby.classList.toggle("mysn-hidden",!t),t&&this._lobbyData&&this.renderLobby(this._lobbyData)}lobbyOpen(){return!!(this.lobby&&!this.lobby.classList.contains("mysn-hidden"))}renderLobby(t){if(this._lobbyData=t,!this.lobby||this.lobby.classList.contains("mysn-hidden"))return;let e=this.lobby;e.innerHTML="<h3>Hra\u0165 s priate\u013Eom</h3>";let n=l=>l.avatar?`<img src="${le(l.avatar)}" alt="">`:"<i></i>";for(let l of t.invites||[]){let h=xt("div","mysn-inv",`${n(l.from)}<span><b>${le(l.from.name)}</b> \u0165a poz\xFDva na partiu</span>`),c=this.button("Prija\u0165","accept","",l.id);c.classList.add("mysn-primary"),h.append(c,this.button("Odmietnu\u0165","decline","",l.id)),e.appendChild(h)}let i=t.outgoing;if(i&&i.status==="invited"){let l=xt("div","mysn-inv mysn-wait",`${n(i.to)}<span>\u010Cak\xE1m, k\xFDm <b>${le(i.to.name)}</b> prijme pozv\xE1nku\u2026</span>`);l.appendChild(this.button("Zru\u0161i\u0165","cancelInvite")),e.appendChild(l)}e.appendChild(xt("p","mysn-lobby-sub","Hr\xE1\u010Di pr\xE1ve v hre My Snooker"));let r=t.live||[];r.length||e.appendChild(xt("p","mysn-note","Teraz nie je v hre nikto in\xFD. Zoznam sa obnovuje s\xE1m, ke\u010F niekto pr\xEDde, objav\xED sa tu."));let o=xt("div","mysn-live");for(let l of r){let h=xt("div","mysn-live-row",`${n(l)}<span><b>${le(l.name)}</b>${l.busy?"<em>hr\xE1 partiu</em>":'<em class="mysn-live-on">v hre</em>'}</span>`),c=this.button("Pozva\u0165","invite","",l.id);c.disabled=!!l.busy||!!(i&&i.status==="invited"),h.appendChild(c),o.appendChild(h)}if(e.appendChild(o),(t.paused||[]).length){e.appendChild(xt("p","mysn-lobby-sub","Rozohran\xE9 partie"));for(let l of t.paused){let h=new Date(l.updated*1e3).toLocaleString("sk-SK",{day:"numeric",month:"numeric",hour:"2-digit",minute:"2-digit"}),c=xt("div","mysn-live-row",`${n(l.opp)}<span><b>${le(l.opp.name)}</b><em>${l.scores[0]} : ${l.scores[1]}, ${le(h)}</em></span>`);c.appendChild(this.button("Pokra\u010Dova\u0165","resumeMatch","Pokra\u010Dova\u0165 v partii (s\xFAper sa pripoj\xED, ke\u010F pr\xEDde do hry)",l.id)),e.appendChild(c)}}let a=xt("div","mysn-lobby-foot");a.appendChild(xt("span","mysn-note","Partia sa uklad\xE1 po ka\u017Edom \xFAdere. Pri v\xFDpadku internetu sa po n\xE1vrate pokra\u010Duje tam, kde sa skon\u010Dila.")),a.appendChild(this.button("Zavrie\u0165","lobbyClose")),e.appendChild(a)}celebrate(t){this.party||(this.party=xt("div","mysn-party mysn-hidden"),this.root.appendChild(this.party));let e=this.party;if(!t){e.classList.add("mysn-hidden"),e.innerHTML="";return}let n=Math.max(0,Math.round(t.seconds)),i=`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`,r=t.points===1?"bod":t.points>1&&t.points<5?"body":"bodov",o=["#FACC15","#b3121f","#0f7a3a","#1747b5","#f08aa8","#6b3a1e","#f4f1e8"],a="";for(let u=0;u<70;u++)a+=`<i style="left:${(Math.random()*100).toFixed(1)}%;background:${o[u%o.length]};animation-delay:${(Math.random()*2.5).toFixed(2)}s;animation-duration:${(2.8+Math.random()*2.4).toFixed(2)}s;width:${6+Math.round(Math.random()*8)}px;height:${6+Math.round(Math.random()*8)}px;border-radius:${u%3?"50%":"2px"}"></i>`;let l=t.rank?`<p class="mysn-party-rank">${t.rank}. miesto v rebr\xED\u010Dku z ${t.players}${t.best?", tvoj najlep\u0161\xED frame!":""}</p>`:"";e.innerHTML=`<div class="mysn-party-conf">${a}</div><div class="mysn-party-box">
			<p class="mysn-party-kick">Frame dohran\xFD</p>
			<h2>Gratulujem!</h2>
			<div class="mysn-party-score"><b>${t.points}</b><span>${r}</span></div>
			<p class="mysn-party-time">za <b>${i}</b></p>
			<p class="mysn-party-meta">Najvy\u0161\u0161ia s\xE9ria ${t.brk}, \xFAdery ${t.shots}, fauly ${t.fouls}</p>
			${l}${t.error?`<p class="mysn-party-err">${le(t.error)}</p>`:""}
			<div class="mysn-party-btns"></div>
		</div>`;let h=e.querySelector(".mysn-party-btns"),c=this.button("Hra\u0165 \u010Fal\u0161\xED frame","partyNext");c.classList.add("mysn-primary"),h.append(c,this.button("Rebr\xED\u010Dek","partyBoard")),e.classList.remove("mysn-hidden")}partyOpen(){return!!(this.party&&!this.party.classList.contains("mysn-hidden"))}leaderboardOpen(){return!!(this.board&&!this.board.classList.contains("mysn-hidden"))}openLeague(t){this.leagueBox||(this.leagueBox=xt("div","mysn-panel mysn-lobby mysn-league mysn-hidden"),this.root.appendChild(this.leagueBox),this._leagueTab=0),this.leagueBox.classList.toggle("mysn-hidden",!t)}leagueOpen(){return!!(this.leagueBox&&!this.leagueBox.classList.contains("mysn-hidden"))}renderLeague(t,e){if(this._leagueData=t,!this.leagueOpen())return;let n=this.leagueBox;n.innerHTML="";let i=f=>new Date(f*1e3).toLocaleDateString("sk-SK");if(e){n.appendChild(xt("h3","","Minul\xE9 sez\xF3ny")),(!e.seasons||!e.seasons.length)&&n.appendChild(xt("p","mysn-note","Zatia\u013E sa neskon\u010Dila \u017Eiadna sez\xF3na. Prv\xE1 sa skon\u010D\xED po roku hrania."));for(let m of e.seasons||[]){n.appendChild(xt("p","mysn-lobby-sub",`${le(m.name)} (${i(m.started)} a\u017E ${i(m.ends)})`)),m.champion&&n.appendChild(xt("div","mysn-menu-note",`Majster sez\xF3ny: <b>${le(m.champion.name)}</b>`));for(let y of[1,2,3,4]){let g=m.leagues&&m.leagues[y]||[];g.length&&n.appendChild(xt("p","mysn-note",`<b>${y}. liga:</b> `+g.map(p=>`${p.rank}. ${le(p.user.name)} (${p.points})`).join(", ")))}}let f=xt("div","mysn-lobby-foot");f.append(this.button("Sp\xE4\u0165 na ligu","league"),this.button("Zavrie\u0165","leagueClose")),n.appendChild(f);return}if(!t){n.appendChild(xt("h3","","Liga")),n.appendChild(xt("p","mysn-note","Ligu sa nepodarilo na\u010D\xEDta\u0165."));let f=xt("div","mysn-lobby-foot");f.appendChild(this.button("Zavrie\u0165","leagueClose")),n.appendChild(f);return}n.appendChild(xt("h3","",`Liga: ${le(t.season.name)}`)),n.appendChild(xt("p","mysn-note",`Do konca sez\xF3ny ost\xE1va ${t.season.daysLeft} dn\xED (${i(t.season.ends)}). Hr\xE1\u010Dov v lige: ${t.players}.`)),t.me&&(n.appendChild(xt("div","mysn-menu-note",`Si <b>${t.me.rank}.</b> v <b>${t.me.league}. lige</b>, m\xE1\u0161 <b>${t.me.points}</b> bodov (v\xFDhry ${t.me.wins}, prehry ${t.me.losses}).`)),this._leagueTab===0&&(this._leagueTab=t.me.league)),n.appendChild(xt("p","mysn-lobby-sub","Vyzvi hr\xE1\u010Da (tvoja a susedn\xE9 ligy, pr\xE1ve v hre)"));let r=t.live||[];r.length||n.appendChild(xt("p","mysn-note","Teraz nie je v hre nikto z tvojej ani susedn\xFDch l\xEDg. Zoznam sa obnovuje s\xE1m."));let o=this._lobbyData&&this._lobbyData.outgoing,a=xt("div","mysn-live");for(let f of r){let m=xt("div","mysn-live-row",`${f.user.avatar?`<img src="${le(f.user.avatar)}" alt="">`:"<i></i>"}<span><b>${le(f.user.name)}</b><em>${f.league}. liga, ${f.points} bodov${f.busy?", hr\xE1 partiu":""}</em></span>`),y=this.button("Vyzva\u0165","leagueInvite","Ligov\xE1 partia: v\xED\u0165az z\xEDska body, ktor\xE9 nahral, porazen\xFD ich strat\xED",f.user.id);y.disabled=!!f.busy||!!(o&&o.status==="invited"),m.appendChild(y),a.appendChild(m)}if(n.appendChild(a),o&&o.status==="invited"){let f=xt("div","mysn-inv mysn-wait",`<span>\u010Cak\xE1m, k\xFDm <b>${le(o.to.name)}</b> prijme v\xFDzvu\u2026</span>`);f.appendChild(this.button("Zru\u0161i\u0165","cancelInvite")),n.appendChild(f)}let l=xt("div","mysn-league-tabs");for(let f of[1,2,3,4]){let m=this.button(`${f}. liga`,"leagueTab","",f);m.classList.toggle("mysn-on",this._leagueTab===f),l.appendChild(m)}n.appendChild(l);let h=t.leagues&&t.leagues[this._leagueTab||1]||[],c=xt("table","mysn-lb");c.innerHTML="<thead><tr><th>#</th><th>Hr\xE1\u010D</th><th>Body</th><th>V / P</th><th>S\xE9ria</th></tr></thead>";let u=xt("tbody");h.length||u.appendChild(xt("tr","mysn-lb-gap",'<td colspan="5">V tejto lige zatia\u013E nikto nie je.</td>'));for(let f of h)u.appendChild(xt("tr",f.me?"mysn-lb-me":"",`<td>${f.rank}.</td><td>${le(f.user.name)}</td><td><b>${f.points}</b></td><td>${f.wins} / ${f.losses}</td><td>${f.best}</td>`));c.appendChild(u),n.appendChild(c),n.appendChild(xt("p","mysn-note","Ka\u017Ed\xFD za\u010D\xEDna so 147 bodmi. V\xED\u0165az z\xEDska to\u013Eko bodov, ko\u013Eko nahral, porazen\xFD ich strat\xED (najviac v\u0161etky svoje). V\xFDhra nad hr\xE1\u010Dom z vy\u0161\u0161ej ligy sa r\xE1ta 1,5-kr\xE1t. 1. liga: top 10, 2. liga: 11. a\u017E 30., 3. liga: 31. a\u017E 70., 4. liga: ostatn\xED. Sez\xF3na trv\xE1 rok."));let d=xt("div","mysn-lobby-foot");d.append(this.button("Minul\xE9 sez\xF3ny","leagueArchive"),this.button("Sp\xE4\u0165 do herne","leagueHome"),this.button("Zavrie\u0165","leagueClose")),n.appendChild(d)}showLeaderboard(t,e){this.board||(this.board=xt("div","mysn-panel mysn-lobby mysn-hidden"),this.root.appendChild(this.board));let n=this.board;if(t===null){n.classList.add("mysn-hidden");return}let i=a=>{let l=Math.max(0,Math.round(a));return`${Math.floor(l/60)}:${String(l%60).padStart(2,"0")}`};if(n.innerHTML="<h3>Rebr\xED\u010Dek: o najlep\u0161ie sk\xF3re (F8)</h3>",e&&n.appendChild(xt("div","mysn-menu-note",le(e))),n.appendChild(xt("p","mysn-note","Jeden hr\xE1\u010D hr\xE1 cel\xFD frame pod\u013Ea pravidiel. Rozhoduj\xFA body (fauly sa odpo\u010D\xEDtaj\xFA), pri rovnosti krat\u0161\xED \u010Das. V rebr\xED\u010Dku je najlep\u0161\xED frame ka\u017Ed\xE9ho hr\xE1\u010Da.")),t===void 0)n.appendChild(xt("p","mysn-note","Na\u010D\xEDtavam rebr\xED\u010Dek\u2026"));else if(!t)n.appendChild(xt("p","mysn-note","Rebr\xED\u010Dek sa nepodarilo na\u010D\xEDta\u0165."));else if(!t.top.length)n.appendChild(xt("p","mysn-note","Zatia\u013E nikto nedohral frame. Bu\u010F prv\xFD."));else{let a=xt("table","mysn-lb");a.innerHTML="<thead><tr><th>#</th><th>Hr\xE1\u010D</th><th>Body</th><th>Celkov\xFD \u010Das</th><th>S\xE9ria</th></tr></thead>";let l=xt("tbody"),h=c=>{let u=xt("tr",c.me?"mysn-lb-me":"",`<td>${c.rank}.</td><td>${le(c.user.name)}</td><td><b>${c.points}</b></td><td>${i(c.seconds)}</td><td>${c.brk}</td>`);l.appendChild(u)};t.top.forEach(h),t.mine&&t.rank>10&&(l.appendChild(xt("tr","mysn-lb-gap",'<td colspan="5">\u2026</td>')),h(t.mine)),a.appendChild(l),n.appendChild(a),n.appendChild(xt("p","mysn-note",t.mine?`Tvoje miesto: ${t.rank}. z ${t.players}, dohran\xFDch framov: ${t.frames}.`:`Hr\xE1\u010Dov v rebr\xED\u010Dku: ${t.players}. Zatia\u013E nem\xE1\u0161 dohran\xFD \u017Eiadny frame.`))}let r=xt("div","mysn-lobby-foot"),o=this.button("Hra\u0165","solo");o.classList.add("mysn-primary"),r.append(o,this.button("Zavrie\u0165","leaderboardClose")),n.appendChild(r),n.classList.remove("mysn-hidden")}setNet(t){this._net=t||"",this._lastGame&&this.sync(this._lastGame,this._lastCam)}buildHelp(){let t=xt("div","mysn-panel mysn-help mysn-hidden");return t.innerHTML=`
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
			<button type="button" class="mysn-btn mysn-primary" data-close>Rozumiem</button>`,t.querySelector("[data-close]").addEventListener("click",()=>t.classList.add("mysn-hidden")),t}toggle(t){(t===this.panel?this.help:this.panel).classList.add("mysn-hidden"),t.classList.toggle("mysn-hidden")}drawContact(t,e,n,i=!1){let r=!!(n&&t&&t.ball);if(this.contact.classList.toggle("mysn-hidden",!r),!r){this._contactKey="";return}let o=t.ball.p,a=t.ghost,l=[i?1:0,e.toFixed(5),o.x.toFixed(4),o.z.toFixed(4),a.x.toFixed(4),a.z.toFixed(4)].join();if(l===this._contactKey)return;this._contactKey=l;let h=this.contactCanvas,c=this.contact.clientWidth||200,u=Math.min(2,window.devicePixelRatio||1);h.width!==Math.round(c*u)&&(h.width=h.height=Math.round(c*u));let d=h.getContext("2d"),f=h.width;d.setTransform(1,0,0,1,0,0),d.clearRect(0,0,f,f);let m=Math.cos(e),y=Math.sin(e),g=(a.x+o.x)/2,p=(a.z+o.z)/2,S=f*.17/.02625,v=(Mt,Q)=>{let F=Mt-g,mt=Q-p,k=F*m+mt*y,St=F*-y+mt*m;return[f/2+St*S,f/2-k*S]},x=o.x-a.x,U=o.z-a.z,C=Math.hypot(x,U)||1,D=x/C,O=U/C,w=Math.max(-1,Math.min(1,m*D+y*O)),_=Math.acos(w),T=Math.max(0,1-Math.sin(_)),$=(Mt,Q,F,mt,k)=>{d.beginPath(),d.setLineDash(k||[]),d.strokeStyle=F,d.lineWidth=mt*u,d.moveTo(Mt[0],Mt[1]),d.lineTo(Q[0],Q[1]),d.stroke(),d.setLineDash([])},q=(Mt,Q,F,mt,k)=>{let St=v(Mt.x,Mt.z),gt=v(Mt.x+Q*mt,Mt.z+F*mt);$(St,gt,k,2.2);let Ct=Math.atan2(gt[1]-St[1],gt[0]-St[0]),Lt=8*u;d.beginPath(),d.fillStyle=k,d.moveTo(gt[0],gt[1]),d.lineTo(gt[0]-Lt*Math.cos(Ct-.45),gt[1]-Lt*Math.sin(Ct-.45)),d.lineTo(gt[0]-Lt*Math.cos(Ct+.45),gt[1]-Lt*Math.sin(Ct+.45)),d.closePath(),d.fill()};if(d.fillStyle="#1d6b34",d.beginPath(),d.arc(f/2,f/2,f/2-u,0,Math.PI*2),d.fill(),d.save(),d.clip(),i){let Mt=6*.02625;$(v(a.x-m*Mt,a.z-y*Mt),v(a.x+m*Mt,a.z+y*Mt),"rgba(255,255,255,0.45)",1.2,[5*u,4*u]),$(v(a.x-D*.02625,a.z-O*.02625),v(o.x+D*5*.02625,o.z+O*5*.02625),"rgba(255,226,138,0.35)",1,[2*u,3*u])}let X=(Mt,Q,F)=>{let[mt,k]=v(Mt.x,Mt.z),St=.02625*S,gt=d.createRadialGradient(mt-St*.35,k-St*.35,St*.1,mt,k,St),Ct="#"+Q.toString(16).padStart(6,"0");gt.addColorStop(0,F?"#ffffff":"rgba(255,255,255,0.55)"),gt.addColorStop(.25,Ct),gt.addColorStop(1,Ct),d.globalAlpha=F?.78:1,d.fillStyle=gt,d.beginPath(),d.arc(mt,k,St,0,Math.PI*2),d.fill(),d.globalAlpha=1,d.lineWidth=1.5*u,d.strokeStyle=F?"rgba(255,255,255,0.95)":"rgba(0,0,0,0.55)",d.stroke()};X(o,Gn[t.ball.kind].color,!1),X(a,Gn.white.color,!0);let V=m-w*D,B=y-w*O,K=Math.hypot(V,B);{let Mt=v(a.x-m*4.2*.02625,a.z-y*4.2*.02625),Q=v(a.x-m*1.05*.02625,a.z-y*1.05*.02625);$(Mt,Q,"rgba(255,255,255,0.7)",2.4,[6*u,4*u]);let F=Math.atan2(Q[1]-Mt[1],Q[0]-Mt[0]),mt=7*u;d.beginPath(),d.fillStyle="rgba(255,255,255,0.8)",d.moveTo(Q[0],Q[1]),d.lineTo(Q[0]-mt*Math.cos(F-.5),Q[1]-mt*Math.sin(F-.5)),d.lineTo(Q[0]-mt*Math.cos(F+.5),Q[1]-mt*Math.sin(F+.5)),d.closePath(),d.fill();let k=t.ball.kind,St=k==="black"?7829367:Gn[k].color;q({x:o.x+D*.02625*1.05,z:o.z+O*.02625*1.05},D,O,.02625*2.4,"#"+St.toString(16).padStart(6,"0"))}i&&K>.001&&(V/=K,B/=K,q(a,V,B,.02625*(.9+2.4*(1-w)),"#9fd3ff"));let Y=v(a.x+D*.02625,a.z+O*.02625);d.fillStyle="#ff4d4d",d.beginPath(),d.arc(Y[0],Y[1],3.2*u,0,Math.PI*2),d.fill(),d.restore(),d.strokeStyle="rgba(255,255,255,0.35)",d.lineWidth=1.5*u,d.beginPath(),d.arc(f/2,f/2,f/2-u,0,Math.PI*2),d.stroke();let ot=null;for(let Mt of Yi){let Q=Mt.x-o.x,F=Mt.z-o.z,mt=Q*D+F*O;if(mt<=0)continue;let k=Math.abs(Q*-O+F*D);k<Mt.r*.75&&(!ot||mt<ot.pr)&&(ot={pr:mt,perp:k,pk:Mt})}let ft=m*O-y*D,vt=_*180/Math.PI,Ft=vt<.5?"pln\xFD z\xE1sah":ft>0?"gu\u013Ea ide doprava":"gu\u013Ea ide do\u013Eava";this.contactInfo.innerHTML=`<span>Uhol <b>${vt.toFixed(1)}\xB0</b></span><span>Plnos\u0165 <b>${Math.round(T*100)} %</b></span>`+(i?`<span class="mysn-contact-where">${Ft}</span>`+(ot?'<span class="mysn-contact-pot">Smer do jamky</span>':'<span class="mysn-contact-miss">Mimo jamky</span>'):"")}setLock(t){this._lock=t,this._hintText()}setStroke(t){this._stroke=t,this._hintText()}_hintText(){let t=this._free?"My\u0161 je vo\u013En\xE1, k\xFDm dr\u017E\xED\u0161 Ctrl. Po pusten\xED sa vr\xE1ti na t\xE1go.":this._stroke?"Ruka dr\u017E\xED t\xE1go: my\u0161 k sebe odtiahne, dopredu vystrel\xED. Pusten\xEDm \u013Eav\xE9ho tla\u010Didla zru\u0161\xED\u0161.":this._lock?`${this._cueName}: mier pohybom my\u0161i${this._cueFine?" (Shift jemne)":""}, \u013Eav\xE9 tla\u010Didlo dr\u017E a striel. F1 n\xE1poveda, F2 t\xE1g\xE1, F3 krieda, F4 sk\xF3re, F6 dvere, Tab zhora, Esc menu.`:"Klikni do hry, my\u0161 sa zachyt\xED v okne. F1 n\xE1poveda, F2 t\xE1g\xE1, F3 krieda, F4 sk\xF3re, F6 dvere, Tab zhora.";this.hint.textContent=t,this.hint.classList.toggle("mysn-hint-on",!!(this._stroke||this._free))}readerOpen(){return!!(this.reader&&!this.reader.classList.contains("mysn-hidden"))}toggleReader(t,e){this.reader||(this.reader=xt("div","mysn-reader mysn-hidden"),this.root.appendChild(this.reader));let n=this.reader;if(!t||this.readerOpen()){n.classList.add("mysn-hidden");return}let i=t==="rss"?"Spr\xE1vy z RSS":"HEDLAJNER",r=t==="rss"?"Najnov\u0161ie spr\xE1vy z m\xE9di\xED doma aj vo svete":"Hlavn\xE9 spr\xE1vy z domova a zo sveta",o=(e||[]).map((l,h)=>{let c=l.i?`<img src="${le(l.i)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`:"",u=[l.s,l.c,l.d].filter(Boolean).map(le).join("  |  ");return`<a class="mysn-rd-card${h===0&&l.i?" mysn-rd-lead":""}" href="${le(l.u)}" target="_blank" rel="noopener">${c}<span class="mysn-rd-meta">${u}${l.n?"  |  +"+l.n+" m\xE9di\xE1":""}</span><b>${le(l.t)}</b><p>${le(l.e)}</p></a>`}).join("");n.innerHTML=`<div class="mysn-rd-head"><div><h2>${i}</h2><span>${r}</span></div></div><div class="mysn-rd-grid">${o||"<p>\u017Diadne spr\xE1vy.</p>"}</div>`;let a=this.button("Zavrie\u0165 (C alebo Esc)","reader");a.classList.add("mysn-primary"),n.querySelector(".mysn-rd-head").appendChild(a),n.classList.remove("mysn-hidden"),n.scrollTop=0}setFree(t){this._free=t,this._hintText()}setChalk(t){this._chalk=t,this._lastGame&&this.sync(this._lastGame,this._lastCam)}setCueInfo(t){this._cueName=t.name,this._cueFine=t.fine>0,this._hintText()}openPhone(t){if(!this.phone){if(!t)return;this.phone=xt("div","mysn-phone mysn-hidden"),this.phone.innerHTML='<div class="mysn-phone-dev"><div class="mysn-phone-notch"></div><div class="mysn-phone-scr"></div></div>',this.phone.addEventListener("click",a=>{a.target===this.phone&&this.openPhone(!1)}),this.root.appendChild(this.phone)}let e=this.phone;if(!t){e.classList.add("mysn-hidden");return}let n=e.querySelector(".mysn-phone-scr"),i=this.opts.accountUrl;n.innerHTML="";let r=xt("div","mysn-phone-bar","<b>M\xF4j \xFA\u010Det</b>"),o=this.button("Zavrie\u0165 (Esc)","phoneClose");if(r.appendChild(o),n.appendChild(r),!i)n.appendChild(xt("p","mysn-phone-msg","M\xF4j \xFA\u010Det je len pre prihl\xE1sen\xFDch."));else{let a=document.createElement("iframe");a.className="mysn-phone-frame",a.src=i,a.title="M\xF4j \xFA\u010Det";let l=()=>{n.querySelector(".mysn-phone-frame")&&a.remove();let c=xt("div","mysn-phone-msg","Nastavenie \xFA\u010Dtu sa tu ned\xE1 zobrazi\u0165. Otvor ho na webe:"),u=xt("a","mysn-btn mysn-primary","Otvori\u0165 M\xF4j \xFA\u010Det");u.href=i,u.target="_blank",u.rel="noopener",c.appendChild(u),n.appendChild(c)};a.addEventListener("load",()=>{try{let c=a.contentDocument,u=c.createElement("style");u.textContent="#adminmenumain,#wpadminbar,#wpfooter,.notice-warning,.update-nag{display:none!important}#wpcontent,#wpbody-content{margin-left:0!important;padding-left:12px!important}html.wp-toolbar{padding-top:0!important}body{min-width:0!important}",c.head.appendChild(u)}catch{l()}}),n.appendChild(a);let h=xt("a","mysn-phone-ext","Otvori\u0165 na webe");h.href=i,h.target="_blank",h.rel="noopener",n.appendChild(h)}e.classList.remove("mysn-hidden")}phoneOpen(){return!!(this.phone&&!this.phone.classList.contains("mysn-hidden"))}renderOffice(t,e){let n=xt("div","mysn-mixer mysn-office"),i=e.league,r=i&&i.registered,o=i&&i.player||{},a=(c,u)=>{let d=xt("label","mysn-mixer-row mysn-form-row",`<span>${c}</span>`);return d.appendChild(u),d},l=(c,u,d,f)=>{let m=document.createElement("input");return m.type="text",m.name=c,m.maxLength=d,m.value=u||"",m.placeholder=f||"",m};if(!i)n.appendChild(xt("div","mysn-news-head","<b>Kancel\xE1ria</b>")),n.appendChild(xt("p","mysn-mixer-status","Na\u010D\xEDtavam ligu\u2026"));else if(!r||e.mode==="edit"){n.appendChild(xt("div","mysn-news-head",`<b>${r?"\xDAdaje hr\xE1\u010Da":"Registr\xE1cia do ligy"}</b>`)),r||n.appendChild(xt("p","mysn-mixer-status",`${le(i.season.name)}, do konca ${i.season.daysLeft} dn\xED. Po registr\xE1cii za\u010D\xEDna\u0161 so 147 bodmi v 4. lige (alebo pod\u013Ea poradia) a m\xF4\u017Ee\u0161 vyz\xFDva\u0165 hr\xE1\u010Dov.`));let c=document.createElement("form");c.className="mysn-form";let u=document.createElement("select");u.name="country",u.innerHTML='<option value="">Vyber krajinu\u2026</option>'+e.countries.map(([f,m])=>`<option value="${f}"${(o.country||"")===f?" selected":""}>${le(m)}</option>`).join(""),c.append(a("Krajina *",u),a("Mesto",l("city",o.city,40,"napr\xEDklad Ru\u017Eomberok")),a("Prez\xFDvka v lige",l("nick",o.nick,24,e.user&&e.user.name||"")),(()=>{let f=document.createElement("select");return f.name="hand",f.innerHTML=`<option value="right"${o.hand!=="left"?" selected":""}>prav\xE1k</option><option value="left"${o.hand==="left"?" selected":""}>\u013Eav\xE1k</option>`,a("Hr\xE1m rukou",f)})(),a("Ob\u013E\xFAben\xE9 t\xE1go",l("cue",o.cue,30,"napr\xEDklad Majstrovsk\xE9")),a("O mne",l("about",o.about,160,"kr\xE1tko o sebe (najviac 160 znakov)")));let d=document.createElement("button");d.type="submit",d.className="mysn-btn mysn-primary",d.textContent=r?"Ulo\u017Ei\u0165 \xFAdaje":"Registrova\u0165 sa do ligy",c.appendChild(d),c.addEventListener("submit",f=>{f.preventDefault();let m=new FormData(c),y=Object.fromEntries(m.entries());if(!y.country){this.toast("Vyber krajinu.");return}y.edit=r?1:0,this.opts.onAction("register",y)}),c.addEventListener("keydown",f=>f.stopPropagation()),n.appendChild(c),r&&n.appendChild(this.button("Sp\xE4\u0165","officeHome"))}else if(e.mode==="cues"){n.appendChild(xt("div","mysn-news-head",`<b>Moje t\xE1g\xE1 (do z\xE1pasu ${e.myCues.selected.length} zo 4)</b>`)),n.appendChild(xt("p","mysn-mixer-status","Za\u0161krtni 4 t\xE1g\xE1, ktor\xE9 si berie\u0161 do ligov\xE9ho z\xE1pasu (v z\xE1pase sa na F2 prep\xEDna len medzi nimi). Klik na n\xE1zov otvor\xED nastavenia t\xE1ga."));let c=xt("div","mysn-news mysn-stations");for(let u of e.cues){let d=e.myCues.selected.includes(u.id),f=xt("div","mysn-cue-row"+(d?" mysn-on":"")),m=document.createElement("input");m.type="checkbox",m.checked=d,m.addEventListener("change",g=>{g.stopPropagation(),this.opts.onAction("cueSelect",u.id)});let y=xt("button","mysn-cue-name",`<b>${le(u.name)}</b><span>${le(u.category)}, sila ${Math.round(u.power*100)} %</span>`);if(y.type="button",y.addEventListener("click",g=>{g.stopPropagation(),this.opts.onAction("cueEdit",u.id)}),f.append(m,y),c.appendChild(f),e.cue===u.id){let g=e.myCues.custom[u.id]||{},p=xt("div","mysn-cue-edit"),S=l("name",g.name,24,u.name);S.addEventListener("change",()=>this.opts.onAction("cueCustom",{id:u.id,k:"name",v:S.value.trim()})),S.addEventListener("keydown",v=>v.stopPropagation()),p.appendChild(a("N\xE1zov",S));for(let[v,x]of[["shaft","Drevo"],["butt","Rukov\xE4\u0165"]]){let U=document.createElement("input");U.type="color",U.value=g[v]||u.colors[v],U.addEventListener("input",()=>this.opts.onAction("cueCustom",{id:u.id,k:v,v:U.value})),p.appendChild(a(x,U))}for(let[v,x,U]of[["power","Sila \xB15 %",.05],["grip","Fal\u0161e \xB110 %",.1]]){let C=document.createElement("input");C.type="range",C.min=String(-U),C.max=String(U),C.step="0.01",C.value=String(g[v]||0),C.addEventListener("input",()=>this.opts.onAction("cueCustom",{id:u.id,k:v,v:parseFloat(C.value)})),p.appendChild(a(x,C))}c.appendChild(p)}}n.appendChild(c),n.appendChild(this.button("Sp\xE4\u0165","officeHome"))}else{let c=i.me;n.appendChild(xt("div","mysn-news-head",`<b>Kancel\xE1ria: ${le(o.nick||e.user&&e.user.name||"")}</b>`)),n.appendChild(xt("div","mysn-menu-note",`<b>${c.rank}.</b> miesto v <b>${c.league}. lige</b>, <b>${c.points}</b> bodov<br>V\xFDhry ${c.wins}, prehry ${c.losses}, najvy\u0161\u0161ia s\xE9ria ${c.best}`)),n.appendChild(xt("p","mysn-mixer-status",`${le(i.season.name)}: do konca sez\xF3ny ${i.season.daysLeft} dn\xED. Hr\xE1\u010Dov v lige: ${i.players}.`));let u=xt("div","mysn-office-btns"),d=this.button("Tabu\u013Eky l\xEDg a vyzvanie hr\xE1\u010Da","leagueTables");d.classList.add("mysn-primary"),u.append(d,this.button("Moje t\xE1g\xE1 (4 do z\xE1pasu)","myCues"),this.button("Moje \xFAdaje","officeEdit"),this.button("Minul\xE9 sez\xF3ny","leagueArchive")),n.appendChild(u)}let h=xt("div","mysn-office-btns");h.appendChild(this.button("Sp\xE4\u0165 do herne","officeLeave")),n.appendChild(h),t.appendChild(n)}renderMixer(t,e){let n=xt("div","mysn-mixer"),i=e.station,r=xt("div","mysn-news-head",`<b>R\xE1dio${i?": "+le(i.name):""}</b>`),o=this.button(e.on?"Vypn\xFA\u0165 (P)":"Zapn\xFA\u0165 (P)","radioToggle");o.classList.add("mysn-primary"),r.appendChild(o),n.appendChild(r),n.appendChild(xt("p","mysn-mixer-status",le(e.status||(e.stations.length?"Vyber stanicu alebo stla\u010D Zapn\xFA\u0165.":"V My Player nie s\xFA \u017Eiadne r\xE1di\xE1."))));let a={vol:"Hlasitos\u0165",bass:"Basy",treble:"V\xFD\u0161ky",bal:"Vyv\xE1\u017Eenie"};for(let h of["vol","bass","treble","bal"]){let c=xt("label","mysn-mixer-row",`<span>${a[h]}</span>`),u=document.createElement("input");u.type="range",u.min="0",u.max="1",u.step="0.01",u.value=String(e.params[h]),u.addEventListener("input",d=>{d.stopPropagation(),this.opts.onAction("radioSet",{k:h,v:parseFloat(u.value)})}),c.appendChild(u),n.appendChild(c)}let l=xt("div","mysn-news mysn-stations");e.stations.forEach((h,c)=>{let u=xt("button","mysn-news-item"+(c===e.index&&e.on?" mysn-on":""),`<span>${le([h.city,h.genre].filter(Boolean).join(", ")||"R\xE1dio")}</span>${le(h.name)}`);u.type="button",u.addEventListener("click",d=>{d.stopPropagation(),this.opts.onAction("radioPick",c)}),l.appendChild(u)}),n.appendChild(l),t.appendChild(n),this._mixerBox=n}showView(t,e,n,i){this.viewBox||(this.viewBox=xt("div","mysn-view mysn-hidden"),this.root.appendChild(this.viewBox));let r=this.viewBox;if(r.classList.toggle("mysn-hidden",!t),r.classList.toggle("mysn-view-news",t==="news"||t==="magazine"||t==="chair"||t==="mixer"||t==="office"),this.root.classList.toggle("mysn-viewing",!!t),this.root.classList.toggle("mysn-in-office",t==="office"),this._lastGame&&this.sync(this._lastGame,this._lastCam),!t)return;if(r.innerHTML="",t==="rack"){r.appendChild(xt("h3","","Stojan s t\xE1gami"));let h=xt("div","mysn-cues");e.forEach((c,u)=>{let d=xt("button","mysn-cue"+(c.id===n?" mysn-on":""),`<span class="mysn-cue-n">${u+1}</span><b>${c.name}</b><span class="mysn-cue-cat">${c.category}</span><span>\u0160pi\u010Dka ${c.tip}, sila ${Math.round(c.power*100)} %</span><span>D\u013A\u017Eka ${Math.round(c.len*100)} cm, Shift ${c.fine>0?"\xE1no":"nie"}</span><em>${c.note}</em>`);d.type="button",d.addEventListener("click",f=>{f.stopPropagation(),this.opts.onAction("cuePick",c.id)}),h.appendChild(d)}),r.appendChild(h)}let o=xt("div","mysn-view-foot"),a=h=>{let c=xt("a","mysn-news-item",`<span>${le(h.s?h.s+(h.c?", "+h.c:""):h.c||"")}</span>${le(h.t)}`);return c.href=h.u,c.target="_blank",c.rel="noopener",c};if(t==="office"&&i&&i.office&&this.renderOffice(r,i.office),t==="mixer"&&i&&i.radio&&this.renderMixer(r,i.radio),t==="chair"&&i){let h=xt("div","mysn-news"),c=(u,d,f,m)=>{if(!d||!d.length)return;let y=xt("div","mysn-news-head",`<b>${u}</b>`),g=this.button(f,m);g.classList.add("mysn-primary"),y.appendChild(g),h.appendChild(y),d.slice(0,9).forEach(p=>h.appendChild(a(p)))};c("HEDLAJNER",i.news,"Cel\xE9 (C)","reader"),c("Spr\xE1vy z RSS",i.rss,"Cel\xE9 (V)","readerRss"),r.appendChild(h)}if((t==="news"||t==="magazine")&&i&&i.length){let h=this.button("\u010C\xEDta\u0165 na cel\xFA obrazovku (C)","reader");h.classList.add("mysn-primary"),r.appendChild(h);let c=xt("div","mysn-news");i.slice(0,12).forEach(u=>{let d=xt("a","mysn-news-item",`<span>${le(u.s?u.s+(u.c?", "+u.c:""):u.c||"")}</span>${le(u.t)}`);d.href=u.u,d.target="_blank",d.rel="noopener",c.appendChild(d)}),r.appendChild(c)}let l={chair:"Poh\u013Ead z kresla: pohybom my\u0161i sa rozhliada\u0161, kolieskom pribli\u017Euje\u0161 (klikni, ak sa my\u0161 nezachytila). Vpravo spr\xE1vy: dr\u017E Ctrl a klikni na \u010Dl\xE1nok, C noviny Hedlajner a V spr\xE1vy z RSS na cel\xFA obrazovku. Pri hre o sk\xF3re \u010Das stoj\xED. F7 alebo Enter: sp\xE4\u0165 do hry.",news:"Titulka webu Hedlajner. Klik na titulok otvor\xED \u010Dl\xE1nok. F8, Enter alebo Esc: sp\xE4\u0165 do hry.",magazine:"Spr\xE1vy z RSS kan\xE1lov. Klik na titulok otvor\xED spr\xE1vu. F9, Enter alebo Esc: sp\xE4\u0165 do hry.",rack:"\u0160\xEDpky v\u013Eavo a vpravo vyberaj\xFA t\xE1go. Enter, F2 alebo Esc: sp\xE4\u0165 do hry.",board:"F1, Enter alebo Esc: sp\xE4\u0165 do hry.",score:"F4, Enter alebo Esc: sp\xE4\u0165 do hry.",office:"Kancel\xE1ria: my\u0161ou sa rozhliada\u0161, kolieskom pribli\u017Euje\u0161. Dr\u017E Ctrl: vo\u013En\xE1 my\u0161 na klikanie (aj na mapu hr\xE1\u010Dov). Esc: sp\xE4\u0165 do herne.",bar:"Poh\u013Ead z baru: my\u0161ou sa rozhliada\u0161, kolieskom pribli\u017Euje\u0161. Dr\u017E Ctrl a klikni na telef\xF3n (alebo M): zv\xE4\u010D\u0161\xED sa M\xF4j \xFA\u010Det. Pri hre o sk\xF3re \u010Das stoj\xED. F10 alebo Enter: sp\xE4\u0165 do hry.",mixer:"Mixpult: \u0161\xEDpky v\u013Eavo a vpravo menia stanicu, hore a dole hlasitos\u0165, P zapne alebo vypne r\xE1dio. Zvuk ide z reproduktorov v herni. F9, Enter alebo Esc: sp\xE4\u0165 do hry.",trophies:"Rebr\xED\u010Dek o najlep\u0161ie sk\xF3re: poh\xE1re pre troch najlep\u0161\xEDch, vpravo 4. a\u017E 10. miesto (body a celkov\xFD \u010Das). F8, Enter alebo Esc: sp\xE4\u0165 do hry.",chalk:"Kriedujem \u0161pi\u010Dku t\xE1ga. Fal\u0161e bud\xFA 3 \xFAdery 5x silnej\u0161ie."};if(o.appendChild(xt("span","",l[t]||"")),t!=="chalk"&&t!=="office"){let h=this.button("Sp\xE4\u0165 do hry","back");h.classList.add("mysn-primary"),o.appendChild(h)}r.appendChild(o)}showPower(t){let e=Math.round(t*100);this.powerFill.style.height=e+"%",this.powerKnob.style.top=e+"%",this.powerVal.textContent=e+" %"}sync(t,e){this._lastGame=t,this._lastCam=e;let n=t.stats,i=t.match;this.root.classList.toggle("mysn-online",!!i),this.modeLabel.textContent=this.root.classList.contains("mysn-in-office")?"Liga: kancel\xE1ria":i?i.league?"Ligov\xE1 partia":"Partia":t.solo?"O najlep\u0161ie sk\xF3re":"Tr\xE9ning";let r=t.solo;if(r&&!i){let h=Math.max(0,Math.round(r.time));this.stats.innerHTML=`<span>Body <b>${t.soloScore}</b></span><span>S\xE9ria <b>${r.rules.brk}</b></span><span>Najvy\u0161\u0161ia <b>${r.best}</b></span><span>\u010Cas <b>${Math.floor(h/60)}:${String(h%60).padStart(2,"0")}</b></span><span>Hr\xE1 sa na <b>${le(t.onText())}</b></span><span>Fauly <b>${r.fouls}</b></span><span class="${this._chalk>0?"mysn-chalk-on":"mysn-chalk-off"}">Krieda <b>${this._chalk>0?this._chalk:"F3"}</b></span>`}else if(i&&i.rules){let h=d=>le(String(i.players[d].name).slice(0,16)),c=i.rules,u=d=>c.turn===d&&!c.over?" mysn-turn":"";this.stats.innerHTML=`<span class="mysn-sc${u(i.me)}">${h(i.me)} <b>${c.scores[i.me]}</b></span><span class="mysn-sc${u(1-i.me)}">${h(1-i.me)} <b>${c.scores[1-i.me]}</b>${i.players[1-i.me].online===!1?" <i>mimo</i>":""}</span><span>Na rade <b>${c.turn===i.me?"ty":h(c.turn)}</b></span><span>Hr\xE1 sa na <b>${le(t.onText())}</b></span><span>S\xE9ria <b>${c.brk}</b></span><span class="${this._chalk>0?"mysn-chalk-on":"mysn-chalk-off"}">Krieda <b>${this._chalk>0?this._chalk:"F3"}</b></span>`}else this.stats.innerHTML=`<span>\xDAdery <b>${n.shots}</b></span><span>Spadnut\xE9 <b>${n.points>=0?n.potted:0}</b></span><span>Body <b>${n.points}</b></span><span>S\xE9ria <b>${n.run}</b></span><span>Najlep\u0161ia <b>${n.best}</b></span><span class="${this._chalk>0?"mysn-chalk-on":"mysn-chalk-off"}">Krieda <b>${this._chalk>0?this._chalk:"F3"}</b></span>`;let o=t.state,a=o==="place"?"Posu\u0148 bielu gu\u013Eu v D a potvr\u010F tla\u010Didlom Hotovo.":o==="watch"&&!t.message?"Na rade je s\xFAper.":o==="wait"?"\u010Cak\xE1m na v\xFDsledok s\xFAperovho \xFAderu\u2026":t.message;this.msg.textContent=[this._net,a].filter(Boolean).join("  "),this.msg.classList.toggle("mysn-hidden",!this.msg.textContent);let l=t.state;this.btnPlace.classList.toggle("mysn-hidden",l!=="place"),this.btnSkip.classList.toggle("mysn-hidden",l!=="moving"),this.btnUndo.disabled=l==="moving"||!t.history.length||!!i||!!r,this.btnHand.disabled=l!=="aim"||!!i||!!r,this.btnReset.disabled=!!i||!!r,this.powerBox.classList.toggle("mysn-off",l!=="aim");for(let h of Object.keys(this.camBtns))this.camBtns[h].classList.toggle("mysn-on",h===e)}};var Qo=class{constructor(){this.balls=Fs(),this.physics=new No(this.balls),this.state="aim",this.dir=0,this.history=[],this.respot=!0,this.stats={shots:0,potted:0,points:0,best:0,run:0},this.lastPots=[],this.message="",this.listeners=[]}get cue(){return this.balls[0]}on(t){this.listeners.push(t)}emit(t,e){for(let n of this.listeners)n(t,e)}reset(){let t=Fs();for(let e=0;e<t.length;e++)Object.assign(this.balls[e],t[e]);this.history=[],this.stats={shots:0,potted:0,points:0,best:this.stats.best,run:0},this.state="aim",this.dir=0,this.message="Nov\xE9 rozostavenie.",this.emit("change")}canShoot(){return this.state==="aim"}shoot(t,e=0,n=0){return this.canShoot()?(this.history.push({snap:yr(this.balls),stats:{...this.stats},dir:this.dir}),this.history.length>30&&this.history.shift(),this.physics.events=[],this.physics.firstContact=null,this.lastPots=[],Oo(this.cue,this.dir,t,e,n),this.stats.shots++,this.state="moving",this.message="",this.emit("shot",{power:t}),!0):!1}tick(t){if(this.state!=="moving")return[];let e=this.physics.advance(t),n=this.physics.events;this.physics.events=[];for(let i of n)i.type==="pot"&&this.lastPots.push(this.balls[i.a]);return e||this.settle(),n}settle(){let t=this.lastPots,e=t.includes(this.cue),n=0;for(let r of t)r.kind!=="white"&&(n+=Gn[r.kind].value);let i=t.filter(r=>r.kind!=="white").length;if(this.stats.potted+=i,this.stats.points+=n,i>0&&!e?(this.stats.run+=n,this.stats.best=Math.max(this.stats.best,this.stats.run)):this.stats.run=0,this.respot)for(let r of t)r.kind!=="white"&&r.kind!=="red"&&this.spotColour(r);this.balls.every(r=>r.kind==="white"||!r.on)?this.message="St\xF4l je \u010Dist\xFD. V\xFDborne! Stla\u010D \u201ENov\xE9 rozostavenie\u201C.":e?this.message="Biela spadla. Polo\u017E ju do D.":i?this.message=t.filter(r=>r.kind!=="white").map(r=>Gn[r.kind].name).join(", ")+(i>1?" v jamk\xE1ch.":" v jamke."):this.physics.firstContact||(this.message="Biela netrafila \u017Eiadnu gu\u013Eu."),e?this.startPlace():this.state="aim",this.emit("settle",{pots:t,points:n}),this.emit("change")}spotColour(t){let e=["black","pink","blue","brown","green","yellow"],n=(o,a)=>Fo(this.balls,o,a,t),i=null,r=Sn[t.kind];if(n(r.x,r.z))i=r;else for(let o of e)if(n(Sn[o].x,Sn[o].z)){i=Sn[o];break}if(!i){for(let o=r.x;o<1.78;o+=.002)if(n(o,r.z)){i={x:o,z:r.z};break}}i=i||r,t.p.x=i.x,t.p.z=i.z,t.on=!0,t.potted=null,t.moving=!1,t.v.x=t.v.z=0,t.w.x=t.w.y=t.w.z=0}startPlace(){let t=this.cue;t.on=!0,t.potted=null,t.moving=!1,t.v.x=t.v.z=0,t.w.x=t.w.y=t.w.z=0;let e=[[Xe-.1,0],[Xe-.1,.15],[Xe-.1,-.15],[Xe-.2,0]].find(([n,i])=>Fo(this.balls,n,i,t))||[Xe-.15,.05];t.p.x=e[0],t.p.z=e[1],this.state="place",this.emit("change")}movePlace(t,e){if(this.state!=="place")return!1;let n=Math.min(t,Xe),i=e,r=n-Xe,o=Math.hypot(r,i),a=bi-5e-4;return o>a&&(n=Xe+r/o*a,i=i/o*a),!_u(n,i)||!Fo(this.balls,n,i,this.cue)?!1:(this.cue.p.x=n,this.cue.p.z=i,!0)}confirmPlace(){this.state==="place"&&(this.state="aim",this.message="",this.emit("change"))}ballInHand(){this.state==="aim"&&(this.state="place",this.emit("change"))}undo(){if(this.state==="moving"||!this.history.length)return!1;let t=this.history.pop();return xr(this.balls,t.snap),this.stats=t.stats,this.dir=t.dir,this.state="aim",this.message="\xDAder vr\xE1ten\xFD.",this.emit("change"),!0}finish(){if(this.state!=="moving")return[];let t=[];for(let e=0;e<600&&this.state==="moving";e++)t=t.concat(this.tick(.05));return t}aimAtNearest(){let t=this.cue,e=null,n=1/0;for(let i of this.balls){if(i===t||!i.on)continue;let r=Math.hypot(i.p.x-t.p.x,i.p.z-t.p.z);r<n&&r>2*.02625&&(n=r,e=i)}e&&(this.dir=Math.atan2(e.p.z-t.p.z,e.p.x-t.p.x))}};var Mr={red:1,yellow:2,green:3,brown:4,blue:5,pink:6,black:7},br=["yellow","green","brown","blue","pink","black"],ai={red:"\u010Derven\xE1",yellow:"\u017Elt\xE1",green:"zelen\xE1",brown:"hned\xE1",blue:"modr\xE1",pink:"ru\u017Eov\xE1",black:"\u010Dierna",white:"biela",colour:"farba"};function Ou(s=0){return{scores:[0,0],turn:s,on:"red",brk:0,over:!1,winner:null}}function Ac(s){return s==="red"?"\u010Derven\xE1":s==="colour"?"\u013Eubovo\u013En\xE1 farba":s==="done"?"koniec framu":ai[s]||s}function Rc(s,t){if(s.on==="red"||s.on==="colour")return t*8+(s.on==="colour"?7:0)+27;let e=br.indexOf(s.on);return e<0?0:br.slice(e).reduce((n,i)=>n+Mr[i],0)}function Cc(s,t){let e={...s,scores:[...s.scores]},n=t.first||null,i=t.pots||[],r=i.includes("white"),o=i.filter(p=>p!=="white"),a=t.reds,l=e.turn,h="",c=0,u=4,d=[],f=n&&n!=="white"?n:null,m=p=>{p&&Mr[p]&&(u=Math.max(u,Mr[p]))};if(e.on==="red"){f?f!=="red"&&(h=`Prv\xE1 trafen\xE1 gu\u013Ea mus\xED by\u0165 \u010Derven\xE1 (trafen\xE1 ${ai[f]}).`,m(f)):h="Biela netrafila \u017Eiadnu gu\u013Eu.";for(let p of o)p!=="red"&&(d.push(p),m(p),h=h||`Spadla ${ai[p]}, hralo sa na \u010Derven\xFA.`);!h&&!r&&(c=o.filter(p=>p==="red").length)}else if(e.on==="colour"){let p=f&&f!=="red"?f:null;f?p||(h="Po \u010Dervenej treba trafi\u0165 farbu (trafen\xE1 \u010Derven\xE1)."):h="Biela netrafila \u017Eiadnu gu\u013Eu.",m(p);for(let S of o)S!=="red"&&d.push(S),S!==p&&(m(S==="red"?null:S),h=h||`Spadla ${ai[S]}, nominovan\xE1 bola ${ai[p]}.`);!h&&!r&&o.includes(p)&&(c=Mr[p])}else{let p=e.on;m(p),f?f!==p&&(h=`Prv\xE1 trafen\xE1 gu\u013Ea mus\xED by\u0165 ${ai[p]} (trafen\xE1 ${ai[f]}).`,m(f)):h="Biela netrafila \u017Eiadnu gu\u013Eu.";for(let S of o)m(S),S!==p&&(h=h||`Spadla ${ai[S]}, hralo sa na ${ai[p]}.`);!h&&!r&&o.includes(p)&&(c=Mr[p]);for(let S of o)S!=="red"&&!(S===p&&c>0)&&d.push(S)}r&&!h&&(h="Biela spadla do jamky.");let y="";if(h)e.scores[1-l]+=u,e.turn=1-l,e.brk=0,y=`Faul: ${h} S\xFAper dost\xE1va ${u} ${u<5?"body":"bodov"}.`,(e.on==="red"||e.on==="colour")&&(e.on=a>0?"red":"yellow");else if(c>0){if(e.scores[l]+=c,e.brk+=c,e.on==="red")e.on="colour";else if(e.on==="colour")e.on=a>0?"red":"yellow";else{let p=br.indexOf(e.on);e.on=p<br.length-1?br[p+1]:"done"}y=`+${c}, s\xE9ria ${e.brk}.`}else e.turn=1-l,e.brk=0,(e.on==="red"||e.on==="colour")&&(e.on=a>0?"red":"yellow"),y="Bez bodov, na rade je s\xFAper.";let g=s.on==="black";if(e.on==="done"||g&&h){if(e.scores[0]===e.scores[1])return e.on="black",e.turn=h?e.turn:1-l,d.includes("black")||d.push("black"),y+=" Rem\xEDza, \u010Dierna sa vracia na spot.",{state:e,points:c,foul:!!h,penalty:h?u:0,respot:d,inHand:!0,msg:y};e.over=!0,e.on="done",e.winner=e.scores[0]>e.scores[1]?0:1;let p=d.indexOf("black");p>=0&&d.splice(p,1)}return{state:e,points:c,foul:!!h,penalty:h?u:0,respot:d,inHand:r,msg:y}}var Sr="mySnookerSolo",ta=class extends Qo{constructor(){super(),this.match=null,this.remote=!1,this.onNet=null,this.solo=null,this.onSolo=null}startSolo(t){this.match=null,this.remote=!1,this.history=[];let e=null;if(!t)try{e=JSON.parse(window.localStorage.getItem(Sr)||"null")}catch{e=null}if(e&&e.balls&&e.rules&&!e.done){if(xr(this.balls,e.balls),this.solo={rules:e.rules,time:e.time||0,shots:e.shots||0,fouls:e.fouls||0,best:e.best||0,done:!1},this.message="Pokra\u010Duje\u0161 v rozohranom frame.",e.inHand){this.startPlace();return}this.state="aim"}else{let n=Fs();for(let i=0;i<n.length;i++)Object.assign(this.balls[i],n[i]);this.solo={rules:Ou(0),time:0,shots:0,fouls:0,best:0,done:!1},this.message="Nov\xFD frame: potop \u010Do najviac bodov. Rozb\xEDja\u0161 z D.",this.saveSolo(!0),this.startPlace();return}this.aimAtNearest(),this.emit("change")}get soloScore(){let t=this.solo&&this.solo.rules;return t?Math.max(0,t.scores[0]-t.scores[1]):0}saveSolo(t){if(this.solo)try{if(this.solo.done){window.localStorage.removeItem(Sr);return}let e=this.solo;window.localStorage.setItem(Sr,JSON.stringify({balls:yr(this.balls),rules:e.rules,time:Math.round(e.time),shots:e.shots,fouls:e.fouls,best:e.best,inHand:!!t}))}catch{}}saveSoloTime(){let t=this.solo;if(!(!t||t.done))try{let e=JSON.parse(window.localStorage.getItem(Sr)||"null");e&&!e.done&&(e.time=Math.round(t.time),window.localStorage.setItem(Sr,JSON.stringify(e)))}catch{}}stopSolo(){this.solo&&this.saveSolo(this.state==="place"),this.solo=null,super.reset()}settleSolo(){let t=this.solo,e=this.lastPots.map(l=>l.kind),n=this.balls.filter(l=>l.kind==="red"&&l.on).length,i=this.physics.firstContact,r=Cc(t.rules,{first:i?i.kind:null,pots:e,reds:n});for(let l of r.respot){let h=this.balls.find(c=>c.kind===l);h&&this.spotColour(h)}let o={...r.state,turn:0};r.foul&&(t.fouls++,o.brk=0),t.rules=o,t.shots++,t.best=Math.max(t.best,o.brk);let a=this.soloScore;if(o.over||o.on==="done"){t.done=!0,t.rules.over=!0,this.state="over",this.message=`Frame je dohran\xFD: ${a} ${a===1?"bod":a<5&&a>1?"body":"bodov"} za ${Pc(t.time)}, najvy\u0161\u0161ia s\xE9ria ${t.best}.`,this.saveSolo(!1),this.emit("settle",{pots:this.lastPots,points:r.points}),this.emit("change"),this.onSolo&&this.onSolo({points:a,seconds:Math.round(t.time),shots:t.shots,fouls:t.fouls,brk:t.best});return}if(this.message=r.points>0?`+${r.points}, s\xE9ria ${o.brk}.`:"Bez bodov, s\xE9ria sa skon\u010Dila.",r.foul&&(this.message=`Faul: ${r.msg.replace(/^Faul: /,"").replace(/ Súper dostáva (\d+) (body|bodov)\./,"")} M\xEDnus ${r.penalty} ${r.penalty<5?"body":"bodov"}.`),this.emit("settle",{pots:this.lastPots,points:r.points}),r.inHand){this.saveSolo(!0),this.startPlace();return}this.state="aim",this.saveSolo(!1),this.emit("change")}get online(){return!!this.match}get myTurn(){let t=this.match;return!t||t.turn===t.me&&!t.rules.over}canShoot(){return super.canShoot()&&(!this.match||this.myTurn&&!this.remote&&this.match.status==="active")}startMatch(t){this.solo&&this.stopSolo(),this.match={id:t.id,me:t.me,seq:-1,turn:0,rules:null,inHand:!1,players:t.players,status:t.status,league:!!t.league,best:[0,0]},this.history=[],this.remote=!1,this.applyState(t.state,t.seq)}endMatch(){this.match=null,this.solo=null,this.remote=!1,this.reset()}applyState(t,e){let n=this.match;if(t){if(t.balls)xr(this.balls,t.balls);else{let i=Fs();for(let r=0;r<i.length;r++)Object.assign(this.balls[r],i[r])}for(let i of this.balls)i.moving=!1;if(n.seq=e,n.rules={...t.rules,scores:[...t.rules.scores]},n.turn=n.rules.turn,n.inHand=!!t.inHand,n.best=Array.isArray(t.best)?[...t.best]:[0,0],n.last=t.last||null,this.remote=!1,this.message=t.msg||"",n.rules.over)this.state="over";else if(n.turn===n.me){if(n.inHand){this.startPlace();return}this.state="aim",this.aimAtNearest()}else n.inHand&&this.startPlace(),this.state="watch";this.emit("change")}}shoot(t,e=0,n=0){if(!this.canShoot())return!1;let i=this.cue,r={dir:this.dir,power:t,side:e,top:n,cx:i.p.x,cz:i.p.z};return super.shoot(t,e,n)?(this.match&&this.onNet&&this.onNet("shot",{seq:this.match.seq+1,shot:r}),!0):!1}playRemote(t,e=!1){let n=this.cue;n.on=!0,n.potted=null,n.p.x=t.cx,n.p.z=t.cz,this.dir=t.dir,this.physics.events=[],this.physics.firstContact=null,this.lastPots=[],Oo(n,t.dir,t.power,t.side,t.top),this.remote=!e,this.state="moving",this.message="",this.emit("shot",{power:t.power})}settle(){if(this.solo&&!this.match){this.settleSolo();return}if(!this.match){super.settle();return}if(this.remote){this.remote=!1,this.state="wait",this.emit("change");return}let t=this.match,e=this.lastPots.map(h=>h.kind),n=this.balls.filter(h=>h.kind==="red"&&h.on).length,i=this.physics.firstContact,r=Cc(t.rules,{first:i?i.kind:null,pots:e,reds:n});for(let h of r.respot){let c=this.balls.find(u=>u.kind===h);c&&this.spotColour(c)}r.inHand&&(this.cue.on=!1);let o=t.players.map(h=>h.name),a={balls:yr(this.balls),rules:r.state,inHand:r.inHand,msg:`${o[t.me]}: ${r.msg}`+(r.state.over?` Koniec partie, v\xED\u0165az: ${o[r.state.winner]}.`:r.state.turn!==t.me?` Na rade je ${o[r.state.turn]}.`:""),last:{by:t.me,points:r.points,foul:r.foul,penalty:r.penalty,brk:r.state.brk},best:(()=>{let h=[...t.best||[0,0]];return h[t.me]=Math.max(h[t.me]||0,r.state.turn===t.me?r.state.brk:t.rules.brk+r.points),h})()},l=t.seq+1;this.applyState(a,l),this.emit("settle",{pots:this.lastPots,points:r.points}),this.onNet&&this.onNet("settle",{seq:l,state:a,points:r.points,foul:r.foul})}onText(){return this.solo?Ac(this.solo.rules.on):this.match&&this.match.rules?Ac(this.match.rules.on):""}undo(){return this.match||this.solo?!1:super.undo()}reset(){this.match||this.solo||super.reset()}ballInHand(){!this.match&&!this.solo&&super.ballInHand()}};function Pc(s){let t=Math.max(0,Math.round(s)),e=Math.floor(t/3600),n=Math.floor(t%3600/60),i=String(t%60).padStart(2,"0");return e?`${e}:${String(n).padStart(2,"0")}:${i}`:`${n}:${i}`}var Ic=class{constructor(t){this.base=t.restUrl||"/wp-json/my-snooker/v1/",this.nonce=t.nonce||"",this.down=!1}async call(t,e,n="POST"){let i;try{i=await fetch(this.base+t,{method:n,credentials:"same-origin",cache:"no-store",headers:{"Content-Type":"application/json","X-WP-Nonce":this.nonce},body:e?JSON.stringify(e):void 0})}catch{this.down=!0;let a=new Error("Spojenie so serverom sa preru\u0161ilo.");throw a.net=!0,a}this.down=!1;let r=await i.json().catch(()=>null);if(!i.ok){let o=new Error(r&&r.message||"Chyba servera "+i.status);throw o.status=i.status,o}return r}},ea=class{constructor(t,e,n){this.cfg=t,this.net=new Ic(t),this.game=e,this.hooks=n,this.data={live:[],invites:[],outgoing:null,paused:[]},this.lobbyOpen=!1,this.matchId=0,this.info=null,this.queue=[],this.sending=!1,this.played=new Set,this.pendingInfo=null,this.lastAimv=-1,this.aimTarget=null,this._aimSent="",this._aimT=0,this._pollT=0,this._polling=!1,this.oppOnline=!0,e.onNet=(i,r)=>this.send(i,r),this.ping(),this._pingTimer=setInterval(()=>this.ping(),5e3)}get inMatch(){return!!this.game.match}async ping(){try{let t=await this.net.call("ping",{state:this.inMatch?"match":this.lobbyOpen?"lobby":"training"});t.nonce&&(this.net.nonce=t.nonce);let e=(this.data.invites||[]).map(i=>i.id).join(",");this.data=t;let n=(t.invites||[]).map(i=>i.id).join(",");n&&n!==e&&!this.inMatch&&this.hooks.invite(t.invites[0]),t.outgoing&&t.outgoing.status==="declined"&&this._waitFor===t.outgoing.id&&(this._waitFor=0,this.hooks.toast(`${t.outgoing.to.name}: pozv\xE1nka odmietnut\xE1.`)),t.match&&!this.inMatch&&this.join(t.match),this.hooks.lobby(t)}catch{this.hooks.status()}}async invite(t,e=!1){try{let n=await this.net.call("invite",{user:t,league:e?1:0});this._waitFor=n.id,await this.ping()}catch(n){this.hooks.toast(n.message)}}async cancelInvite(){let t=this.data.outgoing;t&&(this._waitFor=0,await this.net.call("cancel",{id:t.id}).catch(()=>null),await this.ping())}async answer(t,e){try{await this.net.call("answer",{id:t,accept:e?1:0}),this.data.invites=(this.data.invites||[]).filter(n=>n.id!==t),e?await this.join(t):await this.ping()}catch(n){this.hooks.toast(n.message),this.ping()}}async resume(t){try{await this.net.call("resume",{id:t}),await this.join(t)}catch(e){this.hooks.toast(e.message)}}async leave(t){let e=this.matchId;e&&(await this.flush(),await this.net.call("leave",{id:e,mode:t}).catch(()=>null),this.stopMatch(t==="resign"?"Partia je vzdan\xE1.":"Partia je preru\u0161en\xE1. Pokra\u010Dova\u0165 sa d\xE1 v ponuke Hra\u0165 s priate\u013Eom."))}async join(t){if(!this._joining){this._joining=!0;try{let e=await this.net.call("match/"+t+"?t="+Date.now(),null,"GET");if(e.status!=="active"){this.hooks.toast(e.status==="paused"?"Partia je preru\u0161en\xE1.":"Partia u\u017E skon\u010Dila.");return}this.matchId=e.id,this.info=e,this.played=new Set,this.queue=[],this.lastAimv=e.aimv,this.game.startMatch(e),this.hooks.started(e),this.recover(e),this.oppOnline=e.players[1-e.me].online}catch(e){this.hooks.toast(e.message)}finally{this._joining=!1}}}recover(t){let e=t.shot;e&&e.seq===t.seq+1&&(this.played.add(e.seq),this.game.playRemote(e,e.by===t.me))}stopMatch(t){let e=(t||"")+(this.stopMatchText||"");this.stopMatchText="",this.matchId=0,this.info=null,this.queue=[],this.aimTarget=null,this.game.endMatch(),this.hooks.ended(e)}send(t,e){this.matchId&&(this.queue.push({type:t,d:{id:this.matchId,...e}}),this.flush())}async flush(){return this.sending?this._flushP:(this.sending=!0,this._flushP=(async()=>{for(;this.queue.length;){let t=this.queue[0];try{await this.net.call(t.type,t.d),this.queue.shift()}catch(e){e.net||e.status&&e.status>=500?(this.hooks.status(),await new Promise(n=>setTimeout(n,2e3))):this.queue.shift()}}this.sending=!1,this.hooks.status()})(),this._flushP)}update(t,e){if(!this.matchId)return;let n=this.game,i=performance.now(),r=this._lastNow?i-this._lastNow:0;this._lastNow=i,this._pollT+=r;let o=n.state==="watch"||n.state==="wait"||n.remote;if(!this._polling&&this._pollT>=(o?700:2500)&&(this._pollT=0,this.poll()),this._aimT+=r,e&&n.myTurn&&(n.state==="aim"||n.state==="place")&&this._aimT>=300){let a={seq:n.match.seq,dir:+e.dir.toFixed(4),cx:+e.cx.toFixed(4),cz:+e.cz.toFixed(4),pull:+e.pull.toFixed(3),side:+e.side.toFixed(2),top:+e.top.toFixed(2),place:n.state==="place"?1:0},l=JSON.stringify(a);l!==this._aimSent&&(this._aimT=0,this._aimSent=l,this.net.call("aim",{id:this.matchId,aim:a}).catch(()=>null))}if(this.pendingInfo&&n.state==="wait"){let a=this.pendingInfo;this.pendingInfo=null,this.applyInfo(a)}}async poll(){this._polling=!0;try{let t=await this.net.call("match/"+this.matchId+"?t="+Date.now(),null,"GET");this.applyInfo(t)}catch(t){(t.status===403||t.status===404)&&this.stopMatch("Partia sa nena\u0161la."),this.hooks.status()}finally{this._polling=!1}}applyInfo(t){let e=this.game;if(!e.match||t.id!==this.matchId)return;this.info=t;let n=t.players[1-t.me];if(n.online!==this.oppOnline&&(this.oppOnline=n.online,this.hooks.status()),e.match.players=t.players,e.match.status=t.status,t.status==="finished"&&!(t.seq>e.match.seq)){let i=t.winner===t.players[t.me].id,r=t.league?` Liga: ${i?"+":"-"}${Math.max(0,t.delta)} bodov.`:"";this.lastLeague=!!t.league,this.stopMatchText=r,this.stopMatch(t.result==="resign"?i?`${n.name} sa vzd\xE1va partie. V\xED\u0165azstvo je tvoje!`:"Partia je vzdan\xE1.":i?`V\xED\u0165azstvo je tvoje! Sk\xF3re ${t.scores[t.me]} : ${t.scores[1-t.me]}.`:`V\xED\u0165az partie: ${n.name}, sk\xF3re ${t.scores[1-t.me]} : ${t.scores[t.me]}.`);return}if(t.status==="paused"){this.stopMatch(`Partia je preru\u0161en\xE1 (${this.oppOnline?"s\xFAper ju preru\u0161il":"s\xFAper dlho neodpovedal"}). Dokon\u010Di\u0165 sa d\xE1 v ponuke Hra\u0165 s priate\u013Eom, Rozohran\xE9 partie.`);return}if(t.seq>e.match.seq){if(e.state==="moving"){this.pendingInfo=t;return}if(this.queue.length)return;this.aimTarget=null,e.applyState(t.state,t.seq),t.status==="finished"&&this.applyInfo(t);return}if(t.shot&&t.shot.seq===e.match.seq+1&&t.shot.by!==t.me&&!this.played.has(t.shot.seq)&&e.state==="watch"){this.played.add(t.shot.seq),this.aimTarget=null,e.playRemote(t.shot,!1);return}t.aim&&t.aimv!==this.lastAimv&&e.state==="watch"&&t.aim.seq===e.match.seq&&(this.lastAimv=t.aimv,this.aimTarget=t.aim)}async league(){try{return await this.net.call("league?t="+Date.now(),null,"GET")}catch{return null}}async leagueArchive(){try{return await this.net.call("league/archive?t="+Date.now(),null,"GET")}catch{return null}}async scores(){try{return await this.net.call("scores?t="+Date.now(),null,"GET")}catch{return null}}async saveScore(t){for(let e=0;e<5;e++)try{return await this.net.call("score",t)}catch(n){if(!n.net)return{error:n.message};await new Promise(i=>setTimeout(i,3e3))}return{error:"Sk\xF3re sa nepodarilo ulo\u017Ei\u0165, spojenie so serverom nefunguje."}}statusText(){return this.net.down?"Spojenie so serverom sa preru\u0161ilo, sk\xFA\u0161am znova. Partia je ulo\u017Een\xE1.":this.inMatch&&!this.oppOnline?"S\xFAper je mimo hry, \u010Dak\xE1m na jeho n\xE1vrat. Po 10 min\xFAtach sa partia preru\u0161\xED a d\xE1 sa v nej pokra\u010Dova\u0165 nesk\xF4r.":""}};var Bu="mySnookerSettings",zu=.5;function ax(){let t={lines:!1,quality:/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)?"low":"high",volume:.8,respot:!0,contact:!0,camera:"cue",cue:"club"};try{let e=window.localStorage.getItem(Bu);if(e)return{...t,...JSON.parse(e)}}catch{}return t}function Er(s){try{window.localStorage.setItem(Bu,JSON.stringify(s))}catch{}}function lx(){try{let s=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(s.getContext("webgl2")||s.getContext("webgl")))}catch{return!1}}function cx(s,t={}){if(!lx())return s.innerHTML='<div class="mysn-nogl">Tento prehliada\u010D nepodporuje 3D grafiku (WebGL). Sk\xFAs aktu\xE1lny Chrome, Firefox, Edge alebo Safari.</div>',null;let e=ax();delete e.guide,e.lines=e.lines===!0;let n=e.quality==="high",i=new mo({antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,n?2:1.25)),i.outputColorSpace=oe,i.toneMapping=rc,i.toneMappingExposure=1.05,i.shadowMap.enabled=n,i.shadowMap.type=sc,i.domElement.className="mysn-canvas",s.appendChild(i.domElement);let r=new As;Ru(r,e.quality);let o=new Set(r.children),a=wu(r,e.quality,{news:t.news,rss:t.rss,site:t.site,user:t.user}),l=r.children.filter(z=>!o.has(z)),h=Au(i);r.add(h.group);let c=new ta,u=t.user||null;c.respot=!!e.respot,c.aimAtNearest();let d=new Ts(i),f=d.fromScene(new Uo,.04).texture;d.dispose();let m=new Wo(r,c.balls,e.quality,f),y=Object.assign({selected:["club","short","break","soft"],custom:{}},e.myCues||{}),g=z=>{let P=Mu(z),I=y.custom[P.id];if(!I)return P;let j=Math.max(-.05,Math.min(.05,I.power||0)),nt=Math.max(-.1,Math.min(.1,I.grip||0));return{...P,name:I.name?String(I.name).slice(0,24):P.name,power:Math.min(1,P.power*(1+j)),grip:P.grip*(1+nt),colors:{shaft:I.shaft||P.colors.shaft,butt:I.butt||P.colors.butt}}},p=g(e.cue),S=new Xo(r,p);a.selectCue(p.id);let v=new $o(r),x=new Zo(i);e.camera="cue",x.setMode("cue");let U=new Ko;U.setVolume(e.volume);let C=new Set(r.children),D=Cu(r),O=[...l,...r.children.filter(z=>!C.has(z))];for(let z of o)z.isMesh&&z.geometry&&z.geometry.type==="PlaneGeometry"&&z.rotation.x<-1&&O.push(z);let w=Pu(r,e.quality),_=Iu(r),T="",$=null,q=()=>({office:{league:Mt,mode:T,countries:Sc,cues:Ke.map(z=>g(z.id)),myCues:y,cue:$,user:u}}),X=()=>{_.setRack(Ke.map(z=>g(z.id)),y.selected),H==="office"&&N.showView("office",Ke,p.id,q())},V=z=>{e.myCues=y,Er(e),p&&y.custom[p.id]&&(p=g(p.id),S.setSpec(p),pt.setCue(p),N.setCueInfo(p)),z?_.setRack(Ke.map(P=>g(P.id)),y.selected):X()},B=async()=>{if(!ht)return null;let z=await ht.league();if(z){Mt=z,a.setLeague(z),_.setBoards(z,[]);let P=[];for(let I of[1,2,3,4])for(let j of z.leagues&&z.leagues[I]||[]){let nt=Ec(j.country);if(nt){let ut=P.filter(wt=>wt.code===nt.code).length;P.push({id:j.user.id,name:j.user.name,league:j.league,points:j.points,rank:j.rank,code:nt.code,lat:nt.lat+ut%3*1.6,lon:nt.lon+Math.floor(ut/3)*2.2+ut%3*1.2})}}K=P,_.setMap(P,u&&u.id),X()}return z},K=[],Y=new Set(["chair","bar","office"]),ot="home",ft=document.createElement("div");ft.className="mysn-fade",s.appendChild(ft);let vt=z=>{z!==ot&&(ft.classList.add("mysn-on"),setTimeout(()=>{ot=z;let P=z==="league";for(let I of O)I.visible=!P;w.root.visible=P,h.setFelt(P?"blue":"green"),r.background.setHex(P?131846:790292),P&&H&&Ot(),Qt(),Ft(),setTimeout(()=>ft.classList.remove("mysn-on"),60)},350))},Ft=()=>{let z=c.match,P=Mt,I=P&&P.season?`${P.season.name} \xB7 do konca ${P.season.daysLeft} dn\xED`:"My Snooker liga";z&&z.rules?w.setScreen({title:z.league?"LIGOV\xC1 PARTIA":"PARTIA",names:z.players.map(j=>j.name),scores:z.rules.scores,turn:z.rules.over?-1:z.rules.turn,brk:z.rules.brk,on:c.onText(),footer:I}):w.setScreen({title:"MY SNOOKER LIGA",idle:P&&P.me?`${P.me.league}. liga \xB7 ${P.me.rank}. miesto \xB7 ${P.me.points} bodov`:"Vyzvi hr\xE1\u010Da z ligy",footer:I})},Mt=null,Q=-1,F=new Go(t.radio,()=>(U.unlock(),U.ctx));e.radio&&typeof e.radio=="object"&&(Object.assign(F.params,e.radio.params||{}),F.index=Math.min(F.stations.length-1,e.radio.index??-1));let mt=z=>{D.setControls(F.params,F.station?F.station.name:"",F.on),e.radio={params:F.params,index:F.index},Er(e),H==="mixer"&&z!=="param"&&N.showView("mixer",Ke,p.id,{radio:F})};F.onChange=mt,D.setControls(F.params,F.station?F.station.name:"",!1);let k=document.createElement("div");s.appendChild(k);let St={side:0,top:0},gt=!1,Ct=!1,Lt=!1,L=!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),H=null,E={yaw:0,pitch:0},_t=!1,at=3,Tt=.2,ct=0,Gt=-1,Nt=0,A={chalkFreeze:null},M={s:.022,h:.0115,d:.009},J=new se;{let z=new Et({color:16052970,roughness:.8}),P=new Et({color:3108822,roughness:.95}),I=(ne,$t,Wt,_e,De,ve,tn)=>{let b=new Pt(new Rt(ne,$t,Wt),tn);b.position.set(_e,De,ve),J.add(b)},{s:j,h:nt,d:ut}=M,wt=-j/2+ut/2;I(j-ut,j,j,ut/2,0,0,z),I(ut,(j-nt)/2,j,wt,(j+nt)/4,0,z),I(ut,(j-nt)/2,j,wt,-(j+nt)/4,0,z),I(ut,nt,(j-nt)/2,wt,0,(j+nt)/4,z),I(ut,nt,(j-nt)/2,wt,0,-(j+nt)/4,z),I(.0012,nt,nt,-j/2+ut-6e-4,0,0,P);let ee=8e-4;I(ut,ee,nt,wt,nt/2-ee/2,0,P),I(ut,ee,nt,wt,-nt/2+ee/2,0,P),I(ut,nt,ee,wt,0,nt/2-ee/2,P),I(ut,nt,ee,wt,0,-nt/2+ee/2,P)}J.visible=!1,J.rotation.order="YXZ";let st={up:.1,back:.22};r.add(J);let lt=()=>{let z=c.match,P=z&&z.rules?{names:z.players.map(ut=>String(ut.name).slice(0,18)),scores:z.rules.scores,turn:z.rules.over?-1:z.rules.turn,brk:z.rules.brk,on:c.onText(),left:Rc(z.rules,c.balls.filter(ut=>ut.kind==="red"&&ut.on).length)}:null,I=c.solo,j=c.balls.filter(ut=>ut.kind==="red"&&ut.on).length,nt=I&&!z?[["Body",c.soloScore],["S\xE9ria / najvy\u0161\u0161ia",`${I.rules.brk} / ${I.best}`],["\u010Cas",Pc(I.time)],["Hr\xE1 sa na",c.onText()],["Zost\xE1va na stole",Rc(I.rules,j)]]:null;a.updateScore(c.stats,{cue:p.name,chalk:ct,mode:P?"Partia cez internet":I?"O najlep\u0161ie sk\xF3re":"Tr\xE9ning",match:P,rows:nt})},it=z=>{if(H===z){Ot();return}if(!(c.state==="moving"||Gt>=0)&&!(z==="chalk"&&c.state!=="aim")){if(H==="office"&&z!=="office"&&(x.noClamp=!1,x.snapNext=!0,x.minViewZoom=1,x.setViewZoom(1),N.openLeague(!1)),H=z,pt.blocked=!0,z!=="chalk"&&!Y.has(z)&&pt.uncapture(),N.showMenu(!1),z==="chalk"){let P=Math.cos(c.dir),I=Math.sin(c.dir),j=S.pivot.position.clone().add(new R(-P*st.back,st.up,-I*st.back)),nt=j.clone().add(new R(-I*.22-P*.08,.09,P*.22-I*.08));x.setView(nt,j),Gt=0,Nt=performance.now(),J.visible=!0}else{let P=z==="mixer"?D.view:z==="office"?_.seat:a[z];if(x.setView(P.pos,P.look.clone()),z==="office"&&(x.noClamp=!0,x.jump(),x.minViewZoom=.85,x.setViewZoom(.85)),Y.has(z)){let I=P.look.clone().sub(P.pos);E.yaw=Math.atan2(I.z,I.x),E.pitch=Math.atan2(I.y,Math.hypot(I.x,I.z))}}z==="trophies"&&kt(),N.showView(z,Ke,p.id,z==="office"?q():z==="mixer"?{radio:F}:z==="magazine"?a.rssItems:z==="chair"?{news:a.newsItems,rss:a.rssItems}:a.newsItems)}},Ot=()=>{if(!H)return;let z=H;H=null,pt.blocked=!u,x.minViewZoom=1,x.setViewZoom(1),z==="office"&&(x.noClamp=!1,x.snapNext=!0,N.openLeague(!1)),N.toggleReader(null),N.openPhone(!1),Gt=-1,J.visible=!1,x.setMode(c.state==="place"||_t?"top":"cue"),N.showView(null),pt.capture()},It=z=>{p=g(z),e.cue=p.id,Er(e),S.setSpec(p),pt.setCue(p),a.selectCue(p.id),N.showView(H,Ke,p.id),N.setCueInfo(p),lt()},Bt=z=>{let P=z*p.power,I=p.grip*(ct>0?1:Tt);c.shoot(P,St.side*I,St.top*I)&&(ct>0&&ct--,N.setChalk(ct),lt(),U.cue(P),N.sync(c,x.mode))},Xt=z=>{gt=!1,x.setMode(z),e.camera=z,Er(e),N.sync(c,x.mode)},dt={unlock:()=>U.unlock(),camera:z=>Xt(z),undo:()=>c.undo(),hand:()=>c.ballInHand(),fine:z=>{c.state==="aim"&&(c.dir+=z*.05*Math.PI/180)},skip:()=>{for(let z of c.finish())z.type==="pot"&&U.pot()},reset:()=>{c.reset(),c.aimAtNearest()},place:()=>{c.confirmPlace(),c.aimAtNearest()},resume:()=>{if(c.solo&&c.solo.done){dt.training();return}N.showMenu(!1),N.openLobby(!1),pt.capture()},solo:()=>Kt(!1),soloNew:()=>Kt(!0),training:()=>{c.stopSolo(),c.aimAtNearest(),Qt(),N.showMenu(!1),pt.capture()},league:async()=>{ht&&(N.showMenu(!1),N.openLobby(!1),N.openLeague(!1),ft.classList.add("mysn-on"),setTimeout(()=>{it("office"),pt.capture(),setTimeout(()=>ft.classList.remove("mysn-on"),80)},300),await B())},leagueTables:()=>{N.openLeague(!0),N.renderLeague(Mt)},officeLeave:()=>{ft.classList.add("mysn-on"),setTimeout(()=>{Ot(),setTimeout(()=>ft.classList.remove("mysn-on"),80)},300)},register:async z=>{let P=await ht.net.call("league/register",z).catch(I=>({error:I.message}));P&&!P.error?(Mt=P,N.toast(z.edit?"\xDAdaje hr\xE1\u010Da s\xFA ulo\u017Een\xE9.":"Vitaj v lige! Za\u010D\xEDna\u0161 so 147 bodmi."),T="",await B()):N.toast(P&&P.error||"Registr\xE1cia sa nepodarila.")},officeEdit:()=>{T="edit",X()},myCues:()=>{T="cues",X()},officeHome:()=>{T="",X()},cueSelect:z=>{let P=y.selected,I=P.indexOf(z);I>=0?P.splice(I,1):P.length<4?P.push(z):N.toast("Do z\xE1pasu si m\xF4\u017Ee\u0161 zobra\u0165 najviac 4 t\xE1g\xE1. Najprv jedno odober."),V()},cueEdit:z=>{$=z,X()},cueCustom:({id:z,k:P,v:I})=>{let j=y.custom[z]=y.custom[z]||{};j[P]=I,V(!0)},leagueTab:z=>{N._leagueTab=z,N.renderLeague(Mt)},leagueInvite:async z=>{await ht.invite(z,!0),N.renderLeague(Mt)},leagueArchive:async()=>{N.openLeague(!0);let z=await ht.leagueArchive();N.renderLeague(Mt,z||{seasons:[]})},leagueClose:()=>{N.openLeague(!1),H!=="office"&&N.showMenu(!0,!0)},leagueHome:()=>{N.openLeague(!1),H!=="office"&&(c.match||vt("home"),N.showMenu(!1),pt.capture())},leaderboard:()=>{N.showMenu(!1),H!=="trophies"&&it("trophies")},trophies:()=>{N.showLeaderboard(null),it("trophies"),de()},partyNext:()=>{N.celebrate(null),N.showMenu(!1),pt.capture()},partyBoard:()=>{N.celebrate(null),dt.leaderboard()},leaderboardClose:()=>{N.showLeaderboard(null),N.menuOpen()||pt.capture()},lobby:()=>{ht&&(ht.lobbyOpen=!0,N.openLobby(!0),ht.ping())},lobbyClose:()=>{ht&&(ht.lobbyOpen=!1),N.openLobby(!1)},invite:z=>ht&&ht.invite(z),cancelInvite:()=>ht&&ht.cancelInvite(),accept:z=>{N.hideToast(),ht&&ht.answer(z,!0)},decline:z=>{N.hideToast(),ht&&ht.answer(z,!1)},resumeMatch:z=>ht&&ht.resume(z),pauseMatch:()=>ht&&ht.leave("pause"),resign:()=>ht&&ht.leave("resign"),home:()=>{window.location.href=t.homeUrl||"/"},settings:()=>N.toggle(N.panel),help:()=>it("board"),board:()=>it("board"),rack:()=>it("rack"),score:()=>it("score"),chair:()=>it("chair"),news:()=>it("news"),magazine:()=>it("magazine"),reader:()=>N.toggleReader(H==="magazine"?"rss":"news",H==="magazine"?a.rssItems:a.newsItems),readerRss:()=>N.toggleReader("rss",a.rssItems),chalk:()=>it("chalk"),mixer:()=>it("mixer"),bar:()=>it("bar"),leagueBoard:async()=>{ot!=="league"&&(it("leagueBoard"),ht&&(Mt=await ht.league()||Mt,a.setLeague(Mt)))},phone:()=>N.openPhone(!0),phoneClose:()=>{N.openPhone(!1),H==="bar"&&pt.capture()},radioToggle:()=>F.toggle(),radioPick:z=>F.play(z),radioSet:({k:z,v:P})=>F.set(z,P),top:()=>{H||(_t=!_t,gt=!1,x.setMode(_t||c.state==="place"?"top":"cue"))},back:()=>Ot(),cuePick:z=>It(z),setting:({k:z,v:P})=>{e[z]=P,z==="volume"&&U.setVolume(P),z==="respot"&&(c.respot=!!P),Er(e)}},N=new Jo(k,{homeUrl:t.homeUrl,user:u,loginUrl:t.loginUrl,accountUrl:t.accountUrl,venue:()=>ot,settings:e,onAction:(z,P)=>{U.unlock(),dt[z]&&dt[z](P),N.sync(c,x.mode)},onPower:(z,P)=>pt.setPower(z,P),onRelease:()=>pt.release(),onSpin:(z,P)=>St={side:z,top:P}}),pt=new jo(i.domElement,x,c,{unlock:()=>U.unlock(),shoot:Bt,spinReset:()=>N.setSpin(0,0),spin:(z,P)=>N.setSpin(Math.max(-1,Math.min(1,N.side+z)),Math.max(-1,Math.min(1,N.top+P))),lock:z=>{if(N.setLock(z),z&&!u){pt.uncapture();return}z?(Ct=!0,Lt=!1,N.setFree(!1),N.showMenu(!1)):L&&!H&&!Lt&&!N.partyOpen()&&N.showMenu(!0,Ct)},stroke:z=>N.setStroke(z),look:(z,P)=>{if(!Y.has(H)||Lt)return;let I=.0025/(x.viewZoom||1);E.yaw+=z*I,E.pitch=Math.max(-1.2,Math.min(.9,E.pitch-P*I));let j=Math.cos(E.pitch);x.viewLook.copy(x.viewPos).add(new R(Math.cos(E.yaw)*j,Math.sin(E.pitch),Math.sin(E.yaw)*j))},viewWheel:z=>{Y.has(H)&&x.setViewZoom((x.viewZoom||1)*Math.pow(.85,z))},viewDown:z=>{if(H==="chair"&&z.button===0&&pt.capture(),H==="office"&&z.button===0){let P=i.domElement.getBoundingClientRect(),I=new Xi,j=pt.captured?new bt(0,0):new bt((z.clientX-P.left)/P.width*2-1,-((z.clientY-P.top)/P.height)*2+1);I.setFromCamera(j,x.camera);let nt=I.intersectObject(_.map,!1)[0];if(nt){let ut=_.mapLonLat(nt.point),wt=null,ee=7;for(let ne of K){let $t=Math.hypot(ne.lon-ut.lon,ne.lat-ut.lat);$t<ee&&(ee=$t,wt=ne)}if(wt){let ne=Ec(wt.code);N.toast(`${wt.name} (${ne?ne.name:""}): ${wt.rank}. miesto, ${wt.league}. liga, ${wt.points} bodov.`)}}else pt.captured||pt.capture()}if(H==="bar"&&z.button===0){let P=i.domElement.getBoundingClientRect(),I=new Xi,j=pt.captured?new bt(0,0):new bt((z.clientX-P.left)/P.width*2-1,-((z.clientY-P.top)/P.height)*2+1);I.setFromCamera(j,x.camera),I.intersectObject(a.phone,!1).length?(pt.uncapture(),N.openPhone(!0)):pt.captured||pt.capture()}},key:z=>{let P=z.toLowerCase();if(!u)return!0;if(P==="ctrl-down"||P==="ctrl-up")return H&&!Y.has(H)||(P==="ctrl-down"&&pt.captured?(Lt=!0,pt.uncapture()):P==="ctrl-up"&&Lt&&N.phoneOpen()||P==="ctrl-up"&&Lt&&document.activeElement&&/input|select|textarea/i.test(document.activeElement.tagName)?Lt=!1:P==="ctrl-up"&&Lt&&(Lt=!1,N.showMenu(!1),pt.capture()),N.setFree(Lt)),!0;if(P==="f6")return U.unlock(),a.toggleDoor(),U.doorCreak(),!0;if((P==="escape"||P==="enter")&&N.partyOpen())return N.opts.onAction("partyNext"),!0;if(P==="escape"&&N.leaderboardOpen())return N.opts.onAction("leaderboardClose"),!0;let I={f1:"board",f2:"rack",f3:"chalk",f4:"score",f7:"chair",f8:"trophies",f9:"mixer",f10:"bar",f12:"leagueBoard"};if(I[P])return N.opts.onAction(I[P]),!0;if(P==="tab")return N.opts.onAction("top"),!0;if(H){if(P==="escape"&&N.phoneOpen())return dt.phoneClose(),!0;if(H==="bar"&&P==="m")return N.phoneOpen()?dt.phoneClose():(pt.uncapture(),N.openPhone(!0)),!0;if(H==="mixer"){if(P==="arrowleft"||P==="arrowright")return F.next(P==="arrowleft"?-1:1),!0;if(P==="arrowup"||P==="arrowdown")return F.set("vol",F.params.vol+(P==="arrowup"?.05:-.05)),!0;if(P==="p")return F.toggle(),!0}if(H==="chair"&&P==="v")return N.opts.onAction("readerRss"),!0;if((H==="news"||H==="magazine"||H==="chair")&&P==="c")return N.opts.onAction("reader"),!0;if(P==="escape"&&N.readerOpen())return N.toggleReader(null),!0;if((P==="escape"||P==="enter")&&H!=="chalk")return Ot(),!0;if(H==="rack"&&(P==="arrowleft"||P==="arrowright")){let nt=Ke.findIndex(ut=>ut.id===p.id);return It(Ke[(nt+(P==="arrowleft"?Ke.length-1:1))%Ke.length].id),!0}return!1}let j={z:"undo",backspace:"undo",b:"hand",r:"reset",s:"skip",h:"help"}[P];return j?(N.opts.onAction(j),!0):!1}});u||(pt.blocked=!0);let ht=null,Dt=()=>{if(!u)return["guest"];let z=c.match;return z?["match",z.players[1-z.me].name]:c.solo&&!c.solo.done?["solo"]:["training"]},Qt=()=>N.setMenu(...Dt()),Kt=z=>{c.match||(Ot(),N.showLeaderboard(null),_t=!1,c.startSolo(z),x.setMode(c.state==="place"?"top":"cue"),Qt(),N.showMenu(!1),pt.capture(),N.sync(c,x.mode),lt())},de=async z=>{let P=z||(ht?await ht.scores():null);return P&&P.top&&a.setTrophies(P.top),P},G=async z=>{pt.uncapture(),N.showLeaderboard(void 0,z);let P=ht?await ht.scores():null;de(P),N.leaderboardOpen()&&N.showLeaderboard(P,z)},kt=async z=>{let P=z||(ht?await ht.scores():null);P&&P.top&&a.setTrophies(P.top)};kt(),c.onSolo=async z=>{let P=ht?await ht.saveScore(z):{error:"Sk\xF3re sa zapisuje len prihl\xE1sen\xFDm."},I=P&&!P.error;I&&de(P);let j=I&&P.mine&&P.mine.points===z.points&&P.mine.seconds===z.seconds;pt.uncapture(),N.showLeaderboard(null),N.showMenu(!1),I&&kt(P),N.celebrate({...z,rank:I?P.rank:0,players:I?P.players:0,best:j,error:I?"":P&&P.error}),U.unlock(),U.pot&&U.pot(),c.startSolo(!0),x.setMode(c.state==="place"?"top":"cue"),Qt(),N.sync(c,x.mode),lt()},u&&t.restUrl&&(ht=new ea(t,c,{lobby:async z=>{N.renderLobby(z),N.leagueOpen()&&(Mt=await ht.league()||Mt,N.renderLeague(Mt)),N.showInvites(c.match?[]:z.invites)},invite:z=>!N.menuOpen()&&N.toast(`${z.from.name} \u0165a poz\xFDva na ${z.league?"ligov\xFA ":""}partiu.${pt.captured?" Esc alebo Ctrl uvo\u013En\xED my\u0161.":""}`,z),toast:z=>N.toast(z),started:z=>{Ot(),N.openLeague(!1),vt(z.league?"league":"home"),Q=-1,N.openLobby(!1),ht.lobbyOpen=!1,N.hideToast(),N.showInvites([]),_t=!1,x.setMode(c.state==="place"?"top":"cue"),Qt(),N.showMenu(!1),N.toast(`Partia s hr\xE1\u010Dom ${z.players[1-z.me].name}. ${z.turn===z.me?"Si na rade.":"Na rade je s\xFAper."}`),N.sync(c,x.mode),lt()},ended:async z=>{Ot(),ht&&ht.lastLeague&&(ht.lastLeague=!1,Mt=await ht.league()||Mt,a.setLeague(Mt),Ft()),Qt(),N.showMenu(!0,!0),N.menuNote(z),pt.uncapture(),c.aimAtNearest(),N.sync(c,x.mode),lt()},status:()=>N.setNet(ht?ht.statusText():"")})),de(),pt.setCue(p),N.setCueInfo(p),N.setChalk(ct),lt(),c.on(z=>{H||_t||(c.state==="place"&&x.mode==="cue"?(x.setMode("top"),gt=!0):c.state!=="place"&&gt&&(gt=!1,x.mode==="top"&&x.setMode("cue"))),(z==="change"||z==="settle")&&(N.sync(c,x.mode),lt())});let rt=()=>{let z=s.clientWidth||window.innerWidth,P=s.clientHeight||window.innerHeight;i.setSize(z,P),x.resize(z,P)};window.addEventListener("resize",rt),window.addEventListener("pagehide",()=>c.saveSoloTime()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&c.saveSoloTime()}),rt(),N.sync(c,x.mode),(L||!u)&&N.showMenu(!0,!1);let yt=new R,zt=performance.now(),Ht=zt,Jt=0;try{Jt=parseFloat(window.localStorage.getItem("mySnookerPlayTime")||"0")||0}catch{Jt=0}let Ae=()=>{try{window.localStorage.setItem("mySnookerPlayTime",String(Math.round(Jt)))}catch{}};window.addEventListener("pagehide",Ae);let ke=zt,pe=0,Je=z=>{let P=Math.min(.05,(z-zt)/1e3);if(zt=z,pt.update(P),c.state==="moving")for(let Wt of c.tick(P))Wt.type==="ball"?U.ball(Wt.speed):Wt.type==="cushion"?U.cushion(Wt.speed):Wt.type==="pot"&&(U.pot(),ot==="league"&&c.balls[Wt.a]&&c.balls[Wt.a].kind!=="white"&&w.react("clap"));if(ot==="league"){let Wt=c.match;Wt&&Wt.seq!==Q&&(Q>=0&&Wt.last&&(Wt.last.foul?w.react("facepalm"):(Wt.last.brk||0)>=30&&Wt.last.points>0&&w.react("stand")),Q=Wt.seq,Ft()),w.update(P,c.cue)}let I=c.state==="aim"&&!H,j=c.state==="watch"&&ht&&ht.aimTarget;if(j){let Wt=ht.aimTarget,_e=Wt.dir-c.dir;_e=Math.atan2(Math.sin(_e),Math.cos(_e)),c.dir+=_e*Math.min(1,P*8),c.cue.on&&(c.cue.p.x+=(Wt.cx-c.cue.p.x)*Math.min(1,P*8),c.cue.p.z+=(Wt.cz-c.cue.p.z)*Math.min(1,P*8))}if(ht&&ht.update(P,c.myTurn?{dir:c.dir,cx:c.cue.p.x,cz:c.cue.p.z,pull:pt.stroking?Math.max(0,pt.strokePull):0,side:St.side,top:St.top}:null),pt.stroking)pe=Math.max(0,pt.strokePull);else{let Wt=I?pt.power:0;pe+=(Wt-pe)*Math.min(1,P*(pt.charging?30:12))}N.showPower(pt.power),m.update(P);let nt=Math.floor(Jt);Jt+=Math.min(1,Math.max(0,(z-Ht)/1e3)),Math.floor(Jt)!==nt&&Math.floor(Jt)%2===0&&Ae(),Ht=z;let ut=F.update(x.camera);D.update(ut[0],ut[1]),a.setClock(c.solo&&!c.solo.done?c.solo.time:Jt);let wt=c.solo;if(wt&&!wt.done&&!Y.has(H)&&H!=="leagueBoard"&&!N.menuOpen()&&!N.leaderboardOpen()&&!N.partyOpen()){let Wt=Math.floor(wt.time);wt.time+=Math.min(1,Math.max(0,(z-ke)/1e3)),Math.floor(wt.time)!==Wt&&(Math.floor(wt.time)%2===0&&c.saveSoloTime(),N.sync(c,x.mode),lt())}if(ke=z,a.update(P)&&U.doorShut(),j&&(pe+=((ht.aimTarget.pull||0)-pe)*Math.min(1,P*10)),S.place(c.cue,c.dir,pe,j?ht.aimTarget.side||0:St.side,j?ht.aimTarget.top||0:St.top,(I||H==="chalk"||j&&!ht.aimTarget.place)&&c.cue.on),Gt>=0){Gt=A.chalkFreeze!==null?A.chalkFreeze:(performance.now()-Nt)/1e3;let Wt=Math.cos(c.dir),_e=Math.sin(c.dir),De=2.8,ve=Ut=>Ut*Ut*(3-2*Ut),tn=ve(Math.min(1,Gt/.45,Math.max(0,(De-Gt)/.45)));S.pivot.position.x-=Wt*st.back*tn,S.pivot.position.z-=_e*st.back*tn,S.pivot.position.y+=st.up*tn;let b=S.pivot.position,W=ve(Math.min(1,Math.max(0,(Gt-.45)/.35),Math.max(0,(De-.45-Gt)/.35))),et=Gt>.8&&Gt<De-.8?1:0,tt=Gt*12,Z=.0012*et,At=M.s/2-M.d+(1-W)*.1;J.position.set(b.x+Wt*At-_e*Math.cos(tt)*Z,b.y+Math.sin(tt)*Z+(1-W)*.05,b.z+_e*At+Wt*Math.cos(tt)*Z),J.rotation.set(et*Math.sin(tt*.5)*.5,-c.dir,0),Gt>=De&&(ct=at,N.setChalk(ct),lt(),Ot())}let ee=v.update(c.balls,c.cue,c.dir,I&&c.cue.on,e.lines?2:0),ne=I&&c.cue.on&&!!e.contact,$t=ee||(I&&c.cue.on?zo(c.balls,c.cue,c.dir):null);if(N.drawContact(ne?$t:null,c.dir,ne,e.lines),m.highlight($t&&I?$t.ball:null,P,$t?$t.ghost:null),$t){let Wt=$t.ball?$t.ball.p:{x:c.cue.p.x+Math.cos(c.dir)*zu,z:c.cue.p.z+Math.sin(c.dir)*zu};yt.set(Wt.x,.02625,Wt.z),x.aimPoint=yt}else x.aimPoint=null;x.cueTilt=S.pivot.visible&&S.tilt||0,x.update(P,c.cue,c.dir,c.state==="moving"),i.render(r,x.camera),requestAnimationFrame(Je)};return requestAnimationFrame(Je),{game:c,rig:x,renderer:i,scene:r,settings:e,controls:pt,debug:A,get online(){return ht}}}var Fu=()=>{let s=document.getElementById("mysn-app");s&&!s.dataset.started&&(s.dataset.started="1",window.MySnooker=cx(s,window.MYSN_CONFIG||{}))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Fu):Fu();})();

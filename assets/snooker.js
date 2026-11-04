(()=>{var rc="170",Fn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vu=0,kc=1,Gu=2;var $h=1,oc=2,ei=3,bi=0,Ve=1,Xe=2,vi=0,bs=1,Uc=2,Nc=3,zc=4,Wu=5,Ni=100,Xu=101,$u=102,qu=103,Yu=104,ju=200,Zu=201,Ku=202,Ju=203,Oa=204,Fa=205,Qu=206,td=207,ed=208,nd=209,id=210,sd=211,rd=212,od=213,ad=214,Ba=0,Ha=1,Va=2,Ts=3,Ga=4,Wa=5,Xa=6,$a=7,qh=0,ld=1,cd=2,Mi=0,hd=1,ud=2,dd=3,ac=4,fd=5,pd=6,md=7;var Yh=300,As=301,Rs=302,qa=303,Ya=304,Lo=306,Nn=1e3,Fi=1001,ja=1002,Un=1003,gd=1004;var Ar=1005;var Wn=1006,sa=1007;var Bi=1008;var ri=1009,jh=1010,Zh=1011,ur=1012,lc=1013,Hi=1014,ni=1015,Sr=1016,cc=1017,hc=1018,Cs=1020,Kh=35902,Jh=1021,Qh=1022,kn=1023,tu=1024,eu=1025,Ss=1026,Ps=1027,nu=1028,uc=1029,iu=1030,dc=1031;var fc=1033,to=33776,eo=33777,no=33778,io=33779,Za=35840,Ka=35841,Ja=35842,Qa=35843,tl=36196,el=37492,nl=37496,il=37808,sl=37809,rl=37810,ol=37811,al=37812,ll=37813,cl=37814,hl=37815,ul=37816,dl=37817,fl=37818,pl=37819,ml=37820,gl=37821,so=36492,yl=36494,xl=36495,su=36283,_l=36284,vl=36285,Ml=36286;var ro=2300,bl=2301,ra=2302,Oc=2400,Fc=2401,Bc=2402;var yd=3200,xd=3201;var ru=0,_d=1,_i="",ce="srgb",Gs="srgb-linear",Do="linear",Re="srgb";var rs=7680;var Hc=519,vd=512,Md=513,bd=514,ou=515,Sd=516,Ed=517,wd=518,Td=519,Vc=35044;var Gc="300 es",ii=2e3,oo=2001,oi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wc=1234567,rr=Math.PI/180,Is=180/Math.PI;function Ji(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function He(s,t,e){return Math.max(t,Math.min(e,s))}function pc(s,t){return(s%t+t)%t}function Ad(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Rd(s,t,e){return s!==t?(e-s)/(t-s):0}function or(s,t,e){return(1-e)*s+e*t}function Cd(s,t,e,n){return or(s,t,1-Math.exp(-e*n))}function Pd(s,t=1){return t-Math.abs(pc(s,t*2)-t)}function Id(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ld(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Dd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function kd(s,t){return s+Math.random()*(t-s)}function Ud(s){return s*(.5-Math.random())}function Nd(s){s!==void 0&&(Wc=s);let t=Wc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zd(s){return s*rr}function Od(s){return s*Is}function Fd(s){return(s&s-1)===0&&s!==0}function Bd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Hd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Vd(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+n)/2),c=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*c,l*u,l*d,a*h);break;case"YZY":s.set(l*d,a*c,l*u,a*h);break;case"ZXZ":s.set(l*u,l*d,a*c,a*h);break;case"XZX":s.set(a*c,l*g,l*f,a*h);break;case"YXY":s.set(l*f,a*c,l*g,a*h);break;case"ZYZ":s.set(l*g,l*f,a*c,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _s(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function on(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var qn={DEG2RAD:rr,RAD2DEG:Is,generateUUID:Ji,clamp:He,euclideanModulo:pc,mapLinear:Ad,inverseLerp:Rd,lerp:or,damp:Cd,pingpong:Pd,smoothstep:Id,smootherstep:Ld,randInt:Dd,randFloat:kd,randFloatSpread:Ud,seededRandom:Nd,degToRad:zd,radToDeg:Od,isPowerOfTwo:Fd,ceilPowerOfTwo:Bd,floorPowerOfTwo:Hd,setQuaternionFromProperEuler:Vd,normalize:on,denormalize:_s},wt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pe=class s{constructor(t,e,n,i,r,o,a,l,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,h)}set(t,e,n,i,r,o,a,l,h){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=n,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],c=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=i[0],y=i[3],p=i[6],E=i[1],S=i[4],_=i[7],z=i[2],P=i[5],U=i[8];return r[0]=o*x+a*E+l*z,r[3]=o*y+a*S+l*P,r[6]=o*p+a*_+l*U,r[1]=h*x+c*E+u*z,r[4]=h*y+c*S+u*P,r[7]=h*p+c*_+u*U,r[2]=d*x+f*E+g*z,r[5]=d*y+f*S+g*P,r[8]=d*p+f*_+g*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-n*r*c+n*a*l+i*r*h-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=c*o-a*h,d=a*l-c*r,f=h*r-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*h-c*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(c*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-h*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-i*h,i*l,-i*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(oa.makeScale(t,e)),this}rotate(t){return this.premultiply(oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},oa=new pe;function au(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ao(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gd(){let s=ao("canvas");return s.style.display="block",s}var Xc={};function ir(s){s in Xc||(Xc[s]=!0,console.warn(s))}function Wd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Xd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $d(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Ee={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Re&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Re&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?Do:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function si(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var $c=[.64,.33,.3,.6,.15,.06],qc=[.2126,.7152,.0722],Yc=[.3127,.329],jc=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ee.define({[Gs]:{primaries:$c,whitePoint:Yc,transfer:Do,toXYZ:jc,fromXYZ:Zc,luminanceCoefficients:qc,workingColorSpaceConfig:{unpackColorSpace:ce},outputColorSpaceConfig:{drawingBufferColorSpace:ce}},[ce]:{primaries:$c,whitePoint:Yc,transfer:Re,toXYZ:jc,fromXYZ:Zc,luminanceCoefficients:qc,outputColorSpaceConfig:{drawingBufferColorSpace:ce}}});var os,Sl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=ao("canvas")),os.width=t.width,os.height=t.height;let n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ao("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qd=0,lo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Ji(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(aa(i[o].image)):r.push(aa(i[o]))}else r=aa(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function aa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Sl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yd=0,xn=class s extends oi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Fi,i=Fi,r=Wn,o=Bi,a=kn,l=ri,h=s.DEFAULT_ANISOTROPY,c=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Ji(),this.name="",this.source=new lo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nn:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nn:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Yh;xn.DEFAULT_ANISOTROPY=1;var Ce=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],y=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-y)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+y)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(h+1)/2,_=(f+1)/2,z=(p+1)/2,P=(c+d)/4,U=(u+x)/4,N=(g+y)/4;return S>_&&S>z?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=P/n,r=U/n):_>z?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=P/i,r=N/i):z<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(z),n=U/r,i=N/r),this.set(n,i,r,e),this}let E=Math.sqrt((y-g)*(y-g)+(u-x)*(u-x)+(d-c)*(d-c));return Math.abs(E)<.001&&(E=1),this.x=(y-g)/E,this.y=(u-x)/E,this.z=(d-c)/E,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},El=class extends oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new xn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new lo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends El{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},co=class extends xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Un,this.minFilter=Un,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wl=class extends xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Un,this.minFilter=Un,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ln=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],h=n[i+1],c=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||h!==f||c!==g){let y=1-a,p=l*d+h*f+c*g+u*x,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let z=Math.sqrt(S),P=Math.atan2(z,p*E);y=Math.sin(y*P)/z,a=Math.sin(a*P)/z}let _=a*E;if(l=l*y+d*_,h=h*y+f*_,c=c*y+g*_,u=u*y+x*_,y===1-a){let z=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=z,h*=z,c*=z,u*=z}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],h=n[i+2],c=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+c*u+l*f-h*d,t[e+1]=l*g+c*d+h*u-a*f,t[e+2]=h*g+c*f+a*d-l*u,t[e+3]=c*g-a*u-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),c=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"YXZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"ZXY":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"ZYX":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"YZX":this._x=d*c*u+h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u-d*f*g;break;case"XZY":this._x=d*c*u-h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(c-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+h)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-h)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=n*c+o*a+i*h-r*l,this._y=i*c+o*l+r*a-n*h,this._z=r*c+o*h+n*l-i*a,this._w=o*c-n*a-i*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*i-a*n),c=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*h+o*u-a*c,this.y=n+l*c+a*h-r*u,this.z=i+l*u+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return la.copy(this).projectOnVector(t),this.sub(la)}reflect(t){return this.sub(la.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},la=new C,Kc=new ln,Vi=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ks),Cr.subVectors(this.max,Ks),as.subVectors(t.a,Ks),ls.subVectors(t.b,Ks),cs.subVectors(t.c,Ks),fi.subVectors(ls,as),pi.subVectors(cs,ls),Ci.subVectors(as,cs);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ci.z,Ci.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ci.z,0,-Ci.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ci.y,Ci.x,0];return!ca(e,as,ls,cs,Cr)||(e=[1,0,0,0,1,0,0,0,1],!ca(e,as,ls,cs,Cr))?!1:(Pr.crossVectors(fi,pi),e=[Pr.x,Pr.y,Pr.z],ca(e,as,ls,cs,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Zn=[new C,new C,new C,new C,new C,new C,new C,new C],In=new C,Rr=new Vi,as=new C,ls=new C,cs=new C,fi=new C,pi=new C,Ci=new C,Ks=new C,Cr=new C,Pr=new C,Pi=new C;function ca(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Pi.fromArray(s,r);let a=i.x*Math.abs(Pi.x)+i.y*Math.abs(Pi.y)+i.z*Math.abs(Pi.z),l=t.dot(Pi),h=e.dot(Pi),c=n.dot(Pi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}var jd=new Vi,Js=new C,ha=new C,Ls=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);let e=Js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Js,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(ha)),this.expandByPoint(Js.copy(t.center).sub(ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Kn=new C,ua=new C,Ir=new C,mi=new C,da=new C,Lr=new C,fa=new C,Gi=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ua.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(ua);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ir),a=mi.dot(this.direction),l=-mi.dot(Ir),h=mi.lengthSq(),c=Math.abs(1-o*o),u,d,f,g;if(c>0)if(u=o*l-a,d=o*a-l,g=r*c,u>=0)if(d>=-g)if(d<=g){let x=1/c;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+h}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ua).addScaledVector(Ir,d),f}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);let n=Kn.dot(this.direction),i=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,i=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,i=(t.min.x-d.x)*h),c>=0?(r=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,i,r){da.subVectors(e,t),Lr.subVectors(n,t),fa.crossVectors(da,Lr);let o=this.direction.dot(fa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,t);let l=a*this.direction.dot(Lr.crossVectors(mi,Lr));if(l<0)return null;let h=a*this.direction.dot(da.cross(mi));if(h<0||l+h>o)return null;let c=-a*mi.dot(fa);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class s{constructor(t,e,n,i,r,o,a,l,h,c,u,d,f,g,x,y){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,h,c,u,d,f,g,x,y)}set(t,e,n,i,r,o,a,l,h,c,u,d,f,g,x,y){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),h=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*c,f=o*u,g=a*c,x=a*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=f+g*h,e[5]=d-x*h,e[9]=-a*l,e[2]=x-d*h,e[6]=g+f*h,e[10]=o*l}else if(t.order==="YXZ"){let d=l*c,f=l*u,g=h*c,x=h*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*h,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*c,f=l*u,g=h*c,x=h*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*c,e[9]=x-d*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*c,f=o*u,g=a*c,x=a*u;e[0]=l*c,e[4]=g*h-f,e[8]=d*h+x,e[1]=l*u,e[5]=x*h+d,e[9]=f*h-g,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*h,g=a*l,x=a*h;e[0]=l*c,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*h,g=a*l,x=a*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+x,e[5]=o*c,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*c,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zd,t,Kd)}lookAt(t,e,n){let i=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),gi.crossVectors(n,mn),gi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),gi.crossVectors(n,mn)),gi.normalize(),Dr.crossVectors(mn,gi),i[0]=gi.x,i[4]=Dr.x,i[8]=mn.x,i[1]=gi.y,i[5]=Dr.y,i[9]=mn.y,i[2]=gi.z,i[6]=Dr.z,i[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],c=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],y=n[10],p=n[14],E=n[3],S=n[7],_=n[11],z=n[15],P=i[0],U=i[4],N=i[8],w=i[12],M=i[1],T=i[5],G=i[9],W=i[13],$=i[2],V=i[6],O=i[10],K=i[14],X=i[3],rt=i[7],vt=i[11],yt=i[15];return r[0]=o*P+a*M+l*$+h*X,r[4]=o*U+a*T+l*V+h*rt,r[8]=o*N+a*G+l*O+h*vt,r[12]=o*w+a*W+l*K+h*yt,r[1]=c*P+u*M+d*$+f*X,r[5]=c*U+u*T+d*V+f*rt,r[9]=c*N+u*G+d*O+f*vt,r[13]=c*w+u*W+d*K+f*yt,r[2]=g*P+x*M+y*$+p*X,r[6]=g*U+x*T+y*V+p*rt,r[10]=g*N+x*G+y*O+p*vt,r[14]=g*w+x*W+y*K+p*yt,r[3]=E*P+S*M+_*$+z*X,r[7]=E*U+S*T+_*V+z*rt,r[11]=E*N+S*G+_*O+z*vt,r[15]=E*w+S*W+_*K+z*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],y=t[11],p=t[15];return g*(+r*l*u-i*h*u-r*a*d+n*h*d+i*a*f-n*l*f)+x*(+e*l*f-e*h*d+r*o*d-i*o*f+i*h*c-r*l*c)+y*(+e*h*u-e*a*f-r*o*u+n*o*f+r*a*c-n*h*c)+p*(-i*a*c-e*l*u+e*a*d+i*o*u-n*o*d+n*l*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],y=t[14],p=t[15],E=u*y*h-x*d*h+x*l*f-a*y*f-u*l*p+a*d*p,S=g*d*h-c*y*h-g*l*f+o*y*f+c*l*p-o*d*p,_=c*x*h-g*u*h+g*a*f-o*x*f-c*a*p+o*u*p,z=g*u*l-c*x*l-g*a*d+o*x*d+c*a*y-o*u*y,P=e*E+n*S+i*_+r*z;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/P;return t[0]=E*U,t[1]=(x*d*r-u*y*r-x*i*f+n*y*f+u*i*p-n*d*p)*U,t[2]=(a*y*r-x*l*r+x*i*h-n*y*h-a*i*p+n*l*p)*U,t[3]=(u*l*r-a*d*r-u*i*h+n*d*h+a*i*f-n*l*f)*U,t[4]=S*U,t[5]=(c*y*r-g*d*r+g*i*f-e*y*f-c*i*p+e*d*p)*U,t[6]=(g*l*r-o*y*r-g*i*h+e*y*h+o*i*p-e*l*p)*U,t[7]=(o*d*r-c*l*r+c*i*h-e*d*h-o*i*f+e*l*f)*U,t[8]=_*U,t[9]=(g*u*r-c*x*r-g*n*f+e*x*f+c*n*p-e*u*p)*U,t[10]=(o*x*r-g*a*r+g*n*h-e*x*h-o*n*p+e*a*p)*U,t[11]=(c*a*r-o*u*r-c*n*h+e*u*h+o*n*f-e*a*f)*U,t[12]=z*U,t[13]=(c*x*i-g*u*i+g*n*d-e*x*d-c*n*y+e*u*y)*U,t[14]=(g*a*i-o*x*i-g*n*l+e*x*l+o*n*y-e*a*y)*U,t[15]=(o*u*i-c*a*i+c*n*l-e*u*l-o*n*d+e*a*d)*U,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+n,h*a-i*l,h*l+i*a,0,h*a+i*l,c*a+n,c*l-i*o,0,h*l-i*a,c*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,u=a+a,d=r*h,f=r*c,g=r*u,x=o*c,y=o*u,p=a*u,E=l*h,S=l*c,_=l*u,z=n.x,P=n.y,U=n.z;return i[0]=(1-(x+p))*z,i[1]=(f+_)*z,i[2]=(g-S)*z,i[3]=0,i[4]=(f-_)*P,i[5]=(1-(d+p))*P,i[6]=(y+E)*P,i[7]=0,i[8]=(g+S)*U,i[9]=(y-E)*U,i[10]=(1-(d+x))*U,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=hs.set(i[0],i[1],i[2]).length(),o=hs.set(i[4],i[5],i[6]).length(),a=hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ln.copy(this);let h=1/r,c=1/o,u=1/a;return Ln.elements[0]*=h,Ln.elements[1]*=h,Ln.elements[2]*=h,Ln.elements[4]*=c,Ln.elements[5]*=c,Ln.elements[6]*=c,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,e.setFromRotationMatrix(Ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ii){let l=this.elements,h=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(a===ii)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===oo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ii){let l=this.elements,h=1/(e-t),c=1/(n-i),u=1/(o-r),d=(e+t)*h,f=(n+i)*c,g,x;if(a===ii)g=(o+r)*u,x=-2*u;else if(a===oo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},hs=new C,Ln=new Ie,Zd=new C(0,0,0),Kd=new C(1,1,1),gi=new C,Dr=new C,mn=new C,Jc=new Ie,Qc=new ln,En=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],h=i[5],c=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-He(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Jd=0,th=new C,us=new ln,Jn=new Ie,kr=new C,Qs=new C,Qd=new C,tf=new ln,eh=new C(1,0,0),nh=new C(0,1,0),ih=new C(0,0,1),sh={type:"added"},ef={type:"removed"},ds={type:"childadded",child:null},pa={type:"childremoved",child:null},Qe=class s extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new C,e=new En,n=new ln,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new pe}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(eh,t)}rotateY(t){return this.rotateOnAxis(nh,t)}rotateZ(t){return this.rotateOnAxis(ih,t)}translateOnAxis(t,e){return th.copy(t).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eh,t)}translateY(t){return this.translateOnAxis(nh,t)}translateZ(t){return this.translateOnAxis(ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kr.copy(t):kr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Qs,kr,this.up):Jn.lookAt(kr,Qs,this.up),this.quaternion.setFromRotationMatrix(Jn),i&&(Jn.extractRotation(i.matrixWorld),us.setFromRotationMatrix(Jn),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sh),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ef),pa.child=t,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sh),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,Qd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,tf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let h in a){let c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Qe.DEFAULT_UP=new C(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new C,Qn=new C,ma=new C,ti=new C,fs=new C,ps=new C,rh=new C,ga=new C,ya=new C,xa=new C,_a=new Ce,va=new Ce,Ma=new Ce,zi=class s{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Dn.subVectors(t,e),i.cross(Dn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Dn.subVectors(i,e),Qn.subVectors(n,e),ma.subVectors(t,e);let o=Dn.dot(Dn),a=Dn.dot(Qn),l=Dn.dot(ma),h=Qn.dot(Qn),c=Qn.dot(ma),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(h*l-a*c)*d,g=(o*c-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return _a.setScalar(0),va.setScalar(0),Ma.setScalar(0),_a.fromBufferAttribute(t,e),va.fromBufferAttribute(t,n),Ma.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(_a,r.x),o.addScaledVector(va,r.y),o.addScaledVector(Ma,r.z),o}static isFrontFacing(t,e,n,i){return Dn.subVectors(n,e),Qn.subVectors(t,e),Dn.cross(Qn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Dn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;fs.subVectors(i,n),ps.subVectors(r,n),ga.subVectors(t,n);let l=fs.dot(ga),h=ps.dot(ga);if(l<=0&&h<=0)return e.copy(n);ya.subVectors(t,i);let c=fs.dot(ya),u=ps.dot(ya);if(c>=0&&u<=c)return e.copy(i);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(n).addScaledVector(fs,o);xa.subVectors(t,r);let f=fs.dot(xa),g=ps.dot(xa);if(g>=0&&f<=g)return e.copy(r);let x=f*h-l*g;if(x<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(ps,a);let y=c*g-f*u;if(y<=0&&u-c>=0&&f-g>=0)return rh.subVectors(r,i),a=(u-c)/(u-c+(f-g)),e.copy(i).addScaledVector(rh,a);let p=1/(y+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(fs,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Ur={h:0,s:0,l:0};function ba(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ue=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ee.workingColorSpace){if(t=pc(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ba(o,r,t+1/3),this.g=ba(o,r,t),this.b=ba(o,r,t-1/3)}return Ee.toWorkingColorSpace(this,i),this}setStyle(t,e=ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ce){let n=lu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ce){return Ee.fromWorkingColorSpace(nn.copy(this),t),Math.round(He(nn.r*255,0,255))*65536+Math.round(He(nn.g*255,0,255))*256+Math.round(He(nn.b*255,0,255))}getHexString(t=ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.fromWorkingColorSpace(nn.copy(this),e);let n=nn.r,i=nn.g,r=nn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,h,c=(a+o)/2;if(a===o)l=0,h=0;else{let u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=ce){Ee.fromWorkingColorSpace(nn.copy(this),t);let e=nn.r,n=nn.g,i=nn.b;return t!==ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(Ur);let n=or(yi.h,Ur.h,e),i=or(yi.s,Ur.s,e),r=or(yi.l,Ur.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new ue;ue.NAMES=lu;var nf=0,Si=class extends oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Ji(),this.name="",this.blending=bs,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Fa,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oa&&(n.blendSrc=this.blendSrc),this.blendDst!==Fa&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},we=class extends Si{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Be=new C,Nr=new wt,Sn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vc,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Nr.fromBufferAttribute(this,e),Nr.applyMatrix3(t),this.setXY(e,Nr.x,Nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),i=on(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vc&&(t.usage=this.usage),t}};var ho=class extends Sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var uo=class extends Sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xe=class extends Sn{constructor(t,e,n){super(new Float32Array(t),e,n)}},sf=0,bn=new Ie,Sa=new Qe,ms=new C,gn=new Vi,tr=new Vi,Je=new C,ze=class s extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(au(t)?uo:ho)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return Sa.lookAt(t),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xe(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(gn.min,tr.min),gn.expandByPoint(Je),Je.addVectors(gn.max,tr.max),gn.expandByPoint(Je)):(gn.expandByPoint(tr.min),gn.expandByPoint(tr.max))}gn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Je.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Je));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)Je.fromBufferAttribute(a,h),l&&(ms.fromBufferAttribute(t,h),Je.add(ms)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new C,l[N]=new C;let h=new C,c=new C,u=new C,d=new wt,f=new wt,g=new wt,x=new C,y=new C;function p(N,w,M){h.fromBufferAttribute(n,N),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),c.sub(h),u.sub(h),f.sub(d),g.sub(d);let T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(T),y.copy(u).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(T),a[N].add(x),a[w].add(x),a[M].add(x),l[N].add(y),l[w].add(y),l[M].add(y))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let N=0,w=E.length;N<w;++N){let M=E[N],T=M.start,G=M.count;for(let W=T,$=T+G;W<$;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let S=new C,_=new C,z=new C,P=new C;function U(N){z.fromBufferAttribute(i,N),P.copy(z);let w=a[N];S.copy(w),S.sub(z.multiplyScalar(z.dot(w))).normalize(),_.crossVectors(P,w);let T=_.dot(l[N])<0?-1:1;o.setXYZW(N,S.x,S.y,S.z,T)}for(let N=0,w=E.length;N<w;++N){let M=E[N],T=M.start,G=M.count;for(let W=T,$=T+G;W<$;W+=3)U(t.getX(W+0)),U(t.getX(W+1)),U(t.getX(W+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new C,r=new C,o=new C,a=new C,l=new C,h=new C,c=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),y=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,y),c.subVectors(o,r),u.subVectors(i,r),c.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),a.add(c),l.add(c),h.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,r),u.subVectors(i,r),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){let h=a.array,c=a.itemSize,u=a.normalized,d=new h.constructor(l.length*c),f=0,g=0;for(let x=0,y=l.length;x<y;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*c;for(let p=0;p<c;p++)d[g++]=h[f++]}return new Sn(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],h=t(l,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let c=0,u=h.length;c<u;c++){let d=h[c],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let h=n[l];t.data.attributes[l]=h.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(i[l]=c,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let h in i){let c=i[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],u=r[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,c=o.length;h<c;h++){let u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},oh=new Ie,Ii=new Gi,zr=new Ls,ah=new C,Or=new C,Fr=new C,Br=new C,Ea=new C,Hr=new C,lh=new C,Vr=new C,Dt=class extends Qe{constructor(t=new ze,e=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Hr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=a[l],u=r[l];c!==0&&(Ea.fromBufferAttribute(u,t),o?Hr.addScaledVector(Ea,c):Hr.addScaledVector(Ea.sub(e),c))}e.add(Hr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(zr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(zr,ah)===null||Ii.origin.distanceToSquared(ah)>(t.far-t.near)**2))&&(oh.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(oh),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let y=d[g],p=o[y.materialIndex],E=Math.max(y.start,f.start),S=Math.min(a.count,Math.min(y.start+y.count,f.start+f.count));for(let _=E,z=S;_<z;_+=3){let P=a.getX(_),U=a.getX(_+1),N=a.getX(_+2);i=Gr(this,p,t,n,h,c,u,P,U,N),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=y.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let y=g,p=x;y<p;y+=3){let E=a.getX(y),S=a.getX(y+1),_=a.getX(y+2);i=Gr(this,o,t,n,h,c,u,E,S,_),i&&(i.faceIndex=Math.floor(y/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let y=d[g],p=o[y.materialIndex],E=Math.max(y.start,f.start),S=Math.min(l.count,Math.min(y.start+y.count,f.start+f.count));for(let _=E,z=S;_<z;_+=3){let P=_,U=_+1,N=_+2;i=Gr(this,p,t,n,h,c,u,P,U,N),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=y.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let y=g,p=x;y<p;y+=3){let E=y,S=y+1,_=y+2;i=Gr(this,o,t,n,h,c,u,E,S,_),i&&(i.faceIndex=Math.floor(y/3),e.push(i))}}}};function rf(s,t,e,n,i,r,o,a){let l;if(t.side===Ve?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===bi,a),l===null)return null;Vr.copy(a),Vr.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(Vr);return h<e.near||h>e.far?null:{distance:h,point:Vr.clone(),object:s}}function Gr(s,t,e,n,i,r,o,a,l,h){s.getVertexPosition(a,Or),s.getVertexPosition(l,Fr),s.getVertexPosition(h,Br);let c=rf(s,t,e,n,Or,Fr,Br,lh);if(c){let u=new C;zi.getBarycoord(lh,Or,Fr,Br,u),i&&(c.uv=zi.getInterpolatedAttribute(i,a,l,h,u,new wt)),r&&(c.uv1=zi.getInterpolatedAttribute(r,a,l,h,u,new wt)),o&&(c.normal=zi.getInterpolatedAttribute(o,a,l,h,u,new C),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let d={a,b:l,c:h,normal:new C,materialIndex:0};zi.getNormal(Or,Fr,Br,d.normal),c.face=d,c.barycoord=u}return c}var Ct=class s extends ze{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],c=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new xe(h,3)),this.setAttribute("normal",new xe(c,3)),this.setAttribute("uv",new xe(u,2));function g(x,y,p,E,S,_,z,P,U,N,w){let M=_/U,T=z/N,G=_/2,W=z/2,$=P/2,V=U+1,O=N+1,K=0,X=0,rt=new C;for(let vt=0;vt<O;vt++){let yt=vt*T-W;for(let zt=0;zt<V;zt++){let Tt=zt*M-G;rt[x]=Tt*E,rt[y]=yt*S,rt[p]=$,h.push(rt.x,rt.y,rt.z),rt[x]=0,rt[y]=0,rt[p]=P>0?1:-1,c.push(rt.x,rt.y,rt.z),u.push(zt/U),u.push(1-vt/N),K+=1}}for(let vt=0;vt<N;vt++)for(let yt=0;yt<U;yt++){let zt=d+yt+V*vt,Tt=d+yt+V*(vt+1),Y=d+(yt+1)+V*(vt+1),it=d+(yt+1)+V*vt;l.push(zt,Tt,it),l.push(Tt,Y,it),X+=6}a.addGroup(f,X,w),f+=X,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ds(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function an(s){let t={};for(let e=0;e<s.length;e++){let n=Ds(s[e]);for(let i in n)t[i]=n[i]}return t}function of(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function cu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}var af={clone:Ds,merge:an},lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xn=class extends Si{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lf,this.fragmentShader=cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},fo=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xi=new C,ch=new wt,hh=new wt,tn=class extends fo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,ch,hh),e.subVectors(hh,ch)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/h,i*=o.width/l,n*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gs=-90,ys=1,Tl=class extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new tn(gs,ys,t,e);i.layers=this.layers,this.add(i);let r=new tn(gs,ys,t,e);r.layers=this.layers,this.add(r);let o=new tn(gs,ys,t,e);o.layers=this.layers,this.add(o);let a=new tn(gs,ys,t,e);a.layers=this.layers,this.add(a);let l=new tn(gs,ys,t,e);l.layers=this.layers,this.add(l);let h=new tn(gs,ys,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},po=class extends xn{constructor(t,e,n,i,r,o,a,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:As,super(t,e,n,i,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Al=class extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new po(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ct(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:vi});r.uniforms.tEquirect.value=e;let o=new Dt(i,r),a=e.minFilter;return e.minFilter===Bi&&(e.minFilter=Wn),new Tl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},wa=new C,hf=new C,uf=new pe,yn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=wa.subVectors(n,e).cross(hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(wa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||uf.getNormalMatrix(t),i=this.coplanarPoint(wa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Li=new Ls,Wr=new C,fr=class{constructor(t=new yn,e=new yn,n=new yn,i=new yn,r=new yn,o=new yn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ii){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],h=i[4],c=i[5],u=i[6],d=i[7],f=i[8],g=i[9],x=i[10],y=i[11],p=i[12],E=i[13],S=i[14],_=i[15];if(n[0].setComponents(l-r,d-h,y-f,_-p).normalize(),n[1].setComponents(l+r,d+h,y+f,_+p).normalize(),n[2].setComponents(l+o,d+c,y+g,_+E).normalize(),n[3].setComponents(l-o,d-c,y-g,_-E).normalize(),n[4].setComponents(l-a,d-u,y-x,_-S).normalize(),e===ii)n[5].setComponents(l+a,d+u,y+x,_+S).normalize();else if(e===oo)n[5].setComponents(a,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(t){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(t.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Wr.x=i.normal.x>0?t.max.x:t.min.x,Wr.y=i.normal.y>0?t.max.y:t.min.y,Wr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function df(s){let t=new WeakMap;function e(a,l){let h=a.array,c=a.usage,u=h.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=s.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=s.SHORT;else if(h instanceof Uint32Array)f=s.UNSIGNED_INT;else if(h instanceof Int32Array)f=s.INT;else if(h instanceof Int8Array)f=s.BYTE;else if(h instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,h){let c=l.array,u=l.updateRanges;if(s.bindBuffer(h,a),u.length===0)s.bufferSubData(h,0,c);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];s.bufferSubData(h,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:i,remove:r,update:o}}var ie=class s extends ze{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),h=a+1,c=l+1,u=t/a,d=e/l,f=[],g=[],x=[],y=[];for(let p=0;p<c;p++){let E=p*d-o;for(let S=0;S<h;S++){let _=S*u-r;g.push(_,-E,0),x.push(0,0,1),y.push(S/a),y.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){let S=E+h*p,_=E+h*(p+1),z=E+1+h*(p+1),P=E+1+h*p;f.push(S,_,P),f.push(_,z,P)}this.setIndex(f),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pf=`#ifdef USE_ALPHAHASH
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
#endif`,mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_f=`#ifdef USE_AOMAP
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
#endif`,vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mf=`#ifdef USE_BATCHING
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
#endif`,bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tf=`#ifdef USE_IRIDESCENCE
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
#endif`,Af=`#ifdef USE_BUMPMAP
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nf=`#define PI 3.141592653589793
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
} // validated`,zf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tp=`#ifdef USE_GRADIENTMAP
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
}`,ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sp=`uniform bool receiveShadow;
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
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hp=`PhysicalMaterial material;
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
#endif`,up=`struct PhysicalMaterial {
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
}`,dp=`
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bp=`#if defined( USE_POINTS_UV )
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
#endif`,Sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
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
#endif`,Np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zp=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$p=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`float getShadowMask() {
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
}`,Jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,em=`#ifdef USE_SKINNING
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
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,om=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#ifdef USE_TRANSMISSION
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fm=`uniform sampler2D t2D;
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`#include <common>
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
}`,_m=`#if DEPTH_PACKING == 3200
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
}`,vm=`#define DISTANCE
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
}`,Mm=`#define DISTANCE
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`uniform float scale;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Tm=`#include <common>
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
}`,Am=`uniform vec3 diffuse;
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
}`,Rm=`#define LAMBERT
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
}`,Cm=`#define LAMBERT
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
}`,Pm=`#define MATCAP
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
}`,Im=`#define MATCAP
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
}`,Lm=`#define NORMAL
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
}`,Dm=`#define NORMAL
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
}`,km=`#define PHONG
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
}`,Nm=`#define STANDARD
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
}`,zm=`#define STANDARD
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
}`,Fm=`#define TOON
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
}`,Bm=`uniform float size;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Gm=`uniform vec3 color;
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
}`,Wm=`uniform float rotation;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:ff,alphahash_pars_fragment:pf,alphamap_fragment:mf,alphamap_pars_fragment:gf,alphatest_fragment:yf,alphatest_pars_fragment:xf,aomap_fragment:_f,aomap_pars_fragment:vf,batching_pars_vertex:Mf,batching_vertex:bf,begin_vertex:Sf,beginnormal_vertex:Ef,bsdfs:wf,iridescence_fragment:Tf,bumpmap_pars_fragment:Af,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Pf,clipping_planes_vertex:If,color_fragment:Lf,color_pars_fragment:Df,color_pars_vertex:kf,color_vertex:Uf,common:Nf,cube_uv_reflection_fragment:zf,defaultnormal_vertex:Of,displacementmap_pars_vertex:Ff,displacementmap_vertex:Bf,emissivemap_fragment:Hf,emissivemap_pars_fragment:Vf,colorspace_fragment:Gf,colorspace_pars_fragment:Wf,envmap_fragment:Xf,envmap_common_pars_fragment:$f,envmap_pars_fragment:qf,envmap_pars_vertex:Yf,envmap_physical_pars_fragment:rp,envmap_vertex:jf,fog_vertex:Zf,fog_pars_vertex:Kf,fog_fragment:Jf,fog_pars_fragment:Qf,gradientmap_pars_fragment:tp,lightmap_pars_fragment:ep,lights_lambert_fragment:np,lights_lambert_pars_fragment:ip,lights_pars_begin:sp,lights_toon_fragment:op,lights_toon_pars_fragment:ap,lights_phong_fragment:lp,lights_phong_pars_fragment:cp,lights_physical_fragment:hp,lights_physical_pars_fragment:up,lights_fragment_begin:dp,lights_fragment_maps:fp,lights_fragment_end:pp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:gp,logdepthbuf_pars_vertex:yp,logdepthbuf_vertex:xp,map_fragment:_p,map_pars_fragment:vp,map_particle_fragment:Mp,map_particle_pars_fragment:bp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:Ep,morphinstance_vertex:wp,morphcolor_vertex:Tp,morphnormal_vertex:Ap,morphtarget_pars_vertex:Rp,morphtarget_vertex:Cp,normal_fragment_begin:Pp,normal_fragment_maps:Ip,normal_pars_fragment:Lp,normal_pars_vertex:Dp,normal_vertex:kp,normalmap_pars_fragment:Up,clearcoat_normal_fragment_begin:Np,clearcoat_normal_fragment_maps:zp,clearcoat_pars_fragment:Op,iridescence_pars_fragment:Fp,opaque_fragment:Bp,packing:Hp,premultiplied_alpha_fragment:Vp,project_vertex:Gp,dithering_fragment:Wp,dithering_pars_fragment:Xp,roughnessmap_fragment:$p,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Yp,shadowmap_pars_vertex:jp,shadowmap_vertex:Zp,shadowmask_pars_fragment:Kp,skinbase_vertex:Jp,skinning_pars_vertex:Qp,skinning_vertex:tm,skinnormal_vertex:em,specularmap_fragment:nm,specularmap_pars_fragment:im,tonemapping_fragment:sm,tonemapping_pars_fragment:rm,transmission_fragment:om,transmission_pars_fragment:am,uv_pars_fragment:lm,uv_pars_vertex:cm,uv_vertex:hm,worldpos_vertex:um,background_vert:dm,background_frag:fm,backgroundCube_vert:pm,backgroundCube_frag:mm,cube_vert:gm,cube_frag:ym,depth_vert:xm,depth_frag:_m,distanceRGBA_vert:vm,distanceRGBA_frag:Mm,equirect_vert:bm,equirect_frag:Sm,linedashed_vert:Em,linedashed_frag:wm,meshbasic_vert:Tm,meshbasic_frag:Am,meshlambert_vert:Rm,meshlambert_frag:Cm,meshmatcap_vert:Pm,meshmatcap_frag:Im,meshnormal_vert:Lm,meshnormal_frag:Dm,meshphong_vert:km,meshphong_frag:Um,meshphysical_vert:Nm,meshphysical_frag:zm,meshtoon_vert:Om,meshtoon_frag:Fm,points_vert:Bm,points_frag:Hm,shadow_vert:Vm,shadow_frag:Gm,sprite_vert:Wm,sprite_frag:Xm},Xt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Gn={basic:{uniforms:an([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:an([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new ue(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:an([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:an([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:an([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new ue(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:an([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:an([Xt.points,Xt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:an([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:an([Xt.common,Xt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:an([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:an([Xt.sprite,Xt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:an([Xt.common,Xt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:an([Xt.lights,Xt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Gn.physical={uniforms:an([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};var Xr={r:0,b:0,g:0},Di=new En,$m=new Ie;function qm(s,t,e,n,i,r,o){let a=new ue(0),l=r===!0?0:1,h,c,u=null,d=0,f=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function x(E){let S=!1,_=g(E);_===null?p(a,l):_&&_.isColor&&(p(_,1),S=!0);let z=s.xr.getEnvironmentBlendMode();z==="additive"?n.buffers.color.setClear(0,0,0,1,o):z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(E,S){let _=g(S);_&&(_.isCubeTexture||_.mapping===Lo)?(c===void 0&&(c=new Dt(new Ct(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Ds(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(z,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Di.copy(S.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($m.makeRotationFromEuler(Di)),c.material.toneMapped=Ee.getTransfer(_.colorSpace)!==Re,(u!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new Dt(new ie(2,2),new Xn({name:"BackgroundMaterial",uniforms:Ds(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.toneMapped=Ee.getTransfer(_.colorSpace)!==Re,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null))}function p(E,S){E.getRGB(Xr,cu(s)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:x,addToRenderList:y}}function Ym(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(M,T,G,W,$){let V=!1,O=u(W,G,T);r!==O&&(r=O,h(r.object)),V=f(M,W,G,$),V&&g(M,W,G,$),$!==null&&t.update($,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(M,T,G,W),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return s.createVertexArray()}function h(M){return s.bindVertexArray(M)}function c(M){return s.deleteVertexArray(M)}function u(M,T,G){let W=G.wireframe===!0,$=n[M.id];$===void 0&&($={},n[M.id]=$);let V=$[T.id];V===void 0&&(V={},$[T.id]=V);let O=V[W];return O===void 0&&(O=d(l()),V[W]=O),O}function d(M){let T=[],G=[],W=[];for(let $=0;$<e;$++)T[$]=0,G[$]=0,W[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:G,attributeDivisors:W,object:M,attributes:{},index:null}}function f(M,T,G,W){let $=r.attributes,V=T.attributes,O=0,K=G.getAttributes();for(let X in K)if(K[X].location>=0){let vt=$[X],yt=V[X];if(yt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),vt===void 0||vt.attribute!==yt||yt&&vt.data!==yt.data)return!0;O++}return r.attributesNum!==O||r.index!==W}function g(M,T,G,W){let $={},V=T.attributes,O=0,K=G.getAttributes();for(let X in K)if(K[X].location>=0){let vt=V[X];vt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor));let yt={};yt.attribute=vt,vt&&vt.data&&(yt.data=vt.data),$[X]=yt,O++}r.attributes=$,r.attributesNum=O,r.index=W}function x(){let M=r.newAttributes;for(let T=0,G=M.length;T<G;T++)M[T]=0}function y(M){p(M,0)}function p(M,T){let G=r.newAttributes,W=r.enabledAttributes,$=r.attributeDivisors;G[M]=1,W[M]===0&&(s.enableVertexAttribArray(M),W[M]=1),$[M]!==T&&(s.vertexAttribDivisor(M,T),$[M]=T)}function E(){let M=r.newAttributes,T=r.enabledAttributes;for(let G=0,W=T.length;G<W;G++)T[G]!==M[G]&&(s.disableVertexAttribArray(G),T[G]=0)}function S(M,T,G,W,$,V,O){O===!0?s.vertexAttribIPointer(M,T,G,$,V):s.vertexAttribPointer(M,T,G,W,$,V)}function _(M,T,G,W){x();let $=W.attributes,V=G.getAttributes(),O=T.defaultAttributeValues;for(let K in V){let X=V[K];if(X.location>=0){let rt=$[K];if(rt===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){let vt=rt.normalized,yt=rt.itemSize,zt=t.get(rt);if(zt===void 0)continue;let Tt=zt.buffer,Y=zt.type,it=zt.bytesPerElement,At=Y===s.INT||Y===s.UNSIGNED_INT||rt.gpuType===lc;if(rt.isInterleavedBufferAttribute){let ft=rt.data,Ot=ft.stride,Gt=rt.offset;if(ft.isInstancedInterleavedBuffer){for(let Ut=0;Ut<X.locationSize;Ut++)p(X.location+Ut,ft.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Ut=0;Ut<X.locationSize;Ut++)y(X.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,Tt);for(let Ut=0;Ut<X.locationSize;Ut++)S(X.location+Ut,yt/X.locationSize,Y,vt,Ot*it,(Gt+yt/X.locationSize*Ut)*it,At)}else{if(rt.isInstancedBufferAttribute){for(let ft=0;ft<X.locationSize;ft++)p(X.location+ft,rt.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ft=0;ft<X.locationSize;ft++)y(X.location+ft);s.bindBuffer(s.ARRAY_BUFFER,Tt);for(let ft=0;ft<X.locationSize;ft++)S(X.location+ft,yt/X.locationSize,Y,vt,yt*it,yt/X.locationSize*ft*it,At)}}else if(O!==void 0){let vt=O[K];if(vt!==void 0)switch(vt.length){case 2:s.vertexAttrib2fv(X.location,vt);break;case 3:s.vertexAttrib3fv(X.location,vt);break;case 4:s.vertexAttrib4fv(X.location,vt);break;default:s.vertexAttrib1fv(X.location,vt)}}}}E()}function z(){N();for(let M in n){let T=n[M];for(let G in T){let W=T[G];for(let $ in W)c(W[$].object),delete W[$];delete T[G]}delete n[M]}}function P(M){if(n[M.id]===void 0)return;let T=n[M.id];for(let G in T){let W=T[G];for(let $ in W)c(W[$].object),delete W[$];delete T[G]}delete n[M.id]}function U(M){for(let T in n){let G=n[T];if(G[M.id]===void 0)continue;let W=G[M.id];for(let $ in W)c(W[$].object),delete W[$];delete G[M.id]}}function N(){w(),o=!0,r!==i&&(r=i,h(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:N,resetDefaultState:w,dispose:z,releaseStatesOfGeometry:P,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:y,disableUnusedAttributes:E}}function jm(s,t,e){let n;function i(h){n=h}function r(h,c){s.drawArrays(n,h,c),e.update(c,n,1)}function o(h,c,u){u!==0&&(s.drawArraysInstanced(n,h,c,u),e.update(c,n,u))}function a(h,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,c,0,u);let f=0;for(let g=0;g<u;g++)f+=c[g];e.update(f,n,1)}function l(h,c,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)o(h[g],c[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,c,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=c[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(U){return!(U!==kn&&n.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){let N=U===Sr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==ri&&n.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==ni&&!N)}function l(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=g>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:y,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:z,maxSamples:P}}function Km(s){let t=this,e=null,n=0,i=!1,r=!1,o=new yn,a=new pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,y=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!y)r?c(null):h();else{let E=r?0:n,S=E*4,_=p.clippingState||null;l.value=_,_=c(g,d,S,f);for(let z=0;z!==S;++z)_[z]=e[z];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,d,f,g){let x=u!==null?u.length:0,y=null;if(x!==0){if(y=l.value,g!==!0||y===null){let p=f+x*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(y===null||y.length<p)&&(y=new Float32Array(p));for(let S=0,_=f;S!==x;++S,_+=4)o.copy(u[S]).applyMatrix4(E,a),o.normal.toArray(y,_),y[_+3]=o.constant}l.value=y,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,y}}function Jm(s){let t=new WeakMap;function e(o,a){return a===qa?o.mapping=As:a===Ya&&(o.mapping=Rs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===qa||a===Ya)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new Al(l.height);return h.fromEquirectangularTexture(s,o),t.set(o,h),o.addEventListener("dispose",i),e(h.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var mo=class extends fo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vs=4,uh=[.125,.215,.35,.446,.526,.582],Oi=20,Ta=new mo,dh=new ue,Aa=null,Ra=0,Ca=0,Pa=!1,Ui=(1+Math.sqrt(5))/2,xs=1/Ui,fh=[new C(-Ui,xs,0),new C(Ui,xs,0),new C(-xs,0,Ui),new C(xs,0,Ui),new C(0,Ui,-xs),new C(0,Ui,xs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],ks=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Aa,Ra,Ca),this._renderer.xr.enabled=Pa,t.scissorTest=!1,$r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===As||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Sr,format:kn,colorSpace:Gs,depthBuffer:!1},i=ph(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qm(r)),this._blurMaterial=t0(r,t,e)}return i}_compileMaterial(t){let e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,Ta)}_sceneToCubeUV(t,e,n,i){let a=new tn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(dh),c.toneMapping=Mi,c.autoClear=!1;let f=new we({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new Dt(new Ct,f),x=!1,y=t.background;y?y.isColor&&(f.color.copy(y),t.background=null,x=!0):(f.color.copy(dh),x=!0);for(let p=0;p<6;p++){let E=p%3;E===0?(a.up.set(0,l[p],0),a.lookAt(h[p],0,0)):E===1?(a.up.set(0,0,l[p]),a.lookAt(0,h[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,h[p]));let S=this._cubeSize;$r(i,E*S,p>2?S:0,S,S),c.setRenderTarget(i),x&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=u,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===As||t.mapping===Rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;$r(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ta)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fh[(i-r-1)%fh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,u=new Dt(this._lodPlanes[i],h),d=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),x=r/g,y=isFinite(r)?1+Math.floor(c*x):Oi;y>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Oi}`);let p=[],E=0;for(let U=0;U<Oi;++U){let N=U/x,w=Math.exp(-N*N/2);p.push(w),U===0?E+=w:U<y&&(E+=2*w)}for(let U=0;U<p.length;U++)p[U]=p[U]/E;d.envMap.value=t.texture,d.samples.value=y,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let _=this._sizeLods[i],z=3*_*(i>S-vs?i-S+vs:0),P=4*(this._cubeSize-_);$r(e,z,P,3*_,2*_),l.setRenderTarget(e),l.render(u,Ta)}};function Qm(s){let t=[],e=[],n=[],i=s,r=s-vs+1+uh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-vs?l=uh[o-s+vs-1]:o===0&&(l=0),n.push(l);let h=1/(a-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,g=6,x=3,y=2,p=1,E=new Float32Array(x*g*f),S=new Float32Array(y*g*f),_=new Float32Array(p*g*f);for(let P=0;P<f;P++){let U=P%3*2/3-1,N=P>2?0:-1,w=[U,N,0,U+2/3,N,0,U+2/3,N+1,0,U,N,0,U+2/3,N+1,0,U,N+1,0];E.set(w,x*g*P),S.set(d,y*g*P);let M=[P,P,P,P,P,P];_.set(M,p*g*P)}let z=new ze;z.setAttribute("position",new Sn(E,x)),z.setAttribute("uv",new Sn(S,y)),z.setAttribute("faceIndex",new Sn(_,p)),t.push(z),i>vs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ph(s,t,e){let n=new ai(s,t,e);return n.texture.mapping=Lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function t0(s,t,e){let n=new Float32Array(Oi),i=new C(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function mh(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function gh(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function mc(){return`

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
	`}function e0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,h=l===qa||l===Ya,c=l===As||l===Rs;if(h||c){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ks(s)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return h&&f&&f.height>0||c&&f&&i(f)?(e===null&&(e=new ks(s)),u=h?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function r(a){let l=a.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function n0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ir("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function i0(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let y=0,p=x.length;y<p;y++)t.remove(x[y])}d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let y=0,p=x.length;y<p;y++)t.update(x[y],s.ARRAY_BUFFER)}}function h(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let E=f.array;x=f.version;for(let S=0,_=E.length;S<_;S+=3){let z=E[S+0],P=E[S+1],U=E[S+2];d.push(z,P,P,U,U,z)}}else if(g!==void 0){let E=g.array;x=g.version;for(let S=0,_=E.length/3-1;S<_;S+=3){let z=S+0,P=S+1,U=S+2;d.push(z,P,P,U,U,z)}}else return;let y=new(au(d)?uo:ho)(d,1);y.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,y)}function c(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:c}}function s0(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function h(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function c(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let y=0;for(let p=0;p<g;p++)y+=f[p];e.update(y,n,1)}function u(d,f,g,x){if(g===0)return;let y=t.get("WEBGL_multi_draw");if(y===null)for(let p=0;p<d.length;p++)h(d[p]/o,f[p],x[p]);else{y.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*x[E];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function r0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function o0(s,t,e){let n=new WeakMap,i=new Ce;function r(o,a,l){let h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){U.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,y=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let _=a.attributes.position.count*S,z=1;_>t.maxTextureSize&&(z=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let P=new Float32Array(_*z*4*u),U=new co(P,_,z,u);U.type=ni,U.needsUpdate=!0;let N=S*4;for(let M=0;M<u;M++){let T=y[M],G=p[M],W=E[M],$=_*z*4*M;for(let V=0;V<T.count;V++){let O=V*N;f===!0&&(i.fromBufferAttribute(T,V),P[$+O+0]=i.x,P[$+O+1]=i.y,P[$+O+2]=i.z,P[$+O+3]=0),g===!0&&(i.fromBufferAttribute(G,V),P[$+O+4]=i.x,P[$+O+5]=i.y,P[$+O+6]=i.z,P[$+O+7]=0),x===!0&&(i.fromBufferAttribute(W,V),P[$+O+8]=i.x,P[$+O+9]=i.y,P[$+O+10]=i.z,P[$+O+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:U,size:new wt(_,z)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<h.length;x++)f+=h[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",h)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function a0(s,t,e,n){let i=new WeakMap;function r(l){let h=n.render.frame,c=l.geometry,u=t.get(l,c);if(i.get(u)!==h&&(t.update(u),i.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return u}function o(){i=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var go=class extends xn{constructor(t,e,n,i,r,o,a,l,h,c=Ss){if(c!==Ss&&c!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Ss&&(n=Hi),n===void 0&&c===Ps&&(n=Cs),super(null,i,r,o,a,l,c,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},uu=new xn,yh=new go(1,1),du=new co,fu=new wl,pu=new po,xh=[],_h=[],vh=new Float32Array(16),Mh=new Float32Array(9),bh=new Float32Array(4);function Ws(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=xh[i];if(r===void 0&&(r=new Float32Array(i),xh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function $e(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function qe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ko(s,t){let e=_h[t];e===void 0&&(e=new Int32Array(t),_h[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function l0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function c0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2fv(this.addr,t),qe(e,t)}}function h0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;s.uniform3fv(this.addr,t),qe(e,t)}}function u0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4fv(this.addr,t),qe(e,t)}}function d0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if($e(e,n))return;bh.set(n),s.uniformMatrix2fv(this.addr,!1,bh),qe(e,n)}}function f0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if($e(e,n))return;Mh.set(n),s.uniformMatrix3fv(this.addr,!1,Mh),qe(e,n)}}function p0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if($e(e,n))return;vh.set(n),s.uniformMatrix4fv(this.addr,!1,vh),qe(e,n)}}function m0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function g0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2iv(this.addr,t),qe(e,t)}}function y0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;s.uniform3iv(this.addr,t),qe(e,t)}}function x0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4iv(this.addr,t),qe(e,t)}}function _0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function v0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;s.uniform2uiv(this.addr,t),qe(e,t)}}function M0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;s.uniform3uiv(this.addr,t),qe(e,t)}}function b0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;s.uniform4uiv(this.addr,t),qe(e,t)}}function S0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(yh.compareFunction=ou,r=yh):r=uu,e.setTexture2D(t||r,i)}function E0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||fu,i)}function w0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||pu,i)}function T0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||du,i)}function A0(s){switch(s){case 5126:return l0;case 35664:return c0;case 35665:return h0;case 35666:return u0;case 35674:return d0;case 35675:return f0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return y0;case 35669:case 35673:return x0;case 5125:return _0;case 36294:return v0;case 36295:return M0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return T0}}function R0(s,t){s.uniform1fv(this.addr,t)}function C0(s,t){let e=Ws(t,this.size,2);s.uniform2fv(this.addr,e)}function P0(s,t){let e=Ws(t,this.size,3);s.uniform3fv(this.addr,e)}function I0(s,t){let e=Ws(t,this.size,4);s.uniform4fv(this.addr,e)}function L0(s,t){let e=Ws(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function D0(s,t){let e=Ws(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function k0(s,t){let e=Ws(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function U0(s,t){s.uniform1iv(this.addr,t)}function N0(s,t){s.uniform2iv(this.addr,t)}function z0(s,t){s.uniform3iv(this.addr,t)}function O0(s,t){s.uniform4iv(this.addr,t)}function F0(s,t){s.uniform1uiv(this.addr,t)}function B0(s,t){s.uniform2uiv(this.addr,t)}function H0(s,t){s.uniform3uiv(this.addr,t)}function V0(s,t){s.uniform4uiv(this.addr,t)}function G0(s,t,e){let n=this.cache,i=t.length,r=ko(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||uu,r[o])}function W0(s,t,e){let n=this.cache,i=t.length,r=ko(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||fu,r[o])}function X0(s,t,e){let n=this.cache,i=t.length,r=ko(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||pu,r[o])}function $0(s,t,e){let n=this.cache,i=t.length,r=ko(e,i);$e(n,r)||(s.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||du,r[o])}function q0(s){switch(s){case 5126:return R0;case 35664:return C0;case 35665:return P0;case 35666:return I0;case 35674:return L0;case 35675:return D0;case 35676:return k0;case 5124:case 35670:return U0;case 35667:case 35671:return N0;case 35668:case 35672:return z0;case 35669:case 35673:return O0;case 5125:return F0;case 36294:return B0;case 36295:return H0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return $0}}var Rl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=A0(e.type)}},Cl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q0(e.type)}},Pl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Ia=/(\w+)(\])?(\[|\.)?/g;function Sh(s,t){s.seq.push(t),s.map[t.id]=t}function Y0(s,t,e){let n=s.name,i=n.length;for(Ia.lastIndex=0;;){let r=Ia.exec(n),o=Ia.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===i){Sh(e,h===void 0?new Rl(a,s,t):new Cl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Pl(a),Sh(e,u)),e=u}}}var ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Y0(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Eh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var j0=37297,Z0=0;function K0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var wh=new pe;function J0(s){Ee._getMatrix(wh,Ee.workingColorSpace,s);let t=`mat3( ${wh.elements.map(e=>e.toFixed(4))} )`;switch(Ee.getTransfer(s)){case Do:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Th(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+K0(s.getShaderSource(t),o)}else return i}function Q0(s,t){let e=J0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function tg(s,t){let e;switch(t){case hd:e="Linear";break;case ud:e="Reinhard";break;case dd:e="Cineon";break;case ac:e="ACESFilmic";break;case pd:e="AgX";break;case md:e="Neutral";break;case fd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var qr=new C;function eg(){Ee.getLuminanceCoefficients(qr);let s=qr.x.toFixed(4),t=qr.y.toFixed(4),e=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ng(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function ig(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function sr(s){return s!==""}function Ah(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Il(s){return s.replace(rg,ag)}var og=new Map;function ag(s,t){let e=me[t];if(e===void 0){let n=og.get(t);if(n!==void 0)e=me[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Il(e)}var lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(s){return s.replace(lg,cg)}function cg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ph(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function hg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===$h?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===oc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function ug(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case As:case Rs:t="ENVMAP_TYPE_CUBE";break;case Lo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Rs:t="ENVMAP_MODE_REFRACTION";break}return t}function fg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case qh:t="ENVMAP_BLENDING_MULTIPLY";break;case ld:t="ENVMAP_BLENDING_MIX";break;case cd:t="ENVMAP_BLENDING_ADD";break}return t}function pg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function mg(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=hg(e),h=ug(e),c=dg(e),u=fg(e),d=pg(e),f=ng(e),g=ig(r),x=i.createProgram(),y,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(y=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?me.tonemapping_pars_fragment:"",e.toneMapping!==Mi?tg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,Q0("linearToOutputTexel",e.outputColorSpace),eg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sr).join(`
`)),o=Il(o),o=Ah(o,e),o=Rh(o,e),a=Il(a),a=Ah(a,e),a=Rh(a,e),o=Ch(o),a=Ch(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",e.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=E+y+o,_=E+p+a,z=Eh(i,i.VERTEX_SHADER,S),P=Eh(i,i.FRAGMENT_SHADER,_);i.attachShader(x,z),i.attachShader(x,P),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function U(T){if(s.debug.checkShaderErrors){let G=i.getProgramInfoLog(x).trim(),W=i.getShaderInfoLog(z).trim(),$=i.getShaderInfoLog(P).trim(),V=!0,O=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,z,P);else{let K=Th(i,z,"vertex"),X=Th(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+G+`
`+K+`
`+X)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(W===""||$==="")&&(O=!1);O&&(T.diagnostics={runnable:V,programLog:G,vertexShader:{log:W,prefix:y},fragmentShader:{log:$,prefix:p}})}i.deleteShader(z),i.deleteShader(P),N=new ws(i,x),w=sg(i,x)}let N;this.getUniforms=function(){return N===void 0&&U(this),N};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,j0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Z0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=z,this.fragmentShader=P,this}var gg=0,Ll=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Dl(t),e.set(t,n)),n}},Dl=class{constructor(t){this.id=gg++,this.code=t,this.usedTimes=0}};function yg(s,t,e,n,i,r,o){let a=new dr,l=new Ll,h=new Set,c=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return h.add(w),w===0?"uv":`uv${w}`}function y(w,M,T,G,W){let $=G.fog,V=W.geometry,O=w.isMeshStandardMaterial?G.environment:null,K=(w.isMeshStandardMaterial?e:t).get(w.envMap||O),X=K&&K.mapping===Lo?K.image.height:null,rt=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let vt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,yt=vt!==void 0?vt.length:0,zt=0;V.morphAttributes.position!==void 0&&(zt=1),V.morphAttributes.normal!==void 0&&(zt=2),V.morphAttributes.color!==void 0&&(zt=3);let Tt,Y,it,At;if(rt){let Nt=Gn[rt];Tt=Nt.vertexShader,Y=Nt.fragmentShader}else Tt=w.vertexShader,Y=w.fragmentShader,l.update(w),it=l.getVertexShaderID(w),At=l.getFragmentShaderID(w);let ft=s.getRenderTarget(),Ot=s.state.buffers.depth.getReversed(),Gt=W.isInstancedMesh===!0,Ut=W.isBatchedMesh===!0,te=!!w.map,D=!!w.matcap,tt=!!K,A=!!w.aoMap,bt=!!w.lightMap,lt=!!w.bumpMap,ut=!!w.normalMap,gt=!!w.displacementMap,It=!!w.emissiveMap,Bt=!!w.metalnessMap,R=!!w.roughnessMap,b=w.anisotropy>0,J=w.clearcoat>0,ot=w.dispersion>0,mt=w.iridescence>0,et=w.sheen>0,Yt=w.transmission>0,L=b&&!!w.anisotropyMap,st=J&&!!w.clearcoatMap,F=J&&!!w.clearcoatNormalMap,j=J&&!!w.clearcoatRoughnessMap,Q=mt&&!!w.iridescenceMap,ht=mt&&!!w.iridescenceThicknessMap,Mt=et&&!!w.sheenColorMap,Rt=et&&!!w.sheenRoughnessMap,Kt=!!w.specularMap,Wt=!!w.specularColorMap,ne=!!w.specularIntensityMap,B=Yt&&!!w.transmissionMap,kt=Yt&&!!w.thicknessMap,nt=!!w.gradientMap,pt=!!w.alphaMap,$t=w.alphaTest>0,qt=!!w.alphaHash,ae=!!w.extensions,le=Mi;w.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(le=s.toneMapping);let Z={shaderID:rt,shaderType:w.type,shaderName:w.name,vertexShader:Tt,fragmentShader:Y,defines:w.defines,customVertexShaderID:it,customFragmentShaderID:At,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ut,batchingColor:Ut&&W._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&W.instanceColor!==null,instancingMorph:Gt&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ft===null?s.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Gs,alphaToCoverage:!!w.alphaToCoverage,map:te,matcap:D,envMap:tt,envMapMode:tt&&K.mapping,envMapCubeUVHeight:X,aoMap:A,lightMap:bt,bumpMap:lt,normalMap:ut,displacementMap:d&&gt,emissiveMap:It,normalMapObjectSpace:ut&&w.normalMapType===_d,normalMapTangentSpace:ut&&w.normalMapType===ru,metalnessMap:Bt,roughnessMap:R,anisotropy:b,anisotropyMap:L,clearcoat:J,clearcoatMap:st,clearcoatNormalMap:F,clearcoatRoughnessMap:j,dispersion:ot,iridescence:mt,iridescenceMap:Q,iridescenceThicknessMap:ht,sheen:et,sheenColorMap:Mt,sheenRoughnessMap:Rt,specularMap:Kt,specularColorMap:Wt,specularIntensityMap:ne,transmission:Yt,transmissionMap:B,thicknessMap:kt,gradientMap:nt,opaque:w.transparent===!1&&w.blending===bs&&w.alphaToCoverage===!1,alphaMap:pt,alphaTest:$t,alphaHash:qt,combine:w.combine,mapUv:te&&x(w.map.channel),aoMapUv:A&&x(w.aoMap.channel),lightMapUv:bt&&x(w.lightMap.channel),bumpMapUv:lt&&x(w.bumpMap.channel),normalMapUv:ut&&x(w.normalMap.channel),displacementMapUv:gt&&x(w.displacementMap.channel),emissiveMapUv:It&&x(w.emissiveMap.channel),metalnessMapUv:Bt&&x(w.metalnessMap.channel),roughnessMapUv:R&&x(w.roughnessMap.channel),anisotropyMapUv:L&&x(w.anisotropyMap.channel),clearcoatMapUv:st&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:F&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&x(w.sheenRoughnessMap.channel),specularMapUv:Kt&&x(w.specularMap.channel),specularColorMapUv:Wt&&x(w.specularColorMap.channel),specularIntensityMapUv:ne&&x(w.specularIntensityMap.channel),transmissionMapUv:B&&x(w.transmissionMap.channel),thicknessMapUv:kt&&x(w.thicknessMap.channel),alphaMapUv:pt&&x(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ut||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!V.attributes.uv&&(te||pt),fog:!!$,useFog:w.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ot,skinning:W.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:zt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:le,decodeVideoTexture:te&&w.map.isVideoTexture===!0&&Ee.getTransfer(w.map.colorSpace)===Re,decodeVideoTextureEmissive:It&&w.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(w.emissiveMap.colorSpace)===Re,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Xe,flipSided:w.side===Ve,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ae&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&w.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Z.vertexUv1s=h.has(1),Z.vertexUv2s=h.has(2),Z.vertexUv3s=h.has(3),h.clear(),Z}function p(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let T in w.defines)M.push(T),M.push(w.defines[T]);return w.isRawShaderMaterial===!1&&(E(M,w),S(M,w),M.push(s.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function E(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function S(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){let M=g[w.type],T;if(M){let G=Gn[M];T=af.clone(G.uniforms)}else T=w.uniforms;return T}function z(w,M){let T;for(let G=0,W=c.length;G<W;G++){let $=c[G];if($.cacheKey===M){T=$,++T.usedTimes;break}}return T===void 0&&(T=new mg(s,M,w,r),c.push(T)),T}function P(w){if(--w.usedTimes===0){let M=c.indexOf(w);c[M]=c[c.length-1],c.pop(),w.destroy()}}function U(w){l.remove(w)}function N(){l.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:_,acquireProgram:z,releaseProgram:P,releaseShaderCache:U,programs:c,dispose:N}}function xg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function _g(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ih(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Lh(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,x,y){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:y},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=y),t++,p}function a(u,d,f,g,x,y){let p=o(u,d,f,g,x,y);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,x,y){let p=o(u,d,f,g,x,y);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function h(u,d){e.length>1&&e.sort(u||_g),n.length>1&&n.sort(d||Ih),i.length>1&&i.sort(d||Ih)}function c(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:c,sort:h}}function vg(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Lh,s.set(n,[o])):i>=r.length?(o=new Lh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Mg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new ue};break;case"SpotLight":e={position:new C,direction:new C,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new ue,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":e={color:new ue,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function bg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Sg=0;function Eg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function wg(s){let t=new Mg,e=bg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new C);let i=new C,r=new Ie,o=new Ie;function a(h){let c=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,x=0,y=0,p=0,E=0,S=0,_=0,z=0,P=0,U=0;h.sort(Eg);for(let w=0,M=h.length;w<M;w++){let T=h[w],G=T.color,W=T.intensity,$=T.distance,V=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)c+=G.r*W,u+=G.g*W,d+=G.b*W;else if(T.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(T.sh.coefficients[O],W);U++}else if(T.isDirectionalLight){let O=t.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let K=T.shadow,X=e.get(T);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=T.shadow.matrix,E++}n.directional[f]=O,f++}else if(T.isSpotLight){let O=t.get(T);O.position.setFromMatrixPosition(T.matrixWorld),O.color.copy(G).multiplyScalar(W),O.distance=$,O.coneCos=Math.cos(T.angle),O.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),O.decay=T.decay,n.spot[x]=O;let K=T.shadow;if(T.map&&(n.spotLightMap[z]=T.map,z++,K.updateMatrices(T),T.castShadow&&P++),n.spotLightMatrix[x]=K.matrix,T.castShadow){let X=e.get(T);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=V,_++}x++}else if(T.isRectAreaLight){let O=t.get(T);O.color.copy(G).multiplyScalar(W),O.halfWidth.set(T.width*.5,0,0),O.halfHeight.set(0,T.height*.5,0),n.rectArea[y]=O,y++}else if(T.isPointLight){let O=t.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),O.distance=T.distance,O.decay=T.decay,T.castShadow){let K=T.shadow,X=e.get(T);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=T.shadow.matrix,S++}n.point[g]=O,g++}else if(T.isHemisphereLight){let O=t.get(T);O.skyColor.copy(T.color).multiplyScalar(W),O.groundColor.copy(T.groundColor).multiplyScalar(W),n.hemi[p]=O,p++}}y>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xt.LTC_FLOAT_1,n.rectAreaLTC2=Xt.LTC_FLOAT_2):(n.rectAreaLTC1=Xt.LTC_HALF_1,n.rectAreaLTC2=Xt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=d;let N=n.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==y||N.hemiLength!==p||N.numDirectionalShadows!==E||N.numPointShadows!==S||N.numSpotShadows!==_||N.numSpotMaps!==z||N.numLightProbes!==U)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=y,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+z-P,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=U,N.directionalLength=f,N.pointLength=g,N.spotLength=x,N.rectAreaLength=y,N.hemiLength=p,N.numDirectionalShadows=E,N.numPointShadows=S,N.numSpotShadows=_,N.numSpotMaps=z,N.numLightProbes=U,n.version=Sg++)}function l(h,c){let u=0,d=0,f=0,g=0,x=0,y=c.matrixWorldInverse;for(let p=0,E=h.length;p<E;p++){let S=h[p];if(S.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(y),u++}else if(S.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(y),_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(y),f++}else if(S.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(y),o.identity(),r.copy(S.matrixWorld),r.premultiply(y),o.extractRotation(r),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(y),d++}else if(S.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(y),x++}}}return{setup:a,setupView:l,state:n}}function Dh(s){let t=new wg(s),e=[],n=[];function i(c){h.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function o(c){n.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}let h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Tg(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Dh(s),t.set(i,[a])):r>=o.length?(a=new Dh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var kl=class extends Si{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ul=class extends Si{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rg=`uniform sampler2D shadow_pass;
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
}`;function Cg(s,t,e){let n=new fr,i=new wt,r=new wt,o=new Ce,a=new kl({depthPacking:xd}),l=new Ul,h={},c=e.maxTextureSize,u={[bi]:Ve,[Ve]:bi,[Xe]:Xe},d=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Ag,fragmentShader:Rg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ze;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Dt(g,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$h;let p=this.type;this.render=function(P,U,N){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;let w=s.getRenderTarget(),M=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),G=s.state;G.setBlending(vi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let W=p!==ei&&this.type===ei,$=p===ei&&this.type!==ei;for(let V=0,O=P.length;V<O;V++){let K=P[V],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let rt=X.getFrameExtents();if(i.multiply(rt),r.copy(X.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/rt.x),i.x=r.x*rt.x,X.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/rt.y),i.y=r.y*rt.y,X.mapSize.y=r.y)),X.map===null||W===!0||$===!0){let yt=this.type!==ei?{minFilter:Un,magFilter:Un}:{};X.map!==null&&X.map.dispose(),X.map=new ai(i.x,i.y,yt),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();let vt=X.getViewportCount();for(let yt=0;yt<vt;yt++){let zt=X.getViewport(yt);o.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),G.viewport(o),X.updateMatrices(K,yt),n=X.getFrustum(),_(U,N,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===ei&&E(X,N),X.needsUpdate=!1}p=this.type,y.needsUpdate=!1,s.setRenderTarget(w,M,T)};function E(P,U){let N=t.update(x);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ai(i.x,i.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(U,null,N,d,x,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(U,null,N,f,x,null)}function S(P,U,N,w){let M=null,T=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(T!==void 0)M=T;else if(M=N.isPointLight===!0?l:a,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){let G=M.uuid,W=U.uuid,$=h[G];$===void 0&&($={},h[G]=$);let V=$[W];V===void 0&&(V=M.clone(),$[W]=V,U.addEventListener("dispose",z)),M=V}if(M.visible=U.visible,M.wireframe=U.wireframe,w===ei?M.side=U.shadowSide!==null?U.shadowSide:U.side:M.side=U.shadowSide!==null?U.shadowSide:u[U.side],M.alphaMap=U.alphaMap,M.alphaTest=U.alphaTest,M.map=U.map,M.clipShadows=U.clipShadows,M.clippingPlanes=U.clippingPlanes,M.clipIntersection=U.clipIntersection,M.displacementMap=U.displacementMap,M.displacementScale=U.displacementScale,M.displacementBias=U.displacementBias,M.wireframeLinewidth=U.wireframeLinewidth,M.linewidth=U.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let G=s.properties.get(M);G.light=N}return M}function _(P,U,N,w,M){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===ei)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);let W=t.update(P),$=P.material;if(Array.isArray($)){let V=W.groups;for(let O=0,K=V.length;O<K;O++){let X=V[O],rt=$[X.materialIndex];if(rt&&rt.visible){let vt=S(P,rt,w,M);P.onBeforeShadow(s,P,U,N,W,vt,X),s.renderBufferDirect(N,null,W,vt,P,X),P.onAfterShadow(s,P,U,N,W,vt,X)}}}else if($.visible){let V=S(P,$,w,M);P.onBeforeShadow(s,P,U,N,W,V,null),s.renderBufferDirect(N,null,W,V,P,null),P.onAfterShadow(s,P,U,N,W,V,null)}}let G=P.children;for(let W=0,$=G.length;W<$;W++)_(G[W],U,N,w,M)}function z(P){P.target.removeEventListener("dispose",z);for(let N in h){let w=h[N],M=P.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}var Pg={[Ba]:Ha,[Va]:Xa,[Ga]:$a,[Ts]:Wa,[Ha]:Ba,[Xa]:Va,[$a]:Ga,[Wa]:Ts};function Ig(s,t){function e(){let B=!1,kt=new Ce,nt=null,pt=new Ce(0,0,0,0);return{setMask:function($t){nt!==$t&&!B&&(s.colorMask($t,$t,$t,$t),nt=$t)},setLocked:function($t){B=$t},setClear:function($t,qt,ae,le,Z){Z===!0&&($t*=le,qt*=le,ae*=le),kt.set($t,qt,ae,le),pt.equals(kt)===!1&&(s.clearColor($t,qt,ae,le),pt.copy(kt))},reset:function(){B=!1,nt=null,pt.set(-1,0,0,0)}}}function n(){let B=!1,kt=!1,nt=null,pt=null,$t=null;return{setReversed:function(qt){if(kt!==qt){let ae=t.get("EXT_clip_control");kt?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT);let le=$t;$t=null,this.setClear(le)}kt=qt},getReversed:function(){return kt},setTest:function(qt){qt?ft(s.DEPTH_TEST):Ot(s.DEPTH_TEST)},setMask:function(qt){nt!==qt&&!B&&(s.depthMask(qt),nt=qt)},setFunc:function(qt){if(kt&&(qt=Pg[qt]),pt!==qt){switch(qt){case Ba:s.depthFunc(s.NEVER);break;case Ha:s.depthFunc(s.ALWAYS);break;case Va:s.depthFunc(s.LESS);break;case Ts:s.depthFunc(s.LEQUAL);break;case Ga:s.depthFunc(s.EQUAL);break;case Wa:s.depthFunc(s.GEQUAL);break;case Xa:s.depthFunc(s.GREATER);break;case $a:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pt=qt}},setLocked:function(qt){B=qt},setClear:function(qt){$t!==qt&&(kt&&(qt=1-qt),s.clearDepth(qt),$t=qt)},reset:function(){B=!1,nt=null,pt=null,$t=null,kt=!1}}}function i(){let B=!1,kt=null,nt=null,pt=null,$t=null,qt=null,ae=null,le=null,Z=null;return{setTest:function(Nt){B||(Nt?ft(s.STENCIL_TEST):Ot(s.STENCIL_TEST))},setMask:function(Nt){kt!==Nt&&!B&&(s.stencilMask(Nt),kt=Nt)},setFunc:function(Nt,Pt,dn){(nt!==Nt||pt!==Pt||$t!==dn)&&(s.stencilFunc(Nt,Pt,dn),nt=Nt,pt=Pt,$t=dn)},setOp:function(Nt,Pt,dn){(qt!==Nt||ae!==Pt||le!==dn)&&(s.stencilOp(Nt,Pt,dn),qt=Nt,ae=Pt,le=dn)},setLocked:function(Nt){B=Nt},setClear:function(Nt){Z!==Nt&&(s.clearStencil(Nt),Z=Nt)},reset:function(){B=!1,kt=null,nt=null,pt=null,$t=null,qt=null,ae=null,le=null,Z=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,h=new WeakMap,c={},u={},d=new WeakMap,f=[],g=null,x=!1,y=null,p=null,E=null,S=null,_=null,z=null,P=null,U=new ue(0,0,0),N=0,w=!1,M=null,T=null,G=null,W=null,$=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,K=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),O=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),O=K>=2);let rt=null,vt={},yt=s.getParameter(s.SCISSOR_BOX),zt=s.getParameter(s.VIEWPORT),Tt=new Ce().fromArray(yt),Y=new Ce().fromArray(zt);function it(B,kt,nt,pt){let $t=new Uint8Array(4),qt=s.createTexture();s.bindTexture(B,qt),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<nt;ae++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(kt,0,s.RGBA,1,1,pt,0,s.RGBA,s.UNSIGNED_BYTE,$t):s.texImage2D(kt+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,$t);return qt}let At={};At[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),At[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),At[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(s.DEPTH_TEST),o.setFunc(Ts),lt(!1),ut(kc),ft(s.CULL_FACE),A(vi);function ft(B){c[B]!==!0&&(s.enable(B),c[B]=!0)}function Ot(B){c[B]!==!1&&(s.disable(B),c[B]=!1)}function Gt(B,kt){return u[B]!==kt?(s.bindFramebuffer(B,kt),u[B]=kt,B===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=kt),B===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=kt),!0):!1}function Ut(B,kt){let nt=f,pt=!1;if(B){nt=d.get(kt),nt===void 0&&(nt=[],d.set(kt,nt));let $t=B.textures;if(nt.length!==$t.length||nt[0]!==s.COLOR_ATTACHMENT0){for(let qt=0,ae=$t.length;qt<ae;qt++)nt[qt]=s.COLOR_ATTACHMENT0+qt;nt.length=$t.length,pt=!0}}else nt[0]!==s.BACK&&(nt[0]=s.BACK,pt=!0);pt&&s.drawBuffers(nt)}function te(B){return g!==B?(s.useProgram(B),g=B,!0):!1}let D={[Ni]:s.FUNC_ADD,[Xu]:s.FUNC_SUBTRACT,[$u]:s.FUNC_REVERSE_SUBTRACT};D[qu]=s.MIN,D[Yu]=s.MAX;let tt={[ju]:s.ZERO,[Zu]:s.ONE,[Ku]:s.SRC_COLOR,[Oa]:s.SRC_ALPHA,[id]:s.SRC_ALPHA_SATURATE,[ed]:s.DST_COLOR,[Qu]:s.DST_ALPHA,[Ju]:s.ONE_MINUS_SRC_COLOR,[Fa]:s.ONE_MINUS_SRC_ALPHA,[nd]:s.ONE_MINUS_DST_COLOR,[td]:s.ONE_MINUS_DST_ALPHA,[sd]:s.CONSTANT_COLOR,[rd]:s.ONE_MINUS_CONSTANT_COLOR,[od]:s.CONSTANT_ALPHA,[ad]:s.ONE_MINUS_CONSTANT_ALPHA};function A(B,kt,nt,pt,$t,qt,ae,le,Z,Nt){if(B===vi){x===!0&&(Ot(s.BLEND),x=!1);return}if(x===!1&&(ft(s.BLEND),x=!0),B!==Wu){if(B!==y||Nt!==w){if((p!==Ni||_!==Ni)&&(s.blendEquation(s.FUNC_ADD),p=Ni,_=Ni),Nt)switch(B){case bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Uc:s.blendFunc(s.ONE,s.ONE);break;case Nc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Uc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Nc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}E=null,S=null,z=null,P=null,U.set(0,0,0),N=0,y=B,w=Nt}return}$t=$t||kt,qt=qt||nt,ae=ae||pt,(kt!==p||$t!==_)&&(s.blendEquationSeparate(D[kt],D[$t]),p=kt,_=$t),(nt!==E||pt!==S||qt!==z||ae!==P)&&(s.blendFuncSeparate(tt[nt],tt[pt],tt[qt],tt[ae]),E=nt,S=pt,z=qt,P=ae),(le.equals(U)===!1||Z!==N)&&(s.blendColor(le.r,le.g,le.b,Z),U.copy(le),N=Z),y=B,w=!1}function bt(B,kt){B.side===Xe?Ot(s.CULL_FACE):ft(s.CULL_FACE);let nt=B.side===Ve;kt&&(nt=!nt),lt(nt),B.blending===bs&&B.transparent===!1?A(vi):A(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let pt=B.stencilWrite;a.setTest(pt),pt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),It(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ft(s.SAMPLE_ALPHA_TO_COVERAGE):Ot(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(B){M!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),M=B)}function ut(B){B!==Vu?(ft(s.CULL_FACE),B!==T&&(B===kc?s.cullFace(s.BACK):B===Gu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ot(s.CULL_FACE),T=B}function gt(B){B!==G&&(O&&s.lineWidth(B),G=B)}function It(B,kt,nt){B?(ft(s.POLYGON_OFFSET_FILL),(W!==kt||$!==nt)&&(s.polygonOffset(kt,nt),W=kt,$=nt)):Ot(s.POLYGON_OFFSET_FILL)}function Bt(B){B?ft(s.SCISSOR_TEST):Ot(s.SCISSOR_TEST)}function R(B){B===void 0&&(B=s.TEXTURE0+V-1),rt!==B&&(s.activeTexture(B),rt=B)}function b(B,kt,nt){nt===void 0&&(rt===null?nt=s.TEXTURE0+V-1:nt=rt);let pt=vt[nt];pt===void 0&&(pt={type:void 0,texture:void 0},vt[nt]=pt),(pt.type!==B||pt.texture!==kt)&&(rt!==nt&&(s.activeTexture(nt),rt=nt),s.bindTexture(B,kt||At[B]),pt.type=B,pt.texture=kt)}function J(){let B=vt[rt];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ot(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Yt(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function L(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function F(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(B){Tt.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Tt.copy(B))}function Rt(B){Y.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Y.copy(B))}function Kt(B,kt){let nt=h.get(kt);nt===void 0&&(nt=new WeakMap,h.set(kt,nt));let pt=nt.get(B);pt===void 0&&(pt=s.getUniformBlockIndex(kt,B.name),nt.set(B,pt))}function Wt(B,kt){let pt=h.get(kt).get(B);l.get(kt)!==pt&&(s.uniformBlockBinding(kt,pt,B.__bindingPointIndex),l.set(kt,pt))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},rt=null,vt={},u={},d=new WeakMap,f=[],g=null,x=!1,y=null,p=null,E=null,S=null,_=null,z=null,P=null,U=new ue(0,0,0),N=0,w=!1,M=null,T=null,G=null,W=null,$=null,Tt.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ft,disable:Ot,bindFramebuffer:Gt,drawBuffers:Ut,useProgram:te,setBlending:A,setMaterial:bt,setFlipSided:lt,setCullFace:ut,setLineWidth:gt,setPolygonOffset:It,setScissorTest:Bt,activeTexture:R,bindTexture:b,unbindTexture:J,compressedTexImage2D:ot,compressedTexImage3D:mt,texImage2D:Q,texImage3D:ht,updateUBOMapping:Kt,uniformBlockBinding:Wt,texStorage2D:F,texStorage3D:j,texSubImage2D:et,texSubImage3D:Yt,compressedTexSubImage2D:L,compressedTexSubImage3D:st,scissor:Mt,viewport:Rt,reset:ne}}function kh(s,t,e,n){let i=Lg(n);switch(e){case Jh:return s*t;case tu:return s*t;case eu:return s*t*2;case nu:return s*t/i.components*i.byteLength;case uc:return s*t/i.components*i.byteLength;case iu:return s*t*2/i.components*i.byteLength;case dc:return s*t*2/i.components*i.byteLength;case Qh:return s*t*3/i.components*i.byteLength;case kn:return s*t*4/i.components*i.byteLength;case fc:return s*t*4/i.components*i.byteLength;case to:case eo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case no:case io:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ka:case Qa:return Math.max(s,16)*Math.max(t,8)/4;case Za:case Ja:return Math.max(s,8)*Math.max(t,8)/2;case tl:case el:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case nl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case il:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case rl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ol:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case al:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ll:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case cl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case hl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ul:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case dl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case fl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case pl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ml:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case gl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case so:case yl:case xl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case su:case _l:return Math.ceil(s/4)*Math.ceil(t/4)*8;case vl:case Ml:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lg(s){switch(s){case ri:case jh:return{byteLength:1,components:1};case ur:case Zh:case Sr:return{byteLength:2,components:1};case cc:case hc:return{byteLength:2,components:4};case Hi:case lc:case ni:return{byteLength:4,components:1};case Kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Dg(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new wt,c=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):ao("canvas")}function x(R,b,J){let ot=1,mt=Bt(R);if((mt.width>J||mt.height>J)&&(ot=J/Math.max(mt.width,mt.height)),ot<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let et=Math.floor(ot*mt.width),Yt=Math.floor(ot*mt.height);u===void 0&&(u=g(et,Yt));let L=b?g(et,Yt):u;return L.width=et,L.height=Yt,L.getContext("2d").drawImage(R,0,0,et,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+et+"x"+Yt+")."),L}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),R;return R}function y(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(R,b,J,ot,mt=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let et=b;if(b===s.RED&&(J===s.FLOAT&&(et=s.R32F),J===s.HALF_FLOAT&&(et=s.R16F),J===s.UNSIGNED_BYTE&&(et=s.R8)),b===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(et=s.R8UI),J===s.UNSIGNED_SHORT&&(et=s.R16UI),J===s.UNSIGNED_INT&&(et=s.R32UI),J===s.BYTE&&(et=s.R8I),J===s.SHORT&&(et=s.R16I),J===s.INT&&(et=s.R32I)),b===s.RG&&(J===s.FLOAT&&(et=s.RG32F),J===s.HALF_FLOAT&&(et=s.RG16F),J===s.UNSIGNED_BYTE&&(et=s.RG8)),b===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(et=s.RG8UI),J===s.UNSIGNED_SHORT&&(et=s.RG16UI),J===s.UNSIGNED_INT&&(et=s.RG32UI),J===s.BYTE&&(et=s.RG8I),J===s.SHORT&&(et=s.RG16I),J===s.INT&&(et=s.RG32I)),b===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(et=s.RGB8UI),J===s.UNSIGNED_SHORT&&(et=s.RGB16UI),J===s.UNSIGNED_INT&&(et=s.RGB32UI),J===s.BYTE&&(et=s.RGB8I),J===s.SHORT&&(et=s.RGB16I),J===s.INT&&(et=s.RGB32I)),b===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(et=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(et=s.RGBA16UI),J===s.UNSIGNED_INT&&(et=s.RGBA32UI),J===s.BYTE&&(et=s.RGBA8I),J===s.SHORT&&(et=s.RGBA16I),J===s.INT&&(et=s.RGBA32I)),b===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),b===s.RGBA){let Yt=mt?Do:Ee.getTransfer(ot);J===s.FLOAT&&(et=s.RGBA32F),J===s.HALF_FLOAT&&(et=s.RGBA16F),J===s.UNSIGNED_BYTE&&(et=Yt===Re?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function _(R,b){let J;return R?b===null||b===Hi||b===Cs?J=s.DEPTH24_STENCIL8:b===ni?J=s.DEPTH32F_STENCIL8:b===ur&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Hi||b===Cs?J=s.DEPTH_COMPONENT24:b===ni?J=s.DEPTH_COMPONENT32F:b===ur&&(J=s.DEPTH_COMPONENT16),J}function z(R,b){return y(R)===!0||R.isFramebufferTexture&&R.minFilter!==Un&&R.minFilter!==Wn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function P(R){let b=R.target;b.removeEventListener("dispose",P),N(b),b.isVideoTexture&&c.delete(b)}function U(R){let b=R.target;b.removeEventListener("dispose",U),M(b)}function N(R){let b=n.get(R);if(b.__webglInit===void 0)return;let J=R.source,ot=d.get(J);if(ot){let mt=ot[b.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&w(R),Object.keys(ot).length===0&&d.delete(J)}n.remove(R)}function w(R){let b=n.get(R);s.deleteTexture(b.__webglTexture);let J=R.source,ot=d.get(J);delete ot[b.__cacheKey],o.memory.textures--}function M(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(b.__webglFramebuffer[ot]))for(let mt=0;mt<b.__webglFramebuffer[ot].length;mt++)s.deleteFramebuffer(b.__webglFramebuffer[ot][mt]);else s.deleteFramebuffer(b.__webglFramebuffer[ot]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ot])}else{if(Array.isArray(b.__webglFramebuffer))for(let ot=0;ot<b.__webglFramebuffer.length;ot++)s.deleteFramebuffer(b.__webglFramebuffer[ot]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ot=0;ot<b.__webglColorRenderbuffer.length;ot++)b.__webglColorRenderbuffer[ot]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ot]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let J=R.textures;for(let ot=0,mt=J.length;ot<mt;ot++){let et=n.get(J[ot]);et.__webglTexture&&(s.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(J[ot])}n.remove(R)}let T=0;function G(){T=0}function W(){let R=T;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),T+=1,R}function $(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function V(R,b){let J=n.get(R);if(R.isVideoTexture&&gt(R),R.isRenderTargetTexture===!1&&R.version>0&&J.__version!==R.version){let ot=R.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(J,R,b);return}}e.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+b)}function O(R,b){let J=n.get(R);if(R.version>0&&J.__version!==R.version){Y(J,R,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+b)}function K(R,b){let J=n.get(R);if(R.version>0&&J.__version!==R.version){Y(J,R,b);return}e.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+b)}function X(R,b){let J=n.get(R);if(R.version>0&&J.__version!==R.version){it(J,R,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+b)}let rt={[Nn]:s.REPEAT,[Fi]:s.CLAMP_TO_EDGE,[ja]:s.MIRRORED_REPEAT},vt={[Un]:s.NEAREST,[gd]:s.NEAREST_MIPMAP_NEAREST,[Ar]:s.NEAREST_MIPMAP_LINEAR,[Wn]:s.LINEAR,[sa]:s.LINEAR_MIPMAP_NEAREST,[Bi]:s.LINEAR_MIPMAP_LINEAR},yt={[vd]:s.NEVER,[Td]:s.ALWAYS,[Md]:s.LESS,[ou]:s.LEQUAL,[bd]:s.EQUAL,[wd]:s.GEQUAL,[Sd]:s.GREATER,[Ed]:s.NOTEQUAL};function zt(R,b){if(b.type===ni&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Wn||b.magFilter===sa||b.magFilter===Ar||b.magFilter===Bi||b.minFilter===Wn||b.minFilter===sa||b.minFilter===Ar||b.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,rt[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,rt[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,rt[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,vt[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,vt[b.minFilter]),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,yt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Un||b.minFilter!==Ar&&b.minFilter!==Bi||b.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Tt(R,b){let J=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",P));let ot=b.source,mt=d.get(ot);mt===void 0&&(mt={},d.set(ot,mt));let et=$(b);if(et!==R.__cacheKey){mt[et]===void 0&&(mt[et]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,J=!0),mt[et].usedTimes++;let Yt=mt[R.__cacheKey];Yt!==void 0&&(mt[R.__cacheKey].usedTimes--,Yt.usedTimes===0&&w(b)),R.__cacheKey=et,R.__webglTexture=mt[et].texture}return J}function Y(R,b,J){let ot=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ot=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ot=s.TEXTURE_3D);let mt=Tt(R,b),et=b.source;e.bindTexture(ot,R.__webglTexture,s.TEXTURE0+J);let Yt=n.get(et);if(et.version!==Yt.__version||mt===!0){e.activeTexture(s.TEXTURE0+J);let L=Ee.getPrimaries(Ee.workingColorSpace),st=b.colorSpace===_i?null:Ee.getPrimaries(b.colorSpace),F=b.colorSpace===_i||L===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,F);let j=x(b.image,!1,i.maxTextureSize);j=It(b,j);let Q=r.convert(b.format,b.colorSpace),ht=r.convert(b.type),Mt=S(b.internalFormat,Q,ht,b.colorSpace,b.isVideoTexture);zt(ot,b);let Rt,Kt=b.mipmaps,Wt=b.isVideoTexture!==!0,ne=Yt.__version===void 0||mt===!0,B=et.dataReady,kt=z(b,j);if(b.isDepthTexture)Mt=_(b.format===Ps,b.type),ne&&(Wt?e.texStorage2D(s.TEXTURE_2D,1,Mt,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,Mt,j.width,j.height,0,Q,ht,null));else if(b.isDataTexture)if(Kt.length>0){Wt&&ne&&e.texStorage2D(s.TEXTURE_2D,kt,Mt,Kt[0].width,Kt[0].height);for(let nt=0,pt=Kt.length;nt<pt;nt++)Rt=Kt[nt],Wt?B&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,Rt.width,Rt.height,Q,ht,Rt.data):e.texImage2D(s.TEXTURE_2D,nt,Mt,Rt.width,Rt.height,0,Q,ht,Rt.data);b.generateMipmaps=!1}else Wt?(ne&&e.texStorage2D(s.TEXTURE_2D,kt,Mt,j.width,j.height),B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,j.width,j.height,Q,ht,j.data)):e.texImage2D(s.TEXTURE_2D,0,Mt,j.width,j.height,0,Q,ht,j.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Wt&&ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,kt,Mt,Kt[0].width,Kt[0].height,j.depth);for(let nt=0,pt=Kt.length;nt<pt;nt++)if(Rt=Kt[nt],b.format!==kn)if(Q!==null)if(Wt){if(B)if(b.layerUpdates.size>0){let $t=kh(Rt.width,Rt.height,b.format,b.type);for(let qt of b.layerUpdates){let ae=Rt.data.subarray(qt*$t/Rt.data.BYTES_PER_ELEMENT,(qt+1)*$t/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,qt,Rt.width,Rt.height,1,Q,ae)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,Rt.width,Rt.height,j.depth,Q,Rt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,Mt,Rt.width,Rt.height,j.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?B&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,Rt.width,Rt.height,j.depth,Q,ht,Rt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,Mt,Rt.width,Rt.height,j.depth,0,Q,ht,Rt.data)}else{Wt&&ne&&e.texStorage2D(s.TEXTURE_2D,kt,Mt,Kt[0].width,Kt[0].height);for(let nt=0,pt=Kt.length;nt<pt;nt++)Rt=Kt[nt],b.format!==kn?Q!==null?Wt?B&&e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,Rt.width,Rt.height,Q,Rt.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,Mt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?B&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,Rt.width,Rt.height,Q,ht,Rt.data):e.texImage2D(s.TEXTURE_2D,nt,Mt,Rt.width,Rt.height,0,Q,ht,Rt.data)}else if(b.isDataArrayTexture)if(Wt){if(ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,kt,Mt,j.width,j.height,j.depth),B)if(b.layerUpdates.size>0){let nt=kh(j.width,j.height,b.format,b.type);for(let pt of b.layerUpdates){let $t=j.data.subarray(pt*nt/j.data.BYTES_PER_ELEMENT,(pt+1)*nt/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pt,j.width,j.height,1,Q,ht,$t)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Q,ht,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Mt,j.width,j.height,j.depth,0,Q,ht,j.data);else if(b.isData3DTexture)Wt?(ne&&e.texStorage3D(s.TEXTURE_3D,kt,Mt,j.width,j.height,j.depth),B&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Q,ht,j.data)):e.texImage3D(s.TEXTURE_3D,0,Mt,j.width,j.height,j.depth,0,Q,ht,j.data);else if(b.isFramebufferTexture){if(ne)if(Wt)e.texStorage2D(s.TEXTURE_2D,kt,Mt,j.width,j.height);else{let nt=j.width,pt=j.height;for(let $t=0;$t<kt;$t++)e.texImage2D(s.TEXTURE_2D,$t,Mt,nt,pt,0,Q,ht,null),nt>>=1,pt>>=1}}else if(Kt.length>0){if(Wt&&ne){let nt=Bt(Kt[0]);e.texStorage2D(s.TEXTURE_2D,kt,Mt,nt.width,nt.height)}for(let nt=0,pt=Kt.length;nt<pt;nt++)Rt=Kt[nt],Wt?B&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,Q,ht,Rt):e.texImage2D(s.TEXTURE_2D,nt,Mt,Q,ht,Rt);b.generateMipmaps=!1}else if(Wt){if(ne){let nt=Bt(j);e.texStorage2D(s.TEXTURE_2D,kt,Mt,nt.width,nt.height)}B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q,ht,j)}else e.texImage2D(s.TEXTURE_2D,0,Mt,Q,ht,j);y(b)&&p(ot),Yt.__version=et.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function it(R,b,J){if(b.image.length!==6)return;let ot=Tt(R,b),mt=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+J);let et=n.get(mt);if(mt.version!==et.__version||ot===!0){e.activeTexture(s.TEXTURE0+J);let Yt=Ee.getPrimaries(Ee.workingColorSpace),L=b.colorSpace===_i?null:Ee.getPrimaries(b.colorSpace),st=b.colorSpace===_i||Yt===L?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let F=b.isCompressedTexture||b.image[0].isCompressedTexture,j=b.image[0]&&b.image[0].isDataTexture,Q=[];for(let pt=0;pt<6;pt++)!F&&!j?Q[pt]=x(b.image[pt],!0,i.maxCubemapSize):Q[pt]=j?b.image[pt].image:b.image[pt],Q[pt]=It(b,Q[pt]);let ht=Q[0],Mt=r.convert(b.format,b.colorSpace),Rt=r.convert(b.type),Kt=S(b.internalFormat,Mt,Rt,b.colorSpace),Wt=b.isVideoTexture!==!0,ne=et.__version===void 0||ot===!0,B=mt.dataReady,kt=z(b,ht);zt(s.TEXTURE_CUBE_MAP,b);let nt;if(F){Wt&&ne&&e.texStorage2D(s.TEXTURE_CUBE_MAP,kt,Kt,ht.width,ht.height);for(let pt=0;pt<6;pt++){nt=Q[pt].mipmaps;for(let $t=0;$t<nt.length;$t++){let qt=nt[$t];b.format!==kn?Mt!==null?Wt?B&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,$t,0,0,qt.width,qt.height,Mt,qt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,$t,Kt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,$t,0,0,qt.width,qt.height,Mt,Rt,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,$t,Kt,qt.width,qt.height,0,Mt,Rt,qt.data)}}}else{if(nt=b.mipmaps,Wt&&ne){nt.length>0&&kt++;let pt=Bt(Q[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,kt,Kt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(j){Wt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Q[pt].width,Q[pt].height,Mt,Rt,Q[pt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Kt,Q[pt].width,Q[pt].height,0,Mt,Rt,Q[pt].data);for(let $t=0;$t<nt.length;$t++){let ae=nt[$t].image[pt].image;Wt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,$t+1,0,0,ae.width,ae.height,Mt,Rt,ae.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,$t+1,Kt,ae.width,ae.height,0,Mt,Rt,ae.data)}}else{Wt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Mt,Rt,Q[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Kt,Mt,Rt,Q[pt]);for(let $t=0;$t<nt.length;$t++){let qt=nt[$t];Wt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,$t+1,0,0,Mt,Rt,qt.image[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,$t+1,Kt,Mt,Rt,qt.image[pt])}}}y(b)&&p(s.TEXTURE_CUBE_MAP),et.__version=mt.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function At(R,b,J,ot,mt,et){let Yt=r.convert(J.format,J.colorSpace),L=r.convert(J.type),st=S(J.internalFormat,Yt,L,J.colorSpace),F=n.get(b),j=n.get(J);if(j.__renderTarget=b,!F.__hasExternalTextures){let Q=Math.max(1,b.width>>et),ht=Math.max(1,b.height>>et);mt===s.TEXTURE_3D||mt===s.TEXTURE_2D_ARRAY?e.texImage3D(mt,et,st,Q,ht,b.depth,0,Yt,L,null):e.texImage2D(mt,et,st,Q,ht,0,Yt,L,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),ut(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ot,mt,j.__webglTexture,0,lt(b)):(mt===s.TEXTURE_2D||mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ot,mt,j.__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(R,b,J){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer){let ot=b.depthTexture,mt=ot&&ot.isDepthTexture?ot.type:null,et=_(b.stencilBuffer,mt),Yt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,L=lt(b);ut(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,L,et,b.width,b.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,L,et,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,et,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Yt,s.RENDERBUFFER,R)}else{let ot=b.textures;for(let mt=0;mt<ot.length;mt++){let et=ot[mt],Yt=r.convert(et.format,et.colorSpace),L=r.convert(et.type),st=S(et.internalFormat,Yt,L,et.colorSpace),F=lt(b);J&&ut(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,F,st,b.width,b.height):ut(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,F,st,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,st,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ot(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ot=n.get(b.depthTexture);ot.__renderTarget=b,(!ot.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);let mt=ot.__webglTexture,et=lt(b);if(b.depthTexture.format===Ss)ut(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,mt,0);else if(b.depthTexture.format===Ps)ut(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function Gt(R){let b=n.get(R),J=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let ot=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ot){let mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ot.removeEventListener("dispose",mt)};ot.addEventListener("dispose",mt),b.__depthDisposeCallback=mt}b.__boundDepthTexture=ot}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ot(b.__webglFramebuffer,R)}else if(J){b.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ot]),b.__webglDepthbuffer[ot]===void 0)b.__webglDepthbuffer[ot]=s.createRenderbuffer(),ft(b.__webglDepthbuffer[ot],R,!1);else{let mt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer[ot];s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,mt,s.RENDERBUFFER,et)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ft(b.__webglDepthbuffer,R,!1);else{let ot=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,mt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(R,b,J){let ot=n.get(R);b!==void 0&&At(ot.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Gt(R)}function te(R){let b=R.texture,J=n.get(R),ot=n.get(b);R.addEventListener("dispose",U);let mt=R.textures,et=R.isWebGLCubeRenderTarget===!0,Yt=mt.length>1;if(Yt||(ot.__webglTexture===void 0&&(ot.__webglTexture=s.createTexture()),ot.__version=b.version,o.memory.textures++),et){J.__webglFramebuffer=[];for(let L=0;L<6;L++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[L]=[];for(let st=0;st<b.mipmaps.length;st++)J.__webglFramebuffer[L][st]=s.createFramebuffer()}else J.__webglFramebuffer[L]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let L=0;L<b.mipmaps.length;L++)J.__webglFramebuffer[L]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Yt)for(let L=0,st=mt.length;L<st;L++){let F=n.get(mt[L]);F.__webglTexture===void 0&&(F.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&ut(R)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let L=0;L<mt.length;L++){let st=mt[L];J.__webglColorRenderbuffer[L]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[L]);let F=r.convert(st.format,st.colorSpace),j=r.convert(st.type),Q=S(st.internalFormat,F,j,st.colorSpace,R.isXRRenderTarget===!0),ht=lt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,Q,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+L,s.RENDERBUFFER,J.__webglColorRenderbuffer[L])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),ft(J.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,ot.__webglTexture),zt(s.TEXTURE_CUBE_MAP,b);for(let L=0;L<6;L++)if(b.mipmaps&&b.mipmaps.length>0)for(let st=0;st<b.mipmaps.length;st++)At(J.__webglFramebuffer[L][st],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+L,st);else At(J.__webglFramebuffer[L],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);y(b)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Yt){for(let L=0,st=mt.length;L<st;L++){let F=mt[L],j=n.get(F);e.bindTexture(s.TEXTURE_2D,j.__webglTexture),zt(s.TEXTURE_2D,F),At(J.__webglFramebuffer,R,F,s.COLOR_ATTACHMENT0+L,s.TEXTURE_2D,0),y(F)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let L=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(L=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(L,ot.__webglTexture),zt(L,b),b.mipmaps&&b.mipmaps.length>0)for(let st=0;st<b.mipmaps.length;st++)At(J.__webglFramebuffer[st],R,b,s.COLOR_ATTACHMENT0,L,st);else At(J.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,L,0);y(b)&&p(L),e.unbindTexture()}R.depthBuffer&&Gt(R)}function D(R){let b=R.textures;for(let J=0,ot=b.length;J<ot;J++){let mt=b[J];if(y(mt)){let et=E(R),Yt=n.get(mt).__webglTexture;e.bindTexture(et,Yt),p(et),e.unbindTexture()}}}let tt=[],A=[];function bt(R){if(R.samples>0){if(ut(R)===!1){let b=R.textures,J=R.width,ot=R.height,mt=s.COLOR_BUFFER_BIT,et=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Yt=n.get(R),L=b.length>1;if(L)for(let st=0;st<b.length;st++)e.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let st=0;st<b.length;st++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(mt|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(mt|=s.STENCIL_BUFFER_BIT)),L){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Yt.__webglColorRenderbuffer[st]);let F=n.get(b[st]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,F,0)}s.blitFramebuffer(0,0,J,ot,0,0,J,ot,mt,s.NEAREST),l===!0&&(tt.length=0,A.length=0,tt.push(s.COLOR_ATTACHMENT0+st),R.depthBuffer&&R.resolveDepthBuffer===!1&&(tt.push(et),A.push(et),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,A)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),L)for(let st=0;st<b.length;st++){e.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,Yt.__webglColorRenderbuffer[st]);let F=n.get(b[st]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,F,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function lt(R){return Math.min(i.maxSamples,R.samples)}function ut(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function gt(R){let b=o.render.frame;c.get(R)!==b&&(c.set(R,b),R.update())}function It(R,b){let J=R.colorSpace,ot=R.format,mt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||J!==Gs&&J!==_i&&(Ee.getTransfer(J)===Re?(ot!==kn||mt!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),b}function Bt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=G,this.setTexture2D=V,this.setTexture2DArray=O,this.setTexture3D=K,this.setTextureCube=X,this.rebindTextures=Ut,this.setupRenderTarget=te,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=At,this.useMultisampledRTT=ut}function kg(s,t){function e(n,i=_i){let r,o=Ee.getTransfer(i);if(n===ri)return s.UNSIGNED_BYTE;if(n===cc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Kh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===jh)return s.BYTE;if(n===Zh)return s.SHORT;if(n===ur)return s.UNSIGNED_SHORT;if(n===lc)return s.INT;if(n===Hi)return s.UNSIGNED_INT;if(n===ni)return s.FLOAT;if(n===Sr)return s.HALF_FLOAT;if(n===Jh)return s.ALPHA;if(n===Qh)return s.RGB;if(n===kn)return s.RGBA;if(n===tu)return s.LUMINANCE;if(n===eu)return s.LUMINANCE_ALPHA;if(n===Ss)return s.DEPTH_COMPONENT;if(n===Ps)return s.DEPTH_STENCIL;if(n===nu)return s.RED;if(n===uc)return s.RED_INTEGER;if(n===iu)return s.RG;if(n===dc)return s.RG_INTEGER;if(n===fc)return s.RGBA_INTEGER;if(n===to||n===eo||n===no||n===io)if(o===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Za||n===Ka||n===Ja||n===Qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tl||n===el)return o===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===il)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ol)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===al)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ll)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ul)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ml)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===yl||n===xl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===so)return o===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===su||n===_l||n===vl||n===Ml)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===so)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Nl=class extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},re=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ug={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let x of t.hand.values()){let y=e.getJointPose(x,n),p=this._getHandJoint(h,x);y!==null&&(p.matrix.fromArray(y.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=y.radius),p.visible=y!==null}let c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ug)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zg=`
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

}`,zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new xn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xn({vertexShader:Ng,fragmentShader:zg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new ie(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ol=class extends oi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,g=null,x=new zl,y=e.getContextAttributes(),p=null,E=null,S=[],_=[],z=new wt,P=null,U=new tn;U.viewport=new Ce;let N=new tn;N.viewport=new Ce;let w=[U,N],M=new Nl,T=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=S[Y];return it===void 0&&(it=new ar,S[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=S[Y];return it===void 0&&(it=new ar,S[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=S[Y];return it===void 0&&(it=new ar,S[Y]=it),it.getHandSpace()};function W(Y){let it=_.indexOf(Y.inputSource);if(it===-1)return;let At=S[it];At!==void 0&&(At.update(Y.inputSource,Y.frame,h||o),At.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",V);for(let Y=0;Y<S.length;Y++){let it=_[Y];it!==null&&(_[Y]=null,S[Y].disconnect(it))}T=null,G=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,E=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",$),i.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(z),i.renderState.layers===void 0){let it={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new ai(f.framebufferWidth,f.framebufferHeight,{format:kn,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let it=null,At=null,ft=null;y.depth&&(ft=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=y.stencil?Ps:Ss,At=y.stencil?Cs:Hi);let Ot={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Ot),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new ai(d.textureWidth,d.textureHeight,{format:kn,type:ri,depthTexture:new go(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await i.requestReferenceSpace(a),Tt.setContext(i),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(Y){for(let it=0;it<Y.removed.length;it++){let At=Y.removed[it],ft=_.indexOf(At);ft>=0&&(_[ft]=null,S[ft].disconnect(At))}for(let it=0;it<Y.added.length;it++){let At=Y.added[it],ft=_.indexOf(At);if(ft===-1){for(let Gt=0;Gt<S.length;Gt++)if(Gt>=_.length){_.push(At),ft=Gt;break}else if(_[Gt]===null){_[Gt]=At,ft=Gt;break}if(ft===-1)break}let Ot=S[ft];Ot&&Ot.connect(At)}}let O=new C,K=new C;function X(Y,it,At){O.setFromMatrixPosition(it.matrixWorld),K.setFromMatrixPosition(At.matrixWorld);let ft=O.distanceTo(K),Ot=it.projectionMatrix.elements,Gt=At.projectionMatrix.elements,Ut=Ot[14]/(Ot[10]-1),te=Ot[14]/(Ot[10]+1),D=(Ot[9]+1)/Ot[5],tt=(Ot[9]-1)/Ot[5],A=(Ot[8]-1)/Ot[0],bt=(Gt[8]+1)/Gt[0],lt=Ut*A,ut=Ut*bt,gt=ft/(-A+bt),It=gt*-A;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(It),Y.translateZ(gt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ot[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let Bt=Ut+gt,R=te+gt,b=lt-It,J=ut+(ft-It),ot=D*te/R*Bt,mt=tt*te/R*Bt;Y.projectionMatrix.makePerspective(b,J,ot,mt,Bt,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function rt(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let it=Y.near,At=Y.far;x.texture!==null&&(x.depthNear>0&&(it=x.depthNear),x.depthFar>0&&(At=x.depthFar)),M.near=N.near=U.near=it,M.far=N.far=U.far=At,(T!==M.near||G!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,G=M.far),U.layers.mask=Y.layers.mask|2,N.layers.mask=Y.layers.mask|4,M.layers.mask=U.layers.mask|N.layers.mask;let ft=Y.parent,Ot=M.cameras;rt(M,ft);for(let Gt=0;Gt<Ot.length;Gt++)rt(Ot[Gt],ft);Ot.length===2?X(M,U,N):M.projectionMatrix.copy(U.projectionMatrix),vt(Y,M,ft)};function vt(Y,it,At){At===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(At.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Is*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let yt=null;function zt(Y,it){if(c=it.getViewerPose(h||o),g=it,c!==null){let At=c.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let ft=!1;At.length!==M.cameras.length&&(M.cameras.length=0,ft=!0);for(let Gt=0;Gt<At.length;Gt++){let Ut=At[Gt],te=null;if(f!==null)te=f.getViewport(Ut);else{let tt=u.getViewSubImage(d,Ut);te=tt.viewport,Gt===0&&(t.setRenderTargetTextures(E,tt.colorTexture,d.ignoreDepthValues?void 0:tt.depthStencilTexture),t.setRenderTarget(E))}let D=w[Gt];D===void 0&&(D=new tn,D.layers.enable(Gt),D.viewport=new Ce,w[Gt]=D),D.matrix.fromArray(Ut.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Ut.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(te.x,te.y,te.width,te.height),Gt===0&&(M.matrix.copy(D.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ft===!0&&M.cameras.push(D)}let Ot=i.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){let Gt=u.getDepthInformation(At[0]);Gt&&Gt.isValid&&Gt.texture&&x.init(t,Gt,i.renderState)}}for(let At=0;At<S.length;At++){let ft=_[At],Ot=S[At];ft!==null&&Ot!==void 0&&Ot.update(ft,it,h||o)}yt&&yt(Y,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let Tt=new hu;Tt.setAnimationLoop(zt),this.setAnimationLoop=function(Y){yt=Y},this.dispose=function(){}}},ki=new En,Og=new Ie;function Fg(s,t){function e(y,p){y.matrixAutoUpdate===!0&&y.updateMatrix(),p.value.copy(y.matrix)}function n(y,p){p.color.getRGB(y.fogColor.value,cu(s)),p.isFog?(y.fogNear.value=p.near,y.fogFar.value=p.far):p.isFogExp2&&(y.fogDensity.value=p.density)}function i(y,p,E,S,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(y,p):p.isMeshToonMaterial?(r(y,p),u(y,p)):p.isMeshPhongMaterial?(r(y,p),c(y,p)):p.isMeshStandardMaterial?(r(y,p),d(y,p),p.isMeshPhysicalMaterial&&f(y,p,_)):p.isMeshMatcapMaterial?(r(y,p),g(y,p)):p.isMeshDepthMaterial?r(y,p):p.isMeshDistanceMaterial?(r(y,p),x(y,p)):p.isMeshNormalMaterial?r(y,p):p.isLineBasicMaterial?(o(y,p),p.isLineDashedMaterial&&a(y,p)):p.isPointsMaterial?l(y,p,E,S):p.isSpriteMaterial?h(y,p):p.isShadowMaterial?(y.color.value.copy(p.color),y.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(y,p){y.opacity.value=p.opacity,p.color&&y.diffuse.value.copy(p.color),p.emissive&&y.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(y.map.value=p.map,e(p.map,y.mapTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,e(p.alphaMap,y.alphaMapTransform)),p.bumpMap&&(y.bumpMap.value=p.bumpMap,e(p.bumpMap,y.bumpMapTransform),y.bumpScale.value=p.bumpScale,p.side===Ve&&(y.bumpScale.value*=-1)),p.normalMap&&(y.normalMap.value=p.normalMap,e(p.normalMap,y.normalMapTransform),y.normalScale.value.copy(p.normalScale),p.side===Ve&&y.normalScale.value.negate()),p.displacementMap&&(y.displacementMap.value=p.displacementMap,e(p.displacementMap,y.displacementMapTransform),y.displacementScale.value=p.displacementScale,y.displacementBias.value=p.displacementBias),p.emissiveMap&&(y.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,y.emissiveMapTransform)),p.specularMap&&(y.specularMap.value=p.specularMap,e(p.specularMap,y.specularMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest);let E=t.get(p),S=E.envMap,_=E.envMapRotation;S&&(y.envMap.value=S,ki.copy(_),ki.x*=-1,ki.y*=-1,ki.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),y.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(ki)),y.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=p.reflectivity,y.ior.value=p.ior,y.refractionRatio.value=p.refractionRatio),p.lightMap&&(y.lightMap.value=p.lightMap,y.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,y.lightMapTransform)),p.aoMap&&(y.aoMap.value=p.aoMap,y.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,y.aoMapTransform))}function o(y,p){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,p.map&&(y.map.value=p.map,e(p.map,y.mapTransform))}function a(y,p){y.dashSize.value=p.dashSize,y.totalSize.value=p.dashSize+p.gapSize,y.scale.value=p.scale}function l(y,p,E,S){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,y.size.value=p.size*E,y.scale.value=S*.5,p.map&&(y.map.value=p.map,e(p.map,y.uvTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,e(p.alphaMap,y.alphaMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest)}function h(y,p){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,y.rotation.value=p.rotation,p.map&&(y.map.value=p.map,e(p.map,y.mapTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,e(p.alphaMap,y.alphaMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest)}function c(y,p){y.specular.value.copy(p.specular),y.shininess.value=Math.max(p.shininess,1e-4)}function u(y,p){p.gradientMap&&(y.gradientMap.value=p.gradientMap)}function d(y,p){y.metalness.value=p.metalness,p.metalnessMap&&(y.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,y.metalnessMapTransform)),y.roughness.value=p.roughness,p.roughnessMap&&(y.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,y.roughnessMapTransform)),p.envMap&&(y.envMapIntensity.value=p.envMapIntensity)}function f(y,p,E){y.ior.value=p.ior,p.sheen>0&&(y.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),y.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(y.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,y.sheenColorMapTransform)),p.sheenRoughnessMap&&(y.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,y.sheenRoughnessMapTransform))),p.clearcoat>0&&(y.clearcoat.value=p.clearcoat,y.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(y.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,y.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(y.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ve&&y.clearcoatNormalScale.value.negate())),p.dispersion>0&&(y.dispersion.value=p.dispersion),p.iridescence>0&&(y.iridescence.value=p.iridescence,y.iridescenceIOR.value=p.iridescenceIOR,y.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(y.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,y.iridescenceMapTransform)),p.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),p.transmission>0&&(y.transmission.value=p.transmission,y.transmissionSamplerMap.value=E.texture,y.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(y.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,y.transmissionMapTransform)),y.thickness.value=p.thickness,p.thicknessMap&&(y.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=p.attenuationDistance,y.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(y.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(y.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=p.specularIntensity,y.specularColor.value.copy(p.specularColor),p.specularColorMap&&(y.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,y.specularColorMapTransform)),p.specularIntensityMap&&(y.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,y.specularIntensityMapTransform))}function g(y,p){p.matcap&&(y.matcap.value=p.matcap)}function x(y,p){let E=t.get(p).light;y.referencePosition.value.setFromMatrixPosition(E.matrixWorld),y.nearDistance.value=E.shadow.camera.near,y.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Bg(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,S){let _=S.program;n.uniformBlockBinding(E,_)}function h(E,S){let _=i[E.id];_===void 0&&(g(E),_=c(E),i[E.id]=_,E.addEventListener("dispose",y));let z=S.program;n.updateUBOMapping(E,z);let P=t.render.frame;r[E.id]!==P&&(d(E),r[E.id]=P)}function c(E){let S=u();E.__bindingPointIndex=S;let _=s.createBuffer(),z=E.__size,P=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,z,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,_),_}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let S=i[E.id],_=E.uniforms,z=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let P=0,U=_.length;P<U;P++){let N=Array.isArray(_[P])?_[P]:[_[P]];for(let w=0,M=N.length;w<M;w++){let T=N[w];if(f(T,P,w,z)===!0){let G=T.__offset,W=Array.isArray(T.value)?T.value:[T.value],$=0;for(let V=0;V<W.length;V++){let O=W[V],K=x(O);typeof O=="number"||typeof O=="boolean"?(T.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,G+$,T.__data)):O.isMatrix3?(T.__data[0]=O.elements[0],T.__data[1]=O.elements[1],T.__data[2]=O.elements[2],T.__data[3]=0,T.__data[4]=O.elements[3],T.__data[5]=O.elements[4],T.__data[6]=O.elements[5],T.__data[7]=0,T.__data[8]=O.elements[6],T.__data[9]=O.elements[7],T.__data[10]=O.elements[8],T.__data[11]=0):(O.toArray(T.__data,$),$+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(E,S,_,z){let P=E.value,U=S+"_"+_;if(z[U]===void 0)return typeof P=="number"||typeof P=="boolean"?z[U]=P:z[U]=P.clone(),!0;{let N=z[U];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return z[U]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function g(E){let S=E.uniforms,_=0,z=16;for(let U=0,N=S.length;U<N;U++){let w=Array.isArray(S[U])?S[U]:[S[U]];for(let M=0,T=w.length;M<T;M++){let G=w[M],W=Array.isArray(G.value)?G.value:[G.value];for(let $=0,V=W.length;$<V;$++){let O=W[$],K=x(O),X=_%z,rt=X%K.boundary,vt=X+rt;_+=rt,vt!==0&&z-vt<K.storage&&(_+=z-vt),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=K.storage}}}let P=_%z;return P>0&&(_+=z-P),E.__size=_,E.__cache={},this}function x(E){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function y(E){let S=E.target;S.removeEventListener("dispose",y);let _=o.indexOf(S.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(let E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:l,update:h,dispose:p}}var yo=class{constructor(t={}){let{canvas:e=Gd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),y=null,p=null,E=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ce,this.toneMapping=Mi,this.toneMappingExposure=1;let _=this,z=!1,P=0,U=0,N=null,w=-1,M=null,T=new Ce,G=new Ce,W=null,$=new ue(0),V=0,O=e.width,K=e.height,X=1,rt=null,vt=null,yt=new Ce(0,0,O,K),zt=new Ce(0,0,O,K),Tt=!1,Y=new fr,it=!1,At=!1,ft=new Ie,Ot=new Ie,Gt=new C,Ut=new Ce,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},D=!1;function tt(){return N===null?X:1}let A=n;function bt(m,v){return e.getContext(m,v)}try{let m={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rc}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",$t,!1),e.addEventListener("webglcontextcreationerror",qt,!1),A===null){let v="webgl2";if(A=bt(v,m),A===null)throw bt(v)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(m){throw console.error("THREE.WebGLRenderer: "+m.message),m}let lt,ut,gt,It,Bt,R,b,J,ot,mt,et,Yt,L,st,F,j,Q,ht,Mt,Rt,Kt,Wt,ne,B;function kt(){lt=new n0(A),lt.init(),Wt=new kg(A,lt),ut=new Zm(A,lt,t,Wt),gt=new Ig(A,lt),ut.reverseDepthBuffer&&d&&gt.buffers.depth.setReversed(!0),It=new r0(A),Bt=new xg,R=new Dg(A,lt,gt,Bt,ut,Wt,It),b=new Jm(_),J=new e0(_),ot=new df(A),ne=new Ym(A,ot),mt=new i0(A,ot,It,ne),et=new a0(A,mt,ot,It),Mt=new o0(A,ut,R),j=new Km(Bt),Yt=new yg(_,b,J,lt,ut,ne,j),L=new Fg(_,Bt),st=new vg,F=new Tg(lt),ht=new qm(_,b,J,gt,et,f,l),Q=new Cg(_,et,ut),B=new Bg(A,It,ut,gt),Rt=new jm(A,lt,It),Kt=new s0(A,lt,It),It.programs=Yt.programs,_.capabilities=ut,_.extensions=lt,_.properties=Bt,_.renderLists=st,_.shadowMap=Q,_.state=gt,_.info=It}kt();let nt=new Ol(_,A);this.xr=nt,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let m=lt.get("WEBGL_lose_context");m&&m.loseContext()},this.forceContextRestore=function(){let m=lt.get("WEBGL_lose_context");m&&m.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(m){m!==void 0&&(X=m,this.setSize(O,K,!1))},this.getSize=function(m){return m.set(O,K)},this.setSize=function(m,v,k=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=m,K=v,e.width=Math.floor(m*X),e.height=Math.floor(v*X),k===!0&&(e.style.width=m+"px",e.style.height=v+"px"),this.setViewport(0,0,m,v)},this.getDrawingBufferSize=function(m){return m.set(O*X,K*X).floor()},this.setDrawingBufferSize=function(m,v,k){O=m,K=v,X=k,e.width=Math.floor(m*k),e.height=Math.floor(v*k),this.setViewport(0,0,m,v)},this.getCurrentViewport=function(m){return m.copy(T)},this.getViewport=function(m){return m.copy(yt)},this.setViewport=function(m,v,k,H){m.isVector4?yt.set(m.x,m.y,m.z,m.w):yt.set(m,v,k,H),gt.viewport(T.copy(yt).multiplyScalar(X).round())},this.getScissor=function(m){return m.copy(zt)},this.setScissor=function(m,v,k,H){m.isVector4?zt.set(m.x,m.y,m.z,m.w):zt.set(m,v,k,H),gt.scissor(G.copy(zt).multiplyScalar(X).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(m){gt.setScissorTest(Tt=m)},this.setOpaqueSort=function(m){rt=m},this.setTransparentSort=function(m){vt=m},this.getClearColor=function(m){return m.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(m=!0,v=!0,k=!0){let H=0;if(m){let I=!1;if(N!==null){let ct=N.texture.format;I=ct===fc||ct===dc||ct===uc}if(I){let ct=N.texture.type,Et=ct===ri||ct===Hi||ct===ur||ct===Cs||ct===cc||ct===hc,Vt=ht.getClearColor(),jt=ht.getClearAlpha(),Jt=Vt.r,Ft=Vt.g,Zt=Vt.b;Et?(g[0]=Jt,g[1]=Ft,g[2]=Zt,g[3]=jt,A.clearBufferuiv(A.COLOR,0,g)):(x[0]=Jt,x[1]=Ft,x[2]=Zt,x[3]=jt,A.clearBufferiv(A.COLOR,0,x))}else H|=A.COLOR_BUFFER_BIT}v&&(H|=A.DEPTH_BUFFER_BIT),k&&(H|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",qt,!1),st.dispose(),F.dispose(),Bt.dispose(),b.dispose(),J.dispose(),et.dispose(),ne.dispose(),B.dispose(),Yt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",xt),nt.removeEventListener("sessionend",q),at.stop()};function pt(m){m.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function $t(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;let m=It.autoReset,v=Q.enabled,k=Q.autoUpdate,H=Q.needsUpdate,I=Q.type;kt(),It.autoReset=m,Q.enabled=v,Q.autoUpdate=k,Q.needsUpdate=H,Q.type=I}function qt(m){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",m.statusMessage)}function ae(m){let v=m.target;v.removeEventListener("dispose",ae),le(v)}function le(m){Z(m),Bt.remove(m)}function Z(m){let v=Bt.get(m).programs;v!==void 0&&(v.forEach(function(k){Yt.releaseProgram(k)}),m.isShaderMaterial&&Yt.releaseShaderCache(m))}this.renderBufferDirect=function(m,v,k,H,I,ct){v===null&&(v=te);let Et=I.isMesh&&I.matrixWorld.determinant()<0,Vt=We(m,v,k,H,I);gt.setMaterial(H,Et);let jt=k.index,Jt=1;if(H.wireframe===!0){if(jt=mt.getWireframeAttribute(k),jt===void 0)return;Jt=2}let Ft=k.drawRange,Zt=k.attributes.position,ye=Ft.start*Jt,Te=(Ft.start+Ft.count)*Jt;ct!==null&&(ye=Math.max(ye,ct.start*Jt),Te=Math.min(Te,(ct.start+ct.count)*Jt)),jt!==null?(ye=Math.max(ye,0),Te=Math.min(Te,jt.count)):Zt!=null&&(ye=Math.max(ye,0),Te=Math.min(Te,Zt.count));let Ae=Te-ye;if(Ae<0||Ae===1/0)return;ne.setup(I,H,Vt,k,jt);let Oe,Se=Rt;if(jt!==null&&(Oe=ot.get(jt),Se=Kt,Se.setIndex(Oe)),I.isMesh)H.wireframe===!0?(gt.setLineWidth(H.wireframeLinewidth*tt()),Se.setMode(A.LINES)):Se.setMode(A.TRIANGLES);else if(I.isLine){let Qt=H.linewidth;Qt===void 0&&(Qt=1),gt.setLineWidth(Qt*tt()),I.isLineSegments?Se.setMode(A.LINES):I.isLineLoop?Se.setMode(A.LINE_LOOP):Se.setMode(A.LINE_STRIP)}else I.isPoints?Se.setMode(A.POINTS):I.isSprite&&Se.setMode(A.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Se.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))Se.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let Qt=I._multiDrawStarts,cn=I._multiDrawCounts,Me=I._multiDrawCount,hn=jt?ot.get(jt).bytesPerElement:1,Hn=Bt.get(H).currentProgram.getUniforms();for(let pn=0;pn<Me;pn++)Hn.setValue(A,"_gl_DrawID",pn),Se.render(Qt[pn]/hn,cn[pn])}else if(I.isInstancedMesh)Se.renderInstances(ye,Ae,I.count);else if(k.isInstancedBufferGeometry){let Qt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,cn=Math.min(k.instanceCount,Qt);Se.renderInstances(ye,Ae,cn)}else Se.render(ye,Ae)};function Nt(m,v,k){m.transparent===!0&&m.side===Xe&&m.forceSinglePass===!1?(m.side=Ve,m.needsUpdate=!0,ee(m,v,k),m.side=bi,m.needsUpdate=!0,ee(m,v,k),m.side=Xe):ee(m,v,k)}this.compile=function(m,v,k=null){k===null&&(k=m),p=F.get(k),p.init(v),S.push(p),k.traverseVisible(function(I){I.isLight&&I.layers.test(v.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),m!==k&&m.traverseVisible(function(I){I.isLight&&I.layers.test(v.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();let H=new Set;return m.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let ct=I.material;if(ct)if(Array.isArray(ct))for(let Et=0;Et<ct.length;Et++){let Vt=ct[Et];Nt(Vt,k,I),H.add(Vt)}else Nt(ct,k,I),H.add(ct)}),S.pop(),p=null,H},this.compileAsync=function(m,v,k=null){let H=this.compile(m,v,k);return new Promise(I=>{function ct(){if(H.forEach(function(Et){Bt.get(Et).currentProgram.isReady()&&H.delete(Et)}),H.size===0){I(m);return}setTimeout(ct,10)}lt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Pt=null;function dn(m){Pt&&Pt(m)}function xt(){at.stop()}function q(){at.start()}let at=new hu;at.setAnimationLoop(dn),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(m){Pt=m,nt.setAnimationLoop(m),m===null?at.stop():at.start()},nt.addEventListener("sessionstart",xt),nt.addEventListener("sessionend",q),this.render=function(m,v){if(v!==void 0&&v.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(v),v=nt.getCamera()),m.isScene===!0&&m.onBeforeRender(_,m,v,N),p=F.get(m,S.length),p.init(v),S.push(p),Ot.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),Y.setFromProjectionMatrix(Ot),At=this.localClippingEnabled,it=j.init(this.clippingPlanes,At),y=st.get(m,E.length),y.init(),E.push(y),nt.enabled===!0&&nt.isPresenting===!0){let ct=_.xr.getDepthSensingMesh();ct!==null&&St(ct,v,-1/0,_.sortObjects)}St(m,v,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(rt,vt),D=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,D&&ht.addToRenderList(y,m),this.info.render.frame++,it===!0&&j.beginShadows();let k=p.state.shadowsArray;Q.render(k,m,v),it===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=y.opaque,I=y.transmissive;if(p.setupLights(),v.isArrayCamera){let ct=v.cameras;if(I.length>0)for(let Et=0,Vt=ct.length;Et<Vt;Et++){let jt=ct[Et];Ht(H,I,m,jt)}D&&ht.render(m);for(let Et=0,Vt=ct.length;Et<Vt;Et++){let jt=ct[Et];Lt(y,m,jt,jt.viewport)}}else I.length>0&&Ht(H,I,m,v),D&&ht.render(m),Lt(y,m,v);N!==null&&(R.updateMultisampleRenderTarget(N),R.updateRenderTargetMipmap(N)),m.isScene===!0&&m.onAfterRender(_,m,v),ne.resetDefaultState(),w=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],it===!0&&j.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?y=E[E.length-1]:y=null};function St(m,v,k,H){if(m.visible===!1)return;if(m.layers.test(v.layers)){if(m.isGroup)k=m.renderOrder;else if(m.isLOD)m.autoUpdate===!0&&m.update(v);else if(m.isLight)p.pushLight(m),m.castShadow&&p.pushShadow(m);else if(m.isSprite){if(!m.frustumCulled||Y.intersectsSprite(m)){H&&Ut.setFromMatrixPosition(m.matrixWorld).applyMatrix4(Ot);let Et=et.update(m),Vt=m.material;Vt.visible&&y.push(m,Et,Vt,k,Ut.z,null)}}else if((m.isMesh||m.isLine||m.isPoints)&&(!m.frustumCulled||Y.intersectsObject(m))){let Et=et.update(m),Vt=m.material;if(H&&(m.boundingSphere!==void 0?(m.boundingSphere===null&&m.computeBoundingSphere(),Ut.copy(m.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Ut.copy(Et.boundingSphere.center)),Ut.applyMatrix4(m.matrixWorld).applyMatrix4(Ot)),Array.isArray(Vt)){let jt=Et.groups;for(let Jt=0,Ft=jt.length;Jt<Ft;Jt++){let Zt=jt[Jt],ye=Vt[Zt.materialIndex];ye&&ye.visible&&y.push(m,Et,ye,k,Ut.z,Zt)}}else Vt.visible&&y.push(m,Et,Vt,k,Ut.z,null)}}let ct=m.children;for(let Et=0,Vt=ct.length;Et<Vt;Et++)St(ct[Et],v,k,H)}function Lt(m,v,k,H){let I=m.opaque,ct=m.transmissive,Et=m.transparent;p.setupLightsView(k),it===!0&&j.setGlobalState(_.clippingPlanes,k),H&&gt.viewport(T.copy(H)),I.length>0&&ge(I,v,k),ct.length>0&&ge(ct,v,k),Et.length>0&&ge(Et,v,k),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Ht(m,v,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ai(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Sr:ri,minFilter:Bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));let ct=p.state.transmissionRenderTarget[H.id],Et=H.viewport||T;ct.setSize(Et.z,Et.w);let Vt=_.getRenderTarget();_.setRenderTarget(ct),_.getClearColor($),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),D&&ht.render(k);let jt=_.toneMapping;_.toneMapping=Mi;let Jt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),it===!0&&j.setGlobalState(_.clippingPlanes,H),ge(m,k,H),R.updateMultisampleRenderTarget(ct),R.updateRenderTargetMipmap(ct),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Zt=0,ye=v.length;Zt<ye;Zt++){let Te=v[Zt],Ae=Te.object,Oe=Te.geometry,Se=Te.material,Qt=Te.group;if(Se.side===Xe&&Ae.layers.test(H.layers)){let cn=Se.side;Se.side=Ve,Se.needsUpdate=!0,de(Ae,k,H,Oe,Se,Qt),Se.side=cn,Se.needsUpdate=!0,Ft=!0}}Ft===!0&&(R.updateMultisampleRenderTarget(ct),R.updateRenderTargetMipmap(ct))}_.setRenderTarget(Vt),_.setClearColor($,V),Jt!==void 0&&(H.viewport=Jt),_.toneMapping=jt}function ge(m,v,k){let H=v.isScene===!0?v.overrideMaterial:null;for(let I=0,ct=m.length;I<ct;I++){let Et=m[I],Vt=Et.object,jt=Et.geometry,Jt=H===null?Et.material:H,Ft=Et.group;Vt.layers.test(k.layers)&&de(Vt,v,k,jt,Jt,Ft)}}function de(m,v,k,H,I,ct){m.onBeforeRender(_,v,k,H,I,ct),m.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,m.matrixWorld),m.normalMatrix.getNormalMatrix(m.modelViewMatrix),I.onBeforeRender(_,v,k,H,m,ct),I.transparent===!0&&I.side===Xe&&I.forceSinglePass===!1?(I.side=Ve,I.needsUpdate=!0,_.renderBufferDirect(k,v,H,I,m,ct),I.side=bi,I.needsUpdate=!0,_.renderBufferDirect(k,v,H,I,m,ct),I.side=Xe):_.renderBufferDirect(k,v,H,I,m,ct),m.onAfterRender(_,v,k,H,I,ct)}function ee(m,v,k){v.isScene!==!0&&(v=te);let H=Bt.get(m),I=p.state.lights,ct=p.state.shadowsArray,Et=I.state.version,Vt=Yt.getParameters(m,I.state,ct,v,k),jt=Yt.getProgramCacheKey(Vt),Jt=H.programs;H.environment=m.isMeshStandardMaterial?v.environment:null,H.fog=v.fog,H.envMap=(m.isMeshStandardMaterial?J:b).get(m.envMap||H.environment),H.envMapRotation=H.environment!==null&&m.envMap===null?v.environmentRotation:m.envMapRotation,Jt===void 0&&(m.addEventListener("dispose",ae),Jt=new Map,H.programs=Jt);let Ft=Jt.get(jt);if(Ft!==void 0){if(H.currentProgram===Ft&&H.lightsStateVersion===Et)return De(m,Vt),Ft}else Vt.uniforms=Yt.getUniforms(m),m.onBeforeCompile(Vt,_),Ft=Yt.acquireProgram(Vt,jt),Jt.set(jt,Ft),H.uniforms=Vt.uniforms;let Zt=H.uniforms;return(!m.isShaderMaterial&&!m.isRawShaderMaterial||m.clipping===!0)&&(Zt.clippingPlanes=j.uniform),De(m,Vt),H.needsLights=fn(m),H.lightsStateVersion=Et,H.needsLights&&(Zt.ambientLightColor.value=I.state.ambient,Zt.lightProbe.value=I.state.probe,Zt.directionalLights.value=I.state.directional,Zt.directionalLightShadows.value=I.state.directionalShadow,Zt.spotLights.value=I.state.spot,Zt.spotLightShadows.value=I.state.spotShadow,Zt.rectAreaLights.value=I.state.rectArea,Zt.ltc_1.value=I.state.rectAreaLTC1,Zt.ltc_2.value=I.state.rectAreaLTC2,Zt.pointLights.value=I.state.point,Zt.pointLightShadows.value=I.state.pointShadow,Zt.hemisphereLights.value=I.state.hemi,Zt.directionalShadowMap.value=I.state.directionalShadowMap,Zt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Zt.spotShadowMap.value=I.state.spotShadowMap,Zt.spotLightMatrix.value=I.state.spotLightMatrix,Zt.spotLightMap.value=I.state.spotLightMap,Zt.pointShadowMap.value=I.state.pointShadowMap,Zt.pointShadowMatrix.value=I.state.pointShadowMatrix),H.currentProgram=Ft,H.uniformsList=null,Ft}function he(m){if(m.uniformsList===null){let v=m.currentProgram.getUniforms();m.uniformsList=ws.seqWithValue(v.seq,m.uniforms)}return m.uniformsList}function De(m,v){let k=Bt.get(m);k.outputColorSpace=v.outputColorSpace,k.batching=v.batching,k.batchingColor=v.batchingColor,k.instancing=v.instancing,k.instancingColor=v.instancingColor,k.instancingMorph=v.instancingMorph,k.skinning=v.skinning,k.morphTargets=v.morphTargets,k.morphNormals=v.morphNormals,k.morphColors=v.morphColors,k.morphTargetsCount=v.morphTargetsCount,k.numClippingPlanes=v.numClippingPlanes,k.numIntersection=v.numClipIntersection,k.vertexAlphas=v.vertexAlphas,k.vertexTangents=v.vertexTangents,k.toneMapping=v.toneMapping}function We(m,v,k,H,I){v.isScene!==!0&&(v=te),R.resetTextureUnits();let ct=v.fog,Et=H.isMeshStandardMaterial?v.environment:null,Vt=N===null?_.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Gs,jt=(H.isMeshStandardMaterial?J:b).get(H.envMap||Et),Jt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ft=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Zt=!!k.morphAttributes.position,ye=!!k.morphAttributes.normal,Te=!!k.morphAttributes.color,Ae=Mi;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ae=_.toneMapping);let Oe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Se=Oe!==void 0?Oe.length:0,Qt=Bt.get(H),cn=p.state.lights;if(it===!0&&(At===!0||m!==M)){let Mn=m===M&&H.id===w;j.setState(H,m,Mn)}let Me=!1;H.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==cn.state.version||Qt.outputColorSpace!==Vt||I.isBatchedMesh&&Qt.batching===!1||!I.isBatchedMesh&&Qt.batching===!0||I.isBatchedMesh&&Qt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Qt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Qt.instancing===!1||!I.isInstancedMesh&&Qt.instancing===!0||I.isSkinnedMesh&&Qt.skinning===!1||!I.isSkinnedMesh&&Qt.skinning===!0||I.isInstancedMesh&&Qt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Qt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Qt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Qt.instancingMorph===!1&&I.morphTexture!==null||Qt.envMap!==jt||H.fog===!0&&Qt.fog!==ct||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==j.numPlanes||Qt.numIntersection!==j.numIntersection)||Qt.vertexAlphas!==Jt||Qt.vertexTangents!==Ft||Qt.morphTargets!==Zt||Qt.morphNormals!==ye||Qt.morphColors!==Te||Qt.toneMapping!==Ae||Qt.morphTargetsCount!==Se)&&(Me=!0):(Me=!0,Qt.__version=H.version);let hn=Qt.currentProgram;Me===!0&&(hn=ee(H,v,I));let Hn=!1,pn=!1,js=!1,Le=hn.getUniforms(),Vn=Qt.uniforms;if(gt.useProgram(hn.program)&&(Hn=!0,pn=!0,js=!0),H.id!==w&&(w=H.id,pn=!0),Hn||M!==m){gt.buffers.depth.getReversed()?(ft.copy(m.projectionMatrix),Xd(ft),$d(ft),Le.setValue(A,"projectionMatrix",ft)):Le.setValue(A,"projectionMatrix",m.projectionMatrix),Le.setValue(A,"viewMatrix",m.matrixWorldInverse);let ui=Le.map.cameraPosition;ui!==void 0&&ui.setValue(A,Gt.setFromMatrixPosition(m.matrixWorld)),ut.logarithmicDepthBuffer&&Le.setValue(A,"logDepthBufFC",2/(Math.log(m.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Le.setValue(A,"isOrthographic",m.isOrthographicCamera===!0),M!==m&&(M=m,pn=!0,js=!0)}if(I.isSkinnedMesh){Le.setOptional(A,I,"bindMatrix"),Le.setOptional(A,I,"bindMatrixInverse");let Mn=I.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Le.setValue(A,"boneTexture",Mn.boneTexture,R))}I.isBatchedMesh&&(Le.setOptional(A,I,"batchingTexture"),Le.setValue(A,"batchingTexture",I._matricesTexture,R),Le.setOptional(A,I,"batchingIdTexture"),Le.setValue(A,"batchingIdTexture",I._indirectTexture,R),Le.setOptional(A,I,"batchingColorTexture"),I._colorsTexture!==null&&Le.setValue(A,"batchingColorTexture",I._colorsTexture,R));let Zs=k.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0)&&Mt.update(I,k,hn),(pn||Qt.receiveShadow!==I.receiveShadow)&&(Qt.receiveShadow=I.receiveShadow,Le.setValue(A,"receiveShadow",I.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Vn.envMap.value=jt,Vn.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&v.environment!==null&&(Vn.envMapIntensity.value=v.environmentIntensity),pn&&(Le.setValue(A,"toneMappingExposure",_.toneMappingExposure),Qt.needsLights&&ve(Vn,js),ct&&H.fog===!0&&L.refreshFogUniforms(Vn,ct),L.refreshMaterialUniforms(Vn,H,X,K,p.state.transmissionRenderTarget[m.id]),ws.upload(A,he(Qt),Vn,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ws.upload(A,he(Qt),Vn,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Le.setValue(A,"center",I.center),Le.setValue(A,"modelViewMatrix",I.modelViewMatrix),Le.setValue(A,"normalMatrix",I.normalMatrix),Le.setValue(A,"modelMatrix",I.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Mn=H.uniformsGroups;for(let ui=0,di=Mn.length;ui<di;ui++){let Dc=Mn[ui];B.update(Dc,hn),B.bind(Dc,hn)}}return hn}function ve(m,v){m.ambientLightColor.needsUpdate=v,m.lightProbe.needsUpdate=v,m.directionalLights.needsUpdate=v,m.directionalLightShadows.needsUpdate=v,m.pointLights.needsUpdate=v,m.pointLightShadows.needsUpdate=v,m.spotLights.needsUpdate=v,m.spotLightShadows.needsUpdate=v,m.rectAreaLights.needsUpdate=v,m.hemisphereLights.needsUpdate=v}function fn(m){return m.isMeshLambertMaterial||m.isMeshToonMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isShadowMaterial||m.isShaderMaterial&&m.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(m,v,k){Bt.get(m.texture).__webglTexture=v,Bt.get(m.depthTexture).__webglTexture=k;let H=Bt.get(m);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(m,v){let k=Bt.get(m);k.__webglFramebuffer=v,k.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(m,v=0,k=0){N=m,P=v,U=k;let H=!0,I=null,ct=!1,Et=!1;if(m){let jt=Bt.get(m);if(jt.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(A.FRAMEBUFFER,null),H=!1;else if(jt.__webglFramebuffer===void 0)R.setupRenderTarget(m);else if(jt.__hasExternalTextures)R.rebindTextures(m,Bt.get(m.texture).__webglTexture,Bt.get(m.depthTexture).__webglTexture);else if(m.depthBuffer){let Zt=m.depthTexture;if(jt.__boundDepthTexture!==Zt){if(Zt!==null&&Bt.has(Zt)&&(m.width!==Zt.image.width||m.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(m)}}let Jt=m.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Et=!0);let Ft=Bt.get(m).__webglFramebuffer;m.isWebGLCubeRenderTarget?(Array.isArray(Ft[v])?I=Ft[v][k]:I=Ft[v],ct=!0):m.samples>0&&R.useMultisampledRTT(m)===!1?I=Bt.get(m).__webglMultisampledFramebuffer:Array.isArray(Ft)?I=Ft[k]:I=Ft,T.copy(m.viewport),G.copy(m.scissor),W=m.scissorTest}else T.copy(yt).multiplyScalar(X).floor(),G.copy(zt).multiplyScalar(X).floor(),W=Tt;if(gt.bindFramebuffer(A.FRAMEBUFFER,I)&&H&&gt.drawBuffers(m,I),gt.viewport(T),gt.scissor(G),gt.setScissorTest(W),ct){let jt=Bt.get(m.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+v,jt.__webglTexture,k)}else if(Et){let jt=Bt.get(m.texture),Jt=v||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,jt.__webglTexture,k||0,Jt)}w=-1},this.readRenderTargetPixels=function(m,v,k,H,I,ct,Et){if(!(m&&m.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=Bt.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&Et!==void 0&&(Vt=Vt[Et]),Vt){gt.bindFramebuffer(A.FRAMEBUFFER,Vt);try{let jt=m.texture,Jt=jt.format,Ft=jt.type;if(!ut.textureFormatReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}v>=0&&v<=m.width-H&&k>=0&&k<=m.height-I&&A.readPixels(v,k,H,I,Wt.convert(Jt),Wt.convert(Ft),ct)}finally{let jt=N!==null?Bt.get(N).__webglFramebuffer:null;gt.bindFramebuffer(A.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(m,v,k,H,I,ct,Et){if(!(m&&m.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=Bt.get(m).__webglFramebuffer;if(m.isWebGLCubeRenderTarget&&Et!==void 0&&(Vt=Vt[Et]),Vt){let jt=m.texture,Jt=jt.format,Ft=jt.type;if(!ut.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(v>=0&&v<=m.width-H&&k>=0&&k<=m.height-I){gt.bindFramebuffer(A.FRAMEBUFFER,Vt);let Zt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Zt),A.bufferData(A.PIXEL_PACK_BUFFER,ct.byteLength,A.STREAM_READ),A.readPixels(v,k,H,I,Wt.convert(Jt),Wt.convert(Ft),0);let ye=N!==null?Bt.get(N).__webglFramebuffer:null;gt.bindFramebuffer(A.FRAMEBUFFER,ye);let Te=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Wd(A,Te,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Zt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ct),A.deleteBuffer(Zt),A.deleteSync(Te),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(m,v=null,k=0){m.isTexture!==!0&&(ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),v=arguments[0]||null,m=arguments[1]);let H=Math.pow(2,-k),I=Math.floor(m.image.width*H),ct=Math.floor(m.image.height*H),Et=v!==null?v.x:0,Vt=v!==null?v.y:0;R.setTexture2D(m,0),A.copyTexSubImage2D(A.TEXTURE_2D,k,0,0,Et,Vt,I,ct),gt.unbindTexture()},this.copyTextureToTexture=function(m,v,k=null,H=null,I=0){m.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,m=arguments[1],v=arguments[2],I=arguments[3]||0,k=null);let ct,Et,Vt,jt,Jt,Ft,Zt,ye,Te,Ae=m.isCompressedTexture?m.mipmaps[I]:m.image;k!==null?(ct=k.max.x-k.min.x,Et=k.max.y-k.min.y,Vt=k.isBox3?k.max.z-k.min.z:1,jt=k.min.x,Jt=k.min.y,Ft=k.isBox3?k.min.z:0):(ct=Ae.width,Et=Ae.height,Vt=Ae.depth||1,jt=0,Jt=0,Ft=0),H!==null?(Zt=H.x,ye=H.y,Te=H.z):(Zt=0,ye=0,Te=0);let Oe=Wt.convert(v.format),Se=Wt.convert(v.type),Qt;v.isData3DTexture?(R.setTexture3D(v,0),Qt=A.TEXTURE_3D):v.isDataArrayTexture||v.isCompressedArrayTexture?(R.setTexture2DArray(v,0),Qt=A.TEXTURE_2D_ARRAY):(R.setTexture2D(v,0),Qt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,v.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,v.unpackAlignment);let cn=A.getParameter(A.UNPACK_ROW_LENGTH),Me=A.getParameter(A.UNPACK_IMAGE_HEIGHT),hn=A.getParameter(A.UNPACK_SKIP_PIXELS),Hn=A.getParameter(A.UNPACK_SKIP_ROWS),pn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ae.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ae.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,jt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Jt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ft);let js=m.isDataArrayTexture||m.isData3DTexture,Le=v.isDataArrayTexture||v.isData3DTexture;if(m.isRenderTargetTexture||m.isDepthTexture){let Vn=Bt.get(m),Zs=Bt.get(v),Mn=Bt.get(Vn.__renderTarget),ui=Bt.get(Zs.__renderTarget);gt.bindFramebuffer(A.READ_FRAMEBUFFER,Mn.__webglFramebuffer),gt.bindFramebuffer(A.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let di=0;di<Vt;di++)js&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Bt.get(m).__webglTexture,I,Ft+di),m.isDepthTexture?(Le&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Bt.get(v).__webglTexture,I,Te+di),A.blitFramebuffer(jt,Jt,ct,Et,Zt,ye,ct,Et,A.DEPTH_BUFFER_BIT,A.NEAREST)):Le?A.copyTexSubImage3D(Qt,I,Zt,ye,Te+di,jt,Jt,ct,Et):A.copyTexSubImage2D(Qt,I,Zt,ye,Te+di,jt,Jt,ct,Et);gt.bindFramebuffer(A.READ_FRAMEBUFFER,null),gt.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Le?m.isDataTexture||m.isData3DTexture?A.texSubImage3D(Qt,I,Zt,ye,Te,ct,Et,Vt,Oe,Se,Ae.data):v.isCompressedArrayTexture?A.compressedTexSubImage3D(Qt,I,Zt,ye,Te,ct,Et,Vt,Oe,Ae.data):A.texSubImage3D(Qt,I,Zt,ye,Te,ct,Et,Vt,Oe,Se,Ae):m.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,I,Zt,ye,ct,Et,Oe,Se,Ae.data):m.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,I,Zt,ye,Ae.width,Ae.height,Oe,Ae.data):A.texSubImage2D(A.TEXTURE_2D,I,Zt,ye,ct,Et,Oe,Se,Ae);A.pixelStorei(A.UNPACK_ROW_LENGTH,cn),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Me),A.pixelStorei(A.UNPACK_SKIP_PIXELS,hn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Hn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,pn),I===0&&v.generateMipmaps&&A.generateMipmap(Qt),gt.unbindTexture()},this.copyTextureToTexture3D=function(m,v,k=null,H=null,I=0){return m.isTexture!==!0&&(ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,m=arguments[2],v=arguments[3],I=arguments[4]||0),ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(m,v,k,H,I)},this.initRenderTarget=function(m){Bt.get(m).__webglFramebuffer===void 0&&R.setupRenderTarget(m)},this.initTexture=function(m){m.isCubeTexture?R.setTextureCube(m,0):m.isData3DTexture?R.setTexture3D(m,0):m.isDataArrayTexture||m.isCompressedArrayTexture?R.setTexture2DArray(m,0):R.setTexture2D(m,0),gt.unbindTexture()},this.resetState=function(){P=0,U=0,N=null,gt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ee._getUnpackColorSpace()}};var Us=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var pr=class extends Si{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},xo=new C,_o=new C,Uh=new Ie,er=new Gi,Yr=new Ls,La=new C,Nh=new C,Ns=class extends Qe{constructor(t=new ze,e=new pr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)xo.fromBufferAttribute(e,i-1),_o.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=xo.distanceTo(_o);t.setAttribute("lineDistance",new xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=r,t.ray.intersectsSphere(Yr)===!1)return;Uh.copy(i).invert(),er.copy(t.ray).applyMatrix4(Uh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let x=f,y=g-1;x<y;x+=h){let p=c.getX(x),E=c.getX(x+1),S=jr(this,t,er,l,p,E);S&&e.push(S)}if(this.isLineLoop){let x=c.getX(g-1),y=c.getX(f),p=jr(this,t,er,l,x,y);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,y=g-1;x<y;x+=h){let p=jr(this,t,er,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=jr(this,t,er,l,g-1,f);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function jr(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(xo.fromBufferAttribute(o,i),_o.fromBufferAttribute(o,r),e.distanceSqToSegment(xo,_o,La,Nh)>n)return;La.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(La);if(!(l<t.near||l>t.far))return{distance:l,point:Nh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var _e=class extends xn{constructor(t,e,n,i,r,o,a,l,h){super(t,e,n,i,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),h=n[i]-o,h<0)a=i+1;else if(h>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let c=n[i],d=n[i+1]-c,f=(o-c)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new wt:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new C,i=[],r=[],o=[],a=new C,l=new Ie;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let h=Number.MAX_VALUE,c=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);c<=h&&(h=c,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),d<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(He(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(He(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},mr=class extends wn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new wt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*c-f*u+this.aX,h=d*u+f*c+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Fl=class extends mr{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function gc(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){i(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,u){let d=(o-r)/h-(a-r)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+u)+(l-a)/u;d*=c,f*=c,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Zr=new C,Da=new gc,ka=new gc,Ua=new gc,gr=class extends wn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=i[(a-1)%r]:(Zr.subVectors(i[0],i[1]).add(i[0]),h=Zr);let u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?c=i[(a+2)%r]:(Zr.subVectors(i[r-1],i[r-2]).add(i[r-1]),c=Zr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(h.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(c),f);x<1e-4&&(x=1),g<1e-4&&(g=x),y<1e-4&&(y=x),Da.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,g,x,y),ka.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,g,x,y),Ua.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,g,x,y)}else this.curveType==="catmullrom"&&(Da.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),ka.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),Ua.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return n.set(Da.calc(l),ka.calc(l),Ua.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function zh(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Hg(s,t){let e=1-s;return e*e*t}function Vg(s,t){return 2*(1-s)*s*t}function Gg(s,t){return s*s*t}function lr(s,t,e,n){return Hg(s,t)+Vg(s,e)+Gg(s,n)}function Wg(s,t){let e=1-s;return e*e*e*t}function Xg(s,t){let e=1-s;return 3*e*e*s*t}function $g(s,t){return 3*(1-s)*s*s*t}function qg(s,t){return s*s*s*t}function cr(s,t,e,n,i){return Wg(s,t)+Xg(s,e)+$g(s,n)+qg(s,i)}var vo=class extends wn{constructor(t=new wt,e=new wt,n=new wt,i=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new wt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(t,i.x,r.x,o.x,a.x),cr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bl=class extends wn{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(t,i.x,r.x,o.x,a.x),cr(t,i.y,r.y,o.y,a.y),cr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Mo=class extends wn{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hl=class extends wn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bo=class extends wn{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(lr(t,i.x,r.x,o.x),lr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},So=class extends wn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(lr(t,i.x,r.x,o.x),lr(t,i.y,r.y,o.y),lr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],h=i[o],c=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(zh(a,l.x,h.x,c.x,u.x),zh(a,l.y,h.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new wt().fromArray(i))}return this}},wo=Object.freeze({__proto__:null,ArcCurve:Fl,CatmullRomCurve3:gr,CubicBezierCurve:vo,CubicBezierCurve3:Bl,EllipseCurve:mr,LineCurve:Mo,LineCurve3:Hl,QuadraticBezierCurve:bo,QuadraticBezierCurve3:So,SplineCurve:Eo}),Vl=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let c=l[h];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new wo[i.type]().fromJSON(i))}return this}},Wi=class extends Vl{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Mo(this.currentPoint.clone(),new wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new bo(this.currentPoint.clone(),new wt(t,e),new wt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new vo(this.currentPoint.clone(),new wt(t,e),new wt(n,i),new wt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Eo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let h=new mr(t,e,n,i,r,o,a,l);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Xi=class s extends ze{constructor(t=[new wt(0,-.5),new wt(.5,0),new wt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=He(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],h=[],c=1/e,u=new C,d=new wt,f=new C,g=new C,x=new C,y=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:y=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-y,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:y=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-y,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let E=0;E<=e;E++){let S=n+E*c*i,_=Math.sin(S),z=Math.cos(S);for(let P=0;P<=t.length-1;P++){u.x=t[P].x*_,u.y=t[P].y,u.z=t[P].x*z,o.push(u.x,u.y,u.z),d.x=E/e,d.y=P/(t.length-1),a.push(d.x,d.y);let U=l[3*P+0]*_,N=l[3*P+1],w=l[3*P+0]*z;h.push(U,N,w)}}for(let E=0;E<e;E++)for(let S=0;S<t.length-1;S++){let _=S+E*t.length,z=_,P=_+t.length,U=_+t.length+1,N=_+1;r.push(z,P,N),r.push(U,N,P)}this.setIndex(r),this.setAttribute("position",new xe(o,3)),this.setAttribute("uv",new xe(a,2)),this.setAttribute("normal",new xe(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},zs=class s extends Xi{constructor(t=1,e=1,n=4,i=8){let r=new Wi;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new s(t.radius,t.length,t.capSegments,t.radialSegments)}},Tn=class s extends ze{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],h=new C,c=new wt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;h.x=t*Math.cos(f),h.y=t*Math.sin(f),o.push(h.x,h.y,h.z),a.push(0,0,1),c.x=(o[d]/t+1)/2,c.y=(o[d+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new xe(o,3)),this.setAttribute("normal",new xe(a,3)),this.setAttribute("uv",new xe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fe=class s extends ze{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;i=Math.floor(i),r=Math.floor(r);let c=[],u=[],d=[],f=[],g=0,x=[],y=n/2,p=0;E(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(c),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(f,2));function E(){let _=new C,z=new C,P=0,U=(e-t)/n;for(let N=0;N<=r;N++){let w=[],M=N/r,T=M*(e-t)+t;for(let G=0;G<=i;G++){let W=G/i,$=W*l+a,V=Math.sin($),O=Math.cos($);z.x=T*V,z.y=-M*n+y,z.z=T*O,u.push(z.x,z.y,z.z),_.set(V,U,O).normalize(),d.push(_.x,_.y,_.z),f.push(W,1-M),w.push(g++)}x.push(w)}for(let N=0;N<i;N++)for(let w=0;w<r;w++){let M=x[w][N],T=x[w+1][N],G=x[w+1][N+1],W=x[w][N+1];(t>0||w!==0)&&(c.push(M,T,W),P+=3),(e>0||w!==r-1)&&(c.push(T,G,W),P+=3)}h.addGroup(p,P,0),p+=P}function S(_){let z=g,P=new wt,U=new C,N=0,w=_===!0?t:e,M=_===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,y*M,0),d.push(0,M,0),f.push(.5,.5),g++;let T=g;for(let G=0;G<=i;G++){let $=G/i*l+a,V=Math.cos($),O=Math.sin($);U.x=w*O,U.y=y*M,U.z=w*V,u.push(U.x,U.y,U.z),d.push(0,M,0),P.x=V*.5+.5,P.y=O*.5*M+.5,f.push(P.x,P.y),g++}for(let G=0;G<i;G++){let W=z+G,$=T+G;_===!0?c.push($,$+1,W):c.push($+1,$,W),N+=3}h.addGroup(p,N,_===!0?1:2),p+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Os=class s extends fe{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Fs=class extends Wi{constructor(t){super(t),this.uuid=Ji(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Wi().fromJSON(i))}return this}},Yg={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=mu(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h,c,u,d,f;if(n&&(r=Qg(s,t,r,e)),s.length>80*e){a=h=s[0],l=c=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);f=Math.max(h-a,c-l),f=f!==0?32767/f:0}return yr(r,o,e,a,l,f,0),o}};function mu(s,t,e,n,i){let r,o;if(i===hy(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Oh(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Oh(r,s[r],s[r+1],o);return o&&Uo(o,o.next)&&(_r(o),o=o.next),o}function $i(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Uo(e,e.next)||Ne(e.prev,e,e.next)===0)){if(_r(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&sy(s,n,i,r);let a=s,l,h;for(;s.prev!==s.next;){if(l=s.prev,h=s.next,r?Zg(s,n,i,r):jg(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(h.i/e|0),_r(s),s=h.next,a=h.next;continue}if(s=h,s===a){o?o===1?(s=Kg($i(s),t,e),yr(s,t,e,n,i,r,2)):o===2&&Jg(s,t,e,n,i,r):yr($i(s),t,e,n,i,r,1);break}}}function jg(s){let t=s.prev,e=s,n=s.next;if(Ne(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,h=n.y,c=i<r?i<o?i:o:r<o?r:o,u=a<l?a<h?a:h:l<h?l:h,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>h?a:h:l>h?l:h,g=n.next;for(;g!==t;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=f&&Ms(i,a,r,l,o,h,g.x,g.y)&&Ne(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Zg(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ne(i,r,o)>=0)return!1;let a=i.x,l=r.x,h=o.x,c=i.y,u=r.y,d=o.y,f=a<l?a<h?a:h:l<h?l:h,g=c<u?c<d?c:d:u<d?u:d,x=a>l?a>h?a:h:l>h?l:h,y=c>u?c>d?c:d:u>d?u:d,p=Gl(f,g,t,e,n),E=Gl(x,y,t,e,n),S=s.prevZ,_=s.nextZ;for(;S&&S.z>=p&&_&&_.z<=E;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=y&&S!==i&&S!==o&&Ms(a,c,l,u,h,d,S.x,S.y)&&Ne(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=f&&_.x<=x&&_.y>=g&&_.y<=y&&_!==i&&_!==o&&Ms(a,c,l,u,h,d,_.x,_.y)&&Ne(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=y&&S!==i&&S!==o&&Ms(a,c,l,u,h,d,S.x,S.y)&&Ne(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=E;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=y&&_!==i&&_!==o&&Ms(a,c,l,u,h,d,_.x,_.y)&&Ne(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Kg(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Uo(i,r)&&gu(i,n,n.next,r)&&xr(i,r)&&xr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),_r(n),_r(n.next),n=s=r),n=n.next}while(n!==s);return $i(n)}function Jg(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ay(o,a)){let l=yu(o,a);o=$i(o,o.next),l=$i(l,l.next),yr(o,t,e,n,i,r,0),yr(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Qg(s,t,e,n){let i=[],r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,h=mu(s,a,l,n,!1),h===h.next&&(h.steiner=!0),i.push(oy(h));for(i.sort(ty),r=0;r<i.length;r++)e=ey(i[r],e);return e}function ty(s,t){return s.x-t.x}function ey(s,t){let e=ny(s,t);if(!e)return t;let n=yu(e,s);return $i(n,n.next),$i(e,e.next)}function ny(s,t){let e=t,n=-1/0,i,r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,h=i.y,c=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Ms(o<h?r:n,o,l,h,o<h?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),xr(e,s)&&(u<c||u===c&&(e.x>i.x||e.x===i.x&&iy(i,e)))&&(i=e,c=u)),e=e.next;while(e!==a);return i}function iy(s,t){return Ne(s.prev,s,t.prev)<0&&Ne(t.next,s,s.next)<0}function sy(s,t,e,n){let i=s;do i.z===0&&(i.z=Gl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ry(i)}function ry(s){let t,e,n,i,r,o,a,l,h=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<h&&(a++,n=n.nextZ,!!n);t++);for(l=h;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,h*=2}while(o>1);return s}function Gl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function oy(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ms(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function ay(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!ly(s,t)&&(xr(s,t)&&xr(t,s)&&cy(s,t)&&(Ne(s.prev,s,t.prev)||Ne(s,t.prev,t))||Uo(s,t)&&Ne(s.prev,s,s.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Uo(s,t){return s.x===t.x&&s.y===t.y}function gu(s,t,e,n){let i=Jr(Ne(s,t,e)),r=Jr(Ne(s,t,n)),o=Jr(Ne(e,n,s)),a=Jr(Ne(e,n,t));return!!(i!==r&&o!==a||i===0&&Kr(s,e,t)||r===0&&Kr(s,n,t)||o===0&&Kr(e,s,n)||a===0&&Kr(e,t,n))}function Kr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Jr(s){return s>0?1:s<0?-1:0}function ly(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&gu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function xr(s,t){return Ne(s.prev,s,s.next)<0?Ne(s,t,s.next)>=0&&Ne(s,s.prev,t)>=0:Ne(s,t,s.prev)<0||Ne(s,s.next,t)<0}function cy(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function yu(s,t){let e=new Wl(s.i,s.x,s.y),n=new Wl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Oh(s,t,e,n){let i=new Wl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function _r(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Wl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function hy(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var hr=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Fh(t),Bh(n,t);let o=t.length;e.forEach(Fh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Bh(n,e[l]);let a=Yg.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Fh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Bh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var vr=class s extends ze{constructor(t=new Fs([new wt(.5,.5),new wt(-.5,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new xe(i,3)),this.setAttribute("uv",new xe(r,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,y=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:uy,S,_=!1,z,P,U,N;p&&(S=p.getSpacedPoints(c),_=!0,d=!1,z=p.computeFrenetFrames(c,!1),P=new C,U=new C,N=new C),d||(y=0,f=0,g=0,x=0);let w=a.extractPoints(h),M=w.shape,T=w.holes;if(!hr.isClockWise(M)){M=M.reverse();for(let D=0,tt=T.length;D<tt;D++){let A=T[D];hr.isClockWise(A)&&(T[D]=A.reverse())}}let W=hr.triangulateShape(M,T),$=M;for(let D=0,tt=T.length;D<tt;D++){let A=T[D];M=M.concat(A)}function V(D,tt,A){return tt||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(tt,A)}let O=M.length,K=W.length;function X(D,tt,A){let bt,lt,ut,gt=D.x-tt.x,It=D.y-tt.y,Bt=A.x-D.x,R=A.y-D.y,b=gt*gt+It*It,J=gt*R-It*Bt;if(Math.abs(J)>Number.EPSILON){let ot=Math.sqrt(b),mt=Math.sqrt(Bt*Bt+R*R),et=tt.x-It/ot,Yt=tt.y+gt/ot,L=A.x-R/mt,st=A.y+Bt/mt,F=((L-et)*R-(st-Yt)*Bt)/(gt*R-It*Bt);bt=et+gt*F-D.x,lt=Yt+It*F-D.y;let j=bt*bt+lt*lt;if(j<=2)return new wt(bt,lt);ut=Math.sqrt(j/2)}else{let ot=!1;gt>Number.EPSILON?Bt>Number.EPSILON&&(ot=!0):gt<-Number.EPSILON?Bt<-Number.EPSILON&&(ot=!0):Math.sign(It)===Math.sign(R)&&(ot=!0),ot?(bt=-It,lt=gt,ut=Math.sqrt(b)):(bt=gt,lt=It,ut=Math.sqrt(b/2))}return new wt(bt/ut,lt/ut)}let rt=[];for(let D=0,tt=$.length,A=tt-1,bt=D+1;D<tt;D++,A++,bt++)A===tt&&(A=0),bt===tt&&(bt=0),rt[D]=X($[D],$[A],$[bt]);let vt=[],yt,zt=rt.concat();for(let D=0,tt=T.length;D<tt;D++){let A=T[D];yt=[];for(let bt=0,lt=A.length,ut=lt-1,gt=bt+1;bt<lt;bt++,ut++,gt++)ut===lt&&(ut=0),gt===lt&&(gt=0),yt[bt]=X(A[bt],A[ut],A[gt]);vt.push(yt),zt=zt.concat(yt)}for(let D=0;D<y;D++){let tt=D/y,A=f*Math.cos(tt*Math.PI/2),bt=g*Math.sin(tt*Math.PI/2)+x;for(let lt=0,ut=$.length;lt<ut;lt++){let gt=V($[lt],rt[lt],bt);ft(gt.x,gt.y,-A)}for(let lt=0,ut=T.length;lt<ut;lt++){let gt=T[lt];yt=vt[lt];for(let It=0,Bt=gt.length;It<Bt;It++){let R=V(gt[It],yt[It],bt);ft(R.x,R.y,-A)}}}let Tt=g+x;for(let D=0;D<O;D++){let tt=d?V(M[D],zt[D],Tt):M[D];_?(U.copy(z.normals[0]).multiplyScalar(tt.x),P.copy(z.binormals[0]).multiplyScalar(tt.y),N.copy(S[0]).add(U).add(P),ft(N.x,N.y,N.z)):ft(tt.x,tt.y,0)}for(let D=1;D<=c;D++)for(let tt=0;tt<O;tt++){let A=d?V(M[tt],zt[tt],Tt):M[tt];_?(U.copy(z.normals[D]).multiplyScalar(A.x),P.copy(z.binormals[D]).multiplyScalar(A.y),N.copy(S[D]).add(U).add(P),ft(N.x,N.y,N.z)):ft(A.x,A.y,u/c*D)}for(let D=y-1;D>=0;D--){let tt=D/y,A=f*Math.cos(tt*Math.PI/2),bt=g*Math.sin(tt*Math.PI/2)+x;for(let lt=0,ut=$.length;lt<ut;lt++){let gt=V($[lt],rt[lt],bt);ft(gt.x,gt.y,u+A)}for(let lt=0,ut=T.length;lt<ut;lt++){let gt=T[lt];yt=vt[lt];for(let It=0,Bt=gt.length;It<Bt;It++){let R=V(gt[It],yt[It],bt);_?ft(R.x,R.y+S[c-1].y,S[c-1].x+A):ft(R.x,R.y,u+A)}}}Y(),it();function Y(){let D=i.length/3;if(d){let tt=0,A=O*tt;for(let bt=0;bt<K;bt++){let lt=W[bt];Ot(lt[2]+A,lt[1]+A,lt[0]+A)}tt=c+y*2,A=O*tt;for(let bt=0;bt<K;bt++){let lt=W[bt];Ot(lt[0]+A,lt[1]+A,lt[2]+A)}}else{for(let tt=0;tt<K;tt++){let A=W[tt];Ot(A[2],A[1],A[0])}for(let tt=0;tt<K;tt++){let A=W[tt];Ot(A[0]+O*c,A[1]+O*c,A[2]+O*c)}}n.addGroup(D,i.length/3-D,0)}function it(){let D=i.length/3,tt=0;At($,tt),tt+=$.length;for(let A=0,bt=T.length;A<bt;A++){let lt=T[A];At(lt,tt),tt+=lt.length}n.addGroup(D,i.length/3-D,1)}function At(D,tt){let A=D.length;for(;--A>=0;){let bt=A,lt=A-1;lt<0&&(lt=D.length-1);for(let ut=0,gt=c+y*2;ut<gt;ut++){let It=O*ut,Bt=O*(ut+1),R=tt+bt+It,b=tt+lt+It,J=tt+lt+Bt,ot=tt+bt+Bt;Gt(R,b,J,ot)}}}function ft(D,tt,A){l.push(D),l.push(tt),l.push(A)}function Ot(D,tt,A){Ut(D),Ut(tt),Ut(A);let bt=i.length/3,lt=E.generateTopUV(n,i,bt-3,bt-2,bt-1);te(lt[0]),te(lt[1]),te(lt[2])}function Gt(D,tt,A,bt){Ut(D),Ut(tt),Ut(bt),Ut(tt),Ut(A),Ut(bt);let lt=i.length/3,ut=E.generateSideWallUV(n,i,lt-6,lt-3,lt-2,lt-1);te(ut[0]),te(ut[1]),te(ut[3]),te(ut[1]),te(ut[2]),te(ut[3])}function Ut(D){i.push(l[D*3+0]),i.push(l[D*3+1]),i.push(l[D*3+2])}function te(D){r.push(D.x),r.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return dy(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new wo[i.type]().fromJSON(i)),new s(n,t.options)}},uy={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],h=t[i*3],c=t[i*3+1];return[new wt(r,o),new wt(a,l),new wt(h,c)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[n*3],c=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],x=t[r*3],y=t[r*3+1],p=t[r*3+2];return Math.abs(a-c)<Math.abs(o-h)?[new wt(o,1-l),new wt(h,1-u),new wt(d,1-g),new wt(x,1-p)]:[new wt(a,1-l),new wt(c,1-u),new wt(f,1-g),new wt(y,1-p)]}};function dy(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Bs=class s extends ze{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],h=[],c=[],u=t,d=(e-t)/i,f=new C,g=new wt;for(let x=0;x<=i;x++){for(let y=0;y<=n;y++){let p=r+y/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),h.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,c.push(g.x,g.y)}u+=d}for(let x=0;x<i;x++){let y=x*(n+1);for(let p=0;p<n;p++){let E=p+y,S=E,_=E+n+1,z=E+n+2,P=E+1;a.push(S,_,P),a.push(_,z,P)}}this.setIndex(a),this.setAttribute("position",new xe(l,3)),this.setAttribute("normal",new xe(h,3)),this.setAttribute("uv",new xe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Fe=class s extends ze{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),h=0,c=[],u=new C,d=new C,f=[],g=[],x=[],y=[];for(let p=0;p<=n;p++){let E=[],S=p/n,_=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let z=0;z<=e;z++){let P=z/e;u.x=-t*Math.cos(i+P*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(i+P*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),y.push(P+_,1-S),E.push(h++)}c.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let S=c[p][E+1],_=c[p][E],z=c[p+1][E],P=c[p+1][E+1];(p!==0||o>0)&&f.push(S,_,P),(p!==n-1||l<Math.PI)&&f.push(_,z,P)}this.setIndex(f),this.setAttribute("position",new xe(g,3)),this.setAttribute("normal",new xe(x,3)),this.setAttribute("uv",new xe(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $n=class s extends ze{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],h=[],c=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let x=g/i*r,y=f/n*Math.PI*2;u.x=(t+e*Math.cos(y))*Math.cos(x),u.y=(t+e*Math.cos(y))*Math.sin(x),u.z=e*Math.sin(y),a.push(u.x,u.y,u.z),c.x=t*Math.cos(x),c.y=t*Math.sin(x),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(g/i),h.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let x=(i+1)*f+g-1,y=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,E=(i+1)*f+g;o.push(x,y,E),o.push(y,p,E)}this.setIndex(o),this.setAttribute("position",new xe(a,3)),this.setAttribute("normal",new xe(l,3)),this.setAttribute("uv",new xe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var To=class s extends ze{constructor(t=new So(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,h=new wt,c=new C,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new xe(u,3)),this.setAttribute("normal",new xe(d,3)),this.setAttribute("uv",new xe(f,2));function x(){for(let S=0;S<e;S++)y(S);y(r===!1?e:0),E(),p()}function y(S){c=t.getPointAt(S/e,c);let _=o.normals[S],z=o.binormals[S];for(let P=0;P<=i;P++){let U=P/i*Math.PI*2,N=Math.sin(U),w=-Math.cos(U);l.x=w*_.x+N*z.x,l.y=w*_.y+N*z.y,l.z=w*_.z+N*z.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=c.x+n*l.x,a.y=c.y+n*l.y,a.z=c.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=e;S++)for(let _=1;_<=i;_++){let z=(i+1)*(S-1)+(_-1),P=(i+1)*S+(_-1),U=(i+1)*S+_,N=(i+1)*(S-1)+_;g.push(z,P,N),g.push(P,U,N)}}function E(){for(let S=0;S<=e;S++)for(let _=0;_<=i;_++)h.x=S/e,h.y=_/i,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new wo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var _t=class extends Si{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ao=class extends _t{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Qr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function fy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Hs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xl=class extends Hs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oc,endingEnd:Oc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fc:r=t,a=2*e-n;break;case Bc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Fc:o=t,l=2*n-e;break;case Bc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let h=(n-e)*.5,c=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-n),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),x=g*g,y=x*g,p=-d*y+2*d*x-d*g,E=(1+d)*y+(-1.5-2*d)*x+(-.5+d)*g+1,S=(-1-f)*y+(1.5+f)*x+.5*g,_=f*y-f*x;for(let z=0;z!==a;++z)r[z]=p*o[c+z]+E*o[h+z]+S*o[l+z]+_*o[u+z];return r}},$l=class extends Hs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=(n-e)/(i-e),u=1-c;for(let d=0;d!==a;++d)r[d]=o[h+d]*u+o[l+d]*c;return r}},ql=class extends Hs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},zn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qr(e,this.TimeBufferType),this.values=Qr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qr(t.times,Array),values:Qr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ro:e=this.InterpolantFactoryMethodDiscrete;break;case bl:e=this.InterpolantFactoryMethodLinear;break;case ra:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return bl;case this.InterpolantFactoryMethodSmooth:return ra}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&fy(i))for(let a=0,l=i.length;a!==l;++a){let h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ra,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],c=t[a+1];if(h!==c&&(a!==1||h!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,h=0;h!==n;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=bl;var qi=class extends zn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=ro;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends zn{};Yl.prototype.ValueTypeName="color";var jl=class extends zn{};jl.prototype.ValueTypeName="number";var Zl=class extends Hs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),h=t*a;for(let c=h+a;h!==c;h+=4)ln.slerpFlat(r,0,o,h-a,o,h,l);return r}},Ro=class extends zn{InterpolantFactoryMethodLinear(t){return new Zl(this.times,this.values,this.getValueSize(),t)}};Ro.prototype.ValueTypeName="quaternion";Ro.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends zn{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=ro;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Kl=class extends zn{};Kl.prototype.ValueTypeName="vector";var Jl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){a++,r===!1&&i.onStart!==void 0&&i.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,i.onProgress!==void 0&&i.onProgress(c,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){let u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){let f=h[u],g=h[u+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null}}},py=new Jl,Ql=class{constructor(t){this.manager=t!==void 0?t:py,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ql.DEFAULT_MATERIAL_NAME="__DEFAULT";var ji=class extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ei=class extends ji{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Na=new Ie,Hh=new C,Vh=new C,Mr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Hh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hh),Vh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vh),e.updateMatrixWorld(),Na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},tc=class extends Mr{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Is*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Vs=class extends ji{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new tc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Gh=new Ie,nr=new C,za=new C,ec=class extends Mr{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new Ce(2,1,1,1),new Ce(0,1,1,1),new Ce(3,1,1,1),new Ce(1,1,1,1),new Ce(3,0,1,1),new Ce(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),nr.setFromMatrixPosition(t.matrixWorld),n.position.copy(nr),za.copy(n.position),za.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(za),n.updateMatrixWorld(),i.makeTranslation(-nr.x,-nr.y,-nr.z),Gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh)}},On=class extends ji{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ec}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},nc=class extends Mr{constructor(){super(new mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Co=class extends ji{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new nc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Po=class extends ji{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var yc="\\[\\]\\.:\\/",my=new RegExp("["+yc+"]","g"),xc="[^"+yc+"]",gy="[^"+yc.replace("\\.","")+"]",yy=/((?:WC+[\/:])*)/.source.replace("WC",xc),xy=/(WCOD+)?/.source.replace("WCOD",gy),_y=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xc),vy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xc),My=new RegExp("^"+yy+xy+_y+vy+"$"),by=["material","materials","bones","map"],ic=class{constructor(t,e,n){let i=n||ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ke=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(my,"")}static parseTrackName(t){let e=My.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);by.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[i];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ke.Composite=ic;ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray];ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ux=new Float32Array(1);var Wh=new Ie,Zi=class{constructor(t,e,n=0,i=1/0){this.ray=new Gi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wh),this}intersectObject(t,e=!0,n=[]){return sc(t,this,n,e),n.sort(Xh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)sc(t[i],this,n,e);return n.sort(Xh),n}};function Xh(s,t){return s.distance-t.distance}function sc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)sc(r[o],t,e,!0)}}var br=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(He(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Io=class extends oi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);var No=class extends Us{constructor(){super();let t=new Ct;t.deleteAttribute("uv");let e=new _t({side:Ve}),n=new _t,i=new On(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Dt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Dt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Dt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Dt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let h=new Dt(t,n);h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),this.add(h);let c=new Dt(t,n);c.position.set(2.291,-.756,-2.621),c.rotation.set(0,-.286,0),c.scale.set(1.546,1.552,1.496),this.add(c);let u=new Dt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new Dt(t,Xs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Dt(t,Xs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new Dt(t,Xs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let x=new Dt(t,Xs(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);let y=new Dt(t,Xs(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let p=new Dt(t,Xs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Xs(s){let t=new we;return t.color.setScalar(s),t}var Ye=-1.0474999999999999,wi=.292,zo=9.81,_c=.2,Sy=.011,xu=6,Ey=.95,_u=.78,wy=.15,Ty=7,Yn={white:{name:"Biela",color:16052712,value:0},red:{name:"\u010Cerven\xE1",color:11735583,value:1},yellow:{name:"\u017Dlt\xE1",color:15909912,value:2},green:{name:"Zelen\xE1",color:1014330,value:3},brown:{name:"Hned\xE1",color:7027230,value:4},blue:{name:"Modr\xE1",color:1525685,value:5},pink:{name:"Ru\u017Eov\xE1",color:15764136,value:6},black:{name:"\u010Cierna",color:1118481,value:7}},Rn={yellow:{x:Ye,z:wi},green:{x:Ye,z:-wi},brown:{x:Ye,z:0},blue:{x:0,z:0},pink:{x:3.569/4,z:0},black:{x:3.569/2-.324,z:0}},An=.062,$s=.052,Qi=[{x:-3.569/2-.012,z:-1.778/2-.012,r:.058,corner:!0},{x:-3.569/2-.012,z:1.778/2+.012,r:.058,corner:!0},{x:3.569/2+.012,z:-1.778/2-.012,r:.058,corner:!0},{x:3.569/2+.012,z:1.778/2+.012,r:.058,corner:!0},{x:0,z:-1.778/2-.034,r:.056,corner:!1},{x:0,z:1.778/2+.034,r:.056,corner:!1}];function Ay(){let s=[],n=(r,o,a,l)=>s.push({ax:r,az:o,bx:a,bz:l});for(let r of[-1,1])n(r*1.7845,-.889+An,r*1.7845,.889-An),n(r*1.7845,-.889+An,r*(1.7845+.045*.7),-.889+An-.045*.7),n(r*1.7845,.889-An,r*(1.7845+.045*.7),.889-An+.045*.7);for(let r of[-1,1])n(-1.7845+An,r*.889,-$s,r*.889),n($s,r*.889,1.7845-An,r*.889),n(-1.7845+An,r*.889,-1.7845+An-.045*.7,r*(.889+.045*.7)),n(1.7845-An,r*.889,1.7845-An+.045*.7,r*(.889+.045*.7)),n(-$s,r*.889,-$s+.008,r*(.889+.045)),n($s,r*.889,$s-.008,r*(.889+.045));return s}var Ry=Ay();function ts(){let s=[],t=(r,o,a)=>s.push(Cy(s.length,r,o,a));t("white",Ye-.06,-.12);for(let r of["yellow","green","brown","blue","pink","black"])t(r,Rn[r].x,Rn[r].z);let e=6e-4,n=Rn.pink.x+2*.02625+.002,i=Math.sqrt(3)*(.02625+e/2);for(let r=0;r<5;r++)for(let o=0;o<=r;o++)t("red",n+r*i,(o-r/2)*(2*.02625+e));return s}function Cy(s,t,e,n){return{id:s,kind:t,p:{x:e,z:n},v:{x:0,z:0},w:{x:0,y:0,z:0},on:!0,potted:null,moving:!1}}function Ti(s){return s.map(t=>({id:t.id,kind:t.kind,x:t.p.x,z:t.p.z,on:t.on}))}function es(s,t){for(let e of t){let n=s[e.id];n.p.x=e.x,n.p.z=e.z,n.on=e.on,n.potted=null,n.v.x=n.v.z=0,n.w.x=n.w.y=n.w.z=0}}function Fo(s,t,e,n=0,i=0){let r=Math.max(.05,Math.min(1,e))*Ty,o=Math.cos(t),a=Math.sin(t);s.v.x=r*o,s.v.z=r*a;let l=n*.5*.02625,h=i*.5*.02625,c=5*r/(2*.02625*.02625);s.w.x=c*h*a,s.w.y=c*l,s.w.z=-c*h*o,s.moving=!0}var Py=1/1e3,Oo=class{constructor(t){this.balls=t,this.events=[],this.firstContact=null,this.time=0}get moving(){return this.balls.some(t=>t.on&&t.moving)}advance(t){let e=t;for(;e>1e-9;){let n=Math.min(Py,e);if(this.step(n),e-=n,!this.moving)break}return this.moving}step(t){this.time+=t;let e=this.balls;for(let n of e)n.on&&n.moving&&(Iy(n,t),n.p.x+=n.v.x*t,n.p.z+=n.v.z*t);for(let n=0;n<e.length;n++){let i=e[n];if(i.on)for(let r=n+1;r<e.length;r++){let o=e[r];if(!o.on||!i.moving&&!o.moving)continue;let a=o.p.x-i.p.x,l=o.p.z-i.p.z,h=a*a+l*l;if(h>=4*.02625*.02625||h<1e-12)continue;let c=Math.sqrt(h),u=a/c,d=l/c,f=(i.v.x-o.v.x)*u+(i.v.z-o.v.z)*d,g=(2*.02625-c)/2+1e-7;if(i.p.x-=u*g,i.p.z-=d*g,o.p.x+=u*g,o.p.z+=d*g,f<=0)continue;let x=(1+Ey)/2*f;i.v.x-=x*u,i.v.z-=x*d,o.v.x+=x*u,o.v.z+=x*d,i.moving=o.moving=!0,this.firstContact===null&&(i.kind==="white"||o.kind==="white")&&(this.firstContact=i.kind==="white"?o:i),this.events.push({type:"ball",a:i.id,b:o.id,speed:f})}}for(let n of e){if(!n.on||!n.moving)continue;for(let r of Qi){let o=n.p.x-r.x,a=n.p.z-r.z;if(o*o+a*a<r.r*r.r){n.on=!1,n.moving=!1,n.potted={x:r.x,z:r.z,vx:n.v.x,vz:n.v.z,t:this.time},this.events.push({type:"pot",a:n.id,pocket:Qi.indexOf(r),speed:Math.hypot(n.v.x,n.v.z)});break}}if(!n.on)continue;for(let r of Ry)Ly(n,r,this.events);let i=.2;(Math.abs(n.p.x)>3.569/2+i||Math.abs(n.p.z)>1.778/2+i)&&(n.p.x=Math.max(-3.569/2+.02625,Math.min(3.569/2-.02625,n.p.x)),n.p.z=Math.max(-1.778/2+.02625,Math.min(1.778/2-.02625,n.p.z)),n.v.x=n.v.z=0)}}};function Iy(s,t){let e=s.v,n=s.w,i=e.x+.02625*n.z,r=e.z-.02625*n.x,o=Math.hypot(i,r);if(o>1e-4){let l=3.5*_c*zo*t;if(o<=l)e.x-=2/7*i,e.z-=2/7*r,n.z=-e.x/.02625,n.x=e.z/.02625;else{let h=i/o,c=r/o,u=_c*zo*t;e.x-=u*h,e.z-=u*c;let d=5*_c*zo/(2*.02625)*t;n.x+=d*c,n.z-=d*h}}else{let l=Math.hypot(e.x,e.z),h=Sy*zo*t;l<=h?e.x=e.z=0:(e.x-=e.x/l*h,e.z-=e.z/l*h),n.z=-e.x/.02625,n.x=e.z/.02625}n.y*=Math.exp(-xu*t*.12);let a=xu*t;n.y=Math.abs(n.y)<=a?0:n.y-Math.sign(n.y)*a,Math.hypot(e.x,e.z)<.004&&Math.hypot(i,r)<.004&&(e.x=e.z=0,n.x=n.y=n.z=0,s.moving=!1)}function Ly(s,t,e){let n=t.bx-t.ax,i=t.bz-t.az,r=n*n+i*i,o=((s.p.x-t.ax)*n+(s.p.z-t.az)*i)/r;o=Math.max(0,Math.min(1,o));let a=t.ax+o*n,l=t.az+o*i,h=s.p.x-a,c=s.p.z-l,u=h*h+c*c;if(u>=.02625*.02625||u<1e-14)return;let d=Math.sqrt(u),f=h/d,g=c/d,x=s.v.x*f+s.v.z*g;if(s.p.x+=f*(.02625-d+1e-7),s.p.z+=g*(.02625-d+1e-7),x>=0)return;s.v.x-=(1+_u)*x*f,s.v.z-=(1+_u)*x*g;let y=-g,p=f,E=s.w.y*.02625,S=wy*Math.min(1,-x/1.5+.3);s.v.x-=S*E*y,s.v.z-=S*E*p,s.w.y*=.55,s.w.x*=.7,s.w.z*=.7,s.moving=!0,e.push({type:"cushion",a:s.id,speed:-x})}function Bo(s,t,e){let n=Math.cos(e),i=Math.sin(e),r=null;for(let a of s){if(!a.on||a===t)continue;let l=a.p.x-t.p.x,h=a.p.z-t.p.z,c=l*n+h*i;if(c<=0)continue;let u=l*l+h*h-c*c;if(u>4*.02625*.02625)continue;let d=c-Math.sqrt(4*.02625*.02625-u);d>=0&&(!r||d<r.t)&&(r={ball:a,t:d})}let o=1/0;return n>1e-9&&(o=Math.min(o,(3.569/2-.02625-t.p.x)/n)),n<-1e-9&&(o=Math.min(o,(-3.569/2+.02625-t.p.x)/n)),i>1e-9&&(o=Math.min(o,(1.778/2-.02625-t.p.z)/i)),i<-1e-9&&(o=Math.min(o,(-1.778/2+.02625-t.p.z)/i)),!r||o<r.t?{ball:null,t:o,ghost:{x:t.p.x+n*o,z:t.p.z+i*o}}:{ball:r.ball,t:r.t,ghost:{x:t.p.x+n*r.t,z:t.p.z+i*r.t}}}function vu(s,t){if(s>Ye+1e-9)return!1;let e=s-Ye;return e*e+t*t<=wi*wi+1e-9}function Ho(s,t,e,n=null){return Math.abs(t)>3.569/2-.02625||Math.abs(e)>1.778/2-.02625?!1:s.every(i=>!i.on||i===n||(i.p.x-t)**2+(i.p.z-e)**2>=4*.02625*.02625*1.0001)}var Dy=[{title:"Ovl\xE1danie my\u0161ou",lines:["Klikni do hry: my\u0161 sa zachyt\xED v okne.","Pohyb my\u0161i bez tla\u010Didla: mierenie.","Shift: jemn\xE9 mierenie (len pokro\u010Dil\xE9","   a majstrovsk\xE9 t\xE1g\xE1, pozri F2).","\u013Dav\xE9 tla\u010Didlo dr\u017E: ruka chyt\xED t\xE1go.","   My\u0161 k sebe t\xE1go odtiahne,","   pohyb dopredu vystrel\xED.","   Sila pod\u013Ea r\xFDchlosti pohybu.","Koliesko dr\u017E: miesto \xFAderu na bielej.","Dvojklik kolieskom: stred bielej.","Prav\xE9 tla\u010Didlo dr\u017E: posun poh\u013Eadu.","Ot\xE1\u010Danie kolieska: pribl\xED\u017Eenie."]},{title:"Kl\xE1vesy",lines:["F1   t\xE1to n\xE1stenka","F2   stojan s t\xE1gami","F3   nakriedova\u0165 \u0161pi\u010Dku t\xE1ga","F4   tabu\u013Ea so sk\xF3re","F6   dvere (otvoren\xE9: in\xED sa m\xF4\u017Eu pozera\u0165)","F7 kreslo so spr\xE1vami (C, V), F8 rebr\xED\u010Dek,","F9 mixpult a r\xE1dio (\u0161\xEDpky, P),","F10 bar s telef\xF3nom (M\xF4j \xFA\u010Det),","F12 n\xE1stenka Liga, menu Liga: kancel\xE1ria","Tab  poh\u013Ead na st\xF4l zhora","Esc  hlavn\xE9 menu, Ctrl dr\u017E: vo\u013En\xE1 my\u0161","Z sp\xE4\u0165, B biela do ruky,","R nov\xE9 rozostavenie, S presko\u010Di\u0165","Medzern\xEDk dr\u017E: sila, \u0161\xEDpky: mierenie"]},{title:"Princ\xEDp hry",lines:["Bielou gu\u013Eou pot\xE1paj ostatn\xE9 gule.","Body: \u010Derven\xE1 1, \u017Elt\xE1 2, zelen\xE1 3,","hned\xE1 4, modr\xE1 5, ru\u017Eov\xE1 6, \u010Dierna 7.","O najlep\u0161ie sk\xF3re: cel\xFD frame s\xE1m,","   fauly sa odpo\u010D\xEDtaj\xFA, rozhoduje \u010Das.","S\xE9ria: body bez preru\u0161enia.","Ke\u010F spadne biela, polo\u017E ju do D.","Kruh dole ukazuje dotyk g\xFA\u013E zhora:","   uhol a plnos\u0165 z\xE1sahu.","Krieda (F3): fal\u0161e s\xFA 5x silnej\u0161ie,","   nakriedovan\xE1 \u0161pi\u010Dka vydr\u017E\xED 3 \xFAdery.","   Bez kriedy maj\xFA fal\u0161e len p\xE4tinu \xFA\u010Dinku."]},{title:"T\xE1g\xE1 (F2) a partie",lines:["Desa\u0165 t\xE1g v troch kateg\xF3ri\xE1ch.","Tvrd\xE1 \u0161pi\u010Dka: silnej\u0161\xED \xFAder,","   hor\u0161ie dr\u017E\xED fal\u0161e.","M\xE4kk\xE1 \u0161pi\u010Dka: jemnej\u0161ie \xFAdery.","Dlh\xE9 t\xE1go: dlh\u0161ie \u0165ahanie my\u0161ou,","   jemnej\u0161ie d\xE1vkovanie sily.","Pokro\u010Dil\xE9 a majstrovsk\xE9 t\xE1g\xE1","   maj\xFA jemn\xE9 mierenie so Shift.","V\xFDber: klik na kartu alebo \u0161\xEDpky.","Posla\u0165 v\xFDzvu (menu po Esc):","   partia alebo tr\xE9ning cez internet."]}];function Mu(){let e=document.createElement("canvas");e.width=2048,e.height=1408;let n=e.getContext("2d");n.fillStyle="#a5754a",n.fillRect(0,0,2048,1408);for(let o=0;o<9e3;o++)n.fillStyle=`rgba(${60+Math.random()*80},${35+Math.random()*40},${15+Math.random()*20},${.15+Math.random()*.25})`,n.fillRect(Math.random()*2048,Math.random()*1408,2+Math.random()*4,2+Math.random()*4);n.fillStyle="#f4ecd8",n.save(),n.translate(2048/2,92),n.rotate(-.01),n.fillRect(-330,-60,660,112),n.fillStyle="#123524",n.font="bold 76px Georgia, serif",n.textAlign="center",n.textBaseline="middle",n.fillText("N\xE1poveda",0,0),n.restore();let i=[[70,190,960,600,-.012],[1080,190,900,520,.01],[70,830,960,530,.008],[1080,760,900,600,-.01]];Dy.forEach((o,a)=>{let[l,h,c,u,d]=i[a];n.save(),n.translate(l+c/2,h+u/2),n.rotate(d),n.fillStyle="rgba(0,0,0,0.35)",n.fillRect(-c/2+10,-u/2+12,c,u),n.fillStyle="#fbf7ec",n.fillRect(-c/2,-u/2,c,u),n.fillStyle=["#c0392b","#2f6fd6","#2a9d8f","#c9a24a"][a],n.beginPath(),n.arc(0,-u/2+22,14,0,Math.PI*2),n.fill(),n.fillStyle="#123524",n.font="bold 50px Georgia, serif",n.textAlign="left",n.textBaseline="top",n.fillText(o.title,-c/2+40,-u/2+50),n.fillStyle="#c9a24a",n.fillRect(-c/2+40,-u/2+110,c-80,4),n.fillStyle="#222";let f=Math.min(42,(u-150)/o.lines.length);n.font=`${Math.min(36,Math.floor(f*.86))}px Arial, Helvetica, sans-serif`,o.lines.forEach((g,x)=>{n.fillText(g,-c/2+44,-u/2+132+x*f)}),n.restore()});let r=new _e(e);return r.colorSpace=ce,r.anisotropy=8,r}var jn=(s,t,e,n,i,r,o,a,l,h,c)=>({id:s,name:t,category:e,tip:n,power:i,grip:r,len:o,fine:a,colors:{shaft:l,butt:h},note:c}),je=[jn("club","Klubov\xE9 t\xE1go","Z\xE1kladn\xE9","stredn\xE1",.8,1,1.45,0,"#dcb57e","#3a1c0c","Predvolen\xE9 t\xE1go na ka\u017Ed\xFD \xFAder."),jn("short","Kr\xE1tke t\xE1go","Z\xE1kladn\xE9","tvrd\xE1",.9,.85,1.37,0,"#d2a56a","#5a1d0e","Kr\xE1tke \u0165ahanie, siln\xE9 \xFAdery, hor\u0161ie dr\u017E\xED fal\u0161e."),jn("compact","Kompaktn\xE9 t\xE1go","Z\xE1kladn\xE9","stredn\xE1",.75,1,1.3,0,"#e0bd88","#20304a","Najkrat\u0161ie, r\xFDchle \u0165ahanie, slab\u0161ie \xFAdery."),jn("break","Prer\xE1\u017Eacie t\xE1go","Z\xE1kladn\xE9","ve\u013Emi tvrd\xE1",1,.7,1.45,0,"#cfa060","#5b0f14","Pln\xE1 sila na rozbitie, fal\u0161e skoro nedr\u017E\xED."),jn("soft","M\xE4kk\xE9 t\xE1go","Pokro\u010Dil\xE9","m\xE4kk\xE1",.65,1,1.47,8e-5,"#e8c992","#1f3b2a","Jemn\xE9 \xFAdery okolo \u010Diernej, presn\xE9 d\xE1vkovanie sily."),jn("long","Dlh\xE9 t\xE1go","Pokro\u010Dil\xE9","stredn\xE1",.85,1,1.58,6e-5,"#dfbc88","#14213d","Dlh\xE9 \u0165ahanie my\u0161ou, ve\u013Emi jemn\xE9 d\xE1vkovanie sily."),jn("ebony","Ebenov\xE9 t\xE1go","Pokro\u010Dil\xE9","stredne tvrd\xE1",.9,.95,1.49,6e-5,"#e6c896","#0d0d0d","Vyv\xE1\u017Een\xE9 t\xE1go na v\u0161etky \xFAdery."),jn("master","Majstrovsk\xE9 t\xE1go","Majstrovsk\xE9","stredne tvrd\xE1",1,1,1.5,3e-5,"#efd3a0","#0b0b0b","Pln\xE1 sila aj najjemnej\u0161ie mierenie so Shift."),jn("tour","Turnajov\xE9 t\xE1go","Majstrovsk\xE9","tvrd\xE1",1,.9,1.47,3e-5,"#f0d6a4","#2a0f2e","Siln\xE9 a presn\xE9 \xFAdery, fal\u0161e o nie\u010Do slab\u0161ie."),jn("touch","Citliv\xE9 t\xE1go","Majstrovsk\xE9","m\xE4kk\xE1",.72,1,1.6,2e-5,"#f2dcae","#123524","Najjemnej\u0161ie d\xE1vkovanie sily a mierenie.")];function bu(s){return je.find(t=>t.id===s)||je[0]}function Su(s){return 380*Math.pow(s.len/1.45,1.6)}function ky(s){let n=document.createElement("canvas");n.width=64,n.height=2048;let i=n.getContext("2d"),r=a=>2048*(1-a);i.fillStyle=s.colors.shaft,i.fillRect(0,0,64,2048);for(let a=0;a<40;a++){i.strokeStyle=`rgba(${120+Math.random()*40},${80+Math.random()*30},${40+Math.random()*20},${.12+Math.random()*.18})`,i.lineWidth=.5+Math.random()*1.5;let l=Math.random()*64;i.beginPath(),i.moveTo(l,0);for(let h=0;h<=2048;h+=64)i.lineTo(l+Math.sin(h/300+a)*3,h);i.stroke()}i.fillStyle=s.colors.butt,i.fillRect(0,0,64,r(.64));for(let a=0;a<4;a++){let l=(a+.5)*16;i.beginPath(),i.moveTo(l-64/8,r(.64)),i.lineTo(l,r(.5)),i.lineTo(l+64/8,r(.64)),i.closePath(),i.fill()}for(let a=0;a<30;a++){i.strokeStyle=`rgba(255,255,255,${.03+Math.random()*.05})`,i.lineWidth=.6+Math.random();let l=Math.random()*64;i.beginPath(),i.moveTo(l,0),i.lineTo(l+(Math.random()-.5)*6,r(.62)),i.stroke()}i.fillStyle="#c9a24a",i.fillRect(0,r(.645),64,2048*.004),i.fillRect(0,r(.985),64,2048*.004),i.fillStyle="#111",i.fillRect(0,0,64,r(.993)),i.fillStyle="#f3efe4",i.fillRect(0,r(.03),64,2048*.017),i.fillStyle="#2f6fd6",i.fillRect(0,r(.013),64,2048*.013+1);let o=new _e(n);return o.colorSpace=ce,o.anisotropy=4,o}function qs(s,t=!0){let e=new re,n=new fe(.0145,.0048,s.len,24,1),i=new Dt(n,new _t({map:ky(s),roughness:.32,metalness:.04}));return i.position.y=s.len/2,i.castShadow=t,e.add(i),e}var li=2048,Ys=1448;function Ai(s,t,e,n,i,r,o){let a=String(t||"").split(/\s+/),l="",h=0;for(let c=0;c<a.length;c++){let u=l?l+" "+a[c]:a[c];if(s.measureText(u).width>i&&l){if(h++,h>=o){let d=l;for(;d&&s.measureText(d+"\u2026").width>i;)d=d.slice(0,-1);return s.fillText(d+"\u2026",e,n),n+r}s.fillText(l,e,n),n+=r,l=a[c]}else l=u}return l&&(s.fillText(l,e,n),n+=r),n}function Eu(s,t){let e=document.createElement("canvas");e.width=li,e.height=Ys;let n=e.getContext("2d"),i=new _e(e);i.colorSpace=ce,i.anisotropy=8;let r=(s||[]).slice(0,9),o=r.map(()=>null),a="#1d1a16",l='Georgia, "Times New Roman", serif',h=(u,d,f,g,x)=>{let y=o[u];if(y){let p=g/x,E=y.width,S=y.width/p;S>y.height&&(S=y.height,E=y.height*p),n.save(),n.filter="grayscale(0.25) sepia(0.15)",n.drawImage(y,(y.width-E)/2,(y.height-S)/2,E,S,d,f,g,x),n.restore()}else n.fillStyle="#cfc6b3",n.fillRect(d,f,g,x),n.fillStyle="#a69c87",n.font=`bold 40px ${l}`,n.textAlign="center",n.fillText("HEDLAJNER",d+g/2,f+x/2+14),n.textAlign="left"},c=()=>{n.fillStyle="#f1ebdd",n.fillRect(0,0,li,Ys);for(let p=0;p<2500;p++)n.fillStyle=`rgba(120,100,70,${Math.random()*.05})`,n.fillRect(Math.random()*li,Math.random()*Ys,3,3);let u=n.createLinearGradient(li/2-30,0,li/2+30,0);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(.5,"rgba(0,0,0,0.12)"),u.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=u,n.fillRect(li/2-30,0,60,Ys),n.fillStyle="#c0392b",n.fillRect(60,46,92,92),n.fillStyle="#fff",n.font=`bold 78px ${l}`,n.fillText("H",80,120),n.fillStyle=a,n.font=`bold 104px ${l}`,n.fillText(t||"HEDLAJNER",172,128),n.font=`italic 34px ${l}`,n.fillStyle="#5a5246",n.fillText("Hlavn\xE9 spr\xE1vy z domova a zo sveta",176,172);let d=new Date;if(n.textAlign="right",n.font=`30px ${l}`,n.fillText(`${d.getDate()}. ${d.getMonth()+1}. ${d.getFullYear()}   hedlajner.sk`,li-60,128),n.textAlign="left",n.fillStyle=a,n.fillRect(60,196,li-120,5),n.fillRect(60,207,li-120,1.5),!r.length){n.font=`48px ${l}`,n.fillText("Spr\xE1vy sa nepodarilo na\u010D\xEDta\u0165.",80,320),i.needsUpdate=!0;return}let f=r[0];h(0,60,240,920,520),n.fillStyle="#c0392b",n.font="bold 30px Arial, sans-serif",n.fillText((f.c||"").toUpperCase(),60,808),n.fillStyle=a,n.font=`bold 62px ${l}`;let g=Ai(n,f.t,60,876,920,70,3);n.font=`32px ${l}`,n.fillStyle="#3a342c",g=Ai(n,f.e,60,g+10,920,42,6),n.font=`italic 26px ${l}`,n.fillStyle="#7a7060",n.fillText(f.d||"",60,Math.min(Ys-50,g+14));let x=240;for(let p=1;p<=2&&p<r.length;p++){let E=r[p];h(p,1070,x,300,200),n.fillStyle="#c0392b",n.font="bold 24px Arial, sans-serif",n.fillText((E.c||"").toUpperCase(),1395,x+26),n.fillStyle=a,n.font=`bold 40px ${l}`;let S=Ai(n,E.t,1395,x+74,590,46,3);n.font=`26px ${l}`,n.fillStyle="#3a342c",Ai(n,E.e,1395,S+4,590,32,Math.max(1,Math.floor((x+260-S)/32))),x+=300,n.fillStyle="rgba(29,26,22,0.4)",n.fillRect(1070,x-40,915,2)}n.fillStyle=a,n.font="bold 34px Arial, sans-serif",n.fillText("\u010EAL\u0160IE SPR\xC1VY",1070,x+8),n.fillRect(1070,x+22,915,3),r.slice(3).forEach((p,E)=>{let S=E%2,_=Math.floor(E/2),z=1070+S*470,P=x+80+_*200;P>Ys-80||(n.fillStyle="#c0392b",n.font="bold 22px Arial, sans-serif",n.fillText((p.c||"").toUpperCase(),z,P),n.fillStyle=a,n.font=`bold 32px ${l}`,Ai(n,p.t,z,P+42,440,38,3),n.font=`italic 22px ${l}`,n.fillStyle="#7a7060",n.fillText(p.d||"",z,P+168))}),i.needsUpdate=!0};return c(),r.slice(0,3).forEach((u,d)=>{if(!u.i)return;let f=new Image;f.crossOrigin="anonymous",f.onload=()=>{o[d]=f;try{c()}catch{o[d]=null,c()}},f.src=u.i}),{texture:i,items:r}}function wu(s){let n=document.createElement("canvas");n.width=1024,n.height=1400;let i=n.getContext("2d"),r=new _e(n);r.colorSpace=ce,r.anisotropy=8;let o=(s||[]).slice(0,12),a="Arial, Helvetica, sans-serif",l=i.createLinearGradient(0,0,1024,1400);l.addColorStop(0,"#0f2a4a"),l.addColorStop(1,"#1d5a7a"),i.fillStyle=l,i.fillRect(0,0,1024,1400),i.fillStyle="rgba(255,255,255,0.06)";for(let d=0;d<14;d++)i.beginPath(),i.arc(Math.random()*1024,Math.random()*1400,60+Math.random()*160,0,Math.PI*2),i.fill();i.fillStyle="#ffffff",i.font=`900 120px ${a}`,i.fillText("SPR\xC1VY",50,150),i.fillStyle="#ffcf4a",i.font=`bold 44px ${a}`,i.fillText("RSS",560,150),i.fillStyle="#d6e6f5",i.font=`30px ${a}`,i.fillText("Hedlajner  |  spr\xE1vy z m\xE9di\xED doma aj vo svete",54,200);let h=new Date;if(i.textAlign="right",i.fillText(`${h.getDate()}. ${h.getMonth()+1}. ${h.getFullYear()}`,974,70),i.textAlign="left",i.fillStyle="#ffcf4a",i.fillRect(50,226,924,6),!o.length)return i.fillStyle="#fff",i.font=`44px ${a}`,i.fillText("Spr\xE1vy z RSS nie s\xFA k dispoz\xEDcii.",60,330),r.needsUpdate=!0,{texture:r,items:o};let c=o[0];i.fillStyle="#ffcf4a",i.font=`bold 30px ${a}`,i.fillText(`${(c.c||"").toUpperCase()}  ${c.s||""}`,50,300),i.fillStyle="#ffffff",i.font=`bold 66px ${a}`;let u=Ai(i,c.t,50,380,924,74,4);return i.fillStyle="#d6e6f5",i.font=`32px ${a}`,u=Ai(i,c.e,50,u+6,924,42,3),u+=30,i.fillStyle="rgba(0,0,0,0.25)",i.fillRect(36,u-10,952,1400-u-40),u+=40,o.slice(1).forEach(d=>{u>1310||(i.fillStyle="#ffcf4a",i.font=`bold 22px ${a}`,i.fillText(`${d.s||""}${d.n?"  +"+d.n+" m\xE9di\xE1":""}`,60,u),i.fillStyle="#ffffff",i.font=`bold 32px ${a}`,u=Ai(i,d.t,60,u+38,894,38,2)+18)}),r.needsUpdate=!0,{texture:r,items:o}}var Ge={x:5,z:3.75,floor:-.86,ceil:-.86+3},ns=1;function Uy(){let e=document.createElement("canvas");e.width=512,e.height=426;let n=e.getContext("2d");n.fillStyle="#4e2914",n.fillRect(0,0,512,426);for(let r=0;r<120;r++){n.strokeStyle=`rgba(${20+Math.random()*30},${8+Math.random()*10},2,${.12+Math.random()*.2})`,n.lineWidth=.6+Math.random()*1.4,n.beginPath();let o=Math.random()*512;n.moveTo(o,0);for(let a=0;a<=426;a+=30)n.lineTo(o+Math.sin(a/50+r)*4,a);n.stroke()}for(let r of[0,512/2]){let o=r+26,a=40,l=512/2-52,h=346;n.fillStyle="rgba(0,0,0,0.25)",n.fillRect(o,a,l,h),n.strokeStyle="rgba(0,0,0,0.55)",n.lineWidth=6,n.strokeRect(o,a,l,h),n.strokeStyle="rgba(255,190,120,0.18)",n.lineWidth=2,n.strokeRect(o+5,a+5,l-10,h-10)}let i=new _e(e);return i.colorSpace=ce,i.wrapS=Nn,i}function Ny(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle="#1a4a32",e.fillRect(0,0,256,256);for(let r=0;r<256;r+=32)e.fillStyle="rgba(255,255,255,0.025)",e.fillRect(r,0,14,256);let n=(r,o)=>{e.save(),e.translate(r,o),e.fillStyle="rgba(190,170,110,0.16)",e.beginPath(),e.moveTo(0,-38),e.quadraticCurveTo(14,-10,0,0),e.quadraticCurveTo(-14,-10,0,-38),e.moveTo(0,38),e.quadraticCurveTo(14,10,0,0),e.quadraticCurveTo(-14,10,0,38),e.moveTo(-30,0),e.quadraticCurveTo(-8,10,0,0),e.quadraticCurveTo(-8,-10,-30,0),e.moveTo(30,0),e.quadraticCurveTo(8,10,0,0),e.quadraticCurveTo(8,-10,30,0),e.fill(),e.beginPath(),e.arc(0,0,5,0,Math.PI*2),e.fill(),e.restore()};n(256/2,256/2);for(let[r,o]of[[0,0],[256,0],[0,256],[256,256]])n(r,o);let i=new _e(t);return i.colorSpace=ce,i.wrapS=i.wrapT=Nn,i}function zy(s){let t=document.createElement("canvas");t.width=512,t.height=370;let e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,220),i=[["#f3c98b","#d9825b","#4a6a4d","#2c4a3a","#7aa6b8"],["#9fc3d8","#e8d3a8","#5d7b4f","#33502f","#6d93a8"]],r=i[s%i.length];n.addColorStop(0,r[0]),n.addColorStop(1,r[1]),e.fillStyle=n,e.fillRect(0,0,512,370),e.fillStyle="rgba(255,240,200,0.8)",e.beginPath(),e.arc(150+s*180,90,34,0,Math.PI*2),e.fill();for(let[a,l,h]of[[200,r[2],40],[250,r[3],30]]){e.fillStyle=l,e.beginPath(),e.moveTo(0,370);for(let c=0;c<=512;c+=16)e.lineTo(c,a-Math.sin(c/(70+s*20)+s)*h-Math.sin(c/23)*6);e.lineTo(512,370),e.fill()}e.fillStyle=r[4],e.fillRect(0,300,512,70),e.fillStyle="rgba(255,255,255,0.25)";for(let a=0;a<12;a++)e.fillRect(Math.random()*512,305+Math.random()*60,40+Math.random()*60,2);for(let a=0;a<1500;a++)e.fillStyle=`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.03)`,e.fillRect(Math.random()*512,Math.random()*370,6,2);let o=new _e(t);return o.colorSpace=ce,o}function Oy(s,t){let e=document.createElement("canvas");e.width=256,e.height=96;let n=e.getContext("2d");n.fillStyle="#c9a24a",n.fillRect(0,0,256,96),n.strokeStyle="#7a5a1c",n.lineWidth=6,n.strokeRect(3,3,250,90),n.fillStyle="#1b1206",n.textAlign="center",n.font="bold 30px Georgia, serif",n.fillText(s,128,42),n.font="22px Arial, sans-serif",n.fillText(t,128,76);let i=new _e(e);return i.colorSpace=ce,i}function Tu(s,t,e={}){let n=t==="high",{x:i,z:r,floor:o,ceil:a}=Ge,l=a-o,h=Uy(),c=Ny(),u=new _t({color:4859410,roughness:.45,metalness:.05}),d=new _t({color:3020554,roughness:.4,metalness:.05}),f=new _t({color:11569724,metalness:.85,roughness:.35}),g=new _t({color:5904914,roughness:.55,metalness:.05}),x=(xt,q,at,St,Lt,Ht=s)=>{let ge=new Dt(xt,q);return ge.position.set(at,St,Lt),ge.castShadow=n,ge.receiveShadow=!0,Ht.add(ge),ge},y={at:1.9,w:1,h:2.15},p=null,E=qn.degToRad(72),S={open:!1,angle:0},_=[[0,-r,0,2*i,null],[0,r,Math.PI,2*i,null],[-i,0,Math.PI/2,2*r,null],[i,0,-Math.PI/2,2*r,y]];for(let[xt,q,at,St,Lt]of _){let Ht=new re;Ht.position.set(xt,o,q),Ht.rotation.y=at;let ge=Lt?[[-St/2,Lt.at-Lt.w/2],[Lt.at+Lt.w/2,St/2]]:[[-St/2,St/2]];for(let[ee,he]of ge){let De=he-ee,We=(ee+he)/2,ve=c.clone();ve.needsUpdate=!0,ve.repeat.set(De/.6,(l-ns)/.6),ve.offset.set(ee/.6,0);let fn=new Dt(new ie(De,l-ns),new _t({map:ve,roughness:.9}));fn.position.set(We,ns+(l-ns)/2,0),fn.receiveShadow=!0,Ht.add(fn);let m=h.clone();m.needsUpdate=!0,m.repeat.set(De/1.2,1);let v=new Dt(new Ct(De,ns,.03),new _t({map:m,roughness:.5}));v.position.set(We,ns/2,.015),v.receiveShadow=!0,Ht.add(v);for(let[k,H,I]of[[.06,.12,.045],[ns,.05,.06]]){let ct=new Dt(new Ct(De,H,I),u);ct.position.set(We,k,I/2),Ht.add(ct)}}let de=new Dt(new Ct(St,.18,.08),u);if(de.position.set(0,l-.09,.04),Ht.add(de),Lt){let ee=l-Lt.h,he=c.clone();he.needsUpdate=!0,he.repeat.set(Lt.w/.6,ee/.6);let De=new Dt(new ie(Lt.w,ee),new _t({map:he,roughness:.9}));De.position.set(Lt.at,Lt.h+ee/2,0),Ht.add(De);let We=[[Lt.at-Lt.w/2-.04,Lt.h/2,.08,Lt.h+.08],[Lt.at+Lt.w/2+.04,Lt.h/2,.08,Lt.h+.08],[Lt.at,Lt.h+.04,Lt.w+.16,.08]];for(let[Et,Vt,jt,Jt]of We)x(new Ct(jt,Jt,.1),d,Et,Vt,.03,Ht);for(let Et of[-1,1])x(new Ct(.02,Lt.h,.2),d,Lt.at+Et*Lt.w/2,Lt.h/2,-.1,Ht);x(new Ct(Lt.w,.02,.2),d,Lt.at,Lt.h,-.1,Ht);let ve=new re;ve.position.set(Lt.at+Lt.w/2-.02,0,.02),ve.rotation.y=qn.degToRad(72),Ht.add(ve),p=ve;let fn=new _t({color:5910294,roughness:.45});x(new Ct(Lt.w-.04,Lt.h-.02,.045),fn,-(Lt.w-.04)/2,Lt.h/2,0,ve);for(let Et of[.55,1.5])for(let Vt of[-1,1])x(new Ct(Lt.w-.26,.7,.012),d,-(Lt.w-.04)/2,Et,Vt*.026,ve);let m=x(new Fe(.03,16,12),f,-(Lt.w-.04)+.08,1,.05,ve);m.castShadow=!1;let v=new re;v.position.set(Lt.at,0,-1.2),Ht.add(v);let k=new _t({color:7035461,roughness:.9,side:Ve});x(new Ct(2.4,2.6,2.2),k,0,1.3,-.05,v);let H=x(new ie(2.4,2.2),new _t({color:3877404,roughness:.8}),0,.005,-.05,v);H.rotation.x=-Math.PI/2;let I=new On(16767136,n?2.2:1.4,4,1.6);I.position.set(0,2.2,-.4),v.add(I);let ct=x(new Fe(.05,12,8),new we({color:16773328}),0,2.45,-.4,v);ct.castShadow=!1}s.add(Ht)}let z=new _t({color:1905420,roughness:.9}),P=new Dt(new ie(2*i,2*r),z);P.rotation.x=Math.PI/2,P.position.y=a,P.layers.set(2),s.add(P);let U=new _t({color:3809039,roughness:.6});for(let xt=-i+1.25;xt<i-.1;xt+=1.25){let q=new Dt(new Ct(.16,.18,2*r),U);q.position.set(xt,a-.09,0),q.layers.set(2),s.add(q)}let N=new _t({color:16769712,emissive:16760944,emissiveIntensity:1.2,roughness:.6}),w=o+2.35,M=[[-2.6,-r,0],[2.6,-r,0],[-2.8,r,Math.PI],[2.8,r,Math.PI],[-i,0,Math.PI/2],[i,-1.5,-Math.PI/2]];s.add(new Po(16770760,n?.22:.4));for(let[xt,q,at]of M){let St=new re;St.position.set(xt,w,q),St.rotation.y=at;let Lt=new Dt(new fe(.05,.05,.02,20),f);Lt.rotation.x=Math.PI/2,Lt.position.z=.01,St.add(Lt);let Ht=new Dt(new fe(.008,.008,.14,8),f);Ht.rotation.x=Math.PI/2,Ht.position.z=.08,St.add(Ht);let ge=new Dt(new fe(.05,.085,.13,24,1,!0),N);if(ge.position.set(0,.05,.16),St.add(ge),s.add(St),n){let de=new On(16758886,5,4.5,1.5);de.position.set(xt+Math.sin(at)*.3,w+.05,q+Math.cos(at)*.3),s.add(de)}}let T={x:-2.6,y:o+1.5,w:1.6,h:1.1},G=x(new ie(T.w,T.h),new _t({map:Mu(),roughness:.85}),T.x,T.y,-r+.045);G.castShadow=!1;for(let[xt,q,at,St]of[[T.x,T.y+T.h/2+.03,T.w+.12,.06],[T.x,T.y-T.h/2-.03,T.w+.12,.06],[T.x-T.w/2-.03,T.y,.06,T.h],[T.x+T.w/2+.03,T.y,.06,T.h]])x(new Ct(at,St,.06),d,xt,q,-r+.04);x(new Ct(T.w,T.h,.02),d,T.x,T.y,-r+.02);let W={x:2.6,base:o},$=.21,V=je.length*$+.2;x(new Ct(V,1.85,.03),d,W.x,o+.15+.925,-r+.05),x(new Ct(V+.05,.06,.16),u,W.x,o+.12,-r+.11),x(new Ct(V+.05,.05,.12),u,W.x,o+1.35,-r+.1);let O=[];je.forEach((xt,q)=>{let at=W.x+(q-(je.length-1)/2)*$,St=new re;St.position.set(at,o+.16+xt.len,-r+.12),St.rotation.x=Math.PI,St.add(qs(xt,n)),s.add(St);let Lt=new Dt(new ie(.18,.068),new _t({map:Oy(String(q+1),xt.category),roughness:.4,metalness:.3}));Lt.position.set(at,o+.3,-r+.07),s.add(Lt),O.push({group:St,baseZ:-r+.12,spec:xt})});let K=new Dt(new Bs(.035,.06,32),new we({color:16765503,transparent:!0,opacity:.9}));K.rotation.x=-Math.PI/2,s.add(K);let X=xt=>{for(let q of O){let at=q.spec.id===xt;q.group.position.z=q.baseZ+(at?.12:0),at&&K.position.set(q.group.position.x,o+.005,q.group.position.z)}},rt={x:-.78,y:o+1.42,w:1.5};x(new Ct(rt.w,.04,.26),d,rt.x,rt.y,-r+.13);for(let xt of[-1,1]){let q=x(new Ct(.03,.16,.2),d,rt.x+xt*(rt.w/2-.03),rt.y-.1,-r+.11);q.castShadow=!1}let vt=(()=>{let xt=document.createElement("canvas");xt.width=1024,xt.height=128;let q=xt.getContext("2d");q.fillStyle="#123524",q.fillRect(0,0,1024,128),q.strokeStyle="#c9a24a",q.lineWidth=6,q.strokeRect(8,8,1008,112),q.fillStyle="#f2d48a",q.font="bold 60px Georgia, serif",q.textAlign="center",q.textBaseline="middle",q.fillText("NAJLEP\u0160\xCD HR\xC1\u010CI",512,68);let at=new _e(xt);return at.colorSpace=ce,at})();x(new ie(.9,.11),new _t({map:vt,roughness:.6}),rt.x,rt.y+.62,-r+.035).castShadow=!1;let yt=[new _t({color:15777856,metalness:.55,roughness:.28,emissive:3811328,emissiveIntensity:.6}),new _t({color:14672872,metalness:.55,roughness:.25,emissive:2763824,emissiveIntensity:.6}),new _t({color:13140042,metalness:.55,roughness:.3,emissive:3020294,emissiveIntensity:.6})],zt=xt=>[[0,0],[.07,0],[.07,.025],[.035,.035],[.016,.05],[.014,.12],[.022,.135],[.06,.16],[.085,.22],[.095,.29],[.09,.3],[.08,.235],[.055,.17],[0,.155]].map(([q,at])=>new wt(q*xt,at*xt)),Tt=[];[[1,-.5,.92],[0,0,1.12],[2,.5,.82]].forEach(([xt,q,at])=>{let St=rt.x+q*(rt.w*.62),Lt=-r+.14,Ht=new re;Ht.position.set(St,rt.y+.02,Lt);let ge=new Dt(new Xi(zt(at),40),yt[xt]);ge.castShadow=!0,Ht.add(ge);for(let We of[-1,1]){let ve=new Dt(new $n(.035*at,.006*at,8,20,Math.PI),yt[xt]);ve.position.set(We*.088*at,.24*at,0),ve.rotation.z=We>0?-Math.PI/2:Math.PI/2,Ht.add(ve)}let de=new Dt(new Ct(.17*at,.05,.17*at),d);de.position.y=-0,Ht.position.y+=.05,de.position.y=-.025,Ht.add(de),s.add(Ht);let ee=document.createElement("canvas");ee.width=512,ee.height=160;let he=new _e(ee);he.colorSpace=ce,he.anisotropy=8;let De=new Dt(new ie(.4,.125),new _t({map:he,roughness:.45,metalness:.2}));De.position.set(St,rt.y-.11,-r+.03),De.castShadow=!1,s.add(De),Tt[xt]={c:ee,tex:he}});let Y=new On(16769712,n?1.6:1.2,2.2,1.6);Y.position.set(rt.x,rt.y+.75,-r+.55),s.add(Y);let it={x:.72,y:o+1.68,w:.95,h:1},At=document.createElement("canvas");At.width=760,At.height=800;let ft=new _e(At);ft.colorSpace=ce,ft.anisotropy=8,x(new ie(it.w,it.h),new _t({map:ft,roughness:.85}),it.x,it.y,-r+.045).castShadow=!1,x(new Ct(it.w+.08,it.h+.08,.03),d,it.x,it.y,-r+.02);let Ot=xt=>{let q=Math.max(0,Math.round(xt||0));return`${Math.floor(q/60)}:${String(q%60).padStart(2,"0")}`},Gt=(xt,q,at)=>{let St=String(q||"");for(;St.length>1&&xt.measureText(St).width>at;)St=St.slice(0,-1);return St===String(q||"")?St:St.slice(0,-1)+"\u2026"},Ut=xt=>{let q=xt||[],at=["#e8b830","#c9cdd3","#b8733a"];for(let Ht=0;Ht<3;Ht++){let{c:ge,tex:de}=Tt[Ht],ee=ge.getContext("2d"),he=q[Ht];ee.fillStyle="#20150c",ee.fillRect(0,0,512,160),ee.strokeStyle=at[Ht],ee.lineWidth=8,ee.strokeRect(6,6,500,148),ee.textAlign="center",ee.fillStyle=at[Ht],ee.font="bold 54px Georgia, serif",ee.fillText(he?Gt(ee,`${Ht+1}. ${he.user.name}`,480):`${Ht+1}. miesto`,256,66),ee.fillStyle="#f4ecd8",ee.font="bold 42px Arial, Helvetica, sans-serif",ee.fillText(he?`${he.points} b.  za ${Ot(he.seconds)}`:"vo\u013En\xE9",256,128),de.needsUpdate=!0}let St=At.getContext("2d"),Lt=At.width;St.fillStyle="#a5754a",St.fillRect(0,0,Lt,At.height),St.fillStyle="#fbf7ec",St.fillRect(30,30,Lt-60,At.height-60),St.fillStyle="#c0392b",St.beginPath(),St.arc(Lt/2,52,12,0,Math.PI*2),St.fill(),St.fillStyle="#123524",St.textAlign="center",St.font="bold 46px Georgia, serif",St.fillText("Rebr\xED\u010Dek 4. a\u017E 10.",Lt/2,120),St.fillStyle="#c9a24a",St.fillRect(60,142,Lt-120,4);for(let Ht=3;Ht<10;Ht++){let ge=q[Ht],de=210+(Ht-3)*80;St.textAlign="left",St.fillStyle="#123524",St.font="bold 36px Arial, Helvetica, sans-serif",St.fillText(`${Ht+1}.`,64,de),St.fillStyle=ge?"#222":"#999",St.font="34px Arial, Helvetica, sans-serif",St.fillText(ge?Gt(St,ge.user.name,330):"...",130,de),St.textAlign="right",St.fillText(ge?`${ge.points} b.  ${Ot(ge.seconds)}`:"",Lt-64,de),St.fillStyle="rgba(201,162,74,0.35)",St.fillRect(64,de+22,Lt-128,2)}ft.needsUpdate=!0};Ut([]);let te={y:o+1.62,w:1.5,h:.84},D={z:-2,y:te.y,w:1.55,h:.98},tt=document.createElement("canvas");tt.width=1280,tt.height=810;let A=new _e(tt);A.colorSpace=ce,A.anisotropy=8,x(new Ct(.05,D.h+.1,D.w+.1),d,-i+.03,D.y,D.z);let bt=x(new ie(D.w,D.h),new _t({map:A,roughness:.85}),-i+.058,D.y,D.z);bt.rotation.y=Math.PI/2,bt.castShadow=!1;let lt=xt=>{let q=tt.getContext("2d"),at=1280,St=810;q.fillStyle="#a5754a",q.fillRect(0,0,at,St);for(let Ht=0;Ht<4e3;Ht++)q.fillStyle=`rgba(${60+Math.random()*80},${35+Math.random()*40},${15+Math.random()*20},0.25)`,q.fillRect(Math.random()*at,Math.random()*St,3,3);q.fillStyle="#123524",q.fillRect(380,18,520,92),q.fillStyle="#f2d48a",q.font="bold 56px Georgia, serif",q.textAlign="center",q.fillText("LIGA",640,82),q.fillStyle="#fbf7ec",q.font="26px Arial, sans-serif",q.fillText(xt&&xt.season?`${xt.season.name}  \xB7  do konca ${xt.season.daysLeft} dn\xED`:"Liga: prihl\xE1s sa a hraj ligov\xE9 partie",640,145);let Lt=[[30,170],[345,170],[660,170],[975,170]];for(let Ht=1;Ht<=4;Ht++){let[ge,de]=Lt[Ht-1],ee=275,he=520;q.save(),q.translate(ge+ee/2,de+he/2),q.rotate((Ht%2?-1:1)*.01),q.fillStyle="rgba(0,0,0,0.35)",q.fillRect(-ee/2+6,-he/2+8,ee,he),q.fillStyle="#fbf7ec",q.fillRect(-ee/2,-he/2,ee,he),q.fillStyle=["#c9a24a","#9aa0a8","#b8733a","#2a9d8f"][Ht-1],q.beginPath(),q.arc(0,-he/2+18,11,0,Math.PI*2),q.fill(),q.fillStyle="#123524",q.font="bold 40px Georgia, serif",q.textAlign="center",q.fillText(`${Ht}. liga`,0,-he/2+78),q.fillStyle="#c9a24a",q.fillRect(-ee/2+20,-he/2+96,ee-40,3);let De=xt&&xt.leagues&&xt.leagues[Ht]||[];q.textAlign="left";for(let We=0;We<5;We++){let ve=De[We],fn=-he/2+150+We*72;q.fillStyle=ve?"#222":"#aaa",q.font="bold 26px Arial, sans-serif";let m=ve?`${ve.rank}. ${ve.user.name}`:`${We+1}. ...`;for(;m.length>2&&q.measureText(m).width>ee-40;)m=m.slice(0,-1);q.fillText(m,-ee/2+20,fn),q.font="22px Arial, sans-serif",q.fillStyle="#555",q.fillText(ve?`${ve.points} b.  V ${ve.wins} / P ${ve.losses}`:"",-ee/2+20,fn+28)}q.restore()}q.fillStyle="#123524",q.fillRect(30,718,at-60,66),q.fillStyle="#FACC15",q.font="bold 30px Arial, sans-serif",q.textAlign="center",q.fillText(xt&&xt.me?`Ty: ${xt.me.rank}. miesto v ${xt.me.league}. lige, ${xt.me.points} bodov`:"Liga: v menu (Esc) tla\u010Didlo Liga",at/2,762),A.needsUpdate=!0};lt(null);let ut=document.createElement("canvas");ut.width=1024,ut.height=574;let gt=new _e(ut);gt.colorSpace=ce,gt.anisotropy=8,x(new Ct(.05,te.h+.12,te.w+.12),d,-i+.03,te.y,0);let It=x(new ie(te.w,te.h),new _t({map:gt,roughness:.7,emissive:16777215,emissiveMap:gt,emissiveIntensity:.12}),-i+.064,te.y,0);It.rotation.y=Math.PI/2,It.castShadow=!1;let Bt=(xt,q)=>{let at=ut.getContext("2d"),St=ut.width,Lt=ut.height;at.fillStyle="#123524",at.fillRect(0,0,St,Lt),at.strokeStyle="#c9a24a",at.lineWidth=8,at.strokeRect(14,14,St-28,Lt-28),at.fillStyle="#f2d48a",at.textAlign="center",at.font="bold 62px Georgia, serif",at.fillText("MY SNOOKER",St/2,92),at.font="34px Georgia, serif",at.fillStyle="#e8e2cf",at.fillText(q&&q.mode||"Tr\xE9ning",St/2,140);let Ht=q&&q.match,ge=q&&q.rows?q.rows:Ht?[[Ht.names[0]+(Ht.turn===0?"  \u25CF":""),Ht.scores[0]],[Ht.names[1]+(Ht.turn===1?"  \u25CF":""),Ht.scores[1]],["S\xE9ria",Ht.brk],["Hr\xE1 sa na",Ht.on],["Zost\xE1va na stole",Ht.left]]:[["\xDAdery",xt.shots],["Spadnut\xE9 gule",xt.potted],["Body",xt.points],["S\xE9ria",xt.run],["Najlep\u0161ia s\xE9ria",xt.best]];at.font="40px Arial, Helvetica, sans-serif",ge.forEach(([de,ee],he)=>{let De=210+he*62;at.textAlign="left",at.fillStyle="#e8e2cf",at.fillText(de,90,De),at.textAlign="right",at.fillStyle="#ffffff",at.font="bold 44px Arial, Helvetica, sans-serif",at.fillText(String(ee),St-90,De),at.font="40px Arial, Helvetica, sans-serif",at.fillStyle="rgba(201,162,74,0.35)",at.fillRect(90,De+16,St-180,2)}),q&&(at.textAlign="center",at.font="30px Arial, Helvetica, sans-serif",at.fillStyle="#f2d48a",at.fillText(`${q.cue}   |   Krieda: ${q.chalk>0?q.chalk+" \xFAdery":"\u017Eiadna (F3)"}`,St/2,Lt-40)),gt.needsUpdate=!0};Bt({shots:0,potted:0,points:0,run:0,best:0},null),x(new Ct(.45,.8,1.7),d,-i+.25,o+.4,0),x(new Ct(.47,.03,1.74),u,-i+.25,o+.815,0);for(let xt of[-.42,.42])x(new Ct(.012,.5,.75),u,-i+.48,o+.42,xt),x(new Fe(.015,10,8),f,-i+.49,o+.55,xt*.2);let R=-i+1.1,b=r-1.1;x(new fe(.32,.32,.04,32),d,R,o+1.05,b);let J=o+1.07,ot=new re;ot.position.set(R+.05,J,b-.08),ot.rotation.y=-Math.PI/4,s.add(ot),x(new Ct(.078,.009,.158),new _t({color:1381914,roughness:.35,metalness:.6}),0,.0045,0,ot);let mt=document.createElement("canvas");mt.width=360,mt.height=740;let et=new _e(mt);et.colorSpace=ce,et.anisotropy=8;let Yt=x(new ie(.07,.146),new we({map:et}),0,.0092,0,ot);Yt.rotation.x=-Math.PI/2,Yt.castShadow=!1;let L=xt=>{let q=mt.getContext("2d"),at=360,St=q.createLinearGradient(0,0,0,740);St.addColorStop(0,"#1d2b45"),St.addColorStop(1,"#0c1220"),q.fillStyle=St,q.fillRect(0,0,at,740),q.fillStyle="#e8ecf3",q.font="22px Arial, sans-serif",q.textAlign="left",q.fillText("11:30",24,40),q.textAlign="right",q.fillText("5G  86 %",at-24,40),q.textAlign="center",q.fillStyle="#FACC15",q.beginPath(),q.arc(at/2,170,62,0,Math.PI*2),q.fill(),q.fillStyle="#111214",q.font="bold 64px Arial, sans-serif",q.fillText(xt&&xt.name?xt.name.trim().charAt(0).toUpperCase():"?",at/2,193),q.fillStyle="#ffffff",q.font="bold 40px Arial, sans-serif",q.fillText("M\xF4j \xFA\u010Det",at/2,290),q.fillStyle="#b9c2d3",q.font="28px Arial, sans-serif",q.fillText(xt?String(xt.name).slice(0,20):"Neprihl\xE1sen\xFD",at/2,334),["Profil","Prihl\xE1senie a heslo","S\xFAhlasy","Nastavenia \xFA\u010Dtu"].forEach((Ht,ge)=>{let de=400+ge*66;q.fillStyle="#ffffff14",q.fillRect(28,de,at-56,54),q.fillStyle="#e8ecf3",q.textAlign="left",q.font="26px Arial, sans-serif",q.fillText(Ht,48,de+36),q.textAlign="right",q.fillStyle="#FACC15",q.fillText("\u203A",at-44,de+37)}),q.textAlign="center",q.fillStyle="#FACC15",q.font="bold 26px Arial, sans-serif",q.fillText("\u0164ukni a otvor",at/2,700),et.needsUpdate=!0};L(e.user||null);let st=new _t({color:15267071,transparent:!0,opacity:.22,roughness:.05,metalness:.1,side:Xe,depthWrite:!1}),F=new _t({color:10474751,transparent:!0,opacity:.45,roughness:.05,metalness:.05,depthWrite:!1});for(let[xt,q]of[[.2,.05],[.11,.17]]){let at=x(new fe(.036,.03,.12,28,1,!0),st,R+xt,J+.06,b+q);at.castShadow=!1;let St=x(new fe(.03,.03,.008,28),st,R+xt,J+.004,b+q);St.castShadow=!1;let Lt=x(new fe(.033,.029,.08,28),F,R+xt,J+.048,b+q);Lt.castShadow=!1,Lt.renderOrder=1,at.renderOrder=2}x(new fe(.03,.03,1.03,12),f,R,o+.53,b),x(new fe(.22,.25,.03,24),f,R,o+.015,b);for(let xt of[.6,2.3]){let q=R+Math.cos(xt)*.55,at=b-Math.sin(xt)*.55;x(new fe(.18,.18,.08,24),g,q,o+.76,at),x(new fe(.022,.022,.72,10),f,q,o+.36,at),x(new $n(.15,.01,8,24),f,q,o+.3,at).rotation.x=Math.PI/2,x(new fe(.17,.2,.02,20),f,q,o+.01,at)}let j=(xt,q,at)=>{let St=new re;St.position.set(xt,o,q),St.rotation.y=at,x(new Ct(.8,.42,.8),g,0,.21,0,St),x(new Ct(.8,.5,.18),g,0,.66,-.31,St);for(let Lt of[-1,1])x(new Ct(.16,.24,.8),g,Lt*.4,.54,0,St);x(new Ct(.56,.08,.6),new _t({color:7219740,roughness:.6}),0,.46,.04,St),s.add(St)};j(-1,r-.7,Math.PI),j(1,r-.7,Math.PI);let Q={x:0,z:r-1.45,top:o+.45};x(new Ct(1.2,.04,.62),d,Q.x,Q.top-.02,Q.z),x(new Ct(1.1,.06,.52),u,Q.x,Q.top-.07,Q.z);for(let xt of[-1,1])for(let q of[-1,1])x(new Ct(.05,Q.top-o-.04,.05),d,Q.x+xt*.54,o+(Q.top-o-.04)/2,Q.z+q*.25);let ht=Eu(e.news,e.site),Mt={x:Q.x+.12,z:Q.z+.02,w:.62,h:.44},Rt=new Dt(new ie(Mt.w,Mt.h),new _t({map:ht.texture,roughness:.92}));Rt.rotation.order="YXZ",Rt.rotation.set(-Math.PI/2,.12,0),Rt.position.set(Mt.x,Q.top+.002,Mt.z),Rt.receiveShadow=!0,s.add(Rt);let Kt=wu(e.rss),Wt={x:Q.x-.36,z:Q.z-.02,w:.3,h:.41},ne=new Dt(new ie(Wt.w,Wt.h),new _t({map:Kt.texture,roughness:.35,metalness:.05}));ne.rotation.order="YXZ",ne.rotation.set(-Math.PI/2,-.18,0),ne.position.set(Wt.x,Q.top+.003,Wt.z),ne.receiveShadow=!0,s.add(ne);for(let[xt,q]of[[-2.8,0],[2.8,1]]){let at=x(new ie(.86,.62),new _t({map:zy(q),roughness:.7}),xt,o+1.75,r-.046);at.rotation.y=Math.PI,at.castShadow=!1,x(new Ct(1,.76,.04),new _t({color:9071146,metalness:.6,roughness:.4}),xt,o+1.75,r-.02)}let B=new re;B.position.set(i-.02,o+2,.35),B.rotation.y=-Math.PI/2,s.add(B);{let q=document.createElement("canvas");q.width=q.height=512;let at=q.getContext("2d");at.fillStyle="#f4eedc",at.fillRect(0,0,512,512),at.translate(256,256),at.strokeStyle="#2a2218";for(let de=0;de<60;de++){let ee=de/60*Math.PI*2,he=de%5===0;at.lineWidth=he?9:3,at.beginPath(),at.moveTo(Math.sin(ee)*(he?200:214),-Math.cos(ee)*(he?200:214)),at.lineTo(Math.sin(ee)*236,-Math.cos(ee)*236),at.stroke()}at.fillStyle="#2a2218",at.font="bold 56px Georgia, serif",at.textAlign="center",at.textBaseline="middle";for(let de=1;de<=12;de++){let ee=de/12*Math.PI*2;at.fillText(String(de),Math.sin(ee)*160,-Math.cos(ee)*160+3)}at.font="22px Georgia, serif",at.fillText("MY SNOOKER",0,78);let St=new _e(q);St.colorSpace=ce,St.anisotropy=8;let Lt=new Dt(new Tn(.2,64),new _t({map:St,roughness:.6}));Lt.position.z=.012,B.add(Lt);let Ht=new Dt(new $n(.2+.012,.018,12,64),d);Ht.position.z=.014,B.add(Ht);let ge=new Dt(new fe(.2+.02,.2+.02,.02,48),d);ge.rotation.x=Math.PI/2,B.add(ge)}let kt=new _t({color:1709328,roughness:.5,metalness:.3}),nt=(xt,q,at,St)=>{let Lt=new re;Lt.position.z=at;let Ht=new Dt(new Ct(q,xt,.004),St);return Ht.position.y=xt/2-xt*.15,Lt.add(Ht),B.add(Lt),Lt},pt=nt(.11,.012,.018,kt),$t=nt(.16,.008,.022,kt),qt=nt(.17,.003,.026,new _t({color:11735583,roughness:.5})),ae=new Dt(new fe(.009,.009,.012,16),f);ae.rotation.x=Math.PI/2,ae.position.z=.028,B.add(ae);let le=11*3600+30*60,Z=(xt,q=!1)=>{let at=q?xt:le+xt,St=at%60,Lt=at/60%60,Ht=at/3600%12;qt.rotation.z=-(Math.floor(St)/60)*Math.PI*2,$t.rotation.z=-(Lt/60)*Math.PI*2,pt.rotation.z=-(Ht/12)*Math.PI*2};Z(0);let Nt=i-.5,Pt=-r+.5;x(new fe(.2,.15,.4,20),new _t({color:8010530,roughness:.7}),Nt,o+.2,Pt);let dn=new _t({color:3107631,roughness:.7});for(let xt=0;xt<14;xt++){let q=xt/14*Math.PI*2,at=.08+xt%3*.06,St=x(new Fe(.11+xt%2*.04,10,8),dn,Nt+Math.cos(q)*at,o+.55+xt%4*.18,Pt+Math.sin(q)*at);St.scale.set(1,1.6,.5),St.rotation.y=q}return{board:{pos:new C(T.x,T.y,-r+1.62),look:new C(T.x,T.y,-r)},rack:{pos:new C(W.x,o+1.15,-r+3.3),look:new C(W.x,o+.6,-r)},score:{pos:new C(-i+1.55,te.y,0),look:new C(-i,te.y,0)},bar:{pos:new C(R-.4,o+1.5,b+.38),look:new C(R+.62,o+.72,b-.6)},phone:Yt,setPhone:L,leagueBoard:{pos:new C(-i+1.55,D.y,D.z),look:new C(-i,D.y,D.z)},setLeague:lt,trophies:{pos:new C(-.17,o+1.62,-r+2.05),look:new C(-.17,o+1.6,-r)},chair:{pos:new C(1,o+1.12,r-.8),look:new C(-.2,o+.62,.3)},news:{pos:new C(Mt.x+.11,Q.top+.6,Mt.z+.27),look:new C(Mt.x+.1,Q.top,Mt.z-.01)},newsItems:ht.items,magazine:{pos:new C(Wt.x+.02,Q.top+.5,Wt.z+.2),look:new C(Wt.x,Q.top,Wt.z-.01)},rssItems:Kt.items,selectCue:X,updateScore:Bt,setClock:Z,setTrophies:Ut,toggleDoor(){return S.open=!S.open,S.open},update(xt){if(!p)return!1;let q=S.open?E:0,at=S.angle,St=xt*1.4;return S.angle=at+Math.max(-St,Math.min(St,q-at)),p.rotation.y=S.angle,at>0&&S.angle===0}}}function vc(s,t=.15){return s.x=Math.max(-Ge.x+t,Math.min(Ge.x-t,s.x)),s.z=Math.max(-Ge.z+t,Math.min(Ge.z-t,s.z)),s.y=Math.max(Ge.floor+.1,Math.min(Ge.ceil-.25,s.y)),s}var Mc=.062,Fy=.052,vn=.05,bc=.12,By=.037;function Au(s,t="#1d6b34"){let n=Math.round(2048*(1.778+2*vn)/(3.569+2*vn)),i=document.createElement("canvas");i.width=2048,i.height=n;let r=i.getContext("2d");r.fillStyle=t,r.fillRect(0,0,2048,n);let o=r.getImageData(0,0,2048,n);for(let d=0;d<o.data.length;d+=4){let f=(Math.random()-.5)*10;o.data[d]+=f,o.data[d+1]+=f*1.4,o.data[d+2]+=f}r.putImageData(o,0,0);let a=r.createRadialGradient(2048/2,n/2,n*.1,2048/2,n/2,2048*.6);a.addColorStop(0,"rgba(255,255,255,0.06)"),a.addColorStop(1,"rgba(0,0,0,0.18)"),r.fillStyle=a,r.fillRect(0,0,2048,n);let l=2048/(3.569+2*vn),h=d=>(d+3.569/2+vn)*l,c=d=>(d+1.778/2+vn)*l;r.strokeStyle="rgba(255,255,255,0.75)",r.lineWidth=Math.max(2,l*.003),r.beginPath(),r.moveTo(h(Ye),c(-1.778/2)),r.lineTo(h(Ye),c(1.778/2)),r.stroke(),r.beginPath(),r.arc(h(Ye),c(0),wi*l,Math.PI/2,3*Math.PI/2),r.stroke(),r.fillStyle="rgba(255,255,255,0.8)";for(let d of Object.keys(Rn))r.beginPath(),r.arc(h(Rn[d].x),c(Rn[d].z),l*.005,0,Math.PI*2),r.fill();let u=new _e(i);return u.colorSpace=ce,u.anisotropy=s,u}function Hy(){let s=document.createElement("canvas");s.width=512,s.height=64;let t=s.getContext("2d");t.fillStyle="#5a2e14",t.fillRect(0,0,512,64);for(let n=0;n<70;n++){t.strokeStyle=`rgba(${30+Math.random()*40},${12+Math.random()*15},4,${.15+Math.random()*.25})`,t.lineWidth=1+Math.random()*2,t.beginPath();let i=Math.random()*64;t.moveTo(0,i);for(let r=0;r<=512;r+=32)t.lineTo(r,i+Math.sin(r/60+n)*3);t.stroke()}let e=new _e(s);return e.colorSpace=ce,e.wrapS=e.wrapT=Nn,e.repeat.set(6,1),e}function Vy(){let t=document.createElement("canvas");t.width=t.height=1024;let e=t.getContext("2d"),n=25,i=1024/n,r=7,o=()=>(r=r*16807%2147483647)/2147483647;for(let l=0;l<n;l++){let h=-o()*1024*.4;for(;h<1024;){let c=1024*(.3+o()*.25),u=70+o()*40;e.fillStyle=`rgb(${u+40},${u*.62+12},${u*.36})`,e.fillRect(h,l*i,c,i);for(let d=0;d<9;d++){e.strokeStyle=`rgba(${40+o()*30},${20+o()*12},6,${.12+o()*.18})`,e.lineWidth=.6+o()*1.6,e.beginPath();let f=l*i+o()*i;e.moveTo(h,f);for(let g=0;g<=8;g++)e.lineTo(h+c*g/8,f+Math.sin(g*.9+d)*i*.12);e.stroke()}e.fillStyle="rgba(15,8,3,0.85)",e.fillRect(h+c-1.5,l*i,1.5,i),h+=c}e.fillStyle="rgba(15,8,3,0.9)",e.fillRect(0,l*i,1024,1.5)}let a=new _e(t);return a.colorSpace=ce,a.wrapS=a.wrapT=Nn,a}function Ru(s){let t=new re,e=s.capabilities.getMaxAnisotropy(),n=new Dt(new ie(3.569+2*vn,1.778+2*vn),new _t({map:Au(e),roughness:.92,metalness:0}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,n.name="cloth",t.add(n);let i=3.569/2,r=1.778/2,o=By+.012,a=i+vn+bc,l=r+vn+bc,h=new _t({color:1531951,roughness:.88,side:Xe}),c=(D,tt,A,bt)=>({x:D+A*vn,z:tt+bt*vn}),u=[];for(let D of[-1,1])for(let tt of[-1,1]){let A={x:tt*(i-Mc),z:D*r},bt={x:tt*Fy,z:D*r};u.push({long:!0,a:A,b:bt,ab:c(A.x,A.z,tt*1,D*1),bb:c(bt.x,bt.z,-tt*.18,D*1)})}for(let D of[-1,1]){let tt={x:D*i,z:-r+Mc},A={x:D*i,z:r-Mc};u.push({long:!1,a:tt,b:A,ab:c(tt.x,tt.z,D*1,-1),bb:c(A.x,A.z,D*1,1)})}let d=.016,f=[[.012,0],[.006,.016],[.001,.029],[0,.034],[.003,.0395],[.01,.0435],[.024,.0465],[.045,.048],[.075,.048]];for(let D of u){let tt=(F,j,Q)=>{let ht=Math.hypot(j.x-F.x,j.z-F.z)||1;return{x:F.x+(j.x-F.x)/ht*Q,z:F.z+(j.z-F.z)/ht*Q}},A=tt(D.a,D.ab,d),bt=tt(D.a,D.b,d),lt=tt(D.b,D.a,d),ut=tt(D.b,D.bb,d),gt=[],It=(F,j,Q,ht)=>{for(let Mt=1;Mt<=ht;Mt++){let Rt=Mt/ht,Kt=1-Rt;gt.push({x:Kt*Kt*F.x+2*Kt*Rt*j.x+Rt*Rt*Q.x,z:Kt*Kt*F.z+2*Kt*Rt*j.z+Rt*Rt*Q.z})}};gt.push({...D.ab},{...tt(D.ab,A,Math.hypot(A.x-D.ab.x,A.z-D.ab.z)*.5)},{...A}),It(A,D.a,bt,10);let Bt=24;for(let F=1;F<Bt;F++)gt.push({x:bt.x+(lt.x-bt.x)*F/Bt,z:bt.z+(lt.z-bt.z)*F/Bt});gt.push({...lt}),It(lt,D.b,ut,10),gt.push({...tt(ut,D.bb,Math.hypot(D.bb.x-ut.x,D.bb.z-ut.z)*.5)},{...D.bb});let R=D.b.x-D.a.x,b=D.b.z-D.a.z,J={x:(D.a.x+D.b.x)/2,z:(D.a.z+D.b.z)/2},ot=-b*J.x+R*J.z>0?1:-1,mt=[];for(let F=0;F<gt.length;F++){let j=gt[Math.max(0,F-1)],Q=gt[Math.min(gt.length-1,F+1)],ht=Q.x-j.x,Mt=Q.z-j.z,Rt=Math.hypot(ht,Mt)||1;ht/=Rt,Mt/=Rt;let Kt=-Mt*ot,Wt=ht*ot;for(let[ne,B]of f)mt.push(gt[F].x+Kt*ne,B,gt[F].z+Wt*ne)}let et=f.length,Yt=[];for(let F=0;F<gt.length-1;F++)for(let j=0;j<et-1;j++){let Q=F*et+j,ht=(F+1)*et+j;ot>0?Yt.push(Q,ht,Q+1,ht,ht+1,Q+1):Yt.push(Q,Q+1,ht,ht,Q+1,ht+1)}let L=new ze;L.setAttribute("position",new xe(mt,3)),L.setIndex(Yt),L.computeVertexNormals();let st=new Dt(L,h);st.castShadow=!0,st.receiveShadow=!0,t.add(st)}let g=Qi.map(D=>({x:D.x,z:D.z,r:D.corner?.088:.078,corner:D.corner})),x=i+vn,y=r+vn,p=[],E=(D,tt,A,bt)=>{let lt=[];for(let ut=0;ut<=bt;ut++){let gt=tt+(A-tt)*ut/bt;lt.push({x:D.x+Math.cos(gt)*D.r,z:D.z+Math.sin(gt)*D.r})}return lt},S=[],_=D=>{for(;D<0;)D+=Math.PI*2;return D},z=g.find(D=>D.corner&&D.x>0&&D.z>0),P=g.find(D=>D.corner&&D.x<0&&D.z>0),U=g.find(D=>D.corner&&D.x<0&&D.z<0),N=g.find(D=>D.corner&&D.x>0&&D.z<0),w=g.find(D=>!D.corner&&D.z>0),M=g.find(D=>!D.corner&&D.z<0),T=(D,tt,A)=>{let bt=A*y-D.z,lt=D.x-tt*Math.sqrt(Math.max(0,D.r*D.r-bt*bt)),ut=tt*x-D.x,gt=D.z-A*Math.sqrt(Math.max(0,D.r*D.r-ut*ut)),It=Math.atan2(A*y-D.z,lt-D.x),Bt=Math.atan2(gt-D.z,tt*x-D.x);return{aZ:It,aX:Bt}},G=(D,tt)=>{let A=tt*y-D.z,bt=Math.sqrt(Math.max(0,D.r*D.r-A*A));return{aRight:Math.atan2(A,bt),aLeft:Math.atan2(A,-bt)}},W=(D,tt,A,bt)=>{let lt=tt,ut=A;if(bt)for(;ut<lt;)ut+=Math.PI*2;else for(;ut>lt;)ut-=Math.PI*2;let gt=E(D,lt,ut,24);p.push(...gt),S.push(gt)};{let D=[];for(let[tt,A,bt]of[[z,1,1],[P,-1,1],[U,-1,-1],[N,1,-1]]){let lt=T(tt,A,bt),ut=A*bt>0?lt.aX:lt.aZ,gt=A*bt>0?lt.aZ:lt.aX;D.push({c:tt,a0:ut,a1:gt})}for(let[tt,A]of[[w,1],[M,-1]]){let bt=G(tt,A);D.push({c:tt,a0:A>0?bt.aRight:bt.aLeft,a1:A>0?bt.aLeft:bt.aRight})}D.sort((tt,A)=>_(Math.atan2(tt.c.z,tt.c.x))-_(Math.atan2(A.c.z,A.c.x)));for(let tt of D)W(tt.c,tt.a0,tt.a1,!0)}let $=.07,V=new Fs;V.moveTo(-a+$,-l),V.lineTo(a-$,-l),V.quadraticCurveTo(a,-l,a,-l+$),V.lineTo(a,l-$),V.quadraticCurveTo(a,l,a-$,l),V.lineTo(-a+$,l),V.quadraticCurveTo(-a,l,-a,l-$),V.lineTo(-a,-l+$),V.quadraticCurveTo(-a,-l,-a+$,-l);let O=new Wi;p.forEach((D,tt)=>tt?O.lineTo(D.x,D.z):O.moveTo(D.x,D.z)),O.closePath(),V.holes.push(O);let K=new _t({map:Hy(),roughness:.4,metalness:.05}),X=.008,rt=new vr(V,{depth:o+.02-2*X,bevelEnabled:!0,bevelThickness:X,bevelSize:X*.8,bevelSegments:4,curveSegments:16}),vt=new Dt(rt,K);vt.rotation.x=Math.PI/2,vt.position.y=o-X,vt.castShadow=!0,vt.receiveShadow=!0,t.add(vt);let yt=new Fs,zt=a-.03,Tt=l-.03,Y=.05;yt.moveTo(-zt+Y,-Tt),yt.lineTo(zt-Y,-Tt),yt.quadraticCurveTo(zt,-Tt,zt,-Tt+Y),yt.lineTo(zt,Tt-Y),yt.quadraticCurveTo(zt,Tt,zt-Y,Tt),yt.lineTo(-zt+Y,Tt),yt.quadraticCurveTo(-zt,Tt,-zt,Tt-Y),yt.lineTo(-zt,-Tt+Y),yt.quadraticCurveTo(-zt,-Tt,-zt+Y,-Tt);let it=new Dt(new vr(yt,{depth:.26,bevelEnabled:!0,bevelThickness:.01,bevelSize:.01,bevelSegments:3}),K);it.rotation.x=Math.PI/2,it.position.y=-.03,it.castShadow=!0,t.add(it);let At=new fe(.075,.06,.56,24);for(let D of[-1,-.33,.33,1])for(let tt of[-1,1]){let A=new Dt(At,K);A.position.set(D*(i-.1),-.58,tt*(r-.06)),A.castShadow=!0,t.add(A)}let ft=new we({color:328965}),Ot=new _t({color:1842204,roughness:.55,metalness:.15});for(let D of g){let tt=new Dt(new fe(D.r,D.r*.8,.16,40,1,!0),ft);tt.position.set(D.x,-.08,D.z),t.add(tt);let A=new Dt(new Tn(D.r,40),ft);A.rotation.x=-Math.PI/2,A.position.set(D.x,-.003,D.z),t.add(A);let bt=Qi.find(ut=>ut.x===D.x&&ut.z===D.z),lt=new Dt(new Tn(bt.corner?.072:.066,40),ft);lt.rotation.x=-Math.PI/2,lt.position.set(D.x,8e-4,D.z),t.add(lt)}for(let D of S){let tt=new gr(D.map(bt=>new C(bt.x,o-.004,bt.z))),A=new Dt(new To(tt,48,.011,10,!1),Ot);A.castShadow=!0,t.add(A)}let Gt=new _t({color:14271370,metalness:.8,roughness:.3});for(let D of[-3,-1,1,3])for(let tt of[-1,1]){let A=new Dt(new Tn(.008,12),Gt);A.rotation.x=-Math.PI/2,A.position.set(D*3.569/8,o+.0015,tt*(l-bc/2)),t.add(A)}let Ut={green:{cloth:null,rail:1531951,base:"#1d6b34"},red:{cloth:null,rail:5902358,base:"#6a121a"},blue:{cloth:null,rail:1788566,base:"#1f56b0"}};return Ut.green.cloth=n.material.map,{group:t,cloth:n,surfaceY:0,ballY:.02625,setFelt:D=>{let tt=Ut[D]||Ut.green;tt.cloth||(tt.cloth=Au(e,tt.base)),n.material.map=tt.cloth,n.material.needsUpdate=!0,h.color.setHex(tt.rail)}}}function Cu(s,t){s.background=new ue(790292);let e=Vy();e.repeat.set(2*Ge.x/4,2*Ge.z/4),e.anisotropy=8;let n=new Dt(new ie(2*Ge.x,2*Ge.z),new _t({map:e,roughness:.72,metalness:0}));n.rotation.x=-Math.PI/2,n.position.y=-.86,n.receiveShadow=!0,s.add(n),s.add(new Ei(14674175,3107644,.45));let i=1.62,r=new _t({color:936486,roughness:.5,metalness:.2,side:Xe}),o=new we({color:16773586}),a=new we({color:1118481}),l=h=>(h.layers.set(1),s.add(h),h);for(let h of[-1.1,0,1.1]){let c=new Vs(16774368,11,6,Math.PI/3.4,.6,1.6);c.position.set(h,i-.05,0),c.target.position.set(h,0,0),c.castShadow=t==="high"&&h===0,c.castShadow&&(c.shadow.mapSize.set(2048,2048),c.shadow.bias=-4e-4,c.shadow.radius=3),s.add(c,c.target),l(new Dt(new Ct(.9,.012,.5),r)).position.set(h,i+.04,0);for(let[f,g,x,y]of[[0,1,.9,.01],[0,-1,.9,.01],[1,0,.01,.5],[-1,0,.01,.5]])l(new Dt(new Ct(x,.09,y),r)).position.set(h+f*.45,i,g*.25);let d=l(new Dt(new ie(.86,.46),o));d.rotation.x=Math.PI/2,d.position.set(h,i+.03,0);for(let f of[-.35,.35]){let g=i+.046;l(new Dt(new fe(.003,.003,Ge.ceil-g,6),a)).position.set(h+f,(g+Ge.ceil)/2,0)}}if(t==="high"){let h=new Co(16777215,.45);h.position.set(.2,3,.15),h.castShadow=!0,h.shadow.mapSize.set(2048,2048);let c=2.1;Object.assign(h.shadow.camera,{left:-c,right:c,top:c,bottom:-c,near:1,far:5}),h.shadow.bias=-3e-4,s.add(h)}}var Bn=Ge.floor,Vo=Ge.x,Tx=Ge.z,is={desk:{x:Vo-.42,z:-1.4,top:Bn+.78},speakers:[{x:Vo-.45,z:-2.62},{x:Vo-.45,z:-.18}],radio:{x:-Vo+.27,z:.5,top:Bn+.83}},Go=(s,t)=>{let e=document.createElement("canvas");e.width=s,e.height=t;let n=new _e(e);return n.colorSpace=ce,n.anisotropy=8,{c:e,g:e.getContext("2d"),t:n}};function Pu(s){let t=new _t({color:5910294,roughness:.5}),e=new _t({color:1776929,roughness:.55,metalness:.3}),n=new _t({color:789518,roughness:.8}),i=new _t({color:10133672,roughness:.35,metalness:.8}),r=new _t({color:11569724,metalness:.85,roughness:.35}),o=(M,T,G,W,$,V=s)=>{let O=new Dt(M,T);return O.position.set(G,W,$),O.castShadow=!0,O.receiveShadow=!0,V.add(O),O},a=is.desk;o(new Ct(.62,.04,1.35),t,a.x,a.top-.02,a.z);for(let M of[-1,1])for(let T of[-1,1])o(new Ct(.04,a.top-Bn-.04,.04),t,a.x+M*.27,Bn+(a.top-Bn-.04)/2,a.z+T*.62);o(new Ct(.5,.02,1.2),t,a.x,Bn+.18,a.z);let l=new re;l.position.set(a.x-.02,a.top+.035,a.z),l.rotation.z=.12,s.add(l),o(new Ct(.44,.06,.92),e,0,0,0,l);let h=new ln().setFromRotationMatrix(new Ie().makeBasis(new C(0,0,1),new C(1,0,0),new C(0,1,0))),c=Go(1024,512),u=o(new ie(.92,.44),new _t({map:c.t,roughness:.6,metalness:.2}),0,.0305,0,l);u.quaternion.copy(h),u.castShadow=!1;let d=["vol","bass","treble","bal"],f=[-.27,-.09,.09,.27],g={};d.forEach((M,T)=>{o(new Ct(.26,.004,.012),n,.02,.032,f[T],l);let G=o(new Ct(.028,.026,.05),new _t({color:T===0?15263976:2894896,roughness:.4}),.02,.045,f[T],l);g[M]=G});for(let M=0;M<6;M++){let T=o(new fe(.014,.016,.02,20),M%3===0?r:i,.17,.042,-.36+M*.144,l);T.castShadow=!1}let x=[[],[]],y=[3066944,3066944,3066944,3066944,3066944,15844367,15844367,15158332];for(let M=0;M<2;M++)for(let T=0;T<8;T++){let G=new _t({color:1118481,emissive:y[T],emissiveIntensity:.05,roughness:.4}),W=o(new Ct(.014,.008,.02),G,-.12+T*.026,.034,-.41+M*.03,l);W.castShadow=!1,x[M].push(G)}let p=Go(512,96),E=o(new ie(.3,.056),new we({map:p.t}),.17,.0325,.27,l);E.quaternion.copy(h),E.castShadow=!1;let S=[];is.speakers.forEach(M=>{let T=new re;T.position.set(M.x,Bn,M.z),T.lookAt(0,Bn,0),s.add(T),o(new fe(.16,.2,.03,24),i,0,.015,0,T),o(new fe(.02,.02,.9,12),i,0,.47,0,T),o(new Ct(.2,.03,.2),i,0,.93,0,T),o(new Ct(.32,.52,.3),t,0,1.2,0,T),o(new Ct(.3,.5,.005),n,0,1.2,.151,T);let G=(W,$)=>{let V=o(new $n(W,.008,8,32),i,0,$,.156,T);V.castShadow=!1;let O=o(new Tn(W,32),new _t({color:2236966,roughness:.9}),0,$,.155,T);O.castShadow=!1;let K=o(new Fe(W*.28,16,8,0,Math.PI*2,0,Math.PI/2),new _t({color:3355448,roughness:.6}),0,$,.156,T);return K.rotation.x=Math.PI/2,K.castShadow=!1,{cone:O,dust:K}};S.push({woofer:G(.11,1.12),tweeter:G(.04,1.36)})});let _=is.radio,z=new re;z.position.set(_.x,_.top,_.z),z.rotation.y=Math.PI/2,s.add(z),o(new Ct(.42,.22,.17),t,0,.11,0,z),o(new Ct(.44,.02,.18),new _t({color:3808524,roughness:.45}),0,.225,0,z);let P=Go(256,160);{let M=P.g;M.fillStyle="#d9c9a3",M.fillRect(0,0,256,160),M.strokeStyle="#6b5532",M.lineWidth=3;for(let T=8;T<256;T+=10)M.beginPath(),M.moveTo(T,0),M.lineTo(T,160),M.stroke();P.t.needsUpdate=!0}o(new ie(.2,.15),new _t({map:P.t,roughness:.9}),-.09,.11,.0855,z).castShadow=!1;let U=Go(256,128),N=new _t({map:U.t,emissive:16777215,emissiveMap:U.t,emissiveIntensity:.15,roughness:.5});o(new ie(.15,.075),N,.11,.14,.0855,z).castShadow=!1;for(let M of[.06,.16]){let T=o(new fe(.018,.02,.02,20),r,M,.06,.095,z);T.rotation.x=Math.PI/2}let w=(M,T)=>{let G=p.g;G.fillStyle="#071a10",G.fillRect(0,0,512,96),G.fillStyle=T?"#6fff9f":"#2f6b45",G.font='bold 44px "Courier New", monospace',G.textBaseline="middle",G.fillText((T?"":"VYP  ")+(M||"R\xC1DIO").slice(0,18),16,50),p.t.needsUpdate=!0,G=U.g,G.fillStyle=T?"#f3d9a0":"#bfae86",G.fillRect(0,0,256,128),G.strokeStyle="#5a4a2a",G.lineWidth=2;for(let $=16;$<244;$+=12)G.beginPath(),G.moveTo($,18),G.lineTo($,$%48===16?40:30),G.stroke();G.fillStyle="#3a2a12",G.font="bold 26px Georgia, serif",G.textAlign="center",G.fillText((M||"R\xE1dio").slice(0,16),128,86),G.fillStyle="#b3121f";let W=16+(M||"").length*37%220;G.fillRect(W,12,3,40),U.t.needsUpdate=!0,N.emissiveIntensity=T?.55:.12};{let M=c.g;M.fillStyle="#26282d",M.fillRect(0,0,1024,512),M.fillStyle="#cfd3da",M.font="bold 34px Arial, sans-serif",M.textAlign="center",["HLAS","BASY","V\xDD\u0160KY","BAL"].forEach((T,G)=>{let W=(f[G]+.46)*1113.0434782608695;M.fillText(T,W,488);for(let $=0;$<=10;$++)M.fillRect(W+22,120+$*30,$%5?10:18,3)}),M.font="bold 26px Arial, sans-serif",M.textAlign="left",M.fillText("MY SNOOKER MIX",24,44),c.t.needsUpdate=!0}return w("",!1),{view:{pos:new C(a.x-1.95,Bn+1.6,a.z+.55),look:new C(a.x,a.top+.2,a.z+.5)},setControls(M,T,G){d.forEach(W=>{g[W].position.x=-.1+(M[W]??.5)*.24}),w(T,G)},update(M,T){[M,T].forEach((G,W)=>{let $=Math.round(G*8);x[W].forEach((O,K)=>{O.emissiveIntensity=K<$?2.2:.05});let V=S[W];if(V){let O=1+G*.06;V.woofer.dust.scale.set(1,1,O*O),V.woofer.cone.position.z=.155+G*.004}})}}}var Wo=class{constructor(t,e){this.stations=(t||[]).filter(n=>n&&n.stream),this.ctxGet=e,this.index=-1,this.on=!1,this.mode="",this.params={vol:.7,bass:.5,treble:.5,bal:.5},this.status="",this.onChange=null,this._graph=null,this._data=null}get station(){return this.stations[this.index]||null}_emit(t){this.onChange&&this.onChange(t)}_build(t){if(this._graph)return this._graph;let e=new Audio;e.crossOrigin="anonymous",e.preload="none";let n=t.createMediaElementSource(e),i=t.createBiquadFilter();i.type="lowshelf",i.frequency.value=220;let r=t.createBiquadFilter();r.type="highshelf",r.frequency.value=3200;let o=t.createGain();n.connect(i).connect(r).connect(o);let a=t.createChannelSplitter(2);o.connect(a);let l=t.createGain();l.connect(t.destination);let h=[0,1].map(c=>{let u=t.createGain(),d=t.createAnalyser();d.fftSize=512;let f=t.createPanner();f.panningModel="HRTF",f.distanceModel="inverse",f.refDistance=1.2,f.rolloffFactor=.6;let g=this._spk&&this._spk[c]||{x:is.speakers[c].x,y:Bn+1.2,z:is.speakers[c].z};return f.positionX.value=g.x,f.positionY.value=g.y,f.positionZ.value=g.z,a.connect(u,c),u.connect(d),u.connect(f),f.connect(l),{g:u,an:d,p:f}});return this._graph={el:e,src:n,bass:i,treble:r,gain:o,sides:h,out:l},this._data=new Uint8Array(256),this._graph}_apply(){let t=this.params,e=this._graph;e&&this.mode==="space"&&(e.gain.gain.value=t.vol*t.vol*1.6,e.bass.gain.value=(t.bass-.5)*24,e.treble.gain.value=(t.treble-.5)*24,e.sides[0].g.gain.value=Math.min(1,(1-t.bal)*2),e.sides[1].g.gain.value=Math.min(1,t.bal*2)),this._plain&&(this._plain.volume=Math.min(1,t.vol*t.vol))}set(t,e){this.params[t]=Math.max(0,Math.min(1,e)),this._apply(),this._emit("param")}play(t=this.index<0?0:this.index){if(!this.stations.length){this.status="V My Player nie s\xFA \u017Eiadne r\xE1di\xE1.",this._emit();return}this.index=(t%this.stations.length+this.stations.length)%this.stations.length;let e=this.station;this.stopAudio(),this.on=!0,this.status="Lad\xEDm stanicu\u2026";let n=this.ctxGet();if(!n){this._playPlain(e);return}let i=this._build(n);this.mode="space",this._apply();let r=this._token=Math.random();i.el.onerror=()=>{this._token===r&&this.on&&this._playPlain(e)},i.el.onplaying=()=>{this._token===r&&(this.status="Hr\xE1 priestorovo z reproduktorov.",this._emit())},i.el.src=e.stream,i.el.play().catch(()=>null),this._tuneTimeout(r),this._emit()}_playPlain(t){this._graph&&(this._graph.el.removeAttribute("src"),this._graph.el.load()),this.mode="plain";let e=new Audio;this._plain=e;let n=this._token=Math.random();e.onerror=()=>{this._token===n&&(this.status="Stanica teraz nehr\xE1. Sk\xFAs \u010Fal\u0161iu (\u0161\xEDpka vpravo).",this.mode="",this._emit())},e.onplaying=()=>{this._token===n&&(this.status="Hr\xE1 (t\xE1to stanica nedovol\xED priestorov\xFD zvuk a ekvaliz\xE9r).",this._emit())},e.src=t.stream,this._apply(),e.play().catch(()=>null),this._tuneTimeout(n),this._emit()}_tuneTimeout(t){setTimeout(()=>{this._token===t&&this.on&&/Ladím/.test(this.status)&&(this.status="Stanica neodpoved\xE1. Sk\xFAs \u010Fal\u0161iu (\u0161\xEDpka vpravo).",this._emit())},12e3)}stopAudio(){this._token=0,this._graph&&(this._graph.el.pause(),this._graph.el.removeAttribute("src"),this._graph.el.load()),this._plain&&(this._plain.pause(),this._plain.removeAttribute("src"),this._plain=null),this.mode=""}stop(){this.stopAudio(),this.on=!1,this.status="R\xE1dio je vypnut\xE9.",this._emit()}toggle(){this.on?this.stop():this.play()}next(t){this.play(this.index+t)}setSpeakers(t){this._spk=t||null;let e=this._graph;e&&e.sides.forEach((n,i)=>{let r=t&&t[i]||{x:is.speakers[i].x,y:Bn+1.2,z:is.speakers[i].z};n.p.positionX.value=r.x,n.p.positionY.value=r.y,n.p.positionZ.value=r.z})}update(t){let e=this._graph;if(!e)return[this.on&&this.mode==="plain"?.35+Math.random()*.25:0,this.on&&this.mode==="plain"?.35+Math.random()*.25:0];let i=e.out.context.listener,r=t.position,o=new C;return t.getWorldDirection(o),i.positionX?(i.positionX.value=r.x,i.positionY.value=r.y,i.positionZ.value=r.z,i.forwardX.value=o.x,i.forwardY.value=o.y,i.forwardZ.value=o.z,i.upX.value=0,i.upY.value=1,i.upZ.value=0):i.setPosition&&(i.setPosition(r.x,r.y,r.z),i.setOrientation(o.x,o.y,o.z,0,1,0)),this.mode==="plain"?[.3+Math.random()*.3,.3+Math.random()*.3]:this.mode!=="space"||!this.on?[0,0]:e.sides.map(a=>{a.an.getByteTimeDomainData(this._data);let l=0;for(let h=0;h<this._data.length;h++)l=Math.max(l,Math.abs(this._data[h]-128));return Math.min(1,l/100)})}};var Ze=-.86,Sc=(s,t,e)=>{let n=document.createElement("canvas");n.width=s,n.height=t;let i=n.getContext("2d");e&&e(i,s,t);let r=new _e(n);return r.colorSpace=ce,r.anisotropy=8,{c:n,g:i,t:r}};function Iu(s,t){let e=new re;e.visible=!1,s.add(e);let n=t==="high",i=(V,O,K,X,rt,vt=e)=>{let yt=new Dt(V,O);return yt.position.set(K,X,rt),yt.castShadow=n,yt.receiveShadow=!0,vt.add(yt),yt},r=new _t({color:724242,roughness:.35,metalness:.4}),o=new _t({color:9049634,roughness:.6}),a=new _t({color:1382431,roughness:.8}),l=new _t({color:9080985,metalness:.8,roughness:.35}),h=i(new ie(40,30),new _t({color:460811,roughness:.25,metalness:.5}),0,Ze,0);h.rotation.x=-Math.PI/2,h.castShadow=!1;let c=i(new ie(7.4,5.2),new _t({color:1320010,roughness:.9}),0,Ze+.002,0);c.rotation.x=-Math.PI/2,c.castShadow=!1;let u=["MY SNOOKER","HEDLAJNER","LIGA","MY SNOOKER","HEDLAJNER.SK","LIGA"],d=(V,O)=>Sc(1024,128,(K,X,rt)=>{let vt=K.createLinearGradient(0,0,X,0);vt.addColorStop(0,O%2?"#0d2a6b":"#111"),vt.addColorStop(1,O%2?"#1747b5":"#2a2a2a"),K.fillStyle=vt,K.fillRect(0,0,X,rt),K.fillStyle=O%2?"#ffffff":"#FACC15",K.font="bold 78px Arial, sans-serif",K.textAlign="center",K.textBaseline="middle",K.fillText(V,X/2,rt/2+4)}).t,f=4.2,g=3.1;[[0,g,0,2*f],[0,-g,Math.PI,2*f],[f,0,Math.PI/2,2*g],[-f,0,-Math.PI/2,2*g]].forEach(([V,O,K,X],rt)=>{let vt=new re;vt.position.set(V,Ze,O),vt.rotation.y=K,e.add(vt),i(new Ct(X,.42,.06),r,0,.21,0,vt);let yt=i(new ie(X-.1,.3),new we({map:d(u[rt],rt)}),0,.22,-.032,vt);yt.rotation.y=Math.PI,yt.castShadow=!1});for(let V of[-1,1])for(let O=0;O<7;O++){let K=V*(g+.9+O*.75),X=Ze+.25+O*.42;i(new Ct(10,.42+O*.42,.75),a,0,Ze+(.42+O*.42)/2,K);for(let rt=-12;rt<=12;rt++){let vt=i(new Ct(.34,.07,.32),o,rt*.4,X+.24,K),yt=i(new Ct(.34,.32,.05),o,rt*.4,X+.42,K+V*.16);vt.castShadow=yt.castShadow=!1}}for(let V of[-1,1])for(let O=0;O<4;O++)i(new Ct(.75,.42+O*.42,7),a,V*(f+1+O*.75),Ze+(.42+O*.42)/2,0);let y=Ze+5.2;for(let V of[-2.4,2.4]){i(new Ct(9,.12,.12),l,0,y,V);for(let O of[-3.5,-1.2,1.2,3.5]){i(new fe(.12,.16,.3,16),l,O,y-.18,V);let K=new Dt(new Os(1.1,4.6,24,1,!0),new we({color:12571903,transparent:!0,opacity:.035,depthWrite:!1,side:Xe}));K.position.set(O*.8,y-2.45,V*.6),K.lookAt(O*.8,y+1,V*.6),K.rotation.x+=Math.PI/2,K.castShadow=!1,e.add(K)}}let p=new Ei(7109288,460811,.35);e.add(p);for(let V of[-4.5,4.5]){let O=new Vs(14674175,9,14,Math.PI/5,.7,1.4);O.position.set(0,y,V),O.target.position.set(0,Ze+1.5,V*1.3),e.add(O,O.target)}let E=Sc(1024,512),S=i(new ie(3.2,1.6),new we({map:E.t}),-(f+3.6),Ze+3.6,0);S.rotation.y=Math.PI/2,S.castShadow=!1,i(new Ct(.12,1.75,3.35),r,-(f+3.68),Ze+3.6,0);let _=Sc(1024,512),z=i(new ie(3.2,1.6),new we({map:_.t}),f+3.6,Ze+3.6,0);z.rotation.y=-Math.PI/2,z.castShadow=!1,i(new Ct(.12,1.75,3.35),r,f+3.68,Ze+3.6,0);let P=new _t({color:2757896,roughness:.4});i(new Ct(.9,.04,.45),P,2.6,Ze+.74,g-.55);for(let V of[-1,1])i(new Ct(.04,.72,.4),P,2.6+V*.42,Ze+.36,g-.55);let U=new _t({color:15267071,transparent:!0,opacity:.25,roughness:.05,depthWrite:!1});for(let V of[2.4,2.8])i(new fe(.035,.03,.12,20,1,!0),U,V,Ze+.82,g-.55).castShadow=!1;let N=new _t({color:1710623,roughness:.5});for(let V of[-2.6,3.3]){i(new Ct(.5,.08,.5),N,V,Ze+.48,g-.55),i(new Ct(.5,.6,.06),N,V,Ze+.82,g-.3);for(let O of[-.2,.2])i(new fe(.02,.02,.46,8),l,V+O,Ze+.23,g-.55)}let w=[],M=[14726286,13078118,9263934],T=[3108822,12597547,2792847],G=[3810324,1118481,10119722];[-1.6,.2,1.9].forEach((V,O)=>{let K=g+.9,X=Ze+.25+.24,rt=new re;rt.position.set(V,X,K),rt.rotation.y=Math.PI,e.add(rt);let vt=new _t({color:T[O],roughness:.75}),yt=new _t({color:M[O],roughness:.7}),zt=new _t({color:2303534,roughness:.8}),Tt=new re;rt.add(Tt),i(new zs(.15,.32,6,14),vt,0,.42,0,Tt),i(new Ct(.3,.12,.36),zt,0,.08,.12,Tt);for(let ft of[-.08,.08])i(new fe(.05,.05,.42,10),zt,ft,-.12,.3,Tt);let Y=new re;Y.position.set(0,.84,0),Tt.add(Y),i(new Fe(.11,20,16),yt,0,0,0,Y);let it=i(new Fe(.115,20,12,0,Math.PI*2,0,Math.PI/2),new _t({color:G[O],roughness:.9}),0,.01,-.01,Y);it.rotation.x=-.25;for(let ft of[-.04,.04])i(new Fe(.014,8,8),new we({color:1118481}),ft,.02,.1,Y).castShadow=!1;let At=[-1,1].map(ft=>{let Ot=new re;Ot.position.set(ft*.19,.66,0),Tt.add(Ot),i(new zs(.045,.22,4,10),vt,0,-.14,0,Ot);let Gt=new re;return Gt.position.set(0,-.28,0),Ot.add(Gt),i(new zs(.04,.2,4,10),yt,0,-.12,0,Gt),Ot.rotation.x=-.35,Gt.rotation.x=-.9,{sh:Ot,el:Gt,sx:ft}});w.push({f:rt,body:Tt,head:Y,arms:At,baseY:X,act:"",t:0,phase:O*1.7})});let W=V=>{for(let O of[E,_]){let K=O.g,X=1024;K.fillStyle="#050a1a",K.fillRect(0,0,X,512),K.fillStyle="#1747b5",K.fillRect(0,0,X,70),K.fillStyle="#fff",K.font="bold 40px Arial, sans-serif",K.textAlign="center",K.fillText(V&&V.title||"MY SNOOKER LIGA",X/2,50),V&&V.names?(K.font="bold 52px Arial, sans-serif",K.textAlign="left",V.names.forEach((rt,vt)=>{let yt=170+vt*110;K.fillStyle=V.turn===vt?"#FACC15":"#e8ecf3",K.fillText((V.turn===vt?"\u25B6 ":"   ")+String(rt).slice(0,18),40,yt),K.textAlign="right",K.font="bold 84px Arial, sans-serif",K.fillText(String(V.scores[vt]),X-40,yt+10),K.font="bold 52px Arial, sans-serif",K.textAlign="left"}),K.fillStyle="#9fb3d9",K.font="34px Arial, sans-serif",K.fillText(`S\xE9ria ${V.brk}   \xB7   Hr\xE1 sa na ${V.on}`,40,420)):(K.fillStyle="#e8ecf3",K.font="bold 48px Arial, sans-serif",K.textAlign="center",K.fillText(V&&V.idle||"Vyzvi hr\xE1\u010Da z ligy",X/2,260)),K.fillStyle="#6f84b3",K.font="28px Arial, sans-serif",K.textAlign="center",K.fillText(V&&V.footer||"",X/2,490),O.t.needsUpdate=!0}};W(null);let $=new C;return{root:e,react(V){w.forEach((O,K)=>{V==="stand"&&K!==1?O.act="clap":O.act=V,O.t=V==="stand"?3.2:1.8})},setScreen:W,update(V,O){let K=performance.now()/1e3;for(let X of w){if(X.t=Math.max(0,X.t-V),X.t===0&&(X.act=""),O&&O.on){X.f.getWorldPosition($);let it=Math.atan2(O.p.x-$.x,-(O.p.z-$.z));X.head.rotation.y+=(Math.max(-1,Math.min(1,-it))-X.head.rotation.y)*Math.min(1,V*4)}let[rt,vt]=X.arms,yt=-.35,zt=-.9,Tt=0,Y=0;if(X.act==="clap"||X.act==="stand"){let it=Math.sin((K+X.phase)*18)*.5+.5;yt=-1.25,zt=-.4,Tt=.35-it*.3,X.act==="stand"&&(Y=Math.min(1,(3.2-X.t)*3)*Math.min(1,X.t*2))}else X.act==="facepalm"?(yt=-2.4,zt=-1.9,Tt=.25):yt=-.35+Math.sin(K*.7+X.phase)*.03;for(let it of[rt,vt])it.sh.rotation.x+=(yt-it.sh.rotation.x)*Math.min(1,V*10),it.el.rotation.x+=(zt-it.el.rotation.x)*Math.min(1,V*10),it.sh.rotation.z+=(it.sx*Tt-it.sh.rotation.z)*Math.min(1,V*10);X.body.position.y=Y*.25}}}}var sn=40,be=-.86,rn=3.2,Ue=2.6,Ri=3,Ec=(s,t,e,n,i=1)=>{let o=document.createElement("canvas");o.width=1024,o.height=1024;let a=o.getContext("2d"),l=i*9301+49297,h=()=>(l=(l*9301+49297)%233280)/233280,c=1024/e;for(let d=0;d<e;d++){let f=.85+h()*.3,g=new ue(s).multiplyScalar(f);a.fillStyle="#"+g.getHexString(),n?a.fillRect(d*c,0,c,1024):a.fillRect(0,d*c,1024,c),a.strokeStyle=t;for(let x=0;x<26;x++){a.globalAlpha=.06+h()*.14,a.lineWidth=.6+h()*2.2;let y=d*c+h()*c,p=2+h()*6,E=.004+h()*.01;a.beginPath();for(let S=0;S<=1024;S+=16){let _=y+Math.sin(S*E+x)*p;n?S?a.lineTo(_,S):a.moveTo(_,S):S?a.lineTo(S,_):a.moveTo(S,_)}a.stroke()}a.globalAlpha=.55,a.fillStyle=t,n?a.fillRect(d*c,0,2,1024):(a.fillRect(0,d*c,1024,2),a.fillRect(d*.37%1*1024,d*c,2,c)),a.globalAlpha=1}let u=new _e(o);return u.colorSpace=ce,u.wrapS=u.wrapT=Nn,u.anisotropy=8,u},ci=(s,t)=>{let e=document.createElement("canvas");e.width=s,e.height=t;let n=new _e(e);return n.colorSpace=ce,n.anisotropy=8,{c:e,g:e.getContext("2d"),t:n}},Gy=[[[-168,66],[-140,70],[-95,72],[-80,64],[-62,58],[-55,50],[-66,44],[-76,35],[-81,25],[-97,26],[-105,20],[-92,15],[-83,9],[-79,8],[-87,14],[-110,23],[-117,32],[-124,40],[-125,49],[-135,58],[-152,60],[-165,60]],[[-55,60],[-44,60],[-20,70],[-18,80],[-40,83],[-60,80],[-70,76],[-58,70]],[[-80,9],[-62,11],[-50,0],[-35,-6],[-39,-15],[-48,-26],[-58,-38],[-65,-55],[-72,-50],[-73,-38],[-71,-18],[-81,-5]],[[-10,36],[-9,43],[-2,44],[-5,48],[3,51],[8,54],[5,58],[10,63],[20,70],[30,70],[40,66],[45,60],[40,48],[30,46],[28,41],[23,38],[20,40],[15,38],[12,44],[7,44],[3,43],[-2,37]],[[-6,50],[2,51],[0,54],[-3,59],[-7,57],[-5,54]],[[-17,21],[-10,30],[-5,36],[10,37],[20,32],[32,31],[35,24],[43,12],[51,12],[42,-1],[40,-15],[35,-25],[20,-35],[16,-28],[12,-17],[9,-1],[5,4],[-8,4],[-16,12]],[[28,41],[40,48],[45,60],[40,66],[60,70],[80,73],[105,78],[140,72],[170,66],[160,58],[142,52],[135,43],[122,40],[121,30],[110,21],[106,10],[100,13],[98,8],[92,22],[80,15],[72,20],[66,25],[57,26],[50,30],[44,40],[36,36]],[[35,30],[50,30],[57,22],[52,16],[43,13],[38,20]],[[114,-22],[122,-18],[130,-12],[137,-12],[142,-11],[146,-19],[153,-26],[150,-37],[140,-38],[131,-32],[116,-35],[114,-28]],[[130,32],[135,34],[141,38],[142,44],[139,40],[134,35]]];function Lu(s){let t=new re;t.position.set(sn,0,0),s.add(t);let e=(L,st,F,j,Q,ht=t)=>{let Mt=new Dt(L,st);return Mt.position.set(F,j,Q),Mt.castShadow=!1,Mt.receiveShadow=!0,ht.add(Mt),Mt},n=new _t({color:2831682,roughness:.9}),i=new _t({color:3875860,roughness:.55}),r=new _t({color:5911576,roughness:.45}),o=new _t({color:1381914,roughness:.5,metalness:.3}),a=new _t({color:11569724,metalness:.85,roughness:.35}),l=new _t({color:15777856,metalness:.6,roughness:.28,emissive:3811328,emissiveIntensity:.5}),h=Ec("#7a4a26","#2a160a",8,!1,3);h.repeat.set(2.2,3);let c=e(new ie(2*rn,2*Ue),new _t({map:h,roughness:.55}),0,be,0);c.rotation.x=-Math.PI/2;let u=e(new ie(3.4,2.4),new _t({color:6034976,roughness:.95}),0,be+.003,.2);u.rotation.x=-Math.PI/2;let d=e(new ie(2*rn,2*Ue),new _t({color:14210252,roughness:.95}),0,be+Ri,0);d.rotation.x=Math.PI/2;let f=[[0,-Ue,0,2*rn],[0,Ue,Math.PI,2*rn],[-rn,0,Math.PI/2,2*Ue],[rn,0,-Math.PI/2,2*Ue]];for(let[L,st,F,j]of f){let Q=new re;Q.position.set(L,be,st),Q.rotation.y=F,t.add(Q);let ht=Ec("#8a5a32","#3a210f",10,!0,7+j);ht.repeat.set(j/1.6,1),e(new ie(j,Ri),new _t({map:ht,roughness:.6}),0,Ri/2,0,Q),e(new Ct(j,1,.03),i,0,.5,.015,Q),e(new Ct(j,.05,.05),r,0,1.02,.03,Q)}t.add(new Ei(16773596,2759184,.55));let g=new On(16773336,9,9,1.6);g.position.set(0,be+Ri-.3,0),t.add(g),e(new fe(.35,.35,.04,32),new we({color:16774884}),0,be+Ri-.03,0);let x=1.2,y=be+.76;e(new Ct(1.8,.05,.85),r,0,y-.025,x);for(let L of[-1,1])e(new Ct(.45,.7,.8),i,L*.65,be+.36,x);e(new Ct(1.4,.003,.6),new _t({color:1915430,roughness:.9}),0,y+.002,x),e(new fe(.07,.09,.02,24),a,.68,y+.01,x-.2),e(new fe(.01,.01,.36,10),a,.68,y+.19,x-.2);let p=e(new fe(.05,.13,.12,24,1,!0),new _t({color:936486,roughness:.5,side:Xe}),.68,y+.4,x-.25);p.rotation.x=.35;let E=new On(16769712,2.5,2.5,2);E.position.set(.68,y+.3,x-.3),t.add(E);let S=ci(512,320);e(new Ct(.36,.015,.25),o,-.15,y+.008,x-.1);let _=new re;_.position.set(-.15,y+.015,x-.225),_.rotation.x=-.32,t.add(_),e(new Ct(.36,.24,.01),o,0,.12,0,_);let z=e(new ie(.33,.21),new we({map:S.t}),0,.12,.006,_),P=ci(400,300),U=new re;U.position.set(-.6,y,x-.25),U.rotation.y=.5,t.add(U);let N=e(new ie(.2,.15),new _t({map:P.t,roughness:.8,side:Xe}),0,.075,0,U);N.rotation.x=-.35,N.position.z=.02,e(new fe(.004,.004,.2,8),a,0,.145,0,U).rotation.z=Math.PI/2;let w=ci(2048,900),M=e(new ie(5.6,2),new _t({map:w.t,roughness:.6,emissive:16777215,emissiveMap:w.t,emissiveIntensity:.15}),0,be+1.6,-Ue+.09);e(new Ct(5.75,2.14,.04),r,0,be+1.6,-Ue+.065);let T={w:3.8,h:1.9,y:be+1.85},G=ci(2048,1024),W=e(new ie(T.w,T.h),new _t({map:G.t,roughness:.75}),-rn+.09,T.y,0);W.rotation.y=Math.PI/2,e(new Ct(.04,T.h+.1,T.w+.1),r,-rn+.065,T.y,0);let $=(L,st)=>{let F=G.g;F.fillStyle="#16324f",F.fillRect(0,0,2048,1024),F.strokeStyle="rgba(255,255,255,0.07)",F.lineWidth=2;for(let Q=-180;Q<=180;Q+=30){let ht=(Q+180)/360*2048;F.beginPath(),F.moveTo(ht,0),F.lineTo(ht,1024),F.stroke()}for(let Q=-60;Q<=80;Q+=30){let ht=(90-Q)/180*1024;F.beginPath(),F.moveTo(0,ht),F.lineTo(2048,ht),F.stroke()}F.fillStyle="#c9b98a",F.strokeStyle="#8a7a4a",F.lineWidth=3;for(let Q of Gy)F.beginPath(),Q.forEach(([ht,Mt],Rt)=>{let Kt=(ht+180)/360*2048,Wt=(90-Mt)/180*1024;Rt?F.lineTo(Kt,Wt):F.moveTo(Kt,Wt)}),F.closePath(),F.fill(),F.stroke();F.fillStyle="#f2d48a",F.font="bold 48px Georgia, serif",F.textAlign="left",F.fillText("Hr\xE1\u010Di ligy vo svete",40,70);let j=["#e8b830","#c9cdd3","#c8804a","#2ecc71"];for(let Q of L||[]){let ht=(Q.lon+180)/360*2048,Mt=(90-Q.lat)/180*1024;F.fillStyle="rgba(0,0,0,0.4)",F.beginPath(),F.arc(ht+3,Mt+4,16,0,Math.PI*2),F.fill(),F.fillStyle=j[(Q.league||4)-1],F.beginPath(),F.arc(ht,Mt,15,0,Math.PI*2),F.fill(),F.strokeStyle=Q.id===st?"#ffffff":"#111",F.lineWidth=Q.id===st?6:3,F.stroke(),F.fillStyle="#fff",F.font="bold 26px Arial, sans-serif",F.fillText(String(Q.name).slice(0,14),ht+20,Mt+9)}G.t.needsUpdate=!0},V=new re;V.position.set(rn-.06,be,-.2),V.rotation.y=-Math.PI/2,t.add(V),e(new Ct(2.3,1.85,.03),i,0,1.08,0,V),e(new Ct(2.35,.06,.16),r,0,.12,.06,V),e(new Ct(2.35,.05,.12),r,0,1.35,.06,V);let O=[],K=new _t({color:8176882,emissive:1792646,emissiveIntensity:.8,metalness:.4,roughness:.3}),X=(L,st,F)=>{for(let j of O)V.remove(j);O=[],L.forEach((j,Q)=>{let ht=new re,Mt=(Q-(L.length-1)/2)*.21,Rt=st.includes(j.id);if(ht.position.set(Mt,.16+j.len,.08+(Rt?.12:0)),ht.rotation.x=Math.PI,ht.add(qs(j,!0)),V.add(ht),O.push(ht),Rt){let Kt=new Dt(new $n(j.id===F?.055:.04,.008,8,20),j.id===F?K:l);Kt.position.set(Mt,.3,.22),V.add(Kt),O.push(Kt)}})};e(new Ct(.4,2,1.2),i,rn-.22,be+1,1.65);for(let L=0;L<4;L++)e(new Ct(.38,.03,1.15),r,rn-.22,be+.4+L*.45,1.65);let rt=new re;t.add(rt);let vt=[[0,0],[.05,0],[.05,.02],[.02,.03],[.012,.09],[.04,.12],[.06,.2],[.055,.21],[.03,.14],[0,.13]].map(([L,st])=>new wt(L,st)),yt=L=>{rt.clear(),(L||[]).slice(0,4).forEach((st,F)=>{let j=new Dt(new Xi(vt,28),l);j.position.set(rn-.22,be+.84+F*.45,1.3+F%2*.3),rt.add(j)})},zt=-1.7,Tt=1.5,Y=2,it=be+.55+Y/2,At=ci(1024,1365);{let L=At.g,st=1024,F=1365,j=L.createLinearGradient(0,0,0,F);j.addColorStop(0,"#0b1a3a"),j.addColorStop(.55,"#3a4f86"),j.addColorStop(.72,"#e48a4a"),j.addColorStop(.8,"#2a2030"),j.addColorStop(1,"#141018"),L.fillStyle=j,L.fillRect(0,0,st,F),L.fillStyle="#ffffff";for(let Q=0;Q<90;Q++)L.globalAlpha=.3+Q*37%70/100,L.fillRect(Q*263%st,Q*151%600,2,2);L.globalAlpha=1;for(let Q=0;Q<26;Q++){let ht=40+Q*53%70,Mt=90+Q*97%260,Rt=Q*41%st,Kt=1060-Mt;L.fillStyle="#120e18",L.fillRect(Rt,Kt,ht,Mt+300),L.fillStyle="#f6d58a";for(let Wt=Kt+12;Wt<1060;Wt+=22)for(let ne=Rt+8;ne<Rt+ht-8;ne+=16)(ne*7+Wt*3+Q)%5<2&&(L.globalAlpha=.5+(ne+Wt)%5/10,L.fillRect(ne,Wt,6,9));L.globalAlpha=1}L.fillStyle="#1d1a26",L.beginPath(),L.ellipse(640,1010,260,70,0,Math.PI,0),L.fill();for(let Q of[420,860]){L.fillStyle="#2a2630",L.fillRect(Q-4,760,8,240);let ht=L.createRadialGradient(Q,760,4,Q,760,120);ht.addColorStop(0,"#ffffffee"),ht.addColorStop(.2,"#fff2c099"),ht.addColorStop(1,"#fff2c000"),L.fillStyle=ht,L.fillRect(Q-120,640,240,240)}L.fillStyle="#7cc4f2",L.font="bold 34px Arial, sans-serif",L.textAlign="center",L.fillText("MY SNOOKER AR\xC9NA",640,990),At.t.needsUpdate=!0}let ft=e(new ie(Tt,Y),new we({map:At.t}),zt,it,Ue-.06);ft.rotation.y=Math.PI;for(let[L,st,F,j]of[[Tt+.16,.08,zt,it+Y/2+.04],[Tt+.16,.08,zt,it-Y/2-.04],[.08,Y,zt-Tt/2-.04,it],[.08,Y,zt+Tt/2+.04,it]])e(new Ct(L,st,.12),r,F,j,Ue-.06);e(new Ct(Tt+.3,.04,.26),r,zt,it-Y/2-.09,Ue-.13);let Ot=new _t({color:12572927,transparent:!0,opacity:.18,roughness:.05,metalness:.2,depthWrite:!1}),Gt=[];for(let L of[-1,1]){let st=new re;st.position.set(zt+L*(Tt/2),it,Ue-.09),t.add(st);let F=Tt/2,j=-L*(F/2);e(new ie(F-.06,Y-.06),Ot,j,0,0,st).rotation.y=Math.PI;for(let[Q,ht,Mt,Rt]of[[F,.05,j,Y/2-.025],[F,.05,j,-Y/2+.025],[.05,Y,-L*.025,0],[.05,Y,-L*(F-.025),0],[F,.03,j,.2]])e(new Ct(Q,ht,.04),r,Mt,Rt,0,st);e(new Ct(.02,.12,.04),a,-L*(F-.06),0,-.04,st),Gt.push({hinge:st,side:L})}let Ut=0,te=0,D=()=>(te=te?0:1,!!te),tt=L=>{Ut+=(te-Ut)*Math.min(1,L*3);for(let st of Gt)st.hinge.rotation.y=st.side*Ut*1.25},A=Ec("#5a3018","#1e0e05",4,!0,11),bt=e(new Ct(1,2.1,.05),new _t({map:A,roughness:.5}),1.9,be+1.05,Ue-.03);bt.rotation.y=Math.PI,e(new Ct(1.12,2.18,.03),r,1.9,be+1.09,Ue-.012),e(new Fe(.035,16,12),a,1.55,be+1,Ue-.08);let lt=e(new Fe(.06,16,12),new _t({color:2245666,emissive:0}),1.9,be+2.32,Ue-.06),ut=ci(512,128),gt=L=>{let st=ut.g,F=L==="wait";st.fillStyle=F?"#6a4a08":"#123524",st.fillRect(0,0,512,128),st.fillStyle="#f2d48a",st.textAlign="center",F?(st.font="bold 40px Arial, sans-serif",st.fillText("VYH\u013DAD\xC1VAM Z\xC1PAS",256,80)):(st.font="bold 54px Georgia, serif",st.fillText("\u0160TADI\xD3N",256,84)),ut.t.needsUpdate=!0,lt.material.color.setHex(F?16760896:2245666),lt.material.emissive.setHex(F?16751104:0)};gt("");let It=ci(256,256);{let L=It.g;L.fillStyle="#e8e4dc",L.fillRect(0,0,256,256),L.fillStyle="#9a958c";for(let st=20;st<240;st+=14)for(let F=20;F<240;F+=14)Math.hypot(F-128,st-128)<104&&(L.beginPath(),L.arc(F,st,3.2,0,Math.PI*2),L.fill());It.t.needsUpdate=!0}let Bt=[];for(let L of[-1.3,1.3]){e(new fe(.2,.2,.02,32),new _t({color:14210252,roughness:.6}),L,be+Ri-.01,.2);let st=e(new Tn(.17,32),new _t({map:It.t,roughness:.8}),L,be+Ri-.022,.2);st.rotation.x=Math.PI/2,Bt.push({x:sn+L,y:be+Ri-.05,z:.2})}let R=ci(1024,700);{let L=R.g;L.fillStyle="#6b4424",L.fillRect(0,0,1024,700),L.fillStyle="#c9a26a",L.fillRect(24,24,976,652),L.fillStyle="#0f2a1c",L.fillRect(260,44,504,78),L.fillStyle="#f2d48a",L.textAlign="center",L.font="bold 50px Georgia, serif",L.fillText("KANCEL\xC1RIA",512,100);let st=[["F1","t\xE1to n\xE1stenka"],["F2","t\xE1g\xE1 do ligov\xE9ho z\xE1pasu (4 kusy)"],["F3","poh\u013Ead na kalend\xE1r sez\xF3ny"],["F4","tabu\u013Ea v\xFDsledkov l\xEDg"],["F6","otvori\u0165 alebo zatvori\u0165 okno"],["F7","notebook Moja liga"],["F8","vizitka: registr\xE1cia, moje \xFAdaje"],["F9","vyh\u013Eada\u0165 z\xE1pas (aj dvere \u0160TADI\xD3N)"],["F10","mapa hr\xE1\u010Dov ligy"],["Ctrl","dr\u017E: vo\u013En\xE1 my\u0161 na klikanie"],["Esc","sp\xE4\u0165 za st\xF4l, potom do herne"]];L.textAlign="left",st.forEach(([F,j],Q)=>{let ht=172+Q*46;L.fillStyle="#2a1608",L.font="bold 34px Arial, sans-serif",L.fillText(F,90,ht),L.font="32px Arial, sans-serif",L.fillText(j,230,ht)}),R.t.needsUpdate=!0}let b=e(new ie(1.3,.89),new _t({map:R.t,roughness:.8}),.25,be+1.62,Ue-.07);b.rotation.y=Math.PI,e(new Ct(1.38,.97,.03),r,.25,be+1.62,Ue-.05);let J=e(new ie(.5,.125),new we({map:ut.t}),1.9,be+1.75,Ue-.06);J.rotation.y=Math.PI;let ot=(L,st)=>{let F=w.g;F.fillStyle="#0d1b2e",F.fillRect(0,0,2048,900),F.fillStyle="#f2d48a",F.font="bold 64px Georgia, serif",F.textAlign="center",F.fillText(L&&L.season?`LIGA  \xB7  ${L.season.name.toUpperCase()}`:"LIGA",1024,80);let j=[20,530,1040,1550];for(let ht=1;ht<=4;ht++){let Mt=j[ht-1];F.fillStyle=["#7a5f10","#5e636b","#6b3e1c","#1f5e46"][ht-1],F.fillRect(Mt,110,478,64),F.fillStyle="#fff",F.font="bold 40px Arial, sans-serif",F.textAlign="center",F.fillText(`${ht}. LIGA`,Mt+239,155);let Rt=L&&L.leagues&&L.leagues[ht]||[];for(let Kt=0;Kt<10;Kt++){let Wt=Rt[Kt],ne=225+Kt*64;if(F.fillStyle=Kt%2?"#13253d":"#102036",F.fillRect(Mt,ne-44,478,64),!Wt)continue;F.fillStyle=Wt.me?"#FACC15":"#e8ecf3",F.font=(Wt.me?"bold ":"")+"32px Arial, sans-serif",F.textAlign="left";let B=`${Wt.rank}. ${Wt.user.name}`;for(;B.length>2&&F.measureText(B).width>330;)B=B.slice(0,-1);F.fillText(B,Mt+16,ne),F.textAlign="right",F.fillText(String(Wt.points),Mt+462,ne)}}F.fillStyle="#9fb3d9",F.font="30px Arial, sans-serif",F.textAlign="center",F.fillText(L&&L.me?`Ty: ${L.me.rank}. miesto v ${L.me.league}. lige \xB7 ${L.me.points} bodov \xB7 v\xFDhry ${L.me.wins}, prehry ${L.me.losses}`:"Body: v\xED\u0165az z\xEDska, ko\u013Eko nahral; porazen\xFD ich strat\xED",1024,880),w.t.needsUpdate=!0,F=S.g,F.fillStyle="#0c1a33",F.fillRect(0,0,512,320),F.fillStyle="#FACC15",F.font="bold 34px Arial, sans-serif",F.textAlign="center",F.fillText("MOJA LIGA",256,60),F.fillStyle="#fff",F.font="bold 64px Arial, sans-serif",F.fillText(L&&L.me?`${L.me.league}. liga`:"bez registr\xE1cie",256,150),F.font="32px Arial, sans-serif",F.fillText(L&&L.me?`${L.me.rank}. miesto \xB7 ${L.me.points} b.`:"",256,210),F.fillStyle="#9fb3d9",F.font="26px Arial, sans-serif",F.fillText(L&&L.me?`V ${L.me.wins} \xB7 P ${L.me.losses} \xB7 s\xE9ria ${L.me.best}`:"",256,260),S.t.needsUpdate=!0,F=P.g,F.fillStyle="#fbf7ec",F.fillRect(0,0,400,300),F.fillStyle="#b3121f",F.fillRect(0,0,400,70);let Q=new Date;F.fillStyle="#fff",F.font="bold 40px Arial, sans-serif",F.textAlign="center",F.fillText(Q.toLocaleDateString("sk-SK",{month:"long"}).toUpperCase(),200,50),F.fillStyle="#222",F.font="bold 120px Georgia, serif",F.fillText(String(Q.getDate()),200,190),F.font="24px Arial, sans-serif",F.fillText(L&&L.season?`do konca sez\xF3ny ${L.season.daysLeft} dn\xED`:"sez\xF3na ligy",200,260),P.t.needsUpdate=!0,yt(st)},mt=ci(720,400),et=e(new ie(.16,.089),new _t({map:mt.t,roughness:.55,emissive:16777215,emissiveMap:mt.t,emissiveIntensity:.12}),.16,y+.045,x-.1);et.rotation.x=-.95,et.rotation.y=-.15,e(new Ct(.12,.012,.035),a,.16,y+.006,x-.085).rotation.y=-.15;let Yt=(L,st,F)=>{let j=mt.g,Q=720,ht=400,Mt=j.createLinearGradient(0,0,Q,ht);Mt.addColorStop(0,"#b3121f"),Mt.addColorStop(1,"#6e0912"),j.fillStyle=Mt,j.fillRect(0,0,Q,ht),j.strokeStyle="#e9c46a",j.lineWidth=6,j.strokeRect(18,18,Q-36,ht-36),j.textAlign="center",j.fillStyle="#f4d98a",j.font="bold 34px Georgia, serif",j.fillText("MY SNOOKER \xB7 LIGA",Q/2,82);let Rt=L&&L.registered,Kt=L&&L.player||{};if(j.fillStyle="#fff4e6",!Rt)j.font="bold 58px Georgia, serif",j.fillText("Registr\xE1cia",Q/2,190),j.fillText("do ligy",Q/2,256),j.font="28px Arial, sans-serif",j.fillStyle="#f4d98a",j.fillText(L&&L.season?L.season.name+" \xB7 klikni a vypl\u0148":"klikni a vypl\u0148",Q/2,330);else{let Wt=L.me||{};j.font="bold 56px Georgia, serif",j.fillText(String(Kt.nick||st||"").slice(0,20),Q/2,190),j.font="32px Arial, sans-serif",j.fillText([F,Kt.city].filter(Boolean).join(", "),Q/2,248),j.fillStyle="#f4d98a",j.font="bold 34px Arial, sans-serif",j.fillText(Wt.league?`${Wt.league}. liga \xB7 ${Wt.rank}. miesto \xB7 ${Wt.points} b.`:"",Q/2,320)}mt.t.needsUpdate=!0};return Yt(null,"",""),ot(null,[]),$([],0),{root:t,map:W,MAP:T,seat:{pos:new C(sn,be+1.25,x+.75),look:new C(sn,be+.85,-Ue)},card:et,setCard:Yt,door:bt,setDoor:gt,toggleWindow:D,updateWindow:tt,speakers:Bt,views:{help:{pos:new C(sn+.25,be+1.62,Ue-1.75),look:new C(sn+.25,be+1.6,Ue)},calendar:{pos:new C(sn-.45,y+.34,x+.12),look:new C(sn-.6,y+.07,x-.25)},results:{pos:new C(sn,be+1.6,-Ue+3.7),look:new C(sn,be+1.6,-Ue)},map:{pos:new C(sn-rn+2.7,T.y,0),look:new C(sn-rn,T.y,0)},rack:{pos:new C(sn+rn-3.3,be+1.1,-.2),look:new C(sn+rn,be+.62,-.2)},notebook:{pos:new C(sn-.15,y+.36,x+.2),look:new C(sn-.15,y+.12,x-.2)}},results:M,setBoards:ot,setMap:$,setRack:X,mapLonLat(L){let st=W.worldToLocal(L.clone()),F=st.x/T.w+.5,j=.5-st.y/T.h;return{lon:F*360-180,lat:90-j*180}}}}var wc=[["SK","Slovensko",48.7,19.7],["CZ","\u010Cesko",49.8,15.5],["HU","Ma\u010Farsko",47.2,19.5],["PL","Po\u013Esko",52,19.4],["AT","Rak\xFAsko",47.5,14.6],["DE","Nemecko",51.2,10.4],["UA","Ukrajina",49,31.4],["GB","Spojen\xE9 kr\xE1\u013Eovstvo",54,-2.5],["IE","\xCDrsko",53.2,-8],["FR","Franc\xFAzsko",46.6,2.4],["ES","\u0160panielsko",40.2,-3.7],["PT","Portugalsko",39.6,-8],["IT","Taliansko",42.8,12.6],["CH","\u0160vaj\u010Diarsko",46.8,8.2],["NL","Holandsko",52.2,5.3],["BE","Belgicko",50.6,4.6],["LU","Luxembursko",49.8,6.1],["DK","D\xE1nsko",56,9.5],["NO","N\xF3rsko",61.5,9],["SE","\u0160v\xE9dsko",62,15],["FI","F\xEDnsko",64,26],["IS","Island",64.9,-18.6],["EE","Est\xF3nsko",58.6,25],["LV","Loty\u0161sko",56.9,24.6],["LT","Litva",55.3,23.9],["SI","Slovinsko",46.1,14.8],["HR","Chorv\xE1tsko",45.1,15.2],["BA","Bosna a Hercegovina",44.2,17.8],["RS","Srbsko",44,20.9],["ME","\u010Cierna Hora",42.7,19.4],["MK","Severn\xE9 Maced\xF3nsko",41.6,21.7],["AL","Alb\xE1nsko",41.2,20.2],["GR","Gr\xE9cko",39.1,22],["BG","Bulharsko",42.7,25.5],["RO","Rumunsko",45.9,25],["MD","Moldavsko",47.4,28.4],["TR","Turecko",39,35.2],["CY","Cyprus",35.1,33.4],["MT","Malta",35.9,14.4],["US","Spojen\xE9 \u0161t\xE1ty",39.8,-98.6],["CA","Kanada",56.1,-106.3],["MX","Mexiko",23.6,-102.6],["BR","Braz\xEDlia",-14.2,-51.9],["AR","Argent\xEDna",-38.4,-63.6],["CL","\u010Cile",-35.7,-71.5],["CO","Kolumbia",4.6,-74.3],["PE","Peru",-9.2,-75],["ZA","Ju\u017En\xE1 Afrika",-30.6,22.9],["EG","Egypt",26.8,30.8],["MA","Maroko",31.8,-7.1],["NG","Nig\xE9ria",9.1,8.7],["KE","Ke\u0148a",-0,37.9],["IL","Izrael",31,34.9],["AE","Spojen\xE9 arabsk\xE9 emir\xE1ty",23.4,53.8],["SA","Saudsk\xE1 Ar\xE1bia",23.9,45.1],["IN","India",20.6,79],["PK","Pakistan",30.4,69.3],["CN","\u010C\xEDna",35.9,104.2],["HK","Hongkong",22.3,114.2],["TH","Thajsko",15.9,100.9],["MY","Malajzia",4.2,101.9],["SG","Singapur",1.35,103.8],["VN","Vietnam",14.1,108.3],["PH","Filip\xEDny",12.9,121.8],["ID","Indon\xE9zia",-.8,113.9],["JP","Japonsko",36.2,138.3],["KR","Ju\u017En\xE1 K\xF3rea",35.9,127.8],["AU","Austr\xE1lia",-25.3,133.8],["NZ","Nov\xFD Z\xE9land",-40.9,174.9],["RU","Rusko",61.5,105.3]];function Xo(s){let t=wc.find(e=>e[0]===s);return t?{code:t[0],name:t[1],lat:t[2],lon:t[3]}:null}function Wy(s,t){let e=document.createElement("canvas");e.width=256,e.height=128;let n=e.getContext("2d"),i="#"+s.toString(16).padStart(6,"0");n.fillStyle=i,n.fillRect(0,0,256,128);let r=t==="white"?"rgba(180,30,40,0.85)":t==="black"?"rgba(255,255,255,0.22)":"rgba(255,255,255,0.35)";n.fillStyle=r;for(let[a,l]of[[64,64],[192,64]])n.beginPath(),n.arc(a,l,t==="white"?7:5,0,Math.PI*2),n.fill();let o=new _e(e);return o.colorSpace=ce,o}function Xy(){let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.75)"),e.addColorStop(.45,"rgba(0,0,0,0.35)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new _e(s)}var $o=class{constructor(t,e,n,i=null){this.scene=t,this.items=[];let r=n==="high"?64:32,o=new Fe(.02625,r,Math.round(r*.75)),a={},l=new ie(.02625*2.6,.02625*2.6),h=new we({map:Xy(),transparent:!0,depthWrite:!1,opacity:.6});for(let f of e){a[f.kind]||(a[f.kind]=new Ao({map:Wy(Yn[f.kind].color,f.kind),roughness:.12,metalness:0,clearcoat:1,clearcoatRoughness:.05,envMap:i,envMapIntensity:.55}));let g=new Dt(o,a[f.kind]),x=new Dt(l,h);x.rotation.x=-Math.PI/2,x.renderOrder=1,t.add(x),g.castShadow=!0,g.receiveShadow=!1,g.userData.ball=f,g.quaternion.setFromEuler(new En(Math.random()*6,Math.random()*6,Math.random()*6)),t.add(g),this.items.push({ball:f,mesh:g,blob:x,drop:0})}let c=new ue(16765503);this.outline=new Dt(new Fe(.02625*1.12,32,24),new we({color:c,side:Ve,transparent:!0,opacity:.9,depthWrite:!1})),this.ring=new Dt(new Bs(.02625*1.25,.02625*1.55,48),new we({color:c,transparent:!0,opacity:.75,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.outline.visible=this.ring.visible=!1,this.arrow=new re;let u=new _t({color:16777215,transparent:!0,opacity:.55,depthWrite:!1,roughness:.4}),d=new Dt(new Os(.02625*.38,.02625*1.3,24),u);d.rotation.z=-Math.PI/2,d.position.x=.02625*1.9,this.arrow.add(d),this.arrow.visible=!1,this.arrow.renderOrder=3,this.arrowMat=u,t.add(this.arrow),this.outline.renderOrder=this.ring.renderOrder=2,t.add(this.outline,this.ring),this._hlT=0,this._q=new ln,this._axis=new C}update(t){for(let e of this.items){let n=e.ball,i=e.mesh;if(n.on){e.drop=0,i.visible=!0,i.position.set(n.p.x,.02625,n.p.z),e.blob.visible=!0,e.blob.position.set(n.p.x,6e-4,n.p.z);let r=Math.hypot(n.w.x,n.w.y,n.w.z);r>.001&&n.moving&&(this._axis.set(n.w.x/r,n.w.y/r,n.w.z/r),this._q.setFromAxisAngle(this._axis,r*t),i.quaternion.premultiply(this._q))}else if(n.potted){e.blob.visible=!1,e.drop=Math.min(1,e.drop+t*3);let r=e.drop;i.position.x+=(n.potted.x-i.position.x)*Math.min(1,t*12),i.position.z+=(n.potted.z-i.position.z)*Math.min(1,t*12),i.position.y=.02625-r*r*.12,i.visible=r<1}else i.visible=!1,e.blob.visible=!1}}highlight(t,e,n=null){let i=!!(t&&t.on);if(this.outline.visible=this.ring.visible=i,this.arrow.visible=i&&!!n,!i)return;if(n){let o=Math.atan2(t.p.z-n.z,t.p.x-n.x);this.arrow.position.set(t.p.x+Math.cos(o)*.02625*.6,.02625,t.p.z+Math.sin(o)*.02625*.6),this.arrow.rotation.set(0,-o,0),this.arrowMat.color.setHex(t.kind==="black"?5592405:Yn[t.kind].color)}this._hlT+=e;let r=.5+.5*Math.sin(this._hlT*5);this.outline.position.set(t.p.x,.02625,t.p.z),this.ring.position.set(t.p.x,.0012,t.p.z),this.outline.material.opacity=.55+.35*r,this.ring.material.opacity=.45+.4*r}meshOf(t){return this.items.find(e=>e.ball===t)?.mesh||null}};var $y=qn.degToRad(4),qy=qn.degToRad(40),Yy=.049+.004,Du=.17;function ku(s,t,e,n,i,r){let o=1/0;return e>1e-6&&(o=Math.min(o,(i-s)/e)),e<-1e-6&&(o=Math.min(o,(-i-s)/e)),n>1e-6&&(o=Math.min(o,(r-t)/n)),n<-1e-6&&(o=Math.min(o,(-r-t)/n)),Math.max(0,o)}var qo=class{constructor(t,e){this.pivot=new re,t.add(this.pivot),this.setSpec(e)}setSpec(t){this.group&&(this.pivot.remove(this.group),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})),this.spec=t,this.group=qs(t),this.pivot.add(this.group)}place(t,e,n,i,r,o){if(this.pivot.visible=o,!o)return;let a=Math.cos(e),l=Math.sin(e),h=-l,c=a,u=.012+n*.28,d=t.p.x-a*(.02625+u)+h*i*.5*.02625,f=t.p.z-l*(.02625+u)+c*i*.5*.02625,g=.02625+r*.5*.02625,x=ku(d,f,-a,-l,3.569/2,1.778/2),y=ku(d,f,-a,-l,3.569/2+Du,1.778/2+Du),p=this.spec.len||1.45,E=U=>.0048+(.0145-.0048)*Math.min(U,p)/p,S=$y;for(;S<qy&&![x,y].every(N=>N>p||g+N*Math.sin(S)>=Yy+E(N)/Math.cos(S));S+=.005);this.tilt=this.tilt===void 0?S:this.tilt+(S-this.tilt)*.25;let _=this.tilt,z=g+u*Math.tan(_);this.pivot.position.set(d,z,f);let P=new C(-a*Math.cos(_),Math.sin(_),-l*Math.cos(_));this.pivot.quaternion.setFromUnitVectors(new C(0,1,0),P)}},Yo=class{constructor(t){let e=(n,i)=>new pr({color:n,transparent:!0,opacity:i,depthWrite:!1});this.line=new Ns(new ze().setFromPoints([new C,new C]),e(16777215,.55)),this.objLine=new Ns(new ze().setFromPoints([new C,new C]),e(16769674,.8)),this.cueLine=new Ns(new ze().setFromPoints([new C,new C]),e(10474495,.55)),this.ghost=new Dt(new Fe(.02625,24,16),new we({color:16777215,wireframe:!0,transparent:!0,opacity:.35,depthWrite:!1})),t.add(this.line,this.objLine,this.cueLine,this.ghost)}set(t,e){let n=e.geometry.attributes.position;for(let i=0;i<2;i++)n.setXYZ(i,t[i].x,.02625*.35,t[i].z);n.needsUpdate=!0,e.geometry.computeBoundingSphere()}update(t,e,n,i,r=2){let o=i&&r>0;if(this.line.visible=this.ghost.visible=o,this.objLine.visible=this.cueLine.visible=o&&r>1,!o)return null;let a=Bo(t,e,n);if(this.set([e.p,a.ghost],this.line),this.ghost.position.set(a.ghost.x,.02625,a.ghost.z),a.ball&&r>1){let l=a.ball.p.x-a.ghost.x,h=a.ball.p.z-a.ghost.z,c=Math.hypot(l,h)||1,u=l/c,d=h/c,f=Math.cos(n)*u+Math.sin(n)*d,g=.18+.5*f;this.set([a.ball.p,{x:a.ball.p.x+u*g,z:a.ball.p.z+d*g}],this.objLine);let x=Math.cos(n)-f*u,y=Math.sin(n)-f*d,p=Math.hypot(x,y);if(p>.001){x/=p,y/=p;let E=.08+.4*(1-f);this.set([a.ghost,{x:a.ghost.x+x*E,z:a.ghost.z+y*E}],this.cueLine)}else this.cueLine.visible=!1}else this.objLine.visible=this.cueLine.visible=!1;return a}};var Uu={type:"change"},Ac={type:"start"},zu={type:"end"},jo=new Gi,Nu=new yn,jy=Math.cos(70*qn.DEG2RAD),Ke=new C,un=2*Math.PI,Pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tc=1e-6,Zo=class extends Io{constructor(t,e=null){super(t,e),this.state=Pe.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fn.ROTATE,MIDDLE:Fn.DOLLY,RIGHT:Fn.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new ln,this._lastTargetPosition=new C,this._quat=new ln().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new br,this._sphericalDelta=new br,this._scale=1,this._panOffset=new C,this._rotateStart=new wt,this._rotateEnd=new wt,this._rotateDelta=new wt,this._panStart=new wt,this._panEnd=new wt,this._panDelta=new wt,this._dollyStart=new wt,this._dollyEnd=new wt,this._dollyDelta=new wt,this._dollyDirection=new C,this._mouse=new wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ky.bind(this),this._onPointerDown=Zy.bind(this),this._onPointerUp=Jy.bind(this),this._onContextMenu=rx.bind(this),this._onMouseWheel=ex.bind(this),this._onKeyDown=nx.bind(this),this._onTouchStart=ix.bind(this),this._onTouchMove=sx.bind(this),this._onMouseDown=Qy.bind(this),this._onMouseMove=tx.bind(this),this._interceptControlDown=ox.bind(this),this._interceptControlUp=ax.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uu),this.update(),this.state=Pe.NONE}update(t=null){let e=this.object.position;Ke.copy(e).sub(this.target),Ke.applyQuaternion(this._quat),this._spherical.setFromVector3(Ke),this.autoRotate&&this.state===Pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=un:n>Math.PI&&(n-=un),i<-Math.PI?i+=un:i>Math.PI&&(i-=un),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ke.setFromSpherical(this._spherical),Ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ke.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let h=new C(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=Ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(jo.origin.copy(this.object.position),jo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(jo.direction))<jy?this.object.lookAt(this.target):(Nu.setFromNormalAndCoplanarPoint(this.object.up,this.target),jo.intersectPlane(Nu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Tc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tc||this._lastTargetPosition.distanceToSquared(this.target)>Tc?(this.dispatchEvent(Uu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?un/60*this.autoRotateSpeed*t:un/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ke.setFromMatrixColumn(e,0),Ke.multiplyScalar(-t),this._panOffset.add(Ke)}_panUp(t,e){this.screenSpacePanning===!0?Ke.setFromMatrixColumn(e,1):(Ke.setFromMatrixColumn(e,0),Ke.crossVectors(this.object.up,Ke)),Ke.multiplyScalar(t),this._panOffset.add(Ke)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Ke.copy(i).sub(this.target);let r=Ke.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(un*this._rotateDelta.x/e.clientHeight),this._rotateUp(un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(un*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-un*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(un*this._rotateDelta.x/e.clientHeight),this._rotateUp(un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Zy(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Ky(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Jy(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zu),this.state=Pe.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Qy(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Fn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Pe.DOLLY;break;case Fn.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Pe.ROTATE}break;case Fn.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Pe.PAN}break;default:this.state=Pe.NONE}this.state!==Pe.NONE&&this.dispatchEvent(Ac)}function tx(s){switch(this.state){case Pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function ex(s){this.enabled===!1||this.enableZoom===!1||this.state!==Pe.NONE||(s.preventDefault(),this.dispatchEvent(Ac),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(zu))}function nx(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function ix(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Pe.TOUCH_ROTATE;break;case Ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Pe.TOUCH_PAN;break;default:this.state=Pe.NONE}break;case 2:switch(this.touches.TWO){case Ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Pe.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Pe.TOUCH_DOLLY_ROTATE;break;default:this.state=Pe.NONE}break;default:this.state=Pe.NONE}this.state!==Pe.NONE&&this.dispatchEvent(Ac)}function sx(s){switch(this._trackPointer(s),this.state){case Pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Pe.NONE}}function rx(s){this.enabled!==!1&&s.preventDefault()}function ox(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ax(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ko=class{constructor(t){this.camera=new tn(45,1,.01,40),this.camera.position.set(-3,1.6,0),this.orbit=new Zo(this.camera,t.domElement),this.orbit.enableDamping=!0,this.orbit.maxPolarAngle=Math.PI/2-.05,this.orbit.minDistance=.3,this.orbit.maxDistance=4,this.orbit.target.set(0,0,0),this.orbit.enabled=!1,this.mode="cue",this.zoom=1,this.height=.22,this._pos=new C,this._look=new C,this._curLook=new C(0,0,0),this.panOffset=new C,this.followYaw=0,this.followH=.55,this._wasMoving=!1,this.aimPoint=null,this.orbit.mouseButtons={LEFT:Fn.ROTATE,MIDDLE:Fn.PAN,RIGHT:Fn.PAN}}pan(t,e){let n=this.camera.matrixWorld.elements,i=.0018*(this.mode==="top"?2:1);this.panOffset.x+=(n[0]*t-n[4]*e)*i,this.panOffset.y+=(n[1]*t-n[5]*e)*i,this.panOffset.z+=(n[2]*t-n[6]*e)*i,this.mode==="top"&&(this.panOffset.y=0),this.panOffset.y=Math.max(-.15,Math.min(1.5,this.panOffset.y)),this.panOffset.clampLength(0,3)}resetPan(){this.panOffset.set(0,0,0)}turn(t,e){this.followYaw+=t*.004,this.followH=Math.max(.12,Math.min(1.8,this.followH+e*.003))}setMode(t){this.mode=t,this.resetPan(),t==="top"?(this.camera.layers.disable(1),this.camera.layers.disable(2)):(this.camera.layers.enable(1),this.camera.layers.enable(2)),this.orbit.enabled=t==="free",t==="free"&&this.orbit.target.copy(this._curLook)}setView(t,e){this.setMode("view"),this.viewPos=t,this.viewLook=e}resize(t,e){this.camera.aspect=t/e,this.baseFov=t/e<1?62:45,this.camera.fov=this.baseFov/(this.viewZoom||1),this.camera.updateProjectionMatrix()}jump(){this.camera.position.copy(this.viewPos),this._curLook.copy(this.viewLook),this.camera.lookAt(this._curLook)}setViewZoom(t){this.viewZoom=Math.min(5,Math.max(this.minViewZoom||1,t)),this.camera.fov=(this.baseFov||45)/this.viewZoom,this.camera.updateProjectionMatrix()}update(t,e,n,i){if(this.mode==="free"){this.orbit.update(),vc(this.camera.position),this._curLook.copy(this.orbit.target),this.camera.position.y>1.5?this.camera.layers.disable(1):this.camera.layers.enable(1);return}let r=this._pos,o=this._look;if(this.mode==="view")this.camera.up.set(0,1,0),r.copy(this.viewPos),o.copy(this.viewLook);else if(this.mode==="top"){let l=this.camera.aspect,h=qn.degToRad(this.camera.fov),c=(1.778+.5)/2/Math.tan(h/2),u=(3.569+.5)/2/Math.tan(h/2)/l;if(l>=1)r.set(0,Math.max(c,u),1e-4),this.camera.up.set(0,0,-1);else{let d=(3.569+.5)/2/Math.tan(h/2),f=(1.778+.5)/2/Math.tan(h/2)/l;r.set(1e-4,Math.max(d,f),0),this.camera.up.set(1,0,0)}o.set(0,0,0)}else if(i&&this.mode!=="view"){this.camera.up.set(0,1,0);let l=Math.cos(this.followYaw),h=Math.sin(this.followYaw),c=.9/this.zoom+this.followH*.4;r.set(e.p.x-l*c,this.followH,e.p.z-h*c),o.set(e.p.x+l*.15,0,e.p.z+h*.15)}else{this.camera.up.set(0,1,0);let l=Math.cos(n),h=Math.sin(n),c=.62/this.zoom,u=this.height/this.zoom+.06,d=Math.tan(this.cueTilt||0)*c+.15;r.set(e.p.x-l*c,Math.max(u,d),e.p.z-h*c),o.set(e.p.x+l*.55,0,e.p.z+h*.55)}i&&!this._wasMoving&&this.mode!=="view"&&(this.followYaw=n,this.followH=.55,this.resetPan()),this._wasMoving=i,this.mode==="top"?(r.add(this.panOffset),o.add(this.panOffset)):!i&&this.mode!=="view"&&this.panOffset.lengthSq()>1e-8&&(r.add(this.panOffset),this.aimPoint?o.copy(this.aimPoint):o.add(this.panOffset)),this.mode!=="top"&&!this.noClamp&&vc(r);let a=this.snapNext?1:1-Math.exp(-t*(this.mode==="view"||i?4:7));this.snapNext=!1,this.camera.position.lerp(r,a),this._curLook.lerp(o,a),this.camera.lookAt(this._curLook),this.camera.position.y>Ge.ceil-.05?this.camera.layers.disable(2):this.mode!=="top"&&this.camera.layers.enable(2),this.mode!=="top"&&(this.camera.position.y>1.5?this.camera.layers.disable(1):this.camera.layers.enable(1))}};var Jo=class{constructor(t,e,n,i){this.dom=t,this.rig=e,this.game=n,this.hooks=i,this.power=0,this.charging=!1,this.fine=!1,this._ray=new Zi,this._plane=new yn(new C(0,1,0),-.02625),this._v2=new wt,this._hit=new C,this._drag=null,this._keys=new Set,this._spaceT=0,this.stroking=!1,this.spinning=!1,this.blocked=!1,this.cueSpec={fine:0,len:1.45},this.strokePx=380,this.strokePull=0,this._hist=[],t.addEventListener("mousemove",r=>this.mouseMove(r)),this.panning=!1,t.addEventListener("mousedown",r=>{r.button===1&&r.preventDefault()}),this._ignoreUntil=0,document.addEventListener("pointerlockchange",()=>{this._ignoreUntil=performance.now()+60,this.hooks.lock&&this.hooks.lock(this.captured)}),t.addEventListener("pointerdown",r=>this.down(r)),window.addEventListener("pointermove",r=>this.move(r)),window.addEventListener("pointerup",r=>this.up(r)),window.addEventListener("pointercancel",r=>this.up(r)),t.addEventListener("wheel",r=>this.wheel(r),{passive:!1}),t.addEventListener("contextmenu",r=>r.preventDefault()),window.addEventListener("keydown",r=>this.key(r,!0)),window.addEventListener("keyup",r=>this.key(r,!1))}tablePoint(t){let e=this.dom.getBoundingClientRect();return this._v2.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),this._ray.setFromCamera(this._v2,this.rig.camera),this._ray.ray.intersectPlane(this._plane,this._hit)}aimAt(t){let e=this.game.cue;Math.hypot(t.x-e.p.x,t.z-e.p.z)>.01&&(this.game.dir=Math.atan2(t.z-e.p.z,t.x-e.p.x))}down(t){this.hooks.unlock();let e=this.game;if(this.blocked){this.hooks.viewDown&&this.hooks.viewDown(t);return}if(t.pointerType==="mouse"&&t.button===2){this.rig.mode!=="free"&&(this.panning=!0,this.capture());return}if(t.pointerType==="mouse"&&t.button===1){let n=performance.now();if(n-(this._midT||0)<350){this._midT=0,this.spinning=!1,this.hooks.spinReset&&this.hooks.spinReset();return}this._midT=n}if(e.state==="place"&&this.captured){t.button===0&&(e.confirmPlace(),e.aimAtNearest());return}if(e.state==="place"){let n=this.tablePoint(t);n&&e.movePlace(n.x,n.z),this._drag={kind:"place",id:t.pointerId};return}if(e.state==="aim"){if(t.pointerType==="mouse"){if(t.button===0&&this.rig.mode!=="free"){this.captured?this.startStroke():this.capture();return}if(t.button===1){this.spinning=!0,this.capture();return}}if(this.rig.mode==="free"){this._tap={id:t.pointerId,x:t.clientX,y:t.clientY,t:performance.now()};return}if(this.rig.mode==="top"){let n=this.tablePoint(t);n&&this.aimAt(n),this._drag={kind:"aimTop",id:t.pointerId}}else this._drag={kind:"aimCue",id:t.pointerId,x:t.clientX,dir:e.dir};try{this.dom.setPointerCapture(t.pointerId)}catch{}}}move(t){let e=this._drag;if(!e||e.id!==t.pointerId)return;let n=this.game;if(e.kind==="place"){let i=this.tablePoint(t);i&&n.movePlace(i.x,i.z)}else if(e.kind==="aimTop"){let i=this.tablePoint(t);i&&this.aimAt(i)}else if(e.kind==="aimCue"){let i=t.shiftKey||this.fine?15e-5:.0016;n.dir=e.dir+(t.clientX-e.x)*i}}up(t){t.pointerType==="mouse"&&t.button===0&&this.stroking&&this.endStroke(),t.pointerType==="mouse"&&t.button===1&&(this.spinning=!1),t.pointerType==="mouse"&&t.button===2&&(this.panning=!1,this.rig.resetPan());let e=this._tap;if(e&&e.id===t.pointerId&&(this._tap=null,Math.hypot(t.clientX-e.x,t.clientY-e.y)<6&&performance.now()-e.t<350&&this.game.state==="aim")){let n=this.tablePoint(t);n&&this.aimAt(n)}this._drag&&this._drag.id===t.pointerId&&(this._drag=null)}setCue(t){this.cueSpec=t,this.strokePx=Su(t)}get captured(){return document.pointerLockElement===this.dom}capture(){if(!(this.captured||!this.dom.requestPointerLock))try{let t=this.dom.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}uncapture(){this.captured&&document.exitPointerLock()}mouseMove(t){let e=this.game;if(this.blocked){this.hooks.look&&performance.now()>=this._ignoreUntil&&Math.abs(t.movementX||0)<200&&Math.abs(t.movementY||0)<200&&this.hooks.look(t.movementX||0,t.movementY||0);return}if(performance.now()<this._ignoreUntil||Math.abs(t.movementX||0)>200||Math.abs(t.movementY||0)>200)return;if(this.stroking){this.strokeMove(t.movementY||0);return}if(this.panning){this.rig.pan(t.movementX||0,t.movementY||0);return}if(e.spectating&&this.rig.mode==="cue"&&(t.buttons&3)===0){this.rig.turn(t.movementX||0,t.movementY||0);return}if(e.state==="moving"&&this.rig.mode==="cue"&&(t.buttons&3)===0){this.rig.turn(t.movementX||0,t.movementY||0);return}if(this.spinning){this.hooks.spin&&this.hooks.spin((t.movementX||0)/160,-(t.movementY||0)/160);return}if(e.state==="place"&&this.captured){this.placeMove(t.movementX||0,t.movementY||0);return}if((t.buttons&3)!==0||e.state!=="aim"||!this.captured)return;let n=t.movementX||0;if(!n)return;let i=t.shiftKey&&this.cueSpec.fine>0,r=i?this.cueSpec.fine:5e-4,o=i?1:1+Math.min(6,Math.abs(n)/6);e.dir+=n*r*o}placeMove(t,e){let n=this.rig.camera.matrixWorld.elements,i=n[0],r=n[2],o=n[4],a=n[6];Math.hypot(o,a)<.2&&(o=-n[8],a=-n[10]);let l=Math.hypot(i,r)||1,h=Math.hypot(o,a)||1;i/=l,r/=l,o/=h,a/=h;let c=.0012,u=this.game.cue;this.game.movePlace(u.p.x+(t*i-e*o)*c,u.p.z+(t*r-e*a)*c)}startStroke(){this.game.canShoot()&&(this.stroking=!0,this._ignoreUntil=performance.now()+60,this.strokePull=0,this._max=0,this._hist=[{t:performance.now(),p:0}],this.capture(),this.hooks.stroke&&this.hooks.stroke(!0))}endStroke(){this.stroking=!1,this.strokePull=0,this.power=0,this.hooks.stroke&&this.hooks.stroke(!1)}strokeMove(t){if(!this.stroking||!this.game.canShoot())return;let e=performance.now(),n=this.strokePull;for(this.strokePull=Math.max(-.02,Math.min(1,n+t/this.strokePx)),this._max=Math.max(this._max,this.strokePull),this._hist.push({t:e,p:this.strokePull});this._hist.length>2&&e-this._hist[0].t>80;)this._hist.shift();let i=this.strokeSpeed();if(this.power=Math.max(0,Math.min(1,i)),this.strokePull<=.004&&n>.004&&this._max>.02&&t<0){let r=Math.max(.03,Math.min(1,i));this.endStroke(),this.hooks.shoot(r)}}strokeSpeed(){let t=this._hist;if(t.length<2)return 0;let e=0;for(let a=1;a<t.length;a++)t[a].p>=t[e].p&&(e=a);let n=t[e],i=t[t.length-1];if(n===i)return 0;let r=Math.max(.008,(i.t-n.t)/1e3),o=(n.p-i.p)/r;return Math.max(0,o*.28*2/7)}wheel(t){if(this.blocked&&this.hooks.viewWheel){t.preventDefault(),this.hooks.viewWheel(Math.max(-4,Math.min(4,t.deltaY/(t.deltaMode===1?3:100))));return}if(this.rig.mode!=="cue")return;t.preventDefault();let e=Math.max(-4,Math.min(4,t.deltaY/(t.deltaMode===1?3:100)));this.rig.zoom=Math.min(6,Math.max(.3,this.rig.zoom*Math.pow(.82,e)))}key(t,e){if(t.target&&/input|textarea|select/i.test(t.target.tagName))return;let n=this.game,i=t.key;if(e?this._keys.add(i):this._keys.delete(i),i==="Control"){e&&!t.repeat?this.hooks.key&&this.hooks.key("ctrl-down",t):e||this.hooks.key&&this.hooks.key("ctrl-up",t);return}if(i===" "){if(t.preventDefault(),this.blocked)return;e&&!this.charging&&n.canShoot()?(this.hooks.unlock(),this.charging=!0,this._spaceT=0):!e&&this.charging&&this.release();return}e&&(i==="Enter"&&n.state==="place"?n.confirmPlace():i==="Escape"&&(this.charging||this.stroking)?(this.charging=!1,this.power=0,this.stroking&&this.endStroke()):this.hooks.key&&this.hooks.key(i,t)&&t.preventDefault())}setPower(t,e){this.power=Math.max(0,Math.min(1,t)),this.charging=e}release(){let t=this.power;this.charging=!1,this.power=0,t>.02&&this.hooks.shoot(t)}update(t){let e=this.game;if(e.state==="aim"&&!this.blocked){let i=this._keys.has("Shift")&&this.cueSpec.fine>0?.015:.35;this._keys.has("ArrowLeft")&&(e.dir-=i*t),this._keys.has("ArrowRight")&&(e.dir+=i*t)}if(this.stroking&&e.state!=="aim"&&this.endStroke(),this.stroking&&this._hist.length&&performance.now()-this._hist[this._hist.length-1].t>120&&(this.power*=Math.exp(-t*8)),this.charging&&this._keys.has(" ")){this._spaceT+=t;let n=this._spaceT/1.6%2;this.power=n<1?n:2-n}}};var Qo=class{constructor(){this.ctx=null,this.enabled=!0,this.volume=.8,this._last=0,this._count=0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t){this.enabled=!1;return}this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination);let e=Math.floor(this.ctx.sampleRate*.05);this.noise=this.ctx.createBuffer(1,e,this.ctx.sampleRate);let n=this.noise.getChannelData(0);for(let i=0;i<e;i++)n[i]=(Math.random()*2-1)*Math.pow(1-i/e,3)}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}_allow(){let t=this.ctx.currentTime;return t-this._last>.03&&(this._count=0),this._last=t,this._count++,this._count<=4}_tone(t,e,n,i="sine",r=.5){let o=this.ctx.currentTime,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type=i,a.frequency.setValueAtTime(t,o),a.frequency.exponentialRampToValueAtTime(Math.max(20,t*r),o+e),l.gain.setValueAtTime(n,o),l.gain.exponentialRampToValueAtTime(1e-4,o+e),a.connect(l).connect(this.master),a.start(o),a.stop(o+e+.02)}_click(t,e,n,i=1){let r=this.ctx.currentTime,o=this.ctx.createBufferSource();o.buffer=this.noise,o.playbackRate.value=i;let a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.value=t,a.Q.value=e;let l=this.ctx.createGain();l.gain.value=n,o.connect(a).connect(l).connect(this.master),o.start(r)}_ok(){return this.enabled&&this.ctx&&this.ctx.state==="running"}ball(t){if(!this._ok()||t<.02||!this._allow())return;let e=Math.min(1,t/4);this._click(3800+Math.random()*600,6,.25+e*1.6,1.2),this._tone(2600+Math.random()*300,.04,.05+e*.25,"triangle",.8)}cushion(t){if(!this._ok()||t<.05||!this._allow())return;let e=Math.min(1,t/4);this._tone(120,.12,.1+e*.45,"sine",.6),this._click(700,2,.1+e*.4,.6)}pot(){this._ok()&&(this._tone(90,.25,.5,"sine",.5),setTimeout(()=>this._ok()&&this._click(1200,3,.25,.5),90),setTimeout(()=>this._ok()&&this._click(900,3,.18,.5),170))}doorCreak(){if(!this._ok())return;let t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createBiquadFilter(),i=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(420,t);for(let r=1;r<=8;r++)e.frequency.linearRampToValueAtTime(380+Math.random()*260,t+r*.1);n.type="bandpass",n.frequency.value=900,n.Q.value=6,i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.12,t+.08),i.gain.setValueAtTime(.12,t+.6),i.gain.exponentialRampToValueAtTime(1e-4,t+.85),e.connect(n).connect(i).connect(this.master),e.start(t),e.stop(t+.9)}doorShut(){this._ok()&&(this._tone(70,.35,.9,"sine",.5),this._click(500,1.5,.8,.5),setTimeout(()=>this._ok()&&this._click(2500,4,.25,1),40))}cue(t){this._ok()&&(this._click(1800,3,.3+t*1.2,.9),this._tone(600,.05,.05+t*.15,"triangle",.6))}};var oe=s=>String(s||"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),dt=(s,t,e)=>{let n=document.createElement(s);return t&&(n.className=t),e!==void 0&&(n.innerHTML=e),n},ta=class{constructor(t,e){this.root=t,this.opts=e,this.side=0,this.top=0,t.classList.add("mysn-ui");let n=dt("div","mysn-bar");n.appendChild(dt("div","mysn-brand",`<a href="${e.homeUrl||"/"}" class="mysn-home" title="Sp\xE4\u0165 na web">My Snooker</a><span>Tr\xE9ning</span>`)),this.modeLabel=n.querySelector(".mysn-brand span"),this.stats=dt("div","mysn-stats"),n.appendChild(this.stats);let i=dt("div","mysn-barbtns");this.btnHelp=this.button("?","help","Ovl\xE1danie"),this.btnSet=this.button("Nastavenia","settings"),i.append(this.btnSet,this.btnHelp),n.appendChild(i),t.appendChild(n),this.msg=dt("div","mysn-msg"),t.appendChild(this.msg),this.hint=dt("div","mysn-hint",""),t.appendChild(this.hint),this.setLock(!1),this.powerBox=dt("div","mysn-power",'<div class="mysn-power-label">Sila</div><div class="mysn-power-track"><div class="mysn-power-fill"></div><div class="mysn-power-knob"></div></div><div class="mysn-power-val">0 %</div>'),t.appendChild(this.powerBox),this.powerTrack=this.powerBox.querySelector(".mysn-power-track"),this.powerFill=this.powerBox.querySelector(".mysn-power-fill"),this.powerKnob=this.powerBox.querySelector(".mysn-power-knob"),this.powerVal=this.powerBox.querySelector(".mysn-power-val"),this.bindPower(),this.spinBox=dt("div","mysn-spin",'<div class="mysn-spin-ball"><div class="mysn-spin-dot"></div></div><div class="mysn-spin-label">Miesto \xFAderu</div>'),t.appendChild(this.spinBox),this.spinBall=this.spinBox.querySelector(".mysn-spin-ball"),this.spinDot=this.spinBox.querySelector(".mysn-spin-dot"),this.bindSpin();let r=dt("div","mysn-tools");this.camBtns={};let o=dt("div","mysn-group");this.btnUndo=this.button("Sp\xE4\u0165","undo","Vr\xE1ti\u0165 posledn\xFD \xFAder (Z)"),this.btnHand=this.button("Biela do ruky","hand","Polo\u017Ei\u0165 bielu kamko\u013Evek v D (B)"),this.btnSkip=this.button("Presko\u010Di\u0165","skip","Dokon\u010Di\u0165 \xFAder hne\u010F"),this.btnReset=this.button("Nov\xE9 rozostavenie","reset","Nov\xE9 rozostavenie (R)"),this.btnPlace=this.button("Hotovo","place","Potvrdi\u0165 polohu bielej (Enter)"),this.btnPlace.classList.add("mysn-primary"),o.append(this.btnPlace,this.btnUndo,this.btnHand,this.btnSkip,this.btnReset),r.appendChild(o),t.appendChild(r),this.menu=this.buildMenu(),this.setMenu(e.user?"training":"guest"),t.appendChild(this.menu),this.panel=this.buildSettings(e.settings),t.appendChild(this.panel),this.contact=dt("div","mysn-contact mysn-hidden",'<canvas></canvas><div class="mysn-contact-info"></div>'),t.appendChild(this.contact),this.contactCanvas=this.contact.querySelector("canvas"),this.contactInfo=this.contact.querySelector(".mysn-contact-info"),this._contactKey="",this.help=this.buildHelp(),t.appendChild(this.help)}button(t,e,n,i){let r=dt("button","mysn-btn",t);return r.type="button",n&&(r.title=n),r.addEventListener("click",o=>{o.stopPropagation(),this.opts.onAction(e,i)}),r}bindPower(){let t=null,e=i=>{let r=this.powerTrack.getBoundingClientRect();return Math.max(0,Math.min(1,(i.clientY-r.top)/r.height))};this.powerTrack.addEventListener("pointerdown",i=>{i.preventDefault(),this.opts.onAction("unlock"),t=i.pointerId;try{this.powerTrack.setPointerCapture(i.pointerId)}catch{}this.opts.onPower(e(i),!0)}),this.powerTrack.addEventListener("pointermove",i=>{t===i.pointerId&&this.opts.onPower(e(i),!0)});let n=i=>{t===i.pointerId&&(t=null,this.opts.onRelease())};this.powerTrack.addEventListener("pointerup",n),this.powerTrack.addEventListener("pointercancel",i=>{t===i.pointerId&&(t=null,this.opts.onPower(0,!1))})}bindSpin(){let t=null,e=n=>{let i=this.spinBall.getBoundingClientRect(),r=(n.clientX-i.left)/i.width*2-1,o=-((n.clientY-i.top)/i.height*2-1),a=Math.hypot(r,o);a>1&&(r/=a,o/=a),this.setSpin(Math.abs(r)<.06?0:r,Math.abs(o)<.06?0:o)};this.spinBall.addEventListener("pointerdown",n=>{n.preventDefault(),t=n.pointerId;try{this.spinBall.setPointerCapture(n.pointerId)}catch{}e(n)}),this.spinBall.addEventListener("pointermove",n=>t===n.pointerId&&e(n)),this.spinBall.addEventListener("pointerup",()=>t=null),this.spinBall.addEventListener("dblclick",()=>this.setSpin(0,0))}setSpin(t,e){let n=Math.hypot(t,e);n>1&&(t/=n,e/=n),this.side=t,this.top=e,this.spinDot.style.left=50+this.side*40+"%",this.spinDot.style.top=50-this.top*40+"%",this.opts.onSpin(this.side,this.top)}buildSettings(t){let e=dt("div","mysn-panel mysn-hidden");e.innerHTML=`
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
		</div>`,this.menuMode=t.querySelector(".mysn-menu-mode"),this.menuNoteEl=t.querySelector(".mysn-menu-note"),this.menuInv=t.querySelector(".mysn-menu-inv"),this.menuBtns=t.querySelector(".mysn-menu-btns"),this.menuFoot=t.querySelector(".mysn-note"),this._menuKind="",t}setMenu(t,e){let n=t+"|"+(e||"")+"|"+(this.opts.venue?this.opts.venue():"");if(this._menuKind===n)return;this._menuKind=n;let i=this.menuBtns;i.innerHTML="";let r=this.opts.user;if(t==="guest"){this.menuMode.textContent="3D snooker v prehliada\u010Di";let l=dt("a","mysn-btn mysn-login","Prihl\xE1si\u0165 sa");l.href=this.opts.loginUrl||"/wp-login.php",i.appendChild(l),this.menuFoot.textContent="Hra\u0165 m\xF4\u017Eu prihl\xE1sen\xED pou\u017E\xEDvatelia webu Hedlajner: tr\xE9ning aj partie s priate\u013Emi cez internet.";return}let o=()=>{let l=this.button("Posla\u0165 v\xFDzvu","lobby","Vyzvi hr\xE1\u010Da, ktor\xFD je pr\xE1ve v hre, na partiu alebo na spolo\u010Dn\xFD tr\xE9ning");return l.classList.add("mysn-friend"),l},a=()=>[this.button("Nastavenia","settings")];if(t==="watch"){this.menuMode.textContent=`Sledujem: ${e}`;let l=this.button("Presta\u0165 sledova\u0165","watchStop");l.classList.add("mysn-primary"),i.append(l,this.button("In\xE1 otvoren\xE1 partia","rooms"),this.button("Nastavenia","settings"),this.button("Sp\xE4\u0165 na web","home")),this.menuFoot.textContent="Div\xE1k sa len pozer\xE1: my\u0161ou sa ot\xE1\u010Da\u0161 okolo stola, kolieskom pribli\u017Euje\u0161.";return}if(t==="match"){let l=!!(this._lastGame&&this._lastGame.match&&this._lastGame.match.training);this.btnResume=this.button(l?"Pokra\u010Dova\u0165 v tr\xE9ningu":"Pokra\u010Dova\u0165 v partii","resume"),this.btnResume.classList.add("mysn-primary"),this.menuMode.textContent=`${l?"Tr\xE9ning":"Partia"} s hr\xE1\u010Dom ${e}`,i.append(this.btnResume,...a()),i.append(this.button(l?"Preru\u0161i\u0165 tr\xE9ning":"Preru\u0161i\u0165 partiu","pauseMatch","Ulo\u017E\xED sa, pokra\u010Dova\u0165 sa d\xE1 nesk\xF4r"),this.button(l?"Ukon\u010Di\u0165 tr\xE9ning":"Vzda\u0165 partiu","resign"))}else{this.menuMode.textContent=t==="solo"?"Hr\xE1 sa o najlep\u0161ie sk\xF3re":r?`Prihl\xE1sen\xFD: ${r.name}`:"Tr\xE9ning";let l=this.button("Hra\u0165",t==="solo"?"resume":"solo","O najlep\u0161ie sk\xF3re: cel\xFD frame pod\u013Ea pravidiel, rebr\xED\u010Dek pod\u013Ea bodov, pri rovnosti rozhoduje krat\u0161\xED \u010Das");l.classList.add("mysn-primary"),this.btnResume=l;let h=this.button("Liga","league","Kancel\xE1ria ligy: registr\xE1cia, 4 ligy, body a sez\xF3na na rok");h.classList.add("mysn-league-btn");let c=this.button("Tr\xE9ning",t==="solo"?"training":"resume","Vo\u013En\xFD tr\xE9ning na stole s \u010Derven\xFDm s\xFAknom"),u=this.button("Vst\xFApi\u0165","rooms","Otvoren\xE9 partie: tr\xE9ningy a hry s otvoren\xFDmi dverami a ligov\xE9 z\xE1pasy, d\xE1 sa ich sledova\u0165");i.append(c,l,h,o(),u),this.opts.venue&&this.opts.venue()==="league"&&i.appendChild(this.button("Sp\xE4\u0165 do herne","leagueHome")),i.append(...a())}i.appendChild(this.button("Sp\xE4\u0165 na web","home")),this.menuFoot.textContent="V hre sa my\u0161 zachyt\xED v okne. Esc ju uvo\u013En\xED a otvor\xED toto menu. F1 n\xE1poveda na n\xE1stenke, F2 stojan s t\xE1gami."}menuNote(t){this.menuNoteEl.textContent=t||"",this.menuNoteEl.classList.toggle("mysn-hidden",!t)}showMenu(t,e){t&&!this.menuOpen()&&(this._menuAt=performance.now()),this.menu.classList.toggle("mysn-hidden",!t),t||(this.panel.classList.add("mysn-hidden"),this.help.classList.add("mysn-hidden"),this.menuNote(""))}menuOpen(){return!this.menu.classList.contains("mysn-hidden")}showInvites(t){let e=t||[];this.menuInv.innerHTML="";for(let n of e){let i=dt("div","mysn-inv",`${n.from.avatar?`<img src="${oe(n.from.avatar)}" alt="">`:""}<span><b>${oe(n.from.name)}</b> \u0165a poz\xFDva na ${n.league?"ligov\xFA ":""}partiu</span>`),r=this.button("Prija\u0165","accept","",n.id);r.classList.add("mysn-primary"),i.append(r,this.button("Odmietnu\u0165","decline","",n.id)),this.menuInv.appendChild(i)}this.toastBox||(this.toastBox=dt("div","mysn-toast mysn-hidden"),this.root.appendChild(this.toastBox)),this.lobby&&!this.lobby.classList.contains("mysn-hidden")&&this._lobbyData&&this.renderLobby(this._lobbyData)}toast(t,e){this.toastBox||(this.toastBox=dt("div","mysn-toast mysn-hidden"),this.root.appendChild(this.toastBox));let n=this.toastBox;if(n.innerHTML="",n.appendChild(dt("span","",oe(t))),e){let i=this.button("Prija\u0165","accept","",e.id);i.classList.add("mysn-primary"),n.append(i,this.button("Odmietnu\u0165","decline","",e.id))}n.classList.remove("mysn-hidden"),clearTimeout(this._toastT),this._toastT=setTimeout(()=>n.classList.add("mysn-hidden"),e?3e4:6e3)}hideToast(){this.toastBox&&this.toastBox.classList.add("mysn-hidden")}openRooms(t,e){this.roomsBox||(this.roomsBox=dt("div","mysn-panel mysn-lobby mysn-hidden"),this.root.appendChild(this.roomsBox));let n=this.roomsBox;if(n.classList.toggle("mysn-hidden",!t),!t)return;n.innerHTML="<h3>Otvoren\xE9 partie</h3>",n.appendChild(dt("p","mysn-lobby-sub","Prebiehaj\xFAce partie s otvoren\xFDmi dverami a ligov\xE9 z\xE1pasy")),e?e.length||n.appendChild(dt("p","mysn-note","Teraz nie je otvoren\xE1 \u017Eiadna partia. Hr\xE1\u010D otvor\xED svoju her\u0148u pre div\xE1kov dverami (F6), ligov\xE9 z\xE1pasy sa daj\xFA sledova\u0165 v\u017Edy.")):n.appendChild(dt("p","mysn-note","Na\u010D\xEDtavam\u2026"));let i={training:"Tr\xE9ning",solo:"O najlep\u0161ie sk\xF3re",league:"Ligov\xFD z\xE1pas"},r=dt("div","mysn-live");for(let a of e||[]){let l=dt("div","mysn-live-row",`<i></i><span><b>${oe(a.title)}</b><em>${oe(i[a.kind]||"")}${a.info?", "+oe(a.info):""}</em></span>`),h=this.button("Sledova\u0165","watchStart","Pozera\u0165 sa na partiu",a);h.classList.add("mysn-primary"),l.appendChild(h),r.appendChild(l)}n.appendChild(r);let o=dt("div","mysn-lobby-foot");o.appendChild(this.button("Obnovi\u0165","rooms")),o.appendChild(this.button("Zavrie\u0165","roomsClose")),n.appendChild(o)}roomsOpen(){return!!(this.roomsBox&&!this.roomsBox.classList.contains("mysn-hidden"))}openLobby(t){this.lobby||(this.lobby=dt("div","mysn-panel mysn-lobby mysn-hidden"),this.root.appendChild(this.lobby)),this.lobby.classList.toggle("mysn-hidden",!t),t&&this._lobbyData&&this.renderLobby(this._lobbyData)}lobbyOpen(){return!!(this.lobby&&!this.lobby.classList.contains("mysn-hidden"))}renderLobby(t){if(this._lobbyData=t,!this.lobby||this.lobby.classList.contains("mysn-hidden"))return;let e=this.lobby;e.innerHTML="<h3>Posla\u0165 v\xFDzvu</h3>";let n=l=>l.avatar?`<img src="${oe(l.avatar)}" alt="">`:"<i></i>";for(let l of t.invites||[]){let h=dt("div","mysn-inv",`${n(l.from)}<span><b>Boli ste vyzvan\xFD!</b> ${oe(l.from.name)} \u0165a vyz\xFDva ${l.training?"na spolo\u010Dn\xFD tr\xE9ning":l.league?"na ligov\xFA partiu":"na partiu"}</span>`),c=this.button("Prija\u0165","accept","",l.id);c.classList.add("mysn-primary"),h.append(c,this.button("Odmietnu\u0165","decline","",l.id)),e.appendChild(h)}let i=t.outgoing;if(i&&i.status==="invited"){let l=dt("div","mysn-inv mysn-wait",`${n(i.to)}<span>V\xFDzva odoslan\xE1. \u010Cak\xE1m, k\xFDm <b>${oe(i.to.name)}</b> prijme\u2026</span>`);l.appendChild(this.button("Zru\u0161i\u0165","cancelInvite")),e.appendChild(l)}e.appendChild(dt("p","mysn-lobby-sub","Hr\xE1\u010Di pr\xE1ve v hre My Snooker"));let r=t.live||[];r.length||e.appendChild(dt("p","mysn-note","Teraz nie je v hre nikto in\xFD. Zoznam sa obnovuje s\xE1m, ke\u010F niekto pr\xEDde, objav\xED sa tu."));let o=dt("div","mysn-live");for(let l of r){let h=dt("div","mysn-live-row",`${n(l)}<span><b>${oe(l.name)}</b>${l.busy?"<em>hr\xE1 partiu</em>":'<em class="mysn-live-on">v hre</em>'}</span>`),c=this.button("Vyzva\u0165 na partiu","invite","Jeden frame pod\u013Ea pravidiel snookeru",l.id),u=this.button("Pozva\u0165 na tr\xE9ning","inviteTraining","Spolo\u010Dn\xFD tr\xE9ning: striedate sa pri stole, bez faulov, farby sa vracaj\xFA na spoty",l.id);c.disabled=u.disabled=!!l.busy||!!(i&&i.status==="invited"),h.append(c,u),o.appendChild(h)}if(e.appendChild(o),(t.paused||[]).length){e.appendChild(dt("p","mysn-lobby-sub","Rozohran\xE9 partie"));for(let l of t.paused){let h=new Date(l.updated*1e3).toLocaleString("sk-SK",{day:"numeric",month:"numeric",hour:"2-digit",minute:"2-digit"}),c=dt("div","mysn-live-row",`${n(l.opp)}<span><b>${oe(l.opp.name)}</b><em>${l.scores[0]} : ${l.scores[1]}, ${oe(h)}</em></span>`);c.appendChild(this.button("Pokra\u010Dova\u0165","resumeMatch","Pokra\u010Dova\u0165 v partii (s\xFAper sa pripoj\xED, ke\u010F pr\xEDde do hry)",l.id)),e.appendChild(c)}}let a=dt("div","mysn-lobby-foot");a.appendChild(dt("span","mysn-note","Partia sa uklad\xE1 po ka\u017Edom \xFAdere. Pri v\xFDpadku internetu sa po n\xE1vrate pokra\u010Duje tam, kde sa skon\u010Dila.")),a.appendChild(this.button("Zavrie\u0165","lobbyClose")),e.appendChild(a)}celebrate(t){this.party||(this.party=dt("div","mysn-party mysn-hidden"),this.root.appendChild(this.party));let e=this.party;if(!t){e.classList.add("mysn-hidden"),e.innerHTML="";return}let n=Math.max(0,Math.round(t.seconds)),i=`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`,r=t.points===1?"bod":t.points>1&&t.points<5?"body":"bodov",o=["#FACC15","#b3121f","#0f7a3a","#1747b5","#f08aa8","#6b3a1e","#f4f1e8"],a="";for(let u=0;u<70;u++)a+=`<i style="left:${(Math.random()*100).toFixed(1)}%;background:${o[u%o.length]};animation-delay:${(Math.random()*2.5).toFixed(2)}s;animation-duration:${(2.8+Math.random()*2.4).toFixed(2)}s;width:${6+Math.round(Math.random()*8)}px;height:${6+Math.round(Math.random()*8)}px;border-radius:${u%3?"50%":"2px"}"></i>`;let l=t.rank?`<p class="mysn-party-rank">${t.rank}. miesto v rebr\xED\u010Dku z ${t.players}${t.best?", tvoj najlep\u0161\xED frame!":""}</p>`:"";e.innerHTML=`<div class="mysn-party-conf">${a}</div><div class="mysn-party-box">
			<p class="mysn-party-kick">Frame dohran\xFD</p>
			<h2>Gratulujem!</h2>
			<div class="mysn-party-score"><b>${t.points}</b><span>${r}</span></div>
			<p class="mysn-party-time">za <b>${i}</b></p>
			<p class="mysn-party-meta">Najvy\u0161\u0161ia s\xE9ria ${t.brk}, \xFAdery ${t.shots}, fauly ${t.fouls}</p>
			${l}${t.error?`<p class="mysn-party-err">${oe(t.error)}</p>`:""}
			<div class="mysn-party-btns"></div>
		</div>`;let h=e.querySelector(".mysn-party-btns"),c=this.button("Hra\u0165 \u010Fal\u0161\xED frame","partyNext");c.classList.add("mysn-primary"),h.append(c,this.button("Rebr\xED\u010Dek","partyBoard")),e.classList.remove("mysn-hidden")}partyOpen(){return!!(this.party&&!this.party.classList.contains("mysn-hidden"))}leaderboardOpen(){return!!(this.board&&!this.board.classList.contains("mysn-hidden"))}openLeague(t){this.leagueBox||(this.leagueBox=dt("div","mysn-panel mysn-lobby mysn-league mysn-hidden"),this.root.appendChild(this.leagueBox),this._leagueTab=0),this.leagueBox.classList.toggle("mysn-hidden",!t)}leagueOpen(){return!!(this.leagueBox&&!this.leagueBox.classList.contains("mysn-hidden"))}renderLeague(t,e){if(this._leagueData=t,!this.leagueOpen())return;let n=this.leagueBox;n.innerHTML="";let i=f=>new Date(f*1e3).toLocaleDateString("sk-SK");if(e){n.appendChild(dt("h3","","Minul\xE9 sez\xF3ny")),(!e.seasons||!e.seasons.length)&&n.appendChild(dt("p","mysn-note","Zatia\u013E sa neskon\u010Dila \u017Eiadna sez\xF3na. Prv\xE1 sa skon\u010D\xED po roku hrania."));for(let g of e.seasons||[]){n.appendChild(dt("p","mysn-lobby-sub",`${oe(g.name)} (${i(g.started)} a\u017E ${i(g.ends)})`)),g.champion&&n.appendChild(dt("div","mysn-menu-note",`Majster sez\xF3ny: <b>${oe(g.champion.name)}</b>`));for(let x of[1,2,3,4]){let y=g.leagues&&g.leagues[x]||[];y.length&&n.appendChild(dt("p","mysn-note",`<b>${x}. liga:</b> `+y.map(p=>`${p.rank}. ${oe(p.user.name)} (${p.points})`).join(", ")))}}let f=dt("div","mysn-lobby-foot");f.append(this.button("Sp\xE4\u0165 na ligu","league"),this.button("Zavrie\u0165","leagueClose")),n.appendChild(f);return}if(!t){n.appendChild(dt("h3","","Liga")),n.appendChild(dt("p","mysn-note","Ligu sa nepodarilo na\u010D\xEDta\u0165."));let f=dt("div","mysn-lobby-foot");f.appendChild(this.button("Zavrie\u0165","leagueClose")),n.appendChild(f);return}n.appendChild(dt("h3","",`Liga: ${oe(t.season.name)}`)),n.appendChild(dt("p","mysn-note",`Do konca sez\xF3ny ost\xE1va ${t.season.daysLeft} dn\xED (${i(t.season.ends)}). Hr\xE1\u010Dov v lige: ${t.players}.`)),t.me&&(n.appendChild(dt("div","mysn-menu-note",`Si <b>${t.me.rank}.</b> v <b>${t.me.league}. lige</b>, m\xE1\u0161 <b>${t.me.points}</b> bodov (v\xFDhry ${t.me.wins}, prehry ${t.me.losses}).`)),this._leagueTab===0&&(this._leagueTab=t.me.league)),n.appendChild(dt("p","mysn-lobby-sub","Vyzvi hr\xE1\u010Da (tvoja a susedn\xE9 ligy, pr\xE1ve v hre)"));let r=t.live||[];r.length||n.appendChild(dt("p","mysn-note","Teraz nie je v hre nikto z tvojej ani susedn\xFDch l\xEDg. Zoznam sa obnovuje s\xE1m."));let o=this._lobbyData&&this._lobbyData.outgoing,a=dt("div","mysn-live");for(let f of r){let g=dt("div","mysn-live-row",`${f.user.avatar?`<img src="${oe(f.user.avatar)}" alt="">`:"<i></i>"}<span><b>${oe(f.user.name)}</b><em>${f.league}. liga, ${f.points} bodov${f.busy?", hr\xE1 partiu":""}</em></span>`),x=this.button("Vyzva\u0165","leagueInvite","Ligov\xE1 partia: v\xED\u0165az z\xEDska body, ktor\xE9 nahral, porazen\xFD ich strat\xED",f.user.id);x.disabled=!!f.busy||!!(o&&o.status==="invited"),g.appendChild(x),a.appendChild(g)}if(n.appendChild(a),o&&o.status==="invited"){let f=dt("div","mysn-inv mysn-wait",`<span>\u010Cak\xE1m, k\xFDm <b>${oe(o.to.name)}</b> prijme v\xFDzvu\u2026</span>`);f.appendChild(this.button("Zru\u0161i\u0165","cancelInvite")),n.appendChild(f)}let l=dt("div","mysn-league-tabs");for(let f of[1,2,3,4]){let g=this.button(`${f}. liga`,"leagueTab","",f);g.classList.toggle("mysn-on",this._leagueTab===f),l.appendChild(g)}n.appendChild(l);let h=t.leagues&&t.leagues[this._leagueTab||1]||[],c=dt("table","mysn-lb");c.innerHTML="<thead><tr><th>#</th><th>Hr\xE1\u010D</th><th>Body</th><th>V / P</th><th>S\xE9ria</th></tr></thead>";let u=dt("tbody");h.length||u.appendChild(dt("tr","mysn-lb-gap",'<td colspan="5">V tejto lige zatia\u013E nikto nie je.</td>'));for(let f of h)u.appendChild(dt("tr",f.me?"mysn-lb-me":"",`<td>${f.rank}.</td><td>${oe(f.user.name)}</td><td><b>${f.points}</b></td><td>${f.wins} / ${f.losses}</td><td>${f.best}</td>`));c.appendChild(u),n.appendChild(c),n.appendChild(dt("p","mysn-note","Ka\u017Ed\xFD za\u010D\xEDna so 147 bodmi. V\xED\u0165az z\xEDska to\u013Eko bodov, ko\u013Eko nahral, porazen\xFD ich strat\xED (najviac v\u0161etky svoje). V\xFDhra nad hr\xE1\u010Dom z vy\u0161\u0161ej ligy sa r\xE1ta 1,5-kr\xE1t. 1. liga: top 10, 2. liga: 11. a\u017E 30., 3. liga: 31. a\u017E 70., 4. liga: ostatn\xED. Sez\xF3na trv\xE1 rok."));let d=dt("div","mysn-lobby-foot");d.append(this.button("Minul\xE9 sez\xF3ny","leagueArchive"),this.button("Sp\xE4\u0165 do herne","leagueHome"),this.button("Zavrie\u0165","leagueClose")),n.appendChild(d)}showLeaderboard(t,e){this.board||(this.board=dt("div","mysn-panel mysn-lobby mysn-hidden"),this.root.appendChild(this.board));let n=this.board;if(t===null){n.classList.add("mysn-hidden");return}let i=a=>{let l=Math.max(0,Math.round(a));return`${Math.floor(l/60)}:${String(l%60).padStart(2,"0")}`};if(n.innerHTML="<h3>Rebr\xED\u010Dek: o najlep\u0161ie sk\xF3re (F8)</h3>",e&&n.appendChild(dt("div","mysn-menu-note",oe(e))),n.appendChild(dt("p","mysn-note","Jeden hr\xE1\u010D hr\xE1 cel\xFD frame pod\u013Ea pravidiel. Rozhoduj\xFA body (fauly sa odpo\u010D\xEDtaj\xFA), pri rovnosti krat\u0161\xED \u010Das. V rebr\xED\u010Dku je najlep\u0161\xED frame ka\u017Ed\xE9ho hr\xE1\u010Da.")),t===void 0)n.appendChild(dt("p","mysn-note","Na\u010D\xEDtavam rebr\xED\u010Dek\u2026"));else if(!t)n.appendChild(dt("p","mysn-note","Rebr\xED\u010Dek sa nepodarilo na\u010D\xEDta\u0165."));else if(!t.top.length)n.appendChild(dt("p","mysn-note","Zatia\u013E nikto nedohral frame. Bu\u010F prv\xFD."));else{let a=dt("table","mysn-lb");a.innerHTML="<thead><tr><th>#</th><th>Hr\xE1\u010D</th><th>Body</th><th>Celkov\xFD \u010Das</th><th>S\xE9ria</th></tr></thead>";let l=dt("tbody"),h=c=>{let u=dt("tr",c.me?"mysn-lb-me":"",`<td>${c.rank}.</td><td>${oe(c.user.name)}</td><td><b>${c.points}</b></td><td>${i(c.seconds)}</td><td>${c.brk}</td>`);l.appendChild(u)};t.top.forEach(h),t.mine&&t.rank>10&&(l.appendChild(dt("tr","mysn-lb-gap",'<td colspan="5">\u2026</td>')),h(t.mine)),a.appendChild(l),n.appendChild(a),n.appendChild(dt("p","mysn-note",t.mine?`Tvoje miesto: ${t.rank}. z ${t.players}, dohran\xFDch framov: ${t.frames}.`:`Hr\xE1\u010Dov v rebr\xED\u010Dku: ${t.players}. Zatia\u013E nem\xE1\u0161 dohran\xFD \u017Eiadny frame.`))}let r=dt("div","mysn-lobby-foot"),o=this.button("Hra\u0165","solo");o.classList.add("mysn-primary"),r.append(o,this.button("Zavrie\u0165","leaderboardClose")),n.appendChild(r),n.classList.remove("mysn-hidden")}setNet(t){this._net=t||"",this._lastGame&&this.sync(this._lastGame,this._lastCam)}buildHelp(){let t=dt("div","mysn-panel mysn-help mysn-hidden");return t.innerHTML=`
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
			<button type="button" class="mysn-btn mysn-primary" data-close>Rozumiem</button>`,t.querySelector("[data-close]").addEventListener("click",()=>t.classList.add("mysn-hidden")),t}toggle(t){(t===this.panel?this.help:this.panel).classList.add("mysn-hidden"),t.classList.toggle("mysn-hidden")}drawContact(t,e,n,i=!1){let r=!!(n&&t&&t.ball);if(this.contact.classList.toggle("mysn-hidden",!r),!r){this._contactKey="";return}let o=t.ball.p,a=t.ghost,l=[i?1:0,e.toFixed(5),o.x.toFixed(4),o.z.toFixed(4),a.x.toFixed(4),a.z.toFixed(4)].join();if(l===this._contactKey)return;this._contactKey=l;let h=this.contactCanvas,c=this.contact.clientWidth||200,u=Math.min(2,window.devicePixelRatio||1);h.width!==Math.round(c*u)&&(h.width=h.height=Math.round(c*u));let d=h.getContext("2d"),f=h.width;d.setTransform(1,0,0,1,0,0),d.clearRect(0,0,f,f);let g=Math.cos(e),x=Math.sin(e),y=(a.x+o.x)/2,p=(a.z+o.z)/2,E=f*.17/.02625,S=(Tt,Y)=>{let it=Tt-y,At=Y-p,ft=it*g+At*x,Ot=it*-x+At*g;return[f/2+Ot*E,f/2-ft*E]},_=o.x-a.x,z=o.z-a.z,P=Math.hypot(_,z)||1,U=_/P,N=z/P,w=Math.max(-1,Math.min(1,g*U+x*N)),M=Math.acos(w),T=Math.max(0,1-Math.sin(M)),G=(Tt,Y,it,At,ft)=>{d.beginPath(),d.setLineDash(ft||[]),d.strokeStyle=it,d.lineWidth=At*u,d.moveTo(Tt[0],Tt[1]),d.lineTo(Y[0],Y[1]),d.stroke(),d.setLineDash([])},W=(Tt,Y,it,At,ft)=>{let Ot=S(Tt.x,Tt.z),Gt=S(Tt.x+Y*At,Tt.z+it*At);G(Ot,Gt,ft,2.2);let Ut=Math.atan2(Gt[1]-Ot[1],Gt[0]-Ot[0]),te=8*u;d.beginPath(),d.fillStyle=ft,d.moveTo(Gt[0],Gt[1]),d.lineTo(Gt[0]-te*Math.cos(Ut-.45),Gt[1]-te*Math.sin(Ut-.45)),d.lineTo(Gt[0]-te*Math.cos(Ut+.45),Gt[1]-te*Math.sin(Ut+.45)),d.closePath(),d.fill()};if(d.fillStyle="#1d6b34",d.beginPath(),d.arc(f/2,f/2,f/2-u,0,Math.PI*2),d.fill(),d.save(),d.clip(),i){let Tt=6*.02625;G(S(a.x-g*Tt,a.z-x*Tt),S(a.x+g*Tt,a.z+x*Tt),"rgba(255,255,255,0.45)",1.2,[5*u,4*u]),G(S(a.x-U*.02625,a.z-N*.02625),S(o.x+U*5*.02625,o.z+N*5*.02625),"rgba(255,226,138,0.35)",1,[2*u,3*u])}let $=(Tt,Y,it)=>{let[At,ft]=S(Tt.x,Tt.z),Ot=.02625*E,Gt=d.createRadialGradient(At-Ot*.35,ft-Ot*.35,Ot*.1,At,ft,Ot),Ut="#"+Y.toString(16).padStart(6,"0");Gt.addColorStop(0,it?"#ffffff":"rgba(255,255,255,0.55)"),Gt.addColorStop(.25,Ut),Gt.addColorStop(1,Ut),d.globalAlpha=it?.78:1,d.fillStyle=Gt,d.beginPath(),d.arc(At,ft,Ot,0,Math.PI*2),d.fill(),d.globalAlpha=1,d.lineWidth=1.5*u,d.strokeStyle=it?"rgba(255,255,255,0.95)":"rgba(0,0,0,0.55)",d.stroke()};$(o,Yn[t.ball.kind].color,!1),$(a,Yn.white.color,!0);let V=g-w*U,O=x-w*N,K=Math.hypot(V,O);{let Tt=S(a.x-g*4.2*.02625,a.z-x*4.2*.02625),Y=S(a.x-g*1.05*.02625,a.z-x*1.05*.02625);G(Tt,Y,"rgba(255,255,255,0.7)",2.4,[6*u,4*u]);let it=Math.atan2(Y[1]-Tt[1],Y[0]-Tt[0]),At=7*u;d.beginPath(),d.fillStyle="rgba(255,255,255,0.8)",d.moveTo(Y[0],Y[1]),d.lineTo(Y[0]-At*Math.cos(it-.5),Y[1]-At*Math.sin(it-.5)),d.lineTo(Y[0]-At*Math.cos(it+.5),Y[1]-At*Math.sin(it+.5)),d.closePath(),d.fill();let ft=t.ball.kind,Ot=ft==="black"?7829367:Yn[ft].color;W({x:o.x+U*.02625*1.05,z:o.z+N*.02625*1.05},U,N,.02625*2.4,"#"+Ot.toString(16).padStart(6,"0"))}i&&K>.001&&(V/=K,O/=K,W(a,V,O,.02625*(.9+2.4*(1-w)),"#9fd3ff"));let X=S(a.x+U*.02625,a.z+N*.02625);d.fillStyle="#ff4d4d",d.beginPath(),d.arc(X[0],X[1],3.2*u,0,Math.PI*2),d.fill(),d.restore(),d.strokeStyle="rgba(255,255,255,0.35)",d.lineWidth=1.5*u,d.beginPath(),d.arc(f/2,f/2,f/2-u,0,Math.PI*2),d.stroke();let rt=null;for(let Tt of Qi){let Y=Tt.x-o.x,it=Tt.z-o.z,At=Y*U+it*N;if(At<=0)continue;let ft=Math.abs(Y*-N+it*U);ft<Tt.r*.75&&(!rt||At<rt.pr)&&(rt={pr:At,perp:ft,pk:Tt})}let vt=g*N-x*U,yt=M*180/Math.PI,zt=yt<.5?"pln\xFD z\xE1sah":vt>0?"gu\u013Ea ide doprava":"gu\u013Ea ide do\u013Eava";this.contactInfo.innerHTML=`<span>Uhol <b>${yt.toFixed(1)}\xB0</b></span><span>Plnos\u0165 <b>${Math.round(T*100)} %</b></span>`+(i?`<span class="mysn-contact-where">${zt}</span>`+(rt?'<span class="mysn-contact-pot">Smer do jamky</span>':'<span class="mysn-contact-miss">Mimo jamky</span>'):"")}setLock(t){this._lock=t,this._hintText()}setStroke(t){this._stroke=t,this._hintText()}_hintText(){let t=this._free?"My\u0161 je vo\u013En\xE1, k\xFDm dr\u017E\xED\u0161 Ctrl. Po pusten\xED sa vr\xE1ti na t\xE1go.":this._stroke?"Ruka dr\u017E\xED t\xE1go: my\u0161 k sebe odtiahne, dopredu vystrel\xED. Pusten\xEDm \u013Eav\xE9ho tla\u010Didla zru\u0161\xED\u0161.":this._lock?`${this._cueName}: mier pohybom my\u0161i${this._cueFine?" (Shift jemne)":""}, \u013Eav\xE9 tla\u010Didlo dr\u017E a striel. F1 n\xE1poveda, F2 t\xE1g\xE1, F3 krieda, F4 sk\xF3re, F6 dvere, Tab zhora, Esc menu.`:"Klikni do hry, my\u0161 sa zachyt\xED v okne. F1 n\xE1poveda, F2 t\xE1g\xE1, F3 krieda, F4 sk\xF3re, F6 dvere, Tab zhora.";this.hint.textContent=t,this.hint.classList.toggle("mysn-hint-on",!!(this._stroke||this._free))}readerOpen(){return!!(this.reader&&!this.reader.classList.contains("mysn-hidden"))}toggleReader(t,e){this.reader||(this.reader=dt("div","mysn-reader mysn-hidden"),this.root.appendChild(this.reader));let n=this.reader;if(!t||this.readerOpen()){n.classList.add("mysn-hidden");return}let i=t==="rss"?"Spr\xE1vy z RSS":"HEDLAJNER",r=t==="rss"?"Najnov\u0161ie spr\xE1vy z m\xE9di\xED doma aj vo svete":"Hlavn\xE9 spr\xE1vy z domova a zo sveta",o=(e||[]).map((l,h)=>{let c=l.i?`<img src="${oe(l.i)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`:"",u=[l.s,l.c,l.d].filter(Boolean).map(oe).join("  |  ");return`<a class="mysn-rd-card${h===0&&l.i?" mysn-rd-lead":""}" href="${oe(l.u)}" target="_blank" rel="noopener">${c}<span class="mysn-rd-meta">${u}${l.n?"  |  +"+l.n+" m\xE9di\xE1":""}</span><b>${oe(l.t)}</b><p>${oe(l.e)}</p></a>`}).join("");n.innerHTML=`<div class="mysn-rd-head"><div><h2>${i}</h2><span>${r}</span></div></div><div class="mysn-rd-grid">${o||"<p>\u017Diadne spr\xE1vy.</p>"}</div>`;let a=this.button("Zavrie\u0165 (C alebo Esc)","reader");a.classList.add("mysn-primary"),n.querySelector(".mysn-rd-head").appendChild(a),n.classList.remove("mysn-hidden"),n.scrollTop=0}setFree(t){this._free=t,this._hintText()}setChalk(t){this._chalk=t,this._lastGame&&this.sync(this._lastGame,this._lastCam)}setCueInfo(t){this._cueName=t.name,this._cueFine=t.fine>0,this._hintText()}openPhone(t){if(!this.phone){if(!t)return;this.phone=dt("div","mysn-phone mysn-hidden"),this.phone.innerHTML='<div class="mysn-phone-dev"><div class="mysn-phone-notch"></div><div class="mysn-phone-scr"></div></div>',this.phone.addEventListener("click",a=>{a.target===this.phone&&this.openPhone(!1)}),this.root.appendChild(this.phone)}let e=this.phone;if(!t){e.classList.add("mysn-hidden");return}let n=e.querySelector(".mysn-phone-scr"),i=this.opts.accountUrl;n.innerHTML="";let r=dt("div","mysn-phone-bar","<b>M\xF4j \xFA\u010Det</b>"),o=this.button("Zavrie\u0165 (Esc)","phoneClose");if(r.appendChild(o),n.appendChild(r),!i)n.appendChild(dt("p","mysn-phone-msg","M\xF4j \xFA\u010Det je len pre prihl\xE1sen\xFDch."));else{let a=document.createElement("iframe");a.className="mysn-phone-frame",a.src=i,a.title="M\xF4j \xFA\u010Det";let l=()=>{n.querySelector(".mysn-phone-frame")&&a.remove();let c=dt("div","mysn-phone-msg","Nastavenie \xFA\u010Dtu sa tu ned\xE1 zobrazi\u0165. Otvor ho na webe:"),u=dt("a","mysn-btn mysn-primary","Otvori\u0165 M\xF4j \xFA\u010Det");u.href=i,u.target="_blank",u.rel="noopener",c.appendChild(u),n.appendChild(c)};a.addEventListener("load",()=>{try{let c=a.contentDocument,u=c.createElement("style");u.textContent="#adminmenumain,#wpadminbar,#wpfooter,.notice-warning,.update-nag{display:none!important}#wpcontent,#wpbody-content{margin-left:0!important;padding-left:12px!important}html.wp-toolbar{padding-top:0!important}body{min-width:0!important}",c.head.appendChild(u)}catch{l()}}),n.appendChild(a);let h=dt("a","mysn-phone-ext","Otvori\u0165 na webe");h.href=i,h.target="_blank",h.rel="noopener",n.appendChild(h)}e.classList.remove("mysn-hidden")}phoneOpen(){return!!(this.phone&&!this.phone.classList.contains("mysn-hidden"))}cardOpen(){return!!this.cardBox&&!this.cardBox.classList.contains("mysn-hidden")}cardOverlay(t){return this.cardBox||(this.cardBox=dt("div","mysn-card mysn-hidden"),this.cardBox.addEventListener("mousedown",e=>e.stopPropagation()),this.root.appendChild(this.cardBox)),this.cardBox.classList.toggle("mysn-hidden",!t),this.cardBox.innerHTML="",t&&this.cardBox.appendChild(dt("div","mysn-card-brand","MY SNOOKER \xB7 LIGA")),this.cardBox}renderOffice(t,e){e.mode!=="card"&&e.mode!=="edit"&&this.cardOverlay(!1);let n=dt("div","mysn-mixer mysn-office"),i=e.league,r=i&&i.registered,o=i&&i.player||{},a=(c,u)=>{let d=dt("label","mysn-mixer-row mysn-form-row",`<span>${c}</span>`);return d.appendChild(u),d},l=(c,u,d,f)=>{let g=document.createElement("input");return g.type="text",g.name=c,g.maxLength=d,g.value=u||"",g.placeholder=f||"",g};if(!i)n.appendChild(dt("div","mysn-news-head","<b>Kancel\xE1ria</b>")),n.appendChild(dt("p","mysn-mixer-status","Na\u010D\xEDtavam ligu\u2026"));else if(!r&&e.mode!=="card"){n.appendChild(dt("div","mysn-news-head","<b>Registr\xE1cia do ligy</b>")),n.appendChild(dt("p","mysn-mixer-status",`Na stole le\u017E\xED \u010Derven\xE1 vizitka. Dr\u017E Ctrl a klikni na \u0148u (alebo F8) a vypl\u0148 svoje \xFAdaje. ${oe(i.season.name)}, do konca ${i.season.daysLeft} dn\xED. Ligu hraj\xFA len registrovan\xED hr\xE1\u010Di.`));let c=this.button("Otvori\u0165 vizitku","officeCard");c.classList.add("mysn-league-btn"),n.appendChild(c)}else if(e.mode==="card"||e.mode==="edit"){let c=this.cardOverlay(!0);n.appendChild(dt("div","mysn-news-head",`<b>${r?"Moje \xFAdaje":"Registr\xE1cia do ligy"}</b>`)),n.appendChild(dt("p","mysn-mixer-status","Vypl\u0148 vizitku uprostred obrazovky.")),c.appendChild(dt("div","mysn-news-head",`<b>${r?"\xDAdaje hr\xE1\u010Da":"Registr\xE1cia do ligy"}</b>`)),r||c.appendChild(dt("p","mysn-mixer-status",`${oe(i.season.name)}, do konca ${i.season.daysLeft} dn\xED. Po registr\xE1cii za\u010D\xEDna\u0161 so 147 bodmi v 4. lige (alebo pod\u013Ea poradia) a m\xF4\u017Ee\u0161 vyz\xFDva\u0165 hr\xE1\u010Dov.`));let u=document.createElement("form");u.className="mysn-form";let d=document.createElement("select");d.name="country",d.innerHTML='<option value="">Vyber krajinu\u2026</option>'+e.countries.map(([g,x])=>`<option value="${g}"${(o.country||"")===g?" selected":""}>${oe(x)}</option>`).join(""),u.append(a("Krajina *",d),a("Mesto",l("city",o.city,40,"napr\xEDklad Ru\u017Eomberok")),a("Prez\xFDvka v lige",l("nick",o.nick,24,e.user&&e.user.name||"")),(()=>{let g=document.createElement("select");return g.name="hand",g.innerHTML=`<option value="right"${o.hand!=="left"?" selected":""}>prav\xE1k</option><option value="left"${o.hand==="left"?" selected":""}>\u013Eav\xE1k</option>`,a("Hr\xE1m rukou",g)})(),a("Ob\u013E\xFAben\xE9 t\xE1go",l("cue",o.cue,30,"napr\xEDklad Majstrovsk\xE9")),a("O mne",l("about",o.about,160,"kr\xE1tko o sebe (najviac 160 znakov)")));let f=document.createElement("button");f.type="submit",f.className="mysn-btn mysn-primary",f.textContent=r?"Ulo\u017Ei\u0165 \xFAdaje":"Registrova\u0165 sa do ligy",u.appendChild(f),u.addEventListener("submit",g=>{g.preventDefault();let x=new FormData(u),y=Object.fromEntries(x.entries());if(!y.country){this.toast("Vyber krajinu.");return}y.edit=r?1:0,this.opts.onAction("register",y)}),u.addEventListener("keydown",g=>g.stopPropagation()),c.appendChild(u),c.appendChild(this.button(r?"Zavrie\u0165":"Zatia\u013E nie","officeHome"))}else if(e.mode==="cues"){let c=e.myCues.selected.length,u=e.myCues.selected.includes(e.myCues.def)?e.myCues.def:e.myCues.selected[0];n.appendChild(dt("h3","",`T\xE1g\xE1 do ligov\xE9ho z\xE1pasu: vybrat\xE9 ${c} zo 4`));let d=dt("div","mysn-cues");e.cues.forEach((f,g)=>{let x=e.myCues.selected.includes(f.id),y=x&&f.id===u,p=dt("div","mysn-cue"+(x?" mysn-pick":"")+(y?" mysn-def":""),`<span class="mysn-cue-n">${g+1}</span><b>${oe(f.name)}</b><span class="mysn-cue-cat">${oe(f.category)}</span><span>Sila ${Math.round(f.power*100)} %, d\u013A\u017Eka ${Math.round(f.len*100)} cm</span><em>${y?"\u2605 predvolen\xE9 v z\xE1pase":x?"v z\xE1pase (klik odoberie)":"klik: zobra\u0165 do z\xE1pasu"}</em>`);if(p.setAttribute("role","button"),p.addEventListener("click",E=>{E.stopPropagation(),this.opts.onAction("cueSelect",f.id)}),x&&!y){let E=this.button("\u2605 predvolen\xE9","cueDefault","S t\xFDmto t\xE1gom za\u010Dne\u0161 ligov\xFD z\xE1pas",f.id);E.classList.add("mysn-cue-defbtn"),p.appendChild(E)}d.appendChild(p)}),n.appendChild(d),n.appendChild(dt("p","mysn-mixer-status mysn-cue-hint","Klik na kartu t\xE1go zoberie do ligov\xE9ho z\xE1pasu alebo odoberie. \u2605 predvolen\xE9: s n\xEDm za\u010Dne\u0161 z\xE1pas, v z\xE1pase sa prep\xEDna len medzi t\xFDmito 4 t\xE1gami. F2 alebo Esc: sp\xE4\u0165 za st\xF4l."))}else{let c=i.me;n.appendChild(dt("div","mysn-news-head",`<b>Kancel\xE1ria: ${oe(o.nick||e.user&&e.user.name||"")}</b>`)),n.appendChild(dt("div","mysn-menu-note",`<b>${c.rank}.</b> miesto v <b>${c.league}. lige</b>, <b>${c.points}</b> bodov<br>V\xFDhry ${c.wins}, prehry ${c.losses}, najvy\u0161\u0161ia s\xE9ria ${c.best}`)),n.appendChild(dt("p","mysn-mixer-status",`${oe(i.season.name)}: do konca sez\xF3ny ${i.season.daysLeft} dn\xED. Hr\xE1\u010Dov v lige: ${i.players}.`));let u=dt("div","mysn-office-btns"),d=this.button("Tabu\u013Eky l\xEDg a vyzvanie hr\xE1\u010Da","leagueTables");d.classList.add("mysn-primary"),u.append(d,this.button("Moje t\xE1g\xE1 (4 do z\xE1pasu)","myCues"),this.button("Moje \xFAdaje","officeEdit"),this.button("Minul\xE9 sez\xF3ny","leagueArchive")),n.appendChild(u)}let h=dt("div","mysn-office-btns");h.appendChild(this.button("Sp\xE4\u0165 do herne","officeLeave")),n.appendChild(h),t.appendChild(n)}renderMixer(t,e){let n=dt("div","mysn-mixer"),i=e.station,r=dt("div","mysn-news-head",`<b>R\xE1dio${i?": "+oe(i.name):""}</b>`),o=this.button(e.on?"Vypn\xFA\u0165 (P)":"Zapn\xFA\u0165 (P)","radioToggle");o.classList.add("mysn-primary"),r.appendChild(o),n.appendChild(r),n.appendChild(dt("p","mysn-mixer-status",oe(e.status||(e.stations.length?"Vyber stanicu alebo stla\u010D Zapn\xFA\u0165.":"V My Player nie s\xFA \u017Eiadne r\xE1di\xE1."))));let a={vol:"Hlasitos\u0165",bass:"Basy",treble:"V\xFD\u0161ky",bal:"Vyv\xE1\u017Eenie"};for(let h of["vol","bass","treble","bal"]){let c=dt("label","mysn-mixer-row",`<span>${a[h]}</span>`),u=document.createElement("input");u.type="range",u.min="0",u.max="1",u.step="0.01",u.value=String(e.params[h]),u.addEventListener("input",d=>{d.stopPropagation(),this.opts.onAction("radioSet",{k:h,v:parseFloat(u.value)})}),c.appendChild(u),n.appendChild(c)}let l=dt("div","mysn-news mysn-stations");e.stations.forEach((h,c)=>{let u=dt("button","mysn-news-item"+(c===e.index&&e.on?" mysn-on":""),`<span>${oe([h.city,h.genre].filter(Boolean).join(", ")||"R\xE1dio")}</span>${oe(h.name)}`);u.type="button",u.addEventListener("click",d=>{d.stopPropagation(),this.opts.onAction("radioPick",c)}),l.appendChild(u)}),n.appendChild(l),t.appendChild(n),this._mixerBox=n}showView(t,e,n,i){this.viewBox||(this.viewBox=dt("div","mysn-view mysn-hidden"),this.root.appendChild(this.viewBox));let r=this.viewBox;if(r.classList.toggle("mysn-hidden",!t),r.classList.toggle("mysn-view-news",t==="news"||t==="magazine"||t==="chair"||t==="mixer"||t==="office"),this.root.classList.toggle("mysn-viewing",!!t),this.root.classList.toggle("mysn-in-office",t==="office"),r.classList.toggle("mysn-office-rack",t==="office"&&!!i&&!!i.office&&i.office.mode==="cues"),t!=="office"&&this.cardBox&&this.cardOverlay(!1),this._lastGame&&this.sync(this._lastGame,this._lastCam),!t)return;if(r.innerHTML="",t==="rack"){r.appendChild(dt("h3","","Stojan s t\xE1gami"));let h=dt("div","mysn-cues");e.forEach((c,u)=>{let d=dt("button","mysn-cue"+(c.id===n?" mysn-on":""),`<span class="mysn-cue-n">${u+1}</span><b>${c.name}</b><span class="mysn-cue-cat">${c.category}</span><span>\u0160pi\u010Dka ${c.tip}, sila ${Math.round(c.power*100)} %</span><span>D\u013A\u017Eka ${Math.round(c.len*100)} cm, Shift ${c.fine>0?"\xE1no":"nie"}</span><em>${c.note}</em>`);d.type="button",d.addEventListener("click",f=>{f.stopPropagation(),this.opts.onAction("cuePick",c.id)}),h.appendChild(d)}),r.appendChild(h)}let o=dt("div","mysn-view-foot"),a=h=>{let c=dt("a","mysn-news-item",`<span>${oe(h.s?h.s+(h.c?", "+h.c:""):h.c||"")}</span>${oe(h.t)}`);return c.href=h.u,c.target="_blank",c.rel="noopener",c};if(t==="office"&&i&&i.office&&this.renderOffice(r,i.office),t==="mixer"&&i&&i.radio&&this.renderMixer(r,i.radio),t==="chair"&&i){let h=dt("div","mysn-news"),c=(u,d,f,g)=>{if(!d||!d.length)return;let x=dt("div","mysn-news-head",`<b>${u}</b>`),y=this.button(f,g);y.classList.add("mysn-primary"),x.appendChild(y),h.appendChild(x),d.slice(0,9).forEach(p=>h.appendChild(a(p)))};c("HEDLAJNER",i.news,"Cel\xE9 (C)","reader"),c("Spr\xE1vy z RSS",i.rss,"Cel\xE9 (V)","readerRss"),r.appendChild(h)}if((t==="news"||t==="magazine")&&i&&i.length){let h=this.button("\u010C\xEDta\u0165 na cel\xFA obrazovku (C)","reader");h.classList.add("mysn-primary"),r.appendChild(h);let c=dt("div","mysn-news");i.slice(0,12).forEach(u=>{let d=dt("a","mysn-news-item",`<span>${oe(u.s?u.s+(u.c?", "+u.c:""):u.c||"")}</span>${oe(u.t)}`);d.href=u.u,d.target="_blank",d.rel="noopener",c.appendChild(d)}),r.appendChild(c)}let l={chair:"Poh\u013Ead z kresla: pohybom my\u0161i sa rozhliada\u0161, kolieskom pribli\u017Euje\u0161 (klikni, ak sa my\u0161 nezachytila). Vpravo spr\xE1vy: dr\u017E Ctrl a klikni na \u010Dl\xE1nok, C noviny Hedlajner a V spr\xE1vy z RSS na cel\xFA obrazovku. Pri hre o sk\xF3re \u010Das stoj\xED. F7 alebo Enter: sp\xE4\u0165 do hry.",news:"Titulka webu Hedlajner. Klik na titulok otvor\xED \u010Dl\xE1nok. F8, Enter alebo Esc: sp\xE4\u0165 do hry.",magazine:"Spr\xE1vy z RSS kan\xE1lov. Klik na titulok otvor\xED spr\xE1vu. F9, Enter alebo Esc: sp\xE4\u0165 do hry.",rack:"\u0160\xEDpky v\u013Eavo a vpravo vyberaj\xFA t\xE1go. Enter, F2 alebo Esc: sp\xE4\u0165 do hry.",board:"F1, Enter alebo Esc: sp\xE4\u0165 do hry.",score:"F4, Enter alebo Esc: sp\xE4\u0165 do hry.",office:"Kancel\xE1ria: my\u0161ou sa rozhliada\u0161, kolieskom pribli\u017Euje\u0161. Dr\u017E Ctrl: vo\u013En\xE1 my\u0161 na klikanie (aj na mapu hr\xE1\u010Dov). Esc: sp\xE4\u0165 do herne.",bar:"Poh\u013Ead z baru: my\u0161ou sa rozhliada\u0161, kolieskom pribli\u017Euje\u0161. Dr\u017E Ctrl a klikni na telef\xF3n (alebo M): zv\xE4\u010D\u0161\xED sa M\xF4j \xFA\u010Det. Pri hre o sk\xF3re \u010Das stoj\xED. F10 alebo Enter: sp\xE4\u0165 do hry.",mixer:"Mixpult: \u0161\xEDpky v\u013Eavo a vpravo menia stanicu, hore a dole hlasitos\u0165, P zapne alebo vypne r\xE1dio. Zvuk ide z reproduktorov v herni. F9, Enter alebo Esc: sp\xE4\u0165 do hry.",trophies:"Rebr\xED\u010Dek o najlep\u0161ie sk\xF3re: poh\xE1re pre troch najlep\u0161\xEDch, vpravo 4. a\u017E 10. miesto (body a celkov\xFD \u010Das). F8, Enter alebo Esc: sp\xE4\u0165 do hry.",chalk:"Kriedujem \u0161pi\u010Dku t\xE1ga. Fal\u0161e bud\xFA 3 \xFAdery 5x silnej\u0161ie."};if(o.appendChild(dt("span","",l[t]||"")),t!=="chalk"&&t!=="office"){let h=this.button("Sp\xE4\u0165 do hry","back");h.classList.add("mysn-primary"),o.appendChild(h)}r.appendChild(o)}showPower(t){let e=Math.round(t*100);this.powerFill.style.height=e+"%",this.powerKnob.style.top=e+"%",this.powerVal.textContent=e+" %"}sync(t,e){this._lastGame=t,this._lastCam=e;let n=t.stats,i=t.match;if(this.root.classList.toggle("mysn-online",!!i),this.root.classList.toggle("mysn-watching",!!t.spectating),t.spectating){let h=t.spectating;this.modeLabel.textContent=`Sledujem: ${h.title}`,this.stats.innerHTML=`<span>${oe(h.kind==="league"?"Ligov\xFD z\xE1pas":h.kind==="solo"?"O najlep\u0161ie sk\xF3re":"Tr\xE9ning")}</span>${h.info?`<span><b>${oe(h.info)}</b></span>`:""}<span>Esc: menu, Presta\u0165 sledova\u0165</span>`;return}this.modeLabel.textContent=this.root.classList.contains("mysn-in-office")?"Liga: kancel\xE1ria":i?i.league?"Ligov\xE1 partia":i.training?"Tr\xE9ning s priate\u013Eom":"Partia":t.solo?"O najlep\u0161ie sk\xF3re":"Tr\xE9ning";let r=t.solo;if(r&&!i){let h=Math.max(0,Math.round(r.time));this.stats.innerHTML=`<span>Body <b>${t.soloScore}</b></span><span>S\xE9ria <b>${r.rules.brk}</b></span><span>Najvy\u0161\u0161ia <b>${r.best}</b></span><span>\u010Cas <b>${Math.floor(h/60)}:${String(h%60).padStart(2,"0")}</b></span><span>Hr\xE1 sa na <b>${oe(t.onText())}</b></span><span>Fauly <b>${r.fouls}</b></span><span class="${this._chalk>0?"mysn-chalk-on":"mysn-chalk-off"}">Krieda <b>${this._chalk>0?this._chalk:"F3"}</b></span>`}else if(i&&i.rules){let h=d=>oe(String(i.players[d].name).slice(0,16)),c=i.rules,u=d=>c.turn===d&&!c.over?" mysn-turn":"";this.stats.innerHTML=`<span class="mysn-sc${u(i.me)}">${h(i.me)} <b>${c.scores[i.me]}</b></span><span class="mysn-sc${u(1-i.me)}">${h(1-i.me)} <b>${c.scores[1-i.me]}</b>${i.players[1-i.me].online===!1?" <i>mimo</i>":""}</span><span>Na rade <b>${c.turn===i.me?"ty":h(c.turn)}</b></span><span>Hr\xE1 sa na <b>${oe(t.onText())}</b></span><span>S\xE9ria <b>${c.brk}</b></span><span class="${this._chalk>0?"mysn-chalk-on":"mysn-chalk-off"}">Krieda <b>${this._chalk>0?this._chalk:"F3"}</b></span>`}else this.stats.innerHTML=`<span>\xDAdery <b>${n.shots}</b></span><span>Spadnut\xE9 <b>${n.points>=0?n.potted:0}</b></span><span>Body <b>${n.points}</b></span><span>S\xE9ria <b>${n.run}</b></span><span>Najlep\u0161ia <b>${n.best}</b></span><span class="${this._chalk>0?"mysn-chalk-on":"mysn-chalk-off"}">Krieda <b>${this._chalk>0?this._chalk:"F3"}</b></span>`;let o=t.state,a=o==="place"?"Posu\u0148 bielu gu\u013Eu v D a potvr\u010F tla\u010Didlom Hotovo.":o==="watch"&&!t.message?"Na rade je s\xFAper.":o==="wait"?"\u010Cak\xE1m na v\xFDsledok s\xFAperovho \xFAderu\u2026":t.message;this.msg.textContent=[this._net,a].filter(Boolean).join("  "),this.msg.classList.toggle("mysn-hidden",!this.msg.textContent);let l=t.state;this.btnPlace.classList.toggle("mysn-hidden",l!=="place"),this.btnSkip.classList.toggle("mysn-hidden",l!=="moving"),this.btnUndo.disabled=l==="moving"||!t.history.length||!!i||!!r,this.btnHand.disabled=l!=="aim"||!!i||!!r,this.btnReset.disabled=!!i||!!r,this.powerBox.classList.toggle("mysn-off",l!=="aim");for(let h of Object.keys(this.camBtns))this.camBtns[h].classList.toggle("mysn-on",h===e)}};var ea=class{constructor(){this.balls=ts(),this.physics=new Oo(this.balls),this.state="aim",this.dir=0,this.history=[],this.respot=!0,this.stats={shots:0,potted:0,points:0,best:0,run:0},this.lastPots=[],this.message="",this.listeners=[]}get cue(){return this.balls[0]}on(t){this.listeners.push(t)}emit(t,e){for(let n of this.listeners)n(t,e)}reset(){let t=ts();for(let e=0;e<t.length;e++)Object.assign(this.balls[e],t[e]);this.history=[],this.stats={shots:0,potted:0,points:0,best:this.stats.best,run:0},this.state="aim",this.dir=0,this.message="Nov\xE9 rozostavenie.",this.emit("change")}canShoot(){return this.state==="aim"}shoot(t,e=0,n=0){if(!this.canShoot())return!1;this.history.push({snap:Ti(this.balls),stats:{...this.stats},dir:this.dir}),this.history.length>30&&this.history.shift(),this.physics.events=[],this.physics.firstContact=null,this.lastPots=[];let i={dir:this.dir,power:t,side:e,top:n,cx:this.cue.p.x,cz:this.cue.p.z};return Fo(this.cue,this.dir,t,e,n),this.stats.shots++,this.state="moving",this.message="",this.emit("shot",{power:t,shot:i,before:this.history[this.history.length-1].snap}),!0}tick(t){if(this.state!=="moving")return[];let e=this.physics.advance(t),n=this.physics.events;this.physics.events=[];for(let i of n)i.type==="pot"&&this.lastPots.push(this.balls[i.a]);return e||this.settle(),n}settle(){let t=this.lastPots,e=t.includes(this.cue),n=0;for(let r of t)r.kind!=="white"&&(n+=Yn[r.kind].value);let i=t.filter(r=>r.kind!=="white").length;if(this.stats.potted+=i,this.stats.points+=n,i>0&&!e?(this.stats.run+=n,this.stats.best=Math.max(this.stats.best,this.stats.run)):this.stats.run=0,this.respot)for(let r of t)r.kind!=="white"&&r.kind!=="red"&&this.spotColour(r);this.balls.every(r=>r.kind==="white"||!r.on)?this.message="St\xF4l je \u010Dist\xFD. V\xFDborne! Stla\u010D \u201ENov\xE9 rozostavenie\u201C.":e?this.message="Biela spadla. Polo\u017E ju do D.":i?this.message=t.filter(r=>r.kind!=="white").map(r=>Yn[r.kind].name).join(", ")+(i>1?" v jamk\xE1ch.":" v jamke."):this.physics.firstContact||(this.message="Biela netrafila \u017Eiadnu gu\u013Eu."),e?this.startPlace():this.state="aim",this.emit("settle",{pots:t,points:n}),this.emit("change")}spotColour(t){let e=["black","pink","blue","brown","green","yellow"],n=(o,a)=>Ho(this.balls,o,a,t),i=null,r=Rn[t.kind];if(n(r.x,r.z))i=r;else for(let o of e)if(n(Rn[o].x,Rn[o].z)){i=Rn[o];break}if(!i){for(let o=r.x;o<1.78;o+=.002)if(n(o,r.z)){i={x:o,z:r.z};break}}i=i||r,t.p.x=i.x,t.p.z=i.z,t.on=!0,t.potted=null,t.moving=!1,t.v.x=t.v.z=0,t.w.x=t.w.y=t.w.z=0}startPlace(){let t=this.cue;t.on=!0,t.potted=null,t.moving=!1,t.v.x=t.v.z=0,t.w.x=t.w.y=t.w.z=0;let e=[[Ye-.1,0],[Ye-.1,.15],[Ye-.1,-.15],[Ye-.2,0]].find(([n,i])=>Ho(this.balls,n,i,t))||[Ye-.15,.05];t.p.x=e[0],t.p.z=e[1],this.state="place",this.emit("change")}movePlace(t,e){if(this.state!=="place")return!1;let n=Math.min(t,Ye),i=e,r=n-Ye,o=Math.hypot(r,i),a=wi-5e-4;return o>a&&(n=Ye+r/o*a,i=i/o*a),!vu(n,i)||!Ho(this.balls,n,i,this.cue)?!1:(this.cue.p.x=n,this.cue.p.z=i,!0)}confirmPlace(){this.state==="place"&&(this.state="aim",this.message="",this.emit("change"))}ballInHand(){this.state==="aim"&&(this.state="place",this.emit("change"))}undo(){if(this.state==="moving"||!this.history.length)return!1;let t=this.history.pop();return es(this.balls,t.snap),this.stats=t.stats,this.dir=t.dir,this.state="aim",this.message="\xDAder vr\xE1ten\xFD.",this.emit("change"),!0}finish(){if(this.state!=="moving")return[];let t=[];for(let e=0;e<600&&this.state==="moving";e++)t=t.concat(this.tick(.05));return t}aimAtNearest(){let t=this.cue,e=null,n=1/0;for(let i of this.balls){if(i===t||!i.on)continue;let r=Math.hypot(i.p.x-t.p.x,i.p.z-t.p.z);r<n&&r>2*.02625&&(n=r,e=i)}e&&(this.dir=Math.atan2(e.p.z-t.p.z,e.p.x-t.p.x))}};var ss={red:1,yellow:2,green:3,brown:4,blue:5,pink:6,black:7},Er=["yellow","green","brown","blue","pink","black"],hi={red:"\u010Derven\xE1",yellow:"\u017Elt\xE1",green:"zelen\xE1",brown:"hned\xE1",blue:"modr\xE1",pink:"ru\u017Eov\xE1",black:"\u010Dierna",white:"biela",colour:"farba"};function Ou(s=0){return{scores:[0,0],turn:s,on:"red",brk:0,over:!1,winner:null}}function Rc(s){return s==="red"?"\u010Derven\xE1":s==="colour"?"\u013Eubovo\u013En\xE1 farba":s==="done"?"koniec framu":s==="any"?"\u013Eubovo\u013En\xE1 gu\u013Ea":hi[s]||s}function Cc(s,t){if(s.on==="red"||s.on==="colour")return t*8+(s.on==="colour"?7:0)+27;let e=Er.indexOf(s.on);return e<0?0:Er.slice(e).reduce((n,i)=>n+ss[i],0)}function Pc(s,t){let e={...s,scores:[...s.scores]},n=t.first||null,i=t.pots||[],r=i.includes("white"),o=i.filter(p=>p!=="white"),a=t.reds,l=e.turn,h="",c=0,u=4,d=[],f=n&&n!=="white"?n:null,g=p=>{p&&ss[p]&&(u=Math.max(u,ss[p]))};if(e.on==="red"){f?f!=="red"&&(h=`Prv\xE1 trafen\xE1 gu\u013Ea mus\xED by\u0165 \u010Derven\xE1 (trafen\xE1 ${hi[f]}).`,g(f)):h="Biela netrafila \u017Eiadnu gu\u013Eu.";for(let p of o)p!=="red"&&(d.push(p),g(p),h=h||`Spadla ${hi[p]}, hralo sa na \u010Derven\xFA.`);!h&&!r&&(c=o.filter(p=>p==="red").length)}else if(e.on==="colour"){let p=f&&f!=="red"?f:null;f?p||(h="Po \u010Dervenej treba trafi\u0165 farbu (trafen\xE1 \u010Derven\xE1)."):h="Biela netrafila \u017Eiadnu gu\u013Eu.",g(p);for(let E of o)E!=="red"&&d.push(E),E!==p&&(g(E==="red"?null:E),h=h||`Spadla ${hi[E]}, nominovan\xE1 bola ${hi[p]}.`);!h&&!r&&o.includes(p)&&(c=ss[p])}else{let p=e.on;g(p),f?f!==p&&(h=`Prv\xE1 trafen\xE1 gu\u013Ea mus\xED by\u0165 ${hi[p]} (trafen\xE1 ${hi[f]}).`,g(f)):h="Biela netrafila \u017Eiadnu gu\u013Eu.";for(let E of o)g(E),E!==p&&(h=h||`Spadla ${hi[E]}, hralo sa na ${hi[p]}.`);!h&&!r&&o.includes(p)&&(c=ss[p]);for(let E of o)E!=="red"&&!(E===p&&c>0)&&d.push(E)}r&&!h&&(h="Biela spadla do jamky.");let x="";if(h)e.scores[1-l]+=u,e.turn=1-l,e.brk=0,x=`Faul: ${h} S\xFAper dost\xE1va ${u} ${u<5?"body":"bodov"}.`,(e.on==="red"||e.on==="colour")&&(e.on=a>0?"red":"yellow");else if(c>0){if(e.scores[l]+=c,e.brk+=c,e.on==="red")e.on="colour";else if(e.on==="colour")e.on=a>0?"red":"yellow";else{let p=Er.indexOf(e.on);e.on=p<Er.length-1?Er[p+1]:"done"}x=`+${c}, s\xE9ria ${e.brk}.`}else e.turn=1-l,e.brk=0,(e.on==="red"||e.on==="colour")&&(e.on=a>0?"red":"yellow"),x="Bez bodov, na rade je s\xFAper.";let y=s.on==="black";if(e.on==="done"||y&&h){if(e.scores[0]===e.scores[1])return e.on="black",e.turn=h?e.turn:1-l,d.includes("black")||d.push("black"),x+=" Rem\xEDza, \u010Dierna sa vracia na spot.",{state:e,points:c,foul:!!h,penalty:h?u:0,respot:d,inHand:!0,msg:x};e.over=!0,e.on="done",e.winner=e.scores[0]>e.scores[1]?0:1;let p=d.indexOf("black");p>=0&&d.splice(p,1)}return{state:e,points:c,foul:!!h,penalty:h?u:0,respot:d,inHand:r,msg:x}}var wr="mySnookerSolo",na=class extends ea{constructor(){super(),this.match=null,this.remote=!1,this.onNet=null,this.solo=null,this.onSolo=null}startSolo(t){this.match=null,this.remote=!1,this.history=[];let e=null;if(!t)try{e=JSON.parse(window.localStorage.getItem(wr)||"null")}catch{e=null}if(e&&e.balls&&e.rules&&!e.done){if(es(this.balls,e.balls),this.solo={rules:e.rules,time:e.time||0,shots:e.shots||0,fouls:e.fouls||0,best:e.best||0,done:!1},this.message="Pokra\u010Duje\u0161 v rozohranom frame.",e.inHand){this.startPlace();return}this.state="aim"}else{let n=ts();for(let i=0;i<n.length;i++)Object.assign(this.balls[i],n[i]);this.solo={rules:Ou(0),time:0,shots:0,fouls:0,best:0,done:!1},this.message="Nov\xFD frame: potop \u010Do najviac bodov. Rozb\xEDja\u0161 z D.",this.saveSolo(!0),this.startPlace();return}this.aimAtNearest(),this.emit("change")}get soloScore(){let t=this.solo&&this.solo.rules;return t?Math.max(0,t.scores[0]-t.scores[1]):0}saveSolo(t){if(this.solo)try{if(this.solo.done){window.localStorage.removeItem(wr);return}let e=this.solo;window.localStorage.setItem(wr,JSON.stringify({balls:Ti(this.balls),rules:e.rules,time:Math.round(e.time),shots:e.shots,fouls:e.fouls,best:e.best,inHand:!!t}))}catch{}}saveSoloTime(){let t=this.solo;if(!(!t||t.done))try{let e=JSON.parse(window.localStorage.getItem(wr)||"null");e&&!e.done&&(e.time=Math.round(t.time),window.localStorage.setItem(wr,JSON.stringify(e)))}catch{}}stopSolo(){this.solo&&this.saveSolo(this.state==="place"),this.solo=null,super.reset()}settleSolo(){let t=this.solo,e=this.lastPots.map(l=>l.kind),n=this.balls.filter(l=>l.kind==="red"&&l.on).length,i=this.physics.firstContact,r=Pc(t.rules,{first:i?i.kind:null,pots:e,reds:n});for(let l of r.respot){let h=this.balls.find(c=>c.kind===l);h&&this.spotColour(h)}let o={...r.state,turn:0};r.foul&&(t.fouls++,o.brk=0),t.rules=o,t.shots++,t.best=Math.max(t.best,o.brk);let a=this.soloScore;if(o.over||o.on==="done"){t.done=!0,t.rules.over=!0,this.state="over",this.message=`Frame je dohran\xFD: ${a} ${a===1?"bod":a<5&&a>1?"body":"bodov"} za ${Ic(t.time)}, najvy\u0161\u0161ia s\xE9ria ${t.best}.`,this.saveSolo(!1),this.emit("settle",{pots:this.lastPots,points:r.points}),this.emit("change"),this.onSolo&&this.onSolo({points:a,seconds:Math.round(t.time),shots:t.shots,fouls:t.fouls,brk:t.best});return}if(this.message=r.points>0?`+${r.points}, s\xE9ria ${o.brk}.`:"Bez bodov, s\xE9ria sa skon\u010Dila.",r.foul&&(this.message=`Faul: ${r.msg.replace(/^Faul: /,"").replace(/ Súper dostáva (\d+) (body|bodov)\./,"")} M\xEDnus ${r.penalty} ${r.penalty<5?"body":"bodov"}.`),this.emit("settle",{pots:this.lastPots,points:r.points}),r.inHand){this.saveSolo(!0),this.startPlace();return}this.state="aim",this.saveSolo(!1),this.emit("change")}get online(){return!!this.match}get myTurn(){let t=this.match;return!t||t.turn===t.me&&!t.rules.over}canShoot(){return!this.spectating&&super.canShoot()&&(!this.match||this.myTurn&&!this.remote&&this.match.status==="active")}startMatch(t){this.solo&&this.stopSolo(),this.match={id:t.id,me:t.me,seq:-1,turn:0,rules:null,inHand:!1,players:t.players,status:t.status,league:!!t.league,training:!!t.training,best:[0,0]},this.history=[],this.remote=!1,this.applyState(t.state,t.seq)}endMatch(){this.match=null,this.solo=null,this.remote=!1,this.reset()}applyState(t,e){let n=this.match;if(t){if(t.balls)es(this.balls,t.balls);else{let i=ts();for(let r=0;r<i.length;r++)Object.assign(this.balls[r],i[r])}for(let i of this.balls)i.moving=!1;if(n.seq=e,n.rules={...t.rules,scores:[...t.rules.scores]},n.turn=n.rules.turn,n.inHand=!!t.inHand,n.best=Array.isArray(t.best)?[...t.best]:[0,0],n.last=t.last||null,this.remote=!1,this.message=t.msg||"",n.rules.over)this.state="over";else if(n.turn===n.me){if(n.inHand){this.startPlace();return}this.state="aim",this.aimAtNearest()}else n.inHand&&this.startPlace(),this.state="watch";this.emit("change")}}shoot(t,e=0,n=0){if(!this.canShoot())return!1;let i=this.cue,r={dir:this.dir,power:t,side:e,top:n,cx:i.p.x,cz:i.p.z};return super.shoot(t,e,n)?(this.match&&this.onNet&&this.onNet("shot",{seq:this.match.seq+1,shot:r}),!0):!1}playRemote(t,e=!1){let n=this.cue;n.on=!0,n.potted=null,n.p.x=t.cx,n.p.z=t.cz,this.dir=t.dir,this.physics.events=[],this.physics.firstContact=null,this.lastPots=[],Fo(n,t.dir,t.power,t.side,t.top),this.remote=!e,this.state="moving",this.message="",this.emit("shot",{power:t.power})}spectateBegin(t){this._saved={snap:Ti(this.balls),state:this.state==="moving"?"aim":this.state,solo:this.solo},this.solo=null,this.spectating=t,this.state="watch",this.message="",this.emit("change")}spectateEnd(){let t=this._saved;if(this.spectating=null,t){es(this.balls,t.snap);for(let e of this.balls)e.moving=!1;this.solo=t.solo,this.state=t.state==="watch"?"aim":t.state}this._saved=null,this.message="",this.emit("change")}spectateSet(t){if(t)es(this.balls,t);else{let e=ts();for(let n=0;n<e.length;n++)Object.assign(this.balls[n],e[n])}for(let e of this.balls)e.moving=!1;this.state="watch",this.emit("change")}settle(){if(this.spectating){this.state="watch",this.emit("change");return}if(this.solo&&!this.match){this.settleSolo();return}if(!this.match){super.settle();return}if(this.remote){this.remote=!1,this.state="wait",this.emit("change");return}let t=this.match,e=this.lastPots.map(h=>h.kind),n=this.balls.filter(h=>h.kind==="red"&&h.on).length,i=this.physics.firstContact,r=t.training?this.judgeTraining(t,e,n):Pc(t.rules,{first:i?i.kind:null,pots:e,reds:n});for(let h of r.respot){let c=this.balls.find(u=>u.kind===h);c&&this.spotColour(c)}r.inHand&&(this.cue.on=!1);let o=t.players.map(h=>h.name),a={balls:Ti(this.balls),rules:r.state,inHand:r.inHand,msg:`${o[t.me]}: ${r.msg}`+(r.state.over?` Koniec partie, v\xED\u0165az: ${o[r.state.winner]}.`:r.state.turn!==t.me?` Na rade je ${o[r.state.turn]}.`:""),last:{by:t.me,points:r.points,foul:r.foul,penalty:r.penalty,brk:r.state.brk},best:(()=>{let h=[...t.best||[0,0]];return h[t.me]=Math.max(h[t.me]||0,r.state.turn===t.me?r.state.brk:t.rules.brk+r.points),h})()},l=t.seq+1;this.applyState(a,l),this.emit("settle",{pots:this.lastPots,points:r.points}),this.onNet&&this.onNet("settle",{seq:l,state:a,points:r.points,foul:r.foul})}judgeTraining(t,e,n){let i=t.rules,r=e.includes("white"),o=0;for(let g of e)g!=="white"&&(o+=ss[g]||0);let a=n>0?e.filter(g=>g!=="white"&&g!=="red"):[],l=[...i.scores];l[t.me]+=o;let h=o>0&&!r,u=this.balls.filter(g=>g.kind!=="white"&&g.on).length+a.length===0,d={...i,scores:l,on:"any",brk:h?i.brk+o:0,turn:h||u?t.me:1-t.me,over:u,winner:u?l[1]>l[0]?1:0:null},f=(o?`${o} ${o===1?"bod":o<5?"body":"bodov"}.`:"Ni\u010D nespadlo.")+(r?" Biela spadla, s\xFAper ju polo\u017E\xED do D.":"");return{state:d,points:o,foul:!1,penalty:0,respot:a,inHand:r,msg:f}}onText(){return this.solo?Rc(this.solo.rules.on):this.match&&this.match.rules?Rc(this.match.rules.on):""}undo(){return this.match||this.solo?!1:super.undo()}reset(){this.match||this.solo||super.reset()}ballInHand(){!this.match&&!this.solo&&super.ballInHand()}};function Ic(s){let t=Math.max(0,Math.round(s)),e=Math.floor(t/3600),n=Math.floor(t%3600/60),i=String(t%60).padStart(2,"0");return e?`${e}:${String(n).padStart(2,"0")}:${i}`:`${n}:${i}`}var Lc=class{constructor(t){this.base=t.restUrl||"/wp-json/my-snooker/v1/",this.nonce=t.nonce||"",this.down=!1}async call(t,e,n="POST"){let i;try{i=await fetch(this.base+t,{method:n,credentials:"same-origin",cache:"no-store",headers:{"Content-Type":"application/json","X-WP-Nonce":this.nonce},body:e?JSON.stringify(e):void 0})}catch{this.down=!0;let a=new Error("Spojenie so serverom sa preru\u0161ilo.");throw a.net=!0,a}this.down=!1;let r=await i.json().catch(()=>null);if(!i.ok){let o=new Error(r&&r.message||"Chyba servera "+i.status);throw o.status=i.status,o}return r}},ia=class{constructor(t,e,n){this.cfg=t,this.net=new Lc(t),this.game=e,this.hooks=n,this.data={live:[],invites:[],outgoing:null,paused:[]},this.lobbyOpen=!1,this.matchId=0,this.info=null,this.queue=[],this.sending=!1,this.played=new Set,this.pendingInfo=null,this.lastAimv=-1,this.aimTarget=null,this._aimSent="",this._aimT=0,this._pollT=0,this._polling=!1,this.oppOnline=!0,e.onNet=(i,r)=>this.send(i,r),this.ping(),this._pingTimer=setInterval(()=>this.ping(),5e3)}get inMatch(){return!!this.game.match}async ping(){try{let t=await this.net.call("ping",{state:this.inMatch?"match":this.watching?"watch":this.queueing?"queue":this.lobbyOpen?"lobby":"training"});t.nonce&&(this.net.nonce=t.nonce);let e=(this.data.invites||[]).map(i=>i.id).join(",");this.data=t;let n=(t.invites||[]).map(i=>i.id).join(",");n&&n!==e&&!this.inMatch&&this.hooks.invite(t.invites[0]),t.outgoing&&t.outgoing.status==="declined"&&this._waitFor===t.outgoing.id&&(this._waitFor=0,this.hooks.toast(`${t.outgoing.to.name}: pozv\xE1nka odmietnut\xE1.`)),t.match&&!this.inMatch&&this.join(t.match),this.hooks.lobby(t)}catch{this.hooks.status()}}async invite(t,e=!1,n=!1){try{let i=await this.net.call("invite",{user:t,league:e?1:0,training:n?1:0});this._waitFor=i.id,await this.ping()}catch(i){this.hooks.toast(i.message)}}async cancelInvite(){let t=this.data.outgoing;t&&(this._waitFor=0,await this.net.call("cancel",{id:t.id}).catch(()=>null),await this.ping())}async answer(t,e){try{await this.net.call("answer",{id:t,accept:e?1:0}),this.data.invites=(this.data.invites||[]).filter(n=>n.id!==t),e?await this.join(t):await this.ping()}catch(n){this.hooks.toast(n.message),this.ping()}}async resume(t){try{await this.net.call("resume",{id:t}),await this.join(t)}catch(e){this.hooks.toast(e.message)}}async leave(t){let e=this.matchId;e&&(await this.flush(),await this.net.call("leave",{id:e,mode:t}).catch(()=>null),this.stopMatch(t==="resign"?"Partia je vzdan\xE1.":"Partia je preru\u0161en\xE1. Pokra\u010Dova\u0165 sa d\xE1 v ponuke Posla\u0165 v\xFDzvu."))}roomPost(t){return this.net.call("room",t).catch(()=>null)}async rooms(){try{return(await this.net.call("rooms",null,"GET")).rooms||[]}catch{return[]}}watchStart(t,e){this.watchStop(),this.watching={type:t,id:e};let n=async()=>{if(!(!this.watching||this._watchBusy)){this._watchBusy=!0;try{let i=await this.net.call((t==="match"?"watch/":"room/")+e,null,"GET");this.watching&&this.hooks.watch&&this.hooks.watch(t,i)}catch(i){this.hooks.watch&&this.hooks.watch(t,{closed:!0,error:i.message})}this._watchBusy=!1}};n(),this._watchT=setInterval(n,500)}watchStop(){clearInterval(this._watchT),this.watching=null}async seek(t){if(clearInterval(this._queueT),this.queueing=!!t,!t)return await this.net.call("league/queue",{on:0}).catch(()=>null),null;let e=async()=>{if(this.queueing)try{let n=await this.net.call("league/queue",{on:1});n.matched?(this.queueing=!1,clearInterval(this._queueT),this.hooks.queue&&this.hooks.queue("found"),await this.ping()):this.hooks.queue&&this.hooks.queue("wait",n.waiting||1)}catch(n){this.queueing=!1,clearInterval(this._queueT),this.hooks.queue&&this.hooks.queue("error",n.message)}};return await e(),this.queueing&&(this._queueT=setInterval(e,3e3)),!0}async join(t){if(!this._joining){this._joining=!0;try{let e=await this.net.call("match/"+t+"?t="+Date.now(),null,"GET");if(e.status!=="active"){this.hooks.toast(e.status==="paused"?"Partia je preru\u0161en\xE1.":"Partia u\u017E skon\u010Dila.");return}this.matchId=e.id,this.info=e,this.played=new Set,this.queue=[],this.lastAimv=e.aimv,this.game.startMatch(e),this.hooks.started(e),this.recover(e),this.oppOnline=e.players[1-e.me].online}catch(e){this.hooks.toast(e.message)}finally{this._joining=!1}}}recover(t){let e=t.shot;e&&e.seq===t.seq+1&&(this.played.add(e.seq),this.game.playRemote(e,e.by===t.me))}stopMatch(t){let e=(t||"")+(this.stopMatchText||"");this.stopMatchText="",this.matchId=0,this.info=null,this.queue=[],this.aimTarget=null,this.game.endMatch(),this.hooks.ended(e)}send(t,e){this.matchId&&(this.queue.push({type:t,d:{id:this.matchId,...e}}),this.flush())}async flush(){return this.sending?this._flushP:(this.sending=!0,this._flushP=(async()=>{for(;this.queue.length;){let t=this.queue[0];try{await this.net.call(t.type,t.d),this.queue.shift()}catch(e){e.net||e.status&&e.status>=500?(this.hooks.status(),await new Promise(n=>setTimeout(n,2e3))):this.queue.shift()}}this.sending=!1,this.hooks.status()})(),this._flushP)}update(t,e){if(!this.matchId)return;let n=this.game,i=performance.now(),r=this._lastNow?i-this._lastNow:0;this._lastNow=i,this._pollT+=r;let o=n.state==="watch"||n.state==="wait"||n.remote;if(!this._polling&&this._pollT>=(o?700:2500)&&(this._pollT=0,this.poll()),this._aimT+=r,e&&n.myTurn&&(n.state==="aim"||n.state==="place")&&this._aimT>=300){let a={seq:n.match.seq,dir:+e.dir.toFixed(4),cx:+e.cx.toFixed(4),cz:+e.cz.toFixed(4),pull:+e.pull.toFixed(3),side:+e.side.toFixed(2),top:+e.top.toFixed(2),place:n.state==="place"?1:0},l=JSON.stringify(a);l!==this._aimSent&&(this._aimT=0,this._aimSent=l,this.net.call("aim",{id:this.matchId,aim:a}).catch(()=>null))}if(this.pendingInfo&&n.state==="wait"){let a=this.pendingInfo;this.pendingInfo=null,this.applyInfo(a)}}async poll(){this._polling=!0;try{let t=await this.net.call("match/"+this.matchId+"?t="+Date.now(),null,"GET");this.applyInfo(t)}catch(t){(t.status===403||t.status===404)&&this.stopMatch("Partia sa nena\u0161la."),this.hooks.status()}finally{this._polling=!1}}applyInfo(t){let e=this.game;if(!e.match||t.id!==this.matchId)return;this.info=t;let n=t.players[1-t.me];if(n.online!==this.oppOnline&&(this.oppOnline=n.online,this.hooks.status()),e.match.players=t.players,e.match.status=t.status,t.status==="finished"&&!(t.seq>e.match.seq)){let i=t.winner===t.players[t.me].id,r=t.league?` Liga: ${i?"+":"-"}${Math.max(0,t.delta)} bodov.`:"";this.lastLeague=!!t.league,this.stopMatchText=r,this.stopMatch(t.result==="resign"?i?`${n.name} sa vzd\xE1va partie. V\xED\u0165azstvo je tvoje!`:"Partia je vzdan\xE1.":i?`V\xED\u0165azstvo je tvoje! Sk\xF3re ${t.scores[t.me]} : ${t.scores[1-t.me]}.`:`V\xED\u0165az partie: ${n.name}, sk\xF3re ${t.scores[1-t.me]} : ${t.scores[t.me]}.`);return}if(t.status==="paused"){this.stopMatch(`Partia je preru\u0161en\xE1 (${this.oppOnline?"s\xFAper ju preru\u0161il":"s\xFAper dlho neodpovedal"}). Dokon\u010Di\u0165 sa d\xE1 v ponuke Posla\u0165 v\xFDzvu, Rozohran\xE9 partie.`);return}if(t.seq>e.match.seq){if(e.state==="moving"){this.pendingInfo=t;return}if(this.queue.length)return;this.aimTarget=null,e.applyState(t.state,t.seq),t.status==="finished"&&this.applyInfo(t);return}if(t.shot&&t.shot.seq===e.match.seq+1&&t.shot.by!==t.me&&!this.played.has(t.shot.seq)&&e.state==="watch"){this.played.add(t.shot.seq),this.aimTarget=null,e.playRemote(t.shot,!1);return}t.aim&&t.aimv!==this.lastAimv&&e.state==="watch"&&t.aim.seq===e.match.seq&&(this.lastAimv=t.aimv,this.aimTarget=t.aim)}async league(){try{return await this.net.call("league?t="+Date.now(),null,"GET")}catch{return null}}async leagueArchive(){try{return await this.net.call("league/archive?t="+Date.now(),null,"GET")}catch{return null}}async scores(){try{return await this.net.call("scores?t="+Date.now(),null,"GET")}catch{return null}}async saveScore(t){for(let e=0;e<5;e++)try{return await this.net.call("score",t)}catch(n){if(!n.net)return{error:n.message};await new Promise(i=>setTimeout(i,3e3))}return{error:"Sk\xF3re sa nepodarilo ulo\u017Ei\u0165, spojenie so serverom nefunguje."}}statusText(){return this.net.down?"Spojenie so serverom sa preru\u0161ilo, sk\xFA\u0161am znova. Partia je ulo\u017Een\xE1.":this.inMatch&&!this.oppOnline?"S\xFAper je mimo hry, \u010Dak\xE1m na jeho n\xE1vrat. Po 10 min\xFAtach sa partia preru\u0161\xED a d\xE1 sa v nej pokra\u010Dova\u0165 nesk\xF4r.":""}};var Hu="mySnookerSettings",Fu=.5;function lx(){let t={lines:!1,quality:/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)?"low":"high",volume:.8,respot:!0,contact:!0,camera:"cue",cue:"club"};try{let e=window.localStorage.getItem(Hu);if(e)return{...t,...JSON.parse(e)}}catch{}return t}function Tr(s){try{window.localStorage.setItem(Hu,JSON.stringify(s))}catch{}}function cx(){try{let s=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(s.getContext("webgl2")||s.getContext("webgl")))}catch{return!1}}function hx(s,t={}){if(!cx())return s.innerHTML='<div class="mysn-nogl">Tento prehliada\u010D nepodporuje 3D grafiku (WebGL). Sk\xFAs aktu\xE1lny Chrome, Firefox, Edge alebo Safari.</div>',null;let e=lx();delete e.guide,e.lines=e.lines===!0;let n=e.quality==="high",i=new yo({antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,n?2:1.25)),i.outputColorSpace=ce,i.toneMapping=ac,i.toneMappingExposure=1.05,i.shadowMap.enabled=n,i.shadowMap.type=oc,i.domElement.className="mysn-canvas",s.appendChild(i.domElement);let r=new Us;Cu(r,e.quality);let o=new Set(r.children),a=Tu(r,e.quality,{news:t.news,rss:t.rss,site:t.site,user:t.user}),l=r.children.filter(m=>!o.has(m)),h=Ru(i);r.add(h.group);let c=new na,u=t.user||null;c.respot=!!e.respot,c.aimAtNearest();let d=new ks(i),f=d.fromScene(new No,.04).texture;d.dispose();let g=new $o(r,c.balls,e.quality,f),x=Object.assign({selected:["club","short","break","soft"],def:"club",custom:{}},e.myCues||{}),y=m=>{let v=bu(m),k=x.custom[v.id];if(!k)return v;let H=Math.max(-.05,Math.min(.05,k.power||0)),I=Math.max(-.1,Math.min(.1,k.grip||0));return{...v,name:k.name?String(k.name).slice(0,24):v.name,power:Math.min(1,v.power*(1+H)),grip:v.grip*(1+I),colors:{shaft:k.shaft||v.colors.shaft,butt:k.butt||v.colors.butt}}},p=y(e.cue),E=new qo(r,p);a.selectCue(p.id);let S=new Yo(r),_=new Ko(i);e.camera="cue",_.setMode("cue");let z=new Qo;z.setVolume(e.volume);let P=new Set(r.children),U=Pu(r),N=[...l,...r.children.filter(m=>!P.has(m))];for(let m of o)m.isMesh&&m.geometry&&m.geometry.type==="PlaneGeometry"&&m.rotation.x<-1&&N.push(m);let w=Iu(r,e.quality),M=Lu(r),T="",G=null,W=()=>({office:{league:ut,mode:T,countries:wc,cues:je.map(m=>y(m.id)),myCues:x,cue:G,user:u}}),$=()=>{M.setRack(je.map(m=>y(m.id)),x.selected,x.selected.includes(x.def)?x.def:x.selected[0]),L==="office"&&Z.showView("office",je,p.id,W())},V=m=>{e.myCues=x,Tr(e),p&&x.custom[p.id]&&(p=y(p.id),E.setSpec(p),Nt.setCue(p),Z.setCueInfo(p)),m?M.setRack(je.map(v=>y(v.id)),x.selected,x.selected.includes(x.def)?x.def:x.selected[0]):$()},O=async()=>{if(!Pt)return null;let m=await Pt.league();if(m){ut=m,a.setLeague(m),M.setBoards(m,[]);let v=m.player&&Xo(m.player.country);M.setCard(m,u&&u.name,v?v.name:"");let k=[];for(let H of[1,2,3,4])for(let I of m.leagues&&m.leagues[H]||[]){let ct=Xo(I.country);if(ct){let Et=k.filter(Vt=>Vt.code===ct.code).length;k.push({id:I.user.id,name:I.user.name,league:I.league,points:I.points,rank:I.rank,code:ct.code,lat:ct.lat+Et%3*1.6,lon:ct.lon+Math.floor(Et/3)*2.2+Et%3*1.2})}}K=k,M.setMap(k,u&&u.id),$()}return m},K=[],X=new Set(["chair","bar","office"]),rt="",vt="Kancel\xE1ria: F1 n\xE1stenka s kl\xE1vesmi za tebou, F8 vizitka (registr\xE1cia), F9 alebo dvere \u0160TADI\xD3N: vyh\u013Eada\u0165 z\xE1pas. Esc sp\xE4\u0165 do herne.",yt="home",zt=document.createElement("div");zt.className="mysn-fade",s.appendChild(zt);let Tt=!1,Y=0,it=0,At=null,ft=0,Ot=0,Gt="",Ut=null,te=()=>c.solo?`${c.soloScore} b., s\xE9ria ${c.solo.rules.brk}`:`body ${c.stats.points}, s\xE9ria ${c.stats.run}`,D=(m,v)=>{if(!Pt||!u)return;let k=Tt&&!c.match&&!c.spectating&&m!=="close",H=c.solo?"solo":"training";if(!k){Pt.roomPost({door:0,kind:H,seq:Y});return}m==="shot"&&(Y++,At={before:v.before,shot:v.shot});let I={...At||{},info:te()};(m==="settle"||m==="door"||m==="change")&&(it++,I.after=Ti(c.balls),I.ver=it,I.place=c.state==="place"?1:0),Pt.roomPost({door:1,kind:H,seq:Y,data:I})},tt="",A=()=>{let m=c.spectating,v=yt==="league"?"blue":m?m.kind==="solo"?"green":"red":!c.match&&!c.solo||c.match&&c.match.training?"red":"green";v!==tt&&(tt=v,h.setFelt(v))},bt=m=>{m!==yt&&(zt.classList.add("mysn-on"),setTimeout(()=>{yt=m;let v=m==="league";for(let k of N)k.visible=!v;w.root.visible=v,A(),r.background.setHex(v?131846:790292),v&&L&&pt(),xt(),lt(),setTimeout(()=>zt.classList.remove("mysn-on"),60)},350))},lt=()=>{let m=c.match,v=ut,k=v&&v.season?`${v.season.name} \xB7 do konca ${v.season.daysLeft} dn\xED`:"My Snooker liga";m&&m.rules?w.setScreen({title:m.league?"LIGOV\xC1 PARTIA":"PARTIA",names:m.players.map(H=>H.name),scores:m.rules.scores,turn:m.rules.over?-1:m.rules.turn,brk:m.rules.brk,on:c.onText(),footer:k}):w.setScreen({title:"MY SNOOKER LIGA",idle:v&&v.me?`${v.me.league}. liga \xB7 ${v.me.rank}. miesto \xB7 ${v.me.points} bodov`:"Vyzvi hr\xE1\u010Da z ligy",footer:k})},ut=null,gt=-1,It=new Wo(t.radio,()=>(z.unlock(),z.ctx));e.radio&&typeof e.radio=="object"&&(Object.assign(It.params,e.radio.params||{}),It.index=Math.min(It.stations.length-1,e.radio.index??-1));let Bt=m=>{U.setControls(It.params,It.station?It.station.name:"",It.on),e.radio={params:It.params,index:It.index},Tr(e),L==="mixer"&&m!=="param"&&Z.showView("mixer",je,p.id,{radio:It})};It.onChange=Bt,U.setControls(It.params,It.station?It.station.name:"",!1);let R=document.createElement("div");s.appendChild(R);let b={side:0,top:0},J=!1,ot=!1,mt=-1e9,et=!1,Yt=!!(window.matchMedia&&window.matchMedia("(pointer: fine)").matches),L=null,st={yaw:0,pitch:0},F=!1,j=3,Q=.2,ht=0,Mt=-1,Rt=0,Kt={chalkFreeze:null},Wt={s:.022,h:.0115,d:.009},ne=new re;{let m=new _t({color:16052970,roughness:.8}),v=new _t({color:3108822,roughness:.95}),k=(jt,Jt,Ft,Zt,ye,Te,Ae)=>{let Oe=new Dt(new Ct(jt,Jt,Ft),Ae);Oe.position.set(Zt,ye,Te),ne.add(Oe)},{s:H,h:I,d:ct}=Wt,Et=-H/2+ct/2;k(H-ct,H,H,ct/2,0,0,m),k(ct,(H-I)/2,H,Et,(H+I)/4,0,m),k(ct,(H-I)/2,H,Et,-(H+I)/4,0,m),k(ct,I,(H-I)/2,Et,0,(H+I)/4,m),k(ct,I,(H-I)/2,Et,0,-(H+I)/4,m),k(.0012,I,I,-H/2+ct-6e-4,0,0,v);let Vt=8e-4;k(ct,Vt,I,Et,I/2-Vt/2,0,v),k(ct,Vt,I,Et,-I/2+Vt/2,0,v),k(ct,I,Vt,Et,0,I/2-Vt/2,v),k(ct,I,Vt,Et,0,-I/2+Vt/2,v)}ne.visible=!1,ne.rotation.order="YXZ";let B={up:.1,back:.22};r.add(ne);let kt=()=>{let m=c.match,v=m&&m.rules?{names:m.players.map(ct=>String(ct.name).slice(0,18)),scores:m.rules.scores,turn:m.rules.over?-1:m.rules.turn,brk:m.rules.brk,on:c.onText(),left:Cc(m.rules,c.balls.filter(ct=>ct.kind==="red"&&ct.on).length)}:null,k=c.solo,H=c.balls.filter(ct=>ct.kind==="red"&&ct.on).length,I=k&&!m?[["Body",c.soloScore],["S\xE9ria / najvy\u0161\u0161ia",`${k.rules.brk} / ${k.best}`],["\u010Cas",Ic(k.time)],["Hr\xE1 sa na",c.onText()],["Zost\xE1va na stole",Cc(k.rules,H)]]:null;a.updateScore(c.stats,{cue:p.name,chalk:ht,mode:v?"Partia cez internet":k?"O najlep\u0161ie sk\xF3re":"Tr\xE9ning",match:v,rows:I})},nt=m=>{if(L===m){pt();return}if(!(c.state==="moving"||Mt>=0)&&!(m==="chalk"&&c.state!=="aim")){if(L==="office"&&m!=="office"&&(It.setSpeakers(null),_.noClamp=!1,_.snapNext=!0,_.minViewZoom=1,_.setViewZoom(1),Z.openLeague(!1)),L=m,Nt.blocked=!0,m!=="chalk"&&!X.has(m)&&Nt.uncapture(),Z.showMenu(!1),m==="chalk"){let v=Math.cos(c.dir),k=Math.sin(c.dir),H=E.pivot.position.clone().add(new C(-v*B.back,B.up,-k*B.back)),I=H.clone().add(new C(-k*.22-v*.08,.09,v*.22-k*.08));_.setView(I,H),Mt=0,Rt=performance.now(),ne.visible=!0}else{let v=m==="mixer"?U.view:m==="office"?M.seat:a[m];if(_.setView(v.pos,v.look.clone()),m==="office"&&(_.noClamp=!0,_.jump(),rt="",It.setSpeakers(M.speakers),_.minViewZoom=.85,_.setViewZoom(.85)),X.has(m)){let k=v.look.clone().sub(v.pos);st.yaw=Math.atan2(k.z,k.x),st.pitch=Math.atan2(k.y,Math.hypot(k.x,k.z))}}m==="trophies"&&Lt(),Z.showView(m,je,p.id,m==="office"?W():m==="mixer"?{radio:It}:m==="magazine"?a.rssItems:m==="chair"?{news:a.newsItems,rss:a.rssItems}:a.newsItems)}},pt=()=>{if(!L)return;let m=L;L=null,Nt.blocked=!u,_.minViewZoom=1,_.setViewZoom(1),m==="office"&&(It.setSpeakers(null),rt="",Pt&&Pt.queueing&&(Pt.seek(!1),M.setDoor("")),_.noClamp=!1,_.snapNext=!0,Z.openLeague(!1)),Z.toggleReader(null),Z.openPhone(!1),Mt=-1,ne.visible=!1,_.setMode(c.state==="place"||F?"top":"cue"),Z.showView(null),Nt.capture()},$t=m=>{p=y(m),e.cue=p.id,Tr(e),E.setSpec(p),Nt.setCue(p),a.selectCue(p.id),Z.showView(L,je,p.id),Z.setCueInfo(p),kt()},qt=m=>{let v=m*p.power,k=p.grip*(ht>0?1:Q);c.shoot(v,b.side*k,b.top*k)&&(ht>0&&ht--,Z.setChalk(ht),kt(),z.cue(v),Z.sync(c,_.mode))},ae=m=>{J=!1,_.setMode(m),e.camera=m,Tr(e),Z.sync(c,_.mode)},le={unlock:()=>z.unlock(),camera:m=>ae(m),undo:()=>c.undo(),hand:()=>c.ballInHand(),fine:m=>{c.state==="aim"&&(c.dir+=m*.05*Math.PI/180)},skip:()=>{for(let m of c.finish())m.type==="pot"&&z.pot()},reset:()=>{c.reset(),c.aimAtNearest()},place:()=>{c.confirmPlace(),c.aimAtNearest()},resume:()=>{if(c.solo&&c.solo.done){le.training();return}Z.showMenu(!1),Z.openLobby(!1),Nt.capture()},solo:()=>q(!1),soloNew:()=>q(!0),training:()=>{c.stopSolo(),c.aimAtNearest(),xt(),Z.showMenu(!1),Nt.capture()},league:async()=>{Pt&&(Z.showMenu(!1),Z.openLobby(!1),Z.openLeague(!1),zt.classList.add("mysn-on"),setTimeout(()=>{nt("office"),Nt.capture(),Z.toast(vt),setTimeout(()=>zt.classList.remove("mysn-on"),80)},300),await O())},leagueTables:()=>{Z.openLeague(!0),Z.renderLeague(ut)},officeLeave:()=>{zt.classList.add("mysn-on"),setTimeout(()=>{pt(),setTimeout(()=>zt.classList.remove("mysn-on"),80)},300)},register:async m=>{let v=await Pt.net.call("league/register",m).catch(k=>({error:k.message}));v&&!v.error?(ut=v,Z.toast(m.edit?"\xDAdaje hr\xE1\u010Da s\xFA ulo\u017Een\xE9.":"Vitaj v lige! Za\u010D\xEDna\u0161 so 147 bodmi."),T="",le.officeLook(),await O()):Z.toast(v&&v.error||"Registr\xE1cia sa nepodarila.")},officeEdit:()=>{T="edit",et=!0,Nt.uncapture(),$()},officeCard:()=>{T=ut&&ut.registered?"edit":"card",et=!0,Nt.uncapture(),$()},myCues:()=>{T=T==="cues"?"":"cues",T?(G=G||x.selected[0]||je[0].id,rt!=="rack"&&le.officeFocus("rack"),et=!0,Nt.uncapture()):(rt==="rack"&&le.officeFocus("rack"),le.officeLook()),$()},officeKeys:()=>Z.toast(vt),rooms:async()=>{Pt&&(Z.openLobby(!1),Z.openRooms(!0,null),Z.openRooms(!0,await Pt.rooms()))},roomsClose:()=>Z.openRooms(!1),watchStart:m=>{!Pt||c.match||(Z.openRooms(!1),Z.showMenu(!1),pt(),c.spectating&&(Pt.watchStop(),c.spectateEnd()),D("close"),Ut={seq:-1,ver:-1,played:-1},Pt.aimTarget=null,c.spectateBegin({type:m.type,id:m.id,title:m.title,kind:m.kind,info:m.info||""}),bt(m.type==="match"?"league":"home"),_.setMode("cue"),Pt.watchStart(m.type,m.id),xt(),Nt.capture(),Z.toast(`Sleduje\u0161: ${m.title}. My\u0161ou sa ot\xE1\u010Da\u0161 okolo stola, Esc: menu.`))},watchStop:()=>{c.spectating&&(Pt.watchStop(),Pt.aimTarget=null,c.spectateEnd(),bt("home"),xt(),Z.showMenu(!1),Nt.capture(),D("door"))},officeLook:()=>{et=!1,Z.setFree(!1),L==="office"&&Nt.capture()},officeWindow:()=>{let m=M.toggleWindow();z.unlock(),z.doorCreak(),Z.toast(m?"Okno je otvoren\xE9.":"Okno je zatvoren\xE9.")},officeFocus:m=>{let v=rt===m?M.seat:M.views[m];rt=rt===m?"":m,_.setView(v.pos.clone(),v.look.clone());let k=v.look.clone().sub(v.pos);st.yaw=Math.atan2(k.z,k.x),st.pitch=Math.atan2(k.y,Math.hypot(k.x,k.z)),_.setViewZoom(rt?1:.85)},officeDoor:async()=>{if(Pt){if(!ut||!ut.registered){Z.toast("Ligu hraj\xFA len registrovan\xED hr\xE1\u010Di. Najprv vypl\u0148 \u010Derven\xFA vizitku na stole (F8)."),le.officeCard();return}if(Pt.queueing){await Pt.seek(!1),M.setDoor(""),Z.toast("Vyh\u013Ead\xE1vanie z\xE1pasu je zru\u0161en\xE9.");return}M.setDoor("wait"),Z.toast("Vyh\u013Ead\xE1vam z\xE1pas\u2026 Hr\xE1 ka\u017Ed\xFD s ka\u017Ed\xFDm, kto je pr\xE1ve vo fronte. Druh\xFD klik na dvere (F9) zru\u0161\xED."),await Pt.seek(!0)}},officeHome:()=>{T="",$(),le.officeLook()},cueSelect:m=>{let v=x.selected,k=v.indexOf(m);k>=0?v.splice(k,1):v.length<4?v.push(m):Z.toast("Do z\xE1pasu si m\xF4\u017Ee\u0161 zobra\u0165 najviac 4 t\xE1g\xE1. Najprv jedno odober."),V()},cueDefault:m=>{x.selected.includes(m)&&(x.def=m,V())},cueEdit:m=>{G=m,$()},cueCustom:({id:m,k:v,v:k})=>{let H=x.custom[m]=x.custom[m]||{};H[v]=k,V(!0)},leagueTab:m=>{Z._leagueTab=m,Z.renderLeague(ut)},leagueInvite:async m=>{await Pt.invite(m,!0),Z.renderLeague(ut)},leagueArchive:async()=>{Z.openLeague(!0);let m=await Pt.leagueArchive();Z.renderLeague(ut,m||{seasons:[]})},leagueClose:()=>{Z.openLeague(!1),L!=="office"&&Z.showMenu(!0,!0)},leagueHome:()=>{Z.openLeague(!1),L!=="office"&&(c.match||bt("home"),Z.showMenu(!1),Nt.capture())},leaderboard:()=>{Z.showMenu(!1),L!=="trophies"&&nt("trophies")},trophies:()=>{Z.showLeaderboard(null),nt("trophies"),at()},partyNext:()=>{Z.celebrate(null),Z.showMenu(!1),Nt.capture()},partyBoard:()=>{Z.celebrate(null),le.leaderboard()},leaderboardClose:()=>{Z.showLeaderboard(null),Z.menuOpen()||Nt.capture()},lobby:()=>{Pt&&(Pt.lobbyOpen=!0,Z.openLobby(!0),Pt.ping())},lobbyClose:()=>{Pt&&(Pt.lobbyOpen=!1),Z.openLobby(!1)},invite:m=>Pt&&Pt.invite(m),inviteTraining:m=>Pt&&Pt.invite(m,!1,!0),cancelInvite:()=>Pt&&Pt.cancelInvite(),accept:m=>{Z.hideToast(),Pt&&Pt.answer(m,!0)},decline:m=>{Z.hideToast(),Pt&&Pt.answer(m,!1)},resumeMatch:m=>Pt&&Pt.resume(m),pauseMatch:()=>Pt&&Pt.leave("pause"),resign:()=>Pt&&Pt.leave("resign"),home:()=>{window.location.href=t.homeUrl||"/"},settings:()=>Z.toggle(Z.panel),help:()=>nt("board"),board:()=>nt("board"),rack:()=>nt("rack"),score:()=>nt("score"),chair:()=>nt("chair"),news:()=>nt("news"),magazine:()=>nt("magazine"),reader:()=>Z.toggleReader(L==="magazine"?"rss":"news",L==="magazine"?a.rssItems:a.newsItems),readerRss:()=>Z.toggleReader("rss",a.rssItems),chalk:()=>nt("chalk"),mixer:()=>nt("mixer"),bar:()=>nt("bar"),leagueBoard:async()=>{yt!=="league"&&(nt("leagueBoard"),Pt&&(ut=await Pt.league()||ut,a.setLeague(ut)))},phone:()=>Z.openPhone(!0),phoneClose:()=>{Z.openPhone(!1),L==="bar"&&Nt.capture()},radioToggle:()=>It.toggle(),radioPick:m=>It.play(m),radioSet:({k:m,v})=>It.set(m,v),top:()=>{L||(F=!F,J=!1,_.setMode(F||c.state==="place"?"top":"cue"))},back:()=>pt(),cuePick:m=>$t(m),setting:({k:m,v})=>{e[m]=v,m==="volume"&&z.setVolume(v),m==="respot"&&(c.respot=!!v),Tr(e)}},Z=new ta(R,{homeUrl:t.homeUrl,user:u,loginUrl:t.loginUrl,accountUrl:t.accountUrl,venue:()=>yt,settings:e,onAction:(m,v)=>{z.unlock(),le[m]&&le[m](v),Z.sync(c,_.mode)},onPower:(m,v)=>Nt.setPower(m,v),onRelease:()=>Nt.release(),onSpin:(m,v)=>b={side:m,top:v}}),Nt=new Jo(i.domElement,_,c,{unlock:()=>z.unlock(),shoot:qt,spinReset:()=>Z.setSpin(0,0),spin:(m,v)=>Z.setSpin(Math.max(-1,Math.min(1,Z.side+m)),Math.max(-1,Math.min(1,Z.top+v))),lock:m=>{if(Z.setLock(m),m&&!u){Nt.uncapture();return}m?(ot=!0,et=!1,Z.setFree(!1),Z.showMenu(!1)):Yt&&!L&&!et&&!Z.partyOpen()&&performance.now()-mt>1500&&Z.showMenu(!0,ot)},stroke:m=>Z.setStroke(m),look:(m,v)=>{if(!X.has(L)||et)return;let k=.0025/(_.viewZoom||1);st.yaw+=m*k,st.pitch=Math.max(-1.2,Math.min(.9,st.pitch-v*k));let H=Math.cos(st.pitch);_.viewLook.copy(_.viewPos).add(new C(Math.cos(st.yaw)*H,Math.sin(st.pitch),Math.sin(st.yaw)*H))},viewWheel:m=>{X.has(L)&&_.setViewZoom((_.viewZoom||1)*Math.pow(.85,m))},viewDown:m=>{if(L==="chair"&&m.button===0&&Nt.capture(),L==="office"&&m.button===0){if(!et){Nt.captured||Nt.capture();return}let v=i.domElement.getBoundingClientRect(),k=new Zi,H=new wt((m.clientX-v.left)/v.width*2-1,-((m.clientY-v.top)/v.height)*2+1);if(k.setFromCamera(H,_.camera),k.intersectObject(M.card,!1).length){le.officeCard();return}if(k.intersectObject(M.door,!1).length){le.officeDoor();return}let I=k.intersectObject(M.map,!1)[0];if(I){let ct=M.mapLonLat(I.point),Et=null,Vt=7;for(let jt of K){let Jt=Math.hypot(jt.lon-ct.lon,jt.lat-ct.lat);Jt<Vt&&(Vt=Jt,Et=jt)}if(Et){let jt=Xo(Et.code);Z.toast(`${Et.name} (${jt?jt.name:""}): ${Et.rank}. miesto, ${Et.league}. liga, ${Et.points} bodov.`)}}}if(L==="bar"&&m.button===0){let v=i.domElement.getBoundingClientRect(),k=new Zi,H=Nt.captured?new wt(0,0):new wt((m.clientX-v.left)/v.width*2-1,-((m.clientY-v.top)/v.height)*2+1);k.setFromCamera(H,_.camera),k.intersectObject(a.phone,!1).length?(Nt.uncapture(),Z.openPhone(!0)):Nt.captured||Nt.capture()}},key:m=>{let v=m.toLowerCase();if(!u)return!0;if(v==="ctrl-down"||v==="ctrl-up")return L&&!X.has(L)||(v==="ctrl-down"&&Nt.captured?(et=!0,Nt.uncapture()):v==="ctrl-up"&&et&&(Z.phoneOpen()||Z.cardOpen())||v==="ctrl-up"&&et&&document.activeElement&&/input|select|textarea/i.test(document.activeElement.tagName)?et=!1:v==="ctrl-up"&&et&&(et=!1,Z.showMenu(!1),Nt.capture()),Z.setFree(et)),!0;if(v==="f6"&&L==="office")return le.officeWindow(),!0;if(v==="f6")return z.unlock(),Tt=a.toggleDoor(),D("door"),Pt&&!c.match&&!c.spectating&&Z.toast(Tt?"Dvere s\xFA otvoren\xE9: tvoju partiu m\xF4\u017Eu sledova\u0165 in\xED hr\xE1\u010Di (Vst\xFApi\u0165 v menu).":"Dvere s\xFA zatvoren\xE9: tvoja partia nie je v zozname otvoren\xFDch parti\xED."),z.doorCreak(),!0;if(v==="escape"&&Z.menuOpen()&&!L&&performance.now()-(Z._menuAt||0)>300)return Z.lobbyOpen()?Z.openLobby(!1):Z.roomsOpen()?Z.openRooms(!1):(c.solo&&c.solo.done&&le.training(),mt=performance.now(),Z.showMenu(!1),Z.openLobby(!1),Z.toast("Klikni do hry, my\u0161 sa zachyt\xED.")),!0;if((v==="escape"||v==="enter")&&Z.partyOpen())return Z.opts.onAction("partyNext"),!0;if(v==="escape"&&Z.leaderboardOpen())return Z.opts.onAction("leaderboardClose"),!0;if(L==="office"){let I={f1:["officeFocus","help"],f2:["myCues"],f3:["officeFocus","calendar"],f4:["officeFocus","results"],f6:["officeWindow"],f10:["officeFocus","map"],f7:["officeFocus","notebook"],f8:["officeCard"],f9:["officeDoor"]};if(I[v])return Z.opts.onAction(I[v][0],I[v][1]),!0;if(/^f\d+$/.test(v)&&v!=="f5"&&v!=="f11")return!0;if(v==="escape")return T==="cues"?le.myCues():T?(T="",$(),le.officeLook()):rt?le.officeFocus(rt):Z.leagueOpen()?Z.openLeague(!1):le.officeLeave(),!0}let k={f1:"board",f2:"rack",f3:"chalk",f4:"score",f7:"chair",f8:"trophies",f9:"mixer",f10:"bar",f12:"leagueBoard"};if(k[v])return Z.opts.onAction(k[v]),!0;if(v==="tab")return Z.opts.onAction("top"),!0;if(L){if(v==="escape"&&Z.phoneOpen())return le.phoneClose(),!0;if(L==="bar"&&v==="m")return Z.phoneOpen()?le.phoneClose():(Nt.uncapture(),Z.openPhone(!0)),!0;if(L==="mixer"){if(v==="arrowleft"||v==="arrowright")return It.next(v==="arrowleft"?-1:1),!0;if(v==="arrowup"||v==="arrowdown")return It.set("vol",It.params.vol+(v==="arrowup"?.05:-.05)),!0;if(v==="p")return It.toggle(),!0}if(L==="chair"&&v==="v")return Z.opts.onAction("readerRss"),!0;if((L==="news"||L==="magazine"||L==="chair")&&v==="c")return Z.opts.onAction("reader"),!0;if(v==="escape"&&Z.readerOpen())return Z.toggleReader(null),!0;if((v==="escape"||v==="enter")&&L!=="chalk")return pt(),!0;if(L==="rack"&&(v==="arrowleft"||v==="arrowright")){let I=je.findIndex(ct=>ct.id===p.id);return $t(je[(I+(v==="arrowleft"?je.length-1:1))%je.length].id),!0}return!1}let H={z:"undo",backspace:"undo",b:"hand",r:"reset",s:"skip",h:"help"}[v];return H&&c.spectating&&H!=="help"?!0:H?(Z.opts.onAction(H),!0):!1}});u||(Nt.blocked=!0);let Pt=null,dn=()=>{if(!u)return["guest"];if(c.spectating)return["watch",c.spectating.title];let m=c.match;return m?["match",m.players[1-m.me].name]:c.solo&&!c.solo.done?["solo"]:["training"]},xt=()=>Z.setMenu(...dn()),q=m=>{c.match||(pt(),Z.showLeaderboard(null),F=!1,c.startSolo(m),_.setMode(c.state==="place"?"top":"cue"),xt(),Z.showMenu(!1),Nt.capture(),Z.sync(c,_.mode),kt())},at=async m=>{let v=m||(Pt?await Pt.scores():null);return v&&v.top&&a.setTrophies(v.top),v},St=async m=>{Nt.uncapture(),Z.showLeaderboard(void 0,m);let v=Pt?await Pt.scores():null;at(v),Z.leaderboardOpen()&&Z.showLeaderboard(v,m)},Lt=async m=>{let v=m||(Pt?await Pt.scores():null);v&&v.top&&a.setTrophies(v.top)};Lt(),c.onSolo=async m=>{let v=Pt?await Pt.saveScore(m):{error:"Sk\xF3re sa zapisuje len prihl\xE1sen\xFDm."},k=v&&!v.error;k&&at(v);let H=k&&v.mine&&v.mine.points===m.points&&v.mine.seconds===m.seconds;Nt.uncapture(),Z.showLeaderboard(null),Z.showMenu(!1),k&&Lt(v),Z.celebrate({...m,rank:k?v.rank:0,players:k?v.players:0,best:H,error:k?"":v&&v.error}),z.unlock(),z.pot&&z.pot(),c.startSolo(!0),_.setMode(c.state==="place"?"top":"cue"),xt(),Z.sync(c,_.mode),kt()},u&&t.restUrl&&(Pt=new ia(t,c,{lobby:async m=>{Z.renderLobby(m),Z.leagueOpen()&&(ut=await Pt.league()||ut,Z.renderLeague(ut)),Z.showInvites(c.match?[]:m.invites)},invite:m=>!Z.menuOpen()&&Z.toast(`Boli ste vyzvan\xFD! ${m.from.name} \u0165a vyz\xFDva ${m.training?"na spolo\u010Dn\xFD tr\xE9ning":m.league?"na ligov\xFA partiu":"na partiu"}.${Nt.captured?" Esc alebo Ctrl uvo\u013En\xED my\u0161.":""}`,m),toast:m=>Z.toast(m),watch:(m,v)=>{let k=c.spectating;if(!k||!Ut)return;if(v.closed||m==="match"&&v.status&&v.status!=="active"){let I=m==="match"&&v.status==="finished"?`Z\xE1pas skon\u010Dil ${v.scores?v.scores.join(" : "):""}.`:"Partia u\u017E nie je otvoren\xE1.";le.watchStop(),Z.toast(I);return}let H=c.state==="moving";if(m==="room"){let I=v.data||{};k.info=I.info||k.info,Ut.seq<0?(c.spectateSet(I.after||I.before||null),Ut.seq=v.seq,Ut.ver=I.ver||0):v.seq>Ut.seq&&I.shot&&I.before&&!H?(Pt.aimTarget=null,c.spectateSet(I.before),c.playRemote(I.shot,!1),Ut.seq=v.seq):!H&&I.after&&(I.ver||0)!==Ut.ver&&v.seq===Ut.seq&&(c.spectateSet(I.after),Ut.ver=I.ver||0),!H&&I.aim&&I.aim.seq===Ut.seq&&(Pt.aimTarget=I.aim)}else{k.info=v.scores?`${v.players[0].name} ${v.scores[0]} : ${v.scores[1]} ${v.players[1].name}`:k.info;let I=v.state&&v.state.balls;Ut.seq<0?(c.spectateSet(I||null),Ut.seq=v.seq):v.shot&&v.shot.seq===v.seq+1&&Ut.played!==v.shot.seq&&!H?(c.spectateSet(I||null),c.playRemote(v.shot,!1),Ut.played=v.shot.seq):v.seq>Ut.seq&&!H&&(Pt.aimTarget=null,c.spectateSet(I||null),Ut.seq=v.seq),!H&&v.aim&&v.aim.seq===Ut.seq&&!(v.shot&&v.shot.seq===v.seq+1)&&(Pt.aimTarget=v.aim)}Z.sync(c,_.mode)},queue:(m,v)=>{M.setDoor(m==="wait"?"wait":""),m==="found"?Z.toast("S\xFAper sa na\u0161iel! Ideme na \u0161tadi\xF3n."):m==="error"&&Z.toast(v||"Vyh\u013Ead\xE1vanie z\xE1pasu sa nepodarilo.")},started:m=>{pt(),Z.openLeague(!1),bt(m.league?"league":"home"),gt=-1,Z.openLobby(!1),Pt.lobbyOpen=!1,Z.hideToast(),Z.showInvites([]),F=!1,_.setMode(c.state==="place"?"top":"cue"),xt(),Z.showMenu(!1),Z.toast(`Partia s hr\xE1\u010Dom ${m.players[1-m.me].name}. ${m.turn===m.me?"Si na rade.":"Na rade je s\xFAper."}`),Z.sync(c,_.mode),kt()},ended:async m=>{pt(),Pt&&Pt.lastLeague&&(Pt.lastLeague=!1,ut=await Pt.league()||ut,a.setLeague(ut),lt()),xt(),Z.showMenu(!0,!0),Z.menuNote(m),Nt.uncapture(),c.aimAtNearest(),Z.sync(c,_.mode),kt()},status:()=>Z.setNet(Pt?Pt.statusText():"")})),at(),Nt.setCue(p),Z.setCueInfo(p),Z.setChalk(ht),kt(),c.on((m,v)=>{!c.spectating&&!c.match&&Tt&&(m==="shot"||m==="settle")?D(m,v):!c.spectating&&!c.match&&Tt&&m==="change"&&c.state!=="moving"&&(clearTimeout(ft),ft=setTimeout(()=>{c.state!=="moving"&&D("change")},400)),L||F||(c.state==="place"&&_.mode==="cue"?(_.setMode("top"),J=!0):c.state!=="place"&&J&&(J=!1,_.mode==="top"&&_.setMode("cue"))),(m==="change"||m==="settle")&&(Z.sync(c,_.mode),kt())});let Ht=()=>{let m=s.clientWidth||window.innerWidth,v=s.clientHeight||window.innerHeight;i.setSize(m,v),_.resize(m,v)};window.addEventListener("resize",Ht),window.addEventListener("pagehide",()=>c.saveSoloTime()),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&c.saveSoloTime()}),Ht(),Z.sync(c,_.mode),(Yt||!u)&&Z.showMenu(!0,!1);let ge=new C,de=performance.now(),ee=de,he=0;try{he=parseFloat(window.localStorage.getItem("mySnookerPlayTime")||"0")||0}catch{he=0}let De=()=>{try{window.localStorage.setItem("mySnookerPlayTime",String(Math.round(he)))}catch{}};window.addEventListener("pagehide",De);let We=de,ve=0,fn=m=>{let v=Math.min(.05,(m-de)/1e3);if(de=m,Nt.update(v),c.state==="moving")for(let Ft of c.tick(v))Ft.type==="ball"?z.ball(Ft.speed):Ft.type==="cushion"?z.cushion(Ft.speed):Ft.type==="pot"&&(z.pot(),yt==="league"&&c.balls[Ft.a]&&c.balls[Ft.a].kind!=="white"&&w.react("clap"));if(yt==="league"){let Ft=c.match;Ft&&Ft.seq!==gt&&(gt>=0&&Ft.last&&(Ft.last.foul?w.react("facepalm"):(Ft.last.brk||0)>=30&&Ft.last.points>0&&w.react("stand")),gt=Ft.seq,lt()),w.update(v,c.cue)}let k=c.state==="aim"&&!L,H=c.state==="watch"&&Pt&&Pt.aimTarget;if(H){let Ft=Pt.aimTarget,Zt=Ft.dir-c.dir;Zt=Math.atan2(Math.sin(Zt),Math.cos(Zt)),c.dir+=Zt*Math.min(1,v*8),c.cue.on&&(c.cue.p.x+=(Ft.cx-c.cue.p.x)*Math.min(1,v*8),c.cue.p.z+=(Ft.cz-c.cue.p.z)*Math.min(1,v*8))}if(Pt&&Tt&&!c.match&&!c.spectating&&(c.state==="aim"||c.state==="place")&&(Ot+=v,Ot>=.33)){let Ft={seq:Y,dir:+c.dir.toFixed(4),cx:+c.cue.p.x.toFixed(4),cz:+c.cue.p.z.toFixed(4),pull:+(Nt.stroking?Math.max(0,Nt.strokePull):Nt.power||0).toFixed(3),side:+b.side.toFixed(2),top:+b.top.toFixed(2),place:c.state==="place"?1:0},Zt=JSON.stringify(Ft);Zt!==Gt&&(Ot=0,Gt=Zt,Pt.roomPost({door:1,kind:c.solo?"solo":"training",seq:Y,aim:Ft}))}if(Pt&&Pt.update(v,c.myTurn?{dir:c.dir,cx:c.cue.p.x,cz:c.cue.p.z,pull:Nt.stroking?Math.max(0,Nt.strokePull):0,side:b.side,top:b.top}:null),Nt.stroking)ve=Math.max(0,Nt.strokePull);else{let Ft=k?Nt.power:0;ve+=(Ft-ve)*Math.min(1,v*(Nt.charging?30:12))}Z.showPower(Nt.power),g.update(v);let I=Math.floor(he);he+=Math.min(1,Math.max(0,(m-ee)/1e3)),Math.floor(he)!==I&&Math.floor(he)%2===0&&De(),ee=m;let ct=It.update(_.camera);if(U.update(ct[0],ct[1]),!c.match&&!c.solo||c.match&&c.match.training){let Ft=new Date;a.setClock(Ft.getHours()*3600+Ft.getMinutes()*60+Ft.getSeconds(),!0)}else a.setClock(c.solo&&!c.solo.done?c.solo.time:he);let Et=c.solo;if(Et&&!Et.done&&!X.has(L)&&L!=="leagueBoard"&&!Z.menuOpen()&&!Z.leaderboardOpen()&&!Z.partyOpen()){let Ft=Math.floor(Et.time);Et.time+=Math.min(1,Math.max(0,(m-We)/1e3)),Math.floor(Et.time)!==Ft&&(Math.floor(Et.time)%2===0&&c.saveSoloTime(),Z.sync(c,_.mode),kt())}if(We=m,a.update(v)&&z.doorShut(),H&&(ve+=((Pt.aimTarget.pull||0)-ve)*Math.min(1,v*10)),E.place(c.cue,c.dir,ve,H?Pt.aimTarget.side||0:b.side,H?Pt.aimTarget.top||0:b.top,(k||L==="chalk"||H&&!Pt.aimTarget.place)&&c.cue.on),Mt>=0){Mt=Kt.chalkFreeze!==null?Kt.chalkFreeze:(performance.now()-Rt)/1e3;let Ft=Math.cos(c.dir),Zt=Math.sin(c.dir),ye=2.8,Te=Hn=>Hn*Hn*(3-2*Hn),Ae=Te(Math.min(1,Mt/.45,Math.max(0,(ye-Mt)/.45)));E.pivot.position.x-=Ft*B.back*Ae,E.pivot.position.z-=Zt*B.back*Ae,E.pivot.position.y+=B.up*Ae;let Oe=E.pivot.position,Se=Te(Math.min(1,Math.max(0,(Mt-.45)/.35),Math.max(0,(ye-.45-Mt)/.35))),Qt=Mt>.8&&Mt<ye-.8?1:0,cn=Mt*12,Me=.0012*Qt,hn=Wt.s/2-Wt.d+(1-Se)*.1;ne.position.set(Oe.x+Ft*hn-Zt*Math.cos(cn)*Me,Oe.y+Math.sin(cn)*Me+(1-Se)*.05,Oe.z+Zt*hn+Ft*Math.cos(cn)*Me),ne.rotation.set(Qt*Math.sin(cn*.5)*.5,-c.dir,0),Mt>=ye&&(ht=j,Z.setChalk(ht),kt(),pt())}let Vt=S.update(c.balls,c.cue,c.dir,k&&c.cue.on,e.lines?2:0),jt=k&&c.cue.on&&!!e.contact,Jt=Vt||(k&&c.cue.on?Bo(c.balls,c.cue,c.dir):null);if(Z.drawContact(jt?Jt:null,c.dir,jt,e.lines),g.highlight(Jt&&k?Jt.ball:null,v,Jt?Jt.ghost:null),Jt){let Ft=Jt.ball?Jt.ball.p:{x:c.cue.p.x+Math.cos(c.dir)*Fu,z:c.cue.p.z+Math.sin(c.dir)*Fu};ge.set(Ft.x,.02625,Ft.z),_.aimPoint=ge}else _.aimPoint=null;A(),M.updateWindow(v),_.cueTilt=E.pivot.visible&&E.tilt||0,_.update(v,c.cue,c.dir,c.state==="moving"),i.render(r,_.camera),requestAnimationFrame(fn)};return requestAnimationFrame(fn),{game:c,rig:_,renderer:i,scene:r,settings:e,controls:Nt,debug:Kt,actions:le,get online(){return Pt}}}var Bu=()=>{let s=document.getElementById("mysn-app");s&&!s.dataset.started&&(s.dataset.started="1",window.MySnooker=hx(s,window.MYSN_CONFIG||{}))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Bu):Bu();})();

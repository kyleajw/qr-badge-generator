(()=>{var t={192:(t,r)=>{var e,n,o=function(){var t=function(t,r){var e=t,n=a[r],o=null,i=0,f=null,w=[],y={},m=function(t,r){o=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(i=4*e+17),b(0,0),b(i-7,0),b(0,i-7),k(),B(),A(t,r),e>=7&&C(t),null==f&&(f=x(e,n,w)),M(f,r)},b=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||i<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||i<=r+n||(o[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},B=function(){for(var t=8;t<i-8;t+=1)null==o[t][6]&&(o[t][6]=t%2==0);for(var r=8;r<i-8;r+=1)null==o[6][r]&&(o[6][r]=r%2==0)},k=function(){for(var t=u.getPatternPosition(e),r=0;r<t.length;r+=1)for(var n=0;n<t.length;n+=1){var i=t[r],a=t[n];if(null==o[i][a])for(var f=-2;f<=2;f+=1)for(var c=-2;c<=2;c+=1)o[i+f][a+c]=-2==f||2==f||-2==c||2==c||0==f&&0==c}},C=function(t){for(var r=u.getBCHTypeNumber(e),n=0;n<18;n+=1){var a=!t&&1==(r>>n&1);o[Math.floor(n/3)][n%3+i-8-3]=a}for(n=0;n<18;n+=1)a=!t&&1==(r>>n&1),o[n%3+i-8-3][Math.floor(n/3)]=a},A=function(t,r){for(var e=n<<3|r,a=u.getBCHTypeInfo(e),f=0;f<15;f+=1){var c=!t&&1==(a>>f&1);f<6?o[f][8]=c:f<8?o[f+1][8]=c:o[i-15+f][8]=c}for(f=0;f<15;f+=1)c=!t&&1==(a>>f&1),f<8?o[8][i-f-1]=c:f<9?o[8][15-f-1+1]=c:o[8][15-f-1]=c;o[i-8][8]=!t},M=function(t,r){for(var e=-1,n=i-1,a=7,f=0,c=u.getMaskFunction(r),l=i-1;l>0;l-=2)for(6==l&&(l-=1);;){for(var g=0;g<2;g+=1)if(null==o[n][l-g]){var h=!1;f<t.length&&(h=1==(t[f]>>>a&1)),c(n,l-g)&&(h=!h),o[n][l-g]=h,-1==(a-=1)&&(f+=1,a=7)}if((n+=e)<0||i<=n){n-=e,e=-e;break}}},x=function(t,r,e){for(var n=l.getRSBlocks(t,r),o=g(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),u.getLengthInBits(a.getMode(),t)),a.write(o)}var f=0;for(i=0;i<n.length;i+=1)f+=n[i].dataCount;if(o.getLengthInBits()>8*f)throw"code length overflow. ("+o.getLengthInBits()+">"+8*f+")";for(o.getLengthInBits()+4<=8*f&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*f||(o.put(236,8),o.getLengthInBits()>=8*f));)o.put(17,8);return function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),f=0;f<r.length;f+=1){var l=r[f].dataCount,g=r[f].totalCount-l;n=Math.max(n,l),o=Math.max(o,g),i[f]=new Array(l);for(var h=0;h<i[f].length;h+=1)i[f][h]=255&t.getBuffer()[h+e];e+=l;var s=u.getErrorCorrectPolynomial(g),d=c(i[f],s.getLength()-1).mod(s);for(a[f]=new Array(s.getLength()-1),h=0;h<a[f].length;h+=1){var v=h+d.getLength()-a[f].length;a[f][h]=v>=0?d.getAt(v):0}}var w=0;for(h=0;h<r.length;h+=1)w+=r[h].totalCount;var y=new Array(w),p=0;for(h=0;h<n;h+=1)for(f=0;f<r.length;f+=1)h<i[f].length&&(y[p]=i[f][h],p+=1);for(h=0;h<o;h+=1)for(f=0;f<r.length;f+=1)h<a[f].length&&(y[p]=a[f][h],p+=1);return y}(o,n)};y.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=h(t);break;case"Alphanumeric":e=s(t);break;case"Byte":e=d(t);break;case"Kanji":e=v(t);break;default:throw"mode:"+r}w.push(e),f=null},y.isDark=function(t,r){if(t<0||i<=t||r<0||i<=r)throw t+","+r;return o[t][r]},y.getModuleCount=function(){return i},y.make=function(){if(e<1){for(var t=1;t<40;t++){for(var r=l.getRSBlocks(t,n),o=g(),i=0;i<w.length;i++){var a=w[i];o.put(a.getMode(),4),o.put(a.getLength(),u.getLengthInBits(a.getMode(),t)),a.write(o)}var f=0;for(i=0;i<r.length;i++)f+=r[i].dataCount;if(o.getLengthInBits()<=8*f)break}e=t}m(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){m(!0,e);var n=u.getLostPoint(y);(0==e||t>n)&&(t=n,r=e)}return r}())},y.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<y.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<y.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=y.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return(e+="</tbody>")+"</table>"},y.createSvgTag=function(t,r,e,n){var o={};"object"==typeof arguments[0]&&(t=(o=arguments[0]).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,f,c=y.getModuleCount()*t+2*r,l="";for(f="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",l+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',l+=o.scalable?"":' width="'+c+'px" height="'+c+'px"',l+=' viewBox="0 0 '+c+" "+c+'" ',l+=' preserveAspectRatio="xMinYMin meet"',l+=n.text||e.text?' role="img" aria-labelledby="'+L([n.id,e.id].join(" ").trim())+'"':"",l+=">",l+=n.text?'<title id="'+L(n.id)+'">'+L(n.text)+"</title>":"",l+=e.text?'<description id="'+L(e.id)+'">'+L(e.text)+"</description>":"",l+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',l+='<path d="',a=0;a<y.getModuleCount();a+=1)for(u=a*t+r,i=0;i<y.getModuleCount();i+=1)y.isDark(a,i)&&(l+="M"+(i*t+r)+","+u+f);return(l+='" stroke="transparent" fill="black"/>')+"</svg>"},y.createDataURL=function(t,r){t=t||2,r=void 0===r?4*t:r;var e=y.getModuleCount()*t+2*r,n=r,o=e-r;return p(e,e,(function(r,e){if(n<=r&&r<o&&n<=e&&e<o){var i=Math.floor((r-n)/t),a=Math.floor((e-n)/t);return y.isDark(a,i)?0:1}return 1}))},y.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=y.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=y.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=L(e),o+='"'),o+"/>"};var L=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r};return y.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var r,e,n,o,i,a=1*y.getModuleCount()+2*t,u=t,f=a-t,c={"██":"█","█ ":"▀"," █":"▄","  ":" "},l={"██":"▀","█ ":"▀"," █":" ","  ":" "},g="";for(r=0;r<a;r+=2){for(n=Math.floor((r-u)/1),o=Math.floor((r+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<f&&u<=r&&r<f&&y.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<f&&u<=r+1&&r+1<f&&y.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",g+=t<1&&r+1>=f?l[i]:c[i];g+="\n"}return a%2&&t>0?g.substring(0,g.length-a-1)+Array(a+1).join("▀"):g.substring(0,g.length-1)}(r);t-=1,r=void 0===r?2*t:r;var e,n,o,i,a=y.getModuleCount()*t+2*r,u=r,f=a-r,c=Array(t+1).join("██"),l=Array(t+1).join("  "),g="",h="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/t),h="",n=0;n<a;n+=1)i=1,u<=n&&n<f&&u<=e&&e<f&&y.isDark(o,Math.floor((n-u)/t))&&(i=0),h+=i?c:l;for(o=0;o<t;o+=1)g+=h+"\n"}return g.substring(0,g.length-1)},y.renderTo2dContext=function(t,r){r=r||2;for(var e=y.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=y.isDark(n,o)?"black":"white",t.fillRect(n*r,o*r,r,r)},y};t.stringToBytes=(t.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,t.createStringToBytes=function(t,r){var e=function(){for(var e=y(t),n=function(){var t=e.read();if(-1==t)throw"eof";return t},o=0,i={};;){var a=e.read();if(-1==a)break;var u=n(),f=n()<<8|n();i[String.fromCharCode(a<<8|u)]=f,o+=1}if(o!=r)throw o+" != "+r;return i}(),n="?".charCodeAt(0);return function(t){for(var r=[],o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)r.push(i);else{var a=e[t.charAt(o)];"number"==typeof a?(255&a)==a?r.push(a):(r.push(a>>>8),r.push(255&a)):r.push(n)}}return r}};var r,e,n,o,i,a={L:1,M:0,Q:3,H:2},u=(r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,n=7973,i=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r},(o={}).getBCHTypeInfo=function(t){for(var r=t<<10;i(r)-i(e)>=0;)r^=e<<i(r)-i(e);return 21522^(t<<10|r)},o.getBCHTypeNumber=function(t){for(var r=t<<12;i(r)-i(n)>=0;)r^=n<<i(r)-i(n);return t<<12|r},o.getPatternPosition=function(t){return r[t-1]},o.getMaskFunction=function(t){switch(t){case 0:return function(t,r){return(t+r)%2==0};case 1:return function(t,r){return t%2==0};case 2:return function(t,r){return r%3==0};case 3:return function(t,r){return(t+r)%3==0};case 4:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case 5:return function(t,r){return t*r%2+t*r%3==0};case 6:return function(t,r){return(t*r%2+t*r%3)%2==0};case 7:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},o.getErrorCorrectPolynomial=function(t){for(var r=c([1],0),e=0;e<t;e+=1)r=r.multiply(c([1,f.gexp(e)],0));return r},o.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case 1:return 10;case 2:return 9;case 4:case 8:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case 1:return 12;case 2:return 11;case 4:return 16;case 8:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case 1:return 14;case 2:return 13;case 4:return 16;case 8:return 12;default:throw"mode:"+t}}},o.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);var l=0;for(o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(l+=1);return e+Math.abs(100*l/r/r-50)/5*10},o),f=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;e<255;e+=1)r[t[e]]=e;return{glog:function(t){if(t<1)throw"glog("+t+")";return r[t]},gexp:function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t[r]}}}();function c(t,r){if(void 0===t.length)throw t.length+"/"+r;var e=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var n=new Array(t.length-e+r),o=0;o<t.length-e;o+=1)n[o]=t[o+e];return n}(),n={getAt:function(t){return e[t]},getLength:function(){return e.length},multiply:function(t){for(var r=new Array(n.getLength()+t.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<t.getLength();o+=1)r[e+o]^=f.gexp(f.glog(n.getAt(e))+f.glog(t.getAt(o)));return c(r,0)},mod:function(t){if(n.getLength()-t.getLength()<0)return n;for(var r=f.glog(n.getAt(0))-f.glog(t.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<t.getLength();o+=1)e[o]^=f.gexp(f.glog(t.getAt(o))+r);return c(e,0).mod(t)}};return n}var l=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},e={getRSBlocks:function(e,n){var o=function(r,e){switch(e){case a.L:return t[4*(r-1)+0];case a.M:return t[4*(r-1)+1];case a.Q:return t[4*(r-1)+2];case a.H:return t[4*(r-1)+3];default:return}}(e,n);if(void 0===o)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+n;for(var i=o.length/3,u=[],f=0;f<i;f+=1)for(var c=o[3*f+0],l=o[3*f+1],g=o[3*f+2],h=0;h<c;h+=1)u.push(r(l,g));return u}};return e}(),g=function(){var t=[],r=0,e={getBuffer:function(){return t},getAt:function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},put:function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},getLengthInBits:function(){return r},putBit:function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1}};return e},h=function(t){var r=t,e={getMode:function(){return 1},getLength:function(t){return r.length},write:function(t){for(var e=r,o=0;o+2<e.length;)t.put(n(e.substring(o,o+3)),10),o+=3;o<e.length&&(e.length-o==1?t.put(n(e.substring(o,o+1)),4):e.length-o==2&&t.put(n(e.substring(o,o+2)),7))}},n=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+o(t.charAt(e));return r},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return e},s=function(t){var r=t,e={getMode:function(){return 2},getLength:function(t){return r.length},write:function(t){for(var e=r,o=0;o+1<e.length;)t.put(45*n(e.charAt(o))+n(e.charAt(o+1)),11),o+=2;o<e.length&&t.put(n(e.charAt(o)),6)}},n=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return e},d=function(r){var e=t.stringToBytes(r);return{getMode:function(){return 4},getLength:function(t){return e.length},write:function(t){for(var r=0;r<e.length;r+=1)t.put(e[r],8)}}},v=function(r){var e=t.stringToBytesFuncs.SJIS;if(!e)throw"sjis not supported.";!function(t,r){var n=e("友");if(2!=n.length||38726!=(n[0]<<8|n[1]))throw"sjis not supported."}();var n=e(r),o={getMode:function(){return 8},getLength:function(t){return~~(n.length/2)},write:function(t){for(var r=n,e=0;e+1<r.length;){var o=(255&r[e])<<8|255&r[e+1];if(33088<=o&&o<=40956)o-=33088;else{if(!(57408<=o&&o<=60351))throw"illegal char at "+(e+1)+"/"+o;o-=49472}o=192*(o>>>8&255)+(255&o),t.put(o,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return o},w=function(){var t=[],r={writeByte:function(r){t.push(255&r)},writeShort:function(t){r.writeByte(t),r.writeByte(t>>>8)},writeBytes:function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},writeString:function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+"]"}};return r},y=function(t){var r=t,e=0,n=0,o=0,i={read:function(){for(;o<8;){if(e>=r.length){if(0==o)return-1;throw"unexpected end of file./"+o}var t=r.charAt(e);if(e+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|a(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return i},p=function(t,r,e){for(var n=function(t,r){var e=t,n=r,o=new Array(t*r),i={setPixel:function(t,r,n){o[r*e+t]=n},write:function(t){t.writeString("GIF87a"),t.writeShort(e),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(e),t.writeShort(n),t.writeByte(0);var r=a(2);t.writeByte(2);for(var o=0;r.length-o>255;)t.writeByte(255),t.writeBytes(r,o,255),o+=255;t.writeByte(r.length-o),t.writeBytes(r,o,r.length-o),t.writeByte(0),t.writeString(";")}},a=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,i=u(),a=0;a<r;a+=1)i.add(String.fromCharCode(a));i.add(String.fromCharCode(r)),i.add(String.fromCharCode(e));var f,c,l,g=w(),h=(f=g,c=0,l=0,{write:function(t,r){if(t>>>r!=0)throw"length over";for(;c+r>=8;)f.writeByte(255&(t<<c|l)),r-=8-c,t>>>=8-c,l=0,c=0;l|=t<<c,c+=r},flush:function(){c>0&&f.writeByte(l)}});h.write(r,n);var s=0,d=String.fromCharCode(o[s]);for(s+=1;s<o.length;){var v=String.fromCharCode(o[s]);s+=1,i.contains(d+v)?d+=v:(h.write(i.indexOf(d),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(d+v)),d=v)}return h.write(i.indexOf(d),n),h.write(e,n),h.flush(),g.toByteArray()},u=function(){var t={},r=0,e={add:function(n){if(e.contains(n))throw"dup key:"+n;t[n]=r,r+=1},size:function(){return r},indexOf:function(r){return t[r]},contains:function(r){return void 0!==t[r]}};return e};return i}(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=w();n.write(a);for(var u=function(){var t=0,r=0,e=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return o.writeByte=function(n){for(t=t<<8|255&n,r+=8,e+=1;r>=6;)i(t>>>r-6),r-=6},o.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o}(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return t}();o.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||n>=57344?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)},void 0===(n="function"==typeof(e=function(){return o})?e.apply(r,[]):e)||(t.exports=n)}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}(()=>{let t=e(192)(24,"L");document.querySelector(".submit-info").addEventListener("click",(function(r){r.preventDefault(),function(){const r={firstName:document.querySelector("#first-name").value,lastName:document.querySelector("#last-name").value,email:document.querySelector("#email").value,twitter:document.querySelector("#twitter").value,github:document.querySelector("#github").value};var e;""===r.firstName||""===r.lastName||""===r.email||(e=r,document.querySelector(".user-info").remove(),t.addData(`First Name: ${e.firstName}\nLast Name: ${e.lastName}\nEmail: ${e.email}`),document.querySelector(".badge").innerHTML=`<h1 id="badge-full-name">${e.firstName} ${e.lastName}</h1>\n    <h2 id="badge-email">${e.email}</h2>`,""!=e.twitter&&(document.querySelector(".badge").innerHTML+=`<h2 id="badge-twitter">${e.twitter}</h2>`,t.addData(`\nTwitter: ${e.twitter}`)),""!=e.github&&(document.querySelector(".badge").innerHTML+=`<h2 id="badge-github">${e.github}</h2>`,t.addData(`\nGithub: ${e.github}`)),document.querySelector(".badge").innerHTML+='<div id="qr-placeholder"></div>',document.querySelector(".badge").innerHTML+='<div id="bottom-block"></div>',t.make(),document.getElementById("qr-placeholder").innerHTML=t.createImgTag())}()}))})()})();
!function(t){function e(t,e){return function(n){return h(t.call(this,n),e)}}function n(t,e){return function(n){return this.lang().ordinal(t.call(this,n),e)}}function a(){}function s(t){r(this,t)}function i(t){var e=t.years||t.year||t.y||0,n=t.months||t.month||t.M||0,a=t.weeks||t.week||t.w||0,s=t.days||t.day||t.d||0,i=t.hours||t.hour||t.h||0,r=t.minutes||t.minute||t.m||0,o=t.seconds||t.second||t.s||0,h=t.milliseconds||t.millisecond||t.ms||0;this._input=t,this._milliseconds=h+1e3*o+6e4*r+36e5*i,this._days=s+7*a,this._months=n+12*e,this._data={},this._bubble()}function r(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function o(t){return 0>t?Math.ceil(t):Math.floor(t)}function h(t,e){for(var n=t+"";n.length<e;)n="0"+n;return n}function l(t,e,n,a){var s,i,r=e._milliseconds,o=e._days,h=e._months;r&&t._d.setTime(+t._d+r*n),(o||h)&&(s=t.minute(),i=t.hour()),o&&t.date(t.date()+o*n),h&&t.month(t.month()+h*n),r&&!a&&F.updateOffset(t),(o||h)&&(t.minute(s),t.hour(i))}function d(t){return"[object Array]"===Object.prototype.toString.call(t)}function c(t,e){var n,a=Math.min(t.length,e.length),s=Math.abs(t.length-e.length),i=0;for(n=0;a>n;n++)~~t[n]!==~~e[n]&&i++;return i+s}function u(t){return t?se[t]||t.toLowerCase().replace(/(.)s$/,"$1"):t}function f(t,e){return e.abbr=t,z[t]||(z[t]=new a),z[t].set(e),z[t]}function m(t){if(!t)return F.fn._lang;if(!z[t]&&E)try{require("./lang/"+t)}catch(e){return F.fn._lang}return z[t]}function p(t){return t.match(/\[.*\]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function y(t){var e,n,a=t.match(N);for(e=0,n=a.length;n>e;e++)a[e]=he[a[e]]?he[a[e]]:p(a[e]);return function(s){var i="";for(e=0;n>e;e++)i+=a[e]instanceof Function?a[e].call(s,t):a[e];return i}}function D(t,e){function n(e){return t.lang().longDateFormat(e)||e}for(var a=5;a--&&G.test(e);)e=e.replace(G,n);return ie[e]||(ie[e]=y(e)),ie[e](t)}function _(t,e){switch(t){case"DDDD":return B;case"YYYY":return R;case"YYYYY":return V;case"S":case"SS":case"SSS":case"DDD":return j;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return J;case"a":case"A":return m(e._l)._meridiemParse;case"X":return q;case"Z":case"ZZ":return $;case"T":return X;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return Z;default:return new RegExp(t.replace("\\",""))}}function g(t){var e=($.exec(t)||[])[0],n=(e+"").match(ee)||["-",0,0],a=+(60*n[1])+~~n[2];return"+"===n[0]?-a:a}function v(t,e,n){var a,s=n._a;switch(t){case"M":case"MM":s[1]=null==e?0:~~e-1;break;case"MMM":case"MMMM":a=m(n._l).monthsParse(e),null!=a?s[1]=a:n._isValid=!1;break;case"D":case"DD":case"DDD":case"DDDD":null!=e&&(s[2]=~~e);break;case"YY":s[0]=~~e+(~~e>68?1900:2e3);break;case"YYYY":case"YYYYY":s[0]=~~e;break;case"a":case"A":n._isPm=m(n._l).isPM(e);break;case"H":case"HH":case"h":case"hh":s[3]=~~e;break;case"m":case"mm":s[4]=~~e;break;case"s":case"ss":s[5]=~~e;break;case"S":case"SS":case"SSS":s[6]=~~(1e3*("0."+e));break;case"X":n._d=new Date(1e3*parseFloat(e));break;case"Z":case"ZZ":n._useUTC=!0,n._tzm=g(e)}null==e&&(n._isValid=!1)}function b(t){var e,n,a=[];if(!t._d){for(e=0;7>e;e++)t._a[e]=a[e]=null==t._a[e]?2===e?1:0:t._a[e];a[3]+=~~((t._tzm||0)/60),a[4]+=~~((t._tzm||0)%60),n=new Date(0),t._useUTC?(n.setUTCFullYear(a[0],a[1],a[2]),n.setUTCHours(a[3],a[4],a[5],a[6])):(n.setFullYear(a[0],a[1],a[2]),n.setHours(a[3],a[4],a[5],a[6])),t._d=n}}function k(t){var e,n,a=t._f.match(N),s=t._i;for(t._a=[],e=0;e<a.length;e++)n=(_(a[e],t).exec(s)||[])[0],n&&(s=s.slice(s.indexOf(n)+n.length)),he[a[e]]&&v(a[e],n,t);s&&(t._il=s),t._isPm&&t._a[3]<12&&(t._a[3]+=12),t._isPm===!1&&12===t._a[3]&&(t._a[3]=0),b(t)}function w(t){var e,n,a,i,o,h=99;for(i=0;i<t._f.length;i++)e=r({},t),e._f=t._f[i],k(e),n=new s(e),o=c(e._a,n.toArray()),n._il&&(o+=n._il.length),h>o&&(h=o,a=n);r(t,a)}function M(t){var e,n=t._i,a=Q.exec(n);if(a){for(t._f="YYYY-MM-DD"+(a[2]||" "),e=0;4>e;e++)if(te[e][1].exec(n)){t._f+=te[e][0];break}$.exec(n)&&(t._f+=" Z"),k(t)}else t._d=new Date(n)}function Y(e){var n=e._i,a=U.exec(n);n===t?e._d=new Date:a?e._d=new Date(+a[1]):"string"==typeof n?M(e):d(n)?(e._a=n.slice(0),b(e)):e._d=new Date(n instanceof Date?+n:n)}function C(t,e,n,a,s){return s.relativeTime(e||1,!!n,t,a)}function S(t,e,n){var a=A(Math.abs(t)/1e3),s=A(a/60),i=A(s/60),r=A(i/24),o=A(r/365),h=45>a&&["s",a]||1===s&&["m"]||45>s&&["mm",s]||1===i&&["h"]||22>i&&["hh",i]||1===r&&["d"]||25>=r&&["dd",r]||45>=r&&["M"]||345>r&&["MM",A(r/30)]||1===o&&["y"]||["yy",o];return h[2]=e,h[3]=t>0,h[4]=n,C.apply({},h)}function T(t,e,n){var a,s=n-e,i=n-t.day();return i>s&&(i-=7),s-7>i&&(i+=7),a=F(t).add("d",i),{week:Math.ceil(a.dayOfYear()/7),year:a.year()}}function x(t){var e=t._i,n=t._f;return null===e||""===e?null:("string"==typeof e&&(t._i=e=m().preparse(e)),F.isMoment(e)?(t=r({},e),t._d=new Date(+e._d)):n?d(n)?w(t):k(t):Y(t),new s(t))}function L(t,e){F.fn[t]=F.fn[t+"s"]=function(t){var n=this._isUTC?"UTC":"";return null!=t?(this._d["set"+n+e](t),F.updateOffset(this),this):this._d["get"+n+e]()}}function P(t){F.duration.fn[t]=function(){return this._data[t]}}function O(t,e){F.duration.fn["as"+t]=function(){return+this/e}}for(var F,W,H="2.1.0",A=Math.round,z={},E="undefined"!=typeof module&&module.exports,U=/^\/?Date\((\-?\d+)/i,I=/(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/,N=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Z=/\d\d?/,j=/\d{1,3}/,B=/\d{3}/,R=/\d{1,4}/,V=/[+\-]?\d{1,6}/,J=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,$=/Z|[\+\-]\d\d:?\d\d/i,X=/T/i,q=/[\+\-]?\d+(\.\d{1,3})?/,Q=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,K="YYYY-MM-DDTHH:mm:ssZ",te=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],ee=/([\+\-]|\d\d)/gi,ne="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),ae={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},se={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",w:"week",M:"month",y:"year"},ie={},re="DDD w W M D d".split(" "),oe="M D H h m s w W".split(" "),he={M:function(){return this.month()+1},MMM:function(t){return this.lang().monthsShort(this,t)},MMMM:function(t){return this.lang().months(this,t)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(t){return this.lang().weekdaysMin(this,t)},ddd:function(t){return this.lang().weekdaysShort(this,t)},dddd:function(t){return this.lang().weekdays(this,t)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return h(this.year()%100,2)},YYYY:function(){return h(this.year(),4)},YYYYY:function(){return h(this.year(),5)},gg:function(){return h(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return h(this.weekYear(),5)},GG:function(){return h(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return h(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return h(~~(this.milliseconds()/10),2)},SSS:function(){return h(this.milliseconds(),3)},Z:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+h(~~(t/60),2)+":"+h(~~t%60,2)},ZZ:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+h(~~(10*t/6),4)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()}};re.length;)W=re.pop(),he[W+"o"]=n(he[W],W);for(;oe.length;)W=oe.pop(),he[W+W]=e(he[W],2);for(he.DDDD=e(he.DDD,3),a.prototype={set:function(t){var e,n;for(n in t)e=t[n],"function"==typeof e?this[n]=e:this["_"+n]=e},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(t){return this._months[t.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(t){return this._monthsShort[t.month()]},monthsParse:function(t){var e,n,a;for(this._monthsParse||(this._monthsParse=[]),e=0;12>e;e++)if(this._monthsParse[e]||(n=F([2e3,e]),a="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[e]=new RegExp(a.replace(".",""),"i")),this._monthsParse[e].test(t))return e},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(t){return this._weekdays[t.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(t){return this._weekdaysShort[t.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(t){return this._weekdaysMin[t.day()]},weekdaysParse:function(t){var e,n,a;for(this._weekdaysParse||(this._weekdaysParse=[]),e=0;7>e;e++)if(this._weekdaysParse[e]||(n=F([2e3,1]).day(e),a="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[e]=new RegExp(a.replace(".",""),"i")),this._weekdaysParse[e].test(t))return e},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(t){var e=this._longDateFormat[t];return!e&&this._longDateFormat[t.toUpperCase()]&&(e=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t]=e),e},isPM:function(t){return"p"===(t+"").toLowerCase()[0]},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(t,e){var n=this._calendar[t];return"function"==typeof n?n.apply(e):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(t,e,n,a){var s=this._relativeTime[n];return"function"==typeof s?s(t,e,n,a):s.replace(/%d/i,t)},pastFuture:function(t,e){var n=this._relativeTime[t>0?"future":"past"];return"function"==typeof n?n(e):n.replace(/%s/i,e)},ordinal:function(t){return this._ordinal.replace("%d",t)},_ordinal:"%d",preparse:function(t){return t},postformat:function(t){return t},week:function(t){return T(t,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6}},F=function(t,e,n){return x({_i:t,_f:e,_l:n,_isUTC:!1})},F.utc=function(t,e,n){return x({_useUTC:!0,_isUTC:!0,_l:n,_i:t,_f:e})},F.unix=function(t){return F(1e3*t)},F.duration=function(t,e){var n,a,s=F.isDuration(t),r="number"==typeof t,o=s?t._input:r?{}:t,h=I.exec(t);return r?e?o[e]=t:o.milliseconds=t:h&&(n="-"===h[1]?-1:1,o={y:0,d:~~h[2]*n,h:~~h[3]*n,m:~~h[4]*n,s:~~h[5]*n,ms:~~h[6]*n}),a=new i(o),s&&t.hasOwnProperty("_lang")&&(a._lang=t._lang),a},F.version=H,F.defaultFormat=K,F.updateOffset=function(){},F.lang=function(t,e){return t?(e?f(t,e):z[t]||m(t),void(F.duration.fn._lang=F.fn._lang=m(t))):F.fn._lang._abbr},F.langData=function(t){return t&&t._lang&&t._lang._abbr&&(t=t._lang._abbr),m(t)},F.isMoment=function(t){return t instanceof s},F.isDuration=function(t){return t instanceof i},F.fn=s.prototype={clone:function(){return F(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){return D(F(this).utc(),"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var t=this;return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds()]},isValid:function(){return null==this._isValid&&(this._isValid=this._a?!c(this._a,(this._isUTC?F.utc(this._a):F(this._a)).toArray()):!isNaN(this._d.getTime())),!!this._isValid},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(t){var e=D(this,t||F.defaultFormat);return this.lang().postformat(e)},add:function(t,e){var n;return n="string"==typeof t?F.duration(+e,t):F.duration(t,e),l(this,n,1),this},subtract:function(t,e){var n;return n="string"==typeof t?F.duration(+e,t):F.duration(t,e),l(this,n,-1),this},diff:function(t,e,n){var a,s,i=this._isUTC?F(t).zone(this._offset||0):F(t).local(),r=6e4*(this.zone()-i.zone());return e=u(e),"year"===e||"month"===e?(a=432e5*(this.daysInMonth()+i.daysInMonth()),s=12*(this.year()-i.year())+(this.month()-i.month()),s+=(this-F(this).startOf("month")-(i-F(i).startOf("month")))/a,s-=6e4*(this.zone()-F(this).startOf("month").zone()-(i.zone()-F(i).startOf("month").zone()))/a,"year"===e&&(s/=12)):(a=this-i,s="second"===e?a/1e3:"minute"===e?a/6e4:"hour"===e?a/36e5:"day"===e?(a-r)/864e5:"week"===e?(a-r)/6048e5:a),n?s:o(s)},from:function(t,e){return F.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)},fromNow:function(t){return this.from(F(),t)},calendar:function(){var t=this.diff(F().startOf("day"),"days",!0),e=-6>t?"sameElse":-1>t?"lastWeek":0>t?"lastDay":1>t?"sameDay":2>t?"nextDay":7>t?"nextWeek":"sameElse";return this.format(this.lang().calendar(e,this))},isLeapYear:function(){var t=this.year();return 0===t%4&&0!==t%100||0===t%400},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(t){var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?"string"==typeof t&&(t=this.lang().weekdaysParse(t),"number"!=typeof t)?this:this.add({d:t-e}):e},month:function(t){var e,n=this._isUTC?"UTC":"";return null!=t?"string"==typeof t&&(t=this.lang().monthsParse(t),"number"!=typeof t)?this:(e=this.date(),this.date(1),this._d["set"+n+"Month"](t),this.date(Math.min(e,this.daysInMonth())),F.updateOffset(this),this):this._d["get"+n+"Month"]()},startOf:function(t){switch(t=u(t)){case"year":this.month(0);case"month":this.date(1);case"week":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),this},endOf:function(t){return this.startOf(t).add(t,1).subtract("ms",1)},isAfter:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)>+F(t).startOf(e)},isBefore:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)<+F(t).startOf(e)},isSame:function(t,e){return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)===+F(t).startOf(e)},min:function(t){return t=F.apply(null,arguments),this>t?this:t},max:function(t){return t=F.apply(null,arguments),t>this?this:t},zone:function(t){var e=this._offset||0;return null==t?this._isUTC?e:this._d.getTimezoneOffset():("string"==typeof t&&(t=g(t)),Math.abs(t)<16&&(t=60*t),this._offset=t,this._isUTC=!0,e!==t&&l(this,F.duration(e-t,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},daysInMonth:function(){return F.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(t){var e=A((F(this).startOf("day")-F(this).startOf("year"))/864e5)+1;return null==t?e:this.add("d",t-e)},weekYear:function(t){var e=T(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==t?e:this.add("y",t-e)},isoWeekYear:function(t){var e=T(this,1,4).year;return null==t?e:this.add("y",t-e)},week:function(t){var e=this.lang().week(this);return null==t?e:this.add("d",7*(t-e))},isoWeek:function(t){var e=T(this,1,4).week;return null==t?e:this.add("d",7*(t-e))},weekday:function(t){var e=(this._d.getDay()+7-this.lang()._week.dow)%7;return null==t?e:this.add("d",t-e)},isoWeekday:function(t){return null==t?this.day()||7:this.day(this.day()%7?t:t-7)},lang:function(e){return e===t?this._lang:(this._lang=m(e),this)}},W=0;W<ne.length;W++)L(ne[W].toLowerCase().replace(/s$/,""),ne[W]);L("year","FullYear"),F.fn.days=F.fn.day,F.fn.months=F.fn.month,F.fn.weeks=F.fn.week,F.fn.isoWeeks=F.fn.isoWeek,F.fn.toJSON=F.fn.toISOString,F.duration.fn=i.prototype={_bubble:function(){var t,e,n,a,s=this._milliseconds,i=this._days,r=this._months,h=this._data;h.milliseconds=s%1e3,t=o(s/1e3),h.seconds=t%60,e=o(t/60),h.minutes=e%60,n=o(e/60),h.hours=n%24,i+=o(n/24),h.days=i%30,r+=o(i/30),h.months=r%12,a=o(r/12),h.years=a},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*~~(this._months/12)},humanize:function(t){var e=+this,n=S(e,!t,this.lang());return t&&(n=this.lang().pastFuture(e,n)),this.lang().postformat(n)},add:function(t,e){var n=F.duration(t,e);return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(t,e){var n=F.duration(t,e);return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(t){return t=u(t),this[t.toLowerCase()+"s"]()},as:function(t){return t=u(t),this["as"+t.charAt(0).toUpperCase()+t.slice(1)+"s"]()},lang:F.fn.lang};for(W in ae)ae.hasOwnProperty(W)&&(O(W,ae[W]),P(W.toLowerCase()));O("Weeks",6048e5),F.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},F.lang("en",{ordinal:function(t){var e=t%10,n=1===~~(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n}}),E&&(module.exports=F),"undefined"==typeof ender&&(this.moment=F),"function"==typeof define&&define.amd&&define("moment",[],function(){return F})}.call(this),!function(t){var e=function(e,n,a){var s,i="object"==typeof n;this.startDate=moment().startOf("day"),this.endDate=moment().startOf("day"),this.minDate=!1,this.maxDate=!1,this.dateLimit=!1,this.showDropdowns=!1,this.showWeekNumbers=!1,this.timePicker=!1,this.timePickerIncrement=30,this.timePicker12Hour=!0,this.ranges={},this.opens="right",this.buttonClasses=["btn","btn-small"],this.applyClass="btn-success",this.cancelClass="btn-default",this.format="MM/DD/YYYY",this.separator=" - ",this.locale={applyLabel:"Apply",cancelLabel:"Cancel",fromLabel:"From",toLabel:"To",weekLabel:"W",customRangeLabel:"Custom Range",daysOfWeek:moment()._lang._weekdaysMin.slice(),monthNames:moment()._lang._monthsShort.slice(),firstDay:0},this.cb=function(){},this.parentEl="body",this.element=t(e),this.element.hasClass("pull-right")&&(this.opens="left"),this.element.is("input")?this.element.on({click:t.proxy(this.show,this),focus:t.proxy(this.show,this)}):this.element.on("click",t.proxy(this.show,this)),s=this.locale,i&&("object"==typeof n.locale&&t.each(s,function(t,e){s[t]=n.locale[t]||e}),n.applyClass&&(this.applyClass=n.applyClass),n.cancelClass&&(this.cancelClass=n.cancelClass));var r='<div class="daterangepicker dropdown-menu"><div class="calendar left"></div><div class="calendar right"></div><div class="ranges"><div class="range_inputs"><div class="daterangepicker_start_input" style="float: left"><label for="daterangepicker_start">'+this.locale.fromLabel+'</label><input class="input-mini" type="text" name="daterangepicker_start" value="" disabled="disabled" /></div><div class="daterangepicker_end_input" style="float: left; padding-left: 11px"><label for="daterangepicker_end">'+this.locale.toLabel+'</label><input class="input-mini" type="text" name="daterangepicker_end" value="" disabled="disabled" /></div><button class="'+this.applyClass+' applyBtn" disabled="disabled">'+this.locale.applyLabel+'</button>&nbsp;<button class="'+this.cancelClass+' cancelBtn">'+this.locale.cancelLabel+"</button></div></div></div>";if(this.parentEl=i&&n.parentEl&&t(n.parentEl)||t(this.parentEl),this.container=t(r).appendTo(this.parentEl),i){if("string"==typeof n.format&&(this.format=n.format),"string"==typeof n.separator&&(this.separator=n.separator),"string"==typeof n.startDate&&(this.startDate=moment(n.startDate,this.format)),"string"==typeof n.endDate&&(this.endDate=moment(n.endDate,this.format)),"string"==typeof n.minDate&&(this.minDate=moment(n.minDate,this.format)),"string"==typeof n.maxDate&&(this.maxDate=moment(n.maxDate,this.format)),"object"==typeof n.startDate&&(this.startDate=moment(n.startDate)),"object"==typeof n.endDate&&(this.endDate=moment(n.endDate)),"object"==typeof n.minDate&&(this.minDate=moment(n.minDate)),"object"==typeof n.maxDate&&(this.maxDate=moment(n.maxDate)),"object"==typeof n.ranges){for(var o in n.ranges){var h=moment(n.ranges[o][0]),l=moment(n.ranges[o][1]);this.minDate&&h.isBefore(this.minDate)&&(h=moment(this.minDate)),this.maxDate&&l.isAfter(this.maxDate)&&(l=moment(this.maxDate)),this.minDate&&l.isBefore(this.minDate)||this.maxDate&&h.isAfter(this.maxDate)||(this.ranges[o]=[h,l])}var d="<ul>";for(var o in this.ranges)d+="<li>"+o+"</li>";d+="<li>"+this.locale.customRangeLabel+"</li>",d+="</ul>",this.container.find(".ranges").prepend(d)}if("object"==typeof n.dateLimit&&(this.dateLimit=n.dateLimit),"object"==typeof n.locale&&("object"==typeof n.locale.daysOfWeek&&(this.locale.daysOfWeek=n.locale.daysOfWeek.slice()),"number"==typeof n.locale.firstDay)){this.locale.firstDay=n.locale.firstDay;for(var c=n.locale.firstDay;c>0;)this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()),c--}"string"==typeof n.opens&&(this.opens=n.opens),"boolean"==typeof n.showWeekNumbers&&(this.showWeekNumbers=n.showWeekNumbers),"string"==typeof n.buttonClasses&&(this.buttonClasses=[n.buttonClasses]),"object"==typeof n.buttonClasses&&(this.buttonClasses=n.buttonClasses),"boolean"==typeof n.showDropdowns&&(this.showDropdowns=n.showDropdowns),"boolean"==typeof n.timePicker&&(this.timePicker=n.timePicker),"number"==typeof n.timePickerIncrement&&(this.timePickerIncrement=n.timePickerIncrement),"boolean"==typeof n.timePicker12Hour&&(this.timePicker12Hour=n.timePicker12Hour)}this.timePicker||(this.startDate=this.startDate.startOf("day"),this.endDate=this.endDate.startOf("day"));var u=this.container;if(t.each(this.buttonClasses,function(t,e){u.find("button").addClass(e)}),"right"==this.opens){var f=this.container.find(".calendar.left"),m=this.container.find(".calendar.right");f.removeClass("left").addClass("right"),m.removeClass("right").addClass("left")}if(("undefined"==typeof n||"undefined"==typeof n.ranges)&&(this.container.find(".calendar").show(),this.move()),"function"==typeof a&&(this.cb=a),this.container.addClass("opens"+this.opens),(!i||"undefined"==typeof n.startDate&&"undefined"==typeof n.endDate)&&t(this.element).is("input[type=text]")){var h,l,p=t(this.element).val(),y=p.split(this.separator);2==y.length&&(h=moment(y[0],this.format),l=moment(y[1],this.format)),null!=h&&null!=l&&(this.startDate=h,this.endDate=l)}this.oldStartDate=this.startDate.clone(),this.oldEndDate=this.endDate.clone(),this.leftCalendar={month:moment([this.startDate.year(),this.startDate.month(),1,this.startDate.hour(),this.startDate.minute()]),calendar:[]},this.rightCalendar={month:moment([this.endDate.year(),this.endDate.month(),1,this.endDate.hour(),this.endDate.minute()]),calendar:[]},this.container.on("mousedown",t.proxy(this.mousedown,this)),this.container.find(".calendar").on("click",".prev",t.proxy(this.clickPrev,this)).on("click",".next",t.proxy(this.clickNext,this)).on("click","td.available",t.proxy(this.clickDate,this)).on("mouseenter","td.available",t.proxy(this.enterDate,this)).on("mouseleave","td.available",t.proxy(this.updateFormInputs,this)).on("change","select.yearselect",t.proxy(this.updateMonthYear,this)).on("change","select.monthselect",t.proxy(this.updateMonthYear,this)).on("change","select.hourselect,select.minuteselect,select.ampmselect",t.proxy(this.updateTime,this)),this.container.find(".ranges").on("click","button.applyBtn",t.proxy(this.clickApply,this)).on("click","button.cancelBtn",t.proxy(this.clickCancel,this)).on("click",".daterangepicker_start_input,.daterangepicker_end_input",t.proxy(this.showCalendars,this)).on("click","li",t.proxy(this.clickRange,this)).on("mouseenter","li",t.proxy(this.enterRange,this)).on("mouseleave","li",t.proxy(this.updateFormInputs,this)),this.element.on("keyup",t.proxy(this.updateFromControl,this)),this.updateView(),this.updateCalendars()};e.prototype={constructor:e,mousedown:function(t){t.stopPropagation()},updateView:function(){this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()),this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()),this.updateFormInputs()},updateFormInputs:function(){this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.format)),this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.format)),this.startDate.isSame(this.endDate)||this.startDate.isBefore(this.endDate)?this.container.find("button.applyBtn").removeAttr("disabled"):this.container.find("button.applyBtn").attr("disabled","disabled")},updateFromControl:function(){if(this.element.is("input")&&this.element.val().length){var t=this.element.val().split(this.separator),e=moment(t[0],this.format),n=moment(t[1],this.format);null!=e&&null!=n&&(n.isBefore(e)||(this.oldStartDate=this.startDate.clone(),this.oldEndDate=this.endDate.clone(),this.startDate=e,this.endDate=n,this.startDate.isSame(this.oldStartDate)&&this.endDate.isSame(this.oldEndDate)||this.notify(),this.updateCalendars()))}},notify:function(){this.updateView(),this.cb(this.startDate,this.endDate)},move:function(){var e={top:this.parentEl.offset().top-(this.parentEl.is("body")?0:this.parentEl.scrollTop()),left:this.parentEl.offset().left-(this.parentEl.is("body")?0:this.parentEl.scrollLeft())};"left"==this.opens?(this.container.css({top:this.element.offset().top+this.element.outerHeight()-e.top,right:t(window).width()-this.element.offset().left-this.element.outerWidth()-e.left,left:"auto"}),this.container.offset().left<0&&this.container.css({right:"auto",left:9})):(this.container.css({top:this.element.offset().top+this.element.outerHeight()-e.top,left:this.element.offset().left-e.left,right:"auto"}),this.container.offset().left+this.container.outerWidth()>t(window).width()&&this.container.css({left:"auto",right:0}))},show:function(e){this.container.show(),this.move(),e&&(e.stopPropagation(),e.preventDefault()),t(document).on("mousedown",t.proxy(this.hide,this)),this.element.trigger("shown",{target:e.target,picker:this})},hide:function(){this.container.hide(),this.startDate.isSame(this.oldStartDate)&&this.endDate.isSame(this.oldEndDate)||this.notify(),this.oldStartDate=this.startDate.clone(),this.oldEndDate=this.endDate.clone(),t(document).off("mousedown",this.hide),this.element.trigger("hidden",{picker:this})},enterRange:function(t){var e=t.target.innerHTML;if(e==this.locale.customRangeLabel)this.updateView();else{var n=this.ranges[e];this.container.find("input[name=daterangepicker_start]").val(n[0].format(this.format)),this.container.find("input[name=daterangepicker_end]").val(n[1].format(this.format))}},showCalendars:function(){this.container.find(".calendar").show(),this.move()},updateInputText:function(){this.element.is("input")&&this.element.val(this.startDate.format(this.format)+this.separator+this.endDate.format(this.format))},clickRange:function(t){var e=t.target.innerHTML;if(e==this.locale.customRangeLabel)this.showCalendars();else{var n=this.ranges[e];this.startDate=n[0],this.endDate=n[1],this.timePicker||(this.startDate.startOf("day"),this.endDate.startOf("day")),this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()).hour(this.startDate.hour()).minute(this.startDate.minute()),this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()).hour(this.endDate.hour()).minute(this.endDate.minute()),this.updateCalendars(),this.updateInputText(),this.container.find(".calendar").hide(),this.hide()}},clickPrev:function(e){var n=t(e.target).parents(".calendar");n.hasClass("left")?this.leftCalendar.month.subtract("month",1):this.rightCalendar.month.subtract("month",1),this.updateCalendars()},clickNext:function(e){var n=t(e.target).parents(".calendar");n.hasClass("left")?this.leftCalendar.month.add("month",1):this.rightCalendar.month.add("month",1),this.updateCalendars()},enterDate:function(e){var n=t(e.target).attr("data-title"),a=n.substr(1,1),s=n.substr(3,1),i=t(e.target).parents(".calendar");i.hasClass("left")?this.container.find("input[name=daterangepicker_start]").val(this.leftCalendar.calendar[a][s].format(this.format)):this.container.find("input[name=daterangepicker_end]").val(this.rightCalendar.calendar[a][s].format(this.format))},clickDate:function(e){var n=t(e.target).attr("data-title"),a=n.substr(1,1),s=n.substr(3,1),i=t(e.target).parents(".calendar");if(i.hasClass("left")){var r=this.leftCalendar.calendar[a][s],o=this.endDate;if("object"==typeof this.dateLimit){var h=moment(r).add(this.dateLimit).startOf("day");o.isAfter(h)&&(o=h)}}else{var r=this.startDate,o=this.rightCalendar.calendar[a][s];if("object"==typeof this.dateLimit){var l=moment(o).subtract(this.dateLimit).startOf("day");r.isBefore(l)&&(r=l)}}i.find("td").removeClass("active"),r.isSame(o)||r.isBefore(o)?(t(e.target).addClass("active"),this.startDate=r,this.endDate=o):r.isAfter(o)&&(t(e.target).addClass("active"),this.startDate=r,this.endDate=moment(r).add("day",1).startOf("day")),this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year()),this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year()),this.updateCalendars()},clickApply:function(){this.updateInputText(),this.hide()},clickCancel:function(){this.startDate=this.oldStartDate,this.endDate=this.oldEndDate,this.updateView(),this.updateCalendars(),this.hide()},updateMonthYear:function(e){var n=t(e.target).closest(".calendar").hasClass("left"),a=this.container.find(".calendar.left");n||(a=this.container.find(".calendar.right"));var s=parseInt(a.find(".monthselect").val(),10),i=a.find(".yearselect").val();n?this.leftCalendar.month.month(s).year(i):this.rightCalendar.month.month(s).year(i),this.updateCalendars()},updateTime:function(e){var n=t(e.target).closest(".calendar").hasClass("left"),a=this.container.find(".calendar.left");n||(a=this.container.find(".calendar.right"));var s=parseInt(a.find(".hourselect").val()),i=parseInt(a.find(".minuteselect").val());if(this.timePicker12Hour){var r=a.find(".ampmselect").val();"PM"==r&&12>s&&(s+=12),"AM"==r&&12==s&&(s=0)}if(n){var o=this.startDate.clone();o.hour(s),o.minute(i),this.startDate=o,this.leftCalendar.month.hour(s).minute(i)}else{var h=this.endDate.clone();h.hour(s),h.minute(i),this.endDate=h,this.rightCalendar.month.hour(s).minute(i)}this.updateCalendars()},updateCalendars:function(){this.leftCalendar.calendar=this.buildCalendar(this.leftCalendar.month.month(),this.leftCalendar.month.year(),this.leftCalendar.month.hour(),this.leftCalendar.month.minute(),"left"),this.rightCalendar.calendar=this.buildCalendar(this.rightCalendar.month.month(),this.rightCalendar.month.year(),this.rightCalendar.month.hour(),this.rightCalendar.month.minute(),"right"),this.container.find(".calendar.left").html(this.renderCalendar(this.leftCalendar.calendar,this.startDate,this.minDate,this.maxDate)),this.container.find(".calendar.right").html(this.renderCalendar(this.rightCalendar.calendar,this.endDate,this.startDate,this.maxDate)),this.container.find(".ranges li").removeClass("active");var t=!0,e=0;for(var n in this.ranges)this.timePicker?this.startDate.isSame(this.ranges[n][0])&&this.endDate.isSame(this.ranges[n][1])&&(t=!1,this.container.find(".ranges li:eq("+e+")").addClass("active")):this.startDate.format("YYYY-MM-DD")==this.ranges[n][0].format("YYYY-MM-DD")&&this.endDate.format("YYYY-MM-DD")==this.ranges[n][1].format("YYYY-MM-DD")&&(t=!1,this.container.find(".ranges li:eq("+e+")").addClass("active")),e++;t&&this.container.find(".ranges li:last").addClass("active")},buildCalendar:function(t,e,n,a){for(var s=moment([e,t,1]),i=moment(s).subtract("month",1).month(),r=moment(s).subtract("month",1).year(),o=moment([r,i]).daysInMonth(),h=s.day(),l=[],d=0;6>d;d++)l[d]=[];var c=o-h+this.locale.firstDay+1;c>o&&(c-=7),h==this.locale.firstDay&&(c=o-6);for(var u=moment([r,i,c,12,a]),d=0,f=0,m=0;42>d;d++,f++,u=moment(u).add("hour",24))d>0&&f%7==0&&(f=0,m++),l[m][f]=u.clone().hour(n),u.hour(12);return l},renderDropdowns:function(t,e,n){for(var a=t.month(),s='<select class="monthselect">',i=!1,r=!1,o=0;12>o;o++)(!i||o>=e.month())&&(!r||o<=n.month())&&(s+="<option value='"+o+"'"+(o===a?" selected='selected'":"")+">"+this.locale.monthNames[o]+"</option>");
s+="</select>";for(var h=t.year(),l=n&&n.year()||h+5,d=e&&e.year()||h-50,c='<select class="yearselect">',u=d;l>=u;u++)c+='<option value="'+u+'"'+(u===h?' selected="selected"':"")+">"+u+"</option>";return c+="</select>",s+c},renderCalendar:function(e,n,a,s){var i='<div class="calendar-date">';i+='<table class="table-condensed">',i+="<thead>",i+="<tr>",this.showWeekNumbers&&(i+="<th></th>"),i+=!a||a.isBefore(e[1][1])?'<th class="prev available"><i class="icon-arrow-left glyphicon glyphicon-arrow-left"></i></th>':"<th></th>";var r=this.locale.monthNames[e[1][1].month()]+e[1][1].format(" YYYY");this.showDropdowns&&(r=this.renderDropdowns(e[1][1],a,s)),i+='<th colspan="5" style="width: auto">'+r+"</th>",i+=!s||s.isAfter(e[1][1])?'<th class="next available"><i class="icon-arrow-right glyphicon glyphicon-arrow-right"></i></th>':"<th></th>",i+="</tr>",i+="<tr>",this.showWeekNumbers&&(i+='<th class="week">'+this.locale.weekLabel+"</th>"),t.each(this.locale.daysOfWeek,function(t,e){i+="<th>"+e+"</th>"}),i+="</tr>",i+="</thead>",i+="<tbody>";for(var o=0;6>o;o++){i+="<tr>",this.showWeekNumbers&&(i+='<td class="week">'+e[o][0].week()+"</td>");for(var h=0;7>h;h++){var l="available ";l+=e[o][h].month()==e[1][1].month()?"":"off",a&&e[o][h].isBefore(a)||s&&e[o][h].isAfter(s)?l=" off disabled ":e[o][h].format("YYYY-MM-DD")==n.format("YYYY-MM-DD")?(l+=" active ",e[o][h].format("YYYY-MM-DD")==this.startDate.format("YYYY-MM-DD")&&(l+=" start-date "),e[o][h].format("YYYY-MM-DD")==this.endDate.format("YYYY-MM-DD")&&(l+=" end-date ")):e[o][h]>=this.startDate&&e[o][h]<=this.endDate&&(l+=" in-range ",e[o][h].isSame(this.startDate)&&(l+=" start-date "),e[o][h].isSame(this.endDate)&&(l+=" end-date "));var d="r"+o+"c"+h;i+='<td class="'+l.replace(/\s+/g," ").replace(/^\s?(.*?)\s?$/,"$1")+'" data-title="'+d+'">'+e[o][h].date()+"</td>"}i+="</tr>"}if(i+="</tbody>",i+="</table>",i+="</div>",this.timePicker){i+='<div class="calendar-time">',i+='<select class="hourselect">';var c=0,u=23,f=n.hour();this.timePicker12Hour&&(c=1,u=12,f>=12&&(f-=12),0==f&&(f=12));for(var m=c;u>=m;m++)i+=m==f?'<option value="'+m+'" selected="selected">'+m+"</option>":'<option value="'+m+'">'+m+"</option>";i+="</select> : ",i+='<select class="minuteselect">';for(var m=0;60>m;m+=this.timePickerIncrement){var p=m;10>p&&(p="0"+p),i+=m==n.minute()?'<option value="'+m+'" selected="selected">'+p+"</option>":'<option value="'+m+'">'+p+"</option>"}i+="</select> ",this.timePicker12Hour&&(i+='<select class="ampmselect">',i+=n.hour()>=12?'<option value="AM">AM</option><option value="PM" selected="selected">PM</option>':'<option value="AM" selected="selected">AM</option><option value="PM">PM</option>',i+="</select>"),i+="</div>"}return i}},t.fn.daterangepicker=function(n,a){return this.each(function(){var s=t(this);s.data("daterangepicker")||s.data("daterangepicker",new e(s,n,a))}),this}}(window.jQuery);
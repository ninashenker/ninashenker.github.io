(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+eFp":function(e,t,n){"use strict";t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=l(n("q1tI")),i=l(n("17x9")),o=l(n("UnXY")),s=l(n("zB99")),u=n("xfxO");function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}u.nameShape.isRequired,i.default.bool,i.default.bool,i.default.bool,(0,u.transitionTimeout)("Appear"),(0,u.transitionTimeout)("Enter"),(0,u.transitionTimeout)("Leave");var f=function(e){function t(){var n,a;c(this,t);for(var i=arguments.length,o=Array(i),u=0;u<i;u++)o[u]=arguments[u];return n=a=p(this,e.call.apply(e,[this].concat(o))),a._wrapChild=function(e){return r.default.createElement(s.default,{name:a.props.transitionName,appear:a.props.transitionAppear,enter:a.props.transitionEnter,leave:a.props.transitionLeave,appearTimeout:a.props.transitionAppearTimeout,enterTimeout:a.props.transitionEnterTimeout,leaveTimeout:a.props.transitionLeaveTimeout},e)},p(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return r.default.createElement(o.default,a({},this.props,{childFactory:this._wrapChild}))},t}(r.default.Component);f.displayName="CSSTransitionGroup",f.propTypes={},f.defaultProps={transitionAppear:!1,transitionEnter:!0,transitionLeave:!0},t.default=f,e.exports=t.default},"1NTO":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(e){return r.a.createElement("h3",{id:"dynamic-styles"},e.content)}},"1w3K":function(e,t,n){"use strict";var a=i(n("+eFp")),r=i(n("UnXY"));function i(e){return e&&e.__esModule?e:{default:e}}e.exports={TransitionGroup:r.default,CSSTransitionGroup:a.default}},"8PcY":function(e,t,n){"use strict";t.__esModule=!0,t.getChildMapping=function(e){if(!e)return e;var t={};return a.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=e})),t},t.mergeChildMappings=function(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var a={},r=[];for(var i in e)t.hasOwnProperty(i)?r.length&&(a[i]=r,r=[]):r.push(i);var o=void 0,s={};for(var u in t){if(a.hasOwnProperty(u))for(o=0;o<a[u].length;o++){var l=a[u][o];s[a[u][o]]=n(l)}s[u]=n(u)}for(o=0;o<r.length;o++)s[r[o]]=n(r[o]);return s};var a=n("q1tI")},Bl7J:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("Wbzz");t.a=function(e){var t=e.title,n=e.children,a=r.a.useState(!1),o=a[0],s=a[1];return r.a.createElement("div",{className:"site-wrapper "+(o?"site-head-open":"")},r.a.createElement("header",{className:"site-head"},r.a.createElement("div",{className:"site-head-container"},r.a.createElement("a",{className:"nav-burger",href:"#",onClick:function(){return s(!o)}},r.a.createElement("div",{className:"hamburger hamburger--collapse","aria-label":"Menu",role:"button","aria-controls":"navigation"},r.a.createElement("div",{className:"hamburger-box"},r.a.createElement("div",{className:"hamburger-inner"})))),r.a.createElement("nav",{id:"swup",class:"site-head-left"},r.a.createElement("ul",{className:"nav",role:"menu"},r.a.createElement("li",{className:"nav-home nav-current",role:"menuitem"},r.a.createElement(i.Link,{to:"/"},"Home")),r.a.createElement("li",{className:"nav-quiz",role:"menuitem"},r.a.createElement(i.Link,{to:"/quiz"},"Quiz")),r.a.createElement("li",{className:"nav-about",role:"menuitem"},r.a.createElement(i.Link,{to:"/about"},"About")))),r.a.createElement("div",{className:"site-head-center"},r.a.createElement(i.Link,{className:"site-head-logo",to:"/"},t)))),r.a.createElement("main",{id:"site-main",className:"site-main"},r.a.createElement("div",{id:"swup",className:"transition-fade"},n)),r.a.createElement("footer",{className:"site-foot"},"© ",(new Date).getFullYear()," ",r.a.createElement(i.Link,{to:"/"},t)," — Built with"," ",r.a.createElement("a",{href:"https://gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Gatsby")))}},Bp9Y:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=a,e.exports=t.default},GCOq:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),r=n("q1tI"),i=n.n(r),o=n("Bl7J"),s=[{question:"What is your biggest skincare concern?",answers:[{type:"Vitamin C",content:"Aging"},{type:"AHA/BHAs",content:"Acne"},{type:"Retinol",content:"Uneven skin tone/texture"},{type:"Hyaluronic acid",content:"Dullness"}]},{question:"What is your skin type?",answers:[{type:"Vitamin C",content:"I'm not sure"},{type:"Hyaluronic acid",content:"Dry"},{type:"AHA/BHAs",content:"Oily"},{type:"Retinol",content:"Combination"}]},{question:"What is your age range?",answers:[{type:"AHA/BHAs",content:"< 20"},{type:"Vitamin C",content:"21-30"},{type:"Hyaluronic acid",content:"31-40"},{type:"Retinol",content:"> 40"}]},{question:"How often do you exfoliate?",answers:[{type:"AHA/BHAs",content:"Never"},{type:"Retinol",content:"Few times a month"},{type:"Vitamin C",content:"Once a week"},{type:"Hyaluronic acid",content:"Everyday"}]},{question:"How often do you apply SPF?",answers:[{type:"Vitamin C",content:"Daily"},{type:"Hyaluronic acid",content:"Some days"},{type:"AHA/BHAs",content:"Rarely"},{type:"Retinol",content:"Never"}]}],u=n("Wbzz"),l=n("1w3K"),c=n("1NTO");var p=function(e){return i.a.createElement("li",{className:"answerOption"},i.a.createElement("input",{type:"radio",className:"radioCustomButton",name:"radioGroup",checked:e.answerType===e.answer,id:e.answerType,value:e.answerType,disabled:e.answer,onChange:e.onAnswerSelected}),i.a.createElement("label",{className:"radioCustomLabel",htmlFor:e.answerType},e.answerContent))};var f=function(e){return i.a.createElement("div",{key:e.questionId},i.a.createElement(c.a,{content:e.question}),i.a.createElement("ul",{className:"answerOptions"},e.answerOptions.map((function(t){return i.a.createElement(p,{key:t.content,answerContent:t.content,answerType:t.type,answer:e.answer,questionId:e.questionId,onAnswerSelected:e.onAnswerSelected})}))))};var d=function(e){return i.a.createElement(l.CSSTransitionGroup,{className:"container result",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},i.a.createElement("h3",null," You need ",i.a.createElement("strong",null,e.quizResult),"! "),i.a.createElement("h2",null,i.a.createElement("a",{href:"/quiz",className:"button large"},"Retake Quiz")))},m=(n("Q8kY"),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={counter:0,questionId:1,question:"",answerOptions:[],answer:"",answersCount:{},result:""},n.handleAnswerSelected=n.handleAnswerSelected.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}Object(a.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState({question:s[0].question,answerOptions:s[0].answers})},n.shuffleArray=function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e},n.handleAnswerSelected=function(e){var t=this;this.setUserAnswer(e.currentTarget.value),this.state.questionId<s.length?setTimeout((function(){return t.setNextQuestion()}),300):setTimeout((function(){return t.setResults(t.getResults())}),300)},n.setUserAnswer=function(e){this.setState((function(t,n){var a;return{answersCount:Object.assign({},t.answersCount,(a={},a[e]=(t.answersCount[e]||0)+1,a)),answer:e}}))},n.setNextQuestion=function(){var e=this.state.counter+1,t=this.state.questionId+1;this.setState({counter:e,questionId:t,question:s[e].question,answerOptions:s[e].answers,answer:""})},n.getResults=function(){var e=this.state.answersCount,t=Object.keys(e),n=t.map((function(t){return e[t]})),a=Math.max.apply(null,n);return t.filter((function(t){return e[t]===a}))},n.setResults=function(e){1===e.length?this.setState({result:e[0]}):this.setState({result:"Niacinimide"})},n.renderQuiz=function(){return i.a.createElement(f,{answer:this.state.answer,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,questionTotal:s.length,onAnswerSelected:this.handleAnswerSelected})},n.renderResult=function(){return i.a.createElement(d,{quizResult:this.state.result})},n.render=function(){return i.a.createElement("div",{className:"Quiz"},i.a.createElement("article",{className:"post-content page-template no-image"},i.a.createElement("div",{className:"post-content-body"},this.state.result?this.renderResult():this.renderQuiz())))},t}(r.Component)),h=function(e,t){var n=e.data.site.siteMetadata.title;return i.a.createElement(o.a,{title:n},i.a.createElement(m,null))};t.default=function(e){return i.a.createElement(u.StaticQuery,{query:"3159585216",render:function(t){return i.a.createElement(h,Object.assign({location:e.location,data:t},e))}})}},Q8kY:function(e,t,n){},Qrca:function(e,t){e.exports=function(){for(var e=arguments.length,t=[],n=0;n<e;n++)t[n]=arguments[n];if(0!==(t=t.filter((function(e){return null!=e}))).length)return 1===t.length?t[0]:t.reduce((function(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}))}},UnXY:function(e,t,n){"use strict";t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=u(n("Qrca")),i=u(n("q1tI")),o=u(n("17x9")),s=(u(n("ndZz")),n("8PcY"));function u(e){return e&&e.__esModule?e:{default:e}}o.default.any,o.default.func,o.default.node;var l=function(e){function t(n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,r));return i.performAppear=function(e,t){i.currentlyTransitioningKeys[e]=!0,t.componentWillAppear?t.componentWillAppear(i._handleDoneAppearing.bind(i,e,t)):i._handleDoneAppearing(e,t)},i._handleDoneAppearing=function(e,t){t.componentDidAppear&&t.componentDidAppear(),delete i.currentlyTransitioningKeys[e];var n=(0,s.getChildMapping)(i.props.children);n&&n.hasOwnProperty(e)||i.performLeave(e,t)},i.performEnter=function(e,t){i.currentlyTransitioningKeys[e]=!0,t.componentWillEnter?t.componentWillEnter(i._handleDoneEntering.bind(i,e,t)):i._handleDoneEntering(e,t)},i._handleDoneEntering=function(e,t){t.componentDidEnter&&t.componentDidEnter(),delete i.currentlyTransitioningKeys[e];var n=(0,s.getChildMapping)(i.props.children);n&&n.hasOwnProperty(e)||i.performLeave(e,t)},i.performLeave=function(e,t){i.currentlyTransitioningKeys[e]=!0,t.componentWillLeave?t.componentWillLeave(i._handleDoneLeaving.bind(i,e,t)):i._handleDoneLeaving(e,t)},i._handleDoneLeaving=function(e,t){t.componentDidLeave&&t.componentDidLeave(),delete i.currentlyTransitioningKeys[e];var n=(0,s.getChildMapping)(i.props.children);n&&n.hasOwnProperty(e)?i.keysToEnter.push(e):i.setState((function(t){var n=a({},t.children);return delete n[e],{children:n}}))},i.childRefs=Object.create(null),i.state={children:(0,s.getChildMapping)(n.children)},i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},t.prototype.componentDidMount=function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t,this.childRefs[t])},t.prototype.componentWillReceiveProps=function(e){var t=(0,s.getChildMapping)(e.children),n=this.state.children;for(var a in this.setState({children:(0,s.mergeChildMappings)(n,t)}),t){var r=n&&n.hasOwnProperty(a);!t[a]||r||this.currentlyTransitioningKeys[a]||this.keysToEnter.push(a)}for(var i in n){var o=t&&t.hasOwnProperty(i);!n[i]||o||this.currentlyTransitioningKeys[i]||this.keysToLeave.push(i)}},t.prototype.componentDidUpdate=function(){var e=this,t=this.keysToEnter;this.keysToEnter=[],t.forEach((function(t){return e.performEnter(t,e.childRefs[t])}));var n=this.keysToLeave;this.keysToLeave=[],n.forEach((function(t){return e.performLeave(t,e.childRefs[t])}))},t.prototype.render=function(){var e=this,t=[],n=function(n){var a=e.state.children[n];if(a){var o="string"!=typeof a.ref,s=e.props.childFactory(a),u=function(t){e.childRefs[n]=t};s===a&&o&&(u=(0,r.default)(a.ref,u)),t.push(i.default.cloneElement(s,{key:n,ref:u}))}};for(var o in this.state.children)n(o);var s=a({},this.props);return delete s.transitionLeave,delete s.transitionName,delete s.transitionAppear,delete s.transitionEnter,delete s.childFactory,delete s.transitionLeaveTimeout,delete s.transitionEnterTimeout,delete s.transitionAppearTimeout,delete s.component,i.default.createElement(this.props.component,s,t)},t}(i.default.Component);l.displayName="TransitionGroup",l.propTypes={},l.defaultProps={component:"span",childFactory:function(e){return e}},t.default=l,e.exports=t.default},VOcB:function(e,t,n){"use strict";function a(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=a(e.className,t):e.setAttribute("class",a(e.className&&e.className.baseVal||"",t))}},ndZz:function(e,t,n){"use strict";e.exports=function(){}},"q5+k":function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=void 0;var r,i=a(n("Bp9Y")),o="clearTimeout",s=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-l)),a=setTimeout(e,n);return l=t,a},u=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};i.default&&["","webkit","moz","o","ms"].some((function(e){var t=u(e,"request");if(t in window)return o=u(e,"cancel"),s=function(e){return window[t](e)}}));var l=(new Date).getTime();(r=function(e){return s(e)}).cancel=function(e){window[o]&&"function"==typeof window[o]&&window[o](e)};var c=r;t.default=c,e.exports=t.default},xU8c:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var r,i,o,s,u,l,c,p,f,d,m,h=a(n("Bp9Y")),y="transform";if(t.transform=y,t.animationEnd=o,t.transitionEnd=i,t.transitionDelay=c,t.transitionTiming=l,t.transitionDuration=u,t.transitionProperty=s,t.animationDelay=m,t.animationTiming=d,t.animationDuration=f,t.animationName=p,h.default){var v=function(){for(var e,t,n=document.createElement("div").style,a={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},r=Object.keys(a),i="",o=0;o<r.length;o++){var s=r[o];if(s+"TransitionProperty"in n){i="-"+s.toLowerCase(),e=a[s]("TransitionEnd"),t=a[s]("AnimationEnd");break}}!e&&"transitionProperty"in n&&(e="transitionend");!t&&"animationName"in n&&(t="animationend");return n=null,{animationEnd:t,transitionEnd:e,prefix:i}}();r=v.prefix,t.transitionEnd=i=v.transitionEnd,t.animationEnd=o=v.animationEnd,t.transform=y=r+"-"+y,t.transitionProperty=s=r+"-transition-property",t.transitionDuration=u=r+"-transition-duration",t.transitionDelay=c=r+"-transition-delay",t.transitionTiming=l=r+"-transition-timing-function",t.animationName=p=r+"-animation-name",t.animationDuration=f=r+"-animation-duration",t.animationTiming=d=r+"-animation-delay",t.animationDelay=m=r+"-animation-timing-function"}var w={transform:y,end:i,property:s,timing:l,delay:c,duration:u};t.default=w},xfxO:function(e,t,n){"use strict";t.__esModule=!0,t.nameShape=void 0,t.transitionTimeout=function(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}};r(n("q1tI"));var a=r(n("17x9"));function r(e){return e&&e.__esModule?e:{default:e}}t.nameShape=a.default.oneOfType([a.default.string,a.default.shape({enter:a.default.string,leave:a.default.string,active:a.default.string}),a.default.shape({enter:a.default.string,enterActive:a.default.string,leave:a.default.string,leaveActive:a.default.string,appear:a.default.string,appearActive:a.default.string})])},yD6e:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},ycFn:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,r.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var r=a(n("yD6e"));e.exports=t.default},zB99:function(e,t,n){"use strict";t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=f(n("ycFn")),i=f(n("VOcB")),o=f(n("q5+k")),s=n("xU8c"),u=f(n("q1tI")),l=f(n("17x9")),c=n("i8i4"),p=n("xfxO");function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=[];s.transitionEnd&&h.push(s.transitionEnd),s.animationEnd&&h.push(s.animationEnd);l.default.node,p.nameShape.isRequired,l.default.bool,l.default.bool,l.default.bool,l.default.number,l.default.number,l.default.number;var y=function(e){function t(){var n,a;d(this,t);for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=a=m(this,e.call.apply(e,[this].concat(i))),a.componentWillAppear=function(e){a.props.appear?a.transition("appear",e,a.props.appearTimeout):e()},a.componentWillEnter=function(e){a.props.enter?a.transition("enter",e,a.props.enterTimeout):e()},a.componentWillLeave=function(e){a.props.leave?a.transition("leave",e,a.props.leaveTimeout):e()},m(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach((function(e){clearTimeout(e)})),this.classNameAndNodeQueue.length=0},t.prototype.transition=function(e,t,n){var a=(0,c.findDOMNode)(this);if(a){var o=this.props.name[e]||this.props.name+"-"+e,u=this.props.name[e+"Active"]||o+"-active",l=null,p=void 0;(0,r.default)(a,o),this.queueClassAndNode(u,a);var f=function(e){e&&e.target!==a||(clearTimeout(l),p&&p(),(0,i.default)(a,o),(0,i.default)(a,u),p&&p(),t&&t())};n?(l=setTimeout(f,n),this.transitionTimeouts.push(l)):s.transitionEnd&&(p=function(e,t){return h.length?h.forEach((function(n){return e.addEventListener(n,t,!1)})):setTimeout(t,0),function(){h.length&&h.forEach((function(n){return e.removeEventListener(n,t,!1)}))}}(a,f))}else t&&t()},t.prototype.queueClassAndNode=function(e,t){var n=this;this.classNameAndNodeQueue.push({className:e,node:t}),this.rafHandle||(this.rafHandle=(0,o.default)((function(){return n.flushClassNameAndNodeQueue()})))},t.prototype.flushClassNameAndNodeQueue=function(){this.unmounted||this.classNameAndNodeQueue.forEach((function(e){e.node.scrollTop,(0,r.default)(e.node,e.className)})),this.classNameAndNodeQueue.length=0,this.rafHandle=null},t.prototype.render=function(){var e=a({},this.props);return delete e.name,delete e.appear,delete e.enter,delete e.leave,delete e.appearTimeout,delete e.enterTimeout,delete e.leaveTimeout,delete e.children,u.default.cloneElement(u.default.Children.only(this.props.children),e)},t}(u.default.Component);y.displayName="CSSTransitionGroupChild",y.propTypes={},t.default=y,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-quiz-js-49bb7adb44a22e1e39f4.js.map
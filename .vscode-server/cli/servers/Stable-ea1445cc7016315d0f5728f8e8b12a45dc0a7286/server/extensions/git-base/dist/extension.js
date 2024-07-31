(()=>{"use strict";var e={635:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ApiImpl=void 0,t.registerAPICommands=function(e){const t=[];return t.push(i.commands.registerCommand("git-base.api.getRemoteSources",(t=>{if(e.model)return(0,r.pickRemoteSource)(e.model,t)}))),i.Disposable.from(...t)};const i=o(398),r=o(698);t.ApiImpl=class{constructor(e){this._model=e}pickRemoteSource(e){return(0,r.pickRemoteSource)(this._model,e)}getRemoteSourceActions(e){return(0,r.getRemoteSourceActions)(this._model,e)}registerRemoteSourceProvider(e){return this._model.registerRemoteSourceProvider(e)}}},915:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GitBaseExtensionImpl=void 0;const i=o(398),r=o(635);t.GitBaseExtensionImpl=class{set model(e){this._model=e;const t=!!e;this.enabled!==t&&(this.enabled=t,this._onDidChangeEnablement.fire(this.enabled))}get model(){return this._model}constructor(e){this.enabled=!1,this._onDidChangeEnablement=new i.EventEmitter,this.onDidChangeEnablement=this._onDidChangeEnablement.event,this._model=void 0,e&&(this.enabled=!0,this._model=e)}getAPI(e){if(!this._model)throw new Error("Git model not found");if(1!==e)throw new Error(`No API version ${e} found.`);return new r.ApiImpl(this._model)}}},91:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.throttle=void 0,t.debounce=function(e){return r(((t,o)=>{const i=`$debounce$${o}`;return function(...o){clearTimeout(this[i]),this[i]=setTimeout((()=>t.apply(this,o)),e)}}))};const i=o(813);function r(e){return(t,o,i)=>{let r=null,s=null;if("function"==typeof i.value?(r="value",s=i.value):"function"==typeof i.get&&(r="get",s=i.get),!s||!r)throw new Error("not supported");i[r]=e(s,o)}}t.throttle=r((function(e,t){const o=`$throttle$current$${t}`,r=`$throttle$next$${t}`,s=function(...t){if(this[r])return this[r];if(this[o])return this[r]=(0,i.done)(this[o]).then((()=>(this[r]=void 0,s.apply(this,t)))),this[r];this[o]=e.apply(this,t);const n=()=>this[o]=void 0;return(0,i.done)(this[o]).then(n,n),this[o]};return s}))},484:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Model=void 0;const i=o(398),r=o(813);t.Model=class{constructor(){this.remoteSourceProviders=new Set,this._onDidAddRemoteSourceProvider=new i.EventEmitter,this.onDidAddRemoteSourceProvider=this._onDidAddRemoteSourceProvider.event,this._onDidRemoveRemoteSourceProvider=new i.EventEmitter,this.onDidRemoveRemoteSourceProvider=this._onDidRemoveRemoteSourceProvider.event}registerRemoteSourceProvider(e){return this.remoteSourceProviders.add(e),this._onDidAddRemoteSourceProvider.fire(e),(0,r.toDisposable)((()=>{this.remoteSourceProviders.delete(e),this._onDidRemoveRemoteSourceProvider.fire(e)}))}getRemoteProviders(){return[...this.remoteSourceProviders.values()]}}},698:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var r,s=arguments.length,n=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(n=(s<3?r(n):s>3?r(t,o,n):r(t,o))||n);return s>3&&n&&Object.defineProperty(t,o,n),n};Object.defineProperty(t,"__esModule",{value:!0}),t.getRemoteSourceActions=async function(e,t){const o=e.getRemoteProviders(),i=[];for(const e of o){const o=await(e.getRemoteSourceActions?.(t));o?.length&&i.push(...o)}return i},t.pickRemoteSource=async function(e,t={}){const o=r.window.createQuickPick();if(o.title=t.title,t.providerName){const o=e.getRemoteProviders().filter((e=>e.name===t.providerName))[0];if(o)return await u(o,t)}const i=e.getRemoteProviders().map((e=>({label:(e.icon?`$(${e.icon}) `:"")+(t.providerLabel?t.providerLabel(e):e.name),alwaysShow:!0,provider:e}))),s=[];if(t.showRecentSources)for(const{provider:e}of i){const t=(await(e.getRecentRemoteSources?.())??[]).map((e=>({...e,label:(e.icon?`$(${e.icon}) `:"")+e.name,url:"string"==typeof e.url?e.url:e.url[0]})));s.push(...t)}const c=[{kind:r.QuickPickItemKind.Separator,label:r.l10n.t("remote sources")},...i,{kind:r.QuickPickItemKind.Separator,label:r.l10n.t("recently opened")},...s.sort(((e,t)=>t.timestamp-e.timestamp))];o.placeholder=t.placeholder??(0===i.length?r.l10n.t("Provide repository URL"):r.l10n.t("Provide repository URL or pick a repository source."));const l=e=>{if(e){const i=("string"==typeof t.urlLabel?t.urlLabel:t.urlLabel?.(e))??r.l10n.t("URL");o.items=[{label:i,description:e,alwaysShow:!0,url:e},...c]}else o.items=c};o.onDidChangeValue(l),l();const a=await n(o);if(a){if(a.url)return a.url;if(a.provider)return await u(a.provider,t)}};const r=o(398),s=o(91);async function n(e){const t=[],o=await new Promise((o=>{t.push(e.onDidAccept((()=>o(e.selectedItems[0]))),e.onDidHide((()=>o(void 0)))),e.show()}));return e.hide(),t.forEach((e=>e.dispose())),o}class c{constructor(e){this.provider=e,this.disposables=[],this.isDisposed=!1}dispose(){this.disposables.forEach((e=>e.dispose())),this.disposables=[],this.quickpick=void 0,this.isDisposed=!0}ensureQuickPick(){this.quickpick||(this.quickpick=r.window.createQuickPick(),this.disposables.push(this.quickpick),this.quickpick.ignoreFocusOut=!0,this.disposables.push(this.quickpick.onDidHide((()=>this.dispose()))),this.provider.supportsQuery?(this.quickpick.placeholder=this.provider.placeholder??r.l10n.t("Repository name (type to search)"),this.disposables.push(this.quickpick.onDidChangeValue(this.onDidChangeValue,this))):this.quickpick.placeholder=this.provider.placeholder??r.l10n.t("Repository name"))}onDidChangeValue(){this.query()}async query(){try{if(this.isDisposed)return;this.ensureQuickPick(),this.quickpick.busy=!0,this.quickpick.show();const e=await this.provider.getRemoteSources(this.quickpick?.value)||[];if(this.isDisposed)return;0===e.length?this.quickpick.items=[{label:r.l10n.t("No remote repositories found."),alwaysShow:!0}]:this.quickpick.items=e.map((e=>({label:e.icon?`$(${e.icon}) ${e.name}`:e.name,description:e.description||("string"==typeof e.url?e.url:e.url[0]),detail:e.detail,remoteSource:e,alwaysShow:!0})))}catch(e){this.quickpick.items=[{label:r.l10n.t("{0} Error: {1}","$(error)",e.message),alwaysShow:!0}],console.error(e)}finally{this.isDisposed||(this.quickpick.busy=!1)}}async pick(){if(await this.query(),this.isDisposed)return;const e=await n(this.quickpick);return e?.remoteSource}}async function u(e,t={}){const o=new c(e),i=await o.pick();let s;if(o.dispose(),i&&("string"==typeof i.url?s=i.url:i.url.length>0&&(s=await r.window.showQuickPick(i.url,{ignoreFocusOut:!0,placeHolder:r.l10n.t("Choose a URL to clone from.")}))),!s||!t.branch)return s;if(!e.getBranches)return{url:s};const n=await e.getBranches(s);if(!n)return{url:s};const u=await r.window.showQuickPick(n,{placeHolder:r.l10n.t("Branch name")});return u?{url:s,branch:u}:{url:s}}i([(0,s.debounce)(300)],c.prototype,"onDidChangeValue",null),i([s.throttle],c.prototype,"query",null)},813:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.Versions=void 0,t.toDisposable=function(e){return{dispose:e}},t.done=function(e){return e.then((()=>{}))},function(e){function t(e,t,o,i){return{major:"string"==typeof e?parseInt(e,10):e,minor:"string"==typeof t?parseInt(t,10):t,patch:null==o?0:"string"==typeof o?parseInt(o,10):o,pre:i}}function o(e){const[o,i]=e.split("-"),[r,s,n]=o.split(".");return t(r,s,n,i)}e.compare=function(e,t){return"string"==typeof e&&(e=o(e)),"string"==typeof t&&(t=o(t)),e.major>t.major?1:e.major<t.major?-1:e.minor>t.minor?1:e.minor<t.minor?-1:e.patch>t.patch?1:e.patch<t.patch?-1:void 0===e.pre&&void 0!==t.pre?1:void 0!==e.pre&&void 0===t.pre?-1:void 0!==e.pre&&void 0!==t.pre?e.pre.localeCompare(t.pre):0},e.from=t,e.fromString=o}(o||(t.Versions=o={}))},398:e=>{e.exports=require("vscode")}},t={};function o(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,o),s.exports}var i={};(()=>{var e=i;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=function(e){const o=new r.GitBaseExtensionImpl(new s.Model);return e.subscriptions.push((0,t.registerAPICommands)(o)),o};const t=o(635),r=o(915),s=o(484)})();var r=exports;for(var s in i)r[s]=i[s];i.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})})();
//# sourceMappingURL=https://main.vscode-cdn.net/sourcemaps/ea1445cc7016315d0f5728f8e8b12a45dc0a7286/extensions/git-base/dist/extension.js.map
window.__require=function t(e,i,r){function s(u,n){if(!i[u]){if(!e[u]){var c=u.split("/");if(c=c[c.length-1],!e[c]){var p="function"==typeof __require&&__require;if(!n&&p)return p(c,!0);if(o)return o(c,!0);throw new Error("Cannot find module '"+u+"'")}}var _=i[u]={exports:{}};e[u][0].call(_.exports,function(t){return s(e[u][1][t]||t)},_,_.exports,t,e,i,r)}return i[u].exports}for(var o="function"==typeof __require&&__require,u=0;u<r.length;u++)s(r[u]);return s}({Select:[function(t,e,i){"use strict";cc._RF.push(e,"2aa4fTnG55J4KRK7otvOBtK","Select"),cc.Class({extends:cc.Component,properties:{textures:[cc.SpriteFrame],updateTime:.05,_selectNum:0,_timer:0,_isStop:!1,_sprite:{default:null,type:cc.Sprite},_audioSource:{default:null,type:cc.AudioSource}},start:function(){this._sprite=this.node.getComponent(cc.Sprite),this._audioSource=this.node.getComponent(cc.AudioSource)},keyDown:function(){this._isStop=!this._isStop,this._isStop&&0==this._selectNum?this._audioSource.play():this._audioSource.stop()},update:function(t){this._isStop||(this._timer+=t,this._timer>=this.updateTime&&(this._timer=0,this._selectNum=(this._selectNum+1)%this.textures.length,this._sprite&&(this._sprite.spriteFrame=this.textures[this._selectNum])))}}),cc._RF.pop()},{}]},{},["Select"]);
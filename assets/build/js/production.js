!function (name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports['browser'] = definition()
  else if (typeof define == 'function' && define.amd) define(definition)
  else this[name] = definition()
}('bowser', function () {
  /**
    * See useragents.js for examples of navigator.userAgent
    */

  var t = true

  function detect(ua) {

    function getFirstMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[1]) || '';
    }

    function getSecondMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[2]) || '';
    }

    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
      , likeAndroid = /like android/i.test(ua)
      , android = !likeAndroid && /android/i.test(ua)
      , chromeBook = /CrOS/.test(ua)
      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
      , tablet = /tablet/i.test(ua)
      , mobile = !tablet && /[^-]mobi/i.test(ua)
      , result

    if (/opera|opr/i.test(ua)) {
      result = {
        name: 'Opera'
      , opera: t
      , version: versionIdentifier || getFirstMatch(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/yabrowser/i.test(ua)) {
      result = {
        name: 'Yandex Browser'
      , yandexbrowser: t
      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/windows phone/i.test(ua)) {
      result = {
        name: 'Windows Phone'
      , windowsphone: t
      }
      if (edgeVersion) {
        result.msedge = t
        result.version = edgeVersion
      }
      else {
        result.msie = t
        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer'
      , msie: t
      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      }
    } else if (chromeBook) {
      result = {
        name: 'Chrome'
      , chromeBook: t
      , chrome: t
      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    } else if (/chrome.+? edge/i.test(ua)) {
      result = {
        name: 'Microsoft Edge'
      , msedge: t
      , version: edgeVersion
      }
    }
    else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome'
      , chrome: t
      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    }
    else if (iosdevice) {
      result = {
        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
      }
      // WTF: version is not part of user agent in web apps
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if (/sailfish/i.test(ua)) {
      result = {
        name: 'Sailfish'
      , sailfish: t
      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/seamonkey\//i.test(ua)) {
      result = {
        name: 'SeaMonkey'
      , seamonkey: t
      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/firefox|iceweasel/i.test(ua)) {
      result = {
        name: 'Firefox'
      , firefox: t
      , version: getFirstMatch(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
      }
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos = t
      }
    }
    else if (/silk/i.test(ua)) {
      result =  {
        name: 'Amazon Silk'
      , silk: t
      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
      }
    }
    else if (android) {
      result = {
        name: 'Android'
      , version: versionIdentifier
      }
    }
    else if (/phantom/i.test(ua)) {
      result = {
        name: 'PhantomJS'
      , phantom: t
      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
      result = {
        name: 'BlackBerry'
      , blackberry: t
      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/(web|hpw)os/i.test(ua)) {
      result = {
        name: 'WebOS'
      , webos: t
      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      };
      /touchpad\//i.test(ua) && (result.touchpad = t)
    }
    else if (/bada/i.test(ua)) {
      result = {
        name: 'Bada'
      , bada: t
      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
      };
    }
    else if (/tizen/i.test(ua)) {
      result = {
        name: 'Tizen'
      , tizen: t
      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (/safari/i.test(ua)) {
      result = {
        name: 'Safari'
      , safari: t
      , version: versionIdentifier
      }
    }
    else {
      result = {
        name: getFirstMatch(/^(.*)\/(.*) /),
        version: getSecondMatch(/^(.*)\/(.*) /)
     };
   }

    // set webkit or gecko flag for browsers based on these engines
    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
      result.name = result.name || "Webkit"
      result.webkit = t
      if (!result.version && versionIdentifier) {
        result.version = versionIdentifier
      }
    } else if (!result.opera && /gecko\//i.test(ua)) {
      result.name = result.name || "Gecko"
      result.gecko = t
      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
    }

    // set OS flags for platforms that have multiple browsers
    if (!result.msedge && (android || result.silk)) {
      result.android = t
    } else if (iosdevice) {
      result[iosdevice] = t
      result.ios = t
    }

    // OS version extraction
    var osVersion = '';
    if (result.windowsphone) {
      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (iosdevice) {
      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (result.webos) {
      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
    } else if (result.blackberry) {
      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    } else if (result.bada) {
      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
    } else if (result.tizen) {
      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
    }
    if (osVersion) {
      result.osversion = osVersion;
    }

    // device type extraction
    var osMajorVersion = osVersion.split('.')[0];
    if (tablet || iosdevice == 'ipad' || (android && (osMajorVersion == 3 || (osMajorVersion == 4 && !mobile))) || result.silk) {
      result.tablet = t
    } else if (mobile || iosdevice == 'iphone' || iosdevice == 'ipod' || android || result.blackberry || result.webos || result.bada) {
      result.mobile = t
    }

    // Graded Browser Support
    // http://developer.yahoo.com/yui/articles/gbs
    if (result.msedge ||
        (result.msie && result.version >= 10) ||
        (result.yandexbrowser && result.version >= 15) ||
        (result.chrome && result.version >= 20) ||
        (result.firefox && result.version >= 20.0) ||
        (result.safari && result.version >= 6) ||
        (result.opera && result.version >= 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
        (result.blackberry && result.version >= 10.1)
        ) {
      result.a = t;
    }
    else if ((result.msie && result.version < 10) ||
        (result.chrome && result.version < 20) ||
        (result.firefox && result.version < 20.0) ||
        (result.safari && result.version < 6) ||
        (result.opera && result.version < 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
        ) {
      result.c = t
    } else result.x = t

    return result
  }

  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent : '')

  bowser.test = function (browserList) {
    for (var i = 0; i < browserList.length; ++i) {
      var browserItem = browserList[i];
      if (typeof browserItem=== 'string') {
        if (browserItem in bowser) {
          return true;
        }
      }
    }
    return false;
  }

  /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
  bowser._detect = detect;

  return bowser
});

/*
 * ddpanorama - jQuery plugin version 1.43
 * Copyright (c) Tiny Studio (http://tinystudio.iptime.org/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * Date: 2014/09/17 11:57:29 KST 
 */


(function($) {
	var ddpanoramas = {
		animations : [],
		timerId : -1,
		max_speed : 43000,
		drag_constant : 1.6,
		cursorX : 0,
		cursorY : 0,
		currentTime : (new Date()).getTime()
	}
	// ddpanoramas.timerIdCursor=window.setInterval(function()
	//                                           {
	//                                           }, 1000/10
	//                                           );
	ddpanoramas.timerId = window.setInterval(function() {
		for ( var i = 0; i < ddpanoramas.animations.length; ++i) {
			ddpanoramas.animations[i].update();
		}

	}, 1000 / 30);

	ddpanoramas.mousedown = function(x, y) {
		ddpanoramas.cursorXOld = ddpanoramas.cursorX = x;
		ddpanoramas.cursorYOld = ddpanoramas.cursorY = y;
		ddpanoramas.speedX = 0;
	}

	ddpanoramas.mousemove = function(x, y) {
		ddpanoramas.cursorXOld = ddpanoramas.cursorX;
		ddpanoramas.cursorYOld = ddpanoramas.cursorY;
		ddpanoramas.cursorX = x;
		ddpanoramas.cursorY = y;
		var currentTime = (new Date()).getTime();
		var dt = (currentTime - ddpanoramas.currentTime) / 1000;
		ddpanoramas.currentTime = currentTime;
		ddpanoramas.speedX = (ddpanoramas.cursorX - ddpanoramas.cursorXOld)
				/ dt;
		if (ddpanoramas.speedX > ddpanoramas.max_speed)
			ddpanoramas.speedX = ddpanoramas.max_speed
		if (ddpanoramas.speedX < -ddpanoramas.max_speed)
			ddpanoramas.speedX = -ddpanoramas.max_speed

	}
    
	ddpanoramas.event_prefix="dd";
	
	$(document).bind("mousemove", function(event) {
		ddpanoramas.mousemove(event.pageX, event.pageY);

	});

	$(document).bind(
			"touchmove",
			function(event) {
				ddpanoramas.mousemove(event.originalEvent.touches[0].pageX,
						event.originalEvent.touches[0].pageY);
			});

	$(document).bind(
			"touchstart",
			function(event) {
				ddpanoramas.mousedown(event.originalEvent.touches[0].pageX,
						event.originalEvent.touches[0].pageY);
			});
	$(document).bind("mousedown", function(event) {
		ddpanoramas.mousedown(event.pageX, event.pageY);
	});

	$.fn.ddpanorama = function(params) {//ddpanorama
		//clone input parameters to prevent not intended side effects eg. overwritting user parameters
		params = $.extend( true, {}, $.fn.ddpanorama.defaults, params );
		var hasSizeParameter=false;
		for (var key in params)
		{
			//console.log("key:"+key);
			if (key=="width" || key=="height" || key=="ratio")
			{
				hasSizeParameter=true;
				break;
			}
		}
		return this.each(function() {
					if ($(this).data('ddpanorama') != null)
					{
						if (params != null)
						{
							var o=$(this).data('ddpanorama');
							if (hasSizeParameter)
							{
								if (o.params.hasOwnProperty("width"))
								{
									delete o.params.width;
									//console.log("remove width");
								}
								if (o.params.hasOwnProperty("height"))
								{
									delete o.params.height;
									//console.log("remove height");
								}
								if (o.params.hasOwnProperty("ratio"))
								{
									delete o.params.ratio;
									//console.log("remove ratio");
								}
								//console.log("hasSizeParameter");
							}
							for (var key in params)
							{
								o.params[key]=params[key];
								//console.log("copying key "+key);
							}
							//check if one of the size parameter is specified
							//if this is the case, we need to drop old size parameters
							
							if (o.params.minSpeed != 0)
							{
								o.add();
							}
							o.bindevent();
							o.resize();
						}
						
						return;
					}
						 
					var img = $(this);//document.createElement("img");
					
					var canvas = document.createElement("canvas");
					var o = {
						img : img,
						canvas : canvas,
						mousedown : false,
						draw_scale : 1.0
					};
					$(this).css('display', 'none');
					
					o.params = params;
					if (o.params == null)
						o.params = {};
					//console.log("o.params:" + o.params);
					o.notifyStartMove=function()
					{
						if (this.startmovecalled != true)
						{
							this.startmovecalled=true;
							var scrollX = $(this.canvas).prop("scrollX");
							var width = $(this.img).get()[0].naturalWidth;
							$(this.img).trigger(
									jQuery.Event(ddpanoramas.event_prefix+"startmove", {
										canvas : this.canvas,
										scrollX : scrollX,
										width : width
									}));
						}
					}

					o.add = function() {
						$(canvas).prop("updateTime", (new Date()).getTime());
						var index = ddpanoramas.animations.indexOf(this);
						if (index < 0) {
							ddpanoramas.animations.push(this);
							this.notifyStartMove();
						}
					}
					o.remove = function() {
						var index = ddpanoramas.animations.indexOf(this);
						if (index >= 0)
						{
							var scrollX = $(this.canvas).prop("scrollX");
							var width = $(this.img).get()[0].naturalWidth;
							
							$(this.img).trigger(
									jQuery.Event(ddpanoramas.event_prefix+"stopmove", {
										canvas : this.canvas,
										scrollX : scrollX,
										width : width
									}));
							this.startmovecalled=false;
							ddpanoramas.animations.splice(index, 1);
						}
					}
					o.setScrollX = function(scrollX) {
						//console.log("setScrollX:"+scrollX);
                        var width = $(this.img).get()[0].naturalWidth;
						//console.log("setScrollX - width:"+width);
                        if (isNaN(width) == false && width != 0)
                        {
                            var scrollXScale=scrollX / this.draw_scale;
                            if (this.params.loop)
                            {
                                while (scrollXScale < -width)
                                    scrollXScale += width;
                                while (scrollXScale >= width)
                                    scrollXScale -= width;
                                    
                                if (Math.abs(scrollXScale + width) < Math.abs(scrollXScale))
                                {
                                	scrollXScale += width;
                                }
                                if (Math.abs(scrollXScale - width) < Math.abs(scrollXScale))
                                {
                                	scrollXScale -= width;
                                }
                                
                            }     
                            else
                            {
                                 if (scrollXScale > this.bounceBorder) scrollXScale = this.bounceBorder;
                                 if (scrollXScale < this.widthScaled-width-this.bounceBorder) scrollXScale = this.widthScaled-width-this.bounceBorder;
                            }
                            scrollX=scrollXScale * this.draw_scale;
                            $(this.canvas).prop("scrollX", scrollX);
                        }
//                         console.log("scrollX:"+scrollX+",width:"+width);
						return scrollX;
					}
					o.scrollTo = function(pageX) {

						var mousedownScrollX = $(this.canvas).prop("mousedownScrollX");
						if (mousedownScrollX == null) return;
						var width = $(img).get()[0].naturalWidth;
						this.setScrollX(mousedownScrollX + pageX - $(this.canvas).prop("mousedownPageX"));
					}

					o.update = function() {
						var currentTime = (new Date()).getTime();
						var oldTime = $(this.canvas).prop("updateTime");
						if (oldTime == null)
							oldTime = currentTime;
						$(this.canvas).prop("updateTime", currentTime);
						var dt = (currentTime - oldTime) / 1000;
                        
						var scrollX = $(this.canvas).prop("scrollX");
                        
						var speedX = $(this.canvas).prop("speedX");
						var ctx = this.canvas.getContext('2d');
						var width = $(this.img).get()[0].naturalWidth;//width();
                        scrollX += dt * speedX;
                        scrollX=this.setScrollX(scrollX);
                        
                        var bounceForce=0;
                        if (this.params.loop==false)
                        {
                             var scrollXScale=scrollX / this.draw_scale;
                             if (this.bounceActive)
                             {
                                 if (scrollXScale > 0)
                                 {
                                     if (speedX > 0)
                                     {
                                         speedX=0;
                                     }
                                     bounceForce=-scrollXScale*this.params.bounceSpringConst;
                                }
                                else if (scrollXScale < this.widthScaled-width)
                                {
                                    if (speedX < 0)
                                    {
                                        speedX=0;
                                    }
                                    bounceForce=(this.widthScaled-width-scrollXScale) * this.params.bounceSpringConst;
                                 }
                             }
                         }
                         
						
						//linear drag
                         
						
                         
                         
                         //out of bound speed decay
                         if (this.params.loop == false && this.params.bounce)
                         {
                            //to quickly approach bounce edge line
                             var dt_force=dt*2.5;
                             if (scrollXScale >= 0)
                             {
                                 var s=scrollXScale;
                                 var r=s/this.bounceBorder;
                                
                                 if (s >= 0)
                                 {
                                     if (speedX < 0)
                                     {
                                        speedX *= r;
                                     
                                     }
                                 }
                         
                                 speedX += bounceForce * dt_force;
                             }
                             
                             else if (this.widthScaled-width-scrollXScale >= 0)
                             {
                                 var s=this.widthScaled-width - scrollXScale;
                                 var r=s/this.bounceBorder;
                                
                                 if (s >= 0)
                                 {
                                     if (speedX > 0)
                                     {
                                        speedX *= r;
                                     
                                     }
                                 }
                                 speedX += bounceForce * dt_force;
                             
                             }
                         }
                         speedX += ddpanoramas.drag_constant * (this.params.minSpeed-speedX) * dt;
						$(this.canvas).prop("speedX", speedX);
						

						this.redraw();
						if (Math.abs(speedX) < 1 && this.params.minSpeed == 0 && Math.abs(bounceForce) < 3) {
							this.stop();
							this.remove();
						}
					}
					o.stop = function() {
						$(this.canvas).prop("speedX", 0);
						//console.log("o.stop");
					}

					o.redraw = function() {
						var width = $(this.img).get()[0].naturalWidth;//width();
						var ctx = this.canvas.getContext('2d');
						var scrollX = $(this.canvas).prop("scrollX");

                         
                        //console.log("scrollX:"+scrollX);
						//console.log("this.draw_scale:"+this.draw_scale);
                         var speedX = $(this.canvas).prop("speedX");
                         
						
						scrollX /= this.draw_scale;
						var loaded=false;
						if (isNaN(width) == false && width != 0) 
                         {
                          $(this.canvas).prop("forceX", 0);
                             var imgDOM = this.img.get()[0];
						 //console.log("this.draw_scale:"+this.draw_scale);
                             ctx.setTransform(this.draw_scale, 0, 0, this.draw_scale, 0, 0);
                         
                            if (this.params.loop)
                            {
                                ctx.drawImage(imgDOM, (scrollX), 0);
                                ctx.drawImage(imgDOM, (scrollX + width), 0);
                                ctx.drawImage(imgDOM, (scrollX - width), 0);
								//console.log("imgDOM(1):"+imgDOM);
								//console.log("scrollX(1):"+scrollX);
								//console.log("scrollX + width(1):"+scrollX + width);
                             }
                             else
                             {
                                 
                                 ctx.drawImage(imgDOM, (scrollX), 0);
                                 ctx.fillStyle=this.params.bounceEdgeColor;
                                 ctx.fillRect(0,0,scrollX, this.canvas.height/this.draw_scale);
                                 ctx.fillRect(width + scrollX ,0,this.bounceBorder, this.canvas.height/this.draw_scale);
								//console.log("scrollX(2):"+scrollX);
								//console.log("scrollX + width(2):"+scrollX + width);
						 
                             }
                            // $(this.canvas).prop("scrollX",scrollX * this.draw_scale ); 
							loaded=true;
						} else {
							ctx.setTransform(1, 0, 0, 1, 0, 0);
							ctx.fillStyle="#000000";
							ctx.fillRect(0,0,this.canvas.width, this.canvas.height);
						}

						$(this.img).trigger(
								jQuery.Event(ddpanoramas.event_prefix+"redraw", {
									canvas : this.canvas,
									scrollX : scrollX,
									width : width,
									speed : $(this.canvas).prop("speedX") / ddpanoramas.max_speed,
									loaded : loaded
								}));
					}

					o.onmousedown = function(pageX) {
//						console.log("mousedown");
						var o = this;
						var canvas = this.canvas;
						this.mousedown = true;
						var scrollX = $(this.canvas).prop("scrollX");
						$(canvas).prop("speedX", 0);
						$(canvas).focus();
						this.remove();
						this.stop();
						$(canvas).prop("mousedownPageX", pageX);
						$(canvas).prop("mousedownScrollX", $(canvas).prop("scrollX"));
						$(canvas).prop("updateTime", (new Date()).getTime());
                        this.old_onselectstart=document.onselectstart;
						document.onselectstart=function(){return false;};
						var scrollX = $(this.canvas).prop("scrollX");
						var width = $(this.img).get()[0].naturalWidth;
						
						$(this.img).trigger(
								jQuery.Event(ddpanoramas.event_prefix+"mousedown", {
									canvas : this.canvas,
									scrollX : scrollX,
									width : width
								}));
						 
						this.notifyStartMove();
					}

					o.resize = function() {
						var img = this.img;
						var canvas = this.canvas;
                        var naturalWidth=img.get()[0].naturalWidth;
                        var naturalHeight=img.get()[0].naturalHeight;
                        var width = naturalWidth;
						var height = naturalHeight; //height();
						console.log("resize.naturalWidth:"+naturalWidth);
						console.log("resize.naturalHeight:"+naturalHeight);
						if (this.params.hasOwnProperty("height")) 
                        {
							//console.log("height:"+this.params.height);
							height = this.params.height;
						}
                         
						if (this.params.hasOwnProperty("ratio")) 
                        {
							//console.log("ratio:"+this.params.ratio);
                            if (this.params.hasOwnProperty("width"))
                            {
                                width = this.params.width;
                                height = width * this.params.ratio;
                            }
                            else
                            {
                                width = height / this.params.ratio;
                            }
						} 
                        else if (this.params.hasOwnProperty("width")) 
                        {
							width = this.params.width;
						}
						 //console.log("width:"+width);
						if (naturalHeight != 0)
							this.draw_scale = height / naturalHeight;
						else
							this.draw_scale = 1.0;
                        
						if (this.params.hasOwnProperty("startPos"))
                        {
                         //console.log("naturalWidth:"+naturalWidth);
                         //console.log("width:"+width);
                            this.setScrollX( naturalWidth * -this.params.startPos * this.draw_scale + width);
                        }
						
						$(canvas).attr('width', width);
						$(canvas).attr('height', height);
                        this.widthScaled = this.canvas.width / this.draw_scale;
                        this.bounceActive=this.params.bounce;
                        if (this.params.bounce)
                        {
                             var bounceEdge=this.params.bounceEdge;
                             this.bounceBorder=this.canvas.width * bounceEdge / this.draw_scale;
                             if ( this.bounceBorder < 1)
                             {
                                this.bounceActive=false;
                             }
                        }
                        else
                        {
                             this.bounceBorder=0;
                        }
						//console.log("this.bounceBorder:"+this.bounceBorder);
						$(img).trigger(jQuery.Event(ddpanoramas.event_prefix+"resize", {canvas : canvas, width:naturalWidth}));
						//console.log("this:"+this);
						//calling immediately after size event is sometimes problematic in chrome
						//this.add();
						if (this.loaded) this.redraw();
					}
						 

					$(this).data('ddpanorama', o);
					$(canvas).data('ddpanorama', o);
					$(canvas).prop("scrollX", 0);
					$(canvas).prop("speedX", 0);

					var mouseup = function(event) {
						var o = $(this).data('ddpanorama');
						if (o.mousedown == false)
							return;
						o.mousedown = false;
						o.add();
						$(canvas).prop("updateTime", (new Date()).getTime());
						$(canvas).prop("speedX", ddpanoramas.speedX);
						$(canvas).prop("mousedownScrollX", null);
                        document.onselectstart=this.old_onselectstart;
						//console.log("mouseup:speedX:"+speedX);
						var scrollX = $(canvas).prop("scrollX");
						var width = $(o.img).get()[0].naturalWidth;
						
						$(o.img).trigger(
								jQuery.Event(ddpanoramas.event_prefix+"mouseup", {
									canvas : canvas,
									scrollX : scrollX,
									width : width
								}));
						 
					};
					
					o.bindevent = function()
					{
						var o = this;
						var canvas = this.canvas;
						$(canvas).unbind("mousedown");
						$(canvas).unbind("mouseup");
						$(canvas).unbind("mouseupoutside")
						$(canvas).unbind("mousemove");
						$(canvas).unbind("contextmenu");
						$(canvas).unbind("touchstart");
						$(canvas).unbind("touchmove");
						$(canvas).unbind("touchend");
						if (this.params.interactive)
						{
							$(canvas).bind("mousedown", function(event) {
								var o = $(this).data('ddpanorama');
								o.onmousedown(event.pageX);
							});
						 
							$(canvas).bind("mouseup", mouseup)
							$(canvas).bind("mouseupoutside", mouseup);
							 //$(canvas).bind("onselectstart", function (){return false;});
							 
							$(canvas).bind("mousemove", function(event) {
								var pageX = event.pageX;
								var o = $(this).data('ddpanorama');
								if (o.mousedown == false)
									return;
								o.scrollTo(pageX);
								o.redraw();
							});
							$(canvas).bind("contextmenu", function(event) {
								event.preventDefault();
								return false;
							});
							$(canvas).bind("touchstart", function(event) {
								var o = $(this).data('ddpanorama');
								o.onmousedown(event.originalEvent.touches[0].pageX);
								
							});
							$(canvas).bind("touchmove", function(event) {
								//document.write();
								//console.log("touchmove");
								event.preventDefault();
								var o = $(this).data('ddpanorama');
								if (o.mousedown == false)
									return false;
								var pageX = event.originalEvent.touches[0].pageX;
								o.scrollTo(pageX);
								o.redraw();
								return true;
							});
							$(canvas).bind("touchend", mouseup);
						}
						else
						{
							var mouseupdummy=function(event){
											if (o.mousedown == false) return;
											o.mousedown = false;
											document.onselectstart=this.old_onselectstart;
										}
							$(canvas).bind("mousedown",function(event){
											this.old_onselectstart=document.onselectstart;
											document.onselectstart=function(){return false;};
											o.mousedown=true;
										});
							$(canvas).bind("mouseup",mouseupdummy);
							$(canvas).bind("mouseupoutside",mouseupdummy)
							
						}
					}
					
						 

                    
                    o.bindevent();
					//o.resize();
					$(canvas).addClass("ddpanorama");
                    o.loaded=false;
                    
                    
						 
					$(this).imagesLoaded(function(){
						var width = $(img).get()[0].naturalWidth;
						img.after(canvas);
						$(img).trigger(jQuery.Event(ddpanoramas.event_prefix+"init", {canvas : canvas, width:width}));
                        o.resize();
						o.redraw();
						o.loaded=true;
                         if (params.minSpeed != 0)
                         {
                                         o.add();
                         }
                                         
						
						});
				});
	}//ddpanorama;
	
	$.fn.ddpanorama.defaults = {
		interactive:true,
		minSpeed:0,
		loop:true,
		bounce:true,
		bounceEdge:0.8,
		bounceEdgeColor:"#000000",
		bounceSpringConst:15
	};
})(jQuery);

/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */


/*!
 * EventEmitter v4.2.6 - git.io/ee
 * Oliver Caldwell
 * MIT license
 * @preserve
 */

(function () {
	

	/**
	 * Class for managing events.
	 * Can be extended to provide event functionality in other classes.
	 *
	 * @class EventEmitter Manages event registering and emitting.
	 */
	function EventEmitter() {}

	// Shortcuts to improve speed and size
	var proto = EventEmitter.prototype;
	var exports = this;
	var originalGlobalValue = exports.EventEmitter;

	/**
	 * Finds the index of the listener for the event in it's storage array.
	 *
	 * @param {Function[]} listeners Array of listeners to search through.
	 * @param {Function} listener Method to look for.
	 * @return {Number} Index of the specified listener, -1 if not found
	 * @api private
	 */
	function indexOfListener(listeners, listener) {
		var i = listeners.length;
		while (i--) {
			if (listeners[i].listener === listener) {
				return i;
			}
		}

		return -1;
	}

	/**
	 * Alias a method while keeping the context correct, to allow for overwriting of target method.
	 *
	 * @param {String} name The name of the target method.
	 * @return {Function} The aliased method
	 * @api private
	 */
	function alias(name) {
		return function aliasClosure() {
			return this[name].apply(this, arguments);
		};
	}

	/**
	 * Returns the listener array for the specified event.
	 * Will initialise the event object and listener arrays if required.
	 * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
	 * Each property in the object response is an array of listener functions.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Function[]|Object} All listener functions for the event.
	 */
	proto.getListeners = function getListeners(evt) {
		var events = this._getEvents();
		var response;
		var key;

		// Return a concatenated array of all matching events if
		// the selector is a regular expression.
		if (typeof evt === 'object') {
			response = {};
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					response[key] = events[key];
				}
			}
		}
		else {
			response = events[evt] || (events[evt] = []);
		}

		return response;
	};

	/**
	 * Takes a list of listener objects and flattens it into a list of listener functions.
	 *
	 * @param {Object[]} listeners Raw listener objects.
	 * @return {Function[]} Just the listener functions.
	 */
	proto.flattenListeners = function flattenListeners(listeners) {
		var flatListeners = [];
		var i;

		for (i = 0; i < listeners.length; i += 1) {
			flatListeners.push(listeners[i].listener);
		}

		return flatListeners;
	};

	/**
	 * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
	 *
	 * @param {String|RegExp} evt Name of the event to return the listeners from.
	 * @return {Object} All listener functions for an event in an object.
	 */
	proto.getListenersAsObject = function getListenersAsObject(evt) {
		var listeners = this.getListeners(evt);
		var response;

		if (listeners instanceof Array) {
			response = {};
			response[evt] = listeners;
		}

		return response || listeners;
	};

	/**
	 * Adds a listener function to the specified event.
	 * The listener will not be added if it is a duplicate.
	 * If the listener returns true then it will be removed after it is called.
	 * If you pass a regular expression as the event name then the listener will be added to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListener = function addListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var listenerIsWrapped = typeof listener === 'object';
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
				listeners[key].push(listenerIsWrapped ? listener : {
					listener: listener,
					once: false
				});
			}
		}

		return this;
	};

	/**
	 * Alias of addListener
	 */
	proto.on = alias('addListener');

	/**
	 * Semi-alias of addListener. It will add a listener that will be
	 * automatically removed after it's first execution.
	 *
	 * @param {String|RegExp} evt Name of the event to attach the listener to.
	 * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addOnceListener = function addOnceListener(evt, listener) {
		return this.addListener(evt, {
			listener: listener,
			once: true
		});
	};

	/**
	 * Alias of addOnceListener.
	 */
	proto.once = alias('addOnceListener');

	/**
	 * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
	 * You need to tell it what event names should be matched by a regex.
	 *
	 * @param {String} evt Name of the event to create.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvent = function defineEvent(evt) {
		this.getListeners(evt);
		return this;
	};

	/**
	 * Uses defineEvent to define multiple events.
	 *
	 * @param {String[]} evts An array of event names to define.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.defineEvents = function defineEvents(evts) {
		for (var i = 0; i < evts.length; i += 1) {
			this.defineEvent(evts[i]);
		}
		return this;
	};

	/**
	 * Removes a listener function from the specified event.
	 * When passed a regular expression as the event name, it will remove the listener from all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to remove the listener from.
	 * @param {Function} listener Method to remove from the event.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListener = function removeListener(evt, listener) {
		var listeners = this.getListenersAsObject(evt);
		var index;
		var key;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				index = indexOfListener(listeners[key], listener);

				if (index !== -1) {
					listeners[key].splice(index, 1);
				}
			}
		}

		return this;
	};

	/**
	 * Alias of removeListener
	 */
	proto.off = alias('removeListener');

	/**
	 * Adds listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
	 * You can also pass it a regular expression to add the array of listeners to all events that match it.
	 * Yeah, this function does quite a bit. That's probably a bad thing.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.addListeners = function addListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(false, evt, listeners);
	};

	/**
	 * Removes listeners in bulk using the manipulateListeners method.
	 * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be removed.
	 * You can also pass it a regular expression to remove the listeners from all events that match it.
	 *
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeListeners = function removeListeners(evt, listeners) {
		// Pass through to manipulateListeners
		return this.manipulateListeners(true, evt, listeners);
	};

	/**
	 * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
	 * The first argument will determine if the listeners are removed (true) or added (false).
	 * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
	 * You can also pass it an event name and an array of listeners to be added/removed.
	 * You can also pass it a regular expression to manipulate the listeners of all events that match it.
	 *
	 * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
	 * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
	 * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
		var i;
		var value;
		var single = remove ? this.removeListener : this.addListener;
		var multiple = remove ? this.removeListeners : this.addListeners;

		// If evt is an object then pass each of it's properties to this method
		if (typeof evt === 'object' && !(evt instanceof RegExp)) {
			for (i in evt) {
				if (evt.hasOwnProperty(i) && (value = evt[i])) {
					// Pass the single listener straight through to the singular method
					if (typeof value === 'function') {
						single.call(this, i, value);
					}
					else {
						// Otherwise pass back to the multiple function
						multiple.call(this, i, value);
					}
				}
			}
		}
		else {
			// So evt must be a string
			// And listeners must be an array of listeners
			// Loop over it and pass each one to the multiple method
			i = listeners.length;
			while (i--) {
				single.call(this, evt, listeners[i]);
			}
		}

		return this;
	};

	/**
	 * Removes all listeners from a specified event.
	 * If you do not specify an event then all listeners will be removed.
	 * That means every event will be emptied.
	 * You can also pass a regex to remove all events that match it.
	 *
	 * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.removeEvent = function removeEvent(evt) {
		var type = typeof evt;
		var events = this._getEvents();
		var key;

		// Remove different things depending on the state of evt
		if (type === 'string') {
			// Remove all listeners for the specified event
			delete events[evt];
		}
		else if (type === 'object') {
			// Remove all events matching the regex.
			for (key in events) {
				if (events.hasOwnProperty(key) && evt.test(key)) {
					delete events[key];
				}
			}
		}
		else {
			// Remove all listeners in all events
			delete this._events;
		}

		return this;
	};

	/**
	 * Alias of removeEvent.
	 *
	 * Added to mirror the node API.
	 */
	proto.removeAllListeners = alias('removeEvent');

	/**
	 * Emits an event of your choice.
	 * When emitted, every listener attached to that event will be executed.
	 * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
	 * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
	 * So they will not arrive within the array on the other side, they will be separate.
	 * You can also pass a regular expression to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {Array} [args] Optional array of arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emitEvent = function emitEvent(evt, args) {
		var listeners = this.getListenersAsObject(evt);
		var listener;
		var i;
		var key;
		var response;

		for (key in listeners) {
			if (listeners.hasOwnProperty(key)) {
				i = listeners[key].length;

				while (i--) {
					// If the listener returns true then it shall be removed from the event
					// The function is executed either with a basic call or an apply if there is an args array
					listener = listeners[key][i];

					if (listener.once === true) {
						this.removeListener(evt, listener.listener);
					}

					response = listener.listener.apply(this, args || []);

					if (response === this._getOnceReturnValue()) {
						this.removeListener(evt, listener.listener);
					}
				}
			}
		}

		return this;
	};

	/**
	 * Alias of emitEvent
	 */
	proto.trigger = alias('emitEvent');

	/**
	 * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
	 * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
	 *
	 * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
	 * @param {...*} Optional additional arguments to be passed to each listener.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.emit = function emit(evt) {
		var args = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(evt, args);
	};

	/**
	 * Sets the current value to check against when executing listeners. If a
	 * listeners return value matches the one set here then it will be removed
	 * after execution. This value defaults to true.
	 *
	 * @param {*} value The new value to check for when executing listeners.
	 * @return {Object} Current instance of EventEmitter for chaining.
	 */
	proto.setOnceReturnValue = function setOnceReturnValue(value) {
		this._onceReturnValue = value;
		return this;
	};

	/**
	 * Fetches the current value to check against when executing listeners. If
	 * the listeners return value matches this one then it should be removed
	 * automatically. It will return true by default.
	 *
	 * @return {*|Boolean} The current value to check for or the default, true.
	 * @api private
	 */
	proto._getOnceReturnValue = function _getOnceReturnValue() {
		if (this.hasOwnProperty('_onceReturnValue')) {
			return this._onceReturnValue;
		}
		else {
			return true;
		}
	};

	/**
	 * Fetches the events object and creates one if required.
	 *
	 * @return {Object} The events storage object.
	 * @api private
	 */
	proto._getEvents = function _getEvents() {
		return this._events || (this._events = {});
	};

	/**
	 * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
	 *
	 * @return {Function} Non conflicting EventEmitter class.
	 */
	EventEmitter.noConflict = function noConflict() {
		exports.EventEmitter = originalGlobalValue;
		return EventEmitter;
	};

	// Expose the class either via AMD, CommonJS or the global object
	if (typeof define === 'function' && define.amd) {
		define('eventEmitter/EventEmitter',[],function () {
			return EventEmitter;
		});
	}
	else if (typeof module === 'object' && module.exports){
		module.exports = EventEmitter;
	}
	else {
		this.EventEmitter = EventEmitter;
	}
}.call(this));

/*!
 * eventie v1.0.4
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false */

( function( window ) {



var docElem = document.documentElement;

var bind = function() {};

function getIEEvent( obj ) {
  var event = window.event;
  // add event.target
  event.target = event.target || event.srcElement || obj;
  return event;
}

if ( docElem.addEventListener ) {
  bind = function( obj, type, fn ) {
    obj.addEventListener( type, fn, false );
  };
} else if ( docElem.attachEvent ) {
  bind = function( obj, type, fn ) {
    obj[ type + fn ] = fn.handleEvent ?
      function() {
        var event = getIEEvent( obj );
        fn.handleEvent.call( fn, event );
      } :
      function() {
        var event = getIEEvent( obj );
        fn.call( obj, event );
      };
    obj.attachEvent( "on" + type, obj[ type + fn ] );
  };
}

var unbind = function() {};

if ( docElem.removeEventListener ) {
  unbind = function( obj, type, fn ) {
    obj.removeEventListener( type, fn, false );
  };
} else if ( docElem.detachEvent ) {
  unbind = function( obj, type, fn ) {
    obj.detachEvent( "on" + type, obj[ type + fn ] );
    try {
      delete obj[ type + fn ];
    } catch ( err ) {
      // can't delete window object properties
      obj[ type + fn ] = undefined;
    }
  };
}

var eventie = {
  bind: bind,
  unbind: unbind
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'eventie/eventie',eventie );
} else {
  // browser global
  window.eventie = eventie;
}

})( this );

/*!
 * imagesLoaded v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( [
      'eventEmitter/EventEmitter',
      'eventie/eventie'
    ], function( EventEmitter, eventie ) {
      return factory( window, EventEmitter, eventie );
    });
  } else if ( typeof exports === 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('wolfy87-eventemitter'),
      require('eventie')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EventEmitter,
      window.eventie
    );
  }

})( window,

// --------------------------  factory -------------------------- //

function factory( window, EventEmitter, eventie ) {



var $ = window.jQuery;
var console = window.console;
var hasConsole = typeof console !== 'undefined';

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var objToString = Object.prototype.toString;
function isArray( obj ) {
  return objToString.call( obj ) === '[object Array]';
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( typeof obj.length === 'number' ) {
    // convert nodeList to array
    for ( var i=0, len = obj.length; i < len; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

  // -------------------------- imagesLoaded -------------------------- //

  /**
   * @param {Array, Element, NodeList, String} elem
   * @param {Object or Function} options - if function, use as callback
   * @param {Function} onAlways - callback function
   */
  function ImagesLoaded( elem, options, onAlways ) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if ( !( this instanceof ImagesLoaded ) ) {
      return new ImagesLoaded( elem, options );
    }
    // use elem as selector string
    if ( typeof elem === 'string' ) {
      elem = document.querySelectorAll( elem );
    }

    this.elements = makeArray( elem );
    this.options = extend( {}, this.options );

    if ( typeof options === 'function' ) {
      onAlways = options;
    } else {
      extend( this.options, options );
    }

    if ( onAlways ) {
      this.on( 'always', onAlways );
    }

    this.getImages();

    if ( $ ) {
      // add jQuery Deferred object
      this.jqDeferred = new $.Deferred();
    }

    // HACK check async to allow time to bind listeners
    var _this = this;
    setTimeout( function() {
      _this.check();
    });
  }

  ImagesLoaded.prototype = new EventEmitter();

  ImagesLoaded.prototype.options = {};

  ImagesLoaded.prototype.getImages = function() {
    this.images = [];

    // filter & find items if we have an item selector
    for ( var i=0, len = this.elements.length; i < len; i++ ) {
      var elem = this.elements[i];
      // filter siblings
      if ( elem.nodeName === 'IMG' ) {
        this.addImage( elem );
      }
      // find children
      // no non-element nodes, #143
      var nodeType = elem.nodeType;
      if ( !nodeType || !( nodeType === 1 || nodeType === 9 || nodeType === 11 ) ) {
        continue;
      }
      var childElems = elem.querySelectorAll('img');
      // concat childElems to filterFound array
      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
        var img = childElems[j];
        this.addImage( img );
      }
    }
  };

  /**
   * @param {Image} img
   */
  ImagesLoaded.prototype.addImage = function( img ) {
    var loadingImage = new LoadingImage( img );
    this.images.push( loadingImage );
  };

  ImagesLoaded.prototype.check = function() {
    var _this = this;
    var checkedCount = 0;
    var length = this.images.length;
    this.hasAnyBroken = false;
    // complete if no images
    if ( !length ) {
      this.complete();
      return;
    }

    function onConfirm( image, message ) {
      if ( _this.options.debug && hasConsole ) {
        console.log( 'confirm', image, message );
      }

      _this.progress( image );
      checkedCount++;
      if ( checkedCount === length ) {
        _this.complete();
      }
      return true; // bind once
    }

    for ( var i=0; i < length; i++ ) {
      var loadingImage = this.images[i];
      loadingImage.on( 'confirm', onConfirm );
      loadingImage.check();
    }
  };

  ImagesLoaded.prototype.progress = function( image ) {
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    // HACK - Chrome triggers event before object properties have changed. #83
    var _this = this;
    setTimeout( function() {
      _this.emit( 'progress', _this, image );
      if ( _this.jqDeferred && _this.jqDeferred.notify ) {
        _this.jqDeferred.notify( _this, image );
      }
    });
  };

  ImagesLoaded.prototype.complete = function() {
    var eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    var _this = this;
    // HACK - another setTimeout so that confirm happens after progress
    setTimeout( function() {
      _this.emit( eventName, _this );
      _this.emit( 'always', _this );
      if ( _this.jqDeferred ) {
        var jqMethod = _this.hasAnyBroken ? 'reject' : 'resolve';
        _this.jqDeferred[ jqMethod ]( _this );
      }
    });
  };

  // -------------------------- jquery -------------------------- //

  if ( $ ) {
    $.fn.imagesLoaded = function( options, callback ) {
      var instance = new ImagesLoaded( this, options, callback );
      return instance.jqDeferred.promise( $(this) );
    };
  }


  // --------------------------  -------------------------- //

  function LoadingImage( img ) {
    this.img = img;
  }

  LoadingImage.prototype = new EventEmitter();

  LoadingImage.prototype.check = function() {
    // first check cached any previous images that have same src
    var resource = cache[ this.img.src ] || new Resource( this.img.src );
    if ( resource.isConfirmed ) {
      this.confirm( resource.isLoaded, 'cached was confirmed' );
      return;
    }

    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    if ( this.img.complete && this.img.naturalWidth !== undefined ) {
      // report based on naturalWidth
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      return;
    }

    // If none of the checks above matched, simulate loading on detached element.
    var _this = this;
    resource.on( 'confirm', function( resrc, message ) {
      _this.confirm( resrc.isLoaded, message );
      return true;
    });

    resource.check();
  };

  LoadingImage.prototype.confirm = function( isLoaded, message ) {
    this.isLoaded = isLoaded;
    this.emit( 'confirm', this, message );
  };

  // -------------------------- Resource -------------------------- //

  // Resource checks each src, only once
  // separate class from LoadingImage to prevent memory leaks. See #115

  var cache = {};

  function Resource( src ) {
    this.src = src;
    // add to cache
    cache[ src ] = this;
  }

  Resource.prototype = new EventEmitter();

  Resource.prototype.check = function() {
    // only trigger checking once
    if ( this.isChecked ) {
      return;
    }
    // simulate loading on detached element
    var proxyImage = new Image();
    eventie.bind( proxyImage, 'load', this );
    eventie.bind( proxyImage, 'error', this );
    proxyImage.src = this.src;
    // set flag
    this.isChecked = true;
  };

  // ----- events ----- //

  // trigger specified handler for event type
  Resource.prototype.handleEvent = function( event ) {
    var method = 'on' + event.type;
    if ( this[ method ] ) {
      this[ method ]( event );
    }
  };

  Resource.prototype.onload = function( event ) {
    this.confirm( true, 'onload' );
    this.unbindProxyEvents( event );
  };

  Resource.prototype.onerror = function( event ) {
    this.confirm( false, 'onerror' );
    this.unbindProxyEvents( event );
  };

  // ----- confirm ----- //

  Resource.prototype.confirm = function( isLoaded, message ) {
    this.isConfirmed = true;
    this.isLoaded = isLoaded;
    this.emit( 'confirm', this, message );
  };

  Resource.prototype.unbindProxyEvents = function( event ) {
    eventie.unbind( event.target, 'load', this );
    eventie.unbind( event.target, 'error', this );
  };

  // -----  ----- //

  return ImagesLoaded;

});

/*!
 * jQuery outside events - v1.1 - 3/16/2010
 * http://benalman.com/projects/jquery-outside-events-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery outside events
//
// *Version: 1.1, Last updated: 3/16/2010*
// 
// Project Home - http://benalman.com/projects/jquery-outside-events-plugin/
// GitHub       - http://github.com/cowboy/jquery-outside-events/
// Source       - http://github.com/cowboy/jquery-outside-events/raw/master/jquery.ba-outside-events.js
// (Minified)   - http://github.com/cowboy/jquery-outside-events/raw/master/jquery.ba-outside-events.min.js (0.9kb)
// 
// About: License
// 
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
// 
// clickoutside - http://benalman.com/code/projects/jquery-outside-events/examples/clickoutside/
// dblclickoutside - http://benalman.com/code/projects/jquery-outside-events/examples/dblclickoutside/
// mouseoveroutside - http://benalman.com/code/projects/jquery-outside-events/examples/mouseoveroutside/
// focusoutside - http://benalman.com/code/projects/jquery-outside-events/examples/focusoutside/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-3.6, Safari 3-4, Chrome, Opera 9.6-10.1.
// Unit Tests      - http://benalman.com/code/projects/jquery-outside-events/unit/
// 
// About: Release History
// 
// 1.1 - (3/16/2010) Made "clickoutside" plugin more general, resulting in a
//       whole new plugin with more than a dozen default "outside" events and
//       a method that can be used to add new ones.
// 1.0 - (2/27/2010) Initial release
//
// Topic: Default "outside" events
// 
// Note that each "outside" event is powered by an "originating" event. Only
// when the originating event is triggered on an element outside the element
// to which that outside event is bound will the bound event be triggered.
// 
// Because each outside event is powered by a separate originating event,
// stopping propagation of that originating event will prevent its related
// outside event from triggering.
// 
//  OUTSIDE EVENT     - ORIGINATING EVENT
//  clickoutside      - click
//  dblclickoutside   - dblclick
//  focusoutside      - focusin
//  bluroutside       - focusout
//  mousemoveoutside  - mousemove
//  mousedownoutside  - mousedown
//  mouseupoutside    - mouseup
//  mouseoveroutside  - mouseover
//  mouseoutoutside   - mouseout
//  keydownoutside    - keydown
//  keypressoutside   - keypress
//  keyupoutside      - keyup
//  changeoutside     - change
//  selectoutside     - select
//  submitoutside     - submit

(function($,doc,outside){
  '$:nomunge'; // Used by YUI compressor.
  
  $.map(
    // All these events will get an "outside" event counterpart by default.
    'click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup'.split(' '),
    function( event_name ) { jq_addOutsideEvent( event_name ); }
  );
  
  // The focus and blur events are really focusin and focusout when it comes
  // to delegation, so they are a special case.
  jq_addOutsideEvent( 'focusin',  'focus' + outside );
  jq_addOutsideEvent( 'focusout', 'blur' + outside );
  
  // Method: jQuery.addOutsideEvent
  // 
  // Register a new "outside" event to be with this method. Adding an outside
  // event that already exists will probably blow things up, so check the
  // <Default "outside" events> list before trying to add a new one.
  // 
  // Usage:
  // 
  // > jQuery.addOutsideEvent( event_name [, outside_event_name ] );
  // 
  // Arguments:
  // 
  //  event_name - (String) The name of the originating event that the new
  //    "outside" event will be powered by. This event can be a native or
  //    custom event, as long as it bubbles up the DOM tree.
  //  outside_event_name - (String) An optional name for the new "outside"
  //    event. If omitted, the outside event will be named whatever the
  //    value of `event_name` is plus the "outside" suffix.
  // 
  // Returns:
  // 
  //  Nothing.
  
  $.addOutsideEvent = jq_addOutsideEvent;
  
  function jq_addOutsideEvent( event_name, outside_event_name ) {
    
    // The "outside" event name.
    outside_event_name = outside_event_name || event_name + outside;
    
    // A jQuery object containing all elements to which the "outside" event is
    // bound.
    var elems = $(),
      
      // The "originating" event, namespaced for easy unbinding.
      event_namespaced = event_name + '.' + outside_event_name + '-special-event';
    
    // Event: outside events
    // 
    // An "outside" event is triggered on an element when its corresponding
    // "originating" event is triggered on an element outside the element in
    // question. See the <Default "outside" events> list for more information.
    // 
    // Usage:
    // 
    // > jQuery('selector').bind( 'clickoutside', function(event) {
    // >   var clicked_elem = $(event.target);
    // >   ...
    // > });
    // 
    // > jQuery('selector').bind( 'dblclickoutside', function(event) {
    // >   var double_clicked_elem = $(event.target);
    // >   ...
    // > });
    // 
    // > jQuery('selector').bind( 'mouseoveroutside', function(event) {
    // >   var moused_over_elem = $(event.target);
    // >   ...
    // > });
    // 
    // > jQuery('selector').bind( 'focusoutside', function(event) {
    // >   var focused_elem = $(event.target);
    // >   ...
    // > });
    // 
    // You get the idea, right?
    
    $.event.special[ outside_event_name ] = {
      
      // Called only when the first "outside" event callback is bound per
      // element.
      setup: function(){
        
        // Add this element to the list of elements to which this "outside"
        // event is bound.
        elems = elems.add( this );
        
        // If this is the first element getting the event bound, bind a handler
        // to document to catch all corresponding "originating" events.
        if ( elems.length === 1 ) {
          $(doc).bind( event_namespaced, handle_event );
        }
      },
      
      // Called only when the last "outside" event callback is unbound per
      // element.
      teardown: function(){
        
        // Remove this element from the list of elements to which this
        // "outside" event is bound.
        elems = elems.not( this );
        
        // If this is the last element removed, remove the "originating" event
        // handler on document that powers this "outside" event.
        if ( elems.length === 0 ) {
          $(doc).unbind( event_namespaced );
        }
      },
      
      // Called every time a "outside" event callback is bound to an element.
      add: function( handleObj ) {
        var old_handler = handleObj.handler;
        
        // This function is executed every time the event is triggered. This is
        // used to override the default event.target reference with one that is
        // more useful.
        handleObj.handler = function( event, elem ) {
          
          // Set the event object's .target property to the element that the
          // user interacted with, not the element that the "outside" event was
          // was triggered on.
          event.target = elem;
          
          // Execute the actual bound handler.
          old_handler.apply( this, arguments );
        };
      }
    };
    
    // When the "originating" event is triggered..
    function handle_event( event ) {
      
      // Iterate over all elements to which this "outside" event is bound.
      $(elems).each(function(){
        var elem = $(this);
        
        // If this element isn't the element on which the event was triggered,
        // and this element doesn't contain said element, then said element is
        // considered to be outside, and the "outside" event will be triggered!
        if ( this !== event.target && !elem.has(event.target).length ) {
          
          // Use triggerHandler instead of trigger so that the "outside" event
          // doesn't bubble. Pass in the "originating" event's .target so that
          // the "outside" event.target can be overridden with something more
          // meaningful.
          elem.triggerHandler( outside_event_name, [ event.target ] );
        }
      });
    };
    
  };
  
})(jQuery,document,"outside");

/*! jQuery slabtext plugin v2.3.1 MIT/GPL2 @freqdec */
(function( $ ){

    $.fn.slabText = function(options) {

        var settings = {
            // The ratio used when calculating the characters per line
            // (parent width / (font-size * fontRatio)).
            "fontRatio"             : 0.78,
            // Always recalculate the characters per line, not just when the
            // font-size changes? Defaults to true (CPU intensive)
            "forceNewCharCount"     : true,
            // Do we wrap ampersands in <span class="amp">
            "wrapAmpersand"         : true,
            // Under what pixel width do we remove the slabtext styling?
            "headerBreakpoint"      : null,
            "viewportBreakpoint"    : null,
            // Don't attach a resize event
            "noResizeEvent"         : false,
            // By many milliseconds do we throttle the resize event
            "resizeThrottleTime"    : 300,
            // The maximum pixel font size the script can set
            "maxFontSize"           : 999,
            // Do we try to tweak the letter-spacing or word-spacing?
            "postTweak"             : true,
            // Decimal precision to use when setting CSS values
            "precision"             : 3,
            // The min num of chars a line has to contain
            "minCharsPerLine"       : 0
            };

        // Add the slabtexted classname to the body to initiate the styling of
        // the injected spans
        $("body").addClass("slabtexted");

        return this.each(function(){

            if(options) {
                $.extend(settings, options);
            };

            var $this               = $(this),
                keepSpans           = $("span.slabtext", $this).length,
                words               = keepSpans ? [] : String($.trim($this.text())).replace(/\s{2,}/g, " ").split(" "),
                origFontSize        = null,
                idealCharPerLine    = null,
                fontRatio           = settings.fontRatio,
                forceNewCharCount   = settings.forceNewCharCount,
                headerBreakpoint    = settings.headerBreakpoint,
                viewportBreakpoint  = settings.viewportBreakpoint,
                postTweak           = settings.postTweak,
                precision           = settings.precision,
                resizeThrottleTime  = settings.resizeThrottleTime,
                minCharsPerLine     = settings.minCharsPerLine,
                resizeThrottle      = null,
                viewportWidth       = $(window).width(),
                headLink            = $this.find("a:first").attr("href") || $this.attr("href"),
                linkTitle           = headLink ? $this.find("a:first").attr("title") : "";

            if(!keepSpans && minCharsPerLine && words.join(" ").length < minCharsPerLine) {
                return;
            };

            // Calculates the pixel equivalent of 1em within the current header
            var grabPixelFontSize = function() {
                var dummy = jQuery('<div style="display:none;font-size:1em;margin:0;padding:0;height:auto;line-height:1;border:0;">&nbsp;</div>').appendTo($this),
                    emH   = dummy.height();
                dummy.remove();
                return emH;
            };

            // Most of this function is a (very) stripped down AS3 to JS port of
            // the slabtype algorithm by Eric Loyer with the original comments
            // left intact
            // http://erikloyer.com/index.php/blog/the_slabtype_algorithm_part_1_background/
            var resizeSlabs = function resizeSlabs() {

                // Cache the parent containers width
                var parentWidth = $this.width(),
                    fs;

               //Sanity check to prevent infinite loop
                if(parentWidth === 0) {
                    return;
                };

                // Remove the slabtextdone and slabtextinactive classnames to enable the inline-block shrink-wrap effect
                $this.removeClass("slabtextdone slabtextinactive");

                if(viewportBreakpoint && viewportBreakpoint > viewportWidth
                   ||
                   headerBreakpoint && headerBreakpoint > parentWidth) {
                    // Add the slabtextinactive classname to set the spans as inline
                    // and to reset the font-size to 1em (inherit won't work in IE6/7)
                    $this.addClass("slabtextinactive");
                    return;
                };

                fs = grabPixelFontSize();
                // If the parent containers font-size has changed or the "forceNewCharCount" option is true (the default),
                // then recalculate the "characters per line" count and re-render the inner spans
                // Setting "forceNewCharCount" to false will save CPU cycles...
                if(!keepSpans && (forceNewCharCount || fs != origFontSize)) {

                    origFontSize = fs;

                    var newCharPerLine      = Math.min(60, Math.floor(parentWidth / (origFontSize * fontRatio))),
                        wordIndex           = 0,
                        lineText            = [],
                        counter             = 0,
                        preText             = "",
                        postText            = "",
                        finalText           = "",
                        slice,
                        preDiff,
                        postDiff;

                    if(newCharPerLine != 0 && newCharPerLine != idealCharPerLine) {
                        idealCharPerLine = newCharPerLine;

                        while (wordIndex < words.length) {

                            postText = "";

                            // build two strings (preText and postText) word by word, with one
                            // string always one word behind the other, until
                            // the length of one string is less than the ideal number of characters
                            // per line, while the length of the other is greater than that ideal
                            while (postText.length < idealCharPerLine) {
                                preText   = postText;
                                postText += words[wordIndex] + " ";
                                if(++wordIndex >= words.length) {
                                    break;
                                };
                            };

                            // This bit hacks in a minimum characters per line test
                            // on the last line
                            if(minCharsPerLine) {
                                slice = words.slice(wordIndex).join(" ");
                                if(slice.length < minCharsPerLine) {
                                    postText += slice;
                                    preText = postText;
                                    wordIndex = words.length + 2;
                                };
                            };

                            // calculate the character difference between the two strings and the
                            // ideal number of characters per line
                            preDiff  = idealCharPerLine - preText.length;
                            postDiff = postText.length - idealCharPerLine;

                            // if the smaller string is closer to the length of the ideal than
                            // the longer string, and doesn’t contain less than minCharsPerLine
                            // characters, then use that one for the line
                            if((preDiff < postDiff) && (preText.length >= (minCharsPerLine || 2))) {
                                finalText = preText;
                                wordIndex--;
                            // otherwise, use the longer string for the line
                            } else {
                                finalText = postText;
                            };

                            // HTML-escape the text
                            finalText = $('<div/>').text(finalText).html()

                            // Wrap ampersands in spans with class `amp` for specific styling
                            if(settings.wrapAmpersand) {
                                finalText = finalText.replace(/&amp;/g, '<span class="amp">&amp;</span>');
                            };

                            finalText = $.trim(finalText);

                            lineText.push('<span class="slabtext">' + finalText + "</span>");
                        };

                        $this.html(lineText.join(" "));
                        // If we have a headLink, add it back just inside our target, around all the slabText spans
                        if(headLink) {
                            $this.wrapInner('<a href="' + headLink + '" ' + (linkTitle ? 'title="' + linkTitle + '" ' : '') + '/>');
                        };
                    };
                } else {
                    // We only need the font-size for the resize-to-fit functionality
                    // if not injecting the spans
                    origFontSize = fs;
                };

                $("span.slabtext", $this).each(function() {
                    var $span       = $(this),
                        // the .text method appears as fast as using custom -data attributes in this case
                        innerText   = $span.text(),
                        wordSpacing = innerText.split(" ").length > 1,
                        diff,
                        ratio,
                        fontSize;

                    if(postTweak) {
                        $span.css({
                            "word-spacing":0,
                            "letter-spacing":0
                            });
                    };

                    ratio    = parentWidth / $span.width();
                    fontSize = parseFloat(this.style.fontSize) || origFontSize;

                    $span.css("font-size", Math.min((fontSize * ratio).toFixed(precision), settings.maxFontSize) + "px");

                    // Do we still have space to try to fill or crop
                    diff = !!postTweak ? parentWidth - $span.width() : false;

                    // A "dumb" tweak in the blind hope that the browser will
                    // resize the text to better fit the available space.
                    // Better "dumb" and fast...
                    if(diff) {
                        $span.css((wordSpacing ? 'word' : 'letter') + '-spacing', (diff / (wordSpacing ? innerText.split(" ").length - 1 : innerText.length)).toFixed(precision) + "px");
                    };
                });

                // Add the class slabtextdone to set a display:block on the child spans
                // and avoid styling & layout issues associated with inline-block
                $this.addClass("slabtextdone");
            };

            // Immediate resize
            resizeSlabs();

            if(!settings.noResizeEvent) {
                $(window).resize(function() {
                    // Only run the resize code if the viewport width has changed.
                    // we ignore the viewport height as it will be constantly changing.
                    if($(window).width() == viewportWidth) {
                        return;
                    };

                    viewportWidth = $(window).width();

                    clearTimeout(resizeThrottle);
                    resizeThrottle = setTimeout(resizeSlabs, resizeThrottleTime);
                });
            };
        });
    };
})(jQuery);

/**
 * Extend jquery with a scrollspy plugin.
 * This watches the window scroll and fires events when elements are scrolled into viewport.
 *
 * throttle() and getTime() taken from Underscore.js
 * https://github.com/jashkenas/underscore
 *
 * @author Copyright 2013 John Smart
 * @license https://raw.github.com/thesmart/jquery-scrollspy/master/LICENSE
 * @see https://github.com/thesmart
 * @version 0.1.2
 */
(function($) {

	var jWindow = $(window);
	var elements = [];
	var elementsInView = [];
	var isSpying = false;
	var ticks = 0;
	var offset = {
		top : 0,
		right : 0,
		bottom : 0,
		left : 0,
	}

	/**
	 * Find elements that are within the boundary
	 * @param {number} top
	 * @param {number} right
	 * @param {number} bottom
	 * @param {number} left
	 * @return {jQuery}		A collection of elements
	 */
	function findElements(top, right, bottom, left) {
		var hits = $();
		$.each(elements, function(i, element) {
			var elTop = element.offset().top,
				elLeft = element.offset().left,
				elRight = elLeft + element.width(),
				elBottom = elTop + element.height();

			var isIntersect = !(elLeft > right ||
				elRight < left ||
				elTop > bottom ||
				elBottom < top);

			if (isIntersect) {
				hits.push(element);
			}
		});

		return hits;
	}

	/**
	 * Called when the user scrolls the window
	 */
	function onScroll() {
		// unique tick id
		++ticks;

		// viewport rectangle
		var top = jWindow.scrollTop(),
			left = jWindow.scrollLeft(),
			right = left + jWindow.width(),
			bottom = top + jWindow.height();

		// determine which elements are in view
		var intersections = findElements(top+offset.top, right+offset.right, bottom+offset.bottom, left+offset.left);
		$.each(intersections, function(i, element) {
			var lastTick = element.data('scrollSpy:ticks');
			if (typeof lastTick != 'number') {
				// entered into view
				element.triggerHandler('scrollSpy:enter');
			}

			// update tick id
			element.data('scrollSpy:ticks', ticks);
		});

		// determine which elements are no longer in view
		$.each(elementsInView, function(i, element) {
			var lastTick = element.data('scrollSpy:ticks');
			if (typeof lastTick == 'number' && lastTick !== ticks) {
				// exited from view
				element.triggerHandler('scrollSpy:exit');
				element.data('scrollSpy:ticks', null);
			}
		});

		// remember elements in view for next tick
		elementsInView = intersections;
	}

	/**
	 * Called when window is resized
	*/
	function onWinSize() {
		jWindow.trigger('scrollSpy:winSize');
	}

	/**
	 * Get time in ms
   * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
	 * @type {function}
	 * @return {number}
	 */
	var getTime = (Date.now || function () {
		return new Date().getTime();
	});

	/**
	 * Returns a function, that, when invoked, will only be triggered at most once
	 * during a given window of time. Normally, the throttled function will run
	 * as much as it can, without ever going more than once per `wait` duration;
	 * but if you'd like to disable the execution on the leading edge, pass
	 * `{leading: false}`. To disable execution on the trailing edge, ditto.
	 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
	 * @param {function} func
	 * @param {number} wait
	 * @param {Object=} options
	 * @returns {Function}
	 */
	function throttle(func, wait, options) {
		var context, args, result;
		var timeout = null;
		var previous = 0;
		options || (options = {});
		var later = function () {
			previous = options.leading === false ? 0 : getTime();
			timeout = null;
			result = func.apply(context, args);
			context = args = null;
		};
		return function () {
			var now = getTime();
			if (!previous && options.leading === false) previous = now;
			var remaining = wait - (now - previous);
			context = this;
			args = arguments;
			if (remaining <= 0) {
				clearTimeout(timeout);
				timeout = null;
				previous = now;
				result = func.apply(context, args);
				context = args = null;
			} else if (!timeout && options.trailing !== false) {
				timeout = setTimeout(later, remaining);
			}
			return result;
		};
	};

	/**
	 * Enables ScrollSpy using a selector
	 * @param {jQuery|string} selector  The elements collection, or a selector
	 * @param {Object=} options	Optional.
											throttle : number -> scrollspy throttling. Default: 100 ms
											offsetTop : number -> offset from top. Default: 0
											offsetRight : number -> offset from right. Default: 0
											offsetBottom : number -> offset from bottom. Default: 0
											offsetLeft : number -> offset from left. Default: 0
	 * @returns {jQuery}
	 */
	$.scrollSpy = function(selector, options) {
		selector = $(selector);
		selector.each(function(i, element) {
			elements.push($(element));
		});
		options = options || {
			throttle: 100
		};

		offset.top = options.offsetTop || 0;
		offset.right = options.offsetRight || 0;
		offset.bottom = options.offsetBottom || 0;
		offset.left = options.offsetLeft || 0;

		var throttledScroll = throttle(onScroll, options.throttle || 100);
		var readyScroll = function(){
			$(document).ready(throttledScroll);
		};

		if (!isSpying) {
			jWindow.on('scroll', readyScroll);
			jWindow.on('resize', readyScroll);
			isSpying = true;
		}

		// perform a scan once, after current execution context, and after dom is ready
		setTimeout(readyScroll, 0);

		return selector;
	};

	/**
	 * Listen for window resize events
	 * @param {Object=} options						Optional. Set { throttle: number } to change throttling. Default: 100 ms
	 * @returns {jQuery}		$(window)
	 */
	$.winSizeSpy = function(options) {
		$.winSizeSpy = function() { return jWindow; }; // lock from multiple calls
		options = options || {
			throttle: 100
		};
		return jWindow.on('resize', throttle(onWinSize, options.throttle || 100));
	};

	/**
	 * Enables ScrollSpy on a collection of elements
	 * e.g. $('.scrollSpy').scrollSpy()
	 * @param {Object=} options	Optional.
											throttle : number -> scrollspy throttling. Default: 100 ms
											offsetTop : number -> offset from top. Default: 0
											offsetRight : number -> offset from right. Default: 0
											offsetBottom : number -> offset from bottom. Default: 0
											offsetLeft : number -> offset from left. Default: 0
	 * @returns {jQuery}
	 */
	$.fn.scrollSpy = function(options) {
		return $.scrollSpy($(this), options);
	};

})(jQuery);
(function(){

  window.sticky = function(el, top) {

    var requiredOriginalStyles = ['position', 'top', 'left', 'z-index'];

    var requiredTop = top || 0;
    var originalRect = calcRect(el);
    var styles = {
      position: 'fixed',
      top: requiredTop + 'px',
      left: originalRect.left + 'px',
      // width: originalRect.width + 'px',
      'z-index': 9999
    }
    var originalStyles = {}
    requiredOriginalStyles.forEach(function(key) {
      originalStyles[key] = el.style[key];
    });

    var onscroll;
    if (window.onscroll) {
      onscroll = window.onscroll;
    }
    
    window.onscroll = function(event) {
      if (getWindowScroll().top > originalRect.top - requiredTop) {
        el.className = 'stuck header';
        for (key in styles) {
          el.style[key] = styles[key];
        }
      } else {
        el.className = 'header';
        for (key in originalStyles) {
          el.style[key] = originalStyles[key];
        }
      }
      onscroll && onscroll(event)
    }
  }

  function calcRect(el) {
    var rect = el.getBoundingClientRect();
    var windowScroll = getWindowScroll()
    return {
      left: rect.left + windowScroll.left,
      top: rect.top + windowScroll.top,
      width: rect.width,
      height: rect.height
    }
  }

  function getWindowScroll() {
    return {
      top: window.pageYOffset || document.documentElement.scrollTop,
      left: window.pageXOffset || document.documentElement.scrollLeft
    }
  }

})();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"warnOnce",{enumerable:!0,get:function(){return s}});let s=e=>{}},65115,e=>{"use strict";var t=e.i(43476),i=e.i(71645),s=e.i(90072),r=e.i(8560);function o({mouseForce:e=20,cursorSize:o=100,isViscous:n=!1,viscous:a=30,iterationsViscous:u=32,iterationsPoisson:l=32,dt:c=.014,BFECC:h=!0,resolution:v=.5,isBounce:p=!1,colors:d=["#5227FF","#FF9FFC","#B19EEF"],style:m={},className:f="",autoDemo:y=!0,autoSpeed:g=.5,autoIntensity:x=2.2,takeoverDuration:_=.25,autoResumeDelay:w=1e3,autoRampDuration:b=.6,maxFps:S=0}){let D=(0,i.useRef)(null),T=(0,i.useRef)(null),F=(0,i.useRef)(null),C=(0,i.useRef)(null),z=(0,i.useRef)(null),M=(0,i.useRef)(!0),A=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(!D.current)return;let t=function(e){let t,i=(t=Array.isArray(e)&&e.length>0?1===e.length?[e[0],e[0]]:e:["#ffffff","#ffffff"]).length,r=new Uint8Array(4*i);for(let e=0;e<i;e++){let i=new s.Color(t[e]);r[4*e+0]=Math.round(255*i.r),r[4*e+1]=Math.round(255*i.g),r[4*e+2]=Math.round(255*i.b),r[4*e+3]=255}let o=new s.DataTexture(r,i,1,s.RGBAFormat);return o.magFilter=s.LinearFilter,o.minFilter=s.LinearFilter,o.wrapS=s.ClampToEdgeWrapping,o.wrapT=s.ClampToEdgeWrapping,o.generateMipmaps=!1,o.needsUpdate=!0,o}(d),i=new s.Vector4(0,0,0,0),m=new class{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(e){this.container=e,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new r.WebGLRenderer({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new s.Color(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new s.Clock,this.clock.start()}resize(){if(!this.container)return;let e=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(e.width)),this.height=Math.max(1,Math.floor(e.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}},f=new class{constructor(){this.mouseMoved=!1,this.coords=new s.Vector2,this.coords_old=new s.Vector2,this.diff=new s.Vector2,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new s.Vector2,this.takeoverTo=new s.Vector2,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(e){this.container=e,this.docTarget=e.ownerDocument||null;let t=this.docTarget&&this.docTarget.defaultView||window;t&&(this.listenerTarget=t,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(e,t){if(!this.container)return!1;let i=this.container.getBoundingClientRect();return 0!==i.width&&0!==i.height&&e>=i.left&&e<=i.right&&t>=i.top&&t<=i.bottom}updateHoverState(e,t){return this.isHoverInside=this.isPointInside(e,t),this.isHoverInside}setCoords(e,t){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);let i=this.container.getBoundingClientRect();if(0===i.width||0===i.height)return;let s=(e-i.left)/i.width,r=(t-i.top)/i.height;this.coords.set(2*s-1,-(2*r-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(e,t){this.coords.set(e,t),this.mouseMoved=!0}onDocumentMouseMove(e){if(this.updateHoverState(e.clientX,e.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;let t=this.container.getBoundingClientRect();if(0===t.width||0===t.height)return;let i=(e.clientX-t.left)/t.width,s=(e.clientY-t.top)/t.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(2*i-1,-(2*s-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(e.clientX,e.clientY),this.hasUserControl=!0}}onDocumentTouchStart(e){if(1!==e.touches.length)return;let t=e.touches[0];this.updateHoverState(t.clientX,t.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(t.clientX,t.clientY),this.hasUserControl=!0)}onDocumentTouchMove(e){if(1!==e.touches.length)return;let t=e.touches[0];this.updateHoverState(t.clientX,t.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(t.clientX,t.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){let e=(performance.now()-this.takeoverStartTime)/(1e3*this.takeoverDuration);e>=1?(this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0)):this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,e*e*(3-2*e))}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),0===this.coords_old.x&&0===this.coords_old.y&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}};class E{constructor(e,t,i){this.mouse=e,this.manager=t,this.enabled=i.enabled,this.speed=i.speed,this.resumeDelay=i.resumeDelay||3e3,this.rampDurationMs=1e3*(i.rampDuration||0),this.active=!1,this.current=new s.Vector2(0,0),this.target=new s.Vector2,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new s.Vector2,this.pickNewTarget()}pickNewTarget(){let e=Math.random;this.target.set((2*e()-1)*(1-this.margin),(2*e()-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;let e=performance.now();if(e-this.manager.lastUserInteraction<this.resumeDelay||this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=e,this.activationTime=e),!this.active)return;this.mouse.isAutoActive=!0;let t=(e-this.lastTime)/1e3;this.lastTime=e,t>.2&&(t=.016);let i=this._tmpDir.subVectors(this.target,this.current),s=i.length();if(s<.01)return void this.pickNewTarget();i.normalize();let r=1;if(this.rampDurationMs>0){let t=Math.min(1,(e-this.activationTime)/this.rampDurationMs);r=t*t*(3-2*t)}let o=Math.min(this.speed*t*r,s);this.current.addScaledVector(i,o),this.mouse.setNormalized(this.current.x,this.current.y)}}let R=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,k=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,B=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,I=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,P=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,V=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,L=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,j=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,N=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,U=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class O{constructor(e){this.props=e||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new s.Scene,this.camera=new s.Camera,this.uniforms&&(this.material=new s.RawShaderMaterial(this.props.material),this.geometry=new s.PlaneGeometry(2,2),this.plane=new s.Mesh(this.geometry,this.material),this.scene.add(this.plane))}update(){m.renderer.setRenderTarget(this.props.output||null),m.renderer.render(this.scene,this.camera),m.renderer.setRenderTarget(null)}}class H extends O{constructor(e){super({material:{vertexShader:R,fragmentShader:I,uniforms:{boundarySpace:{value:e.cellScale},px:{value:e.cellScale},fboSize:{value:e.fboSize},velocity:{value:e.src.texture},dt:{value:e.dt},isBFECC:{value:!0}}},output:e.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){let e=new s.BufferGeometry,t=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);e.setAttribute("position",new s.BufferAttribute(t,3));let i=new s.RawShaderMaterial({vertexShader:k,fragmentShader:I,uniforms:this.uniforms});this.line=new s.LineSegments(e,i),this.scene.add(this.line)}update({dt:e,isBounce:t,BFECC:i}){this.uniforms.dt.value=e,this.line.visible=t,this.uniforms.isBFECC.value=i,super.update()}}class W extends O{constructor(e){super({output:e.dst}),this.init(e)}init(e){super.init();let t=new s.PlaneGeometry(1,1),i=new s.RawShaderMaterial({vertexShader:B,fragmentShader:L,blending:s.AdditiveBlending,depthWrite:!1,uniforms:{px:{value:e.cellScale},force:{value:new s.Vector2(0,0)},center:{value:new s.Vector2(0,0)},scale:{value:new s.Vector2(e.cursor_size,e.cursor_size)}}});this.mouse=new s.Mesh(t,i),this.scene.add(this.mouse)}update(e){let t=f.diff.x/2*e.mouse_force,i=f.diff.y/2*e.mouse_force,s=e.cursor_size*e.cellScale.x,r=e.cursor_size*e.cellScale.y,o=Math.min(Math.max(f.coords.x,-1+s+2*e.cellScale.x),1-s-2*e.cellScale.x),n=Math.min(Math.max(f.coords.y,-1+r+2*e.cellScale.y),1-r-2*e.cellScale.y),a=this.mouse.material.uniforms;a.force.value.set(t,i),a.center.value.set(o,n),a.scale.value.set(e.cursor_size,e.cursor_size),super.update()}}class G extends O{constructor(e){super({material:{vertexShader:R,fragmentShader:U,uniforms:{boundarySpace:{value:e.boundarySpace},velocity:{value:e.src.texture},velocity_new:{value:e.dst_.texture},v:{value:e.viscous},px:{value:e.cellScale},dt:{value:e.dt}}},output:e.dst,output0:e.dst_,output1:e.dst}),this.init()}update({viscous:e,iterations:t,dt:i}){let s,r;this.uniforms.v.value=e;for(let e=0;e<t;e++)e%2==0?(s=this.props.output0,r=this.props.output1):(s=this.props.output1,r=this.props.output0),this.uniforms.velocity_new.value=s.texture,this.props.output=r,this.uniforms.dt.value=i,super.update();return r}}class X extends O{constructor(e){super({material:{vertexShader:R,fragmentShader:V,uniforms:{boundarySpace:{value:e.boundarySpace},velocity:{value:e.src.texture},px:{value:e.cellScale},dt:{value:e.dt}}},output:e.dst}),this.init()}update({vel:e}){this.uniforms.velocity.value=e.texture,super.update()}}class Y extends O{constructor(e){super({material:{vertexShader:R,fragmentShader:j,uniforms:{boundarySpace:{value:e.boundarySpace},pressure:{value:e.dst_.texture},divergence:{value:e.src.texture},px:{value:e.cellScale}}},output:e.dst,output0:e.dst_,output1:e.dst}),this.init()}update({iterations:e}){let t,i;for(let s=0;s<e;s++)s%2==0?(t=this.props.output0,i=this.props.output1):(t=this.props.output1,i=this.props.output0),this.uniforms.pressure.value=t.texture,this.props.output=i,super.update();return i}}class q extends O{constructor(e){super({material:{vertexShader:R,fragmentShader:N,uniforms:{boundarySpace:{value:e.boundarySpace},pressure:{value:e.src_p.texture},velocity:{value:e.src_v.texture},px:{value:e.cellScale},dt:{value:e.dt}}},output:e.dst}),this.init()}update({vel:e,pressure:t}){this.uniforms.velocity.value=e.texture,this.uniforms.pressure.value=t.texture,super.update()}}class ${constructor(e){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...e},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new s.Vector2,this.cellScale=new s.Vector2,this.boundarySpace=new s.Vector2,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?s.HalfFloatType:s.FloatType}createAllFBO(){let e={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:s.LinearFilter,magFilter:s.LinearFilter,wrapS:s.ClampToEdgeWrapping,wrapT:s.ClampToEdgeWrapping};for(let t in this.fbos)this.fbos[t]=new s.WebGLRenderTarget(this.fboSize.x,this.fboSize.y,e)}createShaderPass(){this.advection=new H({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new W({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new G({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new X({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new Y({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new q({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){let e=Math.max(1,Math.round(this.options.resolution*m.width)),t=Math.max(1,Math.round(this.options.resolution*m.height));this.cellScale.set(1/e,1/t),this.fboSize.set(e,t)}resize(){for(let e in this.calcSize(),this.fbos)this.fbos[e].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let e=this.fbos.vel_1;this.options.isViscous&&(e=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:e});let t=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:e,pressure:t})}}class K{constructor(){this.init()}init(){this.simulation=new $,this.scene=new s.Scene,this.camera=new s.Camera,this.output=new s.Mesh(new s.PlaneGeometry(2,2),new s.RawShaderMaterial({vertexShader:R,fragmentShader:P,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new s.Vector2},palette:{value:t},bgColor:{value:i}}})),this.scene.add(this.output)}addScene(e){this.scene.add(e)}resize(){this.simulation.resize()}render(){m.renderer.setRenderTarget(null),m.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}let J=D.current;J.style.position=J.style.position||"relative",J.style.overflow=J.style.overflow||"hidden";let Q=new class{constructor(e){this.props=e,this.maxFps="number"==typeof e.maxFps?e.maxFps:0,this._frameInterval=this.maxFps>0?1e3/this.maxFps:0,this._lastFrameTime=0,m.init(e.$wrapper),f.init(e.$wrapper),f.autoIntensity=e.autoIntensity,f.takeoverDuration=e.takeoverDuration,this.lastUserInteraction=performance.now(),f.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new E(f,this,{enabled:e.autoDemo,speed:e.autoSpeed,resumeDelay:e.autoResumeDelay,rampDuration:e.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():M.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(m.renderer.domElement),this.output=new K}resize(){m.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),f.update(),m.update(),this.output.update()}loop(e){if(!this.running)return;let t="number"==typeof e?e:performance.now();if(this._frameInterval){if(this._lastFrameTime&&t-this._lastFrameTime<this._frameInterval){C.current=requestAnimationFrame(this._loop);return}this._lastFrameTime=t}this.render(),C.current=requestAnimationFrame(this._loop)}start(){this.running||(this.running=!0,this._lastFrameTime=0,C.current=requestAnimationFrame(this._loop))}pause(){this.running=!1,C.current&&(cancelAnimationFrame(C.current),C.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),f.dispose(),m.renderer){let e=m.renderer.domElement;e&&e.parentNode&&e.parentNode.removeChild(e),m.renderer.dispose()}}catch(e){}}}({$wrapper:J,autoDemo:y,autoSpeed:g,autoIntensity:x,takeoverDuration:_,autoResumeDelay:w,autoRampDuration:b,maxFps:S});T.current=Q,(()=>{if(!T.current)return;let t=T.current.output?.simulation;if(!t)return;let i=t.options.resolution;Object.assign(t.options,{mouse_force:e,cursor_size:o,isViscous:n,viscous:a,iterations_viscous:u,iterations_poisson:l,dt:c,BFECC:h,resolution:v,isBounce:p}),v!==i&&t.resize()})(),Q.start();let Z=new IntersectionObserver(e=>{let t=e[0],i=t.isIntersecting&&t.intersectionRatio>0;M.current=i,T.current&&(i&&!document.hidden?T.current.start():T.current.pause())},{threshold:[0,.01,.1]});Z.observe(J),z.current=Z;let ee=new ResizeObserver(()=>{T.current&&(A.current&&cancelAnimationFrame(A.current),A.current=requestAnimationFrame(()=>{T.current&&T.current.resize()}))});return ee.observe(J),F.current=ee,()=>{if(C.current&&cancelAnimationFrame(C.current),F.current)try{F.current.disconnect()}catch(e){}if(z.current)try{z.current.disconnect()}catch(e){}T.current&&T.current.dispose(),T.current=null}},[h,o,c,p,n,l,u,e,v,a,d,y,g,x,_,w,b]),(0,i.useEffect)(()=>{let t=T.current;if(!t)return;let i=t.output?.simulation;if(!i)return;let s=i.options.resolution;Object.assign(i.options,{mouse_force:e,cursor_size:o,isViscous:n,viscous:a,iterations_viscous:u,iterations_poisson:l,dt:c,BFECC:h,resolution:v,isBounce:p}),t.autoDriver&&(t.autoDriver.enabled=y,t.autoDriver.speed=g,t.autoDriver.resumeDelay=w,t.autoDriver.rampDurationMs=1e3*b,t.autoDriver.mouse&&(t.autoDriver.mouse.autoIntensity=x,t.autoDriver.mouse.takeoverDuration=_)),v!==s&&i.resize()},[e,o,n,a,u,l,c,h,v,p,y,g,x,_,w,b]),(0,t.jsx)("div",{ref:D,className:`liquid-ether-container ${f||""}`,style:m})}function n(){return(0,t.jsxs)("div",{className:"tn-bg-layer","aria-hidden":!0,children:[(0,t.jsx)("div",{className:"tn-bg-liquid",children:(0,t.jsx)(o,{colors:["#1B59FF","#3CC9FF","#A7D8FF"],mouseForce:20,cursorSize:100,isViscous:!0,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,maxFps:45,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6,style:{width:"100%",height:"100%"}})}),(0,t.jsx)("div",{className:"tn-bg-vignette"}),(0,t.jsx)("div",{className:"tn-bg-grain"})]})}e.s(["SiteBackground",()=>n],65115)},18566,(e,t,i)=>{t.exports=e.r(76562)},48303,e=>{"use strict";var t=e.i(43476),i=e.i(22016),s=e.i(18566);let r=[{href:"/philosophy",label:"Our Philosophy"},{href:"/programs",label:"Programs"},{href:"/instructors",label:"Instructors"},{href:"/contact",label:"Contact"}],o=[{href:"#philosophy",label:"Our Philosophy"},{href:"#programs",label:"Programs"},{href:"#instructors",label:"Instructors"},{href:"#contact",label:"Contact"}];function n({pathname:e}){let s,n="/One"===(s=e?e.length>1&&e.endsWith("/")?e.slice(0,-1):e:"/")||s.endsWith("/One");return(0,t.jsxs)("header",{className:"tn-header",children:[(0,t.jsx)("div",{className:"tn-header__brand",children:(0,t.jsx)(i.default,{href:n?"#top":"/",children:"Project TRUE NORTH"})}),(0,t.jsx)("nav",{className:"tn-header__nav","aria-label":"Primary",children:(n?o:r).map(e=>(0,t.jsx)(i.default,{href:e.href,children:e.label},e.href))}),(0,t.jsx)(i.default,{className:"tn-header__cta",href:n?"#apply":"/contact#apply",children:"Apply Now"})]})}function a(){let e=(0,s.usePathname)();return(0,t.jsx)(n,{pathname:e})}e.s(["SiteHeader",()=>a,"SiteHeaderContent",()=>n])}]);
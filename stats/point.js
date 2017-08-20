function PointJS(Ma, V, W, ib, xc) {
    this._logo = "http://pointjs.ru/PjsMin.png";
    var g = window, n = this, za = !0, jb = !0, Hb = !0, ka = !1, Aa = !0, q = V, r = W, Q = q / 2, R = r / 2,
        f = {x: 0, y: 0},
        t = {fillStyle: "black", strokeStyle: "black", globalAlpha: 1, font: "sans-serif", textBaseline: "top"},
        H = function (a) {
            console.log("[PointJS] : ", a)
        };
    "undefined" != typeof POINTJS_USER_LOG && (H = POINTJS_USER_LOG);
    var Na = function (a) {
        var b = decodeURI(a.stack.toString().replace(/(@|[\(\)]|[\w]+:\/\/)/g, "")), b = b.split(/\n/),
            b = ("" == b[2] ? b[0] : b[1]).split("/"), b = b[b.length -
            1].split(":");
        H('ERROR "' + a.toString() + '" \n in      ' + b[0] + " \n line :   " + b[1] + " \n symbol : " + b[2])
    };
    this.game = {};
    this.levels = {};
    this.camera = {};
    this.keyControl = {};
    this.mouseControl = {};
    this.touchControl = {};
    this.actionControl = {};
    this.system = {};
    this.vector = {};
    this.math = {};
    this.colors = {};
    this.brush = {};
    this.audio = {};
    this.wAudio = {};
    this.resources = {};
    this.tiles = {};
    this.OOP = {};
    this.memory = {};
    this.zList = {};
    this.system.log = H;
    this.system.consoleLog = function (a) {
        this.log = !0 === a ? console.log : H
    };
    this.system.setTitle =
        function (a) {
            g.document.title = a
        };
    this.system.setSettings = function (a) {
        za = u(a.isShowError) ? a.isShowError : !0;
        jb = u(a.isStopForError) ? a.isStopForError : !0;
        Hb = u(a.isAutoClear) ? a.isAutoClear : !1;
        u(a.isZBuffer)
    };
    this.system.setDefaultSettings = function (a) {
        for (var b in a) t[b] = a[b];
        h.save()
    };
    this.system.setSmoothing = function (a) {
        Aa = a;
        h.msImageSmoothingEnabled = Aa;
        h.imageSmoothingEnabled = Aa
    };
    var mc = {
        name: "PointJS",
        desc: "HTML5 2D Game Engine for JavaScript",
        author: "Skaner (skaner0@yandex.ru)",
        version: "0.1.3.0"
    };
    this.system.getInfo =
        function () {
            return mc
        };
    var Z = function (a, b) {
        b.prototype = Object.create(a.prototype);
        b.prototype.constructor = b
    }, ha = function (a, b, c) {
        this.x = a || 0;
        this.y = b || 0;
        this.z = c || 0
    };
    ha.prototype = {
        abs: function () {
            return new ha(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z))
        }, invert: function () {
            return new ha(-this.x, -this.y, -this.z)
        }, plus: function (a) {
            return new ha(this.x + a.x, this.y + a.y, this.z + a.z)
        }, minus: function (a) {
            return new ha(this.x - a.x, this.y - a.y, this.z - a.z)
        }, inc: function (a) {
            return new ha(this.x * a.x, this.y * a.y,
                this.z * a.z)
        }, div: function (a) {
            return new ha(this.x / a.x, this.y / a.y, this.z / a.z)
        }
    };
    var e = function (a, b, c) {
        return new ha(a, b, c)
    }, B = function (a, b, c) {
        return {w: a, h: b, d: c}
    }, sa = function (a, b) {
        return {x: a.x + b.x, y: a.y + b.y, z: a.z + b.z}
    }, O = function (a, b, c) {
        if (0 != c) {
            var d = x(c);
            c = a.x - b.x;
            a = a.y - b.y;
            var k = Math.cos(d), d = Math.sin(d);
            return e(c * k - a * d + b.x, c * d + a * k + b.y)
        }
        return e(a.x, a.y)
    }, Ba = function (a, b) {
        return 180 / Math.PI * Math.atan2(b.y - a.y, b.x - a.x)
    }, la = function (a, b) {
        var c, d = 0;
        var k = 0;
        for (c = b.length - 1; k < b.length; c = k++) b[k].y >
        a.y != b[c].y > a.y && a.x < (b[c].x - b[k].x) * (a.y - b[k].y) / (b[c].y - b[k].y) + b[k].x && (d = !d);
        return d
    };
    this.vector.point = e;
    this.vector.v2d = e;
    this.vector.size = B;
    this.vector.getPointAngle = O;
    this.vector.isPointIn = la;
    this.vector.pointMinus = function (a, b) {
        return {x: a.x - b.x, y: a.y - b.y, z: a.z - b.z}
    };
    this.vector.pointPlus = sa;
    this.vector.pointInc = function (a, b) {
        return {x: a.x * b.x, y: a.y * b.y, z: a.z * b.z}
    };
    this.vector.pointDiv = function (a, b) {
        return {x: a.x / (0 != b.x ? b.x : 1), y: a.y / (0 != b.y ? b.y : 1), z: a.z / (0 != b.z ? b.z : 1)}
    };
    this.vector.pointAbs =
        function (a) {
            return {x: Math.abs(a.x), y: Math.abs(a.y), z: Math.abs(a.z)}
        };
    this.vector.getMidPoint = function (a, b) {
        return u(b) ? e((a.x + b.x) / 2, (a.y + b.y) / 2) : 0
    };
    this.vector.getDistance = function (a, b) {
        return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))
    };
    this.vector.isSame = function (a, b) {
        return u(b) ? a.x == b.x && a.y == b.y : !1
    };
    this.vector.getAngle2Points = Ba;
    this.vector.newStaticBox = function (a, b, c, d) {
        return {x: a, y: b, w: a + c, h: b + d}
    };
    this.vector.newDynamicBoxRect = function (a, b, c, d) {
        return [e(a, b), e(a + c, b), e(a + c, b + d), e(a,
            b + d)]
    };
    this.vector.moveCollision = function (a, b, c, d) {
        for (var k = e(c.x, c.y), f = 0, h = b.length, g; f < h; f += 1) if (g = b[f], !(a.getDistanceC(g.getPositionC()) > (g.w + g.h) / 2 + (a.w + a.h) / 2)) {
            var C = g.getStaticBox();
            if (a.isIntersect(g)) {
                var l = a.getStaticBox(), m = Math.abs(c.x), n = Math.abs(c.y);
                l.x + l.w > C.x + 10 + m && l.x < C.x + C.w - 10 - m && (0 < c.y && l.y + l.h < C.y + C.h / 2 + n ? k.y = 0 : 0 > c.y && l.y > C.y + C.h - C.h / 2 - n && (k.y = 0));
                l.y + l.h > C.y + 10 + n && l.y < C.y + C.h - 10 - n && (0 < c.x && l.x + l.w < C.x + C.w / 2 + m ? k.x = 0 : 0 > c.x && l.x > C.x + C.w - C.w / 2 - m && (k.x = 0));
                d && d(a, g)
            }
        }
        a.move(k);
        return k
    };
    this.vector.moveCollisionAngle = function (a, b, c, d, k) {
        var f = e();
        k = math.a2r(OOP.isDef(k) ? k : a.angle);
        f.x = c * Math.cos(k);
        f.y = c * Math.sin(k);
        c = 0;
        k = b.length;
        for (var h; c < k; c += 1) if (h = b[c], !(a.getDistanceC(h.getPositionC()) > (h.w + h.h) / 2 + (a.w + a.h) / 2)) {
            var g = h.getStaticBox();
            if (a.isIntersect(h)) {
                var l = a.getStaticBox(), m = Math.abs(f.x), n = Math.abs(f.y);
                l.x + l.w > g.x + 10 + m && l.x < g.x + g.w - 10 - m && (0 < f.y && l.y + l.h < g.y + g.h / 2 + n ? f.y = 0 : 0 > f.y && l.y > g.y + g.h - g.h / 2 - n && (f.y = 0));
                l.y + l.h > g.y + 10 + n && l.y < g.y + g.h - 10 - n && (0 < f.x && l.x +
                l.w < g.x + g.w / 2 + m ? f.x = 0 : 0 > f.x && l.x > g.x + g.w - g.w / 2 - m && (f.x = 0));
                d && d(a, h)
            }
        }
        a.move(f);
        return f
    };
    var Ib = {}, kb = function () {
        var a = (new Date).getTime();
        Ib[a] && (a = kb());
        Ib[a] = !0;
        return a
    }, x = function (a) {
        return Math.PI / 180 * a
    }, ea = function (a, b, c) {
        var d = Math.floor(Math.random() * (b - a + 1) + a);
        return c && 0 == d ? ea(a, b, c) : d
    }, lb = function (a) {
        return 0 > a ? -1 : 1
    };
    this.math.limit = function (a, b) {
        var c = lb(a);
        a = Math.abs(a);
        b = Math.abs(b);
        return a < b ? a * c : b * c
    };
    this.math.sign = lb;
    this.math.a2r = x;
    this.math.random = ea;
    this.math.toInt = function (a) {
        return a >>
            0
    };
    this.math.uid = kb;
    this.math.toZiro = function (a, b) {
        if (0 == a) return 0;
        var c = lb(a);
        b = Math.abs(b);
        a = Math.abs(a);
        return 0 < a && (a -= b, a < b) ? 0 : a * c
    };
    var Jb = 0, m = {
        loaded: !1,
        events: {onload: [], preLoop: [], postLoop: [], gameBlur: [], gameFocus: [], gameResize: []},
        addEvent: function (a, b, c) {
            "onload" == a && m.loaded ? c() : m.events[a].push({id: b, func: c})
        },
        delEvent: function (a, b) {
            v(m.events[a], function (a, d, k) {
                a.id == b && k.splice(d, 1)
            })
        },
        runEvent: function (a) {
            v(m.events[a], function (a) {
                "function" == typeof a.func && a.func()
            })
        },
        attach: function (a) {
            var b =
                function () {
                    g.document.body.appendChild(a)
                };
            m.loaded ? b() : m.addEvent("onload", "attachElement_PointJS" + (Jb += 1), b)
        },
        remove: function (a) {
            var b = function () {
                g.document.body.removeChild(a)
            };
            m.loaded ? b() : m.addEvent("onload", "attachElement_PointJS" + (Jb += 1), b)
        },
        getWH: function () {
            return {
                w: parseInt(g.document.documentElement.clientWidth || g.innerWidth || g.document.body.clientWidth),
                h: parseInt(g.document.documentElement.clientHeight || g.innerHeight || g.document.body.clientHeight)
            }
        }
    };
    this.system.delEvent = function (a, b) {
        m.delEvent(a,
            b)
    };
    this.system.addEvent = function (a, b, c) {
        m.addEvent(a, b, c)
    };
    this.system.attachDOM = function (a) {
        m.attach(a)
    };
    this.system.newDOM = function (a, b) {
        var c = g.document.createElement(a);
        c.style.position = "fixed";
        c.style.left = 0;
        c.style.top = 0;
        c.style.zIndex = p.style.zIndex + 1;
        c.style.border = "none";
        if (b) {
            var d = function (a) {
                a.stopPropagation()
            };
            c.addEventListener("touchstart", d, !1);
            c.addEventListener("touchend", d, !1);
            c.addEventListener("touchmove", d, !1);
            c.addEventListener("mousedown", d, !1);
            c.addEventListener("mousepress",
                d, !1);
            c.addEventListener("mouseup", d, !1);
            c.addEventListener("mousemove", d, !1);
            c.addEventListener("keypress", d, !1);
            c.addEventListener("keydown", d, !1);
            c.addEventListener("keyup", d, !1);
            c.addEventListener("click", d, !1);
            c.addEventListener("wheel", d, !1);
            c.addEventListener("mousewheel", d, !1);
            c.addEventListener("contextmenu", d, !1);
            c.addEventListener("selectstart", d, !1);
            c.addEventListener("dragstart", d, !1);
            c.addEventListener("DOMMouseScroll", d, !1)
        }
        m.attach(c);
        return c
    };
    var h = null;
    var p = g.document.createElement("canvas");
    h = p.getContext("2d");
    h.textBaseline = t.textBaseline;
    p.crossOrigin = "anonymous";
    p.width = parseInt(V);
    p.height = parseInt(W);
    p.style.position = "fixed";
    p.style.left = 0;
    p.style.top = 0;
    p.style.zIndex = 1E3;
    p.id = "PointJS-canvas_0";
    if ("object" == typeof ib) for (var mb in ib) mb.match(/margin|padding|position/) || (p.style[mb] = ib[mb]);
    m.addEvent("onload", "Window_Hide_Scroll", function () {
        g.document.body.style.overflow = "hidden";
        nb = {x: parseInt(p.style.left), y: parseInt(p.style.top)}
    });
    var nb = e(0, 0);
    m.attach(p);
    this.system.setStyle =
        function (a) {
            if ("object" == typeof a) for (var b in a) p.style[b] = a[b]
        };
    this.system.getCanvas = function () {
        return p
    };
    this.system.getContext = function () {
        return h
    };
    this.system.resize = function (a, b) {
        q = a || V;
        r = b || W;
        Q = q / 2;
        R = r / 2;
        p.width = q;
        p.height = r
    };
    this.system.initFullPage = function () {
        m.addEvent("gameResize", "PointJS_resizeGame", function () {
            q = m.getWH().w;
            r = m.getWH().h;
            Q = q / 2;
            R = r / 2;
            p.width = q;
            p.height = r;
            h.textBaseline = t.textBaseline
        });
        m.runEvent("gameResize", "PointJS_resizeGame")
    };
    var X = !1, nc = function () {
        X || (this.requestFullscreen ?
            (this.requestFullscreen(), X = !0) : this.mozRequestFullScreen ? (this.mozRequestFullScreen(), X = !0) : this.webkitRequestFullscreen && (this.webkitRequestFullscreen(), X = !0), q = m.getWH().w, r = m.getWH().h, Q = q / 2, R = r / 2, p.width = q, p.height = r)
    }, ob = function (a) {
        X = Kb(g.document.fullscreenElement || g.document.mozFullScreenElement || g.document.webkitFullscreenElement)
    };
    g.document.addEventListener("webkitfullscreenchange", ob);
    g.document.addEventListener("mozfullscreenchange", ob);
    g.document.addEventListener("fullscreenchange",
        ob);
    this.system.initFullScreen = function () {
        X || (g.document.documentElement.onclick = nc, Ca || (m.addEvent("gameResize", "PointJS_initFullScreen", function () {
            q = m.getWH().w;
            r = m.getWH().h;
            Q = q / 2;
            R = r / 2;
            p.width = q;
            p.height = r;
            h.textBaseline = t.textBaseline
        }), m.runEvent("gameResize", "PointJS_initFullScreen")))
    };
    this.system.exitFullScreen = function () {
        X && (m.delEvent("gameResize", "PointJS_initFullScreen"), g.document.exitFullscreen ? (g.document.exitFullscreen(), X = !1) : g.document.mozCancelFullScreen ? (g.document.mozCancelFullScreen(),
            X = !1) : g.document.webkitExitFullscreen && (g.document.webkitExitFullscreen(), X = !1), q = V, r = W, Q = q / 2, R = r / 2, p.width = q, p.height = r, g.document.documentElement.onclick = function () {
        })
    };
    this.system.isFullScreen = function () {
        return X
    };
    this.system.exitFullPage = function () {
        q = V;
        r = W;
        Q = q / 2;
        R = r / 2;
        p.width = q;
        p.height = r
    };
    var aa = !1, Ca = !1, Lb = V, Mb = W, Nb = !1;
    this.system.initFullScale = function (a) {
        Ca || (a && (Nb = !0), m.addEvent("gameResize", "PointJS_initFullScale", function () {
            var a = Lb, c = Mb, d = m.getWH();
            Nb ? (a = d.w, c = d.h) : d.w < d.h ? (c = d.w / q, a =
                d.w, c *= r) : d.h < d.w && (a = d.h / r, c = d.h, a *= q);
            Lb = a;
            Mb = c;
            aa = {w: a / q, h: c / r};
            p.style.width = a + "px";
            p.style.height = c + "px"
        }), m.runEvent("gameResize", "PointJS_initFullScale"), Ca = !0)
    };
    this.system.exitFullScale = function () {
        Ca && (Ca = !1, m.delEvent("gameResize", "PointJS_initFullScale"), p.style.width = V + "px", p.style.height = W + "px")
    };
    this.system.getWH = function () {
        return m.getWH()
    };
    var Da = null, Ob = function () {
        this.scene = new THREE.Scene
    }, pb = function (a, b) {
        this.scene = a;
        a.add(this.mesh);
        b.position && this.mesh.position.set(b.position.x,
            b.position.y, b.position.z)
    };
    pb.prototype = {
        setPosition: function (a) {
            this.mesh.position.x = a.x;
            this.mesh.position.y = a.y;
            this.mesh.position.z = a.z
        }, getPosition: function (a) {
            return e(this.mesh.position.x, this.mesh.position.y, this.mesh.position.z)
        }, move: function (a) {
            this.mesh.position.x += a.x;
            this.mesh.position.y += a.y;
            this.mesh.position.z += a.z
        }, turn: function (a) {
            this.mesh.rotation.x += a.x;
            this.mesh.rotation.y += a.y;
            this.mesh.rotation.z += a.z
        }
    };
    var Pb = function (a, b) {
        this.type = "CubeObject";
        this.obj = new THREE.CubeGeometry(b.size.x,
            b.size.y, b.size.y);
        this.mat = new THREE.MeshBasicMaterial({color: b.fillColor, wireframe: !1, wireframeLinewidth: 2});
        this.mesh = new THREE.Mesh(this.obj, this.mat);
        pb.call(this, a, b)
    };
    Z(pb, Pb);
    Ob.prototype = {
        newCubeObject: function (a) {
            return new Pb(this.scene, a)
        }, draw: function () {
            Da.render(this.scene, P)
        }
    };
    this.game.new3DScene = function () {
        return Da ? new Ob : H("Error 3D init")
    };
    this.camera3D = {
        setPosition: function (a) {
            P.position.set(a.x, a.y, a.z)
        }, getPosition: function () {
            return e(P.position.x, P.position.y, P.position.z)
        },
        move: function (a) {
            P.position.x += a.x;
            P.position.y += a.y;
            P.position.z += a.z
        }, lookPoint: function (a) {
            P.lookAt(a)
        }, lookObject: function (a) {
            P.lookAt(a.getPosition())
        }
    };
    if ("3D" == Ma || "3D2D" == Ma) if (THREE) {
        Da = new THREE.WebGLRenderer;
        Da.setSize(V, W);
        var P = new THREE.PerspectiveCamera(75, V / W, 1, 1E3);
        var fa = Da.domElement;
        fa.crossOrigin = "anonymous";
        fa.width = parseInt(V);
        fa.height = parseInt(W);
        fa.style.position = "fixed";
        fa.style.left = 0;
        fa.style.top = 0;
        fa.style.zIndex = 999;
        fa.id = "PointJS-canvas_1";
        m.attach(fa);
        "3D2D" == Ma ? console.log("PointJS Enabled 2D Render") :
            "3D" == Ma && m.remove(p)
    } else H("Error 3D init");
    var D = !1;
    this.actionControl.initActionControl = function () {
        n.touchControl.isTouchSupported() && (D = !0, n.touchControl.initTouchControl());
        n.mouseControl.initMouseControl();
        return this
    };
    this.actionControl.isPress = function () {
        return D ? n.touchControl.isPress() : n.mouseControl.isPress("LEFT")
    };
    this.actionControl.isDown = function () {
        return D ? n.touchControl.isDown() : n.mouseControl.isDown("LEFT")
    };
    this.actionControl.isUp = function () {
        return D ? n.touchControl.isUp() : n.mouseControl.isUp("LEFT")
    };
    this.actionControl.isInObject = function (a) {
        return D ? n.touchControl.isInObject(a) : n.mouseControl.isInObject(a)
    };
    this.actionControl.isInStatic = function (a) {
        return D ? n.touchControl.isInStatic(a) : n.mouseControl.isInStatic(a)
    };
    this.actionControl.isInDynamic = function (a) {
        return D ? n.touchControl.isInDynamic(a) : n.mouseControl.isInDynamic(a)
    };
    this.actionControl.isPeekObject = function (a) {
        return D ? n.touchControl.isPeekObject(a) : n.mouseControl.isPeekObject("LEFT", a)
    };
    this.actionControl.isPeekStatic = function (a) {
        return D ?
            n.touchControl.isPeekStatic(a) : n.mouseControl.isPeekStatic("LEFT", a)
    };
    this.actionControl.isPeekDynamic = function (a) {
        return D ? n.touchControl.isPeekDynamic(a) : n.mouseControl.isPeekDynamic("LEFT", a)
    };
    this.actionControl.getPosition = function (a) {
        return D ? n.touchControl.getPosition() : n.mouseControl.getPosition()
    };
    this.actionControl.getPositionS = function (a) {
        return D ? n.touchControl.getPositionS() : n.mouseControl.getPositionS()
    };
    this.actionControl.getMouse = function () {
        return n.mouseControl
    };
    this.actionControl.getTouch =
        function () {
            return D ? n.touchControl : !1
        };
    this.actionControl.getActiveControl = function () {
        return D ? n.touchControl : n.mouseControl
    };
    this.actionControl.getActiveControlName = function () {
        return D ? "touchControl" : "mouseControl"
    };
    this.actionControl.getSpeed = function () {
        if (!D) return n.mouseControl.getSpeed() || n.touchControl.getSpeed()
    };
    var qb = !1, Oa = {
        LEFT: 37,
        RIGHT: 39,
        UP: 38,
        DOWN: 40,
        SPACE: 32,
        CTRL: 17,
        SHIFT: 16,
        ALT: 18,
        ESC: 27,
        ENTER: 13,
        MINUS: 189,
        PLUS: 187,
        CAPS_LOCK: 20,
        BACKSPACE: 8,
        TAB: 9,
        Q: 81,
        W: 87,
        E: 69,
        R: 82,
        T: 84,
        Y: 89,
        U: 85,
        I: 73,
        O: 79,
        P: 80,
        A: 65,
        S: 83,
        D: 68,
        F: 70,
        G: 71,
        H: 72,
        J: 74,
        K: 75,
        L: 76,
        Z: 90,
        X: 88,
        V: 86,
        B: 66,
        N: 78,
        M: 77,
        0: 48,
        1: 49,
        2: 50,
        3: 51,
        4: 52,
        5: 53,
        6: 54,
        7: 55,
        8: 56,
        C: 67,
        9: 57,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123
    }, ta = {
        37: "LEFT",
        39: "RIGHT",
        38: "UP",
        40: "DOWN",
        32: "SPACE",
        17: "CTRL",
        16: "SHIFT",
        18: "ALT",
        27: "ESC",
        13: "ENTER",
        189: "MINUS",
        187: "PLUS",
        20: "CAPS_LOCK",
        8: "BACKSPACE",
        9: "TAB",
        81: "Q",
        87: "W",
        69: "E",
        82: "R",
        84: "T",
        89: "Y",
        85: "U",
        73: "I",
        79: "O",
        80: "P",
        65: "A",
        83: "S",
        68: "D",
        70: "F",
        71: "G",
        72: "H",
        74: "J",
        75: "K",
        76: "L",
        90: "Z",
        88: "X",
        86: "V",
        66: "B",
        78: "N",
        77: "M",
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        67: "C",
        57: "9",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12"
    }, oc = {
        8: !0,
        9: !0,
        13: !0,
        18: !0,
        16: !0,
        17: !0,
        27: !0,
        112: !0,
        113: !0,
        114: !0,
        115: !0,
        116: !0,
        117: !0,
        118: !0,
        119: !0,
        120: !0,
        121: !0,
        122: !0,
        123: !0
    };
    this.keyControl.getKeyList = function () {
        var a, b = [];
        for (a in Oa) b.push(a);
        return b
    };
    var ba = {}, Ea = {}, ma = {}, Fa = !1, Ga = !1,
        Pa = !1, Qa = !1, pc = function (a) {
            E(ma, function (a, c, d) {
                1 == a && (d[c] = 2)
            })
        };
    this.keyControl.getCountKeysDown = function () {
        var a = 0;
        E(ba, function (b, c) {
            b && a++
        });
        return a
    };
    this.keyControl.getAllKeysDown = function () {
        var a = [];
        E(ba, function (b, c) {
            b && a.push(ta[c])
        });
        return a
    };
    this.keyControl.getLastKeyPress = function () {
        return Qa ? ta[Qa] : !1
    };
    this.keyControl.isDown = function (a) {
        return 1 == ba[Oa[a]]
    };
    this.keyControl.isUp = function (a) {
        return 1 == Ea[Oa[a]]
    };
    this.keyControl.isPress = function (a) {
        return 1 == ma[Oa[a]]
    };
    this.keyControl.getInputChar =
        function () {
            return Fa
        };
    this.keyControl.getInputKey = function () {
        return ta[Ga]
    };
    this.keyControl.setInputMode = function (a) {
        Pa = a
    };
    this.keyControl.isInputMode = function () {
        return Pa
    };
    this.keyControl.exitKeyControl = function () {
        g.onkeydown = function () {
        };
        g.onkeypress = function () {
        };
        g.onkeyup = function () {
        };
        y.clear("key:down");
        y.clear("key:press");
        y.clear("key:up");
        m.delEvent("postLoop", "PointJS_clearAllKeyUp");
        m.delEvent("preLoop", "PointJS_KeyDownEvent");
        ba = {};
        Ea = {};
        ma = {};
        qb = Pa = Ga = Fa = !1
    };
    this.keyControl.initControl =
        this.keyControl.initKeyControl = function () {
            if (qb) return this;
            qb = !0;
            g.onkeydown = function (a) {
                if (Pa) return Ga = a.keyCode, oc[a.keyCode] ? (a.preventDefault(), !1) : !0;
                a.preventDefault();
                2 != ma[a.keyCode] && (ma[a.keyCode] = 1, Qa = a.keyCode, y.run("key:press", ta[a.keyCode]));
                ba[a.keyCode] = !0;
                return !1
            };
            g.onkeypress = function (a) {
                var b = !1;
                0 != a.which && 0 != a.charCode && 32 <= a.which && (b = String.fromCharCode(a.which));
                Fa = b
            };
            g.onkeyup = function (a) {
                a.preventDefault();
                1 == ba[a.keyCode] && (Ea[a.keyCode] = !0);
                ba[a.keyCode] = !1;
                y.run("key:up",
                    ta[a.keyCode]);
                delete ma[a.keyCode];
                delete ba[a.keyCode];
                return !1
            };
            m.addEvent("postLoop", "PointJS_clearAllKeyUp", function () {
                Ea = {};
                pc();
                Qa = Ga = Fa = !1
            });
            m.addEvent("preLoop", "PointJS_KeyDownEvent", function () {
                y.isEvent("key:down") && E(ba, function (a, b) {
                    a && y.run("key:down", ta[b])
                })
            });
            return this
        };
    var rb = !1, F = e(0, 0), Ra = e(0, 0);
    e(0, 0);
    var Ha = !0, Sa = "", Ta = !1, na = e(0, 0), Ua = !1, sb = {LEFT: 1, RIGHT: 3, MIDDLE: 2},
        tb = {1: "LEFT", 3: "RIGHT", 2: "MIDDLE"}, Va = !1, Wa = {}, Xa = {}, Ia = {}, ua = 0, Qb = function () {
            Wa = {};
            Xa = {};
            Ia = {};
            ua = 0;
            Ua = !1
        },
        qc = function () {
            E(Ia, function (a, b, c) {
                1 == a && (c[b] = 2)
            })
        }, Ya = function (a) {
            var b = 0, c = 0;
            a && (b = f.x, c = f.y);
            return e(b + F.x, c + F.y)
        };
    this.mouseControl.getPosition = function () {
        return Ya(1)
    };
    this.mouseControl.getPositionS = function () {
        return Ya()
    };
    this.mouseControl.setCursorImage = function (a) {
        a = "url('" + a + "'), auto";
        Sa != a && (Sa = a, g.document.body.style.cursor = Sa)
    };
    this.mouseControl.setVisible = function (a) {
        !Ha && !a || Ha && a || (Ha = 1 == a, g.document.body.style.cursor = Ha ? Sa : "none")
    };
    this.mouseControl.isVisible = function () {
        return Ha
    };
    this.mouseControl.isDown = function (a) {
        return Wa[sb[a]]
    };
    this.mouseControl.isUp = function (a) {
        return Xa[sb[a]]
    };
    this.mouseControl.isPress = function (a) {
        return 1 == Ia[sb[a]]
    };
    this.mouseControl.isMove = function () {
        return Ua
    };
    this.mouseControl.isInStatic = function (a) {
        var b = Ya(1);
        return b.x >= a.x && b.x <= a.x + a.w && b.y >= a.y && b.y <= a.y + a.h
    };
    this.mouseControl.isInDynamic = function (a) {
        return la(Ya(1), a)
    };
    this.mouseControl.isInObject = function (a) {
        return a.visible ? a.angle ? this.isInDynamic(a.getDynamicBox()) : this.isInStatic(a.getStaticBox()) :
            !1
    };
    this.mouseControl.isWheel = function (a) {
        return "UP" == a && 0 < ua || "DOWN" == a && 0 > ua
    };
    var Rb = function (a) {
        a.preventDefault();
        ua = a.wheelDelta ? a.wheelDelta : -a.detail;
        y.run("mouse:wheel", 0 > ua ? "DOWN" : "UP");
        return !1
    }, Za = !1, Sb = function () {
        Za && (Ta = u(g.document.pointerLockElement) || u(g.document.mozPointerLockElement) ? !0 : !1)
    };
    this.mouseControl.initMouseLock = function () {
        m.addEvent("onload", "initPointerLock", function () {
            Za = p.requestPointerLock || p.mozRequestPointerLock || !1;
            g.document.exitPointerLock = g.document.exitPointerLock ||
                g.document.mozExitPointerLock || !1;
            "onpointerlockchange" in g.document ? g.document.addEventListener("pointerlockchange", Sb, !1) : "onmozpointerlockchange" in g.document && g.document.addEventListener("mozpointerlockchange", Sb, !1);
            if (!Za) return H("error in initMouseLock : not supported");
            Ta || (p.onclick = Za)
        })
    };
    this.mouseControl.exitMouseLock = function () {
        g.document.exitPointerLock();
        p.onclick = function () {
        };
        na = e(0, 0)
    };
    this.mouseControl.unlockMouse = function () {
        na = e(0, 0);
        g.document.exitPointerLock()
    };
    this.mouseControl.isMouseLock =
        function () {
            return Ta
        };
    this.mouseControl.getSpeed = function () {
        return e(na.x, na.y)
    };
    this.mouseControl.isPeekStatic = function (a, b) {
        return this.isPress(a) ? this.isInStatic(b) : !1
    };
    this.mouseControl.isPeekDynamic = function (a, b) {
        return this.isPress(a) ? this.isInDynamic(b) : !1
    };
    this.mouseControl.isPeekObject = function (a, b) {
        return this.isPress(a) && b.visible ? this.isInDynamic(b.getDynamicBox()) : !1
    };
    this.mouseControl.initControl = this.mouseControl.initMouseControl = function () {
        if (rb) return this;
        rb = !0;
        g.onmousemove = function (a) {
            a.preventDefault();
            a.stopPropagation();
            if (Ta) {
                var b = a.movementY || a.mozMovementY || 0;
                F.x += a.movementX || a.mozMovementX || 0;
                F.y += b;
                return !1
            }
            F.x = a.pageX - nb.x;
            F.y = a.pageY - nb.y;
            aa && (F.x /= aa.w, F.y /= aa.h);
            na.x = F.x - Ra.x;
            na.y = F.y - Ra.y;
            Ra.x = F.x;
            Ra.y = F.y;
            y.run("mouse:move");
            Ua = !0;
            return !1
        };
        g.onmousedown = function (a) {
            a.preventDefault();
            a.stopPropagation();
            !a.which && a.button && (a.button & 1 ? a.which = 1 : a.button & 4 ? a.which = 2 : a.button & 2 && (a.which = 3));
            y.run("mouse:press", tb[a.which]);
            Va = tb[a.which];
            Wa[a.which] = !0;
            Ia[a.which] = 1
        };
        g.onmouseup =
            function (a) {
                a.preventDefault();
                a.stopPropagation();
                !a.which && a.button && (a.button & 1 ? a.which = 1 : a.button & 4 ? a.which = 2 : a.button & 2 && (a.which = 3));
                y.run("mouse:up", tb[a.which]);
                Va = !1;
                Wa[a.which] = !1;
                Xa[a.which] = !0;
                delete Ia[a.which]
            };
        g.oncontextmenu = g.onselectstart = g.ondragstart = function () {
            return !1
        };
        g.onmousewheel = Rb;
        g.addEventListener("DOMMouseScroll", Rb, !1);
        m.addEvent("preLoop", "PointJS_MouseEventDown", function () {
            Va && y.run("mouse:down", Va)
        });
        m.addEvent("postLoop", "PointJS_clearAllMouseUp", function () {
            Xa =
                {};
            qc();
            ua = 0;
            Ua = !1;
            na = e(0, 0)
        });
        return this
    };
    this.mouseControl.exitMouseControl = function () {
        y.clear("mouse:press");
        y.clear("mouse:down");
        y.clear("mouse:up");
        y.clear("mouse:move");
        y.clear("mouse:wheel");
        g.onmousemove = g.onmousedown = g.onmouseup = g.oncontextmenu = g.onselectstart = g.ondragstart = g.onmousewheel = function () {
        };
        m.delEvent("postLoop", "PointJS_clearAllMouseUp");
        m.delEvent("preLoop", "PointJS_MouseEventDown");
        Qb();
        rb = !1
    };
    var ub = !1, Ja = !1, $a = 0, ab = 0, I = 0, J = 0, w = e(0, 0), bb = [], Ka = e(0, 0), cb = e(0, 0);
    this.touchControl.isTouchSupported =
        function () {
            return !!("ontouchstart" in window)
        };
    this.touchControl.isMobileDevice = function () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(g.navigator.userAgent)
    };
    var Tb = function () {
        Ja = !1;
        ab = $a = 0;
        w = e(0, 0);
        bb = [];
        J = I = 0
    };
    this.touchControl.getFixPositionS = function () {
        return w.x || w.y ? e(w.x, w.y) : !1
    };
    this.touchControl.getFixPosition = function () {
        return w.x || w.y ? e(w.x + f.x, w.y + f.y) : !1
    };
    this.touchControl.getRun = function () {
        var a = 0, b = 0;
        w.x && w.x != I && (a = I - w.x);
        w.y && w.y != J && (b = J - w.y);
        return e(a,
            b)
    };
    this.touchControl.getVector = function () {
        var a = 0, b = 0;
        w.x && w.x != I && (a = I > w.x ? 1 : -1);
        w.y && w.y != J && (b = J > w.y ? 1 : -1);
        return e(a, b)
    };
    this.touchControl.getSpeed = function () {
        return e(Ka.x, Ka.y)
    };
    this.touchControl.isDown = function () {
        return Ja
    };
    this.touchControl.isPress = function () {
        return 1 == $a
    };
    this.touchControl.isUp = function () {
        return 1 == ab
    };
    this.touchControl.getPosition = function () {
        return e(I + f.x, J + f.y)
    };
    this.touchControl.getPositionS = function () {
        return e(I, J)
    };
    this.touchControl.isPeekStatic = function (a) {
        return this.isPress() ?
            this.isInStatic(a) : !1
    };
    this.touchControl.isPeekDynamic = function (a) {
        return this.isPress() ? this.isInDynamic(a) : !1
    };
    this.touchControl.isPeekObject = function (a) {
        return this.isPress() && a.visible ? this.isInDynamic(a.getDynamicBox()) : !1
    };
    this.touchControl.isInStatic = function (a) {
        var b = this.getPosition();
        return b.x >= a.x && b.x <= a.x + a.w && b.y >= a.y && b.y <= a.y + a.h
    };
    this.touchControl.isInDynamic = function (a) {
        return la(this.getPosition(), a)
    };
    this.touchControl.isInObject = function (a) {
        return a.visible ? a.angle ? this.isInDynamic(a.getDynamicBox()) :
            this.isInStatic(a.getStaticBox()) : !1
    };
    this.touchControl.getTouches = function () {
        return bb
    };
    this.touchControl.initControl = this.touchControl.initTouchControl = function () {
        if (ub) return this;
        ub = !0;
        g.addEventListener("touchstart", function (a) {
            a.preventDefault();
            I = a.targetTouches[0].pageX;
            J = a.targetTouches[0].pageY;
            bb = a.targetTouches;
            aa && (I /= aa.w, J /= aa.h);
            y.run("touch:press");
            w.x = I;
            w.y = J;
            Ja = !0;
            $a = 1;
            return !1
        }, {passive: !1});
        g.addEventListener("touchmove", function (a) {
            I = a.targetTouches[0].pageX;
            J = a.targetTouches[0].pageY;
            bb = a.targetTouches;
            aa && (I /= aa.w, J /= aa.h);
            Ka.x = I - cb.x;
            Ka.y = J - cb.y;
            y.run("touch:move");
            return !1
        }, !1);
        g.addEventListener("touchend", function (a) {
            w.x = 0;
            w.y = 0;
            Ja = !1;
            ab = 1;
            y.run("touch:up");
            return !1
        }, !1);
        n.touchControl.vibrate = function (a) {
            if (g.navigator.vibrate) return g.navigator.vibrate(a);
            if (g.navigator.oVibrate) return g.navigator.oVibrate(a);
            if (g.navigator.mozVibrate) return g.navigator.mozVibrate(a);
            if (g.navigator.webkitVibrate) return g.navigator.webkitVibrate(a)
        };
        m.addEvent("preLoop", "PointJS_TouchDownEvent",
            function () {
                Ja && y.run("touch:down")
            });
        m.addEvent("postLoop", "PointJS_touchStopPress", function () {
            ab = $a = 0;
            cb.x = I;
            cb.y = J;
            Ka = e(0, 0)
        });
        return this
    };
    this.touchControl.exitTouchControl = function () {
        g.ontouchstart = g.ontouchmove = g.ontouchend = function (a) {
        };
        m.delEvent("postLoop", "PointJS_touchStopPress");
        m.delEvent("preLoop", "PointJS_TouchDownEvent");
        Tb();
        ub = !1
    };
    var db = function (a, b, c, d) {
        return "rgba(" + a + ", " + b + ", " + c + ", " + (d ? d : 1) + ")"
    }, Ub = function (a, b) {
        a = "#" == a[0] ? a.substr(1, 6) : a;
        var c = parseInt(a.substr(0, 2), 16),
            d = parseInt(a.substr(2, 2), 16), k = parseInt(a.substr(4, 2), 16);
        return db(c, d, k, b)
    };
    this.colors.rgb = function (a, b, c) {
        return db(a, b, c, 1)
    };
    this.colors.rgba = function (a, b, c, d) {
        return db(a, b, c, d)
    };
    this.colors.hex2rgb = function (a) {
        return Ub(a, 1)
    };
    this.colors.hex2rgba = function (a, b) {
        return Ub(a, b)
    };
    this.colors.randomColor = function (a, b, c) {
        return db(ea(a, b), ea(a, b), ea(a, b), c || 1)
    };
    var u = function (a) {
        return "undefined" == typeof a || null == a ? !1 : !0
    }, Kb = function (a) {
        return u(a) && "" !== a && 0 !== a ? !0 : !1
    }, E = function (a, b) {
        var c, d;
        for (c in a) if ("undefined" !=
            typeof a[c] && (d = b(a[c], c, a)) && "break" == d) break
    }, v = function (a, b) {
        if (a.length) {
            var c, d;
            var k = 0;
            for (c = a.length; k < c && ("undefined" == typeof a[k] || !(d = b(a[k], k, a, 0 < k ? a[k - 1] : a[a.length - 1]) || !1) || "break" != d); k += 1) ;
        }
    };
    this.OOP.insertArrElement = function (a, b) {
        var c = a[b];
        a.splice(b, 1);
        return c
    };
    this.OOP.insertRandArrElement = function (a) {
        var b = ea(0, a.length - 1), c = a[b];
        a.splice(b, 1);
        return c
    };
    this.OOP.drawEach = function (a, b) {
        E(a, function (a) {
            a && a.draw && a.isInCamera() && (a.draw(), b && b(a))
        })
    };
    this.OOP.drawArr = function (a,
                                 b) {
        var c;
        var d = 0;
        for (c = a.length; d < c; d += 1) a[d] && a[d].draw && a[d].isInCamera() && (a[d].draw(), b && b(a[d], d))
    };
    var Vb = function (a) {
        a.length = 0
    }, rc = function (a, b) {
        var c = !1, d = kb(), k = !1, e = new XMLHttpRequest, f = function () {
            e.open("GET", a, !0);
            e.send()
        };
        e.onreadystatechange = function () {
            4 == e.readyState && (b(e.responseText), c && (k ? setTimeout(f, k) : f()))
        };
        this.start = function () {
            a = a.match(/\?/) ? a + ("&session_id=" + d) : a + ("?session_id=" + d);
            f();
            c = !0
        };
        this.setSID = function (a) {
            d = a
        };
        this.setTime = function (a) {
            k = a
        };
        this.stop = function () {
            c =
                !1
        };
        this.isActive = function () {
            return c
        }
    };
    this.OOP.readJSON = function (a, b) {
        var c = {}, d = new XMLHttpRequest;
        d.open("GET", a, !0);
        z.add();
        d.onreadystatechange = function () {
            4 == d.readyState && (c = d.responseText, c = JSON.parse(c), z.load(), b(c))
        };
        d.send()
    };
    this.OOP.toString = function (a, b) {
        var c, d = 0, k = "[";
        for (c in a) if (a.hasOwnProperty(c)) {
            var e = a[c];
            "number" == typeof e && b && (e = parseInt(e));
            k += (0 < d ? ", " : "") + c + " : " + e;
            d += 1
        }
        return k + "]"
    };
    this.OOP.sendGET = function (a, b, c) {
        var d = new XMLHttpRequest, k = "?";
        E(b, function (a, b) {
            k +=
                b + "=" + encodeURIComponent(a) + "&"
        });
        d.open("GET", a + k, !0);
        d.onreadystatechange = function () {
            4 == d.readyState && c(d.responseText)
        };
        d.send()
    };
    this.OOP.sendPOST = function (a, b, c) {
        var d = new XMLHttpRequest, k = "";
        E(b, function (a, b) {
            k += b + "=" + encodeURIComponent(a) + "&"
        });
        d.open("POST", a, !0);
        d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        d.onreadystatechange = function () {
            4 == d.readyState && c(d.responseText)
        };
        d.send(k)
    };
    this.OOP.sendPOSTScreen = function (a, b, c) {
        var d = new XMLHttpRequest;
        b = b + "=" + p.toDataURL("image/png");
        d.open("POST", a, !0);
        d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        d.onreadystatechange = function () {
            4 == d.readyState && c(d.responseText)
        };
        d.send(b)
    };
    this.OOP.isDef = u;
    this.OOP.isSet = Kb;
    this.OOP.forEach = E;
    this.OOP.forInt = function (a, b) {
        var c, d;
        for (c = 0; c < a && (!(d = b(c)) || "break" != d); c += 1) ;
    };
    this.OOP.forXY = function (a, b, c) {
        var d, k, e;
        for (k = 0; k < b; k += 1) for (d = 0; d < a && (!(e = c(d, k)) || "break" != e); d += 1) ;
    };
    this.OOP.forArr = v;
    this.OOP.clearArr = Vb;
    this.OOP.fillArr = function (a, b, c) {
        a.length = 0;
        var d;
        for (d = 0; d < b; d += 1) a.push(c(d, 0 < d ? a[d - 1] : !1));
        return a
    };
    this.OOP.delObject = function (a, b) {
        var c;
        var d = 0;
        for (c = a.length; d < c; d += 1) if (a[d].id == b.id) return a.splice(d, 1), !0
    };
    this.OOP.randArrElement = function (a) {
        return a[ea(0, a.length - 1)]
    };
    this.OOP.readJSONSync = function (a) {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.send();
        a = b.responseText;
        return a = JSON.parse(a)
    };
    this.OOP.sendGETSync = function (a, b) {
        var c = new XMLHttpRequest, d = "?";
        E(b, function (a, b) {
            d += b + "=" + encodeURIComponent(a) + "&"
        });
        c.open("GET", a + d, !1);
        c.send();
        return c.responseText
    };
    this.OOP.sendPOSTSync = function (a, b) {
        var c = new XMLHttpRequest, d = "";
        E(b, function (a, b) {
            d += b + "=" + encodeURIComponent(a) + "&"
        });
        c.open("POST", a, !1);
        c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        c.send(d);
        return c.responseText
    };
    this.OOP.newAJAXListener = function (a, b) {
        return new rc(a, b)
    };
    this.OOP.runCode = function (a) {
        (new Function("", a))()
    };
    var K = {};
    this.OOP.includeSync = function (a, b) {
        if (K[a]) K[a].loaded && !b && K[a].code(); else {
            K[a] = {
                loaded: !1, code: function () {
                    console.log(a +
                        " is loading")
                }
            };
            var c = new XMLHttpRequest;
            c.open("GET", a, !1);
            c.send();
            K[a].code = new Function("", c.responseText);
            K[a].loaded = !0;
            K[a].code()
        }
    };
    this.OOP.include = function (a, b, c) {
        if (K[a]) K[a].loaded && !c && K[a].code(), b && b(); else {
            K[a] = {
                loaded: !1, code: function () {
                    console.log(a + " is loading")
                }
            };
            var d = new XMLHttpRequest;
            d.open("GET", a, !0);
            d.onreadystatechange = function () {
                4 == d.readyState && (K[a].code = new Function("", d.responseText), K[a].loaded = !0, K[a].code(), b && b())
            };
            d.send()
        }
    };
    this.OOP.clone = function (a, b) {
        var c =
            Wb(a);
        E(a, function (a, b) {
            -1 === ["id", "type"].indexOf(b) && (c[b] = a)
        });
        b && (c.onClone = b, c.onClone(c), delete c.onClone);
        return c
    };
    var va = 60, L = Date.now(), eb = 0, fb = -1, Xb = L, ia = {};
    this.game.setFPS = function (a) {
        va = 0 < a ? a : 60
    };
    this.game.getFPS = function () {
        return va
    };
    this.game.getDT = function (a) {
        a || (a = 1E3);
        return eb / a
    };
    this.game.getTime = function () {
        return L
    };
    var Yb = function () {
        return g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.oRequestAnimationFrame || g.msRequestAnimationFrame ||
            function (a) {
                g.setTimeout(a, 1E3 / va)
            }
    }, wa = Yb(), Zb = function () {
        L = Date.now();
        if (Hb) {
            var a = e(0, 0), b = e(q, r);
            h.clearRect(a.x, a.y, b.x, b.y)
        }
        m.runEvent("preLoop")
    }, $b = function () {
        m.runEvent("postLoop");
        -1 != fb && (eb = L - fb);
        fb = L
    }, M = {
        func: function () {
            console.log('please, use a "setLoop" function.');
            wa = function () {
            }
        }, events: !1, start: !1, end: !1, audio: !1, fps: !1, name: "NotLoop"
    }, ac = function () {
        M.audio && v(M.audio, function (a) {
            a.stop()
        })
    };
    this.game.newLoop = function (a, b, c, d, k) {
        "function" == typeof b ? ia[a] = {
            events: k || !1, func: b, start: c ||
            !1, end: d || !1, audio: !1, fps: !1, name: a
        } : ja("error in newLoop : " + b + " is not a function")
    };
    this.game.newLoopFromClassObject = function (a, b) {
        if (!b.update) return ja('error in newLoopFromClassObject : function "update" not found');
        ia[a] = {
            events: b.events || !1,
            func: b.update,
            start: b.entry || !1,
            end: b.exit || !1,
            audio: !1,
            fps: !1,
            name: a
        }
    };
    this.game.newLoopFromConstructor = function (a, b) {
        n.game.newLoopFromClassObject(a, new b)
    };
    this.game.setLoopSound = function (a, b) {
        var c;
        ia[a].audio || (ia[a].audio = []);
        for (c = 0; c < b.length; c +=
            1) ia[a].audio.length = 0, b[c].setNextPlay(b[c + 1 == b.length ? 0 : c + 1]), ia[a].audio.push(b[c])
    };
    this.game.setLoop = function (a) {
        if (!ia[a]) return ja("setLoop : " + a + " is no a Loop");
        ac();
        Qb();
        ba = {};
        Ea = {};
        ma = {};
        Ga = Fa = !1;
        Tb();
        vb(e(0, 0));
        M.end && M.end();
        M = ia[a];
        y.loadFromEvents(M.events);
        M.start && M.start();
        M.audio && M.audio[0].play()
    };
    var y = new function () {
        var a = {"mouse:click": []}, b = this;
        this.add = function (b, d) {
            a[b] || (a[b] = []);
            a[b].push(d)
        };
        this.run = function (b, d) {
            a[b] && v(a[b], function (a) {
                return a(d)
            })
        };
        this.clear = function (b) {
            a[b] &&
            (a[b].length = 0)
        };
        this.clearAll = function () {
            E(a, function (a) {
                a.length = 0
            })
        };
        this.loadFromEvents = function (a) {
            b.clearAll();
            a && E(a, function (a, c) {
                b.add(c, a)
            })
        };
        this.isEvent = function (b) {
            return !!a[b]
        }
    }, wb = function () {
        if (60 > va) {
            var a = 1E3 / va;
            try {
                L = Date.now(), L - Xb > a && (Zb(), M.func(eb), Xb = L, $b())
            } catch (b) {
                za && Na(b), jb && (za || Na(b), ja())
            }
            wa(wb);
            return !1
        }
        try {
            Zb(), M.func(eb), $b()
        } catch (b) {
            za && Na(b), jb && (za || Na(b), ja())
        }
        wa(wb)
    }, bc = function (a) {
        ka || (ka = !0, va = a || 60, wa(wb))
    }, ja = function (a) {
        if (!ka) return H(u(a) ? a : "game is stop");
        ka = !1;
        ac();
        wa = function () {
            H(u(a) ? a : "game is stop")
        }
    };
    this.game.getWH = function () {
        return {w: q, h: r, w2: Q, h2: R}
    };
    this.game.getWH2 = function () {
        return {w: q / 2, h: r / 2}
    };
    this.game.getResolution = function () {
        return Math.min(q / V, r / W)
    };
    this.game.startLoop = function (a, b) {
        this.setLoop(a);
        this.start(b)
    };
    this.game.start = bc;
    this.game.stop = ja;
    this.game.resume = function (a) {
        if (!ka) return M.audio && M.audio[0].play(), H(a || "game is run"), wa = Yb(), fb = -1, bc(), !1
    };
    var sc = [], tc = 0, A = function (a) {
        this.type = "BaseObject";
        this.id = tc += 1;
        this.x =
            a.x || 0;
        this.y = a.y || 0;
        this.w = a.w || 0;
        this.h = a.h || 0;
        this.ondraw = a.ondraw ? a.ondraw : !1;
        this.parent = !1;
        this.children = [];
        this.fillColor = a.fillColor || !1;
        this.strokeColor = a.strokeColor || t.strokeStyle;
        this.strokeWidth = a.strokeWidth || 0;
        this.angle = a.angle || 0;
        this.alpha = u(a.alpha) ? a.alpha : 1;
        this.center = e(0, 0);
        this.box = {x: 0, y: 0, w: 0, h: 0};
        this.visible = u(a.visible) ? a.visible : !0;
        this.flip = e(0, 0);
        this.setShadow(a);
        a.userData && this.setUserData(a.userData);
        a.center && this.setCenter(a.center);
        a.box && this.setBox(a.box);
        a.size && this.setSize(a.size);
        a.sizeC && this.setSizeC(a.sizeC);
        a.position && this.setPosition(a.position);
        a.positionC && this.setPositionC(a.positionC);
        "function" == typeof a.oncreate && (this.oncreate = a.oncreate, this.oncreate(), delete this.oncreate);
        sc.push(this)
    };
    A.prototype = {
        getID: function () {
            return this.id
        }, getType: function () {
            return this.type
        }, getParent: function () {
            return this.parent
        }, addChild: function (a) {
            a && a.id != this.id && (a.parent = this, this.children.push(a), a.move(this.getPosition()), a.setPositionC(O(a.getPositionC(),
                this.getPositionC(), this.angle)), a.turn(this.angle))
        }, delChild: function (a) {
            a.parent = !1;
            var b;
            var c = 0;
            for (b = this.children.length; c < b; c += 1) if (this.children[c].id == a.id) {
                this.children.splice(c, 1);
                break
            }
        }, delParent: function () {
            this.parent.delChild(this)
        }, setBox: function (a) {
            a.offset && (this.box.x = a.offset.x || 0, this.box.y = a.offset.y || 0);
            a.size && (this.box.w = a.size.w || 0, this.box.h = a.size.h || 0)
        }, isArrIntersect: function (a) {
            var b;
            var c = 0;
            for (b = a.length; c < b; c += 1) if (a[c].id != this.id && this.isIntersect(a[c])) return a[c];
            return !1
        }, isArrInside: function (a) {
            var b;
            var c = 0;
            for (b = a.length; c < b; c += 1) if (this.isDynamicInside(a[c].getDynamicBox())) return a[c];
            return !1
        }, getNearest: function (a) {
            var b = 0, c = !1, d;
            var k = 0;
            for (d = a.length; k < d; k += 1) if (this.id != a[k].id) {
                !1 === c && (c = this.getDistanceC(a[k].getPositionC()), b = k);
                var e = this.getDistanceC(a[k].getPositionC());
                e < c && (c = e, b = k)
            }
            return a[b]
        }, setFlip: function (a, b) {
            u(a) && this.flip.x != a && (this.flip.x = a);
            u(b) && this.flip.y != b && (this.flip.y = b)
        }, setUserData: function (a) {
            for (var b in a) u(this[b]) ||
            (this[b] = a[b])
        }, setShadow: function (a) {
            this.shadowColor = a.shadowColor || !1;
            this.shadowBlur = u(a.shadowBlur) ? a.shadowBlur : 3;
            this.shadowX = a.shadowX || 0;
            this.shadowY = a.shadowY || 0
        }, getDynamicBox: function () {
            var a = this.getPosition(1);
            return 0 == this.angle ? [e(this.x + this.box.x, this.y + this.box.y), e(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y), e(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y + this.h + this.box.h), e(this.x + this.box.x, this.y + this.box.y + this.h + this.box.h)] : [O(e(this.x + this.box.x, this.y +
                this.box.y), a, this.getAngle()), O(e(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y), a, this.getAngle()), O(e(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y + this.h + this.box.h), a, this.getAngle()), O(e(this.x + this.box.x, this.y + this.box.y + this.h + this.box.h), a, this.getAngle())]
        }, isDynamicIntersect: function (a) {
            if (3 > a.length) return !1;
            var b = this.getDynamicBox(), c;
            var d = 0;
            for (c = b.length; d < c; d += 1) if (la(b[d], a)) return !0;
            d = 0;
            for (c = a.length; d < c; d += 1) if (la(a[d], b)) return !0;
            return !1
        }, isIntersect: function (a) {
            return a.visible ?
                this.angle || a.angle ? this.isDynamicIntersect(a.getDynamicBox()) : this.isStaticIntersect(a.getStaticBox()) : !1
        }, isDynamicInside: function (a) {
            if (3 > a.length) return !1;
            var b = this.getDynamicBox(), c, d = 0;
            var k = 0;
            for (c = b.length; k < c; k += 1) la(b[k], a) && (d += 1);
            return d == b.length ? !0 : !1
        }, drawDynamicBox: function (a) {
            N(this, 1);
            h.shadowColor = "transparent";
            xa(e(this.x + this.box.x, this.y + this.box.y), B(this.w + this.box.w, this.h + this.box.h), !1, a || "yellow", 2);
            cc(e(this.x + this.w / 2 + this.center.x, this.y + this.h / 2 + this.center.y), 10,
                a || "yellow");
            G()
        }, drawStaticBox: function (a) {
            h.shadowColor = "transparent";
            xa(e(this.x + this.box.x, this.y + this.box.y), B(this.w + this.box.w, this.h + this.box.h), !1, a || "yellow", 2);
            cc(e(this.x + this.w / 2 + this.center.x, this.y + this.h / 2 + this.center.y), 10, a || "yellow")
        }, isStaticIntersect: function (a) {
            return this.y + this.box.y + this.h + this.box.h >= a.y && this.x + this.box.x + this.w + this.box.w >= a.x && this.x + this.box.x < a.x + a.w && this.y + this.box.y < a.y + a.h
        }, getStaticBox: function () {
            return {
                x: this.x + this.box.x, y: this.y + this.box.y, w: this.w +
                this.box.w, h: this.h + this.box.h
            }
        }, setAlpha: function (a) {
            this.alpha != a && (this.alpha = 0 <= a ? 1 >= a ? a : 1 : 0)
        }, transparent: function (a) {
            this.setAlpha(this.alpha + a)
        }, getAlpha: function () {
            return this.alpha
        }, rotate: function (a) {
            this.setAngle(Math.atan2(a.y - this.getPosition(1).y, a.x - this.getPosition(1).x) * (180 / Math.PI))
        }, setCenter: function (a) {
            this.center = e(a.x, a.y)
        }, nullCenter: function (a) {
            a || (a = e(0, 0));
            this.center = e(-this.w / 2 + a.x, -this.h / 2 + a.y)
        }, getCenter: function () {
            return e(this.center.x, this.center.y)
        }, getBox: function () {
            return this.box
        },
        move: function (a) {
            this.prevPosition = this.getPosition();
            this.x += a.x;
            this.y += a.y
        }, circling: function (a, b, c) {
            u(this.circlingAnglePointJS) || (this.circlingAnglePointJS = 0);
            this.x = a.x + b * Math.cos(x(this.circlingAnglePointJS));
            this.y = a.y + b * Math.sin(x(this.circlingAnglePointJS));
            this.circlingAnglePointJS = 360 < this.circlingAnglePointJS ? 0 : this.circlingAnglePointJS + c
        }, circlingC: function (a, b, c) {
            u(this.circlingAnglePointJS) || (this.circlingAnglePointJS = 0);
            this.setPositionC(e(a.x + b * Math.cos(x(this.circlingAnglePointJS)),
                a.y + b * Math.sin(x(this.circlingAnglePointJS))));
            this.circlingAnglePointJS = 360 < this.circlingAnglePointJS ? 0 : this.circlingAnglePointJS + c
        }, motion: function (a, b, c) {
            u(this.motionPercentPointJS) || (this.motionPercentPointJS = 0);
            this.x = a.x + b.w * Math.cos(x(this.motionPercentPointJS));
            this.y = a.y + b.h * Math.sin(x(this.motionPercentPointJS));
            this.motionPercentPointJS = 360 < this.motionPercentPointJS ? 0 : this.motionPercentPointJS + c
        }, motionC: function (a, b, c) {
            u(this.motionPercentPointJS) || (this.motionPercentPointJS = 0);
            this.setPositionC(e(a.x +
                b.w * Math.cos(x(this.motionPercentPointJS)), a.y + b.h * Math.sin(x(this.motionPercentPointJS))));
            this.motionPercentPointJS = 360 < this.motionPercentPointJS ? 0 : this.motionPercentPointJS + c
        }, scale: function (a) {
            this.w *= a;
            this.h *= a
        }, scaleC: function (a) {
            var b = this.w, c = this.h;
            this.scale(a);
            this.move(e(-((this.w - b) / 2), -((this.h - c) / 2)))
        }, getPosition: function (a) {
            return 1 == a ? e(this.x + (this.w / 2 + this.center.x), this.y + (this.h / 2 + this.center.y)) : 2 == a ? (a = e(this.x + this.w / 2, this.y + this.h / 2), this.angle && (a = O(a, this.getPosition(1),
                this.angle)), e(a.x, a.y)) : e(this.x, this.y)
        }, getPositionC: function () {
            return e(this.x + (this.w / 2 + this.center.x), this.y + (this.h / 2 + this.center.y))
        }, getPositionS: function () {
            return e(this.x + f.x, this.y + f.x)
        }, getPositionCS: function () {
            return e(this.x + (this.w / 2 + this.center.x) + f.x, this.y + (this.h / 2 + this.center.y) + f.y)
        }, setPosition: function (a) {
            this.getPosition();
            !1 !== a.x && (this.x = a.x);
            !1 !== a.y && (this.y = a.y)
        }, setPositionS: function (a) {
            this.getPosition();
            !1 !== a.x && (this.x = a.x + f.x);
            !1 !== a.y && (this.y = a.y + f.y)
        }, setPositionC: function (a) {
            this.getPosition();
            !1 !== a.x && (this.x = -(this.w / 2 + this.center.x) + a.x);
            !1 !== a.y && (this.y = -(this.h / 2 + this.center.y) + a.y)
        }, setPositionCS: function (a) {
            this.getPosition();
            !1 !== a.x && (this.x = -(this.w / 2 + this.center.x) + a.x + f.x);
            !1 !== a.y && (this.y = -(this.h / 2 + this.center.y) + a.y + f.y)
        }, getSize: function () {
            return B(this.w, this.h)
        }, setSize: function (a) {
            this.w = a.w;
            this.h = a.h
        }, setSizeC: function (a) {
            this.w = a.w;
            this.h = a.h;
            this.move(e(-(a.w / 2), -(a.h / 2)))
        }, turn: function (a) {
            this.angle += a
        }, rotateForAngle: function (a, b) {
            0 > this.angle && (this.angle +=
                360);
            0 > a && (a += 360);
            var c = this.angle - a;
            180 < c ? c -= 360 : -180 > c && (c += 360);
            c >= -b - .5 && c <= b + .5 ? this.angle = a : c > b + .5 ? this.angle -= b : c < -b - .5 && (this.angle += b)
        }, rotateForPoint: function (a, b) {
            var c = Ba(this.getPositionC(), a);
            this.rotateForAngle(c, b)
        }, rotateForObject: function (a, b) {
            var c = Ba(this.getPositionC(), a.getPositionC());
            this.rotateForAngle(c, b)
        }, moveTo: function (a, b) {
            var c = x(Ba(this.getPosition(), a));
            this.prevPosition = this.getPosition();
            this.x += b * Math.cos(c);
            this.y += b * Math.sin(c)
        }, moveToC: function (a, b) {
            var c =
                x(Ba(this.getPositionC(), a));
            this.prevPosition = this.getPosition();
            this.x += b * Math.cos(c);
            this.y += b * Math.sin(c)
        }, moveAngle: function (a, b) {
            b = x(u(b) ? b : this.angle);
            this.prevPosition = this.getPosition();
            this.x += a * Math.cos(b);
            this.y += a * Math.sin(b)
        }, moveTime: function (a, b) {
            b = b || 1;
            var c = this.getPosition();
            this.move(e((a.x - c.x) / b, (a.y - c.y) / b))
        }, moveTimeC: function (a, b) {
            b = b || 1;
            var c = this.getPosition(1);
            this.move(e((a.x - c.x) / b, (a.y - c.y) / b))
        }, getAngle: function () {
            return this.angle
        }, setAngle: function (a) {
            this.angle !=
            a && (this.angle = a % 360)
        }, getDistance: function (a) {
            return Math.sqrt(Math.pow(a.x - this.getPosition(2).x, 2) + Math.pow(a.y - this.getPosition(2).y, 2))
        }, getDistanceC: function (a) {
            return Math.sqrt(Math.pow(a.x - this.getPosition(1).x, 2) + Math.pow(a.y - this.getPosition(1).y, 2))
        }, setVisible: function (a) {
            this.visible = 1 == a
        }, isVisible: function () {
            return this.visible
        }, isInCamera: function () {
            return this.angle ? this.isInCameraDynamic() : this.isInCameraStatic()
        }, isInCameraStatic: function () {
            return this.x + this.w < f.x || this.x > f.x +
            q || this.y + this.h < f.y || this.y > f.y + r ? !1 : !0
        }, isInCameraDynamic: function () {
            var a = this.getDynamicBox(), b = [e(f.x, f.y), e(f.x + q, f.y), e(f.x + q, f.y + r), e(f.x, f.y + r)], c,
                d = 0;
            var k = 0;
            for (c = a.length; k < c; k += 1) la(a[k], b) && (d += 1);
            return 0 < d
        }, onCollision: function (a) {
            H('function "onCollision, onArrCollision" is DEPRECATED, use a "isIntersect, isArrIntersect"')
        }, onArrCollision: function (a) {
            var b;
            var c = 0;
            for (b = a.length; c < b; c += 1) if (this.id != a[c].id) this.onCollision(a[c])
        }, draw: function () {
        }
    };
    this.game.newBaseObject = function (a) {
        return new A(a)
    };
    var xb = function (a) {
        A.call(this, a);
        this.type = "TriangleObject"
    };
    Z(A, xb);
    xb.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) N(this), a = !0;
            La(this.x, this.y, [e(this.w / 2, 0), e(this.w, this.h), e(0, this.h)], this.fillColor, this.strokeWidth ? this.strokeColor : !1, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            a && G()
        }
    };
    this.game.newTriangleObject = function (a) {
        return new xb(a)
    };
    var yb = function (a) {
        A.call(this, a);
        this.type = "RectObject"
    };
    Z(A, yb);
    yb.prototype.draw =
        function () {
            if (this.visible && this.alpha) {
                var a = !1;
                if (this.angle || 1 != this.alpha || this.shadowColor) N(this), a = !0;
                xa(e(this.x, this.y), B(this.w, this.h), this.fillColor, this.strokeColor, this.strokeWidth);
                if (this.ondraw) this.ondraw();
                a && G()
            }
        };
    this.game.newRectObject = function (a) {
        return new yb(a)
    };
    var zb = function (a) {
        A.call(this, a);
        this.type = "RoundRectObject";
        this.radius = a.radius || 1
    };
    Z(A, zb);
    zb.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) N(this),
                a = !0;
            Ab(e(this.x, this.y), B(this.w, this.h), this.radius, this.fillColor, this.strokeColor, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            a && G()
        }
    };
    this.game.newRoundRectObject = function (a) {
        return new zb(a)
    };
    var oa = function (a) {
        A.call(this, a);
        this.radius = a.radius || 5;
        a.scale && (this.radius *= a.scale);
        this.w = 2 * this.radius;
        this.h = 2 * this.radius;
        this.type = "CircleObject";
        a.positionC && this.setPositionC(a.positionC)
    };
    Z(A, oa);
    oa.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha ||
                this.shadowColor) N(this), a = !0;
            ya(e(this.x, this.y), this.radius, this.fillColor, this.strokeColor, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            a && G()
        }
    };
    oa.prototype.scale = function (a) {
        this.w *= a || 0;
        this.h *= a || 0;
        this.radius *= a ? a / 2 : 0
    };
    oa.prototype.scaleC = function (a) {
        var b = this.w, c = this.h;
        this.w *= a || 0;
        this.h *= a || 0;
        this.radius *= a;
        this.move(e(-((this.w - b) / 2), -((this.h - c) / 2)))
    };
    oa.prototype.getRadius = function () {
        return this.radius
    };
    oa.prototype.setRadius = function (a) {
        a && this.radius != a && (this.radius = a, this.w =
            2 * a, this.h = 2 * a)
    };
    this.game.newCircleObject = function (a) {
        return new oa(a)
    };
    var Bb = function (a) {
        this.file = a.file;
        this.w = a.w;
        this.h = a.h;
        this.read = {x: 0, y: 0, w: 0, h: 0};
        a.read && (this.read.w = a.read.w || 0, this.read.h = a.read.h || 0, this.read.x = a.read.x || 0, this.read.y = a.read.y || 0);
        this.countX = a.countX;
        this.countY = a.countY;
        this.fullW = this.countX * this.w;
        this.fullH = this.countY * this.h;
        this.cnv = g.document.createElement("canvas");
        this.cnv.width = this.w;
        this.cnv.height = this.h;
        this.ctx = this.cnv.getContext("2d");
        this.loaded =
            !1;
        this.x = a.x || 0;
        this.y = a.y || 0;
        a = g.document.createElement("img");
        var b = this;
        a.onload = function () {
            b.ctx.drawImage(this, b.read.x ? b.read.x : 0, b.read.y ? b.read.y : 0, b.read.w ? b.read.w : this.width, b.read.h ? b.read.h : this.height, 0, 0, b.w, b.h);
            b.loaded = !0;
            z.load()
        };
        a.src = this.file;
        z.add()
    };
    Bb.prototype.draw = function () {
        if (this.loaded) {
            var a = -f.x + this.x, b = -f.y + this.y, c, d;
            for (d = 0; d < this.countY; d += 1) if (!(this.y + d * this.h + this.h < f.y || this.y + d * this.h > f.y + r)) for (c = 0; c < this.countX; c += 1) this.x + c * this.w + this.w < f.x || this.x +
            c * this.w > f.x + q || h.drawImage(this.cnv, a + c * this.w, b + d * this.h, this.w, this.h)
        }
    };
    Bb.prototype.getSize = function () {
        return this.loaded ? B(this.fullW, this.fullH) : B()
    };
    this.game.newBackgroundObject = function (a) {
        return new Bb(a)
    };
    var Cb = function (a) {
        A.call(this, a);
        this.type = "EllipsObject"
    };
    Z(A, Cb);
    Cb.prototype.draw = function () {
        if (this.visible && this.alpha) {
            N(this);
            ya(e(this.x, this.y), this.h / 2, this.fillColor, this.strokeColor, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            G()
        }
    };
    this.game.newEllipsObject = function (a) {
        return new Cb(a)
    };
    var ca = function (a) {
        A.call(this, a);
        this.type = "TextObject";
        this.text = a.text || "TextObject";
        this.color = a.color || "";
        this.size = a.size || 10;
        a.scale && (this.size *= a.scale);
        this.font = a.font || "sans-serif";
        this.style = a.style || "";
        this.align = "left";
        this.padding = a.padding || 2;
        this.w = Db(this.text, this.style, this.size, this.font) + 2 * this.padding;
        this.h = this.size + 2 * this.padding;
        this.strokeColorText = a.strokeColorText || !1;
        this.strokeWidthText = a.strokeWidthText || !1;
        this.textDY = -this.size / 7;
        a.positionC && this.setPositionC(a.positionC)
    };
    Z(A, ca);
    ca.prototype.reStyle = function (a) {
        this.text = a.text || this.text;
        this.color = a.color || this.color;
        this.size = a.size || this.size;
        this.font = a.font || this.font;
        this.style = a.style || this.style;
        this.padding = a.padding || this.padding;
        this.w = Db(this.text, this.style, this.size, this.font) + 2 * this.padding;
        this.h = this.size + 2 * this.padding;
        this.strokeColorText = a.strokeColorText || this.strokeColorText;
        this.strokeWidthText = a.strokeWidthText || this.strokeWidthText;
        this.strokeColor = a.strokeColor || this.strokeColor;
        this.strokeWidth =
            a.strokeWidth || this.strokeWidth;
        this.fillColor = a.fillColor || this.fillColor;
        this.textDY = -this.size / 7
    };
    ca.prototype.setText = function (a) {
        this.text != a && this.reStyle({text: a})
    };
    ca.prototype.getText = function () {
        return this.text
    };
    ca.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) N(this), a = !0;
            (this.fillColor || this.strokeColor) && xa(e(this.x, this.y), B(this.w, this.h), this.fillColor, this.strokeColor, this.strokeWidth);
            pa(e(this.x + this.padding, this.textDY +
                this.y + this.padding), this.text, this.color, this.size, this.font, this.style, this.align, this.strokeColorText, this.strokeWidthText);
            if (this.ondraw) this.ondraw();
            a && G()
        }
    };
    ca.prototype.scale = function (a) {
        this.reStyle({size: this.size * a})
    };
    ca.prototype.scaleC = function (a) {
        var b = this.w, c = this.h;
        this.reStyle({size: this.size * a});
        this.move(e(-((this.w - b) / 2), -((this.h - c) / 2)))
    };
    ca.prototype.setSize = function (a) {
        this.size != a && this.reStyle({size: a})
    };
    ca.prototype.setSizeC = function (a) {
        this.size != a && (this.reStyle({size: a}),
            this.move(e(-a / 2, -a / 2)))
    };
    var Db = function (a, b, c, d) {
        var k = g.document.createElement("canvas").getContext("2d");
        k.font = b + c + "px " + d;
        return k.measureText(a).width
    };
    this.OOP.getTextWidth = function (a) {
        return Db(a.text, a.style || "", a.size || 10, a.font || "sans-serif")
    };
    this.game.newTextObject = function (a) {
        return new ca(a)
    };
    var S = function (a) {
        A.call(this, a);
        this.type = "PolygonObject";
        this.points = [];
        this.dX = this.dY = 0;
        var b = this;
        a.points && v(a.points, function (a) {
            b.addPoint(a)
        });
        this.pointColor = a.pointColor || !1
    };
    Z(A, S);
    S.prototype.addPoint = function (a) {
        this.dY = this.dX = 0;
        var b = this;
        this.y + a.y < this.y && (this.dY = Math.abs(this.y + a.y - this.y), v(this.points, function (a) {
            a.y += b.dY
        }));
        this.x + a.x < this.x && (this.dX = Math.abs(this.x + a.x - this.x), b = this, v(this.points, function (a) {
            a.x += b.dX
        }));
        this.points.push(e(a.x + this.dX, a.y + this.dY));
        this.h = this.w = 0;
        b = this;
        v(this.points, function (a) {
            b.h += b.y + a.y > b.y + b.h ? a.y - b.h : 0;
            b.w += b.x + a.x > b.x + b.w ? a.x - b.w : 0
        })
    };
    S.prototype.delPoint = function (a) {
        var b, c = this.getPoints();
        this.clearPoints();
        var d =
            0;
        for (b = c.length; d < b; d += 1) d != a && this.addPoint(c[d])
    };
    S.prototype.clearPoints = function () {
        this.points = [];
        this.count = 0
    };
    S.prototype.getPoints = function () {
        return this.points
    };
    S.prototype.getCount = function () {
        return this.points.length
    };
    S.prototype.getPoint = function (a) {
        return this.points[a]
    };
    S.prototype.scale = function (a) {
    };
    S.prototype.drawDynamicBox = function (a) {
        var b = !1;
        if (this.angle || 1 != this.alpha || this.shadowColor) N(this), b = !0;
        La(this.x, this.y, this.points, this.fillColor, a || "yellow", 2, "red");
        b && G()
    };
    S.prototype.getDynamicBox =
        function () {
            var a = [];
            if (this.angle) {
                var b = this.getPosition(1);
                var c = this;
                v(this.points, function (d) {
                    a.push(O(sa(d, e(c.x, c.y)), b, c.getAngle()))
                })
            } else c = this, v(this.points, function (b) {
                a.push(sa(b, e(c.x, c.y)))
            });
            return a
        };
    S.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) N(this), a = !0;
            La(this.x, this.y, this.points, this.fillColor, this.strokeColor, this.strokeWidth, this.pointColor);
            if (this.ondraw) this.ondraw();
            a && G()
        }
    };
    this.game.newPolygonObject =
        function (a) {
            return new S(a)
        };
    var qa = function (a) {
        A.call(this, a);
        this.type = "ImageObject";
        this.loaded = !1;
        this.file = "";
        this.forOnLoad = a.onload || !1;
        dc(a.file, this, a.scale || 1)
    };
    Z(A, qa);
    qa.prototype.draw = function () {
        if (this.visible && this.alpha && this.loaded) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor || this.flip.x || this.flip.y) N(this), a = !0;
            ec(e(this.x, this.y), B(this.w, this.h), this.file);
            if (this.ondraw) this.ondraw();
            a && G()
        }
    };
    qa.prototype.simpleDraw = function (a) {
        if (this.loaded) {
            var b = !1;
            if (this.angle ||
                1 != this.alpha || this.shadowColor) N(this), b = !0;
            ec(e(a.x, a.y), B(this.w, this.h), this.file);
            b && G()
        }
    };
    qa.prototype.setImage = function (a, b) {
        this.file != a && (u(l[a]) ? (this.file = a, b && b()) : (this.loaded = !1, this.origHeight = this.origWidth = 0, this.forOnLoad = b || !1, dc(a, this)))
    };
    qa.prototype.getImage = function () {
        return this.file
    };
    qa.prototype.resize = function (a) {
        if (!1 !== a.w && !1 === a.h) {
            var b = a.w / this.w;
            this.w = a.w;
            this.h *= b
        } else !1 !== a.h && !1 === a.w ? (b = a.h / this.h, this.h = a.h, this.w *= b) : !1 !== a.w && !1 !== a.h && (this.w = a.w, this.h =
            a.h)
    };
    this.game.newImageObject = function (a) {
        return new qa(a)
    };
    var Y = function (a) {
        A.call(this, a);
        this.type = "AnimationObject";
        this.frame = 0;
        this.anim = a.animation;
        this.step = a.delay || 10;
        this.toFrameStep = this.difStep = 0;
        a.scale && (this.w *= a.scale, this.h *= a.scale)
    };
    Z(A, Y);
    Y.prototype.draw = function () {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.flip.x || this.flip.y || this.shadowColor) N(this), a = !0;
            Eb(this.anim, e(this.x, this.y), B(this.w, this.h), this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ? (this.frame = this.frame < this.anim.r ? this.frame + 1 : 0, this.difStep = 0) : this.difStep += 1;
            a && G()
        }
    };
    Y.prototype.drawFrames = function (a, b, c) {
        if (this.visible && this.alpha) {
            if (this.frame < a || this.frame > b) this.frame = a;
            c = !1;
            if (this.angle || 1 != this.alpha || this.flip.x || this.flip.y || this.shadowColor) N(this), c = !0;
            Eb(this.anim, e(this.x, this.y), B(this.w, this.h), this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ? (this.frame = this.frame < b ? this.frame + 1 : a, this.difStep = 0) : this.difStep += 1;
            c &&
            G()
        }
    };
    Y.prototype.drawFrame = function (a) {
        if (this.visible && this.alpha) {
            var b = !1;
            if (this.angle || 1 != this.alpha || this.flip.x || this.flip.y || this.shadowColor) N(this), b = !0;
            Eb(this.anim, e(this.x, this.y), B(this.w, this.h), a);
            if (this.ondraw) this.ondraw();
            b && G()
        }
    };
    Y.prototype.drawToFrame = function (a) {
        if (this.visible && this.alpha) {
            if (this.frame < a) this.toFrameStep = 1; else if (this.frame > a) this.toFrameStep = -1; else {
                this.drawFrame(a);
                return
            }
            this.drawFrame(this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ?
                (this.frame = this.frame < this.anim.r ? this.frame + this.toFrameStep : 0, this.difStep = 0) : this.difStep += 1
        }
    };
    Y.prototype.drawReverFrames = function (a, b) {
        if (this.visible && this.alpha) {
            this.drawFrame(this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ? (this.frame <= a ? this.toFrameStep = 1 : this.frame >= b && (this.toFrameStep = -1), this.frame += this.toFrameStep, this.difStep = 0) : this.difStep += 1
        }
    };
    Y.prototype.setAnimation = function (a) {
        a.id != this.anim.id && (this.frame = 0, this.anim = a)
    };
    Y.prototype.getAnimation = function () {
        return this.anim
    };
    Y.prototype.setDelay = function (a) {
        this.step = 0 < a ? a : this.step
    };
    Y.prototype.getDelay = function () {
        return this.step
    };
    this.game.newAnimationObject = function (a) {
        return new Y(a)
    };
    var Wb = function (a) {
        var b = !1;
        "RectObject" == a.type ? b = n.game.newRectObject({}) : "CircleObject" == a.type ? b = n.game.newCircleObject({}) : "RoundRectObject" == a.type ? b = n.game.newRoundRectObject({}) : "TextObject" == a.type ? b = n.game.newTextObject({}) : "EllipsObject" == a.type ? b = n.game.newEllipsObject({}) : "ImageObject" == a.type ? b = n.game.newImageObject({file: a.file}) :
            "TriangleObject" == a.type ? b = n.game.newTriangleObject({}) : "AnimationObject" == a.type && (b = n.game.newAnimationObject({animation: a.animation}));
        return b
    }, uc = 0, ra = function (a, b) {
        this.file = a;
        this.loaded = !1;
        this.h = this.w = 0;
        this.id = uc++;
        this.toLoad = [];
        var c = g.document.createElement("img"), d = this;
        c.onload = function () {
            d.loaded = !0;
            d.w = this.width;
            d.h = this.height;
            d.img = g.document.createElement("canvas");
            d.img.width = this.width;
            d.img.height = this.height;
            d.context = d.img.getContext("2d");
            d.context.drawImage(this, 0, 0);
            d.toLoad.length && v(d.toLoad, function (a) {
                a.func(d.context, a.w, a.h, a.r)
            });
            b && (d.onLoad = b, d.onLoad());
            z.load()
        };
        c.src = a;
        z.add()
    };
    ra.prototype.onContext = function (a) {
        this.loaded ? a(this.context, this.w, this.h, 1) : this.toLoad.push({w: this.w, h: this.h, r: 1, func: a})
    };
    ra.prototype.getCanvas = function () {
        return this.img
    };
    var vc = 0;
    ra.prototype.getAnimation = function (a, b, c, d, e) {
        var k = function (a, b, c, d, e, k) {
            this.id = vc++;
            this.image = a;
            this.x = b;
            this.y = c;
            this.w = d;
            this.h = e;
            this.endFrame = this.r = k ? k - 1 : 0;
            this.frameCount = this.r +
                1
        };
        k.prototype = {
            onContext: function (a) {
                this.image.loaded ? a(this.image.context, this.w, this.h, this.r) : this.image.toLoad.push({
                    w: this.w,
                    h: this.h,
                    r: this.r,
                    func: a
                })
            }, getImage: function () {
                return this.image
            }, getCount: function () {
                return this.r
            }
        };
        return new k(this, a, b, c, d, e)
    };
    var Fb = function (a, b) {
        this.loaded = !0;
        this.w = a;
        this.h = b;
        this.img = g.document.createElement("canvas");
        this.img.width = a;
        this.img.height = b;
        this.context = this.img.getContext("2d")
    };
    Fb.prototype.onContext = ra.prototype.onContext;
    Fb.prototype.getAnimation =
        ra.prototype.getAnimation;
    this.tiles.newDrawImage = function (a, b) {
        return new Fb(a, b)
    };
    this.tiles.newImage = function (a, b) {
        return new ra(a, b)
    };
    this.tiles.newAnimation = function (a, b, c, d) {
        return (new ra(a)).getAnimation(0, 0, b, c, d)
    };
    var Eb = function (a, b, c, d) {
        if (a && a.image.loaded) {
            var e = -f.x, g = -f.y;
            a.image.img && h.drawImage(a.image.img, a.x + a.w * d, a.y, a.w, a.h, b.x + e, b.y + g, c.w, c.h)
        }
    }, l = {}, dc = function (a, b, c) {
        if (u(l[a])) {
            b.loaded = !0;
            b.file = a;
            if (b.w && !b.h) {
                var d = b.w / l[a].w;
                var e = b.w;
                var f = l[a].h * d
            } else !b.w && b.h ? (d = b.h /
                l[a].h, f = b.h, e = l[a].w * d) : b.w && b.h ? (e = b.w, f = b.h) : (e = l[a].w, f = l[a].h);
            c && (e *= c, f *= c);
            b.w = e;
            b.h = f;
            b.forOnLoad && b.forOnLoad()
        } else d = g.document.createElement("img"), d.onload = function () {
            l[a] = {};
            l[a].loaded = !0;
            l[a].img = this;
            l[a].w = this.width;
            l[a].h = this.height;
            if (u(b)) {
                b.loaded = !0;
                if (b.w && !b.h) {
                    var d = b.w / l[a].w;
                    var e = b.w;
                    var k = l[a].h * d
                } else !b.w && b.h ? (d = b.h / l[a].h, k = b.h, e = l[a].w * d) : b.w && b.h ? (e = b.w, k = b.h) : (e = l[a].w, k = l[a].h);
                c && (e *= c, k *= c);
                b.w = e;
                b.h = k;
                b.file = a;
                b.forOnLoad && b.forOnLoad()
            }
            z.load()
        }, d.src = a,
            z.add()
    }, ec = function (a, b, c) {
        if (c) {
            var d = -f.x, e = -f.y;
            l[c] && h.drawImage(l[c].img, 0, 0, l[c].w, l[c].h, a.x + d, a.y + e, b.w, b.h)
        }
    }, fc = function (a) {
        this.type = "Mesh";
        this.objs = [];
        this.x = a.x || 0;
        this.y = a.y || 0;
        this.angle = a.angle || 0;
        this.count = 0;
        var b = this;
        a.add && v(a.add, function (a) {
            b.add(a)
        });
        this.angle && this.setAngle(this.angle)
    };
    fc.prototype = {
        getCount: function () {
            return this.count
        }, getObjects: function () {
            return this.objs
        }, add: function (a) {
            this.count += 1;
            this.objs.push(a);
            a.offsetMesh = a.getPosition(1);
            a.turn(this.angle);
            a.setPositionC(e(this.x + a.offsetMesh.x, this.y + a.offsetMesh.y))
        }, del: function (a) {
            var b = this;
            v(this.objs, function (c) {
                c.id == a.id && (b.objs.splice(void 0, 1), b.count--)
            })
        }, draw: function (a) {
            v(this.objs, function (a) {
                a.draw()
            })
        }, move: function (a) {
            this.x += a.x || 0;
            this.y += a.y || 0;
            var b = this;
            v(this.objs, function (a) {
                a.setPositionC(e(b.x + a.offsetMesh.x, b.y + a.offsetMesh.y))
            })
        }, turn: function (a) {
            if (0 != a) {
                this.angle %= 360;
                this.angle += a;
                var b = e(this.x, this.y), c = this;
                v(this.objs, function (d) {
                    d.turn(a);
                    d.setPositionC(O(e(c.x +
                        d.offsetMesh.x, c.y + d.offsetMesh.y), b, c.angle))
                })
            }
        }, setAngle: function (a) {
            if (a != this.angle) {
                this.angle = a %= 360;
                var b = e(this.x, this.y), c = this;
                v(this.objs, function (d) {
                    d.setAngle(a);
                    d.setPositionC(O(e(c.x + d.offsetMesh.x, c.y + d.offsetMesh.y), b, c.angle))
                })
            }
        }, setPosition: function (a) {
            if (this.x != a.x || this.y != a.y) {
                this.x = a.x || this.x;
                this.y = a.y || this.y;
                var b = this;
                v(this.objs, function (a) {
                    b.angle ? a.setPositionC(O(e(b.x + a.offsetMesh.x, b.y + a.offsetMesh.y), e(b.x, b.y), b.angle)) : a.setPositionC(e(b.x + a.offsetMesh.x, b.y +
                        a.offsetMesh.y))
                })
            }
        }, isDynamicIntersect: function (a) {
            if (3 > a.length) return !1;
            var b = !1;
            v(this.objs, function (c) {
                if (c.isDynamicIntersect(a)) return b = c
            });
            return b
        }, isStaticIntersect: function (a) {
            var b = !1;
            v(this.objs, function (c) {
                if (c.isStaticIntersect(a)) return b = c
            });
            return b
        }, isIntersect: function (a) {
            var b = !1;
            v(this.objs, function (c) {
                if (c.isIntersect(a)) return b = c
            });
            return b
        }
    };
    this.game.newMesh = function (a) {
        return new fc(a)
    };
    this.camera.setScale = function (a) {
    };
    this.camera.circling = function (a, b, c) {
        u(this.circlingAnglePointJS) ||
        (this.circlingAnglePointJS = c);
        f.x = a.x + b * Math.cos(x(this.circlingAnglePointJS));
        f.y = a.y + b * Math.sin(x(this.circlingAnglePointJS));
        this.circlingAnglePointJS = 360 <= this.circlingAnglePointJS ? c : this.circlingAnglePointJS + c
    };
    this.camera.circlingC = function (a, b, c) {
        u(this.circlingAnglePointJS) || (this.circlingAnglePointJS = c);
        f.x = -Q + a.x + b * Math.cos(x(this.circlingAnglePointJS));
        f.y = -R + a.y + b * Math.sin(x(this.circlingAnglePointJS));
        this.circlingAnglePointJS = 360 <= this.circlingAnglePointJS ? c : this.circlingAnglePointJS +
            c
    };
    this.camera.motion = function (a, b, c) {
        u(this.motionPercentPointJS) || (this.motionPercentPointJS = b);
        f.x = a.x + b.w * Math.cos(x(this.motionPercentPointJS));
        f.y = a.y + b.h * Math.sin(x(this.motionPercentPointJS));
        this.motionPercentPointJS = 360 <= this.motionPercentPointJS ? b : this.motionPercentPointJS + c
    };
    this.camera.motionC = function (a, b, c) {
        u(this.motionPercentPointJS) || (this.motionPercentPointJS = b);
        this.setPositionC(e(a.x + b.w * Math.cos(x(this.motionPercentPointJS)), a.y + b.h * Math.sin(x(this.motionPercentPointJS))));
        this.motionPercentPointJS =
            360 <= this.motionPercentPointJS ? b : this.motionPercentPointJS + c
    };
    this.camera.follow = function (a) {
        this.moveTimeC(a.getPositionC(), 10)
    };
    this.camera.move = function (a) {
        f.x += a.x || 0;
        f.y += a.y || 0
    };
    this.camera.moveTime = function (a, b) {
        b = b || 1;
        var c = e(f.x, f.y);
        this.move(e((a.x - c.x) / b, (a.y - c.y) / b))
    };
    this.camera.moveTimeC = function (a, b) {
        b = b || 1;
        var c = e(f.x + Q, f.y + R);
        this.move(e((a.x - c.x) / b, (a.y - c.y) / b))
    };
    this.camera.setPosition = function (a) {
        vb(e(!1 !== a.x ? a.x : f.x, !1 !== a.y ? a.y : f.y))
    };
    this.camera.setPositionC = function (a) {
        vb(e(!1 !==
        a.x ? a.x - Q : f.x, !1 !== a.y ? a.y - R : f.y))
    };
    this.camera.getPosition = function (a) {
        return a ? e(f.x + Q, f.y + R) : e(f.x, f.y)
    };
    this.camera.getPositionC = function () {
        return e(f.x + Q, f.y + R)
    };
    this.camera.getStaticBox = function () {
        return {x: f.x, y: f.y, w: f.x + q, h: f.y + r}
    };
    this.camera.getDynamicBox = function () {
        return [e(f.x, f.y), e(f.x + q, f.y), e(f.x + q, f.y + r), e(f.x, f.y + r)]
    };
    var vb = function (a) {
        f = e(a.x, a.y)
    }, G = function (a) {
        h.restore();
        h.globalAlpha = t.globalAlpha;
        h.fillStyle = "black";
        h.strokeStyle = "black";
        h.msImageSmoothingEnabled = Aa;
        h.imageSmoothingEnabled =
            Aa
    }, N = function (a, b) {
        h.save();
        var c = a.getPositionC();
        a.angle && (h.translate(-f.x + c.x, -f.y + c.y), h.rotate(x(a.angle)), h.translate(-c.x + f.x, -c.y + f.y));
        1 != a.alpha && (h.globalAlpha = a.alpha);
        if (a.flip.x || a.flip.y) h.translate(-f.x + c.x, -f.y + c.y), h.scale(a.flip.x ? -1 : 1, a.flip.y ? -1 : 1), h.translate(-c.x + f.x, -c.y + f.y);
        a.shadowColor && (h.shadowBlur = a.shadowBlur, h.shadowColor = a.shadowColor, h.shadowOffsetX = a.shadowX, h.shadowOffsetY = a.shadowY);
        if ("EllipsObject" == a.type && !b) {
            var c = a.w / 2, d = a.h / 2, k = e(-f.x + a.x, -f.y + a.y);
            h.translate(k.x,
                k.y);
            h.scale(c / d, 1);
            h.translate(-k.x, -k.y)
        }
    };
    this.system.setContextSettings = function (a) {
        h.save();
        for (var b in a) h[b] = a[b]
    };
    this.system.defaultSettings = function () {
        G()
    };
    this.game.clear = function () {
        var a = e(0, 0), b = e(q, r);
        h.clearRect(a.x, a.y, b.x, b.y)
    };
    this.game.fill = function (a) {
        h.fillStyle = a;
        h.fillRect(0, 0, q, r)
    };
    var La = function (a, b, c, d, k, g, l) {
        if (!(3 > c.length)) {
            if (d && !(3 > c.length)) {
                h.fillStyle = d;
                d = -f.x + a;
                var m = -f.y + b;
                var n;
                h.beginPath();
                h.moveTo(d + c[0].x, m + c[0].y);
                for (n = 1; n < c.length; n += 1) h.lineTo(d + c[n].x,
                    m + c[n].y);
                h.closePath();
                h.fill()
            }
            for (d = 0; d < c.length; d += 1) m = d + 1 < c.length ? d + 1 : 0, k && da(sa(c[d], e(a, b)), sa(c[m], e(a, b)), k, g), l && gb(sa(c[d], e(a, b)), l)
        }
    };
    this.brush.drawPolygon = function (a) {
        var b = a.points || [], c = a.fillColor || !1, d = a.strokeColor || !1, e = a.strokeWidth || 1;
        a = a.pointColor || !1;
        if (!(3 > b.length)) {
            if (c && !(3 > b.length)) {
                h.fillStyle = c;
                c = -f.x;
                var g = -f.y;
                var l;
                h.beginPath();
                h.moveTo(c + b[0].x, g + b[0].y);
                for (l = 1; l < b.length; l += 1) h.lineTo(c + b[l].x, g + b[l].y);
                h.closePath();
                h.fill()
            }
            for (c = 0; c < b.length; c += 1) g = c + 1 <
            b.length ? c + 1 : 0, d && da(b[c], b[g], d, e), a && gb(b[c], a)
        }
    };
    this.brush.drawTriangle = function (a) {
        La(a.x || 0, a.y || 0, [e(a.w / 2, 0), e(a.w, a.h), e(0, a.h)], a.fillColor, a.strokeColor, a.strokeWidth)
    };
    this.brush.drawTriangleS = function (a) {
        La(f.x + (a.x || 0), f.y + (a.y || 0), [e(a.w / 2, 0), e(a.w, a.h), e(0, a.h)], a.fillColor, a.strokeColor, a.strokeWidth)
    };
    var pa = function (a, b, c, d, e, g, l, m, n) {
        h.textAlign = l;
        h.lineWidth = n;
        h.font = (g ? g + " " : "") + d + "px " + e;
        d = -f.x;
        e = -f.y;
        c && (h.fillStyle = c, h.fillText(b, d + a.x, e + a.y));
        m && (h.strokeStyle = m, h.strokeText(b,
            d + a.x, e + a.y))
    };
    this.brush.drawMultiText = function (a) {
        var b, c = a.text.split("\n");
        for (b = 0; b < c.length; b += 1) pa(e(a.x, a.y + a.size * b), c[b], a.color || t.fillStyle, a.size || 10, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
    };
    this.brush.drawMultiTextS = function (a) {
        var b, c = a.text.split("\n"), d = a.size || 10;
        for (b = 0; b < c.length; b += 1) pa(e(a.x + f.x, a.y + f.y + d * b), c[b], a.color || t.fillStyle, d || 10, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
    };
    this.brush.drawText =
        function (a) {
            pa(e(a.x || 0, a.y || 0), a.text, a.color || !1, a.size || 10, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
        };
    this.brush.drawTextS = function (a) {
        pa(e((a.x || 0) + f.x, (a.y || 0) + f.y), a.text, a.color || t.fillStyle, a.size || 10, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
    };
    this.brush.drawTextLines = function (a) {
        if (a.lines) {
            var b, c = a.size || 10;
            for (b = 0; b < a.lines.length; b += 1) pa(e(a.x, a.y + c * b), a.lines[b], a.color || t.fillStyle, c, a.font || t.font, a.style || !1,
                a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
        }
    };
    this.brush.drawTextLinesS = function (a) {
        if (a.lines) {
            var b, c = a.size || 10;
            for (b = 0; b < a.lines.length; b += 1) pa(e(a.x + f.x, a.y + f.y + c * b), a.lines[b], a.color || t.fillStyle, c, a.font || t.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
        }
    };
    var cc = function (a, b, c) {
        da(e(a.x - b, a.y), e(a.x + b, a.y), c, 2);
        da(e(a.x, a.y - b), e(a.x, a.y + b), c, 2)
    }, xa = function (a, b, c, d, e) {
        h.fillStyle = c;
        h.strokeStyle = d;
        h.lineWidth = e;
        d = -f.x + (e ? e / 2 : 0);
        var k = -f.y + (e ? e / 2 : 0);
        c && h.fillRect(a.x +
            d, a.y + k, b.w, b.h);
        e && h.strokeRect(a.x + d, a.y + k, b.w, b.h)
    };
    this.brush.drawRect = function (a) {
        xa(e(a.x, a.y), B(a.w, a.h), a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    this.brush.drawRectS = function (a) {
        xa(e(a.x + f.x, a.y + f.y), B(a.w, a.h), a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    var gb = function (a, b) {
        (h.fillStyle = b) && h.fillRect(-f.x + a.x - 1, -f.y + a.y - 1, 2, 2)
    };
    this.brush.drawPoint = function (a) {
        gb(e(a.x, a.y), a.fillColor || !1)
    };
    this.brush.drawPointS = function (a) {
        gb(e(a.x + f.x, a.y +
            f.y), a.fillColor || !1)
    };
    var Ab = function (a, b, c, d, e, g) {
        h.fillStyle = d;
        h.strokeStyle = e;
        h.lineWidth = g;
        e = -f.x + a.x + (g ? g / 2 : 0);
        a = -f.y + a.y + (g ? g / 2 : 0);
        h.beginPath();
        h.moveTo(e + c, a);
        h.lineTo(e + b.w - c, a);
        h.quadraticCurveTo(e + b.w, a, e + b.w, a + c);
        h.lineTo(e + b.w, a + b.h - c);
        h.quadraticCurveTo(e + b.w, a + b.h, e + b.w - c, a + b.h);
        h.lineTo(e + c, a + b.h);
        h.quadraticCurveTo(e, a + b.h, e, a + b.h - c);
        h.lineTo(e, a + c);
        h.quadraticCurveTo(e, a, e + c, a);
        h.closePath();
        d && h.fill();
        g && h.stroke()
    };
    this.brush.drawRoundRect = function (a) {
        Ab(e(a.x, a.y), B(a.w, a.h),
            a.radius || 2, a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    this.brush.drawRoundRectS = function (a) {
        Ab(e(f.x + a.x, f.y + a.y), B(a.w, a.h), a.radius || 2, a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    var ya = function (a, b, c, d, e) {
        h.fillStyle = c;
        h.strokeStyle = d;
        h.lineWidth = e;
        d = -f.x + b + (e ? e / 2 : 0);
        var g = -f.y + b + (e ? e / 2 : 0);
        h.beginPath();
        h.arc(a.x + d, a.y + g, b, 0, 2 * Math.PI, !0);
        h.closePath();
        c && h.fill();
        e && h.stroke()
    };
    this.brush.drawCircle = function (a) {
        ya(e(a.x, a.y), a.radius, a.fillColor || !1,
            a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    this.brush.drawCircleS = function (a) {
        ya(e(a.x + f.x, a.y + f.y), a.radius, a.fillColor || !1, a.strokeColor || t.strokeStyle, a.strokeWidth || !1)
    };
    var da = function (a, b, c, d) {
        h.strokeStyle = c;
        h.lineWidth = d;
        c = -f.x;
        d = -f.y;
        h.beginPath();
        h.moveTo(c + a.x, d + a.y);
        h.lineTo(c + b.x, d + b.y);
        h.closePath();
        h.stroke()
    };
    this.brush.drawLineAngle = function (a) {
        var b = O(e(a.x + a.length, a.y), e(a.x, a.y), a.angle);
        da(e(a.x, a.y), e(b.x, b.y), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLineAngleS =
        function (a) {
            var b = O(e(f.x + a.x + a.length, f.y + a.y), e(f.x + a.x, f.y + a.y), a.angle);
            da(e(f.x + a.x, f.y + a.y), e(b.x, b.y), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
        };
    this.brush.drawLine = function (a) {
        da(e(a.x1, a.y1), e(a.x1 + a.x2, a.y1 + a.y2), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLineS = function (a) {
        da(e(f.x + a.x1, f.y + a.y1), e(f.x + a.x2, f.y + a.y2), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLineA = function (a) {
        da(e(a.x1, a.y1), e(a.x2, a.y2), a.strokeColor || t.strokeStyle, a.strokeWidth ||
            1)
    };
    this.brush.drawLineAS = function (a) {
        da(e(a.x1 + f.x, a.y1 + f.y), e(a.x2 + f.x, a.y2 + f.y), a.strokeColor || t.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawEllips = function (a) {
        var b = a.w / 2, c = a.h / 2, d = e(-f.x + a.x, -f.y + a.y);
        h.save();
        h.translate(d.x, d.y);
        h.scale(b / c, 1);
        h.translate(-d.x, -d.y);
        ya(e(a.x, a.y), c, a.fillColor, a.strokeColor, a.strokeWidth);
        h.restore()
    };
    this.brush.drawEllipsS = function (a) {
        var b = a.w / 2, c = a.h / 2, d = e(a.x, a.y);
        h.save();
        h.translate(d.x, d.y);
        h.scale(b / c, 1);
        h.translate(-d.x, -d.y);
        ya(e(f.x + a.x, f.y + a.y),
            c, a.fillColor, a.strokeColor, a.strokeWidth);
        h.restore()
    };
    this.brush.drawImageS = function (a) {
        if (a.file) if (u(l[a.file])) {
            if (l[a.file].loaded) {
                var b = a.x || 0, c = a.y || 0;
                if (a.w && !a.h) {
                    var d = a.w / l[a.file].w;
                    var e = a.w;
                    var f = l[a.file].h * d
                } else !a.w && a.h ? (d = a.h / l[a.file].h, f = a.h, e = l[a.file].w * d) : a.w && a.h ? (e = a.w, f = a.h) : (e = l[a.file].w, f = l[a.file].h);
                a.scale && (e *= a.scale, f *= a.scale);
                h.drawImage(l[a.file].img, 0, 0, l[a.file].w, l[a.file].h, b, c, e, f)
            }
        } else l[a.file] = {loaded: !1}, d = g.document.createElement("img"), d.onload =
            function () {
                l[a.file].loaded = !0;
                l[a.file].img = this;
                l[a.file].w = this.width;
                l[a.file].h = this.height;
                z.load()
            }, d.src = a.file, z.add()
    };
    this.brush.drawImage = function (a) {
        if (a.file) if (u(l[a.file])) {
            if (l[a.file].loaded) {
                var b = a.x || 0, c = a.y || 0;
                if (a.w && !a.h) {
                    var d = a.w / l[a.file].w;
                    var e = a.w;
                    var m = l[a.file].h * d
                } else !a.w && a.h ? (d = a.h / l[a.file].h, m = a.h, e = l[a.file].w * d) : a.w && a.h ? (e = a.w, m = a.h) : (e = l[a.file].w, m = l[a.file].h);
                a.scale && (e *= a.scale, m *= a.scale);
                h.drawImage(l[a.file].img, 0, 0, l[a.file].w, l[a.file].h, -f.x + b,
                    -f.y + c, e, m)
            }
        } else l[a.file] = {}, l[a.file].loaded = !1, d = g.document.createElement("img"), d.onload = function () {
            l[a.file].loaded = !0;
            l[a.file].img = this;
            l[a.file].w = this.width;
            l[a.file].h = this.height;
            z.load()
        }, d.src = a.file, z.add()
    };
    this.brush.onContext = function (a) {
        a(h)
    };
    this.brush.getPixelColor = function (a, b) {
        var c = h.getImageData(a, b, 1, 1).data;
        return "rgb(" + c[0] + ", " + c[1] + ", " + c[2] + ")"
    };
    this.brush.setPixelColor = function (a, b, c) {
        var d = h.createImageData(1, 1);
        d.data[0] = c.r || d.data[0];
        d.data[1] = c.g || d.data[1];
        d.data[2] =
            c.b || d.data[2];
        d.data[3] = c.a || 255;
        h.putImageData(d, a, b)
    };
    this.brush.onPixel = function (a, b, c) {
        var d = h.getImageData(a, b, 1, 1),
            e = {r: d.data[0], g: d.data[1], b: d.data[2], a: d.data[3] ? d.data[3] : 255};
        c(e);
        d.data[0] = e.r;
        d.data[1] = e.g;
        d.data[2] = e.b;
        d.data[3] = e.a;
        h.putImageData(d, a, b)
    };
    this.brush.onPixels = function (a, b, c, d, e) {
        c = h.getImageData(a, b, c, d);
        var f;
        d = 0;
        for (f = c.data.length; d < f; d += 4) {
            var g = {r: c.data[d], g: c.data[d + 1], b: c.data[d + 2], a: c.data[d + 3] ? c.data[d + 3] : 255};
            e(g);
            c.data[d] = g.r;
            c.data[d + 1] = g.g;
            c.data[d + 2] =
                g.b;
            c.data[d + 3] = g.a
        }
        h.putImageData(c, a, b)
    };
    this.brush.onRawPixels = function (a, b, c, d, e) {
        c = h.getImageData(a, b, c, d);
        e(c.data, c.data.length);
        h.putImageData(c, a, b)
    };
    var T = g.AudioContext || g.webkitAudioContext || !1;
    (T = T ? new T : !1) && T.listener.setPosition(0, 0, 0);
    var U = function (a, b) {
        T || H('module "wAudio" is not supported! use a "audio"');
        this.vol = b && 1 >= b && 0 < b ? b : 1;
        this.loadPLay = this.nextPlay = this.loaded = this.playing = !1;
        this.pausedTime = this.duration = this.startTime = 0;
        var c = this, d = new XMLHttpRequest;
        d.open("GET",
            a, !0);
        d.responseType = "arraybuffer";
        d.onload = function (a) {
            T.decodeAudioData(this.response, function (a) {
                c.wABuffer = a;
                c.duration = c.wABuffer.duration;
                c.wAGain = T.createGain();
                c.wAGain.gain.value = c.vol;
                c.wAPanner = T.createPanner();
                c.wAPanner.setPosition(0, 0, 1);
                c.wAPanner.panningModel = "equalpower";
                z.load();
                c.loaded = !0;
                c.loadPlay && c.replay()
            }, function (a) {
                H("error in wAudio.newAudio : error decoding file", a)
            })
        };
        a ? d.send() : H("error in wAudio.newAudio : Where is file?");
        z.add()
    };
    U.prototype.play = function (a) {
        if (!this.loaded) this.loadPlay =
            !0; else if (!this.playing) {
            this.playing = !0;
            this.wASource = T.createBufferSource();
            this.wASource.buffer = this.wABuffer;
            this.wAListener = T.destination;
            this.wASource.connect(this.wAGain);
            this.wAGain.connect(this.wAPanner);
            this.wAPanner.connect(this.wAListener);
            this.wASource.start(0, this.pausedTime, this.duration);
            this.startTime = T.currentTime;
            var b = this;
            this.wASource.onended = function () {
                b.playing = !1;
                b.startTime = 0;
                b.pausedTime = 0;
                b.nextPlay && b.nextPlay.replay()
            }
        }
    };
    U.prototype.replay = function (a) {
        this.loaded ? (this.stop(),
            this.play()) : this.loadPlay = !0
    };
    U.prototype.stop = function () {
        this.pause();
        this.pausedTime = this.startTime = 0
    };
    U.prototype.pause = function () {
        if (this.playing) {
            this.pausedTime = this.getProgress();
            this.playing = !1;
            this.wASource.stop(0);
            var a = this;
            this.wASource.onended = function () {
                a.playing = !1
            }
        }
    };
    U.prototype.getProgress = function () {
        return this.playing ? T.currentTime - this.startTime + this.pausedTime : this.pausedTime
    };
    U.prototype.playPause = function () {
        this.playing ? this.pause() : this.play()
    };
    U.prototype.setNextPlay = function (a) {
        this.nextPlay =
            a
    };
    U.prototype.setVolume = function (a) {
        this.vol = a && 1 >= a && 0 < a ? a : this.vol;
        this.wAGain.gain.value = this.vol
    };
    U.prototype.getVolume = function () {
        return this.vol
    };
    U.prototype.setSide = function (a) {
        this.side = a;
        this.wAPanner && this.wAPanner.setPosition(this.side, 0, 1 - Math.abs(this.side))
    };
    U.prototype.getSide = function () {
        return this.side
    };
    this.wAudio.newAudio = function (a, b) {
        return new U(a, b)
    };
    var ga = function (a, b) {
        var c, d = g.document.createElement("audio");
        if ("string" == typeof a) {
            var e = g.document.createElement("source");
            e.src = a;
            d.appendChild(e)
        } else {
            var f = 0;
            for (c = a.length; f < c; f += 1) e = g.document.createElement("source"), e.src = a[f], d.appendChild(e)
        }
        this.vol = b && 1 >= b && 0 < b ? b : 1;
        this.playing = 0;
        this.audio = d;
        this.nextPlay = this.loaded = !1;
        this.audio.volume = this.vol;
        var h = this;
        this.audio.onloadeddata = function () {
            h.loaded = !0;
            z.load()
        };
        this.audio.onended = function () {
            h.playing = !1;
            h.nextPlay && h.nextPlay.play()
        };
        this.audio.load();
        z.add()
    };
    ga.prototype.play = function (a) {
        this.playing || (a && (this.vol = a && 1 >= a && 0 < a ? a : this.vol, this.audio.volume =
            this.vol), this.playing = !0, this.audio.play())
    };
    ga.prototype.replay = function (a) {
        a && this.setVolume(a);
        this.playing = !0;
        this.audio.currentTime = 0;
        this.audio.play()
    };
    ga.prototype.stop = function () {
        this.playing && (this.playing = !1, this.audio.pause(), this.audio.currentTime = 0)
    };
    ga.prototype.pause = function () {
        this.playing && (this.playing = !1, this.audio.pause())
    };
    ga.prototype.playPause = function () {
        this.playing ? this.pause() : this.play()
    };
    ga.prototype.setNextPlay = function (a) {
        this.nextPlay = a
    };
    ga.prototype.setVolume = function (a) {
        this.vol =
            a && 1 >= a && 0 < a ? a : this.vol;
        this.audio.volume = this.vol
    };
    ga.prototype.getVolume = function () {
        return this.vol
    };
    this.audio.newAudio = function (a, b) {
        return new ga(a, b)
    };
    var hb = [];
    this.zList.add = function (a) {
        hb.push(a)
    };
    this.zList.init = function (a) {
        OOP.forArr(a, function (a) {
            n.zList.add(a)
        })
    };
    this.zList.update = function () {
        hb.sort(function (a, b) {
            return a.y + a.h - (b.y + b.h)
        })
    };
    this.zList.draw = function (a) {
        OOP.drawArr(hb, a)
    };
    this.zList.del = function (a) {
        OOP.delObject(hb, a)
    };
    var z = {
        count: 0, loaded: 0, errored: 0, add: function () {
            this.count +=
                1
        }, load: function () {
            this.loaded += 1
        }, error: function () {
            this.errored += 1
        }
    };
    this.resources.isLoaded = function () {
        return z.count == z.loaded
    };
    this.resources.getProgress = function () {
        return Math.ceil(z.loaded / z.count * 100)
    };
    this.levels.forStringArray = function (a, b) {
        var c = a.offset || e(0, 0);
        v(a.source, function (d, e) {
            v(d, function (d, f) {
                " " != d && b(d, c.x + a.w * f, c.y + a.h * e, a.w, a.h)
            })
        })
    };
    var wc = function (a) {
        "ImageObject" == a.type && "undefined" != typeof RESOURCES && a.resFile && (a.file = RESOURCES[a.resFile]);
        "AnimationObject" == a.type &&
        "undefined" != typeof ANIMATIONS && a.animId && (a.anim = ANIMATIONS[a.animId]);
        var b = Wb(a);
        b.name = "";
        E(a, function (a, d) {
            "id" != d && (b[d] = a)
        });
        return b
    }, gc = function (a, b) {
        var c = {settings: {}, objects: []};
        a = JSON.parse(a);
        c.settings = a.settings;
        v(a.objects, function (a) {
            var d = wc(a);
            d.name = a.name;
            b && b(d);
            c.objects.push(d)
        });
        return c
    }, hc = function (a, b, c) {
        var d = [], e = {};
        if (a && "json" == b) {
            b = gc(a, c);
            d = b.objects;
            e = b.settings;
            var f = a
        }
        this.backgroundColor = e.backgroundColor ? e.backgroundColor : !1;
        this.reload = function () {
            d = gc(f)
        };
        this.clear = function () {
            Vb(d)
        };
        this.add = function (a) {
            d.push(a)
        };
        this.del = function (a) {
            v(d, function (b, c) {
                if (a.id == b.id) return d.splice(c, 1), "break"
            })
        };
        this.delById = function (a) {
            d.splice(a, 1)
        };
        this.getObjects = function () {
            return d
        };
        this.getObjectByName = function (a) {
            var b;
            var c = 0;
            for (b = d.length; c < b; c += 1) if (d[c].name == a) return d[c];
            return !1
        };
        this.getObjectById = function (a) {
            var b;
            var c = 0;
            for (b = d.length; c < b; c += 1) if (d[c].id == a) return d[c];
            return !1
        };
        this.draw = function (a) {
            this.backgroundColor && n.game.fill(this.backgroundColor);
            v(d, function (b) {
                a && a(b);
                b.draw()
            })
        };
        this.getLevelAsJSON = function (a, b) {
            var c = '{"settings":' + JSON.stringify({backgroundColor: this.backgroundColor}) + ',"objects":[';
            if (!d.length) return c + "]}";
            v(d, function (d, e) {
                a && a(d);
                c += "{";
                E(d, function (a, b) {
                    "function" != typeof a && (c += '"' + b + '":' + JSON.stringify(a) + ",")
                });
                c = c.substr(0, c.length - 1) + "},";
                b && b(d)
            });
            c = c.substr(0, c.length - 1);
            return c + "]}"
        }
    };
    this.levels.newLevelFromJSON = function (a, b) {
        return new hc(a, "json", b || !1)
    };
    this.levels.newEmptyLevel = function (a) {
        return new hc(!1)
    };
    var ic = 0, jc = 0, Gb = 0, kc = !1;
    this.system.initFPSCheck = function () {
        kc || (kc = !0, m.addEvent("postLoop", "fpsCheckUpdate", function () {
            Gb += 1;
            1E3 <= L - jc && (ic = Gb, Gb = 0, jc = L)
        }))
    };
    this.system.getFPS = function () {
        return ic
    };
    this.OOP.newRever = function (a, b, c) {
        var d = function (a, b, c) {
            this.min = a;
            this.max = b;
            this.step = c;
            this.value = a;
            this.to = c
        };
        d.prototype = {
            update: function () {
                var a = this.value;
                this.value <= this.min ? this.to = this.step : this.value >= this.max && (this.to = -this.step);
                this.value += this.to;
                return a
            }, getValue: function () {
                return this.value
            },
            setValue: function (a) {
                this.value = parseFloat(a)
            }, setStep: function (a) {
                this.step = a
            }, getStep: function () {
                return this.step
            }
        };
        return new d(a, b, c)
    };
    var lc = {};
    this.OOP.once = function (a, b) {
        lc[a] || (lc[a] = !0, b())
    };
    this.OOP.newTimer = function (a, b) {
        if (0 >= a) return ja("error in system.newTimer : variable < 0, Timer is not created");
        var c = {
            time: 0 < a ? a : 1E3, func: b, startTime: !1, ending: !1, start: function () {
                this.ending || this.startTime || (this.startTime = L)
            }, run: function () {
                !this.ending && this.startTime && L - this.startTime >= this.time &&
                (this.func(), this.ending = !0)
            }, end: function () {
                this.ending || (this.ending = !0, this.func())
            }, restart: function (a) {
                this.startTime || this.start();
                if (this.ending) {
                    if (a && 0 >= a) return ja("error in Timer.restart : variable < 0");
                    a && (this.time = a);
                    this.ending = !1;
                    this.startTime = L
                }
            }, stop: function () {
                this.ending || (this.ending = !0)
            }
        };
        m.addEvent("postLoop", "timer" + ea(-100, 100) * ea(-100, 100) + L, function () {
            c.run()
        });
        return c
    };
    this.memory.local = {
        storage: g.localStorage, clear: function () {
            this.storage.clear()
        }, save: function (a, b) {
            this.storage.setItem(a,
                b)
        }, saveAsObject: function (a, b) {
            var c = JSON.stringify(b);
            this.storage.setItem(a, c)
        }, loadAsObject: function (a) {
            return JSON.parse(this.storage.getItem(a))
        }, load: function (a) {
            return this.storage.getItem(a)
        }, loadAsNumber: function (a) {
            return parseFloat(this.storage.getItem(a))
        }
    };
    this.memory.temp = {
        values: {}, save: function (a, b) {
            this.values[a] = b
        }, load: function (a) {
            return this.values[a]
        }, loadAsNumber: function (a) {
            return parseFloat(this.values[a])
        }
    };
    g.onload = function () {
        if (h) {
            for (var a in t) h[a] = t[a];
            h.save()
        }
        m.runEvent("onload");
        m.loaded = !0;
        "function" == typeof POINTJS_USER_ONLOAD && POINTJS_USER_ONLOAD();
        return !1
    };
    g.onblur = function () {
        if (ka) return m.runEvent("gameBlur"), !1
    };
    g.onfocus = function () {
        if (!ka) return g.document.activeElement.blur(), g.focus(), m.runEvent("gameFocus"), !1
    };
    g.onresize = function () {
        m.runEvent("gameResize");
        h && (h.textBaseline = t.textBaseline);
        return !1
    };
    g.onclick = function () {
        g.document.activeElement.blur();
        g.focus()
    };
    if ("undefined" !== typeof POINTJS_LOADED_DOM_IGNORE) g.onload()
};
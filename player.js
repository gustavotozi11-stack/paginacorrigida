function vTurbChangePlayer() {
    (!vTurbOriginalPlayerIsMobile && vTurbDeviceIsMobile) || (vTurbOriginalPlayerIsMobile && !vTurbDeviceIsMobile)
        ? (vTurbPlayer = (typeof vTurbAlternativePlayer !== "undefined" ? vTurbAlternativePlayer : vTurbOriginalPlayer), vTurbSrcId = vTurbPlayer.id)
        : (vTurbPlayer = vTurbOriginalPlayer);
    var e = document.getElementById(`vid_${vTurbOriginalPlayer.id}`);
    if (e && vTurbPlayer !== vTurbOriginalPlayer) e.remove();
    var r = document.getElementById(`scr_${vTurbOriginalPlayer.id}`);
    if (r) r.setAttribute("id", `scr_${vTurbSrcId}`);
}

function vTurbCreatSmartvdsElements() {
    var e = document, r, t;
    if ("1.7.9" === vTurbPlayer.version) {
        if (!document.getElementById(`vid_${vTurbPlayer.id}`)) {
            r = e.getElementById(`scr_${vTurbSrcId}`);
            if (r && r.parentElement) {
                t = e.createElement("DIV");
                t.id = `vid_${vTurbPlayer.id}`;
                r.parentElement.insertBefore(t, r);
            }
        }
    } else {
        if (!document.getElementById(`vid_${vTurbPlayer.id}`)) {
            r = e.getElementById(`scr_${vTurbSrcId}`);
            if (r && r.parentElement) {
                t = e.createElement("DIV");
                t.id = `vid_${vTurbPlayer.id}`;
                t.style.position = "relative";
                t.style.width = "100%";
                t.style.padding = `${vTurbPlayer.video_aspect_ratio}% 0 0`;
                r.parentElement.insertBefore(t, r);
            }
        }
        var vid = document.getElementById(`vid_${vTurbPlayer.id}`);
        if (vid) {
            if (!document.getElementById(`thumb_${vTurbPlayer.id}`)) {
                t = e.createElement("IMG");
                t.id = `thumb_${vTurbPlayer.id}`;
                t.style.top = "0";
                t.style.left = "0";
                t.style.width = "100%";
                t.style.height = "100%";
                t.style.position = "absolute";
                t.style.objectFit = "cover";
                t.src = `https://images.converteai.net/${vTurbPlayer.thumbnail_key}`;
                vid.appendChild(t);
            }
            if (!document.getElementById(`backdrop_${vTurbPlayer.id}`)) {
                t = e.createElement("DIV");
                t.id = `backdrop_${vTurbPlayer.id}`;
                t.style.top = "0";
                t.style.left = "0";
                t.style.width = "100%";
                t.style.height = "100%";
                t.style.position = "absolute";
                t.style.backdropFilter = "blur(5px)";
                t.style.webkitBackdropFilter = "blur(5px)";
                vid.appendChild(t);
            }
        }
    }
}

function vTurbLoadSmrtvds() {
    var e = window, r = document, t, a;
    if (!e.smrtvds) {
        t = e.smrtvds = function () {
            t.callMethod ? t.callMethod.apply(t, arguments) : t.queue.push(arguments);
        };
        e._smrtvds || (e._smrtvds = t);
        t.push = t;
        t.loaded = !0;
        t.version = "1.1";
        t.queue = [];
        a = r.createElement("script");
        a.async = !0;
        a.src = `https://scripts.converteai.net/lib/js/smartplayer/${vTurbPlayer.version}/smartplayer.min.js`;
        r.getElementsByTagName("head")[0].appendChild(a);
    }
    var container = document.getElementById(`vid_${vTurbPlayer.id}`);
    if (container && container.parentElement) {
        window.smrtvds(`vid_${vTurbPlayer.id}`, vTurbPlayer.org_id, vTurbPlayer.video_id, vTurbPlayer.options);
    }
}

function vTurbSmrtvds() {
    function init() {
        var container = document.getElementById(`vid_${vTurbPlayer.id}`);
        if (!container || !container.parentElement) {
            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", init, { once: true });
            } else {
                setTimeout(init, 50);
            }
            return;
        }
        vTurbCreatSmartvdsElements();
        vTurbLoadSmrtvds();
    }
    init();
}

var vTurbOriginalPlayer = {
    "id": "68559ea8bb5e4a0d08dca0ad",
    "org_id": "b3f75e50-91c2-41a9-b5e6-4cde2919d601",
    "name": "mapa-por-dentro",
    "device_type": "mobile",
    "video_aspect_ratio": "133.33333333333331",
    "thumbnail_key": "b3f75e50-91c2-41a9-b5e6-4cde2919d601/players/68559ea8bb5e4a0d08dca0ad/thumbnail.jpg",
    "cover_key": "b3f75e50-91c2-41a9-b5e6-4cde2919d601/players/68559ea8bb5e4a0d08dca0ad/cover.jpg",
    "version": "v1",
    "video_id": "68559e9999b48a16b6a84172",
    "options": {
        "autoplay": false,
        "subtitle_active": false,
        "smart_autoplay_template": "default",
        "theme": "#2663EB",
        "foreground_color": "#FFFFFF",
        "embedVersion": "1786020971-dynamodb",
        "video": {
            "width": 1080,
            "height": 1440,
            "pic": "https://images.converteai.net/b3f75e50-91c2-41a9-b5e6-4cde2919d601/players/68559ea8bb5e4a0d08dca0ad/cover.jpg"
        },
        "cdn": "cdn.converteai.net",
        "conversion_params": [],
        "displays": {
            "big_play": true,
            "play_pause": true,
            "backward": false,
            "subtitle_control": false,
            "forward": false,
            "volume": false,
            "volume_bar": true,
            "time": false,
            "fullscreen": true,
            "seekbar": false,
            "seekbar_time": true,
            "speed_control": false
        },
        "callAction": [],
        "pixels": [],
        "thumbs": [],
        "headlines": [],
        "smart_autoplays": [],
        "turbos": [],
        "smart_autoplay_elements": [],
        "mini_hooks": false,
        "mini_hooks_elements": [],
        "resume": false,
        "fake_bar": false,
        "headline": false,
        "turbo": false,
        "turbo_speed": 1,
        "turbo_auto_test": false,
        "secure": false,
        "fkdlvid": null
    }
};

var vTurbSrcId = "68559ea8bb5e4a0d08dca0ad";
var vTurbPlayer = vTurbOriginalPlayer;
var vTurbDeviceIsMobile = window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/);
var vTurbOriginalPlayerIsMobile = "mobile" === vTurbOriginalPlayer.device_type;
vTurbDeviceIsMobile = vTurbDeviceIsMobile && vTurbDeviceIsMobile[0];
vTurbSmrtvds();

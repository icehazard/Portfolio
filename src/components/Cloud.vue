<template>
  <div id="tag-cloud" class="noSelect"></div>
</template>

<script>
import SVG3DTagCloud from "3d-word-cloud";
export default {
  mounted() {
    var entries = [
      { label: "Dev Blog", url: "http://niklasknaack.blogspot.de/", target: "_blank" },
      { label: "Flashforum", url: "http://www.flashforum.de/", target: "_top" },
      { label: "Javascript-Forum", url: "http://forum.jswelt.de/", target: "_top" },
      { label: "CodePen", url: "http://codepen.io/", target: "_top" },
      { label: "three.js", url: "http://threejs.org/", target: "_top" },
      { label: "WebGLStudio.js", url: "http://webglstudio.org/", target: "_top" },
      { label: "JS Compress", url: "http://jscompress.com/", target: "_top" },
      { label: "TinyPNG", url: "https://tinypng.com/", target: "_top" },
      { label: "Can I Use", url: "http://caniuse.com/", target: "_top" },
      { label: "URL shortener", url: "https://goo.gl/", target: "_top" },
      { label: "Twitter", url: "https://twitter.com/niklaswebdev", target: "_top" },
      { label: "deviantART", url: "http://nkunited.deviantart.com/", target: "_top" },
      { label: "Gulp", url: "http://gulpjs.com/", target: "_top" },
      { label: "Browsersync", url: "https://www.browsersync.io/", target: "_top" },
      { label: "GitHub", url: "https://github.com/", target: "_top" },
      { label: "Shadertoy", url: "https://www.shadertoy.com/", target: "_top" },
      { label: "Starling", url: "http://gamua.com/starling/", target: "_top" },
      { label: "jsPerf", url: "http://jsperf.com/", target: "_top" },
      { label: "Foundation", url: "http://foundation.zurb.com/", target: "_top" },
      { label: "CreateJS", url: "http://createjs.com/", target: "_top" },
      { label: "jQuery", url: "https://jquery.com/", target: "_top" },
      { label: "jQuery Rain", url: "http://www.jqueryrain.com/", target: "_top" },
      { label: "jQuery Plugins", url: "http://jquery-plugins.net/", target: "_top" },
    ];

    var settings = {
      entries: entries,
      width: 900,
      height: 900,
      radius: "65%",
      radiusMin: 75,
      bgDraw: true,
      bgColor: "var(--v-background-base)",
      opacityOver: 1.0,
      opacityOut: 0.05,
      opacitySpeed: 6,
      fov: 800,
      speed: 0.3,
      fontFamily: "Roboto, Arial, sans-serif",
      fontSize: "18px",
      fontColor: "var(--v-text-base)",
      fontWeight: "normal",
      fontStyle: "normal",
      fontStretch: "normal",
      fontToUpperCase: true,
    };

    new SVG3DTagCloud(document.getElementById("tag-cloud"), settings);
  },
};
</script>

"use strict";
import "./ditto.css";
import "./hidewidthless500.css";
import "./index.css";
// import $ from "jquery";
// alert("hello world");
/*import React from "react";
import { render } from "react-dom";

function 主页() {
  return <div>hello world</div>;
}

render(<主页 />, document.getElementById("root"));
*/
document.getElementById("root").innerHTML = `
<div
      id="my导航栏"
      class="container-fluid fixed-top"
      style="padding-right:0;padding-left:0;"
    >
      <nav
        class="navbar navbar-expand-sm bg-light navbar-light"
        style="padding-right:0;padding-left:0;"
      >
        <div>
          <a
            class="navbar-brand navbar-brand mui-btn mui-btn-primary mui-btn-outlined"
            href="https://masx200.github.io/index.html"
            >masx200的
            <hr id="hidewidthless500" />
            github主页
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">
          <a class="nav-link mui-btn mui-btn-primary mui-btn-outlined" href="#README" id="title">ditto</a>
          </li>
        </ul>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <div id="sidebar" class="navbar-nav"></div>
        </div>
      </nav>
    </div>
    <div id="my主体" class="container">
      <div id="loading">
        <h1>
          Loading ...
        </h1>
      </div>
      <div id="content"></div>
      <div id="hide"></div>
      <div id="back_to_top">top</div>

      <div >
      <h1 id="error"></h1></div>
    </div>`;
// $("head").append(`<script type="text/x-mathjax-config">
//     MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"]],processRefs:!0},TeX:{equationNumbers:{autoNumber:"all",formatID:function(n){return"("+n+")"},formatURL:function(n){return null}}}});
//   </script>`);
// $.getScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js"
// ).then(() => {
//   console.log(window.MathJax);

// var MathJax = window.MathJax;
import("./MathJax/index").then(module => {
  // console.log(module);
  var MathJax = module.default;
  MathJax.Hub.Config({
    tex2jax: { inlineMath: [["$", "$"]], processRefs: !0 },
    TeX: {
      equationNumbers: {
        autoNumber: "all",
        formatID: function(n) {
          return "(" + n + ")";
        },
        formatURL: function(n) {
          return null;
        }
      }
    }
  });
});

import("./render");
// .then(() => {
//   // console.log("加载render");
// });
// });

import("bootstrap");
// .then(m => console.log(m));

// import ClipboardJS from "./clipboard.min.js";

// // then(m => {
// //   console.log(m);
// //   let ClipboardJS = m.default;
// new ClipboardJS(".btn").on("success", function(e) {
//   if (!e.text) {
//     console.log("复制内容空");
//   } else {
//     //   console.info("Action:", e.action);
//     console.info("Text:", e.text);
//   }

//   e.clearSelection();
// });
// });

import("./clipboard").then(m => {
  // console.log(m);
  let ClipboardJS = m.default;
  const nclp = new ClipboardJS(".btn").on("success", function(e) {
    if (!e.text) {
      console.log("复制内容空");
    } else {
      //   console.info("Action:", e.action);
      console.info("Text:", e.text);
    }

    e.clearSelection();
  });
  // console.log(nclp);
});

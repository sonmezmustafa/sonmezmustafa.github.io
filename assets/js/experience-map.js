(function () {
  var root = document.getElementById("xp");
  var src = document.getElementById("xp-data");
  if (!root || !src) return;

  var D = JSON.parse(src.textContent);
  var L = root.getAttribute("data-lang") || "tr";
  var U = D.ui[L];
  var map = root.querySelector(".xp-map");
  var stage = root.querySelector(".xp-stage");
  var svg = root.querySelector(".xp-lines");
  var drawer = root.querySelector(".xp-drawer");
  var NS = "http://www.w3.org/2000/svg";
  var W = 1000, H = 980, MX = 500, MY = 490;
  var SPREAD = { 1: 0, 2: 30, 3: 46, 4: 60, 5: 72, 6: 80 };

  var nodes = {};
  var edges = [];
  var adj = {};

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function place(n, angle, r) {
    var t = angle * Math.PI / 180;
    n.x = MX + Math.cos(t) * r;
    n.y = MY + Math.sin(t) * r;
  }

  function link(a, b, kind) {
    edges.push({ a: a, b: b, kind: kind });
    (adj[a] = adj[a] || []).push(b);
    (adj[b] = adj[b] || []).push(a);
  }

  nodes.center = { id: "center", kind: "center", x: MX, y: MY };

  D.arms.forEach(function (arm) {
    var g = { id: "g-" + arm.id, kind: "group", arm: arm.id, data: arm, kids: [] };
    place(g, arm.angle, 175);
    nodes[g.id] = g;
    link("center", g.id, "core");
    var n = arm.nodes.length;
    var spread = SPREAD[n] != null ? SPREAD[n] : 80;
    arm.nodes.forEach(function (c, i) {
      var a = n > 1 ? arm.angle - spread / 2 + i * spread / (n - 1) : arm.angle;
      var node = { id: c.id, kind: "node", arm: arm.id, data: c, group: g.id };
      place(node, a, i % 2 ? 300 : 425);
      nodes[c.id] = node;
      g.kids.push(c.id);
      link(g.id, c.id, "arm");
    });
  });

  D.arms.forEach(function (arm) {
    arm.nodes.forEach(function (c) {
      (c.links || []).forEach(function (id) {
        if (nodes[id]) link(c.id, id, "cross");
      });
    });
  });

  edges.forEach(function (e) {
    var p = document.createElementNS(NS, "path");
    var A = nodes[e.a], B = nodes[e.b];
    var d;
    if (e.kind === "cross") {
      var cx = (A.x + B.x) / 2 + (MX - (A.x + B.x) / 2) * 0.55;
      var cy = (A.y + B.y) / 2 + (MY - (A.y + B.y) / 2) * 0.55;
      d = "M" + A.x + "," + A.y + " Q" + cx + "," + cy + " " + B.x + "," + B.y;
    } else {
      d = "M" + A.x + "," + A.y + " L" + B.x + "," + B.y;
    }
    p.setAttribute("d", d);
    p.setAttribute("class", "xp-edge xp-edge-" + e.kind);
    p.setAttribute("vector-effect", "non-scaling-stroke");
    svg.appendChild(p);
    e.el = p;
  });

  Object.keys(nodes).forEach(function (id) {
    var n = nodes[id];
    var b = document.createElement("button");
    b.type = "button";
    b.style.left = (n.x / W * 100) + "%";
    b.style.top = (n.y / H * 100) + "%";
    if (n.kind === "center") {
      b.className = "xp-center";
      b.innerHTML = "<strong>" + esc(D.center[L].name) + "</strong><span>" + esc(D.center[L].tag) + "</span>";
    } else {
      var t = n.data[L];
      b.className = "xp-node" + (n.kind === "group" ? " xp-group" : "");
      b.setAttribute("data-arm", n.arm);
      b.innerHTML = "<strong>" + esc(t.name) + "</strong><small>" + esc(t.tag) + "</small>";
    }
    b.addEventListener("click", function () { select(id, true); });
    stage.appendChild(b);
    n.el = b;
  });

  function chips(ids) {
    return "<p class=\"xp-chips\">" + ids.map(function (id) {
      return "<button type=\"button\" class=\"xp-chip\" data-arm=\"" + nodes[id].arm + "\" data-go=\"" + id + "\">" + esc(nodes[id].data[L].name) + "</button>";
    }).join("") + "</p>";
  }

  function armOf(n) {
    for (var i = 0; i < D.arms.length; i++) if (D.arms[i].id === n.arm) return D.arms[i];
  }

  function render(n) {
    var h = "";
    if (n.kind === "center") {
      var c = D.center[L];
      h += "<h2>" + esc(c.title) + "</h2><p>" + esc(c.text) + "</p>";
      h += "<h3>" + esc(U.roles_title) + "</h3><ol class=\"xp-roles\">" + c.roles.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ol>";
      h += "<h3>" + esc(U.tools_title) + "</h3><p class=\"xp-tools\">" + esc(c.tools) + "</p>";
    } else if (n.kind === "group") {
      var t = n.data[L];
      h += "<p class=\"xp-eyebrow\">" + esc(t.tag) + "</p><h2>" + esc(t.name) + "</h2><p>" + esc(t.text) + "</p>";
      h += "<h3>" + esc(U.contains) + "</h3>" + chips(n.kids);
    } else {
      var d = n.data, t2 = d[L];
      h += "<p class=\"xp-eyebrow\">" + esc(armOf(n)[L].name) + " · " + esc(t2.tag) + "</p><h2>" + esc(t2.name) + "</h2><p>" + esc(t2.text) + "</p>";
      if (d.works && d.works.length) {
        h += "<ul class=\"xp-works\">" + d.works.map(function (w) {
          var name = w.url ? "<a href=\"" + esc(w.url) + "\">" + esc(w[L].name) + "</a>" : esc(w[L].name);
          var pill = w.codigno ? " <span class=\"xp-pill\">" + esc(U.codigno) + "</span>" : "";
          var mods = w[L].mods && w[L].mods.length ? "<p class=\"xp-mods\">" + w[L].mods.map(function (m) { return "<span>" + esc(m) + "</span>"; }).join("") + "</p>" : "";
          return "<li><h3>" + name + pill + "</h3><p>" + esc(w[L].text) + "</p>" + mods + "</li>";
        }).join("") + "</ul>";
      }
      var rel = (adj[n.id] || []).filter(function (id) { return nodes[id].kind === "node"; });
      if (rel.length) h += "<h3>" + esc(U.related) + "</h3>" + chips(rel);
    }
    drawer.innerHTML = h;
  }

  function select(id, user) {
    var n = nodes[id];
    var on = {}, near = {};
    on[id] = true;
    if (n.kind !== "center") {
      (adj[id] || []).forEach(function (x) { near[x] = true; });
      if (n.group) near.center = true;
    }
    Object.keys(nodes).forEach(function (k) {
      var el = nodes[k].el;
      el.classList.toggle("is-on", !!on[k]);
      el.classList.toggle("is-near", !!near[k]);
      el.classList.toggle("is-dim", n.kind !== "center" && !on[k] && !near[k]);
      el.setAttribute("aria-pressed", on[k] ? "true" : "false");
    });
    edges.forEach(function (e) {
      var hit = n.kind !== "center" && (e.a === id || e.b === id || (n.group && e.a === "center" && e.b === n.group));
      e.el.classList.toggle("is-on", hit);
      e.el.classList.toggle("is-dim", n.kind !== "center" && !hit);
    });
    render(n);
    if (user && drawer.getBoundingClientRect().top > window.innerHeight) {
      drawer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  drawer.addEventListener("click", function (ev) {
    var b = ev.target.closest("[data-go]");
    if (b) select(b.getAttribute("data-go"), false);
  });
  root.querySelector(".xp-reset").addEventListener("click", function () { select("center", false); });

  function scale() {
    var s = Math.max(0.74, Math.min(1, stage.clientWidth / W));
    stage.style.setProperty("--s", s.toFixed(3));
  }
  if (window.ResizeObserver) new ResizeObserver(scale).observe(stage);
  window.addEventListener("resize", scale);

  map.hidden = false;
  root.classList.add("xp-ready");
  scale();
  select("center", false);
})();

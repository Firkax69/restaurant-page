(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("img");n.src="https://imageio.forbes.com/blogs-images/eustaciahuen/files/2018/11/IMG_65457-1200x800.jpg?height=474&width=711&fit=bounds",t.appendChild(n);const d=document.createElement("h1");d.textContent="Welcome to our restaurant!",t.appendChild(d);const c=document.createElement("p");c.textContent="We serve the best food in town. Come in and try!",t.appendChild(c),e.appendChild(t)};function t(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}(()=>{const n=document.querySelector("#content"),d=document.createElement("div");d.classList.add("btnContainer"),n.appendChild(d);const c=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div");c.setAttribute("id","home-btn"),o.setAttribute("id","menu-btn"),a.setAttribute("id","contact-btn"),c.classList.add("tab"),o.classList.add("tab"),a.classList.add("tab"),c.textContent="Home",o.textContent="Menu",a.textContent="Contact",d.appendChild(c),d.appendChild(o),d.appendChild(a),c.addEventListener("click",(()=>{t(),e()})),o.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="Our menu";const d=document.createElement("ul"),c=document.createElement("li");c.textContent="Pomodoro";const o=document.createElement("li");o.textContent="Bolognesa";const a=document.createElement("li");a.textContent="Alfredo",d.appendChild(c),d.appendChild(o),d.appendChild(a),t.appendChild(n),t.appendChild(d),e.appendChild(t)})()})),a.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("form");n.classList.add("contact-form");const d=document.createElement("input");d.type="text",d.placeholder="Enter heading",n.appendChild(d);const c=document.createElement("input");c.type="text",c.placeholder="Enter address",n.appendChild(c);const o=document.createElement("input");o.type="text",o.placeholder="Enter phone",n.appendChild(o);const a=document.createElement("input");a.type="submit",a.value="submit",n.appendChild(a),t.appendChild(n),e.appendChild(t)})()}))})(),e()})();
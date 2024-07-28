const tab = window.open("about:blank", "_blank", true);
const doc = tab.document;

const ifra = doc.createElement("iframe");
ifra.src = document.getElementById("url").innerText;
ifra.style.border = "none";
ifra.width = "100%";
ifra.height = "100%";

doc.body.appendChild(ifra);

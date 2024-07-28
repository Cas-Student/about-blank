const tab = window.open("about:blank", "_blank", true);
const doc = tab.document;

const ifra = doc.createElement("iframe");
ifra.src = "https://start.hcps.org";

doc.body.appendChild(ifra);

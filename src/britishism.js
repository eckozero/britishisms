
var Britishism = function() {
};

Britishism.prototype.traverse = function(node) {
  var child, next;

  switch (node.nodeType)  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        this.traverse(child);
        child = next;
      }
      break;

    case 3: // Text node
      node.nodeValue = this.transformText(node.nodeValue);
      break;
  }
};

Britishism.prototype.transformText = function(text) {

  text = text.replace(/\baluminum\b/g, "aluminium");
  text = text.replace(/\bAluminum\b/g, "Aluminium");
  text = text.replace(/\bALUMINUM\b/g, "ALUMINIUM");

  text = text.replace(/\bcookie\b/g, "biscuit");
  text = text.replace(/\bcookies\b/g, "biscuits");
  text = text.replace(/\bCookie\b/g, "Biscuit");
  text = text.replace(/\bCookies\b/g, "Biscuits");
  text = text.replace(/\bCOOKIE\b/g, "BISCUIT");
  text = text.replace(/\bCOOKIES\b/g, "BISCUITS");

  text = text.replace(/\bsidewalk\b/g, "pavement");
  text = text.replace(/\bSidewalk\b/g, "Pavement");

  text = text.replace(/\bjaywalking\b/g, "crossing the road");
  text = text.replace(/\bJaywalking\b/g, "Crossing the road");
  text = text.replace(/\bJaywalk\b/g, "Cross the road");
  text = text.replace(/\bjaywalk\b/g, "cross the road");
  text = text.replace(/\bjaywalker\b/g, "person who crosses the road");
  text = text.replace(/\bJaywalker\b/g, "Person who crosses the road");

  text = text.replace(/\biPod\b/g, "stupid hipster music player");
  text = text.replace(/\biPods\b/g, "stupid hipster music players");
  text = text.replace(/\bMac\b/g, "Stupid Hipster Computer");
  text = text.replace(/\bMacbook\b/g, "Stupid Hipster Laptop");
  text = text.replace(/\bMacBook\b/g, "Stupid Hipster Laptop");
  text = text.replace(/\biMac\b/g, "Stupid Tiny Hipster Computer");
  text = text.replace(/\biPhone\b/g, "stupid hipster phone");
  text = text.replace(/\biPhones\b/g, "stupid hipster phones");

  return text;
};

if (typeof module !== 'undefined') {
  module.exports = Britishism;
}


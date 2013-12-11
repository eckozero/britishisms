
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


  return text;
};

if (typeof module !== 'undefined') {
  module.exports = Britishism;
}


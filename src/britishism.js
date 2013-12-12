
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
  text = text.replace(/\bSIDEWALK\b/g, "PAVEMENT");

  text = text.replace(/\bblud\b/g, "old bean");
  text = text.replace(/\bBlud\b/g, "Old bean");

  text = text.replace(/\bjaywalking\b/g, "crossing the road");
  text = text.replace(/\bJaywalking\b/g, "Crossing the road");
  text = text.replace(/\bJaywalk\b/g, "Cross the road");
  text = text.replace(/\bjaywalk\b/g, "cross the road");
  text = text.replace(/\bjaywalker\b/g, "person who crosses the road");
  text = text.replace(/\bJaywalker\b/g, "Person who crosses the road");

  text = text.replace(/\bcolor\b/g, "colour");
  text = text.replace(/\bColor\b/g, "Colour");
  text = text.replace(/\bCOLOR\b/g, "COLOUR");

  text = text.replace(/\bbillion\b/g, "thousand million");
  text = text.replace(/\bbillions\b/g, "thousand millions");
  text = text.replace(/\bBillion\b/g, "Thousand million");
  text = text.replace(/\bBillions\b/g, "Thousand millions");

  text = text.replace(/\bgray\b/g, "grey");

  text = text.replace(/\bZIP[- ]?code\b/g, "postcode");
  text = text.replace(/\bZIP[- ]?Code\b/g, "Postcode");
  // Covers words such as "ZIP codes" and "ZIP coded"
  text = text.replace(/\bZIP[- ]?code\B/g, "postcode");

  // Cars and roads
  text = text.replace(/\bsedan\b/g, "saloon");
  text = text.replace(/\bSedan\b/g, "Saloon");
  text = text.replace(/\bSEDAN\b/g, "SALOON");

  text = text.replace(/\bstation[- ]?wagon\b/g, "estate car");
  text = text.replace(/\bStation[- ]?wagon\b/g, "Estate car");
  text = text.replace(/\bStation[- ]?Wagon\b/g, "Estate Car");
  text = text.replace(/\bSTATION[- ]?WAGON\b/g, "ESTATE CAR");

  text = text.replace(/\b18[- ]?wheeler\b/g, "juggernaut");
  text = text.replace(/\b18[- ]?Wheeler\b/g, "Juggernaut");

  text = text.replace(/\bhighway\b/g, "motorway");
  text = text.replace(/\bHighway\b/g, "Motorway");
  text = text.replace(/\\HIGHWAY\b/g, "MOTORWAY");
  text = text.replace(/\bfreeway\b/g, "motorway");
  text = text.replace(/\bFreeway\b/g, "Motorway");
  text = text.replace(/\bFREEWAY\b/g, "MOTORWAY");
  text = text.replace(/\binterstate\b/g, "motorway");
  text = text.replace(/\bInterstate\b/g, "Motorway");
  text = text.replace(/\bINTERSTATE\b/g, "MOTORWAY");
  text = text.replace(/\bexpressway\b/g, "motorway");
  text = text.replace(/\bExpressway\b/g, "Motorway");
  text = text.replace(/\bEXPRESSWAY\b/g, "MOTORWAY");

  text = text.replace(/\bgasoline\b/g, "petrol");
  text = text.replace(/\bGasoline\b/g, "Petrol");
  text = text.replace(/\bGASOLINE\b/g, "PETROL");

  text = text.replace(/\bstick[- ]?shift\b/g, "manual gearbox");
  text = text.replace(/\bstick[- ]?shifts\b/g, "manual gearboxes");
  text = text.replace(/\bStick[- ]?shift\b/g, "Manual gearbox");
  text = text.replace(/\bStick[- ]?shifts\b/g, "Manual gearboxes");
  text = text.replace(/\bSTICK[- ]?SHIFT\b/g, "MANUAL GEARBOX");
  text = text.replace(/\bSTICK[- ]?SHIFTS\b/g, "MANUAL GEARBOXES");


  // Word fragments (e.g. ize instead of ise)
  // Not at the end of a word (e.g. realized --> realised, realizes --> realises)
  text = text.replace(/\b[^(Cit|cit)]\Bize\B/g, "ise");
  // Specifically at the end of a word (e.g. realize --> realise)
  text = text.replace(/\Bize\b/g, "ise");
  text = text.replace(/\Bizing\b/g, "ising");
  // There's a regex for this but every time I try it breaks so the fix
  // presented here is necessary but ugly
  // the 'ize' in 'size' has been replaced with 'ise' already
  text = text.replace(/\bSise\b/g, "Size");
  text = text.replace(/\bsise\b/g, "size");
  text = text.replace(/\bSises\b/g, "Sizes");
  text = text.replace(/\bsises\b/g, "sizes");
  text = text.replace(/\bRe[- ]?sise\b/g, "Resize");
  text = text.replace(/\bre[- ]?sise\b/g, "resize");
  text = text.replace(/\bRe[- ]?sises\b/g, "Resizes");
  text = text.replace(/\bre[- ]?sises\b/g, "resizes");


  // Personal fun stuff below
  text = text.replace(/\biPod\b/g, "Stupid Hipster Music Player");
  text = text.replace(/\biPods\b/g, "Stupid Hipster Music Players");
  text = text.replace(/\bMac\b/g, "Stupid Hipster Computer");
  text = text.replace(/\bMacbook\b/g, "Stupid Hipster Laptop");
  text = text.replace(/\bMacBook\b/g, "Stupid Hipster Laptop");
  text = text.replace(/\biMac\b/g, "Stupid Tiny Hipster Computer");
  text = text.replace(/\biPhone\b/g, "Stupid Hipster Phone");
  text = text.replace(/\biPhones\b/g, "Stupid Hipster Phones");
  text = text.replace(/\biTunes\b/g, "Stupid Hipster Music Distribution Service");
  text = text.replace(/\biPad\b/g, "Stupid Hipster Tablet Computer");

  return text;
};

if (typeof module !== 'undefined') {
  module.exports = Britishism;
}


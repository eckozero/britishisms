
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

  text = text.replace(/\bapartment\b/g, "flat");
  text = text.replace(/\bApartment\b/g, "Flat");
  text = text.replace(/\bAPARTMENT\b/g, "FLAT");
  text = text.replace(/\bapartments\b/g, "flats");
  text = text.replace(/\bApartments\b/g, "Flats");
  text = text.replace(/\bAPARTMENTS\b/g, "FLATS");

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

  // Experimental regexps ahead...
  text = text.replace(/\b(highway|freeway|interstate|expressway)\b/g, "motorway");
  text = text.replace(/\b(highways|freeways|interstates|expressways)\b/g, "motorways");
  text = text.replace(/\b(Highway|Freeway|Interstate|Expressway)\b/g, "Motorway");
  text = text.replace(/\b(Highways|Freeways|Interstates|Expressways)\b/g, "Motorways");
  text = text.replace(/\b(HIGHWAY|FREEWAY|INTERSTATE|EXPRESSWAY)\b/g, "MOTORWAY");
  text = text.replace(/\b(HIGHWAYS|FREEWAYS|INTERSTATES|EXPRESSWAYS)\b/g, "MOTORWAY");
  // End experimental regexps...

  text = text.replace(/\bgasoline\b/g, "petrol");
  text = text.replace(/\bGasoline\b/g, "Petrol");
  text = text.replace(/\bGASOLINE\b/g, "PETROL");

  text = text.replace(/\bstick[- ]?shift\b/g, "manual gearbox");
  text = text.replace(/\bstick[- ]?shifts\b/g, "manual gearboxes");
  text = text.replace(/\bStick[- ]?shift\b/g, "Manual gearbox");
  text = text.replace(/\bStick[- ]?shifts\b/g, "Manual gearboxes");
  text = text.replace(/\bSTICK[- ]?SHIFT\b/g, "MANUAL GEARBOX");
  text = text.replace(/\bSTICK[- ]?SHIFTS\b/g, "MANUAL GEARBOXES");

  // Food and drink
  


  // Word fragments (e.g. ize instead of ise)
  // Not at the end of a word (e.g. realized --> realised, realizes --> realises)
  text = text.replace(/[^((Cit)|(cit)|(Se)|(se)|(Pr)|(pr)|(S)|(s))]ize/g, function($0, $1) {return $0.slice(0,1) + "ise"});
  text = text.replace(/(hes)ize/g, function($0, $1) {return $0.slice(0,3) + "ise"});
  // Specifically at the end of a word (e.g. realize --> realise)
  //text = text.replace(/\Bize\b/g, "ise");
  text = text.replace(/[^((S)|(s))]izing/g, function($0, $1) {return $0.slice(0,1) + "ising"});
  // Bizarre, lizard, pizazz, sizable
  text = text.replace(/[^(b)|(B)|(P)|(p)|(S)|(s)|(l)|(L)]iza/g, function($0, $1) {return $0.slice(0,1) + "isa"});
  text = text.replace(/izat/g, "isat");
  text = text.replace(/[^(S)|(s)]izab/g, function($0, $1) {return $0.slice(0,1) + "isab"});
  //text = text.replace(/iza[^((ard)|(rr)|(z)|)]/g, function($0, $1) {return "isa" + $0.slice(0,1});

  // There's a regex for this but every time I try it breaks so the fix
  // presented here is necessary but ugly
  // UPDATE: Apparently there is not as JavaScript doesn't support negative look-behinds
  // the 'ize' in 'size' has been replaced with 'ise' already
  /*
  text = text.replace(/\bSise\b/g, "Size");
  text = text.replace(/\bsise\b/g, "size");
  text = text.replace(/\bSises\b/g, "Sizes");
  text = text.replace(/\bsises\b/g, "sizes");
  text = text.replace(/\bRe[- ]?sise\b/g, "Resize");
  text = text.replace(/\bre[- ]?sise\b/g, "resize");
  text = text.replace(/\bRe[- ]?sises\b/g, "Resizes");
  text = text.replace(/\bre[- ]?sises\b/g, "resizes");
  */


  return text;
};

if (typeof module !== 'undefined') {
  module.exports = Britishism;
}


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
  // Not commonly used as ZIP is an acronymn
  text = text.replace(/\bzip[- ]?code\b/g, "postcode");
  // Covers words such as "ZIP codes" and "ZIP coded"
  text = text.replace(/\bZIP[- ]?code\B/g, "postcode");
  // Covers non-capitals too...
  text = text.replace(/\bzip[- ]?code\B/g, "postcode");
  
  text = text.replace(/\bMail\b/g, "Post");
  text = text.replace(/\bmail\b/g, "post");
  text = text.replace(/\bMAIL\b/g, "POST");
  text = text.replace(/\bmail[- ]?box\b/gi, "Letter Box");
  

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
  
  text = text.replace(/\bWindshield/g, "Windscreen");
  text = text.replace(/\bwindshield/g, "windscreen");
  text = text.replace(/\bWINDSHIELD/g, "WINDSCREEN");

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
  
  
  // Aviation
  text = text.replace(/\bAirplane\b/g, "Aeroplane");
  text = text.replace(/\bairplane\b/g, "aeroplane");
  text = text.replace(/\bAIRPLANE\b/g, "AEROPLANE");
  
  text = text.replace(/\bAirfoil\b/g, "Aerofoil");
  text = text.replace(/\bairfoil\b/g, "aerofoil");
  text = text.replace(/\bAIRFOIL\b/g, "AEROFOIL");
  
  // Tools & things
  text = text.replace(/\bAllen[- ]?wrench\b/gi, "Allen key");
  text = text.replace(/\bWrench\b/g, "spanner");
  text = text.replace(/\bwrench\b/g, "Spanner");
  text = text.replace(/\bWRENCH\b/g, "SPANNER");
  
  text = text.replace(/\bcookie[- ]?sheet\b/g, "baking tray");
  text = text.replace(/\bbiscuit[- ]?sheet\b/g, "baking tray");
  
  text = text.replace(/\bCinder[- ]?[B|b]lock\b/g, "Breeze block");
  text = text.replace(/\bcinder[- ]?[B|b]lock\b/g, "breeze block");
  
  text = text.replace(/\b[C|c]ylinder[- ]?[L|l]ock/g, "Yale lock");
  text = text.replace(/\bCYLINDER[- ]LOCK/g, "YALE LOCK");
  
  text = text.replace(/\bLumber\b/g, "Timber");
  text = text.replace(/\blumber\b/g, "timber");
  text = text.replace(/\bLUMBER\b/g, "TIMBER");
  
  text = text.replace(/\balligator[- ]?clip\b/gi, "crocodile clip");
  text = text.replace(/\bAlligator[- ]?[C|c]lip\b/g, "Crocodile clip");
  
  text = text.replace(/\bGround[- ]?[W|w]ire\b/g, "Earth wire");
  text = text.replace(/\bground[- ]?wire\b/g, "earth wire");


  // Food and drink (and medication)
  text = text.replace(/\bfries\b/g, "chips");
  text = text.replace(/\bFrench[- ]?fries\b/g, "chips");
  
  text = text.replace(/\b[C|c]andy[- ]?[A|a]pple/g, "Toffee Apple");

  text = text.replace(/\bcandy\b/g, "sweets");
  text = text.replace(/\bCandy\b/g, "Sweets");

  text = text.replace(/\bcandy[- ]?bar\b/g, "chocolate bar");
  text = text.replace(/\bCandy[- ]?[B|b]ar\b/g, "Chocolate bar");
  
  text = text.replace(/\bPotato[- ]?[C|c]hip/g, "Crisp");
  text = text.replace(/\bpotato[- ]?chip/g, "crisp");
  
  text = text.replace(/\bAnise\b/g, "Aniseed");
  text = text.replace(/\banise\b/g, "aniseed");
  text = text.replace(/\bANISE\b/g, "ANISEED");
  
  text = text.replace(/\bEggplant/g, "Aubergine");
  text = text.replace(/\beggplant/g, "aubergine");
  text = text.replace(/\bEGGPLANT/g, "AUBERGINE");
  
  text = text.replace(/\bBeet[s]?\b/g, "Beetroot");
  text = text.replace(/\bbeet[s]?\b/g, "beetroot");
  text = text.replace(/\bBEET[S]?\b/g, "BEETROOT");
  
  text = text.replace(/\bZucchini\b/g, "Courgette");
  text = text.replace(/\bzucchini\b/g, "courgette");
  text = text.replace(/\bZUCCHINI\b/g, "COURGETTE");
  
  text = text.replace(/\bSnow[- ]?[P|p]ea/g, "Mangetout");
  text = text.replace(/\bsnow[- ]?pea/g, "mangetout");
  
  text = text.replace(/\bFish[- ]?[S|s]tick/g, "Fish finger");
  text = text.replace(/\bfish[- ]?stick/g, "fish finger");
  text = text.replace(/\bFISH[- ]?STICK/g, "FISH FINGER");
  
  
  
  text = text.replace(/\bacetaminophen\b/gi, "Paracetamol");



  // Clothing
  text = text.replace(/\bsweater[- ]?vest/gi, "Sleeveless Jumper");
  text = text.replace(/\bsweater\b/g, "jumper");
  text = text.replace(/\bSweater\b/g, "Jumper");
  text = text.replace(/\bsweaters\b/g, "jumpers");
  text = text.replace(/\bSweaters\b/g, "Jumpers");
  text = text.replace(/\bvest\b/g, "waistcoat");
  text = text.replace(/\bVest\b/g, "Waistcoat");
  text = text.replace(/\bvests\b/g, "waistcoats");
  text = text.replace(/\bVests\b/g, "Waistcoats");
  text = text.replace(/\bpanties\b/g, "knickers");
  text = text.replace(/\bPanties\b/g, "Knickers");
  text = text.replace(/\bpantyhose\b/g, "tights");
  text = text.replace(/\bPantyhose\b/g, "Tights");
  text = text.replace(/\bpanty[- ]?hose\b/gi, "tights");
  text = text.replace(/\bsneakers\b/g, "trainers");
  text = text.replace(/\bSneakers\b/g, "Trainers");
  text = text.replace(/\bZipper/g, "Zip");
  text = text.replace(/\bzipper/g, "zip");
  text = text.replace(/\bZIPPER/g, "ZIP");
  text = text.replace(/\bWindbreaker/g, "Cagoule");
  text = text.replace(/\bwindbreaker/g, "cagoule");
  text = text.replace(/\bWINDBREAKER/g, "CAGOULE");

  // Miscellany
  text = text.replace(/\bThanksgiving\b/gi, "Holiday about a month before Christmas");

  text = text.replace(/\bLumberjack\b/g, "Woodcutter");
  text = text.replace(/\blumberjack\b/g, "woodcutter");
  text = text.replace(/\bLUMBERJACK\b/g, "WOODCUTTER");

  

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
  text = text.replace(/yze/g, "yse");
  text = text.replace(/YZE/g, "YSE");
  
  text = text.replace(/\Balog\b/g, "alogue");


  return text;
};

if (typeof module !== 'undefined') {
  module.exports = Britishism;
}

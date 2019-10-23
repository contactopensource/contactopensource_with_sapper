export let asset_uri = "http://0.0.0.0:8000/assets";
export let api_uri = "http://0.0.0.0:8000/api";

////
//
// Vet: handle values that are defined or undefined.
//
////

// If the parameter is defined, then return true, else return false.
export function vet(x) {
    return typeof(x) != "undefined";
}

// If the parameter is defined, then return it, else return a fallback.
export function vet_to(x, fallback) {
    return (typeof(x) != "undefined") ? x : fallback;
}

// If the parameter is defined, then return it, else return a blank string.
export function vet_to_string(x) {
    return (typeof(x) != "undefined") ? x : "";
}

////
//
// Object helpers: convert JSON API objects and attributes to other formats.
//
////

// Object to URI string e.g. "/organizations/43757be279e8785b2489660609081be2".
export function o_to_uri(o) {
    return "/" + o.type + "s/" + o.id;
}

// Object to box img URI string e.g. "https://assets.example.com/images/keys/alice_adams/avatar.jpg".
export function o_to_box_img_uri(o) {
    return asset_uri + "/images/keys/" + o.attributes.box_img_uri;
}

// Object to top img URI string e.g. "https://assets.example.com/images/keys/alice_adams/hero.jpg".
export function o_to_top_img_uri(o) {
    return asset_uri + "/images/keys/" + o.attributes.top_img_uri;
}

// Object to title string e.g. "Alice Adams".
export function o_to_title(o) {
    return (typeof o.attributes.title === 'string') 
    ? o.attributes.title 
    : (typeof o.attributes.name === 'string') 
    ? o.attributes.name
    : "";
}

// Object to subtitle string e.g. Alice Adams contact information list.
export function o_subtitle(o) {
    var s = "";
    if (typeof o.attributes.website_uri === 'string') {
        s = s + "<a href=\"" + o.attributes.website_uri + "\">" + o.attributes.website_uri + "</a><br>\n";
    }
    if (typeof o.attributes.email_address === 'string') {
        s = s + "<a href=\"mailto:" + o.attributes.email_address + "\">" + o.attributes.email_address + "</a><br>\n";
    }
    if (typeof o.attributes.telephone_number === 'string') {
        s = s + "<a href=\"tel:" + o.attributes.telephone_number + "\">" + o.attributes.telephone_number + "</a><br>\n";
    }
    if (typeof o.attributes.map_uri === 'string') {
        s = s + "<a href=\"" + o.attributes.map_uri + "\">Map</a><br>\n";
    }
    return s;
}

// Person to content string e.g. Alice Adams list of fields and values.
export function o_person_to_content(o) {
    var s = "<ul>\n";
    if (typeof o.attributes.given_name === 'string'){ s = s + "<li>Given name:" + o.attributes.given_name + "</li>"; }
    if (typeof o.attributes.given_name_phonetic === 'string'){ s = s + "<li>Given name (phonetic):" + o.attributes.given_name_phonetic + "</li>"; }
    if (typeof o.attributes.middle_name === 'string'){ s = s + "<li>Midde name:" + o.attributes.middle_name + "</li>"; }
    if (typeof o.attributes.middle_name_phonetic === 'string'){ s = s + "<li>Midde name (phonetic):" + o.attributes.middle_name_phonetic + "</li>"; }
    if (typeof o.attributes.family_name === 'string'){ s = s + "<li>Family name:" + o.attributes.family_name + "</li>"; }
    if (typeof o.attributes.family_name_phonetic === 'string'){ s = s + "<li>Family name (phonetic):" + o.attributes.family_name_phonetic + "</li>"; }
    if (typeof o.attributes.legal_name === 'string'){ s = s + "<li>Legal name:" + o.attributes.legal_name + "</li>"; }
    if (typeof o.attributes.legal_name_phonetic === 'string'){ s = s + "<li>Legal name (phonetic):" + o.attributes.legal_name_phonetic + "</li>"; }
    if (typeof o.attributes.prefix_name === 'string'){ s = s + "<li>Prefix name:" + o.attributes.prefix_name + "</li>"; }
    if (typeof o.attributes.prefix_name_phonetic === 'string'){ s = s + "<li>Prefix name (phonetic):" + o.attributes.prefix_name_phonetic + "</li>"; }
    if (typeof o.attributes.suffix_name === 'string'){ s = s + "<li>Suffix name:" + o.attributes.suffix_name + "</li>"; }
    if (typeof o.attributes.suffix_name_phonetic === 'string'){ s = s + "<li>Suffix name (phonetic):" + o.attributes.suffix_name_phonetic + "</li>"; }
    if (typeof o.attributes.salutation_name === 'string'){ s = s + "<li>Salutation name:" + o.attributes.salutation_name + "</li>"; }
    if (typeof o.attributes.salutation_name_phonetic === 'string'){ s = s + "<li>Salutation name (phonetic):" + o.attributes.salutation_name_phonetic + "</li>"; }
    if (typeof o.attributes.addressee_name === 'string'){ s = s + "<li>Addressee name:" + o.attributes.addressee_name + "</li>"; }
    if (typeof o.attributes.addressee_name_phonetic === 'string'){ s = s + "<li>Addressee name (phonetic):" + o.attributes.addressee_name_phonetic + "</li>"; }
    if (typeof o.attributes.nickname === 'string'){ s = s + "<li>Nickname:" + o.attributes.nickname + "</li>"; }
    if (typeof o.attributes.nickname_phonetic === 'string'){ s = s + "<li>Nickname name (phonetic):" + o.attributes.nickname_phonetic + "</li>"; }
    if (typeof o.attributes.subject_pronoun === 'string'){ s = s + "<li>Subject pronoun:" + o.attributes.subject_pronoun + "</li>"; }
    if (typeof o.attributes.object_pronoun === 'string'){ s = s + "<li>Object pronoun:" + o.attributes.object_pronoun + "</li>"; }
    if (typeof o.attributes.dependent_possessive_pronoun === 'string'){ s = s + "<li>Dependent possessive pronoun:" + o.attributes.dependent_possessive_pronoun + "</li>"; }
    if (typeof o.attributes.independent_possessive_pronoun === 'string'){ s = s + "<li>Independent possessive pronoun:" + o.attributes.independent_possessive_pronoun + "</li>"; }
    if (typeof o.attributes.reflexive_pronoun === 'string'){ s = s + "<li>Reflexive pronoun:" + o.attributes.reflexive_pronoun + "</li>"; }
    if (typeof o.attributes.intensive_pronoun === 'string'){ s = s + "<li>Intensive pronoun:" + o.attributes.intensive_pronoun + "</li>"; }
    if (typeof o.attributes.disjunctive_pronoun === 'string'){ s = s + "<li>Disjunctive pronoun:" + o.attributes.disjunctive_pronoun + "</li>"; }
    s = s + "</ul>\n";
    return s;
}

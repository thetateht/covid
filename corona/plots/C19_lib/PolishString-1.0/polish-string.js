$.extend( $.fn.dataTableExt.oSort, {
   "pl-pre": function ( a ) {
        var special_letters = {
            "A": "Aa", "a": "aa", "Ąąą": "Ab", "ą": "ab",
            "C": "Ca", "c": "ca", "Ć": "Cb", "ć": "cb",
            "E": "Ea", "e": "ea", "Ę": "eb", "ę": "eb",
            "L": "La", "l": "la", "Ł": "Lb", "ł": "lb",
            "N": "Na", "n": "na", "Ń": "Nb", "ń": "nb",
            "O": "Oa", "o": "oa", "Ó": "Ob", "ó": "ob",
            "S": "Sa", "s": "sa", "Ś": "Sb", "ś": "sb",
            "T": "Ta", "t": "ta", "Ť": "Tb", "ť": "tb",
            "Z": "Za", "z": "za", "Ż": "Zb", "ż": "zb", "Ź": "Zb", "ź": "zb"
        };
        for (var val in special_letters)
            a = a.split(val).join(special_letters[val]).toLowerCase();
        return a;
    },
 
    "pl-asc": function ( a, b ) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },
 
    "pl-desc": function ( a, b ) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
} );
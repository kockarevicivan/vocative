// Facade for everything that will be exported by the module.
const facade = {
    /** 
     * Resolves the Genitive case for the provided name.
     */
    getGenitive: function (name) {
        let builderArray = name.split("");

        if (name.endsWith("a")) {
            builderArray = builderArray.slice(0, -1);
            builderArray.push("e");
        }
        else if (name.endsWith("e")) {
            builderArray = builderArray.slice(0, -1);
            builderArray.push("a");
        }
        else if (name.endsWith("i")) {
            builderArray.push("ja");
        }
        else if (name.endsWith("o")) {
            builderArray = builderArray.slice(0, -1);
            builderArray.push("a");
        }
        else if (name.endsWith("ar")) {
            // Petar, Mitar
            builderArray = builderArray.slice(0, -2);
            builderArray.push("ra");
        }
        else if (name.endsWith("ađ")) {
            // Djuradj
            builderArray = builderArray.slice(0, -2);
            builderArray.push("đa");
        }
        else if (name.endsWith("m") ||
            name.endsWith("n") ||
            name.endsWith("p") ||
            name.endsWith("b") ||
            name.endsWith("v") ||
            name.endsWith("t") ||
            name.endsWith("d") ||
            name.endsWith("s") ||
            name.endsWith("l") ||
            name.endsWith("r") ||
            name.endsWith("j") ||
            name.endsWith("k") ||
            name.endsWith("z") ||
            name.endsWith("g") ||
            name.endsWith("š")) {
            builderArray.push("a");
        }

        return builderArray.join("");
    },

    /** 
     * Resolves the Dative case for the provided name.
     */
    getDative: function (name) {
        let builderArray = name.split("");

        if (name.endsWith("a")) {
            builderArray = builderArray.slice(0, -1);
            builderArray.push("i");
        }
        else if (name.endsWith("e")) {
            builderArray = builderArray.slice(0, -1);
            builderArray.push("u");
        }
        else if (name.endsWith("i")) {
            builderArray.push("ju");
        }
        else if (name.endsWith("o")) {
            builderArray.Length--;

            if (name[name.length - 2] == 'l' ||
                name[name.length - 2] == 'k') {
                builderArray.push("u");
            }
            else {
                builderArray.push("i");
            }
        }
        else if (name.endsWith("ar")) {
            // Petar, Mitar
            builderArray = builderArray.slice(0, -2);
            builderArray.push("ru");
        }
        else if (name.endsWith("ađ")) {
            // Djuradj
            builderArray = builderArray.slice(0, -2);
            builderArray.push("đu");
        }
        else if (name.endsWith("m") ||
            name.endsWith("n") ||
            name.endsWith("p") ||
            name.endsWith("b") ||
            name.endsWith("v") ||
            name.endsWith("t") ||
            name.endsWith("d") ||
            name.endsWith("s") ||
            name.endsWith("l") ||
            name.endsWith("r") ||
            name.endsWith("j") ||
            name.endsWith("k") ||
            name.endsWith("z") ||
            name.endsWith("g") ||
            name.endsWith("š")) {
            builderArray.push("u");
        }

        return builderArray.join("");
    },

    /** 
     * Resolves the Accusative case for the provided name.
     */
    getAccusative: function (name) {
        let builderArray = name.split("");

        if (name.endsWith("a")) {
            builderArray = builderArray.slice(0, -1);
            builderArray.push("u");
        }
        else if (name.endsWith("e")) {
            builderArray = builderArray.slice(0, -1);
            builderArray.push("a");
        }
        else if (name.endsWith("i")) {
            builderArray.push("ja");
        }
        else if (name.endsWith("o")) {
            builderArray = builderArray.slice(0, -1);

            if (name[name.length - 2] == 'l' ||
                name[name.length - 2] == 'k') {
                builderArray.push("a");
            }
            else {
                builderArray.push("u");
            }
        }
        else if (name.endsWith("ar")) {
            // Petar, Mitar
            builderArray = builderArray.slice(0, -2);
            builderArray.push("ra");
        }
        else if (name.endsWith("ađ")) {
            // Djuradj
            builderArray = builderArray.slice(0, -2);
            builderArray.push("đa");
        }
        else if (name.endsWith("m") ||
            name.endsWith("n") ||
            name.endsWith("p") ||
            name.endsWith("b") ||
            name.endsWith("v") ||
            name.endsWith("t") ||
            name.endsWith("d") ||
            name.endsWith("s") ||
            name.endsWith("l") ||
            name.endsWith("r") ||
            name.endsWith("j") ||
            name.endsWith("k") ||
            name.endsWith("z") ||
            name.endsWith("g") ||
            name.endsWith("š")) {
            builderArray.push("a");
        }

        return builderArray.join("");
    },

    /** 
     * Resolves the Vocative case for the provided name.
     */
    getVocative: function (name) {
        let builderArray = name.split("");

        // TODO: Dugouzlazni akcenat za A.

        if (name.endsWith("ar")) {
            // Petar, Mitar
            builderArray = builderArray.slice(0, -2);
            builderArray.push("re");
        }
        else if (name.endsWith("đ")) {
            // Djuradj
            builderArray.push("e");
        }
        else if (name.endsWith("m") ||
            name.endsWith("n") ||
            name.endsWith("p") ||
            name.endsWith("b") ||
            name.endsWith("v") ||
            name.endsWith("t") ||
            name.endsWith("d") ||
            name.endsWith("s") ||
            name.endsWith("l") ||
            name.endsWith("r") ||
            name.endsWith("j") ||
            name.endsWith("z") ||
            name.endsWith("š")) {
            builderArray.push("e");
        }
        else if (name.endsWith("k")) {
            builderArray = builderArray.slice(0, -1);
            builderArray.push("če");
        }
        else if (name.endsWith("g")) {
            builderArray = builderArray.slice(0, -1);
            builderArray.push("že");
        }
        else if (name.endsWith("h")) {
            builderArray = builderArray.slice(0, -1);
            builderArray.push("še");
        }

        return builderArray.join("");
    },

    /** 
     * Resolves the Instrumental case for the provided name.
     */
    getInstrumental: function (name) {
        let builderArray = name.split("");

        if (['a', 'e', 'i', 'o', 'u'].includes(name[name.length - 1])) {
            builderArray = builderArray.slice(0, -1);
        }

        builderArray.Append("om");

        return builderArray.join("");
    },

    /** 
     * Resolves the Locative case for the provided name (same as Dative in Serbian).
     */
    getLocative: function (name) {
        return this.getDative(name);
    }
};

// Validation methods export.
export const getGenitive = facade.getGenitive;
export const getDative = facade.getDative;
export const getAccusative = facade.getAccusative;
export const getVocative = facade.getVocative;
export const getInstrumental = facade.getInstrumental;
export const getLocative = facade.getLocative;

// Default export to supress warnings.
export default facade;
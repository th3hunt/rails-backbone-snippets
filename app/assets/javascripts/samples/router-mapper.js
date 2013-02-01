 urlToJSON: function (value) {
            var result = {},
                params,
                i,
                hash = value || global.location.hash;

            if (hash) {
                if (hash.startsWith("#")) {
                    hash = hash.substr(1);
                }
                if (hash.startsWith("/")) {
                    hash = hash.substr(1);
                }
                params = hash.split("/");
                for (i =0 ; i < params.length; i = i + 2) {
                    result[params[i]] = params[i + 1];
                }
            }
            return result;
        },

        jsonToURL: function (object) {
            return _.reduce(object, function (memo, v, k) {
                return v ? [memo, k, v].join("/") : memo
            }, "");
        }
System.config({
    "babelOptions": {
        "optional": [
            "runtime",
            "optimisation.modules.system"
        ]
    },
    "baseURL": "/",
    "bundles": {
        "app.js": [
            "app/lib/group.js",
            "app/lib/team.js",
            "app/main.js",
            "npm:babel-runtime@5.8.38/core-js/map.js",
            "npm:babel-runtime@5.8.38/core-js/object/define-property.js",
            "npm:babel-runtime@5.8.38/helpers/class-call-check.js",
            "npm:babel-runtime@5.8.38/helpers/create-class.js",
            "npm:core-js@1.2.6/library/fn/map.js",
            "npm:core-js@1.2.6/library/fn/object/define-property.js",
            "npm:core-js@1.2.6/library/modules/$.a-function.js",
            "npm:core-js@1.2.6/library/modules/$.add-to-unscopables.js",
            "npm:core-js@1.2.6/library/modules/$.an-object.js",
            "npm:core-js@1.2.6/library/modules/$.classof.js",
            "npm:core-js@1.2.6/library/modules/$.cof.js",
            "npm:core-js@1.2.6/library/modules/$.collection-strong.js",
            "npm:core-js@1.2.6/library/modules/$.collection-to-json.js",
            "npm:core-js@1.2.6/library/modules/$.collection.js",
            "npm:core-js@1.2.6/library/modules/$.core.js",
            "npm:core-js@1.2.6/library/modules/$.ctx.js",
            "npm:core-js@1.2.6/library/modules/$.defined.js",
            "npm:core-js@1.2.6/library/modules/$.descriptors.js",
            "npm:core-js@1.2.6/library/modules/$.export.js",
            "npm:core-js@1.2.6/library/modules/$.fails.js",
            "npm:core-js@1.2.6/library/modules/$.for-of.js",
            "npm:core-js@1.2.6/library/modules/$.global.js",
            "npm:core-js@1.2.6/library/modules/$.has.js",
            "npm:core-js@1.2.6/library/modules/$.hide.js",
            "npm:core-js@1.2.6/library/modules/$.iobject.js",
            "npm:core-js@1.2.6/library/modules/$.is-array-iter.js",
            "npm:core-js@1.2.6/library/modules/$.is-object.js",
            "npm:core-js@1.2.6/library/modules/$.iter-call.js",
            "npm:core-js@1.2.6/library/modules/$.iter-create.js",
            "npm:core-js@1.2.6/library/modules/$.iter-define.js",
            "npm:core-js@1.2.6/library/modules/$.iter-step.js",
            "npm:core-js@1.2.6/library/modules/$.iterators.js",
            "npm:core-js@1.2.6/library/modules/$.js",
            "npm:core-js@1.2.6/library/modules/$.library.js",
            "npm:core-js@1.2.6/library/modules/$.property-desc.js",
            "npm:core-js@1.2.6/library/modules/$.redefine-all.js",
            "npm:core-js@1.2.6/library/modules/$.redefine.js",
            "npm:core-js@1.2.6/library/modules/$.set-species.js",
            "npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js",
            "npm:core-js@1.2.6/library/modules/$.shared.js",
            "npm:core-js@1.2.6/library/modules/$.strict-new.js",
            "npm:core-js@1.2.6/library/modules/$.string-at.js",
            "npm:core-js@1.2.6/library/modules/$.to-integer.js",
            "npm:core-js@1.2.6/library/modules/$.to-iobject.js",
            "npm:core-js@1.2.6/library/modules/$.to-length.js",
            "npm:core-js@1.2.6/library/modules/$.uid.js",
            "npm:core-js@1.2.6/library/modules/$.wks.js",
            "npm:core-js@1.2.6/library/modules/core.get-iterator-method.js",
            "npm:core-js@1.2.6/library/modules/es6.array.iterator.js",
            "npm:core-js@1.2.6/library/modules/es6.map.js",
            "npm:core-js@1.2.6/library/modules/es6.object.to-string.js",
            "npm:core-js@1.2.6/library/modules/es6.string.iterator.js",
            "npm:core-js@1.2.6/library/modules/es7.map.to-json.js",
            "npm:core-js@1.2.6/library/modules/web.dom.iterable.js"
        ]
    },
    "defaultJSExtensions": true,
    "map": {
        "babel": "npm:babel-core@5.8.38",
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "core-js": "npm:core-js@1.2.6",
        "github:jspm/nodelibs-assert@0.1.0": {
            "assert": "npm:assert@1.3.0"
        },
        "github:jspm/nodelibs-path@0.1.0": {
            "path-browserify": "npm:path-browserify@0.0.0"
        },
        "github:jspm/nodelibs-process@0.1.2": {
            "process": "npm:process@0.11.2"
        },
        "github:jspm/nodelibs-util@0.1.0": {
            "util": "npm:util@0.10.3"
        },
        "lipis/flag-icon-css": "github:lipis/flag-icon-css@1.4.0",
        "npm:assert@1.3.0": {
            "util": "npm:util@0.10.3"
        },
        "npm:babel-runtime@5.8.38": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:core-js@1.2.6": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.2",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:inherits@2.0.1": {
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:path-browserify@0.0.0": {
            "process": "github:jspm/nodelibs-process@0.1.2"
        },
        "npm:process@0.11.2": {
            "assert": "github:jspm/nodelibs-assert@0.1.0"
        },
        "npm:util@0.10.3": {
            "inherits": "npm:inherits@2.0.1",
            "process": "github:jspm/nodelibs-process@0.1.2"
        }
    },
    "paths": {
        "github:*": "jspm_packages/github/*",
        "npm:*": "jspm_packages/npm/*"
    },
    "transpiler": "babel"
});
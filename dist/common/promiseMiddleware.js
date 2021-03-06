'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = function (store) {
    return function (next) {
        return function (action) {
            var promise = action.promise;
            var type = action.type;

            var rest = _objectWithoutProperties(action, ['promise', 'type']);

            if (!promise) return next(action);

            var SUCCESS = type + '_SUCCESS';
            var REQUEST = type + '_REQUEST';
            var FAILURE = type + '_FAILURE';

            next(_extends({}, rest, { type: REQUEST }));

            return promise.then(function (req) {
                next(_extends({}, rest, { req: req, type: SUCCESS }));
                return true;
            }).catch(function (error) {
                next(_extends({}, rest, { error: error, type: FAILURE }));
                console.log('PromiseMiddleware error:', error);
                return false;
            });
        };
    };
};
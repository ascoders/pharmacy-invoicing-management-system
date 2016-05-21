"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var fetchComponentDataBeforeRender = exports.fetchComponentDataBeforeRender = function fetchComponentDataBeforeRender(dispatch, components, params) {
    var needs = components.reduce(function (prev, current) {
        return (current.need || []).concat((current.WrappedComponent ? current.WrappedComponent.need : []) || []).concat(prev);
    }, []);
    var promises = needs.map(function (need) {
        return dispatch(need());
    });
    return Promise.all(promises);
};
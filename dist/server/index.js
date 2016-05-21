
require.extensions['.css'] = function (module, filename){}
require('require-sass')()
require('babel-polyfill')
'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpack3 = require('../webpack.config');

var _webpack4 = _interopRequireDefault(_webpack3);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _createLocation = require('history/lib/createLocation');

var _createLocation2 = _interopRequireDefault(_createLocation);

var _fetchComponentDataBeforeRender = require('./fetchComponentDataBeforeRender');

var _store = require('../common/store');

var _store2 = _interopRequireDefault(_store);

var _routes = require('../common/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var renderFullPage = function renderFullPage(html, initialState) {
    return '\n    <!doctype html>\n    <html>\n      <head>\n        <meta charset="utf-8">\n        <title>Isomorphic Redux Example</title>\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + '; \n        </script>\n        <script src="/static/bundle.js"></script>\n      </body>\n    </html>\n  ';
};

// parse application/x-www-form-urlencoded
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// parse application/json
app.use(_bodyParser2.default.json());

app.use((0, _expressSession2.default)({
    secret: 'hiuo4i2ntjger0gu8u',
    cookie: { maxAge: 80000 }, //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true
}));

// if (process.env.NODE_ENV !== 'production') {
//     const compiler = webpack(webpackConfig)
//     app.use(webpackDevMiddleware(compiler, {
//         noInfo    : true,
//         publicPath: webpackConfig.output.publicPath
//     }))
//     app.use(webpackHotMiddleware(compiler))
// } else {
//app.use(express.static(__dirname + '/../dist'))
//}

// 注册路由
(0, _router2.default)(app);

app.use('/static', _express2.default.static(__dirname + '/../'));

// 后端渲染
app.get('/*', function (req, res) {
    var location = (0, _createLocation2.default)(req.url);

    (0, _reactRouter.match)({ routes: _routes2.default, location: location }, function (err, redirectLocation, renderProps) {
        if (err) {
            console.error(err);
            return res.status(500).end('Internal server error');
        }

        if (!renderProps) {
            return res.status(404).end('Not found');
        }

        var store = (0, _store2.default)();

        var InitialView = _react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(_reactRouter.RouterContext, renderProps)
        );

        // This method waits for all render component promises to resolve before returning to browser
        (0, _fetchComponentDataBeforeRender.fetchComponentDataBeforeRender)(store.dispatch, renderProps.components, renderProps.params).then(function (html) {
            var componentHTML = _server2.default.renderToString(InitialView);
            var initialState = store.getState();
            res.status(200).end(renderFullPage(componentHTML, initialState));
        }).catch(function (err) {
            console.log(err);
            res.end(renderFullPage('', {}));
        });
    });
});

// 错误处理
if (process.env.NODE_ENV !== 'production') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: err
        });
    });
} else {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        next(err);
        res.send({
            message: err.message,
            error: {}
        });
    });
}

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://' + host + ':' + port);
});
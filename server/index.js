require = null

import express from 'express'

import webpack from 'webpack'
import webpackConfig from '../webpack.config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { RouterContext, match } from 'react-router'
import { Provider } from 'react-redux'
import createLocation from 'history/lib/createLocation'
import { fetchComponentDataBeforeRender } from './fetchComponentDataBeforeRender'
import configureStore from '../common/store'
import routes from '../common/routes'

const app = express();
const renderFullPage = (html, initialState) => {
    return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Isomorphic Redux Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}; 
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `
}

if (process.env.NODE_ENV !== 'production') {
    const compiler = webpack(webpackConfig)
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    }))
    app.use(webpackHotMiddleware(compiler))
} else {
    app.use('/static', express.static(__dirname + '/../../dist'))
}

app.get('/api/author', function (req, res) {
    res.send([{
        author: 1
    }, {
        author: 2
    }, {
        author: 3
    }, {
        author: 4
    }, {
        author: 5
    }])
})

app.get('/*', function (req, res) {
    const location = createLocation(req.url)

    match({routes, location}, (err, redirectLocation, renderProps) => {

            if (err) {
                console.error(err)
                return res.status(500).end('Internal server error')
            }

            if (!renderProps) {
                return res.status(404).end('Not found')
            }

            const store = configureStore()

            const InitialView = (
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            )

            // This method waits for all render component promises to resolve before returning to browser
            fetchComponentDataBeforeRender(store.dispatch, renderProps.components, renderProps.params)
                .then(html => {
                    const componentHTML = ReactDOMServer.renderToString(InitialView)
                    const initialState = store.getState()
                    res.status(200).end(renderFullPage(componentHTML, initialState))
                })
                .catch(err => {
                    console.log(err)
                    res.end(renderFullPage('', {}))
                })
        }
    )
})

const server = app.listen(8080, function () {
    const host = server.address().address
    const port = server.address().port
    console.log(`Example app listening at http://${host}:${port}`)
})
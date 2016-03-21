var through = require('through2')
var gutil = require('gulp-util')
var PluginError = gutil.PluginError

// 常量
var PLUGIN_NAME = 'gulp-prefixer'

function prefixStream(prefixText) {
    var stream = through()
    stream.write(prefixText)
    return stream
}

// 插件级别的函数（处理文件）
function gulpPrefixer(prefixText) {
    if (!prefixText) {
        throw new PluginError(PLUGIN_NAME, 'Missing prefix text!')
    }

    prefixText = new Buffer(prefixText) // 提前分配

    // 创建一个 stream 通道，以让每个文件通过
    var stream = through.obj(function (file, enc, cb) {
        if (file.isStream()) {
            // 定义转换内容的 streamer
            var streamer = prefixStream(prefixText)
            // 从 streamer 中捕获错误，并发出一个 gulp的错误
            streamer.on('error', this.emit.bind(this, 'error'))
            // 开始转换
            file.contents = file.contents.pipe(streamer);
        } else if (file.isBuffer()) {
            file.contents = Buffer.concat([prefixText, file.contents])
        }

        // 确保文件进入下一个 gulp 插件
        this.push(file)

        // 告诉 stream 引擎，我们已经处理完了这个文件
        cb()
    })

    // 返回文件 stream
    return stream
}

// 导出插件主函数
module.exports = gulpPrefixer
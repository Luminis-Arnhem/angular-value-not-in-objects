module.exports = function () {
  var src = 'src';
  var appVersion = '0.3.0';
  var output = 'dist';
  var outputTypings = output + '/typings';
  var outputJs = output + '/js';
  var outputTs = output + '/ts';
  var typesSrc = 'typings';
  var tsScriptFiles = [typesSrc + '/**/*.ts', src + '/**/*.ts'];
  var versionFiles = ['./bower.json', './package.json'];

  var config = {
    output: output,
    src: src,
    appVersion: appVersion,
    outputTypings: outputTypings,
    outputJs: outputJs,
    outputTs: outputTs,
    typesSrc: typesSrc,
    tsScriptFiles: tsScriptFiles,
    versionFiles: versionFiles,
  }
  return config;
};
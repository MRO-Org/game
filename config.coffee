exports.config =
  files:
    javascripts:
      joinTo:
        'js/app.js': /^app/
        'js/vendor.js': /^bower_components/
    stylesheets:
      joinTo: 'css/app.css'
    templates:
      joinTo: 'js/templates.js'
overrides:
  production:
    sourceMaps: 'absoluteUrl'
    plugins:
      coffeelint:
        pattern: /\A\Z/
      afterBrunch: [
        "coffee scripts/minify.coffee",
      ]
  fast:
    onCompile: (files) -> console.log "I feel the need, the need... for speed."
    plugins:
      coffeelint:
        pattern: /\A\Z/   

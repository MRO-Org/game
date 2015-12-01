exports.config =
  modules:
    definition: false
    wrapper: false
  files:
  
    javascripts:
      joinTo:
        'js/app.js': /^app/
        'js/vendor.js': /^(bower_components|vendor)/

    stylesheets:
      joinTo: 
        'css/app.css':  /^app/
        'css/vendor.css': /^(bower_components|vendor)/

    templates:
      joinTo:
        'js/templates.js': /^app/

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

plugins:
    uglify:
      mangle: false
      compress:
        global_defs:
          DEBUG: false

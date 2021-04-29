(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("ddd89c00-12d2-4d0b-88fc-3b662c5e8b90");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'ddd89c00-12d2-4d0b-88fc-3b662c5e8b90' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.1.min.js": "YF85VygJKMVnHE+lLv2AM93Vbstr0yo2TbIu5v8se5Rq3UQAUmcuh4aaJwNlpKwa", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.1.min.js": "KKuas3gevv3PvrlkyCMzffFeaMq5we/a2QsP5AUoS3mJ0jmaCL7jirFJN3GoE/lM", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.1.min.js": "MK/uFc3YT18pkvvXRl66tTHjP0/dxoSH2e/eiNMFIguKlun2+WVqaPTWmUy/zvh4"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"e86702ef-1fd9-47f5-a857-57a5decd16fb":{"defs":[],"roots":{"references":[{"attributes":{"label":{"value":"c [mg/mL]"},"renderers":[{"id":"7067"}]},"id":"7080","type":"LegendItem"},{"attributes":{},"id":"7050","type":"PanTool"},{"attributes":{},"id":"7054","type":"ResetTool"},{"attributes":{},"id":"7036","type":"DataRange1d"},{"attributes":{"axis":{"id":"7042"},"ticker":null},"id":"7045","type":"Grid"},{"attributes":{"axis_label":"c [mg/mL]","formatter":{"id":"7074"},"major_label_policy":{"id":"7073"},"ticker":{"id":"7047"}},"id":"7046","type":"LinearAxis"},{"attributes":{},"id":"7053","type":"SaveTool"},{"attributes":{"overlay":{"id":"7056"}},"id":"7052","type":"BoxZoomTool"},{"attributes":{"axis_label":"t [min]","formatter":{"id":"7071"},"major_label_policy":{"id":"7070"},"ticker":{"id":"7043"}},"id":"7042","type":"LinearAxis"},{"attributes":{"axis":{"id":"7046"},"dimension":1,"ticker":null},"id":"7049","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7066","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[201]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[201]}},"selected":{"id":"7078"},"selection_policy":{"id":"7077"}},"id":"7064","type":"ColumnDataSource"},{"attributes":{},"id":"7078","type":"Selection"},{"attributes":{},"id":"7043","type":"BasicTicker"},{"attributes":{},"id":"7047","type":"BasicTicker"},{"attributes":{"data_source":{"id":"7064"},"glyph":{"id":"7065"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7066"},"view":{"id":"7068"}},"id":"7067","type":"GlyphRenderer"},{"attributes":{"source":{"id":"7064"}},"id":"7068","type":"CDSView"},{"attributes":{},"id":"7074","type":"BasicTickFormatter"},{"attributes":{},"id":"7038","type":"LinearScale"},{"attributes":{},"id":"7034","type":"DataRange1d"},{"attributes":{},"id":"7073","type":"AllLabels"},{"attributes":{},"id":"7040","type":"LinearScale"},{"attributes":{},"id":"7055","type":"HelpTool"},{"attributes":{},"id":"7051","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"7042"}],"center":[{"id":"7045"},{"id":"7049"},{"id":"7079"}],"height":350,"left":[{"id":"7046"}],"renderers":[{"id":"7067"}],"title":{"id":"7032"},"toolbar":{"id":"7057"},"width":690,"x_range":{"id":"7034"},"x_scale":{"id":"7038"},"y_range":{"id":"7036"},"y_scale":{"id":"7040"}},"id":"7031","subtype":"Figure","type":"Plot"},{"attributes":{"text":"Unit Operation - Breakthrough"},"id":"7032","type":"Title"},{"attributes":{"items":[{"id":"7080"}]},"id":"7079","type":"Legend"},{"attributes":{},"id":"7077","type":"UnionRenderers"},{"attributes":{"active_multi":null,"tools":[{"id":"7050"},{"id":"7051"},{"id":"7052"},{"id":"7053"},{"id":"7054"},{"id":"7055"}]},"id":"7057","type":"Toolbar"},{"attributes":{},"id":"7071","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"7056","type":"BoxAnnotation"},{"attributes":{},"id":"7070","type":"AllLabels"},{"attributes":{"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"7065","type":"Line"}],"root_ids":["7031"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"e86702ef-1fd9-47f5-a857-57a5decd16fb","root_ids":["7031"],"roots":{"7031":"ddd89c00-12d2-4d0b-88fc-3b662c5e8b90"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
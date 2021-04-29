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
    
      
      
    
      var element = document.getElementById("a86bc1b9-6f8c-44c7-a22c-77e7a938a136");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a86bc1b9-6f8c-44c7-a22c-77e7a938a136' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c55827ba-8574-411e-a76e-6adc0db4af36":{"defs":[],"roots":{"references":[{"attributes":{"line_alpha":0.1,"line_color":"green","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6834","type":"Line"},{"attributes":{"axis":{"id":"6810"},"ticker":null},"id":"6813","type":"Grid"},{"attributes":{"source":{"id":"6849"}},"id":"6853","type":"CDSView"},{"attributes":{"axis_label":"t [min]","formatter":{"id":"6839"},"major_label_policy":{"id":"6838"},"ticker":{"id":"6811"}},"id":"6810","type":"LinearAxis"},{"attributes":{},"id":"6808","type":"LinearScale"},{"attributes":{"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6850","type":"Line"},{"attributes":{"active_multi":null,"tools":[{"id":"6818"},{"id":"6819"},{"id":"6820"},{"id":"6821"},{"id":"6822"},{"id":"6823"}]},"id":"6825","type":"Toolbar"},{"attributes":{},"id":"6802","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"6824","type":"BoxAnnotation"},{"attributes":{},"id":"6865","type":"Selection"},{"attributes":{},"id":"6864","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[201]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[201]}},"selected":{"id":"6865"},"selection_policy":{"id":"6864"}},"id":"6849","type":"ColumnDataSource"},{"attributes":{"label":{"value":"p (pdf)"},"renderers":[{"id":"6852"}]},"id":"6866","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6851","type":"Line"},{"attributes":{},"id":"6838","type":"AllLabels"},{"attributes":{},"id":"6804","type":"DataRange1d"},{"attributes":{"axis":{"id":"6814"},"dimension":1,"ticker":null},"id":"6817","type":"Grid"},{"attributes":{},"id":"6845","type":"UnionRenderers"},{"attributes":{},"id":"6818","type":"PanTool"},{"attributes":{},"id":"6822","type":"ResetTool"},{"attributes":{"text":"Probability Distribution"},"id":"6800","type":"Title"},{"attributes":{},"id":"6823","type":"HelpTool"},{"attributes":{},"id":"6842","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.6,"line_color":"green","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6833","type":"Line"},{"attributes":{"data_source":{"id":"6832"},"glyph":{"id":"6833"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6834"},"view":{"id":"6836"}},"id":"6835","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[201]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[201]}},"selected":{"id":"6846"},"selection_policy":{"id":"6845"}},"id":"6832","type":"ColumnDataSource"},{"attributes":{},"id":"6806","type":"LinearScale"},{"attributes":{},"id":"6821","type":"SaveTool"},{"attributes":{},"id":"6839","type":"BasicTickFormatter"},{"attributes":{},"id":"6846","type":"Selection"},{"attributes":{"source":{"id":"6832"}},"id":"6836","type":"CDSView"},{"attributes":{"below":[{"id":"6810"}],"center":[{"id":"6813"},{"id":"6817"},{"id":"6847"}],"height":350,"left":[{"id":"6814"}],"renderers":[{"id":"6835"},{"id":"6852"}],"title":{"id":"6800"},"toolbar":{"id":"6825"},"width":690,"x_range":{"id":"6802"},"x_scale":{"id":"6806"},"y_range":{"id":"6804"},"y_scale":{"id":"6808"}},"id":"6799","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"6849"},"glyph":{"id":"6850"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6851"},"view":{"id":"6853"}},"id":"6852","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"6824"}},"id":"6820","type":"BoxZoomTool"},{"attributes":{},"id":"6811","type":"BasicTicker"},{"attributes":{"axis_label":"c [mg/mL]","formatter":{"id":"6842"},"major_label_policy":{"id":"6841"},"ticker":{"id":"6815"}},"id":"6814","type":"LinearAxis"},{"attributes":{"label":{"value":"c [mg/mL] (data)"},"renderers":[{"id":"6835"}]},"id":"6848","type":"LegendItem"},{"attributes":{},"id":"6841","type":"AllLabels"},{"attributes":{},"id":"6815","type":"BasicTicker"},{"attributes":{"items":[{"id":"6848"},{"id":"6866"}]},"id":"6847","type":"Legend"},{"attributes":{},"id":"6819","type":"WheelZoomTool"}],"root_ids":["6799"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"c55827ba-8574-411e-a76e-6adc0db4af36","root_ids":["6799"],"roots":{"6799":"a86bc1b9-6f8c-44c7-a22c-77e7a938a136"}}];
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
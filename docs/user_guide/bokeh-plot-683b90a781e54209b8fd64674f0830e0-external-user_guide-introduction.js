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
    
      
      
    
      var element = document.getElementById("668f15e4-c0b9-4ee6-b325-b148b7c0ab98");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '668f15e4-c0b9-4ee6-b325-b148b7c0ab98' but no matching script tag was found.")
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
                    
                  var docs_json = '{"66383738-7591-4560-b156-beb88f61009e":{"defs":[],"roots":{"references":[{"attributes":{"axis_label":"c [mg/mL]","formatter":{"id":"6713"},"major_label_policy":{"id":"6712"},"ticker":{"id":"6686"}},"id":"6685","type":"LinearAxis"},{"attributes":{},"id":"6709","type":"AllLabels"},{"attributes":{"fill_alpha":{"value":0},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"blue"},"line_width":{"value":2},"size":{"value":15},"x":{"value":1.4000000000000001},"y":{"value":0.5954898005953156}},"id":"6721","type":"Circle"},{"attributes":{},"id":"6692","type":"SaveTool"},{"attributes":{"data_source":{"id":"6720"},"glyph":{"id":"6721"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6722"},"view":{"id":"6724"}},"id":"6723","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"blue"},"line_width":{"value":2},"size":{"value":15},"x":{"value":1.4000000000000001},"y":{"value":0.5954898005953156}},"id":"6722","type":"Circle"},{"attributes":{},"id":"6716","type":"UnionRenderers"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[201]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[201]}},"selected":{"id":"6717"},"selection_policy":{"id":"6716"}},"id":"6703","type":"ColumnDataSource"},{"attributes":{},"id":"6689","type":"PanTool"},{"attributes":{"line_alpha":0.6,"line_color":"green","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6704","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"6695","type":"BoxAnnotation"},{"attributes":{"items":[{"id":"6719"}]},"id":"6718","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"blue"},"line_width":{"value":2},"size":{"value":15},"x":{"value":3.9000000000000004},"y":{"value":0.05755582112089002}},"id":"6732","type":"Circle"},{"attributes":{"overlay":{"id":"6695"}},"id":"6691","type":"BoxZoomTool"},{"attributes":{"label":{"value":"c [mg/mL]"},"renderers":[{"id":"6706"}]},"id":"6719","type":"LegendItem"},{"attributes":{"text":"Measurements"},"id":"6671","type":"Title"},{"attributes":{"data":{},"selected":{"id":"6746"},"selection_policy":{"id":"6745"}},"id":"6720","type":"ColumnDataSource"},{"attributes":{},"id":"6750","type":"Selection"},{"attributes":{"source":{"id":"6725"}},"id":"6729","type":"CDSView"},{"attributes":{},"id":"6713","type":"BasicTickFormatter"},{"attributes":{},"id":"6675","type":"DataRange1d"},{"attributes":{"below":[{"id":"6681"}],"center":[{"id":"6684"},{"id":"6688"},{"id":"6718"}],"height":350,"left":[{"id":"6685"}],"renderers":[{"id":"6706"},{"id":"6723"},{"id":"6728"},{"id":"6733"}],"title":{"id":"6671"},"toolbar":{"id":"6696"},"width":690,"x_range":{"id":"6673"},"x_scale":{"id":"6677"},"y_range":{"id":"6675"},"y_scale":{"id":"6679"}},"id":"6670","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6690","type":"WheelZoomTool"},{"attributes":{"source":{"id":"6730"}},"id":"6734","type":"CDSView"},{"attributes":{"data_source":{"id":"6703"},"glyph":{"id":"6704"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6705"},"view":{"id":"6707"}},"id":"6706","type":"GlyphRenderer"},{"attributes":{},"id":"6712","type":"AllLabels"},{"attributes":{"line_alpha":0.1,"line_color":"green","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6705","type":"Line"},{"attributes":{"fill_alpha":{"value":0},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"blue"},"line_width":{"value":2},"size":{"value":15},"x":{"value":3.9000000000000004},"y":{"value":0.05755582112089002}},"id":"6731","type":"Circle"},{"attributes":{"source":{"id":"6703"}},"id":"6707","type":"CDSView"},{"attributes":{},"id":"6717","type":"Selection"},{"attributes":{"active_multi":null,"tools":[{"id":"6689"},{"id":"6690"},{"id":"6691"},{"id":"6692"},{"id":"6693"},{"id":"6694"}]},"id":"6696","type":"Toolbar"},{"attributes":{"data":{},"selected":{"id":"6750"},"selection_policy":{"id":"6749"}},"id":"6730","type":"ColumnDataSource"},{"attributes":{},"id":"6673","type":"DataRange1d"},{"attributes":{},"id":"6693","type":"ResetTool"},{"attributes":{},"id":"6677","type":"LinearScale"},{"attributes":{"source":{"id":"6720"}},"id":"6724","type":"CDSView"},{"attributes":{},"id":"6745","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"6730"},"glyph":{"id":"6731"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6732"},"view":{"id":"6734"}},"id":"6733","type":"GlyphRenderer"},{"attributes":{},"id":"6679","type":"LinearScale"},{"attributes":{"data_source":{"id":"6725"},"glyph":{"id":"6726"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6727"},"view":{"id":"6729"}},"id":"6728","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"blue"},"line_width":{"value":2},"size":{"value":15},"x":{"value":0.6000000000000001},"y":{"value":0.07989624743012343}},"id":"6726","type":"Circle"},{"attributes":{},"id":"6686","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"blue"},"line_width":{"value":2},"size":{"value":15},"x":{"value":0.6000000000000001},"y":{"value":0.07989624743012343}},"id":"6727","type":"Circle"},{"attributes":{"axis":{"id":"6681"},"ticker":null},"id":"6684","type":"Grid"},{"attributes":{},"id":"6746","type":"Selection"},{"attributes":{},"id":"6749","type":"UnionRenderers"},{"attributes":{"axis_label":"t [min]","formatter":{"id":"6710"},"major_label_policy":{"id":"6709"},"ticker":{"id":"6682"}},"id":"6681","type":"LinearAxis"},{"attributes":{},"id":"6694","type":"HelpTool"},{"attributes":{},"id":"6710","type":"BasicTickFormatter"},{"attributes":{},"id":"6747","type":"UnionRenderers"},{"attributes":{"axis":{"id":"6685"},"dimension":1,"ticker":null},"id":"6688","type":"Grid"},{"attributes":{"data":{},"selected":{"id":"6748"},"selection_policy":{"id":"6747"}},"id":"6725","type":"ColumnDataSource"},{"attributes":{},"id":"6748","type":"Selection"},{"attributes":{},"id":"6682","type":"BasicTicker"}],"root_ids":["6670"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"66383738-7591-4560-b156-beb88f61009e","root_ids":["6670"],"roots":{"6670":"668f15e4-c0b9-4ee6-b325-b148b7c0ab98"}}];
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
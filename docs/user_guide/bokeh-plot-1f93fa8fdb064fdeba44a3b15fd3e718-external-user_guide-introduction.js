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
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("fb06aaea-2c6e-475f-bba7-80e47d2e0ab6");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'fb06aaea-2c6e-475f-bba7-80e47d2e0ab6' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.0.min.js"];
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
                    
                  var docs_json = '{&quot;107d9ed1-9b04-4ad8-8d43-89fb30c790ce&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;6441&quot;}},&quot;id&quot;:&quot;6420&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6421&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6402&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;6418&quot;},{&quot;id&quot;:&quot;6419&quot;},{&quot;id&quot;:&quot;6420&quot;},{&quot;id&quot;:&quot;6421&quot;},{&quot;id&quot;:&quot;6422&quot;},{&quot;id&quot;:&quot;6423&quot;}]},&quot;id&quot;:&quot;6424&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;Probability Distribution&quot;},&quot;id&quot;:&quot;6400&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6419&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;6414&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;6417&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;green&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6433&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.6,&quot;line_color&quot;:&quot;green&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6432&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6404&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6408&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPwAAAAAAAPA/zczMzMzM8D+amZmZmZnxP2dmZmZmZvI/NDMzMzMz8z8AAAAAAAD0P83MzMzMzPQ/mpmZmZmZ9T9nZmZmZmb2PzQzMzMzM/c/AAAAAAAA+D/NzMzMzMz4P5qZmZmZmfk/Z2ZmZmZm+j80MzMzMzP7PwAAAAAAAPw/zczMzMzM/D+amZmZmZn9P2dmZmZmZv4/NDMzMzMz/z8AAAAAAAAAQGdmZmZmZgBAzczMzMzMAEAzMzMzMzMBQJqZmZmZmQFAAAAAAAAAAkBnZmZmZmYCQM3MzMzMzAJANDMzMzMzA0CamZmZmZkDQAAAAAAAAARAZ2ZmZmZmBEDNzMzMzMwEQDQzMzMzMwVAmpmZmZmZBUAAAAAAAAAGQGdmZmZmZgZAzczMzMzMBkA0MzMzMzMHQJqZmZmZmQdAAAAAAAAACEBnZmZmZmYIQM3MzMzMzAhANDMzMzMzCUCamZmZmZkJQAAAAAAAAApAZ2ZmZmZmCkDNzMzMzMwKQDQzMzMzMwtAmpmZmZmZC0AAAAAAAAAMQGdmZmZmZgxAzczMzMzMDEA0MzMzMzMNQJqZmZmZmQ1AAAAAAAAADkBnZmZmZmYOQM3MzMzMzA5ANDMzMzMzD0CamZmZmZkPQAAAAAAAABBAMzMzMzMzEEBnZmZmZmYQQJqZmZmZmRBAzczMzMzMEEAAAAAAAAARQDMzMzMzMxFAZ2ZmZmZmEUCamZmZmZkRQM3MzMzMzBFAAAAAAAAAEkAzMzMzMzMSQGdmZmZmZhJAmpmZmZmZEkDNzMzMzMwSQAAAAAAAABNANDMzMzMzE0BnZmZmZmYTQJqZmZmZmRNAzczMzMzME0AAAAAAAAAUQDQzMzMzMxRAZ2ZmZmZmFECamZmZmZkUQM3MzMzMzBRAAAAAAAAAFUA0MzMzMzMVQGdmZmZmZhVAmpmZmZmZFUDNzMzMzMwVQAAAAAAAABZANDMzMzMzFkBnZmZmZmYWQJqZmZmZmRZAzczMzMzMFkAAAAAAAAAXQDQzMzMzMxdAZ2ZmZmZmF0CamZmZmZkXQM3MzMzMzBdAAAAAAAAAGEA0MzMzMzMYQGdmZmZmZhhAmpmZmZmZGEDNzMzMzMwYQAAAAAAAABlANDMzMzMzGUBnZmZmZmYZQJqZmZmZmRlAzczMzMzMGUAAAAAAAAAaQDQzMzMzMxpAZ2ZmZmZmGkCamZmZmZkaQM3MzMzMzBpAAAAAAAAAG0A0MzMzMzMbQGdmZmZmZhtAmpmZmZmZG0DNzMzMzMwbQAAAAAAAABxANDMzMzMzHEBnZmZmZmYcQJqZmZmZmRxAzczMzMzMHEAAAAAAAAAdQDQzMzMzMx1AZ2ZmZmZmHUCamZmZmZkdQM3MzMzMzB1AAAAAAAAAHkA0MzMzMzMeQGdmZmZmZh5AmpmZmZmZHkDNzMzMzMweQAAAAAAAAB9ANDMzMzMzH0BnZmZmZmYfQJqZmZmZmR9AzczMzMzMH0AAAAAAAAAgQJqZmZmZGSBAMzMzMzMzIEDNzMzMzEwgQGdmZmZmZiBAAAAAAACAIECamZmZmZkgQDMzMzMzsyBAzczMzMzMIEBnZmZmZuYgQAAAAAAAACFAmpmZmZkZIUAzMzMzMzMhQM3MzMzMTCFAZ2ZmZmZmIUAAAAAAAIAhQJqZmZmZmSFAMzMzMzOzIUDNzMzMzMwhQGdmZmZm5iFAAAAAAAAAIkCamZmZmRkiQDMzMzMzMyJAzczMzMxMIkBnZmZmZmYiQAAAAAAAgCJAmpmZmZmZIkAzMzMzM7MiQM3MzMzMzCJAZ2ZmZmbmIkAAAAAAAAAjQJqZmZmZGSNANDMzMzMzI0DNzMzMzEwjQGdmZmZmZiNAAAAAAACAI0CamZmZmZkjQDQzMzMzsyNAzczMzMzMI0BnZmZmZuYjQAAAAAAAACRA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]}},&quot;selected&quot;:{&quot;id&quot;:&quot;6466&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;6465&quot;}},&quot;id&quot;:&quot;6444&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6445&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6438&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]}},&quot;selected&quot;:{&quot;id&quot;:&quot;6455&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;6454&quot;}},&quot;id&quot;:&quot;6431&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;t [min]&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;6438&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;6411&quot;}},&quot;id&quot;:&quot;6410&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6440&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6406&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;6441&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6446&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6411&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;6410&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;6413&quot;},{&quot;id&quot;:&quot;6417&quot;},{&quot;id&quot;:&quot;6442&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;6414&quot;}],&quot;plot_height&quot;:350,&quot;plot_width&quot;:690,&quot;renderers&quot;:[{&quot;id&quot;:&quot;6434&quot;},{&quot;id&quot;:&quot;6447&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;6400&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;6424&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;6402&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;6406&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;6404&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;6408&quot;}},&quot;id&quot;:&quot;6399&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;6410&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;6413&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;6443&quot;},{&quot;id&quot;:&quot;6457&quot;}]},&quot;id&quot;:&quot;6442&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6454&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;c [mg/mL] (data)&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;6434&quot;}]},&quot;id&quot;:&quot;6443&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6455&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;p (pdf)&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;6447&quot;}]},&quot;id&quot;:&quot;6457&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;6444&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;6445&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;6446&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;6448&quot;}},&quot;id&quot;:&quot;6447&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6418&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6423&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6466&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;6444&quot;}},&quot;id&quot;:&quot;6448&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;c [mg/mL]&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;6440&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;6415&quot;}},&quot;id&quot;:&quot;6414&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6465&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6422&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;6431&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;6432&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;6433&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;6435&quot;}},&quot;id&quot;:&quot;6434&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6415&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;6431&quot;}},&quot;id&quot;:&quot;6435&quot;,&quot;type&quot;:&quot;CDSView&quot;}],&quot;root_ids&quot;:[&quot;6399&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.0&quot;}}';
                  var render_items = [{"docid":"107d9ed1-9b04-4ad8-8d43-89fb30c790ce","root_ids":["6399"],"roots":{"6399":"fb06aaea-2c6e-475f-bba7-80e47d2e0ab6"}}];
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
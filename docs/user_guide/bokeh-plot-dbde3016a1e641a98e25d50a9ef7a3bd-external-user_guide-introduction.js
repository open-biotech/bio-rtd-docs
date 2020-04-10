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
      };var element = document.getElementById("d0dca282-7b6e-4a55-8750-30e97373782b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd0dca282-7b6e-4a55-8750-30e97373782b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{&quot;9508498f-1847-46a1-b958-f503acea8880&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;outlet of uo_1&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;6750&quot;}]},&quot;id&quot;:&quot;6760&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6773&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6724&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;6744&quot;}},&quot;id&quot;:&quot;6723&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6725&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;inlet&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;6737&quot;}]},&quot;id&quot;:&quot;6746&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;Model with 2 unit operations - Breakthrough&quot;},&quot;id&quot;:&quot;6703&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;6734&quot;}},&quot;id&quot;:&quot;6738&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6711&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;6747&quot;}},&quot;id&quot;:&quot;6751&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;blue&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6763&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6743&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6786&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6721&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;c [mg/mL]&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;6743&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;6718&quot;}},&quot;id&quot;:&quot;6717&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6709&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;6747&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;6748&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;6749&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;6751&quot;}},&quot;id&quot;:&quot;6750&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;t [min]&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;6741&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;6714&quot;}},&quot;id&quot;:&quot;6713&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]}},&quot;selected&quot;:{&quot;id&quot;:&quot;6787&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;6786&quot;}},&quot;id&quot;:&quot;6761&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;6713&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;6716&quot;},{&quot;id&quot;:&quot;6720&quot;},{&quot;id&quot;:&quot;6745&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;6717&quot;}],&quot;plot_height&quot;:350,&quot;plot_width&quot;:690,&quot;renderers&quot;:[{&quot;id&quot;:&quot;6737&quot;},{&quot;id&quot;:&quot;6750&quot;},{&quot;id&quot;:&quot;6764&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;6703&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;6727&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;6705&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;6709&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;6707&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;6711&quot;}},&quot;id&quot;:&quot;6702&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6722&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6707&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6705&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6714&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6736&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;6734&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;6735&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;6736&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;6738&quot;}},&quot;id&quot;:&quot;6737&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]}},&quot;selected&quot;:{&quot;id&quot;:&quot;6774&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;6773&quot;}},&quot;id&quot;:&quot;6747&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;6744&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;6761&quot;}},&quot;id&quot;:&quot;6765&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;blue&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6762&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;6713&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;6716&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;6746&quot;},{&quot;id&quot;:&quot;6760&quot;},{&quot;id&quot;:&quot;6776&quot;}],&quot;location&quot;:&quot;bottom_right&quot;},&quot;id&quot;:&quot;6745&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6735&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6726&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]}},&quot;selected&quot;:{&quot;id&quot;:&quot;6758&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;6757&quot;}},&quot;id&quot;:&quot;6734&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;6721&quot;},{&quot;id&quot;:&quot;6722&quot;},{&quot;id&quot;:&quot;6723&quot;},{&quot;id&quot;:&quot;6724&quot;},{&quot;id&quot;:&quot;6725&quot;},{&quot;id&quot;:&quot;6726&quot;}]},&quot;id&quot;:&quot;6727&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;green&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6748&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6741&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6718&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6758&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;6717&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;6720&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;green&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6749&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;6761&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;6762&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;6763&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;6765&quot;}},&quot;id&quot;:&quot;6764&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6757&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;outlet of uo_2&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;6764&quot;}]},&quot;id&quot;:&quot;6776&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6774&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6787&quot;,&quot;type&quot;:&quot;Selection&quot;}],&quot;root_ids&quot;:[&quot;6702&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.0&quot;}}';
                  var render_items = [{"docid":"9508498f-1847-46a1-b958-f503acea8880","root_ids":["6702"],"roots":{"6702":"d0dca282-7b6e-4a55-8750-30e97373782b"}}];
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
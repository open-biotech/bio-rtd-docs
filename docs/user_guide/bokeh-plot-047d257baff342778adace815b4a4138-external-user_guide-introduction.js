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
      };var element = document.getElementById("216caa9a-5191-4c25-9018-dcefe44a310f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '216caa9a-5191-4c25-9018-dcefe44a310f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{&quot;436899ee-c359-466c-b8d7-6c7c63ed2a69&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6278&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;c [mg/mL]&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;6310&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;6285&quot;}},&quot;id&quot;:&quot;6284&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6341&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;blue&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:15},&quot;x&quot;:{&quot;value&quot;:0.6000000000000001},&quot;y&quot;:{&quot;value&quot;:0.07989624743012343}},&quot;id&quot;:&quot;6320&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6308&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6272&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;blue&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:15},&quot;x&quot;:{&quot;value&quot;:1.4000000000000001},&quot;y&quot;:{&quot;value&quot;:0.5954898005953156}},&quot;id&quot;:&quot;6316&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6336&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6291&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;6319&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;6320&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;6321&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;6323&quot;}},&quot;id&quot;:&quot;6322&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;c [mg/mL]&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;6304&quot;}]},&quot;id&quot;:&quot;6313&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;6301&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;6302&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;6303&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;6305&quot;}},&quot;id&quot;:&quot;6304&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.6,&quot;line_color&quot;:&quot;green&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6302&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;6301&quot;}},&quot;id&quot;:&quot;6305&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6337&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6292&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6274&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6276&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6310&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6338&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;6319&quot;}},&quot;id&quot;:&quot;6323&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;6280&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;6283&quot;},{&quot;id&quot;:&quot;6287&quot;},{&quot;id&quot;:&quot;6312&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;6284&quot;}],&quot;plot_height&quot;:350,&quot;plot_width&quot;:690,&quot;renderers&quot;:[{&quot;id&quot;:&quot;6304&quot;},{&quot;id&quot;:&quot;6317&quot;},{&quot;id&quot;:&quot;6322&quot;},{&quot;id&quot;:&quot;6327&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;6270&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;6294&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;6272&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;6276&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;6274&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;6278&quot;}},&quot;id&quot;:&quot;6269&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6339&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6288&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{},&quot;selected&quot;:{&quot;id&quot;:&quot;6341&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;6340&quot;}},&quot;id&quot;:&quot;6324&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;6288&quot;},{&quot;id&quot;:&quot;6289&quot;},{&quot;id&quot;:&quot;6290&quot;},{&quot;id&quot;:&quot;6291&quot;},{&quot;id&quot;:&quot;6292&quot;},{&quot;id&quot;:&quot;6293&quot;}]},&quot;id&quot;:&quot;6294&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6340&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;blue&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:15},&quot;x&quot;:{&quot;value&quot;:3.9000000000000004},&quot;y&quot;:{&quot;value&quot;:0.05755582112089002}},&quot;id&quot;:&quot;6326&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;6311&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;blue&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:15},&quot;x&quot;:{&quot;value&quot;:1.4000000000000001},&quot;y&quot;:{&quot;value&quot;:0.5954898005953156}},&quot;id&quot;:&quot;6315&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6335&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;6284&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;6287&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;blue&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:15},&quot;x&quot;:{&quot;value&quot;:0.6000000000000001},&quot;y&quot;:{&quot;value&quot;:0.07989624743012343}},&quot;id&quot;:&quot;6321&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6334&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;6324&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;6325&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;6326&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;6328&quot;}},&quot;id&quot;:&quot;6327&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{},&quot;selected&quot;:{&quot;id&quot;:&quot;6337&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;6336&quot;}},&quot;id&quot;:&quot;6314&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;Measurements&quot;},&quot;id&quot;:&quot;6270&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;green&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6303&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6281&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;6314&quot;}},&quot;id&quot;:&quot;6318&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;blue&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:15},&quot;x&quot;:{&quot;value&quot;:3.9000000000000004},&quot;y&quot;:{&quot;value&quot;:0.05755582112089002}},&quot;id&quot;:&quot;6325&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]}},&quot;selected&quot;:{&quot;id&quot;:&quot;6335&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;6334&quot;}},&quot;id&quot;:&quot;6301&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{},&quot;selected&quot;:{&quot;id&quot;:&quot;6339&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;6338&quot;}},&quot;id&quot;:&quot;6319&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;6324&quot;}},&quot;id&quot;:&quot;6328&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6289&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6293&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;6314&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;6315&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;6316&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;6318&quot;}},&quot;id&quot;:&quot;6317&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6285&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;6313&quot;}]},&quot;id&quot;:&quot;6312&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;t [min]&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;6308&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;6281&quot;}},&quot;id&quot;:&quot;6280&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;6280&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;6283&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;6311&quot;}},&quot;id&quot;:&quot;6290&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;}],&quot;root_ids&quot;:[&quot;6269&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.0&quot;}}';
                  var render_items = [{"docid":"436899ee-c359-466c-b8d7-6c7c63ed2a69","root_ids":["6269"],"roots":{"6269":"216caa9a-5191-4c25-9018-dcefe44a310f"}}];
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
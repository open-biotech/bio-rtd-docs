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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.0.1.min.js": "JpP8FXbgAZLkfur7LiK3j9AGBhHNIvF742meBJrjO2ShJDhCG2I1uVvW+0DUtrmc", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.1.min.js": "xZlADit0Q04ISQEdKg2k3L4W9AwQBAuDs9nJL9fM/WwzL1tEU9VPNezOFX0nLEAz", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.1.min.js": "4BuPRZkdMKSnj3zoxiNrQ86XgNw0rYmBOxe7nshquXwwcauupgBF2DHLVG1WuZlV", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.1.min.js": "Dv1SQ87hmDqK6S5OhBf0bCuwAEvL5QYL0PuR/F1SPVhCS/r/abjkbpKDYL2zeM19"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("3b8bf483-b146-4588-93f6-2abf21f3176b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '3b8bf483-b146-4588-93f6-2abf21f3176b' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.1.min.js"];
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
                    
                  var docs_json = '{&quot;4a669bb6-13a0-44f2-9d5a-916d39bc5b16&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;t [min]&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;6684&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;6656&quot;}},&quot;id&quot;:&quot;6655&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;JsObionb9D4MBQkC4hwNPyxtOy1t3B4/NzWQ7fRKLT+0yMSoaSE6P7iarutFVkY/exSK1/N2Uj/gPxQuuKhdPylckuT3M2c/X5BzUb+1cT9NkWP9XWd6P6Z3mJsVPYM/4MaSu9Nriz/eapJOCyCTP9TkmanRH5o/aqvbXYB7oT+o37qiyvCmP6pa+/lliK0/HYSO7Zipsj9m9H66LCy3PxTdxF4GSrw/OBHfe8b9wD8MxhAr3xnEPwh926h1cMc/tyvWfOn2yj/QPUFXfaHOP3u7icIGMtE/N8qFf14Z0z+qcCFGRAHVP/0Clmja5NY/zbamNAnA2D9QuZ+OjI/aPx36LfrvUNw/gkGmYX0C3j9Ap1xtI6PfP73IgvkrmeA/4RnYGP1X4T/YlPO8Gw7iP3Dh1eS5u+I/GueHehth4z+Ewy8ij/7jP3q75AFplOQ/oLulJv8i5T9XApwmp6rlP3Uz4am0K+Y/2w11knim5j9cMvqMQBvnPwxZOuNWiuc/7Jr6dQL05z9sJgnNhljoP5DS/DIkuOg/Gitz1hcT6T/k1k/tm2npP2XcHtjnu+k/WPmnRDAK6j/0m0JPp1TqPxC6vaJ8m+o/upfQlt3e6j/6mBlN9R7rP8pOt8zsW+s/v62KHOuV6z/SGjJcFc3rPzDXzNuOAew/wNOVMnkz7D98U2RU9GLsPyIaIKYekOw/zDw2ERW77D8SCBsW8+PsP1jU5N3SCu0/NA0LS80v7T8XJFQJ+lLtP8Cg/JxvdO0/gAIhcUOU7T9PrHPlibLtP62iR1tWz+0/V3T4Qbvq7T/lPrciygTuP01dxKuTHe4/le8cuyc17j/EEaNolUvuP11Cxw/rYO4/6Ce5WDZ17j9dlyVBhIjuP0p0hyThmu4/ar0QxFis7j/l1TBO9rzuP2rcvGXEzO4/+KS+KM3b7j89se42GuruP51M3be09+4/ur3OYKUE7z+UTU569BDvP921e+WpHO8/b1sWIc0n7z9kj0lOZTLvPyDpPDV5PO8/JKVrSQ9G7z8s0MWtLU/vPzXjnTjaV+8/R1Rldxpg7z8vgDqy82fvP9czSu9qb+8/AP8G9oR27z/EXzhSRn3vP8e741azg+8/egQRIdCJ7z+Sy2yaoI/vP4J3yXsole8/ZDKBT2ua7z+fGbpzbJ/vP9AhjhwvpO8/NBAYVrao7z+c2WYGBa3vP6CmWO8dse8/FK1esAO17z8QACvIuLjvP51pSZY/vO8/zVOkXJq/7z8tuvZAy8LvP1QQLE7Uxe8/9P6udbfI7z+EzaeQdsvvP5BEK2ETzu8/Wspak4/Q7z9dcna+7NLvPxqv4WUs1e8/CE0b+k/X7z91VanZWNnvPzpw+VFI2+8/EFQ2oB/d7z/3zRLy397vP83himaK4O8/oH+bDiDi7z9gQ/HtoePvP8CujvsQ5e8/uEdqIm7m7z/nAAVCuufvPwBM+S726O8/DTKDsyLq7z9fyAGQQOvvP0dVcntQ7O8/TXPlI1Pt7z/yfe4uSe7vPzePDToz7+8/2lEU2xHw7z/Y6IWg5fDvP3Ap8hGv8e8/RGJMsG7y7z/w5j32JPPvPyeVdFjS8+8/T4XtRXf07z+6FjwoFPXvP8CEzWOp9e8/HzApWDf27z+axS1gvvbvP0ppS9I+9+8/egu7ALn37z/gCrM5LfjvP4pFmceb+O8/wrgy8QT57z9lztD5aPnvP4R0fCHI+e8/FBsfpSL67z/Qsam+ePrvP0i/OaXK+u8/0qg8jRj77z8VQpGoYvvvP3C5pyap++8/9PWfNOz77z8Qemb9K/zvP7/dz6lo/O8/ivGyYKL87z9QmwFH2fzvP4J84H8N/e8/RHG9LD/97z+H9mRtbv3vPxiFFmCb/e8/be6XIcb97z/Nx0fN7v3vP2fvLn0V/u8/xzYRSjr+7z8gPX1LXf7vP8CD25d+/u8/IMZ8RJ7+7z/6nqdlvP7vP/CCpQ7Z/u8/NxnPUfT+7z8A+pdADv/vP2zamesm/+8/1yyfYj7/7z+XPK20VP/vP33LDfBp/+8/TTdYIn7/7z/qLHpYkf/vPxrvv56j/+8/tDXcALX/7z+9qu+Jxf/vP+AJkETV/+8/DefOOuT/7z9wIEB28v/vPwAAAAAAAPA/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]}},&quot;selected&quot;:{&quot;id&quot;:&quot;6697&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;6696&quot;}},&quot;id&quot;:&quot;6677&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;6677&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;6678&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;6679&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;6681&quot;}},&quot;id&quot;:&quot;6680&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6663&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;6689&quot;}]},&quot;id&quot;:&quot;6688&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;6659&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;6662&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6684&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;c [mg/mL]&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;6686&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;6660&quot;}},&quot;id&quot;:&quot;6659&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6697&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6651&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6647&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;6655&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;6658&quot;},{&quot;id&quot;:&quot;6662&quot;},{&quot;id&quot;:&quot;6688&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;6659&quot;}],&quot;plot_height&quot;:350,&quot;plot_width&quot;:690,&quot;renderers&quot;:[{&quot;id&quot;:&quot;6680&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;6645&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;6670&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;6647&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;6651&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;6649&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;6653&quot;}},&quot;id&quot;:&quot;6644&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;c [mg/mL]&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;6680&quot;}]},&quot;id&quot;:&quot;6689&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6664&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6679&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;6669&quot;}},&quot;id&quot;:&quot;6665&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6686&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6660&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6666&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;6663&quot;},{&quot;id&quot;:&quot;6664&quot;},{&quot;id&quot;:&quot;6665&quot;},{&quot;id&quot;:&quot;6666&quot;},{&quot;id&quot;:&quot;6667&quot;},{&quot;id&quot;:&quot;6668&quot;}]},&quot;id&quot;:&quot;6670&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;6677&quot;}},&quot;id&quot;:&quot;6681&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6678&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6653&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6696&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6656&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;6655&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;6658&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6667&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6668&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;6669&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6649&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;Unit Operation - Breakthrough&quot;},&quot;id&quot;:&quot;6645&quot;,&quot;type&quot;:&quot;Title&quot;}],&quot;root_ids&quot;:[&quot;6644&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.1&quot;}}';
                  var render_items = [{"docid":"4a669bb6-13a0-44f2-9d5a-916d39bc5b16","root_ids":["6644"],"roots":{"6644":"3b8bf483-b146-4588-93f6-2abf21f3176b"}}];
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
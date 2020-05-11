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
      };var element = document.getElementById("c95140fa-d091-4b2e-8fc8-2e8dba9856f6");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'c95140fa-d091-4b2e-8fc8-2e8dba9856f6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{&quot;4a8f8ac8-d470-4107-84c0-d36c8f69ddf2&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;6326&quot;}},&quot;id&quot;:&quot;6330&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6312&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;HuJhrWBcjD8vTjvMfBaeP/TRqMLs82k/I157EBeslj9qxXpLQLd6vwOE3SYYkZ4/zz2AxAGVoj+nUl9fQJelP6O9T1FQkpo/6GqykA9Tqz+Akm+GNIGtP9wcz5AGWqI/wlxww03dtD+PtrNzYB21PzKnDTjDXL4/vAVM6pFIyD9+nNZCEtTLP8dCtdr5Yc0/ZXA1qNmW1D9q0DDYxNfWPxKpepdnINs/D90/Rpr53D/sMyDlUYzeP7JuK4SLG+A/njkfHqRb4j/+BBfHzDzjPztna88T6+E/H5zDNEbS4z9QhyYY1BziPx2PP0oAG+I/j8KkwGE14z+m+BYXfgjjP5IRqD+st+A/Ge7xiTKx4D8dZkjiFLzfP7ZP+azeSOA/rw2Ice2C3z+cCd7nPM/aP2BhwUWHats/gEgsm1Dk2j+XPt/B3NDXP+FZm8R7zdg/2yRKETcL1T+NBZ1NIrXWP9m4rSICUdU/2+ThaE8L0j849cSd2p7TPz9tou4GRdE/EP3hDgNL0D+sdtd/wuTLP1zZLi5tl80/O7H1i0j7zj/BlNzQtDDJP2+jdoj2f80/+DfrM7KqyT9CAWeO1krIP8xZrxgm9sY/MJKhjLgnxT+/afHiD2HGP/AgpHJmRcU/PzoEcbU2vT/WeVpGsoDBP7B0lt1fELo/2MVPpRaAwD9CwnZ3okzCP0wvXjm2ELc/dNoiL9owvD+yZT7uYoi8P56Knqjt5r4/6N6ODOsIuD86yO+6Y5S1Py8kvHnOda4/Q01wCj1psj8wZvgccAmuP/dymoualKk/2J0on+UUtT8wuw5qEF6lP1/JrbSB8K8/D24f34XVsD+mUrRZHCe1P6ghIOy9yrA/PAkXJSFGoT+aTYXhrm2tP2tI+Q3F5a8/zVU63RO7rz+0mXgU7JCnP3RePEY2P5w/A682q5MHnj/feHQdAFyeP5g/0iTq2JU/iuVLEP30oD/QMKdNkIecP9GlKXZtqp8/N9TKSj4cqD9LZmgT/wuqPwRF1AjBvYk/zxOg0UfyqT8Q79HQIKJeP+zWrqGRD3O/qiEgzlMplj/0MOzrtMqKP5IRa554kZA/esvyvM6yoT9OmfTFw2+hPxCeZkTr5Gm/Ef9Q86Uyoz/AxVZWOSpIv8lhWfEDlpY/XMiSXeEioD8Qlv49Y5KjP/ILH9BDSZK/XuatDqEIpD9CGYjJtnFwv4ax4/kNEHg/hjVvwKTcnz8LVLPiHUGgP2hGCqUzD4Y/CMC0jTU4kL9u1JT1/CCMv+j+JNOqdo+/WawK/sYodb/PUnstx5SSvywP1nqQyHS/aGEGW9bhWr8+f6AaLtVyP3ZSyJVE/Xw/ZQ30W2/AoT8liXNDjtCcP4jMZMbnsIG/f6XEtzzvlT8+V1g03hqSP8SjjPjKKpW/FGVeNGdyij/Brv/6tAWGv8B9L+er+Ig/fqiNx2y6lT9IirNeldKZv0kYueMmhYW/IkJ/csWvnT+NZXiyUx2dP4ZvZF/GZ3g/Dkt/uD/Qmj+hHa+eQheeP9Ir+TDIBGk/2tTK+MTFYr9PEC13xYqZv3y+LzZB8pu/K0H7GixNmb9OAPpE6wRIvwuXeInYcZe/3IGXl67/hL93DIwIv2KMv6LIlZOt4JC/1Pk3OiIdkj8JnMjWeSqYvzHvvaxv84W/QgAFr7ZecD8GRvAxJOllP2PM0umaT5k/QD20IZ41kr8veg07Ur9iv5WQ/nB5WHq/wWvRzl66lb/6Bag9DgiWv2MWWNIZu5I/9D+dxcDYYT/ALDa9gdF9P/A5yxgikWU/C19ZVJj6mL8jA+qkESN7vzh7Xyev3JK/Pputv02Enj/zD128wf2TP6r4Js+9Enu/Bl59Vn+uhD+nhtlQAxuVvxfLffv6KGC/c+CoEDSYez9mYqxcPh+Dv8gu8cfdJX6/ed4r+xS/dT9V3IwGKZOXv2z60km/Bo0/9h6QLSrzfD8spAZW5t94P++9KRhXwIc/il6MsX0ylj9IAmGD7ZWFv3XJOZiRL5W/FcmLM65Lk7+sp83v+3SQP8U5dXsZdZU/NO5NHq6xWz/k5YfHe9ubP0SqwJACEXU/exEN97VwlL+TDMxyUgmNv0r2GcQPGJO/ac7ND2alk7/DkvDtcC9tv0JIqM1oaIg/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]}},&quot;selected&quot;:{&quot;id&quot;:&quot;6361&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;6360&quot;}},&quot;id&quot;:&quot;6326&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{},&quot;selected&quot;:{&quot;id&quot;:&quot;6367&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;6366&quot;}},&quot;id&quot;:&quot;6349&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;blue&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:15},&quot;x&quot;:{&quot;value&quot;:1.4000000000000001},&quot;y&quot;:{&quot;value&quot;:0.5954898005953156}},&quot;id&quot;:&quot;6340&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;6338&quot;}]},&quot;id&quot;:&quot;6337&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6316&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;Measurements&quot;},&quot;id&quot;:&quot;6294&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;blue&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:15},&quot;x&quot;:{&quot;value&quot;:0.6000000000000001},&quot;y&quot;:{&quot;value&quot;:0.07989624743012343}},&quot;id&quot;:&quot;6345&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;6339&quot;}},&quot;id&quot;:&quot;6343&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6366&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6335&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6305&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6298&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;6304&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;6307&quot;},{&quot;id&quot;:&quot;6311&quot;},{&quot;id&quot;:&quot;6337&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;6308&quot;}],&quot;plot_height&quot;:350,&quot;plot_width&quot;:690,&quot;renderers&quot;:[{&quot;id&quot;:&quot;6329&quot;},{&quot;id&quot;:&quot;6342&quot;},{&quot;id&quot;:&quot;6347&quot;},{&quot;id&quot;:&quot;6352&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;6294&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;6319&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;6296&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;6300&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;6298&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;6302&quot;}},&quot;id&quot;:&quot;6293&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6317&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;6344&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;6345&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;6346&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;6348&quot;}},&quot;id&quot;:&quot;6347&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6364&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;c [mg/mL]&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;6329&quot;}]},&quot;id&quot;:&quot;6338&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;6304&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;6307&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;blue&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:15},&quot;x&quot;:{&quot;value&quot;:3.9000000000000004},&quot;y&quot;:{&quot;value&quot;:0.05755582112089002}},&quot;id&quot;:&quot;6351&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6361&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;6308&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;6311&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;green&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6328&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6300&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;6318&quot;}},&quot;id&quot;:&quot;6314&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;6349&quot;}},&quot;id&quot;:&quot;6353&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6309&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;6312&quot;},{&quot;id&quot;:&quot;6313&quot;},{&quot;id&quot;:&quot;6314&quot;},{&quot;id&quot;:&quot;6315&quot;},{&quot;id&quot;:&quot;6316&quot;},{&quot;id&quot;:&quot;6317&quot;}]},&quot;id&quot;:&quot;6319&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6365&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6362&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{},&quot;selected&quot;:{&quot;id&quot;:&quot;6365&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;6364&quot;}},&quot;id&quot;:&quot;6344&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6360&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6313&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{},&quot;selected&quot;:{&quot;id&quot;:&quot;6363&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;6362&quot;}},&quot;id&quot;:&quot;6339&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;blue&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:15},&quot;x&quot;:{&quot;value&quot;:1.4000000000000001},&quot;y&quot;:{&quot;value&quot;:0.5954898005953156}},&quot;id&quot;:&quot;6341&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;6344&quot;}},&quot;id&quot;:&quot;6348&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6367&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;6318&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;c [mg/mL]&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;6335&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;6309&quot;}},&quot;id&quot;:&quot;6308&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;t [min]&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;6333&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;6305&quot;}},&quot;id&quot;:&quot;6304&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;blue&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:15},&quot;x&quot;:{&quot;value&quot;:0.6000000000000001},&quot;y&quot;:{&quot;value&quot;:0.07989624743012343}},&quot;id&quot;:&quot;6346&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6315&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;6349&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;6350&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;6351&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;6353&quot;}},&quot;id&quot;:&quot;6352&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;6339&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;6340&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;6341&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;6343&quot;}},&quot;id&quot;:&quot;6342&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;blue&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:15},&quot;x&quot;:{&quot;value&quot;:3.9000000000000004},&quot;y&quot;:{&quot;value&quot;:0.05755582112089002}},&quot;id&quot;:&quot;6350&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;6326&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;6327&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;6328&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;6330&quot;}},&quot;id&quot;:&quot;6329&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6302&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6296&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.6,&quot;line_color&quot;:&quot;green&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6327&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6363&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6333&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;}],&quot;root_ids&quot;:[&quot;6293&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.1&quot;}}';
                  var render_items = [{"docid":"4a8f8ac8-d470-4107-84c0-d36c8f69ddf2","root_ids":["6293"],"roots":{"6293":"c95140fa-d091-4b2e-8fc8-2e8dba9856f6"}}];
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
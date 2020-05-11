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
      };var element = document.getElementById("102767b6-b2b5-44ef-bc05-61464b76ed99");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '102767b6-b2b5-44ef-bc05-61464b76ed99' but no matching script tag was found. ")
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
                    
                  var docs_json = '{&quot;f36bf01f-63fe-4bd8-a1d2-1956b472f060&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6447&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;6470&quot;}},&quot;id&quot;:&quot;6474&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6472&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;6449&quot;}},&quot;id&quot;:&quot;6445&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]}},&quot;selected&quot;:{&quot;id&quot;:&quot;6493&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;6492&quot;}},&quot;id&quot;:&quot;6470&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;6457&quot;}},&quot;id&quot;:&quot;6461&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6443&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;6449&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;t [min]&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;6464&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;6436&quot;}},&quot;id&quot;:&quot;6435&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6464&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;6457&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;6458&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;6459&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;6461&quot;}},&quot;id&quot;:&quot;6460&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPwAAAAAAAPA/zczMzMzM8D+amZmZmZnxP2dmZmZmZvI/NDMzMzMz8z8AAAAAAAD0P83MzMzMzPQ/mpmZmZmZ9T9nZmZmZmb2PzQzMzMzM/c/AAAAAAAA+D/NzMzMzMz4P5qZmZmZmfk/Z2ZmZmZm+j80MzMzMzP7PwAAAAAAAPw/zczMzMzM/D+amZmZmZn9P2dmZmZmZv4/NDMzMzMz/z8AAAAAAAAAQGdmZmZmZgBAzczMzMzMAEAzMzMzMzMBQJqZmZmZmQFAAAAAAAAAAkBnZmZmZmYCQM3MzMzMzAJANDMzMzMzA0CamZmZmZkDQAAAAAAAAARAZ2ZmZmZmBEDNzMzMzMwEQDQzMzMzMwVAmpmZmZmZBUAAAAAAAAAGQGdmZmZmZgZAzczMzMzMBkA0MzMzMzMHQJqZmZmZmQdAAAAAAAAACEBnZmZmZmYIQM3MzMzMzAhANDMzMzMzCUCamZmZmZkJQAAAAAAAAApAZ2ZmZmZmCkDNzMzMzMwKQDQzMzMzMwtAmpmZmZmZC0AAAAAAAAAMQGdmZmZmZgxAzczMzMzMDEA0MzMzMzMNQJqZmZmZmQ1AAAAAAAAADkBnZmZmZmYOQM3MzMzMzA5ANDMzMzMzD0CamZmZmZkPQAAAAAAAABBAMzMzMzMzEEBnZmZmZmYQQJqZmZmZmRBAzczMzMzMEEAAAAAAAAARQDMzMzMzMxFAZ2ZmZmZmEUCamZmZmZkRQM3MzMzMzBFAAAAAAAAAEkAzMzMzMzMSQGdmZmZmZhJAmpmZmZmZEkDNzMzMzMwSQAAAAAAAABNANDMzMzMzE0BnZmZmZmYTQJqZmZmZmRNAzczMzMzME0AAAAAAAAAUQDQzMzMzMxRAZ2ZmZmZmFECamZmZmZkUQM3MzMzMzBRAAAAAAAAAFUA0MzMzMzMVQGdmZmZmZhVAmpmZmZmZFUDNzMzMzMwVQAAAAAAAABZANDMzMzMzFkBnZmZmZmYWQJqZmZmZmRZAzczMzMzMFkAAAAAAAAAXQDQzMzMzMxdAZ2ZmZmZmF0CamZmZmZkXQM3MzMzMzBdAAAAAAAAAGEA0MzMzMzMYQGdmZmZmZhhAmpmZmZmZGEDNzMzMzMwYQAAAAAAAABlANDMzMzMzGUBnZmZmZmYZQJqZmZmZmRlAzczMzMzMGUAAAAAAAAAaQDQzMzMzMxpAZ2ZmZmZmGkCamZmZmZkaQM3MzMzMzBpAAAAAAAAAG0A0MzMzMzMbQGdmZmZmZhtAmpmZmZmZG0DNzMzMzMwbQAAAAAAAABxANDMzMzMzHEBnZmZmZmYcQJqZmZmZmRxAzczMzMzMHEAAAAAAAAAdQDQzMzMzMx1AZ2ZmZmZmHUCamZmZmZkdQM3MzMzMzB1AAAAAAAAAHkA0MzMzMzMeQGdmZmZmZh5AmpmZmZmZHkDNzMzMzMweQAAAAAAAAB9ANDMzMzMzH0BnZmZmZmYfQJqZmZmZmR9AzczMzMzMH0AAAAAAAAAgQJqZmZmZGSBAMzMzMzMzIEDNzMzMzEwgQGdmZmZmZiBAAAAAAACAIECamZmZmZkgQDMzMzMzsyBAzczMzMzMIEBnZmZmZuYgQAAAAAAAACFAmpmZmZkZIUAzMzMzMzMhQM3MzMzMTCFAZ2ZmZmZmIUAAAAAAAIAhQJqZmZmZmSFAMzMzMzOzIUDNzMzMzMwhQGdmZmZm5iFAAAAAAAAAIkCamZmZmRkiQDMzMzMzMyJAzczMzMxMIkBnZmZmZmYiQAAAAAAAgCJAmpmZmZmZIkAzMzMzM7MiQM3MzMzMzCJAZ2ZmZmbmIkAAAAAAAAAjQJqZmZmZGSNANDMzMzMzI0DNzMzMzEwjQGdmZmZmZiNAAAAAAACAI0CamZmZmZkjQDQzMzMzsyNAzczMzMzMI0BnZmZmZuYjQAAAAAAAACRA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;bG3nbCRbnj94hXMq42Rnv4T9I5mS+n+/nnE7ICokfj8vWZxMxkmKv8rEf2TqkpA/VtAKb6WhoT+qknR31OOZP/9U1DzRa5M/OnCAONayiz+rwtDfqBWVP9Kh7P6AZqM/CREtP22Ssj9kgo/aDsC8PwrPWXpGV8I/wGH1XHQcxD9rqvksHsHHP7+/w98+9c4/2sqV2XOW1D8vByHSucPUP4+nnwfr29c/61JPfwuj2z+eM25DWUjgP52THaAQNeE/RWYs2tmb4T9Y2Qn5JkXjPxEtj9GO3uE/0PQw3/dn4z/RDd7U0MHiPzEDpfqH0+I/EB9W8sEE4j/9pg9hfHThPx+jJBE3eOI/Ge/KlVKH4T/0G5wSV3XfPyBoUKu8Ht8/cG08+Ulu3z+weUg/gcHaP1lRtAD2etk/9WeM9GKG2z8vIMzaUJLYP3/q5J5nSdc/pILkKige1T/nXbtROkXWP3r8lzfWYdM/ZeAe8RLr0z9uyyFPriDUPwLlXjoZP9M/7cCymnyu0T80HOQaNkXRP+NElR2axMw/k9ekO+0Xyz+CwUv76PTLP1SNRV8Jgsc/gOmJfo5Zyz/GwNyLNQXEP9oJ4gvInMk/pG0eOW+ZwT816CN7sHbBP1zGjn4w2MA/0GI6dI/KxT/BN0O2uVy/P0i1qQdL+cE/VcGZh+Z5vT+wLwYexia/P85GsOa/Jbg/iZNa4SP2vT9AvOLBRvS6PzGNAChbQb0/CK6yaziAuT8ZDBT8wQe5P+GJtspbILg/+fbseQWlqT852vRiqbOxP2Q0X9Nj1rM/SRKw7/ozqz9SflnPtd61P68t+Kkgtak/YnJ6l0hoqz+LT2wBC9WxP4OPyB3vSLQ/AXey5Mj5sD/KKcmZEa6yP6KzkmaX4LI/LhHXkf4ajz9X0mWfUkemP0v37keqDKQ/WuctZEYdpT8aqqdKilKGP1QT0AHpwn0/bHh/jc1rpD+OFjX17eeKP0wl+u1iMqE/GrbNP3Inoj9AcfPdD+9WPyYa6sfu3Yk//DY6qC5Hpj8qYQqAhI+TP5jiCC5jFpc/OBfl4BmgZr/8nCbXw5KoP7Cx4gts3IS/yP8GKHerpD8KOjq0B06gP3DCVIwpvpY/NP3VtpJfhT9s81nOPYSiP8Qr/De8Ro2/APUy8DuFfr8gfK2f02Fxv6+emeuhPJ0/gu0J8YA0oT8V8y4d1BmiP2SFEb5SEoE/3dzRAX1ehb8wh0Uelp93v/X2MqxZmnI/EHaEqzhJVr+F1/MlVzSHPy7dU2roO3q/TSyNNuZFmT/lbcWyJk2iP6ooUCph/6E//FmGnkUogz9GfHxFU/2CP2GcwdkIYYm/UxyOx9wZjj9fXXZJ/VSQP8V9ABHrC5Y/4FurI+drkT/nj8FvBBaWvxooHIGE3Zo/EbP8/QuJkr9fN8guc0KSP3uUpTNJ4Js/PLy2LbLJgr/8KRdSOLJFP0mnx/PZa5U/gkWa/NhZm79RWqy77FCgP7uo1dOkYIw/lDEM1fdAgL/UzOrO6ryQP7EZnJM58ng/yshSv95xiL9mu2mJIOOFv/RWRemh/4A/7hzy+Qyslz/m1sSstZdQP6q7DCGCFJA/WrlYIWvWir/TKq/l5LiXP9689VlXMJY/Mpi/g2xGiD8M9ahsh9OWv2Xy0b/jKZE/OanjJMYQXL/zAPltoitxPwlh6mhfooW/0Zl90ahAeb8Jt6GpximaP+Hhenfrn4Q/dxmI8xjqkD/TnJjgbKmUP2sKoQBO/JY/nEtYQnUek7/+gog/ixKRP0uz9CME1Iw/QXHjJ/k7h7+IxXqFyS6ZP1l8a25PQGi/xmj2yArulL/SScZKVG6Mv+5bmrhZY5G/HW++mTxceD8gZ3r7g/GZP/JMcUuO2Zq//AOxl5UllD+Wjw+2e+GRP1o0ekdY/00/roCV48rxej/MmzR+Oi6dv7GS+fiYspI/FUe5BdhslD/gy+fKzcOBv6X7hPA25FW/ZUaxRXaRhr84rj324CWXv0KCcgEud2O/bByp2xP5hz/adVPZTAuKP5RBYTjwtYO/cgJqvg74k79/JvdMfGKUPwvQpcrm75k/Rd3SzEy2hT+E2TiDeWVtPw7RlgSSs20/wt20c5Zxkj9sOMzBne1wvxepimL5BZE/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[201]}},&quot;selected&quot;:{&quot;id&quot;:&quot;6482&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;6481&quot;}},&quot;id&quot;:&quot;6457&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;6439&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;6442&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;6435&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;6438&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6436&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6427&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;6443&quot;},{&quot;id&quot;:&quot;6444&quot;},{&quot;id&quot;:&quot;6445&quot;},{&quot;id&quot;:&quot;6446&quot;},{&quot;id&quot;:&quot;6447&quot;},{&quot;id&quot;:&quot;6448&quot;}]},&quot;id&quot;:&quot;6450&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.6,&quot;line_color&quot;:&quot;green&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6458&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6440&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6493&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;6435&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;6438&quot;},{&quot;id&quot;:&quot;6442&quot;},{&quot;id&quot;:&quot;6468&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;6439&quot;}],&quot;plot_height&quot;:350,&quot;plot_width&quot;:690,&quot;renderers&quot;:[{&quot;id&quot;:&quot;6460&quot;},{&quot;id&quot;:&quot;6473&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;6425&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;6450&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;6427&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;6431&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;6429&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;6433&quot;}},&quot;id&quot;:&quot;6424&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6433&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;p (pdf)&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;6473&quot;}]},&quot;id&quot;:&quot;6483&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6466&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;6470&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;6471&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;6472&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;6474&quot;}},&quot;id&quot;:&quot;6473&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6448&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;c [mg/mL]&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;6466&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;6440&quot;}},&quot;id&quot;:&quot;6439&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6431&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6446&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6471&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;Probability Distribution&quot;},&quot;id&quot;:&quot;6425&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;6469&quot;},{&quot;id&quot;:&quot;6483&quot;}]},&quot;id&quot;:&quot;6468&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;c [mg/mL] (data)&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;6460&quot;}]},&quot;id&quot;:&quot;6469&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6492&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6481&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;green&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;6459&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6429&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6482&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;6444&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;}],&quot;root_ids&quot;:[&quot;6424&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.1&quot;}}';
                  var render_items = [{"docid":"f36bf01f-63fe-4bd8-a1d2-1956b472f060","root_ids":["6424"],"roots":{"6424":"102767b6-b2b5-44ef-bc05-61464b76ed99"}}];
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
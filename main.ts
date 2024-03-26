// author = shokkunn

import $ from "jquery";
import generateHeader from "./components/header";
function search() {
    var website = $('#website-input').val();
    if (!website) {
      alert('Please enter a website URL');
      return;
    }

    var apiUrl = `https://archive.org/wayback/available?url=${website}&timestamp=20070101`;

    $.getJSON(apiUrl, function(data) {
      if (data.archived_snapshots.closest && data.archived_snapshots.closest.available) {
        var resultUrl = data.archived_snapshots.closest.url;
        // convert the url to https
        resultUrl = resultUrl.replace('http://', 'https://');
        console.log(resultUrl);
        var iframe = $('<iframe>', {
            class: 'searchFrame',
          src: resultUrl,
          width: '100%',
          height: '600',
          frameborder: '0',
          allowfullscreen: '',
        });
        $('#results').html(iframe as any);
      } else {
        $('#results').text('No archived version found for the selected date range.');
      }
    }).fail(function() {
      $('#results').text('Error retrieving data from the Wayback Machine.');
    });
}

function initTabs() {
    $(document).on("click", 'button[role="tab"]', function() {
      $(this).closest('.window-body').find('button[role="tab"]').attr('aria-selected', 'false');
      $(this).closest('.window-body').find('[role="tabpanel"]').hide();
      $(this).attr('aria-selected', 'true');
      var selectedPanelId = $(this).attr('aria-controls');
      $('#' + selectedPanelId).show();
    });
  }


  function loadBrowser() {
    $('#website-input').on("keypress", function(e) {
        if (e.which === 13) {
            search();
        }
    })
    $('#search-btn').on("click", search);
}

function initPage() {
    $('#header').replaceWith(generateHeader());
    $(document).on("click", "#home-butt", function() {
        $('#content').load("pages/content-main.html", initTabs); 
    });
    $(document).on("click", "#globe-butt", function() {
        $('#content').load("pages/content-browser.html", function() {
            initTabs();
            loadBrowser();
        }); 
        
    });
    $(document).on("click", "#donate-butt", function() {
        $('#content').load("pages/content-donate.html", initTabs); 
    });
}

$(window).on('load', function() {
    $('#header').load("pages/content-main.html")
    initPage();
});

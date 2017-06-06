var unid = "C";
/* Where in the world are you? */
function clima() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      loadWeather(position.coords.latitude + ',' + position.coords.longitude);
    });
  } else {
    loadWeather("", "455827");
  }
}
/* 
 * Test Locations
 * Austin lat/long: 30.2676,-97.74298
 * Austin WOEID: 2357536
 */
 $(document).ready(function() {
  clima();

  $("#unid").on('click', function() {
    if(unid === "C"){
      unid = "F";
    }else{
      unid = "C";
    }
    
    clima();
  });
  
});

 function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: unid,
    success: function(weather) {
      $('.temperature').html(weather.temp + "º <em class=\"unid\"> " + unid + "</em>");

      $('.icone').html('<h2><i class="icon-' + weather.code + '"></i></h2>');
      $('.text').text(weather.text);
      $('.location').text(weather.city);
      console.log(weather);
    },
    error: function(error) {
      $("#weather").html('<h1>' + error + '</h1>');
      loadWeather("", "455827");
    }
  });
}



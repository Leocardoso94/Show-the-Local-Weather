$(document).ready(function() {
  $(".tw").prop('disabled',true);
  $('#change').on('click', function() {
    $(".tw").prop('disabled',false);
    getQuote();
  });

  function getQuote() {
    $.getJSON("https://api.myjson.com/bins/19l9p.json", function(json) {

      $jsonLength = json.length;

      var randomizedQuoteId = Math.floor(Math.random() * ($jsonLength - 0 + 1)) + 0;
      json = json.filter(function(val) {
        return (val.id === randomizedQuoteId);
      });
      json.forEach(function(val) {
        quoteText = val.quote;
        quoteAuthor = val.author;
        $('blockquote').html("" + quoteText + "<footer><cite>" + quoteAuthor + "</cite></footer>");

        $('#tweet').attr("href", 'https://twitter.com/intent/tweet?text=' + '"' + quoteText + '" - ' + quoteAuthor + ' @LeoCardoso94_').attr("target","_blank");
      });
    });
  }
});
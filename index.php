<html>
<head>
<title>Bond Web Service Demo</title>
<style>
	body {font-family:georgia;}

  .film{
    border:1px solid #E77DC2;
    border-radius: 5px;
    padding: 5px;
    margin-bottom:5px;
    position:relative;  
  }
 
  .pic{
    position:absolute;
    right:10px;
    top:10px;
  }

  .pic img{
    max-width: 50px;
  }

</style>
<script src="https://code.jquery.com/jquery-latest.js"></script>

<script type="text/javascript">


  function bondTemplate(song){
    return `
        <div class="film">
            <b>Title</b>: ${song.Title} <br />
            <b>Artist</b>: ${song.Artist}<br />
            <b>Year</b>: ${song.Year} <br />
            <b>Views</b>: ${song.Views} <br />
            <div class="pic"><img src="thumbnails/${song.Image}" /></div>
      </div>
    `;
  }

  
$(document).ready(function() { 
 
 $('.category').click(function(e){
   e.preventDefault(); //stop default action of the link
   cat = $(this).attr("href");  //get category from URL
  
   var request = $.ajax({
     url: "api.php?cat=" + cat,
     method: "GET",
     dataType: "json"
   });
   request.done(function( data ) {
     console.log(data);

  
     //place data.title on page
     $("#filmtitle").html(data.title);

     $("#films").html("");

    $.each(data.song, function(i, item){
      let myData = bondTemplate(item);
      $("<div></div>").html(myData).appendTo("#films");
    })

     

    /*
    let myData = JSON.stringify(data,null,4);
    myData = "<pre>" + myData + "</pre>";
    $("#output").html(myData);
     */
     
   });
   request.fail(function(xhr, status, error ) {
alert('Error - ' + xhr.status + ': ' + xhr.statusText);
   });
 
  });
}); 


</script>
</head>
	<body>
	<h1>Youtube's Non Copyright Music</h1>
		<a href="year" class="category">Top 10 Most Viewed Non Copyright Song</a><br />
		<a href="box" class="category">My Top 10 Most Viewed Non Copyright Song</a>
		<h3 id="filmtitle">Title Will Go Here</h3>
		<div id="films">
      <!--
      <div class="film">
            <b>Film</b>: 1 <br />
            <b>Title</b>: Dr. No<br />
            <b>Year</b>: 1962 <br />
            <b>Director</b>: Terence Young <br />
            <b>Producers</b>: Harry Saltzman and Albert R. Broccoli <br />
            <b>Writers</b>: Richard Maibaum, Johanna Harwood and Berkely Mather <br />
            <b>Composer</b>: Monty Norman <br />
            <b>Budget</b>: $1,000,000.00 <br />
            <b>BoxOffice</b>: $59,567,035.00 <br />
            <div class="pic"><img src="thumbnails/dr-no.jpg" /></div>
      </div>
    -->
		</div>
		<div id="output">Results go here</div>
	</body>
</html>

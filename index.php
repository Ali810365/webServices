<html>
<head>
<link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
<title>NCS Web Service Demo</title>
<style>
	body {font-family:georgia;}
  #list{
    
  }
  .song{
    border:1px solid #E77DC2;
    border-radius: 5px;
    padding: 5px;
    margin: auto;
    position:relative; 
    width: 50%;
    
  }
 
  .pic{
    position:absolute;
    right:10px;
    top:10px;
  }

  .pic img{
    max-width: 75px;
  }

</style>

<script src="https://code.jquery.com/jquery-latest.js"></script>

<script type="text/javascript">

  
  function musicTemplate(song){
    return `
    <div class="song-wrapper">
        <div class="song">
            <div class="pic"><img src="thumbnails/${song.Image}" /></div>
            <div class="song-details">
            <b>Title</b>: ${song.Title} <br />
            <b>Artist</b>: ${song.Artist}<br />
            <b>Year</b>: ${song.Year} <br />
            <b>Views</b>: ${song.Views} <br />
            </div>
            <div class="music-container">
        <audio src="mp3/${song.Play}.mp3" id="audio"></audio>
        <div class="buttons">
            <button id="play" class="play-btn">
                <i class="fas fa-play"></i>
            </button>
        </div>
        
        <div class="progress-wrapper">
            <div class="progress-bar">
        </div>
        </div>

        <div class="volume-wrapper">
            <button id="volume">
                <i class="fa-solid fa-volume-off"></i>
            </button>
        </div>
            
      </div>
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
     $("#mytitle").html(data.title);

     $("#list").html("");

    $.each(data.song, function(i, item){
      let myData = musicTemplate(item);
      $("<div></div>").html(myData).appendTo("#list");
    })

     
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
    <p>This program returns youtubes a list of the top 10 most viewed youtube videos</p>
    <p>By Clicking the links below you can view the list or my personal list</p>
		<a href="year" class="category">Top 10 Most Viewed Non Copyright Song</a><br />
		<a href="box" class="category">My Top 10 Most Viewed Non Copyright Song</a>
		<h3 id="mytitle">Title Will Go Here</h3>
		<div id="list">
      

		</div>
		<div id="output">Results go here</div>
    
    
  <script src="script.js"></script>
	</body>
</html>

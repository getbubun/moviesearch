$(document).ready(() =>{
	$('.loader').hide();
	$('#search').click(function(){
		movieDetails();


	});
	$('#goBack').click(function(){
		location.reload();
		$('#result').hide();
		$('#form-section').show();

	});
});

let movieDetails = () =>{
	let title =$('#movieTitle').val();
	let id =$('#movieId').val();
	if(id == ''  && id == null  && title == '' && title == null)
		alert('Field is Empty !');
	else
		$.ajax({
			type:'GET',
			dataType:'json',
			url:"https://www.omdbapi.com/?apikey=8b7a0a84&i="+id+"&t="+title+"",
			success: (data) =>{

				if(data.Response=='False'){
					alert(data.Error);
				}
				else{
					console.log(data);
				$('#form-section'). css('display','none')
				$('#title').append(data.Title);
				$('#plot').append(data.Plot);
				$('#actor').append(data.Actors);
				$('#award').append(data.Awards);
				$('#boxoffice').append(data.Boxoffice);
				$('#country').append(data.Country);
				$('#dvd').append(data.DVD);
				$('#director').append(data.Director);
				$('#genre').append(data.Genre);
				$('#language').append(data.Language);
				$('#metascore').append(data.Metascore);
				$('#rated').append(data.Rated);
				$('#ratings').append(data.Ratings);
				$('#released').append(data.Released);
				$('#runtime').append(data.Runtime);
				$('#type').append(data.Type);
				$('#website').append(data.Website);
				$('#writer').append(data.Writer);
				$('#year').append(data.Year);
				$('#imdb-id').append(data.imdbID);
				$('#imdb-rating').append(data.imdbRating);
				$('#imdb-vote').append(data.imdbVotes);
				$("#poster").attr("src",data.Poster);
			}



			},
			error: (data) =>{
            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)


				
			},
			timeout:3000,
			beforeSend:() =>{
				$('#form-section').hide();
				$('.loader').show();
			},
			complete: () =>{
			
				$('.loader').hide();
				$('#result'). css('display','block') ;
			}


			});

}


function getData(){

	var newNews = " ";

	firebase.database().ref("News").orderByChild("DateTime").limitToLast(3).once("value", function(snapshot) {

		snapshot.forEach(function(snapshot) {

			const recentNews = document.getElementById('news');

    		const val = snapshot.val();
				newNews =
					newNews +
					"<div class='col s12 m12 l4 newsWrap'>" +
					"<div class='col-content newsBlock'>" +
					"<div class='title'>" +
					val.Title +
					"</div>" +
					"<img class='responsive-img' src='" +
					val.ThumbImg +
					"'>" +
					"<p class='abstract'>" +
         			val.ShortTxt +
        			"</p>" +
        			"<div class='authRead'"+
         			"<p class='author'>" +
         			val.Author +
         			"</p>" +
         			"<a class='_viewFullNews readMore' _itemid='" +
         			snapshot.key +
         			"'>Read more</a>" +
         			"</div>" +
         			"</div>" +
         			"</div>";

			recentNews.innerHTML = newNews;
		});
	});

    var recentArticle = " ";

	firebase.database().ref("Articles").orderByChild("DateTime").limitToLast(3).once("value", function(snapshot) {

    	snapshot.forEach(function(snapshot) {

			const recentlyAdded = document.getElementById('recentlyAdded');

    		const val = snapshot.val();
				recentArticle =
					recentArticle +
					"<div class='col s12 m12 l4 newsWrap'>" +
					"<div class='col-content newsBlock'>" +
					"<div class='title'>" +
					val.Title +
					"</div>" +
					"<img class='responsive-img' src='" +
					val.ThumbImg +
					"'>" +
					"<p class='abstract'>" +
         			val.ShortTxt +
        			"</p>" +
         			"<a class='_viewFullArticle readMore' _itemid='" +
         			snapshot.key +
         			"'>Read more</a>" +
         			"</div>" +
         			"</div>";

			recentlyAdded.innerHTML = recentArticle;
		});

		console.log("Recently Added data loaded");
	});

}

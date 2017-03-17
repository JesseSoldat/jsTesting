
let story = document.getElementById('story');
let readMore = document.getElementById('readMore');

let paras = 9;
let html = false;
let amount = 8;

for(let i = 1; i < amount; i++){
	getStories(i);
}

function getStories(i) {
	axios.get('http://hipsterjesus.com/api?paras='+paras+'&html='+html)
		.then((res) => {
			// console.log(res);
			let truncateText = truncate(res.data.text, 500);
			// console.log(truncateText);

			story.innerHTML += `
			<h4>Top Story ${i}</h4>
			<p class="storyContent">${truncateText}</p>
			
			<button id="readMore">Read More</button>
			<br><br>`;

		})
		.catch((err) => {
			console.log(err);
		});

}

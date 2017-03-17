// We write the Modash library in this file in the Unit Testing chapter
function truncate(string, length) {
	if(string.length > length){
		return string.slice(0, length) + '...';
	} else {
		return string;
	}
}
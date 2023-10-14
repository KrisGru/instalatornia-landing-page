const title = document.getElementById("title");

console.log("title", title);

const observer = new IntersectionObserver((entries) => {
	console.log("title", title, entries);
});

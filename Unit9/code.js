/**
 * Created by AdrianH on 7/15/2017.
 */
//simply run the html file, and when hovering through it, it'll change the bolded letter to red color

var para = document.querySelector("p");
var word = document.getElementsByTagName('strong');

function isInside(node, target) {
	for (; node != null; node = node.parentNode)
		if (node == target) return true;
}
para.addEventListener("mouseover", function(event) {
	if (!isInside(event.relatedTarget, para)) {
		for(var i = 0; i<word.length ; i++)
		word[i].style.color = "red";
	}
});
para.addEventListener("mouseout", function(event) {
	if (!isInside(event.relatedTarget, para))
		for(var i = 0; i<word.length ; i++)
		word[i].style.color = "";
});

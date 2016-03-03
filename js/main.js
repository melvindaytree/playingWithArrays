/*Create an array of at least 5 of your DMD courses. Use the following format: DMD3470
Looping through this array, display a different photo for each class on the page (I suggest using the index of the item as a jpg filename)
After the loop runs, check to see if it contains DMD1070 and DMD 3470. If so, add a headline of "*Web Design Professional*" to the top of the page.
Make it so when I click on those images, a title appears over them, listing the course name.
Use functions and addEventListener as appropriate
Submit the GitHub repo AND a launched URL*/

var courses = ["DMD3470" , "DMD1070" , "DMD1020", "DMD3440", "DMD1000"];

function showText(element, text) {
	element.addEventListener ("click", function() {
		var newP = document.createElement('p');
    newP.appendChild(document.createTextNode(text));
    document.querySelector("."+text).appendChild(newP);
	
		console.log(text);
	});
}

function addPic(arr) {

 if (arr.indexOf("DMD3470") || arr.indexOf("DMD1070")) {
	 	document.getElementById("header").innerHTML += "*Web Design Profesional*";
	 }

	for (var i = 0; i < arr.length; i++) {
		var createDiv = document.createElement('div');
		var pic = document.createElement("img");
		pic.src = "http://webdesign.digitalmediauconn.org/spring16/med13031/playingWithArrays/img/" + i + ".jpg";

		var hdr = document.getElementById("header");

		console.log(pic);
		//hdr.appendChild(pic)
		createDiv.appendChild(pic);
		createDiv.classList.add(arr[i]);
		showText(pic, arr[i]);

		document.getElementById("header").appendChild(createDiv);
	}

	
}





addPic(courses);
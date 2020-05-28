function initReportAbuse(){
	var url = "https://docs.google.com/forms/d/e/1FAIpQLSeXTFKKkhHmapgsLN7VuhKHkT7qWj9bJjH9I2UWPf2qwo20UQ/viewform"+
		"?entry.1465131479=" + encodeURIComponent(nSubCtrl.pageData.title) +
		"&entry.1341794294=" + encodeURIComponent(nSubCtrl.pageData.lat + "," + nSubCtrl.pageData.lng) +
		"&emailAddress=" + encodeURIComponent(settings["revReportEmail"]);

	var buttonElem = document.createElement("a");
	buttonElem.href = url;
	buttonElem.target = "_BLANK"; //Does not adhere to keepTab
	buttonElem.text = "Report abuse";
	buttonElem.setAttribute("class","button-secondary");

	var shouldThisBeWayspotCard = document.getElementById("photo-card");
	var footer = shouldThisBeWayspotCard.getElementsByClassName("card__footer")[0];
	footer.insertBefore(buttonElem, footer.children[0]);
}

document.addEventListener("WFPAllRevHooked", initReportAbuse);
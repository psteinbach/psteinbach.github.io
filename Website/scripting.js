function buttonClicked() {
	document.getElementById("aboutMePageID").className = "aboutMePage_clicked";
	document.getElementById("aboutMeID").style.pointerEvents = "none";
	document.getElementById("assignmentsID").style.pointerEvents = "none";
	document.getElementById("assignmentsID").style.opacity = "0";
	document.getElementById("oldSiteID").style.pointerEvents = "none";
	document.getElementById("oldSiteID").style.opacity = "0";
}

function assignmentsButtonClicked() {
	document.getElementById("assignmentsPageID").className = "assignmentsPage_clicked";
	document.getElementById("aboutMeID").style.pointerEvents = "none";
	document.getElementById("aboutMeID").style.opacity = "0";
	document.getElementById("oldSiteID").style.pointerEvents = "none";
	document.getElementById("oldSiteID").style.opacity = "0";
}

function buttonUnClicked() {
	document.getElementById("aboutMePageID").className = "aboutMePage";
	document.getElementById("assignmentsPageID").className = "assignmentsPage";
	document.getElementById("aboutMeID").style.pointerEvents = "auto";
	document.getElementById("aboutMeID").style.opacity = "1";
	document.getElementById("assignmentsID").style.pointerEvents = "auto";
	document.getElementById("assignmentsID").style.opacity = "1";
	document.getElementById("oldSiteID").style.pointerEvents = "auto";
	document.getElementById("oldSiteID").style.opacity = "1";
}

function loginClose() {
    document.getElementById("loginSection").className = "closedLogin";
    document.getElementById("loginTxtID").innerHTML = "";
    document.getElementById("closeButton").style.opacity = "0";
    document.getElementById("closeButton").style.pointerEvents = "none";
    document.getElementById("openButton").style.opacity = "1";
    document.getElementById("openButton").style.pointerEvents = "auto";
}

function loginOpen() {
    document.getElementById("loginSection").className = "loginPane";
    document.getElementById("loginTxtID").innerHTML = "Login";
    document.getElementById("closeButton").style.opacity = "1";
    document.getElementById("closeButton").style.pointerEvents = "auto";
    document.getElementById("openButton").style.opacity = "0";
    document.getElementById("openButton").style.pointerEvents = "none";
}

window.onload = function () {
	document.getElementById("backID").addEventListener('click', buttonUnClicked);
	document.getElementById("aboutMeID").addEventListener('click', buttonClicked);
	document.getElementById("assignmentsID").addEventListener('click', assignmentsButtonClicked);
    document.getElementById("closeButton").addEventListener('click', loginClose);
    document.getElementById("openButton").addEventListener('click', loginOpen);
};
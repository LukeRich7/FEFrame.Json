let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("gitBio").innerHTML = this.responseText;
    }
};

gitHubRequest.open("GET", "https://api.github.com/users/LukeRich7", true);
gitHubRequest.send ();
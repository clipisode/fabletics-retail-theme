const urlParams = new URLSearchParams(window.location.search);
const thisTag = urlParams.get('tag');

window.onload = function() {
    document.getElementById("introHostName").innerHTML = "Fabletics &#8212; " + thisTag;
    document.getElementById("introTitle").innerText = "Oh, show me the way to the next whiskey bar.";
    document.getElementById("introHostName").style.display = "block";
    document.getElementById("introTitle").style.display = "block";
};

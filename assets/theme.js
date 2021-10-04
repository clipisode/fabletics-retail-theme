const urlParams = new URLSearchParams(window.location.search);
const thisTag = urlParams.get('tag');

window.onload = function() {
    // document.getElementById("introHostName").innerHTML = "Fabletics &#8212; " + thisTag;
    document.getElementById("introTitle").innerHTML = "<p>Send us a video review.<.p><p>Tell us what you love, what you don't love or ask us a question.</p>";
    // document.getElementById("introHostName").style.display = "block";
    document.getElementById("introTitle").style.display = "block";
};

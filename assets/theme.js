const urlParams = new URLSearchParams(window.location.search);
const thisTag = urlParams.get('tag');

window.onload = function() {
    document.getElementById("introHostName").innerHTML = "Fabletics &#8212; " + thisTag;
    document.getElementById("introTitle").innerText = "Send us a video! Tell us what you love, what you don't love or ask a question.";
    document.getElementById("introHostName").style.display = "block";
    document.getElementById("introTitle").style.display = "block";
};

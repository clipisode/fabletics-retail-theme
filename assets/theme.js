// const urlParams = new URLSearchParams(window.location.search);
// const thisTag = urlParams.get('tag');

const noVideoArea = document.getElementById("noVideoArea");

function addImg(arg) {
    var thisDiv = document.createElement('div');
    thisDiv.className = "img"+arg+" object-cover w-full h-full";
    noVideoArea.appendChild(thisDiv);
}

window.onload = function() {
    // document.getElementById("introHostName").innerHTML = "Fabletics &#8212; " + thisTag;
    document.getElementById("introTitle").innerHTML = "<p>Send us a video review.</p><p>Tell us what you love, what you don't love or ask us a question.</p>";
    // document.getElementById("introHostName").style.display = "block";
    document.getElementById("introTitle").style.display = "block";
    addImg(0); addImg(1); addImg(2); addImg(3); addImg(4);
};

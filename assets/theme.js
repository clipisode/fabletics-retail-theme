// const urlParams = new URLSearchParams(window.location.search);
// const thisTag = urlParams.get('tag');

function addImg(arg) {
    var noVideoArea = document.getElementById("noVideoArea");
    var thisDiv = document.createElement('div');
    thisDiv.className = "img"+arg+" object-cover w-full h-full absolute inset-0";
    thisDiv.id = "img"+arg;
    noVideoArea.appendChild(thisDiv);
}

window.onload = function() {
    // document.getElementById("introHostName").innerHTML = "Fabletics &#8212; " + thisTag;
    document.getElementById("introTitle").innerHTML = "<p>Send us a video review.</p><p>Tell us what you love, what you don't love or ask us a question.</p>";
    // document.getElementById("introHostName").style.display = "block";
    document.getElementById("introTitle").style.display = "block";
    addImg(4); addImg(3); addImg(2); addImg(1); addImg(0);
};

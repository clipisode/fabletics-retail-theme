// const urlParams = new URLSearchParams(window.location.search);
// const thisTag = urlParams.get('tag');

window.onload = function() {
    // document.getElementById("introHostName").innerHTML = "Fabletics &#8212; " + thisTag;
    document.getElementById("introTitle").innerHTML = "<p>Send us a video review.</p><p>Tell us what you love, what you don't love or ask us a question.</p>";
    // document.getElementById("introHostName").style.display = "block";
    document.getElementById("introTitle").style.display = "block";
    var noVideoArea = document.getElementById("noVideoArea");
    var img0 = document.createElement('div');
    img0.className = "img0 object-cover w-full h-full";
    noVideoArea.appendChild(img0);
    var img1 = document.createElement('div');
    img1.className = "img1 object-cover w-full h-full";
    noVideoArea.appendChild(img1);
    var img2 = document.createElement('div');
    img2.className = "img2 object-cover w-full h-full";
    noVideoArea.appendChild(img2);
};

// <img src="https://d22rmu8ky1z7ab.cloudfront.net/615a845fcb7a28d9e5e939e0/retail-002.png" class="object-cover w-full h-full">

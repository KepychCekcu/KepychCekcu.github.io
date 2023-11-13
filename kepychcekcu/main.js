function doSomething() {
  document.getElementById("myButton").innerHTML = myButton.style.display =
    "none";
  document.getElementById("myBlack").innerHTML = myBlack.style.display = "none";

  var video = document.createElement("video");
  video.src =
    "https://cdn.discordapp.com/attachments/952319310947311666/1092916798166417489/received_563132948960639.mp4";
  video.width = 720;
  /*video.height = 100;*/
  video.controls = false;
  video.loop;
  videoContainer.appendChild(video);
  video.play();
  var el = document.documentElement,
    rfs =
      el.requestFullScreen ||
      el.webkitRequestFullScreen ||
      el.mozRequestFullScreen;
  rfs.call(el);
}

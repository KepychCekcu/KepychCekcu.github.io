function doSomething() {
  document.getElementById("myButton").innerHTML = myButton.style.display =
    "none";
  document.getElementById("myBlack").innerHTML = myBlack.style.display = "none";

  var video = document.createElement("video");
  video.src =
    "https://cdn.discordapp.com/attachments/1093609246219833497/1173689300467064863/Boykisser_Chipi_Chipi_10_min_TFI0dNGEDug.mp4?ex=6564de57&is=65526957&hm=079765b30b1891e7f38174eb3f709295747a80af3e1a8fd15de8b6de1e8e34a6&";
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

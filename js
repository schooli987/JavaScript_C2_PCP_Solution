let color_flag = "black";

setInterval(() => {
  if (color_flag == "black") {
    document.body.style.backgroundColor = color_flag;
    color_flag = "white";
    document.getElementById("box").style.backgroundColor = color_flag;
  } else {
    document.body.style.backgroundColor = color_flag;
    color_flag = "black";
    document.getElementById("box").style.backgroundColor = color_flag;
  }
}, 1000);

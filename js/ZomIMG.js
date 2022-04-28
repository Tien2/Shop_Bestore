// JS IMG 1
var magnifying_area = document.getElementById("magnifying_area");
var magnifying_img = document.getElementById("magnifying_img");

magnifying_area.addEventListener("mousemove", function (event) {
  clientX = event.clientX - magnifying_area.offsetLeft;
  clientY = event.clientY - magnifying_area.offsetTop;

  var mWidth = magnifying_area.offsetWidth;
  var mHeight = magnifying_area.offsetHeight;
  clientX = (clientX / mWidth) * 70;
  clientY = (clientY / mHeight) * 70;
  magnifying_img.style.transform =
    "translate(-" + clientX + "%, -" + clientY + "%) scale(2)";
});

magnifying_area.addEventListener("mouseleave", function () {
  magnifying_img.style.transform = "translate(-50%,-50%) scale(1)";
});
// JS IMG 2
var magnifying_area_2 = document.getElementById("magnifying_area_2");
var magnifying_img_2 = document.getElementById("magnifying_img_2");

magnifying_area_2.addEventListener("mousemove", function (event) {
  clientX = event.clientX - magnifying_area_2.offsetLeft;
  clientY = event.clientY - magnifying_area_2.offsetTop;

  var mWidth = magnifying_area_2.offsetWidth;
  var mHeight = magnifying_area_2.offsetHeight;
  clientX = (clientX / mWidth) * 70;
  clientY = (clientY / mHeight) * 70;
  magnifying_img_2.style.transform =
    "translate(-" + clientX + "%, -" + clientY + "%) scale(2)";
});

magnifying_area_2.addEventListener("mouseleave", function () {
  magnifying_img_2.style.transform = "translate(-50%,-50%) scale(1)";
});
// JS IMG 3
var magnifying_area_3 = document.getElementById("magnifying_area_3");
var magnifying_img_3 = document.getElementById("magnifying_img_3");

magnifying_area_3.addEventListener("mousemove", function (event) {
  clientX = event.clientX - magnifying_area_3.offsetLeft;
  clientY = event.clientY - magnifying_area_3.offsetTop;

  var mWidth = magnifying_area_3.offsetWidth;
  var mHeight = magnifying_area_3.offsetHeight;
  clientX = (clientX / mWidth) * 70;
  clientY = (clientY / mHeight) * 70;
  magnifying_img_3.style.transform =
    "translate(-" + clientX + "%, -" + clientY + "%) scale(2)";
});

magnifying_area_3.addEventListener("mouseleave", function () {
  magnifying_img_3.style.transform = "translate(-50%,-50%) scale(1)";
});
// JS IMG 4
var magnifying_are_4 = document.getElementById("magnifying_area_4");
var magnifying_img_4 = document.getElementById("magnifying_img_4");

magnifying_are_4.addEventListener("mousemove", function (event) {
  clientX = event.clientX - magnifying_are_4.offsetLeft;
  clientY = event.clientY - magnifying_are_4.offsetTop;

  var mWidth = magnifying_are_4.offsetWidth;
  var mHeight = magnifying_are_4.offsetHeight;
  clientX = (clientX / mWidth) * 70;
  clientY = (clientY / mHeight) * 70;
  magnifying_img_4.style.transform =
    "translate(-" + clientX + "%, -" + clientY + "%) scale(2)";
});

magnifying_are_4.addEventListener("mouseleave", function () {
  magnifying_img_4.style.transform = "translate(-50%,-50%) scale(1)";
});

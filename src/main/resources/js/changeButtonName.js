//This is how you get an element with CSS selector, do some js to change text
AJS.toInit(function () {
  AJS.$("#create_link").css("background-color", "gray");
  AJS.$("#create_link").text("Degistirildi");
  console.info("changeButtonName.js Running");
});

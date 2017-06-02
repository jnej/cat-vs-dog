$(document).ready(function()  {
  $("button#cat").click(function()  {
    $("ul.cat").prepend("<li>MEOW!</li>");
    $("ul.dog").prepend("<li>woof, woof, woof!</li>");
  });
  $("button#dog").click(function()  {
    $("ul.dog").prepend("<li>WOOF!</li>");
    $("ul.cat").prepend("<li>meow,meow,meow!</li>");
  });
});

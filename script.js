motd = "";
footer = "";
title = " · Brodys Music";

// Title of Page
document.title = page + title;
navbar = "<div id='left'>" +
"<a href='index.html'><h1>Brodys Music</h1></a> / "+
"<a href='#'><h2>" + page + "</h2></a></div> <div id='right'>" +
"<ul>"+
"<li><a href='index.html'>Home</a></li>"+
"<li><a href='artists.html'>Artists</a></li>"+
"<li><a href='albums.html'>Albums</a></li>"+
"<li><a href='extras.html'>Extras</a></li>"+
"</ul></div><br><br><br>" + motd
document.getElementById("nav").innerHTML = navbar; 

document.getElementById("content").innerHTML += "<footer>" + footer + "</footer>";
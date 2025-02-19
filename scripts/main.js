var header;
var sticky;

function highlightMenu() {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  var hrefs = document.getElementsByClassName ("menu-href");
  var i;
  for (i = 0; i < hrefs.length; i++) {
    var href = hrefs[i];
    var hrefS = hrefs[i].toString();
    var menuPage = hrefS.split("/").pop();
    if (menuPage == page) {
       href.classList.add ("highlighted-menu");
    }
    else {
       href.classList.remove ("highlighted-menu");
    }
  }
}

function afterLoaded() {
  highlightMenu();
  header = document.getElementById("myHeader");
  sticky = header.offsetTop;

}

window.onscroll = function() { toggleSticky() };

function toggleSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function closeAllMenus() {
  var dropdowns = document.getElementsByClassName ("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains ('dropdown-show')) {
      openDropdown.classList.remove ('dropdown-show');
    }
  }
}

function onClickAbout() {
  closeAllMenus();
  document.getElementById("dropdownAbout").classList.toggle("dropdown-show");
}

function onClickVolunteerEnquiry() {
  closeAllMenus();
  document.getElementById("dropdownVolunteerEnquiry").classList.toggle("dropdown-show");
}

function onClickClientEnquiry() {
  closeAllMenus();
  document.getElementById("dropdownClientEnquiry").classList.toggle("dropdown-show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
	closeAllMenus();
  }
} 


var sideMenu = document.getElementById("sidemenu");

function openMenu() {
    sideMenu.style.right = "100px";
}

function closeMenu() {

    sideMenu.style.right = "-200px";
}


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for (tablink of tablinks ){
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents ){
        tabcontent.classList.remove("active-tab");
    }
     
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var projectlink = document.getElementsByClassName("project-filter");
var projectdetail = document.getElementsByClassName("project-details");

function openlink(projectname){
    for (project of projectlink){
        project.classList.remove("active-project");

    }
    for (detail of projectdetail){
        detail.classList.remove("active-detail");

    }

    event.currentTarget.classList.add("active-project");
    document.getElementById(projectname).classList.add("active-detail");

}


function addButtonClickListener(id, url, name)
{
      document.getElementById(id).addEventListener('click', function() {
          window.open(url, name, "height=700px,width=500px");
      });
}

  addButtonClickListener("Weather", "Wreport.html", "Weather");
  addButtonClickListener("Music", "Music.html", "Music");
  addButtonClickListener("Iot", "https://docs.google.com/document/d/1dMuruZwHeGPA6atTqqaHJ09GGGcm80L8Qdo1DFdl_js/edit?usp=sharing3", "IoT");
  addButtonClickListener("Graphic" , "https://www.figma.com/file/B8CYW3DXx1oVP9gUXyvrOa/Untitled?type=design&node-id=0%3A1&mode=design&t=Yd7SsOfLNByXlWSK-11" , "UI");
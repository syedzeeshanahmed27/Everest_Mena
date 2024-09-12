var service_scrolled = false;
var blog_scrolled = false;
var insights_scrolled = false;
window.addEventListener("scroll", function() {
    service_section = document.getElementById("id_service");
    var y = window.scrollY;
    if(!service_scrolled){
        if (y >= 300) {
            service_section.className = "services show";
            service_scrolled = true;
        } else {
            service_section.className = "services hide";
        }
    }
})

window.addEventListener("scroll", function() {
    blog_section = document.getElementById("id_blog");
    var y = window.scrollY;
    if(!blog_scrolled){
        if (y >= 600) {
            blog_section.className = "blog show";
            blog_scrolled = true;
        } else {
            blog_section.className = "blog hide";
        }
    }
    
})

window.addEventListener("scroll", function() {
    insights_section = document.getElementById("id_insights");
    var y = window.scrollY;
    if(!insights_scrolled){
        if (y >= 1200) {
            insights_section.className = "insights show";
            insights_scrolled = true;
        } else {
            insights_section.className = "insights hide";
        }
    }
})


window.addEventListener("scroll",function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky",window.scrollY>0)
})
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
} else {
    document.querySelector("nav").style.top = "-70px";
}
prevScrollpos = currentScrollPos;
}

function togglesidebar(){
    const sidebar = document.querySelector('.sidebar').classList.toggle('closed');
}

function choose_language(option){
    if(option == 1){
        document.getElementById("google_translate_element").style.right = "40px";
        document.querySelector('.language_selector').style.right = "-200px";
    }
    else{
        document.getElementById("google_translate_element").style.right = "40px";
        document.getElementById("google_translate_element").style.top = "20px";
    }
    
}

function close_language(option){
    if(option == 1){
        document.getElementById("google_translate_element").style.right = "-400px";
        document.querySelector('.language_selector').style.right = "40px";
    }
    else{
        document.getElementById("google_translate_element").style.right = "-400px";
        document.querySelector('.sidebar .logos .language_selector').style.left = "0px";
    }
    
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}



    (function(){
        emailjs.init("wordpressdeveloper.supersoft@gmail.com"); // Replace with your EmailJS user ID
    })();

    function sendEmail(event) {
        event.preventDefault(); // Prevent the default form submission

        const form = document.getElementById('rfpForm');
        const formData = new FormData(form);
        console.log("formData",formData)

        emailjs.sendForm('service_y89yn1f', 'template_20rmzcj', formData)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                alert('Your request has been sent successfully!');
            }, (error) => {
                console.error('Error sending email:', error);
                alert('An error occurred while sending your request. Please try again.');
            });
    }



  function Navbar(){
    var nav = `<nav>
    <div class="wrapper">
        <div class="logos">
            <a href="https://econsultingfirm.com/"><img src="https://econsultingfirm.com/assets/Logo_1.png" alt="" class="logo1"></a>
        </div>
        <ul class="navlinks">
            <li><a href="https://econsultingfirm.com/" class="home">Home</a></li>
            <li>
                <div class="dropdown_navlink">
                    <button class="services_btn">
                        <span>Services</span><img src="https://econsultingfirm.com/assets/down_icon.png" alt="" class="downicon">
                    </button>
                        <ul class="dropdown">
                            <li class="dropdown_leftside">
                                <div class="left_content">
                                    <span class="dropdown_heading">Services</span>
                                    <span class="dropdown_description">EC helps clients create long-term value for all 
                                        stakeholders. Enabled by data
                                         and technology, our services
                                         and solutions provide trust 
                                        through assurance and help
                                         clients transform, grow and
                                         operate.</span>
                                         <a href="https://econsultingfirm.com/#id_service" class="explore_btn">Explore</a>
                                </div>
                            </li>
                            <li class="dropdown_center">
                                <ul class="center_content">
                                    <li class="dropdown_services_list">
                                        <a href="https://econsultingfirm.com/services/accounting" class="services_link">
                                            <div class="service_shape"></div>
                                            <div class="dropdown_service">
                                                <span class="title">Accounting</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="dropdown_services_list">
                                        <a href="https://econsultingfirm.com/services/tax" class="services_link">
                                            <div class="service_shape"></div>
                                            <div class="dropdown_service">
                                                <span class="title">Tax</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="dropdown_services_list">
                                        <a href="https://econsultingfirm.com/services/consulting" class="services_link">
                                            <div class="service_shape"></div>
                                            <div class="dropdown_service">
                                                <span class="title">Consulting</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="dropdown_services_list">
                                        <a href="https://econsultingfirm.com/services/managed-services" class="services_link">
                                            <div class="service_shape"></div>
                                            <div class="dropdown_service">
                                                <span class="title">Managed Services</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown_rightside">
                                <div class="right_content">
                                    <span class="dropdown_heading">Highlights</span>
                                    <div class="right_list">    
                                        <a href="https://econsultingfirm.com/services/consulting" class="right_list_item">Cybersecurity</a>
                                        <a href="https://econsultingfirm.com/services/consulting" class="right_list_item">Resilience</a>
                                        <a href="https://econsultingfirm.com/services/consulting" class="right_list_item">Digital Transformation</a>
                                        <a href="https://econsultingfirm.com/services/accounting" class="right_list_item">Accounting And Assurance</a>
                                        <a href="https://econsultingfirm.com/services/tax" class="right_list_item">Tax Management</a>
                                        <a href="https://econsultingfirm.com/services/managed-services" class="right_list_item">Trusted Alliances</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                </div>
                
            </li>
            <li><a href="https://econsultingfirm.com/insights" class="insights">Insights</a></li>
            <li><a href="https://econsultingfirm.com/industries" class="Industries">Industries</a></li>
            <li><a href="https://econsultingfirm.com/about" class="about">About</a></li>
            <li><a href="https://econsultingfirm.com/careers" class="careers">Careers</a></li>
            <li><a href="https://econsultingfirm.com/rfp-form" class="rfp_from">Submit RFP</a></li>
        </ul>
        <div class="language_selector" onclick="choose_language(1)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1294_6255)">
        <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_1294_6255">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        <span class="text">Language</span>
        </div>
        <div id="google_translate_element" onmouseleave="close_language(1)"></div>
        <div class="sidebar_menu" onclick="togglesidebar()">
            <a href="javascript:void(0)" class="sidebar_btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="white"/>
                </svg>
                </a>
        </div>
    </div>
    <div class="sidebar closed">
        <div class="logos">
            <div class="language_selector" onclick="choose_language(2)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1294_6255)">
                <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_1294_6255">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <span class="text">Language</span>
            </div>
            <a href="javascript:void(0)" class="closesidebar" onclick="togglesidebar()"><svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40" fill="white"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
        </div>
        <ul class="navlinks">
            <li><a href="https://econsultingfirm.com/" class="home">Home</a></li>
            <li>
                <div class="dropdown_navlink">
                    <button class="services_btn">
                        <span>Services</span><img src="https://econsultingfirm.com/assets/down_icon.png" alt="" class="downicon">
                    </button>
                        <ul class="dropdown">
                            <li class="dropdown_top">
                                <div class="top_content">
                                    <span class="dropdown_description">EC helps clients create long-term value for all 
                                        stakeholders. Enabled by data
                                         and technology, our services
                                         and solutions provide trust 
                                        through assurance and help
                                         clients transform, grow and
                                         operate.</span>
                                         <a href="https://econsultingfirm.com/#id_service" class="explore_btn">Explore</a>
                                </div>
                            </li>
                            <li class="dropdown_center">
                                <ul class="center_content">
                                    <li class="dropdown_services_list">
                                        <a href="https://econsultingfirm.com/services/accounting" class="services_link">
                                            <div class="service_shape"></div>
                                            <div class="dropdown_service">
                                                <span class="title">Accounting</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="dropdown_services_list">
                                        <a href="https://econsultingfirm.com/services/tax" class="services_link">
                                            <div class="service_shape"></div>
                                            <div class="dropdown_service">
                                                <span class="title">Tax</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="dropdown_services_list">
                                        <a href="https://econsultingfirm.com/services/consulting" class="services_link">
                                            <div class="service_shape"></div>
                                            <div class="dropdown_service">
                                                <span class="title">Consulting</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="dropdown_services_list">
                                        <a href="https://econsultingfirm.com/services/managed-services" class="services_link">
                                            <div class="service_shape"></div>
                                            <div class="dropdown_service">
                                                <span class="title">Managed Services</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown_bottomside">
                                <div class="bottom_content">
                                    <span class="dropdown_heading">Highlights</span>
                                    <div class="bottom_list">    
                                        <a href="https://econsultingfirm.com/services/consulting" class="right_list_item">Cybersecurity</a>
                                        <a href="https://econsultingfirm.com/services/consulting" class="right_list_item">Resilience</a>
                                        <a href="https://econsultingfirm.com/services/consulting" class="right_list_item">Digital Transformation</a>
                                        <a href="https://econsultingfirm.com/services/accounting" class="right_list_item">Accounting And Assurance</a>
                                        <a href="https://econsultingfirm.com/services/tax" class="right_list_item">Tax Management</a>
                                        <a href="https://econsultingfirm.com/services/managed-services" class="right_list_item">Trusted Alliances</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                </div>
                
            </li>
            <li><a href="https://econsultingfirm.com/insights" class="insights">Insights</a></li>
            <li><a href="https://econsultingfirm.com/industries" class="Industries">Industries</a></li>
            <li><a href="https://econsultingfirm.com/about" class="about">About</a></li>
            <li><a href="https://econsultingfirm.com/careers" class="careers">Careers</a></li>
            <li><a href="https://econsultingfirm.com/rfp-form" class="rfp_from">Submit RFP</a></li>
        </ul>
        
    </div>
  </nav>`
    document.write(nav)
  }

  function Footer(){
    var foot = `<footer>
    <ul class="headings">
        <li class="heading">
            <span class="title">Main</span>
            <ul class="links">
                <li class="link_text">
                    <a href="https://econsultingfirm.com">Home</a>
                </li>
                <li class="link_text">
                    <a href="https://econsultingfirm.com/rfp-form">Submit RFP</a>
                </li>
                <li class="link_text">
                    <a href="https://econsultingfirm.com/contact-us">Contact Us</a>
                </li>
            </ul>
        </li>
        <li class="heading">
            <span class="title">Everest</span>
            <ul class="links">
                <li class="link_text">
                    <a href="https://econsultingfirm.com/about">About Everest</a>
                </li>
                <li class="link_text">
                    <a href="https://econsultingfirm.com/insights">Everest Insights</a>
                </li>
                <li class="link_text">
                    <a href="https://econsultingfirm.com/industries">Everest Industries</a>
                </li>
                <li class="link_text">
                    <a href="https://econsultingfirm.com/office-locator">Office Locator</a>
                </li>
            </ul>
        </li>
        <li class="heading">
            <span class="title">Services</span>
            <ul class="links">
                <li class="link_text">
                    <a href="https://econsultingfirm.com/services/accounting">Accounting</a>
                </li>
                <li class="link_text">
                    <a href="https://econsultingfirm.com/services/tax">Tax</a>
                </li>
                <li class="link_text">
                    <a href="https://econsultingfirm.com/services/consulting">Consulting</a>
                </li>
                <li class="link_text">
                    <a href="https://econsultingfirm.com/services/managed-services">Managed Services</a>
                </li>
            </ul>
        </li>
        <li class="heading">
            <span class="title">Careers</span>
            <ul class="links">
                <li class="link_text">
                    <a href="https://econsultingfirm.com/careers">Careers</a>
                </li>
                <li class="link_text">
                    <a href="https://econsultingfirm.com/careers">Job Search</a>
                </li>
            </ul>
        </li>
        <li class="heading">
            <span class="title">Socials</span>
            <ul class="links">
                <li class="link_text">
                    <a href="https://www.linkedin.com/company/everest-consulting-global/" target="_blank"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="20" height="20" rx="10" fill="white"/>
                        <path d="M7.5002 5.19995C7.5002 4.39995 6.8002 3.69995 5.8002 3.69995C4.8002 3.69995 4.2002 4.29995 4.2002 5.19995C4.2002 6.09995 4.9002 6.69995 5.9002 6.69995C6.8002 6.69995 7.5002 5.99995 7.5002 5.19995Z" fill="#222222"/>
                        <path d="M7.2002 8H4.7002V15H7.2002V8Z" fill="#222222"/>
                        <path d="M16.2002 11.2C16.2002 8.9 15.0002 7.5 13.4002 7.5C12.4002 7.5 11.6002 8.2 11.4002 9L11.2002 8H8.7002C8.7002 8.3 8.7002 9.7 8.7002 9.7V15H11.2002V11.2C11.2002 10.2 11.7002 9.5 12.4002 9.5C13.2002 9.5 13.7002 9.8 13.7002 11.2V14.9H16.2002V11.2Z" fill="#222222"/>
                        </svg>
                        LinkedIn</a>
                </li>
                <li class="link_text">
                    <a href="#" target="_blank"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5802 17.3334L11.7169 8.78542L11.7269 8.79341L17.0136 2.66675H15.2469L10.9402 7.65341L7.52025 2.66675H2.88691L8.36091 10.6474L8.36025 10.6467L2.58691 17.3334H4.35358L9.14158 11.7854L12.9469 17.3334H17.5802ZM6.82025 4.00008L15.0469 16.0001H13.6469L5.41358 4.00008H6.82025Z" fill="white"/>
                        </svg>
                        Twitter</a>
                </li>
                <li class="link_text">
                    <a href="https://wa.me/15878968445" target="_blank"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2C5.582 2 2 5.582 2 10C2 11.5008 2.42156 12.9 3.14063 14.1003L2.07161 18L6.05469 16.9544C7.21957 17.6167 8.56433 18 10 18C14.418 18 18 14.418 18 10C18 5.582 14.418 2 10 2ZM7.26172 6.26823C7.39172 6.26823 7.52529 6.26744 7.64063 6.27344C7.78329 6.27677 7.93857 6.28722 8.08724 6.61589C8.26391 7.00655 8.64858 7.9866 8.69792 8.08594C8.74725 8.18527 8.78221 8.30229 8.71354 8.43229C8.64821 8.56563 8.61423 8.64632 8.51823 8.76432C8.4189 8.87899 8.31005 9.02141 8.22005 9.10807C8.12072 9.20741 8.01815 9.31632 8.13281 9.51432C8.24748 9.71232 8.64571 10.3614 9.23437 10.8854C9.99104 11.5614 10.6295 11.7692 10.8281 11.8685C11.0268 11.9678 11.1418 11.9523 11.2565 11.819C11.3745 11.689 11.7521 11.2429 11.8854 11.0443C12.0154 10.8456 12.1481 10.88 12.3281 10.9453C12.5108 11.0106 13.4849 11.4905 13.6836 11.5898C13.8823 11.6892 14.0125 11.7383 14.0625 11.819C14.1138 11.9023 14.1139 12.2991 13.9492 12.7617C13.7846 13.2237 12.9759 13.6705 12.6133 13.7018C12.2473 13.7358 11.9057 13.8663 10.2344 13.2083C8.21838 12.4143 6.94699 10.3495 6.84766 10.2161C6.74832 10.0861 6.04036 9.1426 6.04036 8.16927C6.04036 7.1926 6.55244 6.71429 6.73177 6.51563C6.91444 6.31696 7.12839 6.26823 7.26172 6.26823Z" fill="white"/>
                        </svg>
                        WhatsApp</a>
                </li>
            </ul>
        </li>
    </ul>
    <div class="company_rights">
        <span class="copyright">© 2024 Everest Consulting. All rights reserved</span>
        <a href="https://ivsolutions.tech/" target="_blank" class="developers_link"><span class="developers">By IV Solutions</span></a>
    </div>
</footer>`
  document.write(foot);
  }

  

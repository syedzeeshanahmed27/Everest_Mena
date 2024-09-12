function change_to_technology_consulting(){
    var consulting_services = ["Cyber Program Strategy", "Cyber Governance", "Cyber Regulatory Assessment",
    "Cyber Awareness Training", "Cyber Resilience", "IT Disaster Recovery",
    "SIEM Implementation", "SIEM Monitoring", "Compromise Assessment",
    "Cyber Wargaming", "Net. Architecture Review", "NIST CSF and ISO 27001",
    "Vulnerability Assessment and Penetration Testing Assessment", "Source Code Review", "Data Gov. & Data Ethics",
    "Data Privacy Assessment", "High Value Asset Protection", "Digital Fraud Management",
    "Data Privacy and Protection Awareness", "Data Privacy and Protection Compliance",
    "IT & IS Risk Management", "IT & IS Risk Assessment", "Third Party Risk Management",
    "SAP-Oracle Pre & Post Implementation Sec. Review", "IT Asset Management", "Software Asset Management",
    "Cloud Strategy and Governance", "Cloud Adoption Risk Assess", "Cyber Risk Assessment",
    "CSP Selection Assessment", "OT Security Governance", "OT Asset Management",
    "OT Assessment", "Physical Security", "Application Security Assessment",
    "Cyber Managed Services"];
    
    for(var x=1; x<=36 ;x++){
        document.getElementById("id_item"+x).style.display="list-item";
        document.getElementById("id_item"+x).innerHTML = consulting_services[x-1];
    } 
    document.getElementById("id_active_tab1").style.marginTop="0%" ;
    document.getElementById("id_active_tab2").style.marginTop="20px" ;
    document.getElementById("id_active_tab3").style.marginTop="20px" ;
    document.getElementById("id_heading_main").innerHTML="The effectiveness of technology is directly linked to its utilization. We are prepared to assist in converting your most complex business issues into opportunities that are primed for the future. We offer human-centric and technology-enabled transformation to embed an advantage into every stratum of your business.";
}

function change_to_digital_transformation(){
    var digital_services = ["Mobile Application Development", "Mobile Application Functionality Review", "Mobile Application Pre-Post Go-Live Assessment",
    "Web Application Development", "Web Application Security Review", "QuickBooks Application Implementation",
    "Oracle Application Implementation", "Oracle Pre & Post Implementation Review", "SAP Pre & Post Implementation Review",
    "Dynamics 365 Pre & Post Implementation Review", "Secure Coding Training and Awareness", "Static and Dynamic Application Security Testing",
    "Digital Readiness Assessment and Penetration Testing Assessment", "Secure Software Development Life Cycle"];
    var y=0;
    for(var x=1; x<=36 ;x++){
        document.getElementById("id_item"+x).style.display="list-item";
        if((x<8 || x>19) && x<27){
            document.getElementById("id_item"+x).innerHTML = digital_services[y];
            y++;
        }
        else{
            document.getElementById("id_item"+x).style.display="none";
        }
    }   
    document.getElementById("id_active_tab1").style.marginTop="20px" ;
    document.getElementById("id_active_tab2").style.marginTop="0%" ;
    document.getElementById("id_active_tab3").style.marginTop="20px" ;    // document.getElementById("id_active_tab").style.width= document.getElementById("id_digital_transformation").offsetWidth +"px";   
    document.getElementById("id_heading_main").innerHTML="When companies transition to digital platforms, either by adopting innovative digital business models or by digitally transforming their operations, they encounter new or modified versions of existing risks. We employ our Risk framework to assist clients in comprehending, managing, and mitigating potential issues brought about by cutting-edge technologies. We protect our clients; interests from risk exposures in digital transformation projects, enabling them to concentrate on realizing their strategic digital goals securely.";
}

function change_to_business_consulting(){
    var digital_services = ["Internal Controls Review", "Asset Tagging", "Inventory Physical Counts",
    "Process Improvement Assessment", "Management Investment Assessment", "Feasibility Preparation",
    "Agreed Upon Procedures", "Regulatory Compliance Assessment", "Anti-Money Laundering Compliance",
    "Internal Audit", "Forensic Assessment", "IT Assurance - IT internal controls"];
    for(var x=1; x<=36 ;x++){
        document.getElementById("id_item"+x).style.display="list-item";
        if(x<12){
            document.getElementById("id_item"+x).innerHTML = digital_services[x-1];
        }
        else{
            document.getElementById("id_item"+x).style.display="none";
        }
    }   
    document.getElementById("id_active_tab1").style.marginTop="20px" ;
    document.getElementById("id_active_tab2").style.marginTop="20px" ;
    document.getElementById("id_active_tab3").style.marginTop="0%" ;
    document.getElementById("id_heading_main").innerHTML="Organizations recognize that risk can be a competitive edge. By handling risk in a more efficient manner, organizations are able to tap into their utmost capabilities, thereby generating and safeguarding value for all associated parties.";
}
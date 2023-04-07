document.getElementById("btn").onclick = function() {
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let emplid = document.getElementById("emplid").value;
    let gender = document.getElementById("genderm").checked;
    let dob = document.getElementById("dob").value;
    let phone = document.getElementById("phone").value;
    let apartment = document.getElementById("apartment").value;
    let street = document.getElementById("street").value;
    let township = document.getElementById("township").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let postcode = document.getElementById("postcode").value;
    let major = document.getElementById("major").value;
    let academicyear = document.getElementById("year23").checked;
    let semester = document.getElementById("semfall").checked;
    let emername = document.getElementById("emername").value;
    let emerrel = document.getElementById("emerrel").value;
    let emeremail = document.getElementById("emeremail").value;
    let emerphone = document.getElementById("emerphone").value;


    let obj = {
        name, email, emplid, gender, dob, phone, street, township, city, postcode, major, academicyear, semester, emername, emeremail, emerrel, emerphone
    }

    let country = "Myanmar";
    let code = "+95";
    let namearr = name.split(" ");
    let firstname = namearr.slice(0, namearr.length - 1).join(" ");
    let lastname = namearr[namearr.length - 1];
    let male = gender ? "✓" : "";
    let female = gender ? "" : "✓";
    let address = apartment + ", " + street + ", " + township + ", " + city + ", " + country;
    phone = phone.split("").slice(1, phone.length).join("");
    emerphone = emerphone.split("").slice(1, emerphone.length).join("");
    let yr23 = academicyear ? "O" : "";
    let yr24 = academicyear ? "" : "O";
    let semfall = semester ? "✓" : "";
    let semspring = semester ? "" : "✓";
    let dateofbirth = dob.split("-");
    dob = dateofbirth[1] + "/" + dateofbirth[2] + "/" + dateofbirth[0];

    document.getElementById("box2").innerText = emplid;
    document.getElementById("box3").innerText = lastname;
    document.getElementById("box4").innerText = firstname;
    document.getElementById("box5").innerText = male;
    document.getElementById("box6").innerText = female;
    document.getElementById("box7").innerText = address;
    document.getElementById("box8").innerText = apartment;
    document.getElementById("box9").innerText = city;
    document.getElementById("box10").innerText = state;
    document.getElementById("box11").innerText = postcode;
    document.getElementById("box12").innerText = country;
    document.getElementById("box13").innerText = code;
    document.getElementById("box14").innerText = phone;
    document.getElementById("box15").innerText = email;
    document.getElementById("box16").innerText = dob;
    document.getElementById("box17").innerText = city + " / " + country;
    document.getElementById("box18").innerText = country;
    document.getElementById("box19").innerText = address;
    document.getElementById("box20").innerText = city;
    document.getElementById("box21").innerText = state + " / "+ country + " / " + postcode;
    document.getElementById("box22").innerText = code + phone;
    document.getElementById("box23").innerText = emername;
    document.getElementById("box24").innerText = emerrel;
    document.getElementById("box25").innerText = emeremail;
    document.getElementById("box26").innerText = code + emerphone;
    document.getElementById("box27").innerText = "✓";
    document.getElementById("box28").innerText = "N/A";
    document.getElementById("box29").innerText = "N/A";
    document.getElementById("box30").innerText = "N/A";
    document.getElementById("box31").innerText = "N/A";    
    document.getElementById("box32").innerText = "N/A";
    document.getElementById("box33").innerText = "✓";   
    document.getElementById("box34").innerText = "N/A";
    document.getElementById("box35").innerText = "N/A";    
    document.getElementById("box36").innerText = "N/A";
    document.getElementById("box37").innerText = "N/A";    
    document.getElementById("box38").innerText = "N/A";
    document.getElementById("box39").innerText = "N/A";    
    document.getElementById("box40").innerText = "N/A";
    document.getElementById("box41").innerText = "N/A";    
    document.getElementById("box42").innerText = "N/A";
    document.getElementById("box43").innerText = "N/A";    
    document.getElementById("box44").innerText = "N/A";
    document.getElementById("box45").innerText = "N/A";    
    document.getElementById("box46").innerText = "N/A";
    document.getElementById("box47").innerText = major;    
    document.getElementById("box48").innerText = yr23;
    document.getElementById("box49").innerText = yr24;    
    document.getElementById("box50").innerText = semfall;
    document.getElementById("box51").innerText = semspring;    
    document.getElementById("box52").innerText = "✓";

    document.querySelector(".form").style.display = "none";
    document.querySelector(".preview").style.display = "block";
}


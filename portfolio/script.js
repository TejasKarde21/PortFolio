var tablinks = document.getElementsByClassName("tab-links");

var tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
 
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}


var sidmenu = document.getElementById("sidemenu");

function openmenu(){
    sidmenu.style.right= "0";
}

function closemenu(){
    sidmenu.style.right= "-800px";
}



  const scriptURL = 'https://script.google.com/macros/s/AKfycbyMQIvU4INV7u4J5xaTi-EMysL32YQO2Pic88dFM5PB75GrWlMl8sODsuqxMxFRWJ3B/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })

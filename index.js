function todaysDate(){
    let dd = document.getElementById('day');
    let tarik = document.getElementById('date')
    let mm = document.getElementById('month');
    let yy = document.getElementById('year');
    
    const date = new Date();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thusrday","Friday","Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let todaysDate = days[date.getDay()];
    let todaysMonth = months[date.getMonth()];
    let year = date.getFullYear();
    let ajjkiTarik = date.getDate();
    
    dd.innerHTML = todaysDate;
    mm.innerHTML = todaysMonth;
    yy.innerHTML = year;
    tarik.innerHTML = ajjkiTarik;
}
todaysDate();
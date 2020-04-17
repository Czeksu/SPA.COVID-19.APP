var totalConfimed = 0;
var totalDeaths = 0;
var totalRecovered = 0;
var newRecovered = 0;
var newDeaths = 0;
var newConfirmed = 0;
var request = new XMLHttpRequest();
request.onreadystatechange = function () {
if (this.readyState==4 && this.status==200){
let json = JSON.parse(this.responseText);
for(let i=1;i < json.Countries.length; i++){
    totalConfimed += json.Countries[i].TotalConfirmed;
    totalDeaths += json.Countries[i].TotalDeaths;
    totalRecovered += json.Countries[i].TotalRecovered;
    newConfirmed += json.Countries[i].NewConfirmed;
    newDeaths += json.Countries[i].NewDeaths;
    newRecovered += json.Countries[i].NewRecovered;
    document.getElementById("totalConfimed").innerHTML =  "<h1>Zakażonych łącznie: </h1><br><p class='totalData'>" + totalConfimed + "</p>";
    document.getElementById("totalDeaths").innerHTML =  "<h1>Zgony: </h1><br><p class='totalData'>" + totalDeaths + "</p>";
    document.getElementById("totalRecovered").innerHTML =  "<h1>Wyzdrowiałych łącznie: </h1><br><p class='totalData'>" + totalRecovered + "</p>";
    document.getElementById("newConfirmed").innerHTML =  "<h1>Nowych zakażonych: </h1><br><p class='totalData'>" + newConfirmed + "</p>";
    document.getElementById("newDeaths").innerHTML =  "<h1>Nowe zgony: </h1><br><p class='totalData'>" + newDeaths + "</p>";
    document.getElementById("newRecovered").innerHTML =  "<h1>Nowych wyzdrowień: </h1><br><p class='totalData'>" + newRecovered + "</p>";
}
}
};
request.open('GET', 'https://api.covid19api.com/summary',true);
request.send();
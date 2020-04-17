var app = new Vue({
  el: '#app',
  data: {
    countries: []
    },
      mounted () {
          fetch("https://api.covid19api.com/summary")
          .then(response => response.json())
          .then((data) =>{
              this.countries = data;
          })
    },
template:`
<div>
    <h1>Covid-19 APP</h1><br>
    <table id="tab" class="table table-dark">
        <thead align="center">
            <th scope="col">Kraj</th>
            <th scope="col">Łącznie zakażeń</th>
            <th scope="col">Nowe zakażenia</th>
            <th scope="col">Łącznie zgonów</th>
            <th scope="col">Nowe zgony</th>
            <th scope="col">Łącznie wyzdrowień</th>
            <th scope="col">Nowe wyzdrowienia</th>
        </thead>
        <tbody align="center">
        <tr style="border: 1px solid black;" v-for="(country, index in countries.Countries">
            <td>{{countries.Countries[index].Country}}</td>
            <td>{{countries.Countries[index].TotalConfirmed}}</td>
            <td>{{countries.Countries[index].NewConfirmed}}</td>
            <td>{{countries.Countries[index].TotalDeaths}}</td>
            <td>{{countries.Countries[index].NewDeaths}}</td>
            <td>{{countries.Countries[index].TotalRecovered}}</td>
            <td>{{countries.Countries[index].NewRecovered}}</td>
        </tr>
        </tbody>
</div>
`,
});
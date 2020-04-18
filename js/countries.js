var app = new Vue({
  el: '#app',
  data: {
    countries: []
    },
    methods: {
 
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
        <button onclick="getTable()">Kliknij zeby działały ładne tabelki</button>
        <table id="tab" class="display">
            <thead>
                <tr>
                    <th>Kraj</th>
                    <th>Łącznie zakażeń</th>
                    <th>Nowe zakażenia</th>
                    <th>Łącznie zgonów</th>
                    <th>Nowe zgony</th>
                    <th>Łącznie wyzdrowień</th>
                    <th>Nowe wyzdrowienia</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(country, index in countries.Countries">
                    <td>{{countries.Countries[index].Country}}</td>
                    <td>{{countries.Countries[index].TotalConfirmed}}</td>
                    <td>{{countries.Countries[index].NewConfirmed}}</td>
                    <td>{{countries.Countries[index].TotalDeaths}}</td>
                    <td>{{countries.Countries[index].NewDeaths}}</td>
                    <td>{{countries.Countries[index].TotalRecovered}}</td>
                    <td>{{countries.Countries[index].NewRecovered}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `,
    });
//funkcja która wstawia tabelkę z DataTables
function getTable(){
    $(document).ready(function(){
        $('#tab').DataTable({
            "order": [[ 1, "desc" ]],
        });
    });
}
var table = new Vue({
  el: '#table',
  data: {
    countries: []
    },
    methods: {
       
    },
    created () {
        fetch("https://api.covid19api.com/summary")
        .then(response => response.json())
        .then((data) =>{
            this.countries = data;
        })
    },
    updated () {
        $(document).ready(function(){
            $('#tab').DataTable({
                "order": [[ 1, "desc" ]],
                "scrollX": true
            });
        });
    },
    template:`
    <div>
        <div class="row">
            <div class="col-md-6">
                <h4 class="dataText">Łącznie zakażeń:</h4>
                <p class="data">{{countries.Global.TotalConfirmed}}</p>
                <h4 class="dataText">Łącznie zgonów:</h4>
                <p class="data">{{countries.Global.TotalDeaths}}</p>
                <h4 class="dataText">Łącznie wyzdrowień:</h4>
                <p class="data">{{countries.Global.TotalRecovered}}</p>
            </div>
            <div class="col-md-6">
                <h4 class="dataText">Nowe zakażenia:</h4>
                <p class="data">{{countries.Global.NewConfirmed}}</p>
                <h4 class="dataText">Nowe zgony:</h4>
                <p class="data">{{countries.Global.NewDeaths}}</p>
                <h4 class="dataText">Nowe wyzdrowienia:</h4>
                <p class="data">{{countries.Global.NewRecovered}}</p>
            </div>
        </div>
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
        <p></p>
    </div>
    `,
    });


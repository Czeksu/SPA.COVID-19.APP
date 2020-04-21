var country = "Poland";

var table = new Vue({
    el: '#countries',
    data: {
        countries: []
        },
        methods: {
        
        },
        created () {
            fetch("https://api.covid19api.com/country/" + country)
            .then(response => response.json())
            .then((data) =>{
                this.countries = data;
            })
        },
        updated () {
            $(document).ready(function(){
                $('#countries').DataTable({
                    "order": [[ 0, "desc" ]],
                    "responsive": true
                });
            });
        },
        template:`
        <div>
        <h1>{{countries[1].Country}}</h1>
        <table id="countries" class="display">
        <thead>
            <tr>
                <th>Data</th>
                <th>Łącznie zakażeń</th>
                <th>Łącznie zgonów</th>
                <th>Łącznie wyzdrowień</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(country, index in countries">
                <td>{{countries[index].Date}}</td>
                <td>{{countries[index].Confirmed}}</td>
                <td>{{countries[index].Deaths}}</td>
                <td>{{countries[index].Recovered}}</td>
            </tr>
        </tbody>
        </table>
        </div>
        `,
        });
  
  
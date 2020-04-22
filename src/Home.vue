<template>
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
</template>

<script>
export default {
  data () {
    return {
      countries: []
    };
  },
    created: function() {
      fetch("https://api.covid19api.com/summary")
      .then(response => response.json())
      .then((data) =>{
        this.countries = data;
      })
    }
  };
</script>

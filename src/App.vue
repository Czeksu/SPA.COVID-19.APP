<template>
  <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" to="/">COVID-19 APP</a>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                  <router-link to="/">Home</router-link>
                  <router-link to="/countries">Państwa</router-link>
                  <router-link to="/info">Informacje</router-link>
                  <router-link to="/authors">Authors</router-link>
              </div>
          </div>
      </nav>
      <router-view>
          
      </router-view>
  </div>
</template>

<script>

</script>

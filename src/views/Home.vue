<template>
  <div class="home">
      <pageHeader/>
  </div>
</template>

<script>
// @ is an alias to /src
import pageHeader from './About.vue'

export default {
  name: 'Home',
  components: {
    pageHeader
  }
}
</script>

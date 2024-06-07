<template>
  <div class="juegos">
    <h3>Lista de juegos</h3>
    <TablaStock/>
  </div>
</template>

<script>
import TablaStock from '@/components/TablaStock.vue'
export default {
  name:'JuegosView',
  components:{
    TablaStock
  },
  
}
</script>

<style lang="scss" scoped>

</style>

<template>
    <div class="tablaStock container">
        <table class="table table-striped-columns py-5">
            <thead>
                <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(juego, index) in listaJuegos" :key="index">
                    <th scope="row">{{ juego.codigo }}</th>
                    <td>{{ juego.nombre }}</td>
                    <td>{{ juego.stock }}</td>
                    <td>{{ juego.precio }}</td>
                    <td>
                        <div class="btn-toolbar d-flex justify-content-center" role="toolbar" aria-label="Toolbar with button groups">
                            <div class="btn-group me-2" role="group" aria-label="First group">
                                <button type="button" class="btn btn-primary" @click="sumarStock(juego.codigo)">+</button>
                                <button type="button" class="btn btn-primary" @click="restarStock(juego.codigo)">-</button>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    name: 'TablaStock',
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState(["listaJuegos"])
    },
    methods:{
        ...mapActions(["cargarJuegos"]),
        sumarStock(id){
            this.$store.dispatch('addStock', id)
        },
        restarStock(id){
            this.$store.dispatch('deleteStock', id)
        }

    
    },
    async created(){
        try {
            let respuesta = await this.cargarJuegos()
            if(respuesta){
                alert('Productos cargados correctamente')
            }else{
                this.error = 'No se pudo cargar el producto'
            }
        } catch (error) {
            console.log(error)
        }
    }
}
</script>

<style lang="sass" scoped>

</style>
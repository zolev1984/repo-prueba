<template>
    <div>
        <b-container>
            <b-row>
                <b-col cols="12" md="12">
                    <h1>My personal files</h1>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="12" md="12">
                    <UploadFile></UploadFile>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="12" md="12">
                    <InfoFilesTable :filesitems="filesinfo"></InfoFilesTable>
                </b-col>
            </b-row>

            <b-row>
                <b-button variant="danger" @click="getFilesInfo">Mostrar</b-button>
            </b-row>
        </b-container>
    </div>
  
</template>

<script>
import InfoFilesTable from '@/components/InfoFilesTable.vue'
import UploadFile from '@/components/UploadFile.vue'
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
    name: 'MyFiles',
    components: {
        InfoFilesTable,
        UploadFile
    },
    data(){
        return{

        }
    },
    computed: {
      ...mapState(['filesinfo'])
    },

    methods:{
        ...mapActions(['getFilesInfo'])
    },
/*
    created: {
        getFilesInfo
    }       */

}
</script>

<style scoped>
h1{
    text-align: center;
    margin-top: 3%;
}

</style>
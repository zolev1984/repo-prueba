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
                    <InfoFilesTable v-if="theinfo != null" :filesitems="theinfo"></InfoFilesTable>
                </b-col>
            </b-row>
        </b-container>
    </div>
  
</template>

<script>
import InfoFilesTable from '@/components/InfoFilesTable.vue'
import UploadFile from '@/components/UploadFile.vue'
import axios from 'axios'
import { init } from 'events'

export default {
    name: 'MyFiles',
    components: {
        InfoFilesTable,
        UploadFile
    },

    data () {
        return{
            theinfo: null
        }
    },
    
    mounted () {
        this.init()
    },

    methods: {
        init(){
            axios
                .get('https://api.dailymotion.com/videos?channel=news&limit=20')
                .then(response => (this.theinfo = response.data.list))
                .catch(error => {console.log(error)})
        }
    }



}
</script>

<style scoped>
h1{
    text-align: center;
    margin-top: 3%;
}

</style>
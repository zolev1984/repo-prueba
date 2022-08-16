<template>
  <div class="mt-5">
    <b-form-file v-model="file" ref="file-input" class="mb-2"></b-form-file>

    <b-button variant="danger" @click="sendFiles" class="mr-2">Upload</b-button>
    <b-button variant="danger" @click="file = null">Clear</b-button>

<!--    <p class="mt-2">Selected file: <b>{{ file ? file.name : '' }}</b></p>       -->
  </div>
</template>

<script>
  export default {
    name: 'UploadFile',  
    data() {
      return {
        file: null
      }
    },
    methods: {
      sendFiles() {
        this.$refs['file-input'].submit()
      }
    }
  }
</script>
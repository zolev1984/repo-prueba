<template>
  <div>
    <b-form inline>
<!--
      <label class="sr-only" for="inline-form-input-name">Name</label>
      <b-form-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Jane Doe"
      ></b-form-input>      -->

<!--      <label class="sr-only" for="inline-form-input-username">Username</label>    -->
      <div>
        <b-alert bg-variant="primary" show dismissible>
          You share correctly
        </b-alert>
      </div>
      <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input id="inline-form-input-username" placeholder="Username"></b-form-input>
      </b-input-group>

<!--
      <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>   -->

      <b-button variant="danger">Share</b-button>
    </b-form>
    
  </div>
</template>

<script>
  export default {
    name: 'ShareFile',
    data() {
      return {
        text: ''
      }
    }
  }
</script>
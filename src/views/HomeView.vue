<template>
  <hello-world />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import HelloWorld from '../components/HelloWorld.vue'

@Component({ components: { HelloWorld } })
export default class HomeView extends Vue {
}
</script>

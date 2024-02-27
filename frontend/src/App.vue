<template>
  <div id="app">
    <AddUser />
    <DisplayChargingOptions />
  </div>
</template>

<script>
import AddUser from './components/AddUser.vue';
import DisplayChargingOptions from './components/DisplayChargingOptions.vue';

export default {
  name: 'App',
  components: {
    AddUser,
    DisplayChargingOptions
  }
}
</script>

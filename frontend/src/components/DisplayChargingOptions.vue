<template>
    <div class="charging-options-section">
      <h2>Find Closest Charging Options</h2>
      <div class="input-group">
        <label for="latitude-options">Latitude:</label>
        <input id="latitude-options" v-model.number="latitude" placeholder="Latitude" type="number" />
      </div>
      <div class="input-group">
        <label for="longitude-options">Longitude:</label>
        <input id="longitude-options" v-model.number="longitude" placeholder="Longitude" type="number" />
      </div>
      <div class="input-group">
        <label for="amount">Amount:</label>
        <input id="amount" v-model.number="amount" placeholder="Amount" type="number" />
      </div>
      <button @click="getChargingOptions">Search</button>
      <table v-if="options.length > 0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Distance (km)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="option in options" :key="option.id">
            <td>{{ option.id }}</td>
            <td>{{ option.name }}</td>
            <td>{{ option.latitude }}</td>
            <td>{{ option.longitude }}</td>
            <td>{{ option.distance }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
import { ref } from 'vue';
import { useToast } from "vue-toastification";
import axios from 'axios';

export default {
  setup() {
    const latitude = ref(41);
    const longitude = ref(0);
    const amount = ref(2);
    const options = ref([]);
    const toast = useToast();

    const getChargingOptions = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/charge-finder/closest?latitude=${latitude.value}&longitude=${longitude.value}&amount=${amount.value}`);
        options.value = response.data;
      } catch (error) {
        console.error(error);
        toast.error('Error fetching charging options');
      }
    };

    return { latitude, longitude, amount, options, getChargingOptions };
  }
};
</script>
  
  <style scoped>
  .charging-options-section {
    margin-top: 2rem;
  }
  
  .input-group {
    margin-bottom: 1rem;
  }
  
  input, button {
    margin-top: 0.5rem;
    margin-right: 0.5rem;
  }
  
  table {
    margin-top: 1rem;
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #999;
    padding: 0.5rem;
    text-align: left;
  }
  </style>
  
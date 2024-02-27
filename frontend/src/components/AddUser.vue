<template>
    <div class="user-form">
      <h2>Add User</h2>
      <input v-model="name" placeholder="Name" type="text" />
      <input v-model.number="longitude" placeholder="Longitude" type="number" />
      <input v-model.number="latitude" placeholder="Latitude" type="number" />
      <button @click="addUser">Add User</button>
    </div>
  </template>
  
  <script>
import { ref } from 'vue';
import { useToast } from "vue-toastification";
import axios from 'axios';

export default {
  setup() {
    const toast = useToast();
    const name = ref('');
    const longitude = ref(0);
    const latitude = ref(0);

    const addUser = async () => {
      try {
        await axios.post('http://localhost:3000/users', {
          name: name.value,
          longitude: longitude.value,
          latitude: latitude.value
        });
        toast.success('User added correctly', {
          timeout: 2000
        });
      } catch (error) {
        toast.error('Error adding user');
        console.error(error);
      }
    };

    // Expose to template
    return { name, longitude, latitude, addUser, toast };
  }
}
</script>
  
  <style scoped>
  .user-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
  }
  input, button {
    padding: 8px;
  }
  button {
    cursor: pointer;
  }
  </style>
  
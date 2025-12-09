<template>
  <div class="inicio-container">
    <h1> Bienvenido a mi Parcial</h1>
    <p>{{ mensaje }}</p>

    <label for="nombre">Tu nombre:</label>
    <input id="nombre" type="text" v-model.trim="nombre" />

    <p v-if="nombre">Hola {{ nombre }} , ¡gracias por ver y corregir mi parcial!</p>
    <p v-else>Por favor ingresa tu nombre.</p>

    <button @click="resetear">Resetear</button>
  </div>
</template>

<script>
export default {
  name: "Inicio",
  props: {
    mensaje: {
      type: String,
      default: "Este proyecto usa Vue.js con Bootstrap y Git."
    }
  },
  data() {
    return {
      nombre: ""
    }
  },
  methods: {
    resetear() {
      this.nombre = ""
    }
  }
}
</script>

<style scoped>
.inicio-container {
  text-align: center;
  margin-top: 3rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

input {
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: seagreen;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: darkgreen;
}
</style>
<template>
  <div id="app" class="app-container">
    <div class="card">
      <header class="card-header">
        <h1>Conversor de Pesos a Dólares</h1>
      </header>

      <main class="card-body">
        <div class="form-group">
          <label for="pesos">Valor en pesos:</label>
          <input id="pesos" type="number" v-model.number="pesos" />
        </div>

        <div class="form-group">
          <label for="cotizacion">Cotización del dólar:</label>
          <input id="cotizacion" type="number" v-model.number="cotizacion" />
        </div>

        <div class="result">
          <p>Resultado: <span class="highlight">{{ resultado }} USD</span></p>
        </div>
      </main>

      <footer class="card-footer">
        <small>Proyecto académico con Vue.js</small>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      pesos: 0,
      cotizacion: 1
    };
  },
  computed: {
    resultado() {
      if (this.cotizacion > 0) {
        return (this.pesos / this.cotizacion).toFixed(2);
      }
      return 0;
    }
  }
};
</script>

<style scoped>
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #74ebd5, #9face6);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
  width: 400px;
  overflow: hidden;
}

.card-header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  text-align: center;
}

.card-body {
  padding: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.3rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.result {
  margin-top: 1.5rem;
  font-size: 1.2rem;
  text-align: center;
}

.highlight {
  color: #27ae60;
  font-weight: bold;
}

.card-footer {
  background-color: #f5f5f5;
  text-align: center;
  padding: 0.5rem;
  font-size: 0.85rem;
  color: #555;
}
</style>
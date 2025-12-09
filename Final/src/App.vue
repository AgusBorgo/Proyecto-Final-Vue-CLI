<template>
  <div class="container-fluid mt-3">
    <div class="card app-card">
      <header class="card-header text-center">
        <h1>Parcial de Agustina Borgona</h1>
        <p class="subtitle">Aplicación Vue.js</p>
        <p class="subtitle">Le puse el nombre aca porque cuando dijo que lo pongamos como titulo ya lo habia arrancado :(</p>
      </header>

      <main class="card-body">
        <Navbar />
        <RouterView />
      </main>

      <footer class="card-footer text-center">
        <small>© 2025 - Proyecto académico desarrollado con Vue y Vite</small>
      </footer>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style scoped>
.app-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.card-header {
  background: linear-gradient(90deg, #2c3e50, #4ca1af);
  color: white;
  padding: 1.5rem;
}

.subtitle {
  font-size: 1rem;
  margin-top: 0.5rem;
  font-style: italic;
  color: #e0e0e0;
}

.card-body {
  padding: 2rem;
  background-color: #fafafa;
}

.card-footer {
  background-color: #f5f5f5;
  padding: 0.75rem;
  font-size: 0.85rem;
  color: #555;
}
</style>
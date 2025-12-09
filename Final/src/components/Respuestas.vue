<template>
  <section class="card respuestas-card">
    <div class="card-header text-center">
      <h2>Respuestas del Parcial</h2>
    </div>

    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead class="thead-dark">
            <tr>
              <th>Pregunta</th>
              <th>Respuesta Correcta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>c) @click / f) v-on:click</td>
            </tr>
            <tr>
              <td>2</td>
              <td>b) Crear una aplicación Vue</td>
            </tr>
            <tr>
              <td>3</td>
              <td>c) Recorta espacios adelante y atrás</td>
            </tr>
            <tr>
              <td>4</td>
              <td>a) Definir path y componente</td>
            </tr>
            <tr>
              <td>5</td>
              <td>b) Lógica para cambiar el estado global</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Respuestas'
}
</script>

<style scoped>
.respuestas-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.card-header {
  background: linear-gradient(90deg, indigo, purple);
  color: white;
  padding: 1rem;
}

.subtitle {
  font-size: 0.9rem;
  margin-top: 0.3rem;
  font-style: italic;
  color: #ddd;
}

.table {
  margin-top: 1rem;
}

.table-hover tbody tr:hover {
  background-color: #f0f0f0;
  transition: 0.3s;
}

td {
  vertical-align: middle;
}
</style>
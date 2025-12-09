<template>
  <section class="card">
    <div class="card-header">
      <h2>Respuestas</h2>
    </div>

    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-dark">
          <thead>
            <tr>
              <th>Numero de Pregunta</th>
              <th>Respuesta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>a</td>
            </tr>
            <tr>
              <td>2</td>
              <td>a, c</td>
            </tr>
            <tr>
              <td>3</td>
              <td>b</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </section>

</template>

<script>

export default {
  name: 'respuestas',
  props: [],
  mounted() {

  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped>
.card-header {
  background-color: indigo;
  color: white;
}
</style>

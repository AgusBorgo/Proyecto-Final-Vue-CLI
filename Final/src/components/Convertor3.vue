<template>
<div class="app-container">
  <div class="convertor">
    <header class="convertor-header">
      <h2>Conversor de Pesos a Dólares</h2>
    </header>

    <main class="convertor-body">
      <div class="form-group">
        <label for="pesos">Ingrese monto en pesos:</label>
        <input id="pesos" type="number" v-model.number="pesos" />
      </div>

      <div class="form-group">
        <label for="cotizacion">Valor del dólar oficial:</label>
        <input
          id="cotizacion"
          type="number"
          v-model.number="cotizacion"
          :readonly="autoActualizar"
        />
      </div>

      <div class="form-group toggle">
        <label>
          <input type="checkbox" v-model="autoActualizar" />
          <span class="toggle-label">Actualización automática</span>
        </label>
      </div>

      <div class="result">
        <p>Valor convertido: <span class="highlight">{{ resultado }} USD</span></p>
        <p v-if="autoActualizar" class="timestamp">Última actualización: {{ timestamp }}</p>
      </div>
    </main>
  </div>
  </div>
</template>

<script>
import { ref, computed, watch, onUnmounted } from 'vue'
import axios from 'axios'

export default {
  name: 'Convertor',
  setup() {
    const pesos = ref(0)
    const cotizacion = ref(0)
    const autoActualizar = ref(false)
    const timestamp = ref('')
    const intervalo = ref(null)

    const resultado = computed(() => {
      return cotizacion.value > 0
        ? (pesos.value / cotizacion.value).toFixed(2)
        : '0.00'
    })

    const fetchCotizacion = async () => {
      try {
        const response = await axios.get('https://api.bluelytics.com.ar/v2/latest')
        cotizacion.value = response.data.oficial.value_sell
        const ahora = new Date()
        timestamp.value = ahora.toLocaleString('es-AR')
      } catch (error) {
        console.error('Error al obtener cotización:', error)
      }
    }

    const iniciarActualizacion = () => {
      fetchCotizacion()
      intervalo.value = setInterval(fetchCotizacion, 2000)
    }

    const detenerActualizacion = () => {
      clearInterval(intervalo.value)
      intervalo.value = null
    }

    watch(autoActualizar, (nuevoValor) => {
      if (nuevoValor) {
        iniciarActualizacion()
      } else {
        detenerActualizacion()
      }
    })

    onUnmounted(() => {
      detenerActualizacion()
    })

    return { pesos, cotizacion, autoActualizar, resultado, timestamp }
  }
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;              
  display: flex;                  
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #74ebd5, #9face6); 
  padding: 2rem;
}

.convertor {
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
  max-width: 500px;
  margin: 2rem auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.convertor-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.convertor-header h2 {
  color: #2c3e50;
  margin: 0;
}

.form-group {
  margin-bottom: 1.2rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.3rem;
  color: #333;
}

input[type="number"] {
  padding: 0.6rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: border-color 0.3s;
}

input[type="number"]:focus {
  border-color: #27ae60;
  outline: none;
}

.toggle {
  display: flex;
  align-items: center;
}

.toggle-label {
  margin-left: 0.5rem;
  font-weight: normal;
  color: #555;
}

.result {
  margin-top: 1.5rem;
  text-align: center;
}

.highlight {
  color: #27ae60;
  font-weight: bold;
  font-size: 1.3rem;
}

.timestamp {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}
</style>
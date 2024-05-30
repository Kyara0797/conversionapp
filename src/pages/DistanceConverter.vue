<template>
  <div>
    <h1>Distance Converter</h1>
    <input v-model="inputValue" placeholder="Enter value" />
    <select v-model="inputUnit">
      <option v-for="unit in distanceUnits" :key="unit" :value="unit">{{ unit }}</option>
    </select>
    <span>to</span>
    <select v-model="outputUnit">
      <option v-for="unit in distanceUnits" :key="unit" :value="unit">{{ unit }}</option>
    </select>
    <button @click="convertDistance">Convert</button>
    <p>Result: {{ outputValue }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      inputUnit: 'meters',
      outputUnit: 'kilometers',
      outputValue: '',
      distanceUnits: ['meters', 'kilometers', 'centimeters', 'miles', 'yards', 'feet', 'inches']
    };
  },
  methods: {
    convertDistance() {
      // Lógica de conversión de distancias
      let valueInMeters = this.convertToMeters(this.inputValue, this.inputUnit);
      this.outputValue = this.convertFromMeters(valueInMeters, this.outputUnit);
    },
    convertToMeters(value, unit) {
      const conversionRates = {
        meters: 1,
        kilometers: 1000,
        centimeters: 0.01,
        miles: 1609.34,
        yards: 0.9144,
        feet: 0.3048,
        inches: 0.0254
      };
      return value * conversionRates[unit];
    },
    convertFromMeters(value, unit) {
      const conversionRates = {
        meters: 1,
        kilometers: 0.001,
        centimeters: 100,
        miles: 0.000621371,
        yards: 1.09361,
        feet: 3.28084,
        inches: 39.3701
      };
      return value * conversionRates[unit];
    }
  }
}
</script>

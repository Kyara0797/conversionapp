<template>
  <div>
    <h1>Temperature Converter</h1>
    <input v-model="inputValue" placeholder="Enter value" />
    <select v-model="inputUnit">
      <option v-for="unit in temperatureUnits" :key="unit" :value="unit">{{ unit }}</option>
    </select>
    <span>to</span>
    <select v-model="outputUnit">
      <option v-for="unit in temperatureUnits" :key="unit" :value="unit">{{ unit }}</option>
    </select>
    <button @click="convertTemperature">Convert</button>
    <p>Result: {{ outputValue }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      inputUnit: 'celsius',
      outputUnit: 'fahrenheit',
      outputValue: '',
      temperatureUnits: ['celsius', 'kelvin', 'fahrenheit']
    };
  },
  methods: {
    convertTemperature() {
      let valueInCelsius = this.convertToCelsius(this.inputValue, this.inputUnit);
      this.outputValue = this.convertFromCelsius(valueInCelsius, this.outputUnit);
    },
    convertToCelsius(value, unit) {
      if (unit === 'celsius') return value;
      if (unit === 'kelvin') return value - 273.15;
      if (unit === 'fahrenheit') return (value - 32) * 5 / 9;
    },
    convertFromCelsius(value, unit) {
      if (unit === 'celsius') return value;
      if (unit === 'kelvin') return value + 273.15;
      if (unit === 'fahrenheit') return value * 9 / 5 + 32;
    }
  }
}
</script>

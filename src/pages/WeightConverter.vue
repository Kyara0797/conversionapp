<template>
  <div>
    <h1>Weight Converter</h1>
    <input v-model="inputValue" placeholder="Enter value" />
    <select v-model="inputUnit">
      <option v-for="unit in weightUnits" :key="unit" :value="unit">{{ unit }}</option>
    </select>
    <span>to</span>
    <select v-model="outputUnit">
      <option v-for="unit in weightUnits" :key="unit" :value="unit">{{ unit }}</option>
    </select>
    <button @click="convertWeight">Convert</button>
    <p>Result: {{ outputValue }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      inputUnit: 'kilograms',
      outputUnit: 'grams',
      outputValue: '',
      weightUnits: ['kilograms', 'grams', 'metric tons', 'pounds', 'ounces']
    };
  },
  methods: {
    convertWeight() {
      let valueInKilograms = this.convertToKilograms(this.inputValue, this.inputUnit);
      this.outputValue = this.convertFromKilograms(valueInKilograms, this.outputUnit);
    },
    convertToKilograms(value, unit) {
      const conversionRates = {
        kilograms: 1,
        grams: 0.001,
        'metric tons': 1000,
        pounds: 0.453592,
        ounces: 0.0283495
      };
      return value * conversionRates[unit];
    },
    convertFromKilograms(value, unit) {
      const conversionRates = {
        kilograms: 1,
        grams: 1000,
        'metric tons': 0.001,
        pounds: 2.20462,
        ounces: 35.274
      };
      return value * conversionRates[unit];
    }
  }
}
</script>

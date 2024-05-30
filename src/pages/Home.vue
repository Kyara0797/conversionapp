<template>
  <div class="home">
    <div>Welcome to the Conversion App</div>
    <p>Select a conversion type:</p>
    <div class="buttons">
      <router-link to="/distance">
        <button class="convert-button distance">Distance Conversion</button>
      </router-link>
      <router-link to="/temperature">
        <button class="convert-button temperature">Temperature Conversion</button>
      </router-link>
      <router-link to="/weight">
        <button class="convert-button weight">Weight Conversion</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: black;
  color: white;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.convert-button {
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.convert-button.distance {
  background: linear-gradient(90deg, #007bff, #00d4ff);
}

.convert-button.temperature {
  background: linear-gradient(90deg, #ff7b00, #ffd400);
}

.convert-button.weight {
  background: linear-gradient(90deg, #00ff7b, #00ffd4);
}

.convert-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
}

.convert-button.distance:hover {
  background: linear-gradient(90deg, #0056b3, #0099ff);
}

.convert-button.temperature:hover {
  background: linear-gradient(90deg, #b35600, #ff9900);
}

.convert-button.weight:hover {
  background: linear-gradient(90deg, #00b356, #00ff99);
}
</style>

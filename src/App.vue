<template>
  <div id="app" class="app-container">
    <h1 class="app-title">FantaVacanza</h1>
    <CountdownTimer />
  </div>
</template>

<script>
import CountdownTimer from './components/CountdownTimer.vue';

export default {
  name: 'App',
  components: {
    CountdownTimer
  }
}
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #1e5799, #7db9e8);
  font-family: 'Montserrat', sans-serif;
  color: white;
  overflow: hidden;
  position: relative;
}

.app-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://source.unsplash.com/random/1920x1080/?beach,vacation') no-repeat center center;
  background-size: cover;
  opacity: 0.2;
  z-index: -1;
}

.app-title {
  font-size: 5rem;
  margin-bottom: 40px;
  color: white;
  text-shadow: 2px 4px 8px rgba(0,0,0,0.5);
  animation: fadeInDown 1.5s;
  letter-spacing: 3px;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
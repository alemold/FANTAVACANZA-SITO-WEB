<template>
  <div id="app" class="app-container">
    <div class="header-container">
      <div class="logo-container">
        <img src="./assets/images/logo.png" alt="FantaVacanza Logo" class="app-logo" />
      </div>
      <h1 class="app-title">FantaVacanza</h1>
    </div>
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
  min-height: 100vh;
  background: linear-gradient(135deg, #1e5799, #7db9e8);
  font-family: 'Montserrat', sans-serif;
  color: white;
  overflow-x: hidden;
  overflow-y: auto; /* Changed from overflow: hidden */
  position: relative;
  padding: 20px;
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

.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  animation: fadeInDown 1.2s;
  line-height: 1;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 15px;
}

.logo-container {
  display: flex;
  align-items: center;
  animation: fadeInDown 1.2s;
  padding-top: 10px;
}

.app-logo {
  width: 55px;
  height: auto;
  filter: drop-shadow(2px 4px 8px rgba(0,0,0,0.3));
  transition: transform 0.3s ease;
}

.app-title {
  font-size: 5rem;
  color: white;
  text-shadow: 2px 4px 8px rgba(0,0,0,0.5);
  animation: fadeInDown 1.5s;
  letter-spacing: 3px;
  margin: 0;
  line-height: 1;
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
  }

  .app-logo {
    width: 45px;
  }

  .app-title {
    font-size: 3rem;
    letter-spacing: 2px;
  }
}

@media (max-width: 480px) {
  .app-container {
    padding: 15px;
    justify-content: flex-start; /* Changed to allow scrolling on small screens */
    padding-top: 30px; /* Added padding at top for small screens */
  }

  .header-container {
    gap: 5px;
    margin-bottom: 20px;
  }

  .app-logo {
    width: 35px;
  }

  .app-title {
    font-size: 2.5rem;
    letter-spacing: 1px;
  }
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
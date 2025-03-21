<template>
  <div class="countdown-timer">
    <h2 class="timer-title">Countdown to FantaVacanza!</h2>
    <div class="timer-container">
      <div class="timer">
      <span class="time-unit">
        <span class="number">{{ days }}</span>
        <span class="label">g</span>
      </span>
      <span class="separator">:</span>
      <span class="time-unit">
        <span class="number">{{ hours }}</span>
        <span class="label">h</span>
      </span>
      <span class="separator">:</span>
      <span class="time-unit">
        <span class="number">{{ minutes }}</span>
        <span class="label">m</span>
      </span>
      <span class="separator">:</span>
      <span class="time-unit">
        <span class="number">{{ seconds }}</span>
        <span class="label">s</span>
      </span>
      </div>
      <p class="launch-message">L'app sarà disponibile il 14 Maggio 2025!</p>
      <button @click="notifyMe" class="notify-button">
        <span class="button-content">
          <span class="button-text">Avvisami</span>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetDate: new Date('2025-05-14T00:00:00').getTime(),
      timeLeft: 0,
      timer: null,
    };
  },
  computed: {
    days() {
      return Math.floor(this.timeLeft / (1000 * 60 * 60 * 24));
    },
    hours() {
      return Math.floor((this.timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    },
    minutes() {
      return Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    },
    seconds() {
      return Math.floor((this.timeLeft % (1000 * 60)) / 1000);
    },
  },
  methods: {
    notifyMe() {
      // Here you can implement the notification logic
      alert('Grazie! Ti avviseremo quando l\'app sarà disponibile.');
    },
    calculateTimeLeft() {
      const now = new Date().getTime();
      this.timeLeft = this.targetDate - now;
      if (this.timeLeft < 0) {
        clearInterval(this.timer);
        this.timeLeft = 0;
      }
    },
    startTimer() {
      this.calculateTimeLeft();
      this.timer = setInterval(this.calculateTimeLeft, 1000);
    },
  },
  mounted() {
    this.startTimer();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  }
};
</script>

<style scoped>
.countdown-timer {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: white;
  background: rgba(0, 0, 0, 0.3);
  padding: 30px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s;
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
}

.timer-title {
  font-size: 1.8em;
  margin-bottom: 20px;
  animation: fadeIn 1.5s;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.timer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10px;
  margin: 0 auto;
  padding: 20px 30px;
  overflow: visible;
  width: 100%;
  box-sizing: border-box;
}

.time-unit {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  min-width: 80px;
  position: relative;
  overflow: visible;
}

.separator {
  font-size: 1.6em;
  font-weight: bold;
  margin: 0 5px;
  color: rgba(255, 255, 255, 0.6);
  align-self: center;
  padding-bottom: 15px;
  position: relative;
  z-index: 0;
}

.number {
  font-size: 2em;
  font-weight: bold;
  display: inline-block;
  background: linear-gradient(45deg, #ffffff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: none;
  min-width: 70px;
  text-align: center;
  padding: 10px;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
}

.number:hover {
  transform: scale(1.1);
  background: linear-gradient(45deg, #ffcc00, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.label {
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.8);
  display: block;
  text-transform: uppercase;
  margin-top: -5px;
}

.launch-message {
  margin-top: 20px;
  font-size: 1.2em;
  color: #ffcc00;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  animation: pulse 2s infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.8;
  }
}

@media (max-width: 768px) {
  .countdown-timer {
    padding: 25px;
    max-width: 95%;
  }
  
  .timer-title {
    font-size: 1.5em;
  }
  
  .timer {
    gap: 10px;
    padding: 10px;
  }
  
  .number {
    font-size: 2em;
    min-width: 50px;
    padding: 5px;
  }
  
  .time-unit {
    min-width: 70px;
  }
  
  .separator {
    font-size: 1.5em;
    padding-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .countdown-timer {
    padding: 20px;
    width: 95%;
  }

  .timer-title {
    font-size: 1.5em;
  }
  
  .timer {
    gap: 5px;
    padding: 10px;
  }
  
  .number {
    font-size: 1.6em;
    min-width: 35px;
  }
  
  .time-unit {
    min-width: 50px;
  }
  
  .label {
    font-size: 0.8em;
  }
  
  .separator {
    font-size: 1.2em;
  }

  .launch-message {
    font-size: 0.9em;
    margin: 15px 0;
  }

  .notify-button {
    padding: 12px 30px;
    font-size: 1em;
  }
}

.notify-button {
  margin-top: 25px;
  padding: 15px 40px;
  font-size: 1.2em;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #FF6B6B, #4ECDC4);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.notify-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, #FF8787, #5CEDE4);
}

.notify-button:active {
  transform: translateY(1px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.button-content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
</style>
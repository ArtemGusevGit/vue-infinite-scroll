<template>
  <div class="skeleton-card bg-panel hidden full-wh relative border-r-12" />
</template>

<style scoped>
  .skeleton-card {
    min-height: 60px;
  }

  .bg-panel {
    background: var(--bg-panel);
  }

  .skeleton-card::before {
    content: '';
    width: 200%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation: loader-animate 1.6s linear infinite;
    background: linear-gradient(
      -45deg,
      rgba(204, 141, 10, 0) 15%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(237, 185, 79, 0) 85%
    );
  }

  @keyframes loader-animate {
    0% {
      transform: translate3d(-100%, 0, 0);
    }

    100% {
      transform: translate3d(100%, 0, 0);
    }
  }
</style>

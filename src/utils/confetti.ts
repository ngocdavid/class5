import confetti from 'canvas-confetti';

export const triggerStarConfetti = () => {
  confetti({
    particleCount: 40,
    spread: 60,
    origin: { y: 0.8 },
    colors: ['#F59E0B', '#10B981', '#0EA5E9', '#EC4899', '#8B5CF6']
  });
};

export const triggerVictoryConfetti = () => {
  const end = Date.now() + 2 * 1000;
  const colors = ['#F59E0B', '#10B981', '#0EA5E9', '#EC4899', '#F43F5E'];

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: colors
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
};

// Pick random go sleep and typewriter effect utility functions

export function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function sleep(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}

export function typewriterEffect(
  el: HTMLElement,
  strings: string[],
  opts?: { typeSpeed?: number; deleteSpeed?: number; pause?: number },
) {
  const typeSpeed = opts?.typeSpeed ?? 70;
  const deleteSpeed = opts?.deleteSpeed ?? 40;
  const pause = opts?.pause ?? 11000;

  let current = "";
  let running = true;
  let text = "";

  const textSpan = document.createElement("span");
  const cursorSpan = document.createElement("span");
  cursorSpan.textContent = "_";
  cursorSpan.classList.add("typewriter-cursor");
  el.textContent = "";
  el.append(textSpan, cursorSpan);

  function sleep(ms: number) {
    return new Promise<void>((r) => setTimeout(r, ms));
  }

  function startBlink() {
    cursorSpan.style.animationPlayState = "running";
  }

  function stopBlink() {
    cursorSpan.style.animationPlayState = "paused";
    cursorSpan.style.opacity = "1";
  }

  async function type(str: string) {
    stopBlink();
    for (let i = 0; i < str.length && running; i++) {
      text += str[i];
      textSpan.textContent = text;
      await sleep(typeSpeed);
    }
    startBlink();
  }

  async function erase(str: string) {
    stopBlink();
    for (let i = str.length; i >= 0 && running; i--) {
      text = text.slice(0, -1);
      textSpan.textContent = text;
      await sleep(deleteSpeed);
    }
    startBlink();
  }

  async function loop() {
    while (running) {
      const nextCandidates = strings.filter((s) => s !== current);
      const next = pickRandom(nextCandidates.length ? nextCandidates : strings);
      current = next;
      await type(next);
      await sleep(pause);
      await erase(next);
      await sleep(400);
    }
  }

  loop();
  return () => (running = false);
}

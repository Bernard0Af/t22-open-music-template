export function applyInputRangeStyle() {
    const inputRange = document.querySelector(".section_filter--input");
  
    inputRange.addEventListener("input", (event) => {
      const currentInputValue = event.target.value;
      const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;
  
      inputRange.style.background = `linear-gradient(to right, var(--brand-1) 
      ${runnableTrackProgress}%, var(--grey-5) ${runnableTrackProgress}%)`;
    });
  }


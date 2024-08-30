// Your JS code here.

  // Debounce function to limit the rate at which the scroll event handler is fired
  function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
      const context = this, args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // Function to check if image is in viewport and add 'active' class
  function checkSlide() {
    const images = document.querySelectorAll('.slide-in');
    images.forEach(image => {
      const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
      const imageBottom = image.offsetTop + image.height;
      const isHalfShown = slideInAt > image.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  }

  // Listen to scroll event using debounce
  window.addEventListener('scroll', debounce(checkSlide));


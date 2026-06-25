/* Form Validation & Accessibility Helper Library */

const UserInvalidFallback = (() => {
  const dirtyState = new WeakMap();

  // Update classes and ARIA attributes on the input element
  const updateState = (input) => {
    const isValid = input.checkValidity();

    // Toggle custom fallback classes to emulate CSS :user-invalid
    input.classList.toggle('user-invalid-fallback', !isValid);
    input.classList.toggle('user-valid-fallback', isValid);

    // Sync aria-invalid attribute for screen readers
    if (!isValid) {
      input.setAttribute('aria-invalid', 'true');
    } else {
      input.removeAttribute('aria-invalid');
    }
    
    // Manage parent element styling (.field-group container)
    const container = input.closest('.field-group');
    if (container) {
      container.classList.toggle('has-error-fallback', !isValid);
    }
  };

  const handleEvent = (event) => {
    const input = event.target;

    // Handle form reset
    if (event.type === 'reset') {
      const controls = input.elements || [];
      for (const control of controls) {
        dirtyState.delete(control);
        control.classList.remove('user-invalid-fallback');
        control.classList.remove('user-valid-fallback');
        control.removeAttribute('aria-invalid');
        control.closest('.field-group')?.classList.remove('has-error-fallback');
      }
      return;
    }

    if (!input.checkValidity) return;

    if (event.type === 'input' || event.type === 'change') {
      const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      state.hasInteracted = true;
      dirtyState.set(input, state);
      if (state.hasBlurred) {
        updateState(input);
      }
    } else if (event.type === 'blur') {
      const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
      state.hasBlurred = true;
      dirtyState.set(input, state);
      if (state.hasInteracted) {
        updateState(input);
      }
    }
  };

  const init = (root = document) => {
    // If browser supports CSS :has() and native :user-invalid, we still sync aria-invalid
    const supportsHas = CSS.supports('selector(:has(*))') && CSS.supports('selector(:user-invalid)');
    
    if (supportsHas) {
      // Setup accessibility ARIA sync only
      root.addEventListener('blur', (e) => {
        if (e.target.checkValidity) {
          const isValid = e.target.checkValidity();
          if (!isValid) {
            e.target.setAttribute('aria-invalid', 'true');
          } else {
            e.target.removeAttribute('aria-invalid');
          }
        }
      }, true);
      
      root.addEventListener('input', (e) => {
        if (e.target.hasAttribute('aria-invalid') && e.target.checkValidity) {
          const isValid = e.target.checkValidity();
          if (isValid) {
            e.target.removeAttribute('aria-invalid');
          }
        }
      });
      return;
    }

    // Fallback mode for older browsers / Firefox without full :has() or :user-invalid support
    root.addEventListener('blur', handleEvent, true); // Capture phase
    root.addEventListener('input', handleEvent);
    root.addEventListener('change', handleEvent);
    root.addEventListener('reset', handleEvent, true); // Capture resets
  };

  return { init };
})();

// Export validation helper to window
window.UserInvalidFallback = UserInvalidFallback;

function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleBtn = document.querySelector('.password-toggle');
  const eyeIcon = toggleBtn.querySelector('.eye-icon');
  const eyeOffIcon = toggleBtn.querySelector('.eye-off-icon');
  const isPassword = passwordInput.type === 'password';
  
  passwordInput.type = isPassword ? 'text' : 'password';
  eyeIcon.style.display = isPassword ? 'none' : 'block';
  eyeOffIcon.style.display = isPassword ? 'block' : 'none';
  toggleBtn.setAttribute('aria-pressed', isPassword ? 'true' : 'false');
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showError(inputId, message) {
  const input = document.getElementById(inputId);
  const errorEl = document.getElementById(`${inputId}-error`);
  const inputGroup = input.closest('.input-group');
  
  input.setAttribute('aria-invalid', 'true');
  errorEl.textContent = message;
  inputGroup.classList.add('input-error');
  
  inputGroup.style.animation = 'none';
  inputGroup.offsetHeight;
  inputGroup.style.animation = 'inputShake 0.4s ease-out';
}

function clearError(inputId) {
  const input = document.getElementById(inputId);
  const errorEl = document.getElementById(`${inputId}-error`);
  const inputGroup = input.closest('.input-group');
  
  input.removeAttribute('aria-invalid');
  errorEl.textContent = '';
  inputGroup.classList.remove('input-error');
  inputGroup.style.animation = '';
}

function shakeCard() {
  const card = document.querySelector('.login-card');
  card.classList.add('shake');
  setTimeout(() => card.classList.remove('shake'), 400);
}

function celebrateSuccess() {
  const card = document.querySelector('.login-card');
  card.classList.add('success');
  
  const submitBtn = document.querySelector('.submit-btn');
  submitBtn.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
    <span class="submit-btn-text">Welcome back!</span>
  `;
  
  setTimeout(() => {
    card.classList.remove('success');
  }, 2000);
}

const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

emailInput.addEventListener('input', () => clearError('email'));
passwordInput.addEventListener('input', () => clearError('password'));

emailInput.addEventListener('blur', function() {
  if (this.value && !validateEmail(this.value)) {
    showError('email', 'Please enter a valid email address');
  }
});

emailInput.addEventListener('focus', function() {
  this.closest('.input-group').classList.add('focused');
});

passwordInput.addEventListener('focus', function() {
  this.closest('.input-group').classList.add('focused');
});

document.querySelectorAll('.input-group').forEach(group => {
  group.addEventListener('blur', function() {
    this.classList.remove('focused');
  }, true);
});

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  let hasError = false;
  
  if (!emailInput.value.trim()) {
    showError('email', 'Email is required');
    hasError = true;
  } else if (!validateEmail(emailInput.value)) {
    showError('email', 'Please enter a valid email address');
    hasError = true;
  }
  
  if (!passwordInput.value) {
    showError('password', 'Password is required');
    hasError = true;
  }
  
  if (hasError) {
    shakeCard();
    const firstError = loginForm.querySelector('[aria-invalid="true"]');
    if (firstError) firstError.focus();
    return;
  }
  
  const submitBtn = loginForm.querySelector('.submit-btn');
  const originalBtnContent = submitBtn.innerHTML;
  
  submitBtn.classList.add('loading');
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <span class="spinner" aria-hidden="true"></span>
    <span class="submit-btn-text">Signing in...</span>
  `;
  
  setTimeout(() => {
    submitBtn.classList.remove('loading');
    submitBtn.classList.add('success-state');
    celebrateSuccess();
    
    setTimeout(() => {
      submitBtn.classList.remove('success-state');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnContent;
    }, 2000);
  }, 1200);
});

document.querySelectorAll('.social-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const span = this.querySelector('span');
    const icon = this.querySelector('.social-icon');
    const originalText = span.textContent;
    
    this.classList.add('clicked');
    span.textContent = 'Redirecting...';
    icon.style.opacity = '0';
    
    setTimeout(() => {
      this.classList.remove('clicked');
      span.textContent = originalText;
      icon.style.opacity = '1';
    }, 1000);
  });
});

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.bg-blob').forEach(blob => {
    blob.style.animation = 'none';
  });
  document.querySelectorAll('.login-card, .brand-mark, .login-title, .login-subtitle, .form-group, .submit-btn, .divider, .social-btn, .register-prompt').forEach(el => {
    el.style.animation = 'none';
  });
}

const style = document.createElement('style');
style.textContent = `
  @keyframes inputShake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-4px); }
    40% { transform: translateX(4px); }
    60% { transform: translateX(-2px); }
    80% { transform: translateX(2px); }
  }
  
  @keyframes scaleIn {
    from { transform: scale(0); }
    to { transform: scale(1); }
  }
  
  .input-group.focused {
    transform: translateY(0);
  }
  
  .input-group.input-error .form-input {
    border-color: var(--color-error);
    animation: inputShake 0.4s ease-out;
  }
  
  .submit-btn.loading .spinner {
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  .submit-btn.success-state {
    background: var(--color-success) !important;
    transform: scale(1.02);
    box-shadow: 0 8px 24px oklch(72% 0.15 150 / 0.3);
  }
  
  .social-btn.clicked {
    transform: scale(0.95);
    opacity: 0.8;
  }
  
  @keyframes successPulse {
    0%, 100% { box-shadow: 0 0 0 0 oklch(72% 0.15 150 / 0.4); }
    50% { box-shadow: 0 0 0 12px oklch(72% 0.15 150 / 0); }
  }
  
  .login-card.success {
    animation: successPulse 0.6s ease-out;
  }
`;
document.head.appendChild(style);
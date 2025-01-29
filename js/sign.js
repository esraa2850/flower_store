const signUpIcon = document.getElementById('sign_up');
const authModal = document.getElementById('authModal');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');

// Show modal when the user clicks the sign-up icon
signUpIcon.addEventListener('click', (e) => {
    e.preventDefault();
    authModal.classList.add('active');
});

// Show Sign In form
signInBtn.addEventListener('click', () => {
    authModal.classList.remove('active');
    signUpForm.style.display = 'none';
    signInForm.style.display = 'block';
});

// Show Sign Up form
signUpBtn.addEventListener('click', () => {
    authModal.classList.remove('active');
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
});
document.addEventListener('DOMContentLoaded', () => {
    const editProfileButton = document.querySelector('.edit-profile-button');
    const editProfileForm = document.querySelector('.edit-profile-form');
    const profileInfoElements = {
        course: document.getElementById('course-info'),
        rollNo: document.getElementById('roll-no-info'),
        abcId: document.getElementById('abc-id-info'),
        dob: document.getElementById('dob-info'),
        contact: document.getElementById('contact-info'),
        email: document.getElementById('email-info'),
        address: document.getElementById('address-info')
    };

    // Load profile data from localStorage
    const loadProfileData = () => {
        Object.keys(profileInfoElements).forEach(key => {
            const savedValue = localStorage.getItem(key);
            if (savedValue) {
                profileInfoElements[key].textContent = savedValue;
            }
        });
    };

    loadProfileData();

    editProfileButton.addEventListener('click', () => {
        editProfileForm.classList.toggle('active');
    });

    editProfileForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(editProfileForm);

        Object.keys(profileInfoElements).forEach(key => {
            const newValue = formData.get(key);
            profileInfoElements[key].textContent = newValue;
            localStorage.setItem(key, newValue); // Save to localStorage
        });

        editProfileForm.classList.remove('active');
    });
});

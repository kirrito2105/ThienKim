document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (name && email && subject && message) {
            // Show success message
            alert('Cảm ơn bạn đã gửi tin nhắn! Chúng tôi sẽ phản hồi sớm nhất có thể.');
            contactForm.reset();
        } else {
            alert('Vui lòng điền đầy đủ thông tin!');
        }
    });

    // Auto-adjust label positions for pre-filled inputs
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const label = input.nextElementSibling;
            if (input.value) {
                label.style.top = '-0.5rem';
                label.style.fontSize = '0.8rem';
            }
        });
    });
});

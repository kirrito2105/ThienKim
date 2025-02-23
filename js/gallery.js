document.addEventListener('DOMContentLoaded', () => {
    const gallery = {
        init() {
            this.container = document.querySelector('.photo-grid');
            this.modal = document.querySelector('.preview-modal');
            this.modalImg = document.getElementById('preview-image');
            this.currentIndex = 0;
            this.photos = [...document.querySelectorAll('.photo-item')];
            
            this.bindEvents();
        },

        bindEvents() {
            // Category filtering
            document.querySelectorAll('.cat-btn').forEach(btn => {
                btn.addEventListener('click', (e) => this.filterPhotos(e));
            });

            // Photo click
            this.photos.forEach((photo, index) => {
                photo.addEventListener('click', () => this.showPreview(index));
            });

            // Modal controls
            document.querySelector('.close-preview').addEventListener('click', () => this.closePreview());
            document.querySelector('.next-btn').addEventListener('click', () => this.navigate(1));
            document.querySelector('.prev-btn').addEventListener('click', () => this.navigate(-1));

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (this.modal.style.display === 'flex') {
                    if (e.key === 'Escape') this.closePreview();
                    if (e.key === 'ArrowRight') this.navigate(1);
                    if (e.key === 'ArrowLeft') this.navigate(-1);
                }
            });
        },

        filterPhotos(e) {
            const category = e.target.dataset.category;
            
            // Update active button
            document.querySelectorAll('.cat-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            // Filter photos with animation
            this.photos.forEach(photo => {
                photo.style.opacity = '0';
                setTimeout(() => {
                    if (category === 'all' || photo.dataset.category === category) {
                        photo.style.display = 'block';
                        photo.style.opacity = '1';
                    } else {
                        photo.style.display = 'none';
                    }
                }, 300);
            });
        },

        showPreview(index) {
            this.currentIndex = index;
            this.modalImg.src = this.photos[index].querySelector('img').src;
            this.modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        },

        closePreview() {
            this.modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        },

        navigate(direction) {
            this.currentIndex = (this.currentIndex + direction + this.photos.length) % this.photos.length;
            this.showPreview(this.currentIndex);
        }
    };

    gallery.init();
});

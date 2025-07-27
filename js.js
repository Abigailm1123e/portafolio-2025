

        document.addEventListener('DOMContentLoaded', function() {
            // Mobile menu toggle
            const menuToggle = document.getElementById('menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            
            menuToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Project modal functionality
            const projectModal = document.getElementById('project-modal');
            const modalTitle = document.getElementById('modal-title');
            const modalDescription = document.getElementById('modal-description');
            const modalImage = document.getElementById('modal-image');
            const closeModal = document.getElementById('close-modal');
            const viewProjectButtons = document.querySelectorAll('.view-project');
            
            viewProjectButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const projectId = this.getAttribute('data-id');
                    const projectTitle = this.getAttribute('data-title');
                    const projectDesc = this.getAttribute('data-desc');
                    const projectImage = this.getAttribute('data-image');
                    
                    modalTitle.textContent = projectTitle;
                    modalDescription.textContent = projectDesc;
                    
                    let svgIcon = '';
                    if (projectImage === 'robot') {
                            svgIcon = '<svg class="w-24 h-24 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>';
                    } else if (projectImage === 'chart') {
                        svgIcon = '<svg class="w-24 h-24 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>';
                    } else if (projectImage === 'camera') {
                        svgIcon = '<svg class="w-24 h-24 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>';
                    }
                    
                    modalImage.innerHTML = svgIcon;
                    projectModal.classList.remove('hidden');
                });
            });
            
            closeModal.addEventListener('click', function() {
                projectModal.classList.add('hidden');
            });
            
            // Close modal when clicking outside
            window.addEventListener('click', function(event) {
                if (event.target === projectModal) {
                    projectModal.classList.add('hidden');
                }
            });
            
            // Section navigation
            function showSection(sectionId) {
                const sections = document.querySelectorAll('.section');
                const navLinks = document.querySelectorAll('.nav-link');
                
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                document.getElementById(sectionId).classList.add('active');
                
                document.querySelectorAll(`.nav-link`).forEach(link => {
                    if (link.getAttribute('onclick').includes(sectionId)) {
                        link.classList.add('active');
                    }
                });
                
                // Close mobile menu after selection
                mobileMenu.classList.add('hidden');
            }
            
            // Make showSection function available globally
            window.showSection = showSection;
            
            // Contact form submission
            const contactForm = document.getElementById('contact-form');
            const formSuccess = document.getElementById('form-success');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simulate form submission
                setTimeout(() => {
                    contactForm.reset();
                    formSuccess.classList.remove('hidden');
                    
                    setTimeout(() => {
                        formSuccess.classList.add('hidden');
                    }, 5000);
                }, 1000);
            });
        });

// Menu mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Detectar scroll para adicionar classe no header
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove('scrolled');
        return;
    }

    if (currentScroll > lastScroll && !header.classList.contains('scrolled')) {
        header.classList.add('scrolled');
    } else if (currentScroll < lastScroll && header.classList.contains('scrolled')) {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Formulário de contato
const form = document.getElementById('formContato');
const status = document.getElementById('status');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        mensagem: document.getElementById('mensagem').value
    };

    // Aqui você pode adicionar a lógica para enviar o formulário para um servidor
    // Por enquanto, vamos apenas simular um envio bem-sucedido
    try {
        // Simula um delay de envio
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Limpa o formulário
        form.reset();
        
        // Mostra mensagem de sucesso
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    } catch (error) {
        alert('Erro ao enviar mensagem. Por favor, tente novamente.');
    }
});

// Animações de scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observa elementos que devem ser animados
document.querySelectorAll('.service-card, .accessory-card, .about-content, .contact-wrapper').forEach(el => {
    observer.observe(el);
}); 
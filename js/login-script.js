const placeholdersFormulario = document.querySelectorAll('p');
const camposFormulario = document.querySelectorAll('input');

const esconderPlaceholder = (placeholder) => {
    placeholder.style.zIndex = '-1';
};

const mostrarPlaceholder = (placeholder) => {
    placeholder.style.zIndex = '999';
}

placeholdersFormulario.forEach(e => e.addEventListener(('mouseover'), e => {
    const placeholder = e.target;
    esconderPlaceholder(placeholder);
})
);

camposFormulario.forEach(e => e.addEventListener(('mouseout'), e => {
    const placeholder = e.target.previousElementSibling.firstElementChild;
    const formulario = e.target;
    if (formulario.value === '') {
        mostrarPlaceholder(placeholder);
    }
    else {
        return;
    }
}))
    ;

camposFormulario.forEach(e => e.addEventListener(('input'), e => {
    const placeholder = e.target.previousElementSibling.firstElementChild;
    esconderPlaceholder(placeholder);
}))




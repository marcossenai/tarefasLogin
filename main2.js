const form = document.querySelector('.login-form')

const usernameInput = form.querySelector('input[type="text"]');

const senhaInput = form.querySelector('input[type="password"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuario = usernameInput.value.trim();
    const senha = senhaInput.value.trim();

    if(usuario === '' || senha === '') {
        alert('Por favor, preencha os campos.')
    } else if (usuario === 'usuario' && senha === 'senha') {
        alert('Bem-vindo!')
        location.replace("/Tarefa/index.html", "_self");
    } else {
        alert('Usario ou senha incorreto, tente novamente')
    }
})

function criarConta() {
    const usuarioInput = document.getElementById('usuario');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');

    const usuario = usuarioInput.value.trim();
    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    if (usuario === '' || email === '' || senha === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Aqui você pode fazer o que quiser com os dados, como enviá-los para um servidor
    // Para fins de demonstração, apenas mostraremos os dados em um alerta
    alert('Conta criada com sucesso!\n\nUsuário: ' + usuario + '\nE-mail: ' + email + '\nSenha: ' + senha);

    // Limpe os campos após a criação da conta
    usuarioInput.value = '';
    emailInput.value = '';
    senhaInput.value = '';
}
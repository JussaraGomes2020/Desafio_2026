import BasePage from "./BasePage";

class LoginPage extends BasePage {

    // Seletores

    campoEmail = '[data-qa="login-email"]';

    campoSenha = '[data-qa="login-password"]';

    botaoLogin = '[data-qa="login-button"]';

    botaoLogout = 'a[href="/logout"]';

    botaoExcluirConta = 'a[href="/delete_account"]';


    // Mensagens

    mensagemUsuarioLogado = "Logged in as";

    mensagemLoginInvalido = "Your email or password is incorrect!";


    // Navegação

    acessarTelaLogin() {
        this.acessarPagina("/login");
    }


    // Ações

    informarEmail(email) {
        this.preencherCampo(this.campoEmail, email);
    }

    informarSenha(senha) {
        this.preencherCampo(this.campoSenha, senha);
    }

    clicarBotaoLogin() {
        this.clicar(this.botaoLogin);
    }

    realizarLogin(email, senha) {

        this.acessarTelaLogin();

        this.informarEmail(email);

        this.informarSenha(senha);

        this.clicarBotaoLogin();

        this.validarLoginRealizado();

    }


    // Validações

    validarLoginRealizado() {

        this.validarTextoVisivel(this.mensagemUsuarioLogado);

        this.validarElementoVisivel(this.botaoLogout);

        this.validarElementoVisivel(this.botaoExcluirConta);

    }

    validarMensagemLoginInvalido() {

        this.validarTextoVisivel(this.mensagemLoginInvalido);

    }

}

export default new LoginPage();
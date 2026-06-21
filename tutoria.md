# Guia: Como Deixar sua Gamemode SA-MP (TypeScript) Online

Este guia explica o passo a passo completo para configurar e iniciar o seu servidor de SA-MP que utiliza o plugin **Kainure** para integrar o **Node.js/TypeScript** diretamente no servidor.

---

## 1. Pré-requisitos (O que você precisa instalar)

Antes de abrir o servidor, você precisa ter as seguintes ferramentas instaladas no seu computador:

1.  **Node.js (Versão 16 ou superior):**
    *   Baixe e instale pelo site oficial: [nodejs.org](https://nodejs.org/)
    *   Isso é necessário para gerenciar as bibliotecas (como o driver do banco de dados e criptografia).
2.  **MySQL (XAMPP é o mais recomendado):**
    *   Baixe o **XAMPP** pelo site: [apachefriends.org](https://www.apachefriends.org/)
    *   Após instalar, abra o "XAMPP Control Panel" e clique em **Start** no módulo **MySQL**.
3.  **Visual Studio C++ Redistributable:**
    *   Muitos plugins de SA-MP exigem isso. Se o servidor fechar sozinho ao abrir, instale o [Microsoft Visual C++ Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170).

---

## 2. Configurando o Banco de Dados

A gamemode está configurada para criar o banco de dados automaticamente, mas você precisa ajustar a senha:

1.  Vá até a pasta: `Kainure/src/data/`
2.  Abra o arquivo `connection.ts` com um editor de texto (Notepad++, VS Code, etc).
3.  Na linha 6, altere `'TUASENHA'` para a senha do seu MySQL (no XAMPP, por padrão, a senha é vazia: `password: ''`).
4.  Abra também o arquivo `setup.ts` na mesma pasta e verifique se a senha na linha 9 está correta.

---

## 3. Instalando as Dependências do Node.js

Agora você precisa baixar os arquivos que fazem o código TypeScript funcionar:

1.  Abra a pasta principal da gamemode (onde está o arquivo `package.json`).
2.  Segure a tecla **Shift** e clique com o **botão direito** em um espaço vazio da pasta.
3.  Selecione **"Abrir janela do PowerShell aqui"** ou **"Abrir terminal"**.
4.  Digite o seguinte comando e aperte Enter:
    ```bash
    npm install
    ```
5.  Espere terminar. Isso criará uma pasta chamada `node_modules`.

---

## 4. Configurando o Servidor (server.cfg)

Abra o arquivo `server.cfg` na pasta principal e verifique:

*   `rcon_password`: Mude para uma senha segura.
*   `plugins`: Certifique-se de que `Kainure` está listado (em Windows, ele lerá o `Kainure.dll`).
*   `port`: A porta padrão é `7777`.

---

## 5. Como Iniciar o Servidor (O "Bglh lá")

Depois de tudo configurado:

1.  Certifique-se de que o **MySQL (XAMPP)** está ligado.
2.  Na pasta principal da gamemode, procure pelo arquivo:
    *   **`samp-server.exe`**
3.  **Clique duas vezes** nele.
4.  Uma janela preta (Prompt de Comando) vai abrir. Se aparecer "Executing Server Config..." e não fechar, o servidor está online!

---

## Dicas Importantes:

*   **Erros de Conexão:** Se o console disser "Access denied for user root", significa que a senha no arquivo `connection.ts` ou `setup.ts` está errada.
*   **Portas:** Para que outras pessoas entrem no seu servidor, você precisa liberar a porta `7777` (UDP) no seu roteador e no firewall do Windows.
*   **TypeScript:** Como este projeto usa TypeScript, se você fizer alterações no código dentro da pasta `src`, precisará recompilar usando o comando `npx tsc` (embora os arquivos já compilados estejam na pasta `dist`).

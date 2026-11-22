# Literatura e Arte Digital — site de Alan Ribeiro

Site em HTML, CSS e JavaScript puro (sem build) para **literaturaeartedigital.com.br**.

- **Início:** apresentação, destaque, sobre o autor e links do Instagram
- **Livros:** lista de livros, cada um com sua própria landing page
- **Artes:** lista de artes, cada uma com sua própria landing page (por enquanto vazia, "em breve")

## Endereços

| Endereço | O que é |
|---|---|
| `literaturaeartedigital.com.br/` | Página inicial |
| `literaturaeartedigital.com.br/livros/` | Lista de livros |
| `literaturaeartedigital.com.br/livros/contrastes/` | Landing page do CONTRASTES |
| `literaturaeartedigital.com.br/artes/` | Lista de artes |

## Estrutura

```
.
├── index.html                      # página inicial
├── CNAME                           # domínio personalizado (GitHub Pages)
├── 404.html · robots.txt · sitemap.xml
├── assets/
│   ├── site.css                    # visual do site principal
│   ├── site.js                     # monta os cartões de livros e artes
│   └── catalogo.js                 # LISTA de livros e artes (edite aqui)
├── livros/
│   ├── index.html                  # lista de livros
│   └── contrastes/
│       ├── index.html              # landing page do CONTRASTES
│       └── images/                 # capa.jpeg, quartacapa.jpeg, sobreoautor.jpeg,
│                                   # sobreolivro.jpeg e as 7 obras (01_… a 07_…)
└── artes/
    └── index.html                  # lista de artes
```

> **Importante:** coloque a sua pasta `images` (com `capa.jpeg`, `quartacapa.jpeg`, `sobreoautor.jpeg`, `sobreolivro.jpeg` e as sete obras) dentro de `livros/contrastes/`. A página inicial também usa `livros/contrastes/images/capa.jpeg` e `sobreoautor.jpeg`.

## Como rodar localmente

Use um servidor local, porque os links apontam para pastas:

```bash
npx serve .
```

Ou use a extensão **Live Server** do VS Code.

## Como adicionar um novo livro

1. Copie a pasta `livros/contrastes/` para `livros/nome-do-livro/` e edite o `index.html` (textos, preço, imagens).
2. Abra `assets/catalogo.js` e acrescente um bloco em `LIVROS`:
   ```js
   {titulo:"NOME DO LIVRO",subtitulo:"Subtítulo",resumo:"Texto curto.",
    url:"livros/nome-do-livro/",capa:"livros/nome-do-livro/images/capa.jpeg",
    alt:"Capa do livro NOME DO LIVRO",cta:"Conhecer e comprar"}
   ```
3. Inclua o endereço novo no `sitemap.xml`.

O cartão aparece sozinho em **Livros** e, se for o primeiro da lista, em destaque na página inicial.

## Como adicionar uma nova arte

Igual aos livros: crie `artes/nome-da-arte/index.html` (pode partir da landing do CONTRASTES) e acrescente um bloco em `ARTES`, no `assets/catalogo.js`. O aviso "em breve" some quando houver a primeira arte.

## WhatsApp

O número está **indisponível por enquanto**. Na landing do CONTRASTES, o campo fica em `CFG.whatsapp`, no início do `<script>`, e está vazio (`""`). Com ele vazio, a página mostra "WhatsApp em breve", e depois de gerar o Pix aparece o aviso de atendimento indisponível.

Quando o número novo existir, preencha no formato DDI+DDD+número, por exemplo `"5582999999999"`. Os links e o botão de comprovante voltam sozinhos. No rodapé do site principal (`index.html`, `livros/index.html`, `artes/index.html` e `404.html`), troque o texto "Atendimento por WhatsApp: em breve." pelo link do WhatsApp.

## Publicar com o domínio literaturaeartedigital.com.br (GitHub Pages)

1. Envie todos os arquivos para o repositório, com `index.html` na raiz.
2. No repositório, vá em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.
3. Em **Custom domain**, digite `literaturaeartedigital.com.br` e salve. Faça isso **antes** de configurar o DNS (o GitHub recomenda, por segurança).
4. No painel do **Registro.br**, na área de DNS do domínio (edição da zona, se o domínio usa os servidores do próprio Registro.br), crie:

   | Tipo | Nome | Valor |
   |---|---|---|
   | A | @ (raiz) | 185.199.108.153 |
   | A | @ (raiz) | 185.199.109.153 |
   | A | @ (raiz) | 185.199.110.153 |
   | A | @ (raiz) | 185.199.111.153 |
   | CNAME | www | `SEU-USUARIO.github.io` |

   O CNAME aponta para `SEU-USUARIO.github.io`, sem o nome do repositório.
5. Aguarde a propagação do DNS (pode levar até 24 horas).
6. Volte em **Settings → Pages** e marque **Enforce HTTPS** quando a opção estiver disponível.

Os endereços acima foram conferidos na documentação do GitHub Pages; confira lá se houve mudança na data da publicação: https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site

## Privacidade

Tudo no repositório fica visível no site. A chave Pix está na landing do CONTRASTES, e o número de WhatsApp fica fora por enquanto. Ao colocar o novo número, lembre que ele passa a ficar visível a quem abrir o código. Veja a conversa sobre usar uma função em servidor se for necessário esconder.

## Direitos

Textos, capas e obras de arte pertencem a **Alan Ribeiro** e não podem ser reutilizados sem autorização.

Página desenvolvida por João Silva Ribeiro — [GitHub](https://github.com/joaosr8) · [LinkedIn](https://www.linkedin.com/in/joaosr8/)

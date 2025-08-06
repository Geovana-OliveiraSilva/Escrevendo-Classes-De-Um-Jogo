# 🧠 Escrevendo Classes de um Jogo em JavaScript

## 📘 Descrição

Este projeto foi desenvolvido como parte do desafio **"Escrevendo as classes de um Jogo"** da plataforma **DIO (Digital Innovation One)**.  
O objetivo é simular, diferentes tipos de heróis que realizam ataques personalizados com base em seu tipo.

Cada personagem possui:

- Propriedades: `nome`, `idade` e `tipo`
- Um método `attack()` que exibe uma mensagem específica conforme o tipo do herói
- Interação com **HTML/CSS/JavaScript** para exibir a mensagem e animação no navegador

---

## 🧩 Conceitos aplicados

✔️ Variáveis  
✔️ Operadores  
✔️ Estruturas de Decisão  
✔️ Laços de Repetição 
✔️ Funções  
✔️ Classes e Objetos

---

## 🧙‍♂️ Tipos de Personagens e Ataques

| Tipo        | Exemplo de Ataque                        | Borda (cor) |
|-------------|-------------------------------------------|--------------|
| **Mago**     | O mago atacou usando magia               | Roxo         |
| **Guerreiro**| O guerreiro atacou usando espada         | Vermelho     |
| **Monge**    | O monge atacou usando artes marciais     | Verde        |
| **Ninja**    | O ninja atacou usando shuriken           | Azul         |

---

## 🖼️ Imagens e Gifs

As imagens dos personagens e os GIFs de ataque foram personalizados para cada tipo e organizados na pasta `assets/`.

Cada vez que o botão “Attack” é clicado:

- A imagem estática é trocada por um GIF animado de ataque
- Uma mensagem com o tipo de ataque é exibida
- Após 3,5 segundos, tudo volta ao normal

---

## 📁 Estrutura do Projeto

```
CLASSE-HEROI-JOGO/
├── assets/
│   ├── GIF_Ataque_Kakashi_Ninja.gif
│   ├── GIF_Ataque_Naruto_Mago.gif
│   ├── GIF_Ataque_Rock_Lee_Monge.gif
│   ├── GIF_Ataque_Sasuke_Guerreiro.gif
│   ├── KAKASHI-NINJA-Impacto.png
│   ├── ...
│   └── SASUKE-GUERREIRO-Recuperação.png
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── index.html
└── README.md
└── LICENSE.md
```

---

## 💻 Como Executar

1. Clone o repositório:
```bash
git clone  https://github.com/Geovana-OliveiraSilva/Escrevendo-Classes-De-Um-Jogo.git
```

2. Abra o arquivo `index.html` em seu navegador.

---

## ✨ Autor
Desenvolvido por **Geovana Oliveira**    
Desafio prático da plataforma **DIO - Digital Innovation One** 
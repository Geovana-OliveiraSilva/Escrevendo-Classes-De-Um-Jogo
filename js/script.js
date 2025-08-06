// Classe Hero para representar cada personagem
class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let move;

        // Verifica o tipo do herói para decidir qual ataque mostrar
        switch (this.type) {
            case "mago":
                move = "Usou Magia";
                break;
            case "guerreiro":
                move = "Usou Espada";
                break;
            case "monge":
                move = "Usou Artes Marciais";
                break;
            case "ninja":
                move = "Usou Shuriken";
                break;
            default:
                move = "Usou um movimento desconhecido";
        }

        return `O ${this.type} atacou usando ${move}`;
    }
}

// Função principal que é chamada quando o botão "attack" é clicado
function attackCharacter(type) {
    let name = "";
    let age = 0;
    let image = document.getElementById(`image-${type}`);
    let originalImage = image.src;
    let gif = "";

    // Atribui valores com base no tipo do personagem
    if (type === "mago") {
        name = "Naruto";
        age = 20;
        gif = "assets/Gif_Ataque_Naruto_Mago.gif";
    } else if (type === "guerreiro") {
        name = "Sasuke";
        age = 22;
        gif = "assets/Gif_Ataque_Sasuke_Guerreiro.gif";
    } else if (type === "monge") {
        name = "Rock Lee";
        age = 35;
        gif = "assets/Gif_Ataque_Rock_Lee_Monge.gif";
    } else if (type === "ninja") {
        name = "Kakashi";
        age = 30;
        gif = "assets/GIF_Ataque_Kakashi_Ninja.gif";
    }

    // Cria o objeto com as propriedades do personagem
    const hero = new Hero(name, age, type);

    // Chama o método de ataque e pega a mensagem retornada
    const message = hero.attack();

    // Exibe a mensagem de ataque no card correspondente
    document.getElementById(`message-${type}`).innerText = message;

    // Troca a imagem estática pelo gif de ataque
    image.src = gif;

    // Após 5 segundos, volta para a imagem original
    setTimeout(() => {
        image.src = originalImage;
    }, 3500);
    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        document.getElementById(`message-${type}`).innerText = '';
    }, 3500);
}

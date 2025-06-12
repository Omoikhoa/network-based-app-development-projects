const {v4: uuidv4} = require('uuid');

const mangas = [
    {
        id: '1',
        title: 'Beserk Deluxe Volume 1',
        seller: 'Alex Ilevbare',
        condition: 'New',
        price: 39.99,
        details: 'Set in a dark medieval fantasy world, Berserk follows Guts, a lone mercenary with a massive sword, as he battles demonic forces while struggling with his own inner darkness. This deluxe edition contains the first three volumes of the brutal and deeply psychological series.',
        image: '/images/item1.jpg',
        active: true
    },
    {
        id: '2',
        title: 'Jujutsu Kaisen Volume 0',
        seller: 'Victor Ilevbare',
        condition: 'New',
        price: 10.99,
        details: 'This prequel to Jujutsu Kaisen introduces Yuta Okkotsu, a high school student haunted by his childhood friend’s curse. Yuta joins Jujutsu High to learn how to control his powerful curse and face deadly spirits alongside sorcerers.',
        image: '/images/item2.jpg',
        active: true
    },
    {
        id: '3',
        title: 'Chainsaw Man Volume 1',
        seller: 'Carlos Salgaldo',
        condition: 'Like New',
        price: 9.99,
        details: 'Denji, a debt-ridden teenager, is killed by a demon but reborn with the heart of his pet devil, Pochita, transforming into Chainsaw Man. He’s recruited by the Public Safety Bureau to hunt devils in exchange for basic survival and a chance at a normal life.',
        image: '/images/item3.jpg',
        active: true
    },
    {
        id: '4',
        title: 'Attack on Titan Volume 1',
        seller: 'Amariss Neal',
        condition: 'Good',
        price: 8.99,
        details: 'Humanity is on the brink of extinction, living behind massive walls to protect themselves from giant, human-eating Titans. When the wall is breached, young Eren Yeager vows to destroy every Titan after witnessing a personal tragedy.',
        image: '/images/item4.jpg',
        active: true
    },
    {
        id: '5',
        title: 'One Piece Volume 1',
        seller: 'Rosemary Ilevbare',
        condition: 'Fair',
        price: 7.99,
        details: 'Monkey D. Luffy, a young boy with rubber powers from eating a magical fruit, sets sail on a grand adventure to find the legendary One Piece treasure and become the King of the Pirates, meeting friends and foes along the way.',
        image: '/images/item5.jpg',
        active: true
    },
    {
        id: '6',
        title: 'Demon Slayer Volume 1',
        seller: 'Emmanuel Ilevbare',
        condition: 'Poor',
        price: 6.99,
        details: 'Tanjiro Kamado’s peaceful life is shattered when his family is slaughtered by demons, and his sister is turned into one. He becomes a demon slayer to avenge his family and find a cure for his sister, embarking on a dangerous journey filled with demons and fierce battles.',
        image: '/images/item6.jpg',
        active: true
    },
    {
        id: '7',
        title: 'Uzumaki (3-in-1 Deluxe Edition)',
        seller: 'Junji Ito',
        condition: 'New',
        price: 21.99,
        details: 'Set in the cursed town of Kurouzu-cho, it follows Kirie Goshima and her boyfriend, Shuichi Saito, as they confront a terrifying obsession with spirals that leads to madness and grotesque transformations among the townsfolk. This deluxe edition features high-quality artwork, bonus content, and is perfect for fans of psychological horror and the macabre.',
        image: '/images/item7.jpg',
        active: false
    }
];

exports.find = () => mangas;

exports.findById = id => mangas.find(manga=>manga.id === id);

exports.save = function (manga) {
    manga.id = uuidv4();
    manga.active = true;
    mangas.push(manga);
};

exports.updateById = function(id, newManga) {
    let manga = mangas.find(manga => manga.id === id);
    if (manga) {
        Object.assign(manga, newManga);
        return true;
    } else {
        return false;
    }
};

exports.deleteById = function(id) {
    let index = mangas.findIndex(manga =>manga.id === id);
    if(index !== -1) {
        mangas.splice(index, 1);
        return true;
    } else {
        return false;
    }
};


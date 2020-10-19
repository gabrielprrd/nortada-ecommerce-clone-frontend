const PRODUCTS_LIST = [
  {
    title: 'Lager',
    info: {
      mainDescription:
        'Chegou uma Lager como tem de ser: 100% Malte. Com um dourado elegante e uma espuma cremosa, esta lufada de ar fresco é o par perfeito para dar mais sabor a cada momento! É caso para dizer: É boua comó Malte!',
      subDescription:
        'Dourado perfeito, espuma densa e consistente e agradáveis notas de fim de boca. É o equilíbrio perfeito entre complexo e simples. Sempre refrescante, é ideal para qualquer momento de consumo.',
      family: 'Lager',
      style: 'European Pale Lager',
      abv: 5.0,
      IBU: 18,
    },
    img: 'blablajpeg',
    quantityOptions: [
      {
        quantity: 'Pack 10',
        price: 14.6,
      },
      {
        quantity: 'Pack 24',
        price: 32.2,
      },
    ],
  },
  {
    title: 'Dark Lager',
    info: {
      mainDescription:
        'De cor preta penetrante e espuma cremosa, o lado negro da Lager chegou a transbordar de sabor! Suave, sem nunca perder o equilíbrio, é deliciosamente fácil de beber. Com esta corrente refrescante a empurrar, ninguém vai querer faltar a este encontro às escuras!',
      subDescription:
        'De cor preta, os maltes especiais utilizados conferem a esta cerveja um sabor ligeiramente torrado, coroado por uma espuma cremosa e duradoura. De amargor suave, é extremamente equilibrada, ideal para qualquer momento de consumo.',
      family: 'Lager',
      style: 'Dark Lager',
      abv: 5.0,
      IBU: 20,
    },
    img: 'blablajpeg',
    quantityOptions: [
      {
        quantity: 'Pack 10',
        price: 14.6,
      },
      {
        quantity: 'Pack 24',
        price: 32.2,
      },
    ],
  },
  {
    title: 'Vienna Lager',
    info: {
      mainDescription:
        'Original da cidade de Vienna, chega um estilo que tens mesmo de visitar. Com notas afinadas de malte tostado e uma cor cobre vibrante, acorda o Beethoven que há em ti e deixa-te levar por este verdadeiro hino à alegria!',
      subDescription:
        'O malte Vienna confere a esta cerveja uma tonalidade cobre e um aroma e sabor distinto, com notas subtis de malte tostado. De corpo médio e amargor ligeiro, é a perfeita combinação de cor e sabor.',
      family: 'Lager',
      style: 'Vienna Lager',
      abv: 5.2,
      IBU: 22,
    },
    img: 'blablajpeg',
    quantityOptions: [
      {
        quantity: 'Pack 10',
        price: 20.1,
      },
      {
        quantity: 'Pack 24',
        price: 44.7,
      },
    ],
  },
  {
    title: 'Brown Porter',
    info: {
      mainDescription:
        'Popularizada pelos operários nos portos de Londres, chega o combustível para mais um dia de vento em popa! Castanha escura e com notas de caramelo e café, carrega o contentor e estás pronto para qualquer maré!',
      subDescription:
        'De uma profunda cor castanha e espuma densa de cor bege é uma cerveja de aroma e amargor suave, com notas subtis de caramelo e café. Extremamente equilibrada, é a medida certa de corpo e sabor.',
      family: 'Ale',
      style: 'Brown Porter',
      abv: 5.2,
      IBU: 22,
    },
    img: 'blablajpeg',
    quantityOptions: [
      {
        quantity: 'Pack 10',
        price: 20.1,
      },
      {
        quantity: 'Pack 24',
        price: 44.7,
      },
    ],
  },
  {
    title: 'Weiss Bier',
    info: {
      mainDescription:
        'Nascida na Baviera, chega um estilo cuja produção foi disputada pelos nobres alemães. Feita com malte de trigo, é uma lufada refrescante com notas subtis de banana. A última vez que o King Kong foi visto, tinha uma caixa destas debaixo do braço. Ainda hoje continua a monte!',
      subDescription:
        'De aparência turva e espuma densa, apresenta um sabor e aroma característico com notas subtis de banana. De corpo médio e amargor ligeiro, é a cerveja ideal para refrescar uma tarde de calor.',
      family: 'Ale',
      style: 'Weiss Bier',
      abv: 5.3,
      IBU: 8,
    },
    img: 'blablajpeg',
    quantityOptions: [
      {
        quantity: 'Pack 10',
        price: 20.1,
      },
      {
        quantity: 'Pack 24',
        price: 44.7,
      },
    ],
  },
  {
    title: 'India Pale Ale',
    info: {
      mainDescription:
        'Do lúpulo usado para conservar a cerveja nas viagens dos Britânicos até à India, chega um estilo que é um vendaval de amargor e aromas tropicais. Infelizmente tivemos de abortar o transporte marítimo… já não podíamos com os Piratas!',
      subDescription:
        'Com uma quente cor dourada e uma espuma densa, é extremamente aromática com notas de frutos tropicais. Bastante lupulada, destaca-se pelo seu sabor intenso e amargor acentuado.',
      family: 'Ale',
      style: 'India Pale Ale',
      abv: 6,
      IBU: 50,
    },
    img: 'blablajpeg',
    quantityOptions: [
      {
        quantity: 'Pack 10',
        price: 20.1,
      },
      {
        quantity: 'Pack 24',
        price: 44.7,
      },
    ],
  },
  {
    title: 'Imperial Stout',
    info: {
      mainDescription:
        'Forte e majestosa, chega a rainha das Stouts: a cerveja preferida dos Czares Russos. De espuma densa, com uma brisa de café e notas de chocolate, só é pena não se multiplicar como uma matrioska!',
      subDescription:
        'A sua impenetrável cor escura é coroada por uma cremosa espuma de cor bege. Uma cerveja encorpada, com um intenso aroma e sabor a malte torrado, de onde se destacam elegantes notas de café e chocolate preto.',
      family: 'Ale',
      style: 'Imperial Stout',
      abv: 8.5,
      IBU: 30,
    },
    img: 'blablajpeg',
    quantityOptions: [
      {
        quantity: 'Pack 10',
        price: 25.6,
      },
      {
        quantity: 'Pack 24',
        price: 57.3,
      },
    ],
  },
  {
    title: 'Xmas Rebels',
    info: {
      mainDescription:
        'Os gnomos deram a fuga da Lapónia e assaltaram a nossa fábrica. Os pequenotes estavam cheios de sede e no meio da confusão encheram os tanques de chocolate! Assim nasce a Chocolate Porter – O milagre de Natal com notas de cacau e um toque suave de baunilha. Este ano não há prendas para ninguém porque no final até o barrigudo se juntou à festa!',
      abv: 7.5,
      IBU: 18,
    },
    img: 'blablajpeg',
    quantityOptions: [
      {
        quantity: 'Pack 10',
        price: 20.6,
      },
    ],
  },
  {
    title: 'Mixpack',
    info: {
      mainDescription:
        'Chegou o Mixpack da Nortada. Se queres experimentar mais de uma das nossas cervejas, aproveita! Aqui tens disponível 5 estilos de cerveja diferentes, com 2 garrafas cada!',
    },
    img: 'blablajpeg',
    quantityOptions: [
      {
        quantity: 'Pack 10',
        price: 20.1,
      },
    ],
  },
  {
    title: 'Kveiking',
    info: {
      mainDescription:
        'Os Vikings invadiram a Nortada e em apenas 48 horas nasceu a Kveiking. Uma cerveja cheia de aromas de tangerina e laranja, provenientes do lúpulo Mandarina Bavaria e da levedura nórdica Kveik, pró em fermentar a cerveja quase tão rápido como eles são a bebê-la! Enche o teu copo e toca a brindar!',
      subDescription: 'Skål!',
      family: 'Ale',
      style: 'Kveiking Farmhouse IPA',
      abv: 6.6,
      IBU: 60,
    },
    img: 'blablajpeg',
    quantityOptions: [
      {
        quantity: 'Pack 10',
        price: 20.1,
      },
      {
        quantity: 'Pack 24',
        price: 44.7,
      },
    ],
  },
  {
    title: 'The Twist',
    info: {
      mainDescription:
        'A American Wheat é o twist americano da cerveja de trigo alemã. Puxamos pela carbonatação e adicionamos os lúpulos Hallertau Blanc e Hull Mellon para lhe dar notas de uva, melão e pera. Com perfil de espumante e muito refrescante, pega no copo e let’s do the twist!',
      family: 'Ale',
      style: 'American Wheat',
      abv: 5,
      IBU: 22,
    },
    img: 'blablajpeg',
    quantityOptions: [
      {
        quantity: 'Pack 10',
        price: 29.0,
      },
    ],
  },
];

module.exports = PRODUCTS_LIST;

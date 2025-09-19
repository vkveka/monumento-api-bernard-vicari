const MONUMENTS = [
  {
    "title": "Tour Eiffel",
    "country": "France",
    "city": "Paris",
    "buildYear": 1889,
    "picture": "https://github.com/ehformation/monumento/blob/main/images/tour-eiffel.png?raw=true",
    "description": "Symbole emblématique de Paris, la Tour Eiffel a été construite pour l'exposition universelle de 1889.",
    "created": new Date()
  },
  {
    "title": "Statue de la Liberté",
    "country": "États-Unis",
    "city": "New York",
    "buildYear": 1886,
    "picture": "https://github.com/ehformation/monumento/blob/main/images/statue-liberte.png?raw=true",
    "description": "Offerte par la France, cette statue est un symbole de liberté situé à l'entrée du port de New York.",
    "created": new Date()
  },
  {
    "title": "Colisée",
    "country": "Italie",
    "city": "Rome",
    "buildYear": 80,
    "picture": "https://github.com/ehformation/monumento/blob/main/images/colisee.png?raw=true",
    "description": "Ancien amphithéâtre romain, célèbre pour ses combats de gladiateurs et son architecture impressionnante.",
    "created": new Date()
  },
  {
    "title": "Big Ben",
    "country": "Royaume-Uni",
    "city": "Londres",
    "buildYear": 1859,
    "picture": "https://github.com/ehformation/monumento/blob/main/images/bigben.png?raw=true",
    "description": "Horloge monumentale de Londres, située au sommet de la tour Elizabeth, symbole du Royaume-Uni.",
    "created": new Date()
  },
  {
    "title": "Taj Mahal",
    "country": "Inde",
    "city": "Agra",
    "buildYear": 1632,
    "picture": "https://github.com/ehformation/monumento/blob/main/images/tajmahal.png?raw=true",
    "description": "Mausolée en marbre blanc construit par l'empereur Shah Jahan en mémoire de son épouse Mumtaz Mahal.",
    "created": new Date()
  },
  {
    "title": "Christ Rédempteur",
    "country": "Brésil",
    "city": "Rio de Janeiro",
    "buildYear": 1931,
    "picture": "https://github.com/ehformation/monumento/blob/main/images/corcovado.png?raw=true",
    "description": "Statue monumentale du Christ surplombant la baie de Rio, symbole du Brésil et de la foi chrétienne.",
    "created": new Date()
  },
  {
    "title": "Pyramide de Khéops",
    "country": "Égypte",
    "city": "Gizeh",
    "buildYear": 2560,
    "picture": "https://github.com/ehformation/monumento/blob/main/images/kehops.png?raw=true",
    "description": "La plus grande des pyramides d'Égypte, construite comme tombeau pour le pharaon Khéops.",
    "created": new Date()
  },
  {
    "title": "Palais de Versailles",
    "country": "France",
    "city": "Versailles",
    "buildYear": 1682,
    "picture": "https://github.com/ehformation/monumento/blob/main/images/versaille.png?raw=true",
    "description": "Ancienne résidence royale française, célèbre pour ses jardins, ses fontaines et la galerie des Glaces.",
    "created": new Date()
  },
  {
    "title": "Machu Picchu",
    "country": "Pérou",
    "city": "Cusco",
    "buildYear": 1450,
    "picture": "https://github.com/ehformation/monumento/blob/main/images/machupiccu.png?raw=true",
    "description": "Ancienne cité inca perchée dans les Andes, découverte au début du XXe siècle.",
    "created": new Date()
  },
  {
    "title": "Parthénon",
    "country": "Grèce",
    "city": "Athènes",
    "buildYear": 447,
    "picture": "https://github.com/ehformation/monumento/blob/main/images/pantheon.png?raw=true",
    "description": "Temple dédié à la déesse Athéna, construit sur l'Acropole d'Athènes, symbole de la Grèce antique.",
    "created": new Date()
  }
];

module.exports = MONUMENTS
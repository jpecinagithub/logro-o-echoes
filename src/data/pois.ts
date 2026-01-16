export interface POI {
  id: number;
  order: number;
  title: string;
  lat: number;
  lng: number;
  description: string;
  audioSrc: string;
  imageSrc?: string;
}

export const POIS: POI[] = [
  {
    id: 1,
    order: 1,
    title: "Instituto Sagasta",
    lat: 42.46535688348829,
    lng: -2.442691619163417,
    description: "Centro educativo histórico de Logroño, ubicado en la Glorieta del Doctor Zubía. Aquí estudió San Josemaría Escrivá durante su juventud, forjando los cimientos de su formación académica.",
    audioSrc: "/assets/audio/1-instituto-sagasta.wav",
    imageSrc: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format"
  },
  {
    id: 2,
    order: 2,
    title: "Seminario Conciliar",
    lat: 42.46551018864082,
    lng: -2.4457134197441577,
    description: "Histórico seminario diocesano situado en la Avenida de la Paz. Lugar fundamental en la vocación sacerdotal de San Josemaría.",
    audioSrc: "/assets/audio/2-seminario-conciliar.wav",
    imageSrc: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800&auto=format"
  },
  {
    id: 3,
    order: 3,
    title: "La gran ciudad de Londres",
    lat: 42.4663982033186,
    lng: -2.448638666566208,
    description: "Antiguo establecimiento comercial de Antonio Garrigosa en Mercado, 28. Tienda de telas donde trabajó el padre de San Josemaría.",
    audioSrc: "/assets/audio/3-ciudad-londres.wav",
    imageSrc: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format"
  },
  {
    id: 4,
    order: 4,
    title: "Colegio San Antonio de Padua",
    lat: 42.466200399589134,
    lng: -2.4509217094468063,
    description: "Institución educativa ubicada en la Carretera de Navarra. Colegio de los Escolapios donde San Josemaría recibió parte de su educación.",
    audioSrc: "/assets/audio/4-san-antonio.wav",
    imageSrc: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format"
  },
  {
    id: 5,
    order: 5,
    title: "Calle Canalejas",
    lat: 42.46610027415672,
    lng: -2.4536460890529526,
    description: "Calle histórica del centro de Logroño. Aquí vivió la familia Escrivá en uno de sus domicilios durante su estancia en la ciudad.",
    audioSrc: "/assets/audio/5-calle-canalejas.wav",
    imageSrc: "https://images.unsplash.com/photo-1464938050520-ef2571e87c38?w=800&auto=format"
  },
  {
    id: 6,
    order: 6,
    title: "Las huellas en la nieve",
    lat: 42.46684467681274,
    lng: -2.4487014797911186,
    description: "Lugar conmemorativo en la Calle Marqués de San Nicolás donde San Josemaría Escrivá vio las huellas de un carmelita descalzo en la nieve, momento que marcó profundamente su vocación.",
    audioSrc: "/assets/audio/6-huellas-nieve.wav",
    imageSrc: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&auto=format"
  },
  {
    id: 7,
    order: 7,
    title: "La Iglesia de Santiago",
    lat: 42.467991447546865,
    lng: -2.447316929500878,
    description: "Iglesia de Santiago el Real, templo histórico del Camino de Santiago. Lugar de oración frecuente para la familia Escrivá.",
    audioSrc: "/assets/audio/7-santiago.wav",
    imageSrc: "https://images.unsplash.com/photo-1548625149-e2c05dd82e8f?w=800&auto=format"
  },
  {
    id: 8,
    order: 8,
    title: "El puente de Hierro",
    lat: 42.46840556255151,
    lng: -2.4468010520953327,
    description: "Puente histórico sobre el río Ebro, construido en hierro. Símbolo de la modernización de Logroño a principios del siglo XX.",
    audioSrc: "/assets/audio/8-puente-hierro.wav",
    imageSrc: "https://images.unsplash.com/photo-1545566372-8f1c1c0f1d5d?w=800&auto=format"
  },
  {
    id: 9,
    order: 9,
    title: "La Calle Sagasta",
    lat: 42.46754571832259,
    lng: -2.4466997648805777,
    description: "Calle emblemática del centro histórico de Logroño. Arteria principal de la vida comercial y social de la época.",
    audioSrc: "/assets/audio/9-calle-sagasta.wav",
    imageSrc: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format"
  },
  {
    id: 10,
    order: 10,
    title: "La Concatedral de La Redonda",
    lat: 42.46672739573979,
    lng: -2.4450058130298826,
    description: "Concatedral de Santa María de la Redonda, símbolo arquitectónico de Logroño. Templo donde San Josemaría recibió sacramentos importantes.",
    audioSrc: "/assets/audio/10-concatedral.wav",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format"
  }
];

export const MAP_CENTER = {
  lat: 42.467,
  lng: -2.448
};

export const MAP_ZOOM = 16;

export interface AlbumPhoto {
  id: string;
  src: string;
  title: string;
  description: string;
  year?: string;
}

export const ALBUM_PHOTOS: AlbumPhoto[] = [
  {
    id: "img-01",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format",
    title: "La familia Escrivá",
    description: "San Josemaría con su familia durante su estancia en Logroño. La familia se trasladó a esta ciudad en 1915, cuando Josemaría tenía 13 años.",
    year: "1915"
  },
  {
    id: "img-02",
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format",
    title: "Instituto Sagasta",
    description: "El prestigioso Instituto Sagasta donde Josemaría cursó el bachillerato. Destacó por su aplicación en los estudios.",
    year: "1916"
  },
  {
    id: "img-03",
    src: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=800&auto=format",
    title: "El Seminario",
    description: "El Seminario Conciliar de Logroño, donde comenzó su formación sacerdotal tras discernir su vocación.",
    year: "1918"
  },
  {
    id: "img-04",
    src: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&auto=format",
    title: "Las huellas en la nieve",
    description: "En el invierno de 1917-1918, Josemaría vio las huellas de un carmelita descalzo en la nieve. Este momento fue decisivo en su vocación.",
    year: "1918"
  },
  {
    id: "img-05",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format",
    title: "La Concatedral",
    description: "La Concatedral de La Redonda, corazón espiritual de Logroño y lugar frecuentado por la familia Escrivá.",
    year: "1919"
  },
  {
    id: "img-06",
    src: "https://images.unsplash.com/photo-1464938050520-ef2571e87c38?w=800&auto=format",
    title: "Calles de Logroño",
    description: "Las calles del centro histórico de Logroño, testigos de la juventud de San Josemaría y sus paseos familiares.",
    year: "1920"
  },
  {
    id: "img-07",
    src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format",
    title: "Calle Sagasta",
    description: "La emblemática Calle Sagasta, centro neurálgico de la vida social logroñesa de la época.",
    year: "1921"
  },
  {
    id: "img-08",
    src: "https://images.unsplash.com/photo-1545566372-8f1c1c0f1d5d?w=800&auto=format",
    title: "El río Ebro",
    description: "El río Ebro y sus puentes, parte fundamental del paisaje urbano que conoció San Josemaría.",
    year: "1922"
  },
  {
    id: "img-09",
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format",
    title: "Comercios históricos",
    description: "Los comercios del centro, incluyendo 'La Gran Ciudad de Londres' donde trabajó su padre tras dificultades económicas.",
    year: "1923"
  },
  {
    id: "img-10",
    src: "https://images.unsplash.com/photo-1548625149-e2c05dd82e8f?w=800&auto=format",
    title: "Iglesia de Santiago",
    description: "La Iglesia de Santiago el Real, parte del rico patrimonio religioso de Logroño visitado por la familia.",
    year: "1924"
  }
];

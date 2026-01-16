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
    src: "/assets/album/foto10.jpg",
    title: "Josemaría de niño",
    description: "Josemaría Escrivá en su infancia, nacido en Barbastro el 9 de enero de 1902.",
    year: "1903"
  },
  {
    id: "img-02",
    src: "/assets/album/foto3.jpg",
    title: "La familia Escrivá",
    description: "Josemaría con sus padres, José Escrivá y Dolores Albás. La familia fue un pilar fundamental en su formación cristiana.",
    year: "1910"
  },
  {
    id: "img-03",
    src: "/assets/album/foto8.jpg",
    title: "Josemaría con su padre",
    description: "Josemaría paseando con su padre José en el Espolón de Logroño. Su padre fue un ejemplo de integridad y fe para él.",
    year: "1916"
  },
  {
    id: "img-04",
    src: "/assets/album/foto6.jpg",
    title: "Josemaría joven",
    description: "Retrato de Josemaría durante su juventud en Logroño, donde cursó el bachillerato en el Instituto Sagasta.",
    year: "1917"
  },
  {
    id: "img-05",
    src: "/assets/album/foto5.jpg",
    title: "El joven Josemaría",
    description: "Josemaría Escrivá en su época de estudiante, destacando por su aplicación y seriedad en los estudios.",
    year: "1918"
  },
  {
    id: "img-06",
    src: "/assets/album/foto4.jpg",
    title: "Seminarista en Logroño",
    description: "Josemaría como seminarista en el Seminario Conciliar de Logroño, donde comenzó su formación sacerdotal tras ver las huellas en la nieve.",
    year: "1919"
  },
  {
    id: "img-07",
    src: "/assets/album/foto2.jpg",
    title: "El joven sacerdote",
    description: "Josemaría Escrivá como sacerdote joven, tras su ordenación el 28 de marzo de 1925 en Zaragoza.",
    year: "1925"
  },
  {
    id: "img-08",
    src: "/assets/album/foto7.jpg",
    title: "San Josemaría",
    description: "San Josemaría Escrivá de Balaguer, fundador del Opus Dei. Fue canonizado por el Papa Juan Pablo II el 6 de octubre de 2002.",
    year: "1970"
  },
  {
    id: "img-09",
    src: "/assets/album/foto1.jpg",
    title: "Placa conmemorativa",
    description: "Placa en Logroño que recuerda el lugar donde Josemaría vio las huellas de un carmelita descalzo en la nieve, momento decisivo en su vocación sacerdotal.",
    year: "2002"
  }
];

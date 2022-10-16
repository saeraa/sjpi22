interface Project {
  course: number,
  name: string,
  description: string,
  link: string,
  repo: string
}

export const projects : Project[] = [
  {
    course: 0,
    name: "Intro till webbutveckling quiz",
    description: "En enkel sammanfattning av frågor som vi lärt oss på kursen. HTML, CSS och vanilla JavaScript.",
    link: "https://saeraa.github.io/kunskapskoll/",
    repo: "https://github.com/saeraa/kunskapskoll"
  },
  {
    course: 0,
    name: "ToDo",
    description: 'ToDo-lista för att ta med grunderna i JavaScript. Har utöver kraven för uppgiften, lagt till persistens i form av local storage-"databas" och lite animationer.',
    link: "https://saeraa.github.io/220904-todo/",
    repo: "https://github.com/saeraa/220904-todo"
  },
  {
    course: 0,
    name: "Online CV",
    description: 'Online CV med fokus på HTML och CSS. "Skapa en webbsida som presenterar dig som person och ditt CV."',
    link: "https://saeraa.github.io/uppg7/",
    repo: "https://github.com/saeraa/uppg7"
  },
  {
    course: 1,
    name: "ToDo",
    description: 'Samma projekt från föregående kurs, nu med utbytningsbar CSS och animationer.',
    link: "https://saeraa.github.io/220904-todo/",
    repo: "https://github.com/saeraa/220904-todo"
  }
]
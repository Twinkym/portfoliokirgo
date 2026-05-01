export const NAV_TREE = {
  name: "Menu",
  type: "branch",
  children: [
    { name: "About", type: "leaf", url: "#about" },
    {
      name: "Portfolio",
      type: "branch",
      children: [
        {
          name: "PHP",
          type: "branch",
          children: [
            { name: "Micro", type: "leaf", url: "/pages/project.html?project=php-micro" },
            { name: "CRM", type: "leaf", url: "/pages/project.html?project=php-crm" }
          ]
        },
        {
          name: "Java",
          type: "branch",
          children: [
            { name: "ERP My Restaurant", type: "leaf", url: "/pages/project.html?project=java-erpmyrestaurant"},
            { name: "Software Bancario", type: "leaf", url: "/pages/project.html?project=java-softwarebancario"}
          ]
        },
        {
            name: "C#",
            type: "branch",
            children: [
              { name: "Cirsa", type: "leaf", url: "/pages/project.html?project=csharp-cirsa"}
            ]
        },
        {
          name: "Python",
          type: "branch",
          children: []
        }
      ]
    },
    {
      name: "Juegos",
      type: "branch",
      children: [
        { name: "Galactico", type: "leaf", url: "/pages/project.html?project=juegos-galactico"},
        { name: "Tetrico", type: "leaf", url: "/pages/project.html?project=juegos-tetrico"}
      ]
    },
    {
      name: "Librerias",
      type: "branch",
      children: [
        { name: "validators", type: "leaf", url: "/pages/project.html?project=librerias-validators"},
      ]
    },
    { name: "Contact", type: "leaf", url: "/pages/contact.html" },
    { name: "Registrarse", type: "leaf", url: "/pages/subscribe.html" }
  ]
};
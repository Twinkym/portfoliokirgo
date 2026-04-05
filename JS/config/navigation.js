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
            { name: "Micro", type: "leaf", url: "/php/micro" },
            { name: "CRM", type: "leaf", url: "/php/crm" }
          ]
        },
        {
          name: "Java",
          type: "branch",
          children: [
            { name: "ERP My Restaurant", type: "leaf", url: "/java/erpMyRestaurant"},
            { name: "Software Bancario", type: "leaf", url: "/java/softwareBancario"}
          ]
        },
        {
            name: "C#",
            type: "branch",
            children: [
              { name: "Cirsa", type: "leaf", url: "/csharp/Cirsa"}
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
        { name: "Galactico", type: "leaf", url: "/juegos/talactico"},
        { name: "Tetrico", type: "leaf", url: "/juegos/tetrico"}
      ]
    },
    {
      name: "Librerias",
      type: "branch",
      children: [
        { name: "validators", type: "leaf", url: "/librerias/validators"},
      ]
    },
    { name: "Contact", type: "leaf", url: "/pages/contact.html" },
    { name: "Registrarse", type: "leaf", url: "/pages/subscribe.html" }
  ]
};
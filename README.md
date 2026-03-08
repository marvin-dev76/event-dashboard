# EventDash

A simplified event management dashboard built with React, TypeScript, and Chakra UI.

> Panel de administración de eventos construido con React, TypeScript y Chakra UI.

<img width="1889" height="904" alt="Screenshot 2026-03-08 164759" src="https://github.com/user-attachments/assets/4a91f8e3-8b5a-469d-bb7b-f288a9e1d8ed" />

---

## Stack

- **React 19** + **TypeScript**
- **React Router v7**
- **Chakra UI v3**
- **Axios**
- **MockAPI** — REST mock backend

---

## Getting Started / Inicio

### 1. Clone & install / Clonar e instalar

```bash
git clone https://github.com/your-username/event-dashboard.git
cd event-dashboard
npm install
```

### 2. Set up MockAPI / Configurar MockAPI

1. Create a free account at [mockapi.io](https://mockapi.io)
2. Create a new project and a resource called `events`
3. Define the schema:

> Crea una cuenta en [mockapi.io](https://mockapi.io), un proyecto y un resource llamado `events` con el siguiente schema:

| Field / Campo | Type / Tipo           |
| ------------- | --------------------- |
| `title`       | String                |
| `description` | String                |
| `date`        | String (`YYYY-MM-DD`) |
| `location`    | String                |
| `category`    | String                |
| `capacity`    | Number                |

4. Edit default data for the next JSON / Edita los datos por defecto con el siguiente JSON

```JSON
[
  {
    "title": "Modern Web Development Conference",
    "date": "2025-05-20",
    "location": "Mountain View, California, USA",
    "category": "conference",
    "capacity": 32,
    "description": "A conference focused on modern tools and practices for web developers.",
    "id": "1"
  },
  {
    "title": "Local Developers Meetup",
    "date": "2025-03-15",
    "location": "Austin, Texas, USA",
    "category": "meetup",
    "capacity": 93,
    "description": "An informal meetup for developers to network and share ideas.",
    "id": "2"
  },
  {
    "title": "Hands-on React Workshop",
    "date": "2025-04-12",
    "location": "Toronto, Canada",
    "category": "workshop",
    "capacity": 51,
    "description": "A practical workshop where participants build a React application from scratch.",
    "id": "3"
  },
  {
    "title": "Introduction to Cloud Computing Webinar",
    "date": "2025-06-09",
    "location": "Online",
    "category": "webinar",
    "capacity": 50,
    "description": "An online session explaining the basics of cloud platforms and services.",
    "id": "4"
  },
  {
    "title": "Software Architecture Conference",
    "date": "2025-05-19",
    "location": "Seattle, Washington, USA",
    "category": "conference",
    "capacity": 51,
    "description": "Experts discuss best practices and patterns in modern software architecture.",
    "id": "5"
  },
  {
    "title": "Clean Code Workshop",
    "date": "2025-04-26",
    "location": "Yokohama, Japan",
    "category": "workshop",
    "capacity": 22,
    "description": "A hands-on workshop focused on writing maintainable and readable code.",
    "id": "6"
  },
  {
    "title": "Frontend Developers Meetup",
    "date": "2025-07-10",
    "location": "London, United Kingdom",
    "category": "meetup",
    "capacity": 64,
    "description": "Frontend developers gather to discuss frameworks, tools, and trends.",
    "id": "7"
  },
  {
    "title": "Getting Started with APIs Webinar",
    "date": "2025-08-05",
    "location": "Online",
    "category": "webinar",
    "capacity": 1,
    "description": "A beginner-friendly webinar about designing and consuming APIs.",
    "id": "8"
  },
  {
    "title": "AI and Software Engineering Conference",
    "date": "2025-07-26",
    "location": "Shanghai, China",
    "category": "conference",
    "capacity": 63,
    "description": "A conference exploring how AI is transforming software development.",
    "id": "9"
  },
  {
    "title": "Full Stack Developers Meetup",
    "date": "2025-09-18",
    "location": "Berlin, Germany",
    "category": "meetup",
    "capacity": 84,
    "description": "A meetup for full stack developers to share experiences and best practices.",
    "id": "10"
  }
]
```

5. Your endpoint will look like / Tu endpoint se verá así:

```
https://[your-id].mockapi.io/api/v1/events
```

### 3. Environment variables / Variables de entorno

Create a `.env` file in the root / Crea un archivo `.env` en la raíz:

```bash
VITE_API_BASE_URL=https://[your-id].mockapi.io/api/v1
```

### 4. Run / Correr

```bash
npm run dev
```

---

## Features / Funcionalidades

- List, create, edit and delete events
- Search by title or location
- Form validation
- Responsive layout

> Listar, crear, editar y eliminar eventos — Búsqueda por título o ubicación — Validación de formulario — Layout responsivo

# EventDash

A simplified event management dashboard built with React, TypeScript, and Chakra UI.

> Panel de administración de eventos construido con React, TypeScript y Chakra UI.

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

4. Your endpoint will look like / Tu endpoint se verá así:

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

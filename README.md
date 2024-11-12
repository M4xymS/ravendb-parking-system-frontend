
# Parking Slot Reservation

This project is a parking slot reservation app that allows users to reserve parking spaces in advance, helping to manage parking availability efficiently.



## Tech Stack

**Client:** Typescript, React, Redux, TailwindCSS, React-query, shadcn/ui, framer-motion, zod, react-hook-form, react-router-dom, vite

**Server:** Node, Nestjs, RavenDb


## Features

#### Context Menu
A context menu has been implemented for enhanced interactivity within the parking system. The context menu appears on right-click and provides options for editing, deleting, and viewing specific elements. This feature is available in the following areas:

- **Parking Area:** Right-click to manage or view details of the parking area.
- **Parking Floor (Header Tab):** Right-click on a floor tab in the header to edit, delete, or view floor details.
- **Parking Slot:** Right-click on individual parking slots to access options to edit, delete, or view slot-specific information.

This context menu feature enhances usability by providing quick access to key actions directly within the interface.

## Running the Project Locally

### Step 1: Clone the Repository
To get started, clone the repository to your local machine by running the following command:

```bash
git clone https://github.com/M4xymS/ravendb-parking-system-frontend
```

### Step 2: Navigate to the Project Directory
Change your current working directory to the project folder:

```bash
cd ravendb-parking-system-frontend
```

### Step 3: Install Dependencies
Install all necessary dependencies to build the project. Run:

```bash
npm install
```

### Step 4: Build the Project
Compile the project by running the build command. This prepares the project for production:

```bash
npm run build
```

### Step 5: Preview the Build
To view the built project locally, start the preview server with:

```bash
npm run preview
```

This will serve the optimized build locally so you can test the project as it would run in production.
## Demo

https://ravendb-parking-system-frontend.vercel.app/
## API Reference

#### Get all parking areas

```http
  GET /api/parking-areas
```

#### Get parking area

```http
  GET /api/parking-areas/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of parking area to fetch |

#### Add parking area

```http
  POST /api/parking-areas
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `body`    | `object` | **Required**. Parking area data |

#### Update parking area

```http
  PUT /api/parking-areas/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of parking area to update |
| `body`    | `object` | **Required**. Updated parking area data |

#### Delete parking area

```http
  DELETE /api/parking-areas/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of parking area to delete |

#### Get all parking floors

```http
  GET /api/parking-floors
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `areaId`  | `string` | Id of parking area to filter floors |

#### Get parking floor

```http
  GET /api/parking-floors/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of parking floor to fetch |

#### Add parking floor

```http
  POST /api/parking-floors
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `body`    | `object` | **Required**. Parking floor data |

#### Update parking floor

```http
  PUT /api/parking-floors/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of parking floor to update |
| `body`    | `object` | **Required**. Updated parking floor data |

#### Delete parking floor

```http
  DELETE /api/parking-floors/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of parking floor to delete |

#### Get parking floor status

```http
  GET /api/parking-floors/${areaId}/${floorId}/status
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `areaId`  | `string` | **Required**. Id of parking area |
| `floorId` | `string` | **Required**. Id of parking floor |

#### Add parking slot

```http
  POST /api/parking-slots/${areaId}/${floorId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `areaId`  | `string` | **Required**. Id of parking area |
| `floorId` | `string` | **Required**. Id of parking floor |
| `body`    | `object` | **Required**. Parking slot data |

#### Reserve parking slot

```http
  POST /api/parking-slots/${areaId}/${floorId}/${slotId}/reserve
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `areaId`  | `string` | **Required**. Id of parking area |
| `floorId` | `string` | **Required**. Id of parking floor |
| `slotId`  | `string` | **Required**. Id of parking slot |
| `body`    | `object` | **Required**. Reservation data |

#### Get reservation

```http
  GET /api/parking-slots/reservation/${reservationId}
```

| Parameter         | Type     | Description                       |
| :---------------- | :------- | :-------------------------------- |
| `reservationId`   | `string` | **Required**. Id of reservation |

#### Edit parking slot

```http
  PUT /api/parking-slots/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of parking slot to update |
| `body`    | `object` | **Required**. Updated parking slot data |

#### Delete parking slot

```http
  DELETE /api/parking-slots/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of parking slot to delete |

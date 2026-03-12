# CodeLeap Frontend / Frontend

| Português | English |
|-----------|---------|
| Este é o **frontend** do projeto CodeLeap, desenvolvido com **React**, **Vite** e **Tailwind CSS**. | This is the **frontend** of the CodeLeap project, built with **React**, **Vite**, and **Tailwind CSS**. |

---

## 🔗 Links

| Português | English |
|-----------|---------|
| Frontend: [https://test-codelap-q6t4.onrender.com/](https://test-codelap-q6t4.onrender.com/) | Frontend: [https://test-codelap-q6t4.onrender.com/](https://test-codelap-q6t4.onrender.com/) |
| Backend API: [https://test-codelap.onrender.com/careers/](https://test-codelap.onrender.com/careers/) | Backend API: [https://test-codelap.onrender.com/careers/](https://test-codelap.onrender.com/careers/) |

---

## 📝 Sobre o Login / About the Login

| Português | English |
|-----------|---------|
| O aplicativo possui um formulário de login simples com duas opções: | The app features a simple login form with two options: |
| 1. **Inserção manual de username** — armazena o nome de usuário no `localStorage`. | 1. **Manual username input** — stores the username in `localStorage`. |
| 2. **Login com Google (OAuth)** — utiliza o pacote `@react-oauth/google`. | 2. **Google OAuth login** — uses the `@react-oauth/google` package. |
| ⚠️ Observação: O login com Google **não se conecta a um banco de dados**, pois isso não era um requisito para este teste. Mesmo assim, o login funciona corretamente usando `localStorage`, proporcionando uma experiência de usuário fluida. | ⚠️ Note: The Google login **does not connect to a database**, as it was not required for this test. It still works smoothly using `localStorage`, providing a seamless user experience. |

---

## 🛠 Principais Tecnologias / Key Technologies

| Português | English |
|-----------|---------|
| **React** — biblioteca para construção de interfaces | **React** — UI library |
| **Vite** — ferramenta rápida de build e servidor de desenvolvimento | **Vite** — fast build tool and dev server |
| **Tailwind CSS** — framework de CSS utilitário | **Tailwind CSS** — utility-first styling framework |
| **@tanstack/react-virtual** — renderização virtualizada para a lista de posts (mais eficiente para listas grandes) | **@tanstack/react-virtual** — virtualized rendering for the posts list (efficient for long lists) |
| **React Router DOM** — roteamento no lado do cliente | **React Router DOM** — client-side routing |

---

## ⚡ Funcionalidades / Features

| Português | English |
|-----------|---------|
| Interface responsiva e limpa | Responsive and clean UI |
| Lista de posts virtualizada para melhor performance | Virtualized posts list for better performance |
| Edição e exclusão de posts usando modais | Modal editing and deleting posts |
| Login persistente com `localStorage` | Persistent login with `localStorage` |
| Integração com login Google OAuth | Google OAuth login integration |

---

## 🔧 Backend

| Português | English |
|-----------|---------|
| O **backend** foi desenvolvido utilizando **Django (Python)**, seguindo o padrão e os requisitos especificados no teste. | The **backend** was developed using **Django (Python)**, following the patterns and requirements specified in the test. |
| Ele também está hospedado no **Render** e utiliza um **banco SQLite**. Como o ambiente é efêmero, o banco de dados **é resetado sempre que o backend reinicia**. | It is also hosted on **Render** and uses a **SQLite database**. Since the environment is ephemeral, the database **resets every time the backend restarts**. |
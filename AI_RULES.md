# AI Studio Application Rules

This document outlines the core technologies and library usage guidelines for the application.

## Tech Stack Overview

This application is built using a modern web development stack, focusing on performance, maintainability, and a rich user experience.

*   **React (with TypeScript):** The primary library for building the user interface, ensuring component-based architecture and strong typing for better code quality.
*   **Vite:** The build tool that provides a fast development experience with features like hot module replacement.
*   **Tailwind CSS:** A utility-first CSS framework used for all styling, enabling rapid UI development and consistent design.
*   **Google Gemini API (`@google/genai`):** Integrated for all AI-powered functionalities, including financial advice, transaction parsing, image generation, and general chat.
*   **Lucide React:** A collection of beautiful and customizable open-source icons, used throughout the application for visual elements.
*   **React Markdown:** A library for rendering Markdown content, primarily used in AI chat interfaces to display formatted responses.
*   **Local Storage:** Utilized for client-side data persistence, managing user sessions and storing financial transaction data locally.
*   **Shadcn/ui & Radix UI:** A set of pre-built, accessible, and customizable UI components available for use, though not yet extensively integrated into the current codebase.

## Library Usage Rules

To maintain consistency and leverage the strengths of each library, please adhere to the following guidelines:

*   **UI Development:** Always use **React with TypeScript** for creating new components and pages.
*   **Styling:** All styling must be done using **Tailwind CSS** classes. Avoid custom CSS files or inline styles unless absolutely necessary for dynamic properties.
*   **AI Integration:** All interactions with AI models (chat, image generation, data analysis) must go through the **`@google/genai`** library via the `src/services/geminiService.ts` file.
*   **Icons:** Use icons from **`lucide-react`**. Import them directly into your components.
*   **Markdown Rendering:** When displaying content that might contain Markdown (e.g., AI responses), use **`react-markdown`**.
*   **Routing:** The application currently uses a custom tab-based navigation system within `App.tsx`. If more complex routing is required in the future, **React Router** should be introduced and configured.
*   **UI Components:** For new UI elements, prioritize using components from **Shadcn/ui** and **Radix UI** to ensure accessibility, consistency, and ease of development. Create new components in `src/components/` if a suitable Shadcn/ui component doesn't exist or needs significant customization.
*   **Data Persistence:** For client-side data storage, continue to use **`localStorage`** as demonstrated in `App.tsx`. For server-side data or authentication, consider integrating **Supabase** if needed.
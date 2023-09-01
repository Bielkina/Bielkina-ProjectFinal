import React from "react";
import { useForm } from "react-hook-form"; // Імпортуємо хук для роботи з формами
import "./style.css"; // Імпортуємо стилі компонента

function ContactForm() {
    // Використовуємо хук useForm для роботи з формою
    const {
        register, // Реєстрація полів форми
        handleSubmit, // Обробник події відправки форми
        formState: { errors } // Об'єкт з помилками форми
    } = useForm();

    // Обробник відправки форми
    const onSubmit = (data) => {
        alert(JSON.stringify(data)); // Виводимо дані форми у форматі JSON
    };

    // Відображення компонента форми
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            {/* Поле вводу для імені */}
            <input
                {...register("name", {
                    required: true
                })}
                placeholder="Name"
                className={`form__field ${errors.name ? "error" : ""}`}
            />
            {errors.name?.type === "required" && <p className="error-text">This field is required</p>}

            {/* Поле вводу для електронної пошти */}
            <input
                type="email"
                {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i
                })}
                placeholder="Email"
                className={`form__field ${errors.email ? "error" : ""}`}
            />
            {errors.email?.type === "required" && <p className="error-text">This field is required</p>}
            {errors.email?.type === "pattern" && <p className="error-text">Invalid email format</p>}

            {/* Поле вводу для повідомлення */}
            <textarea
                {...register("message")} // Реєстрація поля для вводу повідомлення
                placeholder="Type something here..."
                className={`form__field form__field-message ${errors.message ? "error" : ""}`}
            />

            {/* Кнопка для відправки форми */}
            <button type="submit" className="form__button">Submit</button>
        </form>
    )
}

export default ContactForm;
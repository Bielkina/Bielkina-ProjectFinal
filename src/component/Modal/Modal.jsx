import React from "react";
import { useForm } from "react-hook-form"; // Імпортуємо хук для роботи з формами
import BtnClose from './iconsClose.svg'; // Імпортуємо іконку закриття
import "./style.css"; // Імпортуємо стилі компонента

function Modal({ onClose }) {
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

    // Відображення компонента модального вікна
    return (
        <div className="modal">
            <div className="modal__content">
                {/* Форма для вводу даних */}
                <form onSubmit={handleSubmit(onSubmit)} className="modal__form">
                    {/* Поле вводу для імені */}
                    <input
                        {...register("name", {
                            required: true
                        })}
                        placeholder="Name"
                        className={`modal__field modal__field-name ${errors.name ? "error" : ""} `}
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
                        className={`modal__field ${errors.email ? "error" : ""}`}
                    />
                    {errors.email?.type === "required" && <p className="error-text">This field is required</p>}
                    {errors.email?.type === "pattern" && <p className="error-text">Invalid email format</p>}

                    {/* Поле вводу для повідомлення */}
                    <textarea
                        {...register("message")} // Реєстрація поля для вводу повідомлення
                        placeholder="Type something here..."
                        className={`modal__field modal__field-message ${errors.message ? "error" : ""}`}
                    />

                    {/* Кнопка для відправки форми */}
                    <button type="submit" className="modal__button">Submit</button>
                </form>

                {/* Кнопка закриття модального вікна */}
                <button className="modal__close" onClick={onClose}>
                    <img className="modal__close-btn" src={BtnClose} alt="Close" />
                </button>
            </div>
        </div>
    )
}

export default Modal;
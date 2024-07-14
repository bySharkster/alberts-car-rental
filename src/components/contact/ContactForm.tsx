"use client";
import React, { useState } from "react";
import Toast from "@/components/toast/toast";
import axios from "axios";

export default function ContactForm() {
  const [showToast, setShowToast] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    text: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("/api/contact/mailgun", formData);

      if (response.status === 200) {
        setMessage("Email sent successfully.");
        setShowToast(true);
        setFormData({
          email: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          text: "",
        });
      }
    } catch (error) {
      setMessage("An error occurred while sending the email.");
      setShowToast(true);
      console.log("An error occurred while sending the email.");
    }
  };

  return (
    <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
      <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
        Información de Contacto
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-4">
          {/* <!-- Grid --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="sr-only">
                Nombre
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                name="firstName"
                id="firstName"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Nombre"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="sr-only">
                Apellido
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                id="lastName"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Apellidos"
                required
              />
            </div>
          </div>
          {/* <!-- End Grid --> */}

          <div>
            <label htmlFor="email" className="sr-only">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="to"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              id="email"
              autoComplete="email"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Correo Electrónico"
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="sr-only">
              Número de Teléfono
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              id="phoneNumber"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Número de Teléfono"
              required
            />
          </div>

          <div>
            <label htmlFor="about" className="sr-only">
              Detalles
            </label>
            <textarea
              name="text"
              value={formData.text}
              onChange={(e) =>
                setFormData({ ...formData, text: e.target.value })
              }
              id="about"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Detalles"
              required
            ></textarea>
          </div>
        </div>
        {/* <!-- End Grid --> */}

        <div className="mt-4 grid">
          <button
            type="submit"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Enviar Información
          </button>
        </div>

        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500">
            Nos pondremos en contacto en 1-2 dias laborables.
          </p>
        </div>
      </form>
      {showToast && (
        <Toast message={message} onClose={() => setShowToast(false)} />
      )}
    </div>
  );
}

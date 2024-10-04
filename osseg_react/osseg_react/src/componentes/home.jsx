import React, { useEffect, useState } from "react";
import { sectors } from "../data";
import LogoutButton from "./LogoutButton";
import logo from "../assets/audifarm_logo.png";
import SectorsGrid from "./SectorsGrid";
import logo1 from "../assets/referentesaudifarm.jpeg";
import logo2 from "../assets/referentesaudifarm2.jpeg";
import logo3 from "../assets/referentesaudifarm3.jpeg";
import logo4 from "../assets/referentesaudifarm4.jpeg";
import logo5 from "../assets/referentesaudifarm5.jpeg";
import logo6 from "../assets/farmaciaaudifarm.jpg";
import logo7 from "../assets/farmaciaaudifarm2.jpg";
import logo8 from "../assets/farmaciaaudifarm3.jpg";

import { BellIcon } from "@heroicons/react/16/solid";

const swPath = "/firebase-messaging-sw.js";

function Home() {
  const [showNotification, setShowNotification] = useState(false);

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  const handleBellClick = () => {
    setShowNotification(!showNotification);
  };

  useEffect(() => {
    // Solicitar permiso para notificaciones
    const requestNotificationPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          console.log("Permiso para notificaciones concedido");
          // Aquí puedes configurar el token de suscripción
          // (Ejemplo: configurar la suscripción al servidor)
        } else {
          console.error("Permiso para notificaciones denegado");
        }
      } catch (error) {
        console.error("Error al solicitar permiso para notificaciones:", error);
      }
    };

    requestNotificationPermission();

    const openButton = document.querySelector(".js-drawer-open");
    const closeButton = document.querySelector("   .js-drawer-close");
    const drawer = document.getElementById("NavDrawer");

    const openDrawer = () => {
      drawer.style.transform = "translateX(0)";
    };

    const closeDrawer = () => {
      drawer.style.transform = "translateX(-100%)";
    };

    openButton.addEventListener("click", openDrawer);
    closeButton.addEventListener("click", closeDrawer);

    return () => {
      openButton.removeEventListener("click", openDrawer);
      closeButton.removeEventListener("click", closeDrawer);
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-lg relative z-20">
        <nav className="flex items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center">
            <button
              type="button"
              className="drawer__toggle-button js-drawer-open"
            >
              <span className="icon icon-menu" aria-hidden="true"></span>
              <span className="icon__fallback-text">Perfil</span>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={handleBellClick} className="relative">
              <BellIcon className="h-6 w-6" aria-hidden="true" />
              {showNotification && (
                <div className="absolute top-8 right-0 bg-white border rounded shadow-lg p-2">
                  <p>¡Tienes una nueva notificación!</p>
                </div>
              )}
            </button>

            <img src={logo} alt="Audifarm Logo" className="h-8" />
          </div>
        </nav>
      </header>
      <div id="NavDrawer" className="drawer drawer--left" tabIndex="-1">
        <div
          id="shopify-section-sidebar-menu"
          className="shopify-section sidebar-menu-section"
        >
          <div
            className="drawer__header"
            data-section-id="sidebar-menu"
            data-section-type="sidebar-menu-section"
          >
            <div className="drawer__close">
              <button
                type="button"
                className="drawer__close-button js-drawer-close"
              >
                <span className="icon icon-x" aria-hidden="true"></span>
                <span className="icon__fallback-text">cerrar</span>
              </button>
            </div>
          </div>
          <div className="drawer__inner">
            <ul className="drawer-nav">
              <li className="drawer-nav__item">
                <a href="#" className="drawer-nav__link">
                  Mi progreso
                </a>
              </li>
              <li className="drawer-nav__item">
                <a href="#" className="drawer-nav__link">
                  Menu Item 2
                </a>
              </li>
              <li className="drawer-nav__item">
                <a href="#" className="drawer-nav__link">
                  Menu Item 3
                </a>
              </li>
              <li className="drawer-nav__item">
                <a href="#" className="drawer-nav__link">
                  Menu Item 4
                </a>
              </li>
            </ul>
            <ul className="list--inline social-icons social-icons--drawer">
              <li>
                <a
                  href="#"
                  className="social-icon social-icon--facebook"
                  aria-label="Facebook"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="social-icon social-icon--twitter"
                  aria-label="Twitter"
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="social-icon social-icon--instagram"
                  aria-label="Instagram"
                ></a>
              </li>
            </ul>
            <ul className="drawer-nav margin-top-50">
              <li className="drawer-nav__item">
                <div className="w-full flex items-center px-4 py-2 text-sm">
                  <LogoutButton className="text-gray-700 group flex items-center w-full" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-6 pt-14 lg:px-8 relative isolate overflow-hidden bg-gray-900">
        <img
          src="https://www.mediasource.mx/hs-fs/hubfs/diez-ejemplos-de-trabajo-en-equipo-efectivos.png?width=950&amp;name=diez-ejemplos-de-trabajo-en-equipo-efectivos.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          style={{ objectPosition: "center 80%" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            left: "calc(50% - 8rem)",
            width: "24rem",
            transform: "translateX(-50%) rotate(30deg)",
          }}
        />
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1
              className="text-4xl font-bold tracking-tight sm:text-6xl inter-custom"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              AudifarmSalud Capacitaciones
            </h1>
            <p
              className="mt-6 text-lg leading-8 text-zinc-800"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              "Cada logro comienza con la decisión de intentarlo"
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6"></div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-9rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-20rem)]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            left: "calc(50% + 1rem)",
            width: "24rem",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      <div className="bg-white pt-6 pb-24 sm:pt-0 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Sectores
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Innnovamos como nunca, nos comprometemos como siempre.
          </p>
        </div>
        <SectorsGrid sectors={sectors} />
      </div>
      <div className="relative flex overflow-x-hidden overflow-y-visible w-auto">
        <div
          className="carrusel-content w-full py-12 lg:py-20 whitespace-nowrap flex flex-row animate-marquee lg:animate-large-marquee"
          style={{ animationPlayState: "running" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="group flex justify-center px-5 min-w-[50%] lg:min-w-[25%] rounded-2xl relative"
            >
              <div className="h-auto relative rounded-2xl overflow-hidden before:-skew-x-12 before:absolute before:inset-0 before:-translate-x-full group-hover:before:animate-[shimmer_1s_forwards] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent transition-all ease-in-out duration-300 rotate-2 group-hover:rotate-[-1deg] group-hover:scale-110 group-hover:shadow-lg lg:group-hover:shadow-2xl">
                <img
                  loading="eager"
                  src={logo}
                  alt={`logo-${index}`}
                  className="aspect-[4/3] h-full w-full flex object-cover rounded-2xl bg-gray-10 dark:bg-gray-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

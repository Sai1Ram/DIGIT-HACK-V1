"use client";

export default function FloatingWhatsapp() {

  const phone = "918144210272";

  const message = `Hi DigIT-Hack Team,
I'm interested in your services.
Can you share more details?`;

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;


  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed
        bottom-20 right-4
        sm:right-5
        lg:bottom-24 lg:right-6

        w-12 h-12
        sm:w-14 sm:h-14
        lg:w-16 lg:h-16

        bg-green-500 hover:bg-green-600
        rounded-full
        flex items-center justify-center
        shadow-lg
        z-50
        transition-all duration-300
        hover:scale-105 active:scale-95
      `}
      aria-label="Chat on WhatsApp"
    >
      <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              className="w-6 h-6 fill-white"
                            >
                              <path d="M16 .4C7.4.4.4 7.3.4 15.9c0 2.8.7 5.5 2.1 7.9L.3 31.7l8.1-2.1c2.3 1.3 4.9 2 7.6 2 8.6 0 15.6-6.9 15.6-15.5C31.6 7.3 24.6.4 16 .4zm0 28.4c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.8 1.3 1.3-4.7-.3-.5c-1.3-2-2-4.3-2-6.7C3 8.7 9 2.7 16 2.7s13 6 13 13.4-6 12.7-13 12.7zm7.4-9.6c-.4-.2-2.4-1.2-2.8-1.3-.4-.2-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.2-.5.3-.9.1-.4-.2-1.7-.6-3.3-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-1-2.3-1.4-3.1-.3-.8-.7-.7-1-.7h-.8c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.2s1.4 3.7 1.6 4c.2.3 2.7 4.1 6.6 5.7.9.4 1.6.6 2.1.8.9.3 1.7.3 2.3.2.7-.1 2.4-1 2.7-2 .3-1 .3-1.8.2-2-.1-.2-.4-.3-.8-.5z" />
                            </svg>
    </a>
  );
}
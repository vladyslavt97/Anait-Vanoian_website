"use client";

import { FormEvent, useState } from "react";
import { IoIosMail, IoIosText } from "react-icons/io";
import Link from "next/link";
import { useLanguage } from "@/libs/zustand";

const contactCopy = {
  e: "Send a note about collaborations, concerts, or studio invitations. I read every message personally.",
  g: "Schreiben Sie mir für Projekte, Konzerte oder Studioanfragen – jede Nachricht erreicht mich direkt.",
};

export default function ContactsPage() {
  const { currentLanguage } = useLanguage();
  const [emailState, setEmailState] = useState("");
  const [messageState, setMessageState] = useState("");
  const [messageSubject, setMessageSubject] = useState("");
  const [sent, setSent] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailTo = `mailto:anait.vanoian@gmail.com?subject=${encodeURIComponent(
      messageSubject
    )}&body=${encodeURIComponent(messageState)} (${encodeURIComponent(emailState)})`;

    window.location.href = mailTo;
    setSent(true);
    setEmailState("");
    setMessageState("");
    setMessageSubject("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 sm:min-h-[98.5vh]">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-5 lg:flex-row lg:items-start">
        <div className="space-y-4 lg:w-1/2">
          <p className="text-[0.65rem] uppercase tracking-[0.4em] text-white/60">
            {currentLanguage === "e" ? "Get in touch" : "Kontakt"}
          </p>
          <h1 className="text-left">
            {currentLanguage === "e" ? "Contacts" : "Kontakte"}
          </h1>
          <p className="text-sm text-white/75">{contactCopy[currentLanguage as "e" | "g"]}</p>
          {sent && (
            <div className="rounded-2xl border border-emerald-300/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100" aria-live="polite">
              {currentLanguage === "e"
                ? "Thank you! Your message has been prepared in your email client."
                : "Vielen Dank! Ihre Nachricht wurde in Ihrem E-Mail-Programm vorbereitet."}
            </div>
          )}
        </div>

        <form className="frosted-panel flex flex-col gap-5 p-6 sm:p-10 lg:w-1/2" onSubmit={sendEmail}>
          <label className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/60">
            Email <IoIosMail />
          </label>
          <input
            type="email"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-amber-200"
            placeholder={
              currentLanguage === "e"
                ? "Provide your email"
                : "Geben Sie Ihre E-Mail-Adresse an"
            }
            value={emailState}
            onChange={(e) => setEmailState(e.target.value)}
            required
          />

          <label className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/60">
            {currentLanguage === "e" ? "Subject" : "Betreff"}
          </label>
          <input
            type="text"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-amber-200"
            placeholder={
              currentLanguage === "e" ? "Enter subject" : "Betreff eingeben"
            }
            value={messageSubject}
            onChange={(e) => setMessageSubject(e.target.value)}
            required
          />

          <label className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/60">
            {currentLanguage === "e" ? "Message" : "Nachricht"} <IoIosText />
          </label>
          <textarea
            className="h-40 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-amber-200"
            placeholder={
              currentLanguage === "e"
                ? "Write your message here"
                : "Schreiben Sie Ihre Nachricht hier"
            }
            value={messageState}
            onChange={(e) => setMessageState(e.target.value)}
            required
          />

          <button className="glow-button w-full justify-center" type="submit">
            {currentLanguage === "e" ? "Send" : "Senden"}
          </button>
        </form>
      </div>

      <p className="pt-12 text-center text-[0.65rem] uppercase tracking-[0.35em]">
        {currentLanguage === "e" ? "Website by" : "Webseite von"}{" "}
        <Link
          href="https://www.facebook.com/vladyslav.tsurkanenko"
          className="text-amber-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vladyslav Tsurkanenko
        </Link>
      </p>
    </div>
  );
}

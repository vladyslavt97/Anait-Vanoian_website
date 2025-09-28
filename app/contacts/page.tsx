"use client";

import { useState } from "react";
import { useLanguage } from "@/libs/zustand";
import { IoIosMail, IoIosText } from "react-icons/io";
import Link from "next/link";

export default function ContactsPage() {
  const currentLanguage = useLanguage((state) => state.currentLanguage);

  const [emailState, setEmailState] = useState("");
  const [messageState, setMessageState] = useState("");
  const [messageSubject, setMessageSubject] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("the log", emailState, messageState, messageSubject);

    const mailTo = `mailto:anait.vanoian@gmail.com?subject=${encodeURIComponent(
      messageSubject
    )}&body=${encodeURIComponent(messageState)} (${encodeURIComponent(
      emailState
    )})`;

    window.location.href = mailTo;

    setEmailState("");
    setMessageState("");
    setMessageSubject("");
  };

  return (
    <div className="min-h-screen sm:min-h-[98.5vh]">
      <h1 className="pt-20 text-center font-sans font-bold">
        {currentLanguage === "e" ? "Contacts" : "Kontakte"}
      </h1>

      <form
        className="flex flex-col justify-center h-[70vh] sm:h-[80vh] m-10 font-sans md:w-[400px] md:mx-auto"
        onSubmit={sendEmail}
        id="myForm"
      >
        {/* Email */}
        <label className="w-16 flex flex-row items-center gap-2 text-gray-500">
          Email <IoIosMail />
        </label>
        <input
          type="text"
          className="rounded"
          placeholder={
            currentLanguage === "e"
              ? "provide your email"
              : "Geben Sie Ihre E-Mail-Adresse an"
          }
          name="user_name"
          value={emailState}
          onChange={(e) => setEmailState(e.target.value)}
        />

        {/* Subject */}
        <label className="w-16 flex flex-row items-center gap-2 text-gray-500">
          {currentLanguage === "e" ? "Subject" : "Thema"}
        </label>
        <input
          type="text"
          className="rounded"
          placeholder={
            currentLanguage === "e" ? "enter subject" : "Betreff eingeben"
          }
          name="subject"
          value={messageSubject}
          onChange={(e) => setMessageSubject(e.target.value)}
        />

        {/* Message */}
        <label className="mt-10 w-24 flex flex-row items-center gap-1 text-gray-500">
          {currentLanguage === "e" ? "Message" : "Nachricht"} <IoIosText />
        </label>
        <textarea
          className="rounded h-40"
          placeholder={
            currentLanguage === "e"
              ? "write your message here"
              : "Schreibe deine Nachricht hier"
          }
          name="user_email"
          value={messageState}
          onChange={(e) => setMessageState(e.target.value)}
        />

        {/* Submit */}
        <button
          className="bg-gray-300 rounded-lg mt-2"
          type="submit"
          value="Send"
        >
          {currentLanguage === "e" ? "Send" : "Schicken"}
        </button>
      </form>

      <h5 className="text-xs font-serif text-center py-10">
        The website is made by{" "}
        <Link
          href="https://www.facebook.com/vladyslav.tsurkanenko"
          className="italic text-blue-900"
        >
          Vladyslav Tsurkanenko
        </Link>
      </h5>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/libs/zustand"; // Zustand store
import emailjs from "@emailjs/browser";
import { IoIosMail, IoIosText } from "react-icons/io";
import Link from "next/link";

export default function EmailPage() {
  const currentLanguage = useLanguage((state) => state.currentLanguage);

  const [emailState, setEmailState] = useState("");
  const [messageState, setMessageState] = useState("");
  const [messageSubject, setMessageSubject] = useState("");
  const [sent, setSent] = useState(false);

  const [myObj, setMyObj] = useState<{
    YOUR_SERVICE_ID?: string;
    YOUR_TEMPLATE_ID?: string;
    YOUR_PUBLIC_KEY?: string;
  }>({});

  // fetch envs from API
  useEffect(() => {
    const fetchEnv = async () => {
      try {
        const response = await fetch("/api/email");
        if (response.ok) {
          const data = await response.json();
          setMyObj(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchEnv();
  }, []);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!myObj.YOUR_SERVICE_ID || !myObj.YOUR_TEMPLATE_ID || !myObj.YOUR_PUBLIC_KEY) {
      console.error("EmailJS config missing!");
      return;
    }

    try {
      await emailjs.sendForm(
        myObj.YOUR_SERVICE_ID,
        myObj.YOUR_TEMPLATE_ID,
        e.currentTarget,
        myObj.YOUR_PUBLIC_KEY
      );
      setSent(true);
      setEmailState("");
      setMessageState("");
      setMessageSubject("");
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error("FAILED...", error);
    }
  };

  return (
    <div className="min-h-screen sm:min-h-[98.5vh]">
      <h1 className="pt-20 text-center font-sans font-bold">
        {currentLanguage === "e" ? "Contacts" : "Kontakte"}
      </h1>

      {sent && (
        <div className="text-center mt-3">
          <h1 className="rounded bg-green-300/10 text-green-800 text-center">
            {currentLanguage === "e"
              ? "Your message was sent"
              : "Ihre Nachricht wurde gesendet"}
          </h1>
        </div>
      )}

      <form
        className="flex flex-col justify-center h-[70vh] sm:h-[80vh] m-10 font-sans md:w-[400px] md:mx-auto"
        onSubmit={sendEmail}
      >
        {/* Email */}
        <label
          htmlFor="email"
          className="w-16 flex flex-row items-center gap-2 text-gray-500"
        >
          Email <IoIosMail />
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={emailState}
          onChange={(e) => setEmailState(e.target.value)}
          className="rounded"
          placeholder={
            currentLanguage === "e"
              ? "provide your email"
              : "Geben Sie Ihre E-Mail-Adresse an"
          }
          required
        />

        {/* Name */}
        <label
          htmlFor="name"
          className="w-16 flex flex-row items-center gap-2 text-gray-500 mt-2"
        >
          {currentLanguage === "e" ? "Name" : "Name"}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={messageSubject}
          onChange={(e) => setMessageSubject(e.target.value)}
          className="rounded"
          placeholder={
            currentLanguage === "e"
              ? "enter your name"
              : "Geben Sie Ihren Namen ein"
          }
          required
        />

        {/* Message */}
        <label
          htmlFor="message"
          className="mt-10 w-24 flex flex-row items-center gap-1 text-gray-500"
        >
          {currentLanguage === "e" ? "Message" : "Nachricht"}
          <IoIosText />
        </label>
        <textarea
          id="message"
          name="message"
          value={messageState}
          onChange={(e) => setMessageState(e.target.value)}
          className="rounded h-40"
          placeholder={
            currentLanguage === "e"
              ? "write your message here"
              : "Schreibe deine Nachricht hier"
          }
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="bg-gray-300 rounded-lg mt-2 py-1"
        >
          {currentLanguage === "e" ? "Send" : "Schicken"}
        </button>
      </form>

      <h5 className="text-xs font-serif text-center py-10">
        The website is made by{" "}
        <Link
          href="https://www.facebook.com/vladyslav.tsurkanenko"
          className="italic text-blue-900"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vladyslav Tsurkanenko
        </Link>
      </h5>
    </div>
  );
}

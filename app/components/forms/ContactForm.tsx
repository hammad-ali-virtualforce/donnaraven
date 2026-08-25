"use client";

import {
  FormEvent,
  useState,
} from "react";

type FormStatus = {
  type: "success" | "error" | null;
  message: string;
};

export default function ContactForm() {

  const [loading, setLoading] =
    useState(false);

  const [status, setStatus] =
    useState<FormStatus>({
      type: null,
      message: "",
    });


  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {

    event.preventDefault();

    setLoading(true);

    setStatus({
      type: null,
      message: "",
    });


    const form =
      event.currentTarget;

    const formData =
      new FormData(form);


    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };


    try {

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/donna/v1/contact`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(data),
        }
      );


      const result =
        await response.json();


      if (!response.ok) {

        throw new Error(
          result.message ||
          "Something went wrong."
        );
      }


      setStatus({
        type: "success",
        message:
          result.message ||
          "Thank you. Your message has been sent.",
      });


      form.reset();

    } catch (error) {

      setStatus({
        type: "error",

        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });

    } finally {

      setLoading(false);

    }
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="w-full"
    >

      <div className="grid gap-8 md:grid-cols-2">

        {/* NAME */}

        <div>
          <label
            htmlFor="name"
            className="
              mb-3
              block
              font-mulish
              text-[11px]
              uppercase
              tracking-[0.15em]
            "
          >
            Name *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            className="
              w-full
              border-0
              border-b
              border-current/40
              bg-transparent
              px-0
              py-3
              font-mulish
              outline-none
              transition-colors
              focus:border-current
            "
          />
        </div>


        {/* EMAIL */}

        <div>
          <label
            htmlFor="email"
            className="
              mb-3
              block
              font-mulish
              text-[11px]
              uppercase
              tracking-[0.15em]
            "
          >
            Email *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            className="
              w-full
              border-0
              border-b
              border-current/40
              bg-transparent
              px-0
              py-3
              font-mulish
              outline-none
              transition-colors
              focus:border-current
            "
          />
        </div>


        {/* PHONE */}

        <div className="md:col-span-2">

          <label
            htmlFor="phone"
            className="
              mb-3
              block
              font-mulish
              text-[11px]
              uppercase
              tracking-[0.15em]
            "
          >
            Phone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            className="
              w-full
              border-0
              border-b
              border-current/40
              bg-transparent
              px-0
              py-3
              font-mulish
              outline-none
              transition-colors
              focus:border-current
            "
          />

        </div>


        {/* MESSAGE */}

        <div className="md:col-span-2">

          <label
            htmlFor="message"
            className="
              mb-3
              block
              font-mulish
              text-[11px]
              uppercase
              tracking-[0.15em]
            "
          >
            Message *
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="
              w-full
              resize-none
              border-0
              border-b
              border-current/40
              bg-transparent
              px-0
              py-3
              font-mulish
              outline-none
              transition-colors
              focus:border-current
            "
          />

        </div>

      </div>


      <div className="mt-10">

        <button
          type="submit"
          disabled={loading}
          className="
            inline-flex
            min-w-[180px]
            items-center
            justify-center
            border
            border-current
            px-8
            py-4
            font-mulish
            text-[11px]
            uppercase
            tracking-[0.18em]
            transition-all
            duration-300
            hover:bg-[#0b2f53]
            hover:text-white
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {loading
            ? "Sending..."
            : "Submit"}
        </button>

      </div>


      {status.message && (

        <p
          className={`
            mt-6
            font-mulish
            text-sm
            ${
              status.type === "error"
                ? "text-red-700"
                : "text-green-800"
            }
          `}
        >
          {status.message}
        </p>

      )}

    </form>
  );
}
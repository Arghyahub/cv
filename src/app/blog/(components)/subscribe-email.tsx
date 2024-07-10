"use client";
import { cn } from "@/lib/utils";
import { Send, Check, MailWarning } from "lucide-react";
import React, { useState } from "react";

type Props = {
  styleTw?: string;
};

interface FormValues {
  target: {
    email: HTMLInputElement;
    submit: HTMLButtonElement;
  };
}

const SubscribeEmail = ({ styleTw = "" }: Props) => {
  const [Sent, setSent] = useState(0);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> & FormValues
  ) => {
    e.preventDefault();
    e.target.submit.disabled = true;
    e.target.submit.style.color = "gray";
    try {
      const email = e.target.email.value;
      const res = await fetch(
        "https://my-server-tau.vercel.app/blog/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      if (res.ok) setSent(1);
      else setSent(-1);
    } catch (error) {
      setSent(-1);
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col border-slate-500 mt-3 p-2 border rounded-md w-full",
        styleTw
      )}
    >
      <h1 className="font-medium">Subscribe to upcoming blogs</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row gap-2 px-1 py-2 w-full"
      >
        <input
          name="email"
          type="email"
          className="border-slate-500 px-2 py-1 border rounded-sm w-full focus:outline-none"
        />
        <button
          name="submit"
          type="submit"
          className="font-bold text-cyan-600 focus:outline-none"
        >
          {Sent === 1 ? (
            <Check className="text-green-400" />
          ) : Sent == 0 ? (
            <Send />
          ) : (
            <MailWarning className="text-red-500" />
          )}
        </button>
      </form>
    </div>
  );
};

export default SubscribeEmail;

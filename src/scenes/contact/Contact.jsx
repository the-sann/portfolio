import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

import { email, z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Name field is require"),
  email: z.string().email("Invalid email"),
  message: z.string().optional(),
});

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_vs4ejr9",
        "template_wibklvp",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "Ui_C27HQBKwxDb6wL",
      );
      alert("Message Sent!");
      reset();
    } catch (error) {
      console.log("backend error", error);
    }
  };
  return (
    <div id="contact">
      <div className="flex flex-col justify-center items-center pt-20 pb-20">
        <p className="text-4xl font-heading ">Contact</p>
        <div className="w-20 h-1 bg-yellow-500 mt-3"></div>
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-center flex-col gap-4 w-full max-w-3xl p-8  border border-gray-200 rounded-xl shadow-lg"
        >
          {/* Name */}
          <div className="flex gap-2 flex-col">
            <label htmlFor="">Name</label>
            <input
              {...register("name")}
              type="text"
              className="border border-gray-300 rounded-md p-3"
            />

            <p className="text-red-400">{errors.name?.message}</p>
          </div>
          {/* email */}
          <div className="flex gap-2 flex-col">
            <label htmlFor="">Email</label>
            <input
              type="email"
              {...register("email")}
              className="border border-gray-300 rounded-md p-3"
            />

            <p className="text-red-400">{errors.email?.message}</p>
          </div>
          {/* message */}
          <div className="flex gap-2 flex-col">
            <label htmlFor="">Message</label>
            <textarea
              {...register("message")}
              rows="4"
              className="border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
            <p className="text-red-400">{errors.message?.message}</p>
          </div>
          {/* button submit */}
          <div className="flex gap-2 flex-col mt-4">
            <button
              type="submit"
              className="cursor-pointer px-8 py-3 rounded-md border border-gray-300 hover:bg-yellow-500 hover:text-white transition"
            >
              Send Me
            </button>
          </div>
        </form>
      </div>
      {/* <div className="flex justify-center">
        <form
          action=""
          className="w-full max-w-lg space-y-6 border border-gray-200 rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-6">
            <label htmlFor="" className="w-24 text-xl">
              Name
            </label>
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-md p-2 "
            />
          </div>
          <div className="flex items-center gap-6">
            <label htmlFor="" className="w-24 text-xl">
              Email
            </label>
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-md p-2 "
            />
          </div>
          <div className="flex items-center gap-6">
            <label htmlFor="" className="w-24 text-xl">
              Message
            </label>
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-md p-2 "
            />
          </div>
          <div className="flex justify-end mt-4">
            <button className="cursor-pointer px-8 py-3 rounded-md border border-gray-300 hover:bg-yellow-500 hover:text-white transition">
              Send Me
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
}

export default Contact;

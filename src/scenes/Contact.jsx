import LineGradient from "../components/LineGradient";
import {useForm} from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
    const { register, trigger, formState: { errors } } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault()
        }
    }

    return (
        <section id="contact" className="py-48 mb-20">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                    }}
                    className="flex justify-center md:flex md:justify-start w-full"
                >
                    <div>
                        <p className="flex font-silkscreen text-4xl">
                            <span className="">🪲CONTACT ME🪲</span>
                        </p>
                        <div className="flex md:justify-end my-5">
                            <LineGradient width="mx-auto w-4/5" />
                        </div>
                    </div>
                </motion.div>
            <div className="flex flex-col justify-center">
                <div className="flex justify-center md:flex md:justify-start gap-16 mt-5">
                    <motion.div
                        className="basis-1/2 flex justify-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        > 
                        <img src="../assets/beans.jpg" alt="beans" className="border border-purple" />
                    </motion.div>
                </div>
                <div className="flex justify-center md:flex md:justify-start w-full mt-5">
                    <motion.div
                        className="basis-1/2 mt-10 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        > 
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/063b0aa5ae08251841384982dd3b73f3"
                            method="POST"
                            className=""
                        >
                            <input
                                className="w-full text-dark-blue font-semibold placeholder-opaque-black p-3"
                                type="text"
                                name="name"
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                                />
                            {errors.name && (
                                <p className="text-red mt-1">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "Max length is 100 char."}
                                </p>
                            )}

                            <input
                                className="w-full text-dark-blue font-semibold placeholder-opaque-black p-3 mt-5"
                                type="email"
                                name="email"
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                                />
                            {errors.email && (
                                <p className="text-red mt-1">
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "pattern" && "Invalid email address."}
                                </p>
                            )}

                            <textarea
                                className="w-full text-dark-blue font-semibold placeholder-opaque-black p-3 mt-5"
                                name="message"
                                placeholder="MESSAGE"
                                rows="4"
                                cols="50"
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                                />
                            {errors.message && (
                                <p className="text-red mt-1">
                                    {errors.message.type === "required" &&
                                    "This field is required."}
                                    {errors.message.type === "maxLength" &&
                                    "Max length is 2000 char."}
                                </p>
                            )}

                            <button
                                className="p-5 bg-purple font-silkscreen mt-5 hover:bg-lavender hover:text-white transition duration-500"
                                type="submit"
                                >
                                SEND ME A MESSAGE
                            </button>
                        </form>
                    </motion.div>
                    </div>
                </div>
        </section>
    )
}

export default Contact;
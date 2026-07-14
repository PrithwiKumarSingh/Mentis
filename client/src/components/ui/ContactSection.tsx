import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
      py-10
      px-2
      md:px-6
      transition-colors
      duration-300
    "
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        viewport={{ once: true }}
        className="
        max-w-4xl
        mx-auto
        rounded-3xl
        p-4
        md:p-10

        bg-white
        border
        border-gray-200
        shadow-xl

        dark:bg-white/5
        dark:backdrop-blur-xl
        dark:border-white/10
        dark:shadow-[0_20px_60px_rgba(0,0,0,.45)]
      "
      >
        {/* Heading */}

        <div className="text-center">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
            We'd love to hear from you.
          </p>
        </div>

        {/* Form */}

        <form className="mt-4 md:mt-12 space-y-6">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="
                mt-2
                w-full
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                py-3
                outline-none
                transition

                focus:border-[#614DEE]
                focus:ring-2
                focus:ring-[#614DEE]/20

                dark:bg-white/5
                dark:border-white/10
                dark:text-white
                dark:placeholder:text-gray-500
              "
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="
                mt-2
                w-full
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                py-3
                outline-none
                transition

                focus:border-[#614DEE]
                focus:ring-2
                focus:ring-[#614DEE]/20

                dark:bg-white/5
                dark:border-white/10
                dark:text-white
                dark:placeholder:text-gray-500
              "
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Subject
            </label>

            <input
              type="text"
              placeholder="How can we help?"
              className="
              mt-2
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              py-3
              outline-none
              transition

              focus:border-[#614DEE]
              focus:ring-2
              focus:ring-[#614DEE]/20

              dark:bg-white/5
              dark:border-white/10
              dark:text-white
              dark:placeholder:text-gray-500
            "
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>

            <textarea
              rows={4}
              placeholder="Tell us more about your inquiry..."
              className="
              mt-2
              w-full
              resize-none
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              py-3
              outline-none
              transition

              focus:border-[#614DEE]
              focus:ring-2
              focus:ring-[#614DEE]/20

              dark:bg-white/5
              dark:border-white/10
              dark:text-white
              dark:placeholder:text-gray-500
            "
            />
          </div>

          <button
            className="
            w-full
            rounded-xl
            bg-[#614DEE]
            py-4
            text-lg
            font-semibold
            text-white
            transition-all

            hover:scale-[1.02]
            hover:bg-[#4F3BD8]
            active:scale-100
          "
          >
            Send Message
          </button>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            We typically respond within 24 hours.
          </p>

        </form>
      </motion.div>
    </section>
  );
}
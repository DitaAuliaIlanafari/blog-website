import ContactForm from "@/components/Contact/ContactForm";
import LottieAnimation from "@/components/Contact/LottieAnimation";

export default function Contact() {
  return (
    <section className="w-full h-auto md:h-[75vh] mt-10 border-t-2 border-b-2 border-solid border-dark flex flex-col md:flex-row items-center justify-center text-dark">
      <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-solid border-dark p-10">
        <LottieAnimation />
      </div>
      <div className="w-full md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pt-8 pb-8">
        <h2 className="font-semibold capitalize text-2xl xs:text-3xl sm:text-4xl">
          Lets Connect!
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}

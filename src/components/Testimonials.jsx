import Testimony from "./Testimony"

const Testimonials = ({testimonies}) => {
  return (
    <section className="min-h-screen flex sm:flex-row flex-col justify-between items-start sm:px-24 px-6 gap-6 pt-16">
        {testimonies.map((testimony, index) => (
            <Testimony key={index} testimony={testimony} />
            ))}
    </section>
  )
}

export default Testimonials

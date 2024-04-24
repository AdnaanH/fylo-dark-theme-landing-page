import Testimony from "./Testimony"

const Testimonials = ({testimonies}) => {
  return (
    <section className="sm:min-h-screen min-h-96 flex sm:flex-row flex-col justify-between items-start sm:px-24 px-6 gap-6 sm:pt-16 pt-8 sm:mb-0 mb-8">
        {testimonies.map((testimony, index) => (
            <Testimony key={index} testimony={testimony} />
            ))}
    </section>
  )
}

export default Testimonials

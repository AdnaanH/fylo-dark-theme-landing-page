import Card from "./Card"
import Access from '../assets/icon-access-anywhere.svg'
import collaboration from '../assets/icon-collaboration.svg'
import anyFile from '../assets/icon-any-file.svg'
import security from '../assets/icon-security.svg'

const Features = () => {
  return (
    <section className="min-h-screen flex flex-wrap justify-between items-start sm:px-32 px-4">
        <Card>
            <img src={Access} alt="" />
            <h1 className="text-white font-bold mt-6 text-2xl">Access your files, anywhere</h1>
            <p className="text-xl text-center text-white font-normal sm:w-11/12 w-full">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
        </Card>
        <Card>
            <img src={security} alt="" />
            <h1 className="text-white font-bold mt-6 text-2xl">Security you can trust</h1>
            <p className="text-xl text-center text-white font-normal w-11/12">2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
        </Card>
        <Card>
            <img src={collaboration} alt="" />
            <h1 className="text-white font-bold mt-6 text-2xl">Real-time collaboration</h1>
            <p className="text-xl text-center text-white font-normal w-11/12">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        </Card>
        <Card>
            <img src={anyFile} alt="" />
            <h1 className="text-white font-bold mt-6 text-2xl">Store any type of file</h1>
            <p className="text-xl text-center text-white font-normal w-11/12">Whether you are sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
        </Card>

    </section>
  )
}

export default Features

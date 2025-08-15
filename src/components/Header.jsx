
import { AnimatePresence, motion, spring } from "framer-motion"
import { useState } from "react"
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiMenu, FiX } from "react-icons/fi"
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen)

    // state to track contact form 
    const [contactFormOpen, setContactFormOpen] = useState(false);
    const openContactForm = () => setContactFormOpen(true);
    const closeContactForm = () => setContactFormOpen(false);

    return (


        <header className="fixed bg-blue-900 w-full z-50 
                        transition-all duration-300 ">

            <div className=" mx-auto container px-4 sm:px-6 lg:px-8
                                    flex items-center justify-between
                                    h-16 ">

                {/*logo*/}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                        delay: 0.4,
                        duration: 1.2,
                    }}

                    className="flex  space-x-2 items-center">

                   
                        <img className=" mt-2 h-10 w-15 rounded-xl object-contain " src="headerlogo.svg" alt="premchanddev" />

                    

                    <span className="text-xl font-bold bg-white  bg-clip-text text-transparent
                         ">
                        Premchand-dev</span>


                </motion.div>


                {/* DEsktop navigation*/}
                <nav className="lg:flex hidden  space-x-8">
                    {["Home", "About", "MyWork & Experince"].map((item,
                        index) => {
                           
                            const linkTarget = `#${item.toLowerCase()}`
                            return(
                        <motion.a
                            key={item}
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                delay: 0.7 + index * 0.2,

                            }}
                            className="relative group text-gray-800 dark:text-gray-200 
                                        hover:blue-600 dark:hover:text-blue-400 font-medium
                                        transition-colors duration-300 "
                            href= {linkTarget}>
                            {item}

                            <span className="absolute bottom-0 left-0 w-0 h-0.5
                                            bg-blue-600 group-hover:w-full transition-all
                                            duration-300"></span>

                        </motion.a>
                            )
                        })}
                </nav>

                {/*social icons desktop*/}
                <div className="md:flex hidden items-center space-x-4">
                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.9 }}
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600
                                    dark:hover:text-blue-400 transition-colors duration-300 " 
                                    href="https://github.com/premchand505"
                                    target="_blank"
                                    rel="noopener noreferrer">
                        <FiGithub className="w-5 h-5" />
                    </motion.a>


                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.9 }}
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600
                                    dark:hover:text-blue-400 transition-colors duration-300 "
                                    href="https://www.linkedin.com/in/gpremchand"
                                    target="_blank"
                                    rel="noopener noreferrer">
                        <FiLinkedin className="w-5 h-5" />
                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.9 }}
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600
                                    dark:hover:text-blue-400 transition-colors duration-300 " 
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer">
                        <FiTwitter className="w-5 h-5" />
                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.9 }}
                        className="text-gray-700 dark:text-gray-300  hover:text-blue-600
                                    dark:hover:text-blue-400 transition-colors duration-300 " 
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer">
                        <FiInstagram className="w-5 h-5" />
                    </motion.a>


                    {/*Hire me button*/}
                    <motion.button
                        onClick={openContactForm}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 1.6,
                            duration: 0.8,
                            stiffness: 100,
                            damping: 15,
                        }}

                        className="ml-4 px-4 py2 h-10 rounded-md bg-gradient-to-r
       from-gray-400 to-gray-100 text-black font-bold
       hover:scale-105 
       transition-all duration-500"
                    >Hire Me</motion.button>
                </div>

                {/*mobile icon button*/}
                <div className="md:hidden  flex items-center">
                    <motion.button
                        whileTap={{ scale: 0.7 }}
                        onClick={toggleMenu}
                        className="text-gray-300">
                        {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                    </motion.button>
                </div>

            </div>
            {/*mobile menu*/}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    height: isOpen ? "auto" : 0,
                }}
                className="md:hidden overflow-hidden mt-5 bg-gray-600 dark:bg-gray-900 shadow-lg
                       pg-4 py-5 space-y-5">
                <nav className="flex flex-col space-y-3">
                {["Home", "About", "MyWork & Experince"].map((item) => {
                        const linkTarget =`#${item.toLowerCase()}`
                        return(

                        <a onClick={toggleMenu} className="text-gray-300 font-medium py-2"
                         key={item} href={linkTarget}>
                            {item}
                        </a>
                    )})}


                </nav>
                <div className="pt-4 border-t border-gray-200 
                        dark:border-gray-700">
                    <div className="flex space-x-7">
                        <a href="https://github.com/premchand505">
                            <FiGithub className="h-5 w-5 text-gray-300" />
                        </a>
                         <a href="https://www.linkedin.com/in/gpremchand">
                            <FiLinkedin className="h-5 w-5 text-gray-300" />
                        </a>
                        <a href="#">
                            <FiTwitter className="h-5 w-5 text-gray-300" />
                        </a>
                        <a href="#">
                            <FiInstagram className="h-5 w-5 text-gray-300" />
                        </a>
                    </div>
                    <button
                        onClick={() => {
                            toggleMenu()
                            openContactForm()
                        }}
                        className="mt-4 block w-full px-4 py-2
                            rounded-lg bg-gradient-to-r from-blue-600 
                            to-blue-400 font-bold">
                        Contact Me</button>
                </div>
            </motion.div>

            <AnimatePresence>
                {/*contact form*/}
                {contactFormOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className=" fixed inset-0 bg-black/50 background-blur-sm
                        z-50 flex items-center justify-center p-4"

                    >
                        <motion.div


                            initial={{ scale: 0.8, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 30 }}
                            transition={{
                                type: "spring",
                                damping: 30,
                                stiffness: 200
                            }}
                            className="bg-gray-900 dark:bg-gray-800 rounded-xl
                             shadow-xl w-full max-w-md p-6">

                            <div className="flex justify-between items-center mb-4">
                                <h1 className=" text-2xl font-bold text-white">
                                    Get In Touch</h1>
                                <button onClick={closeContactForm}>
                                    <FiX className="w-5 h-5 text-white font-extrabold" />
                                </button>
                            </div>
                            {/* input form*/}
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block
                                 text-sm font-medium text-gray-600 mb-1">
                                        Name
                                    </label>
                                    <input type="text"
                                        id="name"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-2 border
                                     border-gray-600 rounded-lg focus:ring-2
                                        focus:ring-blue-600
                                        focus:border-blue-500 bg-gray-700"/>
                                </div>


                                <div>
                                    <label htmlFor="email" className="block
                                     text-sm font-medium text-gray-600 mb-1">
                                        Email
                                    </label>
                                    <input type="email"
                                        id="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-2 border
                                                   border-gray-600 rounded-lg focus:ring-2
                                           focus:ring-blue-600
                                                focus:border-blue-500 bg-gray-700"/>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block
                                   text-sm font-medium text-gray-600 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        rows="4"
                                        id="message"
                                        placeholder="How can we help you?"
                                        className="w-full px-4 py-2 border
                                      border-gray-600 rounded-lg focus:ring-2
                                       focus:ring-blue-600
                                       focus:border-blue-500 bg-gray-700"/>
                                </div>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="w-full px-4 py-2 bg-gradient-to-r
                                  from-blue-600 to-blue-400
                                   hover:to-blue-700 transition-all duration-300 rounded-lg shadow-md
                                      hover:shadow-lg  hover:shadow-blue-600/50">Send Message</motion.button>

                            </form>

                        </motion.div>
                    </motion.div>

                )}
            </AnimatePresence >
        </header >
    )
}

export default Header
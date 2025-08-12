
import { motion } from "framer-motion"
const Herosection = () => {
  return (
    
    <section className="h-screen bg-gradient-to-b
    from-violet-900 to-black flex xl:flex-row
    flex-col-reverse items-center justify-between
    lg:px-24 px-10 relative overflow-hidden">

<div>
    <motion.h1 
    initial={{opacity:0, y:80}}
    animate={{opacity:1, y:0}}
    transition={{
        type:"spring",
        damping:25,
        stiffness:40,
        delay:1.3,
        duration:1.5,
    }}
    className="text-5xl md:text-7xl
    lg:text-8xl font-bold z-10 mb-6">
        Building Fast <br/> Reliable Results
    </motion.h1>

    <motion.h2
    initial={{opacity:0, y:80}}
    animate={{opacity:1, y:0}}
    transition={{
        type:"spring",
        damping:25,
        stiffness:40,
        delay:1.5,
        duration:1.5,
    }}
    className=" text-4xl md:text-4xl lg:text-5xl
    font-medium z-10 mt-5 mb-5">
    Hi, I'm PremChand
    </motion.h2>

    <motion.p 
    initial={{opacity:0, y:80}}
    animate={{opacity:1, y:0}}
    transition={{
        type:"spring",
        damping:25,
        stiffness:40,
        delay:1.7,
        duration:1.5,
    }}
    className="text-2xl font-light ">
    I'm a passionate developer specializing in web development,<br/> creating user-friendly and innovative solutions.
    With expertise in React, Vite, <br/>and modern JavaScript, I build responsive and dynamic applications to solve real-world problems.  
      </motion.p>
</div>

    </section>
  )
}

export default Herosection
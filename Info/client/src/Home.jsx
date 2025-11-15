import React from 'react'
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Welcome to Kalolwala!
            </motion.div>
        </div>
    )
}

export default Home
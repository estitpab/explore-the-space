import { Link } from "gatsby"
import React from "react"
import styles from "./header.module.scss"

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Link to="/">Voyager</Link>
    </div>
    <nav>
      <Link to="/news">News</Link>
      <Link to="/observing">Observing</Link>
      <Link to="/resources-education">Resources & Education</Link>
      <Link to="/community">Community</Link>
      <Link to="/about-us">About us</Link>
    </nav>

  </header>
)

export default Header

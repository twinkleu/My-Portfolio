import React from 'react'
import { AiFillGithub, AiFillInstagram, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div>
      {/*}  <img 
         src={"https://avatars.githubusercontent.com/u/25058652"}
  alt="Founder"/> */}
         <h2>Twinkle Upadhyay</h2>
         <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>
        <article>
            <a href="https://instagram.com/twinkleupadhyay.02?igshid=ZDdkNTZiNTM=" target={"blank"}> <AiFillInstagram /> </a>
            <a href="https://github.com/twinkleu" target={"blank"}> <AiFillGithub /></a>
        </article>
      </aside>

      <a href="#home">
        <AiOutlineArrowUp />
      </a>

    </footer>
  )
}

export default Footer

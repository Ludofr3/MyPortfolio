
const Footer = () => {

  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="flex gap-2 ">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon">
          <a className="w-1/2 h-1/2" href="https://github.com/Ludofr3" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.svg" alt="github" />
          </a>
        </div>
        <div className="social-icon">
          <a className="w-1/2 h-1/2" href="https://www.linkedin.com/in/ludovic-de-chavagnac" target="_blank" rel="noopener noreferrer">
            <img src="/assets/linkedin.png" alt="linkedin" />
          </a>
        </div>
        {/* <div className="social-icon">
          <img src="/assets/instagram.svg" alt="github" className="w-1/2 h-1/2" />
        </div> */}
      </div>
      <p >© 2024 Ludovic. All rights reserved</p>
    </section>
  )
}

export default Footer
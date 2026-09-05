import { baseUrl } from '../config';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 border-t border-black-300">
      <div className="max-w-7xl mx-auto c-space py-3 flex items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="hidden sm:flex items-center gap-2 text-white-600 shrink-0">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="social-icon">
            <a className="w-1/2 h-1/2" href="https://github.com/Ludofr3" target="_blank" rel="noopener noreferrer">
              <img src={`${baseUrl}assets/social_network/github.svg`} alt="github" />
            </a>
          </div>
          <div className="social-icon">
            <a className="w-1/2 h-1/2" href="https://www.linkedin.com/in/ludovic-de-chavagnac" target="_blank" rel="noopener noreferrer">
              <img src={`${baseUrl}assets/social_network/linkedin.png`} alt="linkedin" />
            </a>
          </div>
        </div>
        <p className="text-white-600 text-right min-w-0 truncate">© 2024 Ludovic. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer

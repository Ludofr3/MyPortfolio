import Globe from "react-globe.gl"
import { useState } from "react"
import Button from "../components/Button"
import { baseUrl } from '../config';
import PropTypes from 'prop-types';

const About = ({ setCurrentSection }) => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('ludovicdechavagnac@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000)
  }
  return (
    <section className="c-space mt-20 mb-5" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">

          <div className="grid-container">
            <img src={`${baseUrl}assets/about/profile.png`} alt="profile" className="w-full sm:h-[205px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I&apos;m Ludovic</p>
              <p className="grid-subtext">Software Engineer based in France, recently graduated and passionate about building clean, scalable solutions to complex problems. Through rigorous academic training and hands-on project experience, I have built a versatile technical stack across various languages and frameworks. Adaptable and proactive, I thrive both in collaborative teams and autonomously, and I am currently seeking new full-time opportunities.</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src={`${baseUrl}assets/about/hello_world.png`} alt="hello world" className="w-full sm:h-[205px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Technical Arsenal</p>
              <ul className="grid-subtext">
                <li>
                  <strong>Versioning :</strong> GitHub, GitLab, Bitbucket
                </li>
                <li>
                  <strong>Langages :</strong> C, C++, Rust, Python, Bash, Assembleur, Haskell, Typst
                </li>
                <li>
                  <strong>Web & Mobile :</strong> PHP, CSS, SCSS, HTML, SQL, React Native, Three.js, Angular, Typescript, Prisma, Nuxtjs, GraphQL
                </li>
                <li>
                  <strong>Systèmes & DevOps :</strong> Linux, Docker, Kubernetes, Jenkins, Ansible
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full max-w-[240px] mx-auto aspect-square flex justify-center items-center overflow-hidden">
              <Globe
                height={240}
                width={240}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                animateIn={false}
                rendererConfig={{ antialias: true, alpha: true, devicePixelRatio: 1 }}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotly accross most timezones.
              </p>
              <p className="grid-subtext">
                I&apos;m based in France, with remote work avaible.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" onClick={() => setCurrentSection('#Contact')} />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <div>
              <p className="grid-headtext">My Tech Vision</p>
              <p className="grid-subtext">For me, development is an opportunity to constantly learn and grow. I love exploring new languages and technologies, understanding how they work, and using them to create effective solutions. My aim is to continue to evolve in a constantly changing field, while bringing my rigor and creativity to every project.</p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? `${baseUrl}assets/tools/tick.svg` : `${baseUrl}assets/tools/copy.svg`} alt="copy" />
                <p className="lg:text-2xl md:text-xl text-white break-all">ludovicdechavagnac@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

About.propTypes = {
  setCurrentSection: PropTypes.func,
};

export default About

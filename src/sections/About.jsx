import Globe from "react-globe.gl"
import { useState } from "react"
import Button from "../components/Button"

const About = () => {
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
            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[205px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I'm Ludovic</p>
              <p className="grid-subtext">4th year student developer with solid experience in software development. Based in France, I'm passionate about solving complex problems and creating innovative solutions. After four years of intensive learning, I have acquired an in-depth mastery of many languages and technologies, and am ready to take on new challenges in my 5th year and beyond. Flexible and adaptable, I work both in teams and independently.</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/hello_world.png" alt="grid-2" className="w-full sm:h-[205px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Technical Arsenal</p>
              {/* <p className="grid-subtext"> */}
              <ul className="grid-subtext">
                <li>
                  <strong>Versioning :</strong> GitHub, GitLab, Bitbucket
                </li>
                <li>
                  <strong>Langages :</strong> Assembleur, Haskell, C, C++, Rust, Python, Bash
                </li>
                <li>
                  <strong>Web & Mobile :</strong> PHP, CSS, SCSS, HTML, SQL, React Native, Three.js, Angular
                </li>
                <li>
                  <strong>Systèmes & DevOps :</strong> Linux, Docker, Kubernetes, Jenkins, Ansible
                </li>
              </ul>
              {/* </p> */}
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[226px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotly accross most timezones.
              </p>
              <p className="grid-subtext">
                I'm based in France, with remote work avaible.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            {/* <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[276px] h-fit object-contain" /> */}
            <div>
              <p className="grid-headtext">My Tech Vision</p>
              <p className="grid-subtext">For me, development is an opportunity to constantly learn and grow. I love exploring new languages and technologies, understanding how they work, and using them to create effective solutions. My aim is to continue to evolve in a constantly changing field, while bringing my rigor and creativity to every project.</p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            {/* <img src="/assets/grid4.png" alt="grid-4" className="w-full sm:h-[126px] h-fit object-cover sm:object-top" /> */}
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl text-white">ludovicdechavagnac@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
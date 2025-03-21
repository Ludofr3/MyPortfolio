import { workExperiences } from "../constants"
import { useState } from "react"
import { baseUrl } from '../config';

const Experience = () => {
  const [animationName, setAnimationName] = useState("Idle");
  return (
    <section className="c-space my-20" id="experience">
      <div className="w-full text-white-600">
        <h3 className="head-text">My Work Experience</h3>
        <div className="work-container">
          <div className="work-canvas">
            {/* <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas> */}
            <img src={`${baseUrl}assets/work/My_Work_Experience.svg`} alt="work experience" className="w-full h-full" />
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(({ id, name, pos, icon, duration, title, animation }, index) => (
                // <div key={id} className="work-content_container group" onClick={() => setAnimationName(animation.toLocaleLowerCase())} onPointerOver={() => setAnimationName(animation.toLocaleLowerCase())} onPointerOut={() => setAnimationName('idle')}>
                <div key={id} className="work-content_container group">
                  <div className="flex flex-col h-full justify-start item-center py-2">
                    <div className="work-content_logo">
                      <img src={icon} alt="logo" className="w-full h-full" />
                    </div>
                    <div className="work-content_bar" />
                  </div>
                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{name}</p>
                    <p className="text-sm mb-5">{pos} - {duration}</p>
                    <p className="group-hover:text-white transition ease-in-out duration-500">{title}</p>
                  </div>
                  <div />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
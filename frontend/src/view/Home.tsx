import Avatar from "../components/Avatar"
import IconCard from "../components/cards/IconCard"
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex flex-col items-center justify-center px-4 py-16 md:py-20 pt-20 md:pt-24 pb-28 md:pb-12 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-8 md:gap-12 relative z-10">
        {/* Avatar Section */}
        <div className="mb-4 md:mb-0 transform hover:scale-105 transition-transform duration-300">
          <Avatar size="big" />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center max-w-lg text-center md:text-left">
          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-200 leading-tight">
            Marius ROLLAND-PESLIER
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-blue-200/80 mb-2 font-medium">
            Développeur Full-Stack
          </p>

          <p className="text-base md:text-lg text-blue-200/80 mb-8 font-medium">
            Paris, France
          </p>

          {/* Description */}
          <p className="text-sm md:text-base text-white/70 leading-relaxed mb-8 max-w-md">
            Passionné par le développement moderne. Je crée des expériences
            numériques performantes avec des technologies fiables.
          </p>

          {/* Social Links */}
          <div className="flex gap-3 md:gap-4 justify-center md:justify-start items-center">
            <div className="flex gap-3">
              <IconCard icon={faGithub} color="gray" onClick={() => {}} />
              <IconCard icon={faLinkedin} color="blue" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

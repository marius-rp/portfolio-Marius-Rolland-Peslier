import { faReact } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react"
import ProjectCard from "../components/cards/ProjectCard"
import InformativePopUp from "../components/popUp/InformativePopUp"
import {
  faRocket,
  faCode,
  faPalette,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons"

interface Project {
  id: number
  title: string
  description: string
  imageGradient: string
  icon: any
  technologies: string[]
  details?: string
  link?: string
}

const Projets: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Personnel",
      description:
        "Portfolio moderne et responsive showcasant mes projets et compétences avec React et Tailwind CSS.",
      imageGradient: "from-blue-500 to-cyan-600",
      icon: faPalette,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      details:
        "Un portfolio moderne conçu avec React et Tailwind CSS, mettant en avant une design épuré et une excellente expérience utilisateur.",
      link: "#",
    },
    {
      id: 2,
      title: "Application E-Commerce",
      description:
        "Plateforme e-commerce complète avec panier, paiement et gestion des stocks en temps réel.",
      imageGradient: "from-purple-500 to-pink-600",
      icon: faCode,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      details:
        "Application full-stack avec React frontend et Node.js backend, intégration Stripe pour les paiements.",
      link: "#",
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description:
        "Dashboard interactif affichant des données en temps réel avec graphiques et statistiques avancées.",
      imageGradient: "from-green-500 to-teal-600",
      icon: faDatabase,
      technologies: ["React", "Chart.js", "API REST", "PostgreSQL"],
      details:
        "Dashboard puissant permettant la visualisation et l'analyse de données complexes avec des graphiques en temps réel.",
      link: "#",
    },
    {
      id: 4,
      title: "Application Todo Collaborative",
      description:
        "Application de gestion de tâches collaborative avec synchronisation en temps réel entre utilisateurs.",
      imageGradient: "from-orange-500 to-red-600",
      icon: faRocket,
      technologies: ["React", "Socket.io", "Node.js", "Firebase"],
      details:
        "Application collaborative permettant à plusieurs utilisateurs de travailler ensemble sur des listes de tâches.",
      link: "#",
    },
    {
      id: 5,
      title: "Système de Gestion de Blog",
      description:
        "Plateforme de blog avec authentification, création d'articles et système de commentaires avancé.",
      imageGradient: "from-indigo-500 to-purple-600",
      icon: faCode,
      technologies: ["React", "GraphQL", "Node.js", "PostgreSQL"],
      details:
        "Blog complet avec authentification utilisateur, édition d'articles et système de commentaires en temps réel.",
      link: "#",
    },
    {
      id: 6,
      title: "Application Météo",
      description:
        "Application météo utilisant une API externe avec géolocalisation et prévisions détaillées.",
      imageGradient: "from-blue-400 to-blue-700",
      icon: faReact,
      technologies: ["React", "API OpenWeather", "Geolocation", "Charts"],
      details:
        "Application météo moderne avec prévisions détaillées, localisation automatique et interface intuitive.",
      link: "#",
    },
  ]

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsOpen(true)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Mes Projets
              </h1>
              <p className="text-sm md:text-base text-blue-200/70 mt-1">
                Découvrez mes réalisations
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              icon={project.icon}
              imageGradient={project.imageGradient}
              technologies={project.technologies}
              buttonText="Voir le projet"
              onButtonClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Details PopUp */}
      {isOpen && selectedProject && (
        <InformativePopUp
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={selectedProject.title}
          variant="gradient"
          size="large"
        >
          <div className="space-y-4">
            <div>
              <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-2">
                À propos
              </p>
              <p className="text-white/80">{selectedProject.details}</p>
            </div>

            <div>
              <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-2">
                Technologie
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/30 border border-blue-400/40 text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.link && (
              <button className="w-full mt-4 px-4 py-3 rounded-lg bg-blue-500/80 hover:bg-blue-500 text-white font-semibold text-sm uppercase tracking-wider shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 transition-all active:scale-95">
                Visiter le projet
              </button>
            )}
          </div>
        </InformativePopUp>
      )}
    </div>
  )
}

export default Projets

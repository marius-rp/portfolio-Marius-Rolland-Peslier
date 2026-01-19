import React, { useState } from 'react';

// --- Configuration du Référentiel ---
const REFERENTIEL = [
  { id: "G1", titre: "Gérer le patrimoine informatique", couleur: "bg-slate-700", items: ["Recenser et identifier les ressources numériques", "Exploiter des référentiels, normes et standards", "Mettre en place et vérifier les niveaux d’habilitation", "Vérifier les conditions de la continuité d’un service", "Gérer des sauvegardes", "Vérifier le respect des règles d’utilisation"] },
  { id: "G2", titre: "Répondre aux incidents", couleur: "bg-blue-700", items: ["Collecter, suivre et orienter des demandes", "Traiter des demandes réseau, système, applicatifs", "Traiter des demandes concernant les applications"] },
  { id: "G3", titre: "Développer la présence en ligne", couleur: "bg-emerald-700", items: ["Valorisation de l'image sur les médias numériques", "Référencer les services et mesurer la visibilité", "Participer à l'évolution d'un site Web"] },
  { id: "G4", titre: "Travailler en mode projet", couleur: "bg-amber-700", items: ["Analyser les objectifs et l'organisation du projet", "Planifier les activités", "Évaluer les indicateurs de suivi et analyser les écarts"] },
  { id: "G5", titre: "Mettre à disposition un service", couleur: "bg-rose-700", items: ["Réaliser les tests d'intégration et d'acceptation", "Déployer un service", "Accompagner les utilisateurs"] },
  { id: "G6", titre: "Organiser son développement pro", couleur: "bg-indigo-700", items: ["Mettre en place son environnement d'apprentissage", "Outils et stratégies de veille informationnelle", "Gérer son identité professionnelle", "Développer son projet professionnel"] }
];

// --- Données Prédéfinies issues de votre fichier ---
const DONNEES_TABLEAU = [
  {
    section: "Réalisation en cours de formation (1ère année)",
    projets: [
      { titre: "Outil d'inventaire dynamique (HTML/JS/JSON)", date: "14/11/24 - 20/01/25", activeIndices: [2, 5] },
      { titre: "Projet Python : Mini jeu de course", date: "27/11/24 - 13/12/24", activeIndices: [3, 5] },
      { titre: "Projet Java : Jeu Pokemon CLI", date: "10/06/25 - 24/06/25", activeIndices: [4, 5] },
    ]
  },
  {
    section: "Réalisation en milieu professionnel (1ère année)",
    projets: [
      { titre: "GPCM : Ticketing & Déploiement", date: "11/11/24 - 12/04/25", activeIndices: [0, 1, 4] },
      { titre: "DEMANDE RH : Gestion de contrats", date: "02/04/25 - 02/09/25", activeIndices: [0, 1, 3, 4] },
      { titre: "Site TEE : Intranet entreprise", date: "10/06/25 - 29/08/25", activeIndices: [0, 2, 3] },
    ]
  },
  {
    section: "Réalisation en cours de formation (2ème années)",
    projets: [
      { titre: "GPCM : Ticketing & Déploiement", date: "11/11/24 - 12/04/25", activeIndices: [0, 1, 4] },
      { titre: "DEMANDE RH : Gestion de contrats", date: "02/04/25 - 02/09/25", activeIndices: [0, 1, 3, 4] },
      { titre: "Site TEE : Intranet entreprise", date: "10/06/25 - 29/08/25", activeIndices: [0, 2, 3] },
    ]
  }
];

const Tableau = () => {
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen text-[11px] font-sans">
      <div className="max-w-[1400px] mx-auto bg-white shadow-sm border border-black">
        
        {/* En-tête Administratif */}
        <div className="grid grid-cols-2 p-4 border-b border-black bg-white">
          <div className="space-y-1">
            <h1 className="font-bold text-sm uppercase">BTS Services Informatiques aux Organisations</h1>
            <p>NOM et Prénom : <span className="font-bold">Marius Rolland-Peslier</span></p>
            <p>Centre de formation : <span className="font-bold">UTEC Emerainville</span></p>
          </div>
          <div className="text-right space-y-1">
            <h2 className="font-bold text-sm uppercase">Tableau de synthèse - Session 2026</h2>
            <p>Option : <span className="font-bold text-blue-700">SLAM</span></p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-white uppercase text-center">
                <th className="bg-gray-100 text-gray-800 border border-black p-2 w-1/4 text-left font-bold">Réalisations professionnelles</th>
                <th className="bg-gray-100 text-gray-800 border border-black p-2 w-32 font-bold">Période</th>
                {REFERENTIEL.map((domain) => (
                  <th 
                    key={domain.id}
                    className={`${domain.couleur} border border-black p-2 relative cursor-help hover:brightness-110 transition-all`}
                    onMouseEnter={() => setHoveredDomain(domain.id)}
                    onMouseLeave={() => setHoveredDomain(null)}
                  >
                    <div className="px-1 leading-tight">{domain.titre}</div>
                    
                    {/* PopUp Détail (Mineures) */}
                    {hoveredDomain === domain.id && (
                      <div className="absolute top-full left-0 z-50 w-64 p-3 bg-gray-900 text-white rounded-b shadow-xl text-left normal-case font-normal border-t-2 border-white">
                        {domain.items.map((item, idx) => (
                          <div key={idx} className="mb-2 flex gap-2 items-start">
                            <span className="text-blue-400">▸</span>
                            <span className="text-[10px]">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {DONNEES_TABLEAU.map((section, sIdx) => (
                <React.Fragment key={sIdx}>
                  {/* Titre de Section */}
                  <tr className="bg-gray-200 border-y border-black">
                    <td colSpan={8} className="px-3 py-1.5 font-bold uppercase italic text-gray-700">
                      {section.section}
                    </td>
                  </tr>
                  
                  {/* Lignes de projets */}
                  {section.projets.map((proj, pIdx) => (
                    <tr key={pIdx} className="border-b border-black h-12 hover:bg-gray-50">
                      <td className="px-3 py-1 font-medium border-r border-black">{proj.titre}</td>
                      <td className="px-3 py-1 text-center border-r border-black text-gray-600">{proj.date}</td>
                      {REFERENTIEL.map((_, domainIdx) => (
                        <td key={domainIdx} className="border-r border-black text-center p-0">
                          {proj.activeIndices.includes(domainIdx) ? (
                            <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 font-black border border-blue-300 rounded text-xs">X</span>
                          ) : null}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
              
              {/* Lignes vides décoratives pour le look Excel */}
              {[...Array(3)].map((_, i) => (
                <tr key={i} className="h-10 border-b border-black">
                  <td className="border-r border-black"></td>
                  <td className="border-r border-black"></td>
                  {[...Array(6)].map((_, j) => <td key={j} className="border-r border-black text-center"></td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3 bg-gray-50 text-[9px] text-gray-500 italic">
          Note : Survolez l'en-tête d'une compétence majeure pour voir le détail des critères d'évaluation.
        </div>
      </div>
    </div>
  );
};

export default Tableau;
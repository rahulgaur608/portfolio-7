import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Participant - Agile Job Simulation",
    company: "JPMorgan Chase & Co.",
    location: "Virtual",
    responsibilities: [
      "Completed tasks in Agile methodologies, including backlog refinement, user stories, and sprint retrospectives",
      "Engaged in daily standups and collaborated on sprint reviews",
      "Developed skills in Scrum practices and team collaboration"
    ]
  },
  {
    title: "Participant - Software Engineering Job Simulation",
    company: "Blackbird",
    location: "Virtual",
    responsibilities: [
      "Collaborated with teams on GitHub for software development projects and assessed cloud infrastructure",
      "Contributed to sprint retrospectives and open-source projects",
      "Gained hands-on experience in software engineering and cloud technologies"
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-[#163828]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">Experience</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((experience) => (
            <Card key={experience.title} className="bg-[#1C4532] border-white/10">
              <CardHeader>
                <CardTitle className="text-white">{experience.title}</CardTitle>
                <p className="text-white/80">{experience.company}</p>
                <p className="text-white/60">{experience.location}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-white/80">
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


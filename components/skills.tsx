import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Technical Skills",
    skills: ["Machine Learning", "Deep Learning", "Programming (Python, R)", "Data Analysis", "Natural Language Processing (NLP)", "Computer Vision"]
  },
  {
    title: "Cloud Services",
    skills: ["AWS", "Google Cloud", "Azure", "Cloud Computing", "Infrastructure Management"]
  },
  {
    title: "Frontend Developer",
    skills: ["HTML/CSS", "JavaScript (ES6+)", "Responsive design", "API integration (RESTful, GraphQL)"]
  },
  {
    title: "Data Transformation & Analysis",
    skills: ["Analytical Techniques", "Transformation", "Complex Analysis", "Digital Transformation", "Strengthening Data Integrity"]
  },
  {
    title: "Software Quality & Testing",
    skills: ["Software Quality", "End-to-End Testing", "Performance optimization", "Usability Testing", "Attention to Detail"]
  },
  {
    title: "Collaboration & Leadership",
    skills: ["UX Design", "Product Development", "Technical Information Sharing", "Workshops", "Demos", "Talent Development"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-[#163828]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-[#1C4532] border-white/10">
              <CardHeader>
                <CardTitle className="text-white">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-white/80">{skill}</li>
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


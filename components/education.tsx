import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const certifications = [
  "Online Certifications in AI and Data Science, Coursera and edX",
  "Certification in Agile Methodologies, JP Morgan",
  "Certification in GitHub Collaboration, Blackbird",
  "Certification in Regression Analysis, Google"
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">Education & Certifications</h2>
        
        <Card className="bg-[#1C4532] border-white/10 mb-10">
          <CardHeader>
            <CardTitle className="text-white">Babu Banarsi Das University, Lucknow, India</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80">B.Tech, Artificial Intelligence</p>
            <p className="text-white/60 mt-2">Relevant Coursework:</p>
            <p className="text-white/80">Deep Learning, Machine Learning, Natural Language Processing, Computer Vision, Data Structures and Algorithms</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1C4532] border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              {certifications.map((certification) => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "E-Commerce Customer Segmentation and Recommendation System",
    description: "Developed a machine learning-based system to segment customers and provide personalized recommendations using Python."
  },
  {
    title: "Image Classification using Deep Learning",
    description: "Developed an image classification model using CNNs with TensorFlow and Keras, achieving 95% accuracy on a dataset of 10,000 images."
  },
  {
    title: "AI-Powered Customer Segmentation and Recommendation System",
    description: "Developed an AI solution using Python and TensorFlow, boosting customer retention by 20% and cross-selling by 15% through personalized recommendations, deployed on AWS for scalability and efficiency.",
    location: "Bengaluru, India",
    date: "Aug 2024 - Present"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="bg-[#1C4532] border-white/10">
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">{project.description}</p>
                {project.location && (
                  <div className="mt-4 text-white/60">
                    <p>{project.location}</p>
                    <p>{project.date}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


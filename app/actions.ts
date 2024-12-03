'use server'

export async function downloadCV() {
  // This would typically fetch from a storage service
  // For now, we'll return a static PDF URL
  return {
    url: '/Rahul_Gour_CV.pdf',
    filename: 'Rahul_Gour_CV.pdf'
  }
}


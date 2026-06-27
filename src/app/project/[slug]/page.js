import { allProjects } from '../../../data/projects';
import ProjectClient from './ProjectClient';

// Pre-generate static routes if doing a static export
export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate SEO metadata for each project page
export function generateMetadata({ params }) {
  const project = allProjects.find((p) => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found | Pynthamil',
    };
  }
  
  return {
    title: `${project.title} | Pynthamil`,
    description: project.desc,
    openGraph: {
      title: `${project.title} | Pynthamil`,
      description: project.desc,
      url: `https://pynthamil.com/project/${project.slug}`,
      images: [
        {
          url: project.img,
          width: 1200,
          height: 630,
          alt: project.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Pynthamil`,
      description: project.desc,
      images: [project.img],
    },
  };
}

export default function ProjectPage() {
  return <ProjectClient />;
}

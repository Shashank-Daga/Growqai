import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Blog {
  id: string;
  title: string;
  image: string;
  category?: string;
  content: string;
}

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

// Server-side only functions
export function getAllBlogs(): Blog[] {
  // Ensure the directory exists
  if (!fs.existsSync(blogsDirectory)) {
    console.warn(`Blogs directory not found: ${blogsDirectory}`);
    return [];
  }

  // Get all MDX files
  const fileNames = fs.readdirSync(blogsDirectory);

  const blogs = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const id = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Parse frontmatter
      const { data, content } = matter(fileContents);

      return {
        id,
        title: data.title || 'Untitled',
        image: data.image || '/Blogs/default.png',
        category: data.category,
        content,
      };
    })
    .sort((a, b) => {
      // Sort by numeric ID if possible, otherwise alphabetically
      const aNum = parseInt(a.id, 10);
      const bNum = parseInt(b.id, 10);
      
      if (!isNaN(aNum) && !isNaN(bNum)) {
        return aNum - bNum;
      }
      
      return a.id.localeCompare(b.id);
    });

  return blogs;
}

export function getBlogById(id: string): Blog | null {
  try {
    const fullPath = path.join(blogsDirectory, `${id}.mdx`);

    if (!fs.existsSync(fullPath)) {
      console.warn(`Blog not found: ${fullPath}`);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id,
      title: data.title || 'Untitled',
      image: data.image || '/Blogs/default.png',
      category: data.category,
      content,
    };
  } catch (error) {
    console.error(`Error reading blog ${id}:`, error);
    return null;
  }
}

// Helper to get blogs without content (lighter for client components)
export function getAllBlogsMetadata(): Omit<Blog, 'content'>[] {
  const blogs = getAllBlogs();
  return blogs.map(({ content: _, ...metadata }) => metadata);
}

import { prisma } from "$lib/prisma";
import type { Actions, PageLoad } from "./$types";

export async function load({ params }) : PageLoad {
  const id = params.post_id;
  const post = await prisma.post.findUnique({
    where: { id: parseInt(id) }
  });

  return { post: post }
}

export const actions : Actions = {
  savePost: async ({ request }) => {
    const data = await request.formData();
    const id = data.get("id");
    const title = data.get("title");
    const content = data.get("content");
    const published = data.get("published");

    const post = await prisma.post.update({
      where: { id: parseInt(id) },
      data: {
        title: title,
        content: content,
        published: (published === "on")
      }
    });

    await prisma.$disconnect();
    return { post: post }
  },
  deletePost: async ({ request }) => {

  }
}

import { prisma } from "$lib/prisma";
import type { Actions, PageLoad } from "./$types";

export async function load({ params }) : PageLoad {
  const id = params.slug;
  const post = await prisma.post.findUnique({
    where: { id: parseInt(id) }
  });

  return { post: post }
}

export const actions : Actions = {
   
}

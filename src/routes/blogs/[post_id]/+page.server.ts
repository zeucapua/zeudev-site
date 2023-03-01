import { prisma } from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export async function load({ params }) : PageServerLoad {
  const id = params.post_id;
  const post = await prisma.post.findUnique({
    where: { id: parseInt(id) }
  });
  console.log("blog", { post });

  return { post }
}

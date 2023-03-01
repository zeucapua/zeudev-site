import { prisma } from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export async function load() : PageServerLoad {
  const posts = await prisma.post.findMany();
  await prisma.$disconnect();
  console.log("load", { posts });
  return { posts };
}

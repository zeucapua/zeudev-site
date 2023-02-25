import { prisma } from "$lib/prisma";
import { ADMIN_SECRET } from "$env/static/private";
import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export async function load({ cookies }) : PageServerLoad {
  const sessionid = cookies.get("sessionid");
  if (sessionid === "false") {
    return { sessionid: sessionid };
  }
  const posts = await prisma.post.findMany();
  return { sessionid: sessionid, posts: posts };
}


export const actions : Actions = {
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    const secret = data.get("secret");
    
    cookies.set("sessionid", secret === ADMIN_SECRET, {
      maxAge: 60 * 60,
    });
    throw redirect(302, "/admin");
  },
  logout: async ({ cookies }) => {
    cookies.set("sessionid", false);
    throw redirect(302, "/");
  },
  createBlog: async ({ request }) => {
    const data = await request.formData();
    const title = data.get("title");
    const post = await prisma.post.create({
      data: { title: title }
    }); 
    throw redirect(302, `/admin/${post.id}`)
  },
  deleteBlog: async ({ request }) => {
    const data = await request.formData();
    const id = data.get("id");

    const response = await prisma.post.delete({
      where: { id: id }
    });
  }
}

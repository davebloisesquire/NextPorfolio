import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default async function handle(req, res) {
    const {id} = req.query
    const intId = parseInt(id)
    
    try {
        const blogPost = await prisma.blogPost.findUnique({
            where: {
                id: intId
            }
        })
        res.json(blogPost)
    } catch (error) {
        console.log("Woops")
        console.error(error);
    }
}
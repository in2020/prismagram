import {prisma} from '../../../../hello-world/generated/prisma-client';

export default {
    Query: {
       seeFullPost: async (_, args) => {
           const { id } = args;
           const post = await prisma.post({id})
           const comments = await prisma.post({id}).comments();
           const likeCount = prisma.likesConnection({
               where : {post: { id }}
           }).aggregate().count();

           return { post, comments, likeCount }
       }
    }
}
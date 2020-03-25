import {prisma} from '../../../../hello-world/generated/prisma-client';

export default {
    Query: {
       seeFullPost: async (_, args) => {
           const { id } = args;
           return prisma.post({id})
       }
    }
}
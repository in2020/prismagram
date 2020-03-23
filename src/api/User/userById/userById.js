import {prisma} from '../../../../hello-world/generated/prisma-client';

export default {
    Query:{
        userById: async (_, args) => {
            const {id} = args;
            return await prisma.user({id});
        }
    }
}